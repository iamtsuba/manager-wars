const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-Dnttc-Cp.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as T,F as vi,h as Pt,j as Xi,l as at,i as Io,k as Mo,b as jo}from"./formation-links-Dnttc-Cp.js";const Co="/";function ji(e,{navigate:t,toast:i}){let s="login";const l=()=>{var a,p,f,n,o,g;const d=s==="login";e.innerHTML=`
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
        <img src="${Co}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{s="login",l()}),(p=document.getElementById("tab-reg-btn"))==null||p.addEventListener("click",()=>{s="register",l()}),d?((f=document.getElementById("login-password"))==null||f.addEventListener("keydown",b=>{var y;b.key==="Enter"&&((y=document.getElementById("login-btn"))==null||y.click())}),(n=document.getElementById("login-btn"))==null||n.addEventListener("click",async()=>{const b=document.getElementById("login-email").value.trim(),y=document.getElementById("login-password").value,w=document.getElementById("login-error");if(w.textContent="",!b||!y){w.textContent="Remplissez tous les champs.";return}const r=document.getElementById("login-btn");r.textContent="⏳ Connexion…",r.disabled=!0;const{error:c}=await T.auth.signInWithPassword({email:b,password:y});if(r.textContent="⚽ Se connecter",r.disabled=!1,c){w.textContent=c.message.includes("Invalid")?"Email ou mot de passe incorrect.":c.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",b=>{var y;b.key==="Enter"&&((y=document.getElementById("reg-btn"))==null||y.click())}),(g=document.getElementById("reg-btn"))==null||g.addEventListener("click",async()=>{const b=document.getElementById("reg-email").value.trim(),y=document.getElementById("reg-password").value,w=document.getElementById("reg-confirm").value,r=document.getElementById("reg-error");if(r.textContent="",!b||!y||!w){r.textContent="Remplissez tous les champs.";return}if(y.length<6){r.textContent="Mot de passe trop court (min. 6 caractères).";return}if(y!==w){r.textContent="Les mots de passe ne correspondent pas.";return}const c=document.getElementById("reg-btn");c.textContent="⏳ Création…",c.disabled=!0;const{error:I}=await T.auth.signUp({email:b,password:y});if(c.textContent="🚀 Créer mon compte",c.disabled=!1,I){r.textContent=I.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),s="login",l(),setTimeout(()=>{const L=document.getElementById("login-email");L&&(L.value=b)},50)}))};l()}function qo(e,{state:t,navigate:i,toast:s,refreshProfile:l}){let d="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function p(){var w;const n=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),g=((w=document.getElementById("setup-club"))==null?void 0:w.value)||"MW",b=g.trim().split(" ").filter(Boolean),y=b.length>=2?(b[0][0]+b[1][0]).toUpperCase():g.slice(0,2).toUpperCase();n&&(n.style.background=a,n.style.borderColor=d),o&&(o.textContent=y,o.style.color=d)}document.getElementById("color1").addEventListener("input",n=>{d=n.target.value,document.getElementById("swatch1").style.background=d,p()}),document.getElementById("color2").addEventListener("input",n=>{a=n.target.value,document.getElementById("swatch2").style.background=a,p()});function f(n){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${n}`).classList.add("active"),document.getElementById("step-num").textContent=n,document.getElementById("progress-fill").style.width=`${Math.round(n/3*100)}%`,n===3&&p()}document.getElementById("step1-next").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",n.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:g}=await T.from("users").select("id").eq("pseudo",n).maybeSingle();if(g){o.textContent="Ce pseudo est déjà pris.";return}f(2)}),document.getElementById("step2-back").addEventListener("click",()=>f(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const n=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",n.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:g}=await T.from("users").select("id").eq("club_name",n).maybeSingle();if(g){o.textContent="Ce nom de club est déjà pris.";return}f(3)}),document.getElementById("step3-back").addEventListener("click",()=>f(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const n=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),g=document.getElementById("step3-error"),b=document.getElementById("step3-finish");g.textContent="",b.disabled=!0,b.textContent="Création en cours…";try{const{error:y}=await T.from("users").insert({id:t.user.id,pseudo:n,club_name:o,club_color1:d,club_color2:a,credits:1e4});if(y)throw y;await Bo(t.user.id),await l(),s(`Bienvenue ${n} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(y){g.textContent=y.message,b.disabled=!1,b.textContent="🚀 Créer mon profil !"}})}async function Bo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await T.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Fo="modulepreload",Do=function(e){return"/"+e},Ci={},ii=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),p=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));l=Promise.allSettled(i.map(f=>{if(f=Do(f),f in Ci)return;Ci[f]=!0;const n=f.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${o}`))return;const g=document.createElement("link");if(g.rel=n?"stylesheet":Fo,n||(g.as="script"),g.crossOrigin="",g.href=f,p&&g.setAttribute("nonce",p),document.head.appendChild(g),n)return new Promise((b,y)=>{g.addEventListener("load",b),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${f}`)))})}))}function d(a){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=a,window.dispatchEvent(p),!p.defaultPrevented)throw a}return l.then(a=>{for(const p of a||[])p.status==="rejected"&&d(p.reason);return t().catch(d)})},Dt="#1A6B3C",Gt="#cc2222",Go="#D4A017",qi="#888";async function Po(e,t){const{state:i,toast:s}=t;e.innerHTML=`
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
    </div>`,await Qi(i,s,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Ro(i,s)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Zi(i,s,null,t))}async function Qi(e,t,i={}){const{navigate:s}=i,l=e.user.id,{data:d,error:a}=await T.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${l},addressee_id.eq.${l}`),{count:p}=await T.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",l).eq("status","pending"),f=document.getElementById("pending-badge");f&&(p>0?(f.style.display="flex",f.textContent=p):f.style.display="none");const n=document.getElementById("friends-list");if(!n)return;if(a){console.error("[Friends] Erreur:",a),n.innerHTML=`<div style="color:${Gt};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const o=(d||[]).map(y=>y.requester_id===l?y.addressee_id:y.requester_id);let g={};if(o.length){const{data:y}=await T.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(y||[]).forEach(w=>{g[w.id]=w})}const b=(d||[]).map(y=>({friendshipId:y.id,friend:g[y.requester_id===l?y.addressee_id:y.requester_id]||{pseudo:"?"}}));if(!b.length){n.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}n.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${b.length} ami${b.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${b.map(({friendshipId:y,friend:w})=>No(w,y)).join("")}
    </div>`,n.querySelectorAll("[data-stats]").forEach(y=>{y.addEventListener("click",()=>Oo(e,y.dataset.stats,y.dataset.friendName))}),n.querySelectorAll("[data-match]").forEach(y=>{y.addEventListener("click",()=>{const w=y.dataset.friendId,r=y.dataset.friendName;console.log("[Friends] clic match",{fid:w,fname:r,hasNavigate:typeof s}),typeof s=="function"?s("match",{matchMode:"friend",friendId:w,friendName:r}):t("Erreur navigation","error")})})}function No(e,t){const i=e.club_name||e.pseudo||"?",s=e.pseudo||"",l=(s||i).slice(0,2).toUpperCase(),d=e.club_color2||Dt,a=e.club_color1||"#ffffff",p=e.last_seen_at?new Date(e.last_seen_at):null,f=p&&Date.now()-p.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Go};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Ro(e,t){const i=wi();i.innerHTML=`
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
    ${_i()}`,document.body.appendChild(i);const s=i.querySelector("#friend-pseudo-input"),l=i.querySelector("#add-friend-error"),d=()=>i.remove();s.focus(),i.querySelector("#add-cancel").addEventListener("click",d),i.addEventListener("click",a=>{a.target===i&&d()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=s.value.trim();if(!a){l.textContent="Entre un pseudo";return}l.textContent="";const{data:p}=await T.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!p){l.textContent="Utilisateur introuvable";return}if(p.id===e.user.id){l.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:f}=await T.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${p.id}),and(requester_id.eq.${p.id},addressee_id.eq.${e.user.id})`).single();if(f){const o=f.status==="accepted"?"Vous êtes déjà amis !":f.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";l.textContent=o;return}const{error:n}=await T.from("friendships").insert({requester_id:e.user.id,addressee_id:p.id,status:"pending"});if(n){l.textContent="Erreur : "+n.message;return}d(),t(`✅ Demande envoyée à ${p.pseudo} !`,"success")})}async function Zi(e,t,i=null,s={}){const l=e.user.id,{data:d}=await T.from("friendships").select("id, requester_id").eq("addressee_id",l).eq("status","pending").order("created_at",{ascending:!1}),a=(d||[]).map(b=>b.requester_id);let p={};if(a.length){const{data:b}=await T.from("users").select("id, pseudo, club_name").in("id",a);(b||[]).forEach(y=>{p[y.id]=y})}const f=(d||[]).map(b=>({...b,requester:p[b.requester_id]||{pseudo:"?"}})),n=wi(),o=f||[];n.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(b=>{var y,w,r;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((y=b.requester)==null?void 0:y.club_name)||((w=b.requester)==null?void 0:w.pseudo)||"?"}
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
    ${_i()}`,document.body.appendChild(n);const g=()=>n.remove();n.querySelector("#pending-close").addEventListener("click",g),n.addEventListener("click",b=>{b.target===n&&g()}),n.querySelectorAll("[data-accept]").forEach(b=>{b.addEventListener("click",async()=>{const{error:y}=await T.from("friendships").update({status:"accepted"}).eq("id",b.dataset.accept);if(y){t("Erreur : "+y.message,"error");return}b.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Qi(e,t,s),i&&i()})}),n.querySelectorAll("[data-decline]").forEach(b=>{b.addEventListener("click",async()=>{await T.from("friendships").delete().eq("id",b.dataset.decline),b.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Oo(e,t,i){const s=e.user.id,[l,d]=[s,t].sort(),a=s===l,{data:p}=await T.from("friend_match_stats").select("*").eq("player1_id",l).eq("player2_id",d).single(),f=e.profile.club_name||e.profile.pseudo||"Moi",n=p||{},o=a?n.wins_p1||0:n.wins_p2||0,g=a?n.wins_p2||0:n.wins_p1||0,b=n.draws||0,y=a?n.goals_p1||0:n.goals_p2||0,w=a?n.goals_p2||0:n.goals_p1||0,r=a?n.gc_used_p1||0:n.gc_used_p2||0,c=a?n.gc_used_p2||0:n.gc_used_p1||0,I=n.matches_total||0,L=(H,D,G,M=Dt,U=Gt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${M}">${D}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${H}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${U}">${G}</div>
    </div>`,C=wi();C.innerHTML=`
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
        ${L("Victoires",o,g)}
        ${L("Nuls",b,b,qi,qi)}
        ${L("Défaites",g,o)}
        ${L("Buts marqués",y,w)}
        ${L("Buts encaissés",w,y,Gt,Dt)}
        ${L("GC utilisés ⚡",r,c,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${I} match${I>1?"s":""} joué${I>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${_i()}`,document.body.appendChild(C),C.querySelector("#stats-close").addEventListener("click",()=>C.remove()),C.addEventListener("click",H=>{H.target===C&&C.remove()})}function wi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function _i(){return`
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
    </style>`}async function eo({player1Id:e,player2Id:t,score1:i,score2:s,gc1:l,gc2:d}){const[a,p]=[e,t].sort(),f=e!==a,n=f?s:i,o=f?i:s,g=f?d:l,b=f?l:d,y=n>o?1:0,w=o>n?1:0,r=n===o?1:0,{data:c}=await T.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",p).single();c?await T.from("friend_match_stats").update({wins_p1:c.wins_p1+y,wins_p2:c.wins_p2+w,draws:c.draws+r,goals_p1:c.goals_p1+n,goals_p2:c.goals_p2+o,gc_used_p1:c.gc_used_p1+g,gc_used_p2:c.gc_used_p2+b,matches_total:c.matches_total+1}).eq("player1_id",a).eq("player2_id",p):await T.from("friend_match_stats").insert({player1_id:a,player2_id:p,wins_p1:y,wins_p2:w,draws:r,goals_p1:n,goals_p2:o,gc_used_p1:g,gc_used_p2:b,matches_total:1})}const Ho="2026.07.04-1940";async function Bi(e,{state:t,navigate:i,toast:s}){var d,a;const l=t.profile;l&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Ho}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(p=>{p.addEventListener("click",f=>{f.preventDefault(),i(p.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(p=>{p.addEventListener("click",()=>{p.classList.add("tapped"),setTimeout(()=>p.classList.remove("tapped"),200);const f=p.dataset.action;if(f==="match-ai"){Yo(i);return}if(f==="match-random"){i("match",{matchMode:"random"});return}if(f==="match-friend"){i("friends");return}if(f==="mini-league"){i("mini-league");return}if(f==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}s("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var H,D,G,M,U,oe;const p=((H=window.visualViewport)==null?void 0:H.height)||window.innerHeight,f=((D=document.querySelector(".top-nav"))==null?void 0:D.offsetHeight)||56,n=((G=document.querySelector(".bottom-nav"))==null?void 0:G.offsetHeight)||60,o=((M=e.querySelector(".hero-compact"))==null?void 0:M.offsetHeight)||52,g=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const b=((oe=(U=e.querySelector("#logout-btn"))==null?void 0:U.closest("div"))==null?void 0:oe.offsetHeight)||44,y=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((de,N)=>{var W;return de+(((W=document.getElementById(N))==null?void 0:W.offsetHeight)||0)},0),w=14*5,r=p-f-n-o-b-y-w,c=Math.max(80,Math.round(r*.28)),I=Math.max(160,Math.round(r*.72)),L=Math.floor((I-10)/2);g&&(g.style.minHeight=g.style.maxHeight=c+"px"),e.querySelectorAll(".play-grid .play-card").forEach(de=>{de.style.minHeight=de.style.height=L+"px"});const C=Math.round(L*.55);e.querySelectorAll(".play-card .play-icon").forEach(de=>{de.style.height=C+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await T.auth.signOut(),window.location.reload()}),io(t,s),Vo(t,s,i),to(t,s,i))}async function to(e,t,i){const s=document.getElementById("ongoing-match-banner");if(!s)return;const l=e.profile.id,{data:d}=await T.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${l},away_id.eq.${l}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){s.innerHTML="";return}const a=d.map(f=>f.home_id===l?f.away_id:f.home_id).filter(Boolean);let p={};if(a.length){const{data:f}=await T.from("users").select("id, pseudo, club_name").in("id",a);(f||[]).forEach(n=>{p[n.id]=n.club_name||n.pseudo})}s.innerHTML=d.map(f=>{const n=f.home_id===l?f.away_id:f.home_id,o=p[n]||"Adversaire",g=f.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${g?"🏆 Mini League":f.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
        </div>
        <button data-resume="${f.id}" data-mini="${g?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${f.id}" data-opp="${n}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),s.querySelectorAll("[data-resume]").forEach(f=>{f.addEventListener("click",async()=>{const n=document.getElementById("page-content")||document.getElementById("app");if(f.dataset.mini==="1"){const{data:o}=await T.from("mini_league_matches").select("id, league_id").eq("match_id",f.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await ii(async()=>{const{resumePvpMatch:g}=await Promise.resolve().then(()=>Wn);return{resumePvpMatch:g}},void 0);o(n,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},f.dataset.resume)}})}),s.querySelectorAll("[data-abandon]").forEach(f=>{f.addEventListener("click",()=>{Ko(async()=>{await Uo(f.dataset.abandon,f.dataset.opp,l),t("Match abandonné (défaite 3-0)","info"),to(e,t,i)})})})}async function Uo(e,t,i){const{data:s}=await T.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!s)return;const l=s.home_id===i,d=l?0:3,a=l?3:0,p=s.game_state||{};p.p1Score=d,p.p2Score=a,p.phase="finished",p.forfeit=!0,await T.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:a,game_state:p}).eq("id",e)}function Ko(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Vo(e,t,i){var p,f,n,o;const s=document.getElementById("match-invite-banner");if(!s)return;const{data:l}=await T.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){s.innerHTML="";return}const d=((p=l.inviter)==null?void 0:p.club_name)||((f=l.inviter)==null?void 0:f.pseudo)||"?",a=l.inviter_id;s.innerHTML=`
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
    </div>`,(n=document.getElementById("match-inv-accept"))==null||n.addEventListener("click",()=>{s.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:d})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await T.from("friend_match_invites").update({status:"declined"}).eq("id",l.id),s.innerHTML="",t("Invitation refusée","info")})}async function io(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:s,error:l}=await T.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(l||!(s!=null&&s.length)){i.innerHTML="";return}const d=s.length,a=s.slice(0,2).map(f=>{var n;return((n=f.requester)==null?void 0:n.pseudo)||"?"}).join(", "),p=d>2?` +${d-2}`:"";i.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Zi(e,t,()=>io(e,t))})}function Yo(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const s=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",s),i.addEventListener("click",l=>{l.target===i&&s()}),i.querySelectorAll("[data-mode]").forEach(l=>{l.addEventListener("click",()=>{s(),e("match",{matchMode:l.dataset.mode})})})}const Ve={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function je(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Fi=["ATT","MIL","DEF","GK"];function oo(e){let t=0;const i=e.length;for(let s=0;s<i;s++)for(let l=s+1;l<i;l++){const d=e[s],a=e[l];if(!d||!a)continue;const p=d._col!=null&&a._col!=null&&d._col===a._col,f=d._col!=null&&a._col!=null&&Math.abs(d._col-a._col)===1,n=Fi.indexOf(d._line||d.job),o=Fi.indexOf(a._line||a.job),g=Math.abs(n-o)===1;if(!((d._line||d.job)===(a._line||a.job)&&f||p&&g))continue;const w=d.country_code&&a.country_code&&d.country_code===a.country_code,r=d.club_id&&a.club_id&&d.club_id===a.club_id;w&&r?t+=2:(w||r)&&(t+=1)}return t}function Nt(e,t={}){const i=e.reduce((d,a)=>{const p=a._line||a.job,f=a.stadiumBonus&&(p==="MIL"||p==="ATT")?10:0;return d+(Number(p==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)+f},0),s=oo(e);let l=i+s;return t.doubleAttack&&(l*=2),t.stolenNote&&(l-=t.stolenNote),{base:i,links:s,total:Math.max(0,l)}}function Rt(e,t={}){const i=e.reduce((d,a)=>{const p=a._line||a.job;let f=0;p==="GK"?f=Number(a.note_g)||0:p==="MIL"?f=Number(a.note_m)||0:f=Number(a.note_d)||0;const n=a.stadiumBonus&&(p==="GK"||p==="DEF"||p==="MIL")?10:0;return d+f+(a.boost||0)+n},0),s=oo(e);let l=i+s;return t.stolenNote&&(l-=t.stolenNote),{base:i,links:s,total:Math.max(0,l)}}function Ot(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function no(e,t,i="easy"){const s=e.filter(a=>!a.used);if(!s.length)return[];const l=[...s].sort((a,p)=>{const f=t==="attack"?je(a,"ATT"):a._line==="GK"?je(a,"GK"):je(a,"DEF");return(t==="attack"?je(p,"ATT"):p._line==="GK"?je(p,"GK"):je(p,"DEF"))-f});let d=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return l.slice(0,Math.min(d,l.length,3))}function Wo(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const ro={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function $i(e,t){const i=e.player;if(!i)return 0;const s=i.rarity;if(s!=="pepite"&&s!=="papyte")return Number(i[t])||0;const l=ki(i),d=Number(i[t])||0;if(d<=0)return 0;const a=i.note_min??1,p=i.note_max??10,n=(e.current_note??l)-l;return Math.min(p,Math.max(a,d+n))}function ki(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Ei(e,t){!e||!t||await Promise.all([ui(e,"win"),ui(t,"loss")])}async function ui(e,t){const{data:i}=await T.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const s=i.filter(l=>{var d,a;return((d=l.player)==null?void 0:d.rarity)==="pepite"||((a=l.player)==null?void 0:a.rarity)==="papyte"});s.length&&await Promise.all(s.map(l=>{const d=ro[l.player.rarity],a=t==="win"?d.win:d.loss,p=l.player.note_min??1,f=l.player.note_max??10,n=ki(l.player),o=l.current_note??n,g=Math.min(f,Math.max(p,o+a));return T.from("cards").update({current_note:g}).eq("id",l.id)}))}async function Jo(e,t){return ui(e,t)}const ao=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:ro,applyOwnEvolution:Jo,currentSecondaryNote:$i,getBaseMainNote:ki,updateEvolutiveCards:Ei},Symbol.toStringTag,{value:"Module"})),so={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},qt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Kt=["GK","DEF","MIL","ATT"],Xo=["Tous","GK","DEF","MIL","ATT"],Qo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Di(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Zo(e){return e.length?e.reduce((t,i)=>Di(i)>Di(t)?i:t,e[0]):e[0]}function lo(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Ti={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function co(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function At(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function li(e,t=""){var w,r;const i=e.player;if(!i)return"";const s=i.job||"ATT",l=qt[s],d=so[i.rarity]||"#ccc",a=i.rarity==="pepite"||i.rarity==="papyte",p=e.evolution_bonus||0,f=(a&&e.current_note!=null?e.current_note:At(i,s))+p,n=i.job2?a?$i(e,lo(i.job2)):At(i,i.job2):null,o=n!=null?n>0?n+p:n:null,g=i.job2?qt[i.job2]:null,b=co(i),y=Ti[i.country_code]||i.country_code||"";return`
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
            fill="${g}" stroke="white" stroke-width="1.5"/>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${y}</div>
        ${(w=i.clubs)!=null&&w.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((r=i.clubs)==null?void 0:r.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Gi(e){const t=e.job||"ATT",i=At(e,t),s=Ti[e.country_code]||e.country_code||"";return`
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
  </div>`}async function en(e,t){const{state:i,navigate:s,toast:l,openModal:d,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:p}=await T.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:f}=await T.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),n=(p||[]).filter(X=>X.card_type==="player"&&X.player),o=(p||[]).filter(X=>X.card_type==="game_changer"),g=(p||[]).filter(X=>X.card_type==="formation"),b=(p||[]).filter(X=>X.card_type==="stadium"),{data:y}=await T.from("gc_definitions").select("name,gc_type,color,effect,image_url"),w={};(y||[]).forEach(X=>{w[X.name]=X});const{data:r}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),c={};(r||[]).forEach(X=>{c[X.id]=X}),b.forEach(X=>{X.stadium_def&&(c[X.stadium_id]=X.stadium_def)});const I=Object.keys(vi),L=Object.keys(Ve),C={};n.forEach(X=>{const ne=X.player.id;C[ne]=(C[ne]||0)+1}),new Set(Object.keys(C).map(X=>String(X)));const H=new Set(g.map(X=>X.formation)),D=new Set(o.map(X=>X.gc_type));let G="player",M="Tous",U="",oe=!1;function de(){return[...n].sort((X,ne)=>{const ge=Kt.indexOf(X.player.job),J=Kt.indexOf(ne.player.job);return ge!==J?ge-J:(X.player.surname_encoded||"").localeCompare(ne.player.surname_encoded||"")})}function N(){return[...f||[]].sort((X,ne)=>{const ge=Kt.indexOf(X.job),J=Kt.indexOf(ne.job);return ge!==J?ge-J:(X.surname_encoded||"").localeCompare(ne.surname_encoded||"")})}function W(){return de().filter(X=>{const ne=X.player,ge=M==="Tous"||ne.job===M,J=!U||`${ne.firstname} ${ne.surname_encoded}`.toLowerCase().includes(U);return ge&&J})}function K(){return N().filter(X=>{const ne=M==="Tous"||X.job===M,ge=!U||`${X.firstname} ${X.surname_encoded}`.toLowerCase().includes(U);return ne&&ge})}e.innerHTML=`
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${g.length})</div>
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
          ${Xo.map(ne=>`
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
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{oe=!oe,P(),re()})))}function re(){const X=document.getElementById("col-grid");X&&(G==="player"?we(X):G==="formation"?Ae(X):G==="stadium"?xe(X):Ie(X))}function pe(X,ne,ge,J,Q){const V=document.getElementById("col-grid"),se=document.getElementById("col-big");if(!V||!se)return;var he=0;function Se(){const Me=window.innerWidth>=768,be=document.getElementById("col-big"),ze=document.getElementById("col-grid");Me&&be&&(be.style.minHeight="420px",be.style.flex="1 1 auto"),Me&&ze&&(ze.style.height=Math.round(310*.76+16)+"px",ze.style.flexShrink="0",ze.style.overflowX="auto",ze.style.overflowY="hidden",ze.style.alignItems="center",ze.style.padding="8px 16px"),se.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+ne(X[he])+"</div>";var j=se.querySelector("[data-card-id],[data-form-id],[data-gc-id]");j&&j.addEventListener("click",function(){J(X[he])}),requestAnimationFrame(function(){var B=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!B||!se)){var _=se.clientHeight-8,E=se.clientWidth-24,u=B.offsetHeight,m=B.offsetWidth;if(u>0&&m>0&&_>40){var x=Me?2.2:1,h=Math.min(_/u,E/m,x);B.style.transform="scale("+h.toFixed(3)+")",B.style.transformOrigin="top center"}}}),V.innerHTML=X.map(function(B,_){var E=_===he,u="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(E?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+_+'" style="'+u+'">'+ge(B,E)+"</div>"}).join(""),V.querySelectorAll(".col-mini-item").forEach(function(B){B.addEventListener("click",function(){he=Number(B.dataset.idx),Se(),B.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Se()}function ye(X){var ne=window.innerWidth>=768?.76:.54,ge;if(!X||X._fake){var J=X?X.player:null;if(!J)return"";ge=Gi(J)}else ge=li(X,"");return'<div style="display:inline-block;zoom:'+ne+';pointer-events:none;line-height:0">'+ge+"</div>"}function Le(X,ne,ge){ne=ne||100,ge=ge||140;var J=Pt[X]||{},Q={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},V=Math.max(3,Math.round(ne*.06)),se=Object.entries(J).map(function(Se){var Me=Se[0],be=Se[1],ze=Me.replace(/\d+$/,""),j=Q[ze]||"#888",B=Math.round(be.x*ne),_=Math.round(be.y*ge);return'<circle cx="'+B+'" cy="'+_+'" r="'+V+'" fill="'+j+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),he=Math.max(1,Math.round(ne/50));return'<svg viewBox="0 0 '+ne+" "+ge+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+ne+'" height="'+ge+'" fill="#1A6B3C"/><rect x="'+Math.round(ne*.2)+'" y="'+Math.round(ge*.02)+'" width="'+Math.round(ne*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+he+'"/><line x1="0" y1="'+Math.round(ge*.5)+'" x2="'+ne+'" y2="'+Math.round(ge*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+he+'"/><ellipse cx="'+Math.round(ne*.5)+'" cy="'+Math.round(ge*.5)+'" rx="'+Math.round(ne*.18)+'" ry="'+Math.round(ge*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+he+'"/><rect x="'+Math.round(ne*.2)+'" y="'+Math.round(ge*.82)+'" width="'+Math.round(ne*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+he+'"/>'+se+"</svg>"}function ve(X,ne,ge){var J=ge>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ge+"</div>":"",Q=ne?'data-form-id="'+ne.id+'"':"",V=X.length>7?14:X.length>5?16:19,se=!!ne;return"<div "+Q+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(se?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(se?"":"filter:grayscale(1);opacity:0.5")+'">'+J+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(se?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+V+"px;font-weight:900;color:"+(se?"#1A6B3C":"#aaa")+';line-height:1">'+X+'</div></div><div style="flex:1;overflow:hidden;background:'+(se?"#1A6B3C":"#ccc")+'">'+Le(X,140,220)+"</div></div>"}function _e(X,ne){var ge=window.innerWidth>=768?.76:.54,J=140,Q=305,V=Math.round(Q*.22),se=Q-V,he=X.length>7?10:13,Se=Le(X,J,se),Me=ne?"1.5px solid #2a7a40":"1px solid #ddd",be=ne?"":"filter:grayscale(1);opacity:0.45;",ze=ne?"#1A6B3C":"#bbb",j="#fff";return'<div style="display:inline-block;zoom:'+ge+';line-height:0;pointer-events:none"><div style="width:'+J+"px;height:"+Q+"px;border-radius:6px;border:"+Me+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+be+'"><div style="height:'+V+"px;background:"+ze+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+he+"px;font-weight:900;color:"+j+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(J-4)+'px">'+X+'</span></div><div style="height:'+se+'px;overflow:hidden;flex-shrink:0">'+Se+"</div></div></div>"}function we(X){if(oe){const ne=K();if(!ne.length){X.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ge=ne.map(J=>n.find(Q=>Q.player.id===J.id)||{_fake:!0,player:J,id:"fake-"+J.id});pe(ge,J=>J._fake?Gi(J.player):li(J,""),J=>J._fake?ye({player:J.player,id:"x",_fake:!0}):ye(J),J=>{J._fake||Pi(J,n,C,t)})}else{const ne=W();if(!ne.length){X.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ge={};ne.forEach(Q=>{const V=Q.player.id;ge[V]||(ge[V]=[]),ge[V].push(Q)});const J=Object.values(ge).map(Q=>Zo(Q));pe(J,Q=>{const V=C[Q.player.id]||1,se=V>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${V}</div>`:"",Se=n.filter(Me=>Me.player.id===Q.player.id&&Me.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return li(Q,se+Se)},Q=>ye(Q),Q=>Pi(Q,n,C,t))}}function Ae(X){const ne=oe?I:[...H];if(!ne.length){X.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ge=ne.map(J=>({formation:J,card:g.find(Q=>Q.formation===J)||null,owned:H.has(J)}));pe(ge,({formation:J,card:Q,owned:V})=>ve(J,V?Q:null,V?g.filter(se=>se.formation===J).length:0),({formation:J,owned:Q})=>_e(J,Q),({card:J,owned:Q})=>{Q&&J&&on(J,g,t,d)})}function Ie(X){const ne=Object.keys(w),ge=oe?ne.length?ne:L:[...D];if(!ge.length){X.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const J=ge.map(Q=>({type:Q,gc:Ve[Q]||{icon:"⚡",desc:""},def:w[Q]||null,owned:D.has(Q),card:o.find(V=>V.gc_type===Q)||null}));pe(J,({type:Q,gc:V,def:se,owned:he,card:Se})=>{var x;const Me=he?o.filter(h=>h.gc_type===Q).length:0,be=Me>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Me}</div>`:"",ze=(se==null?void 0:se.gc_type)==="ultra_game_changer",j={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},B={purple:"#b06ce0",light_blue:"#00d4ef"},_=j[se==null?void 0:se.color]||j.purple,E=B[se==null?void 0:se.color]||B.purple,u=(se==null?void 0:se.effect)||V.desc||"",m=se!=null&&se.image_url?`/icons/${se.image_url}`:((x=se==null?void 0:se.club)==null?void 0:x.logo_url)||(se!=null&&se.country_code?`https://flagcdn.com/w80/${se.country_code.toLowerCase()}.png`:null);return he&&Se?`<div data-gc-id="${Se.id}" data-gc-type="${Q}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${E};background:${_};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${E}66;cursor:pointer">
          ${be}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${Q.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${Q}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${ze?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${m?`<img src="${m}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${V.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${u.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${Q}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${V.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:Q,gc:V,def:se,owned:he})=>{const Se=window.innerWidth>=768?.76:.54,Me={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},be={purple:"#9b59b6",light_blue:"#00bcd4"},ze=Me[se==null?void 0:se.color]||Me.purple,j=be[se==null?void 0:se.color]||be.purple,B=se!=null&&se.image_url?`/icons/${se.image_url}`:null;return he?`<div style="display:inline-block;zoom:${Se};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${ze};border:1px solid ${j};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${Q}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${B?`<img src="${B}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${V.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((se==null?void 0:se.effect)||V.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Se};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${V.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${Q}</span></div></div>`},({type:Q,owned:V,def:se})=>{V&&tn(Q,se,d)})}function xe(X){const ne="#E87722",ge="/";if(!b.length){X.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const J={};b.forEach(V=>{const se=V.stadium_id||"?";(J[se]=J[se]||[]).push(V)});const Q=Object.entries(J).map(([V,se])=>({sid:V,def:c[V]||null,count:se.length,card:se[0]}));pe(Q,({def:V,count:se})=>{var j,B;const he=(V==null?void 0:V.name)||"?",Se=((j=V==null?void 0:V.club)==null?void 0:j.encoded_name)||(V==null?void 0:V.country_code)||"—",Me=V!=null&&V.image_url?`${ge}icons/${V.image_url}`:((B=V==null?void 0:V.club)==null?void 0:B.logo_url)||(V!=null&&V.country_code?`https://flagcdn.com/w80/${V.country_code.toLowerCase()}.png`:null),be=Me?`<img src="${Me}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',ze=se>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${se}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${ne},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${ne}66">
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
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(X=>{X.addEventListener("click",()=>{G=X.dataset.tab,M="Tous",U="",oe=!1,e.querySelectorAll(".col-tab-btn").forEach(ne=>{const ge=ne.dataset.tab===G;ne.style.borderBottomColor=ge?"var(--green)":"transparent",ne.style.color=ge?"var(--green)":"var(--gray-600)"}),P(),re()})}),P(),re()}function tn(e,t,i){const s=Ve[e]||{icon:"⚡",desc:"Effet spécial."},l=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},p=d[t==null?void 0:t.color]||d.purple,f=a[t==null?void 0:t.color]||a.purple,n=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||s.desc,g=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${p};border-radius:16px;border:2px solid ${f};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${l?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Vt=1e3;function on(e,t,i,s){var w,r,c;const{state:l,toast:d,closeModal:a,navigate:p,refreshProfile:f}=i,n=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function g(){const I=Pt[n]||{},L=vi[n]||[],C=290,H=360,D=20;function G(U){const oe=I[U];return oe?{x:oe.x*C,y:oe.y*H}:null}let M=`<svg width="${C}" height="${H}" viewBox="0 0 ${C} ${H}" xmlns="http://www.w3.org/2000/svg">`;for(const[U,oe]of L){const de=G(U),N=G(oe);!de||!N||(M+=`<line x1="${de.x}" y1="${de.y}" x2="${N.x}" y2="${N.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const U of Object.keys(I)){const oe=G(U);if(!oe)continue;const de=U.replace(/\d+/,""),N=o[de]||"#555";M+=`<circle cx="${oe.x}" cy="${oe.y}" r="${D}" fill="${N}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,M+=`<text x="${oe.x}" y="${oe.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${de}</text>`}return M+="</svg>",M}const b=t.filter(I=>I.formation===n);b.length;const y=!e.is_for_sale;s(`Formation ${n}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(w=document.getElementById("direct-sell-form-btn"))==null||w.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${n} pour ${Vt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const I=b.find(C=>!C.is_for_sale)||b[0];if(!I){d("Aucune carte à vendre","error");return}await T.from("market_listings").delete().eq("card_id",I.id),await T.from("transfer_history").delete().eq("card_id",I.id);const{error:L}=await T.from("cards").delete().eq("id",I.id);if(L){d(L.message,"error");return}await T.from("users").update({credits:(l.profile.credits||0)+Vt}).eq("id",l.profile.id),await f(),d(`+${Vt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),p("collection")}),(r=document.getElementById("market-sell-form-btn"))==null||r.addEventListener("click",async()=>{const I=parseInt(document.getElementById("sell-price-form").value);if(!I||I<1){d("Prix invalide","error");return}await T.from("cards").update({is_for_sale:!0,sale_price:I}).eq("id",e.id),await T.from("market_listings").insert({seller_id:l.profile.id,card_id:e.id,price:I}),d("Carte mise en vente sur le marché !","success"),a(),p("collection")}),(c=document.getElementById("cancel-sell-form-btn"))==null||c.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),a(),p("collection")})}async function Pi(e,t,i,s){var we,Ae,Ie,xe,X,ne,ge;const{state:l,toast:d,openModal:a,closeModal:p,navigate:f,refreshProfile:n}=s,o=e.player,g=t.filter(J=>J.player.id===o.id),b=g.length,y=e.evolution_bonus||0,w=Math.max((Number(o.note_g)||0)+(o.job==="GK"||o.job2==="GK"?y:0),(Number(o.note_d)||0)+(o.job==="DEF"||o.job2==="DEF"?y:0),(Number(o.note_m)||0)+(o.job==="MIL"||o.job2==="MIL"?y:0),(Number(o.note_a)||0)+(o.job==="ATT"||o.job2==="ATT"?y:0)),r=o.rarity||"normal",{data:c}=await T.from("sell_price_configs").select("*").eq("rarity",r).lte("note_min",w).gte("note_max",w).order("note_min",{ascending:!1}).limit(1);((we=c==null?void 0:c[0])==null?void 0:we.price)??Qo[r];const I=o.rarity!=="legende",L=co(o),C=((o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:At(o,o.job))+y,H=o.rarity==="pepite"||o.rarity==="papyte",D=o.job2?(H?$i(e,lo(o.job2)):At(o,o.job2))+(At(o,o.job2)>0?y:0):null,G=qt[o.job]||"#1A6B3C",M=o.job2?qt[o.job2]:null,U=so[o.rarity]||"#ccc",oe=Ti[o.country_code]||o.country_code||"",de=e.evolution_bonus||0,W=C+de,K=D||0,P=K>0?K+de:0,re=g.map(J=>J.id);let pe={};if(re.length){const{data:J}=await T.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",re).order("transferred_at",{ascending:!0});(J||[]).forEach(Q=>{pe[Q.card_id]||(pe[Q.card_id]=[]),pe[Q.card_id].push(Q)})}const ye=J=>{const Q=J.transferred_at?new Date(J.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",V=J.source==="booster"?"Booster":J.price?J.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${J.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${J.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${J.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${V}</div>
        <div style="font-size:11px;color:var(--gray-600)">${Q}</div>
      </div>
    </div>`},Le=re.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${b>1?`(${b})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${g.map((J,Q)=>{const V=pe[J.id]||[],se=J.is_for_sale,he=V.length?V[V.length-1]:null,Me=(o.rarity==="pepite"||o.rarity==="papyte")&&J.current_note!=null?` (☆${J.current_note})`:"";return`
            <div data-card-id="${J.id}" data-card-idx="${Q}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${se?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${J.id}" ${se?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${Q+1}${Me}${se?" 🏷️ En vente":""}</div>
                  ${he?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${he.club_name} · ${he.source==="booster"?"Booster":he.price?he.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${Q}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${V.length?`${V.length} club${V.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${Q}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
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
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${C}</text>
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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([J,Q])=>{const V=qt[J],se=J===o.job||J===o.job2,he=(Number(Q)||0)+(se&&de>0?de:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
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
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(xe=document.getElementById("close-detail"))==null||xe.addEventListener("click",p);let ve=new Set;const _e=()=>{const J=ve.size,Q=document.getElementById("sell-action-panel");if(!Q)return;Q.style.display=J>0?"block":"none",document.getElementById("sell-selected-count").textContent=J;const V=document.getElementById("evolve-btn");V&&(V.textContent=`⬆️ Évoluer ${J>1?"(+"+J+")":""}`)};document.querySelectorAll(".expl-check").forEach(J=>{J.addEventListener("change",()=>{const Q=J.dataset.id;J.checked?ve.add(Q):ve.delete(Q);const V=J.closest(".exemplaire-row");V&&(V.style.borderColor=J.checked?"#1A6B3C":"#eee"),_e()})}),document.querySelectorAll(".exemplaire-row").forEach(J=>{J.addEventListener("click",Q=>{if(Q.target.closest("button")||Q.target.tagName==="INPUT")return;const V=J.querySelector(".expl-check");V&&!V.disabled&&(V.checked=!V.checked,V.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(J=>{J.addEventListener("click",Q=>{Q.stopPropagation();const V=document.querySelector(`.expl-hist[data-hist="${J.dataset.idx}"]`);V&&(V.style.display=V.style.display==="none"?"flex":"none")})}),(X=document.getElementById("evolve-btn"))==null||X.addEventListener("click",async()=>{if(b<=1)return;const J=[...ve];if(!J.length)return;if(ve.has(e.id)){const be=document.createElement("div");be.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",be.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(be),be.querySelector("#err-close").addEventListener("click",()=>be.remove()),be.addEventListener("click",ze=>{ze.target===be&&be.remove()});return}const Q=J.filter(be=>be!==e.id),V=o.rarity==="legende"?2:1;if((Q.length||1)*V,!(!Q.length&&J.length===1&&J[0]===e.id)){if(!Q.length){d("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(be=>{const ze=document.createElement("div");ze.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ze.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${o.firstname} ${o.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${Q.length}</strong> copie${Q.length>1?"s":""} sacrifiée${Q.length>1?"s":""}<br>
            📈 Note : <strong>${C+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${C+(e.evolution_bonus||0)+Q.length*V}</strong>
            ${D&&D>0?`<br>📈 Note 2 : <strong>${D+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${D+(e.evolution_bonus||0)+Q.length*V}</strong>`:""}
            ${o.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${V} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ze),ze.querySelector("#sac-cancel").addEventListener("click",()=>{ze.remove(),be(!1)}),ze.querySelector("#sac-ok").addEventListener("click",()=>{ze.remove(),be(!0)}),ze.addEventListener("click",j=>{j.target===ze&&(ze.remove(),be(!1))})}))return;if(Q.length){await T.from("market_listings").delete().in("card_id",Q),await T.from("deck_cards").delete().in("card_id",Q),await T.from("transfer_history").delete().in("card_id",Q),await T.from("decks").update({stadium_card_id:null}).in("stadium_card_id",Q);const{error:be}=await T.from("cards").delete().in("id",Q);if(be){d("Erreur suppression : "+be.message,"error");return}}const he=(e.evolution_bonus||0)+Q.length*V,{error:Se}=await T.from("cards").update({evolution_bonus:he}).eq("id",e.id);if(Se){d("Erreur évolution : "+Se.message,"error");return}const Me=C+he;d(`⬆️ ${o.firstname} ${o.surname_encoded} : note ${C+e.evolution_bonus||C} → ${Me}${Q.length?` · ${Q.length} copie${Q.length>1?"s":""} sacrifiée${Q.length>1?"s":""}`:""} !`,"success",4e3),p(),f("collection")}),(ne=document.getElementById("market-sell-btn"))==null||ne.addEventListener("click",async()=>{var Se;const J=[...ve];if(!J.length){d("Sélectionne au moins un exemplaire","warning");return}const Q=parseInt((Se=document.getElementById("sell-market-price"))==null?void 0:Se.value);if(!Q||Q<1){d("Prix invalide","error");return}const{error:V}=await T.from("cards").update({is_for_sale:!0,sale_price:Q}).in("id",J);if(V){d(V.message,"error");return}const se=J.map(Me=>({seller_id:l.profile.id,card_id:Me,price:Q,status:"active"})),{error:he}=await T.from("market_listings").insert(se);he&&console.warn("[Market] insert listings:",he.message),d(`${J.length} carte${J.length>1?"s":""} mise${J.length>1?"s":""} en vente à ${Q.toLocaleString("fr")} cr. chacune !`,"success"),p(),f("collection")}),(ge=document.getElementById("cancel-sell-btn"))==null||ge.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),p(),f("collection")})}const Xt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function oi(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function po(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function uo(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function nn(e,t=44,i=58){var r;const s=e?oi(e):null,l=e?uo(e):null,d=po(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",p=vt[a]||"#555",f={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",n=(e==null?void 0:e.evolution_bonus)||0,g=(Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0)+(a===(e==null?void 0:e.job)||a===(e==null?void 0:e.job2)?n:0),b=Math.round(i*.19),y=Math.round(i*.25),w=i-b-y;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${f};background:${p};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${b}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${s?`<img src="${s}" style="position:absolute;top:${b}px;left:0;width:${t}px;height:${w}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${y}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${y+2}px;height:${y-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${y-4}px">🌍</span>`}
      <span style="font-size:${y-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${g}</span>
      ${l?`<img src="${l}" style="width:${y-4}px;height:${y-4}px;object-fit:contain">`:(r=e==null?void 0:e.clubs)!=null&&r.encoded_name?`<span style="font-size:${Math.max(4,y-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function fi(e,t){const{state:i,navigate:s,toast:l}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await T.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!a)return;const{data:p,error:f}=await T.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(f){l(f.message,"error");return}l("Deck créé !","success"),Ni(p.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Ni(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const p=prompt("Nouveau nom :",a.dataset.name);if(!p||p===a.dataset.name)return;const{error:f}=await T.from("decks").update({name:p}).eq("id",a.dataset.rename);if(f){l(f.message,"error");return}l("Deck renommé !","success"),fi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await T.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:p}=await T.from("decks").delete().eq("id",a.dataset.delete);if(p){l(p.message,"error");return}l("Deck supprimé.","success"),fi(e,t)})})}async function Ni(e,t,i){const{state:s,toast:l}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await T.from("decks").select("*").eq("id",e).single(),{data:a}=await T.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",s.profile.id),p=(a||[]).filter(c=>c.card_type==="player"&&c.player),f=(a||[]).filter(c=>c.card_type==="formation"),n=(a||[]).filter(c=>c.card_type==="stadium"),o=[...new Set(n.map(c=>c.stadium_id).filter(Boolean))];let g={};if(n.forEach(c=>{c.stadium_def&&c.stadium_id&&(g[c.stadium_id]=c.stadium_def)}),o.length&&Object.keys(g).length<o.length){const{data:c}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",o);(c||[]).forEach(I=>{g[I.id]=I})}const b=f.map(c=>c.formation).filter(Boolean),{data:y}=await T.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let w=d.formation||"4-4-2";b.length>0&&!b.includes(w)&&(w=b[0]);const r={deckId:e,name:d.name,formation:w,formationCardId:d.formation_card_id,stadiumCardId:d.stadium_card_id||null,slots:{},subs:[],playerCards:p,formationCards:f,stadiumCards:n,stadDefMap:g,availableFormations:b};(y||[]).forEach(c=>{c.is_starter?r.slots[c.position]=c.card_id:r.subs.includes(c.card_id)||r.subs.push(c.card_id)}),Lt(t,r,i)}function Lt(e,t,i){var f,n;const{navigate:s}=i;Xt[t.formation];const l=Ri(t.formation),d=l.filter(o=>t.slots[o]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Xt),p=t.subs.map(o=>t.playerCards.find(g=>g.id===o)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
          ${t.stadiumCards.map(o=>{var y;const g=t.stadDefMap[o.stadium_id],b=g?g.name+((y=g.club)!=null&&y.encoded_name?` (${g.club.encoded_name})`:g.country_code?` (${g.country_code})`:""):o.id.slice(0,8);return`<option value="${o.id}" ${t.stadiumCardId===o.id?"selected":""}>${b}</option>`}).join("")}
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
        ${p.map(o=>{const g=o.player;return`<div style="position:relative;flex-shrink:0">
            ${nn(g,44,58)}
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
  </div>`,rn(e,t,l,i),document.getElementById("builder-back").addEventListener("click",()=>s("decks")),document.getElementById("formation-select").addEventListener("change",o=>{t.formation=o.target.value;const g=Ri(t.formation),b={};g.forEach(y=>{t.slots[y]&&(b[y]=t.slots[y])}),t.slots=b,Lt(e,t,i)}),(f=document.getElementById("stadium-select"))==null||f.addEventListener("change",o=>{t.stadiumCardId=o.target.value||null}),document.getElementById("save-deck").addEventListener("click",()=>dn(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(o=>{o.addEventListener("click",()=>{t.subs=t.subs.filter(g=>g!==o.dataset.removeSub),Lt(e,t,i)})}),(n=document.getElementById("add-sub-btn"))==null||n.addEventListener("click",()=>{sn(t,e,i)})}function rn(e,t,i,s){var C,H,D;const l=e.querySelector("#deck-field");if(!l)return;const d=(C=t.stadiumCards)==null?void 0:C.find(G=>G.id===t.stadiumCardId),a=d&&((H=t.stadDefMap)==null?void 0:H[d.stadium_id])||null,p=Pt[t.formation]||{},f=Xi(t.formation)||[],n={};for(const G of i){const M=t.slots[G],U=M?t.playerCards.find(oe=>oe.id===M):null;n[G]=U?U.player:null}const o=300,g=300,b=48,y=64,w=13,r=16,c=38;function I(G){const M=p[G];return M?{x:M.x*o,y:M.y*g}:null}let L="";for(const[G,M]of f){const U=I(G),oe=I(M);if(!U||!oe)continue;const de=n[G]?{...n[G],club_id:n[G].club_id,country_code:n[G].country_code,rarity:n[G].rarity}:null,N=n[M]?{...n[M],club_id:n[M].club_id,country_code:n[M].country_code,rarity:n[M].rarity}:null,W=at(de,N);W==="#ff3333"||W==="#cc2222"?L+=`<line x1="${U.x.toFixed(1)}" y1="${U.y.toFixed(1)}" x2="${oe.x.toFixed(1)}" y2="${oe.y.toFixed(1)}" stroke="${W}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(L+=`<line x1="${U.x.toFixed(1)}" y1="${U.y.toFixed(1)}" x2="${oe.x.toFixed(1)}" y2="${oe.y.toFixed(1)}" stroke="${W}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,L+=`<line x1="${U.x.toFixed(1)}" y1="${U.y.toFixed(1)}" x2="${oe.x.toFixed(1)}" y2="${oe.y.toFixed(1)}" stroke="${W}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const G of i){const M=I(G);if(!M)continue;const U=n[G],oe=G.replace(/\d+/,""),de=vt[oe]||"#555",N=(M.x-b/2).toFixed(1),W=(M.y-y/2).toFixed(1),K={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[U==null?void 0:U.rarity]||"#aaa";if(U){const P=oi(U),re=uo(U),pe=po(U.country_code),ye=((D=U.card)==null?void 0:D.evolution_bonus)||U.evolution_bonus||0,Le=(Number(oe==="GK"?U.note_g:oe==="DEF"?U.note_d:oe==="MIL"?U.note_m:U.note_a)||0)+(oe===U.job||oe===U.job2?ye:0),ve=a&&(a.club_id&&String(U.club_id)===String(a.club_id)||a.country_code&&U.country_code===a.country_code),_e=ve?Le+10:Le,we=y-w-r;L+=`<defs><clipPath id="dcp-${G}"><rect x="${N}" y="${(M.y-y/2+w).toFixed(1)}" width="${b}" height="${we}"/></clipPath></defs>`,L+=`<rect x="${N}" y="${W}" width="${b}" height="${y}" rx="5" fill="${de}"/>`,P&&(L+=`<image href="${P}" x="${N}" y="${(M.y-y/2+w).toFixed(1)}" width="${b}" height="${we}" clip-path="url(#dcp-${G})" preserveAspectRatio="xMidYMin slice"/>`),L+=`<rect x="${N}" y="${W}" width="${b}" height="${w}" fill="rgba(255,255,255,0.93)"/>`,L+=`<text x="${M.x.toFixed(1)}" y="${(M.y-y/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(U.surname_encoded||"").slice(0,9)}</text>`;const Ae=(M.y+y/2-r).toFixed(1);L+=`<rect x="${N}" y="${Ae}" width="${b}" height="${r}" fill="rgba(255,255,255,0.93)"/>`,pe&&(L+=`<image href="${pe}" x="${(M.x-21).toFixed(1)}" y="${(M.y+y/2-r+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),L+=`<text x="${M.x.toFixed(1)}" y="${(M.y+y/2-r/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${_e}</text>`,re&&(L+=`<image href="${re}" x="${(M.x+b/2-14).toFixed(1)}" y="${(M.y+y/2-r+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),L+=`<rect x="${N}" y="${W}" width="${b}" height="${y}" rx="5" fill="none" stroke="${ve?"#E87722":K}" stroke-width="${ve?"2.5":"2"}"/>`,ve&&(L+=`<rect x="${(M.x+b/2-13).toFixed(1)}" y="${W}" width="13" height="9" rx="3" fill="#E87722"/>`,L+=`<text x="${(M.x+b/2-6.5).toFixed(1)}" y="${(M.y-y/2+4.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="900" fill="#fff" font-family="Arial">+10</text>`)}else L+=`<rect x="${N}" y="${W}" width="${b}" height="${y}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,L+=`<text x="${M.x.toFixed(1)}" y="${M.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,L+=`<text x="${M.x.toFixed(1)}" y="${(M.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${oe}</text>`;L+=`<rect x="${N}" y="${W}" width="${b}" height="${y}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${G}" style="cursor:pointer"/>`}l.innerHTML=`<svg viewBox="${-c} ${-c} ${o+c*2} ${g+c*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${L}</svg>`,l.querySelectorAll(".deck-slot-hit").forEach(G=>{G.addEventListener("click",()=>an(G.dataset.pos,t,e,s))})}function an(e,t,i,s){var b,y,w;const{openModal:l,closeModal:d}=s,a=e.replace(/\d+/,""),p=t.slots[e],f=p?t.playerCards.find(r=>r.id===p):null;(b=f==null?void 0:f.player)==null||b.id;const n=new Set;Object.entries(t.slots).forEach(([r,c])=>{var L;if(r===e||!c)return;const I=t.playerCards.find(C=>C.id===c);(L=I==null?void 0:I.player)!=null&&L.id&&n.add(I.player.id)}),t.subs.forEach(r=>{var I;const c=t.playerCards.find(L=>L.id===r);(I=c==null?void 0:c.player)!=null&&I.id&&n.add(c.player.id)});const o=new Set,g=t.playerCards.filter(r=>{const c=r.player;return!(c.job===a||c.job2===a)||n.has(c.id)||o.has(c.id)?!1:(o.add(c.id),!0)});g.sort((r,c)=>{card!=null&&card.evolution_bonus;const I=r.evolution_bonus||0,L=c.evolution_bonus||0,C=(a==="GK"?r.player.note_g:a==="DEF"?r.player.note_d:a==="MIL"?r.player.note_m:r.player.note_a)+(a===r.player.job||a===r.player.job2?I:0);return(a==="GK"?c.player.note_g:a==="DEF"?c.player.note_d:a==="MIL"?c.player.note_m:c.player.note_a)+(a===c.player.job||a===c.player.job2?L:0)-C}),l(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?g.map(r=>{var D,G;const c=r.player,I=card.evolution_bonus||0,L=(a==="GK"?c.note_g:a==="DEF"?c.note_d:a==="MIL"?c.note_m:c.note_a)+(a===c.job||a===c.job2?I:0),C=oi(c),H={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[c.rarity];return`<div class="player-option" data-card-id="${r.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <!-- Portrait -->
          <div style="width:44px;height:44px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[a]}">
            ${C?`<img src="${C}" style="width:100%;height:100%;object-fit:cover">`:`<div style="width:100%;height:100%;background:${vt[a]};display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${a}</div>`}
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
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(y=document.getElementById("close-selector"))==null||y.addEventListener("click",d),(w=document.getElementById("remove-player"))==null||w.addEventListener("click",()=>{delete t.slots[e],d(),Lt(i,t,s)}),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{t.slots[e]=r.dataset.cardId,d(),Lt(i,t,s)})})}function sn(e,t,i){var f;const{openModal:s,closeModal:l}=i,d=new Set;Object.values(e.slots).filter(Boolean).forEach(n=>{var g;const o=e.playerCards.find(b=>b.id===n);(g=o==null?void 0:o.player)!=null&&g.id&&d.add(o.player.id)}),e.subs.forEach(n=>{var g;const o=e.playerCards.find(b=>b.id===n);(g=o==null?void 0:o.player)!=null&&g.id&&d.add(o.player.id)});const a=new Set,p=e.playerCards.filter(n=>{var o,g,b;return d.has((o=n.player)==null?void 0:o.id)||a.has((g=n.player)==null?void 0:g.id)?!1:(a.add((b=n.player)==null?void 0:b.id),!0)});s("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${p.length>0?p.map(n=>{var y;const o=n.player,g=oi(o),b=(o.job==="GK"?o.note_g:o.job==="DEF"?o.note_d:o.job==="MIL"?o.note_m:o.note_a)+(card.evolution_bonus||0);return`<div class="player-option" data-card-id="${n.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[o.job]}">
            ${g?`<img src="${g}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${o.firstname} ${o.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${o.job} · ${o.country_code} · ${((y=o.clubs)==null?void 0:y.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${vt[o.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${b}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(f=document.getElementById("close-sub-selector"))==null||f.addEventListener("click",l),document.querySelectorAll(".player-option").forEach(n=>{n.addEventListener("click",()=>{e.subs.push(n.dataset.cardId),l(),Lt(t,e,i)})})}async function dn(e,t){const{state:i,toast:s,navigate:l}=t,d=e.formationCards.find(f=>f.formation===e.formation),a=(d==null?void 0:d.id)||e.formationCardId;await T.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await T.from("deck_cards").delete().eq("deck_id",e.deckId);const p=[];if(Object.entries(e.slots).forEach(([f,n],o)=>{p.push({deck_id:e.deckId,card_id:n,position:f,is_starter:!0,slot_order:o})}),e.subs.forEach((f,n)=>{p.push({deck_id:e.deckId,card_id:f,position:`SUB${n+1}`,is_starter:!1,slot_order:100+n})}),p.length>0){const{error:f}=await T.from("deck_cards").insert(p);if(f){s(f.message,"error");return}}s("Deck enregistré ✅","success"),l("decks")}function Ri(e){const t=Xt[e]||Xt["4-4-2"],i=["GK1"];for(let s=1;s<=t.DEF;s++)i.push(`DEF${s}`);for(let s=1;s<=t.MIL;s++)i.push(`MIL${s}`);for(let s=1;s<=t.ATT;s++)i.push(`ATT${s}`);return i}async function fo(){const{data:e}=await T.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await T.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(s=>s.booster_id===i.id)}))}function ln(e){if(!(e!=null&&e.length))return null;const t=e.reduce((s,l)=>s+Number(l.percentage),0);let i=Math.random()*t;for(const s of e)if(i-=Number(s.percentage),i<=0)return s;return e[e.length-1]}const go=()=>Object.keys(Pt),cn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],gi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function pn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Oi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},un={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},fn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Hi(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function gn(e){var o,g;const t=e.player;if(!t)return"";const i=t.job||"ATT",s=Oi[i],l=un[t.rarity]||"#ccc",d=Hi(t,i),a=t.job2?Hi(t,t.job2):null,p=t.job2?Oi[t.job2]:null,f=pn(t),n=fn[t.country_code]||t.country_code||"";return`
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
        ${(o=t.clubs)!=null&&o.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((g=t.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function mo(e){var l;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const i=((l=Object.entries(t).sort((d,a)=>a[1]-d[1])[0])==null?void 0:l[0])||"player",s=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+s,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_raw:e}}async function mn(e,{state:t,navigate:i,toast:s}){var b,y;const l=((b=t.profile)==null?void 0:b.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await fo()).map(mo)}catch(w){console.warn("Erreur chargement boosters DB, fallback hardcodé",w)}d.length||(d=cn.map(w=>({...w,rates:[],isPub:w.id==="players_pub"})));const a=await T.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(w=>w.data||[]),p=new Set(a.filter(w=>w.card_type==="stadium").map(w=>w.stadium_id)),f=new Set(a.filter(w=>w.card_type==="formation").map(w=>w.formation)),n=new Set(a.filter(w=>w.card_type==="game_changer").map(w=>w.gc_type)),o={};for(const w of d){if(w.allow_duplicates!==!1||!((y=w.rates)!=null&&y.length))continue;const r=[...new Set((w.rates||[]).map(I=>I.card_type))];let c=!1;for(const I of r)if(I==="stadium"){const{data:L}=await T.from("stadium_definitions").select("id");if((L||[]).some(C=>!p.has(C.id))){c=!0;break}}else if(I==="game_changer"){const{data:L}=await T.from("gc_definitions").select("name").eq("is_active",!0);if((L||[]).some(C=>!n.has(C.name))){c=!0;break}}else if(I==="formation"){const{FORMATION_LINKS:L}=await ii(async()=>{const{FORMATION_LINKS:C}=await import("./formation-links-Dnttc-Cp.js").then(H=>H.m);return{FORMATION_LINKS:C}},__vite__mapDeps([0,1]));if(Object.keys(L).some(C=>!f.has(C))){c=!0;break}}else{c=!0;break}c||(o[w.id]=!0)}const g=Ai();e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${l.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${d.map(w=>{const r=w.cost===0||l>=w.cost,c=o[w.id]===!0,I=w.isPub&&g.remaining<=0;return`<div class="booster-card ${!r||c||I?"disabled":""}" data-booster="${w.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${w.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            ${w.isPub?`<div style="position:absolute;top:6px;left:6px;background:${g.remaining>0?"#1A6B3C":"#888"};color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;z-index:2">${g.remaining}/${Qt}</div>`:""}
            <div class="icon"><img src="${w.img}" alt="${w.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${w.name}</div>
            <div class="desc">${w.sub}</div>
            <div class="cost">${w.costLabel}</div>
            ${r?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${c?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
            ${I?'<div style="font-size:10px;color:#c0392b;margin-top:4px">Quota atteint — reviens demain</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(w=>{w.addEventListener("click",async()=>{const r=d.find(c=>c.id===w.dataset.booster);if(r){w.style.opacity="0.5",w.style.pointerEvents="none";try{await xn(r,{state:t,toast:s,navigate:i,container:e})}catch(c){s(c.message,"error"),w.style.opacity="",w.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(w=>{w.addEventListener("click",r=>{r.stopPropagation();const c=d.find(I=>I.id===w.dataset.boosterId);vn(c)})})}async function xn(e,{state:t,toast:i,navigate:s,container:l}){var g,b;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub){if(Ai().remaining<=0){i(`Quota atteint — revenez demain (${Qt} pubs/jour max)`,"error");return}try{await kn(),_n()}catch(w){i(w.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}}const{data:d}=await T.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((d||[]).filter(y=>y.card_type==="player").map(y=>y.player_id)),p=new Set((d||[]).filter(y=>y.card_type==="formation").map(y=>y.formation));let f=[],n=null;try{if((g=e.rates)!=null&&g.length)f=await mi(t.profile,e);else{const y=e.type||"player";y==="player"?f=await xo(t.profile,e.cardCount,e.cost):y==="game_changer"?f=await yo(t.profile,e.cardCount,e.cost):y==="formation"?f=await bo(t.profile,e.cost):f=await mi(t.profile,e)}}catch(y){n=y.message||String(y),console.error("[Booster] Erreur:",y)}if(!(f!=null&&f.length)){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",y.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${n||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(y),(b=y.querySelector("#anim-close-err"))==null||b.addEventListener("click",()=>y.remove());return}f.forEach(y=>{y.card_type==="player"&&y.player?y.isDuplicate=a.has(y.player.id):y.card_type==="formation"&&(y.isDuplicate=p.has(y.formation))});const{data:o}=await T.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),ho(f,e,s)}function yn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function bn(e,t){let i;switch(t){case"legende":i=e.filter(s=>s.rarity==="legende"),i.length||(i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte")),i.length||(i=e.filter(s=>mt(s)>=6));break;case"special":i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte"),i.length||(i=e.filter(s=>mt(s)>=6));break;case"normal_high":i=e.filter(s=>s.rarity==="normal"&&mt(s)>=6),i.length||(i=e.filter(s=>mt(s)>=6));break;default:i=e.filter(s=>s.rarity==="normal"&&mt(s)>=1&&mt(s)<=5),i.length||(i=e.filter(s=>s.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function mi(e,t){if(t.cost>0){const{error:b}=await T.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(b)throw b}const i=t.allow_duplicates!==!1;let s=[];const{data:l,error:d}=await T.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(d){const{data:b}=await T.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);s=b||[]}else s=l||[];const a=new Set(s.filter(b=>b.card_type==="player").map(b=>b.player_id)),p=new Set(s.filter(b=>b.card_type==="formation").map(b=>b.formation)),f=new Set(s.filter(b=>b.card_type==="game_changer").map(b=>b.gc_type)),n=new Set(s.filter(b=>b.card_type==="stadium").map(b=>b.stadium_id).filter(Boolean)),o=new Set,g=[];for(let b=0;b<(t.cardCount||5);b++){const y=ln(t.rates);if(y){if(y.card_type==="player"){const w=M=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[M]||M,r=y.rarity?w(y.rarity):null;let c=T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);r&&(c=c.eq("rarity",r));const{data:I}=await c;let L=I||[];if((y.note_min||y.note_max)&&(L=L.filter(M=>{const U=Math.max(Number(M.note_g)||0,Number(M.note_d)||0,Number(M.note_m)||0,Number(M.note_a)||0);return(!y.note_min||U>=y.note_min)&&(!y.note_max||U<=y.note_max)})),L.length||(y.note_min||y.note_max?(L=I||[],console.warn("[Booster] Aucun joueur avec note",y.note_min,"-",y.note_max,"— fallback rareté uniquement")):L=I||[]),!L.length)continue;let C=L.filter(M=>!o.has(M.id));if(i)C.length||(C=L);else if(C=C.filter(M=>!a.has(M.id)),!C.length)continue;const H=C[Math.floor(Math.random()*C.length)];o.add(H.id);const D=a.has(H.id),{data:G}=await T.from("cards").insert({owner_id:e.id,player_id:H.id,card_type:"player"}).select().single();G&&(g.push({...G,player:H,isDuplicate:D}),T.rpc("record_transfer",{p_card_id:G.id,p_player_id:H.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(y.card_type==="game_changer"){const{data:w}=await T.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),r=w!=null&&w.length?w:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=i?r:r.filter(H=>!f.has(H.name));if(!i&&!c.length)continue;const L=c[Math.floor(Math.random()*c.length)].name,{data:C}=await T.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:L}).select().single();C&&g.push(C)}else if(y.card_type==="formation"){const w=go(),r=i?w:w.filter(C=>!p.has(C));if(!i&&!r.length)continue;const c=r[Math.floor(Math.random()*r.length)],I=p.has(c),{data:L}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();L!=null&&L[0]&&g.push({...L[0],isDuplicate:I})}else if(y.card_type==="stadium"){const{data:w,error:r}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(r){console.error("[Booster] stadium_definitions:",r.message);continue}if(!(w!=null&&w.length)){console.warn("[Booster] Aucun stade en DB");continue}const c=i?w:w.filter(H=>!n.has(H.id));if(!i&&!c.length)continue;const I=c[Math.floor(Math.random()*c.length)],{data:L,error:C}=await T.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:I.id}).select("id,card_type,stadium_id").single();if(C){console.error("[Booster] insert stadium card:",C.message);continue}L&&g.push({...L,rarity:"normal",_stadiumDef:I})}}}return g}async function xo(e,t,i){if(i>0){const{error:n}=await T.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n}const{data:s}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(s!=null&&s.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const l=s.filter(n=>n.job==="GK"),d=s.filter(n=>n.job!=="GK"),a=!e.first_booster_opened&&l.length>0,p=[];for(let n=0;n<t;n++){const o=n===0&&a?l:n===0?d:s,g=yn(),b=bn(o,g);b&&p.push(b)}a&&await T.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:f}=await T.from("cards").insert(p.map(n=>({owner_id:e.id,player_id:n.id,card_type:"player"}))).select();return(f||[]).forEach((n,o)=>{T.rpc("record_transfer",{p_card_id:n.id,p_player_id:p[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),p.map((n,o)=>({...f[o],player:n}))}async function yo(e,t,i){const{error:s}=await T.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s;const{data:l}=await T.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=l!=null&&l.length?l:Object.keys(gi).map(o=>({name:o,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const o=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:p,error:f}=await T.from("cards").insert(a).select();return f&&console.error("[Booster GC] Erreur insert:",f.message,f),(p||[]).map(o=>{const g=l==null?void 0:l.find(b=>b.name===o.gc_type||b.id===o.gc_definition_id);return{...o,_gcDef:g||null}})}async function bo(e,t){const{error:i}=await T.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:s}=await T.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),l=new Set((s||[]).map(o=>o.formation)),d=go(),a=d[Math.floor(Math.random()*d.length)],p=l.has(a),{data:f,error:n}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return n&&console.error("[Booster Formation] Erreur insert:",n.message,n),(f||[]).map(o=>({...o,isDuplicate:p}))}function ho(e,t,i,s=null){var W,K;if(!e||e.length===0){const P=document.createElement("div");P.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",P.innerHTML=`
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
  `,document.body.appendChild(l);let d=!1;const a=document.getElementById("pack-cut-zone"),p=document.getElementById("pack-blade");let f=!1;const n=P=>P.touches&&P.touches[0]?P.touches[0].clientX:P.clientX;function o(P){d||(f=!0,p.style.opacity="1",g(P))}function g(P){if(!f||d)return;const re=a.getBoundingClientRect(),pe=n(P)-re.left,ye=Math.max(0,Math.min(1,pe/re.width));p.style.width=ye*re.width+"px",ye>=.82&&y()}function b(){d||(f=!1,p.style.transition="width .2s ease, opacity .2s ease",p.style.width="0",p.style.opacity="0",setTimeout(()=>{d||(p.style.transition="")},220))}function y(){var re;if(d)return;d=!0,f=!1,p.style.width="100%",p.style.opacity="1",(re=document.getElementById("cut-flash"))==null||re.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const P=document.getElementById("cut-hint");P&&(P.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{p.style.opacity="0",document.getElementById("pack-phase").style.display="none",I(0)},620)}a.addEventListener("pointerdown",o),window.addEventListener("pointermove",g),window.addEventListener("pointerup",b),a.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",b);let w=0,r=!1;const c=new Set;function I(P){w=P,document.getElementById("reveal-phase").style.display="flex",L(),C(P,0),U()}function L(){const P=document.getElementById("card-dots");P&&(P.innerHTML=e.map((re,pe)=>`<div class="card-dot" data-i="${pe}" style="width:8px;height:8px;border-radius:50%;background:${pe===w?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),P.querySelectorAll(".card-dot").forEach(re=>re.addEventListener("click",()=>D(parseInt(re.dataset.i)))))}function C(P,re){var xe;const pe=e[P],ye=document.getElementById("card-counter"),Le=document.getElementById("card-track");ye&&(ye.textContent=`Carte ${P+1} / ${e.length}`);const ve=document.getElementById("reveal-btns");ve&&(ve.style.display=P===e.length-1?"flex":"none");const _e=pe.card_type==="player"&&((xe=pe.player)==null?void 0:xe.rarity)==="legende",we=!c.has(P);c.add(P);let Ae=0;if(pe.card_type==="player"&&pe.player){const X=pe.player,ne=X.job||"ATT";Ae=Number(ne==="GK"?X.note_g:ne==="DEF"?X.note_d:ne==="MIL"?X.note_m:X.note_a)||0}const Ie=X=>{Le.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${_e?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${hn(pe)}</div>
          ${pe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const ne=document.getElementById("current-card-wrap");re!==0?(ne.style.transition="none",ne.style.transform=`translateX(${re>0?100:-100}%)`,requestAnimationFrame(()=>{ne.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ne.style.transform="translateX(0)"})):ne.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),X||_e?de():N(),L()};we&&Ae>6&&pe.card_type==="player"&&pe.player?H(pe,()=>Ie(!0)):Ie(!1)}function H(P,re){var Ae;r=!0;const pe=P.player,ye=`https://flagsapi.com/${pe.country_code}/flat/64.png`,Le=(Ae=pe.clubs)==null?void 0:Ae.logo_url,ve=document.getElementById("walkout-overlay"),_e=document.getElementById("walkout-stage");if(!ve||!_e){r=!1,re();return}ve.style.display="flex";const we=()=>{const Ie=_e.firstElementChild;Ie&&(Ie.classList.remove("wo-in"),Ie.classList.add("wo-out"))};_e.innerHTML=`<img class="wo-in" src="${ye}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(we,2e3),setTimeout(()=>{var Ie;_e.innerHTML=Le?`<img class="wo-in" src="${Le}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((Ie=pe.clubs)==null?void 0:Ie.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(we,4450),setTimeout(()=>{ve.style.display="none",_e.innerHTML="",r=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),re()},4900)}function D(P){if(r||P<0||P>=e.length||P===w)return;const re=P>w?1:-1;w=P,C(P,re)}function G(){D(w+1)}function M(){D(w-1)}function U(){const P=document.getElementById("card-viewport");if(!P||P._swipeBound)return;P._swipeBound=!0;let re=0,pe=0,ye=0,Le=!1;const ve=xe=>xe.touches?xe.touches[0].clientX:xe.clientX,_e=xe=>xe.touches?xe.touches[0].clientY:xe.clientY,we=xe=>{Le=!0,re=ve(xe),pe=_e(xe),ye=0},Ae=xe=>{if(!Le)return;ye=ve(xe)-re;const X=_e(xe)-pe;if(Math.abs(ye)<Math.abs(X))return;const ne=document.getElementById("current-card-wrap");ne&&(ne.style.transition="none",ne.style.transform=`translateX(${ye*.6}px) rotate(${ye*.02}deg)`)},Ie=()=>{if(!Le)return;Le=!1;const xe=document.getElementById("current-card-wrap"),X=55;ye<=-X&&w<e.length-1?G():ye>=X&&w>0?M():xe&&(xe.style.transition="transform .2s ease",xe.style.transform="translateX(0)")};P.addEventListener("pointerdown",we),P.addEventListener("pointermove",Ae),P.addEventListener("pointerup",Ie),P.addEventListener("pointercancel",Ie),P.addEventListener("touchstart",we,{passive:!0}),P.addEventListener("touchmove",Ae,{passive:!0}),P.addEventListener("touchend",Ie),P.addEventListener("click",xe=>{if(Math.abs(ye)>8)return;const X=P.getBoundingClientRect();xe.clientX-X.left>X.width/2?G():M()})}let oe=null;function de(){const P=document.getElementById("fireworks-canvas");if(!P)return;P.width=window.innerWidth,P.height=window.innerHeight;const re=P.getContext("2d"),pe=[];function ye(){const ve=Math.random()*P.width,_e=Math.random()*P.height*.6,we=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Ae=we[Math.floor(Math.random()*we.length)];for(let Ie=0;Ie<60;Ie++){const xe=Math.PI*2/60*Ie,X=2+Math.random()*5;pe.push({x:ve,y:_e,vx:Math.cos(xe)*X,vy:Math.sin(xe)*X,alpha:1,color:Ae,size:2+Math.random()*3})}}ye(),oe=setInterval(ye,600);function Le(){if(document.getElementById("fireworks-canvas")){re.clearRect(0,0,P.width,P.height);for(let ve=pe.length-1;ve>=0;ve--){const _e=pe[ve];if(_e.x+=_e.vx,_e.y+=_e.vy+.08,_e.vy*=.98,_e.alpha-=.018,_e.alpha<=0){pe.splice(ve,1);continue}re.globalAlpha=_e.alpha,re.fillStyle=_e.color,re.beginPath(),re.arc(_e.x,_e.y,_e.size,0,Math.PI*2),re.fill()}re.globalAlpha=1,(oe!==null||pe.length>0)&&requestAnimationFrame(Le)}}Le()}function N(){oe!==null&&(clearInterval(oe),oe=null);const P=document.getElementById("fireworks-canvas");P&&P.getContext("2d").clearRect(0,0,P.width,P.height)}if(s){const P=document.getElementById("reveal-btns");P&&(P.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(K=document.getElementById("reveal-next"))==null||K.addEventListener("click",()=>{N(),l.remove(),s()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{N(),l.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{N(),l.remove(),i("boosters")})}function hn(e){var t,i,s,l;if(e.card_type==="player"&&e.player)return gn(e);if(e.card_type==="game_changer"){const d=e._gcDef,a=(d==null?void 0:d.gc_type)==="ultra_game_changer",p={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},f={purple:"#b06ce0",light_blue:"#00d4ef"},n=p[d==null?void 0:d.color]||p.purple,o=f[d==null?void 0:d.color]||f.purple,g=(d==null?void 0:d.name)||e.gc_type||"Game Changer",b=(d==null?void 0:d.effect)||((t=gi[e.gc_type])==null?void 0:t.desc)||"",y=d!=null&&d.image_url?`/icons/${d.image_url}`:null,w=((i=gi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${n};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${g.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${g}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${y?`<img src="${y}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${w}</span>`}
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
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function vn(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const l={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};s.innerHTML=`
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
      </div>`,document.body.appendChild(s),s.addEventListener("click",a=>{a.target===s&&s.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>s.remove());return}wn()}function wn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}const Qt=3;function Ai(){const e=new Date().toISOString().slice(0,10);try{const t=localStorage.getItem("mw_ads_quota"),i=t?JSON.parse(t):null;if((i==null?void 0:i.date)===e)return{watched:i.watched||0,remaining:Qt-(i.watched||0)}}catch{}return{watched:0,remaining:Qt}}function _n(){const e=new Date().toISOString().slice(0,10);try{const t=Ai();localStorage.setItem("mw_ads_quota",JSON.stringify({date:e,watched:t.watched+1}))}catch{}}const $n="simulation",vo="VOTRE_ZONE_ID";function kn(){switch($n){case"propellerads":return En();case"adsense":return Tn();default:return zi()}}function zi(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:#111;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4000;color:#fff;gap:14px";let i=5;t.innerHTML=`
      <div style="font-size:52px">📺</div>
      <div style="font-size:17px;font-weight:700;color:rgba(255,255,255,0.8)">Publicité</div>
      <div style="font-size:42px;font-weight:900" id="ad-cd">5</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.4)">Regardez pour ouvrir le booster</div>
      <button id="ad-skip" disabled style="margin-top:8px;padding:10px 24px;border-radius:20px;border:none;background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.4);font-size:13px;cursor:default">
        Passer (5)
      </button>`,document.body.appendChild(t);const s=setInterval(()=>{i--;const l=document.getElementById("ad-cd"),d=document.getElementById("ad-skip");l&&(l.textContent=i),d&&(d.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(s),d&&(d.disabled=!1,d.style.cssText=d.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),d==null||d.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function En(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(zi());window.propeller.push({zone_id:vo,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function Tn(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(zi());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:vo,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}async function An(e,{state:t,navigate:i,toast:s,refreshProfile:l}){var b,y;const{data:d}=await T.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let a=Array.isArray((b=t.profile)==null?void 0:b.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await T.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let p=null;try{const r=(await fo()).find(c=>(c.name||"").toLowerCase().includes("new player"));r&&(p=mo(r))}catch(w){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',w)}const f=a.length;let n=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await T.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function g(){var L;if(n>=f||!a.length){await T.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),l&&await l(),s("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const w=a[0],{data:r}=await T.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let c=[];try{if(w.type==="formation")c=await bo(t.profile,0);else if(w.type==="game_changer")c=await yo(t.profile,w.count||3,0);else if(p&&((L=p.rates)!=null&&L.length)){const C={...p,cost:0,cardCount:w.count||p.cardCount||5};c=await mi(t.profile,C),w.guaranteeGK&&!t.profile.first_booster_opened&&(c.some(D=>D.player&&D.player.job==="GK")||await zn(t.profile,c),await T.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else c=await xo(t.profile,w.count||5,0)}catch(C){s(C.message||"Erreur ouverture booster","error");return}a.shift(),n++,await o();const I=w.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:w.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${n}/${f})`,img:(p==null?void 0:p.img)||"/icons/booster-players.png"};ho(c,I,i,()=>{g()})}(y=document.getElementById("onboard-start"))==null||y.addEventListener("click",()=>g())}async function zn(e,t){try{const{data:i}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const s=i[Math.floor(Math.random()*i.length)],l=t.findIndex(a=>a.player);if(l===-1)return;const d=t[l];await T.from("cards").update({player_id:s.id}).eq("id",d.id),t[l]={...d,player_id:s.id,player:s}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const It={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Mt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function wt(e,t,i,s,l){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${s}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",l)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function xi(e,t){var d,a;const i=e.player,s=e.evolution_bonus||0,l=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?s:0)+(i.job2==="GK"&&l>0?s:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?s:0)+(i.job2==="DEF"&&l>0?s:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?s:0)+(i.job2==="MIL"&&l>0?s:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?s:0)+(i.job2==="ATT"&&l>0?s:0),evolution_bonus:s,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((d=i.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ht(e,t){if(!t||!e)return e;const{club_id:i,country_code:s}=t;return Object.values(e).forEach(l=>{Array.isArray(l)&&l.forEach(d=>{const a=i&&String(d.club_id)===String(i),p=s&&String(d.country_code)===String(s);(a||p)&&(d.stadiumBonus=!0)})}),e}function ni(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:s}=t;return e.forEach(l=>{if(!l)return;const d=i&&String(l.club_id)===String(i),a=s&&String(l.country_code)===String(s);(d||a)&&(l.stadiumBonus=!0)}),e}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function ri(){const e=Math.random()*100;return e<10?3:e<30?2:1}function yt(e,t){const i=It[t]||It["4-4-2"],s={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const p=e.filter(n=>n.position&&n.position.replace(/\d+$/,"")===a).sort((n,o)=>parseInt(n.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(n=>({...n,_line:a})),f=lt(p.length);p.forEach((n,o)=>{n._col=f[o]}),s[a]=p}return s}const d=[...e];for(const a of["GK","DEF","MIL","ATT"]){const p=[];for(let n=0;n<i[a];n++){let o=d.findIndex(g=>g.job===a);if(o===-1&&(o=d.findIndex(g=>g.job2===a)),o===-1&&(o=0),d[o]){const g={...d[o],_line:a};p.push(g),d.splice(o,1)}}const f=lt(p.length);p.forEach((n,o)=>{n._col=f[o]}),s[a]=p}return s}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ai(e,t,i){const l=new Set,d=t.filter(o=>{const g=o.gc_type||o.id;return l.has(g)?!1:(l.add(g),!0)});let a=[];function p(o,g){const b=o._gcDef,y={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},w={purple:"#9b59b6",light_blue:"#00bcd4"},r=y[b==null?void 0:b.color]||y.purple,c=w[b==null?void 0:b.color]||w.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${g?"#FFD700":c};background:${r};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${g?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${g?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((b==null?void 0:b.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(b==null?void 0:b.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${b!=null&&b.image_url?`<img src="/icons/${b.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((b==null?void 0:b.effect)||"").slice(0,50)}</span>
      </div>
      ${g?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const f=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function n(){var g,b,y;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=a.length>0;e.innerHTML=`
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
        ${d.map(w=>{const r=a.find(c=>c.gc_type===w.gc_type);return p(w,!!r)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(w=>{w.addEventListener("click",()=>{const r=w.dataset.id,c=d.find(L=>L.id===r);if(!c)return;const I=a.findIndex(L=>L.gc_type===c.gc_type);I>-1?a.splice(I,1):a.length<3&&a.push(c),n()})}),(g=e.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>{o&&f(a)}),(b=e.querySelector("#gc-no-gc"))==null||b.addEventListener("click",()=>f([])),(y=e.querySelector("#gc-reset"))==null||y.addEventListener("click",()=>{a.length&&(a=[],n())})}n()}function Sn(e){var s;const t=((s=e==null?void 0:e.state)==null?void 0:s.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function Ln(e,t,i){const{state:s,navigate:l}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await T.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",s.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){wt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>l("decks"));return}const a=d.map(b=>b.id),{data:p}=await T.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),f=[...new Set((p||[]).filter(b=>{var y,w;return((y=b.card)==null?void 0:y.card_type)==="stadium"&&((w=b.card)==null?void 0:w.stadium_id)}).map(b=>b.card.stadium_id))],n={};if(f.length){const{data:b}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",f);(b||[]).forEach(y=>{n[y.id]=y}),(p||[]).forEach(y=>{var w,r;((w=y.card)==null?void 0:w.card_type)==="stadium"&&((r=y.card)!=null&&r.stadium_id)&&(y.card._stadiumDef=n[y.card.stadium_id]||null)})}let o=0;function g(){var D,G,M,U,oe,de,N;const b=d[o],y=(p||[]).filter(W=>W.deck_id===b.id),w=y.filter(W=>{var K;return W.is_starter&&((K=W.card)==null?void 0:K.player)}).map(W=>xi(W.card,W.position)),r=y.find(W=>{var K;return((K=W.card)==null?void 0:K.card_type)==="formation"}),c=b.formation||((D=r==null?void 0:r.card)==null?void 0:D.formation)||"4-4-2";let I=w.length>=11?yt(w,c):null,L=((G=b.stadium_card)==null?void 0:G.stadium_def)||null;L&&I&&(I=Ht(I,L));const C=w.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Sn(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===0?"0.1":"0.3"});color:${o===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${b.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${c} · ${w.length}/11 ${b.is_active?"· ⭐ Actif":""}</div>
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
              <div>Deck incomplet (${w.length}/11)</div>
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
          background:${C?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${C?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${C?"pointer":"default"}">
          ${C?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const K=e.querySelector(".deck-preview-wrap svg");K&&(K.removeAttribute("width"),K.removeAttribute("height"),K.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",K.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(U=document.getElementById("prev-deck"))==null||U.addEventListener("click",()=>{o>0&&(o--,g())}),(oe=document.getElementById("next-deck"))==null||oe.addEventListener("click",()=>{o<d.length-1&&(o++,g())}),(de=document.getElementById("validate-deck"))==null||de.addEventListener("click",()=>{if(!C)return;const W=t.state.params||{};t.navigate("match",{...W,matchMode:W.matchMode||i,deckId:b.id})}),(N=document.getElementById("cancel-deck-select"))==null||N.addEventListener("click",()=>{We(e),l("home")});const H=document.getElementById("deck-swipe-zone");if(H){let W=0,K=0;H.addEventListener("touchstart",P=>{W=P.touches[0].clientX,K=P.touches[0].clientY},{passive:!0}),H.addEventListener("touchend",P=>{const re=P.changedTouches[0].clientX-W,pe=P.changedTouches[0].clientY-K;Math.abs(re)<40||Math.abs(re)<Math.abs(pe)||(re<0&&o<d.length-1?(o++,g()):re>0&&o>0&&(o--,g()))},{passive:!0})}}g()}function wo(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ye(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const s=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),l=wo(e),d=e._line||e.job||"MIL",a=Mt[d]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",f=e.note!==void 0?Number(e.note)||0:(Number(je(e,d))||0)+(e.boost||0),n=_o(e==null?void 0:e.country_code),o=Math.round(i*.19),g=Math.round(i*.25),b=i-Math.round(i*.19)-Math.round(i*.25),y=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${p};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${y}">
    <div style="position:absolute;top:0;left:0;right:0;height:${o}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${s&&!(e!=null&&e.used)?`<img src="${s}" style="position:absolute;top:${o}px;left:0;width:${t}px;height:${b}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Zt(e==null?void 0:e.country_code)?`<img src="${Zt(e.country_code)}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">${n}</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":f}</span>
      ${l?`<img src="${l}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ot(e,t,i){if(!(e!=null&&e.length))return"";const s=e.slice(0,5);let l='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return s.forEach((d,a)=>{if(l+=Ye(d,40,52),a<s.length-1){const p=at(d,s[a+1]);l+=`<div style="width:7px;height:3px;background:${p==="#ff3333"||p==="#cc2222"?"rgba(255,255,255,0.12)":p};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(l+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),l+="</div>",l}function Zt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function _o(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ut(e,t,i,s,l=310,d=310,a=[]){var C;const p=Pt[t]||{},f=Xi(t)||vi[t]||[],n={},o=["ATT","MIL","DEF","GK"];for(const H of o)(e[H]||[]).forEach((G,M)=>{n[`${H}${M+1}`]=G});function g(H){const D=p[H];return D?{x:D.x*l,y:D.y*d}:null}let b="";for(const[H,D]of f){const G=g(H),M=g(D);if(!G||!M)continue;const U=n[H],oe=n[D],de=at(U,oe);de==="#00ff88"||de==="#FFD700"?(b+=`<line x1="${G.x.toFixed(1)}" y1="${G.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${de}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,b+=`<line x1="${G.x.toFixed(1)}" y1="${G.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${de}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):b+=`<line x1="${G.x.toFixed(1)}" y1="${G.y.toFixed(1)}" x2="${M.x.toFixed(1)}" y2="${M.y.toFixed(1)}"
        stroke="${de}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const y=48,w=64,r=13,c=16,I={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[H,D]of Object.entries(n)){const G=g(H);if(!G||!D)continue;const M=H.replace(/[0-9]/g,""),U=Mt[M]||"#555",oe=a.includes(D.cardId),de=i==="attack"&&(["MIL","ATT"].includes(M)||oe)&&!D.used||i==="defense"&&["GK","DEF","MIL"].includes(M)&&!D.used,N=s.includes(D.cardId);let W;i==="attack"?W=oe?Math.max(1,Number(D.note_a)||0):M==="MIL"?Number(D.note_m)||0:Number(D.note_a)||0:i==="defense"?W=M==="GK"?Number(D.note_g)||0:M==="MIL"?Number(D.note_m)||0:Number(D.note_d)||0:W=Number(M==="GK"?D.note_g:M==="DEF"?D.note_d:M==="MIL"?D.note_m:D.note_a)||0,W=W+(D.boost||0),D.stadiumBonus&&(i==="attack"&&(M==="ATT"||M==="MIL")||i==="defense"&&(M==="GK"||M==="DEF"||M==="MIL")?W+=10:i||(W+=10));const K=(G.x-y/2).toFixed(1),P=(G.y-w/2).toFixed(1),re=I[D==null?void 0:D.rarity]||I.normal;if(D.used){const Ae=typeof import.meta<"u"&&"/"||"/",xe=`${typeof window<"u"&&((C=window.location)==null?void 0:C.origin)||""}${Ae}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");b+=`<rect x="${K}" y="${P}" width="${y}" height="${w}" rx="5" fill="#161616"/>`,b+=`<image href="${xe}" xlink:href="${xe}" x="${K}" y="${P}" width="${y}" height="${w}" preserveAspectRatio="xMidYMid slice"/>`,b+=`<rect x="${K}" y="${P}" width="${y}" height="${w}" rx="5" fill="none" stroke="${re}" stroke-width="2" opacity="0.7"/>`,b+=`<rect x="${K}" y="${P}" width="${y}" height="${w}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${D.cardId}" data-role="${M}" style="cursor:pointer"/>`;continue}const pe=N?.45:1,ye=N?"#FFD700":re,Le=N?3:(D==null?void 0:D.rarity)==="legende"||(D==null?void 0:D.rarity)==="légende"||(D==null?void 0:D.rarity)==="pepite"||(D==null?void 0:D.rarity)==="pépite"?2.5:2,ve=w-r-c;b+=`<defs><clipPath id="cp-${H}"><rect x="${K}" y="${(G.y-w/2+r).toFixed(1)}" width="${y}" height="${ve}"/></clipPath></defs>`,b+=`<rect x="${K}" y="${P}" width="${y}" height="${w}" rx="5" fill="${U}" opacity="${pe}"/>`;const _e=Pe(D);_e&&(b+=`<image href="${_e}" xlink:href="${_e}" x="${K}" y="${(G.y-w/2+r).toFixed(1)}" width="${y}" height="${ve}" clip-path="url(#cp-${H})" preserveAspectRatio="xMidYMin slice"/>`),b+=`<rect x="${K}" y="${P}" width="${y}" height="${r}" rx="4" fill="rgba(255,255,255,0.92)"/>`,b+=`<text x="${G.x.toFixed(1)}" y="${(G.y-w/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(D.name||"").slice(0,9)}</text>`;const we=(G.y+w/2-c).toFixed(1);b+=`<rect x="${K}" y="${we}" width="${y}" height="${c}" fill="rgba(255,255,255,0.92)"/>`;{const Ae=Zt(D.country_code);Ae?b+=`<image href="${Ae}" xlink:href="${Ae}" x="${(G.x-20).toFixed(1)}" y="${(G.y+w/2-c+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:b+=`<text x="${(G.x-13).toFixed(1)}" y="${(G.y+w/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${_o(D.country_code)}</text>`;const Ie=D.stadiumBonus?"#E87722":"#111";b+=`<text x="${G.x.toFixed(1)}" y="${(G.y+w/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${Ie}" font-family="Arial Black">${W}</text>`;const xe=wo(D);xe?b+=`<image href="${xe}" xlink:href="${xe}" x="${(G.x+y/2-14).toFixed(1)}" y="${(G.y+w/2-c+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:D.clubName&&(b+=`<text x="${(G.x+14).toFixed(1)}" y="${(G.y+w/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(D.clubName||"").slice(0,3).toUpperCase()}</text>`),D.stadiumBonus&&(b+=`<rect x="${(G.x-y/2).toFixed(1)}" y="${(G.y-w/2).toFixed(1)}" width="${y}" height="${w}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}b+=`<rect x="${K}" y="${P}" width="${y}" height="${w}" rx="5" fill="${N?"rgba(255,255,255,0.12)":"none"}" stroke="${ye}" stroke-width="${Le}" opacity="${pe}"/>`,de&&(b+=`<rect x="${K}" y="${P}" width="${y}" height="${w}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${N?"selected":""}" data-card-id="${D.cardId}" data-role="${M}" style="cursor:pointer"/>`)}const L=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-L} ${-L} ${l+L*2} ${d+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
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
  </div>`}async function si(e,t,i,s){var G;const{state:l,navigate:d,toast:a}=t;et(e);const p=l.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!p.deckId)return Ln(e,t,i);const f=p.deckId;let n,o,g,b;try{const M=await Promise.all([T.from("decks").select("formation,name,stadium_card_id").eq("id",f).single(),T.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",f).order("slot_order")]);n=M[0].data,g=M[0].error,o=M[1].data,b=M[1].error}catch(M){console.error("[Match] Exception chargement deck:",M),wt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(g||b){console.error("[Match] Erreur Supabase:",g||b),wt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const y=(o||[]).filter(M=>{var U;return M.is_starter&&((U=M.card)==null?void 0:U.player)}).map(M=>xi(M.card,M.position)),w=(o||[]).filter(M=>{var U;return!M.is_starter&&((U=M.card)==null?void 0:U.player)}).map(M=>xi(M.card,M.position));if(y.length<11){wt(e,"⚠️",`Deck incomplet (${y.length}/11).`,"Compléter",()=>d("decks"));return}const r=(o||[]).find(M=>{var U;return((U=M.card)==null?void 0:U.card_type)==="formation"}),c=(n==null?void 0:n.formation)||((G=r==null?void 0:r.card)==null?void 0:G.formation)||"4-4-2",{data:I,error:L}=await T.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",l.profile.id).eq("card_type","game_changer"),{data:C}=await T.from("gc_definitions").select("*").eq("is_active",!0),H=(I||[]).map(M=>({...M,_gcDef:(C==null?void 0:C.find(U=>U.name===M.gc_type||U.id===M.gc_definition_id))||null}));let D=null;if(n!=null&&n.stadium_card_id){const{data:M}=await T.from("cards").select("stadium_id").eq("id",n.stadium_card_id).single();if(M!=null&&M.stadium_id){const{data:U}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",M.stadium_id).single();D=U||null}}s({deckId:f,formation:c,starters:y,subsRaw:w,gcCardsEnriched:H,gcDefs:C||[],stadiumDef:D})}async function In(e,t){const{state:i}=t,l=(i.params||{}).matchMode||"vs_ai_easy",d=l.replace("vs_ai_",""),a=l;await si(e,t,l,async({deckId:p,formation:f,starters:n,subsRaw:o,gcCardsEnriched:g,gcDefs:b,stadiumDef:y})=>{try{let w=yt(n,f);y&&(w=Ht(w,y),ni(o,y));const r=await Mn(f,d),c=async I=>{try{const{data:L,error:C}=await T.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:p,status:"in_progress"}).select().single();if(C){console.error("[MatchIA] Erreur création match:",C),wt(e,"⚠️","Impossible de créer le match ("+C.message+").","Retour",()=>t.navigate("home"));return}const H={gcDefs:b||[],matchId:L==null?void 0:L.id,mode:a,difficulty:d,formation:f,homeTeam:w,aiTeam:r,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),homeScore:0,aiScore:0,gcCards:I,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};Cn(e,H,t)}catch(L){console.error("[MatchIA] Exception launchMatch:",L),wt(e,"⚠️","Erreur au lancement du match : "+L.message,"Retour",()=>t.navigate("home"))}};if(!g.length){c([]);return}ai(e,g,c)}catch(w){console.error("[MatchIA] Exception setup:",w),wt(e,"⚠️","Erreur de préparation du match : "+w.message,"Retour",()=>t.navigate("home"))}})}async function Mn(e,t){var a,p;const{data:i}=await T.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return jn(e);const s=It[e]||It["4-4-2"],l={GK:[],DEF:[],MIL:[],ATT:[]},d=[...i];for(const f of["GK","DEF","MIL","ATT"]){const n=d.filter(w=>w.job===f),o=d.filter(w=>w.job!==f),g=[...n,...o],b=[];for(let w=0;w<s[f];w++){const r=g[w]||d[w];r&&b.push({cardId:"ai-"+r.id+"-"+w,id:r.id,firstname:r.firstname,name:r.surname_encoded,country_code:r.country_code,club_id:r.club_id,job:r.job,job2:r.job2,note_g:Number(r.note_g)||0,note_d:Number(r.note_d)||0,note_m:Number(r.note_m)||0,note_a:Number(r.note_a)||0,rarity:r.rarity,skin:r.skin,hair:r.hair,hair_length:r.hair_length,clubName:((a=r.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((p=r.clubs)==null?void 0:p.logo_url)||null,boost:0,used:!1,_line:f})}const y=lt(b.length);b.forEach((w,r)=>{w._col=y[r]}),l[f]=b}return l}function jn(e){const t=It[e]||It["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},s=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let l=0;for(const d of["GK","DEF","MIL","ATT"]){const a=[];for(let f=0;f<t[d];f++){const n=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+l,id:"fake-"+l,firstname:"IA",name:s[l%s.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?n:2,note_d:d==="DEF"?n:2,note_m:d==="MIL"?n:2,note_a:d==="ATT"?n:2,rarity:"normal",boost:0,used:!1,_line:d}),l++}const p=lt(a.length);a.forEach((f,n)=>{f._col=p[n]}),i[d]=a}return i}function Cn(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${ut(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>qn(e,t,i),5e3)}function qn(e,t,i){const s=t.homeTeam.MIL||[],l=t.aiTeam.MIL||[];function d(r){return r.reduce((c,I)=>c+je(I,"MIL"),0)}function a(r){let c=0;for(let I=0;I<r.length-1;I++){const L=at(r[I],r[I+1]);L==="#00ff88"?c+=2:L==="#FFD700"&&(c+=1)}return c}const p=d(s)+a(s),f=d(l)+a(l),n=p>=f;function o(r,c,I,L){return`<div id="duel-row-${L}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${c}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((C,H)=>{const D=H<r.length-1?at(C,r[H+1]):null,G=!D||D==="#ff3333"||D==="#cc2222",M=D==="#00ff88"?"+2":D==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${L}" data-idx="${H}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ye({...C,note:je(C,"MIL"),_line:"MIL"},58,78)}
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
  </div>`;const g=()=>{const r=(c,I)=>e.querySelectorAll(c).forEach((L,C)=>{setTimeout(()=>{L.style.opacity="1",L.style.transform="translateY(0) scale(1)"},I+C*90)});r(".duel-card-home",150),r(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((c,I)=>{setTimeout(()=>{c.style.opacity="1"},I*70)}),900),setTimeout(()=>{const c=e.querySelector("#vs-label");c&&(c.style.opacity="1",c.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(I=>I.style.opacity="1")},1250),setTimeout(()=>{b("score-home",p,800),b("score-ai",f,800)},1500)};function b(r,c,I){const L=document.getElementById(r);if(!L)return;const C=performance.now(),H=D=>{const G=Math.min(1,(D-C)/I);L.textContent=Math.round(c*(1-Math.pow(1-G,3))),G<1?requestAnimationFrame(H):L.textContent=c};requestAnimationFrame(H)}requestAnimationFrame(g),t.attacker=n?"home":"ai";const y=n?ri():null;n&&(t.boostCard={value:y}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:s.map(r=>({name:r.name,note:je(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:l.map(r=>({name:r.name,note:je(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:p,aiTotal:f,text:`Duel milieu : ${t.clubName} ${p} – ${f} IA → ${n?t.clubName+" attaque":"IA attaque"}`});const w=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Xe(e,t,i),t.attacker==="ai"&&setTimeout(()=>yi(e,t,i),800)};setTimeout(()=>{const r=document.getElementById("score-home"),c=document.getElementById("score-ai"),I=document.getElementById(n?"duel-row-home":"duel-row-ai"),L=document.getElementById(n?"duel-row-ai":"duel-row-home"),C=n?r:c,H=n?c:r;C&&(C.style.fontSize="80px",C.style.color=n?"#FFD700":"#ff6b6b",C.style.animation="duelPulse .5s ease"+(n?", duelGlow 1.5s ease infinite .5s":"")),H&&(H.style.opacity="0.25"),setTimeout(()=>{I&&(I.style.transformOrigin="center",I.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",I.style.zIndex="5"),setTimeout(()=>{var G;const D=document.getElementById("duel-shock");if(D){const M=(G=L||I)==null?void 0:G.getBoundingClientRect(),U=e.querySelector(".match-screen").getBoundingClientRect();M&&(D.style.top=M.top-U.top+M.height/2+"px"),D.style.animation="shockwave .5s ease-out forwards"}L&&(L.style.transformOrigin="center",L.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var G;const D=document.getElementById("duel-finale");D&&(D.innerHTML=`
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
          </button>`,D.style.transition="opacity .45s ease",D.style.opacity="1",D.style.pointerEvents="auto",(G=document.getElementById("start-match-btn"))==null||G.addEventListener("click",w))},600)},700)},2800)}function Bn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Xe(e,t,i){var C,H,D,G,M,U,oe,de;const s=t.selected.map(N=>N.cardId),l=t.usedSubIds||[],d=t.homeSubs.filter(N=>!l.includes(N.cardId)),p=Object.values(t.homeTeam).flat().filter(N=>N.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,f=!["GK","DEF","MIL","ATT"].some(N=>(t.aiTeam[N]||[]).some(W=>!W.used)),n=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(N=>!N.used),o=t.phase==="attack"&&f&&n.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(N=>!N.used).map(N=>N.cardId):[];t.log[t.log.length-1];const g=t.phase==="ai-attack"||t.phase==="ai-defense",b=t.phase==="attack",y=t.phase==="defense",w=t.phase==="finished",r=t.gcCards.filter(N=>!t.usedGc.includes(N.id)),c=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
          </div>`}const N=t.log[t.log.length-1];return N?'<div style="padding:2px 4px">'+Bn(N)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const N=window.innerWidth>=700,W=(we,Ae,Ie)=>{var be,ze;const xe=(t.gcDefs||[]).find(j=>j.name===we.gc_type),X={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[xe==null?void 0:xe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ne={purple:"#b06ce0",light_blue:"#00d4ef"}[xe==null?void 0:xe.color]||"#b06ce0",ge=(xe==null?void 0:xe.name)||we.gc_type,J=(xe==null?void 0:xe.effect)||((be=Ve[we.gc_type])==null?void 0:be.desc)||"",Q=xe!=null&&xe.image_url?`/icons/${xe.image_url}`:null,V=((ze=Ve[we.gc_type])==null?void 0:ze.icon)||"⚡",se=Math.round(Ie*.22),he=Math.round(Ie*.22),Se=Ie-se-he,Me=ge.length>12?7:9;return`<div class="gc-mini" data-gc-id="${we.id}" data-gc-type="${we.gc_type}"
          style="box-sizing:border-box;width:${Ae}px;height:${Ie}px;border-radius:10px;border:2px solid ${ne};background:${X};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${se}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Me}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Ae-6}px">${ge}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Se}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Q?`<img src="${Q}" style="max-width:${Ae-10}px;max-height:${Se-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Se*.55)}px">${V}</span>`}
          </div>
          <div style="height:${he}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${J.slice(0,38)}</span>
          </div>
        </div>`},K=(we,Ae)=>{var Ie;return`<div id="boost-card"
          style="box-sizing:border-box;width:${we}px;height:${Ae}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Ae*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Ae*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Ae*.09)}px;color:#000;font-weight:900">+${(Ie=t.boostCard)==null?void 0:Ie.value}</div>
          </div>`},P=(we,Ae)=>Ae?K(130,175):W(we,130,175),re=(we,Ae)=>Ae?K(68,95):W(we,68,95),pe=N?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ye=w?`<button id="btn-results" style="${pe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:g?`<div style="${pe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:b?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:y?`<button id="btn-action" style="${pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${pe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Le=b||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",ve=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${N?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
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
  </div>`;function I(){const N=e.querySelector(".match-screen");if(!N)return;const W=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);N.style.bottom="auto",N.style.height=W+"px",N.style.minHeight=W+"px",N.style.maxHeight=W+"px",N.style.overflow="hidden";const K=e.querySelector("#mobile-action-bar"),P=e.querySelector("#mobile-play-area");K&&P&&(P.style.paddingBottom=K.offsetHeight+"px")}if(I(),setTimeout(I,120),setTimeout(I,400),setTimeout(I,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",I),window.visualViewport.addEventListener("scroll",I)),window.addEventListener("resize",I)),function(){const W=e.querySelector(".terrain-wrapper svg");W&&(W.removeAttribute("width"),W.removeAttribute("height"),W.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",W.setAttribute("viewBox","-26 -26 352 352"),W.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const N=e.querySelector(".terrain-wrapper svg");N&&(N.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let N=!1,W=30;const K=()=>document.getElementById("match-timer"),P=()=>{const re=K();if(!re)return;const pe=String(Math.floor(W/60)).padStart(2,"0"),ye=String(W%60).padStart(2,"0");re.textContent=` ${pe}:${ye}`,re.style.color=N?"#ff2222":"#ff9500",re.style.fontWeight="900"};P(),t._timerInt=setInterval(()=>{if(W--,W<0)if(!N)N=!0,W=15,P();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const re=document.createElement("div");re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",re.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(re),setTimeout(()=>{re.remove(),Bt(e,t,i)},2500)}else P()},1e3)}(C=document.getElementById("match-quit"))==null||C.addEventListener("click",()=>{We(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Bt(e,t,i))}),(H=document.getElementById("view-ai"))==null||H.addEventListener("click",()=>Kn(t,i)),(D=document.getElementById("toggle-history"))==null||D.addEventListener("click",()=>{var N;(N=document.getElementById("match-history-panel"))==null||N.classList.add("open")}),(G=document.getElementById("close-history"))==null||G.addEventListener("click",()=>{var N;(N=document.getElementById("match-history-panel"))==null||N.classList.remove("open")}),(M=document.getElementById("btn-action"))==null||M.addEventListener("click",()=>{t.selected.length!==0&&(b?Dn(e,t,i):y&&Gn(e,t,i))}),(U=document.getElementById("btn-results"))==null||U.addEventListener("click",()=>Bt(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(N=>{N.addEventListener("click",()=>Fn(N,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(N=>{N.addEventListener("click",()=>ci(e,t,i,null,N.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(N=>{N.addEventListener("click",()=>Rn(N.dataset.gcId,N.dataset.gcType,e,t,i))}),(oe=document.getElementById("boost-card"))==null||oe.addEventListener("click",()=>Un(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(N=>{N.addEventListener("click",()=>ci(e,t,i,N.dataset.subId))}),(de=document.getElementById("sub-btn-main"))==null||de.addEventListener("click",()=>ci(e,t,i))}function Fn(e,t,i,s){const l=e.dataset.cardId,d=e.dataset.role,a=t.selected.findIndex(p=>p.cardId===l);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){s.toast("Maximum 3 joueurs","error");return}const p=(t.homeTeam[d]||[]).find(f=>f.cardId===l);p&&t.selected.push({...p,_role:d,_line:d})}Xe(i,t,s)}function Si(e,t,i){e.matchId&&T.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Dn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Si(t,i,i.state.profile.id);const s=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(p=>!p.used)),l=t.selected.map(a=>{const p=(t.homeTeam[a._role]||[]).find(n=>n.cardId===a.cardId)||a,f=s&&["GK","DEF"].includes(a._role);return{...p,_line:a._role,...f?{note_a:Math.max(1,Number(p.note_a)||0)}:{}}}),d=Nt(l,t.modifiers.home);t.pendingAttack={...d,players:[...l],side:"home"},t.selected.forEach(a=>{const p=(t.homeTeam[a._role]||[]).find(f=>f.cardId===a.cardId);p&&(p.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Xe(e,t,i),setTimeout(()=>Pn(e,t,i),1200)}function Gn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Si(t,i,i.state.profile.id);const s=t.selected.map(p=>({...(t.homeTeam[p._role]||[]).find(n=>n.cardId===p.cardId)||p,_line:p._role})),l=Rt(s,t.modifiers.home);t.selected.forEach(p=>{const f=(t.homeTeam[p._role]||[]).find(n=>n.cardId===p.cardId);f&&(f.used=!0)});const d=Ot(t.pendingAttack.total,l.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(p=>({name:p.name,note:p._line==="MIL"?p.note_m:p.note_a,portrait:Pe(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo})),homePlayers:t.selected.map(p=>{const f=(t.homeTeam[p._role]||[]).find(n=>n.cardId===p.cardId)||p;return{name:f.name,note:(f._line==="GK"?Number(f.note_g)||0:f._line==="MIL"?Number(f.note_m)||0:Number(f.note_d)||0)+(f.boost||0),portrait:Pe(f),job:f.job,country_code:f.country_code,rarity:f.rarity,clubName:f.clubName,clubLogo:f.clubLogo}}),homeTotal:l.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(d.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${l.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Xe(e,t,i),ei(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${l.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,zt(e,t,i,"home-attack")}function yi(e,t,i){Si(t,i,null);const s=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],l=no(s,"attack",t.difficulty);if(!l.length){Jt(e,t,i);return}const d=Nt(l,t.modifiers.ai);t.pendingAttack={...d,players:l,side:"ai"},l.forEach(n=>{n.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${l.map(n=>n.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(n=>!n.used),f=(t.homeSubs||[]).filter(n=>!(t.usedSubIds||[]).includes(n.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!f){t.aiScore++;const n={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:l.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Pe(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(n),t.pendingAttack=null,Xe(e,t,i),ei(n.aiPlayers,t.homeScore,t.aiScore,!1,()=>{zt(e,t,i,"home-attack")});return}t.phase="defense",Xe(e,t,i)}function Pn(e,t,i){var n,o;const s=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],l=no(s,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(g=>(t.aiTeam[g]||[]).filter(b=>!b.used)).length){t.homeScore++;const b={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((n=t.pendingAttack)==null?void 0:n.players)||[]).map(y=>({name:y.name,note:je(y,y._line||y.job),portrait:Pe(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(b),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),ei(b.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}const a=l.length>0?Rt(l,t.modifiers.ai).total:0;l.forEach(g=>{g.used=!0});const p=Ot(t.pendingAttack.total,a,t.modifiers.ai),f={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(g=>({name:g.name,note:g._line==="MIL"?g.note_m:g.note_a,portrait:Pe(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:l.map(g=>({name:g.name,note:g._line==="GK"?g.note_g:g._line==="MIL"?g.note_m:g.note_d,portrait:Pe(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(p.shielded)f.text="🛡️ Bouclier IA !",t.log.push(f);else if(p.goal){t.homeScore++,f.isGoal=!0,f.homeScored=!0,f.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),ei(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{zt(e,t,i,"ai-attack")});return}else f.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(f);t.modifiers.ai={},t.pendingAttack=null,zt(e,t,i,"ai-attack")}function zt(e,t,i,s){if(t.round++,$o(t)){Bt(e,t,i);return}if(s==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(p=>!p.used).length){Jt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(p=>!p.used).length){Jt(e,t,i);return}setTimeout(()=>yi(e,t,i),100);return}t.phase="attack",Xe(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Jt(e,t,i);return}t.phase="ai-attack",Xe(e,t,i),setTimeout(()=>yi(e,t,i),800)}}function $o(e){const t=["MIL","ATT","GK","DEF"].some(s=>(e.homeTeam[s]||[]).some(l=>!l.used)),i=["MIL","ATT","GK","DEF"].some(s=>(e.aiTeam[s]||[]).some(l=>!l.used));return!t&&!i}function Jt(e,t,i){$o(t)?Bt(e,t,i):(t.phase="attack",Xe(e,t,i))}function Nn(e,t,i){const s=document.createElement("div");s.style.cssText=`
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
  `,document.body.appendChild(s);let o=!1;const g=()=>{o||(o=!0,s.remove(),i())};s.addEventListener("click",g),setTimeout(g,2e3)}function jt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ci(e,t,i,s=null,l=null){var y,w;if(t.phase!=="attack"){jt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){jt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([r,c])=>(c||[]).filter(I=>I.used).map(I=>({...I,_line:I._line||r}))),a=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!d.length){jt("Aucun joueur utilisé à remplacer");return}if(!a.length){jt("Aucun remplaçant disponible");return}let p=Math.max(0,d.findIndex(r=>r.cardId===l));const f=((y=d[p])==null?void 0:y._line)||((w=d[p])==null?void 0:w.job);let n=s?Math.max(0,a.findIndex(r=>r.cardId===s)):Math.max(0,a.findIndex(r=>r.job===f)),o=!1;const g=document.createElement("div");g.id="sub-overlay",g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function b(){var D,G,M,U,oe,de;const r=d[p],c=a[n],I=Math.min(130,Math.round((window.innerWidth-90)/2)),L=Math.round(I*1.35),C=N=>`background:rgba(255,255,255,0.12);border:none;color:${N?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${N?"default":"pointer"};flex-shrink:0`;g.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${C(n===0)}" ${n===0?"disabled":""}>▲</button>
        <div>${c?Ye({...c,used:!1,boost:0},I,L):"<div>—</div>"}</div>
        <button id="in-down" style="${C(n>=a.length-1)}" ${n>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${n+1}/${a.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${C(p===0)}" ${p===0?"disabled":""}>▲</button>
        <div>${r?Ye({...r,used:!1,boost:0},I,L):"<div>—</div>"}</div>
        <button id="out-down" style="${C(p>=d.length-1)}" ${p>=d.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${p+1}/${d.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(D=g.querySelector("#sub-close"))==null||D.addEventListener("click",()=>g.remove()),(G=g.querySelector("#out-up"))==null||G.addEventListener("click",()=>{p>0&&(p--,b())}),(M=g.querySelector("#out-down"))==null||M.addEventListener("click",()=>{p<d.length-1&&(p++,b())}),(U=g.querySelector("#in-up"))==null||U.addEventListener("click",()=>{n>0&&(n--,b())}),(oe=g.querySelector("#in-down"))==null||oe.addEventListener("click",()=>{n<a.length-1&&(n++,b())});const H=(N,W,K,P)=>{const re=g.querySelector("#"+N);if(!re)return;let pe=0;re.addEventListener("touchstart",ye=>{pe=ye.touches[0].clientY},{passive:!0}),re.addEventListener("touchend",ye=>{const Le=ye.changedTouches[0].clientY-pe;if(Math.abs(Le)<30)return;const ve=W();Le<0&&ve<P-1?(K(ve+1),b()):Le>0&&ve>0&&(K(ve-1),b())},{passive:!0})};H("in-panel",()=>n,N=>n=N,a.length),H("out-panel",()=>p,N=>p=N,d.length),(de=g.querySelector("#sub-confirm"))==null||de.addEventListener("click",N=>{if(N.preventDefault(),N.stopPropagation(),o)return;o=!0;const W=d[p],K=a[n];if(!W||!K)return;let P=null,re=-1;for(const[ye,Le]of Object.entries(t.homeTeam)){const ve=(Le||[]).findIndex(_e=>_e.cardId===W.cardId);if(ve!==-1){P=ye,re=ve;break}}if(re===-1||!P){jt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),g.remove();return}const pe={...K,_line:P,_col:W._col||0,used:!1,boost:0};t.homeTeam[P].splice(re,1,pe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(K.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:W.name,firstname:W.firstname,note:je(W,P),portrait:Pe(W),job:W.job,country_code:W.country_code,rarity:W.rarity,clubName:W.clubName,clubLogo:W.clubLogo},inPlayer:{name:K.name,firstname:K.firstname,note:je(K,P),portrait:Pe(K),job:K.job,country_code:K.country_code,rarity:K.rarity,clubName:K.clubName,clubLogo:K.clubLogo},text:`🔄 ${K.firstname} ${K.name} remplace ${W.firstname} ${W.name}`}),g.remove(),Nn(W,K,()=>Xe(e,t,i))})}document.body.appendChild(g),b()}function Rn(e,t,i,s,l){var w,r;const d=(s.gcDefs||[]).find(c=>c.name===t),a=Ve[t]||{icon:"⚡",desc:"Carte spéciale."},p={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",f={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",n=(d==null?void 0:d.name)||t,o=(d==null?void 0:d.effect)||a.desc,g=d!=null&&d.image_url?`/icons/${d.image_url}`:null,b=a.icon||"⚡",y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",y.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${f};background:${p};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${f}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${n.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${n}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${g?`<img src="${g}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${b}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(y),(w=y.querySelector("#gc-back"))==null||w.addEventListener("click",()=>y.remove()),(r=y.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{y.remove(),Hn(e,t,i,s,l)})}function Yt(e,t,i,s,l,d){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let p=[];function f(){var n,o;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${p.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(g=>{const b=g._line||g.job||"MIL",y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b]||"#555",w=je(g,b)+(g.boost||0),r=p.find(c=>c.cardId===g.cardId);return`<div class="gc-pick-item" data-cid="${g.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${r?"#FFD700":"rgba(255,255,255,0.25)"};background:${y};overflow:hidden;cursor:pointer;flex-shrink:0;${g.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${g.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${b}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${p.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${p.length}/${t})
      </button>
    </div>`,(n=a.querySelector("#gc-picker-close"))==null||n.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(g=>{g.addEventListener("click",()=>{const b=g.dataset.cid,y=e.find(r=>r.cardId===b);if(!y)return;const w=p.findIndex(r=>r.cardId===b);w>-1?p.splice(w,1):p.length<t&&p.push(y),f()})}),(o=a.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{a.remove(),d(p)})}f(),document.body.appendChild(a)}const On={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},s,l,d)=>{const a=Object.entries(s.homeTeam).filter(([p])=>!i.length||i.includes(p)).flatMap(([p,f])=>f.filter(n=>!n.used).map(n=>({...n,_line:p})));return a.length?(Yt(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,l,s,p=>{p.forEach(f=>{const n=(s.homeTeam[f._line]||[]).find(o=>o.cardId===f.cardId);n&&(n.boost=(n.boost||0)+e,s.log.push({text:`⚡ +${e} sur ${n.name}`,type:"info"}))}),Xe(l,s,d)}),!0):(s.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Xe(l,s,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:s="ai"},l,d,a)=>{const p=s==="home"?l.homeTeam:l.aiTeam,f=s==="ai"?"adverse":"allié",n=Object.entries(p).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,g])=>g.filter(b=>!b.used).map(b=>({...b,_line:o})));return n.length?(Yt(n,t,`Choisir ${t} joueur(s) ${f}(s) à débuffer (-${e})`,d,l,o=>{o.forEach(g=>{const y=((s==="home"?l.homeTeam:l.aiTeam)[g._line]||[]).find(w=>w.cardId===g.cardId);y&&(y.boost=(y.boost||0)-e,l.log.push({text:`🎯 -${e} sur ${y.name}${s==="ai"?" (IA)":""}`,type:"info"}))}),Xe(d,l,a)}),!0):(l.log.push({text:`🎯 Aucun joueur ${f} disponible`,type:"info"}),Xe(d,l,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},s,l,d)=>{const a=i==="home"?s.homeTeam:s.aiTeam,p=i==="ai"?"adverse":"allié",f=Object.entries(a).filter(([n])=>!t.length||t.includes(n)).flatMap(([n,o])=>o.filter(g=>!g.used).map(g=>({...g,_line:n})));return f.length?(Yt(f,e,`Choisir ${e} joueur(s) ${p}(s) à exclure`,l,s,n=>{n.forEach(o=>{const b=((i==="home"?s.homeTeam:s.aiTeam)[o._line]||[]).find(y=>y.cardId===o.cardId);b&&(b.used=!0,s.log.push({text:`❌ ${b.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Xe(l,s,d)}),!0):(s.log.push({text:`❌ Aucun joueur ${p} à exclure`,type:"info"}),Xe(l,s,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,s,l)=>{const d=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,p])=>p.filter(f=>f.used).map(f=>({...f,_line:a})));return d.length?(Yt(d,e,`Choisir ${e} joueur(s) à ressusciter`,s,i,a=>{a.forEach(p=>{const f=(i.homeTeam[p._line]||[]).find(n=>n.cardId===p.cardId);f&&(f.used=!1,i.log.push({text:`💫 ${f.name} ressuscité !`,type:"info"}))}),Xe(s,i,l)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Xe(s,i,l),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Hn(e,t,i,s,l){s.usedGc.push(e);const d=s.gcDefs||[],a=d.find(f=>f.name===t)||d.find(f=>{var n;return((n=f.name)==null?void 0:n.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let p=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const f=On[a.effect_type];f?f(a.effect_params||{},s,i,l)||(p=!0):(l.toast(`Effet "${a.effect_type}" non implémenté`,"error"),p=!0)}else{switch(t){case"Double attaque":s.modifiers.home.doubleAttack=!0,s.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":s.modifiers.home.shield=!0,s.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const f=Object.entries(s.homeTeam).flatMap(([n,o])=>(o||[]).filter(g=>g.used).map(g=>({...g,_line:n})));f.length?(f[0].used=!1,s.log.push({text:`💫 ${f[0].name} ressuscité !`,type:"info"})):s.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":s.modifiers.ai.stolenNote=(s.modifiers.ai.stolenNote||0)+1,s.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const f=[...s.aiTeam.ATT||[],...s.aiTeam.MIL||[]].filter(n=>!n.used);if(f.length){const n=f.sort((o,g)=>je(g,"ATT")-je(o,"ATT"))[0];n.used=!0,s.log.push({text:`❄️ ${n.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":s.maxSubs++,s.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}p=!0}T.from("cards").delete().eq("id",e).then(()=>{}),p&&Xe(i,s,l)}function Un(e,t,i){const s=Object.values(t.homeTeam).flat().filter(l=>!l.used);if(!s.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const p=(t.homeTeam[a]||[]).find(f=>f.cardId===d);if(p){p.boost=(p.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${p.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Xe(e,t,i)})})}function ei(e,t,i,s,l){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(n,o)=>`
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
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let p=!1;const f=()=>{p||(p=!0,d.remove(),setTimeout(()=>l(),50))};d.addEventListener("click",f),setTimeout(f,3500)}async function Bt(e,t,i){var o,g;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:s}=i,l=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,a=l?"victoire":d?"nul":"defaite",p=Wo(t.mode,a);t.matchId&&await T.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:l?s.profile.id:null,home_credits_reward:p,played_at:new Date().toISOString()}).eq("id",t.matchId);const f={credits:(s.profile.credits||0)+p,matches_played:(s.profile.matches_played||0)+1};l?f.wins=(s.profile.wins||0)+1:d?f.draws=(s.profile.draws||0)+1:f.losses=(s.profile.losses||0)+1,await T.from("users").update(f).eq("id",s.profile.id),await i.refreshProfile();const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",n.innerHTML=`
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
    </div>`,document.body.appendChild(n),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{n.remove(),We(e),i.navigate("home")}),(g=document.getElementById("res-replay"))==null||g.addEventListener("click",()=>{n.remove(),We(e),i.navigate("match",{matchMode:t.mode})})}function Kn(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ut(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function ko(e,t){var i,s;try{const l=(s=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:s.id;try{(T.getChannels?T.getChannels():[]).forEach(a=>{const p=a.topic||"";(p.includes("matchmaking")||p.includes("pvp-match")||p.includes("friend-invite"))&&T.removeChannel(a)})}catch(d){console.warn("[Random] cleanup canaux:",d)}l&&await T.rpc("cancel_matchmaking",{p_user_id:l}).catch(()=>{})}catch{}await si(e,t,"random",({deckId:l,formation:d,starters:a,subsRaw:p,gcCardsEnriched:f,gcDefs:n,stadiumDef:o})=>{const g=b=>Vn(e,t,l,d,a,p,b,n||[],o);if(!f.length){g([]);return}ai(e,f,g)})}async function Vn(e,t,i,s,l,d,a=[],p=[],f=null){var C;const{state:n,navigate:o,toast:g}=t;let b=!1,y=null;et(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const w=async(H=!0)=>{b=!0,y&&(T.removeChannel(y),y=null),H&&await T.rpc("cancel_matchmaking",{p_user_id:n.profile.id}).catch(()=>{})};(C=document.getElementById("mm-cancel"))==null||C.addEventListener("click",async()=>{try{await w(!0)}catch{}We(e),o("home")});const r=async(H,D,G)=>{if(b)return;b=!0,y&&(T.removeChannel(y),y=null);const M=document.getElementById("mm-status");M&&(M.textContent="Adversaire trouvé !"),await new Promise(U=>setTimeout(U,600)),e.isConnected&&Eo(e,t,H,G,a,p)},{data:c,error:I}=await T.rpc("try_matchmake",{p_user_id:n.profile.id,p_deck_id:i});if(I||!(c!=null&&c.success)){g("Erreur de matchmaking","error"),We(e),o("home");return}if(c.matched){r(c.match_id,c.opponent_id,!1);return}const L=document.getElementById("mm-status");L&&(L.textContent="En attente d'un autre joueur..."),y=T.channel("matchmaking-"+n.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${n.profile.id}`},H=>{const D=H.new;D.status==="matched"&&D.match_id&&r(D.match_id,D.matched_with,!0)}).subscribe()}async function Yn(e,t,i){const{state:s,navigate:l,toast:d}=t;try{(T.getChannels?T.getChannels():[]).forEach(n=>{const o=n.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&T.removeChannel(n)})}catch{}const{data:a}=await T.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!a){d("Match introuvable","error"),l("home");return}if(a.status==="finished"){d("Ce match est terminé","info"),l("home");return}const p=a.home_id===s.profile.id;Eo(e,t,i,p,[],[])}async function Eo(e,t,i,s,l=[],d=[]){const{state:a,navigate:p,toast:f}=t,n=s?"p1":"p2",o=s?"p2":"p1",g=(l||[]).map(j=>j.id),b=(l||[]).map(j=>({id:j.id,gc_type:j.gc_type,_gcDef:j._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:y}=await T.from("matches").select("*").eq("id",i).single();if(!y){f("Match introuvable","error"),p("home");return}async function w(){const[{data:j},{data:B},{data:_},{data:E}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:y.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:y.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",y.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",y.away_id).single()]),u=A=>{const S=Number(A.evolution_bonus)||0;return{cardId:A.card_id,position:A.position,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:(Number(A.note_g)||0)+(A.job==="GK"||A.job2==="GK"&&Number(A.note_g)>0?S:0),note_d:(Number(A.note_d)||0)+(A.job==="DEF"||A.job2==="DEF"&&Number(A.note_d)>0?S:0),note_m:(Number(A.note_m)||0)+(A.job==="MIL"||A.job2==="MIL"&&Number(A.note_m)>0?S:0),note_a:(Number(A.note_a)||0)+(A.job==="ATT"||A.job2==="ATT"&&Number(A.note_a)>0?S:0),evolution_bonus:S,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:A.club_encoded_name||null,clubLogo:A.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},m=((j==null?void 0:j.starters)||[]).map(A=>u(A)),x=((B==null?void 0:B.starters)||[]).map(A=>u(A)),h=(j==null?void 0:j.formation)||"4-4-2",v=(B==null?void 0:B.formation)||"4-4-2";let $=yt(m,h),z=yt(x,v);const k=((j==null?void 0:j.subs)||[]).map(A=>u(A));return stadiumDef&&s&&($=Ht($,stadiumDef),ni(k,stadiumDef)),{p1Team:$,p2Team:z,p1Subs:k,p2Subs:((B==null?void 0:B.subs)||[]).map(A=>u(A)),p1Formation:h,p2Formation:v,p1Name:(_==null?void 0:_.club_name)||(_==null?void 0:_.pseudo)||"Joueur 1",p2Name:(E==null?void 0:E.club_name)||(E==null?void 0:E.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?g:[],gc_p2:s?[]:g,gcCardsFull_p1:s?b:[],gcCardsFull_p2:s?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=y.game_state&&Object.keys(y.game_state).length?y.game_state:null;if(!r)if(s){r=await w();const{data:j}=await T.from("matches").select("game_state").eq("id",i).single();!(j!=null&&j.game_state)||!Object.keys(j.game_state).length?await T.from("matches").update({game_state:r,turn_user_id:y.home_id}).eq("id",i):r=j.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let j=0;j<30&&!r;j++){await new Promise(_=>setTimeout(_,400));const{data:B}=await T.from("matches").select("game_state").eq("id",i).single();B!=null&&B.game_state&&Object.keys(B.game_state).length&&(r=B.game_state)}if(!r){f("Erreur de synchronisation","error"),p("home");return}r.gc_p2=g,r.gcCardsFull_p2=b,await T.from("matches").update({game_state:r}).eq("id",i)}let c=!1,I=null,L=!1;const C=new Set,H=new Set;function D(j){var $,z;try{T.removeChannel(G)}catch{}const B=r[n+"Score"]||0,_=r[o+"Score"]||0;let E,u;j.winner_id?(E=j.winner_id===a.profile.id,u=!1):j.forfeit?(E=B>_,u=!1):(u=B===_,E=B>_),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const m=document.createElement("div");m.id="pvp-end-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const x=u?"🤝":E?"🏆":"😞",h=u?"MATCH NUL":E?"VICTOIRE !":"DÉFAITE",v=u?"#fff":E?"#FFD700":"#ff6b6b";m.innerHTML=`
      <div style="font-size:64px">${x}</div>
      <div style="font-size:26px;font-weight:900;color:${v}">${h}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${B} – ${_} ${r[o+"Name"]}</div>
      ${j.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${E?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(m),(z=m.querySelector("#pvp-end-home"))==null||z.addEventListener("click",()=>{m.remove(),We(e),p("home")})}const G=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},j=>{const B=j.new;try{if(B.status==="finished"||B.forfeit){if(c)return;c=!0,I&&(clearInterval(I),I=null),B.game_state&&(r=B.game_state),D(B);return}if(B.game_state){const _=r;r=B.game_state;const E=r._lastGC;if(E&&E.seq&&!H.has(E.seq)&&(H.add(E.seq),E.by!==n)){ve(E.type,E.by,()=>P());return}const u=_[n+"Score"]||0,m=_[o+"Score"]||0,x=r[n+"Score"]||0,h=r[o+"Score"]||0,v=x>u,$=h>m;if((v||$)&&!C.has(r.round)){C.add(r.round);const z=[...r.log||[]].reverse().find(A=>A.isGoal),k=((z==null?void 0:z.homePlayers)||[]).map(A=>({name:A.name,note:A.note,portrait:A.portrait,job:A.job}));Le(k,x,h,v,()=>P());return}P()}}catch(_){console.error("[PvP] crash:",_)}}).subscribe();async function M(j){Object.assign(r,j),r.lastActionAt=new Date().toISOString();const{error:B}=await T.from("matches").update({game_state:r}).eq("id",i);B&&f("Erreur de synchronisation","error");try{P()}catch(_){console.error("[PvP] renderPvpScreen crash:",_)}}async function U(){if(c)return;c=!0,I&&(clearInterval(I),I=null);const j=s?y.away_id:y.home_id,B=s?"p2":"p1",_=s?"p1":"p2",E={...r,[B+"Score"]:3,[_+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:j,home_score:E.p1Score||0,away_score:E.p2Score||0,game_state:E}).eq("id",i)}catch{}try{T.removeChannel(G)}catch{}setTimeout(()=>{We(e),p("home")},800)}const oe={BOOST_STAT:({value:j=1,count:B=1,roles:_=[]},E,u)=>{const m=E[n+"Team"],x=Object.entries(m).filter(([h])=>!_.length||_.includes(h)).flatMap(([h,v])=>v.filter($=>!$.used).map($=>({...$,_line:h})));if(!x.length){E.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),u(E);return}de(x,B,`Choisir ${B} joueur(s) à booster (+${j})`,h=>{h.forEach(v=>{const $=(m[v._line]||[]).find(z=>z.cardId===v.cardId);$&&($.boost=($.boost||0)+j,E.log.push({text:`⚡ +${j} sur ${$.name}`,type:"info"}))}),E[n+"Team"]=m,u(E)})},DEBUFF_STAT:({value:j=1,count:B=1,roles:_=[],target:E="ai"},u,m)=>{const x=E==="home"?n:o,h=u[x+"Team"],v=E==="home"?"allié":"adverse",$=Object.entries(h).filter(([z])=>!_.length||_.includes(z)).flatMap(([z,k])=>k.map(A=>({...A,_line:z})));if(!$.length){u.log.push({text:`🎯 Aucun joueur ${v}`,type:"info"}),m(u);return}de($,B,`Choisir ${B} joueur(s) ${v}(s) (-${j})`,z=>{z.forEach(k=>{const A=(h[k._line]||[]).find(S=>S.cardId===k.cardId);A&&(A.boost=(A.boost||0)-j,u.log.push({text:`🎯 -${j} sur ${A.name}`,type:"info"}))}),u[x+"Team"]=h,m(u)})},GRAY_PLAYER:({count:j=1,roles:B=[],target:_="ai"},E,u)=>{const m=_==="home"?n:o,x=E[m+"Team"],h=_==="home"?"allié":"adverse",v=Object.entries(x).filter(([$])=>!B.length||B.includes($)).flatMap(([$,z])=>z.filter(k=>!k.used).map(k=>({...k,_line:$})));if(!v.length){E.log.push({text:`❌ Aucun joueur ${h}`,type:"info"}),u(E);return}de(v,j,`Choisir ${j} joueur(s) ${h}(s) à exclure`,$=>{const z="usedCardIds_"+m,k=new Set(E[z]||[]);$.forEach(A=>{const S=(x[A._line]||[]).find(q=>q.cardId===A.cardId);S&&(S.used=!0,k.add(A.cardId),E.log.push({text:`❌ ${S.name} exclu !`,type:"info"}))}),E[z]=[...k],E[m+"Team"]=x,u(E)})},REVIVE_PLAYER:({count:j=1,roles:B=[]},_,E)=>{const u=_[n+"Team"],m=Object.entries(u).filter(([x])=>!B.length||B.includes(x)).flatMap(([x,h])=>h.filter(v=>v.used).map(v=>({...v,_line:x})));if(!m.length){_.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),E(_);return}de(m,j,`Choisir ${j} joueur(s) à ressusciter`,x=>{x.forEach(h=>{const v=(u[h._line]||[]).find($=>$.cardId===h.cardId);v&&(v.used=!1,_.log.push({text:`💫 ${v.name} ressuscité !`,type:"info"}))}),_[n+"Team"]=u,E(_)})},REMOVE_GOAL:({},j,B)=>{const _=o+"Score";j[_]>0?(j[_]--,j.log.push({text:"🚫 Dernier but annulé !",type:"info"})):j.log.push({text:"🚫 Aucun but à annuler",type:"info"}),B(j)},ADD_GOAL_DRAW:({},j,B)=>{j[n+"Score"]===j[o+"Score"]?(j[n+"Score"]++,j.log.push({text:"🎯 But bonus !",type:"info"})):j.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),B(j)},ADD_SUB:({value:j=1},B,_)=>{B.maxSubs=(B.maxSubs||3)+j,B.log.push({text:`🔄 +${j} remplacement(s)`,type:"info"}),_(B)},CUSTOM:({},j,B)=>B(j)};function de(j,B,_,E){const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let m=[];function x(){var v,$;const h=j.map(z=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",A=je(z,z._line)+(z.boost||0),q=m.find(R=>R.cardId===z.cardId)?"#FFD700":"rgba(255,255,255,0.25)",F=z.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${q};background:${k};overflow:hidden;cursor:pointer;${F}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${A}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${z._line}</div>
        </div>`}).join("");u.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${_}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m.length}/${B}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${h}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${m.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${m.length}/${B})
          </button>
        </div>`,(v=u.querySelector("#pp-close"))==null||v.addEventListener("click",()=>u.remove()),u.querySelectorAll(".pp-item").forEach(z=>{z.addEventListener("click",()=>{const k=z.dataset.cid,A=j.find(q=>q.cardId===k),S=m.findIndex(q=>q.cardId===k);A&&(S>-1?m.splice(S,1):m.length<B&&m.push(A),x())})}),($=u.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{u.remove(),E(m)})}x(),document.body.appendChild(u)}async function N(j,B){const E=(r["gcCardsFull_"+n]||[]).find(h=>h.id===j),u=(E==null?void 0:E._gcDef)||(r.gcDefs||[]).find(h=>{var v;return h.name===B||((v=h.name)==null?void 0:v.toLowerCase().trim())===(B==null?void 0:B.toLowerCase().trim())}),m=[...r["usedGc_"+n]||[],j],x={type:B,by:n,seq:(r._gcAnimSeq||0)+1};H.add(x.seq),ve(B,n,async()=>{if(u!=null&&u.effect_type&&u.effect_type!=="CUSTOM"){const v=oe[u.effect_type];if(v){const $={...r};v(u.effect_params||{},$,async z=>{z["usedGc_"+n]=m,z._lastGC=x,z._gcAnimSeq=x.seq,await M(z)});return}}const h={...r};switch(B){case"Remplacement+":h.maxSubs=(h.maxSubs||3)+1,h.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const v=o+"Score";h[v]>0&&(h[v]--,h.log.push({text:"🚫 But annulé",type:"info"}));break}}h["usedGc_"+n]=m,h._lastGC=x,h._gcAnimSeq=x.seq,await M(h)})}function W(j,B){const _="usedCardIds_"+j,E=new Set(r[_]||[]);B.forEach(u=>E.add(u)),r[_]=[...E]}function K(){for(const j of["p1","p2"]){const B=new Set(r["usedCardIds_"+j]||[]),_=r[j+"Team"];if(_)for(const E of["GK","DEF","MIL","ATT"])(_[E]||[]).forEach(u=>{u.used=B.has(u.cardId)})}}function P(){var Ue,Je,Qe,Ze,nt,gt;if(r.phase==="reveal")return re();if(r.phase==="midfield")return ye();if(r.phase==="finished")return ze();const j=r[n+"Team"],B=r[o+"Team"];K();const _=r[n+"Score"],E=r[o+"Score"],u=r[n+"Name"],m=r[o+"Name"],x=r.phase===n+"-attack",h=r.phase===n+"-defense",v=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],$=v.map(le=>le.cardId),z=window.innerWidth>=700,k=r[n+"Subs"]||[],A=r["usedSubIds_"+n]||[],S=k.filter(le=>!A.includes(le.cardId)),q=r["gcCardsFull_"+n]||[],F=r["usedGc_"+n]||[],R=q.filter(le=>!F.includes(le.id)),O=r.boostOwner===n&&!r.boostUsed,Z=!["GK","DEF","MIL","ATT"].some(le=>(B[le]||[]).some(Ee=>!Ee.used)),Y=[...j.MIL||[],...j.ATT||[]].filter(le=>!le.used),ie=x&&Z&&Y.length===0?[...j.GK||[],...j.DEF||[]].filter(le=>!le.used).map(le=>le.cardId):[];function ae(le,Ee,te){var pt,ht;const ue=le._gcDef,ee={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ue==null?void 0:ue.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ce={purple:"#b06ce0",light_blue:"#00d4ef"}[ue==null?void 0:ue.color]||"#b06ce0",Be=(ue==null?void 0:ue.name)||le.gc_type,Te=(ue==null?void 0:ue.effect)||((pt=Ve[le.gc_type])==null?void 0:pt.desc)||"",tt=ue!=null&&ue.image_url?`/icons/${ue.image_url}`:null,it=((ht=Ve[le.gc_type])==null?void 0:ht.icon)||"⚡",rt=Math.round(te*.22),st=Math.round(te*.22),ct=te-rt-st,$t=Be.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${le.id}" data-gc-type="${le.gc_type}"
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
      </div>`}const me=(le,Ee)=>Ee?fe(130,175):ae(le,130,175),$e=(le,Ee)=>Ee?fe(68,95):ae(le,68,95),ke=z?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",qe=x?he(n)?`<button id="pvp-action" style="${ke};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${v.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${ke};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:h?`<button id="pvp-action" style="${ke};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${v.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${m}</div>`,Ce=x&&!he(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':x||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${v.length}/3 sélectionné(s)</div>`:"",Re=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${z?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${S.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':S.map(le=>`<div class="pvp-sub-btn" data-sub-id="${le.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(le,z?76:44,z?100:58)}</div>`).join("")}
    </div>`,Fe=x?"attack":h?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(j,r[n+"Formation"],Fe,$,300,300,ie)}
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
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${m} ATTAQUE — Défendez !</div>
          ${ot((ue.players||[]).map(ee=>({...ee,used:!1})),"#ff6b6b",ue.total)}
        </div>`}if(x&&((te=r.pendingAttack)!=null&&te.players)){const ue=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ue.players||[]).map(ee=>({...ee,used:!1})),"#00ff88",ue.total)}
        </div>`}const le=(r.log||[]).slice(-1)[0];return le?'<div style="padding:2px 4px">'+De(le)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ne=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${_} – ${E}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m}</span>
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
              ${ft(j,r[n+"Formation"],Fe,$,300,300,ie)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${R.map(le=>$e(le,!1)).join("")}
            ${O?$e(null,!0):""}
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
          <div>${qe}${Ce}</div>
        </div>
      </div>`;function He(){const le=e.querySelector(".match-screen");if(!le)return;const Ee=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);le.style.height=Ee+"px",le.style.minHeight=Ee+"px",le.style.maxHeight=Ee+"px",le.style.overflow="hidden";const te=e.querySelector("#mobile-action-bar"),ue=e.querySelector("#mobile-play-area");te&&ue&&(ue.style.paddingBottom=te.offsetHeight+"px")}if(He(),setTimeout(He,120),setTimeout(He,400),L||(L=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",He),window.visualViewport.addEventListener("scroll",He)),window.addEventListener("resize",He)),function(){const Ee=e.querySelector(".terrain-wrapper svg");Ee&&(Ee.removeAttribute("width"),Ee.removeAttribute("height"),Ee.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Ee.setAttribute("viewBox","-26 -26 352 352"),Ee.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(le=>{le.addEventListener("click",()=>{if(!x&&!h)return;const Ee=le.dataset.cardId,te=le.dataset.role,ue=(j[te]||[]).find(Te=>Te.cardId===Ee);if(!ue||ue.used)return;const ee=ie.includes(Ee);if(x&&!["MIL","ATT"].includes(te)&&!ee)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const ce=r["selected_"+n],Be=ce.findIndex(Te=>Te.cardId===Ee);Be>-1?ce.splice(Be,1):ce.length<3&&ce.push({...ue,_role:te}),P()})}),e.querySelectorAll(".match-used-hit").forEach(le=>{le.addEventListener("click",()=>Ae(le.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(le=>{le.addEventListener("click",()=>Ae())}),(Ue=e.querySelector("#pvp-sub-open"))==null||Ue.addEventListener("click",()=>Ae()),e.querySelectorAll(".pvp-gc-mini").forEach(le=>{le.addEventListener("click",()=>_e(le.dataset.gcId,le.dataset.gcType))}),(Je=e.querySelector("#pvp-boost-card"))==null||Je.addEventListener("click",()=>we()),(Qe=e.querySelector("#pvp-action"))==null||Qe.addEventListener("click",le=>{x?le.currentTarget.dataset.pass==="1"||!he(n)?ne():ge():h&&J()}),(Ze=e.querySelector("#pvp-quit"))==null||Ze.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&U()}),(nt=e.querySelector("#pvp-view-opp"))==null||nt.addEventListener("click",()=>xe()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>X()),I&&(clearInterval(I),I=null),(x||h)&&!c){let le=30,Ee=!1;const te=()=>document.getElementById("pvp-timer"),ue=()=>{te()&&(te().textContent=le+"s",te().style.color=Ee?"#ff4444":"#fff")};ue(),I=setInterval(()=>{le--,le<0?Ee?(clearInterval(I),I=null,x&&!he(n)?ne():U()):(Ee=!0,le=15,ue()):ue()},1e3)}}function re(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await M({phase:"midfield"})},5e3)}let pe=!1;function ye(){if(pe)return;const j=r[n+"Team"].MIL||[],B=r[o+"Team"].MIL||[];function _(R){return R.reduce((O,Z)=>O+je(Z,"MIL"),0)}function E(R){let O=0;for(let Z=0;Z<R.length-1;Z++){const Y=at(R[Z],R[Z+1]);Y==="#00ff88"?O+=2:Y==="#FFD700"&&(O+=1)}return O}const u=_(j)+E(j),m=_(B)+E(B),x=u>=m;function h(R,O,Z){return`<div id="duel-row-${Z}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${O}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${R.map((Y,ie)=>{const ae=ie<R.length-1?at(Y,R[ie+1]):null,fe=!ae||ae==="#ff3333"||ae==="#cc2222",me=ae==="#00ff88"?"+2":ae==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Z}" data-idx="${ie}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...Y,note:je(Y,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ie<R.length-1?`<div class="duel-link duel-link-${Z}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${fe?"rgba(255,255,255,0.12)":ae};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${fe?"none":`0 0 8px ${ae}`}">
              ${me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ae}">${me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Z}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${_(R)} + ${E(R)} liens = <b style="color:#fff">${_(R)+E(R)}</b>
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
    </div>`;const v=(R,O)=>e.querySelectorAll(R).forEach((Z,Y)=>{setTimeout(()=>{Z.style.opacity="1",Z.style.transform="translateY(0) scale(1)"},O+Y*90)});v(".duel-card-me",150),v(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((R,O)=>setTimeout(()=>{R.style.opacity="1"},O*70)),900),setTimeout(()=>{const R=e.querySelector("#pvp-vs");R&&(R.style.opacity="1",R.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(O=>O.style.opacity="1")},1250);function $(R,O,Z){const Y=document.getElementById(R);if(!Y)return;const ie=performance.now(),ae=fe=>{const me=Math.min(1,(fe-ie)/Z);Y.textContent=Math.round(O*(1-Math.pow(1-me,3))),me<1?requestAnimationFrame(ae):Y.textContent=O};requestAnimationFrame(ae)}setTimeout(()=>{$("pvp-score-me",u,800),$("pvp-score-opp",m,800)},1500);const z=r.p1Team.MIL||[],k=r.p2Team.MIL||[],A=_(z)+E(z),S=_(k)+E(k),q=A>=S?"p1":"p2";let F=r.boostValue;F==null&&(F=ri(),r.boostValue=F,r.boostOwner=q,r.boostUsed=!1),pe=!0,setTimeout(()=>{const R=e.querySelector("#duel-row-"+(x?"me":"opp")),O=e.querySelector("#duel-row-"+(x?"opp":"me")),Z=document.getElementById("pvp-score-me"),Y=document.getElementById("pvp-score-opp"),ie=x?Z:Y,ae=x?Y:Z;ie&&(ie.style.fontSize="80px",ie.style.color=x?"#FFD700":"#ff6b6b",ie.style.animation="duelPulse .5s ease"+(x?",duelGlow 1.5s ease infinite .5s":"")),ae&&(ae.style.opacity="0.25"),setTimeout(()=>{R&&(R.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",R.style.zIndex="5"),setTimeout(()=>{const fe=document.getElementById("duel-shock");fe&&(fe.style.animation="shockwave .5s ease-out forwards"),O&&(O.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ke;const fe=document.getElementById("pvp-duel-finale");if(!fe)return;const me=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+F+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",$e=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;fe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(x?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+me+$e,fe.style.transition="opacity .45s ease",fe.style.opacity="1",fe.style.pointerEvents="auto",(ke=document.getElementById("pvp-start-match"))==null||ke.addEventListener("click",async()=>{const qe=q;await M({phase:qe+"-attack",attacker:qe,round:1,boostValue:F,boostUsed:!1,boostOwner:qe})})},600)},700)},2800)}function Le(j,B,_,E,u){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const x=Array.from({length:10},(z,k)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${k%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][k%8]}</div>`).join(""),h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};m.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${x}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${E?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${B} – ${_}
      </div>
      ${j!=null&&j.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${j.map(z=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${h[z.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${z.portrait?`<img src="${z.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(z.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(m);let v=!1;const $=()=>{v||(v=!0,m.remove(),setTimeout(()=>u(),50))};m.addEventListener("click",$),setTimeout($,3500)}function ve(j,B,_){var F,R;const E=(r.gcDefs||[]).find(O=>{var Z;return O.name===j||((Z=O.name)==null?void 0:Z.toLowerCase().trim())===(j==null?void 0:j.toLowerCase().trim())}),u={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[E==null?void 0:E.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",m={purple:"#b06ce0",light_blue:"#00d4ef"}[E==null?void 0:E.color]||"#b06ce0",x=(E==null?void 0:E.name)||j,h=(E==null?void 0:E.effect)||((F=Ve[j])==null?void 0:F.desc)||"",v=E!=null&&E.image_url?`/icons/${E.image_url}`:null,$=((R=Ve[j])==null?void 0:R.icon)||"⚡",k=B===n?"Vous":r[B+"Name"]||"Adversaire",A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",A.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${m}66}50%{box-shadow:0 0 60px ${m}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${m};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${k} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${m};background:${u};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${x.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${x}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${v?`<img src="${v}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(A);let S=!1;const q=()=>{S||(S=!0,A.remove(),setTimeout(()=>_&&_(),50))};A.addEventListener("click",q),setTimeout(q,3e3)}function _e(j,B){var A,S,q,F;const E=(r["gcCardsFull_"+n]||[]).find(R=>R.id===j),u=E==null?void 0:E._gcDef,m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[u==null?void 0:u.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[u==null?void 0:u.color]||"#b06ce0",h=(u==null?void 0:u.name)||B,v=(u==null?void 0:u.effect)||((A=Ve[B])==null?void 0:A.desc)||"Carte spéciale.",$=u!=null&&u.image_url?`/icons/${u.image_url}`:null,z=((S=Ve[B])==null?void 0:S.icon)||"⚡",k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",k.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${x};background:${m};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${x}66">
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
      </div>`,document.body.appendChild(k),(q=k.querySelector("#pvp-gc-back"))==null||q.addEventListener("click",()=>k.remove()),(F=k.querySelector("#pvp-gc-use"))==null||F.addEventListener("click",()=>{k.remove(),N(j,B)})}function we(){var E;const j=r[n+"Team"],B=Object.entries(j).flatMap(([u,m])=>(m||[]).filter(x=>!x.used).map(x=>({...x,_line:u})));if(!B.length)return;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",_.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${B.map(u=>{const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[u._line]||"#555",x=je(u,u._line)+(u.boost||0);return`<div class="bp-item" data-cid="${u.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${m};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${x}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(_),(E=_.querySelector("#bp-close"))==null||E.addEventListener("click",()=>_.remove()),_.querySelectorAll(".bp-item").forEach(u=>{u.addEventListener("click",async()=>{const m=u.dataset.cid,x=B.find(v=>v.cardId===m);if(!x)return;const h=(j[x._line]||[]).find(v=>v.cardId===m);h&&(h.boost=(h.boost||0)+r.boostValue),_.remove(),await M({[n+"Team"]:j,boostUsed:!0})})})}function Ae(j=null){var S,q;if(!(r.phase===n+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const _=r[n+"Team"],E=r["usedSubIds_"+n]||[],u=r.maxSubs||3;if(E.length>=u){f(`Maximum ${u} remplacements atteint`,"warning");return}const m=Object.entries(_).flatMap(([F,R])=>(R||[]).filter(O=>O.used).map(O=>({...O,_line:F}))),x=(r[n+"Subs"]||[]).filter(F=>!E.includes(F.cardId));if(!m.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!x.length){f("Aucun remplaçant disponible","warning");return}let h=Math.max(0,m.findIndex(F=>F.cardId===j));const v=((S=m[h])==null?void 0:S._line)||((q=m[h])==null?void 0:q.job);let $=Math.max(0,x.findIndex(F=>F.job===v)),z=!1;const k=document.createElement("div");k.id="pvp-sub-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function A(){var ae,fe,me,$e,ke,qe;const F=m[h],R=x[$],O=Math.min(130,Math.round((window.innerWidth-90)/2)),Z=Math.round(O*1.35),Y=Ce=>`background:rgba(255,255,255,0.12);border:none;color:${Ce?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ce?"default":"pointer"};flex-shrink:0`;k.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${E.length}/${u})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${Y($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${R?Ye({...R,used:!1,boost:0},O,Z):"<div>—</div>"}</div>
          <button id="pin-down" style="${Y($>=x.length-1)}" ${$>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${x.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${Y(h===0)}" ${h===0?"disabled":""}>▲</button>
          <div>${F?Ye({...F,used:!1,boost:0},O,Z):"<div>—</div>"}</div>
          <button id="pout-down" style="${Y(h>=m.length-1)}" ${h>=m.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${h+1}/${m.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ae=k.querySelector("#psub-close"))==null||ae.addEventListener("click",()=>k.remove()),(fe=k.querySelector("#pout-up"))==null||fe.addEventListener("click",()=>{h>0&&(h--,A())}),(me=k.querySelector("#pout-down"))==null||me.addEventListener("click",()=>{h<m.length-1&&(h++,A())}),($e=k.querySelector("#pin-up"))==null||$e.addEventListener("click",()=>{$>0&&($--,A())}),(ke=k.querySelector("#pin-down"))==null||ke.addEventListener("click",()=>{$<x.length-1&&($++,A())});const ie=(Ce,Re,Fe,Oe)=>{const De=k.querySelector("#"+Ce);if(!De)return;let Ke=0;De.addEventListener("touchstart",Ne=>{Ke=Ne.touches[0].clientY},{passive:!0}),De.addEventListener("touchend",Ne=>{const He=Ne.changedTouches[0].clientY-Ke;if(Math.abs(He)<30)return;const Ue=Re();He<0&&Ue<Oe-1?(Fe(Ue+1),A()):He>0&&Ue>0&&(Fe(Ue-1),A())},{passive:!0})};ie("pin-panel",()=>$,Ce=>$=Ce,x.length),ie("pout-panel",()=>h,Ce=>h=Ce,m.length),(qe=k.querySelector("#psub-confirm"))==null||qe.addEventListener("click",async Ce=>{if(Ce.preventDefault(),Ce.stopPropagation(),z)return;z=!0;const Re=m[h],Fe=x[$];if(!Re||!Fe)return;const Oe=Re._line,De=(_[Oe]||[]).findIndex(He=>He.cardId===Re.cardId);if(De===-1){f("Erreur : joueur introuvable","error"),k.remove();return}const Ke={...Fe,_line:Oe,position:Re.position,used:!1,boost:0};_[Oe].splice(De,1,Ke);const Ne=[...E,Fe.cardId];k.remove(),Ie(Re,Fe,async()=>{await M({[n+"Team"]:_,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Ne})})})}document.body.appendChild(k),A()}function Ie(j,B,_){const E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const m=(v,$,z)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${z}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${E[v.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(v)?`<img src="${Pe(v)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(v.name||"").slice(0,12)}</div>
    </div>`;u.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${m(B,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${m(j,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(u);let x=!1;const h=()=>{x||(x=!0,u.remove(),setTimeout(()=>_(),50))};u.addEventListener("click",h),setTimeout(h,2200)}function xe(){var B;const j=document.createElement("div");j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",j.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(j),(B=j.querySelector("#pvp-opp-close"))==null||B.addEventListener("click",()=>j.remove())}function X(){var _;const j=r.log||[],B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",B.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${j.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...j].reverse().map(E=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${E.type==="goal"?"#FFD700":E.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${E.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(B),(_=B.querySelector("#pvp-hist-close"))==null||_.addEventListener("click",()=>B.remove())}async function ne(){if(r.phase!==n+"-attack")return;const j=n==="p1"?"p2":"p1",B=(r.round||0)+1,_=[...r.log||[]];_.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const E=Se(r),u=he(j),m=E||!u?"finished":j+"-attack";await M({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:m,attacker:j,round:B,log:_}),m==="finished"&&await be(r)}async function ge(){const j=r[n+"Team"],B=!["GK","DEF","MIL","ATT"].some(m=>(r[o+"Team"][m]||[]).some(x=>!x.used)),_=(r["selected_"+n]||[]).map(m=>{const x=(j[m._role]||[]).find(A=>A.cardId===m.cardId)||m,h=B&&["GK","DEF"].includes(m._role),v=j[m._role]||[],$=v.findIndex(A=>A.cardId===m.cardId),z=lt(v.length),k=$>=0?z[$]:x._col??1;return{...x,_line:m._role,_col:k,...h?{note_a:Math.max(1,Number(x.note_a)||0)}:{}}});if(!_.length)return;const E=Nt(_,r.modifiers[n]||{});W(n,_.map(m=>m.cardId)),_.forEach(m=>{const x=(j[m._role]||[]).find(h=>h.cardId===m.cardId);x&&(x.used=!0)}),r["selected_"+n]=[],P();const u=[...r.log||[]];if(B){const m=(r[n+"Score"]||0)+1,x=_.map(k=>({name:k.name,note:je(k,k._line||"ATT"),portrait:Pe(k),job:k.job}));u.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:x,homeTotal:E.total,aiTotal:0});const h=(r.round||0)+1,v=n==="p1"?"p2":"p1",$={...r,[n+"Team"]:j,[n+"Score"]:m},z=Se($);C.add(h),Le(x,m,r[o+"Score"]||0,!0,async()=>{await M({[n+"Team"]:j,[n+"Score"]:m,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:z?"finished":v+"-attack",attacker:v,round:h,log:u}),z&&await be({...r,[n+"Score"]:m})});return}u.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${E.total})`}),await M({[n+"Team"]:j,[o+"Team"]:r[o+"Team"],pendingAttack:{...E,players:_,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:u})}async function J(){const j=r[n+"Team"],B=(r["selected_"+n]||[]).map(F=>{const R=(j[F._role]||[]).find(ae=>ae.cardId===F.cardId)||F,O=j[F._role]||[],Z=O.findIndex(ae=>ae.cardId===F.cardId),Y=lt(O.length),ie=Z>=0?Y[Z]:R._col??1;return{...R,_line:F._role,_col:ie}}),_=Rt(B,r.modifiers[n]||{});W(n,B.map(F=>F.cardId)),B.forEach(F=>{const R=(j[F._role]||[]).find(O=>O.cardId===F.cardId);R&&(R.used=!0)}),r["selected_"+n]=[],P();const E=Ot(r.pendingAttack.total,_.total,r.modifiers[n]||{}),u=r.pendingAttack.side,m=E==="attack"||(E==null?void 0:E.goal),x=u==="p1"?"p2":"p1",h=(r.round||0)+1,v=(r.pendingAttack.players||[]).map(F=>({name:F.name,note:je(F,F._line||"ATT"),portrait:Pe(F),job:F.job})),$=[...r.log||[]];$.push({type:"duel",isGoal:m,homeScored:m&&u===n,text:m?`⚽ BUT de ${r[u+"Name"]} ! (${r.pendingAttack.total} vs ${_.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${_.total})`,homePlayers:v,aiPlayers:B.map(F=>({name:F.name,note:je(F,F._line||"DEF"),portrait:Pe(F),job:F.job})),homeTotal:r.pendingAttack.total,aiTotal:_.total});const z=m?(r[u+"Score"]||0)+1:r[u+"Score"]||0,k={...r,[n+"Team"]:j,[u+"Score"]:z},A=Se(k),S=A?"finished":x+"-attack",q=async()=>{await M({[n+"Team"]:j,[o+"Team"]:r[o+"Team"],[u+"Score"]:z,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:S,attacker:x,round:h,log:$}),(S==="finished"||A)&&await be({...r,[u+"Score"]:z})};if(m){const F=u===n,R=F?z:r[n+"Score"]||0,O=F?r[o+"Score"]||0:z;C.add(h),Le(v,R,O,F,q)}else await q()}function Q(j){return["MIL","ATT"].some(B=>(j[B]||[]).some(_=>!_.used))}function V(j){return["GK","DEF","MIL","ATT"].some(B=>(j[B]||[]).some(_=>!_.used))}function se(j){return V(j)&&!Q(j)}function he(j){const B=r[j+"Team"],_=r[(j==="p1"?"p2":"p1")+"Team"];return!!(Q(B)||!V(_)&&se(B))}function Se(j){const B=["MIL","ATT"].some($=>(j.p1Team[$]||[]).some(z=>!z.used)),_=["MIL","ATT"].some($=>(j.p2Team[$]||[]).some(z=>!z.used)),E=V(j.p1Team),u=V(j.p2Team);return!B&&!(!u&&E)&&(!_&&!(!E&&u))}function Me(j){const B=j.p1Score||0,_=j.p2Score||0;return B===_?null:B>_?y.home_id:y.away_id}async function be(j){try{const B=Me(j),_=B?y.home_id===B?y.away_id:y.home_id:null;await T.from("matches").update({status:"finished",winner_id:B,home_score:j.p1Score||0,away_score:j.p2Score||0}).eq("id",i),B&&_&&updateEvolutiveCards(B,_).catch(()=>{})}catch(B){console.error("[PvP] finishMatch:",B)}}function ze(){var u;const j=r[n+"Score"],B=r[o+"Score"],_=j>B,E=j===B;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${_?"🏆":E?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${_?"Victoire !":E?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${j} - ${B}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(u=document.getElementById("pvp-home"))==null||u.addEventListener("click",()=>{try{T.removeChannel(G)}catch{}We(e),p("home")})}P()}const Wn=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:ko,resumePvpMatch:Yn},Symbol.toStringTag,{value:"Module"}));async function Jn(e,t,i,s){var l,d;try{const a=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(T.getChannels?T.getChannels():[]).forEach(f=>{const n=f.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&T.removeChannel(f)})}catch(p){console.warn("[FriendMatch] cleanup canaux:",p)}a&&(await T.rpc("cancel_matchmaking",{p_user_id:a}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",a).then(()=>{},()=>{}))}catch{}await si(e,t,"random",({deckId:a,formation:p,starters:f,subsRaw:n,gcCardsEnriched:o,gcDefs:g,stadiumDef:b})=>{const y=w=>Xn(e,t,a,p,f,n,w,g||[],i,s);if(!o.length){y([]);return}ai(e,o,y)})}async function Xn(e,t,i,s,l,d,a=[],p=[],f,n){var oe;const{state:o,navigate:g,toast:b}=t,y=o.profile.id;let w=!1,r=null;et(e);try{await T.rpc("cancel_matchmaking",{p_user_id:y})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",y)}catch{}const c=(de,N,W,K)=>{var P;e.innerHTML=`
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
      </div>`,(P=document.getElementById("lobby-cancel"))==null||P.addEventListener("click",async()=>{w=!0,r&&(T.removeChannel(r),r=null),W&&await T.from("friend_match_invites").update({status:"declined"}).eq("id",W),We(e),g("home")})},I=async(de,N)=>{w=!0,r&&(T.removeChannel(r),r=null),await new Promise(W=>setTimeout(W,600)),e.isConnected&&Qn(e,t,de,N,a,p)},{data:L}=await T.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${y},invitee_id.eq.${f}),and(inviter_id.eq.${f},invitee_id.eq.${y})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let C,H;if(L&&L.inviter_id===f)H=!1,C=L.id,await T.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",C);else{H=!0;const{data:de,error:N}=await T.from("friend_match_invites").insert({inviter_id:y,invitee_id:f,friend_id:f,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(N||!de){b("Erreur création invitation","error"),We(e),g("home");return}C=de.id}if(c(!0,!H,C),!H){const de={home_id:f,away_id:y,home_deck_id:L.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},N=await T.from("matches").insert(de).select().single(),W=N.data;if(!W){b("Erreur création match: "+(((oe=N.error)==null?void 0:oe.message)||""),"error"),We(e),g("home");return}await T.from("friend_match_invites").update({match_id:W.id,status:"matched"}).eq("id",C),I(W.id,!1);return}let D=!1;const G=de=>{w||D||(de.status==="matched"&&de.match_id?(D=!0,clearInterval(M),clearInterval(U),I(de.match_id,!0)):de.status==="declined"?(clearInterval(M),clearInterval(U),b(`${n} a décliné l'invitation`,"warning"),We(e),g("home")):de.invitee_ready&&c(!0,!0,C))},M=setInterval(()=>{if(w){clearInterval(M);return}T.from("matchmaking_queue").delete().eq("user_id",y).then(()=>{},()=>{})},3e3),U=setInterval(async()=>{if(w||D){clearInterval(U);return}const{data:de}=await T.from("friend_match_invites").select("*").eq("id",C).maybeSingle();de&&G(de)},1200);r=T.channel("friend-invite-"+C).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${C}`},de=>G(de.new)).subscribe()}async function Qn(e,t,i,s,l=[],d=[]){const{state:a,navigate:p,toast:f}=t,n=s?"p1":"p2",o=s?"p2":"p1",g=(l||[]).map(_=>_.id),b=(l||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:y}=await T.from("matches").select("*").eq("id",i).single();if(!y){f("Match introuvable","error"),p("home");return}async function w(){const[{data:_},{data:E},{data:u},{data:m}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:y.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:y.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",y.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",y.away_id).single()]),x=k=>{const A=Number(k.evolution_bonus)||0;return{cardId:k.card_id,position:k.position,id:k.id,firstname:k.firstname,name:k.surname_encoded,country_code:k.country_code,club_id:k.club_id,job:k.job,job2:k.job2,note_g:(Number(k.note_g)||0)+(k.job==="GK"||k.job2==="GK"&&Number(k.note_g)>0?A:0),note_d:(Number(k.note_d)||0)+(k.job==="DEF"||k.job2==="DEF"&&Number(k.note_d)>0?A:0),note_m:(Number(k.note_m)||0)+(k.job==="MIL"||k.job2==="MIL"&&Number(k.note_m)>0?A:0),note_a:(Number(k.note_a)||0)+(k.job==="ATT"||k.job2==="ATT"&&Number(k.note_a)>0?A:0),evolution_bonus:A,rarity:k.rarity,skin:k.skin,hair:k.hair,hair_length:k.hair_length,clubName:k.club_encoded_name||null,clubLogo:k.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},h=((_==null?void 0:_.starters)||[]).map(k=>x(k)),v=((E==null?void 0:E.starters)||[]).map(k=>x(k)),$=(_==null?void 0:_.formation)||"4-4-2",z=(E==null?void 0:E.formation)||"4-4-2";return{p1Team:(()=>{const k=yt(h,$);return stadiumDef?Ht(k,stadiumDef):k})(),p2Team:yt(v,z),p1Subs:(()=>{const k=((_==null?void 0:_.subs)||[]).map(A=>x(A));return stadiumDef&&ni(k,stadiumDef),k})(),p2Subs:((E==null?void 0:E.subs)||[]).map(k=>x(k)),p1Formation:$,p2Formation:z,p1Name:(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"Joueur 1",p2Name:(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?g:[],gc_p2:s?[]:g,gcCardsFull_p1:s?b:[],gcCardsFull_p2:s?[]:b,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=y.game_state&&Object.keys(y.game_state).length?y.game_state:null;if(!r)if(s){r=await w();const{data:_}=await T.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await T.from("matches").update({game_state:r,turn_user_id:y.home_id}).eq("id",i):r=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let _=0;_<60&&!r;_++){await new Promise(u=>setTimeout(u,400));const{data:E}=await T.from("matches").select("game_state").eq("id",i).single();E!=null&&E.game_state&&Object.keys(E.game_state).length&&(r=E.game_state)}if(!r){f("Erreur de synchronisation","error"),p("home");return}r.gc_p2=g,r.gcCardsFull_p2=b,await T.from("matches").update({game_state:r}).eq("id",i)}let c=!1,I=!1,L=!1,C=null,H=!1;const D=new Set,G=new Set;function M(_){var k,A;try{T.removeChannel(U)}catch{}const E=r[n+"Score"]||0,u=r[o+"Score"]||0;if(!L){L=!0;const S=_.winner_id||(E>u?a.profile.id:u>E?"opp":null),q=S===a.profile.id?"win":S?"loss":null;q&&ii(()=>Promise.resolve().then(()=>ao),void 0).then(F=>F.applyOwnEvolution(a.profile.id,q)).catch(()=>{})}if(!I){const S=r.p1Score||0,q=r.p2Score||0,F=(r.usedGc_p1||[]).length,R=(r.usedGc_p2||[]).length,O=_.winner_id||(S>q?y.home_id:q>S?y.away_id:null);(O?a.profile.id===O:a.profile.id<(s?y.away_id:y.home_id))&&(I=!0,eo({player1Id:y.home_id,player2Id:y.away_id,score1:S,score2:q,gc1:F,gc2:R}).catch(Y=>console.warn("[FriendMatch] updateStats:",Y)))}let m,x;_.winner_id?(m=_.winner_id===a.profile.id,x=!1):_.forfeit?(m=E>u,x=!1):(x=E===u,m=E>u),(k=document.getElementById("pvp-end-overlay"))==null||k.remove();const h=document.createElement("div");h.id="pvp-end-overlay",h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const v=x?"🤝":m?"🏆":"😞",$=x?"MATCH NUL":m?"VICTOIRE !":"DÉFAITE",z=x?"#fff":m?"#FFD700":"#ff6b6b";h.innerHTML=`
      <div style="font-size:64px">${v}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${$}</div>
      <div style="font-size:18px">${r[n+"Name"]} ${E} – ${u} ${r[o+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${m?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(h),(A=h.querySelector("#pvp-end-home"))==null||A.addEventListener("click",()=>{h.remove(),We(e),p("home")})}const U=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{const E=_.new;try{if(E.status==="finished"||E.forfeit){if(c)return;c=!0,C&&(clearInterval(C),C=null),E.game_state&&(r=E.game_state),M(E);return}if(E.game_state){const u=r;r=E.game_state;const m=r._lastGC;if(m&&m.seq&&!G.has(m.seq)&&(G.add(m.seq),m.by!==n)){we(m.type,m.by,()=>pe());return}const x=u[n+"Score"]||0,h=u[o+"Score"]||0,v=r[n+"Score"]||0,$=r[o+"Score"]||0,z=v>x,k=$>h;if((z||k)&&!D.has(r.round)){D.add(r.round);const A=[...r.log||[]].reverse().find(q=>q.isGoal),S=((A==null?void 0:A.homePlayers)||[]).map(q=>({name:q.name,note:q.note,portrait:q.portrait,job:q.job}));_e(S,v,$,z,()=>pe());return}pe()}}catch(u){console.error("[PvP] crash:",u)}}).subscribe();async function oe(_){Object.assign(r,_),r.lastActionAt=new Date().toISOString();const{error:E}=await T.from("matches").update({game_state:r}).eq("id",i);E&&f("Erreur de synchronisation","error");try{pe()}catch(u){console.error("[PvP] renderPvpScreen crash:",u)}}async function de(){if(c)return;c=!0,C&&(clearInterval(C),C=null);const _=s?y.away_id:y.home_id,E=s?"p2":"p1",u=s?"p1":"p2",m={...r,[E+"Score"]:3,[u+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:_,home_score:m.p1Score||0,away_score:m.p2Score||0,game_state:m}).eq("id",i)}catch{}try{T.removeChannel(U)}catch{}setTimeout(()=>{We(e),p("home")},800)}const N={BOOST_STAT:({value:_=1,count:E=1,roles:u=[]},m,x)=>{const h=m[n+"Team"],v=Object.entries(h).filter(([$])=>!u.length||u.includes($)).flatMap(([$,z])=>z.filter(k=>!k.used).map(k=>({...k,_line:$})));if(!v.length){m.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(m);return}W(v,E,`Choisir ${E} joueur(s) à booster (+${_})`,$=>{$.forEach(z=>{const k=(h[z._line]||[]).find(A=>A.cardId===z.cardId);k&&(k.boost=(k.boost||0)+_,m.log.push({text:`⚡ +${_} sur ${k.name}`,type:"info"}))}),m[n+"Team"]=h,x(m)})},DEBUFF_STAT:({value:_=1,count:E=1,roles:u=[],target:m="ai"},x,h)=>{const v=m==="home"?n:o,$=x[v+"Team"],z=m==="home"?"allié":"adverse",k=Object.entries($).filter(([A])=>!u.length||u.includes(A)).flatMap(([A,S])=>S.map(q=>({...q,_line:A})));if(!k.length){x.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),h(x);return}W(k,E,`Choisir ${E} joueur(s) ${z}(s) (-${_})`,A=>{A.forEach(S=>{const q=($[S._line]||[]).find(F=>F.cardId===S.cardId);q&&(q.boost=(q.boost||0)-_,x.log.push({text:`🎯 -${_} sur ${q.name}`,type:"info"}))}),x[v+"Team"]=$,h(x)})},GRAY_PLAYER:({count:_=1,roles:E=[],target:u="ai"},m,x)=>{const h=u==="home"?n:o,v=m[h+"Team"],$=u==="home"?"allié":"adverse",z=Object.entries(v).filter(([k])=>!E.length||E.includes(k)).flatMap(([k,A])=>A.filter(S=>!S.used).map(S=>({...S,_line:k})));if(!z.length){m.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),x(m);return}W(z,_,`Choisir ${_} joueur(s) ${$}(s) à exclure`,k=>{const A="usedCardIds_"+h,S=new Set(m[A]||[]);k.forEach(q=>{const F=(v[q._line]||[]).find(R=>R.cardId===q.cardId);F&&(F.used=!0,S.add(q.cardId),m.log.push({text:`❌ ${F.name} exclu !`,type:"info"}))}),m[A]=[...S],m[h+"Team"]=v,x(m)})},REVIVE_PLAYER:({count:_=1,roles:E=[]},u,m)=>{const x=u[n+"Team"],h=Object.entries(x).filter(([v])=>!E.length||E.includes(v)).flatMap(([v,$])=>$.filter(z=>z.used).map(z=>({...z,_line:v})));if(!h.length){u.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),m(u);return}W(h,_,`Choisir ${_} joueur(s) à ressusciter`,v=>{v.forEach($=>{const z=(x[$._line]||[]).find(k=>k.cardId===$.cardId);z&&(z.used=!1,u.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),u[n+"Team"]=x,m(u)})},REMOVE_GOAL:({},_,E)=>{const u=o+"Score";_[u]>0?(_[u]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),E(_)},ADD_GOAL_DRAW:({},_,E)=>{_[n+"Score"]===_[o+"Score"]?(_[n+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),E(_)},ADD_SUB:({value:_=1},E,u)=>{E.maxSubs=(E.maxSubs||3)+_,E.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),u(E)},CUSTOM:({},_,E)=>E(_)};function W(_,E,u,m){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let h=[];function v(){var z,k;const $=_.map(A=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",q=je(A,A._line)+(A.boost||0),R=h.find(Z=>Z.cardId===A.cardId)?"#FFD700":"rgba(255,255,255,0.25)",O=A.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${R};background:${S};overflow:hidden;cursor:pointer;${O}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${q}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${A._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${u}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h.length}/${E}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${$}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${h.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${h.length}/${E})
          </button>
        </div>`,(z=x.querySelector("#pp-close"))==null||z.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(A=>{A.addEventListener("click",()=>{const S=A.dataset.cid,q=_.find(R=>R.cardId===S),F=h.findIndex(R=>R.cardId===S);q&&(F>-1?h.splice(F,1):h.length<E&&h.push(q),v())})}),(k=x.querySelector("#pp-confirm"))==null||k.addEventListener("click",()=>{x.remove(),m(h)})}v(),document.body.appendChild(x)}async function K(_,E){const m=(r["gcCardsFull_"+n]||[]).find($=>$.id===_),x=(m==null?void 0:m._gcDef)||(r.gcDefs||[]).find($=>{var z;return $.name===E||((z=$.name)==null?void 0:z.toLowerCase().trim())===(E==null?void 0:E.toLowerCase().trim())}),h=[...r["usedGc_"+n]||[],_],v={type:E,by:n,seq:(r._gcAnimSeq||0)+1};G.add(v.seq),we(E,n,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const z=N[x.effect_type];if(z){const k={...r};z(x.effect_params||{},k,async A=>{A["usedGc_"+n]=h,A._lastGC=v,A._gcAnimSeq=v.seq,await oe(A)});return}}const $={...r};switch(E){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=o+"Score";$[z]>0&&($[z]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+n]=h,$._lastGC=v,$._gcAnimSeq=v.seq,await oe($)})}function P(_,E){const u="usedCardIds_"+_,m=new Set(r[u]||[]);E.forEach(x=>m.add(x)),r[u]=[...m]}function re(){for(const _ of["p1","p2"]){const E=new Set(r["usedCardIds_"+_]||[]),u=r[_+"Team"];if(u)for(const m of["GK","DEF","MIL","ATT"])(u[m]||[]).forEach(x=>{x.used=E.has(x.cardId)})}}function pe(){var Qe,Ze,nt,gt,le,Ee;if(r.phase==="reveal")return ye();if(r.phase==="midfield")return ve();if(r.phase==="finished")return B();const _=r[n+"Team"],E=r[o+"Team"];re();const u=r[n+"Score"],m=r[o+"Score"],x=r[n+"Name"],h=r[o+"Name"],v=r.phase===n+"-attack",$=r.phase===n+"-defense",z=Array.isArray(r["selected_"+n])?r["selected_"+n]:[],k=z.map(te=>te.cardId),A=window.innerWidth>=700,S=r[n+"Subs"]||[],q=r["usedSubIds_"+n]||[],F=S.filter(te=>!q.includes(te.cardId)),R=r["gcCardsFull_"+n]||[],O=r["usedGc_"+n]||[],Z=R.filter(te=>!O.includes(te.id)),Y=r.boostOwner===n&&!r.boostUsed,ie=!["GK","DEF","MIL","ATT"].some(te=>(E[te]||[]).some(ue=>!ue.used)),ae=[..._.MIL||[],..._.ATT||[]].filter(te=>!te.used),fe=v&&ie&&ae.length===0?[..._.GK||[],..._.DEF||[]].filter(te=>!te.used).map(te=>te.cardId):[];function me(te,ue,ee){var kt,Ut;const ce=te._gcDef,Be={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ce==null?void 0:ce.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Te={purple:"#b06ce0",light_blue:"#00d4ef"}[ce==null?void 0:ce.color]||"#b06ce0",tt=(ce==null?void 0:ce.name)||te.gc_type,it=(ce==null?void 0:ce.effect)||((kt=Ve[te.gc_type])==null?void 0:kt.desc)||"",rt=ce!=null&&ce.image_url?`/icons/${ce.image_url}`:null,st=((Ut=Ve[te.gc_type])==null?void 0:Ut.icon)||"⚡",ct=Math.round(ee*.22),$t=Math.round(ee*.22),pt=ee-ct-$t,ht=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${te.id}" data-gc-type="${te.gc_type}"
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
      </div>`}const ke=(te,ue)=>ue?$e(130,175):me(te,130,175),qe=(te,ue)=>ue?$e(68,95):me(te,68,95),Ce=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Re=v?Me(n)?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${Ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${h}</div>`,Fe=v&&!Me(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':v||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${F.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':F.map(te=>`<div class="pvp-sub-btn" data-sub-id="${te.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(te,A?76:44,A?100:58)}</div>`).join("")}
    </div>`,De=v?"attack":$?"defense":"idle",Ke=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(_,r[n+"Formation"],De,k,300,300,fe)}
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
        </div>`}return`<div style="font-size:11px;color:${te.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${te.type==="goal"?700:400};padding:3px 2px">${te.text||""}</div>`}const He=(()=>{var ue,ee;if($&&((ue=r.pendingAttack)!=null&&ue.players)){const ce=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${h} ATTAQUE — Défendez !</div>
          ${ot((ce.players||[]).map(Be=>({...Be,used:!1})),"#ff6b6b",ce.total)}
        </div>`}if(v&&((ee=r.pendingAttack)!=null&&ee.players)){const ce=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ce.players||[]).map(Be=>({...Be,used:!1})),"#00ff88",ce.total)}
        </div>`}const te=(r.log||[]).slice(-1)[0];return te?'<div style="padding:2px 4px">'+Ne(te)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ue=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${u} – ${m}</span>
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
            ${Z.map(te=>ke(te,!1)).join("")}
            ${Y?ke(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ue}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(_,r[n+"Formation"],De,k,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Z.map(te=>qe(te,!1)).join("")}
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
      </div>`;function Je(){const te=e.querySelector(".match-screen");if(!te)return;const ue=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);te.style.height=ue+"px",te.style.minHeight=ue+"px",te.style.maxHeight=ue+"px",te.style.overflow="hidden";const ee=e.querySelector("#mobile-action-bar"),ce=e.querySelector("#mobile-play-area");ee&&ce&&(ce.style.paddingBottom=ee.offsetHeight+"px")}if(Je(),setTimeout(Je,120),setTimeout(Je,400),H||(H=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Je),window.visualViewport.addEventListener("scroll",Je)),window.addEventListener("resize",Je)),function(){const ue=e.querySelector(".terrain-wrapper svg");ue&&(ue.removeAttribute("width"),ue.removeAttribute("height"),ue.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ue.setAttribute("viewBox","-26 -26 352 352"),ue.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(te=>{te.addEventListener("click",()=>{if(!v&&!$)return;const ue=te.dataset.cardId,ee=te.dataset.role,ce=(_[ee]||[]).find(it=>it.cardId===ue);if(!ce||ce.used)return;const Be=fe.includes(ue);if(v&&!["MIL","ATT"].includes(ee)&&!Be)return;Array.isArray(r["selected_"+n])||(r["selected_"+n]=[]);const Te=r["selected_"+n],tt=Te.findIndex(it=>it.cardId===ue);tt>-1?Te.splice(tt,1):Te.length<3&&Te.push({...ce,_role:ee}),pe()})}),e.querySelectorAll(".match-used-hit").forEach(te=>{te.addEventListener("click",()=>xe(te.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(te=>{te.addEventListener("click",()=>xe())}),(Qe=e.querySelector("#pvp-sub-open"))==null||Qe.addEventListener("click",()=>xe()),e.querySelectorAll(".pvp-gc-mini").forEach(te=>{te.addEventListener("click",()=>Ae(te.dataset.gcId,te.dataset.gcType))}),(Ze=e.querySelector("#pvp-boost-card"))==null||Ze.addEventListener("click",()=>Ie()),(nt=e.querySelector("#pvp-action"))==null||nt.addEventListener("click",te=>{v?te.currentTarget.dataset.pass==="1"||!Me(n)?J():Q():$&&V()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&de()}),(le=e.querySelector("#pvp-view-opp"))==null||le.addEventListener("click",()=>ne()),(Ee=e.querySelector("#pvp-toggle-history"))==null||Ee.addEventListener("click",()=>ge()),C&&(clearInterval(C),C=null),(v||$)&&!c){let te=30,ue=!1;const ee=()=>document.getElementById("pvp-timer"),ce=()=>{ee()&&(ee().textContent=te+"s",ee().style.color=ue?"#ff4444":"#fff")};ce(),C=setInterval(()=>{te--,te<0?ue?(clearInterval(C),C=null,v&&!Me(n)?J():de()):(ue=!0,te=15,ce()):ce()},1e3)}}function ye(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await oe({phase:"midfield"})},5e3)}let Le=!1;function ve(){if(Le)return;const _=r[n+"Team"].MIL||[],E=r[o+"Team"].MIL||[];function u(Z){return Z.reduce((Y,ie)=>Y+je(ie,"MIL"),0)}function m(Z){let Y=0;for(let ie=0;ie<Z.length-1;ie++){const ae=at(Z[ie],Z[ie+1]);ae==="#00ff88"?Y+=2:ae==="#FFD700"&&(Y+=1)}return Y}const x=u(_)+m(_),h=u(E)+m(E),v=x>=h;function $(Z,Y,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${Y}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Z.map((ae,fe)=>{const me=fe<Z.length-1?at(ae,Z[fe+1]):null,$e=!me||me==="#ff3333"||me==="#cc2222",ke=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ie}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...ae,note:je(ae,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<Z.length-1?`<div class="duel-link duel-link-${ie}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${$e?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${$e?"none":`0 0 8px ${me}`}">
              ${ke?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${ke}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ie}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${u(Z)} + ${m(Z)} liens = <b style="color:#fff">${u(Z)+m(Z)}</b>
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
      ${$(_,r[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(E,r[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(Z,Y)=>e.querySelectorAll(Z).forEach((ie,ae)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},Y+ae*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Z,Y)=>setTimeout(()=>{Z.style.opacity="1"},Y*70)),900),setTimeout(()=>{const Z=e.querySelector("#pvp-vs");Z&&(Z.style.opacity="1",Z.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(Y=>Y.style.opacity="1")},1250);function k(Z,Y,ie){const ae=document.getElementById(Z);if(!ae)return;const fe=performance.now(),me=$e=>{const ke=Math.min(1,($e-fe)/ie);ae.textContent=Math.round(Y*(1-Math.pow(1-ke,3))),ke<1?requestAnimationFrame(me):ae.textContent=Y};requestAnimationFrame(me)}setTimeout(()=>{k("pvp-score-me",x,800),k("pvp-score-opp",h,800)},1500);const A=r.p1Team.MIL||[],S=r.p2Team.MIL||[],q=u(A)+m(A),F=u(S)+m(S),R=q>=F?"p1":"p2";let O=r.boostValue;O==null&&(O=ri(),r.boostValue=O,r.boostOwner=R,r.boostUsed=!1),Le=!0,setTimeout(()=>{const Z=e.querySelector("#duel-row-"+(v?"me":"opp")),Y=e.querySelector("#duel-row-"+(v?"opp":"me")),ie=document.getElementById("pvp-score-me"),ae=document.getElementById("pvp-score-opp"),fe=v?ie:ae,me=v?ae:ie;fe&&(fe.style.fontSize="80px",fe.style.color=v?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(v?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{Z&&(Z.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Z.style.zIndex="5"),setTimeout(()=>{const $e=document.getElementById("duel-shock");$e&&($e.style.animation="shockwave .5s ease-out forwards"),Y&&(Y.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ce;const $e=document.getElementById("pvp-duel-finale");if(!$e)return;const ke=r.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+O+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",qe=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;$e.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(v?"⚽ "+r[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ke+qe,$e.style.transition="opacity .45s ease",$e.style.opacity="1",$e.style.pointerEvents="auto",(Ce=document.getElementById("pvp-start-match"))==null||Ce.addEventListener("click",async()=>{const Re=R;await oe({phase:Re+"-attack",attacker:Re,round:1,boostValue:O,boostUsed:!1,boostOwner:Re})})},600)},700)},2800)}function _e(_,E,u,m,x){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const v=Array.from({length:10},(A,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};h.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${v}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${m?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${E} – ${u}
      </div>
      ${_!=null&&_.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${_.map(A=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[A.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${A.portrait?`<img src="${A.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(A.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(h);let z=!1;const k=()=>{z||(z=!0,h.remove(),setTimeout(()=>x(),50))};h.addEventListener("click",k),setTimeout(k,3500)}function we(_,E,u){var O,Z;const m=(r.gcDefs||[]).find(Y=>{var ie;return Y.name===_||((ie=Y.name)==null?void 0:ie.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[m==null?void 0:m.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[m==null?void 0:m.color]||"#b06ce0",v=(m==null?void 0:m.name)||_,$=(m==null?void 0:m.effect)||((O=Ve[_])==null?void 0:O.desc)||"",z=m!=null&&m.image_url?`/icons/${m.image_url}`:null,k=((Z=Ve[_])==null?void 0:Z.icon)||"⚡",S=E===n?"Vous":r[E+"Name"]||"Adversaire",q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",q.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${h}66}50%{box-shadow:0 0 60px ${h}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${h};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${S} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${h};background:${x};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(q);let F=!1;const R=()=>{F||(F=!0,q.remove(),setTimeout(()=>u&&u(),50))};q.addEventListener("click",R),setTimeout(R,3e3)}function Ae(_,E){var q,F,R,O;const m=(r["gcCardsFull_"+n]||[]).find(Z=>Z.id===_),x=m==null?void 0:m._gcDef,h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",$=(x==null?void 0:x.name)||E,z=(x==null?void 0:x.effect)||((q=Ve[E])==null?void 0:q.desc)||"Carte spéciale.",k=x!=null&&x.image_url?`/icons/${x.image_url}`:null,A=((F=Ve[E])==null?void 0:F.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${v};background:${h};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${v}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${k?`<img src="${k}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${A}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(R=S.querySelector("#pvp-gc-back"))==null||R.addEventListener("click",()=>S.remove()),(O=S.querySelector("#pvp-gc-use"))==null||O.addEventListener("click",()=>{S.remove(),K(_,E)})}function Ie(){var m;const _=r[n+"Team"],E=Object.entries(_).flatMap(([x,h])=>(h||[]).filter(v=>!v.used).map(v=>({...v,_line:x})));if(!E.length)return;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",u.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(x=>{const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",v=je(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${h};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${v}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(u),(m=u.querySelector("#bp-close"))==null||m.addEventListener("click",()=>u.remove()),u.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const h=x.dataset.cid,v=E.find(z=>z.cardId===h);if(!v)return;const $=(_[v._line]||[]).find(z=>z.cardId===h);$&&($.boost=($.boost||0)+r.boostValue),u.remove(),await oe({[n+"Team"]:_,boostUsed:!0})})})}function xe(_=null){var F,R;if(!(r.phase===n+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const u=r[n+"Team"],m=r["usedSubIds_"+n]||[],x=r.maxSubs||3;if(m.length>=x){f(`Maximum ${x} remplacements atteint`,"warning");return}const h=Object.entries(u).flatMap(([O,Z])=>(Z||[]).filter(Y=>Y.used).map(Y=>({...Y,_line:O}))),v=(r[n+"Subs"]||[]).filter(O=>!m.includes(O.cardId));if(!h.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!v.length){f("Aucun remplaçant disponible","warning");return}let $=Math.max(0,h.findIndex(O=>O.cardId===_));const z=((F=h[$])==null?void 0:F._line)||((R=h[$])==null?void 0:R.job);let k=Math.max(0,v.findIndex(O=>O.job===z)),A=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function q(){var me,$e,ke,qe,Ce,Re;const O=h[$],Z=v[k],Y=Math.min(130,Math.round((window.innerWidth-90)/2)),ie=Math.round(Y*1.35),ae=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${m.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ae(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${Z?Ye({...Z,used:!1,boost:0},Y,ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${ae(k>=v.length-1)}" ${k>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${v.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ae($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${O?Ye({...O,used:!1,boost:0},Y,ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${ae($>=h.length-1)}" ${$>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=S.querySelector("#psub-close"))==null||me.addEventListener("click",()=>S.remove()),($e=S.querySelector("#pout-up"))==null||$e.addEventListener("click",()=>{$>0&&($--,q())}),(ke=S.querySelector("#pout-down"))==null||ke.addEventListener("click",()=>{$<h.length-1&&($++,q())}),(qe=S.querySelector("#pin-up"))==null||qe.addEventListener("click",()=>{k>0&&(k--,q())}),(Ce=S.querySelector("#pin-down"))==null||Ce.addEventListener("click",()=>{k<v.length-1&&(k++,q())});const fe=(Fe,Oe,De,Ke)=>{const Ne=S.querySelector("#"+Fe);if(!Ne)return;let He=0;Ne.addEventListener("touchstart",Ue=>{He=Ue.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Ue=>{const Je=Ue.changedTouches[0].clientY-He;if(Math.abs(Je)<30)return;const Qe=Oe();Je<0&&Qe<Ke-1?(De(Qe+1),q()):Je>0&&Qe>0&&(De(Qe-1),q())},{passive:!0})};fe("pin-panel",()=>k,Fe=>k=Fe,v.length),fe("pout-panel",()=>$,Fe=>$=Fe,h.length),(Re=S.querySelector("#psub-confirm"))==null||Re.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),A)return;A=!0;const Oe=h[$],De=v[k];if(!Oe||!De)return;const Ke=Oe._line,Ne=(u[Ke]||[]).findIndex(Je=>Je.cardId===Oe.cardId);if(Ne===-1){f("Erreur : joueur introuvable","error"),S.remove();return}const He={...De,_line:Ke,position:Oe.position,used:!1,boost:0};u[Ke].splice(Ne,1,He);const Ue=[...m,De.cardId];S.remove(),X(Oe,De,async()=>{await oe({[n+"Team"]:u,[o+"Team"]:r[o+"Team"],["usedSubIds_"+n]:Ue})})})}document.body.appendChild(S),q()}function X(_,E,u){const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const h=(z,k,A)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${k};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${A}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${m[z.job]||"#555"};border:3px solid ${k};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(z)?`<img src="${Pe(z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(z.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${h(E,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${h(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let v=!1;const $=()=>{v||(v=!0,x.remove(),setTimeout(()=>u(),50))};x.addEventListener("click",$),setTimeout($,2200)}function ne(){var E;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[o+"Team"],r[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(E=_.querySelector("#pvp-opp-close"))==null||E.addEventListener("click",()=>_.remove())}function ge(){var m;const _=r.log||[],E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const u=x=>{var v,$,z;if(x.type==="duel"){const k=x.isGoal,A=x.homeScored&&n==="p1"||!x.homeScored&&k&&n==="p2",S=x.homeScored?"#FFD700":k?"#ff6b6b":"rgba(255,255,255,0.3)",q=k?A?"⚽ BUT !":"⚽ BUT adversaire !":(v=x.homePlayers)!=null&&v.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${k?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
          <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${q}</div>
          ${($=x.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${ot(x.homePlayers,"rgba(255,255,255,0.7)",x.homeTotal)}</div>`:""}
          ${(z=x.aiPlayers)!=null&&z.length?`<div style="opacity:0.7">${ot(x.aiPlayers,"#ff6b6b",x.aiTotal)}</div>`:""}
        </div>`}return x.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${x.outPlayer?Ye({...x.outPlayer,used:!0,_line:x.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${x.inPlayer?Ye({...x.inPlayer,_line:x.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${x.type==="goal"?"#FFD700":x.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${x.text||""}</div>
      </div>`};E.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(u).join("")}
      </div>`,document.body.appendChild(E),(m=E.querySelector("#pvp-hist-close"))==null||m.addEventListener("click",()=>E.remove())}async function J(){if(r.phase!==n+"-attack")return;const _=n==="p1"?"p2":"p1",E=(r.round||0)+1,u=[...r.log||[]];u.push({type:"info",text:`⏭️ ${r[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const m=be(r),x=Me(_),h=m||!x?"finished":_+"-attack";await oe({["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:h,attacker:_,round:E,log:u}),h==="finished"&&await j(r)}async function Q(){const _=r[n+"Team"],E=!["GK","DEF","MIL","ATT"].some(h=>(r[o+"Team"][h]||[]).some(v=>!v.used)),u=(r["selected_"+n]||[]).map(h=>{const v=(_[h._role]||[]).find(q=>q.cardId===h.cardId)||h,$=E&&["GK","DEF"].includes(h._role),z=_[h._role]||[],k=z.findIndex(q=>q.cardId===h.cardId),A=lt(z.length),S=k>=0?A[k]:v._col??1;return{...v,_line:h._role,_col:S,...$?{note_a:Math.max(1,Number(v.note_a)||0)}:{}}});if(!u.length)return;const m=Nt(u,r.modifiers[n]||{});P(n,u.map(h=>h.cardId)),u.forEach(h=>{const v=(_[h._role]||[]).find($=>$.cardId===h.cardId);v&&(v.used=!0)}),r["selected_"+n]=[],pe();const x=[...r.log||[]];if(E){const h=(r[n+"Score"]||0)+1,v=u.map(S=>({name:S.name,note:je(S,S._line||"ATT"),portrait:Pe(S),job:S.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:v,homeTotal:m.total,aiTotal:0});const $=(r.round||0)+1,z=n==="p1"?"p2":"p1",k={...r,[n+"Team"]:_,[n+"Score"]:h},A=be(k);D.add($),_e(v,h,r[o+"Score"]||0,!0,async()=>{await oe({[n+"Team"]:_,[n+"Score"]:h,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:A?"finished":z+"-attack",attacker:z,round:$,log:x}),A&&await j({...r,[n+"Score"]:h})});return}x.push({type:"pending",text:`⚔️ ${r[n+"Name"]} attaque (${m.total})`}),await oe({[n+"Team"]:_,[o+"Team"]:r[o+"Team"],pendingAttack:{...m,players:u,side:n},["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},phase:o+"-defense",log:x})}async function V(){const _=r[n+"Team"],E=(r["selected_"+n]||[]).map(O=>{const Z=(_[O._role]||[]).find(me=>me.cardId===O.cardId)||O,Y=_[O._role]||[],ie=Y.findIndex(me=>me.cardId===O.cardId),ae=lt(Y.length),fe=ie>=0?ae[ie]:Z._col??1;return{...Z,_line:O._role,_col:fe}}),u=Rt(E,r.modifiers[n]||{});P(n,E.map(O=>O.cardId)),E.forEach(O=>{const Z=(_[O._role]||[]).find(Y=>Y.cardId===O.cardId);Z&&(Z.used=!0)}),r["selected_"+n]=[],pe();const m=Ot(r.pendingAttack.total,u.total,r.modifiers[n]||{}),x=r.pendingAttack.side,h=m==="attack"||(m==null?void 0:m.goal),v=x==="p1"?"p2":"p1",$=(r.round||0)+1,z=(r.pendingAttack.players||[]).map(O=>({name:O.name,note:je(O,O._line||"ATT"),portrait:Pe(O),job:O.job})),k=[...r.log||[]];k.push({type:"duel",isGoal:h,homeScored:h&&x===n,text:h?`⚽ BUT de ${r[x+"Name"]} ! (${r.pendingAttack.total} vs ${u.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${u.total})`,homePlayers:z,aiPlayers:E.map(O=>({name:O.name,note:je(O,O._line||"DEF"),portrait:Pe(O),job:O.job})),homeTotal:r.pendingAttack.total,aiTotal:u.total});const A=h?(r[x+"Score"]||0)+1:r[x+"Score"]||0,S={...r,[n+"Team"]:_,[x+"Score"]:A},q=be(S),F=q?"finished":v+"-attack",R=async()=>{await oe({[n+"Team"]:_,[o+"Team"]:r[o+"Team"],[x+"Score"]:A,["selected_"+n]:[],modifiers:{...r.modifiers,[n]:{}},pendingAttack:null,phase:F,attacker:v,round:$,log:k}),(F==="finished"||q)&&await j({...r,[x+"Score"]:A})};if(h){const O=x===n,Z=O?A:r[n+"Score"]||0,Y=O?r[o+"Score"]||0:A;D.add($),_e(z,Z,Y,O,R)}else await R()}function se(_){return["MIL","ATT"].some(E=>(_[E]||[]).some(u=>!u.used))}function he(_){return["GK","DEF","MIL","ATT"].some(E=>(_[E]||[]).some(u=>!u.used))}function Se(_){return he(_)&&!se(_)}function Me(_){const E=r[_+"Team"],u=r[(_==="p1"?"p2":"p1")+"Team"];return!!(se(E)||!he(u)&&Se(E))}function be(_){const E=["MIL","ATT"].some(k=>(_.p1Team[k]||[]).some(A=>!A.used)),u=["MIL","ATT"].some(k=>(_.p2Team[k]||[]).some(A=>!A.used)),m=he(_.p1Team),x=he(_.p2Team);return!E&&!(!x&&m)&&(!u&&!(!m&&x))}function ze(_){const E=_.p1Score||0,u=_.p2Score||0;return E===u?null:E>u?y.home_id:y.away_id}async function j(_){try{const E=ze(_),u=E?y.home_id===E?y.away_id:y.home_id:null;await T.from("matches").update({status:"finished",winner_id:E,home_score:_.p1Score||0,away_score:_.p2Score||0}).eq("id",i),E&&u&&Ei(E,u).catch(()=>{})}catch(E){console.error("[PvP] finishMatch:",E)}}function B(){var x;const _=r[n+"Score"],E=r[o+"Score"],u=_>E,m=_===E;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${u?"🏆":m?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${u?"Victoire !":m?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${E}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{T.removeChannel(U)}catch{}We(e),p("home")})}pe()}const St="#1A6B3C",xt="#D4A017";async function Zn(e,t){var s;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(s=t.state.params)==null?void 0:s.openLeagueId;if(i){t.state.params.openLeagueId=null,await bt(e,t,i);return}await _t(e,t)}async function _t(e,t,i="waiting"){var I;const{state:s}=t,l=s.profile.id,{data:d}=await T.from("mini_league_members").select("league_id").eq("user_id",l),a=(d||[]).map(L=>L.league_id),{data:p,error:f}=await T.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),n=f?(await T.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:p||[],g=(a.length?await T.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],b=g.filter(L=>L.status==="waiting"&&!L.is_archived),y=g.filter(L=>L.status==="active"&&!L.is_archived),w=g.filter(L=>L.is_archived||L.status==="finished"),r=n.filter(L=>!a.includes(L.id)),c=[{key:"waiting",label:"🟡 En attente",count:b.length+r.length},{key:"active",label:"🟢 En cours",count:y.length},{key:"archived",label:"📁 Archivées",count:w.length}];e.innerHTML=`
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
      ${i==="waiting"?er(b,r,l):i==="active"?tr(y,l):ir(w,l)}
    </div>
  </div>`,(I=document.getElementById("ml-create-btn"))==null||I.addEventListener("click",()=>or(e,t)),e.querySelectorAll(".ml-tab").forEach(L=>L.addEventListener("click",()=>_t(e,t,L.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(L=>L.addEventListener("click",()=>bt(e,t,L.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(L=>L.addEventListener("click",C=>{C.stopPropagation(),To(e,t,L.dataset.join,L.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(L=>L.addEventListener("click",C=>{C.stopPropagation(),bi(e,t,L.dataset.delete,L.dataset.name,i)}))}function ti(e,t,i=!1){var a,p;const s=e.creator_id===t,l=e.pot||0,d=((p=(a=e.mini_league_members)==null?void 0:a[0])==null?void 0:p.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function er(e,t,i){const s=[];return e.length&&(s.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),s.push(...e.map(l=>ti(l,i,!1)))),t.length&&(s.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),s.push(...t.map(l=>ti(l,i,!0)))),s.length?s.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function tr(e,t){return e.length?e.map(i=>ti(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function ir(e,t){return e.length?e.map(i=>ti(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function or(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",s=>{s.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(s=>s.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=s.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var w,r,c,I;const{toast:s}=t,l=document.getElementById("ml-name").value.trim(),d=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,p=((w=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:w.value)||"public",f=((r=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:r.value)||"aller",n=((I=(c=document.getElementById("ml-pwd"))==null?void 0:c.value)==null?void 0:I.trim())||null;if(!l){s("Le nom est obligatoire","error");return}if(a<100){s("Mise minimum : 100 crédits","error");return}if(p==="private"&&!n){s("Mot de passe requis","error");return}const{data:o,error:g}=await T.from("mini_leagues").insert({name:l,creator_id:t.state.profile.id,type:p,password:n,mode:f,max_players:d,entry_fee:a}).select().single();if(g){s("Erreur : "+g.message,"error");return}const{data:b}=await T.from("users").select("credits").eq("id",t.state.profile.id).single();if(((b==null?void 0:b.credits)||0)<a){await T.from("mini_leagues").delete().eq("id",o.id),s(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await T.from("users").update({credits:b.credits-a}).eq("id",t.state.profile.id),await T.from("mini_leagues").update({pot:a}).eq("id",o.id),await T.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=b.credits-a);const y=document.getElementById("nav-credits");y&&(y.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),s(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),bt(e,t,o.id)})}function nr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),s=l=>{t.remove(),e(l)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>s(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>s(i.value.trim())),i.addEventListener("keydown",l=>{l.key==="Enter"&&s(i.value.trim())}),t.addEventListener("click",l=>{l.target===t&&s(null)})})}async function To(e,t,i,s){const{toast:l,state:d}=t,a=d.profile.id,{data:p}=await T.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!p){l("Mini League introuvable","error");return}if(p.status!=="waiting"){l("Cette Mini League a déjà démarré","warning");return}const{count:f}=await T.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(f>=p.max_players){l("La Mini League est complète","warning");return}if(s==="private"){const r=await nr();if(r===null)return;if(p.password!==r){l("Mot de passe incorrect","error");return}}const n=p.entry_fee||100,{data:o}=await T.from("users").select("credits").eq("id",a).single();if(((o==null?void 0:o.credits)||0)<n){l(`Crédits insuffisants — il te faut ${n.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:g}=await T.from("mini_league_members").insert({league_id:i,user_id:a});if(g){l("Erreur inscription : "+g.message,"error");return}const{error:b}=await T.from("users").update({credits:o.credits-n}).eq("id",a),{error:y}=await T.from("mini_leagues").update({pot:(p.pot||0)+n}).eq("id",i);(b||y)&&console.error("Erreur post-inscription:",b,y),d.profile&&(d.profile.credits=o.credits-n);const w=document.getElementById("nav-credits");w&&(w.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`✅ Inscrit ! −${n.toLocaleString("fr")} cr. · Pot : ${((p.pot||0)+n).toLocaleString("fr")} cr.`,"success"),bt(e,t,i)}async function rr(e,t,i,s){const{toast:l,state:d}=t,a=d.profile.id;if(!confirm(`Te désinscrire et récupérer ${s.toLocaleString("fr")} cr. ?`))return;const{data:p}=await T.from("mini_leagues").select("pot,status").eq("id",i).single();if(!p||p.status!=="waiting"){l("Impossible — la league a déjà démarré","error");return}const{data:f}=await T.from("users").select("credits").eq("id",a).single();await T.from("mini_leagues").update({pot:Math.max(0,(p.pot||0)-s)}).eq("id",i),await T.from("users").update({credits:((f==null?void 0:f.credits)||0)+s}).eq("id",a),await T.from("mini_league_members").delete().eq("league_id",i).eq("user_id",a),d.profile&&(d.profile.credits=((f==null?void 0:f.credits)||0)+s);const n=document.getElementById("nav-credits");n&&(n.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),l(`↩️ Désinscrit · +${s.toLocaleString("fr")} cr. remboursés`,"success"),_t(e,t,"waiting")}async function bi(e,t,i,s,l){const{toast:d}=t;if(!confirm(`Supprimer définitivement "${s}" et tous ses matchs/membres ? Action irréversible.`))return;await T.from("mini_league_matches").delete().eq("league_id",i),await T.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await T.from("mini_leagues").delete().eq("id",i);if(a){d("Erreur suppression ("+a.message+")","error");return}d("Mini League supprimée avec succès","success"),_t(e,t,l)}async function ar(e,t,i){await T.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),_t(e,t,"archived")}async function bt(e,t,i){var H,D,G,M,U,oe,de,N,W;const{state:s,toast:l}=t,d=s.profile.id,[{data:a},{data:p},{data:f}]=await Promise.all([T.from("mini_leagues").select("*").eq("id",i).single(),T.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),T.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){l("Introuvable","error"),await _t(e,t);return}const n=(p||[]).some(K=>K.user_id===d),o=a.creator_id===d,g=(p||[]).map(K=>K.user).filter(Boolean),b=zo(g,f||[]),y=(f||[]).filter(K=>K.matchday===a.current_day),w=a.pot||0,r=a.entry_fee||100,c=y.length>0&&y.every(K=>K.status==="finished"||K.status==="bye"),I=a.current_day>=a.total_days,L=(p||[]).find(K=>K.user_id===d);e.innerHTML=`
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
        ${w>0?`<div style="font-size:12px;font-weight:900;color:${xt};margin-top:4px">🏆 ${w.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${g.length}/${a.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${r} cr./joueur → Pot estimé : ${(r*g.length).toLocaleString("fr")} cr. (🥇${Math.floor(r*g.length*.7).toLocaleString("fr")} · 🥈${Math.floor(r*g.length*.2).toLocaleString("fr")} · 🥉${Math.floor(r*g.length*.1).toLocaleString("fr")})</div>
        ${g.map(K=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${K.club_color2||St};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${K.club_color1||"#fff"}">${(K.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${K.club_name||K.pseudo}</div><div style="font-size:11px;color:#999">@${K.pseudo}</div></div>
            ${K.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
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
        ${y.map(K=>Ui(K,g,d,n)).join("")}
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
            ${w>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${xt}">💰</th>`:""}
          </tr></thead>
          <tbody>${b.map((K,P)=>{const re=w>0&&a.status==="finished"?P===0?Math.floor(w*.7):P===1?Math.floor(w*.2):P===2?Math.floor(w*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${K.userId===d?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${P===0?xt:P<3?St:"#555"}">${["🥇","🥈","🥉"][P]||P+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${K.clubName}</div><div style="font-size:10px;color:#999">@${K.pseudo}</div></td>
              <td style="text-align:center">${K.played}</td><td style="text-align:center">${K.won}-${K.drawn}-${K.lost}</td>
              <td style="text-align:center;color:${K.goalDiff>=0?St:"#cc2222"}">${K.goalDiff>=0?"+":""}${K.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${K.points}</td>
              ${w>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${xt}">${re?re.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(K,P)=>P+1).reverse().map(K=>{const P=(f||[]).filter(re=>re.matchday===K);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${K}</div>${P.map(re=>Ui(re,g,d,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const C=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((H=document.getElementById("ml-back"))==null||H.addEventListener("click",()=>_t(e,t,C)),(D=document.getElementById("ml-start-btn"))==null||D.addEventListener("click",()=>sr(e,t,a,g)),(G=document.getElementById("ml-next-day"))==null||G.addEventListener("click",()=>dr(e,t,i)),(M=document.getElementById("ml-finish-btn"))==null||M.addEventListener("click",()=>Ao(e,t,i,w,b,g)),(U=document.getElementById("ml-join-now"))==null||U.addEventListener("click",()=>To(e,t,i,a.type)),(oe=document.getElementById("ml-leave-btn"))==null||oe.addEventListener("click",()=>rr(e,t,i,r)),(de=document.getElementById("ml-delete-btn"))==null||de.addEventListener("click",()=>bi(e,t,i,a.name,"waiting")),(N=document.getElementById("ml-delete-now"))==null||N.addEventListener("click",()=>bi(e,t,i,a.name,C)),(W=document.getElementById("ml-archive-btn"))==null||W.addEventListener("click",()=>ar(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(K=>{K.addEventListener("click",()=>{const P=y.find(re=>re.id===K.dataset.playMatch);P&&t.navigate("match-mini-league",{mlMatchId:P.id,leagueId:i})})}),a.status==="finished"&&L){const K=b.findIndex(P=>P.userId===d);K>=0&&K<3&&L.prize_amount>0&&setTimeout(()=>lr(e,t,a,L,K),400)}}function Ui(e,t,i,s,l=!1){const d=g=>t.find(b=>b.id===g);if(e.is_bye){const g=d(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"?"} exempté(e)</div>`}const a=d(e.home_id),p=d(e.away_id),f=e.home_id===i||e.away_id===i,n=f&&e.status==="pending"&&s&&!l,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${f?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${f?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?St:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(p==null?void 0:p.club_name)||(p==null?void 0:p.pseudo)||"?"}</div>
    ${n?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function sr(e,t,i,s){const{toast:l,state:d}=t,a=cr(s.map(n=>n.id),i.mode),p=[];a.forEach((n,o)=>n.forEach(g=>p.push({league_id:i.id,matchday:o+1,home_id:g.home||g.bye,away_id:g.away||null,is_bye:!!g.bye,status:g.bye?"bye":"pending"})));const{error:f}=await T.from("mini_league_matches").insert(p);if(f){l("Erreur calendrier : "+f.message,"error");return}await T.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),l(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),bt(e,t,i.id)}async function dr(e,t,i){const{data:s}=await T.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),l=(s.current_day||0)+1;if(l>(s.total_days||0)){await Ao(e,t,i,s.pot||0,null,null);return}await T.from("mini_leagues").update({current_day:l}).eq("id",i),t.toast(`Journée ${l} commencée !`,"success"),bt(e,t,i)}async function Ao(e,t,i,s,l,d){const{toast:a,state:p}=t;let f=l,n=d;if(!f){const{data:g}=await T.from("mini_league_matches").select("*").eq("league_id",i),{data:b}=await T.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);n=(b||[]).map(y=>y.user).filter(Boolean),f=zo(n,g||[])}const o=[Math.floor(s*.7),Math.floor(s*.2),Math.floor(s*.1)];await Promise.all(f.slice(0,3).map((g,b)=>o[b]?T.from("mini_league_members").update({prize_amount:o[b],prize_claimed:!1}).eq("league_id",i).eq("user_id",g.userId):Promise.resolve())),await T.from("mini_leagues").update({status:"finished"}).eq("id",i),a("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),bt(e,t,i)}async function lr(e,t,i,s,l){var b,y;const{state:d,toast:a}=t,p=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],f=["🥇","🥈","🥉"][l],n=s.prize_amount||p[l]||0,o=s.prize_claimed,g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",g.innerHTML=`
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
    </div>`,document.body.appendChild(g),(b=g.querySelector("#prize-close"))==null||b.addEventListener("click",()=>g.remove()),g.addEventListener("click",w=>{w.target===g&&g.remove()}),(y=g.querySelector("#claim-prize-btn"))==null||y.addEventListener("click",async()=>{const{data:w}=await T.from("users").select("credits").eq("id",d.profile.id).single();await T.from("users").update({credits:((w==null?void 0:w.credits)||0)+n}).eq("id",d.profile.id),await T.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",d.profile.id),d.profile&&(d.profile.credits=((w==null?void 0:w.credits)||0)+n);const r=document.getElementById("nav-credits");r&&(r.textContent=`💰 ${d.profile.credits.toLocaleString("fr")}`),a(`💰 +${n.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),g.remove(),bt(e,t,i.id)})}function cr(e,t){const s=e.length%2===0?[...e]:[...e,null],l=s.length;let d=s.slice(1);const a=[];for(let p=0;p<l-1;p++){const f=[],n=[s[0],...d];for(let o=0;o<l/2;o++){const g=n[o],b=n[l-1-o];g===null?f.push({bye:b}):b===null?f.push({bye:g}):f.push({home:g,away:b})}a.push(f),d=[d[d.length-1],...d.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(p=>p.map(f=>f.bye?f:{home:f.away,away:f.home}))]:a}function zo(e,t){const i={};return e.forEach(s=>{i[s.id]={userId:s.id,pseudo:s.pseudo,clubName:s.club_name||s.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(s=>s.status==="finished"&&!s.is_bye&&s.home_score!=null).forEach(s=>{const l=i[s.home_id],d=i[s.away_id];!l||!d||(l.played++,d.played++,l.goalsFor+=s.home_score,l.goalsAgainst+=s.away_score,d.goalsFor+=s.away_score,d.goalsAgainst+=s.home_score,s.home_score>s.away_score?(l.won++,l.points+=3,d.lost++):s.home_score<s.away_score?(d.won++,d.points+=3,l.lost++):(l.drawn++,l.points++,d.drawn++,d.points++),l.goalDiff=l.goalsFor-l.goalsAgainst,d.goalDiff=d.goalsFor-d.goalsAgainst)}),Object.values(i).sort((s,l)=>l.points-s.points||l.goalDiff-s.goalDiff||l.goalsFor-s.goalsFor)}async function Ki(e,t,i,s){var l,d;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:s};try{const a=(d=(l=t==null?void 0:t.state)==null?void 0:l.profile)==null?void 0:d.id;try{(T.getChannels?T.getChannels():[]).forEach(f=>{const n=f.topic||"";(n.includes("matchmaking")||n.includes("pvp-match"))&&T.removeChannel(f)})}catch(p){console.warn("[FriendMatch] cleanup canaux:",p)}a&&(await T.rpc("cancel_matchmaking",{p_user_id:a}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",a).then(()=>{},()=>{}))}catch{}await si(e,t,"random",({deckId:a,formation:p,starters:f,subsRaw:n,gcCardsEnriched:o,gcDefs:g,stadiumDef:b})=>{const y=w=>pr(e,t,a,p,f,n,w,g||[],i);if(!o.length){y([]);return}ai(e,o,y)})}async function pr(e,t,i,s,l,d,a=[],p=[],f,n){const{state:o,navigate:g,toast:b}=t,y=o.profile.id;let w=!1,r=null;et(e);try{await T.rpc("cancel_matchmaking",{p_user_id:y})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",y)}catch{}const{data:c}=await T.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",f).single();if(!c){b("Match introuvable","error"),We(e),g("mini-league");return}if(c.home_id!==y&&c.away_id!==y){b("Tu ne fais pas partie de ce match","error"),We(e),g("mini-league");return}const I=c.home_id===y,L=I?c.away:c.home,C=I?c.away_id:c.home_id,H=(G,M)=>{var U;e.innerHTML=`
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
      </div>`,(U=document.getElementById("lobby-cancel"))==null||U.addEventListener("click",()=>{w=!0,clearInterval(r),We(e),g("mini-league")})},D=async(G,M)=>{w=!0,clearInterval(r),await new Promise(U=>setTimeout(U,600)),e.isConnected&&ur(e,t,G,M,a,p)};if(H(),I){let G=c.match_id;if(!G){const{data:U,error:oe}=await T.from("matches").insert({home_id:y,away_id:C,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(oe||!U){b("Erreur création match","error"),We(e),g("mini-league");return}G=U.id,await T.from("mini_league_matches").update({match_id:G,status:"playing"}).eq("id",f)}const M=G;r=setInterval(async()=>{if(w){clearInterval(r);return}const{data:U}=await T.from("matches").select("away_deck_id").eq("id",M).single();U!=null&&U.away_deck_id&&(clearInterval(r),D(M,!0))},1500)}else{let G=c.match_id;r=setInterval(async()=>{if(w){clearInterval(r);return}const{data:M}=await T.from("mini_league_matches").select("match_id").eq("id",f).single();M!=null&&M.match_id&&(clearInterval(r),G=M.match_id,await T.from("matches").update({away_deck_id:i}).eq("id",G),D(G,!1))},1500)}}async function ur(e,t,i,s,l=[],d=[]){var E;const{state:a,navigate:p,toast:f}=t,n=((E=a.params)==null?void 0:E.leagueId)||null,o=s?"p1":"p2",g=s?"p2":"p1",b=(l||[]).map(u=>u.id),y=(l||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:w}=await T.from("matches").select("*").eq("id",i).single();if(!w){f("Match introuvable","error"),p("mini-league");return}async function r(){const[{data:u},{data:m},{data:x},{data:h}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:w.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:w.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",w.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",w.away_id).single()]),v=S=>{const q=Number(S.evolution_bonus)||0;return{cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:(Number(S.note_g)||0)+(S.job==="GK"||S.job2==="GK"&&Number(S.note_g)>0?q:0),note_d:(Number(S.note_d)||0)+(S.job==="DEF"||S.job2==="DEF"&&Number(S.note_d)>0?q:0),note_m:(Number(S.note_m)||0)+(S.job==="MIL"||S.job2==="MIL"&&Number(S.note_m)>0?q:0),note_a:(Number(S.note_a)||0)+(S.job==="ATT"||S.job2==="ATT"&&Number(S.note_a)>0?q:0),evolution_bonus:q,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},$=((u==null?void 0:u.starters)||[]).map(S=>v(S)),z=((m==null?void 0:m.starters)||[]).map(S=>v(S)),k=(u==null?void 0:u.formation)||"4-4-2",A=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:(()=>{const S=yt($,k);return stadiumDef?Ht(S,stadiumDef):S})(),p2Team:yt(z,A),p1Subs:(()=>{const S=((u==null?void 0:u.subs)||[]).map(q=>v(q));return stadiumDef&&ni(S,stadiumDef),S})(),p2Subs:((m==null?void 0:m.subs)||[]).map(S=>v(S)),p1Formation:k,p2Formation:A,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?b:[],gc_p2:s?[]:b,gcCardsFull_p1:s?y:[],gcCardsFull_p2:s?[]:y,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let c=w.game_state&&Object.keys(w.game_state).length?w.game_state:null;if(!c)if(s){c=await r();const{data:u}=await T.from("matches").select("game_state").eq("id",i).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await T.from("matches").update({game_state:c,turn_user_id:w.home_id}).eq("id",i):c=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!c;u++){await new Promise(x=>setTimeout(x,400));const{data:m}=await T.from("matches").select("game_state").eq("id",i).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(c=m.game_state)}if(!c){f("Erreur de synchronisation","error"),p("mini-league");return}c.gc_p2=b,c.gcCardsFull_p2=y,await T.from("matches").update({game_state:c}).eq("id",i)}let I=!1,L=!1,C=!1,H=null,D=!1;const G=new Set,M=new Set;function U(u){var S,q;try{T.removeChannel(oe)}catch{}const m=c[o+"Score"]||0,x=c[g+"Score"]||0;if(!C){C=!0;const F=u.winner_id||(m>x?a.profile.id:x>m?"opp":null),R=F===a.profile.id?"win":F?"loss":null;R&&ii(()=>Promise.resolve().then(()=>ao),void 0).then(O=>O.applyOwnEvolution(a.profile.id,R)).catch(()=>{})}if(!L){const F=c.p1Score||0,R=c.p2Score||0,O=(c.usedGc_p1||[]).length,Z=(c.usedGc_p2||[]).length,Y=u.winner_id||(F>R?w.home_id:R>F?w.away_id:null);(Y?a.profile.id===Y:a.profile.id<(s?w.away_id:w.home_id))&&(L=!0,eo({player1Id:w.home_id,player2Id:w.away_id,score1:F,score2:R,gc1:O,gc2:Z}).catch(ae=>console.warn("[FriendMatch] updateStats:",ae)))}let h,v;u.winner_id?(h=u.winner_id===a.profile.id,v=!1):u.forfeit?(h=m>x,v=!1):(v=m===x,h=m>x),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const $=document.createElement("div");$.id="pvp-end-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const z=v?"🤝":h?"🏆":"😞",k=v?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",A=v?"#fff":h?"#FFD700":"#ff6b6b";$.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${A}">${k}</div>
      <div style="font-size:18px">${c[o+"Name"]} ${m} – ${x} ${c[g+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild($),(q=$.querySelector("#pvp-end-home"))==null||q.addEventListener("click",()=>{$.remove(),We(e),n?p("mini-league",{openLeagueId:n}):p("mini-league")})}const oe=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},u=>{const m=u.new;try{if(m.status==="finished"||m.forfeit){if(I||(I=!0,H&&(clearInterval(H),H=null),m.game_state&&(c=m.game_state),c.phase==="finished"&&!m.forfeit&&document.getElementById("pvp-home")))return;U(m);return}if(m.game_state){const x=c;c=m.game_state;const h=c._lastGC;if(h&&h.seq&&!M.has(h.seq)&&(M.add(h.seq),h.by!==o)){Ae(h.type,h.by,()=>ye());return}const v=x[o+"Score"]||0,$=x[g+"Score"]||0,z=c[o+"Score"]||0,k=c[g+"Score"]||0,A=z>v,S=k>$;if((A||S)&&!G.has(c.round)){G.add(c.round);const q=[...c.log||[]].reverse().find(R=>R.isGoal),F=((q==null?void 0:q.homePlayers)||[]).map(R=>({name:R.name,note:R.note,portrait:R.portrait,job:R.job}));we(F,z,k,A,()=>ye());return}ye()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function de(u){Object.assign(c,u),c.lastActionAt=new Date().toISOString();const{error:m}=await T.from("matches").update({game_state:c}).eq("id",i);m&&f("Erreur de synchronisation","error");try{ye()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function N(){if(I)return;I=!0,H&&(clearInterval(H),H=null);const u=s?w.away_id:w.home_id,m=s?"p2":"p1",x=s?"p1":"p2",h={...c,[m+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",i)}catch{}try{T.removeChannel(oe)}catch{}setTimeout(()=>{We(e),p("mini-league")},800)}const W={BOOST_STAT:({value:u=1,count:m=1,roles:x=[]},h,v)=>{const $=h[o+"Team"],z=Object.entries($).filter(([k])=>!x.length||x.includes(k)).flatMap(([k,A])=>A.filter(S=>!S.used).map(S=>({...S,_line:k})));if(!z.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(h);return}K(z,m,`Choisir ${m} joueur(s) à booster (+${u})`,k=>{k.forEach(A=>{const S=($[A._line]||[]).find(q=>q.cardId===A.cardId);S&&(S.boost=(S.boost||0)+u,h.log.push({text:`⚡ +${u} sur ${S.name}`,type:"info"}))}),h[o+"Team"]=$,v(h)})},DEBUFF_STAT:({value:u=1,count:m=1,roles:x=[],target:h="ai"},v,$)=>{const z=h==="home"?o:g,k=v[z+"Team"],A=h==="home"?"allié":"adverse",S=Object.entries(k).filter(([q])=>!x.length||x.includes(q)).flatMap(([q,F])=>F.map(R=>({...R,_line:q})));if(!S.length){v.log.push({text:`🎯 Aucun joueur ${A}`,type:"info"}),$(v);return}K(S,m,`Choisir ${m} joueur(s) ${A}(s) (-${u})`,q=>{q.forEach(F=>{const R=(k[F._line]||[]).find(O=>O.cardId===F.cardId);R&&(R.boost=(R.boost||0)-u,v.log.push({text:`🎯 -${u} sur ${R.name}`,type:"info"}))}),v[z+"Team"]=k,$(v)})},GRAY_PLAYER:({count:u=1,roles:m=[],target:x="ai"},h,v)=>{const $=x==="home"?o:g,z=h[$+"Team"],k=x==="home"?"allié":"adverse",A=Object.entries(z).filter(([S])=>!m.length||m.includes(S)).flatMap(([S,q])=>q.filter(F=>!F.used).map(F=>({...F,_line:S})));if(!A.length){h.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),v(h);return}K(A,u,`Choisir ${u} joueur(s) ${k}(s) à exclure`,S=>{const q="usedCardIds_"+$,F=new Set(h[q]||[]);S.forEach(R=>{const O=(z[R._line]||[]).find(Z=>Z.cardId===R.cardId);O&&(O.used=!0,F.add(R.cardId),h.log.push({text:`❌ ${O.name} exclu !`,type:"info"}))}),h[q]=[...F],h[$+"Team"]=z,v(h)})},REVIVE_PLAYER:({count:u=1,roles:m=[]},x,h)=>{const v=x[o+"Team"],$=Object.entries(v).filter(([z])=>!m.length||m.includes(z)).flatMap(([z,k])=>k.filter(A=>A.used).map(A=>({...A,_line:z})));if(!$.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(x);return}K($,u,`Choisir ${u} joueur(s) à ressusciter`,z=>{z.forEach(k=>{const A=(v[k._line]||[]).find(S=>S.cardId===k.cardId);A&&(A.used=!1,x.log.push({text:`💫 ${A.name} ressuscité !`,type:"info"}))}),x[o+"Team"]=v,h(x)})},REMOVE_GOAL:({},u,m)=>{const x=g+"Score";u[x]>0?(u[x]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(u)},ADD_GOAL_DRAW:({},u,m)=>{u[o+"Score"]===u[g+"Score"]?(u[o+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(u)},ADD_SUB:({value:u=1},m,x)=>{m.maxSubs=(m.maxSubs||3)+u,m.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),x(m)},CUSTOM:({},u,m)=>m(u)};function K(u,m,x,h){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let $=[];function z(){var A,S;const k=u.map(q=>{const F={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[q._line]||"#555",R=je(q,q._line)+(q.boost||0),Z=$.find(ie=>ie.cardId===q.cardId)?"#FFD700":"rgba(255,255,255,0.25)",Y=q.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${q.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Z};background:${F};overflow:hidden;cursor:pointer;${Y}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${q.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${R}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${q._line}</div>
        </div>`}).join("");v.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${x}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$.length}/${m}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${k}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${$.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${$.length}/${m})
          </button>
        </div>`,(A=v.querySelector("#pp-close"))==null||A.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(q=>{q.addEventListener("click",()=>{const F=q.dataset.cid,R=u.find(Z=>Z.cardId===F),O=$.findIndex(Z=>Z.cardId===F);R&&(O>-1?$.splice(O,1):$.length<m&&$.push(R),z())})}),(S=v.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{v.remove(),h($)})}z(),document.body.appendChild(v)}async function P(u,m){const h=(c["gcCardsFull_"+o]||[]).find(k=>k.id===u),v=(h==null?void 0:h._gcDef)||(c.gcDefs||[]).find(k=>{var A;return k.name===m||((A=k.name)==null?void 0:A.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),$=[...c["usedGc_"+o]||[],u],z={type:m,by:o,seq:(c._gcAnimSeq||0)+1};M.add(z.seq),Ae(m,o,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const A=W[v.effect_type];if(A){const S={...c};A(v.effect_params||{},S,async q=>{q["usedGc_"+o]=$,q._lastGC=z,q._gcAnimSeq=z.seq,await de(q)});return}}const k={...c};switch(m){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const A=g+"Score";k[A]>0&&(k[A]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+o]=$,k._lastGC=z,k._gcAnimSeq=z.seq,await de(k)})}function re(u,m){const x="usedCardIds_"+u,h=new Set(c[x]||[]);m.forEach(v=>h.add(v)),c[x]=[...h]}function pe(){for(const u of["p1","p2"]){const m=new Set(c["usedCardIds_"+u]||[]),x=c[u+"Team"];if(x)for(const h of["GK","DEF","MIL","ATT"])(x[h]||[]).forEach(v=>{v.used=m.has(v.cardId)})}}function ye(){var nt,gt,le,Ee,te,ue;if(c.phase==="reveal")return Le();if(c.phase==="midfield")return _e();if(c.phase==="finished")return _();const u=c[o+"Team"],m=c[g+"Team"];pe();const x=c[o+"Score"],h=c[g+"Score"],v=c[o+"Name"],$=c[g+"Name"],z=c.phase===o+"-attack",k=c.phase===o+"-defense",A=Array.isArray(c["selected_"+o])?c["selected_"+o]:[],S=A.map(ee=>ee.cardId),q=window.innerWidth>=700,F=c[o+"Subs"]||[],R=c["usedSubIds_"+o]||[],O=F.filter(ee=>!R.includes(ee.cardId)),Z=c["gcCardsFull_"+o]||[],Y=c["usedGc_"+o]||[],ie=Z.filter(ee=>!Y.includes(ee.id)),ae=c.boostOwner===o&&!c.boostUsed,fe=!["GK","DEF","MIL","ATT"].some(ee=>(m[ee]||[]).some(ce=>!ce.used)),me=[...u.MIL||[],...u.ATT||[]].filter(ee=>!ee.used),$e=z&&fe&&me.length===0?[...u.GK||[],...u.DEF||[]].filter(ee=>!ee.used).map(ee=>ee.cardId):[];function ke(ee,ce,Be){var Ii,Mi;const Te=ee._gcDef,tt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[Te==null?void 0:Te.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",it={purple:"#b06ce0",light_blue:"#00d4ef"}[Te==null?void 0:Te.color]||"#b06ce0",rt=(Te==null?void 0:Te.name)||ee.gc_type,st=(Te==null?void 0:Te.effect)||((Ii=Ve[ee.gc_type])==null?void 0:Ii.desc)||"",ct=Te!=null&&Te.image_url?`/icons/${Te.image_url}`:null,$t=((Mi=Ve[ee.gc_type])==null?void 0:Mi.icon)||"⚡",pt=Math.round(Be*.22),ht=Math.round(Be*.22),kt=Be-pt-ht,Ut=rt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ee.id}" data-gc-type="${ee.gc_type}"
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
      </div>`}const Ce=(ee,ce)=>ce?qe(130,175):ke(ee,130,175),Re=(ee,ce)=>ce?qe(68,95):ke(ee,68,95),Fe=q?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=z?be(o)?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${A.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Fe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${A.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${$}</div>`,De=z&&!be(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':z||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${A.length}/3 sélectionné(s)</div>`:"",Ke=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${q?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${O.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':O.map(ee=>`<div class="pvp-sub-btn" data-sub-id="${ee.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(ee,q?76:44,q?100:58)}</div>`).join("")}
    </div>`,Ne=z?"attack":k?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
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
        </div>`}return`<div style="font-size:11px;color:${ee.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ee.type==="goal"?700:400};padding:3px 2px">${ee.text||""}</div>`}const Je=(()=>{var ce,Be;if(k&&((ce=c.pendingAttack)!=null&&ce.players)){const Te=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${$} ATTAQUE — Défendez !</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#ff6b6b",Te.total)}
        </div>`}if(z&&((Be=c.pendingAttack)!=null&&Be.players)){const Te=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((Te.players||[]).map(tt=>({...tt,used:!1})),"#00ff88",Te.total)}
        </div>`}const ee=(c.log||[]).slice(-1)[0];return ee?'<div style="padding:2px 4px">'+Ue(ee)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Qe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(c.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",q?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Qe}
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
        ${Qe}
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
      </div>`;function Ze(){const ee=e.querySelector(".match-screen");if(!ee)return;const ce=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ee.style.height=ce+"px",ee.style.minHeight=ce+"px",ee.style.maxHeight=ce+"px",ee.style.overflow="hidden";const Be=e.querySelector("#mobile-action-bar"),Te=e.querySelector("#mobile-play-area");Be&&Te&&(Te.style.paddingBottom=Be.offsetHeight+"px")}if(Ze(),setTimeout(Ze,120),setTimeout(Ze,400),D||(D=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ze),window.visualViewport.addEventListener("scroll",Ze)),window.addEventListener("resize",Ze)),function(){const ce=e.querySelector(".terrain-wrapper svg");ce&&(ce.removeAttribute("width"),ce.removeAttribute("height"),ce.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ce.setAttribute("viewBox","-26 -26 352 352"),ce.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ee=>{ee.addEventListener("click",()=>{if(!z&&!k)return;const ce=ee.dataset.cardId,Be=ee.dataset.role,Te=(u[Be]||[]).find(st=>st.cardId===ce);if(!Te||Te.used)return;const tt=$e.includes(ce);if(z&&!["MIL","ATT"].includes(Be)&&!tt)return;Array.isArray(c["selected_"+o])||(c["selected_"+o]=[]);const it=c["selected_"+o],rt=it.findIndex(st=>st.cardId===ce);rt>-1?it.splice(rt,1):it.length<3&&it.push({...Te,_role:Be}),ye()})}),e.querySelectorAll(".match-used-hit").forEach(ee=>{ee.addEventListener("click",()=>X(ee.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ee=>{ee.addEventListener("click",()=>X())}),(nt=e.querySelector("#pvp-sub-open"))==null||nt.addEventListener("click",()=>X()),e.querySelectorAll(".pvp-gc-mini").forEach(ee=>{ee.addEventListener("click",()=>Ie(ee.dataset.gcId,ee.dataset.gcType))}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>xe()),(le=e.querySelector("#pvp-action"))==null||le.addEventListener("click",ee=>{z?ee.currentTarget.dataset.pass==="1"||!be(o)?Q():V():k&&se()}),(Ee=e.querySelector("#pvp-quit"))==null||Ee.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&N()}),(te=e.querySelector("#pvp-view-opp"))==null||te.addEventListener("click",()=>ge()),(ue=e.querySelector("#pvp-toggle-history"))==null||ue.addEventListener("click",()=>J()),H&&(clearInterval(H),H=null),(z||k)&&!I){let ee=30,ce=!1;const Be=()=>document.getElementById("pvp-timer"),Te=()=>{Be()&&(Be().textContent=ee+"s",Be().style.color=ce?"#ff4444":"#fff")};Te(),H=setInterval(()=>{ee--,ee<0?ce?(clearInterval(H),H=null,z&&!be(o)?Q():N()):(ce=!0,ee=15,Te()):Te()},1e3)}}function Le(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${c[g+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(c[g+"Team"],c[g+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await de({phase:"midfield"})},5e3)}let ve=!1;function _e(){if(ve)return;const u=c[o+"Team"].MIL||[],m=c[g+"Team"].MIL||[];function x(ie){return ie.reduce((ae,fe)=>ae+je(fe,"MIL"),0)}function h(ie){let ae=0;for(let fe=0;fe<ie.length-1;fe++){const me=at(ie[fe],ie[fe+1]);me==="#00ff88"?ae+=2:me==="#FFD700"&&(ae+=1)}return ae}const v=x(u)+h(u),$=x(m)+h(m),z=v>=$;function k(ie,ae,fe){return`<div id="duel-row-${fe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
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
          Score: ${x(ie)} + ${h(ie)} liens = <b style="color:#fff">${x(ie)+h(ie)}</b>
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
      ${k(u,c[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k(m,c[g+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const A=(ie,ae)=>e.querySelectorAll(ie).forEach((fe,me)=>{setTimeout(()=>{fe.style.opacity="1",fe.style.transform="translateY(0) scale(1)"},ae+me*90)});A(".duel-card-me",150),A(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ie,ae)=>setTimeout(()=>{ie.style.opacity="1"},ae*70)),900),setTimeout(()=>{const ie=e.querySelector("#pvp-vs");ie&&(ie.style.opacity="1",ie.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ae=>ae.style.opacity="1")},1250);function S(ie,ae,fe){const me=document.getElementById(ie);if(!me)return;const $e=performance.now(),ke=qe=>{const Ce=Math.min(1,(qe-$e)/fe);me.textContent=Math.round(ae*(1-Math.pow(1-Ce,3))),Ce<1?requestAnimationFrame(ke):me.textContent=ae};requestAnimationFrame(ke)}setTimeout(()=>{S("pvp-score-me",v,800),S("pvp-score-opp",$,800)},1500);const q=c.p1Team.MIL||[],F=c.p2Team.MIL||[],R=x(q)+h(q),O=x(F)+h(F),Z=R>=O?"p1":"p2";let Y=c.boostValue;Y==null&&(Y=ri(),c.boostValue=Y,c.boostOwner=Z,c.boostUsed=!1),ve=!0,setTimeout(()=>{const ie=e.querySelector("#duel-row-"+(z?"me":"opp")),ae=e.querySelector("#duel-row-"+(z?"opp":"me")),fe=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),$e=z?fe:me,ke=z?me:fe;$e&&($e.style.fontSize="80px",$e.style.color=z?"#FFD700":"#ff6b6b",$e.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),ke&&(ke.style.opacity="0.25"),setTimeout(()=>{ie&&(ie.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ie.style.zIndex="5"),setTimeout(()=>{const qe=document.getElementById("duel-shock");qe&&(qe.style.animation="shockwave .5s ease-out forwards"),ae&&(ae.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Fe;const qe=document.getElementById("pvp-duel-finale");if(!qe)return;const Ce=c.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Y+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;qe.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+c[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+c[g+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ce+Re,qe.style.transition="opacity .45s ease",qe.style.opacity="1",qe.style.pointerEvents="auto",(Fe=document.getElementById("pvp-start-match"))==null||Fe.addEventListener("click",async()=>{const Oe=Z;await de({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:Y,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function we(u,m,x,h,v){const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const z=Array.from({length:10},(q,F)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${F%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][F%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};$.innerHTML=`
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
        ${m} – ${x}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(q=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[q.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${q.portrait?`<img src="${q.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(q.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild($);let A=!1;const S=()=>{A||(A=!0,$.remove(),setTimeout(()=>v(),50))};$.addEventListener("click",S),setTimeout(S,3500)}function Ae(u,m,x){var Y,ie;const h=(c.gcDefs||[]).find(ae=>{var fe;return ae.name===u||((fe=ae.name)==null?void 0:fe.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",z=(h==null?void 0:h.name)||u,k=(h==null?void 0:h.effect)||((Y=Ve[u])==null?void 0:Y.desc)||"",A=h!=null&&h.image_url?`/icons/${h.image_url}`:null,S=((ie=Ve[u])==null?void 0:ie.icon)||"⚡",F=m===o?"Vous":c[m+"Name"]||"Adversaire",R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",R.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${$}66}50%{box-shadow:0 0 60px ${$}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${$};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${F} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${$};background:${v};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${z.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${z}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(R);let O=!1;const Z=()=>{O||(O=!0,R.remove(),setTimeout(()=>x&&x(),50))};R.addEventListener("click",Z),setTimeout(Z,3e3)}function Ie(u,m){var R,O,Z,Y;const h=(c["gcCardsFull_"+o]||[]).find(ie=>ie.id===u),v=h==null?void 0:h._gcDef,$={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",z={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",k=(v==null?void 0:v.name)||m,A=(v==null?void 0:v.effect)||((R=Ve[m])==null?void 0:R.desc)||"Carte spéciale.",S=v!=null&&v.image_url?`/icons/${v.image_url}`:null,q=((O=Ve[m])==null?void 0:O.icon)||"⚡",F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",F.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${z};background:${$};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${z}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${q}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${A}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(F),(Z=F.querySelector("#pvp-gc-back"))==null||Z.addEventListener("click",()=>F.remove()),(Y=F.querySelector("#pvp-gc-use"))==null||Y.addEventListener("click",()=>{F.remove(),P(u,m)})}function xe(){var h;const u=c[o+"Team"],m=Object.entries(u).flatMap(([v,$])=>($||[]).filter(z=>!z.used).map(z=>({...z,_line:v})));if(!m.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${c.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(v=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",z=je(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${$};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#bp-close"))==null||h.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const $=v.dataset.cid,z=m.find(A=>A.cardId===$);if(!z)return;const k=(u[z._line]||[]).find(A=>A.cardId===$);k&&(k.boost=(k.boost||0)+c.boostValue),x.remove(),await de({[o+"Team"]:u,boostUsed:!0})})})}function X(u=null){var O,Z;if(!(c.phase===o+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const x=c[o+"Team"],h=c["usedSubIds_"+o]||[],v=c.maxSubs||3;if(h.length>=v){f(`Maximum ${v} remplacements atteint`,"warning");return}const $=Object.entries(x).flatMap(([Y,ie])=>(ie||[]).filter(ae=>ae.used).map(ae=>({...ae,_line:Y}))),z=(c[o+"Subs"]||[]).filter(Y=>!h.includes(Y.cardId));if(!$.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!z.length){f("Aucun remplaçant disponible","warning");return}let k=Math.max(0,$.findIndex(Y=>Y.cardId===u));const A=((O=$[k])==null?void 0:O._line)||((Z=$[k])==null?void 0:Z.job);let S=Math.max(0,z.findIndex(Y=>Y.job===A)),q=!1;const F=document.createElement("div");F.id="pvp-sub-overlay",F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function R(){var ke,qe,Ce,Re,Fe,Oe;const Y=$[k],ie=z[S],ae=Math.min(130,Math.round((window.innerWidth-90)/2)),fe=Math.round(ae*1.35),me=De=>`background:rgba(255,255,255,0.12);border:none;color:${De?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${De?"default":"pointer"};flex-shrink:0`;F.innerHTML=`
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
          <button id="pout-up" style="${me(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${Y?Ye({...Y,used:!1,boost:0},ae,fe):"<div>—</div>"}</div>
          <button id="pout-down" style="${me(k>=$.length-1)}" ${k>=$.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${$.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ke=F.querySelector("#psub-close"))==null||ke.addEventListener("click",()=>F.remove()),(qe=F.querySelector("#pout-up"))==null||qe.addEventListener("click",()=>{k>0&&(k--,R())}),(Ce=F.querySelector("#pout-down"))==null||Ce.addEventListener("click",()=>{k<$.length-1&&(k++,R())}),(Re=F.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{S>0&&(S--,R())}),(Fe=F.querySelector("#pin-down"))==null||Fe.addEventListener("click",()=>{S<z.length-1&&(S++,R())});const $e=(De,Ke,Ne,He)=>{const Ue=F.querySelector("#"+De);if(!Ue)return;let Je=0;Ue.addEventListener("touchstart",Qe=>{Je=Qe.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Qe=>{const Ze=Qe.changedTouches[0].clientY-Je;if(Math.abs(Ze)<30)return;const nt=Ke();Ze<0&&nt<He-1?(Ne(nt+1),R()):Ze>0&&nt>0&&(Ne(nt-1),R())},{passive:!0})};$e("pin-panel",()=>S,De=>S=De,z.length),$e("pout-panel",()=>k,De=>k=De,$.length),(Oe=F.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async De=>{if(De.preventDefault(),De.stopPropagation(),q)return;q=!0;const Ke=$[k],Ne=z[S];if(!Ke||!Ne)return;const He=Ke._line,Ue=(x[He]||[]).findIndex(Ze=>Ze.cardId===Ke.cardId);if(Ue===-1){f("Erreur : joueur introuvable","error"),F.remove();return}const Je={...Ne,_line:He,position:Ke.position,used:!1,boost:0};x[He].splice(Ue,1,Je);const Qe=[...h,Ne.cardId];F.remove(),ne(Ke,Ne,async()=>{await de({[o+"Team"]:x,[g+"Team"]:c[g+"Team"],["usedSubIds_"+o]:Qe})})})}document.body.appendChild(F),R()}function ne(u,m,x){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const $=(A,S,q)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${q}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[A.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(A)?`<img src="${Pe(A)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(A.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${$(m,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${$(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let z=!1;const k=()=>{z||(z=!0,v.remove(),setTimeout(()=>x(),50))};v.addEventListener("click",k),setTimeout(k,2200)}function ge(){var m;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${c[g+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(c[g+"Team"],c[g+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(m=u.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>u.remove())}function J(){var h;const u=c.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const x=v=>{var z,k,A;if(v.type==="duel"){const S=v.isGoal,q=v.homeScored&&o==="p1"||!v.homeScored&&S&&o==="p2",F=v.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",R=S?q?"⚽ BUT !":"⚽ BUT adversaire !":(z=v.homePlayers)!=null&&z.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${F};margin-bottom:4px">
          <div style="font-size:9px;color:${F};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${R}</div>
          ${(k=v.homePlayers)!=null&&k.length?`<div style="margin-bottom:3px">${ot(v.homePlayers,"rgba(255,255,255,0.7)",v.homeTotal)}</div>`:""}
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
      </div>`};m.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(x).join("")}
      </div>`,document.body.appendChild(m),(h=m.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>m.remove())}async function Q(){if(c.phase!==o+"-attack")return;const u=o==="p1"?"p2":"p1",m=(c.round||0)+1,x=[...c.log||[]];x.push({type:"info",text:`⏭️ ${c[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=ze(c),v=be(u),$=h||!v?"finished":u+"-attack";await de({["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:$,attacker:u,round:m,log:x}),$==="finished"&&await B(c)}async function V(){const u=c[o+"Team"],m=!["GK","DEF","MIL","ATT"].some($=>(c[g+"Team"][$]||[]).some(z=>!z.used)),x=(c["selected_"+o]||[]).map($=>{const z=(u[$._role]||[]).find(R=>R.cardId===$.cardId)||$,k=m&&["GK","DEF"].includes($._role),A=u[$._role]||[],S=A.findIndex(R=>R.cardId===$.cardId),q=lt(A.length),F=S>=0?q[S]:z._col??1;return{...z,_line:$._role,_col:F,...k?{note_a:Math.max(1,Number(z.note_a)||0)}:{}}});if(!x.length)return;const h=Nt(x,c.modifiers[o]||{});re(o,x.map($=>$.cardId)),x.forEach($=>{const z=(u[$._role]||[]).find(k=>k.cardId===$.cardId);z&&(z.used=!0)}),c["selected_"+o]=[],ye();const v=[...c.log||[]];if(m){const $=(c[o+"Score"]||0)+1,z=x.map(F=>({name:F.name,note:je(F,F._line||"ATT"),portrait:Pe(F),job:F.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:z,homeTotal:h.total,aiTotal:0});const k=(c.round||0)+1,A=o==="p1"?"p2":"p1",S={...c,[o+"Team"]:u,[o+"Score"]:$},q=ze(S);G.add(k),we(z,$,c[g+"Score"]||0,!0,async()=>{await de({[o+"Team"]:u,[o+"Score"]:$,["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:q?"finished":A+"-attack",attacker:A,round:k,log:v}),q&&await B({...c,[o+"Score"]:$})});return}v.push({type:"pending",text:`⚔️ ${c[o+"Name"]} attaque (${h.total})`}),await de({[o+"Team"]:u,[g+"Team"]:c[g+"Team"],pendingAttack:{...h,players:x,side:o},["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},phase:g+"-defense",log:v})}async function se(){const u=c[o+"Team"],m=(c["selected_"+o]||[]).map(Y=>{const ie=(u[Y._role]||[]).find(ke=>ke.cardId===Y.cardId)||Y,ae=u[Y._role]||[],fe=ae.findIndex(ke=>ke.cardId===Y.cardId),me=lt(ae.length),$e=fe>=0?me[fe]:ie._col??1;return{...ie,_line:Y._role,_col:$e}}),x=Rt(m,c.modifiers[o]||{});re(o,m.map(Y=>Y.cardId)),m.forEach(Y=>{const ie=(u[Y._role]||[]).find(ae=>ae.cardId===Y.cardId);ie&&(ie.used=!0)}),c["selected_"+o]=[],ye();const h=Ot(c.pendingAttack.total,x.total,c.modifiers[o]||{}),v=c.pendingAttack.side,$=h==="attack"||(h==null?void 0:h.goal),z=v==="p1"?"p2":"p1",k=(c.round||0)+1,A=(c.pendingAttack.players||[]).map(Y=>({name:Y.name,note:je(Y,Y._line||"ATT"),portrait:Pe(Y),job:Y.job})),S=[...c.log||[]];S.push({type:"duel",isGoal:$,homeScored:$&&v===o,text:$?`⚽ BUT de ${c[v+"Name"]} ! (${c.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${c.pendingAttack.total} vs ${x.total})`,homePlayers:A,aiPlayers:m.map(Y=>({name:Y.name,note:je(Y,Y._line||"DEF"),portrait:Pe(Y),job:Y.job})),homeTotal:c.pendingAttack.total,aiTotal:x.total});const q=$?(c[v+"Score"]||0)+1:c[v+"Score"]||0,F={...c,[o+"Team"]:u,[v+"Score"]:q},R=ze(F),O=R?"finished":z+"-attack",Z=async()=>{await de({[o+"Team"]:u,[g+"Team"]:c[g+"Team"],[v+"Score"]:q,["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:O,attacker:z,round:k,log:S}),(O==="finished"||R)&&await B({...c,[v+"Score"]:q})};if($){const Y=v===o,ie=Y?q:c[o+"Score"]||0,ae=Y?c[g+"Score"]||0:q;G.add(k),we(A,ie,ae,Y,Z)}else await Z()}function he(u){return["MIL","ATT"].some(m=>(u[m]||[]).some(x=>!x.used))}function Se(u){return["GK","DEF","MIL","ATT"].some(m=>(u[m]||[]).some(x=>!x.used))}function Me(u){return Se(u)&&!he(u)}function be(u){const m=c[u+"Team"],x=c[(u==="p1"?"p2":"p1")+"Team"];return!!(he(m)||!Se(x)&&Me(m))}function ze(u){const m=["MIL","ATT"].some(S=>(u.p1Team[S]||[]).some(q=>!q.used)),x=["MIL","ATT"].some(S=>(u.p2Team[S]||[]).some(q=>!q.used)),h=Se(u.p1Team),v=Se(u.p2Team);return!m&&!(!v&&h)&&(!x&&!(!h&&v))}function j(u){const m=u.p1Score||0,x=u.p2Score||0;return m===x?null:m>x?w.home_id:w.away_id}async function B(u){try{const m=j(u),x=m?w.home_id===m?w.away_id:w.home_id:null,h=u.p1Score||0,v=u.p2Score||0;await T.from("matches").update({status:"finished",winner_id:m,home_score:h,away_score:v}).eq("id",i);const{data:$}=await T.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if($){await T.from("mini_league_matches").update({home_score:h,away_score:v,status:"finished"}).eq("id",$.id);const{data:z}=await T.from("mini_league_matches").select("id, status").eq("league_id",$.league_id).eq("matchday",$.matchday);if((z||[]).every(A=>A.status==="finished"||A.status==="bye")){const{data:A}=await T.from("mini_leagues").select("current_day,total_days").eq("id",$.league_id).single();if(A){const S=(A.current_day||0)+1,q=S>(A.total_days||0);await T.from("mini_leagues").update({current_day:q?A.total_days:S,status:q?"finished":"active"}).eq("id",$.league_id)}}}m&&x&&Ei(m,x).catch(()=>{})}catch(m){console.error("[ML] finishMatch:",m)}}function _(){var v;if(I&&document.getElementById("pvp-end-overlay"))return;I=!0;const u=c[o+"Score"],m=c[g+"Score"],x=u>m,h=u===m;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{T.removeChannel(oe)}catch{}We(e),p("mini-league",n?{openLeagueId:n}:{})})}ye()}const fr="/",gr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function mr(e,t,i){let s=0;const l=document.createElement("div");l.id="tutorial-overlay",l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const d=()=>{var o,g,b;const p=t[s],f=s===t.length-1,n=Math.round((s+1)/t.length*100);l.innerHTML=`
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
        ${p.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${fr}icons/${p.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,l.querySelectorAll("ul,ol").forEach(y=>{y.style.paddingLeft="20px",y.style.marginTop="6px",y.style.marginBottom="6px"}),l.querySelectorAll("li").forEach(y=>{y.style.marginBottom="4px"}),l.querySelectorAll("p").forEach(y=>{y.style.marginBottom="8px"}),(o=l.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{s--,d()}),(g=l.querySelector("#tuto-next"))==null||g.addEventListener("click",()=>{f?a():(s++,d())}),(b=l.querySelector("#tuto-skip"))==null||b.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{l.remove(),e!=null&&e.id&&await T.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(l),d()}async function xr(e,t,i){if(!e||e.tutorial_done)return;let s=[];const{data:l,error:d}=await T.rpc("get_tutorial_steps");if(!d&&(l==null?void 0:l.length)>0)s=l,console.log(`[Tutorial] RPC OK → ${s.length} étapes`);else{const{data:p,error:f}=await T.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!f&&(p==null?void 0:p.length)>0?(s=p,console.log(`[Tutorial] Direct OK → ${s.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${d==null?void 0:d.message}, Direct: ${f==null?void 0:f.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=s.length>0?s.map(p=>({emoji:p.emoji,title:p.title,color:p.color,content:p.content,image_url:p.image_url||null})):gr;mr(e,a,()=>t("boosters"))}const yr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}function Vi(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Wt(e,t){const s=t?yr[t]||"#bbb":"#d0d0d0",l=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${s};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${l}</div>`}function Yi(e){const i=Zt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Wi(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function br(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Li(e,t)}async function Li(e,t){const{state:i,toast:s}=t,{data:l}=await T.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:d}=await T.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  </div>`;let f="buy";const n=()=>{var r,c,I,L,C,H,D;return{name:(((r=document.getElementById("flt-name"))==null?void 0:r.value)||"").toLowerCase().trim(),club:(((c=document.getElementById("flt-club"))==null?void 0:c.value)||"").toLowerCase().trim(),country:(((I=document.getElementById("flt-country"))==null?void 0:I.value)||"").toLowerCase().trim(),job:((L=document.getElementById("flt-job"))==null?void 0:L.value)||"",rarity:((C=document.getElementById("flt-rarity"))==null?void 0:C.value)||"",note1:parseInt((H=document.getElementById("flt-note1"))==null?void 0:H.value)||0,note2:parseInt((D=document.getElementById("flt-note2"))==null?void 0:D.value)||0}};function o(r){const c=n();return r.filter(I=>{var U,oe;const L=(U=I.card)==null?void 0:U.player;if(!L)return!1;const C=`${L.firstname} ${L.surname_encoded}`.toLowerCase(),H=(((oe=L.clubs)==null?void 0:oe.encoded_name)||"").toLowerCase(),D=(L.country_code||"").toLowerCase(),G=Et(L,L.job),M=L.job2?Et(L,L.job2):0;return!(c.name&&!C.includes(c.name)||c.club&&!H.includes(c.club)||c.country&&!D.includes(c.country)||c.job&&L.job!==c.job||c.rarity&&L.rarity!==c.rarity||c.note1&&G<c.note1||c.note2&&M<c.note2)})}function g(r){var D,G,M,U;const c=(D=r.card)==null?void 0:D.player;if(!c)return"";const I=((G=r.card)==null?void 0:G.evolution_bonus)||0,L=Et(c,c.job,I),C=c.job2?Et(c,c.job2,I):0,H=(i.profile.credits||0)>=r.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Vi(c.rarity)}
      ${Wt(L,c.job)}
      ${Wt(C,c.job2||null)}
      ${Yi(c.country_code)}
      ${Wi((M=c.clubs)==null?void 0:M.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.firstname} ${c.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((U=r.seller)==null?void 0:U.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${r.id}" ${H?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${H?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function b(r){var D,G,M,U;const c=(D=r.card)==null?void 0:D.player;if(!c)return"";const I=((G=r.card)==null?void 0:G.evolution_bonus)||0,L=Et(c,c.job,I),C=c.job2?Et(c,c.job2,I):0,H=r.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${H?"opacity:0.7":""}">
      ${Vi(c.rarity)}
      ${Wt(L,c.job)}
      ${Wt(C,c.job2||null)}
      ${Yi(c.country_code)}
      ${Wi((M=c.clubs)==null?void 0:M.logo_url)}
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
    </div>`}function y(){const r=document.getElementById("mkt-content"),c=document.getElementById("mkt-filters");if(r){if(c.style.display=f==="buy"?"flex":"none",f==="buy"){const I=o(a);r.innerHTML=I.length?I.map(g).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const I=p.filter(C=>C.status==="active").sort((C,H)=>new Date(H.listed_at)-new Date(C.listed_at)),L=p.filter(C=>C.status==="sold").sort((C,H)=>new Date(H.sold_at||H.listed_at)-new Date(C.sold_at||C.listed_at));r.innerHTML=(I.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${I.length})</div>`+I.map(b).join(""):"")+(L.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${L.length})</div>`+L.map(b).join(""):"")+(!I.length&&!L.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}r.querySelectorAll("[data-buy]").forEach(I=>I.addEventListener("click",()=>hr(I.dataset.buy,a,e,t))),r.querySelectorAll("[data-cancel]").forEach(I=>I.addEventListener("click",()=>wr(I.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{f=r.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(c=>{const I=c===r;c.style.background=I?"var(--green)":"#fff",c.style.color=I?"#fff":"var(--gray-600)",c.style.borderColor=I?"var(--green)":"var(--gray-200)"}),y()})});let w;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(r=>{var c;(c=document.getElementById(r))==null||c.addEventListener("input",()=>{clearTimeout(w),w=setTimeout(y,250)})}),y()}async function hr(e,t,i,s){const{state:l,toast:d,refreshProfile:a}=s,p=t.find(o=>o.id===e);if(!p)return;const f=p.price;if((l.profile.credits||0)<f){d("Crédits insuffisants","error");return}vr(p,async()=>{const{error:o}=await T.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:l.profile.id});if(o){d("Erreur achat : "+o.message,"error");return}await a();const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(l.profile.credits||0).toLocaleString("fr")}`),d("✅ Carte achetée !","success"),await Li(i,s)})}function vr(e,t){var a;const i=(a=e.card)==null?void 0:a.player,s=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",l.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${s} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(l);const d=p=>{l.remove(),p&&t()};l.querySelector("#buy-cancel").addEventListener("click",()=>d(!1)),l.querySelector("#buy-ok").addEventListener("click",()=>d(!0)),l.addEventListener("click",p=>{p.target===l&&d(!1)})}async function wr(e,t,i){const{toast:s}=i,{data:l}=await T.from("market_listings").select("card_id").eq("id",e).single();if(await T.from("market_listings").update({status:"cancelled"}).eq("id",e),l!=null&&l.card_id){const{count:d}=await T.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",l.card_id).eq("status","active");d||await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",l.card_id)}s("Annonce retirée","success"),Li(t,i)}async function _r(e,{state:t,navigate:i,toast:s}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await T.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function $r(e,{state:t,navigate:i,toast:s}){const l=t.profile;if(!l)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await T.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${l.id},away_id.eq.${l.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},p=(d||[]).filter(o=>o.status==="finished"),f=(d||[]).filter(o=>o.status==="in_progress");function n(o){const g=o.home_id===l.id;g?o.home_score:o.away_score,g?o.away_score:o.home_score;const b=o.winner_id===l.id,y=o.home_score===o.away_score&&o.status==="finished",w=o.status!=="finished"?"…":y?"N":b?"V":"D",r=o.status!=="finished"||y?"#888":b?"#1A6B3C":"#c0392b";let c=a[o.mode]||o.mode;o.away_id===null&&!c.startsWith("IA")&&(c="IA");const L=o.home_id===l.id?o.away:o.home;let C;o.away_id===null?C=c:L?C=`${L.club_name||L.pseudo} (${L.pseudo})`:C="Adversaire";let H="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(H=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const D=new Date(o.created_at),G=D.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+D.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),M=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${C}${H}</div>
        <div style="font-size:11px;color:var(--gray-600)">${c} · ${G}${o.status==="in_progress"?" · en cours":""}</div>
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
  </div>`}Io(jo);const Ge={user:null,profile:null,page:"home",params:{}};function Tt(e,t="info",i=3e3){const s=document.getElementById("toast");s&&(s.textContent=e,s.className=`show ${t}`,clearTimeout(s._t),s._t=setTimeout(()=>{s.className=""},i))}function kr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function hi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ct(){if(!Ge.user)return;const{data:e}=await T.from("users").select("*").eq("id",Ge.user.id).single();e&&(Ge.profile=e)}function Ft(e,t={}){Ge.page=e,Ge.params=t,So()}async function So(){var s,l,d,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(p=>{p.classList.toggle("active",p.dataset.page===Ge.page)});const t=document.getElementById("nav-credits");t&&Ge.profile&&(t.textContent=`💰 ${(Ge.profile.credits||0).toLocaleString("fr")}`);const i={state:Ge,navigate:Ft,toast:Tt,openModal:kr,closeModal:hi,refreshProfile:Ct};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ge.page){case"home":await Bi(e,i);break;case"collection":await en(e,i);break;case"decks":await fi(e,i);break;case"boosters":await mn(e,i);break;case"match":{const p=Ge.params&&Ge.params.matchMode||"vs_ai_easy";p==="random"?await ko(e,i):p==="friend"?await Jn(e,i,(s=Ge.params)==null?void 0:s.friendId,(l=Ge.params)==null?void 0:l.friendName):p==="mini-league"?await Ki(e,i,(d=Ge.params)==null?void 0:d.mlMatchId,(a=Ge.params)==null?void 0:a.leagueId):await In(e,i);break}case"market":await br(e,i);break;case"rankings":await _r(e,i);break;case"matches":await $r(e,i);break;case"friends":await Po(e,i);break;case"mini-league":await Zn(e,i);break;case"match-mini-league":{const p=Ge.params||{};await Ki(e,i,p.mlMatchId,p.leagueId);break}default:await Bi(e,i)}}function Er(){var s;const e=document.getElementById("app"),t=Ge.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(l=>{l.addEventListener("click",d=>{d.preventDefault(),Ft(l.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ft("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ft("boosters")),(s=document.getElementById("journal-btn"))==null||s.addEventListener("click",()=>Tr())}async function Tr(){const{data:e}=await T.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(s=>{const l=new Date(s.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",s=>{s.target===t&&t.remove()})}async function Ar(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&hi()}),document.getElementById("modal-close").addEventListener("click",hi);const{data:{session:e}}=await T.auth.getSession();if(!e){Ji(),ji(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt});return}Ge.user=e.user,await Ct(),Ji();try{const{data:i}=await T.from("formation_links_overrides").select("formation, links"),s={};(i||[]).forEach(l=>{s[l.formation]=l.links}),Mo(s)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Ge.profile){qo(document.getElementById("app"),{state:Ge,navigate:async()=>{await Ct(),pi()},toast:Tt,refreshProfile:Ct});return}const t=Array.isArray(Ge.profile.pending_boosters)?Ge.profile.pending_boosters:[];if(!Ge.profile.onboarding_done&&t.length>0){An(document.getElementById("app"),{state:Ge,navigate:()=>pi(),toast:Tt,refreshProfile:Ct});return}pi(),setTimeout(()=>xr(Ge.profile,Ft,Tt),800),T.auth.onAuthStateChange(async(i,s)=>{i==="SIGNED_OUT"&&(Ge.user=null,Ge.profile=null,document.getElementById("app").innerHTML="",ji(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt}))})}function zr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function di(){const e=document.getElementById("app");e&&(e.style.height=zr()+"px")}window.addEventListener("resize",di);window.addEventListener("orientationchange",()=>setTimeout(di,150));window.visualViewport&&window.visualViewport.addEventListener("resize",di);function pi(){const e=()=>{var i;(i=Ge.user)!=null&&i.id&&T.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ge.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",di(),Er(),So()}function Ji(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function Lo(e){var s;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(s=document.getElementById("boot-retry"))==null||s.addEventListener("click",()=>window.location.reload())}Ar().catch(e=>{console.error("Échec du démarrage:",e),Lo()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&Lo("Le serveur met trop de temps à répondre.")},12e3);
