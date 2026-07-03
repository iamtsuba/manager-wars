import{s as E,F as xi,h as Pt,j as Yi,l as at,i as zn,k as Sn,b as Ln}from"./formation-links-DJC25wD7.js";const In="/manager-wars/";function Li(e,{navigate:t,toast:i}){let s="login";const c=()=>{var a,l,p,n,o,g;const d=s==="login";e.innerHTML=`
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
            flex:1;padding:16px;border:none;background:${d?"rgba(26,107,60,0.3)":"transparent"};
            color:${d?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${d?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${d?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:16px;border:none;background:${d?"transparent":"rgba(26,107,60,0.3)"};
            color:${d?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${d?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${d?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:24px">
          ${d?`
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{s="login",c()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{s="register",c()}),d?((p=document.getElementById("login-password"))==null||p.addEventListener("keydown",v=>{var y;v.key==="Enter"&&((y=document.getElementById("login-btn"))==null||y.click())}),(n=document.getElementById("login-btn"))==null||n.addEventListener("click",async()=>{const v=document.getElementById("login-email").value.trim(),y=document.getElementById("login-password").value,T=document.getElementById("login-error");if(T.textContent="",!v||!y){T.textContent="Remplissez tous les champs.";return}const r=document.getElementById("login-btn");r.textContent="⏳ Connexion…",r.disabled=!0;const{error:u}=await E.auth.signInWithPassword({email:v,password:y});if(r.textContent="⚽ Se connecter",r.disabled=!1,u){T.textContent=u.message.includes("Invalid")?"Email ou mot de passe incorrect.":u.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",v=>{var y;v.key==="Enter"&&((y=document.getElementById("reg-btn"))==null||y.click())}),(g=document.getElementById("reg-btn"))==null||g.addEventListener("click",async()=>{const v=document.getElementById("reg-email").value.trim(),y=document.getElementById("reg-password").value,T=document.getElementById("reg-confirm").value,r=document.getElementById("reg-error");if(r.textContent="",!v||!y||!T){r.textContent="Remplissez tous les champs.";return}if(y.length<6){r.textContent="Mot de passe trop court (min. 6 caractères).";return}if(y!==T){r.textContent="Les mots de passe ne correspondent pas.";return}const u=document.getElementById("reg-btn");u.textContent="⏳ Création…",u.disabled=!0;const{error:M}=await E.auth.signUp({email:v,password:y});if(u.textContent="🚀 Créer mon compte",u.disabled=!1,M){r.textContent=M.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),s="login",c(),setTimeout(()=>{const L=document.getElementById("login-email");L&&(L.value=v)},50)}))};c()}function Mn(e,{state:t,navigate:i,toast:s,refreshProfile:c}){let d="#1A6B3C",a="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${a};border-color:${d}">
          <span id="logo-initials" style="color:${d}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${d};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${d}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function l(){var T;const n=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),g=((T=document.getElementById("setup-club"))==null?void 0:T.value)||"MW",v=g.trim().split(" ").filter(Boolean),y=v.length>=2?(v[0][0]+v[1][0]).toUpperCase():g.slice(0,2).toUpperCase();n&&(n.style.background=a,n.style.borderColor=d),o&&(o.textContent=y,o.style.color=d)}document.getElementById("color1").addEventListener("input",n=>{d=n.target.value,document.getElementById("swatch1").style.background=d,l()}),document.getElementById("color2").addEventListener("input",n=>{a=n.target.value,document.getElementById("swatch2").style.background=a,l()});function p(n){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${n}`).classList.add("active"),document.getElementById("step-num").textContent=n,document.getElementById("progress-fill").style.width=`${Math.round(n/3*100)}%`,n===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",n.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:g}=await E.from("users").select("id").eq("pseudo",n).maybeSingle();if(g){o.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const n=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",n.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:g}=await E.from("users").select("id").eq("club_name",n).maybeSingle();if(g){o.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),g=document.getElementById("step3-error"),v=document.getElementById("step3-finish");g.textContent="",v.disabled=!0,v.textContent="Création en cours…";try{const{error:y}=await E.from("users").insert({id:t.user.id,pseudo:n,club_name:o,club_color1:d,club_color2:a,credits:1e4});if(y)throw y;await Cn(t.user.id),await c(),s(`Bienvenue ${n} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(y){g.textContent=y.message,v.disabled=!1,v.textContent="🚀 Créer mon profil !"}})}async function Cn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await E.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const jn="modulepreload",qn=function(e){return"/manager-wars/"+e},Ii={},yi=function(t,i,s){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));c=Promise.allSettled(i.map(p=>{if(p=qn(p),p in Ii)return;Ii[p]=!0;const n=p.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${o}`))return;const g=document.createElement("link");if(g.rel=n?"stylesheet":jn,n||(g.as="script"),g.crossOrigin="",g.href=p,l&&g.setAttribute("nonce",l),document.head.appendChild(g),n)return new Promise((v,y)=>{g.addEventListener("load",v),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${p}`)))})}))}function d(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return c.then(a=>{for(const l of a||[])l.status==="rejected"&&d(l.reason);return t().catch(d)})},Bt="#1A6B3C",Dt="#cc2222",Fn="#D4A017",Mi="#888";async function Bn(e,t){const{state:i,toast:s}=t;e.innerHTML=`
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
    </div>`,await Wi(i,s,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Gn(i,s)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ji(i,s,null,t))}async function Wi(e,t,i={}){const{navigate:s}=i,c=e.user.id,{data:d,error:a}=await E.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${c},addressee_id.eq.${c}`),{count:l}=await E.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",c).eq("status","pending"),p=document.getElementById("pending-badge");p&&(l>0?(p.style.display="flex",p.textContent=l):p.style.display="none");const n=document.getElementById("friends-list");if(!n)return;if(a){console.error("[Friends] Erreur:",a),n.innerHTML=`<div style="color:${Dt};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const o=(d||[]).map(y=>y.requester_id===c?y.addressee_id:y.requester_id);let g={};if(o.length){const{data:y}=await E.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(y||[]).forEach(T=>{g[T.id]=T})}const v=(d||[]).map(y=>({friendshipId:y.id,friend:g[y.requester_id===c?y.addressee_id:y.requester_id]||{pseudo:"?"}}));if(!v.length){n.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}n.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${v.length} ami${v.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${v.map(({friendshipId:y,friend:T})=>Dn(T,y)).join("")}
    </div>`,n.querySelectorAll("[data-stats]").forEach(y=>{y.addEventListener("click",()=>Pn(e,y.dataset.stats,y.dataset.friendName))}),n.querySelectorAll("[data-match]").forEach(y=>{y.addEventListener("click",()=>{const T=y.dataset.friendId,r=y.dataset.friendName;console.log("[Friends] clic match",{fid:T,fname:r,hasNavigate:typeof s}),typeof s=="function"?s("match",{matchMode:"friend",friendId:T,friendName:r}):t("Erreur navigation","error")})})}function Dn(e,t){const i=e.club_name||e.pseudo||"?",s=e.pseudo||"",c=(s||i).slice(0,2).toUpperCase(),d=e.club_color2||Bt,a=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,p=l&&Date.now()-l.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${d};border:2.5px solid ${a};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${a}">
          ${c}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${p?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${s}</div>
        <div style="font-size:11px;color:${p?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${p?"🟢 En ligne":"🔴 Hors ligne"}</div>
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
    ${hi()}`,document.body.appendChild(i);const s=i.querySelector("#friend-pseudo-input"),c=i.querySelector("#add-friend-error"),d=()=>i.remove();s.focus(),i.querySelector("#add-cancel").addEventListener("click",d),i.addEventListener("click",a=>{a.target===i&&d()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=s.value.trim();if(!a){c.textContent="Entre un pseudo";return}c.textContent="";const{data:l}=await E.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!l){c.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await E.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(p){const o=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=o;return}const{error:n}=await E.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(n){c.textContent="Erreur : "+n.message;return}d(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function Ji(e,t,i=null,s={}){const c=e.user.id,{data:d}=await E.from("friendships").select("id, requester_id").eq("addressee_id",c).eq("status","pending").order("created_at",{ascending:!1}),a=(d||[]).map(v=>v.requester_id);let l={};if(a.length){const{data:v}=await E.from("users").select("id, pseudo, club_name").in("id",a);(v||[]).forEach(y=>{l[y.id]=y})}const p=(d||[]).map(v=>({...v,requester:l[v.requester_id]||{pseudo:"?"}})),n=bi(),o=p||[];n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(v=>{var y,T,r;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((y=v.requester)==null?void 0:y.club_name)||((T=v.requester)==null?void 0:T.pseudo)||"?"}
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
    ${hi()}`,document.body.appendChild(n);const g=()=>n.remove();n.querySelector("#pending-close").addEventListener("click",g),n.addEventListener("click",v=>{v.target===n&&g()}),n.querySelectorAll("[data-accept]").forEach(v=>{v.addEventListener("click",async()=>{const{error:y}=await E.from("friendships").update({status:"accepted"}).eq("id",v.dataset.accept);if(y){t("Erreur : "+y.message,"error");return}v.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Wi(e,t,s),i&&i()})}),n.querySelectorAll("[data-decline]").forEach(v=>{v.addEventListener("click",async()=>{await E.from("friendships").delete().eq("id",v.dataset.decline),v.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Pn(e,t,i){const s=e.user.id,[c,d]=[s,t].sort(),a=s===c,{data:l}=await E.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",d).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",n=l||{},o=a?n.wins_p1||0:n.wins_p2||0,g=a?n.wins_p2||0:n.wins_p1||0,v=n.draws||0,y=a?n.goals_p1||0:n.goals_p2||0,T=a?n.goals_p2||0:n.goals_p1||0,r=a?n.gc_used_p1||0:n.gc_used_p2||0,u=a?n.gc_used_p2||0:n.gc_used_p1||0,M=n.matches_total||0,L=(K,C,q,D=Bt,X=Dt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${D}">${C}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${K}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${X}">${q}</div>
    </div>`,N=bi();N.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${M===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${L("Victoires",o,g)}
        ${L("Nuls",v,v,Mi,Mi)}
        ${L("Défaites",g,o)}
        ${L("Buts marqués",y,T)}
        ${L("Buts encaissés",T,y,Dt,Bt)}
        ${L("GC utilisés ⚡",r,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${M} match${M>1?"s":""} joué${M>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${hi()}`,document.body.appendChild(N),N.querySelector("#stats-close").addEventListener("click",()=>N.remove()),N.addEventListener("click",K=>{K.target===N&&N.remove()})}function bi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function hi(){return`
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
    </style>`}async function Xi({player1Id:e,player2Id:t,score1:i,score2:s,gc1:c,gc2:d}){const[a,l]=[e,t].sort(),p=e!==a,n=p?s:i,o=p?i:s,g=p?d:c,v=p?c:d,y=n>o?1:0,T=o>n?1:0,r=n===o?1:0,{data:u}=await E.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",l).single();u?await E.from("friend_match_stats").update({wins_p1:u.wins_p1+y,wins_p2:u.wins_p2+T,draws:u.draws+r,goals_p1:u.goals_p1+n,goals_p2:u.goals_p2+o,gc_used_p1:u.gc_used_p1+g,gc_used_p2:u.gc_used_p2+v,matches_total:u.matches_total+1}).eq("player1_id",a).eq("player2_id",l):await E.from("friend_match_stats").insert({player1_id:a,player2_id:l,wins_p1:y,wins_p2:T,draws:r,goals_p1:n,goals_p2:o,gc_used_p1:g,gc_used_p2:v,matches_total:1})}const Nn="2026.07.03-1730";async function Ci(e,{state:t,navigate:i,toast:s}){var d,a;const c=t.profile;c&&(e.innerHTML=`
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
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),i(l.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const p=l.dataset.action;if(p==="match-ai"){Un(i);return}if(p==="match-random"){i("match",{matchMode:"random"});return}if(p==="match-friend"){i("friends");return}if(p==="mini-league"){i("mini-league");return}if(p==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}s("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var K,C,q,D,X,se;const l=((K=window.visualViewport)==null?void 0:K.height)||window.innerHeight,p=((C=document.querySelector(".top-nav"))==null?void 0:C.offsetHeight)||56,n=((q=document.querySelector(".bottom-nav"))==null?void 0:q.offsetHeight)||60,o=((D=e.querySelector(".hero-compact"))==null?void 0:D.offsetHeight)||52,g=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const v=((se=(X=e.querySelector("#logout-btn"))==null?void 0:X.closest("div"))==null?void 0:se.offsetHeight)||44,y=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((oe,P)=>{var Y;return oe+(((Y=document.getElementById(P))==null?void 0:Y.offsetHeight)||0)},0),T=14*5,r=l-p-n-o-v-y-T,u=Math.max(80,Math.round(r*.28)),M=Math.max(160,Math.round(r*.72)),L=Math.floor((M-10)/2);g&&(g.style.minHeight=g.style.maxHeight=u+"px"),e.querySelectorAll(".play-grid .play-card").forEach(oe=>{oe.style.minHeight=oe.style.height=L+"px"});const N=Math.round(L*.55);e.querySelectorAll(".play-card .play-icon").forEach(oe=>{oe.style.height=N+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),window.location.reload()}),Qi(t,s),Hn(t,s,i),Zi(t,s,i))}async function Zi(e,t,i){const s=document.getElementById("ongoing-match-banner");if(!s)return;const c=e.profile.id,{data:d}=await E.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${c},away_id.eq.${c}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){s.innerHTML="";return}const a=d.map(p=>p.home_id===c?p.away_id:p.home_id).filter(Boolean);let l={};if(a.length){const{data:p}=await E.from("users").select("id, pseudo, club_name").in("id",a);(p||[]).forEach(n=>{l[n.id]=n.club_name||n.pseudo})}s.innerHTML=d.map(p=>{const n=p.home_id===c?p.away_id:p.home_id,o=l[n]||"Adversaire",g=p.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${g?"🏆 Mini League":p.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${p.id}" data-mini="${g?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${p.id}" data-opp="${n}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),s.querySelectorAll("[data-resume]").forEach(p=>{p.addEventListener("click",async()=>{const n=document.getElementById("page-content")||document.getElementById("app");if(p.dataset.mini==="1"){const{data:o}=await E.from("mini_league_matches").select("id, league_id").eq("match_id",p.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await yi(async()=>{const{resumePvpMatch:g}=await Promise.resolve().then(()=>Uo);return{resumePvpMatch:g}},void 0);o(n,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},p.dataset.resume)}})}),s.querySelectorAll("[data-abandon]").forEach(p=>{p.addEventListener("click",()=>{On(async()=>{await Rn(p.dataset.abandon,p.dataset.opp,c),t("Match abandonné (défaite 3-0)","info"),Zi(e,t,i)})})})}async function Rn(e,t,i){const{data:s}=await E.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!s)return;const c=s.home_id===i,d=c?0:3,a=c?3:0,l=s.game_state||{};l.p1Score=d,l.p2Score=a,l.phase="finished",l.forfeit=!0,await E.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:a,game_state:l}).eq("id",e)}function On(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Hn(e,t,i){var l,p,n,o;const s=document.getElementById("match-invite-banner");if(!s)return;const{data:c}=await E.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){s.innerHTML="";return}const d=((l=c.inviter)==null?void 0:l.club_name)||((p=c.inviter)==null?void 0:p.pseudo)||"?",a=c.inviter_id;s.innerHTML=`
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
        <div style="font-size:13px;font-weight:900">${d} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Accepter la partie ?</div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
        <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
      </div>
    </div>`,(n=document.getElementById("match-inv-accept"))==null||n.addEventListener("click",()=>{s.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:d})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await E.from("friend_match_invites").update({status:"declined"}).eq("id",c.id),s.innerHTML="",t("Invitation refusée","info")})}async function Qi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:s,error:c}=await E.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(s!=null&&s.length)){i.innerHTML="";return}const d=s.length,a=s.slice(0,2).map(p=>{var n;return((n=p.requester)==null?void 0:n.pseudo)||"?"}).join(", "),l=d>2?` +${d-2}`:"";i.innerHTML=`
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
          ${d} demande${d>1?"s":""} d'ami${d>1?"s":""} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${a}${l}
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
  `,document.body.appendChild(i);const s=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",s),i.addEventListener("click",c=>{c.target===i&&s()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{s(),e("match",{matchMode:c.dataset.mode})})})}const Ke={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ze(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const ji=["ATT","MIL","DEF","GK"];function en(e){let t=0;const i=e.length;for(let s=0;s<i;s++)for(let c=s+1;c<i;c++){const d=e[s],a=e[c];if(!d||!a)continue;const l=d._col!=null&&a._col!=null&&d._col===a._col,p=d._col!=null&&a._col!=null&&Math.abs(d._col-a._col)===1,n=ji.indexOf(d._line||d.job),o=ji.indexOf(a._line||a.job),g=Math.abs(n-o)===1;if(!((d._line||d.job)===(a._line||a.job)&&p||l&&g))continue;const T=d.country_code&&a.country_code&&d.country_code===a.country_code,r=d.club_id&&a.club_id&&d.club_id===a.club_id;T&&r?t+=2:(T||r)&&(t+=1)}return t}function Nt(e,t={}){const i=e.reduce((d,a)=>{const l=a._line||a.job;return d+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)},0),s=en(e);let c=i+s;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:s,total:Math.max(0,c)}}function Rt(e,t={}){const i=e.reduce((d,a)=>{const l=a._line||a.job;let p=0;return l==="GK"?p=Number(a.note_g)||0:l==="MIL"?p=Number(a.note_m)||0:p=Number(a.note_d)||0,d+p+(a.boost||0)},0),s=en(e);let c=i+s;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:s,total:Math.max(0,c)}}function Ot(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function tn(e,t,i="easy"){const s=e.filter(a=>!a.used);if(!s.length)return[];const c=[...s].sort((a,l)=>{const p=t==="attack"?ze(a,"ATT"):a._line==="GK"?ze(a,"GK"):ze(a,"DEF");return(t==="attack"?ze(l,"ATT"):l._line==="GK"?ze(l,"GK"):ze(l,"DEF"))-p});let d=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(d,c.length,3))}function Vn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const nn={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function vi(e,t){const i=e.player;if(!i)return 0;const s=i.rarity;if(s!=="pepite"&&s!=="papyte")return Number(i[t])||0;const c=wi(i),d=Number(i[t])||0;if(d<=0)return 0;const a=i.note_min??1,l=i.note_max??10,n=(e.current_note??c)-c;return Math.min(l,Math.max(a,d+n))}function wi(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function _i(e,t){!e||!t||await Promise.all([di(e,"win"),di(t,"loss")])}async function di(e,t){const{data:i}=await E.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const s=i.filter(c=>{var d,a;return((d=c.player)==null?void 0:d.rarity)==="pepite"||((a=c.player)==null?void 0:a.rarity)==="papyte"});s.length&&await Promise.all(s.map(c=>{const d=nn[c.player.rarity],a=t==="win"?d.win:d.loss,l=c.player.note_min??1,p=c.player.note_max??10,n=wi(c.player),o=c.current_note??n,g=Math.min(p,Math.max(l,o+a));return E.from("cards").update({current_note:g}).eq("id",c.id)}))}async function Kn(e,t){return di(e,t)}const on=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:nn,applyOwnEvolution:Kn,currentSecondaryNote:vi,getBaseMainNote:wi,updateEvolutiveCards:_i},Symbol.toStringTag,{value:"Module"})),rn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},jt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ut=["GK","DEF","MIL","ATT"],Yn=["Tous","GK","DEF","MIL","ATT"],Wn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function qi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Jn(e){return e.length?e.reduce((t,i)=>qi(i)>qi(t)?i:t,e[0]):e[0]}function an(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const $i={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function sn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Gt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function ri(e,t=""){var v,y;const i=e.player;if(!i)return"";const s=i.job||"ATT",c=jt[s],d=rn[i.rarity]||"#ccc",a=i.rarity==="pepite"||i.rarity==="papyte",l=a&&e.current_note!=null?e.current_note:Gt(i,s),p=i.job2?a?vi(e,an(i.job2)):Gt(i,i.job2):null,n=i.job2?jt[i.job2]:null,o=sn(i),g=$i[i.country_code]||i.country_code||"";return`
  <div style="
    width:140px;border-radius:12px;padding:6px;
    background:${d};cursor:pointer;flex-shrink:0;position:relative
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
            fill="white" font-family="Arial Black,Arial">${l}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${g}</div>
        ${(v=i.clubs)!=null&&v.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((y=i.clubs)==null?void 0:y.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Fi(e){const t=e.job||"ATT",i=Gt(e,t),s=$i[e.country_code]||e.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#999">${s}</div>
      </div>
    </div>
  </div>`}async function Xn(e,t){const{state:i,navigate:s,toast:c,openModal:d,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:p}=await E.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),n=(l||[]).filter(R=>R.card_type==="player"&&R.player),o=(l||[]).filter(R=>R.card_type==="game_changer"),g=(l||[]).filter(R=>R.card_type==="formation"),v=(l||[]).filter(R=>R.card_type==="stadium"),{data:y}=await E.from("gc_definitions").select("name,gc_type,color,effect,image_url"),T={};(y||[]).forEach(R=>{T[R.name]=R});const{data:r}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(r||[]).forEach(R=>{u[R.id]=R}),v.forEach(R=>{R.stadium_def&&(u[R.stadium_id]=R.stadium_def)});const M=Object.keys(xi),L=Object.keys(Ke),N={};n.forEach(R=>{const Z=R.player.id;N[Z]=(N[Z]||0)+1}),new Set(Object.keys(N).map(R=>String(R)));const K=new Set(g.map(R=>R.formation)),C=new Set(o.map(R=>R.gc_type));let q="player",D="Tous",X="",se=!1;function oe(){return[...n].sort((R,Z)=>{const ge=Ut.indexOf(R.player.job),me=Ut.indexOf(Z.player.job);return ge!==me?ge-me:(R.player.surname_encoded||"").localeCompare(Z.player.surname_encoded||"")})}function P(){return[...p||[]].sort((R,Z)=>{const ge=Ut.indexOf(R.job),me=Ut.indexOf(Z.job);return ge!==me?ge-me:(R.surname_encoded||"").localeCompare(Z.surname_encoded||"")})}function Y(){return oe().filter(R=>{const Z=R.player,ge=D==="Tous"||Z.job===D,me=!X||`${Z.firstname} ${Z.surname_encoded}`.toLowerCase().includes(X);return ge&&me})}function U(){return P().filter(R=>{const Z=D==="Tous"||R.job===D,ge=!X||`${R.firstname} ${R.surname_encoded}`.toLowerCase().includes(X);return Z&&ge})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${q==="player"?"var(--green)":"transparent"};
        color:${q==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${q==="formation"?"var(--green)":"transparent"};
        color:${q==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${g.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${q==="gc"?"var(--green)":"transparent"};
        color:${q==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${q==="stadium"?"#E87722":"transparent"};
        color:${q==="stadium"?"#E87722":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${v.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function G(){const R=document.getElementById("col-filters");R&&(q==="player"?(R.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${X}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Yn.map(Z=>`
            <button class="filter-btn" data-job="${Z}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${Z===D?"var(--green)":"var(--gray-200)"};
                background:${Z===D?"var(--green)":"#fff"};
                color:${Z===D?"#fff":"var(--gray-600)"}">
              ${Z}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${se?"var(--yellow)":"var(--gray-200)"};
              background:${se?"var(--yellow)":"#fff"};
              color:${se?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${se?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",Z=>{X=Z.target.value.toLowerCase(),ie()}),e.querySelectorAll(".filter-btn").forEach(Z=>{Z.addEventListener("click",()=>{D=Z.dataset.job,G(),ie()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{se=!se,G(),ie()})):(R.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${se?"var(--yellow)":"var(--gray-200)"};
              background:${se?"var(--yellow)":"#fff"};
              color:${se?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${se?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{se=!se,G(),ie()})))}function ie(){const R=document.getElementById("col-grid");R&&(q==="player"?$e(R):q==="formation"?Ae(R):q==="stadium"?re(R):te(R))}function pe(R,Z,ge,me,xe){const ae=document.getElementById("col-grid"),ue=document.getElementById("col-big");if(!ae||!ue)return;var Se=0;function qe(){const Be=window.innerWidth>=768,Ce=document.getElementById("col-big"),De=document.getElementById("col-grid");Be&&Ce&&(Ce.style.minHeight="420px",Ce.style.flex="1 1 auto"),Be&&De&&(De.style.height=Math.round(310*.76+16)+"px",De.style.flexShrink="0",De.style.overflowX="auto",De.style.overflowY="hidden",De.style.alignItems="center",De.style.padding="8px 16px"),ue.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+Z(R[Se])+"</div>";var I=ue.querySelector("[data-card-id],[data-form-id],[data-gc-id]");I&&I.addEventListener("click",function(){me(R[Se])}),requestAnimationFrame(function(){var j=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!j||!ue)){var w=ue.clientHeight-8,k=ue.clientWidth-24,f=j.offsetHeight,m=j.offsetWidth;if(f>0&&m>0&&w>40){var x=Be?2.2:1,b=Math.min(w/f,k/m,x);j.style.transform="scale("+b.toFixed(3)+")",j.style.transformOrigin="top center"}}}),ae.innerHTML=R.map(function(j,w){var k=w===Se,f="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(k?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+w+'" style="'+f+'">'+ge(j,k)+"</div>"}).join(""),ae.querySelectorAll(".col-mini-item").forEach(function(j){j.addEventListener("click",function(){Se=Number(j.dataset.idx),qe(),j.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}qe()}function be(R){var Z=window.innerWidth>=768?.76:.54,ge;if(!R||R._fake){var me=R?R.player:null;if(!me)return"";ge=Fi(me)}else ge=ri(R,"");return'<div style="display:inline-block;zoom:'+Z+';pointer-events:none;line-height:0">'+ge+"</div>"}function Te(R,Z,ge){Z=Z||100,ge=ge||140;var me=Pt[R]||{},xe={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ae=Math.max(3,Math.round(Z*.06)),ue=Object.entries(me).map(function(qe){var Be=qe[0],Ce=qe[1],De=Be.replace(/\d+$/,""),I=xe[De]||"#888",j=Math.round(Ce.x*Z),w=Math.round(Ce.y*ge);return'<circle cx="'+j+'" cy="'+w+'" r="'+ae+'" fill="'+I+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Se=Math.max(1,Math.round(Z/50));return'<svg viewBox="0 0 '+Z+" "+ge+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+Z+'" height="'+ge+'" fill="#1A6B3C"/><rect x="'+Math.round(Z*.2)+'" y="'+Math.round(ge*.02)+'" width="'+Math.round(Z*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Se+'"/><line x1="0" y1="'+Math.round(ge*.5)+'" x2="'+Z+'" y2="'+Math.round(ge*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Se+'"/><ellipse cx="'+Math.round(Z*.5)+'" cy="'+Math.round(ge*.5)+'" rx="'+Math.round(Z*.18)+'" ry="'+Math.round(ge*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Se+'"/><rect x="'+Math.round(Z*.2)+'" y="'+Math.round(ge*.82)+'" width="'+Math.round(Z*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Se+'"/>'+ue+"</svg>"}function Ee(R,Z,ge){var me=ge>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ge+"</div>":"",xe=Z?'data-form-id="'+Z.id+'"':"",ae=R.length>7?14:R.length>5?16:19,ue=!!Z;return"<div "+xe+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ue?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ue?"":"filter:grayscale(1);opacity:0.5")+'">'+me+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ue?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ae+"px;font-weight:900;color:"+(ue?"#1A6B3C":"#aaa")+';line-height:1">'+R+'</div></div><div style="flex:1;overflow:hidden;background:'+(ue?"#1A6B3C":"#ccc")+'">'+Te(R,140,220)+"</div></div>"}function he(R,Z){var ge=window.innerWidth>=768?.76:.54,me=140,xe=305,ae=Math.round(xe*.22),ue=xe-ae,Se=R.length>7?10:13,qe=Te(R,me,ue),Be=Z?"1.5px solid #2a7a40":"1px solid #ddd",Ce=Z?"":"filter:grayscale(1);opacity:0.45;",De=Z?"#1A6B3C":"#bbb",I="#fff";return'<div style="display:inline-block;zoom:'+ge+';line-height:0;pointer-events:none"><div style="width:'+me+"px;height:"+xe+"px;border-radius:6px;border:"+Be+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Ce+'"><div style="height:'+ae+"px;background:"+De+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Se+"px;font-weight:900;color:"+I+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(me-4)+'px">'+R+'</span></div><div style="height:'+ue+'px;overflow:hidden;flex-shrink:0">'+qe+"</div></div></div>"}function $e(R){if(se){const Z=U();if(!Z.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ge=Z.map(me=>n.find(xe=>xe.player.id===me.id)||{_fake:!0,player:me,id:"fake-"+me.id});pe(ge,me=>me._fake?Fi(me.player):ri(me,""),me=>me._fake?be({player:me.player,id:"x",_fake:!0}):be(me),me=>{me._fake||Bi(me,n,N,t)})}else{const Z=Y();if(!Z.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ge={};Z.forEach(xe=>{const ae=xe.player.id;ge[ae]||(ge[ae]=[]),ge[ae].push(xe)});const me=Object.values(ge).map(xe=>Jn(xe));pe(me,xe=>{const ae=N[xe.player.id]||1,ue=ae>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ae}</div>`:"",qe=n.filter(Be=>Be.player.id===xe.player.id&&Be.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return ri(xe,ue+qe)},xe=>be(xe),xe=>Bi(xe,n,N,t))}}function Ae(R){const Z=se?M:[...K];if(!Z.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ge=Z.map(me=>({formation:me,card:g.find(xe=>xe.formation===me)||null,owned:K.has(me)}));pe(ge,({formation:me,card:xe,owned:ae})=>Ee(me,ae?xe:null,ae?g.filter(ue=>ue.formation===me).length:0),({formation:me,owned:xe})=>he(me,xe),({card:me,owned:xe})=>{xe&&me&&Qn(me,g,t,d)})}function te(R){const Z=Object.keys(T),ge=se?Z.length?Z:L:[...C];if(!ge.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const me=ge.map(xe=>({type:xe,gc:Ke[xe]||{icon:"⚡",desc:""},def:T[xe]||null,owned:C.has(xe),card:o.find(ae=>ae.gc_type===xe)||null}));pe(me,({type:xe,gc:ae,def:ue,owned:Se,card:qe})=>{const Be=Se?o.filter(x=>x.gc_type===xe).length:0,Ce=Be>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Be}</div>`:"",De=(ue==null?void 0:ue.gc_type)==="ultra_game_changer",I={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},j={purple:"#b06ce0",light_blue:"#00d4ef"},w=I[ue==null?void 0:ue.color]||I.purple,k=j[ue==null?void 0:ue.color]||j.purple,f=(ue==null?void 0:ue.effect)||ae.desc||"",m=ue!=null&&ue.image_url?`/manager-wars/icons/${ue.image_url}`:null;return Se&&qe?`<div data-gc-id="${qe.id}" data-gc-type="${xe}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${k}66;cursor:pointer">
          ${Ce}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${xe.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${xe}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${De?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${m?`<img src="${m}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ae.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${f.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${xe}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ae.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:xe,gc:ae,def:ue,owned:Se})=>{const qe=window.innerWidth>=768?.76:.54,Be={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ce={purple:"#9b59b6",light_blue:"#00bcd4"},De=Be[ue==null?void 0:ue.color]||Be.purple,I=Ce[ue==null?void 0:ue.color]||Ce.purple,j=ue!=null&&ue.image_url?`/manager-wars/icons/${ue.image_url}`:null;return Se?`<div style="display:inline-block;zoom:${qe};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${De};border:1px solid ${I};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${xe}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${j?`<img src="${j}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${ae.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((ue==null?void 0:ue.effect)||ae.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${qe};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${ae.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${xe}</span></div></div>`},({type:xe,owned:ae,def:ue})=>{ae&&Zn(xe,ue,d)})}function re(R){const Z="#E87722",ge="/manager-wars/";if(!v.length){R.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const me={};v.forEach(ae=>{const ue=ae.stadium_id||"?";(me[ue]=me[ue]||[]).push(ae)});const xe=Object.entries(me).map(([ae,ue])=>({sid:ae,def:u[ae]||null,count:ue.length,card:ue[0]}));pe(xe,({def:ae,count:ue})=>{var I,j;const Se=(ae==null?void 0:ae.name)||"?",qe=((I=ae==null?void 0:ae.club)==null?void 0:I.encoded_name)||(ae==null?void 0:ae.country_code)||"—",Be=ae!=null&&ae.image_url?"${BASE2}icons/${def.image_url}":((j=ae==null?void 0:ae.club)==null?void 0:j.logo_url)||(ae!=null&&ae.country_code?"https://flagcdn.com/w80/${def.country_code.toLowerCase()}.png":null),Ce=Be?`<img src="${Be}" style="width:90px;height:90px;object-fit:contain">`:'<div style="font-size:56px">🏟️</div>',De=ue>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ue}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${Z},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Z}66">
          ${De}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Se}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${Ce}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${qe}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:ae,count:ue})=>{var I,j;const Se=window.innerWidth>=768?.76:.54,qe=(ae==null?void 0:ae.name)||"?",Be=((I=ae==null?void 0:ae.club)==null?void 0:I.encoded_name)||(ae==null?void 0:ae.country_code)||"—",Ce=ae!=null&&ae.image_url?`${ge}icons/${ae.image_url}`:((j=ae==null?void 0:ae.club)==null?void 0:j.logo_url)||(ae!=null&&ae.country_code?`https://flagcdn.com/w80/${ae.country_code.toLowerCase()}.png`:null),De=Ce?`<img src="${Ce}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${Se};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${Z},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${qe}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${De}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${Be}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(R=>{R.addEventListener("click",()=>{q=R.dataset.tab,D="Tous",X="",se=!1,e.querySelectorAll(".col-tab-btn").forEach(Z=>{const ge=Z.dataset.tab===q;Z.style.borderBottomColor=ge?"var(--green)":"transparent",Z.style.color=ge?"var(--green)":"var(--gray-600)"}),G(),ie()})}),G(),ie()}function Zn(e,t,i){const s=Ke[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[t==null?void 0:t.color]||d.purple,p=a[t==null?void 0:t.color]||a.purple,n=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||s.desc,g=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${n}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${g?`<img src="${g}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${s.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${o}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Vt=1e3;function Qn(e,t,i,s){var T,r,u;const{state:c,toast:d,closeModal:a,navigate:l,refreshProfile:p}=i,n=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function g(){const M=Pt[n]||{},L=xi[n]||[],N=290,K=360,C=20;function q(X){const se=M[X];return se?{x:se.x*N,y:se.y*K}:null}let D=`<svg width="${N}" height="${K}" viewBox="0 0 ${N} ${K}" xmlns="http://www.w3.org/2000/svg">`;for(const[X,se]of L){const oe=q(X),P=q(se);!oe||!P||(D+=`<line x1="${oe.x}" y1="${oe.y}" x2="${P.x}" y2="${P.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const X of Object.keys(M)){const se=q(X);if(!se)continue;const oe=X.replace(/\d+/,""),P=o[oe]||"#555";D+=`<circle cx="${se.x}" cy="${se.y}" r="${C}" fill="${P}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,D+=`<text x="${se.x}" y="${se.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${oe}</text>`}return D+="</svg>",D}const v=t.filter(M=>M.formation===n);v.length;const y=!e.is_for_sale;s(`Formation ${n}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${g()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${y?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(T=document.getElementById("direct-sell-form-btn"))==null||T.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${n} pour ${Vt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const M=v.find(N=>!N.is_for_sale)||v[0];if(!M){d("Aucune carte à vendre","error");return}await E.from("market_listings").delete().eq("card_id",M.id),await E.from("transfer_history").delete().eq("card_id",M.id);const{error:L}=await E.from("cards").delete().eq("id",M.id);if(L){d(L.message,"error");return}await E.from("users").update({credits:(c.profile.credits||0)+Vt}).eq("id",c.profile.id),await p(),d(`+${Vt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(r=document.getElementById("market-sell-form-btn"))==null||r.addEventListener("click",async()=>{const M=parseInt(document.getElementById("sell-price-form").value);if(!M||M<1){d("Prix invalide","error");return}await E.from("cards").update({is_for_sale:!0,sale_price:M}).eq("id",e.id),await E.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:M}),d("Carte mise en vente sur le marché !","success"),a(),l("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),a(),l("collection")})}async function Bi(e,t,i,s){var pe,be,Te,Ee,he,$e,Ae;const{state:c,toast:d,openModal:a,closeModal:l,navigate:p,refreshProfile:n}=s,o=e.player,g=t.filter(te=>te.player.id===o.id),v=g.length,y=Math.max(Number(o.note_g)||0,Number(o.note_d)||0,Number(o.note_m)||0,Number(o.note_a)||0),T=o.rarity||"normal",{data:r}=await E.from("sell_price_configs").select("*").eq("rarity",T).lte("note_min",y).gte("note_max",y).order("note_min",{ascending:!1}).limit(1),u=((pe=r==null?void 0:r[0])==null?void 0:pe.price)??Wn[T]??1e3,M=o.rarity!=="legende",L=sn(o),N=(o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:Gt(o,o.job),K=o.rarity==="pepite"||o.rarity==="papyte",C=o.job2?K?vi(e,an(o.job2)):Gt(o,o.job2):null,q=jt[o.job]||"#1A6B3C",D=o.job2?jt[o.job2]:null,X=rn[o.rarity]||"#ccc",se=$i[o.country_code]||o.country_code||"",oe=g.map(te=>te.id);let P={};if(oe.length){const{data:te}=await E.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",oe).order("transferred_at",{ascending:!0});(te||[]).forEach(re=>{P[re.card_id]||(P[re.card_id]=[]),P[re.card_id].push(re)})}const Y=te=>{const re=te.transferred_at?new Date(te.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",R=te.source==="booster"?"Booster":te.price?te.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${te.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${te.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${te.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${R}</div>
        <div style="font-size:11px;color:var(--gray-600)">${re}</div>
      </div>
    </div>`},U=oe.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${v>1?`(${v})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${g.map((te,re)=>{const R=P[te.id]||[],Z=te.is_for_sale,ge=R.length?R[R.length-1]:null,xe=(o.rarity==="pepite"||o.rarity==="papyte")&&te.current_note!=null?` (☆${te.current_note})`:"";return`
            <div data-card-id="${te.id}" data-card-idx="${re}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${Z?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${te.id}" ${Z?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${re+1}${xe}${Z?" 🏷️ En vente":""}</div>
                  ${ge?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${ge.club_name} · ${ge.source==="booster"?"Booster":ge.price?ge.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${re}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${R.length?`${R.length} club${R.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${re}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${R.map(Y).join("")}
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
        ${M?`
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
    </div>`:"";a(`${o.firstname} ${o.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${X};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${o.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(o.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${q}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${q}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${N}</text>
            </svg>
            ${C!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${D}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${C}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${L?`<img src="${L}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${se}</div>
            ${(be=o.clubs)!=null&&be.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Te=o.clubs)==null?void 0:Te.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${X}">${o.rarity.toUpperCase()}</div>
          ${o.rarity==="pepite"||o.rarity==="papyte"?`
          <div style="margin-top:6px;background:${X}18;border-left:3px solid ${X};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${X};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([te,re])=>{const R=jt[te],Z=Number(re)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${R}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${Z}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${te}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${v}</div>
        </div>
      </div>
    </div>
    ${U}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(Ee=document.getElementById("close-detail"))==null||Ee.addEventListener("click",l);let G=new Set;const ie=()=>{const te=G.size,re=document.getElementById("sell-action-panel");re&&(re.style.display=te>0?"block":"none",document.getElementById("sell-selected-count").textContent=te,document.getElementById("sell-direct-total").textContent=(te*u).toLocaleString("fr")+" cr.")};document.querySelectorAll(".expl-check").forEach(te=>{te.addEventListener("change",()=>{const re=te.dataset.id;te.checked?G.add(re):G.delete(re);const R=te.closest(".exemplaire-row");R&&(R.style.borderColor=te.checked?"#1A6B3C":"#eee"),ie()})}),document.querySelectorAll(".exemplaire-row").forEach(te=>{te.addEventListener("click",re=>{if(re.target.closest("button")||re.target.tagName==="INPUT")return;const R=te.querySelector(".expl-check");R&&!R.disabled&&(R.checked=!R.checked,R.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(te=>{te.addEventListener("click",re=>{re.stopPropagation();const R=document.querySelector(`.expl-hist[data-hist="${te.dataset.idx}"]`);R&&(R.style.display=R.style.display==="none"?"flex":"none")})}),(he=document.getElementById("direct-sell-btn"))==null||he.addEventListener("click",async()=>{const te=[...G];if(!te.length)return;const re=te.length*u;if(!confirm(`Vendre ${te.length} carte${te.length>1?"s":""} ${o.surname_encoded} pour ${re.toLocaleString("fr")} crédits ? Action irréversible.`))return;await E.from("market_listings").delete().in("card_id",te),await E.from("transfer_history").delete().in("card_id",te);const{error:R}=await E.from("cards").delete().in("id",te);if(R){d(R.message,"error");return}await E.from("users").update({credits:(c.profile.credits||0)+re}).eq("id",c.profile.id),await n();const Z=document.getElementById("nav-credits");Z&&(Z.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),d(`+${re.toLocaleString("fr")} crédits ! ${te.length} carte${te.length>1?"s":""} vendue${te.length>1?"s":""}.`,"success"),l(),p("collection")}),($e=document.getElementById("market-sell-btn"))==null||$e.addEventListener("click",async()=>{var me;const te=[...G];if(!te.length){d("Sélectionne au moins un exemplaire","warning");return}const re=parseInt((me=document.getElementById("sell-market-price"))==null?void 0:me.value);if(!re||re<1){d("Prix invalide","error");return}const{error:R}=await E.from("cards").update({is_for_sale:!0,sale_price:re}).in("id",te);if(R){d(R.message,"error");return}const Z=te.map(xe=>({seller_id:c.profile.id,card_id:xe,price:re,status:"active"})),{error:ge}=await E.from("market_listings").insert(Z);ge&&console.warn("[Market] insert listings:",ge.message),d(`${te.length} carte${te.length>1?"s":""} mise${te.length>1?"s":""} en vente à ${re.toLocaleString("fr")} cr. chacune !`,"success"),l(),p("collection")}),(Ae=document.getElementById("cancel-sell-btn"))==null||Ae.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),l(),p("collection")})}const Jt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ei(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function dn(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function ln(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function eo(e,t=44,i=58){var y;const s=e?ei(e):null,c=e?ln(e):null,d=dn(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=vt[a]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,o=Math.round(i*.19),g=Math.round(i*.25),v=i-o-g;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${p};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${s?`<img src="${s}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${v}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">🌍</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${n}</span>
      ${c?`<img src="${c}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:(y=e==null?void 0:e.clubs)!=null&&y.encoded_name?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function li(e,t){const{state:i,navigate:s,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(d==null?void 0:d.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(d==null?void 0:d.length)>0?d.map(a=>`
          <div class="card-panel" data-open-deck="${a.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${a.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${a.id}" data-name="${a.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${a.id}" data-name="${a.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!a)return;const{data:l,error:p}=await E.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),Di(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Di(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:p}=await E.from("decks").update({name:l}).eq("id",a.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),li(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await E.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await E.from("decks").delete().eq("id",a.dataset.delete);if(l){c(l.message,"error");return}c("Deck supprimé.","success"),li(e,t)})})}async function Di(e,t,i){const{state:s,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select("*").eq("id",e).single(),{data:a}=await E.from("cards").select(`id, card_type, formation, stadium_id,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",s.profile.id),l=(a||[]).filter(u=>u.card_type==="player"&&u.player),p=(a||[]).filter(u=>u.card_type==="formation"),n=(a||[]).filter(u=>u.card_type==="stadium"),o=[...new Set(n.map(u=>u.stadium_id).filter(Boolean))];let g={};if(n.forEach(u=>{u.stadium_def&&u.stadium_id&&(g[u.stadium_id]=u.stadium_def)}),o.length&&Object.keys(g).length<o.length){const{data:u}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",o);(u||[]).forEach(M=>{g[M.id]=M})}const v=p.map(u=>u.formation).filter(Boolean),{data:y}=await E.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let T=d.formation||"4-4-2";v.length>0&&!v.includes(T)&&(T=v[0]);const r={deckId:e,name:d.name,formation:T,formationCardId:d.formation_card_id,stadiumCardId:d.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:p,stadiumCards:n,stadDefMap:g,availableFormations:v};(y||[]).forEach(u=>{u.is_starter?r.slots[u.position]=u.card_id:r.subs.includes(u.card_id)||r.subs.push(u.card_id)}),St(t,r,i)}function St(e,t,i){var p,n;const{navigate:s}=i;Jt[t.formation];const c=Gi(t.formation),d=c.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Jt),l=t.subs.map(o=>t.playerCards.find(g=>g.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${d}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>

    <!-- Formation (uniquement les cartes possédées) -->
    <div style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <label style="font-size:11px;margin-bottom:4px;display:block">Formation ${t.availableFormations.length===0?"(aucune carte — toutes disponibles)":""}</label>
      <select id="formation-select" style="width:100%;padding:7px;border-radius:6px;border:1.5px solid var(--gray-200)">
        ${a.map(o=>`<option value="${o}" ${o===t.formation?"selected":""}>${o}</option>`).join("")}
      </select>
    </div>

    <!-- Carte Stade -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:10px">
      <span style="font-size:18px">🏟️</span>
      <div style="flex:1;font-size:12px;font-weight:700;color:#555">Carte Stade <span style="font-size:10px;color:#aaa;font-weight:400">(+10 aux joueurs du même club/pays)</span></div>
      ${t.stadiumCards.length>0?`
        <select id="stadium-select" style="padding:6px;border-radius:6px;border:1.5px solid #E87722;font-size:12px;max-width:180px;background:#fff">
          <option value="">Aucun stade</option>
          ${t.stadiumCards.map(o=>{var y;const g=t.stadDefMap[o.stadium_id],v=g?g.name+((y=g.club)!=null&&y.encoded_name?` (${g.club.encoded_name})`:g.country_code?` (${g.country_code})`:""):o.id.slice(0,8);return`<option value="${o.id}" ${t.stadiumCardId===o.id?"selected":""}>${v}</option>`}).join("")}
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
        ${l.map(o=>{const g=o.player;return`<div style="position:relative;flex-shrink:0">
            ${eo(g,44,58)}
            <button data-remove-sub="${o.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>
          </div>`}).join("")}
        ${t.subs.length<5?'<div id="add-sub-btn" style="width:44px;height:58px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:22px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${d<11?"disabled":""}>
        ${d<11?`Placez encore ${11-d} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`,to(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>s("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const g=Gi(t.formation),v={};g.forEach(y=>{t.slots[y]&&(v[y]=t.slots[y])}),t.slots=v,St(e,t,i)}),(p=document.getElementById("stadium-select"))==null||p.addEventListener("change",o=>{t.stadiumCardId=o.target.value||null}),document.getElementById("save-deck").addEventListener("click",()=>oo(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(g=>g!==o.dataset.removeSub),St(e,t,i)})}),(n=document.getElementById("add-sub-btn"))==null||n.addEventListener("click",()=>{no(t,e,i)})}function to(e,t,i,s){var N,K;const c=e.querySelector("#deck-field");if(!c)return;const d=(N=t.stadiumCards)==null?void 0:N.find(C=>C.id===t.stadiumCardId),a=d&&((K=t.stadDefMap)==null?void 0:K[d.stadium_id])||null,l=Pt[t.formation]||{},p=Yi(t.formation)||[],n={};for(const C of i){const q=t.slots[C],D=q?t.playerCards.find(X=>X.id===q):null;n[C]=D?D.player:null}const o=300,g=300,v=48,y=64,T=13,r=16,u=38;function M(C){const q=l[C];return q?{x:q.x*o,y:q.y*g}:null}let L="";for(const[C,q]of p){const D=M(C),X=M(q);if(!D||!X)continue;const se=n[C]?{...n[C],club_id:n[C].club_id,country_code:n[C].country_code,rarity:n[C].rarity}:null,oe=n[q]?{...n[q],club_id:n[q].club_id,country_code:n[q].country_code,rarity:n[q].rarity}:null,P=at(se,oe);P==="#ff3333"||P==="#cc2222"?L+=`<line x1="${D.x.toFixed(1)}" y1="${D.y.toFixed(1)}" x2="${X.x.toFixed(1)}" y2="${X.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(L+=`<line x1="${D.x.toFixed(1)}" y1="${D.y.toFixed(1)}" x2="${X.x.toFixed(1)}" y2="${X.y.toFixed(1)}" stroke="${P}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,L+=`<line x1="${D.x.toFixed(1)}" y1="${D.y.toFixed(1)}" x2="${X.x.toFixed(1)}" y2="${X.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const C of i){const q=M(C);if(!q)continue;const D=n[C],X=C.replace(/\d+/,""),se=vt[X]||"#555",oe=(q.x-v/2).toFixed(1),P=(q.y-y/2).toFixed(1),Y={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[D==null?void 0:D.rarity]||"#aaa";if(D){const U=ei(D),G=ln(D),ie=dn(D.country_code),pe=Number(X==="GK"?D.note_g:X==="DEF"?D.note_d:X==="MIL"?D.note_m:D.note_a)||0,be=a&&(a.club_id&&String(D.club_id)===String(a.club_id)||a.country_code&&D.country_code===a.country_code),Te=be?pe+10:pe,Ee=y-T-r;L+=`<defs><clipPath id="dcp-${C}"><rect x="${oe}" y="${(q.y-y/2+T).toFixed(1)}" width="${v}" height="${Ee}"/></clipPath></defs>`,L+=`<rect x="${oe}" y="${P}" width="${v}" height="${y}" rx="5" fill="${se}"/>`,U&&(L+=`<image href="${U}" x="${oe}" y="${(q.y-y/2+T).toFixed(1)}" width="${v}" height="${Ee}" clip-path="url(#dcp-${C})" preserveAspectRatio="xMidYMin slice"/>`),L+=`<rect x="${oe}" y="${P}" width="${v}" height="${T}" fill="rgba(255,255,255,0.93)"/>`,L+=`<text x="${q.x.toFixed(1)}" y="${(q.y-y/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(D.surname_encoded||"").slice(0,9)}</text>`;const he=(q.y+y/2-r).toFixed(1);L+=`<rect x="${oe}" y="${he}" width="${v}" height="${r}" fill="rgba(255,255,255,0.93)"/>`,ie&&(L+=`<image href="${ie}" x="${(q.x-21).toFixed(1)}" y="${(q.y+y/2-r+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),L+=`<text x="${q.x.toFixed(1)}" y="${(q.y+y/2-r/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Te}</text>`,G&&(L+=`<image href="${G}" x="${(q.x+v/2-14).toFixed(1)}" y="${(q.y+y/2-r+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),L+=`<rect x="${oe}" y="${P}" width="${v}" height="${y}" rx="5" fill="none" stroke="${be?"#E87722":Y}" stroke-width="${be?"2.5":"2"}"/>`,be&&(L+=`<rect x="${(q.x+v/2-13).toFixed(1)}" y="${P}" width="13" height="9" rx="3" fill="#E87722"/>`,L+=`<text x="${(q.x+v/2-6.5).toFixed(1)}" y="${(q.y-y/2+4.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="900" fill="#fff" font-family="Arial">+10</text>`)}else L+=`<rect x="${oe}" y="${P}" width="${v}" height="${y}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,L+=`<text x="${q.x.toFixed(1)}" y="${q.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,L+=`<text x="${q.x.toFixed(1)}" y="${(q.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${X}</text>`;L+=`<rect x="${oe}" y="${P}" width="${v}" height="${y}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${C}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-u} ${-u} ${o+u*2} ${g+u*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${L}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(C=>{C.addEventListener("click",()=>io(C.dataset.pos,t,e,s))})}function io(e,t,i,s){var v,y,T;const{openModal:c,closeModal:d}=s,a=e.replace(/\d+/,""),l=t.slots[e],p=l?t.playerCards.find(r=>r.id===l):null;(v=p==null?void 0:p.player)==null||v.id;const n=new Set;Object.entries(t.slots).forEach(([r,u])=>{var L;if(r===e||!u)return;const M=t.playerCards.find(N=>N.id===u);(L=M==null?void 0:M.player)!=null&&L.id&&n.add(M.player.id)}),t.subs.forEach(r=>{var M;const u=t.playerCards.find(L=>L.id===r);(M=u==null?void 0:u.player)!=null&&M.id&&n.add(u.player.id)});const o=new Set,g=t.playerCards.filter(r=>{const u=r.player;return!(u.job===a||u.job2===a)||n.has(u.id)||o.has(u.id)?!1:(o.add(u.id),!0)});g.sort((r,u)=>{const M=a==="GK"?r.player.note_g:a==="DEF"?r.player.note_d:a==="MIL"?r.player.note_m:r.player.note_a;return(a==="GK"?u.player.note_g:a==="DEF"?u.player.note_d:a==="MIL"?u.player.note_m:u.player.note_a)-M}),c(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?g.map(r=>{var K,C;const u=r.player,M=a==="GK"?u.note_g:a==="DEF"?u.note_d:a==="MIL"?u.note_m:u.note_a,L=ei(u),N={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[u.rarity];return`<div class="player-option" data-card-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[a]}">
            ${L?`<img src="${L}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${vt[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${u.firstname} ${u.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${u.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${u.country_code}">
              ${(K=u.clubs)!=null&&K.logo_url?`<img src="${u.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((C=u.clubs)==null?void 0:C.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${u.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${vt[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${N};flex-shrink:0">
            ${M}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(y=document.getElementById("close-selector"))==null||y.addEventListener("click",d),(T=document.getElementById("remove-player"))==null||T.addEventListener("click",()=>{delete t.slots[e],d(),St(i,t,s)}),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{t.slots[e]=r.dataset.cardId,d(),St(i,t,s)})})}function no(e,t,i){var p;const{openModal:s,closeModal:c}=i,d=new Set;Object.values(e.slots).filter(Boolean).forEach(n=>{var g;const o=e.playerCards.find(v=>v.id===n);(g=o==null?void 0:o.player)!=null&&g.id&&d.add(o.player.id)}),e.subs.forEach(n=>{var g;const o=e.playerCards.find(v=>v.id===n);(g=o==null?void 0:o.player)!=null&&g.id&&d.add(o.player.id)});const a=new Set,l=e.playerCards.filter(n=>{var o,g,v;return d.has((o=n.player)==null?void 0:o.id)||a.has((g=n.player)==null?void 0:g.id)?!1:(a.add((v=n.player)==null?void 0:v.id),!0)});s("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(n=>{var y;const o=n.player,g=ei(o),v=o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a;return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[o.job]}">
            ${g?`<img src="${g}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${o.firstname} ${o.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.job} · ${o.country_code} · ${((y=o.clubs)==null?void 0:y.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${vt[o.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${v}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{e.subs.push(n.dataset.cardId),c(),St(t,e,i)})})}async function oo(e,t){const{state:i,toast:s,navigate:c}=t,d=e.formationCards.find(p=>p.formation===e.formation),a=(d==null?void 0:d.id)||e.formationCardId;await E.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await E.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([p,n],o)=>{l.push({deck_id:e.deckId,card_id:n,position:p,is_starter:!0,slot_order:o})}),e.subs.forEach((p,n)=>{l.push({deck_id:e.deckId,card_id:p,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),l.length>0){const{error:p}=await E.from("deck_cards").insert(l);if(p){s(p.message,"error");return}}s("Deck enregistré ✅","success"),c("decks")}function Gi(e){const t=Jt[e]||Jt["4-4-2"],i=["GK1"];for(let s=1;s<=t.DEF;s++)i.push(`DEF${s}`);for(let s=1;s<=t.MIL;s++)i.push(`MIL${s}`);for(let s=1;s<=t.ATT;s++)i.push(`ATT${s}`);return i}async function cn(){const{data:e}=await E.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await E.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(s=>s.booster_id===i.id)}))}function ro(e){if(!(e!=null&&e.length))return null;const t=e.reduce((s,c)=>s+Number(c.percentage),0);let i=Math.random()*t;for(const s of e)if(i-=Number(s.percentage),i<=0)return s;return e[e.length-1]}const pn=()=>Object.keys(Pt),ao=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ci={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function so(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Pi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},lo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},co={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ni(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function po(e){var o,g;const t=e.player;if(!t)return"";const i=t.job||"ATT",s=Pi[i],c=lo[t.rarity]||"#ccc",d=Ni(t,i),a=t.job2?Ni(t,t.job2):null,l=t.job2?Pi[t.job2]:null,p=so(t),n=co[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${c};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${s}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${s}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>
        ${a!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${l}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${p?`<img src="${p}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${n}</div>
        ${(o=t.clubs)!=null&&o.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((g=t.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function un(e){var c;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const i=((c=Object.entries(t).sort((d,a)=>a[1]-d[1])[0])==null?void 0:c[0])||"player",s=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+s,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function uo(e,{state:t,navigate:i,toast:s}){var a;const c=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await cn()).map(un)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}d.length||(d=ao.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${c.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${d.map(l=>{const p=l.cost===0||c>=l.cost;return`<div class="booster-card ${p?"":"disabled"}" data-booster="${l.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${l.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${l.img}" alt="${l.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/manager-wars/icons/booster-players.png'"></div>
            <div class="name">${l.name}</div>
            <div class="desc">${l.sub}</div>
            <div class="cost">${l.costLabel}</div>
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const p=d.find(n=>n.id===l.dataset.booster);if(p){l.style.opacity="0.5",l.style.pointerEvents="none";try{await fo(p,{state:t,toast:s,navigate:i,container:e})}catch(n){s(n.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",p=>{p.stopPropagation();const n=d.find(o=>o.id===l.dataset.boosterId);yo(n)})})}async function fo(e,{state:t,toast:i,navigate:s,container:c}){var g,v;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await vo()}catch(y){i(y.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:d}=await E.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((d||[]).filter(y=>y.card_type==="player").map(y=>y.player_id)),l=new Set((d||[]).filter(y=>y.card_type==="formation").map(y=>y.formation));let p=[],n=null;try{if((g=e.rates)!=null&&g.length)p=await pi(t.profile,e);else{const y=e.type||"player";y==="player"?p=await fn(t.profile,e.cardCount,e.cost):y==="game_changer"?p=await gn(t.profile,e.cardCount,e.cost):y==="formation"?p=await mn(t.profile,e.cost):p=await pi(t.profile,e)}}catch(y){n=y.message||String(y),console.error("[Booster] Erreur:",y)}if(!(p!=null&&p.length)){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",y.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${n||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(y),(v=y.querySelector("#anim-close-err"))==null||v.addEventListener("click",()=>y.remove());return}p.forEach(y=>{y.card_type==="player"&&y.player?y.isDuplicate=a.has(y.player.id):y.card_type==="formation"&&(y.isDuplicate=l.has(y.formation))});const{data:o}=await E.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),xn(p,e,s)}function go(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function mo(e,t){let i;switch(t){case"legende":i=e.filter(s=>s.rarity==="legende"),i.length||(i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte")),i.length||(i=e.filter(s=>mt(s)>=6));break;case"special":i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte"),i.length||(i=e.filter(s=>mt(s)>=6));break;case"normal_high":i=e.filter(s=>s.rarity==="normal"&&mt(s)>=6),i.length||(i=e.filter(s=>mt(s)>=6));break;default:i=e.filter(s=>s.rarity==="normal"&&mt(s)>=1&&mt(s)<=5),i.length||(i=e.filter(s=>s.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function pi(e,t){if(t.cost>0){const{error:l}=await E.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:i}=await E.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),s=new Set((i||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),c=new Set((i||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),d=new Set,a=[];for(let l=0;l<(t.cardCount||5);l++){const p=ro(t.rates);if(p){if(p.card_type==="player"){const n=L=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[L]||L,o=p.rarity?n(p.rarity):null;let g=E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);o&&(g=g.eq("rarity",o));const{data:v}=await g;let y=v||[];if((p.note_min||p.note_max)&&(y=y.filter(L=>{const N=Math.max(Number(L.note_g)||0,Number(L.note_d)||0,Number(L.note_m)||0,Number(L.note_a)||0);return(!p.note_min||N>=p.note_min)&&(!p.note_max||N<=p.note_max)})),y.length||(p.note_min||p.note_max?(y=v||[],console.warn("[Booster] Aucun joueur avec note",p.note_min,"-",p.note_max,"— fallback rareté uniquement")):y=v||[]),!y.length)continue;let T=y.filter(L=>!d.has(L.id));T.length||(T=y);const r=T[Math.floor(Math.random()*T.length)];d.add(r.id);const u=s.has(r.id),{data:M}=await E.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();M&&(a.push({...M,player:r,isDuplicate:u}),E.rpc("record_transfer",{p_card_id:M.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(p.card_type==="game_changer"){const{data:n}=await E.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),o=n!=null&&n.length?n:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],v=o[Math.floor(Math.random()*o.length)].name,{data:y}=await E.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:v}).select().single();y&&a.push(y)}else if(p.card_type==="formation"){const n=pn(),o=n[Math.floor(Math.random()*n.length)],g=c.has(o),{data:v}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:o}).select();v!=null&&v[0]&&a.push({...v[0],isDuplicate:g})}else if(p.card_type==="stadium"){const{data:n,error:o}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(o){console.error("[Booster] stadium_definitions:",o.message);continue}if(!(n!=null&&n.length)){console.warn("[Booster] Aucun stade en DB");continue}const g=n[Math.floor(Math.random()*n.length)],{data:v,error:y}=await E.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:g.id}).select("id,card_type,stadium_id").single();if(y){console.error("[Booster] insert stadium card:",y.message);continue}v&&a.push({...v,rarity:"normal",_stadiumDef:g})}}}return a}async function fn(e,t,i){if(i>0){const{error:n}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n}const{data:s}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(s!=null&&s.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=s.filter(n=>n.job==="GK"),d=s.filter(n=>n.job!=="GK"),a=!e.first_booster_opened&&c.length>0,l=[];for(let n=0;n<t;n++){const o=n===0&&a?c:n===0?d:s,g=go(),v=mo(o,g);v&&l.push(v)}a&&await E.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await E.from("cards").insert(l.map(n=>({owner_id:e.id,player_id:n.id,card_type:"player"}))).select();return(p||[]).forEach((n,o)=>{E.rpc("record_transfer",{p_card_id:n.id,p_player_id:l[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((n,o)=>({...p[o],player:n}))}async function gn(e,t,i){const{error:s}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s;const{data:c}=await E.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=c!=null&&c.length?c:Object.keys(ci).map(o=>({name:o,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const o=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:l,error:p}=await E.from("cards").insert(a).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(l||[]).map(o=>{const g=c==null?void 0:c.find(v=>v.name===o.gc_type||v.id===o.gc_definition_id);return{...o,_gcDef:g||null}})}async function mn(e,t){const{error:i}=await E.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:s}=await E.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((s||[]).map(o=>o.formation)),d=pn(),a=d[Math.floor(Math.random()*d.length)],l=c.has(a),{data:p,error:n}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return n&&console.error("[Booster Formation] Erreur insert:",n.message,n),(p||[]).map(o=>({...o,isDuplicate:l}))}function xn(e,t,i,s=null){var Y,U;if(!e||e.length===0){const G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",G.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(G),(Y=G.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>G.remove());return}e=[...e].sort((G,ie)=>{const pe=G.player?mt(G.player):-1;return(ie.player?mt(ie.player):-1)-pe});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let d=!1;const a=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let p=!1;const n=G=>G.touches&&G.touches[0]?G.touches[0].clientX:G.clientX;function o(G){d||(p=!0,l.style.opacity="1",g(G))}function g(G){if(!p||d)return;const ie=a.getBoundingClientRect(),pe=n(G)-ie.left,be=Math.max(0,Math.min(1,pe/ie.width));l.style.width=be*ie.width+"px",be>=.82&&y()}function v(){d||(p=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{d||(l.style.transition="")},220))}function y(){var ie;if(d)return;d=!0,p=!1,l.style.width="100%",l.style.opacity="1",(ie=document.getElementById("cut-flash"))==null||ie.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const G=document.getElementById("cut-hint");G&&(G.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",M(0)},620)}a.addEventListener("pointerdown",o),window.addEventListener("pointermove",g),window.addEventListener("pointerup",v),a.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",v);let T=0,r=!1;const u=new Set;function M(G){T=G,document.getElementById("reveal-phase").style.display="flex",L(),N(G,0),X()}function L(){const G=document.getElementById("card-dots");G&&(G.innerHTML=e.map((ie,pe)=>`<div class="card-dot" data-i="${pe}" style="width:8px;height:8px;border-radius:50%;background:${pe===T?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),G.querySelectorAll(".card-dot").forEach(ie=>ie.addEventListener("click",()=>C(parseInt(ie.dataset.i)))))}function N(G,ie){var re;const pe=e[G],be=document.getElementById("card-counter"),Te=document.getElementById("card-track");be&&(be.textContent=`Carte ${G+1} / ${e.length}`);const Ee=document.getElementById("reveal-btns");Ee&&(Ee.style.display=G===e.length-1?"flex":"none");const he=pe.card_type==="player"&&((re=pe.player)==null?void 0:re.rarity)==="legende",$e=!u.has(G);u.add(G);let Ae=0;if(pe.card_type==="player"&&pe.player){const R=pe.player,Z=R.job||"ATT";Ae=Number(Z==="GK"?R.note_g:Z==="DEF"?R.note_d:Z==="MIL"?R.note_m:R.note_a)||0}const te=R=>{Te.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${he?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${xo(pe)}</div>
          ${pe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const Z=document.getElementById("current-card-wrap");ie!==0?(Z.style.transition="none",Z.style.transform=`translateX(${ie>0?100:-100}%)`,requestAnimationFrame(()=>{Z.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",Z.style.transform="translateX(0)"})):Z.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),R||he?oe():P(),L()};$e&&Ae>6&&pe.card_type==="player"&&pe.player?K(pe,()=>te(!0)):te(!1)}function K(G,ie){var Ae;r=!0;const pe=G.player,be=`https://flagsapi.com/${pe.country_code}/flat/64.png`,Te=(Ae=pe.clubs)==null?void 0:Ae.logo_url,Ee=document.getElementById("walkout-overlay"),he=document.getElementById("walkout-stage");if(!Ee||!he){r=!1,ie();return}Ee.style.display="flex";const $e=()=>{const te=he.firstElementChild;te&&(te.classList.remove("wo-in"),te.classList.add("wo-out"))};he.innerHTML=`<img class="wo-in" src="${be}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout($e,2e3),setTimeout(()=>{var te;he.innerHTML=Te?`<img class="wo-in" src="${Te}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((te=pe.clubs)==null?void 0:te.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout($e,4450),setTimeout(()=>{Ee.style.display="none",he.innerHTML="",r=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),ie()},4900)}function C(G){if(r||G<0||G>=e.length||G===T)return;const ie=G>T?1:-1;T=G,N(G,ie)}function q(){C(T+1)}function D(){C(T-1)}function X(){const G=document.getElementById("card-viewport");if(!G||G._swipeBound)return;G._swipeBound=!0;let ie=0,pe=0,be=0,Te=!1;const Ee=re=>re.touches?re.touches[0].clientX:re.clientX,he=re=>re.touches?re.touches[0].clientY:re.clientY,$e=re=>{Te=!0,ie=Ee(re),pe=he(re),be=0},Ae=re=>{if(!Te)return;be=Ee(re)-ie;const R=he(re)-pe;if(Math.abs(be)<Math.abs(R))return;const Z=document.getElementById("current-card-wrap");Z&&(Z.style.transition="none",Z.style.transform=`translateX(${be*.6}px) rotate(${be*.02}deg)`)},te=()=>{if(!Te)return;Te=!1;const re=document.getElementById("current-card-wrap"),R=55;be<=-R&&T<e.length-1?q():be>=R&&T>0?D():re&&(re.style.transition="transform .2s ease",re.style.transform="translateX(0)")};G.addEventListener("pointerdown",$e),G.addEventListener("pointermove",Ae),G.addEventListener("pointerup",te),G.addEventListener("pointercancel",te),G.addEventListener("touchstart",$e,{passive:!0}),G.addEventListener("touchmove",Ae,{passive:!0}),G.addEventListener("touchend",te),G.addEventListener("click",re=>{if(Math.abs(be)>8)return;const R=G.getBoundingClientRect();re.clientX-R.left>R.width/2?q():D()})}let se=null;function oe(){const G=document.getElementById("fireworks-canvas");if(!G)return;G.width=window.innerWidth,G.height=window.innerHeight;const ie=G.getContext("2d"),pe=[];function be(){const Ee=Math.random()*G.width,he=Math.random()*G.height*.6,$e=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Ae=$e[Math.floor(Math.random()*$e.length)];for(let te=0;te<60;te++){const re=Math.PI*2/60*te,R=2+Math.random()*5;pe.push({x:Ee,y:he,vx:Math.cos(re)*R,vy:Math.sin(re)*R,alpha:1,color:Ae,size:2+Math.random()*3})}}be(),se=setInterval(be,600);function Te(){if(document.getElementById("fireworks-canvas")){ie.clearRect(0,0,G.width,G.height);for(let Ee=pe.length-1;Ee>=0;Ee--){const he=pe[Ee];if(he.x+=he.vx,he.y+=he.vy+.08,he.vy*=.98,he.alpha-=.018,he.alpha<=0){pe.splice(Ee,1);continue}ie.globalAlpha=he.alpha,ie.fillStyle=he.color,ie.beginPath(),ie.arc(he.x,he.y,he.size,0,Math.PI*2),ie.fill()}ie.globalAlpha=1,(se!==null||pe.length>0)&&requestAnimationFrame(Te)}}Te()}function P(){se!==null&&(clearInterval(se),se=null);const G=document.getElementById("fireworks-canvas");G&&G.getContext("2d").clearRect(0,0,G.width,G.height)}if(s){const G=document.getElementById("reveal-btns");G&&(G.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(U=document.getElementById("reveal-next"))==null||U.addEventListener("click",()=>{P(),c.remove(),s()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{P(),c.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{P(),c.remove(),i("boosters")})}function xo(e){var t,i,s,c;if(e.card_type==="player"&&e.player)return po(e);if(e.card_type==="game_changer"){const d=e._gcDef,a=(d==null?void 0:d.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},p={purple:"#b06ce0",light_blue:"#00d4ef"},n=l[d==null?void 0:d.color]||l.purple,o=p[d==null?void 0:d.color]||p.purple,g=(d==null?void 0:d.name)||e.gc_type||"Game Changer",v=(d==null?void 0:d.effect)||((t=ci[e.gc_type])==null?void 0:t.desc)||"",y=d!=null&&d.image_url?`/manager-wars/icons/${d.image_url}`:null,T=((i=ci[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${n};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${g.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${g}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${y?`<img src="${y}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${T}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${v.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const d=e._stadiumDef,a=(d==null?void 0:d.name)||"Stade",l=((s=d==null?void 0:d.club)==null?void 0:s.encoded_name)||(d==null?void 0:d.country_code)||"—",p=d!=null&&d.image_url?`/manager-wars/icons/${d.image_url}`:((c=d==null?void 0:d.club)==null?void 0:c.logo_url)||(d!=null&&d.country_code?`https://flagcdn.com/64x48/${d.country_code.toLowerCase()}.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${a.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${a}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${p?`<img src="${p}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function yo(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};s.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${d[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${c[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(s),s.addEventListener("click",a=>{a.target===s&&s.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>s.remove());return}bo()}function bo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
      </button>`,document.body.appendChild(t);const s=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),d=document.getElementById("ad-skip");c&&(c.textContent=i),d&&(d.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(s),d&&(d.disabled=!1,d.style.cssText=d.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),d==null||d.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function wo(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(ki());window.propeller.push({zone_id:yn,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function _o(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(ki());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:yn,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}async function $o(e,{state:t,navigate:i,toast:s,refreshProfile:c}){var v,y;const{data:d}=await E.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let a=Array.isArray((v=t.profile)==null?void 0:v.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await E.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let l=null;try{const r=(await cn()).find(u=>(u.name||"").toLowerCase().includes("new player"));r&&(l=un(r))}catch(T){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',T)}const p=a.length;let n=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await E.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function g(){var L;if(n>=p||!a.length){await E.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),s("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const T=a[0],{data:r}=await E.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let u=[];try{if(T.type==="formation")u=await mn(t.profile,0);else if(T.type==="game_changer")u=await gn(t.profile,T.count||3,0);else if(l&&((L=l.rates)!=null&&L.length)){const N={...l,cost:0,cardCount:T.count||l.cardCount||5};u=await pi(t.profile,N),T.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(C=>C.player&&C.player.job==="GK")||await ko(t.profile,u),await E.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await fn(t.profile,T.count||5,0)}catch(N){s(N.message||"Erreur ouverture booster","error");return}a.shift(),n++,await o();const M=T.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:T.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${n}/${p})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};xn(u,M,i,()=>{g()})}(y=document.getElementById("onboard-start"))==null||y.addEventListener("click",()=>g())}async function ko(e,t){try{const{data:i}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const s=i[Math.floor(Math.random()*i.length)],c=t.findIndex(a=>a.player);if(c===-1)return;const d=t[c];await E.from("cards").update({player_id:s.id}).eq("id",d.id),t[c]={...d,player_id:s.id,player:s}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Lt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},It={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function wt(e,t,i,s,c){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${s}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",c)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ui(e,t){var s,c;const i=e.player;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:Number(i.note_g)||0,note_d:Number(i.note_d)||0,note_m:Number(i.note_m)||0,note_a:Number(i.note_a)||0,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((s=i.clubs)==null?void 0:s.encoded_name)||null,clubLogo:((c=i.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ei(e,t){if(!t||!e)return e;const{club_id:i,country_code:s}=t;return Object.values(e).forEach(c=>{Array.isArray(c)&&c.forEach(d=>{const a=i&&String(d.club_id)===String(i),l=s&&String(d.country_code)===String(s);(a||l)&&(d.boost=(d.boost||0)+10,d.stadiumBonus=!0)})}),e}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ti(){const e=Math.random()*100;return e<10?3:e<30?2:1}function yt(e,t){const i=Lt[t]||Lt["4-4-2"],s={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(n=>n.position&&n.position.replace(/\d+$/,"")===a).sort((n,o)=>parseInt(n.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(n=>({...n,_line:a})),p=lt(l.length);l.forEach((n,o)=>{n._col=p[o]}),s[a]=l}return s}const d=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let n=0;n<i[a];n++){let o=d.findIndex(g=>g.job===a);if(o===-1&&(o=d.findIndex(g=>g.job2===a)),o===-1&&(o=0),d[o]){const g={...d[o],_line:a};l.push(g),d.splice(o,1)}}const p=lt(l.length);l.forEach((n,o)=>{n._col=p[o]}),s[a]=l}return s}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ii(e,t,i){const c=new Set,d=t.filter(o=>{const g=o.gc_type||o.id;return c.has(g)?!1:(c.add(g),!0)});let a=[];function l(o,g){const v=o._gcDef,y={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},T={purple:"#9b59b6",light_blue:"#00bcd4"},r=y[v==null?void 0:v.color]||y.purple,u=T[v==null?void 0:v.color]||T.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${g?"#FFD700":u};background:${r};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${g?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${g?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((v==null?void 0:v.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(v==null?void 0:v.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${v!=null&&v.image_url?`<img src="/manager-wars/icons/${v.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((v==null?void 0:v.effect)||"").slice(0,50)}</span>
      </div>
      ${g?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function n(){var g,v,y;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=a.length>0;e.innerHTML=`
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
        ${d.map(T=>{const r=a.find(u=>u.gc_type===T.gc_type);return l(T,!!r)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${o?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${o?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${o?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${o?"pointer":"default"};box-shadow:${o?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(T=>{T.addEventListener("click",()=>{const r=T.dataset.id,u=d.find(L=>L.id===r);if(!u)return;const M=a.findIndex(L=>L.gc_type===u.gc_type);M>-1?a.splice(M,1):a.length<3&&a.push(u),n()})}),(g=e.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>{o&&p(a)}),(v=e.querySelector("#gc-no-gc"))==null||v.addEventListener("click",()=>p([])),(y=e.querySelector("#gc-reset"))==null||y.addEventListener("click",()=>{a.length&&(a=[],n())})}n()}function Eo(e){var s;const t=((s=e==null?void 0:e.state)==null?void 0:s.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function Ao(e,t,i){const{state:s,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select("id,name,is_active,formation,stadium_card_id").eq("owner_id",s.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){wt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const a=d.map(v=>v.id),{data:l}=await E.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),p=[...new Set((l||[]).filter(v=>{var y,T;return((y=v.card)==null?void 0:y.card_type)==="stadium"&&((T=v.card)==null?void 0:T.stadium_id)}).map(v=>v.card.stadium_id))],n={};if(p.length){const{data:v}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",p);(v||[]).forEach(y=>{n[y.id]=y}),(l||[]).forEach(y=>{var T,r;((T=y.card)==null?void 0:T.card_type)==="stadium"&&((r=y.card)!=null&&r.stadium_id)&&(y.card._stadiumDef=n[y.card.stadium_id]||null)})}let o=0;function g(){var C,q,D,X,se,oe,P;const v=d[o],y=(l||[]).filter(Y=>Y.deck_id===v.id),T=y.filter(Y=>{var U;return Y.is_starter&&((U=Y.card)==null?void 0:U.player)}).map(Y=>ui(Y.card,Y.position)),r=y.find(Y=>{var U;return((U=Y.card)==null?void 0:U.card_type)==="formation"}),u=v.formation||((C=r==null?void 0:r.card)==null?void 0:C.formation)||"4-4-2";let M=T.length>=11?yt(T,u):null,L=null;if(v.stadium_card_id&&M){const Y=y.find(U=>{var G;return((G=U.card)==null?void 0:G.id)===v.stadium_card_id});(q=Y==null?void 0:Y.card)!=null&&q.stadium_id&&(L=Y.card._stadiumDef||null),L&&(M=Ei(M,L))}const N=T.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Eo(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===0?"0.1":"0.3"});color:${o===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${v.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${u} · ${T.length}/11 ${v.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===d.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===d.length-1?"0.1":"0.3"});color:${o===d.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===d.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${L?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${L.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((D=L.club)==null?void 0:D.encoded_name)||L.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${M?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ft(M,u,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${T.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${d.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${d.map((Y,U)=>`<div style="width:7px;height:7px;border-radius:50%;background:${U===o?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${N?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${N?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${N?"pointer":"default"}">
          ${N?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const U=e.querySelector(".deck-preview-wrap svg");U&&(U.removeAttribute("width"),U.removeAttribute("height"),U.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",U.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(X=document.getElementById("prev-deck"))==null||X.addEventListener("click",()=>{o>0&&(o--,g())}),(se=document.getElementById("next-deck"))==null||se.addEventListener("click",()=>{o<d.length-1&&(o++,g())}),(oe=document.getElementById("validate-deck"))==null||oe.addEventListener("click",()=>{if(!N)return;const Y=t.state.params||{};t.navigate("match",{...Y,matchMode:Y.matchMode||i,deckId:v.id})}),(P=document.getElementById("cancel-deck-select"))==null||P.addEventListener("click",()=>{We(e),c("home")});const K=document.getElementById("deck-swipe-zone");if(K){let Y=0,U=0;K.addEventListener("touchstart",G=>{Y=G.touches[0].clientX,U=G.touches[0].clientY},{passive:!0}),K.addEventListener("touchend",G=>{const ie=G.changedTouches[0].clientX-Y,pe=G.changedTouches[0].clientY-U;Math.abs(ie)<40||Math.abs(ie)<Math.abs(pe)||(ie<0&&o<d.length-1?(o++,g()):ie>0&&o>0&&(o--,g()))},{passive:!0})}}g()}function bn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ye(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const s=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),c=bn(e),d=e._line||e.job||"MIL",a=It[d]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(ze(e,d))||0)+(e.boost||0),n=hn(e==null?void 0:e.country_code),o=Math.round(i*.19),g=Math.round(i*.25),v=i-Math.round(i*.19)-Math.round(i*.25),y=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${y}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${s&&!(e!=null&&e.used)?`<img src="${s}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${v}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Xt(e==null?void 0:e.country_code)?`<img src="${Xt(e.country_code)}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">${n}</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function nt(e,t,i){if(!(e!=null&&e.length))return"";const s=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return s.forEach((d,a)=>{if(c+=Ye(d,40,52),a<s.length-1){const l=at(d,s[a+1]);c+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Xt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function hn(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ut(e,t,i,s,c=310,d=310,a=[]){var N;const l=Pt[t]||{},p=Yi(t)||xi[t]||[],n={},o=["ATT","MIL","DEF","GK"];for(const K of o)(e[K]||[]).forEach((q,D)=>{n[`${K}${D+1}`]=q});function g(K){const C=l[K];return C?{x:C.x*c,y:C.y*d}:null}let v="";for(const[K,C]of p){const q=g(K),D=g(C);if(!q||!D)continue;const X=n[K],se=n[C],oe=at(X,se);oe==="#00ff88"||oe==="#FFD700"?(v+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}"
        stroke="${oe}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,v+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}"
        stroke="${oe}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):v+=`<line x1="${q.x.toFixed(1)}" y1="${q.y.toFixed(1)}" x2="${D.x.toFixed(1)}" y2="${D.y.toFixed(1)}"
        stroke="${oe}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const y=48,T=64,r=13,u=16,M={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[K,C]of Object.entries(n)){const q=g(K);if(!q||!C)continue;const D=K.replace(/[0-9]/g,""),X=It[D]||"#555",se=a.includes(C.cardId),oe=i==="attack"&&(["MIL","ATT"].includes(D)||se)&&!C.used||i==="defense"&&["GK","DEF","MIL"].includes(D)&&!C.used,P=s.includes(C.cardId);let Y;i==="attack"?Y=se?Math.max(1,Number(C.note_a)||0):D==="MIL"?Number(C.note_m)||0:Number(C.note_a)||0:i==="defense"?Y=D==="GK"?Number(C.note_g)||0:D==="MIL"?Number(C.note_m)||0:Number(C.note_d)||0:Y=Number(D==="GK"?C.note_g:D==="DEF"?C.note_d:D==="MIL"?C.note_m:C.note_a)||0,Y=Y+(C.boost||0);const U=(q.x-y/2).toFixed(1),G=(q.y-T/2).toFixed(1),ie=M[C==null?void 0:C.rarity]||M.normal;if(C.used){const Ae=typeof import.meta<"u"&&"/manager-wars/"||"/",re=`${typeof window<"u"&&((N=window.location)==null?void 0:N.origin)||""}${Ae}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");v+=`<rect x="${U}" y="${G}" width="${y}" height="${T}" rx="5" fill="#161616"/>`,v+=`<image href="${re}" xlink:href="${re}" x="${U}" y="${G}" width="${y}" height="${T}" preserveAspectRatio="xMidYMid slice"/>`,v+=`<rect x="${U}" y="${G}" width="${y}" height="${T}" rx="5" fill="none" stroke="${ie}" stroke-width="2" opacity="0.7"/>`,v+=`<rect x="${U}" y="${G}" width="${y}" height="${T}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${C.cardId}" data-role="${D}" style="cursor:pointer"/>`;continue}const pe=P?.45:1,be=P?"#FFD700":ie,Te=P?3:(C==null?void 0:C.rarity)==="legende"||(C==null?void 0:C.rarity)==="légende"||(C==null?void 0:C.rarity)==="pepite"||(C==null?void 0:C.rarity)==="pépite"?2.5:2,Ee=T-r-u;v+=`<defs><clipPath id="cp-${K}"><rect x="${U}" y="${(q.y-T/2+r).toFixed(1)}" width="${y}" height="${Ee}"/></clipPath></defs>`,v+=`<rect x="${U}" y="${G}" width="${y}" height="${T}" rx="5" fill="${X}" opacity="${pe}"/>`;const he=Pe(C);he&&(v+=`<image href="${he}" xlink:href="${he}" x="${U}" y="${(q.y-T/2+r).toFixed(1)}" width="${y}" height="${Ee}" clip-path="url(#cp-${K})" preserveAspectRatio="xMidYMin slice"/>`),v+=`<rect x="${U}" y="${G}" width="${y}" height="${r}" rx="4" fill="rgba(255,255,255,0.92)"/>`,v+=`<text x="${q.x.toFixed(1)}" y="${(q.y-T/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.name||"").slice(0,9)}</text>`;const $e=(q.y+T/2-u).toFixed(1);v+=`<rect x="${U}" y="${$e}" width="${y}" height="${u}" fill="rgba(255,255,255,0.92)"/>`;{const Ae=Xt(C.country_code);Ae?v+=`<image href="${Ae}" xlink:href="${Ae}" x="${(q.x-20).toFixed(1)}" y="${(q.y+T/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:v+=`<text x="${(q.x-13).toFixed(1)}" y="${(q.y+T/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${hn(C.country_code)}</text>`,v+=`<text x="${q.x.toFixed(1)}" y="${(q.y+T/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${Y}</text>`;const te=bn(C);te?v+=`<image href="${te}" xlink:href="${te}" x="${(q.x+y/2-14).toFixed(1)}" y="${(q.y+T/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:C.clubName&&(v+=`<text x="${(q.x+14).toFixed(1)}" y="${(q.y+T/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(C.clubName||"").slice(0,3).toUpperCase()}</text>`),C.boost&&(v+=`<rect x="${(q.x+y/2-12).toFixed(1)}" y="${(q.y-T/2).toFixed(1)}" width="14" height="10" rx="3" fill="#87CEEB"/>`,v+=`<text x="${(q.x+y/2-5).toFixed(1)}" y="${(q.y-T/2+6).toFixed(1)}" text-anchor="middle" font-size="7" fill="#000" font-weight="900">+${C.boost}</text>`)}v+=`<rect x="${U}" y="${G}" width="${y}" height="${T}" rx="5" fill="${P?"rgba(255,255,255,0.12)":"none"}" stroke="${be}" stroke-width="${Te}" opacity="${pe}"/>`,oe&&(v+=`<rect x="${U}" y="${G}" width="${y}" height="${T}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${P?"selected":""}" data-card-id="${C.cardId}" data-role="${D}" style="cursor:pointer"/>`)}const L=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-L} ${-L} ${c+L*2} ${d+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${v}
  </svg>`}function ft(e,t,i,s,c=300,d=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ut(e,t,i,s,c,d,a)}
  </div>`}function dt(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function ni(e,t,i,s){var q;const{state:c,navigate:d,toast:a}=t;et(e);const l=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return Ao(e,t,i);const p=l.deckId;let n,o,g,v;try{const D=await Promise.all([E.from("decks").select("formation,name,stadium_card_id").eq("id",p).single(),E.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);n=D[0].data,g=D[0].error,o=D[1].data,v=D[1].error}catch(D){console.error("[Match] Exception chargement deck:",D),wt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(g||v){console.error("[Match] Erreur Supabase:",g||v),wt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const y=(o||[]).filter(D=>{var X;return D.is_starter&&((X=D.card)==null?void 0:X.player)}).map(D=>ui(D.card,D.position)),T=(o||[]).filter(D=>{var X;return!D.is_starter&&((X=D.card)==null?void 0:X.player)}).map(D=>ui(D.card,D.position));if(y.length<11){wt(e,"⚠️",`Deck incomplet (${y.length}/11).`,"Compléter",()=>d("decks"));return}const r=(o||[]).find(D=>{var X;return((X=D.card)==null?void 0:X.card_type)==="formation"}),u=(n==null?void 0:n.formation)||((q=r==null?void 0:r.card)==null?void 0:q.formation)||"4-4-2",{data:M,error:L}=await E.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:N}=await E.from("gc_definitions").select("*").eq("is_active",!0),K=(M||[]).map(D=>({...D,_gcDef:(N==null?void 0:N.find(X=>X.name===D.gc_type||X.id===D.gc_definition_id))||null}));let C=null;if(n!=null&&n.stadium_card_id){const{data:D}=await E.from("cards").select("stadium_id").eq("id",n.stadium_card_id).single();if(D!=null&&D.stadium_id){const{data:X}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",D.stadium_id).single();C=X||null}}s({deckId:p,formation:u,starters:y,subsRaw:T,gcCardsEnriched:K,gcDefs:N||[],stadiumDef:C})}async function To(e,t){const{state:i}=t,c=(i.params||{}).matchMode||"vs_ai_easy",d=c.replace("vs_ai_",""),a=c;await ni(e,t,c,async({deckId:l,formation:p,starters:n,subsRaw:o,gcCardsEnriched:g,gcDefs:v,stadiumDef:y})=>{try{let T=yt(n,p);y&&(T=Ei(T,y));const r=await zo(p,d),u=async M=>{try{const{data:L,error:N}=await E.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if(N){console.error("[MatchIA] Erreur création match:",N),wt(e,"⚠️","Impossible de créer le match ("+N.message+").","Retour",()=>t.navigate("home"));return}const K={gcDefs:v||[],matchId:L==null?void 0:L.id,mode:a,difficulty:d,formation:p,homeTeam:T,aiTeam:r,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),homeScore:0,aiScore:0,gcCards:M,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Lo(e,K,t)}catch(L){console.error("[MatchIA] Exception launchMatch:",L),wt(e,"⚠️","Erreur au lancement du match : "+L.message,"Retour",()=>t.navigate("home"))}};if(!g.length){u([]);return}ii(e,g,u)}catch(T){console.error("[MatchIA] Exception setup:",T),wt(e,"⚠️","Erreur de préparation du match : "+T.message,"Retour",()=>t.navigate("home"))}})}async function zo(e,t){var a,l;const{data:i}=await E.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return So(e);const s=Lt[e]||Lt["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},d=[...i];for(const p of["GK","DEF","MIL","ATT"]){const n=d.filter(T=>T.job===p),o=d.filter(T=>T.job!==p),g=[...n,...o],v=[];for(let T=0;T<s[p];T++){const r=g[T]||d[T];r&&v.push({cardId:"ai-"+r.id+"-"+T,id:r.id,firstname:r.firstname,name:r.surname_encoded,country_code:r.country_code,club_id:r.club_id,job:r.job,job2:r.job2,note_g:Number(r.note_g)||0,note_d:Number(r.note_d)||0,note_m:Number(r.note_m)||0,note_a:Number(r.note_a)||0,rarity:r.rarity,skin:r.skin,hair:r.hair,hair_length:r.hair_length,clubName:((a=r.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=r.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:p})}const y=lt(v.length);v.forEach((T,r)=>{T._col=y[r]}),c[p]=v}return c}function So(e){const t=Lt[e]||Lt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},s=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const d of["GK","DEF","MIL","ATT"]){const a=[];for(let p=0;p<t[d];p++){const n=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:s[c%s.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?n:2,note_d:d==="DEF"?n:2,note_m:d==="MIL"?n:2,note_a:d==="ATT"?n:2,rarity:"normal",boost:0,used:!1,_line:d}),c++}const l=lt(a.length);a.forEach((p,n)=>{p._col=l[n]}),i[d]=a}return i}function Lo(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${ut(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Io(e,t,i),5e3)}function Io(e,t,i){const s=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function d(r){return r.reduce((u,M)=>u+ze(M,"MIL"),0)}function a(r){let u=0;for(let M=0;M<r.length-1;M++){const L=at(r[M],r[M+1]);L==="#00ff88"?u+=2:L==="#FFD700"&&(u+=1)}return u}const l=d(s)+a(s),p=d(c)+a(c),n=l>=p;function o(r,u,M,L){return`<div id="duel-row-${L}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${u}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((N,K)=>{const C=K<r.length-1?at(N,r[K+1]):null,q=!C||C==="#ff3333"||C==="#cc2222",D=C==="#00ff88"?"+2":C==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${L}" data-idx="${K}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ye({...N,note:ze(N,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${K<r.length-1?`<div class="duel-link duel-link-${L}" data-idx="${K}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${q?"rgba(255,255,255,0.12)":C};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${q?"none":`0 0 8px ${C}`}">
            ${D?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${C}">${D}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${L}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${d(r)} + ${a(r)} liens = <b style="color:#fff">${d(r)+a(r)}</b>
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

    ${o(s,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${o(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const g=()=>{const r=(u,M)=>e.querySelectorAll(u).forEach((L,N)=>{setTimeout(()=>{L.style.opacity="1",L.style.transform="translateY(0) scale(1)"},M+N*90)});r(".duel-card-home",150),r(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((u,M)=>{setTimeout(()=>{u.style.opacity="1"},M*70)}),900),setTimeout(()=>{const u=e.querySelector("#vs-label");u&&(u.style.opacity="1",u.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(M=>M.style.opacity="1")},1250),setTimeout(()=>{v("score-home",l,800),v("score-ai",p,800)},1500)};function v(r,u,M){const L=document.getElementById(r);if(!L)return;const N=performance.now(),K=C=>{const q=Math.min(1,(C-N)/M);L.textContent=Math.round(u*(1-Math.pow(1-q,3))),q<1?requestAnimationFrame(K):L.textContent=u};requestAnimationFrame(K)}requestAnimationFrame(g),t.attacker=n?"home":"ai";const y=n?ti():null;n&&(t.boostCard={value:y}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:s.map(r=>({name:r.name,note:ze(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:c.map(r=>({name:r.name,note:ze(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:l,aiTotal:p,text:`Duel milieu : ${t.clubName} ${l} – ${p} IA → ${n?t.clubName+" attaque":"IA attaque"}`});const T=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Xe(e,t,i),t.attacker==="ai"&&setTimeout(()=>fi(e,t,i),800)};setTimeout(()=>{const r=document.getElementById("score-home"),u=document.getElementById("score-ai"),M=document.getElementById(n?"duel-row-home":"duel-row-ai"),L=document.getElementById(n?"duel-row-ai":"duel-row-home"),N=n?r:u,K=n?u:r;N&&(N.style.fontSize="80px",N.style.color=n?"#FFD700":"#ff6b6b",N.style.animation="duelPulse .5s ease"+(n?", duelGlow 1.5s ease infinite .5s":"")),K&&(K.style.opacity="0.25"),setTimeout(()=>{M&&(M.style.transformOrigin="center",M.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",M.style.zIndex="5"),setTimeout(()=>{var q;const C=document.getElementById("duel-shock");if(C){const D=(q=L||M)==null?void 0:q.getBoundingClientRect(),X=e.querySelector(".match-screen").getBoundingClientRect();D&&(C.style.top=D.top-X.top+D.height/2+"px"),C.style.animation="shockwave .5s ease-out forwards"}L&&(L.style.transformOrigin="center",L.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var q;const C=document.getElementById("duel-finale");C&&(C.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${n?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${n?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${y}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,C.style.transition="opacity .45s ease",C.style.opacity="1",C.style.pointerEvents="auto",(q=document.getElementById("start-match-btn"))==null||q.addEventListener("click",T))},600)},700)},2800)}function Mo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Xe(e,t,i){var N,K,C,q,D,X,se,oe;const s=t.selected.map(P=>P.cardId),c=t.usedSubIds||[],d=t.homeSubs.filter(P=>!c.includes(P.cardId)),l=Object.values(t.homeTeam).flat().filter(P=>P.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(P=>(t.aiTeam[P]||[]).some(Y=>!Y.used)),n=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(P=>!P.used),o=t.phase==="attack"&&p&&n.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];t.log[t.log.length-1];const g=t.phase==="ai-attack"||t.phase==="ai-defense",v=t.phase==="attack",y=t.phase==="defense",T=t.phase==="finished",r=t.gcCards.filter(P=>!t.usedGc.includes(P.id)),u=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${nt((Y.players||[]).map(U=>({...U,used:!1})),"#ff6b6b",Y.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${nt((Y.players||[]).map(U=>({...U,used:!1})),"#00ff88",Y.total)}
          </div>`}const P=t.log[t.log.length-1];return P?'<div style="padding:2px 4px">'+Mo(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const P=window.innerWidth>=700,Y=($e,Ae,te)=>{var Ce,De;const re=(t.gcDefs||[]).find(I=>I.name===$e.gc_type),R={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[re==null?void 0:re.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Z={purple:"#b06ce0",light_blue:"#00d4ef"}[re==null?void 0:re.color]||"#b06ce0",ge=(re==null?void 0:re.name)||$e.gc_type,me=(re==null?void 0:re.effect)||((Ce=Ke[$e.gc_type])==null?void 0:Ce.desc)||"",xe=re!=null&&re.image_url?`/manager-wars/icons/${re.image_url}`:null,ae=((De=Ke[$e.gc_type])==null?void 0:De.icon)||"⚡",ue=Math.round(te*.22),Se=Math.round(te*.22),qe=te-ue-Se,Be=ge.length>12?7:9;return`<div class="gc-mini" data-gc-id="${$e.id}" data-gc-type="${$e.gc_type}"
          style="box-sizing:border-box;width:${Ae}px;height:${te}px;border-radius:10px;border:2px solid ${Z};background:${R};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${ue}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Be}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Ae-6}px">${ge}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${qe}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${xe?`<img src="${xe}" style="max-width:${Ae-10}px;max-height:${qe-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(qe*.55)}px">${ae}</span>`}
          </div>
          <div style="height:${Se}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${me.slice(0,38)}</span>
          </div>
        </div>`},U=($e,Ae)=>{var te;return`<div id="boost-card"
          style="box-sizing:border-box;width:${$e}px;height:${Ae}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ae*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Ae*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Ae*.09)}px;color:#000;font-weight:900">+${(te=t.boostCard)==null?void 0:te.value}</div>
          </div>`},G=($e,Ae)=>Ae?U(130,175):Y($e,130,175),ie=($e,Ae)=>Ae?U(68,95):Y($e,68,95),pe=P?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",be=T?`<button id="btn-results" style="${pe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:g?`<div style="${pe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:v?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:y?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${pe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Te=v||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Ee=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${P?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${d.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':d.map($e=>`<div class="sub-btn-col" data-sub-id="${$e.cardId}" style="cursor:pointer;flex-shrink:0">${Ye($e,76,100)}</div>`).join("")}
      </div>`,he=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ft(t.homeTeam,t.formation,t.phase,s,300,300,o)}
        </div>
      </div>`;return P?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ee}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${he}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${be}${Te}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${r.map($e=>G($e,!1)).join("")}
            ${u?G(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(t.homeTeam,t.formation,t.phase,s,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${r.map($e=>ie($e,!1)).join("")}
            ${u?ie(null,!0):""}
            <div id="sub-btn-main" style="cursor:${l?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${l?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${l?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${l?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${d.length}</div>
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
          <div>${be}${Te}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(P=>{var Y,U,G;if(P.type==="duel"){const ie=P.isGoal,pe=P.homeScored?"#FFD700":ie?"#ff6b6b":"rgba(255,255,255,0.3)",be=P.homeScored?"⚽ BUT !":ie?"⚽ BUT IA !":(Y=P.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${ie?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${pe};margin-bottom:4px">
                <div style="font-size:9px;color:${pe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${be}</div>
                ${(U=P.homePlayers)!=null&&U.length?`<div style="margin-bottom:3px">${nt(P.homePlayers,"rgba(255,255,255,0.7)",P.homeTotal)}</div>`:""}
                ${(G=P.aiPlayers)!=null&&G.length?`<div style="opacity:0.7">${nt(P.aiPlayers,"#ff6b6b",P.aiTotal)}</div>`:""}
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
  </div>`;function M(){const P=e.querySelector(".match-screen");if(!P)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.bottom="auto",P.style.height=Y+"px",P.style.minHeight=Y+"px",P.style.maxHeight=Y+"px",P.style.overflow="hidden";const U=e.querySelector("#mobile-action-bar"),G=e.querySelector("#mobile-play-area");U&&G&&(G.style.paddingBottom=U.offsetHeight+"px")}if(M(),setTimeout(M,120),setTimeout(M,400),setTimeout(M,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",M),window.visualViewport.addEventListener("scroll",M)),window.addEventListener("resize",M)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const P=e.querySelector(".terrain-wrapper svg");P&&(P.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let P=!1,Y=30;const U=()=>document.getElementById("match-timer"),G=()=>{const ie=U();if(!ie)return;const pe=String(Math.floor(Y/60)).padStart(2,"0"),be=String(Y%60).padStart(2,"0");ie.textContent=` ${pe}:${be}`,ie.style.color=P?"#ff2222":"#ff9500",ie.style.fontWeight="900"};G(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!P)P=!0,Y=15,G();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const ie=document.createElement("div");ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ie.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ie),setTimeout(()=>{ie.remove(),qt(e,t,i)},2500)}else G()},1e3)}(N=document.getElementById("match-quit"))==null||N.addEventListener("click",()=>{We(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,qt(e,t,i))}),(K=document.getElementById("view-ai"))==null||K.addEventListener("click",()=>Ro(t,i)),(C=document.getElementById("toggle-history"))==null||C.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.add("open")}),(q=document.getElementById("close-history"))==null||q.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.remove("open")}),(D=document.getElementById("btn-action"))==null||D.addEventListener("click",()=>{t.selected.length!==0&&(v?jo(e,t,i):y&&qo(e,t,i))}),(X=document.getElementById("btn-results"))==null||X.addEventListener("click",()=>qt(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>Co(P,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(P=>{P.addEventListener("click",()=>ai(e,t,i,null,P.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(P=>{P.addEventListener("click",()=>Do(P.dataset.gcId,P.dataset.gcType,e,t,i))}),(se=document.getElementById("boost-card"))==null||se.addEventListener("click",()=>No(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(P=>{P.addEventListener("click",()=>ai(e,t,i,P.dataset.subId))}),(oe=document.getElementById("sub-btn-main"))==null||oe.addEventListener("click",()=>ai(e,t,i))}function Co(e,t,i,s){const c=e.dataset.cardId,d=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===c);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){s.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[d]||[]).find(p=>p.cardId===c);l&&t.selected.push({...l,_role:d,_line:d})}Xe(i,t,s)}function Ai(e,t,i){e.matchId&&E.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function jo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ai(t,i,i.state.profile.id);const s=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),c=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(n=>n.cardId===a.cardId)||a,p=s&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...p?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),d=Nt(c,t.modifiers.home);t.pendingAttack={...d,players:[...c],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(p=>p.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Xe(e,t,i),setTimeout(()=>Fo(e,t,i),1200)}function qo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ai(t,i,i.state.profile.id);const s=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(n=>n.cardId===l.cardId)||l,_line:l._role})),c=Rt(s,t.modifiers.home);t.selected.forEach(l=>{const p=(t.homeTeam[l._role]||[]).find(n=>n.cardId===l.cardId);p&&(p.used=!0)});const d=Ot(t.pendingAttack.total,c.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Pe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const p=(t.homeTeam[l._role]||[]).find(n=>n.cardId===l.cardId)||l;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:Pe(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(d.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Xe(e,t,i),Zt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Tt(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Tt(e,t,i,"home-attack")}function fi(e,t,i){Ai(t,i,null);const s=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=tn(s,"attack",t.difficulty);if(!c.length){Wt(e,t,i);return}const d=Nt(c,t.modifiers.ai);t.pendingAttack={...d,players:c,side:"ai"},c.forEach(n=>{n.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${c.map(n=>n.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used),p=(t.homeSubs||[]).filter(n=>!(t.usedSubIds||[]).includes(n.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!p){t.aiScore++;const n={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Pe(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(n),t.pendingAttack=null,Xe(e,t,i),Zt(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Tt(e,t,i,"home-attack")});return}t.phase="defense",Xe(e,t,i)}function Fo(e,t,i){var n,o;const s=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=tn(s,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(g=>(t.aiTeam[g]||[]).filter(v=>!v.used)).length){t.homeScore++;const v={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((n=t.pendingAttack)==null?void 0:n.players)||[]).map(y=>({name:y.name,note:ze(y,y._line||y.job),portrait:Pe(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(v),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),Zt(v.homePlayers,t.homeScore,t.aiScore,!0,()=>{Tt(e,t,i,"ai-attack")});return}const a=c.length>0?Rt(c,t.modifiers.ai).total:0;c.forEach(g=>{g.used=!0});const l=Ot(t.pendingAttack.total,a,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(g=>({name:g.name,note:g._line==="MIL"?g.note_m:g.note_a,portrait:Pe(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:c.map(g=>({name:g.name,note:g._line==="GK"?g.note_g:g._line==="MIL"?g.note_m:g.note_d,portrait:Pe(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(l.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),Zt(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{Tt(e,t,i,"ai-attack")});return}else p.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,Tt(e,t,i,"ai-attack")}function Tt(e,t,i,s){if(t.round++,vn(t)){qt(e,t,i);return}if(s==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Wt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Wt(e,t,i);return}setTimeout(()=>fi(e,t,i),100);return}t.phase="attack",Xe(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Wt(e,t,i);return}t.phase="ai-attack",Xe(e,t,i),setTimeout(()=>fi(e,t,i),800)}}function vn(e){const t=["MIL","ATT","GK","DEF"].some(s=>(e.homeTeam[s]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(s=>(e.aiTeam[s]||[]).some(c=>!c.used));return!t&&!i}function Wt(e,t,i){vn(t)?qt(e,t,i):(t.phase="attack",Xe(e,t,i))}function Bo(e,t,i){const s=document.createElement("div");s.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=Pe(e),d=Pe(t),a=It[e.job]||"#555",l=It[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,n=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;s.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${a};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${c?`<img src="${c}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${p}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${n}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(s);let o=!1;const g=()=>{o||(o=!0,s.remove(),i())};s.addEventListener("click",g),setTimeout(g,2e3)}function Mt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ai(e,t,i,s=null,c=null){var y,T;if(t.phase!=="attack"){Mt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Mt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([r,u])=>(u||[]).filter(M=>M.used).map(M=>({...M,_line:M._line||r}))),a=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!d.length){Mt("Aucun joueur utilisé à remplacer");return}if(!a.length){Mt("Aucun remplaçant disponible");return}let l=Math.max(0,d.findIndex(r=>r.cardId===c));const p=((y=d[l])==null?void 0:y._line)||((T=d[l])==null?void 0:T.job);let n=s?Math.max(0,a.findIndex(r=>r.cardId===s)):Math.max(0,a.findIndex(r=>r.job===p)),o=!1;const g=document.createElement("div");g.id="sub-overlay",g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function v(){var C,q,D,X,se,oe;const r=d[l],u=a[n],M=Math.min(130,Math.round((window.innerWidth-90)/2)),L=Math.round(M*1.35),N=P=>`background:rgba(255,255,255,0.12);border:none;color:${P?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${P?"default":"pointer"};flex-shrink:0`;g.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${N(n===0)}" ${n===0?"disabled":""}>▲</button>
        <div>${u?Ye({...u,used:!1,boost:0},M,L):"<div>—</div>"}</div>
        <button id="in-down" style="${N(n>=a.length-1)}" ${n>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${n+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${N(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${r?Ye({...r,used:!1,boost:0},M,L):"<div>—</div>"}</div>
        <button id="out-down" style="${N(l>=d.length-1)}" ${l>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(C=g.querySelector("#sub-close"))==null||C.addEventListener("click",()=>g.remove()),(q=g.querySelector("#out-up"))==null||q.addEventListener("click",()=>{l>0&&(l--,v())}),(D=g.querySelector("#out-down"))==null||D.addEventListener("click",()=>{l<d.length-1&&(l++,v())}),(X=g.querySelector("#in-up"))==null||X.addEventListener("click",()=>{n>0&&(n--,v())}),(se=g.querySelector("#in-down"))==null||se.addEventListener("click",()=>{n<a.length-1&&(n++,v())});const K=(P,Y,U,G)=>{const ie=g.querySelector("#"+P);if(!ie)return;let pe=0;ie.addEventListener("touchstart",be=>{pe=be.touches[0].clientY},{passive:!0}),ie.addEventListener("touchend",be=>{const Te=be.changedTouches[0].clientY-pe;if(Math.abs(Te)<30)return;const Ee=Y();Te<0&&Ee<G-1?(U(Ee+1),v()):Te>0&&Ee>0&&(U(Ee-1),v())},{passive:!0})};K("in-panel",()=>n,P=>n=P,a.length),K("out-panel",()=>l,P=>l=P,d.length),(oe=g.querySelector("#sub-confirm"))==null||oe.addEventListener("click",P=>{if(P.preventDefault(),P.stopPropagation(),o)return;o=!0;const Y=d[l],U=a[n];if(!Y||!U)return;let G=null,ie=-1;for(const[be,Te]of Object.entries(t.homeTeam)){const Ee=(Te||[]).findIndex(he=>he.cardId===Y.cardId);if(Ee!==-1){G=be,ie=Ee;break}}if(ie===-1||!G){Mt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),g.remove();return}const pe={...U,_line:G,_col:Y._col||0,used:!1,boost:0};t.homeTeam[G].splice(ie,1,pe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(U.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:ze(Y,G),portrait:Pe(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:U.name,firstname:U.firstname,note:ze(U,G),portrait:Pe(U),job:U.job,country_code:U.country_code,rarity:U.rarity,clubName:U.clubName,clubLogo:U.clubLogo},text:`🔄 ${U.firstname} ${U.name} remplace ${Y.firstname} ${Y.name}`}),g.remove(),Bo(Y,U,()=>Xe(e,t,i))})}document.body.appendChild(g),v()}function Do(e,t,i,s,c){var T,r;const d=(s.gcDefs||[]).find(u=>u.name===t),a=Ke[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",n=(d==null?void 0:d.name)||t,o=(d==null?void 0:d.effect)||a.desc,g=d!=null&&d.image_url?`/manager-wars/icons/${d.image_url}`:null,v=a.icon||"⚡",y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",y.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${n.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${n}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${g?`<img src="${g}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${v}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(y),(T=y.querySelector("#gc-back"))==null||T.addEventListener("click",()=>y.remove()),(r=y.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{y.remove(),Po(e,t,i,s,c)})}function Kt(e,t,i,s,c,d){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function p(){var n,o;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(g=>{const v=g._line||g.job||"MIL",y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v]||"#555",T=ze(g,v)+(g.boost||0),r=l.find(u=>u.cardId===g.cardId);return`<div class="gc-pick-item" data-cid="${g.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${r?"#FFD700":"rgba(255,255,255,0.25)"};background:${y};overflow:hidden;cursor:pointer;flex-shrink:0;${g.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${g.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${T}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${v}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(n=a.querySelector("#gc-picker-close"))==null||n.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.cid,y=e.find(r=>r.cardId===v);if(!y)return;const T=l.findIndex(r=>r.cardId===v);T>-1?l.splice(T,1):l.length<t&&l.push(y),p()})}),(o=a.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{a.remove(),d(l)})}p(),document.body.appendChild(a)}const Go={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},s,c,d)=>{const a=Object.entries(s.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,p])=>p.filter(n=>!n.used).map(n=>({...n,_line:l})));return a.length?(Kt(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,s,l=>{l.forEach(p=>{const n=(s.homeTeam[p._line]||[]).find(o=>o.cardId===p.cardId);n&&(n.boost=(n.boost||0)+e,s.log.push({text:`⚡ +${e} sur ${n.name}`,type:"info"}))}),Xe(c,s,d)}),!0):(s.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Xe(c,s,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:s="ai"},c,d,a)=>{const l=s==="home"?c.homeTeam:c.aiTeam,p=s==="ai"?"adverse":"allié",n=Object.entries(l).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,g])=>g.filter(v=>!v.used).map(v=>({...v,_line:o})));return n.length?(Kt(n,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,d,c,o=>{o.forEach(g=>{const y=((s==="home"?c.homeTeam:c.aiTeam)[g._line]||[]).find(T=>T.cardId===g.cardId);y&&(y.boost=(y.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${y.name}${s==="ai"?" (IA)":""}`,type:"info"}))}),Xe(d,c,a)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),Xe(d,c,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},s,c,d)=>{const a=i==="home"?s.homeTeam:s.aiTeam,l=i==="ai"?"adverse":"allié",p=Object.entries(a).filter(([n])=>!t.length||t.includes(n)).flatMap(([n,o])=>o.filter(g=>!g.used).map(g=>({...g,_line:n})));return p.length?(Kt(p,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,c,s,n=>{n.forEach(o=>{const v=((i==="home"?s.homeTeam:s.aiTeam)[o._line]||[]).find(y=>y.cardId===o.cardId);v&&(v.used=!0,s.log.push({text:`❌ ${v.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Xe(c,s,d)}),!0):(s.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Xe(c,s,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,s,c)=>{const d=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(p=>p.used).map(p=>({...p,_line:a})));return d.length?(Kt(d,e,`Choisir ${e} joueur(s) à ressusciter`,s,i,a=>{a.forEach(l=>{const p=(i.homeTeam[l._line]||[]).find(n=>n.cardId===l.cardId);p&&(p.used=!1,i.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),Xe(s,i,c)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Xe(s,i,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Po(e,t,i,s,c){s.usedGc.push(e);const d=s.gcDefs||[],a=d.find(p=>p.name===t)||d.find(p=>{var n;return((n=p.name)==null?void 0:n.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const p=Go[a.effect_type];p?p(a.effect_params||{},s,i,c)||(l=!0):(c.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":s.modifiers.home.doubleAttack=!0,s.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":s.modifiers.home.shield=!0,s.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(s.homeTeam).flatMap(([n,o])=>(o||[]).filter(g=>g.used).map(g=>({...g,_line:n})));p.length?(p[0].used=!1,s.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):s.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":s.modifiers.ai.stolenNote=(s.modifiers.ai.stolenNote||0)+1,s.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...s.aiTeam.ATT||[],...s.aiTeam.MIL||[]].filter(n=>!n.used);if(p.length){const n=p.sort((o,g)=>ze(g,"ATT")-ze(o,"ATT"))[0];n.used=!0,s.log.push({text:`❄️ ${n.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":s.maxSubs++,s.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}E.from("cards").delete().eq("id",e).then(()=>{}),l&&Xe(i,s,c)}function No(e,t,i){const s=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!s.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${s.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${It[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ze(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(p=>p.cardId===d);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Xe(e,t,i)})})}function Zt(e,t,i,s,c){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(n,o)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${o%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][o%8]}
    </div>`).join("");d.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${a}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${s?"BUT !":"BUT IA !"}
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let l=!1;const p=()=>{l||(l=!0,d.remove(),setTimeout(()=>c(),50))};d.addEventListener("click",p),setTimeout(p,3500)}async function qt(e,t,i){var o,g;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:s}=i,c=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,a=c?"victoire":d?"nul":"defaite",l=Vn(t.mode,a);t.matchId&&await E.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?s.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(s.profile.credits||0)+l,matches_played:(s.profile.matches_played||0)+1};c?p.wins=(s.profile.wins||0)+1:d?p.draws=(s.profile.draws||0)+1:p.losses=(s.profile.losses||0)+1,await E.from("users").update(p).eq("id",s.profile.id),await i.refreshProfile();const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",n.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${c?"🏆":d?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${c?"Victoire !":d?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(n),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{n.remove(),We(e),i.navigate("home")}),(g=document.getElementById("res-replay"))==null||g.addEventListener("click",()=>{n.remove(),We(e),i.navigate("match",{matchMode:t.mode})})}function Ro(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ut(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function wn(e,t){var i,s;try{const c=(s=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:s.id;try{(E.getChannels?E.getChannels():[]).forEach(a=>{const l=a.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&E.removeChannel(a)})}catch(d){console.warn("[Random] cleanup canaux:",d)}c&&await E.rpc("cancel_matchmaking",{p_user_id:c}).catch(()=>{})}catch{}await ni(e,t,"random",({deckId:c,formation:d,starters:a,subsRaw:l,gcCardsEnriched:p,gcDefs:n,stadiumDef:o})=>{const g=v=>Oo(e,t,c,d,a,l,v,n||[],o);if(!p.length){g([]);return}ii(e,p,g)})}async function Oo(e,t,i,s,c,d,a=[],l=[],p=null){var N;const{state:n,navigate:o,toast:g}=t;let v=!1,y=null;et(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const T=async(K=!0)=>{v=!0,y&&(E.removeChannel(y),y=null),K&&await E.rpc("cancel_matchmaking",{p_user_id:n.profile.id}).catch(()=>{})};(N=document.getElementById("mm-cancel"))==null||N.addEventListener("click",async()=>{try{await T(!0)}catch{}We(e),o("home")});const r=async(K,C,q)=>{if(v)return;v=!0,y&&(E.removeChannel(y),y=null);const D=document.getElementById("mm-status");D&&(D.textContent="Adversaire trouvé !"),await new Promise(X=>setTimeout(X,600)),e.isConnected&&_n(e,t,K,q,a,l)},{data:u,error:M}=await E.rpc("try_matchmake",{p_user_id:n.profile.id,p_deck_id:i});if(M||!(u!=null&&u.success)){g("Erreur de matchmaking","error"),We(e),o("home");return}if(u.matched){r(u.match_id,u.opponent_id,!1);return}const L=document.getElementById("mm-status");L&&(L.textContent="En attente d'un autre joueur..."),y=E.channel("matchmaking-"+n.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${n.profile.id}`},K=>{const C=K.new;C.status==="matched"&&C.match_id&&r(C.match_id,C.matched_with,!0)}).subscribe()}async function Ho(e,t,i){const{state:s,navigate:c,toast:d}=t;try{(E.getChannels?E.getChannels():[]).forEach(n=>{const o=n.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&E.removeChannel(n)})}catch{}const{data:a}=await E.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!a){d("Match introuvable","error"),c("home");return}if(a.status==="finished"){d("Ce match est terminé","info"),c("home");return}const l=a.home_id===s.profile.id;_n(e,t,i,l,[],[])}async function _n(e,t,i,s,c=[],d=[]){const{state:a,navigate:l,toast:p}=t,n=s?"p1":"p2",o=s?"p2":"p1",g=(c||[]).map(I=>I.id),v=(c||[]).map(I=>({id:I.id,gc_type:I.gc_type,_gcDef:I._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:y}=await E.from("matches").select("*").eq("id",i).single();if(!y){p("Match introuvable","error"),l("home");return}async function T(){const[{data:I},{data:j},{data:w},{data:k}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:y.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:y.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",y.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",y.away_id).single()]),f=_=>({cardId:_.card_id,position:_.position,id:_.id,firstname:_.firstname,name:_.surname_encoded,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,clubName:_.club_encoded_name||null,clubLogo:_.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),m=((I==null?void 0:I.starters)||[]).map(_=>f(_)),x=((j==null?void 0:j.starters)||[]).map(_=>f(_)),b=(I==null?void 0:I.formation)||"4-4-2",h=(j==null?void 0:j.formation)||"4-4-2";let $=yt(m,b),A=yt(x,h);return stadiumDef&&s&&($=Ei($,stadiumDef)),{p1Team:$,p2Team:A,p1Subs:((I==null?void 0:I.subs)||[]).map(_=>f(_)),p2Subs:((j==null?void 0:j.subs)||[]).map(_=>f(_)),p1Formation:b,p2Formation:h,p1Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 1",p2Name:(k==null?void 0:k.club_name)||(k==null?void 0:k.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?g:[],gc_p2:s?[]:g,gcCardsFull_p1:s?v:[],gcCardsFull_p2:s?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=y.game_state&&Object.keys(y.game_state).length?y.game_state:null;if(!r)if(s){r=await T();const{data:I}=await E.from("matches").select("game_state").eq("id",i).single();!(I!=null&&I.game_state)||!Object.keys(I.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:y.home_id}).eq("id",i):r=I.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let I=0;I<30&&!r;I++){await new Promise(w=>setTimeout(w,400));const{data:j}=await E.from("matches").select("game_state").eq("id",i).single();j!=null&&j.game_state&&Object.keys(j.game_state).length&&(r=j.game_state)}if(!r){p("Erreur de synchronisation","error"),l("home");return}r.gc_p2=g,r.gcCardsFull_p2=v,await E.from("matches").update({game_state:r}).eq("id",i)}let u=!1,M=null,L=!1;const N=new Set,K=new Set;function C(I){var $,A;try{E.removeChannel(q)}catch{}const j=r[n+"Score"]||0,w=r[o+"Score"]||0;let k,f;I.winner_id?(k=I.winner_id===a.profile.id,f=!1):I.forfeit?(k=j>w,f=!1):(f=j===w,k=j>w),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const m=document.createElement("div");m.id="pvp-end-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const x=f?"🤝":k?"🏆":"😞",b=f?"MATCH NUL":k?"VICTOIRE !":"DÉFAITE",h=f?"#fff":k?"#FFD700":"#ff6b6b";m.innerHTML=`
      <div style="font-size:64px">${x}</div>
      <div style="font-size:26px;font-weight:900;color:${h}">${b}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${j} – ${w} ${r[o+"Name"]}</div>
      ${I.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${k?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(m),(A=m.querySelector("#pvp-end-home"))==null||A.addEventListener("click",()=>{m.remove(),We(e),l("home")})}const q=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},I=>{const j=I.new;try{if(j.status==="finished"||j.forfeit){if(u)return;u=!0,M&&(clearInterval(M),M=null),j.game_state&&(r=j.game_state),C(j);return}if(j.game_state){const w=r;r=j.game_state;const k=r._lastGC;if(k&&k.seq&&!K.has(k.seq)&&(K.add(k.seq),k.by!==n)){Ee(k.type,k.by,()=>G());return}const f=w[n+"Score"]||0,m=w[o+"Score"]||0,x=r[n+"Score"]||0,b=r[o+"Score"]||0,h=x>f,$=b>m;if((h||$)&&!N.has(r.round)){N.add(r.round);const A=[...r.log||[]].reverse().find(z=>z.isGoal),_=((A==null?void 0:A.homePlayers)||[]).map(z=>({name:z.name,note:z.note,portrait:z.portrait,job:z.job}));Te(_,x,b,h,()=>G());return}G()}}catch(w){console.error("[PvP] crash:",w)}}).subscribe();async function D(I){Object.assign(r,I),r.lastActionAt=new Date().toISOString();const{error:j}=await E.from("matches").update({game_state:r}).eq("id",i);j&&p("Erreur de synchronisation","error");try{G()}catch(w){console.error("[PvP] renderPvpScreen crash:",w)}}async function X(){if(u)return;u=!0,M&&(clearInterval(M),M=null);const I=s?y.away_id:y.home_id,j=s?"p2":"p1",w=s?"p1":"p2",k={...r,[j+"Score"]:3,[w+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:I,home_score:k.p1Score||0,away_score:k.p2Score||0,game_state:k}).eq("id",i)}catch{}try{E.removeChannel(q)}catch{}setTimeout(()=>{We(e),l("home")},800)}const se={BOOST_STAT:({value:I=1,count:j=1,roles:w=[]},k,f)=>{const m=k[n+"Team"],x=Object.entries(m).filter(([b])=>!w.length||w.includes(b)).flatMap(([b,h])=>h.filter($=>!$.used).map($=>({...$,_line:b})));if(!x.length){k.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),f(k);return}oe(x,j,`Choisir ${j} joueur(s) à booster (+${I})`,b=>{b.forEach(h=>{const $=(m[h._line]||[]).find(A=>A.cardId===h.cardId);$&&($.boost=($.boost||0)+I,k.log.push({text:`⚡ +${I} sur ${$.name}`,type:"info"}))}),k[n+"Team"]=m,f(k)})},DEBUFF_STAT:({value:I=1,count:j=1,roles:w=[],target:k="ai"},f,m)=>{const x=k==="home"?n:o,b=f[x+"Team"],h=k==="home"?"allié":"adverse",$=Object.entries(b).filter(([A])=>!w.length||w.includes(A)).flatMap(([A,_])=>_.map(z=>({...z,_line:A})));if(!$.length){f.log.push({text:`🎯 Aucun joueur ${h}`,type:"info"}),m(f);return}oe($,j,`Choisir ${j} joueur(s) ${h}(s) (-${I})`,A=>{A.forEach(_=>{const z=(b[_._line]||[]).find(S=>S.cardId===_.cardId);z&&(z.boost=(z.boost||0)-I,f.log.push({text:`🎯 -${I} sur ${z.name}`,type:"info"}))}),f[x+"Team"]=b,m(f)})},GRAY_PLAYER:({count:I=1,roles:j=[],target:w="ai"},k,f)=>{const m=w==="home"?n:o,x=k[m+"Team"],b=w==="home"?"allié":"adverse",h=Object.entries(x).filter(([$])=>!j.length||j.includes($)).flatMap(([$,A])=>A.filter(_=>!_.used).map(_=>({..._,_line:$})));if(!h.length){k.log.push({text:`❌ Aucun joueur ${b}`,type:"info"}),f(k);return}oe(h,I,`Choisir ${I} joueur(s) ${b}(s) à exclure`,$=>{const A="usedCardIds_"+m,_=new Set(k[A]||[]);$.forEach(z=>{const S=(x[z._line]||[]).find(F=>F.cardId===z.cardId);S&&(S.used=!0,_.add(z.cardId),k.log.push({text:`❌ ${S.name} exclu !`,type:"info"}))}),k[A]=[..._],k[m+"Team"]=x,f(k)})},REVIVE_PLAYER:({count:I=1,roles:j=[]},w,k)=>{const f=w[n+"Team"],m=Object.entries(f).filter(([x])=>!j.length||j.includes(x)).flatMap(([x,b])=>b.filter(h=>h.used).map(h=>({...h,_line:x})));if(!m.length){w.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),k(w);return}oe(m,I,`Choisir ${I} joueur(s) à ressusciter`,x=>{x.forEach(b=>{const h=(f[b._line]||[]).find($=>$.cardId===b.cardId);h&&(h.used=!1,w.log.push({text:`💫 ${h.name} ressuscité !`,type:"info"}))}),w[n+"Team"]=f,k(w)})},REMOVE_GOAL:({},I,j)=>{const w=o+"Score";I[w]>0?(I[w]--,I.log.push({text:"🚫 Dernier but annulé !",type:"info"})):I.log.push({text:"🚫 Aucun but à annuler",type:"info"}),j(I)},ADD_GOAL_DRAW:({},I,j)=>{I[n+"Score"]===I[o+"Score"]?(I[n+"Score"]++,I.log.push({text:"🎯 But bonus !",type:"info"})):I.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),j(I)},ADD_SUB:({value:I=1},j,w)=>{j.maxSubs=(j.maxSubs||3)+I,j.log.push({text:`🔄 +${I} remplacement(s)`,type:"info"}),w(j)},CUSTOM:({},I,j)=>j(I)};function oe(I,j,w,k){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let m=[];function x(){var h,$;const b=I.map(A=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",z=ze(A,A._line)+(A.boost||0),F=m.find(O=>O.cardId===A.cardId)?"#FFD700":"rgba(255,255,255,0.25)",B=A.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${F};background:${_};overflow:hidden;cursor:pointer;${B}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${A._line}</div>
        </div>`}).join("");f.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${w}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m.length}/${j}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${b}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${m.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${m.length}/${j})
          </button>
        </div>`,(h=f.querySelector("#pp-close"))==null||h.addEventListener("click",()=>f.remove()),f.querySelectorAll(".pp-item").forEach(A=>{A.addEventListener("click",()=>{const _=A.dataset.cid,z=I.find(F=>F.cardId===_),S=m.findIndex(F=>F.cardId===_);z&&(S>-1?m.splice(S,1):m.length<j&&m.push(z),x())})}),($=f.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{f.remove(),k(m)})}x(),document.body.appendChild(f)}async function P(I,j){const k=(r["gcCardsFull_"+n]||[]).find(b=>b.id===I),f=(k==null?void 0:k._gcDef)||(r.gcDefs||[]).find(b=>{var h;return b.name===j||((h=b.name)==null?void 0:h.toLowerCase().trim())===(j==null?void 0:j.toLowerCase().trim())}),m=[...r["usedGc_"+n]||[],I],x={type:j,by:n,seq:(r._gcAnimSeq||0)+1};K.add(x.seq),Ee(j,n,async()=>{if(f!=null&&f.effect_type&&f.effect_type!=="CUSTOM"){const h=se[f.effect_type];if(h){const $={...r};h(f.effect_params||{},$,async A=>{A["usedGc_"+n]=m,A._lastGC=x,A._gcAnimSeq=x.seq,await D(A)});return}}const b={...r};switch(j){case"Remplacement+":b.maxSubs=(b.maxSubs||3)+1,b.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const h=o+"Score";b[h]>0&&(b[h]--,b.log.push({text:"🚫 But annulé",type:"info"}));break}}b["usedGc_"+n]=m,b._lastGC=x,b._gcAnimSeq=x.seq,await D(b)})}function Y(I,j){const w="usedCardIds_"+I,k=new Set(r[w]||[]);j.forEach(f=>k.add(f)),r[w]=[...k]}function U(){for(const I of["p1","p2"]){const j=new Set(r["usedCardIds_"+I]||[]),w=r[I+"Team"];if(w)for(const k of["GK","DEF","MIL","ATT"])(w[k]||[]).forEach(f=>{f.used=j.has(f.cardId)})}}function G(){var Ue,Je,Ze,Qe,ot,gt;if(r.phase==="reveal")return ie();if(r.phase==="midfield")return be();if(r.phase==="finished")return De();const I=r[n+"Team"],j=r[o+"Team"];U();const w=r[n+"Score"],k=r[o+"Score"],f=r[n+"Name"],m=r[o+"Name"],x=r.phase===n+"-attack",b=r.phase===n+"-defense",h=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],$=h.map(de=>de.cardId),A=window.innerWidth>=700,_=r[n+"Subs"]||[],z=r["usedSubIds_"+n]||[],S=_.filter(de=>!z.includes(de.cardId)),F=r["gcCardsFull_"+n]||[],B=r["usedGc_"+n]||[],O=F.filter(de=>!B.includes(de.id)),H=r.boostOwner===n&&!r.boostUsed,W=!["GK","DEF","MIL","ATT"].some(de=>(j[de]||[]).some(_e=>!_e.used)),V=[...I.MIL||[],...I.ATT||[]].filter(de=>!de.used),ee=x&&W&&V.length===0?[...I.GK||[],...I.DEF||[]].filter(de=>!de.used).map(de=>de.cardId):[];function ne(de,_e,Q){var pt,ht;const ce=de._gcDef,J={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ce==null?void 0:ce.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",le={purple:"#b06ce0",light_blue:"#00d4ef"}[ce==null?void 0:ce.color]||"#b06ce0",Me=(ce==null?void 0:ce.name)||de.gc_type,ke=(ce==null?void 0:ce.effect)||((pt=Ke[de.gc_type])==null?void 0:pt.desc)||"",tt=ce!=null&&ce.image_url?`/manager-wars/icons/${ce.image_url}`:null,it=((ht=Ke[de.gc_type])==null?void 0:ht.icon)||"⚡",rt=Math.round(Q*.22),st=Math.round(Q*.22),ct=Q-rt-st,$t=Me.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${de.id}" data-gc-type="${de.gc_type}"
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
      </div>`}function fe(de,_e){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${de}px;height:${_e}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(_e*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(_e*.2)}px">⚡</div>
        <div style="font-size:${Math.round(_e*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const ye=(de,_e)=>_e?fe(130,175):ne(de,130,175),ve=(de,_e)=>_e?fe(68,95):ne(de,68,95),we=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ie=x?Se(n)?`<button id="pvp-action" style="${we};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${h.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${we};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:b?`<button id="pvp-action" style="${we};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${h.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${m}</div>`,Le=x&&!Se(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':x||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${h.length}/3 sélectionné(s)</div>`:"",Re=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${S.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':S.map(de=>`<div class="pvp-sub-btn" data-sub-id="${de.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(de,A?76:44,A?100:58)}</div>`).join("")}
    </div>`,je=x?"attack":b?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(I,r[n+"Formation"],je,$,300,300,ee)}
      </div>
    </div>`;function Fe(de){if(de.type==="duel"&&(de.homeTotal!=null||de.aiTotal!=null)){const _e=(de.homeTotal||0)>=(de.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(de.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(de.homePlayers||[]).map(Q=>dt(Q)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${_e?20:14}px;font-weight:900;color:${_e?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${de.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${_e?14:20}px;font-weight:900;color:${_e?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${de.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(de.aiPlayers||[]).map(Q=>dt(Q)).join("")}
            </div>
          </div>
          ${de.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${de.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${de.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${de.type==="goal"?700:400};padding:3px 2px">${de.text||""}</div>`}const Ve=(()=>{var _e,Q;if(b&&((_e=r.pendingAttack)!=null&&_e.players)){const ce=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${m} ATTAQUE — Défendez !</div>
          ${nt((ce.players||[]).map(J=>({...J,used:!1})),"#ff6b6b",ce.total)}
        </div>`}if(x&&((Q=r.pendingAttack)!=null&&Q.players)){const ce=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((ce.players||[]).map(J=>({...J,used:!1})),"#00ff88",ce.total)}
        </div>`}const de=(r.log||[]).slice(-1)[0];return de?'<div style="padding:2px 4px">'+Fe(de)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ne=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${w} – ${k}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",A?e.innerHTML=`
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
            ${O.map(de=>ye(de,!1)).join("")}
            ${H?ye(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(I,r[n+"Formation"],je,$,300,300,ee)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${O.map(de=>ve(de,!1)).join("")}
            ${H?ve(null,!0):""}
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
          <div>${Ie}${Le}</div>
        </div>
      </div>`;function He(){const de=e.querySelector(".match-screen");if(!de)return;const _e=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);de.style.height=_e+"px",de.style.minHeight=_e+"px",de.style.maxHeight=_e+"px",de.style.overflow="hidden";const Q=e.querySelector("#mobile-action-bar"),ce=e.querySelector("#mobile-play-area");Q&&ce&&(ce.style.paddingBottom=Q.offsetHeight+"px")}if(He(),setTimeout(He,120),setTimeout(He,400),L||(L=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",He),window.visualViewport.addEventListener("scroll",He)),window.addEventListener("resize",He)),function(){const _e=e.querySelector(".terrain-wrapper svg");_e&&(_e.removeAttribute("width"),_e.removeAttribute("height"),_e.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",_e.setAttribute("viewBox","-26 -26 352 352"),_e.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(de=>{de.addEventListener("click",()=>{if(!x&&!b)return;const _e=de.dataset.cardId,Q=de.dataset.role,ce=(I[Q]||[]).find(ke=>ke.cardId===_e);if(!ce||ce.used)return;const J=ee.includes(_e);if(x&&!["MIL","ATT"].includes(Q)&&!J)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const le=r["selected_"+n],Me=le.findIndex(ke=>ke.cardId===_e);Me>-1?le.splice(Me,1):le.length<3&&le.push({...ce,_role:Q}),G()})}),e.querySelectorAll(".match-used-hit").forEach(de=>{de.addEventListener("click",()=>Ae(de.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(de=>{de.addEventListener("click",()=>Ae())}),(Ue=e.querySelector("#pvp-sub-open"))==null||Ue.addEventListener("click",()=>Ae()),e.querySelectorAll(".pvp-gc-mini").forEach(de=>{de.addEventListener("click",()=>he(de.dataset.gcId,de.dataset.gcType))}),(Je=e.querySelector("#pvp-boost-card"))==null||Je.addEventListener("click",()=>$e()),(Ze=e.querySelector("#pvp-action"))==null||Ze.addEventListener("click",de=>{x?de.currentTarget.dataset.pass==="1"||!Se(n)?Z():ge():b&&me()}),(Qe=e.querySelector("#pvp-quit"))==null||Qe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&X()}),(ot=e.querySelector("#pvp-view-opp"))==null||ot.addEventListener("click",()=>re()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>R()),M&&(clearInterval(M),M=null),(x||b)&&!u){let de=30,_e=!1;const Q=()=>document.getElementById("pvp-timer"),ce=()=>{Q()&&(Q().textContent=de+"s",Q().style.color=_e?"#ff4444":"#fff")};ce(),M=setInterval(()=>{de--,de<0?_e?(clearInterval(M),M=null,x&&!Se(n)?Z():X()):(_e=!0,de=15,ce()):ce()},1e3)}}function ie(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await D({phase:"midfield"})},5e3)}let pe=!1;function be(){if(pe)return;const I=r[n+"Team"].MIL||[],j=r[o+"Team"].MIL||[];function w(O){return O.reduce((H,W)=>H+ze(W,"MIL"),0)}function k(O){let H=0;for(let W=0;W<O.length-1;W++){const V=at(O[W],O[W+1]);V==="#00ff88"?H+=2:V==="#FFD700"&&(H+=1)}return H}const f=w(I)+k(I),m=w(j)+k(j),x=f>=m;function b(O,H,W){return`<div id="duel-row-${W}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${H}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${O.map((V,ee)=>{const ne=ee<O.length-1?at(V,O[ee+1]):null,fe=!ne||ne==="#ff3333"||ne==="#cc2222",ye=ne==="#00ff88"?"+2":ne==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${W}" data-idx="${ee}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...V,note:ze(V,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ee<O.length-1?`<div class="duel-link duel-link-${W}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${fe?"rgba(255,255,255,0.12)":ne};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${fe?"none":`0 0 8px ${ne}`}">
              ${ye?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ne}">${ye}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${W}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${w(O)} + ${k(O)} liens = <b style="color:#fff">${w(O)+k(O)}</b>
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
      ${b(I,r[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${b(j,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const h=(O,H)=>e.querySelectorAll(O).forEach((W,V)=>{setTimeout(()=>{W.style.opacity="1",W.style.transform="translateY(0) scale(1)"},H+V*90)});h(".duel-card-me",150),h(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((O,H)=>setTimeout(()=>{O.style.opacity="1"},H*70)),900),setTimeout(()=>{const O=e.querySelector("#pvp-vs");O&&(O.style.opacity="1",O.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(H=>H.style.opacity="1")},1250);function $(O,H,W){const V=document.getElementById(O);if(!V)return;const ee=performance.now(),ne=fe=>{const ye=Math.min(1,(fe-ee)/W);V.textContent=Math.round(H*(1-Math.pow(1-ye,3))),ye<1?requestAnimationFrame(ne):V.textContent=H};requestAnimationFrame(ne)}setTimeout(()=>{$("pvp-score-me",f,800),$("pvp-score-opp",m,800)},1500);const A=r.p1Team.MIL||[],_=r.p2Team.MIL||[],z=w(A)+k(A),S=w(_)+k(_),F=z>=S?"p1":"p2";let B=r.boostValue;B==null&&(B=ti(),r.boostValue=B,r.boostOwner=F,r.boostUsed=!1),pe=!0,setTimeout(()=>{const O=e.querySelector("#duel-row-"+(x?"me":"opp")),H=e.querySelector("#duel-row-"+(x?"opp":"me")),W=document.getElementById("pvp-score-me"),V=document.getElementById("pvp-score-opp"),ee=x?W:V,ne=x?V:W;ee&&(ee.style.fontSize="80px",ee.style.color=x?"#FFD700":"#ff6b6b",ee.style.animation="duelPulse .5s ease"+(x?",duelGlow 1.5s ease infinite .5s":"")),ne&&(ne.style.opacity="0.25"),setTimeout(()=>{O&&(O.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",O.style.zIndex="5"),setTimeout(()=>{const fe=document.getElementById("duel-shock");fe&&(fe.style.animation="shockwave .5s ease-out forwards"),H&&(H.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var we;const fe=document.getElementById("pvp-duel-finale");if(!fe)return;const ye=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+B+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",ve=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;fe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(x?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ye+ve,fe.style.transition="opacity .45s ease",fe.style.opacity="1",fe.style.pointerEvents="auto",(we=document.getElementById("pvp-start-match"))==null||we.addEventListener("click",async()=>{const Ie=F;await D({phase:Ie+"-attack",attacker:Ie,round:1,boostValue:B,boostUsed:!1,boostOwner:Ie})})},600)},700)},2800)}function Te(I,j,w,k,f){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const x=Array.from({length:10},(A,_)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${_%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][_%8]}</div>`).join(""),b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};m.innerHTML=`
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
        ${j} – ${w}
      </div>
      ${I!=null&&I.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${I.map(A=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${b[A.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${A.portrait?`<img src="${A.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(A.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(m);let h=!1;const $=()=>{h||(h=!0,m.remove(),setTimeout(()=>f(),50))};m.addEventListener("click",$),setTimeout($,3500)}function Ee(I,j,w){var B,O;const k=(r.gcDefs||[]).find(H=>{var W;return H.name===I||((W=H.name)==null?void 0:W.toLowerCase().trim())===(I==null?void 0:I.toLowerCase().trim())}),f={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[k==null?void 0:k.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",m={purple:"#b06ce0",light_blue:"#00d4ef"}[k==null?void 0:k.color]||"#b06ce0",x=(k==null?void 0:k.name)||I,b=(k==null?void 0:k.effect)||((B=Ke[I])==null?void 0:B.desc)||"",h=k!=null&&k.image_url?`/manager-wars/icons/${k.image_url}`:null,$=((O=Ke[I])==null?void 0:O.icon)||"⚡",_=j===n?"Vous":r[j+"Name"]||"Adversaire",z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",z.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${m}66}50%{box-shadow:0 0 60px ${m}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${m};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${_} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${m};background:${f};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${x.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${x}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${h?`<img src="${h}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${b}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(z);let S=!1;const F=()=>{S||(S=!0,z.remove(),setTimeout(()=>w&&w(),50))};z.addEventListener("click",F),setTimeout(F,3e3)}function he(I,j){var z,S,F,B;const k=(r["gcCardsFull_"+n]||[]).find(O=>O.id===I),f=k==null?void 0:k._gcDef,m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[f==null?void 0:f.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[f==null?void 0:f.color]||"#b06ce0",b=(f==null?void 0:f.name)||j,h=(f==null?void 0:f.effect)||((z=Ke[j])==null?void 0:z.desc)||"Carte spéciale.",$=f!=null&&f.image_url?`/manager-wars/icons/${f.image_url}`:null,A=((S=Ke[j])==null?void 0:S.icon)||"⚡",_=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",_.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${x};background:${m};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${x}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${b.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${b}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${A}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(_),(F=_.querySelector("#pvp-gc-back"))==null||F.addEventListener("click",()=>_.remove()),(B=_.querySelector("#pvp-gc-use"))==null||B.addEventListener("click",()=>{_.remove(),P(I,j)})}function $e(){var k;const I=r[n+"Team"],j=Object.entries(I).flatMap(([f,m])=>(m||[]).filter(x=>!x.used).map(x=>({...x,_line:f})));if(!j.length)return;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",w.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${j.map(f=>{const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f._line]||"#555",x=ze(f,f._line)+(f.boost||0);return`<div class="bp-item" data-cid="${f.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${m};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${x}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(w),(k=w.querySelector("#bp-close"))==null||k.addEventListener("click",()=>w.remove()),w.querySelectorAll(".bp-item").forEach(f=>{f.addEventListener("click",async()=>{const m=f.dataset.cid,x=j.find(h=>h.cardId===m);if(!x)return;const b=(I[x._line]||[]).find(h=>h.cardId===m);b&&(b.boost=(b.boost||0)+r.boostValue),w.remove(),await D({[n+"Team"]:I,boostUsed:!0})})})}function Ae(I=null){var S,F;if(!(r.phase===n+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const w=r[n+"Team"],k=r["usedSubIds_"+n]||[],f=r.maxSubs||3;if(k.length>=f){p(`Maximum ${f} remplacements atteint`,"warning");return}const m=Object.entries(w).flatMap(([B,O])=>(O||[]).filter(H=>H.used).map(H=>({...H,_line:B}))),x=(r[n+"Subs"]||[]).filter(B=>!k.includes(B.cardId));if(!m.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!x.length){p("Aucun remplaçant disponible","warning");return}let b=Math.max(0,m.findIndex(B=>B.cardId===I));const h=((S=m[b])==null?void 0:S._line)||((F=m[b])==null?void 0:F.job);let $=Math.max(0,x.findIndex(B=>B.job===h)),A=!1;const _=document.createElement("div");_.id="pvp-sub-overlay",_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function z(){var ne,fe,ye,ve,we,Ie;const B=m[b],O=x[$],H=Math.min(130,Math.round((window.innerWidth-90)/2)),W=Math.round(H*1.35),V=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;_.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${k.length}/${f})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${V($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${O?Ye({...O,used:!1,boost:0},H,W):"<div>—</div>"}</div>
          <button id="pin-down" style="${V($>=x.length-1)}" ${$>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${x.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${V(b===0)}" ${b===0?"disabled":""}>▲</button>
          <div>${B?Ye({...B,used:!1,boost:0},H,W):"<div>—</div>"}</div>
          <button id="pout-down" style="${V(b>=m.length-1)}" ${b>=m.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${b+1}/${m.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ne=_.querySelector("#psub-close"))==null||ne.addEventListener("click",()=>_.remove()),(fe=_.querySelector("#pout-up"))==null||fe.addEventListener("click",()=>{b>0&&(b--,z())}),(ye=_.querySelector("#pout-down"))==null||ye.addEventListener("click",()=>{b<m.length-1&&(b++,z())}),(ve=_.querySelector("#pin-up"))==null||ve.addEventListener("click",()=>{$>0&&($--,z())}),(we=_.querySelector("#pin-down"))==null||we.addEventListener("click",()=>{$<x.length-1&&($++,z())});const ee=(Le,Re,je,Oe)=>{const Fe=_.querySelector("#"+Le);if(!Fe)return;let Ve=0;Fe.addEventListener("touchstart",Ne=>{Ve=Ne.touches[0].clientY},{passive:!0}),Fe.addEventListener("touchend",Ne=>{const He=Ne.changedTouches[0].clientY-Ve;if(Math.abs(He)<30)return;const Ue=Re();He<0&&Ue<Oe-1?(je(Ue+1),z()):He>0&&Ue>0&&(je(Ue-1),z())},{passive:!0})};ee("pin-panel",()=>$,Le=>$=Le,x.length),ee("pout-panel",()=>b,Le=>b=Le,m.length),(Ie=_.querySelector("#psub-confirm"))==null||Ie.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),A)return;A=!0;const Re=m[b],je=x[$];if(!Re||!je)return;const Oe=Re._line,Fe=(w[Oe]||[]).findIndex(He=>He.cardId===Re.cardId);if(Fe===-1){p("Erreur : joueur introuvable","error"),_.remove();return}const Ve={...je,_line:Oe,position:Re.position,used:!1,boost:0};w[Oe].splice(Fe,1,Ve);const Ne=[...k,je.cardId];_.remove(),te(Re,je,async()=>{await D({[n+"Team"]:w,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Ne})})})}document.body.appendChild(_),z()}function te(I,j,w){const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const m=(h,$,A)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${A}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${k[h.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(h)?`<img src="${Pe(h)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(h.name||"").slice(0,12)}</div>
    </div>`;f.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${m(j,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${m(I,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(f);let x=!1;const b=()=>{x||(x=!0,f.remove(),setTimeout(()=>w(),50))};f.addEventListener("click",b),setTimeout(b,2200)}function re(){var j;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",I.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(I),(j=I.querySelector("#pvp-opp-close"))==null||j.addEventListener("click",()=>I.remove())}function R(){var w;const I=r.log||[],j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",j.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${I.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...I].reverse().map(k=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${k.type==="goal"?"#FFD700":k.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${k.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(j),(w=j.querySelector("#pvp-hist-close"))==null||w.addEventListener("click",()=>j.remove())}async function Z(){if(r.phase!==n+"-attack")return;const I=n==="p1"?"p2":"p1",j=(r.round||0)+1,w=[...r.log||[]];w.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const k=qe(r),f=Se(I),m=k||!f?"finished":I+"-attack";await D({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:m,attacker:I,round:j,log:w}),m==="finished"&&await Ce(r)}async function ge(){const I=r[n+"Team"],j=!["GK","DEF","MIL","ATT"].some(m=>(r[o+"Team"][m]||[]).some(x=>!x.used)),w=(r["selected_"+n]||[]).map(m=>{const x=(I[m._role]||[]).find(z=>z.cardId===m.cardId)||m,b=j&&["GK","DEF"].includes(m._role),h=I[m._role]||[],$=h.findIndex(z=>z.cardId===m.cardId),A=lt(h.length),_=$>=0?A[$]:x._col??1;return{...x,_line:m._role,_col:_,...b?{note_a:Math.max(1,Number(x.note_a)||0)}:{}}});if(!w.length)return;const k=Nt(w,r.modifiers[n]||{});Y(n,w.map(m=>m.cardId)),w.forEach(m=>{const x=(I[m._role]||[]).find(b=>b.cardId===m.cardId);x&&(x.used=!0)}),r["selected_"+n]=[],G();const f=[...r.log||[]];if(j){const m=(r[n+"Score"]||0)+1,x=w.map(_=>({name:_.name,note:ze(_,_._line||"ATT"),portrait:Pe(_),job:_.job}));f.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:x,homeTotal:k.total,aiTotal:0});const b=(r.round||0)+1,h=n==="p1"?"p2":"p1",$={...r,[n+"Team"]:I,[n+"Score"]:m},A=qe($);N.add(b),Te(x,m,r[o+"Score"]||0,!0,async()=>{await D({[n+"Team"]:I,[n+"Score"]:m,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:A?"finished":h+"-attack",attacker:h,round:b,log:f}),A&&await Ce({...r,[n+"Score"]:m})});return}f.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${k.total})`}),await D({[n+"Team"]:I,[o+"Team"]:r[o+"Team"],pendingAttack:{...k,players:w,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:f})}async function me(){const I=r[n+"Team"],j=(r["selected_"+n]||[]).map(B=>{const O=(I[B._role]||[]).find(ne=>ne.cardId===B.cardId)||B,H=I[B._role]||[],W=H.findIndex(ne=>ne.cardId===B.cardId),V=lt(H.length),ee=W>=0?V[W]:O._col??1;return{...O,_line:B._role,_col:ee}}),w=Rt(j,r.modifiers[n]||{});Y(n,j.map(B=>B.cardId)),j.forEach(B=>{const O=(I[B._role]||[]).find(H=>H.cardId===B.cardId);O&&(O.used=!0)}),r["selected_"+n]=[],G();const k=Ot(r.pendingAttack.total,w.total,r.modifiers[n]||{}),f=r.pendingAttack.side,m=k==="attack"||(k==null?void 0:k.goal),x=f==="p1"?"p2":"p1",b=(r.round||0)+1,h=(r.pendingAttack.players||[]).map(B=>({name:B.name,note:ze(B,B._line||"ATT"),portrait:Pe(B),job:B.job})),$=[...r.log||[]];$.push({type:"duel",isGoal:m,homeScored:m&&f===n,text:m?`⚽ BUT de ${r[f+"Name"]} ! (${r.pendingAttack.total} vs ${w.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${w.total})`,homePlayers:h,aiPlayers:j.map(B=>({name:B.name,note:ze(B,B._line||"DEF"),portrait:Pe(B),job:B.job})),homeTotal:r.pendingAttack.total,aiTotal:w.total});const A=m?(r[f+"Score"]||0)+1:r[f+"Score"]||0,_={...r,[n+"Team"]:I,[f+"Score"]:A},z=qe(_),S=z?"finished":x+"-attack",F=async()=>{await D({[n+"Team"]:I,[o+"Team"]:r[o+"Team"],[f+"Score"]:A,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:S,attacker:x,round:b,log:$}),(S==="finished"||z)&&await Ce({...r,[f+"Score"]:A})};if(m){const B=f===n,O=B?A:r[n+"Score"]||0,H=B?r[o+"Score"]||0:A;N.add(b),Te(h,O,H,B,F)}else await F()}function xe(I){return["MIL","ATT"].some(j=>(I[j]||[]).some(w=>!w.used))}function ae(I){return["GK","DEF","MIL","ATT"].some(j=>(I[j]||[]).some(w=>!w.used))}function ue(I){return ae(I)&&!xe(I)}function Se(I){const j=r[I+"Team"],w=r[(I==="p1"?"p2":"p1")+"Team"];return!!(xe(j)||!ae(w)&&ue(j))}function qe(I){const j=["MIL","ATT"].some($=>(I.p1Team[$]||[]).some(A=>!A.used)),w=["MIL","ATT"].some($=>(I.p2Team[$]||[]).some(A=>!A.used)),k=ae(I.p1Team),f=ae(I.p2Team);return!j&&!(!f&&k)&&(!w&&!(!k&&f))}function Be(I){const j=I.p1Score||0,w=I.p2Score||0;return j===w?null:j>w?y.home_id:y.away_id}async function Ce(I){try{const j=Be(I),w=j?y.home_id===j?y.away_id:y.home_id:null;await E.from("matches").update({status:"finished",winner_id:j,home_score:I.p1Score||0,away_score:I.p2Score||0}).eq("id",i),j&&w&&updateEvolutiveCards(j,w).catch(()=>{})}catch(j){console.error("[PvP] finishMatch:",j)}}function De(){var f;const I=r[n+"Score"],j=r[o+"Score"],w=I>j,k=I===j;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${w?"🏆":k?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${w?"Victoire !":k?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${I} - ${j}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(f=document.getElementById("pvp-home"))==null||f.addEventListener("click",()=>{try{E.removeChannel(q)}catch{}We(e),l("home")})}G()}const Uo=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:wn,resumePvpMatch:Ho},Symbol.toStringTag,{value:"Module"}));async function Vo(e,t,i,s){var c,d;try{const a=(d=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:d.id;try{(E.getChannels?E.getChannels():[]).forEach(p=>{const n=p.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&E.removeChannel(p)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}a&&(await E.rpc("cancel_matchmaking",{p_user_id:a}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",a).then(()=>{},()=>{}))}catch{}await ni(e,t,"random",({deckId:a,formation:l,starters:p,subsRaw:n,gcCardsEnriched:o,gcDefs:g,stadiumDef:v})=>{const y=T=>Ko(e,t,a,l,p,n,T,g||[],i,s);if(!o.length){y([]);return}ii(e,o,y)})}async function Ko(e,t,i,s,c,d,a=[],l=[],p,n){var se;const{state:o,navigate:g,toast:v}=t,y=o.profile.id;let T=!1,r=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:y})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",y)}catch{}const u=(oe,P,Y,U)=>{var G;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${P?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${P?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${P?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${n}</div>
            <div style="font-size:11px;color:${P?"#22c55e":"#aaa"}">${P?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!P&&oe?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(G=document.getElementById("lobby-cancel"))==null||G.addEventListener("click",async()=>{T=!0,r&&(E.removeChannel(r),r=null),Y&&await E.from("friend_match_invites").update({status:"declined"}).eq("id",Y),We(e),g("home")})},M=async(oe,P)=>{T=!0,r&&(E.removeChannel(r),r=null),await new Promise(Y=>setTimeout(Y,600)),e.isConnected&&Yo(e,t,oe,P,a,l)},{data:L}=await E.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${y},invitee_id.eq.${p}),and(inviter_id.eq.${p},invitee_id.eq.${y})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let N,K;if(L&&L.inviter_id===p)K=!1,N=L.id,await E.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",N);else{K=!0;const{data:oe,error:P}=await E.from("friend_match_invites").insert({inviter_id:y,invitee_id:p,friend_id:p,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(P||!oe){v("Erreur création invitation","error"),We(e),g("home");return}N=oe.id}if(u(!0,!K,N),!K){const oe={home_id:p,away_id:y,home_deck_id:L.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},P=await E.from("matches").insert(oe).select().single(),Y=P.data;if(!Y){v("Erreur création match: "+(((se=P.error)==null?void 0:se.message)||""),"error"),We(e),g("home");return}await E.from("friend_match_invites").update({match_id:Y.id,status:"matched"}).eq("id",N),M(Y.id,!1);return}let C=!1;const q=oe=>{T||C||(oe.status==="matched"&&oe.match_id?(C=!0,clearInterval(D),clearInterval(X),M(oe.match_id,!0)):oe.status==="declined"?(clearInterval(D),clearInterval(X),v(`${n} a décliné l'invitation`,"warning"),We(e),g("home")):oe.invitee_ready&&u(!0,!0,N))},D=setInterval(()=>{if(T){clearInterval(D);return}E.from("matchmaking_queue").delete().eq("user_id",y).then(()=>{},()=>{})},3e3),X=setInterval(async()=>{if(T||C){clearInterval(X);return}const{data:oe}=await E.from("friend_match_invites").select("*").eq("id",N).maybeSingle();oe&&q(oe)},1200);r=E.channel("friend-invite-"+N).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${N}`},oe=>q(oe.new)).subscribe()}async function Yo(e,t,i,s,c=[],d=[]){const{state:a,navigate:l,toast:p}=t,n=s?"p1":"p2",o=s?"p2":"p1",g=(c||[]).map(w=>w.id),v=(c||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:y}=await E.from("matches").select("*").eq("id",i).single();if(!y){p("Match introuvable","error"),l("home");return}async function T(){const[{data:w},{data:k},{data:f},{data:m}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:y.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:y.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",y.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",y.away_id).single()]),x=_=>({cardId:_.card_id,position:_.position,id:_.id,firstname:_.firstname,name:_.surname_encoded,country_code:_.country_code,club_id:_.club_id,job:_.job,job2:_.job2,note_g:Number(_.note_g)||0,note_d:Number(_.note_d)||0,note_m:Number(_.note_m)||0,note_a:Number(_.note_a)||0,rarity:_.rarity,skin:_.skin,hair:_.hair,hair_length:_.hair_length,clubName:_.club_encoded_name||null,clubLogo:_.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),b=((w==null?void 0:w.starters)||[]).map(_=>x(_)),h=((k==null?void 0:k.starters)||[]).map(_=>x(_)),$=(w==null?void 0:w.formation)||"4-4-2",A=(k==null?void 0:k.formation)||"4-4-2";return{p1Team:yt(b,$),p2Team:yt(h,A),p1Subs:((w==null?void 0:w.subs)||[]).map(_=>x(_)),p2Subs:((k==null?void 0:k.subs)||[]).map(_=>x(_)),p1Formation:$,p2Formation:A,p1Name:(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"Joueur 1",p2Name:(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?g:[],gc_p2:s?[]:g,gcCardsFull_p1:s?v:[],gcCardsFull_p2:s?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=y.game_state&&Object.keys(y.game_state).length?y.game_state:null;if(!r)if(s){r=await T();const{data:w}=await E.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:y.home_id}).eq("id",i):r=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let w=0;w<60&&!r;w++){await new Promise(f=>setTimeout(f,400));const{data:k}=await E.from("matches").select("game_state").eq("id",i).single();k!=null&&k.game_state&&Object.keys(k.game_state).length&&(r=k.game_state)}if(!r){p("Erreur de synchronisation","error"),l("home");return}r.gc_p2=g,r.gcCardsFull_p2=v,await E.from("matches").update({game_state:r}).eq("id",i)}let u=!1,M=!1,L=!1,N=null,K=!1;const C=new Set,q=new Set;function D(w){var _,z;try{E.removeChannel(X)}catch{}const k=r[n+"Score"]||0,f=r[o+"Score"]||0;if(!L){L=!0;const S=w.winner_id||(k>f?a.profile.id:f>k?"opp":null),F=S===a.profile.id?"win":S?"loss":null;F&&yi(()=>Promise.resolve().then(()=>on),void 0).then(B=>B.applyOwnEvolution(a.profile.id,F)).catch(()=>{})}if(!M){const S=r.p1Score||0,F=r.p2Score||0,B=(r.usedGc_p1||[]).length,O=(r.usedGc_p2||[]).length,H=w.winner_id||(S>F?y.home_id:F>S?y.away_id:null);(H?a.profile.id===H:a.profile.id<(s?y.away_id:y.home_id))&&(M=!0,Xi({player1Id:y.home_id,player2Id:y.away_id,score1:S,score2:F,gc1:B,gc2:O}).catch(V=>console.warn("[FriendMatch] updateStats:",V)))}let m,x;w.winner_id?(m=w.winner_id===a.profile.id,x=!1):w.forfeit?(m=k>f,x=!1):(x=k===f,m=k>f),(_=document.getElementById("pvp-end-overlay"))==null||_.remove();const b=document.createElement("div");b.id="pvp-end-overlay",b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const h=x?"🤝":m?"🏆":"😞",$=x?"MATCH NUL":m?"VICTOIRE !":"DÉFAITE",A=x?"#fff":m?"#FFD700":"#ff6b6b";b.innerHTML=`
      <div style="font-size:64px">${h}</div>
      <div style="font-size:26px;font-weight:900;color:${A}">${$}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${k} – ${f} ${r[o+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${m?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(b),(z=b.querySelector("#pvp-end-home"))==null||z.addEventListener("click",()=>{b.remove(),We(e),l("home")})}const X=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{const k=w.new;try{if(k.status==="finished"||k.forfeit){if(u)return;u=!0,N&&(clearInterval(N),N=null),k.game_state&&(r=k.game_state),D(k);return}if(k.game_state){const f=r;r=k.game_state;const m=r._lastGC;if(m&&m.seq&&!q.has(m.seq)&&(q.add(m.seq),m.by!==n)){$e(m.type,m.by,()=>pe());return}const x=f[n+"Score"]||0,b=f[o+"Score"]||0,h=r[n+"Score"]||0,$=r[o+"Score"]||0,A=h>x,_=$>b;if((A||_)&&!C.has(r.round)){C.add(r.round);const z=[...r.log||[]].reverse().find(F=>F.isGoal),S=((z==null?void 0:z.homePlayers)||[]).map(F=>({name:F.name,note:F.note,portrait:F.portrait,job:F.job}));he(S,h,$,A,()=>pe());return}pe()}}catch(f){console.error("[PvP] crash:",f)}}).subscribe();async function se(w){Object.assign(r,w),r.lastActionAt=new Date().toISOString();const{error:k}=await E.from("matches").update({game_state:r}).eq("id",i);k&&p("Erreur de synchronisation","error");try{pe()}catch(f){console.error("[PvP] renderPvpScreen crash:",f)}}async function oe(){if(u)return;u=!0,N&&(clearInterval(N),N=null);const w=s?y.away_id:y.home_id,k=s?"p2":"p1",f=s?"p1":"p2",m={...r,[k+"Score"]:3,[f+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:w,home_score:m.p1Score||0,away_score:m.p2Score||0,game_state:m}).eq("id",i)}catch{}try{E.removeChannel(X)}catch{}setTimeout(()=>{We(e),l("home")},800)}const P={BOOST_STAT:({value:w=1,count:k=1,roles:f=[]},m,x)=>{const b=m[n+"Team"],h=Object.entries(b).filter(([$])=>!f.length||f.includes($)).flatMap(([$,A])=>A.filter(_=>!_.used).map(_=>({..._,_line:$})));if(!h.length){m.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(m);return}Y(h,k,`Choisir ${k} joueur(s) à booster (+${w})`,$=>{$.forEach(A=>{const _=(b[A._line]||[]).find(z=>z.cardId===A.cardId);_&&(_.boost=(_.boost||0)+w,m.log.push({text:`⚡ +${w} sur ${_.name}`,type:"info"}))}),m[n+"Team"]=b,x(m)})},DEBUFF_STAT:({value:w=1,count:k=1,roles:f=[],target:m="ai"},x,b)=>{const h=m==="home"?n:o,$=x[h+"Team"],A=m==="home"?"allié":"adverse",_=Object.entries($).filter(([z])=>!f.length||f.includes(z)).flatMap(([z,S])=>S.map(F=>({...F,_line:z})));if(!_.length){x.log.push({text:`🎯 Aucun joueur ${A}`,type:"info"}),b(x);return}Y(_,k,`Choisir ${k} joueur(s) ${A}(s) (-${w})`,z=>{z.forEach(S=>{const F=($[S._line]||[]).find(B=>B.cardId===S.cardId);F&&(F.boost=(F.boost||0)-w,x.log.push({text:`🎯 -${w} sur ${F.name}`,type:"info"}))}),x[h+"Team"]=$,b(x)})},GRAY_PLAYER:({count:w=1,roles:k=[],target:f="ai"},m,x)=>{const b=f==="home"?n:o,h=m[b+"Team"],$=f==="home"?"allié":"adverse",A=Object.entries(h).filter(([_])=>!k.length||k.includes(_)).flatMap(([_,z])=>z.filter(S=>!S.used).map(S=>({...S,_line:_})));if(!A.length){m.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),x(m);return}Y(A,w,`Choisir ${w} joueur(s) ${$}(s) à exclure`,_=>{const z="usedCardIds_"+b,S=new Set(m[z]||[]);_.forEach(F=>{const B=(h[F._line]||[]).find(O=>O.cardId===F.cardId);B&&(B.used=!0,S.add(F.cardId),m.log.push({text:`❌ ${B.name} exclu !`,type:"info"}))}),m[z]=[...S],m[b+"Team"]=h,x(m)})},REVIVE_PLAYER:({count:w=1,roles:k=[]},f,m)=>{const x=f[n+"Team"],b=Object.entries(x).filter(([h])=>!k.length||k.includes(h)).flatMap(([h,$])=>$.filter(A=>A.used).map(A=>({...A,_line:h})));if(!b.length){f.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),m(f);return}Y(b,w,`Choisir ${w} joueur(s) à ressusciter`,h=>{h.forEach($=>{const A=(x[$._line]||[]).find(_=>_.cardId===$.cardId);A&&(A.used=!1,f.log.push({text:`💫 ${A.name} ressuscité !`,type:"info"}))}),f[n+"Team"]=x,m(f)})},REMOVE_GOAL:({},w,k)=>{const f=o+"Score";w[f]>0?(w[f]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),k(w)},ADD_GOAL_DRAW:({},w,k)=>{w[n+"Score"]===w[o+"Score"]?(w[n+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),k(w)},ADD_SUB:({value:w=1},k,f)=>{k.maxSubs=(k.maxSubs||3)+w,k.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),f(k)},CUSTOM:({},w,k)=>k(w)};function Y(w,k,f,m){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let b=[];function h(){var A,_;const $=w.map(z=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",F=ze(z,z._line)+(z.boost||0),O=b.find(W=>W.cardId===z.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=z.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${O};background:${S};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${F}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${z._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${f}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${b.length}/${k}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${$}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${b.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${b.length}/${k})
          </button>
        </div>`,(A=x.querySelector("#pp-close"))==null||A.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(z=>{z.addEventListener("click",()=>{const S=z.dataset.cid,F=w.find(O=>O.cardId===S),B=b.findIndex(O=>O.cardId===S);F&&(B>-1?b.splice(B,1):b.length<k&&b.push(F),h())})}),(_=x.querySelector("#pp-confirm"))==null||_.addEventListener("click",()=>{x.remove(),m(b)})}h(),document.body.appendChild(x)}async function U(w,k){const m=(r["gcCardsFull_"+n]||[]).find($=>$.id===w),x=(m==null?void 0:m._gcDef)||(r.gcDefs||[]).find($=>{var A;return $.name===k||((A=$.name)==null?void 0:A.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),b=[...r["usedGc_"+n]||[],w],h={type:k,by:n,seq:(r._gcAnimSeq||0)+1};q.add(h.seq),$e(k,n,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const A=P[x.effect_type];if(A){const _={...r};A(x.effect_params||{},_,async z=>{z["usedGc_"+n]=b,z._lastGC=h,z._gcAnimSeq=h.seq,await se(z)});return}}const $={...r};switch(k){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const A=o+"Score";$[A]>0&&($[A]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+n]=b,$._lastGC=h,$._gcAnimSeq=h.seq,await se($)})}function G(w,k){const f="usedCardIds_"+w,m=new Set(r[f]||[]);k.forEach(x=>m.add(x)),r[f]=[...m]}function ie(){for(const w of["p1","p2"]){const k=new Set(r["usedCardIds_"+w]||[]),f=r[w+"Team"];if(f)for(const m of["GK","DEF","MIL","ATT"])(f[m]||[]).forEach(x=>{x.used=k.has(x.cardId)})}}function pe(){var Ze,Qe,ot,gt,de,_e;if(r.phase==="reveal")return be();if(r.phase==="midfield")return Ee();if(r.phase==="finished")return j();const w=r[n+"Team"],k=r[o+"Team"];ie();const f=r[n+"Score"],m=r[o+"Score"],x=r[n+"Name"],b=r[o+"Name"],h=r.phase===n+"-attack",$=r.phase===n+"-defense",A=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],_=A.map(Q=>Q.cardId),z=window.innerWidth>=700,S=r[n+"Subs"]||[],F=r["usedSubIds_"+n]||[],B=S.filter(Q=>!F.includes(Q.cardId)),O=r["gcCardsFull_"+n]||[],H=r["usedGc_"+n]||[],W=O.filter(Q=>!H.includes(Q.id)),V=r.boostOwner===n&&!r.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(Q=>(k[Q]||[]).some(ce=>!ce.used)),ne=[...w.MIL||[],...w.ATT||[]].filter(Q=>!Q.used),fe=h&&ee&&ne.length===0?[...w.GK||[],...w.DEF||[]].filter(Q=>!Q.used).map(Q=>Q.cardId):[];function ye(Q,ce,J){var kt,Ht;const le=Q._gcDef,Me={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[le==null?void 0:le.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ke={purple:"#b06ce0",light_blue:"#00d4ef"}[le==null?void 0:le.color]||"#b06ce0",tt=(le==null?void 0:le.name)||Q.gc_type,it=(le==null?void 0:le.effect)||((kt=Ke[Q.gc_type])==null?void 0:kt.desc)||"",rt=le!=null&&le.image_url?`/manager-wars/icons/${le.image_url}`:null,st=((Ht=Ke[Q.gc_type])==null?void 0:Ht.icon)||"⚡",ct=Math.round(J*.22),$t=Math.round(J*.22),pt=J-ct-$t,ht=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}"
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
      </div>`}function ve(Q,ce){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Q}px;height:${ce}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ce*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ce*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ce*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const we=(Q,ce)=>ce?ve(130,175):ye(Q,130,175),Ie=(Q,ce)=>ce?ve(68,95):ye(Q,68,95),Le=z?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Re=h?Be(n)?`<button id="pvp-action" style="${Le};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${A.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Le};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${Le};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${A.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${b}</div>`,je=h&&!Be(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':h||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${A.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${z?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${B.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':B.map(Q=>`<div class="pvp-sub-btn" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(Q,z?76:44,z?100:58)}</div>`).join("")}
    </div>`,Fe=h?"attack":$?"defense":"idle",Ve=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(w,r[n+"Formation"],Fe,_,300,300,fe)}
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
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${b} ATTAQUE — Défendez !</div>
          ${nt((le.players||[]).map(Me=>({...Me,used:!1})),"#ff6b6b",le.total)}
        </div>`}if(h&&((J=r.pendingAttack)!=null&&J.players)){const le=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((le.players||[]).map(Me=>({...Me,used:!1})),"#00ff88",le.total)}
        </div>`}const Q=(r.log||[]).slice(-1)[0];return Q?'<div style="padding:2px 4px">'+Ne(Q)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ue=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${f} – ${m}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${b}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${He}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",z?e.innerHTML=`
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
            ${W.map(Q=>we(Q,!1)).join("")}
            ${V?we(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ue}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(w,r[n+"Formation"],Fe,_,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${W.map(Q=>Ie(Q,!1)).join("")}
            ${V?Ie(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${h&&B.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${h&&B.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${h&&B.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${h&&B.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${B.length}</div>
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
          <div>${Re}${je}</div>
        </div>
      </div>`;function Je(){const Q=e.querySelector(".match-screen");if(!Q)return;const ce=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Q.style.height=ce+"px",Q.style.minHeight=ce+"px",Q.style.maxHeight=ce+"px",Q.style.overflow="hidden";const J=e.querySelector("#mobile-action-bar"),le=e.querySelector("#mobile-play-area");J&&le&&(le.style.paddingBottom=J.offsetHeight+"px")}if(Je(),setTimeout(Je,120),setTimeout(Je,400),K||(K=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Je),window.visualViewport.addEventListener("scroll",Je)),window.addEventListener("resize",Je)),function(){const ce=e.querySelector(".terrain-wrapper svg");ce&&(ce.removeAttribute("width"),ce.removeAttribute("height"),ce.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ce.setAttribute("viewBox","-26 -26 352 352"),ce.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>{if(!h&&!$)return;const ce=Q.dataset.cardId,J=Q.dataset.role,le=(w[J]||[]).find(it=>it.cardId===ce);if(!le||le.used)return;const Me=fe.includes(ce);if(h&&!["MIL","ATT"].includes(J)&&!Me)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const ke=r["selected_"+n],tt=ke.findIndex(it=>it.cardId===ce);tt>-1?ke.splice(tt,1):ke.length<3&&ke.push({...le,_role:J}),pe()})}),e.querySelectorAll(".match-used-hit").forEach(Q=>{Q.addEventListener("click",()=>re(Q.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(Q=>{Q.addEventListener("click",()=>re())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>re()),e.querySelectorAll(".pvp-gc-mini").forEach(Q=>{Q.addEventListener("click",()=>Ae(Q.dataset.gcId,Q.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>te()),(ot=e.querySelector("#pvp-action"))==null||ot.addEventListener("click",Q=>{h?Q.currentTarget.dataset.pass==="1"||!Be(n)?me():xe():$&&ae()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&oe()}),(de=e.querySelector("#pvp-view-opp"))==null||de.addEventListener("click",()=>Z()),(_e=e.querySelector("#pvp-toggle-history"))==null||_e.addEventListener("click",()=>ge()),N&&(clearInterval(N),N=null),(h||$)&&!u){let Q=30,ce=!1;const J=()=>document.getElementById("pvp-timer"),le=()=>{J()&&(J().textContent=Q+"s",J().style.color=ce?"#ff4444":"#fff")};le(),N=setInterval(()=>{Q--,Q<0?ce?(clearInterval(N),N=null,h&&!Be(n)?me():oe()):(ce=!0,Q=15,le()):le()},1e3)}}function be(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await se({phase:"midfield"})},5e3)}let Te=!1;function Ee(){if(Te)return;const w=r[n+"Team"].MIL||[],k=r[o+"Team"].MIL||[];function f(W){return W.reduce((V,ee)=>V+ze(ee,"MIL"),0)}function m(W){let V=0;for(let ee=0;ee<W.length-1;ee++){const ne=at(W[ee],W[ee+1]);ne==="#00ff88"?V+=2:ne==="#FFD700"&&(V+=1)}return V}const x=f(w)+m(w),b=f(k)+m(k),h=x>=b;function $(W,V,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${V}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${W.map((ne,fe)=>{const ye=fe<W.length-1?at(ne,W[fe+1]):null,ve=!ye||ye==="#ff3333"||ye==="#cc2222",we=ye==="#00ff88"?"+2":ye==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ee}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...ne,note:ze(ne,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<W.length-1?`<div class="duel-link duel-link-${ee}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ve?"rgba(255,255,255,0.12)":ye};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ve?"none":`0 0 8px ${ye}`}">
              ${we?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ye}">${we}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ee}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${f(W)} + ${m(W)} liens = <b style="color:#fff">${f(W)+m(W)}</b>
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
      ${$(w,r[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(k,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const A=(W,V)=>e.querySelectorAll(W).forEach((ee,ne)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},V+ne*90)});A(".duel-card-me",150),A(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((W,V)=>setTimeout(()=>{W.style.opacity="1"},V*70)),900),setTimeout(()=>{const W=e.querySelector("#pvp-vs");W&&(W.style.opacity="1",W.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function _(W,V,ee){const ne=document.getElementById(W);if(!ne)return;const fe=performance.now(),ye=ve=>{const we=Math.min(1,(ve-fe)/ee);ne.textContent=Math.round(V*(1-Math.pow(1-we,3))),we<1?requestAnimationFrame(ye):ne.textContent=V};requestAnimationFrame(ye)}setTimeout(()=>{_("pvp-score-me",x,800),_("pvp-score-opp",b,800)},1500);const z=r.p1Team.MIL||[],S=r.p2Team.MIL||[],F=f(z)+m(z),B=f(S)+m(S),O=F>=B?"p1":"p2";let H=r.boostValue;H==null&&(H=ti(),r.boostValue=H,r.boostOwner=O,r.boostUsed=!1),Te=!0,setTimeout(()=>{const W=e.querySelector("#duel-row-"+(h?"me":"opp")),V=e.querySelector("#duel-row-"+(h?"opp":"me")),ee=document.getElementById("pvp-score-me"),ne=document.getElementById("pvp-score-opp"),fe=h?ee:ne,ye=h?ne:ee;fe&&(fe.style.fontSize="80px",fe.style.color=h?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(h?",duelGlow 1.5s ease infinite .5s":"")),ye&&(ye.style.opacity="0.25"),setTimeout(()=>{W&&(W.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",W.style.zIndex="5"),setTimeout(()=>{const ve=document.getElementById("duel-shock");ve&&(ve.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Le;const ve=document.getElementById("pvp-duel-finale");if(!ve)return;const we=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ie=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ve.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(h?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+we+Ie,ve.style.transition="opacity .45s ease",ve.style.opacity="1",ve.style.pointerEvents="auto",(Le=document.getElementById("pvp-start-match"))==null||Le.addEventListener("click",async()=>{const Re=O;await se({phase:Re+"-attack",attacker:Re,round:1,boostValue:H,boostUsed:!1,boostOwner:Re})})},600)},700)},2800)}function he(w,k,f,m,x){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const h=Array.from({length:10},(z,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};b.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${h}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${m?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${k} – ${f}
      </div>
      ${w!=null&&w.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${w.map(z=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[z.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${z.portrait?`<img src="${z.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(z.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(b);let A=!1;const _=()=>{A||(A=!0,b.remove(),setTimeout(()=>x(),50))};b.addEventListener("click",_),setTimeout(_,3500)}function $e(w,k,f){var H,W;const m=(r.gcDefs||[]).find(V=>{var ee;return V.name===w||((ee=V.name)==null?void 0:ee.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[m==null?void 0:m.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[m==null?void 0:m.color]||"#b06ce0",h=(m==null?void 0:m.name)||w,$=(m==null?void 0:m.effect)||((H=Ke[w])==null?void 0:H.desc)||"",A=m!=null&&m.image_url?`/manager-wars/icons/${m.image_url}`:null,_=((W=Ke[w])==null?void 0:W.icon)||"⚡",S=k===n?"Vous":r[k+"Name"]||"Adversaire",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",F.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${b}66}50%{box-shadow:0 0 60px ${b}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${b};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${b};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${h.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${h}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${_}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(F);let B=!1;const O=()=>{B||(B=!0,F.remove(),setTimeout(()=>f&&f(),50))};F.addEventListener("click",O),setTimeout(O,3e3)}function Ae(w,k){var F,B,O,H;const m=(r["gcCardsFull_"+n]||[]).find(W=>W.id===w),x=m==null?void 0:m._gcDef,b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",$=(x==null?void 0:x.name)||k,A=(x==null?void 0:x.effect)||((F=Ke[k])==null?void 0:F.desc)||"Carte spéciale.",_=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,z=((B=Ke[k])==null?void 0:B.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${h};background:${b};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${h}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${_?`<img src="${_}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${z}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${A}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(O=S.querySelector("#pvp-gc-back"))==null||O.addEventListener("click",()=>S.remove()),(H=S.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{S.remove(),U(w,k)})}function te(){var m;const w=r[n+"Team"],k=Object.entries(w).flatMap(([x,b])=>(b||[]).filter(h=>!h.used).map(h=>({...h,_line:x})));if(!k.length)return;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",f.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${k.map(x=>{const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",h=ze(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${b};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${h}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(f),(m=f.querySelector("#bp-close"))==null||m.addEventListener("click",()=>f.remove()),f.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const b=x.dataset.cid,h=k.find(A=>A.cardId===b);if(!h)return;const $=(w[h._line]||[]).find(A=>A.cardId===b);$&&($.boost=($.boost||0)+r.boostValue),f.remove(),await se({[n+"Team"]:w,boostUsed:!0})})})}function re(w=null){var B,O;if(!(r.phase===n+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const f=r[n+"Team"],m=r["usedSubIds_"+n]||[],x=r.maxSubs||3;if(m.length>=x){p(`Maximum ${x} remplacements atteint`,"warning");return}const b=Object.entries(f).flatMap(([H,W])=>(W||[]).filter(V=>V.used).map(V=>({...V,_line:H}))),h=(r[n+"Subs"]||[]).filter(H=>!m.includes(H.cardId));if(!b.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!h.length){p("Aucun remplaçant disponible","warning");return}let $=Math.max(0,b.findIndex(H=>H.cardId===w));const A=((B=b[$])==null?void 0:B._line)||((O=b[$])==null?void 0:O.job);let _=Math.max(0,h.findIndex(H=>H.job===A)),z=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function F(){var ye,ve,we,Ie,Le,Re;const H=b[$],W=h[_],V=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(V*1.35),ne=je=>`background:rgba(255,255,255,0.12);border:none;color:${je?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${je?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${m.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ne(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${W?Ye({...W,used:!1,boost:0},V,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${ne(_>=h.length-1)}" ${_>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${h.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ne($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${H?Ye({...H,used:!1,boost:0},V,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${ne($>=b.length-1)}" ${$>=b.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${b.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ye=S.querySelector("#psub-close"))==null||ye.addEventListener("click",()=>S.remove()),(ve=S.querySelector("#pout-up"))==null||ve.addEventListener("click",()=>{$>0&&($--,F())}),(we=S.querySelector("#pout-down"))==null||we.addEventListener("click",()=>{$<b.length-1&&($++,F())}),(Ie=S.querySelector("#pin-up"))==null||Ie.addEventListener("click",()=>{_>0&&(_--,F())}),(Le=S.querySelector("#pin-down"))==null||Le.addEventListener("click",()=>{_<h.length-1&&(_++,F())});const fe=(je,Oe,Fe,Ve)=>{const Ne=S.querySelector("#"+je);if(!Ne)return;let He=0;Ne.addEventListener("touchstart",Ue=>{He=Ue.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Ue=>{const Je=Ue.changedTouches[0].clientY-He;if(Math.abs(Je)<30)return;const Ze=Oe();Je<0&&Ze<Ve-1?(Fe(Ze+1),F()):Je>0&&Ze>0&&(Fe(Ze-1),F())},{passive:!0})};fe("pin-panel",()=>_,je=>_=je,h.length),fe("pout-panel",()=>$,je=>$=je,b.length),(Re=S.querySelector("#psub-confirm"))==null||Re.addEventListener("click",async je=>{if(je.preventDefault(),je.stopPropagation(),z)return;z=!0;const Oe=b[$],Fe=h[_];if(!Oe||!Fe)return;const Ve=Oe._line,Ne=(f[Ve]||[]).findIndex(Je=>Je.cardId===Oe.cardId);if(Ne===-1){p("Erreur : joueur introuvable","error"),S.remove();return}const He={...Fe,_line:Ve,position:Oe.position,used:!1,boost:0};f[Ve].splice(Ne,1,He);const Ue=[...m,Fe.cardId];S.remove(),R(Oe,Fe,async()=>{await se({[n+"Team"]:f,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Ue})})})}document.body.appendChild(S),F()}function R(w,k,f){const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const b=(A,_,z)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${_};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${z}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${m[A.job]||"#555"};border:3px solid ${_};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(A)?`<img src="${Pe(A)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(A.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${b(k,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${b(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let h=!1;const $=()=>{h||(h=!0,x.remove(),setTimeout(()=>f(),50))};x.addEventListener("click",$),setTimeout($,2200)}function Z(){var k;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(k=w.querySelector("#pvp-opp-close"))==null||k.addEventListener("click",()=>w.remove())}function ge(){var m;const w=r.log||[],k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const f=x=>{var h,$,A;if(x.type==="duel"){const _=x.isGoal,z=x.homeScored&&n==="p1"||!x.homeScored&&_&&n==="p2",S=x.homeScored?"#FFD700":_?"#ff6b6b":"rgba(255,255,255,0.3)",F=_?z?"⚽ BUT !":"⚽ BUT adversaire !":(h=x.homePlayers)!=null&&h.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${_?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
          <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${F}</div>
          ${($=x.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${nt(x.homePlayers,"rgba(255,255,255,0.7)",x.homeTotal)}</div>`:""}
          ${(A=x.aiPlayers)!=null&&A.length?`<div style="opacity:0.7">${nt(x.aiPlayers,"#ff6b6b",x.aiTotal)}</div>`:""}
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
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(f).join("")}
      </div>`,document.body.appendChild(k),(m=k.querySelector("#pvp-hist-close"))==null||m.addEventListener("click",()=>k.remove())}async function me(){if(r.phase!==n+"-attack")return;const w=n==="p1"?"p2":"p1",k=(r.round||0)+1,f=[...r.log||[]];f.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const m=Ce(r),x=Be(w),b=m||!x?"finished":w+"-attack";await se({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:b,attacker:w,round:k,log:f}),b==="finished"&&await I(r)}async function xe(){const w=r[n+"Team"],k=!["GK","DEF","MIL","ATT"].some(b=>(r[o+"Team"][b]||[]).some(h=>!h.used)),f=(r["selected_"+n]||[]).map(b=>{const h=(w[b._role]||[]).find(F=>F.cardId===b.cardId)||b,$=k&&["GK","DEF"].includes(b._role),A=w[b._role]||[],_=A.findIndex(F=>F.cardId===b.cardId),z=lt(A.length),S=_>=0?z[_]:h._col??1;return{...h,_line:b._role,_col:S,...$?{note_a:Math.max(1,Number(h.note_a)||0)}:{}}});if(!f.length)return;const m=Nt(f,r.modifiers[n]||{});G(n,f.map(b=>b.cardId)),f.forEach(b=>{const h=(w[b._role]||[]).find($=>$.cardId===b.cardId);h&&(h.used=!0)}),r["selected_"+n]=[],pe();const x=[...r.log||[]];if(k){const b=(r[n+"Score"]||0)+1,h=f.map(S=>({name:S.name,note:ze(S,S._line||"ATT"),portrait:Pe(S),job:S.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:h,homeTotal:m.total,aiTotal:0});const $=(r.round||0)+1,A=n==="p1"?"p2":"p1",_={...r,[n+"Team"]:w,[n+"Score"]:b},z=Ce(_);C.add($),he(h,b,r[o+"Score"]||0,!0,async()=>{await se({[n+"Team"]:w,[n+"Score"]:b,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:z?"finished":A+"-attack",attacker:A,round:$,log:x}),z&&await I({...r,[n+"Score"]:b})});return}x.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${m.total})`}),await se({[n+"Team"]:w,[o+"Team"]:r[o+"Team"],pendingAttack:{...m,players:f,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:x})}async function ae(){const w=r[n+"Team"],k=(r["selected_"+n]||[]).map(H=>{const W=(w[H._role]||[]).find(ye=>ye.cardId===H.cardId)||H,V=w[H._role]||[],ee=V.findIndex(ye=>ye.cardId===H.cardId),ne=lt(V.length),fe=ee>=0?ne[ee]:W._col??1;return{...W,_line:H._role,_col:fe}}),f=Rt(k,r.modifiers[n]||{});G(n,k.map(H=>H.cardId)),k.forEach(H=>{const W=(w[H._role]||[]).find(V=>V.cardId===H.cardId);W&&(W.used=!0)}),r["selected_"+n]=[],pe();const m=Ot(r.pendingAttack.total,f.total,r.modifiers[n]||{}),x=r.pendingAttack.side,b=m==="attack"||(m==null?void 0:m.goal),h=x==="p1"?"p2":"p1",$=(r.round||0)+1,A=(r.pendingAttack.players||[]).map(H=>({name:H.name,note:ze(H,H._line||"ATT"),portrait:Pe(H),job:H.job})),_=[...r.log||[]];_.push({type:"duel",isGoal:b,homeScored:b&&x===n,text:b?`⚽ BUT de ${r[x+"Name"]} ! (${r.pendingAttack.total} vs ${f.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${f.total})`,homePlayers:A,aiPlayers:k.map(H=>({name:H.name,note:ze(H,H._line||"DEF"),portrait:Pe(H),job:H.job})),homeTotal:r.pendingAttack.total,aiTotal:f.total});const z=b?(r[x+"Score"]||0)+1:r[x+"Score"]||0,S={...r,[n+"Team"]:w,[x+"Score"]:z},F=Ce(S),B=F?"finished":h+"-attack",O=async()=>{await se({[n+"Team"]:w,[o+"Team"]:r[o+"Team"],[x+"Score"]:z,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:B,attacker:h,round:$,log:_}),(B==="finished"||F)&&await I({...r,[x+"Score"]:z})};if(b){const H=x===n,W=H?z:r[n+"Score"]||0,V=H?r[o+"Score"]||0:z;C.add($),he(A,W,V,H,O)}else await O()}function ue(w){return["MIL","ATT"].some(k=>(w[k]||[]).some(f=>!f.used))}function Se(w){return["GK","DEF","MIL","ATT"].some(k=>(w[k]||[]).some(f=>!f.used))}function qe(w){return Se(w)&&!ue(w)}function Be(w){const k=r[w+"Team"],f=r[(w==="p1"?"p2":"p1")+"Team"];return!!(ue(k)||!Se(f)&&qe(k))}function Ce(w){const k=["MIL","ATT"].some(_=>(w.p1Team[_]||[]).some(z=>!z.used)),f=["MIL","ATT"].some(_=>(w.p2Team[_]||[]).some(z=>!z.used)),m=Se(w.p1Team),x=Se(w.p2Team);return!k&&!(!x&&m)&&(!f&&!(!m&&x))}function De(w){const k=w.p1Score||0,f=w.p2Score||0;return k===f?null:k>f?y.home_id:y.away_id}async function I(w){try{const k=De(w),f=k?y.home_id===k?y.away_id:y.home_id:null;await E.from("matches").update({status:"finished",winner_id:k,home_score:w.p1Score||0,away_score:w.p2Score||0}).eq("id",i),k&&f&&_i(k,f).catch(()=>{})}catch(k){console.error("[PvP] finishMatch:",k)}}function j(){var x;const w=r[n+"Score"],k=r[o+"Score"],f=w>k,m=w===k;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${f?"🏆":m?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${f?"Victoire !":m?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${k}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{E.removeChannel(X)}catch{}We(e),l("home")})}pe()}const zt="#1A6B3C",xt="#D4A017";async function Wo(e,t){var s;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(s=t.state.params)==null?void 0:s.openLeagueId;if(i){t.state.params.openLeagueId=null,await bt(e,t,i);return}await _t(e,t)}async function _t(e,t,i="waiting"){var M;const{state:s}=t,c=s.profile.id,{data:d}=await E.from("mini_league_members").select("league_id").eq("user_id",c),a=(d||[]).map(L=>L.league_id),{data:l,error:p}=await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),n=p?(await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],g=(a.length?await E.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],v=g.filter(L=>L.status==="waiting"&&!L.is_archived),y=g.filter(L=>L.status==="active"&&!L.is_archived),T=g.filter(L=>L.is_archived||L.status==="finished"),r=n.filter(L=>!a.includes(L.id)),u=[{key:"waiting",label:"🟡 En attente",count:v.length+r.length},{key:"active",label:"🟢 En cours",count:y.length},{key:"archived",label:"📁 Archivées",count:T.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${u.map(L=>`<button class="ml-tab" data-tab="${L.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===L.key?zt:"transparent"};background:none;font-size:12px;font-weight:${i===L.key?"900":"600"};color:${i===L.key?zt:"#888"};cursor:pointer">${L.label}${L.count?` (${L.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Jo(v,r,c):i==="active"?Xo(y,c):Zo(T,c)}
    </div>
  </div>`,(M=document.getElementById("ml-create-btn"))==null||M.addEventListener("click",()=>Qo(e,t)),e.querySelectorAll(".ml-tab").forEach(L=>L.addEventListener("click",()=>_t(e,t,L.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(L=>L.addEventListener("click",()=>bt(e,t,L.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(L=>L.addEventListener("click",N=>{N.stopPropagation(),$n(e,t,L.dataset.join,L.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(L=>L.addEventListener("click",N=>{N.stopPropagation(),gi(e,t,L.dataset.delete,L.dataset.name,i)}))}function Qt(e,t,i=!1){var a,l;const s=e.creator_id===t,c=e.pot||0,d=((l=(a=e.mini_league_members)==null?void 0:a[0])==null?void 0:l.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${s?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${d}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${c>0?`<span style="color:${xt};font-weight:700">🏆 ${c.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function Jo(e,t,i){const s=[];return e.length&&(s.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),s.push(...e.map(c=>Qt(c,i,!1)))),t.length&&(s.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),s.push(...t.map(c=>Qt(c,i,!0)))),s.length?s.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Xo(e,t){return e.length?e.map(i=>Qt(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Zo(e,t){return e.length?e.map(i=>Qt(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Qo(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",s=>{s.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(s=>s.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=s.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var T,r,u,M;const{toast:s}=t,c=document.getElementById("ml-name").value.trim(),d=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,l=((T=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:T.value)||"public",p=((r=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:r.value)||"aller",n=((M=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:M.trim())||null;if(!c){s("Le nom est obligatoire","error");return}if(a<100){s("Mise minimum : 100 crédits","error");return}if(l==="private"&&!n){s("Mot de passe requis","error");return}const{data:o,error:g}=await E.from("mini_leagues").insert({name:c,creator_id:t.state.profile.id,type:l,password:n,mode:p,max_players:d,entry_fee:a}).select().single();if(g){s("Erreur : "+g.message,"error");return}const{data:v}=await E.from("users").select("credits").eq("id",t.state.profile.id).single();if(((v==null?void 0:v.credits)||0)<a){await E.from("mini_leagues").delete().eq("id",o.id),s(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await E.from("users").update({credits:v.credits-a}).eq("id",t.state.profile.id),await E.from("mini_leagues").update({pot:a}).eq("id",o.id),await E.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=v.credits-a);const y=document.getElementById("nav-credits");y&&(y.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),s(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),bt(e,t,o.id)})}function er(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),s=c=>{t.remove(),e(c)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>s(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>s(i.value.trim())),i.addEventListener("keydown",c=>{c.key==="Enter"&&s(i.value.trim())}),t.addEventListener("click",c=>{c.target===t&&s(null)})})}async function $n(e,t,i,s){const{toast:c,state:d}=t,a=d.profile.id,{data:l}=await E.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!l){c("Mini League introuvable","error");return}if(l.status!=="waiting"){c("Cette Mini League a déjà démarré","warning");return}const{count:p}=await E.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(p>=l.max_players){c("La Mini League est complète","warning");return}if(s==="private"){const r=await er();if(r===null)return;if(l.password!==r){c("Mot de passe incorrect","error");return}}const n=l.entry_fee||100,{data:o}=await E.from("users").select("credits").eq("id",a).single();if(((o==null?void 0:o.credits)||0)<n){c(`Crédits insuffisants — il te faut ${n.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:g}=await E.from("mini_league_members").insert({league_id:i,user_id:a});if(g){c("Erreur inscription : "+g.message,"error");return}const{error:v}=await E.from("users").update({credits:o.credits-n}).eq("id",a),{error:y}=await E.from("mini_leagues").update({pot:(l.pot||0)+n}).eq("id",i);(v||y)&&console.error("Erreur post-inscription:",v,y),d.profile&&(d.profile.credits=o.credits-n);const T=document.getElementById("nav-credits");T&&(T.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),c(`✅ Inscrit ! −${n.toLocaleString("fr")} cr. · Pot : ${((l.pot||0)+n).toLocaleString("fr")} cr.`,"success"),bt(e,t,i)}async function tr(e,t,i,s){const{toast:c,state:d}=t,a=d.profile.id;if(!confirm(`Te désinscrire et récupérer ${s.toLocaleString("fr")} cr. ?`))return;const{data:l}=await E.from("mini_leagues").select("pot,status").eq("id",i).single();if(!l||l.status!=="waiting"){c("Impossible — la league a déjà démarré","error");return}const{data:p}=await E.from("users").select("credits").eq("id",a).single();await E.from("mini_leagues").update({pot:Math.max(0,(l.pot||0)-s)}).eq("id",i),await E.from("users").update({credits:((p==null?void 0:p.credits)||0)+s}).eq("id",a),await E.from("mini_league_members").delete().eq("league_id",i).eq("user_id",a),d.profile&&(d.profile.credits=((p==null?void 0:p.credits)||0)+s);const n=document.getElementById("nav-credits");n&&(n.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),c(`↩️ Désinscrit · +${s.toLocaleString("fr")} cr. remboursés`,"success"),_t(e,t,"waiting")}async function gi(e,t,i,s,c){const{toast:d}=t;if(!confirm(`Supprimer définitivement "${s}" et tous ses matchs/membres ? Action irréversible.`))return;await E.from("mini_league_matches").delete().eq("league_id",i),await E.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await E.from("mini_leagues").delete().eq("id",i);if(a){d("Erreur suppression ("+a.message+")","error");return}d("Mini League supprimée avec succès","success"),_t(e,t,c)}async function ir(e,t,i){await E.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),_t(e,t,"archived")}async function bt(e,t,i){var K,C,q,D,X,se,oe,P,Y;const{state:s,toast:c}=t,d=s.profile.id,[{data:a},{data:l},{data:p}]=await Promise.all([E.from("mini_leagues").select("*").eq("id",i).single(),E.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),E.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){c("Introuvable","error"),await _t(e,t);return}const n=(l||[]).some(U=>U.user_id===d),o=a.creator_id===d,g=(l||[]).map(U=>U.user).filter(Boolean),v=En(g,p||[]),y=(p||[]).filter(U=>U.matchday===a.current_day),T=a.pot||0,r=a.entry_fee||100,u=y.length>0&&y.every(U=>U.status==="finished"||U.status==="bye"),M=a.current_day>=a.total_days,L=(l||[]).find(U=>U.user_id===d);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${a.name}</div>
        <div style="font-size:11px;color:#888">${a.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${a.max_players} · 💰 ${r} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${a.status==="active"?"#d1fae5":a.status==="finished"?"#f3e8ff":"#fef9c3"};color:${a.status==="active"?"#166534":a.status==="finished"?"#6b21a8":"#854d0e"}">
          ${a.status==="waiting"?"En attente":a.status==="active"?`J${a.current_day}/${a.total_days}`:"Terminée"}
        </div>
        ${T>0?`<div style="font-size:12px;font-weight:900;color:${xt};margin-top:4px">🏆 ${T.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${g.length}/${a.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${r} cr./joueur → Pot estimé : ${(r*g.length).toLocaleString("fr")} cr. (🥇${Math.floor(r*g.length*.7).toLocaleString("fr")} · 🥈${Math.floor(r*g.length*.2).toLocaleString("fr")} · 🥉${Math.floor(r*g.length*.1).toLocaleString("fr")})</div>
        ${g.map(U=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${U.club_color2||zt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${U.club_color1||"#fff"}">${(U.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${U.club_name||U.pseudo}</div><div style="font-size:11px;color:#999">@${U.pseudo}</div></div>
            ${U.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${o&&g.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${r} cr. × ${g.length})</button>`:""}
        ${o?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${n?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${r} cr.)</button>`}
        ${n&&!o?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${r.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${y.map(U=>Ri(U,g,d,n)).join("")}
        ${o&&u&&!M?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&u&&M?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&v.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${T>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${xt}">💰</th>`:""}
          </tr></thead>
          <tbody>${v.map((U,G)=>{const ie=T>0&&a.status==="finished"?G===0?Math.floor(T*.7):G===1?Math.floor(T*.2):G===2?Math.floor(T*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${U.userId===d?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${G===0?xt:G<3?zt:"#555"}">${["🥇","🥈","🥉"][G]||G+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${U.clubName}</div><div style="font-size:10px;color:#999">@${U.pseudo}</div></td>
              <td style="text-align:center">${U.played}</td><td style="text-align:center">${U.won}-${U.drawn}-${U.lost}</td>
              <td style="text-align:center;color:${U.goalDiff>=0?zt:"#cc2222"}">${U.goalDiff>=0?"+":""}${U.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${U.points}</td>
              ${T>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${xt}">${ie?ie.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(U,G)=>G+1).reverse().map(U=>{const G=(p||[]).filter(ie=>ie.matchday===U);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${U}</div>${G.map(ie=>Ri(ie,g,d,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const N=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((K=document.getElementById("ml-back"))==null||K.addEventListener("click",()=>_t(e,t,N)),(C=document.getElementById("ml-start-btn"))==null||C.addEventListener("click",()=>nr(e,t,a,g)),(q=document.getElementById("ml-next-day"))==null||q.addEventListener("click",()=>or(e,t,i)),(D=document.getElementById("ml-finish-btn"))==null||D.addEventListener("click",()=>kn(e,t,i,T,v,g)),(X=document.getElementById("ml-join-now"))==null||X.addEventListener("click",()=>$n(e,t,i,a.type)),(se=document.getElementById("ml-leave-btn"))==null||se.addEventListener("click",()=>tr(e,t,i,r)),(oe=document.getElementById("ml-delete-btn"))==null||oe.addEventListener("click",()=>gi(e,t,i,a.name,"waiting")),(P=document.getElementById("ml-delete-now"))==null||P.addEventListener("click",()=>gi(e,t,i,a.name,N)),(Y=document.getElementById("ml-archive-btn"))==null||Y.addEventListener("click",()=>ir(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(U=>{U.addEventListener("click",()=>{const G=y.find(ie=>ie.id===U.dataset.playMatch);G&&t.navigate("match-mini-league",{mlMatchId:G.id,leagueId:i})})}),a.status==="finished"&&L){const U=v.findIndex(G=>G.userId===d);U>=0&&U<3&&L.prize_amount>0&&setTimeout(()=>rr(e,t,a,L,U),400)}}function Ri(e,t,i,s,c=!1){const d=g=>t.find(v=>v.id===g);if(e.is_bye){const g=d(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"?"} exempté(e)</div>`}const a=d(e.home_id),l=d(e.away_id),p=e.home_id===i||e.away_id===i,n=p&&e.status==="pending"&&s&&!c,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${p?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${p?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?zt:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(l==null?void 0:l.club_name)||(l==null?void 0:l.pseudo)||"?"}</div>
    ${n?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function nr(e,t,i,s){const{toast:c,state:d}=t,a=ar(s.map(n=>n.id),i.mode),l=[];a.forEach((n,o)=>n.forEach(g=>l.push({league_id:i.id,matchday:o+1,home_id:g.home||g.bye,away_id:g.away||null,is_bye:!!g.bye,status:g.bye?"bye":"pending"})));const{error:p}=await E.from("mini_league_matches").insert(l);if(p){c("Erreur calendrier : "+p.message,"error");return}await E.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),c(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),bt(e,t,i.id)}async function or(e,t,i){const{data:s}=await E.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),c=(s.current_day||0)+1;if(c>(s.total_days||0)){await kn(e,t,i,s.pot||0,null,null);return}await E.from("mini_leagues").update({current_day:c}).eq("id",i),t.toast(`Journée ${c} commencée !`,"success"),bt(e,t,i)}async function kn(e,t,i,s,c,d){const{toast:a,state:l}=t;let p=c,n=d;if(!p){const{data:g}=await E.from("mini_league_matches").select("*").eq("league_id",i),{data:v}=await E.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);n=(v||[]).map(y=>y.user).filter(Boolean),p=En(n,g||[])}const o=[Math.floor(s*.7),Math.floor(s*.2),Math.floor(s*.1)];await Promise.all(p.slice(0,3).map((g,v)=>o[v]?E.from("mini_league_members").update({prize_amount:o[v],prize_claimed:!1}).eq("league_id",i).eq("user_id",g.userId):Promise.resolve())),await E.from("mini_leagues").update({status:"finished"}).eq("id",i),a("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),bt(e,t,i)}async function rr(e,t,i,s,c){var v,y;const{state:d,toast:a}=t,l=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],p=["🥇","🥈","🥉"][c],n=s.prize_amount||l[c]||0,o=s.prize_claimed,g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",g.innerHTML=`
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
    </div>`,document.body.appendChild(g),(v=g.querySelector("#prize-close"))==null||v.addEventListener("click",()=>g.remove()),g.addEventListener("click",T=>{T.target===g&&g.remove()}),(y=g.querySelector("#claim-prize-btn"))==null||y.addEventListener("click",async()=>{const{data:T}=await E.from("users").select("credits").eq("id",d.profile.id).single();await E.from("users").update({credits:((T==null?void 0:T.credits)||0)+n}).eq("id",d.profile.id),await E.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",d.profile.id),d.profile&&(d.profile.credits=((T==null?void 0:T.credits)||0)+n);const r=document.getElementById("nav-credits");r&&(r.textContent=`💰 ${d.profile.credits.toLocaleString("fr")}`),a(`💰 +${n.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),g.remove(),bt(e,t,i.id)})}function ar(e,t){const s=e.length%2===0?[...e]:[...e,null],c=s.length;let d=s.slice(1);const a=[];for(let l=0;l<c-1;l++){const p=[],n=[s[0],...d];for(let o=0;o<c/2;o++){const g=n[o],v=n[c-1-o];g===null?p.push({bye:v}):v===null?p.push({bye:g}):p.push({home:g,away:v})}a.push(p),d=[d[d.length-1],...d.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(l=>l.map(p=>p.bye?p:{home:p.away,away:p.home}))]:a}function En(e,t){const i={};return e.forEach(s=>{i[s.id]={userId:s.id,pseudo:s.pseudo,clubName:s.club_name||s.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(s=>s.status==="finished"&&!s.is_bye&&s.home_score!=null).forEach(s=>{const c=i[s.home_id],d=i[s.away_id];!c||!d||(c.played++,d.played++,c.goalsFor+=s.home_score,c.goalsAgainst+=s.away_score,d.goalsFor+=s.away_score,d.goalsAgainst+=s.home_score,s.home_score>s.away_score?(c.won++,c.points+=3,d.lost++):s.home_score<s.away_score?(d.won++,d.points+=3,c.lost++):(c.drawn++,c.points++,d.drawn++,d.points++),c.goalDiff=c.goalsFor-c.goalsAgainst,d.goalDiff=d.goalsFor-d.goalsAgainst)}),Object.values(i).sort((s,c)=>c.points-s.points||c.goalDiff-s.goalDiff||c.goalsFor-s.goalsFor)}async function Oi(e,t,i,s){var c,d;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:s};try{const a=(d=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:d.id;try{(E.getChannels?E.getChannels():[]).forEach(p=>{const n=p.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&E.removeChannel(p)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}a&&(await E.rpc("cancel_matchmaking",{p_user_id:a}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",a).then(()=>{},()=>{}))}catch{}await ni(e,t,"random",({deckId:a,formation:l,starters:p,subsRaw:n,gcCardsEnriched:o,gcDefs:g,stadiumDef:v})=>{const y=T=>sr(e,t,a,l,p,n,T,g||[],i);if(!o.length){y([]);return}ii(e,o,y)})}async function sr(e,t,i,s,c,d,a=[],l=[],p,n){const{state:o,navigate:g,toast:v}=t,y=o.profile.id;let T=!1,r=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:y})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",y)}catch{}const{data:u}=await E.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",p).single();if(!u){v("Match introuvable","error"),We(e),g("mini-league");return}if(u.home_id!==y&&u.away_id!==y){v("Tu ne fais pas partie de ce match","error"),We(e),g("mini-league");return}const M=u.home_id===y,L=M?u.away:u.home,N=M?u.away_id:u.home_id,K=(q,D)=>{var X;e.innerHTML=`
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
            <div style="font-size:12px;font-weight:700">${(L==null?void 0:L.club_name)||(L==null?void 0:L.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(X=document.getElementById("lobby-cancel"))==null||X.addEventListener("click",()=>{T=!0,clearInterval(r),We(e),g("mini-league")})},C=async(q,D)=>{T=!0,clearInterval(r),await new Promise(X=>setTimeout(X,600)),e.isConnected&&dr(e,t,q,D,a,l)};if(K(),M){let q=u.match_id;if(!q){const{data:X,error:se}=await E.from("matches").insert({home_id:y,away_id:N,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(se||!X){v("Erreur création match","error"),We(e),g("mini-league");return}q=X.id,await E.from("mini_league_matches").update({match_id:q,status:"playing"}).eq("id",p)}const D=q;r=setInterval(async()=>{if(T){clearInterval(r);return}const{data:X}=await E.from("matches").select("away_deck_id").eq("id",D).single();X!=null&&X.away_deck_id&&(clearInterval(r),C(D,!0))},1500)}else{let q=u.match_id;r=setInterval(async()=>{if(T){clearInterval(r);return}const{data:D}=await E.from("mini_league_matches").select("match_id").eq("id",p).single();D!=null&&D.match_id&&(clearInterval(r),q=D.match_id,await E.from("matches").update({away_deck_id:i}).eq("id",q),C(q,!1))},1500)}}async function dr(e,t,i,s,c=[],d=[]){var k;const{state:a,navigate:l,toast:p}=t,n=((k=a.params)==null?void 0:k.leagueId)||null,o=s?"p1":"p2",g=s?"p2":"p1",v=(c||[]).map(f=>f.id),y=(c||[]).map(f=>({id:f.id,gc_type:f.gc_type,_gcDef:f._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:T}=await E.from("matches").select("*").eq("id",i).single();if(!T){p("Match introuvable","error"),l("mini-league");return}async function r(){const[{data:f},{data:m},{data:x},{data:b}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:T.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:T.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",T.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",T.away_id).single()]),h=S=>({cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:Number(S.note_g)||0,note_d:Number(S.note_d)||0,note_m:Number(S.note_m)||0,note_a:Number(S.note_a)||0,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),$=((f==null?void 0:f.starters)||[]).map(S=>h(S)),A=((m==null?void 0:m.starters)||[]).map(S=>h(S)),_=(f==null?void 0:f.formation)||"4-4-2",z=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:yt($,_),p2Team:yt(A,z),p1Subs:((f==null?void 0:f.subs)||[]).map(S=>h(S)),p2Subs:((m==null?void 0:m.subs)||[]).map(S=>h(S)),p1Formation:_,p2Formation:z,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?v:[],gc_p2:s?[]:v,gcCardsFull_p1:s?y:[],gcCardsFull_p2:s?[]:y,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let u=T.game_state&&Object.keys(T.game_state).length?T.game_state:null;if(!u)if(s){u=await r();const{data:f}=await E.from("matches").select("game_state").eq("id",i).single();!(f!=null&&f.game_state)||!Object.keys(f.game_state).length?await E.from("matches").update({game_state:u,turn_user_id:T.home_id}).eq("id",i):u=f.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let f=0;f<60&&!u;f++){await new Promise(x=>setTimeout(x,400));const{data:m}=await E.from("matches").select("game_state").eq("id",i).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(u=m.game_state)}if(!u){p("Erreur de synchronisation","error"),l("mini-league");return}u.gc_p2=v,u.gcCardsFull_p2=y,await E.from("matches").update({game_state:u}).eq("id",i)}let M=!1,L=!1,N=!1,K=null,C=!1;const q=new Set,D=new Set;function X(f){var S,F;try{E.removeChannel(se)}catch{}const m=u[o+"Score"]||0,x=u[g+"Score"]||0;if(!N){N=!0;const B=f.winner_id||(m>x?a.profile.id:x>m?"opp":null),O=B===a.profile.id?"win":B?"loss":null;O&&yi(()=>Promise.resolve().then(()=>on),void 0).then(H=>H.applyOwnEvolution(a.profile.id,O)).catch(()=>{})}if(!L){const B=u.p1Score||0,O=u.p2Score||0,H=(u.usedGc_p1||[]).length,W=(u.usedGc_p2||[]).length,V=f.winner_id||(B>O?T.home_id:O>B?T.away_id:null);(V?a.profile.id===V:a.profile.id<(s?T.away_id:T.home_id))&&(L=!0,Xi({player1Id:T.home_id,player2Id:T.away_id,score1:B,score2:O,gc1:H,gc2:W}).catch(ne=>console.warn("[FriendMatch] updateStats:",ne)))}let b,h;f.winner_id?(b=f.winner_id===a.profile.id,h=!1):f.forfeit?(b=m>x,h=!1):(h=m===x,b=m>x),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const $=document.createElement("div");$.id="pvp-end-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const A=h?"🤝":b?"🏆":"😞",_=h?"MATCH NUL":b?"VICTOIRE !":"DÉFAITE",z=h?"#fff":b?"#FFD700":"#ff6b6b";$.innerHTML=`
      <div style="font-size:64px">${A}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${_}</div>
      <div style="font-size:18px">${u[o+"Name"]} ${m} – ${x} ${u[g+"Name"]}</div>
      ${f.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${b?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild($),(F=$.querySelector("#pvp-end-home"))==null||F.addEventListener("click",()=>{$.remove(),We(e),n?l("mini-league",{openLeagueId:n}):l("mini-league")})}const se=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},f=>{const m=f.new;try{if(m.status==="finished"||m.forfeit){if(M||(M=!0,K&&(clearInterval(K),K=null),m.game_state&&(u=m.game_state),u.phase==="finished"&&!m.forfeit&&document.getElementById("pvp-home")))return;X(m);return}if(m.game_state){const x=u;u=m.game_state;const b=u._lastGC;if(b&&b.seq&&!D.has(b.seq)&&(D.add(b.seq),b.by!==o)){Ae(b.type,b.by,()=>be());return}const h=x[o+"Score"]||0,$=x[g+"Score"]||0,A=u[o+"Score"]||0,_=u[g+"Score"]||0,z=A>h,S=_>$;if((z||S)&&!q.has(u.round)){q.add(u.round);const F=[...u.log||[]].reverse().find(O=>O.isGoal),B=((F==null?void 0:F.homePlayers)||[]).map(O=>({name:O.name,note:O.note,portrait:O.portrait,job:O.job}));$e(B,A,_,z,()=>be());return}be()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function oe(f){Object.assign(u,f),u.lastActionAt=new Date().toISOString();const{error:m}=await E.from("matches").update({game_state:u}).eq("id",i);m&&p("Erreur de synchronisation","error");try{be()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function P(){if(M)return;M=!0,K&&(clearInterval(K),K=null);const f=s?T.away_id:T.home_id,m=s?"p2":"p1",x=s?"p1":"p2",b={...u,[m+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:f,home_score:b.p1Score||0,away_score:b.p2Score||0,game_state:b}).eq("id",i)}catch{}try{E.removeChannel(se)}catch{}setTimeout(()=>{We(e),l("mini-league")},800)}const Y={BOOST_STAT:({value:f=1,count:m=1,roles:x=[]},b,h)=>{const $=b[o+"Team"],A=Object.entries($).filter(([_])=>!x.length||x.includes(_)).flatMap(([_,z])=>z.filter(S=>!S.used).map(S=>({...S,_line:_})));if(!A.length){b.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),h(b);return}U(A,m,`Choisir ${m} joueur(s) à booster (+${f})`,_=>{_.forEach(z=>{const S=($[z._line]||[]).find(F=>F.cardId===z.cardId);S&&(S.boost=(S.boost||0)+f,b.log.push({text:`⚡ +${f} sur ${S.name}`,type:"info"}))}),b[o+"Team"]=$,h(b)})},DEBUFF_STAT:({value:f=1,count:m=1,roles:x=[],target:b="ai"},h,$)=>{const A=b==="home"?o:g,_=h[A+"Team"],z=b==="home"?"allié":"adverse",S=Object.entries(_).filter(([F])=>!x.length||x.includes(F)).flatMap(([F,B])=>B.map(O=>({...O,_line:F})));if(!S.length){h.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),$(h);return}U(S,m,`Choisir ${m} joueur(s) ${z}(s) (-${f})`,F=>{F.forEach(B=>{const O=(_[B._line]||[]).find(H=>H.cardId===B.cardId);O&&(O.boost=(O.boost||0)-f,h.log.push({text:`🎯 -${f} sur ${O.name}`,type:"info"}))}),h[A+"Team"]=_,$(h)})},GRAY_PLAYER:({count:f=1,roles:m=[],target:x="ai"},b,h)=>{const $=x==="home"?o:g,A=b[$+"Team"],_=x==="home"?"allié":"adverse",z=Object.entries(A).filter(([S])=>!m.length||m.includes(S)).flatMap(([S,F])=>F.filter(B=>!B.used).map(B=>({...B,_line:S})));if(!z.length){b.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),h(b);return}U(z,f,`Choisir ${f} joueur(s) ${_}(s) à exclure`,S=>{const F="usedCardIds_"+$,B=new Set(b[F]||[]);S.forEach(O=>{const H=(A[O._line]||[]).find(W=>W.cardId===O.cardId);H&&(H.used=!0,B.add(O.cardId),b.log.push({text:`❌ ${H.name} exclu !`,type:"info"}))}),b[F]=[...B],b[$+"Team"]=A,h(b)})},REVIVE_PLAYER:({count:f=1,roles:m=[]},x,b)=>{const h=x[o+"Team"],$=Object.entries(h).filter(([A])=>!m.length||m.includes(A)).flatMap(([A,_])=>_.filter(z=>z.used).map(z=>({...z,_line:A})));if(!$.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),b(x);return}U($,f,`Choisir ${f} joueur(s) à ressusciter`,A=>{A.forEach(_=>{const z=(h[_._line]||[]).find(S=>S.cardId===_.cardId);z&&(z.used=!1,x.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),x[o+"Team"]=h,b(x)})},REMOVE_GOAL:({},f,m)=>{const x=g+"Score";f[x]>0?(f[x]--,f.log.push({text:"🚫 Dernier but annulé !",type:"info"})):f.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(f)},ADD_GOAL_DRAW:({},f,m)=>{f[o+"Score"]===f[g+"Score"]?(f[o+"Score"]++,f.log.push({text:"🎯 But bonus !",type:"info"})):f.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(f)},ADD_SUB:({value:f=1},m,x)=>{m.maxSubs=(m.maxSubs||3)+f,m.log.push({text:`🔄 +${f} remplacement(s)`,type:"info"}),x(m)},CUSTOM:({},f,m)=>m(f)};function U(f,m,x,b){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let $=[];function A(){var z,S;const _=f.map(F=>{const B={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[F._line]||"#555",O=ze(F,F._line)+(F.boost||0),W=$.find(ee=>ee.cardId===F.cardId)?"#FFD700":"rgba(255,255,255,0.25)",V=F.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${F.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${W};background:${B};overflow:hidden;cursor:pointer;${V}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${F.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${O}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${F._line}</div>
        </div>`}).join("");h.innerHTML=`
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
        </div>`,(z=h.querySelector("#pp-close"))==null||z.addEventListener("click",()=>h.remove()),h.querySelectorAll(".pp-item").forEach(F=>{F.addEventListener("click",()=>{const B=F.dataset.cid,O=f.find(W=>W.cardId===B),H=$.findIndex(W=>W.cardId===B);O&&(H>-1?$.splice(H,1):$.length<m&&$.push(O),A())})}),(S=h.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{h.remove(),b($)})}A(),document.body.appendChild(h)}async function G(f,m){const b=(u["gcCardsFull_"+o]||[]).find(_=>_.id===f),h=(b==null?void 0:b._gcDef)||(u.gcDefs||[]).find(_=>{var z;return _.name===m||((z=_.name)==null?void 0:z.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),$=[...u["usedGc_"+o]||[],f],A={type:m,by:o,seq:(u._gcAnimSeq||0)+1};D.add(A.seq),Ae(m,o,async()=>{if(h!=null&&h.effect_type&&h.effect_type!=="CUSTOM"){const z=Y[h.effect_type];if(z){const S={...u};z(h.effect_params||{},S,async F=>{F["usedGc_"+o]=$,F._lastGC=A,F._gcAnimSeq=A.seq,await oe(F)});return}}const _={...u};switch(m){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=g+"Score";_[z]>0&&(_[z]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+o]=$,_._lastGC=A,_._gcAnimSeq=A.seq,await oe(_)})}function ie(f,m){const x="usedCardIds_"+f,b=new Set(u[x]||[]);m.forEach(h=>b.add(h)),u[x]=[...b]}function pe(){for(const f of["p1","p2"]){const m=new Set(u["usedCardIds_"+f]||[]),x=u[f+"Team"];if(x)for(const b of["GK","DEF","MIL","ATT"])(x[b]||[]).forEach(h=>{h.used=m.has(h.cardId)})}}function be(){var ot,gt,de,_e,Q,ce;if(u.phase==="reveal")return Te();if(u.phase==="midfield")return he();if(u.phase==="finished")return w();const f=u[o+"Team"],m=u[g+"Team"];pe();const x=u[o+"Score"],b=u[g+"Score"],h=u[o+"Name"],$=u[g+"Name"],A=u.phase===o+"-attack",_=u.phase===o+"-defense",z=Array.isArray(u["selected_"+o])?u["selected_"+o]:[],S=z.map(J=>J.cardId),F=window.innerWidth>=700,B=u[o+"Subs"]||[],O=u["usedSubIds_"+o]||[],H=B.filter(J=>!O.includes(J.cardId)),W=u["gcCardsFull_"+o]||[],V=u["usedGc_"+o]||[],ee=W.filter(J=>!V.includes(J.id)),ne=u.boostOwner===o&&!u.boostUsed,fe=!["GK","DEF","MIL","ATT"].some(J=>(m[J]||[]).some(le=>!le.used)),ye=[...f.MIL||[],...f.ATT||[]].filter(J=>!J.used),ve=A&&fe&&ye.length===0?[...f.GK||[],...f.DEF||[]].filter(J=>!J.used).map(J=>J.cardId):[];function we(J,le,Me){var zi,Si;const ke=J._gcDef,tt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ke==null?void 0:ke.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",it={purple:"#b06ce0",light_blue:"#00d4ef"}[ke==null?void 0:ke.color]||"#b06ce0",rt=(ke==null?void 0:ke.name)||J.gc_type,st=(ke==null?void 0:ke.effect)||((zi=Ke[J.gc_type])==null?void 0:zi.desc)||"",ct=ke!=null&&ke.image_url?`/manager-wars/icons/${ke.image_url}`:null,$t=((Si=Ke[J.gc_type])==null?void 0:Si.icon)||"⚡",pt=Math.round(Me*.22),ht=Math.round(Me*.22),kt=Me-pt-ht,Ht=rt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${J.id}" data-gc-type="${J.gc_type}"
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
        <div style="font-size:${Math.round(le*.09)}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const Le=(J,le)=>le?Ie(130,175):we(J,130,175),Re=(J,le)=>le?Ie(68,95):we(J,68,95),je=F?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=A?Ce(o)?`<button id="pvp-action" style="${je};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${je};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${je};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${$}</div>`,Fe=A&&!Ce(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':A||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",Ve=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${F?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${H.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':H.map(J=>`<div class="pvp-sub-btn" data-sub-id="${J.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(J,F?76:44,F?100:58)}</div>`).join("")}
    </div>`,Ne=A?"attack":_?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(f,u[o+"Formation"],Ne,S,300,300,ve)}
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
        </div>`}return`<div style="font-size:11px;color:${J.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${J.type==="goal"?700:400};padding:3px 2px">${J.text||""}</div>`}const Je=(()=>{var le,Me;if(_&&((le=u.pendingAttack)!=null&&le.players)){const ke=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${$} ATTAQUE — Défendez !</div>
          ${nt((ke.players||[]).map(tt=>({...tt,used:!1})),"#ff6b6b",ke.total)}
        </div>`}if(A&&((Me=u.pendingAttack)!=null&&Me.players)){const ke=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${nt((ke.players||[]).map(tt=>({...tt,used:!1})),"#00ff88",ke.total)}
        </div>`}const J=(u.log||[]).slice(-1)[0];return J?'<div style="padding:2px 4px">'+Ue(J)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ze=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${b}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",F?e.innerHTML=`
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
              ${ft(f,u[o+"Formation"],Ne,S,300,300,ve)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ee.map(J=>Re(J,!1)).join("")}
            ${ne?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${A&&H.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${A&&H.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${A&&H.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${A&&H.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${H.length}</div>
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
          <div>${Oe}${Fe}</div>
        </div>
      </div>`;function Qe(){const J=e.querySelector(".match-screen");if(!J)return;const le=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);J.style.height=le+"px",J.style.minHeight=le+"px",J.style.maxHeight=le+"px",J.style.overflow="hidden";const Me=e.querySelector("#mobile-action-bar"),ke=e.querySelector("#mobile-play-area");Me&&ke&&(ke.style.paddingBottom=Me.offsetHeight+"px")}if(Qe(),setTimeout(Qe,120),setTimeout(Qe,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Qe),window.visualViewport.addEventListener("scroll",Qe)),window.addEventListener("resize",Qe)),function(){const le=e.querySelector(".terrain-wrapper svg");le&&(le.removeAttribute("width"),le.removeAttribute("height"),le.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",le.setAttribute("viewBox","-26 -26 352 352"),le.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(J=>{J.addEventListener("click",()=>{if(!A&&!_)return;const le=J.dataset.cardId,Me=J.dataset.role,ke=(f[Me]||[]).find(st=>st.cardId===le);if(!ke||ke.used)return;const tt=ve.includes(le);if(A&&!["MIL","ATT"].includes(Me)&&!tt)return;Array.isArray(u["selected_"+o])||(u["selected_"+o]=[]);const it=u["selected_"+o],rt=it.findIndex(st=>st.cardId===le);rt>-1?it.splice(rt,1):it.length<3&&it.push({...ke,_role:Me}),be()})}),e.querySelectorAll(".match-used-hit").forEach(J=>{J.addEventListener("click",()=>R(J.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(J=>{J.addEventListener("click",()=>R())}),(ot=e.querySelector("#pvp-sub-open"))==null||ot.addEventListener("click",()=>R()),e.querySelectorAll(".pvp-gc-mini").forEach(J=>{J.addEventListener("click",()=>te(J.dataset.gcId,J.dataset.gcType))}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>re()),(de=e.querySelector("#pvp-action"))==null||de.addEventListener("click",J=>{A?J.currentTarget.dataset.pass==="1"||!Ce(o)?xe():ae():_&&ue()}),(_e=e.querySelector("#pvp-quit"))==null||_e.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&P()}),(Q=e.querySelector("#pvp-view-opp"))==null||Q.addEventListener("click",()=>ge()),(ce=e.querySelector("#pvp-toggle-history"))==null||ce.addEventListener("click",()=>me()),K&&(clearInterval(K),K=null),(A||_)&&!M){let J=30,le=!1;const Me=()=>document.getElementById("pvp-timer"),ke=()=>{Me()&&(Me().textContent=J+"s",Me().style.color=le?"#ff4444":"#fff")};ke(),K=setInterval(()=>{J--,J<0?le?(clearInterval(K),K=null,A&&!Ce(o)?xe():P()):(le=!0,J=15,ke()):ke()},1e3)}}function Te(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${u[g+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(u[g+"Team"],u[g+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await oe({phase:"midfield"})},5e3)}let Ee=!1;function he(){if(Ee)return;const f=u[o+"Team"].MIL||[],m=u[g+"Team"].MIL||[];function x(ee){return ee.reduce((ne,fe)=>ne+ze(fe,"MIL"),0)}function b(ee){let ne=0;for(let fe=0;fe<ee.length-1;fe++){const ye=at(ee[fe],ee[fe+1]);ye==="#00ff88"?ne+=2:ye==="#FFD700"&&(ne+=1)}return ne}const h=x(f)+b(f),$=x(m)+b(m),A=h>=$;function _(ee,ne,fe){return`<div id="duel-row-${fe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ne}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${ee.map((ye,ve)=>{const we=ve<ee.length-1?at(ye,ee[ve+1]):null,Ie=!we||we==="#ff3333"||we==="#cc2222",Le=we==="#00ff88"?"+2":we==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${fe}" data-idx="${ve}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...ye,note:ze(ye,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ve<ee.length-1?`<div class="duel-link duel-link-${fe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Ie?"rgba(255,255,255,0.12)":we};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Ie?"none":`0 0 8px ${we}`}">
              ${Le?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${we}">${Le}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${fe}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(ee)} + ${b(ee)} liens = <b style="color:#fff">${x(ee)+b(ee)}</b>
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
      ${_(f,u[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(m,u[g+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(ee,ne)=>e.querySelectorAll(ee).forEach((fe,ye)=>{setTimeout(()=>{fe.style.opacity="1",fe.style.transform="translateY(0) scale(1)"},ne+ye*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ee,ne)=>setTimeout(()=>{ee.style.opacity="1"},ne*70)),900),setTimeout(()=>{const ee=e.querySelector("#pvp-vs");ee&&(ee.style.opacity="1",ee.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ne=>ne.style.opacity="1")},1250);function S(ee,ne,fe){const ye=document.getElementById(ee);if(!ye)return;const ve=performance.now(),we=Ie=>{const Le=Math.min(1,(Ie-ve)/fe);ye.textContent=Math.round(ne*(1-Math.pow(1-Le,3))),Le<1?requestAnimationFrame(we):ye.textContent=ne};requestAnimationFrame(we)}setTimeout(()=>{S("pvp-score-me",h,800),S("pvp-score-opp",$,800)},1500);const F=u.p1Team.MIL||[],B=u.p2Team.MIL||[],O=x(F)+b(F),H=x(B)+b(B),W=O>=H?"p1":"p2";let V=u.boostValue;V==null&&(V=ti(),u.boostValue=V,u.boostOwner=W,u.boostUsed=!1),Ee=!0,setTimeout(()=>{const ee=e.querySelector("#duel-row-"+(A?"me":"opp")),ne=e.querySelector("#duel-row-"+(A?"opp":"me")),fe=document.getElementById("pvp-score-me"),ye=document.getElementById("pvp-score-opp"),ve=A?fe:ye,we=A?ye:fe;ve&&(ve.style.fontSize="80px",ve.style.color=A?"#FFD700":"#ff6b6b",ve.style.animation="duelPulse .5s ease"+(A?",duelGlow 1.5s ease infinite .5s":"")),we&&(we.style.opacity="0.25"),setTimeout(()=>{ee&&(ee.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ee.style.zIndex="5"),setTimeout(()=>{const Ie=document.getElementById("duel-shock");Ie&&(Ie.style.animation="shockwave .5s ease-out forwards"),ne&&(ne.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var je;const Ie=document.getElementById("pvp-duel-finale");if(!Ie)return;const Le=u.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+V+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Ie.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(A?"⚽ "+u[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+u[g+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Le+Re,Ie.style.transition="opacity .45s ease",Ie.style.opacity="1",Ie.style.pointerEvents="auto",(je=document.getElementById("pvp-start-match"))==null||je.addEventListener("click",async()=>{const Oe=W;await oe({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:V,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function $e(f,m,x,b,h){const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const A=Array.from({length:10},(F,B)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${B%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][B%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};$.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${A}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${b?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${m} – ${x}
      </div>
      ${f!=null&&f.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${f.map(F=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[F.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${F.portrait?`<img src="${F.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(F.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild($);let z=!1;const S=()=>{z||(z=!0,$.remove(),setTimeout(()=>h(),50))};$.addEventListener("click",S),setTimeout(S,3500)}function Ae(f,m,x){var V,ee;const b=(u.gcDefs||[]).find(ne=>{var fe;return ne.name===f||((fe=ne.name)==null?void 0:fe.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",A=(b==null?void 0:b.name)||f,_=(b==null?void 0:b.effect)||((V=Ke[f])==null?void 0:V.desc)||"",z=b!=null&&b.image_url?`/manager-wars/icons/${b.image_url}`:null,S=((ee=Ke[f])==null?void 0:ee.icon)||"⚡",B=m===o?"Vous":u[m+"Name"]||"Adversaire",O=document.createElement("div");O.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",O.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${$}66}50%{box-shadow:0 0 60px ${$}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${$};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${B} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${$};background:${h};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${A.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${A}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${z?`<img src="${z}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(O);let H=!1;const W=()=>{H||(H=!0,O.remove(),setTimeout(()=>x&&x(),50))};O.addEventListener("click",W),setTimeout(W,3e3)}function te(f,m){var O,H,W,V;const b=(u["gcCardsFull_"+o]||[]).find(ee=>ee.id===f),h=b==null?void 0:b._gcDef,$={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",A={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",_=(h==null?void 0:h.name)||m,z=(h==null?void 0:h.effect)||((O=Ke[m])==null?void 0:O.desc)||"Carte spéciale.",S=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,F=((H=Ke[m])==null?void 0:H.icon)||"⚡",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",B.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${A};background:${$};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${A}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${F}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(B),(W=B.querySelector("#pvp-gc-back"))==null||W.addEventListener("click",()=>B.remove()),(V=B.querySelector("#pvp-gc-use"))==null||V.addEventListener("click",()=>{B.remove(),G(f,m)})}function re(){var b;const f=u[o+"Team"],m=Object.entries(f).flatMap(([h,$])=>($||[]).filter(A=>!A.used).map(A=>({...A,_line:h})));if(!m.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(h=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[h._line]||"#555",A=ze(h,h._line)+(h.boost||0);return`<div class="bp-item" data-cid="${h.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${$};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${h.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${A}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(b=x.querySelector("#bp-close"))==null||b.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(h=>{h.addEventListener("click",async()=>{const $=h.dataset.cid,A=m.find(z=>z.cardId===$);if(!A)return;const _=(f[A._line]||[]).find(z=>z.cardId===$);_&&(_.boost=(_.boost||0)+u.boostValue),x.remove(),await oe({[o+"Team"]:f,boostUsed:!0})})})}function R(f=null){var H,W;if(!(u.phase===o+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const x=u[o+"Team"],b=u["usedSubIds_"+o]||[],h=u.maxSubs||3;if(b.length>=h){p(`Maximum ${h} remplacements atteint`,"warning");return}const $=Object.entries(x).flatMap(([V,ee])=>(ee||[]).filter(ne=>ne.used).map(ne=>({...ne,_line:V}))),A=(u[o+"Subs"]||[]).filter(V=>!b.includes(V.cardId));if(!$.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!A.length){p("Aucun remplaçant disponible","warning");return}let _=Math.max(0,$.findIndex(V=>V.cardId===f));const z=((H=$[_])==null?void 0:H._line)||((W=$[_])==null?void 0:W.job);let S=Math.max(0,A.findIndex(V=>V.job===z)),F=!1;const B=document.createElement("div");B.id="pvp-sub-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function O(){var we,Ie,Le,Re,je,Oe;const V=$[_],ee=A[S],ne=Math.min(130,Math.round((window.innerWidth-90)/2)),fe=Math.round(ne*1.35),ye=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;B.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${b.length}/${h})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ye(S===0)}" ${S===0?"disabled":""}>▲</button>
          <div>${ee?Ye({...ee,used:!1,boost:0},ne,fe):"<div>—</div>"}</div>
          <button id="pin-down" style="${ye(S>=A.length-1)}" ${S>=A.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${S+1}/${A.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ye(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${V?Ye({...V,used:!1,boost:0},ne,fe):"<div>—</div>"}</div>
          <button id="pout-down" style="${ye(_>=$.length-1)}" ${_>=$.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${$.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(we=B.querySelector("#psub-close"))==null||we.addEventListener("click",()=>B.remove()),(Ie=B.querySelector("#pout-up"))==null||Ie.addEventListener("click",()=>{_>0&&(_--,O())}),(Le=B.querySelector("#pout-down"))==null||Le.addEventListener("click",()=>{_<$.length-1&&(_++,O())}),(Re=B.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{S>0&&(S--,O())}),(je=B.querySelector("#pin-down"))==null||je.addEventListener("click",()=>{S<A.length-1&&(S++,O())});const ve=(Fe,Ve,Ne,He)=>{const Ue=B.querySelector("#"+Fe);if(!Ue)return;let Je=0;Ue.addEventListener("touchstart",Ze=>{Je=Ze.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ze=>{const Qe=Ze.changedTouches[0].clientY-Je;if(Math.abs(Qe)<30)return;const ot=Ve();Qe<0&&ot<He-1?(Ne(ot+1),O()):Qe>0&&ot>0&&(Ne(ot-1),O())},{passive:!0})};ve("pin-panel",()=>S,Fe=>S=Fe,A.length),ve("pout-panel",()=>_,Fe=>_=Fe,$.length),(Oe=B.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),F)return;F=!0;const Ve=$[_],Ne=A[S];if(!Ve||!Ne)return;const He=Ve._line,Ue=(x[He]||[]).findIndex(Qe=>Qe.cardId===Ve.cardId);if(Ue===-1){p("Erreur : joueur introuvable","error"),B.remove();return}const Je={...Ne,_line:He,position:Ve.position,used:!1,boost:0};x[He].splice(Ue,1,Je);const Ze=[...b,Ne.cardId];B.remove(),Z(Ve,Ne,async()=>{await oe({[o+"Team"]:x,[g+"Team"]:u[g+"Team"],["usedSubIds_"+o]:Ze})})})}document.body.appendChild(B),O()}function Z(f,m,x){const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const $=(z,S,F)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${F}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${b[z.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(z)?`<img src="${Pe(z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(z.name||"").slice(0,12)}</div>
    </div>`;h.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${$(m,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${$(f,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(h);let A=!1;const _=()=>{A||(A=!0,h.remove(),setTimeout(()=>x(),50))};h.addEventListener("click",_),setTimeout(_,2200)}function ge(){var m;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",f.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[g+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(u[g+"Team"],u[g+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(f),(m=f.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>f.remove())}function me(){var b;const f=u.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const x=h=>{var A,_,z;if(h.type==="duel"){const S=h.isGoal,F=h.homeScored&&o==="p1"||!h.homeScored&&S&&o==="p2",B=h.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",O=S?F?"⚽ BUT !":"⚽ BUT adversaire !":(A=h.homePlayers)!=null&&A.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${B};margin-bottom:4px">
          <div style="font-size:9px;color:${B};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${O}</div>
          ${(_=h.homePlayers)!=null&&_.length?`<div style="margin-bottom:3px">${nt(h.homePlayers,"rgba(255,255,255,0.7)",h.homeTotal)}</div>`:""}
          ${(z=h.aiPlayers)!=null&&z.length?`<div style="opacity:0.7">${nt(h.aiPlayers,"#ff6b6b",h.aiTotal)}</div>`:""}
        </div>`}return h.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${h.outPlayer?Ye({...h.outPlayer,used:!0,_line:h.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${h.inPlayer?Ye({...h.inPlayer,_line:h.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${h.type==="goal"?"#FFD700":h.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${h.text||""}</div>
      </div>`};m.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${f.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...f].reverse().map(x).join("")}
      </div>`,document.body.appendChild(m),(b=m.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>m.remove())}async function xe(){if(u.phase!==o+"-attack")return;const f=o==="p1"?"p2":"p1",m=(u.round||0)+1,x=[...u.log||[]];x.push({type:"info",text:`⏭️ ${u[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const b=De(u),h=Ce(f),$=b||!h?"finished":f+"-attack";await oe({["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:$,attacker:f,round:m,log:x}),$==="finished"&&await j(u)}async function ae(){const f=u[o+"Team"],m=!["GK","DEF","MIL","ATT"].some($=>(u[g+"Team"][$]||[]).some(A=>!A.used)),x=(u["selected_"+o]||[]).map($=>{const A=(f[$._role]||[]).find(O=>O.cardId===$.cardId)||$,_=m&&["GK","DEF"].includes($._role),z=f[$._role]||[],S=z.findIndex(O=>O.cardId===$.cardId),F=lt(z.length),B=S>=0?F[S]:A._col??1;return{...A,_line:$._role,_col:B,..._?{note_a:Math.max(1,Number(A.note_a)||0)}:{}}});if(!x.length)return;const b=Nt(x,u.modifiers[o]||{});ie(o,x.map($=>$.cardId)),x.forEach($=>{const A=(f[$._role]||[]).find(_=>_.cardId===$.cardId);A&&(A.used=!0)}),u["selected_"+o]=[],be();const h=[...u.log||[]];if(m){const $=(u[o+"Score"]||0)+1,A=x.map(B=>({name:B.name,note:ze(B,B._line||"ATT"),portrait:Pe(B),job:B.job}));h.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:A,homeTotal:b.total,aiTotal:0});const _=(u.round||0)+1,z=o==="p1"?"p2":"p1",S={...u,[o+"Team"]:f,[o+"Score"]:$},F=De(S);q.add(_),$e(A,$,u[g+"Score"]||0,!0,async()=>{await oe({[o+"Team"]:f,[o+"Score"]:$,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:F?"finished":z+"-attack",attacker:z,round:_,log:h}),F&&await j({...u,[o+"Score"]:$})});return}h.push({type:"pending",text:`⚔️ ${u[o+"Name"]} attaque (${b.total})`}),await oe({[o+"Team"]:f,[g+"Team"]:u[g+"Team"],pendingAttack:{...b,players:x,side:o},["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},phase:g+"-defense",log:h})}async function ue(){const f=u[o+"Team"],m=(u["selected_"+o]||[]).map(V=>{const ee=(f[V._role]||[]).find(we=>we.cardId===V.cardId)||V,ne=f[V._role]||[],fe=ne.findIndex(we=>we.cardId===V.cardId),ye=lt(ne.length),ve=fe>=0?ye[fe]:ee._col??1;return{...ee,_line:V._role,_col:ve}}),x=Rt(m,u.modifiers[o]||{});ie(o,m.map(V=>V.cardId)),m.forEach(V=>{const ee=(f[V._role]||[]).find(ne=>ne.cardId===V.cardId);ee&&(ee.used=!0)}),u["selected_"+o]=[],be();const b=Ot(u.pendingAttack.total,x.total,u.modifiers[o]||{}),h=u.pendingAttack.side,$=b==="attack"||(b==null?void 0:b.goal),A=h==="p1"?"p2":"p1",_=(u.round||0)+1,z=(u.pendingAttack.players||[]).map(V=>({name:V.name,note:ze(V,V._line||"ATT"),portrait:Pe(V),job:V.job})),S=[...u.log||[]];S.push({type:"duel",isGoal:$,homeScored:$&&h===o,text:$?`⚽ BUT de ${u[h+"Name"]} ! (${u.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${x.total})`,homePlayers:z,aiPlayers:m.map(V=>({name:V.name,note:ze(V,V._line||"DEF"),portrait:Pe(V),job:V.job})),homeTotal:u.pendingAttack.total,aiTotal:x.total});const F=$?(u[h+"Score"]||0)+1:u[h+"Score"]||0,B={...u,[o+"Team"]:f,[h+"Score"]:F},O=De(B),H=O?"finished":A+"-attack",W=async()=>{await oe({[o+"Team"]:f,[g+"Team"]:u[g+"Team"],[h+"Score"]:F,["selected_"+o]:[],modifiers:{...u.modifiers,[o]:{}},pendingAttack:null,phase:H,attacker:A,round:_,log:S}),(H==="finished"||O)&&await j({...u,[h+"Score"]:F})};if($){const V=h===o,ee=V?F:u[o+"Score"]||0,ne=V?u[g+"Score"]||0:F;q.add(_),$e(z,ee,ne,V,W)}else await W()}function Se(f){return["MIL","ATT"].some(m=>(f[m]||[]).some(x=>!x.used))}function qe(f){return["GK","DEF","MIL","ATT"].some(m=>(f[m]||[]).some(x=>!x.used))}function Be(f){return qe(f)&&!Se(f)}function Ce(f){const m=u[f+"Team"],x=u[(f==="p1"?"p2":"p1")+"Team"];return!!(Se(m)||!qe(x)&&Be(m))}function De(f){const m=["MIL","ATT"].some(S=>(f.p1Team[S]||[]).some(F=>!F.used)),x=["MIL","ATT"].some(S=>(f.p2Team[S]||[]).some(F=>!F.used)),b=qe(f.p1Team),h=qe(f.p2Team);return!m&&!(!h&&b)&&(!x&&!(!b&&h))}function I(f){const m=f.p1Score||0,x=f.p2Score||0;return m===x?null:m>x?T.home_id:T.away_id}async function j(f){try{const m=I(f),x=m?T.home_id===m?T.away_id:T.home_id:null,b=f.p1Score||0,h=f.p2Score||0;await E.from("matches").update({status:"finished",winner_id:m,home_score:b,away_score:h}).eq("id",i);const{data:$}=await E.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if($){await E.from("mini_league_matches").update({home_score:b,away_score:h,status:"finished"}).eq("id",$.id);const{data:A}=await E.from("mini_league_matches").select("id, status").eq("league_id",$.league_id).eq("matchday",$.matchday);if((A||[]).every(z=>z.status==="finished"||z.status==="bye")){const{data:z}=await E.from("mini_leagues").select("current_day,total_days").eq("id",$.league_id).single();if(z){const S=(z.current_day||0)+1,F=S>(z.total_days||0);await E.from("mini_leagues").update({current_day:F?z.total_days:S,status:F?"finished":"active"}).eq("id",$.league_id)}}}m&&x&&_i(m,x).catch(()=>{})}catch(m){console.error("[ML] finishMatch:",m)}}function w(){var h;if(M&&document.getElementById("pvp-end-overlay"))return;M=!0;const f=u[o+"Score"],m=u[g+"Score"],x=f>m,b=f===m;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":b?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":b?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${f} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(h=document.getElementById("pvp-home"))==null||h.addEventListener("click",()=>{try{E.removeChannel(se)}catch{}We(e),l("mini-league",n?{openLeagueId:n}:{})})}be()}const lr="/manager-wars/",cr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function pr(e,t,i){let s=0;const c=document.createElement("div");c.id="tutorial-overlay",c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const d=()=>{var o,g,v;const l=t[s],p=s===t.length-1,n=Math.round((s+1)/t.length*100);c.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${n}%;background:${l.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${l.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${l.title}</div>
          <div style="font-size:11px;color:#aaa">${s+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${l.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${lr}icons/${l.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${l.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${l.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${s>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${p?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${l.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${p?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,c.querySelectorAll("ul,ol").forEach(y=>{y.style.paddingLeft="20px",y.style.marginTop="6px",y.style.marginBottom="6px"}),c.querySelectorAll("li").forEach(y=>{y.style.marginBottom="4px"}),c.querySelectorAll("p").forEach(y=>{y.style.marginBottom="8px"}),(o=c.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{s--,d()}),(g=c.querySelector("#tuto-next"))==null||g.addEventListener("click",()=>{p?a():(s++,d())}),(v=c.querySelector("#tuto-skip"))==null||v.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{c.remove(),e!=null&&e.id&&await E.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(c),d()}async function ur(e,t,i){if(!e||e.tutorial_done)return;let s=[];const{data:c,error:d}=await E.rpc("get_tutorial_steps");if(!d&&(c==null?void 0:c.length)>0)s=c,console.log(`[Tutorial] RPC OK → ${s.length} étapes`);else{const{data:l,error:p}=await E.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!p&&(l==null?void 0:l.length)>0?(s=l,console.log(`[Tutorial] Direct OK → ${s.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${d==null?void 0:d.message}, Direct: ${p==null?void 0:p.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=s.length>0?s.map(l=>({emoji:l.emoji,title:l.title,color:l.color,content:l.content,image_url:l.image_url||null})):cr;pr(e,a,()=>t("boosters"))}const fr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t){return t&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Hi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Yt(e,t){const s=t?fr[t]||"#bbb":"#d0d0d0",c=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${s};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${c}</div>`}function Ui(e){const i=Xt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Vi(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function gr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Ti(e,t)}async function Ti(e,t){const{state:i,toast:s}=t,{data:c}=await E.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:d}=await E.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(c||[]).filter(r=>r.seller_id!==i.profile.id),l=d||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${a.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
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
  </div>`;let p="buy";const n=()=>{var r,u,M,L,N,K,C;return{name:(((r=document.getElementById("flt-name"))==null?void 0:r.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((M=document.getElementById("flt-country"))==null?void 0:M.value)||"").toLowerCase().trim(),job:((L=document.getElementById("flt-job"))==null?void 0:L.value)||"",rarity:((N=document.getElementById("flt-rarity"))==null?void 0:N.value)||"",note1:parseInt((K=document.getElementById("flt-note1"))==null?void 0:K.value)||0,note2:parseInt((C=document.getElementById("flt-note2"))==null?void 0:C.value)||0}};function o(r){const u=n();return r.filter(M=>{var X,se;const L=(X=M.card)==null?void 0:X.player;if(!L)return!1;const N=`${L.firstname} ${L.surname_encoded}`.toLowerCase(),K=(((se=L.clubs)==null?void 0:se.encoded_name)||"").toLowerCase(),C=(L.country_code||"").toLowerCase(),q=Et(L,L.job),D=L.job2?Et(L,L.job2):0;return!(u.name&&!N.includes(u.name)||u.club&&!K.includes(u.club)||u.country&&!C.includes(u.country)||u.job&&L.job!==u.job||u.rarity&&L.rarity!==u.rarity||u.note1&&q<u.note1||u.note2&&D<u.note2)})}function g(r){var K,C,q;const u=(K=r.card)==null?void 0:K.player;if(!u)return"";const M=Et(u,u.job),L=u.job2?Et(u,u.job2):0,N=(i.profile.credits||0)>=r.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Hi(u.rarity)}
      ${Yt(M,u.job)}
      ${Yt(L,u.job2||null)}
      ${Ui(u.country_code)}
      ${Vi((C=u.clubs)==null?void 0:C.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.firstname} ${u.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((q=r.seller)==null?void 0:q.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${r.id}" ${N?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${N?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function v(r){var K,C,q;const u=(K=r.card)==null?void 0:K.player;if(!u)return"";const M=Et(u,u.job),L=u.job2?Et(u,u.job2):0,N=r.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${N?"opacity:0.7":""}">
      ${Hi(u.rarity)}
      ${Yt(M,u.job)}
      ${Yt(L,u.job2||null)}
      ${Ui(u.country_code)}
      ${Vi((C=u.clubs)==null?void 0:C.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.firstname} ${u.surname_encoded}</div>
        <div style="font-size:10px;color:${N?"#22c55e":"#999"};margin-top:1px">
          ${N?`✅ Vendu à ${((q=r.buyer)==null?void 0:q.pseudo)||"—"} · ${r.sold_at?new Date(r.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(r.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        ${N?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${r.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function y(){const r=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(r){if(u.style.display=p==="buy"?"flex":"none",p==="buy"){const M=o(a);r.innerHTML=M.length?M.map(g).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const M=l.filter(N=>N.status==="active").sort((N,K)=>new Date(K.listed_at)-new Date(N.listed_at)),L=l.filter(N=>N.status==="sold").sort((N,K)=>new Date(K.sold_at||K.listed_at)-new Date(N.sold_at||N.listed_at));r.innerHTML=(M.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${M.length})</div>`+M.map(v).join(""):"")+(L.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${L.length})</div>`+L.map(v).join(""):"")+(!M.length&&!L.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}r.querySelectorAll("[data-buy]").forEach(M=>M.addEventListener("click",()=>mr(M.dataset.buy,a,e,t))),r.querySelectorAll("[data-cancel]").forEach(M=>M.addEventListener("click",()=>yr(M.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{p=r.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const M=u===r;u.style.background=M?"var(--green)":"#fff",u.style.color=M?"#fff":"var(--gray-600)",u.style.borderColor=M?"var(--green)":"var(--gray-200)"}),y()})});let T;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(r=>{var u;(u=document.getElementById(r))==null||u.addEventListener("input",()=>{clearTimeout(T),T=setTimeout(y,250)})}),y()}async function mr(e,t,i,s){const{state:c,toast:d,refreshProfile:a}=s,l=t.find(o=>o.id===e);if(!l)return;const p=l.price;if((c.profile.credits||0)<p){d("Crédits insuffisants","error");return}xr(l,async()=>{const{error:o}=await E.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(o){d("Erreur achat : "+o.message,"error");return}await a();const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),d("✅ Carte achetée !","success"),await Ti(i,s)})}function xr(e,t){var a;const i=(a=e.card)==null?void 0:a.player,s=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${s} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(c);const d=l=>{c.remove(),l&&t()};c.querySelector("#buy-cancel").addEventListener("click",()=>d(!1)),c.querySelector("#buy-ok").addEventListener("click",()=>d(!0)),c.addEventListener("click",l=>{l.target===c&&d(!1)})}async function yr(e,t,i){const{toast:s}=i,{data:c}=await E.from("market_listings").select("card_id").eq("id",e).single();if(await E.from("market_listings").update({status:"cancelled"}).eq("id",e),c!=null&&c.card_id){const{count:d}=await E.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",c.card_id).eq("status","active");d||await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id)}s("Annonce retirée","success"),Ti(t,i)}async function br(e,{state:t,navigate:i,toast:s}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await E.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${c&&c.length>0?c.map((d,a)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${d.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${a+1}</div>
            <div style="flex:1">
              <div style="font-weight:700">${d.pseudo}</div>
              <div style="font-size:11px;color:var(--gray-600)">${d.club_name}</div>
            </div>
            <div style="text-align:right;font-size:12px">
              <div>🥇${d.trophies_top1} 🥈${d.trophies_top2} 🥉${d.trophies_top3}</div>
              <div style="color:var(--gray-600)">${d.wins} V</div>
            </div>
          </div>
        `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}
      </div>
    </div>
  </div>
  `}async function hr(e,{state:t,navigate:i,toast:s}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(d||[]).filter(o=>o.status==="finished"),p=(d||[]).filter(o=>o.status==="in_progress");function n(o){const g=o.home_id===c.id;g?o.home_score:o.away_score,g?o.away_score:o.home_score;const v=o.winner_id===c.id,y=o.home_score===o.away_score&&o.status==="finished",T=o.status!=="finished"?"…":y?"N":v?"V":"D",r=o.status!=="finished"||y?"#888":v?"#1A6B3C":"#c0392b";let u=a[o.mode]||o.mode;o.away_id===null&&!u.startsWith("IA")&&(u="IA");const L=o.home_id===c.id?o.away:o.home;let N;o.away_id===null?N=u:L?N=`${L.club_name||L.pseudo} (${L.pseudo})`:N="Adversaire";let K="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(K=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const C=new Date(o.created_at),q=C.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+C.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),D=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${N}${K}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${q}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${D}</span>
        <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${T}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(d||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${p.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${p.map(n).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(n).join("")}
        </div>`:""}

      ${(d||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}zn(Ln);const Ge={user:null,profile:null,page:"home",params:{}};function At(e,t="info",i=3e3){const s=document.getElementById("toast");s&&(s.textContent=e,s.className=`show ${t}`,clearTimeout(s._t),s._t=setTimeout(()=>{s.className=""},i))}function vr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function mi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ct(){if(!Ge.user)return;const{data:e}=await E.from("users").select("*").eq("id",Ge.user.id).single();e&&(Ge.profile=e)}function Ft(e,t={}){Ge.page=e,Ge.params=t,An()}async function An(){var s,c,d,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===Ge.page)});const t=document.getElementById("nav-credits");t&&Ge.profile&&(t.textContent=`💰 ${(Ge.profile.credits||0).toLocaleString("fr")}`);const i={state:Ge,navigate:Ft,toast:At,openModal:vr,closeModal:mi,refreshProfile:Ct};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ge.page){case"home":await Ci(e,i);break;case"collection":await Xn(e,i);break;case"decks":await li(e,i);break;case"boosters":await uo(e,i);break;case"match":{const l=Ge.params&&Ge.params.matchMode||"vs_ai_easy";l==="random"?await wn(e,i):l==="friend"?await Vo(e,i,(s=Ge.params)==null?void 0:s.friendId,(c=Ge.params)==null?void 0:c.friendName):l==="mini-league"?await Oi(e,i,(d=Ge.params)==null?void 0:d.mlMatchId,(a=Ge.params)==null?void 0:a.leagueId):await To(e,i);break}case"market":await gr(e,i);break;case"rankings":await br(e,i);break;case"matches":await hr(e,i);break;case"friends":await Bn(e,i);break;case"mini-league":await Wo(e,i);break;case"match-mini-league":{const l=Ge.params||{};await Oi(e,i,l.mlMatchId,l.leagueId);break}default:await Ci(e,i)}}function wr(){var s;const e=document.getElementById("app"),t=Ge.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(c=>{c.addEventListener("click",d=>{d.preventDefault(),Ft(c.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ft("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ft("boosters")),(s=document.getElementById("journal-btn"))==null||s.addEventListener("click",()=>_r())}async function _r(){const{data:e}=await E.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(s=>{const c=new Date(s.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${s.image_url?`<img src="${s.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${c}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${s.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${s.description}</div>
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",s=>{s.target===t&&t.remove()})}async function $r(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&mi()}),document.getElementById("modal-close").addEventListener("click",mi);const{data:{session:e}}=await E.auth.getSession();if(!e){Ki(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At});return}Ge.user=e.user,await Ct(),Ki();try{const{data:i}=await E.from("formation_links_overrides").select("formation, links"),s={};(i||[]).forEach(c=>{s[c.formation]=c.links}),Sn(s)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Ge.profile){Mn(document.getElementById("app"),{state:Ge,navigate:async()=>{await Ct(),si()},toast:At,refreshProfile:Ct});return}const t=Array.isArray(Ge.profile.pending_boosters)?Ge.profile.pending_boosters:[];if(!Ge.profile.onboarding_done&&t.length>0){$o(document.getElementById("app"),{state:Ge,navigate:()=>si(),toast:At,refreshProfile:Ct});return}si(),setTimeout(()=>ur(Ge.profile,Ft,At),800),E.auth.onAuthStateChange(async(i,s)=>{i==="SIGNED_OUT"&&(Ge.user=null,Ge.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At}))})}function kr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function oi(){const e=document.getElementById("app");e&&(e.style.height=kr()+"px")}window.addEventListener("resize",oi);window.addEventListener("orientationchange",()=>setTimeout(oi,150));window.visualViewport&&window.visualViewport.addEventListener("resize",oi);function si(){const e=()=>{var i;(i=Ge.user)!=null&&i.id&&E.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ge.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",oi(),wr(),An()}function Ki(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Tn(e){var s;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(s=document.getElementById("boot-retry"))==null||s.addEventListener("click",()=>window.location.reload())}$r().catch(e=>{console.error("Échec du démarrage:",e),Tn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Tn("Le serveur met trop de temps à répondre.")},12e3);
