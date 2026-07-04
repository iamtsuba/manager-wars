const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-Dnttc-Cp.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as E,F as hi,h as Rt,j as Yi,l as at,i as Ao,k as So,b as zo}from"./formation-links-Dnttc-Cp.js";const Lo="/";function Li(e,{navigate:t,toast:i}){let a="login";const l=()=>{var s,c,u,o,n,m;const d=a==="login";e.innerHTML=`
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
    </style>`,(s=document.getElementById("tab-login-btn"))==null||s.addEventListener("click",()=>{a="login",l()}),(c=document.getElementById("tab-reg-btn"))==null||c.addEventListener("click",()=>{a="register",l()}),d?((u=document.getElementById("login-password"))==null||u.addEventListener("keydown",b=>{var g;b.key==="Enter"&&((g=document.getElementById("login-btn"))==null||g.click())}),(o=document.getElementById("login-btn"))==null||o.addEventListener("click",async()=>{const b=document.getElementById("login-email").value.trim(),g=document.getElementById("login-password").value,w=document.getElementById("login-error");if(w.textContent="",!b||!g){w.textContent="Remplissez tous les champs.";return}const r=document.getElementById("login-btn");r.textContent="⏳ Connexion…",r.disabled=!0;const{error:p}=await E.auth.signInWithPassword({email:b,password:g});if(r.textContent="⚽ Se connecter",r.disabled=!1,p){w.textContent=p.message.includes("Invalid")?"Email ou mot de passe incorrect.":p.message;return}window.location.reload()})):((n=document.getElementById("reg-confirm"))==null||n.addEventListener("keydown",b=>{var g;b.key==="Enter"&&((g=document.getElementById("reg-btn"))==null||g.click())}),(m=document.getElementById("reg-btn"))==null||m.addEventListener("click",async()=>{const b=document.getElementById("reg-email").value.trim(),g=document.getElementById("reg-password").value,w=document.getElementById("reg-confirm").value,r=document.getElementById("reg-error");if(r.textContent="",!b||!g||!w){r.textContent="Remplissez tous les champs.";return}if(g.length<6){r.textContent="Mot de passe trop court (min. 6 caractères).";return}if(g!==w){r.textContent="Les mots de passe ne correspondent pas.";return}const p=document.getElementById("reg-btn");p.textContent="⏳ Création…",p.disabled=!0;const{error:L}=await E.auth.signUp({email:b,password:g});if(p.textContent="🚀 Créer mon compte",p.disabled=!1,L){r.textContent=L.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),a="login",l(),setTimeout(()=>{const A=document.getElementById("login-email");A&&(A.value=b)},50)}))};l()}function Io(e,{state:t,navigate:i,toast:a,refreshProfile:l}){let d="#1A6B3C",s="#D4A017";e.innerHTML=`
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
  `;function c(){var w;const o=document.getElementById("logo-preview"),n=document.getElementById("logo-initials"),m=((w=document.getElementById("setup-club"))==null?void 0:w.value)||"MW",b=m.trim().split(" ").filter(Boolean),g=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():m.slice(0,2).toUpperCase();o&&(o.style.background=s,o.style.borderColor=d),n&&(n.textContent=g,n.style.color=d)}document.getElementById("color1").addEventListener("input",o=>{d=o.target.value,document.getElementById("swatch1").style.background=d,c()}),document.getElementById("color2").addEventListener("input",o=>{s=o.target.value,document.getElementById("swatch2").style.background=s,c()});function u(o){document.querySelectorAll(".setup-step").forEach(n=>n.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&c()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("step1-error");if(n.textContent="",o.length<3){n.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:m}=await E.from("users").select("id").eq("pseudo",o).maybeSingle();if(m){n.textContent="Ce pseudo est déjà pris.";return}u(2)}),document.getElementById("step2-back").addEventListener("click",()=>u(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),n=document.getElementById("step2-error");if(n.textContent="",o.length<2){n.textContent="Nom trop court (min. 2 caractères).";return}const{data:m}=await E.from("users").select("id").eq("club_name",o).maybeSingle();if(m){n.textContent="Ce nom de club est déjà pris.";return}u(3)}),document.getElementById("step3-back").addEventListener("click",()=>u(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("setup-club").value.trim(),m=document.getElementById("step3-error"),b=document.getElementById("step3-finish");m.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:g}=await E.from("users").insert({id:t.user.id,pseudo:o,club_name:n,club_color1:d,club_color2:s,credits:1e4});if(g)throw g;await Mo(t.user.id),await l(),a(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(g){m.textContent=g.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Mo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await E.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const jo="modulepreload",Co=function(e){return"/"+e},Ii={},oi=function(t,i,a){let l=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=Promise.allSettled(i.map(u=>{if(u=Co(u),u in Ii)return;Ii[u]=!0;const o=u.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${n}`))return;const m=document.createElement("link");if(m.rel=o?"stylesheet":jo,o||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),o)return new Promise((b,g)=>{m.addEventListener("load",b),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function d(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return l.then(s=>{for(const c of s||[])c.status==="rejected"&&d(c.reason);return t().catch(d)})},Gt="#1A6B3C",Pt="#cc2222",qo="#D4A017",Mi="#888";async function Bo(e,t){const{state:i,toast:a}=t;e.innerHTML=`
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
    </div>`,await Wi(i,a,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Do(i,a)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ji(i,a,null,t))}async function Wi(e,t,i={}){const{navigate:a}=i,l=e.user.id,{data:d,error:s}=await E.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${l},addressee_id.eq.${l}`),{count:c}=await E.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",l).eq("status","pending"),u=document.getElementById("pending-badge");u&&(c>0?(u.style.display="flex",u.textContent=c):u.style.display="none");const o=document.getElementById("friends-list");if(!o)return;if(s){console.error("[Friends] Erreur:",s),o.innerHTML=`<div style="color:${Pt};text-align:center;padding:16px">Erreur chargement : ${s.message}</div>`;return}const n=(d||[]).map(g=>g.requester_id===l?g.addressee_id:g.requester_id);let m={};if(n.length){const{data:g}=await E.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",n);(g||[]).forEach(w=>{m[w.id]=w})}const b=(d||[]).map(g=>({friendshipId:g.id,friend:m[g.requester_id===l?g.addressee_id:g.requester_id]||{pseudo:"?"}}));if(!b.length){o.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}o.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:g,friend:w})=>Fo(w,g)).join("")}
    </div>`,o.querySelectorAll("[data-stats]").forEach(g=>{g.addEventListener("click",()=>Go(e,g.dataset.stats,g.dataset.friendName))}),o.querySelectorAll("[data-match]").forEach(g=>{g.addEventListener("click",()=>{const w=g.dataset.friendId,r=g.dataset.friendName;console.log("[Friends] clic match",{fid:w,fname:r,hasNavigate:typeof a}),typeof a=="function"?a("match",{matchMode:"friend",friendId:w,friendName:r}):t("Erreur navigation","error")})})}function Fo(e,t){const i=e.club_name||e.pseudo||"?",a=e.pseudo||"",l=(a||i).slice(0,2).toUpperCase(),d=e.club_color2||Gt,s=e.club_color1||"#ffffff",c=e.last_seen_at?new Date(e.last_seen_at):null,u=c&&Date.now()-c.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${d};border:2.5px solid ${s};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${s}">
          ${l}
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
    ${wi()}`,document.body.appendChild(i);const a=i.querySelector("#friend-pseudo-input"),l=i.querySelector("#add-friend-error"),d=()=>i.remove();a.focus(),i.querySelector("#add-cancel").addEventListener("click",d),i.addEventListener("click",s=>{s.target===i&&d()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const s=a.value.trim();if(!s){l.textContent="Entre un pseudo";return}l.textContent="";const{data:c}=await E.from("users").select("id, pseudo").ilike("pseudo",s).single();if(!c){l.textContent="Utilisateur introuvable";return}if(c.id===e.user.id){l.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:u}=await E.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${c.id}),and(requester_id.eq.${c.id},addressee_id.eq.${e.user.id})`).single();if(u){const n=u.status==="accepted"?"Vous êtes déjà amis !":u.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";l.textContent=n;return}const{error:o}=await E.from("friendships").insert({requester_id:e.user.id,addressee_id:c.id,status:"pending"});if(o){l.textContent="Erreur : "+o.message;return}d(),t(`✅ Demande envoyée à ${c.pseudo} !`,"success")})}async function Ji(e,t,i=null,a={}){const l=e.user.id,{data:d}=await E.from("friendships").select("id, requester_id").eq("addressee_id",l).eq("status","pending").order("created_at",{ascending:!1}),s=(d||[]).map(b=>b.requester_id);let c={};if(s.length){const{data:b}=await E.from("users").select("id, pseudo, club_name").in("id",s);(b||[]).forEach(g=>{c[g.id]=g})}const u=(d||[]).map(b=>({...b,requester:c[b.requester_id]||{pseudo:"?"}})),o=vi(),n=u||[];o.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${n.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${n.map(b=>{var g,w,r;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((g=b.requester)==null?void 0:g.club_name)||((w=b.requester)==null?void 0:w.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((r=b.requester)==null?void 0:r.pseudo)||""})</span>
                </div>
                <button data-accept="${b.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Gt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${b.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Pt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${wi()}`,document.body.appendChild(o);const m=()=>o.remove();o.querySelector("#pending-close").addEventListener("click",m),o.addEventListener("click",b=>{b.target===o&&m()}),o.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:g}=await E.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(g){t("Erreur : "+g.message,"error");return}b.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Wi(e,t,a),i&&i()})}),o.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await E.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Go(e,t,i){const a=e.user.id,[l,d]=[a,t].sort(),s=a===l,{data:c}=await E.from("friend_match_stats").select("*").eq("player1_id",l).eq("player2_id",d).single(),u=e.profile.club_name||e.profile.pseudo||"Moi",o=c||{},n=s?o.wins_p1||0:o.wins_p2||0,m=s?o.wins_p2||0:o.wins_p1||0,b=o.draws||0,g=s?o.goals_p1||0:o.goals_p2||0,w=s?o.goals_p2||0:o.goals_p1||0,r=s?o.gc_used_p1||0:o.gc_used_p2||0,p=s?o.gc_used_p2||0:o.gc_used_p1||0,L=o.matches_total||0,A=(N,q,B,M=Gt,H=Pt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${M}">${q}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${N}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${H}">${B}</div>
    </div>`,j=vi();j.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${L===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${A("Victoires",n,m)}
        ${A("Nuls",b,b,Mi,Mi)}
        ${A("Défaites",m,n)}
        ${A("Buts marqués",g,w)}
        ${A("Buts encaissés",w,g,Pt,Gt)}
        ${A("GC utilisés ⚡",r,p,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${L} match${L>1?"s":""} joué${L>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${wi()}`,document.body.appendChild(j),j.querySelector("#stats-close").addEventListener("click",()=>j.remove()),j.addEventListener("click",N=>{N.target===j&&j.remove()})}function vi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function wi(){return`
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
    </style>`}async function Xi({player1Id:e,player2Id:t,score1:i,score2:a,gc1:l,gc2:d}){const[s,c]=[e,t].sort(),u=e!==s,o=u?a:i,n=u?i:a,m=u?d:l,b=u?l:d,g=o>n?1:0,w=n>o?1:0,r=o===n?1:0,{data:p}=await E.from("friend_match_stats").select("*").eq("player1_id",s).eq("player2_id",c).single();p?await E.from("friend_match_stats").update({wins_p1:p.wins_p1+g,wins_p2:p.wins_p2+w,draws:p.draws+r,goals_p1:p.goals_p1+o,goals_p2:p.goals_p2+n,gc_used_p1:p.gc_used_p1+m,gc_used_p2:p.gc_used_p2+b,matches_total:p.matches_total+1}).eq("player1_id",s).eq("player2_id",c):await E.from("friend_match_stats").insert({player1_id:s,player2_id:c,wins_p1:g,wins_p2:w,draws:r,goals_p1:o,goals_p2:n,gc_used_p1:m,gc_used_p2:b,matches_total:1})}const Po="2026.07.05-0133";async function ji(e,{state:t,navigate:i,toast:a}){var d,s;const l=t.profile;l&&(e.innerHTML=`
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
  `,e.querySelectorAll("[data-nav]").forEach(c=>{c.addEventListener("click",u=>{u.preventDefault(),i(c.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>i("rankings")),(s=document.getElementById("nav-matches"))==null||s.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(c=>{c.addEventListener("click",()=>{c.classList.add("tapped"),setTimeout(()=>c.classList.remove("tapped"),200);const u=c.dataset.action;if(u==="match-ai"){Ho(i);return}if(u==="match-random"){i("match",{matchMode:"random"});return}if(u==="match-friend"){i("friends");return}if(u==="mini-league"){i("mini-league");return}if(u==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}a("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var N,q,B,M,H,oe;const c=((N=window.visualViewport)==null?void 0:N.height)||window.innerHeight,u=((q=document.querySelector(".top-nav"))==null?void 0:q.offsetHeight)||56,o=((B=document.querySelector(".bottom-nav"))==null?void 0:B.offsetHeight)||60,n=((M=e.querySelector(".hero-compact"))==null?void 0:M.offsetHeight)||52,m=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const b=((oe=(H=e.querySelector("#logout-btn"))==null?void 0:H.closest("div"))==null?void 0:oe.offsetHeight)||44,g=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((ne,ce)=>{var de;return ne+(((de=document.getElementById(ce))==null?void 0:de.offsetHeight)||0)},0),w=14*5,r=c-u-o-n-b-g-w,p=Math.max(80,Math.round(r*.28)),L=Math.max(160,Math.round(r*.72)),A=Math.floor((L-10)/2);m&&(m.style.minHeight=m.style.maxHeight=p+"px"),e.querySelectorAll(".play-grid .play-card").forEach(ne=>{ne.style.minHeight=ne.style.height=A+"px"});const j=Math.round(A*.55);e.querySelectorAll(".play-card .play-icon").forEach(ne=>{ne.style.height=j+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),window.location.reload()}),Qi(t,a),Oo(t,a,i),Zi(t,a,i))}async function Zi(e,t,i){const a=document.getElementById("ongoing-match-banner");if(!a)return;const l=e.profile.id,{data:d}=await E.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${l},away_id.eq.${l}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){a.innerHTML="";return}const s=d.map(u=>u.home_id===l?u.away_id:u.home_id).filter(Boolean);let c={};if(s.length){const{data:u}=await E.from("users").select("id, pseudo, club_name").in("id",s);(u||[]).forEach(o=>{c[o.id]=o.club_name||o.pseudo})}a.innerHTML=d.map(u=>{const o=u.home_id===l?u.away_id:u.home_id,n=c[o]||"Adversaire",m=u.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${m?"🏆 Mini League":u.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${n}</div>
        </div>
        <button data-resume="${u.id}" data-mini="${m?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${u.id}" data-opp="${o}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),a.querySelectorAll("[data-resume]").forEach(u=>{u.addEventListener("click",async()=>{const o=document.getElementById("page-content")||document.getElementById("app");if(u.dataset.mini==="1"){const{data:n}=await E.from("mini_league_matches").select("id, league_id").eq("match_id",u.dataset.resume).single();n?i("match-mini-league",{mlMatchId:n.id,leagueId:n.league_id}):i("mini-league")}else{const{resumePvpMatch:n}=await oi(async()=>{const{resumePvpMatch:m}=await Promise.resolve().then(()=>Hn);return{resumePvpMatch:m}},void 0);n(o,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},u.dataset.resume)}})}),a.querySelectorAll("[data-abandon]").forEach(u=>{u.addEventListener("click",()=>{Ro(async()=>{await No(u.dataset.abandon,u.dataset.opp,l),t("Match abandonné (défaite 3-0)","info"),Zi(e,t,i)})})})}async function No(e,t,i){const{data:a}=await E.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!a)return;const l=a.home_id===i,d=l?0:3,s=l?3:0,c=a.game_state||{};c.p1Score=d,c.p2Score=s,c.phase="finished",c.forfeit=!0,await E.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:s,game_state:c}).eq("id",e)}function Ro(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Oo(e,t,i){var c,u,o,n;const a=document.getElementById("match-invite-banner");if(!a)return;const{data:l}=await E.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){a.innerHTML="";return}const d=((c=l.inviter)==null?void 0:c.club_name)||((u=l.inviter)==null?void 0:u.pseudo)||"?",s=l.inviter_id;a.innerHTML=`
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
    </div>`,(o=document.getElementById("match-inv-accept"))==null||o.addEventListener("click",()=>{a.innerHTML="",i("match",{matchMode:"friend",friendId:s,friendName:d})}),(n=document.getElementById("match-inv-decline"))==null||n.addEventListener("click",async()=>{await E.from("friend_match_invites").update({status:"declined"}).eq("id",l.id),a.innerHTML="",t("Invitation refusée","info")})}async function Qi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:a,error:l}=await E.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(l||!(a!=null&&a.length)){i.innerHTML="";return}const d=a.length,s=a.slice(0,2).map(u=>{var o;return((o=u.requester)==null?void 0:o.pseudo)||"?"}).join(", "),c=d>2?` +${d-2}`:"";i.innerHTML=`
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
  `,document.body.appendChild(i);const a=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",a),i.addEventListener("click",l=>{l.target===i&&a()}),i.querySelectorAll("[data-mode]").forEach(l=>{l.addEventListener("click",()=>{a(),e("match",{matchMode:l.dataset.mode})})})}const Re={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ie(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Ci=["ATT","MIL","DEF","GK"];function eo(e){let t=0;const i=e.length;for(let a=0;a<i;a++)for(let l=a+1;l<i;l++){const d=e[a],s=e[l];if(!d||!s)continue;const c=d._col!=null&&s._col!=null&&d._col===s._col,u=d._col!=null&&s._col!=null&&Math.abs(d._col-s._col)===1,o=Ci.indexOf(d._line||d.job),n=Ci.indexOf(s._line||s.job),m=Math.abs(o-n)===1;if(!((d._line||d.job)===(s._line||s.job)&&u||c&&m))continue;const w=d.country_code&&s.country_code&&d.country_code===s.country_code,r=d.club_id&&s.club_id&&d.club_id===s.club_id;w&&r?t+=2:(w||r)&&(t+=1)}return t}function Ot(e,t={}){const i=e.reduce((d,s)=>{const c=s._line||s.job,u=s.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;return d+(Number(c==="MIL"?s.note_m:s.note_a)||0)+(s.boost||0)+u},0),a=eo(e);let l=i+a;return t.doubleAttack&&(l*=2),t.stolenNote&&(l-=t.stolenNote),{base:i,links:a,total:Math.max(0,l)}}function Ht(e,t={}){const i=e.reduce((d,s)=>{const c=s._line||s.job;let u=0;c==="GK"?u=Number(s.note_g)||0:c==="MIL"?u=Number(s.note_m)||0:u=Number(s.note_d)||0;const o=s.stadiumBonus&&(c==="GK"||c==="DEF"||c==="MIL")?10:0;return d+u+(s.boost||0)+o},0),a=eo(e);let l=i+a;return t.stolenNote&&(l-=t.stolenNote),{base:i,links:a,total:Math.max(0,l)}}function Ut(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function to(e,t,i="easy"){const a=e.filter(s=>!s.used);if(!a.length)return[];const l=[...a].sort((s,c)=>{const u=t==="attack"?Ie(s,"ATT"):s._line==="GK"?Ie(s,"GK"):Ie(s,"DEF");return(t==="attack"?Ie(c,"ATT"):c._line==="GK"?Ie(c,"GK"):Ie(c,"DEF"))-u});let d=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return l.slice(0,Math.min(d,l.length,3))}function Uo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const io={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function _i(e,t){const i=e.player;if(!i)return 0;const a=i.rarity;if(a!=="pepite"&&a!=="papyte")return Number(i[t])||0;const l=$i(i),d=Number(i[t])||0;if(d<=0)return 0;const s=i.note_min??1,c=i.note_max??10,o=(e.current_note??l)-l;return Math.min(c,Math.max(s,d+o))}function $i(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function ki(e,t){!e||!t||await Promise.all([ui(e,"win"),ui(t,"loss")])}async function ui(e,t){const{data:i}=await E.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const a=i.filter(l=>{var d,s;return((d=l.player)==null?void 0:d.rarity)==="pepite"||((s=l.player)==null?void 0:s.rarity)==="papyte"});a.length&&await Promise.all(a.map(l=>{const d=io[l.player.rarity],s=t==="win"?d.win:d.loss,c=l.player.note_min??1,u=l.player.note_max??10,o=$i(l.player),n=l.current_note??o,m=Math.min(u,Math.max(c,n+s));return E.from("cards").update({current_note:m}).eq("id",l.id)}))}async function Ko(e,t){return ui(e,t)}const oo=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:io,applyOwnEvolution:Ko,currentSecondaryNote:_i,getBaseMainNote:$i,updateEvolutiveCards:ki},Symbol.toStringTag,{value:"Module"})),no={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Bt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Vt=["GK","DEF","MIL","ATT"],Vo=["Tous","GK","DEF","MIL","ATT"],Yo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function qi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Wo(e){return e.length?e.reduce((t,i)=>qi(i)>qi(t)?i:t,e[0]):e[0]}function ro(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Ei={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function ao(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function St(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function li(e,t=""){var w,r;const i=e.player;if(!i)return"";const a=i.job||"ATT",l=Bt[a],d=no[i.rarity]||"#ccc",s=i.rarity==="pepite"||i.rarity==="papyte",c=e.evolution_bonus||0,u=(s&&e.current_note!=null?e.current_note:St(i,a))+c,o=i.job2?s?_i(e,ro(i.job2)):St(i,i.job2):null,n=o!=null?o>0?o+c:o:null,m=i.job2?Bt[i.job2]:null,b=ao(i),g=Ei[i.country_code]||i.country_code||"";return`
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
            fill="white" font-family="Arial Black,Arial">${u}</text>
        </svg>
        <!-- Petite étoile poste secondaire, toujours en dessous du bandeau -->
        ${n!==null?`
        <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
          <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11"
            fill="${m}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${n}</text>
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
        ${(w=i.clubs)!=null&&w.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((r=i.clubs)==null?void 0:r.encoded_name)||"").slice(0,6)}</div>`}
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
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:u}=await E.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(c||[]).filter(V=>V.card_type==="player"&&V.player),n=(c||[]).filter(V=>V.card_type==="game_changer"),m=(c||[]).filter(V=>V.card_type==="formation"),b=(c||[]).filter(V=>V.card_type==="stadium"),{data:g}=await E.from("gc_definitions").select("name,gc_type,color,effect,image_url"),w={};(g||[]).forEach(V=>{w[V.name]=V});const{data:r}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),p={};(r||[]).forEach(V=>{p[V.id]=V}),b.forEach(V=>{V.stadium_def&&(p[V.stadium_id]=V.stadium_def)});const L=Object.keys(hi),A=Object.keys(Re),j={};o.forEach(V=>{const ee=V.player.id;j[ee]=(j[ee]||0)+1}),new Set(Object.keys(j).map(V=>String(V)));const N=new Set(m.map(V=>V.formation)),q=new Set(n.map(V=>V.gc_type));let B="player",M="Tous",H="",oe=!1;function ne(){return[...o].sort((V,ee)=>{const ge=Vt.indexOf(V.player.job),U=Vt.indexOf(ee.player.job);return ge!==U?ge-U:(V.player.surname_encoded||"").localeCompare(ee.player.surname_encoded||"")})}function ce(){return[...u||[]].sort((V,ee)=>{const ge=Vt.indexOf(V.job),U=Vt.indexOf(ee.job);return ge!==U?ge-U:(V.surname_encoded||"").localeCompare(ee.surname_encoded||"")})}function de(){return ne().filter(V=>{const ee=V.player,ge=M==="Tous"||ee.job===M,U=!H||`${ee.firstname} ${ee.surname_encoded}`.toLowerCase().includes(H);return ge&&U})}function J(){return ce().filter(V=>{const ee=M==="Tous"||V.job===M,ge=!H||`${V.firstname} ${V.surname_encoded}`.toLowerCase().includes(H);return ee&&ge})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="player"?"var(--green)":"transparent"};
        color:${B==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${o.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="formation"?"var(--green)":"transparent"};
        color:${B==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${m.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="gc"?"var(--green)":"transparent"};
        color:${B==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${B==="stadium"?"#E87722":"transparent"};
        color:${B==="stadium"?"#E87722":"var(--gray-600)"}">
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
  </div>`;function R(){const V=document.getElementById("col-filters");V&&(B==="player"?(V.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${H}">
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
              border:1.5px solid ${oe?"var(--yellow)":"var(--gray-200)"};
              background:${oe?"var(--yellow)":"#fff"};
              color:${oe?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${oe?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",ee=>{H=ee.target.value.toLowerCase(),P()}),e.querySelectorAll(".filter-btn").forEach(ee=>{ee.addEventListener("click",()=>{M=ee.dataset.job,R(),P()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{oe=!oe,R(),P()})):(V.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${oe?"var(--yellow)":"var(--gray-200)"};
              background:${oe?"var(--yellow)":"#fff"};
              color:${oe?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${oe?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{oe=!oe,R(),P()})))}function P(){const V=document.getElementById("col-grid");V&&(B==="player"?Ce(V):B==="formation"?Fe(V):B==="stadium"?ke(V):De(V))}function re(V,ee,ge,U,X){const Y=document.getElementById("col-grid"),se=document.getElementById("col-big");if(!Y||!se)return;var ve=0;function Se(){const ze=window.innerWidth>=768,he=document.getElementById("col-big"),Ae=document.getElementById("col-grid");ze&&he&&(he.style.minHeight="420px",he.style.flex="1 1 auto"),ze&&Ae&&(Ae.style.height=Math.round(310*.76+16)+"px",Ae.style.flexShrink="0",Ae.style.overflowX="auto",Ae.style.overflowY="hidden",Ae.style.alignItems="center",Ae.style.padding="8px 16px"),se.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+ee(V[ve])+"</div>";var C=se.querySelector("[data-card-id],[data-form-id],[data-gc-id]");C&&C.addEventListener("click",function(){U(V[ve])}),requestAnimationFrame(function(){var D=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!D||!se)){var _=se.clientHeight-8,T=se.clientWidth-24,f=D.offsetHeight,x=D.offsetWidth;if(f>0&&x>0&&_>40){var y=ze?2.2:1,h=Math.min(_/f,T/x,y);D.style.transform="scale("+h.toFixed(3)+")",D.style.transformOrigin="top center"}}}),Y.innerHTML=V.map(function(D,_){var T=_===ve,f="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(T?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+_+'" style="'+f+'">'+ge(D,T)+"</div>"}).join(""),Y.querySelectorAll(".col-mini-item").forEach(function(D){D.addEventListener("click",function(){ve=Number(D.dataset.idx),Se(),D.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Se()}function me(V){var ee=window.innerWidth>=768?.76:.54,ge;if(!V||V._fake){var U=V?V.player:null;if(!U)return"";ge=Bi(U)}else ge=li(V,"");return'<div style="display:inline-block;zoom:'+ee+';pointer-events:none;line-height:0">'+ge+"</div>"}function we(V,ee,ge){ee=ee||100,ge=ge||140;var U=Rt[V]||{},X={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},Y=Math.max(3,Math.round(ee*.06)),se=Object.entries(U).map(function(Se){var ze=Se[0],he=Se[1],Ae=ze.replace(/\d+$/,""),C=X[Ae]||"#888",D=Math.round(he.x*ee),_=Math.round(he.y*ge);return'<circle cx="'+D+'" cy="'+_+'" r="'+Y+'" fill="'+C+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ve=Math.max(1,Math.round(ee/50));return'<svg viewBox="0 0 '+ee+" "+ge+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+ee+'" height="'+ge+'" fill="#1A6B3C"/><rect x="'+Math.round(ee*.2)+'" y="'+Math.round(ge*.02)+'" width="'+Math.round(ee*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/><line x1="0" y1="'+Math.round(ge*.5)+'" x2="'+ee+'" y2="'+Math.round(ge*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><ellipse cx="'+Math.round(ee*.5)+'" cy="'+Math.round(ge*.5)+'" rx="'+Math.round(ee*.18)+'" ry="'+Math.round(ge*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><rect x="'+Math.round(ee*.2)+'" y="'+Math.round(ge*.82)+'" width="'+Math.round(ee*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/>'+se+"</svg>"}function xe(V,ee,ge){var U=ge>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ge+"</div>":"",X=ee?'data-form-id="'+ee.id+'"':"",Y=V.length>7?14:V.length>5?16:19,se=!!ee;return"<div "+X+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(se?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(se?"":"filter:grayscale(1);opacity:0.5")+'">'+U+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(se?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+Y+"px;font-weight:900;color:"+(se?"#1A6B3C":"#aaa")+';line-height:1">'+V+'</div></div><div style="flex:1;overflow:hidden;background:'+(se?"#1A6B3C":"#ccc")+'">'+we(V,140,220)+"</div></div>"}function be(V,ee){var ge=window.innerWidth>=768?.76:.54,U=140,X=305,Y=Math.round(X*.22),se=X-Y,ve=V.length>7?10:13,Se=we(V,U,se),ze=ee?"1.5px solid #2a7a40":"1px solid #ddd",he=ee?"":"filter:grayscale(1);opacity:0.45;",Ae=ee?"#1A6B3C":"#bbb",C="#fff";return'<div style="display:inline-block;zoom:'+ge+';line-height:0;pointer-events:none"><div style="width:'+U+"px;height:"+X+"px;border-radius:6px;border:"+ze+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+he+'"><div style="height:'+Y+"px;background:"+Ae+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ve+"px;font-weight:900;color:"+C+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(U-4)+'px">'+V+'</span></div><div style="height:'+se+'px;overflow:hidden;flex-shrink:0">'+Se+"</div></div></div>"}function Ce(V){if(oe){const ee=J();if(!ee.length){V.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ge=ee.map(U=>o.find(X=>X.player.id===U.id)||{_fake:!0,player:U,id:"fake-"+U.id});re(ge,U=>U._fake?Bi(U.player):li(U,""),U=>U._fake?me({player:U.player,id:"x",_fake:!0}):me(U),U=>{U._fake||Fi(U,o,j,t)})}else{const ee=de();if(!ee.length){V.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ge={};ee.forEach(X=>{const Y=X.player.id;ge[Y]||(ge[Y]=[]),ge[Y].push(X)});const U=Object.values(ge).map(X=>Wo(X));re(U,X=>{const Y=j[X.player.id]||1,se=Y>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${Y}</div>`:"",Se=o.filter(ze=>ze.player.id===X.player.id&&ze.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return li(X,se+Se)},X=>me(X),X=>Fi(X,o,j,t))}}function Fe(V){const ee=oe?L:[...N];if(!ee.length){V.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ge=ee.map(U=>({formation:U,card:m.find(X=>X.formation===U)||null,owned:N.has(U)}));re(ge,({formation:U,card:X,owned:Y})=>xe(U,Y?X:null,Y?m.filter(se=>se.formation===U).length:0),({formation:U,owned:X})=>be(U,X),({card:U,owned:X})=>{X&&U&&Zo(U,m,t,d)})}function De(V){const ee=Object.keys(w),ge=oe?ee.length?ee:A:[...q];if(!ge.length){V.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const U=ge.map(X=>({type:X,gc:Re[X]||{icon:"⚡",desc:""},def:w[X]||null,owned:q.has(X),card:n.find(Y=>Y.gc_type===X)||null}));re(U,({type:X,gc:Y,def:se,owned:ve,card:Se})=>{var y;const ze=ve?n.filter(h=>h.gc_type===X).length:0,he=ze>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ze}</div>`:"",Ae=(se==null?void 0:se.gc_type)==="ultra_game_changer",C={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},D={purple:"#b06ce0",light_blue:"#00d4ef"},_=C[se==null?void 0:se.color]||C.purple,T=D[se==null?void 0:se.color]||D.purple,f=(se==null?void 0:se.effect)||Y.desc||"",x=se!=null&&se.image_url?`/icons/${se.image_url}`:((y=se==null?void 0:se.club)==null?void 0:y.logo_url)||(se!=null&&se.country_code?`https://flagcdn.com/w80/${se.country_code.toLowerCase()}.png`:null);return ve&&Se?`<div data-gc-id="${Se.id}" data-gc-type="${X}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${T};background:${_};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${T}66;cursor:pointer">
          ${he}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${X.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${X}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ae?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${x?`<img src="${x}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${Y.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${f.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${X}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${Y.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:X,gc:Y,def:se,owned:ve})=>{const Se=window.innerWidth>=768?.76:.54,ze={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},he={purple:"#9b59b6",light_blue:"#00bcd4"},Ae=ze[se==null?void 0:se.color]||ze.purple,C=he[se==null?void 0:se.color]||he.purple,D=se!=null&&se.image_url?`/icons/${se.image_url}`:null;return ve?`<div style="display:inline-block;zoom:${Se};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ae};border:1px solid ${C};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${X}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${D?`<img src="${D}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${Y.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((se==null?void 0:se.effect)||Y.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Se};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${Y.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${X}</span></div></div>`},({type:X,owned:Y,def:se})=>{Y&&Xo(X,se,d)})}function ke(V){const ee="#E87722",ge="/";if(!b.length){V.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const U={};b.forEach(Y=>{const se=Y.stadium_id||"?";(U[se]=U[se]||[]).push(Y)});const X=Object.entries(U).map(([Y,se])=>({sid:Y,def:p[Y]||null,count:se.length,card:se[0]}));re(X,({def:Y,count:se})=>{var C,D;const ve=(Y==null?void 0:Y.name)||"?",Se=((C=Y==null?void 0:Y.club)==null?void 0:C.encoded_name)||(Y==null?void 0:Y.country_code)||"—",ze=Y!=null&&Y.image_url?`${ge}icons/${Y.image_url}`:((D=Y==null?void 0:Y.club)==null?void 0:D.logo_url)||(Y!=null&&Y.country_code?`https://flagcdn.com/w80/${Y.country_code.toLowerCase()}.png`:null),he=ze?`<img src="${ze}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Ae=se>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${se}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${ee},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ee}66">
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
        </div>`},({def:Y,count:se})=>{var C,D;const ve=window.innerWidth>=768?.76:.54,Se=(Y==null?void 0:Y.name)||"?",ze=((C=Y==null?void 0:Y.club)==null?void 0:C.encoded_name)||(Y==null?void 0:Y.country_code)||"—",he=Y!=null&&Y.image_url?`${ge}icons/${Y.image_url}`:((D=Y==null?void 0:Y.club)==null?void 0:D.logo_url)||(Y!=null&&Y.country_code?`https://flagcdn.com/w80/${Y.country_code.toLowerCase()}.png`:null),Ae=he?`<img src="${he}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${ve};line-height:0;pointer-events:none">
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
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(V=>{V.addEventListener("click",()=>{B=V.dataset.tab,M="Tous",H="",oe=!1,e.querySelectorAll(".col-tab-btn").forEach(ee=>{const ge=ee.dataset.tab===B;ee.style.borderBottomColor=ge?"var(--green)":"transparent",ee.style.color=ge?"var(--green)":"var(--gray-600)"}),R(),P()})}),R(),P()}function Xo(e,t,i){const a=Re[e]||{icon:"⚡",desc:"Effet spécial."},l=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},s={purple:"#b06ce0",light_blue:"#00d4ef"},c=d[t==null?void 0:t.color]||d.purple,u=s[t==null?void 0:t.color]||s.purple,o=(t==null?void 0:t.name)||e,n=(t==null?void 0:t.effect)||a.desc,m=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${c};border-radius:16px;border:2px solid ${u};
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
        <div style="font-size:14px;color:#333">${n}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Yt=1e3;function Zo(e,t,i,a){var w,r,p;const{state:l,toast:d,closeModal:s,navigate:c,refreshProfile:u}=i,o=e.formation,n={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function m(){const L=Rt[o]||{},A=hi[o]||[],j=290,N=360,q=20;function B(H){const oe=L[H];return oe?{x:oe.x*j,y:oe.y*N}:null}let M=`<svg width="${j}" height="${N}" viewBox="0 0 ${j} ${N}" xmlns="http://www.w3.org/2000/svg">`;for(const[H,oe]of A){const ne=B(H),ce=B(oe);!ne||!ce||(M+=`<line x1="${ne.x}" y1="${ne.y}" x2="${ce.x}" y2="${ce.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const H of Object.keys(L)){const oe=B(H);if(!oe)continue;const ne=H.replace(/\d+/,""),ce=n[ne]||"#555";M+=`<circle cx="${oe.x}" cy="${oe.y}" r="${q}" fill="${ce}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,M+=`<text x="${oe.x}" y="${oe.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ne}</text>`}return M+="</svg>",M}const b=t.filter(L=>L.formation===o);b.length;const g=!e.is_for_sale;a(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Yt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(w=document.getElementById("direct-sell-form-btn"))==null||w.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Yt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const L=b.find(j=>!j.is_for_sale)||b[0];if(!L){d("Aucune carte à vendre","error");return}await E.from("market_listings").delete().eq("card_id",L.id),await E.from("transfer_history").delete().eq("card_id",L.id);const{error:A}=await E.from("cards").delete().eq("id",L.id);if(A){d(A.message,"error");return}await E.from("users").update({credits:(l.profile.credits||0)+Yt}).eq("id",l.profile.id),await u(),d(`+${Yt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),s(),c("collection")}),(r=document.getElementById("market-sell-form-btn"))==null||r.addEventListener("click",async()=>{const L=parseInt(document.getElementById("sell-price-form").value);if(!L||L<1){d("Prix invalide","error");return}await E.from("cards").update({is_for_sale:!0,sale_price:L}).eq("id",e.id),await E.from("market_listings").insert({seller_id:l.profile.id,card_id:e.id,price:L}),d("Carte mise en vente sur le marché !","success"),s(),c("collection")}),(p=document.getElementById("cancel-sell-form-btn"))==null||p.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),s(),c("collection")})}async function Fi(e,t,i,a){var Ce,Fe,De,ke,V,ee,ge;const{state:l,toast:d,openModal:s,closeModal:c,navigate:u,refreshProfile:o}=a,n=e.player,m=t.filter(U=>U.player.id===n.id),b=m.length,g=e.evolution_bonus||0,w=Math.max((Number(n.note_g)||0)+(n.job==="GK"||n.job2==="GK"?g:0),(Number(n.note_d)||0)+(n.job==="DEF"||n.job2==="DEF"?g:0),(Number(n.note_m)||0)+(n.job==="MIL"||n.job2==="MIL"?g:0),(Number(n.note_a)||0)+(n.job==="ATT"||n.job2==="ATT"?g:0)),r=n.rarity||"normal",{data:p}=await E.from("sell_price_configs").select("*").eq("rarity",r).lte("note_min",w).gte("note_max",w).order("note_min",{ascending:!1}).limit(1);((Ce=p==null?void 0:p[0])==null?void 0:Ce.price)??Yo[r];const L=n.rarity!=="legende",A=ao(n),j=((n.rarity==="pepite"||n.rarity==="papyte")&&e.current_note!=null?e.current_note:St(n,n.job))+g,N=n.rarity==="pepite"||n.rarity==="papyte",q=n.job2?(N?_i(e,ro(n.job2)):St(n,n.job2))+(St(n,n.job2)>0?g:0):null,B=Bt[n.job]||"#1A6B3C",M=n.job2?Bt[n.job2]:null,H=no[n.rarity]||"#ccc",oe=Ei[n.country_code]||n.country_code||"",ne=e.evolution_bonus||0,de=j+ne,J=q||0,R=J>0?J+ne:0,P=m.map(U=>U.id);let re={};if(P.length){const{data:U}=await E.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",P).order("transferred_at",{ascending:!0});(U||[]).forEach(X=>{re[X.card_id]||(re[X.card_id]=[]),re[X.card_id].push(X)})}const me=U=>{const X=U.transferred_at?new Date(U.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",Y=U.source==="booster"?"Booster":U.price?U.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${U.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${U.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${U.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${Y}</div>
        <div style="font-size:11px;color:var(--gray-600)">${X}</div>
      </div>
    </div>`},we=P.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${b>1?`(${b})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${m.map((U,X)=>{const Y=re[U.id]||[],se=U.is_for_sale,ve=Y.length?Y[Y.length-1]:null,ze=(n.rarity==="pepite"||n.rarity==="papyte")&&U.current_note!=null?` (☆${U.current_note})`:"";return`
            <div data-card-id="${U.id}" data-card-idx="${X}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${se?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${U.id}" ${se?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${X+1}${ze}${se?" 🏷️ En vente":""}</div>
                  ${ve?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${ve.club_name} · ${ve.source==="booster"?"Booster":ve.price?ve.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${X}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${Y.length?`${Y.length} club${Y.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${X}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${Y.map(me).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${de}${n.job2&&J>0?` / ${R}`:""}`:`Note actuelle : ${de}${n.job2&&J>0?` / ${R}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${b<=1?"#ccc":"#1A6B3C"};border-color:${b<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${b<=1?"not-allowed":"pointer"}"
            ${b<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${L?`
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
      <div style="width:140px;border-radius:12px;padding:6px;background:${H};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${n.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(n.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${B}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${B}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${j}</text>
            </svg>
            ${q!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${M}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${q}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${A?`<img src="${A}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${n.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${oe}</div>
            ${(Fe=n.clubs)!=null&&Fe.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((De=n.clubs)==null?void 0:De.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${H}">${n.rarity.toUpperCase()}</div>
          ${n.rarity==="pepite"||n.rarity==="papyte"?`
          <div style="margin-top:6px;background:${H}18;border-left:3px solid ${H};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${H};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",n.note_g],["DEF",n.note_d],["MIL",n.note_m],["ATT",n.note_a]].map(([U,X])=>{const Y=Bt[U],se=U===n.job||U===n.job2,ve=(Number(X)||0)+(se&&ne>0?ne:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${Y}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${ve}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${U}</span>
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
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ke=document.getElementById("close-detail"))==null||ke.addEventListener("click",c);let xe=new Set;const be=()=>{const U=xe.size,X=document.getElementById("sell-action-panel");if(!X)return;X.style.display=U>0?"block":"none",document.getElementById("sell-selected-count").textContent=U;const Y=document.getElementById("evolve-btn");Y&&(Y.textContent=`⬆️ Évoluer ${U>1?"(+"+U+")":""}`)};document.querySelectorAll(".expl-check").forEach(U=>{U.addEventListener("change",()=>{const X=U.dataset.id;U.checked?xe.add(X):xe.delete(X);const Y=U.closest(".exemplaire-row");Y&&(Y.style.borderColor=U.checked?"#1A6B3C":"#eee"),be()})}),document.querySelectorAll(".exemplaire-row").forEach(U=>{U.addEventListener("click",X=>{if(X.target.closest("button")||X.target.tagName==="INPUT")return;const Y=U.querySelector(".expl-check");Y&&!Y.disabled&&(Y.checked=!Y.checked,Y.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(U=>{U.addEventListener("click",X=>{X.stopPropagation();const Y=document.querySelector(`.expl-hist[data-hist="${U.dataset.idx}"]`);Y&&(Y.style.display=Y.style.display==="none"?"flex":"none")})}),(V=document.getElementById("evolve-btn"))==null||V.addEventListener("click",async()=>{if(b<=1)return;const U=[...xe];if(!U.length)return;if(xe.has(e.id)){const he=document.createElement("div");he.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",he.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(he),he.querySelector("#err-close").addEventListener("click",()=>he.remove()),he.addEventListener("click",Ae=>{Ae.target===he&&he.remove()});return}const X=U.filter(he=>he!==e.id),Y=n.rarity==="legende"?2:1;if((X.length||1)*Y,!(!X.length&&U.length===1&&U[0]===e.id)){if(!X.length){d("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(he=>{const Ae=document.createElement("div");Ae.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",Ae.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${n.firstname} ${n.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${X.length}</strong> copie${X.length>1?"s":""} sacrifiée${X.length>1?"s":""}<br>
            📈 Note : <strong>${j+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${j+(e.evolution_bonus||0)+X.length*Y}</strong>
            ${q&&q>0?`<br>📈 Note 2 : <strong>${q+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${q+(e.evolution_bonus||0)+X.length*Y}</strong>`:""}
            ${n.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${Y} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(Ae),Ae.querySelector("#sac-cancel").addEventListener("click",()=>{Ae.remove(),he(!1)}),Ae.querySelector("#sac-ok").addEventListener("click",()=>{Ae.remove(),he(!0)}),Ae.addEventListener("click",C=>{C.target===Ae&&(Ae.remove(),he(!1))})}))return;if(X.length){await E.from("market_listings").delete().in("card_id",X),await E.from("deck_cards").delete().in("card_id",X),await E.from("transfer_history").delete().in("card_id",X),await E.from("decks").update({stadium_card_id:null}).in("stadium_card_id",X);const{error:he}=await E.from("cards").delete().in("id",X);if(he){d("Erreur suppression : "+he.message,"error");return}}const ve=(e.evolution_bonus||0)+X.length*Y,{error:Se}=await E.from("cards").update({evolution_bonus:ve}).eq("id",e.id);if(Se){d("Erreur évolution : "+Se.message,"error");return}const ze=j+ve;d(`⬆️ ${n.firstname} ${n.surname_encoded} : note ${j+e.evolution_bonus||j} → ${ze}${X.length?` · ${X.length} copie${X.length>1?"s":""} sacrifiée${X.length>1?"s":""}`:""} !`,"success",4e3),c(),u("collection")}),(ee=document.getElementById("market-sell-btn"))==null||ee.addEventListener("click",async()=>{var Se;const U=[...xe];if(!U.length){d("Sélectionne au moins un exemplaire","warning");return}const X=parseInt((Se=document.getElementById("sell-market-price"))==null?void 0:Se.value);if(!X||X<1){d("Prix invalide","error");return}const{error:Y}=await E.from("cards").update({is_for_sale:!0,sale_price:X}).in("id",U);if(Y){d(Y.message,"error");return}const se=U.map(ze=>({seller_id:l.profile.id,card_id:ze,price:X,status:"active"})),{error:ve}=await E.from("market_listings").insert(se);ve&&console.warn("[Market] insert listings:",ve.message),d(`${U.length} carte${U.length>1?"s":""} mise${U.length>1?"s":""} en vente à ${X.toLocaleString("fr")} cr. chacune !`,"success"),c(),u("collection")}),(ge=document.getElementById("cancel-sell-btn"))==null||ge.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),c(),u("collection")})}const Zt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ni(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function so(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function lo(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function Qo(e,t=44,i=58){var r;const a=e?ni(e):null,l=e?lo(e):null,d=so(e==null?void 0:e.country_code),s=(e==null?void 0:e.job)||"MIL",c=vt[s]||"#555",u={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=(e==null?void 0:e._evolution_bonus)??(e==null?void 0:e.evolution_bonus)??0,m=(Number(s==="GK"?e==null?void 0:e.note_g:s==="DEF"?e==null?void 0:e.note_d:s==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0)+(s===(e==null?void 0:e.job)||s===(e==null?void 0:e.job2)?o:0),b=Math.round(i*.19),g=Math.round(i*.25),w=i-b-g;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${u};background:${c};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${b}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${a?`<img src="${a}" style="position:absolute;top:${b}px;left:0;width:${t}px;height:${w}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">🌍</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${m}</span>
      ${l?`<img src="${l}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:(r=e==null?void 0:e.clubs)!=null&&r.encoded_name?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const s=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!s)return;const{data:c,error:u}=await E.from("decks").insert({owner_id:i.profile.id,name:s}).select().single();if(u){l(u.message,"error");return}l("Deck créé !","success"),Di(c.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(s=>{s.addEventListener("click",()=>Di(s.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(s=>{s.addEventListener("click",async()=>{const c=prompt("Nouveau nom :",s.dataset.name);if(!c||c===s.dataset.name)return;const{error:u}=await E.from("decks").update({name:c}).eq("id",s.dataset.rename);if(u){l(u.message,"error");return}l("Deck renommé !","success"),fi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(s=>{s.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${s.dataset.name}" ? Cette action est irréversible.`))return;await E.from("deck_cards").delete().eq("deck_id",s.dataset.delete);const{error:c}=await E.from("decks").delete().eq("id",s.dataset.delete);if(c){l(c.message,"error");return}l("Deck supprimé.","success"),fi(e,t)})})}async function Di(e,t,i){const{state:a,toast:l}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select("*").eq("id",e).single(),{data:s}=await E.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id),{data:c}=await E.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",a.profile.id).eq("card_type","stadium"),u=(s||[]).filter(L=>L.card_type==="player"&&L.player),o=(s||[]).filter(L=>L.card_type==="formation"),n=(c||[]).filter(L=>L.card_type==="stadium"),m=[...new Set(n.map(L=>L.stadium_id).filter(Boolean))];let b={};if(n.forEach(L=>{L.stadium_def&&L.stadium_id&&(b[L.stadium_id]=L.stadium_def)}),m.length&&Object.keys(b).length<m.length){const{data:L}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",m);(L||[]).forEach(A=>{b[A.id]=A})}const g=o.map(L=>L.formation).filter(Boolean),{data:w}=await E.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let r=d.formation||"4-4-2";g.length>0&&!g.includes(r)&&(r=g[0]);const p={deckId:e,name:d.name,formation:r,formationCardId:d.formation_card_id,stadiumCardId:d.stadium_card_id||null,slots:{},subs:[],playerCards:u,formationCards:o,stadiumCards:n,stadDefMap:b,availableFormations:g};(w||[]).forEach(L=>{L.is_starter?p.slots[L.position]=L.card_id:p.subs.includes(L.card_id)||p.subs.push(L.card_id)}),wt(t,p,i)}function wt(e,t,i){var o,n,m,b;const{navigate:a}=i;Zt[t.formation];const l=Gi(t.formation),d=l.filter(g=>t.slots[g]).length,s=t.availableFormations.length>0?t.availableFormations:Object.keys(Zt),c=(o=t.stadiumCards)==null?void 0:o.find(g=>g.id===t.stadiumCardId);c&&((n=t.stadDefMap)!=null&&n[c.stadium_id]);const u=t.subs.map(g=>t.playerCards.find(w=>w.id===g)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${s.map(g=>`<option value="${g}" ${g===t.formation?"selected":""}>${g}</option>`).join("")}
      </select>
    </div>

    <!-- Carte Stade -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:10px">
      <span style="font-size:18px">🏟️</span>
      <div style="flex:1;font-size:12px;font-weight:700;color:#555">Carte Stade <span style="font-size:10px;color:#aaa;font-weight:400">(+10 aux joueurs du même club/pays)</span></div>
      ${t.stadiumCards.length>0?`
        <select id="stadium-select" style="padding:6px;border-radius:6px;border:1.5px solid #E87722;font-size:12px;max-width:180px;background:#fff">
          <option value="">Aucun stade</option>
          ${t.stadiumCards.map(g=>{var p;const w=t.stadDefMap[g.stadium_id],r=w?w.name+((p=w.club)!=null&&p.encoded_name?` (${w.club.encoded_name})`:w.country_code?` (${w.country_code})`:""):g.id.slice(0,8);return`<option value="${g.id}" ${t.stadiumCardId===g.id?"selected":""}>${r}</option>`}).join("")}
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
        ${u.map(g=>{const w={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
            ${Qo(w,44,58)}
            <button data-remove-sub="${g.id}"
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
  </div>`,en(e,t,l,i),document.getElementById("builder-back").addEventListener("click",()=>a("decks")),document.getElementById("formation-select").addEventListener("change",g=>{t.formation=g.target.value;const w=Gi(t.formation),r={};w.forEach(p=>{t.slots[p]&&(r[p]=t.slots[p])}),t.slots=r,wt(e,t,i)}),(m=document.getElementById("stadium-select"))==null||m.addEventListener("change",g=>{t.stadiumCardId=g.target.value||null,wt(e,t,i)}),document.getElementById("save-deck").addEventListener("click",()=>nn(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(g=>{g.addEventListener("click",()=>{t.subs=t.subs.filter(w=>w!==g.dataset.removeSub),wt(e,t,i)})}),(b=document.getElementById("add-sub-btn"))==null||b.addEventListener("click",()=>{on(t,e,i)})}function en(e,t,i,a){var j,N;const l=e.querySelector("#deck-field");if(!l)return;const d=(j=t.stadiumCards)==null?void 0:j.find(q=>q.id===t.stadiumCardId),s=d&&((N=t.stadDefMap)==null?void 0:N[d.stadium_id])||null,c=Rt[t.formation]||{},u=Yi(t.formation)||[],o={};for(const q of i){const B=t.slots[q],M=B?t.playerCards.find(H=>H.id===B):null;M!=null&&M.player?o[q]={...M.player,_evolution_bonus:M.evolution_bonus||0}:o[q]=null}const n=300,m=300,b=48,g=64,w=13,r=16,p=38;function L(q){const B=c[q];return B?{x:B.x*n,y:B.y*m}:null}let A="";for(const[q,B]of u){const M=L(q),H=L(B);if(!M||!H)continue;const oe=o[q]?{...o[q],club_id:o[q].club_id,country_code:o[q].country_code,rarity:o[q].rarity}:null,ne=o[B]?{...o[B],club_id:o[B].club_id,country_code:o[B].country_code,rarity:o[B].rarity}:null,ce=at(oe,ne);ce==="#ff3333"||ce==="#cc2222"?A+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}" stroke="${ce}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(A+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}" stroke="${ce}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,A+=`<line x1="${M.x.toFixed(1)}" y1="${M.y.toFixed(1)}" x2="${H.x.toFixed(1)}" y2="${H.y.toFixed(1)}" stroke="${ce}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const q of i){const B=L(q);if(!B)continue;const M=o[q],H=q.replace(/\d+/,""),oe=vt[H]||"#555",ne=(B.x-b/2).toFixed(1),ce=(B.y-g/2).toFixed(1),de={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[M==null?void 0:M.rarity]||"#aaa";if(M){const J=ni(M),R=lo(M),P=so(M.country_code),re=M._evolution_bonus||0,me=(Number(H==="GK"?M.note_g:H==="DEF"?M.note_d:H==="MIL"?M.note_m:M.note_a)||0)+(H===M.job||H===M.job2?re:0),we=s&&(s.club_id&&String(M.club_id)===String(s.club_id)||s.country_code&&M.country_code===s.country_code),xe=we?me+10:me,be=g-w-r;A+=`<defs><clipPath id="dcp-${q}"><rect x="${ne}" y="${(B.y-g/2+w).toFixed(1)}" width="${b}" height="${be}"/></clipPath></defs>`,A+=`<rect x="${ne}" y="${ce}" width="${b}" height="${g}" rx="5" fill="${oe}"/>`,J&&(A+=`<image href="${J}" x="${ne}" y="${(B.y-g/2+w).toFixed(1)}" width="${b}" height="${be}" clip-path="url(#dcp-${q})" preserveAspectRatio="xMidYMin slice"/>`),A+=`<rect x="${ne}" y="${ce}" width="${b}" height="${w}" fill="rgba(255,255,255,0.93)"/>`,A+=`<text x="${B.x.toFixed(1)}" y="${(B.y-g/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(M.surname_encoded||"").slice(0,9)}</text>`;const Ce=(B.y+g/2-r).toFixed(1);A+=`<rect x="${ne}" y="${Ce}" width="${b}" height="${r}" fill="rgba(255,255,255,0.93)"/>`,P&&(A+=`<image href="${P}" x="${(B.x-21).toFixed(1)}" y="${(B.y+g/2-r+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),A+=`<text x="${B.x.toFixed(1)}" y="${(B.y+g/2-r/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${we?"#E87722":"#111"}" font-family="Arial Black">${xe}</text>`,R&&(A+=`<image href="${R}" x="${(B.x+b/2-14).toFixed(1)}" y="${(B.y+g/2-r+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),A+=`<rect x="${ne}" y="${ce}" width="${b}" height="${g}" rx="5" fill="none" stroke="${de}" stroke-width="2"/>`}else A+=`<rect x="${ne}" y="${ce}" width="${b}" height="${g}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,A+=`<text x="${B.x.toFixed(1)}" y="${B.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,A+=`<text x="${B.x.toFixed(1)}" y="${(B.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${H}</text>`;A+=`<rect x="${ne}" y="${ce}" width="${b}" height="${g}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${q}" style="cursor:pointer"/>`}l.innerHTML=`<svg viewBox="${-p} ${-p} ${n+p*2} ${m+p*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${A}</svg>`,l.querySelectorAll(".deck-slot-hit").forEach(q=>{q.addEventListener("click",()=>tn(q.dataset.pos,t,e,a))})}function tn(e,t,i,a){var b,g,w;const{openModal:l,closeModal:d}=a,s=e.replace(/\d+/,""),c=t.slots[e],u=c?t.playerCards.find(r=>r.id===c):null;(b=u==null?void 0:u.player)==null||b.id;const o=new Set;Object.entries(t.slots).forEach(([r,p])=>{var A;if(r===e||!p)return;const L=t.playerCards.find(j=>j.id===p);(A=L==null?void 0:L.player)!=null&&A.id&&o.add(L.player.id)}),t.subs.forEach(r=>{var L;const p=t.playerCards.find(A=>A.id===r);(L=p==null?void 0:p.player)!=null&&L.id&&o.add(p.player.id)});const n=new Set,m=t.playerCards.filter(r=>{const p=r.player;return!(p.job===s||p.job2===s)||o.has(p.id)||n.has(p.id)?!1:(n.add(p.id),!0)});m.sort((r,p)=>{const L=r.evolution_bonus||0,A=p.evolution_bonus||0,j=(s==="GK"?r.player.note_g:s==="DEF"?r.player.note_d:s==="MIL"?r.player.note_m:r.player.note_a)+(s===r.player.job||s===r.player.job2?L:0);return(s==="GK"?p.player.note_g:s==="DEF"?p.player.note_d:s==="MIL"?p.player.note_m:p.player.note_a)+(s===p.player.job||s===p.player.job2?A:0)-j}),l(`Choisir ${s} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${m.length>0?m.map(r=>{var q,B;const p=r.player,L=r.evolution_bonus||0,A=(s==="GK"?p.note_g:s==="DEF"?p.note_d:s==="MIL"?p.note_m:p.note_a)+(s===p.job||s===p.job2?L:0),j=ni(p),N={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[p.rarity];return`<div class="player-option" data-card-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[s]}">
            ${j?`<img src="${j}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${vt[s]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${s}</div>`}
          </div>
          <!-- Infos -->
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:13px">${p.firstname} ${p.surname_encoded}</div>
            <div style="display:flex;align-items:center;gap:6px;margin-top:3px">
              <img src="https://flagsapi.com/${p.country_code}/flat/32.png" style="width:18px;height:12px;border-radius:2px;object-fit:cover" alt="${p.country_code}">
              ${(q=p.clubs)!=null&&q.logo_url?`<img src="${p.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((B=p.clubs)==null?void 0:B.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${p.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${vt[s]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${N};flex-shrink:0">
            ${A}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(g=document.getElementById("close-selector"))==null||g.addEventListener("click",d),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete t.slots[e],d(),wt(i,t,a)}),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{t.slots[e]=r.dataset.cardId,d(),wt(i,t,a)})})}function on(e,t,i){var u;const{openModal:a,closeModal:l}=i,d=new Set;Object.keys(e.slots).forEach(o=>{var b;const n=e.slots[o];if(!n)return;const m=e.playerCards.find(g=>g.id===n);(b=m==null?void 0:m.player)!=null&&b.id&&d.add(m.player.id)}),e.subs.forEach(o=>{var m;const n=e.playerCards.find(b=>b.id===o);(m=n==null?void 0:n.player)!=null&&m.id&&d.add(n.player.id)});const s=new Set,c=e.playerCards.filter(o=>{var n,m,b;return d.has((n=o.player)==null?void 0:n.id)||s.has((m=o.player)==null?void 0:m.id)?!1:(s.add((b=o.player)==null?void 0:b.id),!0)});a("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?c.map(o=>{var g;const n=o.player,m=ni(n),b=(n.job==="GK"?n.note_g:n.job==="DEF"?n.note_d:n.job==="MIL"?n.note_m:n.note_a)+(o.evolution_bonus||0);return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[n.job]}">
            ${m?`<img src="${m}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${n.firstname} ${n.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${n.job} · ${n.country_code} · ${((g=n.clubs)==null?void 0:g.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${vt[n.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${b}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(u=document.getElementById("close-sub-selector"))==null||u.addEventListener("click",l),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),l(),wt(t,e,i)})})}async function nn(e,t){const{state:i,toast:a,navigate:l}=t,d=e.formationCards.find(u=>u.formation===e.formation),s=(d==null?void 0:d.id)||e.formationCardId;await E.from("decks").update({formation:e.formation,formation_card_id:s||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await E.from("deck_cards").delete().eq("deck_id",e.deckId);const c=[];if(Object.entries(e.slots).forEach(([u,o],n)=>{c.push({deck_id:e.deckId,card_id:o,position:u,is_starter:!0,slot_order:n})}),e.subs.forEach((u,o)=>{c.push({deck_id:e.deckId,card_id:u,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),c.length>0){const{error:u}=await E.from("deck_cards").insert(c);if(u){a(u.message,"error");return}}a("Deck enregistré ✅","success"),l("decks")}function Gi(e){const t=Zt[e]||Zt["4-4-2"],i=["GK1"];for(let a=1;a<=t.DEF;a++)i.push(`DEF${a}`);for(let a=1;a<=t.MIL;a++)i.push(`MIL${a}`);for(let a=1;a<=t.ATT;a++)i.push(`ATT${a}`);return i}async function co(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await E.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const a=i.filter(s=>!(s.available_from&&t<s.available_from||s.available_until&&t>s.available_until));if(!a.length)return[];let l=a;if(e){const s=a.filter(c=>c.max_per_user!=null);if(s.length){const{data:c}=await E.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",s.map(o=>o.id)),u={};(c||[]).forEach(o=>{u[o.booster_id]=(u[o.booster_id]||0)+1}),l=a.filter(o=>o.max_per_user==null?!0:(u[o.id]||0)<o.max_per_user)}}if(!l.length)return[];const{data:d}=await E.from("booster_drop_rates").select("*").in("booster_id",l.map(s=>s.id)).order("sort_order");return l.map(s=>({...s,rates:(d||[]).filter(c=>c.booster_id===s.id)}))}async function rn(e,t){const{data:i}=await E.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await E.from("booster_claims").insert({user_id:e,booster_id:t})}function an(e){if(!(e!=null&&e.length))return null;const t=e.reduce((a,l)=>a+Number(l.percentage),0);let i=Math.random()*t;for(const a of e)if(i-=Number(a.percentage),i<=0)return a;return e[e.length-1]}const po=()=>Object.keys(Rt),sn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],gi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function dn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Pi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},ln={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},cn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ni(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function pn(e){var n,m;const t=e.player;if(!t)return"";const i=t.job||"ATT",a=Pi[i],l=ln[t.rarity]||"#ccc",d=Ni(t,i),s=t.job2?Ni(t,t.job2):null,c=t.job2?Pi[t.job2]:null,u=dn(t),o=cn[t.country_code]||t.country_code||"";return`
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
        ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block" onerror="this.parentElement.innerHTML='<div style=\\'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be\\'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:36px;color:#8fa5be">👤</div>'}
      </div>
      <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:26px;gap:4px">
        <img src="https://flagsapi.com/${t.country_code}/flat/32.png" style="width:20px;height:14px;border-radius:2px;object-fit:cover;flex-shrink:0" onerror="this.style.display='none'">
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${o}</div>
        ${(n=t.clubs)!=null&&n.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((m=t.clubs)==null?void 0:m.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function uo(e){var l;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const i=((l=Object.entries(t).sort((d,s)=>s[1]-d[1])[0])==null?void 0:l[0])||"player",a=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+a,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function un(e,{state:t,navigate:i,toast:a}){var m,b,g;const l=((m=t.profile)==null?void 0:m.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await co((b=t.user)==null?void 0:b.id)).map(uo)}catch(w){console.warn("Erreur chargement boosters DB, fallback hardcodé",w)}d.length||(d=sn.map(w=>({...w,rates:[],isPub:w.id==="players_pub"})));const s=await E.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(w=>w.data||[]),c=new Set(s.filter(w=>w.card_type==="stadium").map(w=>w.stadium_id)),u=new Set(s.filter(w=>w.card_type==="formation").map(w=>w.formation)),o=new Set(s.filter(w=>w.card_type==="game_changer").map(w=>w.gc_type)),n={};for(const w of d){if(w.allow_duplicates!==!1||!((g=w.rates)!=null&&g.length))continue;const r=[...new Set((w.rates||[]).map(L=>L.card_type))];let p=!1;for(const L of r)if(L==="stadium"){const{data:A}=await E.from("stadium_definitions").select("id");if((A||[]).some(j=>!c.has(j.id))){p=!0;break}}else if(L==="game_changer"){const{data:A}=await E.from("gc_definitions").select("name").eq("is_active",!0);if((A||[]).some(j=>!o.has(j.name))){p=!0;break}}else if(L==="formation"){const{FORMATION_LINKS:A}=await oi(async()=>{const{FORMATION_LINKS:j}=await import("./formation-links-Dnttc-Cp.js").then(N=>N.m);return{FORMATION_LINKS:j}},__vite__mapDeps([0,1]));if(Object.keys(A).some(j=>!u.has(j))){p=!0;break}}else{p=!0;break}p||(n[w.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${l.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${d.map(w=>{const r=w.cost===0||l>=w.cost,p=n[w.id]===!0;return`<div class="booster-card ${!r||p?"disabled":""}" data-booster="${w.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${w.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${w.img}" alt="${w.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${w.name}</div>
            <div class="desc">${w.sub}</div>
            <div class="cost">${w.costLabel}</div>
            ${r?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${p?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(w=>{w.addEventListener("click",async()=>{const r=d.find(p=>p.id===w.dataset.booster);if(r){w.style.opacity="0.5",w.style.pointerEvents="none";try{await fn(r,{state:t,toast:a,navigate:i,container:e})}catch(p){a(p.message,"error"),w.style.opacity="",w.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(w=>{w.addEventListener("click",r=>{r.stopPropagation();const p=d.find(L=>L.id===w.dataset.boosterId);yn(p)})})}async function fn(e,{state:t,toast:i,navigate:a,container:l}){var m,b;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await hn();const{data:d}=await E.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),s=new Set((d||[]).filter(g=>g.card_type==="player").map(g=>g.player_id)),c=new Set((d||[]).filter(g=>g.card_type==="formation").map(g=>g.formation));let u=[],o=null;try{if((m=e.rates)!=null&&m.length)u=await mi(t.profile,e);else{const g=e.type||"player";g==="player"?u=await fo(t.profile,e.cardCount,e.cost):g==="game_changer"?u=await go(t.profile,e.cardCount,e.cost):g==="formation"?u=await mo(t.profile,e.cost):u=await mi(t.profile,e)}}catch(g){o=g.message||String(g),console.error("[Booster] Erreur:",g)}if(u!=null&&u.length&&e._boosterId&&await rn(t.user.id,e._boosterId),!(u!=null&&u.length)){const g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",g.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${o||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(g),(b=g.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>g.remove());return}u.forEach(g=>{g.card_type==="player"&&g.player?g.isDuplicate=s.has(g.player.id):g.card_type==="formation"&&(g.isDuplicate=c.has(g.formation))});const{data:n}=await E.from("users").select("*").eq("id",t.profile.id).single();n&&(t.profile=n),xo(u,e,a)}function gn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function mn(e,t){let i;switch(t){case"legende":i=e.filter(a=>a.rarity==="legende"),i.length||(i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte")),i.length||(i=e.filter(a=>mt(a)>=6));break;case"special":i=e.filter(a=>a.rarity==="pepite"||a.rarity==="papyte"),i.length||(i=e.filter(a=>mt(a)>=6));break;case"normal_high":i=e.filter(a=>a.rarity==="normal"&&mt(a)>=6),i.length||(i=e.filter(a=>mt(a)>=6));break;default:i=e.filter(a=>a.rarity==="normal"&&mt(a)>=1&&mt(a)<=5),i.length||(i=e.filter(a=>a.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function mi(e,t){if(t.cost>0){const{error:b}=await E.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(b)throw b}const i=t.allow_duplicates!==!1;let a=[];const{data:l,error:d}=await E.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(d){const{data:b}=await E.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);a=b||[]}else a=l||[];const s=new Set(a.filter(b=>b.card_type==="player").map(b=>b.player_id)),c=new Set(a.filter(b=>b.card_type==="formation").map(b=>b.formation)),u=new Set(a.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),o=new Set(a.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),n=new Set,m=[];for(let b=0;b<(t.cardCount||5);b++){const g=an(t.rates);if(g){if(g.card_type==="player"){const w=M=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[M]||M,r=g.rarity?w(g.rarity):null;let p=E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(p=p.eq("rarity",r));const{data:L}=await p;let A=L||[];if((g.note_min||g.note_max)&&(A=A.filter(M=>{const H=Math.max(Number(M.note_g)||0,Number(M.note_d)||0,Number(M.note_m)||0,Number(M.note_a)||0);return(!g.note_min||H>=g.note_min)&&(!g.note_max||H<=g.note_max)})),A.length||(g.note_min||g.note_max?(A=L||[],console.warn("[Booster] Aucun joueur avec note",g.note_min,"-",g.note_max,"— fallback rareté uniquement")):A=L||[]),!A.length)continue;let j=A.filter(M=>!n.has(M.id));if(i)j.length||(j=A);else if(j=j.filter(M=>!s.has(M.id)),!j.length)continue;const N=j[Math.floor(Math.random()*j.length)];n.add(N.id);const q=s.has(N.id),{data:B}=await E.from("cards").insert({owner_id:e.id,player_id:N.id,card_type:"player"}).select().single();B&&(m.push({...B,player:N,isDuplicate:q}),E.rpc("record_transfer",{p_card_id:B.id,p_player_id:N.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(g.card_type==="game_changer"){const{data:w}=await E.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=w!=null&&w.length?w:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],p=i?r:r.filter(N=>!u.has(N.name));if(!i&&!p.length)continue;const A=p[Math.floor(Math.random()*p.length)].name,{data:j}=await E.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:A}).select().single();j&&m.push(j)}else if(g.card_type==="formation"){const w=po(),r=i?w:w.filter(j=>!c.has(j));if(!i&&!r.length)continue;const p=r[Math.floor(Math.random()*r.length)],L=c.has(p),{data:A}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:p}).select();A!=null&&A[0]&&m.push({...A[0],isDuplicate:L})}else if(g.card_type==="stadium"){const{data:w,error:r}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(r){console.error("[Booster] stadium_definitions:",r.message);continue}if(!(w!=null&&w.length)){console.warn("[Booster] Aucun stade en DB");continue}const p=i?w:w.filter(N=>!o.has(N.id));if(!i&&!p.length)continue;const L=p[Math.floor(Math.random()*p.length)],{data:A,error:j}=await E.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:L.id}).select("id,card_type,stadium_id").single();if(j){console.error("[Booster] insert stadium card:",j.message);continue}A&&m.push({...A,rarity:"normal",_stadiumDef:L})}}}return m}async function fo(e,t,i){if(i>0){const{error:o}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:a}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(a!=null&&a.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const l=a.filter(o=>o.job==="GK"),d=a.filter(o=>o.job!=="GK"),s=!e.first_booster_opened&&l.length>0,c=[];for(let o=0;o<t;o++){const n=o===0&&s?l:o===0?d:a,m=gn(),b=mn(n,m);b&&c.push(b)}s&&await E.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:u}=await E.from("cards").insert(c.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(u||[]).forEach((o,n)=>{E.rpc("record_transfer",{p_card_id:o.id,p_player_id:c[n].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),c.map((o,n)=>({...u[n],player:o}))}async function go(e,t,i){const{error:a}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(a)throw a;const{data:l}=await E.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=l!=null&&l.length?l:Object.keys(gi).map(n=>({name:n,gc_type:"game_changer"})),s=Array.from({length:t},()=>{const n=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:n.name,gc_definition_id:n.id||null}}),{data:c,error:u}=await E.from("cards").insert(s).select();return u&&console.error("[Booster GC] Erreur insert:",u.message,u),(c||[]).map(n=>{const m=l==null?void 0:l.find(b=>b.name===n.gc_type||b.id===n.gc_definition_id);return{...n,_gcDef:m||null}})}async function mo(e,t){const{error:i}=await E.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:a}=await E.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),l=new Set((a||[]).map(n=>n.formation)),d=po(),s=d[Math.floor(Math.random()*d.length)],c=l.has(s),{data:u,error:o}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:s}).select();return o&&console.error("[Booster Formation] Erreur insert:",o.message,o),(u||[]).map(n=>({...n,isDuplicate:c}))}function xo(e,t,i,a=null){var de,J;if(!e||e.length===0){const R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",R.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(R),(de=R.querySelector("#anim-close-err"))==null||de.addEventListener("click",()=>R.remove());return}e=[...e].sort((R,P)=>{const re=R.player?mt(R.player):-1;return(P.player?mt(P.player):-1)-re});const l=document.createElement("div");l.id="booster-anim-overlay",l.innerHTML=`
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
  `,document.body.appendChild(l);let d=!1;const s=document.getElementById("pack-cut-zone"),c=document.getElementById("pack-blade");let u=!1;const o=R=>R.touches&&R.touches[0]?R.touches[0].clientX:R.clientX;function n(R){d||(u=!0,c.style.opacity="1",m(R))}function m(R){if(!u||d)return;const P=s.getBoundingClientRect(),re=o(R)-P.left,me=Math.max(0,Math.min(1,re/P.width));c.style.width=me*P.width+"px",me>=.82&&g()}function b(){d||(u=!1,c.style.transition="width .2s ease, opacity .2s ease",c.style.width="0",c.style.opacity="0",setTimeout(()=>{d||(c.style.transition="")},220))}function g(){var P;if(d)return;d=!0,u=!1,c.style.width="100%",c.style.opacity="1",(P=document.getElementById("cut-flash"))==null||P.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const R=document.getElementById("cut-hint");R&&(R.style.opacity="0"),s.classList.add("pack-cut"),setTimeout(()=>{c.style.opacity="0",document.getElementById("pack-phase").style.display="none",L(0)},620)}s.addEventListener("pointerdown",n),window.addEventListener("pointermove",m),window.addEventListener("pointerup",b),s.addEventListener("touchstart",n,{passive:!0}),window.addEventListener("touchmove",m,{passive:!0}),window.addEventListener("touchend",b);let w=0,r=!1;const p=new Set;function L(R){w=R,document.getElementById("reveal-phase").style.display="flex",A(),j(R,0),H()}function A(){const R=document.getElementById("card-dots");R&&(R.innerHTML=e.map((P,re)=>`<div class="card-dot" data-i="${re}" style="width:8px;height:8px;border-radius:50%;background:${re===w?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),R.querySelectorAll(".card-dot").forEach(P=>P.addEventListener("click",()=>q(parseInt(P.dataset.i)))))}function j(R,P){var ke;const re=e[R],me=document.getElementById("card-counter"),we=document.getElementById("card-track");me&&(me.textContent=`Carte ${R+1} / ${e.length}`);const xe=document.getElementById("reveal-btns");xe&&(xe.style.display=R===e.length-1?"flex":"none");const be=re.card_type==="player"&&((ke=re.player)==null?void 0:ke.rarity)==="legende",Ce=!p.has(R);p.add(R);let Fe=0;if(re.card_type==="player"&&re.player){const V=re.player,ee=V.job||"ATT";Fe=Number(ee==="GK"?V.note_g:ee==="DEF"?V.note_d:ee==="MIL"?V.note_m:V.note_a)||0}const De=V=>{we.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${be?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${xn(re)}</div>
          ${re.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ee=document.getElementById("current-card-wrap");P!==0?(ee.style.transition="none",ee.style.transform=`translateX(${P>0?100:-100}%)`,requestAnimationFrame(()=>{ee.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ee.style.transform="translateX(0)"})):ee.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),V||be?ne():ce(),A()};Ce&&Fe>6&&re.card_type==="player"&&re.player?N(re,()=>De(!0)):De(!1)}function N(R,P){var Fe;r=!0;const re=R.player,me=`https://flagsapi.com/${re.country_code}/flat/64.png`,we=(Fe=re.clubs)==null?void 0:Fe.logo_url,xe=document.getElementById("walkout-overlay"),be=document.getElementById("walkout-stage");if(!xe||!be){r=!1,P();return}xe.style.display="flex";const Ce=()=>{const De=be.firstElementChild;De&&(De.classList.remove("wo-in"),De.classList.add("wo-out"))};be.innerHTML=`<img class="wo-in" src="${me}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(Ce,2e3),setTimeout(()=>{var De;be.innerHTML=we?`<img class="wo-in" src="${we}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((De=re.clubs)==null?void 0:De.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(Ce,4450),setTimeout(()=>{xe.style.display="none",be.innerHTML="",r=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),P()},4900)}function q(R){if(r||R<0||R>=e.length||R===w)return;const P=R>w?1:-1;w=R,j(R,P)}function B(){q(w+1)}function M(){q(w-1)}function H(){const R=document.getElementById("card-viewport");if(!R||R._swipeBound)return;R._swipeBound=!0;let P=0,re=0,me=0,we=!1;const xe=ke=>ke.touches?ke.touches[0].clientX:ke.clientX,be=ke=>ke.touches?ke.touches[0].clientY:ke.clientY,Ce=ke=>{we=!0,P=xe(ke),re=be(ke),me=0},Fe=ke=>{if(!we)return;me=xe(ke)-P;const V=be(ke)-re;if(Math.abs(me)<Math.abs(V))return;const ee=document.getElementById("current-card-wrap");ee&&(ee.style.transition="none",ee.style.transform=`translateX(${me*.6}px) rotate(${me*.02}deg)`)},De=()=>{if(!we)return;we=!1;const ke=document.getElementById("current-card-wrap"),V=55;me<=-V&&w<e.length-1?B():me>=V&&w>0?M():ke&&(ke.style.transition="transform .2s ease",ke.style.transform="translateX(0)")};R.addEventListener("pointerdown",Ce),R.addEventListener("pointermove",Fe),R.addEventListener("pointerup",De),R.addEventListener("pointercancel",De),R.addEventListener("touchstart",Ce,{passive:!0}),R.addEventListener("touchmove",Fe,{passive:!0}),R.addEventListener("touchend",De),R.addEventListener("click",ke=>{if(Math.abs(me)>8)return;const V=R.getBoundingClientRect();ke.clientX-V.left>V.width/2?B():M()})}let oe=null;function ne(){const R=document.getElementById("fireworks-canvas");if(!R)return;R.width=window.innerWidth,R.height=window.innerHeight;const P=R.getContext("2d"),re=[];function me(){const xe=Math.random()*R.width,be=Math.random()*R.height*.6,Ce=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Fe=Ce[Math.floor(Math.random()*Ce.length)];for(let De=0;De<60;De++){const ke=Math.PI*2/60*De,V=2+Math.random()*5;re.push({x:xe,y:be,vx:Math.cos(ke)*V,vy:Math.sin(ke)*V,alpha:1,color:Fe,size:2+Math.random()*3})}}me(),oe=setInterval(me,600);function we(){if(document.getElementById("fireworks-canvas")){P.clearRect(0,0,R.width,R.height);for(let xe=re.length-1;xe>=0;xe--){const be=re[xe];if(be.x+=be.vx,be.y+=be.vy+.08,be.vy*=.98,be.alpha-=.018,be.alpha<=0){re.splice(xe,1);continue}P.globalAlpha=be.alpha,P.fillStyle=be.color,P.beginPath(),P.arc(be.x,be.y,be.size,0,Math.PI*2),P.fill()}P.globalAlpha=1,(oe!==null||re.length>0)&&requestAnimationFrame(we)}}we()}function ce(){oe!==null&&(clearInterval(oe),oe=null);const R=document.getElementById("fireworks-canvas");R&&R.getContext("2d").clearRect(0,0,R.width,R.height)}if(a){const R=document.getElementById("reveal-btns");R&&(R.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(J=document.getElementById("reveal-next"))==null||J.addEventListener("click",()=>{ce(),l.remove(),a()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ce(),l.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ce(),l.remove(),i("boosters")})}function xn(e){var t,i,a,l;if(e.card_type==="player"&&e.player)return pn(e);if(e.card_type==="game_changer"){const d=e._gcDef,s=(d==null?void 0:d.gc_type)==="ultra_game_changer",c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},u={purple:"#b06ce0",light_blue:"#00d4ef"},o=c[d==null?void 0:d.color]||c.purple,n=u[d==null?void 0:d.color]||u.purple,m=(d==null?void 0:d.name)||e.gc_type||"Game Changer",b=(d==null?void 0:d.effect)||((t=gi[e.gc_type])==null?void 0:t.desc)||"",g=d!=null&&d.image_url?`/icons/${d.image_url}`:null,w=((i=gi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${o};border-radius:14px;border:3px solid ${n};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${n}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${m.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${s?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${g?`<img src="${g}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${w}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${b.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const d=e._stadiumDef,s=(d==null?void 0:d.name)||"Stade",c=((a=d==null?void 0:d.club)==null?void 0:a.encoded_name)||(d==null?void 0:d.country_code)||"—",u=d!=null&&d.image_url?`/icons/${d.image_url}`:((l=d==null?void 0:d.club)==null?void 0:l.logo_url)||(d!=null&&d.country_code?`https://flagcdn.com/64x48/${d.country_code.toLowerCase()}.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${s.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${s}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${u?`<img src="${u}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function yn(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const l={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};a.innerHTML=`
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
      </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>a.remove());return}bn()}function bn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
    `,document.body.appendChild(t);let i=5;const a=setInterval(()=>{i--;const l=document.getElementById("mw-ad-cd");l&&(l.textContent=i),i<=0&&(clearInterval(a),t.remove(),e(!0))},1e3)})}async function vn(e,{state:t,navigate:i,toast:a,refreshProfile:l}){var b,g;const{data:d}=await E.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let s=Array.isArray((b=t.profile)==null?void 0:b.pending_boosters)?[...t.profile.pending_boosters]:[];if(!s.length){await E.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let c=null;try{const r=(await co()).find(p=>(p.name||"").toLowerCase().includes("new player"));r&&(c=uo(r))}catch(w){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',w)}const u=s.length;let o=0;e.innerHTML=`
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
  </div>`;const n=async()=>{await E.from("users").update({pending_boosters:s}).eq("id",t.user.id)};async function m(){var A;if(o>=u||!s.length){await E.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),l&&await l(),a("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const w=s[0],{data:r}=await E.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let p=[];try{if(w.type==="formation")p=await mo(t.profile,0);else if(w.type==="game_changer")p=await go(t.profile,w.count||3,0);else if(c&&((A=c.rates)!=null&&A.length)){const j={...c,cost:0,cardCount:w.count||c.cardCount||5};p=await mi(t.profile,j),w.guaranteeGK&&!t.profile.first_booster_opened&&(p.some(q=>q.player&&q.player.job==="GK")||await wn(t.profile,p),await E.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else p=await fo(t.profile,w.count||5,0)}catch(j){a(j.message||"Erreur ouverture booster","error");return}s.shift(),o++,await n();const L=w.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:w.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${o}/${u})`,img:(c==null?void 0:c.img)||"/icons/booster-players.png"};xo(p,L,i,()=>{m()})}(g=document.getElementById("onboard-start"))==null||g.addEventListener("click",()=>m())}async function wn(e,t){try{const{data:i}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const a=i[Math.floor(Math.random()*i.length)],l=t.findIndex(s=>s.player);if(l===-1)return;const d=t[l];await E.from("cards").update({player_id:a.id}).eq("id",d.id),t[l]={...d,player_id:a.id,player:a}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const It={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Mt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function _t(e,t,i,a,l){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${a}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",l)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function xi(e,t){var d,s;const i=e.player,a=e.evolution_bonus||0,l=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?a:0)+(i.job2==="GK"&&l>0?a:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?a:0)+(i.job2==="DEF"&&l>0?a:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?a:0)+(i.job2==="MIL"&&l>0?a:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?a:0)+(i.job2==="ATT"&&l>0?a:0),evolution_bonus:a,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((d=i.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((s=i.clubs)==null?void 0:s.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function jt(e,t){if(!t||!e)return e;const{club_id:i,country_code:a}=t;return Object.values(e).forEach(l=>{Array.isArray(l)&&l.forEach(d=>{const s=i&&String(d.club_id)===String(i),c=a&&String(d.country_code)===String(a);(s||c)&&(d.stadiumBonus=!0)})}),e}function Nt(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:a}=t;return e.forEach(l=>{if(!l)return;const d=i&&String(l.club_id)===String(i),s=a&&String(l.country_code)===String(a);(d||s)&&(l.stadiumBonus=!0)}),e}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ri(){const e=Math.random()*100;return e<10?3:e<30?2:1}function yt(e,t){const i=It[t]||It["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(s=>s.position)){for(const s of["GK","DEF","MIL","ATT"]){const c=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===s).sort((o,n)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(n.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:s})),u=lt(c.length);c.forEach((o,n)=>{o._col=u[n]}),a[s]=c}return a}const d=[...e];for(const s of["GK","DEF","MIL","ATT"]){const c=[];for(let o=0;o<i[s];o++){let n=d.findIndex(m=>m.job===s);if(n===-1&&(n=d.findIndex(m=>m.job2===s)),n===-1&&(n=0),d[n]){const m={...d[n],_line:s};c.push(m),d.splice(n,1)}}const u=lt(c.length);c.forEach((o,n)=>{o._col=u[n]}),a[s]=c}return a}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Je(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ai(e,t,i){const l=new Set,d=t.filter(n=>{const m=n.gc_type||n.id;return l.has(m)?!1:(l.add(m),!0)});let s=[];function c(n,m){const b=n._gcDef,g={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},w={purple:"#9b59b6",light_blue:"#00bcd4"},r=g[b==null?void 0:b.color]||g.purple,p=w[b==null?void 0:b.color]||w.purple;return`<div class="gc-select-card" data-id="${n.id}"
      style="width:100px;border-radius:10px;border:3px solid ${m?"#FFD700":p};background:${r};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${m?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${m?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((b==null?void 0:b.name)||n.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(b==null?void 0:b.name)||n.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${b!=null&&b.image_url?`<img src="/icons/${b.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((b==null?void 0:b.effect)||"").slice(0,50)}</span>
      </div>
      ${m?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const u=n=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(n)};function o(){var m,b,g;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const n=s.length>0;e.innerHTML=`
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
        ${d.map(w=>{const r=s.find(p=>p.gc_type===w.gc_type);return c(w,!!r)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(w=>{w.addEventListener("click",()=>{const r=w.dataset.id,p=d.find(A=>A.id===r);if(!p)return;const L=s.findIndex(A=>A.gc_type===p.gc_type);L>-1?s.splice(L,1):s.length<3&&s.push(p),o()})}),(m=e.querySelector("#gc-launch"))==null||m.addEventListener("click",()=>{n&&u(s)}),(b=e.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>u([])),(g=e.querySelector("#gc-reset"))==null||g.addEventListener("click",()=>{s.length&&(s=[],o())})}o()}function _n(e){var a;const t=((a=e==null?void 0:e.state)==null?void 0:a.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function $n(e,t,i){const{state:a,navigate:l}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",a.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){_t(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>l("decks"));return}const s=d.map(b=>b.id),{data:c}=await E.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",s).order("slot_order"),u=[...new Set((c||[]).filter(b=>{var g,w;return((g=b.card)==null?void 0:g.card_type)==="stadium"&&((w=b.card)==null?void 0:w.stadium_id)}).map(b=>b.card.stadium_id))],o={};if(u.length){const{data:b}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",u);(b||[]).forEach(g=>{o[g.id]=g}),(c||[]).forEach(g=>{var w,r;((w=g.card)==null?void 0:w.card_type)==="stadium"&&((r=g.card)!=null&&r.stadium_id)&&(g.card._stadiumDef=o[g.card.stadium_id]||null)})}let n=0;function m(){var q,B,M,H,oe,ne,ce;const b=d[n],g=(c||[]).filter(de=>de.deck_id===b.id),w=g.filter(de=>{var J;return de.is_starter&&((J=de.card)==null?void 0:J.player)}).map(de=>xi(de.card,de.position)),r=g.find(de=>{var J;return((J=de.card)==null?void 0:J.card_type)==="formation"}),p=b.formation||((q=r==null?void 0:r.card)==null?void 0:q.formation)||"4-4-2";let L=w.length>=11?yt(w,p):null,A=((B=b.stadium_card)==null?void 0:B.stadium_def)||null;A&&L&&(L=jt(L,A));const j=w.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${_n(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${n===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${n===0?"0.1":"0.3"});color:${n===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${n===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${b.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${p} · ${w.length}/11 ${b.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${n===d.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${n===d.length-1?"0.1":"0.3"});color:${n===d.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${n===d.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${A?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${A.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((M=A.club)==null?void 0:M.encoded_name)||A.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${L?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ft(L,p,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${w.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${d.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${d.map((de,J)=>`<div style="width:7px;height:7px;border-radius:50%;background:${J===n?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${j?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${j?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${j?"pointer":"default"}">
          ${j?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const J=e.querySelector(".deck-preview-wrap svg");J&&(J.removeAttribute("width"),J.removeAttribute("height"),J.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",J.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(H=document.getElementById("prev-deck"))==null||H.addEventListener("click",()=>{n>0&&(n--,m())}),(oe=document.getElementById("next-deck"))==null||oe.addEventListener("click",()=>{n<d.length-1&&(n++,m())}),(ne=document.getElementById("validate-deck"))==null||ne.addEventListener("click",()=>{if(!j)return;const de=t.state.params||{};t.navigate("match",{...de,matchMode:de.matchMode||i,deckId:b.id})}),(ce=document.getElementById("cancel-deck-select"))==null||ce.addEventListener("click",()=>{Je(e),l("home")});const N=document.getElementById("deck-swipe-zone");if(N){let de=0,J=0;N.addEventListener("touchstart",R=>{de=R.touches[0].clientX,J=R.touches[0].clientY},{passive:!0}),N.addEventListener("touchend",R=>{const P=R.changedTouches[0].clientX-de,re=R.changedTouches[0].clientY-J;Math.abs(P)<40||Math.abs(P)<Math.abs(re)||(P<0&&n<d.length-1?(n++,m()):P>0&&n>0&&(n--,m()))},{passive:!0})}}m()}function yo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function We(e,t=44,i=58,a=null){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const l=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),d=yo(e),s=e._line||e.job||"MIL",c=Mt[s]||"#555",u={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=bo(e==null?void 0:e.country_code),n=Math.round(i*.19),m=Math.round(i*.25),b=i-Math.round(i*.19)-Math.round(i*.25),g=e!=null&&e.used?.28:1,w=e._evolution_bonus??e.evolution_bonus??0,r=e.note!==void 0?Number(e.note)||0:(Number(Ie(e,s))||0)+(e.boost||0)+(e.job===s||e.job2===s?w:0),p=!e.used&&(e.stadiumBonus||a&&(a.club_id&&String(e.club_id)===String(a.club_id)||a.country_code&&e.country_code===a.country_code)),L=r+(p?10:0),A=p?"#E87722":"#111";return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${u};background:${c};position:relative;overflow:hidden;flex-shrink:0;opacity:${g}">
    <div style="position:absolute;top:0;left:0;right:0;height:${n}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${l&&!(e!=null&&e.used)?`<img src="${l}" style="position:absolute;top:${n}px;left:0;width:${t}px;height:${b}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${m}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Qt(e==null?void 0:e.country_code)?`<img src="${Qt(e.country_code)}" style="width:${m+2}px;height:${m-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${m-4}px">${o}</span>`}
      <span style="font-size:${m-2}px;font-weight:900;color:${e!=null&&e.used?"#111":A};font-family:Arial Black,Arial">${e!=null&&e.used?"–":L}</span>
      ${d?`<img src="${d}" style="width:${m-4}px;height:${m-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,m-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ot(e,t,i){if(!(e!=null&&e.length))return"";const a=e.slice(0,5);let l='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return a.forEach((d,s)=>{if(l+=We(d,40,52),s<a.length-1){const c=at(d,a[s+1]);l+=`<div style="width:7px;height:3px;background:${c==="#ff3333"||c==="#cc2222"?"rgba(255,255,255,0.12)":c};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(l+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),l+="</div>",l}function Qt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function bo(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ut(e,t,i,a,l=310,d=310,s=[]){var j;const c=Rt[t]||{},u=Yi(t)||hi[t]||[],o={},n=["ATT","MIL","DEF","GK"];for(const N of n)(e[N]||[]).forEach((B,M)=>{o[`${N}${M+1}`]=B});function m(N){const q=c[N];return q?{x:q.x*l,y:q.y*d}:null}let b="";for(const[N,q]of u){const B=m(N),M=m(q);if(!B||!M)continue;const H=o[N],oe=o[q],ne=at(H,oe);ne==="#00ff88"||ne==="#FFD700"?(b+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${ne}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,b+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${ne}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):b+=`<line x1="${B.x.toFixed(1)}" y1="${B.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${ne}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=48,w=64,r=13,p=16,L={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[N,q]of Object.entries(o)){const B=m(N);if(!B||!q)continue;const M=N.replace(/[0-9]/g,""),H=Mt[M]||"#555",oe=s.includes(q.cardId),ne=i==="attack"&&(["MIL","ATT"].includes(M)||oe)&&!q.used||i==="defense"&&["GK","DEF","MIL"].includes(M)&&!q.used,ce=a.includes(q.cardId);let de;i==="attack"?de=oe?Math.max(1,Number(q.note_a)||0):M==="MIL"?Number(q.note_m)||0:Number(q.note_a)||0:i==="defense"?de=M==="GK"?Number(q.note_g)||0:M==="MIL"?Number(q.note_m)||0:Number(q.note_d)||0:de=Number(M==="GK"?q.note_g:M==="DEF"?q.note_d:M==="MIL"?q.note_m:q.note_a)||0,de=de+(q.boost||0),q.stadiumBonus&&(i==="attack"&&(M==="ATT"||M==="MIL")||i==="defense"&&(M==="GK"||M==="DEF"||M==="MIL")?de+=10:i||(de+=10));const J=(B.x-g/2).toFixed(1),R=(B.y-w/2).toFixed(1),P=L[q==null?void 0:q.rarity]||L.normal;if(q.used){const Fe=typeof import.meta<"u"&&"/"||"/",ke=`${typeof window<"u"&&((j=window.location)==null?void 0:j.origin)||""}${Fe}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");b+=`<rect x="${J}" y="${R}" width="${g}" height="${w}" rx="5" fill="#161616"/>`,b+=`<image href="${ke}" xlink:href="${ke}" x="${J}" y="${R}" width="${g}" height="${w}" preserveAspectRatio="xMidYMid slice"/>`,b+=`<rect x="${J}" y="${R}" width="${g}" height="${w}" rx="5" fill="none" stroke="${P}" stroke-width="2" opacity="0.7"/>`,b+=`<rect x="${J}" y="${R}" width="${g}" height="${w}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${q.cardId}" data-role="${M}" style="cursor:pointer"/>`;continue}const re=ce?.45:1,me=ce?"#FFD700":P,we=ce?3:(q==null?void 0:q.rarity)==="legende"||(q==null?void 0:q.rarity)==="légende"||(q==null?void 0:q.rarity)==="pepite"||(q==null?void 0:q.rarity)==="pépite"?2.5:2,xe=w-r-p;b+=`<defs><clipPath id="cp-${N}"><rect x="${J}" y="${(B.y-w/2+r).toFixed(1)}" width="${g}" height="${xe}"/></clipPath></defs>`,b+=`<rect x="${J}" y="${R}" width="${g}" height="${w}" rx="5" fill="${H}" opacity="${re}"/>`;const be=Pe(q);be&&(b+=`<image href="${be}" xlink:href="${be}" x="${J}" y="${(B.y-w/2+r).toFixed(1)}" width="${g}" height="${xe}" clip-path="url(#cp-${N})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${J}" y="${R}" width="${g}" height="${r}" rx="4" fill="rgba(255,255,255,0.92)"/>`,b+=`<text x="${B.x.toFixed(1)}" y="${(B.y-w/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(q.name||"").slice(0,9)}</text>`;const Ce=(B.y+w/2-p).toFixed(1);b+=`<rect x="${J}" y="${Ce}" width="${g}" height="${p}" fill="rgba(255,255,255,0.92)"/>`;{const Fe=Qt(q.country_code);Fe?b+=`<image href="${Fe}" xlink:href="${Fe}" x="${(B.x-20).toFixed(1)}" y="${(B.y+w/2-p+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:b+=`<text x="${(B.x-13).toFixed(1)}" y="${(B.y+w/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${bo(q.country_code)}</text>`;const De=q.stadiumBonus?"#E87722":"#111";b+=`<text x="${B.x.toFixed(1)}" y="${(B.y+w/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${De}" font-family="Arial Black">${de}</text>`;const ke=yo(q);ke?b+=`<image href="${ke}" xlink:href="${ke}" x="${(B.x+g/2-14).toFixed(1)}" y="${(B.y+w/2-p+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:q.clubName&&(b+=`<text x="${(B.x+14).toFixed(1)}" y="${(B.y+w/2-p/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(q.clubName||"").slice(0,3).toUpperCase()}</text>`),q.stadiumBonus&&(b+=`<rect x="${(B.x-g/2).toFixed(1)}" y="${(B.y-w/2).toFixed(1)}" width="${g}" height="${w}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}b+=`<rect x="${J}" y="${R}" width="${g}" height="${w}" rx="5" fill="${ce?"rgba(255,255,255,0.12)":"none"}" stroke="${me}" stroke-width="${we}" opacity="${re}"/>`,ne&&(b+=`<rect x="${J}" y="${R}" width="${g}" height="${w}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${ce?"selected":""}" data-card-id="${q.cardId}" data-role="${M}" style="cursor:pointer"/>`)}const A=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-A} ${-A} ${l+A*2} ${d+A*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
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
  </div>`}async function si(e,t,i,a){var B;const{state:l,navigate:d,toast:s}=t;et(e);const c=l.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!c.deckId)return $n(e,t,i);const u=c.deckId;let o,n,m,b;try{const M=await Promise.all([E.from("decks").select("formation,name,stadium_card_id").eq("id",u).single(),E.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",u).order("slot_order")]);o=M[0].data,m=M[0].error,n=M[1].data,b=M[1].error}catch(M){console.error("[Match] Exception chargement deck:",M),_t(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(m||b){console.error("[Match] Erreur Supabase:",m||b),_t(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const g=(n||[]).filter(M=>{var H;return M.is_starter&&((H=M.card)==null?void 0:H.player)}).map(M=>xi(M.card,M.position)),w=(n||[]).filter(M=>{var H;return!M.is_starter&&((H=M.card)==null?void 0:H.player)}).map(M=>xi(M.card,M.position));if(g.length<11){_t(e,"⚠️",`Deck incomplet (${g.length}/11).`,"Compléter",()=>d("decks"));return}const r=(n||[]).find(M=>{var H;return((H=M.card)==null?void 0:H.card_type)==="formation"}),p=(o==null?void 0:o.formation)||((B=r==null?void 0:r.card)==null?void 0:B.formation)||"4-4-2",{data:L,error:A}=await E.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",l.profile.id).eq("card_type","game_changer"),{data:j}=await E.from("gc_definitions").select("*").eq("is_active",!0),N=(L||[]).map(M=>({...M,_gcDef:(j==null?void 0:j.find(H=>H.name===M.gc_type||H.id===M.gc_definition_id))||null}));let q=null;if(o!=null&&o.stadium_card_id){const{data:M}=await E.from("cards").select("stadium_id").eq("id",o.stadium_card_id).single();if(M!=null&&M.stadium_id){const{data:H}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",M.stadium_id).single();q=H||null}}a({deckId:u,formation:p,starters:g,subsRaw:w,gcCardsEnriched:N,gcDefs:j||[],stadiumDef:q})}async function kn(e,t){const{state:i}=t,l=(i.params||{}).matchMode||"vs_ai_easy",d=l.replace("vs_ai_",""),s=l;await si(e,t,l,async({deckId:c,formation:u,starters:o,subsRaw:n,gcCardsEnriched:m,gcDefs:b,stadiumDef:g})=>{try{let w=yt(o,u);g&&(w=jt(w,g),Nt(n,g));const r=await En(u,d),p=r.lines||r,L=async A=>{try{const{data:j,error:N}=await E.from("matches").insert({home_id:i.profile.id,away_id:null,mode:s,home_deck_id:c,status:"in_progress"}).select().single();if(N){console.error("[MatchIA] Erreur création match:",N),_t(e,"⚠️","Impossible de créer le match ("+N.message+").","Retour",()=>t.navigate("home"));return}const q=r.stadiumDef||null;q&&p&&(jt(p,q),Nt(r.subs||[],q));const B={gcDefs:b||[],matchId:j==null?void 0:j.id,mode:s,difficulty:d,formation:u,homeTeam:w,aiTeam:p,homeSubs:n,subsUsed:0,maxSubs:Math.min(n.length,3),aiSubs:r.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((r.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:r.gcCards||[],aiUsedGc:[],aiStadiumDef:q,homeScore:0,aiScore:0,gcCards:A,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};An(e,B,t)}catch(j){console.error("[MatchIA] Exception launchMatch:",j),_t(e,"⚠️","Erreur au lancement du match : "+j.message,"Retour",()=>t.navigate("home"))}};if(!m.length){L([]);return}ai(e,m,L)}catch(w){console.error("[MatchIA] Exception setup:",w),_t(e,"⚠️","Erreur de préparation du match : "+w.message,"Retour",()=>t.navigate("home"))}})}async function En(e,t){var p;const{data:i}=await E.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:Tn(e),subs:[],gcCards:[],stadiumDef:null};const a=It[e]||It["4-4-2"],l={GK:[],DEF:[],MIL:[],ATT:[]},d=new Set;function s(L,A,j){var N,q;return d.add(L.id),{cardId:"ai-"+L.id+"-"+j,id:L.id,firstname:L.firstname,name:L.surname_encoded,country_code:L.country_code,club_id:L.club_id,job:L.job,job2:L.job2,note_g:Number(L.note_g)||0,note_d:Number(L.note_d)||0,note_m:Number(L.note_m)||0,note_a:Number(L.note_a)||0,rarity:L.rarity,skin:L.skin,hair:L.hair,hair_length:L.hair_length,clubName:((N=L.clubs)==null?void 0:N.encoded_name)||null,clubLogo:((q=L.clubs)==null?void 0:q.logo_url)||null,boost:0,used:!1,_line:A}}for(const L of["GK","DEF","MIL","ATT"]){const A=i.filter(M=>M.job===L&&!d.has(M.id)),j=i.filter(M=>M.job!==L&&!d.has(M.id)),N=[...A,...j],q=[];for(let M=0;M<a[L];M++){const H=N[M];H&&q.push(s(H,L,M))}const B=lt(q.length);q.forEach((M,H)=>{M._col=B[H]}),l[L]=q}const u=i.filter(L=>!d.has(L.id)).slice(0,5).map((L,A)=>s(L,L.job,100+A)),m=Object.keys(Re).sort(()=>Math.random()-.5).slice(0,3).map((L,A)=>{var j,N;return{id:"ai-gc-"+A,gc_type:L,name:((j=Re[L])==null?void 0:j.name)||L,icon:((N=Re[L])==null?void 0:N.icon)||"⚡"}}),b=Object.values(l).flat(),g={};b.forEach(L=>{L.club_id&&(g[L.club_id]=(g[L.club_id]||0)+1)});const w=(p=Object.entries(g).sort((L,A)=>A[1]-L[1])[0])==null?void 0:p[0];let r=null;if(w){const{data:L}=await E.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",w).single();L&&(r={club_id:L.id,country_code:null,name:L.encoded_name+" Stadium",club:{encoded_name:L.encoded_name,logo_url:L.logo_url}})}return{lines:l,subs:u,gcCards:m,stadiumDef:r}}function Tn(e){const t=It[e]||It["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},a=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let l=0;for(const d of["GK","DEF","MIL","ATT"]){const s=[];for(let u=0;u<t[d];u++){const o=3+Math.floor(Math.random()*5);s.push({cardId:"fake-"+l,id:"fake-"+l,firstname:"IA",name:a[l%a.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?o:2,note_d:d==="DEF"?o:2,note_m:d==="MIL"?o:2,note_a:d==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:d}),l++}const c=lt(s.length);s.forEach((u,o)=>{u._col=c[o]}),i[d]=s}return i}function An(e,t,i){var a;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((a=t.aiStadiumDef.club)==null?void 0:a.encoded_name)||""}</div>`:""}
    <div style="width:min(90vw,420px)">${ut(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Sn(e,t,i),5e3)}function Sn(e,t,i){const a=t.homeTeam.MIL||[],l=t.aiTeam.MIL||[],d=t.stadiumDef||null,s=t.aiStadiumDef||null;function c(A,j){const N=Ie(A,"MIL"),q=A.evolution_bonus||A._evolution_bonus||0,B=A.job==="MIL"||A.job2==="MIL"?q:0,M=A.stadiumBonus||j&&(j.club_id&&String(A.club_id)===String(j.club_id)||j.country_code&&A.country_code===j.country_code)?10:0;return N+B+M}function u(A,j){return A.reduce((N,q)=>N+c(q,j),0)}function o(A){let j=0;for(let N=0;N<A.length-1;N++){const q=at(A[N],A[N+1]);q==="#00ff88"?j+=2:q==="#FFD700"&&(j+=1)}return j}const n=u(a,d)+o(a),m=u(l,s)+o(l),b=n>=m;function g(A,j,N,q,B){return`<div id="duel-row-${q}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${j}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${A.map((M,H)=>{const oe=H<A.length-1?at(M,A[H+1]):null,ne=!oe||oe==="#ff3333"||oe==="#cc2222",ce=oe==="#00ff88"?"+2":oe==="#FFD700"?"+1":"";c(M,B),M.stadiumBonus||B&&(B.club_id&&String(M.club_id)===String(B.club_id)||B.country_code&&(M.country_code,B.country_code));const de=M.evolution_bonus||M._evolution_bonus||0;return`
          <div class="duel-card duel-card-${q}" data-idx="${H}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${We({...M,_evolution_bonus:de},58,78,B)}
          </div>
          ${H<A.length-1?`<div class="duel-link duel-link-${q}" data-idx="${H}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ne?"rgba(255,255,255,0.12)":oe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ne?"none":`0 0 8px ${oe}`}">
            ${ce?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${oe}">${ce}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${q}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${u(A,B)} + ${o(A)} liens = <b style="color:#fff">${u(A,B)+o(A)}</b>
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

    ${g(a,t.clubName,"#D4A017","home",d)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${g(l,"IA","#bb2020","ai",s)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const w=()=>{const A=(j,N)=>e.querySelectorAll(j).forEach((q,B)=>{setTimeout(()=>{q.style.opacity="1",q.style.transform="translateY(0) scale(1)"},N+B*90)});A(".duel-card-home",150),A(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((j,N)=>{setTimeout(()=>{j.style.opacity="1"},N*70)}),900),setTimeout(()=>{const j=e.querySelector("#vs-label");j&&(j.style.opacity="1",j.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(N=>N.style.opacity="1")},1250),setTimeout(()=>{r("score-home",n,800),r("score-ai",m,800)},1500)};function r(A,j,N){const q=document.getElementById(A);if(!q)return;const B=performance.now(),M=H=>{const oe=Math.min(1,(H-B)/N);q.textContent=Math.round(j*(1-Math.pow(1-oe,3))),oe<1?requestAnimationFrame(M):q.textContent=j};requestAnimationFrame(M)}requestAnimationFrame(w),t.attacker=b?"home":"ai";const p=b?ri():null;b&&(t.boostCard={value:p}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:a.map(A=>({name:A.name,note:Ie(A,"MIL"),portrait:Pe(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo})),aiPlayers:l.map(A=>({name:A.name,note:Ie(A,"MIL"),portrait:Pe(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo})),homeTotal:n,aiTotal:m,text:`Duel milieu : ${t.clubName} ${n} – ${m} IA → ${b?t.clubName+" attaque":"IA attaque"}`});const L=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ye(e,t,i),t.attacker==="ai"&&setTimeout(()=>ei(e,t,i),800)};setTimeout(()=>{const A=document.getElementById("score-home"),j=document.getElementById("score-ai"),N=document.getElementById(b?"duel-row-home":"duel-row-ai"),q=document.getElementById(b?"duel-row-ai":"duel-row-home"),B=b?A:j,M=b?j:A;B&&(B.style.fontSize="80px",B.style.color=b?"#FFD700":"#ff6b6b",B.style.animation="duelPulse .5s ease"+(b?", duelGlow 1.5s ease infinite .5s":"")),M&&(M.style.opacity="0.25"),setTimeout(()=>{N&&(N.style.transformOrigin="center",N.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",N.style.zIndex="5"),setTimeout(()=>{var oe;const H=document.getElementById("duel-shock");if(H){const ne=(oe=q||N)==null?void 0:oe.getBoundingClientRect(),ce=e.querySelector(".match-screen").getBoundingClientRect();ne&&(H.style.top=ne.top-ce.top+ne.height/2+"px"),H.style.animation="shockwave .5s ease-out forwards"}q&&(q.style.transformOrigin="center",q.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var oe;const H=document.getElementById("duel-finale");H&&(H.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${b?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${b?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${p}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,H.style.transition="opacity .45s ease",H.style.opacity="1",H.style.pointerEvents="auto",(oe=document.getElementById("start-match-btn"))==null||oe.addEventListener("click",L))},600)},700)},2800)}function zn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Ye(e,t,i){var B,M,H,oe,ne,ce,de,J,R;const a=t.selected.map(P=>P.cardId),l=t.usedSubIds||[],d=t.homeSubs.filter(P=>!l.includes(P.cardId)),c=Object.values(t.homeTeam).flat().filter(P=>P.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,u=!["GK","DEF","MIL","ATT"].some(P=>(t.aiTeam[P]||[]).some(re=>!re.used)),o=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(P=>!P.used),n=t.phase==="attack"&&u&&o.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];t.log[t.log.length-1];const m=t.phase==="ai-attack"||t.phase==="ai-defense",b=t.phase==="attack",g=t.phase==="defense",w=t.phase==="finished",p=(t.homeSubs||[]).filter(P=>!(t.usedSubIds||[]).includes(P.cardId)).length>0&&t.subsUsed<t.maxSubs,L=b&&o.length===0&&!p,A=t.gcCards.filter(P=>!t.usedGc.includes(P.id)),j=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${ot((re.players||[]).map(me=>({...me,used:!1})),"#ff6b6b",re.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const re=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ot((re.players||[]).map(me=>({...me,used:!1})),"#00ff88",re.total)}
          </div>`}const P=t.log[t.log.length-1];return P?'<div style="padding:2px 4px">'+zn(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const P=window.innerWidth>=700,re=(V,ee,ge)=>{var _,T;const U=(t.gcDefs||[]).find(f=>f.name===V.gc_type),X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[U==null?void 0:U.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Y={purple:"#b06ce0",light_blue:"#00d4ef"}[U==null?void 0:U.color]||"#b06ce0",se=(U==null?void 0:U.name)||V.gc_type,ve=(U==null?void 0:U.effect)||((_=Re[V.gc_type])==null?void 0:_.desc)||"",Se=U!=null&&U.image_url?`/icons/${U.image_url}`:null,ze=((T=Re[V.gc_type])==null?void 0:T.icon)||"⚡",he=Math.round(ge*.22),Ae=Math.round(ge*.22),C=ge-he-Ae,D=se.length>12?7:9;return`<div class="gc-mini" data-gc-id="${V.id}" data-gc-type="${V.gc_type}"
          style="box-sizing:border-box;width:${ee}px;height:${ge}px;border-radius:10px;border:2px solid ${Y};background:${X};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${he}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${D}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ee-6}px">${se}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${C}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Se?`<img src="${Se}" style="max-width:${ee-10}px;max-height:${C-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(C*.55)}px">${ze}</span>`}
          </div>
          <div style="height:${Ae}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ve.slice(0,38)}</span>
          </div>
        </div>`},me=(V,ee)=>{var ge;return`<div id="boost-card"
          style="box-sizing:border-box;width:${V}px;height:${ee}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ee*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(ee*.2)}px">⚡</div>
            <div style="font-size:${Math.round(ee*.09)}px;color:#000;font-weight:900">+${(ge=t.boostCard)==null?void 0:ge.value}</div>
          </div>`},we=(V,ee)=>ee?me(130,175):re(V,130,175),xe=(V,ee)=>ee?me(68,95):re(V,68,95),be=P?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ce=w?`<button id="btn-results" style="${be};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:m?`<div style="${be};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:L?`<button id="btn-pass" style="${be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:b?`<button id="btn-action" style="${be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${be};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Fe=b||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",De=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${P?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${d.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':d.map(V=>`<div class="sub-btn-col" data-sub-id="${V.cardId}" style="cursor:pointer;flex-shrink:0">${We(V,76,100)}</div>`).join("")}
      </div>`,ke=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ft(t.homeTeam,t.formation,t.phase,a,300,300,n)}
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
            ${A.map(V=>we(V,!1)).join("")}
            ${j?we(null,!0):""}
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
            ${A.map(V=>xe(V,!1)).join("")}
            ${j?xe(null,!0):""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(P=>{var re,me,we;if(P.type==="duel"){const xe=P.isGoal,be=P.homeScored?"#FFD700":xe?"#ff6b6b":"rgba(255,255,255,0.3)",Ce=P.homeScored?"⚽ BUT !":xe?"⚽ BUT IA !":(re=P.homePlayers)!=null&&re.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${xe?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${be};margin-bottom:4px">
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
  </div>`;function N(){const P=e.querySelector(".match-screen");if(!P)return;const re=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.bottom="auto",P.style.height=re+"px",P.style.minHeight=re+"px",P.style.maxHeight=re+"px",P.style.overflow="hidden";const me=e.querySelector("#mobile-action-bar"),we=e.querySelector("#mobile-play-area");me&&we&&(we.style.paddingBottom=me.offsetHeight+"px")}if(N(),setTimeout(N,120),setTimeout(N,400),setTimeout(N,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",N),window.visualViewport.addEventListener("scroll",N)),window.addEventListener("resize",N)),function(){const re=e.querySelector(".terrain-wrapper svg");re&&(re.removeAttribute("width"),re.removeAttribute("height"),re.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",re.setAttribute("viewBox","-26 -26 352 352"),re.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const P=e.querySelector(".terrain-wrapper svg");P&&(P.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let P=!1,re=30;const me=()=>document.getElementById("match-timer"),we=()=>{const xe=me();if(!xe)return;const be=String(Math.floor(re/60)).padStart(2,"0"),Ce=String(re%60).padStart(2,"0");xe.textContent=` ${be}:${Ce}`,xe.style.color=P?"#ff2222":"#ff9500",xe.style.fontWeight="900"};we(),t._timerInt=setInterval(()=>{if(re--,re<0)if(!P)P=!0,re=15,we();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const xe=document.createElement("div");xe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",xe.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(xe),setTimeout(()=>{xe.remove(),Ft(e,t,i)},2500)}else we()},1e3)}(B=document.getElementById("match-quit"))==null||B.addEventListener("click",()=>{Je(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Ft(e,t,i))}),(M=document.getElementById("view-ai"))==null||M.addEventListener("click",()=>Nn(t,i)),(H=document.getElementById("toggle-history"))==null||H.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.add("open")}),(oe=document.getElementById("close-history"))==null||oe.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.remove("open")}),(ne=document.getElementById("btn-action"))==null||ne.addEventListener("click",()=>{t.selected.length!==0&&(b?In(e,t,i):g&&Mn(e,t,i))}),(ce=document.getElementById("btn-results"))==null||ce.addEventListener("click",()=>Ft(e,t,i)),(de=document.getElementById("btn-pass"))==null||de.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ei(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>Ln(P,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(P=>{P.addEventListener("click",()=>ci(e,t,i,null,P.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(P=>{P.addEventListener("click",()=>Fn(P.dataset.gcId,P.dataset.gcType,e,t,i))}),(J=document.getElementById("boost-card"))==null||J.addEventListener("click",()=>Pn(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(P=>{P.addEventListener("click",()=>ci(e,t,i,P.dataset.subId))}),(R=document.getElementById("sub-btn-main"))==null||R.addEventListener("click",()=>ci(e,t,i))}function Ln(e,t,i,a){const l=e.dataset.cardId,d=e.dataset.role,s=t.selected.findIndex(c=>c.cardId===l);if(s!==-1)t.selected.splice(s,1);else{if(t.selected.length>=3){a.toast("Maximum 3 joueurs","error");return}const c=(t.homeTeam[d]||[]).find(u=>u.cardId===l);c&&t.selected.push({...c,_role:d,_line:d})}Ye(i,t,a)}function Ti(e,t,i){e.matchId&&E.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function In(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const a=!["GK","DEF","MIL","ATT"].some(s=>(t.aiTeam[s]||[]).some(c=>!c.used)),l=t.selected.map(s=>{const c=(t.homeTeam[s._role]||[]).find(o=>o.cardId===s.cardId)||s,u=a&&["GK","DEF"].includes(s._role);return{...c,_line:s._role,...u?{note_a:Math.max(1,Number(c.note_a)||0)}:{}}}),d=Ot(l,t.modifiers.home);t.pendingAttack={...d,players:[...l],side:"home"},t.selected.forEach(s=>{const c=(t.homeTeam[s._role]||[]).find(u=>u.cardId===s.cardId);c&&(c.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(s=>s.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ye(e,t,i),setTimeout(()=>qn(e,t,i),1200)}function Mn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const a=t.selected.map(c=>({...(t.homeTeam[c._role]||[]).find(o=>o.cardId===c.cardId)||c,_line:c._role})),l=Ht(a,t.modifiers.home);t.selected.forEach(c=>{const u=(t.homeTeam[c._role]||[]).find(o=>o.cardId===c.cardId);u&&(u.used=!0)});const d=Ut(t.pendingAttack.total,l.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(c=>({name:c.name,note:c._line==="MIL"?c.note_m:c.note_a,portrait:Pe(c),job:c.job,country_code:c.country_code,rarity:c.rarity,clubName:c.clubName,clubLogo:c.clubLogo})),homePlayers:t.selected.map(c=>{const u=(t.homeTeam[c._role]||[]).find(o=>o.cardId===c.cardId)||c;return{name:u.name,note:(u._line==="GK"?Number(u.note_g)||0:u._line==="MIL"?Number(u.note_m)||0:Number(u.note_d)||0)+(u.boost||0),portrait:Pe(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo}}),homeTotal:l.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(d.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${l.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ye(e,t,i),ti(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${l.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,zt(e,t,i,"home-attack")}function jn(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(u=>u.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(u=>!e.aiUsedSubIds.includes(u.cardId));if(!i.length)return;const a=t[Math.floor(Math.random()*t.length)],l=i.find(u=>u.job===a.job)||i[0],d={...l,used:!1,_line:a._line,_col:a._col},s=e.aiTeam[a._line],c=s.findIndex(u=>u.cardId===a.cardId);c!==-1&&(s[c]=d),e.aiUsedSubIds.push(l.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${l.firstname} ${l.name} remplace ${a.firstname} ${a.name}`,type:"info"})}function Cn(e){var a;if(!((a=e.aiGcCards)!=null&&a.length))return;const t=e.aiGcCards.filter(l=>!e.aiUsedGc.includes(l.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Re[i.gc_type],i.gc_type){case"Boost+2":{const l=Object.values(e.aiTeam).flat().filter(d=>!d.used);if(l.length){const d=l[Math.floor(Math.random()*l.length)];d.boost=(d.boost||0)+2}break}case"Boost+3":{const l=Object.values(e.aiTeam).flat().filter(d=>!d.used);if(l.length){const d=l[Math.floor(Math.random()*l.length)];d.boost=(d.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function ei(e,t,i){Ti(t,i,null),jn(t),Cn(t);const a=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],l=to(a,"attack",t.difficulty);if(!l.length){Xt(e,t,i);return}const d=Ot(l,t.modifiers.ai);t.pendingAttack={...d,players:l,side:"ai"},l.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${l.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),u=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!u){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:l.map(n=>({name:n.name,note:n._line==="MIL"?n.note_m:n.note_a,portrait:Pe(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,Ye(e,t,i),ti(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}t.phase="defense",Ye(e,t,i)}function qn(e,t,i){var o,n;const a=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],l=to(a,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(m=>(t.aiTeam[m]||[]).filter(b=>!b.used)).length){t.homeScore++;const b={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(g=>({name:g.name,note:Ie(g,g._line||g.job),portrait:Pe(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:((n=t.pendingAttack)==null?void 0:n.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(b),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),ti(b.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}const s=l.length>0?Ht(l,t.modifiers.ai).total:0;l.forEach(m=>{m.used=!0});const c=Ut(t.pendingAttack.total,s,t.modifiers.ai),u={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(m=>({name:m.name,note:m._line==="MIL"?m.note_m:m.note_a,portrait:Pe(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),aiPlayers:l.map(m=>({name:m.name,note:m._line==="GK"?m.note_g:m._line==="MIL"?m.note_m:m.note_d,portrait:Pe(m),job:m.job,country_code:m.country_code,rarity:m.rarity,clubName:m.clubName,clubLogo:m.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:s,isGoal:!1,homeScored:!1,text:""};if(c.shielded)u.text="🛡️ Bouclier IA !",t.log.push(u);else if(c.goal){t.homeScore++,u.isGoal=!0,u.homeScored=!0,u.text=`⚽ BUT ! (${t.pendingAttack.total} > ${s})`,t.log.push(u),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),ti(u.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}else u.text=`🧤 IA défend (${s} ≥ ${t.pendingAttack.total})`,t.log.push(u);t.modifiers.ai={},t.pendingAttack=null,zt(e,t,i,"ai-attack")}function zt(e,t,i,a){if(t.round++,ho(t)){Ft(e,t,i);return}if(a==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(c=>!c.used).length){Xt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(c=>!c.used).length){Xt(e,t,i);return}setTimeout(()=>ei(e,t,i),100);return}t.phase="attack",Ye(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Xt(e,t,i);return}t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ei(e,t,i),800)}}function ho(e){const t=["MIL","ATT","GK","DEF"].some(a=>(e.homeTeam[a]||[]).some(l=>!l.used)),i=["MIL","ATT","GK","DEF"].some(a=>(e.aiTeam[a]||[]).some(l=>!l.used));return!t&&!i}function Xt(e,t,i){ho(t)?Ft(e,t,i):(t.phase="attack",Ye(e,t,i))}function Bn(e,t,i){const a=document.createElement("div");a.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const l=Pe(e),d=Pe(t),s=Mt[e.job]||"#555",c=Mt[t.job]||"#555",u=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;a.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${u}</div>
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
  `,document.body.appendChild(a);let n=!1;const m=()=>{n||(n=!0,a.remove(),i())};a.addEventListener("click",m),setTimeout(m,2e3)}function Ct(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ci(e,t,i,a=null,l=null){var g,w;if(t.phase!=="attack"){Ct("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Ct(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([r,p])=>(p||[]).filter(L=>L.used).map(L=>({...L,_line:L._line||r}))),s=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!d.length){Ct("Aucun joueur utilisé à remplacer");return}if(!s.length){Ct("Aucun remplaçant disponible");return}let c=Math.max(0,d.findIndex(r=>r.cardId===l));const u=((g=d[c])==null?void 0:g._line)||((w=d[c])==null?void 0:w.job);let o=a?Math.max(0,s.findIndex(r=>r.cardId===a)):Math.max(0,s.findIndex(r=>r.job===u)),n=!1;const m=document.createElement("div");m.id="sub-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var q,B,M,H,oe,ne;const r=d[c],p=s[o],L=Math.min(130,Math.round((window.innerWidth-90)/2)),A=Math.round(L*1.35),j=ce=>`background:rgba(255,255,255,0.12);border:none;color:${ce?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ce?"default":"pointer"};flex-shrink:0`;m.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${j(o===0)}" ${o===0?"disabled":""}>▲</button>
        <div>${p?We({...p,used:!1,boost:0},L,A):"<div>—</div>"}</div>
        <button id="in-down" style="${j(o>=s.length-1)}" ${o>=s.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${o+1}/${s.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${j(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${r?We({...r,used:!1,boost:0},L,A):"<div>—</div>"}</div>
        <button id="out-down" style="${j(c>=d.length-1)}" ${c>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(q=m.querySelector("#sub-close"))==null||q.addEventListener("click",()=>m.remove()),(B=m.querySelector("#out-up"))==null||B.addEventListener("click",()=>{c>0&&(c--,b())}),(M=m.querySelector("#out-down"))==null||M.addEventListener("click",()=>{c<d.length-1&&(c++,b())}),(H=m.querySelector("#in-up"))==null||H.addEventListener("click",()=>{o>0&&(o--,b())}),(oe=m.querySelector("#in-down"))==null||oe.addEventListener("click",()=>{o<s.length-1&&(o++,b())});const N=(ce,de,J,R)=>{const P=m.querySelector("#"+ce);if(!P)return;let re=0;P.addEventListener("touchstart",me=>{re=me.touches[0].clientY},{passive:!0}),P.addEventListener("touchend",me=>{const we=me.changedTouches[0].clientY-re;if(Math.abs(we)<30)return;const xe=de();we<0&&xe<R-1?(J(xe+1),b()):we>0&&xe>0&&(J(xe-1),b())},{passive:!0})};N("in-panel",()=>o,ce=>o=ce,s.length),N("out-panel",()=>c,ce=>c=ce,d.length),(ne=m.querySelector("#sub-confirm"))==null||ne.addEventListener("click",ce=>{if(ce.preventDefault(),ce.stopPropagation(),n)return;n=!0;const de=d[c],J=s[o];if(!de||!J)return;let R=null,P=-1;for(const[me,we]of Object.entries(t.homeTeam)){const xe=(we||[]).findIndex(be=>be.cardId===de.cardId);if(xe!==-1){R=me,P=xe;break}}if(P===-1||!R){Ct("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),m.remove();return}const re={...J,_line:R,_col:de._col||0,used:!1,boost:0};t.homeTeam[R].splice(P,1,re),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(J.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:de.name,firstname:de.firstname,note:Ie(de,R),portrait:Pe(de),job:de.job,country_code:de.country_code,rarity:de.rarity,clubName:de.clubName,clubLogo:de.clubLogo},inPlayer:{name:J.name,firstname:J.firstname,note:Ie(J,R),portrait:Pe(J),job:J.job,country_code:J.country_code,rarity:J.rarity,clubName:J.clubName,clubLogo:J.clubLogo},text:`🔄 ${J.firstname} ${J.name} remplace ${de.firstname} ${de.name}`}),m.remove(),Bn(de,J,()=>Ye(e,t,i))})}document.body.appendChild(m),b()}function Fn(e,t,i,a,l){var w,r;const d=(a.gcDefs||[]).find(p=>p.name===t),s=Re[t]||{icon:"⚡",desc:"Carte spéciale."},c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",u={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",o=(d==null?void 0:d.name)||t,n=(d==null?void 0:d.effect)||s.desc,m=d!=null&&d.image_url?`/icons/${d.image_url}`:null,b=s.icon||"⚡",g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",g.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${u};background:${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${u}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${o.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${o}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${m?`<img src="${m}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${b}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${n}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(g),(w=g.querySelector("#gc-back"))==null||w.addEventListener("click",()=>g.remove()),(r=g.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{g.remove(),Gn(e,t,i,a,l)})}function Wt(e,t,i,a,l,d){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let c=[];function u(){var o,n;s.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${c.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(m=>{const b=m._line||m.job||"MIL",g={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b]||"#555",w=Ie(m,b)+(m.boost||0),r=c.find(p=>p.cardId===m.cardId);return`<div class="gc-pick-item" data-cid="${m.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${r?"#FFD700":"rgba(255,255,255,0.25)"};background:${g};overflow:hidden;cursor:pointer;flex-shrink:0;${m.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${m.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${b}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${c.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${c.length}/${t})
      </button>
    </div>`,(o=s.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>s.remove()),s.querySelectorAll(".gc-pick-item").forEach(m=>{m.addEventListener("click",()=>{const b=m.dataset.cid,g=e.find(r=>r.cardId===b);if(!g)return;const w=c.findIndex(r=>r.cardId===b);w>-1?c.splice(w,1):c.length<t&&c.push(g),u()})}),(n=s.querySelector("#gc-picker-confirm"))==null||n.addEventListener("click",()=>{s.remove(),d(c)})}u(),document.body.appendChild(s)}const Dn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},a,l,d)=>{const s=Object.entries(a.homeTeam).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,u])=>u.filter(o=>!o.used).map(o=>({...o,_line:c})));return s.length?(Wt(s,t,`Choisir ${t} joueur(s) à booster (+${e})`,l,a,c=>{c.forEach(u=>{const o=(a.homeTeam[u._line]||[]).find(n=>n.cardId===u.cardId);o&&(o.boost=(o.boost||0)+e,a.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),Ye(l,a,d)}),!0):(a.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ye(l,a,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:a="ai"},l,d,s)=>{const c=a==="home"?l.homeTeam:l.aiTeam,u=a==="ai"?"adverse":"allié",o=Object.entries(c).filter(([n])=>!i.length||i.includes(n)).flatMap(([n,m])=>m.filter(b=>!b.used).map(b=>({...b,_line:n})));return o.length?(Wt(o,t,`Choisir ${t} joueur(s) ${u}(s) à débuffer (-${e})`,d,l,n=>{n.forEach(m=>{const g=((a==="home"?l.homeTeam:l.aiTeam)[m._line]||[]).find(w=>w.cardId===m.cardId);g&&(g.boost=(g.boost||0)-e,l.log.push({text:`🎯 -${e} sur ${g.name}${a==="ai"?" (IA)":""}`,type:"info"}))}),Ye(d,l,s)}),!0):(l.log.push({text:`🎯 Aucun joueur ${u} disponible`,type:"info"}),Ye(d,l,s),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},a,l,d)=>{const s=i==="home"?a.homeTeam:a.aiTeam,c=i==="ai"?"adverse":"allié",u=Object.entries(s).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,n])=>n.filter(m=>!m.used).map(m=>({...m,_line:o})));return u.length?(Wt(u,e,`Choisir ${e} joueur(s) ${c}(s) à exclure`,l,a,o=>{o.forEach(n=>{const b=((i==="home"?a.homeTeam:a.aiTeam)[n._line]||[]).find(g=>g.cardId===n.cardId);b&&(b.used=!0,a.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ye(l,a,d)}),!0):(a.log.push({text:`❌ Aucun joueur ${c} à exclure`,type:"info"}),Ye(l,a,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,a,l)=>{const d=Object.entries(i.homeTeam).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,c])=>c.filter(u=>u.used).map(u=>({...u,_line:s})));return d.length?(Wt(d,e,`Choisir ${e} joueur(s) à ressusciter`,a,i,s=>{s.forEach(c=>{const u=(i.homeTeam[c._line]||[]).find(o=>o.cardId===c.cardId);u&&(u.used=!1,i.log.push({text:`💫 ${u.name} ressuscité !`,type:"info"}))}),Ye(a,i,l)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ye(a,i,l),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Gn(e,t,i,a,l){a.usedGc.push(e);const d=a.gcDefs||[],s=d.find(u=>u.name===t)||d.find(u=>{var o;return((o=u.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let c=!1;if(s!=null&&s.effect_type&&s.effect_type!=="CUSTOM"){const u=Dn[s.effect_type];u?u(s.effect_params||{},a,i,l)||(c=!0):(l.toast(`Effet "${s.effect_type}" non implémenté`,"error"),c=!0)}else{switch(t){case"Double attaque":a.modifiers.home.doubleAttack=!0,a.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":a.modifiers.home.shield=!0,a.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const u=Object.entries(a.homeTeam).flatMap(([o,n])=>(n||[]).filter(m=>m.used).map(m=>({...m,_line:o})));u.length?(u[0].used=!1,a.log.push({text:`💫 ${u[0].name} ressuscité !`,type:"info"})):a.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":a.modifiers.ai.stolenNote=(a.modifiers.ai.stolenNote||0)+1,a.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const u=[...a.aiTeam.ATT||[],...a.aiTeam.MIL||[]].filter(o=>!o.used);if(u.length){const o=u.sort((n,m)=>Ie(m,"ATT")-Ie(n,"ATT"))[0];o.used=!0,a.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":a.maxSubs++,a.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}c=!0}E.from("cards").delete().eq("id",e).then(()=>{}),c&&Ye(i,a,l)}function Pn(e,t,i){const a=Object.values(t.homeTeam).flat().filter(l=>!l.used);if(!a.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${a.map(l=>`
        <div class="player-boost-opt" data-card-id="${l.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Mt[l.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Ie(l,l._line||l.job)}</div>
          <div style="flex:1"><b>${l.firstname} ${l.name}</b><div style="font-size:11px;color:#888">${l._line||l.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.cardId;for(const s of["GK","DEF","MIL","ATT"]){const c=(t.homeTeam[s]||[]).find(u=>u.cardId===d);if(c){c.boost=(c.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${c.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Ye(e,t,i)})})}function ti(e,t,i,a,l){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const s=Array.from({length:10},(o,n)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${n%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][n%8]}
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let c=!1;const u=()=>{c||(c=!0,d.remove(),setTimeout(()=>l(),50))};d.addEventListener("click",u),setTimeout(u,3500)}async function Ft(e,t,i){var n,m;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:a}=i,l=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,s=l?"victoire":d?"nul":"defaite",c=Uo(t.mode,s);t.matchId&&await E.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:l?a.profile.id:null,home_credits_reward:c,played_at:new Date().toISOString()}).eq("id",t.matchId);const u={credits:(a.profile.credits||0)+c,matches_played:(a.profile.matches_played||0)+1};l?u.wins=(a.profile.wins||0)+1:d?u.draws=(a.profile.draws||0)+1:u.losses=(a.profile.losses||0)+1,await E.from("users").update(u).eq("id",a.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),(n=document.getElementById("res-home"))==null||n.addEventListener("click",()=>{o.remove(),Je(e),i.navigate("home")}),(m=document.getElementById("res-replay"))==null||m.addEventListener("click",()=>{o.remove(),Je(e),i.navigate("match",{matchMode:t.mode})})}function Nn(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ut(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function vo(e,t){var i,a;try{const l=(a=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:a.id;try{(E.getChannels?E.getChannels():[]).forEach(s=>{const c=s.topic||"";(c.includes("matchmaking")||c.includes("pvp-match")||c.includes("friend-invite"))&&E.removeChannel(s)})}catch(d){console.warn("[Random] cleanup canaux:",d)}l&&await E.rpc("cancel_matchmaking",{p_user_id:l}).catch(()=>{})}catch{}await si(e,t,"random",({deckId:l,formation:d,starters:s,subsRaw:c,gcCardsEnriched:u,gcDefs:o,stadiumDef:n})=>{const m=b=>Rn(e,t,l,d,s,c,b,o||[],n);if(!u.length){m([]);return}ai(e,u,m)})}async function Rn(e,t,i,a,l,d,s=[],c=[],u=null){var j;const{state:o,navigate:n,toast:m}=t;let b=!1,g=null;et(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const w=async(N=!0)=>{b=!0,g&&(E.removeChannel(g),g=null),N&&await E.rpc("cancel_matchmaking",{p_user_id:o.profile.id}).catch(()=>{})};(j=document.getElementById("mm-cancel"))==null||j.addEventListener("click",async()=>{try{await w(!0)}catch{}Je(e),n("home")});const r=async(N,q,B)=>{if(b)return;b=!0,g&&(E.removeChannel(g),g=null);const M=document.getElementById("mm-status");M&&(M.textContent="Adversaire trouvé !"),await new Promise(H=>setTimeout(H,600)),e.isConnected&&wo(e,t,N,B,s,c)},{data:p,error:L}=await E.rpc("try_matchmake",{p_user_id:o.profile.id,p_deck_id:i});if(L||!(p!=null&&p.success)){m("Erreur de matchmaking","error"),Je(e),n("home");return}if(p.matched){r(p.match_id,p.opponent_id,!1);return}const A=document.getElementById("mm-status");A&&(A.textContent="En attente d'un autre joueur..."),g=E.channel("matchmaking-"+o.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${o.profile.id}`},N=>{const q=N.new;q.status==="matched"&&q.match_id&&r(q.match_id,q.matched_with,!0)}).subscribe()}async function On(e,t,i){const{state:a,navigate:l,toast:d}=t;try{(E.getChannels?E.getChannels():[]).forEach(o=>{const n=o.topic||"";(n.includes("matchmaking")||n.includes("pvp-match")||n.includes("friend-invite"))&&E.removeChannel(o)})}catch{}const{data:s}=await E.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!s){d("Match introuvable","error"),l("home");return}if(s.status==="finished"){d("Ce match est terminé","info"),l("home");return}const c=s.home_id===a.profile.id;wo(e,t,i,c,[],[])}async function wo(e,t,i,a,l=[],d=[]){const{state:s,navigate:c,toast:u}=t,o=a?"p1":"p2",n=a?"p2":"p1",m=(l||[]).map(C=>C.id),b=(l||[]).map(C=>({id:C.id,gc_type:C.gc_type,_gcDef:C._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await E.from("matches").select("*").eq("id",i).single();if(!g){u("Match introuvable","error"),c("home");return}async function w(){const[{data:C},{data:D},{data:_},{data:T}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),f=S=>{const I=Number(S.evolution_bonus)||0;return{cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:(Number(S.note_g)||0)+(S.job==="GK"||S.job2==="GK"&&Number(S.note_g)>0?I:0),note_d:(Number(S.note_d)||0)+(S.job==="DEF"||S.job2==="DEF"&&Number(S.note_d)>0?I:0),note_m:(Number(S.note_m)||0)+(S.job==="MIL"||S.job2==="MIL"&&Number(S.note_m)>0?I:0),note_a:(Number(S.note_a)||0)+(S.job==="ATT"||S.job2==="ATT"&&Number(S.note_a)>0?I:0),evolution_bonus:I,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},x=((C==null?void 0:C.starters)||[]).map(S=>f(S)),y=((D==null?void 0:D.starters)||[]).map(S=>f(S)),h=(C==null?void 0:C.formation)||"4-4-2",v=(D==null?void 0:D.formation)||"4-4-2";let $=yt(x,h),z=yt(y,v);const k=((C==null?void 0:C.subs)||[]).map(S=>f(S));return stadiumDef&&a&&($=jt($,stadiumDef),Nt(k,stadiumDef)),{p1Team:$,p2Team:z,p1Subs:k,p2Subs:((D==null?void 0:D.subs)||[]).map(S=>f(S)),p1Formation:h,p2Formation:v,p1Name:(_==null?void 0:_.club_name)||(_==null?void 0:_.pseudo)||"Joueur 1",p2Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?m:[],gc_p2:a?[]:m,gcCardsFull_p1:a?b:[],gcCardsFull_p2:a?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!r)if(a){r=await w();const{data:C}=await E.from("matches").select("game_state").eq("id",i).single();!(C!=null&&C.game_state)||!Object.keys(C.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:g.home_id}).eq("id",i):r=C.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let C=0;C<30&&!r;C++){await new Promise(_=>setTimeout(_,400));const{data:D}=await E.from("matches").select("game_state").eq("id",i).single();D!=null&&D.game_state&&Object.keys(D.game_state).length&&(r=D.game_state)}if(!r){u("Erreur de synchronisation","error"),c("home");return}r.gc_p2=m,r.gcCardsFull_p2=b,await E.from("matches").update({game_state:r}).eq("id",i)}let p=!1,L=null,A=!1;const j=new Set,N=new Set;function q(C){var $,z;try{E.removeChannel(B)}catch{}const D=r[o+"Score"]||0,_=r[n+"Score"]||0;let T,f;C.winner_id?(T=C.winner_id===s.profile.id,f=!1):C.forfeit?(T=D>_,f=!1):(f=D===_,T=D>_),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const x=document.createElement("div");x.id="pvp-end-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const y=f?"🤝":T?"🏆":"😞",h=f?"MATCH NUL":T?"VICTOIRE !":"DÉFAITE",v=f?"#fff":T?"#FFD700":"#ff6b6b";x.innerHTML=`
      <div style="font-size:64px">${y}</div>
      <div style="font-size:26px;font-weight:900;color:${v}">${h}</div>
      <div style="font-size:18px">${r[o+"Name"]} ${D} – ${_} ${r[n+"Name"]}</div>
      ${C.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${T?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(x),(z=x.querySelector("#pvp-end-home"))==null||z.addEventListener("click",()=>{x.remove(),Je(e),c("home")})}const B=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},C=>{const D=C.new;try{if(D.status==="finished"||D.forfeit){if(p)return;p=!0,L&&(clearInterval(L),L=null),D.game_state&&(r=D.game_state),q(D);return}if(D.game_state){const _=r;r=D.game_state;const T=r._lastGC;if(T&&T.seq&&!N.has(T.seq)&&(N.add(T.seq),T.by!==o)){xe(T.type,T.by,()=>R());return}const f=_[o+"Score"]||0,x=_[n+"Score"]||0,y=r[o+"Score"]||0,h=r[n+"Score"]||0,v=y>f,$=h>x;if((v||$)&&!j.has(r.round)){j.add(r.round);const z=[...r.log||[]].reverse().find(S=>S.isGoal),k=((z==null?void 0:z.homePlayers)||[]).map(S=>({name:S.name,note:S.note,portrait:S.portrait,job:S.job}));we(k,y,h,v,()=>R());return}R()}}catch(_){console.error("[PvP] crash:",_)}}).subscribe();async function M(C){Object.assign(r,C),r.lastActionAt=new Date().toISOString();const{error:D}=await E.from("matches").update({game_state:r}).eq("id",i);D&&u("Erreur de synchronisation","error");try{R()}catch(_){console.error("[PvP] renderPvpScreen crash:",_)}}async function H(){if(p)return;p=!0,L&&(clearInterval(L),L=null);const C=a?g.away_id:g.home_id,D=a?"p2":"p1",_=a?"p1":"p2",T={...r,[D+"Score"]:3,[_+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:C,home_score:T.p1Score||0,away_score:T.p2Score||0,game_state:T}).eq("id",i)}catch{}try{E.removeChannel(B)}catch{}setTimeout(()=>{Je(e),c("home")},800)}const oe={BOOST_STAT:({value:C=1,count:D=1,roles:_=[]},T,f)=>{const x=T[o+"Team"],y=Object.entries(x).filter(([h])=>!_.length||_.includes(h)).flatMap(([h,v])=>v.filter($=>!$.used).map($=>({...$,_line:h})));if(!y.length){T.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),f(T);return}ne(y,D,`Choisir ${D} joueur(s) à booster (+${C})`,h=>{h.forEach(v=>{const $=(x[v._line]||[]).find(z=>z.cardId===v.cardId);$&&($.boost=($.boost||0)+C,T.log.push({text:`⚡ +${C} sur ${$.name}`,type:"info"}))}),T[o+"Team"]=x,f(T)})},DEBUFF_STAT:({value:C=1,count:D=1,roles:_=[],target:T="ai"},f,x)=>{const y=T==="home"?o:n,h=f[y+"Team"],v=T==="home"?"allié":"adverse",$=Object.entries(h).filter(([z])=>!_.length||_.includes(z)).flatMap(([z,k])=>k.map(S=>({...S,_line:z})));if(!$.length){f.log.push({text:`🎯 Aucun joueur ${v}`,type:"info"}),x(f);return}ne($,D,`Choisir ${D} joueur(s) ${v}(s) (-${C})`,z=>{z.forEach(k=>{const S=(h[k._line]||[]).find(I=>I.cardId===k.cardId);S&&(S.boost=(S.boost||0)-C,f.log.push({text:`🎯 -${C} sur ${S.name}`,type:"info"}))}),f[y+"Team"]=h,x(f)})},GRAY_PLAYER:({count:C=1,roles:D=[],target:_="ai"},T,f)=>{const x=_==="home"?o:n,y=T[x+"Team"],h=_==="home"?"allié":"adverse",v=Object.entries(y).filter(([$])=>!D.length||D.includes($)).flatMap(([$,z])=>z.filter(k=>!k.used).map(k=>({...k,_line:$})));if(!v.length){T.log.push({text:`❌ Aucun joueur ${h}`,type:"info"}),f(T);return}ne(v,C,`Choisir ${C} joueur(s) ${h}(s) à exclure`,$=>{const z="usedCardIds_"+x,k=new Set(T[z]||[]);$.forEach(S=>{const I=(y[S._line]||[]).find(F=>F.cardId===S.cardId);I&&(I.used=!0,k.add(S.cardId),T.log.push({text:`❌ ${I.name} exclu !`,type:"info"}))}),T[z]=[...k],T[x+"Team"]=y,f(T)})},REVIVE_PLAYER:({count:C=1,roles:D=[]},_,T)=>{const f=_[o+"Team"],x=Object.entries(f).filter(([y])=>!D.length||D.includes(y)).flatMap(([y,h])=>h.filter(v=>v.used).map(v=>({...v,_line:y})));if(!x.length){_.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),T(_);return}ne(x,C,`Choisir ${C} joueur(s) à ressusciter`,y=>{y.forEach(h=>{const v=(f[h._line]||[]).find($=>$.cardId===h.cardId);v&&(v.used=!1,_.log.push({text:`💫 ${v.name} ressuscité !`,type:"info"}))}),_[o+"Team"]=f,T(_)})},REMOVE_GOAL:({},C,D)=>{const _=n+"Score";C[_]>0?(C[_]--,C.log.push({text:"🚫 Dernier but annulé !",type:"info"})):C.log.push({text:"🚫 Aucun but à annuler",type:"info"}),D(C)},ADD_GOAL_DRAW:({},C,D)=>{C[o+"Score"]===C[n+"Score"]?(C[o+"Score"]++,C.log.push({text:"🎯 But bonus !",type:"info"})):C.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),D(C)},ADD_SUB:({value:C=1},D,_)=>{D.maxSubs=(D.maxSubs||3)+C,D.log.push({text:`🔄 +${C} remplacement(s)`,type:"info"}),_(D)},CUSTOM:({},C,D)=>D(C)};function ne(C,D,_,T){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let x=[];function y(){var v,$;const h=C.map(z=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",S=Ie(z,z._line)+(z.boost||0),F=x.find(O=>O.cardId===z.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=z.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${F};background:${k};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${S}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${z._line}</div>
        </div>`}).join("");f.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${_}</div>
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
        </div>`,(v=f.querySelector("#pp-close"))==null||v.addEventListener("click",()=>f.remove()),f.querySelectorAll(".pp-item").forEach(z=>{z.addEventListener("click",()=>{const k=z.dataset.cid,S=C.find(F=>F.cardId===k),I=x.findIndex(F=>F.cardId===k);S&&(I>-1?x.splice(I,1):x.length<D&&x.push(S),y())})}),($=f.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{f.remove(),T(x)})}y(),document.body.appendChild(f)}async function ce(C,D){const T=(r["gcCardsFull_"+o]||[]).find(h=>h.id===C),f=(T==null?void 0:T._gcDef)||(r.gcDefs||[]).find(h=>{var v;return h.name===D||((v=h.name)==null?void 0:v.toLowerCase().trim())===(D==null?void 0:D.toLowerCase().trim())}),x=[...r["usedGc_"+o]||[],C],y={type:D,by:o,seq:(r._gcAnimSeq||0)+1};N.add(y.seq),xe(D,o,async()=>{if(f!=null&&f.effect_type&&f.effect_type!=="CUSTOM"){const v=oe[f.effect_type];if(v){const $={...r};v(f.effect_params||{},$,async z=>{z["usedGc_"+o]=x,z._lastGC=y,z._gcAnimSeq=y.seq,await M(z)});return}}const h={...r};switch(D){case"Remplacement+":h.maxSubs=(h.maxSubs||3)+1,h.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const v=n+"Score";h[v]>0&&(h[v]--,h.log.push({text:"🚫 But annulé",type:"info"}));break}}h["usedGc_"+o]=x,h._lastGC=y,h._gcAnimSeq=y.seq,await M(h)})}function de(C,D){const _="usedCardIds_"+C,T=new Set(r[_]||[]);D.forEach(f=>T.add(f)),r[_]=[...T]}function J(){for(const C of["p1","p2"]){const D=new Set(r["usedCardIds_"+C]||[]),_=r[C+"Team"];if(_)for(const T of["GK","DEF","MIL","ATT"])(_[T]||[]).forEach(f=>{f.used=D.has(f.cardId)})}}function R(){var Ke,Xe,Ze,Qe,nt,gt;if(r.phase==="reveal")return P();if(r.phase==="midfield")return me();if(r.phase==="finished")return Ae();const C=r[o+"Team"],D=r[n+"Team"];J();const _=r[o+"Score"],T=r[n+"Score"],f=r[o+"Name"],x=r[n+"Name"],y=r.phase===o+"-attack",h=r.phase===o+"-defense",v=Array.isArray(r["selected_"+o])?r["selected_"+o]:[],$=v.map(le=>le.cardId),z=window.innerWidth>=700,k=r[o+"Subs"]||[],S=r["usedSubIds_"+o]||[],I=k.filter(le=>!S.includes(le.cardId)),F=r["gcCardsFull_"+o]||[],G=r["usedGc_"+o]||[],O=F.filter(le=>!G.includes(le.id)),K=r.boostOwner===o&&!r.boostUsed,Z=!["GK","DEF","MIL","ATT"].some(le=>(D[le]||[]).some(Ee=>!Ee.used)),W=[...C.MIL||[],...C.ATT||[]].filter(le=>!le.used),ie=y&&Z&&W.length===0?[...C.GK||[],...C.DEF||[]].filter(le=>!le.used).map(le=>le.cardId):[];function ae(le,Ee,te){var pt,ht;const ue=le._gcDef,Q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ue==null?void 0:ue.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",pe={purple:"#b06ce0",light_blue:"#00d4ef"}[ue==null?void 0:ue.color]||"#b06ce0",je=(ue==null?void 0:ue.name)||le.gc_type,Te=(ue==null?void 0:ue.effect)||((pt=Re[le.gc_type])==null?void 0:pt.desc)||"",tt=ue!=null&&ue.image_url?`/icons/${ue.image_url}`:null,it=((ht=Re[le.gc_type])==null?void 0:ht.icon)||"⚡",rt=Math.round(te*.22),st=Math.round(te*.22),ct=te-rt-st,kt=je.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${le.id}" data-gc-type="${le.gc_type}"
        style="box-sizing:border-box;width:${Ee}px;height:${te}px;border-radius:10px;border:2px solid ${pe};background:${Q};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}function fe(le,Ee){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${le}px;height:${Ee}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ee*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(Ee*.2)}px">⚡</div>
        <div style="font-size:${Math.round(Ee*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const ye=(le,Ee)=>Ee?fe(130,175):ae(le,130,175),_e=(le,Ee)=>Ee?fe(68,95):ae(le,68,95),$e=z?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Me=y?ve(o)?`<button id="pvp-action" style="${$e};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${v.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${$e};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:h?`<button id="pvp-action" style="${$e};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${v.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${x}</div>`,Le=y&&!ve(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':y||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${v.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${z?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${I.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':I.map(le=>`<div class="pvp-sub-btn" data-sub-id="${le.cardId}" style="cursor:pointer;flex-shrink:0">${We(le,z?76:44,z?100:58)}</div>`).join("")}
    </div>`,qe=y?"attack":h?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(C,r[o+"Formation"],qe,$,300,300,ie)}
      </div>
    </div>`;function Be(le){if(le.type==="duel"&&(le.homeTotal!=null||le.aiTotal!=null)){const Ee=(le.homeTotal||0)>=(le.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
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
        </div>`}return`<div style="font-size:11px;color:${le.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${le.type==="goal"?700:400};padding:3px 2px">${le.text||""}</div>`}const Ve=(()=>{var Ee,te;if(h&&((Ee=r.pendingAttack)!=null&&Ee.players)){const ue=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${x} ATTAQUE — Défendez !</div>
          ${ot((ue.players||[]).map(Q=>({...Q,used:!1})),"#ff6b6b",ue.total)}
        </div>`}if(y&&((te=r.pendingAttack)!=null&&te.players)){const ue=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ue.players||[]).map(Q=>({...Q,used:!1})),"#00ff88",ue.total)}
        </div>`}const le=(r.log||[]).slice(-1)[0];return le?'<div style="padding:2px 4px">'+Be(le)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ne=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${_} – ${T}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${x}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ve}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(r.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",z?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${He}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Me}${Le}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${O.map(le=>ye(le,!1)).join("")}
            ${K?ye(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(C,r[o+"Formation"],qe,$,300,300,ie)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${O.map(le=>_e(le,!1)).join("")}
            ${K?_e(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${y&&I.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${y&&I.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${y&&I.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${y&&I.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${I.length}</div>
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
          <div>${Me}${Le}</div>
        </div>
      </div>`;function Ue(){const le=e.querySelector(".match-screen");if(!le)return;const Ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);le.style.height=Ee+"px",le.style.minHeight=Ee+"px",le.style.maxHeight=Ee+"px",le.style.overflow="hidden";const te=e.querySelector("#mobile-action-bar"),ue=e.querySelector("#mobile-play-area");te&&ue&&(ue.style.paddingBottom=te.offsetHeight+"px")}if(Ue(),setTimeout(Ue,120),setTimeout(Ue,400),A||(A=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ue),window.visualViewport.addEventListener("scroll",Ue)),window.addEventListener("resize",Ue)),function(){const Ee=e.querySelector(".terrain-wrapper svg");Ee&&(Ee.removeAttribute("width"),Ee.removeAttribute("height"),Ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Ee.setAttribute("viewBox","-26 -26 352 352"),Ee.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(le=>{le.addEventListener("click",()=>{if(!y&&!h)return;const Ee=le.dataset.cardId,te=le.dataset.role,ue=(C[te]||[]).find(Te=>Te.cardId===Ee);if(!ue||ue.used)return;const Q=ie.includes(Ee);if(y&&!["MIL","ATT"].includes(te)&&!Q)return;Array.isArray(r["selected_"+o])||(r["selected_"+o]=[]);const pe=r["selected_"+o],je=pe.findIndex(Te=>Te.cardId===Ee);je>-1?pe.splice(je,1):pe.length<3&&pe.push({...ue,_role:te}),R()})}),e.querySelectorAll(".match-used-hit").forEach(le=>{le.addEventListener("click",()=>Fe(le.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(le=>{le.addEventListener("click",()=>Fe())}),(Ke=e.querySelector("#pvp-sub-open"))==null||Ke.addEventListener("click",()=>Fe()),e.querySelectorAll(".pvp-gc-mini").forEach(le=>{le.addEventListener("click",()=>be(le.dataset.gcId,le.dataset.gcType))}),(Xe=e.querySelector("#pvp-boost-card"))==null||Xe.addEventListener("click",()=>Ce()),(Ze=e.querySelector("#pvp-action"))==null||Ze.addEventListener("click",le=>{y?le.currentTarget.dataset.pass==="1"||!ve(o)?ee():ge():h&&U()}),(Qe=e.querySelector("#pvp-quit"))==null||Qe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&H()}),(nt=e.querySelector("#pvp-view-opp"))==null||nt.addEventListener("click",()=>ke()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>V()),L&&(clearInterval(L),L=null),(y||h)&&!p){let le=30,Ee=!1;const te=()=>document.getElementById("pvp-timer"),ue=()=>{te()&&(te().textContent=le+"s",te().style.color=Ee?"#ff4444":"#fff")};ue(),L=setInterval(()=>{le--,le<0?Ee?(clearInterval(L),L=null,y&&!ve(o)?ee():H()):(Ee=!0,le=15,ue()):ue()},1e3)}}function P(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[n+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await M({phase:"midfield"})},5e3)}let re=!1;function me(){if(re)return;const C=r[o+"Team"].MIL||[],D=r[n+"Team"].MIL||[];function _(O){return O.reduce((K,Z)=>K+Ie(Z,"MIL"),0)}function T(O){let K=0;for(let Z=0;Z<O.length-1;Z++){const W=at(O[Z],O[Z+1]);W==="#00ff88"?K+=2:W==="#FFD700"&&(K+=1)}return K}const f=_(C)+T(C),x=_(D)+T(D),y=f>=x;function h(O,K,Z){return`<div id="duel-row-${Z}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${K}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${O.map((W,ie)=>{const ae=ie<O.length-1?at(W,O[ie+1]):null,fe=!ae||ae==="#ff3333"||ae==="#cc2222",ye=ae==="#00ff88"?"+2":ae==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Z}" data-idx="${ie}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...W,note:Ie(W,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ie<O.length-1?`<div class="duel-link duel-link-${Z}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${fe?"rgba(255,255,255,0.12)":ae};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${fe?"none":`0 0 8px ${ae}`}">
              ${ye?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ae}">${ye}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Z}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${_(O)} + ${T(O)} liens = <b style="color:#fff">${_(O)+T(O)}</b>
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
      ${h(C,r[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${h(D,r[n+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const v=(O,K)=>e.querySelectorAll(O).forEach((Z,W)=>{setTimeout(()=>{Z.style.opacity="1",Z.style.transform="translateY(0) scale(1)"},K+W*90)});v(".duel-card-me",150),v(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((O,K)=>setTimeout(()=>{O.style.opacity="1"},K*70)),900),setTimeout(()=>{const O=e.querySelector("#pvp-vs");O&&(O.style.opacity="1",O.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(K=>K.style.opacity="1")},1250);function $(O,K,Z){const W=document.getElementById(O);if(!W)return;const ie=performance.now(),ae=fe=>{const ye=Math.min(1,(fe-ie)/Z);W.textContent=Math.round(K*(1-Math.pow(1-ye,3))),ye<1?requestAnimationFrame(ae):W.textContent=K};requestAnimationFrame(ae)}setTimeout(()=>{$("pvp-score-me",f,800),$("pvp-score-opp",x,800)},1500);const z=r.p1Team.MIL||[],k=r.p2Team.MIL||[],S=_(z)+T(z),I=_(k)+T(k),F=S>=I?"p1":"p2";let G=r.boostValue;G==null&&(G=ri(),r.boostValue=G,r.boostOwner=F,r.boostUsed=!1),re=!0,setTimeout(()=>{const O=e.querySelector("#duel-row-"+(y?"me":"opp")),K=e.querySelector("#duel-row-"+(y?"opp":"me")),Z=document.getElementById("pvp-score-me"),W=document.getElementById("pvp-score-opp"),ie=y?Z:W,ae=y?W:Z;ie&&(ie.style.fontSize="80px",ie.style.color=y?"#FFD700":"#ff6b6b",ie.style.animation="duelPulse .5s ease"+(y?",duelGlow 1.5s ease infinite .5s":"")),ae&&(ae.style.opacity="0.25"),setTimeout(()=>{O&&(O.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",O.style.zIndex="5"),setTimeout(()=>{const fe=document.getElementById("duel-shock");fe&&(fe.style.animation="shockwave .5s ease-out forwards"),K&&(K.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var $e;const fe=document.getElementById("pvp-duel-finale");if(!fe)return;const ye=r.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",_e=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;fe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(y?"⚽ "+r[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[n+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ye+_e,fe.style.transition="opacity .45s ease",fe.style.opacity="1",fe.style.pointerEvents="auto",($e=document.getElementById("pvp-start-match"))==null||$e.addEventListener("click",async()=>{const Me=F;await M({phase:Me+"-attack",attacker:Me,round:1,boostValue:G,boostUsed:!1,boostOwner:Me})})},600)},700)},2800)}function we(C,D,_,T,f){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const y=Array.from({length:10},(z,k)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${k%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][k%8]}</div>`).join(""),h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};x.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${y}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${T?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${D} – ${_}
      </div>
      ${C!=null&&C.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${C.map(z=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${h[z.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${z.portrait?`<img src="${z.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(z.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const $=()=>{v||(v=!0,x.remove(),setTimeout(()=>f(),50))};x.addEventListener("click",$),setTimeout($,3500)}function xe(C,D,_){var G,O;const T=(r.gcDefs||[]).find(K=>{var Z;return K.name===C||((Z=K.name)==null?void 0:Z.toLowerCase().trim())===(C==null?void 0:C.toLowerCase().trim())}),f={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[T==null?void 0:T.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[T==null?void 0:T.color]||"#b06ce0",y=(T==null?void 0:T.name)||C,h=(T==null?void 0:T.effect)||((G=Re[C])==null?void 0:G.desc)||"",v=T!=null&&T.image_url?`/icons/${T.image_url}`:null,$=((O=Re[C])==null?void 0:O.icon)||"⚡",k=D===o?"Vous":r[D+"Name"]||"Adversaire",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",S.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${x}66}50%{box-shadow:0 0 60px ${x}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${x};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${k} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${x};background:${f};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${y.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${y}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${v?`<img src="${v}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(S);let I=!1;const F=()=>{I||(I=!0,S.remove(),setTimeout(()=>_&&_(),50))};S.addEventListener("click",F),setTimeout(F,3e3)}function be(C,D){var S,I,F,G;const T=(r["gcCardsFull_"+o]||[]).find(O=>O.id===C),f=T==null?void 0:T._gcDef,x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[f==null?void 0:f.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",y={purple:"#b06ce0",light_blue:"#00d4ef"}[f==null?void 0:f.color]||"#b06ce0",h=(f==null?void 0:f.name)||D,v=(f==null?void 0:f.effect)||((S=Re[D])==null?void 0:S.desc)||"Carte spéciale.",$=f!=null&&f.image_url?`/icons/${f.image_url}`:null,z=((I=Re[D])==null?void 0:I.icon)||"⚡",k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",k.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${y};background:${x};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${y}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${h.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${h}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${z}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${v}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(k),(F=k.querySelector("#pvp-gc-back"))==null||F.addEventListener("click",()=>k.remove()),(G=k.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{k.remove(),ce(C,D)})}function Ce(){var T;const C=r[o+"Team"],D=Object.entries(C).flatMap(([f,x])=>(x||[]).filter(y=>!y.used).map(y=>({...y,_line:f})));if(!D.length)return;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",_.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${D.map(f=>{const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f._line]||"#555",y=Ie(f,f._line)+(f.boost||0);return`<div class="bp-item" data-cid="${f.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${x};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${y}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(_),(T=_.querySelector("#bp-close"))==null||T.addEventListener("click",()=>_.remove()),_.querySelectorAll(".bp-item").forEach(f=>{f.addEventListener("click",async()=>{const x=f.dataset.cid,y=D.find(v=>v.cardId===x);if(!y)return;const h=(C[y._line]||[]).find(v=>v.cardId===x);h&&(h.boost=(h.boost||0)+r.boostValue),_.remove(),await M({[o+"Team"]:C,boostUsed:!0})})})}function Fe(C=null){var I,F;if(!(r.phase===o+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const _=r[o+"Team"],T=r["usedSubIds_"+o]||[],f=r.maxSubs||3;if(T.length>=f){u(`Maximum ${f} remplacements atteint`,"warning");return}const x=Object.entries(_).flatMap(([G,O])=>(O||[]).filter(K=>K.used).map(K=>({...K,_line:G}))),y=(r[o+"Subs"]||[]).filter(G=>!T.includes(G.cardId));if(!x.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!y.length){u("Aucun remplaçant disponible","warning");return}let h=Math.max(0,x.findIndex(G=>G.cardId===C));const v=((I=x[h])==null?void 0:I._line)||((F=x[h])==null?void 0:F.job);let $=Math.max(0,y.findIndex(G=>G.job===v)),z=!1;const k=document.createElement("div");k.id="pvp-sub-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function S(){var ae,fe,ye,_e,$e,Me;const G=x[h],O=y[$],K=Math.min(130,Math.round((window.innerWidth-90)/2)),Z=Math.round(K*1.35),W=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;k.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${T.length}/${f})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${W($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${O?We({...O,used:!1,boost:0},K,Z):"<div>—</div>"}</div>
          <button id="pin-down" style="${W($>=y.length-1)}" ${$>=y.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${y.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${W(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${G?We({...G,used:!1,boost:0},K,Z):"<div>—</div>"}</div>
          <button id="pout-down" style="${W(h>=x.length-1)}" ${h>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${x.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ae=k.querySelector("#psub-close"))==null||ae.addEventListener("click",()=>k.remove()),(fe=k.querySelector("#pout-up"))==null||fe.addEventListener("click",()=>{h>0&&(h--,S())}),(ye=k.querySelector("#pout-down"))==null||ye.addEventListener("click",()=>{h<x.length-1&&(h++,S())}),(_e=k.querySelector("#pin-up"))==null||_e.addEventListener("click",()=>{$>0&&($--,S())}),($e=k.querySelector("#pin-down"))==null||$e.addEventListener("click",()=>{$<y.length-1&&($++,S())});const ie=(Le,Oe,qe,He)=>{const Be=k.querySelector("#"+Le);if(!Be)return;let Ve=0;Be.addEventListener("touchstart",Ne=>{Ve=Ne.touches[0].clientY},{passive:!0}),Be.addEventListener("touchend",Ne=>{const Ue=Ne.changedTouches[0].clientY-Ve;if(Math.abs(Ue)<30)return;const Ke=Oe();Ue<0&&Ke<He-1?(qe(Ke+1),S()):Ue>0&&Ke>0&&(qe(Ke-1),S())},{passive:!0})};ie("pin-panel",()=>$,Le=>$=Le,y.length),ie("pout-panel",()=>h,Le=>h=Le,x.length),(Me=k.querySelector("#psub-confirm"))==null||Me.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),z)return;z=!0;const Oe=x[h],qe=y[$];if(!Oe||!qe)return;const He=Oe._line,Be=(_[He]||[]).findIndex(Ue=>Ue.cardId===Oe.cardId);if(Be===-1){u("Erreur : joueur introuvable","error"),k.remove();return}const Ve={...qe,_line:He,position:Oe.position,used:!1,boost:0};_[He].splice(Be,1,Ve);const Ne=[...T,qe.cardId];k.remove(),De(Oe,qe,async()=>{await M({[o+"Team"]:_,[n+"Team"]:r[n+"Team"],["usedSubIds_"+o]:Ne})})})}document.body.appendChild(k),S()}function De(C,D,_){const T={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const x=(v,$,z)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${z}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${T[v.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(v)?`<img src="${Pe(v)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(v.name||"").slice(0,12)}</div>
    </div>`;f.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${x(D,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${x(C,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(f);let y=!1;const h=()=>{y||(y=!0,f.remove(),setTimeout(()=>_(),50))};f.addEventListener("click",h),setTimeout(h,2200)}function ke(){var D;const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",C.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[n+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(C),(D=C.querySelector("#pvp-opp-close"))==null||D.addEventListener("click",()=>C.remove())}function V(){var _;const C=r.log||[],D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",D.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${C.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...C].reverse().map(T=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${T.type==="goal"?"#FFD700":T.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${T.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(D),(_=D.querySelector("#pvp-hist-close"))==null||_.addEventListener("click",()=>D.remove())}async function ee(){if(r.phase!==o+"-attack")return;const C=o==="p1"?"p2":"p1",D=(r.round||0)+1,_=[...r.log||[]];_.push({type:"info",text:`⏭️ ${r[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const T=Se(r),f=ve(C),x=T||!f?"finished":C+"-attack";await M({["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:x,attacker:C,round:D,log:_}),x==="finished"&&await he(r)}async function ge(){const C=r[o+"Team"],D=!["GK","DEF","MIL","ATT"].some(x=>(r[n+"Team"][x]||[]).some(y=>!y.used)),_=(r["selected_"+o]||[]).map(x=>{const y=(C[x._role]||[]).find(S=>S.cardId===x.cardId)||x,h=D&&["GK","DEF"].includes(x._role),v=C[x._role]||[],$=v.findIndex(S=>S.cardId===x.cardId),z=lt(v.length),k=$>=0?z[$]:y._col??1;return{...y,_line:x._role,_col:k,...h?{note_a:Math.max(1,Number(y.note_a)||0)}:{}}});if(!_.length)return;const T=Ot(_,r.modifiers[o]||{});de(o,_.map(x=>x.cardId)),_.forEach(x=>{const y=(C[x._role]||[]).find(h=>h.cardId===x.cardId);y&&(y.used=!0)}),r["selected_"+o]=[],R();const f=[...r.log||[]];if(D){const x=(r[o+"Score"]||0)+1,y=_.map(k=>({name:k.name,note:Ie(k,k._line||"ATT"),portrait:Pe(k),job:k.job}));f.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:y,homeTotal:T.total,aiTotal:0});const h=(r.round||0)+1,v=o==="p1"?"p2":"p1",$={...r,[o+"Team"]:C,[o+"Score"]:x},z=Se($);j.add(h),we(y,x,r[n+"Score"]||0,!0,async()=>{await M({[o+"Team"]:C,[o+"Score"]:x,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:z?"finished":v+"-attack",attacker:v,round:h,log:f}),z&&await he({...r,[o+"Score"]:x})});return}f.push({type:"pending",text:`⚔️ ${r[o+"Name"]} attaque (${T.total})`}),await M({[o+"Team"]:C,[n+"Team"]:r[n+"Team"],pendingAttack:{...T,players:_,side:o},["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},phase:n+"-defense",log:f})}async function U(){const C=r[o+"Team"],D=(r["selected_"+o]||[]).map(G=>{const O=(C[G._role]||[]).find(ae=>ae.cardId===G.cardId)||G,K=C[G._role]||[],Z=K.findIndex(ae=>ae.cardId===G.cardId),W=lt(K.length),ie=Z>=0?W[Z]:O._col??1;return{...O,_line:G._role,_col:ie}}),_=Ht(D,r.modifiers[o]||{});de(o,D.map(G=>G.cardId)),D.forEach(G=>{const O=(C[G._role]||[]).find(K=>K.cardId===G.cardId);O&&(O.used=!0)}),r["selected_"+o]=[],R();const T=Ut(r.pendingAttack.total,_.total,r.modifiers[o]||{}),f=r.pendingAttack.side,x=T==="attack"||(T==null?void 0:T.goal),y=f==="p1"?"p2":"p1",h=(r.round||0)+1,v=(r.pendingAttack.players||[]).map(G=>({name:G.name,note:Ie(G,G._line||"ATT"),portrait:Pe(G),job:G.job})),$=[...r.log||[]];$.push({type:"duel",isGoal:x,homeScored:x&&f===o,text:x?`⚽ BUT de ${r[f+"Name"]} ! (${r.pendingAttack.total} vs ${_.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${_.total})`,homePlayers:v,aiPlayers:D.map(G=>({name:G.name,note:Ie(G,G._line||"DEF"),portrait:Pe(G),job:G.job})),homeTotal:r.pendingAttack.total,aiTotal:_.total});const z=x?(r[f+"Score"]||0)+1:r[f+"Score"]||0,k={...r,[o+"Team"]:C,[f+"Score"]:z},S=Se(k),I=S?"finished":y+"-attack",F=async()=>{await M({[o+"Team"]:C,[n+"Team"]:r[n+"Team"],[f+"Score"]:z,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:I,attacker:y,round:h,log:$}),(I==="finished"||S)&&await he({...r,[f+"Score"]:z})};if(x){const G=f===o,O=G?z:r[o+"Score"]||0,K=G?r[n+"Score"]||0:z;j.add(h),we(v,O,K,G,F)}else await F()}function X(C){return["MIL","ATT"].some(D=>(C[D]||[]).some(_=>!_.used))}function Y(C){return["GK","DEF","MIL","ATT"].some(D=>(C[D]||[]).some(_=>!_.used))}function se(C){return Y(C)&&!X(C)}function ve(C){const D=r[C+"Team"],_=r[(C==="p1"?"p2":"p1")+"Team"];return!!(X(D)||!Y(_)&&se(D))}function Se(C){const D=["MIL","ATT"].some($=>(C.p1Team[$]||[]).some(z=>!z.used)),_=["MIL","ATT"].some($=>(C.p2Team[$]||[]).some(z=>!z.used)),T=Y(C.p1Team),f=Y(C.p2Team);return!D&&!(!f&&T)&&(!_&&!(!T&&f))}function ze(C){const D=C.p1Score||0,_=C.p2Score||0;return D===_?null:D>_?g.home_id:g.away_id}async function he(C){try{const D=ze(C),_=D?g.home_id===D?g.away_id:g.home_id:null;await E.from("matches").update({status:"finished",winner_id:D,home_score:C.p1Score||0,away_score:C.p2Score||0}).eq("id",i),D&&_&&updateEvolutiveCards(D,_).catch(()=>{})}catch(D){console.error("[PvP] finishMatch:",D)}}function Ae(){var f;const C=r[o+"Score"],D=r[n+"Score"],_=C>D,T=C===D;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${_?"🏆":T?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${_?"Victoire !":T?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${C} - ${D}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(f=document.getElementById("pvp-home"))==null||f.addEventListener("click",()=>{try{E.removeChannel(B)}catch{}Je(e),c("home")})}R()}const Hn=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:vo,resumePvpMatch:On},Symbol.toStringTag,{value:"Module"}));async function Un(e,t,i,a){var l,d;try{const s=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(E.getChannels?E.getChannels():[]).forEach(u=>{const o=u.topic||"";(o.includes("matchmaking")||o.includes("pvp-match"))&&E.removeChannel(u)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}s&&(await E.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await si(e,t,"random",({deckId:s,formation:c,starters:u,subsRaw:o,gcCardsEnriched:n,gcDefs:m,stadiumDef:b})=>{const g=w=>Kn(e,t,s,c,u,o,w,m||[],i,a);if(!n.length){g([]);return}ai(e,n,g)})}async function Kn(e,t,i,a,l,d,s=[],c=[],u,o){var oe;const{state:n,navigate:m,toast:b}=t,g=n.profile.id;let w=!1,r=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:g})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",g)}catch{}const p=(ne,ce,de,J)=>{var R;e.innerHTML=`
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
            <div style="width:52px;height:52px;border-radius:50%;background:${ce?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${ce?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${ce?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${o}</div>
            <div style="font-size:11px;color:${ce?"#22c55e":"#aaa"}">${ce?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!ce&&ne?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(R=document.getElementById("lobby-cancel"))==null||R.addEventListener("click",async()=>{w=!0,r&&(E.removeChannel(r),r=null),de&&await E.from("friend_match_invites").update({status:"declined"}).eq("id",de),Je(e),m("home")})},L=async(ne,ce)=>{w=!0,r&&(E.removeChannel(r),r=null),await new Promise(de=>setTimeout(de,600)),e.isConnected&&Vn(e,t,ne,ce,s,c)},{data:A}=await E.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${g},invitee_id.eq.${u}),and(inviter_id.eq.${u},invitee_id.eq.${g})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let j,N;if(A&&A.inviter_id===u)N=!1,j=A.id,await E.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",j);else{N=!0;const{data:ne,error:ce}=await E.from("friend_match_invites").insert({inviter_id:g,invitee_id:u,friend_id:u,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(ce||!ne){b("Erreur création invitation","error"),Je(e),m("home");return}j=ne.id}if(p(!0,!N,j),!N){const ne={home_id:u,away_id:g,home_deck_id:A.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},ce=await E.from("matches").insert(ne).select().single(),de=ce.data;if(!de){b("Erreur création match: "+(((oe=ce.error)==null?void 0:oe.message)||""),"error"),Je(e),m("home");return}await E.from("friend_match_invites").update({match_id:de.id,status:"matched"}).eq("id",j),L(de.id,!1);return}let q=!1;const B=ne=>{w||q||(ne.status==="matched"&&ne.match_id?(q=!0,clearInterval(M),clearInterval(H),L(ne.match_id,!0)):ne.status==="declined"?(clearInterval(M),clearInterval(H),b(`${o} a décliné l'invitation`,"warning"),Je(e),m("home")):ne.invitee_ready&&p(!0,!0,j))},M=setInterval(()=>{if(w){clearInterval(M);return}E.from("matchmaking_queue").delete().eq("user_id",g).then(()=>{},()=>{})},3e3),H=setInterval(async()=>{if(w||q){clearInterval(H);return}const{data:ne}=await E.from("friend_match_invites").select("*").eq("id",j).maybeSingle();ne&&B(ne)},1200);r=E.channel("friend-invite-"+j).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${j}`},ne=>B(ne.new)).subscribe()}async function Vn(e,t,i,a,l=[],d=[]){const{state:s,navigate:c,toast:u}=t,o=a?"p1":"p2",n=a?"p2":"p1",m=(l||[]).map(_=>_.id),b=(l||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:g}=await E.from("matches").select("*").eq("id",i).single();if(!g){u("Match introuvable","error"),c("home");return}async function w(){const[{data:_},{data:T},{data:f},{data:x}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:g.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:g.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",g.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",g.away_id).single()]),y=k=>{const S=Number(k.evolution_bonus)||0;return{cardId:k.card_id,position:k.position,id:k.id,firstname:k.firstname,name:k.surname_encoded,country_code:k.country_code,club_id:k.club_id,job:k.job,job2:k.job2,note_g:(Number(k.note_g)||0)+(k.job==="GK"||k.job2==="GK"&&Number(k.note_g)>0?S:0),note_d:(Number(k.note_d)||0)+(k.job==="DEF"||k.job2==="DEF"&&Number(k.note_d)>0?S:0),note_m:(Number(k.note_m)||0)+(k.job==="MIL"||k.job2==="MIL"&&Number(k.note_m)>0?S:0),note_a:(Number(k.note_a)||0)+(k.job==="ATT"||k.job2==="ATT"&&Number(k.note_a)>0?S:0),evolution_bonus:S,rarity:k.rarity,skin:k.skin,hair:k.hair,hair_length:k.hair_length,clubName:k.club_encoded_name||null,clubLogo:k.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},h=((_==null?void 0:_.starters)||[]).map(k=>y(k)),v=((T==null?void 0:T.starters)||[]).map(k=>y(k)),$=(_==null?void 0:_.formation)||"4-4-2",z=(T==null?void 0:T.formation)||"4-4-2";return{p1Team:(()=>{const k=yt(h,$);return stadiumDef?jt(k,stadiumDef):k})(),p2Team:yt(v,z),p1Subs:(()=>{const k=((_==null?void 0:_.subs)||[]).map(S=>y(S));return stadiumDef&&Nt(k,stadiumDef),k})(),p2Subs:((T==null?void 0:T.subs)||[]).map(k=>y(k)),p1Formation:$,p2Formation:z,p1Name:(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"Joueur 1",p2Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?m:[],gc_p2:a?[]:m,gcCardsFull_p1:a?b:[],gcCardsFull_p2:a?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=g.game_state&&Object.keys(g.game_state).length?g.game_state:null;if(!r)if(a){r=await w();const{data:_}=await E.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:g.home_id}).eq("id",i):r=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let _=0;_<60&&!r;_++){await new Promise(f=>setTimeout(f,400));const{data:T}=await E.from("matches").select("game_state").eq("id",i).single();T!=null&&T.game_state&&Object.keys(T.game_state).length&&(r=T.game_state)}if(!r){u("Erreur de synchronisation","error"),c("home");return}r.gc_p2=m,r.gcCardsFull_p2=b,await E.from("matches").update({game_state:r}).eq("id",i)}let p=!1,L=!1,A=!1,j=null,N=!1;const q=new Set,B=new Set;function M(_){var k,S;try{E.removeChannel(H)}catch{}const T=r[o+"Score"]||0,f=r[n+"Score"]||0;if(!A){A=!0;const I=_.winner_id||(T>f?s.profile.id:f>T?"opp":null),F=I===s.profile.id?"win":I?"loss":null;F&&oi(()=>Promise.resolve().then(()=>oo),void 0).then(G=>G.applyOwnEvolution(s.profile.id,F)).catch(()=>{})}if(!L){const I=r.p1Score||0,F=r.p2Score||0,G=(r.usedGc_p1||[]).length,O=(r.usedGc_p2||[]).length,K=_.winner_id||(I>F?g.home_id:F>I?g.away_id:null);(K?s.profile.id===K:s.profile.id<(a?g.away_id:g.home_id))&&(L=!0,Xi({player1Id:g.home_id,player2Id:g.away_id,score1:I,score2:F,gc1:G,gc2:O}).catch(W=>console.warn("[FriendMatch] updateStats:",W)))}let x,y;_.winner_id?(x=_.winner_id===s.profile.id,y=!1):_.forfeit?(x=T>f,y=!1):(y=T===f,x=T>f),(k=document.getElementById("pvp-end-overlay"))==null||k.remove();const h=document.createElement("div");h.id="pvp-end-overlay",h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=y?"🤝":x?"🏆":"😞",$=y?"MATCH NUL":x?"VICTOIRE !":"DÉFAITE",z=y?"#fff":x?"#FFD700":"#ff6b6b";h.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${$}</div>
      <div style="font-size:18px">${r[o+"Name"]} ${T} – ${f} ${r[n+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${x?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(h),(S=h.querySelector("#pvp-end-home"))==null||S.addEventListener("click",()=>{h.remove(),Je(e),c("home")})}const H=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{const T=_.new;try{if(T.status==="finished"||T.forfeit){if(p)return;p=!0,j&&(clearInterval(j),j=null),T.game_state&&(r=T.game_state),M(T);return}if(T.game_state){const f=r;r=T.game_state;const x=r._lastGC;if(x&&x.seq&&!B.has(x.seq)&&(B.add(x.seq),x.by!==o)){Ce(x.type,x.by,()=>re());return}const y=f[o+"Score"]||0,h=f[n+"Score"]||0,v=r[o+"Score"]||0,$=r[n+"Score"]||0,z=v>y,k=$>h;if((z||k)&&!q.has(r.round)){q.add(r.round);const S=[...r.log||[]].reverse().find(F=>F.isGoal),I=((S==null?void 0:S.homePlayers)||[]).map(F=>({name:F.name,note:F.note,portrait:F.portrait,job:F.job}));be(I,v,$,z,()=>re());return}re()}}catch(f){console.error("[PvP] crash:",f)}}).subscribe();async function oe(_){Object.assign(r,_),r.lastActionAt=new Date().toISOString();const{error:T}=await E.from("matches").update({game_state:r}).eq("id",i);T&&u("Erreur de synchronisation","error");try{re()}catch(f){console.error("[PvP] renderPvpScreen crash:",f)}}async function ne(){if(p)return;p=!0,j&&(clearInterval(j),j=null);const _=a?g.away_id:g.home_id,T=a?"p2":"p1",f=a?"p1":"p2",x={...r,[T+"Score"]:3,[f+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:_,home_score:x.p1Score||0,away_score:x.p2Score||0,game_state:x}).eq("id",i)}catch{}try{E.removeChannel(H)}catch{}setTimeout(()=>{Je(e),c("home")},800)}const ce={BOOST_STAT:({value:_=1,count:T=1,roles:f=[]},x,y)=>{const h=x[o+"Team"],v=Object.entries(h).filter(([$])=>!f.length||f.includes($)).flatMap(([$,z])=>z.filter(k=>!k.used).map(k=>({...k,_line:$})));if(!v.length){x.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(x);return}de(v,T,`Choisir ${T} joueur(s) à booster (+${_})`,$=>{$.forEach(z=>{const k=(h[z._line]||[]).find(S=>S.cardId===z.cardId);k&&(k.boost=(k.boost||0)+_,x.log.push({text:`⚡ +${_} sur ${k.name}`,type:"info"}))}),x[o+"Team"]=h,y(x)})},DEBUFF_STAT:({value:_=1,count:T=1,roles:f=[],target:x="ai"},y,h)=>{const v=x==="home"?o:n,$=y[v+"Team"],z=x==="home"?"allié":"adverse",k=Object.entries($).filter(([S])=>!f.length||f.includes(S)).flatMap(([S,I])=>I.map(F=>({...F,_line:S})));if(!k.length){y.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),h(y);return}de(k,T,`Choisir ${T} joueur(s) ${z}(s) (-${_})`,S=>{S.forEach(I=>{const F=($[I._line]||[]).find(G=>G.cardId===I.cardId);F&&(F.boost=(F.boost||0)-_,y.log.push({text:`🎯 -${_} sur ${F.name}`,type:"info"}))}),y[v+"Team"]=$,h(y)})},GRAY_PLAYER:({count:_=1,roles:T=[],target:f="ai"},x,y)=>{const h=f==="home"?o:n,v=x[h+"Team"],$=f==="home"?"allié":"adverse",z=Object.entries(v).filter(([k])=>!T.length||T.includes(k)).flatMap(([k,S])=>S.filter(I=>!I.used).map(I=>({...I,_line:k})));if(!z.length){x.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),y(x);return}de(z,_,`Choisir ${_} joueur(s) ${$}(s) à exclure`,k=>{const S="usedCardIds_"+h,I=new Set(x[S]||[]);k.forEach(F=>{const G=(v[F._line]||[]).find(O=>O.cardId===F.cardId);G&&(G.used=!0,I.add(F.cardId),x.log.push({text:`❌ ${G.name} exclu !`,type:"info"}))}),x[S]=[...I],x[h+"Team"]=v,y(x)})},REVIVE_PLAYER:({count:_=1,roles:T=[]},f,x)=>{const y=f[o+"Team"],h=Object.entries(y).filter(([v])=>!T.length||T.includes(v)).flatMap(([v,$])=>$.filter(z=>z.used).map(z=>({...z,_line:v})));if(!h.length){f.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),x(f);return}de(h,_,`Choisir ${_} joueur(s) à ressusciter`,v=>{v.forEach($=>{const z=(y[$._line]||[]).find(k=>k.cardId===$.cardId);z&&(z.used=!1,f.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),f[o+"Team"]=y,x(f)})},REMOVE_GOAL:({},_,T)=>{const f=n+"Score";_[f]>0?(_[f]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),T(_)},ADD_GOAL_DRAW:({},_,T)=>{_[o+"Score"]===_[n+"Score"]?(_[o+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),T(_)},ADD_SUB:({value:_=1},T,f)=>{T.maxSubs=(T.maxSubs||3)+_,T.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),f(T)},CUSTOM:({},_,T)=>T(_)};function de(_,T,f,x){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let h=[];function v(){var z,k;const $=_.map(S=>{const I={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[S._line]||"#555",F=Ie(S,S._line)+(S.boost||0),O=h.find(Z=>Z.cardId===S.cardId)?"#FFD700":"rgba(255,255,255,0.25)",K=S.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${S.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${O};background:${I};overflow:hidden;cursor:pointer;${K}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${S.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${F}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${S._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${f}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h.length}/${T}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${$}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${h.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${h.length}/${T})
          </button>
        </div>`,(z=y.querySelector("#pp-close"))==null||z.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(S=>{S.addEventListener("click",()=>{const I=S.dataset.cid,F=_.find(O=>O.cardId===I),G=h.findIndex(O=>O.cardId===I);F&&(G>-1?h.splice(G,1):h.length<T&&h.push(F),v())})}),(k=y.querySelector("#pp-confirm"))==null||k.addEventListener("click",()=>{y.remove(),x(h)})}v(),document.body.appendChild(y)}async function J(_,T){const x=(r["gcCardsFull_"+o]||[]).find($=>$.id===_),y=(x==null?void 0:x._gcDef)||(r.gcDefs||[]).find($=>{var z;return $.name===T||((z=$.name)==null?void 0:z.toLowerCase().trim())===(T==null?void 0:T.toLowerCase().trim())}),h=[...r["usedGc_"+o]||[],_],v={type:T,by:o,seq:(r._gcAnimSeq||0)+1};B.add(v.seq),Ce(T,o,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const z=ce[y.effect_type];if(z){const k={...r};z(y.effect_params||{},k,async S=>{S["usedGc_"+o]=h,S._lastGC=v,S._gcAnimSeq=v.seq,await oe(S)});return}}const $={...r};switch(T){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=n+"Score";$[z]>0&&($[z]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+o]=h,$._lastGC=v,$._gcAnimSeq=v.seq,await oe($)})}function R(_,T){const f="usedCardIds_"+_,x=new Set(r[f]||[]);T.forEach(y=>x.add(y)),r[f]=[...x]}function P(){for(const _ of["p1","p2"]){const T=new Set(r["usedCardIds_"+_]||[]),f=r[_+"Team"];if(f)for(const x of["GK","DEF","MIL","ATT"])(f[x]||[]).forEach(y=>{y.used=T.has(y.cardId)})}}function re(){var Ze,Qe,nt,gt,le,Ee;if(r.phase==="reveal")return me();if(r.phase==="midfield")return xe();if(r.phase==="finished")return D();const _=r[o+"Team"],T=r[n+"Team"];P();const f=r[o+"Score"],x=r[n+"Score"],y=r[o+"Name"],h=r[n+"Name"],v=r.phase===o+"-attack",$=r.phase===o+"-defense",z=Array.isArray(r["selected_"+o])?r["selected_"+o]:[],k=z.map(te=>te.cardId),S=window.innerWidth>=700,I=r[o+"Subs"]||[],F=r["usedSubIds_"+o]||[],G=I.filter(te=>!F.includes(te.cardId)),O=r["gcCardsFull_"+o]||[],K=r["usedGc_"+o]||[],Z=O.filter(te=>!K.includes(te.id)),W=r.boostOwner===o&&!r.boostUsed,ie=!["GK","DEF","MIL","ATT"].some(te=>(T[te]||[]).some(ue=>!ue.used)),ae=[..._.MIL||[],..._.ATT||[]].filter(te=>!te.used),fe=v&&ie&&ae.length===0?[..._.GK||[],..._.DEF||[]].filter(te=>!te.used).map(te=>te.cardId):[];function ye(te,ue,Q){var Et,Kt;const pe=te._gcDef,je={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[pe==null?void 0:pe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Te={purple:"#b06ce0",light_blue:"#00d4ef"}[pe==null?void 0:pe.color]||"#b06ce0",tt=(pe==null?void 0:pe.name)||te.gc_type,it=(pe==null?void 0:pe.effect)||((Et=Re[te.gc_type])==null?void 0:Et.desc)||"",rt=pe!=null&&pe.image_url?`/icons/${pe.image_url}`:null,st=((Kt=Re[te.gc_type])==null?void 0:Kt.icon)||"⚡",ct=Math.round(Q*.22),kt=Math.round(Q*.22),pt=Q-ct-kt,ht=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${te.id}" data-gc-type="${te.gc_type}"
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
        <div style="font-size:${Math.round(ue*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const $e=(te,ue)=>ue?_e(130,175):ye(te,130,175),Me=(te,ue)=>ue?_e(68,95):ye(te,68,95),Le=S?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=v?ze(o)?`<button id="pvp-action" style="${Le};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Le};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${Le};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${h}</div>`,qe=v&&!ze(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",He=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${S?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${G.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':G.map(te=>`<div class="pvp-sub-btn" data-sub-id="${te.cardId}" style="cursor:pointer;flex-shrink:0">${We(te,S?76:44,S?100:58)}</div>`).join("")}
    </div>`,Be=v?"attack":$?"defense":"idle",Ve=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(_,r[o+"Formation"],Be,k,300,300,fe)}
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
        </div>`}return`<div style="font-size:11px;color:${te.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${te.type==="goal"?700:400};padding:3px 2px">${te.text||""}</div>`}const Ue=(()=>{var ue,Q;if($&&((ue=r.pendingAttack)!=null&&ue.players)){const pe=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${h} ATTAQUE — Défendez !</div>
          ${ot((pe.players||[]).map(je=>({...je,used:!1})),"#ff6b6b",pe.total)}
        </div>`}if(v&&((Q=r.pendingAttack)!=null&&Q.players)){const pe=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((pe.players||[]).map(je=>({...je,used:!1})),"#00ff88",pe.total)}
        </div>`}const te=(r.log||[]).slice(-1)[0];return te?'<div style="padding:2px 4px">'+Ne(te)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
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
        ▼ Historique (${(r.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",S?e.innerHTML=`
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
            ${W?$e(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(_,r[o+"Formation"],Be,k,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Z.map(te=>Me(te,!1)).join("")}
            ${W?Me(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${v&&G.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${v&&G.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${v&&G.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${v&&G.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${G.length}</div>
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
          <div>${Oe}${qe}</div>
        </div>
      </div>`;function Xe(){const te=e.querySelector(".match-screen");if(!te)return;const ue=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);te.style.height=ue+"px",te.style.minHeight=ue+"px",te.style.maxHeight=ue+"px",te.style.overflow="hidden";const Q=e.querySelector("#mobile-action-bar"),pe=e.querySelector("#mobile-play-area");Q&&pe&&(pe.style.paddingBottom=Q.offsetHeight+"px")}if(Xe(),setTimeout(Xe,120),setTimeout(Xe,400),N||(N=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Xe),window.visualViewport.addEventListener("scroll",Xe)),window.addEventListener("resize",Xe)),function(){const ue=e.querySelector(".terrain-wrapper svg");ue&&(ue.removeAttribute("width"),ue.removeAttribute("height"),ue.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ue.setAttribute("viewBox","-26 -26 352 352"),ue.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(te=>{te.addEventListener("click",()=>{if(!v&&!$)return;const ue=te.dataset.cardId,Q=te.dataset.role,pe=(_[Q]||[]).find(it=>it.cardId===ue);if(!pe||pe.used)return;const je=fe.includes(ue);if(v&&!["MIL","ATT"].includes(Q)&&!je)return;Array.isArray(r["selected_"+o])||(r["selected_"+o]=[]);const Te=r["selected_"+o],tt=Te.findIndex(it=>it.cardId===ue);tt>-1?Te.splice(tt,1):Te.length<3&&Te.push({...pe,_role:Q}),re()})}),e.querySelectorAll(".match-used-hit").forEach(te=>{te.addEventListener("click",()=>ke(te.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(te=>{te.addEventListener("click",()=>ke())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>ke()),e.querySelectorAll(".pvp-gc-mini").forEach(te=>{te.addEventListener("click",()=>Fe(te.dataset.gcId,te.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>De()),(nt=e.querySelector("#pvp-action"))==null||nt.addEventListener("click",te=>{v?te.currentTarget.dataset.pass==="1"||!ze(o)?U():X():$&&Y()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ne()}),(le=e.querySelector("#pvp-view-opp"))==null||le.addEventListener("click",()=>ee()),(Ee=e.querySelector("#pvp-toggle-history"))==null||Ee.addEventListener("click",()=>ge()),j&&(clearInterval(j),j=null),(v||$)&&!p){let te=30,ue=!1;const Q=()=>document.getElementById("pvp-timer"),pe=()=>{Q()&&(Q().textContent=te+"s",Q().style.color=ue?"#ff4444":"#fff")};pe(),j=setInterval(()=>{te--,te<0?ue?(clearInterval(j),j=null,v&&!ze(o)?U():ne()):(ue=!0,te=15,pe()):pe()},1e3)}}function me(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[n+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await oe({phase:"midfield"})},5e3)}let we=!1;function xe(){if(we)return;const _=r[o+"Team"].MIL||[],T=r[n+"Team"].MIL||[];function f(Z){return Z.reduce((W,ie)=>W+Ie(ie,"MIL"),0)}function x(Z){let W=0;for(let ie=0;ie<Z.length-1;ie++){const ae=at(Z[ie],Z[ie+1]);ae==="#00ff88"?W+=2:ae==="#FFD700"&&(W+=1)}return W}const y=f(_)+x(_),h=f(T)+x(T),v=y>=h;function $(Z,W,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${W}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Z.map((ae,fe)=>{const ye=fe<Z.length-1?at(ae,Z[fe+1]):null,_e=!ye||ye==="#ff3333"||ye==="#cc2222",$e=ye==="#00ff88"?"+2":ye==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ie}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...ae,note:Ie(ae,"MIL"),_line:"MIL"},58,78)}
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
      ${$(_,r[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(T,r[n+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(Z,W)=>e.querySelectorAll(Z).forEach((ie,ae)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},W+ae*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Z,W)=>setTimeout(()=>{Z.style.opacity="1"},W*70)),900),setTimeout(()=>{const Z=e.querySelector("#pvp-vs");Z&&(Z.style.opacity="1",Z.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(W=>W.style.opacity="1")},1250);function k(Z,W,ie){const ae=document.getElementById(Z);if(!ae)return;const fe=performance.now(),ye=_e=>{const $e=Math.min(1,(_e-fe)/ie);ae.textContent=Math.round(W*(1-Math.pow(1-$e,3))),$e<1?requestAnimationFrame(ye):ae.textContent=W};requestAnimationFrame(ye)}setTimeout(()=>{k("pvp-score-me",y,800),k("pvp-score-opp",h,800)},1500);const S=r.p1Team.MIL||[],I=r.p2Team.MIL||[],F=f(S)+x(S),G=f(I)+x(I),O=F>=G?"p1":"p2";let K=r.boostValue;K==null&&(K=ri(),r.boostValue=K,r.boostOwner=O,r.boostUsed=!1),we=!0,setTimeout(()=>{const Z=e.querySelector("#duel-row-"+(v?"me":"opp")),W=e.querySelector("#duel-row-"+(v?"opp":"me")),ie=document.getElementById("pvp-score-me"),ae=document.getElementById("pvp-score-opp"),fe=v?ie:ae,ye=v?ae:ie;fe&&(fe.style.fontSize="80px",fe.style.color=v?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),ye&&(ye.style.opacity="0.25"),setTimeout(()=>{Z&&(Z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Z.style.zIndex="5"),setTimeout(()=>{const _e=document.getElementById("duel-shock");_e&&(_e.style.animation="shockwave .5s ease-out forwards"),W&&(W.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Le;const _e=document.getElementById("pvp-duel-finale");if(!_e)return;const $e=r.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+K+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Me=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;_e.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+r[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[n+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+$e+Me,_e.style.transition="opacity .45s ease",_e.style.opacity="1",_e.style.pointerEvents="auto",(Le=document.getElementById("pvp-start-match"))==null||Le.addEventListener("click",async()=>{const Oe=O;await oe({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:K,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function be(_,T,f,x,y){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(S,I)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${I%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][I%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};h.innerHTML=`
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
        ${T} – ${f}
      </div>
      ${_!=null&&_.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${_.map(S=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[S.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${S.portrait?`<img src="${S.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(S.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(h);let z=!1;const k=()=>{z||(z=!0,h.remove(),setTimeout(()=>y(),50))};h.addEventListener("click",k),setTimeout(k,3500)}function Ce(_,T,f){var K,Z;const x=(r.gcDefs||[]).find(W=>{var ie;return W.name===_||((ie=W.name)==null?void 0:ie.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",v=(x==null?void 0:x.name)||_,$=(x==null?void 0:x.effect)||((K=Re[_])==null?void 0:K.desc)||"",z=x!=null&&x.image_url?`/icons/${x.image_url}`:null,k=((Z=Re[_])==null?void 0:Z.icon)||"⚡",I=T===o?"Vous":r[T+"Name"]||"Adversaire",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",F.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${h}66}50%{box-shadow:0 0 60px ${h}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${h};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${I} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${h};background:${y};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${v.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${v}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${z?`<img src="${z}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${k}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(F);let G=!1;const O=()=>{G||(G=!0,F.remove(),setTimeout(()=>f&&f(),50))};F.addEventListener("click",O),setTimeout(O,3e3)}function Fe(_,T){var F,G,O,K;const x=(r["gcCardsFull_"+o]||[]).find(Z=>Z.id===_),y=x==null?void 0:x._gcDef,h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",$=(y==null?void 0:y.name)||T,z=(y==null?void 0:y.effect)||((F=Re[T])==null?void 0:F.desc)||"Carte spéciale.",k=y!=null&&y.image_url?`/icons/${y.image_url}`:null,S=((G=Re[T])==null?void 0:G.icon)||"⚡",I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",I.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${h};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${k?`<img src="${k}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${S}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(I),(O=I.querySelector("#pvp-gc-back"))==null||O.addEventListener("click",()=>I.remove()),(K=I.querySelector("#pvp-gc-use"))==null||K.addEventListener("click",()=>{I.remove(),J(_,T)})}function De(){var x;const _=r[o+"Team"],T=Object.entries(_).flatMap(([y,h])=>(h||[]).filter(v=>!v.used).map(v=>({...v,_line:y})));if(!T.length)return;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",f.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${T.map(y=>{const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",v=Ie(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${h};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(f),(x=f.querySelector("#bp-close"))==null||x.addEventListener("click",()=>f.remove()),f.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const h=y.dataset.cid,v=T.find(z=>z.cardId===h);if(!v)return;const $=(_[v._line]||[]).find(z=>z.cardId===h);$&&($.boost=($.boost||0)+r.boostValue),f.remove(),await oe({[o+"Team"]:_,boostUsed:!0})})})}function ke(_=null){var G,O;if(!(r.phase===o+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const f=r[o+"Team"],x=r["usedSubIds_"+o]||[],y=r.maxSubs||3;if(x.length>=y){u(`Maximum ${y} remplacements atteint`,"warning");return}const h=Object.entries(f).flatMap(([K,Z])=>(Z||[]).filter(W=>W.used).map(W=>({...W,_line:K}))),v=(r[o+"Subs"]||[]).filter(K=>!x.includes(K.cardId));if(!h.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){u("Aucun remplaçant disponible","warning");return}let $=Math.max(0,h.findIndex(K=>K.cardId===_));const z=((G=h[$])==null?void 0:G._line)||((O=h[$])==null?void 0:O.job);let k=Math.max(0,v.findIndex(K=>K.job===z)),S=!1;const I=document.createElement("div");I.id="pvp-sub-overlay",I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function F(){var ye,_e,$e,Me,Le,Oe;const K=h[$],Z=v[k],W=Math.min(130,Math.round((window.innerWidth-90)/2)),ie=Math.round(W*1.35),ae=qe=>`background:rgba(255,255,255,0.12);border:none;color:${qe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${qe?"default":"pointer"};flex-shrink:0`;I.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${x.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${Z?We({...Z,used:!1,boost:0},W,ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae(k>=v.length-1)}" ${k>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${K?We({...K,used:!1,boost:0},W,ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae($>=h.length-1)}" ${$>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ye=I.querySelector("#psub-close"))==null||ye.addEventListener("click",()=>I.remove()),(_e=I.querySelector("#pout-up"))==null||_e.addEventListener("click",()=>{$>0&&($--,F())}),($e=I.querySelector("#pout-down"))==null||$e.addEventListener("click",()=>{$<h.length-1&&($++,F())}),(Me=I.querySelector("#pin-up"))==null||Me.addEventListener("click",()=>{k>0&&(k--,F())}),(Le=I.querySelector("#pin-down"))==null||Le.addEventListener("click",()=>{k<v.length-1&&(k++,F())});const fe=(qe,He,Be,Ve)=>{const Ne=I.querySelector("#"+qe);if(!Ne)return;let Ue=0;Ne.addEventListener("touchstart",Ke=>{Ue=Ke.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Ke=>{const Xe=Ke.changedTouches[0].clientY-Ue;if(Math.abs(Xe)<30)return;const Ze=He();Xe<0&&Ze<Ve-1?(Be(Ze+1),F()):Xe>0&&Ze>0&&(Be(Ze-1),F())},{passive:!0})};fe("pin-panel",()=>k,qe=>k=qe,v.length),fe("pout-panel",()=>$,qe=>$=qe,h.length),(Oe=I.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async qe=>{if(qe.preventDefault(),qe.stopPropagation(),S)return;S=!0;const He=h[$],Be=v[k];if(!He||!Be)return;const Ve=He._line,Ne=(f[Ve]||[]).findIndex(Xe=>Xe.cardId===He.cardId);if(Ne===-1){u("Erreur : joueur introuvable","error"),I.remove();return}const Ue={...Be,_line:Ve,position:He.position,used:!1,boost:0};f[Ve].splice(Ne,1,Ue);const Ke=[...x,Be.cardId];I.remove(),V(He,Be,async()=>{await oe({[o+"Team"]:f,[n+"Team"]:r[n+"Team"],["usedSubIds_"+o]:Ke})})})}document.body.appendChild(I),F()}function V(_,T,f){const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const h=(z,k,S)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${k};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${S}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${x[z.job]||"#555"};border:3px solid ${k};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(z)?`<img src="${Pe(z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(z.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${h(T,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${h(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let v=!1;const $=()=>{v||(v=!0,y.remove(),setTimeout(()=>f(),50))};y.addEventListener("click",$),setTimeout($,2200)}function ee(){var T;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[n+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(T=_.querySelector("#pvp-opp-close"))==null||T.addEventListener("click",()=>_.remove())}function ge(){var x;const _=r.log||[],T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const f=y=>{var v,$,z;if(y.type==="duel"){const k=y.isGoal,S=y.homeScored&&o==="p1"||!y.homeScored&&k&&o==="p2",I=y.homeScored?"#FFD700":k?"#ff6b6b":"rgba(255,255,255,0.3)",F=k?S?"⚽ BUT !":"⚽ BUT adversaire !":(v=y.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${k?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${I};margin-bottom:4px">
          <div style="font-size:9px;color:${I};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${F}</div>
          ${($=y.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${ot(y.homePlayers,"rgba(255,255,255,0.7)",y.homeTotal)}</div>`:""}
          ${(z=y.aiPlayers)!=null&&z.length?`<div style="opacity:0.7">${ot(y.aiPlayers,"#ff6b6b",y.aiTotal)}</div>`:""}
        </div>`}return y.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${y.outPlayer?We({...y.outPlayer,used:!0,_line:y.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${y.inPlayer?We({...y.inPlayer,_line:y.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${y.text||""}</div>
      </div>`};T.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(f).join("")}
      </div>`,document.body.appendChild(T),(x=T.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>T.remove())}async function U(){if(r.phase!==o+"-attack")return;const _=o==="p1"?"p2":"p1",T=(r.round||0)+1,f=[...r.log||[]];f.push({type:"info",text:`⏭️ ${r[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const x=he(r),y=ze(_),h=x||!y?"finished":_+"-attack";await oe({["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:h,attacker:_,round:T,log:f}),h==="finished"&&await C(r)}async function X(){const _=r[o+"Team"],T=!["GK","DEF","MIL","ATT"].some(h=>(r[n+"Team"][h]||[]).some(v=>!v.used)),f=(r["selected_"+o]||[]).map(h=>{const v=(_[h._role]||[]).find(F=>F.cardId===h.cardId)||h,$=T&&["GK","DEF"].includes(h._role),z=_[h._role]||[],k=z.findIndex(F=>F.cardId===h.cardId),S=lt(z.length),I=k>=0?S[k]:v._col??1;return{...v,_line:h._role,_col:I,...$?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!f.length)return;const x=Ot(f,r.modifiers[o]||{});R(o,f.map(h=>h.cardId)),f.forEach(h=>{const v=(_[h._role]||[]).find($=>$.cardId===h.cardId);v&&(v.used=!0)}),r["selected_"+o]=[],re();const y=[...r.log||[]];if(T){const h=(r[o+"Score"]||0)+1,v=f.map(I=>({name:I.name,note:Ie(I,I._line||"ATT"),portrait:Pe(I),job:I.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:x.total,aiTotal:0});const $=(r.round||0)+1,z=o==="p1"?"p2":"p1",k={...r,[o+"Team"]:_,[o+"Score"]:h},S=he(k);q.add($),be(v,h,r[n+"Score"]||0,!0,async()=>{await oe({[o+"Team"]:_,[o+"Score"]:h,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:S?"finished":z+"-attack",attacker:z,round:$,log:y}),S&&await C({...r,[o+"Score"]:h})});return}y.push({type:"pending",text:`⚔️ ${r[o+"Name"]} attaque (${x.total})`}),await oe({[o+"Team"]:_,[n+"Team"]:r[n+"Team"],pendingAttack:{...x,players:f,side:o},["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},phase:n+"-defense",log:y})}async function Y(){const _=r[o+"Team"],T=(r["selected_"+o]||[]).map(K=>{const Z=(_[K._role]||[]).find(ye=>ye.cardId===K.cardId)||K,W=_[K._role]||[],ie=W.findIndex(ye=>ye.cardId===K.cardId),ae=lt(W.length),fe=ie>=0?ae[ie]:Z._col??1;return{...Z,_line:K._role,_col:fe}}),f=Ht(T,r.modifiers[o]||{});R(o,T.map(K=>K.cardId)),T.forEach(K=>{const Z=(_[K._role]||[]).find(W=>W.cardId===K.cardId);Z&&(Z.used=!0)}),r["selected_"+o]=[],re();const x=Ut(r.pendingAttack.total,f.total,r.modifiers[o]||{}),y=r.pendingAttack.side,h=x==="attack"||(x==null?void 0:x.goal),v=y==="p1"?"p2":"p1",$=(r.round||0)+1,z=(r.pendingAttack.players||[]).map(K=>({name:K.name,note:Ie(K,K._line||"ATT"),portrait:Pe(K),job:K.job})),k=[...r.log||[]];k.push({type:"duel",isGoal:h,homeScored:h&&y===o,text:h?`⚽ BUT de ${r[y+"Name"]} ! (${r.pendingAttack.total} vs ${f.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${f.total})`,homePlayers:z,aiPlayers:T.map(K=>({name:K.name,note:Ie(K,K._line||"DEF"),portrait:Pe(K),job:K.job})),homeTotal:r.pendingAttack.total,aiTotal:f.total});const S=h?(r[y+"Score"]||0)+1:r[y+"Score"]||0,I={...r,[o+"Team"]:_,[y+"Score"]:S},F=he(I),G=F?"finished":v+"-attack",O=async()=>{await oe({[o+"Team"]:_,[n+"Team"]:r[n+"Team"],[y+"Score"]:S,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:G,attacker:v,round:$,log:k}),(G==="finished"||F)&&await C({...r,[y+"Score"]:S})};if(h){const K=y===o,Z=K?S:r[o+"Score"]||0,W=K?r[n+"Score"]||0:S;q.add($),be(z,Z,W,K,O)}else await O()}function se(_){return["MIL","ATT"].some(T=>(_[T]||[]).some(f=>!f.used))}function ve(_){return["GK","DEF","MIL","ATT"].some(T=>(_[T]||[]).some(f=>!f.used))}function Se(_){return ve(_)&&!se(_)}function ze(_){const T=r[_+"Team"],f=r[(_==="p1"?"p2":"p1")+"Team"];return!!(se(T)||!ve(f)&&Se(T))}function he(_){const T=["MIL","ATT"].some(k=>(_.p1Team[k]||[]).some(S=>!S.used)),f=["MIL","ATT"].some(k=>(_.p2Team[k]||[]).some(S=>!S.used)),x=ve(_.p1Team),y=ve(_.p2Team);return!T&&!(!y&&x)&&(!f&&!(!x&&y))}function Ae(_){const T=_.p1Score||0,f=_.p2Score||0;return T===f?null:T>f?g.home_id:g.away_id}async function C(_){try{const T=Ae(_),f=T?g.home_id===T?g.away_id:g.home_id:null;await E.from("matches").update({status:"finished",winner_id:T,home_score:_.p1Score||0,away_score:_.p2Score||0}).eq("id",i),T&&f&&ki(T,f).catch(()=>{})}catch(T){console.error("[PvP] finishMatch:",T)}}function D(){var y;const _=r[o+"Score"],T=r[n+"Score"],f=_>T,x=_===T;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${f?"🏆":x?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${f?"Victoire !":x?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${T}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{E.removeChannel(H)}catch{}Je(e),c("home")})}re()}const Lt="#1A6B3C",xt="#D4A017";async function Yn(e,t){var a;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(a=t.state.params)==null?void 0:a.openLeagueId;if(i){t.state.params.openLeagueId=null,await bt(e,t,i);return}await $t(e,t)}async function $t(e,t,i="waiting"){var L;const{state:a}=t,l=a.profile.id,{data:d}=await E.from("mini_league_members").select("league_id").eq("user_id",l),s=(d||[]).map(A=>A.league_id),{data:c,error:u}=await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),o=u?(await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:c||[],m=(s.length?await E.from("mini_leagues").select("*, mini_league_members(count)").in("id",s).order("created_at",{ascending:!1}):{data:[]}).data||[],b=m.filter(A=>A.status==="waiting"&&!A.is_archived),g=m.filter(A=>A.status==="active"&&!A.is_archived),w=m.filter(A=>A.is_archived||A.status==="finished"),r=o.filter(A=>!s.includes(A.id)),p=[{key:"waiting",label:"🟡 En attente",count:b.length+r.length},{key:"active",label:"🟢 En cours",count:g.length},{key:"archived",label:"📁 Archivées",count:w.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${p.map(A=>`<button class="ml-tab" data-tab="${A.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===A.key?Lt:"transparent"};background:none;font-size:12px;font-weight:${i===A.key?"900":"600"};color:${i===A.key?Lt:"#888"};cursor:pointer">${A.label}${A.count?` (${A.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Wn(b,r,l):i==="active"?Jn(g,l):Xn(w,l)}
    </div>
  </div>`,(L=document.getElementById("ml-create-btn"))==null||L.addEventListener("click",()=>Zn(e,t)),e.querySelectorAll(".ml-tab").forEach(A=>A.addEventListener("click",()=>$t(e,t,A.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(A=>A.addEventListener("click",()=>bt(e,t,A.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(A=>A.addEventListener("click",j=>{j.stopPropagation(),_o(e,t,A.dataset.join,A.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(A=>A.addEventListener("click",j=>{j.stopPropagation(),yi(e,t,A.dataset.delete,A.dataset.name,i)}))}function ii(e,t,i=!1){var s,c;const a=e.creator_id===t,l=e.pot||0,d=((c=(s=e.mini_league_members)==null?void 0:s[0])==null?void 0:c.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function Wn(e,t,i){const a=[];return e.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),a.push(...e.map(l=>ii(l,i,!1)))),t.length&&(a.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),a.push(...t.map(l=>ii(l,i,!0)))),a.length?a.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Jn(e,t){return e.length?e.map(i=>ii(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Xn(e,t){return e.length?e.map(i=>ii(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Zn(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",a=>{a.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(a=>a.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=a.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var w,r,p,L;const{toast:a}=t,l=document.getElementById("ml-name").value.trim(),d=parseInt(document.getElementById("ml-max").value)||6,s=parseInt(document.getElementById("ml-fee").value)||500,c=((w=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:w.value)||"public",u=((r=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:r.value)||"aller",o=((L=(p=document.getElementById("ml-pwd"))==null?void 0:p.value)==null?void 0:L.trim())||null;if(!l){a("Le nom est obligatoire","error");return}if(s<100){a("Mise minimum : 100 crédits","error");return}if(c==="private"&&!o){a("Mot de passe requis","error");return}const{data:n,error:m}=await E.from("mini_leagues").insert({name:l,creator_id:t.state.profile.id,type:c,password:o,mode:u,max_players:d,entry_fee:s}).select().single();if(m){a("Erreur : "+m.message,"error");return}const{data:b}=await E.from("users").select("credits").eq("id",t.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<s){await E.from("mini_leagues").delete().eq("id",n.id),a(`Crédits insuffisants pour la mise (${s.toLocaleString("fr")} cr.)`,"error");return}await E.from("users").update({credits:b.credits-s}).eq("id",t.state.profile.id),await E.from("mini_leagues").update({pot:s}).eq("id",n.id),await E.from("mini_league_members").insert({league_id:n.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=b.credits-s);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),a(`Mini League créée ! ${s.toLocaleString("fr")} cr. déduits.`,"success"),bt(e,t,n.id)})}function Qn(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),a=l=>{t.remove(),e(l)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>a(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>a(i.value.trim())),i.addEventListener("keydown",l=>{l.key==="Enter"&&a(i.value.trim())}),t.addEventListener("click",l=>{l.target===t&&a(null)})})}async function _o(e,t,i,a){const{toast:l,state:d}=t,s=d.profile.id,{data:c}=await E.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!c){l("Mini League introuvable","error");return}if(c.status!=="waiting"){l("Cette Mini League a déjà démarré","warning");return}const{count:u}=await E.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(u>=c.max_players){l("La Mini League est complète","warning");return}if(a==="private"){const r=await Qn();if(r===null)return;if(c.password!==r){l("Mot de passe incorrect","error");return}}const o=c.entry_fee||100,{data:n}=await E.from("users").select("credits").eq("id",s).single();if(((n==null?void 0:n.credits)||0)<o){l(`Crédits insuffisants — il te faut ${o.toLocaleString("fr")} cr. (solde : ${((n==null?void 0:n.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:m}=await E.from("mini_league_members").insert({league_id:i,user_id:s});if(m){l("Erreur inscription : "+m.message,"error");return}const{error:b}=await E.from("users").update({credits:n.credits-o}).eq("id",s),{error:g}=await E.from("mini_leagues").update({pot:(c.pot||0)+o}).eq("id",i);(b||g)&&console.error("Erreur post-inscription:",b,g),d.profile&&(d.profile.credits=n.credits-o);const w=document.getElementById("nav-credits");w&&(w.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`✅ Inscrit ! −${o.toLocaleString("fr")} cr. · Pot : ${((c.pot||0)+o).toLocaleString("fr")} cr.`,"success"),bt(e,t,i)}async function er(e,t,i,a){const{toast:l,state:d}=t,s=d.profile.id;if(!confirm(`Te désinscrire et récupérer ${a.toLocaleString("fr")} cr. ?`))return;const{data:c}=await E.from("mini_leagues").select("pot,status").eq("id",i).single();if(!c||c.status!=="waiting"){l("Impossible — la league a déjà démarré","error");return}const{data:u}=await E.from("users").select("credits").eq("id",s).single();await E.from("mini_leagues").update({pot:Math.max(0,(c.pot||0)-a)}).eq("id",i),await E.from("users").update({credits:((u==null?void 0:u.credits)||0)+a}).eq("id",s),await E.from("mini_league_members").delete().eq("league_id",i).eq("user_id",s),d.profile&&(d.profile.credits=((u==null?void 0:u.credits)||0)+a);const o=document.getElementById("nav-credits");o&&(o.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`↩️ Désinscrit · +${a.toLocaleString("fr")} cr. remboursés`,"success"),$t(e,t,"waiting")}async function yi(e,t,i,a,l){const{toast:d}=t;if(!confirm(`Supprimer définitivement "${a}" et tous ses matchs/membres ? Action irréversible.`))return;await E.from("mini_league_matches").delete().eq("league_id",i),await E.from("mini_league_members").delete().eq("league_id",i);const{error:s}=await E.from("mini_leagues").delete().eq("id",i);if(s){d("Erreur suppression ("+s.message+")","error");return}d("Mini League supprimée avec succès","success"),$t(e,t,l)}async function tr(e,t,i){await E.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),$t(e,t,"archived")}async function bt(e,t,i){var N,q,B,M,H,oe,ne,ce,de;const{state:a,toast:l}=t,d=a.profile.id,[{data:s},{data:c},{data:u}]=await Promise.all([E.from("mini_leagues").select("*").eq("id",i).single(),E.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),E.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!s){l("Introuvable","error"),await $t(e,t);return}const o=(c||[]).some(J=>J.user_id===d),n=s.creator_id===d,m=(c||[]).map(J=>J.user).filter(Boolean),b=ko(m,u||[]),g=(u||[]).filter(J=>J.matchday===s.current_day),w=s.pot||0,r=s.entry_fee||100,p=g.length>0&&g.every(J=>J.status==="finished"||J.status==="bye"),L=s.current_day>=s.total_days,A=(c||[]).find(J=>J.user_id===d);e.innerHTML=`
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
        ${w>0?`<div style="font-size:12px;font-weight:900;color:${xt};margin-top:4px">🏆 ${w.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${s.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${m.length}/${s.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${r} cr./joueur → Pot estimé : ${(r*m.length).toLocaleString("fr")} cr. (🥇${Math.floor(r*m.length*.7).toLocaleString("fr")} · 🥈${Math.floor(r*m.length*.2).toLocaleString("fr")} · 🥉${Math.floor(r*m.length*.1).toLocaleString("fr")})</div>
        ${m.map(J=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${J.club_color2||Lt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${J.club_color1||"#fff"}">${(J.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${J.club_name||J.pseudo}</div><div style="font-size:11px;color:#999">@${J.pseudo}</div></div>
            ${J.id===s.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${n&&m.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${r} cr. × ${m.length})</button>`:""}
        ${n?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${o?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${r} cr.)</button>`}
        ${o&&!n?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${r.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${s.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${s.current_day} / ${s.total_days}</div>
        ${g.map(J=>Ri(J,m,d,o)).join("")}
        ${n&&p&&!L?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${n&&p&&L?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(s.status==="active"||s.status==="finished")&&b.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${w>0&&s.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${xt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((J,R)=>{const P=w>0&&s.status==="finished"?R===0?Math.floor(w*.7):R===1?Math.floor(w*.2):R===2?Math.floor(w*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${J.userId===d?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${R===0?xt:R<3?Lt:"#555"}">${["🥇","🥈","🥉"][R]||R+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${J.clubName}</div><div style="font-size:10px;color:#999">@${J.pseudo}</div></td>
              <td style="text-align:center">${J.played}</td><td style="text-align:center">${J.won}-${J.drawn}-${J.lost}</td>
              <td style="text-align:center;color:${J.goalDiff>=0?Lt:"#cc2222"}">${J.goalDiff>=0?"+":""}${J.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${J.points}</td>
              ${w>0&&s.status==="finished"?`<td style="text-align:right;font-weight:700;color:${xt}">${P?P.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${s.status!=="waiting"&&s.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,s.status==="active"?s.current_day-1:s.current_day)},(J,R)=>R+1).reverse().map(J=>{const R=(u||[]).filter(P=>P.matchday===J);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${J}</div>${R.map(P=>Ri(P,m,d,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${n&&!s.is_archived&&s.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const j=s.status==="waiting"?"waiting":s.status==="active"?"active":"archived";if((N=document.getElementById("ml-back"))==null||N.addEventListener("click",()=>$t(e,t,j)),(q=document.getElementById("ml-start-btn"))==null||q.addEventListener("click",()=>ir(e,t,s,m)),(B=document.getElementById("ml-next-day"))==null||B.addEventListener("click",()=>or(e,t,i)),(M=document.getElementById("ml-finish-btn"))==null||M.addEventListener("click",()=>$o(e,t,i,w,b,m)),(H=document.getElementById("ml-join-now"))==null||H.addEventListener("click",()=>_o(e,t,i,s.type)),(oe=document.getElementById("ml-leave-btn"))==null||oe.addEventListener("click",()=>er(e,t,i,r)),(ne=document.getElementById("ml-delete-btn"))==null||ne.addEventListener("click",()=>yi(e,t,i,s.name,"waiting")),(ce=document.getElementById("ml-delete-now"))==null||ce.addEventListener("click",()=>yi(e,t,i,s.name,j)),(de=document.getElementById("ml-archive-btn"))==null||de.addEventListener("click",()=>tr(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(J=>{J.addEventListener("click",()=>{const R=g.find(P=>P.id===J.dataset.playMatch);R&&t.navigate("match-mini-league",{mlMatchId:R.id,leagueId:i})})}),s.status==="finished"&&A){const J=b.findIndex(R=>R.userId===d);J>=0&&J<3&&A.prize_amount>0&&setTimeout(()=>nr(e,t,s,A,J),400)}}function Ri(e,t,i,a,l=!1){const d=m=>t.find(b=>b.id===m);if(e.is_bye){const m=d(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"?"} exempté(e)</div>`}const s=d(e.home_id),c=d(e.away_id),u=e.home_id===i||e.away_id===i,o=u&&e.status==="pending"&&a&&!l,n=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${u?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${u?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?Lt:"#999"}">${n}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"}</div>
    ${o?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function ir(e,t,i,a){const{toast:l,state:d}=t,s=rr(a.map(o=>o.id),i.mode),c=[];s.forEach((o,n)=>o.forEach(m=>c.push({league_id:i.id,matchday:n+1,home_id:m.home||m.bye,away_id:m.away||null,is_bye:!!m.bye,status:m.bye?"bye":"pending"})));const{error:u}=await E.from("mini_league_matches").insert(c);if(u){l("Erreur calendrier : "+u.message,"error");return}await E.from("mini_leagues").update({status:"active",current_day:1,total_days:s.length}).eq("id",i.id),l(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),bt(e,t,i.id)}async function or(e,t,i){const{data:a}=await E.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),l=(a.current_day||0)+1;if(l>(a.total_days||0)){await $o(e,t,i,a.pot||0,null,null);return}await E.from("mini_leagues").update({current_day:l}).eq("id",i),t.toast(`Journée ${l} commencée !`,"success"),bt(e,t,i)}async function $o(e,t,i,a,l,d){const{toast:s,state:c}=t;let u=l,o=d;if(!u){const{data:m}=await E.from("mini_league_matches").select("*").eq("league_id",i),{data:b}=await E.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);o=(b||[]).map(g=>g.user).filter(Boolean),u=ko(o,m||[])}const n=[Math.floor(a*.7),Math.floor(a*.2),Math.floor(a*.1)];await Promise.all(u.slice(0,3).map((m,b)=>n[b]?E.from("mini_league_members").update({prize_amount:n[b],prize_claimed:!1}).eq("league_id",i).eq("user_id",m.userId):Promise.resolve())),await E.from("mini_leagues").update({status:"finished"}).eq("id",i),s("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),bt(e,t,i)}async function nr(e,t,i,a,l){var b,g;const{state:d,toast:s}=t,c=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],u=["🥇","🥈","🥉"][l],o=a.prize_amount||c[l]||0,n=a.prize_claimed,m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",m.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${u}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${l===0?"Champion !":l===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${xt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${n?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${xt}">${o.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${l===0?"70%":l===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${n?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${xt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${o.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(m),(b=m.querySelector("#prize-close"))==null||b.addEventListener("click",()=>m.remove()),m.addEventListener("click",w=>{w.target===m&&m.remove()}),(g=m.querySelector("#claim-prize-btn"))==null||g.addEventListener("click",async()=>{const{data:w}=await E.from("users").select("credits").eq("id",d.profile.id).single();await E.from("users").update({credits:((w==null?void 0:w.credits)||0)+o}).eq("id",d.profile.id),await E.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",d.profile.id),d.profile&&(d.profile.credits=((w==null?void 0:w.credits)||0)+o);const r=document.getElementById("nav-credits");r&&(r.textContent=`💰 ${d.profile.credits.toLocaleString("fr")}`),s(`💰 +${o.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),m.remove(),bt(e,t,i.id)})}function rr(e,t){const a=e.length%2===0?[...e]:[...e,null],l=a.length;let d=a.slice(1);const s=[];for(let c=0;c<l-1;c++){const u=[],o=[a[0],...d];for(let n=0;n<l/2;n++){const m=o[n],b=o[l-1-n];m===null?u.push({bye:b}):b===null?u.push({bye:m}):u.push({home:m,away:b})}s.push(u),d=[d[d.length-1],...d.slice(0,-1)]}return t==="aller-retour"?[...s,...s.map(c=>c.map(u=>u.bye?u:{home:u.away,away:u.home}))]:s}function ko(e,t){const i={};return e.forEach(a=>{i[a.id]={userId:a.id,pseudo:a.pseudo,clubName:a.club_name||a.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(a=>a.status==="finished"&&!a.is_bye&&a.home_score!=null).forEach(a=>{const l=i[a.home_id],d=i[a.away_id];!l||!d||(l.played++,d.played++,l.goalsFor+=a.home_score,l.goalsAgainst+=a.away_score,d.goalsFor+=a.away_score,d.goalsAgainst+=a.home_score,a.home_score>a.away_score?(l.won++,l.points+=3,d.lost++):a.home_score<a.away_score?(d.won++,d.points+=3,l.lost++):(l.drawn++,l.points++,d.drawn++,d.points++),l.goalDiff=l.goalsFor-l.goalsAgainst,d.goalDiff=d.goalsFor-d.goalsAgainst)}),Object.values(i).sort((a,l)=>l.points-a.points||l.goalDiff-a.goalDiff||l.goalsFor-a.goalsFor)}async function Oi(e,t,i,a){var l,d;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:a};try{const s=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(E.getChannels?E.getChannels():[]).forEach(u=>{const o=u.topic||"";(o.includes("matchmaking")||o.includes("pvp-match"))&&E.removeChannel(u)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}s&&(await E.rpc("cancel_matchmaking",{p_user_id:s}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",s).then(()=>{},()=>{}))}catch{}await si(e,t,"random",({deckId:s,formation:c,starters:u,subsRaw:o,gcCardsEnriched:n,gcDefs:m,stadiumDef:b})=>{const g=w=>ar(e,t,s,c,u,o,w,m||[],i);if(!n.length){g([]);return}ai(e,n,g)})}async function ar(e,t,i,a,l,d,s=[],c=[],u,o){const{state:n,navigate:m,toast:b}=t,g=n.profile.id;let w=!1,r=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:g})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",g)}catch{}const{data:p}=await E.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",u).single();if(!p){b("Match introuvable","error"),Je(e),m("mini-league");return}if(p.home_id!==g&&p.away_id!==g){b("Tu ne fais pas partie de ce match","error"),Je(e),m("mini-league");return}const L=p.home_id===g,A=L?p.away:p.home,j=L?p.away_id:p.home_id,N=(B,M)=>{var H;e.innerHTML=`
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
            <div style="font-size:12px;font-weight:700">${(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(H=document.getElementById("lobby-cancel"))==null||H.addEventListener("click",()=>{w=!0,clearInterval(r),Je(e),m("mini-league")})},q=async(B,M)=>{w=!0,clearInterval(r),await new Promise(H=>setTimeout(H,600)),e.isConnected&&sr(e,t,B,M,s,c)};if(N(),L){let B=p.match_id;if(!B){const{data:H,error:oe}=await E.from("matches").insert({home_id:g,away_id:j,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(oe||!H){b("Erreur création match","error"),Je(e),m("mini-league");return}B=H.id,await E.from("mini_league_matches").update({match_id:B,status:"playing"}).eq("id",u)}const M=B;r=setInterval(async()=>{if(w){clearInterval(r);return}const{data:H}=await E.from("matches").select("away_deck_id").eq("id",M).single();H!=null&&H.away_deck_id&&(clearInterval(r),q(M,!0))},1500)}else{let B=p.match_id;r=setInterval(async()=>{if(w){clearInterval(r);return}const{data:M}=await E.from("mini_league_matches").select("match_id").eq("id",u).single();M!=null&&M.match_id&&(clearInterval(r),B=M.match_id,await E.from("matches").update({away_deck_id:i}).eq("id",B),q(B,!1))},1500)}}async function sr(e,t,i,a,l=[],d=[]){var T;const{state:s,navigate:c,toast:u}=t,o=((T=s.params)==null?void 0:T.leagueId)||null,n=a?"p1":"p2",m=a?"p2":"p1",b=(l||[]).map(f=>f.id),g=(l||[]).map(f=>({id:f.id,gc_type:f.gc_type,_gcDef:f._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:w}=await E.from("matches").select("*").eq("id",i).single();if(!w){u("Match introuvable","error"),c("mini-league");return}async function r(){const[{data:f},{data:x},{data:y},{data:h}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:w.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:w.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",w.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",w.away_id).single()]),v=I=>{const F=Number(I.evolution_bonus)||0;return{cardId:I.card_id,position:I.position,id:I.id,firstname:I.firstname,name:I.surname_encoded,country_code:I.country_code,club_id:I.club_id,job:I.job,job2:I.job2,note_g:(Number(I.note_g)||0)+(I.job==="GK"||I.job2==="GK"&&Number(I.note_g)>0?F:0),note_d:(Number(I.note_d)||0)+(I.job==="DEF"||I.job2==="DEF"&&Number(I.note_d)>0?F:0),note_m:(Number(I.note_m)||0)+(I.job==="MIL"||I.job2==="MIL"&&Number(I.note_m)>0?F:0),note_a:(Number(I.note_a)||0)+(I.job==="ATT"||I.job2==="ATT"&&Number(I.note_a)>0?F:0),evolution_bonus:F,rarity:I.rarity,skin:I.skin,hair:I.hair,hair_length:I.hair_length,clubName:I.club_encoded_name||null,clubLogo:I.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},$=((f==null?void 0:f.starters)||[]).map(I=>v(I)),z=((x==null?void 0:x.starters)||[]).map(I=>v(I)),k=(f==null?void 0:f.formation)||"4-4-2",S=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:(()=>{const I=yt($,k);return stadiumDef?jt(I,stadiumDef):I})(),p2Team:yt(z,S),p1Subs:(()=>{const I=((f==null?void 0:f.subs)||[]).map(F=>v(F));return stadiumDef&&Nt(I,stadiumDef),I})(),p2Subs:((x==null?void 0:x.subs)||[]).map(I=>v(I)),p1Formation:k,p2Formation:S,p1Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:a?b:[],gc_p2:a?[]:b,gcCardsFull_p1:a?g:[],gcCardsFull_p2:a?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let p=w.game_state&&Object.keys(w.game_state).length?w.game_state:null;if(!p)if(a){p=await r();const{data:f}=await E.from("matches").select("game_state").eq("id",i).single();!(f!=null&&f.game_state)||!Object.keys(f.game_state).length?await E.from("matches").update({game_state:p,turn_user_id:w.home_id}).eq("id",i):p=f.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let f=0;f<60&&!p;f++){await new Promise(y=>setTimeout(y,400));const{data:x}=await E.from("matches").select("game_state").eq("id",i).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(p=x.game_state)}if(!p){u("Erreur de synchronisation","error"),c("mini-league");return}p.gc_p2=b,p.gcCardsFull_p2=g,await E.from("matches").update({game_state:p}).eq("id",i)}let L=!1,A=!1,j=!1,N=null,q=!1;const B=new Set,M=new Set;function H(f){var I,F;try{E.removeChannel(oe)}catch{}const x=p[n+"Score"]||0,y=p[m+"Score"]||0;if(!j){j=!0;const G=f.winner_id||(x>y?s.profile.id:y>x?"opp":null),O=G===s.profile.id?"win":G?"loss":null;O&&oi(()=>Promise.resolve().then(()=>oo),void 0).then(K=>K.applyOwnEvolution(s.profile.id,O)).catch(()=>{})}if(!A){const G=p.p1Score||0,O=p.p2Score||0,K=(p.usedGc_p1||[]).length,Z=(p.usedGc_p2||[]).length,W=f.winner_id||(G>O?w.home_id:O>G?w.away_id:null);(W?s.profile.id===W:s.profile.id<(a?w.away_id:w.home_id))&&(A=!0,Xi({player1Id:w.home_id,player2Id:w.away_id,score1:G,score2:O,gc1:K,gc2:Z}).catch(ae=>console.warn("[FriendMatch] updateStats:",ae)))}let h,v;f.winner_id?(h=f.winner_id===s.profile.id,v=!1):f.forfeit?(h=x>y,v=!1):(v=x===y,h=x>y),(I=document.getElementById("pvp-end-overlay"))==null||I.remove();const $=document.createElement("div");$.id="pvp-end-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const z=v?"🤝":h?"🏆":"😞",k=v?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",S=v?"#fff":h?"#FFD700":"#ff6b6b";$.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${S}">${k}</div>
      <div style="font-size:18px">${p[n+"Name"]} ${x} – ${y} ${p[m+"Name"]}</div>
      ${f.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild($),(F=$.querySelector("#pvp-end-home"))==null||F.addEventListener("click",()=>{$.remove(),Je(e),o?c("mini-league",{openLeagueId:o}):c("mini-league")})}const oe=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},f=>{const x=f.new;try{if(x.status==="finished"||x.forfeit){if(L||(L=!0,N&&(clearInterval(N),N=null),x.game_state&&(p=x.game_state),p.phase==="finished"&&!x.forfeit&&document.getElementById("pvp-home")))return;H(x);return}if(x.game_state){const y=p;p=x.game_state;const h=p._lastGC;if(h&&h.seq&&!M.has(h.seq)&&(M.add(h.seq),h.by!==n)){Fe(h.type,h.by,()=>me());return}const v=y[n+"Score"]||0,$=y[m+"Score"]||0,z=p[n+"Score"]||0,k=p[m+"Score"]||0,S=z>v,I=k>$;if((S||I)&&!B.has(p.round)){B.add(p.round);const F=[...p.log||[]].reverse().find(O=>O.isGoal),G=((F==null?void 0:F.homePlayers)||[]).map(O=>({name:O.name,note:O.note,portrait:O.portrait,job:O.job}));Ce(G,z,k,S,()=>me());return}me()}}catch(y){console.error("[PvP] crash:",y)}}).subscribe();async function ne(f){Object.assign(p,f),p.lastActionAt=new Date().toISOString();const{error:x}=await E.from("matches").update({game_state:p}).eq("id",i);x&&u("Erreur de synchronisation","error");try{me()}catch(y){console.error("[PvP] renderPvpScreen crash:",y)}}async function ce(){if(L)return;L=!0,N&&(clearInterval(N),N=null);const f=a?w.away_id:w.home_id,x=a?"p2":"p1",y=a?"p1":"p2",h={...p,[x+"Score"]:3,[y+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:f,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",i)}catch{}try{E.removeChannel(oe)}catch{}setTimeout(()=>{Je(e),c("mini-league")},800)}const de={BOOST_STAT:({value:f=1,count:x=1,roles:y=[]},h,v)=>{const $=h[n+"Team"],z=Object.entries($).filter(([k])=>!y.length||y.includes(k)).flatMap(([k,S])=>S.filter(I=>!I.used).map(I=>({...I,_line:k})));if(!z.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(h);return}J(z,x,`Choisir ${x} joueur(s) à booster (+${f})`,k=>{k.forEach(S=>{const I=($[S._line]||[]).find(F=>F.cardId===S.cardId);I&&(I.boost=(I.boost||0)+f,h.log.push({text:`⚡ +${f} sur ${I.name}`,type:"info"}))}),h[n+"Team"]=$,v(h)})},DEBUFF_STAT:({value:f=1,count:x=1,roles:y=[],target:h="ai"},v,$)=>{const z=h==="home"?n:m,k=v[z+"Team"],S=h==="home"?"allié":"adverse",I=Object.entries(k).filter(([F])=>!y.length||y.includes(F)).flatMap(([F,G])=>G.map(O=>({...O,_line:F})));if(!I.length){v.log.push({text:`🎯 Aucun joueur ${S}`,type:"info"}),$(v);return}J(I,x,`Choisir ${x} joueur(s) ${S}(s) (-${f})`,F=>{F.forEach(G=>{const O=(k[G._line]||[]).find(K=>K.cardId===G.cardId);O&&(O.boost=(O.boost||0)-f,v.log.push({text:`🎯 -${f} sur ${O.name}`,type:"info"}))}),v[z+"Team"]=k,$(v)})},GRAY_PLAYER:({count:f=1,roles:x=[],target:y="ai"},h,v)=>{const $=y==="home"?n:m,z=h[$+"Team"],k=y==="home"?"allié":"adverse",S=Object.entries(z).filter(([I])=>!x.length||x.includes(I)).flatMap(([I,F])=>F.filter(G=>!G.used).map(G=>({...G,_line:I})));if(!S.length){h.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),v(h);return}J(S,f,`Choisir ${f} joueur(s) ${k}(s) à exclure`,I=>{const F="usedCardIds_"+$,G=new Set(h[F]||[]);I.forEach(O=>{const K=(z[O._line]||[]).find(Z=>Z.cardId===O.cardId);K&&(K.used=!0,G.add(O.cardId),h.log.push({text:`❌ ${K.name} exclu !`,type:"info"}))}),h[F]=[...G],h[$+"Team"]=z,v(h)})},REVIVE_PLAYER:({count:f=1,roles:x=[]},y,h)=>{const v=y[n+"Team"],$=Object.entries(v).filter(([z])=>!x.length||x.includes(z)).flatMap(([z,k])=>k.filter(S=>S.used).map(S=>({...S,_line:z})));if(!$.length){y.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(y);return}J($,f,`Choisir ${f} joueur(s) à ressusciter`,z=>{z.forEach(k=>{const S=(v[k._line]||[]).find(I=>I.cardId===k.cardId);S&&(S.used=!1,y.log.push({text:`💫 ${S.name} ressuscité !`,type:"info"}))}),y[n+"Team"]=v,h(y)})},REMOVE_GOAL:({},f,x)=>{const y=m+"Score";f[y]>0?(f[y]--,f.log.push({text:"🚫 Dernier but annulé !",type:"info"})):f.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(f)},ADD_GOAL_DRAW:({},f,x)=>{f[n+"Score"]===f[m+"Score"]?(f[n+"Score"]++,f.log.push({text:"🎯 But bonus !",type:"info"})):f.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(f)},ADD_SUB:({value:f=1},x,y)=>{x.maxSubs=(x.maxSubs||3)+f,x.log.push({text:`🔄 +${f} remplacement(s)`,type:"info"}),y(x)},CUSTOM:({},f,x)=>x(f)};function J(f,x,y,h){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let $=[];function z(){var S,I;const k=f.map(F=>{const G={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[F._line]||"#555",O=Ie(F,F._line)+(F.boost||0),Z=$.find(ie=>ie.cardId===F.cardId)?"#FFD700":"rgba(255,255,255,0.25)",W=F.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${F.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Z};background:${G};overflow:hidden;cursor:pointer;${W}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${F.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${O}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${F._line}</div>
        </div>`}).join("");v.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${y}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$.length}/${x}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${k}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${$.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${$.length}/${x})
          </button>
        </div>`,(S=v.querySelector("#pp-close"))==null||S.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(F=>{F.addEventListener("click",()=>{const G=F.dataset.cid,O=f.find(Z=>Z.cardId===G),K=$.findIndex(Z=>Z.cardId===G);O&&(K>-1?$.splice(K,1):$.length<x&&$.push(O),z())})}),(I=v.querySelector("#pp-confirm"))==null||I.addEventListener("click",()=>{v.remove(),h($)})}z(),document.body.appendChild(v)}async function R(f,x){const h=(p["gcCardsFull_"+n]||[]).find(k=>k.id===f),v=(h==null?void 0:h._gcDef)||(p.gcDefs||[]).find(k=>{var S;return k.name===x||((S=k.name)==null?void 0:S.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),$=[...p["usedGc_"+n]||[],f],z={type:x,by:n,seq:(p._gcAnimSeq||0)+1};M.add(z.seq),Fe(x,n,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const S=de[v.effect_type];if(S){const I={...p};S(v.effect_params||{},I,async F=>{F["usedGc_"+n]=$,F._lastGC=z,F._gcAnimSeq=z.seq,await ne(F)});return}}const k={...p};switch(x){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const S=m+"Score";k[S]>0&&(k[S]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+n]=$,k._lastGC=z,k._gcAnimSeq=z.seq,await ne(k)})}function P(f,x){const y="usedCardIds_"+f,h=new Set(p[y]||[]);x.forEach(v=>h.add(v)),p[y]=[...h]}function re(){for(const f of["p1","p2"]){const x=new Set(p["usedCardIds_"+f]||[]),y=p[f+"Team"];if(y)for(const h of["GK","DEF","MIL","ATT"])(y[h]||[]).forEach(v=>{v.used=x.has(v.cardId)})}}function me(){var nt,gt,le,Ee,te,ue;if(p.phase==="reveal")return we();if(p.phase==="midfield")return be();if(p.phase==="finished")return _();const f=p[n+"Team"],x=p[m+"Team"];re();const y=p[n+"Score"],h=p[m+"Score"],v=p[n+"Name"],$=p[m+"Name"],z=p.phase===n+"-attack",k=p.phase===n+"-defense",S=Array.isArray(p["selected_"+n])?p["selected_"+n]:[],I=S.map(Q=>Q.cardId),F=window.innerWidth>=700,G=p[n+"Subs"]||[],O=p["usedSubIds_"+n]||[],K=G.filter(Q=>!O.includes(Q.cardId)),Z=p["gcCardsFull_"+n]||[],W=p["usedGc_"+n]||[],ie=Z.filter(Q=>!W.includes(Q.id)),ae=p.boostOwner===n&&!p.boostUsed,fe=!["GK","DEF","MIL","ATT"].some(Q=>(x[Q]||[]).some(pe=>!pe.used)),ye=[...f.MIL||[],...f.ATT||[]].filter(Q=>!Q.used),_e=z&&fe&&ye.length===0?[...f.GK||[],...f.DEF||[]].filter(Q=>!Q.used).map(Q=>Q.cardId):[];function $e(Q,pe,je){var Si,zi;const Te=Q._gcDef,tt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Te==null?void 0:Te.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",it={purple:"#b06ce0",light_blue:"#00d4ef"}[Te==null?void 0:Te.color]||"#b06ce0",rt=(Te==null?void 0:Te.name)||Q.gc_type,st=(Te==null?void 0:Te.effect)||((Si=Re[Q.gc_type])==null?void 0:Si.desc)||"",ct=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,kt=((zi=Re[Q.gc_type])==null?void 0:zi.icon)||"⚡",pt=Math.round(je*.22),ht=Math.round(je*.22),Et=je-pt-ht,Kt=rt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}"
        style="box-sizing:border-box;width:${pe}px;height:${je}px;border-radius:10px;border:2px solid ${it};background:${tt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${pt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${pe-6}px">${rt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Et}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ct?`<img src="${ct}" style="max-width:${pe-10}px;max-height:${Et-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Et*.55)}px">${kt}</span>`}
        </div>
        <div style="height:${ht}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${st.slice(0,38)}</span>
        </div>
      </div>`}function Me(Q,pe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Q}px;height:${pe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(pe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(pe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(pe*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const Le=(Q,pe)=>pe?Me(130,175):$e(Q,130,175),Oe=(Q,pe)=>pe?Me(68,95):$e(Q,68,95),qe=F?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",He=z?he(n)?`<button id="pvp-action" style="${qe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${S.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${qe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${qe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${S.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${$}</div>`,Be=z&&!he(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':z||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${S.length}/3 sélectionné(s)</div>`:"",Ve=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${F?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${K.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':K.map(Q=>`<div class="pvp-sub-btn" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${We(Q,F?76:44,F?100:58)}</div>`).join("")}
    </div>`,Ne=z?"attack":k?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(f,p[n+"Formation"],Ne,I,300,300,_e)}
      </div>
    </div>`;function Ke(Q){if(Q.type==="duel"&&(Q.homeTotal!=null||Q.aiTotal!=null)){const pe=(Q.homeTotal||0)>=(Q.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(Q.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Q.homePlayers||[]).map(je=>dt(je)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${pe?20:14}px;font-weight:900;color:${pe?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${Q.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${pe?14:20}px;font-weight:900;color:${pe?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${Q.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Q.aiPlayers||[]).map(je=>dt(je)).join("")}
            </div>
          </div>
          ${Q.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${Q.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${Q.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${Q.type==="goal"?700:400};padding:3px 2px">${Q.text||""}</div>`}const Xe=(()=>{var pe,je;if(k&&((pe=p.pendingAttack)!=null&&pe.players)){const Te=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${$} ATTAQUE — Défendez !</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#ff6b6b",Te.total)}
        </div>`}if(z&&((je=p.pendingAttack)!=null&&je.players)){const Te=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#00ff88",Te.total)}
        </div>`}const Q=(p.log||[]).slice(-1)[0];return Q?'<div style="padding:2px 4px">'+Ke(Q)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ze=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${y} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Xe}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",F?e.innerHTML=`
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
            ${ie.map(Q=>Le(Q,!1)).join("")}
            ${ae?Le(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ze}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(f,p[n+"Formation"],Ne,I,300,300,_e)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ie.map(Q=>Oe(Q,!1)).join("")}
            ${ae?Oe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${z&&K.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${z&&K.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${z&&K.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${z&&K.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${K.length}</div>
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
          <div>${He}${Be}</div>
        </div>
      </div>`;function Qe(){const Q=e.querySelector(".match-screen");if(!Q)return;const pe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Q.style.height=pe+"px",Q.style.minHeight=pe+"px",Q.style.maxHeight=pe+"px",Q.style.overflow="hidden";const je=e.querySelector("#mobile-action-bar"),Te=e.querySelector("#mobile-play-area");je&&Te&&(Te.style.paddingBottom=je.offsetHeight+"px")}if(Qe(),setTimeout(Qe,120),setTimeout(Qe,400),q||(q=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Qe),window.visualViewport.addEventListener("scroll",Qe)),window.addEventListener("resize",Qe)),function(){const pe=e.querySelector(".terrain-wrapper svg");pe&&(pe.removeAttribute("width"),pe.removeAttribute("height"),pe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",pe.setAttribute("viewBox","-26 -26 352 352"),pe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>{if(!z&&!k)return;const pe=Q.dataset.cardId,je=Q.dataset.role,Te=(f[je]||[]).find(st=>st.cardId===pe);if(!Te||Te.used)return;const tt=_e.includes(pe);if(z&&!["MIL","ATT"].includes(je)&&!tt)return;Array.isArray(p["selected_"+n])||(p["selected_"+n]=[]);const it=p["selected_"+n],rt=it.findIndex(st=>st.cardId===pe);rt>-1?it.splice(rt,1):it.length<3&&it.push({...Te,_role:je}),me()})}),e.querySelectorAll(".match-used-hit").forEach(Q=>{Q.addEventListener("click",()=>V(Q.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(Q=>{Q.addEventListener("click",()=>V())}),(nt=e.querySelector("#pvp-sub-open"))==null||nt.addEventListener("click",()=>V()),e.querySelectorAll(".pvp-gc-mini").forEach(Q=>{Q.addEventListener("click",()=>De(Q.dataset.gcId,Q.dataset.gcType))}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>ke()),(le=e.querySelector("#pvp-action"))==null||le.addEventListener("click",Q=>{z?Q.currentTarget.dataset.pass==="1"||!he(n)?X():Y():k&&se()}),(Ee=e.querySelector("#pvp-quit"))==null||Ee.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&ce()}),(te=e.querySelector("#pvp-view-opp"))==null||te.addEventListener("click",()=>ge()),(ue=e.querySelector("#pvp-toggle-history"))==null||ue.addEventListener("click",()=>U()),N&&(clearInterval(N),N=null),(z||k)&&!L){let Q=30,pe=!1;const je=()=>document.getElementById("pvp-timer"),Te=()=>{je()&&(je().textContent=Q+"s",je().style.color=pe?"#ff4444":"#fff")};Te(),N=setInterval(()=>{Q--,Q<0?pe?(clearInterval(N),N=null,z&&!he(n)?X():ce()):(pe=!0,Q=15,Te()):Te()},1e3)}}function we(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[m+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(p[m+"Team"],p[m+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await ne({phase:"midfield"})},5e3)}let xe=!1;function be(){if(xe)return;const f=p[n+"Team"].MIL||[],x=p[m+"Team"].MIL||[];function y(ie){return ie.reduce((ae,fe)=>ae+Ie(fe,"MIL"),0)}function h(ie){let ae=0;for(let fe=0;fe<ie.length-1;fe++){const ye=at(ie[fe],ie[fe+1]);ye==="#00ff88"?ae+=2:ye==="#FFD700"&&(ae+=1)}return ae}const v=y(f)+h(f),$=y(x)+h(x),z=v>=$;function k(ie,ae,fe){return`<div id="duel-row-${fe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ae}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${ie.map((ye,_e)=>{const $e=_e<ie.length-1?at(ye,ie[_e+1]):null,Me=!$e||$e==="#ff3333"||$e==="#cc2222",Le=$e==="#00ff88"?"+2":$e==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${fe}" data-idx="${_e}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${We({...ye,note:Ie(ye,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${_e<ie.length-1?`<div class="duel-link duel-link-${fe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Me?"rgba(255,255,255,0.12)":$e};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Me?"none":`0 0 8px ${$e}`}">
              ${Le?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${$e}">${Le}</span>`:""}
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
      ${k(f,p[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k(x,p[m+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const S=(ie,ae)=>e.querySelectorAll(ie).forEach((fe,ye)=>{setTimeout(()=>{fe.style.opacity="1",fe.style.transform="translateY(0) scale(1)"},ae+ye*90)});S(".duel-card-me",150),S(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ie,ae)=>setTimeout(()=>{ie.style.opacity="1"},ae*70)),900),setTimeout(()=>{const ie=e.querySelector("#pvp-vs");ie&&(ie.style.opacity="1",ie.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ae=>ae.style.opacity="1")},1250);function I(ie,ae,fe){const ye=document.getElementById(ie);if(!ye)return;const _e=performance.now(),$e=Me=>{const Le=Math.min(1,(Me-_e)/fe);ye.textContent=Math.round(ae*(1-Math.pow(1-Le,3))),Le<1?requestAnimationFrame($e):ye.textContent=ae};requestAnimationFrame($e)}setTimeout(()=>{I("pvp-score-me",v,800),I("pvp-score-opp",$,800)},1500);const F=p.p1Team.MIL||[],G=p.p2Team.MIL||[],O=y(F)+h(F),K=y(G)+h(G),Z=O>=K?"p1":"p2";let W=p.boostValue;W==null&&(W=ri(),p.boostValue=W,p.boostOwner=Z,p.boostUsed=!1),xe=!0,setTimeout(()=>{const ie=e.querySelector("#duel-row-"+(z?"me":"opp")),ae=e.querySelector("#duel-row-"+(z?"opp":"me")),fe=document.getElementById("pvp-score-me"),ye=document.getElementById("pvp-score-opp"),_e=z?fe:ye,$e=z?ye:fe;_e&&(_e.style.fontSize="80px",_e.style.color=z?"#FFD700":"#ff6b6b",_e.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),$e&&($e.style.opacity="0.25"),setTimeout(()=>{ie&&(ie.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ie.style.zIndex="5"),setTimeout(()=>{const Me=document.getElementById("duel-shock");Me&&(Me.style.animation="shockwave .5s ease-out forwards"),ae&&(ae.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var qe;const Me=document.getElementById("pvp-duel-finale");if(!Me)return;const Le=p.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+W+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Oe=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Me.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+p[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[m+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Le+Oe,Me.style.transition="opacity .45s ease",Me.style.opacity="1",Me.style.pointerEvents="auto",(qe=document.getElementById("pvp-start-match"))==null||qe.addEventListener("click",async()=>{const He=Z;await ne({phase:He+"-attack",attacker:He,round:1,boostValue:W,boostUsed:!1,boostOwner:He})})},600)},700)},2800)}function Ce(f,x,y,h,v){const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const z=Array.from({length:10},(F,G)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${G%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][G%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};$.innerHTML=`
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
      ${f!=null&&f.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${f.map(F=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[F.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${F.portrait?`<img src="${F.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(F.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild($);let S=!1;const I=()=>{S||(S=!0,$.remove(),setTimeout(()=>v(),50))};$.addEventListener("click",I),setTimeout(I,3500)}function Fe(f,x,y){var W,ie;const h=(p.gcDefs||[]).find(ae=>{var fe;return ae.name===f||((fe=ae.name)==null?void 0:fe.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",z=(h==null?void 0:h.name)||f,k=(h==null?void 0:h.effect)||((W=Re[f])==null?void 0:W.desc)||"",S=h!=null&&h.image_url?`/icons/${h.image_url}`:null,I=((ie=Re[f])==null?void 0:ie.icon)||"⚡",G=x===n?"Vous":p[x+"Name"]||"Adversaire",O=document.createElement("div");O.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",O.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${$}66}50%{box-shadow:0 0 60px ${$}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${$};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${G} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${$};background:${v};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${z.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${z}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${I}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(O);let K=!1;const Z=()=>{K||(K=!0,O.remove(),setTimeout(()=>y&&y(),50))};O.addEventListener("click",Z),setTimeout(Z,3e3)}function De(f,x){var O,K,Z,W;const h=(p["gcCardsFull_"+n]||[]).find(ie=>ie.id===f),v=h==null?void 0:h._gcDef,$={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",z={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",k=(v==null?void 0:v.name)||x,S=(v==null?void 0:v.effect)||((O=Re[x])==null?void 0:O.desc)||"Carte spéciale.",I=v!=null&&v.image_url?`/icons/${v.image_url}`:null,F=((K=Re[x])==null?void 0:K.icon)||"⚡",G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",G.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${z};background:${$};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${z}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${F}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${S}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(G),(Z=G.querySelector("#pvp-gc-back"))==null||Z.addEventListener("click",()=>G.remove()),(W=G.querySelector("#pvp-gc-use"))==null||W.addEventListener("click",()=>{G.remove(),R(f,x)})}function ke(){var h;const f=p[n+"Team"],x=Object.entries(f).flatMap(([v,$])=>($||[]).filter(z=>!z.used).map(z=>({...z,_line:v})));if(!x.length)return;const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",y.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(v=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",z=Ie(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${$};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(y),(h=y.querySelector("#bp-close"))==null||h.addEventListener("click",()=>y.remove()),y.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const $=v.dataset.cid,z=x.find(S=>S.cardId===$);if(!z)return;const k=(f[z._line]||[]).find(S=>S.cardId===$);k&&(k.boost=(k.boost||0)+p.boostValue),y.remove(),await ne({[n+"Team"]:f,boostUsed:!0})})})}function V(f=null){var K,Z;if(!(p.phase===n+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const y=p[n+"Team"],h=p["usedSubIds_"+n]||[],v=p.maxSubs||3;if(h.length>=v){u(`Maximum ${v} remplacements atteint`,"warning");return}const $=Object.entries(y).flatMap(([W,ie])=>(ie||[]).filter(ae=>ae.used).map(ae=>({...ae,_line:W}))),z=(p[n+"Subs"]||[]).filter(W=>!h.includes(W.cardId));if(!$.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!z.length){u("Aucun remplaçant disponible","warning");return}let k=Math.max(0,$.findIndex(W=>W.cardId===f));const S=((K=$[k])==null?void 0:K._line)||((Z=$[k])==null?void 0:Z.job);let I=Math.max(0,z.findIndex(W=>W.job===S)),F=!1;const G=document.createElement("div");G.id="pvp-sub-overlay",G.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function O(){var $e,Me,Le,Oe,qe,He;const W=$[k],ie=z[I],ae=Math.min(130,Math.round((window.innerWidth-90)/2)),fe=Math.round(ae*1.35),ye=Be=>`background:rgba(255,255,255,0.12);border:none;color:${Be?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Be?"default":"pointer"};flex-shrink:0`;G.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ye(I===0)}" ${I===0?"disabled":""}>▲</button>
          <div>${ie?We({...ie,used:!1,boost:0},ae,fe):"<div>—</div>"}</div>
          <button id="pin-down" style="${ye(I>=z.length-1)}" ${I>=z.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${I+1}/${z.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ye(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${W?We({...W,used:!1,boost:0},ae,fe):"<div>—</div>"}</div>
          <button id="pout-down" style="${ye(k>=$.length-1)}" ${k>=$.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${$.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,($e=G.querySelector("#psub-close"))==null||$e.addEventListener("click",()=>G.remove()),(Me=G.querySelector("#pout-up"))==null||Me.addEventListener("click",()=>{k>0&&(k--,O())}),(Le=G.querySelector("#pout-down"))==null||Le.addEventListener("click",()=>{k<$.length-1&&(k++,O())}),(Oe=G.querySelector("#pin-up"))==null||Oe.addEventListener("click",()=>{I>0&&(I--,O())}),(qe=G.querySelector("#pin-down"))==null||qe.addEventListener("click",()=>{I<z.length-1&&(I++,O())});const _e=(Be,Ve,Ne,Ue)=>{const Ke=G.querySelector("#"+Be);if(!Ke)return;let Xe=0;Ke.addEventListener("touchstart",Ze=>{Xe=Ze.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",Ze=>{const Qe=Ze.changedTouches[0].clientY-Xe;if(Math.abs(Qe)<30)return;const nt=Ve();Qe<0&&nt<Ue-1?(Ne(nt+1),O()):Qe>0&&nt>0&&(Ne(nt-1),O())},{passive:!0})};_e("pin-panel",()=>I,Be=>I=Be,z.length),_e("pout-panel",()=>k,Be=>k=Be,$.length),(He=G.querySelector("#psub-confirm"))==null||He.addEventListener("click",async Be=>{if(Be.preventDefault(),Be.stopPropagation(),F)return;F=!0;const Ve=$[k],Ne=z[I];if(!Ve||!Ne)return;const Ue=Ve._line,Ke=(y[Ue]||[]).findIndex(Qe=>Qe.cardId===Ve.cardId);if(Ke===-1){u("Erreur : joueur introuvable","error"),G.remove();return}const Xe={...Ne,_line:Ue,position:Ve.position,used:!1,boost:0};y[Ue].splice(Ke,1,Xe);const Ze=[...h,Ne.cardId];G.remove(),ee(Ve,Ne,async()=>{await ne({[n+"Team"]:y,[m+"Team"]:p[m+"Team"],["usedSubIds_"+n]:Ze})})})}document.body.appendChild(G),O()}function ee(f,x,y){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const $=(S,I,F)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${I};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${F}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[S.job]||"#555"};border:3px solid ${I};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(S)?`<img src="${Pe(S)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(S.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${$(x,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${$(f,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let z=!1;const k=()=>{z||(z=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",k),setTimeout(k,2200)}function ge(){var x;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",f.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[m+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(p[m+"Team"],p[m+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(f),(x=f.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>f.remove())}function U(){var h;const f=p.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const y=v=>{var z,k,S;if(v.type==="duel"){const I=v.isGoal,F=v.homeScored&&n==="p1"||!v.homeScored&&I&&n==="p2",G=v.homeScored?"#FFD700":I?"#ff6b6b":"rgba(255,255,255,0.3)",O=I?F?"⚽ BUT !":"⚽ BUT adversaire !":(z=v.homePlayers)!=null&&z.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${I?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${G};margin-bottom:4px">
          <div style="font-size:9px;color:${G};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${O}</div>
          ${(k=v.homePlayers)!=null&&k.length?`<div style="margin-bottom:3px">${ot(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
          ${(S=v.aiPlayers)!=null&&S.length?`<div style="opacity:0.7">${ot(v.aiPlayers,"#ff6b6b",v.aiTotal)}</div>`:""}
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
      </div>`,document.body.appendChild(x),(h=x.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>x.remove())}async function X(){if(p.phase!==n+"-attack")return;const f=n==="p1"?"p2":"p1",x=(p.round||0)+1,y=[...p.log||[]];y.push({type:"info",text:`⏭️ ${p[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Ae(p),v=he(f),$=h||!v?"finished":f+"-attack";await ne({["selected_"+n]:[],modifiers:{...p.modifiers,[n]:{}},pendingAttack:null,phase:$,attacker:f,round:x,log:y}),$==="finished"&&await D(p)}async function Y(){const f=p[n+"Team"],x=!["GK","DEF","MIL","ATT"].some($=>(p[m+"Team"][$]||[]).some(z=>!z.used)),y=(p["selected_"+n]||[]).map($=>{const z=(f[$._role]||[]).find(O=>O.cardId===$.cardId)||$,k=x&&["GK","DEF"].includes($._role),S=f[$._role]||[],I=S.findIndex(O=>O.cardId===$.cardId),F=lt(S.length),G=I>=0?F[I]:z._col??1;return{...z,_line:$._role,_col:G,...k?{note_a:Math.max(1,Number(z.note_a)||0)}:{}}});if(!y.length)return;const h=Ot(y,p.modifiers[n]||{});P(n,y.map($=>$.cardId)),y.forEach($=>{const z=(f[$._role]||[]).find(k=>k.cardId===$.cardId);z&&(z.used=!0)}),p["selected_"+n]=[],me();const v=[...p.log||[]];if(x){const $=(p[n+"Score"]||0)+1,z=y.map(G=>({name:G.name,note:Ie(G,G._line||"ATT"),portrait:Pe(G),job:G.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:z,homeTotal:h.total,aiTotal:0});const k=(p.round||0)+1,S=n==="p1"?"p2":"p1",I={...p,[n+"Team"]:f,[n+"Score"]:$},F=Ae(I);B.add(k),Ce(z,$,p[m+"Score"]||0,!0,async()=>{await ne({[n+"Team"]:f,[n+"Score"]:$,["selected_"+n]:[],modifiers:{...p.modifiers,[n]:{}},pendingAttack:null,phase:F?"finished":S+"-attack",attacker:S,round:k,log:v}),F&&await D({...p,[n+"Score"]:$})});return}v.push({type:"pending",text:`⚔️ ${p[n+"Name"]} attaque (${h.total})`}),await ne({[n+"Team"]:f,[m+"Team"]:p[m+"Team"],pendingAttack:{...h,players:y,side:n},["selected_"+n]:[],modifiers:{...p.modifiers,[n]:{}},phase:m+"-defense",log:v})}async function se(){const f=p[n+"Team"],x=(p["selected_"+n]||[]).map(W=>{const ie=(f[W._role]||[]).find($e=>$e.cardId===W.cardId)||W,ae=f[W._role]||[],fe=ae.findIndex($e=>$e.cardId===W.cardId),ye=lt(ae.length),_e=fe>=0?ye[fe]:ie._col??1;return{...ie,_line:W._role,_col:_e}}),y=Ht(x,p.modifiers[n]||{});P(n,x.map(W=>W.cardId)),x.forEach(W=>{const ie=(f[W._role]||[]).find(ae=>ae.cardId===W.cardId);ie&&(ie.used=!0)}),p["selected_"+n]=[],me();const h=Ut(p.pendingAttack.total,y.total,p.modifiers[n]||{}),v=p.pendingAttack.side,$=h==="attack"||(h==null?void 0:h.goal),z=v==="p1"?"p2":"p1",k=(p.round||0)+1,S=(p.pendingAttack.players||[]).map(W=>({name:W.name,note:Ie(W,W._line||"ATT"),portrait:Pe(W),job:W.job})),I=[...p.log||[]];I.push({type:"duel",isGoal:$,homeScored:$&&v===n,text:$?`⚽ BUT de ${p[v+"Name"]} ! (${p.pendingAttack.total} vs ${y.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${y.total})`,homePlayers:S,aiPlayers:x.map(W=>({name:W.name,note:Ie(W,W._line||"DEF"),portrait:Pe(W),job:W.job})),homeTotal:p.pendingAttack.total,aiTotal:y.total});const F=$?(p[v+"Score"]||0)+1:p[v+"Score"]||0,G={...p,[n+"Team"]:f,[v+"Score"]:F},O=Ae(G),K=O?"finished":z+"-attack",Z=async()=>{await ne({[n+"Team"]:f,[m+"Team"]:p[m+"Team"],[v+"Score"]:F,["selected_"+n]:[],modifiers:{...p.modifiers,[n]:{}},pendingAttack:null,phase:K,attacker:z,round:k,log:I}),(K==="finished"||O)&&await D({...p,[v+"Score"]:F})};if($){const W=v===n,ie=W?F:p[n+"Score"]||0,ae=W?p[m+"Score"]||0:F;B.add(k),Ce(S,ie,ae,W,Z)}else await Z()}function ve(f){return["MIL","ATT"].some(x=>(f[x]||[]).some(y=>!y.used))}function Se(f){return["GK","DEF","MIL","ATT"].some(x=>(f[x]||[]).some(y=>!y.used))}function ze(f){return Se(f)&&!ve(f)}function he(f){const x=p[f+"Team"],y=p[(f==="p1"?"p2":"p1")+"Team"];return!!(ve(x)||!Se(y)&&ze(x))}function Ae(f){const x=["MIL","ATT"].some(I=>(f.p1Team[I]||[]).some(F=>!F.used)),y=["MIL","ATT"].some(I=>(f.p2Team[I]||[]).some(F=>!F.used)),h=Se(f.p1Team),v=Se(f.p2Team);return!x&&!(!v&&h)&&(!y&&!(!h&&v))}function C(f){const x=f.p1Score||0,y=f.p2Score||0;return x===y?null:x>y?w.home_id:w.away_id}async function D(f){try{const x=C(f),y=x?w.home_id===x?w.away_id:w.home_id:null,h=f.p1Score||0,v=f.p2Score||0;await E.from("matches").update({status:"finished",winner_id:x,home_score:h,away_score:v}).eq("id",i);const{data:$}=await E.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if($){await E.from("mini_league_matches").update({home_score:h,away_score:v,status:"finished"}).eq("id",$.id);const{data:z}=await E.from("mini_league_matches").select("id, status").eq("league_id",$.league_id).eq("matchday",$.matchday);if((z||[]).every(S=>S.status==="finished"||S.status==="bye")){const{data:S}=await E.from("mini_leagues").select("current_day,total_days").eq("id",$.league_id).single();if(S){const I=(S.current_day||0)+1,F=I>(S.total_days||0);await E.from("mini_leagues").update({current_day:F?S.total_days:I,status:F?"finished":"active"}).eq("id",$.league_id)}}}x&&y&&ki(x,y).catch(()=>{})}catch(x){console.error("[ML] finishMatch:",x)}}function _(){var v;if(L&&document.getElementById("pvp-end-overlay"))return;L=!0;const f=p[n+"Score"],x=p[m+"Score"],y=f>x,h=f===x;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${y?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${y?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${f} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{E.removeChannel(oe)}catch{}Je(e),c("mini-league",o?{openLeagueId:o}:{})})}me()}const dr="/",lr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function cr(e,t,i){let a=0;const l=document.createElement("div");l.id="tutorial-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const d=()=>{var n,m,b;const c=t[a],u=a===t.length-1,o=Math.round((a+1)/t.length*100);l.innerHTML=`
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
        ${c.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${dr}icons/${c.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${c.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${c.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${a>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${u?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${c.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${u?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,l.querySelectorAll("ul,ol").forEach(g=>{g.style.paddingLeft="20px",g.style.marginTop="6px",g.style.marginBottom="6px"}),l.querySelectorAll("li").forEach(g=>{g.style.marginBottom="4px"}),l.querySelectorAll("p").forEach(g=>{g.style.marginBottom="8px"}),(n=l.querySelector("#tuto-prev"))==null||n.addEventListener("click",()=>{a--,d()}),(m=l.querySelector("#tuto-next"))==null||m.addEventListener("click",()=>{u?s():(a++,d())}),(b=l.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&s()})},s=async()=>{l.remove(),e!=null&&e.id&&await E.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(l),d()}async function pr(e,t,i){if(!e||e.tutorial_done)return;let a=[];const{data:l,error:d}=await E.rpc("get_tutorial_steps");if(!d&&(l==null?void 0:l.length)>0)a=l,console.log(`[Tutorial] RPC OK → ${a.length} étapes`);else{const{data:c,error:u}=await E.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!u&&(c==null?void 0:c.length)>0?(a=c,console.log(`[Tutorial] Direct OK → ${a.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${d==null?void 0:d.message}, Direct: ${u==null?void 0:u.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const s=a.length>0?a.map(c=>({emoji:c.emoji,title:c.title,color:c.color,content:c.content,image_url:c.image_url||null})):lr;cr(e,s,()=>t("boosters"))}const ur={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}function Hi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Jt(e,t){const a=t?ur[t]||"#bbb":"#d0d0d0",l=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${a};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${l}</div>`}function Ui(e){const i=Qt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Ki(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function fr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Ai(e,t)}async function Ai(e,t){const{state:i,toast:a}=t,{data:l}=await E.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:d}=await E.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),s=(l||[]).filter(r=>r.seller_id!==i.profile.id),c=d||[];e.innerHTML=`
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
  </div>`;let u="buy";const o=()=>{var r,p,L,A,j,N,q;return{name:(((r=document.getElementById("flt-name"))==null?void 0:r.value)||"").toLowerCase().trim(),club:(((p=document.getElementById("flt-club"))==null?void 0:p.value)||"").toLowerCase().trim(),country:(((L=document.getElementById("flt-country"))==null?void 0:L.value)||"").toLowerCase().trim(),job:((A=document.getElementById("flt-job"))==null?void 0:A.value)||"",rarity:((j=document.getElementById("flt-rarity"))==null?void 0:j.value)||"",note1:parseInt((N=document.getElementById("flt-note1"))==null?void 0:N.value)||0,note2:parseInt((q=document.getElementById("flt-note2"))==null?void 0:q.value)||0}};function n(r){const p=o();return r.filter(L=>{var oe,ne,ce;const A=(oe=L.card)==null?void 0:oe.player;if(!A)return!1;const j=`${A.firstname} ${A.surname_encoded}`.toLowerCase(),N=(((ne=A.clubs)==null?void 0:ne.encoded_name)||"").toLowerCase(),q=(A.country_code||"").toLowerCase(),B=((ce=L.card)==null?void 0:ce.evolution_bonus)||0,M=Tt(A,A.job,B),H=A.job2?Tt(A,A.job2,B):0;return!(p.name&&!j.includes(p.name)||p.club&&!N.includes(p.club)||p.country&&!q.includes(p.country)||p.job&&A.job!==p.job||p.rarity&&A.rarity!==p.rarity||p.note1&&M<p.note1||p.note2&&H<p.note2)})}function m(r){var q,B,M,H;const p=(q=r.card)==null?void 0:q.player;if(!p)return"";const L=((B=r.card)==null?void 0:B.evolution_bonus)||0,A=Tt(p,p.job,L),j=p.job2?Tt(p,p.job2,L):0,N=(i.profile.credits||0)>=r.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Hi(p.rarity)}
      ${Jt(A,p.job)}
      ${Jt(j,p.job2||null)}
      ${Ui(p.country_code)}
      ${Ki((M=p.clubs)==null?void 0:M.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((H=r.seller)==null?void 0:H.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${r.id}" ${N?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${N?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function b(r){var q,B,M,H;const p=(q=r.card)==null?void 0:q.player;if(!p)return"";const L=((B=r.card)==null?void 0:B.evolution_bonus)||0,A=Tt(p,p.job,L),j=p.job2?Tt(p,p.job2,L):0,N=r.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${N?"opacity:0.7":""}">
      ${Hi(p.rarity)}
      ${Jt(A,p.job)}
      ${Jt(j,p.job2||null)}
      ${Ui(p.country_code)}
      ${Ki((M=p.clubs)==null?void 0:M.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.firstname} ${p.surname_encoded}</div>
        <div style="font-size:10px;color:${N?"#22c55e":"#999"};margin-top:1px">
          ${N?`✅ Vendu à ${((H=r.buyer)==null?void 0:H.pseudo)||"—"} · ${r.sold_at?new Date(r.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(r.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        ${N?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${r.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function g(){const r=document.getElementById("mkt-content"),p=document.getElementById("mkt-filters");if(r){if(p.style.display=u==="buy"?"flex":"none",u==="buy"){const L=n(s);r.innerHTML=L.length?L.map(m).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const L=c.filter(j=>j.status==="active").sort((j,N)=>new Date(N.listed_at)-new Date(j.listed_at)),A=c.filter(j=>j.status==="sold").sort((j,N)=>new Date(N.sold_at||N.listed_at)-new Date(j.sold_at||j.listed_at));r.innerHTML=(L.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${L.length})</div>`+L.map(b).join(""):"")+(A.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${A.length})</div>`+A.map(b).join(""):"")+(!L.length&&!A.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}r.querySelectorAll("[data-buy]").forEach(L=>L.addEventListener("click",()=>gr(L.dataset.buy,s,e,t))),r.querySelectorAll("[data-cancel]").forEach(L=>L.addEventListener("click",()=>xr(L.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{u=r.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(p=>{const L=p===r;p.style.background=L?"var(--green)":"#fff",p.style.color=L?"#fff":"var(--gray-600)",p.style.borderColor=L?"var(--green)":"var(--gray-200)"}),g()})});let w;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(r=>{var p;(p=document.getElementById(r))==null||p.addEventListener("input",()=>{clearTimeout(w),w=setTimeout(g,250)})}),g()}async function gr(e,t,i,a){const{state:l,toast:d,refreshProfile:s}=a,c=t.find(n=>n.id===e);if(!c)return;const u=c.price;if((l.profile.credits||0)<u){d("Crédits insuffisants","error");return}mr(c,async()=>{const{error:n}=await E.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:l.profile.id});if(n){d("Erreur achat : "+n.message,"error");return}await s();const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),d("✅ Carte achetée !","success"),await Ai(i,a)})}function mr(e,t){var s;const i=(s=e.card)==null?void 0:s.player,a=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",l.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${a} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(l);const d=c=>{l.remove(),c&&t()};l.querySelector("#buy-cancel").addEventListener("click",()=>d(!1)),l.querySelector("#buy-ok").addEventListener("click",()=>d(!0)),l.addEventListener("click",c=>{c.target===l&&d(!1)})}async function xr(e,t,i){const{toast:a}=i,{data:l}=await E.from("market_listings").select("card_id").eq("id",e).single();if(await E.from("market_listings").update({status:"cancelled"}).eq("id",e),l!=null&&l.card_id){const{count:d}=await E.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",l.card_id).eq("status","active");d||await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",l.card_id)}a("Annonce retirée","success"),Ai(t,i)}async function yr(e,{state:t,navigate:i,toast:a}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function br(e,{state:t,navigate:i,toast:a}){const l=t.profile;if(!l)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${l.id},away_id.eq.${l.id}`).order("created_at",{ascending:!1}).limit(50),s={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},c=(d||[]).filter(n=>n.status==="finished"),u=(d||[]).filter(n=>n.status==="in_progress");function o(n){const m=n.home_id===l.id;m?n.home_score:n.away_score,m?n.away_score:n.home_score;const b=n.winner_id===l.id,g=n.home_score===n.away_score&&n.status==="finished",w=n.status!=="finished"?"…":g?"N":b?"V":"D",r=n.status!=="finished"||g?"#888":b?"#1A6B3C":"#c0392b";let p=s[n.mode]||n.mode;n.away_id===null&&!p.startsWith("IA")&&(p="IA");const A=n.home_id===l.id?n.away:n.home;let j;n.away_id===null?j=p:A?j=`${A.club_name||A.pseudo} (${A.pseudo})`:j="Adversaire";let N="";n.status==="in_progress"&&Date.now()-new Date(n.created_at).getTime()>3600*1e3&&(N=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const q=new Date(n.created_at),B=q.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+q.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),M=n.status==="finished"?`${n.home_score} - ${n.away_score}`:`${n.home_score||0} - ${n.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${j}${N}</div>
        <div style="font-size:11px;color:var(--gray-600)">${p} · ${B}${n.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${M}</span>
        <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${w}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(d||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${u.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${u.map(o).join("")}
        </div>`:""}

      ${c.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${c.map(o).join("")}
        </div>`:""}

      ${(d||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}Ao(zo);const Ge={user:null,profile:null,page:"home",params:{}};function At(e,t="info",i=3e3){const a=document.getElementById("toast");a&&(a.textContent=e,a.className=`show ${t}`,clearTimeout(a._t),a._t=setTimeout(()=>{a.className=""},i))}function hr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function bi(){document.getElementById("modal-overlay").classList.add("hidden")}async function qt(){if(!Ge.user)return;const{data:e}=await E.from("users").select("*").eq("id",Ge.user.id).single();e&&(Ge.profile=e)}function Dt(e,t={}){Ge.page=e,Ge.params=t,Eo()}async function Eo(){var a,l,d,s;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===Ge.page)});const t=document.getElementById("nav-credits");t&&Ge.profile&&(t.textContent=`💰 ${(Ge.profile.credits||0).toLocaleString("fr")}`);const i={state:Ge,navigate:Dt,toast:At,openModal:hr,closeModal:bi,refreshProfile:qt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ge.page){case"home":await ji(e,i);break;case"collection":await Jo(e,i);break;case"decks":await fi(e,i);break;case"boosters":await un(e,i);break;case"match":{const c=Ge.params&&Ge.params.matchMode||"vs_ai_easy";c==="random"?await vo(e,i):c==="friend"?await Un(e,i,(a=Ge.params)==null?void 0:a.friendId,(l=Ge.params)==null?void 0:l.friendName):c==="mini-league"?await Oi(e,i,(d=Ge.params)==null?void 0:d.mlMatchId,(s=Ge.params)==null?void 0:s.leagueId):await kn(e,i);break}case"market":await fr(e,i);break;case"rankings":await yr(e,i);break;case"matches":await br(e,i);break;case"friends":await Bo(e,i);break;case"mini-league":await Yn(e,i);break;case"match-mini-league":{const c=Ge.params||{};await Oi(e,i,c.mlMatchId,c.leagueId);break}default:await ji(e,i)}}function vr(){var a;const e=document.getElementById("app"),t=Ge.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(l=>{l.addEventListener("click",d=>{d.preventDefault(),Dt(l.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Dt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Dt("boosters")),(a=document.getElementById("journal-btn"))==null||a.addEventListener("click",()=>wr())}async function wr(){const{data:e}=await E.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(a=>{const l=new Date(a.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",a=>{a.target===t&&t.remove()})}async function _r(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&bi()}),document.getElementById("modal-close").addEventListener("click",bi);const{data:{session:e}}=await E.auth.getSession();if(!e){Vi(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At});return}Ge.user=e.user,await qt(),Vi();try{const{data:i}=await E.from("formation_links_overrides").select("formation, links"),a={};(i||[]).forEach(l=>{a[l.formation]=l.links}),So(a)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Ge.profile){Io(document.getElementById("app"),{state:Ge,navigate:async()=>{await qt(),pi()},toast:At,refreshProfile:qt});return}const t=Array.isArray(Ge.profile.pending_boosters)?Ge.profile.pending_boosters:[];if(!Ge.profile.onboarding_done&&t.length>0){vn(document.getElementById("app"),{state:Ge,navigate:()=>pi(),toast:At,refreshProfile:qt});return}pi(),setTimeout(()=>pr(Ge.profile,Dt,At),800),E.auth.onAuthStateChange(async(i,a)=>{i==="SIGNED_OUT"&&(Ge.user=null,Ge.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At}))})}function $r(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function di(){const e=document.getElementById("app");e&&(e.style.height=$r()+"px")}window.addEventListener("resize",di);window.addEventListener("orientationchange",()=>setTimeout(di,150));window.visualViewport&&window.visualViewport.addEventListener("resize",di);function pi(){const e=()=>{var i;(i=Ge.user)!=null&&i.id&&E.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ge.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",di(),vr(),Eo()}function Vi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function To(e){var a;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(a=document.getElementById("boot-retry"))==null||a.addEventListener("click",()=>window.location.reload())}_r().catch(e=>{console.error("Échec du démarrage:",e),To()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&To("Le serveur met trop de temps à répondre.")},12e3);
