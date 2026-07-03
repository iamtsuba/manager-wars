import{s as E,F as bi,h as Pt,j as Wi,l as at,i as So,k as Lo,b as Io}from"./formation-links-DJC25wD7.js";const Mo="/manager-wars/";function Ii(e,{navigate:t,toast:i}){let s="login";const c=()=>{var a,l,p,o,n,g;const d=s==="login";e.innerHTML=`
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
    </style>`,(a=document.getElementById("tab-login-btn"))==null||a.addEventListener("click",()=>{s="login",c()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{s="register",c()}),d?((p=document.getElementById("login-password"))==null||p.addEventListener("keydown",v=>{var y;v.key==="Enter"&&((y=document.getElementById("login-btn"))==null||y.click())}),(o=document.getElementById("login-btn"))==null||o.addEventListener("click",async()=>{const v=document.getElementById("login-email").value.trim(),y=document.getElementById("login-password").value,z=document.getElementById("login-error");if(z.textContent="",!v||!y){z.textContent="Remplissez tous les champs.";return}const r=document.getElementById("login-btn");r.textContent="⏳ Connexion…",r.disabled=!0;const{error:u}=await E.auth.signInWithPassword({email:v,password:y});if(r.textContent="⚽ Se connecter",r.disabled=!1,u){z.textContent=u.message.includes("Invalid")?"Email ou mot de passe incorrect.":u.message;return}window.location.reload()})):((n=document.getElementById("reg-confirm"))==null||n.addEventListener("keydown",v=>{var y;v.key==="Enter"&&((y=document.getElementById("reg-btn"))==null||y.click())}),(g=document.getElementById("reg-btn"))==null||g.addEventListener("click",async()=>{const v=document.getElementById("reg-email").value.trim(),y=document.getElementById("reg-password").value,z=document.getElementById("reg-confirm").value,r=document.getElementById("reg-error");if(r.textContent="",!v||!y||!z){r.textContent="Remplissez tous les champs.";return}if(y.length<6){r.textContent="Mot de passe trop court (min. 6 caractères).";return}if(y!==z){r.textContent="Les mots de passe ne correspondent pas.";return}const u=document.getElementById("reg-btn");u.textContent="⏳ Création…",u.disabled=!0;const{error:M}=await E.auth.signUp({email:v,password:y});if(u.textContent="🚀 Créer mon compte",u.disabled=!1,M){r.textContent=M.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),s="login",c(),setTimeout(()=>{const L=document.getElementById("login-email");L&&(L.value=v)},50)}))};c()}function Co(e,{state:t,navigate:i,toast:s,refreshProfile:c}){let d="#1A6B3C",a="#D4A017";e.innerHTML=`
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
  `;function l(){var z;const o=document.getElementById("logo-preview"),n=document.getElementById("logo-initials"),g=((z=document.getElementById("setup-club"))==null?void 0:z.value)||"MW",v=g.trim().split(" ").filter(Boolean),y=v.length>=2?(v[0][0]+v[1][0]).toUpperCase():g.slice(0,2).toUpperCase();o&&(o.style.background=a,o.style.borderColor=d),n&&(n.textContent=y,n.style.color=d)}document.getElementById("color1").addEventListener("input",o=>{d=o.target.value,document.getElementById("swatch1").style.background=d,l()}),document.getElementById("color2").addEventListener("input",o=>{a=o.target.value,document.getElementById("swatch2").style.background=a,l()});function p(o){document.querySelectorAll(".setup-step").forEach(n=>n.classList.remove("active")),document.getElementById(`step-${o}`).classList.add("active"),document.getElementById("step-num").textContent=o,document.getElementById("progress-fill").style.width=`${Math.round(o/3*100)}%`,o===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("step1-error");if(n.textContent="",o.length<3){n.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:g}=await E.from("users").select("id").eq("pseudo",o).maybeSingle();if(g){n.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const o=document.getElementById("setup-club").value.trim(),n=document.getElementById("step2-error");if(n.textContent="",o.length<2){n.textContent="Nom trop court (min. 2 caractères).";return}const{data:g}=await E.from("users").select("id").eq("club_name",o).maybeSingle();if(g){n.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const o=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("setup-club").value.trim(),g=document.getElementById("step3-error"),v=document.getElementById("step3-finish");g.textContent="",v.disabled=!0,v.textContent="Création en cours…";try{const{error:y}=await E.from("users").insert({id:t.user.id,pseudo:o,club_name:n,club_color1:d,club_color2:a,credits:1e4});if(y)throw y;await jo(t.user.id),await c(),s(`Bienvenue ${o} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(y){g.textContent=y.message,v.disabled=!1,v.textContent="🚀 Créer mon profil !"}})}async function jo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await E.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const qo="modulepreload",Bo=function(e){return"/manager-wars/"+e},Mi={},hi=function(t,i,s){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));c=Promise.allSettled(i.map(p=>{if(p=Bo(p),p in Mi)return;Mi[p]=!0;const o=p.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${n}`))return;const g=document.createElement("link");if(g.rel=o?"stylesheet":qo,o||(g.as="script"),g.crossOrigin="",g.href=p,l&&g.setAttribute("nonce",l),document.head.appendChild(g),o)return new Promise((v,y)=>{g.addEventListener("load",v),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${p}`)))})}))}function d(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return c.then(a=>{for(const l of a||[])l.status==="rejected"&&d(l.reason);return t().catch(d)})},Ft="#1A6B3C",Dt="#cc2222",Fo="#D4A017",Ci="#888";async function Do(e,t){const{state:i,toast:s}=t;e.innerHTML=`
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
    </div>`,await Ji(i,s,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Po(i,s)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Xi(i,s,null,t))}async function Ji(e,t,i={}){const{navigate:s}=i,c=e.user.id,{data:d,error:a}=await E.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${c},addressee_id.eq.${c}`),{count:l}=await E.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",c).eq("status","pending"),p=document.getElementById("pending-badge");p&&(l>0?(p.style.display="flex",p.textContent=l):p.style.display="none");const o=document.getElementById("friends-list");if(!o)return;if(a){console.error("[Friends] Erreur:",a),o.innerHTML=`<div style="color:${Dt};text-align:center;padding:16px">Erreur chargement : ${a.message}</div>`;return}const n=(d||[]).map(y=>y.requester_id===c?y.addressee_id:y.requester_id);let g={};if(n.length){const{data:y}=await E.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",n);(y||[]).forEach(z=>{g[z.id]=z})}const v=(d||[]).map(y=>({friendshipId:y.id,friend:g[y.requester_id===c?y.addressee_id:y.requester_id]||{pseudo:"?"}}));if(!v.length){o.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}o.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${v.length} ami${v.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${v.map(({friendshipId:y,friend:z})=>Go(z,y)).join("")}
    </div>`,o.querySelectorAll("[data-stats]").forEach(y=>{y.addEventListener("click",()=>No(e,y.dataset.stats,y.dataset.friendName))}),o.querySelectorAll("[data-match]").forEach(y=>{y.addEventListener("click",()=>{const z=y.dataset.friendId,r=y.dataset.friendName;console.log("[Friends] clic match",{fid:z,fname:r,hasNavigate:typeof s}),typeof s=="function"?s("match",{matchMode:"friend",friendId:z,friendName:r}):t("Erreur navigation","error")})})}function Go(e,t){const i=e.club_name||e.pseudo||"?",s=e.pseudo||"",c=(s||i).slice(0,2).toUpperCase(),d=e.club_color2||Ft,a=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,p=l&&Date.now()-l.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Fo};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Po(e,t){const i=vi();i.innerHTML=`
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
    ${wi()}`,document.body.appendChild(i);const s=i.querySelector("#friend-pseudo-input"),c=i.querySelector("#add-friend-error"),d=()=>i.remove();s.focus(),i.querySelector("#add-cancel").addEventListener("click",d),i.addEventListener("click",a=>{a.target===i&&d()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const a=s.value.trim();if(!a){c.textContent="Entre un pseudo";return}c.textContent="";const{data:l}=await E.from("users").select("id, pseudo").ilike("pseudo",a).single();if(!l){c.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){c.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await E.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(p){const n=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";c.textContent=n;return}const{error:o}=await E.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(o){c.textContent="Erreur : "+o.message;return}d(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function Xi(e,t,i=null,s={}){const c=e.user.id,{data:d}=await E.from("friendships").select("id, requester_id").eq("addressee_id",c).eq("status","pending").order("created_at",{ascending:!1}),a=(d||[]).map(v=>v.requester_id);let l={};if(a.length){const{data:v}=await E.from("users").select("id, pseudo, club_name").in("id",a);(v||[]).forEach(y=>{l[y.id]=y})}const p=(d||[]).map(v=>({...v,requester:l[v.requester_id]||{pseudo:"?"}})),o=vi(),n=p||[];o.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${n.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${n.map(v=>{var y,z,r;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((y=v.requester)==null?void 0:y.club_name)||((z=v.requester)==null?void 0:z.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((r=v.requester)==null?void 0:r.pseudo)||""})</span>
                </div>
                <button data-accept="${v.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Ft};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${v.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Dt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${wi()}`,document.body.appendChild(o);const g=()=>o.remove();o.querySelector("#pending-close").addEventListener("click",g),o.addEventListener("click",v=>{v.target===o&&g()}),o.querySelectorAll("[data-accept]").forEach(v=>{v.addEventListener("click",async()=>{const{error:y}=await E.from("friendships").update({status:"accepted"}).eq("id",v.dataset.accept);if(y){t("Erreur : "+y.message,"error");return}v.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ji(e,t,s),i&&i()})}),o.querySelectorAll("[data-decline]").forEach(v=>{v.addEventListener("click",async()=>{await E.from("friendships").delete().eq("id",v.dataset.decline),v.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function No(e,t,i){const s=e.user.id,[c,d]=[s,t].sort(),a=s===c,{data:l}=await E.from("friend_match_stats").select("*").eq("player1_id",c).eq("player2_id",d).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",o=l||{},n=a?o.wins_p1||0:o.wins_p2||0,g=a?o.wins_p2||0:o.wins_p1||0,v=o.draws||0,y=a?o.goals_p1||0:o.goals_p2||0,z=a?o.goals_p2||0:o.goals_p1||0,r=a?o.gc_used_p1||0:o.gc_used_p2||0,u=a?o.gc_used_p2||0:o.gc_used_p1||0,M=o.matches_total||0,L=(V,C,F,j=Ft,te=Dt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${j}">${C}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${V}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${te}">${F}</div>
    </div>`,N=vi();N.innerHTML=`
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
        ${L("Victoires",n,g)}
        ${L("Nuls",v,v,Ci,Ci)}
        ${L("Défaites",g,n)}
        ${L("Buts marqués",y,z)}
        ${L("Buts encaissés",z,y,Dt,Ft)}
        ${L("GC utilisés ⚡",r,u,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${M} match${M>1?"s":""} joué${M>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${wi()}`,document.body.appendChild(N),N.querySelector("#stats-close").addEventListener("click",()=>N.remove()),N.addEventListener("click",V=>{V.target===N&&N.remove()})}function vi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function wi(){return`
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
        background:${Ft};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Zi({player1Id:e,player2Id:t,score1:i,score2:s,gc1:c,gc2:d}){const[a,l]=[e,t].sort(),p=e!==a,o=p?s:i,n=p?i:s,g=p?d:c,v=p?c:d,y=o>n?1:0,z=n>o?1:0,r=o===n?1:0,{data:u}=await E.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",l).single();u?await E.from("friend_match_stats").update({wins_p1:u.wins_p1+y,wins_p2:u.wins_p2+z,draws:u.draws+r,goals_p1:u.goals_p1+o,goals_p2:u.goals_p2+n,gc_used_p1:u.gc_used_p1+g,gc_used_p2:u.gc_used_p2+v,matches_total:u.matches_total+1}).eq("player1_id",a).eq("player2_id",l):await E.from("friend_match_stats").insert({player1_id:a,player2_id:l,wins_p1:y,wins_p2:z,draws:r,goals_p1:o,goals_p2:n,gc_used_p1:g,gc_used_p2:v,matches_total:1})}const Ro="2026.07.03-2203";async function ji(e,{state:t,navigate:i,toast:s}){var d,a;const c=t.profile;c&&(e.innerHTML=`
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
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Ro}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),i(l.dataset.nav)})}),(d=document.getElementById("nav-rankings"))==null||d.addEventListener("click",()=>i("rankings")),(a=document.getElementById("nav-matches"))==null||a.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const p=l.dataset.action;if(p==="match-ai"){Vo(i);return}if(p==="match-random"){i("match",{matchMode:"random"});return}if(p==="match-friend"){i("friends");return}if(p==="mini-league"){i("mini-league");return}if(p==="ranked"){ctx.toast("Mode Ranked — Bientôt disponible !","info");return}s("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var V,C,F,j,te,le;const l=((V=window.visualViewport)==null?void 0:V.height)||window.innerHeight,p=((C=document.querySelector(".top-nav"))==null?void 0:C.offsetHeight)||56,o=((F=document.querySelector(".bottom-nav"))==null?void 0:F.offsetHeight)||60,n=((j=e.querySelector(".hero-compact"))==null?void 0:j.offsetHeight)||52,g=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const v=((le=(te=e.querySelector("#logout-btn"))==null?void 0:te.closest("div"))==null?void 0:le.offsetHeight)||44,y=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((de,P)=>{var Y;return de+(((Y=document.getElementById(P))==null?void 0:Y.offsetHeight)||0)},0),z=14*5,r=l-p-o-n-v-y-z,u=Math.max(80,Math.round(r*.28)),M=Math.max(160,Math.round(r*.72)),L=Math.floor((M-10)/2);g&&(g.style.minHeight=g.style.maxHeight=u+"px"),e.querySelectorAll(".play-grid .play-card").forEach(de=>{de.style.minHeight=de.style.height=L+"px"});const N=Math.round(L*.55);e.querySelectorAll(".play-card .play-icon").forEach(de=>{de.style.height=N+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await E.auth.signOut(),window.location.reload()}),eo(t,s),Uo(t,s,i),Qi(t,s,i))}async function Qi(e,t,i){const s=document.getElementById("ongoing-match-banner");if(!s)return;const c=e.profile.id,{data:d}=await E.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${c},away_id.eq.${c}`).order("created_at",{ascending:!1});if(!(d!=null&&d.length)){s.innerHTML="";return}const a=d.map(p=>p.home_id===c?p.away_id:p.home_id).filter(Boolean);let l={};if(a.length){const{data:p}=await E.from("users").select("id, pseudo, club_name").in("id",a);(p||[]).forEach(o=>{l[o.id]=o.club_name||o.pseudo})}s.innerHTML=d.map(p=>{const o=p.home_id===c?p.away_id:p.home_id,n=l[o]||"Adversaire",g=p.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${g?"🏆 Mini League":p.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${n}</div>
        </div>
        <button data-resume="${p.id}" data-mini="${g?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${p.id}" data-opp="${o}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),s.querySelectorAll("[data-resume]").forEach(p=>{p.addEventListener("click",async()=>{const o=document.getElementById("page-content")||document.getElementById("app");if(p.dataset.mini==="1"){const{data:n}=await E.from("mini_league_matches").select("id, league_id").eq("match_id",p.dataset.resume).single();n?i("match-mini-league",{mlMatchId:n.id,leagueId:n.league_id}):i("mini-league")}else{const{resumePvpMatch:n}=await hi(async()=>{const{resumePvpMatch:g}=await Promise.resolve().then(()=>Vn);return{resumePvpMatch:g}},void 0);n(o,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},p.dataset.resume)}})}),s.querySelectorAll("[data-abandon]").forEach(p=>{p.addEventListener("click",()=>{Ho(async()=>{await Oo(p.dataset.abandon,p.dataset.opp,c),t("Match abandonné (défaite 3-0)","info"),Qi(e,t,i)})})})}async function Oo(e,t,i){const{data:s}=await E.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!s)return;const c=s.home_id===i,d=c?0:3,a=c?3:0,l=s.game_state||{};l.p1Score=d,l.p2Score=a,l.phase="finished",l.forfeit=!0,await E.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:d,away_score:a,game_state:l}).eq("id",e)}function Ho(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Uo(e,t,i){var l,p,o,n;const s=document.getElementById("match-invite-banner");if(!s)return;const{data:c}=await E.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){s.innerHTML="";return}const d=((l=c.inviter)==null?void 0:l.club_name)||((p=c.inviter)==null?void 0:p.pseudo)||"?",a=c.inviter_id;s.innerHTML=`
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
    </div>`,(o=document.getElementById("match-inv-accept"))==null||o.addEventListener("click",()=>{s.innerHTML="",i("match",{matchMode:"friend",friendId:a,friendName:d})}),(n=document.getElementById("match-inv-decline"))==null||n.addEventListener("click",async()=>{await E.from("friend_match_invites").update({status:"declined"}).eq("id",c.id),s.innerHTML="",t("Invitation refusée","info")})}async function eo(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:s,error:c}=await E.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(c||!(s!=null&&s.length)){i.innerHTML="";return}const d=s.length,a=s.slice(0,2).map(p=>{var o;return((o=p.requester)==null?void 0:o.pseudo)||"?"}).join(", "),l=d>2?` +${d-2}`:"";i.innerHTML=`
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
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Xi(e,t,()=>eo(e,t))})}function Vo(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
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
  `,document.body.appendChild(i);const s=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",s),i.addEventListener("click",c=>{c.target===i&&s()}),i.querySelectorAll("[data-mode]").forEach(c=>{c.addEventListener("click",()=>{s(),e("match",{matchMode:c.dataset.mode})})})}const Ke={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Ie(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const qi=["ATT","MIL","DEF","GK"];function to(e){let t=0;const i=e.length;for(let s=0;s<i;s++)for(let c=s+1;c<i;c++){const d=e[s],a=e[c];if(!d||!a)continue;const l=d._col!=null&&a._col!=null&&d._col===a._col,p=d._col!=null&&a._col!=null&&Math.abs(d._col-a._col)===1,o=qi.indexOf(d._line||d.job),n=qi.indexOf(a._line||a.job),g=Math.abs(o-n)===1;if(!((d._line||d.job)===(a._line||a.job)&&p||l&&g))continue;const z=d.country_code&&a.country_code&&d.country_code===a.country_code,r=d.club_id&&a.club_id&&d.club_id===a.club_id;z&&r?t+=2:(z||r)&&(t+=1)}return t}function Nt(e,t={}){const i=e.reduce((d,a)=>{const l=a._line||a.job,p=a.stadiumBonus&&(l==="MIL"||l==="ATT")?10:0;return d+(Number(l==="MIL"?a.note_m:a.note_a)||0)+(a.boost||0)+p},0),s=to(e);let c=i+s;return t.doubleAttack&&(c*=2),t.stolenNote&&(c-=t.stolenNote),{base:i,links:s,total:Math.max(0,c)}}function Rt(e,t={}){const i=e.reduce((d,a)=>{const l=a._line||a.job;let p=0;l==="GK"?p=Number(a.note_g)||0:l==="MIL"?p=Number(a.note_m)||0:p=Number(a.note_d)||0;const o=a.stadiumBonus&&(l==="GK"||l==="DEF"||l==="MIL")?10:0;return d+p+(a.boost||0)+o},0),s=to(e);let c=i+s;return t.stolenNote&&(c-=t.stolenNote),{base:i,links:s,total:Math.max(0,c)}}function Ot(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function io(e,t,i="easy"){const s=e.filter(a=>!a.used);if(!s.length)return[];const c=[...s].sort((a,l)=>{const p=t==="attack"?Ie(a,"ATT"):a._line==="GK"?Ie(a,"GK"):Ie(a,"DEF");return(t==="attack"?Ie(l,"ATT"):l._line==="GK"?Ie(l,"GK"):Ie(l,"DEF"))-p});let d=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return c.slice(0,Math.min(d,c.length,3))}function Ko(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const oo={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function _i(e,t){const i=e.player;if(!i)return 0;const s=i.rarity;if(s!=="pepite"&&s!=="papyte")return Number(i[t])||0;const c=$i(i),d=Number(i[t])||0;if(d<=0)return 0;const a=i.note_min??1,l=i.note_max??10,o=(e.current_note??c)-c;return Math.min(l,Math.max(a,d+o))}function $i(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function ki(e,t){!e||!t||await Promise.all([ci(e,"win"),ci(t,"loss")])}async function ci(e,t){const{data:i}=await E.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const s=i.filter(c=>{var d,a;return((d=c.player)==null?void 0:d.rarity)==="pepite"||((a=c.player)==null?void 0:a.rarity)==="papyte"});s.length&&await Promise.all(s.map(c=>{const d=oo[c.player.rarity],a=t==="win"?d.win:d.loss,l=c.player.note_min??1,p=c.player.note_max??10,o=$i(c.player),n=c.current_note??o,g=Math.min(p,Math.max(l,n+a));return E.from("cards").update({current_note:g}).eq("id",c.id)}))}async function Yo(e,t){return ci(e,t)}const no=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:oo,applyOwnEvolution:Yo,currentSecondaryNote:_i,getBaseMainNote:$i,updateEvolutiveCards:ki},Symbol.toStringTag,{value:"Module"})),ro={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},jt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Vt=["GK","DEF","MIL","ATT"],Wo=["Tous","GK","DEF","MIL","ATT"],Jo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Bi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Xo(e){return e.length?e.reduce((t,i)=>Bi(i)>Bi(t)?i:t,e[0]):e[0]}function ao(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Ei={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function so(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Gt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function si(e,t=""){var v,y;const i=e.player;if(!i)return"";const s=i.job||"ATT",c=jt[s],d=ro[i.rarity]||"#ccc",a=i.rarity==="pepite"||i.rarity==="papyte",l=a&&e.current_note!=null?e.current_note:Gt(i,s),p=i.job2?a?_i(e,ao(i.job2)):Gt(i,i.job2):null,o=i.job2?jt[i.job2]:null,n=so(i),g=Ei[i.country_code]||i.country_code||"";return`
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
            fill="${o}" stroke="white" stroke-width="1.5"/>
          <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900"
            fill="white" font-family="Arial Black,Arial">${p}</text>
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${g}</div>
        ${(v=i.clubs)!=null&&v.logo_url?`<img src="${i.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((y=i.clubs)==null?void 0:y.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function Fi(e){const t=e.job||"ATT",i=Gt(e,t),s=Ei[e.country_code]||e.country_code||"";return`
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
  </div>`}async function Zo(e,t){const{state:i,navigate:s,toast:c,openModal:d,closeModal:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await E.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:p}=await E.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),o=(l||[]).filter(W=>W.card_type==="player"&&W.player),n=(l||[]).filter(W=>W.card_type==="game_changer"),g=(l||[]).filter(W=>W.card_type==="formation"),v=(l||[]).filter(W=>W.card_type==="stadium"),{data:y}=await E.from("gc_definitions").select("name,gc_type,color,effect,image_url"),z={};(y||[]).forEach(W=>{z[W.name]=W});const{data:r}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),u={};(r||[]).forEach(W=>{u[W.id]=W}),v.forEach(W=>{W.stadium_def&&(u[W.stadium_id]=W.stadium_def)});const M=Object.keys(bi),L=Object.keys(Ke),N={};o.forEach(W=>{const oe=W.player.id;N[oe]=(N[oe]||0)+1}),new Set(Object.keys(N).map(W=>String(W)));const V=new Set(g.map(W=>W.formation)),C=new Set(n.map(W=>W.gc_type));let F="player",j="Tous",te="",le=!1;function de(){return[...o].sort((W,oe)=>{const K=Vt.indexOf(W.player.job),J=Vt.indexOf(oe.player.job);return K!==J?K-J:(W.player.surname_encoded||"").localeCompare(oe.player.surname_encoded||"")})}function P(){return[...p||[]].sort((W,oe)=>{const K=Vt.indexOf(W.job),J=Vt.indexOf(oe.job);return K!==J?K-J:(W.surname_encoded||"").localeCompare(oe.surname_encoded||"")})}function Y(){return de().filter(W=>{const oe=W.player,K=j==="Tous"||oe.job===j,J=!te||`${oe.firstname} ${oe.surname_encoded}`.toLowerCase().includes(te);return K&&J})}function H(){return P().filter(W=>{const oe=j==="Tous"||W.job===j,K=!te||`${W.firstname} ${W.surname_encoded}`.toLowerCase().includes(te);return oe&&K})}e.innerHTML=`
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${g.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="gc"?"var(--green)":"transparent"};
        color:${F==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${n.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="stadium"?"#E87722":"transparent"};
        color:${F==="stadium"?"#E87722":"var(--gray-600)"}">
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
  </div>`;function G(){const W=document.getElementById("col-filters");W&&(F==="player"?(W.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${te}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Wo.map(oe=>`
            <button class="filter-btn" data-job="${oe}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${oe===j?"var(--green)":"var(--gray-200)"};
                background:${oe===j?"var(--green)":"#fff"};
                color:${oe===j?"#fff":"var(--gray-600)"}">
              ${oe}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${le?"var(--yellow)":"var(--gray-200)"};
              background:${le?"var(--yellow)":"#fff"};
              color:${le?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${le?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",oe=>{te=oe.target.value.toLowerCase(),ne()}),e.querySelectorAll(".filter-btn").forEach(oe=>{oe.addEventListener("click",()=>{j=oe.dataset.job,G(),ne()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{le=!le,G(),ne()})):(W.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${le?"var(--yellow)":"var(--gray-200)"};
              background:${le?"var(--yellow)":"#fff"};
              color:${le?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${le?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{le=!le,G(),ne()})))}function ne(){const W=document.getElementById("col-grid");W&&(F==="player"?$e(W):F==="formation"?Se(W):F==="stadium"?xe(W):Le(W))}function fe(W,oe,K,J,re){const ie=document.getElementById("col-grid"),ae=document.getElementById("col-big");if(!ie||!ae)return;var Te=0;function we(){const Ae=window.innerWidth>=768,Ce=document.getElementById("col-big"),De=document.getElementById("col-grid");Ae&&Ce&&(Ce.style.minHeight="420px",Ce.style.flex="1 1 auto"),Ae&&De&&(De.style.height=Math.round(310*.76+16)+"px",De.style.flexShrink="0",De.style.overflowX="auto",De.style.overflowY="hidden",De.style.alignItems="center",De.style.padding="8px 16px"),ae.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+oe(W[Te])+"</div>";var I=ae.querySelector("[data-card-id],[data-form-id],[data-gc-id]");I&&I.addEventListener("click",function(){J(W[Te])}),requestAnimationFrame(function(){var q=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!q||!ae)){var w=ae.clientHeight-8,k=ae.clientWidth-24,f=q.offsetHeight,m=q.offsetWidth;if(f>0&&m>0&&w>40){var x=Ae?2.2:1,b=Math.min(w/f,k/m,x);q.style.transform="scale("+b.toFixed(3)+")",q.style.transformOrigin="top center"}}}),ie.innerHTML=W.map(function(q,w){var k=w===Te,f="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(k?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+w+'" style="'+f+'">'+K(q,k)+"</div>"}).join(""),ie.querySelectorAll(".col-mini-item").forEach(function(q){q.addEventListener("click",function(){Te=Number(q.dataset.idx),we(),q.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}we()}function ye(W){var oe=window.innerWidth>=768?.76:.54,K;if(!W||W._fake){var J=W?W.player:null;if(!J)return"";K=Fi(J)}else K=si(W,"");return'<div style="display:inline-block;zoom:'+oe+';pointer-events:none;line-height:0">'+K+"</div>"}function ze(W,oe,K){oe=oe||100,K=K||140;var J=Pt[W]||{},re={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ie=Math.max(3,Math.round(oe*.06)),ae=Object.entries(J).map(function(we){var Ae=we[0],Ce=we[1],De=Ae.replace(/\d+$/,""),I=re[De]||"#888",q=Math.round(Ce.x*oe),w=Math.round(Ce.y*K);return'<circle cx="'+q+'" cy="'+w+'" r="'+ie+'" fill="'+I+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Te=Math.max(1,Math.round(oe/50));return'<svg viewBox="0 0 '+oe+" "+K+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+oe+'" height="'+K+'" fill="#1A6B3C"/><rect x="'+Math.round(oe*.2)+'" y="'+Math.round(K*.02)+'" width="'+Math.round(oe*.6)+'" height="'+Math.round(K*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Te+'"/><line x1="0" y1="'+Math.round(K*.5)+'" x2="'+oe+'" y2="'+Math.round(K*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Te+'"/><ellipse cx="'+Math.round(oe*.5)+'" cy="'+Math.round(K*.5)+'" rx="'+Math.round(oe*.18)+'" ry="'+Math.round(K*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Te+'"/><rect x="'+Math.round(oe*.2)+'" y="'+Math.round(K*.82)+'" width="'+Math.round(oe*.6)+'" height="'+Math.round(K*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Te+'"/>'+ae+"</svg>"}function Ee(W,oe,K){var J=K>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+K+"</div>":"",re=oe?'data-form-id="'+oe.id+'"':"",ie=W.length>7?14:W.length>5?16:19,ae=!!oe;return"<div "+re+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ae?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ae?"":"filter:grayscale(1);opacity:0.5")+'">'+J+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ae?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ie+"px;font-weight:900;color:"+(ae?"#1A6B3C":"#aaa")+';line-height:1">'+W+'</div></div><div style="flex:1;overflow:hidden;background:'+(ae?"#1A6B3C":"#ccc")+'">'+ze(W,140,220)+"</div></div>"}function be(W,oe){var K=window.innerWidth>=768?.76:.54,J=140,re=305,ie=Math.round(re*.22),ae=re-ie,Te=W.length>7?10:13,we=ze(W,J,ae),Ae=oe?"1.5px solid #2a7a40":"1px solid #ddd",Ce=oe?"":"filter:grayscale(1);opacity:0.45;",De=oe?"#1A6B3C":"#bbb",I="#fff";return'<div style="display:inline-block;zoom:'+K+';line-height:0;pointer-events:none"><div style="width:'+J+"px;height:"+re+"px;border-radius:6px;border:"+Ae+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Ce+'"><div style="height:'+ie+"px;background:"+De+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Te+"px;font-weight:900;color:"+I+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(J-4)+'px">'+W+'</span></div><div style="height:'+ae+'px;overflow:hidden;flex-shrink:0">'+we+"</div></div></div>"}function $e(W){if(le){const oe=H();if(!oe.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const K=oe.map(J=>o.find(re=>re.player.id===J.id)||{_fake:!0,player:J,id:"fake-"+J.id});fe(K,J=>J._fake?Fi(J.player):si(J,""),J=>J._fake?ye({player:J.player,id:"x",_fake:!0}):ye(J),J=>{J._fake||Di(J,o,N,t)})}else{const oe=Y();if(!oe.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const K={};oe.forEach(re=>{const ie=re.player.id;K[ie]||(K[ie]=[]),K[ie].push(re)});const J=Object.values(K).map(re=>Xo(re));fe(J,re=>{const ie=N[re.player.id]||1,ae=ie>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ie}</div>`:"",we=o.filter(Ae=>Ae.player.id===re.player.id&&Ae.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return si(re,ae+we)},re=>ye(re),re=>Di(re,o,N,t))}}function Se(W){const oe=le?M:[...V];if(!oe.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const K=oe.map(J=>({formation:J,card:g.find(re=>re.formation===J)||null,owned:V.has(J)}));fe(K,({formation:J,card:re,owned:ie})=>Ee(J,ie?re:null,ie?g.filter(ae=>ae.formation===J).length:0),({formation:J,owned:re})=>be(J,re),({card:J,owned:re})=>{re&&J&&en(J,g,t,d)})}function Le(W){const oe=Object.keys(z),K=le?oe.length?oe:L:[...C];if(!K.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const J=K.map(re=>({type:re,gc:Ke[re]||{icon:"⚡",desc:""},def:z[re]||null,owned:C.has(re),card:n.find(ie=>ie.gc_type===re)||null}));fe(J,({type:re,gc:ie,def:ae,owned:Te,card:we})=>{var x;const Ae=Te?n.filter(b=>b.gc_type===re).length:0,Ce=Ae>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Ae}</div>`:"",De=(ae==null?void 0:ae.gc_type)==="ultra_game_changer",I={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},q={purple:"#b06ce0",light_blue:"#00d4ef"},w=I[ae==null?void 0:ae.color]||I.purple,k=q[ae==null?void 0:ae.color]||q.purple,f=(ae==null?void 0:ae.effect)||ie.desc||"",m=ae!=null&&ae.image_url?`/manager-wars/icons/${ae.image_url}`:((x=ae==null?void 0:ae.club)==null?void 0:x.logo_url)||(ae!=null&&ae.country_code?`https://flagcdn.com/w80/${ae.country_code.toLowerCase()}.png`:null);return Te&&we?`<div data-gc-id="${we.id}" data-gc-type="${re}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${k}66;cursor:pointer">
          ${Ce}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${re.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${re}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${De?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${m?`<img src="${m}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ie.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${f.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${re}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ie.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:re,gc:ie,def:ae,owned:Te})=>{const we=window.innerWidth>=768?.76:.54,Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Ce={purple:"#9b59b6",light_blue:"#00bcd4"},De=Ae[ae==null?void 0:ae.color]||Ae.purple,I=Ce[ae==null?void 0:ae.color]||Ce.purple,q=ae!=null&&ae.image_url?`/manager-wars/icons/${ae.image_url}`:null;return Te?`<div style="display:inline-block;zoom:${we};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${De};border:1px solid ${I};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${re}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${q?`<img src="${q}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${ie.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((ae==null?void 0:ae.effect)||ie.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${we};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${ie.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${re}</span></div></div>`},({type:re,owned:ie,def:ae})=>{ie&&Qo(re,ae,d)})}function xe(W){const oe="#E87722",K="/manager-wars/";if(!v.length){W.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const J={};v.forEach(ie=>{const ae=ie.stadium_id||"?";(J[ae]=J[ae]||[]).push(ie)});const re=Object.entries(J).map(([ie,ae])=>({sid:ie,def:u[ie]||null,count:ae.length,card:ae[0]}));fe(re,({def:ie,count:ae})=>{var I,q;const Te=(ie==null?void 0:ie.name)||"?",we=((I=ie==null?void 0:ie.club)==null?void 0:I.encoded_name)||(ie==null?void 0:ie.country_code)||"—",Ae=ie!=null&&ie.image_url?`${K}icons/${ie.image_url}`:((q=ie==null?void 0:ie.club)==null?void 0:q.logo_url)||(ie!=null&&ie.country_code?`https://flagcdn.com/w80/${ie.country_code.toLowerCase()}.png`:null),Ce=Ae?`<img src="${Ae}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',De=ae>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ae}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${oe},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${oe}66">
          ${De}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Te}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${Ce}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${we}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:ie,count:ae})=>{var I,q;const Te=window.innerWidth>=768?.76:.54,we=(ie==null?void 0:ie.name)||"?",Ae=((I=ie==null?void 0:ie.club)==null?void 0:I.encoded_name)||(ie==null?void 0:ie.country_code)||"—",Ce=ie!=null&&ie.image_url?`${K}icons/${ie.image_url}`:((q=ie==null?void 0:ie.club)==null?void 0:q.logo_url)||(ie!=null&&ie.country_code?`https://flagcdn.com/w80/${ie.country_code.toLowerCase()}.png`:null),De=Ce?`<img src="${Ce}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${oe},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${we}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${De}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${Ae}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(W=>{W.addEventListener("click",()=>{F=W.dataset.tab,j="Tous",te="",le=!1,e.querySelectorAll(".col-tab-btn").forEach(oe=>{const K=oe.dataset.tab===F;oe.style.borderBottomColor=K?"var(--green)":"transparent",oe.style.color=K?"var(--green)":"var(--gray-600)"}),G(),ne()})}),G(),ne()}function Qo(e,t,i){const s=Ke[e]||{icon:"⚡",desc:"Effet spécial."},c=(t==null?void 0:t.gc_type)==="ultra_game_changer",d={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},a={purple:"#b06ce0",light_blue:"#00d4ef"},l=d[t==null?void 0:t.color]||d.purple,p=a[t==null?void 0:t.color]||a.purple,o=(t==null?void 0:t.name)||e,n=(t==null?void 0:t.effect)||s.desc,g=t!=null&&t.image_url?`/manager-wars/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${c?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${o}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${g?`<img src="${g}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${s.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${n}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Kt=1e3;function en(e,t,i,s){var z,r,u;const{state:c,toast:d,closeModal:a,navigate:l,refreshProfile:p}=i,o=e.formation,n={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function g(){const M=Pt[o]||{},L=bi[o]||[],N=290,V=360,C=20;function F(te){const le=M[te];return le?{x:le.x*N,y:le.y*V}:null}let j=`<svg width="${N}" height="${V}" viewBox="0 0 ${N} ${V}" xmlns="http://www.w3.org/2000/svg">`;for(const[te,le]of L){const de=F(te),P=F(le);!de||!P||(j+=`<line x1="${de.x}" y1="${de.y}" x2="${P.x}" y2="${P.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const te of Object.keys(M)){const le=F(te);if(!le)continue;const de=te.replace(/\d+/,""),P=n[de]||"#555";j+=`<circle cx="${le.x}" cy="${le.y}" r="${C}" fill="${P}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,j+=`<text x="${le.x}" y="${le.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${de}</text>`}return j+="</svg>",j}const v=t.filter(M=>M.formation===o);v.length;const y=!e.is_for_sale;s(`Formation ${o}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Kt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(z=document.getElementById("direct-sell-form-btn"))==null||z.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${o} pour ${Kt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const M=v.find(N=>!N.is_for_sale)||v[0];if(!M){d("Aucune carte à vendre","error");return}await E.from("market_listings").delete().eq("card_id",M.id),await E.from("transfer_history").delete().eq("card_id",M.id);const{error:L}=await E.from("cards").delete().eq("id",M.id);if(L){d(L.message,"error");return}await E.from("users").update({credits:(c.profile.credits||0)+Kt}).eq("id",c.profile.id),await p(),d(`+${Kt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),a(),l("collection")}),(r=document.getElementById("market-sell-form-btn"))==null||r.addEventListener("click",async()=>{const M=parseInt(document.getElementById("sell-price-form").value);if(!M||M<1){d("Prix invalide","error");return}await E.from("cards").update({is_for_sale:!0,sale_price:M}).eq("id",e.id),await E.from("market_listings").insert({seller_id:c.profile.id,card_id:e.id,price:M}),d("Carte mise en vente sur le marché !","success"),a(),l("collection")}),(u=document.getElementById("cancel-sell-form-btn"))==null||u.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),a(),l("collection")})}async function Di(e,t,i,s){var be,$e,Se,Le,xe,W,oe;const{state:c,toast:d,openModal:a,closeModal:l,navigate:p,refreshProfile:o}=s,n=e.player,g=t.filter(K=>K.player.id===n.id),v=g.length,y=Math.max(Number(n.note_g)||0,Number(n.note_d)||0,Number(n.note_m)||0,Number(n.note_a)||0),z=n.rarity||"normal",{data:r}=await E.from("sell_price_configs").select("*").eq("rarity",z).lte("note_min",y).gte("note_max",y).order("note_min",{ascending:!1}).limit(1);((be=r==null?void 0:r[0])==null?void 0:be.price)??Jo[z];const u=n.rarity!=="legende",M=so(n),L=(n.rarity==="pepite"||n.rarity==="papyte")&&e.current_note!=null?e.current_note:Gt(n,n.job),N=n.rarity==="pepite"||n.rarity==="papyte",V=n.job2?N?_i(e,ao(n.job2)):Gt(n,n.job2):null,C=jt[n.job]||"#1A6B3C",F=n.job2?jt[n.job2]:null,j=ro[n.rarity]||"#ccc",te=Ei[n.country_code]||n.country_code||"",le=e.evolution_bonus||0,P=L+le,Y=V||0,H=Y>0?Y+le:0,G=g.map(K=>K.id);let ne={};if(G.length){const{data:K}=await E.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",G).order("transferred_at",{ascending:!0});(K||[]).forEach(J=>{ne[J.card_id]||(ne[J.card_id]=[]),ne[J.card_id].push(J)})}const fe=K=>{const J=K.transferred_at?new Date(K.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",re=K.source==="booster"?"Booster":K.price?K.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${K.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${K.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${K.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${re}</div>
        <div style="font-size:11px;color:var(--gray-600)">${J}</div>
      </div>
    </div>`},ye=G.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${v>1?`(${v})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${g.map((K,J)=>{const re=ne[K.id]||[],ie=K.is_for_sale,ae=re.length?re[re.length-1]:null,we=(n.rarity==="pepite"||n.rarity==="papyte")&&K.current_note!=null?` (☆${K.current_note})`:"";return`
            <div data-card-id="${K.id}" data-card-idx="${J}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${ie?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${K.id}" ${ie?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${J+1}${we}${ie?" 🏷️ En vente":""}</div>
                  ${ae?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${ae.club_name} · ${ae.source==="booster"?"Booster":ae.price?ae.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${J}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${re.length?`${re.length} club${re.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${J}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${re.map(fe).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${P}${n.job2&&Y>0?` / ${H}`:""}`:`Note actuelle : ${P}${n.job2&&Y>0?` / ${H}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary" style="background:#1A6B3C;border-color:#1A6B3C;padding:8px 16px;font-weight:900">
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${u?`
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
    </div>`:"";a(`${n.firstname} ${n.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      <div style="width:140px;border-radius:12px;padding:6px;background:${j};flex-shrink:0">
        <div style="background:#f2e8d2;border-radius:8px;overflow:hidden;display:flex;flex-direction:column">
          <div style="padding:5px 6px 2px;text-align:center">
            <div style="font-size:8px;letter-spacing:1.2px;text-transform:uppercase;color:#666">${n.firstname}</div>
            <div style="font-size:14px;font-weight:900;color:#111;font-family:Arial Black,Arial;line-height:1.1">${(n.surname_encoded||"").toUpperCase()}</div>
          </div>
          <div style="position:relative;height:80px;background:#f2e8d2;display:flex;flex-direction:column;align-items:center">
            <div style="position:absolute;top:16px;width:100%;height:28px;background:${C}"></div>
            <svg width="54" height="52" viewBox="0 0 54 52" style="position:absolute;top:4px;z-index:2;display:block">
              <polygon points="27,3 33,18 50,18 37,29 41,47 27,37 13,47 17,29 4,18 21,18" fill="${C}" stroke="white" stroke-width="2.5"/>
              <text x="27" y="33" text-anchor="middle" font-size="16" font-weight="900" fill="white" font-family="Arial Black,Arial">${L}</text>
            </svg>
            ${V!==null?`
            <svg width="32" height="31" viewBox="0 0 32 31" style="position:absolute;top:50px;z-index:2;display:block">
              <polygon points="16,2 19.5,11 30,11 22,17.5 25,27 16,21.5 7,27 10,17.5 2,11 12.5,11" fill="${F}" stroke="white" stroke-width="1.5"/>
              <text x="16" y="20" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${V}</text>
            </svg>`:""}
          </div>
          <div style="height:110px;overflow:hidden;background:#b8d4f0">
            ${M?`<img src="${M}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"
                   onerror="this.parentElement.innerHTML='<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be'>👤</div>'">`:'<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#8fa5be">👤</div>'}
          </div>
          <div style="background:#f2e8d2;padding:3px 6px;display:flex;align-items:center;justify-content:space-between;min-height:24px">
            <img src="https://flagsapi.com/${n.country_code}/flat/32.png" style="width:20px;height:13px;object-fit:cover;border-radius:2px" onerror="this.style.display='none'">
            <div style="font-size:7px;text-transform:uppercase;color:#555">${te}</div>
            ${($e=n.clubs)!=null&&$e.logo_url?`<img src="${n.clubs.logo_url}" style="width:22px;height:16px;object-fit:contain">`:`<div style="background:#1a3a7a;color:#fff;border-radius:2px;padding:1px 3px;font-size:6px;font-weight:800">${(((Se=n.clubs)==null?void 0:Se.encoded_name)||"").slice(0,6)}</div>`}
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${j}">${n.rarity.toUpperCase()}</div>
          ${n.rarity==="pepite"||n.rarity==="papyte"?`
          <div style="margin-top:6px;background:${j}18;border-left:3px solid ${j};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${j};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",n.note_g],["DEF",n.note_d],["MIL",n.note_m],["ATT",n.note_a]].map(([K,J])=>{const re=jt[K],ie=Number(J)||0;return`<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <svg width="38" height="37" viewBox="0 0 38 37" style="display:block">
                  <polygon points="19,2 24,13 36,13 26,21 30,33 19,26 8,33 12,21 2,13 14,13" fill="${re}" stroke="white" stroke-width="1.5"/>
                  <text x="19" y="23" text-anchor="middle" font-size="13" font-weight="900" fill="white" font-family="Arial Black,Arial">${ie}</text>
                </svg>
                <span style="font-size:9px;font-weight:700;color:var(--gray-600)">${K}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${v}</div>
        </div>
      </div>
    </div>
    ${ye}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(Le=document.getElementById("close-detail"))==null||Le.addEventListener("click",l);let ze=new Set;const Ee=()=>{const K=ze.size,J=document.getElementById("sell-action-panel");if(!J)return;J.style.display=K>0?"block":"none",document.getElementById("sell-selected-count").textContent=K;const re=document.getElementById("evolve-btn");re&&(re.textContent=`⬆️ Évoluer ${K>1?"(+"+K+")":""}`)};document.querySelectorAll(".expl-check").forEach(K=>{K.addEventListener("change",()=>{const J=K.dataset.id;K.checked?ze.add(J):ze.delete(J);const re=K.closest(".exemplaire-row");re&&(re.style.borderColor=K.checked?"#1A6B3C":"#eee"),Ee()})}),document.querySelectorAll(".exemplaire-row").forEach(K=>{K.addEventListener("click",J=>{if(J.target.closest("button")||J.target.tagName==="INPUT")return;const re=K.querySelector(".expl-check");re&&!re.disabled&&(re.checked=!re.checked,re.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(K=>{K.addEventListener("click",J=>{J.stopPropagation();const re=document.querySelector(`.expl-hist[data-hist="${K.dataset.idx}"]`);re&&(re.style.display=re.style.display==="none"?"flex":"none")})}),(xe=document.getElementById("evolve-btn"))==null||xe.addEventListener("click",async()=>{const K=[...ze];if(!K.length)return;const J=K.filter(we=>we!==e.id);if(J.length,!(!J.length&&K.length===1&&K[0]===e.id)){if(!J.length){d("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(we=>{const Ae=document.createElement("div");Ae.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",Ae.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${n.firstname} ${n.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${J.length}</strong> copie${J.length>1?"s":""} sacrifiée${J.length>1?"s":""}<br>
            📈 Note : <strong>${L+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${L+(e.evolution_bonus||0)+J.length}</strong>
            ${V&&V>0?`<br>📈 Note 2 : <strong>${V+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${V+(e.evolution_bonus||0)+J.length}</strong>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(Ae),Ae.querySelector("#sac-cancel").addEventListener("click",()=>{Ae.remove(),we(!1)}),Ae.querySelector("#sac-ok").addEventListener("click",()=>{Ae.remove(),we(!0)}),Ae.addEventListener("click",Ce=>{Ce.target===Ae&&(Ae.remove(),we(!1))})}))return;if(J.length){await E.from("market_listings").delete().in("card_id",J),await E.from("transfer_history").delete().in("card_id",J);const{error:we}=await E.from("cards").delete().in("id",J);if(we){d("Erreur suppression : "+we.message,"error");return}}const ie=(e.evolution_bonus||0)+J.length,{error:ae}=await E.from("cards").update({evolution_bonus:ie}).eq("id",e.id);if(ae){d("Erreur évolution : "+ae.message,"error");return}const Te=L+ie;d(`⬆️ ${n.firstname} ${n.surname_encoded} : note ${L+e.evolution_bonus||L} → ${Te}${J.length?` · ${J.length} copie${J.length>1?"s":""} sacrifiée${J.length>1?"s":""}`:""} !`,"success",4e3),l(),p("collection")}),(W=document.getElementById("market-sell-btn"))==null||W.addEventListener("click",async()=>{var Te;const K=[...ze];if(!K.length){d("Sélectionne au moins un exemplaire","warning");return}const J=parseInt((Te=document.getElementById("sell-market-price"))==null?void 0:Te.value);if(!J||J<1){d("Prix invalide","error");return}const{error:re}=await E.from("cards").update({is_for_sale:!0,sale_price:J}).in("id",K);if(re){d(re.message,"error");return}const ie=K.map(we=>({seller_id:c.profile.id,card_id:we,price:J,status:"active"})),{error:ae}=await E.from("market_listings").insert(ie);ae&&console.warn("[Market] insert listings:",ae.message),d(`${K.length} carte${K.length>1?"s":""} mise${K.length>1?"s":""} en vente à ${J.toLocaleString("fr")} cr. chacune !`,"success"),l(),p("collection")}),(oe=document.getElementById("cancel-sell-btn"))==null||oe.addEventListener("click",async()=>{await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await E.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),d("Annonce retirée","success"),l(),p("collection")})}const Xt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},vt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ti(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function lo(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function co(e){var i;const t="https://fcnwclxlkytdfjotqkta.supabase.co";return(i=e==null?void 0:e.clubs)!=null&&i.logo_url?e.clubs.logo_url.startsWith("http")?e.clubs.logo_url:`${t}/storage/v1/object/public/assets/clubs/${e.clubs.logo_url}`:null}function tn(e,t=44,i=58){var y;const s=e?ti(e):null,c=e?co(e):null,d=lo(e==null?void 0:e.country_code),a=(e==null?void 0:e.job)||"MIL",l=vt[a]||"#555",p={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",o=Number(a==="GK"?e==null?void 0:e.note_g:a==="DEF"?e==null?void 0:e.note_d:a==="MIL"?e==null?void 0:e.note_m:e==null?void 0:e.note_a)||0,n=Math.round(i*.19),g=Math.round(i*.25),v=i-n-g;return e?`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${p};background:${l};position:relative;overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:0;right:0;height:${n}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.surname_encoded)||"").slice(0,9)}</span>
    </div>
    ${s?`<img src="${s}" style="position:absolute;top:${n}px;left:0;width:${t}px;height:${v}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${d?`<img src="${d}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">🌍</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${o}</span>
      ${c?`<img src="${c}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:(y=e==null?void 0:e.clubs)!=null&&y.encoded_name?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubs.encoded_name||"").slice(0,3).toUpperCase()}</span>`:"<span></span>"}
    </div>
  </div>`:`<div style="width:${t}px;height:${i}px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:20px;color:rgba(255,255,255,0.3)">+</div>`}async function pi(e,t){const{state:i,navigate:s,toast:c}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const a=prompt("Nom du deck :",`Deck ${((d==null?void 0:d.length)||0)+1}`);if(!a)return;const{data:l,error:p}=await E.from("decks").insert({owner_id:i.profile.id,name:a}).select().single();if(p){c(p.message,"error");return}c("Deck créé !","success"),Gi(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(a=>{a.addEventListener("click",()=>Gi(a.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(a=>{a.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",a.dataset.name);if(!l||l===a.dataset.name)return;const{error:p}=await E.from("decks").update({name:l}).eq("id",a.dataset.rename);if(p){c(p.message,"error");return}c("Deck renommé !","success"),pi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(a=>{a.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${a.dataset.name}" ? Cette action est irréversible.`))return;await E.from("deck_cards").delete().eq("deck_id",a.dataset.delete);const{error:l}=await E.from("decks").delete().eq("id",a.dataset.delete);if(l){c(l.message,"error");return}c("Deck supprimé.","success"),pi(e,t)})})}async function Gi(e,t,i){const{state:s,toast:c}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select("*").eq("id",e).single(),{data:a}=await E.from("cards").select(`id, card_type, formation, stadium_id,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",s.profile.id),l=(a||[]).filter(u=>u.card_type==="player"&&u.player),p=(a||[]).filter(u=>u.card_type==="formation"),o=(a||[]).filter(u=>u.card_type==="stadium"),n=[...new Set(o.map(u=>u.stadium_id).filter(Boolean))];let g={};if(o.forEach(u=>{u.stadium_def&&u.stadium_id&&(g[u.stadium_id]=u.stadium_def)}),n.length&&Object.keys(g).length<n.length){const{data:u}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",n);(u||[]).forEach(M=>{g[M.id]=M})}const v=p.map(u=>u.formation).filter(Boolean),{data:y}=await E.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let z=d.formation||"4-4-2";v.length>0&&!v.includes(z)&&(z=v[0]);const r={deckId:e,name:d.name,formation:z,formationCardId:d.formation_card_id,stadiumCardId:d.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:p,stadiumCards:o,stadDefMap:g,availableFormations:v};(y||[]).forEach(u=>{u.is_starter?r.slots[u.position]=u.card_id:r.subs.includes(u.card_id)||r.subs.push(u.card_id)}),St(t,r,i)}function St(e,t,i){var p,o;const{navigate:s}=i;Xt[t.formation];const c=Pi(t.formation),d=c.filter(n=>t.slots[n]).length,a=t.availableFormations.length>0?t.availableFormations:Object.keys(Xt),l=t.subs.map(n=>t.playerCards.find(g=>g.id===n)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
        ${a.map(n=>`<option value="${n}" ${n===t.formation?"selected":""}>${n}</option>`).join("")}
      </select>
    </div>

    <!-- Carte Stade -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;align-items:center;gap:10px">
      <span style="font-size:18px">🏟️</span>
      <div style="flex:1;font-size:12px;font-weight:700;color:#555">Carte Stade <span style="font-size:10px;color:#aaa;font-weight:400">(+10 aux joueurs du même club/pays)</span></div>
      ${t.stadiumCards.length>0?`
        <select id="stadium-select" style="padding:6px;border-radius:6px;border:1.5px solid #E87722;font-size:12px;max-width:180px;background:#fff">
          <option value="">Aucun stade</option>
          ${t.stadiumCards.map(n=>{var y;const g=t.stadDefMap[n.stadium_id],v=g?g.name+((y=g.club)!=null&&y.encoded_name?` (${g.club.encoded_name})`:g.country_code?` (${g.country_code})`:""):n.id.slice(0,8);return`<option value="${n.id}" ${t.stadiumCardId===n.id?"selected":""}>${v}</option>`}).join("")}
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
        ${l.map(n=>{const g=n.player;return`<div style="position:relative;flex-shrink:0">
            ${tn(g,44,58)}
            <button data-remove-sub="${n.id}"
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
  </div>`,on(e,t,c,i),document.getElementById("builder-back").addEventListener("click",()=>s("decks")),document.getElementById("formation-select").addEventListener("change",n=>{t.formation=n.target.value;const g=Pi(t.formation),v={};g.forEach(y=>{t.slots[y]&&(v[y]=t.slots[y])}),t.slots=v,St(e,t,i)}),(p=document.getElementById("stadium-select"))==null||p.addEventListener("change",n=>{t.stadiumCardId=n.target.value||null}),document.getElementById("save-deck").addEventListener("click",()=>an(t,i)),e.querySelectorAll("[data-remove-sub]").forEach(n=>{n.addEventListener("click",()=>{t.subs=t.subs.filter(g=>g!==n.dataset.removeSub),St(e,t,i)})}),(o=document.getElementById("add-sub-btn"))==null||o.addEventListener("click",()=>{rn(t,e,i)})}function on(e,t,i,s){var N,V;const c=e.querySelector("#deck-field");if(!c)return;const d=(N=t.stadiumCards)==null?void 0:N.find(C=>C.id===t.stadiumCardId),a=d&&((V=t.stadDefMap)==null?void 0:V[d.stadium_id])||null,l=Pt[t.formation]||{},p=Wi(t.formation)||[],o={};for(const C of i){const F=t.slots[C],j=F?t.playerCards.find(te=>te.id===F):null;o[C]=j?j.player:null}const n=300,g=300,v=48,y=64,z=13,r=16,u=38;function M(C){const F=l[C];return F?{x:F.x*n,y:F.y*g}:null}let L="";for(const[C,F]of p){const j=M(C),te=M(F);if(!j||!te)continue;const le=o[C]?{...o[C],club_id:o[C].club_id,country_code:o[C].country_code,rarity:o[C].rarity}:null,de=o[F]?{...o[F],club_id:o[F].club_id,country_code:o[F].country_code,rarity:o[F].rarity}:null,P=at(le,de);P==="#ff3333"||P==="#cc2222"?L+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${te.x.toFixed(1)}" y2="${te.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>`:(L+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${te.x.toFixed(1)}" y2="${te.y.toFixed(1)}" stroke="${P}" stroke-width="8" stroke-linecap="round" opacity="0.2"/>`,L+=`<line x1="${j.x.toFixed(1)}" y1="${j.y.toFixed(1)}" x2="${te.x.toFixed(1)}" y2="${te.y.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.9"/>`)}for(const C of i){const F=M(C);if(!F)continue;const j=o[C],te=C.replace(/\d+/,""),le=vt[te]||"#555",de=(F.x-v/2).toFixed(1),P=(F.y-y/2).toFixed(1),Y={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[j==null?void 0:j.rarity]||"#aaa";if(j){const H=ti(j),G=co(j),ne=lo(j.country_code),fe=Number(te==="GK"?j.note_g:te==="DEF"?j.note_d:te==="MIL"?j.note_m:j.note_a)||0,ye=a&&(a.club_id&&String(j.club_id)===String(a.club_id)||a.country_code&&j.country_code===a.country_code),ze=ye?fe+10:fe,Ee=y-z-r;L+=`<defs><clipPath id="dcp-${C}"><rect x="${de}" y="${(F.y-y/2+z).toFixed(1)}" width="${v}" height="${Ee}"/></clipPath></defs>`,L+=`<rect x="${de}" y="${P}" width="${v}" height="${y}" rx="5" fill="${le}"/>`,H&&(L+=`<image href="${H}" x="${de}" y="${(F.y-y/2+z).toFixed(1)}" width="${v}" height="${Ee}" clip-path="url(#dcp-${C})" preserveAspectRatio="xMidYMin slice"/>`),L+=`<rect x="${de}" y="${P}" width="${v}" height="${z}" fill="rgba(255,255,255,0.93)"/>`,L+=`<text x="${F.x.toFixed(1)}" y="${(F.y-y/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(j.surname_encoded||"").slice(0,9)}</text>`;const be=(F.y+y/2-r).toFixed(1);L+=`<rect x="${de}" y="${be}" width="${v}" height="${r}" fill="rgba(255,255,255,0.93)"/>`,ne&&(L+=`<image href="${ne}" x="${(F.x-21).toFixed(1)}" y="${(F.y+y/2-r+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`),L+=`<text x="${F.x.toFixed(1)}" y="${(F.y+y/2-r/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="#111" font-family="Arial Black">${ze}</text>`,G&&(L+=`<image href="${G}" x="${(F.x+v/2-14).toFixed(1)}" y="${(F.y+y/2-r+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`),L+=`<rect x="${de}" y="${P}" width="${v}" height="${y}" rx="5" fill="none" stroke="${ye?"#E87722":Y}" stroke-width="${ye?"2.5":"2"}"/>`,ye&&(L+=`<rect x="${(F.x+v/2-13).toFixed(1)}" y="${P}" width="13" height="9" rx="3" fill="#E87722"/>`,L+=`<text x="${(F.x+v/2-6.5).toFixed(1)}" y="${(F.y-y/2+4.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="900" fill="#fff" font-family="Arial">+10</text>`)}else L+=`<rect x="${de}" y="${P}" width="${v}" height="${y}" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="5,3"/>`,L+=`<text x="${F.x.toFixed(1)}" y="${F.y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="22" fill="rgba(255,255,255,0.35)">+</text>`,L+=`<text x="${F.x.toFixed(1)}" y="${(F.y+16).toFixed(1)}" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.3)">${te}</text>`;L+=`<rect x="${de}" y="${P}" width="${v}" height="${y}" rx="5" fill="rgba(0,0,0,0.01)" class="deck-slot-hit" data-pos="${C}" style="cursor:pointer"/>`}c.innerHTML=`<svg viewBox="${-u} ${-u} ${n+u*2} ${g+u*2}" width="100%" style="display:block;max-width:440px;margin:0 auto">${L}</svg>`,c.querySelectorAll(".deck-slot-hit").forEach(C=>{C.addEventListener("click",()=>nn(C.dataset.pos,t,e,s))})}function nn(e,t,i,s){var v,y,z;const{openModal:c,closeModal:d}=s,a=e.replace(/\d+/,""),l=t.slots[e],p=l?t.playerCards.find(r=>r.id===l):null;(v=p==null?void 0:p.player)==null||v.id;const o=new Set;Object.entries(t.slots).forEach(([r,u])=>{var L;if(r===e||!u)return;const M=t.playerCards.find(N=>N.id===u);(L=M==null?void 0:M.player)!=null&&L.id&&o.add(M.player.id)}),t.subs.forEach(r=>{var M;const u=t.playerCards.find(L=>L.id===r);(M=u==null?void 0:u.player)!=null&&M.id&&o.add(u.player.id)});const n=new Set,g=t.playerCards.filter(r=>{const u=r.player;return!(u.job===a||u.job2===a)||o.has(u.id)||n.has(u.id)?!1:(n.add(u.id),!0)});g.sort((r,u)=>{const M=a==="GK"?r.player.note_g:a==="DEF"?r.player.note_d:a==="MIL"?r.player.note_m:r.player.note_a;return(a==="GK"?u.player.note_g:a==="DEF"?u.player.note_d:a==="MIL"?u.player.note_m:u.player.note_a)-M}),c(`Choisir ${a} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${g.length>0?g.map(r=>{var V,C;const u=r.player,M=a==="GK"?u.note_g:a==="DEF"?u.note_d:a==="MIL"?u.note_m:u.note_a,L=ti(u),N={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[u.rarity];return`<div class="player-option" data-card-id="${r.id}"
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
              ${(V=u.clubs)!=null&&V.logo_url?`<img src="${u.clubs.logo_url}" style="width:18px;height:18px;object-fit:contain">`:`<span style="font-size:10px;color:var(--gray-600)">${((C=u.clubs)==null?void 0:C.encoded_name)||"—"}</span>`}
              <span style="font-size:10px;color:var(--gray-600)">${u.country_code}</span>
            </div>
          </div>
          <!-- Note -->
          <div style="width:36px;height:36px;border-radius:8px;background:${vt[a]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:16px;border:2px solid ${N};flex-shrink:0">
            ${M}
          </div>
        </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(y=document.getElementById("close-selector"))==null||y.addEventListener("click",d),(z=document.getElementById("remove-player"))==null||z.addEventListener("click",()=>{delete t.slots[e],d(),St(i,t,s)}),document.querySelectorAll(".player-option").forEach(r=>{r.addEventListener("click",()=>{t.slots[e]=r.dataset.cardId,d(),St(i,t,s)})})}function rn(e,t,i){var p;const{openModal:s,closeModal:c}=i,d=new Set;Object.values(e.slots).filter(Boolean).forEach(o=>{var g;const n=e.playerCards.find(v=>v.id===o);(g=n==null?void 0:n.player)!=null&&g.id&&d.add(n.player.id)}),e.subs.forEach(o=>{var g;const n=e.playerCards.find(v=>v.id===o);(g=n==null?void 0:n.player)!=null&&g.id&&d.add(n.player.id)});const a=new Set,l=e.playerCards.filter(o=>{var n,g,v;return d.has((n=o.player)==null?void 0:n.id)||a.has((g=o.player)==null?void 0:g.id)?!1:(a.add((v=o.player)==null?void 0:v.id),!0)});s("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${l.length>0?l.map(o=>{var y;const n=o.player,g=ti(n),v=n.job==="GK"?n.note_g:n.job==="DEF"?n.note_d:n.job==="MIL"?n.note_m:n.note_a;return`<div class="player-option" data-card-id="${o.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${vt[n.job]}">
            ${g?`<img src="${g}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${n.firstname} ${n.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${n.job} · ${n.country_code} · ${((y=n.clubs)==null?void 0:y.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${vt[n.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${v}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(p=document.getElementById("close-sub-selector"))==null||p.addEventListener("click",c),document.querySelectorAll(".player-option").forEach(o=>{o.addEventListener("click",()=>{e.subs.push(o.dataset.cardId),c(),St(t,e,i)})})}async function an(e,t){const{state:i,toast:s,navigate:c}=t,d=e.formationCards.find(p=>p.formation===e.formation),a=(d==null?void 0:d.id)||e.formationCardId;await E.from("decks").update({formation:e.formation,formation_card_id:a||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await E.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([p,o],n)=>{l.push({deck_id:e.deckId,card_id:o,position:p,is_starter:!0,slot_order:n})}),e.subs.forEach((p,o)=>{l.push({deck_id:e.deckId,card_id:p,position:`SUB${o+1}`,is_starter:!1,slot_order:100+o})}),l.length>0){const{error:p}=await E.from("deck_cards").insert(l);if(p){s(p.message,"error");return}}s("Deck enregistré ✅","success"),c("decks")}function Pi(e){const t=Xt[e]||Xt["4-4-2"],i=["GK1"];for(let s=1;s<=t.DEF;s++)i.push(`DEF${s}`);for(let s=1;s<=t.MIL;s++)i.push(`MIL${s}`);for(let s=1;s<=t.ATT;s++)i.push(`ATT${s}`);return i}async function po(){const{data:e}=await E.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(e!=null&&e.length))return[];const{data:t}=await E.from("booster_drop_rates").select("*").in("booster_id",e.map(i=>i.id)).order("sort_order");return e.map(i=>({...i,rates:(t||[]).filter(s=>s.booster_id===i.id)}))}function sn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((s,c)=>s+Number(c.percentage),0);let i=Math.random()*t;for(const s of e)if(i-=Number(s.percentage),i<=0)return s;return e[e.length-1]}const uo=()=>Object.keys(Pt),dn=[{id:"players_std",img:"/manager-wars/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/manager-wars/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/manager-wars/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/manager-wars/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ui={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ln(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}const Ni={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},cn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},pn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ri(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function un(e){var n,g;const t=e.player;if(!t)return"";const i=t.job||"ATT",s=Ni[i],c=cn[t.rarity]||"#ccc",d=Ri(t,i),a=t.job2?Ri(t,t.job2):null,l=t.job2?Ni[t.job2]:null,p=ln(t),o=pn[t.country_code]||t.country_code||"";return`
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
        <div style="font-size:7px;letter-spacing:.8px;text-transform:uppercase;color:#555;flex:1;text-align:center">${o}</div>
        ${(n=t.clubs)!=null&&n.logo_url?`<img src="${t.clubs.logo_url}" style="width:22px;height:18px;object-fit:contain;flex-shrink:0">`:`<div style="background:#1a3a7a;color:#fff;border-radius:3px;padding:1px 4px;font-size:6px;font-weight:800;flex-shrink:0">${(((g=t.clubs)==null?void 0:g.encoded_name)||"").slice(0,6)}</div>`}
      </div>
    </div>
  </div>`}function fo(e){var c;const t={};(e.rates||[]).forEach(d=>{t[d.card_type]=(t[d.card_type]||0)+Number(d.percentage||0)});const i=((c=Object.entries(t).sort((d,a)=>a[1]-d[1])[0])==null?void 0:c[0])||"player",s=e.image_url||"booster-players.png";return{id:e.id,img:"/manager-wars/icons/"+s,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],_raw:e}}async function fn(e,{state:t,navigate:i,toast:s}){var a;const c=((a=t.profile)==null?void 0:a.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let d=[];try{d=(await po()).map(fo)}catch(l){console.warn("Erreur chargement boosters DB, fallback hardcodé",l)}d.length||(d=dn.map(l=>({...l,rates:[],isPub:l.id==="players_pub"}))),e.innerHTML=`
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(l=>{l.addEventListener("click",async()=>{const p=d.find(o=>o.id===l.dataset.booster);if(p){l.style.opacity="0.5",l.style.pointerEvents="none";try{await gn(p,{state:t,toast:s,navigate:i,container:e})}catch(o){s(o.message,"error"),l.style.opacity="",l.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(l=>{l.addEventListener("click",p=>{p.stopPropagation();const o=d.find(n=>n.id===l.dataset.boosterId);bn(o)})})}async function gn(e,{state:t,toast:i,navigate:s,container:c}){var g,v;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}if(e.isPub)try{await wn()}catch(y){i(y.message||"Regardez la pub entièrement pour ouvrir le booster","error");return}const{data:d}=await E.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),a=new Set((d||[]).filter(y=>y.card_type==="player").map(y=>y.player_id)),l=new Set((d||[]).filter(y=>y.card_type==="formation").map(y=>y.formation));let p=[],o=null;try{if((g=e.rates)!=null&&g.length)p=await fi(t.profile,e);else{const y=e.type||"player";y==="player"?p=await go(t.profile,e.cardCount,e.cost):y==="game_changer"?p=await mo(t.profile,e.cardCount,e.cost):y==="formation"?p=await xo(t.profile,e.cost):p=await fi(t.profile,e)}}catch(y){o=y.message||String(y),console.error("[Booster] Erreur:",y)}if(!(p!=null&&p.length)){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",y.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${o||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(y),(v=y.querySelector("#anim-close-err"))==null||v.addEventListener("click",()=>y.remove());return}p.forEach(y=>{y.card_type==="player"&&y.player?y.isDuplicate=a.has(y.player.id):y.card_type==="formation"&&(y.isDuplicate=l.has(y.formation))});const{data:n}=await E.from("users").select("*").eq("id",t.profile.id).single();n&&(t.profile=n),yo(p,e,s)}function mn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function mt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function xn(e,t){let i;switch(t){case"legende":i=e.filter(s=>s.rarity==="legende"),i.length||(i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte")),i.length||(i=e.filter(s=>mt(s)>=6));break;case"special":i=e.filter(s=>s.rarity==="pepite"||s.rarity==="papyte"),i.length||(i=e.filter(s=>mt(s)>=6));break;case"normal_high":i=e.filter(s=>s.rarity==="normal"&&mt(s)>=6),i.length||(i=e.filter(s=>mt(s)>=6));break;default:i=e.filter(s=>s.rarity==="normal"&&mt(s)>=1&&mt(s)<=5),i.length||(i=e.filter(s=>s.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function fi(e,t){if(t.cost>0){const{error:l}=await E.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(l)throw l}const{data:i}=await E.from("cards").select("player_id, card_type, formation").eq("owner_id",e.id),s=new Set((i||[]).filter(l=>l.card_type==="player").map(l=>l.player_id)),c=new Set((i||[]).filter(l=>l.card_type==="formation").map(l=>l.formation)),d=new Set,a=[];for(let l=0;l<(t.cardCount||5);l++){const p=sn(t.rates);if(p){if(p.card_type==="player"){const o=L=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[L]||L,n=p.rarity?o(p.rarity):null;let g=E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);n&&(g=g.eq("rarity",n));const{data:v}=await g;let y=v||[];if((p.note_min||p.note_max)&&(y=y.filter(L=>{const N=Math.max(Number(L.note_g)||0,Number(L.note_d)||0,Number(L.note_m)||0,Number(L.note_a)||0);return(!p.note_min||N>=p.note_min)&&(!p.note_max||N<=p.note_max)})),y.length||(p.note_min||p.note_max?(y=v||[],console.warn("[Booster] Aucun joueur avec note",p.note_min,"-",p.note_max,"— fallback rareté uniquement")):y=v||[]),!y.length)continue;let z=y.filter(L=>!d.has(L.id));z.length||(z=y);const r=z[Math.floor(Math.random()*z.length)];d.add(r.id);const u=s.has(r.id),{data:M}=await E.from("cards").insert({owner_id:e.id,player_id:r.id,card_type:"player"}).select().single();M&&(a.push({...M,player:r,isDuplicate:u}),E.rpc("record_transfer",{p_card_id:M.id,p_player_id:r.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(p.card_type==="game_changer"){const{data:o}=await E.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),n=o!=null&&o.length?o:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],v=n[Math.floor(Math.random()*n.length)].name,{data:y}=await E.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:v}).select().single();y&&a.push(y)}else if(p.card_type==="formation"){const o=uo(),n=o[Math.floor(Math.random()*o.length)],g=c.has(n),{data:v}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:n}).select();v!=null&&v[0]&&a.push({...v[0],isDuplicate:g})}else if(p.card_type==="stadium"){const{data:o,error:n}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(n){console.error("[Booster] stadium_definitions:",n.message);continue}if(!(o!=null&&o.length)){console.warn("[Booster] Aucun stade en DB");continue}const g=o[Math.floor(Math.random()*o.length)],{data:v,error:y}=await E.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:g.id}).select("id,card_type,stadium_id").single();if(y){console.error("[Booster] insert stadium card:",y.message);continue}v&&a.push({...v,rarity:"normal",_stadiumDef:g})}}}return a}async function go(e,t,i){if(i>0){const{error:o}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o}const{data:s}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(s!=null&&s.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const c=s.filter(o=>o.job==="GK"),d=s.filter(o=>o.job!=="GK"),a=!e.first_booster_opened&&c.length>0,l=[];for(let o=0;o<t;o++){const n=o===0&&a?c:o===0?d:s,g=mn(),v=xn(n,g);v&&l.push(v)}a&&await E.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await E.from("cards").insert(l.map(o=>({owner_id:e.id,player_id:o.id,card_type:"player"}))).select();return(p||[]).forEach((o,n)=>{E.rpc("record_transfer",{p_card_id:o.id,p_player_id:l[n].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((o,n)=>({...p[n],player:o}))}async function mo(e,t,i){const{error:s}=await E.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s;const{data:c}=await E.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),d=c!=null&&c.length?c:Object.keys(ui).map(n=>({name:n,gc_type:"game_changer"})),a=Array.from({length:t},()=>{const n=d[Math.floor(Math.random()*d.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:n.name,gc_definition_id:n.id||null}}),{data:l,error:p}=await E.from("cards").insert(a).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(l||[]).map(n=>{const g=c==null?void 0:c.find(v=>v.name===n.gc_type||v.id===n.gc_definition_id);return{...n,_gcDef:g||null}})}async function xo(e,t){const{error:i}=await E.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:s}=await E.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),c=new Set((s||[]).map(n=>n.formation)),d=uo(),a=d[Math.floor(Math.random()*d.length)],l=c.has(a),{data:p,error:o}=await E.from("cards").insert({owner_id:e.id,card_type:"formation",formation:a}).select();return o&&console.error("[Booster Formation] Erreur insert:",o.message,o),(p||[]).map(n=>({...n,isDuplicate:l}))}function yo(e,t,i,s=null){var Y,H;if(!e||e.length===0){const G=document.createElement("div");G.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",G.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(G),(Y=G.querySelector("#anim-close-err"))==null||Y.addEventListener("click",()=>G.remove());return}e=[...e].sort((G,ne)=>{const fe=G.player?mt(G.player):-1;return(ne.player?mt(ne.player):-1)-fe});const c=document.createElement("div");c.id="booster-anim-overlay",c.innerHTML=`
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
  `,document.body.appendChild(c);let d=!1;const a=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let p=!1;const o=G=>G.touches&&G.touches[0]?G.touches[0].clientX:G.clientX;function n(G){d||(p=!0,l.style.opacity="1",g(G))}function g(G){if(!p||d)return;const ne=a.getBoundingClientRect(),fe=o(G)-ne.left,ye=Math.max(0,Math.min(1,fe/ne.width));l.style.width=ye*ne.width+"px",ye>=.82&&y()}function v(){d||(p=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{d||(l.style.transition="")},220))}function y(){var ne;if(d)return;d=!0,p=!1,l.style.width="100%",l.style.opacity="1",(ne=document.getElementById("cut-flash"))==null||ne.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const G=document.getElementById("cut-hint");G&&(G.style.opacity="0"),a.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",M(0)},620)}a.addEventListener("pointerdown",n),window.addEventListener("pointermove",g),window.addEventListener("pointerup",v),a.addEventListener("touchstart",n,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",v);let z=0,r=!1;const u=new Set;function M(G){z=G,document.getElementById("reveal-phase").style.display="flex",L(),N(G,0),te()}function L(){const G=document.getElementById("card-dots");G&&(G.innerHTML=e.map((ne,fe)=>`<div class="card-dot" data-i="${fe}" style="width:8px;height:8px;border-radius:50%;background:${fe===z?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),G.querySelectorAll(".card-dot").forEach(ne=>ne.addEventListener("click",()=>C(parseInt(ne.dataset.i)))))}function N(G,ne){var xe;const fe=e[G],ye=document.getElementById("card-counter"),ze=document.getElementById("card-track");ye&&(ye.textContent=`Carte ${G+1} / ${e.length}`);const Ee=document.getElementById("reveal-btns");Ee&&(Ee.style.display=G===e.length-1?"flex":"none");const be=fe.card_type==="player"&&((xe=fe.player)==null?void 0:xe.rarity)==="legende",$e=!u.has(G);u.add(G);let Se=0;if(fe.card_type==="player"&&fe.player){const W=fe.player,oe=W.job||"ATT";Se=Number(oe==="GK"?W.note_g:oe==="DEF"?W.note_d:oe==="MIL"?W.note_m:W.note_a)||0}const Le=W=>{ze.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${be?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${yn(fe)}</div>
          ${fe.isDuplicate?'<div style="position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:5;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap">🔁 Doublon</div>':""}
        </div>`;const oe=document.getElementById("current-card-wrap");ne!==0?(oe.style.transition="none",oe.style.transform=`translateX(${ne>0?100:-100}%)`,requestAnimationFrame(()=>{oe.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",oe.style.transform="translateX(0)"})):oe.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),W||be?de():P(),L()};$e&&Se>6&&fe.card_type==="player"&&fe.player?V(fe,()=>Le(!0)):Le(!1)}function V(G,ne){var Se;r=!0;const fe=G.player,ye=`https://flagsapi.com/${fe.country_code}/flat/64.png`,ze=(Se=fe.clubs)==null?void 0:Se.logo_url,Ee=document.getElementById("walkout-overlay"),be=document.getElementById("walkout-stage");if(!Ee||!be){r=!1,ne();return}Ee.style.display="flex";const $e=()=>{const Le=be.firstElementChild;Le&&(Le.classList.remove("wo-in"),Le.classList.add("wo-out"))};be.innerHTML=`<img class="wo-in" src="${ye}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout($e,2e3),setTimeout(()=>{var Le;be.innerHTML=ze?`<img class="wo-in" src="${ze}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((Le=fe.clubs)==null?void 0:Le.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout($e,4450),setTimeout(()=>{Ee.style.display="none",be.innerHTML="",r=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),ne()},4900)}function C(G){if(r||G<0||G>=e.length||G===z)return;const ne=G>z?1:-1;z=G,N(G,ne)}function F(){C(z+1)}function j(){C(z-1)}function te(){const G=document.getElementById("card-viewport");if(!G||G._swipeBound)return;G._swipeBound=!0;let ne=0,fe=0,ye=0,ze=!1;const Ee=xe=>xe.touches?xe.touches[0].clientX:xe.clientX,be=xe=>xe.touches?xe.touches[0].clientY:xe.clientY,$e=xe=>{ze=!0,ne=Ee(xe),fe=be(xe),ye=0},Se=xe=>{if(!ze)return;ye=Ee(xe)-ne;const W=be(xe)-fe;if(Math.abs(ye)<Math.abs(W))return;const oe=document.getElementById("current-card-wrap");oe&&(oe.style.transition="none",oe.style.transform=`translateX(${ye*.6}px) rotate(${ye*.02}deg)`)},Le=()=>{if(!ze)return;ze=!1;const xe=document.getElementById("current-card-wrap"),W=55;ye<=-W&&z<e.length-1?F():ye>=W&&z>0?j():xe&&(xe.style.transition="transform .2s ease",xe.style.transform="translateX(0)")};G.addEventListener("pointerdown",$e),G.addEventListener("pointermove",Se),G.addEventListener("pointerup",Le),G.addEventListener("pointercancel",Le),G.addEventListener("touchstart",$e,{passive:!0}),G.addEventListener("touchmove",Se,{passive:!0}),G.addEventListener("touchend",Le),G.addEventListener("click",xe=>{if(Math.abs(ye)>8)return;const W=G.getBoundingClientRect();xe.clientX-W.left>W.width/2?F():j()})}let le=null;function de(){const G=document.getElementById("fireworks-canvas");if(!G)return;G.width=window.innerWidth,G.height=window.innerHeight;const ne=G.getContext("2d"),fe=[];function ye(){const Ee=Math.random()*G.width,be=Math.random()*G.height*.6,$e=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Se=$e[Math.floor(Math.random()*$e.length)];for(let Le=0;Le<60;Le++){const xe=Math.PI*2/60*Le,W=2+Math.random()*5;fe.push({x:Ee,y:be,vx:Math.cos(xe)*W,vy:Math.sin(xe)*W,alpha:1,color:Se,size:2+Math.random()*3})}}ye(),le=setInterval(ye,600);function ze(){if(document.getElementById("fireworks-canvas")){ne.clearRect(0,0,G.width,G.height);for(let Ee=fe.length-1;Ee>=0;Ee--){const be=fe[Ee];if(be.x+=be.vx,be.y+=be.vy+.08,be.vy*=.98,be.alpha-=.018,be.alpha<=0){fe.splice(Ee,1);continue}ne.globalAlpha=be.alpha,ne.fillStyle=be.color,ne.beginPath(),ne.arc(be.x,be.y,be.size,0,Math.PI*2),ne.fill()}ne.globalAlpha=1,(le!==null||fe.length>0)&&requestAnimationFrame(ze)}}ze()}function P(){le!==null&&(clearInterval(le),le=null);const G=document.getElementById("fireworks-canvas");G&&G.getContext("2d").clearRect(0,0,G.width,G.height)}if(s){const G=document.getElementById("reveal-btns");G&&(G.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(H=document.getElementById("reveal-next"))==null||H.addEventListener("click",()=>{P(),c.remove(),s()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{P(),c.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{P(),c.remove(),i("boosters")})}function yn(e){var t,i,s,c;if(e.card_type==="player"&&e.player)return un(e);if(e.card_type==="game_changer"){const d=e._gcDef,a=(d==null?void 0:d.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},p={purple:"#b06ce0",light_blue:"#00d4ef"},o=l[d==null?void 0:d.color]||l.purple,n=p[d==null?void 0:d.color]||p.purple,g=(d==null?void 0:d.name)||e.gc_type||"Game Changer",v=(d==null?void 0:d.effect)||((t=ui[e.gc_type])==null?void 0:t.desc)||"",y=d!=null&&d.image_url?`/manager-wars/icons/${d.image_url}`:null,z=((i=ui[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${o};border-radius:14px;border:3px solid ${n};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${n}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${g.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${g}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${a?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${y?`<img src="${y}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${z}</span>`}
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
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function bn(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const c={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},d={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};s.innerHTML=`
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
      </button>`,document.body.appendChild(t);const s=setInterval(()=>{i--;const c=document.getElementById("ad-cd"),d=document.getElementById("ad-skip");c&&(c.textContent=i),d&&(d.textContent=i>0?`Passer (${i})`:"✓ Continuer"),i<=0&&(clearInterval(s),d&&(d.disabled=!1,d.style.cssText=d.style.cssText.replace("rgba(255,255,255,0.15)","#1A6B3C").replace("rgba(255,255,255,0.4)","#fff").replace("default","pointer")),d==null||d.addEventListener("click",()=>{t.remove(),e(!0)},{once:!0}))},1e3)})}function _n(){return new Promise((e,t)=>{if(typeof window.propeller>"u")return console.warn("[Ad] PropellerAds non chargé → simulation"),e(Ti());window.propeller.push({zone_id:bo,onComplete:()=>e(!0),onSkip:()=>t(new Error("Publicité ignorée")),onError:()=>t(new Error("Erreur publicité"))})})}function $n(){return new Promise((e,t)=>{if(typeof window.adsbygoogle>"u")return console.warn("[Ad] AdSense non chargé → simulation"),e(Ti());try{(window.adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-VOTRE_PUBLISHER_ID",google_ad_slot:bo,google_ad_format:"rewarded",on_reward:()=>e(!0),on_dismiss:()=>t(new Error("Publicité fermée"))})}catch(i){t(i)}})}async function kn(e,{state:t,navigate:i,toast:s,refreshProfile:c}){var v,y;const{data:d}=await E.from("users").select("*").eq("id",t.user.id).single();d&&(t.profile=d);let a=Array.isArray((v=t.profile)==null?void 0:v.pending_boosters)?[...t.profile.pending_boosters]:[];if(!a.length){await E.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let l=null;try{const r=(await po()).find(u=>(u.name||"").toLowerCase().includes("new player"));r&&(l=fo(r))}catch(z){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',z)}const p=a.length;let o=0;e.innerHTML=`
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
  </div>`;const n=async()=>{await E.from("users").update({pending_boosters:a}).eq("id",t.user.id)};async function g(){var L;if(o>=p||!a.length){await E.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),c&&await c(),s("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const z=a[0],{data:r}=await E.from("users").select("*").eq("id",t.user.id).single();r&&(t.profile=r);let u=[];try{if(z.type==="formation")u=await xo(t.profile,0);else if(z.type==="game_changer")u=await mo(t.profile,z.count||3,0);else if(l&&((L=l.rates)!=null&&L.length)){const N={...l,cost:0,cardCount:z.count||l.cardCount||5};u=await fi(t.profile,N),z.guaranteeGK&&!t.profile.first_booster_opened&&(u.some(C=>C.player&&C.player.job==="GK")||await En(t.profile,u),await E.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else u=await go(t.profile,z.count||5,0)}catch(N){s(N.message||"Erreur ouverture booster","error");return}a.shift(),o++,await n();const M=z.type==="formation"?{name:"Booster Formation",img:"/manager-wars/icons/booster-formation.png"}:z.type==="game_changer"?{name:"Booster Game Changer",img:"/manager-wars/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${o}/${p})`,img:(l==null?void 0:l.img)||"/manager-wars/icons/booster-players.png"};yo(u,M,i,()=>{g()})}(y=document.getElementById("onboard-start"))==null||y.addEventListener("click",()=>g())}async function En(e,t){try{const{data:i}=await E.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const s=i[Math.floor(Math.random()*i.length)],c=t.findIndex(a=>a.player);if(c===-1)return;const d=t[c];await E.from("cards").update({player_id:s.id}).eq("id",d.id),t[c]={...d,player_id:s.id,player:s}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Lt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},It={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function wt(e,t,i,s,c){var d;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${s}</button>
    </div>
  </div>`,(d=document.getElementById("msg-btn"))==null||d.addEventListener("click",c)}function Pe(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function gi(e,t){var d,a;const i=e.player,s=e.evolution_bonus||0,c=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?s:0)+(i.job2==="GK"&&c>0?s:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?s:0)+(i.job2==="DEF"&&c>0?s:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?s:0)+(i.job2==="MIL"&&c>0?s:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?s:0)+(i.job2==="ATT"&&c>0?s:0),evolution_bonus:s,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((d=i.clubs)==null?void 0:d.encoded_name)||null,clubLogo:((a=i.clubs)==null?void 0:a.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Ht(e,t){if(!t||!e)return e;const{club_id:i,country_code:s}=t;return Object.values(e).forEach(c=>{Array.isArray(c)&&c.forEach(d=>{const a=i&&String(d.club_id)===String(i),l=s&&String(d.country_code)===String(s);(a||l)&&(d.stadiumBonus=!0)})}),e}function ii(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:s}=t;return e.forEach(c=>{if(!c)return;const d=i&&String(c.club_id)===String(i),a=s&&String(c.country_code)===String(s);(d||a)&&(c.stadiumBonus=!0)}),e}function lt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function oi(){const e=Math.random()*100;return e<10?3:e<30?2:1}function yt(e,t){const i=Lt[t]||Lt["4-4-2"],s={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(a=>a.position)){for(const a of["GK","DEF","MIL","ATT"]){const l=e.filter(o=>o.position&&o.position.replace(/\d+$/,"")===a).sort((o,n)=>parseInt(o.position.replace(/\D+/g,""),10)-parseInt(n.position.replace(/\D+/g,""),10)).map(o=>({...o,_line:a})),p=lt(l.length);l.forEach((o,n)=>{o._col=p[n]}),s[a]=l}return s}const d=[...e];for(const a of["GK","DEF","MIL","ATT"]){const l=[];for(let o=0;o<i[a];o++){let n=d.findIndex(g=>g.job===a);if(n===-1&&(n=d.findIndex(g=>g.job2===a)),n===-1&&(n=0),d[n]){const g={...d[n],_line:a};l.push(g),d.splice(n,1)}}const p=lt(l.length);l.forEach((o,n)=>{o._col=p[n]}),s[a]=l}return s}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function We(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ni(e,t,i){const c=new Set,d=t.filter(n=>{const g=n.gc_type||n.id;return c.has(g)?!1:(c.add(g),!0)});let a=[];function l(n,g){const v=n._gcDef,y={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},z={purple:"#9b59b6",light_blue:"#00bcd4"},r=y[v==null?void 0:v.color]||y.purple,u=z[v==null?void 0:v.color]||z.purple;return`<div class="gc-select-card" data-id="${n.id}"
      style="width:100px;border-radius:10px;border:3px solid ${g?"#FFD700":u};background:${r};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${g?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${g?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((v==null?void 0:v.name)||n.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(v==null?void 0:v.name)||n.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${v!=null&&v.image_url?`<img src="/manager-wars/icons/${v.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((v==null?void 0:v.effect)||"").slice(0,50)}</span>
      </div>
      ${g?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=n=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(n)};function o(){var g,v,y;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const n=a.length>0;e.innerHTML=`
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
        ${d.map(z=>{const r=a.find(u=>u.gc_type===z.gc_type);return l(z,!!r)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${n?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${n?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${n?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${n?"pointer":"default"};box-shadow:${n?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(z=>{z.addEventListener("click",()=>{const r=z.dataset.id,u=d.find(L=>L.id===r);if(!u)return;const M=a.findIndex(L=>L.gc_type===u.gc_type);M>-1?a.splice(M,1):a.length<3&&a.push(u),o()})}),(g=e.querySelector("#gc-launch"))==null||g.addEventListener("click",()=>{n&&p(a)}),(v=e.querySelector("#gc-no-gc"))==null||v.addEventListener("click",()=>p([])),(y=e.querySelector("#gc-reset"))==null||y.addEventListener("click",()=>{a.length&&(a=[],o())})}o()}function Tn(e){var s;const t=((s=e==null?void 0:e.state)==null?void 0:s.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function An(e,t,i){const{state:s,navigate:c}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",s.profile.id).order("created_at",{ascending:!1});if(!d||d.length===0){wt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>c("decks"));return}const a=d.map(v=>v.id),{data:l}=await E.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
          clubs(encoded_name,logo_url)))`).in("deck_id",a).order("slot_order"),p=[...new Set((l||[]).filter(v=>{var y,z;return((y=v.card)==null?void 0:y.card_type)==="stadium"&&((z=v.card)==null?void 0:z.stadium_id)}).map(v=>v.card.stadium_id))],o={};if(p.length){const{data:v}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",p);(v||[]).forEach(y=>{o[y.id]=y}),(l||[]).forEach(y=>{var z,r;((z=y.card)==null?void 0:z.card_type)==="stadium"&&((r=y.card)!=null&&r.stadium_id)&&(y.card._stadiumDef=o[y.card.stadium_id]||null)})}let n=0;function g(){var C,F,j,te,le,de,P;const v=d[n],y=(l||[]).filter(Y=>Y.deck_id===v.id),z=y.filter(Y=>{var H;return Y.is_starter&&((H=Y.card)==null?void 0:H.player)}).map(Y=>gi(Y.card,Y.position)),r=y.find(Y=>{var H;return((H=Y.card)==null?void 0:H.card_type)==="formation"}),u=v.formation||((C=r==null?void 0:r.card)==null?void 0:C.formation)||"4-4-2";let M=z.length>=11?yt(z,u):null,L=((F=v.stadium_card)==null?void 0:F.stadium_def)||null;L&&M&&(M=Ht(M,L));const N=z.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Tn(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${n===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${n===0?"0.1":"0.3"});color:${n===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${n===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${v.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${u} · ${z.length}/11 ${v.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${n===d.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${n===d.length-1?"0.1":"0.3"});color:${n===d.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${n===d.length-1?"default":"pointer"};flex-shrink:0">▶</button>
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
        ${M?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${ft(M,u,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${z.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${d.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${d.map((Y,H)=>`<div style="width:7px;height:7px;border-radius:50%;background:${H===n?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
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
    </div>`,function(){const H=e.querySelector(".deck-preview-wrap svg");H&&(H.removeAttribute("width"),H.removeAttribute("height"),H.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",H.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(te=document.getElementById("prev-deck"))==null||te.addEventListener("click",()=>{n>0&&(n--,g())}),(le=document.getElementById("next-deck"))==null||le.addEventListener("click",()=>{n<d.length-1&&(n++,g())}),(de=document.getElementById("validate-deck"))==null||de.addEventListener("click",()=>{if(!N)return;const Y=t.state.params||{};t.navigate("match",{...Y,matchMode:Y.matchMode||i,deckId:v.id})}),(P=document.getElementById("cancel-deck-select"))==null||P.addEventListener("click",()=>{We(e),c("home")});const V=document.getElementById("deck-swipe-zone");if(V){let Y=0,H=0;V.addEventListener("touchstart",G=>{Y=G.touches[0].clientX,H=G.touches[0].clientY},{passive:!0}),V.addEventListener("touchend",G=>{const ne=G.changedTouches[0].clientX-Y,fe=G.changedTouches[0].clientY-H;Math.abs(ne)<40||Math.abs(ne)<Math.abs(fe)||(ne<0&&n<d.length-1?(n++,g()):ne>0&&n>0&&(n--,g()))},{passive:!0})}}g()}function ho(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Ye(e,t=44,i=58){if(!e)return`<div style="width:${t}px;height:${i}px;border:1.5px dashed rgba(255,255,255,0.2);border-radius:5px"></div>`;const s=typeof e.portrait=="string"&&e.portrait.startsWith("http")?e.portrait:Pe(e),c=ho(e),d=e._line||e.job||"MIL",a=It[d]||"#555",l={normal:"#aaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#222",legende:"#7a28b8",légende:"#7a28b8"}[e==null?void 0:e.rarity]||"#aaa",p=e.note!==void 0?Number(e.note)||0:(Number(Ie(e,d))||0)+(e.boost||0),o=vo(e==null?void 0:e.country_code),n=Math.round(i*.19),g=Math.round(i*.25),v=i-Math.round(i*.19)-Math.round(i*.25),y=e!=null&&e.used?.28:1;return`<div style="width:${t}px;height:${i}px;border-radius:5px;border:2px solid ${l};background:${a};position:relative;overflow:hidden;flex-shrink:0;opacity:${y}">
    <div style="position:absolute;top:0;left:0;right:0;height:${n}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:center;z-index:2">
      <span style="font-size:${Math.max(5,Math.round(t/9))}px;font-weight:900;color:#111;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${t-4}px">${((e==null?void 0:e.name)||"").slice(0,9)}</span>
    </div>
    ${s&&!(e!=null&&e.used)?`<img src="${s}" style="position:absolute;top:${n}px;left:0;width:${t}px;height:${v}px;object-fit:cover;object-position:top center">`:""}
    <div style="position:absolute;bottom:0;left:0;right:0;height:${g}px;background:rgba(255,255,255,0.93);display:flex;align-items:center;justify-content:space-between;padding:0 3px;z-index:2">
      ${Zt(e==null?void 0:e.country_code)?`<img src="${Zt(e.country_code)}" style="width:${g+2}px;height:${g-3}px;object-fit:cover;border-radius:1px">`:`<span style="font-size:${g-4}px">${o}</span>`}
      <span style="font-size:${g-2}px;font-weight:900;color:#111;font-family:Arial Black,Arial">${e!=null&&e.used?"–":p}</span>
      ${c?`<img src="${c}" style="width:${g-4}px;height:${g-4}px;object-fit:contain">`:e!=null&&e.clubName?`<span style="font-size:${Math.max(4,g-8)}px;font-weight:700;color:#333">${(e.clubName||"").slice(0,3).toUpperCase()}</span>`:""}
    </div>
  </div>`}function ot(e,t,i){if(!(e!=null&&e.length))return"";const s=e.slice(0,5);let c='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return s.forEach((d,a)=>{if(c+=Ye(d,40,52),a<s.length-1){const l=at(d,s[a+1]);c+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(c+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),c+="</div>",c}function Zt(e){return!e||e.length<2?null:`https://flagcdn.com/24x18/${e.slice(0,2).toLowerCase()}.png`}function vo(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ut(e,t,i,s,c=310,d=310,a=[]){var N;const l=Pt[t]||{},p=Wi(t)||bi[t]||[],o={},n=["ATT","MIL","DEF","GK"];for(const V of n)(e[V]||[]).forEach((F,j)=>{o[`${V}${j+1}`]=F});function g(V){const C=l[V];return C?{x:C.x*c,y:C.y*d}:null}let v="";for(const[V,C]of p){const F=g(V),j=g(C);if(!F||!j)continue;const te=o[V],le=o[C],de=at(te,le);de==="#00ff88"||de==="#FFD700"?(v+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${de}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,v+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${de}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):v+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${j.x.toFixed(1)}" y2="${j.y.toFixed(1)}"
        stroke="${de}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const y=48,z=64,r=13,u=16,M={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[V,C]of Object.entries(o)){const F=g(V);if(!F||!C)continue;const j=V.replace(/[0-9]/g,""),te=It[j]||"#555",le=a.includes(C.cardId),de=i==="attack"&&(["MIL","ATT"].includes(j)||le)&&!C.used||i==="defense"&&["GK","DEF","MIL"].includes(j)&&!C.used,P=s.includes(C.cardId);let Y;i==="attack"?Y=le?Math.max(1,Number(C.note_a)||0):j==="MIL"?Number(C.note_m)||0:Number(C.note_a)||0:i==="defense"?Y=j==="GK"?Number(C.note_g)||0:j==="MIL"?Number(C.note_m)||0:Number(C.note_d)||0:Y=Number(j==="GK"?C.note_g:j==="DEF"?C.note_d:j==="MIL"?C.note_m:C.note_a)||0,Y=Y+(C.boost||0),C.stadiumBonus&&(i==="attack"&&(j==="ATT"||j==="MIL")||i==="defense"&&(j==="GK"||j==="DEF"||j==="MIL")?Y+=10:i||(Y+=10));const H=(F.x-y/2).toFixed(1),G=(F.y-z/2).toFixed(1),ne=M[C==null?void 0:C.rarity]||M.normal;if(C.used){const Se=typeof import.meta<"u"&&"/manager-wars/"||"/",xe=`${typeof window<"u"&&((N=window.location)==null?void 0:N.origin)||""}${Se}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");v+=`<rect x="${H}" y="${G}" width="${y}" height="${z}" rx="5" fill="#161616"/>`,v+=`<image href="${xe}" xlink:href="${xe}" x="${H}" y="${G}" width="${y}" height="${z}" preserveAspectRatio="xMidYMid slice"/>`,v+=`<rect x="${H}" y="${G}" width="${y}" height="${z}" rx="5" fill="none" stroke="${ne}" stroke-width="2" opacity="0.7"/>`,v+=`<rect x="${H}" y="${G}" width="${y}" height="${z}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${C.cardId}" data-role="${j}" style="cursor:pointer"/>`;continue}const fe=P?.45:1,ye=P?"#FFD700":ne,ze=P?3:(C==null?void 0:C.rarity)==="legende"||(C==null?void 0:C.rarity)==="légende"||(C==null?void 0:C.rarity)==="pepite"||(C==null?void 0:C.rarity)==="pépite"?2.5:2,Ee=z-r-u;v+=`<defs><clipPath id="cp-${V}"><rect x="${H}" y="${(F.y-z/2+r).toFixed(1)}" width="${y}" height="${Ee}"/></clipPath></defs>`,v+=`<rect x="${H}" y="${G}" width="${y}" height="${z}" rx="5" fill="${te}" opacity="${fe}"/>`;const be=Pe(C);be&&(v+=`<image href="${be}" xlink:href="${be}" x="${H}" y="${(F.y-z/2+r).toFixed(1)}" width="${y}" height="${Ee}" clip-path="url(#cp-${V})" preserveAspectRatio="xMidYMin slice"/>`),v+=`<rect x="${H}" y="${G}" width="${y}" height="${r}" rx="4" fill="rgba(255,255,255,0.92)"/>`,v+=`<text x="${F.x.toFixed(1)}" y="${(F.y-z/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(C.name||"").slice(0,9)}</text>`;const $e=(F.y+z/2-u).toFixed(1);v+=`<rect x="${H}" y="${$e}" width="${y}" height="${u}" fill="rgba(255,255,255,0.92)"/>`;{const Se=Zt(C.country_code);Se?v+=`<image href="${Se}" xlink:href="${Se}" x="${(F.x-20).toFixed(1)}" y="${(F.y+z/2-u+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:v+=`<text x="${(F.x-13).toFixed(1)}" y="${(F.y+z/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${vo(C.country_code)}</text>`;const Le=C.stadiumBonus?"#E87722":"#111";v+=`<text x="${F.x.toFixed(1)}" y="${(F.y+z/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${Le}" font-family="Arial Black">${Y}</text>`;const xe=ho(C);xe?v+=`<image href="${xe}" xlink:href="${xe}" x="${(F.x+y/2-14).toFixed(1)}" y="${(F.y+z/2-u+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:C.clubName&&(v+=`<text x="${(F.x+14).toFixed(1)}" y="${(F.y+z/2-u/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(C.clubName||"").slice(0,3).toUpperCase()}</text>`),C.stadiumBonus&&(v+=`<rect x="${(F.x-y/2).toFixed(1)}" y="${(F.y-z/2).toFixed(1)}" width="${y}" height="${z}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}v+=`<rect x="${H}" y="${G}" width="${y}" height="${z}" rx="5" fill="${P?"rgba(255,255,255,0.12)":"none"}" stroke="${ye}" stroke-width="${ze}" opacity="${fe}"/>`,de&&(v+=`<rect x="${H}" y="${G}" width="${y}" height="${z}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${P?"selected":""}" data-card-id="${C.cardId}" data-role="${j}" style="cursor:pointer"/>`)}const L=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-L} ${-L} ${c+L*2} ${d+L*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
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
  </div>`}async function ri(e,t,i,s){var F;const{state:c,navigate:d,toast:a}=t;et(e);const l=c.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return An(e,t,i);const p=l.deckId;let o,n,g,v;try{const j=await Promise.all([E.from("decks").select("formation,name,stadium_card_id").eq("id",p).single(),E.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);o=j[0].data,g=j[0].error,n=j[1].data,v=j[1].error}catch(j){console.error("[Match] Exception chargement deck:",j),wt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>d("home"));return}if(g||v){console.error("[Match] Erreur Supabase:",g||v),wt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>d("home"));return}const y=(n||[]).filter(j=>{var te;return j.is_starter&&((te=j.card)==null?void 0:te.player)}).map(j=>gi(j.card,j.position)),z=(n||[]).filter(j=>{var te;return!j.is_starter&&((te=j.card)==null?void 0:te.player)}).map(j=>gi(j.card,j.position));if(y.length<11){wt(e,"⚠️",`Deck incomplet (${y.length}/11).`,"Compléter",()=>d("decks"));return}const r=(n||[]).find(j=>{var te;return((te=j.card)==null?void 0:te.card_type)==="formation"}),u=(o==null?void 0:o.formation)||((F=r==null?void 0:r.card)==null?void 0:F.formation)||"4-4-2",{data:M,error:L}=await E.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",c.profile.id).eq("card_type","game_changer"),{data:N}=await E.from("gc_definitions").select("*").eq("is_active",!0),V=(M||[]).map(j=>({...j,_gcDef:(N==null?void 0:N.find(te=>te.name===j.gc_type||te.id===j.gc_definition_id))||null}));let C=null;if(o!=null&&o.stadium_card_id){const{data:j}=await E.from("cards").select("stadium_id").eq("id",o.stadium_card_id).single();if(j!=null&&j.stadium_id){const{data:te}=await E.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",j.stadium_id).single();C=te||null}}s({deckId:p,formation:u,starters:y,subsRaw:z,gcCardsEnriched:V,gcDefs:N||[],stadiumDef:C})}async function zn(e,t){const{state:i}=t,c=(i.params||{}).matchMode||"vs_ai_easy",d=c.replace("vs_ai_",""),a=c;await ri(e,t,c,async({deckId:l,formation:p,starters:o,subsRaw:n,gcCardsEnriched:g,gcDefs:v,stadiumDef:y})=>{try{let z=yt(o,p);y&&(z=Ht(z,y),ii(n,y));const r=await Sn(p,d),u=async M=>{try{const{data:L,error:N}=await E.from("matches").insert({home_id:i.profile.id,away_id:null,mode:a,home_deck_id:l,status:"in_progress"}).select().single();if(N){console.error("[MatchIA] Erreur création match:",N),wt(e,"⚠️","Impossible de créer le match ("+N.message+").","Retour",()=>t.navigate("home"));return}const V={gcDefs:v||[],matchId:L==null?void 0:L.id,mode:a,difficulty:d,formation:p,homeTeam:z,aiTeam:r,homeSubs:n,subsUsed:0,maxSubs:Math.min(n.length,3),homeScore:0,aiScore:0,gcCards:M,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};In(e,V,t)}catch(L){console.error("[MatchIA] Exception launchMatch:",L),wt(e,"⚠️","Erreur au lancement du match : "+L.message,"Retour",()=>t.navigate("home"))}};if(!g.length){u([]);return}ni(e,g,u)}catch(z){console.error("[MatchIA] Exception setup:",z),wt(e,"⚠️","Erreur de préparation du match : "+z.message,"Retour",()=>t.navigate("home"))}})}async function Sn(e,t){var a,l;const{data:i}=await E.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(60);if(!i||i.length<11)return Ln(e);const s=Lt[e]||Lt["4-4-2"],c={GK:[],DEF:[],MIL:[],ATT:[]},d=[...i];for(const p of["GK","DEF","MIL","ATT"]){const o=d.filter(z=>z.job===p),n=d.filter(z=>z.job!==p),g=[...o,...n],v=[];for(let z=0;z<s[p];z++){const r=g[z]||d[z];r&&v.push({cardId:"ai-"+r.id+"-"+z,id:r.id,firstname:r.firstname,name:r.surname_encoded,country_code:r.country_code,club_id:r.club_id,job:r.job,job2:r.job2,note_g:Number(r.note_g)||0,note_d:Number(r.note_d)||0,note_m:Number(r.note_m)||0,note_a:Number(r.note_a)||0,rarity:r.rarity,skin:r.skin,hair:r.hair,hair_length:r.hair_length,clubName:((a=r.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((l=r.clubs)==null?void 0:l.logo_url)||null,boost:0,used:!1,_line:p})}const y=lt(v.length);v.forEach((z,r)=>{z._col=y[r]}),c[p]=v}return c}function Ln(e){const t=Lt[e]||Lt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},s=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let c=0;for(const d of["GK","DEF","MIL","ATT"]){const a=[];for(let p=0;p<t[d];p++){const o=3+Math.floor(Math.random()*5);a.push({cardId:"fake-"+c,id:"fake-"+c,firstname:"IA",name:s[c%s.length],country_code:"XX",club_id:null,job:d,job2:null,note_g:d==="GK"?o:2,note_d:d==="DEF"?o:2,note_m:d==="MIL"?o:2,note_a:d==="ATT"?o:2,rarity:"normal",boost:0,used:!1,_line:d}),c++}const l=lt(a.length);a.forEach((p,o)=>{p._col=l[o]}),i[d]=a}return i}function In(e,t,i){e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    <div style="width:min(90vw,420px)">${ut(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Mn(e,t,i),5e3)}function Mn(e,t,i){const s=t.homeTeam.MIL||[],c=t.aiTeam.MIL||[];function d(r){return r.reduce((u,M)=>u+Ie(M,"MIL"),0)}function a(r){let u=0;for(let M=0;M<r.length-1;M++){const L=at(r[M],r[M+1]);L==="#00ff88"?u+=2:L==="#FFD700"&&(u+=1)}return u}const l=d(s)+a(s),p=d(c)+a(c),o=l>=p;function n(r,u,M,L){return`<div id="duel-row-${L}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${u}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${r.map((N,V)=>{const C=V<r.length-1?at(N,r[V+1]):null,F=!C||C==="#ff3333"||C==="#cc2222",j=C==="#00ff88"?"+2":C==="#FFD700"?"+1":"";return`
          <div class="duel-card duel-card-${L}" data-idx="${V}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ye({...N,note:Ie(N,"MIL"),_line:"MIL"},58,78)}
          </div>
          ${V<r.length-1?`<div class="duel-link duel-link-${L}" data-idx="${V}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${F?"rgba(255,255,255,0.12)":C};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${F?"none":`0 0 8px ${C}`}">
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

    ${n(s,t.clubName,"#D4A017","home")}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${n(c,"IA","#bb2020","ai")}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const g=()=>{const r=(u,M)=>e.querySelectorAll(u).forEach((L,N)=>{setTimeout(()=>{L.style.opacity="1",L.style.transform="translateY(0) scale(1)"},M+N*90)});r(".duel-card-home",150),r(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((u,M)=>{setTimeout(()=>{u.style.opacity="1"},M*70)}),900),setTimeout(()=>{const u=e.querySelector("#vs-label");u&&(u.style.opacity="1",u.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(M=>M.style.opacity="1")},1250),setTimeout(()=>{v("score-home",l,800),v("score-ai",p,800)},1500)};function v(r,u,M){const L=document.getElementById(r);if(!L)return;const N=performance.now(),V=C=>{const F=Math.min(1,(C-N)/M);L.textContent=Math.round(u*(1-Math.pow(1-F,3))),F<1?requestAnimationFrame(V):L.textContent=u};requestAnimationFrame(V)}requestAnimationFrame(g),t.attacker=o?"home":"ai";const y=o?oi():null;o&&(t.boostCard={value:y}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:s.map(r=>({name:r.name,note:Ie(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),aiPlayers:c.map(r=>({name:r.name,note:Ie(r,"MIL"),portrait:Pe(r),job:r.job,country_code:r.country_code,rarity:r.rarity,clubName:r.clubName,clubLogo:r.clubLogo})),homeTotal:l,aiTotal:p,text:`Duel milieu : ${t.clubName} ${l} – ${p} IA → ${o?t.clubName+" attaque":"IA attaque"}`});const z=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Xe(e,t,i),t.attacker==="ai"&&setTimeout(()=>mi(e,t,i),800)};setTimeout(()=>{const r=document.getElementById("score-home"),u=document.getElementById("score-ai"),M=document.getElementById(o?"duel-row-home":"duel-row-ai"),L=document.getElementById(o?"duel-row-ai":"duel-row-home"),N=o?r:u,V=o?u:r;N&&(N.style.fontSize="80px",N.style.color=o?"#FFD700":"#ff6b6b",N.style.animation="duelPulse .5s ease"+(o?", duelGlow 1.5s ease infinite .5s":"")),V&&(V.style.opacity="0.25"),setTimeout(()=>{M&&(M.style.transformOrigin="center",M.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",M.style.zIndex="5"),setTimeout(()=>{var F;const C=document.getElementById("duel-shock");if(C){const j=(F=L||M)==null?void 0:F.getBoundingClientRect(),te=e.querySelector(".match-screen").getBoundingClientRect();j&&(C.style.top=j.top-te.top+j.height/2+"px"),C.style.animation="shockwave .5s ease-out forwards"}L&&(L.style.transformOrigin="center",L.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var F;const C=document.getElementById("duel-finale");C&&(C.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${o?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${o?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${y}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,C.style.transition="opacity .45s ease",C.style.opacity="1",C.style.pointerEvents="auto",(F=document.getElementById("start-match-btn"))==null||F.addEventListener("click",z))},600)},700)},2800)}function Cn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Xe(e,t,i){var N,V,C,F,j,te,le,de;const s=t.selected.map(P=>P.cardId),c=t.usedSubIds||[],d=t.homeSubs.filter(P=>!c.includes(P.cardId)),l=Object.values(t.homeTeam).flat().filter(P=>P.used).length>0&&d.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(P=>(t.aiTeam[P]||[]).some(Y=>!Y.used)),o=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(P=>!P.used),n=t.phase==="attack"&&p&&o.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];t.log[t.log.length-1];const g=t.phase==="ai-attack"||t.phase==="ai-defense",v=t.phase==="attack",y=t.phase==="defense",z=t.phase==="finished",r=t.gcCards.filter(P=>!t.usedGc.includes(P.id)),u=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${ot((Y.players||[]).map(H=>({...H,used:!1})),"#ff6b6b",Y.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const Y=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ot((Y.players||[]).map(H=>({...H,used:!1})),"#00ff88",Y.total)}
          </div>`}const P=t.log[t.log.length-1];return P?'<div style="padding:2px 4px">'+Cn(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const P=window.innerWidth>=700,Y=($e,Se,Le)=>{var Ce,De;const xe=(t.gcDefs||[]).find(I=>I.name===$e.gc_type),W={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[xe==null?void 0:xe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",oe={purple:"#b06ce0",light_blue:"#00d4ef"}[xe==null?void 0:xe.color]||"#b06ce0",K=(xe==null?void 0:xe.name)||$e.gc_type,J=(xe==null?void 0:xe.effect)||((Ce=Ke[$e.gc_type])==null?void 0:Ce.desc)||"",re=xe!=null&&xe.image_url?`/manager-wars/icons/${xe.image_url}`:null,ie=((De=Ke[$e.gc_type])==null?void 0:De.icon)||"⚡",ae=Math.round(Le*.22),Te=Math.round(Le*.22),we=Le-ae-Te,Ae=K.length>12?7:9;return`<div class="gc-mini" data-gc-id="${$e.id}" data-gc-type="${$e.gc_type}"
          style="box-sizing:border-box;width:${Se}px;height:${Le}px;border-radius:10px;border:2px solid ${oe};background:${W};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${ae}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Ae}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Se-6}px">${K}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${we}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${re?`<img src="${re}" style="max-width:${Se-10}px;max-height:${we-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(we*.55)}px">${ie}</span>`}
          </div>
          <div style="height:${Te}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${J.slice(0,38)}</span>
          </div>
        </div>`},H=($e,Se)=>{var Le;return`<div id="boost-card"
          style="box-sizing:border-box;width:${$e}px;height:${Se}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Se*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Se*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Se*.09)}px;color:#000;font-weight:900">+${(Le=t.boostCard)==null?void 0:Le.value}</div>
          </div>`},G=($e,Se)=>Se?H(130,175):Y($e,130,175),ne=($e,Se)=>Se?H(68,95):Y($e,68,95),fe=P?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ye=z?`<button id="btn-results" style="${fe};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:g?`<div style="${fe};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:v?`<button id="btn-action" style="${fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:y?`<button id="btn-action" style="${fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${fe};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,ze=v||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Ee=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${P?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${d.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':d.map($e=>`<div class="sub-btn-col" data-sub-id="${$e.cardId}" style="cursor:pointer;flex-shrink:0">${Ye($e,76,100)}</div>`).join("")}
      </div>`,be=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ft(t.homeTeam,t.formation,t.phase,s,300,300,n)}
        </div>
      </div>`;return P?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ee}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${be}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ye}${ze}
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
              ${ft(t.homeTeam,t.formation,t.phase,s,300,300,n)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${r.map($e=>ne($e,!1)).join("")}
            ${u?ne(null,!0):""}
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
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(P=>{var Y,H,G;if(P.type==="duel"){const ne=P.isGoal,fe=P.homeScored?"#FFD700":ne?"#ff6b6b":"rgba(255,255,255,0.3)",ye=P.homeScored?"⚽ BUT !":ne?"⚽ BUT IA !":(Y=P.homePlayers)!=null&&Y.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${ne?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${fe};margin-bottom:4px">
                <div style="font-size:9px;color:${fe};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ye}</div>
                ${(H=P.homePlayers)!=null&&H.length?`<div style="margin-bottom:3px">${ot(P.homePlayers,"rgba(255,255,255,0.7)",P.homeTotal)}</div>`:""}
                ${(G=P.aiPlayers)!=null&&G.length?`<div style="opacity:0.7">${ot(P.aiPlayers,"#ff6b6b",P.aiTotal)}</div>`:""}
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
  </div>`;function M(){const P=e.querySelector(".match-screen");if(!P)return;const Y=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.bottom="auto",P.style.height=Y+"px",P.style.minHeight=Y+"px",P.style.maxHeight=Y+"px",P.style.overflow="hidden";const H=e.querySelector("#mobile-action-bar"),G=e.querySelector("#mobile-play-area");H&&G&&(G.style.paddingBottom=H.offsetHeight+"px")}if(M(),setTimeout(M,120),setTimeout(M,400),setTimeout(M,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",M),window.visualViewport.addEventListener("scroll",M)),window.addEventListener("resize",M)),function(){const Y=e.querySelector(".terrain-wrapper svg");Y&&(Y.removeAttribute("width"),Y.removeAttribute("height"),Y.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Y.setAttribute("viewBox","-26 -26 352 352"),Y.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const P=e.querySelector(".terrain-wrapper svg");P&&(P.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let P=!1,Y=30;const H=()=>document.getElementById("match-timer"),G=()=>{const ne=H();if(!ne)return;const fe=String(Math.floor(Y/60)).padStart(2,"0"),ye=String(Y%60).padStart(2,"0");ne.textContent=` ${fe}:${ye}`,ne.style.color=P?"#ff2222":"#ff9500",ne.style.fontWeight="900"};G(),t._timerInt=setInterval(()=>{if(Y--,Y<0)if(!P)P=!0,Y=15,G();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const ne=document.createElement("div");ne.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ne.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ne),setTimeout(()=>{ne.remove(),qt(e,t,i)},2500)}else G()},1e3)}(N=document.getElementById("match-quit"))==null||N.addEventListener("click",()=>{We(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,qt(e,t,i))}),(V=document.getElementById("view-ai"))==null||V.addEventListener("click",()=>On(t,i)),(C=document.getElementById("toggle-history"))==null||C.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.add("open")}),(F=document.getElementById("close-history"))==null||F.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.remove("open")}),(j=document.getElementById("btn-action"))==null||j.addEventListener("click",()=>{t.selected.length!==0&&(v?qn(e,t,i):y&&Bn(e,t,i))}),(te=document.getElementById("btn-results"))==null||te.addEventListener("click",()=>qt(e,t,i)),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>jn(P,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(P=>{P.addEventListener("click",()=>di(e,t,i,null,P.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(P=>{P.addEventListener("click",()=>Gn(P.dataset.gcId,P.dataset.gcType,e,t,i))}),(le=document.getElementById("boost-card"))==null||le.addEventListener("click",()=>Rn(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(P=>{P.addEventListener("click",()=>di(e,t,i,P.dataset.subId))}),(de=document.getElementById("sub-btn-main"))==null||de.addEventListener("click",()=>di(e,t,i))}function jn(e,t,i,s){const c=e.dataset.cardId,d=e.dataset.role,a=t.selected.findIndex(l=>l.cardId===c);if(a!==-1)t.selected.splice(a,1);else{if(t.selected.length>=3){s.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[d]||[]).find(p=>p.cardId===c);l&&t.selected.push({...l,_role:d,_line:d})}Xe(i,t,s)}function Ai(e,t,i){e.matchId&&E.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function qn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ai(t,i,i.state.profile.id);const s=!["GK","DEF","MIL","ATT"].some(a=>(t.aiTeam[a]||[]).some(l=>!l.used)),c=t.selected.map(a=>{const l=(t.homeTeam[a._role]||[]).find(o=>o.cardId===a.cardId)||a,p=s&&["GK","DEF"].includes(a._role);return{...l,_line:a._role,...p?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),d=Nt(c,t.modifiers.home);t.pendingAttack={...d,players:[...c],side:"home"},t.selected.forEach(a=>{const l=(t.homeTeam[a._role]||[]).find(p=>p.cardId===a.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${d.total} (base ${d.base}${d.links?` +${d.links} liens`:""}) — ${t.selected.map(a=>a.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Xe(e,t,i),setTimeout(()=>Fn(e,t,i),1200)}function Bn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ai(t,i,i.state.profile.id);const s=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l,_line:l._role})),c=Rt(s,t.modifiers.home);t.selected.forEach(l=>{const p=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId);p&&(p.used=!0)});const d=Ot(t.pendingAttack.total,c.total,t.modifiers.home),a={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Pe(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const p=(t.homeTeam[l._role]||[]).find(o=>o.cardId===l.cardId)||l;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:Pe(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:c.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(d.shielded)a.text="🛡️ Bouclier ! But annulé.",t.log.push(a);else if(d.goal){t.aiScore++,a.isGoal=!0,a.homeScored=!1,a.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${c.total})`,t.log.push(a),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Xe(e,t,i),Qt(a.aiPlayers,t.homeScore,t.aiScore,!1,()=>{At(e,t,i,"home-attack")});return}else a.text=`🧤 Défense réussie ! (${c.total} ≥ ${t.pendingAttack.total})`,t.log.push(a);t.selected=[],t.modifiers.home={},t.pendingAttack=null,At(e,t,i,"home-attack")}function mi(e,t,i){Ai(t,i,null);const s=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],c=io(s,"attack",t.difficulty);if(!c.length){Jt(e,t,i);return}const d=Nt(c,t.modifiers.ai);t.pendingAttack={...d,players:c,side:"ai"},c.forEach(o=>{o.used=!0}),t.log.push({text:`🤖 IA attaque : ${d.total} (${c.map(o=>o.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const a=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(o=>!o.used),p=(t.homeSubs||[]).filter(o=>!(t.usedSubIds||[]).includes(o.cardId)).length>0&&t.subsUsed<t.maxSubs;if(a.length===0&&!p){t.aiScore++;const o={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:c.map(n=>({name:n.name,note:n._line==="MIL"?n.note_m:n.note_a,portrait:Pe(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiTotal:d.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(o),t.pendingAttack=null,Xe(e,t,i),Qt(o.aiPlayers,t.homeScore,t.aiScore,!1,()=>{At(e,t,i,"home-attack")});return}t.phase="defense",Xe(e,t,i)}function Fn(e,t,i){var o,n;const s=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],c=io(s,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(g=>(t.aiTeam[g]||[]).filter(v=>!v.used)).length){t.homeScore++;const v={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((o=t.pendingAttack)==null?void 0:o.players)||[]).map(y=>({name:y.name,note:Ie(y,y._line||y.job),portrait:Pe(y),job:y.job,country_code:y.country_code,rarity:y.rarity,clubName:y.clubName,clubLogo:y.clubLogo})),homeTotal:((n=t.pendingAttack)==null?void 0:n.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(v),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),Qt(v.homePlayers,t.homeScore,t.aiScore,!0,()=>{At(e,t,i,"ai-attack")});return}const a=c.length>0?Rt(c,t.modifiers.ai).total:0;c.forEach(g=>{g.used=!0});const l=Ot(t.pendingAttack.total,a,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(g=>({name:g.name,note:g._line==="MIL"?g.note_m:g.note_a,portrait:Pe(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:c.map(g=>({name:g.name,note:g._line==="GK"?g.note_g:g._line==="MIL"?g.note_m:g.note_d,portrait:Pe(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:a,isGoal:!1,homeScored:!1,text:""};if(l.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(l.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${a})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,Xe(e,t,i),Qt(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{At(e,t,i,"ai-attack")});return}else p.text=`🧤 IA défend (${a} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,At(e,t,i,"ai-attack")}function At(e,t,i,s){if(t.round++,wo(t)){qt(e,t,i);return}if(s==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(d=>!d.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Jt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Jt(e,t,i);return}setTimeout(()=>mi(e,t,i),100);return}t.phase="attack",Xe(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used).length){Jt(e,t,i);return}t.phase="ai-attack",Xe(e,t,i),setTimeout(()=>mi(e,t,i),800)}}function wo(e){const t=["MIL","ATT","GK","DEF"].some(s=>(e.homeTeam[s]||[]).some(c=>!c.used)),i=["MIL","ATT","GK","DEF"].some(s=>(e.aiTeam[s]||[]).some(c=>!c.used));return!t&&!i}function Jt(e,t,i){wo(t)?qt(e,t,i):(t.phase="attack",Xe(e,t,i))}function Dn(e,t,i){const s=document.createElement("div");s.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const c=Pe(e),d=Pe(t),a=It[e.job]||"#555",l=It[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,o=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;s.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${o}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(s);let n=!1;const g=()=>{n||(n=!0,s.remove(),i())};s.addEventListener("click",g),setTimeout(g,2e3)}function Mt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function di(e,t,i,s=null,c=null){var y,z;if(t.phase!=="attack"){Mt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Mt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const d=Object.entries(t.homeTeam).flatMap(([r,u])=>(u||[]).filter(M=>M.used).map(M=>({...M,_line:M._line||r}))),a=t.homeSubs.filter(r=>!t.usedSubIds.includes(r.cardId));if(!d.length){Mt("Aucun joueur utilisé à remplacer");return}if(!a.length){Mt("Aucun remplaçant disponible");return}let l=Math.max(0,d.findIndex(r=>r.cardId===c));const p=((y=d[l])==null?void 0:y._line)||((z=d[l])==null?void 0:z.job);let o=s?Math.max(0,a.findIndex(r=>r.cardId===s)):Math.max(0,a.findIndex(r=>r.job===p)),n=!1;const g=document.createElement("div");g.id="sub-overlay",g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function v(){var C,F,j,te,le,de;const r=d[l],u=a[o],M=Math.min(130,Math.round((window.innerWidth-90)/2)),L=Math.round(M*1.35),N=P=>`background:rgba(255,255,255,0.12);border:none;color:${P?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${P?"default":"pointer"};flex-shrink:0`;g.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${N(o===0)}" ${o===0?"disabled":""}>▲</button>
        <div>${u?Ye({...u,used:!1,boost:0},M,L):"<div>—</div>"}</div>
        <button id="in-down" style="${N(o>=a.length-1)}" ${o>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${o+1}/${a.length}</div>
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
    </div>`,(C=g.querySelector("#sub-close"))==null||C.addEventListener("click",()=>g.remove()),(F=g.querySelector("#out-up"))==null||F.addEventListener("click",()=>{l>0&&(l--,v())}),(j=g.querySelector("#out-down"))==null||j.addEventListener("click",()=>{l<d.length-1&&(l++,v())}),(te=g.querySelector("#in-up"))==null||te.addEventListener("click",()=>{o>0&&(o--,v())}),(le=g.querySelector("#in-down"))==null||le.addEventListener("click",()=>{o<a.length-1&&(o++,v())});const V=(P,Y,H,G)=>{const ne=g.querySelector("#"+P);if(!ne)return;let fe=0;ne.addEventListener("touchstart",ye=>{fe=ye.touches[0].clientY},{passive:!0}),ne.addEventListener("touchend",ye=>{const ze=ye.changedTouches[0].clientY-fe;if(Math.abs(ze)<30)return;const Ee=Y();ze<0&&Ee<G-1?(H(Ee+1),v()):ze>0&&Ee>0&&(H(Ee-1),v())},{passive:!0})};V("in-panel",()=>o,P=>o=P,a.length),V("out-panel",()=>l,P=>l=P,d.length),(de=g.querySelector("#sub-confirm"))==null||de.addEventListener("click",P=>{if(P.preventDefault(),P.stopPropagation(),n)return;n=!0;const Y=d[l],H=a[o];if(!Y||!H)return;let G=null,ne=-1;for(const[ye,ze]of Object.entries(t.homeTeam)){const Ee=(ze||[]).findIndex(be=>be.cardId===Y.cardId);if(Ee!==-1){G=ye,ne=Ee;break}}if(ne===-1||!G){Mt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),g.remove();return}const fe={...H,_line:G,_col:Y._col||0,used:!1,boost:0};t.homeTeam[G].splice(ne,1,fe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(H.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Y.name,firstname:Y.firstname,note:Ie(Y,G),portrait:Pe(Y),job:Y.job,country_code:Y.country_code,rarity:Y.rarity,clubName:Y.clubName,clubLogo:Y.clubLogo},inPlayer:{name:H.name,firstname:H.firstname,note:Ie(H,G),portrait:Pe(H),job:H.job,country_code:H.country_code,rarity:H.rarity,clubName:H.clubName,clubLogo:H.clubLogo},text:`🔄 ${H.firstname} ${H.name} remplace ${Y.firstname} ${Y.name}`}),g.remove(),Dn(Y,H,()=>Xe(e,t,i))})}document.body.appendChild(g),v()}function Gn(e,t,i,s,c){var z,r;const d=(s.gcDefs||[]).find(u=>u.name===t),a=Ke[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[d==null?void 0:d.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[d==null?void 0:d.color]||"#b06ce0",o=(d==null?void 0:d.name)||t,n=(d==null?void 0:d.effect)||a.desc,g=d!=null&&d.image_url?`/manager-wars/icons/${d.image_url}`:null,v=a.icon||"⚡",y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",y.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${o.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${o}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${g?`<img src="${g}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${v}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${n}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(y),(z=y.querySelector("#gc-back"))==null||z.addEventListener("click",()=>y.remove()),(r=y.querySelector("#gc-use"))==null||r.addEventListener("click",()=>{y.remove(),Nn(e,t,i,s,c)})}function Yt(e,t,i,s,c,d){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function p(){var o,n;a.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(g=>{const v=g._line||g.job||"MIL",y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v]||"#555",z=Ie(g,v)+(g.boost||0),r=l.find(u=>u.cardId===g.cardId);return`<div class="gc-pick-item" data-cid="${g.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${r?"#FFD700":"rgba(255,255,255,0.25)"};background:${y};overflow:hidden;cursor:pointer;flex-shrink:0;${g.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${g.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${v}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(o=a.querySelector("#gc-picker-close"))==null||o.addEventListener("click",()=>a.remove()),a.querySelectorAll(".gc-pick-item").forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.cid,y=e.find(r=>r.cardId===v);if(!y)return;const z=l.findIndex(r=>r.cardId===v);z>-1?l.splice(z,1):l.length<t&&l.push(y),p()})}),(n=a.querySelector("#gc-picker-confirm"))==null||n.addEventListener("click",()=>{a.remove(),d(l)})}p(),document.body.appendChild(a)}const Pn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},s,c,d)=>{const a=Object.entries(s.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,p])=>p.filter(o=>!o.used).map(o=>({...o,_line:l})));return a.length?(Yt(a,t,`Choisir ${t} joueur(s) à booster (+${e})`,c,s,l=>{l.forEach(p=>{const o=(s.homeTeam[p._line]||[]).find(n=>n.cardId===p.cardId);o&&(o.boost=(o.boost||0)+e,s.log.push({text:`⚡ +${e} sur ${o.name}`,type:"info"}))}),Xe(c,s,d)}),!0):(s.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Xe(c,s,d),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:s="ai"},c,d,a)=>{const l=s==="home"?c.homeTeam:c.aiTeam,p=s==="ai"?"adverse":"allié",o=Object.entries(l).filter(([n])=>!i.length||i.includes(n)).flatMap(([n,g])=>g.filter(v=>!v.used).map(v=>({...v,_line:n})));return o.length?(Yt(o,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,d,c,n=>{n.forEach(g=>{const y=((s==="home"?c.homeTeam:c.aiTeam)[g._line]||[]).find(z=>z.cardId===g.cardId);y&&(y.boost=(y.boost||0)-e,c.log.push({text:`🎯 -${e} sur ${y.name}${s==="ai"?" (IA)":""}`,type:"info"}))}),Xe(d,c,a)}),!0):(c.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),Xe(d,c,a),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},s,c,d)=>{const a=i==="home"?s.homeTeam:s.aiTeam,l=i==="ai"?"adverse":"allié",p=Object.entries(a).filter(([o])=>!t.length||t.includes(o)).flatMap(([o,n])=>n.filter(g=>!g.used).map(g=>({...g,_line:o})));return p.length?(Yt(p,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,c,s,o=>{o.forEach(n=>{const v=((i==="home"?s.homeTeam:s.aiTeam)[n._line]||[]).find(y=>y.cardId===n.cardId);v&&(v.used=!0,s.log.push({text:`❌ ${v.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Xe(c,s,d)}),!0):(s.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Xe(c,s,d),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,s,c)=>{const d=Object.entries(i.homeTeam).filter(([a])=>!t.length||t.includes(a)).flatMap(([a,l])=>l.filter(p=>p.used).map(p=>({...p,_line:a})));return d.length?(Yt(d,e,`Choisir ${e} joueur(s) à ressusciter`,s,i,a=>{a.forEach(l=>{const p=(i.homeTeam[l._line]||[]).find(o=>o.cardId===l.cardId);p&&(p.used=!1,i.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),Xe(s,i,c)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Xe(s,i,c),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Nn(e,t,i,s,c){s.usedGc.push(e);const d=s.gcDefs||[],a=d.find(p=>p.name===t)||d.find(p=>{var o;return((o=p.name)==null?void 0:o.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(a!=null&&a.effect_type&&a.effect_type!=="CUSTOM"){const p=Pn[a.effect_type];p?p(a.effect_params||{},s,i,c)||(l=!0):(c.toast(`Effet "${a.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":s.modifiers.home.doubleAttack=!0,s.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":s.modifiers.home.shield=!0,s.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(s.homeTeam).flatMap(([o,n])=>(n||[]).filter(g=>g.used).map(g=>({...g,_line:o})));p.length?(p[0].used=!1,s.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):s.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":s.modifiers.ai.stolenNote=(s.modifiers.ai.stolenNote||0)+1,s.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...s.aiTeam.ATT||[],...s.aiTeam.MIL||[]].filter(o=>!o.used);if(p.length){const o=p.sort((n,g)=>Ie(g,"ATT")-Ie(n,"ATT"))[0];o.used=!0,s.log.push({text:`❄️ ${o.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":s.maxSubs++,s.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}E.from("cards").delete().eq("id",e).then(()=>{}),l&&Xe(i,s,c)}function Rn(e,t,i){const s=Object.values(t.homeTeam).flat().filter(c=>!c.used);if(!s.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${s.map(c=>`
        <div class="player-boost-opt" data-card-id="${c.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${It[c.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Ie(c,c._line||c.job)}</div>
          <div style="flex:1"><b>${c.firstname} ${c.name}</b><div style="font-size:11px;color:#888">${c._line||c.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.cardId;for(const a of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[a]||[]).find(p=>p.cardId===d);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Xe(e,t,i)})})}function Qt(e,t,i,s,c){const d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const a=Array.from({length:10},(o,n)=>`
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
    ${e.map(o=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${It[o.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${o.portrait?`<img src="${o.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(o.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(d);let l=!1;const p=()=>{l||(l=!0,d.remove(),setTimeout(()=>c(),50))};d.addEventListener("click",p),setTimeout(p,3500)}async function qt(e,t,i){var n,g;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:s}=i,c=t.homeScore>t.aiScore,d=t.homeScore===t.aiScore,a=c?"victoire":d?"nul":"defaite",l=Ko(t.mode,a);t.matchId&&await E.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:c?s.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(s.profile.credits||0)+l,matches_played:(s.profile.matches_played||0)+1};c?p.wins=(s.profile.wins||0)+1:d?p.draws=(s.profile.draws||0)+1:p.losses=(s.profile.losses||0)+1,await E.from("users").update(p).eq("id",s.profile.id),await i.refreshProfile();const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",o.innerHTML=`
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
    </div>`,document.body.appendChild(o),(n=document.getElementById("res-home"))==null||n.addEventListener("click",()=>{o.remove(),We(e),i.navigate("home")}),(g=document.getElementById("res-replay"))==null||g.addEventListener("click",()=>{o.remove(),We(e),i.navigate("match",{matchMode:t.mode})})}function On(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ut(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function _o(e,t){var i,s;try{const c=(s=(i=t==null?void 0:t.state)==null?void 0:i.profile)==null?void 0:s.id;try{(E.getChannels?E.getChannels():[]).forEach(a=>{const l=a.topic||"";(l.includes("matchmaking")||l.includes("pvp-match")||l.includes("friend-invite"))&&E.removeChannel(a)})}catch(d){console.warn("[Random] cleanup canaux:",d)}c&&await E.rpc("cancel_matchmaking",{p_user_id:c}).catch(()=>{})}catch{}await ri(e,t,"random",({deckId:c,formation:d,starters:a,subsRaw:l,gcCardsEnriched:p,gcDefs:o,stadiumDef:n})=>{const g=v=>Hn(e,t,c,d,a,l,v,o||[],n);if(!p.length){g([]);return}ni(e,p,g)})}async function Hn(e,t,i,s,c,d,a=[],l=[],p=null){var N;const{state:o,navigate:n,toast:g}=t;let v=!1,y=null;et(e),e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center">
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:#FFD700;border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">Recherche d'un adversaire...</div>
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const z=async(V=!0)=>{v=!0,y&&(E.removeChannel(y),y=null),V&&await E.rpc("cancel_matchmaking",{p_user_id:o.profile.id}).catch(()=>{})};(N=document.getElementById("mm-cancel"))==null||N.addEventListener("click",async()=>{try{await z(!0)}catch{}We(e),n("home")});const r=async(V,C,F)=>{if(v)return;v=!0,y&&(E.removeChannel(y),y=null);const j=document.getElementById("mm-status");j&&(j.textContent="Adversaire trouvé !"),await new Promise(te=>setTimeout(te,600)),e.isConnected&&$o(e,t,V,F,a,l)},{data:u,error:M}=await E.rpc("try_matchmake",{p_user_id:o.profile.id,p_deck_id:i});if(M||!(u!=null&&u.success)){g("Erreur de matchmaking","error"),We(e),n("home");return}if(u.matched){r(u.match_id,u.opponent_id,!1);return}const L=document.getElementById("mm-status");L&&(L.textContent="En attente d'un autre joueur..."),y=E.channel("matchmaking-"+o.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${o.profile.id}`},V=>{const C=V.new;C.status==="matched"&&C.match_id&&r(C.match_id,C.matched_with,!0)}).subscribe()}async function Un(e,t,i){const{state:s,navigate:c,toast:d}=t;try{(E.getChannels?E.getChannels():[]).forEach(o=>{const n=o.topic||"";(n.includes("matchmaking")||n.includes("pvp-match")||n.includes("friend-invite"))&&E.removeChannel(o)})}catch{}const{data:a}=await E.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!a){d("Match introuvable","error"),c("home");return}if(a.status==="finished"){d("Ce match est terminé","info"),c("home");return}const l=a.home_id===s.profile.id;$o(e,t,i,l,[],[])}async function $o(e,t,i,s,c=[],d=[]){const{state:a,navigate:l,toast:p}=t,o=s?"p1":"p2",n=s?"p2":"p1",g=(c||[]).map(I=>I.id),v=(c||[]).map(I=>({id:I.id,gc_type:I.gc_type,_gcDef:I._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:y}=await E.from("matches").select("*").eq("id",i).single();if(!y){p("Match introuvable","error"),l("home");return}async function z(){const[{data:I},{data:q},{data:w},{data:k}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:y.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:y.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",y.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",y.away_id).single()]),f=A=>({cardId:A.card_id,position:A.position,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:Number(A.note_g)||0,note_d:Number(A.note_d)||0,note_m:Number(A.note_m)||0,note_a:Number(A.note_a)||0,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:A.club_encoded_name||null,clubLogo:A.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),m=((I==null?void 0:I.starters)||[]).map(A=>f(A)),x=((q==null?void 0:q.starters)||[]).map(A=>f(A)),b=(I==null?void 0:I.formation)||"4-4-2",h=(q==null?void 0:q.formation)||"4-4-2";let _=yt(m,b),T=yt(x,h);const $=((I==null?void 0:I.subs)||[]).map(A=>f(A));return stadiumDef&&s&&(_=Ht(_,stadiumDef),ii($,stadiumDef)),{p1Team:_,p2Team:T,p1Subs:$,p2Subs:((q==null?void 0:q.subs)||[]).map(A=>f(A)),p1Formation:b,p2Formation:h,p1Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 1",p2Name:(k==null?void 0:k.club_name)||(k==null?void 0:k.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?g:[],gc_p2:s?[]:g,gcCardsFull_p1:s?v:[],gcCardsFull_p2:s?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=y.game_state&&Object.keys(y.game_state).length?y.game_state:null;if(!r)if(s){r=await z();const{data:I}=await E.from("matches").select("game_state").eq("id",i).single();!(I!=null&&I.game_state)||!Object.keys(I.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:y.home_id}).eq("id",i):r=I.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let I=0;I<30&&!r;I++){await new Promise(w=>setTimeout(w,400));const{data:q}=await E.from("matches").select("game_state").eq("id",i).single();q!=null&&q.game_state&&Object.keys(q.game_state).length&&(r=q.game_state)}if(!r){p("Erreur de synchronisation","error"),l("home");return}r.gc_p2=g,r.gcCardsFull_p2=v,await E.from("matches").update({game_state:r}).eq("id",i)}let u=!1,M=null,L=!1;const N=new Set,V=new Set;function C(I){var _,T;try{E.removeChannel(F)}catch{}const q=r[o+"Score"]||0,w=r[n+"Score"]||0;let k,f;I.winner_id?(k=I.winner_id===a.profile.id,f=!1):I.forfeit?(k=q>w,f=!1):(f=q===w,k=q>w),(_=document.getElementById("pvp-end-overlay"))==null||_.remove();const m=document.createElement("div");m.id="pvp-end-overlay",m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const x=f?"🤝":k?"🏆":"😞",b=f?"MATCH NUL":k?"VICTOIRE !":"DÉFAITE",h=f?"#fff":k?"#FFD700":"#ff6b6b";m.innerHTML=`
      <div style="font-size:64px">${x}</div>
      <div style="font-size:26px;font-weight:900;color:${h}">${b}</div>
      <div style="font-size:18px">${r[o+"Name"]} ${q} – ${w} ${r[n+"Name"]}</div>
      ${I.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${k?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(m),(T=m.querySelector("#pvp-end-home"))==null||T.addEventListener("click",()=>{m.remove(),We(e),l("home")})}const F=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},I=>{const q=I.new;try{if(q.status==="finished"||q.forfeit){if(u)return;u=!0,M&&(clearInterval(M),M=null),q.game_state&&(r=q.game_state),C(q);return}if(q.game_state){const w=r;r=q.game_state;const k=r._lastGC;if(k&&k.seq&&!V.has(k.seq)&&(V.add(k.seq),k.by!==o)){Ee(k.type,k.by,()=>G());return}const f=w[o+"Score"]||0,m=w[n+"Score"]||0,x=r[o+"Score"]||0,b=r[n+"Score"]||0,h=x>f,_=b>m;if((h||_)&&!N.has(r.round)){N.add(r.round);const T=[...r.log||[]].reverse().find(A=>A.isGoal),$=((T==null?void 0:T.homePlayers)||[]).map(A=>({name:A.name,note:A.note,portrait:A.portrait,job:A.job}));ze($,x,b,h,()=>G());return}G()}}catch(w){console.error("[PvP] crash:",w)}}).subscribe();async function j(I){Object.assign(r,I),r.lastActionAt=new Date().toISOString();const{error:q}=await E.from("matches").update({game_state:r}).eq("id",i);q&&p("Erreur de synchronisation","error");try{G()}catch(w){console.error("[PvP] renderPvpScreen crash:",w)}}async function te(){if(u)return;u=!0,M&&(clearInterval(M),M=null);const I=s?y.away_id:y.home_id,q=s?"p2":"p1",w=s?"p1":"p2",k={...r,[q+"Score"]:3,[w+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:I,home_score:k.p1Score||0,away_score:k.p2Score||0,game_state:k}).eq("id",i)}catch{}try{E.removeChannel(F)}catch{}setTimeout(()=>{We(e),l("home")},800)}const le={BOOST_STAT:({value:I=1,count:q=1,roles:w=[]},k,f)=>{const m=k[o+"Team"],x=Object.entries(m).filter(([b])=>!w.length||w.includes(b)).flatMap(([b,h])=>h.filter(_=>!_.used).map(_=>({..._,_line:b})));if(!x.length){k.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),f(k);return}de(x,q,`Choisir ${q} joueur(s) à booster (+${I})`,b=>{b.forEach(h=>{const _=(m[h._line]||[]).find(T=>T.cardId===h.cardId);_&&(_.boost=(_.boost||0)+I,k.log.push({text:`⚡ +${I} sur ${_.name}`,type:"info"}))}),k[o+"Team"]=m,f(k)})},DEBUFF_STAT:({value:I=1,count:q=1,roles:w=[],target:k="ai"},f,m)=>{const x=k==="home"?o:n,b=f[x+"Team"],h=k==="home"?"allié":"adverse",_=Object.entries(b).filter(([T])=>!w.length||w.includes(T)).flatMap(([T,$])=>$.map(A=>({...A,_line:T})));if(!_.length){f.log.push({text:`🎯 Aucun joueur ${h}`,type:"info"}),m(f);return}de(_,q,`Choisir ${q} joueur(s) ${h}(s) (-${I})`,T=>{T.forEach($=>{const A=(b[$._line]||[]).find(S=>S.cardId===$.cardId);A&&(A.boost=(A.boost||0)-I,f.log.push({text:`🎯 -${I} sur ${A.name}`,type:"info"}))}),f[x+"Team"]=b,m(f)})},GRAY_PLAYER:({count:I=1,roles:q=[],target:w="ai"},k,f)=>{const m=w==="home"?o:n,x=k[m+"Team"],b=w==="home"?"allié":"adverse",h=Object.entries(x).filter(([_])=>!q.length||q.includes(_)).flatMap(([_,T])=>T.filter($=>!$.used).map($=>({...$,_line:_})));if(!h.length){k.log.push({text:`❌ Aucun joueur ${b}`,type:"info"}),f(k);return}de(h,I,`Choisir ${I} joueur(s) ${b}(s) à exclure`,_=>{const T="usedCardIds_"+m,$=new Set(k[T]||[]);_.forEach(A=>{const S=(x[A._line]||[]).find(B=>B.cardId===A.cardId);S&&(S.used=!0,$.add(A.cardId),k.log.push({text:`❌ ${S.name} exclu !`,type:"info"}))}),k[T]=[...$],k[m+"Team"]=x,f(k)})},REVIVE_PLAYER:({count:I=1,roles:q=[]},w,k)=>{const f=w[o+"Team"],m=Object.entries(f).filter(([x])=>!q.length||q.includes(x)).flatMap(([x,b])=>b.filter(h=>h.used).map(h=>({...h,_line:x})));if(!m.length){w.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),k(w);return}de(m,I,`Choisir ${I} joueur(s) à ressusciter`,x=>{x.forEach(b=>{const h=(f[b._line]||[]).find(_=>_.cardId===b.cardId);h&&(h.used=!1,w.log.push({text:`💫 ${h.name} ressuscité !`,type:"info"}))}),w[o+"Team"]=f,k(w)})},REMOVE_GOAL:({},I,q)=>{const w=n+"Score";I[w]>0?(I[w]--,I.log.push({text:"🚫 Dernier but annulé !",type:"info"})):I.log.push({text:"🚫 Aucun but à annuler",type:"info"}),q(I)},ADD_GOAL_DRAW:({},I,q)=>{I[o+"Score"]===I[n+"Score"]?(I[o+"Score"]++,I.log.push({text:"🎯 But bonus !",type:"info"})):I.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),q(I)},ADD_SUB:({value:I=1},q,w)=>{q.maxSubs=(q.maxSubs||3)+I,q.log.push({text:`🔄 +${I} remplacement(s)`,type:"info"}),w(q)},CUSTOM:({},I,q)=>q(I)};function de(I,q,w,k){const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let m=[];function x(){var h,_;const b=I.map(T=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",A=Ie(T,T._line)+(T.boost||0),B=m.find(R=>R.cardId===T.cardId)?"#FFD700":"rgba(255,255,255,0.25)",D=T.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${B};background:${$};overflow:hidden;cursor:pointer;${D}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${A}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${T._line}</div>
        </div>`}).join("");f.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${w}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${m.length}/${q}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${b}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${m.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${m.length}/${q})
          </button>
        </div>`,(h=f.querySelector("#pp-close"))==null||h.addEventListener("click",()=>f.remove()),f.querySelectorAll(".pp-item").forEach(T=>{T.addEventListener("click",()=>{const $=T.dataset.cid,A=I.find(B=>B.cardId===$),S=m.findIndex(B=>B.cardId===$);A&&(S>-1?m.splice(S,1):m.length<q&&m.push(A),x())})}),(_=f.querySelector("#pp-confirm"))==null||_.addEventListener("click",()=>{f.remove(),k(m)})}x(),document.body.appendChild(f)}async function P(I,q){const k=(r["gcCardsFull_"+o]||[]).find(b=>b.id===I),f=(k==null?void 0:k._gcDef)||(r.gcDefs||[]).find(b=>{var h;return b.name===q||((h=b.name)==null?void 0:h.toLowerCase().trim())===(q==null?void 0:q.toLowerCase().trim())}),m=[...r["usedGc_"+o]||[],I],x={type:q,by:o,seq:(r._gcAnimSeq||0)+1};V.add(x.seq),Ee(q,o,async()=>{if(f!=null&&f.effect_type&&f.effect_type!=="CUSTOM"){const h=le[f.effect_type];if(h){const _={...r};h(f.effect_params||{},_,async T=>{T["usedGc_"+o]=m,T._lastGC=x,T._gcAnimSeq=x.seq,await j(T)});return}}const b={...r};switch(q){case"Remplacement+":b.maxSubs=(b.maxSubs||3)+1,b.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const h=n+"Score";b[h]>0&&(b[h]--,b.log.push({text:"🚫 But annulé",type:"info"}));break}}b["usedGc_"+o]=m,b._lastGC=x,b._gcAnimSeq=x.seq,await j(b)})}function Y(I,q){const w="usedCardIds_"+I,k=new Set(r[w]||[]);q.forEach(f=>k.add(f)),r[w]=[...k]}function H(){for(const I of["p1","p2"]){const q=new Set(r["usedCardIds_"+I]||[]),w=r[I+"Team"];if(w)for(const k of["GK","DEF","MIL","ATT"])(w[k]||[]).forEach(f=>{f.used=q.has(f.cardId)})}}function G(){var Ue,Je,Ze,Qe,nt,gt;if(r.phase==="reveal")return ne();if(r.phase==="midfield")return ye();if(r.phase==="finished")return De();const I=r[o+"Team"],q=r[n+"Team"];H();const w=r[o+"Score"],k=r[n+"Score"],f=r[o+"Name"],m=r[n+"Name"],x=r.phase===o+"-attack",b=r.phase===o+"-defense",h=Array.isArray(r["selected_"+o])?r["selected_"+o]:[],_=h.map(ce=>ce.cardId),T=window.innerWidth>=700,$=r[o+"Subs"]||[],A=r["usedSubIds_"+o]||[],S=$.filter(ce=>!A.includes(ce.cardId)),B=r["gcCardsFull_"+o]||[],D=r["usedGc_"+o]||[],R=B.filter(ce=>!D.includes(ce.id)),O=r.boostOwner===o&&!r.boostUsed,X=!["GK","DEF","MIL","ATT"].some(ce=>(q[ce]||[]).some(_e=>!_e.used)),U=[...I.MIL||[],...I.ATT||[]].filter(ce=>!ce.used),ee=x&&X&&U.length===0?[...I.GK||[],...I.DEF||[]].filter(ce=>!ce.used).map(ce=>ce.cardId):[];function se(ce,_e,Q){var pt,ht;const ue=ce._gcDef,Z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ue==null?void 0:ue.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",pe={purple:"#b06ce0",light_blue:"#00d4ef"}[ue==null?void 0:ue.color]||"#b06ce0",qe=(ue==null?void 0:ue.name)||ce.gc_type,ke=(ue==null?void 0:ue.effect)||((pt=Ke[ce.gc_type])==null?void 0:pt.desc)||"",tt=ue!=null&&ue.image_url?`/manager-wars/icons/${ue.image_url}`:null,it=((ht=Ke[ce.gc_type])==null?void 0:ht.icon)||"⚡",rt=Math.round(Q*.22),st=Math.round(Q*.22),ct=Q-rt-st,$t=qe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ce.id}" data-gc-type="${ce.gc_type}"
        style="box-sizing:border-box;width:${_e}px;height:${Q}px;border-radius:10px;border:2px solid ${pe};background:${Z};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${rt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${$t}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${_e-6}px">${qe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${ct}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${tt?`<img src="${tt}" style="max-width:${_e-10}px;max-height:${ct-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ct*.55)}px">${it}</span>`}
        </div>
        <div style="height:${st}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ke.slice(0,38)}</span>
        </div>
      </div>`}function ge(ce,_e){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ce}px;height:${_e}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(_e*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(_e*.2)}px">⚡</div>
        <div style="font-size:${Math.round(_e*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const me=(ce,_e)=>_e?ge(130,175):se(ce,130,175),he=(ce,_e)=>_e?ge(68,95):se(ce,68,95),ve=T?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=x?Te(o)?`<button id="pvp-action" style="${ve};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${h.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${ve};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:b?`<button id="pvp-action" style="${ve};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${h.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${m}</div>`,Me=x&&!Te(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':x||b?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${h.length}/3 sélectionné(s)</div>`:"",Re=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${T?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${S.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':S.map(ce=>`<div class="pvp-sub-btn" data-sub-id="${ce.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(ce,T?76:44,T?100:58)}</div>`).join("")}
    </div>`,Be=x?"attack":b?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(I,r[o+"Formation"],Be,_,300,300,ee)}
      </div>
    </div>`;function Fe(ce){if(ce.type==="duel"&&(ce.homeTotal!=null||ce.aiTotal!=null)){const _e=(ce.homeTotal||0)>=(ce.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(ce.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ce.homePlayers||[]).map(Q=>dt(Q)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${_e?20:14}px;font-weight:900;color:${_e?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${ce.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${_e?14:20}px;font-weight:900;color:${_e?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${ce.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ce.aiPlayers||[]).map(Q=>dt(Q)).join("")}
            </div>
          </div>
          ${ce.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${ce.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${ce.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ce.type==="goal"?700:400};padding:3px 2px">${ce.text||""}</div>`}const Ve=(()=>{var _e,Q;if(b&&((_e=r.pendingAttack)!=null&&_e.players)){const ue=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${m} ATTAQUE — Défendez !</div>
          ${ot((ue.players||[]).map(Z=>({...Z,used:!1})),"#ff6b6b",ue.total)}
        </div>`}if(x&&((Q=r.pendingAttack)!=null&&Q.players)){const ue=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ue.players||[]).map(Z=>({...Z,used:!1})),"#00ff88",ue.total)}
        </div>`}const ce=(r.log||[]).slice(-1)[0];return ce?'<div style="padding:2px 4px">'+Fe(ce)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ne=`
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
      </button>`;et(e),e.style.overflow="hidden",T?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Re}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Oe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${Me}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${R.map(ce=>me(ce,!1)).join("")}
            ${O?me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(I,r[o+"Formation"],Be,_,300,300,ee)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${R.map(ce=>he(ce,!1)).join("")}
            ${O?he(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${x&&S.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${x&&S.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${x&&S.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${x&&S.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${S.length}</div>
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
          <div>${je}${Me}</div>
        </div>
      </div>`;function He(){const ce=e.querySelector(".match-screen");if(!ce)return;const _e=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ce.style.height=_e+"px",ce.style.minHeight=_e+"px",ce.style.maxHeight=_e+"px",ce.style.overflow="hidden";const Q=e.querySelector("#mobile-action-bar"),ue=e.querySelector("#mobile-play-area");Q&&ue&&(ue.style.paddingBottom=Q.offsetHeight+"px")}if(He(),setTimeout(He,120),setTimeout(He,400),L||(L=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",He),window.visualViewport.addEventListener("scroll",He)),window.addEventListener("resize",He)),function(){const _e=e.querySelector(".terrain-wrapper svg");_e&&(_e.removeAttribute("width"),_e.removeAttribute("height"),_e.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",_e.setAttribute("viewBox","-26 -26 352 352"),_e.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ce=>{ce.addEventListener("click",()=>{if(!x&&!b)return;const _e=ce.dataset.cardId,Q=ce.dataset.role,ue=(I[Q]||[]).find(ke=>ke.cardId===_e);if(!ue||ue.used)return;const Z=ee.includes(_e);if(x&&!["MIL","ATT"].includes(Q)&&!Z)return;Array.isArray(r["selected_"+o])||(r["selected_"+o]=[]);const pe=r["selected_"+o],qe=pe.findIndex(ke=>ke.cardId===_e);qe>-1?pe.splice(qe,1):pe.length<3&&pe.push({...ue,_role:Q}),G()})}),e.querySelectorAll(".match-used-hit").forEach(ce=>{ce.addEventListener("click",()=>Se(ce.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ce=>{ce.addEventListener("click",()=>Se())}),(Ue=e.querySelector("#pvp-sub-open"))==null||Ue.addEventListener("click",()=>Se()),e.querySelectorAll(".pvp-gc-mini").forEach(ce=>{ce.addEventListener("click",()=>be(ce.dataset.gcId,ce.dataset.gcType))}),(Je=e.querySelector("#pvp-boost-card"))==null||Je.addEventListener("click",()=>$e()),(Ze=e.querySelector("#pvp-action"))==null||Ze.addEventListener("click",ce=>{x?ce.currentTarget.dataset.pass==="1"||!Te(o)?oe():K():b&&J()}),(Qe=e.querySelector("#pvp-quit"))==null||Qe.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&te()}),(nt=e.querySelector("#pvp-view-opp"))==null||nt.addEventListener("click",()=>xe()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>W()),M&&(clearInterval(M),M=null),(x||b)&&!u){let ce=30,_e=!1;const Q=()=>document.getElementById("pvp-timer"),ue=()=>{Q()&&(Q().textContent=ce+"s",Q().style.color=_e?"#ff4444":"#fff")};ue(),M=setInterval(()=>{ce--,ce<0?_e?(clearInterval(M),M=null,x&&!Te(o)?oe():te()):(_e=!0,ce=15,ue()):ue()},1e3)}}function ne(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[n+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await j({phase:"midfield"})},5e3)}let fe=!1;function ye(){if(fe)return;const I=r[o+"Team"].MIL||[],q=r[n+"Team"].MIL||[];function w(R){return R.reduce((O,X)=>O+Ie(X,"MIL"),0)}function k(R){let O=0;for(let X=0;X<R.length-1;X++){const U=at(R[X],R[X+1]);U==="#00ff88"?O+=2:U==="#FFD700"&&(O+=1)}return O}const f=w(I)+k(I),m=w(q)+k(q),x=f>=m;function b(R,O,X){return`<div id="duel-row-${X}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${O}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${R.map((U,ee)=>{const se=ee<R.length-1?at(U,R[ee+1]):null,ge=!se||se==="#ff3333"||se==="#cc2222",me=se==="#00ff88"?"+2":se==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${X}" data-idx="${ee}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...U,note:Ie(U,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ee<R.length-1?`<div class="duel-link duel-link-${X}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ge?"rgba(255,255,255,0.12)":se};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ge?"none":`0 0 8px ${se}`}">
              ${me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${se}">${me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${X}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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
      ${b(I,r[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${b(q,r[n+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const h=(R,O)=>e.querySelectorAll(R).forEach((X,U)=>{setTimeout(()=>{X.style.opacity="1",X.style.transform="translateY(0) scale(1)"},O+U*90)});h(".duel-card-me",150),h(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((R,O)=>setTimeout(()=>{R.style.opacity="1"},O*70)),900),setTimeout(()=>{const R=e.querySelector("#pvp-vs");R&&(R.style.opacity="1",R.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(O=>O.style.opacity="1")},1250);function _(R,O,X){const U=document.getElementById(R);if(!U)return;const ee=performance.now(),se=ge=>{const me=Math.min(1,(ge-ee)/X);U.textContent=Math.round(O*(1-Math.pow(1-me,3))),me<1?requestAnimationFrame(se):U.textContent=O};requestAnimationFrame(se)}setTimeout(()=>{_("pvp-score-me",f,800),_("pvp-score-opp",m,800)},1500);const T=r.p1Team.MIL||[],$=r.p2Team.MIL||[],A=w(T)+k(T),S=w($)+k($),B=A>=S?"p1":"p2";let D=r.boostValue;D==null&&(D=oi(),r.boostValue=D,r.boostOwner=B,r.boostUsed=!1),fe=!0,setTimeout(()=>{const R=e.querySelector("#duel-row-"+(x?"me":"opp")),O=e.querySelector("#duel-row-"+(x?"opp":"me")),X=document.getElementById("pvp-score-me"),U=document.getElementById("pvp-score-opp"),ee=x?X:U,se=x?U:X;ee&&(ee.style.fontSize="80px",ee.style.color=x?"#FFD700":"#ff6b6b",ee.style.animation="duelPulse .5s ease"+(x?",duelGlow 1.5s ease infinite .5s":"")),se&&(se.style.opacity="0.25"),setTimeout(()=>{R&&(R.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",R.style.zIndex="5"),setTimeout(()=>{const ge=document.getElementById("duel-shock");ge&&(ge.style.animation="shockwave .5s ease-out forwards"),O&&(O.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var ve;const ge=document.getElementById("pvp-duel-finale");if(!ge)return;const me=r.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+D+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",he=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ge.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(x?"⚽ "+r[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[n+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+me+he,ge.style.transition="opacity .45s ease",ge.style.opacity="1",ge.style.pointerEvents="auto",(ve=document.getElementById("pvp-start-match"))==null||ve.addEventListener("click",async()=>{const je=B;await j({phase:je+"-attack",attacker:je,round:1,boostValue:D,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function ze(I,q,w,k,f){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const x=Array.from({length:10},(T,$)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${$%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][$%8]}</div>`).join(""),b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};m.innerHTML=`
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
      ${I!=null&&I.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${I.map(T=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${b[T.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${T.portrait?`<img src="${T.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(T.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(m);let h=!1;const _=()=>{h||(h=!0,m.remove(),setTimeout(()=>f(),50))};m.addEventListener("click",_),setTimeout(_,3500)}function Ee(I,q,w){var D,R;const k=(r.gcDefs||[]).find(O=>{var X;return O.name===I||((X=O.name)==null?void 0:X.toLowerCase().trim())===(I==null?void 0:I.toLowerCase().trim())}),f={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[k==null?void 0:k.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",m={purple:"#b06ce0",light_blue:"#00d4ef"}[k==null?void 0:k.color]||"#b06ce0",x=(k==null?void 0:k.name)||I,b=(k==null?void 0:k.effect)||((D=Ke[I])==null?void 0:D.desc)||"",h=k!=null&&k.image_url?`/manager-wars/icons/${k.image_url}`:null,_=((R=Ke[I])==null?void 0:R.icon)||"⚡",$=q===o?"Vous":r[q+"Name"]||"Adversaire",A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",A.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${m}66}50%{box-shadow:0 0 60px ${m}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${m};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${$} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${m};background:${f};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${x.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${x}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${h?`<img src="${h}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${_}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${b}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(A);let S=!1;const B=()=>{S||(S=!0,A.remove(),setTimeout(()=>w&&w(),50))};A.addEventListener("click",B),setTimeout(B,3e3)}function be(I,q){var A,S,B,D;const k=(r["gcCardsFull_"+o]||[]).find(R=>R.id===I),f=k==null?void 0:k._gcDef,m={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[f==null?void 0:f.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",x={purple:"#b06ce0",light_blue:"#00d4ef"}[f==null?void 0:f.color]||"#b06ce0",b=(f==null?void 0:f.name)||q,h=(f==null?void 0:f.effect)||((A=Ke[q])==null?void 0:A.desc)||"Carte spéciale.",_=f!=null&&f.image_url?`/manager-wars/icons/${f.image_url}`:null,T=((S=Ke[q])==null?void 0:S.icon)||"⚡",$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",$.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${x};background:${m};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${x}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${b.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${b}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${_?`<img src="${_}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${T}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${h}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild($),(B=$.querySelector("#pvp-gc-back"))==null||B.addEventListener("click",()=>$.remove()),(D=$.querySelector("#pvp-gc-use"))==null||D.addEventListener("click",()=>{$.remove(),P(I,q)})}function $e(){var k;const I=r[o+"Team"],q=Object.entries(I).flatMap(([f,m])=>(m||[]).filter(x=>!x.used).map(x=>({...x,_line:f})));if(!q.length)return;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",w.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${q.map(f=>{const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f._line]||"#555",x=Ie(f,f._line)+(f.boost||0);return`<div class="bp-item" data-cid="${f.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${m};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${f.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${x}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(w),(k=w.querySelector("#bp-close"))==null||k.addEventListener("click",()=>w.remove()),w.querySelectorAll(".bp-item").forEach(f=>{f.addEventListener("click",async()=>{const m=f.dataset.cid,x=q.find(h=>h.cardId===m);if(!x)return;const b=(I[x._line]||[]).find(h=>h.cardId===m);b&&(b.boost=(b.boost||0)+r.boostValue),w.remove(),await j({[o+"Team"]:I,boostUsed:!0})})})}function Se(I=null){var S,B;if(!(r.phase===o+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const w=r[o+"Team"],k=r["usedSubIds_"+o]||[],f=r.maxSubs||3;if(k.length>=f){p(`Maximum ${f} remplacements atteint`,"warning");return}const m=Object.entries(w).flatMap(([D,R])=>(R||[]).filter(O=>O.used).map(O=>({...O,_line:D}))),x=(r[o+"Subs"]||[]).filter(D=>!k.includes(D.cardId));if(!m.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!x.length){p("Aucun remplaçant disponible","warning");return}let b=Math.max(0,m.findIndex(D=>D.cardId===I));const h=((S=m[b])==null?void 0:S._line)||((B=m[b])==null?void 0:B.job);let _=Math.max(0,x.findIndex(D=>D.job===h)),T=!1;const $=document.createElement("div");$.id="pvp-sub-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function A(){var se,ge,me,he,ve,je;const D=m[b],R=x[_],O=Math.min(130,Math.round((window.innerWidth-90)/2)),X=Math.round(O*1.35),U=Me=>`background:rgba(255,255,255,0.12);border:none;color:${Me?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Me?"default":"pointer"};flex-shrink:0`;$.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${k.length}/${f})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${U(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${R?Ye({...R,used:!1,boost:0},O,X):"<div>—</div>"}</div>
          <button id="pin-down" style="${U(_>=x.length-1)}" ${_>=x.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${x.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${U(b===0)}" ${b===0?"disabled":""}>▲</button>
          <div>${D?Ye({...D,used:!1,boost:0},O,X):"<div>—</div>"}</div>
          <button id="pout-down" style="${U(b>=m.length-1)}" ${b>=m.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${b+1}/${m.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(se=$.querySelector("#psub-close"))==null||se.addEventListener("click",()=>$.remove()),(ge=$.querySelector("#pout-up"))==null||ge.addEventListener("click",()=>{b>0&&(b--,A())}),(me=$.querySelector("#pout-down"))==null||me.addEventListener("click",()=>{b<m.length-1&&(b++,A())}),(he=$.querySelector("#pin-up"))==null||he.addEventListener("click",()=>{_>0&&(_--,A())}),(ve=$.querySelector("#pin-down"))==null||ve.addEventListener("click",()=>{_<x.length-1&&(_++,A())});const ee=(Me,Re,Be,Oe)=>{const Fe=$.querySelector("#"+Me);if(!Fe)return;let Ve=0;Fe.addEventListener("touchstart",Ne=>{Ve=Ne.touches[0].clientY},{passive:!0}),Fe.addEventListener("touchend",Ne=>{const He=Ne.changedTouches[0].clientY-Ve;if(Math.abs(He)<30)return;const Ue=Re();He<0&&Ue<Oe-1?(Be(Ue+1),A()):He>0&&Ue>0&&(Be(Ue-1),A())},{passive:!0})};ee("pin-panel",()=>_,Me=>_=Me,x.length),ee("pout-panel",()=>b,Me=>b=Me,m.length),(je=$.querySelector("#psub-confirm"))==null||je.addEventListener("click",async Me=>{if(Me.preventDefault(),Me.stopPropagation(),T)return;T=!0;const Re=m[b],Be=x[_];if(!Re||!Be)return;const Oe=Re._line,Fe=(w[Oe]||[]).findIndex(He=>He.cardId===Re.cardId);if(Fe===-1){p("Erreur : joueur introuvable","error"),$.remove();return}const Ve={...Be,_line:Oe,position:Re.position,used:!1,boost:0};w[Oe].splice(Fe,1,Ve);const Ne=[...k,Be.cardId];$.remove(),Le(Re,Be,async()=>{await j({[o+"Team"]:w,[n+"Team"]:r[n+"Team"],["usedSubIds_"+o]:Ne})})})}document.body.appendChild($),A()}function Le(I,q,w){const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const m=(h,_,T)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${_};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${T}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${k[h.job]||"#555"};border:3px solid ${_};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(h)?`<img src="${Pe(h)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(h.name||"").slice(0,12)}</div>
    </div>`;f.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${m(q,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${m(I,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(f);let x=!1;const b=()=>{x||(x=!0,f.remove(),setTimeout(()=>w(),50))};f.addEventListener("click",b),setTimeout(b,2200)}function xe(){var q;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",I.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[n+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(I),(q=I.querySelector("#pvp-opp-close"))==null||q.addEventListener("click",()=>I.remove())}function W(){var w;const I=r.log||[],q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",q.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${I.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...I].reverse().map(k=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${k.type==="goal"?"#FFD700":k.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${k.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(q),(w=q.querySelector("#pvp-hist-close"))==null||w.addEventListener("click",()=>q.remove())}async function oe(){if(r.phase!==o+"-attack")return;const I=o==="p1"?"p2":"p1",q=(r.round||0)+1,w=[...r.log||[]];w.push({type:"info",text:`⏭️ ${r[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const k=we(r),f=Te(I),m=k||!f?"finished":I+"-attack";await j({["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:m,attacker:I,round:q,log:w}),m==="finished"&&await Ce(r)}async function K(){const I=r[o+"Team"],q=!["GK","DEF","MIL","ATT"].some(m=>(r[n+"Team"][m]||[]).some(x=>!x.used)),w=(r["selected_"+o]||[]).map(m=>{const x=(I[m._role]||[]).find(A=>A.cardId===m.cardId)||m,b=q&&["GK","DEF"].includes(m._role),h=I[m._role]||[],_=h.findIndex(A=>A.cardId===m.cardId),T=lt(h.length),$=_>=0?T[_]:x._col??1;return{...x,_line:m._role,_col:$,...b?{note_a:Math.max(1,Number(x.note_a)||0)}:{}}});if(!w.length)return;const k=Nt(w,r.modifiers[o]||{});Y(o,w.map(m=>m.cardId)),w.forEach(m=>{const x=(I[m._role]||[]).find(b=>b.cardId===m.cardId);x&&(x.used=!0)}),r["selected_"+o]=[],G();const f=[...r.log||[]];if(q){const m=(r[o+"Score"]||0)+1,x=w.map($=>({name:$.name,note:Ie($,$._line||"ATT"),portrait:Pe($),job:$.job}));f.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:x,homeTotal:k.total,aiTotal:0});const b=(r.round||0)+1,h=o==="p1"?"p2":"p1",_={...r,[o+"Team"]:I,[o+"Score"]:m},T=we(_);N.add(b),ze(x,m,r[n+"Score"]||0,!0,async()=>{await j({[o+"Team"]:I,[o+"Score"]:m,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:T?"finished":h+"-attack",attacker:h,round:b,log:f}),T&&await Ce({...r,[o+"Score"]:m})});return}f.push({type:"pending",text:`⚔️ ${r[o+"Name"]} attaque (${k.total})`}),await j({[o+"Team"]:I,[n+"Team"]:r[n+"Team"],pendingAttack:{...k,players:w,side:o},["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},phase:n+"-defense",log:f})}async function J(){const I=r[o+"Team"],q=(r["selected_"+o]||[]).map(D=>{const R=(I[D._role]||[]).find(se=>se.cardId===D.cardId)||D,O=I[D._role]||[],X=O.findIndex(se=>se.cardId===D.cardId),U=lt(O.length),ee=X>=0?U[X]:R._col??1;return{...R,_line:D._role,_col:ee}}),w=Rt(q,r.modifiers[o]||{});Y(o,q.map(D=>D.cardId)),q.forEach(D=>{const R=(I[D._role]||[]).find(O=>O.cardId===D.cardId);R&&(R.used=!0)}),r["selected_"+o]=[],G();const k=Ot(r.pendingAttack.total,w.total,r.modifiers[o]||{}),f=r.pendingAttack.side,m=k==="attack"||(k==null?void 0:k.goal),x=f==="p1"?"p2":"p1",b=(r.round||0)+1,h=(r.pendingAttack.players||[]).map(D=>({name:D.name,note:Ie(D,D._line||"ATT"),portrait:Pe(D),job:D.job})),_=[...r.log||[]];_.push({type:"duel",isGoal:m,homeScored:m&&f===o,text:m?`⚽ BUT de ${r[f+"Name"]} ! (${r.pendingAttack.total} vs ${w.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${w.total})`,homePlayers:h,aiPlayers:q.map(D=>({name:D.name,note:Ie(D,D._line||"DEF"),portrait:Pe(D),job:D.job})),homeTotal:r.pendingAttack.total,aiTotal:w.total});const T=m?(r[f+"Score"]||0)+1:r[f+"Score"]||0,$={...r,[o+"Team"]:I,[f+"Score"]:T},A=we($),S=A?"finished":x+"-attack",B=async()=>{await j({[o+"Team"]:I,[n+"Team"]:r[n+"Team"],[f+"Score"]:T,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:S,attacker:x,round:b,log:_}),(S==="finished"||A)&&await Ce({...r,[f+"Score"]:T})};if(m){const D=f===o,R=D?T:r[o+"Score"]||0,O=D?r[n+"Score"]||0:T;N.add(b),ze(h,R,O,D,B)}else await B()}function re(I){return["MIL","ATT"].some(q=>(I[q]||[]).some(w=>!w.used))}function ie(I){return["GK","DEF","MIL","ATT"].some(q=>(I[q]||[]).some(w=>!w.used))}function ae(I){return ie(I)&&!re(I)}function Te(I){const q=r[I+"Team"],w=r[(I==="p1"?"p2":"p1")+"Team"];return!!(re(q)||!ie(w)&&ae(q))}function we(I){const q=["MIL","ATT"].some(_=>(I.p1Team[_]||[]).some(T=>!T.used)),w=["MIL","ATT"].some(_=>(I.p2Team[_]||[]).some(T=>!T.used)),k=ie(I.p1Team),f=ie(I.p2Team);return!q&&!(!f&&k)&&(!w&&!(!k&&f))}function Ae(I){const q=I.p1Score||0,w=I.p2Score||0;return q===w?null:q>w?y.home_id:y.away_id}async function Ce(I){try{const q=Ae(I),w=q?y.home_id===q?y.away_id:y.home_id:null;await E.from("matches").update({status:"finished",winner_id:q,home_score:I.p1Score||0,away_score:I.p2Score||0}).eq("id",i),q&&w&&updateEvolutiveCards(q,w).catch(()=>{})}catch(q){console.error("[PvP] finishMatch:",q)}}function De(){var f;const I=r[o+"Score"],q=r[n+"Score"],w=I>q,k=I===q;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${w?"🏆":k?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${w?"Victoire !":k?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${I} - ${q}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(f=document.getElementById("pvp-home"))==null||f.addEventListener("click",()=>{try{E.removeChannel(F)}catch{}We(e),l("home")})}G()}const Vn=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:_o,resumePvpMatch:Un},Symbol.toStringTag,{value:"Module"}));async function Kn(e,t,i,s){var c,d;try{const a=(d=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:d.id;try{(E.getChannels?E.getChannels():[]).forEach(p=>{const o=p.topic||"";(o.includes("matchmaking")||o.includes("pvp-match"))&&E.removeChannel(p)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}a&&(await E.rpc("cancel_matchmaking",{p_user_id:a}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",a).then(()=>{},()=>{}))}catch{}await ri(e,t,"random",({deckId:a,formation:l,starters:p,subsRaw:o,gcCardsEnriched:n,gcDefs:g,stadiumDef:v})=>{const y=z=>Yn(e,t,a,l,p,o,z,g||[],i,s);if(!n.length){y([]);return}ni(e,n,y)})}async function Yn(e,t,i,s,c,d,a=[],l=[],p,o){var le;const{state:n,navigate:g,toast:v}=t,y=n.profile.id;let z=!1,r=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:y})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",y)}catch{}const u=(de,P,Y,H)=>{var G;e.innerHTML=`
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
      </div>`,(G=document.getElementById("lobby-cancel"))==null||G.addEventListener("click",async()=>{z=!0,r&&(E.removeChannel(r),r=null),Y&&await E.from("friend_match_invites").update({status:"declined"}).eq("id",Y),We(e),g("home")})},M=async(de,P)=>{z=!0,r&&(E.removeChannel(r),r=null),await new Promise(Y=>setTimeout(Y,600)),e.isConnected&&Wn(e,t,de,P,a,l)},{data:L}=await E.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${y},invitee_id.eq.${p}),and(inviter_id.eq.${p},invitee_id.eq.${y})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let N,V;if(L&&L.inviter_id===p)V=!1,N=L.id,await E.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",N);else{V=!0;const{data:de,error:P}=await E.from("friend_match_invites").insert({inviter_id:y,invitee_id:p,friend_id:p,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(P||!de){v("Erreur création invitation","error"),We(e),g("home");return}N=de.id}if(u(!0,!V,N),!V){const de={home_id:p,away_id:y,home_deck_id:L.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},P=await E.from("matches").insert(de).select().single(),Y=P.data;if(!Y){v("Erreur création match: "+(((le=P.error)==null?void 0:le.message)||""),"error"),We(e),g("home");return}await E.from("friend_match_invites").update({match_id:Y.id,status:"matched"}).eq("id",N),M(Y.id,!1);return}let C=!1;const F=de=>{z||C||(de.status==="matched"&&de.match_id?(C=!0,clearInterval(j),clearInterval(te),M(de.match_id,!0)):de.status==="declined"?(clearInterval(j),clearInterval(te),v(`${o} a décliné l'invitation`,"warning"),We(e),g("home")):de.invitee_ready&&u(!0,!0,N))},j=setInterval(()=>{if(z){clearInterval(j);return}E.from("matchmaking_queue").delete().eq("user_id",y).then(()=>{},()=>{})},3e3),te=setInterval(async()=>{if(z||C){clearInterval(te);return}const{data:de}=await E.from("friend_match_invites").select("*").eq("id",N).maybeSingle();de&&F(de)},1200);r=E.channel("friend-invite-"+N).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${N}`},de=>F(de.new)).subscribe()}async function Wn(e,t,i,s,c=[],d=[]){const{state:a,navigate:l,toast:p}=t,o=s?"p1":"p2",n=s?"p2":"p1",g=(c||[]).map(w=>w.id),v=(c||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:y}=await E.from("matches").select("*").eq("id",i).single();if(!y){p("Match introuvable","error"),l("home");return}async function z(){const[{data:w},{data:k},{data:f},{data:m}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:y.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:y.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",y.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",y.away_id).single()]),x=$=>({cardId:$.card_id,position:$.position,id:$.id,firstname:$.firstname,name:$.surname_encoded,country_code:$.country_code,club_id:$.club_id,job:$.job,job2:$.job2,note_g:Number($.note_g)||0,note_d:Number($.note_d)||0,note_m:Number($.note_m)||0,note_a:Number($.note_a)||0,rarity:$.rarity,skin:$.skin,hair:$.hair,hair_length:$.hair_length,clubName:$.club_encoded_name||null,clubLogo:$.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),b=((w==null?void 0:w.starters)||[]).map($=>x($)),h=((k==null?void 0:k.starters)||[]).map($=>x($)),_=(w==null?void 0:w.formation)||"4-4-2",T=(k==null?void 0:k.formation)||"4-4-2";return{p1Team:(()=>{const $=yt(b,_);return stadiumDef?Ht($,stadiumDef):$})(),p2Team:yt(h,T),p1Subs:(()=>{const $=((w==null?void 0:w.subs)||[]).map(A=>x(A));return stadiumDef&&ii($,stadiumDef),$})(),p2Subs:((k==null?void 0:k.subs)||[]).map($=>x($)),p1Formation:_,p2Formation:T,p1Name:(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"Joueur 1",p2Name:(m==null?void 0:m.club_name)||(m==null?void 0:m.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?g:[],gc_p2:s?[]:g,gcCardsFull_p1:s?v:[],gcCardsFull_p2:s?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let r=y.game_state&&Object.keys(y.game_state).length?y.game_state:null;if(!r)if(s){r=await z();const{data:w}=await E.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await E.from("matches").update({game_state:r,turn_user_id:y.home_id}).eq("id",i):r=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let w=0;w<60&&!r;w++){await new Promise(f=>setTimeout(f,400));const{data:k}=await E.from("matches").select("game_state").eq("id",i).single();k!=null&&k.game_state&&Object.keys(k.game_state).length&&(r=k.game_state)}if(!r){p("Erreur de synchronisation","error"),l("home");return}r.gc_p2=g,r.gcCardsFull_p2=v,await E.from("matches").update({game_state:r}).eq("id",i)}let u=!1,M=!1,L=!1,N=null,V=!1;const C=new Set,F=new Set;function j(w){var $,A;try{E.removeChannel(te)}catch{}const k=r[o+"Score"]||0,f=r[n+"Score"]||0;if(!L){L=!0;const S=w.winner_id||(k>f?a.profile.id:f>k?"opp":null),B=S===a.profile.id?"win":S?"loss":null;B&&hi(()=>Promise.resolve().then(()=>no),void 0).then(D=>D.applyOwnEvolution(a.profile.id,B)).catch(()=>{})}if(!M){const S=r.p1Score||0,B=r.p2Score||0,D=(r.usedGc_p1||[]).length,R=(r.usedGc_p2||[]).length,O=w.winner_id||(S>B?y.home_id:B>S?y.away_id:null);(O?a.profile.id===O:a.profile.id<(s?y.away_id:y.home_id))&&(M=!0,Zi({player1Id:y.home_id,player2Id:y.away_id,score1:S,score2:B,gc1:D,gc2:R}).catch(U=>console.warn("[FriendMatch] updateStats:",U)))}let m,x;w.winner_id?(m=w.winner_id===a.profile.id,x=!1):w.forfeit?(m=k>f,x=!1):(x=k===f,m=k>f),($=document.getElementById("pvp-end-overlay"))==null||$.remove();const b=document.createElement("div");b.id="pvp-end-overlay",b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const h=x?"🤝":m?"🏆":"😞",_=x?"MATCH NUL":m?"VICTOIRE !":"DÉFAITE",T=x?"#fff":m?"#FFD700":"#ff6b6b";b.innerHTML=`
      <div style="font-size:64px">${h}</div>
      <div style="font-size:26px;font-weight:900;color:${T}">${_}</div>
      <div style="font-size:18px">${r[o+"Name"]} ${k} – ${f} ${r[n+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${m?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(b),(A=b.querySelector("#pvp-end-home"))==null||A.addEventListener("click",()=>{b.remove(),We(e),l("home")})}const te=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{const k=w.new;try{if(k.status==="finished"||k.forfeit){if(u)return;u=!0,N&&(clearInterval(N),N=null),k.game_state&&(r=k.game_state),j(k);return}if(k.game_state){const f=r;r=k.game_state;const m=r._lastGC;if(m&&m.seq&&!F.has(m.seq)&&(F.add(m.seq),m.by!==o)){$e(m.type,m.by,()=>fe());return}const x=f[o+"Score"]||0,b=f[n+"Score"]||0,h=r[o+"Score"]||0,_=r[n+"Score"]||0,T=h>x,$=_>b;if((T||$)&&!C.has(r.round)){C.add(r.round);const A=[...r.log||[]].reverse().find(B=>B.isGoal),S=((A==null?void 0:A.homePlayers)||[]).map(B=>({name:B.name,note:B.note,portrait:B.portrait,job:B.job}));be(S,h,_,T,()=>fe());return}fe()}}catch(f){console.error("[PvP] crash:",f)}}).subscribe();async function le(w){Object.assign(r,w),r.lastActionAt=new Date().toISOString();const{error:k}=await E.from("matches").update({game_state:r}).eq("id",i);k&&p("Erreur de synchronisation","error");try{fe()}catch(f){console.error("[PvP] renderPvpScreen crash:",f)}}async function de(){if(u)return;u=!0,N&&(clearInterval(N),N=null);const w=s?y.away_id:y.home_id,k=s?"p2":"p1",f=s?"p1":"p2",m={...r,[k+"Score"]:3,[f+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:w,home_score:m.p1Score||0,away_score:m.p2Score||0,game_state:m}).eq("id",i)}catch{}try{E.removeChannel(te)}catch{}setTimeout(()=>{We(e),l("home")},800)}const P={BOOST_STAT:({value:w=1,count:k=1,roles:f=[]},m,x)=>{const b=m[o+"Team"],h=Object.entries(b).filter(([_])=>!f.length||f.includes(_)).flatMap(([_,T])=>T.filter($=>!$.used).map($=>({...$,_line:_})));if(!h.length){m.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),x(m);return}Y(h,k,`Choisir ${k} joueur(s) à booster (+${w})`,_=>{_.forEach(T=>{const $=(b[T._line]||[]).find(A=>A.cardId===T.cardId);$&&($.boost=($.boost||0)+w,m.log.push({text:`⚡ +${w} sur ${$.name}`,type:"info"}))}),m[o+"Team"]=b,x(m)})},DEBUFF_STAT:({value:w=1,count:k=1,roles:f=[],target:m="ai"},x,b)=>{const h=m==="home"?o:n,_=x[h+"Team"],T=m==="home"?"allié":"adverse",$=Object.entries(_).filter(([A])=>!f.length||f.includes(A)).flatMap(([A,S])=>S.map(B=>({...B,_line:A})));if(!$.length){x.log.push({text:`🎯 Aucun joueur ${T}`,type:"info"}),b(x);return}Y($,k,`Choisir ${k} joueur(s) ${T}(s) (-${w})`,A=>{A.forEach(S=>{const B=(_[S._line]||[]).find(D=>D.cardId===S.cardId);B&&(B.boost=(B.boost||0)-w,x.log.push({text:`🎯 -${w} sur ${B.name}`,type:"info"}))}),x[h+"Team"]=_,b(x)})},GRAY_PLAYER:({count:w=1,roles:k=[],target:f="ai"},m,x)=>{const b=f==="home"?o:n,h=m[b+"Team"],_=f==="home"?"allié":"adverse",T=Object.entries(h).filter(([$])=>!k.length||k.includes($)).flatMap(([$,A])=>A.filter(S=>!S.used).map(S=>({...S,_line:$})));if(!T.length){m.log.push({text:`❌ Aucun joueur ${_}`,type:"info"}),x(m);return}Y(T,w,`Choisir ${w} joueur(s) ${_}(s) à exclure`,$=>{const A="usedCardIds_"+b,S=new Set(m[A]||[]);$.forEach(B=>{const D=(h[B._line]||[]).find(R=>R.cardId===B.cardId);D&&(D.used=!0,S.add(B.cardId),m.log.push({text:`❌ ${D.name} exclu !`,type:"info"}))}),m[A]=[...S],m[b+"Team"]=h,x(m)})},REVIVE_PLAYER:({count:w=1,roles:k=[]},f,m)=>{const x=f[o+"Team"],b=Object.entries(x).filter(([h])=>!k.length||k.includes(h)).flatMap(([h,_])=>_.filter(T=>T.used).map(T=>({...T,_line:h})));if(!b.length){f.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),m(f);return}Y(b,w,`Choisir ${w} joueur(s) à ressusciter`,h=>{h.forEach(_=>{const T=(x[_._line]||[]).find($=>$.cardId===_.cardId);T&&(T.used=!1,f.log.push({text:`💫 ${T.name} ressuscité !`,type:"info"}))}),f[o+"Team"]=x,m(f)})},REMOVE_GOAL:({},w,k)=>{const f=n+"Score";w[f]>0?(w[f]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),k(w)},ADD_GOAL_DRAW:({},w,k)=>{w[o+"Score"]===w[n+"Score"]?(w[o+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),k(w)},ADD_SUB:({value:w=1},k,f)=>{k.maxSubs=(k.maxSubs||3)+w,k.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),f(k)},CUSTOM:({},w,k)=>k(w)};function Y(w,k,f,m){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let b=[];function h(){var T,$;const _=w.map(A=>{const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",B=Ie(A,A._line)+(A.boost||0),R=b.find(X=>X.cardId===A.cardId)?"#FFD700":"rgba(255,255,255,0.25)",O=A.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${R};background:${S};overflow:hidden;cursor:pointer;${O}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${A._line}</div>
        </div>`}).join("");x.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${f}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${b.length}/${k}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${_}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${b.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${b.length}/${k})
          </button>
        </div>`,(T=x.querySelector("#pp-close"))==null||T.addEventListener("click",()=>x.remove()),x.querySelectorAll(".pp-item").forEach(A=>{A.addEventListener("click",()=>{const S=A.dataset.cid,B=w.find(R=>R.cardId===S),D=b.findIndex(R=>R.cardId===S);B&&(D>-1?b.splice(D,1):b.length<k&&b.push(B),h())})}),($=x.querySelector("#pp-confirm"))==null||$.addEventListener("click",()=>{x.remove(),m(b)})}h(),document.body.appendChild(x)}async function H(w,k){const m=(r["gcCardsFull_"+o]||[]).find(_=>_.id===w),x=(m==null?void 0:m._gcDef)||(r.gcDefs||[]).find(_=>{var T;return _.name===k||((T=_.name)==null?void 0:T.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),b=[...r["usedGc_"+o]||[],w],h={type:k,by:o,seq:(r._gcAnimSeq||0)+1};F.add(h.seq),$e(k,o,async()=>{if(x!=null&&x.effect_type&&x.effect_type!=="CUSTOM"){const T=P[x.effect_type];if(T){const $={...r};T(x.effect_params||{},$,async A=>{A["usedGc_"+o]=b,A._lastGC=h,A._gcAnimSeq=h.seq,await le(A)});return}}const _={...r};switch(k){case"Remplacement+":_.maxSubs=(_.maxSubs||3)+1,_.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const T=n+"Score";_[T]>0&&(_[T]--,_.log.push({text:"🚫 But annulé",type:"info"}));break}}_["usedGc_"+o]=b,_._lastGC=h,_._gcAnimSeq=h.seq,await le(_)})}function G(w,k){const f="usedCardIds_"+w,m=new Set(r[f]||[]);k.forEach(x=>m.add(x)),r[f]=[...m]}function ne(){for(const w of["p1","p2"]){const k=new Set(r["usedCardIds_"+w]||[]),f=r[w+"Team"];if(f)for(const m of["GK","DEF","MIL","ATT"])(f[m]||[]).forEach(x=>{x.used=k.has(x.cardId)})}}function fe(){var Ze,Qe,nt,gt,ce,_e;if(r.phase==="reveal")return ye();if(r.phase==="midfield")return Ee();if(r.phase==="finished")return q();const w=r[o+"Team"],k=r[n+"Team"];ne();const f=r[o+"Score"],m=r[n+"Score"],x=r[o+"Name"],b=r[n+"Name"],h=r.phase===o+"-attack",_=r.phase===o+"-defense",T=Array.isArray(r["selected_"+o])?r["selected_"+o]:[],$=T.map(Q=>Q.cardId),A=window.innerWidth>=700,S=r[o+"Subs"]||[],B=r["usedSubIds_"+o]||[],D=S.filter(Q=>!B.includes(Q.cardId)),R=r["gcCardsFull_"+o]||[],O=r["usedGc_"+o]||[],X=R.filter(Q=>!O.includes(Q.id)),U=r.boostOwner===o&&!r.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(Q=>(k[Q]||[]).some(ue=>!ue.used)),se=[...w.MIL||[],...w.ATT||[]].filter(Q=>!Q.used),ge=h&&ee&&se.length===0?[...w.GK||[],...w.DEF||[]].filter(Q=>!Q.used).map(Q=>Q.cardId):[];function me(Q,ue,Z){var kt,Ut;const pe=Q._gcDef,qe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[pe==null?void 0:pe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ke={purple:"#b06ce0",light_blue:"#00d4ef"}[pe==null?void 0:pe.color]||"#b06ce0",tt=(pe==null?void 0:pe.name)||Q.gc_type,it=(pe==null?void 0:pe.effect)||((kt=Ke[Q.gc_type])==null?void 0:kt.desc)||"",rt=pe!=null&&pe.image_url?`/manager-wars/icons/${pe.image_url}`:null,st=((Ut=Ke[Q.gc_type])==null?void 0:Ut.icon)||"⚡",ct=Math.round(Z*.22),$t=Math.round(Z*.22),pt=Z-ct-$t,ht=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${Q.id}" data-gc-type="${Q.gc_type}"
        style="box-sizing:border-box;width:${ue}px;height:${Z}px;border-radius:10px;border:2px solid ${ke};background:${qe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
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
      </div>`}function he(Q,ue){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Q}px;height:${ue}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ue*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ue*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ue*.09)}px;color:#000;font-weight:900">+${r.boostValue}</div>
      </div>`}const ve=(Q,ue)=>ue?he(130,175):me(Q,130,175),je=(Q,ue)=>ue?he(68,95):me(Q,68,95),Me=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Re=h?Ae(o)?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${T.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Me};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:_?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${T.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${b}</div>`,Be=h&&!Ae(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':h||_?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${T.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${D.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':D.map(Q=>`<div class="pvp-sub-btn" data-sub-id="${Q.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(Q,A?76:44,A?100:58)}</div>`).join("")}
    </div>`,Fe=h?"attack":_?"defense":"idle",Ve=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(w,r[o+"Formation"],Fe,$,300,300,ge)}
      </div>
    </div>`;function Ne(Q){if(Q.type==="duel"&&(Q.homeTotal!=null||Q.aiTotal!=null)){const ue=(Q.homeTotal||0)>=(Q.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(Q.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Q.homePlayers||[]).map(Z=>dt(Z)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ue?20:14}px;font-weight:900;color:${ue?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${Q.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ue?14:20}px;font-weight:900;color:${ue?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${Q.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Q.aiPlayers||[]).map(Z=>dt(Z)).join("")}
            </div>
          </div>
          ${Q.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${Q.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${Q.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${Q.type==="goal"?700:400};padding:3px 2px">${Q.text||""}</div>`}const He=(()=>{var ue,Z;if(_&&((ue=r.pendingAttack)!=null&&ue.players)){const pe=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${b} ATTAQUE — Défendez !</div>
          ${ot((pe.players||[]).map(qe=>({...qe,used:!1})),"#ff6b6b",pe.total)}
        </div>`}if(h&&((Z=r.pendingAttack)!=null&&Z.players)){const pe=r.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((pe.players||[]).map(qe=>({...qe,used:!1})),"#00ff88",pe.total)}
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
      </button>`;et(e),e.style.overflow="hidden",A?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ue}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ve}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Re}${Be}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${X.map(Q=>ve(Q,!1)).join("")}
            ${U?ve(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ue}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(w,r[o+"Formation"],Fe,$,300,300,ge)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${X.map(Q=>je(Q,!1)).join("")}
            ${U?je(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${h&&D.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${h&&D.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${h&&D.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${h&&D.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${D.length}</div>
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
          <div>${Re}${Be}</div>
        </div>
      </div>`;function Je(){const Q=e.querySelector(".match-screen");if(!Q)return;const ue=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Q.style.height=ue+"px",Q.style.minHeight=ue+"px",Q.style.maxHeight=ue+"px",Q.style.overflow="hidden";const Z=e.querySelector("#mobile-action-bar"),pe=e.querySelector("#mobile-play-area");Z&&pe&&(pe.style.paddingBottom=Z.offsetHeight+"px")}if(Je(),setTimeout(Je,120),setTimeout(Je,400),V||(V=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Je),window.visualViewport.addEventListener("scroll",Je)),window.addEventListener("resize",Je)),function(){const ue=e.querySelector(".terrain-wrapper svg");ue&&(ue.removeAttribute("width"),ue.removeAttribute("height"),ue.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ue.setAttribute("viewBox","-26 -26 352 352"),ue.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(Q=>{Q.addEventListener("click",()=>{if(!h&&!_)return;const ue=Q.dataset.cardId,Z=Q.dataset.role,pe=(w[Z]||[]).find(it=>it.cardId===ue);if(!pe||pe.used)return;const qe=ge.includes(ue);if(h&&!["MIL","ATT"].includes(Z)&&!qe)return;Array.isArray(r["selected_"+o])||(r["selected_"+o]=[]);const ke=r["selected_"+o],tt=ke.findIndex(it=>it.cardId===ue);tt>-1?ke.splice(tt,1):ke.length<3&&ke.push({...pe,_role:Z}),fe()})}),e.querySelectorAll(".match-used-hit").forEach(Q=>{Q.addEventListener("click",()=>xe(Q.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(Q=>{Q.addEventListener("click",()=>xe())}),(Ze=e.querySelector("#pvp-sub-open"))==null||Ze.addEventListener("click",()=>xe()),e.querySelectorAll(".pvp-gc-mini").forEach(Q=>{Q.addEventListener("click",()=>Se(Q.dataset.gcId,Q.dataset.gcType))}),(Qe=e.querySelector("#pvp-boost-card"))==null||Qe.addEventListener("click",()=>Le()),(nt=e.querySelector("#pvp-action"))==null||nt.addEventListener("click",Q=>{h?Q.currentTarget.dataset.pass==="1"||!Ae(o)?J():re():_&&ie()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&de()}),(ce=e.querySelector("#pvp-view-opp"))==null||ce.addEventListener("click",()=>oe()),(_e=e.querySelector("#pvp-toggle-history"))==null||_e.addEventListener("click",()=>K()),N&&(clearInterval(N),N=null),(h||_)&&!u){let Q=30,ue=!1;const Z=()=>document.getElementById("pvp-timer"),pe=()=>{Z()&&(Z().textContent=Q+"s",Z().style.color=ue?"#ff4444":"#fff")};pe(),N=setInterval(()=>{Q--,Q<0?ue?(clearInterval(N),N=null,h&&!Ae(o)?J():de()):(ue=!0,Q=15,pe()):pe()},1e3)}}function ye(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${r[n+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await le({phase:"midfield"})},5e3)}let ze=!1;function Ee(){if(ze)return;const w=r[o+"Team"].MIL||[],k=r[n+"Team"].MIL||[];function f(X){return X.reduce((U,ee)=>U+Ie(ee,"MIL"),0)}function m(X){let U=0;for(let ee=0;ee<X.length-1;ee++){const se=at(X[ee],X[ee+1]);se==="#00ff88"?U+=2:se==="#FFD700"&&(U+=1)}return U}const x=f(w)+m(w),b=f(k)+m(k),h=x>=b;function _(X,U,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${U}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${X.map((se,ge)=>{const me=ge<X.length-1?at(se,X[ge+1]):null,he=!me||me==="#ff3333"||me==="#cc2222",ve=me==="#00ff88"?"+2":me==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ee}" data-idx="${ge}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...se,note:Ie(se,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ge<X.length-1?`<div class="duel-link duel-link-${ee}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${he?"rgba(255,255,255,0.12)":me};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${he?"none":`0 0 8px ${me}`}">
              ${ve?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${me}">${ve}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ee}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${f(X)} + ${m(X)} liens = <b style="color:#fff">${f(X)+m(X)}</b>
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
      ${_(w,r[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${_(k,r[n+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const T=(X,U)=>e.querySelectorAll(X).forEach((ee,se)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},U+se*90)});T(".duel-card-me",150),T(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((X,U)=>setTimeout(()=>{X.style.opacity="1"},U*70)),900),setTimeout(()=>{const X=e.querySelector("#pvp-vs");X&&(X.style.opacity="1",X.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(U=>U.style.opacity="1")},1250);function $(X,U,ee){const se=document.getElementById(X);if(!se)return;const ge=performance.now(),me=he=>{const ve=Math.min(1,(he-ge)/ee);se.textContent=Math.round(U*(1-Math.pow(1-ve,3))),ve<1?requestAnimationFrame(me):se.textContent=U};requestAnimationFrame(me)}setTimeout(()=>{$("pvp-score-me",x,800),$("pvp-score-opp",b,800)},1500);const A=r.p1Team.MIL||[],S=r.p2Team.MIL||[],B=f(A)+m(A),D=f(S)+m(S),R=B>=D?"p1":"p2";let O=r.boostValue;O==null&&(O=oi(),r.boostValue=O,r.boostOwner=R,r.boostUsed=!1),ze=!0,setTimeout(()=>{const X=e.querySelector("#duel-row-"+(h?"me":"opp")),U=e.querySelector("#duel-row-"+(h?"opp":"me")),ee=document.getElementById("pvp-score-me"),se=document.getElementById("pvp-score-opp"),ge=h?ee:se,me=h?se:ee;ge&&(ge.style.fontSize="80px",ge.style.color=h?"#FFD700":"#ff6b6b",ge.style.animation="duelPulse .5s ease"+(h?",duelGlow 1.5s ease infinite .5s":"")),me&&(me.style.opacity="0.25"),setTimeout(()=>{X&&(X.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",X.style.zIndex="5"),setTimeout(()=>{const he=document.getElementById("duel-shock");he&&(he.style.animation="shockwave .5s ease-out forwards"),U&&(U.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Me;const he=document.getElementById("pvp-duel-finale");if(!he)return;const ve=r.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+O+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",je=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;he.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(h?"⚽ "+r[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+r[n+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ve+je,he.style.transition="opacity .45s ease",he.style.opacity="1",he.style.pointerEvents="auto",(Me=document.getElementById("pvp-start-match"))==null||Me.addEventListener("click",async()=>{const Re=R;await le({phase:Re+"-attack",attacker:Re,round:1,boostValue:O,boostUsed:!1,boostOwner:Re})})},600)},700)},2800)}function be(w,k,f,m,x){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const h=Array.from({length:10},(A,S)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${S%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][S%8]}</div>`).join(""),_={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};b.innerHTML=`
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
        ${w.map(A=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${_[A.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${A.portrait?`<img src="${A.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(A.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(b);let T=!1;const $=()=>{T||(T=!0,b.remove(),setTimeout(()=>x(),50))};b.addEventListener("click",$),setTimeout($,3500)}function $e(w,k,f){var O,X;const m=(r.gcDefs||[]).find(U=>{var ee;return U.name===w||((ee=U.name)==null?void 0:ee.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),x={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[m==null?void 0:m.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",b={purple:"#b06ce0",light_blue:"#00d4ef"}[m==null?void 0:m.color]||"#b06ce0",h=(m==null?void 0:m.name)||w,_=(m==null?void 0:m.effect)||((O=Ke[w])==null?void 0:O.desc)||"",T=m!=null&&m.image_url?`/manager-wars/icons/${m.image_url}`:null,$=((X=Ke[w])==null?void 0:X.icon)||"⚡",S=k===o?"Vous":r[k+"Name"]||"Adversaire",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",B.innerHTML=`
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
          ${T?`<img src="${T}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${$}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${_}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(B);let D=!1;const R=()=>{D||(D=!0,B.remove(),setTimeout(()=>f&&f(),50))};B.addEventListener("click",R),setTimeout(R,3e3)}function Se(w,k){var B,D,R,O;const m=(r["gcCardsFull_"+o]||[]).find(X=>X.id===w),x=m==null?void 0:m._gcDef,b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",_=(x==null?void 0:x.name)||k,T=(x==null?void 0:x.effect)||((B=Ke[k])==null?void 0:B.desc)||"Carte spéciale.",$=x!=null&&x.image_url?`/manager-wars/icons/${x.image_url}`:null,A=((D=Ke[k])==null?void 0:D.icon)||"⚡",S=document.createElement("div");S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",S.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${h};background:${b};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${h}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${_.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${_}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$?`<img src="${$}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${A}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${T}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(S),(R=S.querySelector("#pvp-gc-back"))==null||R.addEventListener("click",()=>S.remove()),(O=S.querySelector("#pvp-gc-use"))==null||O.addEventListener("click",()=>{S.remove(),H(w,k)})}function Le(){var m;const w=r[o+"Team"],k=Object.entries(w).flatMap(([x,b])=>(b||[]).filter(h=>!h.used).map(h=>({...h,_line:x})));if(!k.length)return;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",f.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${r.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${k.map(x=>{const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[x._line]||"#555",h=Ie(x,x._line)+(x.boost||0);return`<div class="bp-item" data-cid="${x.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${b};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${h}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(f),(m=f.querySelector("#bp-close"))==null||m.addEventListener("click",()=>f.remove()),f.querySelectorAll(".bp-item").forEach(x=>{x.addEventListener("click",async()=>{const b=x.dataset.cid,h=k.find(T=>T.cardId===b);if(!h)return;const _=(w[h._line]||[]).find(T=>T.cardId===b);_&&(_.boost=(_.boost||0)+r.boostValue),f.remove(),await le({[o+"Team"]:w,boostUsed:!0})})})}function xe(w=null){var D,R;if(!(r.phase===o+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const f=r[o+"Team"],m=r["usedSubIds_"+o]||[],x=r.maxSubs||3;if(m.length>=x){p(`Maximum ${x} remplacements atteint`,"warning");return}const b=Object.entries(f).flatMap(([O,X])=>(X||[]).filter(U=>U.used).map(U=>({...U,_line:O}))),h=(r[o+"Subs"]||[]).filter(O=>!m.includes(O.cardId));if(!b.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!h.length){p("Aucun remplaçant disponible","warning");return}let _=Math.max(0,b.findIndex(O=>O.cardId===w));const T=((D=b[_])==null?void 0:D._line)||((R=b[_])==null?void 0:R.job);let $=Math.max(0,h.findIndex(O=>O.job===T)),A=!1;const S=document.createElement("div");S.id="pvp-sub-overlay",S.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function B(){var me,he,ve,je,Me,Re;const O=b[_],X=h[$],U=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(U*1.35),se=Be=>`background:rgba(255,255,255,0.12);border:none;color:${Be?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Be?"default":"pointer"};flex-shrink:0`;S.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${m.length}/${x})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${se($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${X?Ye({...X,used:!1,boost:0},U,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${se($>=h.length-1)}" ${$>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${h.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${se(_===0)}" ${_===0?"disabled":""}>▲</button>
          <div>${O?Ye({...O,used:!1,boost:0},U,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${se(_>=b.length-1)}" ${_>=b.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${_+1}/${b.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(me=S.querySelector("#psub-close"))==null||me.addEventListener("click",()=>S.remove()),(he=S.querySelector("#pout-up"))==null||he.addEventListener("click",()=>{_>0&&(_--,B())}),(ve=S.querySelector("#pout-down"))==null||ve.addEventListener("click",()=>{_<b.length-1&&(_++,B())}),(je=S.querySelector("#pin-up"))==null||je.addEventListener("click",()=>{$>0&&($--,B())}),(Me=S.querySelector("#pin-down"))==null||Me.addEventListener("click",()=>{$<h.length-1&&($++,B())});const ge=(Be,Oe,Fe,Ve)=>{const Ne=S.querySelector("#"+Be);if(!Ne)return;let He=0;Ne.addEventListener("touchstart",Ue=>{He=Ue.touches[0].clientY},{passive:!0}),Ne.addEventListener("touchend",Ue=>{const Je=Ue.changedTouches[0].clientY-He;if(Math.abs(Je)<30)return;const Ze=Oe();Je<0&&Ze<Ve-1?(Fe(Ze+1),B()):Je>0&&Ze>0&&(Fe(Ze-1),B())},{passive:!0})};ge("pin-panel",()=>$,Be=>$=Be,h.length),ge("pout-panel",()=>_,Be=>_=Be,b.length),(Re=S.querySelector("#psub-confirm"))==null||Re.addEventListener("click",async Be=>{if(Be.preventDefault(),Be.stopPropagation(),A)return;A=!0;const Oe=b[_],Fe=h[$];if(!Oe||!Fe)return;const Ve=Oe._line,Ne=(f[Ve]||[]).findIndex(Je=>Je.cardId===Oe.cardId);if(Ne===-1){p("Erreur : joueur introuvable","error"),S.remove();return}const He={...Fe,_line:Ve,position:Oe.position,used:!1,boost:0};f[Ve].splice(Ne,1,He);const Ue=[...m,Fe.cardId];S.remove(),W(Oe,Fe,async()=>{await le({[o+"Team"]:f,[n+"Team"]:r[n+"Team"],["usedSubIds_"+o]:Ue})})})}document.body.appendChild(S),B()}function W(w,k,f){const m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const b=(T,$,A)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${$};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${A}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${m[T.job]||"#555"};border:3px solid ${$};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(T)?`<img src="${Pe(T)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(T.name||"").slice(0,12)}</div>
    </div>`;x.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${b(k,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${b(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(x);let h=!1;const _=()=>{h||(h=!0,x.remove(),setTimeout(()=>f(),50))};x.addEventListener("click",_),setTimeout(_,2200)}function oe(){var k;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${r[n+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(r[n+"Team"],r[n+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),(k=w.querySelector("#pvp-opp-close"))==null||k.addEventListener("click",()=>w.remove())}function K(){var m;const w=r.log||[],k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const f=x=>{var h,_,T;if(x.type==="duel"){const $=x.isGoal,A=x.homeScored&&o==="p1"||!x.homeScored&&$&&o==="p2",S=x.homeScored?"#FFD700":$?"#ff6b6b":"rgba(255,255,255,0.3)",B=$?A?"⚽ BUT !":"⚽ BUT adversaire !":(h=x.homePlayers)!=null&&h.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${$?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${S};margin-bottom:4px">
          <div style="font-size:9px;color:${S};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${B}</div>
          ${(_=x.homePlayers)!=null&&_.length?`<div style="margin-bottom:3px">${ot(x.homePlayers,"rgba(255,255,255,0.7)",x.homeTotal)}</div>`:""}
          ${(T=x.aiPlayers)!=null&&T.length?`<div style="opacity:0.7">${ot(x.aiPlayers,"#ff6b6b",x.aiTotal)}</div>`:""}
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
      </div>`,document.body.appendChild(k),(m=k.querySelector("#pvp-hist-close"))==null||m.addEventListener("click",()=>k.remove())}async function J(){if(r.phase!==o+"-attack")return;const w=o==="p1"?"p2":"p1",k=(r.round||0)+1,f=[...r.log||[]];f.push({type:"info",text:`⏭️ ${r[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const m=Ce(r),x=Ae(w),b=m||!x?"finished":w+"-attack";await le({["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:b,attacker:w,round:k,log:f}),b==="finished"&&await I(r)}async function re(){const w=r[o+"Team"],k=!["GK","DEF","MIL","ATT"].some(b=>(r[n+"Team"][b]||[]).some(h=>!h.used)),f=(r["selected_"+o]||[]).map(b=>{const h=(w[b._role]||[]).find(B=>B.cardId===b.cardId)||b,_=k&&["GK","DEF"].includes(b._role),T=w[b._role]||[],$=T.findIndex(B=>B.cardId===b.cardId),A=lt(T.length),S=$>=0?A[$]:h._col??1;return{...h,_line:b._role,_col:S,..._?{note_a:Math.max(1,Number(h.note_a)||0)}:{}}});if(!f.length)return;const m=Nt(f,r.modifiers[o]||{});G(o,f.map(b=>b.cardId)),f.forEach(b=>{const h=(w[b._role]||[]).find(_=>_.cardId===b.cardId);h&&(h.used=!0)}),r["selected_"+o]=[],fe();const x=[...r.log||[]];if(k){const b=(r[o+"Score"]||0)+1,h=f.map(S=>({name:S.name,note:Ie(S,S._line||"ATT"),portrait:Pe(S),job:S.job}));x.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:h,homeTotal:m.total,aiTotal:0});const _=(r.round||0)+1,T=o==="p1"?"p2":"p1",$={...r,[o+"Team"]:w,[o+"Score"]:b},A=Ce($);C.add(_),be(h,b,r[n+"Score"]||0,!0,async()=>{await le({[o+"Team"]:w,[o+"Score"]:b,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:A?"finished":T+"-attack",attacker:T,round:_,log:x}),A&&await I({...r,[o+"Score"]:b})});return}x.push({type:"pending",text:`⚔️ ${r[o+"Name"]} attaque (${m.total})`}),await le({[o+"Team"]:w,[n+"Team"]:r[n+"Team"],pendingAttack:{...m,players:f,side:o},["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},phase:n+"-defense",log:x})}async function ie(){const w=r[o+"Team"],k=(r["selected_"+o]||[]).map(O=>{const X=(w[O._role]||[]).find(me=>me.cardId===O.cardId)||O,U=w[O._role]||[],ee=U.findIndex(me=>me.cardId===O.cardId),se=lt(U.length),ge=ee>=0?se[ee]:X._col??1;return{...X,_line:O._role,_col:ge}}),f=Rt(k,r.modifiers[o]||{});G(o,k.map(O=>O.cardId)),k.forEach(O=>{const X=(w[O._role]||[]).find(U=>U.cardId===O.cardId);X&&(X.used=!0)}),r["selected_"+o]=[],fe();const m=Ot(r.pendingAttack.total,f.total,r.modifiers[o]||{}),x=r.pendingAttack.side,b=m==="attack"||(m==null?void 0:m.goal),h=x==="p1"?"p2":"p1",_=(r.round||0)+1,T=(r.pendingAttack.players||[]).map(O=>({name:O.name,note:Ie(O,O._line||"ATT"),portrait:Pe(O),job:O.job})),$=[...r.log||[]];$.push({type:"duel",isGoal:b,homeScored:b&&x===o,text:b?`⚽ BUT de ${r[x+"Name"]} ! (${r.pendingAttack.total} vs ${f.total})`:`✋ Attaque stoppée (${r.pendingAttack.total} vs ${f.total})`,homePlayers:T,aiPlayers:k.map(O=>({name:O.name,note:Ie(O,O._line||"DEF"),portrait:Pe(O),job:O.job})),homeTotal:r.pendingAttack.total,aiTotal:f.total});const A=b?(r[x+"Score"]||0)+1:r[x+"Score"]||0,S={...r,[o+"Team"]:w,[x+"Score"]:A},B=Ce(S),D=B?"finished":h+"-attack",R=async()=>{await le({[o+"Team"]:w,[n+"Team"]:r[n+"Team"],[x+"Score"]:A,["selected_"+o]:[],modifiers:{...r.modifiers,[o]:{}},pendingAttack:null,phase:D,attacker:h,round:_,log:$}),(D==="finished"||B)&&await I({...r,[x+"Score"]:A})};if(b){const O=x===o,X=O?A:r[o+"Score"]||0,U=O?r[n+"Score"]||0:A;C.add(_),be(T,X,U,O,R)}else await R()}function ae(w){return["MIL","ATT"].some(k=>(w[k]||[]).some(f=>!f.used))}function Te(w){return["GK","DEF","MIL","ATT"].some(k=>(w[k]||[]).some(f=>!f.used))}function we(w){return Te(w)&&!ae(w)}function Ae(w){const k=r[w+"Team"],f=r[(w==="p1"?"p2":"p1")+"Team"];return!!(ae(k)||!Te(f)&&we(k))}function Ce(w){const k=["MIL","ATT"].some($=>(w.p1Team[$]||[]).some(A=>!A.used)),f=["MIL","ATT"].some($=>(w.p2Team[$]||[]).some(A=>!A.used)),m=Te(w.p1Team),x=Te(w.p2Team);return!k&&!(!x&&m)&&(!f&&!(!m&&x))}function De(w){const k=w.p1Score||0,f=w.p2Score||0;return k===f?null:k>f?y.home_id:y.away_id}async function I(w){try{const k=De(w),f=k?y.home_id===k?y.away_id:y.home_id:null;await E.from("matches").update({status:"finished",winner_id:k,home_score:w.p1Score||0,away_score:w.p2Score||0}).eq("id",i),k&&f&&ki(k,f).catch(()=>{})}catch(k){console.error("[PvP] finishMatch:",k)}}function q(){var x;const w=r[o+"Score"],k=r[n+"Score"],f=w>k,m=w===k;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${f?"🏆":m?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${f?"Victoire !":m?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${k}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(x=document.getElementById("pvp-home"))==null||x.addEventListener("click",()=>{try{E.removeChannel(te)}catch{}We(e),l("home")})}fe()}const zt="#1A6B3C",xt="#D4A017";async function Jn(e,t){var s;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(s=t.state.params)==null?void 0:s.openLeagueId;if(i){t.state.params.openLeagueId=null,await bt(e,t,i);return}await _t(e,t)}async function _t(e,t,i="waiting"){var M;const{state:s}=t,c=s.profile.id,{data:d}=await E.from("mini_league_members").select("league_id").eq("user_id",c),a=(d||[]).map(L=>L.league_id),{data:l,error:p}=await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),o=p?(await E.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],g=(a.length?await E.from("mini_leagues").select("*, mini_league_members(count)").in("id",a).order("created_at",{ascending:!1}):{data:[]}).data||[],v=g.filter(L=>L.status==="waiting"&&!L.is_archived),y=g.filter(L=>L.status==="active"&&!L.is_archived),z=g.filter(L=>L.is_archived||L.status==="finished"),r=o.filter(L=>!a.includes(L.id)),u=[{key:"waiting",label:"🟡 En attente",count:v.length+r.length},{key:"active",label:"🟢 En cours",count:y.length},{key:"archived",label:"📁 Archivées",count:z.length}];e.innerHTML=`
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
      ${i==="waiting"?Xn(v,r,c):i==="active"?Zn(y,c):Qn(z,c)}
    </div>
  </div>`,(M=document.getElementById("ml-create-btn"))==null||M.addEventListener("click",()=>er(e,t)),e.querySelectorAll(".ml-tab").forEach(L=>L.addEventListener("click",()=>_t(e,t,L.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(L=>L.addEventListener("click",()=>bt(e,t,L.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(L=>L.addEventListener("click",N=>{N.stopPropagation(),ko(e,t,L.dataset.join,L.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(L=>L.addEventListener("click",N=>{N.stopPropagation(),xi(e,t,L.dataset.delete,L.dataset.name,i)}))}function ei(e,t,i=!1){var a,l;const s=e.creator_id===t,c=e.pot||0,d=((l=(a=e.mini_league_members)==null?void 0:a[0])==null?void 0:l.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function Xn(e,t,i){const s=[];return e.length&&(s.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),s.push(...e.map(c=>ei(c,i,!1)))),t.length&&(s.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),s.push(...t.map(c=>ei(c,i,!0)))),s.length?s.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Zn(e,t){return e.length?e.map(i=>ei(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Qn(e,t){return e.length?e.map(i=>ei(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function er(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",s=>{s.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(s=>s.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=s.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var z,r,u,M;const{toast:s}=t,c=document.getElementById("ml-name").value.trim(),d=parseInt(document.getElementById("ml-max").value)||6,a=parseInt(document.getElementById("ml-fee").value)||500,l=((z=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:z.value)||"public",p=((r=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:r.value)||"aller",o=((M=(u=document.getElementById("ml-pwd"))==null?void 0:u.value)==null?void 0:M.trim())||null;if(!c){s("Le nom est obligatoire","error");return}if(a<100){s("Mise minimum : 100 crédits","error");return}if(l==="private"&&!o){s("Mot de passe requis","error");return}const{data:n,error:g}=await E.from("mini_leagues").insert({name:c,creator_id:t.state.profile.id,type:l,password:o,mode:p,max_players:d,entry_fee:a}).select().single();if(g){s("Erreur : "+g.message,"error");return}const{data:v}=await E.from("users").select("credits").eq("id",t.state.profile.id).single();if(((v==null?void 0:v.credits)||0)<a){await E.from("mini_leagues").delete().eq("id",n.id),s(`Crédits insuffisants pour la mise (${a.toLocaleString("fr")} cr.)`,"error");return}await E.from("users").update({credits:v.credits-a}).eq("id",t.state.profile.id),await E.from("mini_leagues").update({pot:a}).eq("id",n.id),await E.from("mini_league_members").insert({league_id:n.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=v.credits-a);const y=document.getElementById("nav-credits");y&&(y.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),s(`Mini League créée ! ${a.toLocaleString("fr")} cr. déduits.`,"success"),bt(e,t,n.id)})}function tr(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),s=c=>{t.remove(),e(c)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>s(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>s(i.value.trim())),i.addEventListener("keydown",c=>{c.key==="Enter"&&s(i.value.trim())}),t.addEventListener("click",c=>{c.target===t&&s(null)})})}async function ko(e,t,i,s){const{toast:c,state:d}=t,a=d.profile.id,{data:l}=await E.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!l){c("Mini League introuvable","error");return}if(l.status!=="waiting"){c("Cette Mini League a déjà démarré","warning");return}const{count:p}=await E.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(p>=l.max_players){c("La Mini League est complète","warning");return}if(s==="private"){const r=await tr();if(r===null)return;if(l.password!==r){c("Mot de passe incorrect","error");return}}const o=l.entry_fee||100,{data:n}=await E.from("users").select("credits").eq("id",a).single();if(((n==null?void 0:n.credits)||0)<o){c(`Crédits insuffisants — il te faut ${o.toLocaleString("fr")} cr. (solde : ${((n==null?void 0:n.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:g}=await E.from("mini_league_members").insert({league_id:i,user_id:a});if(g){c("Erreur inscription : "+g.message,"error");return}const{error:v}=await E.from("users").update({credits:n.credits-o}).eq("id",a),{error:y}=await E.from("mini_leagues").update({pot:(l.pot||0)+o}).eq("id",i);(v||y)&&console.error("Erreur post-inscription:",v,y),d.profile&&(d.profile.credits=n.credits-o);const z=document.getElementById("nav-credits");z&&(z.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),c(`✅ Inscrit ! −${o.toLocaleString("fr")} cr. · Pot : ${((l.pot||0)+o).toLocaleString("fr")} cr.`,"success"),bt(e,t,i)}async function ir(e,t,i,s){const{toast:c,state:d}=t,a=d.profile.id;if(!confirm(`Te désinscrire et récupérer ${s.toLocaleString("fr")} cr. ?`))return;const{data:l}=await E.from("mini_leagues").select("pot,status").eq("id",i).single();if(!l||l.status!=="waiting"){c("Impossible — la league a déjà démarré","error");return}const{data:p}=await E.from("users").select("credits").eq("id",a).single();await E.from("mini_leagues").update({pot:Math.max(0,(l.pot||0)-s)}).eq("id",i),await E.from("users").update({credits:((p==null?void 0:p.credits)||0)+s}).eq("id",a),await E.from("mini_league_members").delete().eq("league_id",i).eq("user_id",a),d.profile&&(d.profile.credits=((p==null?void 0:p.credits)||0)+s);const o=document.getElementById("nav-credits");o&&(o.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),c(`↩️ Désinscrit · +${s.toLocaleString("fr")} cr. remboursés`,"success"),_t(e,t,"waiting")}async function xi(e,t,i,s,c){const{toast:d}=t;if(!confirm(`Supprimer définitivement "${s}" et tous ses matchs/membres ? Action irréversible.`))return;await E.from("mini_league_matches").delete().eq("league_id",i),await E.from("mini_league_members").delete().eq("league_id",i);const{error:a}=await E.from("mini_leagues").delete().eq("id",i);if(a){d("Erreur suppression ("+a.message+")","error");return}d("Mini League supprimée avec succès","success"),_t(e,t,c)}async function or(e,t,i){await E.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),_t(e,t,"archived")}async function bt(e,t,i){var V,C,F,j,te,le,de,P,Y;const{state:s,toast:c}=t,d=s.profile.id,[{data:a},{data:l},{data:p}]=await Promise.all([E.from("mini_leagues").select("*").eq("id",i).single(),E.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),E.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!a){c("Introuvable","error"),await _t(e,t);return}const o=(l||[]).some(H=>H.user_id===d),n=a.creator_id===d,g=(l||[]).map(H=>H.user).filter(Boolean),v=To(g,p||[]),y=(p||[]).filter(H=>H.matchday===a.current_day),z=a.pot||0,r=a.entry_fee||100,u=y.length>0&&y.every(H=>H.status==="finished"||H.status==="bye"),M=a.current_day>=a.total_days,L=(l||[]).find(H=>H.user_id===d);e.innerHTML=`
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
        ${z>0?`<div style="font-size:12px;font-weight:900;color:${xt};margin-top:4px">🏆 ${z.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${a.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${g.length}/${a.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${r} cr./joueur → Pot estimé : ${(r*g.length).toLocaleString("fr")} cr. (🥇${Math.floor(r*g.length*.7).toLocaleString("fr")} · 🥈${Math.floor(r*g.length*.2).toLocaleString("fr")} · 🥉${Math.floor(r*g.length*.1).toLocaleString("fr")})</div>
        ${g.map(H=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${H.club_color2||zt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${H.club_color1||"#fff"}">${(H.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${H.club_name||H.pseudo}</div><div style="font-size:11px;color:#999">@${H.pseudo}</div></div>
            ${H.id===a.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${n&&g.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${r} cr. × ${g.length})</button>`:""}
        ${n?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${o?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${r} cr.)</button>`}
        ${o&&!n?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${r.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${a.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${a.current_day} / ${a.total_days}</div>
        ${y.map(H=>Oi(H,g,d,o)).join("")}
        ${n&&u&&!M?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${n&&u&&M?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(a.status==="active"||a.status==="finished")&&v.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${z>0&&a.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${xt}">💰</th>`:""}
          </tr></thead>
          <tbody>${v.map((H,G)=>{const ne=z>0&&a.status==="finished"?G===0?Math.floor(z*.7):G===1?Math.floor(z*.2):G===2?Math.floor(z*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${H.userId===d?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${G===0?xt:G<3?zt:"#555"}">${["🥇","🥈","🥉"][G]||G+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${H.clubName}</div><div style="font-size:10px;color:#999">@${H.pseudo}</div></td>
              <td style="text-align:center">${H.played}</td><td style="text-align:center">${H.won}-${H.drawn}-${H.lost}</td>
              <td style="text-align:center;color:${H.goalDiff>=0?zt:"#cc2222"}">${H.goalDiff>=0?"+":""}${H.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${H.points}</td>
              ${z>0&&a.status==="finished"?`<td style="text-align:right;font-weight:700;color:${xt}">${ne?ne.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${a.status!=="waiting"&&a.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,a.status==="active"?a.current_day-1:a.current_day)},(H,G)=>G+1).reverse().map(H=>{const G=(p||[]).filter(ne=>ne.matchday===H);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${H}</div>${G.map(ne=>Oi(ne,g,d,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${n&&!a.is_archived&&a.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const N=a.status==="waiting"?"waiting":a.status==="active"?"active":"archived";if((V=document.getElementById("ml-back"))==null||V.addEventListener("click",()=>_t(e,t,N)),(C=document.getElementById("ml-start-btn"))==null||C.addEventListener("click",()=>nr(e,t,a,g)),(F=document.getElementById("ml-next-day"))==null||F.addEventListener("click",()=>rr(e,t,i)),(j=document.getElementById("ml-finish-btn"))==null||j.addEventListener("click",()=>Eo(e,t,i,z,v,g)),(te=document.getElementById("ml-join-now"))==null||te.addEventListener("click",()=>ko(e,t,i,a.type)),(le=document.getElementById("ml-leave-btn"))==null||le.addEventListener("click",()=>ir(e,t,i,r)),(de=document.getElementById("ml-delete-btn"))==null||de.addEventListener("click",()=>xi(e,t,i,a.name,"waiting")),(P=document.getElementById("ml-delete-now"))==null||P.addEventListener("click",()=>xi(e,t,i,a.name,N)),(Y=document.getElementById("ml-archive-btn"))==null||Y.addEventListener("click",()=>or(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(H=>{H.addEventListener("click",()=>{const G=y.find(ne=>ne.id===H.dataset.playMatch);G&&t.navigate("match-mini-league",{mlMatchId:G.id,leagueId:i})})}),a.status==="finished"&&L){const H=v.findIndex(G=>G.userId===d);H>=0&&H<3&&L.prize_amount>0&&setTimeout(()=>ar(e,t,a,L,H),400)}}function Oi(e,t,i,s,c=!1){const d=g=>t.find(v=>v.id===g);if(e.is_bye){const g=d(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"?"} exempté(e)</div>`}const a=d(e.home_id),l=d(e.away_id),p=e.home_id===i||e.away_id===i,o=p&&e.status==="pending"&&s&&!c,n=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${p?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${p?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(a==null?void 0:a.club_name)||(a==null?void 0:a.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?zt:"#999"}">${n}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(l==null?void 0:l.club_name)||(l==null?void 0:l.pseudo)||"?"}</div>
    ${o?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function nr(e,t,i,s){const{toast:c,state:d}=t,a=sr(s.map(o=>o.id),i.mode),l=[];a.forEach((o,n)=>o.forEach(g=>l.push({league_id:i.id,matchday:n+1,home_id:g.home||g.bye,away_id:g.away||null,is_bye:!!g.bye,status:g.bye?"bye":"pending"})));const{error:p}=await E.from("mini_league_matches").insert(l);if(p){c("Erreur calendrier : "+p.message,"error");return}await E.from("mini_leagues").update({status:"active",current_day:1,total_days:a.length}).eq("id",i.id),c(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),bt(e,t,i.id)}async function rr(e,t,i){const{data:s}=await E.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),c=(s.current_day||0)+1;if(c>(s.total_days||0)){await Eo(e,t,i,s.pot||0,null,null);return}await E.from("mini_leagues").update({current_day:c}).eq("id",i),t.toast(`Journée ${c} commencée !`,"success"),bt(e,t,i)}async function Eo(e,t,i,s,c,d){const{toast:a,state:l}=t;let p=c,o=d;if(!p){const{data:g}=await E.from("mini_league_matches").select("*").eq("league_id",i),{data:v}=await E.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);o=(v||[]).map(y=>y.user).filter(Boolean),p=To(o,g||[])}const n=[Math.floor(s*.7),Math.floor(s*.2),Math.floor(s*.1)];await Promise.all(p.slice(0,3).map((g,v)=>n[v]?E.from("mini_league_members").update({prize_amount:n[v],prize_claimed:!1}).eq("league_id",i).eq("user_id",g.userId):Promise.resolve())),await E.from("mini_leagues").update({status:"finished"}).eq("id",i),a("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),bt(e,t,i)}async function ar(e,t,i,s,c){var v,y;const{state:d,toast:a}=t,l=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],p=["🥇","🥈","🥉"][c],o=s.prize_amount||l[c]||0,n=s.prize_claimed,g=document.createElement("div");g.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",g.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${p}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${c===0?"Champion !":c===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${xt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${n?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${xt}">${o.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${c===0?"70%":c===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${n?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${xt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${o.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(g),(v=g.querySelector("#prize-close"))==null||v.addEventListener("click",()=>g.remove()),g.addEventListener("click",z=>{z.target===g&&g.remove()}),(y=g.querySelector("#claim-prize-btn"))==null||y.addEventListener("click",async()=>{const{data:z}=await E.from("users").select("credits").eq("id",d.profile.id).single();await E.from("users").update({credits:((z==null?void 0:z.credits)||0)+o}).eq("id",d.profile.id),await E.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",d.profile.id),d.profile&&(d.profile.credits=((z==null?void 0:z.credits)||0)+o);const r=document.getElementById("nav-credits");r&&(r.textContent=`💰 ${d.profile.credits.toLocaleString("fr")}`),a(`💰 +${o.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),g.remove(),bt(e,t,i.id)})}function sr(e,t){const s=e.length%2===0?[...e]:[...e,null],c=s.length;let d=s.slice(1);const a=[];for(let l=0;l<c-1;l++){const p=[],o=[s[0],...d];for(let n=0;n<c/2;n++){const g=o[n],v=o[c-1-n];g===null?p.push({bye:v}):v===null?p.push({bye:g}):p.push({home:g,away:v})}a.push(p),d=[d[d.length-1],...d.slice(0,-1)]}return t==="aller-retour"?[...a,...a.map(l=>l.map(p=>p.bye?p:{home:p.away,away:p.home}))]:a}function To(e,t){const i={};return e.forEach(s=>{i[s.id]={userId:s.id,pseudo:s.pseudo,clubName:s.club_name||s.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(s=>s.status==="finished"&&!s.is_bye&&s.home_score!=null).forEach(s=>{const c=i[s.home_id],d=i[s.away_id];!c||!d||(c.played++,d.played++,c.goalsFor+=s.home_score,c.goalsAgainst+=s.away_score,d.goalsFor+=s.away_score,d.goalsAgainst+=s.home_score,s.home_score>s.away_score?(c.won++,c.points+=3,d.lost++):s.home_score<s.away_score?(d.won++,d.points+=3,c.lost++):(c.drawn++,c.points++,d.drawn++,d.points++),c.goalDiff=c.goalsFor-c.goalsAgainst,d.goalDiff=d.goalsFor-d.goalsAgainst)}),Object.values(i).sort((s,c)=>c.points-s.points||c.goalDiff-s.goalDiff||c.goalsFor-s.goalsFor)}async function Hi(e,t,i,s){var c,d;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:s};try{const a=(d=(c=t==null?void 0:t.state)==null?void 0:c.profile)==null?void 0:d.id;try{(E.getChannels?E.getChannels():[]).forEach(p=>{const o=p.topic||"";(o.includes("matchmaking")||o.includes("pvp-match"))&&E.removeChannel(p)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}a&&(await E.rpc("cancel_matchmaking",{p_user_id:a}).catch(()=>{}),await E.from("matchmaking_queue").delete().eq("user_id",a).then(()=>{},()=>{}))}catch{}await ri(e,t,"random",({deckId:a,formation:l,starters:p,subsRaw:o,gcCardsEnriched:n,gcDefs:g,stadiumDef:v})=>{const y=z=>dr(e,t,a,l,p,o,z,g||[],i);if(!n.length){y([]);return}ni(e,n,y)})}async function dr(e,t,i,s,c,d,a=[],l=[],p,o){const{state:n,navigate:g,toast:v}=t,y=n.profile.id;let z=!1,r=null;et(e);try{await E.rpc("cancel_matchmaking",{p_user_id:y})}catch{}try{await E.from("matchmaking_queue").delete().eq("user_id",y)}catch{}const{data:u}=await E.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",p).single();if(!u){v("Match introuvable","error"),We(e),g("mini-league");return}if(u.home_id!==y&&u.away_id!==y){v("Tu ne fais pas partie de ce match","error"),We(e),g("mini-league");return}const M=u.home_id===y,L=M?u.away:u.home,N=M?u.away_id:u.home_id,V=(F,j)=>{var te;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${u.matchday}</div>
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
            <div style="font-size:12px;font-weight:700">${(L==null?void 0:L.club_name)||(L==null?void 0:L.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(te=document.getElementById("lobby-cancel"))==null||te.addEventListener("click",()=>{z=!0,clearInterval(r),We(e),g("mini-league")})},C=async(F,j)=>{z=!0,clearInterval(r),await new Promise(te=>setTimeout(te,600)),e.isConnected&&lr(e,t,F,j,a,l)};if(V(),M){let F=u.match_id;if(!F){const{data:te,error:le}=await E.from("matches").insert({home_id:y,away_id:N,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(le||!te){v("Erreur création match","error"),We(e),g("mini-league");return}F=te.id,await E.from("mini_league_matches").update({match_id:F,status:"playing"}).eq("id",p)}const j=F;r=setInterval(async()=>{if(z){clearInterval(r);return}const{data:te}=await E.from("matches").select("away_deck_id").eq("id",j).single();te!=null&&te.away_deck_id&&(clearInterval(r),C(j,!0))},1500)}else{let F=u.match_id;r=setInterval(async()=>{if(z){clearInterval(r);return}const{data:j}=await E.from("mini_league_matches").select("match_id").eq("id",p).single();j!=null&&j.match_id&&(clearInterval(r),F=j.match_id,await E.from("matches").update({away_deck_id:i}).eq("id",F),C(F,!1))},1500)}}async function lr(e,t,i,s,c=[],d=[]){var k;const{state:a,navigate:l,toast:p}=t,o=((k=a.params)==null?void 0:k.leagueId)||null,n=s?"p1":"p2",g=s?"p2":"p1",v=(c||[]).map(f=>f.id),y=(c||[]).map(f=>({id:f.id,gc_type:f.gc_type,_gcDef:f._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:z}=await E.from("matches").select("*").eq("id",i).single();if(!z){p("Match introuvable","error"),l("mini-league");return}async function r(){const[{data:f},{data:m},{data:x},{data:b}]=await Promise.all([E.rpc("get_deck_for_match",{p_deck_id:z.home_deck_id}),E.rpc("get_deck_for_match",{p_deck_id:z.away_deck_id}),E.from("users").select("id,pseudo,club_name").eq("id",z.home_id).single(),E.from("users").select("id,pseudo,club_name").eq("id",z.away_id).single()]),h=S=>({cardId:S.card_id,position:S.position,id:S.id,firstname:S.firstname,name:S.surname_encoded,country_code:S.country_code,club_id:S.club_id,job:S.job,job2:S.job2,note_g:Number(S.note_g)||0,note_d:Number(S.note_d)||0,note_m:Number(S.note_m)||0,note_a:Number(S.note_a)||0,rarity:S.rarity,skin:S.skin,hair:S.hair,hair_length:S.hair_length,clubName:S.club_encoded_name||null,clubLogo:S.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}),_=((f==null?void 0:f.starters)||[]).map(S=>h(S)),T=((m==null?void 0:m.starters)||[]).map(S=>h(S)),$=(f==null?void 0:f.formation)||"4-4-2",A=(m==null?void 0:m.formation)||"4-4-2";return{p1Team:(()=>{const S=yt(_,$);return stadiumDef?Ht(S,stadiumDef):S})(),p2Team:yt(T,A),p1Subs:(()=>{const S=((f==null?void 0:f.subs)||[]).map(B=>h(B));return stadiumDef&&ii(S,stadiumDef),S})(),p2Subs:((m==null?void 0:m.subs)||[]).map(S=>h(S)),p1Formation:$,p2Formation:A,p1Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 1",p2Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:s?v:[],gc_p2:s?[]:v,gcCardsFull_p1:s?y:[],gcCardsFull_p2:s?[]:y,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:d||[],lastActionAt:new Date().toISOString()}}let u=z.game_state&&Object.keys(z.game_state).length?z.game_state:null;if(!u)if(s){u=await r();const{data:f}=await E.from("matches").select("game_state").eq("id",i).single();!(f!=null&&f.game_state)||!Object.keys(f.game_state).length?await E.from("matches").update({game_state:u,turn_user_id:z.home_id}).eq("id",i):u=f.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let f=0;f<60&&!u;f++){await new Promise(x=>setTimeout(x,400));const{data:m}=await E.from("matches").select("game_state").eq("id",i).single();m!=null&&m.game_state&&Object.keys(m.game_state).length&&(u=m.game_state)}if(!u){p("Erreur de synchronisation","error"),l("mini-league");return}u.gc_p2=v,u.gcCardsFull_p2=y,await E.from("matches").update({game_state:u}).eq("id",i)}let M=!1,L=!1,N=!1,V=null,C=!1;const F=new Set,j=new Set;function te(f){var S,B;try{E.removeChannel(le)}catch{}const m=u[n+"Score"]||0,x=u[g+"Score"]||0;if(!N){N=!0;const D=f.winner_id||(m>x?a.profile.id:x>m?"opp":null),R=D===a.profile.id?"win":D?"loss":null;R&&hi(()=>Promise.resolve().then(()=>no),void 0).then(O=>O.applyOwnEvolution(a.profile.id,R)).catch(()=>{})}if(!L){const D=u.p1Score||0,R=u.p2Score||0,O=(u.usedGc_p1||[]).length,X=(u.usedGc_p2||[]).length,U=f.winner_id||(D>R?z.home_id:R>D?z.away_id:null);(U?a.profile.id===U:a.profile.id<(s?z.away_id:z.home_id))&&(L=!0,Zi({player1Id:z.home_id,player2Id:z.away_id,score1:D,score2:R,gc1:O,gc2:X}).catch(se=>console.warn("[FriendMatch] updateStats:",se)))}let b,h;f.winner_id?(b=f.winner_id===a.profile.id,h=!1):f.forfeit?(b=m>x,h=!1):(h=m===x,b=m>x),(S=document.getElementById("pvp-end-overlay"))==null||S.remove();const _=document.createElement("div");_.id="pvp-end-overlay",_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const T=h?"🤝":b?"🏆":"😞",$=h?"MATCH NUL":b?"VICTOIRE !":"DÉFAITE",A=h?"#fff":b?"#FFD700":"#ff6b6b";_.innerHTML=`
      <div style="font-size:64px">${T}</div>
      <div style="font-size:26px;font-weight:900;color:${A}">${$}</div>
      <div style="font-size:18px">${u[n+"Name"]} ${m} – ${x} ${u[g+"Name"]}</div>
      ${f.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${b?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(_),(B=_.querySelector("#pvp-end-home"))==null||B.addEventListener("click",()=>{_.remove(),We(e),o?l("mini-league",{openLeagueId:o}):l("mini-league")})}const le=E.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},f=>{const m=f.new;try{if(m.status==="finished"||m.forfeit){if(M||(M=!0,V&&(clearInterval(V),V=null),m.game_state&&(u=m.game_state),u.phase==="finished"&&!m.forfeit&&document.getElementById("pvp-home")))return;te(m);return}if(m.game_state){const x=u;u=m.game_state;const b=u._lastGC;if(b&&b.seq&&!j.has(b.seq)&&(j.add(b.seq),b.by!==n)){Se(b.type,b.by,()=>ye());return}const h=x[n+"Score"]||0,_=x[g+"Score"]||0,T=u[n+"Score"]||0,$=u[g+"Score"]||0,A=T>h,S=$>_;if((A||S)&&!F.has(u.round)){F.add(u.round);const B=[...u.log||[]].reverse().find(R=>R.isGoal),D=((B==null?void 0:B.homePlayers)||[]).map(R=>({name:R.name,note:R.note,portrait:R.portrait,job:R.job}));$e(D,T,$,A,()=>ye());return}ye()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function de(f){Object.assign(u,f),u.lastActionAt=new Date().toISOString();const{error:m}=await E.from("matches").update({game_state:u}).eq("id",i);m&&p("Erreur de synchronisation","error");try{ye()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function P(){if(M)return;M=!0,V&&(clearInterval(V),V=null);const f=s?z.away_id:z.home_id,m=s?"p2":"p1",x=s?"p1":"p2",b={...u,[m+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await E.from("matches").update({status:"finished",forfeit:!0,winner_id:f,home_score:b.p1Score||0,away_score:b.p2Score||0,game_state:b}).eq("id",i)}catch{}try{E.removeChannel(le)}catch{}setTimeout(()=>{We(e),l("mini-league")},800)}const Y={BOOST_STAT:({value:f=1,count:m=1,roles:x=[]},b,h)=>{const _=b[n+"Team"],T=Object.entries(_).filter(([$])=>!x.length||x.includes($)).flatMap(([$,A])=>A.filter(S=>!S.used).map(S=>({...S,_line:$})));if(!T.length){b.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),h(b);return}H(T,m,`Choisir ${m} joueur(s) à booster (+${f})`,$=>{$.forEach(A=>{const S=(_[A._line]||[]).find(B=>B.cardId===A.cardId);S&&(S.boost=(S.boost||0)+f,b.log.push({text:`⚡ +${f} sur ${S.name}`,type:"info"}))}),b[n+"Team"]=_,h(b)})},DEBUFF_STAT:({value:f=1,count:m=1,roles:x=[],target:b="ai"},h,_)=>{const T=b==="home"?n:g,$=h[T+"Team"],A=b==="home"?"allié":"adverse",S=Object.entries($).filter(([B])=>!x.length||x.includes(B)).flatMap(([B,D])=>D.map(R=>({...R,_line:B})));if(!S.length){h.log.push({text:`🎯 Aucun joueur ${A}`,type:"info"}),_(h);return}H(S,m,`Choisir ${m} joueur(s) ${A}(s) (-${f})`,B=>{B.forEach(D=>{const R=($[D._line]||[]).find(O=>O.cardId===D.cardId);R&&(R.boost=(R.boost||0)-f,h.log.push({text:`🎯 -${f} sur ${R.name}`,type:"info"}))}),h[T+"Team"]=$,_(h)})},GRAY_PLAYER:({count:f=1,roles:m=[],target:x="ai"},b,h)=>{const _=x==="home"?n:g,T=b[_+"Team"],$=x==="home"?"allié":"adverse",A=Object.entries(T).filter(([S])=>!m.length||m.includes(S)).flatMap(([S,B])=>B.filter(D=>!D.used).map(D=>({...D,_line:S})));if(!A.length){b.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),h(b);return}H(A,f,`Choisir ${f} joueur(s) ${$}(s) à exclure`,S=>{const B="usedCardIds_"+_,D=new Set(b[B]||[]);S.forEach(R=>{const O=(T[R._line]||[]).find(X=>X.cardId===R.cardId);O&&(O.used=!0,D.add(R.cardId),b.log.push({text:`❌ ${O.name} exclu !`,type:"info"}))}),b[B]=[...D],b[_+"Team"]=T,h(b)})},REVIVE_PLAYER:({count:f=1,roles:m=[]},x,b)=>{const h=x[n+"Team"],_=Object.entries(h).filter(([T])=>!m.length||m.includes(T)).flatMap(([T,$])=>$.filter(A=>A.used).map(A=>({...A,_line:T})));if(!_.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),b(x);return}H(_,f,`Choisir ${f} joueur(s) à ressusciter`,T=>{T.forEach($=>{const A=(h[$._line]||[]).find(S=>S.cardId===$.cardId);A&&(A.used=!1,x.log.push({text:`💫 ${A.name} ressuscité !`,type:"info"}))}),x[n+"Team"]=h,b(x)})},REMOVE_GOAL:({},f,m)=>{const x=g+"Score";f[x]>0?(f[x]--,f.log.push({text:"🚫 Dernier but annulé !",type:"info"})):f.log.push({text:"🚫 Aucun but à annuler",type:"info"}),m(f)},ADD_GOAL_DRAW:({},f,m)=>{f[n+"Score"]===f[g+"Score"]?(f[n+"Score"]++,f.log.push({text:"🎯 But bonus !",type:"info"})):f.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),m(f)},ADD_SUB:({value:f=1},m,x)=>{m.maxSubs=(m.maxSubs||3)+f,m.log.push({text:`🔄 +${f} remplacement(s)`,type:"info"}),x(m)},CUSTOM:({},f,m)=>m(f)};function H(f,m,x,b){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let _=[];function T(){var A,S;const $=f.map(B=>{const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[B._line]||"#555",R=Ie(B,B._line)+(B.boost||0),X=_.find(ee=>ee.cardId===B.cardId)?"#FFD700":"rgba(255,255,255,0.25)",U=B.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${B.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${X};background:${D};overflow:hidden;cursor:pointer;${U}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${B.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${R}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${B._line}</div>
        </div>`}).join("");h.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${x}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${_.length}/${m}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${$}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${_.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${_.length}/${m})
          </button>
        </div>`,(A=h.querySelector("#pp-close"))==null||A.addEventListener("click",()=>h.remove()),h.querySelectorAll(".pp-item").forEach(B=>{B.addEventListener("click",()=>{const D=B.dataset.cid,R=f.find(X=>X.cardId===D),O=_.findIndex(X=>X.cardId===D);R&&(O>-1?_.splice(O,1):_.length<m&&_.push(R),T())})}),(S=h.querySelector("#pp-confirm"))==null||S.addEventListener("click",()=>{h.remove(),b(_)})}T(),document.body.appendChild(h)}async function G(f,m){const b=(u["gcCardsFull_"+n]||[]).find($=>$.id===f),h=(b==null?void 0:b._gcDef)||(u.gcDefs||[]).find($=>{var A;return $.name===m||((A=$.name)==null?void 0:A.toLowerCase().trim())===(m==null?void 0:m.toLowerCase().trim())}),_=[...u["usedGc_"+n]||[],f],T={type:m,by:n,seq:(u._gcAnimSeq||0)+1};j.add(T.seq),Se(m,n,async()=>{if(h!=null&&h.effect_type&&h.effect_type!=="CUSTOM"){const A=Y[h.effect_type];if(A){const S={...u};A(h.effect_params||{},S,async B=>{B["usedGc_"+n]=_,B._lastGC=T,B._gcAnimSeq=T.seq,await de(B)});return}}const $={...u};switch(m){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const A=g+"Score";$[A]>0&&($[A]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+n]=_,$._lastGC=T,$._gcAnimSeq=T.seq,await de($)})}function ne(f,m){const x="usedCardIds_"+f,b=new Set(u[x]||[]);m.forEach(h=>b.add(h)),u[x]=[...b]}function fe(){for(const f of["p1","p2"]){const m=new Set(u["usedCardIds_"+f]||[]),x=u[f+"Team"];if(x)for(const b of["GK","DEF","MIL","ATT"])(x[b]||[]).forEach(h=>{h.used=m.has(h.cardId)})}}function ye(){var nt,gt,ce,_e,Q,ue;if(u.phase==="reveal")return ze();if(u.phase==="midfield")return be();if(u.phase==="finished")return w();const f=u[n+"Team"],m=u[g+"Team"];fe();const x=u[n+"Score"],b=u[g+"Score"],h=u[n+"Name"],_=u[g+"Name"],T=u.phase===n+"-attack",$=u.phase===n+"-defense",A=Array.isArray(u["selected_"+n])?u["selected_"+n]:[],S=A.map(Z=>Z.cardId),B=window.innerWidth>=700,D=u[n+"Subs"]||[],R=u["usedSubIds_"+n]||[],O=D.filter(Z=>!R.includes(Z.cardId)),X=u["gcCardsFull_"+n]||[],U=u["usedGc_"+n]||[],ee=X.filter(Z=>!U.includes(Z.id)),se=u.boostOwner===n&&!u.boostUsed,ge=!["GK","DEF","MIL","ATT"].some(Z=>(m[Z]||[]).some(pe=>!pe.used)),me=[...f.MIL||[],...f.ATT||[]].filter(Z=>!Z.used),he=T&&ge&&me.length===0?[...f.GK||[],...f.DEF||[]].filter(Z=>!Z.used).map(Z=>Z.cardId):[];function ve(Z,pe,qe){var Si,Li;const ke=Z._gcDef,tt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ke==null?void 0:ke.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",it={purple:"#b06ce0",light_blue:"#00d4ef"}[ke==null?void 0:ke.color]||"#b06ce0",rt=(ke==null?void 0:ke.name)||Z.gc_type,st=(ke==null?void 0:ke.effect)||((Si=Ke[Z.gc_type])==null?void 0:Si.desc)||"",ct=ke!=null&&ke.image_url?`/manager-wars/icons/${ke.image_url}`:null,$t=((Li=Ke[Z.gc_type])==null?void 0:Li.icon)||"⚡",pt=Math.round(qe*.22),ht=Math.round(qe*.22),kt=qe-pt-ht,Ut=rt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${Z.id}" data-gc-type="${Z.gc_type}"
        style="box-sizing:border-box;width:${pe}px;height:${qe}px;border-radius:10px;border:2px solid ${it};background:${tt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${pt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Ut}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${pe-6}px">${rt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${kt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${ct?`<img src="${ct}" style="max-width:${pe-10}px;max-height:${kt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(kt*.55)}px">${$t}</span>`}
        </div>
        <div style="height:${ht}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${st.slice(0,38)}</span>
        </div>
      </div>`}function je(Z,pe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${Z}px;height:${pe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(pe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(pe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(pe*.09)}px;color:#000;font-weight:900">+${u.boostValue}</div>
      </div>`}const Me=(Z,pe)=>pe?je(130,175):ve(Z,130,175),Re=(Z,pe)=>pe?je(68,95):ve(Z,68,95),Be=B?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Oe=T?Ce(n)?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${A.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${A.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${_}</div>`,Fe=T&&!Ce(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':T||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${A.length}/3 sélectionné(s)</div>`:"",Ve=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${B?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${O.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':O.map(Z=>`<div class="pvp-sub-btn" data-sub-id="${Z.cardId}" style="cursor:pointer;flex-shrink:0">${Ye(Z,B?76:44,B?100:58)}</div>`).join("")}
    </div>`,Ne=T?"attack":$?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ft(f,u[n+"Formation"],Ne,S,300,300,he)}
      </div>
    </div>`;function Ue(Z){if(Z.type==="duel"&&(Z.homeTotal!=null||Z.aiTotal!=null)){const pe=(Z.homeTotal||0)>=(Z.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(Z.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Z.homePlayers||[]).map(qe=>dt(qe)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${pe?20:14}px;font-weight:900;color:${pe?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${Z.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${pe?14:20}px;font-weight:900;color:${pe?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${Z.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(Z.aiPlayers||[]).map(qe=>dt(qe)).join("")}
            </div>
          </div>
          ${Z.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${Z.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${Z.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${Z.type==="goal"?700:400};padding:3px 2px">${Z.text||""}</div>`}const Je=(()=>{var pe,qe;if($&&((pe=u.pendingAttack)!=null&&pe.players)){const ke=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${_} ATTAQUE — Défendez !</div>
          ${ot((ke.players||[]).map(tt=>({...tt,used:!1})),"#ff6b6b",ke.total)}
        </div>`}if(T&&((qe=u.pendingAttack)!=null&&qe.players)){const ke=u.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ot((ke.players||[]).map(tt=>({...tt,used:!1})),"#00ff88",ke.total)}
        </div>`}const Z=(u.log||[]).slice(-1)[0];return Z?'<div style="padding:2px 4px">'+Ue(Z)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ze=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${b}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${_}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Je}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(u.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",B?e.innerHTML=`
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
            ${ee.map(Z=>Me(Z,!1)).join("")}
            ${se?Me(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ze}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ft(f,u[n+"Formation"],Ne,S,300,300,he)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ee.map(Z=>Re(Z,!1)).join("")}
            ${se?Re(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${T&&O.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${T&&O.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${T&&O.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${T&&O.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${O.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(u["usedSubIds_"+n]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(u["usedSubIds_"+n]||[]).length}/${u.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Oe}${Fe}</div>
        </div>
      </div>`;function Qe(){const Z=e.querySelector(".match-screen");if(!Z)return;const pe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);Z.style.height=pe+"px",Z.style.minHeight=pe+"px",Z.style.maxHeight=pe+"px",Z.style.overflow="hidden";const qe=e.querySelector("#mobile-action-bar"),ke=e.querySelector("#mobile-play-area");qe&&ke&&(ke.style.paddingBottom=qe.offsetHeight+"px")}if(Qe(),setTimeout(Qe,120),setTimeout(Qe,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Qe),window.visualViewport.addEventListener("scroll",Qe)),window.addEventListener("resize",Qe)),function(){const pe=e.querySelector(".terrain-wrapper svg");pe&&(pe.removeAttribute("width"),pe.removeAttribute("height"),pe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",pe.setAttribute("viewBox","-26 -26 352 352"),pe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(Z=>{Z.addEventListener("click",()=>{if(!T&&!$)return;const pe=Z.dataset.cardId,qe=Z.dataset.role,ke=(f[qe]||[]).find(st=>st.cardId===pe);if(!ke||ke.used)return;const tt=he.includes(pe);if(T&&!["MIL","ATT"].includes(qe)&&!tt)return;Array.isArray(u["selected_"+n])||(u["selected_"+n]=[]);const it=u["selected_"+n],rt=it.findIndex(st=>st.cardId===pe);rt>-1?it.splice(rt,1):it.length<3&&it.push({...ke,_role:qe}),ye()})}),e.querySelectorAll(".match-used-hit").forEach(Z=>{Z.addEventListener("click",()=>W(Z.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(Z=>{Z.addEventListener("click",()=>W())}),(nt=e.querySelector("#pvp-sub-open"))==null||nt.addEventListener("click",()=>W()),e.querySelectorAll(".pvp-gc-mini").forEach(Z=>{Z.addEventListener("click",()=>Le(Z.dataset.gcId,Z.dataset.gcType))}),(gt=e.querySelector("#pvp-boost-card"))==null||gt.addEventListener("click",()=>xe()),(ce=e.querySelector("#pvp-action"))==null||ce.addEventListener("click",Z=>{T?Z.currentTarget.dataset.pass==="1"||!Ce(n)?re():ie():$&&ae()}),(_e=e.querySelector("#pvp-quit"))==null||_e.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&P()}),(Q=e.querySelector("#pvp-view-opp"))==null||Q.addEventListener("click",()=>K()),(ue=e.querySelector("#pvp-toggle-history"))==null||ue.addEventListener("click",()=>J()),V&&(clearInterval(V),V=null),(T||$)&&!M){let Z=30,pe=!1;const qe=()=>document.getElementById("pvp-timer"),ke=()=>{qe()&&(qe().textContent=Z+"s",qe().style.color=pe?"#ff4444":"#fff")};ke(),V=setInterval(()=>{Z--,Z<0?pe?(clearInterval(V),V=null,T&&!Ce(n)?re():P()):(pe=!0,Z=15,ke()):ke()},1e3)}}function ze(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${u[g+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ut(u[g+"Team"],u[g+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await de({phase:"midfield"})},5e3)}let Ee=!1;function be(){if(Ee)return;const f=u[n+"Team"].MIL||[],m=u[g+"Team"].MIL||[];function x(ee){return ee.reduce((se,ge)=>se+Ie(ge,"MIL"),0)}function b(ee){let se=0;for(let ge=0;ge<ee.length-1;ge++){const me=at(ee[ge],ee[ge+1]);me==="#00ff88"?se+=2:me==="#FFD700"&&(se+=1)}return se}const h=x(f)+b(f),_=x(m)+b(m),T=h>=_;function $(ee,se,ge){return`<div id="duel-row-${ge}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${se}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${ee.map((me,he)=>{const ve=he<ee.length-1?at(me,ee[he+1]):null,je=!ve||ve==="#ff3333"||ve==="#cc2222",Me=ve==="#00ff88"?"+2":ve==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ge}" data-idx="${he}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Ye({...me,note:Ie(me,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${he<ee.length-1?`<div class="duel-link duel-link-${ge}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${je?"rgba(255,255,255,0.12)":ve};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${je?"none":`0 0 8px ${ve}`}">
              ${Me?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ve}">${Me}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ge}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
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
      ${$(f,u[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(m,u[g+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const A=(ee,se)=>e.querySelectorAll(ee).forEach((ge,me)=>{setTimeout(()=>{ge.style.opacity="1",ge.style.transform="translateY(0) scale(1)"},se+me*90)});A(".duel-card-me",150),A(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((ee,se)=>setTimeout(()=>{ee.style.opacity="1"},se*70)),900),setTimeout(()=>{const ee=e.querySelector("#pvp-vs");ee&&(ee.style.opacity="1",ee.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(se=>se.style.opacity="1")},1250);function S(ee,se,ge){const me=document.getElementById(ee);if(!me)return;const he=performance.now(),ve=je=>{const Me=Math.min(1,(je-he)/ge);me.textContent=Math.round(se*(1-Math.pow(1-Me,3))),Me<1?requestAnimationFrame(ve):me.textContent=se};requestAnimationFrame(ve)}setTimeout(()=>{S("pvp-score-me",h,800),S("pvp-score-opp",_,800)},1500);const B=u.p1Team.MIL||[],D=u.p2Team.MIL||[],R=x(B)+b(B),O=x(D)+b(D),X=R>=O?"p1":"p2";let U=u.boostValue;U==null&&(U=oi(),u.boostValue=U,u.boostOwner=X,u.boostUsed=!1),Ee=!0,setTimeout(()=>{const ee=e.querySelector("#duel-row-"+(T?"me":"opp")),se=e.querySelector("#duel-row-"+(T?"opp":"me")),ge=document.getElementById("pvp-score-me"),me=document.getElementById("pvp-score-opp"),he=T?ge:me,ve=T?me:ge;he&&(he.style.fontSize="80px",he.style.color=T?"#FFD700":"#ff6b6b",he.style.animation="duelPulse .5s ease"+(T?",duelGlow 1.5s ease infinite .5s":"")),ve&&(ve.style.opacity="0.25"),setTimeout(()=>{ee&&(ee.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",ee.style.zIndex="5"),setTimeout(()=>{const je=document.getElementById("duel-shock");je&&(je.style.animation="shockwave .5s ease-out forwards"),se&&(se.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Be;const je=document.getElementById("pvp-duel-finale");if(!je)return;const Me=u.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+U+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Re=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;je.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(T?"⚽ "+u[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+u[g+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Me+Re,je.style.transition="opacity .45s ease",je.style.opacity="1",je.style.pointerEvents="auto",(Be=document.getElementById("pvp-start-match"))==null||Be.addEventListener("click",async()=>{const Oe=X;await de({phase:Oe+"-attack",attacker:Oe,round:1,boostValue:U,boostUsed:!1,boostOwner:Oe})})},600)},700)},2800)}function $e(f,m,x,b,h){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const T=Array.from({length:10},(B,D)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${D%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][D%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};_.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${T}</div>
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
        ${f.map(B=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[B.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${B.portrait?`<img src="${B.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(B.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(_);let A=!1;const S=()=>{A||(A=!0,_.remove(),setTimeout(()=>h(),50))};_.addEventListener("click",S),setTimeout(S,3500)}function Se(f,m,x){var U,ee;const b=(u.gcDefs||[]).find(se=>{var ge;return se.name===f||((ge=se.name)==null?void 0:ge.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",_={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",T=(b==null?void 0:b.name)||f,$=(b==null?void 0:b.effect)||((U=Ke[f])==null?void 0:U.desc)||"",A=b!=null&&b.image_url?`/manager-wars/icons/${b.image_url}`:null,S=((ee=Ke[f])==null?void 0:ee.icon)||"⚡",D=m===n?"Vous":u[m+"Name"]||"Adversaire",R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",R.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${_}66}50%{box-shadow:0 0 60px ${_}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${_};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${D} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${_};background:${h};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${T.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${T}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${S}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(R);let O=!1;const X=()=>{O||(O=!0,R.remove(),setTimeout(()=>x&&x(),50))};R.addEventListener("click",X),setTimeout(X,3e3)}function Le(f,m){var R,O,X,U;const b=(u["gcCardsFull_"+n]||[]).find(ee=>ee.id===f),h=b==null?void 0:b._gcDef,_={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",T={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",$=(h==null?void 0:h.name)||m,A=(h==null?void 0:h.effect)||((R=Ke[m])==null?void 0:R.desc)||"Carte spéciale.",S=h!=null&&h.image_url?`/manager-wars/icons/${h.image_url}`:null,B=((O=Ke[m])==null?void 0:O.icon)||"⚡",D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",D.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${T};background:${_};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${T}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${B}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${A}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(D),(X=D.querySelector("#pvp-gc-back"))==null||X.addEventListener("click",()=>D.remove()),(U=D.querySelector("#pvp-gc-use"))==null||U.addEventListener("click",()=>{D.remove(),G(f,m)})}function xe(){var b;const f=u[n+"Team"],m=Object.entries(f).flatMap(([h,_])=>(_||[]).filter(T=>!T.used).map(T=>({...T,_line:h})));if(!m.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${u.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${m.map(h=>{const _={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[h._line]||"#555",T=Ie(h,h._line)+(h.boost||0);return`<div class="bp-item" data-cid="${h.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${_};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${h.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${T}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(b=x.querySelector("#bp-close"))==null||b.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(h=>{h.addEventListener("click",async()=>{const _=h.dataset.cid,T=m.find(A=>A.cardId===_);if(!T)return;const $=(f[T._line]||[]).find(A=>A.cardId===_);$&&($.boost=($.boost||0)+u.boostValue),x.remove(),await de({[n+"Team"]:f,boostUsed:!0})})})}function W(f=null){var O,X;if(!(u.phase===n+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const x=u[n+"Team"],b=u["usedSubIds_"+n]||[],h=u.maxSubs||3;if(b.length>=h){p(`Maximum ${h} remplacements atteint`,"warning");return}const _=Object.entries(x).flatMap(([U,ee])=>(ee||[]).filter(se=>se.used).map(se=>({...se,_line:U}))),T=(u[n+"Subs"]||[]).filter(U=>!b.includes(U.cardId));if(!_.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!T.length){p("Aucun remplaçant disponible","warning");return}let $=Math.max(0,_.findIndex(U=>U.cardId===f));const A=((O=_[$])==null?void 0:O._line)||((X=_[$])==null?void 0:X.job);let S=Math.max(0,T.findIndex(U=>U.job===A)),B=!1;const D=document.createElement("div");D.id="pvp-sub-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function R(){var ve,je,Me,Re,Be,Oe;const U=_[$],ee=T[S],se=Math.min(130,Math.round((window.innerWidth-90)/2)),ge=Math.round(se*1.35),me=Fe=>`background:rgba(255,255,255,0.12);border:none;color:${Fe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Fe?"default":"pointer"};flex-shrink:0`;D.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${b.length}/${h})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${me(S===0)}" ${S===0?"disabled":""}>▲</button>
          <div>${ee?Ye({...ee,used:!1,boost:0},se,ge):"<div>—</div>"}</div>
          <button id="pin-down" style="${me(S>=T.length-1)}" ${S>=T.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${S+1}/${T.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${me($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${U?Ye({...U,used:!1,boost:0},se,ge):"<div>—</div>"}</div>
          <button id="pout-down" style="${me($>=_.length-1)}" ${$>=_.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${_.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ve=D.querySelector("#psub-close"))==null||ve.addEventListener("click",()=>D.remove()),(je=D.querySelector("#pout-up"))==null||je.addEventListener("click",()=>{$>0&&($--,R())}),(Me=D.querySelector("#pout-down"))==null||Me.addEventListener("click",()=>{$<_.length-1&&($++,R())}),(Re=D.querySelector("#pin-up"))==null||Re.addEventListener("click",()=>{S>0&&(S--,R())}),(Be=D.querySelector("#pin-down"))==null||Be.addEventListener("click",()=>{S<T.length-1&&(S++,R())});const he=(Fe,Ve,Ne,He)=>{const Ue=D.querySelector("#"+Fe);if(!Ue)return;let Je=0;Ue.addEventListener("touchstart",Ze=>{Je=Ze.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ze=>{const Qe=Ze.changedTouches[0].clientY-Je;if(Math.abs(Qe)<30)return;const nt=Ve();Qe<0&&nt<He-1?(Ne(nt+1),R()):Qe>0&&nt>0&&(Ne(nt-1),R())},{passive:!0})};he("pin-panel",()=>S,Fe=>S=Fe,T.length),he("pout-panel",()=>$,Fe=>$=Fe,_.length),(Oe=D.querySelector("#psub-confirm"))==null||Oe.addEventListener("click",async Fe=>{if(Fe.preventDefault(),Fe.stopPropagation(),B)return;B=!0;const Ve=_[$],Ne=T[S];if(!Ve||!Ne)return;const He=Ve._line,Ue=(x[He]||[]).findIndex(Qe=>Qe.cardId===Ve.cardId);if(Ue===-1){p("Erreur : joueur introuvable","error"),D.remove();return}const Je={...Ne,_line:He,position:Ve.position,used:!1,boost:0};x[He].splice(Ue,1,Je);const Ze=[...b,Ne.cardId];D.remove(),oe(Ve,Ne,async()=>{await de({[n+"Team"]:x,[g+"Team"]:u[g+"Team"],["usedSubIds_"+n]:Ze})})})}document.body.appendChild(D),R()}function oe(f,m,x){const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const _=(A,S,B)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${S};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${B}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${b[A.job]||"#555"};border:3px solid ${S};position:relative;overflow:hidden;margin:0 auto">
        ${Pe(A)?`<img src="${Pe(A)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(A.name||"").slice(0,12)}</div>
    </div>`;h.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${_(m,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${_(f,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(h);let T=!1;const $=()=>{T||(T=!0,h.remove(),setTimeout(()=>x(),50))};h.addEventListener("click",$),setTimeout($,2200)}function K(){var m;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",f.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${u[g+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ut(u[g+"Team"],u[g+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(f),(m=f.querySelector("#pvp-opp-close"))==null||m.addEventListener("click",()=>f.remove())}function J(){var b;const f=u.log||[],m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const x=h=>{var T,$,A;if(h.type==="duel"){const S=h.isGoal,B=h.homeScored&&n==="p1"||!h.homeScored&&S&&n==="p2",D=h.homeScored?"#FFD700":S?"#ff6b6b":"rgba(255,255,255,0.3)",R=S?B?"⚽ BUT !":"⚽ BUT adversaire !":(T=h.homePlayers)!=null&&T.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${S?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${D};margin-bottom:4px">
          <div style="font-size:9px;color:${D};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${R}</div>
          ${($=h.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${ot(h.homePlayers,"rgba(255,255,255,0.7)",h.homeTotal)}</div>`:""}
          ${(A=h.aiPlayers)!=null&&A.length?`<div style="opacity:0.7">${ot(h.aiPlayers,"#ff6b6b",h.aiTotal)}</div>`:""}
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
      </div>`,document.body.appendChild(m),(b=m.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>m.remove())}async function re(){if(u.phase!==n+"-attack")return;const f=n==="p1"?"p2":"p1",m=(u.round||0)+1,x=[...u.log||[]];x.push({type:"info",text:`⏭️ ${u[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const b=De(u),h=Ce(f),_=b||!h?"finished":f+"-attack";await de({["selected_"+n]:[],modifiers:{...u.modifiers,[n]:{}},pendingAttack:null,phase:_,attacker:f,round:m,log:x}),_==="finished"&&await q(u)}async function ie(){const f=u[n+"Team"],m=!["GK","DEF","MIL","ATT"].some(_=>(u[g+"Team"][_]||[]).some(T=>!T.used)),x=(u["selected_"+n]||[]).map(_=>{const T=(f[_._role]||[]).find(R=>R.cardId===_.cardId)||_,$=m&&["GK","DEF"].includes(_._role),A=f[_._role]||[],S=A.findIndex(R=>R.cardId===_.cardId),B=lt(A.length),D=S>=0?B[S]:T._col??1;return{...T,_line:_._role,_col:D,...$?{note_a:Math.max(1,Number(T.note_a)||0)}:{}}});if(!x.length)return;const b=Nt(x,u.modifiers[n]||{});ne(n,x.map(_=>_.cardId)),x.forEach(_=>{const T=(f[_._role]||[]).find($=>$.cardId===_.cardId);T&&(T.used=!0)}),u["selected_"+n]=[],ye();const h=[...u.log||[]];if(m){const _=(u[n+"Score"]||0)+1,T=x.map(D=>({name:D.name,note:Ie(D,D._line||"ATT"),portrait:Pe(D),job:D.job}));h.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:T,homeTotal:b.total,aiTotal:0});const $=(u.round||0)+1,A=n==="p1"?"p2":"p1",S={...u,[n+"Team"]:f,[n+"Score"]:_},B=De(S);F.add($),$e(T,_,u[g+"Score"]||0,!0,async()=>{await de({[n+"Team"]:f,[n+"Score"]:_,["selected_"+n]:[],modifiers:{...u.modifiers,[n]:{}},pendingAttack:null,phase:B?"finished":A+"-attack",attacker:A,round:$,log:h}),B&&await q({...u,[n+"Score"]:_})});return}h.push({type:"pending",text:`⚔️ ${u[n+"Name"]} attaque (${b.total})`}),await de({[n+"Team"]:f,[g+"Team"]:u[g+"Team"],pendingAttack:{...b,players:x,side:n},["selected_"+n]:[],modifiers:{...u.modifiers,[n]:{}},phase:g+"-defense",log:h})}async function ae(){const f=u[n+"Team"],m=(u["selected_"+n]||[]).map(U=>{const ee=(f[U._role]||[]).find(ve=>ve.cardId===U.cardId)||U,se=f[U._role]||[],ge=se.findIndex(ve=>ve.cardId===U.cardId),me=lt(se.length),he=ge>=0?me[ge]:ee._col??1;return{...ee,_line:U._role,_col:he}}),x=Rt(m,u.modifiers[n]||{});ne(n,m.map(U=>U.cardId)),m.forEach(U=>{const ee=(f[U._role]||[]).find(se=>se.cardId===U.cardId);ee&&(ee.used=!0)}),u["selected_"+n]=[],ye();const b=Ot(u.pendingAttack.total,x.total,u.modifiers[n]||{}),h=u.pendingAttack.side,_=b==="attack"||(b==null?void 0:b.goal),T=h==="p1"?"p2":"p1",$=(u.round||0)+1,A=(u.pendingAttack.players||[]).map(U=>({name:U.name,note:Ie(U,U._line||"ATT"),portrait:Pe(U),job:U.job})),S=[...u.log||[]];S.push({type:"duel",isGoal:_,homeScored:_&&h===n,text:_?`⚽ BUT de ${u[h+"Name"]} ! (${u.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${u.pendingAttack.total} vs ${x.total})`,homePlayers:A,aiPlayers:m.map(U=>({name:U.name,note:Ie(U,U._line||"DEF"),portrait:Pe(U),job:U.job})),homeTotal:u.pendingAttack.total,aiTotal:x.total});const B=_?(u[h+"Score"]||0)+1:u[h+"Score"]||0,D={...u,[n+"Team"]:f,[h+"Score"]:B},R=De(D),O=R?"finished":T+"-attack",X=async()=>{await de({[n+"Team"]:f,[g+"Team"]:u[g+"Team"],[h+"Score"]:B,["selected_"+n]:[],modifiers:{...u.modifiers,[n]:{}},pendingAttack:null,phase:O,attacker:T,round:$,log:S}),(O==="finished"||R)&&await q({...u,[h+"Score"]:B})};if(_){const U=h===n,ee=U?B:u[n+"Score"]||0,se=U?u[g+"Score"]||0:B;F.add($),$e(A,ee,se,U,X)}else await X()}function Te(f){return["MIL","ATT"].some(m=>(f[m]||[]).some(x=>!x.used))}function we(f){return["GK","DEF","MIL","ATT"].some(m=>(f[m]||[]).some(x=>!x.used))}function Ae(f){return we(f)&&!Te(f)}function Ce(f){const m=u[f+"Team"],x=u[(f==="p1"?"p2":"p1")+"Team"];return!!(Te(m)||!we(x)&&Ae(m))}function De(f){const m=["MIL","ATT"].some(S=>(f.p1Team[S]||[]).some(B=>!B.used)),x=["MIL","ATT"].some(S=>(f.p2Team[S]||[]).some(B=>!B.used)),b=we(f.p1Team),h=we(f.p2Team);return!m&&!(!h&&b)&&(!x&&!(!b&&h))}function I(f){const m=f.p1Score||0,x=f.p2Score||0;return m===x?null:m>x?z.home_id:z.away_id}async function q(f){try{const m=I(f),x=m?z.home_id===m?z.away_id:z.home_id:null,b=f.p1Score||0,h=f.p2Score||0;await E.from("matches").update({status:"finished",winner_id:m,home_score:b,away_score:h}).eq("id",i);const{data:_}=await E.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(_){await E.from("mini_league_matches").update({home_score:b,away_score:h,status:"finished"}).eq("id",_.id);const{data:T}=await E.from("mini_league_matches").select("id, status").eq("league_id",_.league_id).eq("matchday",_.matchday);if((T||[]).every(A=>A.status==="finished"||A.status==="bye")){const{data:A}=await E.from("mini_leagues").select("current_day,total_days").eq("id",_.league_id).single();if(A){const S=(A.current_day||0)+1,B=S>(A.total_days||0);await E.from("mini_leagues").update({current_day:B?A.total_days:S,status:B?"finished":"active"}).eq("id",_.league_id)}}}m&&x&&ki(m,x).catch(()=>{})}catch(m){console.error("[ML] finishMatch:",m)}}function w(){var h;if(M&&document.getElementById("pvp-end-overlay"))return;M=!0;const f=u[n+"Score"],m=u[g+"Score"],x=f>m,b=f===m;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":b?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":b?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${f} - ${m}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(h=document.getElementById("pvp-home"))==null||h.addEventListener("click",()=>{try{E.removeChannel(le)}catch{}We(e),l("mini-league",o?{openLeagueId:o}:{})})}ye()}const cr="/manager-wars/",pr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function ur(e,t,i){let s=0;const c=document.createElement("div");c.id="tutorial-overlay",c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const d=()=>{var n,g,v;const l=t[s],p=s===t.length-1,o=Math.round((s+1)/t.length*100);c.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${o}%;background:${l.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${l.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${l.title}</div>
          <div style="font-size:11px;color:#aaa">${s+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${l.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${cr}icons/${l.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,c.querySelectorAll("ul,ol").forEach(y=>{y.style.paddingLeft="20px",y.style.marginTop="6px",y.style.marginBottom="6px"}),c.querySelectorAll("li").forEach(y=>{y.style.marginBottom="4px"}),c.querySelectorAll("p").forEach(y=>{y.style.marginBottom="8px"}),(n=c.querySelector("#tuto-prev"))==null||n.addEventListener("click",()=>{s--,d()}),(g=c.querySelector("#tuto-next"))==null||g.addEventListener("click",()=>{p?a():(s++,d())}),(v=c.querySelector("#tuto-skip"))==null||v.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&a()})},a=async()=>{c.remove(),e!=null&&e.id&&await E.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(c),d()}async function fr(e,t,i){if(!e||e.tutorial_done)return;let s=[];const{data:c,error:d}=await E.rpc("get_tutorial_steps");if(!d&&(c==null?void 0:c.length)>0)s=c,console.log(`[Tutorial] RPC OK → ${s.length} étapes`);else{const{data:l,error:p}=await E.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!p&&(l==null?void 0:l.length)>0?(s=l,console.log(`[Tutorial] Direct OK → ${s.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${d==null?void 0:d.message}, Direct: ${p==null?void 0:p.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const a=s.length>0?s.map(l=>({emoji:l.emoji,title:l.title,color:l.color,content:l.content,image_url:l.image_url||null})):pr;ur(e,a,()=>t("boosters"))}const gr={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t){return t&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Ui(e){return`<div style="width:6px;height:100%;background:${{normal:"#e0e0e0",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"}[e]||"#e0e0e0"};border-radius:4px 0 0 4px;flex-shrink:0;align-self:stretch;min-height:52px"></div>`}function Wt(e,t){const s=t?gr[t]||"#bbb":"#d0d0d0",c=e>0?e:t||"—";return`<div style="width:32px;height:32px;border-radius:6px;background:${s};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px;font-weight:900;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4)">${c}</div>`}function Vi(e){const i=Zt(e);return i?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${i}" style="width:100%;height:100%;object-fit:cover"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#eee;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🌍</div>'}function Ki(e){return e?`<div style="width:32px;height:32px;border-radius:6px;overflow:hidden;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:#f0f0f0"><img src="${e}" style="width:28px;height:28px;object-fit:contain" onerror="this.parentElement.innerHTML='🏟️'"></div>`:'<div style="width:32px;height:32px;border-radius:6px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px">🏟️</div>'}async function mr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await zi(e,t)}async function zi(e,t){const{state:i,toast:s}=t,{data:c}=await E.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  </div>`;let p="buy";const o=()=>{var r,u,M,L,N,V,C;return{name:(((r=document.getElementById("flt-name"))==null?void 0:r.value)||"").toLowerCase().trim(),club:(((u=document.getElementById("flt-club"))==null?void 0:u.value)||"").toLowerCase().trim(),country:(((M=document.getElementById("flt-country"))==null?void 0:M.value)||"").toLowerCase().trim(),job:((L=document.getElementById("flt-job"))==null?void 0:L.value)||"",rarity:((N=document.getElementById("flt-rarity"))==null?void 0:N.value)||"",note1:parseInt((V=document.getElementById("flt-note1"))==null?void 0:V.value)||0,note2:parseInt((C=document.getElementById("flt-note2"))==null?void 0:C.value)||0}};function n(r){const u=o();return r.filter(M=>{var te,le;const L=(te=M.card)==null?void 0:te.player;if(!L)return!1;const N=`${L.firstname} ${L.surname_encoded}`.toLowerCase(),V=(((le=L.clubs)==null?void 0:le.encoded_name)||"").toLowerCase(),C=(L.country_code||"").toLowerCase(),F=Et(L,L.job),j=L.job2?Et(L,L.job2):0;return!(u.name&&!N.includes(u.name)||u.club&&!V.includes(u.club)||u.country&&!C.includes(u.country)||u.job&&L.job!==u.job||u.rarity&&L.rarity!==u.rarity||u.note1&&F<u.note1||u.note2&&j<u.note2)})}function g(r){var V,C,F;const u=(V=r.card)==null?void 0:V.player;if(!u)return"";const M=Et(u,u.job),L=u.job2?Et(u,u.job2):0,N=(i.profile.credits||0)>=r.price;return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px">
      ${Ui(u.rarity)}
      ${Wt(M,u.job)}
      ${Wt(L,u.job2||null)}
      ${Vi(u.country_code)}
      ${Ki((C=u.clubs)==null?void 0:C.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.firstname} ${u.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((F=r.seller)==null?void 0:F.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${r.id}" ${N?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${N?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function v(r){var V,C,F;const u=(V=r.card)==null?void 0:V.player;if(!u)return"";const M=Et(u,u.job),L=u.job2?Et(u,u.job2):0,N=r.status==="sold";return`<div class="card-panel" style="display:flex;align-items:center;gap:8px;padding:10px 12px;overflow:hidden;padding-left:6px;${N?"opacity:0.7":""}">
      ${Ui(u.rarity)}
      ${Wt(M,u.job)}
      ${Wt(L,u.job2||null)}
      ${Vi(u.country_code)}
      ${Ki((C=u.clubs)==null?void 0:C.logo_url)}
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u.firstname} ${u.surname_encoded}</div>
        <div style="font-size:10px;color:${N?"#22c55e":"#999"};margin-top:1px">
          ${N?`✅ Vendu à ${((F=r.buyer)==null?void 0:F.pseudo)||"—"} · ${r.sold_at?new Date(r.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(r.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${r.price.toLocaleString("fr")}</div>
        ${N?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${r.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function y(){const r=document.getElementById("mkt-content"),u=document.getElementById("mkt-filters");if(r){if(u.style.display=p==="buy"?"flex":"none",p==="buy"){const M=n(a);r.innerHTML=M.length?M.map(g).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const M=l.filter(N=>N.status==="active").sort((N,V)=>new Date(V.listed_at)-new Date(N.listed_at)),L=l.filter(N=>N.status==="sold").sort((N,V)=>new Date(V.sold_at||V.listed_at)-new Date(N.sold_at||N.listed_at));r.innerHTML=(M.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${M.length})</div>`+M.map(v).join(""):"")+(L.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${L.length})</div>`+L.map(v).join(""):"")+(!M.length&&!L.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}r.querySelectorAll("[data-buy]").forEach(M=>M.addEventListener("click",()=>xr(M.dataset.buy,a,e,t))),r.querySelectorAll("[data-cancel]").forEach(M=>M.addEventListener("click",()=>br(M.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(r=>{r.addEventListener("click",()=>{p=r.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(u=>{const M=u===r;u.style.background=M?"var(--green)":"#fff",u.style.color=M?"#fff":"var(--gray-600)",u.style.borderColor=M?"var(--green)":"var(--gray-200)"}),y()})});let z;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(r=>{var u;(u=document.getElementById(r))==null||u.addEventListener("input",()=>{clearTimeout(z),z=setTimeout(y,250)})}),y()}async function xr(e,t,i,s){const{state:c,toast:d,refreshProfile:a}=s,l=t.find(n=>n.id===e);if(!l)return;const p=l.price;if((c.profile.credits||0)<p){d("Crédits insuffisants","error");return}yr(l,async()=>{const{error:n}=await E.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:c.profile.id});if(n){d("Erreur achat : "+n.message,"error");return}await a();const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(c.profile.credits||0).toLocaleString("fr")}`),d("✅ Carte achetée !","success"),await zi(i,s)})}function yr(e,t){var a;const i=(a=e.card)==null?void 0:a.player,s=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",c.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${s} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(c);const d=l=>{c.remove(),l&&t()};c.querySelector("#buy-cancel").addEventListener("click",()=>d(!1)),c.querySelector("#buy-ok").addEventListener("click",()=>d(!0)),c.addEventListener("click",l=>{l.target===c&&d(!1)})}async function br(e,t,i){const{toast:s}=i,{data:c}=await E.from("market_listings").select("card_id").eq("id",e).single();if(await E.from("market_listings").update({status:"cancelled"}).eq("id",e),c!=null&&c.card_id){const{count:d}=await E.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",c.card_id).eq("status","active");d||await E.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",c.card_id)}s("Annonce retirée","success"),zi(t,i)}async function hr(e,{state:t,navigate:i,toast:s}){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await E.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100);e.innerHTML=`
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
  `}async function vr(e,{state:t,navigate:i,toast:s}){const c=t.profile;if(!c)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:d}=await E.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${c.id},away_id.eq.${c.id}`).order("created_at",{ascending:!1}).limit(50),a={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(d||[]).filter(n=>n.status==="finished"),p=(d||[]).filter(n=>n.status==="in_progress");function o(n){const g=n.home_id===c.id;g?n.home_score:n.away_score,g?n.away_score:n.home_score;const v=n.winner_id===c.id,y=n.home_score===n.away_score&&n.status==="finished",z=n.status!=="finished"?"…":y?"N":v?"V":"D",r=n.status!=="finished"||y?"#888":v?"#1A6B3C":"#c0392b";let u=a[n.mode]||n.mode;n.away_id===null&&!u.startsWith("IA")&&(u="IA");const L=n.home_id===c.id?n.away:n.home;let N;n.away_id===null?N=u:L?N=`${L.club_name||L.pseudo} (${L.pseudo})`:N="Adversaire";let V="";n.status==="in_progress"&&Date.now()-new Date(n.created_at).getTime()>3600*1e3&&(V=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const C=new Date(n.created_at),F=C.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+C.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),j=n.status==="finished"?`${n.home_score} - ${n.away_score}`:`${n.home_score||0} - ${n.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${N}${V}</div>
        <div style="font-size:11px;color:var(--gray-600)">${u} · ${F}${n.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${j}</span>
        <span style="background:${r};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${z}</span>
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
          ${p.map(o).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(o).join("")}
        </div>`:""}

      ${(d||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}So(Io);const Ge={user:null,profile:null,page:"home",params:{}};function Tt(e,t="info",i=3e3){const s=document.getElementById("toast");s&&(s.textContent=e,s.className=`show ${t}`,clearTimeout(s._t),s._t=setTimeout(()=>{s.className=""},i))}function wr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function yi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ct(){if(!Ge.user)return;const{data:e}=await E.from("users").select("*").eq("id",Ge.user.id).single();e&&(Ge.profile=e)}function Bt(e,t={}){Ge.page=e,Ge.params=t,Ao()}async function Ao(){var s,c,d,a;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===Ge.page)});const t=document.getElementById("nav-credits");t&&Ge.profile&&(t.textContent=`💰 ${(Ge.profile.credits||0).toLocaleString("fr")}`);const i={state:Ge,navigate:Bt,toast:Tt,openModal:wr,closeModal:yi,refreshProfile:Ct};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Ge.page){case"home":await ji(e,i);break;case"collection":await Zo(e,i);break;case"decks":await pi(e,i);break;case"boosters":await fn(e,i);break;case"match":{const l=Ge.params&&Ge.params.matchMode||"vs_ai_easy";l==="random"?await _o(e,i):l==="friend"?await Kn(e,i,(s=Ge.params)==null?void 0:s.friendId,(c=Ge.params)==null?void 0:c.friendName):l==="mini-league"?await Hi(e,i,(d=Ge.params)==null?void 0:d.mlMatchId,(a=Ge.params)==null?void 0:a.leagueId):await zn(e,i);break}case"market":await mr(e,i);break;case"rankings":await hr(e,i);break;case"matches":await vr(e,i);break;case"friends":await Do(e,i);break;case"mini-league":await Jn(e,i);break;case"match-mini-league":{const l=Ge.params||{};await Hi(e,i,l.mlMatchId,l.leagueId);break}default:await ji(e,i)}}function _r(){var s;const e=document.getElementById("app"),t=Ge.profile;if(!t)return;const i="/manager-wars/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(c=>{c.addEventListener("click",d=>{d.preventDefault(),Bt(c.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Bt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Bt("boosters")),(s=document.getElementById("journal-btn"))==null||s.addEventListener("click",()=>$r())}async function $r(){const{data:e}=await E.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(s=>{const c=new Date(s.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",s=>{s.target===t&&t.remove()})}async function kr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&yi()}),document.getElementById("modal-close").addEventListener("click",yi);const{data:{session:e}}=await E.auth.getSession();if(!e){Yi(),Ii(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt});return}Ge.user=e.user,await Ct(),Yi();try{const{data:i}=await E.from("formation_links_overrides").select("formation, links"),s={};(i||[]).forEach(c=>{s[c.formation]=c.links}),Lo(s)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Ge.profile){Co(document.getElementById("app"),{state:Ge,navigate:async()=>{await Ct(),li()},toast:Tt,refreshProfile:Ct});return}const t=Array.isArray(Ge.profile.pending_boosters)?Ge.profile.pending_boosters:[];if(!Ge.profile.onboarding_done&&t.length>0){kn(document.getElementById("app"),{state:Ge,navigate:()=>li(),toast:Tt,refreshProfile:Ct});return}li(),setTimeout(()=>fr(Ge.profile,Bt,Tt),800),E.auth.onAuthStateChange(async(i,s)=>{i==="SIGNED_OUT"&&(Ge.user=null,Ge.profile=null,document.getElementById("app").innerHTML="",Ii(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Tt}))})}function Er(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function ai(){const e=document.getElementById("app");e&&(e.style.height=Er()+"px")}window.addEventListener("resize",ai);window.addEventListener("orientationchange",()=>setTimeout(ai,150));window.visualViewport&&window.visualViewport.addEventListener("resize",ai);function li(){const e=()=>{var i;(i=Ge.user)!=null&&i.id&&E.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Ge.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",ai(),_r(),Ao()}function Yi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function zo(e){var s;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(s=document.getElementById("boot-retry"))==null||s.addEventListener("click",()=>window.location.reload())}kr().catch(e=>{console.error("Échec du démarrage:",e),zo()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&zo("Le serveur met trop de temps à répondre.")},12e3);
