const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-Dnttc-Cp.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as k,F as hi,h as Rt,j as Yi,l as at,i as Ao,k as So,b as zo}from"./formation-links-Dnttc-Cp.js";const Lo="/";function Li(e,{navigate:t,toast:i}){let a="login";const l=()=>{var s,c,f,o,r,m;const d=a==="login";e.innerHTML=`
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
        <img src="${Lo}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(s=document.getElementById("tab-login-btn"))==null||s.addEventListener("click",()=>{a="login",l()}),(c=document.getElementById("tab-reg-btn"))==null||c.addEventListener("click",()=>{a="register",l()}),d?((f=document.getElementById("login-password"))==null||f.addEventListener("keydown",b=>{var u;b.key==="Enter"&&((u=document.getElementById("login-btn"))==null||u.click())}),(o=document.getElementById("login-btn"))==null||o.addEventListener("click",async()=>{const b=document.getElementById("login-email").value.trim(),u=document.getElementById("login-password").value,T=document.getElementById("login-error");if(T.textContent="",!b||!u){T.textContent="Remplissez tous les champs.";return}const n=document.getElementById("login-btn");n.textContent="⏳ Connexion…",n.disabled=!0;const{error:p}=await k.auth.signInWithPassword({email:b,password:u});if(n.textContent="⚽ Se connecter",n.disabled=!1,p){T.textContent=p.message.includes("Invalid")?"Email ou mot de passe incorrect.":p.message;return}window.location.reload()})):((r=document.getElementById("reg-confirm"))==null||r.addEventListener("keydown",b=>{var u;b.key==="Enter"&&((u=document.getElementById("reg-btn"))==null||u.click())}),(m=document.getElementById("reg-btn"))==null||m.addEventListener("click",async()=>{const b=document.getElementById("reg-email").value.trim(),u=document.getElementById("reg-password").value,T=document.getElementById("reg-confirm").value,n=document.getElementById("reg-error");if(n.textContent="",!b||!u||!T){n.textContent="Remplissez tous les champs.";return}if(u.length<6){n.textContent="Mot de passe trop court (min. 6 caractères).";return}if(u!==T){n.textContent="Les mots de passe ne correspondent pas.";return}const p=document.getElementById("reg-btn");p.textContent="⏳ Création…",p.disabled=!0;const{error:A}=await k.auth.signUp({email:b,password:u});if(p.textContent="🚀 Créer mon compte",p.disabled=!1,A){n.textContent=A.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),a="login",l(),setTimeout(()=>{const I=document.getElementById("login-email");I&&(I.value=b)},50)}))};l()}function Io(e,{state:t,navigate:i,toast:a,refreshProfile:l}){let d="#1A6B3C",s="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${s};border-color:${d}">
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
  `;function c(){var T;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),m=((T=document.getElementById("setup-club"))==null?void 0:T.value)||"MW",b=m.trim().split(" ").filter(Boolean),u=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():m.slice(0,2).toUpperCase();o&&(o.style.background=s,o.style.borderColor=d),r&&(r.textContent=u,r.style.color=d)}document.getElementById("color1").addEventListener("input",o=>{d=o.target.value,document.getElementById("swatch1").style.background=d,c()}),document.getElementById("color2").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch2").style.background=s,c()});function f(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&c()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:m}=await k.from("users").select("id").eq("pseudo",o).maybeSingle();if(m){r.textContent="Ce pseudo est déjà pris.";return}f(2)}),document.getElementById("step2-back").addEventListener("click",()=>f(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:m}=await k.from("users").select("id").eq("club_name",o).maybeSingle();if(m){r.textContent="Ce nom de club est déjà pris.";return}f(3)}),document.getElementById("step3-back").addEventListener("click",()=>f(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),m=document.getElementById("step3-error"),b=document.getElementById("step3-finish");m.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:u}=await k.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:d,club_color2:s,credits:1e4});if(u)throw u;await Mo(t.user.id),await l(),a(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){m.textContent=u.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Mo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await k.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const jo="modulepreload",Co=function(e){return"/"+e},Ii={},ii=function(t,i,a){let l=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=Promise.allSettled(i.map(f=>{if(f=Co(f),f in Ii)return;Ii[f]=!0;const o=f.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${r}`))return;const m=document.createElement("link");if(m.rel=o?"stylesheet":jo,o||(m.as="script"),m.crossOrigin="",m.href=f,c&&m.setAttribute("nonce",c),document.head.appendChild(m),o)return new Promise((b,u)=>{m.addEventListener("load",b),m.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})}))}function d(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return l.then(s=>{for(const c of s||[])c.status==="rejected"&&d(c.reason);return t().catch(d)})},Gt="#1A6B3C",Pt="#cc2222",qo="#D4A017",Mi="#888";async function Bo(e,t){const{state:i,toast:a}=t;e.innerHTML=`
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
    </div>`,await Wi(i,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Do(i,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ji(i,a,null,t))}async function Wi(e,t,i={}){const{navigate:a}=i,l=e.user.id,{data:d,error:s}=await k.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${l},addressee_id.eq.${l}`),{count:c}=await k.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",l).eq("status","pending"),f=document.getElementById("pending-badge");f&&(c>0?(f.style.display="flex",f.textContent=c):f.style.display="none");const o=document.getElementById("friends-list");if(!o)return;if(s){console.error("[Friends] Erreur:",s),o.innerHTML=`<div style="color:${Pt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const r=(d||[]).map(u=>u.requester_id===l?u.addressee_id:u.requester_id);let m={};if(r.length){const{data:u}=await k.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",r);(u||[]).forEach(T=>{m[T.id]=T})}const b=(d||[]).map(u=>({friendshipId:u.id,friend:m[u.requester_id===l?u.addressee_id:u.requester_id]||{pseudo:"?"}}));if(!b.length){o.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}o.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:u,friend:T})=>Fo(T,u)).join("")}
    </div>`,o.querySelectorAll("[data-stats]").forEach(u=>{u.addEventListener("click",()=>Go(e,u.dataset.stats,u.dataset.friendName))}),o.querySelectorAll("[data-match]").forEach(u=>{u.addEventListener("click",()=>{const T=u.dataset.friendId,n=u.dataset.friendName;console.log("[Friends] clic match",{fid:T,fname:n,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:T,friendName:n}):t("Erreur navigation","error")})})}function Fo(e,t){const i=e.club_name||e.pseudo||"?",a=e.pseudo||"",l=(a||i).slice(0,2).toUpperCase(),d=e.club_color2||Gt,s=e.club_color1||"#ffffff",c=e.last_seen_at?new Date(e.last_seen_at):null,f=c&&Date.now()-c.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${d};border:2.5px solid ${s};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${s}">
          ${l}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${f?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${a}</div>
        <div style="font-size:11px;color:${f?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${f?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${qo};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Do(e,t){const i=vi();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Pt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${wi()}`,document.body.appendChild(i);const a=i.querySelector("#friend-pseudo-input"),l=i.querySelector("#add-friend-error"),d=()=>i.remove();a.focus(),i.querySelector("#add-cancel").addEventListener("click",d),i.addEventListener("click",s=>{s.target===i&&d()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const s=a.value.trim();if(!s){l.textContent="Entre un pseudo";return}l.textContent="";const{data:c}=await k.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!c){l.textContent="Utilisateur introuvable";return}if(c.id===e.user.id){l.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:f}=await k.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${c.id}),and(requester_id.eq.${c.id},addressee_id.eq.${e.user.id})`).single();if(f){const r=f.status==="accepted"?"Vous êtes déjà amis !":f.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";l.textContent=r;return}const{error:o}=await k.from("friendships").insert({requester_id:e.user.id,addressee_id:c.id,status:"pending"});if(o){l.textContent="Erreur : "+o.message;return}d(),t(`✅ Demande envoyée à ${c.pseudo} !`,"success")})}async function Ji(e,t,i=null,a={}){const l=e.user.id,{data:d}=await k.from("friendships").select("id, requester_id").eq("addressee_id",l).eq("status","pending").order("created_at",{ascending:!1}),s=(d||[]).map(b=>b.requester_id);let c={};if(s.length){const{data:b}=await k.from("users").select("id, pseudo, club_name").in("id",s);(b||[]).forEach(u=>{c[u.id]=u})}const f=(d||[]).map(b=>({...b,requester:c[b.requester_id]||{pseudo:"?"}})),o=vi(),r=f||[];o.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${r.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${r.map(b=>{var u,T,n;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((u=b.requester)==null?void 0:u.club_name)||((T=b.requester)==null?void 0:T.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((n=b.requester)==null?void 0:n.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Gt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Pt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${wi()}`,document.body.appendChild(o);const m=()=>o.remove();o.querySelector("#pending-close").addEventListener("click",m),o.addEventListener("click",b=>{b.target===o&&m()}),o.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:u}=await k.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(u){t("Erreur : "+u.message,"error");return}b.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Wi(e,t,a),i&&i()})}),o.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await k.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Go(e,t,i){const a=e.user.id,[l,d]=[a,t].sort(),s=a===l,{data:c}=await k.from("friend_match_stats").select("*").eq("player1_id",l).eq("player2_id",d).single(),f=e.profile.club_name||e.profile.pseudo||"Moi",o=c||{},r=s?o.wins_p1||0:o.wins_p2||0,m=s?o.wins_p2||0:o.wins_p1||0,b=o.draws||0,u=s?o.goals_p1||0:o.goals_p2||0,T=s?o.goals_p2||0:o.goals_p1||0,n=s?o.gc_used_p1||0:o.gc_used_p2||0,p=s?o.gc_used_p2||0:o.gc_used_p1||0,A=o.matches_total||0,I=(R,C,F,M=Gt,Y=Pt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${M}">${C}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${R}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${Y}">${F}</div>
    </div>`,q=vi();q.innerHTML=`
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
        ${I("Victoires",r,m)}
        ${I("Nuls",b,b,Mi,Mi)}
        ${I("Défaites",m,r)}
        ${I("Buts marqués",u,T)}
        ${I("Buts encaissés",T,u,Pt,Gt)}
        ${I("GC utilisés ⚡",n,p,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${A} match${A>1?"s":""} joué${A>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${wi()}`,document.body.appendChild(q),q.querySelector("#stats-close").addEventListener("click",()=>q.remove()),q.addEventListener("click",R=>{R.target===q&&q.remove()})}function vi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function wi(){return`
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
        background:${Gt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Xi({player1Id:e,player2Id:t,score1:i,score2:a,gc1:l,gc2:d}){const[s,c]=[e,t].sort(),f=e!==s,o=f?a:i,r=f?i:a,m=f?d:l,b=f?l:d,u=o>r?1:0,T=r>o?1:0,n=o===r?1:0,{data:p}=await k.from("friend_match_stats").select("*").eq("player1_id",s).eq("player2_id",c).single();p?await k.from("friend_match_stats").update({wins_p1:p.wins_p1+u,wins_p2:p.wins_p2+T,draws:p.draws+n,goals_p1:p.goals_p1+o,goals_p2:p.goals_p2+r,gc_used_p1:p.gc_used_p1+m,gc_used_p2:p.gc_used_p2+b,matches_total:p.matches_total+1}).eq("player1_id",s).eq("player2_id",c):await k.from("friend_match_stats").insert({player1_id:s,player2_id:c,wins_p1:u,wins_p2:T,draws:n,goals_p1:o,goals_p2:r,gc_used_p1:m,gc_used_p2:b,matches_total:1})}const Po="2026.07.05-0036";async function ji(e,{state:t,navigate:i,toast:a}){var d,s;const l=t.profile;l&&(e.innerHTML=`
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
      <div class="hero hero-compact" style="background:${l.club_color1};border:2px solid ${l.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${l.pseudo}</h3>
          <div class="level">Niveau ${l.level} · ${l.club_name}</div>
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
        ${l.is_admin?`
        <a href="/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Po}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(c=>{c.addEventListener("click",f=>{f.preventDefault(),i(c.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>i("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(c=>{c.addEventListener("click",()=>{c.classList.add("tapped"),setTimeout(()=>c.classList.remove("tapped"),200);const f=c.dataset.action;if(f==="match-ai"){Ho(i);return}if(f==="match-random"){i("match",{matchMode:"random"});return}if(f==="match-friend"){i("friends");return}if(f==="mini-league"){i("mini-league");return}if(f==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}a("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var R,C,F,M,Y,de;const c=((R=window.visualViewport)==null?void 0:R.height)||window.innerHeight,f=((C=document.querySelector(".top-nav"))==null?void 0:C.offsetHeight)||56,o=((F=document.querySelector(".bottom-nav"))==null?void 0:F.offsetHeight)||60,r=((M=e.querySelector(".hero-compact"))==null?void 0:M.offsetHeight)||52,m=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const b=((de=(Y=e.querySelector("#logout-btn"))==null?void 0:Y.closest("div"))==null?void 0:de.offsetHeight)||44,u=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((re,P)=>{var X;return re+(((X=document.getElementById(P))==null?void 0:X.offsetHeight)||0)},0),T=14*5,n=c-f-o-r-b-u-T,p=Math.max(80,Math.round(n*.28)),A=Math.max(160,Math.round(n*.72)),I=Math.floor((A-10)/2);m&&(m.style.minHeight=m.style.maxHeight=p+"px"),e.querySelectorAll(".play-grid .play-card").forEach(re=>{re.style.minHeight=re.style.height=I+"px"});const q=Math.round(I*.55);e.querySelectorAll(".play-card .play-icon").forEach(re=>{re.style.height=q+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),window.location.reload()}),Qi(t,a),Oo(t,a,i),Zi(t,a,i))}async function Zi(e,t,i){const a=document.getElementById("ongoing-match-banner");if(!a)return;const l=e.profile.id,{data:d}=await k.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${l},away_id.eq.${l}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){a.innerHTML="";return}const s=d.map(f=>f.home_id===l?f.away_id:f.home_id).filter(Boolean);let c={};if(s.length){const{data:f}=await k.from("users").select("id, pseudo, club_name").in("id",s);(f||[]).forEach(o=>{c[o.id]=o.club_name||o.pseudo})}a.innerHTML=d.map(f=>{const o=f.home_id===l?f.away_id:f.home_id,r=c[o]||"Adversaire",m=f.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${m?"🏆 Mini League":f.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${r}</div>
        </div>
        <button data-resume="${f.id}" data-mini="${m?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${f.id}" data-opp="${o}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(f=>{f.addEventListener("click",async()=>{const o=document.getElementById("page-content")||document.getElementById("app");if(f.dataset.mini==="1"){const{data:r}=await k.from("mini_league_matches").select("id, league_id").eq("match_id",f.dataset.resume).single();r?i("match-mini-league",{mlMatchId:r.id,leagueId:r.league_id}):i("mini-league")}else{const{resumePvpMatch:r}=await ii(async()=>{const{resumePvpMatch:m}=await Promise.resolve().then(()=>On);return{resumePvpMatch:m}},void 0);r(o,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},f.dataset.resume)}})}),a.querySelectorAll("[data-abandon]").forEach(f=>{f.addEventListener("click",()=>{Ro(async()=>{await No(f.dataset.abandon,f.dataset.opp,l),t("Match abandonné (défaite 3-0)","info"),Zi(e,t,i)})})})}async function No(e,t,i){const{data:a}=await k.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const l=a.home_id===i,d=l?0:3,s=l?3:0,c=a.game_state||{};c.p1Score=d,c.p2Score=s,c.phase="finished",c.forfeit=!0,await k.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:s,game_state:c}).eq("id",e)}function Ro(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Oo(e,t,i){var c,f,o,r;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:l}=await k.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){a.innerHTML="";return}const d=((c=l.inviter)==null?void 0:c.club_name)||((f=l.inviter)==null?void 0:f.pseudo)||"?",s=l.inviter_id;a.innerHTML=`
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
    </div>`,(o=document.getElementById("match-inv-accept"))==null||o.addEventListener("click",()=>{a.innerHTML="",i("match",{matchMode:"friend",friendId:s,friendName:d})}),(r=document.getElementById("match-inv-decline"))==null||r.addEventListener("click",async()=>{await k.from("friend_match_invites").update({status:"declined"}).eq("id",l.id),a.innerHTML="",t("Invitation refusée","info")})}async function Qi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:a,error:l}=await k.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(l||!(a!=null&&a.length)){i.innerHTML="";return}const d=a.length,s=a.slice(0,2).map(f=>{var o;return((o=f.requester)==null?void 0:o.pseudo)||"?"}).join(", "),c=d>2?` +${d-2}`:"";i.innerHTML=`
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
          ${s}${c}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Ji(e,t,()=>Qi(e,t))})}function Ho(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(l=>`
            <div class="action-card" data-mode="${l.mode}" style="cursor:pointer">
              <div class="icon">${l.icon}</div>
              <div class="label">${l.label}</div>
              <div class="sub">${l.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const a=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",a),i.addEventListener("click",l=>{l.target===i&&a()}),i.querySelectorAll("[data-mode]").forEach(l=>{l.addEventListener("click",()=>{a(),e("match",{matchMode:l.dataset.mode})})})}const Re={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function je(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Ci=["ATT","MIL","DEF","GK"];function eo(e){let t=0;const i=e.length;for(let a=0;a<i;a++)for(let l=a+1;l<i;l++){const d=e[a],s=e[l];if(!d||!s)continue;const c=d._col!=null&&s._col!=null&&d._col===s._col,f=d._col!=null&&s._col!=null&&Math.abs(d._col-s._col)===1,o=Ci.indexOf(d._line||d.job),r=Ci.indexOf(s._line||s.job),m=Math.abs(o-r)===1;if(!((d._line||d.job)===(s._line||s.job)&&f||c&&m))continue;const T=d.country_code&&s.country_code&&d.country_code===s.country_code,n=d.club_id&&s.club_id&&d.club_id===s.club_id;T&&n?t+=2:(T||n)&&(t+=1)}return t}function Ot(e,t={}){const i=e.reduce((d,s)=>{const c=s._line||s.job,f=s.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;return d+(Number(c==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)+f},0),a=eo(e);let l=i+a;return t.doubleAttack&&(l*=2),t.stolenNote&&(l-=t.stolenNote),{base:i,links:a,total:Math.max(0,l)}}function Ht(e,t={}){const i=e.reduce((d,s)=>{const c=s._line||s.job;let f=0;c==="GK"?f=Number(s.note_g)||0:c==="MIL"?f=Number(s.note_m)||0:f=Number(s.note_d)||0;const o=s.stadiumBonus&&(c==="GK"||c==="DEF"||c==="MIL")?10:0;return d+f+(s.boost||0)+o},0),a=eo(e);let l=i+a;return t.stolenNote&&(l-=t.stolenNote),{base:i,links:a,total:Math.max(0,l)}}function Ut(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function to(e,t,i="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const l=[...a].sort((s,c)=>{const f=t==="attack"?je(s,"ATT"):s._line==="GK"?je(s,"GK"):je(s,"DEF");return(t==="attack"?je(c,"ATT"):c._line==="GK"?je(c,"GK"):je(c,"DEF"))-f});let d=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return l.slice(0,Math.min(d,l.length,3))}function Uo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const io={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function _i(e,t){const i=e.player;if(!i)return 0;const a=i.rarity;if(a!=="pepite"&&a!=="papyte")return Number(i[t])||0;const l=$i(i),d=Number(i[t])||0;if(d<=0)return 0;const s=i.note_min??1,c=i.note_max??10,o=(e.current_note??l)-l;return Math.min(c,Math.max(s,d+o))}function $i(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function ki(e,t){!e||!t||await Promise.all([pi(e,"win"),pi(t,"loss")])}async function pi(e,t){const{data:i}=await k.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const a=i.filter(l=>{var d,s;return((d=l.player)==null?void 0:d.rarity)==="pepite"||((s=l.player)==null?void 0:s.rarity)==="papyte"});a.length&&await Promise.all(a.map(l=>{const d=io[l.player.rarity],s=t==="win"?d.win:d.loss,c=l.player.note_min??1,f=l.player.note_max??10,o=$i(l.player),r=l.current_note??o,m=Math.min(f,Math.max(c,r+s));return k.from("cards").update({current_note:m}).eq("id",l.id)}))}async function Ko(e,t){return pi(e,t)}const oo=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:io,applyOwnEvolution:Ko,currentSecondaryNote:_i,getBaseMainNote:$i,updateEvolutiveCards:ki},Symbol.toStringTag,{value:"Module"})),no={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Bt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Vt=["GK","DEF","MIL","ATT"],Vo=["Tous","GK","DEF","MIL","ATT"],Yo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function qi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Wo(e){return e.length?e.reduce((t,i)=>qi(i)>qi(t)?i:t,e[0]):e[0]}function ro(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Ei={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ao(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function St(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function di(e,t=""){var T,n;const i=e.player;if(!i)return"";const a=i.job||"ATT",l=Bt[a],d=no[i.rarity]||"#ccc",s=i.rarity==="pepite"||i.rarity==="papyte",c=e.evolution_bonus||0,f=(s&&e.current_note!=null?e.current_note:St(i,a))+c,o=i.job2?s?_i(e,ro(i.job2)):St(i,i.job2):null,r=o!=null?o>0?o+c:o:null,m=i.job2?Bt[i.job2]:null,b=ao(i),u=Ei[i.country_code]||i.country_code||"";return`
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
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${l}"></div>
        <!-- Étoile principale centrée sur le bandeau, contour blanc -->
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18"
            fill="${l}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${f}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${r!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${m}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${r}</text>
        </svg>`:""}
      </div>
      <!-- Portrait -->
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${b?`<img src="${b}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
               onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <!-- Footer -->
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${i.country_code}/flat/32.png"
          style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0"
          onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${u}</div>
        ${(T=i.clubs)!=null&&T.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((n=i.clubs)==null?void 0:n.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Bi(e){const t=e.job||"ATT",i=St(e,t),a=Ei[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Jo(e,t){const{state:i,navigate:a,toast:l,openModal:d,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await k.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:f}=await k.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(c||[]).filter(J=>J.card_type==="player"&&J.player),r=(c||[]).filter(J=>J.card_type==="game_changer"),m=(c||[]).filter(J=>J.card_type==="formation"),b=(c||[]).filter(J=>J.card_type==="stadium"),{data:u}=await k.from("gc_definitions").select("name,gc_type,color,effect,image_url"),T={};(u||[]).forEach(J=>{T[J.name]=J});const{data:n}=await k.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),p={};(n||[]).forEach(J=>{p[J.id]=J}),b.forEach(J=>{J.stadium_def&&(p[J.stadium_id]=J.stadium_def)});const A=Object.keys(hi),I=Object.keys(Re),q={};o.forEach(J=>{const oe=J.player.id;q[oe]=(q[oe]||0)+1}),new Set(Object.keys(q).map(J=>String(J)));const R=new Set(m.map(J=>J.formation)),C=new Set(r.map(J=>J.gc_type));let F="player",M="Tous",Y="",de=!1;function re(){return[...o].sort((J,oe)=>{const ge=Vt.indexOf(J.player.job),W=Vt.indexOf(oe.player.job);return ge!==W?ge-W:(J.player.surname_encoded||"").localeCompare(oe.player.surname_encoded||"")})}function P(){return[...f||[]].sort((J,oe)=>{const ge=Vt.indexOf(J.job),W=Vt.indexOf(oe.job);return ge!==W?ge-W:(J.surname_encoded||"").localeCompare(oe.surname_encoded||"")})}function X(){return re().filter(J=>{const oe=J.player,ge=M==="Tous"||oe.job===M,W=!Y||`${oe.firstname} ${oe.surname_encoded}`.toLowerCase().includes(Y);return ge&&W})}function U(){return P().filter(J=>{const oe=M==="Tous"||J.job===M,ge=!Y||`${J.firstname} ${J.surname_encoded}`.toLowerCase().includes(Y);return oe&&ge})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="player"?"var(--green)":"transparent"};
        color:${F==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="formation"?"var(--green)":"transparent"};
        color:${F==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${m.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="gc"?"var(--green)":"transparent"};
        color:${F==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${r.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="stadium"?"#E87722":"transparent"};
        color:${F==="stadium"?"#E87722":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${b.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function N(){const J=document.getElementById("col-filters");J&&(F==="player"?(J.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${Y}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Vo.map(oe=>`
            <button class="filter-btn" data-job="${oe}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${oe===M?"var(--green)":"var(--gray-200)"};
                background:${oe===M?"var(--green)":"#fff"};
                color:${oe===M?"#fff":"var(--gray-600)"}">
              ${oe}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${de?"var(--yellow)":"var(--gray-200)"};
              background:${de?"var(--yellow)":"#fff"};
              color:${de?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${de?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",oe=>{Y=oe.target.value.toLowerCase(),ne()}),e.querySelectorAll(".filter-btn").forEach(oe=>{oe.addEventListener("click",()=>{M=oe.dataset.job,N(),ne()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{de=!de,N(),ne()})):(J.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${de?"var(--yellow)":"var(--gray-200)"};
              background:${de?"var(--yellow)":"#fff"};
              color:${de?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${de?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{de=!de,N(),ne()})))}function ne(){const J=document.getElementById("col-grid");J&&(F==="player"?_e(J):F==="formation"?Ae(J):F==="stadium"?xe(J):Ie(J))}function pe(J,oe,ge,W,Z){const K=document.getElementById("col-grid"),se=document.getElementById("col-big");if(!K||!se)return;var he=0;function ze(){const Me=window.innerWidth>=768,be=document.getElementById("col-big"),Se=document.getElementById("col-grid");Me&&be&&(be.style.minHeight="420px",be.style.flex="1 1 auto"),Me&&Se&&(Se.style.height=Math.round(310*.76+16)+"px",Se.style.flexShrink="0",Se.style.overflowX="auto",Se.style.overflowY="hidden",Se.style.alignItems="center",Se.style.padding="8px 16px"),se.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+oe(J[he])+"</div>";var j=se.querySelector("[data-card-id],[data-form-id],[data-gc-id]");j&&j.addEventListener("click",function(){W(J[he])}),requestAnimationFrame(function(){var D=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!D||!se)){var w=se.clientHeight-8,E=se.clientWidth-24,g=D.offsetHeight,x=D.offsetWidth;if(g>0&&x>0&&w>40){var y=Me?2.2:1,h=Math.min(w/g,E/x,y);D.style.transform="scale("+h.toFixed(3)+")",D.style.transformOrigin="top center"}}}),K.innerHTML=J.map(function(D,w){var E=w===he,g="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(E?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+w+'" style="'+g+'">'+ge(D,E)+"</div>"}).join(""),K.querySelectorAll(".col-mini-item").forEach(function(D){D.addEventListener("click",function(){he=Number(D.dataset.idx),ze(),D.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}ze()}function ye(J){var oe=window.innerWidth>=768?.76:.54,ge;if(!J||J._fake){var W=J?J.player:null;if(!W)return"";ge=Bi(W)}else ge=di(J,"");return'<div style="display:inline-block;zoom:'+oe+';pointer-events:none;line-height:0">'+ge+"</div>"}function Le(J,oe,ge){oe=oe||100,ge=ge||140;var W=Rt[J]||{},Z={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},K=Math.max(3,Math.round(oe*.06)),se=Object.entries(W).map(function(ze){var Me=ze[0],be=ze[1],Se=Me.replace(/\d+$/,""),j=Z[Se]||"#888",D=Math.round(be.x*oe),w=Math.round(be.y*ge);return'<circle cx="'+D+'" cy="'+w+'" r="'+K+'" fill="'+j+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),he=Math.max(1,Math.round(oe/50));return'<svg viewBox="0 0 '+oe+" "+ge+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+oe+'" height="'+ge+'" fill="#1A6B3C"/><rect x="'+Math.round(oe*.2)+'" y="'+Math.round(ge*.02)+'" width="'+Math.round(oe*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+he+'"/><line x1="0" y1="'+Math.round(ge*.5)+'" x2="'+oe+'" y2="'+Math.round(ge*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+he+'"/><ellipse cx="'+Math.round(oe*.5)+'" cy="'+Math.round(ge*.5)+'" rx="'+Math.round(oe*.18)+'" ry="'+Math.round(ge*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+he+'"/><rect x="'+Math.round(oe*.2)+'" y="'+Math.round(ge*.82)+'" width="'+Math.round(oe*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+he+'"/>'+se+"</svg>"}function we(J,oe,ge){var W=ge>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ge+"</div>":"",Z=oe?'data-form-id="'+oe.id+'"':"",K=J.length>7?14:J.length>5?16:19,se=!!oe;return"<div "+Z+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(se?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(se?"":"filter:grayscale(1);opacity:0.5")+'">'+W+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(se?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+K+"px;font-weight:900;color:"+(se?"#1A6B3C":"#aaa")+';line-height:1">'+J+'</div></div><div style="flex:1;overflow:hidden;background:'+(se?"#1A6B3C":"#ccc")+'">'+Le(J,140,220)+"</div></div>"}function ve(J,oe){var ge=window.innerWidth>=768?.76:.54,W=140,Z=305,K=Math.round(Z*.22),se=Z-K,he=J.length>7?10:13,ze=Le(J,W,se),Me=oe?"1.5px solid #2a7a40":"1px solid #ddd",be=oe?"":"filter:grayscale(1);opacity:0.45;",Se=oe?"#1A6B3C":"#bbb",j="#fff";return'<div style="display:inline-block;zoom:'+ge+';line-height:0;pointer-events:none"><div style="width:'+W+"px;height:"+Z+"px;border-radius:6px;border:"+Me+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+be+'"><div style="height:'+K+"px;background:"+Se+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+he+"px;font-weight:900;color:"+j+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(W-4)+'px">'+J+'</span></div><div style="height:'+se+'px;overflow:hidden;flex-shrink:0">'+ze+"</div></div></div>"}function _e(J){if(de){const oe=U();if(!oe.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ge=oe.map(W=>o.find(Z=>Z.player.id===W.id)||{_fake:!0,player:W,id:"fake-"+W.id});pe(ge,W=>W._fake?Bi(W.player):di(W,""),W=>W._fake?ye({player:W.player,id:"x",_fake:!0}):ye(W),W=>{W._fake||Fi(W,o,q,t)})}else{const oe=X();if(!oe.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ge={};oe.forEach(Z=>{const K=Z.player.id;ge[K]||(ge[K]=[]),ge[K].push(Z)});const W=Object.values(ge).map(Z=>Wo(Z));pe(W,Z=>{const K=q[Z.player.id]||1,se=K>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${K}</div>`:"",ze=o.filter(Me=>Me.player.id===Z.player.id&&Me.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return di(Z,se+ze)},Z=>ye(Z),Z=>Fi(Z,o,q,t))}}function Ae(J){const oe=de?A:[...R];if(!oe.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ge=oe.map(W=>({formation:W,card:m.find(Z=>Z.formation===W)||null,owned:R.has(W)}));pe(ge,({formation:W,card:Z,owned:K})=>we(W,K?Z:null,K?m.filter(se=>se.formation===W).length:0),({formation:W,owned:Z})=>ve(W,Z),({card:W,owned:Z})=>{Z&&W&&Zo(W,m,t,d)})}function Ie(J){const oe=Object.keys(T),ge=de?oe.length?oe:I:[...C];if(!ge.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const W=ge.map(Z=>({type:Z,gc:Re[Z]||{icon:"⚡",desc:""},def:T[Z]||null,owned:C.has(Z),card:r.find(K=>K.gc_type===Z)||null}));pe(W,({type:Z,gc:K,def:se,owned:he,card:ze})=>{var y;const Me=he?r.filter(h=>h.gc_type===Z).length:0,be=Me>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Me}</div>`:"",Se=(se==null?void 0:se.gc_type)==="ultra_game_changer",j={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},D={purple:"#b06ce0",light_blue:"#00d4ef"},w=j[se==null?void 0:se.color]||j.purple,E=D[se==null?void 0:se.color]||D.purple,g=(se==null?void 0:se.effect)||K.desc||"",x=se!=null&&se.image_url?`/icons/${se.image_url}`:((y=se==null?void 0:se.club)==null?void 0:y.logo_url)||(se!=null&&se.country_code?`https://flagcdn.com/w80/${se.country_code.toLowerCase()}.png`:null);return he&&ze?`<div data-gc-id="${ze.id}" data-gc-type="${Z}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${E};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${E}66;cursor:pointer">
          ${be}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${Z.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${Z}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Se?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${x?`<img src="${x}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${K.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${g.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${Z}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${K.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:Z,gc:K,def:se,owned:he})=>{const ze=window.innerWidth>=768?.76:.54,Me={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},be={purple:"#9b59b6",light_blue:"#00bcd4"},Se=Me[se==null?void 0:se.color]||Me.purple,j=be[se==null?void 0:se.color]||be.purple,D=se!=null&&se.image_url?`/icons/${se.image_url}`:null;return he?`<div style="display:inline-block;zoom:${ze};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Se};border:1px solid ${j};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${Z}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${D?`<img src="${D}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${K.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((se==null?void 0:se.effect)||K.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${ze};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${K.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${Z}</span></div></div>`},({type:Z,owned:K,def:se})=>{K&&Xo(Z,se,d)})}function xe(J){const oe="#E87722",ge="/";if(!b.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const W={};b.forEach(K=>{const se=K.stadium_id||"?";(W[se]=W[se]||[]).push(K)});const Z=Object.entries(W).map(([K,se])=>({sid:K,def:p[K]||null,count:se.length,card:se[0]}));pe(Z,({def:K,count:se})=>{var j,D;const he=(K==null?void 0:K.name)||"?",ze=((j=K==null?void 0:K.club)==null?void 0:j.encoded_name)||(K==null?void 0:K.country_code)||"—",Me=K!=null&&K.image_url?`${ge}icons/${K.image_url}`:((D=K==null?void 0:K.club)==null?void 0:D.logo_url)||(K!=null&&K.country_code?`https://flagcdn.com/w80/${K.country_code.toLowerCase()}.png`:null),be=Me?`<img src="${Me}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Se=se>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${se}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${oe},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${oe}66">
          ${Se}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${he}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${be}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ze}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:K,count:se})=>{var j,D;const he=window.innerWidth>=768?.76:.54,ze=(K==null?void 0:K.name)||"?",Me=((j=K==null?void 0:K.club)==null?void 0:j.encoded_name)||(K==null?void 0:K.country_code)||"—",be=K!=null&&K.image_url?`${ge}icons/${K.image_url}`:((D=K==null?void 0:K.club)==null?void 0:D.logo_url)||(K!=null&&K.country_code?`https://flagcdn.com/w80/${K.country_code.toLowerCase()}.png`:null),Se=be?`<img src="${be}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${he};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${oe},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${ze}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${Se}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${Me}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(J=>{J.addEventListener("click",()=>{F=J.dataset.tab,M="Tous",Y="",de=!1,e.querySelectorAll(".col-tab-btn").forEach(oe=>{const ge=oe.dataset.tab===F;oe.style.borderBottomColor=ge?"var(--green)":"transparent",oe.style.color=ge?"var(--green)":"var(--gray-600)"}),N(),ne()})}),N(),ne()}function Xo(e,t,i){const a=Re[e]||{icon:"⚡",desc:"Effet spécial."},l=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},c=d[t==null?void 0:t.color]||d.purple,f=s[t==null?void 0:t.color]||s.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||a.desc,m=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${c};border-radius:16px;border:2px solid ${f};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${l?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${o}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${m?`<img src="${m}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${a.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${r}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Yt=1e3;function Zo(e,t,i,a){var T,n,p;const{state:l,toast:d,closeModal:s,navigate:c,refreshProfile:f}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function m(){const A=Rt[o]||{},I=hi[o]||[],q=290,R=360,C=20;function F(Y){const de=A[Y];return de?{x:de.x*q,y:de.y*R}:null}let M=`<svg width="${q}" height="${R}" viewBox="0 0 ${q} ${R}" xmlns="http://www.w3.org/2000/svg">`;for(const[Y,de]of I){const re=F(Y),P=F(de);!re||!P||(M+=`<line x1="${re.x}" y1="${re.y}" x2="${P.x}" y2="${P.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const Y of Object.keys(A)){const de=F(Y);if(!de)continue;const re=Y.replace(/\d+/,""),P=r[re]||"#555";M+=`<circle cx="${de.x}" cy="${de.y}" r="${C}" fill="${P}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,M+=`<text x="${de.x}" y="${de.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${re}</text>`}return M+="</svg>",M}const b=t.filter(A=>A.formation===o);b.length;const u=!e.is_for_sale;a(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${m()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${u?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Yt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(T=document.getElementById("direct-sell-form-btn"))==null||T.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Yt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const A=b.find(q=>!q.is_for_sale)||b[0];if(!A){d("Aucune carte à vendre","error");return}await k.from("market_listings").delete().eq("card_id",A.id),await k.from("transfer_history").delete().eq("card_id",A.id);const{error:I}=await k.from("cards").delete().eq("id",A.id);if(I){d(I.message,"error");return}await k.from("users").update({credits:(l.profile.credits||0)+Yt}).eq("id",l.profile.id),await f(),d(`+${Yt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),c("collection")}),(n=document.getElementById("market-sell-form-btn"))==null||n.addEventListener("click",async()=>{const A=parseInt(document.getElementById("sell-price-form").value);if(!A||A<1){d("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:A}).eq("id",e.id),await k.from("market_listings").insert({seller_id:l.profile.id,card_id:e.id,price:A}),d("Carte mise en vente sur le marché !","success"),s(),c("collection")}),(p=document.getElementById("cancel-sell-form-btn"))==null||p.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),s(),c("collection")})}async function Fi(e,t,i,a){var _e,Ae,Ie,xe,J,oe,ge;const{state:l,toast:d,openModal:s,closeModal:c,navigate:f,refreshProfile:o}=a,r=e.player,m=t.filter(W=>W.player.id===r.id),b=m.length,u=e.evolution_bonus||0,T=Math.max((Number(r.note_g)||0)+(r.job==="GK"||r.job2==="GK"?u:0),(Number(r.note_d)||0)+(r.job==="DEF"||r.job2==="DEF"?u:0),(Number(r.note_m)||0)+(r.job==="MIL"||r.job2==="MIL"?u:0),(Number(r.note_a)||0)+(r.job==="ATT"||r.job2==="ATT"?u:0)),n=r.rarity||"normal",{data:p}=await k.from("sell_price_configs").select("*").eq("rarity",n).lte("note_min",T).gte("note_max",T).order("note_min",{ascending:!1}).limit(1);((_e=p==null?void 0:p[0])==null?void 0:_e.price)??Yo[n];const A=r.rarity!=="legende",I=ao(r),q=((r.rarity==="pepite"||r.rarity==="papyte")&&e.current_note!=null?e.current_note:St(r,r.job))+u,R=r.rarity==="pepite"||r.rarity==="papyte",C=r.job2?(R?_i(e,ro(r.job2)):St(r,r.job2))+(St(r,r.job2)>0?u:0):null,F=Bt[r.job]||"#1A6B3C",M=r.job2?Bt[r.job2]:null,Y=no[r.rarity]||"#ccc",de=Ei[r.country_code]||r.country_code||"",re=e.evolution_bonus||0,X=q+re,U=C||0,N=U>0?U+re:0,ne=m.map(W=>W.id);let pe={};if(ne.length){const{data:W}=await k.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ne).order("transferred_at",{ascending:!0});(W||[]).forEach(Z=>{pe[Z.card_id]||(pe[Z.card_id]=[]),pe[Z.card_id].push(Z)})}const ye=W=>{const Z=W.transferred_at?new Date(W.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",K=W.source==="booster"?"Booster":W.price?W.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${W.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${W.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${W.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${K}</div>
        <div style="font-size:11px;color:var(--gray-600)">${Z}</div>
      </div>
    </div>`},Le=ne.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${b>1?`(${b})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${m.map((W,Z)=>{const K=pe[W.id]||[],se=W.is_for_sale,he=K.length?K[K.length-1]:null,Me=(r.rarity==="pepite"||r.rarity==="papyte")&&W.current_note!=null?` (☆${W.current_note})`:"";return`
            <div data-card-id="${W.id}" data-card-idx="${Z}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${se?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${W.id}" ${se?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${Z+1}${Me}${se?" 🏷️ En vente":""}</div>
                  ${he?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${he.club_name} · ${he.source==="booster"?"Booster":he.price?he.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${Z}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${K.length?`${K.length} club${K.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${Z}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${K.map(ye).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${X}${r.job2&&U>0?` / ${N}`:""}`:`Note actuelle : ${X}${r.job2&&U>0?` / ${N}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${b<=1?"#ccc":"#1A6B3C"};border-color:${b<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${b<=1?"not-allowed":"pointer"}"
            ${b<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${A?`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${r.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";s(`${r.firstname} ${r.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${Y};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${r.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(r.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${F}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${F}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${q}</text>
            </svg>
            ${C!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${M}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${C}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${I?`<img src="${I}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${r.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${de}</div>
            ${(Ae=r.clubs)!=null&&Ae.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Ie=r.clubs)==null?void 0:Ie.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${Y}">${r.rarity.toUpperCase()}</div>
          ${r.rarity==="pepite"||r.rarity==="papyte"?`
          <div style="margin-top:6px;background:${Y}18;border-left:3px solid ${Y};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${Y};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${r.rarity==="pepite"?"✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>":"✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>"}
              <br>Note actuelle : <b>${e.current_note??(r.rarity==="pepite"?r.note_min:r.note_max)??"—"}</b>
              &nbsp;·&nbsp; Min : <b>${r.note_min??"—"}</b>
              &nbsp;·&nbsp; Max : <b>${r.note_max??"—"}</b>
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${r.job}${r.job2?" / "+r.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",r.note_g],["DEF",r.note_d],["MIL",r.note_m],["ATT",r.note_a]].map(([W,Z])=>{const K=Bt[W],se=W===r.job||W===r.job2,he=(Number(Z)||0)+(se&&re>0?re:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${K}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${he}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${W}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${b}</div>
        </div>
      </div>
    </div>
    ${Le}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(xe=document.getElementById("close-detail"))==null||xe.addEventListener("click",c);let we=new Set;const ve=()=>{const W=we.size,Z=document.getElementById("sell-action-panel");if(!Z)return;Z.style.display=W>0?"block":"none",document.getElementById("sell-selected-count").textContent=W;const K=document.getElementById("evolve-btn");K&&(K.textContent=`⬆️ Évoluer ${W>1?"(+"+W+")":""}`)};document.querySelectorAll(".expl-check").forEach(W=>{W.addEventListener("change",()=>{const Z=W.dataset.id;W.checked?we.add(Z):we.delete(Z);const K=W.closest(".exemplaire-row");K&&(K.style.borderColor=W.checked?"#1A6B3C":"#eee"),ve()})}),document.querySelectorAll(".exemplaire-row").forEach(W=>{W.addEventListener("click",Z=>{if(Z.target.closest("button")||Z.target.tagName==="INPUT")return;const K=W.querySelector(".expl-check");K&&!K.disabled&&(K.checked=!K.checked,K.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(W=>{W.addEventListener("click",Z=>{Z.stopPropagation();const K=document.querySelector(`.expl-hist[data-hist="${W.dataset.idx}"]`);K&&(K.style.display=K.style.display==="none"?"flex":"none")})}),(J=document.getElementById("evolve-btn"))==null||J.addEventListener("click",async()=>{if(b<=1)return;const W=[...we];if(!W.length)return;if(we.has(e.id)){const be=document.createElement("div");be.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",be.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(be),be.querySelector("#err-close").addEventListener("click",()=>be.remove()),be.addEventListener("click",Se=>{Se.target===be&&be.remove()});return}const Z=W.filter(be=>be!==e.id),K=r.rarity==="legende"?2:1;if((Z.length||1)*K,!(!Z.length&&W.length===1&&W[0]===e.id)){if(!Z.length){d("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(be=>{const Se=document.createElement("div");Se.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",Se.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${r.firstname} ${r.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${Z.length}</strong> copie${Z.length>1?"s":""} sacrifiée${Z.length>1?"s":""}<br>
            📈 Note : <strong>${q+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${q+(e.evolution_bonus||0)+Z.length*K}</strong>
            ${C&&C>0?`<br>📈 Note 2 : <strong>${C+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${C+(e.evolution_bonus||0)+Z.length*K}</strong>`:""}
            ${r.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${K} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(Se),Se.querySelector("#sac-cancel").addEventListener("click",()=>{Se.remove(),be(!1)}),Se.querySelector("#sac-ok").addEventListener("click",()=>{Se.remove(),be(!0)}),Se.addEventListener("click",j=>{j.target===Se&&(Se.remove(),be(!1))})}))return;if(Z.length){await k.from("market_listings").delete().in("card_id",Z),await k.from("deck_cards").delete().in("card_id",Z),await k.from("transfer_history").delete().in("card_id",Z),await k.from("decks").update({stadium_card_id:null}).in("stadium_card_id",Z);const{error:be}=await k.from("cards").delete().in("id",Z);if(be){d("Erreur suppression : "+be.message,"error");return}}const he=(e.evolution_bonus||0)+Z.length*K,{error:ze}=await k.from("cards").update({evolution_bonus:he}).eq("id",e.id);if(ze){d("Erreur évolution : "+ze.message,"error");return}const Me=q+he;d(`⬆️ ${r.firstname} ${r.surname_encoded} : note ${q+e.evolution_bonus||q} → ${Me}${Z.length?` · ${Z.length} copie${Z.length>1?"s":""} sacrifiée${Z.length>1?"s":""}`:""} !`,"success",4e3),c(),f("collection")}),(oe=document.getElementById("market-sell-btn"))==null||oe.addEventListener("click",async()=>{var ze;const W=[...we];if(!W.length){d("Sélectionne au moins un exemplaire","warning");return}const Z=parseInt((ze=document.getElementById("sell-market-price"))==null?void 0:ze.value);if(!Z||Z<1){d("Prix invalide","error");return}const{error:K}=await k.from("cards").update({is_for_sale:!0,sale_price:Z}).in("id",W);if(K){d(K.message,"error");return}const se=W.map(Me=>({seller_id:l.profile.id,card_id:Me,price:Z,status:"active"})),{error:he}=await k.from("market_listings").insert(se);he&&console.warn("[Market] insert listings:",he.message),d(`${W.length} carte${W.length>1?"s":""} mise${W.length>1?"s":""} en vente à ${Z.toLocaleString("fr")} cr. chacune !`,"success"),c(),f("collection")}),(ge=document.getElementById("cancel-sell-btn"))==null||ge.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),c(),f("collection")})}const Zt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function oi(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function so(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function lo(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Qo(e,t=44,i=58){var n;const a=e?oi(e):null,l=e?lo(e):null,d=so(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",c=vt[s]||"#555",f={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=(e==null?void 0:e.evolution_bonus)||0,m=(Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0)+(s===(e==null?void 0:e.job)||s===(e==null?void 0:e.job2)?o:0),b=Math.round(i*.19),u=Math.round(i*.25),T=i-b-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${f};background:${c};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${b}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${b}px;left:0;width:${t}px;height:${T}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${m}</span>
      ${l?`<img src="${l}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(n=e==null?void 0:e.clubs)!=null&&n.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function ui(e,t){const{state:i,navigate:a,toast:l}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(d==null?void 0:d.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(d==null?void 0:d.length)>0?d.map(s=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!s)return;const{data:c,error:f}=await k.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(f){l(f.message,"error");return}l("Deck créé !","success"),Di(c.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Di(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const c=prompt("Nouveau nom :",s.dataset.name);if(!c||c===s.dataset.name)return;const{error:f}=await k.from("decks").update({name:c}).eq("id",s.dataset.rename);if(f){l(f.message,"error");return}l("Deck renommé !","success"),ui(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await k.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:c}=await k.from("decks").delete().eq("id",s.dataset.delete);if(c){l(c.message,"error");return}l("Deck supprimé.","success"),ui(e,t)})})}async function Di(e,t,i){const{state:a,toast:l}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("decks").select("*").eq("id",e).single(),{data:s}=await k.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),{data:c}=await k.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id).eq("card_type","stadium"),f=(s||[]).filter(A=>A.card_type==="player"&&A.player),o=(s||[]).filter(A=>A.card_type==="formation"),r=(c||[]).filter(A=>A.card_type==="stadium"),m=[...new Set(r.map(A=>A.stadium_id).filter(Boolean))];let b={};if(r.forEach(A=>{A.stadium_def&&A.stadium_id&&(b[A.stadium_id]=A.stadium_def)}),m.length&&Object.keys(b).length<m.length){const{data:A}=await k.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",m);(A||[]).forEach(I=>{b[I.id]=I})}const u=o.map(A=>A.formation).filter(Boolean),{data:T}=await k.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let n=d.formation||"4-4-2";u.length>0&&!u.includes(n)&&(n=u[0]);const p={deckId:e,name:d.name,formation:n,formationCardId:d.formation_card_id,stadiumCardId:d.stadium_card_id||null,slots:{},subs:[],playerCards:f,formationCards:o,stadiumCards:r,stadDefMap:b,availableFormations:u};(T||[]).forEach(A=>{A.is_starter?p.slots[A.position]=A.card_id:p.subs.includes(A.card_id)||p.subs.push(A.card_id)}),wt(t,p,i)}function wt(e,t,i){var o,r,m,b;const{navigate:a}=i;Zt[t.formation];const l=Gi(t.formation),d=l.filter(u=>t.slots[u]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Zt),c=(o=t.stadiumCards)==null?void 0:o.find(u=>u.id===t.stadiumCardId);c&&((r=t.stadDefMap)!=null&&r[c.stadium_id]);const f=t.subs.map(u=>t.playerCards.find(T=>T.id===u)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${s.map(u=>`<option value="${u}" ${u===t.formation?"selected":""}>${u}</option>`).join("")}
      </select>
    </div>

    <!-- Carte Stade -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:10px">
      <span style="font-size:18px">🏟️</span>
      <div style="flex:1;font-size:12px;font-weight:700;color:#555">Carte Stade <span style="font-size:10px;color:#aaa;font-weight:400">(+10 aux joueurs du même club/pays)</span></div>
      ${t.stadiumCards.length>0?`
        <select id="stadium-select" style="padding:6px;border-radius:6px;border:1.5px solid #E87722;font-size:12px;max-width:180px;background:#fff">
          <option value="">Aucun stade</option>
          ${t.stadiumCards.map(u=>{var p;const T=t.stadDefMap[u.stadium_id],n=T?T.name+((p=T.club)!=null&&p.encoded_name?` (${T.club.encoded_name})`:T.country_code?` (${T.country_code})`:""):u.id.slice(0,8);return`<option value="${u.id}" ${t.stadiumCardId===u.id?"selected":""}>${n}</option>`}).join("")}
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
        ${f.map(u=>{const T={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0">
            ${Qo(T,44,58)}
            <button data-remove-sub="${u.id}"
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
  </div>`,en(e,t,l,i),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",u=>{t.formation=u.target.value;const T=Gi(t.formation),n={};T.forEach(p=>{t.slots[p]&&(n[p]=t.slots[p])}),t.slots=n,wt(e,t,i)}),(m=document.getElementById("stadium-select"))==null||m.addEventListener("change",u=>{t.stadiumCardId=u.target.value||null,wt(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>nn(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{t.subs=t.subs.filter(T=>T!==u.dataset.removeSub),wt(e,t,i)})}),(b=document.getElementById("add-sub-btn"))==null||b.addEventListener("click",()=>{on(t,e,i)})}function en(e,t,i,a){var q,R;const l=e.querySelector("#deck-field");if(!l)return;const d=(q=t.stadiumCards)==null?void 0:q.find(C=>C.id===t.stadiumCardId),s=d&&((R=t.stadDefMap)==null?void 0:R[d.stadium_id])||null,c=Rt[t.formation]||{},f=Yi(t.formation)||[],o={};for(const C of i){const F=t.slots[C],M=F?t.playerCards.find(Y=>Y.id===F):null;M!=null&&M.player?o[C]={...M.player,_evolution_bonus:M.evolution_bonus||0}:o[C]=null}const r=300,m=300,b=48,u=64,T=13,n=16,p=38;function A(C){const F=c[C];return F?{x:F.x*r,y:F.y*m}:null}let I="";for(const[C,F]of f){const M=A(C),Y=A(F);if(!M||!Y)continue;const de=o[C]?{...o[C],club_id:o[C].club_id,country_code:o[C].country_code,rarity:o[C].rarity}:null,re=o[F]?{...o[F],club_id:o[F].club_id,country_code:o[F].country_code,rarity:o[F].rarity}:null,P=at(de,re);P==="#ff3333"||P==="#cc2222"?I+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${Y.x.toFixed(1)}" y2="${Y.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(I+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${Y.x.toFixed(1)}" y2="${Y.y.toFixed(1)}" stroke="${P}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,I+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${Y.x.toFixed(1)}" y2="${Y.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const C of i){const F=A(C);if(!F)continue;const M=o[C],Y=C.replace(/\d+/,""),de=vt[Y]||"#555",re=(F.x-b/2).toFixed(1),P=(F.y-u/2).toFixed(1),X={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[M==null?void 0:M.rarity]||"#aaa";if(M){const U=oi(M),N=lo(M),ne=so(M.country_code),pe=M._evolution_bonus||0,ye=(Number(Y==="GK"?M.note_g:Y==="DEF"?M.note_d:Y==="MIL"?M.note_m:M.note_a)||0)+(Y===M.job||Y===M.job2?pe:0),Le=s&&(s.club_id&&String(M.club_id)===String(s.club_id)||s.country_code&&M.country_code===s.country_code),we=Le?ye+10:ye,ve=u-T-n;I+=`<defs><clipPath id="dcp-${C}"><rect x="${re}" y="${(F.y-u/2+T).toFixed(1)}" width="${b}" height="${ve}"/></clipPath></defs>`,I+=`<rect x="${re}" y="${P}" width="${b}" height="${u}" rx="5" fill="${de}"/>`,U&&(I+=`<image href="${U}" x="${re}" y="${(F.y-u/2+T).toFixed(1)}" width="${b}" height="${ve}" clip-path="url(#dcp-${C})" preserveAspectRatio="xMidYMin slice"/>`),I+=`<rect x="${re}" y="${P}" width="${b}" height="${T}" fill="rgba(255,255,255,0.93)"/>`,I+=`<text x="${F.x.toFixed(1)}" y="${(F.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(M.surname_encoded||"").slice(0,9)}</text>`;const _e=(F.y+u/2-n).toFixed(1);I+=`<rect x="${re}" y="${_e}" width="${b}" height="${n}" fill="rgba(255,255,255,0.93)"/>`,ne&&(I+=`<image href="${ne}" x="${(F.x-21).toFixed(1)}" y="${(F.y+u/2-n+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),I+=`<text x="${F.x.toFixed(1)}" y="${(F.y+u/2-n/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${Le?"#E87722":"#111"}" font-family="Arial Black">${we}</text>`,N&&(I+=`<image href="${N}" x="${(F.x+b/2-14).toFixed(1)}" y="${(F.y+u/2-n+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),I+=`<rect x="${re}" y="${P}" width="${b}" height="${u}" rx="5" fill="none" stroke="${X}" stroke-width="2"/>`}else I+=`<rect x="${re}" y="${P}" width="${b}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,I+=`<text x="${F.x.toFixed(1)}" y="${F.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,I+=`<text x="${F.x.toFixed(1)}" y="${(F.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${Y}</text>`;I+=`<rect x="${re}" y="${P}" width="${b}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${C}" style="cursor:pointer"/>`}l.innerHTML=`<svg viewBox="${-p} ${-p} ${r+p*2} ${m+p*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${I}</svg>`,l.querySelectorAll(".deck-slot-hit").forEach(C=>{C.addEventListener("click",()=>tn(C.dataset.pos,t,e,a))})}function tn(e,t,i,a){var b,u,T;const{openModal:l,closeModal:d}=a,s=e.replace(/\d+/,""),c=t.slots[e],f=c?t.playerCards.find(n=>n.id===c):null;(b=f==null?void 0:f.player)==null||b.id;const o=new Set;Object.entries(t.slots).forEach(([n,p])=>{var I;if(n===e||!p)return;const A=t.playerCards.find(q=>q.id===p);(I=A==null?void 0:A.player)!=null&&I.id&&o.add(A.player.id)}),t.subs.forEach(n=>{var A;const p=t.playerCards.find(I=>I.id===n);(A=p==null?void 0:p.player)!=null&&A.id&&o.add(p.player.id)});const r=new Set,m=t.playerCards.filter(n=>{const p=n.player;return!(p.job===s||p.job2===s)||o.has(p.id)||r.has(p.id)?!1:(r.add(p.id),!0)});m.sort((n,p)=>{const A=n.evolution_bonus||0,I=p.evolution_bonus||0,q=(s==="GK"?n.player.note_g:s==="DEF"?n.player.note_d:s==="MIL"?n.player.note_m:n.player.note_a)+(s===n.player.job||s===n.player.job2?A:0);return(s==="GK"?p.player.note_g:s==="DEF"?p.player.note_d:s==="MIL"?p.player.note_m:p.player.note_a)+(s===p.player.job||s===p.player.job2?I:0)-q}),l(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${m.length>0?m.map(n=>{var C,F;const p=n.player,A=n.evolution_bonus||0,I=(s==="GK"?p.note_g:s==="DEF"?p.note_d:s==="MIL"?p.note_m:p.note_a)+(s===p.job||s===p.job2?A:0),q=oi(p),R={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[p.rarity];return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[s]}">
            ${q?`<img src="${q}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${vt[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${p.firstname} ${p.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${p.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${p.country_code}">
              ${(C=p.clubs)!=null&&C.logo_url?`<img src="${p.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((F=p.clubs)==null?void 0:F.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${p.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${vt[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${R};flex-shrink:0">
            ${I}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",d),(T=document.getElementById("remove-player"))==null||T.addEventListener("click",()=>{delete t.slots[e],d(),wt(i,t,a)}),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{t.slots[e]=n.dataset.cardId,d(),wt(i,t,a)})})}function on(e,t,i){var f;const{openModal:a,closeModal:l}=i,d=new Set;Object.keys(e.slots).forEach(o=>{var b;const r=e.slots[o];if(!r)return;const m=e.playerCards.find(u=>u.id===r);(b=m==null?void 0:m.player)!=null&&b.id&&d.add(m.player.id)}),e.subs.forEach(o=>{var m;const r=e.playerCards.find(b=>b.id===o);(m=r==null?void 0:r.player)!=null&&m.id&&d.add(r.player.id)});const s=new Set,c=e.playerCards.filter(o=>{var r,m,b;return d.has((r=o.player)==null?void 0:r.id)||s.has((m=o.player)==null?void 0:m.id)?!1:(s.add((b=o.player)==null?void 0:b.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?c.map(o=>{var u;const r=o.player,m=oi(r),b=(r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a)+(o.evolution_bonus||0);return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[r.job]}">
            ${m?`<img src="${m}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${r.firstname} ${r.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${r.job} · ${r.country_code} · ${((u=r.clubs)==null?void 0:u.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${vt[r.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${b}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(f=document.getElementById("close-sub-selector"))==null||f.addEventListener("click",l),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),l(),wt(t,e,i)})})}async function nn(e,t){const{state:i,toast:a,navigate:l}=t,d=e.formationCards.find(f=>f.formation===e.formation),s=(d==null?void 0:d.id)||e.formationCardId;await k.from("decks").update({formation:e.formation,formation_card_id:s||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await k.from("deck_cards").delete().eq("deck_id",e.deckId);const c=[];if(Object.entries(e.slots).forEach(([f,o],r)=>{c.push({deck_id:e.deckId,card_id:o,position:f,is_starter:!0,slot_order:r})}),e.subs.forEach((f,o)=>{c.push({deck_id:e.deckId,card_id:f,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),c.length>0){const{error:f}=await k.from("deck_cards").insert(c);if(f){a(f.message,"error");return}}a("Deck enregistré ✅","success"),l("decks")}function Gi(e){const t=Zt[e]||Zt["4-4-2"],i=["GK1"];for(let a=1;a<=t.DEF;a++)i.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)i.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)i.push(`ATT${a}`);return i}async function co(){const{data:e}=await k.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await k.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(a=>a.booster_id===i.id)}))}function rn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,l)=>a+Number(l.percentage),0);let i=Math.random()*t;for(const a of e)if(i-=Number(a.percentage),i<=0)return a;return e[e.length-1]}const po=()=>Object.keys(Rt),an=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],fi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function sn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Pi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},dn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ln={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ni(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function cn(e){var r,m;const t=e.player;if(!t)return"";const i=t.job||"ATT",a=Pi[i],l=dn[t.rarity]||"#ccc",d=Ni(t,i),s=t.job2?Ni(t,t.job2):null,c=t.job2?Pi[t.job2]:null,f=sn(t),o=ln[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${l};cursor:pointer;flex-shrink:0;position:relative">
    <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
      <div style="padding:5px 6px 2px;text-align:center">
        <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${t.firstname}</div>
        <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(t.surname_encoded||"").toUpperCase()}</div>
      </div>
      <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
        <div style="position:absolute;top:16px;width:100%;height:28px;background:${a}"></div>
        <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
          <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${a}" stroke="white" stroke-width="2.5"/>
          <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${d}</text>
        </svg>
        ${s!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${c}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${s}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${o}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=t.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function uo(e){var l;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const i=((l=Object.entries(t).sort((d,s)=>s[1]-d[1])[0])==null?void 0:l[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_raw:e}}async function pn(e,{state:t,navigate:i,toast:a}){var m,b;const l=((m=t.profile)==null?void 0:m.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await co()).map(uo)}catch(u){console.warn("Erreur chargement boosters DB, fallback hardcodé",u)}d.length||(d=an.map(u=>({...u,rates:[],isPub:u.id==="players_pub"})));const s=await k.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(u=>u.data||[]),c=new Set(s.filter(u=>u.card_type==="stadium").map(u=>u.stadium_id)),f=new Set(s.filter(u=>u.card_type==="formation").map(u=>u.formation)),o=new Set(s.filter(u=>u.card_type==="game_changer").map(u=>u.gc_type)),r={};for(const u of d){if(u.allow_duplicates!==!1||!((b=u.rates)!=null&&b.length))continue;const T=[...new Set((u.rates||[]).map(p=>p.card_type))];let n=!1;for(const p of T)if(p==="stadium"){const{data:A}=await k.from("stadium_definitions").select("id");if((A||[]).some(I=>!c.has(I.id))){n=!0;break}}else if(p==="game_changer"){const{data:A}=await k.from("gc_definitions").select("name").eq("is_active",!0);if((A||[]).some(I=>!o.has(I.name))){n=!0;break}}else if(p==="formation"){const{FORMATION_LINKS:A}=await ii(async()=>{const{FORMATION_LINKS:I}=await import("./formation-links-Dnttc-Cp.js").then(q=>q.m);return{FORMATION_LINKS:I}},__vite__mapDeps([0,1]));if(Object.keys(A).some(I=>!f.has(I))){n=!0;break}}else{n=!0;break}n||(r[u.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${l.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${d.map(u=>{const T=u.cost===0||l>=u.cost,n=r[u.id]===!0;return`<div class="booster-card ${!T||n?"disabled":""}" data-booster="${u.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${u.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${u.img}" alt="${u.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${u.name}</div>
            <div class="desc">${u.sub}</div>
            <div class="cost">${u.costLabel}</div>
            ${T?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${n?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(u=>{u.addEventListener("click",async()=>{const T=d.find(n=>n.id===u.dataset.booster);if(T){u.style.opacity="0.5",u.style.pointerEvents="none";try{await un(T,{state:t,toast:a,navigate:i,container:e})}catch(n){a(n.message,"error"),u.style.opacity="",u.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(u=>{u.addEventListener("click",T=>{T.stopPropagation();const n=d.find(p=>p.id===u.dataset.boosterId);xn(n)})})}async function un(e,{state:t,toast:i,navigate:a,container:l}){var m,b;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await bn();const{data:d}=await k.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((d||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),c=new Set((d||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let f=[],o=null;try{if((m=e.rates)!=null&&m.length)f=await gi(t.profile,e);else{const u=e.type||"player";u==="player"?f=await fo(t.profile,e.cardCount,e.cost):u==="game_changer"?f=await go(t.profile,e.cardCount,e.cost):u==="formation"?f=await mo(t.profile,e.cost):f=await gi(t.profile,e)}}catch(u){o=u.message||String(u),console.error("[Booster] Erreur:",u)}if(!(f!=null&&f.length)){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",u.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${o||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(u),(b=u.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>u.remove());return}f.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=s.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=c.has(u.formation))});const{data:r}=await k.from("users").select("*").eq("id",t.profile.id).single();r&&(t.profile=r),xo(f,e,a)}function fn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function gn(e,t){let i;switch(t){case"legende":i=e.filter(a=>a.rarity==="legende"),i.length||(i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),i.length||(i=e.filter(a=>mt(a)>=6));break;case"special":i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),i.length||(i=e.filter(a=>mt(a)>=6));break;case"normal_high":i=e.filter(a=>a.rarity==="normal"&&mt(a)>=6),i.length||(i=e.filter(a=>mt(a)>=6));break;default:i=e.filter(a=>a.rarity==="normal"&&mt(a)>=1&&mt(a)<=5),i.length||(i=e.filter(a=>a.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function gi(e,t){if(t.cost>0){const{error:b}=await k.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(b)throw b}const i=t.allow_duplicates!==!1;let a=[];const{data:l,error:d}=await k.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(d){const{data:b}=await k.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);a=b||[]}else a=l||[];const s=new Set(a.filter(b=>b.card_type==="player").map(b=>b.player_id)),c=new Set(a.filter(b=>b.card_type==="formation").map(b=>b.formation)),f=new Set(a.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),o=new Set(a.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),r=new Set,m=[];for(let b=0;b<(t.cardCount||5);b++){const u=rn(t.rates);if(u){if(u.card_type==="player"){const T=M=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[M]||M,n=u.rarity?T(u.rarity):null;let p=k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n&&(p=p.eq("rarity",n));const{data:A}=await p;let I=A||[];if((u.note_min||u.note_max)&&(I=I.filter(M=>{const Y=Math.max(Number(M.note_g)||0,Number(M.note_d)||0,Number(M.note_m)||0,Number(M.note_a)||0);return(!u.note_min||Y>=u.note_min)&&(!u.note_max||Y<=u.note_max)})),I.length||(u.note_min||u.note_max?(I=A||[],console.warn("[Booster] Aucun joueur avec note",u.note_min,"-",u.note_max,"— fallback rareté uniquement")):I=A||[]),!I.length)continue;let q=I.filter(M=>!r.has(M.id));if(i)q.length||(q=I);else if(q=q.filter(M=>!s.has(M.id)),!q.length)continue;const R=q[Math.floor(Math.random()*q.length)];r.add(R.id);const C=s.has(R.id),{data:F}=await k.from("cards").insert({owner_id:e.id,player_id:R.id,card_type:"player"}).select().single();F&&(m.push({...F,player:R,isDuplicate:C}),k.rpc("record_transfer",{p_card_id:F.id,p_player_id:R.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(u.card_type==="game_changer"){const{data:T}=await k.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),n=T!=null&&T.length?T:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],p=i?n:n.filter(R=>!f.has(R.name));if(!i&&!p.length)continue;const I=p[Math.floor(Math.random()*p.length)].name,{data:q}=await k.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:I}).select().single();q&&m.push(q)}else if(u.card_type==="formation"){const T=po(),n=i?T:T.filter(q=>!c.has(q));if(!i&&!n.length)continue;const p=n[Math.floor(Math.random()*n.length)],A=c.has(p),{data:I}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:p}).select();I!=null&&I[0]&&m.push({...I[0],isDuplicate:A})}else if(u.card_type==="stadium"){const{data:T,error:n}=await k.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(n){console.error("[Booster] stadium_definitions:",n.message);continue}if(!(T!=null&&T.length)){console.warn("[Booster] Aucun stade en DB");continue}const p=i?T:T.filter(R=>!o.has(R.id));if(!i&&!p.length)continue;const A=p[Math.floor(Math.random()*p.length)],{data:I,error:q}=await k.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:A.id}).select("id,card_type,stadium_id").single();if(q){console.error("[Booster] insert stadium card:",q.message);continue}I&&m.push({...I,rarity:"normal",_stadiumDef:A})}}}return m}async function fo(e,t,i){if(i>0){const{error:o}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:a}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const l=a.filter(o=>o.job==="GK"),d=a.filter(o=>o.job!=="GK"),s=!e.first_booster_opened&&l.length>0,c=[];for(let o=0;o<t;o++){const r=o===0&&s?l:o===0?d:a,m=fn(),b=gn(r,m);b&&c.push(b)}s&&await k.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:f}=await k.from("cards").insert(c.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(f||[]).forEach((o,r)=>{k.rpc("record_transfer",{p_card_id:o.id,p_player_id:c[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),c.map((o,r)=>({...f[r],player:o}))}async function go(e,t,i){const{error:a}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a;const{data:l}=await k.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=l!=null&&l.length?l:Object.keys(fi).map(r=>({name:r,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const r=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:c,error:f}=await k.from("cards").insert(s).select();return f&&console.error("[Booster GC] Erreur insert:",f.message,f),(c||[]).map(r=>{const m=l==null?void 0:l.find(b=>b.name===r.gc_type||b.id===r.gc_definition_id);return{...r,_gcDef:m||null}})}async function mo(e,t){const{error:i}=await k.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:a}=await k.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),l=new Set((a||[]).map(r=>r.formation)),d=po(),s=d[Math.floor(Math.random()*d.length)],c=l.has(s),{data:f,error:o}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return o&&console.error("[Booster Formation] Erreur insert:",o.message,o),(f||[]).map(r=>({...r,isDuplicate:c}))}function xo(e,t,i,a=null){var X,U;if(!e||e.length===0){const N=document.createElement("div");N.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",N.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(N),(X=N.querySelector("#anim-close-err"))==null||X.addEventListener("click",()=>N.remove());return}e=[...e].sort((N,ne)=>{const pe=N.player?mt(N.player):-1;return(ne.player?mt(ne.player):-1)-pe});const l=document.createElement("div");l.id="booster-anim-overlay",l.innerHTML=`
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
  `,document.body.appendChild(l);let d=!1;const s=document.getElementById("pack-cut-zone"),c=document.getElementById("pack-blade");let f=!1;const o=N=>N.touches&&N.touches[0]?N.touches[0].clientX:N.clientX;function r(N){d||(f=!0,c.style.opacity="1",m(N))}function m(N){if(!f||d)return;const ne=s.getBoundingClientRect(),pe=o(N)-ne.left,ye=Math.max(0,Math.min(1,pe/ne.width));c.style.width=ye*ne.width+"px",ye>=.82&&u()}function b(){d||(f=!1,c.style.transition="width .2s ease, opacity .2s ease",c.style.width="0",c.style.opacity="0",setTimeout(()=>{d||(c.style.transition="")},220))}function u(){var ne;if(d)return;d=!0,f=!1,c.style.width="100%",c.style.opacity="1",(ne=document.getElementById("cut-flash"))==null||ne.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const N=document.getElementById("cut-hint");N&&(N.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{c.style.opacity="0",document.getElementById("pack-phase").style.display="none",A(0)},620)}s.addEventListener("pointerdown",r),window.addEventListener("pointermove",m),window.addEventListener("pointerup",b),s.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",m,{passive:!0}),window.addEventListener("touchend",b);let T=0,n=!1;const p=new Set;function A(N){T=N,document.getElementById("reveal-phase").style.display="flex",I(),q(N,0),Y()}function I(){const N=document.getElementById("card-dots");N&&(N.innerHTML=e.map((ne,pe)=>`<div class="card-dot" data-i="${pe}" style="width:8px;height:8px;border-radius:50%;background:${pe===T?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),N.querySelectorAll(".card-dot").forEach(ne=>ne.addEventListener("click",()=>C(parseInt(ne.dataset.i)))))}function q(N,ne){var xe;const pe=e[N],ye=document.getElementById("card-counter"),Le=document.getElementById("card-track");ye&&(ye.textContent=`Carte ${N+1} / ${e.length}`);const we=document.getElementById("reveal-btns");we&&(we.style.display=N===e.length-1?"flex":"none");const ve=pe.card_type==="player"&&((xe=pe.player)==null?void 0:xe.rarity)==="legende",_e=!p.has(N);p.add(N);let Ae=0;if(pe.card_type==="player"&&pe.player){const J=pe.player,oe=J.job||"ATT";Ae=Number(oe==="GK"?J.note_g:oe==="DEF"?J.note_d:oe==="MIL"?J.note_m:J.note_a)||0}const Ie=J=>{Le.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ve?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${mn(pe)}</div>
          ${pe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const oe=document.getElementById("current-card-wrap");ne!==0?(oe.style.transition="none",oe.style.transform=`translateX(${ne>0?100:-100}%)`,requestAnimationFrame(()=>{oe.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",oe.style.transform="translateX(0)"})):oe.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),J||ve?re():P(),I()};_e&&Ae>6&&pe.card_type==="player"&&pe.player?R(pe,()=>Ie(!0)):Ie(!1)}function R(N,ne){var Ae;n=!0;const pe=N.player,ye=`https://flagsapi.com/${pe.country_code}/flat/64.png`,Le=(Ae=pe.clubs)==null?void 0:Ae.logo_url,we=document.getElementById("walkout-overlay"),ve=document.getElementById("walkout-stage");if(!we||!ve){n=!1,ne();return}we.style.display="flex";const _e=()=>{const Ie=ve.firstElementChild;Ie&&(Ie.classList.remove("wo-in"),Ie.classList.add("wo-out"))};ve.innerHTML=`<img class="wo-in" src="${ye}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(_e,2e3),setTimeout(()=>{var Ie;ve.innerHTML=Le?`<img class="wo-in" src="${Le}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((Ie=pe.clubs)==null?void 0:Ie.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(_e,4450),setTimeout(()=>{we.style.display="none",ve.innerHTML="",n=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),ne()},4900)}function C(N){if(n||N<0||N>=e.length||N===T)return;const ne=N>T?1:-1;T=N,q(N,ne)}function F(){C(T+1)}function M(){C(T-1)}function Y(){const N=document.getElementById("card-viewport");if(!N||N._swipeBound)return;N._swipeBound=!0;let ne=0,pe=0,ye=0,Le=!1;const we=xe=>xe.touches?xe.touches[0].clientX:xe.clientX,ve=xe=>xe.touches?xe.touches[0].clientY:xe.clientY,_e=xe=>{Le=!0,ne=we(xe),pe=ve(xe),ye=0},Ae=xe=>{if(!Le)return;ye=we(xe)-ne;const J=ve(xe)-pe;if(Math.abs(ye)<Math.abs(J))return;const oe=document.getElementById("current-card-wrap");oe&&(oe.style.transition="none",oe.style.transform=`translateX(${ye*.6}px) rotate(${ye*.02}deg)`)},Ie=()=>{if(!Le)return;Le=!1;const xe=document.getElementById("current-card-wrap"),J=55;ye<=-J&&T<e.length-1?F():ye>=J&&T>0?M():xe&&(xe.style.transition="transform .2s ease",xe.style.transform="translateX(0)")};N.addEventListener("pointerdown",_e),N.addEventListener("pointermove",Ae),N.addEventListener("pointerup",Ie),N.addEventListener("pointercancel",Ie),N.addEventListener("touchstart",_e,{passive:!0}),N.addEventListener("touchmove",Ae,{passive:!0}),N.addEventListener("touchend",Ie),N.addEventListener("click",xe=>{if(Math.abs(ye)>8)return;const J=N.getBoundingClientRect();xe.clientX-J.left>J.width/2?F():M()})}let de=null;function re(){const N=document.getElementById("fireworks-canvas");if(!N)return;N.width=window.innerWidth,N.height=window.innerHeight;const ne=N.getContext("2d"),pe=[];function ye(){const we=Math.random()*N.width,ve=Math.random()*N.height*.6,_e=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Ae=_e[Math.floor(Math.random()*_e.length)];for(let Ie=0;Ie<60;Ie++){const xe=Math.PI*2/60*Ie,J=2+Math.random()*5;pe.push({x:we,y:ve,vx:Math.cos(xe)*J,vy:Math.sin(xe)*J,alpha:1,color:Ae,size:2+Math.random()*3})}}ye(),de=setInterval(ye,600);function Le(){if(document.getElementById("fireworks-canvas")){ne.clearRect(0,0,N.width,N.height);for(let we=pe.length-1;we>=0;we--){const ve=pe[we];if(ve.x+=ve.vx,ve.y+=ve.vy+.08,ve.vy*=.98,ve.alpha-=.018,ve.alpha<=0){pe.splice(we,1);continue}ne.globalAlpha=ve.alpha,ne.fillStyle=ve.color,ne.beginPath(),ne.arc(ve.x,ve.y,ve.size,0,Math.PI*2),ne.fill()}ne.globalAlpha=1,(de!==null||pe.length>0)&&requestAnimationFrame(Le)}}Le()}function P(){de!==null&&(clearInterval(de),de=null);const N=document.getElementById("fireworks-canvas");N&&N.getContext("2d").clearRect(0,0,N.width,N.height)}if(a){const N=document.getElementById("reveal-btns");N&&(N.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(U=document.getElementById("reveal-next"))==null||U.addEventListener("click",()=>{P(),l.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{P(),l.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{P(),l.remove(),i("boosters")})}function mn(e){var t,i,a,l;if(e.card_type==="player"&&e.player)return cn(e);if(e.card_type==="game_changer"){const d=e._gcDef,s=(d==null?void 0:d.gc_type)==="ultra_game_changer",c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},f={purple:"#b06ce0",light_blue:"#00d4ef"},o=c[d==null?void 0:d.color]||c.purple,r=f[d==null?void 0:d.color]||f.purple,m=(d==null?void 0:d.name)||e.gc_type||"Game Changer",b=(d==null?void 0:d.effect)||((t=fi[e.gc_type])==null?void 0:t.desc)||"",u=d!=null&&d.image_url?`/icons/${d.image_url}`:null,T=((i=fi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${o};border-radius:14px;border:3px solid ${r};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${r}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${m.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${s?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${u?`<img src="${u}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${T}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${b.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const d=e._stadiumDef,s=(d==null?void 0:d.name)||"Stade",c=((a=d==null?void 0:d.club)==null?void 0:a.encoded_name)||(d==null?void 0:d.country_code)||"—",f=d!=null&&d.image_url?`/icons/${d.image_url}`:((l=d==null?void 0:d.club)==null?void 0:l.logo_url)||(d!=null&&d.country_code?`https://flagcdn.com/64x48/${d.country_code.toLowerCase()}.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${s.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${s}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${f?`<img src="${f}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function xn(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const l={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(s=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${d[s.card_type]||s.card_type}</span>
            ${s.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${l[s.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${s.rarity}</span>`:""}
            ${s.note_min||s.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${s.note_min||""}–${s.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(s.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>a.remove());return}yn()}function yn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function bn(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const a=setInterval(()=>{i--;const l=document.getElementById("mw-ad-cd");l&&(l.textContent=i),i<=0&&(clearInterval(a),t.remove(),e(!0))},1e3)})}async function hn(e,{state:t,navigate:i,toast:a,refreshProfile:l}){var b,u;const{data:d}=await k.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let s=Array.isArray((b=t.profile)==null?void 0:b.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await k.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let c=null;try{const n=(await co()).find(p=>(p.name||"").toLowerCase().includes("new player"));n&&(c=uo(n))}catch(T){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',T)}const f=s.length;let o=0;e.innerHTML=`
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
  </div>`;const r=async()=>{await k.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function m(){var I;if(o>=f||!s.length){await k.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),l&&await l(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const T=s[0],{data:n}=await k.from("users").select("*").eq("id",t.user.id).single();n&&(t.profile=n);let p=[];try{if(T.type==="formation")p=await mo(t.profile,0);else if(T.type==="game_changer")p=await go(t.profile,T.count||3,0);else if(c&&((I=c.rates)!=null&&I.length)){const q={...c,cost:0,cardCount:T.count||c.cardCount||5};p=await gi(t.profile,q),T.guaranteeGK&&!t.profile.first_booster_opened&&(p.some(C=>C.player&&C.player.job==="GK")||await vn(t.profile,p),await k.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else p=await fo(t.profile,T.count||5,0)}catch(q){a(q.message||"Erreur ouverture booster","error");return}s.shift(),o++,await r();const A=T.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:T.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${o}/${f})`,img:(c==null?void 0:c.img)||"/icons/booster-players.png"};xo(p,A,i,()=>{m()})}(u=document.getElementById("onboard-start"))==null||u.addEventListener("click",()=>m())}async function vn(e,t){try{const{data:i}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const a=i[Math.floor(Math.random()*i.length)],l=t.findIndex(s=>s.player);if(l===-1)return;const d=t[l];await k.from("cards").update({player_id:a.id}).eq("id",d.id),t[l]={...d,player_id:a.id,player:a}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const It={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Mt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function _t(e,t,i,a,l){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",l)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function mi(e,t){var d,s;const i=e.player,a=e.evolution_bonus||0,l=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?a:0)+(i.job2==="GK"&&l>0?a:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?a:0)+(i.job2==="DEF"&&l>0?a:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?a:0)+(i.job2==="MIL"&&l>0?a:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?a:0)+(i.job2==="ATT"&&l>0?a:0),evolution_bonus:a,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((d=i.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((s=i.clubs)==null?void 0:s.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function jt(e,t){if(!t||!e)return e;const{club_id:i,country_code:a}=t;return Object.values(e).forEach(l=>{Array.isArray(l)&&l.forEach(d=>{const s=i&&String(d.club_id)===String(i),c=a&&String(d.country_code)===String(a);(s||c)&&(d.stadiumBonus=!0)})}),e}function Nt(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:a}=t;return e.forEach(l=>{if(!l)return;const d=i&&String(l.club_id)===String(i),s=a&&String(l.country_code)===String(a);(d||s)&&(l.stadiumBonus=!0)}),e}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ni(){const e=Math.random()*100;return e<10?3:e<30?2:1}function yt(e,t){const i=It[t]||It["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const c=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===s).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:s})),f=lt(c.length);c.forEach((o,r)=>{o._col=f[r]}),a[s]=c}return a}const d=[...e];for(const s of["GK","DEF","MIL","ATT"]){const c=[];for(let o=0;o<i[s];o++){let r=d.findIndex(m=>m.job===s);if(r===-1&&(r=d.findIndex(m=>m.job2===s)),r===-1&&(r=0),d[r]){const m={...d[r],_line:s};c.push(m),d.splice(r,1)}}const f=lt(c.length);c.forEach((o,r)=>{o._col=f[r]}),a[s]=c}return a}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ri(e,t,i){const l=new Set,d=t.filter(r=>{const m=r.gc_type||r.id;return l.has(m)?!1:(l.add(m),!0)});let s=[];function c(r,m){const b=r._gcDef,u={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},T={purple:"#9b59b6",light_blue:"#00bcd4"},n=u[b==null?void 0:b.color]||u.purple,p=T[b==null?void 0:b.color]||T.purple;return`<div class="gc-select-card" data-id="${r.id}"
      style="width:100px;border-radius:10px;border:3px solid ${m?"#FFD700":p};background:${n};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${m?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${m?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((b==null?void 0:b.name)||r.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(b==null?void 0:b.name)||r.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${b!=null&&b.image_url?`<img src="/icons/${b.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((b==null?void 0:b.effect)||"").slice(0,50)}</span>
      </div>
      ${m?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const f=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function o(){var m,b,u;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=s.length>0;e.innerHTML=`
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
        ${d.map(T=>{const n=s.find(p=>p.gc_type===T.gc_type);return c(T,!!n)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${r?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${r?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${r?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${r?"pointer":"default"};box-shadow:${r?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(T=>{T.addEventListener("click",()=>{const n=T.dataset.id,p=d.find(I=>I.id===n);if(!p)return;const A=s.findIndex(I=>I.gc_type===p.gc_type);A>-1?s.splice(A,1):s.length<3&&s.push(p),o()})}),(m=e.querySelector("#gc-launch"))==null||m.addEventListener("click",()=>{r&&f(s)}),(b=e.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>f([])),(u=e.querySelector("#gc-reset"))==null||u.addEventListener("click",()=>{s.length&&(s=[],o())})}o()}function wn(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function _n(e,t,i){const{state:a,navigate:l}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){_t(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>l("decks"));return}const s=d.map(b=>b.id),{data:c}=await k.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order"),f=[...new Set((c||[]).filter(b=>{var u,T;return((u=b.card)==null?void 0:u.card_type)==="stadium"&&((T=b.card)==null?void 0:T.stadium_id)}).map(b=>b.card.stadium_id))],o={};if(f.length){const{data:b}=await k.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(b||[]).forEach(u=>{o[u.id]=u}),(c||[]).forEach(u=>{var T,n;((T=u.card)==null?void 0:T.card_type)==="stadium"&&((n=u.card)!=null&&n.stadium_id)&&(u.card._stadiumDef=o[u.card.stadium_id]||null)})}let r=0;function m(){var C,F,M,Y,de,re,P;const b=d[r],u=(c||[]).filter(X=>X.deck_id===b.id),T=u.filter(X=>{var U;return X.is_starter&&((U=X.card)==null?void 0:U.player)}).map(X=>mi(X.card,X.position)),n=u.find(X=>{var U;return((U=X.card)==null?void 0:U.card_type)==="formation"}),p=b.formation||((C=n==null?void 0:n.card)==null?void 0:C.formation)||"4-4-2";let A=T.length>=11?yt(T,p):null,I=((F=b.stadium_card)==null?void 0:F.stadium_def)||null;I&&A&&(A=jt(A,I));const q=T.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${wn(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${r===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${r===0?"0.1":"0.3"});color:${r===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${r===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${b.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${p} · ${T.length}/11 ${b.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${r===d.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${r===d.length-1?"0.1":"0.3"});color:${r===d.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${r===d.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${I?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${I.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((M=I.club)==null?void 0:M.encoded_name)||I.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${A?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ft(A,p,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${T.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${d.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${d.map((X,U)=>`<div style="width:7px;height:7px;border-radius:50%;background:${U===r?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${q?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${q?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${q?"pointer":"default"}">
          ${q?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const U=e.querySelector(".deck-preview-wrap svg");U&&(U.removeAttribute("width"),U.removeAttribute("height"),U.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",U.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(Y=document.getElementById("prev-deck"))==null||Y.addEventListener("click",()=>{r>0&&(r--,m())}),(de=document.getElementById("next-deck"))==null||de.addEventListener("click",()=>{r<d.length-1&&(r++,m())}),(re=document.getElementById("validate-deck"))==null||re.addEventListener("click",()=>{if(!q)return;const X=t.state.params||{};t.navigate("match",{...X,matchMode:X.matchMode||i,deckId:b.id})}),(P=document.getElementById("cancel-deck-select"))==null||P.addEventListener("click",()=>{We(e),l("home")});const R=document.getElementById("deck-swipe-zone");if(R){let X=0,U=0;R.addEventListener("touchstart",N=>{X=N.touches[0].clientX,U=N.touches[0].clientY},{passive:!0}),R.addEventListener("touchend",N=>{const ne=N.changedTouches[0].clientX-X,pe=N.changedTouches[0].clientY-U;Math.abs(ne)<40||Math.abs(ne)<Math.abs(pe)||(ne<0&&r<d.length-1?(r++,m()):ne>0&&r>0&&(r--,m()))},{passive:!0})}}m()}function yo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ye(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),l=yo(e),d=e._line||e.job||"MIL",s=Mt[d]||"#555",c={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",f=e.note!==void 0?Number(e.note)||0:(Number(je(e,d))||0)+(e.boost||0),o=bo(e==null?void 0:e.country_code),r=Math.round(i*.19),m=Math.round(i*.25),b=i-Math.round(i*.19)-Math.round(i*.25),u=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${u}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${b}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${m}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Qt(e==null?void 0:e.country_code)?`<img src="${Qt(e.country_code)}" style="width:${m+2}px;height:${m-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${m-4}px">${o}</span>`}
      <span style="font-size:${m-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":f}</span>
      ${l?`<img src="${l}" style="width:${m-4}px;height:${m-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,m-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ot(e,t,i){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let l='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((d,s)=>{if(l+=Ye(d,40,52),s<a.length-1){const c=at(d,a[s+1]);l+=`<div style="width:7px;height:3px;background:${c==="#ff3333"||c==="#cc2222"?"rgba(255,255,255,0.12)":c};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(l+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),l+="</div>",l}function Qt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function bo(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ut(e,t,i,a,l=310,d=310,s=[]){var q;const c=Rt[t]||{},f=Yi(t)||hi[t]||[],o={},r=["ATT","MIL","DEF","GK"];for(const R of r)(e[R]||[]).forEach((F,M)=>{o[`${R}${M+1}`]=F});function m(R){const C=c[R];return C?{x:C.x*l,y:C.y*d}:null}let b="";for(const[R,C]of f){const F=m(R),M=m(C);if(!F||!M)continue;const Y=o[R],de=o[C],re=at(Y,de);re==="#00ff88"||re==="#FFD700"?(b+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${re}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,b+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):b+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const u=48,T=64,n=13,p=16,A={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[R,C]of Object.entries(o)){const F=m(R);if(!F||!C)continue;const M=R.replace(/[0-9]/g,""),Y=Mt[M]||"#555",de=s.includes(C.cardId),re=i==="attack"&&(["MIL","ATT"].includes(M)||de)&&!C.used||i==="defense"&&["GK","DEF","MIL"].includes(M)&&!C.used,P=a.includes(C.cardId);let X;i==="attack"?X=de?Math.max(1,Number(C.note_a)||0):M==="MIL"?Number(C.note_m)||0:Number(C.note_a)||0:i==="defense"?X=M==="GK"?Number(C.note_g)||0:M==="MIL"?Number(C.note_m)||0:Number(C.note_d)||0:X=Number(M==="GK"?C.note_g:M==="DEF"?C.note_d:M==="MIL"?C.note_m:C.note_a)||0,X=X+(C.boost||0),C.stadiumBonus&&(i==="attack"&&(M==="ATT"||M==="MIL")||i==="defense"&&(M==="GK"||M==="DEF"||M==="MIL")?X+=10:i||(X+=10));const U=(F.x-u/2).toFixed(1),N=(F.y-T/2).toFixed(1),ne=A[C==null?void 0:C.rarity]||A.normal;if(C.used){const Ae=typeof import.meta<"u"&&"/"||"/",xe=`${typeof window<"u"&&((q=window.location)==null?void 0:q.origin)||""}${Ae}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");b+=`<rect x="${U}" y="${N}" width="${u}" height="${T}" rx="5" fill="#161616"/>`,b+=`<image href="${xe}" xlink:href="${xe}" x="${U}" y="${N}" width="${u}" height="${T}" preserveAspectRatio="xMidYMid slice"/>`,b+=`<rect x="${U}" y="${N}" width="${u}" height="${T}" rx="5" fill="none" stroke="${ne}" stroke-width="2" opacity="0.7"/>`,b+=`<rect x="${U}" y="${N}" width="${u}" height="${T}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${C.cardId}" data-role="${M}" style="cursor:pointer"/>`;continue}const pe=P?.45:1,ye=P?"#FFD700":ne,Le=P?3:(C==null?void 0:C.rarity)==="legende"||(C==null?void 0:C.rarity)==="légende"||(C==null?void 0:C.rarity)==="pepite"||(C==null?void 0:C.rarity)==="pépite"?2.5:2,we=T-n-p;b+=`<defs><clipPath id="cp-${R}"><rect x="${U}" y="${(F.y-T/2+n).toFixed(1)}" width="${u}" height="${we}"/></clipPath></defs>`,b+=`<rect x="${U}" y="${N}" width="${u}" height="${T}" rx="5" fill="${Y}" opacity="${pe}"/>`;const ve=Pe(C);ve&&(b+=`<image href="${ve}" xlink:href="${ve}" x="${U}" y="${(F.y-T/2+n).toFixed(1)}" width="${u}" height="${we}" clip-path="url(#cp-${R})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${U}" y="${N}" width="${u}" height="${n}" rx="4" fill="rgba(255,255,255,0.92)"/>`,b+=`<text x="${F.x.toFixed(1)}" y="${(F.y-T/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.name||"").slice(0,9)}</text>`;const _e=(F.y+T/2-p).toFixed(1);b+=`<rect x="${U}" y="${_e}" width="${u}" height="${p}" fill="rgba(255,255,255,0.92)"/>`;{const Ae=Qt(C.country_code);Ae?b+=`<image href="${Ae}" xlink:href="${Ae}" x="${(F.x-20).toFixed(1)}" y="${(F.y+T/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:b+=`<text x="${(F.x-13).toFixed(1)}" y="${(F.y+T/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${bo(C.country_code)}</text>`;const Ie=C.stadiumBonus?"#E87722":"#111";b+=`<text x="${F.x.toFixed(1)}" y="${(F.y+T/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${Ie}" font-family="Arial Black">${X}</text>`;const xe=yo(C);xe?b+=`<image href="${xe}" xlink:href="${xe}" x="${(F.x+u/2-14).toFixed(1)}" y="${(F.y+T/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:C.clubName&&(b+=`<text x="${(F.x+14).toFixed(1)}" y="${(F.y+T/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(C.clubName||"").slice(0,3).toUpperCase()}</text>`),C.stadiumBonus&&(b+=`<rect x="${(F.x-u/2).toFixed(1)}" y="${(F.y-T/2).toFixed(1)}" width="${u}" height="${T}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}b+=`<rect x="${U}" y="${N}" width="${u}" height="${T}" rx="5" fill="${P?"rgba(255,255,255,0.12)":"none"}" stroke="${ye}" stroke-width="${Le}" opacity="${pe}"/>`,re&&(b+=`<rect x="${U}" y="${N}" width="${u}" height="${T}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${P?"selected":""}" data-card-id="${C.cardId}" data-role="${M}" style="cursor:pointer"/>`)}const I=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-I} ${-I} ${l+I*2} ${d+I*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${b}
  </svg>`}function ft(e,t,i,a,l=300,d=300,s=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ut(e,t,i,a,l,d,s)}
  </div>`}function dt(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function ai(e,t,i,a){var F;const{state:l,navigate:d,toast:s}=t;et(e);const c=l.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!c.deckId)return _n(e,t,i);const f=c.deckId;let o,r,m,b;try{const M=await Promise.all([k.from("decks").select("formation,name,stadium_card_id").eq("id",f).single(),k.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",f).order("slot_order")]);o=M[0].data,m=M[0].error,r=M[1].data,b=M[1].error}catch(M){console.error("[Match] Exception chargement deck:",M),_t(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(m||b){console.error("[Match] Erreur Supabase:",m||b),_t(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const u=(r||[]).filter(M=>{var Y;return M.is_starter&&((Y=M.card)==null?void 0:Y.player)}).map(M=>mi(M.card,M.position)),T=(r||[]).filter(M=>{var Y;return!M.is_starter&&((Y=M.card)==null?void 0:Y.player)}).map(M=>mi(M.card,M.position));if(u.length<11){_t(e,"⚠️",`Deck incomplet (${u.length}/11).`,"Compléter",()=>d("decks"));return}const n=(r||[]).find(M=>{var Y;return((Y=M.card)==null?void 0:Y.card_type)==="formation"}),p=(o==null?void 0:o.formation)||((F=n==null?void 0:n.card)==null?void 0:F.formation)||"4-4-2",{data:A,error:I}=await k.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",l.profile.id).eq("card_type","game_changer"),{data:q}=await k.from("gc_definitions").select("*").eq("is_active",!0),R=(A||[]).map(M=>({...M,_gcDef:(q==null?void 0:q.find(Y=>Y.name===M.gc_type||Y.id===M.gc_definition_id))||null}));let C=null;if(o!=null&&o.stadium_card_id){const{data:M}=await k.from("cards").select("stadium_id").eq("id",o.stadium_card_id).single();if(M!=null&&M.stadium_id){const{data:Y}=await k.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",M.stadium_id).single();C=Y||null}}a({deckId:f,formation:p,starters:u,subsRaw:T,gcCardsEnriched:R,gcDefs:q||[],stadiumDef:C})}async function $n(e,t){const{state:i}=t,l=(i.params||{}).matchMode||"vs_ai_easy",d=l.replace("vs_ai_",""),s=l;await ai(e,t,l,async({deckId:c,formation:f,starters:o,subsRaw:r,gcCardsEnriched:m,gcDefs:b,stadiumDef:u})=>{try{let T=yt(o,f);u&&(T=jt(T,u),Nt(r,u));const n=await kn(f,d),p=n.lines||n,A=async I=>{try{const{data:q,error:R}=await k.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:c,status:"in_progress"}).select().single();if(R){console.error("[MatchIA] Erreur création match:",R),_t(e,"⚠️","Impossible de créer le match ("+R.message+").","Retour",()=>t.navigate("home"));return}const C=n.stadiumDef||null;C&&p&&(jt(p,C),Nt(n.subs||[],C));const F={gcDefs:b||[],matchId:q==null?void 0:q.id,mode:s,difficulty:d,formation:f,homeTeam:T,aiTeam:p,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),aiSubs:n.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((n.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:n.gcCards||[],aiUsedGc:[],aiStadiumDef:C,homeScore:0,aiScore:0,gcCards:I,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Tn(e,F,t)}catch(q){console.error("[MatchIA] Exception launchMatch:",q),_t(e,"⚠️","Erreur au lancement du match : "+q.message,"Retour",()=>t.navigate("home"))}};if(!m.length){A([]);return}ri(e,m,A)}catch(T){console.error("[MatchIA] Exception setup:",T),_t(e,"⚠️","Erreur de préparation du match : "+T.message,"Retour",()=>t.navigate("home"))}})}async function kn(e,t){var p;const{data:i}=await k.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:En(e),subs:[],gcCards:[],stadiumDef:null};const a=It[e]||It["4-4-2"],l={GK:[],DEF:[],MIL:[],ATT:[]},d=new Set;function s(A,I,q){var R,C;return d.add(A.id),{cardId:"ai-"+A.id+"-"+q,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:Number(A.note_g)||0,note_d:Number(A.note_d)||0,note_m:Number(A.note_m)||0,note_a:Number(A.note_a)||0,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:((R=A.clubs)==null?void 0:R.encoded_name)||null,clubLogo:((C=A.clubs)==null?void 0:C.logo_url)||null,boost:0,used:!1,_line:I}}for(const A of["GK","DEF","MIL","ATT"]){const I=i.filter(M=>M.job===A&&!d.has(M.id)),q=i.filter(M=>M.job!==A&&!d.has(M.id)),R=[...I,...q],C=[];for(let M=0;M<a[A];M++){const Y=R[M];Y&&C.push(s(Y,A,M))}const F=lt(C.length);C.forEach((M,Y)=>{M._col=F[Y]}),l[A]=C}const f=i.filter(A=>!d.has(A.id)).slice(0,5).map((A,I)=>s(A,A.job,100+I)),m=Object.keys(Re).sort(()=>Math.random()-.5).slice(0,3).map((A,I)=>{var q,R;return{id:"ai-gc-"+I,gc_type:A,name:((q=Re[A])==null?void 0:q.name)||A,icon:((R=Re[A])==null?void 0:R.icon)||"⚡"}}),b=Object.values(l).flat(),u={};b.forEach(A=>{A.club_id&&(u[A.club_id]=(u[A.club_id]||0)+1)});const T=(p=Object.entries(u).sort((A,I)=>I[1]-A[1])[0])==null?void 0:p[0];let n=null;if(T){const{data:A}=await k.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",T).single();A&&(n={club_id:A.id,country_code:null,name:A.encoded_name+" Stadium",club:{encoded_name:A.encoded_name,logo_url:A.logo_url}})}return{lines:l,subs:f,gcCards:m,stadiumDef:n}}function En(e){const t=It[e]||It["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let l=0;for(const d of["GK","DEF","MIL","ATT"]){const s=[];for(let f=0;f<t[d];f++){const o=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+l,id:"fake-"+l,firstname:"IA",name:a[l%a.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?o:2,note_d:d==="DEF"?o:2,note_m:d==="MIL"?o:2,note_a:d==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:d}),l++}const c=lt(s.length);s.forEach((f,o)=>{f._col=c[o]}),i[d]=s}return i}function Tn(e,t,i){var a;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((a=t.aiStadiumDef.club)==null?void 0:a.encoded_name)||""}</div>`:""}
    <div style="width:min(90vw,420px)">${ut(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>An(e,t,i),5e3)}function An(e,t,i){const a=t.homeTeam.MIL||[],l=t.aiTeam.MIL||[];function d(n){return n.reduce((p,A)=>p+je(A,"MIL"),0)}function s(n){let p=0;for(let A=0;A<n.length-1;A++){const I=at(n[A],n[A+1]);I==="#00ff88"?p+=2:I==="#FFD700"&&(p+=1)}return p}const c=d(a)+s(a),f=d(l)+s(l),o=c>=f;function r(n,p,A,I){return`<div id="duel-row-${I}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${p}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${n.map((q,R)=>{const C=R<n.length-1?at(q,n[R+1]):null,F=!C||C==="#ff3333"||C==="#cc2222",M=C==="#00ff88"?"+2":C==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${I}" data-idx="${R}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ye({...q,note:je(q,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${R<n.length-1?`<div class="duel-link duel-link-${I}" data-idx="${R}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${F?"rgba(255,255,255,0.12)":C};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${F?"none":`0 0 8px ${C}`}">
            ${M?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${C}">${M}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${I}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${d(n)} + ${s(n)} liens = <b style="color:#fff">${d(n)+s(n)}</b>
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

    ${r(a,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${r(l,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const m=()=>{const n=(p,A)=>e.querySelectorAll(p).forEach((I,q)=>{setTimeout(()=>{I.style.opacity="1",I.style.transform="translateY(0) scale(1)"},A+q*90)});n(".duel-card-home",150),n(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,A)=>{setTimeout(()=>{p.style.opacity="1"},A*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(A=>A.style.opacity="1")},1250),setTimeout(()=>{b("score-home",c,800),b("score-ai",f,800)},1500)};function b(n,p,A){const I=document.getElementById(n);if(!I)return;const q=performance.now(),R=C=>{const F=Math.min(1,(C-q)/A);I.textContent=Math.round(p*(1-Math.pow(1-F,3))),F<1?requestAnimationFrame(R):I.textContent=p};requestAnimationFrame(R)}requestAnimationFrame(m),t.attacker=o?"home":"ai";const u=o?ni():null;o&&(t.boostCard={value:u}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(n=>({name:n.name,note:je(n,"MIL"),portrait:Pe(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiPlayers:l.map(n=>({name:n.name,note:je(n,"MIL"),portrait:Pe(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),homeTotal:c,aiTotal:f,text:`Duel milieu : ${t.clubName} ${c} – ${f} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const T=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Xe(e,t,i),t.attacker==="ai"&&setTimeout(()=>xi(e,t,i),800)};setTimeout(()=>{const n=document.getElementById("score-home"),p=document.getElementById("score-ai"),A=document.getElementById(o?"duel-row-home":"duel-row-ai"),I=document.getElementById(o?"duel-row-ai":"duel-row-home"),q=o?n:p,R=o?p:n;q&&(q.style.fontSize="80px",q.style.color=o?"#FFD700":"#ff6b6b",q.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),R&&(R.style.opacity="0.25"),setTimeout(()=>{A&&(A.style.transformOrigin="center",A.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",A.style.zIndex="5"),setTimeout(()=>{var F;const C=document.getElementById("duel-shock");if(C){const M=(F=I||A)==null?void 0:F.getBoundingClientRect(),Y=e.querySelector(".match-screen").getBoundingClientRect();M&&(C.style.top=M.top-Y.top+M.height/2+"px"),C.style.animation="shockwave .5s ease-out forwards"}I&&(I.style.transformOrigin="center",I.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var F;const C=document.getElementById("duel-finale");C&&(C.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${o?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${o?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${u}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,C.style.transition="opacity .45s ease",C.style.opacity="1",C.style.pointerEvents="auto",(F=document.getElementById("start-match-btn"))==null||F.addEventListener("click",T))},600)},700)},2800)}function Sn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Xe(e,t,i){var q,R,C,F,M,Y,de,re;const a=t.selected.map(P=>P.cardId),l=t.usedSubIds||[],d=t.homeSubs.filter(P=>!l.includes(P.cardId)),c=Object.values(t.homeTeam).flat().filter(P=>P.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,f=!["GK","DEF","MIL","ATT"].some(P=>(t.aiTeam[P]||[]).some(X=>!X.used)),o=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(P=>!P.used),r=t.phase==="attack"&&f&&o.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];t.log[t.log.length-1];const m=t.phase==="ai-attack"||t.phase==="ai-defense",b=t.phase==="attack",u=t.phase==="defense",T=t.phase==="finished",n=t.gcCards.filter(P=>!t.usedGc.includes(P.id)),p=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const X=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ot((X.players||[]).map(U=>({...U,used:!1})),"#ff6b6b",X.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const X=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ot((X.players||[]).map(U=>({...U,used:!1})),"#00ff88",X.total)}
          </div>`}const P=t.log[t.log.length-1];return P?'<div style="padding:2px 4px">'+Sn(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const P=window.innerWidth>=700,X=(_e,Ae,Ie)=>{var be,Se;const xe=(t.gcDefs||[]).find(j=>j.name===_e.gc_type),J={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[xe==null?void 0:xe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",oe={purple:"#b06ce0",light_blue:"#00d4ef"}[xe==null?void 0:xe.color]||"#b06ce0",ge=(xe==null?void 0:xe.name)||_e.gc_type,W=(xe==null?void 0:xe.effect)||((be=Re[_e.gc_type])==null?void 0:be.desc)||"",Z=xe!=null&&xe.image_url?`/icons/${xe.image_url}`:null,K=((Se=Re[_e.gc_type])==null?void 0:Se.icon)||"⚡",se=Math.round(Ie*.22),he=Math.round(Ie*.22),ze=Ie-se-he,Me=ge.length>12?7:9;return`<div class="gc-mini" data-gc-id="${_e.id}" data-gc-type="${_e.gc_type}"
          style="box-sizing:border-box;width:${Ae}px;height:${Ie}px;border-radius:10px;border:2px solid ${oe};background:${J};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${se}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Me}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Ae-6}px">${ge}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${ze}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Z?`<img src="${Z}" style="max-width:${Ae-10}px;max-height:${ze-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ze*.55)}px">${K}</span>`}
          </div>
          <div style="height:${he}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${W.slice(0,38)}</span>
          </div>
        </div>`},U=(_e,Ae)=>{var Ie;return`<div id="boost-card"
          style="box-sizing:border-box;width:${_e}px;height:${Ae}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ae*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Ae*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Ae*.09)}px;color:#000;font-weight:900">+${(Ie=t.boostCard)==null?void 0:Ie.value}</div>
          </div>`},N=(_e,Ae)=>Ae?U(130,175):X(_e,130,175),ne=(_e,Ae)=>Ae?U(68,95):X(_e,68,95),pe=P?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ye=T?`<button id="btn-results" style="${pe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:m?`<div style="${pe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:b?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:u?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${pe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Le=b||u?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",we=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${P?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${d.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':d.map(_e=>`<div class="sub-btn-col" data-sub-id="${_e.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(_e,76,100)}</div>`).join("")}
      </div>`,ve=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ft(t.homeTeam,t.formation,t.phase,a,300,300,r)}
        </div>
      </div>`;return P?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${we}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ve}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ye}${Le}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${n.map(_e=>N(_e,!1)).join("")}
            ${p?N(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(t.homeTeam,t.formation,t.phase,a,300,300,r)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${n.map(_e=>ne(_e,!1)).join("")}
            ${p?ne(null,!0):""}
            <div id="sub-btn-main" style="cursor:${c?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${c?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${c?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${c?1:.4}">
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
          <div>${ye}${Le}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(P=>{var X,U,N;if(P.type==="duel"){const ne=P.isGoal,pe=P.homeScored?"#FFD700":ne?"#ff6b6b":"rgba(255,255,255,0.3)",ye=P.homeScored?"⚽ BUT !":ne?"⚽ BUT IA !":(X=P.homePlayers)!=null&&X.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${ne?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${pe};margin-bottom:4px">
                <div style="font-size:9px;color:${pe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ye}</div>
                ${(U=P.homePlayers)!=null&&U.length?`<div style="margin-bottom:3px">${ot(P.homePlayers,"rgba(255,255,255,0.7)",P.homeTotal)}</div>`:""}
                ${(N=P.aiPlayers)!=null&&N.length?`<div style="opacity:0.7">${ot(P.aiPlayers,"#ff6b6b",P.aiTotal)}</div>`:""}
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
  </div>`;function A(){const P=e.querySelector(".match-screen");if(!P)return;const X=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.bottom="auto",P.style.height=X+"px",P.style.minHeight=X+"px",P.style.maxHeight=X+"px",P.style.overflow="hidden";const U=e.querySelector("#mobile-action-bar"),N=e.querySelector("#mobile-play-area");U&&N&&(N.style.paddingBottom=U.offsetHeight+"px")}if(A(),setTimeout(A,120),setTimeout(A,400),setTimeout(A,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",A),window.visualViewport.addEventListener("scroll",A)),window.addEventListener("resize",A)),function(){const X=e.querySelector(".terrain-wrapper svg");X&&(X.removeAttribute("width"),X.removeAttribute("height"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",X.setAttribute("viewBox","-26 -26 352 352"),X.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const P=e.querySelector(".terrain-wrapper svg");P&&(P.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let P=!1,X=30;const U=()=>document.getElementById("match-timer"),N=()=>{const ne=U();if(!ne)return;const pe=String(Math.floor(X/60)).padStart(2,"0"),ye=String(X%60).padStart(2,"0");ne.textContent=` ${pe}:${ye}`,ne.style.color=P?"#ff2222":"#ff9500",ne.style.fontWeight="900"};N(),t._timerInt=setInterval(()=>{if(X--,X<0)if(!P)P=!0,X=15,N();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const ne=document.createElement("div");ne.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ne.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ne),setTimeout(()=>{ne.remove(),Ft(e,t,i)},2500)}else N()},1e3)}(q=document.getElementById("match-quit"))==null||q.addEventListener("click",()=>{We(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Ft(e,t,i))}),(R=document.getElementById("view-ai"))==null||R.addEventListener("click",()=>Pn(t,i)),(C=document.getElementById("toggle-history"))==null||C.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.add("open")}),(F=document.getElementById("close-history"))==null||F.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.remove("open")}),(M=document.getElementById("btn-action"))==null||M.addEventListener("click",()=>{t.selected.length!==0&&(b?Ln(e,t,i):u&&In(e,t,i))}),(Y=document.getElementById("btn-results"))==null||Y.addEventListener("click",()=>Ft(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>zn(P,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(P=>{P.addEventListener("click",()=>li(e,t,i,null,P.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(P=>{P.addEventListener("click",()=>Bn(P.dataset.gcId,P.dataset.gcType,e,t,i))}),(de=document.getElementById("boost-card"))==null||de.addEventListener("click",()=>Gn(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(P=>{P.addEventListener("click",()=>li(e,t,i,P.dataset.subId))}),(re=document.getElementById("sub-btn-main"))==null||re.addEventListener("click",()=>li(e,t,i))}function zn(e,t,i,a){const l=e.dataset.cardId,d=e.dataset.role,s=t.selected.findIndex(c=>c.cardId===l);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const c=(t.homeTeam[d]||[]).find(f=>f.cardId===l);c&&t.selected.push({...c,_role:d,_line:d})}Xe(i,t,a)}function Ti(e,t,i){e.matchId&&k.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Ln(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(c=>!c.used)),l=t.selected.map(s=>{const c=(t.homeTeam[s._role]||[]).find(o=>o.cardId===s.cardId)||s,f=a&&["GK","DEF"].includes(s._role);return{...c,_line:s._role,...f?{note_a:Math.max(1,Number(c.note_a)||0)}:{}}}),d=Ot(l,t.modifiers.home);t.pendingAttack={...d,players:[...l],side:"home"},t.selected.forEach(s=>{const c=(t.homeTeam[s._role]||[]).find(f=>f.cardId===s.cardId);c&&(c.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Xe(e,t,i),setTimeout(()=>Cn(e,t,i),1200)}function In(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const a=t.selected.map(c=>({...(t.homeTeam[c._role]||[]).find(o=>o.cardId===c.cardId)||c,_line:c._role})),l=Ht(a,t.modifiers.home);t.selected.forEach(c=>{const f=(t.homeTeam[c._role]||[]).find(o=>o.cardId===c.cardId);f&&(f.used=!0)});const d=Ut(t.pendingAttack.total,l.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:Pe(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homePlayers:t.selected.map(c=>{const f=(t.homeTeam[c._role]||[]).find(o=>o.cardId===c.cardId)||c;return{name:f.name,note:(f._line==="GK"?Number(f.note_g)||0:f._line==="MIL"?Number(f.note_m)||0:Number(f.note_d)||0)+(f.boost||0),portrait:Pe(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo}}),homeTotal:l.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(d.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${l.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Xe(e,t,i),ei(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${l.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,zt(e,t,i,"home-attack")}function Mn(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(f=>f.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(f=>!e.aiUsedSubIds.includes(f.cardId));if(!i.length)return;const a=t[Math.floor(Math.random()*t.length)],l=i.find(f=>f.job===a.job)||i[0],d={...l,used:!1,_line:a._line,_col:a._col},s=e.aiTeam[a._line],c=s.findIndex(f=>f.cardId===a.cardId);c!==-1&&(s[c]=d),e.aiUsedSubIds.push(l.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${l.firstname} ${l.name} remplace ${a.firstname} ${a.name}`,type:"info"})}function jn(e){var a;if(!((a=e.aiGcCards)!=null&&a.length))return;const t=e.aiGcCards.filter(l=>!e.aiUsedGc.includes(l.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Re[i.gc_type],i.gc_type){case"Boost+2":{const l=Object.values(e.aiTeam).flat().filter(d=>!d.used);if(l.length){const d=l[Math.floor(Math.random()*l.length)];d.boost=(d.boost||0)+2}break}case"Boost+3":{const l=Object.values(e.aiTeam).flat().filter(d=>!d.used);if(l.length){const d=l[Math.floor(Math.random()*l.length)];d.boost=(d.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function xi(e,t,i){Ti(t,i,null),Mn(t),jn(t);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],l=to(a,"attack",t.difficulty);if(!l.length){Xt(e,t,i);return}const d=Ot(l,t.modifiers.ai);t.pendingAttack={...d,players:l,side:"ai"},l.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${l.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),f=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!f){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:l.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,Xe(e,t,i),ei(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}t.phase="defense",Xe(e,t,i)}function Cn(e,t,i){var o,r;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],l=to(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(m=>(t.aiTeam[m]||[]).filter(b=>!b.used)).length){t.homeScore++;const b={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(u=>({name:u.name,note:je(u,u._line||u.job),portrait:Pe(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(b),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),ei(b.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}const s=l.length>0?Ht(l,t.modifiers.ai).total:0;l.forEach(m=>{m.used=!0});const c=Ut(t.pendingAttack.total,s,t.modifiers.ai),f={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(m=>({name:m.name,note:m._line==="MIL"?m.note_m:m.note_a,portrait:Pe(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),aiPlayers:l.map(m=>({name:m.name,note:m._line==="GK"?m.note_g:m._line==="MIL"?m.note_m:m.note_d,portrait:Pe(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(c.shielded)f.text="🛡️ Bouclier IA !",t.log.push(f);else if(c.goal){t.homeScore++,f.isGoal=!0,f.homeScored=!0,f.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),ei(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}else f.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(f);t.modifiers.ai={},t.pendingAttack=null,zt(e,t,i,"ai-attack")}function zt(e,t,i,a){if(t.round++,ho(t)){Ft(e,t,i);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(c=>!c.used).length){Xt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(c=>!c.used).length){Xt(e,t,i);return}setTimeout(()=>xi(e,t,i),100);return}t.phase="attack",Xe(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Xt(e,t,i);return}t.phase="ai-attack",Xe(e,t,i),setTimeout(()=>xi(e,t,i),800)}}function ho(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(l=>!l.used)),i=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(l=>!l.used));return!t&&!i}function Xt(e,t,i){ho(t)?Ft(e,t,i):(t.phase="attack",Xe(e,t,i))}function qn(e,t,i){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const l=Pe(e),d=Pe(t),s=Mt[e.job]||"#555",c=Mt[t.job]||"#555",f=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${s};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${l?`<img src="${l}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${f}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${c};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${o}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(a);let r=!1;const m=()=>{r||(r=!0,a.remove(),i())};a.addEventListener("click",m),setTimeout(m,2e3)}function Ct(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function li(e,t,i,a=null,l=null){var u,T;if(t.phase!=="attack"){Ct("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Ct(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([n,p])=>(p||[]).filter(A=>A.used).map(A=>({...A,_line:A._line||n}))),s=t.homeSubs.filter(n=>!t.usedSubIds.includes(n.cardId));if(!d.length){Ct("Aucun joueur utilisé à remplacer");return}if(!s.length){Ct("Aucun remplaçant disponible");return}let c=Math.max(0,d.findIndex(n=>n.cardId===l));const f=((u=d[c])==null?void 0:u._line)||((T=d[c])==null?void 0:T.job);let o=a?Math.max(0,s.findIndex(n=>n.cardId===a)):Math.max(0,s.findIndex(n=>n.job===f)),r=!1;const m=document.createElement("div");m.id="sub-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var C,F,M,Y,de,re;const n=d[c],p=s[o],A=Math.min(130,Math.round((window.innerWidth-90)/2)),I=Math.round(A*1.35),q=P=>`background:rgba(255,255,255,0.12);border:none;color:${P?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${P?"default":"pointer"};flex-shrink:0`;m.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${q(o===0)}" ${o===0?"disabled":""}>▲</button>
        <div>${p?Ye({...p,used:!1,boost:0},A,I):"<div>—</div>"}</div>
        <button id="in-down" style="${q(o>=s.length-1)}" ${o>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${o+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${q(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${n?Ye({...n,used:!1,boost:0},A,I):"<div>—</div>"}</div>
        <button id="out-down" style="${q(c>=d.length-1)}" ${c>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(C=m.querySelector("#sub-close"))==null||C.addEventListener("click",()=>m.remove()),(F=m.querySelector("#out-up"))==null||F.addEventListener("click",()=>{c>0&&(c--,b())}),(M=m.querySelector("#out-down"))==null||M.addEventListener("click",()=>{c<d.length-1&&(c++,b())}),(Y=m.querySelector("#in-up"))==null||Y.addEventListener("click",()=>{o>0&&(o--,b())}),(de=m.querySelector("#in-down"))==null||de.addEventListener("click",()=>{o<s.length-1&&(o++,b())});const R=(P,X,U,N)=>{const ne=m.querySelector("#"+P);if(!ne)return;let pe=0;ne.addEventListener("touchstart",ye=>{pe=ye.touches[0].clientY},{passive:!0}),ne.addEventListener("touchend",ye=>{const Le=ye.changedTouches[0].clientY-pe;if(Math.abs(Le)<30)return;const we=X();Le<0&&we<N-1?(U(we+1),b()):Le>0&&we>0&&(U(we-1),b())},{passive:!0})};R("in-panel",()=>o,P=>o=P,s.length),R("out-panel",()=>c,P=>c=P,d.length),(re=m.querySelector("#sub-confirm"))==null||re.addEventListener("click",P=>{if(P.preventDefault(),P.stopPropagation(),r)return;r=!0;const X=d[c],U=s[o];if(!X||!U)return;let N=null,ne=-1;for(const[ye,Le]of Object.entries(t.homeTeam)){const we=(Le||[]).findIndex(ve=>ve.cardId===X.cardId);if(we!==-1){N=ye,ne=we;break}}if(ne===-1||!N){Ct("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),m.remove();return}const pe={...U,_line:N,_col:X._col||0,used:!1,boost:0};t.homeTeam[N].splice(ne,1,pe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(U.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:X.name,firstname:X.firstname,note:je(X,N),portrait:Pe(X),job:X.job,country_code:X.country_code,rarity:X.rarity,clubName:X.clubName,clubLogo:X.clubLogo},inPlayer:{name:U.name,firstname:U.firstname,note:je(U,N),portrait:Pe(U),job:U.job,country_code:U.country_code,rarity:U.rarity,clubName:U.clubName,clubLogo:U.clubLogo},text:`🔄 ${U.firstname} ${U.name} remplace ${X.firstname} ${X.name}`}),m.remove(),qn(X,U,()=>Xe(e,t,i))})}document.body.appendChild(m),b()}function Bn(e,t,i,a,l){var T,n;const d=(a.gcDefs||[]).find(p=>p.name===t),s=Re[t]||{icon:"⚡",desc:"Carte spéciale."},c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",f={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",o=(d==null?void 0:d.name)||t,r=(d==null?void 0:d.effect)||s.desc,m=d!=null&&d.image_url?`/icons/${d.image_url}`:null,b=s.icon||"⚡",u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",u.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${f};background:${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${f}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${o.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${o}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${m?`<img src="${m}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${b}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${r}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(u),(T=u.querySelector("#gc-back"))==null||T.addEventListener("click",()=>u.remove()),(n=u.querySelector("#gc-use"))==null||n.addEventListener("click",()=>{u.remove(),Dn(e,t,i,a,l)})}function Wt(e,t,i,a,l,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let c=[];function f(){var o,r;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${c.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(m=>{const b=m._line||m.job||"MIL",u={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b]||"#555",T=je(m,b)+(m.boost||0),n=c.find(p=>p.cardId===m.cardId);return`<div class="gc-pick-item" data-cid="${m.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${n?"#FFD700":"rgba(255,255,255,0.25)"};background:${u};overflow:hidden;cursor:pointer;flex-shrink:0;${m.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${m.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${T}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${b}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${c.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${c.length}/${t})
      </button>
    </div>`,(o=s.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.cid,u=e.find(n=>n.cardId===b);if(!u)return;const T=c.findIndex(n=>n.cardId===b);T>-1?c.splice(T,1):c.length<t&&c.push(u),f()})}),(r=s.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{s.remove(),d(c)})}f(),document.body.appendChild(s)}const Fn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},a,l,d)=>{const s=Object.entries(a.homeTeam).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,f])=>f.filter(o=>!o.used).map(o=>({...o,_line:c})));return s.length?(Wt(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,l,a,c=>{c.forEach(f=>{const o=(a.homeTeam[f._line]||[]).find(r=>r.cardId===f.cardId);o&&(o.boost=(o.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),Xe(l,a,d)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Xe(l,a,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:a="ai"},l,d,s)=>{const c=a==="home"?l.homeTeam:l.aiTeam,f=a==="ai"?"adverse":"allié",o=Object.entries(c).filter(([r])=>!i.length||i.includes(r)).flatMap(([r,m])=>m.filter(b=>!b.used).map(b=>({...b,_line:r})));return o.length?(Wt(o,t,`Choisir ${t} joueur(s) ${f}(s) à débuffer (-${e})`,d,l,r=>{r.forEach(m=>{const u=((a==="home"?l.homeTeam:l.aiTeam)[m._line]||[]).find(T=>T.cardId===m.cardId);u&&(u.boost=(u.boost||0)-e,l.log.push({text:`🎯 -${e} sur ${u.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Xe(d,l,s)}),!0):(l.log.push({text:`🎯 Aucun joueur ${f} disponible`,type:"info"}),Xe(d,l,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},a,l,d)=>{const s=i==="home"?a.homeTeam:a.aiTeam,c=i==="ai"?"adverse":"allié",f=Object.entries(s).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,r])=>r.filter(m=>!m.used).map(m=>({...m,_line:o})));return f.length?(Wt(f,e,`Choisir ${e} joueur(s) ${c}(s) à exclure`,l,a,o=>{o.forEach(r=>{const b=((i==="home"?a.homeTeam:a.aiTeam)[r._line]||[]).find(u=>u.cardId===r.cardId);b&&(b.used=!0,a.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Xe(l,a,d)}),!0):(a.log.push({text:`❌ Aucun joueur ${c} à exclure`,type:"info"}),Xe(l,a,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,a,l)=>{const d=Object.entries(i.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,c])=>c.filter(f=>f.used).map(f=>({...f,_line:s})));return d.length?(Wt(d,e,`Choisir ${e} joueur(s) à ressusciter`,a,i,s=>{s.forEach(c=>{const f=(i.homeTeam[c._line]||[]).find(o=>o.cardId===c.cardId);f&&(f.used=!1,i.log.push({text:`💫 ${f.name} ressuscité !`,type:"info"}))}),Xe(a,i,l)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Xe(a,i,l),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Dn(e,t,i,a,l){a.usedGc.push(e);const d=a.gcDefs||[],s=d.find(f=>f.name===t)||d.find(f=>{var o;return((o=f.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let c=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const f=Fn[s.effect_type];f?f(s.effect_params||{},a,i,l)||(c=!0):(l.toast(`Effet "${s.effect_type}" non implémenté`,"error"),c=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const f=Object.entries(a.homeTeam).flatMap(([o,r])=>(r||[]).filter(m=>m.used).map(m=>({...m,_line:o})));f.length?(f[0].used=!1,a.log.push({text:`💫 ${f[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const f=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(o=>!o.used);if(f.length){const o=f.sort((r,m)=>je(m,"ATT")-je(r,"ATT"))[0];o.used=!0,a.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}c=!0}k.from("cards").delete().eq("id",e).then(()=>{}),c&&Xe(i,a,l)}function Gn(e,t,i){const a=Object.values(t.homeTeam).flat().filter(l=>!l.used);if(!a.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(l=>`
        <div class="player-boost-opt" data-card-id="${l.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Mt[l.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${je(l,l._line||l.job)}</div>
          <div style="flex:1"><b>${l.firstname} ${l.name}</b><div style="font-size:11px;color:#888">${l._line||l.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const c=(t.homeTeam[s]||[]).find(f=>f.cardId===d);if(c){c.boost=(c.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${c.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Xe(e,t,i)})})}function ei(e,t,i,a,l){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(o,r)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${r%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][r%8]}
    </div>`).join("");d.innerHTML=`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${Mt[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let c=!1;const f=()=>{c||(c=!0,d.remove(),setTimeout(()=>l(),50))};d.addEventListener("click",f),setTimeout(f,3500)}async function Ft(e,t,i){var r,m;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=i,l=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,s=l?"victoire":d?"nul":"defaite",c=Uo(t.mode,s);t.matchId&&await k.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:l?a.profile.id:null,home_credits_reward:c,played_at:new Date().toISOString()}).eq("id",t.matchId);const f={credits:(a.profile.credits||0)+c,matches_played:(a.profile.matches_played||0)+1};l?f.wins=(a.profile.wins||0)+1:d?f.draws=(a.profile.draws||0)+1:f.losses=(a.profile.losses||0)+1,await k.from("users").update(f).eq("id",a.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${l?"🏆":d?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${l?"Victoire !":d?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${c.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),We(e),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",()=>{o.remove(),We(e),i.navigate("match",{matchMode:t.mode})})}function Pn(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ut(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function vo(e,t){var i,a;try{const l=(a=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:a.id;try{(k.getChannels?k.getChannels():[]).forEach(s=>{const c=s.topic||"";(c.includes("matchmaking")||c.includes("pvp-match")||c.includes("friend-invite"))&&k.removeChannel(s)})}catch(d){console.warn("[Random] cleanup canaux:",d)}l&&await k.rpc("cancel_matchmaking",{p_user_id:l}).catch(()=>{})}catch{}await ai(e,t,"random",({deckId:l,formation:d,starters:s,subsRaw:c,gcCardsEnriched:f,gcDefs:o,stadiumDef:r})=>{const m=b=>Nn(e,t,l,d,s,c,b,o||[],r);if(!f.length){m([]);return}ri(e,f,m)})}async function Nn(e,t,i,a,l,d,s=[],c=[],f=null){var q;const{state:o,navigate:r,toast:m}=t;let b=!1,u=null;et(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const T=async(R=!0)=>{b=!0,u&&(k.removeChannel(u),u=null),R&&await k.rpc("cancel_matchmaking",{p_user_id:o.profile.id}).catch(()=>{})};(q=document.getElementById("mm-cancel"))==null||q.addEventListener("click",async()=>{try{await T(!0)}catch{}We(e),r("home")});const n=async(R,C,F)=>{if(b)return;b=!0,u&&(k.removeChannel(u),u=null);const M=document.getElementById("mm-status");M&&(M.textContent="Adversaire trouvé !"),await new Promise(Y=>setTimeout(Y,600)),e.isConnected&&wo(e,t,R,F,s,c)},{data:p,error:A}=await k.rpc("try_matchmake",{p_user_id:o.profile.id,p_deck_id:i});if(A||!(p!=null&&p.success)){m("Erreur de matchmaking","error"),We(e),r("home");return}if(p.matched){n(p.match_id,p.opponent_id,!1);return}const I=document.getElementById("mm-status");I&&(I.textContent="En attente d'un autre joueur..."),u=k.channel("matchmaking-"+o.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${o.profile.id}`},R=>{const C=R.new;C.status==="matched"&&C.match_id&&n(C.match_id,C.matched_with,!0)}).subscribe()}async function Rn(e,t,i){const{state:a,navigate:l,toast:d}=t;try{(k.getChannels?k.getChannels():[]).forEach(o=>{const r=o.topic||"";(r.includes("matchmaking")||r.includes("pvp-match")||r.includes("friend-invite"))&&k.removeChannel(o)})}catch{}const{data:s}=await k.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!s){d("Match introuvable","error"),l("home");return}if(s.status==="finished"){d("Ce match est terminé","info"),l("home");return}const c=s.home_id===a.profile.id;wo(e,t,i,c,[],[])}async function wo(e,t,i,a,l=[],d=[]){const{state:s,navigate:c,toast:f}=t,o=a?"p1":"p2",r=a?"p2":"p1",m=(l||[]).map(j=>j.id),b=(l||[]).map(j=>({id:j.id,gc_type:j.gc_type,_gcDef:j._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:u}=await k.from("matches").select("*").eq("id",i).single();if(!u){f("Match introuvable","error"),c("home");return}async function T(){const[{data:j},{data:D},{data:w},{data:E}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:u.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:u.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",u.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",u.away_id).single()]),g=S=>{const L=Number(S.evolution_bonus)||0;return{cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:(Number(S.note_g)||0)+(S.job==="GK"||S.job2==="GK"&&Number(S.note_g)>0?L:0),note_d:(Number(S.note_d)||0)+(S.job==="DEF"||S.job2==="DEF"&&Number(S.note_d)>0?L:0),note_m:(Number(S.note_m)||0)+(S.job==="MIL"||S.job2==="MIL"&&Number(S.note_m)>0?L:0),note_a:(Number(S.note_a)||0)+(S.job==="ATT"||S.job2==="ATT"&&Number(S.note_a)>0?L:0),evolution_bonus:L,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},x=((j==null?void 0:j.starters)||[]).map(S=>g(S)),y=((D==null?void 0:D.starters)||[]).map(S=>g(S)),h=(j==null?void 0:j.formation)||"4-4-2",v=(D==null?void 0:D.formation)||"4-4-2";let _=yt(x,h),z=yt(y,v);const $=((j==null?void 0:j.subs)||[]).map(S=>g(S));return stadiumDef&&a&&(_=jt(_,stadiumDef),Nt($,stadiumDef)),{p1Team:_,p2Team:z,p1Subs:$,p2Subs:((D==null?void 0:D.subs)||[]).map(S=>g(S)),p1Formation:h,p2Formation:v,p1Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 1",p2Name:(E==null?void 0:E.club_name)||(E==null?void 0:E.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?m:[],gc_p2:a?[]:m,gcCardsFull_p1:a?b:[],gcCardsFull_p2:a?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let n=u.game_state&&Object.keys(u.game_state).length?u.game_state:null;if(!n)if(a){n=await T();const{data:j}=await k.from("matches").select("game_state").eq("id",i).single();!(j!=null&&j.game_state)||!Object.keys(j.game_state).length?await k.from("matches").update({game_state:n,turn_user_id:u.home_id}).eq("id",i):n=j.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let j=0;j<30&&!n;j++){await new Promise(w=>setTimeout(w,400));const{data:D}=await k.from("matches").select("game_state").eq("id",i).single();D!=null&&D.game_state&&Object.keys(D.game_state).length&&(n=D.game_state)}if(!n){f("Erreur de synchronisation","error"),c("home");return}n.gc_p2=m,n.gcCardsFull_p2=b,await k.from("matches").update({game_state:n}).eq("id",i)}let p=!1,A=null,I=!1;const q=new Set,R=new Set;function C(j){var _,z;try{k.removeChannel(F)}catch{}const D=n[o+"Score"]||0,w=n[r+"Score"]||0;let E,g;j.winner_id?(E=j.winner_id===s.profile.id,g=!1):j.forfeit?(E=D>w,g=!1):(g=D===w,E=D>w),(_=document.getElementById("pvp-end-overlay"))==null||_.remove();const x=document.createElement("div");x.id="pvp-end-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const y=g?"🤝":E?"🏆":"😞",h=g?"MATCH NUL":E?"VICTOIRE !":"DÉFAITE",v=g?"#fff":E?"#FFD700":"#ff6b6b";x.innerHTML=`
      <div style="font-size:64px">${y}</div>
      <div style="font-size:26px;font-weight:900;color:${v}">${h}</div>
      <div style="font-size:18px">${n[o+"Name"]} ${D} – ${w} ${n[r+"Name"]}</div>
      ${j.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${E?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(x),(z=x.querySelector("#pvp-end-home"))==null||z.addEventListener("click",()=>{x.remove(),We(e),c("home")})}const F=k.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},j=>{const D=j.new;try{if(D.status==="finished"||D.forfeit){if(p)return;p=!0,A&&(clearInterval(A),A=null),D.game_state&&(n=D.game_state),C(D);return}if(D.game_state){const w=n;n=D.game_state;const E=n._lastGC;if(E&&E.seq&&!R.has(E.seq)&&(R.add(E.seq),E.by!==o)){we(E.type,E.by,()=>N());return}const g=w[o+"Score"]||0,x=w[r+"Score"]||0,y=n[o+"Score"]||0,h=n[r+"Score"]||0,v=y>g,_=h>x;if((v||_)&&!q.has(n.round)){q.add(n.round);const z=[...n.log||[]].reverse().find(S=>S.isGoal),$=((z==null?void 0:z.homePlayers)||[]).map(S=>({name:S.name,note:S.note,portrait:S.portrait,job:S.job}));Le($,y,h,v,()=>N());return}N()}}catch(w){console.error("[PvP] crash:",w)}}).subscribe();async function M(j){Object.assign(n,j),n.lastActionAt=new Date().toISOString();const{error:D}=await k.from("matches").update({game_state:n}).eq("id",i);D&&f("Erreur de synchronisation","error");try{N()}catch(w){console.error("[PvP] renderPvpScreen crash:",w)}}async function Y(){if(p)return;p=!0,A&&(clearInterval(A),A=null);const j=a?u.away_id:u.home_id,D=a?"p2":"p1",w=a?"p1":"p2",E={...n,[D+"Score"]:3,[w+"Score"]:0,phase:"finished"};try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:j,home_score:E.p1Score||0,away_score:E.p2Score||0,game_state:E}).eq("id",i)}catch{}try{k.removeChannel(F)}catch{}setTimeout(()=>{We(e),c("home")},800)}const de={BOOST_STAT:({value:j=1,count:D=1,roles:w=[]},E,g)=>{const x=E[o+"Team"],y=Object.entries(x).filter(([h])=>!w.length||w.includes(h)).flatMap(([h,v])=>v.filter(_=>!_.used).map(_=>({..._,_line:h})));if(!y.length){E.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),g(E);return}re(y,D,`Choisir ${D} joueur(s) à booster (+${j})`,h=>{h.forEach(v=>{const _=(x[v._line]||[]).find(z=>z.cardId===v.cardId);_&&(_.boost=(_.boost||0)+j,E.log.push({text:`⚡ +${j} sur ${_.name}`,type:"info"}))}),E[o+"Team"]=x,g(E)})},DEBUFF_STAT:({value:j=1,count:D=1,roles:w=[],target:E="ai"},g,x)=>{const y=E==="home"?o:r,h=g[y+"Team"],v=E==="home"?"allié":"adverse",_=Object.entries(h).filter(([z])=>!w.length||w.includes(z)).flatMap(([z,$])=>$.map(S=>({...S,_line:z})));if(!_.length){g.log.push({text:`🎯 Aucun joueur ${v}`,type:"info"}),x(g);return}re(_,D,`Choisir ${D} joueur(s) ${v}(s) (-${j})`,z=>{z.forEach($=>{const S=(h[$._line]||[]).find(L=>L.cardId===$.cardId);S&&(S.boost=(S.boost||0)-j,g.log.push({text:`🎯 -${j} sur ${S.name}`,type:"info"}))}),g[y+"Team"]=h,x(g)})},GRAY_PLAYER:({count:j=1,roles:D=[],target:w="ai"},E,g)=>{const x=w==="home"?o:r,y=E[x+"Team"],h=w==="home"?"allié":"adverse",v=Object.entries(y).filter(([_])=>!D.length||D.includes(_)).flatMap(([_,z])=>z.filter($=>!$.used).map($=>({...$,_line:_})));if(!v.length){E.log.push({text:`❌ Aucun joueur ${h}`,type:"info"}),g(E);return}re(v,j,`Choisir ${j} joueur(s) ${h}(s) à exclure`,_=>{const z="usedCardIds_"+x,$=new Set(E[z]||[]);_.forEach(S=>{const L=(y[S._line]||[]).find(B=>B.cardId===S.cardId);L&&(L.used=!0,$.add(S.cardId),E.log.push({text:`❌ ${L.name} exclu !`,type:"info"}))}),E[z]=[...$],E[x+"Team"]=y,g(E)})},REVIVE_PLAYER:({count:j=1,roles:D=[]},w,E)=>{const g=w[o+"Team"],x=Object.entries(g).filter(([y])=>!D.length||D.includes(y)).flatMap(([y,h])=>h.filter(v=>v.used).map(v=>({...v,_line:y})));if(!x.length){w.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),E(w);return}re(x,j,`Choisir ${j} joueur(s) à ressusciter`,y=>{y.forEach(h=>{const v=(g[h._line]||[]).find(_=>_.cardId===h.cardId);v&&(v.used=!1,w.log.push({text:`💫 ${v.name} ressuscité !`,type:"info"}))}),w[o+"Team"]=g,E(w)})},REMOVE_GOAL:({},j,D)=>{const w=r+"Score";j[w]>0?(j[w]--,j.log.push({text:"🚫 Dernier but annulé !",type:"info"})):j.log.push({text:"🚫 Aucun but à annuler",type:"info"}),D(j)},ADD_GOAL_DRAW:({},j,D)=>{j[o+"Score"]===j[r+"Score"]?(j[o+"Score"]++,j.log.push({text:"🎯 But bonus !",type:"info"})):j.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),D(j)},ADD_SUB:({value:j=1},D,w)=>{D.maxSubs=(D.maxSubs||3)+j,D.log.push({text:`🔄 +${j} remplacement(s)`,type:"info"}),w(D)},CUSTOM:({},j,D)=>D(j)};function re(j,D,w,E){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let x=[];function y(){var v,_;const h=j.map(z=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",S=je(z,z._line)+(z.boost||0),B=x.find(O=>O.cardId===z.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=z.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${B};background:${$};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${S}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${z._line}</div>
        </div>`}).join("");g.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${w}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x.length}/${D}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${h}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${x.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${x.length}/${D})
          </button>
        </div>`,(v=g.querySelector("#pp-close"))==null||v.addEventListener("click",()=>g.remove()),g.querySelectorAll(".pp-item").forEach(z=>{z.addEventListener("click",()=>{const $=z.dataset.cid,S=j.find(B=>B.cardId===$),L=x.findIndex(B=>B.cardId===$);S&&(L>-1?x.splice(L,1):x.length<D&&x.push(S),y())})}),(_=g.querySelector("#pp-confirm"))==null||_.addEventListener("click",()=>{g.remove(),E(x)})}y(),document.body.appendChild(g)}async function P(j,D){const E=(n["gcCardsFull_"+o]||[]).find(h=>h.id===j),g=(E==null?void 0:E._gcDef)||(n.gcDefs||[]).find(h=>{var v;return h.name===D||((v=h.name)==null?void 0:v.toLowerCase().trim())===(D==null?void 0:D.toLowerCase().trim())}),x=[...n["usedGc_"+o]||[],j],y={type:D,by:o,seq:(n._gcAnimSeq||0)+1};R.add(y.seq),we(D,o,async()=>{if(g!=null&&g.effect_type&&g.effect_type!=="CUSTOM"){const v=de[g.effect_type];if(v){const _={...n};v(g.effect_params||{},_,async z=>{z["usedGc_"+o]=x,z._lastGC=y,z._gcAnimSeq=y.seq,await M(z)});return}}const h={...n};switch(D){case"Remplacement+":h.maxSubs=(h.maxSubs||3)+1,h.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const v=r+"Score";h[v]>0&&(h[v]--,h.log.push({text:"🚫 But annulé",type:"info"}));break}}h["usedGc_"+o]=x,h._lastGC=y,h._gcAnimSeq=y.seq,await M(h)})}function X(j,D){const w="usedCardIds_"+j,E=new Set(n[w]||[]);D.forEach(g=>E.add(g)),n[w]=[...E]}function U(){for(const j of["p1","p2"]){const D=new Set(n["usedCardIds_"+j]||[]),w=n[j+"Team"];if(w)for(const E of["GK","DEF","MIL","ATT"])(w[E]||[]).forEach(g=>{g.used=D.has(g.cardId)})}}function N(){var Ke,Je,Ze,Qe,nt,gt;if(n.phase==="reveal")return ne();if(n.phase==="midfield")return ye();if(n.phase==="finished")return Se();const j=n[o+"Team"],D=n[r+"Team"];U();const w=n[o+"Score"],E=n[r+"Score"],g=n[o+"Name"],x=n[r+"Name"],y=n.phase===o+"-attack",h=n.phase===o+"-defense",v=Array.isArray(n["selected_"+o])?n["selected_"+o]:[],_=v.map(le=>le.cardId),z=window.innerWidth>=700,$=n[o+"Subs"]||[],S=n["usedSubIds_"+o]||[],L=$.filter(le=>!S.includes(le.cardId)),B=n["gcCardsFull_"+o]||[],G=n["usedGc_"+o]||[],O=B.filter(le=>!G.includes(le.id)),H=n.boostOwner===o&&!n.boostUsed,Q=!["GK","DEF","MIL","ATT"].some(le=>(D[le]||[]).some(Ee=>!Ee.used)),V=[...j.MIL||[],...j.ATT||[]].filter(le=>!le.used),ie=y&&Q&&V.length===0?[...j.GK||[],...j.DEF||[]].filter(le=>!le.used).map(le=>le.cardId):[];function ae(le,Ee,te){var pt,ht;const ue=le._gcDef,ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ue==null?void 0:ue.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ce={purple:"#b06ce0",light_blue:"#00d4ef"}[ue==null?void 0:ue.color]||"#b06ce0",Be=(ue==null?void 0:ue.name)||le.gc_type,Te=(ue==null?void 0:ue.effect)||((pt=Re[le.gc_type])==null?void 0:pt.desc)||"",tt=ue!=null&&ue.image_url?`/icons/${ue.image_url}`:null,it=((ht=Re[le.gc_type])==null?void 0:ht.icon)||"⚡",rt=Math.round(te*.22),st=Math.round(te*.22),ct=te-rt-st,kt=Be.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${le.id}" data-gc-type="${le.gc_type}"
        style="box-sizing:border-box;width:${Ee}px;height:${te}px;border-radius:10px;border:2px solid ${ce};background:${ee};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${rt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Ee-6}px">${Be}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ct}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${tt?`<img src="${tt}" style="max-width:${Ee-10}px;max-height:${ct-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ct*.55)}px">${it}</span>`}
        </div>
        <div style="height:${st}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Te.slice(0,38)}</span>
        </div>
      </div>`}function fe(le,Ee){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${le}px;height:${Ee}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ee*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Ee*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Ee*.09)}px;color:#000;font-weight:900">+${n.boostValue}</div>
      </div>`}const me=(le,Ee)=>Ee?fe(130,175):ae(le,130,175),$e=(le,Ee)=>Ee?fe(68,95):ae(le,68,95),ke=z?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",qe=y?he(o)?`<button id="pvp-action" style="${ke};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${v.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${ke};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:h?`<button id="pvp-action" style="${ke};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${v.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${x}</div>`,Ce=y&&!he(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':y||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${v.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${z?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${L.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':L.map(le=>`<div class="pvp-sub-btn" data-sub-id="${le.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(le,z?76:44,z?100:58)}</div>`).join("")}
    </div>`,Fe=y?"attack":h?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(j,n[o+"Formation"],Fe,_,300,300,ie)}
      </div>
    </div>`;function De(le){if(le.type==="duel"&&(le.homeTotal!=null||le.aiTotal!=null)){const Ee=(le.homeTotal||0)>=(le.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(le.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(le.homePlayers||[]).map(te=>dt(te)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${Ee?20:14}px;font-weight:900;color:${Ee?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${le.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${Ee?14:20}px;font-weight:900;color:${Ee?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${le.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(le.aiPlayers||[]).map(te=>dt(te)).join("")}
            </div>
          </div>
          ${le.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${le.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${le.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${le.type==="goal"?700:400};padding:3px 2px">${le.text||""}</div>`}const Ve=(()=>{var Ee,te;if(h&&((Ee=n.pendingAttack)!=null&&Ee.players)){const ue=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${x} ATTAQUE — Défendez !</div>
          ${ot((ue.players||[]).map(ee=>({...ee,used:!1})),"#ff6b6b",ue.total)}
        </div>`}if(y&&((te=n.pendingAttack)!=null&&te.players)){const ue=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ue.players||[]).map(ee=>({...ee,used:!1})),"#00ff88",ue.total)}
        </div>`}const le=(n.log||[]).slice(-1)[0];return le?'<div style="padding:2px 4px">'+De(le)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ne=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${w} – ${E}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(n.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",z?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${He}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${qe}${Ce}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${O.map(le=>me(le,!1)).join("")}
            ${H?me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(j,n[o+"Formation"],Fe,_,300,300,ie)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${O.map(le=>$e(le,!1)).join("")}
            ${H?$e(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${y&&L.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${y&&L.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${y&&L.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${y&&L.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${L.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(n["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(n["usedSubIds_"+o]||[]).length}/${n.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${qe}${Ce}</div>
        </div>
      </div>`;function Ue(){const le=e.querySelector(".match-screen");if(!le)return;const Ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);le.style.height=Ee+"px",le.style.minHeight=Ee+"px",le.style.maxHeight=Ee+"px",le.style.overflow="hidden";const te=e.querySelector("#mobile-action-bar"),ue=e.querySelector("#mobile-play-area");te&&ue&&(ue.style.paddingBottom=te.offsetHeight+"px")}if(Ue(),setTimeout(Ue,120),setTimeout(Ue,400),I||(I=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ue),window.visualViewport.addEventListener("scroll",Ue)),window.addEventListener("resize",Ue)),function(){const Ee=e.querySelector(".terrain-wrapper svg");Ee&&(Ee.removeAttribute("width"),Ee.removeAttribute("height"),Ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Ee.setAttribute("viewBox","-26 -26 352 352"),Ee.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(le=>{le.addEventListener("click",()=>{if(!y&&!h)return;const Ee=le.dataset.cardId,te=le.dataset.role,ue=(j[te]||[]).find(Te=>Te.cardId===Ee);if(!ue||ue.used)return;const ee=ie.includes(Ee);if(y&&!["MIL","ATT"].includes(te)&&!ee)return;Array.isArray(n["selected_"+o])||(n["selected_"+o]=[]);const ce=n["selected_"+o],Be=ce.findIndex(Te=>Te.cardId===Ee);Be>-1?ce.splice(Be,1):ce.length<3&&ce.push({...ue,_role:te}),N()})}),e.querySelectorAll(".match-used-hit").forEach(le=>{le.addEventListener("click",()=>Ae(le.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(le=>{le.addEventListener("click",()=>Ae())}),(Ke=e.querySelector("#pvp-sub-open"))==null||Ke.addEventListener("click",()=>Ae()),e.querySelectorAll(".pvp-gc-mini").forEach(le=>{le.addEventListener("click",()=>ve(le.dataset.gcId,le.dataset.gcType))}),(Je=e.querySelector("#pvp-boost-card"))==null||Je.addEventListener("click",()=>_e()),(Ze=e.querySelector("#pvp-action"))==null||Ze.addEventListener("click",le=>{y?le.currentTarget.dataset.pass==="1"||!he(o)?oe():ge():h&&W()}),(Qe=e.querySelector("#pvp-quit"))==null||Qe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Y()}),(nt=e.querySelector("#pvp-view-opp"))==null||nt.addEventListener("click",()=>xe()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>J()),A&&(clearInterval(A),A=null),(y||h)&&!p){let le=30,Ee=!1;const te=()=>document.getElementById("pvp-timer"),ue=()=>{te()&&(te().textContent=le+"s",te().style.color=Ee?"#ff4444":"#fff")};ue(),A=setInterval(()=>{le--,le<0?Ee?(clearInterval(A),A=null,y&&!he(o)?oe():Y()):(Ee=!0,le=15,ue()):ue()},1e3)}}function ne(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${n[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await M({phase:"midfield"})},5e3)}let pe=!1;function ye(){if(pe)return;const j=n[o+"Team"].MIL||[],D=n[r+"Team"].MIL||[];function w(O){return O.reduce((H,Q)=>H+je(Q,"MIL"),0)}function E(O){let H=0;for(let Q=0;Q<O.length-1;Q++){const V=at(O[Q],O[Q+1]);V==="#00ff88"?H+=2:V==="#FFD700"&&(H+=1)}return H}const g=w(j)+E(j),x=w(D)+E(D),y=g>=x;function h(O,H,Q){return`<div id="duel-row-${Q}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${H}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${O.map((V,ie)=>{const ae=ie<O.length-1?at(V,O[ie+1]):null,fe=!ae||ae==="#ff3333"||ae==="#cc2222",me=ae==="#00ff88"?"+2":ae==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Q}" data-idx="${ie}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...V,note:je(V,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ie<O.length-1?`<div class="duel-link duel-link-${Q}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${fe?"rgba(255,255,255,0.12)":ae};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${fe?"none":`0 0 8px ${ae}`}">
              ${me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ae}">${me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Q}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${w(O)} + ${E(O)} liens = <b style="color:#fff">${w(O)+E(O)}</b>
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
      ${h(j,n[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${h(D,n[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const v=(O,H)=>e.querySelectorAll(O).forEach((Q,V)=>{setTimeout(()=>{Q.style.opacity="1",Q.style.transform="translateY(0) scale(1)"},H+V*90)});v(".duel-card-me",150),v(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((O,H)=>setTimeout(()=>{O.style.opacity="1"},H*70)),900),setTimeout(()=>{const O=e.querySelector("#pvp-vs");O&&(O.style.opacity="1",O.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(H=>H.style.opacity="1")},1250);function _(O,H,Q){const V=document.getElementById(O);if(!V)return;const ie=performance.now(),ae=fe=>{const me=Math.min(1,(fe-ie)/Q);V.textContent=Math.round(H*(1-Math.pow(1-me,3))),me<1?requestAnimationFrame(ae):V.textContent=H};requestAnimationFrame(ae)}setTimeout(()=>{_("pvp-score-me",g,800),_("pvp-score-opp",x,800)},1500);const z=n.p1Team.MIL||[],$=n.p2Team.MIL||[],S=w(z)+E(z),L=w($)+E($),B=S>=L?"p1":"p2";let G=n.boostValue;G==null&&(G=ni(),n.boostValue=G,n.boostOwner=B,n.boostUsed=!1),pe=!0,setTimeout(()=>{const O=e.querySelector("#duel-row-"+(y?"me":"opp")),H=e.querySelector("#duel-row-"+(y?"opp":"me")),Q=document.getElementById("pvp-score-me"),V=document.getElementById("pvp-score-opp"),ie=y?Q:V,ae=y?V:Q;ie&&(ie.style.fontSize="80px",ie.style.color=y?"#FFD700":"#ff6b6b",ie.style.animation="duelPulse .5s ease"+(y?",duelGlow 1.5s ease infinite .5s":"")),ae&&(ae.style.opacity="0.25"),setTimeout(()=>{O&&(O.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",O.style.zIndex="5"),setTimeout(()=>{const fe=document.getElementById("duel-shock");fe&&(fe.style.animation="shockwave .5s ease-out forwards"),H&&(H.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ke;const fe=document.getElementById("pvp-duel-finale");if(!fe)return;const me=n.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",$e=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;fe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(y?"⚽ "+n[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+n[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+me+$e,fe.style.transition="opacity .45s ease",fe.style.opacity="1",fe.style.pointerEvents="auto",(ke=document.getElementById("pvp-start-match"))==null||ke.addEventListener("click",async()=>{const qe=B;await M({phase:qe+"-attack",attacker:qe,round:1,boostValue:G,boostUsed:!1,boostOwner:qe})})},600)},700)},2800)}function Le(j,D,w,E,g){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const y=Array.from({length:10},(z,$)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${$%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][$%8]}</div>`).join(""),h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};x.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${y}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${E?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${D} – ${w}
      </div>
      ${j!=null&&j.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${j.map(z=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${h[z.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${z.portrait?`<img src="${z.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(z.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const _=()=>{v||(v=!0,x.remove(),setTimeout(()=>g(),50))};x.addEventListener("click",_),setTimeout(_,3500)}function we(j,D,w){var G,O;const E=(n.gcDefs||[]).find(H=>{var Q;return H.name===j||((Q=H.name)==null?void 0:Q.toLowerCase().trim())===(j==null?void 0:j.toLowerCase().trim())}),g={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[E==null?void 0:E.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[E==null?void 0:E.color]||"#b06ce0",y=(E==null?void 0:E.name)||j,h=(E==null?void 0:E.effect)||((G=Re[j])==null?void 0:G.desc)||"",v=E!=null&&E.image_url?`/icons/${E.image_url}`:null,_=((O=Re[j])==null?void 0:O.icon)||"⚡",$=D===o?"Vous":n[D+"Name"]||"Adversaire",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",S.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${x}66}50%{box-shadow:0 0 60px ${x}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${x};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${$} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${x};background:${g};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${y.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${y}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${v?`<img src="${v}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${_}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(S);let L=!1;const B=()=>{L||(L=!0,S.remove(),setTimeout(()=>w&&w(),50))};S.addEventListener("click",B),setTimeout(B,3e3)}function ve(j,D){var S,L,B,G;const E=(n["gcCardsFull_"+o]||[]).find(O=>O.id===j),g=E==null?void 0:E._gcDef,x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[g==null?void 0:g.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",y={purple:"#b06ce0",light_blue:"#00d4ef"}[g==null?void 0:g.color]||"#b06ce0",h=(g==null?void 0:g.name)||D,v=(g==null?void 0:g.effect)||((S=Re[D])==null?void 0:S.desc)||"Carte spéciale.",_=g!=null&&g.image_url?`/icons/${g.image_url}`:null,z=((L=Re[D])==null?void 0:L.icon)||"⚡",$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",$.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${y};background:${x};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${y}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${h.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${h}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${_?`<img src="${_}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${z}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${v}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild($),(B=$.querySelector("#pvp-gc-back"))==null||B.addEventListener("click",()=>$.remove()),(G=$.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{$.remove(),P(j,D)})}function _e(){var E;const j=n[o+"Team"],D=Object.entries(j).flatMap(([g,x])=>(x||[]).filter(y=>!y.used).map(y=>({...y,_line:g})));if(!D.length)return;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",w.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${n.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${D.map(g=>{const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[g._line]||"#555",y=je(g,g._line)+(g.boost||0);return`<div class="bp-item" data-cid="${g.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${x};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${g.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${y}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(w),(E=w.querySelector("#bp-close"))==null||E.addEventListener("click",()=>w.remove()),w.querySelectorAll(".bp-item").forEach(g=>{g.addEventListener("click",async()=>{const x=g.dataset.cid,y=D.find(v=>v.cardId===x);if(!y)return;const h=(j[y._line]||[]).find(v=>v.cardId===x);h&&(h.boost=(h.boost||0)+n.boostValue),w.remove(),await M({[o+"Team"]:j,boostUsed:!0})})})}function Ae(j=null){var L,B;if(!(n.phase===o+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const w=n[o+"Team"],E=n["usedSubIds_"+o]||[],g=n.maxSubs||3;if(E.length>=g){f(`Maximum ${g} remplacements atteint`,"warning");return}const x=Object.entries(w).flatMap(([G,O])=>(O||[]).filter(H=>H.used).map(H=>({...H,_line:G}))),y=(n[o+"Subs"]||[]).filter(G=>!E.includes(G.cardId));if(!x.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!y.length){f("Aucun remplaçant disponible","warning");return}let h=Math.max(0,x.findIndex(G=>G.cardId===j));const v=((L=x[h])==null?void 0:L._line)||((B=x[h])==null?void 0:B.job);let _=Math.max(0,y.findIndex(G=>G.job===v)),z=!1;const $=document.createElement("div");$.id="pvp-sub-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function S(){var ae,fe,me,$e,ke,qe;const G=x[h],O=y[_],H=Math.min(130,Math.round((window.innerWidth-90)/2)),Q=Math.round(H*1.35),V=Ce=>`background:rgba(255,255,255,0.12);border:none;color:${Ce?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ce?"default":"pointer"};flex-shrink:0`;$.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${E.length}/${g})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${V(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${O?Ye({...O,used:!1,boost:0},H,Q):"<div>—</div>"}</div>
          <button id="pin-down" style="${V(_>=y.length-1)}" ${_>=y.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${y.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${V(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${G?Ye({...G,used:!1,boost:0},H,Q):"<div>—</div>"}</div>
          <button id="pout-down" style="${V(h>=x.length-1)}" ${h>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${x.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ae=$.querySelector("#psub-close"))==null||ae.addEventListener("click",()=>$.remove()),(fe=$.querySelector("#pout-up"))==null||fe.addEventListener("click",()=>{h>0&&(h--,S())}),(me=$.querySelector("#pout-down"))==null||me.addEventListener("click",()=>{h<x.length-1&&(h++,S())}),($e=$.querySelector("#pin-up"))==null||$e.addEventListener("click",()=>{_>0&&(_--,S())}),(ke=$.querySelector("#pin-down"))==null||ke.addEventListener("click",()=>{_<y.length-1&&(_++,S())});const ie=(Ce,Oe,Fe,He)=>{const De=$.querySelector("#"+Ce);if(!De)return;let Ve=0;De.addEventListener("touchstart",Ne=>{Ve=Ne.touches[0].clientY},{passive:!0}),De.addEventListener("touchend",Ne=>{const Ue=Ne.changedTouches[0].clientY-Ve;if(Math.abs(Ue)<30)return;const Ke=Oe();Ue<0&&Ke<He-1?(Fe(Ke+1),S()):Ue>0&&Ke>0&&(Fe(Ke-1),S())},{passive:!0})};ie("pin-panel",()=>_,Ce=>_=Ce,y.length),ie("pout-panel",()=>h,Ce=>h=Ce,x.length),(qe=$.querySelector("#psub-confirm"))==null||qe.addEventListener("click",async Ce=>{if(Ce.preventDefault(),Ce.stopPropagation(),z)return;z=!0;const Oe=x[h],Fe=y[_];if(!Oe||!Fe)return;const He=Oe._line,De=(w[He]||[]).findIndex(Ue=>Ue.cardId===Oe.cardId);if(De===-1){f("Erreur : joueur introuvable","error"),$.remove();return}const Ve={...Fe,_line:He,position:Oe.position,used:!1,boost:0};w[He].splice(De,1,Ve);const Ne=[...E,Fe.cardId];$.remove(),Ie(Oe,Fe,async()=>{await M({[o+"Team"]:w,[r+"Team"]:n[r+"Team"],["usedSubIds_"+o]:Ne})})})}document.body.appendChild($),S()}function Ie(j,D,w){const E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const x=(v,_,z)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${_};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${z}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${E[v.job]||"#555"};border:3px solid ${_};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(v)?`<img src="${Pe(v)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(v.name||"").slice(0,12)}</div>
    </div>`;g.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${x(D,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${x(j,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(g);let y=!1;const h=()=>{y||(y=!0,g.remove(),setTimeout(()=>w(),50))};g.addEventListener("click",h),setTimeout(h,2200)}function xe(){var D;const j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",j.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${n[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(j),(D=j.querySelector("#pvp-opp-close"))==null||D.addEventListener("click",()=>j.remove())}function J(){var w;const j=n.log||[],D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",D.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${j.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...j].reverse().map(E=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${E.type==="goal"?"#FFD700":E.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${E.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(D),(w=D.querySelector("#pvp-hist-close"))==null||w.addEventListener("click",()=>D.remove())}async function oe(){if(n.phase!==o+"-attack")return;const j=o==="p1"?"p2":"p1",D=(n.round||0)+1,w=[...n.log||[]];w.push({type:"info",text:`⏭️ ${n[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const E=ze(n),g=he(j),x=E||!g?"finished":j+"-attack";await M({["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:x,attacker:j,round:D,log:w}),x==="finished"&&await be(n)}async function ge(){const j=n[o+"Team"],D=!["GK","DEF","MIL","ATT"].some(x=>(n[r+"Team"][x]||[]).some(y=>!y.used)),w=(n["selected_"+o]||[]).map(x=>{const y=(j[x._role]||[]).find(S=>S.cardId===x.cardId)||x,h=D&&["GK","DEF"].includes(x._role),v=j[x._role]||[],_=v.findIndex(S=>S.cardId===x.cardId),z=lt(v.length),$=_>=0?z[_]:y._col??1;return{...y,_line:x._role,_col:$,...h?{note_a:Math.max(1,Number(y.note_a)||0)}:{}}});if(!w.length)return;const E=Ot(w,n.modifiers[o]||{});X(o,w.map(x=>x.cardId)),w.forEach(x=>{const y=(j[x._role]||[]).find(h=>h.cardId===x.cardId);y&&(y.used=!0)}),n["selected_"+o]=[],N();const g=[...n.log||[]];if(D){const x=(n[o+"Score"]||0)+1,y=w.map($=>({name:$.name,note:je($,$._line||"ATT"),portrait:Pe($),job:$.job}));g.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:y,homeTotal:E.total,aiTotal:0});const h=(n.round||0)+1,v=o==="p1"?"p2":"p1",_={...n,[o+"Team"]:j,[o+"Score"]:x},z=ze(_);q.add(h),Le(y,x,n[r+"Score"]||0,!0,async()=>{await M({[o+"Team"]:j,[o+"Score"]:x,["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:z?"finished":v+"-attack",attacker:v,round:h,log:g}),z&&await be({...n,[o+"Score"]:x})});return}g.push({type:"pending",text:`⚔️ ${n[o+"Name"]} attaque (${E.total})`}),await M({[o+"Team"]:j,[r+"Team"]:n[r+"Team"],pendingAttack:{...E,players:w,side:o},["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},phase:r+"-defense",log:g})}async function W(){const j=n[o+"Team"],D=(n["selected_"+o]||[]).map(G=>{const O=(j[G._role]||[]).find(ae=>ae.cardId===G.cardId)||G,H=j[G._role]||[],Q=H.findIndex(ae=>ae.cardId===G.cardId),V=lt(H.length),ie=Q>=0?V[Q]:O._col??1;return{...O,_line:G._role,_col:ie}}),w=Ht(D,n.modifiers[o]||{});X(o,D.map(G=>G.cardId)),D.forEach(G=>{const O=(j[G._role]||[]).find(H=>H.cardId===G.cardId);O&&(O.used=!0)}),n["selected_"+o]=[],N();const E=Ut(n.pendingAttack.total,w.total,n.modifiers[o]||{}),g=n.pendingAttack.side,x=E==="attack"||(E==null?void 0:E.goal),y=g==="p1"?"p2":"p1",h=(n.round||0)+1,v=(n.pendingAttack.players||[]).map(G=>({name:G.name,note:je(G,G._line||"ATT"),portrait:Pe(G),job:G.job})),_=[...n.log||[]];_.push({type:"duel",isGoal:x,homeScored:x&&g===o,text:x?`⚽ BUT de ${n[g+"Name"]} ! (${n.pendingAttack.total} vs ${w.total})`:`✋ Attaque stoppée (${n.pendingAttack.total} vs ${w.total})`,homePlayers:v,aiPlayers:D.map(G=>({name:G.name,note:je(G,G._line||"DEF"),portrait:Pe(G),job:G.job})),homeTotal:n.pendingAttack.total,aiTotal:w.total});const z=x?(n[g+"Score"]||0)+1:n[g+"Score"]||0,$={...n,[o+"Team"]:j,[g+"Score"]:z},S=ze($),L=S?"finished":y+"-attack",B=async()=>{await M({[o+"Team"]:j,[r+"Team"]:n[r+"Team"],[g+"Score"]:z,["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:L,attacker:y,round:h,log:_}),(L==="finished"||S)&&await be({...n,[g+"Score"]:z})};if(x){const G=g===o,O=G?z:n[o+"Score"]||0,H=G?n[r+"Score"]||0:z;q.add(h),Le(v,O,H,G,B)}else await B()}function Z(j){return["MIL","ATT"].some(D=>(j[D]||[]).some(w=>!w.used))}function K(j){return["GK","DEF","MIL","ATT"].some(D=>(j[D]||[]).some(w=>!w.used))}function se(j){return K(j)&&!Z(j)}function he(j){const D=n[j+"Team"],w=n[(j==="p1"?"p2":"p1")+"Team"];return!!(Z(D)||!K(w)&&se(D))}function ze(j){const D=["MIL","ATT"].some(_=>(j.p1Team[_]||[]).some(z=>!z.used)),w=["MIL","ATT"].some(_=>(j.p2Team[_]||[]).some(z=>!z.used)),E=K(j.p1Team),g=K(j.p2Team);return!D&&!(!g&&E)&&(!w&&!(!E&&g))}function Me(j){const D=j.p1Score||0,w=j.p2Score||0;return D===w?null:D>w?u.home_id:u.away_id}async function be(j){try{const D=Me(j),w=D?u.home_id===D?u.away_id:u.home_id:null;await k.from("matches").update({status:"finished",winner_id:D,home_score:j.p1Score||0,away_score:j.p2Score||0}).eq("id",i),D&&w&&updateEvolutiveCards(D,w).catch(()=>{})}catch(D){console.error("[PvP] finishMatch:",D)}}function Se(){var g;const j=n[o+"Score"],D=n[r+"Score"],w=j>D,E=j===D;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${w?"🏆":E?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${w?"Victoire !":E?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${j} - ${D}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(g=document.getElementById("pvp-home"))==null||g.addEventListener("click",()=>{try{k.removeChannel(F)}catch{}We(e),c("home")})}N()}const On=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:vo,resumePvpMatch:Rn},Symbol.toStringTag,{value:"Module"}));async function Hn(e,t,i,a){var l,d;try{const s=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(k.getChannels?k.getChannels():[]).forEach(f=>{const o=f.topic||"";(o.includes("matchmaking")||o.includes("pvp-match"))&&k.removeChannel(f)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}s&&(await k.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await k.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await ai(e,t,"random",({deckId:s,formation:c,starters:f,subsRaw:o,gcCardsEnriched:r,gcDefs:m,stadiumDef:b})=>{const u=T=>Un(e,t,s,c,f,o,T,m||[],i,a);if(!r.length){u([]);return}ri(e,r,u)})}async function Un(e,t,i,a,l,d,s=[],c=[],f,o){var de;const{state:r,navigate:m,toast:b}=t,u=r.profile.id;let T=!1,n=null;et(e);try{await k.rpc("cancel_matchmaking",{p_user_id:u})}catch{}try{await k.from("matchmaking_queue").delete().eq("user_id",u)}catch{}const p=(re,P,X,U)=>{var N;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">⚽ Match ami</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">vs ${o}</div>
        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:#1A6B3C;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid #22c55e">
              ✅
            </div>
            <div style="font-size:12px;font-weight:700">${r.profile.club_name||r.profile.pseudo}</div>
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
        
        ${!P&&re?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(N=document.getElementById("lobby-cancel"))==null||N.addEventListener("click",async()=>{T=!0,n&&(k.removeChannel(n),n=null),X&&await k.from("friend_match_invites").update({status:"declined"}).eq("id",X),We(e),m("home")})},A=async(re,P)=>{T=!0,n&&(k.removeChannel(n),n=null),await new Promise(X=>setTimeout(X,600)),e.isConnected&&Kn(e,t,re,P,s,c)},{data:I}=await k.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${u},invitee_id.eq.${f}),and(inviter_id.eq.${f},invitee_id.eq.${u})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let q,R;if(I&&I.inviter_id===f)R=!1,q=I.id,await k.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",q);else{R=!0;const{data:re,error:P}=await k.from("friend_match_invites").insert({inviter_id:u,invitee_id:f,friend_id:f,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(P||!re){b("Erreur création invitation","error"),We(e),m("home");return}q=re.id}if(p(!0,!R,q),!R){const re={home_id:f,away_id:u,home_deck_id:I.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},P=await k.from("matches").insert(re).select().single(),X=P.data;if(!X){b("Erreur création match: "+(((de=P.error)==null?void 0:de.message)||""),"error"),We(e),m("home");return}await k.from("friend_match_invites").update({match_id:X.id,status:"matched"}).eq("id",q),A(X.id,!1);return}let C=!1;const F=re=>{T||C||(re.status==="matched"&&re.match_id?(C=!0,clearInterval(M),clearInterval(Y),A(re.match_id,!0)):re.status==="declined"?(clearInterval(M),clearInterval(Y),b(`${o} a décliné l'invitation`,"warning"),We(e),m("home")):re.invitee_ready&&p(!0,!0,q))},M=setInterval(()=>{if(T){clearInterval(M);return}k.from("matchmaking_queue").delete().eq("user_id",u).then(()=>{},()=>{})},3e3),Y=setInterval(async()=>{if(T||C){clearInterval(Y);return}const{data:re}=await k.from("friend_match_invites").select("*").eq("id",q).maybeSingle();re&&F(re)},1200);n=k.channel("friend-invite-"+q).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${q}`},re=>F(re.new)).subscribe()}async function Kn(e,t,i,a,l=[],d=[]){const{state:s,navigate:c,toast:f}=t,o=a?"p1":"p2",r=a?"p2":"p1",m=(l||[]).map(w=>w.id),b=(l||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:u}=await k.from("matches").select("*").eq("id",i).single();if(!u){f("Match introuvable","error"),c("home");return}async function T(){const[{data:w},{data:E},{data:g},{data:x}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:u.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:u.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",u.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",u.away_id).single()]),y=$=>{const S=Number($.evolution_bonus)||0;return{cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:(Number($.note_g)||0)+($.job==="GK"||$.job2==="GK"&&Number($.note_g)>0?S:0),note_d:(Number($.note_d)||0)+($.job==="DEF"||$.job2==="DEF"&&Number($.note_d)>0?S:0),note_m:(Number($.note_m)||0)+($.job==="MIL"||$.job2==="MIL"&&Number($.note_m)>0?S:0),note_a:(Number($.note_a)||0)+($.job==="ATT"||$.job2==="ATT"&&Number($.note_a)>0?S:0),evolution_bonus:S,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},h=((w==null?void 0:w.starters)||[]).map($=>y($)),v=((E==null?void 0:E.starters)||[]).map($=>y($)),_=(w==null?void 0:w.formation)||"4-4-2",z=(E==null?void 0:E.formation)||"4-4-2";return{p1Team:(()=>{const $=yt(h,_);return stadiumDef?jt($,stadiumDef):$})(),p2Team:yt(v,z),p1Subs:(()=>{const $=((w==null?void 0:w.subs)||[]).map(S=>y(S));return stadiumDef&&Nt($,stadiumDef),$})(),p2Subs:((E==null?void 0:E.subs)||[]).map($=>y($)),p1Formation:_,p2Formation:z,p1Name:(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"Joueur 1",p2Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?m:[],gc_p2:a?[]:m,gcCardsFull_p1:a?b:[],gcCardsFull_p2:a?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let n=u.game_state&&Object.keys(u.game_state).length?u.game_state:null;if(!n)if(a){n=await T();const{data:w}=await k.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await k.from("matches").update({game_state:n,turn_user_id:u.home_id}).eq("id",i):n=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let w=0;w<60&&!n;w++){await new Promise(g=>setTimeout(g,400));const{data:E}=await k.from("matches").select("game_state").eq("id",i).single();E!=null&&E.game_state&&Object.keys(E.game_state).length&&(n=E.game_state)}if(!n){f("Erreur de synchronisation","error"),c("home");return}n.gc_p2=m,n.gcCardsFull_p2=b,await k.from("matches").update({game_state:n}).eq("id",i)}let p=!1,A=!1,I=!1,q=null,R=!1;const C=new Set,F=new Set;function M(w){var $,S;try{k.removeChannel(Y)}catch{}const E=n[o+"Score"]||0,g=n[r+"Score"]||0;if(!I){I=!0;const L=w.winner_id||(E>g?s.profile.id:g>E?"opp":null),B=L===s.profile.id?"win":L?"loss":null;B&&ii(()=>Promise.resolve().then(()=>oo),void 0).then(G=>G.applyOwnEvolution(s.profile.id,B)).catch(()=>{})}if(!A){const L=n.p1Score||0,B=n.p2Score||0,G=(n.usedGc_p1||[]).length,O=(n.usedGc_p2||[]).length,H=w.winner_id||(L>B?u.home_id:B>L?u.away_id:null);(H?s.profile.id===H:s.profile.id<(a?u.away_id:u.home_id))&&(A=!0,Xi({player1Id:u.home_id,player2Id:u.away_id,score1:L,score2:B,gc1:G,gc2:O}).catch(V=>console.warn("[FriendMatch] updateStats:",V)))}let x,y;w.winner_id?(x=w.winner_id===s.profile.id,y=!1):w.forfeit?(x=E>g,y=!1):(y=E===g,x=E>g),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const h=document.createElement("div");h.id="pvp-end-overlay",h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=y?"🤝":x?"🏆":"😞",_=y?"MATCH NUL":x?"VICTOIRE !":"DÉFAITE",z=y?"#fff":x?"#FFD700":"#ff6b6b";h.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${_}</div>
      <div style="font-size:18px">${n[o+"Name"]} ${E} – ${g} ${n[r+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${x?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(h),(S=h.querySelector("#pvp-end-home"))==null||S.addEventListener("click",()=>{h.remove(),We(e),c("home")})}const Y=k.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{const E=w.new;try{if(E.status==="finished"||E.forfeit){if(p)return;p=!0,q&&(clearInterval(q),q=null),E.game_state&&(n=E.game_state),M(E);return}if(E.game_state){const g=n;n=E.game_state;const x=n._lastGC;if(x&&x.seq&&!F.has(x.seq)&&(F.add(x.seq),x.by!==o)){_e(x.type,x.by,()=>pe());return}const y=g[o+"Score"]||0,h=g[r+"Score"]||0,v=n[o+"Score"]||0,_=n[r+"Score"]||0,z=v>y,$=_>h;if((z||$)&&!C.has(n.round)){C.add(n.round);const S=[...n.log||[]].reverse().find(B=>B.isGoal),L=((S==null?void 0:S.homePlayers)||[]).map(B=>({name:B.name,note:B.note,portrait:B.portrait,job:B.job}));ve(L,v,_,z,()=>pe());return}pe()}}catch(g){console.error("[PvP] crash:",g)}}).subscribe();async function de(w){Object.assign(n,w),n.lastActionAt=new Date().toISOString();const{error:E}=await k.from("matches").update({game_state:n}).eq("id",i);E&&f("Erreur de synchronisation","error");try{pe()}catch(g){console.error("[PvP] renderPvpScreen crash:",g)}}async function re(){if(p)return;p=!0,q&&(clearInterval(q),q=null);const w=a?u.away_id:u.home_id,E=a?"p2":"p1",g=a?"p1":"p2",x={...n,[E+"Score"]:3,[g+"Score"]:0,phase:"finished"};try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:w,home_score:x.p1Score||0,away_score:x.p2Score||0,game_state:x}).eq("id",i)}catch{}try{k.removeChannel(Y)}catch{}setTimeout(()=>{We(e),c("home")},800)}const P={BOOST_STAT:({value:w=1,count:E=1,roles:g=[]},x,y)=>{const h=x[o+"Team"],v=Object.entries(h).filter(([_])=>!g.length||g.includes(_)).flatMap(([_,z])=>z.filter($=>!$.used).map($=>({...$,_line:_})));if(!v.length){x.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(x);return}X(v,E,`Choisir ${E} joueur(s) à booster (+${w})`,_=>{_.forEach(z=>{const $=(h[z._line]||[]).find(S=>S.cardId===z.cardId);$&&($.boost=($.boost||0)+w,x.log.push({text:`⚡ +${w} sur ${$.name}`,type:"info"}))}),x[o+"Team"]=h,y(x)})},DEBUFF_STAT:({value:w=1,count:E=1,roles:g=[],target:x="ai"},y,h)=>{const v=x==="home"?o:r,_=y[v+"Team"],z=x==="home"?"allié":"adverse",$=Object.entries(_).filter(([S])=>!g.length||g.includes(S)).flatMap(([S,L])=>L.map(B=>({...B,_line:S})));if(!$.length){y.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),h(y);return}X($,E,`Choisir ${E} joueur(s) ${z}(s) (-${w})`,S=>{S.forEach(L=>{const B=(_[L._line]||[]).find(G=>G.cardId===L.cardId);B&&(B.boost=(B.boost||0)-w,y.log.push({text:`🎯 -${w} sur ${B.name}`,type:"info"}))}),y[v+"Team"]=_,h(y)})},GRAY_PLAYER:({count:w=1,roles:E=[],target:g="ai"},x,y)=>{const h=g==="home"?o:r,v=x[h+"Team"],_=g==="home"?"allié":"adverse",z=Object.entries(v).filter(([$])=>!E.length||E.includes($)).flatMap(([$,S])=>S.filter(L=>!L.used).map(L=>({...L,_line:$})));if(!z.length){x.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),y(x);return}X(z,w,`Choisir ${w} joueur(s) ${_}(s) à exclure`,$=>{const S="usedCardIds_"+h,L=new Set(x[S]||[]);$.forEach(B=>{const G=(v[B._line]||[]).find(O=>O.cardId===B.cardId);G&&(G.used=!0,L.add(B.cardId),x.log.push({text:`❌ ${G.name} exclu !`,type:"info"}))}),x[S]=[...L],x[h+"Team"]=v,y(x)})},REVIVE_PLAYER:({count:w=1,roles:E=[]},g,x)=>{const y=g[o+"Team"],h=Object.entries(y).filter(([v])=>!E.length||E.includes(v)).flatMap(([v,_])=>_.filter(z=>z.used).map(z=>({...z,_line:v})));if(!h.length){g.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),x(g);return}X(h,w,`Choisir ${w} joueur(s) à ressusciter`,v=>{v.forEach(_=>{const z=(y[_._line]||[]).find($=>$.cardId===_.cardId);z&&(z.used=!1,g.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),g[o+"Team"]=y,x(g)})},REMOVE_GOAL:({},w,E)=>{const g=r+"Score";w[g]>0?(w[g]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),E(w)},ADD_GOAL_DRAW:({},w,E)=>{w[o+"Score"]===w[r+"Score"]?(w[o+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),E(w)},ADD_SUB:({value:w=1},E,g)=>{E.maxSubs=(E.maxSubs||3)+w,E.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),g(E)},CUSTOM:({},w,E)=>E(w)};function X(w,E,g,x){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let h=[];function v(){var z,$;const _=w.map(S=>{const L={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[S._line]||"#555",B=je(S,S._line)+(S.boost||0),O=h.find(Q=>Q.cardId===S.cardId)?"#FFD700":"rgba(255,255,255,0.25)",H=S.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${S.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${O};background:${L};overflow:hidden;cursor:pointer;${H}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${S.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${S._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${g}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h.length}/${E}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${h.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${h.length}/${E})
          </button>
        </div>`,(z=y.querySelector("#pp-close"))==null||z.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(S=>{S.addEventListener("click",()=>{const L=S.dataset.cid,B=w.find(O=>O.cardId===L),G=h.findIndex(O=>O.cardId===L);B&&(G>-1?h.splice(G,1):h.length<E&&h.push(B),v())})}),($=y.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{y.remove(),x(h)})}v(),document.body.appendChild(y)}async function U(w,E){const x=(n["gcCardsFull_"+o]||[]).find(_=>_.id===w),y=(x==null?void 0:x._gcDef)||(n.gcDefs||[]).find(_=>{var z;return _.name===E||((z=_.name)==null?void 0:z.toLowerCase().trim())===(E==null?void 0:E.toLowerCase().trim())}),h=[...n["usedGc_"+o]||[],w],v={type:E,by:o,seq:(n._gcAnimSeq||0)+1};F.add(v.seq),_e(E,o,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const z=P[y.effect_type];if(z){const $={...n};z(y.effect_params||{},$,async S=>{S["usedGc_"+o]=h,S._lastGC=v,S._gcAnimSeq=v.seq,await de(S)});return}}const _={...n};switch(E){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=r+"Score";_[z]>0&&(_[z]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+o]=h,_._lastGC=v,_._gcAnimSeq=v.seq,await de(_)})}function N(w,E){const g="usedCardIds_"+w,x=new Set(n[g]||[]);E.forEach(y=>x.add(y)),n[g]=[...x]}function ne(){for(const w of["p1","p2"]){const E=new Set(n["usedCardIds_"+w]||[]),g=n[w+"Team"];if(g)for(const x of["GK","DEF","MIL","ATT"])(g[x]||[]).forEach(y=>{y.used=E.has(y.cardId)})}}function pe(){var Ze,Qe,nt,gt,le,Ee;if(n.phase==="reveal")return ye();if(n.phase==="midfield")return we();if(n.phase==="finished")return D();const w=n[o+"Team"],E=n[r+"Team"];ne();const g=n[o+"Score"],x=n[r+"Score"],y=n[o+"Name"],h=n[r+"Name"],v=n.phase===o+"-attack",_=n.phase===o+"-defense",z=Array.isArray(n["selected_"+o])?n["selected_"+o]:[],$=z.map(te=>te.cardId),S=window.innerWidth>=700,L=n[o+"Subs"]||[],B=n["usedSubIds_"+o]||[],G=L.filter(te=>!B.includes(te.cardId)),O=n["gcCardsFull_"+o]||[],H=n["usedGc_"+o]||[],Q=O.filter(te=>!H.includes(te.id)),V=n.boostOwner===o&&!n.boostUsed,ie=!["GK","DEF","MIL","ATT"].some(te=>(E[te]||[]).some(ue=>!ue.used)),ae=[...w.MIL||[],...w.ATT||[]].filter(te=>!te.used),fe=v&&ie&&ae.length===0?[...w.GK||[],...w.DEF||[]].filter(te=>!te.used).map(te=>te.cardId):[];function me(te,ue,ee){var Et,Kt;const ce=te._gcDef,Be={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ce==null?void 0:ce.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Te={purple:"#b06ce0",light_blue:"#00d4ef"}[ce==null?void 0:ce.color]||"#b06ce0",tt=(ce==null?void 0:ce.name)||te.gc_type,it=(ce==null?void 0:ce.effect)||((Et=Re[te.gc_type])==null?void 0:Et.desc)||"",rt=ce!=null&&ce.image_url?`/icons/${ce.image_url}`:null,st=((Kt=Re[te.gc_type])==null?void 0:Kt.icon)||"⚡",ct=Math.round(ee*.22),kt=Math.round(ee*.22),pt=ee-ct-kt,ht=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${te.id}" data-gc-type="${te.gc_type}"
        style="box-sizing:border-box;width:${ue}px;height:${ee}px;border-radius:10px;border:2px solid ${Te};background:${Be};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ct}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ht}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ue-6}px">${tt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${pt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${rt?`<img src="${rt}" style="max-width:${ue-10}px;max-height:${pt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(pt*.55)}px">${st}</span>`}
        </div>
        <div style="height:${kt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${it.slice(0,38)}</span>
        </div>
      </div>`}function $e(te,ue){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${te}px;height:${ue}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ue*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ue*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ue*.09)}px;color:#000;font-weight:900">+${n.boostValue}</div>
      </div>`}const ke=(te,ue)=>ue?$e(130,175):me(te,130,175),qe=(te,ue)=>ue?$e(68,95):me(te,68,95),Ce=S?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=v?Me(o)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${h}</div>`,Fe=v&&!Me(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",He=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${G.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':G.map(te=>`<div class="pvp-sub-btn" data-sub-id="${te.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(te,S?76:44,S?100:58)}</div>`).join("")}
    </div>`,De=v?"attack":_?"defense":"idle",Ve=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(w,n[o+"Formation"],De,$,300,300,fe)}
      </div>
    </div>`;function Ne(te){if(te.type==="duel"&&(te.homeTotal!=null||te.aiTotal!=null)){const ue=(te.homeTotal||0)>=(te.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(te.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(te.homePlayers||[]).map(ee=>dt(ee)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ue?20:14}px;font-weight:900;color:${ue?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${te.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ue?14:20}px;font-weight:900;color:${ue?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${te.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(te.aiPlayers||[]).map(ee=>dt(ee)).join("")}
            </div>
          </div>
          ${te.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${te.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${te.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${te.type==="goal"?700:400};padding:3px 2px">${te.text||""}</div>`}const Ue=(()=>{var ue,ee;if(_&&((ue=n.pendingAttack)!=null&&ue.players)){const ce=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${h} ATTAQUE — Défendez !</div>
          ${ot((ce.players||[]).map(Be=>({...Be,used:!1})),"#ff6b6b",ce.total)}
        </div>`}if(v&&((ee=n.pendingAttack)!=null&&ee.players)){const ce=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ce.players||[]).map(Be=>({...Be,used:!1})),"#00ff88",ce.total)}
        </div>`}const te=(n.log||[]).slice(-1)[0];return te?'<div style="padding:2px 4px">'+Ne(te)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${g} – ${x}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ue}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(n.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",S?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${He}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ve}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Oe}${Fe}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${Q.map(te=>ke(te,!1)).join("")}
            ${V?ke(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(w,n[o+"Formation"],De,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Q.map(te=>qe(te,!1)).join("")}
            ${V?qe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${v&&G.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${v&&G.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${v&&G.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${v&&G.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${G.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(n["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(n["usedSubIds_"+o]||[]).length}/${n.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Oe}${Fe}</div>
        </div>
      </div>`;function Je(){const te=e.querySelector(".match-screen");if(!te)return;const ue=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);te.style.height=ue+"px",te.style.minHeight=ue+"px",te.style.maxHeight=ue+"px",te.style.overflow="hidden";const ee=e.querySelector("#mobile-action-bar"),ce=e.querySelector("#mobile-play-area");ee&&ce&&(ce.style.paddingBottom=ee.offsetHeight+"px")}if(Je(),setTimeout(Je,120),setTimeout(Je,400),R||(R=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Je),window.visualViewport.addEventListener("scroll",Je)),window.addEventListener("resize",Je)),function(){const ue=e.querySelector(".terrain-wrapper svg");ue&&(ue.removeAttribute("width"),ue.removeAttribute("height"),ue.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ue.setAttribute("viewBox","-26 -26 352 352"),ue.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(te=>{te.addEventListener("click",()=>{if(!v&&!_)return;const ue=te.dataset.cardId,ee=te.dataset.role,ce=(w[ee]||[]).find(it=>it.cardId===ue);if(!ce||ce.used)return;const Be=fe.includes(ue);if(v&&!["MIL","ATT"].includes(ee)&&!Be)return;Array.isArray(n["selected_"+o])||(n["selected_"+o]=[]);const Te=n["selected_"+o],tt=Te.findIndex(it=>it.cardId===ue);tt>-1?Te.splice(tt,1):Te.length<3&&Te.push({...ce,_role:ee}),pe()})}),e.querySelectorAll(".match-used-hit").forEach(te=>{te.addEventListener("click",()=>xe(te.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(te=>{te.addEventListener("click",()=>xe())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>xe()),e.querySelectorAll(".pvp-gc-mini").forEach(te=>{te.addEventListener("click",()=>Ae(te.dataset.gcId,te.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>Ie()),(nt=e.querySelector("#pvp-action"))==null||nt.addEventListener("click",te=>{v?te.currentTarget.dataset.pass==="1"||!Me(o)?W():Z():_&&K()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&re()}),(le=e.querySelector("#pvp-view-opp"))==null||le.addEventListener("click",()=>oe()),(Ee=e.querySelector("#pvp-toggle-history"))==null||Ee.addEventListener("click",()=>ge()),q&&(clearInterval(q),q=null),(v||_)&&!p){let te=30,ue=!1;const ee=()=>document.getElementById("pvp-timer"),ce=()=>{ee()&&(ee().textContent=te+"s",ee().style.color=ue?"#ff4444":"#fff")};ce(),q=setInterval(()=>{te--,te<0?ue?(clearInterval(q),q=null,v&&!Me(o)?W():re()):(ue=!0,te=15,ce()):ce()},1e3)}}function ye(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${n[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await de({phase:"midfield"})},5e3)}let Le=!1;function we(){if(Le)return;const w=n[o+"Team"].MIL||[],E=n[r+"Team"].MIL||[];function g(Q){return Q.reduce((V,ie)=>V+je(ie,"MIL"),0)}function x(Q){let V=0;for(let ie=0;ie<Q.length-1;ie++){const ae=at(Q[ie],Q[ie+1]);ae==="#00ff88"?V+=2:ae==="#FFD700"&&(V+=1)}return V}const y=g(w)+x(w),h=g(E)+x(E),v=y>=h;function _(Q,V,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${V}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Q.map((ae,fe)=>{const me=fe<Q.length-1?at(ae,Q[fe+1]):null,$e=!me||me==="#ff3333"||me==="#cc2222",ke=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ie}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...ae,note:je(ae,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<Q.length-1?`<div class="duel-link duel-link-${ie}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${$e?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${$e?"none":`0 0 8px ${me}`}">
              ${ke?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${ke}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ie}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${g(Q)} + ${x(Q)} liens = <b style="color:#fff">${g(Q)+x(Q)}</b>
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
      ${_(w,n[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(E,n[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(Q,V)=>e.querySelectorAll(Q).forEach((ie,ae)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},V+ae*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Q,V)=>setTimeout(()=>{Q.style.opacity="1"},V*70)),900),setTimeout(()=>{const Q=e.querySelector("#pvp-vs");Q&&(Q.style.opacity="1",Q.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function $(Q,V,ie){const ae=document.getElementById(Q);if(!ae)return;const fe=performance.now(),me=$e=>{const ke=Math.min(1,($e-fe)/ie);ae.textContent=Math.round(V*(1-Math.pow(1-ke,3))),ke<1?requestAnimationFrame(me):ae.textContent=V};requestAnimationFrame(me)}setTimeout(()=>{$("pvp-score-me",y,800),$("pvp-score-opp",h,800)},1500);const S=n.p1Team.MIL||[],L=n.p2Team.MIL||[],B=g(S)+x(S),G=g(L)+x(L),O=B>=G?"p1":"p2";let H=n.boostValue;H==null&&(H=ni(),n.boostValue=H,n.boostOwner=O,n.boostUsed=!1),Le=!0,setTimeout(()=>{const Q=e.querySelector("#duel-row-"+(v?"me":"opp")),V=e.querySelector("#duel-row-"+(v?"opp":"me")),ie=document.getElementById("pvp-score-me"),ae=document.getElementById("pvp-score-opp"),fe=v?ie:ae,me=v?ae:ie;fe&&(fe.style.fontSize="80px",fe.style.color=v?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{Q&&(Q.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Q.style.zIndex="5"),setTimeout(()=>{const $e=document.getElementById("duel-shock");$e&&($e.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const $e=document.getElementById("pvp-duel-finale");if(!$e)return;const ke=n.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+H+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",qe=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;$e.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+n[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+n[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ke+qe,$e.style.transition="opacity .45s ease",$e.style.opacity="1",$e.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const Oe=O;await de({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:H,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function ve(w,E,g,x,y){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(S,L)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${L%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][L%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};h.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${v}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${x?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${E} – ${g}
      </div>
      ${w!=null&&w.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${w.map(S=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[S.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${S.portrait?`<img src="${S.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(S.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(h);let z=!1;const $=()=>{z||(z=!0,h.remove(),setTimeout(()=>y(),50))};h.addEventListener("click",$),setTimeout($,3500)}function _e(w,E,g){var H,Q;const x=(n.gcDefs||[]).find(V=>{var ie;return V.name===w||((ie=V.name)==null?void 0:ie.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",v=(x==null?void 0:x.name)||w,_=(x==null?void 0:x.effect)||((H=Re[w])==null?void 0:H.desc)||"",z=x!=null&&x.image_url?`/icons/${x.image_url}`:null,$=((Q=Re[w])==null?void 0:Q.icon)||"⚡",L=E===o?"Vous":n[E+"Name"]||"Adversaire",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",B.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${h}66}50%{box-shadow:0 0 60px ${h}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${h};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${L} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${h};background:${y};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${v.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${v}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${z?`<img src="${z}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(B);let G=!1;const O=()=>{G||(G=!0,B.remove(),setTimeout(()=>g&&g(),50))};B.addEventListener("click",O),setTimeout(O,3e3)}function Ae(w,E){var B,G,O,H;const x=(n["gcCardsFull_"+o]||[]).find(Q=>Q.id===w),y=x==null?void 0:x._gcDef,h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||E,z=(y==null?void 0:y.effect)||((B=Re[E])==null?void 0:B.desc)||"Carte spéciale.",$=y!=null&&y.image_url?`/icons/${y.image_url}`:null,S=((G=Re[E])==null?void 0:G.icon)||"⚡",L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",L.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${h};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${S}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(L),(O=L.querySelector("#pvp-gc-back"))==null||O.addEventListener("click",()=>L.remove()),(H=L.querySelector("#pvp-gc-use"))==null||H.addEventListener("click",()=>{L.remove(),U(w,E)})}function Ie(){var x;const w=n[o+"Team"],E=Object.entries(w).flatMap(([y,h])=>(h||[]).filter(v=>!v.used).map(v=>({...v,_line:y})));if(!E.length)return;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",g.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${n.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(y=>{const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",v=je(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${h};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(g),(x=g.querySelector("#bp-close"))==null||x.addEventListener("click",()=>g.remove()),g.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const h=y.dataset.cid,v=E.find(z=>z.cardId===h);if(!v)return;const _=(w[v._line]||[]).find(z=>z.cardId===h);_&&(_.boost=(_.boost||0)+n.boostValue),g.remove(),await de({[o+"Team"]:w,boostUsed:!0})})})}function xe(w=null){var G,O;if(!(n.phase===o+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const g=n[o+"Team"],x=n["usedSubIds_"+o]||[],y=n.maxSubs||3;if(x.length>=y){f(`Maximum ${y} remplacements atteint`,"warning");return}const h=Object.entries(g).flatMap(([H,Q])=>(Q||[]).filter(V=>V.used).map(V=>({...V,_line:H}))),v=(n[o+"Subs"]||[]).filter(H=>!x.includes(H.cardId));if(!h.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){f("Aucun remplaçant disponible","warning");return}let _=Math.max(0,h.findIndex(H=>H.cardId===w));const z=((G=h[_])==null?void 0:G._line)||((O=h[_])==null?void 0:O.job);let $=Math.max(0,v.findIndex(H=>H.job===z)),S=!1;const L=document.createElement("div");L.id="pvp-sub-overlay",L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function B(){var me,$e,ke,qe,Ce,Oe;const H=h[_],Q=v[$],V=Math.min(130,Math.round((window.innerWidth-90)/2)),ie=Math.round(V*1.35),ae=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;L.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${x.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${Q?Ye({...Q,used:!1,boost:0},V,ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae($>=v.length-1)}" ${$>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${H?Ye({...H,used:!1,boost:0},V,ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(_>=h.length-1)}" ${_>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=L.querySelector("#psub-close"))==null||me.addEventListener("click",()=>L.remove()),($e=L.querySelector("#pout-up"))==null||$e.addEventListener("click",()=>{_>0&&(_--,B())}),(ke=L.querySelector("#pout-down"))==null||ke.addEventListener("click",()=>{_<h.length-1&&(_++,B())}),(qe=L.querySelector("#pin-up"))==null||qe.addEventListener("click",()=>{$>0&&($--,B())}),(Ce=L.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<v.length-1&&($++,B())});const fe=(Fe,He,De,Ve)=>{const Ne=L.querySelector("#"+Fe);if(!Ne)return;let Ue=0;Ne.addEventListener("touchstart",Ke=>{Ue=Ke.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Ke=>{const Je=Ke.changedTouches[0].clientY-Ue;if(Math.abs(Je)<30)return;const Ze=He();Je<0&&Ze<Ve-1?(De(Ze+1),B()):Je>0&&Ze>0&&(De(Ze-1),B())},{passive:!0})};fe("pin-panel",()=>$,Fe=>$=Fe,v.length),fe("pout-panel",()=>_,Fe=>_=Fe,h.length),(Oe=L.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),S)return;S=!0;const He=h[_],De=v[$];if(!He||!De)return;const Ve=He._line,Ne=(g[Ve]||[]).findIndex(Je=>Je.cardId===He.cardId);if(Ne===-1){f("Erreur : joueur introuvable","error"),L.remove();return}const Ue={...De,_line:Ve,position:He.position,used:!1,boost:0};g[Ve].splice(Ne,1,Ue);const Ke=[...x,De.cardId];L.remove(),J(He,De,async()=>{await de({[o+"Team"]:g,[r+"Team"]:n[r+"Team"],["usedSubIds_"+o]:Ke})})})}document.body.appendChild(L),B()}function J(w,E,g){const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const h=(z,$,S)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${S}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${x[z.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(z)?`<img src="${Pe(z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(z.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${h(E,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${h(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let v=!1;const _=()=>{v||(v=!0,y.remove(),setTimeout(()=>g(),50))};y.addEventListener("click",_),setTimeout(_,2200)}function oe(){var E;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${n[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(E=w.querySelector("#pvp-opp-close"))==null||E.addEventListener("click",()=>w.remove())}function ge(){var x;const w=n.log||[],E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const g=y=>{var v,_,z;if(y.type==="duel"){const $=y.isGoal,S=y.homeScored&&o==="p1"||!y.homeScored&&$&&o==="p2",L=y.homeScored?"#FFD700":$?"#ff6b6b":"rgba(255,255,255,0.3)",B=$?S?"⚽ BUT !":"⚽ BUT adversaire !":(v=y.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${$?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${L};margin-bottom:4px">
          <div style="font-size:9px;color:${L};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${B}</div>
          ${(_=y.homePlayers)!=null&&_.length?`<div style="margin-bottom:3px">${ot(y.homePlayers,"rgba(255,255,255,0.7)",y.homeTotal)}</div>`:""}
          ${(z=y.aiPlayers)!=null&&z.length?`<div style="opacity:0.7">${ot(y.aiPlayers,"#ff6b6b",y.aiTotal)}</div>`:""}
        </div>`}return y.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${y.outPlayer?Ye({...y.outPlayer,used:!0,_line:y.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${y.inPlayer?Ye({...y.inPlayer,_line:y.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${y.text||""}</div>
      </div>`};E.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(g).join("")}
      </div>`,document.body.appendChild(E),(x=E.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>E.remove())}async function W(){if(n.phase!==o+"-attack")return;const w=o==="p1"?"p2":"p1",E=(n.round||0)+1,g=[...n.log||[]];g.push({type:"info",text:`⏭️ ${n[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const x=be(n),y=Me(w),h=x||!y?"finished":w+"-attack";await de({["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:h,attacker:w,round:E,log:g}),h==="finished"&&await j(n)}async function Z(){const w=n[o+"Team"],E=!["GK","DEF","MIL","ATT"].some(h=>(n[r+"Team"][h]||[]).some(v=>!v.used)),g=(n["selected_"+o]||[]).map(h=>{const v=(w[h._role]||[]).find(B=>B.cardId===h.cardId)||h,_=E&&["GK","DEF"].includes(h._role),z=w[h._role]||[],$=z.findIndex(B=>B.cardId===h.cardId),S=lt(z.length),L=$>=0?S[$]:v._col??1;return{...v,_line:h._role,_col:L,..._?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!g.length)return;const x=Ot(g,n.modifiers[o]||{});N(o,g.map(h=>h.cardId)),g.forEach(h=>{const v=(w[h._role]||[]).find(_=>_.cardId===h.cardId);v&&(v.used=!0)}),n["selected_"+o]=[],pe();const y=[...n.log||[]];if(E){const h=(n[o+"Score"]||0)+1,v=g.map(L=>({name:L.name,note:je(L,L._line||"ATT"),portrait:Pe(L),job:L.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:x.total,aiTotal:0});const _=(n.round||0)+1,z=o==="p1"?"p2":"p1",$={...n,[o+"Team"]:w,[o+"Score"]:h},S=be($);C.add(_),ve(v,h,n[r+"Score"]||0,!0,async()=>{await de({[o+"Team"]:w,[o+"Score"]:h,["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:S?"finished":z+"-attack",attacker:z,round:_,log:y}),S&&await j({...n,[o+"Score"]:h})});return}y.push({type:"pending",text:`⚔️ ${n[o+"Name"]} attaque (${x.total})`}),await de({[o+"Team"]:w,[r+"Team"]:n[r+"Team"],pendingAttack:{...x,players:g,side:o},["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},phase:r+"-defense",log:y})}async function K(){const w=n[o+"Team"],E=(n["selected_"+o]||[]).map(H=>{const Q=(w[H._role]||[]).find(me=>me.cardId===H.cardId)||H,V=w[H._role]||[],ie=V.findIndex(me=>me.cardId===H.cardId),ae=lt(V.length),fe=ie>=0?ae[ie]:Q._col??1;return{...Q,_line:H._role,_col:fe}}),g=Ht(E,n.modifiers[o]||{});N(o,E.map(H=>H.cardId)),E.forEach(H=>{const Q=(w[H._role]||[]).find(V=>V.cardId===H.cardId);Q&&(Q.used=!0)}),n["selected_"+o]=[],pe();const x=Ut(n.pendingAttack.total,g.total,n.modifiers[o]||{}),y=n.pendingAttack.side,h=x==="attack"||(x==null?void 0:x.goal),v=y==="p1"?"p2":"p1",_=(n.round||0)+1,z=(n.pendingAttack.players||[]).map(H=>({name:H.name,note:je(H,H._line||"ATT"),portrait:Pe(H),job:H.job})),$=[...n.log||[]];$.push({type:"duel",isGoal:h,homeScored:h&&y===o,text:h?`⚽ BUT de ${n[y+"Name"]} ! (${n.pendingAttack.total} vs ${g.total})`:`✋ Attaque stoppée (${n.pendingAttack.total} vs ${g.total})`,homePlayers:z,aiPlayers:E.map(H=>({name:H.name,note:je(H,H._line||"DEF"),portrait:Pe(H),job:H.job})),homeTotal:n.pendingAttack.total,aiTotal:g.total});const S=h?(n[y+"Score"]||0)+1:n[y+"Score"]||0,L={...n,[o+"Team"]:w,[y+"Score"]:S},B=be(L),G=B?"finished":v+"-attack",O=async()=>{await de({[o+"Team"]:w,[r+"Team"]:n[r+"Team"],[y+"Score"]:S,["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:G,attacker:v,round:_,log:$}),(G==="finished"||B)&&await j({...n,[y+"Score"]:S})};if(h){const H=y===o,Q=H?S:n[o+"Score"]||0,V=H?n[r+"Score"]||0:S;C.add(_),ve(z,Q,V,H,O)}else await O()}function se(w){return["MIL","ATT"].some(E=>(w[E]||[]).some(g=>!g.used))}function he(w){return["GK","DEF","MIL","ATT"].some(E=>(w[E]||[]).some(g=>!g.used))}function ze(w){return he(w)&&!se(w)}function Me(w){const E=n[w+"Team"],g=n[(w==="p1"?"p2":"p1")+"Team"];return!!(se(E)||!he(g)&&ze(E))}function be(w){const E=["MIL","ATT"].some($=>(w.p1Team[$]||[]).some(S=>!S.used)),g=["MIL","ATT"].some($=>(w.p2Team[$]||[]).some(S=>!S.used)),x=he(w.p1Team),y=he(w.p2Team);return!E&&!(!y&&x)&&(!g&&!(!x&&y))}function Se(w){const E=w.p1Score||0,g=w.p2Score||0;return E===g?null:E>g?u.home_id:u.away_id}async function j(w){try{const E=Se(w),g=E?u.home_id===E?u.away_id:u.home_id:null;await k.from("matches").update({status:"finished",winner_id:E,home_score:w.p1Score||0,away_score:w.p2Score||0}).eq("id",i),E&&g&&ki(E,g).catch(()=>{})}catch(E){console.error("[PvP] finishMatch:",E)}}function D(){var y;const w=n[o+"Score"],E=n[r+"Score"],g=w>E,x=w===E;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${g?"🏆":x?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${g?"Victoire !":x?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${E}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{k.removeChannel(Y)}catch{}We(e),c("home")})}pe()}const Lt="#1A6B3C",xt="#D4A017";async function Vn(e,t){var a;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(a=t.state.params)==null?void 0:a.openLeagueId;if(i){t.state.params.openLeagueId=null,await bt(e,t,i);return}await $t(e,t)}async function $t(e,t,i="waiting"){var A;const{state:a}=t,l=a.profile.id,{data:d}=await k.from("mini_league_members").select("league_id").eq("user_id",l),s=(d||[]).map(I=>I.league_id),{data:c,error:f}=await k.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),o=f?(await k.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:c||[],m=(s.length?await k.from("mini_leagues").select("*, mini_league_members(count)").in("id",s).order("created_at",{ascending:!1}):{data:[]}).data||[],b=m.filter(I=>I.status==="waiting"&&!I.is_archived),u=m.filter(I=>I.status==="active"&&!I.is_archived),T=m.filter(I=>I.is_archived||I.status==="finished"),n=o.filter(I=>!s.includes(I.id)),p=[{key:"waiting",label:"🟡 En attente",count:b.length+n.length},{key:"active",label:"🟢 En cours",count:u.length},{key:"archived",label:"📁 Archivées",count:T.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${p.map(I=>`<button class="ml-tab" data-tab="${I.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===I.key?Lt:"transparent"};background:none;font-size:12px;font-weight:${i===I.key?"900":"600"};color:${i===I.key?Lt:"#888"};cursor:pointer">${I.label}${I.count?` (${I.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Yn(b,n,l):i==="active"?Wn(u,l):Jn(T,l)}
    </div>
  </div>`,(A=document.getElementById("ml-create-btn"))==null||A.addEventListener("click",()=>Xn(e,t)),e.querySelectorAll(".ml-tab").forEach(I=>I.addEventListener("click",()=>$t(e,t,I.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(I=>I.addEventListener("click",()=>bt(e,t,I.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(I=>I.addEventListener("click",q=>{q.stopPropagation(),_o(e,t,I.dataset.join,I.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(I=>I.addEventListener("click",q=>{q.stopPropagation(),yi(e,t,I.dataset.delete,I.dataset.name,i)}))}function ti(e,t,i=!1){var s,c;const a=e.creator_id===t,l=e.pot||0,d=((c=(s=e.mini_league_members)==null?void 0:s[0])==null?void 0:c.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${a?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${d}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${l>0?`<span style="color:${xt};font-weight:700">🏆 ${l.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function Yn(e,t,i){const a=[];return e.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),a.push(...e.map(l=>ti(l,i,!1)))),t.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),a.push(...t.map(l=>ti(l,i,!0)))),a.length?a.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Wn(e,t){return e.length?e.map(i=>ti(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Jn(e,t){return e.length?e.map(i=>ti(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Xn(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(a=>a.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=a.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var T,n,p,A;const{toast:a}=t,l=document.getElementById("ml-name").value.trim(),d=parseInt(document.getElementById("ml-max").value)||6,s=parseInt(document.getElementById("ml-fee").value)||500,c=((T=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:T.value)||"public",f=((n=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:n.value)||"aller",o=((A=(p=document.getElementById("ml-pwd"))==null?void 0:p.value)==null?void 0:A.trim())||null;if(!l){a("Le nom est obligatoire","error");return}if(s<100){a("Mise minimum : 100 crédits","error");return}if(c==="private"&&!o){a("Mot de passe requis","error");return}const{data:r,error:m}=await k.from("mini_leagues").insert({name:l,creator_id:t.state.profile.id,type:c,password:o,mode:f,max_players:d,entry_fee:s}).select().single();if(m){a("Erreur : "+m.message,"error");return}const{data:b}=await k.from("users").select("credits").eq("id",t.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<s){await k.from("mini_leagues").delete().eq("id",r.id),a(`Crédits insuffisants pour la mise (${s.toLocaleString("fr")} cr.)`,"error");return}await k.from("users").update({credits:b.credits-s}).eq("id",t.state.profile.id),await k.from("mini_leagues").update({pot:s}).eq("id",r.id),await k.from("mini_league_members").insert({league_id:r.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=b.credits-s);const u=document.getElementById("nav-credits");u&&(u.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),a(`Mini League créée ! ${s.toLocaleString("fr")} cr. déduits.`,"success"),bt(e,t,r.id)})}function Zn(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),a=l=>{t.remove(),e(l)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>a(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>a(i.value.trim())),i.addEventListener("keydown",l=>{l.key==="Enter"&&a(i.value.trim())}),t.addEventListener("click",l=>{l.target===t&&a(null)})})}async function _o(e,t,i,a){const{toast:l,state:d}=t,s=d.profile.id,{data:c}=await k.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!c){l("Mini League introuvable","error");return}if(c.status!=="waiting"){l("Cette Mini League a déjà démarré","warning");return}const{count:f}=await k.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(f>=c.max_players){l("La Mini League est complète","warning");return}if(a==="private"){const n=await Zn();if(n===null)return;if(c.password!==n){l("Mot de passe incorrect","error");return}}const o=c.entry_fee||100,{data:r}=await k.from("users").select("credits").eq("id",s).single();if(((r==null?void 0:r.credits)||0)<o){l(`Crédits insuffisants — il te faut ${o.toLocaleString("fr")} cr. (solde : ${((r==null?void 0:r.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:m}=await k.from("mini_league_members").insert({league_id:i,user_id:s});if(m){l("Erreur inscription : "+m.message,"error");return}const{error:b}=await k.from("users").update({credits:r.credits-o}).eq("id",s),{error:u}=await k.from("mini_leagues").update({pot:(c.pot||0)+o}).eq("id",i);(b||u)&&console.error("Erreur post-inscription:",b,u),d.profile&&(d.profile.credits=r.credits-o);const T=document.getElementById("nav-credits");T&&(T.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`✅ Inscrit ! −${o.toLocaleString("fr")} cr. · Pot : ${((c.pot||0)+o).toLocaleString("fr")} cr.`,"success"),bt(e,t,i)}async function Qn(e,t,i,a){const{toast:l,state:d}=t,s=d.profile.id;if(!confirm(`Te désinscrire et récupérer ${a.toLocaleString("fr")} cr. ?`))return;const{data:c}=await k.from("mini_leagues").select("pot,status").eq("id",i).single();if(!c||c.status!=="waiting"){l("Impossible — la league a déjà démarré","error");return}const{data:f}=await k.from("users").select("credits").eq("id",s).single();await k.from("mini_leagues").update({pot:Math.max(0,(c.pot||0)-a)}).eq("id",i),await k.from("users").update({credits:((f==null?void 0:f.credits)||0)+a}).eq("id",s),await k.from("mini_league_members").delete().eq("league_id",i).eq("user_id",s),d.profile&&(d.profile.credits=((f==null?void 0:f.credits)||0)+a);const o=document.getElementById("nav-credits");o&&(o.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`↩️ Désinscrit · +${a.toLocaleString("fr")} cr. remboursés`,"success"),$t(e,t,"waiting")}async function yi(e,t,i,a,l){const{toast:d}=t;if(!confirm(`Supprimer définitivement "${a}" et tous ses matchs/membres ? Action irréversible.`))return;await k.from("mini_league_matches").delete().eq("league_id",i),await k.from("mini_league_members").delete().eq("league_id",i);const{error:s}=await k.from("mini_leagues").delete().eq("id",i);if(s){d("Erreur suppression ("+s.message+")","error");return}d("Mini League supprimée avec succès","success"),$t(e,t,l)}async function er(e,t,i){await k.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),$t(e,t,"archived")}async function bt(e,t,i){var R,C,F,M,Y,de,re,P,X;const{state:a,toast:l}=t,d=a.profile.id,[{data:s},{data:c},{data:f}]=await Promise.all([k.from("mini_leagues").select("*").eq("id",i).single(),k.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),k.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!s){l("Introuvable","error"),await $t(e,t);return}const o=(c||[]).some(U=>U.user_id===d),r=s.creator_id===d,m=(c||[]).map(U=>U.user).filter(Boolean),b=ko(m,f||[]),u=(f||[]).filter(U=>U.matchday===s.current_day),T=s.pot||0,n=s.entry_fee||100,p=u.length>0&&u.every(U=>U.status==="finished"||U.status==="bye"),A=s.current_day>=s.total_days,I=(c||[]).find(U=>U.user_id===d);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${s.name}</div>
        <div style="font-size:11px;color:#888">${s.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${s.max_players} · 💰 ${n} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${s.status==="active"?"#d1fae5":s.status==="finished"?"#f3e8ff":"#fef9c3"};color:${s.status==="active"?"#166534":s.status==="finished"?"#6b21a8":"#854d0e"}">
          ${s.status==="waiting"?"En attente":s.status==="active"?`J${s.current_day}/${s.total_days}`:"Terminée"}
        </div>
        ${T>0?`<div style="font-size:12px;font-weight:900;color:${xt};margin-top:4px">🏆 ${T.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${s.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${m.length}/${s.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${n} cr./joueur → Pot estimé : ${(n*m.length).toLocaleString("fr")} cr. (🥇${Math.floor(n*m.length*.7).toLocaleString("fr")} · 🥈${Math.floor(n*m.length*.2).toLocaleString("fr")} · 🥉${Math.floor(n*m.length*.1).toLocaleString("fr")})</div>
        ${m.map(U=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${U.club_color2||Lt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${U.club_color1||"#fff"}">${(U.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${U.club_name||U.pseudo}</div><div style="font-size:11px;color:#999">@${U.pseudo}</div></div>
            ${U.id===s.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${r&&m.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${n} cr. × ${m.length})</button>`:""}
        ${r?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${o?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${n} cr.)</button>`}
        ${o&&!r?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${n.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${s.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${s.current_day} / ${s.total_days}</div>
        ${u.map(U=>Ri(U,m,d,o)).join("")}
        ${r&&p&&!A?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${r&&p&&A?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(s.status==="active"||s.status==="finished")&&b.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${T>0&&s.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${xt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((U,N)=>{const ne=T>0&&s.status==="finished"?N===0?Math.floor(T*.7):N===1?Math.floor(T*.2):N===2?Math.floor(T*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${U.userId===d?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${N===0?xt:N<3?Lt:"#555"}">${["🥇","🥈","🥉"][N]||N+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${U.clubName}</div><div style="font-size:10px;color:#999">@${U.pseudo}</div></td>
              <td style="text-align:center">${U.played}</td><td style="text-align:center">${U.won}-${U.drawn}-${U.lost}</td>
              <td style="text-align:center;color:${U.goalDiff>=0?Lt:"#cc2222"}">${U.goalDiff>=0?"+":""}${U.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${U.points}</td>
              ${T>0&&s.status==="finished"?`<td style="text-align:right;font-weight:700;color:${xt}">${ne?ne.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${s.status!=="waiting"&&s.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,s.status==="active"?s.current_day-1:s.current_day)},(U,N)=>N+1).reverse().map(U=>{const N=(f||[]).filter(ne=>ne.matchday===U);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${U}</div>${N.map(ne=>Ri(ne,m,d,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${r&&!s.is_archived&&s.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const q=s.status==="waiting"?"waiting":s.status==="active"?"active":"archived";if((R=document.getElementById("ml-back"))==null||R.addEventListener("click",()=>$t(e,t,q)),(C=document.getElementById("ml-start-btn"))==null||C.addEventListener("click",()=>tr(e,t,s,m)),(F=document.getElementById("ml-next-day"))==null||F.addEventListener("click",()=>ir(e,t,i)),(M=document.getElementById("ml-finish-btn"))==null||M.addEventListener("click",()=>$o(e,t,i,T,b,m)),(Y=document.getElementById("ml-join-now"))==null||Y.addEventListener("click",()=>_o(e,t,i,s.type)),(de=document.getElementById("ml-leave-btn"))==null||de.addEventListener("click",()=>Qn(e,t,i,n)),(re=document.getElementById("ml-delete-btn"))==null||re.addEventListener("click",()=>yi(e,t,i,s.name,"waiting")),(P=document.getElementById("ml-delete-now"))==null||P.addEventListener("click",()=>yi(e,t,i,s.name,q)),(X=document.getElementById("ml-archive-btn"))==null||X.addEventListener("click",()=>er(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(U=>{U.addEventListener("click",()=>{const N=u.find(ne=>ne.id===U.dataset.playMatch);N&&t.navigate("match-mini-league",{mlMatchId:N.id,leagueId:i})})}),s.status==="finished"&&I){const U=b.findIndex(N=>N.userId===d);U>=0&&U<3&&I.prize_amount>0&&setTimeout(()=>or(e,t,s,I,U),400)}}function Ri(e,t,i,a,l=!1){const d=m=>t.find(b=>b.id===m);if(e.is_bye){const m=d(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"?"} exempté(e)</div>`}const s=d(e.home_id),c=d(e.away_id),f=e.home_id===i||e.away_id===i,o=f&&e.status==="pending"&&a&&!l,r=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${f?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${f?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?Lt:"#999"}">${r}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"}</div>
    ${o?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function tr(e,t,i,a){const{toast:l,state:d}=t,s=nr(a.map(o=>o.id),i.mode),c=[];s.forEach((o,r)=>o.forEach(m=>c.push({league_id:i.id,matchday:r+1,home_id:m.home||m.bye,away_id:m.away||null,is_bye:!!m.bye,status:m.bye?"bye":"pending"})));const{error:f}=await k.from("mini_league_matches").insert(c);if(f){l("Erreur calendrier : "+f.message,"error");return}await k.from("mini_leagues").update({status:"active",current_day:1,total_days:s.length}).eq("id",i.id),l(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),bt(e,t,i.id)}async function ir(e,t,i){const{data:a}=await k.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),l=(a.current_day||0)+1;if(l>(a.total_days||0)){await $o(e,t,i,a.pot||0,null,null);return}await k.from("mini_leagues").update({current_day:l}).eq("id",i),t.toast(`Journée ${l} commencée !`,"success"),bt(e,t,i)}async function $o(e,t,i,a,l,d){const{toast:s,state:c}=t;let f=l,o=d;if(!f){const{data:m}=await k.from("mini_league_matches").select("*").eq("league_id",i),{data:b}=await k.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);o=(b||[]).map(u=>u.user).filter(Boolean),f=ko(o,m||[])}const r=[Math.floor(a*.7),Math.floor(a*.2),Math.floor(a*.1)];await Promise.all(f.slice(0,3).map((m,b)=>r[b]?k.from("mini_league_members").update({prize_amount:r[b],prize_claimed:!1}).eq("league_id",i).eq("user_id",m.userId):Promise.resolve())),await k.from("mini_leagues").update({status:"finished"}).eq("id",i),s("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),bt(e,t,i)}async function or(e,t,i,a,l){var b,u;const{state:d,toast:s}=t,c=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],f=["🥇","🥈","🥉"][l],o=a.prize_amount||c[l]||0,r=a.prize_claimed,m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",m.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${f}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${l===0?"Champion !":l===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${xt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${r?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${xt}">${o.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${l===0?"70%":l===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${r?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${xt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${o.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(m),(b=m.querySelector("#prize-close"))==null||b.addEventListener("click",()=>m.remove()),m.addEventListener("click",T=>{T.target===m&&m.remove()}),(u=m.querySelector("#claim-prize-btn"))==null||u.addEventListener("click",async()=>{const{data:T}=await k.from("users").select("credits").eq("id",d.profile.id).single();await k.from("users").update({credits:((T==null?void 0:T.credits)||0)+o}).eq("id",d.profile.id),await k.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",d.profile.id),d.profile&&(d.profile.credits=((T==null?void 0:T.credits)||0)+o);const n=document.getElementById("nav-credits");n&&(n.textContent=`💰 ${d.profile.credits.toLocaleString("fr")}`),s(`💰 +${o.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),m.remove(),bt(e,t,i.id)})}function nr(e,t){const a=e.length%2===0?[...e]:[...e,null],l=a.length;let d=a.slice(1);const s=[];for(let c=0;c<l-1;c++){const f=[],o=[a[0],...d];for(let r=0;r<l/2;r++){const m=o[r],b=o[l-1-r];m===null?f.push({bye:b}):b===null?f.push({bye:m}):f.push({home:m,away:b})}s.push(f),d=[d[d.length-1],...d.slice(0,-1)]}return t==="aller-retour"?[...s,...s.map(c=>c.map(f=>f.bye?f:{home:f.away,away:f.home}))]:s}function ko(e,t){const i={};return e.forEach(a=>{i[a.id]={userId:a.id,pseudo:a.pseudo,clubName:a.club_name||a.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(a=>a.status==="finished"&&!a.is_bye&&a.home_score!=null).forEach(a=>{const l=i[a.home_id],d=i[a.away_id];!l||!d||(l.played++,d.played++,l.goalsFor+=a.home_score,l.goalsAgainst+=a.away_score,d.goalsFor+=a.away_score,d.goalsAgainst+=a.home_score,a.home_score>a.away_score?(l.won++,l.points+=3,d.lost++):a.home_score<a.away_score?(d.won++,d.points+=3,l.lost++):(l.drawn++,l.points++,d.drawn++,d.points++),l.goalDiff=l.goalsFor-l.goalsAgainst,d.goalDiff=d.goalsFor-d.goalsAgainst)}),Object.values(i).sort((a,l)=>l.points-a.points||l.goalDiff-a.goalDiff||l.goalsFor-a.goalsFor)}async function Oi(e,t,i,a){var l,d;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:a};try{const s=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(k.getChannels?k.getChannels():[]).forEach(f=>{const o=f.topic||"";(o.includes("matchmaking")||o.includes("pvp-match"))&&k.removeChannel(f)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}s&&(await k.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await k.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await ai(e,t,"random",({deckId:s,formation:c,starters:f,subsRaw:o,gcCardsEnriched:r,gcDefs:m,stadiumDef:b})=>{const u=T=>rr(e,t,s,c,f,o,T,m||[],i);if(!r.length){u([]);return}ri(e,r,u)})}async function rr(e,t,i,a,l,d,s=[],c=[],f,o){const{state:r,navigate:m,toast:b}=t,u=r.profile.id;let T=!1,n=null;et(e);try{await k.rpc("cancel_matchmaking",{p_user_id:u})}catch{}try{await k.from("matchmaking_queue").delete().eq("user_id",u)}catch{}const{data:p}=await k.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",f).single();if(!p){b("Match introuvable","error"),We(e),m("mini-league");return}if(p.home_id!==u&&p.away_id!==u){b("Tu ne fais pas partie de ce match","error"),We(e),m("mini-league");return}const A=p.home_id===u,I=A?p.away:p.home,q=A?p.away_id:p.home_id,R=(F,M)=>{var Y;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${p.matchday}</div>
        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:#1A6B3C;display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid #22c55e">
              ✅
            </div>
            <div style="font-size:12px;font-weight:700">${r.profile.club_name||r.profile.pseudo}</div>
            <div style="font-size:11px;color:#22c55e">Prêt</div>
          </div>
          <div style="font-size:28px;font-weight:900;color:#FFD700">VS</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
            <div style="width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid rgba(255,255,255,0.2)">
              ⏳
            </div>
            <div style="font-size:12px;font-weight:700">${(I==null?void 0:I.club_name)||(I==null?void 0:I.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(Y=document.getElementById("lobby-cancel"))==null||Y.addEventListener("click",()=>{T=!0,clearInterval(n),We(e),m("mini-league")})},C=async(F,M)=>{T=!0,clearInterval(n),await new Promise(Y=>setTimeout(Y,600)),e.isConnected&&ar(e,t,F,M,s,c)};if(R(),A){let F=p.match_id;if(!F){const{data:Y,error:de}=await k.from("matches").insert({home_id:u,away_id:q,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(de||!Y){b("Erreur création match","error"),We(e),m("mini-league");return}F=Y.id,await k.from("mini_league_matches").update({match_id:F,status:"playing"}).eq("id",f)}const M=F;n=setInterval(async()=>{if(T){clearInterval(n);return}const{data:Y}=await k.from("matches").select("away_deck_id").eq("id",M).single();Y!=null&&Y.away_deck_id&&(clearInterval(n),C(M,!0))},1500)}else{let F=p.match_id;n=setInterval(async()=>{if(T){clearInterval(n);return}const{data:M}=await k.from("mini_league_matches").select("match_id").eq("id",f).single();M!=null&&M.match_id&&(clearInterval(n),F=M.match_id,await k.from("matches").update({away_deck_id:i}).eq("id",F),C(F,!1))},1500)}}async function ar(e,t,i,a,l=[],d=[]){var E;const{state:s,navigate:c,toast:f}=t,o=((E=s.params)==null?void 0:E.leagueId)||null,r=a?"p1":"p2",m=a?"p2":"p1",b=(l||[]).map(g=>g.id),u=(l||[]).map(g=>({id:g.id,gc_type:g.gc_type,_gcDef:g._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:T}=await k.from("matches").select("*").eq("id",i).single();if(!T){f("Match introuvable","error"),c("mini-league");return}async function n(){const[{data:g},{data:x},{data:y},{data:h}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:T.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:T.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",T.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",T.away_id).single()]),v=L=>{const B=Number(L.evolution_bonus)||0;return{cardId:L.card_id,position:L.position,id:L.id,firstname:L.firstname,name:L.surname_encoded,country_code:L.country_code,club_id:L.club_id,job:L.job,job2:L.job2,note_g:(Number(L.note_g)||0)+(L.job==="GK"||L.job2==="GK"&&Number(L.note_g)>0?B:0),note_d:(Number(L.note_d)||0)+(L.job==="DEF"||L.job2==="DEF"&&Number(L.note_d)>0?B:0),note_m:(Number(L.note_m)||0)+(L.job==="MIL"||L.job2==="MIL"&&Number(L.note_m)>0?B:0),note_a:(Number(L.note_a)||0)+(L.job==="ATT"||L.job2==="ATT"&&Number(L.note_a)>0?B:0),evolution_bonus:B,rarity:L.rarity,skin:L.skin,hair:L.hair,hair_length:L.hair_length,clubName:L.club_encoded_name||null,clubLogo:L.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},_=((g==null?void 0:g.starters)||[]).map(L=>v(L)),z=((x==null?void 0:x.starters)||[]).map(L=>v(L)),$=(g==null?void 0:g.formation)||"4-4-2",S=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:(()=>{const L=yt(_,$);return stadiumDef?jt(L,stadiumDef):L})(),p2Team:yt(z,S),p1Subs:(()=>{const L=((g==null?void 0:g.subs)||[]).map(B=>v(B));return stadiumDef&&Nt(L,stadiumDef),L})(),p2Subs:((x==null?void 0:x.subs)||[]).map(L=>v(L)),p1Formation:$,p2Formation:S,p1Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?b:[],gc_p2:a?[]:b,gcCardsFull_p1:a?u:[],gcCardsFull_p2:a?[]:u,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let p=T.game_state&&Object.keys(T.game_state).length?T.game_state:null;if(!p)if(a){p=await n();const{data:g}=await k.from("matches").select("game_state").eq("id",i).single();!(g!=null&&g.game_state)||!Object.keys(g.game_state).length?await k.from("matches").update({game_state:p,turn_user_id:T.home_id}).eq("id",i):p=g.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let g=0;g<60&&!p;g++){await new Promise(y=>setTimeout(y,400));const{data:x}=await k.from("matches").select("game_state").eq("id",i).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(p=x.game_state)}if(!p){f("Erreur de synchronisation","error"),c("mini-league");return}p.gc_p2=b,p.gcCardsFull_p2=u,await k.from("matches").update({game_state:p}).eq("id",i)}let A=!1,I=!1,q=!1,R=null,C=!1;const F=new Set,M=new Set;function Y(g){var L,B;try{k.removeChannel(de)}catch{}const x=p[r+"Score"]||0,y=p[m+"Score"]||0;if(!q){q=!0;const G=g.winner_id||(x>y?s.profile.id:y>x?"opp":null),O=G===s.profile.id?"win":G?"loss":null;O&&ii(()=>Promise.resolve().then(()=>oo),void 0).then(H=>H.applyOwnEvolution(s.profile.id,O)).catch(()=>{})}if(!I){const G=p.p1Score||0,O=p.p2Score||0,H=(p.usedGc_p1||[]).length,Q=(p.usedGc_p2||[]).length,V=g.winner_id||(G>O?T.home_id:O>G?T.away_id:null);(V?s.profile.id===V:s.profile.id<(a?T.away_id:T.home_id))&&(I=!0,Xi({player1Id:T.home_id,player2Id:T.away_id,score1:G,score2:O,gc1:H,gc2:Q}).catch(ae=>console.warn("[FriendMatch] updateStats:",ae)))}let h,v;g.winner_id?(h=g.winner_id===s.profile.id,v=!1):g.forfeit?(h=x>y,v=!1):(v=x===y,h=x>y),(L=document.getElementById("pvp-end-overlay"))==null||L.remove();const _=document.createElement("div");_.id="pvp-end-overlay",_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const z=v?"🤝":h?"🏆":"😞",$=v?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",S=v?"#fff":h?"#FFD700":"#ff6b6b";_.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${S}">${$}</div>
      <div style="font-size:18px">${p[r+"Name"]} ${x} – ${y} ${p[m+"Name"]}</div>
      ${g.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(_),(B=_.querySelector("#pvp-end-home"))==null||B.addEventListener("click",()=>{_.remove(),We(e),o?c("mini-league",{openLeagueId:o}):c("mini-league")})}const de=k.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},g=>{const x=g.new;try{if(x.status==="finished"||x.forfeit){if(A||(A=!0,R&&(clearInterval(R),R=null),x.game_state&&(p=x.game_state),p.phase==="finished"&&!x.forfeit&&document.getElementById("pvp-home")))return;Y(x);return}if(x.game_state){const y=p;p=x.game_state;const h=p._lastGC;if(h&&h.seq&&!M.has(h.seq)&&(M.add(h.seq),h.by!==r)){Ae(h.type,h.by,()=>ye());return}const v=y[r+"Score"]||0,_=y[m+"Score"]||0,z=p[r+"Score"]||0,$=p[m+"Score"]||0,S=z>v,L=$>_;if((S||L)&&!F.has(p.round)){F.add(p.round);const B=[...p.log||[]].reverse().find(O=>O.isGoal),G=((B==null?void 0:B.homePlayers)||[]).map(O=>({name:O.name,note:O.note,portrait:O.portrait,job:O.job}));_e(G,z,$,S,()=>ye());return}ye()}}catch(y){console.error("[PvP] crash:",y)}}).subscribe();async function re(g){Object.assign(p,g),p.lastActionAt=new Date().toISOString();const{error:x}=await k.from("matches").update({game_state:p}).eq("id",i);x&&f("Erreur de synchronisation","error");try{ye()}catch(y){console.error("[PvP] renderPvpScreen crash:",y)}}async function P(){if(A)return;A=!0,R&&(clearInterval(R),R=null);const g=a?T.away_id:T.home_id,x=a?"p2":"p1",y=a?"p1":"p2",h={...p,[x+"Score"]:3,[y+"Score"]:0,phase:"finished"};try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:g,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",i)}catch{}try{k.removeChannel(de)}catch{}setTimeout(()=>{We(e),c("mini-league")},800)}const X={BOOST_STAT:({value:g=1,count:x=1,roles:y=[]},h,v)=>{const _=h[r+"Team"],z=Object.entries(_).filter(([$])=>!y.length||y.includes($)).flatMap(([$,S])=>S.filter(L=>!L.used).map(L=>({...L,_line:$})));if(!z.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(h);return}U(z,x,`Choisir ${x} joueur(s) à booster (+${g})`,$=>{$.forEach(S=>{const L=(_[S._line]||[]).find(B=>B.cardId===S.cardId);L&&(L.boost=(L.boost||0)+g,h.log.push({text:`⚡ +${g} sur ${L.name}`,type:"info"}))}),h[r+"Team"]=_,v(h)})},DEBUFF_STAT:({value:g=1,count:x=1,roles:y=[],target:h="ai"},v,_)=>{const z=h==="home"?r:m,$=v[z+"Team"],S=h==="home"?"allié":"adverse",L=Object.entries($).filter(([B])=>!y.length||y.includes(B)).flatMap(([B,G])=>G.map(O=>({...O,_line:B})));if(!L.length){v.log.push({text:`🎯 Aucun joueur ${S}`,type:"info"}),_(v);return}U(L,x,`Choisir ${x} joueur(s) ${S}(s) (-${g})`,B=>{B.forEach(G=>{const O=($[G._line]||[]).find(H=>H.cardId===G.cardId);O&&(O.boost=(O.boost||0)-g,v.log.push({text:`🎯 -${g} sur ${O.name}`,type:"info"}))}),v[z+"Team"]=$,_(v)})},GRAY_PLAYER:({count:g=1,roles:x=[],target:y="ai"},h,v)=>{const _=y==="home"?r:m,z=h[_+"Team"],$=y==="home"?"allié":"adverse",S=Object.entries(z).filter(([L])=>!x.length||x.includes(L)).flatMap(([L,B])=>B.filter(G=>!G.used).map(G=>({...G,_line:L})));if(!S.length){h.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),v(h);return}U(S,g,`Choisir ${g} joueur(s) ${$}(s) à exclure`,L=>{const B="usedCardIds_"+_,G=new Set(h[B]||[]);L.forEach(O=>{const H=(z[O._line]||[]).find(Q=>Q.cardId===O.cardId);H&&(H.used=!0,G.add(O.cardId),h.log.push({text:`❌ ${H.name} exclu !`,type:"info"}))}),h[B]=[...G],h[_+"Team"]=z,v(h)})},REVIVE_PLAYER:({count:g=1,roles:x=[]},y,h)=>{const v=y[r+"Team"],_=Object.entries(v).filter(([z])=>!x.length||x.includes(z)).flatMap(([z,$])=>$.filter(S=>S.used).map(S=>({...S,_line:z})));if(!_.length){y.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(y);return}U(_,g,`Choisir ${g} joueur(s) à ressusciter`,z=>{z.forEach($=>{const S=(v[$._line]||[]).find(L=>L.cardId===$.cardId);S&&(S.used=!1,y.log.push({text:`💫 ${S.name} ressuscité !`,type:"info"}))}),y[r+"Team"]=v,h(y)})},REMOVE_GOAL:({},g,x)=>{const y=m+"Score";g[y]>0?(g[y]--,g.log.push({text:"🚫 Dernier but annulé !",type:"info"})):g.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(g)},ADD_GOAL_DRAW:({},g,x)=>{g[r+"Score"]===g[m+"Score"]?(g[r+"Score"]++,g.log.push({text:"🎯 But bonus !",type:"info"})):g.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(g)},ADD_SUB:({value:g=1},x,y)=>{x.maxSubs=(x.maxSubs||3)+g,x.log.push({text:`🔄 +${g} remplacement(s)`,type:"info"}),y(x)},CUSTOM:({},g,x)=>x(g)};function U(g,x,y,h){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let _=[];function z(){var S,L;const $=g.map(B=>{const G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[B._line]||"#555",O=je(B,B._line)+(B.boost||0),Q=_.find(ie=>ie.cardId===B.cardId)?"#FFD700":"rgba(255,255,255,0.25)",V=B.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${B.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Q};background:${G};overflow:hidden;cursor:pointer;${V}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${B.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${O}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${B._line}</div>
        </div>`}).join("");v.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${y}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${_.length}/${x}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${$}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${_.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${_.length}/${x})
          </button>
        </div>`,(S=v.querySelector("#pp-close"))==null||S.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(B=>{B.addEventListener("click",()=>{const G=B.dataset.cid,O=g.find(Q=>Q.cardId===G),H=_.findIndex(Q=>Q.cardId===G);O&&(H>-1?_.splice(H,1):_.length<x&&_.push(O),z())})}),(L=v.querySelector("#pp-confirm"))==null||L.addEventListener("click",()=>{v.remove(),h(_)})}z(),document.body.appendChild(v)}async function N(g,x){const h=(p["gcCardsFull_"+r]||[]).find($=>$.id===g),v=(h==null?void 0:h._gcDef)||(p.gcDefs||[]).find($=>{var S;return $.name===x||((S=$.name)==null?void 0:S.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),_=[...p["usedGc_"+r]||[],g],z={type:x,by:r,seq:(p._gcAnimSeq||0)+1};M.add(z.seq),Ae(x,r,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const S=X[v.effect_type];if(S){const L={...p};S(v.effect_params||{},L,async B=>{B["usedGc_"+r]=_,B._lastGC=z,B._gcAnimSeq=z.seq,await re(B)});return}}const $={...p};switch(x){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const S=m+"Score";$[S]>0&&($[S]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+r]=_,$._lastGC=z,$._gcAnimSeq=z.seq,await re($)})}function ne(g,x){const y="usedCardIds_"+g,h=new Set(p[y]||[]);x.forEach(v=>h.add(v)),p[y]=[...h]}function pe(){for(const g of["p1","p2"]){const x=new Set(p["usedCardIds_"+g]||[]),y=p[g+"Team"];if(y)for(const h of["GK","DEF","MIL","ATT"])(y[h]||[]).forEach(v=>{v.used=x.has(v.cardId)})}}function ye(){var nt,gt,le,Ee,te,ue;if(p.phase==="reveal")return Le();if(p.phase==="midfield")return ve();if(p.phase==="finished")return w();const g=p[r+"Team"],x=p[m+"Team"];pe();const y=p[r+"Score"],h=p[m+"Score"],v=p[r+"Name"],_=p[m+"Name"],z=p.phase===r+"-attack",$=p.phase===r+"-defense",S=Array.isArray(p["selected_"+r])?p["selected_"+r]:[],L=S.map(ee=>ee.cardId),B=window.innerWidth>=700,G=p[r+"Subs"]||[],O=p["usedSubIds_"+r]||[],H=G.filter(ee=>!O.includes(ee.cardId)),Q=p["gcCardsFull_"+r]||[],V=p["usedGc_"+r]||[],ie=Q.filter(ee=>!V.includes(ee.id)),ae=p.boostOwner===r&&!p.boostUsed,fe=!["GK","DEF","MIL","ATT"].some(ee=>(x[ee]||[]).some(ce=>!ce.used)),me=[...g.MIL||[],...g.ATT||[]].filter(ee=>!ee.used),$e=z&&fe&&me.length===0?[...g.GK||[],...g.DEF||[]].filter(ee=>!ee.used).map(ee=>ee.cardId):[];function ke(ee,ce,Be){var Si,zi;const Te=ee._gcDef,tt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Te==null?void 0:Te.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",it={purple:"#b06ce0",light_blue:"#00d4ef"}[Te==null?void 0:Te.color]||"#b06ce0",rt=(Te==null?void 0:Te.name)||ee.gc_type,st=(Te==null?void 0:Te.effect)||((Si=Re[ee.gc_type])==null?void 0:Si.desc)||"",ct=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,kt=((zi=Re[ee.gc_type])==null?void 0:zi.icon)||"⚡",pt=Math.round(Be*.22),ht=Math.round(Be*.22),Et=Be-pt-ht,Kt=rt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ee.id}" data-gc-type="${ee.gc_type}"
        style="box-sizing:border-box;width:${ce}px;height:${Be}px;border-radius:10px;border:2px solid ${it};background:${tt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${pt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ce-6}px">${rt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Et}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ct?`<img src="${ct}" style="max-width:${ce-10}px;max-height:${Et-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Et*.55)}px">${kt}</span>`}
        </div>
        <div style="height:${ht}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${st.slice(0,38)}</span>
        </div>
      </div>`}function qe(ee,ce){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ee}px;height:${ce}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ce*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ce*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ce*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const Ce=(ee,ce)=>ce?qe(130,175):ke(ee,130,175),Oe=(ee,ce)=>ce?qe(68,95):ke(ee,68,95),Fe=B?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",He=z?be(r)?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${S.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Fe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${S.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${_}</div>`,De=z&&!be(r)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':z||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${S.length}/3 sélectionné(s)</div>`:"",Ve=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${B?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${H.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':H.map(ee=>`<div class="pvp-sub-btn" data-sub-id="${ee.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(ee,B?76:44,B?100:58)}</div>`).join("")}
    </div>`,Ne=z?"attack":$?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(g,p[r+"Formation"],Ne,L,300,300,$e)}
      </div>
    </div>`;function Ke(ee){if(ee.type==="duel"&&(ee.homeTotal!=null||ee.aiTotal!=null)){const ce=(ee.homeTotal||0)>=(ee.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(ee.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ee.homePlayers||[]).map(Be=>dt(Be)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ce?20:14}px;font-weight:900;color:${ce?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${ee.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ce?14:20}px;font-weight:900;color:${ce?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${ee.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ee.aiPlayers||[]).map(Be=>dt(Be)).join("")}
            </div>
          </div>
          ${ee.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${ee.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${ee.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ee.type==="goal"?700:400};padding:3px 2px">${ee.text||""}</div>`}const Je=(()=>{var ce,Be;if($&&((ce=p.pendingAttack)!=null&&ce.players)){const Te=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${_} ATTAQUE — Défendez !</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#ff6b6b",Te.total)}
        </div>`}if(z&&((Be=p.pendingAttack)!=null&&Be.players)){const Te=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#00ff88",Te.total)}
        </div>`}const ee=(p.log||[]).slice(-1)[0];return ee?'<div style="padding:2px 4px">'+Ke(ee)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ze=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${y} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${_}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",B?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ze}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ve}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ue}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${He}${De}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ie.map(ee=>Ce(ee,!1)).join("")}
            ${ae?Ce(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ze}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(g,p[r+"Formation"],Ne,L,300,300,$e)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ie.map(ee=>Oe(ee,!1)).join("")}
            ${ae?Oe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${z&&H.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${z&&H.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${z&&H.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${z&&H.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${H.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(p["usedSubIds_"+r]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(p["usedSubIds_"+r]||[]).length}/${p.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${He}${De}</div>
        </div>
      </div>`;function Qe(){const ee=e.querySelector(".match-screen");if(!ee)return;const ce=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ee.style.height=ce+"px",ee.style.minHeight=ce+"px",ee.style.maxHeight=ce+"px",ee.style.overflow="hidden";const Be=e.querySelector("#mobile-action-bar"),Te=e.querySelector("#mobile-play-area");Be&&Te&&(Te.style.paddingBottom=Be.offsetHeight+"px")}if(Qe(),setTimeout(Qe,120),setTimeout(Qe,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Qe),window.visualViewport.addEventListener("scroll",Qe)),window.addEventListener("resize",Qe)),function(){const ce=e.querySelector(".terrain-wrapper svg");ce&&(ce.removeAttribute("width"),ce.removeAttribute("height"),ce.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ce.setAttribute("viewBox","-26 -26 352 352"),ce.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ee=>{ee.addEventListener("click",()=>{if(!z&&!$)return;const ce=ee.dataset.cardId,Be=ee.dataset.role,Te=(g[Be]||[]).find(st=>st.cardId===ce);if(!Te||Te.used)return;const tt=$e.includes(ce);if(z&&!["MIL","ATT"].includes(Be)&&!tt)return;Array.isArray(p["selected_"+r])||(p["selected_"+r]=[]);const it=p["selected_"+r],rt=it.findIndex(st=>st.cardId===ce);rt>-1?it.splice(rt,1):it.length<3&&it.push({...Te,_role:Be}),ye()})}),e.querySelectorAll(".match-used-hit").forEach(ee=>{ee.addEventListener("click",()=>J(ee.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ee=>{ee.addEventListener("click",()=>J())}),(nt=e.querySelector("#pvp-sub-open"))==null||nt.addEventListener("click",()=>J()),e.querySelectorAll(".pvp-gc-mini").forEach(ee=>{ee.addEventListener("click",()=>Ie(ee.dataset.gcId,ee.dataset.gcType))}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>xe()),(le=e.querySelector("#pvp-action"))==null||le.addEventListener("click",ee=>{z?ee.currentTarget.dataset.pass==="1"||!be(r)?Z():K():$&&se()}),(Ee=e.querySelector("#pvp-quit"))==null||Ee.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&P()}),(te=e.querySelector("#pvp-view-opp"))==null||te.addEventListener("click",()=>ge()),(ue=e.querySelector("#pvp-toggle-history"))==null||ue.addEventListener("click",()=>W()),R&&(clearInterval(R),R=null),(z||$)&&!A){let ee=30,ce=!1;const Be=()=>document.getElementById("pvp-timer"),Te=()=>{Be()&&(Be().textContent=ee+"s",Be().style.color=ce?"#ff4444":"#fff")};Te(),R=setInterval(()=>{ee--,ee<0?ce?(clearInterval(R),R=null,z&&!be(r)?Z():P()):(ce=!0,ee=15,Te()):Te()},1e3)}}function Le(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[m+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(p[m+"Team"],p[m+"Formation"],null,[],300,300)}</div>
    </div>`,r==="p1"&&setTimeout(async()=>{await re({phase:"midfield"})},5e3)}let we=!1;function ve(){if(we)return;const g=p[r+"Team"].MIL||[],x=p[m+"Team"].MIL||[];function y(ie){return ie.reduce((ae,fe)=>ae+je(fe,"MIL"),0)}function h(ie){let ae=0;for(let fe=0;fe<ie.length-1;fe++){const me=at(ie[fe],ie[fe+1]);me==="#00ff88"?ae+=2:me==="#FFD700"&&(ae+=1)}return ae}const v=y(g)+h(g),_=y(x)+h(x),z=v>=_;function $(ie,ae,fe){return`<div id="duel-row-${fe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ae}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${ie.map((me,$e)=>{const ke=$e<ie.length-1?at(me,ie[$e+1]):null,qe=!ke||ke==="#ff3333"||ke==="#cc2222",Ce=ke==="#00ff88"?"+2":ke==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${fe}" data-idx="${$e}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...me,note:je(me,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${$e<ie.length-1?`<div class="duel-link duel-link-${fe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${qe?"rgba(255,255,255,0.12)":ke};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${qe?"none":`0 0 8px ${ke}`}">
              ${Ce?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ke}">${Ce}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${fe}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${y(ie)} + ${h(ie)} liens = <b style="color:#fff">${y(ie)+h(ie)}</b>
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
      ${$(g,p[r+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(x,p[m+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const S=(ie,ae)=>e.querySelectorAll(ie).forEach((fe,me)=>{setTimeout(()=>{fe.style.opacity="1",fe.style.transform="translateY(0) scale(1)"},ae+me*90)});S(".duel-card-me",150),S(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ie,ae)=>setTimeout(()=>{ie.style.opacity="1"},ae*70)),900),setTimeout(()=>{const ie=e.querySelector("#pvp-vs");ie&&(ie.style.opacity="1",ie.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ae=>ae.style.opacity="1")},1250);function L(ie,ae,fe){const me=document.getElementById(ie);if(!me)return;const $e=performance.now(),ke=qe=>{const Ce=Math.min(1,(qe-$e)/fe);me.textContent=Math.round(ae*(1-Math.pow(1-Ce,3))),Ce<1?requestAnimationFrame(ke):me.textContent=ae};requestAnimationFrame(ke)}setTimeout(()=>{L("pvp-score-me",v,800),L("pvp-score-opp",_,800)},1500);const B=p.p1Team.MIL||[],G=p.p2Team.MIL||[],O=y(B)+h(B),H=y(G)+h(G),Q=O>=H?"p1":"p2";let V=p.boostValue;V==null&&(V=ni(),p.boostValue=V,p.boostOwner=Q,p.boostUsed=!1),we=!0,setTimeout(()=>{const ie=e.querySelector("#duel-row-"+(z?"me":"opp")),ae=e.querySelector("#duel-row-"+(z?"opp":"me")),fe=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),$e=z?fe:me,ke=z?me:fe;$e&&($e.style.fontSize="80px",$e.style.color=z?"#FFD700":"#ff6b6b",$e.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),ke&&(ke.style.opacity="0.25"),setTimeout(()=>{ie&&(ie.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ie.style.zIndex="5"),setTimeout(()=>{const qe=document.getElementById("duel-shock");qe&&(qe.style.animation="shockwave .5s ease-out forwards"),ae&&(ae.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Fe;const qe=document.getElementById("pvp-duel-finale");if(!qe)return;const Ce=p.boostOwner===r?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+V+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Oe=r==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;qe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+p[r+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[m+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ce+Oe,qe.style.transition="opacity .45s ease",qe.style.opacity="1",qe.style.pointerEvents="auto",(Fe=document.getElementById("pvp-start-match"))==null||Fe.addEventListener("click",async()=>{const He=Q;await re({phase:He+"-attack",attacker:He,round:1,boostValue:V,boostUsed:!1,boostOwner:He})})},600)},700)},2800)}function _e(g,x,y,h,v){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const z=Array.from({length:10},(B,G)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${G%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][G%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};_.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${z}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${h?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${x} – ${y}
      </div>
      ${g!=null&&g.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${g.map(B=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[B.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${B.portrait?`<img src="${B.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(B.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(_);let S=!1;const L=()=>{S||(S=!0,_.remove(),setTimeout(()=>v(),50))};_.addEventListener("click",L),setTimeout(L,3500)}function Ae(g,x,y){var V,ie;const h=(p.gcDefs||[]).find(ae=>{var fe;return ae.name===g||((fe=ae.name)==null?void 0:fe.toLowerCase().trim())===(g==null?void 0:g.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",z=(h==null?void 0:h.name)||g,$=(h==null?void 0:h.effect)||((V=Re[g])==null?void 0:V.desc)||"",S=h!=null&&h.image_url?`/icons/${h.image_url}`:null,L=((ie=Re[g])==null?void 0:ie.icon)||"⚡",G=x===r?"Vous":p[x+"Name"]||"Adversaire",O=document.createElement("div");O.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",O.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${_}66}50%{box-shadow:0 0 60px ${_}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${_};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${G} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${_};background:${v};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${z.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${z}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${L}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(O);let H=!1;const Q=()=>{H||(H=!0,O.remove(),setTimeout(()=>y&&y(),50))};O.addEventListener("click",Q),setTimeout(Q,3e3)}function Ie(g,x){var O,H,Q,V;const h=(p["gcCardsFull_"+r]||[]).find(ie=>ie.id===g),v=h==null?void 0:h._gcDef,_={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",z={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",$=(v==null?void 0:v.name)||x,S=(v==null?void 0:v.effect)||((O=Re[x])==null?void 0:O.desc)||"Carte spéciale.",L=v!=null&&v.image_url?`/icons/${v.image_url}`:null,B=((H=Re[x])==null?void 0:H.icon)||"⚡",G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",G.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${z};background:${_};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${z}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${B}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${S}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(G),(Q=G.querySelector("#pvp-gc-back"))==null||Q.addEventListener("click",()=>G.remove()),(V=G.querySelector("#pvp-gc-use"))==null||V.addEventListener("click",()=>{G.remove(),N(g,x)})}function xe(){var h;const g=p[r+"Team"],x=Object.entries(g).flatMap(([v,_])=>(_||[]).filter(z=>!z.used).map(z=>({...z,_line:v})));if(!x.length)return;const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",y.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(v=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",z=je(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${_};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(y),(h=y.querySelector("#bp-close"))==null||h.addEventListener("click",()=>y.remove()),y.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const _=v.dataset.cid,z=x.find(S=>S.cardId===_);if(!z)return;const $=(g[z._line]||[]).find(S=>S.cardId===_);$&&($.boost=($.boost||0)+p.boostValue),y.remove(),await re({[r+"Team"]:g,boostUsed:!0})})})}function J(g=null){var H,Q;if(!(p.phase===r+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const y=p[r+"Team"],h=p["usedSubIds_"+r]||[],v=p.maxSubs||3;if(h.length>=v){f(`Maximum ${v} remplacements atteint`,"warning");return}const _=Object.entries(y).flatMap(([V,ie])=>(ie||[]).filter(ae=>ae.used).map(ae=>({...ae,_line:V}))),z=(p[r+"Subs"]||[]).filter(V=>!h.includes(V.cardId));if(!_.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!z.length){f("Aucun remplaçant disponible","warning");return}let $=Math.max(0,_.findIndex(V=>V.cardId===g));const S=((H=_[$])==null?void 0:H._line)||((Q=_[$])==null?void 0:Q.job);let L=Math.max(0,z.findIndex(V=>V.job===S)),B=!1;const G=document.createElement("div");G.id="pvp-sub-overlay",G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function O(){var ke,qe,Ce,Oe,Fe,He;const V=_[$],ie=z[L],ae=Math.min(130,Math.round((window.innerWidth-90)/2)),fe=Math.round(ae*1.35),me=De=>`background:rgba(255,255,255,0.12);border:none;color:${De?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${De?"default":"pointer"};flex-shrink:0`;G.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${me(L===0)}" ${L===0?"disabled":""}>▲</button>
          <div>${ie?Ye({...ie,used:!1,boost:0},ae,fe):"<div>—</div>"}</div>
          <button id="pin-down" style="${me(L>=z.length-1)}" ${L>=z.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${L+1}/${z.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${me($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${V?Ye({...V,used:!1,boost:0},ae,fe):"<div>—</div>"}</div>
          <button id="pout-down" style="${me($>=_.length-1)}" ${$>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${_.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ke=G.querySelector("#psub-close"))==null||ke.addEventListener("click",()=>G.remove()),(qe=G.querySelector("#pout-up"))==null||qe.addEventListener("click",()=>{$>0&&($--,O())}),(Ce=G.querySelector("#pout-down"))==null||Ce.addEventListener("click",()=>{$<_.length-1&&($++,O())}),(Oe=G.querySelector("#pin-up"))==null||Oe.addEventListener("click",()=>{L>0&&(L--,O())}),(Fe=G.querySelector("#pin-down"))==null||Fe.addEventListener("click",()=>{L<z.length-1&&(L++,O())});const $e=(De,Ve,Ne,Ue)=>{const Ke=G.querySelector("#"+De);if(!Ke)return;let Je=0;Ke.addEventListener("touchstart",Ze=>{Je=Ze.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",Ze=>{const Qe=Ze.changedTouches[0].clientY-Je;if(Math.abs(Qe)<30)return;const nt=Ve();Qe<0&&nt<Ue-1?(Ne(nt+1),O()):Qe>0&&nt>0&&(Ne(nt-1),O())},{passive:!0})};$e("pin-panel",()=>L,De=>L=De,z.length),$e("pout-panel",()=>$,De=>$=De,_.length),(He=G.querySelector("#psub-confirm"))==null||He.addEventListener("click",async De=>{if(De.preventDefault(),De.stopPropagation(),B)return;B=!0;const Ve=_[$],Ne=z[L];if(!Ve||!Ne)return;const Ue=Ve._line,Ke=(y[Ue]||[]).findIndex(Qe=>Qe.cardId===Ve.cardId);if(Ke===-1){f("Erreur : joueur introuvable","error"),G.remove();return}const Je={...Ne,_line:Ue,position:Ve.position,used:!1,boost:0};y[Ue].splice(Ke,1,Je);const Ze=[...h,Ne.cardId];G.remove(),oe(Ve,Ne,async()=>{await re({[r+"Team"]:y,[m+"Team"]:p[m+"Team"],["usedSubIds_"+r]:Ze})})})}document.body.appendChild(G),O()}function oe(g,x,y){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const _=(S,L,B)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${L};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${B}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[S.job]||"#555"};border:3px solid ${L};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(S)?`<img src="${Pe(S)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(S.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${_(x,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${_(g,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let z=!1;const $=()=>{z||(z=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",$),setTimeout($,2200)}function ge(){var x;const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",g.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[m+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(p[m+"Team"],p[m+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(g),(x=g.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>g.remove())}function W(){var h;const g=p.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const y=v=>{var z,$,S;if(v.type==="duel"){const L=v.isGoal,B=v.homeScored&&r==="p1"||!v.homeScored&&L&&r==="p2",G=v.homeScored?"#FFD700":L?"#ff6b6b":"rgba(255,255,255,0.3)",O=L?B?"⚽ BUT !":"⚽ BUT adversaire !":(z=v.homePlayers)!=null&&z.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${L?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${G};margin-bottom:4px">
          <div style="font-size:9px;color:${G};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${O}</div>
          ${($=v.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${ot(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
          ${(S=v.aiPlayers)!=null&&S.length?`<div style="opacity:0.7">${ot(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
        </div>`}return v.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${v.outPlayer?Ye({...v.outPlayer,used:!0,_line:v.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${v.inPlayer?Ye({...v.inPlayer,_line:v.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${v.type==="goal"?"#FFD700":v.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${v.text||""}</div>
      </div>`};x.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${g.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...g].reverse().map(y).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>x.remove())}async function Z(){if(p.phase!==r+"-attack")return;const g=r==="p1"?"p2":"p1",x=(p.round||0)+1,y=[...p.log||[]];y.push({type:"info",text:`⏭️ ${p[r+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Se(p),v=be(g),_=h||!v?"finished":g+"-attack";await re({["selected_"+r]:[],modifiers:{...p.modifiers,[r]:{}},pendingAttack:null,phase:_,attacker:g,round:x,log:y}),_==="finished"&&await D(p)}async function K(){const g=p[r+"Team"],x=!["GK","DEF","MIL","ATT"].some(_=>(p[m+"Team"][_]||[]).some(z=>!z.used)),y=(p["selected_"+r]||[]).map(_=>{const z=(g[_._role]||[]).find(O=>O.cardId===_.cardId)||_,$=x&&["GK","DEF"].includes(_._role),S=g[_._role]||[],L=S.findIndex(O=>O.cardId===_.cardId),B=lt(S.length),G=L>=0?B[L]:z._col??1;return{...z,_line:_._role,_col:G,...$?{note_a:Math.max(1,Number(z.note_a)||0)}:{}}});if(!y.length)return;const h=Ot(y,p.modifiers[r]||{});ne(r,y.map(_=>_.cardId)),y.forEach(_=>{const z=(g[_._role]||[]).find($=>$.cardId===_.cardId);z&&(z.used=!0)}),p["selected_"+r]=[],ye();const v=[...p.log||[]];if(x){const _=(p[r+"Score"]||0)+1,z=y.map(G=>({name:G.name,note:je(G,G._line||"ATT"),portrait:Pe(G),job:G.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:z,homeTotal:h.total,aiTotal:0});const $=(p.round||0)+1,S=r==="p1"?"p2":"p1",L={...p,[r+"Team"]:g,[r+"Score"]:_},B=Se(L);F.add($),_e(z,_,p[m+"Score"]||0,!0,async()=>{await re({[r+"Team"]:g,[r+"Score"]:_,["selected_"+r]:[],modifiers:{...p.modifiers,[r]:{}},pendingAttack:null,phase:B?"finished":S+"-attack",attacker:S,round:$,log:v}),B&&await D({...p,[r+"Score"]:_})});return}v.push({type:"pending",text:`⚔️ ${p[r+"Name"]} attaque (${h.total})`}),await re({[r+"Team"]:g,[m+"Team"]:p[m+"Team"],pendingAttack:{...h,players:y,side:r},["selected_"+r]:[],modifiers:{...p.modifiers,[r]:{}},phase:m+"-defense",log:v})}async function se(){const g=p[r+"Team"],x=(p["selected_"+r]||[]).map(V=>{const ie=(g[V._role]||[]).find(ke=>ke.cardId===V.cardId)||V,ae=g[V._role]||[],fe=ae.findIndex(ke=>ke.cardId===V.cardId),me=lt(ae.length),$e=fe>=0?me[fe]:ie._col??1;return{...ie,_line:V._role,_col:$e}}),y=Ht(x,p.modifiers[r]||{});ne(r,x.map(V=>V.cardId)),x.forEach(V=>{const ie=(g[V._role]||[]).find(ae=>ae.cardId===V.cardId);ie&&(ie.used=!0)}),p["selected_"+r]=[],ye();const h=Ut(p.pendingAttack.total,y.total,p.modifiers[r]||{}),v=p.pendingAttack.side,_=h==="attack"||(h==null?void 0:h.goal),z=v==="p1"?"p2":"p1",$=(p.round||0)+1,S=(p.pendingAttack.players||[]).map(V=>({name:V.name,note:je(V,V._line||"ATT"),portrait:Pe(V),job:V.job})),L=[...p.log||[]];L.push({type:"duel",isGoal:_,homeScored:_&&v===r,text:_?`⚽ BUT de ${p[v+"Name"]} ! (${p.pendingAttack.total} vs ${y.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${y.total})`,homePlayers:S,aiPlayers:x.map(V=>({name:V.name,note:je(V,V._line||"DEF"),portrait:Pe(V),job:V.job})),homeTotal:p.pendingAttack.total,aiTotal:y.total});const B=_?(p[v+"Score"]||0)+1:p[v+"Score"]||0,G={...p,[r+"Team"]:g,[v+"Score"]:B},O=Se(G),H=O?"finished":z+"-attack",Q=async()=>{await re({[r+"Team"]:g,[m+"Team"]:p[m+"Team"],[v+"Score"]:B,["selected_"+r]:[],modifiers:{...p.modifiers,[r]:{}},pendingAttack:null,phase:H,attacker:z,round:$,log:L}),(H==="finished"||O)&&await D({...p,[v+"Score"]:B})};if(_){const V=v===r,ie=V?B:p[r+"Score"]||0,ae=V?p[m+"Score"]||0:B;F.add($),_e(S,ie,ae,V,Q)}else await Q()}function he(g){return["MIL","ATT"].some(x=>(g[x]||[]).some(y=>!y.used))}function ze(g){return["GK","DEF","MIL","ATT"].some(x=>(g[x]||[]).some(y=>!y.used))}function Me(g){return ze(g)&&!he(g)}function be(g){const x=p[g+"Team"],y=p[(g==="p1"?"p2":"p1")+"Team"];return!!(he(x)||!ze(y)&&Me(x))}function Se(g){const x=["MIL","ATT"].some(L=>(g.p1Team[L]||[]).some(B=>!B.used)),y=["MIL","ATT"].some(L=>(g.p2Team[L]||[]).some(B=>!B.used)),h=ze(g.p1Team),v=ze(g.p2Team);return!x&&!(!v&&h)&&(!y&&!(!h&&v))}function j(g){const x=g.p1Score||0,y=g.p2Score||0;return x===y?null:x>y?T.home_id:T.away_id}async function D(g){try{const x=j(g),y=x?T.home_id===x?T.away_id:T.home_id:null,h=g.p1Score||0,v=g.p2Score||0;await k.from("matches").update({status:"finished",winner_id:x,home_score:h,away_score:v}).eq("id",i);const{data:_}=await k.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(_){await k.from("mini_league_matches").update({home_score:h,away_score:v,status:"finished"}).eq("id",_.id);const{data:z}=await k.from("mini_league_matches").select("id, status").eq("league_id",_.league_id).eq("matchday",_.matchday);if((z||[]).every(S=>S.status==="finished"||S.status==="bye")){const{data:S}=await k.from("mini_leagues").select("current_day,total_days").eq("id",_.league_id).single();if(S){const L=(S.current_day||0)+1,B=L>(S.total_days||0);await k.from("mini_leagues").update({current_day:B?S.total_days:L,status:B?"finished":"active"}).eq("id",_.league_id)}}}x&&y&&ki(x,y).catch(()=>{})}catch(x){console.error("[ML] finishMatch:",x)}}function w(){var v;if(A&&document.getElementById("pvp-end-overlay"))return;A=!0;const g=p[r+"Score"],x=p[m+"Score"],y=g>x,h=g===x;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${y?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${y?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${g} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{k.removeChannel(de)}catch{}We(e),c("mini-league",o?{openLeagueId:o}:{})})}ye()}const sr="/",dr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function lr(e,t,i){let a=0;const l=document.createElement("div");l.id="tutorial-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const d=()=>{var r,m,b;const c=t[a],f=a===t.length-1,o=Math.round((a+1)/t.length*100);l.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${o}%;background:${c.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${c.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${c.title}</div>
          <div style="font-size:11px;color:#aaa">${a+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${c.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${sr}icons/${c.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${c.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${c.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${a>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${f?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${c.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${f?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,l.querySelectorAll("ul,ol").forEach(u=>{u.style.paddingLeft="20px",u.style.marginTop="6px",u.style.marginBottom="6px"}),l.querySelectorAll("li").forEach(u=>{u.style.marginBottom="4px"}),l.querySelectorAll("p").forEach(u=>{u.style.marginBottom="8px"}),(r=l.querySelector("#tuto-prev"))==null||r.addEventListener("click",()=>{a--,d()}),(m=l.querySelector("#tuto-next"))==null||m.addEventListener("click",()=>{f?s():(a++,d())}),(b=l.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&s()})},s=async()=>{l.remove(),e!=null&&e.id&&await k.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(l),d()}async function cr(e,t,i){if(!e||e.tutorial_done)return;let a=[];const{data:l,error:d}=await k.rpc("get_tutorial_steps");if(!d&&(l==null?void 0:l.length)>0)a=l,console.log(`[Tutorial] RPC OK → ${a.length} étapes`);else{const{data:c,error:f}=await k.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!f&&(c==null?void 0:c.length)>0?(a=c,console.log(`[Tutorial] Direct OK → ${a.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${d==null?void 0:d.message}, Direct: ${f==null?void 0:f.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const s=a.length>0?a.map(c=>({emoji:c.emoji,title:c.title,color:c.color,content:c.content,image_url:c.image_url||null})):dr;lr(e,s,()=>t("boosters"))}const pr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}function Hi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Jt(e,t){const a=t?pr[t]||"#bbb":"#d0d0d0",l=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${a};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${l}</div>`}function Ui(e){const i=Qt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Ki(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function ur(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Ai(e,t)}async function Ai(e,t){const{state:i,toast:a}=t,{data:l}=await k.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:d}=await k.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),s=(l||[]).filter(n=>n.seller_id!==i.profile.id),c=d||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${s.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${c.length})</button>
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
  </div>`;let f="buy";const o=()=>{var n,p,A,I,q,R,C;return{name:(((n=document.getElementById("flt-name"))==null?void 0:n.value)||"").toLowerCase().trim(),club:(((p=document.getElementById("flt-club"))==null?void 0:p.value)||"").toLowerCase().trim(),country:(((A=document.getElementById("flt-country"))==null?void 0:A.value)||"").toLowerCase().trim(),job:((I=document.getElementById("flt-job"))==null?void 0:I.value)||"",rarity:((q=document.getElementById("flt-rarity"))==null?void 0:q.value)||"",note1:parseInt((R=document.getElementById("flt-note1"))==null?void 0:R.value)||0,note2:parseInt((C=document.getElementById("flt-note2"))==null?void 0:C.value)||0}};function r(n){const p=o();return n.filter(A=>{var de,re,P;const I=(de=A.card)==null?void 0:de.player;if(!I)return!1;const q=`${I.firstname} ${I.surname_encoded}`.toLowerCase(),R=(((re=I.clubs)==null?void 0:re.encoded_name)||"").toLowerCase(),C=(I.country_code||"").toLowerCase(),F=((P=A.card)==null?void 0:P.evolution_bonus)||0,M=Tt(I,I.job,F),Y=I.job2?Tt(I,I.job2,F):0;return!(p.name&&!q.includes(p.name)||p.club&&!R.includes(p.club)||p.country&&!C.includes(p.country)||p.job&&I.job!==p.job||p.rarity&&I.rarity!==p.rarity||p.note1&&M<p.note1||p.note2&&Y<p.note2)})}function m(n){var C,F,M,Y;const p=(C=n.card)==null?void 0:C.player;if(!p)return"";const A=((F=n.card)==null?void 0:F.evolution_bonus)||0,I=Tt(p,p.job,A),q=p.job2?Tt(p,p.job2,A):0,R=(i.profile.credits||0)>=n.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Hi(p.rarity)}
      ${Jt(I,p.job)}
      ${Jt(q,p.job2||null)}
      ${Ui(p.country_code)}
      ${Ki((M=p.clubs)==null?void 0:M.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((Y=n.seller)==null?void 0:Y.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${n.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${n.id}" ${R?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${R?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function b(n){var C,F,M,Y;const p=(C=n.card)==null?void 0:C.player;if(!p)return"";const A=((F=n.card)==null?void 0:F.evolution_bonus)||0,I=Tt(p,p.job,A),q=p.job2?Tt(p,p.job2,A):0,R=n.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${R?"opacity:0.7":""}">
      ${Hi(p.rarity)}
      ${Jt(I,p.job)}
      ${Jt(q,p.job2||null)}
      ${Ui(p.country_code)}
      ${Ki((M=p.clubs)==null?void 0:M.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:${R?"#22c55e":"#999"};margin-top:1px">
          ${R?`✅ Vendu à ${((Y=n.buyer)==null?void 0:Y.pseudo)||"—"} · ${n.sold_at?new Date(n.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(n.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${n.price.toLocaleString("fr")}</div>
        ${R?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${n.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function u(){const n=document.getElementById("mkt-content"),p=document.getElementById("mkt-filters");if(n){if(p.style.display=f==="buy"?"flex":"none",f==="buy"){const A=r(s);n.innerHTML=A.length?A.map(m).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const A=c.filter(q=>q.status==="active").sort((q,R)=>new Date(R.listed_at)-new Date(q.listed_at)),I=c.filter(q=>q.status==="sold").sort((q,R)=>new Date(R.sold_at||R.listed_at)-new Date(q.sold_at||q.listed_at));n.innerHTML=(A.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${A.length})</div>`+A.map(b).join(""):"")+(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${I.length})</div>`+I.map(b).join(""):"")+(!A.length&&!I.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}n.querySelectorAll("[data-buy]").forEach(A=>A.addEventListener("click",()=>fr(A.dataset.buy,s,e,t))),n.querySelectorAll("[data-cancel]").forEach(A=>A.addEventListener("click",()=>mr(A.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(n=>{n.addEventListener("click",()=>{f=n.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(p=>{const A=p===n;p.style.background=A?"var(--green)":"#fff",p.style.color=A?"#fff":"var(--gray-600)",p.style.borderColor=A?"var(--green)":"var(--gray-200)"}),u()})});let T;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(n=>{var p;(p=document.getElementById(n))==null||p.addEventListener("input",()=>{clearTimeout(T),T=setTimeout(u,250)})}),u()}async function fr(e,t,i,a){const{state:l,toast:d,refreshProfile:s}=a,c=t.find(r=>r.id===e);if(!c)return;const f=c.price;if((l.profile.credits||0)<f){d("Crédits insuffisants","error");return}gr(c,async()=>{const{error:r}=await k.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:l.profile.id});if(r){d("Erreur achat : "+r.message,"error");return}await s();const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),d("✅ Carte achetée !","success"),await Ai(i,a)})}function gr(e,t){var s;const i=(s=e.card)==null?void 0:s.player,a=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",l.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${a} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(l);const d=c=>{l.remove(),c&&t()};l.querySelector("#buy-cancel").addEventListener("click",()=>d(!1)),l.querySelector("#buy-ok").addEventListener("click",()=>d(!0)),l.addEventListener("click",c=>{c.target===l&&d(!1)})}async function mr(e,t,i){const{toast:a}=i,{data:l}=await k.from("market_listings").select("card_id").eq("id",e).single();if(await k.from("market_listings").update({status:"cancelled"}).eq("id",e),l!=null&&l.card_id){const{count:d}=await k.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",l.card_id).eq("status","active");d||await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",l.card_id)}a("Annonce retirée","success"),Ai(t,i)}async function xr(e,{state:t,navigate:i,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await k.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${l&&l.length>0?l.map((d,s)=>`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${d.id===t.profile.id?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0">${s+1}</div>
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
  `}async function yr(e,{state:t,navigate:i,toast:a}){const l=t.profile;if(!l)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${l.id},away_id.eq.${l.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},c=(d||[]).filter(r=>r.status==="finished"),f=(d||[]).filter(r=>r.status==="in_progress");function o(r){const m=r.home_id===l.id;m?r.home_score:r.away_score,m?r.away_score:r.home_score;const b=r.winner_id===l.id,u=r.home_score===r.away_score&&r.status==="finished",T=r.status!=="finished"?"…":u?"N":b?"V":"D",n=r.status!=="finished"||u?"#888":b?"#1A6B3C":"#c0392b";let p=s[r.mode]||r.mode;r.away_id===null&&!p.startsWith("IA")&&(p="IA");const I=r.home_id===l.id?r.away:r.home;let q;r.away_id===null?q=p:I?q=`${I.club_name||I.pseudo} (${I.pseudo})`:q="Adversaire";let R="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(R=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const C=new Date(r.created_at),F=C.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+C.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),M=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${q}${R}</div>
        <div style="font-size:11px;color:var(--gray-600)">${p} · ${F}${r.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${M}</span>
        <span style="background:${n};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${T}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(d||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${f.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${f.map(o).join("")}
        </div>`:""}

      ${c.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${c.map(o).join("")}
        </div>`:""}

      ${(d||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Ao(zo);const Ge={user:null,profile:null,page:"home",params:{}};function At(e,t="info",i=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},i))}function br(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function bi(){document.getElementById("modal-overlay").classList.add("hidden")}async function qt(){if(!Ge.user)return;const{data:e}=await k.from("users").select("*").eq("id",Ge.user.id).single();e&&(Ge.profile=e)}function Dt(e,t={}){Ge.page=e,Ge.params=t,Eo()}async function Eo(){var a,l,d,s;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===Ge.page)});const t=document.getElementById("nav-credits");t&&Ge.profile&&(t.textContent=`💰 ${(Ge.profile.credits||0).toLocaleString("fr")}`);const i={state:Ge,navigate:Dt,toast:At,openModal:br,closeModal:bi,refreshProfile:qt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ge.page){case"home":await ji(e,i);break;case"collection":await Jo(e,i);break;case"decks":await ui(e,i);break;case"boosters":await pn(e,i);break;case"match":{const c=Ge.params&&Ge.params.matchMode||"vs_ai_easy";c==="random"?await vo(e,i):c==="friend"?await Hn(e,i,(a=Ge.params)==null?void 0:a.friendId,(l=Ge.params)==null?void 0:l.friendName):c==="mini-league"?await Oi(e,i,(d=Ge.params)==null?void 0:d.mlMatchId,(s=Ge.params)==null?void 0:s.leagueId):await $n(e,i);break}case"market":await ur(e,i);break;case"rankings":await xr(e,i);break;case"matches":await yr(e,i);break;case"friends":await Bo(e,i);break;case"mini-league":await Vn(e,i);break;case"match-mini-league":{const c=Ge.params||{};await Oi(e,i,c.mlMatchId,c.leagueId);break}default:await ji(e,i)}}function hr(){var a;const e=document.getElementById("app"),t=Ge.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(l=>{l.addEventListener("click",d=>{d.preventDefault(),Dt(l.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Dt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Dt("boosters")),(a=document.getElementById("journal-btn"))==null||a.addEventListener("click",()=>vr())}async function vr(){const{data:e}=await k.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(a=>{const l=new Date(a.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${a.image_url?`<img src="${a.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${l}</div>
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",a=>{a.target===t&&t.remove()})}async function wr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&bi()}),document.getElementById("modal-close").addEventListener("click",bi);const{data:{session:e}}=await k.auth.getSession();if(!e){Vi(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At});return}Ge.user=e.user,await qt(),Vi();try{const{data:i}=await k.from("formation_links_overrides").select("formation, links"),a={};(i||[]).forEach(l=>{a[l.formation]=l.links}),So(a)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Ge.profile){Io(document.getElementById("app"),{state:Ge,navigate:async()=>{await qt(),ci()},toast:At,refreshProfile:qt});return}const t=Array.isArray(Ge.profile.pending_boosters)?Ge.profile.pending_boosters:[];if(!Ge.profile.onboarding_done&&t.length>0){hn(document.getElementById("app"),{state:Ge,navigate:()=>ci(),toast:At,refreshProfile:qt});return}ci(),setTimeout(()=>cr(Ge.profile,Dt,At),800),k.auth.onAuthStateChange(async(i,a)=>{i==="SIGNED_OUT"&&(Ge.user=null,Ge.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At}))})}function _r(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function si(){const e=document.getElementById("app");e&&(e.style.height=_r()+"px")}window.addEventListener("resize",si);window.addEventListener("orientationchange",()=>setTimeout(si,150));window.visualViewport&&window.visualViewport.addEventListener("resize",si);function ci(){const e=()=>{var i;(i=Ge.user)!=null&&i.id&&k.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ge.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",si(),hr(),Eo()}function Vi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function To(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}wr().catch(e=>{console.error("Échec du démarrage:",e),To()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&To("Le serveur met trop de temps à répondre.")},12e3);
