const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-Dnttc-Cp.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as E,F as hi,h as Rt,j as Yi,l as at,i as Ao,k as So,b as zo}from"./formation-links-Dnttc-Cp.js";const Lo="/";function Li(e,{navigate:t,toast:i}){let a="login";const l=()=>{var s,c,g,o,r,m;const d=a==="login";e.innerHTML=`
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
    </style>`,(s=document.getElementById("tab-login-btn"))==null||s.addEventListener("click",()=>{a="login",l()}),(c=document.getElementById("tab-reg-btn"))==null||c.addEventListener("click",()=>{a="register",l()}),d?((g=document.getElementById("login-password"))==null||g.addEventListener("keydown",b=>{var u;b.key==="Enter"&&((u=document.getElementById("login-btn"))==null||u.click())}),(o=document.getElementById("login-btn"))==null||o.addEventListener("click",async()=>{const b=document.getElementById("login-email").value.trim(),u=document.getElementById("login-password").value,T=document.getElementById("login-error");if(T.textContent="",!b||!u){T.textContent="Remplissez tous les champs.";return}const n=document.getElementById("login-btn");n.textContent="⏳ Connexion…",n.disabled=!0;const{error:p}=await E.auth.signInWithPassword({email:b,password:u});if(n.textContent="⚽ Se connecter",n.disabled=!1,p){T.textContent=p.message.includes("Invalid")?"Email ou mot de passe incorrect.":p.message;return}window.location.reload()})):((r=document.getElementById("reg-confirm"))==null||r.addEventListener("keydown",b=>{var u;b.key==="Enter"&&((u=document.getElementById("reg-btn"))==null||u.click())}),(m=document.getElementById("reg-btn"))==null||m.addEventListener("click",async()=>{const b=document.getElementById("reg-email").value.trim(),u=document.getElementById("reg-password").value,T=document.getElementById("reg-confirm").value,n=document.getElementById("reg-error");if(n.textContent="",!b||!u||!T){n.textContent="Remplissez tous les champs.";return}if(u.length<6){n.textContent="Mot de passe trop court (min. 6 caractères).";return}if(u!==T){n.textContent="Les mots de passe ne correspondent pas.";return}const p=document.getElementById("reg-btn");p.textContent="⏳ Création…",p.disabled=!0;const{error:z}=await E.auth.signUp({email:b,password:u});if(p.textContent="🚀 Créer mon compte",p.disabled=!1,z){n.textContent=z.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),a="login",l(),setTimeout(()=>{const I=document.getElementById("login-email");I&&(I.value=b)},50)}))};l()}function Io(e,{state:t,navigate:i,toast:a,refreshProfile:l}){let d="#1A6B3C",s="#D4A017";e.innerHTML=`
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
  `;function c(){var T;const o=document.getElementById("logo-preview"),r=document.getElementById("logo-initials"),m=((T=document.getElementById("setup-club"))==null?void 0:T.value)||"MW",b=m.trim().split(" ").filter(Boolean),u=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():m.slice(0,2).toUpperCase();o&&(o.style.background=s,o.style.borderColor=d),r&&(r.textContent=u,r.style.color=d)}document.getElementById("color1").addEventListener("input",o=>{d=o.target.value,document.getElementById("swatch1").style.background=d,c()}),document.getElementById("color2").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch2").style.background=s,c()});function g(o){document.querySelectorAll(".setup-step").forEach(r=>r.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&c()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("step1-error");if(r.textContent="",o.length<3){r.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:m}=await E.from("users").select("id").eq("pseudo",o).maybeSingle();if(m){r.textContent="Ce pseudo est déjà pris.";return}g(2)}),document.getElementById("step2-back").addEventListener("click",()=>g(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),r=document.getElementById("step2-error");if(r.textContent="",o.length<2){r.textContent="Nom trop court (min. 2 caractères).";return}const{data:m}=await E.from("users").select("id").eq("club_name",o).maybeSingle();if(m){r.textContent="Ce nom de club est déjà pris.";return}g(3)}),document.getElementById("step3-back").addEventListener("click",()=>g(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),r=document.getElementById("setup-club").value.trim(),m=document.getElementById("step3-error"),b=document.getElementById("step3-finish");m.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:u}=await E.from("users").insert({id:t.user.id,pseudo:o,club_name:r,club_color1:d,club_color2:s,credits:1e4});if(u)throw u;await Mo(t.user.id),await l(),a(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(u){m.textContent=u.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Mo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await E.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const jo="modulepreload",Co=function(e){return"/"+e},Ii={},oi=function(t,i,a){let l=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=Promise.allSettled(i.map(g=>{if(g=Co(g),g in Ii)return;Ii[g]=!0;const o=g.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${r}`))return;const m=document.createElement("link");if(m.rel=o?"stylesheet":jo,o||(m.as="script"),m.crossOrigin="",m.href=g,c&&m.setAttribute("nonce",c),document.head.appendChild(m),o)return new Promise((b,u)=>{m.addEventListener("load",b),m.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${g}`)))})}))}function d(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return l.then(s=>{for(const c of s||[])c.status==="rejected"&&d(c.reason);return t().catch(d)})},Gt="#1A6B3C",Pt="#cc2222",qo="#D4A017",Mi="#888";async function Bo(e,t){const{state:i,toast:a}=t;e.innerHTML=`
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
    </div>`,await Wi(i,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Do(i,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ji(i,a,null,t))}async function Wi(e,t,i={}){const{navigate:a}=i,l=e.user.id,{data:d,error:s}=await E.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${l},addressee_id.eq.${l}`),{count:c}=await E.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",l).eq("status","pending"),g=document.getElementById("pending-badge");g&&(c>0?(g.style.display="flex",g.textContent=c):g.style.display="none");const o=document.getElementById("friends-list");if(!o)return;if(s){console.error("[Friends] Erreur:",s),o.innerHTML=`<div style="color:${Pt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const r=(d||[]).map(u=>u.requester_id===l?u.addressee_id:u.requester_id);let m={};if(r.length){const{data:u}=await E.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",r);(u||[]).forEach(T=>{m[T.id]=T})}const b=(d||[]).map(u=>({friendshipId:u.id,friend:m[u.requester_id===l?u.addressee_id:u.requester_id]||{pseudo:"?"}}));if(!b.length){o.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}o.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:u,friend:T})=>Fo(T,u)).join("")}
    </div>`,o.querySelectorAll("[data-stats]").forEach(u=>{u.addEventListener("click",()=>Go(e,u.dataset.stats,u.dataset.friendName))}),o.querySelectorAll("[data-match]").forEach(u=>{u.addEventListener("click",()=>{const T=u.dataset.friendId,n=u.dataset.friendName;console.log("[Friends] clic match",{fid:T,fname:n,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:T,friendName:n}):t("Erreur navigation","error")})})}function Fo(e,t){const i=e.club_name||e.pseudo||"?",a=e.pseudo||"",l=(a||i).slice(0,2).toUpperCase(),d=e.club_color2||Gt,s=e.club_color1||"#ffffff",c=e.last_seen_at?new Date(e.last_seen_at):null,g=c&&Date.now()-c.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${d};border:2.5px solid ${s};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${s}">
          ${l}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${g?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${a}</div>
        <div style="font-size:11px;color:${g?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${g?"🟢 En ligne":"🔴 Hors ligne"}</div>
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
    ${wi()}`,document.body.appendChild(i);const a=i.querySelector("#friend-pseudo-input"),l=i.querySelector("#add-friend-error"),d=()=>i.remove();a.focus(),i.querySelector("#add-cancel").addEventListener("click",d),i.addEventListener("click",s=>{s.target===i&&d()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const s=a.value.trim();if(!s){l.textContent="Entre un pseudo";return}l.textContent="";const{data:c}=await E.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!c){l.textContent="Utilisateur introuvable";return}if(c.id===e.user.id){l.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:g}=await E.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${c.id}),and(requester_id.eq.${c.id},addressee_id.eq.${e.user.id})`).single();if(g){const r=g.status==="accepted"?"Vous êtes déjà amis !":g.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";l.textContent=r;return}const{error:o}=await E.from("friendships").insert({requester_id:e.user.id,addressee_id:c.id,status:"pending"});if(o){l.textContent="Erreur : "+o.message;return}d(),t(`✅ Demande envoyée à ${c.pseudo} !`,"success")})}async function Ji(e,t,i=null,a={}){const l=e.user.id,{data:d}=await E.from("friendships").select("id, requester_id").eq("addressee_id",l).eq("status","pending").order("created_at",{ascending:!1}),s=(d||[]).map(b=>b.requester_id);let c={};if(s.length){const{data:b}=await E.from("users").select("id, pseudo, club_name").in("id",s);(b||[]).forEach(u=>{c[u.id]=u})}const g=(d||[]).map(b=>({...b,requester:c[b.requester_id]||{pseudo:"?"}})),o=vi(),r=g||[];o.innerHTML=`
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
    ${wi()}`,document.body.appendChild(o);const m=()=>o.remove();o.querySelector("#pending-close").addEventListener("click",m),o.addEventListener("click",b=>{b.target===o&&m()}),o.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:u}=await E.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(u){t("Erreur : "+u.message,"error");return}b.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Wi(e,t,a),i&&i()})}),o.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await E.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Go(e,t,i){const a=e.user.id,[l,d]=[a,t].sort(),s=a===l,{data:c}=await E.from("friend_match_stats").select("*").eq("player1_id",l).eq("player2_id",d).single(),g=e.profile.club_name||e.profile.pseudo||"Moi",o=c||{},r=s?o.wins_p1||0:o.wins_p2||0,m=s?o.wins_p2||0:o.wins_p1||0,b=o.draws||0,u=s?o.goals_p1||0:o.goals_p2||0,T=s?o.goals_p2||0:o.goals_p1||0,n=s?o.gc_used_p1||0:o.gc_used_p2||0,p=s?o.gc_used_p2||0:o.gc_used_p1||0,z=o.matches_total||0,I=(N,C,F,M=Gt,W=Pt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${M}">${C}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${N}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${W}">${F}</div>
    </div>`,q=vi();q.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${z===0?`
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
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${z} match${z>1?"s":""} joué${z>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${wi()}`,document.body.appendChild(q),q.querySelector("#stats-close").addEventListener("click",()=>q.remove()),q.addEventListener("click",N=>{N.target===q&&q.remove()})}function vi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function wi(){return`
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
    </style>`}async function Xi({player1Id:e,player2Id:t,score1:i,score2:a,gc1:l,gc2:d}){const[s,c]=[e,t].sort(),g=e!==s,o=g?a:i,r=g?i:a,m=g?d:l,b=g?l:d,u=o>r?1:0,T=r>o?1:0,n=o===r?1:0,{data:p}=await E.from("friend_match_stats").select("*").eq("player1_id",s).eq("player2_id",c).single();p?await E.from("friend_match_stats").update({wins_p1:p.wins_p1+u,wins_p2:p.wins_p2+T,draws:p.draws+n,goals_p1:p.goals_p1+o,goals_p2:p.goals_p2+r,gc_used_p1:p.gc_used_p1+m,gc_used_p2:p.gc_used_p2+b,matches_total:p.matches_total+1}).eq("player1_id",s).eq("player2_id",c):await E.from("friend_match_stats").insert({player1_id:s,player2_id:c,wins_p1:u,wins_p2:T,draws:n,goals_p1:o,goals_p2:r,gc_used_p1:m,gc_used_p2:b,matches_total:1})}const Po="2026.07.05-0045";async function ji(e,{state:t,navigate:i,toast:a}){var d,s;const l=t.profile;l&&(e.innerHTML=`
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
  `,e.querySelectorAll("[data-nav]").forEach(c=>{c.addEventListener("click",g=>{g.preventDefault(),i(c.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>i("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(c=>{c.addEventListener("click",()=>{c.classList.add("tapped"),setTimeout(()=>c.classList.remove("tapped"),200);const g=c.dataset.action;if(g==="match-ai"){Ho(i);return}if(g==="match-random"){i("match",{matchMode:"random"});return}if(g==="match-friend"){i("friends");return}if(g==="mini-league"){i("mini-league");return}if(g==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}a("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var N,C,F,M,W,se;const c=((N=window.visualViewport)==null?void 0:N.height)||window.innerHeight,g=((C=document.querySelector(".top-nav"))==null?void 0:C.offsetHeight)||56,o=((F=document.querySelector(".bottom-nav"))==null?void 0:F.offsetHeight)||60,r=((M=e.querySelector(".hero-compact"))==null?void 0:M.offsetHeight)||52,m=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const b=((se=(W=e.querySelector("#logout-btn"))==null?void 0:W.closest("div"))==null?void 0:se.offsetHeight)||44,u=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((ne,pe)=>{var le;return ne+(((le=document.getElementById(pe))==null?void 0:le.offsetHeight)||0)},0),T=14*5,n=c-g-o-r-b-u-T,p=Math.max(80,Math.round(n*.28)),z=Math.max(160,Math.round(n*.72)),I=Math.floor((z-10)/2);m&&(m.style.minHeight=m.style.maxHeight=p+"px"),e.querySelectorAll(".play-grid .play-card").forEach(ne=>{ne.style.minHeight=ne.style.height=I+"px"});const q=Math.round(I*.55);e.querySelectorAll(".play-card .play-icon").forEach(ne=>{ne.style.height=q+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),window.location.reload()}),Qi(t,a),Oo(t,a,i),Zi(t,a,i))}async function Zi(e,t,i){const a=document.getElementById("ongoing-match-banner");if(!a)return;const l=e.profile.id,{data:d}=await E.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${l},away_id.eq.${l}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){a.innerHTML="";return}const s=d.map(g=>g.home_id===l?g.away_id:g.home_id).filter(Boolean);let c={};if(s.length){const{data:g}=await E.from("users").select("id, pseudo, club_name").in("id",s);(g||[]).forEach(o=>{c[o.id]=o.club_name||o.pseudo})}a.innerHTML=d.map(g=>{const o=g.home_id===l?g.away_id:g.home_id,r=c[o]||"Adversaire",m=g.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${m?"🏆 Mini League":g.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${r}</div>
        </div>
        <button data-resume="${g.id}" data-mini="${m?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${g.id}" data-opp="${o}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(g=>{g.addEventListener("click",async()=>{const o=document.getElementById("page-content")||document.getElementById("app");if(g.dataset.mini==="1"){const{data:r}=await E.from("mini_league_matches").select("id, league_id").eq("match_id",g.dataset.resume).single();r?i("match-mini-league",{mlMatchId:r.id,leagueId:r.league_id}):i("mini-league")}else{const{resumePvpMatch:r}=await oi(async()=>{const{resumePvpMatch:m}=await Promise.resolve().then(()=>On);return{resumePvpMatch:m}},void 0);r(o,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},g.dataset.resume)}})}),a.querySelectorAll("[data-abandon]").forEach(g=>{g.addEventListener("click",()=>{Ro(async()=>{await No(g.dataset.abandon,g.dataset.opp,l),t("Match abandonné (défaite 3-0)","info"),Zi(e,t,i)})})})}async function No(e,t,i){const{data:a}=await E.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const l=a.home_id===i,d=l?0:3,s=l?3:0,c=a.game_state||{};c.p1Score=d,c.p2Score=s,c.phase="finished",c.forfeit=!0,await E.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:s,game_state:c}).eq("id",e)}function Ro(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Oo(e,t,i){var c,g,o,r;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:l}=await E.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){a.innerHTML="";return}const d=((c=l.inviter)==null?void 0:c.club_name)||((g=l.inviter)==null?void 0:g.pseudo)||"?",s=l.inviter_id;a.innerHTML=`
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
    </div>`,(o=document.getElementById("match-inv-accept"))==null||o.addEventListener("click",()=>{a.innerHTML="",i("match",{matchMode:"friend",friendId:s,friendName:d})}),(r=document.getElementById("match-inv-decline"))==null||r.addEventListener("click",async()=>{await E.from("friend_match_invites").update({status:"declined"}).eq("id",l.id),a.innerHTML="",t("Invitation refusée","info")})}async function Qi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:a,error:l}=await E.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(l||!(a!=null&&a.length)){i.innerHTML="";return}const d=a.length,s=a.slice(0,2).map(g=>{var o;return((o=g.requester)==null?void 0:o.pseudo)||"?"}).join(", "),c=d>2?` +${d-2}`:"";i.innerHTML=`
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
  `,document.body.appendChild(i);const a=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",a),i.addEventListener("click",l=>{l.target===i&&a()}),i.querySelectorAll("[data-mode]").forEach(l=>{l.addEventListener("click",()=>{a(),e("match",{matchMode:l.dataset.mode})})})}const Re={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Le(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Ci=["ATT","MIL","DEF","GK"];function eo(e){let t=0;const i=e.length;for(let a=0;a<i;a++)for(let l=a+1;l<i;l++){const d=e[a],s=e[l];if(!d||!s)continue;const c=d._col!=null&&s._col!=null&&d._col===s._col,g=d._col!=null&&s._col!=null&&Math.abs(d._col-s._col)===1,o=Ci.indexOf(d._line||d.job),r=Ci.indexOf(s._line||s.job),m=Math.abs(o-r)===1;if(!((d._line||d.job)===(s._line||s.job)&&g||c&&m))continue;const T=d.country_code&&s.country_code&&d.country_code===s.country_code,n=d.club_id&&s.club_id&&d.club_id===s.club_id;T&&n?t+=2:(T||n)&&(t+=1)}return t}function Ot(e,t={}){const i=e.reduce((d,s)=>{const c=s._line||s.job,g=s.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;return d+(Number(c==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)+g},0),a=eo(e);let l=i+a;return t.doubleAttack&&(l*=2),t.stolenNote&&(l-=t.stolenNote),{base:i,links:a,total:Math.max(0,l)}}function Ht(e,t={}){const i=e.reduce((d,s)=>{const c=s._line||s.job;let g=0;c==="GK"?g=Number(s.note_g)||0:c==="MIL"?g=Number(s.note_m)||0:g=Number(s.note_d)||0;const o=s.stadiumBonus&&(c==="GK"||c==="DEF"||c==="MIL")?10:0;return d+g+(s.boost||0)+o},0),a=eo(e);let l=i+a;return t.stolenNote&&(l-=t.stolenNote),{base:i,links:a,total:Math.max(0,l)}}function Ut(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function to(e,t,i="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const l=[...a].sort((s,c)=>{const g=t==="attack"?Le(s,"ATT"):s._line==="GK"?Le(s,"GK"):Le(s,"DEF");return(t==="attack"?Le(c,"ATT"):c._line==="GK"?Le(c,"GK"):Le(c,"DEF"))-g});let d=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return l.slice(0,Math.min(d,l.length,3))}function Uo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const io={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function _i(e,t){const i=e.player;if(!i)return 0;const a=i.rarity;if(a!=="pepite"&&a!=="papyte")return Number(i[t])||0;const l=$i(i),d=Number(i[t])||0;if(d<=0)return 0;const s=i.note_min??1,c=i.note_max??10,o=(e.current_note??l)-l;return Math.min(c,Math.max(s,d+o))}function $i(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function ki(e,t){!e||!t||await Promise.all([ui(e,"win"),ui(t,"loss")])}async function ui(e,t){const{data:i}=await E.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const a=i.filter(l=>{var d,s;return((d=l.player)==null?void 0:d.rarity)==="pepite"||((s=l.player)==null?void 0:s.rarity)==="papyte"});a.length&&await Promise.all(a.map(l=>{const d=io[l.player.rarity],s=t==="win"?d.win:d.loss,c=l.player.note_min??1,g=l.player.note_max??10,o=$i(l.player),r=l.current_note??o,m=Math.min(g,Math.max(c,r+s));return E.from("cards").update({current_note:m}).eq("id",l.id)}))}async function Ko(e,t){return ui(e,t)}const oo=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:io,applyOwnEvolution:Ko,currentSecondaryNote:_i,getBaseMainNote:$i,updateEvolutiveCards:ki},Symbol.toStringTag,{value:"Module"})),no={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Bt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Vt=["GK","DEF","MIL","ATT"],Vo=["Tous","GK","DEF","MIL","ATT"],Yo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function qi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Wo(e){return e.length?e.reduce((t,i)=>qi(i)>qi(t)?i:t,e[0]):e[0]}function ro(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Ei={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ao(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function St(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function li(e,t=""){var T,n;const i=e.player;if(!i)return"";const a=i.job||"ATT",l=Bt[a],d=no[i.rarity]||"#ccc",s=i.rarity==="pepite"||i.rarity==="papyte",c=e.evolution_bonus||0,g=(s&&e.current_note!=null?e.current_note:St(i,a))+c,o=i.job2?s?_i(e,ro(i.job2)):St(i,i.job2):null,r=o!=null?o>0?o+c:o:null,m=i.job2?Bt[i.job2]:null,b=ao(i),u=Ei[i.country_code]||i.country_code||"";return`
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
            fill="white" font-family="Arial Black,Arial">${g}</text>
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
  </div>`}async function Jo(e,t){const{state:i,navigate:a,toast:l,openModal:d,closeModal:s}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await E.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:g}=await E.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(c||[]).filter(K=>K.card_type==="player"&&K.player),r=(c||[]).filter(K=>K.card_type==="game_changer"),m=(c||[]).filter(K=>K.card_type==="formation"),b=(c||[]).filter(K=>K.card_type==="stadium"),{data:u}=await E.from("gc_definitions").select("name,gc_type,color,effect,image_url"),T={};(u||[]).forEach(K=>{T[K.name]=K});const{data:n}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),p={};(n||[]).forEach(K=>{p[K.id]=K}),b.forEach(K=>{K.stadium_def&&(p[K.stadium_id]=K.stadium_def)});const z=Object.keys(hi),I=Object.keys(Re),q={};o.forEach(K=>{const ee=K.player.id;q[ee]=(q[ee]||0)+1}),new Set(Object.keys(q).map(K=>String(K)));const N=new Set(m.map(K=>K.formation)),C=new Set(r.map(K=>K.gc_type));let F="player",M="Tous",W="",se=!1;function ne(){return[...o].sort((K,ee)=>{const ge=Vt.indexOf(K.player.job),H=Vt.indexOf(ee.player.job);return ge!==H?ge-H:(K.player.surname_encoded||"").localeCompare(ee.player.surname_encoded||"")})}function pe(){return[...g||[]].sort((K,ee)=>{const ge=Vt.indexOf(K.job),H=Vt.indexOf(ee.job);return ge!==H?ge-H:(K.surname_encoded||"").localeCompare(ee.surname_encoded||"")})}function le(){return ne().filter(K=>{const ee=K.player,ge=M==="Tous"||ee.job===M,H=!W||`${ee.firstname} ${ee.surname_encoded}`.toLowerCase().includes(W);return ge&&H})}function J(){return pe().filter(K=>{const ee=M==="Tous"||K.job===M,ge=!W||`${K.firstname} ${K.surname_encoded}`.toLowerCase().includes(W);return ee&&ge})}e.innerHTML=`
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
  </div>`;function R(){const K=document.getElementById("col-filters");K&&(F==="player"?(K.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${W}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Vo.map(ee=>`
            <button class="filter-btn" data-job="${ee}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${ee===M?"var(--green)":"var(--gray-200)"};
                background:${ee===M?"var(--green)":"#fff"};
                color:${ee===M?"#fff":"var(--gray-600)"}">
              ${ee}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${se?"var(--yellow)":"var(--gray-200)"};
              background:${se?"var(--yellow)":"#fff"};
              color:${se?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${se?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",ee=>{W=ee.target.value.toLowerCase(),P()}),e.querySelectorAll(".filter-btn").forEach(ee=>{ee.addEventListener("click",()=>{M=ee.dataset.job,R(),P()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{se=!se,R(),P()})):(K.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${se?"var(--yellow)":"var(--gray-200)"};
              background:${se?"var(--yellow)":"#fff"};
              color:${se?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${se?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{se=!se,R(),P()})))}function P(){const K=document.getElementById("col-grid");K&&(F==="player"?Ce(K):F==="formation"?Fe(K):F==="stadium"?ke(K):De(K))}function oe(K,ee,ge,H,X){const V=document.getElementById("col-grid"),ae=document.getElementById("col-big");if(!V||!ae)return;var ve=0;function Se(){const ze=window.innerWidth>=768,he=document.getElementById("col-big"),Ae=document.getElementById("col-grid");ze&&he&&(he.style.minHeight="420px",he.style.flex="1 1 auto"),ze&&Ae&&(Ae.style.height=Math.round(310*.76+16)+"px",Ae.style.flexShrink="0",Ae.style.overflowX="auto",Ae.style.overflowY="hidden",Ae.style.alignItems="center",Ae.style.padding="8px 16px"),ae.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+ee(K[ve])+"</div>";var j=ae.querySelector("[data-card-id],[data-form-id],[data-gc-id]");j&&j.addEventListener("click",function(){H(K[ve])}),requestAnimationFrame(function(){var D=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!D||!ae)){var w=ae.clientHeight-8,k=ae.clientWidth-24,f=D.offsetHeight,x=D.offsetWidth;if(f>0&&x>0&&w>40){var y=ze?2.2:1,h=Math.min(w/f,k/x,y);D.style.transform="scale("+h.toFixed(3)+")",D.style.transformOrigin="top center"}}}),V.innerHTML=K.map(function(D,w){var k=w===ve,f="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(k?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+w+'" style="'+f+'">'+ge(D,k)+"</div>"}).join(""),V.querySelectorAll(".col-mini-item").forEach(function(D){D.addEventListener("click",function(){ve=Number(D.dataset.idx),Se(),D.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Se()}function me(K){var ee=window.innerWidth>=768?.76:.54,ge;if(!K||K._fake){var H=K?K.player:null;if(!H)return"";ge=Bi(H)}else ge=li(K,"");return'<div style="display:inline-block;zoom:'+ee+';pointer-events:none;line-height:0">'+ge+"</div>"}function we(K,ee,ge){ee=ee||100,ge=ge||140;var H=Rt[K]||{},X={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},V=Math.max(3,Math.round(ee*.06)),ae=Object.entries(H).map(function(Se){var ze=Se[0],he=Se[1],Ae=ze.replace(/\d+$/,""),j=X[Ae]||"#888",D=Math.round(he.x*ee),w=Math.round(he.y*ge);return'<circle cx="'+D+'" cy="'+w+'" r="'+V+'" fill="'+j+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ve=Math.max(1,Math.round(ee/50));return'<svg viewBox="0 0 '+ee+" "+ge+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+ee+'" height="'+ge+'" fill="#1A6B3C"/><rect x="'+Math.round(ee*.2)+'" y="'+Math.round(ge*.02)+'" width="'+Math.round(ee*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/><line x1="0" y1="'+Math.round(ge*.5)+'" x2="'+ee+'" y2="'+Math.round(ge*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><ellipse cx="'+Math.round(ee*.5)+'" cy="'+Math.round(ge*.5)+'" rx="'+Math.round(ee*.18)+'" ry="'+Math.round(ge*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><rect x="'+Math.round(ee*.2)+'" y="'+Math.round(ge*.82)+'" width="'+Math.round(ee*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/>'+ae+"</svg>"}function xe(K,ee,ge){var H=ge>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ge+"</div>":"",X=ee?'data-form-id="'+ee.id+'"':"",V=K.length>7?14:K.length>5?16:19,ae=!!ee;return"<div "+X+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ae?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ae?"":"filter:grayscale(1);opacity:0.5")+'">'+H+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ae?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+V+"px;font-weight:900;color:"+(ae?"#1A6B3C":"#aaa")+';line-height:1">'+K+'</div></div><div style="flex:1;overflow:hidden;background:'+(ae?"#1A6B3C":"#ccc")+'">'+we(K,140,220)+"</div></div>"}function be(K,ee){var ge=window.innerWidth>=768?.76:.54,H=140,X=305,V=Math.round(X*.22),ae=X-V,ve=K.length>7?10:13,Se=we(K,H,ae),ze=ee?"1.5px solid #2a7a40":"1px solid #ddd",he=ee?"":"filter:grayscale(1);opacity:0.45;",Ae=ee?"#1A6B3C":"#bbb",j="#fff";return'<div style="display:inline-block;zoom:'+ge+';line-height:0;pointer-events:none"><div style="width:'+H+"px;height:"+X+"px;border-radius:6px;border:"+ze+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+he+'"><div style="height:'+V+"px;background:"+Ae+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ve+"px;font-weight:900;color:"+j+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(H-4)+'px">'+K+'</span></div><div style="height:'+ae+'px;overflow:hidden;flex-shrink:0">'+Se+"</div></div></div>"}function Ce(K){if(se){const ee=J();if(!ee.length){K.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ge=ee.map(H=>o.find(X=>X.player.id===H.id)||{_fake:!0,player:H,id:"fake-"+H.id});oe(ge,H=>H._fake?Bi(H.player):li(H,""),H=>H._fake?me({player:H.player,id:"x",_fake:!0}):me(H),H=>{H._fake||Fi(H,o,q,t)})}else{const ee=le();if(!ee.length){K.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ge={};ee.forEach(X=>{const V=X.player.id;ge[V]||(ge[V]=[]),ge[V].push(X)});const H=Object.values(ge).map(X=>Wo(X));oe(H,X=>{const V=q[X.player.id]||1,ae=V>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${V}</div>`:"",Se=o.filter(ze=>ze.player.id===X.player.id&&ze.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return li(X,ae+Se)},X=>me(X),X=>Fi(X,o,q,t))}}function Fe(K){const ee=se?z:[...N];if(!ee.length){K.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ge=ee.map(H=>({formation:H,card:m.find(X=>X.formation===H)||null,owned:N.has(H)}));oe(ge,({formation:H,card:X,owned:V})=>xe(H,V?X:null,V?m.filter(ae=>ae.formation===H).length:0),({formation:H,owned:X})=>be(H,X),({card:H,owned:X})=>{X&&H&&Zo(H,m,t,d)})}function De(K){const ee=Object.keys(T),ge=se?ee.length?ee:I:[...C];if(!ge.length){K.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const H=ge.map(X=>({type:X,gc:Re[X]||{icon:"⚡",desc:""},def:T[X]||null,owned:C.has(X),card:r.find(V=>V.gc_type===X)||null}));oe(H,({type:X,gc:V,def:ae,owned:ve,card:Se})=>{var y;const ze=ve?r.filter(h=>h.gc_type===X).length:0,he=ze>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ze}</div>`:"",Ae=(ae==null?void 0:ae.gc_type)==="ultra_game_changer",j={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},D={purple:"#b06ce0",light_blue:"#00d4ef"},w=j[ae==null?void 0:ae.color]||j.purple,k=D[ae==null?void 0:ae.color]||D.purple,f=(ae==null?void 0:ae.effect)||V.desc||"",x=ae!=null&&ae.image_url?`/icons/${ae.image_url}`:((y=ae==null?void 0:ae.club)==null?void 0:y.logo_url)||(ae!=null&&ae.country_code?`https://flagcdn.com/w80/${ae.country_code.toLowerCase()}.png`:null);return ve&&Se?`<div data-gc-id="${Se.id}" data-gc-type="${X}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${k}66;cursor:pointer">
          ${he}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${X.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${X}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ae?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${x?`<img src="${x}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${V.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${f.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${X}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${V.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:X,gc:V,def:ae,owned:ve})=>{const Se=window.innerWidth>=768?.76:.54,ze={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},he={purple:"#9b59b6",light_blue:"#00bcd4"},Ae=ze[ae==null?void 0:ae.color]||ze.purple,j=he[ae==null?void 0:ae.color]||he.purple,D=ae!=null&&ae.image_url?`/icons/${ae.image_url}`:null;return ve?`<div style="display:inline-block;zoom:${Se};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ae};border:1px solid ${j};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${X}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${D?`<img src="${D}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${V.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((ae==null?void 0:ae.effect)||V.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Se};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${V.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${X}</span></div></div>`},({type:X,owned:V,def:ae})=>{V&&Xo(X,ae,d)})}function ke(K){const ee="#E87722",ge="/";if(!b.length){K.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const H={};b.forEach(V=>{const ae=V.stadium_id||"?";(H[ae]=H[ae]||[]).push(V)});const X=Object.entries(H).map(([V,ae])=>({sid:V,def:p[V]||null,count:ae.length,card:ae[0]}));oe(X,({def:V,count:ae})=>{var j,D;const ve=(V==null?void 0:V.name)||"?",Se=((j=V==null?void 0:V.club)==null?void 0:j.encoded_name)||(V==null?void 0:V.country_code)||"—",ze=V!=null&&V.image_url?`${ge}icons/${V.image_url}`:((D=V==null?void 0:V.club)==null?void 0:D.logo_url)||(V!=null&&V.country_code?`https://flagcdn.com/w80/${V.country_code.toLowerCase()}.png`:null),he=ze?`<img src="${ze}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Ae=ae>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ae}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${ee},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ee}66">
          ${Ae}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ve}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${he}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Se}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:V,count:ae})=>{var j,D;const ve=window.innerWidth>=768?.76:.54,Se=(V==null?void 0:V.name)||"?",ze=((j=V==null?void 0:V.club)==null?void 0:j.encoded_name)||(V==null?void 0:V.country_code)||"—",he=V!=null&&V.image_url?`${ge}icons/${V.image_url}`:((D=V==null?void 0:V.club)==null?void 0:D.logo_url)||(V!=null&&V.country_code?`https://flagcdn.com/w80/${V.country_code.toLowerCase()}.png`:null),Ae=he?`<img src="${he}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${ve};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${ee},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${Se}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${Ae}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${ze}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(K=>{K.addEventListener("click",()=>{F=K.dataset.tab,M="Tous",W="",se=!1,e.querySelectorAll(".col-tab-btn").forEach(ee=>{const ge=ee.dataset.tab===F;ee.style.borderBottomColor=ge?"var(--green)":"transparent",ee.style.color=ge?"var(--green)":"var(--gray-600)"}),R(),P()})}),R(),P()}function Xo(e,t,i){const a=Re[e]||{icon:"⚡",desc:"Effet spécial."},l=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},c=d[t==null?void 0:t.color]||d.purple,g=s[t==null?void 0:t.color]||s.purple,o=(t==null?void 0:t.name)||e,r=(t==null?void 0:t.effect)||a.desc,m=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${c};border-radius:16px;border:2px solid ${g};
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Yt=1e3;function Zo(e,t,i,a){var T,n,p;const{state:l,toast:d,closeModal:s,navigate:c,refreshProfile:g}=i,o=e.formation,r={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function m(){const z=Rt[o]||{},I=hi[o]||[],q=290,N=360,C=20;function F(W){const se=z[W];return se?{x:se.x*q,y:se.y*N}:null}let M=`<svg width="${q}" height="${N}" viewBox="0 0 ${q} ${N}" xmlns="http://www.w3.org/2000/svg">`;for(const[W,se]of I){const ne=F(W),pe=F(se);!ne||!pe||(M+=`<line x1="${ne.x}" y1="${ne.y}" x2="${pe.x}" y2="${pe.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const W of Object.keys(z)){const se=F(W);if(!se)continue;const ne=W.replace(/\d+/,""),pe=r[ne]||"#555";M+=`<circle cx="${se.x}" cy="${se.y}" r="${C}" fill="${pe}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,M+=`<text x="${se.x}" y="${se.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ne}</text>`}return M+="</svg>",M}const b=t.filter(z=>z.formation===o);b.length;const u=!e.is_for_sale;a(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(T=document.getElementById("direct-sell-form-btn"))==null||T.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Yt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const z=b.find(q=>!q.is_for_sale)||b[0];if(!z){d("Aucune carte à vendre","error");return}await E.from("market_listings").delete().eq("card_id",z.id),await E.from("transfer_history").delete().eq("card_id",z.id);const{error:I}=await E.from("cards").delete().eq("id",z.id);if(I){d(I.message,"error");return}await E.from("users").update({credits:(l.profile.credits||0)+Yt}).eq("id",l.profile.id),await g(),d(`+${Yt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),c("collection")}),(n=document.getElementById("market-sell-form-btn"))==null||n.addEventListener("click",async()=>{const z=parseInt(document.getElementById("sell-price-form").value);if(!z||z<1){d("Prix invalide","error");return}await E.from("cards").update({is_for_sale:!0,sale_price:z}).eq("id",e.id),await E.from("market_listings").insert({seller_id:l.profile.id,card_id:e.id,price:z}),d("Carte mise en vente sur le marché !","success"),s(),c("collection")}),(p=document.getElementById("cancel-sell-form-btn"))==null||p.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),s(),c("collection")})}async function Fi(e,t,i,a){var Ce,Fe,De,ke,K,ee,ge;const{state:l,toast:d,openModal:s,closeModal:c,navigate:g,refreshProfile:o}=a,r=e.player,m=t.filter(H=>H.player.id===r.id),b=m.length,u=e.evolution_bonus||0,T=Math.max((Number(r.note_g)||0)+(r.job==="GK"||r.job2==="GK"?u:0),(Number(r.note_d)||0)+(r.job==="DEF"||r.job2==="DEF"?u:0),(Number(r.note_m)||0)+(r.job==="MIL"||r.job2==="MIL"?u:0),(Number(r.note_a)||0)+(r.job==="ATT"||r.job2==="ATT"?u:0)),n=r.rarity||"normal",{data:p}=await E.from("sell_price_configs").select("*").eq("rarity",n).lte("note_min",T).gte("note_max",T).order("note_min",{ascending:!1}).limit(1);((Ce=p==null?void 0:p[0])==null?void 0:Ce.price)??Yo[n];const z=r.rarity!=="legende",I=ao(r),q=((r.rarity==="pepite"||r.rarity==="papyte")&&e.current_note!=null?e.current_note:St(r,r.job))+u,N=r.rarity==="pepite"||r.rarity==="papyte",C=r.job2?(N?_i(e,ro(r.job2)):St(r,r.job2))+(St(r,r.job2)>0?u:0):null,F=Bt[r.job]||"#1A6B3C",M=r.job2?Bt[r.job2]:null,W=no[r.rarity]||"#ccc",se=Ei[r.country_code]||r.country_code||"",ne=e.evolution_bonus||0,le=q+ne,J=C||0,R=J>0?J+ne:0,P=m.map(H=>H.id);let oe={};if(P.length){const{data:H}=await E.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",P).order("transferred_at",{ascending:!0});(H||[]).forEach(X=>{oe[X.card_id]||(oe[X.card_id]=[]),oe[X.card_id].push(X)})}const me=H=>{const X=H.transferred_at?new Date(H.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",V=H.source==="booster"?"Booster":H.price?H.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${H.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${H.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${H.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${V}</div>
        <div style="font-size:11px;color:var(--gray-600)">${X}</div>
      </div>
    </div>`},we=P.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${b>1?`(${b})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${m.map((H,X)=>{const V=oe[H.id]||[],ae=H.is_for_sale,ve=V.length?V[V.length-1]:null,ze=(r.rarity==="pepite"||r.rarity==="papyte")&&H.current_note!=null?` (☆${H.current_note})`:"";return`
            <div data-card-id="${H.id}" data-card-idx="${X}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${ae?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${H.id}" ${ae?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${X+1}${ze}${ae?" 🏷️ En vente":""}</div>
                  ${ve?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${ve.club_name} · ${ve.source==="booster"?"Booster":ve.price?ve.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${X}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${V.length?`${V.length} club${V.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${X}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${V.map(me).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${le}${r.job2&&J>0?` / ${R}`:""}`:`Note actuelle : ${le}${r.job2&&J>0?` / ${R}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${b<=1?"#ccc":"#1A6B3C"};border-color:${b<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${b<=1?"not-allowed":"pointer"}"
            ${b<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${z?`
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
      <div style="width:140px;border-radius:12px;padding:6px;background:${W};flex-shrink:0">
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
            <div style="font-size:7px;text-transform:uppercase;color:#555">${se}</div>
            ${(Fe=r.clubs)!=null&&Fe.logo_url?`<img src="${r.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((De=r.clubs)==null?void 0:De.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${W}">${r.rarity.toUpperCase()}</div>
          ${r.rarity==="pepite"||r.rarity==="papyte"?`
          <div style="margin-top:6px;background:${W}18;border-left:3px solid ${W};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${W};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",r.note_g],["DEF",r.note_d],["MIL",r.note_m],["ATT",r.note_a]].map(([H,X])=>{const V=Bt[H],ae=H===r.job||H===r.job2,ve=(Number(X)||0)+(ae&&ne>0?ne:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${V}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${ve}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${H}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${b}</div>
        </div>
      </div>
    </div>
    ${we}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ke=document.getElementById("close-detail"))==null||ke.addEventListener("click",c);let xe=new Set;const be=()=>{const H=xe.size,X=document.getElementById("sell-action-panel");if(!X)return;X.style.display=H>0?"block":"none",document.getElementById("sell-selected-count").textContent=H;const V=document.getElementById("evolve-btn");V&&(V.textContent=`⬆️ Évoluer ${H>1?"(+"+H+")":""}`)};document.querySelectorAll(".expl-check").forEach(H=>{H.addEventListener("change",()=>{const X=H.dataset.id;H.checked?xe.add(X):xe.delete(X);const V=H.closest(".exemplaire-row");V&&(V.style.borderColor=H.checked?"#1A6B3C":"#eee"),be()})}),document.querySelectorAll(".exemplaire-row").forEach(H=>{H.addEventListener("click",X=>{if(X.target.closest("button")||X.target.tagName==="INPUT")return;const V=H.querySelector(".expl-check");V&&!V.disabled&&(V.checked=!V.checked,V.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(H=>{H.addEventListener("click",X=>{X.stopPropagation();const V=document.querySelector(`.expl-hist[data-hist="${H.dataset.idx}"]`);V&&(V.style.display=V.style.display==="none"?"flex":"none")})}),(K=document.getElementById("evolve-btn"))==null||K.addEventListener("click",async()=>{if(b<=1)return;const H=[...xe];if(!H.length)return;if(xe.has(e.id)){const he=document.createElement("div");he.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",he.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(he),he.querySelector("#err-close").addEventListener("click",()=>he.remove()),he.addEventListener("click",Ae=>{Ae.target===he&&he.remove()});return}const X=H.filter(he=>he!==e.id),V=r.rarity==="legende"?2:1;if((X.length||1)*V,!(!X.length&&H.length===1&&H[0]===e.id)){if(!X.length){d("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(he=>{const Ae=document.createElement("div");Ae.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",Ae.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${r.firstname} ${r.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${X.length}</strong> copie${X.length>1?"s":""} sacrifiée${X.length>1?"s":""}<br>
            📈 Note : <strong>${q+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${q+(e.evolution_bonus||0)+X.length*V}</strong>
            ${C&&C>0?`<br>📈 Note 2 : <strong>${C+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${C+(e.evolution_bonus||0)+X.length*V}</strong>`:""}
            ${r.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${V} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(Ae),Ae.querySelector("#sac-cancel").addEventListener("click",()=>{Ae.remove(),he(!1)}),Ae.querySelector("#sac-ok").addEventListener("click",()=>{Ae.remove(),he(!0)}),Ae.addEventListener("click",j=>{j.target===Ae&&(Ae.remove(),he(!1))})}))return;if(X.length){await E.from("market_listings").delete().in("card_id",X),await E.from("deck_cards").delete().in("card_id",X),await E.from("transfer_history").delete().in("card_id",X),await E.from("decks").update({stadium_card_id:null}).in("stadium_card_id",X);const{error:he}=await E.from("cards").delete().in("id",X);if(he){d("Erreur suppression : "+he.message,"error");return}}const ve=(e.evolution_bonus||0)+X.length*V,{error:Se}=await E.from("cards").update({evolution_bonus:ve}).eq("id",e.id);if(Se){d("Erreur évolution : "+Se.message,"error");return}const ze=q+ve;d(`⬆️ ${r.firstname} ${r.surname_encoded} : note ${q+e.evolution_bonus||q} → ${ze}${X.length?` · ${X.length} copie${X.length>1?"s":""} sacrifiée${X.length>1?"s":""}`:""} !`,"success",4e3),c(),g("collection")}),(ee=document.getElementById("market-sell-btn"))==null||ee.addEventListener("click",async()=>{var Se;const H=[...xe];if(!H.length){d("Sélectionne au moins un exemplaire","warning");return}const X=parseInt((Se=document.getElementById("sell-market-price"))==null?void 0:Se.value);if(!X||X<1){d("Prix invalide","error");return}const{error:V}=await E.from("cards").update({is_for_sale:!0,sale_price:X}).in("id",H);if(V){d(V.message,"error");return}const ae=H.map(ze=>({seller_id:l.profile.id,card_id:ze,price:X,status:"active"})),{error:ve}=await E.from("market_listings").insert(ae);ve&&console.warn("[Market] insert listings:",ve.message),d(`${H.length} carte${H.length>1?"s":""} mise${H.length>1?"s":""} en vente à ${X.toLocaleString("fr")} cr. chacune !`,"success"),c(),g("collection")}),(ge=document.getElementById("cancel-sell-btn"))==null||ge.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),c(),g("collection")})}const Zt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ni(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function so(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function lo(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Qo(e,t=44,i=58){var n;const a=e?ni(e):null,l=e?lo(e):null,d=so(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",c=vt[s]||"#555",g={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=(e==null?void 0:e._evolution_bonus)??(e==null?void 0:e.evolution_bonus)??0,m=(Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0)+(s===(e==null?void 0:e.job)||s===(e==null?void 0:e.job2)?o:0),b=Math.round(i*.19),u=Math.round(i*.25),T=i-b-u;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${g};background:${c};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${b}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${b}px;left:0;width:${t}px;height:${T}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${u}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${u+2}px;height:${u-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${u-4}px">🌍</span>`}
      <span style="font-size:${u-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${m}</span>
      ${l?`<img src="${l}" style="width:${u-4}px;height:${u-4}px;object-fit:contain">`:(n=e==null?void 0:e.clubs)!=null&&n.encoded_name?`<span style="font-size:${Math.max(4,u-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function fi(e,t){const{state:i,navigate:a,toast:l}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!s)return;const{data:c,error:g}=await E.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(g){l(g.message,"error");return}l("Deck créé !","success"),Di(c.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Di(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const c=prompt("Nouveau nom :",s.dataset.name);if(!c||c===s.dataset.name)return;const{error:g}=await E.from("decks").update({name:c}).eq("id",s.dataset.rename);if(g){l(g.message,"error");return}l("Deck renommé !","success"),fi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await E.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:c}=await E.from("decks").delete().eq("id",s.dataset.delete);if(c){l(c.message,"error");return}l("Deck supprimé.","success"),fi(e,t)})})}async function Di(e,t,i){const{state:a,toast:l}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select("*").eq("id",e).single(),{data:s}=await E.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),{data:c}=await E.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id).eq("card_type","stadium"),g=(s||[]).filter(z=>z.card_type==="player"&&z.player),o=(s||[]).filter(z=>z.card_type==="formation"),r=(c||[]).filter(z=>z.card_type==="stadium"),m=[...new Set(r.map(z=>z.stadium_id).filter(Boolean))];let b={};if(r.forEach(z=>{z.stadium_def&&z.stadium_id&&(b[z.stadium_id]=z.stadium_def)}),m.length&&Object.keys(b).length<m.length){const{data:z}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",m);(z||[]).forEach(I=>{b[I.id]=I})}const u=o.map(z=>z.formation).filter(Boolean),{data:T}=await E.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let n=d.formation||"4-4-2";u.length>0&&!u.includes(n)&&(n=u[0]);const p={deckId:e,name:d.name,formation:n,formationCardId:d.formation_card_id,stadiumCardId:d.stadium_card_id||null,slots:{},subs:[],playerCards:g,formationCards:o,stadiumCards:r,stadDefMap:b,availableFormations:u};(T||[]).forEach(z=>{z.is_starter?p.slots[z.position]=z.card_id:p.subs.includes(z.card_id)||p.subs.push(z.card_id)}),wt(t,p,i)}function wt(e,t,i){var o,r,m,b;const{navigate:a}=i;Zt[t.formation];const l=Gi(t.formation),d=l.filter(u=>t.slots[u]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Zt),c=(o=t.stadiumCards)==null?void 0:o.find(u=>u.id===t.stadiumCardId);c&&((r=t.stadDefMap)!=null&&r[c.stadium_id]);const g=t.subs.map(u=>t.playerCards.find(T=>T.id===u)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${g.map(u=>{const T={...u.player,_evolution_bonus:u.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
            ${Qo(T,44,58)}
            <button data-remove-sub="${u.id}"
              style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
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
  </div>`,en(e,t,l,i),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",u=>{t.formation=u.target.value;const T=Gi(t.formation),n={};T.forEach(p=>{t.slots[p]&&(n[p]=t.slots[p])}),t.slots=n,wt(e,t,i)}),(m=document.getElementById("stadium-select"))==null||m.addEventListener("change",u=>{t.stadiumCardId=u.target.value||null,wt(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>nn(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(u=>{u.addEventListener("click",()=>{t.subs=t.subs.filter(T=>T!==u.dataset.removeSub),wt(e,t,i)})}),(b=document.getElementById("add-sub-btn"))==null||b.addEventListener("click",()=>{on(t,e,i)})}function en(e,t,i,a){var q,N;const l=e.querySelector("#deck-field");if(!l)return;const d=(q=t.stadiumCards)==null?void 0:q.find(C=>C.id===t.stadiumCardId),s=d&&((N=t.stadDefMap)==null?void 0:N[d.stadium_id])||null,c=Rt[t.formation]||{},g=Yi(t.formation)||[],o={};for(const C of i){const F=t.slots[C],M=F?t.playerCards.find(W=>W.id===F):null;M!=null&&M.player?o[C]={...M.player,_evolution_bonus:M.evolution_bonus||0}:o[C]=null}const r=300,m=300,b=48,u=64,T=13,n=16,p=38;function z(C){const F=c[C];return F?{x:F.x*r,y:F.y*m}:null}let I="";for(const[C,F]of g){const M=z(C),W=z(F);if(!M||!W)continue;const se=o[C]?{...o[C],club_id:o[C].club_id,country_code:o[C].country_code,rarity:o[C].rarity}:null,ne=o[F]?{...o[F],club_id:o[F].club_id,country_code:o[F].country_code,rarity:o[F].rarity}:null,pe=at(se,ne);pe==="#ff3333"||pe==="#cc2222"?I+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${W.x.toFixed(1)}" y2="${W.y.toFixed(1)}" stroke="${pe}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(I+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${W.x.toFixed(1)}" y2="${W.y.toFixed(1)}" stroke="${pe}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,I+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${W.x.toFixed(1)}" y2="${W.y.toFixed(1)}" stroke="${pe}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const C of i){const F=z(C);if(!F)continue;const M=o[C],W=C.replace(/\d+/,""),se=vt[W]||"#555",ne=(F.x-b/2).toFixed(1),pe=(F.y-u/2).toFixed(1),le={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[M==null?void 0:M.rarity]||"#aaa";if(M){const J=ni(M),R=lo(M),P=so(M.country_code),oe=M._evolution_bonus||0,me=(Number(W==="GK"?M.note_g:W==="DEF"?M.note_d:W==="MIL"?M.note_m:M.note_a)||0)+(W===M.job||W===M.job2?oe:0),we=s&&(s.club_id&&String(M.club_id)===String(s.club_id)||s.country_code&&M.country_code===s.country_code),xe=we?me+10:me,be=u-T-n;I+=`<defs><clipPath id="dcp-${C}"><rect x="${ne}" y="${(F.y-u/2+T).toFixed(1)}" width="${b}" height="${be}"/></clipPath></defs>`,I+=`<rect x="${ne}" y="${pe}" width="${b}" height="${u}" rx="5" fill="${se}"/>`,J&&(I+=`<image href="${J}" x="${ne}" y="${(F.y-u/2+T).toFixed(1)}" width="${b}" height="${be}" clip-path="url(#dcp-${C})" preserveAspectRatio="xMidYMin slice"/>`),I+=`<rect x="${ne}" y="${pe}" width="${b}" height="${T}" fill="rgba(255,255,255,0.93)"/>`,I+=`<text x="${F.x.toFixed(1)}" y="${(F.y-u/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(M.surname_encoded||"").slice(0,9)}</text>`;const Ce=(F.y+u/2-n).toFixed(1);I+=`<rect x="${ne}" y="${Ce}" width="${b}" height="${n}" fill="rgba(255,255,255,0.93)"/>`,P&&(I+=`<image href="${P}" x="${(F.x-21).toFixed(1)}" y="${(F.y+u/2-n+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),I+=`<text x="${F.x.toFixed(1)}" y="${(F.y+u/2-n/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${we?"#E87722":"#111"}" font-family="Arial Black">${xe}</text>`,R&&(I+=`<image href="${R}" x="${(F.x+b/2-14).toFixed(1)}" y="${(F.y+u/2-n+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),I+=`<rect x="${ne}" y="${pe}" width="${b}" height="${u}" rx="5" fill="none" stroke="${le}" stroke-width="2"/>`}else I+=`<rect x="${ne}" y="${pe}" width="${b}" height="${u}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,I+=`<text x="${F.x.toFixed(1)}" y="${F.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,I+=`<text x="${F.x.toFixed(1)}" y="${(F.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${W}</text>`;I+=`<rect x="${ne}" y="${pe}" width="${b}" height="${u}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${C}" style="cursor:pointer"/>`}l.innerHTML=`<svg viewBox="${-p} ${-p} ${r+p*2} ${m+p*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${I}</svg>`,l.querySelectorAll(".deck-slot-hit").forEach(C=>{C.addEventListener("click",()=>tn(C.dataset.pos,t,e,a))})}function tn(e,t,i,a){var b,u,T;const{openModal:l,closeModal:d}=a,s=e.replace(/\d+/,""),c=t.slots[e],g=c?t.playerCards.find(n=>n.id===c):null;(b=g==null?void 0:g.player)==null||b.id;const o=new Set;Object.entries(t.slots).forEach(([n,p])=>{var I;if(n===e||!p)return;const z=t.playerCards.find(q=>q.id===p);(I=z==null?void 0:z.player)!=null&&I.id&&o.add(z.player.id)}),t.subs.forEach(n=>{var z;const p=t.playerCards.find(I=>I.id===n);(z=p==null?void 0:p.player)!=null&&z.id&&o.add(p.player.id)});const r=new Set,m=t.playerCards.filter(n=>{const p=n.player;return!(p.job===s||p.job2===s)||o.has(p.id)||r.has(p.id)?!1:(r.add(p.id),!0)});m.sort((n,p)=>{const z=n.evolution_bonus||0,I=p.evolution_bonus||0,q=(s==="GK"?n.player.note_g:s==="DEF"?n.player.note_d:s==="MIL"?n.player.note_m:n.player.note_a)+(s===n.player.job||s===n.player.job2?z:0);return(s==="GK"?p.player.note_g:s==="DEF"?p.player.note_d:s==="MIL"?p.player.note_m:p.player.note_a)+(s===p.player.job||s===p.player.job2?I:0)-q}),l(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${m.length>0?m.map(n=>{var C,F;const p=n.player,z=n.evolution_bonus||0,I=(s==="GK"?p.note_g:s==="DEF"?p.note_d:s==="MIL"?p.note_m:p.note_a)+(s===p.job||s===p.job2?z:0),q=ni(p),N={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[p.rarity];return`<div class="player-option" data-card-id="${n.id}"
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
          <div style="width:36px;height:36px;border-radius:8px;background:${vt[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${N};flex-shrink:0">
            ${I}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(u=document.getElementById("close-selector"))==null||u.addEventListener("click",d),(T=document.getElementById("remove-player"))==null||T.addEventListener("click",()=>{delete t.slots[e],d(),wt(i,t,a)}),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{t.slots[e]=n.dataset.cardId,d(),wt(i,t,a)})})}function on(e,t,i){var g;const{openModal:a,closeModal:l}=i,d=new Set;Object.keys(e.slots).forEach(o=>{var b;const r=e.slots[o];if(!r)return;const m=e.playerCards.find(u=>u.id===r);(b=m==null?void 0:m.player)!=null&&b.id&&d.add(m.player.id)}),e.subs.forEach(o=>{var m;const r=e.playerCards.find(b=>b.id===o);(m=r==null?void 0:r.player)!=null&&m.id&&d.add(r.player.id)});const s=new Set,c=e.playerCards.filter(o=>{var r,m,b;return d.has((r=o.player)==null?void 0:r.id)||s.has((m=o.player)==null?void 0:m.id)?!1:(s.add((b=o.player)==null?void 0:b.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?c.map(o=>{var u;const r=o.player,m=ni(r),b=(r.job==="GK"?r.note_g:r.job==="DEF"?r.note_d:r.job==="MIL"?r.note_m:r.note_a)+(o.evolution_bonus||0);return`<div class="player-option" data-card-id="${o.id}"
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
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(g=document.getElementById("close-sub-selector"))==null||g.addEventListener("click",l),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),l(),wt(t,e,i)})})}async function nn(e,t){const{state:i,toast:a,navigate:l}=t,d=e.formationCards.find(g=>g.formation===e.formation),s=(d==null?void 0:d.id)||e.formationCardId;await E.from("decks").update({formation:e.formation,formation_card_id:s||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await E.from("deck_cards").delete().eq("deck_id",e.deckId);const c=[];if(Object.entries(e.slots).forEach(([g,o],r)=>{c.push({deck_id:e.deckId,card_id:o,position:g,is_starter:!0,slot_order:r})}),e.subs.forEach((g,o)=>{c.push({deck_id:e.deckId,card_id:g,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),c.length>0){const{error:g}=await E.from("deck_cards").insert(c);if(g){a(g.message,"error");return}}a("Deck enregistré ✅","success"),l("decks")}function Gi(e){const t=Zt[e]||Zt["4-4-2"],i=["GK1"];for(let a=1;a<=t.DEF;a++)i.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)i.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)i.push(`ATT${a}`);return i}async function co(){const{data:e}=await E.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await E.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(a=>a.booster_id===i.id)}))}function rn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,l)=>a+Number(l.percentage),0);let i=Math.random()*t;for(const a of e)if(i-=Number(a.percentage),i<=0)return a;return e[e.length-1]}const po=()=>Object.keys(Rt),an=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],gi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function sn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Pi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},dn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ln={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ni(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function cn(e){var r,m;const t=e.player;if(!t)return"";const i=t.job||"ATT",a=Pi[i],l=dn[t.rarity]||"#ccc",d=Ni(t,i),s=t.job2?Ni(t,t.job2):null,c=t.job2?Pi[t.job2]:null,g=sn(t),o=ln[t.country_code]||t.country_code||"";return`
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
        ${g?`<img src="${g}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${o}</div>
        ${(r=t.clubs)!=null&&r.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=t.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function uo(e){var l;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const i=((l=Object.entries(t).sort((d,s)=>s[1]-d[1])[0])==null?void 0:l[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_raw:e}}async function pn(e,{state:t,navigate:i,toast:a}){var m,b;const l=((m=t.profile)==null?void 0:m.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await co()).map(uo)}catch(u){console.warn("Erreur chargement boosters DB, fallback hardcodé",u)}d.length||(d=an.map(u=>({...u,rates:[],isPub:u.id==="players_pub"})));const s=await E.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(u=>u.data||[]),c=new Set(s.filter(u=>u.card_type==="stadium").map(u=>u.stadium_id)),g=new Set(s.filter(u=>u.card_type==="formation").map(u=>u.formation)),o=new Set(s.filter(u=>u.card_type==="game_changer").map(u=>u.gc_type)),r={};for(const u of d){if(u.allow_duplicates!==!1||!((b=u.rates)!=null&&b.length))continue;const T=[...new Set((u.rates||[]).map(p=>p.card_type))];let n=!1;for(const p of T)if(p==="stadium"){const{data:z}=await E.from("stadium_definitions").select("id");if((z||[]).some(I=>!c.has(I.id))){n=!0;break}}else if(p==="game_changer"){const{data:z}=await E.from("gc_definitions").select("name").eq("is_active",!0);if((z||[]).some(I=>!o.has(I.name))){n=!0;break}}else if(p==="formation"){const{FORMATION_LINKS:z}=await oi(async()=>{const{FORMATION_LINKS:I}=await import("./formation-links-Dnttc-Cp.js").then(q=>q.m);return{FORMATION_LINKS:I}},__vite__mapDeps([0,1]));if(Object.keys(z).some(I=>!g.has(I))){n=!0;break}}else{n=!0;break}n||(r[u.id]=!0)}e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(u=>{u.addEventListener("click",async()=>{const T=d.find(n=>n.id===u.dataset.booster);if(T){u.style.opacity="0.5",u.style.pointerEvents="none";try{await un(T,{state:t,toast:a,navigate:i,container:e})}catch(n){a(n.message,"error"),u.style.opacity="",u.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(u=>{u.addEventListener("click",T=>{T.stopPropagation();const n=d.find(p=>p.id===u.dataset.boosterId);xn(n)})})}async function un(e,{state:t,toast:i,navigate:a,container:l}){var m,b;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await bn();const{data:d}=await E.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((d||[]).filter(u=>u.card_type==="player").map(u=>u.player_id)),c=new Set((d||[]).filter(u=>u.card_type==="formation").map(u=>u.formation));let g=[],o=null;try{if((m=e.rates)!=null&&m.length)g=await mi(t.profile,e);else{const u=e.type||"player";u==="player"?g=await fo(t.profile,e.cardCount,e.cost):u==="game_changer"?g=await go(t.profile,e.cardCount,e.cost):u==="formation"?g=await mo(t.profile,e.cost):g=await mi(t.profile,e)}}catch(u){o=u.message||String(u),console.error("[Booster] Erreur:",u)}if(!(g!=null&&g.length)){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",u.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${o||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(u),(b=u.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>u.remove());return}g.forEach(u=>{u.card_type==="player"&&u.player?u.isDuplicate=s.has(u.player.id):u.card_type==="formation"&&(u.isDuplicate=c.has(u.formation))});const{data:r}=await E.from("users").select("*").eq("id",t.profile.id).single();r&&(t.profile=r),xo(g,e,a)}function fn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function gn(e,t){let i;switch(t){case"legende":i=e.filter(a=>a.rarity==="legende"),i.length||(i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),i.length||(i=e.filter(a=>mt(a)>=6));break;case"special":i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),i.length||(i=e.filter(a=>mt(a)>=6));break;case"normal_high":i=e.filter(a=>a.rarity==="normal"&&mt(a)>=6),i.length||(i=e.filter(a=>mt(a)>=6));break;default:i=e.filter(a=>a.rarity==="normal"&&mt(a)>=1&&mt(a)<=5),i.length||(i=e.filter(a=>a.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function mi(e,t){if(t.cost>0){const{error:b}=await E.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(b)throw b}const i=t.allow_duplicates!==!1;let a=[];const{data:l,error:d}=await E.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(d){const{data:b}=await E.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);a=b||[]}else a=l||[];const s=new Set(a.filter(b=>b.card_type==="player").map(b=>b.player_id)),c=new Set(a.filter(b=>b.card_type==="formation").map(b=>b.formation)),g=new Set(a.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),o=new Set(a.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),r=new Set,m=[];for(let b=0;b<(t.cardCount||5);b++){const u=rn(t.rates);if(u){if(u.card_type==="player"){const T=M=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[M]||M,n=u.rarity?T(u.rarity):null;let p=E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n&&(p=p.eq("rarity",n));const{data:z}=await p;let I=z||[];if((u.note_min||u.note_max)&&(I=I.filter(M=>{const W=Math.max(Number(M.note_g)||0,Number(M.note_d)||0,Number(M.note_m)||0,Number(M.note_a)||0);return(!u.note_min||W>=u.note_min)&&(!u.note_max||W<=u.note_max)})),I.length||(u.note_min||u.note_max?(I=z||[],console.warn("[Booster] Aucun joueur avec note",u.note_min,"-",u.note_max,"— fallback rareté uniquement")):I=z||[]),!I.length)continue;let q=I.filter(M=>!r.has(M.id));if(i)q.length||(q=I);else if(q=q.filter(M=>!s.has(M.id)),!q.length)continue;const N=q[Math.floor(Math.random()*q.length)];r.add(N.id);const C=s.has(N.id),{data:F}=await E.from("cards").insert({owner_id:e.id,player_id:N.id,card_type:"player"}).select().single();F&&(m.push({...F,player:N,isDuplicate:C}),E.rpc("record_transfer",{p_card_id:F.id,p_player_id:N.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(u.card_type==="game_changer"){const{data:T}=await E.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),n=T!=null&&T.length?T:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],p=i?n:n.filter(N=>!g.has(N.name));if(!i&&!p.length)continue;const I=p[Math.floor(Math.random()*p.length)].name,{data:q}=await E.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:I}).select().single();q&&m.push(q)}else if(u.card_type==="formation"){const T=po(),n=i?T:T.filter(q=>!c.has(q));if(!i&&!n.length)continue;const p=n[Math.floor(Math.random()*n.length)],z=c.has(p),{data:I}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:p}).select();I!=null&&I[0]&&m.push({...I[0],isDuplicate:z})}else if(u.card_type==="stadium"){const{data:T,error:n}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(n){console.error("[Booster] stadium_definitions:",n.message);continue}if(!(T!=null&&T.length)){console.warn("[Booster] Aucun stade en DB");continue}const p=i?T:T.filter(N=>!o.has(N.id));if(!i&&!p.length)continue;const z=p[Math.floor(Math.random()*p.length)],{data:I,error:q}=await E.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:z.id}).select("id,card_type,stadium_id").single();if(q){console.error("[Booster] insert stadium card:",q.message);continue}I&&m.push({...I,rarity:"normal",_stadiumDef:z})}}}return m}async function fo(e,t,i){if(i>0){const{error:o}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:a}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const l=a.filter(o=>o.job==="GK"),d=a.filter(o=>o.job!=="GK"),s=!e.first_booster_opened&&l.length>0,c=[];for(let o=0;o<t;o++){const r=o===0&&s?l:o===0?d:a,m=fn(),b=gn(r,m);b&&c.push(b)}s&&await E.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:g}=await E.from("cards").insert(c.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(g||[]).forEach((o,r)=>{E.rpc("record_transfer",{p_card_id:o.id,p_player_id:c[r].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),c.map((o,r)=>({...g[r],player:o}))}async function go(e,t,i){const{error:a}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a;const{data:l}=await E.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=l!=null&&l.length?l:Object.keys(gi).map(r=>({name:r,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const r=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:r.name,gc_definition_id:r.id||null}}),{data:c,error:g}=await E.from("cards").insert(s).select();return g&&console.error("[Booster GC] Erreur insert:",g.message,g),(c||[]).map(r=>{const m=l==null?void 0:l.find(b=>b.name===r.gc_type||b.id===r.gc_definition_id);return{...r,_gcDef:m||null}})}async function mo(e,t){const{error:i}=await E.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:a}=await E.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),l=new Set((a||[]).map(r=>r.formation)),d=po(),s=d[Math.floor(Math.random()*d.length)],c=l.has(s),{data:g,error:o}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return o&&console.error("[Booster Formation] Erreur insert:",o.message,o),(g||[]).map(r=>({...r,isDuplicate:c}))}function xo(e,t,i,a=null){var le,J;if(!e||e.length===0){const R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",R.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(R),(le=R.querySelector("#anim-close-err"))==null||le.addEventListener("click",()=>R.remove());return}e=[...e].sort((R,P)=>{const oe=R.player?mt(R.player):-1;return(P.player?mt(P.player):-1)-oe});const l=document.createElement("div");l.id="booster-anim-overlay",l.innerHTML=`
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
  `,document.body.appendChild(l);let d=!1;const s=document.getElementById("pack-cut-zone"),c=document.getElementById("pack-blade");let g=!1;const o=R=>R.touches&&R.touches[0]?R.touches[0].clientX:R.clientX;function r(R){d||(g=!0,c.style.opacity="1",m(R))}function m(R){if(!g||d)return;const P=s.getBoundingClientRect(),oe=o(R)-P.left,me=Math.max(0,Math.min(1,oe/P.width));c.style.width=me*P.width+"px",me>=.82&&u()}function b(){d||(g=!1,c.style.transition="width .2s ease, opacity .2s ease",c.style.width="0",c.style.opacity="0",setTimeout(()=>{d||(c.style.transition="")},220))}function u(){var P;if(d)return;d=!0,g=!1,c.style.width="100%",c.style.opacity="1",(P=document.getElementById("cut-flash"))==null||P.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const R=document.getElementById("cut-hint");R&&(R.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{c.style.opacity="0",document.getElementById("pack-phase").style.display="none",z(0)},620)}s.addEventListener("pointerdown",r),window.addEventListener("pointermove",m),window.addEventListener("pointerup",b),s.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",m,{passive:!0}),window.addEventListener("touchend",b);let T=0,n=!1;const p=new Set;function z(R){T=R,document.getElementById("reveal-phase").style.display="flex",I(),q(R,0),W()}function I(){const R=document.getElementById("card-dots");R&&(R.innerHTML=e.map((P,oe)=>`<div class="card-dot" data-i="${oe}" style="width:8px;height:8px;border-radius:50%;background:${oe===T?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),R.querySelectorAll(".card-dot").forEach(P=>P.addEventListener("click",()=>C(parseInt(P.dataset.i)))))}function q(R,P){var ke;const oe=e[R],me=document.getElementById("card-counter"),we=document.getElementById("card-track");me&&(me.textContent=`Carte ${R+1} / ${e.length}`);const xe=document.getElementById("reveal-btns");xe&&(xe.style.display=R===e.length-1?"flex":"none");const be=oe.card_type==="player"&&((ke=oe.player)==null?void 0:ke.rarity)==="legende",Ce=!p.has(R);p.add(R);let Fe=0;if(oe.card_type==="player"&&oe.player){const K=oe.player,ee=K.job||"ATT";Fe=Number(ee==="GK"?K.note_g:ee==="DEF"?K.note_d:ee==="MIL"?K.note_m:K.note_a)||0}const De=K=>{we.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${be?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${mn(oe)}</div>
          ${oe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ee=document.getElementById("current-card-wrap");P!==0?(ee.style.transition="none",ee.style.transform=`translateX(${P>0?100:-100}%)`,requestAnimationFrame(()=>{ee.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ee.style.transform="translateX(0)"})):ee.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),K||be?ne():pe(),I()};Ce&&Fe>6&&oe.card_type==="player"&&oe.player?N(oe,()=>De(!0)):De(!1)}function N(R,P){var Fe;n=!0;const oe=R.player,me=`https://flagsapi.com/${oe.country_code}/flat/64.png`,we=(Fe=oe.clubs)==null?void 0:Fe.logo_url,xe=document.getElementById("walkout-overlay"),be=document.getElementById("walkout-stage");if(!xe||!be){n=!1,P();return}xe.style.display="flex";const Ce=()=>{const De=be.firstElementChild;De&&(De.classList.remove("wo-in"),De.classList.add("wo-out"))};be.innerHTML=`<img class="wo-in" src="${me}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(Ce,2e3),setTimeout(()=>{var De;be.innerHTML=we?`<img class="wo-in" src="${we}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((De=oe.clubs)==null?void 0:De.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(Ce,4450),setTimeout(()=>{xe.style.display="none",be.innerHTML="",n=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),P()},4900)}function C(R){if(n||R<0||R>=e.length||R===T)return;const P=R>T?1:-1;T=R,q(R,P)}function F(){C(T+1)}function M(){C(T-1)}function W(){const R=document.getElementById("card-viewport");if(!R||R._swipeBound)return;R._swipeBound=!0;let P=0,oe=0,me=0,we=!1;const xe=ke=>ke.touches?ke.touches[0].clientX:ke.clientX,be=ke=>ke.touches?ke.touches[0].clientY:ke.clientY,Ce=ke=>{we=!0,P=xe(ke),oe=be(ke),me=0},Fe=ke=>{if(!we)return;me=xe(ke)-P;const K=be(ke)-oe;if(Math.abs(me)<Math.abs(K))return;const ee=document.getElementById("current-card-wrap");ee&&(ee.style.transition="none",ee.style.transform=`translateX(${me*.6}px) rotate(${me*.02}deg)`)},De=()=>{if(!we)return;we=!1;const ke=document.getElementById("current-card-wrap"),K=55;me<=-K&&T<e.length-1?F():me>=K&&T>0?M():ke&&(ke.style.transition="transform .2s ease",ke.style.transform="translateX(0)")};R.addEventListener("pointerdown",Ce),R.addEventListener("pointermove",Fe),R.addEventListener("pointerup",De),R.addEventListener("pointercancel",De),R.addEventListener("touchstart",Ce,{passive:!0}),R.addEventListener("touchmove",Fe,{passive:!0}),R.addEventListener("touchend",De),R.addEventListener("click",ke=>{if(Math.abs(me)>8)return;const K=R.getBoundingClientRect();ke.clientX-K.left>K.width/2?F():M()})}let se=null;function ne(){const R=document.getElementById("fireworks-canvas");if(!R)return;R.width=window.innerWidth,R.height=window.innerHeight;const P=R.getContext("2d"),oe=[];function me(){const xe=Math.random()*R.width,be=Math.random()*R.height*.6,Ce=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Fe=Ce[Math.floor(Math.random()*Ce.length)];for(let De=0;De<60;De++){const ke=Math.PI*2/60*De,K=2+Math.random()*5;oe.push({x:xe,y:be,vx:Math.cos(ke)*K,vy:Math.sin(ke)*K,alpha:1,color:Fe,size:2+Math.random()*3})}}me(),se=setInterval(me,600);function we(){if(document.getElementById("fireworks-canvas")){P.clearRect(0,0,R.width,R.height);for(let xe=oe.length-1;xe>=0;xe--){const be=oe[xe];if(be.x+=be.vx,be.y+=be.vy+.08,be.vy*=.98,be.alpha-=.018,be.alpha<=0){oe.splice(xe,1);continue}P.globalAlpha=be.alpha,P.fillStyle=be.color,P.beginPath(),P.arc(be.x,be.y,be.size,0,Math.PI*2),P.fill()}P.globalAlpha=1,(se!==null||oe.length>0)&&requestAnimationFrame(we)}}we()}function pe(){se!==null&&(clearInterval(se),se=null);const R=document.getElementById("fireworks-canvas");R&&R.getContext("2d").clearRect(0,0,R.width,R.height)}if(a){const R=document.getElementById("reveal-btns");R&&(R.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(J=document.getElementById("reveal-next"))==null||J.addEventListener("click",()=>{pe(),l.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{pe(),l.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{pe(),l.remove(),i("boosters")})}function mn(e){var t,i,a,l;if(e.card_type==="player"&&e.player)return cn(e);if(e.card_type==="game_changer"){const d=e._gcDef,s=(d==null?void 0:d.gc_type)==="ultra_game_changer",c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},g={purple:"#b06ce0",light_blue:"#00d4ef"},o=c[d==null?void 0:d.color]||c.purple,r=g[d==null?void 0:d.color]||g.purple,m=(d==null?void 0:d.name)||e.gc_type||"Game Changer",b=(d==null?void 0:d.effect)||((t=gi[e.gc_type])==null?void 0:t.desc)||"",u=d!=null&&d.image_url?`/icons/${d.image_url}`:null,T=((i=gi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${o};border-radius:14px;border:3px solid ${r};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${r}88;flex-shrink:0">
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
    </div>`;if(e.card_type==="stadium"){const d=e._stadiumDef,s=(d==null?void 0:d.name)||"Stade",c=((a=d==null?void 0:d.club)==null?void 0:a.encoded_name)||(d==null?void 0:d.country_code)||"—",g=d!=null&&d.image_url?`/icons/${d.image_url}`:((l=d==null?void 0:d.club)==null?void 0:l.logo_url)||(d!=null&&d.country_code?`https://flagcdn.com/64x48/${d.country_code.toLowerCase()}.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${s.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${s}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${g?`<img src="${g}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
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
    `,document.body.appendChild(t);let i=5;const a=setInterval(()=>{i--;const l=document.getElementById("mw-ad-cd");l&&(l.textContent=i),i<=0&&(clearInterval(a),t.remove(),e(!0))},1e3)})}async function hn(e,{state:t,navigate:i,toast:a,refreshProfile:l}){var b,u;const{data:d}=await E.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let s=Array.isArray((b=t.profile)==null?void 0:b.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await E.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let c=null;try{const n=(await co()).find(p=>(p.name||"").toLowerCase().includes("new player"));n&&(c=uo(n))}catch(T){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',T)}const g=s.length;let o=0;e.innerHTML=`
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
  </div>`;const r=async()=>{await E.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function m(){var I;if(o>=g||!s.length){await E.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),l&&await l(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const T=s[0],{data:n}=await E.from("users").select("*").eq("id",t.user.id).single();n&&(t.profile=n);let p=[];try{if(T.type==="formation")p=await mo(t.profile,0);else if(T.type==="game_changer")p=await go(t.profile,T.count||3,0);else if(c&&((I=c.rates)!=null&&I.length)){const q={...c,cost:0,cardCount:T.count||c.cardCount||5};p=await mi(t.profile,q),T.guaranteeGK&&!t.profile.first_booster_opened&&(p.some(C=>C.player&&C.player.job==="GK")||await vn(t.profile,p),await E.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else p=await fo(t.profile,T.count||5,0)}catch(q){a(q.message||"Erreur ouverture booster","error");return}s.shift(),o++,await r();const z=T.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:T.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${o}/${g})`,img:(c==null?void 0:c.img)||"/icons/booster-players.png"};xo(p,z,i,()=>{m()})}(u=document.getElementById("onboard-start"))==null||u.addEventListener("click",()=>m())}async function vn(e,t){try{const{data:i}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const a=i[Math.floor(Math.random()*i.length)],l=t.findIndex(s=>s.player);if(l===-1)return;const d=t[l];await E.from("cards").update({player_id:a.id}).eq("id",d.id),t[l]={...d,player_id:a.id,player:a}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const It={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Mt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function _t(e,t,i,a,l){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",l)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function xi(e,t){var d,s;const i=e.player,a=e.evolution_bonus||0,l=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?a:0)+(i.job2==="GK"&&l>0?a:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?a:0)+(i.job2==="DEF"&&l>0?a:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?a:0)+(i.job2==="MIL"&&l>0?a:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?a:0)+(i.job2==="ATT"&&l>0?a:0),evolution_bonus:a,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((d=i.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((s=i.clubs)==null?void 0:s.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function jt(e,t){if(!t||!e)return e;const{club_id:i,country_code:a}=t;return Object.values(e).forEach(l=>{Array.isArray(l)&&l.forEach(d=>{const s=i&&String(d.club_id)===String(i),c=a&&String(d.country_code)===String(a);(s||c)&&(d.stadiumBonus=!0)})}),e}function Nt(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:a}=t;return e.forEach(l=>{if(!l)return;const d=i&&String(l.club_id)===String(i),s=a&&String(l.country_code)===String(a);(d||s)&&(l.stadiumBonus=!0)}),e}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ri(){const e=Math.random()*100;return e<10?3:e<30?2:1}function yt(e,t){const i=It[t]||It["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const c=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===s).sort((o,r)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(r.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:s})),g=lt(c.length);c.forEach((o,r)=>{o._col=g[r]}),a[s]=c}return a}const d=[...e];for(const s of["GK","DEF","MIL","ATT"]){const c=[];for(let o=0;o<i[s];o++){let r=d.findIndex(m=>m.job===s);if(r===-1&&(r=d.findIndex(m=>m.job2===s)),r===-1&&(r=0),d[r]){const m={...d[r],_line:s};c.push(m),d.splice(r,1)}}const g=lt(c.length);c.forEach((o,r)=>{o._col=g[r]}),a[s]=c}return a}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Je(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ai(e,t,i){const l=new Set,d=t.filter(r=>{const m=r.gc_type||r.id;return l.has(m)?!1:(l.add(m),!0)});let s=[];function c(r,m){const b=r._gcDef,u={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},T={purple:"#9b59b6",light_blue:"#00bcd4"},n=u[b==null?void 0:b.color]||u.purple,p=T[b==null?void 0:b.color]||T.purple;return`<div class="gc-select-card" data-id="${r.id}"
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
    </div>`}const g=r=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(r)};function o(){var m,b,u;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const r=s.length>0;e.innerHTML=`
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(T=>{T.addEventListener("click",()=>{const n=T.dataset.id,p=d.find(I=>I.id===n);if(!p)return;const z=s.findIndex(I=>I.gc_type===p.gc_type);z>-1?s.splice(z,1):s.length<3&&s.push(p),o()})}),(m=e.querySelector("#gc-launch"))==null||m.addEventListener("click",()=>{r&&g(s)}),(b=e.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>g([])),(u=e.querySelector("#gc-reset"))==null||u.addEventListener("click",()=>{s.length&&(s=[],o())})}o()}function wn(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function _n(e,t,i){const{state:a,navigate:l}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){_t(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>l("decks"));return}const s=d.map(b=>b.id),{data:c}=await E.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order"),g=[...new Set((c||[]).filter(b=>{var u,T;return((u=b.card)==null?void 0:u.card_type)==="stadium"&&((T=b.card)==null?void 0:T.stadium_id)}).map(b=>b.card.stadium_id))],o={};if(g.length){const{data:b}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",g);(b||[]).forEach(u=>{o[u.id]=u}),(c||[]).forEach(u=>{var T,n;((T=u.card)==null?void 0:T.card_type)==="stadium"&&((n=u.card)!=null&&n.stadium_id)&&(u.card._stadiumDef=o[u.card.stadium_id]||null)})}let r=0;function m(){var C,F,M,W,se,ne,pe;const b=d[r],u=(c||[]).filter(le=>le.deck_id===b.id),T=u.filter(le=>{var J;return le.is_starter&&((J=le.card)==null?void 0:J.player)}).map(le=>xi(le.card,le.position)),n=u.find(le=>{var J;return((J=le.card)==null?void 0:J.card_type)==="formation"}),p=b.formation||((C=n==null?void 0:n.card)==null?void 0:C.formation)||"4-4-2";let z=T.length>=11?yt(T,p):null,I=((F=b.stadium_card)==null?void 0:F.stadium_def)||null;I&&z&&(z=jt(z,I));const q=T.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
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
        ${z?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ft(z,p,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${T.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${d.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${d.map((le,J)=>`<div style="width:7px;height:7px;border-radius:50%;background:${J===r?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const J=e.querySelector(".deck-preview-wrap svg");J&&(J.removeAttribute("width"),J.removeAttribute("height"),J.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",J.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(W=document.getElementById("prev-deck"))==null||W.addEventListener("click",()=>{r>0&&(r--,m())}),(se=document.getElementById("next-deck"))==null||se.addEventListener("click",()=>{r<d.length-1&&(r++,m())}),(ne=document.getElementById("validate-deck"))==null||ne.addEventListener("click",()=>{if(!q)return;const le=t.state.params||{};t.navigate("match",{...le,matchMode:le.matchMode||i,deckId:b.id})}),(pe=document.getElementById("cancel-deck-select"))==null||pe.addEventListener("click",()=>{Je(e),l("home")});const N=document.getElementById("deck-swipe-zone");if(N){let le=0,J=0;N.addEventListener("touchstart",R=>{le=R.touches[0].clientX,J=R.touches[0].clientY},{passive:!0}),N.addEventListener("touchend",R=>{const P=R.changedTouches[0].clientX-le,oe=R.changedTouches[0].clientY-J;Math.abs(P)<40||Math.abs(P)<Math.abs(oe)||(P<0&&r<d.length-1?(r++,m()):P>0&&r>0&&(r--,m()))},{passive:!0})}}m()}function yo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function We(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const a=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),l=yo(e),d=e._line||e.job||"MIL",s=Mt[d]||"#555",c={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",g=e.note!==void 0?Number(e.note)||0:(Number(Le(e,d))||0)+(e.boost||0),o=bo(e==null?void 0:e.country_code),r=Math.round(i*.19),m=Math.round(i*.25),b=i-Math.round(i*.19)-Math.round(i*.25),u=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${s};position:relative;overflow:hidden;flex-shrink:0;opacity:${u}">
    <div style="position:absolute;top:0;left:0;right:0;height:${r}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${a&&!(e!=null&&e.used)?`<img src="${a}" style="position:absolute;top:${r}px;left:0;width:${t}px;height:${b}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${m}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Qt(e==null?void 0:e.country_code)?`<img src="${Qt(e.country_code)}" style="width:${m+2}px;height:${m-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${m-4}px">${o}</span>`}
      <span style="font-size:${m-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":g}</span>
      ${l?`<img src="${l}" style="width:${m-4}px;height:${m-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,m-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ot(e,t,i){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let l='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((d,s)=>{if(l+=We(d,40,52),s<a.length-1){const c=at(d,a[s+1]);l+=`<div style="width:7px;height:3px;background:${c==="#ff3333"||c==="#cc2222"?"rgba(255,255,255,0.12)":c};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(l+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),l+="</div>",l}function Qt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function bo(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ut(e,t,i,a,l=310,d=310,s=[]){var q;const c=Rt[t]||{},g=Yi(t)||hi[t]||[],o={},r=["ATT","MIL","DEF","GK"];for(const N of r)(e[N]||[]).forEach((F,M)=>{o[`${N}${M+1}`]=F});function m(N){const C=c[N];return C?{x:C.x*l,y:C.y*d}:null}let b="";for(const[N,C]of g){const F=m(N),M=m(C);if(!F||!M)continue;const W=o[N],se=o[C],ne=at(W,se);ne==="#00ff88"||ne==="#FFD700"?(b+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${ne}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,b+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${ne}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):b+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${ne}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const u=48,T=64,n=13,p=16,z={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[N,C]of Object.entries(o)){const F=m(N);if(!F||!C)continue;const M=N.replace(/[0-9]/g,""),W=Mt[M]||"#555",se=s.includes(C.cardId),ne=i==="attack"&&(["MIL","ATT"].includes(M)||se)&&!C.used||i==="defense"&&["GK","DEF","MIL"].includes(M)&&!C.used,pe=a.includes(C.cardId);let le;i==="attack"?le=se?Math.max(1,Number(C.note_a)||0):M==="MIL"?Number(C.note_m)||0:Number(C.note_a)||0:i==="defense"?le=M==="GK"?Number(C.note_g)||0:M==="MIL"?Number(C.note_m)||0:Number(C.note_d)||0:le=Number(M==="GK"?C.note_g:M==="DEF"?C.note_d:M==="MIL"?C.note_m:C.note_a)||0,le=le+(C.boost||0),C.stadiumBonus&&(i==="attack"&&(M==="ATT"||M==="MIL")||i==="defense"&&(M==="GK"||M==="DEF"||M==="MIL")?le+=10:i||(le+=10));const J=(F.x-u/2).toFixed(1),R=(F.y-T/2).toFixed(1),P=z[C==null?void 0:C.rarity]||z.normal;if(C.used){const Fe=typeof import.meta<"u"&&"/"||"/",ke=`${typeof window<"u"&&((q=window.location)==null?void 0:q.origin)||""}${Fe}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");b+=`<rect x="${J}" y="${R}" width="${u}" height="${T}" rx="5" fill="#161616"/>`,b+=`<image href="${ke}" xlink:href="${ke}" x="${J}" y="${R}" width="${u}" height="${T}" preserveAspectRatio="xMidYMid slice"/>`,b+=`<rect x="${J}" y="${R}" width="${u}" height="${T}" rx="5" fill="none" stroke="${P}" stroke-width="2" opacity="0.7"/>`,b+=`<rect x="${J}" y="${R}" width="${u}" height="${T}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${C.cardId}" data-role="${M}" style="cursor:pointer"/>`;continue}const oe=pe?.45:1,me=pe?"#FFD700":P,we=pe?3:(C==null?void 0:C.rarity)==="legende"||(C==null?void 0:C.rarity)==="légende"||(C==null?void 0:C.rarity)==="pepite"||(C==null?void 0:C.rarity)==="pépite"?2.5:2,xe=T-n-p;b+=`<defs><clipPath id="cp-${N}"><rect x="${J}" y="${(F.y-T/2+n).toFixed(1)}" width="${u}" height="${xe}"/></clipPath></defs>`,b+=`<rect x="${J}" y="${R}" width="${u}" height="${T}" rx="5" fill="${W}" opacity="${oe}"/>`;const be=Pe(C);be&&(b+=`<image href="${be}" xlink:href="${be}" x="${J}" y="${(F.y-T/2+n).toFixed(1)}" width="${u}" height="${xe}" clip-path="url(#cp-${N})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${J}" y="${R}" width="${u}" height="${n}" rx="4" fill="rgba(255,255,255,0.92)"/>`,b+=`<text x="${F.x.toFixed(1)}" y="${(F.y-T/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.name||"").slice(0,9)}</text>`;const Ce=(F.y+T/2-p).toFixed(1);b+=`<rect x="${J}" y="${Ce}" width="${u}" height="${p}" fill="rgba(255,255,255,0.92)"/>`;{const Fe=Qt(C.country_code);Fe?b+=`<image href="${Fe}" xlink:href="${Fe}" x="${(F.x-20).toFixed(1)}" y="${(F.y+T/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:b+=`<text x="${(F.x-13).toFixed(1)}" y="${(F.y+T/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${bo(C.country_code)}</text>`;const De=C.stadiumBonus?"#E87722":"#111";b+=`<text x="${F.x.toFixed(1)}" y="${(F.y+T/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${De}" font-family="Arial Black">${le}</text>`;const ke=yo(C);ke?b+=`<image href="${ke}" xlink:href="${ke}" x="${(F.x+u/2-14).toFixed(1)}" y="${(F.y+T/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:C.clubName&&(b+=`<text x="${(F.x+14).toFixed(1)}" y="${(F.y+T/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(C.clubName||"").slice(0,3).toUpperCase()}</text>`),C.stadiumBonus&&(b+=`<rect x="${(F.x-u/2).toFixed(1)}" y="${(F.y-T/2).toFixed(1)}" width="${u}" height="${T}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}b+=`<rect x="${J}" y="${R}" width="${u}" height="${T}" rx="5" fill="${pe?"rgba(255,255,255,0.12)":"none"}" stroke="${me}" stroke-width="${we}" opacity="${oe}"/>`,ne&&(b+=`<rect x="${J}" y="${R}" width="${u}" height="${T}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${pe?"selected":""}" data-card-id="${C.cardId}" data-role="${M}" style="cursor:pointer"/>`)}const I=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-I} ${-I} ${l+I*2} ${d+I*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
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
  </div>`}async function si(e,t,i,a){var F;const{state:l,navigate:d,toast:s}=t;et(e);const c=l.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!c.deckId)return _n(e,t,i);const g=c.deckId;let o,r,m,b;try{const M=await Promise.all([E.from("decks").select("formation,name,stadium_card_id").eq("id",g).single(),E.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",g).order("slot_order")]);o=M[0].data,m=M[0].error,r=M[1].data,b=M[1].error}catch(M){console.error("[Match] Exception chargement deck:",M),_t(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(m||b){console.error("[Match] Erreur Supabase:",m||b),_t(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const u=(r||[]).filter(M=>{var W;return M.is_starter&&((W=M.card)==null?void 0:W.player)}).map(M=>xi(M.card,M.position)),T=(r||[]).filter(M=>{var W;return!M.is_starter&&((W=M.card)==null?void 0:W.player)}).map(M=>xi(M.card,M.position));if(u.length<11){_t(e,"⚠️",`Deck incomplet (${u.length}/11).`,"Compléter",()=>d("decks"));return}const n=(r||[]).find(M=>{var W;return((W=M.card)==null?void 0:W.card_type)==="formation"}),p=(o==null?void 0:o.formation)||((F=n==null?void 0:n.card)==null?void 0:F.formation)||"4-4-2",{data:z,error:I}=await E.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",l.profile.id).eq("card_type","game_changer"),{data:q}=await E.from("gc_definitions").select("*").eq("is_active",!0),N=(z||[]).map(M=>({...M,_gcDef:(q==null?void 0:q.find(W=>W.name===M.gc_type||W.id===M.gc_definition_id))||null}));let C=null;if(o!=null&&o.stadium_card_id){const{data:M}=await E.from("cards").select("stadium_id").eq("id",o.stadium_card_id).single();if(M!=null&&M.stadium_id){const{data:W}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",M.stadium_id).single();C=W||null}}a({deckId:g,formation:p,starters:u,subsRaw:T,gcCardsEnriched:N,gcDefs:q||[],stadiumDef:C})}async function $n(e,t){const{state:i}=t,l=(i.params||{}).matchMode||"vs_ai_easy",d=l.replace("vs_ai_",""),s=l;await si(e,t,l,async({deckId:c,formation:g,starters:o,subsRaw:r,gcCardsEnriched:m,gcDefs:b,stadiumDef:u})=>{try{let T=yt(o,g);u&&(T=jt(T,u),Nt(r,u));const n=await kn(g,d),p=n.lines||n,z=async I=>{try{const{data:q,error:N}=await E.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:c,status:"in_progress"}).select().single();if(N){console.error("[MatchIA] Erreur création match:",N),_t(e,"⚠️","Impossible de créer le match ("+N.message+").","Retour",()=>t.navigate("home"));return}const C=n.stadiumDef||null;C&&p&&(jt(p,C),Nt(n.subs||[],C));const F={gcDefs:b||[],matchId:q==null?void 0:q.id,mode:s,difficulty:d,formation:g,homeTeam:T,aiTeam:p,homeSubs:r,subsUsed:0,maxSubs:Math.min(r.length,3),aiSubs:n.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((n.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:n.gcCards||[],aiUsedGc:[],aiStadiumDef:C,homeScore:0,aiScore:0,gcCards:I,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Tn(e,F,t)}catch(q){console.error("[MatchIA] Exception launchMatch:",q),_t(e,"⚠️","Erreur au lancement du match : "+q.message,"Retour",()=>t.navigate("home"))}};if(!m.length){z([]);return}ai(e,m,z)}catch(T){console.error("[MatchIA] Exception setup:",T),_t(e,"⚠️","Erreur de préparation du match : "+T.message,"Retour",()=>t.navigate("home"))}})}async function kn(e,t){var p;const{data:i}=await E.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:En(e),subs:[],gcCards:[],stadiumDef:null};const a=It[e]||It["4-4-2"],l={GK:[],DEF:[],MIL:[],ATT:[]},d=new Set;function s(z,I,q){var N,C;return d.add(z.id),{cardId:"ai-"+z.id+"-"+q,id:z.id,firstname:z.firstname,name:z.surname_encoded,country_code:z.country_code,club_id:z.club_id,job:z.job,job2:z.job2,note_g:Number(z.note_g)||0,note_d:Number(z.note_d)||0,note_m:Number(z.note_m)||0,note_a:Number(z.note_a)||0,rarity:z.rarity,skin:z.skin,hair:z.hair,hair_length:z.hair_length,clubName:((N=z.clubs)==null?void 0:N.encoded_name)||null,clubLogo:((C=z.clubs)==null?void 0:C.logo_url)||null,boost:0,used:!1,_line:I}}for(const z of["GK","DEF","MIL","ATT"]){const I=i.filter(M=>M.job===z&&!d.has(M.id)),q=i.filter(M=>M.job!==z&&!d.has(M.id)),N=[...I,...q],C=[];for(let M=0;M<a[z];M++){const W=N[M];W&&C.push(s(W,z,M))}const F=lt(C.length);C.forEach((M,W)=>{M._col=F[W]}),l[z]=C}const g=i.filter(z=>!d.has(z.id)).slice(0,5).map((z,I)=>s(z,z.job,100+I)),m=Object.keys(Re).sort(()=>Math.random()-.5).slice(0,3).map((z,I)=>{var q,N;return{id:"ai-gc-"+I,gc_type:z,name:((q=Re[z])==null?void 0:q.name)||z,icon:((N=Re[z])==null?void 0:N.icon)||"⚡"}}),b=Object.values(l).flat(),u={};b.forEach(z=>{z.club_id&&(u[z.club_id]=(u[z.club_id]||0)+1)});const T=(p=Object.entries(u).sort((z,I)=>I[1]-z[1])[0])==null?void 0:p[0];let n=null;if(T){const{data:z}=await E.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",T).single();z&&(n={club_id:z.id,country_code:null,name:z.encoded_name+" Stadium",club:{encoded_name:z.encoded_name,logo_url:z.logo_url}})}return{lines:l,subs:g,gcCards:m,stadiumDef:n}}function En(e){const t=It[e]||It["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let l=0;for(const d of["GK","DEF","MIL","ATT"]){const s=[];for(let g=0;g<t[d];g++){const o=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+l,id:"fake-"+l,firstname:"IA",name:a[l%a.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?o:2,note_d:d==="DEF"?o:2,note_m:d==="MIL"?o:2,note_a:d==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:d}),l++}const c=lt(s.length);s.forEach((g,o)=>{g._col=c[o]}),i[d]=s}return i}function Tn(e,t,i){var a;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((a=t.aiStadiumDef.club)==null?void 0:a.encoded_name)||""}</div>`:""}
    <div style="width:min(90vw,420px)">${ut(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>An(e,t,i),5e3)}function An(e,t,i){const a=t.homeTeam.MIL||[],l=t.aiTeam.MIL||[];function d(n){return n.reduce((p,z)=>p+Le(z,"MIL"),0)}function s(n){let p=0;for(let z=0;z<n.length-1;z++){const I=at(n[z],n[z+1]);I==="#00ff88"?p+=2:I==="#FFD700"&&(p+=1)}return p}const c=d(a)+s(a),g=d(l)+s(l),o=c>=g;function r(n,p,z,I){return`<div id="duel-row-${I}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${p}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${n.map((q,N)=>{const C=N<n.length-1?at(q,n[N+1]):null,F=!C||C==="#ff3333"||C==="#cc2222",M=C==="#00ff88"?"+2":C==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${I}" data-idx="${N}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${We({...q,note:Le(q,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${N<n.length-1?`<div class="duel-link duel-link-${I}" data-idx="${N}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${F?"rgba(255,255,255,0.12)":C};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${F?"none":`0 0 8px ${C}`}">
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
  </div>`;const m=()=>{const n=(p,z)=>e.querySelectorAll(p).forEach((I,q)=>{setTimeout(()=>{I.style.opacity="1",I.style.transform="translateY(0) scale(1)"},z+q*90)});n(".duel-card-home",150),n(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,z)=>{setTimeout(()=>{p.style.opacity="1"},z*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(z=>z.style.opacity="1")},1250),setTimeout(()=>{b("score-home",c,800),b("score-ai",g,800)},1500)};function b(n,p,z){const I=document.getElementById(n);if(!I)return;const q=performance.now(),N=C=>{const F=Math.min(1,(C-q)/z);I.textContent=Math.round(p*(1-Math.pow(1-F,3))),F<1?requestAnimationFrame(N):I.textContent=p};requestAnimationFrame(N)}requestAnimationFrame(m),t.attacker=o?"home":"ai";const u=o?ri():null;o&&(t.boostCard={value:u}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(n=>({name:n.name,note:Le(n,"MIL"),portrait:Pe(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiPlayers:l.map(n=>({name:n.name,note:Le(n,"MIL"),portrait:Pe(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),homeTotal:c,aiTotal:g,text:`Duel milieu : ${t.clubName} ${c} – ${g} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const T=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ye(e,t,i),t.attacker==="ai"&&setTimeout(()=>ei(e,t,i),800)};setTimeout(()=>{const n=document.getElementById("score-home"),p=document.getElementById("score-ai"),z=document.getElementById(o?"duel-row-home":"duel-row-ai"),I=document.getElementById(o?"duel-row-ai":"duel-row-home"),q=o?n:p,N=o?p:n;q&&(q.style.fontSize="80px",q.style.color=o?"#FFD700":"#ff6b6b",q.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),N&&(N.style.opacity="0.25"),setTimeout(()=>{z&&(z.style.transformOrigin="center",z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",z.style.zIndex="5"),setTimeout(()=>{var F;const C=document.getElementById("duel-shock");if(C){const M=(F=I||z)==null?void 0:F.getBoundingClientRect(),W=e.querySelector(".match-screen").getBoundingClientRect();M&&(C.style.top=M.top-W.top+M.height/2+"px"),C.style.animation="shockwave .5s ease-out forwards"}I&&(I.style.transformOrigin="center",I.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var F;const C=document.getElementById("duel-finale");C&&(C.innerHTML=`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Ye(e,t,i){var F,M,W,se,ne,pe,le,J,R;const a=t.selected.map(P=>P.cardId),l=t.usedSubIds||[],d=t.homeSubs.filter(P=>!l.includes(P.cardId)),c=Object.values(t.homeTeam).flat().filter(P=>P.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,g=!["GK","DEF","MIL","ATT"].some(P=>(t.aiTeam[P]||[]).some(oe=>!oe.used)),o=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(P=>!P.used),r=t.phase==="attack"&&g&&o.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];t.log[t.log.length-1];const m=t.phase==="ai-attack"||t.phase==="ai-defense",b=t.phase==="attack",u=t.phase==="defense",T=t.phase==="finished",p=(t.homeSubs||[]).filter(P=>!(t.usedSubIds||[]).includes(P.cardId)).length>0&&t.subsUsed<t.maxSubs,z=b&&o.length===0&&!p,I=t.gcCards.filter(P=>!t.usedGc.includes(P.id)),q=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const oe=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ot((oe.players||[]).map(me=>({...me,used:!1})),"#ff6b6b",oe.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const oe=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ot((oe.players||[]).map(me=>({...me,used:!1})),"#00ff88",oe.total)}
          </div>`}const P=t.log[t.log.length-1];return P?'<div style="padding:2px 4px">'+Sn(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const P=window.innerWidth>=700,oe=(K,ee,ge)=>{var w,k;const H=(t.gcDefs||[]).find(f=>f.name===K.gc_type),X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[H==null?void 0:H.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",V={purple:"#b06ce0",light_blue:"#00d4ef"}[H==null?void 0:H.color]||"#b06ce0",ae=(H==null?void 0:H.name)||K.gc_type,ve=(H==null?void 0:H.effect)||((w=Re[K.gc_type])==null?void 0:w.desc)||"",Se=H!=null&&H.image_url?`/icons/${H.image_url}`:null,ze=((k=Re[K.gc_type])==null?void 0:k.icon)||"⚡",he=Math.round(ge*.22),Ae=Math.round(ge*.22),j=ge-he-Ae,D=ae.length>12?7:9;return`<div class="gc-mini" data-gc-id="${K.id}" data-gc-type="${K.gc_type}"
          style="box-sizing:border-box;width:${ee}px;height:${ge}px;border-radius:10px;border:2px solid ${V};background:${X};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${he}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${D}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ee-6}px">${ae}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${j}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Se?`<img src="${Se}" style="max-width:${ee-10}px;max-height:${j-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(j*.55)}px">${ze}</span>`}
          </div>
          <div style="height:${Ae}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ve.slice(0,38)}</span>
          </div>
        </div>`},me=(K,ee)=>{var ge;return`<div id="boost-card"
          style="box-sizing:border-box;width:${K}px;height:${ee}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ee*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(ee*.2)}px">⚡</div>
            <div style="font-size:${Math.round(ee*.09)}px;color:#000;font-weight:900">+${(ge=t.boostCard)==null?void 0:ge.value}</div>
          </div>`},we=(K,ee)=>ee?me(130,175):oe(K,130,175),xe=(K,ee)=>ee?me(68,95):oe(K,68,95),be=P?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ce=T?`<button id="btn-results" style="${be};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:m?`<div style="${be};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:z?`<button id="btn-pass" style="${be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:b?`<button id="btn-action" style="${be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:u?`<button id="btn-action" style="${be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${be};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Fe=b||u?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",De=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${P?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${d.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':d.map(K=>`<div class="sub-btn-col" data-sub-id="${K.cardId}" style="cursor:pointer;flex-shrink:0">${We(K,76,100)}</div>`).join("")}
      </div>`,ke=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ft(t.homeTeam,t.formation,t.phase,a,300,300,r)}
        </div>
      </div>`;return P?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${De}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ke}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ce}${Fe}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${I.map(K=>we(K,!1)).join("")}
            ${q?we(null,!0):""}
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
            ${I.map(K=>xe(K,!1)).join("")}
            ${q?xe(null,!0):""}
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
          <div>${Ce}${Fe}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(P=>{var oe,me,we;if(P.type==="duel"){const xe=P.isGoal,be=P.homeScored?"#FFD700":xe?"#ff6b6b":"rgba(255,255,255,0.3)",Ce=P.homeScored?"⚽ BUT !":xe?"⚽ BUT IA !":(oe=P.homePlayers)!=null&&oe.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${xe?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${be};margin-bottom:4px">
                <div style="font-size:9px;color:${be};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Ce}</div>
                ${(me=P.homePlayers)!=null&&me.length?`<div style="margin-bottom:3px">${ot(P.homePlayers,"rgba(255,255,255,0.7)",P.homeTotal)}</div>`:""}
                ${(we=P.aiPlayers)!=null&&we.length?`<div style="opacity:0.7">${ot(P.aiPlayers,"#ff6b6b",P.aiTotal)}</div>`:""}
              </div>`}return P.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${P.outPlayer?We({...P.outPlayer,used:!0,_line:P.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${P.inPlayer?We({...P.inPlayer,_line:P.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:P.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${P.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${P.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function N(){const P=e.querySelector(".match-screen");if(!P)return;const oe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.bottom="auto",P.style.height=oe+"px",P.style.minHeight=oe+"px",P.style.maxHeight=oe+"px",P.style.overflow="hidden";const me=e.querySelector("#mobile-action-bar"),we=e.querySelector("#mobile-play-area");me&&we&&(we.style.paddingBottom=me.offsetHeight+"px")}if(N(),setTimeout(N,120),setTimeout(N,400),setTimeout(N,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",N),window.visualViewport.addEventListener("scroll",N)),window.addEventListener("resize",N)),function(){const oe=e.querySelector(".terrain-wrapper svg");oe&&(oe.removeAttribute("width"),oe.removeAttribute("height"),oe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",oe.setAttribute("viewBox","-26 -26 352 352"),oe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const P=e.querySelector(".terrain-wrapper svg");P&&(P.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let P=!1,oe=30;const me=()=>document.getElementById("match-timer"),we=()=>{const xe=me();if(!xe)return;const be=String(Math.floor(oe/60)).padStart(2,"0"),Ce=String(oe%60).padStart(2,"0");xe.textContent=` ${be}:${Ce}`,xe.style.color=P?"#ff2222":"#ff9500",xe.style.fontWeight="900"};we(),t._timerInt=setInterval(()=>{if(oe--,oe<0)if(!P)P=!0,oe=15,we();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const xe=document.createElement("div");xe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",xe.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(xe),setTimeout(()=>{xe.remove(),Ft(e,t,i)},2500)}else we()},1e3)}(F=document.getElementById("match-quit"))==null||F.addEventListener("click",()=>{Je(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Ft(e,t,i))}),(M=document.getElementById("view-ai"))==null||M.addEventListener("click",()=>Pn(t,i)),(W=document.getElementById("toggle-history"))==null||W.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.add("open")}),(se=document.getElementById("close-history"))==null||se.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.remove("open")}),(ne=document.getElementById("btn-action"))==null||ne.addEventListener("click",()=>{t.selected.length!==0&&(b?Ln(e,t,i):u&&In(e,t,i))}),(pe=document.getElementById("btn-results"))==null||pe.addEventListener("click",()=>Ft(e,t,i)),(le=document.getElementById("btn-pass"))==null||le.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ei(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>zn(P,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(P=>{P.addEventListener("click",()=>ci(e,t,i,null,P.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(P=>{P.addEventListener("click",()=>Bn(P.dataset.gcId,P.dataset.gcType,e,t,i))}),(J=document.getElementById("boost-card"))==null||J.addEventListener("click",()=>Gn(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(P=>{P.addEventListener("click",()=>ci(e,t,i,P.dataset.subId))}),(R=document.getElementById("sub-btn-main"))==null||R.addEventListener("click",()=>ci(e,t,i))}function zn(e,t,i,a){const l=e.dataset.cardId,d=e.dataset.role,s=t.selected.findIndex(c=>c.cardId===l);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const c=(t.homeTeam[d]||[]).find(g=>g.cardId===l);c&&t.selected.push({...c,_role:d,_line:d})}Ye(i,t,a)}function Ti(e,t,i){e.matchId&&E.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Ln(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(c=>!c.used)),l=t.selected.map(s=>{const c=(t.homeTeam[s._role]||[]).find(o=>o.cardId===s.cardId)||s,g=a&&["GK","DEF"].includes(s._role);return{...c,_line:s._role,...g?{note_a:Math.max(1,Number(c.note_a)||0)}:{}}}),d=Ot(l,t.modifiers.home);t.pendingAttack={...d,players:[...l],side:"home"},t.selected.forEach(s=>{const c=(t.homeTeam[s._role]||[]).find(g=>g.cardId===s.cardId);c&&(c.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ye(e,t,i),setTimeout(()=>Cn(e,t,i),1200)}function In(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const a=t.selected.map(c=>({...(t.homeTeam[c._role]||[]).find(o=>o.cardId===c.cardId)||c,_line:c._role})),l=Ht(a,t.modifiers.home);t.selected.forEach(c=>{const g=(t.homeTeam[c._role]||[]).find(o=>o.cardId===c.cardId);g&&(g.used=!0)});const d=Ut(t.pendingAttack.total,l.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:Pe(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homePlayers:t.selected.map(c=>{const g=(t.homeTeam[c._role]||[]).find(o=>o.cardId===c.cardId)||c;return{name:g.name,note:(g._line==="GK"?Number(g.note_g)||0:g._line==="MIL"?Number(g.note_m)||0:Number(g.note_d)||0)+(g.boost||0),portrait:Pe(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo}}),homeTotal:l.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(d.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${l.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ye(e,t,i),ti(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${l.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,zt(e,t,i,"home-attack")}function Mn(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(g=>g.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(g=>!e.aiUsedSubIds.includes(g.cardId));if(!i.length)return;const a=t[Math.floor(Math.random()*t.length)],l=i.find(g=>g.job===a.job)||i[0],d={...l,used:!1,_line:a._line,_col:a._col},s=e.aiTeam[a._line],c=s.findIndex(g=>g.cardId===a.cardId);c!==-1&&(s[c]=d),e.aiUsedSubIds.push(l.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${l.firstname} ${l.name} remplace ${a.firstname} ${a.name}`,type:"info"})}function jn(e){var a;if(!((a=e.aiGcCards)!=null&&a.length))return;const t=e.aiGcCards.filter(l=>!e.aiUsedGc.includes(l.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Re[i.gc_type],i.gc_type){case"Boost+2":{const l=Object.values(e.aiTeam).flat().filter(d=>!d.used);if(l.length){const d=l[Math.floor(Math.random()*l.length)];d.boost=(d.boost||0)+2}break}case"Boost+3":{const l=Object.values(e.aiTeam).flat().filter(d=>!d.used);if(l.length){const d=l[Math.floor(Math.random()*l.length)];d.boost=(d.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function ei(e,t,i){Ti(t,i,null),Mn(t),jn(t);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],l=to(a,"attack",t.difficulty);if(!l.length){Xt(e,t,i);return}const d=Ot(l,t.modifiers.ai);t.pendingAttack={...d,players:l,side:"ai"},l.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${l.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),g=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!g){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:l.map(r=>({name:r.name,note:r._line==="MIL"?r.note_m:r.note_a,portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,Ye(e,t,i),ti(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}t.phase="defense",Ye(e,t,i)}function Cn(e,t,i){var o,r;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],l=to(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(m=>(t.aiTeam[m]||[]).filter(b=>!b.used)).length){t.homeScore++;const b={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(u=>({name:u.name,note:Le(u,u._line||u.job),portrait:Pe(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo})),homeTotal:((r=t.pendingAttack)==null?void 0:r.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(b),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),ti(b.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}const s=l.length>0?Ht(l,t.modifiers.ai).total:0;l.forEach(m=>{m.used=!0});const c=Ut(t.pendingAttack.total,s,t.modifiers.ai),g={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(m=>({name:m.name,note:m._line==="MIL"?m.note_m:m.note_a,portrait:Pe(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),aiPlayers:l.map(m=>({name:m.name,note:m._line==="GK"?m.note_g:m._line==="MIL"?m.note_m:m.note_d,portrait:Pe(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(c.shielded)g.text="🛡️ Bouclier IA !",t.log.push(g);else if(c.goal){t.homeScore++,g.isGoal=!0,g.homeScored=!0,g.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(g),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),ti(g.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}else g.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(g);t.modifiers.ai={},t.pendingAttack=null,zt(e,t,i,"ai-attack")}function zt(e,t,i,a){if(t.round++,ho(t)){Ft(e,t,i);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(c=>!c.used).length){Xt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(c=>!c.used).length){Xt(e,t,i);return}setTimeout(()=>ei(e,t,i),100);return}t.phase="attack",Ye(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Xt(e,t,i);return}t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ei(e,t,i),800)}}function ho(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(l=>!l.used)),i=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(l=>!l.used));return!t&&!i}function Xt(e,t,i){ho(t)?Ft(e,t,i):(t.phase="attack",Ye(e,t,i))}function qn(e,t,i){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const l=Pe(e),d=Pe(t),s=Mt[e.job]||"#555",c=Mt[t.job]||"#555",g=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${g}</div>
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
  `,document.body.appendChild(a);let r=!1;const m=()=>{r||(r=!0,a.remove(),i())};a.addEventListener("click",m),setTimeout(m,2e3)}function Ct(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ci(e,t,i,a=null,l=null){var u,T;if(t.phase!=="attack"){Ct("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Ct(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([n,p])=>(p||[]).filter(z=>z.used).map(z=>({...z,_line:z._line||n}))),s=t.homeSubs.filter(n=>!t.usedSubIds.includes(n.cardId));if(!d.length){Ct("Aucun joueur utilisé à remplacer");return}if(!s.length){Ct("Aucun remplaçant disponible");return}let c=Math.max(0,d.findIndex(n=>n.cardId===l));const g=((u=d[c])==null?void 0:u._line)||((T=d[c])==null?void 0:T.job);let o=a?Math.max(0,s.findIndex(n=>n.cardId===a)):Math.max(0,s.findIndex(n=>n.job===g)),r=!1;const m=document.createElement("div");m.id="sub-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var C,F,M,W,se,ne;const n=d[c],p=s[o],z=Math.min(130,Math.round((window.innerWidth-90)/2)),I=Math.round(z*1.35),q=pe=>`background:rgba(255,255,255,0.12);border:none;color:${pe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${pe?"default":"pointer"};flex-shrink:0`;m.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${q(o===0)}" ${o===0?"disabled":""}>▲</button>
        <div>${p?We({...p,used:!1,boost:0},z,I):"<div>—</div>"}</div>
        <button id="in-down" style="${q(o>=s.length-1)}" ${o>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${o+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${q(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${n?We({...n,used:!1,boost:0},z,I):"<div>—</div>"}</div>
        <button id="out-down" style="${q(c>=d.length-1)}" ${c>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(C=m.querySelector("#sub-close"))==null||C.addEventListener("click",()=>m.remove()),(F=m.querySelector("#out-up"))==null||F.addEventListener("click",()=>{c>0&&(c--,b())}),(M=m.querySelector("#out-down"))==null||M.addEventListener("click",()=>{c<d.length-1&&(c++,b())}),(W=m.querySelector("#in-up"))==null||W.addEventListener("click",()=>{o>0&&(o--,b())}),(se=m.querySelector("#in-down"))==null||se.addEventListener("click",()=>{o<s.length-1&&(o++,b())});const N=(pe,le,J,R)=>{const P=m.querySelector("#"+pe);if(!P)return;let oe=0;P.addEventListener("touchstart",me=>{oe=me.touches[0].clientY},{passive:!0}),P.addEventListener("touchend",me=>{const we=me.changedTouches[0].clientY-oe;if(Math.abs(we)<30)return;const xe=le();we<0&&xe<R-1?(J(xe+1),b()):we>0&&xe>0&&(J(xe-1),b())},{passive:!0})};N("in-panel",()=>o,pe=>o=pe,s.length),N("out-panel",()=>c,pe=>c=pe,d.length),(ne=m.querySelector("#sub-confirm"))==null||ne.addEventListener("click",pe=>{if(pe.preventDefault(),pe.stopPropagation(),r)return;r=!0;const le=d[c],J=s[o];if(!le||!J)return;let R=null,P=-1;for(const[me,we]of Object.entries(t.homeTeam)){const xe=(we||[]).findIndex(be=>be.cardId===le.cardId);if(xe!==-1){R=me,P=xe;break}}if(P===-1||!R){Ct("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),m.remove();return}const oe={...J,_line:R,_col:le._col||0,used:!1,boost:0};t.homeTeam[R].splice(P,1,oe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(J.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:le.name,firstname:le.firstname,note:Le(le,R),portrait:Pe(le),job:le.job,country_code:le.country_code,rarity:le.rarity,clubName:le.clubName,clubLogo:le.clubLogo},inPlayer:{name:J.name,firstname:J.firstname,note:Le(J,R),portrait:Pe(J),job:J.job,country_code:J.country_code,rarity:J.rarity,clubName:J.clubName,clubLogo:J.clubLogo},text:`🔄 ${J.firstname} ${J.name} remplace ${le.firstname} ${le.name}`}),m.remove(),qn(le,J,()=>Ye(e,t,i))})}document.body.appendChild(m),b()}function Bn(e,t,i,a,l){var T,n;const d=(a.gcDefs||[]).find(p=>p.name===t),s=Re[t]||{icon:"⚡",desc:"Carte spéciale."},c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",g={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",o=(d==null?void 0:d.name)||t,r=(d==null?void 0:d.effect)||s.desc,m=d!=null&&d.image_url?`/icons/${d.image_url}`:null,b=s.icon||"⚡",u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",u.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${g};background:${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${g}66">
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
    </div>`,document.body.appendChild(u),(T=u.querySelector("#gc-back"))==null||T.addEventListener("click",()=>u.remove()),(n=u.querySelector("#gc-use"))==null||n.addEventListener("click",()=>{u.remove(),Dn(e,t,i,a,l)})}function Wt(e,t,i,a,l,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let c=[];function g(){var o,r;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${c.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(m=>{const b=m._line||m.job||"MIL",u={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b]||"#555",T=Le(m,b)+(m.boost||0),n=c.find(p=>p.cardId===m.cardId);return`<div class="gc-pick-item" data-cid="${m.cardId}"
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
    </div>`,(o=s.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.cid,u=e.find(n=>n.cardId===b);if(!u)return;const T=c.findIndex(n=>n.cardId===b);T>-1?c.splice(T,1):c.length<t&&c.push(u),g()})}),(r=s.querySelector("#gc-picker-confirm"))==null||r.addEventListener("click",()=>{s.remove(),d(c)})}g(),document.body.appendChild(s)}const Fn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},a,l,d)=>{const s=Object.entries(a.homeTeam).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,g])=>g.filter(o=>!o.used).map(o=>({...o,_line:c})));return s.length?(Wt(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,l,a,c=>{c.forEach(g=>{const o=(a.homeTeam[g._line]||[]).find(r=>r.cardId===g.cardId);o&&(o.boost=(o.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),Ye(l,a,d)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ye(l,a,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:a="ai"},l,d,s)=>{const c=a==="home"?l.homeTeam:l.aiTeam,g=a==="ai"?"adverse":"allié",o=Object.entries(c).filter(([r])=>!i.length||i.includes(r)).flatMap(([r,m])=>m.filter(b=>!b.used).map(b=>({...b,_line:r})));return o.length?(Wt(o,t,`Choisir ${t} joueur(s) ${g}(s) à débuffer (-${e})`,d,l,r=>{r.forEach(m=>{const u=((a==="home"?l.homeTeam:l.aiTeam)[m._line]||[]).find(T=>T.cardId===m.cardId);u&&(u.boost=(u.boost||0)-e,l.log.push({text:`🎯 -${e} sur ${u.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Ye(d,l,s)}),!0):(l.log.push({text:`🎯 Aucun joueur ${g} disponible`,type:"info"}),Ye(d,l,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},a,l,d)=>{const s=i==="home"?a.homeTeam:a.aiTeam,c=i==="ai"?"adverse":"allié",g=Object.entries(s).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,r])=>r.filter(m=>!m.used).map(m=>({...m,_line:o})));return g.length?(Wt(g,e,`Choisir ${e} joueur(s) ${c}(s) à exclure`,l,a,o=>{o.forEach(r=>{const b=((i==="home"?a.homeTeam:a.aiTeam)[r._line]||[]).find(u=>u.cardId===r.cardId);b&&(b.used=!0,a.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ye(l,a,d)}),!0):(a.log.push({text:`❌ Aucun joueur ${c} à exclure`,type:"info"}),Ye(l,a,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,a,l)=>{const d=Object.entries(i.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,c])=>c.filter(g=>g.used).map(g=>({...g,_line:s})));return d.length?(Wt(d,e,`Choisir ${e} joueur(s) à ressusciter`,a,i,s=>{s.forEach(c=>{const g=(i.homeTeam[c._line]||[]).find(o=>o.cardId===c.cardId);g&&(g.used=!1,i.log.push({text:`💫 ${g.name} ressuscité !`,type:"info"}))}),Ye(a,i,l)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ye(a,i,l),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Dn(e,t,i,a,l){a.usedGc.push(e);const d=a.gcDefs||[],s=d.find(g=>g.name===t)||d.find(g=>{var o;return((o=g.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let c=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const g=Fn[s.effect_type];g?g(s.effect_params||{},a,i,l)||(c=!0):(l.toast(`Effet "${s.effect_type}" non implémenté`,"error"),c=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const g=Object.entries(a.homeTeam).flatMap(([o,r])=>(r||[]).filter(m=>m.used).map(m=>({...m,_line:o})));g.length?(g[0].used=!1,a.log.push({text:`💫 ${g[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const g=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(o=>!o.used);if(g.length){const o=g.sort((r,m)=>Le(m,"ATT")-Le(r,"ATT"))[0];o.used=!0,a.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}c=!0}E.from("cards").delete().eq("id",e).then(()=>{}),c&&Ye(i,a,l)}function Gn(e,t,i){const a=Object.values(t.homeTeam).flat().filter(l=>!l.used);if(!a.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(l=>`
        <div class="player-boost-opt" data-card-id="${l.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Mt[l.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Le(l,l._line||l.job)}</div>
          <div style="flex:1"><b>${l.firstname} ${l.name}</b><div style="font-size:11px;color:#888">${l._line||l.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const c=(t.homeTeam[s]||[]).find(g=>g.cardId===d);if(c){c.boost=(c.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${c.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Ye(e,t,i)})})}function ti(e,t,i,a,l){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(o,r)=>`
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let c=!1;const g=()=>{c||(c=!0,d.remove(),setTimeout(()=>l(),50))};d.addEventListener("click",g),setTimeout(g,3500)}async function Ft(e,t,i){var r,m;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=i,l=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,s=l?"victoire":d?"nul":"defaite",c=Uo(t.mode,s);t.matchId&&await E.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:l?a.profile.id:null,home_credits_reward:c,played_at:new Date().toISOString()}).eq("id",t.matchId);const g={credits:(a.profile.credits||0)+c,matches_played:(a.profile.matches_played||0)+1};l?g.wins=(a.profile.wins||0)+1:d?g.draws=(a.profile.draws||0)+1:g.losses=(a.profile.losses||0)+1,await E.from("users").update(g).eq("id",a.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),(r=document.getElementById("res-home"))==null||r.addEventListener("click",()=>{o.remove(),Je(e),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",()=>{o.remove(),Je(e),i.navigate("match",{matchMode:t.mode})})}function Pn(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ut(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function vo(e,t){var i,a;try{const l=(a=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:a.id;try{(E.getChannels?E.getChannels():[]).forEach(s=>{const c=s.topic||"";(c.includes("matchmaking")||c.includes("pvp-match")||c.includes("friend-invite"))&&E.removeChannel(s)})}catch(d){console.warn("[Random] cleanup canaux:",d)}l&&await E.rpc("cancel_matchmaking",{p_user_id:l}).catch(()=>{})}catch{}await si(e,t,"random",({deckId:l,formation:d,starters:s,subsRaw:c,gcCardsEnriched:g,gcDefs:o,stadiumDef:r})=>{const m=b=>Nn(e,t,l,d,s,c,b,o||[],r);if(!g.length){m([]);return}ai(e,g,m)})}async function Nn(e,t,i,a,l,d,s=[],c=[],g=null){var q;const{state:o,navigate:r,toast:m}=t;let b=!1,u=null;et(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const T=async(N=!0)=>{b=!0,u&&(E.removeChannel(u),u=null),N&&await E.rpc("cancel_matchmaking",{p_user_id:o.profile.id}).catch(()=>{})};(q=document.getElementById("mm-cancel"))==null||q.addEventListener("click",async()=>{try{await T(!0)}catch{}Je(e),r("home")});const n=async(N,C,F)=>{if(b)return;b=!0,u&&(E.removeChannel(u),u=null);const M=document.getElementById("mm-status");M&&(M.textContent="Adversaire trouvé !"),await new Promise(W=>setTimeout(W,600)),e.isConnected&&wo(e,t,N,F,s,c)},{data:p,error:z}=await E.rpc("try_matchmake",{p_user_id:o.profile.id,p_deck_id:i});if(z||!(p!=null&&p.success)){m("Erreur de matchmaking","error"),Je(e),r("home");return}if(p.matched){n(p.match_id,p.opponent_id,!1);return}const I=document.getElementById("mm-status");I&&(I.textContent="En attente d'un autre joueur..."),u=E.channel("matchmaking-"+o.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${o.profile.id}`},N=>{const C=N.new;C.status==="matched"&&C.match_id&&n(C.match_id,C.matched_with,!0)}).subscribe()}async function Rn(e,t,i){const{state:a,navigate:l,toast:d}=t;try{(E.getChannels?E.getChannels():[]).forEach(o=>{const r=o.topic||"";(r.includes("matchmaking")||r.includes("pvp-match")||r.includes("friend-invite"))&&E.removeChannel(o)})}catch{}const{data:s}=await E.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!s){d("Match introuvable","error"),l("home");return}if(s.status==="finished"){d("Ce match est terminé","info"),l("home");return}const c=s.home_id===a.profile.id;wo(e,t,i,c,[],[])}async function wo(e,t,i,a,l=[],d=[]){const{state:s,navigate:c,toast:g}=t,o=a?"p1":"p2",r=a?"p2":"p1",m=(l||[]).map(j=>j.id),b=(l||[]).map(j=>({id:j.id,gc_type:j.gc_type,_gcDef:j._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:u}=await E.from("matches").select("*").eq("id",i).single();if(!u){g("Match introuvable","error"),c("home");return}async function T(){const[{data:j},{data:D},{data:w},{data:k}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:u.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:u.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",u.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",u.away_id).single()]),f=A=>{const L=Number(A.evolution_bonus)||0;return{cardId:A.card_id,position:A.position,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:(Number(A.note_g)||0)+(A.job==="GK"||A.job2==="GK"&&Number(A.note_g)>0?L:0),note_d:(Number(A.note_d)||0)+(A.job==="DEF"||A.job2==="DEF"&&Number(A.note_d)>0?L:0),note_m:(Number(A.note_m)||0)+(A.job==="MIL"||A.job2==="MIL"&&Number(A.note_m)>0?L:0),note_a:(Number(A.note_a)||0)+(A.job==="ATT"||A.job2==="ATT"&&Number(A.note_a)>0?L:0),evolution_bonus:L,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:A.club_encoded_name||null,clubLogo:A.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},x=((j==null?void 0:j.starters)||[]).map(A=>f(A)),y=((D==null?void 0:D.starters)||[]).map(A=>f(A)),h=(j==null?void 0:j.formation)||"4-4-2",v=(D==null?void 0:D.formation)||"4-4-2";let _=yt(x,h),S=yt(y,v);const $=((j==null?void 0:j.subs)||[]).map(A=>f(A));return stadiumDef&&a&&(_=jt(_,stadiumDef),Nt($,stadiumDef)),{p1Team:_,p2Team:S,p1Subs:$,p2Subs:((D==null?void 0:D.subs)||[]).map(A=>f(A)),p1Formation:h,p2Formation:v,p1Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 1",p2Name:(k==null?void 0:k.club_name)||(k==null?void 0:k.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?m:[],gc_p2:a?[]:m,gcCardsFull_p1:a?b:[],gcCardsFull_p2:a?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let n=u.game_state&&Object.keys(u.game_state).length?u.game_state:null;if(!n)if(a){n=await T();const{data:j}=await E.from("matches").select("game_state").eq("id",i).single();!(j!=null&&j.game_state)||!Object.keys(j.game_state).length?await E.from("matches").update({game_state:n,turn_user_id:u.home_id}).eq("id",i):n=j.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let j=0;j<30&&!n;j++){await new Promise(w=>setTimeout(w,400));const{data:D}=await E.from("matches").select("game_state").eq("id",i).single();D!=null&&D.game_state&&Object.keys(D.game_state).length&&(n=D.game_state)}if(!n){g("Erreur de synchronisation","error"),c("home");return}n.gc_p2=m,n.gcCardsFull_p2=b,await E.from("matches").update({game_state:n}).eq("id",i)}let p=!1,z=null,I=!1;const q=new Set,N=new Set;function C(j){var _,S;try{E.removeChannel(F)}catch{}const D=n[o+"Score"]||0,w=n[r+"Score"]||0;let k,f;j.winner_id?(k=j.winner_id===s.profile.id,f=!1):j.forfeit?(k=D>w,f=!1):(f=D===w,k=D>w),(_=document.getElementById("pvp-end-overlay"))==null||_.remove();const x=document.createElement("div");x.id="pvp-end-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const y=f?"🤝":k?"🏆":"😞",h=f?"MATCH NUL":k?"VICTOIRE !":"DÉFAITE",v=f?"#fff":k?"#FFD700":"#ff6b6b";x.innerHTML=`
      <div style="font-size:64px">${y}</div>
      <div style="font-size:26px;font-weight:900;color:${v}">${h}</div>
      <div style="font-size:18px">${n[o+"Name"]} ${D} – ${w} ${n[r+"Name"]}</div>
      ${j.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${k?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(x),(S=x.querySelector("#pvp-end-home"))==null||S.addEventListener("click",()=>{x.remove(),Je(e),c("home")})}const F=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},j=>{const D=j.new;try{if(D.status==="finished"||D.forfeit){if(p)return;p=!0,z&&(clearInterval(z),z=null),D.game_state&&(n=D.game_state),C(D);return}if(D.game_state){const w=n;n=D.game_state;const k=n._lastGC;if(k&&k.seq&&!N.has(k.seq)&&(N.add(k.seq),k.by!==o)){xe(k.type,k.by,()=>R());return}const f=w[o+"Score"]||0,x=w[r+"Score"]||0,y=n[o+"Score"]||0,h=n[r+"Score"]||0,v=y>f,_=h>x;if((v||_)&&!q.has(n.round)){q.add(n.round);const S=[...n.log||[]].reverse().find(A=>A.isGoal),$=((S==null?void 0:S.homePlayers)||[]).map(A=>({name:A.name,note:A.note,portrait:A.portrait,job:A.job}));we($,y,h,v,()=>R());return}R()}}catch(w){console.error("[PvP] crash:",w)}}).subscribe();async function M(j){Object.assign(n,j),n.lastActionAt=new Date().toISOString();const{error:D}=await E.from("matches").update({game_state:n}).eq("id",i);D&&g("Erreur de synchronisation","error");try{R()}catch(w){console.error("[PvP] renderPvpScreen crash:",w)}}async function W(){if(p)return;p=!0,z&&(clearInterval(z),z=null);const j=a?u.away_id:u.home_id,D=a?"p2":"p1",w=a?"p1":"p2",k={...n,[D+"Score"]:3,[w+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:j,home_score:k.p1Score||0,away_score:k.p2Score||0,game_state:k}).eq("id",i)}catch{}try{E.removeChannel(F)}catch{}setTimeout(()=>{Je(e),c("home")},800)}const se={BOOST_STAT:({value:j=1,count:D=1,roles:w=[]},k,f)=>{const x=k[o+"Team"],y=Object.entries(x).filter(([h])=>!w.length||w.includes(h)).flatMap(([h,v])=>v.filter(_=>!_.used).map(_=>({..._,_line:h})));if(!y.length){k.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),f(k);return}ne(y,D,`Choisir ${D} joueur(s) à booster (+${j})`,h=>{h.forEach(v=>{const _=(x[v._line]||[]).find(S=>S.cardId===v.cardId);_&&(_.boost=(_.boost||0)+j,k.log.push({text:`⚡ +${j} sur ${_.name}`,type:"info"}))}),k[o+"Team"]=x,f(k)})},DEBUFF_STAT:({value:j=1,count:D=1,roles:w=[],target:k="ai"},f,x)=>{const y=k==="home"?o:r,h=f[y+"Team"],v=k==="home"?"allié":"adverse",_=Object.entries(h).filter(([S])=>!w.length||w.includes(S)).flatMap(([S,$])=>$.map(A=>({...A,_line:S})));if(!_.length){f.log.push({text:`🎯 Aucun joueur ${v}`,type:"info"}),x(f);return}ne(_,D,`Choisir ${D} joueur(s) ${v}(s) (-${j})`,S=>{S.forEach($=>{const A=(h[$._line]||[]).find(L=>L.cardId===$.cardId);A&&(A.boost=(A.boost||0)-j,f.log.push({text:`🎯 -${j} sur ${A.name}`,type:"info"}))}),f[y+"Team"]=h,x(f)})},GRAY_PLAYER:({count:j=1,roles:D=[],target:w="ai"},k,f)=>{const x=w==="home"?o:r,y=k[x+"Team"],h=w==="home"?"allié":"adverse",v=Object.entries(y).filter(([_])=>!D.length||D.includes(_)).flatMap(([_,S])=>S.filter($=>!$.used).map($=>({...$,_line:_})));if(!v.length){k.log.push({text:`❌ Aucun joueur ${h}`,type:"info"}),f(k);return}ne(v,j,`Choisir ${j} joueur(s) ${h}(s) à exclure`,_=>{const S="usedCardIds_"+x,$=new Set(k[S]||[]);_.forEach(A=>{const L=(y[A._line]||[]).find(B=>B.cardId===A.cardId);L&&(L.used=!0,$.add(A.cardId),k.log.push({text:`❌ ${L.name} exclu !`,type:"info"}))}),k[S]=[...$],k[x+"Team"]=y,f(k)})},REVIVE_PLAYER:({count:j=1,roles:D=[]},w,k)=>{const f=w[o+"Team"],x=Object.entries(f).filter(([y])=>!D.length||D.includes(y)).flatMap(([y,h])=>h.filter(v=>v.used).map(v=>({...v,_line:y})));if(!x.length){w.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),k(w);return}ne(x,j,`Choisir ${j} joueur(s) à ressusciter`,y=>{y.forEach(h=>{const v=(f[h._line]||[]).find(_=>_.cardId===h.cardId);v&&(v.used=!1,w.log.push({text:`💫 ${v.name} ressuscité !`,type:"info"}))}),w[o+"Team"]=f,k(w)})},REMOVE_GOAL:({},j,D)=>{const w=r+"Score";j[w]>0?(j[w]--,j.log.push({text:"🚫 Dernier but annulé !",type:"info"})):j.log.push({text:"🚫 Aucun but à annuler",type:"info"}),D(j)},ADD_GOAL_DRAW:({},j,D)=>{j[o+"Score"]===j[r+"Score"]?(j[o+"Score"]++,j.log.push({text:"🎯 But bonus !",type:"info"})):j.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),D(j)},ADD_SUB:({value:j=1},D,w)=>{D.maxSubs=(D.maxSubs||3)+j,D.log.push({text:`🔄 +${j} remplacement(s)`,type:"info"}),w(D)},CUSTOM:({},j,D)=>D(j)};function ne(j,D,w,k){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let x=[];function y(){var v,_;const h=j.map(S=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[S._line]||"#555",A=Le(S,S._line)+(S.boost||0),B=x.find(O=>O.cardId===S.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=S.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${S.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${B};background:${$};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${S.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${A}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${S._line}</div>
        </div>`}).join("");f.innerHTML=`
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
        </div>`,(v=f.querySelector("#pp-close"))==null||v.addEventListener("click",()=>f.remove()),f.querySelectorAll(".pp-item").forEach(S=>{S.addEventListener("click",()=>{const $=S.dataset.cid,A=j.find(B=>B.cardId===$),L=x.findIndex(B=>B.cardId===$);A&&(L>-1?x.splice(L,1):x.length<D&&x.push(A),y())})}),(_=f.querySelector("#pp-confirm"))==null||_.addEventListener("click",()=>{f.remove(),k(x)})}y(),document.body.appendChild(f)}async function pe(j,D){const k=(n["gcCardsFull_"+o]||[]).find(h=>h.id===j),f=(k==null?void 0:k._gcDef)||(n.gcDefs||[]).find(h=>{var v;return h.name===D||((v=h.name)==null?void 0:v.toLowerCase().trim())===(D==null?void 0:D.toLowerCase().trim())}),x=[...n["usedGc_"+o]||[],j],y={type:D,by:o,seq:(n._gcAnimSeq||0)+1};N.add(y.seq),xe(D,o,async()=>{if(f!=null&&f.effect_type&&f.effect_type!=="CUSTOM"){const v=se[f.effect_type];if(v){const _={...n};v(f.effect_params||{},_,async S=>{S["usedGc_"+o]=x,S._lastGC=y,S._gcAnimSeq=y.seq,await M(S)});return}}const h={...n};switch(D){case"Remplacement+":h.maxSubs=(h.maxSubs||3)+1,h.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const v=r+"Score";h[v]>0&&(h[v]--,h.log.push({text:"🚫 But annulé",type:"info"}));break}}h["usedGc_"+o]=x,h._lastGC=y,h._gcAnimSeq=y.seq,await M(h)})}function le(j,D){const w="usedCardIds_"+j,k=new Set(n[w]||[]);D.forEach(f=>k.add(f)),n[w]=[...k]}function J(){for(const j of["p1","p2"]){const D=new Set(n["usedCardIds_"+j]||[]),w=n[j+"Team"];if(w)for(const k of["GK","DEF","MIL","ATT"])(w[k]||[]).forEach(f=>{f.used=D.has(f.cardId)})}}function R(){var Ke,Xe,Ze,Qe,nt,gt;if(n.phase==="reveal")return P();if(n.phase==="midfield")return me();if(n.phase==="finished")return Ae();const j=n[o+"Team"],D=n[r+"Team"];J();const w=n[o+"Score"],k=n[r+"Score"],f=n[o+"Name"],x=n[r+"Name"],y=n.phase===o+"-attack",h=n.phase===o+"-defense",v=Array.isArray(n["selected_"+o])?n["selected_"+o]:[],_=v.map(de=>de.cardId),S=window.innerWidth>=700,$=n[o+"Subs"]||[],A=n["usedSubIds_"+o]||[],L=$.filter(de=>!A.includes(de.cardId)),B=n["gcCardsFull_"+o]||[],G=n["usedGc_"+o]||[],O=B.filter(de=>!G.includes(de.id)),U=n.boostOwner===o&&!n.boostUsed,Z=!["GK","DEF","MIL","ATT"].some(de=>(D[de]||[]).some(Ee=>!Ee.used)),Y=[...j.MIL||[],...j.ATT||[]].filter(de=>!de.used),ie=y&&Z&&Y.length===0?[...j.GK||[],...j.DEF||[]].filter(de=>!de.used).map(de=>de.cardId):[];function re(de,Ee,te){var pt,ht;const ue=de._gcDef,Q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ue==null?void 0:ue.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ce={purple:"#b06ce0",light_blue:"#00d4ef"}[ue==null?void 0:ue.color]||"#b06ce0",je=(ue==null?void 0:ue.name)||de.gc_type,Te=(ue==null?void 0:ue.effect)||((pt=Re[de.gc_type])==null?void 0:pt.desc)||"",tt=ue!=null&&ue.image_url?`/icons/${ue.image_url}`:null,it=((ht=Re[de.gc_type])==null?void 0:ht.icon)||"⚡",rt=Math.round(te*.22),st=Math.round(te*.22),ct=te-rt-st,kt=je.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${de.id}" data-gc-type="${de.gc_type}"
        style="box-sizing:border-box;width:${Ee}px;height:${te}px;border-radius:10px;border:2px solid ${ce};background:${Q};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${rt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Ee-6}px">${je}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ct}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${tt?`<img src="${tt}" style="max-width:${Ee-10}px;max-height:${ct-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ct*.55)}px">${it}</span>`}
        </div>
        <div style="height:${st}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Te.slice(0,38)}</span>
        </div>
      </div>`}function fe(de,Ee){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${de}px;height:${Ee}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ee*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Ee*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Ee*.09)}px;color:#000;font-weight:900">+${n.boostValue}</div>
      </div>`}const ye=(de,Ee)=>Ee?fe(130,175):re(de,130,175),_e=(de,Ee)=>Ee?fe(68,95):re(de,68,95),$e=S?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Me=y?ve(o)?`<button id="pvp-action" style="${$e};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${v.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${$e};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:h?`<button id="pvp-action" style="${$e};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${v.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${x}</div>`,Ie=y&&!ve(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':y||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${v.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${L.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':L.map(de=>`<div class="pvp-sub-btn" data-sub-id="${de.cardId}" style="cursor:pointer;flex-shrink:0">${We(de,S?76:44,S?100:58)}</div>`).join("")}
    </div>`,qe=y?"attack":h?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(j,n[o+"Formation"],qe,_,300,300,ie)}
      </div>
    </div>`;function Be(de){if(de.type==="duel"&&(de.homeTotal!=null||de.aiTotal!=null)){const Ee=(de.homeTotal||0)>=(de.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(de.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(de.homePlayers||[]).map(te=>dt(te)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${Ee?20:14}px;font-weight:900;color:${Ee?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${de.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${Ee?14:20}px;font-weight:900;color:${Ee?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${de.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(de.aiPlayers||[]).map(te=>dt(te)).join("")}
            </div>
          </div>
          ${de.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${de.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${de.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${de.type==="goal"?700:400};padding:3px 2px">${de.text||""}</div>`}const Ve=(()=>{var Ee,te;if(h&&((Ee=n.pendingAttack)!=null&&Ee.players)){const ue=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${x} ATTAQUE — Défendez !</div>
          ${ot((ue.players||[]).map(Q=>({...Q,used:!1})),"#ff6b6b",ue.total)}
        </div>`}if(y&&((te=n.pendingAttack)!=null&&te.players)){const ue=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ue.players||[]).map(Q=>({...Q,used:!1})),"#00ff88",ue.total)}
        </div>`}const de=(n.log||[]).slice(-1)[0];return de?'<div style="padding:2px 4px">'+Be(de)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ne=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${w} – ${k}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(n.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",S?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${He}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Me}${Ie}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${O.map(de=>ye(de,!1)).join("")}
            ${U?ye(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(j,n[o+"Formation"],qe,_,300,300,ie)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${O.map(de=>_e(de,!1)).join("")}
            ${U?_e(null,!0):""}
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
          <div>${Me}${Ie}</div>
        </div>
      </div>`;function Ue(){const de=e.querySelector(".match-screen");if(!de)return;const Ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);de.style.height=Ee+"px",de.style.minHeight=Ee+"px",de.style.maxHeight=Ee+"px",de.style.overflow="hidden";const te=e.querySelector("#mobile-action-bar"),ue=e.querySelector("#mobile-play-area");te&&ue&&(ue.style.paddingBottom=te.offsetHeight+"px")}if(Ue(),setTimeout(Ue,120),setTimeout(Ue,400),I||(I=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ue),window.visualViewport.addEventListener("scroll",Ue)),window.addEventListener("resize",Ue)),function(){const Ee=e.querySelector(".terrain-wrapper svg");Ee&&(Ee.removeAttribute("width"),Ee.removeAttribute("height"),Ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Ee.setAttribute("viewBox","-26 -26 352 352"),Ee.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(de=>{de.addEventListener("click",()=>{if(!y&&!h)return;const Ee=de.dataset.cardId,te=de.dataset.role,ue=(j[te]||[]).find(Te=>Te.cardId===Ee);if(!ue||ue.used)return;const Q=ie.includes(Ee);if(y&&!["MIL","ATT"].includes(te)&&!Q)return;Array.isArray(n["selected_"+o])||(n["selected_"+o]=[]);const ce=n["selected_"+o],je=ce.findIndex(Te=>Te.cardId===Ee);je>-1?ce.splice(je,1):ce.length<3&&ce.push({...ue,_role:te}),R()})}),e.querySelectorAll(".match-used-hit").forEach(de=>{de.addEventListener("click",()=>Fe(de.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(de=>{de.addEventListener("click",()=>Fe())}),(Ke=e.querySelector("#pvp-sub-open"))==null||Ke.addEventListener("click",()=>Fe()),e.querySelectorAll(".pvp-gc-mini").forEach(de=>{de.addEventListener("click",()=>be(de.dataset.gcId,de.dataset.gcType))}),(Xe=e.querySelector("#pvp-boost-card"))==null||Xe.addEventListener("click",()=>Ce()),(Ze=e.querySelector("#pvp-action"))==null||Ze.addEventListener("click",de=>{y?de.currentTarget.dataset.pass==="1"||!ve(o)?ee():ge():h&&H()}),(Qe=e.querySelector("#pvp-quit"))==null||Qe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&W()}),(nt=e.querySelector("#pvp-view-opp"))==null||nt.addEventListener("click",()=>ke()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>K()),z&&(clearInterval(z),z=null),(y||h)&&!p){let de=30,Ee=!1;const te=()=>document.getElementById("pvp-timer"),ue=()=>{te()&&(te().textContent=de+"s",te().style.color=Ee?"#ff4444":"#fff")};ue(),z=setInterval(()=>{de--,de<0?Ee?(clearInterval(z),z=null,y&&!ve(o)?ee():W()):(Ee=!0,de=15,ue()):ue()},1e3)}}function P(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${n[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await M({phase:"midfield"})},5e3)}let oe=!1;function me(){if(oe)return;const j=n[o+"Team"].MIL||[],D=n[r+"Team"].MIL||[];function w(O){return O.reduce((U,Z)=>U+Le(Z,"MIL"),0)}function k(O){let U=0;for(let Z=0;Z<O.length-1;Z++){const Y=at(O[Z],O[Z+1]);Y==="#00ff88"?U+=2:Y==="#FFD700"&&(U+=1)}return U}const f=w(j)+k(j),x=w(D)+k(D),y=f>=x;function h(O,U,Z){return`<div id="duel-row-${Z}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${U}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${O.map((Y,ie)=>{const re=ie<O.length-1?at(Y,O[ie+1]):null,fe=!re||re==="#ff3333"||re==="#cc2222",ye=re==="#00ff88"?"+2":re==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Z}" data-idx="${ie}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...Y,note:Le(Y,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ie<O.length-1?`<div class="duel-link duel-link-${Z}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${fe?"rgba(255,255,255,0.12)":re};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${fe?"none":`0 0 8px ${re}`}">
              ${ye?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${re}">${ye}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Z}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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
      ${h(j,n[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${h(D,n[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const v=(O,U)=>e.querySelectorAll(O).forEach((Z,Y)=>{setTimeout(()=>{Z.style.opacity="1",Z.style.transform="translateY(0) scale(1)"},U+Y*90)});v(".duel-card-me",150),v(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((O,U)=>setTimeout(()=>{O.style.opacity="1"},U*70)),900),setTimeout(()=>{const O=e.querySelector("#pvp-vs");O&&(O.style.opacity="1",O.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(U=>U.style.opacity="1")},1250);function _(O,U,Z){const Y=document.getElementById(O);if(!Y)return;const ie=performance.now(),re=fe=>{const ye=Math.min(1,(fe-ie)/Z);Y.textContent=Math.round(U*(1-Math.pow(1-ye,3))),ye<1?requestAnimationFrame(re):Y.textContent=U};requestAnimationFrame(re)}setTimeout(()=>{_("pvp-score-me",f,800),_("pvp-score-opp",x,800)},1500);const S=n.p1Team.MIL||[],$=n.p2Team.MIL||[],A=w(S)+k(S),L=w($)+k($),B=A>=L?"p1":"p2";let G=n.boostValue;G==null&&(G=ri(),n.boostValue=G,n.boostOwner=B,n.boostUsed=!1),oe=!0,setTimeout(()=>{const O=e.querySelector("#duel-row-"+(y?"me":"opp")),U=e.querySelector("#duel-row-"+(y?"opp":"me")),Z=document.getElementById("pvp-score-me"),Y=document.getElementById("pvp-score-opp"),ie=y?Z:Y,re=y?Y:Z;ie&&(ie.style.fontSize="80px",ie.style.color=y?"#FFD700":"#ff6b6b",ie.style.animation="duelPulse .5s ease"+(y?",duelGlow 1.5s ease infinite .5s":"")),re&&(re.style.opacity="0.25"),setTimeout(()=>{O&&(O.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",O.style.zIndex="5"),setTimeout(()=>{const fe=document.getElementById("duel-shock");fe&&(fe.style.animation="shockwave .5s ease-out forwards"),U&&(U.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var $e;const fe=document.getElementById("pvp-duel-finale");if(!fe)return;const ye=n.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",_e=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;fe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(y?"⚽ "+n[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+n[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ye+_e,fe.style.transition="opacity .45s ease",fe.style.opacity="1",fe.style.pointerEvents="auto",($e=document.getElementById("pvp-start-match"))==null||$e.addEventListener("click",async()=>{const Me=B;await M({phase:Me+"-attack",attacker:Me,round:1,boostValue:G,boostUsed:!1,boostOwner:Me})})},600)},700)},2800)}function we(j,D,w,k,f){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const y=Array.from({length:10},(S,$)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${$%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][$%8]}</div>`).join(""),h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};x.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${y}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${k?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${D} – ${w}
      </div>
      ${j!=null&&j.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${j.map(S=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${h[S.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${S.portrait?`<img src="${S.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(S.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const _=()=>{v||(v=!0,x.remove(),setTimeout(()=>f(),50))};x.addEventListener("click",_),setTimeout(_,3500)}function xe(j,D,w){var G,O;const k=(n.gcDefs||[]).find(U=>{var Z;return U.name===j||((Z=U.name)==null?void 0:Z.toLowerCase().trim())===(j==null?void 0:j.toLowerCase().trim())}),f={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[k==null?void 0:k.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[k==null?void 0:k.color]||"#b06ce0",y=(k==null?void 0:k.name)||j,h=(k==null?void 0:k.effect)||((G=Re[j])==null?void 0:G.desc)||"",v=k!=null&&k.image_url?`/icons/${k.image_url}`:null,_=((O=Re[j])==null?void 0:O.icon)||"⚡",$=D===o?"Vous":n[D+"Name"]||"Adversaire",A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",A.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${x}66}50%{box-shadow:0 0 60px ${x}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${x};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${$} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${x};background:${f};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(A);let L=!1;const B=()=>{L||(L=!0,A.remove(),setTimeout(()=>w&&w(),50))};A.addEventListener("click",B),setTimeout(B,3e3)}function be(j,D){var A,L,B,G;const k=(n["gcCardsFull_"+o]||[]).find(O=>O.id===j),f=k==null?void 0:k._gcDef,x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[f==null?void 0:f.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",y={purple:"#b06ce0",light_blue:"#00d4ef"}[f==null?void 0:f.color]||"#b06ce0",h=(f==null?void 0:f.name)||D,v=(f==null?void 0:f.effect)||((A=Re[D])==null?void 0:A.desc)||"Carte spéciale.",_=f!=null&&f.image_url?`/icons/${f.image_url}`:null,S=((L=Re[D])==null?void 0:L.icon)||"⚡",$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",$.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${y};background:${x};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${y}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${h.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${h}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${_?`<img src="${_}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${S}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${v}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild($),(B=$.querySelector("#pvp-gc-back"))==null||B.addEventListener("click",()=>$.remove()),(G=$.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{$.remove(),pe(j,D)})}function Ce(){var k;const j=n[o+"Team"],D=Object.entries(j).flatMap(([f,x])=>(x||[]).filter(y=>!y.used).map(y=>({...y,_line:f})));if(!D.length)return;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",w.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${n.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${D.map(f=>{const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f._line]||"#555",y=Le(f,f._line)+(f.boost||0);return`<div class="bp-item" data-cid="${f.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${x};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${y}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(w),(k=w.querySelector("#bp-close"))==null||k.addEventListener("click",()=>w.remove()),w.querySelectorAll(".bp-item").forEach(f=>{f.addEventListener("click",async()=>{const x=f.dataset.cid,y=D.find(v=>v.cardId===x);if(!y)return;const h=(j[y._line]||[]).find(v=>v.cardId===x);h&&(h.boost=(h.boost||0)+n.boostValue),w.remove(),await M({[o+"Team"]:j,boostUsed:!0})})})}function Fe(j=null){var L,B;if(!(n.phase===o+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const w=n[o+"Team"],k=n["usedSubIds_"+o]||[],f=n.maxSubs||3;if(k.length>=f){g(`Maximum ${f} remplacements atteint`,"warning");return}const x=Object.entries(w).flatMap(([G,O])=>(O||[]).filter(U=>U.used).map(U=>({...U,_line:G}))),y=(n[o+"Subs"]||[]).filter(G=>!k.includes(G.cardId));if(!x.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!y.length){g("Aucun remplaçant disponible","warning");return}let h=Math.max(0,x.findIndex(G=>G.cardId===j));const v=((L=x[h])==null?void 0:L._line)||((B=x[h])==null?void 0:B.job);let _=Math.max(0,y.findIndex(G=>G.job===v)),S=!1;const $=document.createElement("div");$.id="pvp-sub-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function A(){var re,fe,ye,_e,$e,Me;const G=x[h],O=y[_],U=Math.min(130,Math.round((window.innerWidth-90)/2)),Z=Math.round(U*1.35),Y=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;$.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${k.length}/${f})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${Y(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${O?We({...O,used:!1,boost:0},U,Z):"<div>—</div>"}</div>
          <button id="pin-down" style="${Y(_>=y.length-1)}" ${_>=y.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${y.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${Y(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${G?We({...G,used:!1,boost:0},U,Z):"<div>—</div>"}</div>
          <button id="pout-down" style="${Y(h>=x.length-1)}" ${h>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${x.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(re=$.querySelector("#psub-close"))==null||re.addEventListener("click",()=>$.remove()),(fe=$.querySelector("#pout-up"))==null||fe.addEventListener("click",()=>{h>0&&(h--,A())}),(ye=$.querySelector("#pout-down"))==null||ye.addEventListener("click",()=>{h<x.length-1&&(h++,A())}),(_e=$.querySelector("#pin-up"))==null||_e.addEventListener("click",()=>{_>0&&(_--,A())}),($e=$.querySelector("#pin-down"))==null||$e.addEventListener("click",()=>{_<y.length-1&&(_++,A())});const ie=(Ie,Oe,qe,He)=>{const Be=$.querySelector("#"+Ie);if(!Be)return;let Ve=0;Be.addEventListener("touchstart",Ne=>{Ve=Ne.touches[0].clientY},{passive:!0}),Be.addEventListener("touchend",Ne=>{const Ue=Ne.changedTouches[0].clientY-Ve;if(Math.abs(Ue)<30)return;const Ke=Oe();Ue<0&&Ke<He-1?(qe(Ke+1),A()):Ue>0&&Ke>0&&(qe(Ke-1),A())},{passive:!0})};ie("pin-panel",()=>_,Ie=>_=Ie,y.length),ie("pout-panel",()=>h,Ie=>h=Ie,x.length),(Me=$.querySelector("#psub-confirm"))==null||Me.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),S)return;S=!0;const Oe=x[h],qe=y[_];if(!Oe||!qe)return;const He=Oe._line,Be=(w[He]||[]).findIndex(Ue=>Ue.cardId===Oe.cardId);if(Be===-1){g("Erreur : joueur introuvable","error"),$.remove();return}const Ve={...qe,_line:He,position:Oe.position,used:!1,boost:0};w[He].splice(Be,1,Ve);const Ne=[...k,qe.cardId];$.remove(),De(Oe,qe,async()=>{await M({[o+"Team"]:w,[r+"Team"]:n[r+"Team"],["usedSubIds_"+o]:Ne})})})}document.body.appendChild($),A()}function De(j,D,w){const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const x=(v,_,S)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${_};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${S}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${k[v.job]||"#555"};border:3px solid ${_};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(v)?`<img src="${Pe(v)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(v.name||"").slice(0,12)}</div>
    </div>`;f.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${x(D,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${x(j,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(f);let y=!1;const h=()=>{y||(y=!0,f.remove(),setTimeout(()=>w(),50))};f.addEventListener("click",h),setTimeout(h,2200)}function ke(){var D;const j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",j.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${n[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(j),(D=j.querySelector("#pvp-opp-close"))==null||D.addEventListener("click",()=>j.remove())}function K(){var w;const j=n.log||[],D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",D.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${j.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...j].reverse().map(k=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${k.type==="goal"?"#FFD700":k.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${k.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(D),(w=D.querySelector("#pvp-hist-close"))==null||w.addEventListener("click",()=>D.remove())}async function ee(){if(n.phase!==o+"-attack")return;const j=o==="p1"?"p2":"p1",D=(n.round||0)+1,w=[...n.log||[]];w.push({type:"info",text:`⏭️ ${n[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const k=Se(n),f=ve(j),x=k||!f?"finished":j+"-attack";await M({["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:x,attacker:j,round:D,log:w}),x==="finished"&&await he(n)}async function ge(){const j=n[o+"Team"],D=!["GK","DEF","MIL","ATT"].some(x=>(n[r+"Team"][x]||[]).some(y=>!y.used)),w=(n["selected_"+o]||[]).map(x=>{const y=(j[x._role]||[]).find(A=>A.cardId===x.cardId)||x,h=D&&["GK","DEF"].includes(x._role),v=j[x._role]||[],_=v.findIndex(A=>A.cardId===x.cardId),S=lt(v.length),$=_>=0?S[_]:y._col??1;return{...y,_line:x._role,_col:$,...h?{note_a:Math.max(1,Number(y.note_a)||0)}:{}}});if(!w.length)return;const k=Ot(w,n.modifiers[o]||{});le(o,w.map(x=>x.cardId)),w.forEach(x=>{const y=(j[x._role]||[]).find(h=>h.cardId===x.cardId);y&&(y.used=!0)}),n["selected_"+o]=[],R();const f=[...n.log||[]];if(D){const x=(n[o+"Score"]||0)+1,y=w.map($=>({name:$.name,note:Le($,$._line||"ATT"),portrait:Pe($),job:$.job}));f.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:y,homeTotal:k.total,aiTotal:0});const h=(n.round||0)+1,v=o==="p1"?"p2":"p1",_={...n,[o+"Team"]:j,[o+"Score"]:x},S=Se(_);q.add(h),we(y,x,n[r+"Score"]||0,!0,async()=>{await M({[o+"Team"]:j,[o+"Score"]:x,["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:S?"finished":v+"-attack",attacker:v,round:h,log:f}),S&&await he({...n,[o+"Score"]:x})});return}f.push({type:"pending",text:`⚔️ ${n[o+"Name"]} attaque (${k.total})`}),await M({[o+"Team"]:j,[r+"Team"]:n[r+"Team"],pendingAttack:{...k,players:w,side:o},["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},phase:r+"-defense",log:f})}async function H(){const j=n[o+"Team"],D=(n["selected_"+o]||[]).map(G=>{const O=(j[G._role]||[]).find(re=>re.cardId===G.cardId)||G,U=j[G._role]||[],Z=U.findIndex(re=>re.cardId===G.cardId),Y=lt(U.length),ie=Z>=0?Y[Z]:O._col??1;return{...O,_line:G._role,_col:ie}}),w=Ht(D,n.modifiers[o]||{});le(o,D.map(G=>G.cardId)),D.forEach(G=>{const O=(j[G._role]||[]).find(U=>U.cardId===G.cardId);O&&(O.used=!0)}),n["selected_"+o]=[],R();const k=Ut(n.pendingAttack.total,w.total,n.modifiers[o]||{}),f=n.pendingAttack.side,x=k==="attack"||(k==null?void 0:k.goal),y=f==="p1"?"p2":"p1",h=(n.round||0)+1,v=(n.pendingAttack.players||[]).map(G=>({name:G.name,note:Le(G,G._line||"ATT"),portrait:Pe(G),job:G.job})),_=[...n.log||[]];_.push({type:"duel",isGoal:x,homeScored:x&&f===o,text:x?`⚽ BUT de ${n[f+"Name"]} ! (${n.pendingAttack.total} vs ${w.total})`:`✋ Attaque stoppée (${n.pendingAttack.total} vs ${w.total})`,homePlayers:v,aiPlayers:D.map(G=>({name:G.name,note:Le(G,G._line||"DEF"),portrait:Pe(G),job:G.job})),homeTotal:n.pendingAttack.total,aiTotal:w.total});const S=x?(n[f+"Score"]||0)+1:n[f+"Score"]||0,$={...n,[o+"Team"]:j,[f+"Score"]:S},A=Se($),L=A?"finished":y+"-attack",B=async()=>{await M({[o+"Team"]:j,[r+"Team"]:n[r+"Team"],[f+"Score"]:S,["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:L,attacker:y,round:h,log:_}),(L==="finished"||A)&&await he({...n,[f+"Score"]:S})};if(x){const G=f===o,O=G?S:n[o+"Score"]||0,U=G?n[r+"Score"]||0:S;q.add(h),we(v,O,U,G,B)}else await B()}function X(j){return["MIL","ATT"].some(D=>(j[D]||[]).some(w=>!w.used))}function V(j){return["GK","DEF","MIL","ATT"].some(D=>(j[D]||[]).some(w=>!w.used))}function ae(j){return V(j)&&!X(j)}function ve(j){const D=n[j+"Team"],w=n[(j==="p1"?"p2":"p1")+"Team"];return!!(X(D)||!V(w)&&ae(D))}function Se(j){const D=["MIL","ATT"].some(_=>(j.p1Team[_]||[]).some(S=>!S.used)),w=["MIL","ATT"].some(_=>(j.p2Team[_]||[]).some(S=>!S.used)),k=V(j.p1Team),f=V(j.p2Team);return!D&&!(!f&&k)&&(!w&&!(!k&&f))}function ze(j){const D=j.p1Score||0,w=j.p2Score||0;return D===w?null:D>w?u.home_id:u.away_id}async function he(j){try{const D=ze(j),w=D?u.home_id===D?u.away_id:u.home_id:null;await E.from("matches").update({status:"finished",winner_id:D,home_score:j.p1Score||0,away_score:j.p2Score||0}).eq("id",i),D&&w&&updateEvolutiveCards(D,w).catch(()=>{})}catch(D){console.error("[PvP] finishMatch:",D)}}function Ae(){var f;const j=n[o+"Score"],D=n[r+"Score"],w=j>D,k=j===D;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${w?"🏆":k?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${w?"Victoire !":k?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${j} - ${D}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(f=document.getElementById("pvp-home"))==null||f.addEventListener("click",()=>{try{E.removeChannel(F)}catch{}Je(e),c("home")})}R()}const On=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:vo,resumePvpMatch:Rn},Symbol.toStringTag,{value:"Module"}));async function Hn(e,t,i,a){var l,d;try{const s=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(E.getChannels?E.getChannels():[]).forEach(g=>{const o=g.topic||"";(o.includes("matchmaking")||o.includes("pvp-match"))&&E.removeChannel(g)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}s&&(await E.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await si(e,t,"random",({deckId:s,formation:c,starters:g,subsRaw:o,gcCardsEnriched:r,gcDefs:m,stadiumDef:b})=>{const u=T=>Un(e,t,s,c,g,o,T,m||[],i,a);if(!r.length){u([]);return}ai(e,r,u)})}async function Un(e,t,i,a,l,d,s=[],c=[],g,o){var se;const{state:r,navigate:m,toast:b}=t,u=r.profile.id;let T=!1,n=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:u})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",u)}catch{}const p=(ne,pe,le,J)=>{var R;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${pe?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${pe?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${pe?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${o}</div>
            <div style="font-size:11px;color:${pe?"#22c55e":"#aaa"}">${pe?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!pe&&ne?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(R=document.getElementById("lobby-cancel"))==null||R.addEventListener("click",async()=>{T=!0,n&&(E.removeChannel(n),n=null),le&&await E.from("friend_match_invites").update({status:"declined"}).eq("id",le),Je(e),m("home")})},z=async(ne,pe)=>{T=!0,n&&(E.removeChannel(n),n=null),await new Promise(le=>setTimeout(le,600)),e.isConnected&&Kn(e,t,ne,pe,s,c)},{data:I}=await E.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${u},invitee_id.eq.${g}),and(inviter_id.eq.${g},invitee_id.eq.${u})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let q,N;if(I&&I.inviter_id===g)N=!1,q=I.id,await E.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",q);else{N=!0;const{data:ne,error:pe}=await E.from("friend_match_invites").insert({inviter_id:u,invitee_id:g,friend_id:g,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(pe||!ne){b("Erreur création invitation","error"),Je(e),m("home");return}q=ne.id}if(p(!0,!N,q),!N){const ne={home_id:g,away_id:u,home_deck_id:I.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},pe=await E.from("matches").insert(ne).select().single(),le=pe.data;if(!le){b("Erreur création match: "+(((se=pe.error)==null?void 0:se.message)||""),"error"),Je(e),m("home");return}await E.from("friend_match_invites").update({match_id:le.id,status:"matched"}).eq("id",q),z(le.id,!1);return}let C=!1;const F=ne=>{T||C||(ne.status==="matched"&&ne.match_id?(C=!0,clearInterval(M),clearInterval(W),z(ne.match_id,!0)):ne.status==="declined"?(clearInterval(M),clearInterval(W),b(`${o} a décliné l'invitation`,"warning"),Je(e),m("home")):ne.invitee_ready&&p(!0,!0,q))},M=setInterval(()=>{if(T){clearInterval(M);return}E.from("matchmaking_queue").delete().eq("user_id",u).then(()=>{},()=>{})},3e3),W=setInterval(async()=>{if(T||C){clearInterval(W);return}const{data:ne}=await E.from("friend_match_invites").select("*").eq("id",q).maybeSingle();ne&&F(ne)},1200);n=E.channel("friend-invite-"+q).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${q}`},ne=>F(ne.new)).subscribe()}async function Kn(e,t,i,a,l=[],d=[]){const{state:s,navigate:c,toast:g}=t,o=a?"p1":"p2",r=a?"p2":"p1",m=(l||[]).map(w=>w.id),b=(l||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:u}=await E.from("matches").select("*").eq("id",i).single();if(!u){g("Match introuvable","error"),c("home");return}async function T(){const[{data:w},{data:k},{data:f},{data:x}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:u.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:u.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",u.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",u.away_id).single()]),y=$=>{const A=Number($.evolution_bonus)||0;return{cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:(Number($.note_g)||0)+($.job==="GK"||$.job2==="GK"&&Number($.note_g)>0?A:0),note_d:(Number($.note_d)||0)+($.job==="DEF"||$.job2==="DEF"&&Number($.note_d)>0?A:0),note_m:(Number($.note_m)||0)+($.job==="MIL"||$.job2==="MIL"&&Number($.note_m)>0?A:0),note_a:(Number($.note_a)||0)+($.job==="ATT"||$.job2==="ATT"&&Number($.note_a)>0?A:0),evolution_bonus:A,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},h=((w==null?void 0:w.starters)||[]).map($=>y($)),v=((k==null?void 0:k.starters)||[]).map($=>y($)),_=(w==null?void 0:w.formation)||"4-4-2",S=(k==null?void 0:k.formation)||"4-4-2";return{p1Team:(()=>{const $=yt(h,_);return stadiumDef?jt($,stadiumDef):$})(),p2Team:yt(v,S),p1Subs:(()=>{const $=((w==null?void 0:w.subs)||[]).map(A=>y(A));return stadiumDef&&Nt($,stadiumDef),$})(),p2Subs:((k==null?void 0:k.subs)||[]).map($=>y($)),p1Formation:_,p2Formation:S,p1Name:(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"Joueur 1",p2Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?m:[],gc_p2:a?[]:m,gcCardsFull_p1:a?b:[],gcCardsFull_p2:a?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let n=u.game_state&&Object.keys(u.game_state).length?u.game_state:null;if(!n)if(a){n=await T();const{data:w}=await E.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await E.from("matches").update({game_state:n,turn_user_id:u.home_id}).eq("id",i):n=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let w=0;w<60&&!n;w++){await new Promise(f=>setTimeout(f,400));const{data:k}=await E.from("matches").select("game_state").eq("id",i).single();k!=null&&k.game_state&&Object.keys(k.game_state).length&&(n=k.game_state)}if(!n){g("Erreur de synchronisation","error"),c("home");return}n.gc_p2=m,n.gcCardsFull_p2=b,await E.from("matches").update({game_state:n}).eq("id",i)}let p=!1,z=!1,I=!1,q=null,N=!1;const C=new Set,F=new Set;function M(w){var $,A;try{E.removeChannel(W)}catch{}const k=n[o+"Score"]||0,f=n[r+"Score"]||0;if(!I){I=!0;const L=w.winner_id||(k>f?s.profile.id:f>k?"opp":null),B=L===s.profile.id?"win":L?"loss":null;B&&oi(()=>Promise.resolve().then(()=>oo),void 0).then(G=>G.applyOwnEvolution(s.profile.id,B)).catch(()=>{})}if(!z){const L=n.p1Score||0,B=n.p2Score||0,G=(n.usedGc_p1||[]).length,O=(n.usedGc_p2||[]).length,U=w.winner_id||(L>B?u.home_id:B>L?u.away_id:null);(U?s.profile.id===U:s.profile.id<(a?u.away_id:u.home_id))&&(z=!0,Xi({player1Id:u.home_id,player2Id:u.away_id,score1:L,score2:B,gc1:G,gc2:O}).catch(Y=>console.warn("[FriendMatch] updateStats:",Y)))}let x,y;w.winner_id?(x=w.winner_id===s.profile.id,y=!1):w.forfeit?(x=k>f,y=!1):(y=k===f,x=k>f),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const h=document.createElement("div");h.id="pvp-end-overlay",h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=y?"🤝":x?"🏆":"😞",_=y?"MATCH NUL":x?"VICTOIRE !":"DÉFAITE",S=y?"#fff":x?"#FFD700":"#ff6b6b";h.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${S}">${_}</div>
      <div style="font-size:18px">${n[o+"Name"]} ${k} – ${f} ${n[r+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${x?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(h),(A=h.querySelector("#pvp-end-home"))==null||A.addEventListener("click",()=>{h.remove(),Je(e),c("home")})}const W=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{const k=w.new;try{if(k.status==="finished"||k.forfeit){if(p)return;p=!0,q&&(clearInterval(q),q=null),k.game_state&&(n=k.game_state),M(k);return}if(k.game_state){const f=n;n=k.game_state;const x=n._lastGC;if(x&&x.seq&&!F.has(x.seq)&&(F.add(x.seq),x.by!==o)){Ce(x.type,x.by,()=>oe());return}const y=f[o+"Score"]||0,h=f[r+"Score"]||0,v=n[o+"Score"]||0,_=n[r+"Score"]||0,S=v>y,$=_>h;if((S||$)&&!C.has(n.round)){C.add(n.round);const A=[...n.log||[]].reverse().find(B=>B.isGoal),L=((A==null?void 0:A.homePlayers)||[]).map(B=>({name:B.name,note:B.note,portrait:B.portrait,job:B.job}));be(L,v,_,S,()=>oe());return}oe()}}catch(f){console.error("[PvP] crash:",f)}}).subscribe();async function se(w){Object.assign(n,w),n.lastActionAt=new Date().toISOString();const{error:k}=await E.from("matches").update({game_state:n}).eq("id",i);k&&g("Erreur de synchronisation","error");try{oe()}catch(f){console.error("[PvP] renderPvpScreen crash:",f)}}async function ne(){if(p)return;p=!0,q&&(clearInterval(q),q=null);const w=a?u.away_id:u.home_id,k=a?"p2":"p1",f=a?"p1":"p2",x={...n,[k+"Score"]:3,[f+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:w,home_score:x.p1Score||0,away_score:x.p2Score||0,game_state:x}).eq("id",i)}catch{}try{E.removeChannel(W)}catch{}setTimeout(()=>{Je(e),c("home")},800)}const pe={BOOST_STAT:({value:w=1,count:k=1,roles:f=[]},x,y)=>{const h=x[o+"Team"],v=Object.entries(h).filter(([_])=>!f.length||f.includes(_)).flatMap(([_,S])=>S.filter($=>!$.used).map($=>({...$,_line:_})));if(!v.length){x.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(x);return}le(v,k,`Choisir ${k} joueur(s) à booster (+${w})`,_=>{_.forEach(S=>{const $=(h[S._line]||[]).find(A=>A.cardId===S.cardId);$&&($.boost=($.boost||0)+w,x.log.push({text:`⚡ +${w} sur ${$.name}`,type:"info"}))}),x[o+"Team"]=h,y(x)})},DEBUFF_STAT:({value:w=1,count:k=1,roles:f=[],target:x="ai"},y,h)=>{const v=x==="home"?o:r,_=y[v+"Team"],S=x==="home"?"allié":"adverse",$=Object.entries(_).filter(([A])=>!f.length||f.includes(A)).flatMap(([A,L])=>L.map(B=>({...B,_line:A})));if(!$.length){y.log.push({text:`🎯 Aucun joueur ${S}`,type:"info"}),h(y);return}le($,k,`Choisir ${k} joueur(s) ${S}(s) (-${w})`,A=>{A.forEach(L=>{const B=(_[L._line]||[]).find(G=>G.cardId===L.cardId);B&&(B.boost=(B.boost||0)-w,y.log.push({text:`🎯 -${w} sur ${B.name}`,type:"info"}))}),y[v+"Team"]=_,h(y)})},GRAY_PLAYER:({count:w=1,roles:k=[],target:f="ai"},x,y)=>{const h=f==="home"?o:r,v=x[h+"Team"],_=f==="home"?"allié":"adverse",S=Object.entries(v).filter(([$])=>!k.length||k.includes($)).flatMap(([$,A])=>A.filter(L=>!L.used).map(L=>({...L,_line:$})));if(!S.length){x.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),y(x);return}le(S,w,`Choisir ${w} joueur(s) ${_}(s) à exclure`,$=>{const A="usedCardIds_"+h,L=new Set(x[A]||[]);$.forEach(B=>{const G=(v[B._line]||[]).find(O=>O.cardId===B.cardId);G&&(G.used=!0,L.add(B.cardId),x.log.push({text:`❌ ${G.name} exclu !`,type:"info"}))}),x[A]=[...L],x[h+"Team"]=v,y(x)})},REVIVE_PLAYER:({count:w=1,roles:k=[]},f,x)=>{const y=f[o+"Team"],h=Object.entries(y).filter(([v])=>!k.length||k.includes(v)).flatMap(([v,_])=>_.filter(S=>S.used).map(S=>({...S,_line:v})));if(!h.length){f.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),x(f);return}le(h,w,`Choisir ${w} joueur(s) à ressusciter`,v=>{v.forEach(_=>{const S=(y[_._line]||[]).find($=>$.cardId===_.cardId);S&&(S.used=!1,f.log.push({text:`💫 ${S.name} ressuscité !`,type:"info"}))}),f[o+"Team"]=y,x(f)})},REMOVE_GOAL:({},w,k)=>{const f=r+"Score";w[f]>0?(w[f]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),k(w)},ADD_GOAL_DRAW:({},w,k)=>{w[o+"Score"]===w[r+"Score"]?(w[o+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),k(w)},ADD_SUB:({value:w=1},k,f)=>{k.maxSubs=(k.maxSubs||3)+w,k.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),f(k)},CUSTOM:({},w,k)=>k(w)};function le(w,k,f,x){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let h=[];function v(){var S,$;const _=w.map(A=>{const L={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",B=Le(A,A._line)+(A.boost||0),O=h.find(Z=>Z.cardId===A.cardId)?"#FFD700":"rgba(255,255,255,0.25)",U=A.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${O};background:${L};overflow:hidden;cursor:pointer;${U}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${A._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${f}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h.length}/${k}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${h.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${h.length}/${k})
          </button>
        </div>`,(S=y.querySelector("#pp-close"))==null||S.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(A=>{A.addEventListener("click",()=>{const L=A.dataset.cid,B=w.find(O=>O.cardId===L),G=h.findIndex(O=>O.cardId===L);B&&(G>-1?h.splice(G,1):h.length<k&&h.push(B),v())})}),($=y.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{y.remove(),x(h)})}v(),document.body.appendChild(y)}async function J(w,k){const x=(n["gcCardsFull_"+o]||[]).find(_=>_.id===w),y=(x==null?void 0:x._gcDef)||(n.gcDefs||[]).find(_=>{var S;return _.name===k||((S=_.name)==null?void 0:S.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),h=[...n["usedGc_"+o]||[],w],v={type:k,by:o,seq:(n._gcAnimSeq||0)+1};F.add(v.seq),Ce(k,o,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const S=pe[y.effect_type];if(S){const $={...n};S(y.effect_params||{},$,async A=>{A["usedGc_"+o]=h,A._lastGC=v,A._gcAnimSeq=v.seq,await se(A)});return}}const _={...n};switch(k){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const S=r+"Score";_[S]>0&&(_[S]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+o]=h,_._lastGC=v,_._gcAnimSeq=v.seq,await se(_)})}function R(w,k){const f="usedCardIds_"+w,x=new Set(n[f]||[]);k.forEach(y=>x.add(y)),n[f]=[...x]}function P(){for(const w of["p1","p2"]){const k=new Set(n["usedCardIds_"+w]||[]),f=n[w+"Team"];if(f)for(const x of["GK","DEF","MIL","ATT"])(f[x]||[]).forEach(y=>{y.used=k.has(y.cardId)})}}function oe(){var Ze,Qe,nt,gt,de,Ee;if(n.phase==="reveal")return me();if(n.phase==="midfield")return xe();if(n.phase==="finished")return D();const w=n[o+"Team"],k=n[r+"Team"];P();const f=n[o+"Score"],x=n[r+"Score"],y=n[o+"Name"],h=n[r+"Name"],v=n.phase===o+"-attack",_=n.phase===o+"-defense",S=Array.isArray(n["selected_"+o])?n["selected_"+o]:[],$=S.map(te=>te.cardId),A=window.innerWidth>=700,L=n[o+"Subs"]||[],B=n["usedSubIds_"+o]||[],G=L.filter(te=>!B.includes(te.cardId)),O=n["gcCardsFull_"+o]||[],U=n["usedGc_"+o]||[],Z=O.filter(te=>!U.includes(te.id)),Y=n.boostOwner===o&&!n.boostUsed,ie=!["GK","DEF","MIL","ATT"].some(te=>(k[te]||[]).some(ue=>!ue.used)),re=[...w.MIL||[],...w.ATT||[]].filter(te=>!te.used),fe=v&&ie&&re.length===0?[...w.GK||[],...w.DEF||[]].filter(te=>!te.used).map(te=>te.cardId):[];function ye(te,ue,Q){var Et,Kt;const ce=te._gcDef,je={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ce==null?void 0:ce.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Te={purple:"#b06ce0",light_blue:"#00d4ef"}[ce==null?void 0:ce.color]||"#b06ce0",tt=(ce==null?void 0:ce.name)||te.gc_type,it=(ce==null?void 0:ce.effect)||((Et=Re[te.gc_type])==null?void 0:Et.desc)||"",rt=ce!=null&&ce.image_url?`/icons/${ce.image_url}`:null,st=((Kt=Re[te.gc_type])==null?void 0:Kt.icon)||"⚡",ct=Math.round(Q*.22),kt=Math.round(Q*.22),pt=Q-ct-kt,ht=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${te.id}" data-gc-type="${te.gc_type}"
        style="box-sizing:border-box;width:${ue}px;height:${Q}px;border-radius:10px;border:2px solid ${Te};background:${je};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}function _e(te,ue){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${te}px;height:${ue}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ue*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ue*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ue*.09)}px;color:#000;font-weight:900">+${n.boostValue}</div>
      </div>`}const $e=(te,ue)=>ue?_e(130,175):ye(te,130,175),Me=(te,ue)=>ue?_e(68,95):ye(te,68,95),Ie=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=v?ze(o)?`<button id="pvp-action" style="${Ie};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${S.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ie};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ie};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${S.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${h}</div>`,qe=v&&!ze(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${S.length}/3 sélectionné(s)</div>`:"",He=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${G.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':G.map(te=>`<div class="pvp-sub-btn" data-sub-id="${te.cardId}" style="cursor:pointer;flex-shrink:0">${We(te,A?76:44,A?100:58)}</div>`).join("")}
    </div>`,Be=v?"attack":_?"defense":"idle",Ve=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(w,n[o+"Formation"],Be,$,300,300,fe)}
      </div>
    </div>`;function Ne(te){if(te.type==="duel"&&(te.homeTotal!=null||te.aiTotal!=null)){const ue=(te.homeTotal||0)>=(te.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(te.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(te.homePlayers||[]).map(Q=>dt(Q)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ue?20:14}px;font-weight:900;color:${ue?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${te.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ue?14:20}px;font-weight:900;color:${ue?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${te.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(te.aiPlayers||[]).map(Q=>dt(Q)).join("")}
            </div>
          </div>
          ${te.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${te.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${te.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${te.type==="goal"?700:400};padding:3px 2px">${te.text||""}</div>`}const Ue=(()=>{var ue,Q;if(_&&((ue=n.pendingAttack)!=null&&ue.players)){const ce=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${h} ATTAQUE — Défendez !</div>
          ${ot((ce.players||[]).map(je=>({...je,used:!1})),"#ff6b6b",ce.total)}
        </div>`}if(v&&((Q=n.pendingAttack)!=null&&Q.players)){const ce=n.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ce.players||[]).map(je=>({...je,used:!1})),"#00ff88",ce.total)}
        </div>`}const te=(n.log||[]).slice(-1)[0];return te?'<div style="padding:2px 4px">'+Ne(te)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${f} – ${x}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ue}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(n.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",A?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${He}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ve}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Oe}${qe}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${Z.map(te=>$e(te,!1)).join("")}
            ${Y?$e(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(w,n[o+"Formation"],Be,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Z.map(te=>Me(te,!1)).join("")}
            ${Y?Me(null,!0):""}
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
          <div>${Oe}${qe}</div>
        </div>
      </div>`;function Xe(){const te=e.querySelector(".match-screen");if(!te)return;const ue=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);te.style.height=ue+"px",te.style.minHeight=ue+"px",te.style.maxHeight=ue+"px",te.style.overflow="hidden";const Q=e.querySelector("#mobile-action-bar"),ce=e.querySelector("#mobile-play-area");Q&&ce&&(ce.style.paddingBottom=Q.offsetHeight+"px")}if(Xe(),setTimeout(Xe,120),setTimeout(Xe,400),N||(N=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Xe),window.visualViewport.addEventListener("scroll",Xe)),window.addEventListener("resize",Xe)),function(){const ue=e.querySelector(".terrain-wrapper svg");ue&&(ue.removeAttribute("width"),ue.removeAttribute("height"),ue.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ue.setAttribute("viewBox","-26 -26 352 352"),ue.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(te=>{te.addEventListener("click",()=>{if(!v&&!_)return;const ue=te.dataset.cardId,Q=te.dataset.role,ce=(w[Q]||[]).find(it=>it.cardId===ue);if(!ce||ce.used)return;const je=fe.includes(ue);if(v&&!["MIL","ATT"].includes(Q)&&!je)return;Array.isArray(n["selected_"+o])||(n["selected_"+o]=[]);const Te=n["selected_"+o],tt=Te.findIndex(it=>it.cardId===ue);tt>-1?Te.splice(tt,1):Te.length<3&&Te.push({...ce,_role:Q}),oe()})}),e.querySelectorAll(".match-used-hit").forEach(te=>{te.addEventListener("click",()=>ke(te.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(te=>{te.addEventListener("click",()=>ke())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>ke()),e.querySelectorAll(".pvp-gc-mini").forEach(te=>{te.addEventListener("click",()=>Fe(te.dataset.gcId,te.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>De()),(nt=e.querySelector("#pvp-action"))==null||nt.addEventListener("click",te=>{v?te.currentTarget.dataset.pass==="1"||!ze(o)?H():X():_&&V()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ne()}),(de=e.querySelector("#pvp-view-opp"))==null||de.addEventListener("click",()=>ee()),(Ee=e.querySelector("#pvp-toggle-history"))==null||Ee.addEventListener("click",()=>ge()),q&&(clearInterval(q),q=null),(v||_)&&!p){let te=30,ue=!1;const Q=()=>document.getElementById("pvp-timer"),ce=()=>{Q()&&(Q().textContent=te+"s",Q().style.color=ue?"#ff4444":"#fff")};ce(),q=setInterval(()=>{te--,te<0?ue?(clearInterval(q),q=null,v&&!ze(o)?H():ne()):(ue=!0,te=15,ce()):ce()},1e3)}}function me(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${n[r+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await se({phase:"midfield"})},5e3)}let we=!1;function xe(){if(we)return;const w=n[o+"Team"].MIL||[],k=n[r+"Team"].MIL||[];function f(Z){return Z.reduce((Y,ie)=>Y+Le(ie,"MIL"),0)}function x(Z){let Y=0;for(let ie=0;ie<Z.length-1;ie++){const re=at(Z[ie],Z[ie+1]);re==="#00ff88"?Y+=2:re==="#FFD700"&&(Y+=1)}return Y}const y=f(w)+x(w),h=f(k)+x(k),v=y>=h;function _(Z,Y,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${Y}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Z.map((re,fe)=>{const ye=fe<Z.length-1?at(re,Z[fe+1]):null,_e=!ye||ye==="#ff3333"||ye==="#cc2222",$e=ye==="#00ff88"?"+2":ye==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ie}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...re,note:Le(re,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<Z.length-1?`<div class="duel-link duel-link-${ie}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${_e?"rgba(255,255,255,0.12)":ye};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${_e?"none":`0 0 8px ${ye}`}">
              ${$e?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ye}">${$e}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ie}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${f(Z)} + ${x(Z)} liens = <b style="color:#fff">${f(Z)+x(Z)}</b>
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
      ${_(k,n[r+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const S=(Z,Y)=>e.querySelectorAll(Z).forEach((ie,re)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},Y+re*90)});S(".duel-card-me",150),S(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Z,Y)=>setTimeout(()=>{Z.style.opacity="1"},Y*70)),900),setTimeout(()=>{const Z=e.querySelector("#pvp-vs");Z&&(Z.style.opacity="1",Z.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(Y=>Y.style.opacity="1")},1250);function $(Z,Y,ie){const re=document.getElementById(Z);if(!re)return;const fe=performance.now(),ye=_e=>{const $e=Math.min(1,(_e-fe)/ie);re.textContent=Math.round(Y*(1-Math.pow(1-$e,3))),$e<1?requestAnimationFrame(ye):re.textContent=Y};requestAnimationFrame(ye)}setTimeout(()=>{$("pvp-score-me",y,800),$("pvp-score-opp",h,800)},1500);const A=n.p1Team.MIL||[],L=n.p2Team.MIL||[],B=f(A)+x(A),G=f(L)+x(L),O=B>=G?"p1":"p2";let U=n.boostValue;U==null&&(U=ri(),n.boostValue=U,n.boostOwner=O,n.boostUsed=!1),we=!0,setTimeout(()=>{const Z=e.querySelector("#duel-row-"+(v?"me":"opp")),Y=e.querySelector("#duel-row-"+(v?"opp":"me")),ie=document.getElementById("pvp-score-me"),re=document.getElementById("pvp-score-opp"),fe=v?ie:re,ye=v?re:ie;fe&&(fe.style.fontSize="80px",fe.style.color=v?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),ye&&(ye.style.opacity="0.25"),setTimeout(()=>{Z&&(Z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Z.style.zIndex="5"),setTimeout(()=>{const _e=document.getElementById("duel-shock");_e&&(_e.style.animation="shockwave .5s ease-out forwards"),Y&&(Y.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ie;const _e=document.getElementById("pvp-duel-finale");if(!_e)return;const $e=n.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+U+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Me=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;_e.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+n[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+n[r+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+$e+Me,_e.style.transition="opacity .45s ease",_e.style.opacity="1",_e.style.pointerEvents="auto",(Ie=document.getElementById("pvp-start-match"))==null||Ie.addEventListener("click",async()=>{const Oe=O;await se({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:U,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function be(w,k,f,x,y){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(A,L)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${L%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][L%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};h.innerHTML=`
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
        ${k} – ${f}
      </div>
      ${w!=null&&w.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${w.map(A=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[A.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${A.portrait?`<img src="${A.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(A.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(h);let S=!1;const $=()=>{S||(S=!0,h.remove(),setTimeout(()=>y(),50))};h.addEventListener("click",$),setTimeout($,3500)}function Ce(w,k,f){var U,Z;const x=(n.gcDefs||[]).find(Y=>{var ie;return Y.name===w||((ie=Y.name)==null?void 0:ie.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",v=(x==null?void 0:x.name)||w,_=(x==null?void 0:x.effect)||((U=Re[w])==null?void 0:U.desc)||"",S=x!=null&&x.image_url?`/icons/${x.image_url}`:null,$=((Z=Re[w])==null?void 0:Z.icon)||"⚡",L=k===o?"Vous":n[k+"Name"]||"Adversaire",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",B.innerHTML=`
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
          ${S?`<img src="${S}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(B);let G=!1;const O=()=>{G||(G=!0,B.remove(),setTimeout(()=>f&&f(),50))};B.addEventListener("click",O),setTimeout(O,3e3)}function Fe(w,k){var B,G,O,U;const x=(n["gcCardsFull_"+o]||[]).find(Z=>Z.id===w),y=x==null?void 0:x._gcDef,h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||k,S=(y==null?void 0:y.effect)||((B=Re[k])==null?void 0:B.desc)||"Carte spéciale.",$=y!=null&&y.image_url?`/icons/${y.image_url}`:null,A=((G=Re[k])==null?void 0:G.icon)||"⚡",L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",L.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${h};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${A}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${S}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(L),(O=L.querySelector("#pvp-gc-back"))==null||O.addEventListener("click",()=>L.remove()),(U=L.querySelector("#pvp-gc-use"))==null||U.addEventListener("click",()=>{L.remove(),J(w,k)})}function De(){var x;const w=n[o+"Team"],k=Object.entries(w).flatMap(([y,h])=>(h||[]).filter(v=>!v.used).map(v=>({...v,_line:y})));if(!k.length)return;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",f.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${n.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${k.map(y=>{const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",v=Le(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${h};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(f),(x=f.querySelector("#bp-close"))==null||x.addEventListener("click",()=>f.remove()),f.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const h=y.dataset.cid,v=k.find(S=>S.cardId===h);if(!v)return;const _=(w[v._line]||[]).find(S=>S.cardId===h);_&&(_.boost=(_.boost||0)+n.boostValue),f.remove(),await se({[o+"Team"]:w,boostUsed:!0})})})}function ke(w=null){var G,O;if(!(n.phase===o+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const f=n[o+"Team"],x=n["usedSubIds_"+o]||[],y=n.maxSubs||3;if(x.length>=y){g(`Maximum ${y} remplacements atteint`,"warning");return}const h=Object.entries(f).flatMap(([U,Z])=>(Z||[]).filter(Y=>Y.used).map(Y=>({...Y,_line:U}))),v=(n[o+"Subs"]||[]).filter(U=>!x.includes(U.cardId));if(!h.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){g("Aucun remplaçant disponible","warning");return}let _=Math.max(0,h.findIndex(U=>U.cardId===w));const S=((G=h[_])==null?void 0:G._line)||((O=h[_])==null?void 0:O.job);let $=Math.max(0,v.findIndex(U=>U.job===S)),A=!1;const L=document.createElement("div");L.id="pvp-sub-overlay",L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function B(){var ye,_e,$e,Me,Ie,Oe;const U=h[_],Z=v[$],Y=Math.min(130,Math.round((window.innerWidth-90)/2)),ie=Math.round(Y*1.35),re=qe=>`background:rgba(255,255,255,0.12);border:none;color:${qe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${qe?"default":"pointer"};flex-shrink:0`;L.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${x.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${re($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${Z?We({...Z,used:!1,boost:0},Y,ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${re($>=v.length-1)}" ${$>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${re(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${U?We({...U,used:!1,boost:0},Y,ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${re(_>=h.length-1)}" ${_>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ye=L.querySelector("#psub-close"))==null||ye.addEventListener("click",()=>L.remove()),(_e=L.querySelector("#pout-up"))==null||_e.addEventListener("click",()=>{_>0&&(_--,B())}),($e=L.querySelector("#pout-down"))==null||$e.addEventListener("click",()=>{_<h.length-1&&(_++,B())}),(Me=L.querySelector("#pin-up"))==null||Me.addEventListener("click",()=>{$>0&&($--,B())}),(Ie=L.querySelector("#pin-down"))==null||Ie.addEventListener("click",()=>{$<v.length-1&&($++,B())});const fe=(qe,He,Be,Ve)=>{const Ne=L.querySelector("#"+qe);if(!Ne)return;let Ue=0;Ne.addEventListener("touchstart",Ke=>{Ue=Ke.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Ke=>{const Xe=Ke.changedTouches[0].clientY-Ue;if(Math.abs(Xe)<30)return;const Ze=He();Xe<0&&Ze<Ve-1?(Be(Ze+1),B()):Xe>0&&Ze>0&&(Be(Ze-1),B())},{passive:!0})};fe("pin-panel",()=>$,qe=>$=qe,v.length),fe("pout-panel",()=>_,qe=>_=qe,h.length),(Oe=L.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async qe=>{if(qe.preventDefault(),qe.stopPropagation(),A)return;A=!0;const He=h[_],Be=v[$];if(!He||!Be)return;const Ve=He._line,Ne=(f[Ve]||[]).findIndex(Xe=>Xe.cardId===He.cardId);if(Ne===-1){g("Erreur : joueur introuvable","error"),L.remove();return}const Ue={...Be,_line:Ve,position:He.position,used:!1,boost:0};f[Ve].splice(Ne,1,Ue);const Ke=[...x,Be.cardId];L.remove(),K(He,Be,async()=>{await se({[o+"Team"]:f,[r+"Team"]:n[r+"Team"],["usedSubIds_"+o]:Ke})})})}document.body.appendChild(L),B()}function K(w,k,f){const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const h=(S,$,A)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${A}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${x[S.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(S)?`<img src="${Pe(S)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(S.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${h(k,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${h(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let v=!1;const _=()=>{v||(v=!0,y.remove(),setTimeout(()=>f(),50))};y.addEventListener("click",_),setTimeout(_,2200)}function ee(){var k;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${n[r+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(n[r+"Team"],n[r+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(k=w.querySelector("#pvp-opp-close"))==null||k.addEventListener("click",()=>w.remove())}function ge(){var x;const w=n.log||[],k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const f=y=>{var v,_,S;if(y.type==="duel"){const $=y.isGoal,A=y.homeScored&&o==="p1"||!y.homeScored&&$&&o==="p2",L=y.homeScored?"#FFD700":$?"#ff6b6b":"rgba(255,255,255,0.3)",B=$?A?"⚽ BUT !":"⚽ BUT adversaire !":(v=y.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${$?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${L};margin-bottom:4px">
          <div style="font-size:9px;color:${L};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${B}</div>
          ${(_=y.homePlayers)!=null&&_.length?`<div style="margin-bottom:3px">${ot(y.homePlayers,"rgba(255,255,255,0.7)",y.homeTotal)}</div>`:""}
          ${(S=y.aiPlayers)!=null&&S.length?`<div style="opacity:0.7">${ot(y.aiPlayers,"#ff6b6b",y.aiTotal)}</div>`:""}
        </div>`}return y.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${y.outPlayer?We({...y.outPlayer,used:!0,_line:y.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${y.inPlayer?We({...y.inPlayer,_line:y.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${y.text||""}</div>
      </div>`};k.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(f).join("")}
      </div>`,document.body.appendChild(k),(x=k.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>k.remove())}async function H(){if(n.phase!==o+"-attack")return;const w=o==="p1"?"p2":"p1",k=(n.round||0)+1,f=[...n.log||[]];f.push({type:"info",text:`⏭️ ${n[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const x=he(n),y=ze(w),h=x||!y?"finished":w+"-attack";await se({["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:h,attacker:w,round:k,log:f}),h==="finished"&&await j(n)}async function X(){const w=n[o+"Team"],k=!["GK","DEF","MIL","ATT"].some(h=>(n[r+"Team"][h]||[]).some(v=>!v.used)),f=(n["selected_"+o]||[]).map(h=>{const v=(w[h._role]||[]).find(B=>B.cardId===h.cardId)||h,_=k&&["GK","DEF"].includes(h._role),S=w[h._role]||[],$=S.findIndex(B=>B.cardId===h.cardId),A=lt(S.length),L=$>=0?A[$]:v._col??1;return{...v,_line:h._role,_col:L,..._?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!f.length)return;const x=Ot(f,n.modifiers[o]||{});R(o,f.map(h=>h.cardId)),f.forEach(h=>{const v=(w[h._role]||[]).find(_=>_.cardId===h.cardId);v&&(v.used=!0)}),n["selected_"+o]=[],oe();const y=[...n.log||[]];if(k){const h=(n[o+"Score"]||0)+1,v=f.map(L=>({name:L.name,note:Le(L,L._line||"ATT"),portrait:Pe(L),job:L.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:x.total,aiTotal:0});const _=(n.round||0)+1,S=o==="p1"?"p2":"p1",$={...n,[o+"Team"]:w,[o+"Score"]:h},A=he($);C.add(_),be(v,h,n[r+"Score"]||0,!0,async()=>{await se({[o+"Team"]:w,[o+"Score"]:h,["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:A?"finished":S+"-attack",attacker:S,round:_,log:y}),A&&await j({...n,[o+"Score"]:h})});return}y.push({type:"pending",text:`⚔️ ${n[o+"Name"]} attaque (${x.total})`}),await se({[o+"Team"]:w,[r+"Team"]:n[r+"Team"],pendingAttack:{...x,players:f,side:o},["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},phase:r+"-defense",log:y})}async function V(){const w=n[o+"Team"],k=(n["selected_"+o]||[]).map(U=>{const Z=(w[U._role]||[]).find(ye=>ye.cardId===U.cardId)||U,Y=w[U._role]||[],ie=Y.findIndex(ye=>ye.cardId===U.cardId),re=lt(Y.length),fe=ie>=0?re[ie]:Z._col??1;return{...Z,_line:U._role,_col:fe}}),f=Ht(k,n.modifiers[o]||{});R(o,k.map(U=>U.cardId)),k.forEach(U=>{const Z=(w[U._role]||[]).find(Y=>Y.cardId===U.cardId);Z&&(Z.used=!0)}),n["selected_"+o]=[],oe();const x=Ut(n.pendingAttack.total,f.total,n.modifiers[o]||{}),y=n.pendingAttack.side,h=x==="attack"||(x==null?void 0:x.goal),v=y==="p1"?"p2":"p1",_=(n.round||0)+1,S=(n.pendingAttack.players||[]).map(U=>({name:U.name,note:Le(U,U._line||"ATT"),portrait:Pe(U),job:U.job})),$=[...n.log||[]];$.push({type:"duel",isGoal:h,homeScored:h&&y===o,text:h?`⚽ BUT de ${n[y+"Name"]} ! (${n.pendingAttack.total} vs ${f.total})`:`✋ Attaque stoppée (${n.pendingAttack.total} vs ${f.total})`,homePlayers:S,aiPlayers:k.map(U=>({name:U.name,note:Le(U,U._line||"DEF"),portrait:Pe(U),job:U.job})),homeTotal:n.pendingAttack.total,aiTotal:f.total});const A=h?(n[y+"Score"]||0)+1:n[y+"Score"]||0,L={...n,[o+"Team"]:w,[y+"Score"]:A},B=he(L),G=B?"finished":v+"-attack",O=async()=>{await se({[o+"Team"]:w,[r+"Team"]:n[r+"Team"],[y+"Score"]:A,["selected_"+o]:[],modifiers:{...n.modifiers,[o]:{}},pendingAttack:null,phase:G,attacker:v,round:_,log:$}),(G==="finished"||B)&&await j({...n,[y+"Score"]:A})};if(h){const U=y===o,Z=U?A:n[o+"Score"]||0,Y=U?n[r+"Score"]||0:A;C.add(_),be(S,Z,Y,U,O)}else await O()}function ae(w){return["MIL","ATT"].some(k=>(w[k]||[]).some(f=>!f.used))}function ve(w){return["GK","DEF","MIL","ATT"].some(k=>(w[k]||[]).some(f=>!f.used))}function Se(w){return ve(w)&&!ae(w)}function ze(w){const k=n[w+"Team"],f=n[(w==="p1"?"p2":"p1")+"Team"];return!!(ae(k)||!ve(f)&&Se(k))}function he(w){const k=["MIL","ATT"].some($=>(w.p1Team[$]||[]).some(A=>!A.used)),f=["MIL","ATT"].some($=>(w.p2Team[$]||[]).some(A=>!A.used)),x=ve(w.p1Team),y=ve(w.p2Team);return!k&&!(!y&&x)&&(!f&&!(!x&&y))}function Ae(w){const k=w.p1Score||0,f=w.p2Score||0;return k===f?null:k>f?u.home_id:u.away_id}async function j(w){try{const k=Ae(w),f=k?u.home_id===k?u.away_id:u.home_id:null;await E.from("matches").update({status:"finished",winner_id:k,home_score:w.p1Score||0,away_score:w.p2Score||0}).eq("id",i),k&&f&&ki(k,f).catch(()=>{})}catch(k){console.error("[PvP] finishMatch:",k)}}function D(){var y;const w=n[o+"Score"],k=n[r+"Score"],f=w>k,x=w===k;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${f?"🏆":x?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${f?"Victoire !":x?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${k}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{E.removeChannel(W)}catch{}Je(e),c("home")})}oe()}const Lt="#1A6B3C",xt="#D4A017";async function Vn(e,t){var a;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(a=t.state.params)==null?void 0:a.openLeagueId;if(i){t.state.params.openLeagueId=null,await bt(e,t,i);return}await $t(e,t)}async function $t(e,t,i="waiting"){var z;const{state:a}=t,l=a.profile.id,{data:d}=await E.from("mini_league_members").select("league_id").eq("user_id",l),s=(d||[]).map(I=>I.league_id),{data:c,error:g}=await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),o=g?(await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:c||[],m=(s.length?await E.from("mini_leagues").select("*, mini_league_members(count)").in("id",s).order("created_at",{ascending:!1}):{data:[]}).data||[],b=m.filter(I=>I.status==="waiting"&&!I.is_archived),u=m.filter(I=>I.status==="active"&&!I.is_archived),T=m.filter(I=>I.is_archived||I.status==="finished"),n=o.filter(I=>!s.includes(I.id)),p=[{key:"waiting",label:"🟡 En attente",count:b.length+n.length},{key:"active",label:"🟢 En cours",count:u.length},{key:"archived",label:"📁 Archivées",count:T.length}];e.innerHTML=`
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
  </div>`,(z=document.getElementById("ml-create-btn"))==null||z.addEventListener("click",()=>Xn(e,t)),e.querySelectorAll(".ml-tab").forEach(I=>I.addEventListener("click",()=>$t(e,t,I.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(I=>I.addEventListener("click",()=>bt(e,t,I.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(I=>I.addEventListener("click",q=>{q.stopPropagation(),_o(e,t,I.dataset.join,I.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(I=>I.addEventListener("click",q=>{q.stopPropagation(),yi(e,t,I.dataset.delete,I.dataset.name,i)}))}function ii(e,t,i=!1){var s,c;const a=e.creator_id===t,l=e.pot||0,d=((c=(s=e.mini_league_members)==null?void 0:s[0])==null?void 0:c.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function Yn(e,t,i){const a=[];return e.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),a.push(...e.map(l=>ii(l,i,!1)))),t.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),a.push(...t.map(l=>ii(l,i,!0)))),a.length?a.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Wn(e,t){return e.length?e.map(i=>ii(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Jn(e,t){return e.length?e.map(i=>ii(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Xn(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(a=>a.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=a.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var T,n,p,z;const{toast:a}=t,l=document.getElementById("ml-name").value.trim(),d=parseInt(document.getElementById("ml-max").value)||6,s=parseInt(document.getElementById("ml-fee").value)||500,c=((T=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:T.value)||"public",g=((n=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:n.value)||"aller",o=((z=(p=document.getElementById("ml-pwd"))==null?void 0:p.value)==null?void 0:z.trim())||null;if(!l){a("Le nom est obligatoire","error");return}if(s<100){a("Mise minimum : 100 crédits","error");return}if(c==="private"&&!o){a("Mot de passe requis","error");return}const{data:r,error:m}=await E.from("mini_leagues").insert({name:l,creator_id:t.state.profile.id,type:c,password:o,mode:g,max_players:d,entry_fee:s}).select().single();if(m){a("Erreur : "+m.message,"error");return}const{data:b}=await E.from("users").select("credits").eq("id",t.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<s){await E.from("mini_leagues").delete().eq("id",r.id),a(`Crédits insuffisants pour la mise (${s.toLocaleString("fr")} cr.)`,"error");return}await E.from("users").update({credits:b.credits-s}).eq("id",t.state.profile.id),await E.from("mini_leagues").update({pot:s}).eq("id",r.id),await E.from("mini_league_members").insert({league_id:r.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=b.credits-s);const u=document.getElementById("nav-credits");u&&(u.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),a(`Mini League créée ! ${s.toLocaleString("fr")} cr. déduits.`,"success"),bt(e,t,r.id)})}function Zn(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),a=l=>{t.remove(),e(l)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>a(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>a(i.value.trim())),i.addEventListener("keydown",l=>{l.key==="Enter"&&a(i.value.trim())}),t.addEventListener("click",l=>{l.target===t&&a(null)})})}async function _o(e,t,i,a){const{toast:l,state:d}=t,s=d.profile.id,{data:c}=await E.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!c){l("Mini League introuvable","error");return}if(c.status!=="waiting"){l("Cette Mini League a déjà démarré","warning");return}const{count:g}=await E.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(g>=c.max_players){l("La Mini League est complète","warning");return}if(a==="private"){const n=await Zn();if(n===null)return;if(c.password!==n){l("Mot de passe incorrect","error");return}}const o=c.entry_fee||100,{data:r}=await E.from("users").select("credits").eq("id",s).single();if(((r==null?void 0:r.credits)||0)<o){l(`Crédits insuffisants — il te faut ${o.toLocaleString("fr")} cr. (solde : ${((r==null?void 0:r.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:m}=await E.from("mini_league_members").insert({league_id:i,user_id:s});if(m){l("Erreur inscription : "+m.message,"error");return}const{error:b}=await E.from("users").update({credits:r.credits-o}).eq("id",s),{error:u}=await E.from("mini_leagues").update({pot:(c.pot||0)+o}).eq("id",i);(b||u)&&console.error("Erreur post-inscription:",b,u),d.profile&&(d.profile.credits=r.credits-o);const T=document.getElementById("nav-credits");T&&(T.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`✅ Inscrit ! −${o.toLocaleString("fr")} cr. · Pot : ${((c.pot||0)+o).toLocaleString("fr")} cr.`,"success"),bt(e,t,i)}async function Qn(e,t,i,a){const{toast:l,state:d}=t,s=d.profile.id;if(!confirm(`Te désinscrire et récupérer ${a.toLocaleString("fr")} cr. ?`))return;const{data:c}=await E.from("mini_leagues").select("pot,status").eq("id",i).single();if(!c||c.status!=="waiting"){l("Impossible — la league a déjà démarré","error");return}const{data:g}=await E.from("users").select("credits").eq("id",s).single();await E.from("mini_leagues").update({pot:Math.max(0,(c.pot||0)-a)}).eq("id",i),await E.from("users").update({credits:((g==null?void 0:g.credits)||0)+a}).eq("id",s),await E.from("mini_league_members").delete().eq("league_id",i).eq("user_id",s),d.profile&&(d.profile.credits=((g==null?void 0:g.credits)||0)+a);const o=document.getElementById("nav-credits");o&&(o.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`↩️ Désinscrit · +${a.toLocaleString("fr")} cr. remboursés`,"success"),$t(e,t,"waiting")}async function yi(e,t,i,a,l){const{toast:d}=t;if(!confirm(`Supprimer définitivement "${a}" et tous ses matchs/membres ? Action irréversible.`))return;await E.from("mini_league_matches").delete().eq("league_id",i),await E.from("mini_league_members").delete().eq("league_id",i);const{error:s}=await E.from("mini_leagues").delete().eq("id",i);if(s){d("Erreur suppression ("+s.message+")","error");return}d("Mini League supprimée avec succès","success"),$t(e,t,l)}async function er(e,t,i){await E.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),$t(e,t,"archived")}async function bt(e,t,i){var N,C,F,M,W,se,ne,pe,le;const{state:a,toast:l}=t,d=a.profile.id,[{data:s},{data:c},{data:g}]=await Promise.all([E.from("mini_leagues").select("*").eq("id",i).single(),E.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),E.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!s){l("Introuvable","error"),await $t(e,t);return}const o=(c||[]).some(J=>J.user_id===d),r=s.creator_id===d,m=(c||[]).map(J=>J.user).filter(Boolean),b=ko(m,g||[]),u=(g||[]).filter(J=>J.matchday===s.current_day),T=s.pot||0,n=s.entry_fee||100,p=u.length>0&&u.every(J=>J.status==="finished"||J.status==="bye"),z=s.current_day>=s.total_days,I=(c||[]).find(J=>J.user_id===d);e.innerHTML=`
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
        ${m.map(J=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${J.club_color2||Lt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${J.club_color1||"#fff"}">${(J.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${J.club_name||J.pseudo}</div><div style="font-size:11px;color:#999">@${J.pseudo}</div></div>
            ${J.id===s.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
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
        ${u.map(J=>Ri(J,m,d,o)).join("")}
        ${r&&p&&!z?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${r&&p&&z?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
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
          <tbody>${b.map((J,R)=>{const P=T>0&&s.status==="finished"?R===0?Math.floor(T*.7):R===1?Math.floor(T*.2):R===2?Math.floor(T*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${J.userId===d?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${R===0?xt:R<3?Lt:"#555"}">${["🥇","🥈","🥉"][R]||R+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${J.clubName}</div><div style="font-size:10px;color:#999">@${J.pseudo}</div></td>
              <td style="text-align:center">${J.played}</td><td style="text-align:center">${J.won}-${J.drawn}-${J.lost}</td>
              <td style="text-align:center;color:${J.goalDiff>=0?Lt:"#cc2222"}">${J.goalDiff>=0?"+":""}${J.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${J.points}</td>
              ${T>0&&s.status==="finished"?`<td style="text-align:right;font-weight:700;color:${xt}">${P?P.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${s.status!=="waiting"&&s.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,s.status==="active"?s.current_day-1:s.current_day)},(J,R)=>R+1).reverse().map(J=>{const R=(g||[]).filter(P=>P.matchday===J);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${J}</div>${R.map(P=>Ri(P,m,d,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${r&&!s.is_archived&&s.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const q=s.status==="waiting"?"waiting":s.status==="active"?"active":"archived";if((N=document.getElementById("ml-back"))==null||N.addEventListener("click",()=>$t(e,t,q)),(C=document.getElementById("ml-start-btn"))==null||C.addEventListener("click",()=>tr(e,t,s,m)),(F=document.getElementById("ml-next-day"))==null||F.addEventListener("click",()=>ir(e,t,i)),(M=document.getElementById("ml-finish-btn"))==null||M.addEventListener("click",()=>$o(e,t,i,T,b,m)),(W=document.getElementById("ml-join-now"))==null||W.addEventListener("click",()=>_o(e,t,i,s.type)),(se=document.getElementById("ml-leave-btn"))==null||se.addEventListener("click",()=>Qn(e,t,i,n)),(ne=document.getElementById("ml-delete-btn"))==null||ne.addEventListener("click",()=>yi(e,t,i,s.name,"waiting")),(pe=document.getElementById("ml-delete-now"))==null||pe.addEventListener("click",()=>yi(e,t,i,s.name,q)),(le=document.getElementById("ml-archive-btn"))==null||le.addEventListener("click",()=>er(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(J=>{J.addEventListener("click",()=>{const R=u.find(P=>P.id===J.dataset.playMatch);R&&t.navigate("match-mini-league",{mlMatchId:R.id,leagueId:i})})}),s.status==="finished"&&I){const J=b.findIndex(R=>R.userId===d);J>=0&&J<3&&I.prize_amount>0&&setTimeout(()=>or(e,t,s,I,J),400)}}function Ri(e,t,i,a,l=!1){const d=m=>t.find(b=>b.id===m);if(e.is_bye){const m=d(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"?"} exempté(e)</div>`}const s=d(e.home_id),c=d(e.away_id),g=e.home_id===i||e.away_id===i,o=g&&e.status==="pending"&&a&&!l,r=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${g?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${g?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?Lt:"#999"}">${r}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"}</div>
    ${o?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function tr(e,t,i,a){const{toast:l,state:d}=t,s=nr(a.map(o=>o.id),i.mode),c=[];s.forEach((o,r)=>o.forEach(m=>c.push({league_id:i.id,matchday:r+1,home_id:m.home||m.bye,away_id:m.away||null,is_bye:!!m.bye,status:m.bye?"bye":"pending"})));const{error:g}=await E.from("mini_league_matches").insert(c);if(g){l("Erreur calendrier : "+g.message,"error");return}await E.from("mini_leagues").update({status:"active",current_day:1,total_days:s.length}).eq("id",i.id),l(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),bt(e,t,i.id)}async function ir(e,t,i){const{data:a}=await E.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),l=(a.current_day||0)+1;if(l>(a.total_days||0)){await $o(e,t,i,a.pot||0,null,null);return}await E.from("mini_leagues").update({current_day:l}).eq("id",i),t.toast(`Journée ${l} commencée !`,"success"),bt(e,t,i)}async function $o(e,t,i,a,l,d){const{toast:s,state:c}=t;let g=l,o=d;if(!g){const{data:m}=await E.from("mini_league_matches").select("*").eq("league_id",i),{data:b}=await E.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);o=(b||[]).map(u=>u.user).filter(Boolean),g=ko(o,m||[])}const r=[Math.floor(a*.7),Math.floor(a*.2),Math.floor(a*.1)];await Promise.all(g.slice(0,3).map((m,b)=>r[b]?E.from("mini_league_members").update({prize_amount:r[b],prize_claimed:!1}).eq("league_id",i).eq("user_id",m.userId):Promise.resolve())),await E.from("mini_leagues").update({status:"finished"}).eq("id",i),s("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),bt(e,t,i)}async function or(e,t,i,a,l){var b,u;const{state:d,toast:s}=t,c=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],g=["🥇","🥈","🥉"][l],o=a.prize_amount||c[l]||0,r=a.prize_claimed,m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",m.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${g}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${l===0?"Champion !":l===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${xt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${r?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${xt}">${o.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${l===0?"70%":l===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${r?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${xt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${o.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(m),(b=m.querySelector("#prize-close"))==null||b.addEventListener("click",()=>m.remove()),m.addEventListener("click",T=>{T.target===m&&m.remove()}),(u=m.querySelector("#claim-prize-btn"))==null||u.addEventListener("click",async()=>{const{data:T}=await E.from("users").select("credits").eq("id",d.profile.id).single();await E.from("users").update({credits:((T==null?void 0:T.credits)||0)+o}).eq("id",d.profile.id),await E.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",d.profile.id),d.profile&&(d.profile.credits=((T==null?void 0:T.credits)||0)+o);const n=document.getElementById("nav-credits");n&&(n.textContent=`💰 ${d.profile.credits.toLocaleString("fr")}`),s(`💰 +${o.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),m.remove(),bt(e,t,i.id)})}function nr(e,t){const a=e.length%2===0?[...e]:[...e,null],l=a.length;let d=a.slice(1);const s=[];for(let c=0;c<l-1;c++){const g=[],o=[a[0],...d];for(let r=0;r<l/2;r++){const m=o[r],b=o[l-1-r];m===null?g.push({bye:b}):b===null?g.push({bye:m}):g.push({home:m,away:b})}s.push(g),d=[d[d.length-1],...d.slice(0,-1)]}return t==="aller-retour"?[...s,...s.map(c=>c.map(g=>g.bye?g:{home:g.away,away:g.home}))]:s}function ko(e,t){const i={};return e.forEach(a=>{i[a.id]={userId:a.id,pseudo:a.pseudo,clubName:a.club_name||a.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(a=>a.status==="finished"&&!a.is_bye&&a.home_score!=null).forEach(a=>{const l=i[a.home_id],d=i[a.away_id];!l||!d||(l.played++,d.played++,l.goalsFor+=a.home_score,l.goalsAgainst+=a.away_score,d.goalsFor+=a.away_score,d.goalsAgainst+=a.home_score,a.home_score>a.away_score?(l.won++,l.points+=3,d.lost++):a.home_score<a.away_score?(d.won++,d.points+=3,l.lost++):(l.drawn++,l.points++,d.drawn++,d.points++),l.goalDiff=l.goalsFor-l.goalsAgainst,d.goalDiff=d.goalsFor-d.goalsAgainst)}),Object.values(i).sort((a,l)=>l.points-a.points||l.goalDiff-a.goalDiff||l.goalsFor-a.goalsFor)}async function Oi(e,t,i,a){var l,d;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:a};try{const s=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(E.getChannels?E.getChannels():[]).forEach(g=>{const o=g.topic||"";(o.includes("matchmaking")||o.includes("pvp-match"))&&E.removeChannel(g)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}s&&(await E.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await si(e,t,"random",({deckId:s,formation:c,starters:g,subsRaw:o,gcCardsEnriched:r,gcDefs:m,stadiumDef:b})=>{const u=T=>rr(e,t,s,c,g,o,T,m||[],i);if(!r.length){u([]);return}ai(e,r,u)})}async function rr(e,t,i,a,l,d,s=[],c=[],g,o){const{state:r,navigate:m,toast:b}=t,u=r.profile.id;let T=!1,n=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:u})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",u)}catch{}const{data:p}=await E.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",g).single();if(!p){b("Match introuvable","error"),Je(e),m("mini-league");return}if(p.home_id!==u&&p.away_id!==u){b("Tu ne fais pas partie de ce match","error"),Je(e),m("mini-league");return}const z=p.home_id===u,I=z?p.away:p.home,q=z?p.away_id:p.home_id,N=(F,M)=>{var W;e.innerHTML=`
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
      </div>`,(W=document.getElementById("lobby-cancel"))==null||W.addEventListener("click",()=>{T=!0,clearInterval(n),Je(e),m("mini-league")})},C=async(F,M)=>{T=!0,clearInterval(n),await new Promise(W=>setTimeout(W,600)),e.isConnected&&ar(e,t,F,M,s,c)};if(N(),z){let F=p.match_id;if(!F){const{data:W,error:se}=await E.from("matches").insert({home_id:u,away_id:q,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(se||!W){b("Erreur création match","error"),Je(e),m("mini-league");return}F=W.id,await E.from("mini_league_matches").update({match_id:F,status:"playing"}).eq("id",g)}const M=F;n=setInterval(async()=>{if(T){clearInterval(n);return}const{data:W}=await E.from("matches").select("away_deck_id").eq("id",M).single();W!=null&&W.away_deck_id&&(clearInterval(n),C(M,!0))},1500)}else{let F=p.match_id;n=setInterval(async()=>{if(T){clearInterval(n);return}const{data:M}=await E.from("mini_league_matches").select("match_id").eq("id",g).single();M!=null&&M.match_id&&(clearInterval(n),F=M.match_id,await E.from("matches").update({away_deck_id:i}).eq("id",F),C(F,!1))},1500)}}async function ar(e,t,i,a,l=[],d=[]){var k;const{state:s,navigate:c,toast:g}=t,o=((k=s.params)==null?void 0:k.leagueId)||null,r=a?"p1":"p2",m=a?"p2":"p1",b=(l||[]).map(f=>f.id),u=(l||[]).map(f=>({id:f.id,gc_type:f.gc_type,_gcDef:f._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:T}=await E.from("matches").select("*").eq("id",i).single();if(!T){g("Match introuvable","error"),c("mini-league");return}async function n(){const[{data:f},{data:x},{data:y},{data:h}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:T.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:T.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",T.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",T.away_id).single()]),v=L=>{const B=Number(L.evolution_bonus)||0;return{cardId:L.card_id,position:L.position,id:L.id,firstname:L.firstname,name:L.surname_encoded,country_code:L.country_code,club_id:L.club_id,job:L.job,job2:L.job2,note_g:(Number(L.note_g)||0)+(L.job==="GK"||L.job2==="GK"&&Number(L.note_g)>0?B:0),note_d:(Number(L.note_d)||0)+(L.job==="DEF"||L.job2==="DEF"&&Number(L.note_d)>0?B:0),note_m:(Number(L.note_m)||0)+(L.job==="MIL"||L.job2==="MIL"&&Number(L.note_m)>0?B:0),note_a:(Number(L.note_a)||0)+(L.job==="ATT"||L.job2==="ATT"&&Number(L.note_a)>0?B:0),evolution_bonus:B,rarity:L.rarity,skin:L.skin,hair:L.hair,hair_length:L.hair_length,clubName:L.club_encoded_name||null,clubLogo:L.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},_=((f==null?void 0:f.starters)||[]).map(L=>v(L)),S=((x==null?void 0:x.starters)||[]).map(L=>v(L)),$=(f==null?void 0:f.formation)||"4-4-2",A=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:(()=>{const L=yt(_,$);return stadiumDef?jt(L,stadiumDef):L})(),p2Team:yt(S,A),p1Subs:(()=>{const L=((f==null?void 0:f.subs)||[]).map(B=>v(B));return stadiumDef&&Nt(L,stadiumDef),L})(),p2Subs:((x==null?void 0:x.subs)||[]).map(L=>v(L)),p1Formation:$,p2Formation:A,p1Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?b:[],gc_p2:a?[]:b,gcCardsFull_p1:a?u:[],gcCardsFull_p2:a?[]:u,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let p=T.game_state&&Object.keys(T.game_state).length?T.game_state:null;if(!p)if(a){p=await n();const{data:f}=await E.from("matches").select("game_state").eq("id",i).single();!(f!=null&&f.game_state)||!Object.keys(f.game_state).length?await E.from("matches").update({game_state:p,turn_user_id:T.home_id}).eq("id",i):p=f.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let f=0;f<60&&!p;f++){await new Promise(y=>setTimeout(y,400));const{data:x}=await E.from("matches").select("game_state").eq("id",i).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(p=x.game_state)}if(!p){g("Erreur de synchronisation","error"),c("mini-league");return}p.gc_p2=b,p.gcCardsFull_p2=u,await E.from("matches").update({game_state:p}).eq("id",i)}let z=!1,I=!1,q=!1,N=null,C=!1;const F=new Set,M=new Set;function W(f){var L,B;try{E.removeChannel(se)}catch{}const x=p[r+"Score"]||0,y=p[m+"Score"]||0;if(!q){q=!0;const G=f.winner_id||(x>y?s.profile.id:y>x?"opp":null),O=G===s.profile.id?"win":G?"loss":null;O&&oi(()=>Promise.resolve().then(()=>oo),void 0).then(U=>U.applyOwnEvolution(s.profile.id,O)).catch(()=>{})}if(!I){const G=p.p1Score||0,O=p.p2Score||0,U=(p.usedGc_p1||[]).length,Z=(p.usedGc_p2||[]).length,Y=f.winner_id||(G>O?T.home_id:O>G?T.away_id:null);(Y?s.profile.id===Y:s.profile.id<(a?T.away_id:T.home_id))&&(I=!0,Xi({player1Id:T.home_id,player2Id:T.away_id,score1:G,score2:O,gc1:U,gc2:Z}).catch(re=>console.warn("[FriendMatch] updateStats:",re)))}let h,v;f.winner_id?(h=f.winner_id===s.profile.id,v=!1):f.forfeit?(h=x>y,v=!1):(v=x===y,h=x>y),(L=document.getElementById("pvp-end-overlay"))==null||L.remove();const _=document.createElement("div");_.id="pvp-end-overlay",_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const S=v?"🤝":h?"🏆":"😞",$=v?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",A=v?"#fff":h?"#FFD700":"#ff6b6b";_.innerHTML=`
      <div style="font-size:64px">${S}</div>
      <div style="font-size:26px;font-weight:900;color:${A}">${$}</div>
      <div style="font-size:18px">${p[r+"Name"]} ${x} – ${y} ${p[m+"Name"]}</div>
      ${f.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(_),(B=_.querySelector("#pvp-end-home"))==null||B.addEventListener("click",()=>{_.remove(),Je(e),o?c("mini-league",{openLeagueId:o}):c("mini-league")})}const se=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},f=>{const x=f.new;try{if(x.status==="finished"||x.forfeit){if(z||(z=!0,N&&(clearInterval(N),N=null),x.game_state&&(p=x.game_state),p.phase==="finished"&&!x.forfeit&&document.getElementById("pvp-home")))return;W(x);return}if(x.game_state){const y=p;p=x.game_state;const h=p._lastGC;if(h&&h.seq&&!M.has(h.seq)&&(M.add(h.seq),h.by!==r)){Fe(h.type,h.by,()=>me());return}const v=y[r+"Score"]||0,_=y[m+"Score"]||0,S=p[r+"Score"]||0,$=p[m+"Score"]||0,A=S>v,L=$>_;if((A||L)&&!F.has(p.round)){F.add(p.round);const B=[...p.log||[]].reverse().find(O=>O.isGoal),G=((B==null?void 0:B.homePlayers)||[]).map(O=>({name:O.name,note:O.note,portrait:O.portrait,job:O.job}));Ce(G,S,$,A,()=>me());return}me()}}catch(y){console.error("[PvP] crash:",y)}}).subscribe();async function ne(f){Object.assign(p,f),p.lastActionAt=new Date().toISOString();const{error:x}=await E.from("matches").update({game_state:p}).eq("id",i);x&&g("Erreur de synchronisation","error");try{me()}catch(y){console.error("[PvP] renderPvpScreen crash:",y)}}async function pe(){if(z)return;z=!0,N&&(clearInterval(N),N=null);const f=a?T.away_id:T.home_id,x=a?"p2":"p1",y=a?"p1":"p2",h={...p,[x+"Score"]:3,[y+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:f,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",i)}catch{}try{E.removeChannel(se)}catch{}setTimeout(()=>{Je(e),c("mini-league")},800)}const le={BOOST_STAT:({value:f=1,count:x=1,roles:y=[]},h,v)=>{const _=h[r+"Team"],S=Object.entries(_).filter(([$])=>!y.length||y.includes($)).flatMap(([$,A])=>A.filter(L=>!L.used).map(L=>({...L,_line:$})));if(!S.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(h);return}J(S,x,`Choisir ${x} joueur(s) à booster (+${f})`,$=>{$.forEach(A=>{const L=(_[A._line]||[]).find(B=>B.cardId===A.cardId);L&&(L.boost=(L.boost||0)+f,h.log.push({text:`⚡ +${f} sur ${L.name}`,type:"info"}))}),h[r+"Team"]=_,v(h)})},DEBUFF_STAT:({value:f=1,count:x=1,roles:y=[],target:h="ai"},v,_)=>{const S=h==="home"?r:m,$=v[S+"Team"],A=h==="home"?"allié":"adverse",L=Object.entries($).filter(([B])=>!y.length||y.includes(B)).flatMap(([B,G])=>G.map(O=>({...O,_line:B})));if(!L.length){v.log.push({text:`🎯 Aucun joueur ${A}`,type:"info"}),_(v);return}J(L,x,`Choisir ${x} joueur(s) ${A}(s) (-${f})`,B=>{B.forEach(G=>{const O=($[G._line]||[]).find(U=>U.cardId===G.cardId);O&&(O.boost=(O.boost||0)-f,v.log.push({text:`🎯 -${f} sur ${O.name}`,type:"info"}))}),v[S+"Team"]=$,_(v)})},GRAY_PLAYER:({count:f=1,roles:x=[],target:y="ai"},h,v)=>{const _=y==="home"?r:m,S=h[_+"Team"],$=y==="home"?"allié":"adverse",A=Object.entries(S).filter(([L])=>!x.length||x.includes(L)).flatMap(([L,B])=>B.filter(G=>!G.used).map(G=>({...G,_line:L})));if(!A.length){h.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),v(h);return}J(A,f,`Choisir ${f} joueur(s) ${$}(s) à exclure`,L=>{const B="usedCardIds_"+_,G=new Set(h[B]||[]);L.forEach(O=>{const U=(S[O._line]||[]).find(Z=>Z.cardId===O.cardId);U&&(U.used=!0,G.add(O.cardId),h.log.push({text:`❌ ${U.name} exclu !`,type:"info"}))}),h[B]=[...G],h[_+"Team"]=S,v(h)})},REVIVE_PLAYER:({count:f=1,roles:x=[]},y,h)=>{const v=y[r+"Team"],_=Object.entries(v).filter(([S])=>!x.length||x.includes(S)).flatMap(([S,$])=>$.filter(A=>A.used).map(A=>({...A,_line:S})));if(!_.length){y.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(y);return}J(_,f,`Choisir ${f} joueur(s) à ressusciter`,S=>{S.forEach($=>{const A=(v[$._line]||[]).find(L=>L.cardId===$.cardId);A&&(A.used=!1,y.log.push({text:`💫 ${A.name} ressuscité !`,type:"info"}))}),y[r+"Team"]=v,h(y)})},REMOVE_GOAL:({},f,x)=>{const y=m+"Score";f[y]>0?(f[y]--,f.log.push({text:"🚫 Dernier but annulé !",type:"info"})):f.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(f)},ADD_GOAL_DRAW:({},f,x)=>{f[r+"Score"]===f[m+"Score"]?(f[r+"Score"]++,f.log.push({text:"🎯 But bonus !",type:"info"})):f.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(f)},ADD_SUB:({value:f=1},x,y)=>{x.maxSubs=(x.maxSubs||3)+f,x.log.push({text:`🔄 +${f} remplacement(s)`,type:"info"}),y(x)},CUSTOM:({},f,x)=>x(f)};function J(f,x,y,h){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let _=[];function S(){var A,L;const $=f.map(B=>{const G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[B._line]||"#555",O=Le(B,B._line)+(B.boost||0),Z=_.find(ie=>ie.cardId===B.cardId)?"#FFD700":"rgba(255,255,255,0.25)",Y=B.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${B.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Z};background:${G};overflow:hidden;cursor:pointer;${Y}">
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
        </div>`,(A=v.querySelector("#pp-close"))==null||A.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(B=>{B.addEventListener("click",()=>{const G=B.dataset.cid,O=f.find(Z=>Z.cardId===G),U=_.findIndex(Z=>Z.cardId===G);O&&(U>-1?_.splice(U,1):_.length<x&&_.push(O),S())})}),(L=v.querySelector("#pp-confirm"))==null||L.addEventListener("click",()=>{v.remove(),h(_)})}S(),document.body.appendChild(v)}async function R(f,x){const h=(p["gcCardsFull_"+r]||[]).find($=>$.id===f),v=(h==null?void 0:h._gcDef)||(p.gcDefs||[]).find($=>{var A;return $.name===x||((A=$.name)==null?void 0:A.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),_=[...p["usedGc_"+r]||[],f],S={type:x,by:r,seq:(p._gcAnimSeq||0)+1};M.add(S.seq),Fe(x,r,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const A=le[v.effect_type];if(A){const L={...p};A(v.effect_params||{},L,async B=>{B["usedGc_"+r]=_,B._lastGC=S,B._gcAnimSeq=S.seq,await ne(B)});return}}const $={...p};switch(x){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const A=m+"Score";$[A]>0&&($[A]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+r]=_,$._lastGC=S,$._gcAnimSeq=S.seq,await ne($)})}function P(f,x){const y="usedCardIds_"+f,h=new Set(p[y]||[]);x.forEach(v=>h.add(v)),p[y]=[...h]}function oe(){for(const f of["p1","p2"]){const x=new Set(p["usedCardIds_"+f]||[]),y=p[f+"Team"];if(y)for(const h of["GK","DEF","MIL","ATT"])(y[h]||[]).forEach(v=>{v.used=x.has(v.cardId)})}}function me(){var nt,gt,de,Ee,te,ue;if(p.phase==="reveal")return we();if(p.phase==="midfield")return be();if(p.phase==="finished")return w();const f=p[r+"Team"],x=p[m+"Team"];oe();const y=p[r+"Score"],h=p[m+"Score"],v=p[r+"Name"],_=p[m+"Name"],S=p.phase===r+"-attack",$=p.phase===r+"-defense",A=Array.isArray(p["selected_"+r])?p["selected_"+r]:[],L=A.map(Q=>Q.cardId),B=window.innerWidth>=700,G=p[r+"Subs"]||[],O=p["usedSubIds_"+r]||[],U=G.filter(Q=>!O.includes(Q.cardId)),Z=p["gcCardsFull_"+r]||[],Y=p["usedGc_"+r]||[],ie=Z.filter(Q=>!Y.includes(Q.id)),re=p.boostOwner===r&&!p.boostUsed,fe=!["GK","DEF","MIL","ATT"].some(Q=>(x[Q]||[]).some(ce=>!ce.used)),ye=[...f.MIL||[],...f.ATT||[]].filter(Q=>!Q.used),_e=S&&fe&&ye.length===0?[...f.GK||[],...f.DEF||[]].filter(Q=>!Q.used).map(Q=>Q.cardId):[];function $e(Q,ce,je){var Si,zi;const Te=Q._gcDef,tt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Te==null?void 0:Te.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",it={purple:"#b06ce0",light_blue:"#00d4ef"}[Te==null?void 0:Te.color]||"#b06ce0",rt=(Te==null?void 0:Te.name)||Q.gc_type,st=(Te==null?void 0:Te.effect)||((Si=Re[Q.gc_type])==null?void 0:Si.desc)||"",ct=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,kt=((zi=Re[Q.gc_type])==null?void 0:zi.icon)||"⚡",pt=Math.round(je*.22),ht=Math.round(je*.22),Et=je-pt-ht,Kt=rt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}"
        style="box-sizing:border-box;width:${ce}px;height:${je}px;border-radius:10px;border:2px solid ${it};background:${tt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}function Me(Q,ce){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Q}px;height:${ce}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ce*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ce*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ce*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const Ie=(Q,ce)=>ce?Me(130,175):$e(Q,130,175),Oe=(Q,ce)=>ce?Me(68,95):$e(Q,68,95),qe=B?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",He=S?he(r)?`<button id="pvp-action" style="${qe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${A.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${qe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${qe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${A.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${_}</div>`,Be=S&&!he(r)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':S||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${A.length}/3 sélectionné(s)</div>`:"",Ve=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${B?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${U.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':U.map(Q=>`<div class="pvp-sub-btn" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${We(Q,B?76:44,B?100:58)}</div>`).join("")}
    </div>`,Ne=S?"attack":$?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(f,p[r+"Formation"],Ne,L,300,300,_e)}
      </div>
    </div>`;function Ke(Q){if(Q.type==="duel"&&(Q.homeTotal!=null||Q.aiTotal!=null)){const ce=(Q.homeTotal||0)>=(Q.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(Q.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Q.homePlayers||[]).map(je=>dt(je)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ce?20:14}px;font-weight:900;color:${ce?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${Q.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ce?14:20}px;font-weight:900;color:${ce?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${Q.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Q.aiPlayers||[]).map(je=>dt(je)).join("")}
            </div>
          </div>
          ${Q.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${Q.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${Q.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${Q.type==="goal"?700:400};padding:3px 2px">${Q.text||""}</div>`}const Xe=(()=>{var ce,je;if($&&((ce=p.pendingAttack)!=null&&ce.players)){const Te=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${_} ATTAQUE — Défendez !</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#ff6b6b",Te.total)}
        </div>`}if(S&&((je=p.pendingAttack)!=null&&je.players)){const Te=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#00ff88",Te.total)}
        </div>`}const Q=(p.log||[]).slice(-1)[0];return Q?'<div style="padding:2px 4px">'+Ke(Q)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ze=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${y} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${_}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Xe}</div>
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
              ${He}${Be}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ie.map(Q=>Ie(Q,!1)).join("")}
            ${re?Ie(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ze}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(f,p[r+"Formation"],Ne,L,300,300,_e)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ie.map(Q=>Oe(Q,!1)).join("")}
            ${re?Oe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${S&&U.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${S&&U.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${S&&U.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${S&&U.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${U.length}</div>
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
          <div>${He}${Be}</div>
        </div>
      </div>`;function Qe(){const Q=e.querySelector(".match-screen");if(!Q)return;const ce=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Q.style.height=ce+"px",Q.style.minHeight=ce+"px",Q.style.maxHeight=ce+"px",Q.style.overflow="hidden";const je=e.querySelector("#mobile-action-bar"),Te=e.querySelector("#mobile-play-area");je&&Te&&(Te.style.paddingBottom=je.offsetHeight+"px")}if(Qe(),setTimeout(Qe,120),setTimeout(Qe,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Qe),window.visualViewport.addEventListener("scroll",Qe)),window.addEventListener("resize",Qe)),function(){const ce=e.querySelector(".terrain-wrapper svg");ce&&(ce.removeAttribute("width"),ce.removeAttribute("height"),ce.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ce.setAttribute("viewBox","-26 -26 352 352"),ce.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>{if(!S&&!$)return;const ce=Q.dataset.cardId,je=Q.dataset.role,Te=(f[je]||[]).find(st=>st.cardId===ce);if(!Te||Te.used)return;const tt=_e.includes(ce);if(S&&!["MIL","ATT"].includes(je)&&!tt)return;Array.isArray(p["selected_"+r])||(p["selected_"+r]=[]);const it=p["selected_"+r],rt=it.findIndex(st=>st.cardId===ce);rt>-1?it.splice(rt,1):it.length<3&&it.push({...Te,_role:je}),me()})}),e.querySelectorAll(".match-used-hit").forEach(Q=>{Q.addEventListener("click",()=>K(Q.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(Q=>{Q.addEventListener("click",()=>K())}),(nt=e.querySelector("#pvp-sub-open"))==null||nt.addEventListener("click",()=>K()),e.querySelectorAll(".pvp-gc-mini").forEach(Q=>{Q.addEventListener("click",()=>De(Q.dataset.gcId,Q.dataset.gcType))}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>ke()),(de=e.querySelector("#pvp-action"))==null||de.addEventListener("click",Q=>{S?Q.currentTarget.dataset.pass==="1"||!he(r)?X():V():$&&ae()}),(Ee=e.querySelector("#pvp-quit"))==null||Ee.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&pe()}),(te=e.querySelector("#pvp-view-opp"))==null||te.addEventListener("click",()=>ge()),(ue=e.querySelector("#pvp-toggle-history"))==null||ue.addEventListener("click",()=>H()),N&&(clearInterval(N),N=null),(S||$)&&!z){let Q=30,ce=!1;const je=()=>document.getElementById("pvp-timer"),Te=()=>{je()&&(je().textContent=Q+"s",je().style.color=ce?"#ff4444":"#fff")};Te(),N=setInterval(()=>{Q--,Q<0?ce?(clearInterval(N),N=null,S&&!he(r)?X():pe()):(ce=!0,Q=15,Te()):Te()},1e3)}}function we(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[m+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(p[m+"Team"],p[m+"Formation"],null,[],300,300)}</div>
    </div>`,r==="p1"&&setTimeout(async()=>{await ne({phase:"midfield"})},5e3)}let xe=!1;function be(){if(xe)return;const f=p[r+"Team"].MIL||[],x=p[m+"Team"].MIL||[];function y(ie){return ie.reduce((re,fe)=>re+Le(fe,"MIL"),0)}function h(ie){let re=0;for(let fe=0;fe<ie.length-1;fe++){const ye=at(ie[fe],ie[fe+1]);ye==="#00ff88"?re+=2:ye==="#FFD700"&&(re+=1)}return re}const v=y(f)+h(f),_=y(x)+h(x),S=v>=_;function $(ie,re,fe){return`<div id="duel-row-${fe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${re}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${ie.map((ye,_e)=>{const $e=_e<ie.length-1?at(ye,ie[_e+1]):null,Me=!$e||$e==="#ff3333"||$e==="#cc2222",Ie=$e==="#00ff88"?"+2":$e==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${fe}" data-idx="${_e}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...ye,note:Le(ye,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${_e<ie.length-1?`<div class="duel-link duel-link-${fe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Me?"rgba(255,255,255,0.12)":$e};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Me?"none":`0 0 8px ${$e}`}">
              ${Ie?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${$e}">${Ie}</span>`:""}
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
      ${$(f,p[r+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(x,p[m+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const A=(ie,re)=>e.querySelectorAll(ie).forEach((fe,ye)=>{setTimeout(()=>{fe.style.opacity="1",fe.style.transform="translateY(0) scale(1)"},re+ye*90)});A(".duel-card-me",150),A(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ie,re)=>setTimeout(()=>{ie.style.opacity="1"},re*70)),900),setTimeout(()=>{const ie=e.querySelector("#pvp-vs");ie&&(ie.style.opacity="1",ie.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(re=>re.style.opacity="1")},1250);function L(ie,re,fe){const ye=document.getElementById(ie);if(!ye)return;const _e=performance.now(),$e=Me=>{const Ie=Math.min(1,(Me-_e)/fe);ye.textContent=Math.round(re*(1-Math.pow(1-Ie,3))),Ie<1?requestAnimationFrame($e):ye.textContent=re};requestAnimationFrame($e)}setTimeout(()=>{L("pvp-score-me",v,800),L("pvp-score-opp",_,800)},1500);const B=p.p1Team.MIL||[],G=p.p2Team.MIL||[],O=y(B)+h(B),U=y(G)+h(G),Z=O>=U?"p1":"p2";let Y=p.boostValue;Y==null&&(Y=ri(),p.boostValue=Y,p.boostOwner=Z,p.boostUsed=!1),xe=!0,setTimeout(()=>{const ie=e.querySelector("#duel-row-"+(S?"me":"opp")),re=e.querySelector("#duel-row-"+(S?"opp":"me")),fe=document.getElementById("pvp-score-me"),ye=document.getElementById("pvp-score-opp"),_e=S?fe:ye,$e=S?ye:fe;_e&&(_e.style.fontSize="80px",_e.style.color=S?"#FFD700":"#ff6b6b",_e.style.animation="duelPulse .5s ease"+(S?",duelGlow 1.5s ease infinite .5s":"")),$e&&($e.style.opacity="0.25"),setTimeout(()=>{ie&&(ie.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ie.style.zIndex="5"),setTimeout(()=>{const Me=document.getElementById("duel-shock");Me&&(Me.style.animation="shockwave .5s ease-out forwards"),re&&(re.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var qe;const Me=document.getElementById("pvp-duel-finale");if(!Me)return;const Ie=p.boostOwner===r?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Y+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Oe=r==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(S?"⚽ "+p[r+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[m+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ie+Oe,Me.style.transition="opacity .45s ease",Me.style.opacity="1",Me.style.pointerEvents="auto",(qe=document.getElementById("pvp-start-match"))==null||qe.addEventListener("click",async()=>{const He=Z;await ne({phase:He+"-attack",attacker:He,round:1,boostValue:Y,boostUsed:!1,boostOwner:He})})},600)},700)},2800)}function Ce(f,x,y,h,v){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const S=Array.from({length:10},(B,G)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${G%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][G%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};_.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${S}</div>
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
      ${f!=null&&f.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${f.map(B=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[B.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${B.portrait?`<img src="${B.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(B.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(_);let A=!1;const L=()=>{A||(A=!0,_.remove(),setTimeout(()=>v(),50))};_.addEventListener("click",L),setTimeout(L,3500)}function Fe(f,x,y){var Y,ie;const h=(p.gcDefs||[]).find(re=>{var fe;return re.name===f||((fe=re.name)==null?void 0:fe.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",S=(h==null?void 0:h.name)||f,$=(h==null?void 0:h.effect)||((Y=Re[f])==null?void 0:Y.desc)||"",A=h!=null&&h.image_url?`/icons/${h.image_url}`:null,L=((ie=Re[f])==null?void 0:ie.icon)||"⚡",G=x===r?"Vous":p[x+"Name"]||"Adversaire",O=document.createElement("div");O.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",O.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${_}66}50%{box-shadow:0 0 60px ${_}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${_};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${G} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${_};background:${v};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${S.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${S}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${L}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(O);let U=!1;const Z=()=>{U||(U=!0,O.remove(),setTimeout(()=>y&&y(),50))};O.addEventListener("click",Z),setTimeout(Z,3e3)}function De(f,x){var O,U,Z,Y;const h=(p["gcCardsFull_"+r]||[]).find(ie=>ie.id===f),v=h==null?void 0:h._gcDef,_={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",S={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",$=(v==null?void 0:v.name)||x,A=(v==null?void 0:v.effect)||((O=Re[x])==null?void 0:O.desc)||"Carte spéciale.",L=v!=null&&v.image_url?`/icons/${v.image_url}`:null,B=((U=Re[x])==null?void 0:U.icon)||"⚡",G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",G.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${S};background:${_};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${S}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${B}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${A}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(G),(Z=G.querySelector("#pvp-gc-back"))==null||Z.addEventListener("click",()=>G.remove()),(Y=G.querySelector("#pvp-gc-use"))==null||Y.addEventListener("click",()=>{G.remove(),R(f,x)})}function ke(){var h;const f=p[r+"Team"],x=Object.entries(f).flatMap(([v,_])=>(_||[]).filter(S=>!S.used).map(S=>({...S,_line:v})));if(!x.length)return;const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",y.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(v=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",S=Le(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${_};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${S}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(y),(h=y.querySelector("#bp-close"))==null||h.addEventListener("click",()=>y.remove()),y.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const _=v.dataset.cid,S=x.find(A=>A.cardId===_);if(!S)return;const $=(f[S._line]||[]).find(A=>A.cardId===_);$&&($.boost=($.boost||0)+p.boostValue),y.remove(),await ne({[r+"Team"]:f,boostUsed:!0})})})}function K(f=null){var U,Z;if(!(p.phase===r+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const y=p[r+"Team"],h=p["usedSubIds_"+r]||[],v=p.maxSubs||3;if(h.length>=v){g(`Maximum ${v} remplacements atteint`,"warning");return}const _=Object.entries(y).flatMap(([Y,ie])=>(ie||[]).filter(re=>re.used).map(re=>({...re,_line:Y}))),S=(p[r+"Subs"]||[]).filter(Y=>!h.includes(Y.cardId));if(!_.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!S.length){g("Aucun remplaçant disponible","warning");return}let $=Math.max(0,_.findIndex(Y=>Y.cardId===f));const A=((U=_[$])==null?void 0:U._line)||((Z=_[$])==null?void 0:Z.job);let L=Math.max(0,S.findIndex(Y=>Y.job===A)),B=!1;const G=document.createElement("div");G.id="pvp-sub-overlay",G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function O(){var $e,Me,Ie,Oe,qe,He;const Y=_[$],ie=S[L],re=Math.min(130,Math.round((window.innerWidth-90)/2)),fe=Math.round(re*1.35),ye=Be=>`background:rgba(255,255,255,0.12);border:none;color:${Be?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Be?"default":"pointer"};flex-shrink:0`;G.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ye(L===0)}" ${L===0?"disabled":""}>▲</button>
          <div>${ie?We({...ie,used:!1,boost:0},re,fe):"<div>—</div>"}</div>
          <button id="pin-down" style="${ye(L>=S.length-1)}" ${L>=S.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${L+1}/${S.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ye($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${Y?We({...Y,used:!1,boost:0},re,fe):"<div>—</div>"}</div>
          <button id="pout-down" style="${ye($>=_.length-1)}" ${$>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${_.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,($e=G.querySelector("#psub-close"))==null||$e.addEventListener("click",()=>G.remove()),(Me=G.querySelector("#pout-up"))==null||Me.addEventListener("click",()=>{$>0&&($--,O())}),(Ie=G.querySelector("#pout-down"))==null||Ie.addEventListener("click",()=>{$<_.length-1&&($++,O())}),(Oe=G.querySelector("#pin-up"))==null||Oe.addEventListener("click",()=>{L>0&&(L--,O())}),(qe=G.querySelector("#pin-down"))==null||qe.addEventListener("click",()=>{L<S.length-1&&(L++,O())});const _e=(Be,Ve,Ne,Ue)=>{const Ke=G.querySelector("#"+Be);if(!Ke)return;let Xe=0;Ke.addEventListener("touchstart",Ze=>{Xe=Ze.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",Ze=>{const Qe=Ze.changedTouches[0].clientY-Xe;if(Math.abs(Qe)<30)return;const nt=Ve();Qe<0&&nt<Ue-1?(Ne(nt+1),O()):Qe>0&&nt>0&&(Ne(nt-1),O())},{passive:!0})};_e("pin-panel",()=>L,Be=>L=Be,S.length),_e("pout-panel",()=>$,Be=>$=Be,_.length),(He=G.querySelector("#psub-confirm"))==null||He.addEventListener("click",async Be=>{if(Be.preventDefault(),Be.stopPropagation(),B)return;B=!0;const Ve=_[$],Ne=S[L];if(!Ve||!Ne)return;const Ue=Ve._line,Ke=(y[Ue]||[]).findIndex(Qe=>Qe.cardId===Ve.cardId);if(Ke===-1){g("Erreur : joueur introuvable","error"),G.remove();return}const Xe={...Ne,_line:Ue,position:Ve.position,used:!1,boost:0};y[Ue].splice(Ke,1,Xe);const Ze=[...h,Ne.cardId];G.remove(),ee(Ve,Ne,async()=>{await ne({[r+"Team"]:y,[m+"Team"]:p[m+"Team"],["usedSubIds_"+r]:Ze})})})}document.body.appendChild(G),O()}function ee(f,x,y){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const _=(A,L,B)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${L};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${B}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[A.job]||"#555"};border:3px solid ${L};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(A)?`<img src="${Pe(A)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(A.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${_(x,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${_(f,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let S=!1;const $=()=>{S||(S=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",$),setTimeout($,2200)}function ge(){var x;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",f.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[m+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(p[m+"Team"],p[m+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(f),(x=f.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>f.remove())}function H(){var h;const f=p.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const y=v=>{var S,$,A;if(v.type==="duel"){const L=v.isGoal,B=v.homeScored&&r==="p1"||!v.homeScored&&L&&r==="p2",G=v.homeScored?"#FFD700":L?"#ff6b6b":"rgba(255,255,255,0.3)",O=L?B?"⚽ BUT !":"⚽ BUT adversaire !":(S=v.homePlayers)!=null&&S.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${L?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${G};margin-bottom:4px">
          <div style="font-size:9px;color:${G};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${O}</div>
          ${($=v.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${ot(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
          ${(A=v.aiPlayers)!=null&&A.length?`<div style="opacity:0.7">${ot(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
        </div>`}return v.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${v.outPlayer?We({...v.outPlayer,used:!0,_line:v.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${v.inPlayer?We({...v.inPlayer,_line:v.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${v.type==="goal"?"#FFD700":v.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${v.text||""}</div>
      </div>`};x.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${f.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...f].reverse().map(y).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>x.remove())}async function X(){if(p.phase!==r+"-attack")return;const f=r==="p1"?"p2":"p1",x=(p.round||0)+1,y=[...p.log||[]];y.push({type:"info",text:`⏭️ ${p[r+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Ae(p),v=he(f),_=h||!v?"finished":f+"-attack";await ne({["selected_"+r]:[],modifiers:{...p.modifiers,[r]:{}},pendingAttack:null,phase:_,attacker:f,round:x,log:y}),_==="finished"&&await D(p)}async function V(){const f=p[r+"Team"],x=!["GK","DEF","MIL","ATT"].some(_=>(p[m+"Team"][_]||[]).some(S=>!S.used)),y=(p["selected_"+r]||[]).map(_=>{const S=(f[_._role]||[]).find(O=>O.cardId===_.cardId)||_,$=x&&["GK","DEF"].includes(_._role),A=f[_._role]||[],L=A.findIndex(O=>O.cardId===_.cardId),B=lt(A.length),G=L>=0?B[L]:S._col??1;return{...S,_line:_._role,_col:G,...$?{note_a:Math.max(1,Number(S.note_a)||0)}:{}}});if(!y.length)return;const h=Ot(y,p.modifiers[r]||{});P(r,y.map(_=>_.cardId)),y.forEach(_=>{const S=(f[_._role]||[]).find($=>$.cardId===_.cardId);S&&(S.used=!0)}),p["selected_"+r]=[],me();const v=[...p.log||[]];if(x){const _=(p[r+"Score"]||0)+1,S=y.map(G=>({name:G.name,note:Le(G,G._line||"ATT"),portrait:Pe(G),job:G.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:S,homeTotal:h.total,aiTotal:0});const $=(p.round||0)+1,A=r==="p1"?"p2":"p1",L={...p,[r+"Team"]:f,[r+"Score"]:_},B=Ae(L);F.add($),Ce(S,_,p[m+"Score"]||0,!0,async()=>{await ne({[r+"Team"]:f,[r+"Score"]:_,["selected_"+r]:[],modifiers:{...p.modifiers,[r]:{}},pendingAttack:null,phase:B?"finished":A+"-attack",attacker:A,round:$,log:v}),B&&await D({...p,[r+"Score"]:_})});return}v.push({type:"pending",text:`⚔️ ${p[r+"Name"]} attaque (${h.total})`}),await ne({[r+"Team"]:f,[m+"Team"]:p[m+"Team"],pendingAttack:{...h,players:y,side:r},["selected_"+r]:[],modifiers:{...p.modifiers,[r]:{}},phase:m+"-defense",log:v})}async function ae(){const f=p[r+"Team"],x=(p["selected_"+r]||[]).map(Y=>{const ie=(f[Y._role]||[]).find($e=>$e.cardId===Y.cardId)||Y,re=f[Y._role]||[],fe=re.findIndex($e=>$e.cardId===Y.cardId),ye=lt(re.length),_e=fe>=0?ye[fe]:ie._col??1;return{...ie,_line:Y._role,_col:_e}}),y=Ht(x,p.modifiers[r]||{});P(r,x.map(Y=>Y.cardId)),x.forEach(Y=>{const ie=(f[Y._role]||[]).find(re=>re.cardId===Y.cardId);ie&&(ie.used=!0)}),p["selected_"+r]=[],me();const h=Ut(p.pendingAttack.total,y.total,p.modifiers[r]||{}),v=p.pendingAttack.side,_=h==="attack"||(h==null?void 0:h.goal),S=v==="p1"?"p2":"p1",$=(p.round||0)+1,A=(p.pendingAttack.players||[]).map(Y=>({name:Y.name,note:Le(Y,Y._line||"ATT"),portrait:Pe(Y),job:Y.job})),L=[...p.log||[]];L.push({type:"duel",isGoal:_,homeScored:_&&v===r,text:_?`⚽ BUT de ${p[v+"Name"]} ! (${p.pendingAttack.total} vs ${y.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${y.total})`,homePlayers:A,aiPlayers:x.map(Y=>({name:Y.name,note:Le(Y,Y._line||"DEF"),portrait:Pe(Y),job:Y.job})),homeTotal:p.pendingAttack.total,aiTotal:y.total});const B=_?(p[v+"Score"]||0)+1:p[v+"Score"]||0,G={...p,[r+"Team"]:f,[v+"Score"]:B},O=Ae(G),U=O?"finished":S+"-attack",Z=async()=>{await ne({[r+"Team"]:f,[m+"Team"]:p[m+"Team"],[v+"Score"]:B,["selected_"+r]:[],modifiers:{...p.modifiers,[r]:{}},pendingAttack:null,phase:U,attacker:S,round:$,log:L}),(U==="finished"||O)&&await D({...p,[v+"Score"]:B})};if(_){const Y=v===r,ie=Y?B:p[r+"Score"]||0,re=Y?p[m+"Score"]||0:B;F.add($),Ce(A,ie,re,Y,Z)}else await Z()}function ve(f){return["MIL","ATT"].some(x=>(f[x]||[]).some(y=>!y.used))}function Se(f){return["GK","DEF","MIL","ATT"].some(x=>(f[x]||[]).some(y=>!y.used))}function ze(f){return Se(f)&&!ve(f)}function he(f){const x=p[f+"Team"],y=p[(f==="p1"?"p2":"p1")+"Team"];return!!(ve(x)||!Se(y)&&ze(x))}function Ae(f){const x=["MIL","ATT"].some(L=>(f.p1Team[L]||[]).some(B=>!B.used)),y=["MIL","ATT"].some(L=>(f.p2Team[L]||[]).some(B=>!B.used)),h=Se(f.p1Team),v=Se(f.p2Team);return!x&&!(!v&&h)&&(!y&&!(!h&&v))}function j(f){const x=f.p1Score||0,y=f.p2Score||0;return x===y?null:x>y?T.home_id:T.away_id}async function D(f){try{const x=j(f),y=x?T.home_id===x?T.away_id:T.home_id:null,h=f.p1Score||0,v=f.p2Score||0;await E.from("matches").update({status:"finished",winner_id:x,home_score:h,away_score:v}).eq("id",i);const{data:_}=await E.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(_){await E.from("mini_league_matches").update({home_score:h,away_score:v,status:"finished"}).eq("id",_.id);const{data:S}=await E.from("mini_league_matches").select("id, status").eq("league_id",_.league_id).eq("matchday",_.matchday);if((S||[]).every(A=>A.status==="finished"||A.status==="bye")){const{data:A}=await E.from("mini_leagues").select("current_day,total_days").eq("id",_.league_id).single();if(A){const L=(A.current_day||0)+1,B=L>(A.total_days||0);await E.from("mini_leagues").update({current_day:B?A.total_days:L,status:B?"finished":"active"}).eq("id",_.league_id)}}}x&&y&&ki(x,y).catch(()=>{})}catch(x){console.error("[ML] finishMatch:",x)}}function w(){var v;if(z&&document.getElementById("pvp-end-overlay"))return;z=!0;const f=p[r+"Score"],x=p[m+"Score"],y=f>x,h=f===x;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${y?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${y?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${f} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{E.removeChannel(se)}catch{}Je(e),c("mini-league",o?{openLeagueId:o}:{})})}me()}const sr="/",dr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function lr(e,t,i){let a=0;const l=document.createElement("div");l.id="tutorial-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const d=()=>{var r,m,b;const c=t[a],g=a===t.length-1,o=Math.round((a+1)/t.length*100);l.innerHTML=`
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
            ${g?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${c.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${g?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,l.querySelectorAll("ul,ol").forEach(u=>{u.style.paddingLeft="20px",u.style.marginTop="6px",u.style.marginBottom="6px"}),l.querySelectorAll("li").forEach(u=>{u.style.marginBottom="4px"}),l.querySelectorAll("p").forEach(u=>{u.style.marginBottom="8px"}),(r=l.querySelector("#tuto-prev"))==null||r.addEventListener("click",()=>{a--,d()}),(m=l.querySelector("#tuto-next"))==null||m.addEventListener("click",()=>{g?s():(a++,d())}),(b=l.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&s()})},s=async()=>{l.remove(),e!=null&&e.id&&await E.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(l),d()}async function cr(e,t,i){if(!e||e.tutorial_done)return;let a=[];const{data:l,error:d}=await E.rpc("get_tutorial_steps");if(!d&&(l==null?void 0:l.length)>0)a=l,console.log(`[Tutorial] RPC OK → ${a.length} étapes`);else{const{data:c,error:g}=await E.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!g&&(c==null?void 0:c.length)>0?(a=c,console.log(`[Tutorial] Direct OK → ${a.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${d==null?void 0:d.message}, Direct: ${g==null?void 0:g.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const s=a.length>0?a.map(c=>({emoji:c.emoji,title:c.title,color:c.color,content:c.content,image_url:c.image_url||null})):dr;lr(e,s,()=>t("boosters"))}const pr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}function Hi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Jt(e,t){const a=t?pr[t]||"#bbb":"#d0d0d0",l=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${a};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${l}</div>`}function Ui(e){const i=Qt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Ki(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function ur(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Ai(e,t)}async function Ai(e,t){const{state:i,toast:a}=t,{data:l}=await E.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:d}=await E.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  </div>`;let g="buy";const o=()=>{var n,p,z,I,q,N,C;return{name:(((n=document.getElementById("flt-name"))==null?void 0:n.value)||"").toLowerCase().trim(),club:(((p=document.getElementById("flt-club"))==null?void 0:p.value)||"").toLowerCase().trim(),country:(((z=document.getElementById("flt-country"))==null?void 0:z.value)||"").toLowerCase().trim(),job:((I=document.getElementById("flt-job"))==null?void 0:I.value)||"",rarity:((q=document.getElementById("flt-rarity"))==null?void 0:q.value)||"",note1:parseInt((N=document.getElementById("flt-note1"))==null?void 0:N.value)||0,note2:parseInt((C=document.getElementById("flt-note2"))==null?void 0:C.value)||0}};function r(n){const p=o();return n.filter(z=>{var se,ne,pe;const I=(se=z.card)==null?void 0:se.player;if(!I)return!1;const q=`${I.firstname} ${I.surname_encoded}`.toLowerCase(),N=(((ne=I.clubs)==null?void 0:ne.encoded_name)||"").toLowerCase(),C=(I.country_code||"").toLowerCase(),F=((pe=z.card)==null?void 0:pe.evolution_bonus)||0,M=Tt(I,I.job,F),W=I.job2?Tt(I,I.job2,F):0;return!(p.name&&!q.includes(p.name)||p.club&&!N.includes(p.club)||p.country&&!C.includes(p.country)||p.job&&I.job!==p.job||p.rarity&&I.rarity!==p.rarity||p.note1&&M<p.note1||p.note2&&W<p.note2)})}function m(n){var C,F,M,W;const p=(C=n.card)==null?void 0:C.player;if(!p)return"";const z=((F=n.card)==null?void 0:F.evolution_bonus)||0,I=Tt(p,p.job,z),q=p.job2?Tt(p,p.job2,z):0,N=(i.profile.credits||0)>=n.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Hi(p.rarity)}
      ${Jt(I,p.job)}
      ${Jt(q,p.job2||null)}
      ${Ui(p.country_code)}
      ${Ki((M=p.clubs)==null?void 0:M.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((W=n.seller)==null?void 0:W.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${n.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${n.id}" ${N?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${N?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function b(n){var C,F,M,W;const p=(C=n.card)==null?void 0:C.player;if(!p)return"";const z=((F=n.card)==null?void 0:F.evolution_bonus)||0,I=Tt(p,p.job,z),q=p.job2?Tt(p,p.job2,z):0,N=n.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${N?"opacity:0.7":""}">
      ${Hi(p.rarity)}
      ${Jt(I,p.job)}
      ${Jt(q,p.job2||null)}
      ${Ui(p.country_code)}
      ${Ki((M=p.clubs)==null?void 0:M.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:${N?"#22c55e":"#999"};margin-top:1px">
          ${N?`✅ Vendu à ${((W=n.buyer)==null?void 0:W.pseudo)||"—"} · ${n.sold_at?new Date(n.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(n.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${n.price.toLocaleString("fr")}</div>
        ${N?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${n.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function u(){const n=document.getElementById("mkt-content"),p=document.getElementById("mkt-filters");if(n){if(p.style.display=g==="buy"?"flex":"none",g==="buy"){const z=r(s);n.innerHTML=z.length?z.map(m).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const z=c.filter(q=>q.status==="active").sort((q,N)=>new Date(N.listed_at)-new Date(q.listed_at)),I=c.filter(q=>q.status==="sold").sort((q,N)=>new Date(N.sold_at||N.listed_at)-new Date(q.sold_at||q.listed_at));n.innerHTML=(z.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${z.length})</div>`+z.map(b).join(""):"")+(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${I.length})</div>`+I.map(b).join(""):"")+(!z.length&&!I.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}n.querySelectorAll("[data-buy]").forEach(z=>z.addEventListener("click",()=>fr(z.dataset.buy,s,e,t))),n.querySelectorAll("[data-cancel]").forEach(z=>z.addEventListener("click",()=>mr(z.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(n=>{n.addEventListener("click",()=>{g=n.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(p=>{const z=p===n;p.style.background=z?"var(--green)":"#fff",p.style.color=z?"#fff":"var(--gray-600)",p.style.borderColor=z?"var(--green)":"var(--gray-200)"}),u()})});let T;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(n=>{var p;(p=document.getElementById(n))==null||p.addEventListener("input",()=>{clearTimeout(T),T=setTimeout(u,250)})}),u()}async function fr(e,t,i,a){const{state:l,toast:d,refreshProfile:s}=a,c=t.find(r=>r.id===e);if(!c)return;const g=c.price;if((l.profile.credits||0)<g){d("Crédits insuffisants","error");return}gr(c,async()=>{const{error:r}=await E.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:l.profile.id});if(r){d("Erreur achat : "+r.message,"error");return}await s();const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),d("✅ Carte achetée !","success"),await Ai(i,a)})}function gr(e,t){var s;const i=(s=e.card)==null?void 0:s.player,a=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",l.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${a} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(l);const d=c=>{l.remove(),c&&t()};l.querySelector("#buy-cancel").addEventListener("click",()=>d(!1)),l.querySelector("#buy-ok").addEventListener("click",()=>d(!0)),l.addEventListener("click",c=>{c.target===l&&d(!1)})}async function mr(e,t,i){const{toast:a}=i,{data:l}=await E.from("market_listings").select("card_id").eq("id",e).single();if(await E.from("market_listings").update({status:"cancelled"}).eq("id",e),l!=null&&l.card_id){const{count:d}=await E.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",l.card_id).eq("status","active");d||await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",l.card_id)}a("Annonce retirée","success"),Ai(t,i)}async function xr(e,{state:t,navigate:i,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function yr(e,{state:t,navigate:i,toast:a}){const l=t.profile;if(!l)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${l.id},away_id.eq.${l.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},c=(d||[]).filter(r=>r.status==="finished"),g=(d||[]).filter(r=>r.status==="in_progress");function o(r){const m=r.home_id===l.id;m?r.home_score:r.away_score,m?r.away_score:r.home_score;const b=r.winner_id===l.id,u=r.home_score===r.away_score&&r.status==="finished",T=r.status!=="finished"?"…":u?"N":b?"V":"D",n=r.status!=="finished"||u?"#888":b?"#1A6B3C":"#c0392b";let p=s[r.mode]||r.mode;r.away_id===null&&!p.startsWith("IA")&&(p="IA");const I=r.home_id===l.id?r.away:r.home;let q;r.away_id===null?q=p:I?q=`${I.club_name||I.pseudo} (${I.pseudo})`:q="Adversaire";let N="";r.status==="in_progress"&&Date.now()-new Date(r.created_at).getTime()>3600*1e3&&(N=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const C=new Date(r.created_at),F=C.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+C.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),M=r.status==="finished"?`${r.home_score} - ${r.away_score}`:`${r.home_score||0} - ${r.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${q}${N}</div>
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
      ${g.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${g.map(o).join("")}
        </div>`:""}

      ${c.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${c.map(o).join("")}
        </div>`:""}

      ${(d||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Ao(zo);const Ge={user:null,profile:null,page:"home",params:{}};function At(e,t="info",i=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},i))}function br(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function bi(){document.getElementById("modal-overlay").classList.add("hidden")}async function qt(){if(!Ge.user)return;const{data:e}=await E.from("users").select("*").eq("id",Ge.user.id).single();e&&(Ge.profile=e)}function Dt(e,t={}){Ge.page=e,Ge.params=t,Eo()}async function Eo(){var a,l,d,s;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===Ge.page)});const t=document.getElementById("nav-credits");t&&Ge.profile&&(t.textContent=`💰 ${(Ge.profile.credits||0).toLocaleString("fr")}`);const i={state:Ge,navigate:Dt,toast:At,openModal:br,closeModal:bi,refreshProfile:qt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ge.page){case"home":await ji(e,i);break;case"collection":await Jo(e,i);break;case"decks":await fi(e,i);break;case"boosters":await pn(e,i);break;case"match":{const c=Ge.params&&Ge.params.matchMode||"vs_ai_easy";c==="random"?await vo(e,i):c==="friend"?await Hn(e,i,(a=Ge.params)==null?void 0:a.friendId,(l=Ge.params)==null?void 0:l.friendName):c==="mini-league"?await Oi(e,i,(d=Ge.params)==null?void 0:d.mlMatchId,(s=Ge.params)==null?void 0:s.leagueId):await $n(e,i);break}case"market":await ur(e,i);break;case"rankings":await xr(e,i);break;case"matches":await yr(e,i);break;case"friends":await Bo(e,i);break;case"mini-league":await Vn(e,i);break;case"match-mini-league":{const c=Ge.params||{};await Oi(e,i,c.mlMatchId,c.leagueId);break}default:await ji(e,i)}}function hr(){var a;const e=document.getElementById("app"),t=Ge.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(l=>{l.addEventListener("click",d=>{d.preventDefault(),Dt(l.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Dt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Dt("boosters")),(a=document.getElementById("journal-btn"))==null||a.addEventListener("click",()=>vr())}async function vr(){const{data:e}=await E.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(a=>{const l=new Date(a.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",a=>{a.target===t&&t.remove()})}async function wr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&bi()}),document.getElementById("modal-close").addEventListener("click",bi);const{data:{session:e}}=await E.auth.getSession();if(!e){Vi(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At});return}Ge.user=e.user,await qt(),Vi();try{const{data:i}=await E.from("formation_links_overrides").select("formation, links"),a={};(i||[]).forEach(l=>{a[l.formation]=l.links}),So(a)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Ge.profile){Io(document.getElementById("app"),{state:Ge,navigate:async()=>{await qt(),pi()},toast:At,refreshProfile:qt});return}const t=Array.isArray(Ge.profile.pending_boosters)?Ge.profile.pending_boosters:[];if(!Ge.profile.onboarding_done&&t.length>0){hn(document.getElementById("app"),{state:Ge,navigate:()=>pi(),toast:At,refreshProfile:qt});return}pi(),setTimeout(()=>cr(Ge.profile,Dt,At),800),E.auth.onAuthStateChange(async(i,a)=>{i==="SIGNED_OUT"&&(Ge.user=null,Ge.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At}))})}function _r(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function di(){const e=document.getElementById("app");e&&(e.style.height=_r()+"px")}window.addEventListener("resize",di);window.addEventListener("orientationchange",()=>setTimeout(di,150));window.visualViewport&&window.visualViewport.addEventListener("resize",di);function pi(){const e=()=>{var i;(i=Ge.user)!=null&&i.id&&E.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ge.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",di(),hr(),Eo()}function Vi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function To(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}wr().catch(e=>{console.error("Échec du démarrage:",e),To()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&To("Le serveur met trop de temps à répondre.")},12e3);
