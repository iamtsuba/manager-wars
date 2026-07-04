const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-Dnttc-Cp.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as k,F as hi,h as Pt,j as Yi,l as at,i as Ao,k as zo,b as So}from"./formation-links-Dnttc-Cp.js";const Lo="/";function Li(e,{navigate:t,toast:i}){let s="login";const l=()=>{var a,c,f,n,o,m;const d=s==="login";e.innerHTML=`
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{s="login",l()}),(c=document.getElementById("tab-reg-btn"))==null||c.addEventListener("click",()=>{s="register",l()}),d?((f=document.getElementById("login-password"))==null||f.addEventListener("keydown",b=>{var g;b.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(n=document.getElementById("login-btn"))==null||n.addEventListener("click",async()=>{const b=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,A=document.getElementById("login-error");if(A.textContent="",!b||!g){A.textContent="Remplissez tous les champs.";return}const r=document.getElementById("login-btn");r.textContent="⏳ Connexion…",r.disabled=!0;const{error:p}=await k.auth.signInWithPassword({email:b,password:g});if(r.textContent="⚽ Se connecter",r.disabled=!1,p){A.textContent=p.message.includes("Invalid")?"Email ou mot de passe incorrect.":p.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",b=>{var g;b.key==="Enter"&&((g=document.getElementById("reg-btn"))==null||g.click())}),(m=document.getElementById("reg-btn"))==null||m.addEventListener("click",async()=>{const b=document.getElementById("reg-email").value.trim(),g=document.getElementById("reg-password").value,A=document.getElementById("reg-confirm").value,r=document.getElementById("reg-error");if(r.textContent="",!b||!g||!A){r.textContent="Remplissez tous les champs.";return}if(g.length<6){r.textContent="Mot de passe trop court (min. 6 caractères).";return}if(g!==A){r.textContent="Les mots de passe ne correspondent pas.";return}const p=document.getElementById("reg-btn");p.textContent="⏳ Création…",p.disabled=!0;const{error:I}=await k.auth.signUp({email:b,password:g});if(p.textContent="🚀 Créer mon compte",p.disabled=!1,I){r.textContent=I.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),s="login",l(),setTimeout(()=>{const L=document.getElementById("login-email");L&&(L.value=b)},50)}))};l()}function Io(e,{state:t,navigate:i,toast:s,refreshProfile:l}){let d="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function c(){var A;const n=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),m=((A=document.getElementById("setup-club"))==null?void 0:A.value)||"MW",b=m.trim().split(" ").filter(Boolean),g=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():m.slice(0,2).toUpperCase();n&&(n.style.background=a,n.style.borderColor=d),o&&(o.textContent=g,o.style.color=d)}document.getElementById("color1").addEventListener("input",n=>{d=n.target.value,document.getElementById("swatch1").style.background=d,c()}),document.getElementById("color2").addEventListener("input",n=>{a=n.target.value,document.getElementById("swatch2").style.background=a,c()});function f(n){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${n}`).classList.add("active"),document.getElementById("step-num").textContent=n,document.getElementById("progress-fill").style.width=`${Math.round(n/3*100)}%`,n===3&&c()}document.getElementById("step1-next").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",n.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:m}=await k.from("users").select("id").eq("pseudo",n).maybeSingle();if(m){o.textContent="Ce pseudo est déjà pris.";return}f(2)}),document.getElementById("step2-back").addEventListener("click",()=>f(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const n=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",n.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:m}=await k.from("users").select("id").eq("club_name",n).maybeSingle();if(m){o.textContent="Ce nom de club est déjà pris.";return}f(3)}),document.getElementById("step3-back").addEventListener("click",()=>f(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),m=document.getElementById("step3-error"),b=document.getElementById("step3-finish");m.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:g}=await k.from("users").insert({id:t.user.id,pseudo:n,club_name:o,club_color1:d,club_color2:a,credits:1e4});if(g)throw g;await Mo(t.user.id),await l(),s(`Bienvenue ${n} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){m.textContent=g.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Mo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await k.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const jo="modulepreload",Co=function(e){return"/"+e},Ii={},ti=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));l=Promise.allSettled(i.map(f=>{if(f=Co(f),f in Ii)return;Ii[f]=!0;const n=f.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${o}`))return;const m=document.createElement("link");if(m.rel=n?"stylesheet":jo,n||(m.as="script"),m.crossOrigin="",m.href=f,c&&m.setAttribute("nonce",c),document.head.appendChild(m),n)return new Promise((b,g)=>{m.addEventListener("load",b),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${f}`)))})}))}function d(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return l.then(a=>{for(const c of a||[])c.status==="rejected"&&d(c.reason);return t().catch(d)})},Dt="#1A6B3C",Gt="#cc2222",qo="#D4A017",Mi="#888";async function Bo(e,t){const{state:i,toast:s}=t;e.innerHTML=`
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
    </div>`,await Wi(i,s,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Do(i,s)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ji(i,s,null,t))}async function Wi(e,t,i={}){const{navigate:s}=i,l=e.user.id,{data:d,error:a}=await k.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${l},addressee_id.eq.${l}`),{count:c}=await k.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",l).eq("status","pending"),f=document.getElementById("pending-badge");f&&(c>0?(f.style.display="flex",f.textContent=c):f.style.display="none");const n=document.getElementById("friends-list");if(!n)return;if(a){console.error("[Friends] Erreur:",a),n.innerHTML=`<div style="color:${Gt};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const o=(d||[]).map(g=>g.requester_id===l?g.addressee_id:g.requester_id);let m={};if(o.length){const{data:g}=await k.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(g||[]).forEach(A=>{m[A.id]=A})}const b=(d||[]).map(g=>({friendshipId:g.id,friend:m[g.requester_id===l?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!b.length){n.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}n.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:g,friend:A})=>Fo(A,g)).join("")}
    </div>`,n.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>Go(e,g.dataset.stats,g.dataset.friendName))}),n.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",()=>{const A=g.dataset.friendId,r=g.dataset.friendName;console.log("[Friends] clic match",{fid:A,fname:r,hasNavigate:typeof s}),typeof s=="function"?s("match",{matchMode:"friend",friendId:A,friendName:r}):t("Erreur navigation","error")})})}function Fo(e,t){const i=e.club_name||e.pseudo||"?",s=e.pseudo||"",l=(s||i).slice(0,2).toUpperCase(),d=e.club_color2||Dt,a=e.club_color1||"#ffffff",c=e.last_seen_at?new Date(e.last_seen_at):null,f=c&&Date.now()-c.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${qo};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Do(e,t){const i=vi();i.innerHTML=`
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
    ${wi()}`,document.body.appendChild(i);const s=i.querySelector("#friend-pseudo-input"),l=i.querySelector("#add-friend-error"),d=()=>i.remove();s.focus(),i.querySelector("#add-cancel").addEventListener("click",d),i.addEventListener("click",a=>{a.target===i&&d()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=s.value.trim();if(!a){l.textContent="Entre un pseudo";return}l.textContent="";const{data:c}=await k.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!c){l.textContent="Utilisateur introuvable";return}if(c.id===e.user.id){l.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:f}=await k.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${c.id}),and(requester_id.eq.${c.id},addressee_id.eq.${e.user.id})`).single();if(f){const o=f.status==="accepted"?"Vous êtes déjà amis !":f.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";l.textContent=o;return}const{error:n}=await k.from("friendships").insert({requester_id:e.user.id,addressee_id:c.id,status:"pending"});if(n){l.textContent="Erreur : "+n.message;return}d(),t(`✅ Demande envoyée à ${c.pseudo} !`,"success")})}async function Ji(e,t,i=null,s={}){const l=e.user.id,{data:d}=await k.from("friendships").select("id, requester_id").eq("addressee_id",l).eq("status","pending").order("created_at",{ascending:!1}),a=(d||[]).map(b=>b.requester_id);let c={};if(a.length){const{data:b}=await k.from("users").select("id, pseudo, club_name").in("id",a);(b||[]).forEach(g=>{c[g.id]=g})}const f=(d||[]).map(b=>({...b,requester:c[b.requester_id]||{pseudo:"?"}})),n=vi(),o=f||[];n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(b=>{var g,A,r;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=b.requester)==null?void 0:g.club_name)||((A=b.requester)==null?void 0:A.pseudo)||"?"}
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
    ${wi()}`,document.body.appendChild(n);const m=()=>n.remove();n.querySelector("#pending-close").addEventListener("click",m),n.addEventListener("click",b=>{b.target===n&&m()}),n.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:g}=await k.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(g){t("Erreur : "+g.message,"error");return}b.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Wi(e,t,s),i&&i()})}),n.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await k.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Go(e,t,i){const s=e.user.id,[l,d]=[s,t].sort(),a=s===l,{data:c}=await k.from("friend_match_stats").select("*").eq("player1_id",l).eq("player2_id",d).single(),f=e.profile.club_name||e.profile.pseudo||"Moi",n=c||{},o=a?n.wins_p1||0:n.wins_p2||0,m=a?n.wins_p2||0:n.wins_p1||0,b=n.draws||0,g=a?n.goals_p1||0:n.goals_p2||0,A=a?n.goals_p2||0:n.goals_p1||0,r=a?n.gc_used_p1||0:n.gc_used_p2||0,p=a?n.gc_used_p2||0:n.gc_used_p1||0,I=n.matches_total||0,L=(H,C,F,j=Dt,W=Gt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${j}">${C}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${H}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${W}">${F}</div>
    </div>`,B=vi();B.innerHTML=`
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
        ${L("Nuls",b,b,Mi,Mi)}
        ${L("Défaites",m,o)}
        ${L("Buts marqués",g,A)}
        ${L("Buts encaissés",A,g,Gt,Dt)}
        ${L("GC utilisés ⚡",r,p,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${I} match${I>1?"s":""} joué${I>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${wi()}`,document.body.appendChild(B),B.querySelector("#stats-close").addEventListener("click",()=>B.remove()),B.addEventListener("click",H=>{H.target===B&&B.remove()})}function vi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function wi(){return`
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
    </style>`}async function Xi({player1Id:e,player2Id:t,score1:i,score2:s,gc1:l,gc2:d}){const[a,c]=[e,t].sort(),f=e!==a,n=f?s:i,o=f?i:s,m=f?d:l,b=f?l:d,g=n>o?1:0,A=o>n?1:0,r=n===o?1:0,{data:p}=await k.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",c).single();p?await k.from("friend_match_stats").update({wins_p1:p.wins_p1+g,wins_p2:p.wins_p2+A,draws:p.draws+r,goals_p1:p.goals_p1+n,goals_p2:p.goals_p2+o,gc_used_p1:p.gc_used_p1+m,gc_used_p2:p.gc_used_p2+b,matches_total:p.matches_total+1}).eq("player1_id",a).eq("player2_id",c):await k.from("friend_match_stats").insert({player1_id:a,player2_id:c,wins_p1:g,wins_p2:A,draws:r,goals_p1:n,goals_p2:o,gc_used_p1:m,gc_used_p2:b,matches_total:1})}const Po="2026.07.04-2352";async function ji(e,{state:t,navigate:i,toast:s}){var d,a;const l=t.profile;l&&(e.innerHTML=`
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
  `,e.querySelectorAll("[data-nav]").forEach(c=>{c.addEventListener("click",f=>{f.preventDefault(),i(c.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(c=>{c.addEventListener("click",()=>{c.classList.add("tapped"),setTimeout(()=>c.classList.remove("tapped"),200);const f=c.dataset.action;if(f==="match-ai"){Ho(i);return}if(f==="match-random"){i("match",{matchMode:"random"});return}if(f==="match-friend"){i("friends");return}if(f==="mini-league"){i("mini-league");return}if(f==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}s("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var H,C,F,j,W,de;const c=((H=window.visualViewport)==null?void 0:H.height)||window.innerHeight,f=((C=document.querySelector(".top-nav"))==null?void 0:C.offsetHeight)||56,n=((F=document.querySelector(".bottom-nav"))==null?void 0:F.offsetHeight)||60,o=((j=e.querySelector(".hero-compact"))==null?void 0:j.offsetHeight)||52,m=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const b=((de=(W=e.querySelector("#logout-btn"))==null?void 0:W.closest("div"))==null?void 0:de.offsetHeight)||44,g=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((re,N)=>{var X;return re+(((X=document.getElementById(N))==null?void 0:X.offsetHeight)||0)},0),A=14*5,r=c-f-n-o-b-g-A,p=Math.max(80,Math.round(r*.28)),I=Math.max(160,Math.round(r*.72)),L=Math.floor((I-10)/2);m&&(m.style.minHeight=m.style.maxHeight=p+"px"),e.querySelectorAll(".play-grid .play-card").forEach(re=>{re.style.minHeight=re.style.height=L+"px"});const B=Math.round(L*.55);e.querySelectorAll(".play-card .play-icon").forEach(re=>{re.style.height=B+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await k.auth.signOut(),window.location.reload()}),Qi(t,s),Oo(t,s,i),Zi(t,s,i))}async function Zi(e,t,i){const s=document.getElementById("ongoing-match-banner");if(!s)return;const l=e.profile.id,{data:d}=await k.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${l},away_id.eq.${l}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){s.innerHTML="";return}const a=d.map(f=>f.home_id===l?f.away_id:f.home_id).filter(Boolean);let c={};if(a.length){const{data:f}=await k.from("users").select("id, pseudo, club_name").in("id",a);(f||[]).forEach(n=>{c[n.id]=n.club_name||n.pseudo})}s.innerHTML=d.map(f=>{const n=f.home_id===l?f.away_id:f.home_id,o=c[n]||"Adversaire",m=f.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${m?"🏆 Mini League":f.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${f.id}" data-mini="${m?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${f.id}" data-opp="${n}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),s.querySelectorAll("[data-resume]").forEach(f=>{f.addEventListener("click",async()=>{const n=document.getElementById("page-content")||document.getElementById("app");if(f.dataset.mini==="1"){const{data:o}=await k.from("mini_league_matches").select("id, league_id").eq("match_id",f.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await ti(async()=>{const{resumePvpMatch:m}=await Promise.resolve().then(()=>Nn);return{resumePvpMatch:m}},void 0);o(n,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},f.dataset.resume)}})}),s.querySelectorAll("[data-abandon]").forEach(f=>{f.addEventListener("click",()=>{Ro(async()=>{await No(f.dataset.abandon,f.dataset.opp,l),t("Match abandonné (défaite 3-0)","info"),Zi(e,t,i)})})})}async function No(e,t,i){const{data:s}=await k.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!s)return;const l=s.home_id===i,d=l?0:3,a=l?3:0,c=s.game_state||{};c.p1Score=d,c.p2Score=a,c.phase="finished",c.forfeit=!0,await k.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:a,game_state:c}).eq("id",e)}function Ro(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Oo(e,t,i){var c,f,n,o;const s=document.getElementById("match-invite-banner");if(!s)return;const{data:l}=await k.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){s.innerHTML="";return}const d=((c=l.inviter)==null?void 0:c.club_name)||((f=l.inviter)==null?void 0:f.pseudo)||"?",a=l.inviter_id;s.innerHTML=`
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
    </div>`,(n=document.getElementById("match-inv-accept"))==null||n.addEventListener("click",()=>{s.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:d})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await k.from("friend_match_invites").update({status:"declined"}).eq("id",l.id),s.innerHTML="",t("Invitation refusée","info")})}async function Qi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:s,error:l}=await k.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(l||!(s!=null&&s.length)){i.innerHTML="";return}const d=s.length,a=s.slice(0,2).map(f=>{var n;return((n=f.requester)==null?void 0:n.pseudo)||"?"}).join(", "),c=d>2?` +${d-2}`:"";i.innerHTML=`
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
          ${a}${c}
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
  `,document.body.appendChild(i);const s=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",s),i.addEventListener("click",l=>{l.target===i&&s()}),i.querySelectorAll("[data-mode]").forEach(l=>{l.addEventListener("click",()=>{s(),e("match",{matchMode:l.dataset.mode})})})}const Ve={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function je(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Ci=["ATT","MIL","DEF","GK"];function eo(e){let t=0;const i=e.length;for(let s=0;s<i;s++)for(let l=s+1;l<i;l++){const d=e[s],a=e[l];if(!d||!a)continue;const c=d._col!=null&&a._col!=null&&d._col===a._col,f=d._col!=null&&a._col!=null&&Math.abs(d._col-a._col)===1,n=Ci.indexOf(d._line||d.job),o=Ci.indexOf(a._line||a.job),m=Math.abs(n-o)===1;if(!((d._line||d.job)===(a._line||a.job)&&f||c&&m))continue;const A=d.country_code&&a.country_code&&d.country_code===a.country_code,r=d.club_id&&a.club_id&&d.club_id===a.club_id;A&&r?t+=2:(A||r)&&(t+=1)}return t}function Nt(e,t={}){const i=e.reduce((d,a)=>{const c=a._line||a.job,f=a.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;return d+(Number(c==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)+f},0),s=eo(e);let l=i+s;return t.doubleAttack&&(l*=2),t.stolenNote&&(l-=t.stolenNote),{base:i,links:s,total:Math.max(0,l)}}function Rt(e,t={}){const i=e.reduce((d,a)=>{const c=a._line||a.job;let f=0;c==="GK"?f=Number(a.note_g)||0:c==="MIL"?f=Number(a.note_m)||0:f=Number(a.note_d)||0;const n=a.stadiumBonus&&(c==="GK"||c==="DEF"||c==="MIL")?10:0;return d+f+(a.boost||0)+n},0),s=eo(e);let l=i+s;return t.stolenNote&&(l-=t.stolenNote),{base:i,links:s,total:Math.max(0,l)}}function Ot(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function to(e,t,i="easy"){const s=e.filter(a=>!a.used);if(!s.length)return[];const l=[...s].sort((a,c)=>{const f=t==="attack"?je(a,"ATT"):a._line==="GK"?je(a,"GK"):je(a,"DEF");return(t==="attack"?je(c,"ATT"):c._line==="GK"?je(c,"GK"):je(c,"DEF"))-f});let d=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return l.slice(0,Math.min(d,l.length,3))}function Uo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const io={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function _i(e,t){const i=e.player;if(!i)return 0;const s=i.rarity;if(s!=="pepite"&&s!=="papyte")return Number(i[t])||0;const l=$i(i),d=Number(i[t])||0;if(d<=0)return 0;const a=i.note_min??1,c=i.note_max??10,n=(e.current_note??l)-l;return Math.min(c,Math.max(a,d+n))}function $i(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function ki(e,t){!e||!t||await Promise.all([pi(e,"win"),pi(t,"loss")])}async function pi(e,t){const{data:i}=await k.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const s=i.filter(l=>{var d,a;return((d=l.player)==null?void 0:d.rarity)==="pepite"||((a=l.player)==null?void 0:a.rarity)==="papyte"});s.length&&await Promise.all(s.map(l=>{const d=io[l.player.rarity],a=t==="win"?d.win:d.loss,c=l.player.note_min??1,f=l.player.note_max??10,n=$i(l.player),o=l.current_note??n,m=Math.min(f,Math.max(c,o+a));return k.from("cards").update({current_note:m}).eq("id",l.id)}))}async function Ko(e,t){return pi(e,t)}const oo=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:io,applyOwnEvolution:Ko,currentSecondaryNote:_i,getBaseMainNote:$i,updateEvolutiveCards:ki},Symbol.toStringTag,{value:"Module"})),no={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},qt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Kt=["GK","DEF","MIL","ATT"],Vo=["Tous","GK","DEF","MIL","ATT"],Yo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function qi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Wo(e){return e.length?e.reduce((t,i)=>qi(i)>qi(t)?i:t,e[0]):e[0]}function ro(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Ei={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ao(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function At(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function di(e,t=""){var A,r;const i=e.player;if(!i)return"";const s=i.job||"ATT",l=qt[s],d=no[i.rarity]||"#ccc",a=i.rarity==="pepite"||i.rarity==="papyte",c=e.evolution_bonus||0,f=(a&&e.current_note!=null?e.current_note:At(i,s))+c,n=i.job2?a?_i(e,ro(i.job2)):At(i,i.job2):null,o=n!=null?n>0?n+c:n:null,m=i.job2?qt[i.job2]:null,b=ao(i),g=Ei[i.country_code]||i.country_code||"";return`
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
        ${(A=i.clubs)!=null&&A.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((r=i.clubs)==null?void 0:r.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Bi(e){const t=e.job||"ATT",i=At(e,t),s=Ei[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Jo(e,t){const{state:i,navigate:s,toast:l,openModal:d,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await k.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:f}=await k.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),n=(c||[]).filter(J=>J.card_type==="player"&&J.player),o=(c||[]).filter(J=>J.card_type==="game_changer"),m=(c||[]).filter(J=>J.card_type==="formation"),b=(c||[]).filter(J=>J.card_type==="stadium"),{data:g}=await k.from("gc_definitions").select("name,gc_type,color,effect,image_url"),A={};(g||[]).forEach(J=>{A[J.name]=J});const{data:r}=await k.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),p={};(r||[]).forEach(J=>{p[J.id]=J}),b.forEach(J=>{J.stadium_def&&(p[J.stadium_id]=J.stadium_def)});const I=Object.keys(hi),L=Object.keys(Ve),B={};n.forEach(J=>{const oe=J.player.id;B[oe]=(B[oe]||0)+1}),new Set(Object.keys(B).map(J=>String(J)));const H=new Set(m.map(J=>J.formation)),C=new Set(o.map(J=>J.gc_type));let F="player",j="Tous",W="",de=!1;function re(){return[...n].sort((J,oe)=>{const ge=Kt.indexOf(J.player.job),Y=Kt.indexOf(oe.player.job);return ge!==Y?ge-Y:(J.player.surname_encoded||"").localeCompare(oe.player.surname_encoded||"")})}function N(){return[...f||[]].sort((J,oe)=>{const ge=Kt.indexOf(J.job),Y=Kt.indexOf(oe.job);return ge!==Y?ge-Y:(J.surname_encoded||"").localeCompare(oe.surname_encoded||"")})}function X(){return re().filter(J=>{const oe=J.player,ge=j==="Tous"||oe.job===j,Y=!W||`${oe.firstname} ${oe.surname_encoded}`.toLowerCase().includes(W);return ge&&Y})}function U(){return N().filter(J=>{const oe=j==="Tous"||J.job===j,ge=!W||`${J.firstname} ${J.surname_encoded}`.toLowerCase().includes(W);return oe&&ge})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="player"?"var(--green)":"transparent"};
        color:${F==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
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
  </div>`;function P(){const J=document.getElementById("col-filters");J&&(F==="player"?(J.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${W}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Vo.map(oe=>`
            <button class="filter-btn" data-job="${oe}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${oe===j?"var(--green)":"var(--gray-200)"};
                background:${oe===j?"var(--green)":"#fff"};
                color:${oe===j?"#fff":"var(--gray-600)"}">
              ${oe}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${de?"var(--yellow)":"var(--gray-200)"};
              background:${de?"var(--yellow)":"#fff"};
              color:${de?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${de?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",oe=>{W=oe.target.value.toLowerCase(),ne()}),e.querySelectorAll(".filter-btn").forEach(oe=>{oe.addEventListener("click",()=>{j=oe.dataset.job,P(),ne()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{de=!de,P(),ne()})):(J.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${de?"var(--yellow)":"var(--gray-200)"};
              background:${de?"var(--yellow)":"#fff"};
              color:${de?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${de?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{de=!de,P(),ne()})))}function ne(){const J=document.getElementById("col-grid");J&&(F==="player"?_e(J):F==="formation"?Ae(J):F==="stadium"?xe(J):Ie(J))}function pe(J,oe,ge,Y,Z){const K=document.getElementById("col-grid"),se=document.getElementById("col-big");if(!K||!se)return;var he=0;function Le(){const Me=window.innerWidth>=768,be=document.getElementById("col-big"),ze=document.getElementById("col-grid");Me&&be&&(be.style.minHeight="420px",be.style.flex="1 1 auto"),Me&&ze&&(ze.style.height=Math.round(310*.76+16)+"px",ze.style.flexShrink="0",ze.style.overflowX="auto",ze.style.overflowY="hidden",ze.style.alignItems="center",ze.style.padding="8px 16px"),se.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+oe(J[he])+"</div>";var M=se.querySelector("[data-card-id],[data-form-id],[data-gc-id]");M&&M.addEventListener("click",function(){Y(J[he])}),requestAnimationFrame(function(){var D=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!D||!se)){var w=se.clientHeight-8,E=se.clientWidth-24,u=D.offsetHeight,x=D.offsetWidth;if(u>0&&x>0&&w>40){var y=Me?2.2:1,h=Math.min(w/u,E/x,y);D.style.transform="scale("+h.toFixed(3)+")",D.style.transformOrigin="top center"}}}),K.innerHTML=J.map(function(D,w){var E=w===he,u="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(E?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+w+'" style="'+u+'">'+ge(D,E)+"</div>"}).join(""),K.querySelectorAll(".col-mini-item").forEach(function(D){D.addEventListener("click",function(){he=Number(D.dataset.idx),Le(),D.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Le()}function ye(J){var oe=window.innerWidth>=768?.76:.54,ge;if(!J||J._fake){var Y=J?J.player:null;if(!Y)return"";ge=Bi(Y)}else ge=di(J,"");return'<div style="display:inline-block;zoom:'+oe+';pointer-events:none;line-height:0">'+ge+"</div>"}function Se(J,oe,ge){oe=oe||100,ge=ge||140;var Y=Pt[J]||{},Z={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},K=Math.max(3,Math.round(oe*.06)),se=Object.entries(Y).map(function(Le){var Me=Le[0],be=Le[1],ze=Me.replace(/\d+$/,""),M=Z[ze]||"#888",D=Math.round(be.x*oe),w=Math.round(be.y*ge);return'<circle cx="'+D+'" cy="'+w+'" r="'+K+'" fill="'+M+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),he=Math.max(1,Math.round(oe/50));return'<svg viewBox="0 0 '+oe+" "+ge+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+oe+'" height="'+ge+'" fill="#1A6B3C"/><rect x="'+Math.round(oe*.2)+'" y="'+Math.round(ge*.02)+'" width="'+Math.round(oe*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+he+'"/><line x1="0" y1="'+Math.round(ge*.5)+'" x2="'+oe+'" y2="'+Math.round(ge*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+he+'"/><ellipse cx="'+Math.round(oe*.5)+'" cy="'+Math.round(ge*.5)+'" rx="'+Math.round(oe*.18)+'" ry="'+Math.round(ge*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+he+'"/><rect x="'+Math.round(oe*.2)+'" y="'+Math.round(ge*.82)+'" width="'+Math.round(oe*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+he+'"/>'+se+"</svg>"}function we(J,oe,ge){var Y=ge>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ge+"</div>":"",Z=oe?'data-form-id="'+oe.id+'"':"",K=J.length>7?14:J.length>5?16:19,se=!!oe;return"<div "+Z+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(se?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(se?"":"filter:grayscale(1);opacity:0.5")+'">'+Y+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(se?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+K+"px;font-weight:900;color:"+(se?"#1A6B3C":"#aaa")+';line-height:1">'+J+'</div></div><div style="flex:1;overflow:hidden;background:'+(se?"#1A6B3C":"#ccc")+'">'+Se(J,140,220)+"</div></div>"}function ve(J,oe){var ge=window.innerWidth>=768?.76:.54,Y=140,Z=305,K=Math.round(Z*.22),se=Z-K,he=J.length>7?10:13,Le=Se(J,Y,se),Me=oe?"1.5px solid #2a7a40":"1px solid #ddd",be=oe?"":"filter:grayscale(1);opacity:0.45;",ze=oe?"#1A6B3C":"#bbb",M="#fff";return'<div style="display:inline-block;zoom:'+ge+';line-height:0;pointer-events:none"><div style="width:'+Y+"px;height:"+Z+"px;border-radius:6px;border:"+Me+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+be+'"><div style="height:'+K+"px;background:"+ze+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+he+"px;font-weight:900;color:"+M+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(Y-4)+'px">'+J+'</span></div><div style="height:'+se+'px;overflow:hidden;flex-shrink:0">'+Le+"</div></div></div>"}function _e(J){if(de){const oe=U();if(!oe.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ge=oe.map(Y=>n.find(Z=>Z.player.id===Y.id)||{_fake:!0,player:Y,id:"fake-"+Y.id});pe(ge,Y=>Y._fake?Bi(Y.player):di(Y,""),Y=>Y._fake?ye({player:Y.player,id:"x",_fake:!0}):ye(Y),Y=>{Y._fake||Fi(Y,n,B,t)})}else{const oe=X();if(!oe.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ge={};oe.forEach(Z=>{const K=Z.player.id;ge[K]||(ge[K]=[]),ge[K].push(Z)});const Y=Object.values(ge).map(Z=>Wo(Z));pe(Y,Z=>{const K=B[Z.player.id]||1,se=K>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${K}</div>`:"",Le=n.filter(Me=>Me.player.id===Z.player.id&&Me.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return di(Z,se+Le)},Z=>ye(Z),Z=>Fi(Z,n,B,t))}}function Ae(J){const oe=de?I:[...H];if(!oe.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ge=oe.map(Y=>({formation:Y,card:m.find(Z=>Z.formation===Y)||null,owned:H.has(Y)}));pe(ge,({formation:Y,card:Z,owned:K})=>we(Y,K?Z:null,K?m.filter(se=>se.formation===Y).length:0),({formation:Y,owned:Z})=>ve(Y,Z),({card:Y,owned:Z})=>{Z&&Y&&Zo(Y,m,t,d)})}function Ie(J){const oe=Object.keys(A),ge=de?oe.length?oe:L:[...C];if(!ge.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const Y=ge.map(Z=>({type:Z,gc:Ve[Z]||{icon:"⚡",desc:""},def:A[Z]||null,owned:C.has(Z),card:o.find(K=>K.gc_type===Z)||null}));pe(Y,({type:Z,gc:K,def:se,owned:he,card:Le})=>{var y;const Me=he?o.filter(h=>h.gc_type===Z).length:0,be=Me>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Me}</div>`:"",ze=(se==null?void 0:se.gc_type)==="ultra_game_changer",M={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},D={purple:"#b06ce0",light_blue:"#00d4ef"},w=M[se==null?void 0:se.color]||M.purple,E=D[se==null?void 0:se.color]||D.purple,u=(se==null?void 0:se.effect)||K.desc||"",x=se!=null&&se.image_url?`/icons/${se.image_url}`:((y=se==null?void 0:se.club)==null?void 0:y.logo_url)||(se!=null&&se.country_code?`https://flagcdn.com/w80/${se.country_code.toLowerCase()}.png`:null);return he&&Le?`<div data-gc-id="${Le.id}" data-gc-type="${Z}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${E};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${E}66;cursor:pointer">
          ${be}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${Z.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${Z}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${ze?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${x?`<img src="${x}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${K.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${u.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${Z}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${K.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:Z,gc:K,def:se,owned:he})=>{const Le=window.innerWidth>=768?.76:.54,Me={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},be={purple:"#9b59b6",light_blue:"#00bcd4"},ze=Me[se==null?void 0:se.color]||Me.purple,M=be[se==null?void 0:se.color]||be.purple,D=se!=null&&se.image_url?`/icons/${se.image_url}`:null;return he?`<div style="display:inline-block;zoom:${Le};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${ze};border:1px solid ${M};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${Z}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${D?`<img src="${D}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${K.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((se==null?void 0:se.effect)||K.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Le};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${K.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${Z}</span></div></div>`},({type:Z,owned:K,def:se})=>{K&&Xo(Z,se,d)})}function xe(J){const oe="#E87722",ge="/";if(!b.length){J.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const Y={};b.forEach(K=>{const se=K.stadium_id||"?";(Y[se]=Y[se]||[]).push(K)});const Z=Object.entries(Y).map(([K,se])=>({sid:K,def:p[K]||null,count:se.length,card:se[0]}));pe(Z,({def:K,count:se})=>{var M,D;const he=(K==null?void 0:K.name)||"?",Le=((M=K==null?void 0:K.club)==null?void 0:M.encoded_name)||(K==null?void 0:K.country_code)||"—",Me=K!=null&&K.image_url?`${ge}icons/${K.image_url}`:((D=K==null?void 0:K.club)==null?void 0:D.logo_url)||(K!=null&&K.country_code?`https://flagcdn.com/w80/${K.country_code.toLowerCase()}.png`:null),be=Me?`<img src="${Me}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',ze=se>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${se}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${oe},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${oe}66">
          ${ze}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${he}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${be}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Le}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:K,count:se})=>{var M,D;const he=window.innerWidth>=768?.76:.54,Le=(K==null?void 0:K.name)||"?",Me=((M=K==null?void 0:K.club)==null?void 0:M.encoded_name)||(K==null?void 0:K.country_code)||"—",be=K!=null&&K.image_url?`${ge}icons/${K.image_url}`:((D=K==null?void 0:K.club)==null?void 0:D.logo_url)||(K!=null&&K.country_code?`https://flagcdn.com/w80/${K.country_code.toLowerCase()}.png`:null),ze=be?`<img src="${be}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${he};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${oe},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${Le}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${ze}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${Me}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(J=>{J.addEventListener("click",()=>{F=J.dataset.tab,j="Tous",W="",de=!1,e.querySelectorAll(".col-tab-btn").forEach(oe=>{const ge=oe.dataset.tab===F;oe.style.borderBottomColor=ge?"var(--green)":"transparent",oe.style.color=ge?"var(--green)":"var(--gray-600)"}),P(),ne()})}),P(),ne()}function Xo(e,t,i){const s=Ve[e]||{icon:"⚡",desc:"Effet spécial."},l=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},c=d[t==null?void 0:t.color]||d.purple,f=a[t==null?void 0:t.color]||a.purple,n=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||s.desc,m=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${c};border-radius:16px;border:2px solid ${f};
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Vt=1e3;function Zo(e,t,i,s){var A,r,p;const{state:l,toast:d,closeModal:a,navigate:c,refreshProfile:f}=i,n=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function m(){const I=Pt[n]||{},L=hi[n]||[],B=290,H=360,C=20;function F(W){const de=I[W];return de?{x:de.x*B,y:de.y*H}:null}let j=`<svg width="${B}" height="${H}" viewBox="0 0 ${B} ${H}" xmlns="http://www.w3.org/2000/svg">`;for(const[W,de]of L){const re=F(W),N=F(de);!re||!N||(j+=`<line x1="${re.x}" y1="${re.y}" x2="${N.x}" y2="${N.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const W of Object.keys(I)){const de=F(W);if(!de)continue;const re=W.replace(/\d+/,""),N=o[re]||"#555";j+=`<circle cx="${de.x}" cy="${de.y}" r="${C}" fill="${N}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,j+=`<text x="${de.x}" y="${de.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${re}</text>`}return j+="</svg>",j}const b=t.filter(I=>I.formation===n);b.length;const g=!e.is_for_sale;s(`Formation ${n}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(A=document.getElementById("direct-sell-form-btn"))==null||A.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${n} pour ${Vt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const I=b.find(B=>!B.is_for_sale)||b[0];if(!I){d("Aucune carte à vendre","error");return}await k.from("market_listings").delete().eq("card_id",I.id),await k.from("transfer_history").delete().eq("card_id",I.id);const{error:L}=await k.from("cards").delete().eq("id",I.id);if(L){d(L.message,"error");return}await k.from("users").update({credits:(l.profile.credits||0)+Vt}).eq("id",l.profile.id),await f(),d(`+${Vt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),c("collection")}),(r=document.getElementById("market-sell-form-btn"))==null||r.addEventListener("click",async()=>{const I=parseInt(document.getElementById("sell-price-form").value);if(!I||I<1){d("Prix invalide","error");return}await k.from("cards").update({is_for_sale:!0,sale_price:I}).eq("id",e.id),await k.from("market_listings").insert({seller_id:l.profile.id,card_id:e.id,price:I}),d("Carte mise en vente sur le marché !","success"),a(),c("collection")}),(p=document.getElementById("cancel-sell-form-btn"))==null||p.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),a(),c("collection")})}async function Fi(e,t,i,s){var _e,Ae,Ie,xe,J,oe,ge;const{state:l,toast:d,openModal:a,closeModal:c,navigate:f,refreshProfile:n}=s,o=e.player,m=t.filter(Y=>Y.player.id===o.id),b=m.length,g=e.evolution_bonus||0,A=Math.max((Number(o.note_g)||0)+(o.job==="GK"||o.job2==="GK"?g:0),(Number(o.note_d)||0)+(o.job==="DEF"||o.job2==="DEF"?g:0),(Number(o.note_m)||0)+(o.job==="MIL"||o.job2==="MIL"?g:0),(Number(o.note_a)||0)+(o.job==="ATT"||o.job2==="ATT"?g:0)),r=o.rarity||"normal",{data:p}=await k.from("sell_price_configs").select("*").eq("rarity",r).lte("note_min",A).gte("note_max",A).order("note_min",{ascending:!1}).limit(1);((_e=p==null?void 0:p[0])==null?void 0:_e.price)??Yo[r];const I=o.rarity!=="legende",L=ao(o),B=((o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:At(o,o.job))+g,H=o.rarity==="pepite"||o.rarity==="papyte",C=o.job2?(H?_i(e,ro(o.job2)):At(o,o.job2))+(At(o,o.job2)>0?g:0):null,F=qt[o.job]||"#1A6B3C",j=o.job2?qt[o.job2]:null,W=no[o.rarity]||"#ccc",de=Ei[o.country_code]||o.country_code||"",re=e.evolution_bonus||0,X=B+re,U=C||0,P=U>0?U+re:0,ne=m.map(Y=>Y.id);let pe={};if(ne.length){const{data:Y}=await k.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ne).order("transferred_at",{ascending:!0});(Y||[]).forEach(Z=>{pe[Z.card_id]||(pe[Z.card_id]=[]),pe[Z.card_id].push(Z)})}const ye=Y=>{const Z=Y.transferred_at?new Date(Y.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",K=Y.source==="booster"?"Booster":Y.price?Y.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Y.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${Y.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${Y.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${K}</div>
        <div style="font-size:11px;color:var(--gray-600)">${Z}</div>
      </div>
    </div>`},Se=ne.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${b>1?`(${b})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${m.map((Y,Z)=>{const K=pe[Y.id]||[],se=Y.is_for_sale,he=K.length?K[K.length-1]:null,Me=(o.rarity==="pepite"||o.rarity==="papyte")&&Y.current_note!=null?` (☆${Y.current_note})`:"";return`
            <div data-card-id="${Y.id}" data-card-idx="${Z}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${se?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${Y.id}" ${se?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${X}${o.job2&&U>0?` / ${P}`:""}`:`Note actuelle : ${X}${o.job2&&U>0?` / ${P}`:""}`}
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
      <div style="width:140px;border-radius:12px;padding:6px;background:${W};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${o.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(o.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${F}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${F}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${B}</text>
            </svg>
            ${C!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${j}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${C}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${L?`<img src="${L}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${o.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${de}</div>
            ${(Ae=o.clubs)!=null&&Ae.logo_url?`<img src="${o.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Ie=o.clubs)==null?void 0:Ie.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${W}">${o.rarity.toUpperCase()}</div>
          ${o.rarity==="pepite"||o.rarity==="papyte"?`
          <div style="margin-top:6px;background:${W}18;border-left:3px solid ${W};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${W};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([Y,Z])=>{const K=qt[Y],se=Y===o.job||Y===o.job2,he=(Number(Z)||0)+(se&&re>0?re:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${K}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${he}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${Y}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${b}</div>
        </div>
      </div>
    </div>
    ${Se}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(xe=document.getElementById("close-detail"))==null||xe.addEventListener("click",c);let we=new Set;const ve=()=>{const Y=we.size,Z=document.getElementById("sell-action-panel");if(!Z)return;Z.style.display=Y>0?"block":"none",document.getElementById("sell-selected-count").textContent=Y;const K=document.getElementById("evolve-btn");K&&(K.textContent=`⬆️ Évoluer ${Y>1?"(+"+Y+")":""}`)};document.querySelectorAll(".expl-check").forEach(Y=>{Y.addEventListener("change",()=>{const Z=Y.dataset.id;Y.checked?we.add(Z):we.delete(Z);const K=Y.closest(".exemplaire-row");K&&(K.style.borderColor=Y.checked?"#1A6B3C":"#eee"),ve()})}),document.querySelectorAll(".exemplaire-row").forEach(Y=>{Y.addEventListener("click",Z=>{if(Z.target.closest("button")||Z.target.tagName==="INPUT")return;const K=Y.querySelector(".expl-check");K&&!K.disabled&&(K.checked=!K.checked,K.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(Y=>{Y.addEventListener("click",Z=>{Z.stopPropagation();const K=document.querySelector(`.expl-hist[data-hist="${Y.dataset.idx}"]`);K&&(K.style.display=K.style.display==="none"?"flex":"none")})}),(J=document.getElementById("evolve-btn"))==null||J.addEventListener("click",async()=>{if(b<=1)return;const Y=[...we];if(!Y.length)return;if(we.has(e.id)){const be=document.createElement("div");be.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",be.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(be),be.querySelector("#err-close").addEventListener("click",()=>be.remove()),be.addEventListener("click",ze=>{ze.target===be&&be.remove()});return}const Z=Y.filter(be=>be!==e.id),K=o.rarity==="legende"?2:1;if((Z.length||1)*K,!(!Z.length&&Y.length===1&&Y[0]===e.id)){if(!Z.length){d("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(be=>{const ze=document.createElement("div");ze.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ze.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${o.firstname} ${o.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${Z.length}</strong> copie${Z.length>1?"s":""} sacrifiée${Z.length>1?"s":""}<br>
            📈 Note : <strong>${B+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${B+(e.evolution_bonus||0)+Z.length*K}</strong>
            ${C&&C>0?`<br>📈 Note 2 : <strong>${C+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${C+(e.evolution_bonus||0)+Z.length*K}</strong>`:""}
            ${o.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${K} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ze),ze.querySelector("#sac-cancel").addEventListener("click",()=>{ze.remove(),be(!1)}),ze.querySelector("#sac-ok").addEventListener("click",()=>{ze.remove(),be(!0)}),ze.addEventListener("click",M=>{M.target===ze&&(ze.remove(),be(!1))})}))return;if(Z.length){await k.from("market_listings").delete().in("card_id",Z),await k.from("deck_cards").delete().in("card_id",Z),await k.from("transfer_history").delete().in("card_id",Z),await k.from("decks").update({stadium_card_id:null}).in("stadium_card_id",Z);const{error:be}=await k.from("cards").delete().in("id",Z);if(be){d("Erreur suppression : "+be.message,"error");return}}const he=(e.evolution_bonus||0)+Z.length*K,{error:Le}=await k.from("cards").update({evolution_bonus:he}).eq("id",e.id);if(Le){d("Erreur évolution : "+Le.message,"error");return}const Me=B+he;d(`⬆️ ${o.firstname} ${o.surname_encoded} : note ${B+e.evolution_bonus||B} → ${Me}${Z.length?` · ${Z.length} copie${Z.length>1?"s":""} sacrifiée${Z.length>1?"s":""}`:""} !`,"success",4e3),c(),f("collection")}),(oe=document.getElementById("market-sell-btn"))==null||oe.addEventListener("click",async()=>{var Le;const Y=[...we];if(!Y.length){d("Sélectionne au moins un exemplaire","warning");return}const Z=parseInt((Le=document.getElementById("sell-market-price"))==null?void 0:Le.value);if(!Z||Z<1){d("Prix invalide","error");return}const{error:K}=await k.from("cards").update({is_for_sale:!0,sale_price:Z}).in("id",Y);if(K){d(K.message,"error");return}const se=Y.map(Me=>({seller_id:l.profile.id,card_id:Me,price:Z,status:"active"})),{error:he}=await k.from("market_listings").insert(se);he&&console.warn("[Market] insert listings:",he.message),d(`${Y.length} carte${Y.length>1?"s":""} mise${Y.length>1?"s":""} en vente à ${Z.toLocaleString("fr")} cr. chacune !`,"success"),c(),f("collection")}),(ge=document.getElementById("cancel-sell-btn"))==null||ge.addEventListener("click",async()=>{await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await k.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),c(),f("collection")})}const Xt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ii(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function so(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function lo(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Qo(e,t=44,i=58){var r;const s=e?ii(e):null,l=e?lo(e):null,d=so(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",c=vt[a]||"#555",f={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=(e==null?void 0:e.evolution_bonus)||0,m=(Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0)+(a===(e==null?void 0:e.job)||a===(e==null?void 0:e.job2)?n:0),b=Math.round(i*.19),g=Math.round(i*.25),A=i-b-g;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${f};background:${c};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${b}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${s?`<img src="${s}" style="position:absolute;top:${b}px;left:0;width:${t}px;height:${A}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">🌍</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${m}</span>
      ${l?`<img src="${l}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:(r=e==null?void 0:e.clubs)!=null&&r.encoded_name?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function ui(e,t){const{state:i,navigate:s,toast:l}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!a)return;const{data:c,error:f}=await k.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(f){l(f.message,"error");return}l("Deck créé !","success"),Di(c.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Di(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const c=prompt("Nouveau nom :",a.dataset.name);if(!c||c===a.dataset.name)return;const{error:f}=await k.from("decks").update({name:c}).eq("id",a.dataset.rename);if(f){l(f.message,"error");return}l("Deck renommé !","success"),ui(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await k.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:c}=await k.from("decks").delete().eq("id",a.dataset.delete);if(c){l(c.message,"error");return}l("Deck supprimé.","success"),ui(e,t)})})}async function Di(e,t,i){const{state:s,toast:l}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("decks").select("*").eq("id",e).single(),{data:a}=await k.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",s.profile.id),{data:c}=await k.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",s.profile.id).eq("card_type","stadium"),f=(a||[]).filter(I=>I.card_type==="player"&&I.player),n=(a||[]).filter(I=>I.card_type==="formation"),o=(c||[]).filter(I=>I.card_type==="stadium"),m=[...new Set(o.map(I=>I.stadium_id).filter(Boolean))];let b={};if(o.forEach(I=>{I.stadium_def&&I.stadium_id&&(b[I.stadium_id]=I.stadium_def)}),m.length&&Object.keys(b).length<m.length){const{data:I}=await k.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",m);(I||[]).forEach(L=>{b[L.id]=L})}const g=n.map(I=>I.formation).filter(Boolean),{data:A}=await k.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let r=d.formation||"4-4-2";g.length>0&&!g.includes(r)&&(r=g[0]);const p={deckId:e,name:d.name,formation:r,formationCardId:d.formation_card_id,stadiumCardId:d.stadium_card_id||null,slots:{},subs:[],playerCards:f,formationCards:n,stadiumCards:o,stadDefMap:b,availableFormations:g};(A||[]).forEach(I=>{I.is_starter?p.slots[I.position]=I.card_id:p.subs.includes(I.card_id)||p.subs.push(I.card_id)}),Lt(t,p,i)}function Lt(e,t,i){var f,n;const{navigate:s}=i;Xt[t.formation];const l=Gi(t.formation),d=l.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Xt),c=t.subs.map(o=>t.playerCards.find(m=>m.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${c.map(o=>{const m=o.player;return`<div style="position:relative;flex-shrink:0">
            ${Qo(m,44,58)}
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
  </div>`,en(e,t,l,i),document.getElementById("builder-back").addEventListener("click",()=>s("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const m=Gi(t.formation),b={};m.forEach(g=>{t.slots[g]&&(b[g]=t.slots[g])}),t.slots=b,Lt(e,t,i)}),(f=document.getElementById("stadium-select"))==null||f.addEventListener("change",o=>{t.stadiumCardId=o.target.value||null}),document.getElementById("save-deck").addEventListener("click",()=>nn(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(m=>m!==o.dataset.removeSub),Lt(e,t,i)})}),(n=document.getElementById("add-sub-btn"))==null||n.addEventListener("click",()=>{on(t,e,i)})}function en(e,t,i,s){var B,H;const l=e.querySelector("#deck-field");if(!l)return;const d=(B=t.stadiumCards)==null?void 0:B.find(C=>C.id===t.stadiumCardId),a=d&&((H=t.stadDefMap)==null?void 0:H[d.stadium_id])||null,c=Pt[t.formation]||{},f=Yi(t.formation)||[],n={};for(const C of i){const F=t.slots[C],j=F?t.playerCards.find(W=>W.id===F):null;j!=null&&j.player?n[C]={...j.player,_evolution_bonus:j.evolution_bonus||0}:n[C]=null}const o=300,m=300,b=48,g=64,A=13,r=16,p=38;function I(C){const F=c[C];return F?{x:F.x*o,y:F.y*m}:null}let L="";for(const[C,F]of f){const j=I(C),W=I(F);if(!j||!W)continue;const de=n[C]?{...n[C],club_id:n[C].club_id,country_code:n[C].country_code,rarity:n[C].rarity}:null,re=n[F]?{...n[F],club_id:n[F].club_id,country_code:n[F].country_code,rarity:n[F].rarity}:null,N=at(de,re);N==="#ff3333"||N==="#cc2222"?L+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${W.x.toFixed(1)}" y2="${W.y.toFixed(1)}" stroke="${N}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(L+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${W.x.toFixed(1)}" y2="${W.y.toFixed(1)}" stroke="${N}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,L+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${W.x.toFixed(1)}" y2="${W.y.toFixed(1)}" stroke="${N}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const C of i){const F=I(C);if(!F)continue;const j=n[C],W=C.replace(/\d+/,""),de=vt[W]||"#555",re=(F.x-b/2).toFixed(1),N=(F.y-g/2).toFixed(1),X={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[j==null?void 0:j.rarity]||"#aaa";if(j){const U=ii(j),P=lo(j),ne=so(j.country_code),pe=j._evolution_bonus||0,ye=(Number(W==="GK"?j.note_g:W==="DEF"?j.note_d:W==="MIL"?j.note_m:j.note_a)||0)+(W===j.job||W===j.job2?pe:0),Se=a&&(a.club_id&&String(j.club_id)===String(a.club_id)||a.country_code&&j.country_code===a.country_code),we=Se?ye+10:ye,ve=g-A-r;L+=`<defs><clipPath id="dcp-${C}"><rect x="${re}" y="${(F.y-g/2+A).toFixed(1)}" width="${b}" height="${ve}"/></clipPath></defs>`,L+=`<rect x="${re}" y="${N}" width="${b}" height="${g}" rx="5" fill="${de}"/>`,U&&(L+=`<image href="${U}" x="${re}" y="${(F.y-g/2+A).toFixed(1)}" width="${b}" height="${ve}" clip-path="url(#dcp-${C})" preserveAspectRatio="xMidYMin slice"/>`),L+=`<rect x="${re}" y="${N}" width="${b}" height="${A}" fill="rgba(255,255,255,0.93)"/>`,L+=`<text x="${F.x.toFixed(1)}" y="${(F.y-g/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(j.surname_encoded||"").slice(0,9)}</text>`;const _e=(F.y+g/2-r).toFixed(1);L+=`<rect x="${re}" y="${_e}" width="${b}" height="${r}" fill="rgba(255,255,255,0.93)"/>`,ne&&(L+=`<image href="${ne}" x="${(F.x-21).toFixed(1)}" y="${(F.y+g/2-r+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),L+=`<text x="${F.x.toFixed(1)}" y="${(F.y+g/2-r/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${we}</text>`,P&&(L+=`<image href="${P}" x="${(F.x+b/2-14).toFixed(1)}" y="${(F.y+g/2-r+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),L+=`<rect x="${re}" y="${N}" width="${b}" height="${g}" rx="5" fill="none" stroke="${Se?"#E87722":X}" stroke-width="${Se?"2.5":"2"}"/>`,Se&&(L+=`<rect x="${(F.x+b/2-13).toFixed(1)}" y="${N}" width="13" height="9" rx="3" fill="#E87722"/>`,L+=`<text x="${(F.x+b/2-6.5).toFixed(1)}" y="${(F.y-g/2+4.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="900" fill="#fff" font-family="Arial">+10</text>`)}else L+=`<rect x="${re}" y="${N}" width="${b}" height="${g}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,L+=`<text x="${F.x.toFixed(1)}" y="${F.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,L+=`<text x="${F.x.toFixed(1)}" y="${(F.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${W}</text>`;L+=`<rect x="${re}" y="${N}" width="${b}" height="${g}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${C}" style="cursor:pointer"/>`}l.innerHTML=`<svg viewBox="${-p} ${-p} ${o+p*2} ${m+p*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${L}</svg>`,l.querySelectorAll(".deck-slot-hit").forEach(C=>{C.addEventListener("click",()=>tn(C.dataset.pos,t,e,s))})}function tn(e,t,i,s){var b,g,A;const{openModal:l,closeModal:d}=s,a=e.replace(/\d+/,""),c=t.slots[e],f=c?t.playerCards.find(r=>r.id===c):null;(b=f==null?void 0:f.player)==null||b.id;const n=new Set;Object.entries(t.slots).forEach(([r,p])=>{var L;if(r===e||!p)return;const I=t.playerCards.find(B=>B.id===p);(L=I==null?void 0:I.player)!=null&&L.id&&n.add(I.player.id)}),t.subs.forEach(r=>{var I;const p=t.playerCards.find(L=>L.id===r);(I=p==null?void 0:p.player)!=null&&I.id&&n.add(p.player.id)});const o=new Set,m=t.playerCards.filter(r=>{const p=r.player;return!(p.job===a||p.job2===a)||n.has(p.id)||o.has(p.id)?!1:(o.add(p.id),!0)});m.sort((r,p)=>{const I=r.evolution_bonus||0,L=p.evolution_bonus||0,B=(a==="GK"?r.player.note_g:a==="DEF"?r.player.note_d:a==="MIL"?r.player.note_m:r.player.note_a)+(a===r.player.job||a===r.player.job2?I:0);return(a==="GK"?p.player.note_g:a==="DEF"?p.player.note_d:a==="MIL"?p.player.note_m:p.player.note_a)+(a===p.player.job||a===p.player.job2?L:0)-B}),l(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${m.length>0?m.map(r=>{var C,F;const p=r.player,I=r.evolution_bonus||0,L=(a==="GK"?p.note_g:a==="DEF"?p.note_d:a==="MIL"?p.note_m:p.note_a)+(a===p.job||a===p.job2?I:0),B=ii(p),H={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[p.rarity];return`<div class="player-option" data-card-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[a]}">
            ${B?`<img src="${B}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${vt[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
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
          <div style="width:36px;height:36px;border-radius:8px;background:${vt[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${H};flex-shrink:0">
            ${L}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",d),(A=document.getElementById("remove-player"))==null||A.addEventListener("click",()=>{delete t.slots[e],d(),Lt(i,t,s)}),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{t.slots[e]=r.dataset.cardId,d(),Lt(i,t,s)})})}function on(e,t,i){var f;const{openModal:s,closeModal:l}=i,d=new Set;Object.values(e.slots).filter(Boolean).forEach(n=>{var m;const o=e.playerCards.find(b=>b.id===n);(m=o==null?void 0:o.player)!=null&&m.id&&d.add(o.player.id)}),e.subs.forEach(n=>{var m;const o=e.playerCards.find(b=>b.id===n);(m=o==null?void 0:o.player)!=null&&m.id&&d.add(o.player.id)});const a=new Set,c=e.playerCards.filter(n=>{var o,m,b;return d.has((o=n.player)==null?void 0:o.id)||a.has((m=n.player)==null?void 0:m.id)?!1:(a.add((b=n.player)==null?void 0:b.id),!0)});s("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?c.map(n=>{var g;const o=n.player,m=ii(o),b=(o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a)+(card.evolution_bonus||0);return`<div class="player-option" data-card-id="${n.id}"
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
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(f=document.getElementById("close-sub-selector"))==null||f.addEventListener("click",l),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{e.subs.push(n.dataset.cardId),l(),Lt(t,e,i)})})}async function nn(e,t){const{state:i,toast:s,navigate:l}=t,d=e.formationCards.find(f=>f.formation===e.formation),a=(d==null?void 0:d.id)||e.formationCardId;await k.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await k.from("deck_cards").delete().eq("deck_id",e.deckId);const c=[];if(Object.entries(e.slots).forEach(([f,n],o)=>{c.push({deck_id:e.deckId,card_id:n,position:f,is_starter:!0,slot_order:o})}),e.subs.forEach((f,n)=>{c.push({deck_id:e.deckId,card_id:f,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),c.length>0){const{error:f}=await k.from("deck_cards").insert(c);if(f){s(f.message,"error");return}}s("Deck enregistré ✅","success"),l("decks")}function Gi(e){const t=Xt[e]||Xt["4-4-2"],i=["GK1"];for(let s=1;s<=t.DEF;s++)i.push(`DEF${s}`);for(let s=1;s<=t.MIL;s++)i.push(`MIL${s}`);for(let s=1;s<=t.ATT;s++)i.push(`ATT${s}`);return i}async function co(){const{data:e}=await k.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await k.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(s=>s.booster_id===i.id)}))}function rn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((s,l)=>s+Number(l.percentage),0);let i=Math.random()*t;for(const s of e)if(i-=Number(s.percentage),i<=0)return s;return e[e.length-1]}const po=()=>Object.keys(Pt),an=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],fi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function sn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Pi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},dn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},ln={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ni(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function cn(e){var o,m;const t=e.player;if(!t)return"";const i=t.job||"ATT",s=Pi[i],l=dn[t.rarity]||"#ccc",d=Ni(t,i),a=t.job2?Ni(t,t.job2):null,c=t.job2?Pi[t.job2]:null,f=sn(t),n=ln[t.country_code]||t.country_code||"";return`
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
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${c}" stroke="white" stroke-width="1.5"/>
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
  </div>`}function uo(e){var l;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const i=((l=Object.entries(t).sort((d,a)=>a[1]-d[1])[0])==null?void 0:l[0])||"player",s=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+s,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_raw:e}}async function pn(e,{state:t,navigate:i,toast:s}){var m,b;const l=((m=t.profile)==null?void 0:m.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await co()).map(uo)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}d.length||(d=an.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const a=await k.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(g=>g.data||[]),c=new Set(a.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),f=new Set(a.filter(g=>g.card_type==="formation").map(g=>g.formation)),n=new Set(a.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),o={};for(const g of d){if(g.allow_duplicates!==!1||!((b=g.rates)!=null&&b.length))continue;const A=[...new Set((g.rates||[]).map(p=>p.card_type))];let r=!1;for(const p of A)if(p==="stadium"){const{data:I}=await k.from("stadium_definitions").select("id");if((I||[]).some(L=>!c.has(L.id))){r=!0;break}}else if(p==="game_changer"){const{data:I}=await k.from("gc_definitions").select("name").eq("is_active",!0);if((I||[]).some(L=>!n.has(L.name))){r=!0;break}}else if(p==="formation"){const{FORMATION_LINKS:I}=await ti(async()=>{const{FORMATION_LINKS:L}=await import("./formation-links-Dnttc-Cp.js").then(B=>B.m);return{FORMATION_LINKS:L}},__vite__mapDeps([0,1]));if(Object.keys(I).some(L=>!f.has(L))){r=!0;break}}else{r=!0;break}r||(o[g.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${l.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${d.map(g=>{const A=g.cost===0||l>=g.cost,r=o[g.id]===!0;return`<div class="booster-card ${!A||r?"disabled":""}" data-booster="${g.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${g.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${g.img}" alt="${g.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${g.name}</div>
            <div class="desc">${g.sub}</div>
            <div class="cost">${g.costLabel}</div>
            ${A?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const A=d.find(r=>r.id===g.dataset.booster);if(A){g.style.opacity="0.5",g.style.pointerEvents="none";try{await un(A,{state:t,toast:s,navigate:i,container:e})}catch(r){s(r.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",A=>{A.stopPropagation();const r=d.find(p=>p.id===g.dataset.boosterId);xn(r)})})}async function un(e,{state:t,toast:i,navigate:s,container:l}){var m,b;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await bn();const{data:d}=await k.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((d||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),c=new Set((d||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let f=[],n=null;try{if((m=e.rates)!=null&&m.length)f=await gi(t.profile,e);else{const g=e.type||"player";g==="player"?f=await fo(t.profile,e.cardCount,e.cost):g==="game_changer"?f=await go(t.profile,e.cardCount,e.cost):g==="formation"?f=await mo(t.profile,e.cost):f=await gi(t.profile,e)}}catch(g){n=g.message||String(g),console.error("[Booster] Erreur:",g)}if(!(f!=null&&f.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${n||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(b=g.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>g.remove());return}f.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=a.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=c.has(g.formation))});const{data:o}=await k.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),xo(f,e,s)}function fn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function gn(e,t){let i;switch(t){case"legende":i=e.filter(s=>s.rarity==="legende"),i.length||(i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte")),i.length||(i=e.filter(s=>mt(s)>=6));break;case"special":i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte"),i.length||(i=e.filter(s=>mt(s)>=6));break;case"normal_high":i=e.filter(s=>s.rarity==="normal"&&mt(s)>=6),i.length||(i=e.filter(s=>mt(s)>=6));break;default:i=e.filter(s=>s.rarity==="normal"&&mt(s)>=1&&mt(s)<=5),i.length||(i=e.filter(s=>s.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function gi(e,t){if(t.cost>0){const{error:b}=await k.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(b)throw b}const i=t.allow_duplicates!==!1;let s=[];const{data:l,error:d}=await k.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(d){const{data:b}=await k.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);s=b||[]}else s=l||[];const a=new Set(s.filter(b=>b.card_type==="player").map(b=>b.player_id)),c=new Set(s.filter(b=>b.card_type==="formation").map(b=>b.formation)),f=new Set(s.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),n=new Set(s.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),o=new Set,m=[];for(let b=0;b<(t.cardCount||5);b++){const g=rn(t.rates);if(g){if(g.card_type==="player"){const A=j=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[j]||j,r=g.rarity?A(g.rarity):null;let p=k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(p=p.eq("rarity",r));const{data:I}=await p;let L=I||[];if((g.note_min||g.note_max)&&(L=L.filter(j=>{const W=Math.max(Number(j.note_g)||0,Number(j.note_d)||0,Number(j.note_m)||0,Number(j.note_a)||0);return(!g.note_min||W>=g.note_min)&&(!g.note_max||W<=g.note_max)})),L.length||(g.note_min||g.note_max?(L=I||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):L=I||[]),!L.length)continue;let B=L.filter(j=>!o.has(j.id));if(i)B.length||(B=L);else if(B=B.filter(j=>!a.has(j.id)),!B.length)continue;const H=B[Math.floor(Math.random()*B.length)];o.add(H.id);const C=a.has(H.id),{data:F}=await k.from("cards").insert({owner_id:e.id,player_id:H.id,card_type:"player"}).select().single();F&&(m.push({...F,player:H,isDuplicate:C}),k.rpc("record_transfer",{p_card_id:F.id,p_player_id:H.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:A}=await k.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=A!=null&&A.length?A:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],p=i?r:r.filter(H=>!f.has(H.name));if(!i&&!p.length)continue;const L=p[Math.floor(Math.random()*p.length)].name,{data:B}=await k.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:L}).select().single();B&&m.push(B)}else if(g.card_type==="formation"){const A=po(),r=i?A:A.filter(B=>!c.has(B));if(!i&&!r.length)continue;const p=r[Math.floor(Math.random()*r.length)],I=c.has(p),{data:L}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:p}).select();L!=null&&L[0]&&m.push({...L[0],isDuplicate:I})}else if(g.card_type==="stadium"){const{data:A,error:r}=await k.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(r){console.error("[Booster] stadium_definitions:",r.message);continue}if(!(A!=null&&A.length)){console.warn("[Booster] Aucun stade en DB");continue}const p=i?A:A.filter(H=>!n.has(H.id));if(!i&&!p.length)continue;const I=p[Math.floor(Math.random()*p.length)],{data:L,error:B}=await k.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:I.id}).select("id,card_type,stadium_id").single();if(B){console.error("[Booster] insert stadium card:",B.message);continue}L&&m.push({...L,rarity:"normal",_stadiumDef:I})}}}return m}async function fo(e,t,i){if(i>0){const{error:n}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n}const{data:s}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(s!=null&&s.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const l=s.filter(n=>n.job==="GK"),d=s.filter(n=>n.job!=="GK"),a=!e.first_booster_opened&&l.length>0,c=[];for(let n=0;n<t;n++){const o=n===0&&a?l:n===0?d:s,m=fn(),b=gn(o,m);b&&c.push(b)}a&&await k.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:f}=await k.from("cards").insert(c.map(n=>({owner_id:e.id,player_id:n.id,card_type:"player"}))).select();return(f||[]).forEach((n,o)=>{k.rpc("record_transfer",{p_card_id:n.id,p_player_id:c[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),c.map((n,o)=>({...f[o],player:n}))}async function go(e,t,i){const{error:s}=await k.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s;const{data:l}=await k.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=l!=null&&l.length?l:Object.keys(fi).map(o=>({name:o,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const o=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:c,error:f}=await k.from("cards").insert(a).select();return f&&console.error("[Booster GC] Erreur insert:",f.message,f),(c||[]).map(o=>{const m=l==null?void 0:l.find(b=>b.name===o.gc_type||b.id===o.gc_definition_id);return{...o,_gcDef:m||null}})}async function mo(e,t){const{error:i}=await k.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:s}=await k.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),l=new Set((s||[]).map(o=>o.formation)),d=po(),a=d[Math.floor(Math.random()*d.length)],c=l.has(a),{data:f,error:n}=await k.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return n&&console.error("[Booster Formation] Erreur insert:",n.message,n),(f||[]).map(o=>({...o,isDuplicate:c}))}function xo(e,t,i,s=null){var X,U;if(!e||e.length===0){const P=document.createElement("div");P.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",P.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(P),(X=P.querySelector("#anim-close-err"))==null||X.addEventListener("click",()=>P.remove());return}e=[...e].sort((P,ne)=>{const pe=P.player?mt(P.player):-1;return(ne.player?mt(ne.player):-1)-pe});const l=document.createElement("div");l.id="booster-anim-overlay",l.innerHTML=`
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
  `,document.body.appendChild(l);let d=!1;const a=document.getElementById("pack-cut-zone"),c=document.getElementById("pack-blade");let f=!1;const n=P=>P.touches&&P.touches[0]?P.touches[0].clientX:P.clientX;function o(P){d||(f=!0,c.style.opacity="1",m(P))}function m(P){if(!f||d)return;const ne=a.getBoundingClientRect(),pe=n(P)-ne.left,ye=Math.max(0,Math.min(1,pe/ne.width));c.style.width=ye*ne.width+"px",ye>=.82&&g()}function b(){d||(f=!1,c.style.transition="width .2s ease, opacity .2s ease",c.style.width="0",c.style.opacity="0",setTimeout(()=>{d||(c.style.transition="")},220))}function g(){var ne;if(d)return;d=!0,f=!1,c.style.width="100%",c.style.opacity="1",(ne=document.getElementById("cut-flash"))==null||ne.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const P=document.getElementById("cut-hint");P&&(P.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{c.style.opacity="0",document.getElementById("pack-phase").style.display="none",I(0)},620)}a.addEventListener("pointerdown",o),window.addEventListener("pointermove",m),window.addEventListener("pointerup",b),a.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",m,{passive:!0}),window.addEventListener("touchend",b);let A=0,r=!1;const p=new Set;function I(P){A=P,document.getElementById("reveal-phase").style.display="flex",L(),B(P,0),W()}function L(){const P=document.getElementById("card-dots");P&&(P.innerHTML=e.map((ne,pe)=>`<div class="card-dot" data-i="${pe}" style="width:8px;height:8px;border-radius:50%;background:${pe===A?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),P.querySelectorAll(".card-dot").forEach(ne=>ne.addEventListener("click",()=>C(parseInt(ne.dataset.i)))))}function B(P,ne){var xe;const pe=e[P],ye=document.getElementById("card-counter"),Se=document.getElementById("card-track");ye&&(ye.textContent=`Carte ${P+1} / ${e.length}`);const we=document.getElementById("reveal-btns");we&&(we.style.display=P===e.length-1?"flex":"none");const ve=pe.card_type==="player"&&((xe=pe.player)==null?void 0:xe.rarity)==="legende",_e=!p.has(P);p.add(P);let Ae=0;if(pe.card_type==="player"&&pe.player){const J=pe.player,oe=J.job||"ATT";Ae=Number(oe==="GK"?J.note_g:oe==="DEF"?J.note_d:oe==="MIL"?J.note_m:J.note_a)||0}const Ie=J=>{Se.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ve?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${mn(pe)}</div>
          ${pe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const oe=document.getElementById("current-card-wrap");ne!==0?(oe.style.transition="none",oe.style.transform=`translateX(${ne>0?100:-100}%)`,requestAnimationFrame(()=>{oe.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",oe.style.transform="translateX(0)"})):oe.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),J||ve?re():N(),L()};_e&&Ae>6&&pe.card_type==="player"&&pe.player?H(pe,()=>Ie(!0)):Ie(!1)}function H(P,ne){var Ae;r=!0;const pe=P.player,ye=`https://flagsapi.com/${pe.country_code}/flat/64.png`,Se=(Ae=pe.clubs)==null?void 0:Ae.logo_url,we=document.getElementById("walkout-overlay"),ve=document.getElementById("walkout-stage");if(!we||!ve){r=!1,ne();return}we.style.display="flex";const _e=()=>{const Ie=ve.firstElementChild;Ie&&(Ie.classList.remove("wo-in"),Ie.classList.add("wo-out"))};ve.innerHTML=`<img class="wo-in" src="${ye}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(_e,2e3),setTimeout(()=>{var Ie;ve.innerHTML=Se?`<img class="wo-in" src="${Se}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((Ie=pe.clubs)==null?void 0:Ie.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(_e,4450),setTimeout(()=>{we.style.display="none",ve.innerHTML="",r=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),ne()},4900)}function C(P){if(r||P<0||P>=e.length||P===A)return;const ne=P>A?1:-1;A=P,B(P,ne)}function F(){C(A+1)}function j(){C(A-1)}function W(){const P=document.getElementById("card-viewport");if(!P||P._swipeBound)return;P._swipeBound=!0;let ne=0,pe=0,ye=0,Se=!1;const we=xe=>xe.touches?xe.touches[0].clientX:xe.clientX,ve=xe=>xe.touches?xe.touches[0].clientY:xe.clientY,_e=xe=>{Se=!0,ne=we(xe),pe=ve(xe),ye=0},Ae=xe=>{if(!Se)return;ye=we(xe)-ne;const J=ve(xe)-pe;if(Math.abs(ye)<Math.abs(J))return;const oe=document.getElementById("current-card-wrap");oe&&(oe.style.transition="none",oe.style.transform=`translateX(${ye*.6}px) rotate(${ye*.02}deg)`)},Ie=()=>{if(!Se)return;Se=!1;const xe=document.getElementById("current-card-wrap"),J=55;ye<=-J&&A<e.length-1?F():ye>=J&&A>0?j():xe&&(xe.style.transition="transform .2s ease",xe.style.transform="translateX(0)")};P.addEventListener("pointerdown",_e),P.addEventListener("pointermove",Ae),P.addEventListener("pointerup",Ie),P.addEventListener("pointercancel",Ie),P.addEventListener("touchstart",_e,{passive:!0}),P.addEventListener("touchmove",Ae,{passive:!0}),P.addEventListener("touchend",Ie),P.addEventListener("click",xe=>{if(Math.abs(ye)>8)return;const J=P.getBoundingClientRect();xe.clientX-J.left>J.width/2?F():j()})}let de=null;function re(){const P=document.getElementById("fireworks-canvas");if(!P)return;P.width=window.innerWidth,P.height=window.innerHeight;const ne=P.getContext("2d"),pe=[];function ye(){const we=Math.random()*P.width,ve=Math.random()*P.height*.6,_e=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Ae=_e[Math.floor(Math.random()*_e.length)];for(let Ie=0;Ie<60;Ie++){const xe=Math.PI*2/60*Ie,J=2+Math.random()*5;pe.push({x:we,y:ve,vx:Math.cos(xe)*J,vy:Math.sin(xe)*J,alpha:1,color:Ae,size:2+Math.random()*3})}}ye(),de=setInterval(ye,600);function Se(){if(document.getElementById("fireworks-canvas")){ne.clearRect(0,0,P.width,P.height);for(let we=pe.length-1;we>=0;we--){const ve=pe[we];if(ve.x+=ve.vx,ve.y+=ve.vy+.08,ve.vy*=.98,ve.alpha-=.018,ve.alpha<=0){pe.splice(we,1);continue}ne.globalAlpha=ve.alpha,ne.fillStyle=ve.color,ne.beginPath(),ne.arc(ve.x,ve.y,ve.size,0,Math.PI*2),ne.fill()}ne.globalAlpha=1,(de!==null||pe.length>0)&&requestAnimationFrame(Se)}}Se()}function N(){de!==null&&(clearInterval(de),de=null);const P=document.getElementById("fireworks-canvas");P&&P.getContext("2d").clearRect(0,0,P.width,P.height)}if(s){const P=document.getElementById("reveal-btns");P&&(P.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(U=document.getElementById("reveal-next"))==null||U.addEventListener("click",()=>{N(),l.remove(),s()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{N(),l.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{N(),l.remove(),i("boosters")})}function mn(e){var t,i,s,l;if(e.card_type==="player"&&e.player)return cn(e);if(e.card_type==="game_changer"){const d=e._gcDef,a=(d==null?void 0:d.gc_type)==="ultra_game_changer",c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},f={purple:"#b06ce0",light_blue:"#00d4ef"},n=c[d==null?void 0:d.color]||c.purple,o=f[d==null?void 0:d.color]||f.purple,m=(d==null?void 0:d.name)||e.gc_type||"Game Changer",b=(d==null?void 0:d.effect)||((t=fi[e.gc_type])==null?void 0:t.desc)||"",g=d!=null&&d.image_url?`/icons/${d.image_url}`:null,A=((i=fi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${n};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${m.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${g?`<img src="${g}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${A}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${b.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const d=e._stadiumDef,a=(d==null?void 0:d.name)||"Stade",c=((s=d==null?void 0:d.club)==null?void 0:s.encoded_name)||(d==null?void 0:d.country_code)||"—",f=d!=null&&d.image_url?`/icons/${d.image_url}`:((l=d==null?void 0:d.club)==null?void 0:l.logo_url)||(d!=null&&d.country_code?`https://flagcdn.com/64x48/${d.country_code.toLowerCase()}.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${a.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${a}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${f?`<img src="${f}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function xn(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const l={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};s.innerHTML=`
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
      </div>`,document.body.appendChild(s),s.addEventListener("click",a=>{a.target===s&&s.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>s.remove());return}yn()}function yn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
    `,document.body.appendChild(t);let i=5;const s=setInterval(()=>{i--;const l=document.getElementById("mw-ad-cd");l&&(l.textContent=i),i<=0&&(clearInterval(s),t.remove(),e(!0))},1e3)})}async function hn(e,{state:t,navigate:i,toast:s,refreshProfile:l}){var b,g;const{data:d}=await k.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let a=Array.isArray((b=t.profile)==null?void 0:b.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await k.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let c=null;try{const r=(await co()).find(p=>(p.name||"").toLowerCase().includes("new player"));r&&(c=uo(r))}catch(A){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',A)}const f=a.length;let n=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await k.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function m(){var L;if(n>=f||!a.length){await k.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),l&&await l(),s("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const A=a[0],{data:r}=await k.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let p=[];try{if(A.type==="formation")p=await mo(t.profile,0);else if(A.type==="game_changer")p=await go(t.profile,A.count||3,0);else if(c&&((L=c.rates)!=null&&L.length)){const B={...c,cost:0,cardCount:A.count||c.cardCount||5};p=await gi(t.profile,B),A.guaranteeGK&&!t.profile.first_booster_opened&&(p.some(C=>C.player&&C.player.job==="GK")||await vn(t.profile,p),await k.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else p=await fo(t.profile,A.count||5,0)}catch(B){s(B.message||"Erreur ouverture booster","error");return}a.shift(),n++,await o();const I=A.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:A.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${n}/${f})`,img:(c==null?void 0:c.img)||"/icons/booster-players.png"};xo(p,I,i,()=>{m()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>m())}async function vn(e,t){try{const{data:i}=await k.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const s=i[Math.floor(Math.random()*i.length)],l=t.findIndex(a=>a.player);if(l===-1)return;const d=t[l];await k.from("cards").update({player_id:s.id}).eq("id",d.id),t[l]={...d,player_id:s.id,player:s}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const It={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Mt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function wt(e,t,i,s,l){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${s}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",l)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function mi(e,t){var d,a;const i=e.player,s=e.evolution_bonus||0,l=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?s:0)+(i.job2==="GK"&&l>0?s:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?s:0)+(i.job2==="DEF"&&l>0?s:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?s:0)+(i.job2==="MIL"&&l>0?s:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?s:0)+(i.job2==="ATT"&&l>0?s:0),evolution_bonus:s,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((d=i.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ht(e,t){if(!t||!e)return e;const{club_id:i,country_code:s}=t;return Object.values(e).forEach(l=>{Array.isArray(l)&&l.forEach(d=>{const a=i&&String(d.club_id)===String(i),c=s&&String(d.country_code)===String(s);(a||c)&&(d.stadiumBonus=!0)})}),e}function oi(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:s}=t;return e.forEach(l=>{if(!l)return;const d=i&&String(l.club_id)===String(i),a=s&&String(l.country_code)===String(s);(d||a)&&(l.stadiumBonus=!0)}),e}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ni(){const e=Math.random()*100;return e<10?3:e<30?2:1}function yt(e,t){const i=It[t]||It["4-4-2"],s={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const c=e.filter(n=>n.position&&n.position.replace(/\d+$/,"")===a).sort((n,o)=>parseInt(n.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(n=>({...n,_line:a})),f=lt(c.length);c.forEach((n,o)=>{n._col=f[o]}),s[a]=c}return s}const d=[...e];for(const a of["GK","DEF","MIL","ATT"]){const c=[];for(let n=0;n<i[a];n++){let o=d.findIndex(m=>m.job===a);if(o===-1&&(o=d.findIndex(m=>m.job2===a)),o===-1&&(o=0),d[o]){const m={...d[o],_line:a};c.push(m),d.splice(o,1)}}const f=lt(c.length);c.forEach((n,o)=>{n._col=f[o]}),s[a]=c}return s}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ri(e,t,i){const l=new Set,d=t.filter(o=>{const m=o.gc_type||o.id;return l.has(m)?!1:(l.add(m),!0)});let a=[];function c(o,m){const b=o._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},A={purple:"#9b59b6",light_blue:"#00bcd4"},r=g[b==null?void 0:b.color]||g.purple,p=A[b==null?void 0:b.color]||A.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${m?"#FFD700":p};background:${r};
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
        ${d.map(A=>{const r=a.find(p=>p.gc_type===A.gc_type);return c(A,!!r)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(A=>{A.addEventListener("click",()=>{const r=A.dataset.id,p=d.find(L=>L.id===r);if(!p)return;const I=a.findIndex(L=>L.gc_type===p.gc_type);I>-1?a.splice(I,1):a.length<3&&a.push(p),n()})}),(m=e.querySelector("#gc-launch"))==null||m.addEventListener("click",()=>{o&&f(a)}),(b=e.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>f([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{a.length&&(a=[],n())})}n()}function wn(e){var s;const t=((s=e==null?void 0:e.state)==null?void 0:s.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function _n(e,t,i){const{state:s,navigate:l}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",s.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){wt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>l("decks"));return}const a=d.map(b=>b.id),{data:c}=await k.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),f=[...new Set((c||[]).filter(b=>{var g,A;return((g=b.card)==null?void 0:g.card_type)==="stadium"&&((A=b.card)==null?void 0:A.stadium_id)}).map(b=>b.card.stadium_id))],n={};if(f.length){const{data:b}=await k.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(b||[]).forEach(g=>{n[g.id]=g}),(c||[]).forEach(g=>{var A,r;((A=g.card)==null?void 0:A.card_type)==="stadium"&&((r=g.card)!=null&&r.stadium_id)&&(g.card._stadiumDef=n[g.card.stadium_id]||null)})}let o=0;function m(){var C,F,j,W,de,re,N;const b=d[o],g=(c||[]).filter(X=>X.deck_id===b.id),A=g.filter(X=>{var U;return X.is_starter&&((U=X.card)==null?void 0:U.player)}).map(X=>mi(X.card,X.position)),r=g.find(X=>{var U;return((U=X.card)==null?void 0:U.card_type)==="formation"}),p=b.formation||((C=r==null?void 0:r.card)==null?void 0:C.formation)||"4-4-2";let I=A.length>=11?yt(A,p):null,L=((F=b.stadium_card)==null?void 0:F.stadium_def)||null;L&&I&&(I=Ht(I,L));const B=A.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${wn(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===0?"0.1":"0.3"});color:${o===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${b.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${p} · ${A.length}/11 ${b.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===d.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===d.length-1?"0.1":"0.3"});color:${o===d.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===d.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${L?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${L.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((j=L.club)==null?void 0:j.encoded_name)||L.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${I?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ft(I,p,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${A.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${d.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${d.map((X,U)=>`<div style="width:7px;height:7px;border-radius:50%;background:${U===o?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${B?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${B?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${B?"pointer":"default"}">
          ${B?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const U=e.querySelector(".deck-preview-wrap svg");U&&(U.removeAttribute("width"),U.removeAttribute("height"),U.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",U.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(W=document.getElementById("prev-deck"))==null||W.addEventListener("click",()=>{o>0&&(o--,m())}),(de=document.getElementById("next-deck"))==null||de.addEventListener("click",()=>{o<d.length-1&&(o++,m())}),(re=document.getElementById("validate-deck"))==null||re.addEventListener("click",()=>{if(!B)return;const X=t.state.params||{};t.navigate("match",{...X,matchMode:X.matchMode||i,deckId:b.id})}),(N=document.getElementById("cancel-deck-select"))==null||N.addEventListener("click",()=>{We(e),l("home")});const H=document.getElementById("deck-swipe-zone");if(H){let X=0,U=0;H.addEventListener("touchstart",P=>{X=P.touches[0].clientX,U=P.touches[0].clientY},{passive:!0}),H.addEventListener("touchend",P=>{const ne=P.changedTouches[0].clientX-X,pe=P.changedTouches[0].clientY-U;Math.abs(ne)<40||Math.abs(ne)<Math.abs(pe)||(ne<0&&o<d.length-1?(o++,m()):ne>0&&o>0&&(o--,m()))},{passive:!0})}}m()}function yo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ye(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const s=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),l=yo(e),d=e._line||e.job||"MIL",a=Mt[d]||"#555",c={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",f=e.note!==void 0?Number(e.note)||0:(Number(je(e,d))||0)+(e.boost||0),n=bo(e==null?void 0:e.country_code),o=Math.round(i*.19),m=Math.round(i*.25),b=i-Math.round(i*.19)-Math.round(i*.25),g=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${c};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${s&&!(e!=null&&e.used)?`<img src="${s}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${b}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${m}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Zt(e==null?void 0:e.country_code)?`<img src="${Zt(e.country_code)}" style="width:${m+2}px;height:${m-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${m-4}px">${n}</span>`}
      <span style="font-size:${m-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":f}</span>
      ${l?`<img src="${l}" style="width:${m-4}px;height:${m-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,m-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ot(e,t,i){if(!(e!=null&&e.length))return"";const s=e.slice(0,5);let l='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return s.forEach((d,a)=>{if(l+=Ye(d,40,52),a<s.length-1){const c=at(d,s[a+1]);l+=`<div style="width:7px;height:3px;background:${c==="#ff3333"||c==="#cc2222"?"rgba(255,255,255,0.12)":c};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(l+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),l+="</div>",l}function Zt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function bo(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ut(e,t,i,s,l=310,d=310,a=[]){var B;const c=Pt[t]||{},f=Yi(t)||hi[t]||[],n={},o=["ATT","MIL","DEF","GK"];for(const H of o)(e[H]||[]).forEach((F,j)=>{n[`${H}${j+1}`]=F});function m(H){const C=c[H];return C?{x:C.x*l,y:C.y*d}:null}let b="";for(const[H,C]of f){const F=m(H),j=m(C);if(!F||!j)continue;const W=n[H],de=n[C],re=at(W,de);re==="#00ff88"||re==="#FFD700"?(b+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${re}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,b+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):b+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${re}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,A=64,r=13,p=16,I={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[H,C]of Object.entries(n)){const F=m(H);if(!F||!C)continue;const j=H.replace(/[0-9]/g,""),W=Mt[j]||"#555",de=a.includes(C.cardId),re=i==="attack"&&(["MIL","ATT"].includes(j)||de)&&!C.used||i==="defense"&&["GK","DEF","MIL"].includes(j)&&!C.used,N=s.includes(C.cardId);let X;i==="attack"?X=de?Math.max(1,Number(C.note_a)||0):j==="MIL"?Number(C.note_m)||0:Number(C.note_a)||0:i==="defense"?X=j==="GK"?Number(C.note_g)||0:j==="MIL"?Number(C.note_m)||0:Number(C.note_d)||0:X=Number(j==="GK"?C.note_g:j==="DEF"?C.note_d:j==="MIL"?C.note_m:C.note_a)||0,X=X+(C.boost||0),C.stadiumBonus&&(i==="attack"&&(j==="ATT"||j==="MIL")||i==="defense"&&(j==="GK"||j==="DEF"||j==="MIL")?X+=10:i||(X+=10));const U=(F.x-g/2).toFixed(1),P=(F.y-A/2).toFixed(1),ne=I[C==null?void 0:C.rarity]||I.normal;if(C.used){const Ae=typeof import.meta<"u"&&"/"||"/",xe=`${typeof window<"u"&&((B=window.location)==null?void 0:B.origin)||""}${Ae}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");b+=`<rect x="${U}" y="${P}" width="${g}" height="${A}" rx="5" fill="#161616"/>`,b+=`<image href="${xe}" xlink:href="${xe}" x="${U}" y="${P}" width="${g}" height="${A}" preserveAspectRatio="xMidYMid slice"/>`,b+=`<rect x="${U}" y="${P}" width="${g}" height="${A}" rx="5" fill="none" stroke="${ne}" stroke-width="2" opacity="0.7"/>`,b+=`<rect x="${U}" y="${P}" width="${g}" height="${A}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${C.cardId}" data-role="${j}" style="cursor:pointer"/>`;continue}const pe=N?.45:1,ye=N?"#FFD700":ne,Se=N?3:(C==null?void 0:C.rarity)==="legende"||(C==null?void 0:C.rarity)==="légende"||(C==null?void 0:C.rarity)==="pepite"||(C==null?void 0:C.rarity)==="pépite"?2.5:2,we=A-r-p;b+=`<defs><clipPath id="cp-${H}"><rect x="${U}" y="${(F.y-A/2+r).toFixed(1)}" width="${g}" height="${we}"/></clipPath></defs>`,b+=`<rect x="${U}" y="${P}" width="${g}" height="${A}" rx="5" fill="${W}" opacity="${pe}"/>`;const ve=Pe(C);ve&&(b+=`<image href="${ve}" xlink:href="${ve}" x="${U}" y="${(F.y-A/2+r).toFixed(1)}" width="${g}" height="${we}" clip-path="url(#cp-${H})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${U}" y="${P}" width="${g}" height="${r}" rx="4" fill="rgba(255,255,255,0.92)"/>`,b+=`<text x="${F.x.toFixed(1)}" y="${(F.y-A/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.name||"").slice(0,9)}</text>`;const _e=(F.y+A/2-p).toFixed(1);b+=`<rect x="${U}" y="${_e}" width="${g}" height="${p}" fill="rgba(255,255,255,0.92)"/>`;{const Ae=Zt(C.country_code);Ae?b+=`<image href="${Ae}" xlink:href="${Ae}" x="${(F.x-20).toFixed(1)}" y="${(F.y+A/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:b+=`<text x="${(F.x-13).toFixed(1)}" y="${(F.y+A/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${bo(C.country_code)}</text>`;const Ie=C.stadiumBonus?"#E87722":"#111";b+=`<text x="${F.x.toFixed(1)}" y="${(F.y+A/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${Ie}" font-family="Arial Black">${X}</text>`;const xe=yo(C);xe?b+=`<image href="${xe}" xlink:href="${xe}" x="${(F.x+g/2-14).toFixed(1)}" y="${(F.y+A/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:C.clubName&&(b+=`<text x="${(F.x+14).toFixed(1)}" y="${(F.y+A/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(C.clubName||"").slice(0,3).toUpperCase()}</text>`),C.stadiumBonus&&(b+=`<rect x="${(F.x-g/2).toFixed(1)}" y="${(F.y-A/2).toFixed(1)}" width="${g}" height="${A}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}b+=`<rect x="${U}" y="${P}" width="${g}" height="${A}" rx="5" fill="${N?"rgba(255,255,255,0.12)":"none"}" stroke="${ye}" stroke-width="${Se}" opacity="${pe}"/>`,re&&(b+=`<rect x="${U}" y="${P}" width="${g}" height="${A}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${N?"selected":""}" data-card-id="${C.cardId}" data-role="${j}" style="cursor:pointer"/>`)}const L=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-L} ${-L} ${l+L*2} ${d+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
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
  </div>`}async function ai(e,t,i,s){var F;const{state:l,navigate:d,toast:a}=t;et(e);const c=l.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!c.deckId)return _n(e,t,i);const f=c.deckId;let n,o,m,b;try{const j=await Promise.all([k.from("decks").select("formation,name,stadium_card_id").eq("id",f).single(),k.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",f).order("slot_order")]);n=j[0].data,m=j[0].error,o=j[1].data,b=j[1].error}catch(j){console.error("[Match] Exception chargement deck:",j),wt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(m||b){console.error("[Match] Erreur Supabase:",m||b),wt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const g=(o||[]).filter(j=>{var W;return j.is_starter&&((W=j.card)==null?void 0:W.player)}).map(j=>mi(j.card,j.position)),A=(o||[]).filter(j=>{var W;return!j.is_starter&&((W=j.card)==null?void 0:W.player)}).map(j=>mi(j.card,j.position));if(g.length<11){wt(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>d("decks"));return}const r=(o||[]).find(j=>{var W;return((W=j.card)==null?void 0:W.card_type)==="formation"}),p=(n==null?void 0:n.formation)||((F=r==null?void 0:r.card)==null?void 0:F.formation)||"4-4-2",{data:I,error:L}=await k.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",l.profile.id).eq("card_type","game_changer"),{data:B}=await k.from("gc_definitions").select("*").eq("is_active",!0),H=(I||[]).map(j=>({...j,_gcDef:(B==null?void 0:B.find(W=>W.name===j.gc_type||W.id===j.gc_definition_id))||null}));let C=null;if(n!=null&&n.stadium_card_id){const{data:j}=await k.from("cards").select("stadium_id").eq("id",n.stadium_card_id).single();if(j!=null&&j.stadium_id){const{data:W}=await k.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",j.stadium_id).single();C=W||null}}s({deckId:f,formation:p,starters:g,subsRaw:A,gcCardsEnriched:H,gcDefs:B||[],stadiumDef:C})}async function $n(e,t){const{state:i}=t,l=(i.params||{}).matchMode||"vs_ai_easy",d=l.replace("vs_ai_",""),a=l;await ai(e,t,l,async({deckId:c,formation:f,starters:n,subsRaw:o,gcCardsEnriched:m,gcDefs:b,stadiumDef:g})=>{try{let A=yt(n,f);g&&(A=Ht(A,g),oi(o,g));const r=await kn(f,d),p=async I=>{try{const{data:L,error:B}=await k.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:c,status:"in_progress"}).select().single();if(B){console.error("[MatchIA] Erreur création match:",B),wt(e,"⚠️","Impossible de créer le match ("+B.message+").","Retour",()=>t.navigate("home"));return}const H={gcDefs:b||[],matchId:L==null?void 0:L.id,mode:a,difficulty:d,formation:f,homeTeam:A,aiTeam:r,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),homeScore:0,aiScore:0,gcCards:I,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Tn(e,H,t)}catch(L){console.error("[MatchIA] Exception launchMatch:",L),wt(e,"⚠️","Erreur au lancement du match : "+L.message,"Retour",()=>t.navigate("home"))}};if(!m.length){p([]);return}ri(e,m,p)}catch(A){console.error("[MatchIA] Exception setup:",A),wt(e,"⚠️","Erreur de préparation du match : "+A.message,"Retour",()=>t.navigate("home"))}})}async function kn(e,t){var a,c;const{data:i}=await k.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return En(e);const s=It[e]||It["4-4-2"],l={GK:[],DEF:[],MIL:[],ATT:[]},d=[...i];for(const f of["GK","DEF","MIL","ATT"]){const n=d.filter(A=>A.job===f),o=d.filter(A=>A.job!==f),m=[...n,...o],b=[];for(let A=0;A<s[f];A++){const r=m[A]||d[A];r&&b.push({cardId:"ai-"+r.id+"-"+A,id:r.id,firstname:r.firstname,name:r.surname_encoded,country_code:r.country_code,club_id:r.club_id,job:r.job,job2:r.job2,note_g:Number(r.note_g)||0,note_d:Number(r.note_d)||0,note_m:Number(r.note_m)||0,note_a:Number(r.note_a)||0,rarity:r.rarity,skin:r.skin,hair:r.hair,hair_length:r.hair_length,clubName:((a=r.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((c=r.clubs)==null?void 0:c.logo_url)||null,boost:0,used:!1,_line:f})}const g=lt(b.length);b.forEach((A,r)=>{A._col=g[r]}),l[f]=b}return l}function En(e){const t=It[e]||It["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},s=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let l=0;for(const d of["GK","DEF","MIL","ATT"]){const a=[];for(let f=0;f<t[d];f++){const n=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+l,id:"fake-"+l,firstname:"IA",name:s[l%s.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?n:2,note_d:d==="DEF"?n:2,note_m:d==="MIL"?n:2,note_a:d==="ATT"?n:2,rarity:"normal",boost:0,used:!1,_line:d}),l++}const c=lt(a.length);a.forEach((f,n)=>{f._col=c[n]}),i[d]=a}return i}function Tn(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${ut(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>An(e,t,i),5e3)}function An(e,t,i){const s=t.homeTeam.MIL||[],l=t.aiTeam.MIL||[];function d(r){return r.reduce((p,I)=>p+je(I,"MIL"),0)}function a(r){let p=0;for(let I=0;I<r.length-1;I++){const L=at(r[I],r[I+1]);L==="#00ff88"?p+=2:L==="#FFD700"&&(p+=1)}return p}const c=d(s)+a(s),f=d(l)+a(l),n=c>=f;function o(r,p,I,L){return`<div id="duel-row-${L}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${p}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((B,H)=>{const C=H<r.length-1?at(B,r[H+1]):null,F=!C||C==="#ff3333"||C==="#cc2222",j=C==="#00ff88"?"+2":C==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${L}" data-idx="${H}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ye({...B,note:je(B,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${H<r.length-1?`<div class="duel-link duel-link-${L}" data-idx="${H}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${F?"rgba(255,255,255,0.12)":C};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${F?"none":`0 0 8px ${C}`}">
            ${j?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${C}">${j}</span>`:""}
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
  </div>`;const m=()=>{const r=(p,I)=>e.querySelectorAll(p).forEach((L,B)=>{setTimeout(()=>{L.style.opacity="1",L.style.transform="translateY(0) scale(1)"},I+B*90)});r(".duel-card-home",150),r(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,I)=>{setTimeout(()=>{p.style.opacity="1"},I*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(I=>I.style.opacity="1")},1250),setTimeout(()=>{b("score-home",c,800),b("score-ai",f,800)},1500)};function b(r,p,I){const L=document.getElementById(r);if(!L)return;const B=performance.now(),H=C=>{const F=Math.min(1,(C-B)/I);L.textContent=Math.round(p*(1-Math.pow(1-F,3))),F<1?requestAnimationFrame(H):L.textContent=p};requestAnimationFrame(H)}requestAnimationFrame(m),t.attacker=n?"home":"ai";const g=n?ni():null;n&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:s.map(r=>({name:r.name,note:je(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:l.map(r=>({name:r.name,note:je(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:c,aiTotal:f,text:`Duel milieu : ${t.clubName} ${c} – ${f} IA → ${n?t.clubName+" attaque":"IA attaque"}`});const A=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Xe(e,t,i),t.attacker==="ai"&&setTimeout(()=>xi(e,t,i),800)};setTimeout(()=>{const r=document.getElementById("score-home"),p=document.getElementById("score-ai"),I=document.getElementById(n?"duel-row-home":"duel-row-ai"),L=document.getElementById(n?"duel-row-ai":"duel-row-home"),B=n?r:p,H=n?p:r;B&&(B.style.fontSize="80px",B.style.color=n?"#FFD700":"#ff6b6b",B.style.animation="duelPulse .5s ease"+(n?", duelGlow 1.5s ease infinite .5s":"")),H&&(H.style.opacity="0.25"),setTimeout(()=>{I&&(I.style.transformOrigin="center",I.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",I.style.zIndex="5"),setTimeout(()=>{var F;const C=document.getElementById("duel-shock");if(C){const j=(F=L||I)==null?void 0:F.getBoundingClientRect(),W=e.querySelector(".match-screen").getBoundingClientRect();j&&(C.style.top=j.top-W.top+j.height/2+"px"),C.style.animation="shockwave .5s ease-out forwards"}L&&(L.style.transformOrigin="center",L.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var F;const C=document.getElementById("duel-finale");C&&(C.innerHTML=`
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
          </button>`,C.style.transition="opacity .45s ease",C.style.opacity="1",C.style.pointerEvents="auto",(F=document.getElementById("start-match-btn"))==null||F.addEventListener("click",A))},600)},700)},2800)}function zn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Xe(e,t,i){var B,H,C,F,j,W,de,re;const s=t.selected.map(N=>N.cardId),l=t.usedSubIds||[],d=t.homeSubs.filter(N=>!l.includes(N.cardId)),c=Object.values(t.homeTeam).flat().filter(N=>N.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,f=!["GK","DEF","MIL","ATT"].some(N=>(t.aiTeam[N]||[]).some(X=>!X.used)),n=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(N=>!N.used),o=t.phase==="attack"&&f&&n.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(N=>!N.used).map(N=>N.cardId):[];t.log[t.log.length-1];const m=t.phase==="ai-attack"||t.phase==="ai-defense",b=t.phase==="attack",g=t.phase==="defense",A=t.phase==="finished",r=t.gcCards.filter(N=>!t.usedGc.includes(N.id)),p=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
          </div>`}const N=t.log[t.log.length-1];return N?'<div style="padding:2px 4px">'+zn(N)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const N=window.innerWidth>=700,X=(_e,Ae,Ie)=>{var be,ze;const xe=(t.gcDefs||[]).find(M=>M.name===_e.gc_type),J={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[xe==null?void 0:xe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",oe={purple:"#b06ce0",light_blue:"#00d4ef"}[xe==null?void 0:xe.color]||"#b06ce0",ge=(xe==null?void 0:xe.name)||_e.gc_type,Y=(xe==null?void 0:xe.effect)||((be=Ve[_e.gc_type])==null?void 0:be.desc)||"",Z=xe!=null&&xe.image_url?`/icons/${xe.image_url}`:null,K=((ze=Ve[_e.gc_type])==null?void 0:ze.icon)||"⚡",se=Math.round(Ie*.22),he=Math.round(Ie*.22),Le=Ie-se-he,Me=ge.length>12?7:9;return`<div class="gc-mini" data-gc-id="${_e.id}" data-gc-type="${_e.gc_type}"
          style="box-sizing:border-box;width:${Ae}px;height:${Ie}px;border-radius:10px;border:2px solid ${oe};background:${J};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${se}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Me}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Ae-6}px">${ge}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Le}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Z?`<img src="${Z}" style="max-width:${Ae-10}px;max-height:${Le-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Le*.55)}px">${K}</span>`}
          </div>
          <div style="height:${he}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Y.slice(0,38)}</span>
          </div>
        </div>`},U=(_e,Ae)=>{var Ie;return`<div id="boost-card"
          style="box-sizing:border-box;width:${_e}px;height:${Ae}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ae*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Ae*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Ae*.09)}px;color:#000;font-weight:900">+${(Ie=t.boostCard)==null?void 0:Ie.value}</div>
          </div>`},P=(_e,Ae)=>Ae?U(130,175):X(_e,130,175),ne=(_e,Ae)=>Ae?U(68,95):X(_e,68,95),pe=N?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ye=A?`<button id="btn-results" style="${pe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:m?`<div style="${pe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:b?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${pe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Se=b||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",we=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${N?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${d.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':d.map(_e=>`<div class="sub-btn-col" data-sub-id="${_e.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(_e,76,100)}</div>`).join("")}
      </div>`,ve=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ft(t.homeTeam,t.formation,t.phase,s,300,300,o)}
        </div>
      </div>`;return N?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${we}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ve}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ye}${Se}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${r.map(_e=>P(_e,!1)).join("")}
            ${p?P(null,!0):""}
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
            ${r.map(_e=>ne(_e,!1)).join("")}
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
          <div>${ye}${Se}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(N=>{var X,U,P;if(N.type==="duel"){const ne=N.isGoal,pe=N.homeScored?"#FFD700":ne?"#ff6b6b":"rgba(255,255,255,0.3)",ye=N.homeScored?"⚽ BUT !":ne?"⚽ BUT IA !":(X=N.homePlayers)!=null&&X.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${ne?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${pe};margin-bottom:4px">
                <div style="font-size:9px;color:${pe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ye}</div>
                ${(U=N.homePlayers)!=null&&U.length?`<div style="margin-bottom:3px">${ot(N.homePlayers,"rgba(255,255,255,0.7)",N.homeTotal)}</div>`:""}
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
  </div>`;function I(){const N=e.querySelector(".match-screen");if(!N)return;const X=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);N.style.bottom="auto",N.style.height=X+"px",N.style.minHeight=X+"px",N.style.maxHeight=X+"px",N.style.overflow="hidden";const U=e.querySelector("#mobile-action-bar"),P=e.querySelector("#mobile-play-area");U&&P&&(P.style.paddingBottom=U.offsetHeight+"px")}if(I(),setTimeout(I,120),setTimeout(I,400),setTimeout(I,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",I),window.visualViewport.addEventListener("scroll",I)),window.addEventListener("resize",I)),function(){const X=e.querySelector(".terrain-wrapper svg");X&&(X.removeAttribute("width"),X.removeAttribute("height"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",X.setAttribute("viewBox","-26 -26 352 352"),X.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const N=e.querySelector(".terrain-wrapper svg");N&&(N.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let N=!1,X=30;const U=()=>document.getElementById("match-timer"),P=()=>{const ne=U();if(!ne)return;const pe=String(Math.floor(X/60)).padStart(2,"0"),ye=String(X%60).padStart(2,"0");ne.textContent=` ${pe}:${ye}`,ne.style.color=N?"#ff2222":"#ff9500",ne.style.fontWeight="900"};P(),t._timerInt=setInterval(()=>{if(X--,X<0)if(!N)N=!0,X=15,P();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const ne=document.createElement("div");ne.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ne.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ne),setTimeout(()=>{ne.remove(),Bt(e,t,i)},2500)}else P()},1e3)}(B=document.getElementById("match-quit"))==null||B.addEventListener("click",()=>{We(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Bt(e,t,i))}),(H=document.getElementById("view-ai"))==null||H.addEventListener("click",()=>Dn(t,i)),(C=document.getElementById("toggle-history"))==null||C.addEventListener("click",()=>{var N;(N=document.getElementById("match-history-panel"))==null||N.classList.add("open")}),(F=document.getElementById("close-history"))==null||F.addEventListener("click",()=>{var N;(N=document.getElementById("match-history-panel"))==null||N.classList.remove("open")}),(j=document.getElementById("btn-action"))==null||j.addEventListener("click",()=>{t.selected.length!==0&&(b?Ln(e,t,i):g&&In(e,t,i))}),(W=document.getElementById("btn-results"))==null||W.addEventListener("click",()=>Bt(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(N=>{N.addEventListener("click",()=>Sn(N,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(N=>{N.addEventListener("click",()=>li(e,t,i,null,N.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(N=>{N.addEventListener("click",()=>Cn(N.dataset.gcId,N.dataset.gcType,e,t,i))}),(de=document.getElementById("boost-card"))==null||de.addEventListener("click",()=>Fn(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(N=>{N.addEventListener("click",()=>li(e,t,i,N.dataset.subId))}),(re=document.getElementById("sub-btn-main"))==null||re.addEventListener("click",()=>li(e,t,i))}function Sn(e,t,i,s){const l=e.dataset.cardId,d=e.dataset.role,a=t.selected.findIndex(c=>c.cardId===l);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){s.toast("Maximum 3 joueurs","error");return}const c=(t.homeTeam[d]||[]).find(f=>f.cardId===l);c&&t.selected.push({...c,_role:d,_line:d})}Xe(i,t,s)}function Ti(e,t,i){e.matchId&&k.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Ln(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const s=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(c=>!c.used)),l=t.selected.map(a=>{const c=(t.homeTeam[a._role]||[]).find(n=>n.cardId===a.cardId)||a,f=s&&["GK","DEF"].includes(a._role);return{...c,_line:a._role,...f?{note_a:Math.max(1,Number(c.note_a)||0)}:{}}}),d=Nt(l,t.modifiers.home);t.pendingAttack={...d,players:[...l],side:"home"},t.selected.forEach(a=>{const c=(t.homeTeam[a._role]||[]).find(f=>f.cardId===a.cardId);c&&(c.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Xe(e,t,i),setTimeout(()=>Mn(e,t,i),1200)}function In(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const s=t.selected.map(c=>({...(t.homeTeam[c._role]||[]).find(n=>n.cardId===c.cardId)||c,_line:c._role})),l=Rt(s,t.modifiers.home);t.selected.forEach(c=>{const f=(t.homeTeam[c._role]||[]).find(n=>n.cardId===c.cardId);f&&(f.used=!0)});const d=Ot(t.pendingAttack.total,l.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:Pe(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homePlayers:t.selected.map(c=>{const f=(t.homeTeam[c._role]||[]).find(n=>n.cardId===c.cardId)||c;return{name:f.name,note:(f._line==="GK"?Number(f.note_g)||0:f._line==="MIL"?Number(f.note_m)||0:Number(f.note_d)||0)+(f.boost||0),portrait:Pe(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo}}),homeTotal:l.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(d.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${l.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Xe(e,t,i),Qt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${l.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,zt(e,t,i,"home-attack")}function xi(e,t,i){Ti(t,i,null);const s=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],l=to(s,"attack",t.difficulty);if(!l.length){Jt(e,t,i);return}const d=Nt(l,t.modifiers.ai);t.pendingAttack={...d,players:l,side:"ai"},l.forEach(n=>{n.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${l.map(n=>n.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used),f=(t.homeSubs||[]).filter(n=>!(t.usedSubIds||[]).includes(n.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!f){t.aiScore++;const n={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:l.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Pe(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(n),t.pendingAttack=null,Xe(e,t,i),Qt(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}t.phase="defense",Xe(e,t,i)}function Mn(e,t,i){var n,o;const s=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],l=to(s,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(m=>(t.aiTeam[m]||[]).filter(b=>!b.used)).length){t.homeScore++;const b={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((n=t.pendingAttack)==null?void 0:n.players)||[]).map(g=>({name:g.name,note:je(g,g._line||g.job),portrait:Pe(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(b),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),Qt(b.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}const a=l.length>0?Rt(l,t.modifiers.ai).total:0;l.forEach(m=>{m.used=!0});const c=Ot(t.pendingAttack.total,a,t.modifiers.ai),f={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(m=>({name:m.name,note:m._line==="MIL"?m.note_m:m.note_a,portrait:Pe(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),aiPlayers:l.map(m=>({name:m.name,note:m._line==="GK"?m.note_g:m._line==="MIL"?m.note_m:m.note_d,portrait:Pe(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(c.shielded)f.text="🛡️ Bouclier IA !",t.log.push(f);else if(c.goal){t.homeScore++,f.isGoal=!0,f.homeScored=!0,f.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),Qt(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}else f.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(f);t.modifiers.ai={},t.pendingAttack=null,zt(e,t,i,"ai-attack")}function zt(e,t,i,s){if(t.round++,ho(t)){Bt(e,t,i);return}if(s==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(c=>!c.used).length){Jt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(c=>!c.used).length){Jt(e,t,i);return}setTimeout(()=>xi(e,t,i),100);return}t.phase="attack",Xe(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Jt(e,t,i);return}t.phase="ai-attack",Xe(e,t,i),setTimeout(()=>xi(e,t,i),800)}}function ho(e){const t=["MIL","ATT","GK","DEF"].some(s=>(e.homeTeam[s]||[]).some(l=>!l.used)),i=["MIL","ATT","GK","DEF"].some(s=>(e.aiTeam[s]||[]).some(l=>!l.used));return!t&&!i}function Jt(e,t,i){ho(t)?Bt(e,t,i):(t.phase="attack",Xe(e,t,i))}function jn(e,t,i){const s=document.createElement("div");s.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const l=Pe(e),d=Pe(t),a=Mt[e.job]||"#555",c=Mt[t.job]||"#555",f=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,n=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;s.innerHTML=`
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
        <div style="width:80px;height:80px;border-radius:12px;background:${c};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${n}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(s);let o=!1;const m=()=>{o||(o=!0,s.remove(),i())};s.addEventListener("click",m),setTimeout(m,2e3)}function jt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function li(e,t,i,s=null,l=null){var g,A;if(t.phase!=="attack"){jt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){jt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([r,p])=>(p||[]).filter(I=>I.used).map(I=>({...I,_line:I._line||r}))),a=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!d.length){jt("Aucun joueur utilisé à remplacer");return}if(!a.length){jt("Aucun remplaçant disponible");return}let c=Math.max(0,d.findIndex(r=>r.cardId===l));const f=((g=d[c])==null?void 0:g._line)||((A=d[c])==null?void 0:A.job);let n=s?Math.max(0,a.findIndex(r=>r.cardId===s)):Math.max(0,a.findIndex(r=>r.job===f)),o=!1;const m=document.createElement("div");m.id="sub-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var C,F,j,W,de,re;const r=d[c],p=a[n],I=Math.min(130,Math.round((window.innerWidth-90)/2)),L=Math.round(I*1.35),B=N=>`background:rgba(255,255,255,0.12);border:none;color:${N?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${N?"default":"pointer"};flex-shrink:0`;m.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${B(n===0)}" ${n===0?"disabled":""}>▲</button>
        <div>${p?Ye({...p,used:!1,boost:0},I,L):"<div>—</div>"}</div>
        <button id="in-down" style="${B(n>=a.length-1)}" ${n>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${n+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${B(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${r?Ye({...r,used:!1,boost:0},I,L):"<div>—</div>"}</div>
        <button id="out-down" style="${B(c>=d.length-1)}" ${c>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(C=m.querySelector("#sub-close"))==null||C.addEventListener("click",()=>m.remove()),(F=m.querySelector("#out-up"))==null||F.addEventListener("click",()=>{c>0&&(c--,b())}),(j=m.querySelector("#out-down"))==null||j.addEventListener("click",()=>{c<d.length-1&&(c++,b())}),(W=m.querySelector("#in-up"))==null||W.addEventListener("click",()=>{n>0&&(n--,b())}),(de=m.querySelector("#in-down"))==null||de.addEventListener("click",()=>{n<a.length-1&&(n++,b())});const H=(N,X,U,P)=>{const ne=m.querySelector("#"+N);if(!ne)return;let pe=0;ne.addEventListener("touchstart",ye=>{pe=ye.touches[0].clientY},{passive:!0}),ne.addEventListener("touchend",ye=>{const Se=ye.changedTouches[0].clientY-pe;if(Math.abs(Se)<30)return;const we=X();Se<0&&we<P-1?(U(we+1),b()):Se>0&&we>0&&(U(we-1),b())},{passive:!0})};H("in-panel",()=>n,N=>n=N,a.length),H("out-panel",()=>c,N=>c=N,d.length),(re=m.querySelector("#sub-confirm"))==null||re.addEventListener("click",N=>{if(N.preventDefault(),N.stopPropagation(),o)return;o=!0;const X=d[c],U=a[n];if(!X||!U)return;let P=null,ne=-1;for(const[ye,Se]of Object.entries(t.homeTeam)){const we=(Se||[]).findIndex(ve=>ve.cardId===X.cardId);if(we!==-1){P=ye,ne=we;break}}if(ne===-1||!P){jt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),m.remove();return}const pe={...U,_line:P,_col:X._col||0,used:!1,boost:0};t.homeTeam[P].splice(ne,1,pe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(U.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:X.name,firstname:X.firstname,note:je(X,P),portrait:Pe(X),job:X.job,country_code:X.country_code,rarity:X.rarity,clubName:X.clubName,clubLogo:X.clubLogo},inPlayer:{name:U.name,firstname:U.firstname,note:je(U,P),portrait:Pe(U),job:U.job,country_code:U.country_code,rarity:U.rarity,clubName:U.clubName,clubLogo:U.clubLogo},text:`🔄 ${U.firstname} ${U.name} remplace ${X.firstname} ${X.name}`}),m.remove(),jn(X,U,()=>Xe(e,t,i))})}document.body.appendChild(m),b()}function Cn(e,t,i,s,l){var A,r;const d=(s.gcDefs||[]).find(p=>p.name===t),a=Ve[t]||{icon:"⚡",desc:"Carte spéciale."},c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",f={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",n=(d==null?void 0:d.name)||t,o=(d==null?void 0:d.effect)||a.desc,m=d!=null&&d.image_url?`/icons/${d.image_url}`:null,b=a.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${f};background:${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${f}66">
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
    </div>`,document.body.appendChild(g),(A=g.querySelector("#gc-back"))==null||A.addEventListener("click",()=>g.remove()),(r=g.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{g.remove(),Bn(e,t,i,s,l)})}function Yt(e,t,i,s,l,d){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let c=[];function f(){var n,o;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${c.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(m=>{const b=m._line||m.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b]||"#555",A=je(m,b)+(m.boost||0),r=c.find(p=>p.cardId===m.cardId);return`<div class="gc-pick-item" data-cid="${m.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${r?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${m.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${m.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${A}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${b}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${c.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${c.length}/${t})
      </button>
    </div>`,(n=a.querySelector("#gc-picker-close"))==null||n.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.cid,g=e.find(r=>r.cardId===b);if(!g)return;const A=c.findIndex(r=>r.cardId===b);A>-1?c.splice(A,1):c.length<t&&c.push(g),f()})}),(o=a.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{a.remove(),d(c)})}f(),document.body.appendChild(a)}const qn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},s,l,d)=>{const a=Object.entries(s.homeTeam).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,f])=>f.filter(n=>!n.used).map(n=>({...n,_line:c})));return a.length?(Yt(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,l,s,c=>{c.forEach(f=>{const n=(s.homeTeam[f._line]||[]).find(o=>o.cardId===f.cardId);n&&(n.boost=(n.boost||0)+e,s.log.push({text:`⚡ +${e} sur ${n.name}`,type:"info"}))}),Xe(l,s,d)}),!0):(s.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Xe(l,s,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:s="ai"},l,d,a)=>{const c=s==="home"?l.homeTeam:l.aiTeam,f=s==="ai"?"adverse":"allié",n=Object.entries(c).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,m])=>m.filter(b=>!b.used).map(b=>({...b,_line:o})));return n.length?(Yt(n,t,`Choisir ${t} joueur(s) ${f}(s) à débuffer (-${e})`,d,l,o=>{o.forEach(m=>{const g=((s==="home"?l.homeTeam:l.aiTeam)[m._line]||[]).find(A=>A.cardId===m.cardId);g&&(g.boost=(g.boost||0)-e,l.log.push({text:`🎯 -${e} sur ${g.name}${s==="ai"?" (IA)":""}`,type:"info"}))}),Xe(d,l,a)}),!0):(l.log.push({text:`🎯 Aucun joueur ${f} disponible`,type:"info"}),Xe(d,l,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},s,l,d)=>{const a=i==="home"?s.homeTeam:s.aiTeam,c=i==="ai"?"adverse":"allié",f=Object.entries(a).filter(([n])=>!t.length||t.includes(n)).flatMap(([n,o])=>o.filter(m=>!m.used).map(m=>({...m,_line:n})));return f.length?(Yt(f,e,`Choisir ${e} joueur(s) ${c}(s) à exclure`,l,s,n=>{n.forEach(o=>{const b=((i==="home"?s.homeTeam:s.aiTeam)[o._line]||[]).find(g=>g.cardId===o.cardId);b&&(b.used=!0,s.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Xe(l,s,d)}),!0):(s.log.push({text:`❌ Aucun joueur ${c} à exclure`,type:"info"}),Xe(l,s,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,s,l)=>{const d=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,c])=>c.filter(f=>f.used).map(f=>({...f,_line:a})));return d.length?(Yt(d,e,`Choisir ${e} joueur(s) à ressusciter`,s,i,a=>{a.forEach(c=>{const f=(i.homeTeam[c._line]||[]).find(n=>n.cardId===c.cardId);f&&(f.used=!1,i.log.push({text:`💫 ${f.name} ressuscité !`,type:"info"}))}),Xe(s,i,l)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Xe(s,i,l),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Bn(e,t,i,s,l){s.usedGc.push(e);const d=s.gcDefs||[],a=d.find(f=>f.name===t)||d.find(f=>{var n;return((n=f.name)==null?void 0:n.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let c=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const f=qn[a.effect_type];f?f(a.effect_params||{},s,i,l)||(c=!0):(l.toast(`Effet "${a.effect_type}" non implémenté`,"error"),c=!0)}else{switch(t){case"Double attaque":s.modifiers.home.doubleAttack=!0,s.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":s.modifiers.home.shield=!0,s.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const f=Object.entries(s.homeTeam).flatMap(([n,o])=>(o||[]).filter(m=>m.used).map(m=>({...m,_line:n})));f.length?(f[0].used=!1,s.log.push({text:`💫 ${f[0].name} ressuscité !`,type:"info"})):s.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":s.modifiers.ai.stolenNote=(s.modifiers.ai.stolenNote||0)+1,s.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const f=[...s.aiTeam.ATT||[],...s.aiTeam.MIL||[]].filter(n=>!n.used);if(f.length){const n=f.sort((o,m)=>je(m,"ATT")-je(o,"ATT"))[0];n.used=!0,s.log.push({text:`❄️ ${n.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":s.maxSubs++,s.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}c=!0}k.from("cards").delete().eq("id",e).then(()=>{}),c&&Xe(i,s,l)}function Fn(e,t,i){const s=Object.values(t.homeTeam).flat().filter(l=>!l.used);if(!s.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const c=(t.homeTeam[a]||[]).find(f=>f.cardId===d);if(c){c.boost=(c.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${c.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Xe(e,t,i)})})}function Qt(e,t,i,s,l){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(n,o)=>`
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let c=!1;const f=()=>{c||(c=!0,d.remove(),setTimeout(()=>l(),50))};d.addEventListener("click",f),setTimeout(f,3500)}async function Bt(e,t,i){var o,m;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:s}=i,l=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,a=l?"victoire":d?"nul":"defaite",c=Uo(t.mode,a);t.matchId&&await k.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:l?s.profile.id:null,home_credits_reward:c,played_at:new Date().toISOString()}).eq("id",t.matchId);const f={credits:(s.profile.credits||0)+c,matches_played:(s.profile.matches_played||0)+1};l?f.wins=(s.profile.wins||0)+1:d?f.draws=(s.profile.draws||0)+1:f.losses=(s.profile.losses||0)+1,await k.from("users").update(f).eq("id",s.profile.id),await i.refreshProfile();const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{n.remove(),We(e),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",()=>{n.remove(),We(e),i.navigate("match",{matchMode:t.mode})})}function Dn(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ut(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function vo(e,t){var i,s;try{const l=(s=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:s.id;try{(k.getChannels?k.getChannels():[]).forEach(a=>{const c=a.topic||"";(c.includes("matchmaking")||c.includes("pvp-match")||c.includes("friend-invite"))&&k.removeChannel(a)})}catch(d){console.warn("[Random] cleanup canaux:",d)}l&&await k.rpc("cancel_matchmaking",{p_user_id:l}).catch(()=>{})}catch{}await ai(e,t,"random",({deckId:l,formation:d,starters:a,subsRaw:c,gcCardsEnriched:f,gcDefs:n,stadiumDef:o})=>{const m=b=>Gn(e,t,l,d,a,c,b,n||[],o);if(!f.length){m([]);return}ri(e,f,m)})}async function Gn(e,t,i,s,l,d,a=[],c=[],f=null){var B;const{state:n,navigate:o,toast:m}=t;let b=!1,g=null;et(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const A=async(H=!0)=>{b=!0,g&&(k.removeChannel(g),g=null),H&&await k.rpc("cancel_matchmaking",{p_user_id:n.profile.id}).catch(()=>{})};(B=document.getElementById("mm-cancel"))==null||B.addEventListener("click",async()=>{try{await A(!0)}catch{}We(e),o("home")});const r=async(H,C,F)=>{if(b)return;b=!0,g&&(k.removeChannel(g),g=null);const j=document.getElementById("mm-status");j&&(j.textContent="Adversaire trouvé !"),await new Promise(W=>setTimeout(W,600)),e.isConnected&&wo(e,t,H,F,a,c)},{data:p,error:I}=await k.rpc("try_matchmake",{p_user_id:n.profile.id,p_deck_id:i});if(I||!(p!=null&&p.success)){m("Erreur de matchmaking","error"),We(e),o("home");return}if(p.matched){r(p.match_id,p.opponent_id,!1);return}const L=document.getElementById("mm-status");L&&(L.textContent="En attente d'un autre joueur..."),g=k.channel("matchmaking-"+n.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${n.profile.id}`},H=>{const C=H.new;C.status==="matched"&&C.match_id&&r(C.match_id,C.matched_with,!0)}).subscribe()}async function Pn(e,t,i){const{state:s,navigate:l,toast:d}=t;try{(k.getChannels?k.getChannels():[]).forEach(n=>{const o=n.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&k.removeChannel(n)})}catch{}const{data:a}=await k.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!a){d("Match introuvable","error"),l("home");return}if(a.status==="finished"){d("Ce match est terminé","info"),l("home");return}const c=a.home_id===s.profile.id;wo(e,t,i,c,[],[])}async function wo(e,t,i,s,l=[],d=[]){const{state:a,navigate:c,toast:f}=t,n=s?"p1":"p2",o=s?"p2":"p1",m=(l||[]).map(M=>M.id),b=(l||[]).map(M=>({id:M.id,gc_type:M.gc_type,_gcDef:M._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await k.from("matches").select("*").eq("id",i).single();if(!g){f("Match introuvable","error"),c("home");return}async function A(){const[{data:M},{data:D},{data:w},{data:E}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),u=T=>{const S=Number(T.evolution_bonus)||0;return{cardId:T.card_id,position:T.position,id:T.id,firstname:T.firstname,name:T.surname_encoded,country_code:T.country_code,club_id:T.club_id,job:T.job,job2:T.job2,note_g:(Number(T.note_g)||0)+(T.job==="GK"||T.job2==="GK"&&Number(T.note_g)>0?S:0),note_d:(Number(T.note_d)||0)+(T.job==="DEF"||T.job2==="DEF"&&Number(T.note_d)>0?S:0),note_m:(Number(T.note_m)||0)+(T.job==="MIL"||T.job2==="MIL"&&Number(T.note_m)>0?S:0),note_a:(Number(T.note_a)||0)+(T.job==="ATT"||T.job2==="ATT"&&Number(T.note_a)>0?S:0),evolution_bonus:S,rarity:T.rarity,skin:T.skin,hair:T.hair,hair_length:T.hair_length,clubName:T.club_encoded_name||null,clubLogo:T.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},x=((M==null?void 0:M.starters)||[]).map(T=>u(T)),y=((D==null?void 0:D.starters)||[]).map(T=>u(T)),h=(M==null?void 0:M.formation)||"4-4-2",v=(D==null?void 0:D.formation)||"4-4-2";let _=yt(x,h),z=yt(y,v);const $=((M==null?void 0:M.subs)||[]).map(T=>u(T));return stadiumDef&&s&&(_=Ht(_,stadiumDef),oi($,stadiumDef)),{p1Team:_,p2Team:z,p1Subs:$,p2Subs:((D==null?void 0:D.subs)||[]).map(T=>u(T)),p1Formation:h,p2Formation:v,p1Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 1",p2Name:(E==null?void 0:E.club_name)||(E==null?void 0:E.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?m:[],gc_p2:s?[]:m,gcCardsFull_p1:s?b:[],gcCardsFull_p2:s?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!r)if(s){r=await A();const{data:M}=await k.from("matches").select("game_state").eq("id",i).single();!(M!=null&&M.game_state)||!Object.keys(M.game_state).length?await k.from("matches").update({game_state:r,turn_user_id:g.home_id}).eq("id",i):r=M.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let M=0;M<30&&!r;M++){await new Promise(w=>setTimeout(w,400));const{data:D}=await k.from("matches").select("game_state").eq("id",i).single();D!=null&&D.game_state&&Object.keys(D.game_state).length&&(r=D.game_state)}if(!r){f("Erreur de synchronisation","error"),c("home");return}r.gc_p2=m,r.gcCardsFull_p2=b,await k.from("matches").update({game_state:r}).eq("id",i)}let p=!1,I=null,L=!1;const B=new Set,H=new Set;function C(M){var _,z;try{k.removeChannel(F)}catch{}const D=r[n+"Score"]||0,w=r[o+"Score"]||0;let E,u;M.winner_id?(E=M.winner_id===a.profile.id,u=!1):M.forfeit?(E=D>w,u=!1):(u=D===w,E=D>w),(_=document.getElementById("pvp-end-overlay"))==null||_.remove();const x=document.createElement("div");x.id="pvp-end-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const y=u?"🤝":E?"🏆":"😞",h=u?"MATCH NUL":E?"VICTOIRE !":"DÉFAITE",v=u?"#fff":E?"#FFD700":"#ff6b6b";x.innerHTML=`
      <div style="font-size:64px">${y}</div>
      <div style="font-size:26px;font-weight:900;color:${v}">${h}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${D} – ${w} ${r[o+"Name"]}</div>
      ${M.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${E?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(x),(z=x.querySelector("#pvp-end-home"))==null||z.addEventListener("click",()=>{x.remove(),We(e),c("home")})}const F=k.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},M=>{const D=M.new;try{if(D.status==="finished"||D.forfeit){if(p)return;p=!0,I&&(clearInterval(I),I=null),D.game_state&&(r=D.game_state),C(D);return}if(D.game_state){const w=r;r=D.game_state;const E=r._lastGC;if(E&&E.seq&&!H.has(E.seq)&&(H.add(E.seq),E.by!==n)){we(E.type,E.by,()=>P());return}const u=w[n+"Score"]||0,x=w[o+"Score"]||0,y=r[n+"Score"]||0,h=r[o+"Score"]||0,v=y>u,_=h>x;if((v||_)&&!B.has(r.round)){B.add(r.round);const z=[...r.log||[]].reverse().find(T=>T.isGoal),$=((z==null?void 0:z.homePlayers)||[]).map(T=>({name:T.name,note:T.note,portrait:T.portrait,job:T.job}));Se($,y,h,v,()=>P());return}P()}}catch(w){console.error("[PvP] crash:",w)}}).subscribe();async function j(M){Object.assign(r,M),r.lastActionAt=new Date().toISOString();const{error:D}=await k.from("matches").update({game_state:r}).eq("id",i);D&&f("Erreur de synchronisation","error");try{P()}catch(w){console.error("[PvP] renderPvpScreen crash:",w)}}async function W(){if(p)return;p=!0,I&&(clearInterval(I),I=null);const M=s?g.away_id:g.home_id,D=s?"p2":"p1",w=s?"p1":"p2",E={...r,[D+"Score"]:3,[w+"Score"]:0,phase:"finished"};try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:M,home_score:E.p1Score||0,away_score:E.p2Score||0,game_state:E}).eq("id",i)}catch{}try{k.removeChannel(F)}catch{}setTimeout(()=>{We(e),c("home")},800)}const de={BOOST_STAT:({value:M=1,count:D=1,roles:w=[]},E,u)=>{const x=E[n+"Team"],y=Object.entries(x).filter(([h])=>!w.length||w.includes(h)).flatMap(([h,v])=>v.filter(_=>!_.used).map(_=>({..._,_line:h})));if(!y.length){E.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),u(E);return}re(y,D,`Choisir ${D} joueur(s) à booster (+${M})`,h=>{h.forEach(v=>{const _=(x[v._line]||[]).find(z=>z.cardId===v.cardId);_&&(_.boost=(_.boost||0)+M,E.log.push({text:`⚡ +${M} sur ${_.name}`,type:"info"}))}),E[n+"Team"]=x,u(E)})},DEBUFF_STAT:({value:M=1,count:D=1,roles:w=[],target:E="ai"},u,x)=>{const y=E==="home"?n:o,h=u[y+"Team"],v=E==="home"?"allié":"adverse",_=Object.entries(h).filter(([z])=>!w.length||w.includes(z)).flatMap(([z,$])=>$.map(T=>({...T,_line:z})));if(!_.length){u.log.push({text:`🎯 Aucun joueur ${v}`,type:"info"}),x(u);return}re(_,D,`Choisir ${D} joueur(s) ${v}(s) (-${M})`,z=>{z.forEach($=>{const T=(h[$._line]||[]).find(S=>S.cardId===$.cardId);T&&(T.boost=(T.boost||0)-M,u.log.push({text:`🎯 -${M} sur ${T.name}`,type:"info"}))}),u[y+"Team"]=h,x(u)})},GRAY_PLAYER:({count:M=1,roles:D=[],target:w="ai"},E,u)=>{const x=w==="home"?n:o,y=E[x+"Team"],h=w==="home"?"allié":"adverse",v=Object.entries(y).filter(([_])=>!D.length||D.includes(_)).flatMap(([_,z])=>z.filter($=>!$.used).map($=>({...$,_line:_})));if(!v.length){E.log.push({text:`❌ Aucun joueur ${h}`,type:"info"}),u(E);return}re(v,M,`Choisir ${M} joueur(s) ${h}(s) à exclure`,_=>{const z="usedCardIds_"+x,$=new Set(E[z]||[]);_.forEach(T=>{const S=(y[T._line]||[]).find(q=>q.cardId===T.cardId);S&&(S.used=!0,$.add(T.cardId),E.log.push({text:`❌ ${S.name} exclu !`,type:"info"}))}),E[z]=[...$],E[x+"Team"]=y,u(E)})},REVIVE_PLAYER:({count:M=1,roles:D=[]},w,E)=>{const u=w[n+"Team"],x=Object.entries(u).filter(([y])=>!D.length||D.includes(y)).flatMap(([y,h])=>h.filter(v=>v.used).map(v=>({...v,_line:y})));if(!x.length){w.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),E(w);return}re(x,M,`Choisir ${M} joueur(s) à ressusciter`,y=>{y.forEach(h=>{const v=(u[h._line]||[]).find(_=>_.cardId===h.cardId);v&&(v.used=!1,w.log.push({text:`💫 ${v.name} ressuscité !`,type:"info"}))}),w[n+"Team"]=u,E(w)})},REMOVE_GOAL:({},M,D)=>{const w=o+"Score";M[w]>0?(M[w]--,M.log.push({text:"🚫 Dernier but annulé !",type:"info"})):M.log.push({text:"🚫 Aucun but à annuler",type:"info"}),D(M)},ADD_GOAL_DRAW:({},M,D)=>{M[n+"Score"]===M[o+"Score"]?(M[n+"Score"]++,M.log.push({text:"🎯 But bonus !",type:"info"})):M.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),D(M)},ADD_SUB:({value:M=1},D,w)=>{D.maxSubs=(D.maxSubs||3)+M,D.log.push({text:`🔄 +${M} remplacement(s)`,type:"info"}),w(D)},CUSTOM:({},M,D)=>D(M)};function re(M,D,w,E){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let x=[];function y(){var v,_;const h=M.map(z=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",T=je(z,z._line)+(z.boost||0),q=x.find(R=>R.cardId===z.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=z.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${q};background:${$};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${T}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${z._line}</div>
        </div>`}).join("");u.innerHTML=`
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
        </div>`,(v=u.querySelector("#pp-close"))==null||v.addEventListener("click",()=>u.remove()),u.querySelectorAll(".pp-item").forEach(z=>{z.addEventListener("click",()=>{const $=z.dataset.cid,T=M.find(q=>q.cardId===$),S=x.findIndex(q=>q.cardId===$);T&&(S>-1?x.splice(S,1):x.length<D&&x.push(T),y())})}),(_=u.querySelector("#pp-confirm"))==null||_.addEventListener("click",()=>{u.remove(),E(x)})}y(),document.body.appendChild(u)}async function N(M,D){const E=(r["gcCardsFull_"+n]||[]).find(h=>h.id===M),u=(E==null?void 0:E._gcDef)||(r.gcDefs||[]).find(h=>{var v;return h.name===D||((v=h.name)==null?void 0:v.toLowerCase().trim())===(D==null?void 0:D.toLowerCase().trim())}),x=[...r["usedGc_"+n]||[],M],y={type:D,by:n,seq:(r._gcAnimSeq||0)+1};H.add(y.seq),we(D,n,async()=>{if(u!=null&&u.effect_type&&u.effect_type!=="CUSTOM"){const v=de[u.effect_type];if(v){const _={...r};v(u.effect_params||{},_,async z=>{z["usedGc_"+n]=x,z._lastGC=y,z._gcAnimSeq=y.seq,await j(z)});return}}const h={...r};switch(D){case"Remplacement+":h.maxSubs=(h.maxSubs||3)+1,h.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const v=o+"Score";h[v]>0&&(h[v]--,h.log.push({text:"🚫 But annulé",type:"info"}));break}}h["usedGc_"+n]=x,h._lastGC=y,h._gcAnimSeq=y.seq,await j(h)})}function X(M,D){const w="usedCardIds_"+M,E=new Set(r[w]||[]);D.forEach(u=>E.add(u)),r[w]=[...E]}function U(){for(const M of["p1","p2"]){const D=new Set(r["usedCardIds_"+M]||[]),w=r[M+"Team"];if(w)for(const E of["GK","DEF","MIL","ATT"])(w[E]||[]).forEach(u=>{u.used=D.has(u.cardId)})}}function P(){var Ue,Je,Ze,Qe,nt,gt;if(r.phase==="reveal")return ne();if(r.phase==="midfield")return ye();if(r.phase==="finished")return ze();const M=r[n+"Team"],D=r[o+"Team"];U();const w=r[n+"Score"],E=r[o+"Score"],u=r[n+"Name"],x=r[o+"Name"],y=r.phase===n+"-attack",h=r.phase===n+"-defense",v=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],_=v.map(le=>le.cardId),z=window.innerWidth>=700,$=r[n+"Subs"]||[],T=r["usedSubIds_"+n]||[],S=$.filter(le=>!T.includes(le.cardId)),q=r["gcCardsFull_"+n]||[],G=r["usedGc_"+n]||[],R=q.filter(le=>!G.includes(le.id)),O=r.boostOwner===n&&!r.boostUsed,Q=!["GK","DEF","MIL","ATT"].some(le=>(D[le]||[]).some(Ee=>!Ee.used)),V=[...M.MIL||[],...M.ATT||[]].filter(le=>!le.used),ie=y&&Q&&V.length===0?[...M.GK||[],...M.DEF||[]].filter(le=>!le.used).map(le=>le.cardId):[];function ae(le,Ee,te){var pt,ht;const ue=le._gcDef,ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ue==null?void 0:ue.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ce={purple:"#b06ce0",light_blue:"#00d4ef"}[ue==null?void 0:ue.color]||"#b06ce0",Be=(ue==null?void 0:ue.name)||le.gc_type,Te=(ue==null?void 0:ue.effect)||((pt=Ve[le.gc_type])==null?void 0:pt.desc)||"",tt=ue!=null&&ue.image_url?`/icons/${ue.image_url}`:null,it=((ht=Ve[le.gc_type])==null?void 0:ht.icon)||"⚡",rt=Math.round(te*.22),st=Math.round(te*.22),ct=te-rt-st,$t=Be.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${le.id}" data-gc-type="${le.gc_type}"
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
        ${ft(M,r[n+"Formation"],Fe,_,300,300,ie)}
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
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${w} – ${E}</span>
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
              ${ft(M,r[n+"Formation"],Fe,_,300,300,ie)}
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
      </div>`;function He(){const le=e.querySelector(".match-screen");if(!le)return;const Ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);le.style.height=Ee+"px",le.style.minHeight=Ee+"px",le.style.maxHeight=Ee+"px",le.style.overflow="hidden";const te=e.querySelector("#mobile-action-bar"),ue=e.querySelector("#mobile-play-area");te&&ue&&(ue.style.paddingBottom=te.offsetHeight+"px")}if(He(),setTimeout(He,120),setTimeout(He,400),L||(L=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",He),window.visualViewport.addEventListener("scroll",He)),window.addEventListener("resize",He)),function(){const Ee=e.querySelector(".terrain-wrapper svg");Ee&&(Ee.removeAttribute("width"),Ee.removeAttribute("height"),Ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Ee.setAttribute("viewBox","-26 -26 352 352"),Ee.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(le=>{le.addEventListener("click",()=>{if(!y&&!h)return;const Ee=le.dataset.cardId,te=le.dataset.role,ue=(M[te]||[]).find(Te=>Te.cardId===Ee);if(!ue||ue.used)return;const ee=ie.includes(Ee);if(y&&!["MIL","ATT"].includes(te)&&!ee)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const ce=r["selected_"+n],Be=ce.findIndex(Te=>Te.cardId===Ee);Be>-1?ce.splice(Be,1):ce.length<3&&ce.push({...ue,_role:te}),P()})}),e.querySelectorAll(".match-used-hit").forEach(le=>{le.addEventListener("click",()=>Ae(le.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(le=>{le.addEventListener("click",()=>Ae())}),(Ue=e.querySelector("#pvp-sub-open"))==null||Ue.addEventListener("click",()=>Ae()),e.querySelectorAll(".pvp-gc-mini").forEach(le=>{le.addEventListener("click",()=>ve(le.dataset.gcId,le.dataset.gcType))}),(Je=e.querySelector("#pvp-boost-card"))==null||Je.addEventListener("click",()=>_e()),(Ze=e.querySelector("#pvp-action"))==null||Ze.addEventListener("click",le=>{y?le.currentTarget.dataset.pass==="1"||!he(n)?oe():ge():h&&Y()}),(Qe=e.querySelector("#pvp-quit"))==null||Qe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&W()}),(nt=e.querySelector("#pvp-view-opp"))==null||nt.addEventListener("click",()=>xe()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>J()),I&&(clearInterval(I),I=null),(y||h)&&!p){let le=30,Ee=!1;const te=()=>document.getElementById("pvp-timer"),ue=()=>{te()&&(te().textContent=le+"s",te().style.color=Ee?"#ff4444":"#fff")};ue(),I=setInterval(()=>{le--,le<0?Ee?(clearInterval(I),I=null,y&&!he(n)?oe():W()):(Ee=!0,le=15,ue()):ue()},1e3)}}function ne(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await j({phase:"midfield"})},5e3)}let pe=!1;function ye(){if(pe)return;const M=r[n+"Team"].MIL||[],D=r[o+"Team"].MIL||[];function w(R){return R.reduce((O,Q)=>O+je(Q,"MIL"),0)}function E(R){let O=0;for(let Q=0;Q<R.length-1;Q++){const V=at(R[Q],R[Q+1]);V==="#00ff88"?O+=2:V==="#FFD700"&&(O+=1)}return O}const u=w(M)+E(M),x=w(D)+E(D),y=u>=x;function h(R,O,Q){return`<div id="duel-row-${Q}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${O}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${R.map((V,ie)=>{const ae=ie<R.length-1?at(V,R[ie+1]):null,fe=!ae||ae==="#ff3333"||ae==="#cc2222",me=ae==="#00ff88"?"+2":ae==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Q}" data-idx="${ie}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...V,note:je(V,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ie<R.length-1?`<div class="duel-link duel-link-${Q}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${fe?"rgba(255,255,255,0.12)":ae};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${fe?"none":`0 0 8px ${ae}`}">
              ${me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ae}">${me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Q}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${w(R)} + ${E(R)} liens = <b style="color:#fff">${w(R)+E(R)}</b>
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
      ${h(M,r[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${h(D,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const v=(R,O)=>e.querySelectorAll(R).forEach((Q,V)=>{setTimeout(()=>{Q.style.opacity="1",Q.style.transform="translateY(0) scale(1)"},O+V*90)});v(".duel-card-me",150),v(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((R,O)=>setTimeout(()=>{R.style.opacity="1"},O*70)),900),setTimeout(()=>{const R=e.querySelector("#pvp-vs");R&&(R.style.opacity="1",R.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(O=>O.style.opacity="1")},1250);function _(R,O,Q){const V=document.getElementById(R);if(!V)return;const ie=performance.now(),ae=fe=>{const me=Math.min(1,(fe-ie)/Q);V.textContent=Math.round(O*(1-Math.pow(1-me,3))),me<1?requestAnimationFrame(ae):V.textContent=O};requestAnimationFrame(ae)}setTimeout(()=>{_("pvp-score-me",u,800),_("pvp-score-opp",x,800)},1500);const z=r.p1Team.MIL||[],$=r.p2Team.MIL||[],T=w(z)+E(z),S=w($)+E($),q=T>=S?"p1":"p2";let G=r.boostValue;G==null&&(G=ni(),r.boostValue=G,r.boostOwner=q,r.boostUsed=!1),pe=!0,setTimeout(()=>{const R=e.querySelector("#duel-row-"+(y?"me":"opp")),O=e.querySelector("#duel-row-"+(y?"opp":"me")),Q=document.getElementById("pvp-score-me"),V=document.getElementById("pvp-score-opp"),ie=y?Q:V,ae=y?V:Q;ie&&(ie.style.fontSize="80px",ie.style.color=y?"#FFD700":"#ff6b6b",ie.style.animation="duelPulse .5s ease"+(y?",duelGlow 1.5s ease infinite .5s":"")),ae&&(ae.style.opacity="0.25"),setTimeout(()=>{R&&(R.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",R.style.zIndex="5"),setTimeout(()=>{const fe=document.getElementById("duel-shock");fe&&(fe.style.animation="shockwave .5s ease-out forwards"),O&&(O.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ke;const fe=document.getElementById("pvp-duel-finale");if(!fe)return;const me=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",$e=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;fe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(y?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+me+$e,fe.style.transition="opacity .45s ease",fe.style.opacity="1",fe.style.pointerEvents="auto",(ke=document.getElementById("pvp-start-match"))==null||ke.addEventListener("click",async()=>{const qe=q;await j({phase:qe+"-attack",attacker:qe,round:1,boostValue:G,boostUsed:!1,boostOwner:qe})})},600)},700)},2800)}function Se(M,D,w,E,u){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const y=Array.from({length:10},(z,$)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${$%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][$%8]}</div>`).join(""),h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};x.innerHTML=`
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
      ${M!=null&&M.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${M.map(z=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${h[z.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${z.portrait?`<img src="${z.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(z.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const _=()=>{v||(v=!0,x.remove(),setTimeout(()=>u(),50))};x.addEventListener("click",_),setTimeout(_,3500)}function we(M,D,w){var G,R;const E=(r.gcDefs||[]).find(O=>{var Q;return O.name===M||((Q=O.name)==null?void 0:Q.toLowerCase().trim())===(M==null?void 0:M.toLowerCase().trim())}),u={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[E==null?void 0:E.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[E==null?void 0:E.color]||"#b06ce0",y=(E==null?void 0:E.name)||M,h=(E==null?void 0:E.effect)||((G=Ve[M])==null?void 0:G.desc)||"",v=E!=null&&E.image_url?`/icons/${E.image_url}`:null,_=((R=Ve[M])==null?void 0:R.icon)||"⚡",$=D===n?"Vous":r[D+"Name"]||"Adversaire",T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",T.innerHTML=`
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(T);let S=!1;const q=()=>{S||(S=!0,T.remove(),setTimeout(()=>w&&w(),50))};T.addEventListener("click",q),setTimeout(q,3e3)}function ve(M,D){var T,S,q,G;const E=(r["gcCardsFull_"+n]||[]).find(R=>R.id===M),u=E==null?void 0:E._gcDef,x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[u==null?void 0:u.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",y={purple:"#b06ce0",light_blue:"#00d4ef"}[u==null?void 0:u.color]||"#b06ce0",h=(u==null?void 0:u.name)||D,v=(u==null?void 0:u.effect)||((T=Ve[D])==null?void 0:T.desc)||"Carte spéciale.",_=u!=null&&u.image_url?`/icons/${u.image_url}`:null,z=((S=Ve[D])==null?void 0:S.icon)||"⚡",$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",$.innerHTML=`
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
      </div>`,document.body.appendChild($),(q=$.querySelector("#pvp-gc-back"))==null||q.addEventListener("click",()=>$.remove()),(G=$.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{$.remove(),N(M,D)})}function _e(){var E;const M=r[n+"Team"],D=Object.entries(M).flatMap(([u,x])=>(x||[]).filter(y=>!y.used).map(y=>({...y,_line:u})));if(!D.length)return;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",w.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${D.map(u=>{const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[u._line]||"#555",y=je(u,u._line)+(u.boost||0);return`<div class="bp-item" data-cid="${u.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${x};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${y}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(w),(E=w.querySelector("#bp-close"))==null||E.addEventListener("click",()=>w.remove()),w.querySelectorAll(".bp-item").forEach(u=>{u.addEventListener("click",async()=>{const x=u.dataset.cid,y=D.find(v=>v.cardId===x);if(!y)return;const h=(M[y._line]||[]).find(v=>v.cardId===x);h&&(h.boost=(h.boost||0)+r.boostValue),w.remove(),await j({[n+"Team"]:M,boostUsed:!0})})})}function Ae(M=null){var S,q;if(!(r.phase===n+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const w=r[n+"Team"],E=r["usedSubIds_"+n]||[],u=r.maxSubs||3;if(E.length>=u){f(`Maximum ${u} remplacements atteint`,"warning");return}const x=Object.entries(w).flatMap(([G,R])=>(R||[]).filter(O=>O.used).map(O=>({...O,_line:G}))),y=(r[n+"Subs"]||[]).filter(G=>!E.includes(G.cardId));if(!x.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!y.length){f("Aucun remplaçant disponible","warning");return}let h=Math.max(0,x.findIndex(G=>G.cardId===M));const v=((S=x[h])==null?void 0:S._line)||((q=x[h])==null?void 0:q.job);let _=Math.max(0,y.findIndex(G=>G.job===v)),z=!1;const $=document.createElement("div");$.id="pvp-sub-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function T(){var ae,fe,me,$e,ke,qe;const G=x[h],R=y[_],O=Math.min(130,Math.round((window.innerWidth-90)/2)),Q=Math.round(O*1.35),V=Ce=>`background:rgba(255,255,255,0.12);border:none;color:${Ce?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ce?"default":"pointer"};flex-shrink:0`;$.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${E.length}/${u})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${V(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${R?Ye({...R,used:!1,boost:0},O,Q):"<div>—</div>"}</div>
          <button id="pin-down" style="${V(_>=y.length-1)}" ${_>=y.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${y.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${V(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${G?Ye({...G,used:!1,boost:0},O,Q):"<div>—</div>"}</div>
          <button id="pout-down" style="${V(h>=x.length-1)}" ${h>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${x.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ae=$.querySelector("#psub-close"))==null||ae.addEventListener("click",()=>$.remove()),(fe=$.querySelector("#pout-up"))==null||fe.addEventListener("click",()=>{h>0&&(h--,T())}),(me=$.querySelector("#pout-down"))==null||me.addEventListener("click",()=>{h<x.length-1&&(h++,T())}),($e=$.querySelector("#pin-up"))==null||$e.addEventListener("click",()=>{_>0&&(_--,T())}),(ke=$.querySelector("#pin-down"))==null||ke.addEventListener("click",()=>{_<y.length-1&&(_++,T())});const ie=(Ce,Re,Fe,Oe)=>{const De=$.querySelector("#"+Ce);if(!De)return;let Ke=0;De.addEventListener("touchstart",Ne=>{Ke=Ne.touches[0].clientY},{passive:!0}),De.addEventListener("touchend",Ne=>{const He=Ne.changedTouches[0].clientY-Ke;if(Math.abs(He)<30)return;const Ue=Re();He<0&&Ue<Oe-1?(Fe(Ue+1),T()):He>0&&Ue>0&&(Fe(Ue-1),T())},{passive:!0})};ie("pin-panel",()=>_,Ce=>_=Ce,y.length),ie("pout-panel",()=>h,Ce=>h=Ce,x.length),(qe=$.querySelector("#psub-confirm"))==null||qe.addEventListener("click",async Ce=>{if(Ce.preventDefault(),Ce.stopPropagation(),z)return;z=!0;const Re=x[h],Fe=y[_];if(!Re||!Fe)return;const Oe=Re._line,De=(w[Oe]||[]).findIndex(He=>He.cardId===Re.cardId);if(De===-1){f("Erreur : joueur introuvable","error"),$.remove();return}const Ke={...Fe,_line:Oe,position:Re.position,used:!1,boost:0};w[Oe].splice(De,1,Ke);const Ne=[...E,Fe.cardId];$.remove(),Ie(Re,Fe,async()=>{await j({[n+"Team"]:w,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Ne})})})}document.body.appendChild($),T()}function Ie(M,D,w){const E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const x=(v,_,z)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${_};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${z}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${E[v.job]||"#555"};border:3px solid ${_};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(v)?`<img src="${Pe(v)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(v.name||"").slice(0,12)}</div>
    </div>`;u.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${x(D,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${x(M,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(u);let y=!1;const h=()=>{y||(y=!0,u.remove(),setTimeout(()=>w(),50))};u.addEventListener("click",h),setTimeout(h,2200)}function xe(){var D;const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",M.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(M),(D=M.querySelector("#pvp-opp-close"))==null||D.addEventListener("click",()=>M.remove())}function J(){var w;const M=r.log||[],D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",D.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${M.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...M].reverse().map(E=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${E.type==="goal"?"#FFD700":E.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${E.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(D),(w=D.querySelector("#pvp-hist-close"))==null||w.addEventListener("click",()=>D.remove())}async function oe(){if(r.phase!==n+"-attack")return;const M=n==="p1"?"p2":"p1",D=(r.round||0)+1,w=[...r.log||[]];w.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const E=Le(r),u=he(M),x=E||!u?"finished":M+"-attack";await j({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:x,attacker:M,round:D,log:w}),x==="finished"&&await be(r)}async function ge(){const M=r[n+"Team"],D=!["GK","DEF","MIL","ATT"].some(x=>(r[o+"Team"][x]||[]).some(y=>!y.used)),w=(r["selected_"+n]||[]).map(x=>{const y=(M[x._role]||[]).find(T=>T.cardId===x.cardId)||x,h=D&&["GK","DEF"].includes(x._role),v=M[x._role]||[],_=v.findIndex(T=>T.cardId===x.cardId),z=lt(v.length),$=_>=0?z[_]:y._col??1;return{...y,_line:x._role,_col:$,...h?{note_a:Math.max(1,Number(y.note_a)||0)}:{}}});if(!w.length)return;const E=Nt(w,r.modifiers[n]||{});X(n,w.map(x=>x.cardId)),w.forEach(x=>{const y=(M[x._role]||[]).find(h=>h.cardId===x.cardId);y&&(y.used=!0)}),r["selected_"+n]=[],P();const u=[...r.log||[]];if(D){const x=(r[n+"Score"]||0)+1,y=w.map($=>({name:$.name,note:je($,$._line||"ATT"),portrait:Pe($),job:$.job}));u.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:y,homeTotal:E.total,aiTotal:0});const h=(r.round||0)+1,v=n==="p1"?"p2":"p1",_={...r,[n+"Team"]:M,[n+"Score"]:x},z=Le(_);B.add(h),Se(y,x,r[o+"Score"]||0,!0,async()=>{await j({[n+"Team"]:M,[n+"Score"]:x,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:z?"finished":v+"-attack",attacker:v,round:h,log:u}),z&&await be({...r,[n+"Score"]:x})});return}u.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${E.total})`}),await j({[n+"Team"]:M,[o+"Team"]:r[o+"Team"],pendingAttack:{...E,players:w,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:u})}async function Y(){const M=r[n+"Team"],D=(r["selected_"+n]||[]).map(G=>{const R=(M[G._role]||[]).find(ae=>ae.cardId===G.cardId)||G,O=M[G._role]||[],Q=O.findIndex(ae=>ae.cardId===G.cardId),V=lt(O.length),ie=Q>=0?V[Q]:R._col??1;return{...R,_line:G._role,_col:ie}}),w=Rt(D,r.modifiers[n]||{});X(n,D.map(G=>G.cardId)),D.forEach(G=>{const R=(M[G._role]||[]).find(O=>O.cardId===G.cardId);R&&(R.used=!0)}),r["selected_"+n]=[],P();const E=Ot(r.pendingAttack.total,w.total,r.modifiers[n]||{}),u=r.pendingAttack.side,x=E==="attack"||(E==null?void 0:E.goal),y=u==="p1"?"p2":"p1",h=(r.round||0)+1,v=(r.pendingAttack.players||[]).map(G=>({name:G.name,note:je(G,G._line||"ATT"),portrait:Pe(G),job:G.job})),_=[...r.log||[]];_.push({type:"duel",isGoal:x,homeScored:x&&u===n,text:x?`⚽ BUT de ${r[u+"Name"]} ! (${r.pendingAttack.total} vs ${w.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${w.total})`,homePlayers:v,aiPlayers:D.map(G=>({name:G.name,note:je(G,G._line||"DEF"),portrait:Pe(G),job:G.job})),homeTotal:r.pendingAttack.total,aiTotal:w.total});const z=x?(r[u+"Score"]||0)+1:r[u+"Score"]||0,$={...r,[n+"Team"]:M,[u+"Score"]:z},T=Le($),S=T?"finished":y+"-attack",q=async()=>{await j({[n+"Team"]:M,[o+"Team"]:r[o+"Team"],[u+"Score"]:z,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:S,attacker:y,round:h,log:_}),(S==="finished"||T)&&await be({...r,[u+"Score"]:z})};if(x){const G=u===n,R=G?z:r[n+"Score"]||0,O=G?r[o+"Score"]||0:z;B.add(h),Se(v,R,O,G,q)}else await q()}function Z(M){return["MIL","ATT"].some(D=>(M[D]||[]).some(w=>!w.used))}function K(M){return["GK","DEF","MIL","ATT"].some(D=>(M[D]||[]).some(w=>!w.used))}function se(M){return K(M)&&!Z(M)}function he(M){const D=r[M+"Team"],w=r[(M==="p1"?"p2":"p1")+"Team"];return!!(Z(D)||!K(w)&&se(D))}function Le(M){const D=["MIL","ATT"].some(_=>(M.p1Team[_]||[]).some(z=>!z.used)),w=["MIL","ATT"].some(_=>(M.p2Team[_]||[]).some(z=>!z.used)),E=K(M.p1Team),u=K(M.p2Team);return!D&&!(!u&&E)&&(!w&&!(!E&&u))}function Me(M){const D=M.p1Score||0,w=M.p2Score||0;return D===w?null:D>w?g.home_id:g.away_id}async function be(M){try{const D=Me(M),w=D?g.home_id===D?g.away_id:g.home_id:null;await k.from("matches").update({status:"finished",winner_id:D,home_score:M.p1Score||0,away_score:M.p2Score||0}).eq("id",i),D&&w&&updateEvolutiveCards(D,w).catch(()=>{})}catch(D){console.error("[PvP] finishMatch:",D)}}function ze(){var u;const M=r[n+"Score"],D=r[o+"Score"],w=M>D,E=M===D;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${w?"🏆":E?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${w?"Victoire !":E?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${M} - ${D}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(u=document.getElementById("pvp-home"))==null||u.addEventListener("click",()=>{try{k.removeChannel(F)}catch{}We(e),c("home")})}P()}const Nn=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:vo,resumePvpMatch:Pn},Symbol.toStringTag,{value:"Module"}));async function Rn(e,t,i,s){var l,d;try{const a=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(k.getChannels?k.getChannels():[]).forEach(f=>{const n=f.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&k.removeChannel(f)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}a&&(await k.rpc("cancel_matchmaking",{p_user_id:a}).catch(()=>{}),await k.from("matchmaking_queue").delete().eq("user_id",a).then(()=>{},()=>{}))}catch{}await ai(e,t,"random",({deckId:a,formation:c,starters:f,subsRaw:n,gcCardsEnriched:o,gcDefs:m,stadiumDef:b})=>{const g=A=>On(e,t,a,c,f,n,A,m||[],i,s);if(!o.length){g([]);return}ri(e,o,g)})}async function On(e,t,i,s,l,d,a=[],c=[],f,n){var de;const{state:o,navigate:m,toast:b}=t,g=o.profile.id;let A=!1,r=null;et(e);try{await k.rpc("cancel_matchmaking",{p_user_id:g})}catch{}try{await k.from("matchmaking_queue").delete().eq("user_id",g)}catch{}const p=(re,N,X,U)=>{var P;e.innerHTML=`
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
        
        ${!N&&re?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(P=document.getElementById("lobby-cancel"))==null||P.addEventListener("click",async()=>{A=!0,r&&(k.removeChannel(r),r=null),X&&await k.from("friend_match_invites").update({status:"declined"}).eq("id",X),We(e),m("home")})},I=async(re,N)=>{A=!0,r&&(k.removeChannel(r),r=null),await new Promise(X=>setTimeout(X,600)),e.isConnected&&Hn(e,t,re,N,a,c)},{data:L}=await k.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${g},invitee_id.eq.${f}),and(inviter_id.eq.${f},invitee_id.eq.${g})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let B,H;if(L&&L.inviter_id===f)H=!1,B=L.id,await k.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",B);else{H=!0;const{data:re,error:N}=await k.from("friend_match_invites").insert({inviter_id:g,invitee_id:f,friend_id:f,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(N||!re){b("Erreur création invitation","error"),We(e),m("home");return}B=re.id}if(p(!0,!H,B),!H){const re={home_id:f,away_id:g,home_deck_id:L.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},N=await k.from("matches").insert(re).select().single(),X=N.data;if(!X){b("Erreur création match: "+(((de=N.error)==null?void 0:de.message)||""),"error"),We(e),m("home");return}await k.from("friend_match_invites").update({match_id:X.id,status:"matched"}).eq("id",B),I(X.id,!1);return}let C=!1;const F=re=>{A||C||(re.status==="matched"&&re.match_id?(C=!0,clearInterval(j),clearInterval(W),I(re.match_id,!0)):re.status==="declined"?(clearInterval(j),clearInterval(W),b(`${n} a décliné l'invitation`,"warning"),We(e),m("home")):re.invitee_ready&&p(!0,!0,B))},j=setInterval(()=>{if(A){clearInterval(j);return}k.from("matchmaking_queue").delete().eq("user_id",g).then(()=>{},()=>{})},3e3),W=setInterval(async()=>{if(A||C){clearInterval(W);return}const{data:re}=await k.from("friend_match_invites").select("*").eq("id",B).maybeSingle();re&&F(re)},1200);r=k.channel("friend-invite-"+B).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${B}`},re=>F(re.new)).subscribe()}async function Hn(e,t,i,s,l=[],d=[]){const{state:a,navigate:c,toast:f}=t,n=s?"p1":"p2",o=s?"p2":"p1",m=(l||[]).map(w=>w.id),b=(l||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await k.from("matches").select("*").eq("id",i).single();if(!g){f("Match introuvable","error"),c("home");return}async function A(){const[{data:w},{data:E},{data:u},{data:x}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),y=$=>{const T=Number($.evolution_bonus)||0;return{cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:(Number($.note_g)||0)+($.job==="GK"||$.job2==="GK"&&Number($.note_g)>0?T:0),note_d:(Number($.note_d)||0)+($.job==="DEF"||$.job2==="DEF"&&Number($.note_d)>0?T:0),note_m:(Number($.note_m)||0)+($.job==="MIL"||$.job2==="MIL"&&Number($.note_m)>0?T:0),note_a:(Number($.note_a)||0)+($.job==="ATT"||$.job2==="ATT"&&Number($.note_a)>0?T:0),evolution_bonus:T,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},h=((w==null?void 0:w.starters)||[]).map($=>y($)),v=((E==null?void 0:E.starters)||[]).map($=>y($)),_=(w==null?void 0:w.formation)||"4-4-2",z=(E==null?void 0:E.formation)||"4-4-2";return{p1Team:(()=>{const $=yt(h,_);return stadiumDef?Ht($,stadiumDef):$})(),p2Team:yt(v,z),p1Subs:(()=>{const $=((w==null?void 0:w.subs)||[]).map(T=>y(T));return stadiumDef&&oi($,stadiumDef),$})(),p2Subs:((E==null?void 0:E.subs)||[]).map($=>y($)),p1Formation:_,p2Formation:z,p1Name:(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"Joueur 1",p2Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?m:[],gc_p2:s?[]:m,gcCardsFull_p1:s?b:[],gcCardsFull_p2:s?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!r)if(s){r=await A();const{data:w}=await k.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await k.from("matches").update({game_state:r,turn_user_id:g.home_id}).eq("id",i):r=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let w=0;w<60&&!r;w++){await new Promise(u=>setTimeout(u,400));const{data:E}=await k.from("matches").select("game_state").eq("id",i).single();E!=null&&E.game_state&&Object.keys(E.game_state).length&&(r=E.game_state)}if(!r){f("Erreur de synchronisation","error"),c("home");return}r.gc_p2=m,r.gcCardsFull_p2=b,await k.from("matches").update({game_state:r}).eq("id",i)}let p=!1,I=!1,L=!1,B=null,H=!1;const C=new Set,F=new Set;function j(w){var $,T;try{k.removeChannel(W)}catch{}const E=r[n+"Score"]||0,u=r[o+"Score"]||0;if(!L){L=!0;const S=w.winner_id||(E>u?a.profile.id:u>E?"opp":null),q=S===a.profile.id?"win":S?"loss":null;q&&ti(()=>Promise.resolve().then(()=>oo),void 0).then(G=>G.applyOwnEvolution(a.profile.id,q)).catch(()=>{})}if(!I){const S=r.p1Score||0,q=r.p2Score||0,G=(r.usedGc_p1||[]).length,R=(r.usedGc_p2||[]).length,O=w.winner_id||(S>q?g.home_id:q>S?g.away_id:null);(O?a.profile.id===O:a.profile.id<(s?g.away_id:g.home_id))&&(I=!0,Xi({player1Id:g.home_id,player2Id:g.away_id,score1:S,score2:q,gc1:G,gc2:R}).catch(V=>console.warn("[FriendMatch] updateStats:",V)))}let x,y;w.winner_id?(x=w.winner_id===a.profile.id,y=!1):w.forfeit?(x=E>u,y=!1):(y=E===u,x=E>u),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const h=document.createElement("div");h.id="pvp-end-overlay",h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=y?"🤝":x?"🏆":"😞",_=y?"MATCH NUL":x?"VICTOIRE !":"DÉFAITE",z=y?"#fff":x?"#FFD700":"#ff6b6b";h.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${_}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${E} – ${u} ${r[o+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${x?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(h),(T=h.querySelector("#pvp-end-home"))==null||T.addEventListener("click",()=>{h.remove(),We(e),c("home")})}const W=k.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{const E=w.new;try{if(E.status==="finished"||E.forfeit){if(p)return;p=!0,B&&(clearInterval(B),B=null),E.game_state&&(r=E.game_state),j(E);return}if(E.game_state){const u=r;r=E.game_state;const x=r._lastGC;if(x&&x.seq&&!F.has(x.seq)&&(F.add(x.seq),x.by!==n)){_e(x.type,x.by,()=>pe());return}const y=u[n+"Score"]||0,h=u[o+"Score"]||0,v=r[n+"Score"]||0,_=r[o+"Score"]||0,z=v>y,$=_>h;if((z||$)&&!C.has(r.round)){C.add(r.round);const T=[...r.log||[]].reverse().find(q=>q.isGoal),S=((T==null?void 0:T.homePlayers)||[]).map(q=>({name:q.name,note:q.note,portrait:q.portrait,job:q.job}));ve(S,v,_,z,()=>pe());return}pe()}}catch(u){console.error("[PvP] crash:",u)}}).subscribe();async function de(w){Object.assign(r,w),r.lastActionAt=new Date().toISOString();const{error:E}=await k.from("matches").update({game_state:r}).eq("id",i);E&&f("Erreur de synchronisation","error");try{pe()}catch(u){console.error("[PvP] renderPvpScreen crash:",u)}}async function re(){if(p)return;p=!0,B&&(clearInterval(B),B=null);const w=s?g.away_id:g.home_id,E=s?"p2":"p1",u=s?"p1":"p2",x={...r,[E+"Score"]:3,[u+"Score"]:0,phase:"finished"};try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:w,home_score:x.p1Score||0,away_score:x.p2Score||0,game_state:x}).eq("id",i)}catch{}try{k.removeChannel(W)}catch{}setTimeout(()=>{We(e),c("home")},800)}const N={BOOST_STAT:({value:w=1,count:E=1,roles:u=[]},x,y)=>{const h=x[n+"Team"],v=Object.entries(h).filter(([_])=>!u.length||u.includes(_)).flatMap(([_,z])=>z.filter($=>!$.used).map($=>({...$,_line:_})));if(!v.length){x.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(x);return}X(v,E,`Choisir ${E} joueur(s) à booster (+${w})`,_=>{_.forEach(z=>{const $=(h[z._line]||[]).find(T=>T.cardId===z.cardId);$&&($.boost=($.boost||0)+w,x.log.push({text:`⚡ +${w} sur ${$.name}`,type:"info"}))}),x[n+"Team"]=h,y(x)})},DEBUFF_STAT:({value:w=1,count:E=1,roles:u=[],target:x="ai"},y,h)=>{const v=x==="home"?n:o,_=y[v+"Team"],z=x==="home"?"allié":"adverse",$=Object.entries(_).filter(([T])=>!u.length||u.includes(T)).flatMap(([T,S])=>S.map(q=>({...q,_line:T})));if(!$.length){y.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),h(y);return}X($,E,`Choisir ${E} joueur(s) ${z}(s) (-${w})`,T=>{T.forEach(S=>{const q=(_[S._line]||[]).find(G=>G.cardId===S.cardId);q&&(q.boost=(q.boost||0)-w,y.log.push({text:`🎯 -${w} sur ${q.name}`,type:"info"}))}),y[v+"Team"]=_,h(y)})},GRAY_PLAYER:({count:w=1,roles:E=[],target:u="ai"},x,y)=>{const h=u==="home"?n:o,v=x[h+"Team"],_=u==="home"?"allié":"adverse",z=Object.entries(v).filter(([$])=>!E.length||E.includes($)).flatMap(([$,T])=>T.filter(S=>!S.used).map(S=>({...S,_line:$})));if(!z.length){x.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),y(x);return}X(z,w,`Choisir ${w} joueur(s) ${_}(s) à exclure`,$=>{const T="usedCardIds_"+h,S=new Set(x[T]||[]);$.forEach(q=>{const G=(v[q._line]||[]).find(R=>R.cardId===q.cardId);G&&(G.used=!0,S.add(q.cardId),x.log.push({text:`❌ ${G.name} exclu !`,type:"info"}))}),x[T]=[...S],x[h+"Team"]=v,y(x)})},REVIVE_PLAYER:({count:w=1,roles:E=[]},u,x)=>{const y=u[n+"Team"],h=Object.entries(y).filter(([v])=>!E.length||E.includes(v)).flatMap(([v,_])=>_.filter(z=>z.used).map(z=>({...z,_line:v})));if(!h.length){u.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),x(u);return}X(h,w,`Choisir ${w} joueur(s) à ressusciter`,v=>{v.forEach(_=>{const z=(y[_._line]||[]).find($=>$.cardId===_.cardId);z&&(z.used=!1,u.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),u[n+"Team"]=y,x(u)})},REMOVE_GOAL:({},w,E)=>{const u=o+"Score";w[u]>0?(w[u]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),E(w)},ADD_GOAL_DRAW:({},w,E)=>{w[n+"Score"]===w[o+"Score"]?(w[n+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),E(w)},ADD_SUB:({value:w=1},E,u)=>{E.maxSubs=(E.maxSubs||3)+w,E.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),u(E)},CUSTOM:({},w,E)=>E(w)};function X(w,E,u,x){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let h=[];function v(){var z,$;const _=w.map(T=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",q=je(T,T._line)+(T.boost||0),R=h.find(Q=>Q.cardId===T.cardId)?"#FFD700":"rgba(255,255,255,0.25)",O=T.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${R};background:${S};overflow:hidden;cursor:pointer;${O}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${q}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${T._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${u}</div>
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
        </div>`,(z=y.querySelector("#pp-close"))==null||z.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(T=>{T.addEventListener("click",()=>{const S=T.dataset.cid,q=w.find(R=>R.cardId===S),G=h.findIndex(R=>R.cardId===S);q&&(G>-1?h.splice(G,1):h.length<E&&h.push(q),v())})}),($=y.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{y.remove(),x(h)})}v(),document.body.appendChild(y)}async function U(w,E){const x=(r["gcCardsFull_"+n]||[]).find(_=>_.id===w),y=(x==null?void 0:x._gcDef)||(r.gcDefs||[]).find(_=>{var z;return _.name===E||((z=_.name)==null?void 0:z.toLowerCase().trim())===(E==null?void 0:E.toLowerCase().trim())}),h=[...r["usedGc_"+n]||[],w],v={type:E,by:n,seq:(r._gcAnimSeq||0)+1};F.add(v.seq),_e(E,n,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const z=N[y.effect_type];if(z){const $={...r};z(y.effect_params||{},$,async T=>{T["usedGc_"+n]=h,T._lastGC=v,T._gcAnimSeq=v.seq,await de(T)});return}}const _={...r};switch(E){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=o+"Score";_[z]>0&&(_[z]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+n]=h,_._lastGC=v,_._gcAnimSeq=v.seq,await de(_)})}function P(w,E){const u="usedCardIds_"+w,x=new Set(r[u]||[]);E.forEach(y=>x.add(y)),r[u]=[...x]}function ne(){for(const w of["p1","p2"]){const E=new Set(r["usedCardIds_"+w]||[]),u=r[w+"Team"];if(u)for(const x of["GK","DEF","MIL","ATT"])(u[x]||[]).forEach(y=>{y.used=E.has(y.cardId)})}}function pe(){var Ze,Qe,nt,gt,le,Ee;if(r.phase==="reveal")return ye();if(r.phase==="midfield")return we();if(r.phase==="finished")return D();const w=r[n+"Team"],E=r[o+"Team"];ne();const u=r[n+"Score"],x=r[o+"Score"],y=r[n+"Name"],h=r[o+"Name"],v=r.phase===n+"-attack",_=r.phase===n+"-defense",z=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],$=z.map(te=>te.cardId),T=window.innerWidth>=700,S=r[n+"Subs"]||[],q=r["usedSubIds_"+n]||[],G=S.filter(te=>!q.includes(te.cardId)),R=r["gcCardsFull_"+n]||[],O=r["usedGc_"+n]||[],Q=R.filter(te=>!O.includes(te.id)),V=r.boostOwner===n&&!r.boostUsed,ie=!["GK","DEF","MIL","ATT"].some(te=>(E[te]||[]).some(ue=>!ue.used)),ae=[...w.MIL||[],...w.ATT||[]].filter(te=>!te.used),fe=v&&ie&&ae.length===0?[...w.GK||[],...w.DEF||[]].filter(te=>!te.used).map(te=>te.cardId):[];function me(te,ue,ee){var kt,Ut;const ce=te._gcDef,Be={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ce==null?void 0:ce.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Te={purple:"#b06ce0",light_blue:"#00d4ef"}[ce==null?void 0:ce.color]||"#b06ce0",tt=(ce==null?void 0:ce.name)||te.gc_type,it=(ce==null?void 0:ce.effect)||((kt=Ve[te.gc_type])==null?void 0:kt.desc)||"",rt=ce!=null&&ce.image_url?`/icons/${ce.image_url}`:null,st=((Ut=Ve[te.gc_type])==null?void 0:Ut.icon)||"⚡",ct=Math.round(ee*.22),$t=Math.round(ee*.22),pt=ee-ct-$t,ht=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${te.id}" data-gc-type="${te.gc_type}"
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
      </div>`}const ke=(te,ue)=>ue?$e(130,175):me(te,130,175),qe=(te,ue)=>ue?$e(68,95):me(te,68,95),Ce=T?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Re=v?Me(n)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${h}</div>`,Fe=v&&!Me(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${T?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${G.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':G.map(te=>`<div class="pvp-sub-btn" data-sub-id="${te.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(te,T?76:44,T?100:58)}</div>`).join("")}
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
      </button>`;et(e),e.style.overflow="hidden",T?e.innerHTML=`
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
            ${V?ke(null,!0):""}
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
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(r["usedSubIds_"+n]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(r["usedSubIds_"+n]||[]).length}/${r.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Re}${Fe}</div>
        </div>
      </div>`;function Je(){const te=e.querySelector(".match-screen");if(!te)return;const ue=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);te.style.height=ue+"px",te.style.minHeight=ue+"px",te.style.maxHeight=ue+"px",te.style.overflow="hidden";const ee=e.querySelector("#mobile-action-bar"),ce=e.querySelector("#mobile-play-area");ee&&ce&&(ce.style.paddingBottom=ee.offsetHeight+"px")}if(Je(),setTimeout(Je,120),setTimeout(Je,400),H||(H=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Je),window.visualViewport.addEventListener("scroll",Je)),window.addEventListener("resize",Je)),function(){const ue=e.querySelector(".terrain-wrapper svg");ue&&(ue.removeAttribute("width"),ue.removeAttribute("height"),ue.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ue.setAttribute("viewBox","-26 -26 352 352"),ue.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(te=>{te.addEventListener("click",()=>{if(!v&&!_)return;const ue=te.dataset.cardId,ee=te.dataset.role,ce=(w[ee]||[]).find(it=>it.cardId===ue);if(!ce||ce.used)return;const Be=fe.includes(ue);if(v&&!["MIL","ATT"].includes(ee)&&!Be)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const Te=r["selected_"+n],tt=Te.findIndex(it=>it.cardId===ue);tt>-1?Te.splice(tt,1):Te.length<3&&Te.push({...ce,_role:ee}),pe()})}),e.querySelectorAll(".match-used-hit").forEach(te=>{te.addEventListener("click",()=>xe(te.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(te=>{te.addEventListener("click",()=>xe())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>xe()),e.querySelectorAll(".pvp-gc-mini").forEach(te=>{te.addEventListener("click",()=>Ae(te.dataset.gcId,te.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>Ie()),(nt=e.querySelector("#pvp-action"))==null||nt.addEventListener("click",te=>{v?te.currentTarget.dataset.pass==="1"||!Me(n)?Y():Z():_&&K()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&re()}),(le=e.querySelector("#pvp-view-opp"))==null||le.addEventListener("click",()=>oe()),(Ee=e.querySelector("#pvp-toggle-history"))==null||Ee.addEventListener("click",()=>ge()),B&&(clearInterval(B),B=null),(v||_)&&!p){let te=30,ue=!1;const ee=()=>document.getElementById("pvp-timer"),ce=()=>{ee()&&(ee().textContent=te+"s",ee().style.color=ue?"#ff4444":"#fff")};ce(),B=setInterval(()=>{te--,te<0?ue?(clearInterval(B),B=null,v&&!Me(n)?Y():re()):(ue=!0,te=15,ce()):ce()},1e3)}}function ye(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await de({phase:"midfield"})},5e3)}let Se=!1;function we(){if(Se)return;const w=r[n+"Team"].MIL||[],E=r[o+"Team"].MIL||[];function u(Q){return Q.reduce((V,ie)=>V+je(ie,"MIL"),0)}function x(Q){let V=0;for(let ie=0;ie<Q.length-1;ie++){const ae=at(Q[ie],Q[ie+1]);ae==="#00ff88"?V+=2:ae==="#FFD700"&&(V+=1)}return V}const y=u(w)+x(w),h=u(E)+x(E),v=y>=h;function _(Q,V,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
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
      ${_(E,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(Q,V)=>e.querySelectorAll(Q).forEach((ie,ae)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},V+ae*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Q,V)=>setTimeout(()=>{Q.style.opacity="1"},V*70)),900),setTimeout(()=>{const Q=e.querySelector("#pvp-vs");Q&&(Q.style.opacity="1",Q.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(V=>V.style.opacity="1")},1250);function $(Q,V,ie){const ae=document.getElementById(Q);if(!ae)return;const fe=performance.now(),me=$e=>{const ke=Math.min(1,($e-fe)/ie);ae.textContent=Math.round(V*(1-Math.pow(1-ke,3))),ke<1?requestAnimationFrame(me):ae.textContent=V};requestAnimationFrame(me)}setTimeout(()=>{$("pvp-score-me",y,800),$("pvp-score-opp",h,800)},1500);const T=r.p1Team.MIL||[],S=r.p2Team.MIL||[],q=u(T)+x(T),G=u(S)+x(S),R=q>=G?"p1":"p2";let O=r.boostValue;O==null&&(O=ni(),r.boostValue=O,r.boostOwner=R,r.boostUsed=!1),Se=!0,setTimeout(()=>{const Q=e.querySelector("#duel-row-"+(v?"me":"opp")),V=e.querySelector("#duel-row-"+(v?"opp":"me")),ie=document.getElementById("pvp-score-me"),ae=document.getElementById("pvp-score-opp"),fe=v?ie:ae,me=v?ae:ie;fe&&(fe.style.fontSize="80px",fe.style.color=v?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{Q&&(Q.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Q.style.zIndex="5"),setTimeout(()=>{const $e=document.getElementById("duel-shock");$e&&($e.style.animation="shockwave .5s ease-out forwards"),V&&(V.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const $e=document.getElementById("pvp-duel-finale");if(!$e)return;const ke=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+O+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",qe=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;$e.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ke+qe,$e.style.transition="opacity .45s ease",$e.style.opacity="1",$e.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const Re=R;await de({phase:Re+"-attack",attacker:Re,round:1,boostValue:O,boostUsed:!1,boostOwner:Re})})},600)},700)},2800)}function ve(w,E,u,x,y){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(T,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};h.innerHTML=`
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
        ${E} – ${u}
      </div>
      ${w!=null&&w.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${w.map(T=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[T.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${T.portrait?`<img src="${T.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(T.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(h);let z=!1;const $=()=>{z||(z=!0,h.remove(),setTimeout(()=>y(),50))};h.addEventListener("click",$),setTimeout($,3500)}function _e(w,E,u){var O,Q;const x=(r.gcDefs||[]).find(V=>{var ie;return V.name===w||((ie=V.name)==null?void 0:ie.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",v=(x==null?void 0:x.name)||w,_=(x==null?void 0:x.effect)||((O=Ve[w])==null?void 0:O.desc)||"",z=x!=null&&x.image_url?`/icons/${x.image_url}`:null,$=((Q=Ve[w])==null?void 0:Q.icon)||"⚡",S=E===n?"Vous":r[E+"Name"]||"Adversaire",q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",q.innerHTML=`
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(q);let G=!1;const R=()=>{G||(G=!0,q.remove(),setTimeout(()=>u&&u(),50))};q.addEventListener("click",R),setTimeout(R,3e3)}function Ae(w,E){var q,G,R,O;const x=(r["gcCardsFull_"+n]||[]).find(Q=>Q.id===w),y=x==null?void 0:x._gcDef,h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",_=(y==null?void 0:y.name)||E,z=(y==null?void 0:y.effect)||((q=Ve[E])==null?void 0:q.desc)||"Carte spéciale.",$=y!=null&&y.image_url?`/icons/${y.image_url}`:null,T=((G=Ve[E])==null?void 0:G.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${h};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${T}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(R=S.querySelector("#pvp-gc-back"))==null||R.addEventListener("click",()=>S.remove()),(O=S.querySelector("#pvp-gc-use"))==null||O.addEventListener("click",()=>{S.remove(),U(w,E)})}function Ie(){var x;const w=r[n+"Team"],E=Object.entries(w).flatMap(([y,h])=>(h||[]).filter(v=>!v.used).map(v=>({...v,_line:y})));if(!E.length)return;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",u.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(y=>{const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",v=je(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${h};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(u),(x=u.querySelector("#bp-close"))==null||x.addEventListener("click",()=>u.remove()),u.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const h=y.dataset.cid,v=E.find(z=>z.cardId===h);if(!v)return;const _=(w[v._line]||[]).find(z=>z.cardId===h);_&&(_.boost=(_.boost||0)+r.boostValue),u.remove(),await de({[n+"Team"]:w,boostUsed:!0})})})}function xe(w=null){var G,R;if(!(r.phase===n+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const u=r[n+"Team"],x=r["usedSubIds_"+n]||[],y=r.maxSubs||3;if(x.length>=y){f(`Maximum ${y} remplacements atteint`,"warning");return}const h=Object.entries(u).flatMap(([O,Q])=>(Q||[]).filter(V=>V.used).map(V=>({...V,_line:O}))),v=(r[n+"Subs"]||[]).filter(O=>!x.includes(O.cardId));if(!h.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){f("Aucun remplaçant disponible","warning");return}let _=Math.max(0,h.findIndex(O=>O.cardId===w));const z=((G=h[_])==null?void 0:G._line)||((R=h[_])==null?void 0:R.job);let $=Math.max(0,v.findIndex(O=>O.job===z)),T=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function q(){var me,$e,ke,qe,Ce,Re;const O=h[_],Q=v[$],V=Math.min(130,Math.round((window.innerWidth-90)/2)),ie=Math.round(V*1.35),ae=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
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
          <div>${O?Ye({...O,used:!1,boost:0},V,ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae(_>=h.length-1)}" ${_>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=S.querySelector("#psub-close"))==null||me.addEventListener("click",()=>S.remove()),($e=S.querySelector("#pout-up"))==null||$e.addEventListener("click",()=>{_>0&&(_--,q())}),(ke=S.querySelector("#pout-down"))==null||ke.addEventListener("click",()=>{_<h.length-1&&(_++,q())}),(qe=S.querySelector("#pin-up"))==null||qe.addEventListener("click",()=>{$>0&&($--,q())}),(Ce=S.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{$<v.length-1&&($++,q())});const fe=(Fe,Oe,De,Ke)=>{const Ne=S.querySelector("#"+Fe);if(!Ne)return;let He=0;Ne.addEventListener("touchstart",Ue=>{He=Ue.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Ue=>{const Je=Ue.changedTouches[0].clientY-He;if(Math.abs(Je)<30)return;const Ze=Oe();Je<0&&Ze<Ke-1?(De(Ze+1),q()):Je>0&&Ze>0&&(De(Ze-1),q())},{passive:!0})};fe("pin-panel",()=>$,Fe=>$=Fe,v.length),fe("pout-panel",()=>_,Fe=>_=Fe,h.length),(Re=S.querySelector("#psub-confirm"))==null||Re.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),T)return;T=!0;const Oe=h[_],De=v[$];if(!Oe||!De)return;const Ke=Oe._line,Ne=(u[Ke]||[]).findIndex(Je=>Je.cardId===Oe.cardId);if(Ne===-1){f("Erreur : joueur introuvable","error"),S.remove();return}const He={...De,_line:Ke,position:Oe.position,used:!1,boost:0};u[Ke].splice(Ne,1,He);const Ue=[...x,De.cardId];S.remove(),J(Oe,De,async()=>{await de({[n+"Team"]:u,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Ue})})})}document.body.appendChild(S),q()}function J(w,E,u){const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const h=(z,$,T)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${T}</div>
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let v=!1;const _=()=>{v||(v=!0,y.remove(),setTimeout(()=>u(),50))};y.addEventListener("click",_),setTimeout(_,2200)}function oe(){var E;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(E=w.querySelector("#pvp-opp-close"))==null||E.addEventListener("click",()=>w.remove())}function ge(){var x;const w=r.log||[],E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const u=y=>{var v,_,z;if(y.type==="duel"){const $=y.isGoal,T=y.homeScored&&n==="p1"||!y.homeScored&&$&&n==="p2",S=y.homeScored?"#FFD700":$?"#ff6b6b":"rgba(255,255,255,0.3)",q=$?T?"⚽ BUT !":"⚽ BUT adversaire !":(v=y.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${$?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
          <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${q}</div>
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
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(u).join("")}
      </div>`,document.body.appendChild(E),(x=E.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>E.remove())}async function Y(){if(r.phase!==n+"-attack")return;const w=n==="p1"?"p2":"p1",E=(r.round||0)+1,u=[...r.log||[]];u.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const x=be(r),y=Me(w),h=x||!y?"finished":w+"-attack";await de({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:h,attacker:w,round:E,log:u}),h==="finished"&&await M(r)}async function Z(){const w=r[n+"Team"],E=!["GK","DEF","MIL","ATT"].some(h=>(r[o+"Team"][h]||[]).some(v=>!v.used)),u=(r["selected_"+n]||[]).map(h=>{const v=(w[h._role]||[]).find(q=>q.cardId===h.cardId)||h,_=E&&["GK","DEF"].includes(h._role),z=w[h._role]||[],$=z.findIndex(q=>q.cardId===h.cardId),T=lt(z.length),S=$>=0?T[$]:v._col??1;return{...v,_line:h._role,_col:S,..._?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!u.length)return;const x=Nt(u,r.modifiers[n]||{});P(n,u.map(h=>h.cardId)),u.forEach(h=>{const v=(w[h._role]||[]).find(_=>_.cardId===h.cardId);v&&(v.used=!0)}),r["selected_"+n]=[],pe();const y=[...r.log||[]];if(E){const h=(r[n+"Score"]||0)+1,v=u.map(S=>({name:S.name,note:je(S,S._line||"ATT"),portrait:Pe(S),job:S.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:x.total,aiTotal:0});const _=(r.round||0)+1,z=n==="p1"?"p2":"p1",$={...r,[n+"Team"]:w,[n+"Score"]:h},T=be($);C.add(_),ve(v,h,r[o+"Score"]||0,!0,async()=>{await de({[n+"Team"]:w,[n+"Score"]:h,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:T?"finished":z+"-attack",attacker:z,round:_,log:y}),T&&await M({...r,[n+"Score"]:h})});return}y.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${x.total})`}),await de({[n+"Team"]:w,[o+"Team"]:r[o+"Team"],pendingAttack:{...x,players:u,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:y})}async function K(){const w=r[n+"Team"],E=(r["selected_"+n]||[]).map(O=>{const Q=(w[O._role]||[]).find(me=>me.cardId===O.cardId)||O,V=w[O._role]||[],ie=V.findIndex(me=>me.cardId===O.cardId),ae=lt(V.length),fe=ie>=0?ae[ie]:Q._col??1;return{...Q,_line:O._role,_col:fe}}),u=Rt(E,r.modifiers[n]||{});P(n,E.map(O=>O.cardId)),E.forEach(O=>{const Q=(w[O._role]||[]).find(V=>V.cardId===O.cardId);Q&&(Q.used=!0)}),r["selected_"+n]=[],pe();const x=Ot(r.pendingAttack.total,u.total,r.modifiers[n]||{}),y=r.pendingAttack.side,h=x==="attack"||(x==null?void 0:x.goal),v=y==="p1"?"p2":"p1",_=(r.round||0)+1,z=(r.pendingAttack.players||[]).map(O=>({name:O.name,note:je(O,O._line||"ATT"),portrait:Pe(O),job:O.job})),$=[...r.log||[]];$.push({type:"duel",isGoal:h,homeScored:h&&y===n,text:h?`⚽ BUT de ${r[y+"Name"]} ! (${r.pendingAttack.total} vs ${u.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${u.total})`,homePlayers:z,aiPlayers:E.map(O=>({name:O.name,note:je(O,O._line||"DEF"),portrait:Pe(O),job:O.job})),homeTotal:r.pendingAttack.total,aiTotal:u.total});const T=h?(r[y+"Score"]||0)+1:r[y+"Score"]||0,S={...r,[n+"Team"]:w,[y+"Score"]:T},q=be(S),G=q?"finished":v+"-attack",R=async()=>{await de({[n+"Team"]:w,[o+"Team"]:r[o+"Team"],[y+"Score"]:T,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:G,attacker:v,round:_,log:$}),(G==="finished"||q)&&await M({...r,[y+"Score"]:T})};if(h){const O=y===n,Q=O?T:r[n+"Score"]||0,V=O?r[o+"Score"]||0:T;C.add(_),ve(z,Q,V,O,R)}else await R()}function se(w){return["MIL","ATT"].some(E=>(w[E]||[]).some(u=>!u.used))}function he(w){return["GK","DEF","MIL","ATT"].some(E=>(w[E]||[]).some(u=>!u.used))}function Le(w){return he(w)&&!se(w)}function Me(w){const E=r[w+"Team"],u=r[(w==="p1"?"p2":"p1")+"Team"];return!!(se(E)||!he(u)&&Le(E))}function be(w){const E=["MIL","ATT"].some($=>(w.p1Team[$]||[]).some(T=>!T.used)),u=["MIL","ATT"].some($=>(w.p2Team[$]||[]).some(T=>!T.used)),x=he(w.p1Team),y=he(w.p2Team);return!E&&!(!y&&x)&&(!u&&!(!x&&y))}function ze(w){const E=w.p1Score||0,u=w.p2Score||0;return E===u?null:E>u?g.home_id:g.away_id}async function M(w){try{const E=ze(w),u=E?g.home_id===E?g.away_id:g.home_id:null;await k.from("matches").update({status:"finished",winner_id:E,home_score:w.p1Score||0,away_score:w.p2Score||0}).eq("id",i),E&&u&&ki(E,u).catch(()=>{})}catch(E){console.error("[PvP] finishMatch:",E)}}function D(){var y;const w=r[n+"Score"],E=r[o+"Score"],u=w>E,x=w===E;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${u?"🏆":x?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${u?"Victoire !":x?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${E}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{k.removeChannel(W)}catch{}We(e),c("home")})}pe()}const St="#1A6B3C",xt="#D4A017";async function Un(e,t){var s;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(s=t.state.params)==null?void 0:s.openLeagueId;if(i){t.state.params.openLeagueId=null,await bt(e,t,i);return}await _t(e,t)}async function _t(e,t,i="waiting"){var I;const{state:s}=t,l=s.profile.id,{data:d}=await k.from("mini_league_members").select("league_id").eq("user_id",l),a=(d||[]).map(L=>L.league_id),{data:c,error:f}=await k.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),n=f?(await k.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:c||[],m=(a.length?await k.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],b=m.filter(L=>L.status==="waiting"&&!L.is_archived),g=m.filter(L=>L.status==="active"&&!L.is_archived),A=m.filter(L=>L.is_archived||L.status==="finished"),r=n.filter(L=>!a.includes(L.id)),p=[{key:"waiting",label:"🟡 En attente",count:b.length+r.length},{key:"active",label:"🟢 En cours",count:g.length},{key:"archived",label:"📁 Archivées",count:A.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${p.map(L=>`<button class="ml-tab" data-tab="${L.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===L.key?St:"transparent"};background:none;font-size:12px;font-weight:${i===L.key?"900":"600"};color:${i===L.key?St:"#888"};cursor:pointer">${L.label}${L.count?` (${L.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Kn(b,r,l):i==="active"?Vn(g,l):Yn(A,l)}
    </div>
  </div>`,(I=document.getElementById("ml-create-btn"))==null||I.addEventListener("click",()=>Wn(e,t)),e.querySelectorAll(".ml-tab").forEach(L=>L.addEventListener("click",()=>_t(e,t,L.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(L=>L.addEventListener("click",()=>bt(e,t,L.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(L=>L.addEventListener("click",B=>{B.stopPropagation(),_o(e,t,L.dataset.join,L.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(L=>L.addEventListener("click",B=>{B.stopPropagation(),yi(e,t,L.dataset.delete,L.dataset.name,i)}))}function ei(e,t,i=!1){var a,c;const s=e.creator_id===t,l=e.pot||0,d=((c=(a=e.mini_league_members)==null?void 0:a[0])==null?void 0:c.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function Kn(e,t,i){const s=[];return e.length&&(s.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),s.push(...e.map(l=>ei(l,i,!1)))),t.length&&(s.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),s.push(...t.map(l=>ei(l,i,!0)))),s.length?s.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Vn(e,t){return e.length?e.map(i=>ei(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Yn(e,t){return e.length?e.map(i=>ei(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Wn(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",s=>{s.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(s=>s.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=s.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var A,r,p,I;const{toast:s}=t,l=document.getElementById("ml-name").value.trim(),d=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,c=((A=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:A.value)||"public",f=((r=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:r.value)||"aller",n=((I=(p=document.getElementById("ml-pwd"))==null?void 0:p.value)==null?void 0:I.trim())||null;if(!l){s("Le nom est obligatoire","error");return}if(a<100){s("Mise minimum : 100 crédits","error");return}if(c==="private"&&!n){s("Mot de passe requis","error");return}const{data:o,error:m}=await k.from("mini_leagues").insert({name:l,creator_id:t.state.profile.id,type:c,password:n,mode:f,max_players:d,entry_fee:a}).select().single();if(m){s("Erreur : "+m.message,"error");return}const{data:b}=await k.from("users").select("credits").eq("id",t.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<a){await k.from("mini_leagues").delete().eq("id",o.id),s(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await k.from("users").update({credits:b.credits-a}).eq("id",t.state.profile.id),await k.from("mini_leagues").update({pot:a}).eq("id",o.id),await k.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=b.credits-a);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),s(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),bt(e,t,o.id)})}function Jn(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),s=l=>{t.remove(),e(l)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>s(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>s(i.value.trim())),i.addEventListener("keydown",l=>{l.key==="Enter"&&s(i.value.trim())}),t.addEventListener("click",l=>{l.target===t&&s(null)})})}async function _o(e,t,i,s){const{toast:l,state:d}=t,a=d.profile.id,{data:c}=await k.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!c){l("Mini League introuvable","error");return}if(c.status!=="waiting"){l("Cette Mini League a déjà démarré","warning");return}const{count:f}=await k.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(f>=c.max_players){l("La Mini League est complète","warning");return}if(s==="private"){const r=await Jn();if(r===null)return;if(c.password!==r){l("Mot de passe incorrect","error");return}}const n=c.entry_fee||100,{data:o}=await k.from("users").select("credits").eq("id",a).single();if(((o==null?void 0:o.credits)||0)<n){l(`Crédits insuffisants — il te faut ${n.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:m}=await k.from("mini_league_members").insert({league_id:i,user_id:a});if(m){l("Erreur inscription : "+m.message,"error");return}const{error:b}=await k.from("users").update({credits:o.credits-n}).eq("id",a),{error:g}=await k.from("mini_leagues").update({pot:(c.pot||0)+n}).eq("id",i);(b||g)&&console.error("Erreur post-inscription:",b,g),d.profile&&(d.profile.credits=o.credits-n);const A=document.getElementById("nav-credits");A&&(A.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`✅ Inscrit ! −${n.toLocaleString("fr")} cr. · Pot : ${((c.pot||0)+n).toLocaleString("fr")} cr.`,"success"),bt(e,t,i)}async function Xn(e,t,i,s){const{toast:l,state:d}=t,a=d.profile.id;if(!confirm(`Te désinscrire et récupérer ${s.toLocaleString("fr")} cr. ?`))return;const{data:c}=await k.from("mini_leagues").select("pot,status").eq("id",i).single();if(!c||c.status!=="waiting"){l("Impossible — la league a déjà démarré","error");return}const{data:f}=await k.from("users").select("credits").eq("id",a).single();await k.from("mini_leagues").update({pot:Math.max(0,(c.pot||0)-s)}).eq("id",i),await k.from("users").update({credits:((f==null?void 0:f.credits)||0)+s}).eq("id",a),await k.from("mini_league_members").delete().eq("league_id",i).eq("user_id",a),d.profile&&(d.profile.credits=((f==null?void 0:f.credits)||0)+s);const n=document.getElementById("nav-credits");n&&(n.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`↩️ Désinscrit · +${s.toLocaleString("fr")} cr. remboursés`,"success"),_t(e,t,"waiting")}async function yi(e,t,i,s,l){const{toast:d}=t;if(!confirm(`Supprimer définitivement "${s}" et tous ses matchs/membres ? Action irréversible.`))return;await k.from("mini_league_matches").delete().eq("league_id",i),await k.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await k.from("mini_leagues").delete().eq("id",i);if(a){d("Erreur suppression ("+a.message+")","error");return}d("Mini League supprimée avec succès","success"),_t(e,t,l)}async function Zn(e,t,i){await k.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),_t(e,t,"archived")}async function bt(e,t,i){var H,C,F,j,W,de,re,N,X;const{state:s,toast:l}=t,d=s.profile.id,[{data:a},{data:c},{data:f}]=await Promise.all([k.from("mini_leagues").select("*").eq("id",i).single(),k.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),k.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){l("Introuvable","error"),await _t(e,t);return}const n=(c||[]).some(U=>U.user_id===d),o=a.creator_id===d,m=(c||[]).map(U=>U.user).filter(Boolean),b=ko(m,f||[]),g=(f||[]).filter(U=>U.matchday===a.current_day),A=a.pot||0,r=a.entry_fee||100,p=g.length>0&&g.every(U=>U.status==="finished"||U.status==="bye"),I=a.current_day>=a.total_days,L=(c||[]).find(U=>U.user_id===d);e.innerHTML=`
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
        ${A>0?`<div style="font-size:12px;font-weight:900;color:${xt};margin-top:4px">🏆 ${A.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${m.length}/${a.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${r} cr./joueur → Pot estimé : ${(r*m.length).toLocaleString("fr")} cr. (🥇${Math.floor(r*m.length*.7).toLocaleString("fr")} · 🥈${Math.floor(r*m.length*.2).toLocaleString("fr")} · 🥉${Math.floor(r*m.length*.1).toLocaleString("fr")})</div>
        ${m.map(U=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${U.club_color2||St};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${U.club_color1||"#fff"}">${(U.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${U.club_name||U.pseudo}</div><div style="font-size:11px;color:#999">@${U.pseudo}</div></div>
            ${U.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
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
        ${g.map(U=>Ri(U,m,d,n)).join("")}
        ${o&&p&&!I?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&p&&I?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&b.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${A>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${xt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((U,P)=>{const ne=A>0&&a.status==="finished"?P===0?Math.floor(A*.7):P===1?Math.floor(A*.2):P===2?Math.floor(A*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${U.userId===d?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${P===0?xt:P<3?St:"#555"}">${["🥇","🥈","🥉"][P]||P+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${U.clubName}</div><div style="font-size:10px;color:#999">@${U.pseudo}</div></td>
              <td style="text-align:center">${U.played}</td><td style="text-align:center">${U.won}-${U.drawn}-${U.lost}</td>
              <td style="text-align:center;color:${U.goalDiff>=0?St:"#cc2222"}">${U.goalDiff>=0?"+":""}${U.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${U.points}</td>
              ${A>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${xt}">${ne?ne.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(U,P)=>P+1).reverse().map(U=>{const P=(f||[]).filter(ne=>ne.matchday===U);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${U}</div>${P.map(ne=>Ri(ne,m,d,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const B=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((H=document.getElementById("ml-back"))==null||H.addEventListener("click",()=>_t(e,t,B)),(C=document.getElementById("ml-start-btn"))==null||C.addEventListener("click",()=>Qn(e,t,a,m)),(F=document.getElementById("ml-next-day"))==null||F.addEventListener("click",()=>er(e,t,i)),(j=document.getElementById("ml-finish-btn"))==null||j.addEventListener("click",()=>$o(e,t,i,A,b,m)),(W=document.getElementById("ml-join-now"))==null||W.addEventListener("click",()=>_o(e,t,i,a.type)),(de=document.getElementById("ml-leave-btn"))==null||de.addEventListener("click",()=>Xn(e,t,i,r)),(re=document.getElementById("ml-delete-btn"))==null||re.addEventListener("click",()=>yi(e,t,i,a.name,"waiting")),(N=document.getElementById("ml-delete-now"))==null||N.addEventListener("click",()=>yi(e,t,i,a.name,B)),(X=document.getElementById("ml-archive-btn"))==null||X.addEventListener("click",()=>Zn(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(U=>{U.addEventListener("click",()=>{const P=g.find(ne=>ne.id===U.dataset.playMatch);P&&t.navigate("match-mini-league",{mlMatchId:P.id,leagueId:i})})}),a.status==="finished"&&L){const U=b.findIndex(P=>P.userId===d);U>=0&&U<3&&L.prize_amount>0&&setTimeout(()=>tr(e,t,a,L,U),400)}}function Ri(e,t,i,s,l=!1){const d=m=>t.find(b=>b.id===m);if(e.is_bye){const m=d(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"?"} exempté(e)</div>`}const a=d(e.home_id),c=d(e.away_id),f=e.home_id===i||e.away_id===i,n=f&&e.status==="pending"&&s&&!l,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${f?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${f?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?St:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"}</div>
    ${n?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Qn(e,t,i,s){const{toast:l,state:d}=t,a=ir(s.map(n=>n.id),i.mode),c=[];a.forEach((n,o)=>n.forEach(m=>c.push({league_id:i.id,matchday:o+1,home_id:m.home||m.bye,away_id:m.away||null,is_bye:!!m.bye,status:m.bye?"bye":"pending"})));const{error:f}=await k.from("mini_league_matches").insert(c);if(f){l("Erreur calendrier : "+f.message,"error");return}await k.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),l(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),bt(e,t,i.id)}async function er(e,t,i){const{data:s}=await k.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),l=(s.current_day||0)+1;if(l>(s.total_days||0)){await $o(e,t,i,s.pot||0,null,null);return}await k.from("mini_leagues").update({current_day:l}).eq("id",i),t.toast(`Journée ${l} commencée !`,"success"),bt(e,t,i)}async function $o(e,t,i,s,l,d){const{toast:a,state:c}=t;let f=l,n=d;if(!f){const{data:m}=await k.from("mini_league_matches").select("*").eq("league_id",i),{data:b}=await k.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);n=(b||[]).map(g=>g.user).filter(Boolean),f=ko(n,m||[])}const o=[Math.floor(s*.7),Math.floor(s*.2),Math.floor(s*.1)];await Promise.all(f.slice(0,3).map((m,b)=>o[b]?k.from("mini_league_members").update({prize_amount:o[b],prize_claimed:!1}).eq("league_id",i).eq("user_id",m.userId):Promise.resolve())),await k.from("mini_leagues").update({status:"finished"}).eq("id",i),a("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),bt(e,t,i)}async function tr(e,t,i,s,l){var b,g;const{state:d,toast:a}=t,c=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],f=["🥇","🥈","🥉"][l],n=s.prize_amount||c[l]||0,o=s.prize_claimed,m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",m.innerHTML=`
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
    </div>`,document.body.appendChild(m),(b=m.querySelector("#prize-close"))==null||b.addEventListener("click",()=>m.remove()),m.addEventListener("click",A=>{A.target===m&&m.remove()}),(g=m.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async()=>{const{data:A}=await k.from("users").select("credits").eq("id",d.profile.id).single();await k.from("users").update({credits:((A==null?void 0:A.credits)||0)+n}).eq("id",d.profile.id),await k.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",d.profile.id),d.profile&&(d.profile.credits=((A==null?void 0:A.credits)||0)+n);const r=document.getElementById("nav-credits");r&&(r.textContent=`💰 ${d.profile.credits.toLocaleString("fr")}`),a(`💰 +${n.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),m.remove(),bt(e,t,i.id)})}function ir(e,t){const s=e.length%2===0?[...e]:[...e,null],l=s.length;let d=s.slice(1);const a=[];for(let c=0;c<l-1;c++){const f=[],n=[s[0],...d];for(let o=0;o<l/2;o++){const m=n[o],b=n[l-1-o];m===null?f.push({bye:b}):b===null?f.push({bye:m}):f.push({home:m,away:b})}a.push(f),d=[d[d.length-1],...d.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(c=>c.map(f=>f.bye?f:{home:f.away,away:f.home}))]:a}function ko(e,t){const i={};return e.forEach(s=>{i[s.id]={userId:s.id,pseudo:s.pseudo,clubName:s.club_name||s.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(s=>s.status==="finished"&&!s.is_bye&&s.home_score!=null).forEach(s=>{const l=i[s.home_id],d=i[s.away_id];!l||!d||(l.played++,d.played++,l.goalsFor+=s.home_score,l.goalsAgainst+=s.away_score,d.goalsFor+=s.away_score,d.goalsAgainst+=s.home_score,s.home_score>s.away_score?(l.won++,l.points+=3,d.lost++):s.home_score<s.away_score?(d.won++,d.points+=3,l.lost++):(l.drawn++,l.points++,d.drawn++,d.points++),l.goalDiff=l.goalsFor-l.goalsAgainst,d.goalDiff=d.goalsFor-d.goalsAgainst)}),Object.values(i).sort((s,l)=>l.points-s.points||l.goalDiff-s.goalDiff||l.goalsFor-s.goalsFor)}async function Oi(e,t,i,s){var l,d;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:s};try{const a=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(k.getChannels?k.getChannels():[]).forEach(f=>{const n=f.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&k.removeChannel(f)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}a&&(await k.rpc("cancel_matchmaking",{p_user_id:a}).catch(()=>{}),await k.from("matchmaking_queue").delete().eq("user_id",a).then(()=>{},()=>{}))}catch{}await ai(e,t,"random",({deckId:a,formation:c,starters:f,subsRaw:n,gcCardsEnriched:o,gcDefs:m,stadiumDef:b})=>{const g=A=>or(e,t,a,c,f,n,A,m||[],i);if(!o.length){g([]);return}ri(e,o,g)})}async function or(e,t,i,s,l,d,a=[],c=[],f,n){const{state:o,navigate:m,toast:b}=t,g=o.profile.id;let A=!1,r=null;et(e);try{await k.rpc("cancel_matchmaking",{p_user_id:g})}catch{}try{await k.from("matchmaking_queue").delete().eq("user_id",g)}catch{}const{data:p}=await k.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",f).single();if(!p){b("Match introuvable","error"),We(e),m("mini-league");return}if(p.home_id!==g&&p.away_id!==g){b("Tu ne fais pas partie de ce match","error"),We(e),m("mini-league");return}const I=p.home_id===g,L=I?p.away:p.home,B=I?p.away_id:p.home_id,H=(F,j)=>{var W;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${p.matchday}</div>
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
      </div>`,(W=document.getElementById("lobby-cancel"))==null||W.addEventListener("click",()=>{A=!0,clearInterval(r),We(e),m("mini-league")})},C=async(F,j)=>{A=!0,clearInterval(r),await new Promise(W=>setTimeout(W,600)),e.isConnected&&nr(e,t,F,j,a,c)};if(H(),I){let F=p.match_id;if(!F){const{data:W,error:de}=await k.from("matches").insert({home_id:g,away_id:B,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(de||!W){b("Erreur création match","error"),We(e),m("mini-league");return}F=W.id,await k.from("mini_league_matches").update({match_id:F,status:"playing"}).eq("id",f)}const j=F;r=setInterval(async()=>{if(A){clearInterval(r);return}const{data:W}=await k.from("matches").select("away_deck_id").eq("id",j).single();W!=null&&W.away_deck_id&&(clearInterval(r),C(j,!0))},1500)}else{let F=p.match_id;r=setInterval(async()=>{if(A){clearInterval(r);return}const{data:j}=await k.from("mini_league_matches").select("match_id").eq("id",f).single();j!=null&&j.match_id&&(clearInterval(r),F=j.match_id,await k.from("matches").update({away_deck_id:i}).eq("id",F),C(F,!1))},1500)}}async function nr(e,t,i,s,l=[],d=[]){var E;const{state:a,navigate:c,toast:f}=t,n=((E=a.params)==null?void 0:E.leagueId)||null,o=s?"p1":"p2",m=s?"p2":"p1",b=(l||[]).map(u=>u.id),g=(l||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:A}=await k.from("matches").select("*").eq("id",i).single();if(!A){f("Match introuvable","error"),c("mini-league");return}async function r(){const[{data:u},{data:x},{data:y},{data:h}]=await Promise.all([k.rpc("get_deck_for_match",{p_deck_id:A.home_deck_id}),k.rpc("get_deck_for_match",{p_deck_id:A.away_deck_id}),k.from("users").select("id,pseudo,club_name").eq("id",A.home_id).single(),k.from("users").select("id,pseudo,club_name").eq("id",A.away_id).single()]),v=S=>{const q=Number(S.evolution_bonus)||0;return{cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:(Number(S.note_g)||0)+(S.job==="GK"||S.job2==="GK"&&Number(S.note_g)>0?q:0),note_d:(Number(S.note_d)||0)+(S.job==="DEF"||S.job2==="DEF"&&Number(S.note_d)>0?q:0),note_m:(Number(S.note_m)||0)+(S.job==="MIL"||S.job2==="MIL"&&Number(S.note_m)>0?q:0),note_a:(Number(S.note_a)||0)+(S.job==="ATT"||S.job2==="ATT"&&Number(S.note_a)>0?q:0),evolution_bonus:q,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},_=((u==null?void 0:u.starters)||[]).map(S=>v(S)),z=((x==null?void 0:x.starters)||[]).map(S=>v(S)),$=(u==null?void 0:u.formation)||"4-4-2",T=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:(()=>{const S=yt(_,$);return stadiumDef?Ht(S,stadiumDef):S})(),p2Team:yt(z,T),p1Subs:(()=>{const S=((u==null?void 0:u.subs)||[]).map(q=>v(q));return stadiumDef&&oi(S,stadiumDef),S})(),p2Subs:((x==null?void 0:x.subs)||[]).map(S=>v(S)),p1Formation:$,p2Formation:T,p1Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?b:[],gc_p2:s?[]:b,gcCardsFull_p1:s?g:[],gcCardsFull_p2:s?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let p=A.game_state&&Object.keys(A.game_state).length?A.game_state:null;if(!p)if(s){p=await r();const{data:u}=await k.from("matches").select("game_state").eq("id",i).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await k.from("matches").update({game_state:p,turn_user_id:A.home_id}).eq("id",i):p=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!p;u++){await new Promise(y=>setTimeout(y,400));const{data:x}=await k.from("matches").select("game_state").eq("id",i).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(p=x.game_state)}if(!p){f("Erreur de synchronisation","error"),c("mini-league");return}p.gc_p2=b,p.gcCardsFull_p2=g,await k.from("matches").update({game_state:p}).eq("id",i)}let I=!1,L=!1,B=!1,H=null,C=!1;const F=new Set,j=new Set;function W(u){var S,q;try{k.removeChannel(de)}catch{}const x=p[o+"Score"]||0,y=p[m+"Score"]||0;if(!B){B=!0;const G=u.winner_id||(x>y?a.profile.id:y>x?"opp":null),R=G===a.profile.id?"win":G?"loss":null;R&&ti(()=>Promise.resolve().then(()=>oo),void 0).then(O=>O.applyOwnEvolution(a.profile.id,R)).catch(()=>{})}if(!L){const G=p.p1Score||0,R=p.p2Score||0,O=(p.usedGc_p1||[]).length,Q=(p.usedGc_p2||[]).length,V=u.winner_id||(G>R?A.home_id:R>G?A.away_id:null);(V?a.profile.id===V:a.profile.id<(s?A.away_id:A.home_id))&&(L=!0,Xi({player1Id:A.home_id,player2Id:A.away_id,score1:G,score2:R,gc1:O,gc2:Q}).catch(ae=>console.warn("[FriendMatch] updateStats:",ae)))}let h,v;u.winner_id?(h=u.winner_id===a.profile.id,v=!1):u.forfeit?(h=x>y,v=!1):(v=x===y,h=x>y),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const _=document.createElement("div");_.id="pvp-end-overlay",_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const z=v?"🤝":h?"🏆":"😞",$=v?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",T=v?"#fff":h?"#FFD700":"#ff6b6b";_.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${T}">${$}</div>
      <div style="font-size:18px">${p[o+"Name"]} ${x} – ${y} ${p[m+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(_),(q=_.querySelector("#pvp-end-home"))==null||q.addEventListener("click",()=>{_.remove(),We(e),n?c("mini-league",{openLeagueId:n}):c("mini-league")})}const de=k.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},u=>{const x=u.new;try{if(x.status==="finished"||x.forfeit){if(I||(I=!0,H&&(clearInterval(H),H=null),x.game_state&&(p=x.game_state),p.phase==="finished"&&!x.forfeit&&document.getElementById("pvp-home")))return;W(x);return}if(x.game_state){const y=p;p=x.game_state;const h=p._lastGC;if(h&&h.seq&&!j.has(h.seq)&&(j.add(h.seq),h.by!==o)){Ae(h.type,h.by,()=>ye());return}const v=y[o+"Score"]||0,_=y[m+"Score"]||0,z=p[o+"Score"]||0,$=p[m+"Score"]||0,T=z>v,S=$>_;if((T||S)&&!F.has(p.round)){F.add(p.round);const q=[...p.log||[]].reverse().find(R=>R.isGoal),G=((q==null?void 0:q.homePlayers)||[]).map(R=>({name:R.name,note:R.note,portrait:R.portrait,job:R.job}));_e(G,z,$,T,()=>ye());return}ye()}}catch(y){console.error("[PvP] crash:",y)}}).subscribe();async function re(u){Object.assign(p,u),p.lastActionAt=new Date().toISOString();const{error:x}=await k.from("matches").update({game_state:p}).eq("id",i);x&&f("Erreur de synchronisation","error");try{ye()}catch(y){console.error("[PvP] renderPvpScreen crash:",y)}}async function N(){if(I)return;I=!0,H&&(clearInterval(H),H=null);const u=s?A.away_id:A.home_id,x=s?"p2":"p1",y=s?"p1":"p2",h={...p,[x+"Score"]:3,[y+"Score"]:0,phase:"finished"};try{await k.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",i)}catch{}try{k.removeChannel(de)}catch{}setTimeout(()=>{We(e),c("mini-league")},800)}const X={BOOST_STAT:({value:u=1,count:x=1,roles:y=[]},h,v)=>{const _=h[o+"Team"],z=Object.entries(_).filter(([$])=>!y.length||y.includes($)).flatMap(([$,T])=>T.filter(S=>!S.used).map(S=>({...S,_line:$})));if(!z.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(h);return}U(z,x,`Choisir ${x} joueur(s) à booster (+${u})`,$=>{$.forEach(T=>{const S=(_[T._line]||[]).find(q=>q.cardId===T.cardId);S&&(S.boost=(S.boost||0)+u,h.log.push({text:`⚡ +${u} sur ${S.name}`,type:"info"}))}),h[o+"Team"]=_,v(h)})},DEBUFF_STAT:({value:u=1,count:x=1,roles:y=[],target:h="ai"},v,_)=>{const z=h==="home"?o:m,$=v[z+"Team"],T=h==="home"?"allié":"adverse",S=Object.entries($).filter(([q])=>!y.length||y.includes(q)).flatMap(([q,G])=>G.map(R=>({...R,_line:q})));if(!S.length){v.log.push({text:`🎯 Aucun joueur ${T}`,type:"info"}),_(v);return}U(S,x,`Choisir ${x} joueur(s) ${T}(s) (-${u})`,q=>{q.forEach(G=>{const R=($[G._line]||[]).find(O=>O.cardId===G.cardId);R&&(R.boost=(R.boost||0)-u,v.log.push({text:`🎯 -${u} sur ${R.name}`,type:"info"}))}),v[z+"Team"]=$,_(v)})},GRAY_PLAYER:({count:u=1,roles:x=[],target:y="ai"},h,v)=>{const _=y==="home"?o:m,z=h[_+"Team"],$=y==="home"?"allié":"adverse",T=Object.entries(z).filter(([S])=>!x.length||x.includes(S)).flatMap(([S,q])=>q.filter(G=>!G.used).map(G=>({...G,_line:S})));if(!T.length){h.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),v(h);return}U(T,u,`Choisir ${u} joueur(s) ${$}(s) à exclure`,S=>{const q="usedCardIds_"+_,G=new Set(h[q]||[]);S.forEach(R=>{const O=(z[R._line]||[]).find(Q=>Q.cardId===R.cardId);O&&(O.used=!0,G.add(R.cardId),h.log.push({text:`❌ ${O.name} exclu !`,type:"info"}))}),h[q]=[...G],h[_+"Team"]=z,v(h)})},REVIVE_PLAYER:({count:u=1,roles:x=[]},y,h)=>{const v=y[o+"Team"],_=Object.entries(v).filter(([z])=>!x.length||x.includes(z)).flatMap(([z,$])=>$.filter(T=>T.used).map(T=>({...T,_line:z})));if(!_.length){y.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(y);return}U(_,u,`Choisir ${u} joueur(s) à ressusciter`,z=>{z.forEach($=>{const T=(v[$._line]||[]).find(S=>S.cardId===$.cardId);T&&(T.used=!1,y.log.push({text:`💫 ${T.name} ressuscité !`,type:"info"}))}),y[o+"Team"]=v,h(y)})},REMOVE_GOAL:({},u,x)=>{const y=m+"Score";u[y]>0?(u[y]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(u)},ADD_GOAL_DRAW:({},u,x)=>{u[o+"Score"]===u[m+"Score"]?(u[o+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(u)},ADD_SUB:({value:u=1},x,y)=>{x.maxSubs=(x.maxSubs||3)+u,x.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),y(x)},CUSTOM:({},u,x)=>x(u)};function U(u,x,y,h){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let _=[];function z(){var T,S;const $=u.map(q=>{const G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[q._line]||"#555",R=je(q,q._line)+(q.boost||0),Q=_.find(ie=>ie.cardId===q.cardId)?"#FFD700":"rgba(255,255,255,0.25)",V=q.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${q.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Q};background:${G};overflow:hidden;cursor:pointer;${V}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${q.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${R}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${q._line}</div>
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
        </div>`,(T=v.querySelector("#pp-close"))==null||T.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(q=>{q.addEventListener("click",()=>{const G=q.dataset.cid,R=u.find(Q=>Q.cardId===G),O=_.findIndex(Q=>Q.cardId===G);R&&(O>-1?_.splice(O,1):_.length<x&&_.push(R),z())})}),(S=v.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{v.remove(),h(_)})}z(),document.body.appendChild(v)}async function P(u,x){const h=(p["gcCardsFull_"+o]||[]).find($=>$.id===u),v=(h==null?void 0:h._gcDef)||(p.gcDefs||[]).find($=>{var T;return $.name===x||((T=$.name)==null?void 0:T.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),_=[...p["usedGc_"+o]||[],u],z={type:x,by:o,seq:(p._gcAnimSeq||0)+1};j.add(z.seq),Ae(x,o,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const T=X[v.effect_type];if(T){const S={...p};T(v.effect_params||{},S,async q=>{q["usedGc_"+o]=_,q._lastGC=z,q._gcAnimSeq=z.seq,await re(q)});return}}const $={...p};switch(x){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const T=m+"Score";$[T]>0&&($[T]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+o]=_,$._lastGC=z,$._gcAnimSeq=z.seq,await re($)})}function ne(u,x){const y="usedCardIds_"+u,h=new Set(p[y]||[]);x.forEach(v=>h.add(v)),p[y]=[...h]}function pe(){for(const u of["p1","p2"]){const x=new Set(p["usedCardIds_"+u]||[]),y=p[u+"Team"];if(y)for(const h of["GK","DEF","MIL","ATT"])(y[h]||[]).forEach(v=>{v.used=x.has(v.cardId)})}}function ye(){var nt,gt,le,Ee,te,ue;if(p.phase==="reveal")return Se();if(p.phase==="midfield")return ve();if(p.phase==="finished")return w();const u=p[o+"Team"],x=p[m+"Team"];pe();const y=p[o+"Score"],h=p[m+"Score"],v=p[o+"Name"],_=p[m+"Name"],z=p.phase===o+"-attack",$=p.phase===o+"-defense",T=Array.isArray(p["selected_"+o])?p["selected_"+o]:[],S=T.map(ee=>ee.cardId),q=window.innerWidth>=700,G=p[o+"Subs"]||[],R=p["usedSubIds_"+o]||[],O=G.filter(ee=>!R.includes(ee.cardId)),Q=p["gcCardsFull_"+o]||[],V=p["usedGc_"+o]||[],ie=Q.filter(ee=>!V.includes(ee.id)),ae=p.boostOwner===o&&!p.boostUsed,fe=!["GK","DEF","MIL","ATT"].some(ee=>(x[ee]||[]).some(ce=>!ce.used)),me=[...u.MIL||[],...u.ATT||[]].filter(ee=>!ee.used),$e=z&&fe&&me.length===0?[...u.GK||[],...u.DEF||[]].filter(ee=>!ee.used).map(ee=>ee.cardId):[];function ke(ee,ce,Be){var zi,Si;const Te=ee._gcDef,tt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Te==null?void 0:Te.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",it={purple:"#b06ce0",light_blue:"#00d4ef"}[Te==null?void 0:Te.color]||"#b06ce0",rt=(Te==null?void 0:Te.name)||ee.gc_type,st=(Te==null?void 0:Te.effect)||((zi=Ve[ee.gc_type])==null?void 0:zi.desc)||"",ct=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,$t=((Si=Ve[ee.gc_type])==null?void 0:Si.icon)||"⚡",pt=Math.round(Be*.22),ht=Math.round(Be*.22),kt=Be-pt-ht,Ut=rt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ee.id}" data-gc-type="${ee.gc_type}"
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
        <div style="font-size:${Math.round(ce*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const Ce=(ee,ce)=>ce?qe(130,175):ke(ee,130,175),Re=(ee,ce)=>ce?qe(68,95):ke(ee,68,95),Fe=q?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=z?be(o)?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${T.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Fe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${T.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${_}</div>`,De=z&&!be(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':z||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${T.length}/3 sélectionné(s)</div>`:"",Ke=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${q?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${O.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':O.map(ee=>`<div class="pvp-sub-btn" data-sub-id="${ee.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(ee,q?76:44,q?100:58)}</div>`).join("")}
    </div>`,Ne=z?"attack":$?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(u,p[o+"Formation"],Ne,S,300,300,$e)}
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
        </div>`}return`<div style="font-size:11px;color:${ee.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ee.type==="goal"?700:400};padding:3px 2px">${ee.text||""}</div>`}const Je=(()=>{var ce,Be;if($&&((ce=p.pendingAttack)!=null&&ce.players)){const Te=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${_} ATTAQUE — Défendez !</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#ff6b6b",Te.total)}
        </div>`}if(z&&((Be=p.pendingAttack)!=null&&Be.players)){const Te=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#00ff88",Te.total)}
        </div>`}const ee=(p.log||[]).slice(-1)[0];return ee?'<div style="padding:2px 4px">'+Ue(ee)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ze=`
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
      </button>`;et(e),e.style.overflow="hidden",q?e.innerHTML=`
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
              ${ft(u,p[o+"Formation"],Ne,S,300,300,$e)}
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
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(p["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(p["usedSubIds_"+o]||[]).length}/${p.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Oe}${De}</div>
        </div>
      </div>`;function Qe(){const ee=e.querySelector(".match-screen");if(!ee)return;const ce=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ee.style.height=ce+"px",ee.style.minHeight=ce+"px",ee.style.maxHeight=ce+"px",ee.style.overflow="hidden";const Be=e.querySelector("#mobile-action-bar"),Te=e.querySelector("#mobile-play-area");Be&&Te&&(Te.style.paddingBottom=Be.offsetHeight+"px")}if(Qe(),setTimeout(Qe,120),setTimeout(Qe,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Qe),window.visualViewport.addEventListener("scroll",Qe)),window.addEventListener("resize",Qe)),function(){const ce=e.querySelector(".terrain-wrapper svg");ce&&(ce.removeAttribute("width"),ce.removeAttribute("height"),ce.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ce.setAttribute("viewBox","-26 -26 352 352"),ce.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ee=>{ee.addEventListener("click",()=>{if(!z&&!$)return;const ce=ee.dataset.cardId,Be=ee.dataset.role,Te=(u[Be]||[]).find(st=>st.cardId===ce);if(!Te||Te.used)return;const tt=$e.includes(ce);if(z&&!["MIL","ATT"].includes(Be)&&!tt)return;Array.isArray(p["selected_"+o])||(p["selected_"+o]=[]);const it=p["selected_"+o],rt=it.findIndex(st=>st.cardId===ce);rt>-1?it.splice(rt,1):it.length<3&&it.push({...Te,_role:Be}),ye()})}),e.querySelectorAll(".match-used-hit").forEach(ee=>{ee.addEventListener("click",()=>J(ee.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ee=>{ee.addEventListener("click",()=>J())}),(nt=e.querySelector("#pvp-sub-open"))==null||nt.addEventListener("click",()=>J()),e.querySelectorAll(".pvp-gc-mini").forEach(ee=>{ee.addEventListener("click",()=>Ie(ee.dataset.gcId,ee.dataset.gcType))}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>xe()),(le=e.querySelector("#pvp-action"))==null||le.addEventListener("click",ee=>{z?ee.currentTarget.dataset.pass==="1"||!be(o)?Z():K():$&&se()}),(Ee=e.querySelector("#pvp-quit"))==null||Ee.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&N()}),(te=e.querySelector("#pvp-view-opp"))==null||te.addEventListener("click",()=>ge()),(ue=e.querySelector("#pvp-toggle-history"))==null||ue.addEventListener("click",()=>Y()),H&&(clearInterval(H),H=null),(z||$)&&!I){let ee=30,ce=!1;const Be=()=>document.getElementById("pvp-timer"),Te=()=>{Be()&&(Be().textContent=ee+"s",Be().style.color=ce?"#ff4444":"#fff")};Te(),H=setInterval(()=>{ee--,ee<0?ce?(clearInterval(H),H=null,z&&!be(o)?Z():N()):(ce=!0,ee=15,Te()):Te()},1e3)}}function Se(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[m+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(p[m+"Team"],p[m+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await re({phase:"midfield"})},5e3)}let we=!1;function ve(){if(we)return;const u=p[o+"Team"].MIL||[],x=p[m+"Team"].MIL||[];function y(ie){return ie.reduce((ae,fe)=>ae+je(fe,"MIL"),0)}function h(ie){let ae=0;for(let fe=0;fe<ie.length-1;fe++){const me=at(ie[fe],ie[fe+1]);me==="#00ff88"?ae+=2:me==="#FFD700"&&(ae+=1)}return ae}const v=y(u)+h(u),_=y(x)+h(x),z=v>=_;function $(ie,ae,fe){return`<div id="duel-row-${fe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
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
      ${$(u,p[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(x,p[m+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const T=(ie,ae)=>e.querySelectorAll(ie).forEach((fe,me)=>{setTimeout(()=>{fe.style.opacity="1",fe.style.transform="translateY(0) scale(1)"},ae+me*90)});T(".duel-card-me",150),T(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ie,ae)=>setTimeout(()=>{ie.style.opacity="1"},ae*70)),900),setTimeout(()=>{const ie=e.querySelector("#pvp-vs");ie&&(ie.style.opacity="1",ie.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ae=>ae.style.opacity="1")},1250);function S(ie,ae,fe){const me=document.getElementById(ie);if(!me)return;const $e=performance.now(),ke=qe=>{const Ce=Math.min(1,(qe-$e)/fe);me.textContent=Math.round(ae*(1-Math.pow(1-Ce,3))),Ce<1?requestAnimationFrame(ke):me.textContent=ae};requestAnimationFrame(ke)}setTimeout(()=>{S("pvp-score-me",v,800),S("pvp-score-opp",_,800)},1500);const q=p.p1Team.MIL||[],G=p.p2Team.MIL||[],R=y(q)+h(q),O=y(G)+h(G),Q=R>=O?"p1":"p2";let V=p.boostValue;V==null&&(V=ni(),p.boostValue=V,p.boostOwner=Q,p.boostUsed=!1),we=!0,setTimeout(()=>{const ie=e.querySelector("#duel-row-"+(z?"me":"opp")),ae=e.querySelector("#duel-row-"+(z?"opp":"me")),fe=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),$e=z?fe:me,ke=z?me:fe;$e&&($e.style.fontSize="80px",$e.style.color=z?"#FFD700":"#ff6b6b",$e.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),ke&&(ke.style.opacity="0.25"),setTimeout(()=>{ie&&(ie.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ie.style.zIndex="5"),setTimeout(()=>{const qe=document.getElementById("duel-shock");qe&&(qe.style.animation="shockwave .5s ease-out forwards"),ae&&(ae.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Fe;const qe=document.getElementById("pvp-duel-finale");if(!qe)return;const Ce=p.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+V+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;qe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+p[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[m+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ce+Re,qe.style.transition="opacity .45s ease",qe.style.opacity="1",qe.style.pointerEvents="auto",(Fe=document.getElementById("pvp-start-match"))==null||Fe.addEventListener("click",async()=>{const Oe=Q;await re({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:V,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function _e(u,x,y,h,v){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const z=Array.from({length:10},(q,G)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${G%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][G%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};_.innerHTML=`
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
        ${u.map(q=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[q.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${q.portrait?`<img src="${q.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(q.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(_);let T=!1;const S=()=>{T||(T=!0,_.remove(),setTimeout(()=>v(),50))};_.addEventListener("click",S),setTimeout(S,3500)}function Ae(u,x,y){var V,ie;const h=(p.gcDefs||[]).find(ae=>{var fe;return ae.name===u||((fe=ae.name)==null?void 0:fe.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",z=(h==null?void 0:h.name)||u,$=(h==null?void 0:h.effect)||((V=Ve[u])==null?void 0:V.desc)||"",T=h!=null&&h.image_url?`/icons/${h.image_url}`:null,S=((ie=Ve[u])==null?void 0:ie.icon)||"⚡",G=x===o?"Vous":p[x+"Name"]||"Adversaire",R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",R.innerHTML=`
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
          ${T?`<img src="${T}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(R);let O=!1;const Q=()=>{O||(O=!0,R.remove(),setTimeout(()=>y&&y(),50))};R.addEventListener("click",Q),setTimeout(Q,3e3)}function Ie(u,x){var R,O,Q,V;const h=(p["gcCardsFull_"+o]||[]).find(ie=>ie.id===u),v=h==null?void 0:h._gcDef,_={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",z={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",$=(v==null?void 0:v.name)||x,T=(v==null?void 0:v.effect)||((R=Ve[x])==null?void 0:R.desc)||"Carte spéciale.",S=v!=null&&v.image_url?`/icons/${v.image_url}`:null,q=((O=Ve[x])==null?void 0:O.icon)||"⚡",G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",G.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${z};background:${_};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${z}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${q}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${T}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(G),(Q=G.querySelector("#pvp-gc-back"))==null||Q.addEventListener("click",()=>G.remove()),(V=G.querySelector("#pvp-gc-use"))==null||V.addEventListener("click",()=>{G.remove(),P(u,x)})}function xe(){var h;const u=p[o+"Team"],x=Object.entries(u).flatMap(([v,_])=>(_||[]).filter(z=>!z.used).map(z=>({...z,_line:v})));if(!x.length)return;const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",y.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(v=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",z=je(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${_};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(y),(h=y.querySelector("#bp-close"))==null||h.addEventListener("click",()=>y.remove()),y.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const _=v.dataset.cid,z=x.find(T=>T.cardId===_);if(!z)return;const $=(u[z._line]||[]).find(T=>T.cardId===_);$&&($.boost=($.boost||0)+p.boostValue),y.remove(),await re({[o+"Team"]:u,boostUsed:!0})})})}function J(u=null){var O,Q;if(!(p.phase===o+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const y=p[o+"Team"],h=p["usedSubIds_"+o]||[],v=p.maxSubs||3;if(h.length>=v){f(`Maximum ${v} remplacements atteint`,"warning");return}const _=Object.entries(y).flatMap(([V,ie])=>(ie||[]).filter(ae=>ae.used).map(ae=>({...ae,_line:V}))),z=(p[o+"Subs"]||[]).filter(V=>!h.includes(V.cardId));if(!_.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!z.length){f("Aucun remplaçant disponible","warning");return}let $=Math.max(0,_.findIndex(V=>V.cardId===u));const T=((O=_[$])==null?void 0:O._line)||((Q=_[$])==null?void 0:Q.job);let S=Math.max(0,z.findIndex(V=>V.job===T)),q=!1;const G=document.createElement("div");G.id="pvp-sub-overlay",G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function R(){var ke,qe,Ce,Re,Fe,Oe;const V=_[$],ie=z[S],ae=Math.min(130,Math.round((window.innerWidth-90)/2)),fe=Math.round(ae*1.35),me=De=>`background:rgba(255,255,255,0.12);border:none;color:${De?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${De?"default":"pointer"};flex-shrink:0`;G.innerHTML=`
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
          <div>${V?Ye({...V,used:!1,boost:0},ae,fe):"<div>—</div>"}</div>
          <button id="pout-down" style="${me($>=_.length-1)}" ${$>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${_.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ke=G.querySelector("#psub-close"))==null||ke.addEventListener("click",()=>G.remove()),(qe=G.querySelector("#pout-up"))==null||qe.addEventListener("click",()=>{$>0&&($--,R())}),(Ce=G.querySelector("#pout-down"))==null||Ce.addEventListener("click",()=>{$<_.length-1&&($++,R())}),(Re=G.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{S>0&&(S--,R())}),(Fe=G.querySelector("#pin-down"))==null||Fe.addEventListener("click",()=>{S<z.length-1&&(S++,R())});const $e=(De,Ke,Ne,He)=>{const Ue=G.querySelector("#"+De);if(!Ue)return;let Je=0;Ue.addEventListener("touchstart",Ze=>{Je=Ze.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ze=>{const Qe=Ze.changedTouches[0].clientY-Je;if(Math.abs(Qe)<30)return;const nt=Ke();Qe<0&&nt<He-1?(Ne(nt+1),R()):Qe>0&&nt>0&&(Ne(nt-1),R())},{passive:!0})};$e("pin-panel",()=>S,De=>S=De,z.length),$e("pout-panel",()=>$,De=>$=De,_.length),(Oe=G.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async De=>{if(De.preventDefault(),De.stopPropagation(),q)return;q=!0;const Ke=_[$],Ne=z[S];if(!Ke||!Ne)return;const He=Ke._line,Ue=(y[He]||[]).findIndex(Qe=>Qe.cardId===Ke.cardId);if(Ue===-1){f("Erreur : joueur introuvable","error"),G.remove();return}const Je={...Ne,_line:He,position:Ke.position,used:!1,boost:0};y[He].splice(Ue,1,Je);const Ze=[...h,Ne.cardId];G.remove(),oe(Ke,Ne,async()=>{await re({[o+"Team"]:y,[m+"Team"]:p[m+"Team"],["usedSubIds_"+o]:Ze})})})}document.body.appendChild(G),R()}function oe(u,x,y){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const _=(T,S,q)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${q}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[T.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(T)?`<img src="${Pe(T)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(T.name||"").slice(0,12)}</div>
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
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[m+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(p[m+"Team"],p[m+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(x=u.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>u.remove())}function Y(){var h;const u=p.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const y=v=>{var z,$,T;if(v.type==="duel"){const S=v.isGoal,q=v.homeScored&&o==="p1"||!v.homeScored&&S&&o==="p2",G=v.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",R=S?q?"⚽ BUT !":"⚽ BUT adversaire !":(z=v.homePlayers)!=null&&z.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${G};margin-bottom:4px">
          <div style="font-size:9px;color:${G};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${R}</div>
          ${($=v.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${ot(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
          ${(T=v.aiPlayers)!=null&&T.length?`<div style="opacity:0.7">${ot(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
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
      </div>`,document.body.appendChild(x),(h=x.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>x.remove())}async function Z(){if(p.phase!==o+"-attack")return;const u=o==="p1"?"p2":"p1",x=(p.round||0)+1,y=[...p.log||[]];y.push({type:"info",text:`⏭️ ${p[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=ze(p),v=be(u),_=h||!v?"finished":u+"-attack";await re({["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:_,attacker:u,round:x,log:y}),_==="finished"&&await D(p)}async function K(){const u=p[o+"Team"],x=!["GK","DEF","MIL","ATT"].some(_=>(p[m+"Team"][_]||[]).some(z=>!z.used)),y=(p["selected_"+o]||[]).map(_=>{const z=(u[_._role]||[]).find(R=>R.cardId===_.cardId)||_,$=x&&["GK","DEF"].includes(_._role),T=u[_._role]||[],S=T.findIndex(R=>R.cardId===_.cardId),q=lt(T.length),G=S>=0?q[S]:z._col??1;return{...z,_line:_._role,_col:G,...$?{note_a:Math.max(1,Number(z.note_a)||0)}:{}}});if(!y.length)return;const h=Nt(y,p.modifiers[o]||{});ne(o,y.map(_=>_.cardId)),y.forEach(_=>{const z=(u[_._role]||[]).find($=>$.cardId===_.cardId);z&&(z.used=!0)}),p["selected_"+o]=[],ye();const v=[...p.log||[]];if(x){const _=(p[o+"Score"]||0)+1,z=y.map(G=>({name:G.name,note:je(G,G._line||"ATT"),portrait:Pe(G),job:G.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:z,homeTotal:h.total,aiTotal:0});const $=(p.round||0)+1,T=o==="p1"?"p2":"p1",S={...p,[o+"Team"]:u,[o+"Score"]:_},q=ze(S);F.add($),_e(z,_,p[m+"Score"]||0,!0,async()=>{await re({[o+"Team"]:u,[o+"Score"]:_,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:q?"finished":T+"-attack",attacker:T,round:$,log:v}),q&&await D({...p,[o+"Score"]:_})});return}v.push({type:"pending",text:`⚔️ ${p[o+"Name"]} attaque (${h.total})`}),await re({[o+"Team"]:u,[m+"Team"]:p[m+"Team"],pendingAttack:{...h,players:y,side:o},["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},phase:m+"-defense",log:v})}async function se(){const u=p[o+"Team"],x=(p["selected_"+o]||[]).map(V=>{const ie=(u[V._role]||[]).find(ke=>ke.cardId===V.cardId)||V,ae=u[V._role]||[],fe=ae.findIndex(ke=>ke.cardId===V.cardId),me=lt(ae.length),$e=fe>=0?me[fe]:ie._col??1;return{...ie,_line:V._role,_col:$e}}),y=Rt(x,p.modifiers[o]||{});ne(o,x.map(V=>V.cardId)),x.forEach(V=>{const ie=(u[V._role]||[]).find(ae=>ae.cardId===V.cardId);ie&&(ie.used=!0)}),p["selected_"+o]=[],ye();const h=Ot(p.pendingAttack.total,y.total,p.modifiers[o]||{}),v=p.pendingAttack.side,_=h==="attack"||(h==null?void 0:h.goal),z=v==="p1"?"p2":"p1",$=(p.round||0)+1,T=(p.pendingAttack.players||[]).map(V=>({name:V.name,note:je(V,V._line||"ATT"),portrait:Pe(V),job:V.job})),S=[...p.log||[]];S.push({type:"duel",isGoal:_,homeScored:_&&v===o,text:_?`⚽ BUT de ${p[v+"Name"]} ! (${p.pendingAttack.total} vs ${y.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${y.total})`,homePlayers:T,aiPlayers:x.map(V=>({name:V.name,note:je(V,V._line||"DEF"),portrait:Pe(V),job:V.job})),homeTotal:p.pendingAttack.total,aiTotal:y.total});const q=_?(p[v+"Score"]||0)+1:p[v+"Score"]||0,G={...p,[o+"Team"]:u,[v+"Score"]:q},R=ze(G),O=R?"finished":z+"-attack",Q=async()=>{await re({[o+"Team"]:u,[m+"Team"]:p[m+"Team"],[v+"Score"]:q,["selected_"+o]:[],modifiers:{...p.modifiers,[o]:{}},pendingAttack:null,phase:O,attacker:z,round:$,log:S}),(O==="finished"||R)&&await D({...p,[v+"Score"]:q})};if(_){const V=v===o,ie=V?q:p[o+"Score"]||0,ae=V?p[m+"Score"]||0:q;F.add($),_e(T,ie,ae,V,Q)}else await Q()}function he(u){return["MIL","ATT"].some(x=>(u[x]||[]).some(y=>!y.used))}function Le(u){return["GK","DEF","MIL","ATT"].some(x=>(u[x]||[]).some(y=>!y.used))}function Me(u){return Le(u)&&!he(u)}function be(u){const x=p[u+"Team"],y=p[(u==="p1"?"p2":"p1")+"Team"];return!!(he(x)||!Le(y)&&Me(x))}function ze(u){const x=["MIL","ATT"].some(S=>(u.p1Team[S]||[]).some(q=>!q.used)),y=["MIL","ATT"].some(S=>(u.p2Team[S]||[]).some(q=>!q.used)),h=Le(u.p1Team),v=Le(u.p2Team);return!x&&!(!v&&h)&&(!y&&!(!h&&v))}function M(u){const x=u.p1Score||0,y=u.p2Score||0;return x===y?null:x>y?A.home_id:A.away_id}async function D(u){try{const x=M(u),y=x?A.home_id===x?A.away_id:A.home_id:null,h=u.p1Score||0,v=u.p2Score||0;await k.from("matches").update({status:"finished",winner_id:x,home_score:h,away_score:v}).eq("id",i);const{data:_}=await k.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(_){await k.from("mini_league_matches").update({home_score:h,away_score:v,status:"finished"}).eq("id",_.id);const{data:z}=await k.from("mini_league_matches").select("id, status").eq("league_id",_.league_id).eq("matchday",_.matchday);if((z||[]).every(T=>T.status==="finished"||T.status==="bye")){const{data:T}=await k.from("mini_leagues").select("current_day,total_days").eq("id",_.league_id).single();if(T){const S=(T.current_day||0)+1,q=S>(T.total_days||0);await k.from("mini_leagues").update({current_day:q?T.total_days:S,status:q?"finished":"active"}).eq("id",_.league_id)}}}x&&y&&ki(x,y).catch(()=>{})}catch(x){console.error("[ML] finishMatch:",x)}}function w(){var v;if(I&&document.getElementById("pvp-end-overlay"))return;I=!0;const u=p[o+"Score"],x=p[m+"Score"],y=u>x,h=u===x;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${y?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${y?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{k.removeChannel(de)}catch{}We(e),c("mini-league",n?{openLeagueId:n}:{})})}ye()}const rr="/",ar=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function sr(e,t,i){let s=0;const l=document.createElement("div");l.id="tutorial-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const d=()=>{var o,m,b;const c=t[s],f=s===t.length-1,n=Math.round((s+1)/t.length*100);l.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${n}%;background:${c.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${c.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${c.title}</div>
          <div style="font-size:11px;color:#aaa">${s+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${c.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${rr}icons/${c.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${c.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${c.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${s>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${f?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${c.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${f?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,l.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),l.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),l.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(o=l.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{s--,d()}),(m=l.querySelector("#tuto-next"))==null||m.addEventListener("click",()=>{f?a():(s++,d())}),(b=l.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{l.remove(),e!=null&&e.id&&await k.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(l),d()}async function dr(e,t,i){if(!e||e.tutorial_done)return;let s=[];const{data:l,error:d}=await k.rpc("get_tutorial_steps");if(!d&&(l==null?void 0:l.length)>0)s=l,console.log(`[Tutorial] RPC OK → ${s.length} étapes`);else{const{data:c,error:f}=await k.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!f&&(c==null?void 0:c.length)>0?(s=c,console.log(`[Tutorial] Direct OK → ${s.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${d==null?void 0:d.message}, Direct: ${f==null?void 0:f.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=s.length>0?s.map(c=>({emoji:c.emoji,title:c.title,color:c.color,content:c.content,image_url:c.image_url||null})):ar;sr(e,a,()=>t("boosters"))}const lr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}function Hi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Wt(e,t){const s=t?lr[t]||"#bbb":"#d0d0d0",l=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${s};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${l}</div>`}function Ui(e){const i=Zt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Ki(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function cr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Ai(e,t)}async function Ai(e,t){const{state:i,toast:s}=t,{data:l}=await k.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:d}=await k.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),a=(l||[]).filter(r=>r.seller_id!==i.profile.id),c=d||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${a.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
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
  </div>`;let f="buy";const n=()=>{var r,p,I,L,B,H,C;return{name:(((r=document.getElementById("flt-name"))==null?void 0:r.value)||"").toLowerCase().trim(),club:(((p=document.getElementById("flt-club"))==null?void 0:p.value)||"").toLowerCase().trim(),country:(((I=document.getElementById("flt-country"))==null?void 0:I.value)||"").toLowerCase().trim(),job:((L=document.getElementById("flt-job"))==null?void 0:L.value)||"",rarity:((B=document.getElementById("flt-rarity"))==null?void 0:B.value)||"",note1:parseInt((H=document.getElementById("flt-note1"))==null?void 0:H.value)||0,note2:parseInt((C=document.getElementById("flt-note2"))==null?void 0:C.value)||0}};function o(r){const p=n();return r.filter(I=>{var W,de;const L=(W=I.card)==null?void 0:W.player;if(!L)return!1;const B=`${L.firstname} ${L.surname_encoded}`.toLowerCase(),H=(((de=L.clubs)==null?void 0:de.encoded_name)||"").toLowerCase(),C=(L.country_code||"").toLowerCase(),F=Et(L,L.job),j=L.job2?Et(L,L.job2):0;return!(p.name&&!B.includes(p.name)||p.club&&!H.includes(p.club)||p.country&&!C.includes(p.country)||p.job&&L.job!==p.job||p.rarity&&L.rarity!==p.rarity||p.note1&&F<p.note1||p.note2&&j<p.note2)})}function m(r){var C,F,j,W;const p=(C=r.card)==null?void 0:C.player;if(!p)return"";const I=((F=r.card)==null?void 0:F.evolution_bonus)||0,L=Et(p,p.job,I),B=p.job2?Et(p,p.job2,I):0,H=(i.profile.credits||0)>=r.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Hi(p.rarity)}
      ${Wt(L,p.job)}
      ${Wt(B,p.job2||null)}
      ${Ui(p.country_code)}
      ${Ki((j=p.clubs)==null?void 0:j.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((W=r.seller)==null?void 0:W.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${r.id}" ${H?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${H?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function b(r){var C,F,j,W;const p=(C=r.card)==null?void 0:C.player;if(!p)return"";const I=((F=r.card)==null?void 0:F.evolution_bonus)||0,L=Et(p,p.job,I),B=p.job2?Et(p,p.job2,I):0,H=r.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${H?"opacity:0.7":""}">
      ${Hi(p.rarity)}
      ${Wt(L,p.job)}
      ${Wt(B,p.job2||null)}
      ${Ui(p.country_code)}
      ${Ki((j=p.clubs)==null?void 0:j.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:${H?"#22c55e":"#999"};margin-top:1px">
          ${H?`✅ Vendu à ${((W=r.buyer)==null?void 0:W.pseudo)||"—"} · ${r.sold_at?new Date(r.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(r.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        ${H?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${r.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function g(){const r=document.getElementById("mkt-content"),p=document.getElementById("mkt-filters");if(r){if(p.style.display=f==="buy"?"flex":"none",f==="buy"){const I=o(a);r.innerHTML=I.length?I.map(m).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const I=c.filter(B=>B.status==="active").sort((B,H)=>new Date(H.listed_at)-new Date(B.listed_at)),L=c.filter(B=>B.status==="sold").sort((B,H)=>new Date(H.sold_at||H.listed_at)-new Date(B.sold_at||B.listed_at));r.innerHTML=(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${I.length})</div>`+I.map(b).join(""):"")+(L.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${L.length})</div>`+L.map(b).join(""):"")+(!I.length&&!L.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}r.querySelectorAll("[data-buy]").forEach(I=>I.addEventListener("click",()=>pr(I.dataset.buy,a,e,t))),r.querySelectorAll("[data-cancel]").forEach(I=>I.addEventListener("click",()=>fr(I.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{f=r.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(p=>{const I=p===r;p.style.background=I?"var(--green)":"#fff",p.style.color=I?"#fff":"var(--gray-600)",p.style.borderColor=I?"var(--green)":"var(--gray-200)"}),g()})});let A;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(r=>{var p;(p=document.getElementById(r))==null||p.addEventListener("input",()=>{clearTimeout(A),A=setTimeout(g,250)})}),g()}async function pr(e,t,i,s){const{state:l,toast:d,refreshProfile:a}=s,c=t.find(o=>o.id===e);if(!c)return;const f=c.price;if((l.profile.credits||0)<f){d("Crédits insuffisants","error");return}ur(c,async()=>{const{error:o}=await k.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:l.profile.id});if(o){d("Erreur achat : "+o.message,"error");return}await a();const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),d("✅ Carte achetée !","success"),await Ai(i,s)})}function ur(e,t){var a;const i=(a=e.card)==null?void 0:a.player,s=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",l.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${s} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(l);const d=c=>{l.remove(),c&&t()};l.querySelector("#buy-cancel").addEventListener("click",()=>d(!1)),l.querySelector("#buy-ok").addEventListener("click",()=>d(!0)),l.addEventListener("click",c=>{c.target===l&&d(!1)})}async function fr(e,t,i){const{toast:s}=i,{data:l}=await k.from("market_listings").select("card_id").eq("id",e).single();if(await k.from("market_listings").update({status:"cancelled"}).eq("id",e),l!=null&&l.card_id){const{count:d}=await k.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",l.card_id).eq("status","active");d||await k.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",l.card_id)}s("Annonce retirée","success"),Ai(t,i)}async function gr(e,{state:t,navigate:i,toast:s}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await k.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function mr(e,{state:t,navigate:i,toast:s}){const l=t.profile;if(!l)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await k.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${l.id},away_id.eq.${l.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},c=(d||[]).filter(o=>o.status==="finished"),f=(d||[]).filter(o=>o.status==="in_progress");function n(o){const m=o.home_id===l.id;m?o.home_score:o.away_score,m?o.away_score:o.home_score;const b=o.winner_id===l.id,g=o.home_score===o.away_score&&o.status==="finished",A=o.status!=="finished"?"…":g?"N":b?"V":"D",r=o.status!=="finished"||g?"#888":b?"#1A6B3C":"#c0392b";let p=a[o.mode]||o.mode;o.away_id===null&&!p.startsWith("IA")&&(p="IA");const L=o.home_id===l.id?o.away:o.home;let B;o.away_id===null?B=p:L?B=`${L.club_name||L.pseudo} (${L.pseudo})`:B="Adversaire";let H="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(H=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const C=new Date(o.created_at),F=C.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+C.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),j=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${B}${H}</div>
        <div style="font-size:11px;color:var(--gray-600)">${p} · ${F}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${j}</span>
        <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${A}</span>
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

      ${c.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${c.map(n).join("")}
        </div>`:""}

      ${(d||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Ao(So);const Ge={user:null,profile:null,page:"home",params:{}};function Tt(e,t="info",i=3e3){const s=document.getElementById("toast");s&&(s.textContent=e,s.className=`show ${t}`,clearTimeout(s._t),s._t=setTimeout(()=>{s.className=""},i))}function xr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function bi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ct(){if(!Ge.user)return;const{data:e}=await k.from("users").select("*").eq("id",Ge.user.id).single();e&&(Ge.profile=e)}function Ft(e,t={}){Ge.page=e,Ge.params=t,Eo()}async function Eo(){var s,l,d,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===Ge.page)});const t=document.getElementById("nav-credits");t&&Ge.profile&&(t.textContent=`💰 ${(Ge.profile.credits||0).toLocaleString("fr")}`);const i={state:Ge,navigate:Ft,toast:Tt,openModal:xr,closeModal:bi,refreshProfile:Ct};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ge.page){case"home":await ji(e,i);break;case"collection":await Jo(e,i);break;case"decks":await ui(e,i);break;case"boosters":await pn(e,i);break;case"match":{const c=Ge.params&&Ge.params.matchMode||"vs_ai_easy";c==="random"?await vo(e,i):c==="friend"?await Rn(e,i,(s=Ge.params)==null?void 0:s.friendId,(l=Ge.params)==null?void 0:l.friendName):c==="mini-league"?await Oi(e,i,(d=Ge.params)==null?void 0:d.mlMatchId,(a=Ge.params)==null?void 0:a.leagueId):await $n(e,i);break}case"market":await cr(e,i);break;case"rankings":await gr(e,i);break;case"matches":await mr(e,i);break;case"friends":await Bo(e,i);break;case"mini-league":await Un(e,i);break;case"match-mini-league":{const c=Ge.params||{};await Oi(e,i,c.mlMatchId,c.leagueId);break}default:await ji(e,i)}}function yr(){var s;const e=document.getElementById("app"),t=Ge.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(l=>{l.addEventListener("click",d=>{d.preventDefault(),Ft(l.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ft("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ft("boosters")),(s=document.getElementById("journal-btn"))==null||s.addEventListener("click",()=>br())}async function br(){const{data:e}=await k.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(s=>{const l=new Date(s.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",s=>{s.target===t&&t.remove()})}async function hr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&bi()}),document.getElementById("modal-close").addEventListener("click",bi);const{data:{session:e}}=await k.auth.getSession();if(!e){Vi(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt});return}Ge.user=e.user,await Ct(),Vi();try{const{data:i}=await k.from("formation_links_overrides").select("formation, links"),s={};(i||[]).forEach(l=>{s[l.formation]=l.links}),zo(s)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Ge.profile){Io(document.getElementById("app"),{state:Ge,navigate:async()=>{await Ct(),ci()},toast:Tt,refreshProfile:Ct});return}const t=Array.isArray(Ge.profile.pending_boosters)?Ge.profile.pending_boosters:[];if(!Ge.profile.onboarding_done&&t.length>0){hn(document.getElementById("app"),{state:Ge,navigate:()=>ci(),toast:Tt,refreshProfile:Ct});return}ci(),setTimeout(()=>dr(Ge.profile,Ft,Tt),800),k.auth.onAuthStateChange(async(i,s)=>{i==="SIGNED_OUT"&&(Ge.user=null,Ge.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt}))})}function vr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function si(){const e=document.getElementById("app");e&&(e.style.height=vr()+"px")}window.addEventListener("resize",si);window.addEventListener("orientationchange",()=>setTimeout(si,150));window.visualViewport&&window.visualViewport.addEventListener("resize",si);function ci(){const e=()=>{var i;(i=Ge.user)!=null&&i.id&&k.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ge.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",si(),yr(),Eo()}function Vi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function To(e){var s;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(s=document.getElementById("boot-retry"))==null||s.addEventListener("click",()=>window.location.reload())}hr().catch(e=>{console.error("Échec du démarrage:",e),To()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&To("Le serveur met trop de temps à répondre.")},12e3);
