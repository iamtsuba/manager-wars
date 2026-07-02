import{s as T,F as mi,h as Pt,j as Ki,l as at,i as An,k as zn,b as Ln}from"./formation-links-DJC25wD7.js";const Sn="/manager-wars/";function zi(e,{navigate:t,toast:i}){let a="login";const c=()=>{var s,d,p,n,o,f;const l=a==="login";e.innerHTML=`
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
        <img src="${Sn}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(s=document.getElementById("tab-login-btn"))==null||s.addEventListener("click",()=>{a="login",c()}),(d=document.getElementById("tab-reg-btn"))==null||d.addEventListener("click",()=>{a="register",c()}),l?((p=document.getElementById("login-password"))==null||p.addEventListener("keydown",v=>{var w;v.key==="Enter"&&((w=document.getElementById("login-btn"))==null||w.click())}),(n=document.getElementById("login-btn"))==null||n.addEventListener("click",async()=>{const v=document.getElementById("login-email").value.trim(),w=document.getElementById("login-password").value,A=document.getElementById("login-error");if(A.textContent="",!v||!w){A.textContent="Remplissez tous les champs.";return}const r=document.getElementById("login-btn");r.textContent="⏳ Connexion…",r.disabled=!0;const{error:u}=await T.auth.signInWithPassword({email:v,password:w});if(r.textContent="⚽ Se connecter",r.disabled=!1,u){A.textContent=u.message.includes("Invalid")?"Email ou mot de passe incorrect.":u.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",v=>{var w;v.key==="Enter"&&((w=document.getElementById("reg-btn"))==null||w.click())}),(f=document.getElementById("reg-btn"))==null||f.addEventListener("click",async()=>{const v=document.getElementById("reg-email").value.trim(),w=document.getElementById("reg-password").value,A=document.getElementById("reg-confirm").value,r=document.getElementById("reg-error");if(r.textContent="",!v||!w||!A){r.textContent="Remplissez tous les champs.";return}if(w.length<6){r.textContent="Mot de passe trop court (min. 6 caractères).";return}if(w!==A){r.textContent="Les mots de passe ne correspondent pas.";return}const u=document.getElementById("reg-btn");u.textContent="⏳ Création…",u.disabled=!0;const{error:I}=await T.auth.signUp({email:v,password:w});if(u.textContent="🚀 Créer mon compte",u.disabled=!1,I){r.textContent=I.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),a="login",c(),setTimeout(()=>{const z=document.getElementById("login-email");z&&(z.value=v)},50)}))};c()}function In(e,{state:t,navigate:i,toast:a,refreshProfile:c}){let l="#1A6B3C",s="#D4A017";e.innerHTML=`
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
  `;function d(){var A;const n=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),f=((A=document.getElementById("setup-club"))==null?void 0:A.value)||"MW",v=f.trim().split(" ").filter(Boolean),w=v.length>=2?(v[0][0]+v[1][0]).toUpperCase():f.slice(0,2).toUpperCase();n&&(n.style.background=s,n.style.borderColor=l),o&&(o.textContent=w,o.style.color=l)}document.getElementById("color1").addEventListener("input",n=>{l=n.target.value,document.getElementById("swatch1").style.background=l,d()}),document.getElementById("color2").addEventListener("input",n=>{s=n.target.value,document.getElementById("swatch2").style.background=s,d()});function p(n){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${n}`).classList.add("active"),document.getElementById("step-num").textContent=n,document.getElementById("progress-fill").style.width=`${Math.round(n/3*100)}%`,n===3&&d()}document.getElementById("step1-next").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",n.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:f}=await T.from("users").select("id").eq("pseudo",n).maybeSingle();if(f){o.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const n=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",n.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:f}=await T.from("users").select("id").eq("club_name",n).maybeSingle();if(f){o.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),f=document.getElementById("step3-error"),v=document.getElementById("step3-finish");f.textContent="",v.disabled=!0,v.textContent="Création en cours…";try{const{error:w}=await T.from("users").insert({id:t.user.id,pseudo:n,club_name:o,club_color1:l,club_color2:s,credits:1e4});if(w)throw w;await Mn(t.user.id),await c(),a(`Bienvenue ${n} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(w){f.textContent=w.message,v.disabled=!1,v.textContent="🚀 Créer mon profil !"}})}async function Mn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await T.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Cn="modulepreload",jn=function(e){return"/manager-wars/"+e},Li={},xi=function(t,i,a){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));c=Promise.allSettled(i.map(p=>{if(p=jn(p),p in Li)return;Li[p]=!0;const n=p.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${o}`))return;const f=document.createElement("link");if(f.rel=n?"stylesheet":Cn,n||(f.as="script"),f.crossOrigin="",f.href=p,d&&f.setAttribute("nonce",d),document.head.appendChild(f),n)return new Promise((v,w)=>{f.addEventListener("load",v),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return c.then(s=>{for(const d of s||[])d.status==="rejected"&&l(d.reason);return t().catch(l)})},Bt="#1A6B3C",Dt="#cc2222",qn="#D4A017",Si="#888";async function Fn(e,t){const{state:i,toast:a}=t;e.innerHTML=`
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
    </div>`,await Yi(i,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Dn(i,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Wi(i,a,null,t))}async function Yi(e,t,i={}){const{navigate:a}=i,c=e.user.id,{data:l,error:s}=await T.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${c},addressee_id.eq.${c}`),{count:d}=await T.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",c).eq("status","pending"),p=document.getElementById("pending-badge");p&&(d>0?(p.style.display="flex",p.textContent=d):p.style.display="none");const n=document.getElementById("friends-list");if(!n)return;if(s){console.error("[Friends] Erreur:",s),n.innerHTML=`<div style="color:${Dt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const o=(l||[]).map(w=>w.requester_id===c?w.addressee_id:w.requester_id);let f={};if(o.length){const{data:w}=await T.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(w||[]).forEach(A=>{f[A.id]=A})}const v=(l||[]).map(w=>({friendshipId:w.id,friend:f[w.requester_id===c?w.addressee_id:w.requester_id]||{pseudo:"?"}}));if(!v.length){n.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}n.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${v.length} ami${v.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${v.map(({friendshipId:w,friend:A})=>Bn(A,w)).join("")}
    </div>`,n.querySelectorAll("[data-stats]").forEach(w=>{w.addEventListener("click",()=>Gn(e,w.dataset.stats,w.dataset.friendName))}),n.querySelectorAll("[data-match]").forEach(w=>{w.addEventListener("click",()=>{const A=w.dataset.friendId,r=w.dataset.friendName;console.log("[Friends] clic match",{fid:A,fname:r,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:A,friendName:r}):t("Erreur navigation","error")})})}function Bn(e,t){const i=e.club_name||e.pseudo||"?",a=e.pseudo||"",c=(a||i).slice(0,2).toUpperCase(),l=e.club_color2||Bt,s=e.club_color1||"#ffffff",d=e.last_seen_at?new Date(e.last_seen_at):null,p=d&&Date.now()-d.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${l};border:2.5px solid ${s};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${s}">
          ${c}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${p?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${a}</div>
        <div style="font-size:11px;color:${p?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${p?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${qn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Dn(e,t){const i=yi();i.innerHTML=`
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
    ${bi()}`,document.body.appendChild(i);const a=i.querySelector("#friend-pseudo-input"),c=i.querySelector("#add-friend-error"),l=()=>i.remove();a.focus(),i.querySelector("#add-cancel").addEventListener("click",l),i.addEventListener("click",s=>{s.target===i&&l()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const s=a.value.trim();if(!s){c.textContent="Entre un pseudo";return}c.textContent="";const{data:d}=await T.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!d){c.textContent="Utilisateur introuvable";return}if(d.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await T.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${d.id}),and(requester_id.eq.${d.id},addressee_id.eq.${e.user.id})`).single();if(p){const o=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=o;return}const{error:n}=await T.from("friendships").insert({requester_id:e.user.id,addressee_id:d.id,status:"pending"});if(n){c.textContent="Erreur : "+n.message;return}l(),t(`✅ Demande envoyée à ${d.pseudo} !`,"success")})}async function Wi(e,t,i=null,a={}){const c=e.user.id,{data:l}=await T.from("friendships").select("id, requester_id").eq("addressee_id",c).eq("status","pending").order("created_at",{ascending:!1}),s=(l||[]).map(v=>v.requester_id);let d={};if(s.length){const{data:v}=await T.from("users").select("id, pseudo, club_name").in("id",s);(v||[]).forEach(w=>{d[w.id]=w})}const p=(l||[]).map(v=>({...v,requester:d[v.requester_id]||{pseudo:"?"}})),n=yi(),o=p||[];n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(v=>{var w,A,r;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((w=v.requester)==null?void 0:w.club_name)||((A=v.requester)==null?void 0:A.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((r=v.requester)==null?void 0:r.pseudo)||""})</span>
                </div>
                <button data-accept="${v.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Bt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${v.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Dt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${bi()}`,document.body.appendChild(n);const f=()=>n.remove();n.querySelector("#pending-close").addEventListener("click",f),n.addEventListener("click",v=>{v.target===n&&f()}),n.querySelectorAll("[data-accept]").forEach(v=>{v.addEventListener("click",async()=>{const{error:w}=await T.from("friendships").update({status:"accepted"}).eq("id",v.dataset.accept);if(w){t("Erreur : "+w.message,"error");return}v.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Yi(e,t,a),i&&i()})}),n.querySelectorAll("[data-decline]").forEach(v=>{v.addEventListener("click",async()=>{await T.from("friendships").delete().eq("id",v.dataset.decline),v.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Gn(e,t,i){const a=e.user.id,[c,l]=[a,t].sort(),s=a===c,{data:d}=await T.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",l).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",n=d||{},o=s?n.wins_p1||0:n.wins_p2||0,f=s?n.wins_p2||0:n.wins_p1||0,v=n.draws||0,w=s?n.goals_p1||0:n.goals_p2||0,A=s?n.goals_p2||0:n.goals_p1||0,r=s?n.gc_used_p1||0:n.gc_used_p2||0,u=s?n.gc_used_p2||0:n.gc_used_p1||0,I=n.matches_total||0,z=(H,B,j,U=Bt,oe=Dt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${U}">${B}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${H}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${oe}">${j}</div>
    </div>`,C=yi();C.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${I===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${z("Victoires",o,f)}
        ${z("Nuls",v,v,Si,Si)}
        ${z("Défaites",f,o)}
        ${z("Buts marqués",w,A)}
        ${z("Buts encaissés",A,w,Dt,Bt)}
        ${z("GC utilisés ⚡",r,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${I} match${I>1?"s":""} joué${I>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${bi()}`,document.body.appendChild(C),C.querySelector("#stats-close").addEventListener("click",()=>C.remove()),C.addEventListener("click",H=>{H.target===C&&C.remove()})}function yi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function bi(){return`
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
    </style>`}async function Ji({player1Id:e,player2Id:t,score1:i,score2:a,gc1:c,gc2:l}){const[s,d]=[e,t].sort(),p=e!==s,n=p?a:i,o=p?i:a,f=p?l:c,v=p?c:l,w=n>o?1:0,A=o>n?1:0,r=n===o?1:0,{data:u}=await T.from("friend_match_stats").select("*").eq("player1_id",s).eq("player2_id",d).single();u?await T.from("friend_match_stats").update({wins_p1:u.wins_p1+w,wins_p2:u.wins_p2+A,draws:u.draws+r,goals_p1:u.goals_p1+n,goals_p2:u.goals_p2+o,gc_used_p1:u.gc_used_p1+f,gc_used_p2:u.gc_used_p2+v,matches_total:u.matches_total+1}).eq("player1_id",s).eq("player2_id",d):await T.from("friend_match_stats").insert({player1_id:s,player2_id:d,wins_p1:w,wins_p2:A,draws:r,goals_p1:n,goals_p2:o,gc_used_p1:f,gc_used_p2:v,matches_total:1})}const Pn="2026.07.02-1458";async function Ii(e,{state:t,navigate:i,toast:a}){var l,s;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Pn}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(d=>{d.addEventListener("click",p=>{p.preventDefault(),i(d.dataset.nav)})}),(l=document.getElementById("nav-rankings"))==null||l.addEventListener("click",()=>i("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(d=>{d.addEventListener("click",()=>{d.classList.add("tapped"),setTimeout(()=>d.classList.remove("tapped"),200);const p=d.dataset.action;if(p==="match-ai"){Hn(i);return}if(p==="match-random"){i("match",{matchMode:"random"});return}if(p==="match-friend"){i("friends");return}if(p==="mini-league"){i("mini-league");return}if(p==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}a("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var H,B,j,U,oe,ce;const d=((H=window.visualViewport)==null?void 0:H.height)||window.innerHeight,p=((B=document.querySelector(".top-nav"))==null?void 0:B.offsetHeight)||56,n=((j=document.querySelector(".bottom-nav"))==null?void 0:j.offsetHeight)||60,o=((U=e.querySelector(".hero-compact"))==null?void 0:U.offsetHeight)||52,f=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const v=((ce=(oe=e.querySelector("#logout-btn"))==null?void 0:oe.closest("div"))==null?void 0:ce.offsetHeight)||44,w=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((re,D)=>{var ie;return re+(((ie=document.getElementById(D))==null?void 0:ie.offsetHeight)||0)},0),A=14*5,r=d-p-n-o-v-w-A,u=Math.max(80,Math.round(r*.28)),I=Math.max(160,Math.round(r*.72)),z=Math.floor((I-10)/2);f&&(f.style.minHeight=f.style.maxHeight=u+"px"),e.querySelectorAll(".play-grid .play-card").forEach(re=>{re.style.minHeight=re.style.height=z+"px"});const C=Math.round(z*.55);e.querySelectorAll(".play-card .play-icon").forEach(re=>{re.style.height=C+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await T.auth.signOut(),window.location.reload()}),Zi(t,a),On(t,a,i),Xi(t,a,i))}async function Xi(e,t,i){const a=document.getElementById("ongoing-match-banner");if(!a)return;const c=e.profile.id,{data:l}=await T.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${c},away_id.eq.${c}`).order("created_at",{ascending:!1});if(!(l!=null&&l.length)){a.innerHTML="";return}const s=l.map(p=>p.home_id===c?p.away_id:p.home_id).filter(Boolean);let d={};if(s.length){const{data:p}=await T.from("users").select("id, pseudo, club_name").in("id",s);(p||[]).forEach(n=>{d[n.id]=n.club_name||n.pseudo})}a.innerHTML=l.map(p=>{const n=p.home_id===c?p.away_id:p.home_id,o=d[n]||"Adversaire",f=p.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${f?"🏆 Mini League":p.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${p.id}" data-mini="${f?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${p.id}" data-opp="${n}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(p=>{p.addEventListener("click",async()=>{const n=document.getElementById("page-content")||document.getElementById("app");if(p.dataset.mini==="1"){const{data:o}=await T.from("mini_league_matches").select("id, league_id").eq("match_id",p.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await xi(async()=>{const{resumePvpMatch:f}=await Promise.resolve().then(()=>Oo);return{resumePvpMatch:f}},void 0);o(n,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},p.dataset.resume)}})}),a.querySelectorAll("[data-abandon]").forEach(p=>{p.addEventListener("click",()=>{Rn(async()=>{await Nn(p.dataset.abandon,p.dataset.opp,c),t("Match abandonné (défaite 3-0)","info"),Xi(e,t,i)})})})}async function Nn(e,t,i){const{data:a}=await T.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const c=a.home_id===i,l=c?0:3,s=c?3:0,d=a.game_state||{};d.p1Score=l,d.p2Score=s,d.phase="finished",d.forfeit=!0,await T.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:l,away_score:s,game_state:d}).eq("id",e)}function Rn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function On(e,t,i){var d,p,n,o;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:c}=await T.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){a.innerHTML="";return}const l=((d=c.inviter)==null?void 0:d.club_name)||((p=c.inviter)==null?void 0:p.pseudo)||"?",s=c.inviter_id;a.innerHTML=`
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
    </div>`,(n=document.getElementById("match-inv-accept"))==null||n.addEventListener("click",()=>{a.innerHTML="",i("match",{matchMode:"friend",friendId:s,friendName:l})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await T.from("friend_match_invites").update({status:"declined"}).eq("id",c.id),a.innerHTML="",t("Invitation refusée","info")})}async function Zi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:a,error:c}=await T.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(a!=null&&a.length)){i.innerHTML="";return}const l=a.length,s=a.slice(0,2).map(p=>{var n;return((n=p.requester)==null?void 0:n.pseudo)||"?"}).join(", "),d=l>2?` +${l-2}`:"";i.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Wi(e,t,()=>Zi(e,t))})}function Hn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const a=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",a),i.addEventListener("click",c=>{c.target===i&&a()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{a(),e("match",{matchMode:c.dataset.mode})})})}const Ue={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function $e(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Mi=["ATT","MIL","DEF","GK"];function Qi(e){let t=0;const i=e.length;for(let a=0;a<i;a++)for(let c=a+1;c<i;c++){const l=e[a],s=e[c];if(!l||!s)continue;const d=l._col!=null&&s._col!=null&&l._col===s._col,p=l._col!=null&&s._col!=null&&Math.abs(l._col-s._col)===1,n=Mi.indexOf(l._line||l.job),o=Mi.indexOf(s._line||s.job),f=Math.abs(n-o)===1;if(!((l._line||l.job)===(s._line||s.job)&&p||d&&f))continue;const A=l.country_code&&s.country_code&&l.country_code===s.country_code,r=l.club_id&&s.club_id&&l.club_id===s.club_id;A&&r?t+=2:(A||r)&&(t+=1)}return t}function Nt(e,t={}){const i=e.reduce((l,s)=>{const d=s._line||s.job;return l+(Number(d==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)},0),a=Qi(e);let c=i+a;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function Rt(e,t={}){const i=e.reduce((l,s)=>{const d=s._line||s.job;let p=0;return d==="GK"?p=Number(s.note_g)||0:d==="MIL"?p=Number(s.note_m)||0:p=Number(s.note_d)||0,l+p+(s.boost||0)},0),a=Qi(e);let c=i+a;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:a,total:Math.max(0,c)}}function Ot(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function en(e,t,i="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const c=[...a].sort((s,d)=>{const p=t==="attack"?$e(s,"ATT"):s._line==="GK"?$e(s,"GK"):$e(s,"DEF");return(t==="attack"?$e(d,"ATT"):d._line==="GK"?$e(d,"GK"):$e(d,"DEF"))-p});let l=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(l,c.length,3))}function Un(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const tn={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function hi(e,t){const i=e.player;if(!i)return 0;const a=i.rarity;if(a!=="pepite"&&a!=="papyte")return Number(i[t])||0;const c=vi(i),l=Number(i[t])||0;if(l<=0)return 0;const s=i.note_min??1,d=i.note_max??10,n=(e.current_note??c)-c;return Math.min(d,Math.max(s,l+n))}function vi(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function wi(e,t){!e||!t||await Promise.all([Ci(e,"win"),Ci(t,"loss")])}async function Ci(e,t){const{data:i}=await T.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const a=i.filter(c=>{var l,s;return((l=c.player)==null?void 0:l.rarity)==="pepite"||((s=c.player)==null?void 0:s.rarity)==="papyte"});a.length&&await Promise.all(a.map(c=>{const l=tn[c.player.rarity],s=t==="win"?l.win:l.loss,d=c.player.note_min??1,p=c.player.note_max??10,n=vi(c.player),o=c.current_note??n,f=Math.min(p,Math.max(d,o+s));return T.from("cards").update({current_note:f}).eq("id",c.id)}))}const nn=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:tn,currentSecondaryNote:hi,getBaseMainNote:vi,updateEvolutiveCards:wi},Symbol.toStringTag,{value:"Module"})),on={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},jt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ut=["GK","DEF","MIL","ATT"],Vn=["Tous","GK","DEF","MIL","ATT"],Kn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function ji(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Yn(e){return e.length?e.reduce((t,i)=>ji(i)>ji(t)?i:t,e[0]):e[0]}function rn(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const _i={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function an(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Gt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function ri(e,t=""){var v,w;const i=e.player;if(!i)return"";const a=i.job||"ATT",c=jt[a],l=on[i.rarity]||"#ccc",s=i.rarity==="pepite"||i.rarity==="papyte",d=s&&e.current_note!=null?e.current_note:Gt(i,a),p=i.job2?s?hi(e,rn(i.job2)):Gt(i,i.job2):null,n=i.job2?jt[i.job2]:null,o=an(i),f=_i[i.country_code]||i.country_code||"";return`
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
        ${p!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${n}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${p}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${f}</div>
        ${(v=i.clubs)!=null&&v.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((w=i.clubs)==null?void 0:w.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function qi(e){const t=e.job||"ATT",i=Gt(e,t),a=_i[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Wn(e,t){const{state:i,navigate:a,toast:c,openModal:l,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await T.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:p}=await T.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),n=(d||[]).filter(Y=>Y.card_type==="player"&&Y.player),o=(d||[]).filter(Y=>Y.card_type==="game_changer"),f=(d||[]).filter(Y=>Y.card_type==="formation"),{data:v}=await T.from("gc_definitions").select("name,gc_type,color,effect,image_url"),w={};(v||[]).forEach(Y=>{w[Y.name]=Y});const A=Object.keys(mi),r=Object.keys(Ue),u={};n.forEach(Y=>{const J=Y.player.id;u[J]=(u[J]||0)+1}),new Set(Object.keys(u).map(Y=>String(Y)));const I=new Set(f.map(Y=>Y.formation)),z=new Set(o.map(Y=>Y.gc_type));let C="player",H="Tous",B="",j=!1;function U(){return[...n].sort((Y,J)=>{const N=Ut.indexOf(Y.player.job),R=Ut.indexOf(J.player.job);return N!==R?N-R:(Y.player.surname_encoded||"").localeCompare(J.player.surname_encoded||"")})}function oe(){return[...p||[]].sort((Y,J)=>{const N=Ut.indexOf(Y.job),R=Ut.indexOf(J.job);return N!==R?N-R:(Y.surname_encoded||"").localeCompare(J.surname_encoded||"")})}function ce(){return U().filter(Y=>{const J=Y.player,N=H==="Tous"||J.job===H,R=!B||`${J.firstname} ${J.surname_encoded}`.toLowerCase().includes(B);return N&&R})}function re(){return oe().filter(Y=>{const J=H==="Tous"||Y.job===H,N=!B||`${Y.firstname} ${Y.surname_encoded}`.toLowerCase().includes(B);return J&&N})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="player"?"var(--green)":"transparent"};
        color:${C==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="formation"?"var(--green)":"transparent"};
        color:${C==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${C==="gc"?"var(--green)":"transparent"};
        color:${C==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function D(){const Y=document.getElementById("col-filters");Y&&(C==="player"?(Y.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${B}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Vn.map(J=>`
            <button class="filter-btn" data-job="${J}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${J===H?"var(--green)":"var(--gray-200)"};
                background:${J===H?"var(--green)":"#fff"};
                color:${J===H?"#fff":"var(--gray-600)"}">
              ${J}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",J=>{B=J.target.value.toLowerCase(),ie()}),e.querySelectorAll(".filter-btn").forEach(J=>{J.addEventListener("click",()=>{H=J.dataset.job,D(),ie()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,D(),ie()})):(Y.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${j?"var(--yellow)":"var(--gray-200)"};
              background:${j?"var(--yellow)":"#fff"};
              color:${j?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${j?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{j=!j,D(),ie()})))}function ie(){const Y=document.getElementById("col-grid");Y&&(C==="player"?Ee(Y):C==="formation"?_e(Y):he(Y))}function W(Y,J,N,R,Q){const ge=document.getElementById("col-grid"),pe=document.getElementById("col-big");if(!ge||!pe)return;var Me=0;function Ce(){const Be=window.innerWidth>=768,Ve=document.getElementById("col-big"),Se=document.getElementById("col-grid");Be&&Ve&&(Ve.style.minHeight="420px",Ve.style.flex="1 1 auto"),Be&&Se&&(Se.style.height=Math.round(310*.76+16)+"px",Se.style.flexShrink="0",Se.style.overflowX="auto",Se.style.overflowY="hidden",Se.style.alignItems="center",Se.style.padding="8px 16px"),pe.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+J(Y[Me])+"</div>";var Ne=pe.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Ne&&Ne.addEventListener("click",function(){R(Y[Me])}),requestAnimationFrame(function(){var Ie=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!Ie||!pe)){var Re=pe.clientHeight-8,Ze=pe.clientWidth-24,M=Ie.offsetHeight,P=Ie.offsetWidth;if(M>0&&P>0&&Re>40){var _=Be?2.2:1,$=Math.min(Re/M,Ze/P,_);Ie.style.transform="scale("+$.toFixed(3)+")",Ie.style.transformOrigin="top center"}}}),ge.innerHTML=Y.map(function(Ie,Re){var Ze=Re===Me,M="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Ze?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Re+'" style="'+M+'">'+N(Ie,Ze)+"</div>"}).join(""),ge.querySelectorAll(".col-mini-item").forEach(function(Ie){Ie.addEventListener("click",function(){Me=Number(Ie.dataset.idx),Ce(),Ie.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Ce()}function G(Y){var J=window.innerWidth>=768?.76:.54,N;if(!Y||Y._fake){var R=Y?Y.player:null;if(!R)return"";N=qi(R)}else N=ri(Y,"");return'<div style="display:inline-block;zoom:'+J+';pointer-events:none;line-height:0">'+N+"</div>"}function se(Y,J,N){J=J||100,N=N||140;var R=Pt[Y]||{},Q={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ge=Math.max(3,Math.round(J*.06)),pe=Object.entries(R).map(function(Ce){var Be=Ce[0],Ve=Ce[1],Se=Be.replace(/\d+$/,""),Ne=Q[Se]||"#888",Ie=Math.round(Ve.x*J),Re=Math.round(Ve.y*N);return'<circle cx="'+Ie+'" cy="'+Re+'" r="'+ge+'" fill="'+Ne+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Me=Math.max(1,Math.round(J/50));return'<svg viewBox="0 0 '+J+" "+N+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+J+'" height="'+N+'" fill="#1A6B3C"/><rect x="'+Math.round(J*.2)+'" y="'+Math.round(N*.02)+'" width="'+Math.round(J*.6)+'" height="'+Math.round(N*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Me+'"/><line x1="0" y1="'+Math.round(N*.5)+'" x2="'+J+'" y2="'+Math.round(N*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Me+'"/><ellipse cx="'+Math.round(J*.5)+'" cy="'+Math.round(N*.5)+'" rx="'+Math.round(J*.18)+'" ry="'+Math.round(N*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Me+'"/><rect x="'+Math.round(J*.2)+'" y="'+Math.round(N*.82)+'" width="'+Math.round(J*.6)+'" height="'+Math.round(N*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Me+'"/>'+pe+"</svg>"}function fe(Y,J,N){var R=N>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+N+"</div>":"",Q=J?'data-form-id="'+J.id+'"':"",ge=Y.length>7?14:Y.length>5?16:19,pe=!!J;return"<div "+Q+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(pe?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(pe?"":"filter:grayscale(1);opacity:0.5")+'">'+R+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(pe?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ge+"px;font-weight:900;color:"+(pe?"#1A6B3C":"#aaa")+';line-height:1">'+Y+'</div></div><div style="flex:1;overflow:hidden;background:'+(pe?"#1A6B3C":"#ccc")+'">'+se(Y,140,220)+"</div></div>"}function xe(Y,J){var N=window.innerWidth>=768?.76:.54,R=140,Q=305,ge=Math.round(Q*.22),pe=Q-ge,Me=Y.length>7?10:13,Ce=se(Y,R,pe),Be=J?"1.5px solid #2a7a40":"1px solid #ddd",Ve=J?"":"filter:grayscale(1);opacity:0.45;",Se=J?"#1A6B3C":"#bbb",Ne="#fff";return'<div style="display:inline-block;zoom:'+N+';line-height:0;pointer-events:none"><div style="width:'+R+"px;height:"+Q+"px;border-radius:6px;border:"+Be+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Ve+'"><div style="height:'+ge+"px;background:"+Se+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Me+"px;font-weight:900;color:"+Ne+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(R-4)+'px">'+Y+'</span></div><div style="height:'+pe+'px;overflow:hidden;flex-shrink:0">'+Ce+"</div></div></div>"}function Ee(Y){if(j){const J=re();if(!J.length){Y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const N=J.map(R=>n.find(Q=>Q.player.id===R.id)||{_fake:!0,player:R,id:"fake-"+R.id});W(N,R=>R._fake?qi(R.player):ri(R,""),R=>R._fake?G({player:R.player,id:"x",_fake:!0}):G(R),R=>{R._fake||Fi(R,n,u,t)})}else{const J=ce();if(!J.length){Y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const N={};J.forEach(Q=>{const ge=Q.player.id;N[ge]||(N[ge]=[]),N[ge].push(Q)});const R=Object.values(N).map(Q=>Yn(Q));W(R,Q=>{const ge=u[Q.player.id]||1,pe=ge>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ge}</div>`:"",Ce=n.filter(Be=>Be.player.id===Q.player.id&&Be.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return ri(Q,pe+Ce)},Q=>G(Q),Q=>Fi(Q,n,u,t))}}function _e(Y){const J=j?A:[...I];if(!J.length){Y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const N=J.map(R=>({formation:R,card:f.find(Q=>Q.formation===R)||null,owned:I.has(R)}));W(N,({formation:R,card:Q,owned:ge})=>fe(R,ge?Q:null,ge?f.filter(pe=>pe.formation===R).length:0),({formation:R,owned:Q})=>xe(R,Q),({card:R,owned:Q})=>{Q&&R&&Xn(R,f,t,l)})}function he(Y){const J=Object.keys(w),N=j?J.length?J:r:[...z];if(!N.length){Y.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const R=N.map(Q=>({type:Q,gc:Ue[Q]||{icon:"⚡",desc:""},def:w[Q]||null,owned:z.has(Q),card:o.find(ge=>ge.gc_type===Q)||null}));W(R,({type:Q,gc:ge,def:pe,owned:Me,card:Ce})=>{const Be=Me?o.filter(_=>_.gc_type===Q).length:0,Ve=Be>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Be}</div>`:"",Se=(pe==null?void 0:pe.gc_type)==="ultra_game_changer",Ne={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ie={purple:"#b06ce0",light_blue:"#00d4ef"},Re=Ne[pe==null?void 0:pe.color]||Ne.purple,Ze=Ie[pe==null?void 0:pe.color]||Ie.purple,M=(pe==null?void 0:pe.effect)||ge.desc||"",P=pe!=null&&pe.image_url?`/manager-wars/icons/${pe.image_url}`:null;return Me&&Ce?`<div data-gc-id="${Ce.id}" data-gc-type="${Q}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Ze};background:${Re};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Ze}66;cursor:pointer">
          ${Ve}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${Q.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${Q}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Se?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${P?`<img src="${P}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ge.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${M.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${Q}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ge.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:Q,gc:ge,def:pe,owned:Me})=>{const Ce=window.innerWidth>=768?.76:.54,Be={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ve={purple:"#9b59b6",light_blue:"#00bcd4"},Se=Be[pe==null?void 0:pe.color]||Be.purple,Ne=Ve[pe==null?void 0:pe.color]||Ve.purple,Ie=pe!=null&&pe.image_url?`/manager-wars/icons/${pe.image_url}`:null;return Me?`<div style="display:inline-block;zoom:${Ce};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Se};border:1px solid ${Ne};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${Q}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${Ie?`<img src="${Ie}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${ge.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((pe==null?void 0:pe.effect)||ge.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Ce};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${ge.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${Q}</span></div></div>`},({type:Q,owned:ge,def:pe})=>{ge&&Jn(Q,pe,l)})}e.querySelectorAll(".col-tab-btn").forEach(Y=>{Y.addEventListener("click",()=>{C=Y.dataset.tab,H="Tous",B="",j=!1,e.querySelectorAll(".col-tab-btn").forEach(J=>{const N=J.dataset.tab===C;J.style.borderBottomColor=N?"var(--green)":"transparent",J.style.color=N?"var(--green)":"var(--gray-600)"}),D(),ie()})}),D(),ie()}function Jn(e,t,i){const a=Ue[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=l[t==null?void 0:t.color]||l.purple,p=s[t==null?void 0:t.color]||s.purple,n=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||a.desc,f=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${d};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${n}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${a.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${o}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Vt=1e3;function Xn(e,t,i,a){var A,r,u;const{state:c,toast:l,closeModal:s,navigate:d,refreshProfile:p}=i,n=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function f(){const I=Pt[n]||{},z=mi[n]||[],C=290,H=360,B=20;function j(oe){const ce=I[oe];return ce?{x:ce.x*C,y:ce.y*H}:null}let U=`<svg width="${C}" height="${H}" viewBox="0 0 ${C} ${H}" xmlns="http://www.w3.org/2000/svg">`;for(const[oe,ce]of z){const re=j(oe),D=j(ce);!re||!D||(U+=`<line x1="${re.x}" y1="${re.y}" x2="${D.x}" y2="${D.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const oe of Object.keys(I)){const ce=j(oe);if(!ce)continue;const re=oe.replace(/\d+/,""),D=o[re]||"#555";U+=`<circle cx="${ce.x}" cy="${ce.y}" r="${B}" fill="${D}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,U+=`<text x="${ce.x}" y="${ce.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${re}</text>`}return U+="</svg>",U}const v=t.filter(I=>I.formation===n);v.length;const w=!e.is_for_sale;a(`Formation ${n}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${w?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(A=document.getElementById("direct-sell-form-btn"))==null||A.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${n} pour ${Vt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const I=v.find(C=>!C.is_for_sale)||v[0];if(!I){l("Aucune carte à vendre","error");return}await T.from("market_listings").delete().eq("card_id",I.id),await T.from("transfer_history").delete().eq("card_id",I.id);const{error:z}=await T.from("cards").delete().eq("id",I.id);if(z){l(z.message,"error");return}await T.from("users").update({credits:(c.profile.credits||0)+Vt}).eq("id",c.profile.id),await p(),l(`+${Vt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),d("collection")}),(r=document.getElementById("market-sell-form-btn"))==null||r.addEventListener("click",async()=>{const I=parseInt(document.getElementById("sell-price-form").value);if(!I||I<1){l("Prix invalide","error");return}await T.from("cards").update({is_for_sale:!0,sale_price:I}).eq("id",e.id),await T.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:I}),l("Carte mise en vente sur le marché !","success"),s(),d("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),s(),d("collection")})}async function Fi(e,t,i,a){var fe,xe,Ee,_e,he,Y,J;const{state:c,toast:l,openModal:s,closeModal:d,navigate:p,refreshProfile:n}=a,o=e.player,f=t.filter(N=>N.player.id===o.id),v=f.length,w=Math.max(Number(o.note_g)||0,Number(o.note_d)||0,Number(o.note_m)||0,Number(o.note_a)||0),A=o.rarity||"normal",{data:r}=await T.from("sell_price_configs").select("*").eq("rarity",A).lte("note_min",w).gte("note_max",w).order("note_min",{ascending:!1}).limit(1),u=((fe=r==null?void 0:r[0])==null?void 0:fe.price)??Kn[A]??1e3,I=o.rarity!=="legende",z=an(o),C=(o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:Gt(o,o.job),H=o.rarity==="pepite"||o.rarity==="papyte",B=o.job2?H?hi(e,rn(o.job2)):Gt(o,o.job2):null,j=jt[o.job]||"#1A6B3C",U=o.job2?jt[o.job2]:null,oe=on[o.rarity]||"#ccc",ce=_i[o.country_code]||o.country_code||"",re=f.map(N=>N.id);let D={};if(re.length){const{data:N}=await T.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",re).order("transferred_at",{ascending:!0});(N||[]).forEach(R=>{D[R.card_id]||(D[R.card_id]=[]),D[R.card_id].push(R)})}const ie=N=>{const R=N.transferred_at?new Date(N.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",Q=N.source==="booster"?"Booster":N.price?N.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${N.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${N.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${N.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${Q}</div>
        <div style="font-size:11px;color:var(--gray-600)">${R}</div>
      </div>
    </div>`},W=re.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${v>1?`(${v})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${f.map((N,R)=>{const Q=D[N.id]||[],ge=N.is_for_sale,pe=Q.length?Q[Q.length-1]:null,Ce=(o.rarity==="pepite"||o.rarity==="papyte")&&N.current_note!=null?` (☆${N.current_note})`:"";return`
            <div data-card-id="${N.id}" data-card-idx="${R}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${ge?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${N.id}" ${ge?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${R+1}${Ce}${ge?" 🏷️ En vente":""}</div>
                  ${pe?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${pe.club_name} · ${pe.source==="booster"?"Booster":pe.price?pe.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${R}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${Q.length?`${Q.length} club${Q.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${R}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${Q.map(ie).join("")}
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
            <div id="sell-direct-total" style="font-size:16px;font-weight:900;color:#D4A017">${u.toLocaleString("fr")} cr.</div>
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
              value="${o.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";s(`${o.firstname} ${o.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${oe};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${o.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(o.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${j}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${j}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${C}</text>
            </svg>
            ${B!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${U}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${B}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${z?`<img src="${z}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${ce}</div>
            ${(xe=o.clubs)!=null&&xe.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Ee=o.clubs)==null?void 0:Ee.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${oe}">${o.rarity.toUpperCase()}</div>
          ${o.rarity==="pepite"||o.rarity==="papyte"?`
          <div style="margin-top:6px;background:${oe}18;border-left:3px solid ${oe};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${oe};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([N,R])=>{const Q=jt[N],ge=Number(R)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${Q}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${ge}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${N}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${v}</div>
        </div>
      </div>
    </div>
    ${W}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(_e=document.getElementById("close-detail"))==null||_e.addEventListener("click",d);let G=new Set;const se=()=>{const N=G.size,R=document.getElementById("sell-action-panel");R&&(R.style.display=N>0?"block":"none",document.getElementById("sell-selected-count").textContent=N,document.getElementById("sell-direct-total").textContent=(N*u).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(N=>{N.addEventListener("change",()=>{const R=N.dataset.id;N.checked?G.add(R):G.delete(R);const Q=N.closest(".exemplaire-row");Q&&(Q.style.borderColor=N.checked?"#1A6B3C":"#eee"),se()})}),document.querySelectorAll(".exemplaire-row").forEach(N=>{N.addEventListener("click",R=>{if(R.target.closest("button")||R.target.tagName==="INPUT")return;const Q=N.querySelector(".expl-check");Q&&!Q.disabled&&(Q.checked=!Q.checked,Q.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(N=>{N.addEventListener("click",R=>{R.stopPropagation();const Q=document.querySelector(`.expl-hist[data-hist="${N.dataset.idx}"]`);Q&&(Q.style.display=Q.style.display==="none"?"flex":"none")})}),(he=document.getElementById("direct-sell-btn"))==null||he.addEventListener("click",async()=>{const N=[...G];if(!N.length)return;const R=N.length*u;if(!confirm(`Vendre ${N.length} carte${N.length>1?"s":""} ${o.surname_encoded} pour ${R.toLocaleString("fr")} crédits ? Action irréversible.`))return;await T.from("market_listings").delete().in("card_id",N),await T.from("transfer_history").delete().in("card_id",N);const{error:Q}=await T.from("cards").delete().in("id",N);if(Q){l(Q.message,"error");return}await T.from("users").update({credits:(c.profile.credits||0)+R}).eq("id",c.profile.id),await n();const ge=document.getElementById("nav-credits");ge&&(ge.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l(`+${R.toLocaleString("fr")} crédits ! ${N.length} carte${N.length>1?"s":""} vendue${N.length>1?"s":""}.`,"success"),d(),p("collection")}),(Y=document.getElementById("market-sell-btn"))==null||Y.addEventListener("click",async()=>{var Me;const N=[...G];if(!N.length){l("Sélectionne au moins un exemplaire","warning");return}const R=parseInt((Me=document.getElementById("sell-market-price"))==null?void 0:Me.value);if(!R||R<1){l("Prix invalide","error");return}const{error:Q}=await T.from("cards").update({is_for_sale:!0,sale_price:R}).in("id",N);if(Q){l(Q.message,"error");return}const ge=N.map(Ce=>({seller_id:c.profile.id,card_id:Ce,price:R,status:"active"})),{error:pe}=await T.from("market_listings").insert(ge);pe&&console.warn("[Market] insert listings:",pe.message),l(`${N.length} carte${N.length>1?"s":""} mise${N.length>1?"s":""} en vente à ${R.toLocaleString("fr")} cr. chacune !`,"success"),d(),p("collection")}),(J=document.getElementById("cancel-sell-btn"))==null||J.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),l("Annonce retirée","success"),d(),p("collection")})}const Jt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ei(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function sn(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function dn(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Zn(e,t=44,i=58){var w;const a=e?ei(e):null,c=e?dn(e):null,l=sn(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",d=vt[s]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,o=Math.round(i*.19),f=Math.round(i*.25),v=i-o-f;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${p};background:${d};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${v}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${l?`<img src="${l}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">🌍</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${n}</span>
      ${c?`<img src="${c}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:(w=e==null?void 0:e.clubs)!=null&&w.encoded_name?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function di(e,t){const{state:i,navigate:a,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await T.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((l==null?void 0:l.length)||0)+1}`);if(!s)return;const{data:d,error:p}=await T.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),Bi(d.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Bi(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const d=prompt("Nouveau nom :",s.dataset.name);if(!d||d===s.dataset.name)return;const{error:p}=await T.from("decks").update({name:d}).eq("id",s.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),di(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await T.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:d}=await T.from("decks").delete().eq("id",s.dataset.delete);if(d){c(d.message,"error");return}c("Deck supprimé.","success"),di(e,t)})})}async function Bi(e,t,i){const{state:a,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await T.from("decks").select("*").eq("id",e).single(),{data:s}=await T.from("cards").select(`id, card_type, formation,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),d=(s||[]).filter(w=>w.card_type==="player"&&w.player),p=(s||[]).filter(w=>w.card_type==="formation"),n=p.map(w=>w.formation).filter(Boolean),{data:o}=await T.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let f=l.formation||"4-4-2";n.length>0&&!n.includes(f)&&(f=n[0]);const v={deckId:e,name:l.name,formation:f,formationCardId:l.formation_card_id,slots:{},subs:[],playerCards:d,formationCards:p,availableFormations:n};(o||[]).forEach(w=>{w.is_starter?v.slots[w.position]=w.card_id:v.subs.includes(w.card_id)||v.subs.push(w.card_id)}),Lt(t,v,i)}function Lt(e,t,i){var p;const{navigate:a}=i;Jt[t.formation];const c=Di(t.formation),l=c.filter(n=>t.slots[n]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Jt),d=t.subs.map(n=>t.playerCards.find(o=>o.id===n)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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

    <!-- Terrain -->
    <div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);padding:0;position:relative">
      <div id="deck-field"></div>
    </div>

    <!-- Remplaçants → mini cartes -->
    <div style="padding:10px 12px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.1)">
      <div style="font-size:11px;font-weight:700;margin-bottom:8px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${t.subs.length}/5)</div>
      <div style="display:flex;gap:8px;align-items:flex-end;overflow-x:auto;padding-bottom:4px" id="subs-list">
        ${d.map(n=>{const o=n.player;return`<div style="position:relative;flex-shrink:0">
            ${Zn(o,44,58)}
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
  </div>`,Qn(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",n=>{t.formation=n.target.value;const o=Di(t.formation),f={};o.forEach(v=>{t.slots[v]&&(f[v]=t.slots[v])}),t.slots=f,Lt(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>io(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(n=>{n.addEventListener("click",()=>{t.subs=t.subs.filter(o=>o!==n.dataset.removeSub),Lt(e,t,i)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{to(t,e,i)})}function Qn(e,t,i,a){const c=e.querySelector("#deck-field");if(!c)return;const l=Pt[t.formation]||{},s=Ki(t.formation)||[],d={};for(const I of i){const z=t.slots[I],C=z?t.playerCards.find(H=>H.id===z):null;d[I]=C?C.player:null}const p=300,n=300,o=48,f=64,v=13,w=16,A=38;function r(I){const z=l[I];return z?{x:z.x*p,y:z.y*n}:null}let u="";for(const[I,z]of s){const C=r(I),H=r(z);if(!C||!H)continue;const B=d[I]?{...d[I],club_id:d[I].club_id,country_code:d[I].country_code,rarity:d[I].rarity}:null,j=d[z]?{...d[z],club_id:d[z].club_id,country_code:d[z].country_code,rarity:d[z].rarity}:null,U=at(B,j);U==="#ff3333"||U==="#cc2222"?u+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}" stroke="${U}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(u+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}" stroke="${U}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,u+=`<line x1="${C.x.toFixed(1)}" y1="${C.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}" stroke="${U}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const I of i){const z=r(I);if(!z)continue;const C=d[I],H=I.replace(/\d+/,""),B=vt[H]||"#555",j=(z.x-o/2).toFixed(1),U=(z.y-f/2).toFixed(1),oe={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[C==null?void 0:C.rarity]||"#aaa";if(C){const ce=ei(C),re=dn(C),D=sn(C.country_code),ie=Number(H==="GK"?C.note_g:H==="DEF"?C.note_d:H==="MIL"?C.note_m:C.note_a)||0,W=f-v-w;u+=`<defs><clipPath id="dcp-${I}"><rect x="${j}" y="${(z.y-f/2+v).toFixed(1)}" width="${o}" height="${W}"/></clipPath></defs>`,u+=`<rect x="${j}" y="${U}" width="${o}" height="${f}" rx="5" fill="${B}"/>`,ce&&(u+=`<image href="${ce}" x="${j}" y="${(z.y-f/2+v).toFixed(1)}" width="${o}" height="${W}" clip-path="url(#dcp-${I})" preserveAspectRatio="xMidYMin slice"/>`),u+=`<rect x="${j}" y="${U}" width="${o}" height="${v}" fill="rgba(255,255,255,0.93)"/>`,u+=`<text x="${z.x.toFixed(1)}" y="${(z.y-f/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.surname_encoded||"").slice(0,9)}</text>`;const G=(z.y+f/2-w).toFixed(1);u+=`<rect x="${j}" y="${G}" width="${o}" height="${w}" fill="rgba(255,255,255,0.93)"/>`,D&&(u+=`<image href="${D}" x="${(z.x-21).toFixed(1)}" y="${(z.y+f/2-w+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),u+=`<text x="${z.x.toFixed(1)}" y="${(z.y+f/2-w/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${ie}</text>`,re&&(u+=`<image href="${re}" x="${(z.x+o/2-14).toFixed(1)}" y="${(z.y+f/2-w+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),u+=`<rect x="${j}" y="${U}" width="${o}" height="${f}" rx="5" fill="none" stroke="${oe}" stroke-width="2"/>`}else u+=`<rect x="${j}" y="${U}" width="${o}" height="${f}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,u+=`<text x="${z.x.toFixed(1)}" y="${z.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,u+=`<text x="${z.x.toFixed(1)}" y="${(z.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${H}</text>`;u+=`<rect x="${j}" y="${U}" width="${o}" height="${f}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${I}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-A} ${-A} ${p+A*2} ${n+A*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${u}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(I=>{I.addEventListener("click",()=>eo(I.dataset.pos,t,e,a))})}function eo(e,t,i,a){var v,w,A;const{openModal:c,closeModal:l}=a,s=e.replace(/\d+/,""),d=t.slots[e],p=d?t.playerCards.find(r=>r.id===d):null;(v=p==null?void 0:p.player)==null||v.id;const n=new Set;Object.entries(t.slots).forEach(([r,u])=>{var z;if(r===e||!u)return;const I=t.playerCards.find(C=>C.id===u);(z=I==null?void 0:I.player)!=null&&z.id&&n.add(I.player.id)}),t.subs.forEach(r=>{var I;const u=t.playerCards.find(z=>z.id===r);(I=u==null?void 0:u.player)!=null&&I.id&&n.add(u.player.id)});const o=new Set,f=t.playerCards.filter(r=>{const u=r.player;return!(u.job===s||u.job2===s)||n.has(u.id)||o.has(u.id)?!1:(o.add(u.id),!0)});f.sort((r,u)=>{const I=s==="GK"?r.player.note_g:s==="DEF"?r.player.note_d:s==="MIL"?r.player.note_m:r.player.note_a;return(s==="GK"?u.player.note_g:s==="DEF"?u.player.note_d:s==="MIL"?u.player.note_m:u.player.note_a)-I}),c(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${f.length>0?f.map(r=>{var H,B;const u=r.player,I=s==="GK"?u.note_g:s==="DEF"?u.note_d:s==="MIL"?u.note_m:u.note_a,z=ei(u),C={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[u.rarity];return`<div class="player-option" data-card-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[s]}">
            ${z?`<img src="${z}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${vt[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${u.firstname} ${u.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${u.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${u.country_code}">
              ${(H=u.clubs)!=null&&H.logo_url?`<img src="${u.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((B=u.clubs)==null?void 0:B.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${u.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${vt[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${C};flex-shrink:0">
            ${I}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(w=document.getElementById("close-selector"))==null||w.addEventListener("click",l),(A=document.getElementById("remove-player"))==null||A.addEventListener("click",()=>{delete t.slots[e],l(),Lt(i,t,a)}),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{t.slots[e]=r.dataset.cardId,l(),Lt(i,t,a)})})}function to(e,t,i){var p;const{openModal:a,closeModal:c}=i,l=new Set;Object.values(e.slots).filter(Boolean).forEach(n=>{var f;const o=e.playerCards.find(v=>v.id===n);(f=o==null?void 0:o.player)!=null&&f.id&&l.add(o.player.id)}),e.subs.forEach(n=>{var f;const o=e.playerCards.find(v=>v.id===n);(f=o==null?void 0:o.player)!=null&&f.id&&l.add(o.player.id)});const s=new Set,d=e.playerCards.filter(n=>{var o,f,v;return l.has((o=n.player)==null?void 0:o.id)||s.has((f=n.player)==null?void 0:f.id)?!1:(s.add((v=n.player)==null?void 0:v.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${d.length>0?d.map(n=>{var w;const o=n.player,f=ei(o),v=o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a;return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[o.job]}">
            ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${o.firstname} ${o.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.job} · ${o.country_code} · ${((w=o.clubs)==null?void 0:w.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${vt[o.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${v}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{e.subs.push(n.dataset.cardId),c(),Lt(t,e,i)})})}async function io(e,t){const{state:i,toast:a,navigate:c}=t,l=e.formationCards.find(p=>p.formation===e.formation),s=(l==null?void 0:l.id)||e.formationCardId;await T.from("decks").update({formation:e.formation,formation_card_id:s||null}).eq("id",e.deckId),await T.from("deck_cards").delete().eq("deck_id",e.deckId);const d=[];if(Object.entries(e.slots).forEach(([p,n],o)=>{d.push({deck_id:e.deckId,card_id:n,position:p,is_starter:!0,slot_order:o})}),e.subs.forEach((p,n)=>{d.push({deck_id:e.deckId,card_id:p,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),d.length>0){const{error:p}=await T.from("deck_cards").insert(d);if(p){a(p.message,"error");return}}a("Deck enregistré ✅","success"),c("decks")}function Di(e){const t=Jt[e]||Jt["4-4-2"],i=["GK1"];for(let a=1;a<=t.DEF;a++)i.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)i.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)i.push(`ATT${a}`);return i}async function ln(){const{data:e}=await T.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await T.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(a=>a.booster_id===i.id)}))}function no(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,c)=>a+Number(c.percentage),0);let i=Math.random()*t;for(const a of e)if(i-=Number(a.percentage),i<=0)return a;return e[e.length-1]}const cn=()=>Object.keys(Pt),oo=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],li={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ro(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Gi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ao={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},so={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Pi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function lo(e){var o,f;const t=e.player;if(!t)return"";const i=t.job||"ATT",a=Gi[i],c=ao[t.rarity]||"#ccc",l=Pi(t,i),s=t.job2?Pi(t,t.job2):null,d=t.job2?Gi[t.job2]:null,p=ro(t),n=so[t.country_code]||t.country_code||"";return`
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
        ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${n}</div>
        ${(o=t.clubs)!=null&&o.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((f=t.clubs)==null?void 0:f.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function pn(e){var c;const t={};(e.rates||[]).forEach(l=>{t[l.card_type]=(t[l.card_type]||0)+Number(l.percentage||0)});const i=((c=Object.entries(t).sort((l,s)=>s[1]-l[1])[0])==null?void 0:c[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function co(e,{state:t,navigate:i,toast:a}){var s;const c=((s=t.profile)==null?void 0:s.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let l=[];try{l=(await ln()).map(pn)}catch(d){console.warn("Erreur chargement boosters DB, fallback hardcodé",d)}l.length||(l=oo.map(d=>({...d,rates:[],isPub:d.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${l.map(d=>{const p=d.cost===0||c>=d.cost;return`<div class="booster-card ${p?"":"disabled"}" data-booster="${d.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${d.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${d.img}" alt="${d.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${d.name}</div>
            <div class="desc">${d.sub}</div>
            <div class="cost">${d.costLabel}</div>
            ${p?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(d=>{d.addEventListener("click",async()=>{const p=l.find(n=>n.id===d.dataset.booster);if(p){d.style.opacity="0.5",d.style.pointerEvents="none";try{await po(p,{state:t,toast:a,navigate:i,container:e})}catch(n){a(n.message,"error"),d.style.opacity="",d.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(d=>{d.addEventListener("click",p=>{p.stopPropagation();const n=l.find(o=>o.id===d.dataset.boosterId);mo(n)})})}async function po(e,{state:t,toast:i,navigate:a,container:c}){var o;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await bo()}catch(f){i(f.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:l}=await T.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((l||[]).filter(f=>f.card_type==="player").map(f=>f.player_id)),d=new Set((l||[]).filter(f=>f.card_type==="formation").map(f=>f.formation));let p=[];if((o=e.rates)!=null&&o.length)p=await ci(t.profile,e);else{const f=e.type||"player";f==="player"?p=await un(t.profile,e.cardCount,e.cost):f==="game_changer"?p=await fn(t.profile,e.cardCount,e.cost):f==="formation"?p=await gn(t.profile,e.cost):p=await ci(t.profile,e)}p.forEach(f=>{f.card_type==="player"&&f.player?f.isDuplicate=s.has(f.player.id):f.card_type==="formation"&&(f.isDuplicate=d.has(f.formation))});const{data:n}=await T.from("users").select("*").eq("id",t.profile.id).single();n&&(t.profile=n),mn(p,e,a)}function uo(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function fo(e,t){let i;switch(t){case"legende":i=e.filter(a=>a.rarity==="legende"),i.length||(i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),i.length||(i=e.filter(a=>mt(a)>=6));break;case"special":i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),i.length||(i=e.filter(a=>mt(a)>=6));break;case"normal_high":i=e.filter(a=>a.rarity==="normal"&&mt(a)>=6),i.length||(i=e.filter(a=>mt(a)>=6));break;default:i=e.filter(a=>a.rarity==="normal"&&mt(a)>=1&&mt(a)<=5),i.length||(i=e.filter(a=>a.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ci(e,t){if(t.cost>0){const{error:d}=await T.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(d)throw d}const{data:i}=await T.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),a=new Set((i||[]).filter(d=>d.card_type==="player").map(d=>d.player_id)),c=new Set((i||[]).filter(d=>d.card_type==="formation").map(d=>d.formation)),l=new Set,s=[];for(let d=0;d<(t.cardCount||5);d++){const p=no(t.rates);if(p){if(p.card_type==="player"){const n=z=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[z]||z,o=p.rarity?n(p.rarity):null;let f=T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o&&(f=f.eq("rarity",o));const{data:v}=await f;let w=v||[];if((p.note_min||p.note_max)&&(w=w.filter(z=>{const C=Math.max(Number(z.note_g)||0,Number(z.note_d)||0,Number(z.note_m)||0,Number(z.note_a)||0);return(!p.note_min||C>=p.note_min)&&(!p.note_max||C<=p.note_max)})),w.length||(p.note_min||p.note_max?(w=v||[],console.warn("[Booster] Aucun joueur avec note",p.note_min,"-",p.note_max,"— fallback rareté uniquement")):w=v||[]),!w.length)continue;let A=w.filter(z=>!l.has(z.id));A.length||(A=w);const r=A[Math.floor(Math.random()*A.length)];l.add(r.id);const u=a.has(r.id),{data:I}=await T.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();I&&(s.push({...I,player:r,isDuplicate:u}),T.rpc("record_transfer",{p_card_id:I.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(p.card_type==="game_changer"){const{data:n}=await T.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),o=n!=null&&n.length?n:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],v=o[Math.floor(Math.random()*o.length)].name,{data:w}=await T.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:v}).select().single();w&&s.push(w)}else if(p.card_type==="formation"){const n=cn(),o=n[Math.floor(Math.random()*n.length)],f=c.has(o),{data:v}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:o}).select();v!=null&&v[0]&&s.push({...v[0],isDuplicate:f})}}}return s}async function un(e,t,i){if(i>0){const{error:n}=await T.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n}const{data:a}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=a.filter(n=>n.job==="GK"),l=a.filter(n=>n.job!=="GK"),s=!e.first_booster_opened&&c.length>0,d=[];for(let n=0;n<t;n++){const o=n===0&&s?c:n===0?l:a,f=uo(),v=fo(o,f);v&&d.push(v)}s&&await T.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await T.from("cards").insert(d.map(n=>({owner_id:e.id,player_id:n.id,card_type:"player"}))).select();return(p||[]).forEach((n,o)=>{T.rpc("record_transfer",{p_card_id:n.id,p_player_id:d[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),d.map((n,o)=>({...p[o],player:n}))}async function fn(e,t,i){const{error:a}=await T.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a;const{data:c}=await T.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),l=c!=null&&c.length?c:Object.keys(li).map(o=>({name:o,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const o=l[Math.floor(Math.random()*l.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:d,error:p}=await T.from("cards").insert(s).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(d||[]).map(o=>{const f=c==null?void 0:c.find(v=>v.name===o.gc_type||v.id===o.gc_definition_id);return{...o,_gcDef:f||null}})}async function gn(e,t){const{error:i}=await T.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:a}=await T.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((a||[]).map(o=>o.formation)),l=cn(),s=l[Math.floor(Math.random()*l.length)],d=c.has(s),{data:p,error:n}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return n&&console.error("[Booster Formation] Erreur insert:",n.message,n),(p||[]).map(o=>({...o,isDuplicate:d}))}function mn(e,t,i,a=null){var ie,W;if(!e||e.length===0){const G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",G.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(G),(ie=G.querySelector("#anim-close-err"))==null||ie.addEventListener("click",()=>G.remove());return}e=[...e].sort((G,se)=>{const fe=G.player?mt(G.player):-1;return(se.player?mt(se.player):-1)-fe});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let l=!1;const s=document.getElementById("pack-cut-zone"),d=document.getElementById("pack-blade");let p=!1;const n=G=>G.touches&&G.touches[0]?G.touches[0].clientX:G.clientX;function o(G){l||(p=!0,d.style.opacity="1",f(G))}function f(G){if(!p||l)return;const se=s.getBoundingClientRect(),fe=n(G)-se.left,xe=Math.max(0,Math.min(1,fe/se.width));d.style.width=xe*se.width+"px",xe>=.82&&w()}function v(){l||(p=!1,d.style.transition="width .2s ease, opacity .2s ease",d.style.width="0",d.style.opacity="0",setTimeout(()=>{l||(d.style.transition="")},220))}function w(){var se;if(l)return;l=!0,p=!1,d.style.width="100%",d.style.opacity="1",(se=document.getElementById("cut-flash"))==null||se.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const G=document.getElementById("cut-hint");G&&(G.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{d.style.opacity="0",document.getElementById("pack-phase").style.display="none",I(0)},620)}s.addEventListener("pointerdown",o),window.addEventListener("pointermove",f),window.addEventListener("pointerup",v),s.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",v);let A=0,r=!1;const u=new Set;function I(G){A=G,document.getElementById("reveal-phase").style.display="flex",z(),C(G,0),oe()}function z(){const G=document.getElementById("card-dots");G&&(G.innerHTML=e.map((se,fe)=>`<div class="card-dot" data-i="${fe}" style="width:8px;height:8px;border-radius:50%;background:${fe===A?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),G.querySelectorAll(".card-dot").forEach(se=>se.addEventListener("click",()=>B(parseInt(se.dataset.i)))))}function C(G,se){var R;const fe=e[G],xe=document.getElementById("card-counter"),Ee=document.getElementById("card-track");xe&&(xe.textContent=`Carte ${G+1} / ${e.length}`);const _e=document.getElementById("reveal-btns");_e&&(_e.style.display=G===e.length-1?"flex":"none");const he=fe.card_type==="player"&&((R=fe.player)==null?void 0:R.rarity)==="legende",Y=!u.has(G);u.add(G);let J=0;if(fe.card_type==="player"&&fe.player){const Q=fe.player,ge=Q.job||"ATT";J=Number(ge==="GK"?Q.note_g:ge==="DEF"?Q.note_d:ge==="MIL"?Q.note_m:Q.note_a)||0}const N=Q=>{Ee.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${he?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${go(fe)}</div>
          ${fe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ge=document.getElementById("current-card-wrap");se!==0?(ge.style.transition="none",ge.style.transform=`translateX(${se>0?100:-100}%)`,requestAnimationFrame(()=>{ge.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ge.style.transform="translateX(0)"})):ge.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),Q||he?re():D(),z()};Y&&J>6&&fe.card_type==="player"&&fe.player?H(fe,()=>N(!0)):N(!1)}function H(G,se){var J;r=!0;const fe=G.player,xe=`https://flagsapi.com/${fe.country_code}/flat/64.png`,Ee=(J=fe.clubs)==null?void 0:J.logo_url,_e=document.getElementById("walkout-overlay"),he=document.getElementById("walkout-stage");if(!_e||!he){r=!1,se();return}_e.style.display="flex";const Y=()=>{const N=he.firstElementChild;N&&(N.classList.remove("wo-in"),N.classList.add("wo-out"))};he.innerHTML=`<img class="wo-in" src="${xe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(Y,2e3),setTimeout(()=>{var N;he.innerHTML=Ee?`<img class="wo-in" src="${Ee}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((N=fe.clubs)==null?void 0:N.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(Y,4450),setTimeout(()=>{_e.style.display="none",he.innerHTML="",r=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),se()},4900)}function B(G){if(r||G<0||G>=e.length||G===A)return;const se=G>A?1:-1;A=G,C(G,se)}function j(){B(A+1)}function U(){B(A-1)}function oe(){const G=document.getElementById("card-viewport");if(!G||G._swipeBound)return;G._swipeBound=!0;let se=0,fe=0,xe=0,Ee=!1;const _e=R=>R.touches?R.touches[0].clientX:R.clientX,he=R=>R.touches?R.touches[0].clientY:R.clientY,Y=R=>{Ee=!0,se=_e(R),fe=he(R),xe=0},J=R=>{if(!Ee)return;xe=_e(R)-se;const Q=he(R)-fe;if(Math.abs(xe)<Math.abs(Q))return;const ge=document.getElementById("current-card-wrap");ge&&(ge.style.transition="none",ge.style.transform=`translateX(${xe*.6}px) rotate(${xe*.02}deg)`)},N=()=>{if(!Ee)return;Ee=!1;const R=document.getElementById("current-card-wrap"),Q=55;xe<=-Q&&A<e.length-1?j():xe>=Q&&A>0?U():R&&(R.style.transition="transform .2s ease",R.style.transform="translateX(0)")};G.addEventListener("pointerdown",Y),G.addEventListener("pointermove",J),G.addEventListener("pointerup",N),G.addEventListener("pointercancel",N),G.addEventListener("touchstart",Y,{passive:!0}),G.addEventListener("touchmove",J,{passive:!0}),G.addEventListener("touchend",N),G.addEventListener("click",R=>{if(Math.abs(xe)>8)return;const Q=G.getBoundingClientRect();R.clientX-Q.left>Q.width/2?j():U()})}let ce=null;function re(){const G=document.getElementById("fireworks-canvas");if(!G)return;G.width=window.innerWidth,G.height=window.innerHeight;const se=G.getContext("2d"),fe=[];function xe(){const _e=Math.random()*G.width,he=Math.random()*G.height*.6,Y=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],J=Y[Math.floor(Math.random()*Y.length)];for(let N=0;N<60;N++){const R=Math.PI*2/60*N,Q=2+Math.random()*5;fe.push({x:_e,y:he,vx:Math.cos(R)*Q,vy:Math.sin(R)*Q,alpha:1,color:J,size:2+Math.random()*3})}}xe(),ce=setInterval(xe,600);function Ee(){if(document.getElementById("fireworks-canvas")){se.clearRect(0,0,G.width,G.height);for(let _e=fe.length-1;_e>=0;_e--){const he=fe[_e];if(he.x+=he.vx,he.y+=he.vy+.08,he.vy*=.98,he.alpha-=.018,he.alpha<=0){fe.splice(_e,1);continue}se.globalAlpha=he.alpha,se.fillStyle=he.color,se.beginPath(),se.arc(he.x,he.y,he.size,0,Math.PI*2),se.fill()}se.globalAlpha=1,(ce!==null||fe.length>0)&&requestAnimationFrame(Ee)}}Ee()}function D(){ce!==null&&(clearInterval(ce),ce=null);const G=document.getElementById("fireworks-canvas");G&&G.getContext("2d").clearRect(0,0,G.width,G.height)}if(a){const G=document.getElementById("reveal-btns");G&&(G.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(W=document.getElementById("reveal-next"))==null||W.addEventListener("click",()=>{D(),c.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{D(),c.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{D(),c.remove(),i("boosters")})}function go(e){var t,i;if(e.card_type==="player"&&e.player)return lo(e);if(e.card_type==="game_changer"){const a=e._gcDef,c=(a==null?void 0:a.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},d=l[a==null?void 0:a.color]||l.purple,p=s[a==null?void 0:a.color]||s.purple,n=(a==null?void 0:a.name)||e.gc_type||"Game Changer",o=(a==null?void 0:a.effect)||((t=li[e.gc_type])==null?void 0:t.desc)||"",f=a!=null&&a.image_url?`/manager-wars/icons/${a.image_url}`:null,v=((i=li[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${d};border-radius:14px;border:3px solid ${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${p}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${n.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${c?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${f?`<img src="${f}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${v}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${o.slice(0,55)}</div>
      </div>
    </div>`}return e.card_type==="formation"?`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`:'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function mo(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},l={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
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
      </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>a.remove());return}xo()}function xo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const yo="simulation",xn="VOTRE_ZONE_ID";function bo(){switch(yo){case"propellerads":return ho();case"adsense":return vo();default:return $i()}}function $i(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const a=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),l=document.getElementById("ad-skip");c&&(c.textContent=i),l&&(l.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(a),l&&(l.disabled=!1,l.style.cssText=l.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),l==null||l.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function ho(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e($i());window.propeller.push({zone_id:xn,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function vo(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e($i());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:xn,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}async function wo(e,{state:t,navigate:i,toast:a,refreshProfile:c}){var v,w;const{data:l}=await T.from("users").select("*").eq("id",t.user.id).single();l&&(t.profile=l);let s=Array.isArray((v=t.profile)==null?void 0:v.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await T.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let d=null;try{const r=(await ln()).find(u=>(u.name||"").toLowerCase().includes("new player"));r&&(d=pn(r))}catch(A){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',A)}const p=s.length;let n=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await T.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function f(){var z;if(n>=p||!s.length){await T.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const A=s[0],{data:r}=await T.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let u=[];try{if(A.type==="formation")u=await gn(t.profile,0);else if(A.type==="game_changer")u=await fn(t.profile,A.count||3,0);else if(d&&((z=d.rates)!=null&&z.length)){const C={...d,cost:0,cardCount:A.count||d.cardCount||5};u=await ci(t.profile,C),A.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(B=>B.player&&B.player.job==="GK")||await _o(t.profile,u),await T.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await un(t.profile,A.count||5,0)}catch(C){a(C.message||"Erreur ouverture booster","error");return}s.shift(),n++,await o();const I=A.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:A.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${n}/${p})`,img:(d==null?void 0:d.img)||"/manager-wars/icons/booster-players.png"};mn(u,I,i,()=>{f()})}(w=document.getElementById("onboard-start"))==null||w.addEventListener("click",()=>f())}async function _o(e,t){try{const{data:i}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const a=i[Math.floor(Math.random()*i.length)],c=t.findIndex(s=>s.player);if(c===-1)return;const l=t[c];await T.from("cards").update({player_id:a.id}).eq("id",l.id),t[c]={...l,player_id:a.id,player:a}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const St={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},It={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function wt(e,t,i,a,c){var l;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(l=document.getElementById("msg-btn"))==null||l.addEventListener("click",c)}function qe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function pi(e,t){var a,c;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((a=i.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((c=i.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ti(){const e=Math.random()*100;return e<10?3:e<30?2:1}function yt(e,t){const i=St[t]||St["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const d=e.filter(n=>n.position&&n.position.replace(/\d+$/,"")===s).sort((n,o)=>parseInt(n.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(n=>({...n,_line:s})),p=lt(d.length);d.forEach((n,o)=>{n._col=p[o]}),a[s]=d}return a}const l=[...e];for(const s of["GK","DEF","MIL","ATT"]){const d=[];for(let n=0;n<i[s];n++){let o=l.findIndex(f=>f.job===s);if(o===-1&&(o=l.findIndex(f=>f.job2===s)),o===-1&&(o=0),l[o]){const f={...l[o],_line:s};d.push(f),l.splice(o,1)}}const p=lt(d.length);d.forEach((n,o)=>{n._col=p[o]}),a[s]=d}return a}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ye(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ii(e,t,i){const c=new Set,l=t.filter(o=>{const f=o.gc_type||o.id;return c.has(f)?!1:(c.add(f),!0)});let s=[];function d(o,f){const v=o._gcDef,w={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},A={purple:"#9b59b6",light_blue:"#00bcd4"},r=w[v==null?void 0:v.color]||w.purple,u=A[v==null?void 0:v.color]||A.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${f?"#FFD700":u};background:${r};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${f?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${f?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((v==null?void 0:v.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(v==null?void 0:v.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${v!=null&&v.image_url?`<img src="/manager-wars/icons/${v.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((v==null?void 0:v.effect)||"").slice(0,50)}</span>
      </div>
      ${f?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function n(){var f,v,w;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=s.length>0;e.innerHTML=`
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
        ${l.map(A=>{const r=s.find(u=>u.gc_type===A.gc_type);return d(A,!!r)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${o?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${o?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${o?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${o?"pointer":"default"};box-shadow:${o?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(A=>{A.addEventListener("click",()=>{const r=A.dataset.id,u=l.find(z=>z.id===r);if(!u)return;const I=s.findIndex(z=>z.gc_type===u.gc_type);I>-1?s.splice(I,1):s.length<3&&s.push(u),n()})}),(f=e.querySelector("#gc-launch"))==null||f.addEventListener("click",()=>{o&&p(s)}),(v=e.querySelector("#gc-no-gc"))==null||v.addEventListener("click",()=>p([])),(w=e.querySelector("#gc-reset"))==null||w.addEventListener("click",()=>{s.length&&(s=[],n())})}n()}function $o(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function ko(e,t,i){const{state:a,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await T.from("decks").select("id,name,is_active,formation").eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!l||l.length===0){wt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const s=l.map(o=>o.id),{data:d}=await T.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order");let p=0;function n(){var z,C,H,B,j;const o=l[p],f=(d||[]).filter(U=>U.deck_id===o.id),v=f.filter(U=>{var oe;return U.is_starter&&((oe=U.card)==null?void 0:oe.player)}).map(U=>pi(U.card,U.position)),w=f.find(U=>{var oe;return((oe=U.card)==null?void 0:oe.card_type)==="formation"}),A=o.formation||((z=w==null?void 0:w.card)==null?void 0:z.formation)||"4-4-2",r=v.length>=11?yt(v,A):null,u=v.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${$o(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===0?"0.1":"0.3"});color:${p===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${o.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${A} · ${v.length}/11 ${o.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${p===l.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${p===l.length-1?"0.1":"0.3"});color:${p===l.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${p===l.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${r?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ft(r,A,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${v.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${l.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${l.map((U,oe)=>`<div style="width:7px;height:7px;border-radius:50%;background:${oe===p?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${u?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${u?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${u?"pointer":"default"}">
          ${u?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const oe=e.querySelector(".deck-preview-wrap svg");oe&&(oe.removeAttribute("width"),oe.removeAttribute("height"),oe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",oe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(C=document.getElementById("prev-deck"))==null||C.addEventListener("click",()=>{p>0&&(p--,n())}),(H=document.getElementById("next-deck"))==null||H.addEventListener("click",()=>{p<l.length-1&&(p++,n())}),(B=document.getElementById("validate-deck"))==null||B.addEventListener("click",()=>{if(!u)return;const U=t.state.params||{};t.navigate("match",{...U,matchMode:U.matchMode||i,deckId:o.id})}),(j=document.getElementById("cancel-deck-select"))==null||j.addEventListener("click",()=>{Ye(e),c("home")});const I=document.getElementById("deck-swipe-zone");if(I){let U=0,oe=0;I.addEventListener("touchstart",ce=>{U=ce.touches[0].clientX,oe=ce.touches[0].clientY},{passive:!0}),I.addEventListener("touchend",ce=>{const re=ce.changedTouches[0].clientX-U,D=ce.changedTouches[0].clientY-oe;Math.abs(re)<40||Math.abs(re)<Math.abs(D)||(re<0&&p<l.length-1?(p++,n()):re>0&&p>0&&(p--,n()))},{passive:!0})}}n()}function yn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ke(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:qe(e),c=yn(e),l=e._line||e.job||"MIL",s=It[l]||"#555",d={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number($e(e,l))||0)+(e.boost||0),n=bn(e==null?void 0:e.country_code),o=Math.round(i*.19),f=Math.round(i*.25),v=i-Math.round(i*.19)-Math.round(i*.25),w=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${d};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${w}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${v}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${f}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Xt(e==null?void 0:e.country_code)?`<img src="${Xt(e.country_code)}" style="width:${f+2}px;height:${f-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${f-4}px">${n}</span>`}
      <span style="font-size:${f-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${f-4}px;height:${f-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,f-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function nt(e,t,i){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((l,s)=>{if(c+=Ke(l,40,52),s<a.length-1){const d=at(l,a[s+1]);c+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Xt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function bn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ut(e,t,i,a,c=310,l=310,s=[]){var C;const d=Pt[t]||{},p=Ki(t)||mi[t]||[],n={},o=["ATT","MIL","DEF","GK"];for(const H of o)(e[H]||[]).forEach((j,U)=>{n[`${H}${U+1}`]=j});function f(H){const B=d[H];return B?{x:B.x*c,y:B.y*l}:null}let v="";for(const[H,B]of p){const j=f(H),U=f(B);if(!j||!U)continue;const oe=n[H],ce=n[B],re=at(oe,ce);re==="#00ff88"||re==="#FFD700"?(v+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${U.x.toFixed(1)}" y2="${U.y.toFixed(1)}"
        stroke="${re}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,v+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${U.x.toFixed(1)}" y2="${U.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):v+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${U.x.toFixed(1)}" y2="${U.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const w=48,A=64,r=13,u=16,I={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[H,B]of Object.entries(n)){const j=f(H);if(!j||!B)continue;const U=H.replace(/[0-9]/g,""),oe=It[U]||"#555",ce=s.includes(B.cardId),re=i==="attack"&&(["MIL","ATT"].includes(U)||ce)&&!B.used||i==="defense"&&["GK","DEF","MIL"].includes(U)&&!B.used,D=a.includes(B.cardId);let ie;i==="attack"?ie=ce?Math.max(1,Number(B.note_a)||0):U==="MIL"?Number(B.note_m)||0:Number(B.note_a)||0:i==="defense"?ie=U==="GK"?Number(B.note_g)||0:U==="MIL"?Number(B.note_m)||0:Number(B.note_d)||0:ie=Number(U==="GK"?B.note_g:U==="DEF"?B.note_d:U==="MIL"?B.note_m:B.note_a)||0,ie=ie+(B.boost||0);const W=(j.x-w/2).toFixed(1),G=(j.y-A/2).toFixed(1),se=I[B==null?void 0:B.rarity]||I.normal;if(B.used){const J=typeof import.meta<"u"&&"/manager-wars/"||"/",R=`${typeof window<"u"&&((C=window.location)==null?void 0:C.origin)||""}${J}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");v+=`<rect x="${W}" y="${G}" width="${w}" height="${A}" rx="5" fill="#161616"/>`,v+=`<image href="${R}" xlink:href="${R}" x="${W}" y="${G}" width="${w}" height="${A}" preserveAspectRatio="xMidYMid slice"/>`,v+=`<rect x="${W}" y="${G}" width="${w}" height="${A}" rx="5" fill="none" stroke="${se}" stroke-width="2" opacity="0.7"/>`,v+=`<rect x="${W}" y="${G}" width="${w}" height="${A}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${B.cardId}" data-role="${U}" style="cursor:pointer"/>`;continue}const fe=D?.45:1,xe=D?"#FFD700":se,Ee=D?3:(B==null?void 0:B.rarity)==="legende"||(B==null?void 0:B.rarity)==="légende"||(B==null?void 0:B.rarity)==="pepite"||(B==null?void 0:B.rarity)==="pépite"?2.5:2,_e=A-r-u;v+=`<defs><clipPath id="cp-${H}"><rect x="${W}" y="${(j.y-A/2+r).toFixed(1)}" width="${w}" height="${_e}"/></clipPath></defs>`,v+=`<rect x="${W}" y="${G}" width="${w}" height="${A}" rx="5" fill="${oe}" opacity="${fe}"/>`;const he=qe(B);he&&(v+=`<image href="${he}" xlink:href="${he}" x="${W}" y="${(j.y-A/2+r).toFixed(1)}" width="${w}" height="${_e}" clip-path="url(#cp-${H})" preserveAspectRatio="xMidYMin slice"/>`),v+=`<rect x="${W}" y="${G}" width="${w}" height="${r}" rx="4" fill="rgba(255,255,255,0.92)"/>`,v+=`<text x="${j.x.toFixed(1)}" y="${(j.y-A/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(B.name||"").slice(0,9)}</text>`;const Y=(j.y+A/2-u).toFixed(1);v+=`<rect x="${W}" y="${Y}" width="${w}" height="${u}" fill="rgba(255,255,255,0.92)"/>`;{const J=Xt(B.country_code);J?v+=`<image href="${J}" xlink:href="${J}" x="${(j.x-20).toFixed(1)}" y="${(j.y+A/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:v+=`<text x="${(j.x-13).toFixed(1)}" y="${(j.y+A/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${bn(B.country_code)}</text>`,v+=`<text x="${j.x.toFixed(1)}" y="${(j.y+A/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${ie}</text>`;const N=yn(B);N?v+=`<image href="${N}" xlink:href="${N}" x="${(j.x+w/2-14).toFixed(1)}" y="${(j.y+A/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:B.clubName&&(v+=`<text x="${(j.x+14).toFixed(1)}" y="${(j.y+A/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(B.clubName||"").slice(0,3).toUpperCase()}</text>`),B.boost&&(v+=`<rect x="${(j.x+w/2-12).toFixed(1)}" y="${(j.y-A/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,v+=`<text x="${(j.x+w/2-5).toFixed(1)}" y="${(j.y-A/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${B.boost}</text>`)}v+=`<rect x="${W}" y="${G}" width="${w}" height="${A}" rx="5" fill="${D?"rgba(255,255,255,0.12)":"none"}" stroke="${xe}" stroke-width="${Ee}" opacity="${fe}"/>`,re&&(v+=`<rect x="${W}" y="${G}" width="${w}" height="${A}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${D?"selected":""}" data-card-id="${B.cardId}" data-role="${U}" style="cursor:pointer"/>`)}const z=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-z} ${-z} ${c+z*2} ${l+z*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${v}
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
  </div>`}async function ni(e,t,i,a){var B;const{state:c,navigate:l,toast:s}=t;et(e);const d=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!d.deckId)return ko(e,t,i);const p=d.deckId;let n,o,f,v;try{const j=await Promise.all([T.from("decks").select("formation,name").eq("id",p).single(),T.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);n=j[0].data,f=j[0].error,o=j[1].data,v=j[1].error}catch(j){console.error("[Match] Exception chargement deck:",j),wt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>l("home"));return}if(f||v){console.error("[Match] Erreur Supabase:",f||v),wt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>l("home"));return}const w=(o||[]).filter(j=>{var U;return j.is_starter&&((U=j.card)==null?void 0:U.player)}).map(j=>pi(j.card,j.position)),A=(o||[]).filter(j=>{var U;return!j.is_starter&&((U=j.card)==null?void 0:U.player)}).map(j=>pi(j.card,j.position));if(w.length<11){wt(e,"⚠️",`Deck incomplet (${w.length}/11).`,"Compléter",()=>l("decks"));return}const r=(o||[]).find(j=>{var U;return((U=j.card)==null?void 0:U.card_type)==="formation"}),u=(n==null?void 0:n.formation)||((B=r==null?void 0:r.card)==null?void 0:B.formation)||"4-4-2",{data:I,error:z}=await T.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:C}=await T.from("gc_definitions").select("*").eq("is_active",!0),H=(I||[]).map(j=>({...j,_gcDef:(C==null?void 0:C.find(U=>U.name===j.gc_type||U.id===j.gc_definition_id))||null}));a({deckId:p,formation:u,starters:w,subsRaw:A,gcCardsEnriched:H,gcDefs:C||[]})}async function Eo(e,t){const{state:i}=t,c=(i.params||{}).matchMode||"vs_ai_easy",l=c.replace("vs_ai_",""),s=c;await ni(e,t,c,async({deckId:d,formation:p,starters:n,subsRaw:o,gcCardsEnriched:f,gcDefs:v})=>{try{const w=yt(n,p),A=await To(p,l),r=async u=>{try{const{data:I,error:z}=await T.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:d,status:"in_progress"}).select().single();if(z){console.error("[MatchIA] Erreur création match:",z),wt(e,"⚠️","Impossible de créer le match ("+z.message+").","Retour",()=>t.navigate("home"));return}const C={gcDefs:v||[],matchId:I==null?void 0:I.id,mode:s,difficulty:l,formation:p,homeTeam:w,aiTeam:A,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),homeScore:0,aiScore:0,gcCards:u,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};zo(e,C,t)}catch(I){console.error("[MatchIA] Exception launchMatch:",I),wt(e,"⚠️","Erreur au lancement du match : "+I.message,"Retour",()=>t.navigate("home"))}};if(!f.length){r([]);return}ii(e,f,r)}catch(w){console.error("[MatchIA] Exception setup:",w),wt(e,"⚠️","Erreur de préparation du match : "+w.message,"Retour",()=>t.navigate("home"))}})}async function To(e,t){var s,d;const{data:i}=await T.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Ao(e);const a=St[e]||St["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},l=[...i];for(const p of["GK","DEF","MIL","ATT"]){const n=l.filter(A=>A.job===p),o=l.filter(A=>A.job!==p),f=[...n,...o],v=[];for(let A=0;A<a[p];A++){const r=f[A]||l[A];r&&v.push({cardId:"ai-"+r.id+"-"+A,id:r.id,firstname:r.firstname,name:r.surname_encoded,country_code:r.country_code,club_id:r.club_id,job:r.job,job2:r.job2,note_g:Number(r.note_g)||0,note_d:Number(r.note_d)||0,note_m:Number(r.note_m)||0,note_a:Number(r.note_a)||0,rarity:r.rarity,skin:r.skin,hair:r.hair,hair_length:r.hair_length,clubName:((s=r.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((d=r.clubs)==null?void 0:d.logo_url)||null,boost:0,used:!1,_line:p})}const w=lt(v.length);v.forEach((A,r)=>{A._col=w[r]}),c[p]=v}return c}function Ao(e){const t=St[e]||St["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const l of["GK","DEF","MIL","ATT"]){const s=[];for(let p=0;p<t[l];p++){const n=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:a[c%a.length],country_code:"XX",club_id:null,job:l,job2:null,note_g:l==="GK"?n:2,note_d:l==="DEF"?n:2,note_m:l==="MIL"?n:2,note_a:l==="ATT"?n:2,rarity:"normal",boost:0,used:!1,_line:l}),c++}const d=lt(s.length);s.forEach((p,n)=>{p._col=d[n]}),i[l]=s}return i}function zo(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${ut(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Lo(e,t,i),5e3)}function Lo(e,t,i){const a=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function l(r){return r.reduce((u,I)=>u+$e(I,"MIL"),0)}function s(r){let u=0;for(let I=0;I<r.length-1;I++){const z=at(r[I],r[I+1]);z==="#00ff88"?u+=2:z==="#FFD700"&&(u+=1)}return u}const d=l(a)+s(a),p=l(c)+s(c),n=d>=p;function o(r,u,I,z){return`<div id="duel-row-${z}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${u}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((C,H)=>{const B=H<r.length-1?at(C,r[H+1]):null,j=!B||B==="#ff3333"||B==="#cc2222",U=B==="#00ff88"?"+2":B==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${z}" data-idx="${H}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ke({...C,note:$e(C,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${H<r.length-1?`<div class="duel-link duel-link-${z}" data-idx="${H}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${j?"rgba(255,255,255,0.12)":B};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${j?"none":`0 0 8px ${B}`}">
            ${U?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${B}">${U}</span>`:""}
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

    ${o(a,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${o(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const f=()=>{const r=(u,I)=>e.querySelectorAll(u).forEach((z,C)=>{setTimeout(()=>{z.style.opacity="1",z.style.transform="translateY(0) scale(1)"},I+C*90)});r(".duel-card-home",150),r(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((u,I)=>{setTimeout(()=>{u.style.opacity="1"},I*70)}),900),setTimeout(()=>{const u=e.querySelector("#vs-label");u&&(u.style.opacity="1",u.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(I=>I.style.opacity="1")},1250),setTimeout(()=>{v("score-home",d,800),v("score-ai",p,800)},1500)};function v(r,u,I){const z=document.getElementById(r);if(!z)return;const C=performance.now(),H=B=>{const j=Math.min(1,(B-C)/I);z.textContent=Math.round(u*(1-Math.pow(1-j,3))),j<1?requestAnimationFrame(H):z.textContent=u};requestAnimationFrame(H)}requestAnimationFrame(f),t.attacker=n?"home":"ai";const w=n?ti():null;n&&(t.boostCard={value:w}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(r=>({name:r.name,note:$e(r,"MIL"),portrait:qe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:c.map(r=>({name:r.name,note:$e(r,"MIL"),portrait:qe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:d,aiTotal:p,text:`Duel milieu : ${t.clubName} ${d} – ${p} IA → ${n?t.clubName+" attaque":"IA attaque"}`});const A=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Je(e,t,i),t.attacker==="ai"&&setTimeout(()=>ui(e,t,i),800)};setTimeout(()=>{const r=document.getElementById("score-home"),u=document.getElementById("score-ai"),I=document.getElementById(n?"duel-row-home":"duel-row-ai"),z=document.getElementById(n?"duel-row-ai":"duel-row-home"),C=n?r:u,H=n?u:r;C&&(C.style.fontSize="80px",C.style.color=n?"#FFD700":"#ff6b6b",C.style.animation="duelPulse .5s ease"+(n?", duelGlow 1.5s ease infinite .5s":"")),H&&(H.style.opacity="0.25"),setTimeout(()=>{I&&(I.style.transformOrigin="center",I.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",I.style.zIndex="5"),setTimeout(()=>{var j;const B=document.getElementById("duel-shock");if(B){const U=(j=z||I)==null?void 0:j.getBoundingClientRect(),oe=e.querySelector(".match-screen").getBoundingClientRect();U&&(B.style.top=U.top-oe.top+U.height/2+"px"),B.style.animation="shockwave .5s ease-out forwards"}z&&(z.style.transformOrigin="center",z.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var j;const B=document.getElementById("duel-finale");B&&(B.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${n?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${n?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${w}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,B.style.transition="opacity .45s ease",B.style.opacity="1",B.style.pointerEvents="auto",(j=document.getElementById("start-match-btn"))==null||j.addEventListener("click",A))},600)},700)},2800)}function So(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Je(e,t,i){var C,H,B,j,U,oe,ce,re;const a=t.selected.map(D=>D.cardId),c=t.usedSubIds||[],l=t.homeSubs.filter(D=>!c.includes(D.cardId)),d=Object.values(t.homeTeam).flat().filter(D=>D.used).length>0&&l.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(D=>(t.aiTeam[D]||[]).some(ie=>!ie.used)),n=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(D=>!D.used),o=t.phase==="attack"&&p&&n.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(D=>!D.used).map(D=>D.cardId):[];t.log[t.log.length-1];const f=t.phase==="ai-attack"||t.phase==="ai-defense",v=t.phase==="attack",w=t.phase==="defense",A=t.phase==="finished",r=t.gcCards.filter(D=>!t.usedGc.includes(D.id)),u=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const ie=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${nt((ie.players||[]).map(W=>({...W,used:!1})),"#ff6b6b",ie.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const ie=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${nt((ie.players||[]).map(W=>({...W,used:!1})),"#00ff88",ie.total)}
          </div>`}const D=t.log[t.log.length-1];return D?'<div style="padding:2px 4px">'+So(D)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const D=window.innerWidth>=700,ie=(Y,J,N)=>{var Re,Ze;const R=(t.gcDefs||[]).find(M=>M.name===Y.gc_type),Q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[R==null?void 0:R.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ge={purple:"#b06ce0",light_blue:"#00d4ef"}[R==null?void 0:R.color]||"#b06ce0",pe=(R==null?void 0:R.name)||Y.gc_type,Me=(R==null?void 0:R.effect)||((Re=Ue[Y.gc_type])==null?void 0:Re.desc)||"",Ce=R!=null&&R.image_url?`/manager-wars/icons/${R.image_url}`:null,Be=((Ze=Ue[Y.gc_type])==null?void 0:Ze.icon)||"⚡",Ve=Math.round(N*.22),Se=Math.round(N*.22),Ne=N-Ve-Se,Ie=pe.length>12?7:9;return`<div class="gc-mini" data-gc-id="${Y.id}" data-gc-type="${Y.gc_type}"
          style="box-sizing:border-box;width:${J}px;height:${N}px;border-radius:10px;border:2px solid ${ge};background:${Q};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Ve}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Ie}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${J-6}px">${pe}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ne}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Ce?`<img src="${Ce}" style="max-width:${J-10}px;max-height:${Ne-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ne*.55)}px">${Be}</span>`}
          </div>
          <div style="height:${Se}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Me.slice(0,38)}</span>
          </div>
        </div>`},W=(Y,J)=>{var N;return`<div id="boost-card"
          style="box-sizing:border-box;width:${Y}px;height:${J}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(J*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(J*.2)}px">⚡</div>
            <div style="font-size:${Math.round(J*.09)}px;color:#000;font-weight:900">+${(N=t.boostCard)==null?void 0:N.value}</div>
          </div>`},G=(Y,J)=>J?W(130,175):ie(Y,130,175),se=(Y,J)=>J?W(68,95):ie(Y,68,95),fe=D?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",xe=A?`<button id="btn-results" style="${fe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:f?`<div style="${fe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:v?`<button id="btn-action" style="${fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:w?`<button id="btn-action" style="${fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${fe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Ee=v||w?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",_e=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${D?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${l.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':l.map(Y=>`<div class="sub-btn-col" data-sub-id="${Y.cardId}" style="cursor:pointer;flex-shrink:0">${Ke(Y,76,100)}</div>`).join("")}
      </div>`,he=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ft(t.homeTeam,t.formation,t.phase,a,300,300,o)}
        </div>
      </div>`;return D?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${_e}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${he}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${xe}${Ee}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${r.map(Y=>G(Y,!1)).join("")}
            ${u?G(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(t.homeTeam,t.formation,t.phase,a,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${r.map(Y=>se(Y,!1)).join("")}
            ${u?se(null,!0):""}
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
          <div>${xe}${Ee}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(D=>{var ie,W,G;if(D.type==="duel"){const se=D.isGoal,fe=D.homeScored?"#FFD700":se?"#ff6b6b":"rgba(255,255,255,0.3)",xe=D.homeScored?"⚽ BUT !":se?"⚽ BUT IA !":(ie=D.homePlayers)!=null&&ie.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${se?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${fe};margin-bottom:4px">
                <div style="font-size:9px;color:${fe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${xe}</div>
                ${(W=D.homePlayers)!=null&&W.length?`<div style="margin-bottom:3px">${nt(D.homePlayers,"rgba(255,255,255,0.7)",D.homeTotal)}</div>`:""}
                ${(G=D.aiPlayers)!=null&&G.length?`<div style="opacity:0.7">${nt(D.aiPlayers,"#ff6b6b",D.aiTotal)}</div>`:""}
              </div>`}return D.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${D.outPlayer?Ke({...D.outPlayer,used:!0,_line:D.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${D.inPlayer?Ke({...D.inPlayer,_line:D.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:D.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${D.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${D.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function I(){const D=e.querySelector(".match-screen");if(!D)return;const ie=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);D.style.bottom="auto",D.style.height=ie+"px",D.style.minHeight=ie+"px",D.style.maxHeight=ie+"px",D.style.overflow="hidden";const W=e.querySelector("#mobile-action-bar"),G=e.querySelector("#mobile-play-area");W&&G&&(G.style.paddingBottom=W.offsetHeight+"px")}if(I(),setTimeout(I,120),setTimeout(I,400),setTimeout(I,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",I),window.visualViewport.addEventListener("scroll",I)),window.addEventListener("resize",I)),function(){const ie=e.querySelector(".terrain-wrapper svg");ie&&(ie.removeAttribute("width"),ie.removeAttribute("height"),ie.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ie.setAttribute("viewBox","-26 -26 352 352"),ie.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const D=e.querySelector(".terrain-wrapper svg");D&&(D.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let D=!1,ie=30;const W=()=>document.getElementById("match-timer"),G=()=>{const se=W();if(!se)return;const fe=String(Math.floor(ie/60)).padStart(2,"0"),xe=String(ie%60).padStart(2,"0");se.textContent=` ${fe}:${xe}`,se.style.color=D?"#ff2222":"#ff9500",se.style.fontWeight="900"};G(),t._timerInt=setInterval(()=>{if(ie--,ie<0)if(!D)D=!0,ie=15,G();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const se=document.createElement("div");se.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",se.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(se),setTimeout(()=>{se.remove(),qt(e,t,i)},2500)}else G()},1e3)}(C=document.getElementById("match-quit"))==null||C.addEventListener("click",()=>{Ye(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,qt(e,t,i))}),(H=document.getElementById("view-ai"))==null||H.addEventListener("click",()=>Po(t,i)),(B=document.getElementById("toggle-history"))==null||B.addEventListener("click",()=>{var D;(D=document.getElementById("match-history-panel"))==null||D.classList.add("open")}),(j=document.getElementById("close-history"))==null||j.addEventListener("click",()=>{var D;(D=document.getElementById("match-history-panel"))==null||D.classList.remove("open")}),(U=document.getElementById("btn-action"))==null||U.addEventListener("click",()=>{t.selected.length!==0&&(v?Mo(e,t,i):w&&Co(e,t,i))}),(oe=document.getElementById("btn-results"))==null||oe.addEventListener("click",()=>qt(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(D=>{D.addEventListener("click",()=>Io(D,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(D=>{D.addEventListener("click",()=>ai(e,t,i,null,D.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(D=>{D.addEventListener("click",()=>Fo(D.dataset.gcId,D.dataset.gcType,e,t,i))}),(ce=document.getElementById("boost-card"))==null||ce.addEventListener("click",()=>Go(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(D=>{D.addEventListener("click",()=>ai(e,t,i,D.dataset.subId))}),(re=document.getElementById("sub-btn-main"))==null||re.addEventListener("click",()=>ai(e,t,i))}function Io(e,t,i,a){const c=e.dataset.cardId,l=e.dataset.role,s=t.selected.findIndex(d=>d.cardId===c);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const d=(t.homeTeam[l]||[]).find(p=>p.cardId===c);d&&t.selected.push({...d,_role:l,_line:l})}Je(i,t,a)}function ki(e,t,i){e.matchId&&T.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Mo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ki(t,i,i.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(d=>!d.used)),c=t.selected.map(s=>{const d=(t.homeTeam[s._role]||[]).find(n=>n.cardId===s.cardId)||s,p=a&&["GK","DEF"].includes(s._role);return{...d,_line:s._role,...p?{note_a:Math.max(1,Number(d.note_a)||0)}:{}}}),l=Nt(c,t.modifiers.home);t.pendingAttack={...l,players:[...c],side:"home"},t.selected.forEach(s=>{const d=(t.homeTeam[s._role]||[]).find(p=>p.cardId===s.cardId);d&&(d.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${l.total} (base ${l.base}${l.links?` +${l.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Je(e,t,i),setTimeout(()=>jo(e,t,i),1200)}function Co(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ki(t,i,i.state.profile.id);const a=t.selected.map(d=>({...(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId)||d,_line:d._role})),c=Rt(a,t.modifiers.home);t.selected.forEach(d=>{const p=(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId);p&&(p.used=!0)});const l=Ot(t.pendingAttack.total,c.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>({name:d.name,note:d._line==="MIL"?d.note_m:d.note_a,portrait:qe(d),job:d.job,country_code:d.country_code,rarity:d.rarity,clubName:d.clubName,clubLogo:d.clubLogo})),homePlayers:t.selected.map(d=>{const p=(t.homeTeam[d._role]||[]).find(n=>n.cardId===d.cardId)||d;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:qe(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(l.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(l.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Je(e,t,i),Zt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{At(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,At(e,t,i,"home-attack")}function ui(e,t,i){ki(t,i,null);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=en(a,"attack",t.difficulty);if(!c.length){Wt(e,t,i);return}const l=Nt(c,t.modifiers.ai);t.pendingAttack={...l,players:c,side:"ai"},c.forEach(n=>{n.used=!0}),t.log.push({text:`🤖 IA attaque : ${l.total} (${c.map(n=>n.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used),p=(t.homeSubs||[]).filter(n=>!(t.usedSubIds||[]).includes(n.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!p){t.aiScore++;const n={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:qe(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:l.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(n),t.pendingAttack=null,Je(e,t,i),Zt(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{At(e,t,i,"home-attack")});return}t.phase="defense",Je(e,t,i)}function jo(e,t,i){var n,o;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=en(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(f=>(t.aiTeam[f]||[]).filter(v=>!v.used)).length){t.homeScore++;const v={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((n=t.pendingAttack)==null?void 0:n.players)||[]).map(w=>({name:w.name,note:$e(w,w._line||w.job),portrait:qe(w),job:w.job,country_code:w.country_code,rarity:w.rarity,clubName:w.clubName,clubLogo:w.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(v),t.modifiers.ai={},t.pendingAttack=null,Je(e,t,i),Zt(v.homePlayers,t.homeScore,t.aiScore,!0,()=>{At(e,t,i,"ai-attack")});return}const s=c.length>0?Rt(c,t.modifiers.ai).total:0;c.forEach(f=>{f.used=!0});const d=Ot(t.pendingAttack.total,s,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(f=>({name:f.name,note:f._line==="MIL"?f.note_m:f.note_a,portrait:qe(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),aiPlayers:c.map(f=>({name:f.name,note:f._line==="GK"?f.note_g:f._line==="MIL"?f.note_m:f.note_d,portrait:qe(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(d.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(d.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,Je(e,t,i),Zt(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{At(e,t,i,"ai-attack")});return}else p.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,At(e,t,i,"ai-attack")}function At(e,t,i,a){if(t.round++,hn(t)){qt(e,t,i);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(l=>!l.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used).length){Wt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Wt(e,t,i);return}setTimeout(()=>ui(e,t,i),100);return}t.phase="attack",Je(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Wt(e,t,i);return}t.phase="ai-attack",Je(e,t,i),setTimeout(()=>ui(e,t,i),800)}}function hn(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(c=>!c.used));return!t&&!i}function Wt(e,t,i){hn(t)?qt(e,t,i):(t.phase="attack",Je(e,t,i))}function qo(e,t,i){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=qe(e),l=qe(t),s=It[e.job]||"#555",d=It[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,n=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${p}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${d};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${l?`<img src="${l}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${n}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let o=!1;const f=()=>{o||(o=!0,a.remove(),i())};a.addEventListener("click",f),setTimeout(f,2e3)}function Mt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ai(e,t,i,a=null,c=null){var w,A;if(t.phase!=="attack"){Mt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Mt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const l=Object.entries(t.homeTeam).flatMap(([r,u])=>(u||[]).filter(I=>I.used).map(I=>({...I,_line:I._line||r}))),s=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!l.length){Mt("Aucun joueur utilisé à remplacer");return}if(!s.length){Mt("Aucun remplaçant disponible");return}let d=Math.max(0,l.findIndex(r=>r.cardId===c));const p=((w=l[d])==null?void 0:w._line)||((A=l[d])==null?void 0:A.job);let n=a?Math.max(0,s.findIndex(r=>r.cardId===a)):Math.max(0,s.findIndex(r=>r.job===p)),o=!1;const f=document.createElement("div");f.id="sub-overlay",f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function v(){var B,j,U,oe,ce,re;const r=l[d],u=s[n],I=Math.min(130,Math.round((window.innerWidth-90)/2)),z=Math.round(I*1.35),C=D=>`background:rgba(255,255,255,0.12);border:none;color:${D?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${D?"default":"pointer"};flex-shrink:0`;f.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${C(n===0)}" ${n===0?"disabled":""}>▲</button>
        <div>${u?Ke({...u,used:!1,boost:0},I,z):"<div>—</div>"}</div>
        <button id="in-down" style="${C(n>=s.length-1)}" ${n>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${n+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${C(d===0)}" ${d===0?"disabled":""}>▲</button>
        <div>${r?Ke({...r,used:!1,boost:0},I,z):"<div>—</div>"}</div>
        <button id="out-down" style="${C(d>=l.length-1)}" ${d>=l.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${d+1}/${l.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(B=f.querySelector("#sub-close"))==null||B.addEventListener("click",()=>f.remove()),(j=f.querySelector("#out-up"))==null||j.addEventListener("click",()=>{d>0&&(d--,v())}),(U=f.querySelector("#out-down"))==null||U.addEventListener("click",()=>{d<l.length-1&&(d++,v())}),(oe=f.querySelector("#in-up"))==null||oe.addEventListener("click",()=>{n>0&&(n--,v())}),(ce=f.querySelector("#in-down"))==null||ce.addEventListener("click",()=>{n<s.length-1&&(n++,v())});const H=(D,ie,W,G)=>{const se=f.querySelector("#"+D);if(!se)return;let fe=0;se.addEventListener("touchstart",xe=>{fe=xe.touches[0].clientY},{passive:!0}),se.addEventListener("touchend",xe=>{const Ee=xe.changedTouches[0].clientY-fe;if(Math.abs(Ee)<30)return;const _e=ie();Ee<0&&_e<G-1?(W(_e+1),v()):Ee>0&&_e>0&&(W(_e-1),v())},{passive:!0})};H("in-panel",()=>n,D=>n=D,s.length),H("out-panel",()=>d,D=>d=D,l.length),(re=f.querySelector("#sub-confirm"))==null||re.addEventListener("click",D=>{if(D.preventDefault(),D.stopPropagation(),o)return;o=!0;const ie=l[d],W=s[n];if(!ie||!W)return;let G=null,se=-1;for(const[xe,Ee]of Object.entries(t.homeTeam)){const _e=(Ee||[]).findIndex(he=>he.cardId===ie.cardId);if(_e!==-1){G=xe,se=_e;break}}if(se===-1||!G){Mt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),f.remove();return}const fe={...W,_line:G,_col:ie._col||0,used:!1,boost:0};t.homeTeam[G].splice(se,1,fe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(W.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ie.name,firstname:ie.firstname,note:$e(ie,G),portrait:qe(ie),job:ie.job,country_code:ie.country_code,rarity:ie.rarity,clubName:ie.clubName,clubLogo:ie.clubLogo},inPlayer:{name:W.name,firstname:W.firstname,note:$e(W,G),portrait:qe(W),job:W.job,country_code:W.country_code,rarity:W.rarity,clubName:W.clubName,clubLogo:W.clubLogo},text:`🔄 ${W.firstname} ${W.name} remplace ${ie.firstname} ${ie.name}`}),f.remove(),qo(ie,W,()=>Je(e,t,i))})}document.body.appendChild(f),v()}function Fo(e,t,i,a,c){var A,r;const l=(a.gcDefs||[]).find(u=>u.name===t),s=Ue[t]||{icon:"⚡",desc:"Carte spéciale."},d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[l==null?void 0:l.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[l==null?void 0:l.color]||"#b06ce0",n=(l==null?void 0:l.name)||t,o=(l==null?void 0:l.effect)||s.desc,f=l!=null&&l.image_url?`/manager-wars/icons/${l.image_url}`:null,v=s.icon||"⚡",w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",w.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${n.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${n}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${f?`<img src="${f}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${v}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(w),(A=w.querySelector("#gc-back"))==null||A.addEventListener("click",()=>w.remove()),(r=w.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{w.remove(),Do(e,t,i,a,c)})}function Kt(e,t,i,a,c,l){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let d=[];function p(){var n,o;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${d.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(f=>{const v=f._line||f.job||"MIL",w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v]||"#555",A=$e(f,v)+(f.boost||0),r=d.find(u=>u.cardId===f.cardId);return`<div class="gc-pick-item" data-cid="${f.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${r?"#FFD700":"rgba(255,255,255,0.25)"};background:${w};overflow:hidden;cursor:pointer;flex-shrink:0;${f.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${A}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${v}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${d.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${d.length}/${t})
      </button>
    </div>`,(n=s.querySelector("#gc-picker-close"))==null||n.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(f=>{f.addEventListener("click",()=>{const v=f.dataset.cid,w=e.find(r=>r.cardId===v);if(!w)return;const A=d.findIndex(r=>r.cardId===v);A>-1?d.splice(A,1):d.length<t&&d.push(w),p()})}),(o=s.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{s.remove(),l(d)})}p(),document.body.appendChild(s)}const Bo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},a,c,l)=>{const s=Object.entries(a.homeTeam).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,p])=>p.filter(n=>!n.used).map(n=>({...n,_line:d})));return s.length?(Kt(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,a,d=>{d.forEach(p=>{const n=(a.homeTeam[p._line]||[]).find(o=>o.cardId===p.cardId);n&&(n.boost=(n.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${n.name}`,type:"info"}))}),Je(c,a,l)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Je(c,a,l),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:a="ai"},c,l,s)=>{const d=a==="home"?c.homeTeam:c.aiTeam,p=a==="ai"?"adverse":"allié",n=Object.entries(d).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,f])=>f.filter(v=>!v.used).map(v=>({...v,_line:o})));return n.length?(Kt(n,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,l,c,o=>{o.forEach(f=>{const w=((a==="home"?c.homeTeam:c.aiTeam)[f._line]||[]).find(A=>A.cardId===f.cardId);w&&(w.boost=(w.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${w.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Je(l,c,s)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),Je(l,c,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},a,c,l)=>{const s=i==="home"?a.homeTeam:a.aiTeam,d=i==="ai"?"adverse":"allié",p=Object.entries(s).filter(([n])=>!t.length||t.includes(n)).flatMap(([n,o])=>o.filter(f=>!f.used).map(f=>({...f,_line:n})));return p.length?(Kt(p,e,`Choisir ${e} joueur(s) ${d}(s) à exclure`,c,a,n=>{n.forEach(o=>{const v=((i==="home"?a.homeTeam:a.aiTeam)[o._line]||[]).find(w=>w.cardId===o.cardId);v&&(v.used=!0,a.log.push({text:`❌ ${v.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Je(c,a,l)}),!0):(a.log.push({text:`❌ Aucun joueur ${d} à exclure`,type:"info"}),Je(c,a,l),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,a,c)=>{const l=Object.entries(i.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,d])=>d.filter(p=>p.used).map(p=>({...p,_line:s})));return l.length?(Kt(l,e,`Choisir ${e} joueur(s) à ressusciter`,a,i,s=>{s.forEach(d=>{const p=(i.homeTeam[d._line]||[]).find(n=>n.cardId===d.cardId);p&&(p.used=!1,i.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),Je(a,i,c)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Je(a,i,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Do(e,t,i,a,c){a.usedGc.push(e);const l=a.gcDefs||[],s=l.find(p=>p.name===t)||l.find(p=>{var n;return((n=p.name)==null?void 0:n.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let d=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const p=Bo[s.effect_type];p?p(s.effect_params||{},a,i,c)||(d=!0):(c.toast(`Effet "${s.effect_type}" non implémenté`,"error"),d=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(a.homeTeam).flatMap(([n,o])=>(o||[]).filter(f=>f.used).map(f=>({...f,_line:n})));p.length?(p[0].used=!1,a.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(n=>!n.used);if(p.length){const n=p.sort((o,f)=>$e(f,"ATT")-$e(o,"ATT"))[0];n.used=!0,a.log.push({text:`❄️ ${n.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}d=!0}T.from("cards").delete().eq("id",e).then(()=>{}),d&&Je(i,a,c)}function Go(e,t,i){const a=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!a.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${It[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${$e(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const l=c.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const d=(t.homeTeam[s]||[]).find(p=>p.cardId===l);if(d){d.boost=(d.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${d.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Je(e,t,i)})})}function Zt(e,t,i,a,c){const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(n,o)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${o%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][o%8]}
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
    ${e.map(n=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${It[n.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${n.portrait?`<img src="${n.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(n.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(l);let d=!1;const p=()=>{d||(d=!0,l.remove(),setTimeout(()=>c(),50))};l.addEventListener("click",p),setTimeout(p,3500)}async function qt(e,t,i){var o,f;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=i,c=t.homeScore>t.aiScore,l=t.homeScore===t.aiScore,s=c?"victoire":l?"nul":"defaite",d=Un(t.mode,s);t.matchId&&await T.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?a.profile.id:null,home_credits_reward:d,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(a.profile.credits||0)+d,matches_played:(a.profile.matches_played||0)+1};c?p.wins=(a.profile.wins||0)+1:l?p.draws=(a.profile.draws||0)+1:p.losses=(a.profile.losses||0)+1,await T.from("users").update(p).eq("id",a.profile.id),await i.refreshProfile();const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{n.remove(),Ye(e),i.navigate("home")}),(f=document.getElementById("res-replay"))==null||f.addEventListener("click",()=>{n.remove(),Ye(e),i.navigate("match",{matchMode:t.mode})})}function Po(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ut(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function vn(e,t){var i,a;try{const c=(a=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:a.id;try{(T.getChannels?T.getChannels():[]).forEach(s=>{const d=s.topic||"";(d.includes("matchmaking")||d.includes("pvp-match")||d.includes("friend-invite"))&&T.removeChannel(s)})}catch(l){console.warn("[Random] cleanup canaux:",l)}c&&await T.rpc("cancel_matchmaking",{p_user_id:c}).catch(()=>{})}catch{}await ni(e,t,"random",({deckId:c,formation:l,starters:s,subsRaw:d,gcCardsEnriched:p,gcDefs:n})=>{const o=f=>No(e,t,c,l,s,d,f,n||[]);if(!p.length){o([]);return}ii(e,p,o)})}async function No(e,t,i,a,c,l,s=[],d=[]){var z;const{state:p,navigate:n,toast:o}=t;let f=!1,v=null;et(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const w=async(C=!0)=>{f=!0,v&&(T.removeChannel(v),v=null),C&&await T.rpc("cancel_matchmaking",{p_user_id:p.profile.id}).catch(()=>{})};(z=document.getElementById("mm-cancel"))==null||z.addEventListener("click",async()=>{try{await w(!0)}catch{}Ye(e),n("home")});const A=async(C,H,B)=>{if(f)return;f=!0,v&&(T.removeChannel(v),v=null);const j=document.getElementById("mm-status");j&&(j.textContent="Adversaire trouvé !"),await new Promise(U=>setTimeout(U,600)),e.isConnected&&wn(e,t,C,B,s,d)},{data:r,error:u}=await T.rpc("try_matchmake",{p_user_id:p.profile.id,p_deck_id:i});if(u||!(r!=null&&r.success)){o("Erreur de matchmaking","error"),Ye(e),n("home");return}if(r.matched){A(r.match_id,r.opponent_id,!1);return}const I=document.getElementById("mm-status");I&&(I.textContent="En attente d'un autre joueur..."),v=T.channel("matchmaking-"+p.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${p.profile.id}`},C=>{const H=C.new;H.status==="matched"&&H.match_id&&A(H.match_id,H.matched_with,!0)}).subscribe()}async function Ro(e,t,i){const{state:a,navigate:c,toast:l}=t;try{(T.getChannels?T.getChannels():[]).forEach(n=>{const o=n.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&T.removeChannel(n)})}catch{}const{data:s}=await T.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!s){l("Match introuvable","error"),c("home");return}if(s.status==="finished"){l("Ce match est terminé","info"),c("home");return}const d=s.home_id===a.profile.id;wn(e,t,i,d,[],[])}async function wn(e,t,i,a,c=[],l=[]){const{state:s,navigate:d,toast:p}=t,n=a?"p1":"p2",o=a?"p2":"p1",f=(c||[]).map(M=>M.id),v=(c||[]).map(M=>({id:M.id,gc_type:M.gc_type,_gcDef:M._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:w}=await T.from("matches").select("*").eq("id",i).single();if(!w){p("Match introuvable","error"),d("home");return}async function A(){const[{data:M},{data:P},{data:_},{data:$}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:w.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:w.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",w.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",w.away_id).single()]),g=h=>({cardId:h.card_id,position:h.position,id:h.id,firstname:h.firstname,name:h.surname_encoded,country_code:h.country_code,club_id:h.club_id,job:h.job,job2:h.job2,note_g:Number(h.note_g)||0,note_d:Number(h.note_d)||0,note_m:Number(h.note_m)||0,note_a:Number(h.note_a)||0,rarity:h.rarity,skin:h.skin,hair:h.hair,hair_length:h.hair_length,clubName:h.club_encoded_name||null,clubLogo:h.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),m=((M==null?void 0:M.starters)||[]).map(h=>g(h)),x=((P==null?void 0:P.starters)||[]).map(h=>g(h)),y=(M==null?void 0:M.formation)||"4-4-2",b=(P==null?void 0:P.formation)||"4-4-2";return{p1Team:yt(m,y),p2Team:yt(x,b),p1Subs:((M==null?void 0:M.subs)||[]).map(h=>g(h)),p2Subs:((P==null?void 0:P.subs)||[]).map(h=>g(h)),p1Formation:y,p2Formation:b,p1Name:(_==null?void 0:_.club_name)||(_==null?void 0:_.pseudo)||"Joueur 1",p2Name:($==null?void 0:$.club_name)||($==null?void 0:$.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?v:[],gcCardsFull_p2:a?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let r=w.game_state&&Object.keys(w.game_state).length?w.game_state:null;if(!r)if(a){r=await A();const{data:M}=await T.from("matches").select("game_state").eq("id",i).single();!(M!=null&&M.game_state)||!Object.keys(M.game_state).length?await T.from("matches").update({game_state:r,turn_user_id:w.home_id}).eq("id",i):r=M.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let M=0;M<30&&!r;M++){await new Promise(_=>setTimeout(_,400));const{data:P}=await T.from("matches").select("game_state").eq("id",i).single();P!=null&&P.game_state&&Object.keys(P.game_state).length&&(r=P.game_state)}if(!r){p("Erreur de synchronisation","error"),d("home");return}r.gc_p2=f,r.gcCardsFull_p2=v,await T.from("matches").update({game_state:r}).eq("id",i)}let u=!1,I=null,z=!1;const C=new Set,H=new Set;function B(M){var h,E;try{T.removeChannel(j)}catch{}const P=r[n+"Score"]||0,_=r[o+"Score"]||0;let $,g;M.winner_id?($=M.winner_id===s.profile.id,g=!1):M.forfeit?($=P>_,g=!1):(g=P===_,$=P>_),(h=document.getElementById("pvp-end-overlay"))==null||h.remove();const m=document.createElement("div");m.id="pvp-end-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const x=g?"🤝":$?"🏆":"😞",y=g?"MATCH NUL":$?"VICTOIRE !":"DÉFAITE",b=g?"#fff":$?"#FFD700":"#ff6b6b";m.innerHTML=`
      <div style="font-size:64px">${x}</div>
      <div style="font-size:26px;font-weight:900;color:${b}">${y}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${P} – ${_} ${r[o+"Name"]}</div>
      ${M.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${$?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(m),(E=m.querySelector("#pvp-end-home"))==null||E.addEventListener("click",()=>{m.remove(),Ye(e),d("home")})}const j=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},M=>{const P=M.new;try{if(P.status==="finished"||P.forfeit){if(u)return;u=!0,I&&(clearInterval(I),I=null),P.game_state&&(r=P.game_state),B(P);return}if(P.game_state){const _=r;r=P.game_state;const $=r._lastGC;if($&&$.seq&&!H.has($.seq)&&(H.add($.seq),$.by!==n)){_e($.type,$.by,()=>G());return}const g=_[n+"Score"]||0,m=_[o+"Score"]||0,x=r[n+"Score"]||0,y=r[o+"Score"]||0,b=x>g,h=y>m;if((b||h)&&!C.has(r.round)){C.add(r.round);const E=[...r.log||[]].reverse().find(L=>L.isGoal),k=((E==null?void 0:E.homePlayers)||[]).map(L=>({name:L.name,note:L.note,portrait:L.portrait,job:L.job}));Ee(k,x,y,b,()=>G());return}G()}}catch(_){console.error("[PvP] crash:",_)}}).subscribe();async function U(M){Object.assign(r,M),r.lastActionAt=new Date().toISOString();const{error:P}=await T.from("matches").update({game_state:r}).eq("id",i);P&&p("Erreur de synchronisation","error");try{G()}catch(_){console.error("[PvP] renderPvpScreen crash:",_)}}async function oe(){if(u)return;u=!0,I&&(clearInterval(I),I=null);const M=a?w.away_id:w.home_id,P=a?"p2":"p1",_=a?"p1":"p2",$={...r,[P+"Score"]:3,[_+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:M,home_score:$.p1Score||0,away_score:$.p2Score||0,game_state:$}).eq("id",i)}catch{}try{T.removeChannel(j)}catch{}setTimeout(()=>{Ye(e),d("home")},800)}const ce={BOOST_STAT:({value:M=1,count:P=1,roles:_=[]},$,g)=>{const m=$[n+"Team"],x=Object.entries(m).filter(([y])=>!_.length||_.includes(y)).flatMap(([y,b])=>b.filter(h=>!h.used).map(h=>({...h,_line:y})));if(!x.length){$.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),g($);return}re(x,P,`Choisir ${P} joueur(s) à booster (+${M})`,y=>{y.forEach(b=>{const h=(m[b._line]||[]).find(E=>E.cardId===b.cardId);h&&(h.boost=(h.boost||0)+M,$.log.push({text:`⚡ +${M} sur ${h.name}`,type:"info"}))}),$[n+"Team"]=m,g($)})},DEBUFF_STAT:({value:M=1,count:P=1,roles:_=[],target:$="ai"},g,m)=>{const x=$==="home"?n:o,y=g[x+"Team"],b=$==="home"?"allié":"adverse",h=Object.entries(y).filter(([E])=>!_.length||_.includes(E)).flatMap(([E,k])=>k.map(L=>({...L,_line:E})));if(!h.length){g.log.push({text:`🎯 Aucun joueur ${b}`,type:"info"}),m(g);return}re(h,P,`Choisir ${P} joueur(s) ${b}(s) (-${M})`,E=>{E.forEach(k=>{const L=(y[k._line]||[]).find(S=>S.cardId===k.cardId);L&&(L.boost=(L.boost||0)-M,g.log.push({text:`🎯 -${M} sur ${L.name}`,type:"info"}))}),g[x+"Team"]=y,m(g)})},GRAY_PLAYER:({count:M=1,roles:P=[],target:_="ai"},$,g)=>{const m=_==="home"?n:o,x=$[m+"Team"],y=_==="home"?"allié":"adverse",b=Object.entries(x).filter(([h])=>!P.length||P.includes(h)).flatMap(([h,E])=>E.filter(k=>!k.used).map(k=>({...k,_line:h})));if(!b.length){$.log.push({text:`❌ Aucun joueur ${y}`,type:"info"}),g($);return}re(b,M,`Choisir ${M} joueur(s) ${y}(s) à exclure`,h=>{const E="usedCardIds_"+m,k=new Set($[E]||[]);h.forEach(L=>{const S=(x[L._line]||[]).find(q=>q.cardId===L.cardId);S&&(S.used=!0,k.add(L.cardId),$.log.push({text:`❌ ${S.name} exclu !`,type:"info"}))}),$[E]=[...k],$[m+"Team"]=x,g($)})},REVIVE_PLAYER:({count:M=1,roles:P=[]},_,$)=>{const g=_[n+"Team"],m=Object.entries(g).filter(([x])=>!P.length||P.includes(x)).flatMap(([x,y])=>y.filter(b=>b.used).map(b=>({...b,_line:x})));if(!m.length){_.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),$(_);return}re(m,M,`Choisir ${M} joueur(s) à ressusciter`,x=>{x.forEach(y=>{const b=(g[y._line]||[]).find(h=>h.cardId===y.cardId);b&&(b.used=!1,_.log.push({text:`💫 ${b.name} ressuscité !`,type:"info"}))}),_[n+"Team"]=g,$(_)})},REMOVE_GOAL:({},M,P)=>{const _=o+"Score";M[_]>0?(M[_]--,M.log.push({text:"🚫 Dernier but annulé !",type:"info"})):M.log.push({text:"🚫 Aucun but à annuler",type:"info"}),P(M)},ADD_GOAL_DRAW:({},M,P)=>{M[n+"Score"]===M[o+"Score"]?(M[n+"Score"]++,M.log.push({text:"🎯 But bonus !",type:"info"})):M.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),P(M)},ADD_SUB:({value:M=1},P,_)=>{P.maxSubs=(P.maxSubs||3)+M,P.log.push({text:`🔄 +${M} remplacement(s)`,type:"info"}),_(P)},CUSTOM:({},M,P)=>P(M)};function re(M,P,_,$){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let m=[];function x(){var b,h;const y=M.map(E=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[E._line]||"#555",L=$e(E,E._line)+(E.boost||0),q=m.find(O=>O.cardId===E.cardId)?"#FFD700":"rgba(255,255,255,0.25)",F=E.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${E.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${q};background:${k};overflow:hidden;cursor:pointer;${F}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${E.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${L}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${E._line}</div>
        </div>`}).join("");g.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${_}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m.length}/${P}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${y}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${m.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${m.length}/${P})
          </button>
        </div>`,(b=g.querySelector("#pp-close"))==null||b.addEventListener("click",()=>g.remove()),g.querySelectorAll(".pp-item").forEach(E=>{E.addEventListener("click",()=>{const k=E.dataset.cid,L=M.find(q=>q.cardId===k),S=m.findIndex(q=>q.cardId===k);L&&(S>-1?m.splice(S,1):m.length<P&&m.push(L),x())})}),(h=g.querySelector("#pp-confirm"))==null||h.addEventListener("click",()=>{g.remove(),$(m)})}x(),document.body.appendChild(g)}async function D(M,P){const $=(r["gcCardsFull_"+n]||[]).find(y=>y.id===M),g=($==null?void 0:$._gcDef)||(r.gcDefs||[]).find(y=>{var b;return y.name===P||((b=y.name)==null?void 0:b.toLowerCase().trim())===(P==null?void 0:P.toLowerCase().trim())}),m=[...r["usedGc_"+n]||[],M],x={type:P,by:n,seq:(r._gcAnimSeq||0)+1};H.add(x.seq),_e(P,n,async()=>{if(g!=null&&g.effect_type&&g.effect_type!=="CUSTOM"){const b=ce[g.effect_type];if(b){const h={...r};b(g.effect_params||{},h,async E=>{E["usedGc_"+n]=m,E._lastGC=x,E._gcAnimSeq=x.seq,await U(E)});return}}const y={...r};switch(P){case"Remplacement+":y.maxSubs=(y.maxSubs||3)+1,y.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const b=o+"Score";y[b]>0&&(y[b]--,y.log.push({text:"🚫 But annulé",type:"info"}));break}}y["usedGc_"+n]=m,y._lastGC=x,y._gcAnimSeq=x.seq,await U(y)})}function ie(M,P){const _="usedCardIds_"+M,$=new Set(r[_]||[]);P.forEach(g=>$.add(g)),r[_]=[...$]}function W(){for(const M of["p1","p2"]){const P=new Set(r["usedCardIds_"+M]||[]),_=r[M+"Team"];if(_)for(const $ of["GK","DEF","MIL","ATT"])(_[$]||[]).forEach(g=>{g.used=P.has(g.cardId)})}}function G(){var Oe,We,Xe,Qe,ot,gt;if(r.phase==="reveal")return se();if(r.phase==="midfield")return xe();if(r.phase==="finished")return Ze();const M=r[n+"Team"],P=r[o+"Team"];W();const _=r[n+"Score"],$=r[o+"Score"],g=r[n+"Name"],m=r[o+"Name"],x=r.phase===n+"-attack",y=r.phase===n+"-defense",b=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],h=b.map(ae=>ae.cardId),E=window.innerWidth>=700,k=r[n+"Subs"]||[],L=r["usedSubIds_"+n]||[],S=k.filter(ae=>!L.includes(ae.cardId)),q=r["gcCardsFull_"+n]||[],F=r["usedGc_"+n]||[],O=q.filter(ae=>!F.includes(ae.id)),V=r.boostOwner===n&&!r.boostUsed,X=!["GK","DEF","MIL","ATT"].some(ae=>(P[ae]||[]).some(ve=>!ve.used)),K=[...M.MIL||[],...M.ATT||[]].filter(ae=>!ae.used),te=x&&X&&K.length===0?[...M.GK||[],...M.DEF||[]].filter(ae=>!ae.used).map(ae=>ae.cardId):[];function ne(ae,ve,ee){var pt,ht;const le=ae._gcDef,Z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[le==null?void 0:le.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",de={purple:"#b06ce0",light_blue:"#00d4ef"}[le==null?void 0:le.color]||"#b06ce0",Ae=(le==null?void 0:le.name)||ae.gc_type,we=(le==null?void 0:le.effect)||((pt=Ue[ae.gc_type])==null?void 0:pt.desc)||"",tt=le!=null&&le.image_url?`/manager-wars/icons/${le.image_url}`:null,it=((ht=Ue[ae.gc_type])==null?void 0:ht.icon)||"⚡",rt=Math.round(ee*.22),st=Math.round(ee*.22),ct=ee-rt-st,$t=Ae.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ae.id}" data-gc-type="${ae.gc_type}"
        style="box-sizing:border-box;width:${ve}px;height:${ee}px;border-radius:10px;border:2px solid ${de};background:${Z};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${rt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${$t}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ve-6}px">${Ae}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ct}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${tt?`<img src="${tt}" style="max-width:${ve-10}px;max-height:${ct-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ct*.55)}px">${it}</span>`}
        </div>
        <div style="height:${st}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${we.slice(0,38)}</span>
        </div>
      </div>`}function ue(ae,ve){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ae}px;height:${ve}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ve*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ve*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ve*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const me=(ae,ve)=>ve?ue(130,175):ne(ae,130,175),ye=(ae,ve)=>ve?ue(68,95):ne(ae,68,95),be=E?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Te=x?Se(n)?`<button id="pvp-action" style="${be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${b.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:y?`<button id="pvp-action" style="${be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${b.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${m}</div>`,ke=x&&!Se(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':x||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${b.length}/3 sélectionné(s)</div>`:"",De=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${E?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${S.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':S.map(ae=>`<div class="pvp-sub-btn" data-sub-id="${ae.cardId}" style="cursor:pointer;flex-shrink:0">${Ke(ae,E?76:44,E?100:58)}</div>`).join("")}
    </div>`,ze=x?"attack":y?"defense":"idle",Ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(M,r[n+"Formation"],ze,h,300,300,te)}
      </div>
    </div>`;function Le(ae){if(ae.type==="duel"&&(ae.homeTotal!=null||ae.aiTotal!=null)){const ve=(ae.homeTotal||0)>=(ae.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(ae.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ae.homePlayers||[]).map(ee=>dt(ee)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ve?20:14}px;font-weight:900;color:${ve?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${ae.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ve?14:20}px;font-weight:900;color:${ve?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${ae.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ae.aiPlayers||[]).map(ee=>dt(ee)).join("")}
            </div>
          </div>
          ${ae.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${ae.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${ae.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ae.type==="goal"?700:400};padding:3px 2px">${ae.text||""}</div>`}const He=(()=>{var ve,ee;if(y&&((ve=r.pendingAttack)!=null&&ve.players)){const le=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${m} ATTAQUE — Défendez !</div>
          ${nt((le.players||[]).map(Z=>({...Z,used:!1})),"#ff6b6b",le.total)}
        </div>`}if(x&&((ee=r.pendingAttack)!=null&&ee.players)){const le=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((le.players||[]).map(Z=>({...Z,used:!1})),"#00ff88",le.total)}
        </div>`}const ae=(r.log||[]).slice(-1)[0];return ae?'<div style="padding:2px 4px">'+Le(ae)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Fe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${_} – ${$}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${He}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",E?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Fe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${De}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ge}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Te}${ke}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${O.map(ae=>me(ae,!1)).join("")}
            ${V?me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Fe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(M,r[n+"Formation"],ze,h,300,300,te)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${O.map(ae=>ye(ae,!1)).join("")}
            ${V?ye(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${x&&S.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${x&&S.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${x&&S.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${x&&S.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${S.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(r["usedSubIds_"+n]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(r["usedSubIds_"+n]||[]).length}/${r.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Te}${ke}</div>
        </div>
      </div>`;function Pe(){const ae=e.querySelector(".match-screen");if(!ae)return;const ve=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ae.style.height=ve+"px",ae.style.minHeight=ve+"px",ae.style.maxHeight=ve+"px",ae.style.overflow="hidden";const ee=e.querySelector("#mobile-action-bar"),le=e.querySelector("#mobile-play-area");ee&&le&&(le.style.paddingBottom=ee.offsetHeight+"px")}if(Pe(),setTimeout(Pe,120),setTimeout(Pe,400),z||(z=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Pe),window.visualViewport.addEventListener("scroll",Pe)),window.addEventListener("resize",Pe)),function(){const ve=e.querySelector(".terrain-wrapper svg");ve&&(ve.removeAttribute("width"),ve.removeAttribute("height"),ve.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ve.setAttribute("viewBox","-26 -26 352 352"),ve.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ae=>{ae.addEventListener("click",()=>{if(!x&&!y)return;const ve=ae.dataset.cardId,ee=ae.dataset.role,le=(M[ee]||[]).find(we=>we.cardId===ve);if(!le||le.used)return;const Z=te.includes(ve);if(x&&!["MIL","ATT"].includes(ee)&&!Z)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const de=r["selected_"+n],Ae=de.findIndex(we=>we.cardId===ve);Ae>-1?de.splice(Ae,1):de.length<3&&de.push({...le,_role:ee}),G()})}),e.querySelectorAll(".match-used-hit").forEach(ae=>{ae.addEventListener("click",()=>J(ae.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ae=>{ae.addEventListener("click",()=>J())}),(Oe=e.querySelector("#pvp-sub-open"))==null||Oe.addEventListener("click",()=>J()),e.querySelectorAll(".pvp-gc-mini").forEach(ae=>{ae.addEventListener("click",()=>he(ae.dataset.gcId,ae.dataset.gcType))}),(We=e.querySelector("#pvp-boost-card"))==null||We.addEventListener("click",()=>Y()),(Xe=e.querySelector("#pvp-action"))==null||Xe.addEventListener("click",ae=>{x?ae.currentTarget.dataset.pass==="1"||!Se(n)?ge():pe():y&&Me()}),(Qe=e.querySelector("#pvp-quit"))==null||Qe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&oe()}),(ot=e.querySelector("#pvp-view-opp"))==null||ot.addEventListener("click",()=>R()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>Q()),I&&(clearInterval(I),I=null),(x||y)&&!u){let ae=30,ve=!1;const ee=()=>document.getElementById("pvp-timer"),le=()=>{ee()&&(ee().textContent=ae+"s",ee().style.color=ve?"#ff4444":"#fff")};le(),I=setInterval(()=>{ae--,ae<0?ve?(clearInterval(I),I=null,x&&!Se(n)?ge():oe()):(ve=!0,ae=15,le()):le()},1e3)}}function se(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await U({phase:"midfield"})},5e3)}let fe=!1;function xe(){if(fe)return;const M=r[n+"Team"].MIL||[],P=r[o+"Team"].MIL||[];function _(O){return O.reduce((V,X)=>V+$e(X,"MIL"),0)}function $(O){let V=0;for(let X=0;X<O.length-1;X++){const K=at(O[X],O[X+1]);K==="#00ff88"?V+=2:K==="#FFD700"&&(V+=1)}return V}const g=_(M)+$(M),m=_(P)+$(P),x=g>=m;function y(O,V,X){return`<div id="duel-row-${X}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${V}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${O.map((K,te)=>{const ne=te<O.length-1?at(K,O[te+1]):null,ue=!ne||ne==="#ff3333"||ne==="#cc2222",me=ne==="#00ff88"?"+2":ne==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${X}" data-idx="${te}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ke({...K,note:$e(K,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${te<O.length-1?`<div class="duel-link duel-link-${X}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ue?"rgba(255,255,255,0.12)":ne};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ue?"none":`0 0 8px ${ne}`}">
              ${me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ne}">${me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${X}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${_(O)} + ${$(O)} liens = <b style="color:#fff">${_(O)+$(O)}</b>
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
      ${y(M,r[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${y(P,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const b=(O,V)=>e.querySelectorAll(O).forEach((X,K)=>{setTimeout(()=>{X.style.opacity="1",X.style.transform="translateY(0) scale(1)"},V+K*90)});b(".duel-card-me",150),b(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((O,V)=>setTimeout(()=>{O.style.opacity="1"},V*70)),900),setTimeout(()=>{const O=e.querySelector("#pvp-vs");O&&(O.style.opacity="1",O.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function h(O,V,X){const K=document.getElementById(O);if(!K)return;const te=performance.now(),ne=ue=>{const me=Math.min(1,(ue-te)/X);K.textContent=Math.round(V*(1-Math.pow(1-me,3))),me<1?requestAnimationFrame(ne):K.textContent=V};requestAnimationFrame(ne)}setTimeout(()=>{h("pvp-score-me",g,800),h("pvp-score-opp",m,800)},1500);const E=r.p1Team.MIL||[],k=r.p2Team.MIL||[],L=_(E)+$(E),S=_(k)+$(k),q=L>=S?"p1":"p2";let F=r.boostValue;F==null&&(F=ti(),r.boostValue=F,r.boostOwner=q,r.boostUsed=!1),fe=!0,setTimeout(()=>{const O=e.querySelector("#duel-row-"+(x?"me":"opp")),V=e.querySelector("#duel-row-"+(x?"opp":"me")),X=document.getElementById("pvp-score-me"),K=document.getElementById("pvp-score-opp"),te=x?X:K,ne=x?K:X;te&&(te.style.fontSize="80px",te.style.color=x?"#FFD700":"#ff6b6b",te.style.animation="duelPulse .5s ease"+(x?",duelGlow 1.5s ease infinite .5s":"")),ne&&(ne.style.opacity="0.25"),setTimeout(()=>{O&&(O.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",O.style.zIndex="5"),setTimeout(()=>{const ue=document.getElementById("duel-shock");ue&&(ue.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var be;const ue=document.getElementById("pvp-duel-finale");if(!ue)return;const me=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+F+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",ye=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ue.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(x?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+me+ye,ue.style.transition="opacity .45s ease",ue.style.opacity="1",ue.style.pointerEvents="auto",(be=document.getElementById("pvp-start-match"))==null||be.addEventListener("click",async()=>{const Te=q;await U({phase:Te+"-attack",attacker:Te,round:1,boostValue:F,boostUsed:!1,boostOwner:Te})})},600)},700)},2800)}function Ee(M,P,_,$,g){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const x=Array.from({length:10},(E,k)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${k%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][k%8]}</div>`).join(""),y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};m.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${x}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${$?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${P} – ${_}
      </div>
      ${M!=null&&M.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${M.map(E=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${y[E.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${E.portrait?`<img src="${E.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(E.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(m);let b=!1;const h=()=>{b||(b=!0,m.remove(),setTimeout(()=>g(),50))};m.addEventListener("click",h),setTimeout(h,3500)}function _e(M,P,_){var F,O;const $=(r.gcDefs||[]).find(V=>{var X;return V.name===M||((X=V.name)==null?void 0:X.toLowerCase().trim())===(M==null?void 0:M.toLowerCase().trim())}),g={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[$==null?void 0:$.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",m={purple:"#b06ce0",light_blue:"#00d4ef"}[$==null?void 0:$.color]||"#b06ce0",x=($==null?void 0:$.name)||M,y=($==null?void 0:$.effect)||((F=Ue[M])==null?void 0:F.desc)||"",b=$!=null&&$.image_url?`/manager-wars/icons/${$.image_url}`:null,h=((O=Ue[M])==null?void 0:O.icon)||"⚡",k=P===n?"Vous":r[P+"Name"]||"Adversaire",L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",L.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${m}66}50%{box-shadow:0 0 60px ${m}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${m};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${k} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${m};background:${g};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${x.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${x}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${b?`<img src="${b}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${h}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${y}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(L);let S=!1;const q=()=>{S||(S=!0,L.remove(),setTimeout(()=>_&&_(),50))};L.addEventListener("click",q),setTimeout(q,3e3)}function he(M,P){var L,S,q,F;const $=(r["gcCardsFull_"+n]||[]).find(O=>O.id===M),g=$==null?void 0:$._gcDef,m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[g==null?void 0:g.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[g==null?void 0:g.color]||"#b06ce0",y=(g==null?void 0:g.name)||P,b=(g==null?void 0:g.effect)||((L=Ue[P])==null?void 0:L.desc)||"Carte spéciale.",h=g!=null&&g.image_url?`/manager-wars/icons/${g.image_url}`:null,E=((S=Ue[P])==null?void 0:S.icon)||"⚡",k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",k.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${x};background:${m};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${x}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${y.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${y}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${h?`<img src="${h}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${E}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${b}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(k),(q=k.querySelector("#pvp-gc-back"))==null||q.addEventListener("click",()=>k.remove()),(F=k.querySelector("#pvp-gc-use"))==null||F.addEventListener("click",()=>{k.remove(),D(M,P)})}function Y(){var $;const M=r[n+"Team"],P=Object.entries(M).flatMap(([g,m])=>(m||[]).filter(x=>!x.used).map(x=>({...x,_line:g})));if(!P.length)return;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",_.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${P.map(g=>{const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[g._line]||"#555",x=$e(g,g._line)+(g.boost||0);return`<div class="bp-item" data-cid="${g.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${m};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${g.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${x}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(_),($=_.querySelector("#bp-close"))==null||$.addEventListener("click",()=>_.remove()),_.querySelectorAll(".bp-item").forEach(g=>{g.addEventListener("click",async()=>{const m=g.dataset.cid,x=P.find(b=>b.cardId===m);if(!x)return;const y=(M[x._line]||[]).find(b=>b.cardId===m);y&&(y.boost=(y.boost||0)+r.boostValue),_.remove(),await U({[n+"Team"]:M,boostUsed:!0})})})}function J(M=null){var S,q;if(!(r.phase===n+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const _=r[n+"Team"],$=r["usedSubIds_"+n]||[],g=r.maxSubs||3;if($.length>=g){p(`Maximum ${g} remplacements atteint`,"warning");return}const m=Object.entries(_).flatMap(([F,O])=>(O||[]).filter(V=>V.used).map(V=>({...V,_line:F}))),x=(r[n+"Subs"]||[]).filter(F=>!$.includes(F.cardId));if(!m.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!x.length){p("Aucun remplaçant disponible","warning");return}let y=Math.max(0,m.findIndex(F=>F.cardId===M));const b=((S=m[y])==null?void 0:S._line)||((q=m[y])==null?void 0:q.job);let h=Math.max(0,x.findIndex(F=>F.job===b)),E=!1;const k=document.createElement("div");k.id="pvp-sub-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function L(){var ne,ue,me,ye,be,Te;const F=m[y],O=x[h],V=Math.min(130,Math.round((window.innerWidth-90)/2)),X=Math.round(V*1.35),K=ke=>`background:rgba(255,255,255,0.12);border:none;color:${ke?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ke?"default":"pointer"};flex-shrink:0`;k.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${$.length}/${g})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${K(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${O?Ke({...O,used:!1,boost:0},V,X):"<div>—</div>"}</div>
          <button id="pin-down" style="${K(h>=x.length-1)}" ${h>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${x.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${K(y===0)}" ${y===0?"disabled":""}>▲</button>
          <div>${F?Ke({...F,used:!1,boost:0},V,X):"<div>—</div>"}</div>
          <button id="pout-down" style="${K(y>=m.length-1)}" ${y>=m.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${y+1}/${m.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ne=k.querySelector("#psub-close"))==null||ne.addEventListener("click",()=>k.remove()),(ue=k.querySelector("#pout-up"))==null||ue.addEventListener("click",()=>{y>0&&(y--,L())}),(me=k.querySelector("#pout-down"))==null||me.addEventListener("click",()=>{y<m.length-1&&(y++,L())}),(ye=k.querySelector("#pin-up"))==null||ye.addEventListener("click",()=>{h>0&&(h--,L())}),(be=k.querySelector("#pin-down"))==null||be.addEventListener("click",()=>{h<x.length-1&&(h++,L())});const te=(ke,De,ze,Ge)=>{const Le=k.querySelector("#"+ke);if(!Le)return;let He=0;Le.addEventListener("touchstart",Fe=>{He=Fe.touches[0].clientY},{passive:!0}),Le.addEventListener("touchend",Fe=>{const Pe=Fe.changedTouches[0].clientY-He;if(Math.abs(Pe)<30)return;const Oe=De();Pe<0&&Oe<Ge-1?(ze(Oe+1),L()):Pe>0&&Oe>0&&(ze(Oe-1),L())},{passive:!0})};te("pin-panel",()=>h,ke=>h=ke,x.length),te("pout-panel",()=>y,ke=>y=ke,m.length),(Te=k.querySelector("#psub-confirm"))==null||Te.addEventListener("click",async ke=>{if(ke.preventDefault(),ke.stopPropagation(),E)return;E=!0;const De=m[y],ze=x[h];if(!De||!ze)return;const Ge=De._line,Le=(_[Ge]||[]).findIndex(Pe=>Pe.cardId===De.cardId);if(Le===-1){p("Erreur : joueur introuvable","error"),k.remove();return}const He={...ze,_line:Ge,position:De.position,used:!1,boost:0};_[Ge].splice(Le,1,He);const Fe=[...$,ze.cardId];k.remove(),N(De,ze,async()=>{await U({[n+"Team"]:_,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Fe})})})}document.body.appendChild(k),L()}function N(M,P,_){const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const m=(b,h,E)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${h};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${E}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${$[b.job]||"#555"};border:3px solid ${h};position:relative;overflow:hidden;margin:0 auto">
        ${qe(b)?`<img src="${qe(b)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(b.name||"").slice(0,12)}</div>
    </div>`;g.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${m(P,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${m(M,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(g);let x=!1;const y=()=>{x||(x=!0,g.remove(),setTimeout(()=>_(),50))};g.addEventListener("click",y),setTimeout(y,2200)}function R(){var P;const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",M.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(M),(P=M.querySelector("#pvp-opp-close"))==null||P.addEventListener("click",()=>M.remove())}function Q(){var _;const M=r.log||[],P=document.createElement("div");P.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",P.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${M.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...M].reverse().map($=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${$.type==="goal"?"#FFD700":$.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${$.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(P),(_=P.querySelector("#pvp-hist-close"))==null||_.addEventListener("click",()=>P.remove())}async function ge(){if(r.phase!==n+"-attack")return;const M=n==="p1"?"p2":"p1",P=(r.round||0)+1,_=[...r.log||[]];_.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const $=Ne(r),g=Se(M),m=$||!g?"finished":M+"-attack";await U({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:m,attacker:M,round:P,log:_}),m==="finished"&&await Re(r)}async function pe(){const M=r[n+"Team"],P=!["GK","DEF","MIL","ATT"].some(m=>(r[o+"Team"][m]||[]).some(x=>!x.used)),_=(r["selected_"+n]||[]).map(m=>{const x=(M[m._role]||[]).find(L=>L.cardId===m.cardId)||m,y=P&&["GK","DEF"].includes(m._role),b=M[m._role]||[],h=b.findIndex(L=>L.cardId===m.cardId),E=lt(b.length),k=h>=0?E[h]:x._col??1;return{...x,_line:m._role,_col:k,...y?{note_a:Math.max(1,Number(x.note_a)||0)}:{}}});if(!_.length)return;const $=Nt(_,r.modifiers[n]||{});ie(n,_.map(m=>m.cardId)),_.forEach(m=>{const x=(M[m._role]||[]).find(y=>y.cardId===m.cardId);x&&(x.used=!0)}),r["selected_"+n]=[],G();const g=[...r.log||[]];if(P){const m=(r[n+"Score"]||0)+1,x=_.map(k=>({name:k.name,note:$e(k,k._line||"ATT"),portrait:qe(k),job:k.job}));g.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:x,homeTotal:$.total,aiTotal:0});const y=(r.round||0)+1,b=n==="p1"?"p2":"p1",h={...r,[n+"Team"]:M,[n+"Score"]:m},E=Ne(h);C.add(y),Ee(x,m,r[o+"Score"]||0,!0,async()=>{await U({[n+"Team"]:M,[n+"Score"]:m,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:E?"finished":b+"-attack",attacker:b,round:y,log:g}),E&&await Re({...r,[n+"Score"]:m})});return}g.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${$.total})`}),await U({[n+"Team"]:M,[o+"Team"]:r[o+"Team"],pendingAttack:{...$,players:_,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:g})}async function Me(){const M=r[n+"Team"],P=(r["selected_"+n]||[]).map(F=>{const O=(M[F._role]||[]).find(ne=>ne.cardId===F.cardId)||F,V=M[F._role]||[],X=V.findIndex(ne=>ne.cardId===F.cardId),K=lt(V.length),te=X>=0?K[X]:O._col??1;return{...O,_line:F._role,_col:te}}),_=Rt(P,r.modifiers[n]||{});ie(n,P.map(F=>F.cardId)),P.forEach(F=>{const O=(M[F._role]||[]).find(V=>V.cardId===F.cardId);O&&(O.used=!0)}),r["selected_"+n]=[],G();const $=Ot(r.pendingAttack.total,_.total,r.modifiers[n]||{}),g=r.pendingAttack.side,m=$==="attack"||($==null?void 0:$.goal),x=g==="p1"?"p2":"p1",y=(r.round||0)+1,b=(r.pendingAttack.players||[]).map(F=>({name:F.name,note:$e(F,F._line||"ATT"),portrait:qe(F),job:F.job})),h=[...r.log||[]];h.push({type:"duel",isGoal:m,homeScored:m&&g===n,text:m?`⚽ BUT de ${r[g+"Name"]} ! (${r.pendingAttack.total} vs ${_.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${_.total})`,homePlayers:b,aiPlayers:P.map(F=>({name:F.name,note:$e(F,F._line||"DEF"),portrait:qe(F),job:F.job})),homeTotal:r.pendingAttack.total,aiTotal:_.total});const E=m?(r[g+"Score"]||0)+1:r[g+"Score"]||0,k={...r,[n+"Team"]:M,[g+"Score"]:E},L=Ne(k),S=L?"finished":x+"-attack",q=async()=>{await U({[n+"Team"]:M,[o+"Team"]:r[o+"Team"],[g+"Score"]:E,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:S,attacker:x,round:y,log:h}),(S==="finished"||L)&&await Re({...r,[g+"Score"]:E})};if(m){const F=g===n,O=F?E:r[n+"Score"]||0,V=F?r[o+"Score"]||0:E;C.add(y),Ee(b,O,V,F,q)}else await q()}function Ce(M){return["MIL","ATT"].some(P=>(M[P]||[]).some(_=>!_.used))}function Be(M){return["GK","DEF","MIL","ATT"].some(P=>(M[P]||[]).some(_=>!_.used))}function Ve(M){return Be(M)&&!Ce(M)}function Se(M){const P=r[M+"Team"],_=r[(M==="p1"?"p2":"p1")+"Team"];return!!(Ce(P)||!Be(_)&&Ve(P))}function Ne(M){const P=["MIL","ATT"].some(h=>(M.p1Team[h]||[]).some(E=>!E.used)),_=["MIL","ATT"].some(h=>(M.p2Team[h]||[]).some(E=>!E.used)),$=Be(M.p1Team),g=Be(M.p2Team);return!P&&!(!g&&$)&&(!_&&!(!$&&g))}function Ie(M){const P=M.p1Score||0,_=M.p2Score||0;return P===_?null:P>_?w.home_id:w.away_id}async function Re(M){try{const P=Ie(M),_=P?w.home_id===P?w.away_id:w.home_id:null;await T.from("matches").update({status:"finished",winner_id:P,home_score:M.p1Score||0,away_score:M.p2Score||0}).eq("id",i),P&&_&&updateEvolutiveCards(P,_).catch(()=>{})}catch(P){console.error("[PvP] finishMatch:",P)}}function Ze(){var g;const M=r[n+"Score"],P=r[o+"Score"],_=M>P,$=M===P;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${_?"🏆":$?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${_?"Victoire !":$?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${M} - ${P}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(g=document.getElementById("pvp-home"))==null||g.addEventListener("click",()=>{try{T.removeChannel(j)}catch{}Ye(e),d("home")})}G()}const Oo=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:vn,resumePvpMatch:Ro},Symbol.toStringTag,{value:"Module"}));async function Ho(e,t,i,a){var c,l;try{const s=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{(T.getChannels?T.getChannels():[]).forEach(p=>{const n=p.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&T.removeChannel(p)})}catch(d){console.warn("[FriendMatch] cleanup canaux:",d)}s&&(await T.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await ni(e,t,"random",({deckId:s,formation:d,starters:p,subsRaw:n,gcCardsEnriched:o,gcDefs:f})=>{const v=w=>Uo(e,t,s,d,p,n,w,f||[],i,a);if(!o.length){v([]);return}ii(e,o,v)})}async function Uo(e,t,i,a,c,l,s=[],d=[],p,n){var ce;const{state:o,navigate:f,toast:v}=t,w=o.profile.id;let A=!1,r=null;et(e);try{await T.rpc("cancel_matchmaking",{p_user_id:w})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",w)}catch{}const u=(re,D,ie,W)=>{var G;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">⚽ Match ami</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">vs ${n}</div>
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
            <div style="width:52px;height:52px;border-radius:50%;background:${D?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${D?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${D?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${n}</div>
            <div style="font-size:11px;color:${D?"#22c55e":"#aaa"}">${D?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!D&&re?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(G=document.getElementById("lobby-cancel"))==null||G.addEventListener("click",async()=>{A=!0,r&&(T.removeChannel(r),r=null),ie&&await T.from("friend_match_invites").update({status:"declined"}).eq("id",ie),Ye(e),f("home")})},I=async(re,D)=>{A=!0,r&&(T.removeChannel(r),r=null),await new Promise(ie=>setTimeout(ie,600)),e.isConnected&&Vo(e,t,re,D,s,d)},{data:z}=await T.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${w},invitee_id.eq.${p}),and(inviter_id.eq.${p},invitee_id.eq.${w})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let C,H;if(z&&z.inviter_id===p)H=!1,C=z.id,await T.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",C);else{H=!0;const{data:re,error:D}=await T.from("friend_match_invites").insert({inviter_id:w,invitee_id:p,friend_id:p,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(D||!re){v("Erreur création invitation","error"),Ye(e),f("home");return}C=re.id}if(u(!0,!H,C),!H){const re={home_id:p,away_id:w,home_deck_id:z.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},D=await T.from("matches").insert(re).select().single(),ie=D.data;if(!ie){v("Erreur création match: "+(((ce=D.error)==null?void 0:ce.message)||""),"error"),Ye(e),f("home");return}await T.from("friend_match_invites").update({match_id:ie.id,status:"matched"}).eq("id",C),I(ie.id,!1);return}let B=!1;const j=re=>{A||B||(re.status==="matched"&&re.match_id?(B=!0,clearInterval(U),clearInterval(oe),I(re.match_id,!0)):re.status==="declined"?(clearInterval(U),clearInterval(oe),v(`${n} a décliné l'invitation`,"warning"),Ye(e),f("home")):re.invitee_ready&&u(!0,!0,C))},U=setInterval(()=>{if(A){clearInterval(U);return}T.from("matchmaking_queue").delete().eq("user_id",w).then(()=>{},()=>{})},3e3),oe=setInterval(async()=>{if(A||B){clearInterval(oe);return}const{data:re}=await T.from("friend_match_invites").select("*").eq("id",C).maybeSingle();re&&j(re)},1200);r=T.channel("friend-invite-"+C).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${C}`},re=>j(re.new)).subscribe()}async function Vo(e,t,i,a,c=[],l=[]){const{state:s,navigate:d,toast:p}=t,n=a?"p1":"p2",o=a?"p2":"p1",f=(c||[]).map(_=>_.id),v=(c||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:w}=await T.from("matches").select("*").eq("id",i).single();if(!w){p("Match introuvable","error"),d("home");return}async function A(){const[{data:_},{data:$},{data:g},{data:m}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:w.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:w.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",w.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",w.away_id).single()]),x=k=>({cardId:k.card_id,position:k.position,id:k.id,firstname:k.firstname,name:k.surname_encoded,country_code:k.country_code,club_id:k.club_id,job:k.job,job2:k.job2,note_g:Number(k.note_g)||0,note_d:Number(k.note_d)||0,note_m:Number(k.note_m)||0,note_a:Number(k.note_a)||0,rarity:k.rarity,skin:k.skin,hair:k.hair,hair_length:k.hair_length,clubName:k.club_encoded_name||null,clubLogo:k.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),y=((_==null?void 0:_.starters)||[]).map(k=>x(k)),b=(($==null?void 0:$.starters)||[]).map(k=>x(k)),h=(_==null?void 0:_.formation)||"4-4-2",E=($==null?void 0:$.formation)||"4-4-2";return{p1Team:yt(y,h),p2Team:yt(b,E),p1Subs:((_==null?void 0:_.subs)||[]).map(k=>x(k)),p2Subs:(($==null?void 0:$.subs)||[]).map(k=>x(k)),p1Formation:h,p2Formation:E,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?f:[],gc_p2:a?[]:f,gcCardsFull_p1:a?v:[],gcCardsFull_p2:a?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let r=w.game_state&&Object.keys(w.game_state).length?w.game_state:null;if(!r)if(a){r=await A();const{data:_}=await T.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await T.from("matches").update({game_state:r,turn_user_id:w.home_id}).eq("id",i):r=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let _=0;_<60&&!r;_++){await new Promise(g=>setTimeout(g,400));const{data:$}=await T.from("matches").select("game_state").eq("id",i).single();$!=null&&$.game_state&&Object.keys($.game_state).length&&(r=$.game_state)}if(!r){p("Erreur de synchronisation","error"),d("home");return}r.gc_p2=f,r.gcCardsFull_p2=v,await T.from("matches").update({game_state:r}).eq("id",i)}let u=!1,I=!1,z=!1,C=null,H=!1;const B=new Set,j=new Set;function U(_){var k,L;try{T.removeChannel(oe)}catch{}const $=r[n+"Score"]||0,g=r[o+"Score"]||0;if(!z){z=!0;const S=_.winner_id||($>g?s.profile.id:g>$?"opp":null),q=S===s.profile.id?"win":S?"loss":null;q&&xi(()=>Promise.resolve().then(()=>nn),void 0).then(F=>F.applyOwnEvolution(s.profile.id,q)).catch(()=>{})}if(!I){const S=r.p1Score||0,q=r.p2Score||0,F=(r.usedGc_p1||[]).length,O=(r.usedGc_p2||[]).length,V=_.winner_id||(S>q?w.home_id:q>S?w.away_id:null);(V?s.profile.id===V:s.profile.id<(a?w.away_id:w.home_id))&&(I=!0,Ji({player1Id:w.home_id,player2Id:w.away_id,score1:S,score2:q,gc1:F,gc2:O}).catch(K=>console.warn("[FriendMatch] updateStats:",K)))}let m,x;_.winner_id?(m=_.winner_id===s.profile.id,x=!1):_.forfeit?(m=$>g,x=!1):(x=$===g,m=$>g),(k=document.getElementById("pvp-end-overlay"))==null||k.remove();const y=document.createElement("div");y.id="pvp-end-overlay",y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const b=x?"🤝":m?"🏆":"😞",h=x?"MATCH NUL":m?"VICTOIRE !":"DÉFAITE",E=x?"#fff":m?"#FFD700":"#ff6b6b";y.innerHTML=`
      <div style="font-size:64px">${b}</div>
      <div style="font-size:26px;font-weight:900;color:${E}">${h}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${$} – ${g} ${r[o+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${m?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(y),(L=y.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{y.remove(),Ye(e),d("home")})}const oe=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{const $=_.new;try{if($.status==="finished"||$.forfeit){if(u)return;u=!0,C&&(clearInterval(C),C=null),$.game_state&&(r=$.game_state),U($);return}if($.game_state){const g=r;r=$.game_state;const m=r._lastGC;if(m&&m.seq&&!j.has(m.seq)&&(j.add(m.seq),m.by!==n)){Y(m.type,m.by,()=>fe());return}const x=g[n+"Score"]||0,y=g[o+"Score"]||0,b=r[n+"Score"]||0,h=r[o+"Score"]||0,E=b>x,k=h>y;if((E||k)&&!B.has(r.round)){B.add(r.round);const L=[...r.log||[]].reverse().find(q=>q.isGoal),S=((L==null?void 0:L.homePlayers)||[]).map(q=>({name:q.name,note:q.note,portrait:q.portrait,job:q.job}));he(S,b,h,E,()=>fe());return}fe()}}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function ce(_){Object.assign(r,_),r.lastActionAt=new Date().toISOString();const{error:$}=await T.from("matches").update({game_state:r}).eq("id",i);$&&p("Erreur de synchronisation","error");try{fe()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function re(){if(u)return;u=!0,C&&(clearInterval(C),C=null);const _=a?w.away_id:w.home_id,$=a?"p2":"p1",g=a?"p1":"p2",m={...r,[$+"Score"]:3,[g+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:_,home_score:m.p1Score||0,away_score:m.p2Score||0,game_state:m}).eq("id",i)}catch{}try{T.removeChannel(oe)}catch{}setTimeout(()=>{Ye(e),d("home")},800)}const D={BOOST_STAT:({value:_=1,count:$=1,roles:g=[]},m,x)=>{const y=m[n+"Team"],b=Object.entries(y).filter(([h])=>!g.length||g.includes(h)).flatMap(([h,E])=>E.filter(k=>!k.used).map(k=>({...k,_line:h})));if(!b.length){m.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(m);return}ie(b,$,`Choisir ${$} joueur(s) à booster (+${_})`,h=>{h.forEach(E=>{const k=(y[E._line]||[]).find(L=>L.cardId===E.cardId);k&&(k.boost=(k.boost||0)+_,m.log.push({text:`⚡ +${_} sur ${k.name}`,type:"info"}))}),m[n+"Team"]=y,x(m)})},DEBUFF_STAT:({value:_=1,count:$=1,roles:g=[],target:m="ai"},x,y)=>{const b=m==="home"?n:o,h=x[b+"Team"],E=m==="home"?"allié":"adverse",k=Object.entries(h).filter(([L])=>!g.length||g.includes(L)).flatMap(([L,S])=>S.map(q=>({...q,_line:L})));if(!k.length){x.log.push({text:`🎯 Aucun joueur ${E}`,type:"info"}),y(x);return}ie(k,$,`Choisir ${$} joueur(s) ${E}(s) (-${_})`,L=>{L.forEach(S=>{const q=(h[S._line]||[]).find(F=>F.cardId===S.cardId);q&&(q.boost=(q.boost||0)-_,x.log.push({text:`🎯 -${_} sur ${q.name}`,type:"info"}))}),x[b+"Team"]=h,y(x)})},GRAY_PLAYER:({count:_=1,roles:$=[],target:g="ai"},m,x)=>{const y=g==="home"?n:o,b=m[y+"Team"],h=g==="home"?"allié":"adverse",E=Object.entries(b).filter(([k])=>!$.length||$.includes(k)).flatMap(([k,L])=>L.filter(S=>!S.used).map(S=>({...S,_line:k})));if(!E.length){m.log.push({text:`❌ Aucun joueur ${h}`,type:"info"}),x(m);return}ie(E,_,`Choisir ${_} joueur(s) ${h}(s) à exclure`,k=>{const L="usedCardIds_"+y,S=new Set(m[L]||[]);k.forEach(q=>{const F=(b[q._line]||[]).find(O=>O.cardId===q.cardId);F&&(F.used=!0,S.add(q.cardId),m.log.push({text:`❌ ${F.name} exclu !`,type:"info"}))}),m[L]=[...S],m[y+"Team"]=b,x(m)})},REVIVE_PLAYER:({count:_=1,roles:$=[]},g,m)=>{const x=g[n+"Team"],y=Object.entries(x).filter(([b])=>!$.length||$.includes(b)).flatMap(([b,h])=>h.filter(E=>E.used).map(E=>({...E,_line:b})));if(!y.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),m(g);return}ie(y,_,`Choisir ${_} joueur(s) à ressusciter`,b=>{b.forEach(h=>{const E=(x[h._line]||[]).find(k=>k.cardId===h.cardId);E&&(E.used=!1,g.log.push({text:`💫 ${E.name} ressuscité !`,type:"info"}))}),g[n+"Team"]=x,m(g)})},REMOVE_GOAL:({},_,$)=>{const g=o+"Score";_[g]>0?(_[g]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),$(_)},ADD_GOAL_DRAW:({},_,$)=>{_[n+"Score"]===_[o+"Score"]?(_[n+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),$(_)},ADD_SUB:({value:_=1},$,g)=>{$.maxSubs=($.maxSubs||3)+_,$.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),g($)},CUSTOM:({},_,$)=>$(_)};function ie(_,$,g,m){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let y=[];function b(){var E,k;const h=_.map(L=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",q=$e(L,L._line)+(L.boost||0),O=y.find(X=>X.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",V=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${O};background:${S};overflow:hidden;cursor:pointer;${V}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${q}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${y.length}/${$}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${h}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${y.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${y.length}/${$})
          </button>
        </div>`,(E=x.querySelector("#pp-close"))==null||E.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const S=L.dataset.cid,q=_.find(O=>O.cardId===S),F=y.findIndex(O=>O.cardId===S);q&&(F>-1?y.splice(F,1):y.length<$&&y.push(q),b())})}),(k=x.querySelector("#pp-confirm"))==null||k.addEventListener("click",()=>{x.remove(),m(y)})}b(),document.body.appendChild(x)}async function W(_,$){const m=(r["gcCardsFull_"+n]||[]).find(h=>h.id===_),x=(m==null?void 0:m._gcDef)||(r.gcDefs||[]).find(h=>{var E;return h.name===$||((E=h.name)==null?void 0:E.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),y=[...r["usedGc_"+n]||[],_],b={type:$,by:n,seq:(r._gcAnimSeq||0)+1};j.add(b.seq),Y($,n,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const E=D[x.effect_type];if(E){const k={...r};E(x.effect_params||{},k,async L=>{L["usedGc_"+n]=y,L._lastGC=b,L._gcAnimSeq=b.seq,await ce(L)});return}}const h={...r};switch($){case"Remplacement+":h.maxSubs=(h.maxSubs||3)+1,h.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const E=o+"Score";h[E]>0&&(h[E]--,h.log.push({text:"🚫 But annulé",type:"info"}));break}}h["usedGc_"+n]=y,h._lastGC=b,h._gcAnimSeq=b.seq,await ce(h)})}function G(_,$){const g="usedCardIds_"+_,m=new Set(r[g]||[]);$.forEach(x=>m.add(x)),r[g]=[...m]}function se(){for(const _ of["p1","p2"]){const $=new Set(r["usedCardIds_"+_]||[]),g=r[_+"Team"];if(g)for(const m of["GK","DEF","MIL","ATT"])(g[m]||[]).forEach(x=>{x.used=$.has(x.cardId)})}}function fe(){var Xe,Qe,ot,gt,ae,ve;if(r.phase==="reveal")return xe();if(r.phase==="midfield")return _e();if(r.phase==="finished")return P();const _=r[n+"Team"],$=r[o+"Team"];se();const g=r[n+"Score"],m=r[o+"Score"],x=r[n+"Name"],y=r[o+"Name"],b=r.phase===n+"-attack",h=r.phase===n+"-defense",E=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],k=E.map(ee=>ee.cardId),L=window.innerWidth>=700,S=r[n+"Subs"]||[],q=r["usedSubIds_"+n]||[],F=S.filter(ee=>!q.includes(ee.cardId)),O=r["gcCardsFull_"+n]||[],V=r["usedGc_"+n]||[],X=O.filter(ee=>!V.includes(ee.id)),K=r.boostOwner===n&&!r.boostUsed,te=!["GK","DEF","MIL","ATT"].some(ee=>($[ee]||[]).some(le=>!le.used)),ne=[..._.MIL||[],..._.ATT||[]].filter(ee=>!ee.used),ue=b&&te&&ne.length===0?[..._.GK||[],..._.DEF||[]].filter(ee=>!ee.used).map(ee=>ee.cardId):[];function me(ee,le,Z){var kt,Ht;const de=ee._gcDef,Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[de==null?void 0:de.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",we={purple:"#b06ce0",light_blue:"#00d4ef"}[de==null?void 0:de.color]||"#b06ce0",tt=(de==null?void 0:de.name)||ee.gc_type,it=(de==null?void 0:de.effect)||((kt=Ue[ee.gc_type])==null?void 0:kt.desc)||"",rt=de!=null&&de.image_url?`/manager-wars/icons/${de.image_url}`:null,st=((Ht=Ue[ee.gc_type])==null?void 0:Ht.icon)||"⚡",ct=Math.round(Z*.22),$t=Math.round(Z*.22),pt=Z-ct-$t,ht=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ee.id}" data-gc-type="${ee.gc_type}"
        style="box-sizing:border-box;width:${le}px;height:${Z}px;border-radius:10px;border:2px solid ${we};background:${Ae};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ct}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ht}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${le-6}px">${tt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${pt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${rt?`<img src="${rt}" style="max-width:${le-10}px;max-height:${pt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(pt*.55)}px">${st}</span>`}
        </div>
        <div style="height:${$t}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${it.slice(0,38)}</span>
        </div>
      </div>`}function ye(ee,le){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ee}px;height:${le}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(le*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(le*.2)}px">⚡</div>
        <div style="font-size:${Math.round(le*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const be=(ee,le)=>le?ye(130,175):me(ee,130,175),Te=(ee,le)=>le?ye(68,95):me(ee,68,95),ke=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",De=b?Ie(n)?`<button id="pvp-action" style="${ke};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${E.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${ke};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:h?`<button id="pvp-action" style="${ke};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${E.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${y}</div>`,ze=b&&!Ie(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':b||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${E.length}/3 sélectionné(s)</div>`:"",Ge=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${F.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':F.map(ee=>`<div class="pvp-sub-btn" data-sub-id="${ee.cardId}" style="cursor:pointer;flex-shrink:0">${Ke(ee,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Le=b?"attack":h?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(_,r[n+"Formation"],Le,k,300,300,ue)}
      </div>
    </div>`;function Fe(ee){if(ee.type==="duel"&&(ee.homeTotal!=null||ee.aiTotal!=null)){const le=(ee.homeTotal||0)>=(ee.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(ee.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ee.homePlayers||[]).map(Z=>dt(Z)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${le?20:14}px;font-weight:900;color:${le?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${ee.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${le?14:20}px;font-weight:900;color:${le?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${ee.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ee.aiPlayers||[]).map(Z=>dt(Z)).join("")}
            </div>
          </div>
          ${ee.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${ee.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${ee.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ee.type==="goal"?700:400};padding:3px 2px">${ee.text||""}</div>`}const Pe=(()=>{var le,Z;if(h&&((le=r.pendingAttack)!=null&&le.players)){const de=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${y} ATTAQUE — Défendez !</div>
          ${nt((de.players||[]).map(Ae=>({...Ae,used:!1})),"#ff6b6b",de.total)}
        </div>`}if(b&&((Z=r.pendingAttack)!=null&&Z.players)){const de=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((de.players||[]).map(Ae=>({...Ae,used:!1})),"#00ff88",de.total)}
        </div>`}const ee=(r.log||[]).slice(-1)[0];return ee?'<div style="padding:2px 4px">'+Fe(ee)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Oe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${g} – ${m}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${y}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Pe}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",L?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Oe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ge}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${He}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${De}${ze}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${X.map(ee=>be(ee,!1)).join("")}
            ${K?be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Oe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(_,r[n+"Formation"],Le,k,300,300,ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${X.map(ee=>Te(ee,!1)).join("")}
            ${K?Te(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${b&&F.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${b&&F.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${b&&F.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${b&&F.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${F.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(r["usedSubIds_"+n]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(r["usedSubIds_"+n]||[]).length}/${r.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${De}${ze}</div>
        </div>
      </div>`;function We(){const ee=e.querySelector(".match-screen");if(!ee)return;const le=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ee.style.height=le+"px",ee.style.minHeight=le+"px",ee.style.maxHeight=le+"px",ee.style.overflow="hidden";const Z=e.querySelector("#mobile-action-bar"),de=e.querySelector("#mobile-play-area");Z&&de&&(de.style.paddingBottom=Z.offsetHeight+"px")}if(We(),setTimeout(We,120),setTimeout(We,400),H||(H=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",We),window.visualViewport.addEventListener("scroll",We)),window.addEventListener("resize",We)),function(){const le=e.querySelector(".terrain-wrapper svg");le&&(le.removeAttribute("width"),le.removeAttribute("height"),le.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",le.setAttribute("viewBox","-26 -26 352 352"),le.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ee=>{ee.addEventListener("click",()=>{if(!b&&!h)return;const le=ee.dataset.cardId,Z=ee.dataset.role,de=(_[Z]||[]).find(it=>it.cardId===le);if(!de||de.used)return;const Ae=ue.includes(le);if(b&&!["MIL","ATT"].includes(Z)&&!Ae)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const we=r["selected_"+n],tt=we.findIndex(it=>it.cardId===le);tt>-1?we.splice(tt,1):we.length<3&&we.push({...de,_role:Z}),fe()})}),e.querySelectorAll(".match-used-hit").forEach(ee=>{ee.addEventListener("click",()=>R(ee.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ee=>{ee.addEventListener("click",()=>R())}),(Xe=e.querySelector("#pvp-sub-open"))==null||Xe.addEventListener("click",()=>R()),e.querySelectorAll(".pvp-gc-mini").forEach(ee=>{ee.addEventListener("click",()=>J(ee.dataset.gcId,ee.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>N()),(ot=e.querySelector("#pvp-action"))==null||ot.addEventListener("click",ee=>{b?ee.currentTarget.dataset.pass==="1"||!Ie(n)?Me():Ce():h&&Be()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&re()}),(ae=e.querySelector("#pvp-view-opp"))==null||ae.addEventListener("click",()=>ge()),(ve=e.querySelector("#pvp-toggle-history"))==null||ve.addEventListener("click",()=>pe()),C&&(clearInterval(C),C=null),(b||h)&&!u){let ee=30,le=!1;const Z=()=>document.getElementById("pvp-timer"),de=()=>{Z()&&(Z().textContent=ee+"s",Z().style.color=le?"#ff4444":"#fff")};de(),C=setInterval(()=>{ee--,ee<0?le?(clearInterval(C),C=null,b&&!Ie(n)?Me():re()):(le=!0,ee=15,de()):de()},1e3)}}function xe(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await ce({phase:"midfield"})},5e3)}let Ee=!1;function _e(){if(Ee)return;const _=r[n+"Team"].MIL||[],$=r[o+"Team"].MIL||[];function g(X){return X.reduce((K,te)=>K+$e(te,"MIL"),0)}function m(X){let K=0;for(let te=0;te<X.length-1;te++){const ne=at(X[te],X[te+1]);ne==="#00ff88"?K+=2:ne==="#FFD700"&&(K+=1)}return K}const x=g(_)+m(_),y=g($)+m($),b=x>=y;function h(X,K,te){return`<div id="duel-row-${te}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${K}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${X.map((ne,ue)=>{const me=ue<X.length-1?at(ne,X[ue+1]):null,ye=!me||me==="#ff3333"||me==="#cc2222",be=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${te}" data-idx="${ue}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ke({...ne,note:$e(ne,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ue<X.length-1?`<div class="duel-link duel-link-${te}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${me}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${te}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${g(X)} + ${m(X)} liens = <b style="color:#fff">${g(X)+m(X)}</b>
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
      ${h(_,r[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${h($,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const E=(X,K)=>e.querySelectorAll(X).forEach((te,ne)=>{setTimeout(()=>{te.style.opacity="1",te.style.transform="translateY(0) scale(1)"},K+ne*90)});E(".duel-card-me",150),E(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((X,K)=>setTimeout(()=>{X.style.opacity="1"},K*70)),900),setTimeout(()=>{const X=e.querySelector("#pvp-vs");X&&(X.style.opacity="1",X.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(K=>K.style.opacity="1")},1250);function k(X,K,te){const ne=document.getElementById(X);if(!ne)return;const ue=performance.now(),me=ye=>{const be=Math.min(1,(ye-ue)/te);ne.textContent=Math.round(K*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(me):ne.textContent=K};requestAnimationFrame(me)}setTimeout(()=>{k("pvp-score-me",x,800),k("pvp-score-opp",y,800)},1500);const L=r.p1Team.MIL||[],S=r.p2Team.MIL||[],q=g(L)+m(L),F=g(S)+m(S),O=q>=F?"p1":"p2";let V=r.boostValue;V==null&&(V=ti(),r.boostValue=V,r.boostOwner=O,r.boostUsed=!1),Ee=!0,setTimeout(()=>{const X=e.querySelector("#duel-row-"+(b?"me":"opp")),K=e.querySelector("#duel-row-"+(b?"opp":"me")),te=document.getElementById("pvp-score-me"),ne=document.getElementById("pvp-score-opp"),ue=b?te:ne,me=b?ne:te;ue&&(ue.style.fontSize="80px",ue.style.color=b?"#FFD700":"#ff6b6b",ue.style.animation="duelPulse .5s ease"+(b?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{X&&(X.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",X.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),K&&(K.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ke;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const be=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+V+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Te=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(b?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+Te,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(ke=document.getElementById("pvp-start-match"))==null||ke.addEventListener("click",async()=>{const De=O;await ce({phase:De+"-attack",attacker:De,round:1,boostValue:V,boostUsed:!1,boostOwner:De})})},600)},700)},2800)}function he(_,$,g,m,x){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const b=Array.from({length:10},(L,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};y.innerHTML=`
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
        ${$} – ${g}
      </div>
      ${_!=null&&_.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${_.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${h[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(y);let E=!1;const k=()=>{E||(E=!0,y.remove(),setTimeout(()=>x(),50))};y.addEventListener("click",k),setTimeout(k,3500)}function Y(_,$,g){var V,X;const m=(r.gcDefs||[]).find(K=>{var te;return K.name===_||((te=K.name)==null?void 0:te.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[m==null?void 0:m.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",y={purple:"#b06ce0",light_blue:"#00d4ef"}[m==null?void 0:m.color]||"#b06ce0",b=(m==null?void 0:m.name)||_,h=(m==null?void 0:m.effect)||((V=Ue[_])==null?void 0:V.desc)||"",E=m!=null&&m.image_url?`/manager-wars/icons/${m.image_url}`:null,k=((X=Ue[_])==null?void 0:X.icon)||"⚡",S=$===n?"Vous":r[$+"Name"]||"Adversaire",q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",q.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${y}66}50%{box-shadow:0 0 60px ${y}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${y};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${y};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${b.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${b}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${k}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(q);let F=!1;const O=()=>{F||(F=!0,q.remove(),setTimeout(()=>g&&g(),50))};q.addEventListener("click",O),setTimeout(O,3e3)}function J(_,$){var q,F,O,V;const m=(r["gcCardsFull_"+n]||[]).find(X=>X.id===_),x=m==null?void 0:m._gcDef,y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",h=(x==null?void 0:x.name)||$,E=(x==null?void 0:x.effect)||((q=Ue[$])==null?void 0:q.desc)||"Carte spéciale.",k=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,L=((F=Ue[$])==null?void 0:F.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${b};background:${y};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${b}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${h.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${h}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${k?`<img src="${k}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${L}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(O=S.querySelector("#pvp-gc-back"))==null||O.addEventListener("click",()=>S.remove()),(V=S.querySelector("#pvp-gc-use"))==null||V.addEventListener("click",()=>{S.remove(),W(_,$)})}function N(){var m;const _=r[n+"Team"],$=Object.entries(_).flatMap(([x,y])=>(y||[]).filter(b=>!b.used).map(b=>({...b,_line:x})));if(!$.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${$.map(x=>{const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",b=$e(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${y};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${b}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(m=g.querySelector("#bp-close"))==null||m.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const y=x.dataset.cid,b=$.find(E=>E.cardId===y);if(!b)return;const h=(_[b._line]||[]).find(E=>E.cardId===y);h&&(h.boost=(h.boost||0)+r.boostValue),g.remove(),await ce({[n+"Team"]:_,boostUsed:!0})})})}function R(_=null){var F,O;if(!(r.phase===n+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const g=r[n+"Team"],m=r["usedSubIds_"+n]||[],x=r.maxSubs||3;if(m.length>=x){p(`Maximum ${x} remplacements atteint`,"warning");return}const y=Object.entries(g).flatMap(([V,X])=>(X||[]).filter(K=>K.used).map(K=>({...K,_line:V}))),b=(r[n+"Subs"]||[]).filter(V=>!m.includes(V.cardId));if(!y.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!b.length){p("Aucun remplaçant disponible","warning");return}let h=Math.max(0,y.findIndex(V=>V.cardId===_));const E=((F=y[h])==null?void 0:F._line)||((O=y[h])==null?void 0:O.job);let k=Math.max(0,b.findIndex(V=>V.job===E)),L=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function q(){var me,ye,be,Te,ke,De;const V=y[h],X=b[k],K=Math.min(130,Math.round((window.innerWidth-90)/2)),te=Math.round(K*1.35),ne=ze=>`background:rgba(255,255,255,0.12);border:none;color:${ze?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ze?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${m.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ne(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${X?Ke({...X,used:!1,boost:0},K,te):"<div>—</div>"}</div>
          <button id="pin-down" style="${ne(k>=b.length-1)}" ${k>=b.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${b.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ne(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${V?Ke({...V,used:!1,boost:0},K,te):"<div>—</div>"}</div>
          <button id="pout-down" style="${ne(h>=y.length-1)}" ${h>=y.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${y.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=S.querySelector("#psub-close"))==null||me.addEventListener("click",()=>S.remove()),(ye=S.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{h>0&&(h--,q())}),(be=S.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{h<y.length-1&&(h++,q())}),(Te=S.querySelector("#pin-up"))==null||Te.addEventListener("click",()=>{k>0&&(k--,q())}),(ke=S.querySelector("#pin-down"))==null||ke.addEventListener("click",()=>{k<b.length-1&&(k++,q())});const ue=(ze,Ge,Le,He)=>{const Fe=S.querySelector("#"+ze);if(!Fe)return;let Pe=0;Fe.addEventListener("touchstart",Oe=>{Pe=Oe.touches[0].clientY},{passive:!0}),Fe.addEventListener("touchend",Oe=>{const We=Oe.changedTouches[0].clientY-Pe;if(Math.abs(We)<30)return;const Xe=Ge();We<0&&Xe<He-1?(Le(Xe+1),q()):We>0&&Xe>0&&(Le(Xe-1),q())},{passive:!0})};ue("pin-panel",()=>k,ze=>k=ze,b.length),ue("pout-panel",()=>h,ze=>h=ze,y.length),(De=S.querySelector("#psub-confirm"))==null||De.addEventListener("click",async ze=>{if(ze.preventDefault(),ze.stopPropagation(),L)return;L=!0;const Ge=y[h],Le=b[k];if(!Ge||!Le)return;const He=Ge._line,Fe=(g[He]||[]).findIndex(We=>We.cardId===Ge.cardId);if(Fe===-1){p("Erreur : joueur introuvable","error"),S.remove();return}const Pe={...Le,_line:He,position:Ge.position,used:!1,boost:0};g[He].splice(Fe,1,Pe);const Oe=[...m,Le.cardId];S.remove(),Q(Ge,Le,async()=>{await ce({[n+"Team"]:g,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Oe})})})}document.body.appendChild(S),q()}function Q(_,$,g){const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const y=(E,k,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${k};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${m[E.job]||"#555"};border:3px solid ${k};position:relative;overflow:hidden;margin:0 auto">
        ${qe(E)?`<img src="${qe(E)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(E.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${y($,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${y(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let b=!1;const h=()=>{b||(b=!0,x.remove(),setTimeout(()=>g(),50))};x.addEventListener("click",h),setTimeout(h,2200)}function ge(){var $;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),($=_.querySelector("#pvp-opp-close"))==null||$.addEventListener("click",()=>_.remove())}function pe(){var m;const _=r.log||[],$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const g=x=>{var b,h,E;if(x.type==="duel"){const k=x.isGoal,L=x.homeScored&&n==="p1"||!x.homeScored&&k&&n==="p2",S=x.homeScored?"#FFD700":k?"#ff6b6b":"rgba(255,255,255,0.3)",q=k?L?"⚽ BUT !":"⚽ BUT adversaire !":(b=x.homePlayers)!=null&&b.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${k?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
          <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${q}</div>
          ${(h=x.homePlayers)!=null&&h.length?`<div style="margin-bottom:3px">${nt(x.homePlayers,"rgba(255,255,255,0.7)",x.homeTotal)}</div>`:""}
          ${(E=x.aiPlayers)!=null&&E.length?`<div style="opacity:0.7">${nt(x.aiPlayers,"#ff6b6b",x.aiTotal)}</div>`:""}
        </div>`}return x.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${x.outPlayer?Ke({...x.outPlayer,used:!0,_line:x.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${x.inPlayer?Ke({...x.inPlayer,_line:x.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${x.type==="goal"?"#FFD700":x.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${x.text||""}</div>
      </div>`};$.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(g).join("")}
      </div>`,document.body.appendChild($),(m=$.querySelector("#pvp-hist-close"))==null||m.addEventListener("click",()=>$.remove())}async function Me(){if(r.phase!==n+"-attack")return;const _=n==="p1"?"p2":"p1",$=(r.round||0)+1,g=[...r.log||[]];g.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const m=Re(r),x=Ie(_),y=m||!x?"finished":_+"-attack";await ce({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:y,attacker:_,round:$,log:g}),y==="finished"&&await M(r)}async function Ce(){const _=r[n+"Team"],$=!["GK","DEF","MIL","ATT"].some(y=>(r[o+"Team"][y]||[]).some(b=>!b.used)),g=(r["selected_"+n]||[]).map(y=>{const b=(_[y._role]||[]).find(q=>q.cardId===y.cardId)||y,h=$&&["GK","DEF"].includes(y._role),E=_[y._role]||[],k=E.findIndex(q=>q.cardId===y.cardId),L=lt(E.length),S=k>=0?L[k]:b._col??1;return{...b,_line:y._role,_col:S,...h?{note_a:Math.max(1,Number(b.note_a)||0)}:{}}});if(!g.length)return;const m=Nt(g,r.modifiers[n]||{});G(n,g.map(y=>y.cardId)),g.forEach(y=>{const b=(_[y._role]||[]).find(h=>h.cardId===y.cardId);b&&(b.used=!0)}),r["selected_"+n]=[],fe();const x=[...r.log||[]];if($){const y=(r[n+"Score"]||0)+1,b=g.map(S=>({name:S.name,note:$e(S,S._line||"ATT"),portrait:qe(S),job:S.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:b,homeTotal:m.total,aiTotal:0});const h=(r.round||0)+1,E=n==="p1"?"p2":"p1",k={...r,[n+"Team"]:_,[n+"Score"]:y},L=Re(k);B.add(h),he(b,y,r[o+"Score"]||0,!0,async()=>{await ce({[n+"Team"]:_,[n+"Score"]:y,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:L?"finished":E+"-attack",attacker:E,round:h,log:x}),L&&await M({...r,[n+"Score"]:y})});return}x.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${m.total})`}),await ce({[n+"Team"]:_,[o+"Team"]:r[o+"Team"],pendingAttack:{...m,players:g,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:x})}async function Be(){const _=r[n+"Team"],$=(r["selected_"+n]||[]).map(V=>{const X=(_[V._role]||[]).find(me=>me.cardId===V.cardId)||V,K=_[V._role]||[],te=K.findIndex(me=>me.cardId===V.cardId),ne=lt(K.length),ue=te>=0?ne[te]:X._col??1;return{...X,_line:V._role,_col:ue}}),g=Rt($,r.modifiers[n]||{});G(n,$.map(V=>V.cardId)),$.forEach(V=>{const X=(_[V._role]||[]).find(K=>K.cardId===V.cardId);X&&(X.used=!0)}),r["selected_"+n]=[],fe();const m=Ot(r.pendingAttack.total,g.total,r.modifiers[n]||{}),x=r.pendingAttack.side,y=m==="attack"||(m==null?void 0:m.goal),b=x==="p1"?"p2":"p1",h=(r.round||0)+1,E=(r.pendingAttack.players||[]).map(V=>({name:V.name,note:$e(V,V._line||"ATT"),portrait:qe(V),job:V.job})),k=[...r.log||[]];k.push({type:"duel",isGoal:y,homeScored:y&&x===n,text:y?`⚽ BUT de ${r[x+"Name"]} ! (${r.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${g.total})`,homePlayers:E,aiPlayers:$.map(V=>({name:V.name,note:$e(V,V._line||"DEF"),portrait:qe(V),job:V.job})),homeTotal:r.pendingAttack.total,aiTotal:g.total});const L=y?(r[x+"Score"]||0)+1:r[x+"Score"]||0,S={...r,[n+"Team"]:_,[x+"Score"]:L},q=Re(S),F=q?"finished":b+"-attack",O=async()=>{await ce({[n+"Team"]:_,[o+"Team"]:r[o+"Team"],[x+"Score"]:L,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:F,attacker:b,round:h,log:k}),(F==="finished"||q)&&await M({...r,[x+"Score"]:L})};if(y){const V=x===n,X=V?L:r[n+"Score"]||0,K=V?r[o+"Score"]||0:L;B.add(h),he(E,X,K,V,O)}else await O()}function Ve(_){return["MIL","ATT"].some($=>(_[$]||[]).some(g=>!g.used))}function Se(_){return["GK","DEF","MIL","ATT"].some($=>(_[$]||[]).some(g=>!g.used))}function Ne(_){return Se(_)&&!Ve(_)}function Ie(_){const $=r[_+"Team"],g=r[(_==="p1"?"p2":"p1")+"Team"];return!!(Ve($)||!Se(g)&&Ne($))}function Re(_){const $=["MIL","ATT"].some(k=>(_.p1Team[k]||[]).some(L=>!L.used)),g=["MIL","ATT"].some(k=>(_.p2Team[k]||[]).some(L=>!L.used)),m=Se(_.p1Team),x=Se(_.p2Team);return!$&&!(!x&&m)&&(!g&&!(!m&&x))}function Ze(_){const $=_.p1Score||0,g=_.p2Score||0;return $===g?null:$>g?w.home_id:w.away_id}async function M(_){try{const $=Ze(_),g=$?w.home_id===$?w.away_id:w.home_id:null;await T.from("matches").update({status:"finished",winner_id:$,home_score:_.p1Score||0,away_score:_.p2Score||0}).eq("id",i),$&&g&&wi($,g).catch(()=>{})}catch($){console.error("[PvP] finishMatch:",$)}}function P(){var x;const _=r[n+"Score"],$=r[o+"Score"],g=_>$,m=_===$;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":m?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":m?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${$}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{T.removeChannel(oe)}catch{}Ye(e),d("home")})}fe()}const zt="#1A6B3C",xt="#D4A017";async function Ko(e,t){var a;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(a=t.state.params)==null?void 0:a.openLeagueId;if(i){t.state.params.openLeagueId=null,await bt(e,t,i);return}await _t(e,t)}async function _t(e,t,i="waiting"){var I;const{state:a}=t,c=a.profile.id,{data:l}=await T.from("mini_league_members").select("league_id").eq("user_id",c),s=(l||[]).map(z=>z.league_id),{data:d,error:p}=await T.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),n=p?(await T.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:d||[],f=(s.length?await T.from("mini_leagues").select("*, mini_league_members(count)").in("id",s).order("created_at",{ascending:!1}):{data:[]}).data||[],v=f.filter(z=>z.status==="waiting"&&!z.is_archived),w=f.filter(z=>z.status==="active"&&!z.is_archived),A=f.filter(z=>z.is_archived||z.status==="finished"),r=n.filter(z=>!s.includes(z.id)),u=[{key:"waiting",label:"🟡 En attente",count:v.length+r.length},{key:"active",label:"🟢 En cours",count:w.length},{key:"archived",label:"📁 Archivées",count:A.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${u.map(z=>`<button class="ml-tab" data-tab="${z.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===z.key?zt:"transparent"};background:none;font-size:12px;font-weight:${i===z.key?"900":"600"};color:${i===z.key?zt:"#888"};cursor:pointer">${z.label}${z.count?` (${z.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Yo(v,r,c):i==="active"?Wo(w,c):Jo(A,c)}
    </div>
  </div>`,(I=document.getElementById("ml-create-btn"))==null||I.addEventListener("click",()=>Xo(e,t)),e.querySelectorAll(".ml-tab").forEach(z=>z.addEventListener("click",()=>_t(e,t,z.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(z=>z.addEventListener("click",()=>bt(e,t,z.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(z=>z.addEventListener("click",C=>{C.stopPropagation(),_n(e,t,z.dataset.join,z.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(z=>z.addEventListener("click",C=>{C.stopPropagation(),fi(e,t,z.dataset.delete,z.dataset.name,i)}))}function Qt(e,t,i=!1){var s,d;const a=e.creator_id===t,c=e.pot||0,l=((d=(s=e.mini_league_members)==null?void 0:s[0])==null?void 0:d.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function Yo(e,t,i){const a=[];return e.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),a.push(...e.map(c=>Qt(c,i,!1)))),t.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),a.push(...t.map(c=>Qt(c,i,!0)))),a.length?a.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Wo(e,t){return e.length?e.map(i=>Qt(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Jo(e,t){return e.length?e.map(i=>Qt(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Xo(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(a=>a.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=a.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var A,r,u,I;const{toast:a}=t,c=document.getElementById("ml-name").value.trim(),l=parseInt(document.getElementById("ml-max").value)||6,s=parseInt(document.getElementById("ml-fee").value)||500,d=((A=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:A.value)||"public",p=((r=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:r.value)||"aller",n=((I=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:I.trim())||null;if(!c){a("Le nom est obligatoire","error");return}if(s<100){a("Mise minimum : 100 crédits","error");return}if(d==="private"&&!n){a("Mot de passe requis","error");return}const{data:o,error:f}=await T.from("mini_leagues").insert({name:c,creator_id:t.state.profile.id,type:d,password:n,mode:p,max_players:l,entry_fee:s}).select().single();if(f){a("Erreur : "+f.message,"error");return}const{data:v}=await T.from("users").select("credits").eq("id",t.state.profile.id).single();if(((v==null?void 0:v.credits)||0)<s){await T.from("mini_leagues").delete().eq("id",o.id),a(`Crédits insuffisants pour la mise (${s.toLocaleString("fr")} cr.)`,"error");return}await T.from("users").update({credits:v.credits-s}).eq("id",t.state.profile.id),await T.from("mini_leagues").update({pot:s}).eq("id",o.id),await T.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=v.credits-s);const w=document.getElementById("nav-credits");w&&(w.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),a(`Mini League créée ! ${s.toLocaleString("fr")} cr. déduits.`,"success"),bt(e,t,o.id)})}function Zo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),a=c=>{t.remove(),e(c)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>a(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>a(i.value.trim())),i.addEventListener("keydown",c=>{c.key==="Enter"&&a(i.value.trim())}),t.addEventListener("click",c=>{c.target===t&&a(null)})})}async function _n(e,t,i,a){const{toast:c,state:l}=t,s=l.profile.id,{data:d}=await T.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!d){c("Mini League introuvable","error");return}if(d.status!=="waiting"){c("Cette Mini League a déjà démarré","warning");return}const{count:p}=await T.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(p>=d.max_players){c("La Mini League est complète","warning");return}if(a==="private"){const r=await Zo();if(r===null)return;if(d.password!==r){c("Mot de passe incorrect","error");return}}const n=d.entry_fee||100,{data:o}=await T.from("users").select("credits").eq("id",s).single();if(((o==null?void 0:o.credits)||0)<n){c(`Crédits insuffisants — il te faut ${n.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:f}=await T.from("mini_league_members").insert({league_id:i,user_id:s});if(f){c("Erreur inscription : "+f.message,"error");return}const{error:v}=await T.from("users").update({credits:o.credits-n}).eq("id",s),{error:w}=await T.from("mini_leagues").update({pot:(d.pot||0)+n}).eq("id",i);(v||w)&&console.error("Erreur post-inscription:",v,w),l.profile&&(l.profile.credits=o.credits-n);const A=document.getElementById("nav-credits");A&&(A.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),c(`✅ Inscrit ! −${n.toLocaleString("fr")} cr. · Pot : ${((d.pot||0)+n).toLocaleString("fr")} cr.`,"success"),bt(e,t,i)}async function Qo(e,t,i,a){const{toast:c,state:l}=t,s=l.profile.id;if(!confirm(`Te désinscrire et récupérer ${a.toLocaleString("fr")} cr. ?`))return;const{data:d}=await T.from("mini_leagues").select("pot,status").eq("id",i).single();if(!d||d.status!=="waiting"){c("Impossible — la league a déjà démarré","error");return}const{data:p}=await T.from("users").select("credits").eq("id",s).single();await T.from("mini_leagues").update({pot:Math.max(0,(d.pot||0)-a)}).eq("id",i),await T.from("users").update({credits:((p==null?void 0:p.credits)||0)+a}).eq("id",s),await T.from("mini_league_members").delete().eq("league_id",i).eq("user_id",s),l.profile&&(l.profile.credits=((p==null?void 0:p.credits)||0)+a);const n=document.getElementById("nav-credits");n&&(n.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),c(`↩️ Désinscrit · +${a.toLocaleString("fr")} cr. remboursés`,"success"),_t(e,t,"waiting")}async function fi(e,t,i,a,c){const{toast:l}=t;if(!confirm(`Supprimer définitivement "${a}" et tous ses matchs/membres ? Action irréversible.`))return;await T.from("mini_league_matches").delete().eq("league_id",i),await T.from("mini_league_members").delete().eq("league_id",i);const{error:s}=await T.from("mini_leagues").delete().eq("id",i);if(s){l("Erreur suppression ("+s.message+")","error");return}l("Mini League supprimée avec succès","success"),_t(e,t,c)}async function er(e,t,i){await T.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),_t(e,t,"archived")}async function bt(e,t,i){var H,B,j,U,oe,ce,re,D,ie;const{state:a,toast:c}=t,l=a.profile.id,[{data:s},{data:d},{data:p}]=await Promise.all([T.from("mini_leagues").select("*").eq("id",i).single(),T.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),T.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!s){c("Introuvable","error"),await _t(e,t);return}const n=(d||[]).some(W=>W.user_id===l),o=s.creator_id===l,f=(d||[]).map(W=>W.user).filter(Boolean),v=kn(f,p||[]),w=(p||[]).filter(W=>W.matchday===s.current_day),A=s.pot||0,r=s.entry_fee||100,u=w.length>0&&w.every(W=>W.status==="finished"||W.status==="bye"),I=s.current_day>=s.total_days,z=(d||[]).find(W=>W.user_id===l);e.innerHTML=`
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
        ${f.map(W=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${W.club_color2||zt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${W.club_color1||"#fff"}">${(W.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${W.club_name||W.pseudo}</div><div style="font-size:11px;color:#999">@${W.pseudo}</div></div>
            ${W.id===s.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${o&&f.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${r} cr. × ${f.length})</button>`:""}
        ${o?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${n?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${r} cr.)</button>`}
        ${n&&!o?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${r.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${s.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${s.current_day} / ${s.total_days}</div>
        ${w.map(W=>Ni(W,f,l,n)).join("")}
        ${o&&u&&!I?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&u&&I?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(s.status==="active"||s.status==="finished")&&v.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${A>0&&s.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${xt}">💰</th>`:""}
          </tr></thead>
          <tbody>${v.map((W,G)=>{const se=A>0&&s.status==="finished"?G===0?Math.floor(A*.7):G===1?Math.floor(A*.2):G===2?Math.floor(A*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${W.userId===l?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${G===0?xt:G<3?zt:"#555"}">${["🥇","🥈","🥉"][G]||G+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${W.clubName}</div><div style="font-size:10px;color:#999">@${W.pseudo}</div></td>
              <td style="text-align:center">${W.played}</td><td style="text-align:center">${W.won}-${W.drawn}-${W.lost}</td>
              <td style="text-align:center;color:${W.goalDiff>=0?zt:"#cc2222"}">${W.goalDiff>=0?"+":""}${W.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${W.points}</td>
              ${A>0&&s.status==="finished"?`<td style="text-align:right;font-weight:700;color:${xt}">${se?se.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${s.status!=="waiting"&&s.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,s.status==="active"?s.current_day-1:s.current_day)},(W,G)=>G+1).reverse().map(W=>{const G=(p||[]).filter(se=>se.matchday===W);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${W}</div>${G.map(se=>Ni(se,f,l,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!s.is_archived&&s.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const C=s.status==="waiting"?"waiting":s.status==="active"?"active":"archived";if((H=document.getElementById("ml-back"))==null||H.addEventListener("click",()=>_t(e,t,C)),(B=document.getElementById("ml-start-btn"))==null||B.addEventListener("click",()=>tr(e,t,s,f)),(j=document.getElementById("ml-next-day"))==null||j.addEventListener("click",()=>ir(e,t,i)),(U=document.getElementById("ml-finish-btn"))==null||U.addEventListener("click",()=>$n(e,t,i,A,v,f)),(oe=document.getElementById("ml-join-now"))==null||oe.addEventListener("click",()=>_n(e,t,i,s.type)),(ce=document.getElementById("ml-leave-btn"))==null||ce.addEventListener("click",()=>Qo(e,t,i,r)),(re=document.getElementById("ml-delete-btn"))==null||re.addEventListener("click",()=>fi(e,t,i,s.name,"waiting")),(D=document.getElementById("ml-delete-now"))==null||D.addEventListener("click",()=>fi(e,t,i,s.name,C)),(ie=document.getElementById("ml-archive-btn"))==null||ie.addEventListener("click",()=>er(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(W=>{W.addEventListener("click",()=>{const G=w.find(se=>se.id===W.dataset.playMatch);G&&t.navigate("match-mini-league",{mlMatchId:G.id,leagueId:i})})}),s.status==="finished"&&z){const W=v.findIndex(G=>G.userId===l);W>=0&&W<3&&z.prize_amount>0&&setTimeout(()=>nr(e,t,s,z,W),400)}}function Ni(e,t,i,a,c=!1){const l=f=>t.find(v=>v.id===f);if(e.is_bye){const f=l(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"?"} exempté(e)</div>`}const s=l(e.home_id),d=l(e.away_id),p=e.home_id===i||e.away_id===i,n=p&&e.status==="pending"&&a&&!c,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${p?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${p?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?zt:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(d==null?void 0:d.club_name)||(d==null?void 0:d.pseudo)||"?"}</div>
    ${n?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function tr(e,t,i,a){const{toast:c,state:l}=t,s=or(a.map(n=>n.id),i.mode),d=[];s.forEach((n,o)=>n.forEach(f=>d.push({league_id:i.id,matchday:o+1,home_id:f.home||f.bye,away_id:f.away||null,is_bye:!!f.bye,status:f.bye?"bye":"pending"})));const{error:p}=await T.from("mini_league_matches").insert(d);if(p){c("Erreur calendrier : "+p.message,"error");return}await T.from("mini_leagues").update({status:"active",current_day:1,total_days:s.length}).eq("id",i.id),c(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),bt(e,t,i.id)}async function ir(e,t,i){const{data:a}=await T.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),c=(a.current_day||0)+1;if(c>(a.total_days||0)){await $n(e,t,i,a.pot||0,null,null);return}await T.from("mini_leagues").update({current_day:c}).eq("id",i),t.toast(`Journée ${c} commencée !`,"success"),bt(e,t,i)}async function $n(e,t,i,a,c,l){const{toast:s,state:d}=t;let p=c,n=l;if(!p){const{data:f}=await T.from("mini_league_matches").select("*").eq("league_id",i),{data:v}=await T.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);n=(v||[]).map(w=>w.user).filter(Boolean),p=kn(n,f||[])}const o=[Math.floor(a*.7),Math.floor(a*.2),Math.floor(a*.1)];await Promise.all(p.slice(0,3).map((f,v)=>o[v]?T.from("mini_league_members").update({prize_amount:o[v],prize_claimed:!1}).eq("league_id",i).eq("user_id",f.userId):Promise.resolve())),await T.from("mini_leagues").update({status:"finished"}).eq("id",i),s("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),bt(e,t,i)}async function nr(e,t,i,a,c){var v,w;const{state:l,toast:s}=t,d=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],p=["🥇","🥈","🥉"][c],n=a.prize_amount||d[c]||0,o=a.prize_claimed,f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",f.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${p}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${c===0?"Champion !":c===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${xt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${o?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${xt}">${n.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${c===0?"70%":c===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${o?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${xt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${n.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(f),(v=f.querySelector("#prize-close"))==null||v.addEventListener("click",()=>f.remove()),f.addEventListener("click",A=>{A.target===f&&f.remove()}),(w=f.querySelector("#claim-prize-btn"))==null||w.addEventListener("click",async()=>{const{data:A}=await T.from("users").select("credits").eq("id",l.profile.id).single();await T.from("users").update({credits:((A==null?void 0:A.credits)||0)+n}).eq("id",l.profile.id),await T.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",l.profile.id),l.profile&&(l.profile.credits=((A==null?void 0:A.credits)||0)+n);const r=document.getElementById("nav-credits");r&&(r.textContent=`💰 ${l.profile.credits.toLocaleString("fr")}`),s(`💰 +${n.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),f.remove(),bt(e,t,i.id)})}function or(e,t){const a=e.length%2===0?[...e]:[...e,null],c=a.length;let l=a.slice(1);const s=[];for(let d=0;d<c-1;d++){const p=[],n=[a[0],...l];for(let o=0;o<c/2;o++){const f=n[o],v=n[c-1-o];f===null?p.push({bye:v}):v===null?p.push({bye:f}):p.push({home:f,away:v})}s.push(p),l=[l[l.length-1],...l.slice(0,-1)]}return t==="aller-retour"?[...s,...s.map(d=>d.map(p=>p.bye?p:{home:p.away,away:p.home}))]:s}function kn(e,t){const i={};return e.forEach(a=>{i[a.id]={userId:a.id,pseudo:a.pseudo,clubName:a.club_name||a.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(a=>a.status==="finished"&&!a.is_bye&&a.home_score!=null).forEach(a=>{const c=i[a.home_id],l=i[a.away_id];!c||!l||(c.played++,l.played++,c.goalsFor+=a.home_score,c.goalsAgainst+=a.away_score,l.goalsFor+=a.away_score,l.goalsAgainst+=a.home_score,a.home_score>a.away_score?(c.won++,c.points+=3,l.lost++):a.home_score<a.away_score?(l.won++,l.points+=3,c.lost++):(c.drawn++,c.points++,l.drawn++,l.points++),c.goalDiff=c.goalsFor-c.goalsAgainst,l.goalDiff=l.goalsFor-l.goalsAgainst)}),Object.values(i).sort((a,c)=>c.points-a.points||c.goalDiff-a.goalDiff||c.goalsFor-a.goalsFor)}async function Ri(e,t,i,a){var c,l;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:a};try{const s=(l=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:l.id;try{(T.getChannels?T.getChannels():[]).forEach(p=>{const n=p.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&T.removeChannel(p)})}catch(d){console.warn("[FriendMatch] cleanup canaux:",d)}s&&(await T.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await ni(e,t,"random",({deckId:s,formation:d,starters:p,subsRaw:n,gcCardsEnriched:o,gcDefs:f})=>{const v=w=>rr(e,t,s,d,p,n,w,f||[],i);if(!o.length){v([]);return}ii(e,o,v)})}async function rr(e,t,i,a,c,l,s=[],d=[],p,n){const{state:o,navigate:f,toast:v}=t,w=o.profile.id;let A=!1,r=null;et(e);try{await T.rpc("cancel_matchmaking",{p_user_id:w})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",w)}catch{}const{data:u}=await T.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",p).single();if(!u){v("Match introuvable","error"),Ye(e),f("mini-league");return}if(u.home_id!==w&&u.away_id!==w){v("Tu ne fais pas partie de ce match","error"),Ye(e),f("mini-league");return}const I=u.home_id===w,z=I?u.away:u.home,C=I?u.away_id:u.home_id,H=(j,U)=>{var oe;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${u.matchday}</div>
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
            <div style="font-size:12px;font-weight:700">${(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(oe=document.getElementById("lobby-cancel"))==null||oe.addEventListener("click",()=>{A=!0,clearInterval(r),Ye(e),f("mini-league")})},B=async(j,U)=>{A=!0,clearInterval(r),await new Promise(oe=>setTimeout(oe,600)),e.isConnected&&ar(e,t,j,U,s,d)};if(H(),I){let j=u.match_id;if(!j){const{data:oe,error:ce}=await T.from("matches").insert({home_id:w,away_id:C,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(ce||!oe){v("Erreur création match","error"),Ye(e),f("mini-league");return}j=oe.id,await T.from("mini_league_matches").update({match_id:j,status:"playing"}).eq("id",p)}const U=j;r=setInterval(async()=>{if(A){clearInterval(r);return}const{data:oe}=await T.from("matches").select("away_deck_id").eq("id",U).single();oe!=null&&oe.away_deck_id&&(clearInterval(r),B(U,!0))},1500)}else{let j=u.match_id;r=setInterval(async()=>{if(A){clearInterval(r);return}const{data:U}=await T.from("mini_league_matches").select("match_id").eq("id",p).single();U!=null&&U.match_id&&(clearInterval(r),j=U.match_id,await T.from("matches").update({away_deck_id:i}).eq("id",j),B(j,!1))},1500)}}async function ar(e,t,i,a,c=[],l=[]){var $;const{state:s,navigate:d,toast:p}=t,n=(($=s.params)==null?void 0:$.leagueId)||null,o=a?"p1":"p2",f=a?"p2":"p1",v=(c||[]).map(g=>g.id),w=(c||[]).map(g=>({id:g.id,gc_type:g.gc_type,_gcDef:g._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:A}=await T.from("matches").select("*").eq("id",i).single();if(!A){p("Match introuvable","error"),d("mini-league");return}async function r(){const[{data:g},{data:m},{data:x},{data:y}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:A.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:A.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",A.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",A.away_id).single()]),b=S=>({cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:Number(S.note_g)||0,note_d:Number(S.note_d)||0,note_m:Number(S.note_m)||0,note_a:Number(S.note_a)||0,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),h=((g==null?void 0:g.starters)||[]).map(S=>b(S)),E=((m==null?void 0:m.starters)||[]).map(S=>b(S)),k=(g==null?void 0:g.formation)||"4-4-2",L=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:yt(h,k),p2Team:yt(E,L),p1Subs:((g==null?void 0:g.subs)||[]).map(S=>b(S)),p2Subs:((m==null?void 0:m.subs)||[]).map(S=>b(S)),p1Formation:k,p2Formation:L,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?v:[],gc_p2:a?[]:v,gcCardsFull_p1:a?w:[],gcCardsFull_p2:a?[]:w,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:l||[],lastActionAt:new Date().toISOString()}}let u=A.game_state&&Object.keys(A.game_state).length?A.game_state:null;if(!u)if(a){u=await r();const{data:g}=await T.from("matches").select("game_state").eq("id",i).single();!(g!=null&&g.game_state)||!Object.keys(g.game_state).length?await T.from("matches").update({game_state:u,turn_user_id:A.home_id}).eq("id",i):u=g.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let g=0;g<60&&!u;g++){await new Promise(x=>setTimeout(x,400));const{data:m}=await T.from("matches").select("game_state").eq("id",i).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(u=m.game_state)}if(!u){p("Erreur de synchronisation","error"),d("mini-league");return}u.gc_p2=v,u.gcCardsFull_p2=w,await T.from("matches").update({game_state:u}).eq("id",i)}let I=!1,z=!1,C=!1,H=null,B=!1;const j=new Set,U=new Set;function oe(g){var S,q;try{T.removeChannel(ce)}catch{}const m=u[o+"Score"]||0,x=u[f+"Score"]||0;if(!C){C=!0;const F=g.winner_id||(m>x?s.profile.id:x>m?"opp":null),O=F===s.profile.id?"win":F?"loss":null;O&&xi(()=>Promise.resolve().then(()=>nn),void 0).then(V=>V.applyOwnEvolution(s.profile.id,O)).catch(()=>{})}if(!z){const F=u.p1Score||0,O=u.p2Score||0,V=(u.usedGc_p1||[]).length,X=(u.usedGc_p2||[]).length,K=g.winner_id||(F>O?A.home_id:O>F?A.away_id:null);(K?s.profile.id===K:s.profile.id<(a?A.away_id:A.home_id))&&(z=!0,Ji({player1Id:A.home_id,player2Id:A.away_id,score1:F,score2:O,gc1:V,gc2:X}).catch(ne=>console.warn("[FriendMatch] updateStats:",ne)))}let y,b;g.winner_id?(y=g.winner_id===s.profile.id,b=!1):g.forfeit?(y=m>x,b=!1):(b=m===x,y=m>x),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const h=document.createElement("div");h.id="pvp-end-overlay",h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const E=b?"🤝":y?"🏆":"😞",k=b?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",L=b?"#fff":y?"#FFD700":"#ff6b6b";h.innerHTML=`
      <div style="font-size:64px">${E}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${k}</div>
      <div style="font-size:18px">${u[o+"Name"]} ${m} – ${x} ${u[f+"Name"]}</div>
      ${g.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(h),(q=h.querySelector("#pvp-end-home"))==null||q.addEventListener("click",()=>{h.remove(),Ye(e),n?d("mini-league",{openLeagueId:n}):d("mini-league")})}const ce=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},g=>{const m=g.new;try{if(m.status==="finished"||m.forfeit){if(I||(I=!0,H&&(clearInterval(H),H=null),m.game_state&&(u=m.game_state),u.phase==="finished"&&!m.forfeit&&document.getElementById("pvp-home")))return;oe(m);return}if(m.game_state){const x=u;u=m.game_state;const y=u._lastGC;if(y&&y.seq&&!U.has(y.seq)&&(U.add(y.seq),y.by!==o)){J(y.type,y.by,()=>xe());return}const b=x[o+"Score"]||0,h=x[f+"Score"]||0,E=u[o+"Score"]||0,k=u[f+"Score"]||0,L=E>b,S=k>h;if((L||S)&&!j.has(u.round)){j.add(u.round);const q=[...u.log||[]].reverse().find(O=>O.isGoal),F=((q==null?void 0:q.homePlayers)||[]).map(O=>({name:O.name,note:O.note,portrait:O.portrait,job:O.job}));Y(F,E,k,L,()=>xe());return}xe()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function re(g){Object.assign(u,g),u.lastActionAt=new Date().toISOString();const{error:m}=await T.from("matches").update({game_state:u}).eq("id",i);m&&p("Erreur de synchronisation","error");try{xe()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function D(){if(I)return;I=!0,H&&(clearInterval(H),H=null);const g=a?A.away_id:A.home_id,m=a?"p2":"p1",x=a?"p1":"p2",y={...u,[m+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:g,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{T.removeChannel(ce)}catch{}setTimeout(()=>{Ye(e),d("mini-league")},800)}const ie={BOOST_STAT:({value:g=1,count:m=1,roles:x=[]},y,b)=>{const h=y[o+"Team"],E=Object.entries(h).filter(([k])=>!x.length||x.includes(k)).flatMap(([k,L])=>L.filter(S=>!S.used).map(S=>({...S,_line:k})));if(!E.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(y);return}W(E,m,`Choisir ${m} joueur(s) à booster (+${g})`,k=>{k.forEach(L=>{const S=(h[L._line]||[]).find(q=>q.cardId===L.cardId);S&&(S.boost=(S.boost||0)+g,y.log.push({text:`⚡ +${g} sur ${S.name}`,type:"info"}))}),y[o+"Team"]=h,b(y)})},DEBUFF_STAT:({value:g=1,count:m=1,roles:x=[],target:y="ai"},b,h)=>{const E=y==="home"?o:f,k=b[E+"Team"],L=y==="home"?"allié":"adverse",S=Object.entries(k).filter(([q])=>!x.length||x.includes(q)).flatMap(([q,F])=>F.map(O=>({...O,_line:q})));if(!S.length){b.log.push({text:`🎯 Aucun joueur ${L}`,type:"info"}),h(b);return}W(S,m,`Choisir ${m} joueur(s) ${L}(s) (-${g})`,q=>{q.forEach(F=>{const O=(k[F._line]||[]).find(V=>V.cardId===F.cardId);O&&(O.boost=(O.boost||0)-g,b.log.push({text:`🎯 -${g} sur ${O.name}`,type:"info"}))}),b[E+"Team"]=k,h(b)})},GRAY_PLAYER:({count:g=1,roles:m=[],target:x="ai"},y,b)=>{const h=x==="home"?o:f,E=y[h+"Team"],k=x==="home"?"allié":"adverse",L=Object.entries(E).filter(([S])=>!m.length||m.includes(S)).flatMap(([S,q])=>q.filter(F=>!F.used).map(F=>({...F,_line:S})));if(!L.length){y.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),b(y);return}W(L,g,`Choisir ${g} joueur(s) ${k}(s) à exclure`,S=>{const q="usedCardIds_"+h,F=new Set(y[q]||[]);S.forEach(O=>{const V=(E[O._line]||[]).find(X=>X.cardId===O.cardId);V&&(V.used=!0,F.add(O.cardId),y.log.push({text:`❌ ${V.name} exclu !`,type:"info"}))}),y[q]=[...F],y[h+"Team"]=E,b(y)})},REVIVE_PLAYER:({count:g=1,roles:m=[]},x,y)=>{const b=x[o+"Team"],h=Object.entries(b).filter(([E])=>!m.length||m.includes(E)).flatMap(([E,k])=>k.filter(L=>L.used).map(L=>({...L,_line:E})));if(!h.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(x);return}W(h,g,`Choisir ${g} joueur(s) à ressusciter`,E=>{E.forEach(k=>{const L=(b[k._line]||[]).find(S=>S.cardId===k.cardId);L&&(L.used=!1,x.log.push({text:`💫 ${L.name} ressuscité !`,type:"info"}))}),x[o+"Team"]=b,y(x)})},REMOVE_GOAL:({},g,m)=>{const x=f+"Score";g[x]>0?(g[x]--,g.log.push({text:"🚫 Dernier but annulé !",type:"info"})):g.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(g)},ADD_GOAL_DRAW:({},g,m)=>{g[o+"Score"]===g[f+"Score"]?(g[o+"Score"]++,g.log.push({text:"🎯 But bonus !",type:"info"})):g.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(g)},ADD_SUB:({value:g=1},m,x)=>{m.maxSubs=(m.maxSubs||3)+g,m.log.push({text:`🔄 +${g} remplacement(s)`,type:"info"}),x(m)},CUSTOM:({},g,m)=>m(g)};function W(g,m,x,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let h=[];function E(){var L,S;const k=g.map(q=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[q._line]||"#555",O=$e(q,q._line)+(q.boost||0),X=h.find(te=>te.cardId===q.cardId)?"#FFD700":"rgba(255,255,255,0.25)",K=q.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${q.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${X};background:${F};overflow:hidden;cursor:pointer;${K}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${q.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${O}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${q._line}</div>
        </div>`}).join("");b.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${x}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h.length}/${m}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${k}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${h.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${h.length}/${m})
          </button>
        </div>`,(L=b.querySelector("#pp-close"))==null||L.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(q=>{q.addEventListener("click",()=>{const F=q.dataset.cid,O=g.find(X=>X.cardId===F),V=h.findIndex(X=>X.cardId===F);O&&(V>-1?h.splice(V,1):h.length<m&&h.push(O),E())})}),(S=b.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{b.remove(),y(h)})}E(),document.body.appendChild(b)}async function G(g,m){const y=(u["gcCardsFull_"+o]||[]).find(k=>k.id===g),b=(y==null?void 0:y._gcDef)||(u.gcDefs||[]).find(k=>{var L;return k.name===m||((L=k.name)==null?void 0:L.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),h=[...u["usedGc_"+o]||[],g],E={type:m,by:o,seq:(u._gcAnimSeq||0)+1};U.add(E.seq),J(m,o,async()=>{if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const L=ie[b.effect_type];if(L){const S={...u};L(b.effect_params||{},S,async q=>{q["usedGc_"+o]=h,q._lastGC=E,q._gcAnimSeq=E.seq,await re(q)});return}}const k={...u};switch(m){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const L=f+"Score";k[L]>0&&(k[L]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+o]=h,k._lastGC=E,k._gcAnimSeq=E.seq,await re(k)})}function se(g,m){const x="usedCardIds_"+g,y=new Set(u[x]||[]);m.forEach(b=>y.add(b)),u[x]=[...y]}function fe(){for(const g of["p1","p2"]){const m=new Set(u["usedCardIds_"+g]||[]),x=u[g+"Team"];if(x)for(const y of["GK","DEF","MIL","ATT"])(x[y]||[]).forEach(b=>{b.used=m.has(b.cardId)})}}function xe(){var ot,gt,ae,ve,ee,le;if(u.phase==="reveal")return Ee();if(u.phase==="midfield")return he();if(u.phase==="finished")return _();const g=u[o+"Team"],m=u[f+"Team"];fe();const x=u[o+"Score"],y=u[f+"Score"],b=u[o+"Name"],h=u[f+"Name"],E=u.phase===o+"-attack",k=u.phase===o+"-defense",L=Array.isArray(u["selected_"+o])?u["selected_"+o]:[],S=L.map(Z=>Z.cardId),q=window.innerWidth>=700,F=u[o+"Subs"]||[],O=u["usedSubIds_"+o]||[],V=F.filter(Z=>!O.includes(Z.cardId)),X=u["gcCardsFull_"+o]||[],K=u["usedGc_"+o]||[],te=X.filter(Z=>!K.includes(Z.id)),ne=u.boostOwner===o&&!u.boostUsed,ue=!["GK","DEF","MIL","ATT"].some(Z=>(m[Z]||[]).some(de=>!de.used)),me=[...g.MIL||[],...g.ATT||[]].filter(Z=>!Z.used),ye=E&&ue&&me.length===0?[...g.GK||[],...g.DEF||[]].filter(Z=>!Z.used).map(Z=>Z.cardId):[];function be(Z,de,Ae){var Ti,Ai;const we=Z._gcDef,tt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[we==null?void 0:we.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",it={purple:"#b06ce0",light_blue:"#00d4ef"}[we==null?void 0:we.color]||"#b06ce0",rt=(we==null?void 0:we.name)||Z.gc_type,st=(we==null?void 0:we.effect)||((Ti=Ue[Z.gc_type])==null?void 0:Ti.desc)||"",ct=we!=null&&we.image_url?`/manager-wars/icons/${we.image_url}`:null,$t=((Ai=Ue[Z.gc_type])==null?void 0:Ai.icon)||"⚡",pt=Math.round(Ae*.22),ht=Math.round(Ae*.22),kt=Ae-pt-ht,Ht=rt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${Z.id}" data-gc-type="${Z.gc_type}"
        style="box-sizing:border-box;width:${de}px;height:${Ae}px;border-radius:10px;border:2px solid ${it};background:${tt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${pt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Ht}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${de-6}px">${rt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${kt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ct?`<img src="${ct}" style="max-width:${de-10}px;max-height:${kt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(kt*.55)}px">${$t}</span>`}
        </div>
        <div style="height:${ht}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${st.slice(0,38)}</span>
        </div>
      </div>`}function Te(Z,de){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Z}px;height:${de}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(de*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(de*.2)}px">⚡</div>
        <div style="font-size:${Math.round(de*.09)}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const ke=(Z,de)=>de?Te(130,175):be(Z,130,175),De=(Z,de)=>de?Te(68,95):be(Z,68,95),ze=q?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ge=E?Re(o)?`<button id="pvp-action" style="${ze};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${L.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${ze};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${ze};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${L.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${h}</div>`,Le=E&&!Re(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':E||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${L.length}/3 sélectionné(s)</div>`:"",He=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${q?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${V.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':V.map(Z=>`<div class="pvp-sub-btn" data-sub-id="${Z.cardId}" style="cursor:pointer;flex-shrink:0">${Ke(Z,q?76:44,q?100:58)}</div>`).join("")}
    </div>`,Fe=E?"attack":k?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(g,u[o+"Formation"],Fe,S,300,300,ye)}
      </div>
    </div>`;function Oe(Z){if(Z.type==="duel"&&(Z.homeTotal!=null||Z.aiTotal!=null)){const de=(Z.homeTotal||0)>=(Z.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(Z.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Z.homePlayers||[]).map(Ae=>dt(Ae)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${de?20:14}px;font-weight:900;color:${de?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${Z.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${de?14:20}px;font-weight:900;color:${de?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${Z.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Z.aiPlayers||[]).map(Ae=>dt(Ae)).join("")}
            </div>
          </div>
          ${Z.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${Z.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${Z.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${Z.type==="goal"?700:400};padding:3px 2px">${Z.text||""}</div>`}const We=(()=>{var de,Ae;if(k&&((de=u.pendingAttack)!=null&&de.players)){const we=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${h} ATTAQUE — Défendez !</div>
          ${nt((we.players||[]).map(tt=>({...tt,used:!1})),"#ff6b6b",we.total)}
        </div>`}if(E&&((Ae=u.pendingAttack)!=null&&Ae.players)){const we=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((we.players||[]).map(tt=>({...tt,used:!1})),"#00ff88",we.total)}
        </div>`}const Z=(u.log||[]).slice(-1)[0];return Z?'<div style="padding:2px 4px">'+Oe(Z)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Xe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${We}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",q?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Xe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${He}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Pe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ge}${Le}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${te.map(Z=>ke(Z,!1)).join("")}
            ${ne?ke(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Xe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(g,u[o+"Formation"],Fe,S,300,300,ye)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${te.map(Z=>De(Z,!1)).join("")}
            ${ne?De(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${E&&V.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${E&&V.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${E&&V.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${E&&V.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${V.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(u["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(u["usedSubIds_"+o]||[]).length}/${u.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Ge}${Le}</div>
        </div>
      </div>`;function Qe(){const Z=e.querySelector(".match-screen");if(!Z)return;const de=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Z.style.height=de+"px",Z.style.minHeight=de+"px",Z.style.maxHeight=de+"px",Z.style.overflow="hidden";const Ae=e.querySelector("#mobile-action-bar"),we=e.querySelector("#mobile-play-area");Ae&&we&&(we.style.paddingBottom=Ae.offsetHeight+"px")}if(Qe(),setTimeout(Qe,120),setTimeout(Qe,400),B||(B=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Qe),window.visualViewport.addEventListener("scroll",Qe)),window.addEventListener("resize",Qe)),function(){const de=e.querySelector(".terrain-wrapper svg");de&&(de.removeAttribute("width"),de.removeAttribute("height"),de.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",de.setAttribute("viewBox","-26 -26 352 352"),de.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(Z=>{Z.addEventListener("click",()=>{if(!E&&!k)return;const de=Z.dataset.cardId,Ae=Z.dataset.role,we=(g[Ae]||[]).find(st=>st.cardId===de);if(!we||we.used)return;const tt=ye.includes(de);if(E&&!["MIL","ATT"].includes(Ae)&&!tt)return;Array.isArray(u["selected_"+o])||(u["selected_"+o]=[]);const it=u["selected_"+o],rt=it.findIndex(st=>st.cardId===de);rt>-1?it.splice(rt,1):it.length<3&&it.push({...we,_role:Ae}),xe()})}),e.querySelectorAll(".match-used-hit").forEach(Z=>{Z.addEventListener("click",()=>Q(Z.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(Z=>{Z.addEventListener("click",()=>Q())}),(ot=e.querySelector("#pvp-sub-open"))==null||ot.addEventListener("click",()=>Q()),e.querySelectorAll(".pvp-gc-mini").forEach(Z=>{Z.addEventListener("click",()=>N(Z.dataset.gcId,Z.dataset.gcType))}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>R()),(ae=e.querySelector("#pvp-action"))==null||ae.addEventListener("click",Z=>{E?Z.currentTarget.dataset.pass==="1"||!Re(o)?Ce():Be():k&&Ve()}),(ve=e.querySelector("#pvp-quit"))==null||ve.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&D()}),(ee=e.querySelector("#pvp-view-opp"))==null||ee.addEventListener("click",()=>pe()),(le=e.querySelector("#pvp-toggle-history"))==null||le.addEventListener("click",()=>Me()),H&&(clearInterval(H),H=null),(E||k)&&!I){let Z=30,de=!1;const Ae=()=>document.getElementById("pvp-timer"),we=()=>{Ae()&&(Ae().textContent=Z+"s",Ae().style.color=de?"#ff4444":"#fff")};we(),H=setInterval(()=>{Z--,Z<0?de?(clearInterval(H),H=null,E&&!Re(o)?Ce():D()):(de=!0,Z=15,we()):we()},1e3)}}function Ee(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${u[f+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(u[f+"Team"],u[f+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await re({phase:"midfield"})},5e3)}let _e=!1;function he(){if(_e)return;const g=u[o+"Team"].MIL||[],m=u[f+"Team"].MIL||[];function x(te){return te.reduce((ne,ue)=>ne+$e(ue,"MIL"),0)}function y(te){let ne=0;for(let ue=0;ue<te.length-1;ue++){const me=at(te[ue],te[ue+1]);me==="#00ff88"?ne+=2:me==="#FFD700"&&(ne+=1)}return ne}const b=x(g)+y(g),h=x(m)+y(m),E=b>=h;function k(te,ne,ue){return`<div id="duel-row-${ue}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ne}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${te.map((me,ye)=>{const be=ye<te.length-1?at(me,te[ye+1]):null,Te=!be||be==="#ff3333"||be==="#cc2222",ke=be==="#00ff88"?"+2":be==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ue}" data-idx="${ye}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ke({...me,note:$e(me,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ye<te.length-1?`<div class="duel-link duel-link-${ue}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Te?"rgba(255,255,255,0.12)":be};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Te?"none":`0 0 8px ${be}`}">
              ${ke?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${be}">${ke}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ue}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(te)} + ${y(te)} liens = <b style="color:#fff">${x(te)+y(te)}</b>
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
      ${k(g,u[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k(m,u[f+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const L=(te,ne)=>e.querySelectorAll(te).forEach((ue,me)=>{setTimeout(()=>{ue.style.opacity="1",ue.style.transform="translateY(0) scale(1)"},ne+me*90)});L(".duel-card-me",150),L(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((te,ne)=>setTimeout(()=>{te.style.opacity="1"},ne*70)),900),setTimeout(()=>{const te=e.querySelector("#pvp-vs");te&&(te.style.opacity="1",te.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ne=>ne.style.opacity="1")},1250);function S(te,ne,ue){const me=document.getElementById(te);if(!me)return;const ye=performance.now(),be=Te=>{const ke=Math.min(1,(Te-ye)/ue);me.textContent=Math.round(ne*(1-Math.pow(1-ke,3))),ke<1?requestAnimationFrame(be):me.textContent=ne};requestAnimationFrame(be)}setTimeout(()=>{S("pvp-score-me",b,800),S("pvp-score-opp",h,800)},1500);const q=u.p1Team.MIL||[],F=u.p2Team.MIL||[],O=x(q)+y(q),V=x(F)+y(F),X=O>=V?"p1":"p2";let K=u.boostValue;K==null&&(K=ti(),u.boostValue=K,u.boostOwner=X,u.boostUsed=!1),_e=!0,setTimeout(()=>{const te=e.querySelector("#duel-row-"+(E?"me":"opp")),ne=e.querySelector("#duel-row-"+(E?"opp":"me")),ue=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),ye=E?ue:me,be=E?me:ue;ye&&(ye.style.fontSize="80px",ye.style.color=E?"#FFD700":"#ff6b6b",ye.style.animation="duelPulse .5s ease"+(E?",duelGlow 1.5s ease infinite .5s":"")),be&&(be.style.opacity="0.25"),setTimeout(()=>{te&&(te.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",te.style.zIndex="5"),setTimeout(()=>{const Te=document.getElementById("duel-shock");Te&&(Te.style.animation="shockwave .5s ease-out forwards"),ne&&(ne.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ze;const Te=document.getElementById("pvp-duel-finale");if(!Te)return;const ke=u.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+K+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",De=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Te.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(E?"⚽ "+u[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+u[f+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ke+De,Te.style.transition="opacity .45s ease",Te.style.opacity="1",Te.style.pointerEvents="auto",(ze=document.getElementById("pvp-start-match"))==null||ze.addEventListener("click",async()=>{const Ge=X;await re({phase:Ge+"-attack",attacker:Ge,round:1,boostValue:K,boostUsed:!1,boostOwner:Ge})})},600)},700)},2800)}function Y(g,m,x,y,b){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const E=Array.from({length:10},(q,F)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${F%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][F%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};h.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${E}</div>
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
        ${g.map(q=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[q.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${q.portrait?`<img src="${q.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(q.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(h);let L=!1;const S=()=>{L||(L=!0,h.remove(),setTimeout(()=>b(),50))};h.addEventListener("click",S),setTimeout(S,3500)}function J(g,m,x){var K,te;const y=(u.gcDefs||[]).find(ne=>{var ue;return ne.name===g||((ue=ne.name)==null?void 0:ue.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",E=(y==null?void 0:y.name)||g,k=(y==null?void 0:y.effect)||((K=Ue[g])==null?void 0:K.desc)||"",L=y!=null&&y.image_url?`/manager-wars/icons/${y.image_url}`:null,S=((te=Ue[g])==null?void 0:te.icon)||"⚡",F=m===o?"Vous":u[m+"Name"]||"Adversaire",O=document.createElement("div");O.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",O.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${h}66}50%{box-shadow:0 0 60px ${h}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${h};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${F} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${h};background:${b};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${E.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${E}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(O);let V=!1;const X=()=>{V||(V=!0,O.remove(),setTimeout(()=>x&&x(),50))};O.addEventListener("click",X),setTimeout(X,3e3)}function N(g,m){var O,V,X,K;const y=(u["gcCardsFull_"+o]||[]).find(te=>te.id===g),b=y==null?void 0:y._gcDef,h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",E={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",k=(b==null?void 0:b.name)||m,L=(b==null?void 0:b.effect)||((O=Ue[m])==null?void 0:O.desc)||"Carte spéciale.",S=b!=null&&b.image_url?`/manager-wars/icons/${b.image_url}`:null,q=((V=Ue[m])==null?void 0:V.icon)||"⚡",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",F.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${E};background:${h};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${E}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${q}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(F),(X=F.querySelector("#pvp-gc-back"))==null||X.addEventListener("click",()=>F.remove()),(K=F.querySelector("#pvp-gc-use"))==null||K.addEventListener("click",()=>{F.remove(),G(g,m)})}function R(){var y;const g=u[o+"Team"],m=Object.entries(g).flatMap(([b,h])=>(h||[]).filter(E=>!E.used).map(E=>({...E,_line:b})));if(!m.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(b=>{const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",E=$e(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${h};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${E}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(y=x.querySelector("#bp-close"))==null||y.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const h=b.dataset.cid,E=m.find(L=>L.cardId===h);if(!E)return;const k=(g[E._line]||[]).find(L=>L.cardId===h);k&&(k.boost=(k.boost||0)+u.boostValue),x.remove(),await re({[o+"Team"]:g,boostUsed:!0})})})}function Q(g=null){var V,X;if(!(u.phase===o+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const x=u[o+"Team"],y=u["usedSubIds_"+o]||[],b=u.maxSubs||3;if(y.length>=b){p(`Maximum ${b} remplacements atteint`,"warning");return}const h=Object.entries(x).flatMap(([K,te])=>(te||[]).filter(ne=>ne.used).map(ne=>({...ne,_line:K}))),E=(u[o+"Subs"]||[]).filter(K=>!y.includes(K.cardId));if(!h.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!E.length){p("Aucun remplaçant disponible","warning");return}let k=Math.max(0,h.findIndex(K=>K.cardId===g));const L=((V=h[k])==null?void 0:V._line)||((X=h[k])==null?void 0:X.job);let S=Math.max(0,E.findIndex(K=>K.job===L)),q=!1;const F=document.createElement("div");F.id="pvp-sub-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function O(){var be,Te,ke,De,ze,Ge;const K=h[k],te=E[S],ne=Math.min(130,Math.round((window.innerWidth-90)/2)),ue=Math.round(ne*1.35),me=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;F.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${b})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${me(S===0)}" ${S===0?"disabled":""}>▲</button>
          <div>${te?Ke({...te,used:!1,boost:0},ne,ue):"<div>—</div>"}</div>
          <button id="pin-down" style="${me(S>=E.length-1)}" ${S>=E.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${S+1}/${E.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${me(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${K?Ke({...K,used:!1,boost:0},ne,ue):"<div>—</div>"}</div>
          <button id="pout-down" style="${me(k>=h.length-1)}" ${k>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(be=F.querySelector("#psub-close"))==null||be.addEventListener("click",()=>F.remove()),(Te=F.querySelector("#pout-up"))==null||Te.addEventListener("click",()=>{k>0&&(k--,O())}),(ke=F.querySelector("#pout-down"))==null||ke.addEventListener("click",()=>{k<h.length-1&&(k++,O())}),(De=F.querySelector("#pin-up"))==null||De.addEventListener("click",()=>{S>0&&(S--,O())}),(ze=F.querySelector("#pin-down"))==null||ze.addEventListener("click",()=>{S<E.length-1&&(S++,O())});const ye=(Le,He,Fe,Pe)=>{const Oe=F.querySelector("#"+Le);if(!Oe)return;let We=0;Oe.addEventListener("touchstart",Xe=>{We=Xe.touches[0].clientY},{passive:!0}),Oe.addEventListener("touchend",Xe=>{const Qe=Xe.changedTouches[0].clientY-We;if(Math.abs(Qe)<30)return;const ot=He();Qe<0&&ot<Pe-1?(Fe(ot+1),O()):Qe>0&&ot>0&&(Fe(ot-1),O())},{passive:!0})};ye("pin-panel",()=>S,Le=>S=Le,E.length),ye("pout-panel",()=>k,Le=>k=Le,h.length),(Ge=F.querySelector("#psub-confirm"))==null||Ge.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),q)return;q=!0;const He=h[k],Fe=E[S];if(!He||!Fe)return;const Pe=He._line,Oe=(x[Pe]||[]).findIndex(Qe=>Qe.cardId===He.cardId);if(Oe===-1){p("Erreur : joueur introuvable","error"),F.remove();return}const We={...Fe,_line:Pe,position:He.position,used:!1,boost:0};x[Pe].splice(Oe,1,We);const Xe=[...y,Fe.cardId];F.remove(),ge(He,Fe,async()=>{await re({[o+"Team"]:x,[f+"Team"]:u[f+"Team"],["usedSubIds_"+o]:Xe})})})}document.body.appendChild(F),O()}function ge(g,m,x){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const h=(L,S,q)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${q}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[L.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${qe(L)?`<img src="${qe(L)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(L.name||"").slice(0,12)}</div>
    </div>`;b.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${h(m,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${h(g,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(b);let E=!1;const k=()=>{E||(E=!0,b.remove(),setTimeout(()=>x(),50))};b.addEventListener("click",k),setTimeout(k,2200)}function pe(){var m;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",g.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[f+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(u[f+"Team"],u[f+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(g),(m=g.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>g.remove())}function Me(){var y;const g=u.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const x=b=>{var E,k,L;if(b.type==="duel"){const S=b.isGoal,q=b.homeScored&&o==="p1"||!b.homeScored&&S&&o==="p2",F=b.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",O=S?q?"⚽ BUT !":"⚽ BUT adversaire !":(E=b.homePlayers)!=null&&E.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${F};margin-bottom:4px">
          <div style="font-size:9px;color:${F};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${O}</div>
          ${(k=b.homePlayers)!=null&&k.length?`<div style="margin-bottom:3px">${nt(b.homePlayers,"rgba(255,255,255,0.7)",b.homeTotal)}</div>`:""}
          ${(L=b.aiPlayers)!=null&&L.length?`<div style="opacity:0.7">${nt(b.aiPlayers,"#ff6b6b",b.aiTotal)}</div>`:""}
        </div>`}return b.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${b.outPlayer?Ke({...b.outPlayer,used:!0,_line:b.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${b.inPlayer?Ke({...b.inPlayer,_line:b.inPlayer.job,rarity:"normal"},38,50):""}
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
      </div>`,document.body.appendChild(m),(y=m.querySelector("#pvp-hist-close"))==null||y.addEventListener("click",()=>m.remove())}async function Ce(){if(u.phase!==o+"-attack")return;const g=o==="p1"?"p2":"p1",m=(u.round||0)+1,x=[...u.log||[]];x.push({type:"info",text:`⏭️ ${u[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=Ze(u),b=Re(g),h=y||!b?"finished":g+"-attack";await re({["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:h,attacker:g,round:m,log:x}),h==="finished"&&await P(u)}async function Be(){const g=u[o+"Team"],m=!["GK","DEF","MIL","ATT"].some(h=>(u[f+"Team"][h]||[]).some(E=>!E.used)),x=(u["selected_"+o]||[]).map(h=>{const E=(g[h._role]||[]).find(O=>O.cardId===h.cardId)||h,k=m&&["GK","DEF"].includes(h._role),L=g[h._role]||[],S=L.findIndex(O=>O.cardId===h.cardId),q=lt(L.length),F=S>=0?q[S]:E._col??1;return{...E,_line:h._role,_col:F,...k?{note_a:Math.max(1,Number(E.note_a)||0)}:{}}});if(!x.length)return;const y=Nt(x,u.modifiers[o]||{});se(o,x.map(h=>h.cardId)),x.forEach(h=>{const E=(g[h._role]||[]).find(k=>k.cardId===h.cardId);E&&(E.used=!0)}),u["selected_"+o]=[],xe();const b=[...u.log||[]];if(m){const h=(u[o+"Score"]||0)+1,E=x.map(F=>({name:F.name,note:$e(F,F._line||"ATT"),portrait:qe(F),job:F.job}));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:E,homeTotal:y.total,aiTotal:0});const k=(u.round||0)+1,L=o==="p1"?"p2":"p1",S={...u,[o+"Team"]:g,[o+"Score"]:h},q=Ze(S);j.add(k),Y(E,h,u[f+"Score"]||0,!0,async()=>{await re({[o+"Team"]:g,[o+"Score"]:h,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:q?"finished":L+"-attack",attacker:L,round:k,log:b}),q&&await P({...u,[o+"Score"]:h})});return}b.push({type:"pending",text:`⚔️ ${u[o+"Name"]} attaque (${y.total})`}),await re({[o+"Team"]:g,[f+"Team"]:u[f+"Team"],pendingAttack:{...y,players:x,side:o},["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},phase:f+"-defense",log:b})}async function Ve(){const g=u[o+"Team"],m=(u["selected_"+o]||[]).map(K=>{const te=(g[K._role]||[]).find(be=>be.cardId===K.cardId)||K,ne=g[K._role]||[],ue=ne.findIndex(be=>be.cardId===K.cardId),me=lt(ne.length),ye=ue>=0?me[ue]:te._col??1;return{...te,_line:K._role,_col:ye}}),x=Rt(m,u.modifiers[o]||{});se(o,m.map(K=>K.cardId)),m.forEach(K=>{const te=(g[K._role]||[]).find(ne=>ne.cardId===K.cardId);te&&(te.used=!0)}),u["selected_"+o]=[],xe();const y=Ot(u.pendingAttack.total,x.total,u.modifiers[o]||{}),b=u.pendingAttack.side,h=y==="attack"||(y==null?void 0:y.goal),E=b==="p1"?"p2":"p1",k=(u.round||0)+1,L=(u.pendingAttack.players||[]).map(K=>({name:K.name,note:$e(K,K._line||"ATT"),portrait:qe(K),job:K.job})),S=[...u.log||[]];S.push({type:"duel",isGoal:h,homeScored:h&&b===o,text:h?`⚽ BUT de ${u[b+"Name"]} ! (${u.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${x.total})`,homePlayers:L,aiPlayers:m.map(K=>({name:K.name,note:$e(K,K._line||"DEF"),portrait:qe(K),job:K.job})),homeTotal:u.pendingAttack.total,aiTotal:x.total});const q=h?(u[b+"Score"]||0)+1:u[b+"Score"]||0,F={...u,[o+"Team"]:g,[b+"Score"]:q},O=Ze(F),V=O?"finished":E+"-attack",X=async()=>{await re({[o+"Team"]:g,[f+"Team"]:u[f+"Team"],[b+"Score"]:q,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:V,attacker:E,round:k,log:S}),(V==="finished"||O)&&await P({...u,[b+"Score"]:q})};if(h){const K=b===o,te=K?q:u[o+"Score"]||0,ne=K?u[f+"Score"]||0:q;j.add(k),Y(L,te,ne,K,X)}else await X()}function Se(g){return["MIL","ATT"].some(m=>(g[m]||[]).some(x=>!x.used))}function Ne(g){return["GK","DEF","MIL","ATT"].some(m=>(g[m]||[]).some(x=>!x.used))}function Ie(g){return Ne(g)&&!Se(g)}function Re(g){const m=u[g+"Team"],x=u[(g==="p1"?"p2":"p1")+"Team"];return!!(Se(m)||!Ne(x)&&Ie(m))}function Ze(g){const m=["MIL","ATT"].some(S=>(g.p1Team[S]||[]).some(q=>!q.used)),x=["MIL","ATT"].some(S=>(g.p2Team[S]||[]).some(q=>!q.used)),y=Ne(g.p1Team),b=Ne(g.p2Team);return!m&&!(!b&&y)&&(!x&&!(!y&&b))}function M(g){const m=g.p1Score||0,x=g.p2Score||0;return m===x?null:m>x?A.home_id:A.away_id}async function P(g){try{const m=M(g),x=m?A.home_id===m?A.away_id:A.home_id:null,y=g.p1Score||0,b=g.p2Score||0;await T.from("matches").update({status:"finished",winner_id:m,home_score:y,away_score:b}).eq("id",i);const{data:h}=await T.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(h){await T.from("mini_league_matches").update({home_score:y,away_score:b,status:"finished"}).eq("id",h.id);const{data:E}=await T.from("mini_league_matches").select("id, status").eq("league_id",h.league_id).eq("matchday",h.matchday);if((E||[]).every(L=>L.status==="finished"||L.status==="bye")){const{data:L}=await T.from("mini_leagues").select("current_day,total_days").eq("id",h.league_id).single();if(L){const S=(L.current_day||0)+1,q=S>(L.total_days||0);await T.from("mini_leagues").update({current_day:q?L.total_days:S,status:q?"finished":"active"}).eq("id",h.league_id)}}}m&&x&&wi(m,x).catch(()=>{})}catch(m){console.error("[ML] finishMatch:",m)}}function _(){var b;if(I&&document.getElementById("pvp-end-overlay"))return;I=!0;const g=u[o+"Score"],m=u[f+"Score"],x=g>m,y=g===m;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${g} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{T.removeChannel(ce)}catch{}Ye(e),d("mini-league",n?{openLeagueId:n}:{})})}xe()}const sr="/manager-wars/",dr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function lr(e,t,i){let a=0;const c=document.createElement("div");c.id="tutorial-overlay",c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const l=()=>{var o,f,v;const d=t[a],p=a===t.length-1,n=Math.round((a+1)/t.length*100);c.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${n}%;background:${d.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${d.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${d.title}</div>
          <div style="font-size:11px;color:#aaa">${a+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${d.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${sr}icons/${d.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${d.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${d.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${a>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${p?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${d.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${p?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,c.querySelectorAll("ul,ol").forEach(w=>{w.style.paddingLeft="20px",w.style.marginTop="6px",w.style.marginBottom="6px"}),c.querySelectorAll("li").forEach(w=>{w.style.marginBottom="4px"}),c.querySelectorAll("p").forEach(w=>{w.style.marginBottom="8px"}),(o=c.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{a--,l()}),(f=c.querySelector("#tuto-next"))==null||f.addEventListener("click",()=>{p?s():(a++,l())}),(v=c.querySelector("#tuto-skip"))==null||v.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&s()})},s=async()=>{c.remove(),e!=null&&e.id&&await T.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(c),l()}async function cr(e,t,i){if(!e||e.tutorial_done)return;let a=[];const{data:c,error:l}=await T.rpc("get_tutorial_steps");if(!l&&(c==null?void 0:c.length)>0)a=c,console.log(`[Tutorial] RPC OK → ${a.length} étapes`);else{const{data:d,error:p}=await T.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!p&&(d==null?void 0:d.length)>0?(a=d,console.log(`[Tutorial] Direct OK → ${a.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${l==null?void 0:l.message}, Direct: ${p==null?void 0:p.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const s=a.length>0?a.map(d=>({emoji:d.emoji,title:d.title,color:d.color,content:d.content,image_url:d.image_url||null})):dr;lr(e,s,()=>t("boosters"))}const pr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t){return t&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Oi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Yt(e,t){const a=t?pr[t]||"#bbb":"#d0d0d0",c=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${a};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${c}</div>`}function Hi(e){const i=Xt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Ui(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function ur(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Ei(e,t)}async function Ei(e,t){const{state:i,toast:a}=t,{data:c}=await T.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:l}=await T.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  </div>`;let p="buy";const n=()=>{var r,u,I,z,C,H,B;return{name:(((r=document.getElementById("flt-name"))==null?void 0:r.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((I=document.getElementById("flt-country"))==null?void 0:I.value)||"").toLowerCase().trim(),job:((z=document.getElementById("flt-job"))==null?void 0:z.value)||"",rarity:((C=document.getElementById("flt-rarity"))==null?void 0:C.value)||"",note1:parseInt((H=document.getElementById("flt-note1"))==null?void 0:H.value)||0,note2:parseInt((B=document.getElementById("flt-note2"))==null?void 0:B.value)||0}};function o(r){const u=n();return r.filter(I=>{var oe,ce;const z=(oe=I.card)==null?void 0:oe.player;if(!z)return!1;const C=`${z.firstname} ${z.surname_encoded}`.toLowerCase(),H=(((ce=z.clubs)==null?void 0:ce.encoded_name)||"").toLowerCase(),B=(z.country_code||"").toLowerCase(),j=Et(z,z.job),U=z.job2?Et(z,z.job2):0;return!(u.name&&!C.includes(u.name)||u.club&&!H.includes(u.club)||u.country&&!B.includes(u.country)||u.job&&z.job!==u.job||u.rarity&&z.rarity!==u.rarity||u.note1&&j<u.note1||u.note2&&U<u.note2)})}function f(r){var H,B,j;const u=(H=r.card)==null?void 0:H.player;if(!u)return"";const I=Et(u,u.job),z=u.job2?Et(u,u.job2):0,C=(i.profile.credits||0)>=r.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Oi(u.rarity)}
      ${Yt(I,u.job)}
      ${Yt(z,u.job2||null)}
      ${Hi(u.country_code)}
      ${Ui((B=u.clubs)==null?void 0:B.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.firstname} ${u.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((j=r.seller)==null?void 0:j.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${r.id}" ${C?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${C?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function v(r){var H,B,j;const u=(H=r.card)==null?void 0:H.player;if(!u)return"";const I=Et(u,u.job),z=u.job2?Et(u,u.job2):0,C=r.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${C?"opacity:0.7":""}">
      ${Oi(u.rarity)}
      ${Yt(I,u.job)}
      ${Yt(z,u.job2||null)}
      ${Hi(u.country_code)}
      ${Ui((B=u.clubs)==null?void 0:B.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.firstname} ${u.surname_encoded}</div>
        <div style="font-size:10px;color:${C?"#22c55e":"#999"};margin-top:1px">
          ${C?`✅ Vendu à ${((j=r.buyer)==null?void 0:j.pseudo)||"—"} · ${r.sold_at?new Date(r.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(r.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        ${C?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${r.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function w(){const r=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(r){if(u.style.display=p==="buy"?"flex":"none",p==="buy"){const I=o(s);r.innerHTML=I.length?I.map(f).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const I=d.filter(C=>C.status==="active").sort((C,H)=>new Date(H.listed_at)-new Date(C.listed_at)),z=d.filter(C=>C.status==="sold").sort((C,H)=>new Date(H.sold_at||H.listed_at)-new Date(C.sold_at||C.listed_at));r.innerHTML=(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${I.length})</div>`+I.map(v).join(""):"")+(z.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${z.length})</div>`+z.map(v).join(""):"")+(!I.length&&!z.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}r.querySelectorAll("[data-buy]").forEach(I=>I.addEventListener("click",()=>fr(I.dataset.buy,s,e,t))),r.querySelectorAll("[data-cancel]").forEach(I=>I.addEventListener("click",()=>mr(I.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{p=r.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const I=u===r;u.style.background=I?"var(--green)":"#fff",u.style.color=I?"#fff":"var(--gray-600)",u.style.borderColor=I?"var(--green)":"var(--gray-200)"}),w()})});let A;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(r=>{var u;(u=document.getElementById(r))==null||u.addEventListener("input",()=>{clearTimeout(A),A=setTimeout(w,250)})}),w()}async function fr(e,t,i,a){const{state:c,toast:l,refreshProfile:s}=a,d=t.find(o=>o.id===e);if(!d)return;const p=d.price;if((c.profile.credits||0)<p){l("Crédits insuffisants","error");return}gr(d,async()=>{const{error:o}=await T.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(o){l("Erreur achat : "+o.message,"error");return}await s();const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),l("✅ Carte achetée !","success"),await Ei(i,a)})}function gr(e,t){var s;const i=(s=e.card)==null?void 0:s.player,a=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${a} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(c);const l=d=>{c.remove(),d&&t()};c.querySelector("#buy-cancel").addEventListener("click",()=>l(!1)),c.querySelector("#buy-ok").addEventListener("click",()=>l(!0)),c.addEventListener("click",d=>{d.target===c&&l(!1)})}async function mr(e,t,i){const{toast:a}=i,{data:c}=await T.from("market_listings").select("card_id").eq("id",e).single();if(await T.from("market_listings").update({status:"cancelled"}).eq("id",e),c!=null&&c.card_id){const{count:l}=await T.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",c.card_id).eq("status","active");l||await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id)}a("Annonce retirée","success"),Ei(t,i)}async function xr(e,{state:t,navigate:i,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await T.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function yr(e,{state:t,navigate:i,toast:a}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await T.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},d=(l||[]).filter(o=>o.status==="finished"),p=(l||[]).filter(o=>o.status==="in_progress");function n(o){const f=o.home_id===c.id;f?o.home_score:o.away_score,f?o.away_score:o.home_score;const v=o.winner_id===c.id,w=o.home_score===o.away_score&&o.status==="finished",A=o.status!=="finished"?"…":w?"N":v?"V":"D",r=o.status!=="finished"||w?"#888":v?"#1A6B3C":"#c0392b";let u=s[o.mode]||o.mode;o.away_id===null&&!u.startsWith("IA")&&(u="IA");const z=o.home_id===c.id?o.away:o.home;let C;o.away_id===null?C=u:z?C=`${z.club_name||z.pseudo} (${z.pseudo})`:C="Adversaire";let H="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(H=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const B=new Date(o.created_at),j=B.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+B.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),U=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${C}${H}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${j}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${U}</span>
        <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${A}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(l||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${p.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${p.map(n).join("")}
        </div>`:""}

      ${d.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${d.map(n).join("")}
        </div>`:""}

      ${(l||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}An(Ln);const je={user:null,profile:null,page:"home",params:{}};function Tt(e,t="info",i=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},i))}function br(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function gi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ct(){if(!je.user)return;const{data:e}=await T.from("users").select("*").eq("id",je.user.id).single();e&&(je.profile=e)}function Ft(e,t={}){je.page=e,je.params=t,En()}async function En(){var a,c,l,s;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(d=>{d.classList.toggle("active",d.dataset.page===je.page)});const t=document.getElementById("nav-credits");t&&je.profile&&(t.textContent=`💰 ${(je.profile.credits||0).toLocaleString("fr")}`);const i={state:je,navigate:Ft,toast:Tt,openModal:br,closeModal:gi,refreshProfile:Ct};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',je.page){case"home":await Ii(e,i);break;case"collection":await Wn(e,i);break;case"decks":await di(e,i);break;case"boosters":await co(e,i);break;case"match":{const d=je.params&&je.params.matchMode||"vs_ai_easy";d==="random"?await vn(e,i):d==="friend"?await Ho(e,i,(a=je.params)==null?void 0:a.friendId,(c=je.params)==null?void 0:c.friendName):d==="mini-league"?await Ri(e,i,(l=je.params)==null?void 0:l.mlMatchId,(s=je.params)==null?void 0:s.leagueId):await Eo(e,i);break}case"market":await ur(e,i);break;case"rankings":await xr(e,i);break;case"matches":await yr(e,i);break;case"friends":await Fn(e,i);break;case"mini-league":await Ko(e,i);break;case"match-mini-league":{const d=je.params||{};await Ri(e,i,d.mlMatchId,d.leagueId);break}default:await Ii(e,i)}}function hr(){var a;const e=document.getElementById("app"),t=je.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(c=>{c.addEventListener("click",l=>{l.preventDefault(),Ft(c.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ft("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ft("boosters")),(a=document.getElementById("journal-btn"))==null||a.addEventListener("click",()=>vr())}async function vr(){const{data:e}=await T.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(a=>{const c=new Date(a.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",a=>{a.target===t&&t.remove()})}async function wr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&gi()}),document.getElementById("modal-close").addEventListener("click",gi);const{data:{session:e}}=await T.auth.getSession();if(!e){Vi(),zi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt});return}je.user=e.user,await Ct(),Vi();try{const{data:i}=await T.from("formation_links_overrides").select("formation, links"),a={};(i||[]).forEach(c=>{a[c.formation]=c.links}),zn(a)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!je.profile){In(document.getElementById("app"),{state:je,navigate:async()=>{await Ct(),si()},toast:Tt,refreshProfile:Ct});return}const t=Array.isArray(je.profile.pending_boosters)?je.profile.pending_boosters:[];if(!je.profile.onboarding_done&&t.length>0){wo(document.getElementById("app"),{state:je,navigate:()=>si(),toast:Tt,refreshProfile:Ct});return}si(),setTimeout(()=>cr(je.profile,Ft,Tt),800),T.auth.onAuthStateChange(async(i,a)=>{i==="SIGNED_OUT"&&(je.user=null,je.profile=null,document.getElementById("app").innerHTML="",zi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt}))})}function _r(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function oi(){const e=document.getElementById("app");e&&(e.style.height=_r()+"px")}window.addEventListener("resize",oi);window.addEventListener("orientationchange",()=>setTimeout(oi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",oi);function si(){const e=()=>{var i;(i=je.user)!=null&&i.id&&T.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",je.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",oi(),hr(),En()}function Vi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Tn(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}wr().catch(e=>{console.error("Échec du démarrage:",e),Tn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Tn("Le serveur met trop de temps à répondre.")},12e3);
