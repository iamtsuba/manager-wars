const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-Dnttc-Cp.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as E,F as hi,h as Pt,j as Wi,l as at,i as So,k as Lo,b as Io}from"./formation-links-Dnttc-Cp.js";const Mo="/";function Ii(e,{navigate:t,toast:i}){let s="login";const l=()=>{var a,p,f,n,o,m;const d=s==="login";e.innerHTML=`
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
        <img src="${Mo}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{s="login",l()}),(p=document.getElementById("tab-reg-btn"))==null||p.addEventListener("click",()=>{s="register",l()}),d?((f=document.getElementById("login-password"))==null||f.addEventListener("keydown",b=>{var g;b.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(n=document.getElementById("login-btn"))==null||n.addEventListener("click",async()=>{const b=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,T=document.getElementById("login-error");if(T.textContent="",!b||!g){T.textContent="Remplissez tous les champs.";return}const r=document.getElementById("login-btn");r.textContent="⏳ Connexion…",r.disabled=!0;const{error:c}=await E.auth.signInWithPassword({email:b,password:g});if(r.textContent="⚽ Se connecter",r.disabled=!1,c){T.textContent=c.message.includes("Invalid")?"Email ou mot de passe incorrect.":c.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",b=>{var g;b.key==="Enter"&&((g=document.getElementById("reg-btn"))==null||g.click())}),(m=document.getElementById("reg-btn"))==null||m.addEventListener("click",async()=>{const b=document.getElementById("reg-email").value.trim(),g=document.getElementById("reg-password").value,T=document.getElementById("reg-confirm").value,r=document.getElementById("reg-error");if(r.textContent="",!b||!g||!T){r.textContent="Remplissez tous les champs.";return}if(g.length<6){r.textContent="Mot de passe trop court (min. 6 caractères).";return}if(g!==T){r.textContent="Les mots de passe ne correspondent pas.";return}const c=document.getElementById("reg-btn");c.textContent="⏳ Création…",c.disabled=!0;const{error:I}=await E.auth.signUp({email:b,password:g});if(c.textContent="🚀 Créer mon compte",c.disabled=!1,I){r.textContent=I.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),s="login",l(),setTimeout(()=>{const L=document.getElementById("login-email");L&&(L.value=b)},50)}))};l()}function jo(e,{state:t,navigate:i,toast:s,refreshProfile:l}){let d="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function p(){var T;const n=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),m=((T=document.getElementById("setup-club"))==null?void 0:T.value)||"MW",b=m.trim().split(" ").filter(Boolean),g=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():m.slice(0,2).toUpperCase();n&&(n.style.background=a,n.style.borderColor=d),o&&(o.textContent=g,o.style.color=d)}document.getElementById("color1").addEventListener("input",n=>{d=n.target.value,document.getElementById("swatch1").style.background=d,p()}),document.getElementById("color2").addEventListener("input",n=>{a=n.target.value,document.getElementById("swatch2").style.background=a,p()});function f(n){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${n}`).classList.add("active"),document.getElementById("step-num").textContent=n,document.getElementById("progress-fill").style.width=`${Math.round(n/3*100)}%`,n===3&&p()}document.getElementById("step1-next").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",n.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:m}=await E.from("users").select("id").eq("pseudo",n).maybeSingle();if(m){o.textContent="Ce pseudo est déjà pris.";return}f(2)}),document.getElementById("step2-back").addEventListener("click",()=>f(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const n=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",n.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:m}=await E.from("users").select("id").eq("club_name",n).maybeSingle();if(m){o.textContent="Ce nom de club est déjà pris.";return}f(3)}),document.getElementById("step3-back").addEventListener("click",()=>f(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),m=document.getElementById("step3-error"),b=document.getElementById("step3-finish");m.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:g}=await E.from("users").insert({id:t.user.id,pseudo:n,club_name:o,club_color1:d,club_color2:a,credits:1e4});if(g)throw g;await Co(t.user.id),await l(),s(`Bienvenue ${n} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){m.textContent=g.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Co(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await E.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const qo="modulepreload",Bo=function(e){return"/"+e},Mi={},ti=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),p=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));l=Promise.allSettled(i.map(f=>{if(f=Bo(f),f in Mi)return;Mi[f]=!0;const n=f.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${o}`))return;const m=document.createElement("link");if(m.rel=n?"stylesheet":qo,n||(m.as="script"),m.crossOrigin="",m.href=f,p&&m.setAttribute("nonce",p),document.head.appendChild(m),n)return new Promise((b,g)=>{m.addEventListener("load",b),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${f}`)))})}))}function d(a){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=a,window.dispatchEvent(p),!p.defaultPrevented)throw a}return l.then(a=>{for(const p of a||[])p.status==="rejected"&&d(p.reason);return t().catch(d)})},Dt="#1A6B3C",Gt="#cc2222",Fo="#D4A017",ji="#888";async function Do(e,t){const{state:i,toast:s}=t;e.innerHTML=`
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
    </div>`,await Ji(i,s,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Po(i,s)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Xi(i,s,null,t))}async function Ji(e,t,i={}){const{navigate:s}=i,l=e.user.id,{data:d,error:a}=await E.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${l},addressee_id.eq.${l}`),{count:p}=await E.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",l).eq("status","pending"),f=document.getElementById("pending-badge");f&&(p>0?(f.style.display="flex",f.textContent=p):f.style.display="none");const n=document.getElementById("friends-list");if(!n)return;if(a){console.error("[Friends] Erreur:",a),n.innerHTML=`<div style="color:${Gt};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const o=(d||[]).map(g=>g.requester_id===l?g.addressee_id:g.requester_id);let m={};if(o.length){const{data:g}=await E.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(g||[]).forEach(T=>{m[T.id]=T})}const b=(d||[]).map(g=>({friendshipId:g.id,friend:m[g.requester_id===l?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!b.length){n.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}n.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:g,friend:T})=>Go(T,g)).join("")}
    </div>`,n.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>No(e,g.dataset.stats,g.dataset.friendName))}),n.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",()=>{const T=g.dataset.friendId,r=g.dataset.friendName;console.log("[Friends] clic match",{fid:T,fname:r,hasNavigate:typeof s}),typeof s=="function"?s("match",{matchMode:"friend",friendId:T,friendName:r}):t("Erreur navigation","error")})})}function Go(e,t){const i=e.club_name||e.pseudo||"?",s=e.pseudo||"",l=(s||i).slice(0,2).toUpperCase(),d=e.club_color2||Dt,a=e.club_color1||"#ffffff",p=e.last_seen_at?new Date(e.last_seen_at):null,f=p&&Date.now()-p.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${d};border:2.5px solid ${a};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${a}">
          ${l}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${f?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${s}</div>
        <div style="font-size:11px;color:${f?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${f?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Fo};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Po(e,t){const i=vi();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Gt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${wi()}`,document.body.appendChild(i);const s=i.querySelector("#friend-pseudo-input"),l=i.querySelector("#add-friend-error"),d=()=>i.remove();s.focus(),i.querySelector("#add-cancel").addEventListener("click",d),i.addEventListener("click",a=>{a.target===i&&d()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=s.value.trim();if(!a){l.textContent="Entre un pseudo";return}l.textContent="";const{data:p}=await E.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!p){l.textContent="Utilisateur introuvable";return}if(p.id===e.user.id){l.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:f}=await E.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${p.id}),and(requester_id.eq.${p.id},addressee_id.eq.${e.user.id})`).single();if(f){const o=f.status==="accepted"?"Vous êtes déjà amis !":f.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";l.textContent=o;return}const{error:n}=await E.from("friendships").insert({requester_id:e.user.id,addressee_id:p.id,status:"pending"});if(n){l.textContent="Erreur : "+n.message;return}d(),t(`✅ Demande envoyée à ${p.pseudo} !`,"success")})}async function Xi(e,t,i=null,s={}){const l=e.user.id,{data:d}=await E.from("friendships").select("id, requester_id").eq("addressee_id",l).eq("status","pending").order("created_at",{ascending:!1}),a=(d||[]).map(b=>b.requester_id);let p={};if(a.length){const{data:b}=await E.from("users").select("id, pseudo, club_name").in("id",a);(b||[]).forEach(g=>{p[g.id]=g})}const f=(d||[]).map(b=>({...b,requester:p[b.requester_id]||{pseudo:"?"}})),n=vi(),o=f||[];n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(b=>{var g,T,r;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=b.requester)==null?void 0:g.club_name)||((T=b.requester)==null?void 0:T.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((r=b.requester)==null?void 0:r.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Dt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Gt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${wi()}`,document.body.appendChild(n);const m=()=>n.remove();n.querySelector("#pending-close").addEventListener("click",m),n.addEventListener("click",b=>{b.target===n&&m()}),n.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:g}=await E.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(g){t("Erreur : "+g.message,"error");return}b.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ji(e,t,s),i&&i()})}),n.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await E.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function No(e,t,i){const s=e.user.id,[l,d]=[s,t].sort(),a=s===l,{data:p}=await E.from("friend_match_stats").select("*").eq("player1_id",l).eq("player2_id",d).single(),f=e.profile.club_name||e.profile.pseudo||"Moi",n=p||{},o=a?n.wins_p1||0:n.wins_p2||0,m=a?n.wins_p2||0:n.wins_p1||0,b=n.draws||0,g=a?n.goals_p1||0:n.goals_p2||0,T=a?n.goals_p2||0:n.goals_p1||0,r=a?n.gc_used_p1||0:n.gc_used_p2||0,c=a?n.gc_used_p2||0:n.gc_used_p1||0,I=n.matches_total||0,L=(H,D,G,M=Dt,U=Gt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${M}">${D}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${H}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${U}">${G}</div>
    </div>`,q=vi();q.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${I===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${L("Victoires",o,m)}
        ${L("Nuls",b,b,ji,ji)}
        ${L("Défaites",m,o)}
        ${L("Buts marqués",g,T)}
        ${L("Buts encaissés",T,g,Gt,Dt)}
        ${L("GC utilisés ⚡",r,c,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${I} match${I>1?"s":""} joué${I>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${wi()}`,document.body.appendChild(q),q.querySelector("#stats-close").addEventListener("click",()=>q.remove()),q.addEventListener("click",H=>{H.target===q&&q.remove()})}function vi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function wi(){return`
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
        background:${Dt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Zi({player1Id:e,player2Id:t,score1:i,score2:s,gc1:l,gc2:d}){const[a,p]=[e,t].sort(),f=e!==a,n=f?s:i,o=f?i:s,m=f?d:l,b=f?l:d,g=n>o?1:0,T=o>n?1:0,r=n===o?1:0,{data:c}=await E.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",p).single();c?await E.from("friend_match_stats").update({wins_p1:c.wins_p1+g,wins_p2:c.wins_p2+T,draws:c.draws+r,goals_p1:c.goals_p1+n,goals_p2:c.goals_p2+o,gc_used_p1:c.gc_used_p1+m,gc_used_p2:c.gc_used_p2+b,matches_total:c.matches_total+1}).eq("player1_id",a).eq("player2_id",p):await E.from("friend_match_stats").insert({player1_id:a,player2_id:p,wins_p1:g,wins_p2:T,draws:r,goals_p1:n,goals_p2:o,gc_used_p1:m,gc_used_p2:b,matches_total:1})}const Ro="2026.07.04-1634";async function Ci(e,{state:t,navigate:i,toast:s}){var d,a;const l=t.profile;l&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Ro}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(p=>{p.addEventListener("click",f=>{f.preventDefault(),i(p.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(p=>{p.addEventListener("click",()=>{p.classList.add("tapped"),setTimeout(()=>p.classList.remove("tapped"),200);const f=p.dataset.action;if(f==="match-ai"){Ko(i);return}if(f==="match-random"){i("match",{matchMode:"random"});return}if(f==="match-friend"){i("friends");return}if(f==="mini-league"){i("mini-league");return}if(f==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}s("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var H,D,G,M,U,oe;const p=((H=window.visualViewport)==null?void 0:H.height)||window.innerHeight,f=((D=document.querySelector(".top-nav"))==null?void 0:D.offsetHeight)||56,n=((G=document.querySelector(".bottom-nav"))==null?void 0:G.offsetHeight)||60,o=((M=e.querySelector(".hero-compact"))==null?void 0:M.offsetHeight)||52,m=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const b=((oe=(U=e.querySelector("#logout-btn"))==null?void 0:U.closest("div"))==null?void 0:oe.offsetHeight)||44,g=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((de,N)=>{var W;return de+(((W=document.getElementById(N))==null?void 0:W.offsetHeight)||0)},0),T=14*5,r=p-f-n-o-b-g-T,c=Math.max(80,Math.round(r*.28)),I=Math.max(160,Math.round(r*.72)),L=Math.floor((I-10)/2);m&&(m.style.minHeight=m.style.maxHeight=c+"px"),e.querySelectorAll(".play-grid .play-card").forEach(de=>{de.style.minHeight=de.style.height=L+"px"});const q=Math.round(L*.55);e.querySelectorAll(".play-card .play-icon").forEach(de=>{de.style.height=q+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),window.location.reload()}),eo(t,s),Uo(t,s,i),Qi(t,s,i))}async function Qi(e,t,i){const s=document.getElementById("ongoing-match-banner");if(!s)return;const l=e.profile.id,{data:d}=await E.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${l},away_id.eq.${l}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){s.innerHTML="";return}const a=d.map(f=>f.home_id===l?f.away_id:f.home_id).filter(Boolean);let p={};if(a.length){const{data:f}=await E.from("users").select("id, pseudo, club_name").in("id",a);(f||[]).forEach(n=>{p[n.id]=n.club_name||n.pseudo})}s.innerHTML=d.map(f=>{const n=f.home_id===l?f.away_id:f.home_id,o=p[n]||"Adversaire",m=f.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${m?"🏆 Mini League":f.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${f.id}" data-mini="${m?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${f.id}" data-opp="${n}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),s.querySelectorAll("[data-resume]").forEach(f=>{f.addEventListener("click",async()=>{const n=document.getElementById("page-content")||document.getElementById("app");if(f.dataset.mini==="1"){const{data:o}=await E.from("mini_league_matches").select("id, league_id").eq("match_id",f.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await ti(async()=>{const{resumePvpMatch:m}=await Promise.resolve().then(()=>Kn);return{resumePvpMatch:m}},void 0);o(n,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},f.dataset.resume)}})}),s.querySelectorAll("[data-abandon]").forEach(f=>{f.addEventListener("click",()=>{Ho(async()=>{await Oo(f.dataset.abandon,f.dataset.opp,l),t("Match abandonné (défaite 3-0)","info"),Qi(e,t,i)})})})}async function Oo(e,t,i){const{data:s}=await E.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!s)return;const l=s.home_id===i,d=l?0:3,a=l?3:0,p=s.game_state||{};p.p1Score=d,p.p2Score=a,p.phase="finished",p.forfeit=!0,await E.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:a,game_state:p}).eq("id",e)}function Ho(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Uo(e,t,i){var p,f,n,o;const s=document.getElementById("match-invite-banner");if(!s)return;const{data:l}=await E.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){s.innerHTML="";return}const d=((p=l.inviter)==null?void 0:p.club_name)||((f=l.inviter)==null?void 0:f.pseudo)||"?",a=l.inviter_id;s.innerHTML=`
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
    </div>`,(n=document.getElementById("match-inv-accept"))==null||n.addEventListener("click",()=>{s.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:d})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await E.from("friend_match_invites").update({status:"declined"}).eq("id",l.id),s.innerHTML="",t("Invitation refusée","info")})}async function eo(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:s,error:l}=await E.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(l||!(s!=null&&s.length)){i.innerHTML="";return}const d=s.length,a=s.slice(0,2).map(f=>{var n;return((n=f.requester)==null?void 0:n.pseudo)||"?"}).join(", "),p=d>2?` +${d-2}`:"";i.innerHTML=`
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
          ${a}${p}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Xi(e,t,()=>eo(e,t))})}function Ko(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const s=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",s),i.addEventListener("click",l=>{l.target===i&&s()}),i.querySelectorAll("[data-mode]").forEach(l=>{l.addEventListener("click",()=>{s(),e("match",{matchMode:l.dataset.mode})})})}const Ve={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function je(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const qi=["ATT","MIL","DEF","GK"];function to(e){let t=0;const i=e.length;for(let s=0;s<i;s++)for(let l=s+1;l<i;l++){const d=e[s],a=e[l];if(!d||!a)continue;const p=d._col!=null&&a._col!=null&&d._col===a._col,f=d._col!=null&&a._col!=null&&Math.abs(d._col-a._col)===1,n=qi.indexOf(d._line||d.job),o=qi.indexOf(a._line||a.job),m=Math.abs(n-o)===1;if(!((d._line||d.job)===(a._line||a.job)&&f||p&&m))continue;const T=d.country_code&&a.country_code&&d.country_code===a.country_code,r=d.club_id&&a.club_id&&d.club_id===a.club_id;T&&r?t+=2:(T||r)&&(t+=1)}return t}function Nt(e,t={}){const i=e.reduce((d,a)=>{const p=a._line||a.job,f=a.stadiumBonus&&(p==="MIL"||p==="ATT")?10:0;return d+(Number(p==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)+f},0),s=to(e);let l=i+s;return t.doubleAttack&&(l*=2),t.stolenNote&&(l-=t.stolenNote),{base:i,links:s,total:Math.max(0,l)}}function Rt(e,t={}){const i=e.reduce((d,a)=>{const p=a._line||a.job;let f=0;p==="GK"?f=Number(a.note_g)||0:p==="MIL"?f=Number(a.note_m)||0:f=Number(a.note_d)||0;const n=a.stadiumBonus&&(p==="GK"||p==="DEF"||p==="MIL")?10:0;return d+f+(a.boost||0)+n},0),s=to(e);let l=i+s;return t.stolenNote&&(l-=t.stolenNote),{base:i,links:s,total:Math.max(0,l)}}function Ot(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function io(e,t,i="easy"){const s=e.filter(a=>!a.used);if(!s.length)return[];const l=[...s].sort((a,p)=>{const f=t==="attack"?je(a,"ATT"):a._line==="GK"?je(a,"GK"):je(a,"DEF");return(t==="attack"?je(p,"ATT"):p._line==="GK"?je(p,"GK"):je(p,"DEF"))-f});let d=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return l.slice(0,Math.min(d,l.length,3))}function Vo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const oo={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function _i(e,t){const i=e.player;if(!i)return 0;const s=i.rarity;if(s!=="pepite"&&s!=="papyte")return Number(i[t])||0;const l=$i(i),d=Number(i[t])||0;if(d<=0)return 0;const a=i.note_min??1,p=i.note_max??10,n=(e.current_note??l)-l;return Math.min(p,Math.max(a,d+n))}function $i(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function ki(e,t){!e||!t||await Promise.all([pi(e,"win"),pi(t,"loss")])}async function pi(e,t){const{data:i}=await E.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const s=i.filter(l=>{var d,a;return((d=l.player)==null?void 0:d.rarity)==="pepite"||((a=l.player)==null?void 0:a.rarity)==="papyte"});s.length&&await Promise.all(s.map(l=>{const d=oo[l.player.rarity],a=t==="win"?d.win:d.loss,p=l.player.note_min??1,f=l.player.note_max??10,n=$i(l.player),o=l.current_note??n,m=Math.min(f,Math.max(p,o+a));return E.from("cards").update({current_note:m}).eq("id",l.id)}))}async function Yo(e,t){return pi(e,t)}const no=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:oo,applyOwnEvolution:Yo,currentSecondaryNote:_i,getBaseMainNote:$i,updateEvolutiveCards:ki},Symbol.toStringTag,{value:"Module"})),ro={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},qt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Kt=["GK","DEF","MIL","ATT"],Wo=["Tous","GK","DEF","MIL","ATT"],Jo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Bi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Xo(e){return e.length?e.reduce((t,i)=>Bi(i)>Bi(t)?i:t,e[0]):e[0]}function ao(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Ei={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function so(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function At(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function di(e,t=""){var T,r;const i=e.player;if(!i)return"";const s=i.job||"ATT",l=qt[s],d=ro[i.rarity]||"#ccc",a=i.rarity==="pepite"||i.rarity==="papyte",p=e.evolution_bonus||0,f=(a&&e.current_note!=null?e.current_note:At(i,s))+p,n=i.job2?a?_i(e,ao(i.job2)):At(i,i.job2):null,o=n!=null?n>0?n+p:n:null,m=i.job2?qt[i.job2]:null,b=so(i),g=Ei[i.country_code]||i.country_code||"";return`
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
        ${o!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${m}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${o}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${g}</div>
        ${(T=i.clubs)!=null&&T.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((r=i.clubs)==null?void 0:r.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Fi(e){const t=e.job||"ATT",i=At(e,t),s=Ei[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Zo(e,t){const{state:i,navigate:s,toast:l,openModal:d,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await E.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:f}=await E.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),n=(p||[]).filter(X=>X.card_type==="player"&&X.player),o=(p||[]).filter(X=>X.card_type==="game_changer"),m=(p||[]).filter(X=>X.card_type==="formation"),b=(p||[]).filter(X=>X.card_type==="stadium"),{data:g}=await E.from("gc_definitions").select("name,gc_type,color,effect,image_url"),T={};(g||[]).forEach(X=>{T[X.name]=X});const{data:r}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),c={};(r||[]).forEach(X=>{c[X.id]=X}),b.forEach(X=>{X.stadium_def&&(c[X.stadium_id]=X.stadium_def)});const I=Object.keys(hi),L=Object.keys(Ve),q={};n.forEach(X=>{const ne=X.player.id;q[ne]=(q[ne]||0)+1}),new Set(Object.keys(q).map(X=>String(X)));const H=new Set(m.map(X=>X.formation)),D=new Set(o.map(X=>X.gc_type));let G="player",M="Tous",U="",oe=!1;function de(){return[...n].sort((X,ne)=>{const ge=Kt.indexOf(X.player.job),J=Kt.indexOf(ne.player.job);return ge!==J?ge-J:(X.player.surname_encoded||"").localeCompare(ne.player.surname_encoded||"")})}function N(){return[...f||[]].sort((X,ne)=>{const ge=Kt.indexOf(X.job),J=Kt.indexOf(ne.job);return ge!==J?ge-J:(X.surname_encoded||"").localeCompare(ne.surname_encoded||"")})}function W(){return de().filter(X=>{const ne=X.player,ge=M==="Tous"||ne.job===M,J=!U||`${ne.firstname} ${ne.surname_encoded}`.toLowerCase().includes(U);return ge&&J})}function K(){return N().filter(X=>{const ne=M==="Tous"||X.job===M,ge=!U||`${X.firstname} ${X.surname_encoded}`.toLowerCase().includes(U);return ne&&ge})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${G==="player"?"var(--green)":"transparent"};
        color:${G==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${G==="formation"?"var(--green)":"transparent"};
        color:${G==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${m.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${G==="gc"?"var(--green)":"transparent"};
        color:${G==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${G==="stadium"?"#E87722":"transparent"};
        color:${G==="stadium"?"#E87722":"var(--gray-600)"}">
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
  </div>`;function P(){const X=document.getElementById("col-filters");X&&(G==="player"?(X.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${U}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Wo.map(ne=>`
            <button class="filter-btn" data-job="${ne}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${ne===M?"var(--green)":"var(--gray-200)"};
                background:${ne===M?"var(--green)":"#fff"};
                color:${ne===M?"#fff":"var(--gray-600)"}">
              ${ne}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${oe?"var(--yellow)":"var(--gray-200)"};
              background:${oe?"var(--yellow)":"#fff"};
              color:${oe?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${oe?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",ne=>{U=ne.target.value.toLowerCase(),re()}),e.querySelectorAll(".filter-btn").forEach(ne=>{ne.addEventListener("click",()=>{M=ne.dataset.job,P(),re()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{oe=!oe,P(),re()})):(X.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${oe?"var(--yellow)":"var(--gray-200)"};
              background:${oe?"var(--yellow)":"#fff"};
              color:${oe?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${oe?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{oe=!oe,P(),re()})))}function re(){const X=document.getElementById("col-grid");X&&(G==="player"?we(X):G==="formation"?Ae(X):G==="stadium"?xe(X):Ie(X))}function pe(X,ne,ge,J,Z){const V=document.getElementById("col-grid"),se=document.getElementById("col-big");if(!V||!se)return;var he=0;function Se(){const Me=window.innerWidth>=768,be=document.getElementById("col-big"),ze=document.getElementById("col-grid");Me&&be&&(be.style.minHeight="420px",be.style.flex="1 1 auto"),Me&&ze&&(ze.style.height=Math.round(310*.76+16)+"px",ze.style.flexShrink="0",ze.style.overflowX="auto",ze.style.overflowY="hidden",ze.style.alignItems="center",ze.style.padding="8px 16px"),se.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+ne(X[he])+"</div>";var j=se.querySelector("[data-card-id],[data-form-id],[data-gc-id]");j&&j.addEventListener("click",function(){J(X[he])}),requestAnimationFrame(function(){var B=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!B||!se)){var w=se.clientHeight-8,k=se.clientWidth-24,u=B.offsetHeight,x=B.offsetWidth;if(u>0&&x>0&&w>40){var y=Me?2.2:1,h=Math.min(w/u,k/x,y);B.style.transform="scale("+h.toFixed(3)+")",B.style.transformOrigin="top center"}}}),V.innerHTML=X.map(function(B,w){var k=w===he,u="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(k?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+w+'" style="'+u+'">'+ge(B,k)+"</div>"}).join(""),V.querySelectorAll(".col-mini-item").forEach(function(B){B.addEventListener("click",function(){he=Number(B.dataset.idx),Se(),B.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Se()}function ye(X){var ne=window.innerWidth>=768?.76:.54,ge;if(!X||X._fake){var J=X?X.player:null;if(!J)return"";ge=Fi(J)}else ge=di(X,"");return'<div style="display:inline-block;zoom:'+ne+';pointer-events:none;line-height:0">'+ge+"</div>"}function Le(X,ne,ge){ne=ne||100,ge=ge||140;var J=Pt[X]||{},Z={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},V=Math.max(3,Math.round(ne*.06)),se=Object.entries(J).map(function(Se){var Me=Se[0],be=Se[1],ze=Me.replace(/\d+$/,""),j=Z[ze]||"#888",B=Math.round(be.x*ne),w=Math.round(be.y*ge);return'<circle cx="'+B+'" cy="'+w+'" r="'+V+'" fill="'+j+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),he=Math.max(1,Math.round(ne/50));return'<svg viewBox="0 0 '+ne+" "+ge+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+ne+'" height="'+ge+'" fill="#1A6B3C"/><rect x="'+Math.round(ne*.2)+'" y="'+Math.round(ge*.02)+'" width="'+Math.round(ne*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+he+'"/><line x1="0" y1="'+Math.round(ge*.5)+'" x2="'+ne+'" y2="'+Math.round(ge*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+he+'"/><ellipse cx="'+Math.round(ne*.5)+'" cy="'+Math.round(ge*.5)+'" rx="'+Math.round(ne*.18)+'" ry="'+Math.round(ge*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+he+'"/><rect x="'+Math.round(ne*.2)+'" y="'+Math.round(ge*.82)+'" width="'+Math.round(ne*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+he+'"/>'+se+"</svg>"}function ve(X,ne,ge){var J=ge>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ge+"</div>":"",Z=ne?'data-form-id="'+ne.id+'"':"",V=X.length>7?14:X.length>5?16:19,se=!!ne;return"<div "+Z+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(se?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(se?"":"filter:grayscale(1);opacity:0.5")+'">'+J+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(se?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+V+"px;font-weight:900;color:"+(se?"#1A6B3C":"#aaa")+';line-height:1">'+X+'</div></div><div style="flex:1;overflow:hidden;background:'+(se?"#1A6B3C":"#ccc")+'">'+Le(X,140,220)+"</div></div>"}function _e(X,ne){var ge=window.innerWidth>=768?.76:.54,J=140,Z=305,V=Math.round(Z*.22),se=Z-V,he=X.length>7?10:13,Se=Le(X,J,se),Me=ne?"1.5px solid #2a7a40":"1px solid #ddd",be=ne?"":"filter:grayscale(1);opacity:0.45;",ze=ne?"#1A6B3C":"#bbb",j="#fff";return'<div style="display:inline-block;zoom:'+ge+';line-height:0;pointer-events:none"><div style="width:'+J+"px;height:"+Z+"px;border-radius:6px;border:"+Me+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+be+'"><div style="height:'+V+"px;background:"+ze+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+he+"px;font-weight:900;color:"+j+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(J-4)+'px">'+X+'</span></div><div style="height:'+se+'px;overflow:hidden;flex-shrink:0">'+Se+"</div></div></div>"}function we(X){if(oe){const ne=K();if(!ne.length){X.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ge=ne.map(J=>n.find(Z=>Z.player.id===J.id)||{_fake:!0,player:J,id:"fake-"+J.id});pe(ge,J=>J._fake?Fi(J.player):di(J,""),J=>J._fake?ye({player:J.player,id:"x",_fake:!0}):ye(J),J=>{J._fake||Di(J,n,q,t)})}else{const ne=W();if(!ne.length){X.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ge={};ne.forEach(Z=>{const V=Z.player.id;ge[V]||(ge[V]=[]),ge[V].push(Z)});const J=Object.values(ge).map(Z=>Xo(Z));pe(J,Z=>{const V=q[Z.player.id]||1,se=V>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${V}</div>`:"",Se=n.filter(Me=>Me.player.id===Z.player.id&&Me.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return di(Z,se+Se)},Z=>ye(Z),Z=>Di(Z,n,q,t))}}function Ae(X){const ne=oe?I:[...H];if(!ne.length){X.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ge=ne.map(J=>({formation:J,card:m.find(Z=>Z.formation===J)||null,owned:H.has(J)}));pe(ge,({formation:J,card:Z,owned:V})=>ve(J,V?Z:null,V?m.filter(se=>se.formation===J).length:0),({formation:J,owned:Z})=>_e(J,Z),({card:J,owned:Z})=>{Z&&J&&en(J,m,t,d)})}function Ie(X){const ne=Object.keys(T),ge=oe?ne.length?ne:L:[...D];if(!ge.length){X.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const J=ge.map(Z=>({type:Z,gc:Ve[Z]||{icon:"⚡",desc:""},def:T[Z]||null,owned:D.has(Z),card:o.find(V=>V.gc_type===Z)||null}));pe(J,({type:Z,gc:V,def:se,owned:he,card:Se})=>{var y;const Me=he?o.filter(h=>h.gc_type===Z).length:0,be=Me>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Me}</div>`:"",ze=(se==null?void 0:se.gc_type)==="ultra_game_changer",j={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},B={purple:"#b06ce0",light_blue:"#00d4ef"},w=j[se==null?void 0:se.color]||j.purple,k=B[se==null?void 0:se.color]||B.purple,u=(se==null?void 0:se.effect)||V.desc||"",x=se!=null&&se.image_url?`/icons/${se.image_url}`:((y=se==null?void 0:se.club)==null?void 0:y.logo_url)||(se!=null&&se.country_code?`https://flagcdn.com/w80/${se.country_code.toLowerCase()}.png`:null);return he&&Se?`<div data-gc-id="${Se.id}" data-gc-type="${Z}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${k}66;cursor:pointer">
          ${be}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${Z.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${Z}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${ze?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${x?`<img src="${x}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${V.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${u.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${Z}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${V.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:Z,gc:V,def:se,owned:he})=>{const Se=window.innerWidth>=768?.76:.54,Me={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},be={purple:"#9b59b6",light_blue:"#00bcd4"},ze=Me[se==null?void 0:se.color]||Me.purple,j=be[se==null?void 0:se.color]||be.purple,B=se!=null&&se.image_url?`/icons/${se.image_url}`:null;return he?`<div style="display:inline-block;zoom:${Se};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${ze};border:1px solid ${j};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${Z}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${B?`<img src="${B}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${V.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((se==null?void 0:se.effect)||V.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Se};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${V.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${Z}</span></div></div>`},({type:Z,owned:V,def:se})=>{V&&Qo(Z,se,d)})}function xe(X){const ne="#E87722",ge="/";if(!b.length){X.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const J={};b.forEach(V=>{const se=V.stadium_id||"?";(J[se]=J[se]||[]).push(V)});const Z=Object.entries(J).map(([V,se])=>({sid:V,def:c[V]||null,count:se.length,card:se[0]}));pe(Z,({def:V,count:se})=>{var j,B;const he=(V==null?void 0:V.name)||"?",Se=((j=V==null?void 0:V.club)==null?void 0:j.encoded_name)||(V==null?void 0:V.country_code)||"—",Me=V!=null&&V.image_url?`${ge}icons/${V.image_url}`:((B=V==null?void 0:V.club)==null?void 0:B.logo_url)||(V!=null&&V.country_code?`https://flagcdn.com/w80/${V.country_code.toLowerCase()}.png`:null),be=Me?`<img src="${Me}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',ze=se>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${se}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${ne},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ne}66">
          ${ze}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${he}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${be}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Se}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:V,count:se})=>{var j,B;const he=window.innerWidth>=768?.76:.54,Se=(V==null?void 0:V.name)||"?",Me=((j=V==null?void 0:V.club)==null?void 0:j.encoded_name)||(V==null?void 0:V.country_code)||"—",be=V!=null&&V.image_url?`${ge}icons/${V.image_url}`:((B=V==null?void 0:V.club)==null?void 0:B.logo_url)||(V!=null&&V.country_code?`https://flagcdn.com/w80/${V.country_code.toLowerCase()}.png`:null),ze=be?`<img src="${be}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${he};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${ne},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${Se}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${ze}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${Me}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(X=>{X.addEventListener("click",()=>{G=X.dataset.tab,M="Tous",U="",oe=!1,e.querySelectorAll(".col-tab-btn").forEach(ne=>{const ge=ne.dataset.tab===G;ne.style.borderBottomColor=ge?"var(--green)":"transparent",ne.style.color=ge?"var(--green)":"var(--gray-600)"}),P(),re()})}),P(),re()}function Qo(e,t,i){const s=Ve[e]||{icon:"⚡",desc:"Effet spécial."},l=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},p=d[t==null?void 0:t.color]||d.purple,f=a[t==null?void 0:t.color]||a.purple,n=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||s.desc,m=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${p};border-radius:16px;border:2px solid ${f};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${l?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${n}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${m?`<img src="${m}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${s.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${o}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Vt=1e3;function en(e,t,i,s){var T,r,c;const{state:l,toast:d,closeModal:a,navigate:p,refreshProfile:f}=i,n=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function m(){const I=Pt[n]||{},L=hi[n]||[],q=290,H=360,D=20;function G(U){const oe=I[U];return oe?{x:oe.x*q,y:oe.y*H}:null}let M=`<svg width="${q}" height="${H}" viewBox="0 0 ${q} ${H}" xmlns="http://www.w3.org/2000/svg">`;for(const[U,oe]of L){const de=G(U),N=G(oe);!de||!N||(M+=`<line x1="${de.x}" y1="${de.y}" x2="${N.x}" y2="${N.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const U of Object.keys(I)){const oe=G(U);if(!oe)continue;const de=U.replace(/\d+/,""),N=o[de]||"#555";M+=`<circle cx="${oe.x}" cy="${oe.y}" r="${D}" fill="${N}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,M+=`<text x="${oe.x}" y="${oe.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${de}</text>`}return M+="</svg>",M}const b=t.filter(I=>I.formation===n);b.length;const g=!e.is_for_sale;s(`Formation ${n}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${g?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(T=document.getElementById("direct-sell-form-btn"))==null||T.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${n} pour ${Vt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const I=b.find(q=>!q.is_for_sale)||b[0];if(!I){d("Aucune carte à vendre","error");return}await E.from("market_listings").delete().eq("card_id",I.id),await E.from("transfer_history").delete().eq("card_id",I.id);const{error:L}=await E.from("cards").delete().eq("id",I.id);if(L){d(L.message,"error");return}await E.from("users").update({credits:(l.profile.credits||0)+Vt}).eq("id",l.profile.id),await f(),d(`+${Vt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),p("collection")}),(r=document.getElementById("market-sell-form-btn"))==null||r.addEventListener("click",async()=>{const I=parseInt(document.getElementById("sell-price-form").value);if(!I||I<1){d("Prix invalide","error");return}await E.from("cards").update({is_for_sale:!0,sale_price:I}).eq("id",e.id),await E.from("market_listings").insert({seller_id:l.profile.id,card_id:e.id,price:I}),d("Carte mise en vente sur le marché !","success"),a(),p("collection")}),(c=document.getElementById("cancel-sell-form-btn"))==null||c.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),a(),p("collection")})}async function Di(e,t,i,s){var we,Ae,Ie,xe,X,ne,ge;const{state:l,toast:d,openModal:a,closeModal:p,navigate:f,refreshProfile:n}=s,o=e.player,m=t.filter(J=>J.player.id===o.id),b=m.length,g=e.evolution_bonus||0,T=Math.max((Number(o.note_g)||0)+(o.job==="GK"||o.job2==="GK"?g:0),(Number(o.note_d)||0)+(o.job==="DEF"||o.job2==="DEF"?g:0),(Number(o.note_m)||0)+(o.job==="MIL"||o.job2==="MIL"?g:0),(Number(o.note_a)||0)+(o.job==="ATT"||o.job2==="ATT"?g:0)),r=o.rarity||"normal",{data:c}=await E.from("sell_price_configs").select("*").eq("rarity",r).lte("note_min",T).gte("note_max",T).order("note_min",{ascending:!1}).limit(1);((we=c==null?void 0:c[0])==null?void 0:we.price)??Jo[r];const I=o.rarity!=="legende",L=so(o),q=((o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:At(o,o.job))+g,H=o.rarity==="pepite"||o.rarity==="papyte",D=o.job2?(H?_i(e,ao(o.job2)):At(o,o.job2))+(At(o,o.job2)>0?g:0):null,G=qt[o.job]||"#1A6B3C",M=o.job2?qt[o.job2]:null,U=ro[o.rarity]||"#ccc",oe=Ei[o.country_code]||o.country_code||"",de=e.evolution_bonus||0,W=q+de,K=D||0,P=K>0?K+de:0,re=m.map(J=>J.id);let pe={};if(re.length){const{data:J}=await E.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",re).order("transferred_at",{ascending:!0});(J||[]).forEach(Z=>{pe[Z.card_id]||(pe[Z.card_id]=[]),pe[Z.card_id].push(Z)})}const ye=J=>{const Z=J.transferred_at?new Date(J.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",V=J.source==="booster"?"Booster":J.price?J.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${J.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${J.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${J.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${V}</div>
        <div style="font-size:11px;color:var(--gray-600)">${Z}</div>
      </div>
    </div>`},Le=re.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${b>1?`(${b})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${m.map((J,Z)=>{const V=pe[J.id]||[],se=J.is_for_sale,he=V.length?V[V.length-1]:null,Me=(o.rarity==="pepite"||o.rarity==="papyte")&&J.current_note!=null?` (☆${J.current_note})`:"";return`
            <div data-card-id="${J.id}" data-card-idx="${Z}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${se?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${J.id}" ${se?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${Z+1}${Me}${se?" 🏷️ En vente":""}</div>
                  ${he?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${he.club_name} · ${he.source==="booster"?"Booster":he.price?he.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${Z}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${V.length?`${V.length} club${V.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${Z}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${V.map(ye).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${W}${o.job2&&K>0?` / ${P}`:""}`:`Note actuelle : ${W}${o.job2&&K>0?` / ${P}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${b<=1?"#ccc":"#1A6B3C"};border-color:${b<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${b<=1?"not-allowed":"pointer"}"
            ${b<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
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
    </div>`:"";a(`${o.firstname} ${o.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${U};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${o.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(o.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${G}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${G}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${q}</text>
            </svg>
            ${D!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${M}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${D}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${L?`<img src="${L}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${oe}</div>
            ${(Ae=o.clubs)!=null&&Ae.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Ie=o.clubs)==null?void 0:Ie.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${U}">${o.rarity.toUpperCase()}</div>
          ${o.rarity==="pepite"||o.rarity==="papyte"?`
          <div style="margin-top:6px;background:${U}18;border-left:3px solid ${U};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${U};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([J,Z])=>{const V=qt[J],se=J===o.job||J===o.job2,he=(Number(Z)||0)+(se&&de>0?de:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${V}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${he}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${J}</span>
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
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(xe=document.getElementById("close-detail"))==null||xe.addEventListener("click",p);let ve=new Set;const _e=()=>{const J=ve.size,Z=document.getElementById("sell-action-panel");if(!Z)return;Z.style.display=J>0?"block":"none",document.getElementById("sell-selected-count").textContent=J;const V=document.getElementById("evolve-btn");V&&(V.textContent=`⬆️ Évoluer ${J>1?"(+"+J+")":""}`)};document.querySelectorAll(".expl-check").forEach(J=>{J.addEventListener("change",()=>{const Z=J.dataset.id;J.checked?ve.add(Z):ve.delete(Z);const V=J.closest(".exemplaire-row");V&&(V.style.borderColor=J.checked?"#1A6B3C":"#eee"),_e()})}),document.querySelectorAll(".exemplaire-row").forEach(J=>{J.addEventListener("click",Z=>{if(Z.target.closest("button")||Z.target.tagName==="INPUT")return;const V=J.querySelector(".expl-check");V&&!V.disabled&&(V.checked=!V.checked,V.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(J=>{J.addEventListener("click",Z=>{Z.stopPropagation();const V=document.querySelector(`.expl-hist[data-hist="${J.dataset.idx}"]`);V&&(V.style.display=V.style.display==="none"?"flex":"none")})}),(X=document.getElementById("evolve-btn"))==null||X.addEventListener("click",async()=>{if(b<=1)return;const J=[...ve];if(!J.length)return;if(ve.has(e.id)){const be=document.createElement("div");be.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",be.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(be),be.querySelector("#err-close").addEventListener("click",()=>be.remove()),be.addEventListener("click",ze=>{ze.target===be&&be.remove()});return}const Z=J.filter(be=>be!==e.id),V=o.rarity==="legende"?2:1;if((Z.length||1)*V,!(!Z.length&&J.length===1&&J[0]===e.id)){if(!Z.length){d("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(be=>{const ze=document.createElement("div");ze.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ze.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${o.firstname} ${o.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${Z.length}</strong> copie${Z.length>1?"s":""} sacrifiée${Z.length>1?"s":""}<br>
            📈 Note : <strong>${q+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${q+(e.evolution_bonus||0)+Z.length*V}</strong>
            ${D&&D>0?`<br>📈 Note 2 : <strong>${D+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${D+(e.evolution_bonus||0)+Z.length*V}</strong>`:""}
            ${o.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${V} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ze),ze.querySelector("#sac-cancel").addEventListener("click",()=>{ze.remove(),be(!1)}),ze.querySelector("#sac-ok").addEventListener("click",()=>{ze.remove(),be(!0)}),ze.addEventListener("click",j=>{j.target===ze&&(ze.remove(),be(!1))})}))return;if(Z.length){await E.from("market_listings").delete().in("card_id",Z),await E.from("deck_cards").delete().in("card_id",Z),await E.from("transfer_history").delete().in("card_id",Z),await E.from("decks").update({stadium_card_id:null}).in("stadium_card_id",Z);const{error:be}=await E.from("cards").delete().in("id",Z);if(be){d("Erreur suppression : "+be.message,"error");return}}const he=(e.evolution_bonus||0)+Z.length*V,{error:Se}=await E.from("cards").update({evolution_bonus:he}).eq("id",e.id);if(Se){d("Erreur évolution : "+Se.message,"error");return}const Me=q+he;d(`⬆️ ${o.firstname} ${o.surname_encoded} : note ${q+e.evolution_bonus||q} → ${Me}${Z.length?` · ${Z.length} copie${Z.length>1?"s":""} sacrifiée${Z.length>1?"s":""}`:""} !`,"success",4e3),p(),f("collection")}),(ne=document.getElementById("market-sell-btn"))==null||ne.addEventListener("click",async()=>{var Se;const J=[...ve];if(!J.length){d("Sélectionne au moins un exemplaire","warning");return}const Z=parseInt((Se=document.getElementById("sell-market-price"))==null?void 0:Se.value);if(!Z||Z<1){d("Prix invalide","error");return}const{error:V}=await E.from("cards").update({is_for_sale:!0,sale_price:Z}).in("id",J);if(V){d(V.message,"error");return}const se=J.map(Me=>({seller_id:l.profile.id,card_id:Me,price:Z,status:"active"})),{error:he}=await E.from("market_listings").insert(se);he&&console.warn("[Market] insert listings:",he.message),d(`${J.length} carte${J.length>1?"s":""} mise${J.length>1?"s":""} en vente à ${Z.toLocaleString("fr")} cr. chacune !`,"success"),p(),f("collection")}),(ge=document.getElementById("cancel-sell-btn"))==null||ge.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),p(),f("collection")})}const Xt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ii(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function lo(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function co(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function tn(e,t=44,i=58){var r;const s=e?ii(e):null,l=e?co(e):null,d=lo(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",p=vt[a]||"#555",f={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=(e==null?void 0:e.evolution_bonus)||0,m=(Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0)+(a===(e==null?void 0:e.job)||a===(e==null?void 0:e.job2)?n:0),b=Math.round(i*.19),g=Math.round(i*.25),T=i-b-g;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${f};background:${p};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${b}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${s?`<img src="${s}" style="position:absolute;top:${b}px;left:0;width:${t}px;height:${T}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">🌍</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${m}</span>
      ${l?`<img src="${l}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:(r=e==null?void 0:e.clubs)!=null&&r.encoded_name?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function ui(e,t){const{state:i,navigate:s,toast:l}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!a)return;const{data:p,error:f}=await E.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(f){l(f.message,"error");return}l("Deck créé !","success"),Gi(p.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Gi(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const p=prompt("Nouveau nom :",a.dataset.name);if(!p||p===a.dataset.name)return;const{error:f}=await E.from("decks").update({name:p}).eq("id",a.dataset.rename);if(f){l(f.message,"error");return}l("Deck renommé !","success"),ui(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await E.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:p}=await E.from("decks").delete().eq("id",a.dataset.delete);if(p){l(p.message,"error");return}l("Deck supprimé.","success"),ui(e,t)})})}async function Gi(e,t,i){const{state:s,toast:l}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select("*").eq("id",e).single(),{data:a}=await E.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",s.profile.id),p=(a||[]).filter(c=>c.card_type==="player"&&c.player),f=(a||[]).filter(c=>c.card_type==="formation"),n=(a||[]).filter(c=>c.card_type==="stadium"),o=[...new Set(n.map(c=>c.stadium_id).filter(Boolean))];let m={};if(n.forEach(c=>{c.stadium_def&&c.stadium_id&&(m[c.stadium_id]=c.stadium_def)}),o.length&&Object.keys(m).length<o.length){const{data:c}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",o);(c||[]).forEach(I=>{m[I.id]=I})}const b=f.map(c=>c.formation).filter(Boolean),{data:g}=await E.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let T=d.formation||"4-4-2";b.length>0&&!b.includes(T)&&(T=b[0]);const r={deckId:e,name:d.name,formation:T,formationCardId:d.formation_card_id,stadiumCardId:d.stadium_card_id||null,slots:{},subs:[],playerCards:p,formationCards:f,stadiumCards:n,stadDefMap:m,availableFormations:b};(g||[]).forEach(c=>{c.is_starter?r.slots[c.position]=c.card_id:r.subs.includes(c.card_id)||r.subs.push(c.card_id)}),Lt(t,r,i)}function Lt(e,t,i){var f,n;const{navigate:s}=i;Xt[t.formation];const l=Pi(t.formation),d=l.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Xt),p=t.subs.map(o=>t.playerCards.find(m=>m.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
          ${t.stadiumCards.map(o=>{var g;const m=t.stadDefMap[o.stadium_id],b=m?m.name+((g=m.club)!=null&&g.encoded_name?` (${m.club.encoded_name})`:m.country_code?` (${m.country_code})`:""):o.id.slice(0,8);return`<option value="${o.id}" ${t.stadiumCardId===o.id?"selected":""}>${b}</option>`}).join("")}
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
        ${p.map(o=>{const m=o.player;return`<div style="position:relative;flex-shrink:0">
            ${tn(m,44,58)}
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
  </div>`,on(e,t,l,i),document.getElementById("builder-back").addEventListener("click",()=>s("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const m=Pi(t.formation),b={};m.forEach(g=>{t.slots[g]&&(b[g]=t.slots[g])}),t.slots=b,Lt(e,t,i)}),(f=document.getElementById("stadium-select"))==null||f.addEventListener("change",o=>{t.stadiumCardId=o.target.value||null}),document.getElementById("save-deck").addEventListener("click",()=>an(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(m=>m!==o.dataset.removeSub),Lt(e,t,i)})}),(n=document.getElementById("add-sub-btn"))==null||n.addEventListener("click",()=>{rn(t,e,i)})}function on(e,t,i,s){var q,H,D;const l=e.querySelector("#deck-field");if(!l)return;const d=(q=t.stadiumCards)==null?void 0:q.find(G=>G.id===t.stadiumCardId),a=d&&((H=t.stadDefMap)==null?void 0:H[d.stadium_id])||null,p=Pt[t.formation]||{},f=Wi(t.formation)||[],n={};for(const G of i){const M=t.slots[G],U=M?t.playerCards.find(oe=>oe.id===M):null;n[G]=U?U.player:null}const o=300,m=300,b=48,g=64,T=13,r=16,c=38;function I(G){const M=p[G];return M?{x:M.x*o,y:M.y*m}:null}let L="";for(const[G,M]of f){const U=I(G),oe=I(M);if(!U||!oe)continue;const de=n[G]?{...n[G],club_id:n[G].club_id,country_code:n[G].country_code,rarity:n[G].rarity}:null,N=n[M]?{...n[M],club_id:n[M].club_id,country_code:n[M].country_code,rarity:n[M].rarity}:null,W=at(de,N);W==="#ff3333"||W==="#cc2222"?L+=`<line x1="${U.x.toFixed(1)}" y1="${U.y.toFixed(1)}" x2="${oe.x.toFixed(1)}" y2="${oe.y.toFixed(1)}" stroke="${W}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(L+=`<line x1="${U.x.toFixed(1)}" y1="${U.y.toFixed(1)}" x2="${oe.x.toFixed(1)}" y2="${oe.y.toFixed(1)}" stroke="${W}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,L+=`<line x1="${U.x.toFixed(1)}" y1="${U.y.toFixed(1)}" x2="${oe.x.toFixed(1)}" y2="${oe.y.toFixed(1)}" stroke="${W}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const G of i){const M=I(G);if(!M)continue;const U=n[G],oe=G.replace(/\d+/,""),de=vt[oe]||"#555",N=(M.x-b/2).toFixed(1),W=(M.y-g/2).toFixed(1),K={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[U==null?void 0:U.rarity]||"#aaa";if(U){const P=ii(U),re=co(U),pe=lo(U.country_code),ye=((D=U.card)==null?void 0:D.evolution_bonus)||U.evolution_bonus||0,Le=(Number(oe==="GK"?U.note_g:oe==="DEF"?U.note_d:oe==="MIL"?U.note_m:U.note_a)||0)+(oe===U.job||oe===U.job2?ye:0),ve=a&&(a.club_id&&String(U.club_id)===String(a.club_id)||a.country_code&&U.country_code===a.country_code),_e=ve?Le+10:Le,we=g-T-r;L+=`<defs><clipPath id="dcp-${G}"><rect x="${N}" y="${(M.y-g/2+T).toFixed(1)}" width="${b}" height="${we}"/></clipPath></defs>`,L+=`<rect x="${N}" y="${W}" width="${b}" height="${g}" rx="5" fill="${de}"/>`,P&&(L+=`<image href="${P}" x="${N}" y="${(M.y-g/2+T).toFixed(1)}" width="${b}" height="${we}" clip-path="url(#dcp-${G})" preserveAspectRatio="xMidYMin slice"/>`),L+=`<rect x="${N}" y="${W}" width="${b}" height="${T}" fill="rgba(255,255,255,0.93)"/>`,L+=`<text x="${M.x.toFixed(1)}" y="${(M.y-g/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(U.surname_encoded||"").slice(0,9)}</text>`;const Ae=(M.y+g/2-r).toFixed(1);L+=`<rect x="${N}" y="${Ae}" width="${b}" height="${r}" fill="rgba(255,255,255,0.93)"/>`,pe&&(L+=`<image href="${pe}" x="${(M.x-21).toFixed(1)}" y="${(M.y+g/2-r+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),L+=`<text x="${M.x.toFixed(1)}" y="${(M.y+g/2-r/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${_e}</text>`,re&&(L+=`<image href="${re}" x="${(M.x+b/2-14).toFixed(1)}" y="${(M.y+g/2-r+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),L+=`<rect x="${N}" y="${W}" width="${b}" height="${g}" rx="5" fill="none" stroke="${ve?"#E87722":K}" stroke-width="${ve?"2.5":"2"}"/>`,ve&&(L+=`<rect x="${(M.x+b/2-13).toFixed(1)}" y="${W}" width="13" height="9" rx="3" fill="#E87722"/>`,L+=`<text x="${(M.x+b/2-6.5).toFixed(1)}" y="${(M.y-g/2+4.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="900" fill="#fff" font-family="Arial">+10</text>`)}else L+=`<rect x="${N}" y="${W}" width="${b}" height="${g}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,L+=`<text x="${M.x.toFixed(1)}" y="${M.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,L+=`<text x="${M.x.toFixed(1)}" y="${(M.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${oe}</text>`;L+=`<rect x="${N}" y="${W}" width="${b}" height="${g}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${G}" style="cursor:pointer"/>`}l.innerHTML=`<svg viewBox="${-c} ${-c} ${o+c*2} ${m+c*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${L}</svg>`,l.querySelectorAll(".deck-slot-hit").forEach(G=>{G.addEventListener("click",()=>nn(G.dataset.pos,t,e,s))})}function nn(e,t,i,s){var b,g,T;const{openModal:l,closeModal:d}=s,a=e.replace(/\d+/,""),p=t.slots[e],f=p?t.playerCards.find(r=>r.id===p):null;(b=f==null?void 0:f.player)==null||b.id;const n=new Set;Object.entries(t.slots).forEach(([r,c])=>{var L;if(r===e||!c)return;const I=t.playerCards.find(q=>q.id===c);(L=I==null?void 0:I.player)!=null&&L.id&&n.add(I.player.id)}),t.subs.forEach(r=>{var I;const c=t.playerCards.find(L=>L.id===r);(I=c==null?void 0:c.player)!=null&&I.id&&n.add(c.player.id)});const o=new Set,m=t.playerCards.filter(r=>{const c=r.player;return!(c.job===a||c.job2===a)||n.has(c.id)||o.has(c.id)?!1:(o.add(c.id),!0)});m.sort((r,c)=>{card!=null&&card.evolution_bonus;const I=r.evolution_bonus||0,L=c.evolution_bonus||0,q=(a==="GK"?r.player.note_g:a==="DEF"?r.player.note_d:a==="MIL"?r.player.note_m:r.player.note_a)+(a===r.player.job||a===r.player.job2?I:0);return(a==="GK"?c.player.note_g:a==="DEF"?c.player.note_d:a==="MIL"?c.player.note_m:c.player.note_a)+(a===c.player.job||a===c.player.job2?L:0)-q}),l(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${m.length>0?m.map(r=>{var D,G;const c=r.player,I=card.evolution_bonus||0,L=(a==="GK"?c.note_g:a==="DEF"?c.note_d:a==="MIL"?c.note_m:c.note_a)+(a===c.job||a===c.job2?I:0),q=ii(c),H={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[c.rarity];return`<div class="player-option" data-card-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[a]}">
            ${q?`<img src="${q}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${vt[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${c.firstname} ${c.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${c.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${c.country_code}">
              ${(D=c.clubs)!=null&&D.logo_url?`<img src="${c.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((G=c.clubs)==null?void 0:G.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${c.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${vt[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${H};flex-shrink:0">
            ${L}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",d),(T=document.getElementById("remove-player"))==null||T.addEventListener("click",()=>{delete t.slots[e],d(),Lt(i,t,s)}),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{t.slots[e]=r.dataset.cardId,d(),Lt(i,t,s)})})}function rn(e,t,i){var f;const{openModal:s,closeModal:l}=i,d=new Set;Object.values(e.slots).filter(Boolean).forEach(n=>{var m;const o=e.playerCards.find(b=>b.id===n);(m=o==null?void 0:o.player)!=null&&m.id&&d.add(o.player.id)}),e.subs.forEach(n=>{var m;const o=e.playerCards.find(b=>b.id===n);(m=o==null?void 0:o.player)!=null&&m.id&&d.add(o.player.id)});const a=new Set,p=e.playerCards.filter(n=>{var o,m,b;return d.has((o=n.player)==null?void 0:o.id)||a.has((m=n.player)==null?void 0:m.id)?!1:(a.add((b=n.player)==null?void 0:b.id),!0)});s("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${p.length>0?p.map(n=>{var g;const o=n.player,m=ii(o),b=(o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a)+(card.evolution_bonus||0);return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[o.job]}">
            ${m?`<img src="${m}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${o.firstname} ${o.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.job} · ${o.country_code} · ${((g=o.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${vt[o.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${b}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(f=document.getElementById("close-sub-selector"))==null||f.addEventListener("click",l),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{e.subs.push(n.dataset.cardId),l(),Lt(t,e,i)})})}async function an(e,t){const{state:i,toast:s,navigate:l}=t,d=e.formationCards.find(f=>f.formation===e.formation),a=(d==null?void 0:d.id)||e.formationCardId;await E.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await E.from("deck_cards").delete().eq("deck_id",e.deckId);const p=[];if(Object.entries(e.slots).forEach(([f,n],o)=>{p.push({deck_id:e.deckId,card_id:n,position:f,is_starter:!0,slot_order:o})}),e.subs.forEach((f,n)=>{p.push({deck_id:e.deckId,card_id:f,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),p.length>0){const{error:f}=await E.from("deck_cards").insert(p);if(f){s(f.message,"error");return}}s("Deck enregistré ✅","success"),l("decks")}function Pi(e){const t=Xt[e]||Xt["4-4-2"],i=["GK1"];for(let s=1;s<=t.DEF;s++)i.push(`DEF${s}`);for(let s=1;s<=t.MIL;s++)i.push(`MIL${s}`);for(let s=1;s<=t.ATT;s++)i.push(`ATT${s}`);return i}async function po(){const{data:e}=await E.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await E.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(s=>s.booster_id===i.id)}))}function sn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((s,l)=>s+Number(l.percentage),0);let i=Math.random()*t;for(const s of e)if(i-=Number(s.percentage),i<=0)return s;return e[e.length-1]}const uo=()=>Object.keys(Pt),dn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],fi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ln(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Ni={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},cn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},pn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ri(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function un(e){var o,m;const t=e.player;if(!t)return"";const i=t.job||"ATT",s=Ni[i],l=cn[t.rarity]||"#ccc",d=Ri(t,i),a=t.job2?Ri(t,t.job2):null,p=t.job2?Ni[t.job2]:null,f=ln(t),n=pn[t.country_code]||t.country_code||"";return`
  <div style="width:140px;border-radius:12px;padding:6px;background:${l};cursor:pointer;flex-shrink:0;position:relative">
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
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${p}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${a}</text>
        </svg>`:""}
      </div>
      <div style="height:106px;overflow:hidden;background:#b8d4f0;position:relative">
        ${f?`<img src="${f}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${n}</div>
        ${(o=t.clubs)!=null&&o.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=t.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function fo(e){var l;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const i=((l=Object.entries(t).sort((d,a)=>a[1]-d[1])[0])==null?void 0:l[0])||"player",s=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+s,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_raw:e}}async function fn(e,{state:t,navigate:i,toast:s}){var m,b;const l=((m=t.profile)==null?void 0:m.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await po()).map(fo)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}d.length||(d=dn.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const a=await E.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(g=>g.data||[]),p=new Set(a.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),f=new Set(a.filter(g=>g.card_type==="formation").map(g=>g.formation)),n=new Set(a.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),o={};for(const g of d){if(g.allow_duplicates!==!1||!((b=g.rates)!=null&&b.length))continue;const T=[...new Set((g.rates||[]).map(c=>c.card_type))];let r=!1;for(const c of T)if(c==="stadium"){const{data:I}=await E.from("stadium_definitions").select("id");if((I||[]).some(L=>!p.has(L.id))){r=!0;break}}else if(c==="game_changer"){const{data:I}=await E.from("gc_definitions").select("name").eq("is_active",!0);if((I||[]).some(L=>!n.has(L.name))){r=!0;break}}else if(c==="formation"){const{FORMATION_LINKS:I}=await ti(async()=>{const{FORMATION_LINKS:L}=await import("./formation-links-Dnttc-Cp.js").then(q=>q.m);return{FORMATION_LINKS:L}},__vite__mapDeps([0,1]));if(Object.keys(I).some(L=>!f.has(L))){r=!0;break}}else{r=!0;break}r||(o[g.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${l.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${d.map(g=>{const T=g.cost===0||l>=g.cost,r=o[g.id]===!0;return`<div class="booster-card ${!T||r?"disabled":""}" data-booster="${g.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${g.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${g.img}" alt="${g.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${g.name}</div>
            <div class="desc">${g.sub}</div>
            <div class="cost">${g.costLabel}</div>
            ${T?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${r?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const T=d.find(r=>r.id===g.dataset.booster);if(T){g.style.opacity="0.5",g.style.pointerEvents="none";try{await gn(T,{state:t,toast:s,navigate:i,container:e})}catch(r){s(r.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",T=>{T.stopPropagation();const r=d.find(c=>c.id===g.dataset.boosterId);bn(r)})})}async function gn(e,{state:t,toast:i,navigate:s,container:l}){var m,b;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await wn()}catch(g){i(g.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:d}=await E.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((d||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),p=new Set((d||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let f=[],n=null;try{if((m=e.rates)!=null&&m.length)f=await gi(t.profile,e);else{const g=e.type||"player";g==="player"?f=await go(t.profile,e.cardCount,e.cost):g==="game_changer"?f=await mo(t.profile,e.cardCount,e.cost):g==="formation"?f=await xo(t.profile,e.cost):f=await gi(t.profile,e)}}catch(g){n=g.message||String(g),console.error("[Booster] Erreur:",g)}if(!(f!=null&&f.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${n||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(b=g.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>g.remove());return}f.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=p.has(g.formation))});const{data:o}=await E.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),yo(f,e,s)}function mn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function xn(e,t){let i;switch(t){case"legende":i=e.filter(s=>s.rarity==="legende"),i.length||(i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte")),i.length||(i=e.filter(s=>mt(s)>=6));break;case"special":i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte"),i.length||(i=e.filter(s=>mt(s)>=6));break;case"normal_high":i=e.filter(s=>s.rarity==="normal"&&mt(s)>=6),i.length||(i=e.filter(s=>mt(s)>=6));break;default:i=e.filter(s=>s.rarity==="normal"&&mt(s)>=1&&mt(s)<=5),i.length||(i=e.filter(s=>s.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function gi(e,t){if(t.cost>0){const{error:b}=await E.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(b)throw b}const i=t.allow_duplicates!==!1;let s=[];const{data:l,error:d}=await E.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(d){const{data:b}=await E.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);s=b||[]}else s=l||[];const a=new Set(s.filter(b=>b.card_type==="player").map(b=>b.player_id)),p=new Set(s.filter(b=>b.card_type==="formation").map(b=>b.formation)),f=new Set(s.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),n=new Set(s.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),o=new Set,m=[];for(let b=0;b<(t.cardCount||5);b++){const g=sn(t.rates);if(g){if(g.card_type==="player"){const T=M=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[M]||M,r=g.rarity?T(g.rarity):null;let c=E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(c=c.eq("rarity",r));const{data:I}=await c;let L=I||[];if((g.note_min||g.note_max)&&(L=L.filter(M=>{const U=Math.max(Number(M.note_g)||0,Number(M.note_d)||0,Number(M.note_m)||0,Number(M.note_a)||0);return(!g.note_min||U>=g.note_min)&&(!g.note_max||U<=g.note_max)})),L.length||(g.note_min||g.note_max?(L=I||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):L=I||[]),!L.length)continue;let q=L.filter(M=>!o.has(M.id));if(i)q.length||(q=L);else if(q=q.filter(M=>!a.has(M.id)),!q.length)continue;const H=q[Math.floor(Math.random()*q.length)];o.add(H.id);const D=a.has(H.id),{data:G}=await E.from("cards").insert({owner_id:e.id,player_id:H.id,card_type:"player"}).select().single();G&&(m.push({...G,player:H,isDuplicate:D}),E.rpc("record_transfer",{p_card_id:G.id,p_player_id:H.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:T}=await E.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=T!=null&&T.length?T:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=i?r:r.filter(H=>!f.has(H.name));if(!i&&!c.length)continue;const L=c[Math.floor(Math.random()*c.length)].name,{data:q}=await E.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:L}).select().single();q&&m.push(q)}else if(g.card_type==="formation"){const T=uo(),r=i?T:T.filter(q=>!p.has(q));if(!i&&!r.length)continue;const c=r[Math.floor(Math.random()*r.length)],I=p.has(c),{data:L}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();L!=null&&L[0]&&m.push({...L[0],isDuplicate:I})}else if(g.card_type==="stadium"){const{data:T,error:r}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(r){console.error("[Booster] stadium_definitions:",r.message);continue}if(!(T!=null&&T.length)){console.warn("[Booster] Aucun stade en DB");continue}const c=i?T:T.filter(H=>!n.has(H.id));if(!i&&!c.length)continue;const I=c[Math.floor(Math.random()*c.length)],{data:L,error:q}=await E.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:I.id}).select("id,card_type,stadium_id").single();if(q){console.error("[Booster] insert stadium card:",q.message);continue}L&&m.push({...L,rarity:"normal",_stadiumDef:I})}}}return m}async function go(e,t,i){if(i>0){const{error:n}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n}const{data:s}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(s!=null&&s.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const l=s.filter(n=>n.job==="GK"),d=s.filter(n=>n.job!=="GK"),a=!e.first_booster_opened&&l.length>0,p=[];for(let n=0;n<t;n++){const o=n===0&&a?l:n===0?d:s,m=mn(),b=xn(o,m);b&&p.push(b)}a&&await E.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:f}=await E.from("cards").insert(p.map(n=>({owner_id:e.id,player_id:n.id,card_type:"player"}))).select();return(f||[]).forEach((n,o)=>{E.rpc("record_transfer",{p_card_id:n.id,p_player_id:p[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),p.map((n,o)=>({...f[o],player:n}))}async function mo(e,t,i){const{error:s}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s;const{data:l}=await E.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=l!=null&&l.length?l:Object.keys(fi).map(o=>({name:o,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const o=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:p,error:f}=await E.from("cards").insert(a).select();return f&&console.error("[Booster GC] Erreur insert:",f.message,f),(p||[]).map(o=>{const m=l==null?void 0:l.find(b=>b.name===o.gc_type||b.id===o.gc_definition_id);return{...o,_gcDef:m||null}})}async function xo(e,t){const{error:i}=await E.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:s}=await E.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),l=new Set((s||[]).map(o=>o.formation)),d=uo(),a=d[Math.floor(Math.random()*d.length)],p=l.has(a),{data:f,error:n}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return n&&console.error("[Booster Formation] Erreur insert:",n.message,n),(f||[]).map(o=>({...o,isDuplicate:p}))}function yo(e,t,i,s=null){var W,K;if(!e||e.length===0){const P=document.createElement("div");P.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",P.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(P),(W=P.querySelector("#anim-close-err"))==null||W.addEventListener("click",()=>P.remove());return}e=[...e].sort((P,re)=>{const pe=P.player?mt(P.player):-1;return(re.player?mt(re.player):-1)-pe});const l=document.createElement("div");l.id="booster-anim-overlay",l.innerHTML=`
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
  `,document.body.appendChild(l);let d=!1;const a=document.getElementById("pack-cut-zone"),p=document.getElementById("pack-blade");let f=!1;const n=P=>P.touches&&P.touches[0]?P.touches[0].clientX:P.clientX;function o(P){d||(f=!0,p.style.opacity="1",m(P))}function m(P){if(!f||d)return;const re=a.getBoundingClientRect(),pe=n(P)-re.left,ye=Math.max(0,Math.min(1,pe/re.width));p.style.width=ye*re.width+"px",ye>=.82&&g()}function b(){d||(f=!1,p.style.transition="width .2s ease, opacity .2s ease",p.style.width="0",p.style.opacity="0",setTimeout(()=>{d||(p.style.transition="")},220))}function g(){var re;if(d)return;d=!0,f=!1,p.style.width="100%",p.style.opacity="1",(re=document.getElementById("cut-flash"))==null||re.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const P=document.getElementById("cut-hint");P&&(P.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{p.style.opacity="0",document.getElementById("pack-phase").style.display="none",I(0)},620)}a.addEventListener("pointerdown",o),window.addEventListener("pointermove",m),window.addEventListener("pointerup",b),a.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",m,{passive:!0}),window.addEventListener("touchend",b);let T=0,r=!1;const c=new Set;function I(P){T=P,document.getElementById("reveal-phase").style.display="flex",L(),q(P,0),U()}function L(){const P=document.getElementById("card-dots");P&&(P.innerHTML=e.map((re,pe)=>`<div class="card-dot" data-i="${pe}" style="width:8px;height:8px;border-radius:50%;background:${pe===T?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),P.querySelectorAll(".card-dot").forEach(re=>re.addEventListener("click",()=>D(parseInt(re.dataset.i)))))}function q(P,re){var xe;const pe=e[P],ye=document.getElementById("card-counter"),Le=document.getElementById("card-track");ye&&(ye.textContent=`Carte ${P+1} / ${e.length}`);const ve=document.getElementById("reveal-btns");ve&&(ve.style.display=P===e.length-1?"flex":"none");const _e=pe.card_type==="player"&&((xe=pe.player)==null?void 0:xe.rarity)==="legende",we=!c.has(P);c.add(P);let Ae=0;if(pe.card_type==="player"&&pe.player){const X=pe.player,ne=X.job||"ATT";Ae=Number(ne==="GK"?X.note_g:ne==="DEF"?X.note_d:ne==="MIL"?X.note_m:X.note_a)||0}const Ie=X=>{Le.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${_e?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${yn(pe)}</div>
          ${pe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ne=document.getElementById("current-card-wrap");re!==0?(ne.style.transition="none",ne.style.transform=`translateX(${re>0?100:-100}%)`,requestAnimationFrame(()=>{ne.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ne.style.transform="translateX(0)"})):ne.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),X||_e?de():N(),L()};we&&Ae>6&&pe.card_type==="player"&&pe.player?H(pe,()=>Ie(!0)):Ie(!1)}function H(P,re){var Ae;r=!0;const pe=P.player,ye=`https://flagsapi.com/${pe.country_code}/flat/64.png`,Le=(Ae=pe.clubs)==null?void 0:Ae.logo_url,ve=document.getElementById("walkout-overlay"),_e=document.getElementById("walkout-stage");if(!ve||!_e){r=!1,re();return}ve.style.display="flex";const we=()=>{const Ie=_e.firstElementChild;Ie&&(Ie.classList.remove("wo-in"),Ie.classList.add("wo-out"))};_e.innerHTML=`<img class="wo-in" src="${ye}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(we,2e3),setTimeout(()=>{var Ie;_e.innerHTML=Le?`<img class="wo-in" src="${Le}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((Ie=pe.clubs)==null?void 0:Ie.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(we,4450),setTimeout(()=>{ve.style.display="none",_e.innerHTML="",r=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),re()},4900)}function D(P){if(r||P<0||P>=e.length||P===T)return;const re=P>T?1:-1;T=P,q(P,re)}function G(){D(T+1)}function M(){D(T-1)}function U(){const P=document.getElementById("card-viewport");if(!P||P._swipeBound)return;P._swipeBound=!0;let re=0,pe=0,ye=0,Le=!1;const ve=xe=>xe.touches?xe.touches[0].clientX:xe.clientX,_e=xe=>xe.touches?xe.touches[0].clientY:xe.clientY,we=xe=>{Le=!0,re=ve(xe),pe=_e(xe),ye=0},Ae=xe=>{if(!Le)return;ye=ve(xe)-re;const X=_e(xe)-pe;if(Math.abs(ye)<Math.abs(X))return;const ne=document.getElementById("current-card-wrap");ne&&(ne.style.transition="none",ne.style.transform=`translateX(${ye*.6}px) rotate(${ye*.02}deg)`)},Ie=()=>{if(!Le)return;Le=!1;const xe=document.getElementById("current-card-wrap"),X=55;ye<=-X&&T<e.length-1?G():ye>=X&&T>0?M():xe&&(xe.style.transition="transform .2s ease",xe.style.transform="translateX(0)")};P.addEventListener("pointerdown",we),P.addEventListener("pointermove",Ae),P.addEventListener("pointerup",Ie),P.addEventListener("pointercancel",Ie),P.addEventListener("touchstart",we,{passive:!0}),P.addEventListener("touchmove",Ae,{passive:!0}),P.addEventListener("touchend",Ie),P.addEventListener("click",xe=>{if(Math.abs(ye)>8)return;const X=P.getBoundingClientRect();xe.clientX-X.left>X.width/2?G():M()})}let oe=null;function de(){const P=document.getElementById("fireworks-canvas");if(!P)return;P.width=window.innerWidth,P.height=window.innerHeight;const re=P.getContext("2d"),pe=[];function ye(){const ve=Math.random()*P.width,_e=Math.random()*P.height*.6,we=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Ae=we[Math.floor(Math.random()*we.length)];for(let Ie=0;Ie<60;Ie++){const xe=Math.PI*2/60*Ie,X=2+Math.random()*5;pe.push({x:ve,y:_e,vx:Math.cos(xe)*X,vy:Math.sin(xe)*X,alpha:1,color:Ae,size:2+Math.random()*3})}}ye(),oe=setInterval(ye,600);function Le(){if(document.getElementById("fireworks-canvas")){re.clearRect(0,0,P.width,P.height);for(let ve=pe.length-1;ve>=0;ve--){const _e=pe[ve];if(_e.x+=_e.vx,_e.y+=_e.vy+.08,_e.vy*=.98,_e.alpha-=.018,_e.alpha<=0){pe.splice(ve,1);continue}re.globalAlpha=_e.alpha,re.fillStyle=_e.color,re.beginPath(),re.arc(_e.x,_e.y,_e.size,0,Math.PI*2),re.fill()}re.globalAlpha=1,(oe!==null||pe.length>0)&&requestAnimationFrame(Le)}}Le()}function N(){oe!==null&&(clearInterval(oe),oe=null);const P=document.getElementById("fireworks-canvas");P&&P.getContext("2d").clearRect(0,0,P.width,P.height)}if(s){const P=document.getElementById("reveal-btns");P&&(P.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(K=document.getElementById("reveal-next"))==null||K.addEventListener("click",()=>{N(),l.remove(),s()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{N(),l.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{N(),l.remove(),i("boosters")})}function yn(e){var t,i,s,l;if(e.card_type==="player"&&e.player)return un(e);if(e.card_type==="game_changer"){const d=e._gcDef,a=(d==null?void 0:d.gc_type)==="ultra_game_changer",p={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},f={purple:"#b06ce0",light_blue:"#00d4ef"},n=p[d==null?void 0:d.color]||p.purple,o=f[d==null?void 0:d.color]||f.purple,m=(d==null?void 0:d.name)||e.gc_type||"Game Changer",b=(d==null?void 0:d.effect)||((t=fi[e.gc_type])==null?void 0:t.desc)||"",g=d!=null&&d.image_url?`/icons/${d.image_url}`:null,T=((i=fi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${n};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${m.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${g?`<img src="${g}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${T}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${b.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const d=e._stadiumDef,a=(d==null?void 0:d.name)||"Stade",p=((s=d==null?void 0:d.club)==null?void 0:s.encoded_name)||(d==null?void 0:d.country_code)||"—",f=d!=null&&d.image_url?`/icons/${d.image_url}`:((l=d==null?void 0:d.club)==null?void 0:l.logo_url)||(d!=null&&d.country_code?`https://flagcdn.com/64x48/${d.country_code.toLowerCase()}.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${a.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${a}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${f?`<img src="${f}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function bn(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const l={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};s.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(a=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${d[a.card_type]||a.card_type}</span>
            ${a.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${l[a.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${a.rarity}</span>`:""}
            ${a.note_min||a.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${a.note_min||""}–${a.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(a.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(s),s.addEventListener("click",a=>{a.target===s&&s.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>s.remove());return}hn()}function hn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const vn="simulation",bo="VOTRE_ZONE_ID";function wn(){switch(vn){case"propellerads":return _n();case"adsense":return $n();default:return Ti()}}function Ti(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const s=setInterval(()=>{i--;const l=document.getElementById("ad-cd"),d=document.getElementById("ad-skip");l&&(l.textContent=i),d&&(d.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(s),d&&(d.disabled=!1,d.style.cssText=d.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),d==null||d.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function _n(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Ti());window.propeller.push({zone_id:bo,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function $n(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Ti());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:bo,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}async function kn(e,{state:t,navigate:i,toast:s,refreshProfile:l}){var b,g;const{data:d}=await E.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let a=Array.isArray((b=t.profile)==null?void 0:b.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await E.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let p=null;try{const r=(await po()).find(c=>(c.name||"").toLowerCase().includes("new player"));r&&(p=fo(r))}catch(T){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',T)}const f=a.length;let n=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await E.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function m(){var L;if(n>=f||!a.length){await E.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),l&&await l(),s("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const T=a[0],{data:r}=await E.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let c=[];try{if(T.type==="formation")c=await xo(t.profile,0);else if(T.type==="game_changer")c=await mo(t.profile,T.count||3,0);else if(p&&((L=p.rates)!=null&&L.length)){const q={...p,cost:0,cardCount:T.count||p.cardCount||5};c=await gi(t.profile,q),T.guaranteeGK&&!t.profile.first_booster_opened&&(c.some(D=>D.player&&D.player.job==="GK")||await En(t.profile,c),await E.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else c=await go(t.profile,T.count||5,0)}catch(q){s(q.message||"Erreur ouverture booster","error");return}a.shift(),n++,await o();const I=T.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:T.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${n}/${f})`,img:(p==null?void 0:p.img)||"/icons/booster-players.png"};yo(c,I,i,()=>{m()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>m())}async function En(e,t){try{const{data:i}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const s=i[Math.floor(Math.random()*i.length)],l=t.findIndex(a=>a.player);if(l===-1)return;const d=t[l];await E.from("cards").update({player_id:s.id}).eq("id",d.id),t[l]={...d,player_id:s.id,player:s}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const It={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Mt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function wt(e,t,i,s,l){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${s}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",l)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function mi(e,t){var d,a;const i=e.player,s=e.evolution_bonus||0,l=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?s:0)+(i.job2==="GK"&&l>0?s:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?s:0)+(i.job2==="DEF"&&l>0?s:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?s:0)+(i.job2==="MIL"&&l>0?s:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?s:0)+(i.job2==="ATT"&&l>0?s:0),evolution_bonus:s,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((d=i.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ht(e,t){if(!t||!e)return e;const{club_id:i,country_code:s}=t;return Object.values(e).forEach(l=>{Array.isArray(l)&&l.forEach(d=>{const a=i&&String(d.club_id)===String(i),p=s&&String(d.country_code)===String(s);(a||p)&&(d.stadiumBonus=!0)})}),e}function oi(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:s}=t;return e.forEach(l=>{if(!l)return;const d=i&&String(l.club_id)===String(i),a=s&&String(l.country_code)===String(s);(d||a)&&(l.stadiumBonus=!0)}),e}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ni(){const e=Math.random()*100;return e<10?3:e<30?2:1}function yt(e,t){const i=It[t]||It["4-4-2"],s={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const p=e.filter(n=>n.position&&n.position.replace(/\d+$/,"")===a).sort((n,o)=>parseInt(n.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(n=>({...n,_line:a})),f=lt(p.length);p.forEach((n,o)=>{n._col=f[o]}),s[a]=p}return s}const d=[...e];for(const a of["GK","DEF","MIL","ATT"]){const p=[];for(let n=0;n<i[a];n++){let o=d.findIndex(m=>m.job===a);if(o===-1&&(o=d.findIndex(m=>m.job2===a)),o===-1&&(o=0),d[o]){const m={...d[o],_line:a};p.push(m),d.splice(o,1)}}const f=lt(p.length);p.forEach((n,o)=>{n._col=f[o]}),s[a]=p}return s}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ri(e,t,i){const l=new Set,d=t.filter(o=>{const m=o.gc_type||o.id;return l.has(m)?!1:(l.add(m),!0)});let a=[];function p(o,m){const b=o._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},T={purple:"#9b59b6",light_blue:"#00bcd4"},r=g[b==null?void 0:b.color]||g.purple,c=T[b==null?void 0:b.color]||T.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${m?"#FFD700":c};background:${r};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${m?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${m?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((b==null?void 0:b.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(b==null?void 0:b.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${b!=null&&b.image_url?`<img src="/icons/${b.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((b==null?void 0:b.effect)||"").slice(0,50)}</span>
      </div>
      ${m?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const f=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function n(){var m,b,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=a.length>0;e.innerHTML=`
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
        ${d.map(T=>{const r=a.find(c=>c.gc_type===T.gc_type);return p(T,!!r)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(T=>{T.addEventListener("click",()=>{const r=T.dataset.id,c=d.find(L=>L.id===r);if(!c)return;const I=a.findIndex(L=>L.gc_type===c.gc_type);I>-1?a.splice(I,1):a.length<3&&a.push(c),n()})}),(m=e.querySelector("#gc-launch"))==null||m.addEventListener("click",()=>{o&&f(a)}),(b=e.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>f([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],n())})}n()}function Tn(e){var s;const t=((s=e==null?void 0:e.state)==null?void 0:s.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function An(e,t,i){const{state:s,navigate:l}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",s.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){wt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>l("decks"));return}const a=d.map(b=>b.id),{data:p}=await E.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),f=[...new Set((p||[]).filter(b=>{var g,T;return((g=b.card)==null?void 0:g.card_type)==="stadium"&&((T=b.card)==null?void 0:T.stadium_id)}).map(b=>b.card.stadium_id))],n={};if(f.length){const{data:b}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(b||[]).forEach(g=>{n[g.id]=g}),(p||[]).forEach(g=>{var T,r;((T=g.card)==null?void 0:T.card_type)==="stadium"&&((r=g.card)!=null&&r.stadium_id)&&(g.card._stadiumDef=n[g.card.stadium_id]||null)})}let o=0;function m(){var D,G,M,U,oe,de,N;const b=d[o],g=(p||[]).filter(W=>W.deck_id===b.id),T=g.filter(W=>{var K;return W.is_starter&&((K=W.card)==null?void 0:K.player)}).map(W=>mi(W.card,W.position)),r=g.find(W=>{var K;return((K=W.card)==null?void 0:K.card_type)==="formation"}),c=b.formation||((D=r==null?void 0:r.card)==null?void 0:D.formation)||"4-4-2";let I=T.length>=11?yt(T,c):null,L=((G=b.stadium_card)==null?void 0:G.stadium_def)||null;L&&I&&(I=Ht(I,L));const q=T.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Tn(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===0?"0.1":"0.3"});color:${o===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${b.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${c} · ${T.length}/11 ${b.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===d.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===d.length-1?"0.1":"0.3"});color:${o===d.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===d.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${L?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${L.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((M=L.club)==null?void 0:M.encoded_name)||L.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${I?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ft(I,c,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${T.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${d.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${d.map((W,K)=>`<div style="width:7px;height:7px;border-radius:50%;background:${K===o?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const K=e.querySelector(".deck-preview-wrap svg");K&&(K.removeAttribute("width"),K.removeAttribute("height"),K.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",K.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(U=document.getElementById("prev-deck"))==null||U.addEventListener("click",()=>{o>0&&(o--,m())}),(oe=document.getElementById("next-deck"))==null||oe.addEventListener("click",()=>{o<d.length-1&&(o++,m())}),(de=document.getElementById("validate-deck"))==null||de.addEventListener("click",()=>{if(!q)return;const W=t.state.params||{};t.navigate("match",{...W,matchMode:W.matchMode||i,deckId:b.id})}),(N=document.getElementById("cancel-deck-select"))==null||N.addEventListener("click",()=>{We(e),l("home")});const H=document.getElementById("deck-swipe-zone");if(H){let W=0,K=0;H.addEventListener("touchstart",P=>{W=P.touches[0].clientX,K=P.touches[0].clientY},{passive:!0}),H.addEventListener("touchend",P=>{const re=P.changedTouches[0].clientX-W,pe=P.changedTouches[0].clientY-K;Math.abs(re)<40||Math.abs(re)<Math.abs(pe)||(re<0&&o<d.length-1?(o++,m()):re>0&&o>0&&(o--,m()))},{passive:!0})}}m()}function ho(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ye(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const s=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),l=ho(e),d=e._line||e.job||"MIL",a=Mt[d]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",f=e.note!==void 0?Number(e.note)||0:(Number(je(e,d))||0)+(e.boost||0),n=vo(e==null?void 0:e.country_code),o=Math.round(i*.19),m=Math.round(i*.25),b=i-Math.round(i*.19)-Math.round(i*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${p};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${s&&!(e!=null&&e.used)?`<img src="${s}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${b}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${m}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Zt(e==null?void 0:e.country_code)?`<img src="${Zt(e.country_code)}" style="width:${m+2}px;height:${m-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${m-4}px">${n}</span>`}
      <span style="font-size:${m-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":f}</span>
      ${l?`<img src="${l}" style="width:${m-4}px;height:${m-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,m-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ot(e,t,i){if(!(e!=null&&e.length))return"";const s=e.slice(0,5);let l='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return s.forEach((d,a)=>{if(l+=Ye(d,40,52),a<s.length-1){const p=at(d,s[a+1]);l+=`<div style="width:7px;height:3px;background:${p==="#ff3333"||p==="#cc2222"?"rgba(255,255,255,0.12)":p};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(l+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),l+="</div>",l}function Zt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function vo(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ut(e,t,i,s,l=310,d=310,a=[]){var q;const p=Pt[t]||{},f=Wi(t)||hi[t]||[],n={},o=["ATT","MIL","DEF","GK"];for(const H of o)(e[H]||[]).forEach((G,M)=>{n[`${H}${M+1}`]=G});function m(H){const D=p[H];return D?{x:D.x*l,y:D.y*d}:null}let b="";for(const[H,D]of f){const G=m(H),M=m(D);if(!G||!M)continue;const U=n[H],oe=n[D],de=at(U,oe);de==="#00ff88"||de==="#FFD700"?(b+=`<line x1="${G.x.toFixed(1)}" y1="${G.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${de}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,b+=`<line x1="${G.x.toFixed(1)}" y1="${G.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${de}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):b+=`<line x1="${G.x.toFixed(1)}" y1="${G.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${de}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,T=64,r=13,c=16,I={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[H,D]of Object.entries(n)){const G=m(H);if(!G||!D)continue;const M=H.replace(/[0-9]/g,""),U=Mt[M]||"#555",oe=a.includes(D.cardId),de=i==="attack"&&(["MIL","ATT"].includes(M)||oe)&&!D.used||i==="defense"&&["GK","DEF","MIL"].includes(M)&&!D.used,N=s.includes(D.cardId);let W;i==="attack"?W=oe?Math.max(1,Number(D.note_a)||0):M==="MIL"?Number(D.note_m)||0:Number(D.note_a)||0:i==="defense"?W=M==="GK"?Number(D.note_g)||0:M==="MIL"?Number(D.note_m)||0:Number(D.note_d)||0:W=Number(M==="GK"?D.note_g:M==="DEF"?D.note_d:M==="MIL"?D.note_m:D.note_a)||0,W=W+(D.boost||0),D.stadiumBonus&&(i==="attack"&&(M==="ATT"||M==="MIL")||i==="defense"&&(M==="GK"||M==="DEF"||M==="MIL")?W+=10:i||(W+=10));const K=(G.x-g/2).toFixed(1),P=(G.y-T/2).toFixed(1),re=I[D==null?void 0:D.rarity]||I.normal;if(D.used){const Ae=typeof import.meta<"u"&&"/"||"/",xe=`${typeof window<"u"&&((q=window.location)==null?void 0:q.origin)||""}${Ae}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");b+=`<rect x="${K}" y="${P}" width="${g}" height="${T}" rx="5" fill="#161616"/>`,b+=`<image href="${xe}" xlink:href="${xe}" x="${K}" y="${P}" width="${g}" height="${T}" preserveAspectRatio="xMidYMid slice"/>`,b+=`<rect x="${K}" y="${P}" width="${g}" height="${T}" rx="5" fill="none" stroke="${re}" stroke-width="2" opacity="0.7"/>`,b+=`<rect x="${K}" y="${P}" width="${g}" height="${T}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${D.cardId}" data-role="${M}" style="cursor:pointer"/>`;continue}const pe=N?.45:1,ye=N?"#FFD700":re,Le=N?3:(D==null?void 0:D.rarity)==="legende"||(D==null?void 0:D.rarity)==="légende"||(D==null?void 0:D.rarity)==="pepite"||(D==null?void 0:D.rarity)==="pépite"?2.5:2,ve=T-r-c;b+=`<defs><clipPath id="cp-${H}"><rect x="${K}" y="${(G.y-T/2+r).toFixed(1)}" width="${g}" height="${ve}"/></clipPath></defs>`,b+=`<rect x="${K}" y="${P}" width="${g}" height="${T}" rx="5" fill="${U}" opacity="${pe}"/>`;const _e=Pe(D);_e&&(b+=`<image href="${_e}" xlink:href="${_e}" x="${K}" y="${(G.y-T/2+r).toFixed(1)}" width="${g}" height="${ve}" clip-path="url(#cp-${H})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${K}" y="${P}" width="${g}" height="${r}" rx="4" fill="rgba(255,255,255,0.92)"/>`,b+=`<text x="${G.x.toFixed(1)}" y="${(G.y-T/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(D.name||"").slice(0,9)}</text>`;const we=(G.y+T/2-c).toFixed(1);b+=`<rect x="${K}" y="${we}" width="${g}" height="${c}" fill="rgba(255,255,255,0.92)"/>`;{const Ae=Zt(D.country_code);Ae?b+=`<image href="${Ae}" xlink:href="${Ae}" x="${(G.x-20).toFixed(1)}" y="${(G.y+T/2-c+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:b+=`<text x="${(G.x-13).toFixed(1)}" y="${(G.y+T/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${vo(D.country_code)}</text>`;const Ie=D.stadiumBonus?"#E87722":"#111";b+=`<text x="${G.x.toFixed(1)}" y="${(G.y+T/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${Ie}" font-family="Arial Black">${W}</text>`;const xe=ho(D);xe?b+=`<image href="${xe}" xlink:href="${xe}" x="${(G.x+g/2-14).toFixed(1)}" y="${(G.y+T/2-c+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:D.clubName&&(b+=`<text x="${(G.x+14).toFixed(1)}" y="${(G.y+T/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(D.clubName||"").slice(0,3).toUpperCase()}</text>`),D.stadiumBonus&&(b+=`<rect x="${(G.x-g/2).toFixed(1)}" y="${(G.y-T/2).toFixed(1)}" width="${g}" height="${T}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}b+=`<rect x="${K}" y="${P}" width="${g}" height="${T}" rx="5" fill="${N?"rgba(255,255,255,0.12)":"none"}" stroke="${ye}" stroke-width="${Le}" opacity="${pe}"/>`,de&&(b+=`<rect x="${K}" y="${P}" width="${g}" height="${T}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${N?"selected":""}" data-card-id="${D.cardId}" data-role="${M}" style="cursor:pointer"/>`)}const L=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-L} ${-L} ${l+L*2} ${d+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${b}
  </svg>`}function ft(e,t,i,s,l=300,d=300,a=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ut(e,t,i,s,l,d,a)}
  </div>`}function dt(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function ai(e,t,i,s){var G;const{state:l,navigate:d,toast:a}=t;et(e);const p=l.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!p.deckId)return An(e,t,i);const f=p.deckId;let n,o,m,b;try{const M=await Promise.all([E.from("decks").select("formation,name,stadium_card_id").eq("id",f).single(),E.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",f).order("slot_order")]);n=M[0].data,m=M[0].error,o=M[1].data,b=M[1].error}catch(M){console.error("[Match] Exception chargement deck:",M),wt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(m||b){console.error("[Match] Erreur Supabase:",m||b),wt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const g=(o||[]).filter(M=>{var U;return M.is_starter&&((U=M.card)==null?void 0:U.player)}).map(M=>mi(M.card,M.position)),T=(o||[]).filter(M=>{var U;return!M.is_starter&&((U=M.card)==null?void 0:U.player)}).map(M=>mi(M.card,M.position));if(g.length<11){wt(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>d("decks"));return}const r=(o||[]).find(M=>{var U;return((U=M.card)==null?void 0:U.card_type)==="formation"}),c=(n==null?void 0:n.formation)||((G=r==null?void 0:r.card)==null?void 0:G.formation)||"4-4-2",{data:I,error:L}=await E.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",l.profile.id).eq("card_type","game_changer"),{data:q}=await E.from("gc_definitions").select("*").eq("is_active",!0),H=(I||[]).map(M=>({...M,_gcDef:(q==null?void 0:q.find(U=>U.name===M.gc_type||U.id===M.gc_definition_id))||null}));let D=null;if(n!=null&&n.stadium_card_id){const{data:M}=await E.from("cards").select("stadium_id").eq("id",n.stadium_card_id).single();if(M!=null&&M.stadium_id){const{data:U}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",M.stadium_id).single();D=U||null}}s({deckId:f,formation:c,starters:g,subsRaw:T,gcCardsEnriched:H,gcDefs:q||[],stadiumDef:D})}async function zn(e,t){const{state:i}=t,l=(i.params||{}).matchMode||"vs_ai_easy",d=l.replace("vs_ai_",""),a=l;await ai(e,t,l,async({deckId:p,formation:f,starters:n,subsRaw:o,gcCardsEnriched:m,gcDefs:b,stadiumDef:g})=>{try{let T=yt(n,f);g&&(T=Ht(T,g),oi(o,g));const r=await Sn(f,d),c=async I=>{try{const{data:L,error:q}=await E.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:p,status:"in_progress"}).select().single();if(q){console.error("[MatchIA] Erreur création match:",q),wt(e,"⚠️","Impossible de créer le match ("+q.message+").","Retour",()=>t.navigate("home"));return}const H={gcDefs:b||[],matchId:L==null?void 0:L.id,mode:a,difficulty:d,formation:f,homeTeam:T,aiTeam:r,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),homeScore:0,aiScore:0,gcCards:I,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};In(e,H,t)}catch(L){console.error("[MatchIA] Exception launchMatch:",L),wt(e,"⚠️","Erreur au lancement du match : "+L.message,"Retour",()=>t.navigate("home"))}};if(!m.length){c([]);return}ri(e,m,c)}catch(T){console.error("[MatchIA] Exception setup:",T),wt(e,"⚠️","Erreur de préparation du match : "+T.message,"Retour",()=>t.navigate("home"))}})}async function Sn(e,t){var a,p;const{data:i}=await E.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Ln(e);const s=It[e]||It["4-4-2"],l={GK:[],DEF:[],MIL:[],ATT:[]},d=[...i];for(const f of["GK","DEF","MIL","ATT"]){const n=d.filter(T=>T.job===f),o=d.filter(T=>T.job!==f),m=[...n,...o],b=[];for(let T=0;T<s[f];T++){const r=m[T]||d[T];r&&b.push({cardId:"ai-"+r.id+"-"+T,id:r.id,firstname:r.firstname,name:r.surname_encoded,country_code:r.country_code,club_id:r.club_id,job:r.job,job2:r.job2,note_g:Number(r.note_g)||0,note_d:Number(r.note_d)||0,note_m:Number(r.note_m)||0,note_a:Number(r.note_a)||0,rarity:r.rarity,skin:r.skin,hair:r.hair,hair_length:r.hair_length,clubName:((a=r.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((p=r.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:f})}const g=lt(b.length);b.forEach((T,r)=>{T._col=g[r]}),l[f]=b}return l}function Ln(e){const t=It[e]||It["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},s=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let l=0;for(const d of["GK","DEF","MIL","ATT"]){const a=[];for(let f=0;f<t[d];f++){const n=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+l,id:"fake-"+l,firstname:"IA",name:s[l%s.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?n:2,note_d:d==="DEF"?n:2,note_m:d==="MIL"?n:2,note_a:d==="ATT"?n:2,rarity:"normal",boost:0,used:!1,_line:d}),l++}const p=lt(a.length);a.forEach((f,n)=>{f._col=p[n]}),i[d]=a}return i}function In(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${ut(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Mn(e,t,i),5e3)}function Mn(e,t,i){const s=t.homeTeam.MIL||[],l=t.aiTeam.MIL||[];function d(r){return r.reduce((c,I)=>c+je(I,"MIL"),0)}function a(r){let c=0;for(let I=0;I<r.length-1;I++){const L=at(r[I],r[I+1]);L==="#00ff88"?c+=2:L==="#FFD700"&&(c+=1)}return c}const p=d(s)+a(s),f=d(l)+a(l),n=p>=f;function o(r,c,I,L){return`<div id="duel-row-${L}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${c}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((q,H)=>{const D=H<r.length-1?at(q,r[H+1]):null,G=!D||D==="#ff3333"||D==="#cc2222",M=D==="#00ff88"?"+2":D==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${L}" data-idx="${H}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ye({...q,note:je(q,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${H<r.length-1?`<div class="duel-link duel-link-${L}" data-idx="${H}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${G?"rgba(255,255,255,0.12)":D};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${G?"none":`0 0 8px ${D}`}">
            ${M?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${D}">${M}</span>`:""}
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

    ${o(l,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const m=()=>{const r=(c,I)=>e.querySelectorAll(c).forEach((L,q)=>{setTimeout(()=>{L.style.opacity="1",L.style.transform="translateY(0) scale(1)"},I+q*90)});r(".duel-card-home",150),r(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((c,I)=>{setTimeout(()=>{c.style.opacity="1"},I*70)}),900),setTimeout(()=>{const c=e.querySelector("#vs-label");c&&(c.style.opacity="1",c.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(I=>I.style.opacity="1")},1250),setTimeout(()=>{b("score-home",p,800),b("score-ai",f,800)},1500)};function b(r,c,I){const L=document.getElementById(r);if(!L)return;const q=performance.now(),H=D=>{const G=Math.min(1,(D-q)/I);L.textContent=Math.round(c*(1-Math.pow(1-G,3))),G<1?requestAnimationFrame(H):L.textContent=c};requestAnimationFrame(H)}requestAnimationFrame(m),t.attacker=n?"home":"ai";const g=n?ni():null;n&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:s.map(r=>({name:r.name,note:je(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:l.map(r=>({name:r.name,note:je(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:p,aiTotal:f,text:`Duel milieu : ${t.clubName} ${p} – ${f} IA → ${n?t.clubName+" attaque":"IA attaque"}`});const T=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Xe(e,t,i),t.attacker==="ai"&&setTimeout(()=>xi(e,t,i),800)};setTimeout(()=>{const r=document.getElementById("score-home"),c=document.getElementById("score-ai"),I=document.getElementById(n?"duel-row-home":"duel-row-ai"),L=document.getElementById(n?"duel-row-ai":"duel-row-home"),q=n?r:c,H=n?c:r;q&&(q.style.fontSize="80px",q.style.color=n?"#FFD700":"#ff6b6b",q.style.animation="duelPulse .5s ease"+(n?", duelGlow 1.5s ease infinite .5s":"")),H&&(H.style.opacity="0.25"),setTimeout(()=>{I&&(I.style.transformOrigin="center",I.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",I.style.zIndex="5"),setTimeout(()=>{var G;const D=document.getElementById("duel-shock");if(D){const M=(G=L||I)==null?void 0:G.getBoundingClientRect(),U=e.querySelector(".match-screen").getBoundingClientRect();M&&(D.style.top=M.top-U.top+M.height/2+"px"),D.style.animation="shockwave .5s ease-out forwards"}L&&(L.style.transformOrigin="center",L.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var G;const D=document.getElementById("duel-finale");D&&(D.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${n?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${n?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${g}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,D.style.transition="opacity .45s ease",D.style.opacity="1",D.style.pointerEvents="auto",(G=document.getElementById("start-match-btn"))==null||G.addEventListener("click",T))},600)},700)},2800)}function jn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Xe(e,t,i){var q,H,D,G,M,U,oe,de;const s=t.selected.map(N=>N.cardId),l=t.usedSubIds||[],d=t.homeSubs.filter(N=>!l.includes(N.cardId)),p=Object.values(t.homeTeam).flat().filter(N=>N.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,f=!["GK","DEF","MIL","ATT"].some(N=>(t.aiTeam[N]||[]).some(W=>!W.used)),n=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(N=>!N.used),o=t.phase==="attack"&&f&&n.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(N=>!N.used).map(N=>N.cardId):[];t.log[t.log.length-1];const m=t.phase==="ai-attack"||t.phase==="ai-defense",b=t.phase==="attack",g=t.phase==="defense",T=t.phase==="finished",r=t.gcCards.filter(N=>!t.usedGc.includes(N.id)),c=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const W=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ot((W.players||[]).map(K=>({...K,used:!1})),"#ff6b6b",W.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const W=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ot((W.players||[]).map(K=>({...K,used:!1})),"#00ff88",W.total)}
          </div>`}const N=t.log[t.log.length-1];return N?'<div style="padding:2px 4px">'+jn(N)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const N=window.innerWidth>=700,W=(we,Ae,Ie)=>{var be,ze;const xe=(t.gcDefs||[]).find(j=>j.name===we.gc_type),X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[xe==null?void 0:xe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ne={purple:"#b06ce0",light_blue:"#00d4ef"}[xe==null?void 0:xe.color]||"#b06ce0",ge=(xe==null?void 0:xe.name)||we.gc_type,J=(xe==null?void 0:xe.effect)||((be=Ve[we.gc_type])==null?void 0:be.desc)||"",Z=xe!=null&&xe.image_url?`/icons/${xe.image_url}`:null,V=((ze=Ve[we.gc_type])==null?void 0:ze.icon)||"⚡",se=Math.round(Ie*.22),he=Math.round(Ie*.22),Se=Ie-se-he,Me=ge.length>12?7:9;return`<div class="gc-mini" data-gc-id="${we.id}" data-gc-type="${we.gc_type}"
          style="box-sizing:border-box;width:${Ae}px;height:${Ie}px;border-radius:10px;border:2px solid ${ne};background:${X};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${se}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Me}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Ae-6}px">${ge}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Se}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Z?`<img src="${Z}" style="max-width:${Ae-10}px;max-height:${Se-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Se*.55)}px">${V}</span>`}
          </div>
          <div style="height:${he}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${J.slice(0,38)}</span>
          </div>
        </div>`},K=(we,Ae)=>{var Ie;return`<div id="boost-card"
          style="box-sizing:border-box;width:${we}px;height:${Ae}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ae*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Ae*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Ae*.09)}px;color:#000;font-weight:900">+${(Ie=t.boostCard)==null?void 0:Ie.value}</div>
          </div>`},P=(we,Ae)=>Ae?K(130,175):W(we,130,175),re=(we,Ae)=>Ae?K(68,95):W(we,68,95),pe=N?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ye=T?`<button id="btn-results" style="${pe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:m?`<div style="${pe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:b?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${pe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Le=b||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",ve=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${N?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${d.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':d.map(we=>`<div class="sub-btn-col" data-sub-id="${we.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(we,76,100)}</div>`).join("")}
      </div>`,_e=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ft(t.homeTeam,t.formation,t.phase,s,300,300,o)}
        </div>
      </div>`;return N?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${ve}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${_e}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ye}${Le}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${r.map(we=>P(we,!1)).join("")}
            ${c?P(null,!0):""}
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
            ${r.map(we=>re(we,!1)).join("")}
            ${c?re(null,!0):""}
            <div id="sub-btn-main" style="cursor:${p?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${p?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${p?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${p?1:.4}">
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(N=>{var W,K,P;if(N.type==="duel"){const re=N.isGoal,pe=N.homeScored?"#FFD700":re?"#ff6b6b":"rgba(255,255,255,0.3)",ye=N.homeScored?"⚽ BUT !":re?"⚽ BUT IA !":(W=N.homePlayers)!=null&&W.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${re?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${pe};margin-bottom:4px">
                <div style="font-size:9px;color:${pe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ye}</div>
                ${(K=N.homePlayers)!=null&&K.length?`<div style="margin-bottom:3px">${ot(N.homePlayers,"rgba(255,255,255,0.7)",N.homeTotal)}</div>`:""}
                ${(P=N.aiPlayers)!=null&&P.length?`<div style="opacity:0.7">${ot(N.aiPlayers,"#ff6b6b",N.aiTotal)}</div>`:""}
              </div>`}return N.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${N.outPlayer?Ye({...N.outPlayer,used:!0,_line:N.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${N.inPlayer?Ye({...N.inPlayer,_line:N.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:N.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${N.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${N.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function I(){const N=e.querySelector(".match-screen");if(!N)return;const W=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);N.style.bottom="auto",N.style.height=W+"px",N.style.minHeight=W+"px",N.style.maxHeight=W+"px",N.style.overflow="hidden";const K=e.querySelector("#mobile-action-bar"),P=e.querySelector("#mobile-play-area");K&&P&&(P.style.paddingBottom=K.offsetHeight+"px")}if(I(),setTimeout(I,120),setTimeout(I,400),setTimeout(I,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",I),window.visualViewport.addEventListener("scroll",I)),window.addEventListener("resize",I)),function(){const W=e.querySelector(".terrain-wrapper svg");W&&(W.removeAttribute("width"),W.removeAttribute("height"),W.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",W.setAttribute("viewBox","-26 -26 352 352"),W.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const N=e.querySelector(".terrain-wrapper svg");N&&(N.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let N=!1,W=30;const K=()=>document.getElementById("match-timer"),P=()=>{const re=K();if(!re)return;const pe=String(Math.floor(W/60)).padStart(2,"0"),ye=String(W%60).padStart(2,"0");re.textContent=` ${pe}:${ye}`,re.style.color=N?"#ff2222":"#ff9500",re.style.fontWeight="900"};P(),t._timerInt=setInterval(()=>{if(W--,W<0)if(!N)N=!0,W=15,P();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const re=document.createElement("div");re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",re.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(re),setTimeout(()=>{re.remove(),Bt(e,t,i)},2500)}else P()},1e3)}(q=document.getElementById("match-quit"))==null||q.addEventListener("click",()=>{We(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Bt(e,t,i))}),(H=document.getElementById("view-ai"))==null||H.addEventListener("click",()=>On(t,i)),(D=document.getElementById("toggle-history"))==null||D.addEventListener("click",()=>{var N;(N=document.getElementById("match-history-panel"))==null||N.classList.add("open")}),(G=document.getElementById("close-history"))==null||G.addEventListener("click",()=>{var N;(N=document.getElementById("match-history-panel"))==null||N.classList.remove("open")}),(M=document.getElementById("btn-action"))==null||M.addEventListener("click",()=>{t.selected.length!==0&&(b?qn(e,t,i):g&&Bn(e,t,i))}),(U=document.getElementById("btn-results"))==null||U.addEventListener("click",()=>Bt(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(N=>{N.addEventListener("click",()=>Cn(N,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(N=>{N.addEventListener("click",()=>li(e,t,i,null,N.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(N=>{N.addEventListener("click",()=>Gn(N.dataset.gcId,N.dataset.gcType,e,t,i))}),(oe=document.getElementById("boost-card"))==null||oe.addEventListener("click",()=>Rn(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(N=>{N.addEventListener("click",()=>li(e,t,i,N.dataset.subId))}),(de=document.getElementById("sub-btn-main"))==null||de.addEventListener("click",()=>li(e,t,i))}function Cn(e,t,i,s){const l=e.dataset.cardId,d=e.dataset.role,a=t.selected.findIndex(p=>p.cardId===l);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){s.toast("Maximum 3 joueurs","error");return}const p=(t.homeTeam[d]||[]).find(f=>f.cardId===l);p&&t.selected.push({...p,_role:d,_line:d})}Xe(i,t,s)}function Ai(e,t,i){e.matchId&&E.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function qn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ai(t,i,i.state.profile.id);const s=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(p=>!p.used)),l=t.selected.map(a=>{const p=(t.homeTeam[a._role]||[]).find(n=>n.cardId===a.cardId)||a,f=s&&["GK","DEF"].includes(a._role);return{...p,_line:a._role,...f?{note_a:Math.max(1,Number(p.note_a)||0)}:{}}}),d=Nt(l,t.modifiers.home);t.pendingAttack={...d,players:[...l],side:"home"},t.selected.forEach(a=>{const p=(t.homeTeam[a._role]||[]).find(f=>f.cardId===a.cardId);p&&(p.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Xe(e,t,i),setTimeout(()=>Fn(e,t,i),1200)}function Bn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ai(t,i,i.state.profile.id);const s=t.selected.map(p=>({...(t.homeTeam[p._role]||[]).find(n=>n.cardId===p.cardId)||p,_line:p._role})),l=Rt(s,t.modifiers.home);t.selected.forEach(p=>{const f=(t.homeTeam[p._role]||[]).find(n=>n.cardId===p.cardId);f&&(f.used=!0)});const d=Ot(t.pendingAttack.total,l.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(p=>({name:p.name,note:p._line==="MIL"?p.note_m:p.note_a,portrait:Pe(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homePlayers:t.selected.map(p=>{const f=(t.homeTeam[p._role]||[]).find(n=>n.cardId===p.cardId)||p;return{name:f.name,note:(f._line==="GK"?Number(f.note_g)||0:f._line==="MIL"?Number(f.note_m)||0:Number(f.note_d)||0)+(f.boost||0),portrait:Pe(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo}}),homeTotal:l.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(d.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${l.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Xe(e,t,i),Qt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${l.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,zt(e,t,i,"home-attack")}function xi(e,t,i){Ai(t,i,null);const s=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],l=io(s,"attack",t.difficulty);if(!l.length){Jt(e,t,i);return}const d=Nt(l,t.modifiers.ai);t.pendingAttack={...d,players:l,side:"ai"},l.forEach(n=>{n.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${l.map(n=>n.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used),f=(t.homeSubs||[]).filter(n=>!(t.usedSubIds||[]).includes(n.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!f){t.aiScore++;const n={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:l.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Pe(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(n),t.pendingAttack=null,Xe(e,t,i),Qt(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}t.phase="defense",Xe(e,t,i)}function Fn(e,t,i){var n,o;const s=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],l=io(s,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(m=>(t.aiTeam[m]||[]).filter(b=>!b.used)).length){t.homeScore++;const b={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((n=t.pendingAttack)==null?void 0:n.players)||[]).map(g=>({name:g.name,note:je(g,g._line||g.job),portrait:Pe(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(b),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),Qt(b.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}const a=l.length>0?Rt(l,t.modifiers.ai).total:0;l.forEach(m=>{m.used=!0});const p=Ot(t.pendingAttack.total,a,t.modifiers.ai),f={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(m=>({name:m.name,note:m._line==="MIL"?m.note_m:m.note_a,portrait:Pe(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),aiPlayers:l.map(m=>({name:m.name,note:m._line==="GK"?m.note_g:m._line==="MIL"?m.note_m:m.note_d,portrait:Pe(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(p.shielded)f.text="🛡️ Bouclier IA !",t.log.push(f);else if(p.goal){t.homeScore++,f.isGoal=!0,f.homeScored=!0,f.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),Qt(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}else f.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(f);t.modifiers.ai={},t.pendingAttack=null,zt(e,t,i,"ai-attack")}function zt(e,t,i,s){if(t.round++,wo(t)){Bt(e,t,i);return}if(s==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(p=>!p.used).length){Jt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(p=>!p.used).length){Jt(e,t,i);return}setTimeout(()=>xi(e,t,i),100);return}t.phase="attack",Xe(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Jt(e,t,i);return}t.phase="ai-attack",Xe(e,t,i),setTimeout(()=>xi(e,t,i),800)}}function wo(e){const t=["MIL","ATT","GK","DEF"].some(s=>(e.homeTeam[s]||[]).some(l=>!l.used)),i=["MIL","ATT","GK","DEF"].some(s=>(e.aiTeam[s]||[]).some(l=>!l.used));return!t&&!i}function Jt(e,t,i){wo(t)?Bt(e,t,i):(t.phase="attack",Xe(e,t,i))}function Dn(e,t,i){const s=document.createElement("div");s.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const l=Pe(e),d=Pe(t),a=Mt[e.job]||"#555",p=Mt[t.job]||"#555",f=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,n=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;s.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${a};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${l?`<img src="${l}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${f}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${p};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${n}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(s);let o=!1;const m=()=>{o||(o=!0,s.remove(),i())};s.addEventListener("click",m),setTimeout(m,2e3)}function jt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function li(e,t,i,s=null,l=null){var g,T;if(t.phase!=="attack"){jt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){jt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([r,c])=>(c||[]).filter(I=>I.used).map(I=>({...I,_line:I._line||r}))),a=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!d.length){jt("Aucun joueur utilisé à remplacer");return}if(!a.length){jt("Aucun remplaçant disponible");return}let p=Math.max(0,d.findIndex(r=>r.cardId===l));const f=((g=d[p])==null?void 0:g._line)||((T=d[p])==null?void 0:T.job);let n=s?Math.max(0,a.findIndex(r=>r.cardId===s)):Math.max(0,a.findIndex(r=>r.job===f)),o=!1;const m=document.createElement("div");m.id="sub-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var D,G,M,U,oe,de;const r=d[p],c=a[n],I=Math.min(130,Math.round((window.innerWidth-90)/2)),L=Math.round(I*1.35),q=N=>`background:rgba(255,255,255,0.12);border:none;color:${N?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${N?"default":"pointer"};flex-shrink:0`;m.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${q(n===0)}" ${n===0?"disabled":""}>▲</button>
        <div>${c?Ye({...c,used:!1,boost:0},I,L):"<div>—</div>"}</div>
        <button id="in-down" style="${q(n>=a.length-1)}" ${n>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${n+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${q(p===0)}" ${p===0?"disabled":""}>▲</button>
        <div>${r?Ye({...r,used:!1,boost:0},I,L):"<div>—</div>"}</div>
        <button id="out-down" style="${q(p>=d.length-1)}" ${p>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${p+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(D=m.querySelector("#sub-close"))==null||D.addEventListener("click",()=>m.remove()),(G=m.querySelector("#out-up"))==null||G.addEventListener("click",()=>{p>0&&(p--,b())}),(M=m.querySelector("#out-down"))==null||M.addEventListener("click",()=>{p<d.length-1&&(p++,b())}),(U=m.querySelector("#in-up"))==null||U.addEventListener("click",()=>{n>0&&(n--,b())}),(oe=m.querySelector("#in-down"))==null||oe.addEventListener("click",()=>{n<a.length-1&&(n++,b())});const H=(N,W,K,P)=>{const re=m.querySelector("#"+N);if(!re)return;let pe=0;re.addEventListener("touchstart",ye=>{pe=ye.touches[0].clientY},{passive:!0}),re.addEventListener("touchend",ye=>{const Le=ye.changedTouches[0].clientY-pe;if(Math.abs(Le)<30)return;const ve=W();Le<0&&ve<P-1?(K(ve+1),b()):Le>0&&ve>0&&(K(ve-1),b())},{passive:!0})};H("in-panel",()=>n,N=>n=N,a.length),H("out-panel",()=>p,N=>p=N,d.length),(de=m.querySelector("#sub-confirm"))==null||de.addEventListener("click",N=>{if(N.preventDefault(),N.stopPropagation(),o)return;o=!0;const W=d[p],K=a[n];if(!W||!K)return;let P=null,re=-1;for(const[ye,Le]of Object.entries(t.homeTeam)){const ve=(Le||[]).findIndex(_e=>_e.cardId===W.cardId);if(ve!==-1){P=ye,re=ve;break}}if(re===-1||!P){jt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),m.remove();return}const pe={...K,_line:P,_col:W._col||0,used:!1,boost:0};t.homeTeam[P].splice(re,1,pe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(K.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:W.name,firstname:W.firstname,note:je(W,P),portrait:Pe(W),job:W.job,country_code:W.country_code,rarity:W.rarity,clubName:W.clubName,clubLogo:W.clubLogo},inPlayer:{name:K.name,firstname:K.firstname,note:je(K,P),portrait:Pe(K),job:K.job,country_code:K.country_code,rarity:K.rarity,clubName:K.clubName,clubLogo:K.clubLogo},text:`🔄 ${K.firstname} ${K.name} remplace ${W.firstname} ${W.name}`}),m.remove(),Dn(W,K,()=>Xe(e,t,i))})}document.body.appendChild(m),b()}function Gn(e,t,i,s,l){var T,r;const d=(s.gcDefs||[]).find(c=>c.name===t),a=Ve[t]||{icon:"⚡",desc:"Carte spéciale."},p={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",f={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",n=(d==null?void 0:d.name)||t,o=(d==null?void 0:d.effect)||a.desc,m=d!=null&&d.image_url?`/icons/${d.image_url}`:null,b=a.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${f};background:${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${f}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${n.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${n}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${m?`<img src="${m}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${b}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(g),(T=g.querySelector("#gc-back"))==null||T.addEventListener("click",()=>g.remove()),(r=g.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{g.remove(),Nn(e,t,i,s,l)})}function Yt(e,t,i,s,l,d){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let p=[];function f(){var n,o;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${p.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(m=>{const b=m._line||m.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b]||"#555",T=je(m,b)+(m.boost||0),r=p.find(c=>c.cardId===m.cardId);return`<div class="gc-pick-item" data-cid="${m.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${r?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${m.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${m.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${T}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${b}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${p.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${p.length}/${t})
      </button>
    </div>`,(n=a.querySelector("#gc-picker-close"))==null||n.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.cid,g=e.find(r=>r.cardId===b);if(!g)return;const T=p.findIndex(r=>r.cardId===b);T>-1?p.splice(T,1):p.length<t&&p.push(g),f()})}),(o=a.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{a.remove(),d(p)})}f(),document.body.appendChild(a)}const Pn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},s,l,d)=>{const a=Object.entries(s.homeTeam).filter(([p])=>!i.length||i.includes(p)).flatMap(([p,f])=>f.filter(n=>!n.used).map(n=>({...n,_line:p})));return a.length?(Yt(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,l,s,p=>{p.forEach(f=>{const n=(s.homeTeam[f._line]||[]).find(o=>o.cardId===f.cardId);n&&(n.boost=(n.boost||0)+e,s.log.push({text:`⚡ +${e} sur ${n.name}`,type:"info"}))}),Xe(l,s,d)}),!0):(s.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Xe(l,s,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:s="ai"},l,d,a)=>{const p=s==="home"?l.homeTeam:l.aiTeam,f=s==="ai"?"adverse":"allié",n=Object.entries(p).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,m])=>m.filter(b=>!b.used).map(b=>({...b,_line:o})));return n.length?(Yt(n,t,`Choisir ${t} joueur(s) ${f}(s) à débuffer (-${e})`,d,l,o=>{o.forEach(m=>{const g=((s==="home"?l.homeTeam:l.aiTeam)[m._line]||[]).find(T=>T.cardId===m.cardId);g&&(g.boost=(g.boost||0)-e,l.log.push({text:`🎯 -${e} sur ${g.name}${s==="ai"?" (IA)":""}`,type:"info"}))}),Xe(d,l,a)}),!0):(l.log.push({text:`🎯 Aucun joueur ${f} disponible`,type:"info"}),Xe(d,l,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},s,l,d)=>{const a=i==="home"?s.homeTeam:s.aiTeam,p=i==="ai"?"adverse":"allié",f=Object.entries(a).filter(([n])=>!t.length||t.includes(n)).flatMap(([n,o])=>o.filter(m=>!m.used).map(m=>({...m,_line:n})));return f.length?(Yt(f,e,`Choisir ${e} joueur(s) ${p}(s) à exclure`,l,s,n=>{n.forEach(o=>{const b=((i==="home"?s.homeTeam:s.aiTeam)[o._line]||[]).find(g=>g.cardId===o.cardId);b&&(b.used=!0,s.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Xe(l,s,d)}),!0):(s.log.push({text:`❌ Aucun joueur ${p} à exclure`,type:"info"}),Xe(l,s,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,s,l)=>{const d=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,p])=>p.filter(f=>f.used).map(f=>({...f,_line:a})));return d.length?(Yt(d,e,`Choisir ${e} joueur(s) à ressusciter`,s,i,a=>{a.forEach(p=>{const f=(i.homeTeam[p._line]||[]).find(n=>n.cardId===p.cardId);f&&(f.used=!1,i.log.push({text:`💫 ${f.name} ressuscité !`,type:"info"}))}),Xe(s,i,l)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Xe(s,i,l),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Nn(e,t,i,s,l){s.usedGc.push(e);const d=s.gcDefs||[],a=d.find(f=>f.name===t)||d.find(f=>{var n;return((n=f.name)==null?void 0:n.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let p=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const f=Pn[a.effect_type];f?f(a.effect_params||{},s,i,l)||(p=!0):(l.toast(`Effet "${a.effect_type}" non implémenté`,"error"),p=!0)}else{switch(t){case"Double attaque":s.modifiers.home.doubleAttack=!0,s.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":s.modifiers.home.shield=!0,s.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const f=Object.entries(s.homeTeam).flatMap(([n,o])=>(o||[]).filter(m=>m.used).map(m=>({...m,_line:n})));f.length?(f[0].used=!1,s.log.push({text:`💫 ${f[0].name} ressuscité !`,type:"info"})):s.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":s.modifiers.ai.stolenNote=(s.modifiers.ai.stolenNote||0)+1,s.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const f=[...s.aiTeam.ATT||[],...s.aiTeam.MIL||[]].filter(n=>!n.used);if(f.length){const n=f.sort((o,m)=>je(m,"ATT")-je(o,"ATT"))[0];n.used=!0,s.log.push({text:`❄️ ${n.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":s.maxSubs++,s.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}p=!0}E.from("cards").delete().eq("id",e).then(()=>{}),p&&Xe(i,s,l)}function Rn(e,t,i){const s=Object.values(t.homeTeam).flat().filter(l=>!l.used);if(!s.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${s.map(l=>`
        <div class="player-boost-opt" data-card-id="${l.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Mt[l.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${je(l,l._line||l.job)}</div>
          <div style="flex:1"><b>${l.firstname} ${l.name}</b><div style="font-size:11px;color:#888">${l._line||l.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const p=(t.homeTeam[a]||[]).find(f=>f.cardId===d);if(p){p.boost=(p.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${p.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Xe(e,t,i)})})}function Qt(e,t,i,s,l){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(n,o)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${Mt[n.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${n.portrait?`<img src="${n.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(n.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let p=!1;const f=()=>{p||(p=!0,d.remove(),setTimeout(()=>l(),50))};d.addEventListener("click",f),setTimeout(f,3500)}async function Bt(e,t,i){var o,m;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:s}=i,l=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,a=l?"victoire":d?"nul":"defaite",p=Vo(t.mode,a);t.matchId&&await E.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:l?s.profile.id:null,home_credits_reward:p,played_at:new Date().toISOString()}).eq("id",t.matchId);const f={credits:(s.profile.credits||0)+p,matches_played:(s.profile.matches_played||0)+1};l?f.wins=(s.profile.wins||0)+1:d?f.draws=(s.profile.draws||0)+1:f.losses=(s.profile.losses||0)+1,await E.from("users").update(f).eq("id",s.profile.id),await i.refreshProfile();const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",n.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${l?"🏆":d?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${l?"Victoire !":d?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${p.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(n),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{n.remove(),We(e),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",()=>{n.remove(),We(e),i.navigate("match",{matchMode:t.mode})})}function On(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ut(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function _o(e,t){var i,s;try{const l=(s=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:s.id;try{(E.getChannels?E.getChannels():[]).forEach(a=>{const p=a.topic||"";(p.includes("matchmaking")||p.includes("pvp-match")||p.includes("friend-invite"))&&E.removeChannel(a)})}catch(d){console.warn("[Random] cleanup canaux:",d)}l&&await E.rpc("cancel_matchmaking",{p_user_id:l}).catch(()=>{})}catch{}await ai(e,t,"random",({deckId:l,formation:d,starters:a,subsRaw:p,gcCardsEnriched:f,gcDefs:n,stadiumDef:o})=>{const m=b=>Hn(e,t,l,d,a,p,b,n||[],o);if(!f.length){m([]);return}ri(e,f,m)})}async function Hn(e,t,i,s,l,d,a=[],p=[],f=null){var q;const{state:n,navigate:o,toast:m}=t;let b=!1,g=null;et(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const T=async(H=!0)=>{b=!0,g&&(E.removeChannel(g),g=null),H&&await E.rpc("cancel_matchmaking",{p_user_id:n.profile.id}).catch(()=>{})};(q=document.getElementById("mm-cancel"))==null||q.addEventListener("click",async()=>{try{await T(!0)}catch{}We(e),o("home")});const r=async(H,D,G)=>{if(b)return;b=!0,g&&(E.removeChannel(g),g=null);const M=document.getElementById("mm-status");M&&(M.textContent="Adversaire trouvé !"),await new Promise(U=>setTimeout(U,600)),e.isConnected&&$o(e,t,H,G,a,p)},{data:c,error:I}=await E.rpc("try_matchmake",{p_user_id:n.profile.id,p_deck_id:i});if(I||!(c!=null&&c.success)){m("Erreur de matchmaking","error"),We(e),o("home");return}if(c.matched){r(c.match_id,c.opponent_id,!1);return}const L=document.getElementById("mm-status");L&&(L.textContent="En attente d'un autre joueur..."),g=E.channel("matchmaking-"+n.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${n.profile.id}`},H=>{const D=H.new;D.status==="matched"&&D.match_id&&r(D.match_id,D.matched_with,!0)}).subscribe()}async function Un(e,t,i){const{state:s,navigate:l,toast:d}=t;try{(E.getChannels?E.getChannels():[]).forEach(n=>{const o=n.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&E.removeChannel(n)})}catch{}const{data:a}=await E.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!a){d("Match introuvable","error"),l("home");return}if(a.status==="finished"){d("Ce match est terminé","info"),l("home");return}const p=a.home_id===s.profile.id;$o(e,t,i,p,[],[])}async function $o(e,t,i,s,l=[],d=[]){const{state:a,navigate:p,toast:f}=t,n=s?"p1":"p2",o=s?"p2":"p1",m=(l||[]).map(j=>j.id),b=(l||[]).map(j=>({id:j.id,gc_type:j.gc_type,_gcDef:j._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await E.from("matches").select("*").eq("id",i).single();if(!g){f("Match introuvable","error"),p("home");return}async function T(){const[{data:j},{data:B},{data:w},{data:k}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),u=A=>{const S=Number(A.evolution_bonus)||0;return{cardId:A.card_id,position:A.position,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:(Number(A.note_g)||0)+(A.job==="GK"||A.job2==="GK"&&Number(A.note_g)>0?S:0),note_d:(Number(A.note_d)||0)+(A.job==="DEF"||A.job2==="DEF"&&Number(A.note_d)>0?S:0),note_m:(Number(A.note_m)||0)+(A.job==="MIL"||A.job2==="MIL"&&Number(A.note_m)>0?S:0),note_a:(Number(A.note_a)||0)+(A.job==="ATT"||A.job2==="ATT"&&Number(A.note_a)>0?S:0),evolution_bonus:S,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:A.club_encoded_name||null,clubLogo:A.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},x=((j==null?void 0:j.starters)||[]).map(A=>u(A)),y=((B==null?void 0:B.starters)||[]).map(A=>u(A)),h=(j==null?void 0:j.formation)||"4-4-2",v=(B==null?void 0:B.formation)||"4-4-2";let _=yt(x,h),z=yt(y,v);const $=((j==null?void 0:j.subs)||[]).map(A=>u(A));return stadiumDef&&s&&(_=Ht(_,stadiumDef),oi($,stadiumDef)),{p1Team:_,p2Team:z,p1Subs:$,p2Subs:((B==null?void 0:B.subs)||[]).map(A=>u(A)),p1Formation:h,p2Formation:v,p1Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 1",p2Name:(k==null?void 0:k.club_name)||(k==null?void 0:k.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?m:[],gc_p2:s?[]:m,gcCardsFull_p1:s?b:[],gcCardsFull_p2:s?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!r)if(s){r=await T();const{data:j}=await E.from("matches").select("game_state").eq("id",i).single();!(j!=null&&j.game_state)||!Object.keys(j.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:g.home_id}).eq("id",i):r=j.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let j=0;j<30&&!r;j++){await new Promise(w=>setTimeout(w,400));const{data:B}=await E.from("matches").select("game_state").eq("id",i).single();B!=null&&B.game_state&&Object.keys(B.game_state).length&&(r=B.game_state)}if(!r){f("Erreur de synchronisation","error"),p("home");return}r.gc_p2=m,r.gcCardsFull_p2=b,await E.from("matches").update({game_state:r}).eq("id",i)}let c=!1,I=null,L=!1;const q=new Set,H=new Set;function D(j){var _,z;try{E.removeChannel(G)}catch{}const B=r[n+"Score"]||0,w=r[o+"Score"]||0;let k,u;j.winner_id?(k=j.winner_id===a.profile.id,u=!1):j.forfeit?(k=B>w,u=!1):(u=B===w,k=B>w),(_=document.getElementById("pvp-end-overlay"))==null||_.remove();const x=document.createElement("div");x.id="pvp-end-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const y=u?"🤝":k?"🏆":"😞",h=u?"MATCH NUL":k?"VICTOIRE !":"DÉFAITE",v=u?"#fff":k?"#FFD700":"#ff6b6b";x.innerHTML=`
      <div style="font-size:64px">${y}</div>
      <div style="font-size:26px;font-weight:900;color:${v}">${h}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${B} – ${w} ${r[o+"Name"]}</div>
      ${j.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${k?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(x),(z=x.querySelector("#pvp-end-home"))==null||z.addEventListener("click",()=>{x.remove(),We(e),p("home")})}const G=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},j=>{const B=j.new;try{if(B.status==="finished"||B.forfeit){if(c)return;c=!0,I&&(clearInterval(I),I=null),B.game_state&&(r=B.game_state),D(B);return}if(B.game_state){const w=r;r=B.game_state;const k=r._lastGC;if(k&&k.seq&&!H.has(k.seq)&&(H.add(k.seq),k.by!==n)){ve(k.type,k.by,()=>P());return}const u=w[n+"Score"]||0,x=w[o+"Score"]||0,y=r[n+"Score"]||0,h=r[o+"Score"]||0,v=y>u,_=h>x;if((v||_)&&!q.has(r.round)){q.add(r.round);const z=[...r.log||[]].reverse().find(A=>A.isGoal),$=((z==null?void 0:z.homePlayers)||[]).map(A=>({name:A.name,note:A.note,portrait:A.portrait,job:A.job}));Le($,y,h,v,()=>P());return}P()}}catch(w){console.error("[PvP] crash:",w)}}).subscribe();async function M(j){Object.assign(r,j),r.lastActionAt=new Date().toISOString();const{error:B}=await E.from("matches").update({game_state:r}).eq("id",i);B&&f("Erreur de synchronisation","error");try{P()}catch(w){console.error("[PvP] renderPvpScreen crash:",w)}}async function U(){if(c)return;c=!0,I&&(clearInterval(I),I=null);const j=s?g.away_id:g.home_id,B=s?"p2":"p1",w=s?"p1":"p2",k={...r,[B+"Score"]:3,[w+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:j,home_score:k.p1Score||0,away_score:k.p2Score||0,game_state:k}).eq("id",i)}catch{}try{E.removeChannel(G)}catch{}setTimeout(()=>{We(e),p("home")},800)}const oe={BOOST_STAT:({value:j=1,count:B=1,roles:w=[]},k,u)=>{const x=k[n+"Team"],y=Object.entries(x).filter(([h])=>!w.length||w.includes(h)).flatMap(([h,v])=>v.filter(_=>!_.used).map(_=>({..._,_line:h})));if(!y.length){k.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),u(k);return}de(y,B,`Choisir ${B} joueur(s) à booster (+${j})`,h=>{h.forEach(v=>{const _=(x[v._line]||[]).find(z=>z.cardId===v.cardId);_&&(_.boost=(_.boost||0)+j,k.log.push({text:`⚡ +${j} sur ${_.name}`,type:"info"}))}),k[n+"Team"]=x,u(k)})},DEBUFF_STAT:({value:j=1,count:B=1,roles:w=[],target:k="ai"},u,x)=>{const y=k==="home"?n:o,h=u[y+"Team"],v=k==="home"?"allié":"adverse",_=Object.entries(h).filter(([z])=>!w.length||w.includes(z)).flatMap(([z,$])=>$.map(A=>({...A,_line:z})));if(!_.length){u.log.push({text:`🎯 Aucun joueur ${v}`,type:"info"}),x(u);return}de(_,B,`Choisir ${B} joueur(s) ${v}(s) (-${j})`,z=>{z.forEach($=>{const A=(h[$._line]||[]).find(S=>S.cardId===$.cardId);A&&(A.boost=(A.boost||0)-j,u.log.push({text:`🎯 -${j} sur ${A.name}`,type:"info"}))}),u[y+"Team"]=h,x(u)})},GRAY_PLAYER:({count:j=1,roles:B=[],target:w="ai"},k,u)=>{const x=w==="home"?n:o,y=k[x+"Team"],h=w==="home"?"allié":"adverse",v=Object.entries(y).filter(([_])=>!B.length||B.includes(_)).flatMap(([_,z])=>z.filter($=>!$.used).map($=>({...$,_line:_})));if(!v.length){k.log.push({text:`❌ Aucun joueur ${h}`,type:"info"}),u(k);return}de(v,j,`Choisir ${j} joueur(s) ${h}(s) à exclure`,_=>{const z="usedCardIds_"+x,$=new Set(k[z]||[]);_.forEach(A=>{const S=(y[A._line]||[]).find(C=>C.cardId===A.cardId);S&&(S.used=!0,$.add(A.cardId),k.log.push({text:`❌ ${S.name} exclu !`,type:"info"}))}),k[z]=[...$],k[x+"Team"]=y,u(k)})},REVIVE_PLAYER:({count:j=1,roles:B=[]},w,k)=>{const u=w[n+"Team"],x=Object.entries(u).filter(([y])=>!B.length||B.includes(y)).flatMap(([y,h])=>h.filter(v=>v.used).map(v=>({...v,_line:y})));if(!x.length){w.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),k(w);return}de(x,j,`Choisir ${j} joueur(s) à ressusciter`,y=>{y.forEach(h=>{const v=(u[h._line]||[]).find(_=>_.cardId===h.cardId);v&&(v.used=!1,w.log.push({text:`💫 ${v.name} ressuscité !`,type:"info"}))}),w[n+"Team"]=u,k(w)})},REMOVE_GOAL:({},j,B)=>{const w=o+"Score";j[w]>0?(j[w]--,j.log.push({text:"🚫 Dernier but annulé !",type:"info"})):j.log.push({text:"🚫 Aucun but à annuler",type:"info"}),B(j)},ADD_GOAL_DRAW:({},j,B)=>{j[n+"Score"]===j[o+"Score"]?(j[n+"Score"]++,j.log.push({text:"🎯 But bonus !",type:"info"})):j.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),B(j)},ADD_SUB:({value:j=1},B,w)=>{B.maxSubs=(B.maxSubs||3)+j,B.log.push({text:`🔄 +${j} remplacement(s)`,type:"info"}),w(B)},CUSTOM:({},j,B)=>B(j)};function de(j,B,w,k){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let x=[];function y(){var v,_;const h=j.map(z=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",A=je(z,z._line)+(z.boost||0),C=x.find(R=>R.cardId===z.cardId)?"#FFD700":"rgba(255,255,255,0.25)",F=z.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${C};background:${$};overflow:hidden;cursor:pointer;${F}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${A}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${z._line}</div>
        </div>`}).join("");u.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${w}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x.length}/${B}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${h}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${x.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${x.length}/${B})
          </button>
        </div>`,(v=u.querySelector("#pp-close"))==null||v.addEventListener("click",()=>u.remove()),u.querySelectorAll(".pp-item").forEach(z=>{z.addEventListener("click",()=>{const $=z.dataset.cid,A=j.find(C=>C.cardId===$),S=x.findIndex(C=>C.cardId===$);A&&(S>-1?x.splice(S,1):x.length<B&&x.push(A),y())})}),(_=u.querySelector("#pp-confirm"))==null||_.addEventListener("click",()=>{u.remove(),k(x)})}y(),document.body.appendChild(u)}async function N(j,B){const k=(r["gcCardsFull_"+n]||[]).find(h=>h.id===j),u=(k==null?void 0:k._gcDef)||(r.gcDefs||[]).find(h=>{var v;return h.name===B||((v=h.name)==null?void 0:v.toLowerCase().trim())===(B==null?void 0:B.toLowerCase().trim())}),x=[...r["usedGc_"+n]||[],j],y={type:B,by:n,seq:(r._gcAnimSeq||0)+1};H.add(y.seq),ve(B,n,async()=>{if(u!=null&&u.effect_type&&u.effect_type!=="CUSTOM"){const v=oe[u.effect_type];if(v){const _={...r};v(u.effect_params||{},_,async z=>{z["usedGc_"+n]=x,z._lastGC=y,z._gcAnimSeq=y.seq,await M(z)});return}}const h={...r};switch(B){case"Remplacement+":h.maxSubs=(h.maxSubs||3)+1,h.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const v=o+"Score";h[v]>0&&(h[v]--,h.log.push({text:"🚫 But annulé",type:"info"}));break}}h["usedGc_"+n]=x,h._lastGC=y,h._gcAnimSeq=y.seq,await M(h)})}function W(j,B){const w="usedCardIds_"+j,k=new Set(r[w]||[]);B.forEach(u=>k.add(u)),r[w]=[...k]}function K(){for(const j of["p1","p2"]){const B=new Set(r["usedCardIds_"+j]||[]),w=r[j+"Team"];if(w)for(const k of["GK","DEF","MIL","ATT"])(w[k]||[]).forEach(u=>{u.used=B.has(u.cardId)})}}function P(){var Ue,Je,Ze,Qe,nt,gt;if(r.phase==="reveal")return re();if(r.phase==="midfield")return ye();if(r.phase==="finished")return ze();const j=r[n+"Team"],B=r[o+"Team"];K();const w=r[n+"Score"],k=r[o+"Score"],u=r[n+"Name"],x=r[o+"Name"],y=r.phase===n+"-attack",h=r.phase===n+"-defense",v=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],_=v.map(le=>le.cardId),z=window.innerWidth>=700,$=r[n+"Subs"]||[],A=r["usedSubIds_"+n]||[],S=$.filter(le=>!A.includes(le.cardId)),C=r["gcCardsFull_"+n]||[],F=r["usedGc_"+n]||[],R=C.filter(le=>!F.includes(le.id)),O=r.boostOwner===n&&!r.boostUsed,Q=!["GK","DEF","MIL","ATT"].some(le=>(B[le]||[]).some(Ee=>!Ee.used)),Y=[...j.MIL||[],...j.ATT||[]].filter(le=>!le.used),ie=y&&Q&&Y.length===0?[...j.GK||[],...j.DEF||[]].filter(le=>!le.used).map(le=>le.cardId):[];function ae(le,Ee,te){var pt,ht;const ue=le._gcDef,ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ue==null?void 0:ue.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ce={purple:"#b06ce0",light_blue:"#00d4ef"}[ue==null?void 0:ue.color]||"#b06ce0",Be=(ue==null?void 0:ue.name)||le.gc_type,Te=(ue==null?void 0:ue.effect)||((pt=Ve[le.gc_type])==null?void 0:pt.desc)||"",tt=ue!=null&&ue.image_url?`/icons/${ue.image_url}`:null,it=((ht=Ve[le.gc_type])==null?void 0:ht.icon)||"⚡",rt=Math.round(te*.22),st=Math.round(te*.22),ct=te-rt-st,$t=Be.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${le.id}" data-gc-type="${le.gc_type}"
        style="box-sizing:border-box;width:${Ee}px;height:${te}px;border-radius:10px;border:2px solid ${ce};background:${ee};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${rt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${$t}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Ee-6}px">${Be}</span>
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
        <div style="font-size:${Math.round(Ee*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const me=(le,Ee)=>Ee?fe(130,175):ae(le,130,175),$e=(le,Ee)=>Ee?fe(68,95):ae(le,68,95),ke=z?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",qe=y?he(n)?`<button id="pvp-action" style="${ke};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${v.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${ke};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:h?`<button id="pvp-action" style="${ke};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${v.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${x}</div>`,Ce=y&&!he(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':y||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${v.length}/3 sélectionné(s)</div>`:"",Re=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${z?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${S.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':S.map(le=>`<div class="pvp-sub-btn" data-sub-id="${le.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(le,z?76:44,z?100:58)}</div>`).join("")}
    </div>`,Fe=y?"attack":h?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(j,r[n+"Formation"],Fe,_,300,300,ie)}
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
        </div>`}return`<div style="font-size:11px;color:${le.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${le.type==="goal"?700:400};padding:3px 2px">${le.text||""}</div>`}const Ke=(()=>{var Ee,te;if(h&&((Ee=r.pendingAttack)!=null&&Ee.players)){const ue=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${x} ATTAQUE — Défendez !</div>
          ${ot((ue.players||[]).map(ee=>({...ee,used:!1})),"#ff6b6b",ue.total)}
        </div>`}if(y&&((te=r.pendingAttack)!=null&&te.players)){const ue=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ue.players||[]).map(ee=>({...ee,used:!1})),"#00ff88",ue.total)}
        </div>`}const le=(r.log||[]).slice(-1)[0];return le?'<div style="padding:2px 4px">'+De(le)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ne=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${w} – ${k}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",z?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Re}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Oe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${qe}${Ce}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${R.map(le=>me(le,!1)).join("")}
            ${O?me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(j,r[n+"Formation"],Fe,_,300,300,ie)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${R.map(le=>$e(le,!1)).join("")}
            ${O?$e(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${y&&S.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${y&&S.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${y&&S.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${y&&S.length>0?1:.4}">
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
          <div>${qe}${Ce}</div>
        </div>
      </div>`;function He(){const le=e.querySelector(".match-screen");if(!le)return;const Ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);le.style.height=Ee+"px",le.style.minHeight=Ee+"px",le.style.maxHeight=Ee+"px",le.style.overflow="hidden";const te=e.querySelector("#mobile-action-bar"),ue=e.querySelector("#mobile-play-area");te&&ue&&(ue.style.paddingBottom=te.offsetHeight+"px")}if(He(),setTimeout(He,120),setTimeout(He,400),L||(L=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",He),window.visualViewport.addEventListener("scroll",He)),window.addEventListener("resize",He)),function(){const Ee=e.querySelector(".terrain-wrapper svg");Ee&&(Ee.removeAttribute("width"),Ee.removeAttribute("height"),Ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Ee.setAttribute("viewBox","-26 -26 352 352"),Ee.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(le=>{le.addEventListener("click",()=>{if(!y&&!h)return;const Ee=le.dataset.cardId,te=le.dataset.role,ue=(j[te]||[]).find(Te=>Te.cardId===Ee);if(!ue||ue.used)return;const ee=ie.includes(Ee);if(y&&!["MIL","ATT"].includes(te)&&!ee)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const ce=r["selected_"+n],Be=ce.findIndex(Te=>Te.cardId===Ee);Be>-1?ce.splice(Be,1):ce.length<3&&ce.push({...ue,_role:te}),P()})}),e.querySelectorAll(".match-used-hit").forEach(le=>{le.addEventListener("click",()=>Ae(le.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(le=>{le.addEventListener("click",()=>Ae())}),(Ue=e.querySelector("#pvp-sub-open"))==null||Ue.addEventListener("click",()=>Ae()),e.querySelectorAll(".pvp-gc-mini").forEach(le=>{le.addEventListener("click",()=>_e(le.dataset.gcId,le.dataset.gcType))}),(Je=e.querySelector("#pvp-boost-card"))==null||Je.addEventListener("click",()=>we()),(Ze=e.querySelector("#pvp-action"))==null||Ze.addEventListener("click",le=>{y?le.currentTarget.dataset.pass==="1"||!he(n)?ne():ge():h&&J()}),(Qe=e.querySelector("#pvp-quit"))==null||Qe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&U()}),(nt=e.querySelector("#pvp-view-opp"))==null||nt.addEventListener("click",()=>xe()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>X()),I&&(clearInterval(I),I=null),(y||h)&&!c){let le=30,Ee=!1;const te=()=>document.getElementById("pvp-timer"),ue=()=>{te()&&(te().textContent=le+"s",te().style.color=Ee?"#ff4444":"#fff")};ue(),I=setInterval(()=>{le--,le<0?Ee?(clearInterval(I),I=null,y&&!he(n)?ne():U()):(Ee=!0,le=15,ue()):ue()},1e3)}}function re(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await M({phase:"midfield"})},5e3)}let pe=!1;function ye(){if(pe)return;const j=r[n+"Team"].MIL||[],B=r[o+"Team"].MIL||[];function w(R){return R.reduce((O,Q)=>O+je(Q,"MIL"),0)}function k(R){let O=0;for(let Q=0;Q<R.length-1;Q++){const Y=at(R[Q],R[Q+1]);Y==="#00ff88"?O+=2:Y==="#FFD700"&&(O+=1)}return O}const u=w(j)+k(j),x=w(B)+k(B),y=u>=x;function h(R,O,Q){return`<div id="duel-row-${Q}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${O}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${R.map((Y,ie)=>{const ae=ie<R.length-1?at(Y,R[ie+1]):null,fe=!ae||ae==="#ff3333"||ae==="#cc2222",me=ae==="#00ff88"?"+2":ae==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Q}" data-idx="${ie}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...Y,note:je(Y,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ie<R.length-1?`<div class="duel-link duel-link-${Q}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${fe?"rgba(255,255,255,0.12)":ae};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${fe?"none":`0 0 8px ${ae}`}">
              ${me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ae}">${me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Q}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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
      ${h(j,r[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${h(B,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const v=(R,O)=>e.querySelectorAll(R).forEach((Q,Y)=>{setTimeout(()=>{Q.style.opacity="1",Q.style.transform="translateY(0) scale(1)"},O+Y*90)});v(".duel-card-me",150),v(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((R,O)=>setTimeout(()=>{R.style.opacity="1"},O*70)),900),setTimeout(()=>{const R=e.querySelector("#pvp-vs");R&&(R.style.opacity="1",R.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(O=>O.style.opacity="1")},1250);function _(R,O,Q){const Y=document.getElementById(R);if(!Y)return;const ie=performance.now(),ae=fe=>{const me=Math.min(1,(fe-ie)/Q);Y.textContent=Math.round(O*(1-Math.pow(1-me,3))),me<1?requestAnimationFrame(ae):Y.textContent=O};requestAnimationFrame(ae)}setTimeout(()=>{_("pvp-score-me",u,800),_("pvp-score-opp",x,800)},1500);const z=r.p1Team.MIL||[],$=r.p2Team.MIL||[],A=w(z)+k(z),S=w($)+k($),C=A>=S?"p1":"p2";let F=r.boostValue;F==null&&(F=ni(),r.boostValue=F,r.boostOwner=C,r.boostUsed=!1),pe=!0,setTimeout(()=>{const R=e.querySelector("#duel-row-"+(y?"me":"opp")),O=e.querySelector("#duel-row-"+(y?"opp":"me")),Q=document.getElementById("pvp-score-me"),Y=document.getElementById("pvp-score-opp"),ie=y?Q:Y,ae=y?Y:Q;ie&&(ie.style.fontSize="80px",ie.style.color=y?"#FFD700":"#ff6b6b",ie.style.animation="duelPulse .5s ease"+(y?",duelGlow 1.5s ease infinite .5s":"")),ae&&(ae.style.opacity="0.25"),setTimeout(()=>{R&&(R.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",R.style.zIndex="5"),setTimeout(()=>{const fe=document.getElementById("duel-shock");fe&&(fe.style.animation="shockwave .5s ease-out forwards"),O&&(O.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ke;const fe=document.getElementById("pvp-duel-finale");if(!fe)return;const me=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+F+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",$e=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;fe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(y?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+me+$e,fe.style.transition="opacity .45s ease",fe.style.opacity="1",fe.style.pointerEvents="auto",(ke=document.getElementById("pvp-start-match"))==null||ke.addEventListener("click",async()=>{const qe=C;await M({phase:qe+"-attack",attacker:qe,round:1,boostValue:F,boostUsed:!1,boostOwner:qe})})},600)},700)},2800)}function Le(j,B,w,k,u){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const y=Array.from({length:10},(z,$)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${$%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][$%8]}</div>`).join(""),h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};x.innerHTML=`
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
        ${B} – ${w}
      </div>
      ${j!=null&&j.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${j.map(z=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${h[z.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${z.portrait?`<img src="${z.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(z.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const _=()=>{v||(v=!0,x.remove(),setTimeout(()=>u(),50))};x.addEventListener("click",_),setTimeout(_,3500)}function ve(j,B,w){var F,R;const k=(r.gcDefs||[]).find(O=>{var Q;return O.name===j||((Q=O.name)==null?void 0:Q.toLowerCase().trim())===(j==null?void 0:j.toLowerCase().trim())}),u={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[k==null?void 0:k.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[k==null?void 0:k.color]||"#b06ce0",y=(k==null?void 0:k.name)||j,h=(k==null?void 0:k.effect)||((F=Ve[j])==null?void 0:F.desc)||"",v=k!=null&&k.image_url?`/icons/${k.image_url}`:null,_=((R=Ve[j])==null?void 0:R.icon)||"⚡",$=B===n?"Vous":r[B+"Name"]||"Adversaire",A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",A.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${x}66}50%{box-shadow:0 0 60px ${x}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${x};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${$} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${x};background:${u};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(A);let S=!1;const C=()=>{S||(S=!0,A.remove(),setTimeout(()=>w&&w(),50))};A.addEventListener("click",C),setTimeout(C,3e3)}function _e(j,B){var A,S,C,F;const k=(r["gcCardsFull_"+n]||[]).find(R=>R.id===j),u=k==null?void 0:k._gcDef,x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[u==null?void 0:u.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",y={purple:"#b06ce0",light_blue:"#00d4ef"}[u==null?void 0:u.color]||"#b06ce0",h=(u==null?void 0:u.name)||B,v=(u==null?void 0:u.effect)||((A=Ve[B])==null?void 0:A.desc)||"Carte spéciale.",_=u!=null&&u.image_url?`/icons/${u.image_url}`:null,z=((S=Ve[B])==null?void 0:S.icon)||"⚡",$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",$.innerHTML=`
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
      </div>`,document.body.appendChild($),(C=$.querySelector("#pvp-gc-back"))==null||C.addEventListener("click",()=>$.remove()),(F=$.querySelector("#pvp-gc-use"))==null||F.addEventListener("click",()=>{$.remove(),N(j,B)})}function we(){var k;const j=r[n+"Team"],B=Object.entries(j).flatMap(([u,x])=>(x||[]).filter(y=>!y.used).map(y=>({...y,_line:u})));if(!B.length)return;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",w.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${B.map(u=>{const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[u._line]||"#555",y=je(u,u._line)+(u.boost||0);return`<div class="bp-item" data-cid="${u.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${x};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${y}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(w),(k=w.querySelector("#bp-close"))==null||k.addEventListener("click",()=>w.remove()),w.querySelectorAll(".bp-item").forEach(u=>{u.addEventListener("click",async()=>{const x=u.dataset.cid,y=B.find(v=>v.cardId===x);if(!y)return;const h=(j[y._line]||[]).find(v=>v.cardId===x);h&&(h.boost=(h.boost||0)+r.boostValue),w.remove(),await M({[n+"Team"]:j,boostUsed:!0})})})}function Ae(j=null){var S,C;if(!(r.phase===n+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const w=r[n+"Team"],k=r["usedSubIds_"+n]||[],u=r.maxSubs||3;if(k.length>=u){f(`Maximum ${u} remplacements atteint`,"warning");return}const x=Object.entries(w).flatMap(([F,R])=>(R||[]).filter(O=>O.used).map(O=>({...O,_line:F}))),y=(r[n+"Subs"]||[]).filter(F=>!k.includes(F.cardId));if(!x.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!y.length){f("Aucun remplaçant disponible","warning");return}let h=Math.max(0,x.findIndex(F=>F.cardId===j));const v=((S=x[h])==null?void 0:S._line)||((C=x[h])==null?void 0:C.job);let _=Math.max(0,y.findIndex(F=>F.job===v)),z=!1;const $=document.createElement("div");$.id="pvp-sub-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function A(){var ae,fe,me,$e,ke,qe;const F=x[h],R=y[_],O=Math.min(130,Math.round((window.innerWidth-90)/2)),Q=Math.round(O*1.35),Y=Ce=>`background:rgba(255,255,255,0.12);border:none;color:${Ce?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ce?"default":"pointer"};flex-shrink:0`;$.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${k.length}/${u})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${Y(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${R?Ye({...R,used:!1,boost:0},O,Q):"<div>—</div>"}</div>
          <button id="pin-down" style="${Y(_>=y.length-1)}" ${_>=y.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${y.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${Y(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${F?Ye({...F,used:!1,boost:0},O,Q):"<div>—</div>"}</div>
          <button id="pout-down" style="${Y(h>=x.length-1)}" ${h>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${x.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ae=$.querySelector("#psub-close"))==null||ae.addEventListener("click",()=>$.remove()),(fe=$.querySelector("#pout-up"))==null||fe.addEventListener("click",()=>{h>0&&(h--,A())}),(me=$.querySelector("#pout-down"))==null||me.addEventListener("click",()=>{h<x.length-1&&(h++,A())}),($e=$.querySelector("#pin-up"))==null||$e.addEventListener("click",()=>{_>0&&(_--,A())}),(ke=$.querySelector("#pin-down"))==null||ke.addEventListener("click",()=>{_<y.length-1&&(_++,A())});const ie=(Ce,Re,Fe,Oe)=>{const De=$.querySelector("#"+Ce);if(!De)return;let Ke=0;De.addEventListener("touchstart",Ne=>{Ke=Ne.touches[0].clientY},{passive:!0}),De.addEventListener("touchend",Ne=>{const He=Ne.changedTouches[0].clientY-Ke;if(Math.abs(He)<30)return;const Ue=Re();He<0&&Ue<Oe-1?(Fe(Ue+1),A()):He>0&&Ue>0&&(Fe(Ue-1),A())},{passive:!0})};ie("pin-panel",()=>_,Ce=>_=Ce,y.length),ie("pout-panel",()=>h,Ce=>h=Ce,x.length),(qe=$.querySelector("#psub-confirm"))==null||qe.addEventListener("click",async Ce=>{if(Ce.preventDefault(),Ce.stopPropagation(),z)return;z=!0;const Re=x[h],Fe=y[_];if(!Re||!Fe)return;const Oe=Re._line,De=(w[Oe]||[]).findIndex(He=>He.cardId===Re.cardId);if(De===-1){f("Erreur : joueur introuvable","error"),$.remove();return}const Ke={...Fe,_line:Oe,position:Re.position,used:!1,boost:0};w[Oe].splice(De,1,Ke);const Ne=[...k,Fe.cardId];$.remove(),Ie(Re,Fe,async()=>{await M({[n+"Team"]:w,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Ne})})})}document.body.appendChild($),A()}function Ie(j,B,w){const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const x=(v,_,z)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${_};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${z}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${k[v.job]||"#555"};border:3px solid ${_};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(v)?`<img src="${Pe(v)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(v.name||"").slice(0,12)}</div>
    </div>`;u.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${x(B,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${x(j,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(u);let y=!1;const h=()=>{y||(y=!0,u.remove(),setTimeout(()=>w(),50))};u.addEventListener("click",h),setTimeout(h,2200)}function xe(){var B;const j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",j.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(j),(B=j.querySelector("#pvp-opp-close"))==null||B.addEventListener("click",()=>j.remove())}function X(){var w;const j=r.log||[],B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",B.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${j.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...j].reverse().map(k=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${k.type==="goal"?"#FFD700":k.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${k.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(B),(w=B.querySelector("#pvp-hist-close"))==null||w.addEventListener("click",()=>B.remove())}async function ne(){if(r.phase!==n+"-attack")return;const j=n==="p1"?"p2":"p1",B=(r.round||0)+1,w=[...r.log||[]];w.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const k=Se(r),u=he(j),x=k||!u?"finished":j+"-attack";await M({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:x,attacker:j,round:B,log:w}),x==="finished"&&await be(r)}async function ge(){const j=r[n+"Team"],B=!["GK","DEF","MIL","ATT"].some(x=>(r[o+"Team"][x]||[]).some(y=>!y.used)),w=(r["selected_"+n]||[]).map(x=>{const y=(j[x._role]||[]).find(A=>A.cardId===x.cardId)||x,h=B&&["GK","DEF"].includes(x._role),v=j[x._role]||[],_=v.findIndex(A=>A.cardId===x.cardId),z=lt(v.length),$=_>=0?z[_]:y._col??1;return{...y,_line:x._role,_col:$,...h?{note_a:Math.max(1,Number(y.note_a)||0)}:{}}});if(!w.length)return;const k=Nt(w,r.modifiers[n]||{});W(n,w.map(x=>x.cardId)),w.forEach(x=>{const y=(j[x._role]||[]).find(h=>h.cardId===x.cardId);y&&(y.used=!0)}),r["selected_"+n]=[],P();const u=[...r.log||[]];if(B){const x=(r[n+"Score"]||0)+1,y=w.map($=>({name:$.name,note:je($,$._line||"ATT"),portrait:Pe($),job:$.job}));u.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:y,homeTotal:k.total,aiTotal:0});const h=(r.round||0)+1,v=n==="p1"?"p2":"p1",_={...r,[n+"Team"]:j,[n+"Score"]:x},z=Se(_);q.add(h),Le(y,x,r[o+"Score"]||0,!0,async()=>{await M({[n+"Team"]:j,[n+"Score"]:x,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:z?"finished":v+"-attack",attacker:v,round:h,log:u}),z&&await be({...r,[n+"Score"]:x})});return}u.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${k.total})`}),await M({[n+"Team"]:j,[o+"Team"]:r[o+"Team"],pendingAttack:{...k,players:w,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:u})}async function J(){const j=r[n+"Team"],B=(r["selected_"+n]||[]).map(F=>{const R=(j[F._role]||[]).find(ae=>ae.cardId===F.cardId)||F,O=j[F._role]||[],Q=O.findIndex(ae=>ae.cardId===F.cardId),Y=lt(O.length),ie=Q>=0?Y[Q]:R._col??1;return{...R,_line:F._role,_col:ie}}),w=Rt(B,r.modifiers[n]||{});W(n,B.map(F=>F.cardId)),B.forEach(F=>{const R=(j[F._role]||[]).find(O=>O.cardId===F.cardId);R&&(R.used=!0)}),r["selected_"+n]=[],P();const k=Ot(r.pendingAttack.total,w.total,r.modifiers[n]||{}),u=r.pendingAttack.side,x=k==="attack"||(k==null?void 0:k.goal),y=u==="p1"?"p2":"p1",h=(r.round||0)+1,v=(r.pendingAttack.players||[]).map(F=>({name:F.name,note:je(F,F._line||"ATT"),portrait:Pe(F),job:F.job})),_=[...r.log||[]];_.push({type:"duel",isGoal:x,homeScored:x&&u===n,text:x?`⚽ BUT de ${r[u+"Name"]} ! (${r.pendingAttack.total} vs ${w.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${w.total})`,homePlayers:v,aiPlayers:B.map(F=>({name:F.name,note:je(F,F._line||"DEF"),portrait:Pe(F),job:F.job})),homeTotal:r.pendingAttack.total,aiTotal:w.total});const z=x?(r[u+"Score"]||0)+1:r[u+"Score"]||0,$={...r,[n+"Team"]:j,[u+"Score"]:z},A=Se($),S=A?"finished":y+"-attack",C=async()=>{await M({[n+"Team"]:j,[o+"Team"]:r[o+"Team"],[u+"Score"]:z,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:S,attacker:y,round:h,log:_}),(S==="finished"||A)&&await be({...r,[u+"Score"]:z})};if(x){const F=u===n,R=F?z:r[n+"Score"]||0,O=F?r[o+"Score"]||0:z;q.add(h),Le(v,R,O,F,C)}else await C()}function Z(j){return["MIL","ATT"].some(B=>(j[B]||[]).some(w=>!w.used))}function V(j){return["GK","DEF","MIL","ATT"].some(B=>(j[B]||[]).some(w=>!w.used))}function se(j){return V(j)&&!Z(j)}function he(j){const B=r[j+"Team"],w=r[(j==="p1"?"p2":"p1")+"Team"];return!!(Z(B)||!V(w)&&se(B))}function Se(j){const B=["MIL","ATT"].some(_=>(j.p1Team[_]||[]).some(z=>!z.used)),w=["MIL","ATT"].some(_=>(j.p2Team[_]||[]).some(z=>!z.used)),k=V(j.p1Team),u=V(j.p2Team);return!B&&!(!u&&k)&&(!w&&!(!k&&u))}function Me(j){const B=j.p1Score||0,w=j.p2Score||0;return B===w?null:B>w?g.home_id:g.away_id}async function be(j){try{const B=Me(j),w=B?g.home_id===B?g.away_id:g.home_id:null;await E.from("matches").update({status:"finished",winner_id:B,home_score:j.p1Score||0,away_score:j.p2Score||0}).eq("id",i),B&&w&&updateEvolutiveCards(B,w).catch(()=>{})}catch(B){console.error("[PvP] finishMatch:",B)}}function ze(){var u;const j=r[n+"Score"],B=r[o+"Score"],w=j>B,k=j===B;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${w?"🏆":k?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${w?"Victoire !":k?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${j} - ${B}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(u=document.getElementById("pvp-home"))==null||u.addEventListener("click",()=>{try{E.removeChannel(G)}catch{}We(e),p("home")})}P()}const Kn=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:_o,resumePvpMatch:Un},Symbol.toStringTag,{value:"Module"}));async function Vn(e,t,i,s){var l,d;try{const a=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(E.getChannels?E.getChannels():[]).forEach(f=>{const n=f.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&E.removeChannel(f)})}catch(p){console.warn("[FriendMatch] cleanup canaux:",p)}a&&(await E.rpc("cancel_matchmaking",{p_user_id:a}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",a).then(()=>{},()=>{}))}catch{}await ai(e,t,"random",({deckId:a,formation:p,starters:f,subsRaw:n,gcCardsEnriched:o,gcDefs:m,stadiumDef:b})=>{const g=T=>Yn(e,t,a,p,f,n,T,m||[],i,s);if(!o.length){g([]);return}ri(e,o,g)})}async function Yn(e,t,i,s,l,d,a=[],p=[],f,n){var oe;const{state:o,navigate:m,toast:b}=t,g=o.profile.id;let T=!1,r=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:g})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",g)}catch{}const c=(de,N,W,K)=>{var P;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${N?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${N?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${N?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${n}</div>
            <div style="font-size:11px;color:${N?"#22c55e":"#aaa"}">${N?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!N&&de?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(P=document.getElementById("lobby-cancel"))==null||P.addEventListener("click",async()=>{T=!0,r&&(E.removeChannel(r),r=null),W&&await E.from("friend_match_invites").update({status:"declined"}).eq("id",W),We(e),m("home")})},I=async(de,N)=>{T=!0,r&&(E.removeChannel(r),r=null),await new Promise(W=>setTimeout(W,600)),e.isConnected&&Wn(e,t,de,N,a,p)},{data:L}=await E.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${g},invitee_id.eq.${f}),and(inviter_id.eq.${f},invitee_id.eq.${g})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let q,H;if(L&&L.inviter_id===f)H=!1,q=L.id,await E.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",q);else{H=!0;const{data:de,error:N}=await E.from("friend_match_invites").insert({inviter_id:g,invitee_id:f,friend_id:f,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(N||!de){b("Erreur création invitation","error"),We(e),m("home");return}q=de.id}if(c(!0,!H,q),!H){const de={home_id:f,away_id:g,home_deck_id:L.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},N=await E.from("matches").insert(de).select().single(),W=N.data;if(!W){b("Erreur création match: "+(((oe=N.error)==null?void 0:oe.message)||""),"error"),We(e),m("home");return}await E.from("friend_match_invites").update({match_id:W.id,status:"matched"}).eq("id",q),I(W.id,!1);return}let D=!1;const G=de=>{T||D||(de.status==="matched"&&de.match_id?(D=!0,clearInterval(M),clearInterval(U),I(de.match_id,!0)):de.status==="declined"?(clearInterval(M),clearInterval(U),b(`${n} a décliné l'invitation`,"warning"),We(e),m("home")):de.invitee_ready&&c(!0,!0,q))},M=setInterval(()=>{if(T){clearInterval(M);return}E.from("matchmaking_queue").delete().eq("user_id",g).then(()=>{},()=>{})},3e3),U=setInterval(async()=>{if(T||D){clearInterval(U);return}const{data:de}=await E.from("friend_match_invites").select("*").eq("id",q).maybeSingle();de&&G(de)},1200);r=E.channel("friend-invite-"+q).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${q}`},de=>G(de.new)).subscribe()}async function Wn(e,t,i,s,l=[],d=[]){const{state:a,navigate:p,toast:f}=t,n=s?"p1":"p2",o=s?"p2":"p1",m=(l||[]).map(w=>w.id),b=(l||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await E.from("matches").select("*").eq("id",i).single();if(!g){f("Match introuvable","error"),p("home");return}async function T(){const[{data:w},{data:k},{data:u},{data:x}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),y=$=>{const A=Number($.evolution_bonus)||0;return{cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:(Number($.note_g)||0)+($.job==="GK"||$.job2==="GK"&&Number($.note_g)>0?A:0),note_d:(Number($.note_d)||0)+($.job==="DEF"||$.job2==="DEF"&&Number($.note_d)>0?A:0),note_m:(Number($.note_m)||0)+($.job==="MIL"||$.job2==="MIL"&&Number($.note_m)>0?A:0),note_a:(Number($.note_a)||0)+($.job==="ATT"||$.job2==="ATT"&&Number($.note_a)>0?A:0),evolution_bonus:A,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},h=((w==null?void 0:w.starters)||[]).map($=>y($)),v=((k==null?void 0:k.starters)||[]).map($=>y($)),_=(w==null?void 0:w.formation)||"4-4-2",z=(k==null?void 0:k.formation)||"4-4-2";return{p1Team:(()=>{const $=yt(h,_);return stadiumDef?Ht($,stadiumDef):$})(),p2Team:yt(v,z),p1Subs:(()=>{const $=((w==null?void 0:w.subs)||[]).map(A=>y(A));return stadiumDef&&oi($,stadiumDef),$})(),p2Subs:((k==null?void 0:k.subs)||[]).map($=>y($)),p1Formation:_,p2Formation:z,p1Name:(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"Joueur 1",p2Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?m:[],gc_p2:s?[]:m,gcCardsFull_p1:s?b:[],gcCardsFull_p2:s?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!r)if(s){r=await T();const{data:w}=await E.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:g.home_id}).eq("id",i):r=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let w=0;w<60&&!r;w++){await new Promise(u=>setTimeout(u,400));const{data:k}=await E.from("matches").select("game_state").eq("id",i).single();k!=null&&k.game_state&&Object.keys(k.game_state).length&&(r=k.game_state)}if(!r){f("Erreur de synchronisation","error"),p("home");return}r.gc_p2=m,r.gcCardsFull_p2=b,await E.from("matches").update({game_state:r}).eq("id",i)}let c=!1,I=!1,L=!1,q=null,H=!1;const D=new Set,G=new Set;function M(w){var $,A;try{E.removeChannel(U)}catch{}const k=r[n+"Score"]||0,u=r[o+"Score"]||0;if(!L){L=!0;const S=w.winner_id||(k>u?a.profile.id:u>k?"opp":null),C=S===a.profile.id?"win":S?"loss":null;C&&ti(()=>Promise.resolve().then(()=>no),void 0).then(F=>F.applyOwnEvolution(a.profile.id,C)).catch(()=>{})}if(!I){const S=r.p1Score||0,C=r.p2Score||0,F=(r.usedGc_p1||[]).length,R=(r.usedGc_p2||[]).length,O=w.winner_id||(S>C?g.home_id:C>S?g.away_id:null);(O?a.profile.id===O:a.profile.id<(s?g.away_id:g.home_id))&&(I=!0,Zi({player1Id:g.home_id,player2Id:g.away_id,score1:S,score2:C,gc1:F,gc2:R}).catch(Y=>console.warn("[FriendMatch] updateStats:",Y)))}let x,y;w.winner_id?(x=w.winner_id===a.profile.id,y=!1):w.forfeit?(x=k>u,y=!1):(y=k===u,x=k>u),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const h=document.createElement("div");h.id="pvp-end-overlay",h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=y?"🤝":x?"🏆":"😞",_=y?"MATCH NUL":x?"VICTOIRE !":"DÉFAITE",z=y?"#fff":x?"#FFD700":"#ff6b6b";h.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${_}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${k} – ${u} ${r[o+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${x?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(h),(A=h.querySelector("#pvp-end-home"))==null||A.addEventListener("click",()=>{h.remove(),We(e),p("home")})}const U=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{const k=w.new;try{if(k.status==="finished"||k.forfeit){if(c)return;c=!0,q&&(clearInterval(q),q=null),k.game_state&&(r=k.game_state),M(k);return}if(k.game_state){const u=r;r=k.game_state;const x=r._lastGC;if(x&&x.seq&&!G.has(x.seq)&&(G.add(x.seq),x.by!==n)){we(x.type,x.by,()=>pe());return}const y=u[n+"Score"]||0,h=u[o+"Score"]||0,v=r[n+"Score"]||0,_=r[o+"Score"]||0,z=v>y,$=_>h;if((z||$)&&!D.has(r.round)){D.add(r.round);const A=[...r.log||[]].reverse().find(C=>C.isGoal),S=((A==null?void 0:A.homePlayers)||[]).map(C=>({name:C.name,note:C.note,portrait:C.portrait,job:C.job}));_e(S,v,_,z,()=>pe());return}pe()}}catch(u){console.error("[PvP] crash:",u)}}).subscribe();async function oe(w){Object.assign(r,w),r.lastActionAt=new Date().toISOString();const{error:k}=await E.from("matches").update({game_state:r}).eq("id",i);k&&f("Erreur de synchronisation","error");try{pe()}catch(u){console.error("[PvP] renderPvpScreen crash:",u)}}async function de(){if(c)return;c=!0,q&&(clearInterval(q),q=null);const w=s?g.away_id:g.home_id,k=s?"p2":"p1",u=s?"p1":"p2",x={...r,[k+"Score"]:3,[u+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:w,home_score:x.p1Score||0,away_score:x.p2Score||0,game_state:x}).eq("id",i)}catch{}try{E.removeChannel(U)}catch{}setTimeout(()=>{We(e),p("home")},800)}const N={BOOST_STAT:({value:w=1,count:k=1,roles:u=[]},x,y)=>{const h=x[n+"Team"],v=Object.entries(h).filter(([_])=>!u.length||u.includes(_)).flatMap(([_,z])=>z.filter($=>!$.used).map($=>({...$,_line:_})));if(!v.length){x.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(x);return}W(v,k,`Choisir ${k} joueur(s) à booster (+${w})`,_=>{_.forEach(z=>{const $=(h[z._line]||[]).find(A=>A.cardId===z.cardId);$&&($.boost=($.boost||0)+w,x.log.push({text:`⚡ +${w} sur ${$.name}`,type:"info"}))}),x[n+"Team"]=h,y(x)})},DEBUFF_STAT:({value:w=1,count:k=1,roles:u=[],target:x="ai"},y,h)=>{const v=x==="home"?n:o,_=y[v+"Team"],z=x==="home"?"allié":"adverse",$=Object.entries(_).filter(([A])=>!u.length||u.includes(A)).flatMap(([A,S])=>S.map(C=>({...C,_line:A})));if(!$.length){y.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),h(y);return}W($,k,`Choisir ${k} joueur(s) ${z}(s) (-${w})`,A=>{A.forEach(S=>{const C=(_[S._line]||[]).find(F=>F.cardId===S.cardId);C&&(C.boost=(C.boost||0)-w,y.log.push({text:`🎯 -${w} sur ${C.name}`,type:"info"}))}),y[v+"Team"]=_,h(y)})},GRAY_PLAYER:({count:w=1,roles:k=[],target:u="ai"},x,y)=>{const h=u==="home"?n:o,v=x[h+"Team"],_=u==="home"?"allié":"adverse",z=Object.entries(v).filter(([$])=>!k.length||k.includes($)).flatMap(([$,A])=>A.filter(S=>!S.used).map(S=>({...S,_line:$})));if(!z.length){x.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),y(x);return}W(z,w,`Choisir ${w} joueur(s) ${_}(s) à exclure`,$=>{const A="usedCardIds_"+h,S=new Set(x[A]||[]);$.forEach(C=>{const F=(v[C._line]||[]).find(R=>R.cardId===C.cardId);F&&(F.used=!0,S.add(C.cardId),x.log.push({text:`❌ ${F.name} exclu !`,type:"info"}))}),x[A]=[...S],x[h+"Team"]=v,y(x)})},REVIVE_PLAYER:({count:w=1,roles:k=[]},u,x)=>{const y=u[n+"Team"],h=Object.entries(y).filter(([v])=>!k.length||k.includes(v)).flatMap(([v,_])=>_.filter(z=>z.used).map(z=>({...z,_line:v})));if(!h.length){u.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),x(u);return}W(h,w,`Choisir ${w} joueur(s) à ressusciter`,v=>{v.forEach(_=>{const z=(y[_._line]||[]).find($=>$.cardId===_.cardId);z&&(z.used=!1,u.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),u[n+"Team"]=y,x(u)})},REMOVE_GOAL:({},w,k)=>{const u=o+"Score";w[u]>0?(w[u]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),k(w)},ADD_GOAL_DRAW:({},w,k)=>{w[n+"Score"]===w[o+"Score"]?(w[n+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),k(w)},ADD_SUB:({value:w=1},k,u)=>{k.maxSubs=(k.maxSubs||3)+w,k.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),u(k)},CUSTOM:({},w,k)=>k(w)};function W(w,k,u,x){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let h=[];function v(){var z,$;const _=w.map(A=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",C=je(A,A._line)+(A.boost||0),R=h.find(Q=>Q.cardId===A.cardId)?"#FFD700":"rgba(255,255,255,0.25)",O=A.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${R};background:${S};overflow:hidden;cursor:pointer;${O}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${C}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${A._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${u}</div>
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
        </div>`,(z=y.querySelector("#pp-close"))==null||z.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(A=>{A.addEventListener("click",()=>{const S=A.dataset.cid,C=w.find(R=>R.cardId===S),F=h.findIndex(R=>R.cardId===S);C&&(F>-1?h.splice(F,1):h.length<k&&h.push(C),v())})}),($=y.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{y.remove(),x(h)})}v(),document.body.appendChild(y)}async function K(w,k){const x=(r["gcCardsFull_"+n]||[]).find(_=>_.id===w),y=(x==null?void 0:x._gcDef)||(r.gcDefs||[]).find(_=>{var z;return _.name===k||((z=_.name)==null?void 0:z.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),h=[...r["usedGc_"+n]||[],w],v={type:k,by:n,seq:(r._gcAnimSeq||0)+1};G.add(v.seq),we(k,n,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const z=N[y.effect_type];if(z){const $={...r};z(y.effect_params||{},$,async A=>{A["usedGc_"+n]=h,A._lastGC=v,A._gcAnimSeq=v.seq,await oe(A)});return}}const _={...r};switch(k){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=o+"Score";_[z]>0&&(_[z]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+n]=h,_._lastGC=v,_._gcAnimSeq=v.seq,await oe(_)})}function P(w,k){const u="usedCardIds_"+w,x=new Set(r[u]||[]);k.forEach(y=>x.add(y)),r[u]=[...x]}function re(){for(const w of["p1","p2"]){const k=new Set(r["usedCardIds_"+w]||[]),u=r[w+"Team"];if(u)for(const x of["GK","DEF","MIL","ATT"])(u[x]||[]).forEach(y=>{y.used=k.has(y.cardId)})}}function pe(){var Ze,Qe,nt,gt,le,Ee;if(r.phase==="reveal")return ye();if(r.phase==="midfield")return ve();if(r.phase==="finished")return B();const w=r[n+"Team"],k=r[o+"Team"];re();const u=r[n+"Score"],x=r[o+"Score"],y=r[n+"Name"],h=r[o+"Name"],v=r.phase===n+"-attack",_=r.phase===n+"-defense",z=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],$=z.map(te=>te.cardId),A=window.innerWidth>=700,S=r[n+"Subs"]||[],C=r["usedSubIds_"+n]||[],F=S.filter(te=>!C.includes(te.cardId)),R=r["gcCardsFull_"+n]||[],O=r["usedGc_"+n]||[],Q=R.filter(te=>!O.includes(te.id)),Y=r.boostOwner===n&&!r.boostUsed,ie=!["GK","DEF","MIL","ATT"].some(te=>(k[te]||[]).some(ue=>!ue.used)),ae=[...w.MIL||[],...w.ATT||[]].filter(te=>!te.used),fe=v&&ie&&ae.length===0?[...w.GK||[],...w.DEF||[]].filter(te=>!te.used).map(te=>te.cardId):[];function me(te,ue,ee){var kt,Ut;const ce=te._gcDef,Be={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ce==null?void 0:ce.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Te={purple:"#b06ce0",light_blue:"#00d4ef"}[ce==null?void 0:ce.color]||"#b06ce0",tt=(ce==null?void 0:ce.name)||te.gc_type,it=(ce==null?void 0:ce.effect)||((kt=Ve[te.gc_type])==null?void 0:kt.desc)||"",rt=ce!=null&&ce.image_url?`/icons/${ce.image_url}`:null,st=((Ut=Ve[te.gc_type])==null?void 0:Ut.icon)||"⚡",ct=Math.round(ee*.22),$t=Math.round(ee*.22),pt=ee-ct-$t,ht=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${te.id}" data-gc-type="${te.gc_type}"
        style="box-sizing:border-box;width:${ue}px;height:${ee}px;border-radius:10px;border:2px solid ${Te};background:${Be};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${ct}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${ht}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ue-6}px">${tt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${pt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${rt?`<img src="${rt}" style="max-width:${ue-10}px;max-height:${pt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(pt*.55)}px">${st}</span>`}
        </div>
        <div style="height:${$t}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${it.slice(0,38)}</span>
        </div>
      </div>`}function $e(te,ue){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${te}px;height:${ue}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ue*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ue*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ue*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const ke=(te,ue)=>ue?$e(130,175):me(te,130,175),qe=(te,ue)=>ue?$e(68,95):me(te,68,95),Ce=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Re=v?Me(n)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${h}</div>`,Fe=v&&!Me(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${F.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':F.map(te=>`<div class="pvp-sub-btn" data-sub-id="${te.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(te,A?76:44,A?100:58)}</div>`).join("")}
    </div>`,De=v?"attack":_?"defense":"idle",Ke=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(w,r[n+"Formation"],De,$,300,300,fe)}
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
        </div>`}return`<div style="font-size:11px;color:${te.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${te.type==="goal"?700:400};padding:3px 2px">${te.text||""}</div>`}const He=(()=>{var ue,ee;if(_&&((ue=r.pendingAttack)!=null&&ue.players)){const ce=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${h} ATTAQUE — Défendez !</div>
          ${ot((ce.players||[]).map(Be=>({...Be,used:!1})),"#ff6b6b",ce.total)}
        </div>`}if(v&&((ee=r.pendingAttack)!=null&&ee.players)){const ce=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ce.players||[]).map(Be=>({...Be,used:!1})),"#00ff88",ce.total)}
        </div>`}const te=(r.log||[]).slice(-1)[0];return te?'<div style="padding:2px 4px">'+Ne(te)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ue=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${u} – ${x}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${He}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",A?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ue}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ke}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Re}${Fe}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${Q.map(te=>ke(te,!1)).join("")}
            ${Y?ke(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ue}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(w,r[n+"Formation"],De,$,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Q.map(te=>qe(te,!1)).join("")}
            ${Y?qe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${v&&F.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${v&&F.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${v&&F.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${v&&F.length>0?1:.4}">
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
          <div>${Re}${Fe}</div>
        </div>
      </div>`;function Je(){const te=e.querySelector(".match-screen");if(!te)return;const ue=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);te.style.height=ue+"px",te.style.minHeight=ue+"px",te.style.maxHeight=ue+"px",te.style.overflow="hidden";const ee=e.querySelector("#mobile-action-bar"),ce=e.querySelector("#mobile-play-area");ee&&ce&&(ce.style.paddingBottom=ee.offsetHeight+"px")}if(Je(),setTimeout(Je,120),setTimeout(Je,400),H||(H=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Je),window.visualViewport.addEventListener("scroll",Je)),window.addEventListener("resize",Je)),function(){const ue=e.querySelector(".terrain-wrapper svg");ue&&(ue.removeAttribute("width"),ue.removeAttribute("height"),ue.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ue.setAttribute("viewBox","-26 -26 352 352"),ue.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(te=>{te.addEventListener("click",()=>{if(!v&&!_)return;const ue=te.dataset.cardId,ee=te.dataset.role,ce=(w[ee]||[]).find(it=>it.cardId===ue);if(!ce||ce.used)return;const Be=fe.includes(ue);if(v&&!["MIL","ATT"].includes(ee)&&!Be)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const Te=r["selected_"+n],tt=Te.findIndex(it=>it.cardId===ue);tt>-1?Te.splice(tt,1):Te.length<3&&Te.push({...ce,_role:ee}),pe()})}),e.querySelectorAll(".match-used-hit").forEach(te=>{te.addEventListener("click",()=>xe(te.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(te=>{te.addEventListener("click",()=>xe())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>xe()),e.querySelectorAll(".pvp-gc-mini").forEach(te=>{te.addEventListener("click",()=>Ae(te.dataset.gcId,te.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>Ie()),(nt=e.querySelector("#pvp-action"))==null||nt.addEventListener("click",te=>{v?te.currentTarget.dataset.pass==="1"||!Me(n)?J():Z():_&&V()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&de()}),(le=e.querySelector("#pvp-view-opp"))==null||le.addEventListener("click",()=>ne()),(Ee=e.querySelector("#pvp-toggle-history"))==null||Ee.addEventListener("click",()=>ge()),q&&(clearInterval(q),q=null),(v||_)&&!c){let te=30,ue=!1;const ee=()=>document.getElementById("pvp-timer"),ce=()=>{ee()&&(ee().textContent=te+"s",ee().style.color=ue?"#ff4444":"#fff")};ce(),q=setInterval(()=>{te--,te<0?ue?(clearInterval(q),q=null,v&&!Me(n)?J():de()):(ue=!0,te=15,ce()):ce()},1e3)}}function ye(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await oe({phase:"midfield"})},5e3)}let Le=!1;function ve(){if(Le)return;const w=r[n+"Team"].MIL||[],k=r[o+"Team"].MIL||[];function u(Q){return Q.reduce((Y,ie)=>Y+je(ie,"MIL"),0)}function x(Q){let Y=0;for(let ie=0;ie<Q.length-1;ie++){const ae=at(Q[ie],Q[ie+1]);ae==="#00ff88"?Y+=2:ae==="#FFD700"&&(Y+=1)}return Y}const y=u(w)+x(w),h=u(k)+x(k),v=y>=h;function _(Q,Y,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${Y}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Q.map((ae,fe)=>{const me=fe<Q.length-1?at(ae,Q[fe+1]):null,$e=!me||me==="#ff3333"||me==="#cc2222",ke=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ie}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...ae,note:je(ae,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<Q.length-1?`<div class="duel-link duel-link-${ie}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${$e?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${$e?"none":`0 0 8px ${me}`}">
              ${ke?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${ke}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ie}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${u(Q)} + ${x(Q)} liens = <b style="color:#fff">${u(Q)+x(Q)}</b>
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
      ${_(w,r[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(k,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(Q,Y)=>e.querySelectorAll(Q).forEach((ie,ae)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},Y+ae*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Q,Y)=>setTimeout(()=>{Q.style.opacity="1"},Y*70)),900),setTimeout(()=>{const Q=e.querySelector("#pvp-vs");Q&&(Q.style.opacity="1",Q.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(Y=>Y.style.opacity="1")},1250);function $(Q,Y,ie){const ae=document.getElementById(Q);if(!ae)return;const fe=performance.now(),me=$e=>{const ke=Math.min(1,($e-fe)/ie);ae.textContent=Math.round(Y*(1-Math.pow(1-ke,3))),ke<1?requestAnimationFrame(me):ae.textContent=Y};requestAnimationFrame(me)}setTimeout(()=>{$("pvp-score-me",y,800),$("pvp-score-opp",h,800)},1500);const A=r.p1Team.MIL||[],S=r.p2Team.MIL||[],C=u(A)+x(A),F=u(S)+x(S),R=C>=F?"p1":"p2";let O=r.boostValue;O==null&&(O=ni(),r.boostValue=O,r.boostOwner=R,r.boostUsed=!1),Le=!0,setTimeout(()=>{const Q=e.querySelector("#duel-row-"+(v?"me":"opp")),Y=e.querySelector("#duel-row-"+(v?"opp":"me")),ie=document.getElementById("pvp-score-me"),ae=document.getElementById("pvp-score-opp"),fe=v?ie:ae,me=v?ae:ie;fe&&(fe.style.fontSize="80px",fe.style.color=v?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{Q&&(Q.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Q.style.zIndex="5"),setTimeout(()=>{const $e=document.getElementById("duel-shock");$e&&($e.style.animation="shockwave .5s ease-out forwards"),Y&&(Y.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const $e=document.getElementById("pvp-duel-finale");if(!$e)return;const ke=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+O+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",qe=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;$e.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ke+qe,$e.style.transition="opacity .45s ease",$e.style.opacity="1",$e.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const Re=R;await oe({phase:Re+"-attack",attacker:Re,round:1,boostValue:O,boostUsed:!1,boostOwner:Re})})},600)},700)},2800)}function _e(w,k,u,x,y){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(A,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};h.innerHTML=`
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
        ${k} – ${u}
      </div>
      ${w!=null&&w.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${w.map(A=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[A.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${A.portrait?`<img src="${A.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(A.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(h);let z=!1;const $=()=>{z||(z=!0,h.remove(),setTimeout(()=>y(),50))};h.addEventListener("click",$),setTimeout($,3500)}function we(w,k,u){var O,Q;const x=(r.gcDefs||[]).find(Y=>{var ie;return Y.name===w||((ie=Y.name)==null?void 0:ie.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",v=(x==null?void 0:x.name)||w,_=(x==null?void 0:x.effect)||((O=Ve[w])==null?void 0:O.desc)||"",z=x!=null&&x.image_url?`/icons/${x.image_url}`:null,$=((Q=Ve[w])==null?void 0:Q.icon)||"⚡",S=k===n?"Vous":r[k+"Name"]||"Adversaire",C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",C.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${h}66}50%{box-shadow:0 0 60px ${h}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${h};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(C);let F=!1;const R=()=>{F||(F=!0,C.remove(),setTimeout(()=>u&&u(),50))};C.addEventListener("click",R),setTimeout(R,3e3)}function Ae(w,k){var C,F,R,O;const x=(r["gcCardsFull_"+n]||[]).find(Q=>Q.id===w),y=x==null?void 0:x._gcDef,h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||k,z=(y==null?void 0:y.effect)||((C=Ve[k])==null?void 0:C.desc)||"Carte spéciale.",$=y!=null&&y.image_url?`/icons/${y.image_url}`:null,A=((F=Ve[k])==null?void 0:F.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${h};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${A}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(R=S.querySelector("#pvp-gc-back"))==null||R.addEventListener("click",()=>S.remove()),(O=S.querySelector("#pvp-gc-use"))==null||O.addEventListener("click",()=>{S.remove(),K(w,k)})}function Ie(){var x;const w=r[n+"Team"],k=Object.entries(w).flatMap(([y,h])=>(h||[]).filter(v=>!v.used).map(v=>({...v,_line:y})));if(!k.length)return;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",u.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${k.map(y=>{const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",v=je(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${h};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(u),(x=u.querySelector("#bp-close"))==null||x.addEventListener("click",()=>u.remove()),u.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const h=y.dataset.cid,v=k.find(z=>z.cardId===h);if(!v)return;const _=(w[v._line]||[]).find(z=>z.cardId===h);_&&(_.boost=(_.boost||0)+r.boostValue),u.remove(),await oe({[n+"Team"]:w,boostUsed:!0})})})}function xe(w=null){var F,R;if(!(r.phase===n+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const u=r[n+"Team"],x=r["usedSubIds_"+n]||[],y=r.maxSubs||3;if(x.length>=y){f(`Maximum ${y} remplacements atteint`,"warning");return}const h=Object.entries(u).flatMap(([O,Q])=>(Q||[]).filter(Y=>Y.used).map(Y=>({...Y,_line:O}))),v=(r[n+"Subs"]||[]).filter(O=>!x.includes(O.cardId));if(!h.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){f("Aucun remplaçant disponible","warning");return}let _=Math.max(0,h.findIndex(O=>O.cardId===w));const z=((F=h[_])==null?void 0:F._line)||((R=h[_])==null?void 0:R.job);let $=Math.max(0,v.findIndex(O=>O.job===z)),A=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function C(){var me,$e,ke,qe,Ce,Re;const O=h[_],Q=v[$],Y=Math.min(130,Math.round((window.innerWidth-90)/2)),ie=Math.round(Y*1.35),ae=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${x.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${Q?Ye({...Q,used:!1,boost:0},Y,ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae($>=v.length-1)}" ${$>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${O?Ye({...O,used:!1,boost:0},Y,ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(_>=h.length-1)}" ${_>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=S.querySelector("#psub-close"))==null||me.addEventListener("click",()=>S.remove()),($e=S.querySelector("#pout-up"))==null||$e.addEventListener("click",()=>{_>0&&(_--,C())}),(ke=S.querySelector("#pout-down"))==null||ke.addEventListener("click",()=>{_<h.length-1&&(_++,C())}),(qe=S.querySelector("#pin-up"))==null||qe.addEventListener("click",()=>{$>0&&($--,C())}),(Ce=S.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<v.length-1&&($++,C())});const fe=(Fe,Oe,De,Ke)=>{const Ne=S.querySelector("#"+Fe);if(!Ne)return;let He=0;Ne.addEventListener("touchstart",Ue=>{He=Ue.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Ue=>{const Je=Ue.changedTouches[0].clientY-He;if(Math.abs(Je)<30)return;const Ze=Oe();Je<0&&Ze<Ke-1?(De(Ze+1),C()):Je>0&&Ze>0&&(De(Ze-1),C())},{passive:!0})};fe("pin-panel",()=>$,Fe=>$=Fe,v.length),fe("pout-panel",()=>_,Fe=>_=Fe,h.length),(Re=S.querySelector("#psub-confirm"))==null||Re.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),A)return;A=!0;const Oe=h[_],De=v[$];if(!Oe||!De)return;const Ke=Oe._line,Ne=(u[Ke]||[]).findIndex(Je=>Je.cardId===Oe.cardId);if(Ne===-1){f("Erreur : joueur introuvable","error"),S.remove();return}const He={...De,_line:Ke,position:Oe.position,used:!1,boost:0};u[Ke].splice(Ne,1,He);const Ue=[...x,De.cardId];S.remove(),X(Oe,De,async()=>{await oe({[n+"Team"]:u,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Ue})})})}document.body.appendChild(S),C()}function X(w,k,u){const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const h=(z,$,A)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${A}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${x[z.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(z)?`<img src="${Pe(z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(z.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${h(k,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${h(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let v=!1;const _=()=>{v||(v=!0,y.remove(),setTimeout(()=>u(),50))};y.addEventListener("click",_),setTimeout(_,2200)}function ne(){var k;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(k=w.querySelector("#pvp-opp-close"))==null||k.addEventListener("click",()=>w.remove())}function ge(){var x;const w=r.log||[],k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const u=y=>{var v,_,z;if(y.type==="duel"){const $=y.isGoal,A=y.homeScored&&n==="p1"||!y.homeScored&&$&&n==="p2",S=y.homeScored?"#FFD700":$?"#ff6b6b":"rgba(255,255,255,0.3)",C=$?A?"⚽ BUT !":"⚽ BUT adversaire !":(v=y.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${$?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
          <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${C}</div>
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
      </div>`};k.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(u).join("")}
      </div>`,document.body.appendChild(k),(x=k.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>k.remove())}async function J(){if(r.phase!==n+"-attack")return;const w=n==="p1"?"p2":"p1",k=(r.round||0)+1,u=[...r.log||[]];u.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const x=be(r),y=Me(w),h=x||!y?"finished":w+"-attack";await oe({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:h,attacker:w,round:k,log:u}),h==="finished"&&await j(r)}async function Z(){const w=r[n+"Team"],k=!["GK","DEF","MIL","ATT"].some(h=>(r[o+"Team"][h]||[]).some(v=>!v.used)),u=(r["selected_"+n]||[]).map(h=>{const v=(w[h._role]||[]).find(C=>C.cardId===h.cardId)||h,_=k&&["GK","DEF"].includes(h._role),z=w[h._role]||[],$=z.findIndex(C=>C.cardId===h.cardId),A=lt(z.length),S=$>=0?A[$]:v._col??1;return{...v,_line:h._role,_col:S,..._?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!u.length)return;const x=Nt(u,r.modifiers[n]||{});P(n,u.map(h=>h.cardId)),u.forEach(h=>{const v=(w[h._role]||[]).find(_=>_.cardId===h.cardId);v&&(v.used=!0)}),r["selected_"+n]=[],pe();const y=[...r.log||[]];if(k){const h=(r[n+"Score"]||0)+1,v=u.map(S=>({name:S.name,note:je(S,S._line||"ATT"),portrait:Pe(S),job:S.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:x.total,aiTotal:0});const _=(r.round||0)+1,z=n==="p1"?"p2":"p1",$={...r,[n+"Team"]:w,[n+"Score"]:h},A=be($);D.add(_),_e(v,h,r[o+"Score"]||0,!0,async()=>{await oe({[n+"Team"]:w,[n+"Score"]:h,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:A?"finished":z+"-attack",attacker:z,round:_,log:y}),A&&await j({...r,[n+"Score"]:h})});return}y.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${x.total})`}),await oe({[n+"Team"]:w,[o+"Team"]:r[o+"Team"],pendingAttack:{...x,players:u,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:y})}async function V(){const w=r[n+"Team"],k=(r["selected_"+n]||[]).map(O=>{const Q=(w[O._role]||[]).find(me=>me.cardId===O.cardId)||O,Y=w[O._role]||[],ie=Y.findIndex(me=>me.cardId===O.cardId),ae=lt(Y.length),fe=ie>=0?ae[ie]:Q._col??1;return{...Q,_line:O._role,_col:fe}}),u=Rt(k,r.modifiers[n]||{});P(n,k.map(O=>O.cardId)),k.forEach(O=>{const Q=(w[O._role]||[]).find(Y=>Y.cardId===O.cardId);Q&&(Q.used=!0)}),r["selected_"+n]=[],pe();const x=Ot(r.pendingAttack.total,u.total,r.modifiers[n]||{}),y=r.pendingAttack.side,h=x==="attack"||(x==null?void 0:x.goal),v=y==="p1"?"p2":"p1",_=(r.round||0)+1,z=(r.pendingAttack.players||[]).map(O=>({name:O.name,note:je(O,O._line||"ATT"),portrait:Pe(O),job:O.job})),$=[...r.log||[]];$.push({type:"duel",isGoal:h,homeScored:h&&y===n,text:h?`⚽ BUT de ${r[y+"Name"]} ! (${r.pendingAttack.total} vs ${u.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${u.total})`,homePlayers:z,aiPlayers:k.map(O=>({name:O.name,note:je(O,O._line||"DEF"),portrait:Pe(O),job:O.job})),homeTotal:r.pendingAttack.total,aiTotal:u.total});const A=h?(r[y+"Score"]||0)+1:r[y+"Score"]||0,S={...r,[n+"Team"]:w,[y+"Score"]:A},C=be(S),F=C?"finished":v+"-attack",R=async()=>{await oe({[n+"Team"]:w,[o+"Team"]:r[o+"Team"],[y+"Score"]:A,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:F,attacker:v,round:_,log:$}),(F==="finished"||C)&&await j({...r,[y+"Score"]:A})};if(h){const O=y===n,Q=O?A:r[n+"Score"]||0,Y=O?r[o+"Score"]||0:A;D.add(_),_e(z,Q,Y,O,R)}else await R()}function se(w){return["MIL","ATT"].some(k=>(w[k]||[]).some(u=>!u.used))}function he(w){return["GK","DEF","MIL","ATT"].some(k=>(w[k]||[]).some(u=>!u.used))}function Se(w){return he(w)&&!se(w)}function Me(w){const k=r[w+"Team"],u=r[(w==="p1"?"p2":"p1")+"Team"];return!!(se(k)||!he(u)&&Se(k))}function be(w){const k=["MIL","ATT"].some($=>(w.p1Team[$]||[]).some(A=>!A.used)),u=["MIL","ATT"].some($=>(w.p2Team[$]||[]).some(A=>!A.used)),x=he(w.p1Team),y=he(w.p2Team);return!k&&!(!y&&x)&&(!u&&!(!x&&y))}function ze(w){const k=w.p1Score||0,u=w.p2Score||0;return k===u?null:k>u?g.home_id:g.away_id}async function j(w){try{const k=ze(w),u=k?g.home_id===k?g.away_id:g.home_id:null;await E.from("matches").update({status:"finished",winner_id:k,home_score:w.p1Score||0,away_score:w.p2Score||0}).eq("id",i),k&&u&&ki(k,u).catch(()=>{})}catch(k){console.error("[PvP] finishMatch:",k)}}function B(){var y;const w=r[n+"Score"],k=r[o+"Score"],u=w>k,x=w===k;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${u?"🏆":x?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${u?"Victoire !":x?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${k}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{E.removeChannel(U)}catch{}We(e),p("home")})}pe()}const St="#1A6B3C",xt="#D4A017";async function Jn(e,t){var s;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(s=t.state.params)==null?void 0:s.openLeagueId;if(i){t.state.params.openLeagueId=null,await bt(e,t,i);return}await _t(e,t)}async function _t(e,t,i="waiting"){var I;const{state:s}=t,l=s.profile.id,{data:d}=await E.from("mini_league_members").select("league_id").eq("user_id",l),a=(d||[]).map(L=>L.league_id),{data:p,error:f}=await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),n=f?(await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:p||[],m=(a.length?await E.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],b=m.filter(L=>L.status==="waiting"&&!L.is_archived),g=m.filter(L=>L.status==="active"&&!L.is_archived),T=m.filter(L=>L.is_archived||L.status==="finished"),r=n.filter(L=>!a.includes(L.id)),c=[{key:"waiting",label:"🟡 En attente",count:b.length+r.length},{key:"active",label:"🟢 En cours",count:g.length},{key:"archived",label:"📁 Archivées",count:T.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${c.map(L=>`<button class="ml-tab" data-tab="${L.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===L.key?St:"transparent"};background:none;font-size:12px;font-weight:${i===L.key?"900":"600"};color:${i===L.key?St:"#888"};cursor:pointer">${L.label}${L.count?` (${L.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Xn(b,r,l):i==="active"?Zn(g,l):Qn(T,l)}
    </div>
  </div>`,(I=document.getElementById("ml-create-btn"))==null||I.addEventListener("click",()=>er(e,t)),e.querySelectorAll(".ml-tab").forEach(L=>L.addEventListener("click",()=>_t(e,t,L.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(L=>L.addEventListener("click",()=>bt(e,t,L.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(L=>L.addEventListener("click",q=>{q.stopPropagation(),ko(e,t,L.dataset.join,L.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(L=>L.addEventListener("click",q=>{q.stopPropagation(),yi(e,t,L.dataset.delete,L.dataset.name,i)}))}function ei(e,t,i=!1){var a,p;const s=e.creator_id===t,l=e.pot||0,d=((p=(a=e.mini_league_members)==null?void 0:a[0])==null?void 0:p.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${s?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
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
  </div>`}function Xn(e,t,i){const s=[];return e.length&&(s.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),s.push(...e.map(l=>ei(l,i,!1)))),t.length&&(s.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),s.push(...t.map(l=>ei(l,i,!0)))),s.length?s.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Zn(e,t){return e.length?e.map(i=>ei(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Qn(e,t){return e.length?e.map(i=>ei(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function er(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",s=>{s.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(s=>s.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=s.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var T,r,c,I;const{toast:s}=t,l=document.getElementById("ml-name").value.trim(),d=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,p=((T=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:T.value)||"public",f=((r=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:r.value)||"aller",n=((I=(c=document.getElementById("ml-pwd"))==null?void 0:c.value)==null?void 0:I.trim())||null;if(!l){s("Le nom est obligatoire","error");return}if(a<100){s("Mise minimum : 100 crédits","error");return}if(p==="private"&&!n){s("Mot de passe requis","error");return}const{data:o,error:m}=await E.from("mini_leagues").insert({name:l,creator_id:t.state.profile.id,type:p,password:n,mode:f,max_players:d,entry_fee:a}).select().single();if(m){s("Erreur : "+m.message,"error");return}const{data:b}=await E.from("users").select("credits").eq("id",t.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<a){await E.from("mini_leagues").delete().eq("id",o.id),s(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await E.from("users").update({credits:b.credits-a}).eq("id",t.state.profile.id),await E.from("mini_leagues").update({pot:a}).eq("id",o.id),await E.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=b.credits-a);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),s(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),bt(e,t,o.id)})}function tr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),s=l=>{t.remove(),e(l)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>s(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>s(i.value.trim())),i.addEventListener("keydown",l=>{l.key==="Enter"&&s(i.value.trim())}),t.addEventListener("click",l=>{l.target===t&&s(null)})})}async function ko(e,t,i,s){const{toast:l,state:d}=t,a=d.profile.id,{data:p}=await E.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!p){l("Mini League introuvable","error");return}if(p.status!=="waiting"){l("Cette Mini League a déjà démarré","warning");return}const{count:f}=await E.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(f>=p.max_players){l("La Mini League est complète","warning");return}if(s==="private"){const r=await tr();if(r===null)return;if(p.password!==r){l("Mot de passe incorrect","error");return}}const n=p.entry_fee||100,{data:o}=await E.from("users").select("credits").eq("id",a).single();if(((o==null?void 0:o.credits)||0)<n){l(`Crédits insuffisants — il te faut ${n.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:m}=await E.from("mini_league_members").insert({league_id:i,user_id:a});if(m){l("Erreur inscription : "+m.message,"error");return}const{error:b}=await E.from("users").update({credits:o.credits-n}).eq("id",a),{error:g}=await E.from("mini_leagues").update({pot:(p.pot||0)+n}).eq("id",i);(b||g)&&console.error("Erreur post-inscription:",b,g),d.profile&&(d.profile.credits=o.credits-n);const T=document.getElementById("nav-credits");T&&(T.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`✅ Inscrit ! −${n.toLocaleString("fr")} cr. · Pot : ${((p.pot||0)+n).toLocaleString("fr")} cr.`,"success"),bt(e,t,i)}async function ir(e,t,i,s){const{toast:l,state:d}=t,a=d.profile.id;if(!confirm(`Te désinscrire et récupérer ${s.toLocaleString("fr")} cr. ?`))return;const{data:p}=await E.from("mini_leagues").select("pot,status").eq("id",i).single();if(!p||p.status!=="waiting"){l("Impossible — la league a déjà démarré","error");return}const{data:f}=await E.from("users").select("credits").eq("id",a).single();await E.from("mini_leagues").update({pot:Math.max(0,(p.pot||0)-s)}).eq("id",i),await E.from("users").update({credits:((f==null?void 0:f.credits)||0)+s}).eq("id",a),await E.from("mini_league_members").delete().eq("league_id",i).eq("user_id",a),d.profile&&(d.profile.credits=((f==null?void 0:f.credits)||0)+s);const n=document.getElementById("nav-credits");n&&(n.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`↩️ Désinscrit · +${s.toLocaleString("fr")} cr. remboursés`,"success"),_t(e,t,"waiting")}async function yi(e,t,i,s,l){const{toast:d}=t;if(!confirm(`Supprimer définitivement "${s}" et tous ses matchs/membres ? Action irréversible.`))return;await E.from("mini_league_matches").delete().eq("league_id",i),await E.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await E.from("mini_leagues").delete().eq("id",i);if(a){d("Erreur suppression ("+a.message+")","error");return}d("Mini League supprimée avec succès","success"),_t(e,t,l)}async function or(e,t,i){await E.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),_t(e,t,"archived")}async function bt(e,t,i){var H,D,G,M,U,oe,de,N,W;const{state:s,toast:l}=t,d=s.profile.id,[{data:a},{data:p},{data:f}]=await Promise.all([E.from("mini_leagues").select("*").eq("id",i).single(),E.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),E.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){l("Introuvable","error"),await _t(e,t);return}const n=(p||[]).some(K=>K.user_id===d),o=a.creator_id===d,m=(p||[]).map(K=>K.user).filter(Boolean),b=To(m,f||[]),g=(f||[]).filter(K=>K.matchday===a.current_day),T=a.pot||0,r=a.entry_fee||100,c=g.length>0&&g.every(K=>K.status==="finished"||K.status==="bye"),I=a.current_day>=a.total_days,L=(p||[]).find(K=>K.user_id===d);e.innerHTML=`
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
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${m.length}/${a.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${r} cr./joueur → Pot estimé : ${(r*m.length).toLocaleString("fr")} cr. (🥇${Math.floor(r*m.length*.7).toLocaleString("fr")} · 🥈${Math.floor(r*m.length*.2).toLocaleString("fr")} · 🥉${Math.floor(r*m.length*.1).toLocaleString("fr")})</div>
        ${m.map(K=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${K.club_color2||St};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${K.club_color1||"#fff"}">${(K.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${K.club_name||K.pseudo}</div><div style="font-size:11px;color:#999">@${K.pseudo}</div></div>
            ${K.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${o&&m.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${r} cr. × ${m.length})</button>`:""}
        ${o?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${n?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${r} cr.)</button>`}
        ${n&&!o?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${r.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${g.map(K=>Oi(K,m,d,n)).join("")}
        ${o&&c&&!I?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&c&&I?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&b.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${T>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${xt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((K,P)=>{const re=T>0&&a.status==="finished"?P===0?Math.floor(T*.7):P===1?Math.floor(T*.2):P===2?Math.floor(T*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${K.userId===d?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${P===0?xt:P<3?St:"#555"}">${["🥇","🥈","🥉"][P]||P+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${K.clubName}</div><div style="font-size:10px;color:#999">@${K.pseudo}</div></td>
              <td style="text-align:center">${K.played}</td><td style="text-align:center">${K.won}-${K.drawn}-${K.lost}</td>
              <td style="text-align:center;color:${K.goalDiff>=0?St:"#cc2222"}">${K.goalDiff>=0?"+":""}${K.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${K.points}</td>
              ${T>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${xt}">${re?re.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(K,P)=>P+1).reverse().map(K=>{const P=(f||[]).filter(re=>re.matchday===K);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${K}</div>${P.map(re=>Oi(re,m,d,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const q=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((H=document.getElementById("ml-back"))==null||H.addEventListener("click",()=>_t(e,t,q)),(D=document.getElementById("ml-start-btn"))==null||D.addEventListener("click",()=>nr(e,t,a,m)),(G=document.getElementById("ml-next-day"))==null||G.addEventListener("click",()=>rr(e,t,i)),(M=document.getElementById("ml-finish-btn"))==null||M.addEventListener("click",()=>Eo(e,t,i,T,b,m)),(U=document.getElementById("ml-join-now"))==null||U.addEventListener("click",()=>ko(e,t,i,a.type)),(oe=document.getElementById("ml-leave-btn"))==null||oe.addEventListener("click",()=>ir(e,t,i,r)),(de=document.getElementById("ml-delete-btn"))==null||de.addEventListener("click",()=>yi(e,t,i,a.name,"waiting")),(N=document.getElementById("ml-delete-now"))==null||N.addEventListener("click",()=>yi(e,t,i,a.name,q)),(W=document.getElementById("ml-archive-btn"))==null||W.addEventListener("click",()=>or(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(K=>{K.addEventListener("click",()=>{const P=g.find(re=>re.id===K.dataset.playMatch);P&&t.navigate("match-mini-league",{mlMatchId:P.id,leagueId:i})})}),a.status==="finished"&&L){const K=b.findIndex(P=>P.userId===d);K>=0&&K<3&&L.prize_amount>0&&setTimeout(()=>ar(e,t,a,L,K),400)}}function Oi(e,t,i,s,l=!1){const d=m=>t.find(b=>b.id===m);if(e.is_bye){const m=d(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"?"} exempté(e)</div>`}const a=d(e.home_id),p=d(e.away_id),f=e.home_id===i||e.away_id===i,n=f&&e.status==="pending"&&s&&!l,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${f?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${f?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?St:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(p==null?void 0:p.club_name)||(p==null?void 0:p.pseudo)||"?"}</div>
    ${n?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function nr(e,t,i,s){const{toast:l,state:d}=t,a=sr(s.map(n=>n.id),i.mode),p=[];a.forEach((n,o)=>n.forEach(m=>p.push({league_id:i.id,matchday:o+1,home_id:m.home||m.bye,away_id:m.away||null,is_bye:!!m.bye,status:m.bye?"bye":"pending"})));const{error:f}=await E.from("mini_league_matches").insert(p);if(f){l("Erreur calendrier : "+f.message,"error");return}await E.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),l(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),bt(e,t,i.id)}async function rr(e,t,i){const{data:s}=await E.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),l=(s.current_day||0)+1;if(l>(s.total_days||0)){await Eo(e,t,i,s.pot||0,null,null);return}await E.from("mini_leagues").update({current_day:l}).eq("id",i),t.toast(`Journée ${l} commencée !`,"success"),bt(e,t,i)}async function Eo(e,t,i,s,l,d){const{toast:a,state:p}=t;let f=l,n=d;if(!f){const{data:m}=await E.from("mini_league_matches").select("*").eq("league_id",i),{data:b}=await E.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);n=(b||[]).map(g=>g.user).filter(Boolean),f=To(n,m||[])}const o=[Math.floor(s*.7),Math.floor(s*.2),Math.floor(s*.1)];await Promise.all(f.slice(0,3).map((m,b)=>o[b]?E.from("mini_league_members").update({prize_amount:o[b],prize_claimed:!1}).eq("league_id",i).eq("user_id",m.userId):Promise.resolve())),await E.from("mini_leagues").update({status:"finished"}).eq("id",i),a("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),bt(e,t,i)}async function ar(e,t,i,s,l){var b,g;const{state:d,toast:a}=t,p=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],f=["🥇","🥈","🥉"][l],n=s.prize_amount||p[l]||0,o=s.prize_claimed,m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",m.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${f}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${l===0?"Champion !":l===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${xt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${o?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${xt}">${n.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${l===0?"70%":l===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${o?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${xt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${n.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(m),(b=m.querySelector("#prize-close"))==null||b.addEventListener("click",()=>m.remove()),m.addEventListener("click",T=>{T.target===m&&m.remove()}),(g=m.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async()=>{const{data:T}=await E.from("users").select("credits").eq("id",d.profile.id).single();await E.from("users").update({credits:((T==null?void 0:T.credits)||0)+n}).eq("id",d.profile.id),await E.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",d.profile.id),d.profile&&(d.profile.credits=((T==null?void 0:T.credits)||0)+n);const r=document.getElementById("nav-credits");r&&(r.textContent=`💰 ${d.profile.credits.toLocaleString("fr")}`),a(`💰 +${n.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),m.remove(),bt(e,t,i.id)})}function sr(e,t){const s=e.length%2===0?[...e]:[...e,null],l=s.length;let d=s.slice(1);const a=[];for(let p=0;p<l-1;p++){const f=[],n=[s[0],...d];for(let o=0;o<l/2;o++){const m=n[o],b=n[l-1-o];m===null?f.push({bye:b}):b===null?f.push({bye:m}):f.push({home:m,away:b})}a.push(f),d=[d[d.length-1],...d.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(p=>p.map(f=>f.bye?f:{home:f.away,away:f.home}))]:a}function To(e,t){const i={};return e.forEach(s=>{i[s.id]={userId:s.id,pseudo:s.pseudo,clubName:s.club_name||s.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(s=>s.status==="finished"&&!s.is_bye&&s.home_score!=null).forEach(s=>{const l=i[s.home_id],d=i[s.away_id];!l||!d||(l.played++,d.played++,l.goalsFor+=s.home_score,l.goalsAgainst+=s.away_score,d.goalsFor+=s.away_score,d.goalsAgainst+=s.home_score,s.home_score>s.away_score?(l.won++,l.points+=3,d.lost++):s.home_score<s.away_score?(d.won++,d.points+=3,l.lost++):(l.drawn++,l.points++,d.drawn++,d.points++),l.goalDiff=l.goalsFor-l.goalsAgainst,d.goalDiff=d.goalsFor-d.goalsAgainst)}),Object.values(i).sort((s,l)=>l.points-s.points||l.goalDiff-s.goalDiff||l.goalsFor-s.goalsFor)}async function Hi(e,t,i,s){var l,d;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:s};try{const a=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(E.getChannels?E.getChannels():[]).forEach(f=>{const n=f.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&E.removeChannel(f)})}catch(p){console.warn("[FriendMatch] cleanup canaux:",p)}a&&(await E.rpc("cancel_matchmaking",{p_user_id:a}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",a).then(()=>{},()=>{}))}catch{}await ai(e,t,"random",({deckId:a,formation:p,starters:f,subsRaw:n,gcCardsEnriched:o,gcDefs:m,stadiumDef:b})=>{const g=T=>dr(e,t,a,p,f,n,T,m||[],i);if(!o.length){g([]);return}ri(e,o,g)})}async function dr(e,t,i,s,l,d,a=[],p=[],f,n){const{state:o,navigate:m,toast:b}=t,g=o.profile.id;let T=!1,r=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:g})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",g)}catch{}const{data:c}=await E.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",f).single();if(!c){b("Match introuvable","error"),We(e),m("mini-league");return}if(c.home_id!==g&&c.away_id!==g){b("Tu ne fais pas partie de ce match","error"),We(e),m("mini-league");return}const I=c.home_id===g,L=I?c.away:c.home,q=I?c.away_id:c.home_id,H=(G,M)=>{var U;e.innerHTML=`
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
            <div style="font-size:12px;font-weight:700">${(L==null?void 0:L.club_name)||(L==null?void 0:L.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(U=document.getElementById("lobby-cancel"))==null||U.addEventListener("click",()=>{T=!0,clearInterval(r),We(e),m("mini-league")})},D=async(G,M)=>{T=!0,clearInterval(r),await new Promise(U=>setTimeout(U,600)),e.isConnected&&lr(e,t,G,M,a,p)};if(H(),I){let G=c.match_id;if(!G){const{data:U,error:oe}=await E.from("matches").insert({home_id:g,away_id:q,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(oe||!U){b("Erreur création match","error"),We(e),m("mini-league");return}G=U.id,await E.from("mini_league_matches").update({match_id:G,status:"playing"}).eq("id",f)}const M=G;r=setInterval(async()=>{if(T){clearInterval(r);return}const{data:U}=await E.from("matches").select("away_deck_id").eq("id",M).single();U!=null&&U.away_deck_id&&(clearInterval(r),D(M,!0))},1500)}else{let G=c.match_id;r=setInterval(async()=>{if(T){clearInterval(r);return}const{data:M}=await E.from("mini_league_matches").select("match_id").eq("id",f).single();M!=null&&M.match_id&&(clearInterval(r),G=M.match_id,await E.from("matches").update({away_deck_id:i}).eq("id",G),D(G,!1))},1500)}}async function lr(e,t,i,s,l=[],d=[]){var k;const{state:a,navigate:p,toast:f}=t,n=((k=a.params)==null?void 0:k.leagueId)||null,o=s?"p1":"p2",m=s?"p2":"p1",b=(l||[]).map(u=>u.id),g=(l||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:T}=await E.from("matches").select("*").eq("id",i).single();if(!T){f("Match introuvable","error"),p("mini-league");return}async function r(){const[{data:u},{data:x},{data:y},{data:h}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:T.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:T.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",T.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",T.away_id).single()]),v=S=>{const C=Number(S.evolution_bonus)||0;return{cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:(Number(S.note_g)||0)+(S.job==="GK"||S.job2==="GK"&&Number(S.note_g)>0?C:0),note_d:(Number(S.note_d)||0)+(S.job==="DEF"||S.job2==="DEF"&&Number(S.note_d)>0?C:0),note_m:(Number(S.note_m)||0)+(S.job==="MIL"||S.job2==="MIL"&&Number(S.note_m)>0?C:0),note_a:(Number(S.note_a)||0)+(S.job==="ATT"||S.job2==="ATT"&&Number(S.note_a)>0?C:0),evolution_bonus:C,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},_=((u==null?void 0:u.starters)||[]).map(S=>v(S)),z=((x==null?void 0:x.starters)||[]).map(S=>v(S)),$=(u==null?void 0:u.formation)||"4-4-2",A=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:(()=>{const S=yt(_,$);return stadiumDef?Ht(S,stadiumDef):S})(),p2Team:yt(z,A),p1Subs:(()=>{const S=((u==null?void 0:u.subs)||[]).map(C=>v(C));return stadiumDef&&oi(S,stadiumDef),S})(),p2Subs:((x==null?void 0:x.subs)||[]).map(S=>v(S)),p1Formation:$,p2Formation:A,p1Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?b:[],gc_p2:s?[]:b,gcCardsFull_p1:s?g:[],gcCardsFull_p2:s?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let c=T.game_state&&Object.keys(T.game_state).length?T.game_state:null;if(!c)if(s){c=await r();const{data:u}=await E.from("matches").select("game_state").eq("id",i).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await E.from("matches").update({game_state:c,turn_user_id:T.home_id}).eq("id",i):c=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!c;u++){await new Promise(y=>setTimeout(y,400));const{data:x}=await E.from("matches").select("game_state").eq("id",i).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(c=x.game_state)}if(!c){f("Erreur de synchronisation","error"),p("mini-league");return}c.gc_p2=b,c.gcCardsFull_p2=g,await E.from("matches").update({game_state:c}).eq("id",i)}let I=!1,L=!1,q=!1,H=null,D=!1;const G=new Set,M=new Set;function U(u){var S,C;try{E.removeChannel(oe)}catch{}const x=c[o+"Score"]||0,y=c[m+"Score"]||0;if(!q){q=!0;const F=u.winner_id||(x>y?a.profile.id:y>x?"opp":null),R=F===a.profile.id?"win":F?"loss":null;R&&ti(()=>Promise.resolve().then(()=>no),void 0).then(O=>O.applyOwnEvolution(a.profile.id,R)).catch(()=>{})}if(!L){const F=c.p1Score||0,R=c.p2Score||0,O=(c.usedGc_p1||[]).length,Q=(c.usedGc_p2||[]).length,Y=u.winner_id||(F>R?T.home_id:R>F?T.away_id:null);(Y?a.profile.id===Y:a.profile.id<(s?T.away_id:T.home_id))&&(L=!0,Zi({player1Id:T.home_id,player2Id:T.away_id,score1:F,score2:R,gc1:O,gc2:Q}).catch(ae=>console.warn("[FriendMatch] updateStats:",ae)))}let h,v;u.winner_id?(h=u.winner_id===a.profile.id,v=!1):u.forfeit?(h=x>y,v=!1):(v=x===y,h=x>y),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const _=document.createElement("div");_.id="pvp-end-overlay",_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const z=v?"🤝":h?"🏆":"😞",$=v?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",A=v?"#fff":h?"#FFD700":"#ff6b6b";_.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${A}">${$}</div>
      <div style="font-size:18px">${c[o+"Name"]} ${x} – ${y} ${c[m+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(_),(C=_.querySelector("#pvp-end-home"))==null||C.addEventListener("click",()=>{_.remove(),We(e),n?p("mini-league",{openLeagueId:n}):p("mini-league")})}const oe=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},u=>{const x=u.new;try{if(x.status==="finished"||x.forfeit){if(I||(I=!0,H&&(clearInterval(H),H=null),x.game_state&&(c=x.game_state),c.phase==="finished"&&!x.forfeit&&document.getElementById("pvp-home")))return;U(x);return}if(x.game_state){const y=c;c=x.game_state;const h=c._lastGC;if(h&&h.seq&&!M.has(h.seq)&&(M.add(h.seq),h.by!==o)){Ae(h.type,h.by,()=>ye());return}const v=y[o+"Score"]||0,_=y[m+"Score"]||0,z=c[o+"Score"]||0,$=c[m+"Score"]||0,A=z>v,S=$>_;if((A||S)&&!G.has(c.round)){G.add(c.round);const C=[...c.log||[]].reverse().find(R=>R.isGoal),F=((C==null?void 0:C.homePlayers)||[]).map(R=>({name:R.name,note:R.note,portrait:R.portrait,job:R.job}));we(F,z,$,A,()=>ye());return}ye()}}catch(y){console.error("[PvP] crash:",y)}}).subscribe();async function de(u){Object.assign(c,u),c.lastActionAt=new Date().toISOString();const{error:x}=await E.from("matches").update({game_state:c}).eq("id",i);x&&f("Erreur de synchronisation","error");try{ye()}catch(y){console.error("[PvP] renderPvpScreen crash:",y)}}async function N(){if(I)return;I=!0,H&&(clearInterval(H),H=null);const u=s?T.away_id:T.home_id,x=s?"p2":"p1",y=s?"p1":"p2",h={...c,[x+"Score"]:3,[y+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",i)}catch{}try{E.removeChannel(oe)}catch{}setTimeout(()=>{We(e),p("mini-league")},800)}const W={BOOST_STAT:({value:u=1,count:x=1,roles:y=[]},h,v)=>{const _=h[o+"Team"],z=Object.entries(_).filter(([$])=>!y.length||y.includes($)).flatMap(([$,A])=>A.filter(S=>!S.used).map(S=>({...S,_line:$})));if(!z.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(h);return}K(z,x,`Choisir ${x} joueur(s) à booster (+${u})`,$=>{$.forEach(A=>{const S=(_[A._line]||[]).find(C=>C.cardId===A.cardId);S&&(S.boost=(S.boost||0)+u,h.log.push({text:`⚡ +${u} sur ${S.name}`,type:"info"}))}),h[o+"Team"]=_,v(h)})},DEBUFF_STAT:({value:u=1,count:x=1,roles:y=[],target:h="ai"},v,_)=>{const z=h==="home"?o:m,$=v[z+"Team"],A=h==="home"?"allié":"adverse",S=Object.entries($).filter(([C])=>!y.length||y.includes(C)).flatMap(([C,F])=>F.map(R=>({...R,_line:C})));if(!S.length){v.log.push({text:`🎯 Aucun joueur ${A}`,type:"info"}),_(v);return}K(S,x,`Choisir ${x} joueur(s) ${A}(s) (-${u})`,C=>{C.forEach(F=>{const R=($[F._line]||[]).find(O=>O.cardId===F.cardId);R&&(R.boost=(R.boost||0)-u,v.log.push({text:`🎯 -${u} sur ${R.name}`,type:"info"}))}),v[z+"Team"]=$,_(v)})},GRAY_PLAYER:({count:u=1,roles:x=[],target:y="ai"},h,v)=>{const _=y==="home"?o:m,z=h[_+"Team"],$=y==="home"?"allié":"adverse",A=Object.entries(z).filter(([S])=>!x.length||x.includes(S)).flatMap(([S,C])=>C.filter(F=>!F.used).map(F=>({...F,_line:S})));if(!A.length){h.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),v(h);return}K(A,u,`Choisir ${u} joueur(s) ${$}(s) à exclure`,S=>{const C="usedCardIds_"+_,F=new Set(h[C]||[]);S.forEach(R=>{const O=(z[R._line]||[]).find(Q=>Q.cardId===R.cardId);O&&(O.used=!0,F.add(R.cardId),h.log.push({text:`❌ ${O.name} exclu !`,type:"info"}))}),h[C]=[...F],h[_+"Team"]=z,v(h)})},REVIVE_PLAYER:({count:u=1,roles:x=[]},y,h)=>{const v=y[o+"Team"],_=Object.entries(v).filter(([z])=>!x.length||x.includes(z)).flatMap(([z,$])=>$.filter(A=>A.used).map(A=>({...A,_line:z})));if(!_.length){y.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(y);return}K(_,u,`Choisir ${u} joueur(s) à ressusciter`,z=>{z.forEach($=>{const A=(v[$._line]||[]).find(S=>S.cardId===$.cardId);A&&(A.used=!1,y.log.push({text:`💫 ${A.name} ressuscité !`,type:"info"}))}),y[o+"Team"]=v,h(y)})},REMOVE_GOAL:({},u,x)=>{const y=m+"Score";u[y]>0?(u[y]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(u)},ADD_GOAL_DRAW:({},u,x)=>{u[o+"Score"]===u[m+"Score"]?(u[o+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(u)},ADD_SUB:({value:u=1},x,y)=>{x.maxSubs=(x.maxSubs||3)+u,x.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),y(x)},CUSTOM:({},u,x)=>x(u)};function K(u,x,y,h){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let _=[];function z(){var A,S;const $=u.map(C=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[C._line]||"#555",R=je(C,C._line)+(C.boost||0),Q=_.find(ie=>ie.cardId===C.cardId)?"#FFD700":"rgba(255,255,255,0.25)",Y=C.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${C.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Q};background:${F};overflow:hidden;cursor:pointer;${Y}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${C.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${R}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${C._line}</div>
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
        </div>`,(A=v.querySelector("#pp-close"))==null||A.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(C=>{C.addEventListener("click",()=>{const F=C.dataset.cid,R=u.find(Q=>Q.cardId===F),O=_.findIndex(Q=>Q.cardId===F);R&&(O>-1?_.splice(O,1):_.length<x&&_.push(R),z())})}),(S=v.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{v.remove(),h(_)})}z(),document.body.appendChild(v)}async function P(u,x){const h=(c["gcCardsFull_"+o]||[]).find($=>$.id===u),v=(h==null?void 0:h._gcDef)||(c.gcDefs||[]).find($=>{var A;return $.name===x||((A=$.name)==null?void 0:A.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),_=[...c["usedGc_"+o]||[],u],z={type:x,by:o,seq:(c._gcAnimSeq||0)+1};M.add(z.seq),Ae(x,o,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const A=W[v.effect_type];if(A){const S={...c};A(v.effect_params||{},S,async C=>{C["usedGc_"+o]=_,C._lastGC=z,C._gcAnimSeq=z.seq,await de(C)});return}}const $={...c};switch(x){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const A=m+"Score";$[A]>0&&($[A]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+o]=_,$._lastGC=z,$._gcAnimSeq=z.seq,await de($)})}function re(u,x){const y="usedCardIds_"+u,h=new Set(c[y]||[]);x.forEach(v=>h.add(v)),c[y]=[...h]}function pe(){for(const u of["p1","p2"]){const x=new Set(c["usedCardIds_"+u]||[]),y=c[u+"Team"];if(y)for(const h of["GK","DEF","MIL","ATT"])(y[h]||[]).forEach(v=>{v.used=x.has(v.cardId)})}}function ye(){var nt,gt,le,Ee,te,ue;if(c.phase==="reveal")return Le();if(c.phase==="midfield")return _e();if(c.phase==="finished")return w();const u=c[o+"Team"],x=c[m+"Team"];pe();const y=c[o+"Score"],h=c[m+"Score"],v=c[o+"Name"],_=c[m+"Name"],z=c.phase===o+"-attack",$=c.phase===o+"-defense",A=Array.isArray(c["selected_"+o])?c["selected_"+o]:[],S=A.map(ee=>ee.cardId),C=window.innerWidth>=700,F=c[o+"Subs"]||[],R=c["usedSubIds_"+o]||[],O=F.filter(ee=>!R.includes(ee.cardId)),Q=c["gcCardsFull_"+o]||[],Y=c["usedGc_"+o]||[],ie=Q.filter(ee=>!Y.includes(ee.id)),ae=c.boostOwner===o&&!c.boostUsed,fe=!["GK","DEF","MIL","ATT"].some(ee=>(x[ee]||[]).some(ce=>!ce.used)),me=[...u.MIL||[],...u.ATT||[]].filter(ee=>!ee.used),$e=z&&fe&&me.length===0?[...u.GK||[],...u.DEF||[]].filter(ee=>!ee.used).map(ee=>ee.cardId):[];function ke(ee,ce,Be){var Si,Li;const Te=ee._gcDef,tt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Te==null?void 0:Te.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",it={purple:"#b06ce0",light_blue:"#00d4ef"}[Te==null?void 0:Te.color]||"#b06ce0",rt=(Te==null?void 0:Te.name)||ee.gc_type,st=(Te==null?void 0:Te.effect)||((Si=Ve[ee.gc_type])==null?void 0:Si.desc)||"",ct=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,$t=((Li=Ve[ee.gc_type])==null?void 0:Li.icon)||"⚡",pt=Math.round(Be*.22),ht=Math.round(Be*.22),kt=Be-pt-ht,Ut=rt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ee.id}" data-gc-type="${ee.gc_type}"
        style="box-sizing:border-box;width:${ce}px;height:${Be}px;border-radius:10px;border:2px solid ${it};background:${tt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${pt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Ut}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ce-6}px">${rt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${kt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ct?`<img src="${ct}" style="max-width:${ce-10}px;max-height:${kt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(kt*.55)}px">${$t}</span>`}
        </div>
        <div style="height:${ht}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${st.slice(0,38)}</span>
        </div>
      </div>`}function qe(ee,ce){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ee}px;height:${ce}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ce*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ce*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ce*.09)}px;color:#000;font-weight:900">+${c.boostValue}</div>
      </div>`}const Ce=(ee,ce)=>ce?qe(130,175):ke(ee,130,175),Re=(ee,ce)=>ce?qe(68,95):ke(ee,68,95),Fe=C?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=z?be(o)?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${A.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Fe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${A.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${_}</div>`,De=z&&!be(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':z||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${A.length}/3 sélectionné(s)</div>`:"",Ke=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${C?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${O.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':O.map(ee=>`<div class="pvp-sub-btn" data-sub-id="${ee.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(ee,C?76:44,C?100:58)}</div>`).join("")}
    </div>`,Ne=z?"attack":$?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(u,c[o+"Formation"],Ne,S,300,300,$e)}
      </div>
    </div>`;function Ue(ee){if(ee.type==="duel"&&(ee.homeTotal!=null||ee.aiTotal!=null)){const ce=(ee.homeTotal||0)>=(ee.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
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
        </div>`}return`<div style="font-size:11px;color:${ee.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ee.type==="goal"?700:400};padding:3px 2px">${ee.text||""}</div>`}const Je=(()=>{var ce,Be;if($&&((ce=c.pendingAttack)!=null&&ce.players)){const Te=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${_} ATTAQUE — Défendez !</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#ff6b6b",Te.total)}
        </div>`}if(z&&((Be=c.pendingAttack)!=null&&Be.players)){const Te=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#00ff88",Te.total)}
        </div>`}const ee=(c.log||[]).slice(-1)[0];return ee?'<div style="padding:2px 4px">'+Ue(ee)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ze=`
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
        ▼ Historique (${(c.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",C?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ze}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ke}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${He}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Oe}${De}
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
              ${ft(u,c[o+"Formation"],Ne,S,300,300,$e)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ie.map(ee=>Re(ee,!1)).join("")}
            ${ae?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${z&&O.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${z&&O.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${z&&O.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${z&&O.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${O.length}</div>
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
          <div>${Oe}${De}</div>
        </div>
      </div>`;function Qe(){const ee=e.querySelector(".match-screen");if(!ee)return;const ce=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ee.style.height=ce+"px",ee.style.minHeight=ce+"px",ee.style.maxHeight=ce+"px",ee.style.overflow="hidden";const Be=e.querySelector("#mobile-action-bar"),Te=e.querySelector("#mobile-play-area");Be&&Te&&(Te.style.paddingBottom=Be.offsetHeight+"px")}if(Qe(),setTimeout(Qe,120),setTimeout(Qe,400),D||(D=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Qe),window.visualViewport.addEventListener("scroll",Qe)),window.addEventListener("resize",Qe)),function(){const ce=e.querySelector(".terrain-wrapper svg");ce&&(ce.removeAttribute("width"),ce.removeAttribute("height"),ce.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ce.setAttribute("viewBox","-26 -26 352 352"),ce.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ee=>{ee.addEventListener("click",()=>{if(!z&&!$)return;const ce=ee.dataset.cardId,Be=ee.dataset.role,Te=(u[Be]||[]).find(st=>st.cardId===ce);if(!Te||Te.used)return;const tt=$e.includes(ce);if(z&&!["MIL","ATT"].includes(Be)&&!tt)return;Array.isArray(c["selected_"+o])||(c["selected_"+o]=[]);const it=c["selected_"+o],rt=it.findIndex(st=>st.cardId===ce);rt>-1?it.splice(rt,1):it.length<3&&it.push({...Te,_role:Be}),ye()})}),e.querySelectorAll(".match-used-hit").forEach(ee=>{ee.addEventListener("click",()=>X(ee.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ee=>{ee.addEventListener("click",()=>X())}),(nt=e.querySelector("#pvp-sub-open"))==null||nt.addEventListener("click",()=>X()),e.querySelectorAll(".pvp-gc-mini").forEach(ee=>{ee.addEventListener("click",()=>Ie(ee.dataset.gcId,ee.dataset.gcType))}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>xe()),(le=e.querySelector("#pvp-action"))==null||le.addEventListener("click",ee=>{z?ee.currentTarget.dataset.pass==="1"||!be(o)?Z():V():$&&se()}),(Ee=e.querySelector("#pvp-quit"))==null||Ee.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&N()}),(te=e.querySelector("#pvp-view-opp"))==null||te.addEventListener("click",()=>ge()),(ue=e.querySelector("#pvp-toggle-history"))==null||ue.addEventListener("click",()=>J()),H&&(clearInterval(H),H=null),(z||$)&&!I){let ee=30,ce=!1;const Be=()=>document.getElementById("pvp-timer"),Te=()=>{Be()&&(Be().textContent=ee+"s",Be().style.color=ce?"#ff4444":"#fff")};Te(),H=setInterval(()=>{ee--,ee<0?ce?(clearInterval(H),H=null,z&&!be(o)?Z():N()):(ce=!0,ee=15,Te()):Te()},1e3)}}function Le(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${c[m+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(c[m+"Team"],c[m+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await de({phase:"midfield"})},5e3)}let ve=!1;function _e(){if(ve)return;const u=c[o+"Team"].MIL||[],x=c[m+"Team"].MIL||[];function y(ie){return ie.reduce((ae,fe)=>ae+je(fe,"MIL"),0)}function h(ie){let ae=0;for(let fe=0;fe<ie.length-1;fe++){const me=at(ie[fe],ie[fe+1]);me==="#00ff88"?ae+=2:me==="#FFD700"&&(ae+=1)}return ae}const v=y(u)+h(u),_=y(x)+h(x),z=v>=_;function $(ie,ae,fe){return`<div id="duel-row-${fe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
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
      ${$(u,c[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(x,c[m+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const A=(ie,ae)=>e.querySelectorAll(ie).forEach((fe,me)=>{setTimeout(()=>{fe.style.opacity="1",fe.style.transform="translateY(0) scale(1)"},ae+me*90)});A(".duel-card-me",150),A(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ie,ae)=>setTimeout(()=>{ie.style.opacity="1"},ae*70)),900),setTimeout(()=>{const ie=e.querySelector("#pvp-vs");ie&&(ie.style.opacity="1",ie.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ae=>ae.style.opacity="1")},1250);function S(ie,ae,fe){const me=document.getElementById(ie);if(!me)return;const $e=performance.now(),ke=qe=>{const Ce=Math.min(1,(qe-$e)/fe);me.textContent=Math.round(ae*(1-Math.pow(1-Ce,3))),Ce<1?requestAnimationFrame(ke):me.textContent=ae};requestAnimationFrame(ke)}setTimeout(()=>{S("pvp-score-me",v,800),S("pvp-score-opp",_,800)},1500);const C=c.p1Team.MIL||[],F=c.p2Team.MIL||[],R=y(C)+h(C),O=y(F)+h(F),Q=R>=O?"p1":"p2";let Y=c.boostValue;Y==null&&(Y=ni(),c.boostValue=Y,c.boostOwner=Q,c.boostUsed=!1),ve=!0,setTimeout(()=>{const ie=e.querySelector("#duel-row-"+(z?"me":"opp")),ae=e.querySelector("#duel-row-"+(z?"opp":"me")),fe=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),$e=z?fe:me,ke=z?me:fe;$e&&($e.style.fontSize="80px",$e.style.color=z?"#FFD700":"#ff6b6b",$e.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),ke&&(ke.style.opacity="0.25"),setTimeout(()=>{ie&&(ie.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ie.style.zIndex="5"),setTimeout(()=>{const qe=document.getElementById("duel-shock");qe&&(qe.style.animation="shockwave .5s ease-out forwards"),ae&&(ae.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Fe;const qe=document.getElementById("pvp-duel-finale");if(!qe)return;const Ce=c.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Y+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;qe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+c[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+c[m+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ce+Re,qe.style.transition="opacity .45s ease",qe.style.opacity="1",qe.style.pointerEvents="auto",(Fe=document.getElementById("pvp-start-match"))==null||Fe.addEventListener("click",async()=>{const Oe=Q;await de({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:Y,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function we(u,x,y,h,v){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const z=Array.from({length:10},(C,F)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${F%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][F%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};_.innerHTML=`
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
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(C=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[C.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${C.portrait?`<img src="${C.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(C.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(_);let A=!1;const S=()=>{A||(A=!0,_.remove(),setTimeout(()=>v(),50))};_.addEventListener("click",S),setTimeout(S,3500)}function Ae(u,x,y){var Y,ie;const h=(c.gcDefs||[]).find(ae=>{var fe;return ae.name===u||((fe=ae.name)==null?void 0:fe.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",z=(h==null?void 0:h.name)||u,$=(h==null?void 0:h.effect)||((Y=Ve[u])==null?void 0:Y.desc)||"",A=h!=null&&h.image_url?`/icons/${h.image_url}`:null,S=((ie=Ve[u])==null?void 0:ie.icon)||"⚡",F=x===o?"Vous":c[x+"Name"]||"Adversaire",R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",R.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${_}66}50%{box-shadow:0 0 60px ${_}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${_};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${F} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${_};background:${v};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${z.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${z}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(R);let O=!1;const Q=()=>{O||(O=!0,R.remove(),setTimeout(()=>y&&y(),50))};R.addEventListener("click",Q),setTimeout(Q,3e3)}function Ie(u,x){var R,O,Q,Y;const h=(c["gcCardsFull_"+o]||[]).find(ie=>ie.id===u),v=h==null?void 0:h._gcDef,_={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",z={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",$=(v==null?void 0:v.name)||x,A=(v==null?void 0:v.effect)||((R=Ve[x])==null?void 0:R.desc)||"Carte spéciale.",S=v!=null&&v.image_url?`/icons/${v.image_url}`:null,C=((O=Ve[x])==null?void 0:O.icon)||"⚡",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",F.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${z};background:${_};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${z}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${C}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${A}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(F),(Q=F.querySelector("#pvp-gc-back"))==null||Q.addEventListener("click",()=>F.remove()),(Y=F.querySelector("#pvp-gc-use"))==null||Y.addEventListener("click",()=>{F.remove(),P(u,x)})}function xe(){var h;const u=c[o+"Team"],x=Object.entries(u).flatMap(([v,_])=>(_||[]).filter(z=>!z.used).map(z=>({...z,_line:v})));if(!x.length)return;const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",y.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${c.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(v=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",z=je(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${_};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(y),(h=y.querySelector("#bp-close"))==null||h.addEventListener("click",()=>y.remove()),y.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const _=v.dataset.cid,z=x.find(A=>A.cardId===_);if(!z)return;const $=(u[z._line]||[]).find(A=>A.cardId===_);$&&($.boost=($.boost||0)+c.boostValue),y.remove(),await de({[o+"Team"]:u,boostUsed:!0})})})}function X(u=null){var O,Q;if(!(c.phase===o+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const y=c[o+"Team"],h=c["usedSubIds_"+o]||[],v=c.maxSubs||3;if(h.length>=v){f(`Maximum ${v} remplacements atteint`,"warning");return}const _=Object.entries(y).flatMap(([Y,ie])=>(ie||[]).filter(ae=>ae.used).map(ae=>({...ae,_line:Y}))),z=(c[o+"Subs"]||[]).filter(Y=>!h.includes(Y.cardId));if(!_.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!z.length){f("Aucun remplaçant disponible","warning");return}let $=Math.max(0,_.findIndex(Y=>Y.cardId===u));const A=((O=_[$])==null?void 0:O._line)||((Q=_[$])==null?void 0:Q.job);let S=Math.max(0,z.findIndex(Y=>Y.job===A)),C=!1;const F=document.createElement("div");F.id="pvp-sub-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function R(){var ke,qe,Ce,Re,Fe,Oe;const Y=_[$],ie=z[S],ae=Math.min(130,Math.round((window.innerWidth-90)/2)),fe=Math.round(ae*1.35),me=De=>`background:rgba(255,255,255,0.12);border:none;color:${De?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${De?"default":"pointer"};flex-shrink:0`;F.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${me(S===0)}" ${S===0?"disabled":""}>▲</button>
          <div>${ie?Ye({...ie,used:!1,boost:0},ae,fe):"<div>—</div>"}</div>
          <button id="pin-down" style="${me(S>=z.length-1)}" ${S>=z.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${S+1}/${z.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${me($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${Y?Ye({...Y,used:!1,boost:0},ae,fe):"<div>—</div>"}</div>
          <button id="pout-down" style="${me($>=_.length-1)}" ${$>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${_.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ke=F.querySelector("#psub-close"))==null||ke.addEventListener("click",()=>F.remove()),(qe=F.querySelector("#pout-up"))==null||qe.addEventListener("click",()=>{$>0&&($--,R())}),(Ce=F.querySelector("#pout-down"))==null||Ce.addEventListener("click",()=>{$<_.length-1&&($++,R())}),(Re=F.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{S>0&&(S--,R())}),(Fe=F.querySelector("#pin-down"))==null||Fe.addEventListener("click",()=>{S<z.length-1&&(S++,R())});const $e=(De,Ke,Ne,He)=>{const Ue=F.querySelector("#"+De);if(!Ue)return;let Je=0;Ue.addEventListener("touchstart",Ze=>{Je=Ze.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ze=>{const Qe=Ze.changedTouches[0].clientY-Je;if(Math.abs(Qe)<30)return;const nt=Ke();Qe<0&&nt<He-1?(Ne(nt+1),R()):Qe>0&&nt>0&&(Ne(nt-1),R())},{passive:!0})};$e("pin-panel",()=>S,De=>S=De,z.length),$e("pout-panel",()=>$,De=>$=De,_.length),(Oe=F.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async De=>{if(De.preventDefault(),De.stopPropagation(),C)return;C=!0;const Ke=_[$],Ne=z[S];if(!Ke||!Ne)return;const He=Ke._line,Ue=(y[He]||[]).findIndex(Qe=>Qe.cardId===Ke.cardId);if(Ue===-1){f("Erreur : joueur introuvable","error"),F.remove();return}const Je={...Ne,_line:He,position:Ke.position,used:!1,boost:0};y[He].splice(Ue,1,Je);const Ze=[...h,Ne.cardId];F.remove(),ne(Ke,Ne,async()=>{await de({[o+"Team"]:y,[m+"Team"]:c[m+"Team"],["usedSubIds_"+o]:Ze})})})}document.body.appendChild(F),R()}function ne(u,x,y){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const _=(A,S,C)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${C}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[A.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(A)?`<img src="${Pe(A)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(A.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${_(x,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${_(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let z=!1;const $=()=>{z||(z=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",$),setTimeout($,2200)}function ge(){var x;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${c[m+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(c[m+"Team"],c[m+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(x=u.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>u.remove())}function J(){var h;const u=c.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const y=v=>{var z,$,A;if(v.type==="duel"){const S=v.isGoal,C=v.homeScored&&o==="p1"||!v.homeScored&&S&&o==="p2",F=v.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",R=S?C?"⚽ BUT !":"⚽ BUT adversaire !":(z=v.homePlayers)!=null&&z.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${F};margin-bottom:4px">
          <div style="font-size:9px;color:${F};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${R}</div>
          ${($=v.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${ot(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
          ${(A=v.aiPlayers)!=null&&A.length?`<div style="opacity:0.7">${ot(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
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
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(y).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>x.remove())}async function Z(){if(c.phase!==o+"-attack")return;const u=o==="p1"?"p2":"p1",x=(c.round||0)+1,y=[...c.log||[]];y.push({type:"info",text:`⏭️ ${c[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=ze(c),v=be(u),_=h||!v?"finished":u+"-attack";await de({["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:_,attacker:u,round:x,log:y}),_==="finished"&&await B(c)}async function V(){const u=c[o+"Team"],x=!["GK","DEF","MIL","ATT"].some(_=>(c[m+"Team"][_]||[]).some(z=>!z.used)),y=(c["selected_"+o]||[]).map(_=>{const z=(u[_._role]||[]).find(R=>R.cardId===_.cardId)||_,$=x&&["GK","DEF"].includes(_._role),A=u[_._role]||[],S=A.findIndex(R=>R.cardId===_.cardId),C=lt(A.length),F=S>=0?C[S]:z._col??1;return{...z,_line:_._role,_col:F,...$?{note_a:Math.max(1,Number(z.note_a)||0)}:{}}});if(!y.length)return;const h=Nt(y,c.modifiers[o]||{});re(o,y.map(_=>_.cardId)),y.forEach(_=>{const z=(u[_._role]||[]).find($=>$.cardId===_.cardId);z&&(z.used=!0)}),c["selected_"+o]=[],ye();const v=[...c.log||[]];if(x){const _=(c[o+"Score"]||0)+1,z=y.map(F=>({name:F.name,note:je(F,F._line||"ATT"),portrait:Pe(F),job:F.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:z,homeTotal:h.total,aiTotal:0});const $=(c.round||0)+1,A=o==="p1"?"p2":"p1",S={...c,[o+"Team"]:u,[o+"Score"]:_},C=ze(S);G.add($),we(z,_,c[m+"Score"]||0,!0,async()=>{await de({[o+"Team"]:u,[o+"Score"]:_,["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:C?"finished":A+"-attack",attacker:A,round:$,log:v}),C&&await B({...c,[o+"Score"]:_})});return}v.push({type:"pending",text:`⚔️ ${c[o+"Name"]} attaque (${h.total})`}),await de({[o+"Team"]:u,[m+"Team"]:c[m+"Team"],pendingAttack:{...h,players:y,side:o},["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},phase:m+"-defense",log:v})}async function se(){const u=c[o+"Team"],x=(c["selected_"+o]||[]).map(Y=>{const ie=(u[Y._role]||[]).find(ke=>ke.cardId===Y.cardId)||Y,ae=u[Y._role]||[],fe=ae.findIndex(ke=>ke.cardId===Y.cardId),me=lt(ae.length),$e=fe>=0?me[fe]:ie._col??1;return{...ie,_line:Y._role,_col:$e}}),y=Rt(x,c.modifiers[o]||{});re(o,x.map(Y=>Y.cardId)),x.forEach(Y=>{const ie=(u[Y._role]||[]).find(ae=>ae.cardId===Y.cardId);ie&&(ie.used=!0)}),c["selected_"+o]=[],ye();const h=Ot(c.pendingAttack.total,y.total,c.modifiers[o]||{}),v=c.pendingAttack.side,_=h==="attack"||(h==null?void 0:h.goal),z=v==="p1"?"p2":"p1",$=(c.round||0)+1,A=(c.pendingAttack.players||[]).map(Y=>({name:Y.name,note:je(Y,Y._line||"ATT"),portrait:Pe(Y),job:Y.job})),S=[...c.log||[]];S.push({type:"duel",isGoal:_,homeScored:_&&v===o,text:_?`⚽ BUT de ${c[v+"Name"]} ! (${c.pendingAttack.total} vs ${y.total})`:`✋ Attaque stoppée (${c.pendingAttack.total} vs ${y.total})`,homePlayers:A,aiPlayers:x.map(Y=>({name:Y.name,note:je(Y,Y._line||"DEF"),portrait:Pe(Y),job:Y.job})),homeTotal:c.pendingAttack.total,aiTotal:y.total});const C=_?(c[v+"Score"]||0)+1:c[v+"Score"]||0,F={...c,[o+"Team"]:u,[v+"Score"]:C},R=ze(F),O=R?"finished":z+"-attack",Q=async()=>{await de({[o+"Team"]:u,[m+"Team"]:c[m+"Team"],[v+"Score"]:C,["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:O,attacker:z,round:$,log:S}),(O==="finished"||R)&&await B({...c,[v+"Score"]:C})};if(_){const Y=v===o,ie=Y?C:c[o+"Score"]||0,ae=Y?c[m+"Score"]||0:C;G.add($),we(A,ie,ae,Y,Q)}else await Q()}function he(u){return["MIL","ATT"].some(x=>(u[x]||[]).some(y=>!y.used))}function Se(u){return["GK","DEF","MIL","ATT"].some(x=>(u[x]||[]).some(y=>!y.used))}function Me(u){return Se(u)&&!he(u)}function be(u){const x=c[u+"Team"],y=c[(u==="p1"?"p2":"p1")+"Team"];return!!(he(x)||!Se(y)&&Me(x))}function ze(u){const x=["MIL","ATT"].some(S=>(u.p1Team[S]||[]).some(C=>!C.used)),y=["MIL","ATT"].some(S=>(u.p2Team[S]||[]).some(C=>!C.used)),h=Se(u.p1Team),v=Se(u.p2Team);return!x&&!(!v&&h)&&(!y&&!(!h&&v))}function j(u){const x=u.p1Score||0,y=u.p2Score||0;return x===y?null:x>y?T.home_id:T.away_id}async function B(u){try{const x=j(u),y=x?T.home_id===x?T.away_id:T.home_id:null,h=u.p1Score||0,v=u.p2Score||0;await E.from("matches").update({status:"finished",winner_id:x,home_score:h,away_score:v}).eq("id",i);const{data:_}=await E.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(_){await E.from("mini_league_matches").update({home_score:h,away_score:v,status:"finished"}).eq("id",_.id);const{data:z}=await E.from("mini_league_matches").select("id, status").eq("league_id",_.league_id).eq("matchday",_.matchday);if((z||[]).every(A=>A.status==="finished"||A.status==="bye")){const{data:A}=await E.from("mini_leagues").select("current_day,total_days").eq("id",_.league_id).single();if(A){const S=(A.current_day||0)+1,C=S>(A.total_days||0);await E.from("mini_leagues").update({current_day:C?A.total_days:S,status:C?"finished":"active"}).eq("id",_.league_id)}}}x&&y&&ki(x,y).catch(()=>{})}catch(x){console.error("[ML] finishMatch:",x)}}function w(){var v;if(I&&document.getElementById("pvp-end-overlay"))return;I=!0;const u=c[o+"Score"],x=c[m+"Score"],y=u>x,h=u===x;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${y?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${y?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{E.removeChannel(oe)}catch{}We(e),p("mini-league",n?{openLeagueId:n}:{})})}ye()}const cr="/",pr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function ur(e,t,i){let s=0;const l=document.createElement("div");l.id="tutorial-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const d=()=>{var o,m,b;const p=t[s],f=s===t.length-1,n=Math.round((s+1)/t.length*100);l.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${n}%;background:${p.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${p.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${p.title}</div>
          <div style="font-size:11px;color:#aaa">${s+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${p.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${cr}icons/${p.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${p.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${p.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${s>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${f?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${p.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${f?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,l.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),l.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),l.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(o=l.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{s--,d()}),(m=l.querySelector("#tuto-next"))==null||m.addEventListener("click",()=>{f?a():(s++,d())}),(b=l.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{l.remove(),e!=null&&e.id&&await E.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(l),d()}async function fr(e,t,i){if(!e||e.tutorial_done)return;let s=[];const{data:l,error:d}=await E.rpc("get_tutorial_steps");if(!d&&(l==null?void 0:l.length)>0)s=l,console.log(`[Tutorial] RPC OK → ${s.length} étapes`);else{const{data:p,error:f}=await E.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!f&&(p==null?void 0:p.length)>0?(s=p,console.log(`[Tutorial] Direct OK → ${s.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${d==null?void 0:d.message}, Direct: ${f==null?void 0:f.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=s.length>0?s.map(p=>({emoji:p.emoji,title:p.title,color:p.color,content:p.content,image_url:p.image_url||null})):pr;ur(e,a,()=>t("boosters"))}const gr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}function Ui(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Wt(e,t){const s=t?gr[t]||"#bbb":"#d0d0d0",l=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${s};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${l}</div>`}function Ki(e){const i=Zt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Vi(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function mr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await zi(e,t)}async function zi(e,t){const{state:i,toast:s}=t,{data:l}=await E.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:d}=await E.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(l||[]).filter(r=>r.seller_id!==i.profile.id),p=d||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${a.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${p.length})</button>
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
  </div>`;let f="buy";const n=()=>{var r,c,I,L,q,H,D;return{name:(((r=document.getElementById("flt-name"))==null?void 0:r.value)||"").toLowerCase().trim(),club:(((c=document.getElementById("flt-club"))==null?void 0:c.value)||"").toLowerCase().trim(),country:(((I=document.getElementById("flt-country"))==null?void 0:I.value)||"").toLowerCase().trim(),job:((L=document.getElementById("flt-job"))==null?void 0:L.value)||"",rarity:((q=document.getElementById("flt-rarity"))==null?void 0:q.value)||"",note1:parseInt((H=document.getElementById("flt-note1"))==null?void 0:H.value)||0,note2:parseInt((D=document.getElementById("flt-note2"))==null?void 0:D.value)||0}};function o(r){const c=n();return r.filter(I=>{var U,oe;const L=(U=I.card)==null?void 0:U.player;if(!L)return!1;const q=`${L.firstname} ${L.surname_encoded}`.toLowerCase(),H=(((oe=L.clubs)==null?void 0:oe.encoded_name)||"").toLowerCase(),D=(L.country_code||"").toLowerCase(),G=Et(L,L.job),M=L.job2?Et(L,L.job2):0;return!(c.name&&!q.includes(c.name)||c.club&&!H.includes(c.club)||c.country&&!D.includes(c.country)||c.job&&L.job!==c.job||c.rarity&&L.rarity!==c.rarity||c.note1&&G<c.note1||c.note2&&M<c.note2)})}function m(r){var D,G,M,U;const c=(D=r.card)==null?void 0:D.player;if(!c)return"";const I=((G=r.card)==null?void 0:G.evolution_bonus)||0,L=Et(c,c.job,I),q=c.job2?Et(c,c.job2,I):0,H=(i.profile.credits||0)>=r.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Ui(c.rarity)}
      ${Wt(L,c.job)}
      ${Wt(q,c.job2||null)}
      ${Ki(c.country_code)}
      ${Vi((M=c.clubs)==null?void 0:M.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.firstname} ${c.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((U=r.seller)==null?void 0:U.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${r.id}" ${H?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${H?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function b(r){var D,G,M,U;const c=(D=r.card)==null?void 0:D.player;if(!c)return"";const I=((G=r.card)==null?void 0:G.evolution_bonus)||0,L=Et(c,c.job,I),q=c.job2?Et(c,c.job2,I):0,H=r.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${H?"opacity:0.7":""}">
      ${Ui(c.rarity)}
      ${Wt(L,c.job)}
      ${Wt(q,c.job2||null)}
      ${Ki(c.country_code)}
      ${Vi((M=c.clubs)==null?void 0:M.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.firstname} ${c.surname_encoded}</div>
        <div style="font-size:10px;color:${H?"#22c55e":"#999"};margin-top:1px">
          ${H?`✅ Vendu à ${((U=r.buyer)==null?void 0:U.pseudo)||"—"} · ${r.sold_at?new Date(r.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(r.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        ${H?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${r.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function g(){const r=document.getElementById("mkt-content"),c=document.getElementById("mkt-filters");if(r){if(c.style.display=f==="buy"?"flex":"none",f==="buy"){const I=o(a);r.innerHTML=I.length?I.map(m).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const I=p.filter(q=>q.status==="active").sort((q,H)=>new Date(H.listed_at)-new Date(q.listed_at)),L=p.filter(q=>q.status==="sold").sort((q,H)=>new Date(H.sold_at||H.listed_at)-new Date(q.sold_at||q.listed_at));r.innerHTML=(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${I.length})</div>`+I.map(b).join(""):"")+(L.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${L.length})</div>`+L.map(b).join(""):"")+(!I.length&&!L.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}r.querySelectorAll("[data-buy]").forEach(I=>I.addEventListener("click",()=>xr(I.dataset.buy,a,e,t))),r.querySelectorAll("[data-cancel]").forEach(I=>I.addEventListener("click",()=>br(I.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{f=r.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(c=>{const I=c===r;c.style.background=I?"var(--green)":"#fff",c.style.color=I?"#fff":"var(--gray-600)",c.style.borderColor=I?"var(--green)":"var(--gray-200)"}),g()})});let T;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(r=>{var c;(c=document.getElementById(r))==null||c.addEventListener("input",()=>{clearTimeout(T),T=setTimeout(g,250)})}),g()}async function xr(e,t,i,s){const{state:l,toast:d,refreshProfile:a}=s,p=t.find(o=>o.id===e);if(!p)return;const f=p.price;if((l.profile.credits||0)<f){d("Crédits insuffisants","error");return}yr(p,async()=>{const{error:o}=await E.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:l.profile.id});if(o){d("Erreur achat : "+o.message,"error");return}await a();const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),d("✅ Carte achetée !","success"),await zi(i,s)})}function yr(e,t){var a;const i=(a=e.card)==null?void 0:a.player,s=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",l.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${s} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(l);const d=p=>{l.remove(),p&&t()};l.querySelector("#buy-cancel").addEventListener("click",()=>d(!1)),l.querySelector("#buy-ok").addEventListener("click",()=>d(!0)),l.addEventListener("click",p=>{p.target===l&&d(!1)})}async function br(e,t,i){const{toast:s}=i,{data:l}=await E.from("market_listings").select("card_id").eq("id",e).single();if(await E.from("market_listings").update({status:"cancelled"}).eq("id",e),l!=null&&l.card_id){const{count:d}=await E.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",l.card_id).eq("status","active");d||await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",l.card_id)}s("Annonce retirée","success"),zi(t,i)}async function hr(e,{state:t,navigate:i,toast:s}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classement global</h2>
      <p>GDD §10.3 : TOP1 > TOP2 > TOP3 > Victoires</p>
    </div>

    <div class="page-body">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${l&&l.length>0?l.map((d,a)=>`
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
  `}async function vr(e,{state:t,navigate:i,toast:s}){const l=t.profile;if(!l)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${l.id},away_id.eq.${l.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},p=(d||[]).filter(o=>o.status==="finished"),f=(d||[]).filter(o=>o.status==="in_progress");function n(o){const m=o.home_id===l.id;m?o.home_score:o.away_score,m?o.away_score:o.home_score;const b=o.winner_id===l.id,g=o.home_score===o.away_score&&o.status==="finished",T=o.status!=="finished"?"…":g?"N":b?"V":"D",r=o.status!=="finished"||g?"#888":b?"#1A6B3C":"#c0392b";let c=a[o.mode]||o.mode;o.away_id===null&&!c.startsWith("IA")&&(c="IA");const L=o.home_id===l.id?o.away:o.home;let q;o.away_id===null?q=c:L?q=`${L.club_name||L.pseudo} (${L.pseudo})`:q="Adversaire";let H="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(H=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const D=new Date(o.created_at),G=D.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+D.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),M=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${q}${H}</div>
        <div style="font-size:11px;color:var(--gray-600)">${c} · ${G}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${M}</span>
        <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${T}</span>
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
          ${f.map(n).join("")}
        </div>`:""}

      ${p.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${p.map(n).join("")}
        </div>`:""}

      ${(d||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}So(Io);const Ge={user:null,profile:null,page:"home",params:{}};function Tt(e,t="info",i=3e3){const s=document.getElementById("toast");s&&(s.textContent=e,s.className=`show ${t}`,clearTimeout(s._t),s._t=setTimeout(()=>{s.className=""},i))}function wr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function bi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ct(){if(!Ge.user)return;const{data:e}=await E.from("users").select("*").eq("id",Ge.user.id).single();e&&(Ge.profile=e)}function Ft(e,t={}){Ge.page=e,Ge.params=t,Ao()}async function Ao(){var s,l,d,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===Ge.page)});const t=document.getElementById("nav-credits");t&&Ge.profile&&(t.textContent=`💰 ${(Ge.profile.credits||0).toLocaleString("fr")}`);const i={state:Ge,navigate:Ft,toast:Tt,openModal:wr,closeModal:bi,refreshProfile:Ct};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ge.page){case"home":await Ci(e,i);break;case"collection":await Zo(e,i);break;case"decks":await ui(e,i);break;case"boosters":await fn(e,i);break;case"match":{const p=Ge.params&&Ge.params.matchMode||"vs_ai_easy";p==="random"?await _o(e,i):p==="friend"?await Vn(e,i,(s=Ge.params)==null?void 0:s.friendId,(l=Ge.params)==null?void 0:l.friendName):p==="mini-league"?await Hi(e,i,(d=Ge.params)==null?void 0:d.mlMatchId,(a=Ge.params)==null?void 0:a.leagueId):await zn(e,i);break}case"market":await mr(e,i);break;case"rankings":await hr(e,i);break;case"matches":await vr(e,i);break;case"friends":await Do(e,i);break;case"mini-league":await Jn(e,i);break;case"match-mini-league":{const p=Ge.params||{};await Hi(e,i,p.mlMatchId,p.leagueId);break}default:await Ci(e,i)}}function _r(){var s;const e=document.getElementById("app"),t=Ge.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(l=>{l.addEventListener("click",d=>{d.preventDefault(),Ft(l.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ft("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ft("boosters")),(s=document.getElementById("journal-btn"))==null||s.addEventListener("click",()=>$r())}async function $r(){const{data:e}=await E.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(s=>{const l=new Date(s.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${s.image_url?`<img src="${s.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${l}</div>
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",s=>{s.target===t&&t.remove()})}async function kr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&bi()}),document.getElementById("modal-close").addEventListener("click",bi);const{data:{session:e}}=await E.auth.getSession();if(!e){Yi(),Ii(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt});return}Ge.user=e.user,await Ct(),Yi();try{const{data:i}=await E.from("formation_links_overrides").select("formation, links"),s={};(i||[]).forEach(l=>{s[l.formation]=l.links}),Lo(s)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Ge.profile){jo(document.getElementById("app"),{state:Ge,navigate:async()=>{await Ct(),ci()},toast:Tt,refreshProfile:Ct});return}const t=Array.isArray(Ge.profile.pending_boosters)?Ge.profile.pending_boosters:[];if(!Ge.profile.onboarding_done&&t.length>0){kn(document.getElementById("app"),{state:Ge,navigate:()=>ci(),toast:Tt,refreshProfile:Ct});return}ci(),setTimeout(()=>fr(Ge.profile,Ft,Tt),800),E.auth.onAuthStateChange(async(i,s)=>{i==="SIGNED_OUT"&&(Ge.user=null,Ge.profile=null,document.getElementById("app").innerHTML="",Ii(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt}))})}function Er(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function si(){const e=document.getElementById("app");e&&(e.style.height=Er()+"px")}window.addEventListener("resize",si);window.addEventListener("orientationchange",()=>setTimeout(si,150));window.visualViewport&&window.visualViewport.addEventListener("resize",si);function ci(){const e=()=>{var i;(i=Ge.user)!=null&&i.id&&E.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ge.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",si(),_r(),Ao()}function Yi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function zo(e){var s;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(s=document.getElementById("boot-retry"))==null||s.addEventListener("click",()=>window.location.reload())}kr().catch(e=>{console.error("Échec du démarrage:",e),zo()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&zo("Le serveur met trop de temps à répondre.")},12e3);
