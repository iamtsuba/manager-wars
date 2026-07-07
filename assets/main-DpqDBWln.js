const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-BZe0pGr4.js","assets/formation-links-B6ttdMxQ.css"])))=>i.map(i=>d[i]);
import{s as T,F as _i,i as Ht,k as Ki,l as ot,m as Li,f as Gt,n as bn,T as di,j as hn,o as vn,b as wn}from"./formation-links-BZe0pGr4.js";const _n="/";function Ii(e,{navigate:t,toast:i}){let o="login";const d=()=>{var r,l,p,s,n,x;const a=o==="login";e.innerHTML=`
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
        <img src="${_n}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
            flex:1;padding:16px;border:none;background:${a?"rgba(26,107,60,0.3)":"transparent"};
            color:${a?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${a?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${a?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:16px;border:none;background:${a?"transparent":"rgba(26,107,60,0.3)"};
            color:${a?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${a?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${a?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:24px">
          ${a?`
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{o="login",d()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{o="register",d()}),a?((p=document.getElementById("login-password"))==null||p.addEventListener("keydown",u=>{var h;u.key==="Enter"&&((h=document.getElementById("login-btn"))==null||h.click())}),(s=document.getElementById("login-btn"))==null||s.addEventListener("click",async()=>{const u=document.getElementById("login-email").value.trim(),h=document.getElementById("login-password").value,_=document.getElementById("login-error");if(_.textContent="",!u||!h){_.textContent="Remplissez tous les champs.";return}const m=document.getElementById("login-btn");m.textContent="⏳ Connexion…",m.disabled=!0;const{error:c}=await T.auth.signInWithPassword({email:u,password:h});if(m.textContent="⚽ Se connecter",m.disabled=!1,c){_.textContent=c.message.includes("Invalid")?"Email ou mot de passe incorrect.":c.message;return}window.location.reload()})):((n=document.getElementById("reg-confirm"))==null||n.addEventListener("keydown",u=>{var h;u.key==="Enter"&&((h=document.getElementById("reg-btn"))==null||h.click())}),(x=document.getElementById("reg-btn"))==null||x.addEventListener("click",async()=>{const u=document.getElementById("reg-email").value.trim(),h=document.getElementById("reg-password").value,_=document.getElementById("reg-confirm").value,m=document.getElementById("reg-error");if(m.textContent="",!u||!h||!_){m.textContent="Remplissez tous les champs.";return}if(h.length<6){m.textContent="Mot de passe trop court (min. 6 caractères).";return}if(h!==_){m.textContent="Les mots de passe ne correspondent pas.";return}const c=document.getElementById("reg-btn");c.textContent="⏳ Création…",c.disabled=!0;const{error:A}=await T.auth.signUp({email:u,password:h});if(c.textContent="🚀 Créer mon compte",c.disabled=!1,A){m.textContent=A.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),o="login",d(),setTimeout(()=>{const g=document.getElementById("login-email");g&&(g.value=u)},50)}))};d()}function $n(e,{state:t,navigate:i,toast:o,refreshProfile:d}){let a="#1A6B3C",r="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${r};border-color:${a}">
          <span id="logo-initials" style="color:${a}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${a};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${a}" style="width:100%;height:36px;padding:2px;border-radius:6px">
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch2" style="background:${r};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur de l'intérieur</label>
              <input type="color" id="color2" value="${r}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function l(){var _;const s=document.getElementById("logo-preview"),n=document.getElementById("logo-initials"),x=((_=document.getElementById("setup-club"))==null?void 0:_.value)||"MW",u=x.trim().split(" ").filter(Boolean),h=u.length>=2?(u[0][0]+u[1][0]).toUpperCase():x.slice(0,2).toUpperCase();s&&(s.style.background=r,s.style.borderColor=a),n&&(n.textContent=h,n.style.color=a)}document.getElementById("color1").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch1").style.background=a,l()}),document.getElementById("color2").addEventListener("input",s=>{r=s.target.value,document.getElementById("swatch2").style.background=r,l()});function p(s){document.querySelectorAll(".setup-step").forEach(n=>n.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("step1-error");if(n.textContent="",s.length<3){n.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:x}=await T.from("users").select("id").eq("pseudo",s).maybeSingle();if(x){n.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),n=document.getElementById("step2-error");if(n.textContent="",s.length<2){n.textContent="Nom trop court (min. 2 caractères).";return}const{data:x}=await T.from("users").select("id").eq("club_name",s).maybeSingle();if(x){n.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),n=document.getElementById("setup-club").value.trim(),x=document.getElementById("step3-error"),u=document.getElementById("step3-finish");x.textContent="",u.disabled=!0,u.textContent="Création en cours…";try{const{error:h}=await T.from("users").insert({id:t.user.id,pseudo:s,club_name:n,club_color1:a,club_color2:r,credits:1e4});if(h)throw h;await kn(t.user.id),await d(),o(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(h){x.textContent=h.message,u.disabled=!1,u.textContent="🚀 Créer mon profil !"}})}async function kn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await T.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const En="modulepreload",Tn=function(e){return"/"+e},Mi={},ni=function(t,i,o){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));d=Promise.allSettled(i.map(p=>{if(p=Tn(p),p in Mi)return;Mi[p]=!0;const s=p.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${n}`))return;const x=document.createElement("link");if(x.rel=s?"stylesheet":En,s||(x.as="script"),x.crossOrigin="",x.href=p,l&&x.setAttribute("nonce",l),document.head.appendChild(x),s)return new Promise((u,h)=>{x.addEventListener("load",u),x.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return d.then(r=>{for(const l of r||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})},Nt="#1A6B3C",Rt="#cc2222",Sn="#D4A017",ji="#888";async function zn(e,t){const{state:i,toast:o}=t;e.innerHTML=`
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
    </div>`,await Vi(i,o,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Ln(i,o)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Yi(i,o,null,t))}async function Vi(e,t,i={}){const{navigate:o}=i,d=e.user.id,{data:a,error:r}=await T.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${d},addressee_id.eq.${d}`),{count:l}=await T.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",d).eq("status","pending"),p=document.getElementById("pending-badge");p&&(l>0?(p.style.display="flex",p.textContent=l):p.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(r){console.error("[Friends] Erreur:",r),s.innerHTML=`<div style="color:${Rt};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const n=(a||[]).map(h=>h.requester_id===d?h.addressee_id:h.requester_id);let x={};if(n.length){const{data:h}=await T.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",n);(h||[]).forEach(_=>{x[_.id]=_})}const u=(a||[]).map(h=>({friendshipId:h.id,friend:x[h.requester_id===d?h.addressee_id:h.requester_id]||{pseudo:"?"}}));if(!u.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${u.length} ami${u.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${u.map(({friendshipId:h,friend:_})=>An(_,h)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(h=>{h.addEventListener("click",()=>In(e,h.dataset.stats,h.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(h=>{h.addEventListener("click",()=>{const _=h.dataset.friendId,m=h.dataset.friendName;console.log("[Friends] clic match",{fid:_,fname:m,hasNavigate:typeof o}),typeof o=="function"?o("match",{matchMode:"friend",friendId:_,friendName:m}):t("Erreur navigation","error")})})}function An(e,t){const i=e.club_name||e.pseudo||"?",o=e.pseudo||"",d=(o||i).slice(0,2).toUpperCase(),a=e.club_color2||Nt,r=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,p=l&&Date.now()-l.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${a};border:2.5px solid ${r};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${r}">
          ${d}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${p?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${o}</div>
        <div style="font-size:11px;color:${p?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${p?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Sn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Ln(e,t){const i=$i();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Rt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${ki()}`,document.body.appendChild(i);const o=i.querySelector("#friend-pseudo-input"),d=i.querySelector("#add-friend-error"),a=()=>i.remove();o.focus(),i.querySelector("#add-cancel").addEventListener("click",a),i.addEventListener("click",r=>{r.target===i&&a()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=o.value.trim();if(!r){d.textContent="Entre un pseudo";return}d.textContent="";const{data:l}=await T.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!l){d.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){d.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await T.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(p){const n=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";d.textContent=n;return}const{error:s}=await T.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(s){d.textContent="Erreur : "+s.message;return}a(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function Yi(e,t,i=null,o={}){const d=e.user.id,{data:a}=await T.from("friendships").select("id, requester_id").eq("addressee_id",d).eq("status","pending").order("created_at",{ascending:!1}),r=(a||[]).map(u=>u.requester_id);let l={};if(r.length){const{data:u}=await T.from("users").select("id, pseudo, club_name").in("id",r);(u||[]).forEach(h=>{l[h.id]=h})}const p=(a||[]).map(u=>({...u,requester:l[u.requester_id]||{pseudo:"?"}})),s=$i(),n=p||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${n.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${n.map(u=>{var h,_,m;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((h=u.requester)==null?void 0:h.club_name)||((_=u.requester)==null?void 0:_.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((m=u.requester)==null?void 0:m.pseudo)||""})</span>
                </div>
                <button data-accept="${u.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Nt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${u.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Rt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ki()}`,document.body.appendChild(s);const x=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",x),s.addEventListener("click",u=>{u.target===s&&x()}),s.querySelectorAll("[data-accept]").forEach(u=>{u.addEventListener("click",async()=>{const{error:h}=await T.from("friendships").update({status:"accepted"}).eq("id",u.dataset.accept);if(h){t("Erreur : "+h.message,"error");return}u.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Vi(e,t,o),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(u=>{u.addEventListener("click",async()=>{await T.from("friendships").delete().eq("id",u.dataset.decline),u.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function In(e,t,i){const o=e.user.id,[d,a]=[o,t].sort(),r=o===d,{data:l}=await T.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",a).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",s=l||{},n=r?s.wins_p1||0:s.wins_p2||0,x=r?s.wins_p2||0:s.wins_p1||0,u=s.draws||0,h=r?s.goals_p1||0:s.goals_p2||0,_=r?s.goals_p2||0:s.goals_p1||0,m=r?s.gc_used_p1||0:s.gc_used_p2||0,c=r?s.gc_used_p2||0:s.gc_used_p1||0,A=s.matches_total||0,g=(C,j,F,q=Nt,N=Rt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${q}">${j}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${C}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${N}">${F}</div>
    </div>`,I=$i();I.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${A===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${g("Victoires",n,x)}
        ${g("Nuls",u,u,ji,ji)}
        ${g("Défaites",x,n)}
        ${g("Buts marqués",h,_)}
        ${g("Buts encaissés",_,h,Rt,Nt)}
        ${g("GC utilisés ⚡",m,c,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${A} match${A>1?"s":""} joué${A>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ki()}`,document.body.appendChild(I),I.querySelector("#stats-close").addEventListener("click",()=>I.remove()),I.addEventListener("click",C=>{C.target===I&&I.remove()})}function $i(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ki(){return`
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
        background:${Nt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Wi({player1Id:e,player2Id:t,score1:i,score2:o,gc1:d,gc2:a}){const[r,l]=[e,t].sort(),p=e!==r,s=p?o:i,n=p?i:o,x=p?a:d,u=p?d:a,h=s>n?1:0,_=n>s?1:0,m=s===n?1:0,{data:c}=await T.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",l).single();c?await T.from("friend_match_stats").update({wins_p1:c.wins_p1+h,wins_p2:c.wins_p2+_,draws:c.draws+m,goals_p1:c.goals_p1+s,goals_p2:c.goals_p2+n,gc_used_p1:c.gc_used_p1+x,gc_used_p2:c.gc_used_p2+u,matches_total:c.matches_total+1}).eq("player1_id",r).eq("player2_id",l):await T.from("friend_match_stats").insert({player1_id:r,player2_id:l,wins_p1:h,wins_p2:_,draws:m,goals_p1:s,goals_p2:n,gc_used_p1:x,gc_used_p2:u,matches_total:1})}const Mn="2026.07.08-0028";async function Ci(e,{state:t,navigate:i,toast:o}){var a,r;const d=t.profile;d&&(e.innerHTML=`
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
      <div class="hero hero-compact" style="background:${d.club_color1};border:2px solid ${d.club_color2}">
        <button class="nav-rankings-btn" id="nav-rankings" title="Classement">
          <img src="/icons/badge-trophy.png" alt="Classement">
        </button>
        <div class="info">
          <h3 style="margin:0">${d.pseudo}</h3>
          <div class="level">Niveau ${d.level} · ${d.club_name}</div>
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
        ${d.is_admin?`
        <a href="/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:var(--gray-400);font-family:monospace;letter-spacing:0.5px">build ${Mn}</div>`:""}
      </div>

    </div>
  </div>
  `,e.querySelectorAll("[data-nav]").forEach(l=>{l.addEventListener("click",p=>{p.preventDefault(),i(l.dataset.nav)})}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.classList.add("tapped"),setTimeout(()=>l.classList.remove("tapped"),200);const p=l.dataset.action;if(p==="match-ai"){Bn(i);return}if(p==="match-random"){i("match",{matchMode:"random"});return}if(p==="match-friend"){i("friends");return}if(p==="mini-league"){i("mini-league");return}if(p==="ranked"){i("ranked");return}o("Bientôt disponible","info")})}),window.innerWidth<768&&requestAnimationFrame(()=>{var C,j,F,q,N,V;const l=((C=window.visualViewport)==null?void 0:C.height)||window.innerHeight,p=((j=document.querySelector(".top-nav"))==null?void 0:j.offsetHeight)||56,s=((F=document.querySelector(".bottom-nav"))==null?void 0:F.offsetHeight)||60,n=((q=e.querySelector(".hero-compact"))==null?void 0:q.offsetHeight)||52,x=e.querySelector(".ranked-banner");e.querySelector(".play-grid");const u=((V=(N=e.querySelector("#logout-btn"))==null?void 0:N.closest("div"))==null?void 0:V.offsetHeight)||44,h=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((K,oe)=>{var ie;return K+(((ie=document.getElementById(oe))==null?void 0:ie.offsetHeight)||0)},0),_=14*5,m=l-p-s-n-u-h-_,c=Math.max(80,Math.round(m*.28)),A=Math.max(160,Math.round(m*.72)),g=Math.floor((A-10)/2);x&&(x.style.minHeight=x.style.maxHeight=c+"px"),e.querySelectorAll(".play-grid .play-card").forEach(K=>{K.style.minHeight=K.style.height=g+"px"});const I=Math.round(g*.55);e.querySelectorAll(".play-card .play-icon").forEach(K=>{K.style.height=I+"px"})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await T.auth.signOut(),window.location.reload()}),Xi(t,o),qn(t,o,i),Ji(t,o,i))}async function Ji(e,t,i){const o=document.getElementById("ongoing-match-banner");if(!o)return;const d=e.profile.id,{data:a}=await T.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${d},away_id.eq.${d}`).order("created_at",{ascending:!1});if(!(a!=null&&a.length)){o.innerHTML="";return}const r=a.map(p=>p.home_id===d?p.away_id:p.home_id).filter(Boolean);let l={};if(r.length){const{data:p}=await T.from("users").select("id, pseudo, club_name").in("id",r);(p||[]).forEach(s=>{l[s.id]=s.club_name||s.pseudo})}o.innerHTML=a.map(p=>{const s=p.home_id===d?p.away_id:p.home_id,n=l[s]||"Adversaire",x=p.mode==="mini_league";return`
      <div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,#0a3d1e,#1A6B3C);color:#fff;border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:0 3px 12px rgba(26,107,60,0.4)">
        <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:900">${x?"🏆 Mini League":p.mode==="friend"?"Match ami":"Match"} en cours</div>
          <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${n}</div>
        </div>
        <button data-resume="${p.id}" data-mini="${x?"1":""}" title="Reprendre" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
        <button data-abandon="${p.id}" data-opp="${s}" title="Abandonner" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
      </div>`}).join(""),o.querySelectorAll("[data-resume]").forEach(p=>{p.addEventListener("click",async()=>{const s=document.getElementById("page-content")||document.getElementById("app");if(p.dataset.mini==="1"){const{data:n}=await T.from("mini_league_matches").select("id, league_id").eq("match_id",p.dataset.resume).single();n?i("match-mini-league",{mlMatchId:n.id,leagueId:n.league_id}):i("mini-league")}else{const{resumePvpMatch:n}=await ni(async()=>{const{resumePvpMatch:x}=await Promise.resolve().then(()=>Uo);return{resumePvpMatch:x}},void 0);n(s,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},p.dataset.resume)}})}),o.querySelectorAll("[data-abandon]").forEach(p=>{p.addEventListener("click",()=>{Cn(async()=>{await jn(p.dataset.abandon,p.dataset.opp,d),t("Match abandonné (défaite 3-0)","info"),Ji(e,t,i)})})})}async function jn(e,t,i){const{data:o}=await T.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!o)return;const d=o.home_id===i,a=d?0:3,r=d?3:0,l=o.game_state||{};l.p1Score=a,l.p2Score=r,l.phase="finished",l.forfeit=!0,await T.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:a,away_score:r,game_state:l}).eq("id",e)}function Cn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">⚠️</div>
      <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
      <div style="font-size:13px;color:#666;margin-bottom:18px">Tu perdras par forfait <b>3-0</b>. Cette action est définitive.</div>
      <div style="display:flex;gap:10px">
        <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function qn(e,t,i){var l,p,s,n;const o=document.getElementById("match-invite-banner");if(!o)return;const{data:d}=await T.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){o.innerHTML="";return}const a=((l=d.inviter)==null?void 0:l.club_name)||((p=d.inviter)==null?void 0:p.pseudo)||"?",r=d.inviter_id;o.innerHTML=`
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
        <div style="font-size:13px;font-weight:900">${a} t'invite à jouer !</div>
        <div style="font-size:11px;opacity:0.75">Accepter la partie ?</div>
      </div>
      <div style="display:flex;gap:8px">
        <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
        <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
      </div>
    </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{o.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:a})}),(n=document.getElementById("match-inv-decline"))==null||n.addEventListener("click",async()=>{await T.from("friend_match_invites").update({status:"declined"}).eq("id",d.id),o.innerHTML="",t("Invitation refusée","info")})}async function Xi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:o,error:d}=await T.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(d||!(o!=null&&o.length)){i.innerHTML="";return}const a=o.length,r=o.slice(0,2).map(p=>{var s;return((s=p.requester)==null?void 0:s.pseudo)||"?"}).join(", "),l=a>2?` +${a-2}`:"";i.innerHTML=`
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
          ${a} demande${a>1?"s":""} d'ami${a>1?"s":""} en attente
        </div>
        <div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
          ${r}${l}
        </div>
      </div>
      <div style="font-size:20px;flex-shrink:0">›</div>
    </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>{Yi(e,t,()=>Xi(e,t))})}function Bn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`
    <div class="modal" style="max-width:380px">
      <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${t.map(d=>`
            <div class="action-card" data-mode="${d.mode}" style="cursor:pointer">
              <div class="icon">${d.icon}</div>
              <div class="label">${d.label}</div>
              <div class="sub">${d.sub}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  `,document.body.appendChild(i);const o=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",o),i.addEventListener("click",d=>{d.target===i&&o()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{o(),e("match",{matchMode:d.dataset.mode})})})}const Bt="/",qi={GK:Bt+"cards/card-GK.png",DEF:Bt+"cards/card-DEF.png",MIL:Bt+"cards/card-MIL.png",ATT:Bt+"cards/card-ATT.png"},Fn={GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"};function Dn(e){if(!(e!=null&&e.face))return null;const t=e.face.replace(/^public\//,"").replace(/^\//,"");return Bt+t}function Pn(e){return!e||e.length<2?null:`https://flagsapi.com/${e.slice(0,2).toUpperCase()}/flat/64.png`}function Gn(e){var o;const t="https://fcnwclxlkytdfjotqkta.supabase.co",i=((o=e==null?void 0:e.clubs)==null?void 0:o.logo_url)||(e==null?void 0:e.clubLogo);return i?i.startsWith("http")?i:`${t}/storage/v1/object/public/assets/clubs/${i}`:null}function Bi(e,t,i=0){if(!t)return 0;const d="note_"+({GK:"g",DEF:"d",MIL:"m",ATT:"a"}[t]||t.toLowerCase());return(Number(e[d])||0)+(t===e.job||t===e.job2?i:0)}function Nn(e,t){return t?t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code:!1}function st(e,t={}){var Z;const{width:i=160,showStad:o=!1,stadDef:d=null,used:a=!1,extraNote:r=0,role:l=null}=t;if(!e)return`<div style="width:${i}px;height:${Math.round(i*657/507)}px;border-radius:8px;background:#111;opacity:0.3"></div>`;const p=i/507,s=Math.round(i*657/507),n=ge=>Math.round(ge*p),x=ge=>n(ge)+"px",u=l||e._line||e.job||"MIL",h=Fn[u]||"#D4A017",_=qi[u]||qi.MIL,m=e._evolution_bonus??e.evolution_bonus??0,c=o&&(e.stadiumBonus||Nn(e,d))?10:0,A=Bi(e,u,m)+r+c,g=l&&l!==e.job,I=c>0?"#4fc3f7":g?"#E87722":h,C=!l&&e.job2&&e.job2!==u?e.job2:null,j=C?Bi(e,C,m)+r+c:null,F=Dn(e),q=Pn(e.country_code),N=Gn(e),V=(e.firstname||"").toUpperCase(),K=(e.surname_encoded||e.name||"").toUpperCase(),oe=a?"opacity:0.35;":"",ie=K.length>11?34:K.length>8?42:50,Q=n(155),R=n(260),P=n(235),re=n(390),xe=n(180),_e=n(100),we=n(309),ve=n(85),Ee=n(95),se=n(435),pe=n(38),ce=n(374),H=n(6);return`<div style="position:relative;width:${i}px;height:${s+(c>0?n(22):0)}px;flex-shrink:0;${oe}user-select:none">
  ${c>0?`<div style="position:absolute;top:0;left:0;right:0;text-align:center;z-index:5;font-size:${x(22)};line-height:1">🏟️</div>`:""}
  <div style="position:absolute;bottom:0;left:0;width:${i}px;height:${s}px">

  <img src="${_}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:fill" draggable="false">

  <!-- Prénom : premier tiers du bandeau -->
  <div style="position:absolute;top:${x(48)};left:0;right:0;text-align:center;z-index:4;padding:0 ${x(50)}">
    <span style="font-size:${x(20)};font-weight:700;color:${h};letter-spacing:${x(2)};line-height:1;text-shadow:0 1px 4px #000;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${V}</span>
  </div>

  <!-- Nom : deuxième tiers du bandeau -->
  <div style="position:absolute;top:${x(80)};left:0;right:0;text-align:center;z-index:4;padding:0 ${x(10)}">
    <span style="font-size:${x(ie)};font-weight:900;color:#fff;line-height:1;text-shadow:0 2px 8px #000;font-family:Arial Black,Arial;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${K}</span>
  </div>

  <!-- Portrait : top aligné sous le bandeau, bas = haut octogone -->
  ${F?`<img src="${F}"
    style="position:absolute;top:${Q}px;left:50%;transform:translateX(-50%);
    width:${R}px;height:${P}px;object-fit:cover;object-position:top center;z-index:2"
    onerror="this.style.display='none'">`:""}

  <!-- Note principale : centrée dans l'octogone du template -->
  <div style="position:absolute;left:${_e}px;top:${re}px;width:${we}px;height:${xe}px;
    z-index:4;display:flex;flex-direction:column;align-items:center;justify-content:center">
    <span style="font-size:${x(80)};font-weight:900;color:${I};font-family:Arial Black,Arial;line-height:1;text-shadow:0 2px 8px rgba(0,0,0,0.9)">${A}</span>
  </div>

  <!-- Note secondaire : carré arrondi rouge sous l'octogone -->
  ${j!==null?`
  <div style="position:absolute;left:50%;transform:translateX(-50%);top:${x(530)};
    width:${x(90)};height:${x(60)};z-index:5;
    border-radius:${x(8)};
    background:#0a0a0a;border:${x(2)} solid #e03030;
    display:flex;align-items:center;justify-content:center">
    <span style="font-size:${x(32)};font-weight:900;color:#e03030;font-family:Arial Black,Arial;line-height:1">${j}</span>
  </div>`:""}

  <!-- Drapeau : sans fond -->
  <div style="position:absolute;left:${pe}px;top:${se}px;width:${Ee}px;height:${ve}px;z-index:3;
    display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${q?`<img src="${q}" style="width:100%;height:100%;object-fit:cover;border-radius:${H}px">`:`<span style="font-size:${x(22)}">🌍</span>`}
  </div>

  <!-- Logo club : sans fond -->
  <div style="position:absolute;left:${ce}px;top:${se}px;width:${Ee}px;height:${ve}px;z-index:3;
    display:flex;align-items:center;justify-content:center;overflow:hidden">
    ${N?`<img src="${N}" style="width:100%;height:100%;object-fit:contain">`:`<span style="font-size:${x(14)};font-weight:900;color:#fff">${(((Z=e.clubs)==null?void 0:Z.encoded_name)||e.clubName||"").slice(0,3).toUpperCase()}</span>`}
  </div>

</div></div>`}const Oe={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ze(e,t){if(!e)return 0;switch(t){case"GK":return Number(e.note_g)||0;case"DEF":return Number(e.note_d)||0;case"MIL":return Number(e.note_m)||0;case"ATT":return Number(e.note_a)||0;default:return 0}}const Fi=["ATT","MIL","DEF","GK"];function Qi(e){let t=0;const i=e.length;for(let o=0;o<i;o++)for(let d=o+1;d<i;d++){const a=e[o],r=e[d];if(!a||!r)continue;const l=a._col!=null&&r._col!=null&&a._col===r._col,p=a._col!=null&&r._col!=null&&Math.abs(a._col-r._col)===1,s=Fi.indexOf(a._line||a.job),n=Fi.indexOf(r._line||r.job),x=Math.abs(s-n)===1;if(!((a._line||a.job)===(r._line||r.job)&&p||l&&x))continue;const _=a.country_code&&r.country_code&&a.country_code===r.country_code,m=a.club_id&&r.club_id&&a.club_id===r.club_id;_&&m?t+=2:(_||m)&&(t+=1)}return t}function Ut(e,t={}){const i=e.reduce((a,r)=>{const l=r._line||r.job,p=r.stadiumBonus&&(l==="MIL"||l==="ATT")?10:0;return a+(Number(l==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+p},0),o=Qi(e);let d=i+o;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:o,total:Math.max(0,d)}}function Kt(e,t={}){const i=e.reduce((a,r)=>{const l=r._line||r.job;let p=0;l==="GK"?p=Number(r.note_g)||0:l==="MIL"?p=Number(r.note_m)||0:p=Number(r.note_d)||0;const s=r.stadiumBonus&&(l==="GK"||l==="DEF"||l==="MIL")?10:0;return a+p+(r.boost||0)+s},0),o=Qi(e);let d=i+o;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:o,total:Math.max(0,d)}}function Vt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Zi(e,t,i="easy"){const o=e.filter(r=>!r.used);if(!o.length)return[];const d=[...o].sort((r,l)=>{const p=t==="attack"?ze(r,"ATT"):r._line==="GK"?ze(r,"GK"):ze(r,"DEF");return(t==="attack"?ze(l,"ATT"):l._line==="GK"?ze(l,"GK"):ze(l,"DEF"))-p});let a=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(a,d.length,3))}function Rn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const en={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function tn(e,t){const i=e.player;if(!i)return 0;const o=i.rarity;if(o!=="pepite"&&o!=="papyte")return Number(i[t])||0;const d=Ei(i),a=Number(i[t])||0;if(a<=0)return 0;const r=i.note_min??1,l=i.note_max??10,s=(e.current_note??d)-d;return Math.min(l,Math.max(r,a+s))}function Ei(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Ti(e,t){!e||!t||await Promise.all([gi(e,"win"),gi(t,"loss")])}async function gi(e,t){const{data:i}=await T.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const o=i.filter(d=>{var a,r;return((a=d.player)==null?void 0:a.rarity)==="pepite"||((r=d.player)==null?void 0:r.rarity)==="papyte"});o.length&&await Promise.all(o.map(d=>{const a=en[d.player.rarity],r=t==="win"?a.win:a.loss,l=d.player.note_min??1,p=d.player.note_max??10,s=Ei(d.player),n=d.current_note??s,x=Math.min(p,Math.max(l,n+r));return T.from("cards").update({current_note:x}).eq("id",d.id)}))}async function On(e,t){return gi(e,t)}const nn=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:en,applyOwnEvolution:On,currentSecondaryNote:tn,getBaseMainNote:Ei,updateEvolutiveCards:Ti},Symbol.toStringTag,{value:"Module"})),Hn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},li={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Yt=["GK","DEF","MIL","ATT"],Un=["Tous","GK","DEF","MIL","ATT"],Kn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Di(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Vn(e){return e.length?e.reduce((t,i)=>Di(i)>Di(t)?i:t,e[0]):e[0]}function Yn(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Wn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Jn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ci(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function pi(e,t=""){const i=e.player;if(!i)return"";const o=e.evolution_bonus||0,d={...i,_evolution_bonus:o},a=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${a}
    ${st(d,{width:140})}
  </div>`}function Pi(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${st(e,{width:140})}
  </div>`}async function Xn(e,t){const{state:i,navigate:o,toast:d,openModal:a,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await T.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:p}=await T.from("players").select(`id, firstname, surname_encoded, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(l||[]).filter(H=>H.card_type==="player"&&H.player),n=(l||[]).filter(H=>H.card_type==="game_changer"),x=(l||[]).filter(H=>H.card_type==="formation"),u=(l||[]).filter(H=>H.card_type==="stadium"),{data:h}=await T.from("gc_definitions").select("name,gc_type,color,effect,image_url"),_={};(h||[]).forEach(H=>{_[H.name]=H});const{data:m}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),c={};(m||[]).forEach(H=>{c[H.id]=H}),u.forEach(H=>{H.stadium_def&&(c[H.stadium_id]=H.stadium_def)});const A=Object.keys(_i),g=Object.keys(Oe),I={};s.forEach(H=>{const Z=H.player.id;I[Z]=(I[Z]||0)+1}),new Set(Object.keys(I).map(H=>String(H)));const C=new Set(x.map(H=>H.formation)),j=new Set(n.map(H=>H.gc_type));let F="player",q="Tous",N="",V=!1;function K(){return[...s].sort((H,Z)=>{const ge=Yt.indexOf(H.player.job),de=Yt.indexOf(Z.player.job);return ge!==de?ge-de:(H.player.surname_encoded||"").localeCompare(Z.player.surname_encoded||"")})}function oe(){return[...p||[]].sort((H,Z)=>{const ge=Yt.indexOf(H.job),de=Yt.indexOf(Z.job);return ge!==de?ge-de:(H.surname_encoded||"").localeCompare(Z.surname_encoded||"")})}function ie(){return K().filter(H=>{const Z=H.player,ge=q==="Tous"||Z.job===q,de=!N||`${Z.firstname} ${Z.surname_encoded}`.toLowerCase().includes(N);return ge&&de})}function Q(){return oe().filter(H=>{const Z=q==="Tous"||H.job===q,ge=!N||`${H.firstname} ${H.surname_encoded}`.toLowerCase().includes(N);return Z&&ge})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="player"?"var(--green)":"transparent"};
        color:${F==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${F==="formation"?"var(--green)":"transparent"};
        color:${F==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${x.length})</div>
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function R(){const H=document.getElementById("col-filters");H&&(F==="player"?(H.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${N}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Un.map(Z=>`
            <button class="filter-btn" data-job="${Z}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${Z===q?"var(--green)":"var(--gray-200)"};
                background:${Z===q?"var(--green)":"#fff"};
                color:${Z===q?"#fff":"var(--gray-600)"}">
              ${Z}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${V?"var(--yellow)":"var(--gray-200)"};
              background:${V?"var(--yellow)":"#fff"};
              color:${V?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${V?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",Z=>{N=Z.target.value.toLowerCase(),P()}),e.querySelectorAll(".filter-btn").forEach(Z=>{Z.addEventListener("click",()=>{q=Z.dataset.job,R(),P()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{V=!V,R(),P()})):(H.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${V?"var(--yellow)":"var(--gray-200)"};
              background:${V?"var(--yellow)":"#fff"};
              color:${V?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${V?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{V=!V,R(),P()})))}function P(){const H=document.getElementById("col-grid");H&&(F==="player"?Ee(H):F==="formation"?se(H):F==="stadium"?ce(H):pe(H))}function re(H,Z,ge,de,me){const ne=document.getElementById("col-grid"),ue=document.getElementById("col-big");if(!ne||!ue)return;var Le=0;function Ie(){const Ce=window.innerWidth>=768,Te=document.getElementById("col-big"),qe=document.getElementById("col-grid");Ce&&Te&&(Te.style.minHeight="420px",Te.style.flex="1 1 auto"),Ce&&qe&&(qe.style.height=Math.round(310*.76+16)+"px",qe.style.flexShrink="0",qe.style.overflowX="auto",qe.style.overflowY="hidden",qe.style.alignItems="center",qe.style.padding="8px 16px"),ue.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+Z(H[Le])+"</div>";var Pe=ue.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Pe&&Pe.addEventListener("click",function(){de(H[Le])}),requestAnimationFrame(function(){var Se=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!Se||!ue)){var B=ue.clientHeight-8,$=ue.clientWidth-24,f=Se.offsetHeight,y=Se.offsetWidth;if(f>0&&y>0&&B>40){var b=Ce?2.2:1,v=Math.min(B/f,$/y,b);Se.style.transform="scale("+v.toFixed(3)+")",Se.style.transformOrigin="top center"}}}),ne.innerHTML=H.map(function(Se,B){var $=B===Le,f="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+($?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+B+'" style="'+f+'">'+ge(Se,$)+"</div>"}).join(""),ne.querySelectorAll(".col-mini-item").forEach(function(Se){Se.addEventListener("click",function(){Le=Number(Se.dataset.idx),Ie(),Se.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Ie()}function xe(H){var Z=window.innerWidth>=768?.76:.54,ge;if(!H||H._fake){var de=H?H.player:null;if(!de)return"";ge=Pi(de)}else ge=pi(H,"");return'<div style="display:inline-block;zoom:'+Z+';pointer-events:none;line-height:0">'+ge+"</div>"}function _e(H,Z,ge){Z=Z||100,ge=ge||140;var de=Ht[H]||{},me={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ne=Math.max(3,Math.round(Z*.06)),ue=Object.entries(de).map(function(Ie){var Ce=Ie[0],Te=Ie[1],qe=Ce.replace(/\d+$/,""),Pe=me[qe]||"#888",Se=Math.round(Te.x*Z),B=Math.round(Te.y*ge);return'<circle cx="'+Se+'" cy="'+B+'" r="'+ne+'" fill="'+Pe+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Le=Math.max(1,Math.round(Z/50));return'<svg viewBox="0 0 '+Z+" "+ge+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+Z+'" height="'+ge+'" fill="#1A6B3C"/><rect x="'+Math.round(Z*.2)+'" y="'+Math.round(ge*.02)+'" width="'+Math.round(Z*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Le+'"/><line x1="0" y1="'+Math.round(ge*.5)+'" x2="'+Z+'" y2="'+Math.round(ge*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Le+'"/><ellipse cx="'+Math.round(Z*.5)+'" cy="'+Math.round(ge*.5)+'" rx="'+Math.round(Z*.18)+'" ry="'+Math.round(ge*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Le+'"/><rect x="'+Math.round(Z*.2)+'" y="'+Math.round(ge*.82)+'" width="'+Math.round(Z*.6)+'" height="'+Math.round(ge*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Le+'"/>'+ue+"</svg>"}function we(H,Z,ge){var de=ge>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ge+"</div>":"",me=Z?'data-form-id="'+Z.id+'"':"",ne=H.length>7?14:H.length>5?16:19,ue=!!Z;return"<div "+me+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(ue?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(ue?"":"filter:grayscale(1);opacity:0.5")+'">'+de+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(ue?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ne+"px;font-weight:900;color:"+(ue?"#1A6B3C":"#aaa")+';line-height:1">'+H+'</div></div><div style="flex:1;overflow:hidden;background:'+(ue?"#1A6B3C":"#ccc")+'">'+_e(H,140,220)+"</div></div>"}function ve(H,Z){var ge=window.innerWidth>=768?.76:.54,de=140,me=305,ne=Math.round(me*.22),ue=me-ne,Le=H.length>7?10:13,Ie=_e(H,de,ue),Ce=Z?"1.5px solid #2a7a40":"1px solid #ddd",Te=Z?"":"filter:grayscale(1);opacity:0.45;",qe=Z?"#1A6B3C":"#bbb",Pe="#fff";return'<div style="display:inline-block;zoom:'+ge+';line-height:0;pointer-events:none"><div style="width:'+de+"px;height:"+me+"px;border-radius:6px;border:"+Ce+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+Te+'"><div style="height:'+ne+"px;background:"+qe+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Le+"px;font-weight:900;color:"+Pe+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(de-4)+'px">'+H+'</span></div><div style="height:'+ue+'px;overflow:hidden;flex-shrink:0">'+Ie+"</div></div></div>"}function Ee(H){if(V){const Z=Q();if(!Z.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ge=Z.map(de=>s.find(me=>me.player.id===de.id)||{_fake:!0,player:de,id:"fake-"+de.id});re(ge,de=>de._fake?Pi(de.player):pi(de,""),de=>de._fake?xe({player:de.player,id:"x",_fake:!0}):xe(de),de=>{de._fake||Gi(de,s,I,t)})}else{const Z=ie();if(!Z.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ge={};Z.forEach(me=>{const ne=me.player.id;ge[ne]||(ge[ne]=[]),ge[ne].push(me)});const de=Object.values(ge).map(me=>Vn(me));re(de,me=>{const ne=I[me.player.id]||1,ue=ne>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ne}</div>`:"",Ie=s.filter(Ce=>Ce.player.id===me.player.id&&Ce.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return pi(me,ue+Ie)},me=>xe(me),me=>Gi(me,s,I,t))}}function se(H){const Z=V?A:[...C];if(!Z.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ge=Z.map(de=>({formation:de,card:x.find(me=>me.formation===de)||null,owned:C.has(de)}));re(ge,({formation:de,card:me,owned:ne})=>we(de,ne?me:null,ne?x.filter(ue=>ue.formation===de).length:0),({formation:de,owned:me})=>ve(de,me),({card:de,owned:me})=>{me&&de&&Zn(de,x,t,a)})}function pe(H){const Z=Object.keys(_),ge=V?Z.length?Z:g:[...j];if(!ge.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const de=ge.map(me=>({type:me,gc:Oe[me]||{icon:"⚡",desc:""},def:_[me]||null,owned:j.has(me),card:n.find(ne=>ne.gc_type===me)||null}));re(de,({type:me,gc:ne,def:ue,owned:Le,card:Ie})=>{var b;const Ce=Le?n.filter(v=>v.gc_type===me).length:0,Te=Ce>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Ce}</div>`:"",qe=(ue==null?void 0:ue.gc_type)==="ultra_game_changer",Pe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Se={purple:"#b06ce0",light_blue:"#00d4ef"},B=Pe[ue==null?void 0:ue.color]||Pe.purple,$=Se[ue==null?void 0:ue.color]||Se.purple,f=(ue==null?void 0:ue.effect)||ne.desc||"",y=ue!=null&&ue.image_url?`/icons/${ue.image_url}`:((b=ue==null?void 0:ue.club)==null?void 0:b.logo_url)||(ue!=null&&ue.country_code?`https://flagsapi.com/${ue.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Le&&Ie?`<div data-gc-id="${Ie.id}" data-gc-type="${me}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${$};background:${B};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${$}66;cursor:pointer">
          ${Te}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${me.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${me}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${qe?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${y?`<img src="${y}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ne.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${f.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${me}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ne.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:me,gc:ne,def:ue,owned:Le})=>{const Ie=window.innerWidth>=768?.76:.54,Ce={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Te={purple:"#9b59b6",light_blue:"#00bcd4"},qe=Ce[ue==null?void 0:ue.color]||Ce.purple,Pe=Te[ue==null?void 0:ue.color]||Te.purple,Se=ue!=null&&ue.image_url?`/icons/${ue.image_url}`:null;return Le?`<div style="display:inline-block;zoom:${Ie};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${qe};border:1px solid ${Pe};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${me}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${Se?`<img src="${Se}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${ne.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((ue==null?void 0:ue.effect)||ne.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Ie};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${ne.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${me}</span></div></div>`},({type:me,owned:ne,def:ue})=>{ne&&Qn(me,ue,a)})}function ce(H){const Z="#E87722",ge="/";if(!u.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const de={};u.forEach(ne=>{const ue=ne.stadium_id||"?";(de[ue]=de[ue]||[]).push(ne)});const me=Object.entries(de).map(([ne,ue])=>({sid:ne,def:c[ne]||null,count:ue.length,card:ue[0]}));re(me,({def:ne,count:ue})=>{var Pe,Se;const Le=(ne==null?void 0:ne.name)||"?",Ie=((Pe=ne==null?void 0:ne.club)==null?void 0:Pe.encoded_name)||(ne==null?void 0:ne.country_code)||"—",Ce=ne!=null&&ne.image_url?`${ge}icons/${ne.image_url}`:((Se=ne==null?void 0:ne.club)==null?void 0:Se.logo_url)||(ne!=null&&ne.country_code?`https://flagsapi.com/${ne.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Te=Ce?`<img src="${Ce}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',qe=ue>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ue}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${Z},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Z}66">
          ${qe}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Le}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${Te}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Ie}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:ne,count:ue})=>{var Pe,Se;const Le=window.innerWidth>=768?.76:.54,Ie=(ne==null?void 0:ne.name)||"?",Ce=((Pe=ne==null?void 0:ne.club)==null?void 0:Pe.encoded_name)||(ne==null?void 0:ne.country_code)||"—",Te=ne!=null&&ne.image_url?`${ge}icons/${ne.image_url}`:((Se=ne==null?void 0:ne.club)==null?void 0:Se.logo_url)||(ne!=null&&ne.country_code?`https://flagsapi.com/${ne.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),qe=Te?`<img src="${Te}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${Le};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${Z},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${Ie}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${qe}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${Ce}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(H=>{H.addEventListener("click",()=>{F=H.dataset.tab,q="Tous",N="",V=!1,e.querySelectorAll(".col-tab-btn").forEach(Z=>{const ge=Z.dataset.tab===F;Z.style.borderBottomColor=ge?"var(--green)":"transparent",Z.style.color=ge?"var(--green)":"var(--gray-600)"}),R(),P()})}),R(),P()}function Qn(e,t,i){const o=Oe[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",a={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},l=a[t==null?void 0:t.color]||a.purple,p=r[t==null?void 0:t.color]||r.purple,s=(t==null?void 0:t.name)||e,n=(t==null?void 0:t.effect)||o.desc,x=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${d?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${s}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${x?`<img src="${x}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${o.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${n}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Wt=1e3;function Zn(e,t,i,o){var _,m,c;const{state:d,toast:a,closeModal:r,navigate:l,refreshProfile:p}=i,s=e.formation,n={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function x(){const A=Ht[s]||{},g=_i[s]||[],I=290,C=360,j=20;function F(N){const V=A[N];return V?{x:V.x*I,y:V.y*C}:null}let q=`<svg width="${I}" height="${C}" viewBox="0 0 ${I} ${C}" xmlns="http://www.w3.org/2000/svg">`;for(const[N,V]of g){const K=F(N),oe=F(V);!K||!oe||(q+=`<line x1="${K.x}" y1="${K.y}" x2="${oe.x}" y2="${oe.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const N of Object.keys(A)){const V=F(N);if(!V)continue;const K=N.replace(/\d+/,""),oe=n[K]||"#555";q+=`<circle cx="${V.x}" cy="${V.y}" r="${j}" fill="${oe}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,q+=`<text x="${V.x}" y="${V.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${K}</text>`}return q+="</svg>",q}const u=t.filter(A=>A.formation===s);u.length;const h=!e.is_for_sale;o(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${x()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${h?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Wt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(_=document.getElementById("direct-sell-form-btn"))==null||_.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${Wt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const A=u.find(I=>!I.is_for_sale)||u[0];if(!A){a("Aucune carte à vendre","error");return}await T.from("market_listings").delete().eq("card_id",A.id),await T.from("transfer_history").delete().eq("card_id",A.id);const{error:g}=await T.from("cards").delete().eq("id",A.id);if(g){a(g.message,"error");return}await T.from("users").update({credits:(d.profile.credits||0)+Wt}).eq("id",d.profile.id),await p(),a(`+${Wt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),l("collection")}),(m=document.getElementById("market-sell-form-btn"))==null||m.addEventListener("click",async()=>{const A=parseInt(document.getElementById("sell-price-form").value);if(!A||A<1){a("Prix invalide","error");return}await T.from("cards").update({is_for_sale:!0,sale_price:A}).eq("id",e.id),await T.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:A}),a("Carte mise en vente sur le marché !","success"),r(),l("collection")}),(c=document.getElementById("cancel-sell-form-btn"))==null||c.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),a("Annonce retirée","success"),r(),l("collection")})}async function Gi(e,t,i,o){var xe,_e,we,ve,Ee;const{state:d,toast:a,openModal:r,closeModal:l,navigate:p,refreshProfile:s}=o,n=e.player,x=t.filter(se=>se.player.id===n.id),u=x.length,h=e.evolution_bonus||0,_=Math.max((Number(n.note_g)||0)+(n.job==="GK"||n.job2==="GK"?h:0),(Number(n.note_d)||0)+(n.job==="DEF"||n.job2==="DEF"?h:0),(Number(n.note_m)||0)+(n.job==="MIL"||n.job2==="MIL"?h:0),(Number(n.note_a)||0)+(n.job==="ATT"||n.job2==="ATT"?h:0)),m=n.rarity||"normal",{data:c}=await T.from("sell_price_configs").select("*").eq("rarity",m).lte("note_min",_).gte("note_max",_).order("note_min",{ascending:!1}).limit(1);((xe=c==null?void 0:c[0])==null?void 0:xe.price)??Kn[m];const A=n.rarity!=="legende";Jn(n);const g=((n.rarity==="pepite"||n.rarity==="papyte")&&e.current_note!=null?e.current_note:ci(n,n.job))+h,I=n.rarity==="pepite"||n.rarity==="papyte",C=n.job2?(I?tn(e,Yn(n.job2)):ci(n,n.job2))+(ci(n,n.job2)>0?h:0):null;li[n.job],n.job2&&li[n.job2];const j=Hn[n.rarity]||"#ccc";Wn[n.country_code]||n.country_code;const F=e.evolution_bonus||0,N=g+F,V=C||0,K=V>0?V+F:0,oe=x.map(se=>se.id);let ie={};if(oe.length){const{data:se}=await T.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",oe).order("transferred_at",{ascending:!0});(se||[]).forEach(pe=>{ie[pe.card_id]||(ie[pe.card_id]=[]),ie[pe.card_id].push(pe)})}const Q=se=>{const pe=se.transferred_at?new Date(se.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ce=se.source==="booster"?"Booster":se.price?se.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${se.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${se.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${se.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${ce}</div>
        <div style="font-size:11px;color:var(--gray-600)">${pe}</div>
      </div>
    </div>`},R=oe.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${u>1?`(${u})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${x.map((se,pe)=>{const ce=ie[se.id]||[],H=se.is_for_sale,Z=ce.length?ce[ce.length-1]:null,de=(n.rarity==="pepite"||n.rarity==="papyte")&&se.current_note!=null?` (☆${se.current_note})`:"";return`
            <div data-card-id="${se.id}" data-card-idx="${pe}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${H?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${se.id}" ${H?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${pe+1}${de}${H?" 🏷️ En vente":""}</div>
                  ${Z?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${Z.club_name} · ${Z.source==="booster"?"Booster":Z.price?Z.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${pe}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${ce.length?`${ce.length} club${ce.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${pe}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${ce.map(Q).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${N}${n.job2&&V>0?` / ${K}`:""}`:`Note actuelle : ${N}${n.job2&&V>0?` / ${K}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${u<=1?"#ccc":"#1A6B3C"};border-color:${u<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${u<=1?"not-allowed":"pointer"}"
            ${u<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${A?`
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
    </div>`:"";r(`${n.firstname} ${n.surname_encoded}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${st({...n,_evolution_bonus:h},{width:160})}


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
            ${[["GK",n.note_g],["DEF",n.note_d],["MIL",n.note_m],["ATT",n.note_a]].map(([se,pe])=>{const ce=li[se],H=se==="GK"?"#fff":ce,Z=se===n.job||se===n.job2,ge=(Number(pe)||0)+(Z&&F>0?F:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${ce};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${H};font-family:Arial Black,Arial;line-height:1">${ge}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${H}">${se}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${u}</div>
        </div>
      </div>
    </div>
    ${R}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(_e=document.getElementById("close-detail"))==null||_e.addEventListener("click",l);let P=new Set;const re=()=>{const se=P.size,pe=document.getElementById("sell-action-panel");if(!pe)return;pe.style.display=se>0?"block":"none",document.getElementById("sell-selected-count").textContent=se;const ce=document.getElementById("evolve-btn");ce&&(ce.textContent=`⬆️ Évoluer ${se>1?"(+"+se+")":""}`)};document.querySelectorAll(".expl-check").forEach(se=>{se.addEventListener("change",()=>{const pe=se.dataset.id;se.checked?P.add(pe):P.delete(pe);const ce=se.closest(".exemplaire-row");ce&&(ce.style.borderColor=se.checked?"#1A6B3C":"#eee"),re()})}),document.querySelectorAll(".exemplaire-row").forEach(se=>{se.addEventListener("click",pe=>{if(pe.target.closest("button")||pe.target.tagName==="INPUT")return;const ce=se.querySelector(".expl-check");ce&&!ce.disabled&&(ce.checked=!ce.checked,ce.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(se=>{se.addEventListener("click",pe=>{pe.stopPropagation();const ce=document.querySelector(`.expl-hist[data-hist="${se.dataset.idx}"]`);ce&&(ce.style.display=ce.style.display==="none"?"flex":"none")})}),(we=document.getElementById("evolve-btn"))==null||we.addEventListener("click",async()=>{if(u<=1)return;const se=[...P];if(!se.length)return;if(P.has(e.id)){const me=document.createElement("div");me.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",me.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(me),me.querySelector("#err-close").addEventListener("click",()=>me.remove()),me.addEventListener("click",ne=>{ne.target===me&&me.remove()});return}const pe=se.filter(me=>me!==e.id),ce=n.rarity==="legende"?2:1;if((pe.length||1)*ce,!(!pe.length&&se.length===1&&se[0]===e.id)){if(!pe.length){a("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(me=>{const ne=document.createElement("div");ne.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ne.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${n.firstname} ${n.surname_encoded}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${pe.length}</strong> copie${pe.length>1?"s":""} sacrifiée${pe.length>1?"s":""}<br>
            📈 Note : <strong>${g+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${g+(e.evolution_bonus||0)+pe.length*ce}</strong>
            ${C&&C>0?`<br>📈 Note 2 : <strong>${C+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${C+(e.evolution_bonus||0)+pe.length*ce}</strong>`:""}
            ${n.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${ce} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ne),ne.querySelector("#sac-cancel").addEventListener("click",()=>{ne.remove(),me(!1)}),ne.querySelector("#sac-ok").addEventListener("click",()=>{ne.remove(),me(!0)}),ne.addEventListener("click",ue=>{ue.target===ne&&(ne.remove(),me(!1))})}))return;if(pe.length){await T.from("market_listings").delete().in("card_id",pe),await T.from("deck_cards").delete().in("card_id",pe),await T.from("transfer_history").delete().in("card_id",pe),await T.from("decks").update({stadium_card_id:null}).in("stadium_card_id",pe);const{error:me}=await T.from("cards").delete().in("id",pe);if(me){a("Erreur suppression : "+me.message,"error");return}}const Z=(e.evolution_bonus||0)+pe.length*ce,{error:ge}=await T.from("cards").update({evolution_bonus:Z}).eq("id",e.id);if(ge){a("Erreur évolution : "+ge.message,"error");return}const de=g+Z;a(`⬆️ ${n.firstname} ${n.surname_encoded} : note ${g+e.evolution_bonus||g} → ${de}${pe.length?` · ${pe.length} copie${pe.length>1?"s":""} sacrifiée${pe.length>1?"s":""}`:""} !`,"success",4e3),l(),p("collection")}),(ve=document.getElementById("market-sell-btn"))==null||ve.addEventListener("click",async()=>{var ge;const se=[...P];if(!se.length){a("Sélectionne au moins un exemplaire","warning");return}const pe=parseInt((ge=document.getElementById("sell-market-price"))==null?void 0:ge.value);if(!pe||pe<1){a("Prix invalide","error");return}const{error:ce}=await T.from("cards").update({is_for_sale:!0,sale_price:pe}).in("id",se);if(ce){a(ce.message,"error");return}const H=se.map(de=>({seller_id:d.profile.id,card_id:de,price:pe,status:"active"})),{error:Z}=await T.from("market_listings").insert(H);Z&&console.warn("[Market] insert listings:",Z.message),a(`${se.length} carte${se.length>1?"s":""} mise${se.length>1?"s":""} en vente à ${pe.toLocaleString("fr")} cr. chacune !`,"success"),l(),p("collection")}),(Ee=document.getElementById("cancel-sell-btn"))==null||Ee.addEventListener("click",async()=>{await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await T.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),a("Annonce retirée","success"),l(),p("collection")})}const Zt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function mi(e,t){const{state:i,navigate:o,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await T.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(a==null?void 0:a.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(a==null?void 0:a.length)>0?a.map(r=>`
          <div class="card-panel" data-open-deck="${r.id}"
            style="display:flex;justify-content:space-between;align-items:center;padding:14px;cursor:pointer">
            <div style="font-weight:700;font-size:15px;flex:1">${r.name}</div>
            <div style="display:flex;gap:6px" onclick="event.stopPropagation()">
              <button class="btn btn-ghost btn-sm" data-rename="${r.id}" data-name="${r.name}">✏️</button>
              <button class="btn btn-ghost btn-sm" style="color:var(--red,#c0392b)" data-delete="${r.id}" data-name="${r.name}">🗑️</button>
            </div>
          </div>`).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun deck. Crée ton premier !</div>'}
      </div>
      <div style="margin-top:16px">
        <button class="btn btn-primary" id="new-deck-btn" style="width:100%">+ Nouveau deck</button>
      </div>
    </div>
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((a==null?void 0:a.length)||0)+1}`);if(!r)return;const{data:l,error:p}=await T.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(p){d(p.message,"error");return}d("Deck créé !","success"),Ni(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>Ni(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",r.dataset.name);if(!l||l===r.dataset.name)return;const{error:p}=await T.from("decks").update({name:l}).eq("id",r.dataset.rename);if(p){d(p.message,"error");return}d("Deck renommé !","success"),mi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await T.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:l}=await T.from("decks").delete().eq("id",r.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),mi(e,t)})})}async function Ni(e,t,i){const{state:o,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await T.from("decks").select("*").eq("id",e).single(),{data:r}=await T.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id),{data:l}=await T.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",o.profile.id).eq("card_type","stadium"),p=(r||[]).filter(A=>A.card_type==="player"&&A.player),s=(r||[]).filter(A=>A.card_type==="formation"),n=(l||[]).filter(A=>A.card_type==="stadium"),x=[...new Set(n.map(A=>A.stadium_id).filter(Boolean))];let u={};if(n.forEach(A=>{A.stadium_def&&A.stadium_id&&(u[A.stadium_id]=A.stadium_def)}),x.length&&Object.keys(u).length<x.length){const{data:A}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",x);(A||[]).forEach(g=>{u[g.id]=g})}const h=s.map(A=>A.formation).filter(Boolean),{data:_}=await T.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let m=a.formation||"4-4-2";h.length>0&&!h.includes(m)&&(m=h[0]);const c={deckId:e,name:a.name,formation:m,formationCardId:a.formation_card_id,stadiumCardId:a.stadium_card_id||null,slots:{},subs:[],playerCards:p,formationCards:s,stadiumCards:n,stadDefMap:u,availableFormations:h};(_||[]).forEach(A=>{A.is_starter?c.slots[A.position]=A.card_id:c.subs.includes(A.card_id)||c.subs.push(A.card_id)}),ht(t,c,i)}function ht(e,t,i){var _,m;const{navigate:o}=i;Zt[t.formation];const d=Ri(t.formation),a=d.filter(c=>t.slots[c]).length,r=t.availableFormations.length>0?t.availableFormations:Object.keys(Zt),l=(_=t.stadiumCards)==null?void 0:_.find(c=>c.id===t.stadiumCardId),p=l&&((m=t.stadDefMap)==null?void 0:m[l.stadium_id])||null,s=t.subs.map(c=>t.playerCards.find(A=>A.id===c)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:10px">
      <button class="btn-icon" id="builder-back" style="font-size:20px">←</button>
      <div style="flex:1">
        <h2 style="font-size:18px">${t.name}</h2>
        <p>${a}/11 titulaires · ${t.subs.length}/5 remplaçants</p>
      </div>
    </div>



    <!-- ── LAYOUT PC ─────────────────────────────────────── -->
    <div class="deck-pc-layout" style="display:none">
      <div style="display:flex;gap:0;min-height:600px">

        <!-- Remplaçants (colonne gauche) -->
        <div style="width:130px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 8px;gap:10px;border-right:1px solid rgba(255,255,255,0.1)">
          <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center">Remplaçants (${t.subs.length}/5)</div>

          <!-- Remplaçants PC : colonne verticale -->
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center;margin-top:8px">Remplaçants<br>(${t.subs.length}/5)</div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:center" id="subs-list">
            ${s.map(c=>{const A={...c.player,_evolution_bonus:c.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                ${st({...A,_evolution_bonus:A._evolution_bonus||0},{width:60,showStad:!0,stadDef:p})}
                <button data-remove-sub="${c.id}"
                  style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${t.subs.length<5?'<div id="add-sub-btn" style="width:60px;height:77px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(255,255,255,0.4);cursor:pointer">+</div>':""}
          </div>
        </div>

        <!-- Terrain PC (colonne centrale) -->
        <div style="flex:1;background:linear-gradient(180deg,#1a6b3c,#0a3d1e);overflow:hidden;height:700px">
          <div id="deck-field-pc" style="margin-top:50px"></div>
        </div>

        <!-- Formation + Stade (colonne droite) -->
        <div style="width:130px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 8px;gap:12px;border-left:1px solid rgba(255,255,255,0.1)">
          <!-- Formation -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Formation</div>
            <div id="formation-pc-btn" style="cursor:pointer;width:100px;height:50px;border-radius:8px;background:#1a3a6b;border:2px solid #555;display:flex;align-items:center;justify-content:center;margin:0 auto">
              <span style="font-size:18px;font-weight:900;color:#fff">${t.formation}</span>
            </div>
          </div>
          <!-- Stade -->
          <div style="width:100%;text-align:center">
            <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">🏟️ Stade</div>
            <div id="add-stad-btn-pc" style="cursor:pointer;margin:0 auto;width:fit-content">
              ${l?(()=>{var g;const c=t.stadDefMap[l.stadium_id],A=((g=c==null?void 0:c.club)==null?void 0:g.logo_url)||null;return`<div style="width:100px;height:130px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                  ${A?`<img src="${A}" style="width:48px;height:48px;object-fit:contain">`:'<span style="font-size:36px">🏟️</span>'}
                  <span style="font-size:10px;font-weight:700;color:#E87722;text-align:center;padding:0 4px">${((c==null?void 0:c.name)||"Stade").slice(0,14)}</span>
                </div>`})():`<div style="width:100px;height:130px;border:2px dashed rgba(255,165,0,0.4);border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                <span style="font-size:36px">🏟️</span>
                <span style="font-size:10px;color:rgba(255,255,255,0.4)">Ajouter</span>
              </div>`}
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- ── LAYOUT MOBILE ─────────────────────────────────── -->
    <div class="deck-mobile-layout" style="display:none">
      <!-- Terrain mobile -->
      <div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);overflow:hidden">
        <div id="deck-field-mobile" style="margin-top:30px"></div>
      </div>

      <!-- Remplaçants + Stade mobile -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.1)">
        <div style="display:flex;gap:10px;align-items:flex-start">
          <!-- Remplaçants mobile -->
          <div style="flex:1;min-width:0">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">Remplaçants (${t.subs.length}/5)</div>
            <div style="display:flex;gap:4px;align-items:flex-end;flex-wrap:nowrap;overflow-x:auto" id="subs-list">
              ${s.map(c=>{const A={...c.player,_evolution_bonus:c.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                  ${st({...A,_evolution_bonus:A._evolution_bonus||0},{width:44,showStad:!0,stadDef:p})}
                  <button data-remove-sub="${c.id}"
                    style="position:absolute;top:-5px;right:-5px;width:15px;height:15px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0;z-index:10">✕</button>
                </div>`}).join("")}
              ${t.subs.length<5?'<div id="add-sub-btn" style="width:28px;height:36px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
            </div>
          </div>
          <!-- Formation mobile -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">⚽</div>
            <div id="formation-mobile-btn" style="cursor:pointer;width:50px;height:65px;border-radius:6px;background:#1a3a6b;border:2px solid #555;display:flex;align-items:center;justify-content:center">
              <span style="font-size:11px;font-weight:900;color:#fff;text-align:center">${t.formation}</span>
            </div>
          </div>
          <!-- Stade mobile : à droite -->
          <div style="flex-shrink:0;text-align:center">
            <div style="font-size:10px;font-weight:700;margin-bottom:6px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase">🏟️</div>
            <div id="add-stad-btn" style="cursor:pointer">
              ${l?(()=>{var g;const c=t.stadDefMap[l.stadium_id],A=((g=c==null?void 0:c.club)==null?void 0:g.logo_url)||null;return`<div style="width:50px;height:65px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                  ${A?`<img src="${A}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:18px">🏟️</span>'}
                  <span style="font-size:14px;font-weight:700;color:#E87722;text-align:center;padding:0 2px">${((c==null?void 0:c.name)||"Stade").slice(0,10)}</span>
                </div>`})():`<div style="width:50px;height:65px;border:2px dashed rgba(255,165,0,0.4);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                <span style="font-size:18px">🏟️</span>
                <span style="font-size:8px;color:rgba(255,255,255,0.4)">+</span>
              </div>`}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sauvegarder -->
    <div class="page-body" style="padding-bottom:20px">
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${a<11?"disabled":""}>
        ${a<11?`Placez encore ${11-a} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`;const n=window.innerWidth>=900,x=e.querySelector(".deck-pc-layout"),u=e.querySelector(".deck-mobile-layout");x&&(x.style.display=n?"block":"none"),u&&(u.style.display=n?"none":"block"),eo(e,t,d,i),e.querySelectorAll("#builder-back").forEach(c=>c.addEventListener("click",()=>o("decks")));const h=()=>{const{openModal:c,closeModal:A}=i,g=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${r.map(I=>`<div data-forma="${I}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${I===t.formation?"#1A6B3C":"#f0f0f0"};color:${I===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${I===t.formation?"#1A6B3C":"#ddd"}">${I}</div>`).join("")}
    </div>`;c("⚽ Choisir une formation",g),document.querySelectorAll("#modal-body [data-forma]").forEach(I=>{I.addEventListener("click",()=>{t.formation=I.dataset.forma;const C=Ri(t.formation),j={};C.forEach(F=>{t.slots[F]&&(j[F]=t.slots[F])}),t.slots=j,A(),ht(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(c=>c.addEventListener("click",h)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(c=>c.addEventListener("click",()=>to(t,e,i))),e.querySelectorAll("#save-deck").forEach(c=>c.addEventListener("click",()=>oo(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(c=>{c.addEventListener("click",()=>{t.subs=t.subs.filter(A=>A!==c.dataset.removeSub),ht(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(c=>c.addEventListener("click",()=>no(t,e,i)))}function eo(e,t,i,o){var I,C;const d=window.innerWidth>=900,a=e.querySelector(d?"#deck-field-pc":"#deck-field-mobile");if(!a)return;const r=(I=t.stadiumCards)==null?void 0:I.find(j=>j.id===t.stadiumCardId),l=r&&((C=t.stadDefMap)==null?void 0:C[r.stadium_id])||null,p=Ht[t.formation]||{},s=Ki(t.formation)||[],n={};for(const j of i){const F=t.slots[j],q=F?t.playerCards.find(N=>N.id===F):null;q!=null&&q.player?n[j]={...q.player,_evolution_bonus:q.evolution_bonus||0,face:q.player.face||null}:n[j]=null}const x=window.innerWidth>=900,u=x?window.innerWidth-280:window.innerWidth-20,h=x?Math.min(u,860):u,_=Math.round(x?h*.82:h*.9),m=x?84:44;let c="";for(const[j,F]of s){const q=p[j],N=p[F];if(!q||!N)continue;const V=q.x*h,K=Math.round(.03*_+q.y*.85*_),oe=N.x*h,ie=Math.round(.03*_+N.y*.85*_),Q=n[j],R=n[F],P=ot(Q,R);P==="#ff3333"||P==="#cc2222"?c+=`<line x1="${V.toFixed(1)}" y1="${K.toFixed(1)}" x2="${oe.toFixed(1)}" y2="${ie.toFixed(1)}" stroke="${P}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(c+=`<line x1="${V.toFixed(1)}" y1="${K.toFixed(1)}" x2="${oe.toFixed(1)}" y2="${ie.toFixed(1)}" stroke="${P}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,c+=`<line x1="${V.toFixed(1)}" y1="${K.toFixed(1)}" x2="${oe.toFixed(1)}" y2="${ie.toFixed(1)}" stroke="${P}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let A="";const g=Math.round(m*657/507);for(const j of i){const F=p[j];if(!F)continue;const q=n[j],N=F.x*h;F.y*_;const V=Math.round(.03*_+F.y*(.85*_)),K=Math.round(N-m/2),oe=Math.round(V-g/2);if(q){const ie=j.replace(/\d+/,""),Q=l&&(l.club_id&&String(q.club_id)===String(l.club_id)||l.country_code&&q.country_code===l.country_code),R=st({...q,_evolution_bonus:q._evolution_bonus||0},{width:m,showStad:!0,stadDef:l,role:ie});A+=`<div style="position:absolute;left:${K}px;top:${oe}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${j}">
        <div style="position:relative">${Q?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${R}</div>
      </div>`}else{const ie=j.replace(/\d+/,"");A+=`<div style="position:absolute;left:${K}px;top:${oe}px;width:${m}px;height:${g}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${j}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${ie}</span>
      </div>`}}a.innerHTML=`
    <div style="position:relative;width:${h}px;height:${_}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${h} ${_}">${c}</svg>
      ${A}
    </div>`,a.querySelectorAll(".deck-slot-hit").forEach(j=>{j.addEventListener("click",()=>io(j.dataset.pos,t,e,o))})}function to(e,t,i){var r;const{openModal:o,closeModal:d}=i,a=e.stadiumCards||[];o("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(l=>{var u;const p=e.stadDefMap[l.stadium_id],s=((u=p==null?void 0:p.club)==null?void 0:u.logo_url)||null,n=p!=null&&p.image_url?"/icons/"+p.image_url:null,x=e.stadiumCardId===l.id;return`<div class="stad-choice" data-stad-id="${l.id}" style="cursor:pointer;width:70px;text-align:center">
          <div style="width:65px;height:85px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${x?"#E87722":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;overflow:hidden;position:relative">
            ${n?`<img src="${n}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${s?`<img src="${s}" style="width:32px;height:32px;object-fit:contain;position:relative;z-index:1">`:'<span style="font-size:22px">🏟️</span>'}
            <span style="font-size:8px;font-weight:700;color:${x?"#E87722":"#ccc"};position:relative;z-index:1;padding:0 2px;text-align:center">${((p==null?void 0:p.name)||"Stade").slice(0,12)}</span>
          </div>
        </div>`}).join("")}
    </div>`),(r=document.getElementById("stad-none"))==null||r.addEventListener("click",()=>{e.stadiumCardId=null,d(),ht(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(l=>{l.addEventListener("click",()=>{e.stadiumCardId=l.dataset.stadId,d(),ht(t,e,i)})})}function io(e,t,i,o){var _,m,c,A,g;const{openModal:d,closeModal:a}=o,r=e.replace(/\d+/,""),l=(_=t.stadiumCards)==null?void 0:_.find(I=>I.id===t.stadiumCardId),p=l&&((m=t.stadDefMap)==null?void 0:m[l.stadium_id])||null,s=t.slots[e],n=s?t.playerCards.find(I=>I.id===s):null;(c=n==null?void 0:n.player)==null||c.id;const x=new Set;Object.entries(t.slots).forEach(([I,C])=>{var F;if(I===e||!C)return;const j=t.playerCards.find(q=>q.id===C);(F=j==null?void 0:j.player)!=null&&F.id&&x.add(j.player.id)}),t.subs.forEach(I=>{var j;const C=t.playerCards.find(F=>F.id===I);(j=C==null?void 0:C.player)!=null&&j.id&&x.add(C.player.id)});const u=new Set,h=t.playerCards.filter(I=>{const C=I.player;return!(C.job===r||C.job2===r)||x.has(C.id)||u.has(C.id)?!1:(u.add(C.id),!0)});h.sort((I,C)=>{const j=I.evolution_bonus||0,F=C.evolution_bonus||0,q=(r==="GK"?I.player.note_g:r==="DEF"?I.player.note_d:r==="MIL"?I.player.note_m:I.player.note_a)+(r===I.player.job||r===I.player.job2?j:0);return(r==="GK"?C.player.note_g:r==="DEF"?C.player.note_d:r==="MIL"?C.player.note_m:C.player.note_a)+(r===C.player.job||r===C.player.job2?F:0)-q}),d(`Choisir ${r} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${h.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+h.map(I=>{const C={...I.player,_evolution_bonus:I.evolution_bonus||0};return`<div class="player-option" data-card-id="${I.id}" style="cursor:pointer">
          ${st(C,{width:100,showStad:!0,stadDef:p,role:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(A=document.getElementById("close-selector"))==null||A.addEventListener("click",a),(g=document.getElementById("remove-player"))==null||g.addEventListener("click",()=>{delete t.slots[e],a(),ht(i,t,o)}),document.querySelectorAll(".player-option").forEach(I=>{I.addEventListener("click",()=>{t.slots[e]=I.dataset.cardId,a(),ht(i,t,o)})})}function no(e,t,i){var n,x,u;const{openModal:o,closeModal:d}=i,a=(n=e.stadiumCards)==null?void 0:n.find(h=>h.id===e.stadiumCardId),r=a&&((x=e.stadDefMap)==null?void 0:x[a.stadium_id])||null,l=new Set;Object.keys(e.slots).forEach(h=>{var c;const _=e.slots[h];if(!_)return;const m=e.playerCards.find(A=>A.id===_);(c=m==null?void 0:m.player)!=null&&c.id&&l.add(m.player.id)}),e.subs.forEach(h=>{var m;const _=e.playerCards.find(c=>c.id===h);(m=_==null?void 0:_.player)!=null&&m.id&&l.add(_.player.id)});const p=new Set,s=e.playerCards.filter(h=>{var _,m,c;return l.has((_=h.player)==null?void 0:_.id)||p.has((m=h.player)==null?void 0:m.id)?!1:(p.add((c=h.player)==null?void 0:c.id),!0)});o("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(h=>{const _={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${st(_,{width:100,showStad:!0,stadDef:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(u=document.getElementById("close-sub-selector"))==null||u.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{e.subs.push(h.dataset.cardId),d(),ht(t,e,i)})})}async function oo(e,t){const{state:i,toast:o,navigate:d}=t,a=e.formationCards.find(p=>p.formation===e.formation),r=(a==null?void 0:a.id)||e.formationCardId;await T.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await T.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([p,s],n)=>{l.push({deck_id:e.deckId,card_id:s,position:p,is_starter:!0,slot_order:n})}),e.subs.forEach((p,s)=>{l.push({deck_id:e.deckId,card_id:p,position:`SUB${s+1}`,is_starter:!1,slot_order:100+s})}),l.length>0){const{error:p}=await T.from("deck_cards").insert(l);if(p){o(p.message,"error");return}}o("Deck enregistré ✅","success"),d("decks")}function Ri(e){const t=Zt[e]||Zt["4-4-2"],i=["GK1"];for(let o=1;o<=t.DEF;o++)i.push(`DEF${o}`);for(let o=1;o<=t.MIL;o++)i.push(`MIL${o}`);for(let o=1;o<=t.ATT;o++)i.push(`ATT${o}`);return i}async function on(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await T.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const o=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!o.length)return[];let d=o;if(e){const r=o.filter(l=>l.max_per_user!=null);if(r.length){const{data:l}=await T.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(s=>s.id)),p={};(l||[]).forEach(s=>{p[s.booster_id]=(p[s.booster_id]||0)+1}),d=o.filter(s=>s.max_per_user==null?!0:(p[s.id]||0)<s.max_per_user)}}if(!d.length)return[];const{data:a}=await T.from("booster_drop_rates").select("*").in("booster_id",d.map(r=>r.id)).order("sort_order");return d.map(r=>({...r,rates:(a||[]).filter(l=>l.booster_id===r.id)}))}async function ro(e,t){const{data:i}=await T.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await T.from("booster_claims").insert({user_id:e,booster_id:t})}function ao(e){if(!(e!=null&&e.length))return null;const t=e.reduce((o,d)=>o+Number(d.percentage),0);let i=Math.random()*t;for(const o of e)if(i-=Number(o.percentage),i<=0)return o;return e[e.length-1]}const rn=()=>Object.keys(Ht),so=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],xi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function lo(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return st({...t,_evolution_bonus:i},{width:140})}function an(e){var d;const t={};(e.rates||[]).forEach(a=>{t[a.card_type]=(t[a.card_type]||0)+Number(a.percentage||0)});const i=((d=Object.entries(t).sort((a,r)=>r[1]-a[1])[0])==null?void 0:d[0])||"player",o=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+o,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function co(e,{state:t,navigate:i,toast:o}){var x,u,h;const d=((x=t.profile)==null?void 0:x.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let a=[];try{a=(await on((u=t.user)==null?void 0:u.id)).map(an)}catch(_){console.warn("Erreur chargement boosters DB, fallback hardcodé",_)}a.length||(a=so.map(_=>({..._,rates:[],isPub:_.id==="players_pub"})));const r=await T.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(_=>_.data||[]),l=new Set(r.filter(_=>_.card_type==="stadium").map(_=>_.stadium_id)),p=new Set(r.filter(_=>_.card_type==="formation").map(_=>_.formation)),s=new Set(r.filter(_=>_.card_type==="game_changer").map(_=>_.gc_type)),n={};for(const _ of a){if(_.allow_duplicates!==!1||!((h=_.rates)!=null&&h.length))continue;const m=[...new Set((_.rates||[]).map(A=>A.card_type))];let c=!1;for(const A of m)if(A==="stadium"){const{data:g}=await T.from("stadium_definitions").select("id");if((g||[]).some(I=>!l.has(I.id))){c=!0;break}}else if(A==="game_changer"){const{data:g}=await T.from("gc_definitions").select("name").eq("is_active",!0);if((g||[]).some(I=>!s.has(I.name))){c=!0;break}}else if(A==="formation"){const{FORMATION_LINKS:g}=await ni(async()=>{const{FORMATION_LINKS:I}=await import("./formation-links-BZe0pGr4.js").then(C=>C.p);return{FORMATION_LINKS:I}},__vite__mapDeps([0,1]));if(Object.keys(g).some(I=>!p.has(I))){c=!0;break}}else{c=!0;break}c||(n[_.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${a.map(_=>{const m=_.cost===0||d>=_.cost,c=n[_.id]===!0;return`<div class="booster-card ${!m||c?"disabled":""}" data-booster="${_.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${_.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${_.img}" alt="${_.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${_.name}</div>
            <div class="desc">${_.sub}</div>
            <div class="cost">${_.costLabel}</div>
            ${m?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${c?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(_=>{_.addEventListener("click",async()=>{const m=a.find(c=>c.id===_.dataset.booster);if(m){_.style.opacity="0.5",_.style.pointerEvents="none";try{await po(m,{state:t,toast:o,navigate:i,container:e})}catch(c){o(c.message,"error"),_.style.opacity="",_.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(_=>{_.addEventListener("click",m=>{m.stopPropagation();const c=a.find(A=>A.id===_.dataset.boosterId);mo(c)})})}async function po(e,{state:t,toast:i,navigate:o,container:d}){var x,u;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await yo();const{data:a}=await T.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((a||[]).filter(h=>h.card_type==="player").map(h=>h.player_id)),l=new Set((a||[]).filter(h=>h.card_type==="formation").map(h=>h.formation));let p=[],s=null;try{if((x=e.rates)!=null&&x.length)p=await yi(t.profile,e);else{const h=e.type||"player";h==="player"?p=await sn(t.profile,e.cardCount,e.cost):h==="game_changer"?p=await dn(t.profile,e.cardCount,e.cost):h==="formation"?p=await ln(t.profile,e.cost):p=await yi(t.profile,e)}}catch(h){s=h.message||String(h),console.error("[Booster] Erreur:",h)}if(p!=null&&p.length&&e._boosterId&&await ro(t.user.id,e._boosterId),!(p!=null&&p.length)){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",h.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(h),(u=h.querySelector("#anim-close-err"))==null||u.addEventListener("click",()=>h.remove());return}p.forEach(h=>{h.card_type==="player"&&h.player?h.isDuplicate=r.has(h.player.id):h.card_type==="formation"&&(h.isDuplicate=l.has(h.formation))});const{data:n}=await T.from("users").select("*").eq("id",t.profile.id).single();n&&(t.profile=n),cn(p,e,o)}function uo(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function yt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function fo(e,t){let i;switch(t){case"legende":i=e.filter(o=>o.rarity==="legende"),i.length||(i=e.filter(o=>o.rarity==="pepite"||o.rarity==="papyte")),i.length||(i=e.filter(o=>yt(o)>=6));break;case"special":i=e.filter(o=>o.rarity==="pepite"||o.rarity==="papyte"),i.length||(i=e.filter(o=>yt(o)>=6));break;case"normal_high":i=e.filter(o=>o.rarity==="normal"&&yt(o)>=6),i.length||(i=e.filter(o=>yt(o)>=6));break;default:i=e.filter(o=>o.rarity==="normal"&&yt(o)>=1&&yt(o)<=5),i.length||(i=e.filter(o=>o.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function yi(e,t){if(t.cost>0){const{error:u}=await T.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(u)throw u}const i=t.allow_duplicates!==!1;let o=[];const{data:d,error:a}=await T.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(a){const{data:u}=await T.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);o=u||[]}else o=d||[];const r=new Set(o.filter(u=>u.card_type==="player").map(u=>u.player_id)),l=new Set(o.filter(u=>u.card_type==="formation").map(u=>u.formation)),p=new Set(o.filter(u=>u.card_type==="game_changer").map(u=>u.gc_type)),s=new Set(o.filter(u=>u.card_type==="stadium").map(u=>u.stadium_id).filter(Boolean)),n=new Set,x=[];for(let u=0;u<(t.cardCount||5);u++){const h=ao(t.rates);if(h){if(h.card_type==="player"){const _=q=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[q]||q,m=h.rarity?_(h.rarity):null;let c=T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);m&&(c=c.eq("rarity",m));const{data:A}=await c;let g=A||[];if((h.note_min||h.note_max)&&(g=g.filter(q=>{const N=Math.max(Number(q.note_g)||0,Number(q.note_d)||0,Number(q.note_m)||0,Number(q.note_a)||0);return(!h.note_min||N>=h.note_min)&&(!h.note_max||N<=h.note_max)})),g.length||(h.note_min||h.note_max?(g=A||[],console.warn("[Booster] Aucun joueur avec note",h.note_min,"-",h.note_max,"— fallback rareté uniquement")):g=A||[]),!g.length)continue;let I=g.filter(q=>!n.has(q.id));if(i)I.length||(I=g);else if(I=I.filter(q=>!r.has(q.id)),!I.length)continue;const C=I[Math.floor(Math.random()*I.length)];n.add(C.id);const j=r.has(C.id),{data:F}=await T.from("cards").insert({owner_id:e.id,player_id:C.id,card_type:"player"}).select().single();F&&(x.push({...F,player:C,isDuplicate:j}),T.rpc("record_transfer",{p_card_id:F.id,p_player_id:C.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(h.card_type==="game_changer"){const{data:_}=await T.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),m=_!=null&&_.length?_:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=i?m:m.filter(C=>!p.has(C.name));if(!i&&!c.length)continue;const g=c[Math.floor(Math.random()*c.length)].name,{data:I}=await T.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:g}).select().single();I&&x.push(I)}else if(h.card_type==="formation"){const _=rn(),m=i?_:_.filter(I=>!l.has(I));if(!i&&!m.length)continue;const c=m[Math.floor(Math.random()*m.length)],A=l.has(c),{data:g}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();g!=null&&g[0]&&x.push({...g[0],isDuplicate:A})}else if(h.card_type==="stadium"){const{data:_,error:m}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(m){console.error("[Booster] stadium_definitions:",m.message);continue}if(!(_!=null&&_.length)){console.warn("[Booster] Aucun stade en DB");continue}const c=i?_:_.filter(C=>!s.has(C.id));if(!i&&!c.length)continue;const A=c[Math.floor(Math.random()*c.length)],{data:g,error:I}=await T.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:A.id}).select("id,card_type,stadium_id").single();if(I){console.error("[Booster] insert stadium card:",I.message);continue}g&&x.push({...g,rarity:"normal",_stadiumDef:A})}}}return x}async function sn(e,t,i){if(i>0){const{error:s}=await T.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s}const{data:o}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(o!=null&&o.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=o.filter(s=>s.job==="GK"),a=o.filter(s=>s.job!=="GK"),r=!e.first_booster_opened&&d.length>0,l=[];for(let s=0;s<t;s++){const n=s===0&&r?d:s===0?a:o,x=uo(),u=fo(n,x);u&&l.push(u)}r&&await T.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await T.from("cards").insert(l.map(s=>({owner_id:e.id,player_id:s.id,card_type:"player"}))).select();return(p||[]).forEach((s,n)=>{T.rpc("record_transfer",{p_card_id:s.id,p_player_id:l[n].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((s,n)=>({...p[n],player:s}))}async function dn(e,t,i){const{error:o}=await T.from("users").update({credits:e.credits-i}).eq("id",e.id);if(o)throw o;const{data:d}=await T.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),a=d!=null&&d.length?d:Object.keys(xi).map(n=>({name:n,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const n=a[Math.floor(Math.random()*a.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:n.name,gc_definition_id:n.id||null}}),{data:l,error:p}=await T.from("cards").insert(r).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(l||[]).map(n=>{const x=d==null?void 0:d.find(u=>u.name===n.gc_type||u.id===n.gc_definition_id);return{...n,_gcDef:x||null}})}async function ln(e,t){const{error:i}=await T.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:o}=await T.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),d=new Set((o||[]).map(n=>n.formation)),a=rn(),r=a[Math.floor(Math.random()*a.length)],l=d.has(r),{data:p,error:s}=await T.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(p||[]).map(n=>({...n,isDuplicate:l}))}function cn(e,t,i,o=null){var ie,Q;if(!e||e.length===0){const R=document.createElement("div");R.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",R.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(R),(ie=R.querySelector("#anim-close-err"))==null||ie.addEventListener("click",()=>R.remove());return}e=[...e].sort((R,P)=>{const re=R.player?yt(R.player):-1;return(P.player?yt(P.player):-1)-re});const d=document.createElement("div");d.id="booster-anim-overlay",d.innerHTML=`
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
  `,document.body.appendChild(d);let a=!1;const r=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let p=!1;const s=R=>R.touches&&R.touches[0]?R.touches[0].clientX:R.clientX;function n(R){a||(p=!0,l.style.opacity="1",x(R))}function x(R){if(!p||a)return;const P=r.getBoundingClientRect(),re=s(R)-P.left,xe=Math.max(0,Math.min(1,re/P.width));l.style.width=xe*P.width+"px",xe>=.82&&h()}function u(){a||(p=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{a||(l.style.transition="")},220))}function h(){var P;if(a)return;a=!0,p=!1,l.style.width="100%",l.style.opacity="1",(P=document.getElementById("cut-flash"))==null||P.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const R=document.getElementById("cut-hint");R&&(R.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",A(0)},620)}r.addEventListener("pointerdown",n),window.addEventListener("pointermove",x),window.addEventListener("pointerup",u),r.addEventListener("touchstart",n,{passive:!0}),window.addEventListener("touchmove",x,{passive:!0}),window.addEventListener("touchend",u);let _=0,m=!1;const c=new Set;function A(R){_=R,document.getElementById("reveal-phase").style.display="flex",g(),I(R,0),N()}function g(){const R=document.getElementById("card-dots");R&&(R.innerHTML=e.map((P,re)=>`<div class="card-dot" data-i="${re}" style="width:8px;height:8px;border-radius:50%;background:${re===_?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),R.querySelectorAll(".card-dot").forEach(P=>P.addEventListener("click",()=>j(parseInt(P.dataset.i)))))}function I(R,P){var ce;const re=e[R],xe=document.getElementById("card-counter"),_e=document.getElementById("card-track");xe&&(xe.textContent=`Carte ${R+1} / ${e.length}`);const we=document.getElementById("reveal-btns");we&&(we.style.display=R===e.length-1?"flex":"none");const ve=re.card_type==="player"&&((ce=re.player)==null?void 0:ce.rarity)==="legende",Ee=!c.has(R);c.add(R);let se=0;if(re.card_type==="player"&&re.player){const H=re.player,Z=H.job||"ATT";se=Number(Z==="GK"?H.note_g:Z==="DEF"?H.note_d:Z==="MIL"?H.note_m:H.note_a)||0}const pe=H=>{_e.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ve?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${go(re)}</div>
          ${re.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const Z=document.getElementById("current-card-wrap");P!==0?(Z.style.transition="none",Z.style.transform=`translateX(${P>0?100:-100}%)`,requestAnimationFrame(()=>{Z.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",Z.style.transform="translateX(0)"})):Z.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),H||ve?K():oe(),g()};Ee&&se>6&&re.card_type==="player"&&re.player?C(re,()=>pe(!0)):pe(!1)}function C(R,P){var se;m=!0;const re=R.player,xe=`https://flagsapi.com/${re.country_code}/flat/64.png`,_e=(se=re.clubs)==null?void 0:se.logo_url,we=document.getElementById("walkout-overlay"),ve=document.getElementById("walkout-stage");if(!we||!ve){m=!1,P();return}we.style.display="flex";const Ee=()=>{const pe=ve.firstElementChild;pe&&(pe.classList.remove("wo-in"),pe.classList.add("wo-out"))};ve.innerHTML=`<img class="wo-in" src="${xe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(Ee,2e3),setTimeout(()=>{var pe;ve.innerHTML=_e?`<img class="wo-in" src="${_e}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((pe=re.clubs)==null?void 0:pe.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},2450),setTimeout(Ee,4450),setTimeout(()=>{we.style.display="none",ve.innerHTML="",m=!1,navigator.vibrate&&navigator.vibrate([40,30,80]),P()},4900)}function j(R){if(m||R<0||R>=e.length||R===_)return;const P=R>_?1:-1;_=R,I(R,P)}function F(){j(_+1)}function q(){j(_-1)}function N(){const R=document.getElementById("card-viewport");if(!R||R._swipeBound)return;R._swipeBound=!0;let P=0,re=0,xe=0,_e=!1;const we=ce=>ce.touches?ce.touches[0].clientX:ce.clientX,ve=ce=>ce.touches?ce.touches[0].clientY:ce.clientY,Ee=ce=>{_e=!0,P=we(ce),re=ve(ce),xe=0},se=ce=>{if(!_e)return;xe=we(ce)-P;const H=ve(ce)-re;if(Math.abs(xe)<Math.abs(H))return;const Z=document.getElementById("current-card-wrap");Z&&(Z.style.transition="none",Z.style.transform=`translateX(${xe*.6}px) rotate(${xe*.02}deg)`)},pe=()=>{if(!_e)return;_e=!1;const ce=document.getElementById("current-card-wrap"),H=55;xe<=-H&&_<e.length-1?F():xe>=H&&_>0?q():ce&&(ce.style.transition="transform .2s ease",ce.style.transform="translateX(0)")};R.addEventListener("pointerdown",Ee),R.addEventListener("pointermove",se),R.addEventListener("pointerup",pe),R.addEventListener("pointercancel",pe),R.addEventListener("touchstart",Ee,{passive:!0}),R.addEventListener("touchmove",se,{passive:!0}),R.addEventListener("touchend",pe),R.addEventListener("click",ce=>{if(Math.abs(xe)>8)return;const H=R.getBoundingClientRect();ce.clientX-H.left>H.width/2?F():q()})}let V=null;function K(){const R=document.getElementById("fireworks-canvas");if(!R)return;R.width=window.innerWidth,R.height=window.innerHeight;const P=R.getContext("2d"),re=[];function xe(){const we=Math.random()*R.width,ve=Math.random()*R.height*.6,Ee=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],se=Ee[Math.floor(Math.random()*Ee.length)];for(let pe=0;pe<60;pe++){const ce=Math.PI*2/60*pe,H=2+Math.random()*5;re.push({x:we,y:ve,vx:Math.cos(ce)*H,vy:Math.sin(ce)*H,alpha:1,color:se,size:2+Math.random()*3})}}xe(),V=setInterval(xe,600);function _e(){if(document.getElementById("fireworks-canvas")){P.clearRect(0,0,R.width,R.height);for(let we=re.length-1;we>=0;we--){const ve=re[we];if(ve.x+=ve.vx,ve.y+=ve.vy+.08,ve.vy*=.98,ve.alpha-=.018,ve.alpha<=0){re.splice(we,1);continue}P.globalAlpha=ve.alpha,P.fillStyle=ve.color,P.beginPath(),P.arc(ve.x,ve.y,ve.size,0,Math.PI*2),P.fill()}P.globalAlpha=1,(V!==null||re.length>0)&&requestAnimationFrame(_e)}}_e()}function oe(){V!==null&&(clearInterval(V),V=null);const R=document.getElementById("fireworks-canvas");R&&R.getContext("2d").clearRect(0,0,R.width,R.height)}if(o){const R=document.getElementById("reveal-btns");R&&(R.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(Q=document.getElementById("reveal-next"))==null||Q.addEventListener("click",()=>{oe(),d.remove(),o()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{oe(),d.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{oe(),d.remove(),i("boosters")})}function go(e){var t,i,o,d;if(e.card_type==="player"&&e.player)return lo(e);if(e.card_type==="game_changer"){const a=e._gcDef,r=(a==null?void 0:a.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},p={purple:"#b06ce0",light_blue:"#00d4ef"},s=l[a==null?void 0:a.color]||l.purple,n=p[a==null?void 0:a.color]||p.purple,x=(a==null?void 0:a.name)||e.gc_type||"Game Changer",u=(a==null?void 0:a.effect)||((t=xi[e.gc_type])==null?void 0:t.desc)||"",h=a!=null&&a.image_url?`/icons/${a.image_url}`:null,_=((i=xi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${s};border-radius:14px;border:3px solid ${n};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${n}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${x.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${x}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${h?`<img src="${h}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${_}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${u.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const a=e._stadiumDef,r=(a==null?void 0:a.name)||"Stade",l=((o=a==null?void 0:a.club)==null?void 0:o.encoded_name)||(a==null?void 0:a.country_code)||"—",p=a!=null&&a.image_url?`/icons/${a.image_url}`:((d=a==null?void 0:a.club)==null?void 0:d.logo_url)||(a!=null&&a.country_code?`https://flagsapi.com/${a.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${r.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${r}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${p?`<img src="${p}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function mo(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},a={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};o.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(r=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${a[r.card_type]||r.card_type}</span>
            ${r.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${d[r.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${r.rarity}</span>`:""}
            ${r.note_min||r.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${r.note_min||""}–${r.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(r.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(o),o.addEventListener("click",r=>{r.target===o&&o.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>o.remove());return}xo()}function xo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function yo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const o=setInterval(()=>{i--;const d=document.getElementById("mw-ad-cd");d&&(d.textContent=i),i<=0&&(clearInterval(o),t.remove(),e(!0))},1e3)})}async function bo(e,{state:t,navigate:i,toast:o,refreshProfile:d}){var u,h;const{data:a}=await T.from("users").select("*").eq("id",t.user.id).single();a&&(t.profile=a);let r=Array.isArray((u=t.profile)==null?void 0:u.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await T.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let l=null;try{const m=(await on()).find(c=>(c.name||"").toLowerCase().includes("new player"));m&&(l=an(m))}catch(_){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',_)}const p=r.length;let s=0;e.innerHTML=`
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
  </div>`;const n=async()=>{await T.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function x(){var g;if(s>=p||!r.length){await T.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),d&&await d(),o("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const _=r[0],{data:m}=await T.from("users").select("*").eq("id",t.user.id).single();m&&(t.profile=m);let c=[];try{if(_.type==="formation")c=await ln(t.profile,0);else if(_.type==="game_changer")c=await dn(t.profile,_.count||3,0);else if(l&&((g=l.rates)!=null&&g.length)){const I={...l,cost:0,cardCount:_.count||l.cardCount||5};c=await yi(t.profile,I),_.guaranteeGK&&!t.profile.first_booster_opened&&(c.some(j=>j.player&&j.player.job==="GK")||await ho(t.profile,c),await T.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else c=await sn(t.profile,_.count||5,0)}catch(I){o(I.message||"Erreur ouverture booster","error");return}r.shift(),s++,await n();const A=_.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:_.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${s}/${p})`,img:(l==null?void 0:l.img)||"/icons/booster-players.png"};cn(c,A,i,()=>{x()})}(h=document.getElementById("onboard-start"))==null||h.addEventListener("click",()=>x())}async function ho(e,t){try{const{data:i}=await T.from("players").select("id,job,firstname,surname_encoded,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const o=i[Math.floor(Math.random()*i.length)],d=t.findIndex(r=>r.player);if(d===-1)return;const a=t[d];await T.from("cards").update({player_id:o.id}).eq("id",a.id),t[d]={...a,player_id:o.id,player:o}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Mt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Ot={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t,i,o,d){var a;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${o}</button>
    </div>
  </div>`,(a=document.getElementById("msg-btn"))==null||a.addEventListener("click",d)}function He(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function bi(e,t){var a,r;const i=e.player,o=e.evolution_bonus||0,d=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_encoded,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?o:0)+(i.job2==="GK"&&d>0?o:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?o:0)+(i.job2==="DEF"&&d>0?o:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?o:0)+(i.job2==="MIL"&&d>0?o:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?o:0)+(i.job2==="ATT"&&d>0?o:0),evolution_bonus:o,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,clubName:((a=i.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Tt(e,t){if(!t||!e)return e;const{club_id:i,country_code:o}=t;return Object.values(e).forEach(d=>{Array.isArray(d)&&d.forEach(a=>{const r=i&&String(a.club_id)===String(i),l=o&&String(a.country_code)===String(o);(r||l)&&(a.stadiumBonus=!0)})}),e}function jt(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:o}=t;return e.forEach(d=>{if(!d)return;const a=i&&String(d.club_id)===String(i),r=o&&String(d.country_code)===String(o);(a||r)&&(d.stadiumBonus=!0)}),e}function dt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function oi(){const e=Math.random()*100;return e<10?3:e<30?2:1}function vt(e,t){const i=Mt[t]||Mt["4-4-2"],o={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const l=e.filter(s=>s.position&&s.position.replace(/\d+$/,"")===r).sort((s,n)=>parseInt(s.position.replace(/\D+/g,""),10)-parseInt(n.position.replace(/\D+/g,""),10)).map(s=>({...s,_line:r})),p=dt(l.length);l.forEach((s,n)=>{s._col=p[n]}),o[r]=l}return o}const a=[...e];for(const r of["GK","DEF","MIL","ATT"]){const l=[];for(let s=0;s<i[r];s++){let n=a.findIndex(x=>x.job===r);if(n===-1&&(n=a.findIndex(x=>x.job2===r)),n===-1&&(n=0),a[n]){const x={...a[n],_line:r};l.push(x),a.splice(n,1)}}const p=dt(l.length);l.forEach((s,n)=>{s._col=p[n]}),o[r]=l}return o}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ve(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ri(e,t,i){const d=new Set,a=t.filter(n=>{const x=n.gc_type||n.id;return d.has(x)?!1:(d.add(x),!0)});let r=[];function l(n,x){const u=n._gcDef,h={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},_={purple:"#9b59b6",light_blue:"#00bcd4"},m=h[u==null?void 0:u.color]||h.purple,c=_[u==null?void 0:u.color]||_.purple;return`<div class="gc-select-card" data-id="${n.id}"
      style="width:100px;border-radius:10px;border:3px solid ${x?"#FFD700":c};background:${m};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${x?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${x?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((u==null?void 0:u.name)||n.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(u==null?void 0:u.name)||n.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${u!=null&&u.image_url?`<img src="/icons/${u.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((u==null?void 0:u.effect)||"").slice(0,50)}</span>
      </div>
      ${x?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=n=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(n)};function s(){var x,u,h;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const n=r.length>0;e.innerHTML=`
    <div id="gc-screen-wrap" style="position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#0a1628,#1a0a2e)">
      <!-- Header -->
      <div style="text-align:center;padding:12px 16px 8px;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-bottom:4px">Avant le match</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Choisir ses Game Changers</div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:3px">
          Jusqu'à <b style="color:#FFD700">3</b> cartes · ${r.length}/3
        </div>
      </div>
      <!-- Grille cartes -->
      <div style="flex:1;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-content:flex-start;padding:8px 16px 16px">
        ${a.map(_=>{const m=r.find(c=>c.gc_type===_.gc_type);return l(_,!!m)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${n?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${n?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${n?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${n?"pointer":"default"};box-shadow:${n?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
          ⚡ Valider (${r.length}/3)
        </button>
        <div style="display:flex;gap:8px">
          <button id="gc-no-gc" style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.7);font-size:13px;font-weight:600;cursor:pointer">
            ▶ Sans GC
          </button>
          <button id="gc-reset" ${r.length===0?"disabled":""} style="flex:1;padding:11px;border-radius:12px;border:2px solid rgba(212,160,23,0.4);background:rgba(212,160,23,0.1);color:${r.length===0?"rgba(212,160,23,0.3)":"#D4A017"};font-size:13px;font-weight:700;cursor:${r.length===0?"default":"pointer"}">
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>`,e.querySelectorAll(".gc-select-card").forEach(_=>{_.addEventListener("click",()=>{const m=_.dataset.id,c=a.find(g=>g.id===m);if(!c)return;const A=r.findIndex(g=>g.gc_type===c.gc_type);A>-1?r.splice(A,1):r.length<3&&r.push(c),s()})}),(x=e.querySelector("#gc-launch"))==null||x.addEventListener("click",()=>{n&&p(r)}),(u=e.querySelector("#gc-no-gc"))==null||u.addEventListener("click",()=>p([])),(h=e.querySelector("#gc-reset"))==null||h.addEventListener("click",()=>{r.length&&(r=[],s())})}s()}function vo(e){var o;const t=((o=e==null?void 0:e.state)==null?void 0:o.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function wo(e,t,i){const{state:o,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await T.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",o.profile.id).order("created_at",{ascending:!1});if(!a||a.length===0){Et(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const r=a.map(u=>u.id),{data:l}=await T.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),p=[...new Set((l||[]).filter(u=>{var h,_;return((h=u.card)==null?void 0:h.card_type)==="stadium"&&((_=u.card)==null?void 0:_.stadium_id)}).map(u=>u.card.stadium_id))],s={};if(p.length){const{data:u}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",p);(u||[]).forEach(h=>{s[h.id]=h}),(l||[]).forEach(h=>{var _,m;((_=h.card)==null?void 0:_.card_type)==="stadium"&&((m=h.card)!=null&&m.stadium_id)&&(h.card._stadiumDef=s[h.card.stadium_id]||null)})}let n=0;function x(){var j,F,q,N,V,K,oe;const u=a[n],h=(l||[]).filter(ie=>ie.deck_id===u.id),_=h.filter(ie=>{var Q;return ie.is_starter&&((Q=ie.card)==null?void 0:Q.player)}).map(ie=>bi(ie.card,ie.position)),m=h.find(ie=>{var Q;return((Q=ie.card)==null?void 0:Q.card_type)==="formation"}),c=u.formation||((j=m==null?void 0:m.card)==null?void 0:j.formation)||"4-4-2";let A=_.length>=11?vt(_,c):null,g=((F=u.stadium_card)==null?void 0:F.stadium_def)||null;g&&A&&(A=Tt(A,g));const I=_.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${vo(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${n===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${n===0?"0.1":"0.3"});color:${n===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${n===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${u.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${c} · ${_.length}/11 ${u.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${n===a.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${n===a.length-1?"0.1":"0.3"});color:${n===a.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${n===a.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${g?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${g.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((q=g.club)==null?void 0:q.encoded_name)||g.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${A?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${pt(A,c,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${_.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${a.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${a.map((ie,Q)=>`<div style="width:7px;height:7px;border-radius:50%;background:${Q===n?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${I?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${I?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${I?"pointer":"default"}">
          ${I?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const Q=e.querySelector(".deck-preview-wrap svg");Q&&(Q.removeAttribute("width"),Q.removeAttribute("height"),Q.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",Q.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(N=document.getElementById("prev-deck"))==null||N.addEventListener("click",()=>{n>0&&(n--,x())}),(V=document.getElementById("next-deck"))==null||V.addEventListener("click",()=>{n<a.length-1&&(n++,x())}),(K=document.getElementById("validate-deck"))==null||K.addEventListener("click",()=>{if(!I)return;const ie=t.state.params||{};t.navigate("match",{...ie,matchMode:ie.matchMode||i,deckId:u.id})}),(oe=document.getElementById("cancel-deck-select"))==null||oe.addEventListener("click",()=>{Ve(e),d("home")});const C=document.getElementById("deck-swipe-zone");if(C){let ie=0,Q=0;C.addEventListener("touchstart",R=>{ie=R.touches[0].clientX,Q=R.touches[0].clientY},{passive:!0}),C.addEventListener("touchend",R=>{const P=R.changedTouches[0].clientX-ie,re=R.changedTouches[0].clientY-Q;Math.abs(P)<40||Math.abs(P)<Math.abs(re)||(P<0&&n<a.length-1?(n++,x()):P>0&&n>0&&(n--,x()))},{passive:!0})}}x()}function _o(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";return e!=null&&e.clubLogo?e.clubLogo.startsWith("http")?e.clubLogo:`${t}/storage/v1/object/public/assets/clubs/${e.clubLogo}`:null}function Xe(e,t=44,i=58,o=null){return st(e,{width:t,showStad:!!o,stadDef:o,used:e==null?void 0:e.used})}function it(e,t,i){if(!(e!=null&&e.length))return"";const o=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return o.forEach((a,r)=>{if(d+=Xe(a,40,52),r<o.length-1){const l=ot(a,o[r+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function $o(e){return!e||e.length<2?null:`https://flagsapi.com/${e.slice(0,2).toUpperCase()}/flat/64.png`}function ko(e){if(!e||e.length<2)return"🌍";try{return String.fromCodePoint(127462+e.charCodeAt(0)-65)+String.fromCodePoint(127462+e.charCodeAt(1)-65)}catch{return"🌍"}}function ct(e,t,i,o,d=310,a=310,r=[]){var I;const l=Ht[t]||{},p=Ki(t)||_i[t]||[],s={},n=["ATT","MIL","DEF","GK"];for(const C of n)(e[C]||[]).forEach((F,q)=>{s[`${C}${q+1}`]=F});function x(C){const j=l[C];return j?{x:j.x*d,y:j.y*a}:null}let u="";for(const[C,j]of p){const F=x(C),q=x(j);if(!F||!q)continue;const N=s[C],V=s[j],K=ot(N,V);K==="#00ff88"||K==="#FFD700"?(u+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}"
        stroke="${K}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,u+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}"
        stroke="${K}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):u+=`<line x1="${F.x.toFixed(1)}" y1="${F.y.toFixed(1)}" x2="${q.x.toFixed(1)}" y2="${q.y.toFixed(1)}"
        stroke="${K}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const h=48,_=64,m=13,c=16,A={normal:"#aaaaaa",pepite:"#D4A017",pépite:"#D4A017",papyte:"#111111",legende:"#7a28b8",légende:"#7a28b8"};for(const[C,j]of Object.entries(s)){const F=x(C);if(!F||!j)continue;const q=C.replace(/[0-9]/g,""),N=Ot[q]||"#555",V=r.includes(j.cardId),K=i==="attack"&&(["MIL","ATT"].includes(q)||V)&&!j.used||i==="defense"&&["GK","DEF","MIL"].includes(q)&&!j.used,oe=o.includes(j.cardId);let ie;i==="attack"?ie=V?Math.max(1,Number(j.note_a)||0):q==="MIL"?Number(j.note_m)||0:Number(j.note_a)||0:i==="defense"?ie=q==="GK"?Number(j.note_g)||0:q==="MIL"?Number(j.note_m)||0:Number(j.note_d)||0:ie=Number(q==="GK"?j.note_g:q==="DEF"?j.note_d:q==="MIL"?j.note_m:j.note_a)||0,ie=ie+(j.boost||0),j.stadiumBonus&&(i==="attack"&&(q==="ATT"||q==="MIL")||i==="defense"&&(q==="GK"||q==="DEF"||q==="MIL")?ie+=10:i||(ie+=10));const Q=(F.x-h/2).toFixed(1),R=(F.y-_/2).toFixed(1),P=A[j==null?void 0:j.rarity]||A.normal;if(j.used){const se=typeof import.meta<"u"&&"/"||"/",ce=`${typeof window<"u"&&((I=window.location)==null?void 0:I.origin)||""}${se}icons/carte-dos.png`.replace(/([^:])\/\//g,"$1/");u+=`<rect x="${Q}" y="${R}" width="${h}" height="${_}" rx="5" fill="#161616"/>`,u+=`<image href="${ce}" xlink:href="${ce}" x="${Q}" y="${R}" width="${h}" height="${_}" preserveAspectRatio="xMidYMid slice"/>`,u+=`<rect x="${Q}" y="${R}" width="${h}" height="${_}" rx="5" fill="none" stroke="${P}" stroke-width="2" opacity="0.7"/>`,u+=`<rect x="${Q}" y="${R}" width="${h}" height="${_}" rx="5" fill="rgba(0,0,0,0.01)" class="match-used-hit" data-card-id="${j.cardId}" data-role="${q}" style="cursor:pointer"/>`;continue}const re=oe?.45:1,xe=oe?"#FFD700":P,_e=oe?3:(j==null?void 0:j.rarity)==="legende"||(j==null?void 0:j.rarity)==="légende"||(j==null?void 0:j.rarity)==="pepite"||(j==null?void 0:j.rarity)==="pépite"?2.5:2,we=_-m-c;u+=`<defs><clipPath id="cp-${C}"><rect x="${Q}" y="${(F.y-_/2+m).toFixed(1)}" width="${h}" height="${we}"/></clipPath></defs>`,u+=`<rect x="${Q}" y="${R}" width="${h}" height="${_}" rx="5" fill="${N}" opacity="${re}"/>`;const ve=He(j);ve&&(u+=`<image href="${ve}" xlink:href="${ve}" x="${Q}" y="${(F.y-_/2+m).toFixed(1)}" width="${h}" height="${we}" clip-path="url(#cp-${C})" preserveAspectRatio="xMidYMin slice"/>`),u+=`<rect x="${Q}" y="${R}" width="${h}" height="${m}" rx="4" fill="rgba(255,255,255,0.92)"/>`,u+=`<text x="${F.x.toFixed(1)}" y="${(F.y-_/2+8.5).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="6.5" font-weight="900" fill="#111" font-family="Arial Black,Arial">${(j.name||"").slice(0,9)}</text>`;const Ee=(F.y+_/2-c).toFixed(1);u+=`<rect x="${Q}" y="${Ee}" width="${h}" height="${c}" fill="rgba(255,255,255,0.92)"/>`;{const se=$o(j.country_code);se?u+=`<image href="${se}" xlink:href="${se}" x="${(F.x-20).toFixed(1)}" y="${(F.y+_/2-c+3).toFixed(1)}" width="13" height="10" preserveAspectRatio="xMidYMid slice"/>`:u+=`<text x="${(F.x-13).toFixed(1)}" y="${(F.y+_/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="10">${ko(j.country_code)}</text>`;const pe=j.stadiumBonus?"#E87722":"#111";u+=`<text x="${F.x.toFixed(1)}" y="${(F.y+_/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="900" fill="${pe}" font-family="Arial Black">${ie}</text>`;const ce=_o(j);ce?u+=`<image href="${ce}" xlink:href="${ce}" x="${(F.x+h/2-14).toFixed(1)}" y="${(F.y+_/2-c+2).toFixed(1)}" width="12" height="12" preserveAspectRatio="xMidYMid meet"/>`:j.clubName&&(u+=`<text x="${(F.x+14).toFixed(1)}" y="${(F.y+_/2-c/2).toFixed(1)}" text-anchor="middle" dominant-baseline="central" font-size="5.5" font-weight="700" fill="#333">${(j.clubName||"").slice(0,3).toUpperCase()}</text>`),j.stadiumBonus&&(u+=`<rect x="${(F.x-h/2).toFixed(1)}" y="${(F.y-_/2).toFixed(1)}" width="${h}" height="${_}" rx="5" fill="none" stroke="#E87722" stroke-width="2" opacity="0.8"/>`)}u+=`<rect x="${Q}" y="${R}" width="${h}" height="${_}" rx="5" fill="${oe?"rgba(255,255,255,0.12)":"none"}" stroke="${xe}" stroke-width="${_e}" opacity="${re}"/>`,K&&(u+=`<rect x="${Q}" y="${R}" width="${h}" height="${_}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${oe?"selected":""}" data-card-id="${j.cardId}" data-role="${q}" style="cursor:pointer"/>`)}const g=38;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-g} ${-g} ${d+g*2} ${a+g*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${u}
  </svg>`}function pt(e,t,i,o,d=300,a=300,r=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ct(e,t,i,o,d,a,r)}
  </div>`}function at(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function ai(e,t,i,o){var F;const{state:d,navigate:a,toast:r}=t;et(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return wo(e,t,i);const p=l.deckId;let s,n,x,u;try{const q=await Promise.all([T.from("decks").select("formation,name,stadium_card_id").eq("id",p).single(),T.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_encoded,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);s=q[0].data,x=q[0].error,n=q[1].data,u=q[1].error}catch(q){console.error("[Match] Exception chargement deck:",q),Et(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>a("home"));return}if(x||u){console.error("[Match] Erreur Supabase:",x||u),Et(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>a("home"));return}const h=(n||[]).filter(q=>{var N;return q.is_starter&&((N=q.card)==null?void 0:N.player)}).map(q=>bi(q.card,q.position)),_=(n||[]).filter(q=>{var N;return!q.is_starter&&((N=q.card)==null?void 0:N.player)}).map(q=>bi(q.card,q.position));if(h.length<11){Et(e,"⚠️",`Deck incomplet (${h.length}/11).`,"Compléter",()=>a("decks"));return}const m=(n||[]).find(q=>{var N;return((N=q.card)==null?void 0:N.card_type)==="formation"}),c=(s==null?void 0:s.formation)||((F=m==null?void 0:m.card)==null?void 0:F.formation)||"4-4-2",{data:A,error:g}=await T.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:I}=await T.from("gc_definitions").select("*").eq("is_active",!0),C=(A||[]).map(q=>({...q,_gcDef:(I==null?void 0:I.find(N=>N.name===q.gc_type||N.id===q.gc_definition_id))||null}));let j=null;if(s!=null&&s.stadium_card_id){const{data:q}=await T.from("cards").select("stadium_id").eq("id",s.stadium_card_id).single();if(q!=null&&q.stadium_id){const{data:N}=await T.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",q.stadium_id).single();j=N||null}}o({deckId:p,formation:c,starters:h,subsRaw:_,gcCardsEnriched:C,gcDefs:I||[],stadiumDef:j})}async function Eo(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",a=d.replace("vs_ai_",""),r=d;await ai(e,t,d,async({deckId:l,formation:p,starters:s,subsRaw:n,gcCardsEnriched:x,gcDefs:u,stadiumDef:h})=>{try{let _=vt(s,p);h&&(_=Tt(_,h),jt(n,h));const m=await To(p,a),c=m.lines||m,A=async g=>{try{const{data:I,error:C}=await T.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:l,status:"in_progress"}).select().single();if(C){console.error("[MatchIA] Erreur création match:",C),Et(e,"⚠️","Impossible de créer le match ("+C.message+").","Retour",()=>t.navigate("home"));return}const j=m.stadiumDef||null;j&&c&&(Tt(c,j),jt(m.subs||[],j));const F={gcDefs:u||[],matchId:I==null?void 0:I.id,mode:r,difficulty:a,formation:p,homeTeam:_,aiTeam:c,homeSubs:n,subsUsed:0,maxSubs:Math.min(n.length,3),aiSubs:m.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((m.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:m.gcCards||[],aiUsedGc:[],aiStadiumDef:j,homeScore:0,aiScore:0,gcCards:g,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};zo(e,F,t)}catch(I){console.error("[MatchIA] Exception launchMatch:",I),Et(e,"⚠️","Erreur au lancement du match : "+I.message,"Retour",()=>t.navigate("home"))}};if(!x.length){A([]);return}ri(e,x,A)}catch(_){console.error("[MatchIA] Exception setup:",_),Et(e,"⚠️","Erreur de préparation du match : "+_.message,"Retour",()=>t.navigate("home"))}})}async function To(e,t){var c;const{data:i}=await T.from("players").select("id,firstname,surname_encoded,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:So(e),subs:[],gcCards:[],stadiumDef:null};const o=Mt[e]||Mt["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},a=new Set;function r(A,g,I){var C,j;return a.add(A.id),{cardId:"ai-"+A.id+"-"+I,id:A.id,firstname:A.firstname,name:A.surname_encoded,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:Number(A.note_g)||0,note_d:Number(A.note_d)||0,note_m:Number(A.note_m)||0,note_a:Number(A.note_a)||0,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,clubName:((C=A.clubs)==null?void 0:C.encoded_name)||null,clubLogo:((j=A.clubs)==null?void 0:j.logo_url)||null,boost:0,used:!1,_line:g}}for(const A of["GK","DEF","MIL","ATT"]){const g=i.filter(q=>q.job===A&&!a.has(q.id)),I=i.filter(q=>q.job!==A&&!a.has(q.id)),C=[...g,...I],j=[];for(let q=0;q<o[A];q++){const N=C[q];N&&j.push(r(N,A,q))}const F=dt(j.length);j.forEach((q,N)=>{q._col=F[N]}),d[A]=j}const p=i.filter(A=>!a.has(A.id)).slice(0,5).map((A,g)=>r(A,A.job,100+g)),x=Object.keys(Oe).sort(()=>Math.random()-.5).slice(0,3).map((A,g)=>{var I,C;return{id:"ai-gc-"+g,gc_type:A,name:((I=Oe[A])==null?void 0:I.name)||A,icon:((C=Oe[A])==null?void 0:C.icon)||"⚡"}}),u=Object.values(d).flat(),h={};u.forEach(A=>{A.club_id&&(h[A.club_id]=(h[A.club_id]||0)+1)});const _=(c=Object.entries(h).sort((A,g)=>g[1]-A[1])[0])==null?void 0:c[0];let m=null;if(_){const{data:A}=await T.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",_).single();A&&(m={club_id:A.id,country_code:null,name:A.encoded_name+" Stadium",club:{encoded_name:A.encoded_name,logo_url:A.logo_url}})}return{lines:d,subs:p,gcCards:x,stadiumDef:m}}function So(e){const t=Mt[e]||Mt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},o=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const a of["GK","DEF","MIL","ATT"]){const r=[];for(let p=0;p<t[a];p++){const s=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:o[d%o.length],country_code:"XX",club_id:null,job:a,job2:null,note_g:a==="GK"?s:2,note_d:a==="DEF"?s:2,note_m:a==="MIL"?s:2,note_a:a==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:a}),d++}const l=dt(r.length);r.forEach((p,s)=>{p._col=l[s]}),i[a]=r}return i}function zo(e,t,i){var o;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((o=t.aiStadiumDef.club)==null?void 0:o.encoded_name)||""}</div>`:""}
    <div style="width:min(90vw,420px)">${ct(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>Ao(e,t,i),5e3)}function Ao(e,t,i){const o=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[],a=t.stadiumDef||null,r=t.aiStadiumDef||null;function l(g,I){const C=ze(g,"MIL"),j=g.evolution_bonus||g._evolution_bonus||0,F=g.job==="MIL"||g.job2==="MIL"?j:0,q=g.stadiumBonus||I&&(I.club_id&&String(g.club_id)===String(I.club_id)||I.country_code&&g.country_code===I.country_code)?10:0;return C+F+q}function p(g,I){return g.reduce((C,j)=>C+l(j,I),0)}function s(g){let I=0;for(let C=0;C<g.length-1;C++){const j=ot(g[C],g[C+1]);j==="#00ff88"?I+=2:j==="#FFD700"&&(I+=1)}return I}const n=p(o,a)+s(o),x=p(d,r)+s(d),u=n>=x;function h(g,I,C,j,F){return`<div id="duel-row-${j}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${I}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${g.map((q,N)=>{const V=N<g.length-1?ot(q,g[N+1]):null,K=!V||V==="#ff3333"||V==="#cc2222",oe=V==="#00ff88"?"+2":V==="#FFD700"?"+1":"";l(q,F),q.stadiumBonus||F&&(F.club_id&&String(q.club_id)===String(F.club_id)||F.country_code&&(q.country_code,F.country_code));const ie=q.evolution_bonus||q._evolution_bonus||0;return`
          <div class="duel-card duel-card-${j}" data-idx="${N}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Xe({...q,_evolution_bonus:ie},58,78,F)}
          </div>
          ${N<g.length-1?`<div class="duel-link duel-link-${j}" data-idx="${N}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${K?"rgba(255,255,255,0.12)":V};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${K?"none":`0 0 8px ${V}`}">
            ${oe?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${V}">${oe}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${j}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${p(g,F)} + ${s(g)} liens = <b style="color:#fff">${p(g,F)+s(g)}</b>
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

    ${h(o,t.clubName,"#D4A017","home",a)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${h(d,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const _=()=>{const g=(I,C)=>e.querySelectorAll(I).forEach((j,F)=>{setTimeout(()=>{j.style.opacity="1",j.style.transform="translateY(0) scale(1)"},C+F*90)});g(".duel-card-home",150),g(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((I,C)=>{setTimeout(()=>{I.style.opacity="1"},C*70)}),900),setTimeout(()=>{const I=e.querySelector("#vs-label");I&&(I.style.opacity="1",I.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(C=>C.style.opacity="1")},1250),setTimeout(()=>{m("score-home",n,800),m("score-ai",x,800)},1500)};function m(g,I,C){const j=document.getElementById(g);if(!j)return;const F=performance.now(),q=N=>{const V=Math.min(1,(N-F)/C);j.textContent=Math.round(I*(1-Math.pow(1-V,3))),V<1?requestAnimationFrame(q):j.textContent=I};requestAnimationFrame(q)}requestAnimationFrame(_),t.attacker=u?"home":"ai";const c=u?oi():null;u&&(t.boostCard={value:c}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:o.map(g=>({name:g.name,note:ze(g,"MIL"),portrait:He(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),aiPlayers:d.map(g=>({name:g.name,note:ze(g,"MIL"),portrait:He(g),job:g.job,country_code:g.country_code,rarity:g.rarity,clubName:g.clubName,clubLogo:g.clubLogo})),homeTotal:n,aiTotal:x,text:`Duel milieu : ${t.clubName} ${n} – ${x} IA → ${u?t.clubName+" attaque":"IA attaque"}`});const A=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Je(e,t,i),t.attacker==="ai"&&setTimeout(()=>ei(e,t,i),800)};setTimeout(()=>{const g=document.getElementById("score-home"),I=document.getElementById("score-ai"),C=document.getElementById(u?"duel-row-home":"duel-row-ai"),j=document.getElementById(u?"duel-row-ai":"duel-row-home"),F=u?g:I,q=u?I:g;F&&(F.style.fontSize="80px",F.style.color=u?"#FFD700":"#ff6b6b",F.style.animation="duelPulse .5s ease"+(u?", duelGlow 1.5s ease infinite .5s":"")),q&&(q.style.opacity="0.25"),setTimeout(()=>{C&&(C.style.transformOrigin="center",C.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",C.style.zIndex="5"),setTimeout(()=>{var V;const N=document.getElementById("duel-shock");if(N){const K=(V=j||C)==null?void 0:V.getBoundingClientRect(),oe=e.querySelector(".match-screen").getBoundingClientRect();K&&(N.style.top=K.top-oe.top+K.height/2+"px"),N.style.animation="shockwave .5s ease-out forwards"}j&&(j.style.transformOrigin="center",j.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var V;const N=document.getElementById("duel-finale");N&&(N.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${u?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${u?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${c}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,N.style.transition="opacity .45s ease",N.style.opacity="1",N.style.pointerEvents="auto",(V=document.getElementById("start-match-btn"))==null||V.addEventListener("click",A))},600)},700)},2800)}function Lo(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>at(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>at(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${at(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${at(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Je(e,t,i){var F,q,N,V,K,oe,ie,Q,R;const o=t.selected.map(P=>P.cardId),d=t.usedSubIds||[],a=t.homeSubs.filter(P=>!d.includes(P.cardId)),l=Object.values(t.homeTeam).flat().filter(P=>P.used).length>0&&a.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(P=>(t.aiTeam[P]||[]).some(re=>!re.used)),s=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(P=>!P.used),n=t.phase==="attack"&&p&&s.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(P=>!P.used).map(P=>P.cardId):[];t.log[t.log.length-1];const x=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",h=t.phase==="defense",_=t.phase==="finished",c=(t.homeSubs||[]).filter(P=>!(t.usedSubIds||[]).includes(P.cardId)).length>0&&t.subsUsed<t.maxSubs,A=u&&s.length===0&&!c,g=t.gcCards.filter(P=>!t.usedGc.includes(P.id)),I=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${it((re.players||[]).map(xe=>({...xe,used:!1})),"#ff6b6b",re.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const re=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${it((re.players||[]).map(xe=>({...xe,used:!1})),"#00ff88",re.total)}
          </div>`}const P=t.log[t.log.length-1];return P?'<div style="padding:2px 4px">'+Lo(P)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const P=window.innerWidth>=700,re=(H,Z,ge)=>{var B,$;const de=(t.gcDefs||[]).find(f=>f.name===H.gc_type),me={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[de==null?void 0:de.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ne={purple:"#b06ce0",light_blue:"#00d4ef"}[de==null?void 0:de.color]||"#b06ce0",ue=(de==null?void 0:de.name)||H.gc_type,Le=(de==null?void 0:de.effect)||((B=Oe[H.gc_type])==null?void 0:B.desc)||"",Ie=de!=null&&de.image_url?`/icons/${de.image_url}`:null,Ce=(($=Oe[H.gc_type])==null?void 0:$.icon)||"⚡",Te=Math.round(ge*.22),qe=Math.round(ge*.22),Pe=ge-Te-qe,Se=ue.length>12?7:9;return`<div class="gc-mini" data-gc-id="${H.id}" data-gc-type="${H.gc_type}"
          style="box-sizing:border-box;width:${Z}px;height:${ge}px;border-radius:10px;border:2px solid ${ne};background:${me};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${Te}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Se}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Z-6}px">${ue}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Pe}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Ie?`<img src="${Ie}" style="max-width:${Z-10}px;max-height:${Pe-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Pe*.55)}px">${Ce}</span>`}
          </div>
          <div style="height:${qe}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Le.slice(0,38)}</span>
          </div>
        </div>`},xe=(H,Z)=>{var ge;return`<div id="boost-card"
          style="box-sizing:border-box;width:${H}px;height:${Z}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Z*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Z*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Z*.09)}px;color:#000;font-weight:900">+${(ge=t.boostCard)==null?void 0:ge.value}</div>
          </div>`},_e=(H,Z)=>Z?xe(130,175):re(H,130,175),we=(H,Z)=>Z?xe(68,95):re(H,68,95),ve=P?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ee=_?`<button id="btn-results" style="${ve};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:x?`<div style="${ve};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:A?`<button id="btn-pass" style="${ve};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${ve};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:h?`<button id="btn-action" style="${ve};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ve};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,se=u||h?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",pe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${P?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${a.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':a.map(H=>`<div class="sub-btn-col" data-sub-id="${H.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(H,76,100)}</div>`).join("")}
      </div>`,ce=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${pt(t.homeTeam,t.formation,t.phase,o,300,300,n)}
        </div>
      </div>`;return P?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${pe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ce}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ee}${se}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${g.map(H=>_e(H,!1)).join("")}
            ${I?_e(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(t.homeTeam,t.formation,t.phase,o,300,300,n)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${g.map(H=>we(H,!1)).join("")}
            ${I?we(null,!0):""}
            <div id="sub-btn-main" style="cursor:${l?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${l?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${l?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${l?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${a.length}</div>
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
          <div>${Ee}${se}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(P=>{var re,xe,_e;if(P.type==="duel"){const we=P.isGoal,ve=P.homeScored?"#FFD700":we?"#ff6b6b":"rgba(255,255,255,0.3)",Ee=P.homeScored?"⚽ BUT !":we?"⚽ BUT IA !":(re=P.homePlayers)!=null&&re.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${we?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ve};margin-bottom:4px">
                <div style="font-size:9px;color:${ve};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Ee}</div>
                ${(xe=P.homePlayers)!=null&&xe.length?`<div style="margin-bottom:3px">${it(P.homePlayers,"rgba(255,255,255,0.7)",P.homeTotal)}</div>`:""}
                ${(_e=P.aiPlayers)!=null&&_e.length?`<div style="opacity:0.7">${it(P.aiPlayers,"#ff6b6b",P.aiTotal)}</div>`:""}
              </div>`}return P.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${P.outPlayer?Xe({...P.outPlayer,used:!0,_line:P.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${P.inPlayer?Xe({...P.inPlayer,_line:P.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:P.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${P.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${P.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function C(){const P=e.querySelector(".match-screen");if(!P)return;const re=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);P.style.bottom="auto",P.style.height=re+"px",P.style.minHeight=re+"px",P.style.maxHeight=re+"px",P.style.overflow="hidden";const xe=e.querySelector("#mobile-action-bar"),_e=e.querySelector("#mobile-play-area");xe&&_e&&(_e.style.paddingBottom=xe.offsetHeight+"px")}if(C(),setTimeout(C,120),setTimeout(C,400),setTimeout(C,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",C),window.visualViewport.addEventListener("scroll",C)),window.addEventListener("resize",C)),function(){const re=e.querySelector(".terrain-wrapper svg");re&&(re.removeAttribute("width"),re.removeAttribute("height"),re.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",re.setAttribute("viewBox","-26 -26 352 352"),re.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const P=e.querySelector(".terrain-wrapper svg");P&&(P.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let P=!1,re=30;const xe=()=>document.getElementById("match-timer"),_e=()=>{const we=xe();if(!we)return;const ve=String(Math.floor(re/60)).padStart(2,"0"),Ee=String(re%60).padStart(2,"0");we.textContent=` ${ve}:${Ee}`,we.style.color=P?"#ff2222":"#ff9500",we.style.fontWeight="900"};_e(),t._timerInt=setInterval(()=>{if(re--,re<0)if(!P)P=!0,re=15,_e();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const we=document.createElement("div");we.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",we.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(we),setTimeout(()=>{we.remove(),Dt(e,t,i)},2500)}else _e()},1e3)}(F=document.getElementById("match-quit"))==null||F.addEventListener("click",()=>{Ve(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Dt(e,t,i))}),(q=document.getElementById("view-ai"))==null||q.addEventListener("click",()=>Ro(t,i)),(N=document.getElementById("toggle-history"))==null||N.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.add("open")}),(V=document.getElementById("close-history"))==null||V.addEventListener("click",()=>{var P;(P=document.getElementById("match-history-panel"))==null||P.classList.remove("open")}),(K=document.getElementById("btn-action"))==null||K.addEventListener("click",()=>{t.selected.length!==0&&(u?Mo(e,t,i):h&&jo(e,t,i))}),(oe=document.getElementById("btn-results"))==null||oe.addEventListener("click",()=>Dt(e,t,i)),(ie=document.getElementById("btn-pass"))==null||ie.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Je(e,t,i),setTimeout(()=>ei(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(P=>{P.addEventListener("click",()=>Io(P,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(P=>{P.addEventListener("click",()=>ui(e,t,i,null,P.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(P=>{P.addEventListener("click",()=>Do(P.dataset.gcId,P.dataset.gcType,e,t,i))}),(Q=document.getElementById("boost-card"))==null||Q.addEventListener("click",()=>No(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(P=>{P.addEventListener("click",()=>ui(e,t,i,P.dataset.subId))}),(R=document.getElementById("sub-btn-main"))==null||R.addEventListener("click",()=>ui(e,t,i))}function Io(e,t,i,o){const d=e.dataset.cardId,a=e.dataset.role,r=t.selected.findIndex(l=>l.cardId===d);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){o.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[a]||[]).find(p=>p.cardId===d);l&&t.selected.push({...l,_role:a,_line:a})}Je(i,t,o)}function Si(e,t,i){e.matchId&&T.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Mo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Si(t,i,i.state.profile.id);const o=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(l=>!l.used)),d=t.selected.map(r=>{const l=(t.homeTeam[r._role]||[]).find(s=>s.cardId===r.cardId)||r,p=o&&["GK","DEF"].includes(r._role);return{...l,_line:r._role,...p?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),a=Ut(d,t.modifiers.home);t.pendingAttack={...a,players:[...d],side:"home"},t.selected.forEach(r=>{const l=(t.homeTeam[r._role]||[]).find(p=>p.cardId===r.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${a.total} (base ${a.base}${a.links?` +${a.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Je(e,t,i),setTimeout(()=>Bo(e,t,i),1200)}function jo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Si(t,i,i.state.profile.id);const o=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(s=>s.cardId===l.cardId)||l,_line:l._role})),d=Kt(o,t.modifiers.home);t.selected.forEach(l=>{const p=(t.homeTeam[l._role]||[]).find(s=>s.cardId===l.cardId);p&&(p.used=!0)});const a=Vt(t.pendingAttack.total,d.total,t.modifiers.home),r={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:He(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo})),homePlayers:t.selected.map(l=>{const p=(t.homeTeam[l._role]||[]).find(s=>s.cardId===l.cardId)||l;return{name:p.name,note:(p._line==="GK"?Number(p.note_g)||0:p._line==="MIL"?Number(p.note_m)||0:Number(p.note_d)||0)+(p.boost||0),portrait:He(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)r.text="🛡️ Bouclier ! But annulé.",t.log.push(r);else if(a.goal){t.aiScore++,r.isGoal=!0,r.homeScored=!1,r.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(r),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Je(e,t,i),ti(r.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Lt(e,t,i,"home-attack")});return}else r.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(r);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Lt(e,t,i,"home-attack")}function Co(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(p=>p.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(p=>!e.aiUsedSubIds.includes(p.cardId));if(!i.length)return;const o=t[Math.floor(Math.random()*t.length)],d=i.find(p=>p.job===o.job)||i[0],a={...d,used:!1,_line:o._line,_col:o._col},r=e.aiTeam[o._line],l=r.findIndex(p=>p.cardId===o.cardId);l!==-1&&(r[l]=a),e.aiUsedSubIds.push(d.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${d.firstname} ${d.name} remplace ${o.firstname} ${o.name}`,type:"info"})}function qo(e){var o;if(!((o=e.aiGcCards)!=null&&o.length))return;const t=e.aiGcCards.filter(d=>!e.aiUsedGc.includes(d.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Oe[i.gc_type],i.gc_type){case"Boost+2":{const d=Object.values(e.aiTeam).flat().filter(a=>!a.used);if(d.length){const a=d[Math.floor(Math.random()*d.length)];a.boost=(a.boost||0)+2}break}case"Boost+3":{const d=Object.values(e.aiTeam).flat().filter(a=>!a.used);if(d.length){const a=d[Math.floor(Math.random()*d.length)];a.boost=(a.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function ei(e,t,i){Si(t,i,null),Co(t),qo(t);const o=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=Zi(o,"attack",t.difficulty);if(!d.length){Qt(e,t,i);return}const a=Ut(d,t.modifiers.ai);t.pendingAttack={...a,players:d,side:"ai"},d.forEach(s=>{s.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${d.map(s=>s.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used),p=(t.homeSubs||[]).filter(s=>!(t.usedSubIds||[]).includes(s.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!p){t.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(n=>({name:n.name,note:n._line==="MIL"?n.note_m:n.note_a,portrait:He(n),job:n.job,country_code:n.country_code,rarity:n.rarity,clubName:n.clubName,clubLogo:n.clubLogo})),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(s),t.pendingAttack=null,Je(e,t,i),ti(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Lt(e,t,i,"home-attack")});return}t.phase="defense",Je(e,t,i)}function Bo(e,t,i){var s,n;const o=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=Zi(o,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(x=>(t.aiTeam[x]||[]).filter(u=>!u.used)).length){t.homeScore++;const u={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((s=t.pendingAttack)==null?void 0:s.players)||[]).map(h=>({name:h.name,note:ze(h,h._line||h.job),portrait:He(h),job:h.job,country_code:h.country_code,rarity:h.rarity,clubName:h.clubName,clubLogo:h.clubLogo})),homeTotal:((n=t.pendingAttack)==null?void 0:n.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(u),t.modifiers.ai={},t.pendingAttack=null,Je(e,t,i),ti(u.homePlayers,t.homeScore,t.aiScore,!0,()=>{Lt(e,t,i,"ai-attack")});return}const r=d.length>0?Kt(d,t.modifiers.ai).total:0;d.forEach(x=>{x.used=!0});const l=Vt(t.pendingAttack.total,r,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(x=>({name:x.name,note:x._line==="MIL"?x.note_m:x.note_a,portrait:He(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),aiPlayers:d.map(x=>({name:x.name,note:x._line==="GK"?x.note_g:x._line==="MIL"?x.note_m:x.note_d,portrait:He(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo})),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(l.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(l.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,Je(e,t,i),ti(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{Lt(e,t,i,"ai-attack")});return}else p.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,Lt(e,t,i,"ai-attack")}function Lt(e,t,i,o){if(t.round++,pn(t)){Dt(e,t,i);return}if(o==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(a=>!a.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Qt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Qt(e,t,i);return}setTimeout(()=>ei(e,t,i),100);return}t.phase="attack",Je(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(a=>!a.used).length){Qt(e,t,i);return}t.phase="ai-attack",Je(e,t,i),setTimeout(()=>ei(e,t,i),800)}}function pn(e){const t=["MIL","ATT","GK","DEF"].some(o=>(e.homeTeam[o]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(o=>(e.aiTeam[o]||[]).some(d=>!d.used));return!t&&!i}function Qt(e,t,i){pn(t)?Dt(e,t,i):(t.phase="attack",Je(e,t,i))}function Fo(e,t,i){const o=document.createElement("div");o.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=He(e),a=He(t),r=Ot[e.job]||"#555",l=Ot[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,s=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;o.innerHTML=`
    <style>
      @keyframes subFadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
      @keyframes subCardIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
    </style>
    <div style="font-size:11px;letter-spacing:3px;color:rgba(255,255,255,0.5);text-transform:uppercase">🔄 Remplacement</div>
    <div style="display:flex;align-items:center;gap:18px;animation:subCardIn 0.35s ease">
      <div style="text-align:center">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">SORT</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${r};border:3px solid #ff6b6b;position:relative;overflow:hidden;margin:0 auto">
          ${d?`<img src="${d}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${p}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${e.firstname}</div>
        <div style="font-size:12px;color:#ff6b6b;font-weight:700">${e.name}</div>
      </div>
      <div style="font-size:32px;color:rgba(255,255,255,0.35)">→</div>
      <div style="text-align:center">
        <div style="font-size:9px;color:#00ff88;letter-spacing:1px;margin-bottom:6px;text-transform:uppercase">ENTRE</div>
        <div style="width:80px;height:80px;border-radius:12px;background:${l};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${a?`<img src="${a}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${s}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(o);let n=!1;const x=()=>{n||(n=!0,o.remove(),i())};o.addEventListener("click",x),setTimeout(x,2e3)}function qt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ui(e,t,i,o=null,d=null){var h,_;if(t.phase!=="attack"){qt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){qt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const a=Object.entries(t.homeTeam).flatMap(([m,c])=>(c||[]).filter(A=>A.used).map(A=>({...A,_line:A._line||m}))),r=t.homeSubs.filter(m=>!t.usedSubIds.includes(m.cardId));if(!a.length){qt("Aucun joueur utilisé à remplacer");return}if(!r.length){qt("Aucun remplaçant disponible");return}let l=Math.max(0,a.findIndex(m=>m.cardId===d));const p=((h=a[l])==null?void 0:h._line)||((_=a[l])==null?void 0:_.job);let s=o?Math.max(0,r.findIndex(m=>m.cardId===o)):Math.max(0,r.findIndex(m=>m.job===p)),n=!1;const x=document.createElement("div");x.id="sub-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function u(){var j,F,q,N,V,K;const m=a[l],c=r[s],A=Math.min(130,Math.round((window.innerWidth-90)/2)),g=Math.round(A*1.35),I=oe=>`background:rgba(255,255,255,0.12);border:none;color:${oe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${oe?"default":"pointer"};flex-shrink:0`;x.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${I(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${c?Xe({...c,used:!1,boost:0},A,g):"<div>—</div>"}</div>
        <button id="in-down" style="${I(s>=r.length-1)}" ${s>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${I(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${m?Xe({...m,used:!1,boost:0},A,g):"<div>—</div>"}</div>
        <button id="out-down" style="${I(l>=a.length-1)}" ${l>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${a.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(j=x.querySelector("#sub-close"))==null||j.addEventListener("click",()=>x.remove()),(F=x.querySelector("#out-up"))==null||F.addEventListener("click",()=>{l>0&&(l--,u())}),(q=x.querySelector("#out-down"))==null||q.addEventListener("click",()=>{l<a.length-1&&(l++,u())}),(N=x.querySelector("#in-up"))==null||N.addEventListener("click",()=>{s>0&&(s--,u())}),(V=x.querySelector("#in-down"))==null||V.addEventListener("click",()=>{s<r.length-1&&(s++,u())});const C=(oe,ie,Q,R)=>{const P=x.querySelector("#"+oe);if(!P)return;let re=0;P.addEventListener("touchstart",xe=>{re=xe.touches[0].clientY},{passive:!0}),P.addEventListener("touchend",xe=>{const _e=xe.changedTouches[0].clientY-re;if(Math.abs(_e)<30)return;const we=ie();_e<0&&we<R-1?(Q(we+1),u()):_e>0&&we>0&&(Q(we-1),u())},{passive:!0})};C("in-panel",()=>s,oe=>s=oe,r.length),C("out-panel",()=>l,oe=>l=oe,a.length),(K=x.querySelector("#sub-confirm"))==null||K.addEventListener("click",oe=>{if(oe.preventDefault(),oe.stopPropagation(),n)return;n=!0;const ie=a[l],Q=r[s];if(!ie||!Q)return;let R=null,P=-1;for(const[xe,_e]of Object.entries(t.homeTeam)){const we=(_e||[]).findIndex(ve=>ve.cardId===ie.cardId);if(we!==-1){R=xe,P=we;break}}if(P===-1||!R){qt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),x.remove();return}const re={...Q,_line:R,_col:ie._col||0,used:!1,boost:0};t.homeTeam[R].splice(P,1,re),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(Q.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ie.name,firstname:ie.firstname,note:ze(ie,R),portrait:He(ie),job:ie.job,country_code:ie.country_code,rarity:ie.rarity,clubName:ie.clubName,clubLogo:ie.clubLogo},inPlayer:{name:Q.name,firstname:Q.firstname,note:ze(Q,R),portrait:He(Q),job:Q.job,country_code:Q.country_code,rarity:Q.rarity,clubName:Q.clubName,clubLogo:Q.clubLogo},text:`🔄 ${Q.firstname} ${Q.name} remplace ${ie.firstname} ${ie.name}`}),x.remove(),Fo(ie,Q,()=>Je(e,t,i))})}document.body.appendChild(x),u()}function Do(e,t,i,o,d){var _,m;const a=(o.gcDefs||[]).find(c=>c.name===t),r=Oe[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[a==null?void 0:a.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[a==null?void 0:a.color]||"#b06ce0",s=(a==null?void 0:a.name)||t,n=(a==null?void 0:a.effect)||r.desc,x=a!=null&&a.image_url?`/icons/${a.image_url}`:null,u=r.icon||"⚡",h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",h.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${s.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${s}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${x?`<img src="${x}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${u}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${n}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(h),(_=h.querySelector("#gc-back"))==null||_.addEventListener("click",()=>h.remove()),(m=h.querySelector("#gc-use"))==null||m.addEventListener("click",()=>{h.remove(),Go(e,t,i,o,d)})}function Jt(e,t,i,o,d,a){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function p(){var s,n;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(x=>{const u=x._line||x.job||"MIL",h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[u]||"#555",_=ze(x,u)+(x.boost||0),m=l.find(c=>c.cardId===x.cardId);return`<div class="gc-pick-item" data-cid="${x.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${m?"#FFD700":"rgba(255,255,255,0.25)"};background:${h};overflow:hidden;cursor:pointer;flex-shrink:0;${x.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${_}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${u}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(s=r.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(x=>{x.addEventListener("click",()=>{const u=x.dataset.cid,h=e.find(m=>m.cardId===u);if(!h)return;const _=l.findIndex(m=>m.cardId===u);_>-1?l.splice(_,1):l.length<t&&l.push(h),p()})}),(n=r.querySelector("#gc-picker-confirm"))==null||n.addEventListener("click",()=>{r.remove(),a(l)})}p(),document.body.appendChild(r)}const Po={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},o,d,a)=>{const r=Object.entries(o.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,p])=>p.filter(s=>!s.used).map(s=>({...s,_line:l})));return r.length?(Jt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,o,l=>{l.forEach(p=>{const s=(o.homeTeam[p._line]||[]).find(n=>n.cardId===p.cardId);s&&(s.boost=(s.boost||0)+e,o.log.push({text:`⚡ +${e} sur ${s.name}`,type:"info"}))}),Je(d,o,a)}),!0):(o.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Je(d,o,a),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:o="ai"},d,a,r)=>{const l=o==="home"?d.homeTeam:d.aiTeam,p=o==="ai"?"adverse":"allié",s=Object.entries(l).filter(([n])=>!i.length||i.includes(n)).flatMap(([n,x])=>x.filter(u=>!u.used).map(u=>({...u,_line:n})));return s.length?(Jt(s,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,a,d,n=>{n.forEach(x=>{const h=((o==="home"?d.homeTeam:d.aiTeam)[x._line]||[]).find(_=>_.cardId===x.cardId);h&&(h.boost=(h.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${h.name}${o==="ai"?" (IA)":""}`,type:"info"}))}),Je(a,d,r)}),!0):(d.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),Je(a,d,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},o,d,a)=>{const r=i==="home"?o.homeTeam:o.aiTeam,l=i==="ai"?"adverse":"allié",p=Object.entries(r).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,n])=>n.filter(x=>!x.used).map(x=>({...x,_line:s})));return p.length?(Jt(p,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,o,s=>{s.forEach(n=>{const u=((i==="home"?o.homeTeam:o.aiTeam)[n._line]||[]).find(h=>h.cardId===n.cardId);u&&(u.used=!0,o.log.push({text:`❌ ${u.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Je(d,o,a)}),!0):(o.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Je(d,o,a),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,o,d)=>{const a=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,l])=>l.filter(p=>p.used).map(p=>({...p,_line:r})));return a.length?(Jt(a,e,`Choisir ${e} joueur(s) à ressusciter`,o,i,r=>{r.forEach(l=>{const p=(i.homeTeam[l._line]||[]).find(s=>s.cardId===l.cardId);p&&(p.used=!1,i.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),Je(o,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Je(o,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Go(e,t,i,o,d){o.usedGc.push(e);const a=o.gcDefs||[],r=a.find(p=>p.name===t)||a.find(p=>{var s;return((s=p.name)==null?void 0:s.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const p=Po[r.effect_type];p?p(r.effect_params||{},o,i,d)||(l=!0):(d.toast(`Effet "${r.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":o.modifiers.home.doubleAttack=!0,o.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":o.modifiers.home.shield=!0,o.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(o.homeTeam).flatMap(([s,n])=>(n||[]).filter(x=>x.used).map(x=>({...x,_line:s})));p.length?(p[0].used=!1,o.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):o.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":o.modifiers.ai.stolenNote=(o.modifiers.ai.stolenNote||0)+1,o.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...o.aiTeam.ATT||[],...o.aiTeam.MIL||[]].filter(s=>!s.used);if(p.length){const s=p.sort((n,x)=>ze(x,"ATT")-ze(n,"ATT"))[0];s.used=!0,o.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":o.maxSubs++,o.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}T.from("cards").delete().eq("id",e).then(()=>{}),l&&Je(i,o,d)}function No(e,t,i){const o=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!o.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${o.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Ot[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ze(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const a=d.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[r]||[]).find(p=>p.cardId===a);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Je(e,t,i)})})}function ti(e,t,i,o,d){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const r=Array.from({length:10},(s,n)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${n%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][n%8]}
    </div>`).join("");a.innerHTML=`
  <style>
    @keyframes butPop  {0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
    @keyframes ballIn  {0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
    @keyframes scoreIn {from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fwA     {0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
    @keyframes fwB     {0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
  </style>
  <div style="position:absolute;inset:0;pointer-events:none">${r}</div>
  <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop 0.55s cubic-bezier(0.36,0.07,0.19,0.97) both;letter-spacing:6px;position:relative;z-index:1">
    ${o?"BUT !":"BUT IA !"}
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
    ${e.map(s=>`
    <div style="text-align:center">
      <div style="width:50px;height:50px;border-radius:50%;background:${Ot[s.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${s.portrait?`<img src="${s.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(s.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(a);let l=!1;const p=()=>{l||(l=!0,a.remove(),setTimeout(()=>d(),50))};a.addEventListener("click",p),setTimeout(p,3500)}async function Dt(e,t,i){var n,x;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:o}=i,d=t.homeScore>t.aiScore,a=t.homeScore===t.aiScore,r=d?"victoire":a?"nul":"defaite",l=Rn(t.mode,r);t.matchId&&await T.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?o.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(o.profile.credits||0)+l,matches_played:(o.profile.matches_played||0)+1};d?p.wins=(o.profile.wins||0)+1:a?p.draws=(o.profile.draws||0)+1:p.losses=(o.profile.losses||0)+1,await T.from("users").update(p).eq("id",o.profile.id),await i.refreshProfile();const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",s.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${d?"🏆":a?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${d?"Victoire !":a?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${l.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(s),(n=document.getElementById("res-home"))==null||n.addEventListener("click",()=>{s.remove(),Ve(e),i.navigate("home")}),(x=document.getElementById("res-replay"))==null||x.addEventListener("click",()=>{s.remove(),Ve(e),i.navigate("match",{matchMode:t.mode})})}function Ro(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ct(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function hi(e,t,i=!1){var d,a,r,l;try{const p=(a=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:a.id;try{(T.getChannels?T.getChannels():[]).forEach(n=>{const x=n.topic||"";(x.includes("matchmaking")||x.includes("pvp-match")||x.includes("friend-invite"))&&T.removeChannel(n)})}catch(s){console.warn("[Random] cleanup canaux:",s)}p&&await T.rpc("cancel_matchmaking",{p_user_id:p}).catch(()=>{})}catch{}const o=i&&((l=(r=t==null?void 0:t.state)==null?void 0:r.params)==null?void 0:l.rankedData)||null;await ai(e,t,"random",({deckId:p,formation:s,starters:n,subsRaw:x,gcCardsEnriched:u,gcDefs:h,stadiumDef:_})=>{const m=c=>Oo(e,t,p,s,n,x,c,h||[],_,i,o);if(!u.length){m([]);return}ri(e,u,m)})}async function Oo(e,t,i,o,d,a,r=[],l=[],p=null,s=!1,n=null){var F,q;const{state:x,navigate:u,toast:h}=t;let _=!1,m=null;et(e);const c=(n==null?void 0:n.mmr)??((F=x.profile)==null?void 0:F.mmr)??1e3,A=s?Gt(c):null,g=s?"linear-gradient(180deg,#1a0030,#0a1628)":"linear-gradient(180deg,#0a1628,#1a0a2e)",I=s?(A==null?void 0:A.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:${g};padding:24px;text-align:center">
      ${s?`<div style="font-size:36px">${(A==null?void 0:A.emoji)||"⚽"}</div>`:""}
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:${I};border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked...":"Recherche d'un adversaire..."}</div>
      ${s?`<div style="font-size:13px;color:${(A==null?void 0:A.color)||"#D4A017"}">${(A==null?void 0:A.emoji)||"⚔️"} ${(A==null?void 0:A.label)||"Ranked"}</div>`:""}
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <div id="mm-range" style="display:none"></div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const C=async(N=!0)=>{_=!0,m&&(T.removeChannel(m),m=null),N&&await T.rpc("cancel_matchmaking",{p_user_id:x.profile.id}).catch(()=>{})};(q=document.getElementById("mm-cancel"))==null||q.addEventListener("click",async()=>{try{await C(!0)}catch{}Ve(e),u("home")});const j=async(N,V,K)=>{if(_)return;_=!0,m&&(T.removeChannel(m),m=null);const oe=document.getElementById("mm-status");oe&&(oe.textContent="Adversaire trouvé !"),await new Promise(ie=>setTimeout(ie,600)),e.isConnected&&un(e,t,N,K,r,l,s,n,p)};if(s){const N=[{range:50,delay:0},{range:100,delay:15e3},{range:200,delay:3e4},{range:400,delay:45e3},{range:800,delay:6e4}];let V=0,K=!1;const oe=async()=>{if(_||K)return;const{range:ie}=N[V],Q=document.getElementById("mm-range");Q&&(Q.textContent=`Plage MMR : ±${ie}`);const{data:R,error:P}=await T.rpc("try_matchmake_ranked",{p_user_id:x.profile.id,p_deck_id:i,p_mmr:c,p_range:ie});if(console.log("[Ranked] try_matchmake_ranked result:",R,"error:",JSON.stringify(P)),_)return;if(P||!(R!=null&&R.success)){h("Erreur matchmaking ranked","error"),Ve(e),u("home");return}if(R.matched){K=!0,j(R.match_id,R.opponent_id,!1);return}const re=document.getElementById("mm-status");if(re&&(re.textContent="En attente d'un adversaire..."),m||(m=T.channel("matchmaking-"+x.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${x.profile.id}`},xe=>{const _e=xe.new;_e.status==="matched"&&_e.match_id&&!K&&(K=!0,j(_e.match_id,_e.matched_with,!0))}).subscribe()),V<N.length-1){const xe=N[V+1].delay-N[V].delay;V++,setTimeout(()=>{!_&&!K&&oe()},xe)}};await oe()}else{const{data:N,error:V}=await T.rpc("try_matchmake",{p_user_id:x.profile.id,p_deck_id:i});if(V||!(N!=null&&N.success)){h("Erreur de matchmaking","error"),Ve(e),u("home");return}if(N.matched){j(N.match_id,N.opponent_id,!1);return}const K=document.getElementById("mm-status");K&&(K.textContent="En attente d'un autre joueur..."),m=T.channel("matchmaking-"+x.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${x.profile.id}`},oe=>{const ie=oe.new;ie.status==="matched"&&ie.match_id&&j(ie.match_id,ie.matched_with,!0)}).subscribe()}}async function Ho(e,t,i){const{state:o,navigate:d,toast:a}=t;try{(T.getChannels?T.getChannels():[]).forEach(s=>{const n=s.topic||"";(n.includes("matchmaking")||n.includes("pvp-match")||n.includes("friend-invite"))&&T.removeChannel(s)})}catch{}const{data:r}=await T.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!r){a("Match introuvable","error"),d("home");return}if(r.status==="finished"){a("Ce match est terminé","info"),d("home");return}const l=r.home_id===o.profile.id;un(e,t,i,l,[],[])}async function un(e,t,i,o,d=[],a=[],r=!1,l=null,p=null){const{state:s,navigate:n,toast:x}=t,u=o?"p1":"p2",h=o?"p2":"p1",_=(d||[]).map($=>$.id),m=(d||[]).map($=>({id:$.id,gc_type:$.gc_type,_gcDef:$._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:c}=await T.from("matches").select("*").eq("id",i).single();if(!c){x("Match introuvable","error"),n("home");return}async function A(){var W,te;console.log("[PvP] buildGameState match:",{id:c.id,home_deck_id:c.home_deck_id,away_deck_id:c.away_deck_id,mode:c.mode,is_ranked:c.is_ranked});const[{data:$,error:f},{data:y,error:b},{data:v},{data:w}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:c.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:c.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",c.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",c.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",f==null?void 0:f.message,"p2:",b==null?void 0:b.message,"p1D:",(W=$==null?void 0:$.starters)==null?void 0:W.length,"p2D:",(te=y==null?void 0:y.starters)==null?void 0:te.length);const k=ee=>{const fe=Number(ee.evolution_bonus)||0;return{cardId:ee.card_id,position:ee.position,id:ee.id,firstname:ee.firstname,name:ee.surname_encoded,country_code:ee.country_code,club_id:ee.club_id,job:ee.job,job2:ee.job2,note_g:(Number(ee.note_g)||0)+(ee.job==="GK"||ee.job2==="GK"&&Number(ee.note_g)>0?fe:0),note_d:(Number(ee.note_d)||0)+(ee.job==="DEF"||ee.job2==="DEF"&&Number(ee.note_d)>0?fe:0),note_m:(Number(ee.note_m)||0)+(ee.job==="MIL"||ee.job2==="MIL"&&Number(ee.note_m)>0?fe:0),note_a:(Number(ee.note_a)||0)+(ee.job==="ATT"||ee.job2==="ATT"&&Number(ee.note_a)>0?fe:0),evolution_bonus:fe,rarity:ee.rarity,skin:ee.skin,hair:ee.hair,hair_length:ee.hair_length,clubName:ee.club_encoded_name||null,clubLogo:ee.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},S=(($==null?void 0:$.starters)||[]).map(ee=>k(ee)),E=((y==null?void 0:y.starters)||[]).map(ee=>k(ee)),L=($==null?void 0:$.formation)||"4-4-2",z=(y==null?void 0:y.formation)||"4-4-2";let M=vt(S,L),D=vt(E,z);const Y=(($==null?void 0:$.subs)||[]).map(ee=>k(ee)),J=((y==null?void 0:y.subs)||[]).map(ee=>k(ee)),U=($==null?void 0:$.stadium_def)||(o?p:null),G=(y==null?void 0:y.stadium_def)||(o?null:p);return U&&(M=Tt(M,U),jt(Y,U)),G&&(D=Tt(D,G),jt(J,G)),{p1Team:M,p2Team:D,p1Subs:Y,p2Subs:J,p1Formation:L,p2Formation:z,p1Name:(v==null?void 0:v.club_name)||(v==null?void 0:v.pseudo)||"Joueur 1",p2Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?_:[],gc_p2:o?[]:_,gcCardsFull_p1:o?m:[],gcCardsFull_p2:o?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:a||[],lastActionAt:new Date().toISOString()}}let g=c.game_state&&Object.keys(c.game_state).length?c.game_state:null;if(console.log("[PvP] init - amIHome:",o,"gameState exists:",!!g,"match.status:",c.status,"home_id:",c.home_id,"away_id:",c.away_id,"myId:",s.profile.id),!g)if(o){g=await A(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((g==null?void 0:g.p1Team)||{}));const{data:$}=await T.from("matches").select("game_state").eq("id",i).single();!($!=null&&$.game_state)||!Object.keys($.game_state).length?await T.from("matches").update({game_state:g,turn_user_id:c.home_id}).eq("id",i):g=$.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let $=0;$<30&&!g;$++){await new Promise(y=>setTimeout(y,400));const{data:f}=await T.from("matches").select("game_state").eq("id",i).single();f!=null&&f.game_state&&Object.keys(f.game_state).length&&(g=f.game_state),$%5===0&&console.log("[PvP] away - poll",$,"game_state:",!!(f!=null&&f.game_state))}if(!g){x("Erreur de synchronisation","error"),n("home");return}g.gc_p2=_,g.gcCardsFull_p2=m,await T.from("matches").update({game_state:g}).eq("id",i)}let I=!1,C=null,j=!1;const F=new Set,q=new Set;async function N($){var z,M;try{T.removeChannel(V)}catch{}const f=g[u+"Score"]||0,y=g[h+"Score"]||0;let b,v;$.winner_id?(b=$.winner_id===s.profile.id,v=!1):$.forfeit?(b=f>y,v=!1):(v=f===y,b=f>y);let w="";if(r&&o)try{const{data:D}=await T.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",c.home_id).single(),{data:Y}=await T.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",c.away_id).single();if(D&&Y){const J=b?1:v?.5:0,U=1-J,G=D.placement_matches<10,W=Y.placement_matches<10,te=Li(D.mmr,D.mmr_deviation,D.mmr_volatility,Y.mmr,Y.mmr_deviation,J===1?1:J===0?0:.5,G),ee=Li(Y.mmr,Y.mmr_deviation,Y.mmr_volatility,D.mmr,D.mmr_deviation,U===1?1:U===0?0:.5,W);await T.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:v?null:b?c.home_id:c.away_id,p_home_id:c.home_id,p_away_id:c.away_id,p_home_delta:te.delta,p_away_delta:ee.delta,p_home_new_rd:te.newRd,p_away_new_rd:ee.newRd,p_home_new_vol:te.newSigma,p_away_new_vol:ee.newSigma});const fe=te.delta,ye=te.newMmr,be=Gt(ye),ke=fe>=0?"+":"",Be=fe>=0?"#4caf50":"#ff6b6b",Fe=Gt(D.mmr);w=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${be.id!==Fe.id?`<div style="font-size:20px;font-weight:900;color:${be.color}">
                    ${ye>D.mmr?"📈":"📉"} ${Fe.emoji} ${Fe.label} → ${be.emoji} ${be.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${ye>D.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${fe>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${be.color}">${be.emoji} ${be.label}</div>`}
              ${G?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${D.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(D){console.error("[Ranked] MMR update error:",D)}(z=document.getElementById("pvp-end-overlay"))==null||z.remove();const k=document.createElement("div");k.id="pvp-end-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const S=v?"🤝":b?"🏆":"😞",E=v?"MATCH NUL":b?"VICTOIRE !":"DÉFAITE",L=v?"#fff":b?"#FFD700":"#ff6b6b";k.innerHTML=`
      <div style="font-size:64px">${S}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${E}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${g[u+"Name"]} ${f} – ${y} ${g[h+"Name"]}</div>
      ${$.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${b?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${w}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(k),(M=k.querySelector("#pvp-end-home"))==null||M.addEventListener("click",()=>{k.remove(),Ve(e),n(r?"ranked":"home")})}const V=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},$=>{const f=$.new;try{if(f.status==="finished"||f.forfeit){if(I)return;I=!0,C&&(clearInterval(C),C=null),f.game_state&&(g=f.game_state),N(f);return}if(f.game_state){const y=g;g=f.game_state;const b=g._lastGC;if(b&&b.seq&&!q.has(b.seq)&&(q.add(b.seq),b.by!==u)){se(b.type,b.by,()=>xe());return}const v=y[u+"Score"]||0,w=y[h+"Score"]||0,k=g[u+"Score"]||0,S=g[h+"Score"]||0,E=k>v,L=S>w;if((E||L)&&!F.has(g.round)){F.add(g.round);const z=[...g.log||[]].reverse().find(D=>D.isGoal),M=((z==null?void 0:z.homePlayers)||[]).map(D=>({name:D.name,note:D.note,portrait:D.portrait,job:D.job}));Ee(M,k,S,E,()=>xe());return}xe()}}catch(y){console.error("[PvP] crash:",y)}}).subscribe();async function K($){Object.assign(g,$),g.lastActionAt=new Date().toISOString();const{error:f}=await T.from("matches").update({game_state:g}).eq("id",i);f&&x("Erreur de synchronisation","error");try{xe()}catch(y){console.error("[PvP] renderPvpScreen crash:",y)}}async function oe(){if(I)return;I=!0,C&&(clearInterval(C),C=null);const $=o?c.away_id:c.home_id,f=o?"p2":"p1",y=o?"p1":"p2",b={...g,[f+"Score"]:3,[y+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:$,home_score:b.p1Score||0,away_score:b.p2Score||0,game_state:b}).eq("id",i)}catch{}try{T.removeChannel(V)}catch{}setTimeout(()=>{Ve(e),n("home")},800)}const ie={BOOST_STAT:({value:$=1,count:f=1,roles:y=[]},b,v)=>{const w=b[u+"Team"],k=Object.entries(w).filter(([S])=>!y.length||y.includes(S)).flatMap(([S,E])=>E.filter(L=>!L.used).map(L=>({...L,_line:S})));if(!k.length){b.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),v(b);return}Q(k,f,`Choisir ${f} joueur(s) à booster (+${$})`,S=>{S.forEach(E=>{const L=(w[E._line]||[]).find(z=>z.cardId===E.cardId);L&&(L.boost=(L.boost||0)+$,b.log.push({text:`⚡ +${$} sur ${L.name}`,type:"info"}))}),b[u+"Team"]=w,v(b)})},DEBUFF_STAT:({value:$=1,count:f=1,roles:y=[],target:b="ai"},v,w)=>{const k=b==="home"?u:h,S=v[k+"Team"],E=b==="home"?"allié":"adverse",L=Object.entries(S).filter(([z])=>!y.length||y.includes(z)).flatMap(([z,M])=>M.map(D=>({...D,_line:z})));if(!L.length){v.log.push({text:`🎯 Aucun joueur ${E}`,type:"info"}),w(v);return}Q(L,f,`Choisir ${f} joueur(s) ${E}(s) (-${$})`,z=>{z.forEach(M=>{const D=(S[M._line]||[]).find(Y=>Y.cardId===M.cardId);D&&(D.boost=(D.boost||0)-$,v.log.push({text:`🎯 -${$} sur ${D.name}`,type:"info"}))}),v[k+"Team"]=S,w(v)})},GRAY_PLAYER:({count:$=1,roles:f=[],target:y="ai"},b,v)=>{const w=y==="home"?u:h,k=b[w+"Team"],S=y==="home"?"allié":"adverse",E=Object.entries(k).filter(([L])=>!f.length||f.includes(L)).flatMap(([L,z])=>z.filter(M=>!M.used).map(M=>({...M,_line:L})));if(!E.length){b.log.push({text:`❌ Aucun joueur ${S}`,type:"info"}),v(b);return}Q(E,$,`Choisir ${$} joueur(s) ${S}(s) à exclure`,L=>{const z="usedCardIds_"+w,M=new Set(b[z]||[]);L.forEach(D=>{const Y=(k[D._line]||[]).find(J=>J.cardId===D.cardId);Y&&(Y.used=!0,M.add(D.cardId),b.log.push({text:`❌ ${Y.name} exclu !`,type:"info"}))}),b[z]=[...M],b[w+"Team"]=k,v(b)})},REVIVE_PLAYER:({count:$=1,roles:f=[]},y,b)=>{const v=y[u+"Team"],w=Object.entries(v).filter(([k])=>!f.length||f.includes(k)).flatMap(([k,S])=>S.filter(E=>E.used).map(E=>({...E,_line:k})));if(!w.length){y.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),b(y);return}Q(w,$,`Choisir ${$} joueur(s) à ressusciter`,k=>{k.forEach(S=>{const E=(v[S._line]||[]).find(L=>L.cardId===S.cardId);E&&(E.used=!1,y.log.push({text:`💫 ${E.name} ressuscité !`,type:"info"}))}),y[u+"Team"]=v,b(y)})},REMOVE_GOAL:({},$,f)=>{const y=h+"Score";$[y]>0?($[y]--,$.log.push({text:"🚫 Dernier but annulé !",type:"info"})):$.log.push({text:"🚫 Aucun but à annuler",type:"info"}),f($)},ADD_GOAL_DRAW:({},$,f)=>{$[u+"Score"]===$[h+"Score"]?($[u+"Score"]++,$.log.push({text:"🎯 But bonus !",type:"info"})):$.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),f($)},ADD_SUB:({value:$=1},f,y)=>{f.maxSubs=(f.maxSubs||3)+$,f.log.push({text:`🔄 +${$} remplacement(s)`,type:"info"}),y(f)},CUSTOM:({},$,f)=>f($)};function Q($,f,y,b){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let w=[];function k(){var E,L;const S=$.map(z=>{const M={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",D=ze(z,z._line)+(z.boost||0),J=w.find(G=>G.cardId===z.cardId)?"#FFD700":"rgba(255,255,255,0.25)",U=z.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${J};background:${M};overflow:hidden;cursor:pointer;${U}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${D}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${z._line}</div>
        </div>`}).join("");v.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${y}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w.length}/${f}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${S}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${w.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${w.length}/${f})
          </button>
        </div>`,(E=v.querySelector("#pp-close"))==null||E.addEventListener("click",()=>v.remove()),v.querySelectorAll(".pp-item").forEach(z=>{z.addEventListener("click",()=>{const M=z.dataset.cid,D=$.find(J=>J.cardId===M),Y=w.findIndex(J=>J.cardId===M);D&&(Y>-1?w.splice(Y,1):w.length<f&&w.push(D),k())})}),(L=v.querySelector("#pp-confirm"))==null||L.addEventListener("click",()=>{v.remove(),b(w)})}k(),document.body.appendChild(v)}async function R($,f){const b=(g["gcCardsFull_"+u]||[]).find(S=>S.id===$),v=(b==null?void 0:b._gcDef)||(g.gcDefs||[]).find(S=>{var E;return S.name===f||((E=S.name)==null?void 0:E.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),w=[...g["usedGc_"+u]||[],$],k={type:f,by:u,seq:(g._gcAnimSeq||0)+1};q.add(k.seq),se(f,u,async()=>{if(v!=null&&v.effect_type&&v.effect_type!=="CUSTOM"){const E=ie[v.effect_type];if(E){const L={...g};E(v.effect_params||{},L,async z=>{z["usedGc_"+u]=w,z._lastGC=k,z._gcAnimSeq=k.seq,await K(z)});return}}const S={...g};switch(f){case"Remplacement+":S.maxSubs=(S.maxSubs||3)+1,S.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const E=h+"Score";S[E]>0&&(S[E]--,S.log.push({text:"🚫 But annulé",type:"info"}));break}}S["usedGc_"+u]=w,S._lastGC=k,S._gcAnimSeq=k.seq,await K(S)})}function P($,f){const y="usedCardIds_"+$,b=new Set(g[y]||[]);f.forEach(v=>b.add(v)),g[y]=[...b]}function re(){for(const $ of["p1","p2"]){const f=new Set(g["usedCardIds_"+$]||[]),y=g[$+"Team"];if(y)for(const b of["GK","DEF","MIL","ATT"])(y[b]||[]).forEach(v=>{v.used=f.has(v.cardId)})}}function xe(){var We,nt,ut,ft,gt,le;if(g.phase==="reveal")return _e();if(g.phase==="midfield")return ve();if(g.phase==="finished")return B();const $=g[u+"Team"],f=g[h+"Team"];re();const y=g[u+"Score"],b=g[h+"Score"],v=g[u+"Name"],w=g[h+"Name"],k=g.phase===u+"-attack",S=g.phase===u+"-defense",E=Array.isArray(g["selected_"+u])?g["selected_"+u]:[],L=E.map(X=>X.cardId),z=window.innerWidth>=700,M=g[u+"Subs"]||[],D=g["usedSubIds_"+u]||[],Y=M.filter(X=>!D.includes(X.cardId)),J=g["gcCardsFull_"+u]||[],U=g["usedGc_"+u]||[],G=J.filter(X=>!U.includes(X.id)),W=g.boostOwner===u&&!g.boostUsed,te=!["GK","DEF","MIL","ATT"].some(X=>(f[X]||[]).some(O=>!O.used)),ee=[...$.MIL||[],...$.ATT||[]].filter(X=>!X.used),fe=k&&te&&ee.length===0?[...$.GK||[],...$.DEF||[]].filter(X=>!X.used).map(X=>X.cardId):[];function ye(X,O,ae){var kt,Ct;const he=X._gcDef,$e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[he==null?void 0:he.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Qe={purple:"#b06ce0",light_blue:"#00d4ef"}[he==null?void 0:he.color]||"#b06ce0",Ze=(he==null?void 0:he.name)||X.gc_type,tt=(he==null?void 0:he.effect)||((kt=Oe[X.gc_type])==null?void 0:kt.desc)||"",rt=he!=null&&he.image_url?`/icons/${he.image_url}`:null,_t=((Ct=Oe[X.gc_type])==null?void 0:Ct.icon)||"⚡",$t=Math.round(ae*.22),lt=Math.round(ae*.22),mt=ae-$t-lt,xt=Ze.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${X.id}" data-gc-type="${X.gc_type}"
        style="box-sizing:border-box;width:${O}px;height:${ae}px;border-radius:10px;border:2px solid ${Qe};background:${$e};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${$t}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${xt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${O-6}px">${Ze}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${mt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${rt?`<img src="${rt}" style="max-width:${O-10}px;max-height:${mt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(mt*.55)}px">${_t}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${tt.slice(0,38)}</span>
        </div>
      </div>`}function be(X,O){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${X}px;height:${O}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(O*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(O*.2)}px">⚡</div>
        <div style="font-size:${Math.round(O*.09)}px;color:#000;font-weight:900">+${g.boostValue}</div>
      </div>`}const ke=(X,O)=>O?be(130,175):ye(X,130,175),Be=(X,O)=>O?be(68,95):ye(X,68,95),Fe=z?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Me=k?Te(u)?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${E.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Fe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:S?`<button id="pvp-action" style="${Fe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${E.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${w}</div>`,je=k&&!Te(u)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':k||S?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${E.length}/3 sélectionné(s)</div>`:"",Ae=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${z?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${Y.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':Y.map(X=>`<div class="pvp-sub-btn" data-sub-id="${X.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(X,z?76:44,z?100:58)}</div>`).join("")}
    </div>`,Ne=k?"attack":S?"defense":"idle",Ue=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt($,g[u+"Formation"],Ne,L,300,300,fe)}
      </div>
    </div>`;function Ye(X){if(X.type==="duel"&&(X.homeTotal!=null||X.aiTotal!=null)){const O=(X.homeTotal||0)>=(X.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(X.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.homePlayers||[]).map(ae=>at(ae)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${O?20:14}px;font-weight:900;color:${O?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${X.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${O?14:20}px;font-weight:900;color:${O?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${X.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(X.aiPlayers||[]).map(ae=>at(ae)).join("")}
            </div>
          </div>
          ${X.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${X.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${X.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${X.type==="goal"?700:400};padding:3px 2px">${X.text||""}</div>`}const Ke=(()=>{var O,ae;if(S&&((O=g.pendingAttack)!=null&&O.players)){const he=g.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${w} ATTAQUE — Défendez !</div>
          ${it((he.players||[]).map($e=>({...$e,used:!1})),"#ff6b6b",he.total)}
        </div>`}if(k&&((ae=g.pendingAttack)!=null&&ae.players)){const he=g.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((he.players||[]).map($e=>({...$e,used:!1})),"#00ff88",he.total)}
        </div>`}const X=(g.log||[]).slice(-1)[0];return X?'<div style="padding:2px 4px">'+Ye(X)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Re=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${y} – ${b}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(g.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",z?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Re}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ae}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ue}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Me}${je}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${G.map(X=>ke(X,!1)).join("")}
            ${W?ke(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Re}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt($,g[u+"Formation"],Ne,L,300,300,fe)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${G.map(X=>Be(X,!1)).join("")}
            ${W?Be(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${k&&Y.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${k&&Y.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${k&&Y.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${k&&Y.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${Y.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(g["usedSubIds_"+u]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(g["usedSubIds_"+u]||[]).length}/${g.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Me}${je}</div>
        </div>
      </div>`;function Ge(){const X=e.querySelector(".match-screen");if(!X)return;const O=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);X.style.height=O+"px",X.style.minHeight=O+"px",X.style.maxHeight=O+"px",X.style.overflow="hidden";const ae=e.querySelector("#mobile-action-bar"),he=e.querySelector("#mobile-play-area");ae&&he&&(he.style.paddingBottom=ae.offsetHeight+"px")}if(Ge(),setTimeout(Ge,120),setTimeout(Ge,400),j||(j=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ge),window.visualViewport.addEventListener("scroll",Ge)),window.addEventListener("resize",Ge)),function(){const O=e.querySelector(".terrain-wrapper svg");O&&(O.removeAttribute("width"),O.removeAttribute("height"),O.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",O.setAttribute("viewBox","-26 -26 352 352"),O.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(X=>{X.addEventListener("click",()=>{if(!k&&!S)return;const O=X.dataset.cardId,ae=X.dataset.role,he=($[ae]||[]).find(tt=>tt.cardId===O);if(!he||he.used)return;const $e=fe.includes(O);if(k&&!["MIL","ATT"].includes(ae)&&!$e)return;Array.isArray(g["selected_"+u])||(g["selected_"+u]=[]);const Qe=g["selected_"+u],Ze=Qe.findIndex(tt=>tt.cardId===O);Ze>-1?Qe.splice(Ze,1):Qe.length<3&&Qe.push({...he,_role:ae}),xe()})}),e.querySelectorAll(".match-used-hit").forEach(X=>{X.addEventListener("click",()=>H(X.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(X=>{X.addEventListener("click",()=>H())}),(We=e.querySelector("#pvp-sub-open"))==null||We.addEventListener("click",()=>H()),e.querySelectorAll(".pvp-gc-mini").forEach(X=>{X.addEventListener("click",()=>pe(X.dataset.gcId,X.dataset.gcType))}),(nt=e.querySelector("#pvp-boost-card"))==null||nt.addEventListener("click",()=>ce()),(ut=e.querySelector("#pvp-action"))==null||ut.addEventListener("click",X=>{k?X.currentTarget.dataset.pass==="1"||!Te(u)?me():ne():S&&ue()}),(ft=e.querySelector("#pvp-quit"))==null||ft.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&oe()}),(gt=e.querySelector("#pvp-view-opp"))==null||gt.addEventListener("click",()=>ge()),(le=e.querySelector("#pvp-toggle-history"))==null||le.addEventListener("click",()=>de()),C&&(clearInterval(C),C=null),(k||S)&&!I){let X=30,O=!1;const ae=()=>document.getElementById("pvp-timer"),he=()=>{ae()&&(ae().textContent=X+"s",ae().style.color=O?"#ff4444":"#fff")};he(),C=setInterval(()=>{X--,X<0?O?(clearInterval(C),C=null,k&&!Te(u)?me():oe()):(O=!0,X=15,he()):he()},1e3)}}function _e(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${g[h+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(g[h+"Team"],g[h+"Formation"],null,[],300,300)}</div>
    </div>`,u==="p1"&&setTimeout(async()=>{await K({phase:"midfield"})},5e3)}let we=!1;function ve(){if(we)return;const $=g[u+"Team"].MIL||[],f=g[h+"Team"].MIL||[];function y(G){return G.reduce((W,te)=>W+ze(te,"MIL"),0)}function b(G){let W=0;for(let te=0;te<G.length-1;te++){const ee=ot(G[te],G[te+1]);ee==="#00ff88"?W+=2:ee==="#FFD700"&&(W+=1)}return W}const v=y($)+b($),w=y(f)+b(f),k=v>=w;function S(G,W,te){return`<div id="duel-row-${te}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${W}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${G.map((ee,fe)=>{const ye=fe<G.length-1?ot(ee,G[fe+1]):null,be=!ye||ye==="#ff3333"||ye==="#cc2222",ke=ye==="#00ff88"?"+2":ye==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${te}" data-idx="${fe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...ee,note:ze(ee,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${fe<G.length-1?`<div class="duel-link duel-link-${te}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":ye};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${ye}`}">
              ${ke?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ye}">${ke}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${te}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${y(G)} + ${b(G)} liens = <b style="color:#fff">${y(G)+b(G)}</b>
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
      ${S($,g[u+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${S(f,g[h+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const E=(G,W)=>e.querySelectorAll(G).forEach((te,ee)=>{setTimeout(()=>{te.style.opacity="1",te.style.transform="translateY(0) scale(1)"},W+ee*90)});E(".duel-card-me",150),E(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((G,W)=>setTimeout(()=>{G.style.opacity="1"},W*70)),900),setTimeout(()=>{const G=e.querySelector("#pvp-vs");G&&(G.style.opacity="1",G.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(W=>W.style.opacity="1")},1250);function L(G,W,te){const ee=document.getElementById(G);if(!ee)return;const fe=performance.now(),ye=be=>{const ke=Math.min(1,(be-fe)/te);ee.textContent=Math.round(W*(1-Math.pow(1-ke,3))),ke<1?requestAnimationFrame(ye):ee.textContent=W};requestAnimationFrame(ye)}setTimeout(()=>{L("pvp-score-me",v,800),L("pvp-score-opp",w,800)},1500);const z=g.p1Team.MIL||[],M=g.p2Team.MIL||[],D=y(z)+b(z),Y=y(M)+b(M),J=D>=Y?"p1":"p2";let U=g.boostValue;U==null&&(U=oi(),g.boostValue=U,g.boostOwner=J,g.boostUsed=!1),we=!0,setTimeout(()=>{const G=e.querySelector("#duel-row-"+(k?"me":"opp")),W=e.querySelector("#duel-row-"+(k?"opp":"me")),te=document.getElementById("pvp-score-me"),ee=document.getElementById("pvp-score-opp"),fe=k?te:ee,ye=k?ee:te;fe&&(fe.style.fontSize="80px",fe.style.color=k?"#FFD700":"#ff6b6b",fe.style.animation="duelPulse .5s ease"+(k?",duelGlow 1.5s ease infinite .5s":"")),ye&&(ye.style.opacity="0.25"),setTimeout(()=>{G&&(G.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",G.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),W&&(W.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Fe;const be=document.getElementById("pvp-duel-finale");if(!be)return;const ke=g.boostOwner===u?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+U+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Be=u==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(k?"⚽ "+g[u+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+g[h+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ke+Be,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(Fe=document.getElementById("pvp-start-match"))==null||Fe.addEventListener("click",async()=>{const Me=J;await K({phase:Me+"-attack",attacker:Me,round:1,boostValue:U,boostUsed:!1,boostOwner:Me})})},600)},700)},2800)}function Ee($,f,y,b,v){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const k=Array.from({length:10},(z,M)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${M%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][M%8]}</div>`).join(""),S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};w.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${k}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${b?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${f} – ${y}
      </div>
      ${$!=null&&$.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${$.map(z=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${S[z.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${z.portrait?`<img src="${z.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(z.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(w);let E=!1;const L=()=>{E||(E=!0,w.remove(),setTimeout(()=>v(),50))};w.addEventListener("click",L),setTimeout(L,3500)}function se($,f,y){var U,G;const b=(g.gcDefs||[]).find(W=>{var te;return W.name===$||((te=W.name)==null?void 0:te.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",k=(b==null?void 0:b.name)||$,S=(b==null?void 0:b.effect)||((U=Oe[$])==null?void 0:U.desc)||"",E=b!=null&&b.image_url?`/icons/${b.image_url}`:null,L=((G=Oe[$])==null?void 0:G.icon)||"⚡",M=f===u?"Vous":g[f+"Name"]||"Adversaire",D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",D.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${w}66}50%{box-shadow:0 0 60px ${w}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${w};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${M} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${L}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${S}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(D);let Y=!1;const J=()=>{Y||(Y=!0,D.remove(),setTimeout(()=>y&&y(),50))};D.addEventListener("click",J),setTimeout(J,3e3)}function pe($,f){var D,Y,J,U;const b=(g["gcCardsFull_"+u]||[]).find(G=>G.id===$),v=b==null?void 0:b._gcDef,w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",k={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",S=(v==null?void 0:v.name)||f,E=(v==null?void 0:v.effect)||((D=Oe[f])==null?void 0:D.desc)||"Carte spéciale.",L=v!=null&&v.image_url?`/icons/${v.image_url}`:null,z=((Y=Oe[f])==null?void 0:Y.icon)||"⚡",M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",M.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${k}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${S.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${S}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${z}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(M),(J=M.querySelector("#pvp-gc-back"))==null||J.addEventListener("click",()=>M.remove()),(U=M.querySelector("#pvp-gc-use"))==null||U.addEventListener("click",()=>{M.remove(),R($,f)})}function ce(){var b;const $=g[u+"Team"],f=Object.entries($).flatMap(([v,w])=>(w||[]).filter(k=>!k.used).map(k=>({...k,_line:v})));if(!f.length)return;const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",y.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${g.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${f.map(v=>{const w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[v._line]||"#555",k=ze(v,v._line)+(v.boost||0);return`<div class="bp-item" data-cid="${v.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${w};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${k}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(y),(b=y.querySelector("#bp-close"))==null||b.addEventListener("click",()=>y.remove()),y.querySelectorAll(".bp-item").forEach(v=>{v.addEventListener("click",async()=>{const w=v.dataset.cid,k=f.find(E=>E.cardId===w);if(!k)return;const S=($[k._line]||[]).find(E=>E.cardId===w);S&&(S.boost=(S.boost||0)+g.boostValue),y.remove(),await K({[u+"Team"]:$,boostUsed:!0})})})}function H($=null){var Y,J;if(!(g.phase===u+"-attack")){x("Remplacement uniquement avant votre attaque","warning");return}const y=g[u+"Team"],b=g["usedSubIds_"+u]||[],v=g.maxSubs||3;if(b.length>=v){x(`Maximum ${v} remplacements atteint`,"warning");return}const w=Object.entries(y).flatMap(([U,G])=>(G||[]).filter(W=>W.used).map(W=>({...W,_line:U}))),k=(g[u+"Subs"]||[]).filter(U=>!b.includes(U.cardId));if(!w.length){x("Aucun joueur utilisé à remplacer","warning");return}if(!k.length){x("Aucun remplaçant disponible","warning");return}let S=Math.max(0,w.findIndex(U=>U.cardId===$));const E=((Y=w[S])==null?void 0:Y._line)||((J=w[S])==null?void 0:J.job);let L=Math.max(0,k.findIndex(U=>U.job===E)),z=!1;const M=document.createElement("div");M.id="pvp-sub-overlay",M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function D(){var ye,be,ke,Be,Fe,Me;const U=w[S],G=k[L],W=Math.min(130,Math.round((window.innerWidth-90)/2)),te=Math.round(W*1.35),ee=je=>`background:rgba(255,255,255,0.12);border:none;color:${je?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${je?"default":"pointer"};flex-shrink:0`;M.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${b.length}/${v})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ee(L===0)}" ${L===0?"disabled":""}>▲</button>
          <div>${G?Xe({...G,used:!1,boost:0},W,te):"<div>—</div>"}</div>
          <button id="pin-down" style="${ee(L>=k.length-1)}" ${L>=k.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${L+1}/${k.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ee(S===0)}" ${S===0?"disabled":""}>▲</button>
          <div>${U?Xe({...U,used:!1,boost:0},W,te):"<div>—</div>"}</div>
          <button id="pout-down" style="${ee(S>=w.length-1)}" ${S>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${S+1}/${w.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ye=M.querySelector("#psub-close"))==null||ye.addEventListener("click",()=>M.remove()),(be=M.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{S>0&&(S--,D())}),(ke=M.querySelector("#pout-down"))==null||ke.addEventListener("click",()=>{S<w.length-1&&(S++,D())}),(Be=M.querySelector("#pin-up"))==null||Be.addEventListener("click",()=>{L>0&&(L--,D())}),(Fe=M.querySelector("#pin-down"))==null||Fe.addEventListener("click",()=>{L<k.length-1&&(L++,D())});const fe=(je,Ae,Ne,Ue)=>{const Ye=M.querySelector("#"+je);if(!Ye)return;let Ke=0;Ye.addEventListener("touchstart",Re=>{Ke=Re.touches[0].clientY},{passive:!0}),Ye.addEventListener("touchend",Re=>{const Ge=Re.changedTouches[0].clientY-Ke;if(Math.abs(Ge)<30)return;const We=Ae();Ge<0&&We<Ue-1?(Ne(We+1),D()):Ge>0&&We>0&&(Ne(We-1),D())},{passive:!0})};fe("pin-panel",()=>L,je=>L=je,k.length),fe("pout-panel",()=>S,je=>S=je,w.length),(Me=M.querySelector("#psub-confirm"))==null||Me.addEventListener("click",async je=>{if(je.preventDefault(),je.stopPropagation(),z)return;z=!0;const Ae=w[S],Ne=k[L];if(!Ae||!Ne)return;const Ue=Ae._line,Ye=(y[Ue]||[]).findIndex(Ge=>Ge.cardId===Ae.cardId);if(Ye===-1){x("Erreur : joueur introuvable","error"),M.remove();return}const Ke={...Ne,_line:Ue,position:Ae.position,used:!1,boost:0};y[Ue].splice(Ye,1,Ke);const Re=[...b,Ne.cardId];M.remove(),Z(Ae,Ne,async()=>{await K({[u+"Team"]:y,[h+"Team"]:g[h+"Team"],["usedSubIds_"+u]:Re})})})}document.body.appendChild(M),D()}function Z($,f,y){const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const w=(E,L,z)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${L};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${z}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${b[E.job]||"#555"};border:3px solid ${L};position:relative;overflow:hidden;margin:0 auto">
        ${He(E)?`<img src="${He(E)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(E.name||"").slice(0,12)}</div>
    </div>`;v.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${w(f,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${w($,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(v);let k=!1;const S=()=>{k||(k=!0,v.remove(),setTimeout(()=>y(),50))};v.addEventListener("click",S),setTimeout(S,2200)}function ge(){var f;const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",$.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${g[h+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(g[h+"Team"],g[h+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild($),(f=$.querySelector("#pvp-opp-close"))==null||f.addEventListener("click",()=>$.remove())}function de(){var y;const $=g.log||[],f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",f.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${$.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...$].reverse().map(b=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${b.type==="goal"?"#FFD700":b.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${b.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(f),(y=f.querySelector("#pvp-hist-close"))==null||y.addEventListener("click",()=>f.remove())}async function me(){if(g.phase!==u+"-attack")return;const $=u==="p1"?"p2":"p1",f=(g.round||0)+1,y=[...g.log||[]];y.push({type:"info",text:`⏭️ ${g[u+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const b=qe(g),v=Te($),w=b||!v?"finished":$+"-attack";await K({["selected_"+u]:[],modifiers:{...g.modifiers,[u]:{}},pendingAttack:null,phase:w,attacker:$,round:f,log:y}),w==="finished"&&await Se(g)}async function ne(){const $=g[u+"Team"],f=!["GK","DEF","MIL","ATT"].some(w=>(g[h+"Team"][w]||[]).some(k=>!k.used)),y=(g["selected_"+u]||[]).map(w=>{const k=($[w._role]||[]).find(D=>D.cardId===w.cardId)||w,S=f&&["GK","DEF"].includes(w._role),E=$[w._role]||[],L=E.findIndex(D=>D.cardId===w.cardId),z=dt(E.length),M=L>=0?z[L]:k._col??1;return{...k,_line:w._role,_col:M,...S?{note_a:Math.max(1,Number(k.note_a)||0)}:{}}});if(!y.length)return;const b=Ut(y,g.modifiers[u]||{});P(u,y.map(w=>w.cardId)),y.forEach(w=>{const k=($[w._role]||[]).find(S=>S.cardId===w.cardId);k&&(k.used=!0)}),g["selected_"+u]=[],xe();const v=[...g.log||[]];if(f){const w=(g[u+"Score"]||0)+1,k=y.map(M=>({name:M.name,note:ze(M,M._line||"ATT"),portrait:He(M),job:M.job}));v.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:k,homeTotal:b.total,aiTotal:0});const S=(g.round||0)+1,E=u==="p1"?"p2":"p1",L={...g,[u+"Team"]:$,[u+"Score"]:w},z=qe(L);F.add(S),Ee(k,w,g[h+"Score"]||0,!0,async()=>{await K({[u+"Team"]:$,[u+"Score"]:w,["selected_"+u]:[],modifiers:{...g.modifiers,[u]:{}},pendingAttack:null,phase:z?"finished":E+"-attack",attacker:E,round:S,log:v}),z&&await Se({...g,[u+"Score"]:w})});return}v.push({type:"pending",text:`⚔️ ${g[u+"Name"]} attaque (${b.total})`}),await K({[u+"Team"]:$,[h+"Team"]:g[h+"Team"],pendingAttack:{...b,players:y,side:u},["selected_"+u]:[],modifiers:{...g.modifiers,[u]:{}},phase:h+"-defense",log:v})}async function ue(){const $=g[u+"Team"],f=(g["selected_"+u]||[]).map(U=>{const G=($[U._role]||[]).find(ye=>ye.cardId===U.cardId)||U,W=$[U._role]||[],te=W.findIndex(ye=>ye.cardId===U.cardId),ee=dt(W.length),fe=te>=0?ee[te]:G._col??1;return{...G,_line:U._role,_col:fe}}),y=Kt(f,g.modifiers[u]||{});P(u,f.map(U=>U.cardId)),f.forEach(U=>{const G=($[U._role]||[]).find(W=>W.cardId===U.cardId);G&&(G.used=!0)}),g["selected_"+u]=[],xe();const b=Vt(g.pendingAttack.total,y.total,g.modifiers[u]||{}),v=g.pendingAttack.side,w=b==="attack"||(b==null?void 0:b.goal),k=v==="p1"?"p2":"p1",S=(g.round||0)+1,E=(g.pendingAttack.players||[]).map(U=>({name:U.name,note:ze(U,U._line||"ATT"),portrait:He(U),job:U.job})),L=[...g.log||[]];L.push({type:"duel",isGoal:w,homeScored:w&&v===u,text:w?`⚽ BUT de ${g[v+"Name"]} ! (${g.pendingAttack.total} vs ${y.total})`:`✋ Attaque stoppée (${g.pendingAttack.total} vs ${y.total})`,homePlayers:E,aiPlayers:f.map(U=>({name:U.name,note:ze(U,U._line||"DEF"),portrait:He(U),job:U.job})),homeTotal:g.pendingAttack.total,aiTotal:y.total});const z=w?(g[v+"Score"]||0)+1:g[v+"Score"]||0,M={...g,[u+"Team"]:$,[v+"Score"]:z},D=qe(M),Y=D?"finished":k+"-attack",J=async()=>{await K({[u+"Team"]:$,[h+"Team"]:g[h+"Team"],[v+"Score"]:z,["selected_"+u]:[],modifiers:{...g.modifiers,[u]:{}},pendingAttack:null,phase:Y,attacker:k,round:S,log:L}),(Y==="finished"||D)&&await Se({...g,[v+"Score"]:z})};if(w){const U=v===u,G=U?z:g[u+"Score"]||0,W=U?g[h+"Score"]||0:z;F.add(S),Ee(E,G,W,U,J)}else await J()}function Le($){return["MIL","ATT"].some(f=>($[f]||[]).some(y=>!y.used))}function Ie($){return["GK","DEF","MIL","ATT"].some(f=>($[f]||[]).some(y=>!y.used))}function Ce($){return Ie($)&&!Le($)}function Te($){const f=g[$+"Team"],y=g[($==="p1"?"p2":"p1")+"Team"];return!!(Le(f)||!Ie(y)&&Ce(f))}function qe($){const f=["MIL","ATT"].some(L=>($.p1Team[L]||[]).some(z=>!z.used)),y=["MIL","ATT"].some(L=>($.p2Team[L]||[]).some(z=>!z.used)),b=Ie($.p1Team),v=Ie($.p2Team);return!f&&!(!v&&b)&&(!y&&!(!b&&v))}function Pe($){const f=$.p1Score||0,y=$.p2Score||0;return f===y?null:f>y?c.home_id:c.away_id}async function Se($){try{const f=Pe($),y=f?c.home_id===f?c.away_id:c.home_id:null;await T.from("matches").update({status:"finished",winner_id:f,home_score:$.p1Score||0,away_score:$.p2Score||0}).eq("id",i),f&&y&&updateEvolutiveCards(f,y).catch(()=>{})}catch(f){console.error("[PvP] finishMatch:",f)}}function B(){var v;const $=g[u+"Score"],f=g[h+"Score"],y=$>f,b=$===f;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${y?"🏆":b?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${y?"Victoire !":b?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${$} - ${f}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(v=document.getElementById("pvp-home"))==null||v.addEventListener("click",()=>{try{T.removeChannel(V)}catch{}Ve(e),n("home")})}xe()}const Uo=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:hi,resumePvpMatch:Ho},Symbol.toStringTag,{value:"Module"}));async function Ko(e,t,i,o){var d,a;try{const r=(a=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:a.id;try{(T.getChannels?T.getChannels():[]).forEach(p=>{const s=p.topic||"";(s.includes("matchmaking")||s.includes("pvp-match"))&&T.removeChannel(p)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}r&&(await T.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await ai(e,t,"random",({deckId:r,formation:l,starters:p,subsRaw:s,gcCardsEnriched:n,gcDefs:x,stadiumDef:u})=>{const h=_=>Vo(e,t,r,l,p,s,_,x||[],i,o);if(!n.length){h([]);return}ri(e,n,h)})}async function Vo(e,t,i,o,d,a,r=[],l=[],p,s){var V;const{state:n,navigate:x,toast:u}=t,h=n.profile.id;let _=!1,m=null;et(e);try{await T.rpc("cancel_matchmaking",{p_user_id:h})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",h)}catch{}const c=(K,oe,ie,Q)=>{var R;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">⚽ Match ami</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">vs ${s}</div>
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
            <div style="width:52px;height:52px;border-radius:50%;background:${oe?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${oe?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${oe?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${s}</div>
            <div style="font-size:11px;color:${oe?"#22c55e":"#aaa"}">${oe?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!oe&&K?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(R=document.getElementById("lobby-cancel"))==null||R.addEventListener("click",async()=>{_=!0,m&&(T.removeChannel(m),m=null),ie&&await T.from("friend_match_invites").update({status:"declined"}).eq("id",ie),Ve(e),x("home")})},A=async(K,oe)=>{_=!0,m&&(T.removeChannel(m),m=null),await new Promise(ie=>setTimeout(ie,600)),e.isConnected&&Yo(e,t,K,oe,r,l)},{data:g}=await T.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${h},invitee_id.eq.${p}),and(inviter_id.eq.${p},invitee_id.eq.${h})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let I,C;if(g&&g.inviter_id===p)C=!1,I=g.id,await T.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",I);else{C=!0;const{data:K,error:oe}=await T.from("friend_match_invites").insert({inviter_id:h,invitee_id:p,friend_id:p,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(oe||!K){u("Erreur création invitation","error"),Ve(e),x("home");return}I=K.id}if(c(!0,!C,I),!C){const K={home_id:p,away_id:h,home_deck_id:g.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},oe=await T.from("matches").insert(K).select().single(),ie=oe.data;if(!ie){u("Erreur création match: "+(((V=oe.error)==null?void 0:V.message)||""),"error"),Ve(e),x("home");return}await T.from("friend_match_invites").update({match_id:ie.id,status:"matched"}).eq("id",I),A(ie.id,!1);return}let j=!1;const F=K=>{_||j||(K.status==="matched"&&K.match_id?(j=!0,clearInterval(q),clearInterval(N),A(K.match_id,!0)):K.status==="declined"?(clearInterval(q),clearInterval(N),u(`${s} a décliné l'invitation`,"warning"),Ve(e),x("home")):K.invitee_ready&&c(!0,!0,I))},q=setInterval(()=>{if(_){clearInterval(q);return}T.from("matchmaking_queue").delete().eq("user_id",h).then(()=>{},()=>{})},3e3),N=setInterval(async()=>{if(_||j){clearInterval(N);return}const{data:K}=await T.from("friend_match_invites").select("*").eq("id",I).maybeSingle();K&&F(K)},1200);m=T.channel("friend-invite-"+I).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${I}`},K=>F(K.new)).subscribe()}async function Yo(e,t,i,o,d=[],a=[]){const{state:r,navigate:l,toast:p}=t,s=o?"p1":"p2",n=o?"p2":"p1",x=(d||[]).map(B=>B.id),u=(d||[]).map(B=>({id:B.id,gc_type:B.gc_type,_gcDef:B._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await T.from("matches").select("*").eq("id",i).single();if(!h){p("Match introuvable","error"),l("home");return}async function _(){const[{data:B},{data:$},{data:f},{data:y}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]),b=E=>{const L=Number(E.evolution_bonus)||0;return{cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_encoded,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:(Number(E.note_g)||0)+(E.job==="GK"||E.job2==="GK"&&Number(E.note_g)>0?L:0),note_d:(Number(E.note_d)||0)+(E.job==="DEF"||E.job2==="DEF"&&Number(E.note_d)>0?L:0),note_m:(Number(E.note_m)||0)+(E.job==="MIL"||E.job2==="MIL"&&Number(E.note_m)>0?L:0),note_a:(Number(E.note_a)||0)+(E.job==="ATT"||E.job2==="ATT"&&Number(E.note_a)>0?L:0),evolution_bonus:L,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},v=((B==null?void 0:B.starters)||[]).map(E=>b(E)),w=(($==null?void 0:$.starters)||[]).map(E=>b(E)),k=(B==null?void 0:B.formation)||"4-4-2",S=($==null?void 0:$.formation)||"4-4-2";return{p1Team:(()=>{const E=vt(v,k);return stadiumDef?Tt(E,stadiumDef):E})(),p2Team:vt(w,S),p1Subs:(()=>{const E=((B==null?void 0:B.subs)||[]).map(L=>b(L));return stadiumDef&&jt(E,stadiumDef),E})(),p2Subs:(($==null?void 0:$.subs)||[]).map(E=>b(E)),p1Formation:k,p2Formation:S,p1Name:(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"Joueur 1",p2Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?x:[],gc_p2:o?[]:x,gcCardsFull_p1:o?u:[],gcCardsFull_p2:o?[]:u,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:a||[],lastActionAt:new Date().toISOString()}}let m=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(!m)if(o){m=await _();const{data:B}=await T.from("matches").select("game_state").eq("id",i).single();!(B!=null&&B.game_state)||!Object.keys(B.game_state).length?await T.from("matches").update({game_state:m,turn_user_id:h.home_id}).eq("id",i):m=B.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let B=0;B<60&&!m;B++){await new Promise(f=>setTimeout(f,400));const{data:$}=await T.from("matches").select("game_state").eq("id",i).single();$!=null&&$.game_state&&Object.keys($.game_state).length&&(m=$.game_state)}if(!m){p("Erreur de synchronisation","error"),l("home");return}m.gc_p2=x,m.gcCardsFull_p2=u,await T.from("matches").update({game_state:m}).eq("id",i)}let c=!1,A=!1,g=!1,I=null,C=!1;const j=new Set,F=new Set;function q(B){var E,L;try{T.removeChannel(N)}catch{}const $=m[s+"Score"]||0,f=m[n+"Score"]||0;if(!g){g=!0;const z=B.winner_id||($>f?r.profile.id:f>$?"opp":null),M=z===r.profile.id?"win":z?"loss":null;M&&ni(()=>Promise.resolve().then(()=>nn),void 0).then(D=>D.applyOwnEvolution(r.profile.id,M)).catch(()=>{})}if(!A){const z=m.p1Score||0,M=m.p2Score||0,D=(m.usedGc_p1||[]).length,Y=(m.usedGc_p2||[]).length,J=B.winner_id||(z>M?h.home_id:M>z?h.away_id:null);(J?r.profile.id===J:r.profile.id<(o?h.away_id:h.home_id))&&(A=!0,Wi({player1Id:h.home_id,player2Id:h.away_id,score1:z,score2:M,gc1:D,gc2:Y}).catch(G=>console.warn("[FriendMatch] updateStats:",G)))}let y,b;B.winner_id?(y=B.winner_id===r.profile.id,b=!1):B.forfeit?(y=$>f,b=!1):(b=$===f,y=$>f),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const v=document.createElement("div");v.id="pvp-end-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=b?"🤝":y?"🏆":"😞",k=b?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",S=b?"#fff":y?"#FFD700":"#ff6b6b";v.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${S}">${k}</div>
      <div style="font-size:18px">${m[s+"Name"]} ${$} – ${f} ${m[n+"Name"]}</div>
      ${B.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(v),(L=v.querySelector("#pvp-end-home"))==null||L.addEventListener("click",()=>{v.remove(),Ve(e),l("home")})}const N=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},B=>{const $=B.new;try{if($.status==="finished"||$.forfeit){if(c)return;c=!0,I&&(clearInterval(I),I=null),$.game_state&&(m=$.game_state),q($);return}if($.game_state){const f=m;m=$.game_state;const y=m._lastGC;if(y&&y.seq&&!F.has(y.seq)&&(F.add(y.seq),y.by!==s)){Ee(y.type,y.by,()=>re());return}const b=f[s+"Score"]||0,v=f[n+"Score"]||0,w=m[s+"Score"]||0,k=m[n+"Score"]||0,S=w>b,E=k>v;if((S||E)&&!j.has(m.round)){j.add(m.round);const L=[...m.log||[]].reverse().find(M=>M.isGoal),z=((L==null?void 0:L.homePlayers)||[]).map(M=>({name:M.name,note:M.note,portrait:M.portrait,job:M.job}));ve(z,w,k,S,()=>re());return}re()}}catch(f){console.error("[PvP] crash:",f)}}).subscribe();async function V(B){Object.assign(m,B),m.lastActionAt=new Date().toISOString();const{error:$}=await T.from("matches").update({game_state:m}).eq("id",i);$&&p("Erreur de synchronisation","error");try{re()}catch(f){console.error("[PvP] renderPvpScreen crash:",f)}}async function K(){if(c)return;c=!0,I&&(clearInterval(I),I=null);const B=o?h.away_id:h.home_id,$=o?"p2":"p1",f=o?"p1":"p2",y={...m,[$+"Score"]:3,[f+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:B,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{T.removeChannel(N)}catch{}setTimeout(()=>{Ve(e),l("home")},800)}const oe={BOOST_STAT:({value:B=1,count:$=1,roles:f=[]},y,b)=>{const v=y[s+"Team"],w=Object.entries(v).filter(([k])=>!f.length||f.includes(k)).flatMap(([k,S])=>S.filter(E=>!E.used).map(E=>({...E,_line:k})));if(!w.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(y);return}ie(w,$,`Choisir ${$} joueur(s) à booster (+${B})`,k=>{k.forEach(S=>{const E=(v[S._line]||[]).find(L=>L.cardId===S.cardId);E&&(E.boost=(E.boost||0)+B,y.log.push({text:`⚡ +${B} sur ${E.name}`,type:"info"}))}),y[s+"Team"]=v,b(y)})},DEBUFF_STAT:({value:B=1,count:$=1,roles:f=[],target:y="ai"},b,v)=>{const w=y==="home"?s:n,k=b[w+"Team"],S=y==="home"?"allié":"adverse",E=Object.entries(k).filter(([L])=>!f.length||f.includes(L)).flatMap(([L,z])=>z.map(M=>({...M,_line:L})));if(!E.length){b.log.push({text:`🎯 Aucun joueur ${S}`,type:"info"}),v(b);return}ie(E,$,`Choisir ${$} joueur(s) ${S}(s) (-${B})`,L=>{L.forEach(z=>{const M=(k[z._line]||[]).find(D=>D.cardId===z.cardId);M&&(M.boost=(M.boost||0)-B,b.log.push({text:`🎯 -${B} sur ${M.name}`,type:"info"}))}),b[w+"Team"]=k,v(b)})},GRAY_PLAYER:({count:B=1,roles:$=[],target:f="ai"},y,b)=>{const v=f==="home"?s:n,w=y[v+"Team"],k=f==="home"?"allié":"adverse",S=Object.entries(w).filter(([E])=>!$.length||$.includes(E)).flatMap(([E,L])=>L.filter(z=>!z.used).map(z=>({...z,_line:E})));if(!S.length){y.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),b(y);return}ie(S,B,`Choisir ${B} joueur(s) ${k}(s) à exclure`,E=>{const L="usedCardIds_"+v,z=new Set(y[L]||[]);E.forEach(M=>{const D=(w[M._line]||[]).find(Y=>Y.cardId===M.cardId);D&&(D.used=!0,z.add(M.cardId),y.log.push({text:`❌ ${D.name} exclu !`,type:"info"}))}),y[L]=[...z],y[v+"Team"]=w,b(y)})},REVIVE_PLAYER:({count:B=1,roles:$=[]},f,y)=>{const b=f[s+"Team"],v=Object.entries(b).filter(([w])=>!$.length||$.includes(w)).flatMap(([w,k])=>k.filter(S=>S.used).map(S=>({...S,_line:w})));if(!v.length){f.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(f);return}ie(v,B,`Choisir ${B} joueur(s) à ressusciter`,w=>{w.forEach(k=>{const S=(b[k._line]||[]).find(E=>E.cardId===k.cardId);S&&(S.used=!1,f.log.push({text:`💫 ${S.name} ressuscité !`,type:"info"}))}),f[s+"Team"]=b,y(f)})},REMOVE_GOAL:({},B,$)=>{const f=n+"Score";B[f]>0?(B[f]--,B.log.push({text:"🚫 Dernier but annulé !",type:"info"})):B.log.push({text:"🚫 Aucun but à annuler",type:"info"}),$(B)},ADD_GOAL_DRAW:({},B,$)=>{B[s+"Score"]===B[n+"Score"]?(B[s+"Score"]++,B.log.push({text:"🎯 But bonus !",type:"info"})):B.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),$(B)},ADD_SUB:({value:B=1},$,f)=>{$.maxSubs=($.maxSubs||3)+B,$.log.push({text:`🔄 +${B} remplacement(s)`,type:"info"}),f($)},CUSTOM:({},B,$)=>$(B)};function ie(B,$,f,y){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let v=[];function w(){var S,E;const k=B.map(L=>{const z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",M=ze(L,L._line)+(L.boost||0),Y=v.find(U=>U.cardId===L.cardId)?"#FFD700":"rgba(255,255,255,0.25)",J=L.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Y};background:${z};overflow:hidden;cursor:pointer;${J}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${M}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${L._line}</div>
        </div>`}).join("");b.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${f}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v.length}/${$}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${k}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${v.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${v.length}/${$})
          </button>
        </div>`,(S=b.querySelector("#pp-close"))==null||S.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(L=>{L.addEventListener("click",()=>{const z=L.dataset.cid,M=B.find(Y=>Y.cardId===z),D=v.findIndex(Y=>Y.cardId===z);M&&(D>-1?v.splice(D,1):v.length<$&&v.push(M),w())})}),(E=b.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{b.remove(),y(v)})}w(),document.body.appendChild(b)}async function Q(B,$){const y=(m["gcCardsFull_"+s]||[]).find(k=>k.id===B),b=(y==null?void 0:y._gcDef)||(m.gcDefs||[]).find(k=>{var S;return k.name===$||((S=k.name)==null?void 0:S.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),v=[...m["usedGc_"+s]||[],B],w={type:$,by:s,seq:(m._gcAnimSeq||0)+1};F.add(w.seq),Ee($,s,async()=>{if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const S=oe[b.effect_type];if(S){const E={...m};S(b.effect_params||{},E,async L=>{L["usedGc_"+s]=v,L._lastGC=w,L._gcAnimSeq=w.seq,await V(L)});return}}const k={...m};switch($){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const S=n+"Score";k[S]>0&&(k[S]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+s]=v,k._lastGC=w,k._gcAnimSeq=w.seq,await V(k)})}function R(B,$){const f="usedCardIds_"+B,y=new Set(m[f]||[]);$.forEach(b=>y.add(b)),m[f]=[...y]}function P(){for(const B of["p1","p2"]){const $=new Set(m["usedCardIds_"+B]||[]),f=m[B+"Team"];if(f)for(const y of["GK","DEF","MIL","ATT"])(f[y]||[]).forEach(b=>{b.used=$.has(b.cardId)})}}function re(){var Ge,We,nt,ut,ft,gt;if(m.phase==="reveal")return xe();if(m.phase==="midfield")return we();if(m.phase==="finished")return Se();const B=m[s+"Team"],$=m[n+"Team"];P();const f=m[s+"Score"],y=m[n+"Score"],b=m[s+"Name"],v=m[n+"Name"],w=m.phase===s+"-attack",k=m.phase===s+"-defense",S=Array.isArray(m["selected_"+s])?m["selected_"+s]:[],E=S.map(le=>le.cardId),L=window.innerWidth>=700,z=m[s+"Subs"]||[],M=m["usedSubIds_"+s]||[],D=z.filter(le=>!M.includes(le.cardId)),Y=m["gcCardsFull_"+s]||[],J=m["usedGc_"+s]||[],U=Y.filter(le=>!J.includes(le.id)),G=m.boostOwner===s&&!m.boostUsed,W=!["GK","DEF","MIL","ATT"].some(le=>($[le]||[]).some(X=>!X.used)),te=[...B.MIL||[],...B.ATT||[]].filter(le=>!le.used),ee=w&&W&&te.length===0?[...B.GK||[],...B.DEF||[]].filter(le=>!le.used).map(le=>le.cardId):[];function fe(le,X,O){var xt,kt;const ae=le._gcDef,he={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ae==null?void 0:ae.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$e={purple:"#b06ce0",light_blue:"#00d4ef"}[ae==null?void 0:ae.color]||"#b06ce0",Qe=(ae==null?void 0:ae.name)||le.gc_type,Ze=(ae==null?void 0:ae.effect)||((xt=Oe[le.gc_type])==null?void 0:xt.desc)||"",tt=ae!=null&&ae.image_url?`/icons/${ae.image_url}`:null,rt=((kt=Oe[le.gc_type])==null?void 0:kt.icon)||"⚡",_t=Math.round(O*.22),$t=Math.round(O*.22),lt=O-_t-$t,mt=Qe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${le.id}" data-gc-type="${le.gc_type}"
        style="box-sizing:border-box;width:${X}px;height:${O}px;border-radius:10px;border:2px solid ${$e};background:${he};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${_t}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${mt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${X-6}px">${Qe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${tt?`<img src="${tt}" style="max-width:${X-10}px;max-height:${lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(lt*.55)}px">${rt}</span>`}
        </div>
        <div style="height:${$t}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ze.slice(0,38)}</span>
        </div>
      </div>`}function ye(le,X){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${le}px;height:${X}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(X*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(X*.2)}px">⚡</div>
        <div style="font-size:${Math.round(X*.09)}px;color:#000;font-weight:900">+${m.boostValue}</div>
      </div>`}const be=(le,X)=>X?ye(130,175):fe(le,130,175),ke=(le,X)=>X?ye(68,95):fe(le,68,95),Be=L?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Fe=w?Ce(s)?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${S.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${S.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${v}</div>`,Me=w&&!Ce(s)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${S.length}/3 sélectionné(s)</div>`:"",je=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${L?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${D.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':D.map(le=>`<div class="pvp-sub-btn" data-sub-id="${le.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(le,L?76:44,L?100:58)}</div>`).join("")}
    </div>`,Ae=w?"attack":k?"defense":"idle",Ne=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(B,m[s+"Formation"],Ae,E,300,300,ee)}
      </div>
    </div>`;function Ue(le){if(le.type==="duel"&&(le.homeTotal!=null||le.aiTotal!=null)){const X=(le.homeTotal||0)>=(le.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(le.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(le.homePlayers||[]).map(O=>at(O)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${X?20:14}px;font-weight:900;color:${X?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${le.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${X?14:20}px;font-weight:900;color:${X?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${le.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(le.aiPlayers||[]).map(O=>at(O)).join("")}
            </div>
          </div>
          ${le.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${le.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${le.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${le.type==="goal"?700:400};padding:3px 2px">${le.text||""}</div>`}const Ye=(()=>{var X,O;if(k&&((X=m.pendingAttack)!=null&&X.players)){const ae=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${v} ATTAQUE — Défendez !</div>
          ${it((ae.players||[]).map(he=>({...he,used:!1})),"#ff6b6b",ae.total)}
        </div>`}if(w&&((O=m.pendingAttack)!=null&&O.players)){const ae=m.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ae.players||[]).map(he=>({...he,used:!1})),"#00ff88",ae.total)}
        </div>`}const le=(m.log||[]).slice(-1)[0];return le?'<div style="padding:2px 4px">'+Ue(le)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${f} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${v}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ye}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(m.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",L?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${je}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ne}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Fe}${Me}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${U.map(le=>be(le,!1)).join("")}
            ${G?be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(B,m[s+"Formation"],Ae,E,300,300,ee)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${U.map(le=>ke(le,!1)).join("")}
            ${G?ke(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&D.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&D.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&D.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&D.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${D.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(m["usedSubIds_"+s]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(m["usedSubIds_"+s]||[]).length}/${m.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Fe}${Me}</div>
        </div>
      </div>`;function Re(){const le=e.querySelector(".match-screen");if(!le)return;const X=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);le.style.height=X+"px",le.style.minHeight=X+"px",le.style.maxHeight=X+"px",le.style.overflow="hidden";const O=e.querySelector("#mobile-action-bar"),ae=e.querySelector("#mobile-play-area");O&&ae&&(ae.style.paddingBottom=O.offsetHeight+"px")}if(Re(),setTimeout(Re,120),setTimeout(Re,400),C||(C=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Re),window.visualViewport.addEventListener("scroll",Re)),window.addEventListener("resize",Re)),function(){const X=e.querySelector(".terrain-wrapper svg");X&&(X.removeAttribute("width"),X.removeAttribute("height"),X.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",X.setAttribute("viewBox","-26 -26 352 352"),X.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(le=>{le.addEventListener("click",()=>{if(!w&&!k)return;const X=le.dataset.cardId,O=le.dataset.role,ae=(B[O]||[]).find(Ze=>Ze.cardId===X);if(!ae||ae.used)return;const he=ee.includes(X);if(w&&!["MIL","ATT"].includes(O)&&!he)return;Array.isArray(m["selected_"+s])||(m["selected_"+s]=[]);const $e=m["selected_"+s],Qe=$e.findIndex(Ze=>Ze.cardId===X);Qe>-1?$e.splice(Qe,1):$e.length<3&&$e.push({...ae,_role:O}),re()})}),e.querySelectorAll(".match-used-hit").forEach(le=>{le.addEventListener("click",()=>ce(le.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(le=>{le.addEventListener("click",()=>ce())}),(Ge=e.querySelector("#pvp-sub-open"))==null||Ge.addEventListener("click",()=>ce()),e.querySelectorAll(".pvp-gc-mini").forEach(le=>{le.addEventListener("click",()=>se(le.dataset.gcId,le.dataset.gcType))}),(We=e.querySelector("#pvp-boost-card"))==null||We.addEventListener("click",()=>pe()),(nt=e.querySelector("#pvp-action"))==null||nt.addEventListener("click",le=>{w?le.currentTarget.dataset.pass==="1"||!Ce(s)?de():me():k&&ne()}),(ut=e.querySelector("#pvp-quit"))==null||ut.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&K()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>Z()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>ge()),I&&(clearInterval(I),I=null),(w||k)&&!c){let le=30,X=!1;const O=()=>document.getElementById("pvp-timer"),ae=()=>{O()&&(O().textContent=le+"s",O().style.color=X?"#ff4444":"#fff")};ae(),I=setInterval(()=>{le--,le<0?X?(clearInterval(I),I=null,w&&!Ce(s)?de():K()):(X=!0,le=15,ae()):ae()},1e3)}}function xe(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${m[n+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(m[n+"Team"],m[n+"Formation"],null,[],300,300)}</div>
    </div>`,s==="p1"&&setTimeout(async()=>{await V({phase:"midfield"})},5e3)}let _e=!1;function we(){if(_e)return;const B=m[s+"Team"].MIL||[],$=m[n+"Team"].MIL||[];function f(U){return U.reduce((G,W)=>G+ze(W,"MIL"),0)}function y(U){let G=0;for(let W=0;W<U.length-1;W++){const te=ot(U[W],U[W+1]);te==="#00ff88"?G+=2:te==="#FFD700"&&(G+=1)}return G}const b=f(B)+y(B),v=f($)+y($),w=b>=v;function k(U,G,W){return`<div id="duel-row-${W}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${G}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${U.map((te,ee)=>{const fe=ee<U.length-1?ot(te,U[ee+1]):null,ye=!fe||fe==="#ff3333"||fe==="#cc2222",be=fe==="#00ff88"?"+2":fe==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${W}" data-idx="${ee}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...te,note:ze(te,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ee<U.length-1?`<div class="duel-link duel-link-${W}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":fe};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${fe}`}">
              ${be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${fe}">${be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${W}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${f(U)} + ${y(U)} liens = <b style="color:#fff">${f(U)+y(U)}</b>
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
      ${k(B,m[s+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k($,m[n+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const S=(U,G)=>e.querySelectorAll(U).forEach((W,te)=>{setTimeout(()=>{W.style.opacity="1",W.style.transform="translateY(0) scale(1)"},G+te*90)});S(".duel-card-me",150),S(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((U,G)=>setTimeout(()=>{U.style.opacity="1"},G*70)),900),setTimeout(()=>{const U=e.querySelector("#pvp-vs");U&&(U.style.opacity="1",U.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(G=>G.style.opacity="1")},1250);function E(U,G,W){const te=document.getElementById(U);if(!te)return;const ee=performance.now(),fe=ye=>{const be=Math.min(1,(ye-ee)/W);te.textContent=Math.round(G*(1-Math.pow(1-be,3))),be<1?requestAnimationFrame(fe):te.textContent=G};requestAnimationFrame(fe)}setTimeout(()=>{E("pvp-score-me",b,800),E("pvp-score-opp",v,800)},1500);const L=m.p1Team.MIL||[],z=m.p2Team.MIL||[],M=f(L)+y(L),D=f(z)+y(z),Y=M>=D?"p1":"p2";let J=m.boostValue;J==null&&(J=oi(),m.boostValue=J,m.boostOwner=Y,m.boostUsed=!1),_e=!0,setTimeout(()=>{const U=e.querySelector("#duel-row-"+(w?"me":"opp")),G=e.querySelector("#duel-row-"+(w?"opp":"me")),W=document.getElementById("pvp-score-me"),te=document.getElementById("pvp-score-opp"),ee=w?W:te,fe=w?te:W;ee&&(ee.style.fontSize="80px",ee.style.color=w?"#FFD700":"#ff6b6b",ee.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),fe&&(fe.style.opacity="0.25"),setTimeout(()=>{U&&(U.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",U.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),G&&(G.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Be;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const be=m.boostOwner===s?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+J+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",ke=s==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+m[s+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+m[n+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+be+ke,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Be=document.getElementById("pvp-start-match"))==null||Be.addEventListener("click",async()=>{const Fe=Y;await V({phase:Fe+"-attack",attacker:Fe,round:1,boostValue:J,boostUsed:!1,boostOwner:Fe})})},600)},700)},2800)}function ve(B,$,f,y,b){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(L,z)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${z%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][z%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};v.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${$} – ${f}
      </div>
      ${B!=null&&B.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${B.map(L=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[L.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${L.portrait?`<img src="${L.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(L.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(v);let S=!1;const E=()=>{S||(S=!0,v.remove(),setTimeout(()=>b(),50))};v.addEventListener("click",E),setTimeout(E,3500)}function Ee(B,$,f){var J,U;const y=(m.gcDefs||[]).find(G=>{var W;return G.name===B||((W=G.name)==null?void 0:W.toLowerCase().trim())===(B==null?void 0:B.toLowerCase().trim())}),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",v={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",w=(y==null?void 0:y.name)||B,k=(y==null?void 0:y.effect)||((J=Oe[B])==null?void 0:J.desc)||"",S=y!=null&&y.image_url?`/icons/${y.image_url}`:null,E=((U=Oe[B])==null?void 0:U.icon)||"⚡",z=$===s?"Vous":m[$+"Name"]||"Adversaire",M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",M.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${v}66}50%{box-shadow:0 0 60px ${v}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${v};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${z} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${v};background:${b};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${S?`<img src="${S}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${E}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(M);let D=!1;const Y=()=>{D||(D=!0,M.remove(),setTimeout(()=>f&&f(),50))};M.addEventListener("click",Y),setTimeout(Y,3e3)}function se(B,$){var M,D,Y,J;const y=(m["gcCardsFull_"+s]||[]).find(U=>U.id===B),b=y==null?void 0:y._gcDef,v={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",k=(b==null?void 0:b.name)||$,S=(b==null?void 0:b.effect)||((M=Oe[$])==null?void 0:M.desc)||"Carte spéciale.",E=b!=null&&b.image_url?`/icons/${b.image_url}`:null,L=((D=Oe[$])==null?void 0:D.icon)||"⚡",z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",z.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${v};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${L}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${S}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(z),(Y=z.querySelector("#pvp-gc-back"))==null||Y.addEventListener("click",()=>z.remove()),(J=z.querySelector("#pvp-gc-use"))==null||J.addEventListener("click",()=>{z.remove(),Q(B,$)})}function pe(){var y;const B=m[s+"Team"],$=Object.entries(B).flatMap(([b,v])=>(v||[]).filter(w=>!w.used).map(w=>({...w,_line:b})));if(!$.length)return;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",f.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${m.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${$.map(b=>{const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",w=ze(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${v};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(f),(y=f.querySelector("#bp-close"))==null||y.addEventListener("click",()=>f.remove()),f.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const v=b.dataset.cid,w=$.find(S=>S.cardId===v);if(!w)return;const k=(B[w._line]||[]).find(S=>S.cardId===v);k&&(k.boost=(k.boost||0)+m.boostValue),f.remove(),await V({[s+"Team"]:B,boostUsed:!0})})})}function ce(B=null){var D,Y;if(!(m.phase===s+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const f=m[s+"Team"],y=m["usedSubIds_"+s]||[],b=m.maxSubs||3;if(y.length>=b){p(`Maximum ${b} remplacements atteint`,"warning");return}const v=Object.entries(f).flatMap(([J,U])=>(U||[]).filter(G=>G.used).map(G=>({...G,_line:J}))),w=(m[s+"Subs"]||[]).filter(J=>!y.includes(J.cardId));if(!v.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){p("Aucun remplaçant disponible","warning");return}let k=Math.max(0,v.findIndex(J=>J.cardId===B));const S=((D=v[k])==null?void 0:D._line)||((Y=v[k])==null?void 0:Y.job);let E=Math.max(0,w.findIndex(J=>J.job===S)),L=!1;const z=document.createElement("div");z.id="pvp-sub-overlay",z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function M(){var fe,ye,be,ke,Be,Fe;const J=v[k],U=w[E],G=Math.min(130,Math.round((window.innerWidth-90)/2)),W=Math.round(G*1.35),te=Me=>`background:rgba(255,255,255,0.12);border:none;color:${Me?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Me?"default":"pointer"};flex-shrink:0`;z.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${b})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${te(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${U?Xe({...U,used:!1,boost:0},G,W):"<div>—</div>"}</div>
          <button id="pin-down" style="${te(E>=w.length-1)}" ${E>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${te(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${J?Xe({...J,used:!1,boost:0},G,W):"<div>—</div>"}</div>
          <button id="pout-down" style="${te(k>=v.length-1)}" ${k>=v.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${v.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(fe=z.querySelector("#psub-close"))==null||fe.addEventListener("click",()=>z.remove()),(ye=z.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{k>0&&(k--,M())}),(be=z.querySelector("#pout-down"))==null||be.addEventListener("click",()=>{k<v.length-1&&(k++,M())}),(ke=z.querySelector("#pin-up"))==null||ke.addEventListener("click",()=>{E>0&&(E--,M())}),(Be=z.querySelector("#pin-down"))==null||Be.addEventListener("click",()=>{E<w.length-1&&(E++,M())});const ee=(Me,je,Ae,Ne)=>{const Ue=z.querySelector("#"+Me);if(!Ue)return;let Ye=0;Ue.addEventListener("touchstart",Ke=>{Ye=Ke.touches[0].clientY},{passive:!0}),Ue.addEventListener("touchend",Ke=>{const Re=Ke.changedTouches[0].clientY-Ye;if(Math.abs(Re)<30)return;const Ge=je();Re<0&&Ge<Ne-1?(Ae(Ge+1),M()):Re>0&&Ge>0&&(Ae(Ge-1),M())},{passive:!0})};ee("pin-panel",()=>E,Me=>E=Me,w.length),ee("pout-panel",()=>k,Me=>k=Me,v.length),(Fe=z.querySelector("#psub-confirm"))==null||Fe.addEventListener("click",async Me=>{if(Me.preventDefault(),Me.stopPropagation(),L)return;L=!0;const je=v[k],Ae=w[E];if(!je||!Ae)return;const Ne=je._line,Ue=(f[Ne]||[]).findIndex(Re=>Re.cardId===je.cardId);if(Ue===-1){p("Erreur : joueur introuvable","error"),z.remove();return}const Ye={...Ae,_line:Ne,position:je.position,used:!1,boost:0};f[Ne].splice(Ue,1,Ye);const Ke=[...y,Ae.cardId];z.remove(),H(je,Ae,async()=>{await V({[s+"Team"]:f,[n+"Team"]:m[n+"Team"],["usedSubIds_"+s]:Ke})})})}document.body.appendChild(z),M()}function H(B,$,f){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const v=(S,E,L)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${L}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[S.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${He(S)?`<img src="${He(S)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(S.name||"").slice(0,12)}</div>
    </div>`;b.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${v($,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${v(B,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(b);let w=!1;const k=()=>{w||(w=!0,b.remove(),setTimeout(()=>f(),50))};b.addEventListener("click",k),setTimeout(k,2200)}function Z(){var $;const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",B.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${m[n+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(m[n+"Team"],m[n+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(B),($=B.querySelector("#pvp-opp-close"))==null||$.addEventListener("click",()=>B.remove())}function ge(){var y;const B=m.log||[],$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const f=b=>{var w,k,S;if(b.type==="duel"){const E=b.isGoal,L=b.homeScored&&s==="p1"||!b.homeScored&&E&&s==="p2",z=b.homeScored?"#FFD700":E?"#ff6b6b":"rgba(255,255,255,0.3)",M=E?L?"⚽ BUT !":"⚽ BUT adversaire !":(w=b.homePlayers)!=null&&w.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${E?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${z};margin-bottom:4px">
          <div style="font-size:9px;color:${z};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${M}</div>
          ${(k=b.homePlayers)!=null&&k.length?`<div style="margin-bottom:3px">${it(b.homePlayers,"rgba(255,255,255,0.7)",b.homeTotal)}</div>`:""}
          ${(S=b.aiPlayers)!=null&&S.length?`<div style="opacity:0.7">${it(b.aiPlayers,"#ff6b6b",b.aiTotal)}</div>`:""}
        </div>`}return b.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${b.outPlayer?Xe({...b.outPlayer,used:!0,_line:b.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${b.inPlayer?Xe({...b.inPlayer,_line:b.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${b.type==="goal"?"#FFD700":b.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${b.text||""}</div>
      </div>`};$.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${B.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...B].reverse().map(f).join("")}
      </div>`,document.body.appendChild($),(y=$.querySelector("#pvp-hist-close"))==null||y.addEventListener("click",()=>$.remove())}async function de(){if(m.phase!==s+"-attack")return;const B=s==="p1"?"p2":"p1",$=(m.round||0)+1,f=[...m.log||[]];f.push({type:"info",text:`⏭️ ${m[s+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=Te(m),b=Ce(B),v=y||!b?"finished":B+"-attack";await V({["selected_"+s]:[],modifiers:{...m.modifiers,[s]:{}},pendingAttack:null,phase:v,attacker:B,round:$,log:f}),v==="finished"&&await Pe(m)}async function me(){const B=m[s+"Team"],$=!["GK","DEF","MIL","ATT"].some(v=>(m[n+"Team"][v]||[]).some(w=>!w.used)),f=(m["selected_"+s]||[]).map(v=>{const w=(B[v._role]||[]).find(M=>M.cardId===v.cardId)||v,k=$&&["GK","DEF"].includes(v._role),S=B[v._role]||[],E=S.findIndex(M=>M.cardId===v.cardId),L=dt(S.length),z=E>=0?L[E]:w._col??1;return{...w,_line:v._role,_col:z,...k?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!f.length)return;const y=Ut(f,m.modifiers[s]||{});R(s,f.map(v=>v.cardId)),f.forEach(v=>{const w=(B[v._role]||[]).find(k=>k.cardId===v.cardId);w&&(w.used=!0)}),m["selected_"+s]=[],re();const b=[...m.log||[]];if($){const v=(m[s+"Score"]||0)+1,w=f.map(z=>({name:z.name,note:ze(z,z._line||"ATT"),portrait:He(z),job:z.job}));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:y.total,aiTotal:0});const k=(m.round||0)+1,S=s==="p1"?"p2":"p1",E={...m,[s+"Team"]:B,[s+"Score"]:v},L=Te(E);j.add(k),ve(w,v,m[n+"Score"]||0,!0,async()=>{await V({[s+"Team"]:B,[s+"Score"]:v,["selected_"+s]:[],modifiers:{...m.modifiers,[s]:{}},pendingAttack:null,phase:L?"finished":S+"-attack",attacker:S,round:k,log:b}),L&&await Pe({...m,[s+"Score"]:v})});return}b.push({type:"pending",text:`⚔️ ${m[s+"Name"]} attaque (${y.total})`}),await V({[s+"Team"]:B,[n+"Team"]:m[n+"Team"],pendingAttack:{...y,players:f,side:s},["selected_"+s]:[],modifiers:{...m.modifiers,[s]:{}},phase:n+"-defense",log:b})}async function ne(){const B=m[s+"Team"],$=(m["selected_"+s]||[]).map(J=>{const U=(B[J._role]||[]).find(fe=>fe.cardId===J.cardId)||J,G=B[J._role]||[],W=G.findIndex(fe=>fe.cardId===J.cardId),te=dt(G.length),ee=W>=0?te[W]:U._col??1;return{...U,_line:J._role,_col:ee}}),f=Kt($,m.modifiers[s]||{});R(s,$.map(J=>J.cardId)),$.forEach(J=>{const U=(B[J._role]||[]).find(G=>G.cardId===J.cardId);U&&(U.used=!0)}),m["selected_"+s]=[],re();const y=Vt(m.pendingAttack.total,f.total,m.modifiers[s]||{}),b=m.pendingAttack.side,v=y==="attack"||(y==null?void 0:y.goal),w=b==="p1"?"p2":"p1",k=(m.round||0)+1,S=(m.pendingAttack.players||[]).map(J=>({name:J.name,note:ze(J,J._line||"ATT"),portrait:He(J),job:J.job})),E=[...m.log||[]];E.push({type:"duel",isGoal:v,homeScored:v&&b===s,text:v?`⚽ BUT de ${m[b+"Name"]} ! (${m.pendingAttack.total} vs ${f.total})`:`✋ Attaque stoppée (${m.pendingAttack.total} vs ${f.total})`,homePlayers:S,aiPlayers:$.map(J=>({name:J.name,note:ze(J,J._line||"DEF"),portrait:He(J),job:J.job})),homeTotal:m.pendingAttack.total,aiTotal:f.total});const L=v?(m[b+"Score"]||0)+1:m[b+"Score"]||0,z={...m,[s+"Team"]:B,[b+"Score"]:L},M=Te(z),D=M?"finished":w+"-attack",Y=async()=>{await V({[s+"Team"]:B,[n+"Team"]:m[n+"Team"],[b+"Score"]:L,["selected_"+s]:[],modifiers:{...m.modifiers,[s]:{}},pendingAttack:null,phase:D,attacker:w,round:k,log:E}),(D==="finished"||M)&&await Pe({...m,[b+"Score"]:L})};if(v){const J=b===s,U=J?L:m[s+"Score"]||0,G=J?m[n+"Score"]||0:L;j.add(k),ve(S,U,G,J,Y)}else await Y()}function ue(B){return["MIL","ATT"].some($=>(B[$]||[]).some(f=>!f.used))}function Le(B){return["GK","DEF","MIL","ATT"].some($=>(B[$]||[]).some(f=>!f.used))}function Ie(B){return Le(B)&&!ue(B)}function Ce(B){const $=m[B+"Team"],f=m[(B==="p1"?"p2":"p1")+"Team"];return!!(ue($)||!Le(f)&&Ie($))}function Te(B){const $=["MIL","ATT"].some(E=>(B.p1Team[E]||[]).some(L=>!L.used)),f=["MIL","ATT"].some(E=>(B.p2Team[E]||[]).some(L=>!L.used)),y=Le(B.p1Team),b=Le(B.p2Team);return!$&&!(!b&&y)&&(!f&&!(!y&&b))}function qe(B){const $=B.p1Score||0,f=B.p2Score||0;return $===f?null:$>f?h.home_id:h.away_id}async function Pe(B){try{const $=qe(B),f=$?h.home_id===$?h.away_id:h.home_id:null;await T.from("matches").update({status:"finished",winner_id:$,home_score:B.p1Score||0,away_score:B.p2Score||0}).eq("id",i),$&&f&&Ti($,f).catch(()=>{})}catch($){console.error("[PvP] finishMatch:",$)}}function Se(){var b;const B=m[s+"Score"],$=m[n+"Score"],f=B>$,y=B===$;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${f?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${f?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${B} - ${$}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{T.removeChannel(N)}catch{}Ve(e),l("home")})}re()}const It="#1A6B3C",bt="#D4A017";async function Wo(e,t){var o;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(o=t.state.params)==null?void 0:o.openLeagueId;if(i){t.state.params.openLeagueId=null,await wt(e,t,i);return}await St(e,t)}async function St(e,t,i="waiting"){var A;const{state:o}=t,d=o.profile.id,{data:a}=await T.from("mini_league_members").select("league_id").eq("user_id",d),r=(a||[]).map(g=>g.league_id),{data:l,error:p}=await T.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),s=p?(await T.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],x=(r.length?await T.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],u=x.filter(g=>g.status==="waiting"&&!g.is_archived),h=x.filter(g=>g.status==="active"&&!g.is_archived),_=x.filter(g=>g.is_archived||g.status==="finished"),m=s.filter(g=>!r.includes(g.id)),c=[{key:"waiting",label:"🟡 En attente",count:u.length+m.length},{key:"active",label:"🟢 En cours",count:h.length},{key:"archived",label:"📁 Archivées",count:_.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${c.map(g=>`<button class="ml-tab" data-tab="${g.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===g.key?It:"transparent"};background:none;font-size:12px;font-weight:${i===g.key?"900":"600"};color:${i===g.key?It:"#888"};cursor:pointer">${g.label}${g.count?` (${g.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Jo(u,m,d):i==="active"?Xo(h,d):Qo(_,d)}
    </div>
  </div>`,(A=document.getElementById("ml-create-btn"))==null||A.addEventListener("click",()=>Zo(e,t)),e.querySelectorAll(".ml-tab").forEach(g=>g.addEventListener("click",()=>St(e,t,g.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(g=>g.addEventListener("click",()=>wt(e,t,g.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(g=>g.addEventListener("click",I=>{I.stopPropagation(),fn(e,t,g.dataset.join,g.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(g=>g.addEventListener("click",I=>{I.stopPropagation(),vi(e,t,g.dataset.delete,g.dataset.name,i)}))}function ii(e,t,i=!1){var r,l;const o=e.creator_id===t,d=e.pot||0,a=((l=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:l.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${o?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${d>0?`<span style="color:${bt};font-weight:700">🏆 ${d.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function Jo(e,t,i){const o=[];return e.length&&(o.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),o.push(...e.map(d=>ii(d,i,!1)))),t.length&&(o.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),o.push(...t.map(d=>ii(d,i,!0)))),o.length?o.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Xo(e,t){return e.length?e.map(i=>ii(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Qo(e,t){return e.length?e.map(i=>ii(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Zo(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",o=>{o.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(o=>o.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=o.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var _,m,c,A;const{toast:o}=t,d=document.getElementById("ml-name").value.trim(),a=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,l=((_=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:_.value)||"public",p=((m=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:m.value)||"aller",s=((A=(c=document.getElementById("ml-pwd"))==null?void 0:c.value)==null?void 0:A.trim())||null;if(!d){o("Le nom est obligatoire","error");return}if(r<100){o("Mise minimum : 100 crédits","error");return}if(l==="private"&&!s){o("Mot de passe requis","error");return}const{data:n,error:x}=await T.from("mini_leagues").insert({name:d,creator_id:t.state.profile.id,type:l,password:s,mode:p,max_players:a,entry_fee:r}).select().single();if(x){o("Erreur : "+x.message,"error");return}const{data:u}=await T.from("users").select("credits").eq("id",t.state.profile.id).single();if(((u==null?void 0:u.credits)||0)<r){await T.from("mini_leagues").delete().eq("id",n.id),o(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await T.from("users").update({credits:u.credits-r}).eq("id",t.state.profile.id),await T.from("mini_leagues").update({pot:r}).eq("id",n.id),await T.from("mini_league_members").insert({league_id:n.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=u.credits-r);const h=document.getElementById("nav-credits");h&&(h.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),o(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),wt(e,t,n.id)})}function er(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),o=d=>{t.remove(),e(d)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>o(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>o(i.value.trim())),i.addEventListener("keydown",d=>{d.key==="Enter"&&o(i.value.trim())}),t.addEventListener("click",d=>{d.target===t&&o(null)})})}async function fn(e,t,i,o){const{toast:d,state:a}=t,r=a.profile.id,{data:l}=await T.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!l){d("Mini League introuvable","error");return}if(l.status!=="waiting"){d("Cette Mini League a déjà démarré","warning");return}const{count:p}=await T.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(p>=l.max_players){d("La Mini League est complète","warning");return}if(o==="private"){const m=await er();if(m===null)return;if(l.password!==m){d("Mot de passe incorrect","error");return}}const s=l.entry_fee||100,{data:n}=await T.from("users").select("credits").eq("id",r).single();if(((n==null?void 0:n.credits)||0)<s){d(`Crédits insuffisants — il te faut ${s.toLocaleString("fr")} cr. (solde : ${((n==null?void 0:n.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:x}=await T.from("mini_league_members").insert({league_id:i,user_id:r});if(x){d("Erreur inscription : "+x.message,"error");return}const{error:u}=await T.from("users").update({credits:n.credits-s}).eq("id",r),{error:h}=await T.from("mini_leagues").update({pot:(l.pot||0)+s}).eq("id",i);(u||h)&&console.error("Erreur post-inscription:",u,h),a.profile&&(a.profile.credits=n.credits-s);const _=document.getElementById("nav-credits");_&&(_.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),d(`✅ Inscrit ! −${s.toLocaleString("fr")} cr. · Pot : ${((l.pot||0)+s).toLocaleString("fr")} cr.`,"success"),wt(e,t,i)}async function tr(e,t,i,o){const{toast:d,state:a}=t,r=a.profile.id;if(!confirm(`Te désinscrire et récupérer ${o.toLocaleString("fr")} cr. ?`))return;const{data:l}=await T.from("mini_leagues").select("pot,status").eq("id",i).single();if(!l||l.status!=="waiting"){d("Impossible — la league a déjà démarré","error");return}const{data:p}=await T.from("users").select("credits").eq("id",r).single();await T.from("mini_leagues").update({pot:Math.max(0,(l.pot||0)-o)}).eq("id",i),await T.from("users").update({credits:((p==null?void 0:p.credits)||0)+o}).eq("id",r),await T.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),a.profile&&(a.profile.credits=((p==null?void 0:p.credits)||0)+o);const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),d(`↩️ Désinscrit · +${o.toLocaleString("fr")} cr. remboursés`,"success"),St(e,t,"waiting")}async function vi(e,t,i,o,d){const{toast:a}=t;if(!confirm(`Supprimer définitivement "${o}" et tous ses matchs/membres ? Action irréversible.`))return;await T.from("mini_league_matches").delete().eq("league_id",i),await T.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await T.from("mini_leagues").delete().eq("id",i);if(r){a("Erreur suppression ("+r.message+")","error");return}a("Mini League supprimée avec succès","success"),St(e,t,d)}async function ir(e,t,i){await T.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),St(e,t,"archived")}async function wt(e,t,i){var C,j,F,q,N,V,K,oe,ie;const{state:o,toast:d}=t,a=o.profile.id,[{data:r},{data:l},{data:p}]=await Promise.all([T.from("mini_leagues").select("*").eq("id",i).single(),T.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),T.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){d("Introuvable","error"),await St(e,t);return}const s=(l||[]).some(Q=>Q.user_id===a),n=r.creator_id===a,x=(l||[]).map(Q=>Q.user).filter(Boolean),u=mn(x,p||[]),h=(p||[]).filter(Q=>Q.matchday===r.current_day),_=r.pot||0,m=r.entry_fee||100,c=h.length>0&&h.every(Q=>Q.status==="finished"||Q.status==="bye"),A=r.current_day>=r.total_days,g=(l||[]).find(Q=>Q.user_id===a);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${r.name}</div>
        <div style="font-size:11px;color:#888">${r.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${r.max_players} · 💰 ${m} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${r.status==="active"?"#d1fae5":r.status==="finished"?"#f3e8ff":"#fef9c3"};color:${r.status==="active"?"#166534":r.status==="finished"?"#6b21a8":"#854d0e"}">
          ${r.status==="waiting"?"En attente":r.status==="active"?`J${r.current_day}/${r.total_days}`:"Terminée"}
        </div>
        ${_>0?`<div style="font-size:12px;font-weight:900;color:${bt};margin-top:4px">🏆 ${_.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${x.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${m} cr./joueur → Pot estimé : ${(m*x.length).toLocaleString("fr")} cr. (🥇${Math.floor(m*x.length*.7).toLocaleString("fr")} · 🥈${Math.floor(m*x.length*.2).toLocaleString("fr")} · 🥉${Math.floor(m*x.length*.1).toLocaleString("fr")})</div>
        ${x.map(Q=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${Q.club_color2||It};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${Q.club_color1||"#fff"}">${(Q.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${Q.club_name||Q.pseudo}</div><div style="font-size:11px;color:#999">@${Q.pseudo}</div></div>
            ${Q.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${n&&x.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${m} cr. × ${x.length})</button>`:""}
        ${n?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${m} cr.)</button>`}
        ${s&&!n?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${m.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${h.map(Q=>Oi(Q,x,a,s)).join("")}
        ${n&&c&&!A?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${n&&c&&A?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&u.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${_>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${bt}">💰</th>`:""}
          </tr></thead>
          <tbody>${u.map((Q,R)=>{const P=_>0&&r.status==="finished"?R===0?Math.floor(_*.7):R===1?Math.floor(_*.2):R===2?Math.floor(_*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${Q.userId===a?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${R===0?bt:R<3?It:"#555"}">${["🥇","🥈","🥉"][R]||R+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${Q.clubName}</div><div style="font-size:10px;color:#999">@${Q.pseudo}</div></td>
              <td style="text-align:center">${Q.played}</td><td style="text-align:center">${Q.won}-${Q.drawn}-${Q.lost}</td>
              <td style="text-align:center;color:${Q.goalDiff>=0?It:"#cc2222"}">${Q.goalDiff>=0?"+":""}${Q.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${Q.points}</td>
              ${_>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${bt}">${P?P.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(Q,R)=>R+1).reverse().map(Q=>{const R=(p||[]).filter(P=>P.matchday===Q);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${Q}</div>${R.map(P=>Oi(P,x,a,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${n&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const I=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((C=document.getElementById("ml-back"))==null||C.addEventListener("click",()=>St(e,t,I)),(j=document.getElementById("ml-start-btn"))==null||j.addEventListener("click",()=>nr(e,t,r,x)),(F=document.getElementById("ml-next-day"))==null||F.addEventListener("click",()=>or(e,t,i)),(q=document.getElementById("ml-finish-btn"))==null||q.addEventListener("click",()=>gn(e,t,i,_,u,x)),(N=document.getElementById("ml-join-now"))==null||N.addEventListener("click",()=>fn(e,t,i,r.type)),(V=document.getElementById("ml-leave-btn"))==null||V.addEventListener("click",()=>tr(e,t,i,m)),(K=document.getElementById("ml-delete-btn"))==null||K.addEventListener("click",()=>vi(e,t,i,r.name,"waiting")),(oe=document.getElementById("ml-delete-now"))==null||oe.addEventListener("click",()=>vi(e,t,i,r.name,I)),(ie=document.getElementById("ml-archive-btn"))==null||ie.addEventListener("click",()=>ir(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(Q=>{Q.addEventListener("click",()=>{const R=h.find(P=>P.id===Q.dataset.playMatch);R&&t.navigate("match-mini-league",{mlMatchId:R.id,leagueId:i})})}),r.status==="finished"&&g){const Q=u.findIndex(R=>R.userId===a);Q>=0&&Q<3&&g.prize_amount>0&&setTimeout(()=>rr(e,t,r,g,Q),400)}}function Oi(e,t,i,o,d=!1){const a=x=>t.find(u=>u.id===x);if(e.is_bye){const x=a(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"?"} exempté(e)</div>`}const r=a(e.home_id),l=a(e.away_id),p=e.home_id===i||e.away_id===i,s=p&&e.status==="pending"&&o&&!d,n=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${p?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${p?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?It:"#999"}">${n}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(l==null?void 0:l.club_name)||(l==null?void 0:l.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function nr(e,t,i,o){const{toast:d,state:a}=t,r=ar(o.map(s=>s.id),i.mode),l=[];r.forEach((s,n)=>s.forEach(x=>l.push({league_id:i.id,matchday:n+1,home_id:x.home||x.bye,away_id:x.away||null,is_bye:!!x.bye,status:x.bye?"bye":"pending"})));const{error:p}=await T.from("mini_league_matches").insert(l);if(p){d("Erreur calendrier : "+p.message,"error");return}await T.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),d(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),wt(e,t,i.id)}async function or(e,t,i){const{data:o}=await T.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),d=(o.current_day||0)+1;if(d>(o.total_days||0)){await gn(e,t,i,o.pot||0,null,null);return}await T.from("mini_leagues").update({current_day:d}).eq("id",i),t.toast(`Journée ${d} commencée !`,"success"),wt(e,t,i)}async function gn(e,t,i,o,d,a){const{toast:r,state:l}=t;let p=d,s=a;if(!p){const{data:x}=await T.from("mini_league_matches").select("*").eq("league_id",i),{data:u}=await T.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);s=(u||[]).map(h=>h.user).filter(Boolean),p=mn(s,x||[])}const n=[Math.floor(o*.7),Math.floor(o*.2),Math.floor(o*.1)];await Promise.all(p.slice(0,3).map((x,u)=>n[u]?T.from("mini_league_members").update({prize_amount:n[u],prize_claimed:!1}).eq("league_id",i).eq("user_id",x.userId):Promise.resolve())),await T.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),wt(e,t,i)}async function rr(e,t,i,o,d){var u,h;const{state:a,toast:r}=t,l=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],p=["🥇","🥈","🥉"][d],s=o.prize_amount||l[d]||0,n=o.prize_claimed,x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",x.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${p}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${d===0?"Champion !":d===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${bt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${n?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${bt}">${s.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${d===0?"70%":d===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${n?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${bt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${s.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(x),(u=x.querySelector("#prize-close"))==null||u.addEventListener("click",()=>x.remove()),x.addEventListener("click",_=>{_.target===x&&x.remove()}),(h=x.querySelector("#claim-prize-btn"))==null||h.addEventListener("click",async()=>{const{data:_}=await T.from("users").select("credits").eq("id",a.profile.id).single();await T.from("users").update({credits:((_==null?void 0:_.credits)||0)+s}).eq("id",a.profile.id),await T.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",a.profile.id),a.profile&&(a.profile.credits=((_==null?void 0:_.credits)||0)+s);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${a.profile.credits.toLocaleString("fr")}`),r(`💰 +${s.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),x.remove(),wt(e,t,i.id)})}function ar(e,t){const o=e.length%2===0?[...e]:[...e,null],d=o.length;let a=o.slice(1);const r=[];for(let l=0;l<d-1;l++){const p=[],s=[o[0],...a];for(let n=0;n<d/2;n++){const x=s[n],u=s[d-1-n];x===null?p.push({bye:u}):u===null?p.push({bye:x}):p.push({home:x,away:u})}r.push(p),a=[a[a.length-1],...a.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(l=>l.map(p=>p.bye?p:{home:p.away,away:p.home}))]:r}function mn(e,t){const i={};return e.forEach(o=>{i[o.id]={userId:o.id,pseudo:o.pseudo,clubName:o.club_name||o.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(o=>o.status==="finished"&&!o.is_bye&&o.home_score!=null).forEach(o=>{const d=i[o.home_id],a=i[o.away_id];!d||!a||(d.played++,a.played++,d.goalsFor+=o.home_score,d.goalsAgainst+=o.away_score,a.goalsFor+=o.away_score,a.goalsAgainst+=o.home_score,o.home_score>o.away_score?(d.won++,d.points+=3,a.lost++):o.home_score<o.away_score?(a.won++,a.points+=3,d.lost++):(d.drawn++,d.points++,a.drawn++,a.points++),d.goalDiff=d.goalsFor-d.goalsAgainst,a.goalDiff=a.goalsFor-a.goalsAgainst)}),Object.values(i).sort((o,d)=>d.points-o.points||d.goalDiff-o.goalDiff||d.goalsFor-o.goalsFor)}async function Hi(e,t,i,o){var d,a;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:o};try{const r=(a=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:a.id;try{(T.getChannels?T.getChannels():[]).forEach(p=>{const s=p.topic||"";(s.includes("matchmaking")||s.includes("pvp-match"))&&T.removeChannel(p)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}r&&(await T.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await T.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await ai(e,t,"random",({deckId:r,formation:l,starters:p,subsRaw:s,gcCardsEnriched:n,gcDefs:x,stadiumDef:u})=>{const h=_=>sr(e,t,r,l,p,s,_,x||[],i);if(!n.length){h([]);return}ri(e,n,h)})}async function sr(e,t,i,o,d,a,r=[],l=[],p,s){const{state:n,navigate:x,toast:u}=t,h=n.profile.id;let _=!1,m=null;et(e);try{await T.rpc("cancel_matchmaking",{p_user_id:h})}catch{}try{await T.from("matchmaking_queue").delete().eq("user_id",h)}catch{}const{data:c}=await T.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",p).single();if(!c){u("Match introuvable","error"),Ve(e),x("mini-league");return}if(c.home_id!==h&&c.away_id!==h){u("Tu ne fais pas partie de ce match","error"),Ve(e),x("mini-league");return}const A=c.home_id===h,g=A?c.away:c.home,I=A?c.away_id:c.home_id,C=(F,q)=>{var N;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${c.matchday}</div>
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
            <div style="font-size:12px;font-weight:700">${(g==null?void 0:g.club_name)||(g==null?void 0:g.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(N=document.getElementById("lobby-cancel"))==null||N.addEventListener("click",()=>{_=!0,clearInterval(m),Ve(e),x("mini-league")})},j=async(F,q)=>{_=!0,clearInterval(m),await new Promise(N=>setTimeout(N,600)),e.isConnected&&dr(e,t,F,q,r,l)};if(C(),A){let F=c.match_id;if(!F){const{data:N,error:V}=await T.from("matches").insert({home_id:h,away_id:I,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(V||!N){u("Erreur création match","error"),Ve(e),x("mini-league");return}F=N.id,await T.from("mini_league_matches").update({match_id:F,status:"playing"}).eq("id",p)}const q=F;m=setInterval(async()=>{if(_){clearInterval(m);return}const{data:N}=await T.from("matches").select("away_deck_id").eq("id",q).single();N!=null&&N.away_deck_id&&(clearInterval(m),j(q,!0))},1500)}else{let F=c.match_id;m=setInterval(async()=>{if(_){clearInterval(m);return}const{data:q}=await T.from("mini_league_matches").select("match_id").eq("id",p).single();q!=null&&q.match_id&&(clearInterval(m),F=q.match_id,await T.from("matches").update({away_deck_id:i}).eq("id",F),j(F,!1))},1500)}}async function dr(e,t,i,o,d=[],a=[]){var $;const{state:r,navigate:l,toast:p}=t,s=(($=r.params)==null?void 0:$.leagueId)||null,n=o?"p1":"p2",x=o?"p2":"p1",u=(d||[]).map(f=>f.id),h=(d||[]).map(f=>({id:f.id,gc_type:f.gc_type,_gcDef:f._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:_}=await T.from("matches").select("*").eq("id",i).single();if(!_){p("Match introuvable","error"),l("mini-league");return}async function m(){const[{data:f},{data:y},{data:b},{data:v}]=await Promise.all([T.rpc("get_deck_for_match",{p_deck_id:_.home_deck_id}),T.rpc("get_deck_for_match",{p_deck_id:_.away_deck_id}),T.from("users").select("id,pseudo,club_name").eq("id",_.home_id).single(),T.from("users").select("id,pseudo,club_name").eq("id",_.away_id).single()]),w=z=>{const M=Number(z.evolution_bonus)||0;return{cardId:z.card_id,position:z.position,id:z.id,firstname:z.firstname,name:z.surname_encoded,country_code:z.country_code,club_id:z.club_id,job:z.job,job2:z.job2,note_g:(Number(z.note_g)||0)+(z.job==="GK"||z.job2==="GK"&&Number(z.note_g)>0?M:0),note_d:(Number(z.note_d)||0)+(z.job==="DEF"||z.job2==="DEF"&&Number(z.note_d)>0?M:0),note_m:(Number(z.note_m)||0)+(z.job==="MIL"||z.job2==="MIL"&&Number(z.note_m)>0?M:0),note_a:(Number(z.note_a)||0)+(z.job==="ATT"||z.job2==="ATT"&&Number(z.note_a)>0?M:0),evolution_bonus:M,rarity:z.rarity,skin:z.skin,hair:z.hair,hair_length:z.hair_length,clubName:z.club_encoded_name||null,clubLogo:z.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},k=((f==null?void 0:f.starters)||[]).map(z=>w(z)),S=((y==null?void 0:y.starters)||[]).map(z=>w(z)),E=(f==null?void 0:f.formation)||"4-4-2",L=(y==null?void 0:y.formation)||"4-4-2";return{p1Team:(()=>{const z=vt(k,E);return stadiumDef?Tt(z,stadiumDef):z})(),p2Team:vt(S,L),p1Subs:(()=>{const z=((f==null?void 0:f.subs)||[]).map(M=>w(M));return stadiumDef&&jt(z,stadiumDef),z})(),p2Subs:((y==null?void 0:y.subs)||[]).map(z=>w(z)),p1Formation:E,p2Formation:L,p1Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 1",p2Name:(v==null?void 0:v.club_name)||(v==null?void 0:v.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:o?u:[],gc_p2:o?[]:u,gcCardsFull_p1:o?h:[],gcCardsFull_p2:o?[]:h,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:a||[],lastActionAt:new Date().toISOString()}}let c=_.game_state&&Object.keys(_.game_state).length?_.game_state:null;if(!c)if(o){c=await m();const{data:f}=await T.from("matches").select("game_state").eq("id",i).single();!(f!=null&&f.game_state)||!Object.keys(f.game_state).length?await T.from("matches").update({game_state:c,turn_user_id:_.home_id}).eq("id",i):c=f.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let f=0;f<60&&!c;f++){await new Promise(b=>setTimeout(b,400));const{data:y}=await T.from("matches").select("game_state").eq("id",i).single();y!=null&&y.game_state&&Object.keys(y.game_state).length&&(c=y.game_state)}if(!c){p("Erreur de synchronisation","error"),l("mini-league");return}c.gc_p2=u,c.gcCardsFull_p2=h,await T.from("matches").update({game_state:c}).eq("id",i)}let A=!1,g=!1,I=!1,C=null,j=!1;const F=new Set,q=new Set;function N(f){var z,M;try{T.removeChannel(V)}catch{}const y=c[n+"Score"]||0,b=c[x+"Score"]||0;if(!I){I=!0;const D=f.winner_id||(y>b?r.profile.id:b>y?"opp":null),Y=D===r.profile.id?"win":D?"loss":null;Y&&ni(()=>Promise.resolve().then(()=>nn),void 0).then(J=>J.applyOwnEvolution(r.profile.id,Y)).catch(()=>{})}if(!g){const D=c.p1Score||0,Y=c.p2Score||0,J=(c.usedGc_p1||[]).length,U=(c.usedGc_p2||[]).length,G=f.winner_id||(D>Y?_.home_id:Y>D?_.away_id:null);(G?r.profile.id===G:r.profile.id<(o?_.away_id:_.home_id))&&(g=!0,Wi({player1Id:_.home_id,player2Id:_.away_id,score1:D,score2:Y,gc1:J,gc2:U}).catch(te=>console.warn("[FriendMatch] updateStats:",te)))}let v,w;f.winner_id?(v=f.winner_id===r.profile.id,w=!1):f.forfeit?(v=y>b,w=!1):(w=y===b,v=y>b),(z=document.getElementById("pvp-end-overlay"))==null||z.remove();const k=document.createElement("div");k.id="pvp-end-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const S=w?"🤝":v?"🏆":"😞",E=w?"MATCH NUL":v?"VICTOIRE !":"DÉFAITE",L=w?"#fff":v?"#FFD700":"#ff6b6b";k.innerHTML=`
      <div style="font-size:64px">${S}</div>
      <div style="font-size:26px;font-weight:900;color:${L}">${E}</div>
      <div style="font-size:18px">${c[n+"Name"]} ${y} – ${b} ${c[x+"Name"]}</div>
      ${f.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${v?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(k),(M=k.querySelector("#pvp-end-home"))==null||M.addEventListener("click",()=>{k.remove(),Ve(e),s?l("mini-league",{openLeagueId:s}):l("mini-league")})}const V=T.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},f=>{const y=f.new;try{if(y.status==="finished"||y.forfeit){if(A||(A=!0,C&&(clearInterval(C),C=null),y.game_state&&(c=y.game_state),c.phase==="finished"&&!y.forfeit&&document.getElementById("pvp-home")))return;N(y);return}if(y.game_state){const b=c;c=y.game_state;const v=c._lastGC;if(v&&v.seq&&!q.has(v.seq)&&(q.add(v.seq),v.by!==n)){se(v.type,v.by,()=>xe());return}const w=b[n+"Score"]||0,k=b[x+"Score"]||0,S=c[n+"Score"]||0,E=c[x+"Score"]||0,L=S>w,z=E>k;if((L||z)&&!F.has(c.round)){F.add(c.round);const M=[...c.log||[]].reverse().find(Y=>Y.isGoal),D=((M==null?void 0:M.homePlayers)||[]).map(Y=>({name:Y.name,note:Y.note,portrait:Y.portrait,job:Y.job}));Ee(D,S,E,L,()=>xe());return}xe()}}catch(b){console.error("[PvP] crash:",b)}}).subscribe();async function K(f){Object.assign(c,f),c.lastActionAt=new Date().toISOString();const{error:y}=await T.from("matches").update({game_state:c}).eq("id",i);y&&p("Erreur de synchronisation","error");try{xe()}catch(b){console.error("[PvP] renderPvpScreen crash:",b)}}async function oe(){if(A)return;A=!0,C&&(clearInterval(C),C=null);const f=o?_.away_id:_.home_id,y=o?"p2":"p1",b=o?"p1":"p2",v={...c,[y+"Score"]:3,[b+"Score"]:0,phase:"finished"};try{await T.from("matches").update({status:"finished",forfeit:!0,winner_id:f,home_score:v.p1Score||0,away_score:v.p2Score||0,game_state:v}).eq("id",i)}catch{}try{T.removeChannel(V)}catch{}setTimeout(()=>{Ve(e),l("mini-league")},800)}const ie={BOOST_STAT:({value:f=1,count:y=1,roles:b=[]},v,w)=>{const k=v[n+"Team"],S=Object.entries(k).filter(([E])=>!b.length||b.includes(E)).flatMap(([E,L])=>L.filter(z=>!z.used).map(z=>({...z,_line:E})));if(!S.length){v.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),w(v);return}Q(S,y,`Choisir ${y} joueur(s) à booster (+${f})`,E=>{E.forEach(L=>{const z=(k[L._line]||[]).find(M=>M.cardId===L.cardId);z&&(z.boost=(z.boost||0)+f,v.log.push({text:`⚡ +${f} sur ${z.name}`,type:"info"}))}),v[n+"Team"]=k,w(v)})},DEBUFF_STAT:({value:f=1,count:y=1,roles:b=[],target:v="ai"},w,k)=>{const S=v==="home"?n:x,E=w[S+"Team"],L=v==="home"?"allié":"adverse",z=Object.entries(E).filter(([M])=>!b.length||b.includes(M)).flatMap(([M,D])=>D.map(Y=>({...Y,_line:M})));if(!z.length){w.log.push({text:`🎯 Aucun joueur ${L}`,type:"info"}),k(w);return}Q(z,y,`Choisir ${y} joueur(s) ${L}(s) (-${f})`,M=>{M.forEach(D=>{const Y=(E[D._line]||[]).find(J=>J.cardId===D.cardId);Y&&(Y.boost=(Y.boost||0)-f,w.log.push({text:`🎯 -${f} sur ${Y.name}`,type:"info"}))}),w[S+"Team"]=E,k(w)})},GRAY_PLAYER:({count:f=1,roles:y=[],target:b="ai"},v,w)=>{const k=b==="home"?n:x,S=v[k+"Team"],E=b==="home"?"allié":"adverse",L=Object.entries(S).filter(([z])=>!y.length||y.includes(z)).flatMap(([z,M])=>M.filter(D=>!D.used).map(D=>({...D,_line:z})));if(!L.length){v.log.push({text:`❌ Aucun joueur ${E}`,type:"info"}),w(v);return}Q(L,f,`Choisir ${f} joueur(s) ${E}(s) à exclure`,z=>{const M="usedCardIds_"+k,D=new Set(v[M]||[]);z.forEach(Y=>{const J=(S[Y._line]||[]).find(U=>U.cardId===Y.cardId);J&&(J.used=!0,D.add(Y.cardId),v.log.push({text:`❌ ${J.name} exclu !`,type:"info"}))}),v[M]=[...D],v[k+"Team"]=S,w(v)})},REVIVE_PLAYER:({count:f=1,roles:y=[]},b,v)=>{const w=b[n+"Team"],k=Object.entries(w).filter(([S])=>!y.length||y.includes(S)).flatMap(([S,E])=>E.filter(L=>L.used).map(L=>({...L,_line:S})));if(!k.length){b.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),v(b);return}Q(k,f,`Choisir ${f} joueur(s) à ressusciter`,S=>{S.forEach(E=>{const L=(w[E._line]||[]).find(z=>z.cardId===E.cardId);L&&(L.used=!1,b.log.push({text:`💫 ${L.name} ressuscité !`,type:"info"}))}),b[n+"Team"]=w,v(b)})},REMOVE_GOAL:({},f,y)=>{const b=x+"Score";f[b]>0?(f[b]--,f.log.push({text:"🚫 Dernier but annulé !",type:"info"})):f.log.push({text:"🚫 Aucun but à annuler",type:"info"}),y(f)},ADD_GOAL_DRAW:({},f,y)=>{f[n+"Score"]===f[x+"Score"]?(f[n+"Score"]++,f.log.push({text:"🎯 But bonus !",type:"info"})):f.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),y(f)},ADD_SUB:({value:f=1},y,b)=>{y.maxSubs=(y.maxSubs||3)+f,y.log.push({text:`🔄 +${f} remplacement(s)`,type:"info"}),b(y)},CUSTOM:({},f,y)=>y(f)};function Q(f,y,b,v){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let k=[];function S(){var L,z;const E=f.map(M=>{const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[M._line]||"#555",Y=ze(M,M._line)+(M.boost||0),U=k.find(W=>W.cardId===M.cardId)?"#FFD700":"rgba(255,255,255,0.25)",G=M.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${M.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${U};background:${D};overflow:hidden;cursor:pointer;${G}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${M.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${Y}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${M._line}</div>
        </div>`}).join("");w.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${b}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${k.length}/${y}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${E}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${k.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${k.length}/${y})
          </button>
        </div>`,(L=w.querySelector("#pp-close"))==null||L.addEventListener("click",()=>w.remove()),w.querySelectorAll(".pp-item").forEach(M=>{M.addEventListener("click",()=>{const D=M.dataset.cid,Y=f.find(U=>U.cardId===D),J=k.findIndex(U=>U.cardId===D);Y&&(J>-1?k.splice(J,1):k.length<y&&k.push(Y),S())})}),(z=w.querySelector("#pp-confirm"))==null||z.addEventListener("click",()=>{w.remove(),v(k)})}S(),document.body.appendChild(w)}async function R(f,y){const v=(c["gcCardsFull_"+n]||[]).find(E=>E.id===f),w=(v==null?void 0:v._gcDef)||(c.gcDefs||[]).find(E=>{var L;return E.name===y||((L=E.name)==null?void 0:L.toLowerCase().trim())===(y==null?void 0:y.toLowerCase().trim())}),k=[...c["usedGc_"+n]||[],f],S={type:y,by:n,seq:(c._gcAnimSeq||0)+1};q.add(S.seq),se(y,n,async()=>{if(w!=null&&w.effect_type&&w.effect_type!=="CUSTOM"){const L=ie[w.effect_type];if(L){const z={...c};L(w.effect_params||{},z,async M=>{M["usedGc_"+n]=k,M._lastGC=S,M._gcAnimSeq=S.seq,await K(M)});return}}const E={...c};switch(y){case"Remplacement+":E.maxSubs=(E.maxSubs||3)+1,E.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const L=x+"Score";E[L]>0&&(E[L]--,E.log.push({text:"🚫 But annulé",type:"info"}));break}}E["usedGc_"+n]=k,E._lastGC=S,E._gcAnimSeq=S.seq,await K(E)})}function P(f,y){const b="usedCardIds_"+f,v=new Set(c[b]||[]);y.forEach(w=>v.add(w)),c[b]=[...v]}function re(){for(const f of["p1","p2"]){const y=new Set(c["usedCardIds_"+f]||[]),b=c[f+"Team"];if(b)for(const v of["GK","DEF","MIL","ATT"])(b[v]||[]).forEach(w=>{w.used=y.has(w.cardId)})}}function xe(){var nt,ut,ft,gt,le,X;if(c.phase==="reveal")return _e();if(c.phase==="midfield")return ve();if(c.phase==="finished")return B();const f=c[n+"Team"],y=c[x+"Team"];re();const b=c[n+"Score"],v=c[x+"Score"],w=c[n+"Name"],k=c[x+"Name"],S=c.phase===n+"-attack",E=c.phase===n+"-defense",L=Array.isArray(c["selected_"+n])?c["selected_"+n]:[],z=L.map(O=>O.cardId),M=window.innerWidth>=700,D=c[n+"Subs"]||[],Y=c["usedSubIds_"+n]||[],J=D.filter(O=>!Y.includes(O.cardId)),U=c["gcCardsFull_"+n]||[],G=c["usedGc_"+n]||[],W=U.filter(O=>!G.includes(O.id)),te=c.boostOwner===n&&!c.boostUsed,ee=!["GK","DEF","MIL","ATT"].some(O=>(y[O]||[]).some(ae=>!ae.used)),fe=[...f.MIL||[],...f.ATT||[]].filter(O=>!O.used),ye=S&&ee&&fe.length===0?[...f.GK||[],...f.DEF||[]].filter(O=>!O.used).map(O=>O.cardId):[];function be(O,ae,he){var Ct,Ai;const $e=O._gcDef,Qe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[$e==null?void 0:$e.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ze={purple:"#b06ce0",light_blue:"#00d4ef"}[$e==null?void 0:$e.color]||"#b06ce0",tt=($e==null?void 0:$e.name)||O.gc_type,rt=($e==null?void 0:$e.effect)||((Ct=Oe[O.gc_type])==null?void 0:Ct.desc)||"",_t=$e!=null&&$e.image_url?`/icons/${$e.image_url}`:null,$t=((Ai=Oe[O.gc_type])==null?void 0:Ai.icon)||"⚡",lt=Math.round(he*.22),mt=Math.round(he*.22),xt=he-lt-mt,kt=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
        style="box-sizing:border-box;width:${ae}px;height:${he}px;border-radius:10px;border:2px solid ${Ze};background:${Qe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${lt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ae-6}px">${tt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${xt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${_t?`<img src="${_t}" style="max-width:${ae-10}px;max-height:${xt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(xt*.55)}px">${$t}</span>`}
        </div>
        <div style="height:${mt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${rt.slice(0,38)}</span>
        </div>
      </div>`}function ke(O,ae){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${O}px;height:${ae}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ae*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ae*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ae*.09)}px;color:#000;font-weight:900">+${c.boostValue}</div>
      </div>`}const Be=(O,ae)=>ae?ke(130,175):be(O,130,175),Fe=(O,ae)=>ae?ke(68,95):be(O,68,95),Me=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=S?Te(n)?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${L.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Me};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:E?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${L.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${k}</div>`,Ae=S&&!Te(n)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':S||E?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${L.length}/3 sélectionné(s)</div>`:"",Ne=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${J.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':J.map(O=>`<div class="pvp-sub-btn" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(O,M?76:44,M?100:58)}</div>`).join("")}
    </div>`,Ue=S?"attack":E?"defense":"idle",Ye=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(f,c[n+"Formation"],Ue,z,300,300,ye)}
      </div>
    </div>`;function Ke(O){if(O.type==="duel"&&(O.homeTotal!=null||O.aiTotal!=null)){const ae=(O.homeTotal||0)>=(O.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(O.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.homePlayers||[]).map(he=>at(he)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ae?20:14}px;font-weight:900;color:${ae?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${O.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ae?14:20}px;font-weight:900;color:${ae?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${O.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(O.aiPlayers||[]).map(he=>at(he)).join("")}
            </div>
          </div>
          ${O.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${O.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${O.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${O.type==="goal"?700:400};padding:3px 2px">${O.text||""}</div>`}const Re=(()=>{var ae,he;if(E&&((ae=c.pendingAttack)!=null&&ae.players)){const $e=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${k} ATTAQUE — Défendez !</div>
          ${it(($e.players||[]).map(Qe=>({...Qe,used:!1})),"#ff6b6b",$e.total)}
        </div>`}if(S&&((he=c.pendingAttack)!=null&&he.players)){const $e=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it(($e.players||[]).map(Qe=>({...Qe,used:!1})),"#00ff88",$e.total)}
        </div>`}const O=(c.log||[]).slice(-1)[0];return O?'<div style="padding:2px 4px">'+Ke(O)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ge=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${b} – ${v}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${k}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Re}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(c.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",M?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ge}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ne}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ye}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${Ae}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${W.map(O=>Be(O,!1)).join("")}
            ${te?Be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ge}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(f,c[n+"Formation"],Ue,z,300,300,ye)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${W.map(O=>Fe(O,!1)).join("")}
            ${te?Fe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${S&&J.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${S&&J.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${S&&J.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${S&&J.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${J.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(c["usedSubIds_"+n]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(c["usedSubIds_"+n]||[]).length}/${c.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${je}${Ae}</div>
        </div>
      </div>`;function We(){const O=e.querySelector(".match-screen");if(!O)return;const ae=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);O.style.height=ae+"px",O.style.minHeight=ae+"px",O.style.maxHeight=ae+"px",O.style.overflow="hidden";const he=e.querySelector("#mobile-action-bar"),$e=e.querySelector("#mobile-play-area");he&&$e&&($e.style.paddingBottom=he.offsetHeight+"px")}if(We(),setTimeout(We,120),setTimeout(We,400),j||(j=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",We),window.visualViewport.addEventListener("scroll",We)),window.addEventListener("resize",We)),function(){const ae=e.querySelector(".terrain-wrapper svg");ae&&(ae.removeAttribute("width"),ae.removeAttribute("height"),ae.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ae.setAttribute("viewBox","-26 -26 352 352"),ae.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(O=>{O.addEventListener("click",()=>{if(!S&&!E)return;const ae=O.dataset.cardId,he=O.dataset.role,$e=(f[he]||[]).find(rt=>rt.cardId===ae);if(!$e||$e.used)return;const Qe=ye.includes(ae);if(S&&!["MIL","ATT"].includes(he)&&!Qe)return;Array.isArray(c["selected_"+n])||(c["selected_"+n]=[]);const Ze=c["selected_"+n],tt=Ze.findIndex(rt=>rt.cardId===ae);tt>-1?Ze.splice(tt,1):Ze.length<3&&Ze.push({...$e,_role:he}),xe()})}),e.querySelectorAll(".match-used-hit").forEach(O=>{O.addEventListener("click",()=>H(O.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(O=>{O.addEventListener("click",()=>H())}),(nt=e.querySelector("#pvp-sub-open"))==null||nt.addEventListener("click",()=>H()),e.querySelectorAll(".pvp-gc-mini").forEach(O=>{O.addEventListener("click",()=>pe(O.dataset.gcId,O.dataset.gcType))}),(ut=e.querySelector("#pvp-boost-card"))==null||ut.addEventListener("click",()=>ce()),(ft=e.querySelector("#pvp-action"))==null||ft.addEventListener("click",O=>{S?O.currentTarget.dataset.pass==="1"||!Te(n)?me():ne():E&&ue()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&oe()}),(le=e.querySelector("#pvp-view-opp"))==null||le.addEventListener("click",()=>ge()),(X=e.querySelector("#pvp-toggle-history"))==null||X.addEventListener("click",()=>de()),C&&(clearInterval(C),C=null),(S||E)&&!A){let O=30,ae=!1;const he=()=>document.getElementById("pvp-timer"),$e=()=>{he()&&(he().textContent=O+"s",he().style.color=ae?"#ff4444":"#fff")};$e(),C=setInterval(()=>{O--,O<0?ae?(clearInterval(C),C=null,S&&!Te(n)?me():oe()):(ae=!0,O=15,$e()):$e()},1e3)}}function _e(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${c[x+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(c[x+"Team"],c[x+"Formation"],null,[],300,300)}</div>
    </div>`,n==="p1"&&setTimeout(async()=>{await K({phase:"midfield"})},5e3)}let we=!1;function ve(){if(we)return;const f=c[n+"Team"].MIL||[],y=c[x+"Team"].MIL||[];function b(W){return W.reduce((te,ee)=>te+ze(ee,"MIL"),0)}function v(W){let te=0;for(let ee=0;ee<W.length-1;ee++){const fe=ot(W[ee],W[ee+1]);fe==="#00ff88"?te+=2:fe==="#FFD700"&&(te+=1)}return te}const w=b(f)+v(f),k=b(y)+v(y),S=w>=k;function E(W,te,ee){return`<div id="duel-row-${ee}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${te}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${W.map((fe,ye)=>{const be=ye<W.length-1?ot(fe,W[ye+1]):null,ke=!be||be==="#ff3333"||be==="#cc2222",Be=be==="#00ff88"?"+2":be==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ee}" data-idx="${ye}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...fe,note:ze(fe,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ye<W.length-1?`<div class="duel-link duel-link-${ee}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ke?"rgba(255,255,255,0.12)":be};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ke?"none":`0 0 8px ${be}`}">
              ${Be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${be}">${Be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ee}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${b(W)} + ${v(W)} liens = <b style="color:#fff">${b(W)+v(W)}</b>
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
      ${E(f,c[n+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${E(y,c[x+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const L=(W,te)=>e.querySelectorAll(W).forEach((ee,fe)=>{setTimeout(()=>{ee.style.opacity="1",ee.style.transform="translateY(0) scale(1)"},te+fe*90)});L(".duel-card-me",150),L(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((W,te)=>setTimeout(()=>{W.style.opacity="1"},te*70)),900),setTimeout(()=>{const W=e.querySelector("#pvp-vs");W&&(W.style.opacity="1",W.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(te=>te.style.opacity="1")},1250);function z(W,te,ee){const fe=document.getElementById(W);if(!fe)return;const ye=performance.now(),be=ke=>{const Be=Math.min(1,(ke-ye)/ee);fe.textContent=Math.round(te*(1-Math.pow(1-Be,3))),Be<1?requestAnimationFrame(be):fe.textContent=te};requestAnimationFrame(be)}setTimeout(()=>{z("pvp-score-me",w,800),z("pvp-score-opp",k,800)},1500);const M=c.p1Team.MIL||[],D=c.p2Team.MIL||[],Y=b(M)+v(M),J=b(D)+v(D),U=Y>=J?"p1":"p2";let G=c.boostValue;G==null&&(G=oi(),c.boostValue=G,c.boostOwner=U,c.boostUsed=!1),we=!0,setTimeout(()=>{const W=e.querySelector("#duel-row-"+(S?"me":"opp")),te=e.querySelector("#duel-row-"+(S?"opp":"me")),ee=document.getElementById("pvp-score-me"),fe=document.getElementById("pvp-score-opp"),ye=S?ee:fe,be=S?fe:ee;ye&&(ye.style.fontSize="80px",ye.style.color=S?"#FFD700":"#ff6b6b",ye.style.animation="duelPulse .5s ease"+(S?",duelGlow 1.5s ease infinite .5s":"")),be&&(be.style.opacity="0.25"),setTimeout(()=>{W&&(W.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",W.style.zIndex="5"),setTimeout(()=>{const ke=document.getElementById("duel-shock");ke&&(ke.style.animation="shockwave .5s ease-out forwards"),te&&(te.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Me;const ke=document.getElementById("pvp-duel-finale");if(!ke)return;const Be=c.boostOwner===n?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+G+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Fe=n==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ke.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(S?"⚽ "+c[n+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+c[x+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Be+Fe,ke.style.transition="opacity .45s ease",ke.style.opacity="1",ke.style.pointerEvents="auto",(Me=document.getElementById("pvp-start-match"))==null||Me.addEventListener("click",async()=>{const je=U;await K({phase:je+"-attack",attacker:je,round:1,boostValue:G,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function Ee(f,y,b,v,w){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const S=Array.from({length:10},(M,D)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${D%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][D%8]}</div>`).join(""),E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};k.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${S}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${v?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${y} – ${b}
      </div>
      ${f!=null&&f.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${f.map(M=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${E[M.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${M.portrait?`<img src="${M.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(M.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(k);let L=!1;const z=()=>{L||(L=!0,k.remove(),setTimeout(()=>w(),50))};k.addEventListener("click",z),setTimeout(z,3500)}function se(f,y,b){var G,W;const v=(c.gcDefs||[]).find(te=>{var ee;return te.name===f||((ee=te.name)==null?void 0:ee.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[v==null?void 0:v.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",k={purple:"#b06ce0",light_blue:"#00d4ef"}[v==null?void 0:v.color]||"#b06ce0",S=(v==null?void 0:v.name)||f,E=(v==null?void 0:v.effect)||((G=Oe[f])==null?void 0:G.desc)||"",L=v!=null&&v.image_url?`/icons/${v.image_url}`:null,z=((W=Oe[f])==null?void 0:W.icon)||"⚡",D=y===n?"Vous":c[y+"Name"]||"Adversaire",Y=document.createElement("div");Y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",Y.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${k}66}50%{box-shadow:0 0 60px ${k}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${k};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${D} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${S.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${S}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${L?`<img src="${L}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${z}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(Y);let J=!1;const U=()=>{J||(J=!0,Y.remove(),setTimeout(()=>b&&b(),50))};Y.addEventListener("click",U),setTimeout(U,3e3)}function pe(f,y){var Y,J,U,G;const v=(c["gcCardsFull_"+n]||[]).find(W=>W.id===f),w=v==null?void 0:v._gcDef,k={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[w==null?void 0:w.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",S={purple:"#b06ce0",light_blue:"#00d4ef"}[w==null?void 0:w.color]||"#b06ce0",E=(w==null?void 0:w.name)||y,L=(w==null?void 0:w.effect)||((Y=Oe[y])==null?void 0:Y.desc)||"Carte spéciale.",z=w!=null&&w.image_url?`/icons/${w.image_url}`:null,M=((J=Oe[y])==null?void 0:J.icon)||"⚡",D=document.createElement("div");D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",D.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${S};background:${k};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${S}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${E.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${E}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${z?`<img src="${z}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${M}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${L}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(D),(U=D.querySelector("#pvp-gc-back"))==null||U.addEventListener("click",()=>D.remove()),(G=D.querySelector("#pvp-gc-use"))==null||G.addEventListener("click",()=>{D.remove(),R(f,y)})}function ce(){var v;const f=c[n+"Team"],y=Object.entries(f).flatMap(([w,k])=>(k||[]).filter(S=>!S.used).map(S=>({...S,_line:w})));if(!y.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${c.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${y.map(w=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[w._line]||"#555",S=ze(w,w._line)+(w.boost||0);return`<div class="bp-item" data-cid="${w.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${k};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${w.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${S}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(v=b.querySelector("#bp-close"))==null||v.addEventListener("click",()=>b.remove()),b.querySelectorAll(".bp-item").forEach(w=>{w.addEventListener("click",async()=>{const k=w.dataset.cid,S=y.find(L=>L.cardId===k);if(!S)return;const E=(f[S._line]||[]).find(L=>L.cardId===k);E&&(E.boost=(E.boost||0)+c.boostValue),b.remove(),await K({[n+"Team"]:f,boostUsed:!0})})})}function H(f=null){var J,U;if(!(c.phase===n+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const b=c[n+"Team"],v=c["usedSubIds_"+n]||[],w=c.maxSubs||3;if(v.length>=w){p(`Maximum ${w} remplacements atteint`,"warning");return}const k=Object.entries(b).flatMap(([G,W])=>(W||[]).filter(te=>te.used).map(te=>({...te,_line:G}))),S=(c[n+"Subs"]||[]).filter(G=>!v.includes(G.cardId));if(!k.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!S.length){p("Aucun remplaçant disponible","warning");return}let E=Math.max(0,k.findIndex(G=>G.cardId===f));const L=((J=k[E])==null?void 0:J._line)||((U=k[E])==null?void 0:U.job);let z=Math.max(0,S.findIndex(G=>G.job===L)),M=!1;const D=document.createElement("div");D.id="pvp-sub-overlay",D.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Y(){var be,ke,Be,Fe,Me,je;const G=k[E],W=S[z],te=Math.min(130,Math.round((window.innerWidth-90)/2)),ee=Math.round(te*1.35),fe=Ae=>`background:rgba(255,255,255,0.12);border:none;color:${Ae?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ae?"default":"pointer"};flex-shrink:0`;D.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${v.length}/${w})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${fe(z===0)}" ${z===0?"disabled":""}>▲</button>
          <div>${W?Xe({...W,used:!1,boost:0},te,ee):"<div>—</div>"}</div>
          <button id="pin-down" style="${fe(z>=S.length-1)}" ${z>=S.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${z+1}/${S.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${fe(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${G?Xe({...G,used:!1,boost:0},te,ee):"<div>—</div>"}</div>
          <button id="pout-down" style="${fe(E>=k.length-1)}" ${E>=k.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${k.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(be=D.querySelector("#psub-close"))==null||be.addEventListener("click",()=>D.remove()),(ke=D.querySelector("#pout-up"))==null||ke.addEventListener("click",()=>{E>0&&(E--,Y())}),(Be=D.querySelector("#pout-down"))==null||Be.addEventListener("click",()=>{E<k.length-1&&(E++,Y())}),(Fe=D.querySelector("#pin-up"))==null||Fe.addEventListener("click",()=>{z>0&&(z--,Y())}),(Me=D.querySelector("#pin-down"))==null||Me.addEventListener("click",()=>{z<S.length-1&&(z++,Y())});const ye=(Ae,Ne,Ue,Ye)=>{const Ke=D.querySelector("#"+Ae);if(!Ke)return;let Re=0;Ke.addEventListener("touchstart",Ge=>{Re=Ge.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",Ge=>{const We=Ge.changedTouches[0].clientY-Re;if(Math.abs(We)<30)return;const nt=Ne();We<0&&nt<Ye-1?(Ue(nt+1),Y()):We>0&&nt>0&&(Ue(nt-1),Y())},{passive:!0})};ye("pin-panel",()=>z,Ae=>z=Ae,S.length),ye("pout-panel",()=>E,Ae=>E=Ae,k.length),(je=D.querySelector("#psub-confirm"))==null||je.addEventListener("click",async Ae=>{if(Ae.preventDefault(),Ae.stopPropagation(),M)return;M=!0;const Ne=k[E],Ue=S[z];if(!Ne||!Ue)return;const Ye=Ne._line,Ke=(b[Ye]||[]).findIndex(We=>We.cardId===Ne.cardId);if(Ke===-1){p("Erreur : joueur introuvable","error"),D.remove();return}const Re={...Ue,_line:Ye,position:Ne.position,used:!1,boost:0};b[Ye].splice(Ke,1,Re);const Ge=[...v,Ue.cardId];D.remove(),Z(Ne,Ue,async()=>{await K({[n+"Team"]:b,[x+"Team"]:c[x+"Team"],["usedSubIds_"+n]:Ge})})})}document.body.appendChild(D),Y()}function Z(f,y,b){const v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const k=(L,z,M)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${z};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${M}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${v[L.job]||"#555"};border:3px solid ${z};position:relative;overflow:hidden;margin:0 auto">
        ${He(L)?`<img src="${He(L)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(L.name||"").slice(0,12)}</div>
    </div>`;w.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${k(y,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${k(f,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(w);let S=!1;const E=()=>{S||(S=!0,w.remove(),setTimeout(()=>b(),50))};w.addEventListener("click",E),setTimeout(E,2200)}function ge(){var y;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",f.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${c[x+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(c[x+"Team"],c[x+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(f),(y=f.querySelector("#pvp-opp-close"))==null||y.addEventListener("click",()=>f.remove())}function de(){var v;const f=c.log||[],y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const b=w=>{var S,E,L;if(w.type==="duel"){const z=w.isGoal,M=w.homeScored&&n==="p1"||!w.homeScored&&z&&n==="p2",D=w.homeScored?"#FFD700":z?"#ff6b6b":"rgba(255,255,255,0.3)",Y=z?M?"⚽ BUT !":"⚽ BUT adversaire !":(S=w.homePlayers)!=null&&S.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${z?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${D};margin-bottom:4px">
          <div style="font-size:9px;color:${D};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Y}</div>
          ${(E=w.homePlayers)!=null&&E.length?`<div style="margin-bottom:3px">${it(w.homePlayers,"rgba(255,255,255,0.7)",w.homeTotal)}</div>`:""}
          ${(L=w.aiPlayers)!=null&&L.length?`<div style="opacity:0.7">${it(w.aiPlayers,"#ff6b6b",w.aiTotal)}</div>`:""}
        </div>`}return w.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${w.outPlayer?Xe({...w.outPlayer,used:!0,_line:w.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${w.inPlayer?Xe({...w.inPlayer,_line:w.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${w.type==="goal"?"#FFD700":w.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${w.text||""}</div>
      </div>`};y.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${f.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...f].reverse().map(b).join("")}
      </div>`,document.body.appendChild(y),(v=y.querySelector("#pvp-hist-close"))==null||v.addEventListener("click",()=>y.remove())}async function me(){if(c.phase!==n+"-attack")return;const f=n==="p1"?"p2":"p1",y=(c.round||0)+1,b=[...c.log||[]];b.push({type:"info",text:`⏭️ ${c[n+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const v=qe(c),w=Te(f),k=v||!w?"finished":f+"-attack";await K({["selected_"+n]:[],modifiers:{...c.modifiers,[n]:{}},pendingAttack:null,phase:k,attacker:f,round:y,log:b}),k==="finished"&&await Se(c)}async function ne(){const f=c[n+"Team"],y=!["GK","DEF","MIL","ATT"].some(k=>(c[x+"Team"][k]||[]).some(S=>!S.used)),b=(c["selected_"+n]||[]).map(k=>{const S=(f[k._role]||[]).find(Y=>Y.cardId===k.cardId)||k,E=y&&["GK","DEF"].includes(k._role),L=f[k._role]||[],z=L.findIndex(Y=>Y.cardId===k.cardId),M=dt(L.length),D=z>=0?M[z]:S._col??1;return{...S,_line:k._role,_col:D,...E?{note_a:Math.max(1,Number(S.note_a)||0)}:{}}});if(!b.length)return;const v=Ut(b,c.modifiers[n]||{});P(n,b.map(k=>k.cardId)),b.forEach(k=>{const S=(f[k._role]||[]).find(E=>E.cardId===k.cardId);S&&(S.used=!0)}),c["selected_"+n]=[],xe();const w=[...c.log||[]];if(y){const k=(c[n+"Score"]||0)+1,S=b.map(D=>({name:D.name,note:ze(D,D._line||"ATT"),portrait:He(D),job:D.job}));w.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:S,homeTotal:v.total,aiTotal:0});const E=(c.round||0)+1,L=n==="p1"?"p2":"p1",z={...c,[n+"Team"]:f,[n+"Score"]:k},M=qe(z);F.add(E),Ee(S,k,c[x+"Score"]||0,!0,async()=>{await K({[n+"Team"]:f,[n+"Score"]:k,["selected_"+n]:[],modifiers:{...c.modifiers,[n]:{}},pendingAttack:null,phase:M?"finished":L+"-attack",attacker:L,round:E,log:w}),M&&await Se({...c,[n+"Score"]:k})});return}w.push({type:"pending",text:`⚔️ ${c[n+"Name"]} attaque (${v.total})`}),await K({[n+"Team"]:f,[x+"Team"]:c[x+"Team"],pendingAttack:{...v,players:b,side:n},["selected_"+n]:[],modifiers:{...c.modifiers,[n]:{}},phase:x+"-defense",log:w})}async function ue(){const f=c[n+"Team"],y=(c["selected_"+n]||[]).map(G=>{const W=(f[G._role]||[]).find(be=>be.cardId===G.cardId)||G,te=f[G._role]||[],ee=te.findIndex(be=>be.cardId===G.cardId),fe=dt(te.length),ye=ee>=0?fe[ee]:W._col??1;return{...W,_line:G._role,_col:ye}}),b=Kt(y,c.modifiers[n]||{});P(n,y.map(G=>G.cardId)),y.forEach(G=>{const W=(f[G._role]||[]).find(te=>te.cardId===G.cardId);W&&(W.used=!0)}),c["selected_"+n]=[],xe();const v=Vt(c.pendingAttack.total,b.total,c.modifiers[n]||{}),w=c.pendingAttack.side,k=v==="attack"||(v==null?void 0:v.goal),S=w==="p1"?"p2":"p1",E=(c.round||0)+1,L=(c.pendingAttack.players||[]).map(G=>({name:G.name,note:ze(G,G._line||"ATT"),portrait:He(G),job:G.job})),z=[...c.log||[]];z.push({type:"duel",isGoal:k,homeScored:k&&w===n,text:k?`⚽ BUT de ${c[w+"Name"]} ! (${c.pendingAttack.total} vs ${b.total})`:`✋ Attaque stoppée (${c.pendingAttack.total} vs ${b.total})`,homePlayers:L,aiPlayers:y.map(G=>({name:G.name,note:ze(G,G._line||"DEF"),portrait:He(G),job:G.job})),homeTotal:c.pendingAttack.total,aiTotal:b.total});const M=k?(c[w+"Score"]||0)+1:c[w+"Score"]||0,D={...c,[n+"Team"]:f,[w+"Score"]:M},Y=qe(D),J=Y?"finished":S+"-attack",U=async()=>{await K({[n+"Team"]:f,[x+"Team"]:c[x+"Team"],[w+"Score"]:M,["selected_"+n]:[],modifiers:{...c.modifiers,[n]:{}},pendingAttack:null,phase:J,attacker:S,round:E,log:z}),(J==="finished"||Y)&&await Se({...c,[w+"Score"]:M})};if(k){const G=w===n,W=G?M:c[n+"Score"]||0,te=G?c[x+"Score"]||0:M;F.add(E),Ee(L,W,te,G,U)}else await U()}function Le(f){return["MIL","ATT"].some(y=>(f[y]||[]).some(b=>!b.used))}function Ie(f){return["GK","DEF","MIL","ATT"].some(y=>(f[y]||[]).some(b=>!b.used))}function Ce(f){return Ie(f)&&!Le(f)}function Te(f){const y=c[f+"Team"],b=c[(f==="p1"?"p2":"p1")+"Team"];return!!(Le(y)||!Ie(b)&&Ce(y))}function qe(f){const y=["MIL","ATT"].some(z=>(f.p1Team[z]||[]).some(M=>!M.used)),b=["MIL","ATT"].some(z=>(f.p2Team[z]||[]).some(M=>!M.used)),v=Ie(f.p1Team),w=Ie(f.p2Team);return!y&&!(!w&&v)&&(!b&&!(!v&&w))}function Pe(f){const y=f.p1Score||0,b=f.p2Score||0;return y===b?null:y>b?_.home_id:_.away_id}async function Se(f){try{const y=Pe(f),b=y?_.home_id===y?_.away_id:_.home_id:null,v=f.p1Score||0,w=f.p2Score||0;await T.from("matches").update({status:"finished",winner_id:y,home_score:v,away_score:w}).eq("id",i);const{data:k}=await T.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(k){await T.from("mini_league_matches").update({home_score:v,away_score:w,status:"finished"}).eq("id",k.id);const{data:S}=await T.from("mini_league_matches").select("id, status").eq("league_id",k.league_id).eq("matchday",k.matchday);if((S||[]).every(L=>L.status==="finished"||L.status==="bye")){const{data:L}=await T.from("mini_leagues").select("current_day,total_days").eq("id",k.league_id).single();if(L){const z=(L.current_day||0)+1,M=z>(L.total_days||0);await T.from("mini_leagues").update({current_day:M?L.total_days:z,status:M?"finished":"active"}).eq("id",k.league_id)}}}y&&b&&Ti(y,b).catch(()=>{})}catch(y){console.error("[ML] finishMatch:",y)}}function B(){var w;if(A&&document.getElementById("pvp-end-overlay"))return;A=!0;const f=c[n+"Score"],y=c[x+"Score"],b=f>y,v=f===y;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":v?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":v?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${f} - ${y}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(w=document.getElementById("pvp-home"))==null||w.addEventListener("click",()=>{try{T.removeChannel(V)}catch{}Ve(e),l("mini-league",s?{openLeagueId:s}:{})})}xe()}const lr="/",cr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function pr(e,t,i){let o=0;const d=document.createElement("div");d.id="tutorial-overlay",d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const a=()=>{var n,x,u;const l=t[o],p=o===t.length-1,s=Math.round((o+1)/t.length*100);d.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${s}%;background:${l.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${l.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${l.title}</div>
          <div style="font-size:11px;color:#aaa">${o+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${l.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${lr}icons/${l.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${l.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${l.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${o>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${p?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${l.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${p?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,d.querySelectorAll("ul,ol").forEach(h=>{h.style.paddingLeft="20px",h.style.marginTop="6px",h.style.marginBottom="6px"}),d.querySelectorAll("li").forEach(h=>{h.style.marginBottom="4px"}),d.querySelectorAll("p").forEach(h=>{h.style.marginBottom="8px"}),(n=d.querySelector("#tuto-prev"))==null||n.addEventListener("click",()=>{o--,a()}),(x=d.querySelector("#tuto-next"))==null||x.addEventListener("click",()=>{p?r():(o++,a())}),(u=d.querySelector("#tuto-skip"))==null||u.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{d.remove(),e!=null&&e.id&&await T.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(d),a()}async function ur(e,t,i){if(!e||e.tutorial_done)return;let o=[];const{data:d,error:a}=await T.rpc("get_tutorial_steps");if(!a&&(d==null?void 0:d.length)>0)o=d,console.log(`[Tutorial] RPC OK → ${o.length} étapes`);else{const{data:l,error:p}=await T.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!p&&(l==null?void 0:l.length)>0?(o=l,console.log(`[Tutorial] Direct OK → ${o.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${a==null?void 0:a.message}, Direct: ${p==null?void 0:p.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=o.length>0?o.map(l=>({emoji:l.emoji,title:l.title,color:l.color,content:l.content,image_url:l.image_url||null})):cr;pr(e,r,()=>t("boosters"))}const Xt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function zt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function fr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await zi(e,t)}async function zi(e,t){const{state:i,toast:o}=t,{data:d}=await T.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await T.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_encoded, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),r=(d||[]).filter(m=>m.seller_id!==i.profile.id),l=a||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${r.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
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
  </div>`;let p="buy";const s=()=>{var m,c,A,g,I,C,j;return{name:(((m=document.getElementById("flt-name"))==null?void 0:m.value)||"").toLowerCase().trim(),club:(((c=document.getElementById("flt-club"))==null?void 0:c.value)||"").toLowerCase().trim(),country:(((A=document.getElementById("flt-country"))==null?void 0:A.value)||"").toLowerCase().trim(),job:((g=document.getElementById("flt-job"))==null?void 0:g.value)||"",rarity:((I=document.getElementById("flt-rarity"))==null?void 0:I.value)||"",note1:parseInt((C=document.getElementById("flt-note1"))==null?void 0:C.value)||0,note2:parseInt((j=document.getElementById("flt-note2"))==null?void 0:j.value)||0}};function n(m){const c=s();return m.filter(A=>{var V,K,oe;const g=(V=A.card)==null?void 0:V.player;if(!g)return!1;const I=`${g.firstname} ${g.surname_encoded}`.toLowerCase(),C=(((K=g.clubs)==null?void 0:K.encoded_name)||"").toLowerCase(),j=(g.country_code||"").toLowerCase(),F=((oe=A.card)==null?void 0:oe.evolution_bonus)||0,q=zt(g,g.job,F),N=g.job2?zt(g,g.job2,F):0;return!(c.name&&!I.includes(c.name)||c.club&&!C.includes(c.club)||c.country&&!j.includes(c.country)||c.job&&g.job!==c.job||c.rarity&&g.rarity!==c.rarity||c.note1&&q<c.note1||c.note2&&N<c.note2)})}function x(m){var N,V,K,oe;const c=(N=m.card)==null?void 0:N.player;if(!c)return"";const A=((V=m.card)==null?void 0:V.evolution_bonus)||0,g=zt(c,c.job,A),I=c.job2?zt(c,c.job2,A):0,C=(i.profile.credits||0)>=m.price,j=c.country_code?`https://flagsapi.com/${c.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,F=Xt[c.job]||"#bbb",q=c.job2?Xt[c.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${j?`<img src="${j}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(K=c.clubs)!=null&&K.logo_url?`<img src="${c.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${F};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${F};font-family:Arial Black,Arial">${g}</span>
        </div>
        ${I?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${q};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${q};font-family:Arial Black,Arial">${I}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${c.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.surname_encoded}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((oe=m.seller)==null?void 0:oe.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${m.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${m.id}" ${C?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${C?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function u(m){var N,V,K,oe;const c=(N=m.card)==null?void 0:N.player;if(!c)return"";const A=((V=m.card)==null?void 0:V.evolution_bonus)||0,g=zt(c,c.job,A),I=c.job2?zt(c,c.job2,A):0,C=m.status==="sold",j=c.country_code?`https://flagsapi.com/${c.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,F=Xt[c.job]||"#bbb",q=c.job2?Xt[c.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${C?"opacity:0.7":""}">
      ${j?`<img src="${j}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(K=c.clubs)!=null&&K.logo_url?`<img src="${c.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${F};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${F};font-family:Arial Black,Arial">${g}</span>
        </div>
        ${I?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${q};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${q};font-family:Arial Black,Arial">${I}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${c.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.surname_encoded}</div>
        <div style="font-size:10px;color:${C?"#22c55e":"#999"};margin-top:1px">
          ${C?`✅ Vendu à ${((oe=m.buyer)==null?void 0:oe.pseudo)||"—"} · ${m.sold_at?new Date(m.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(m.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${m.price.toLocaleString("fr")}</div>
        ${C?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${m.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function h(){const m=document.getElementById("mkt-content"),c=document.getElementById("mkt-filters");if(m){if(c.style.display=p==="buy"?"flex":"none",p==="buy"){const A=n(r);m.innerHTML=A.length?A.map(x).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const A=l.filter(I=>I.status==="active").sort((I,C)=>new Date(C.listed_at)-new Date(I.listed_at)),g=l.filter(I=>I.status==="sold").sort((I,C)=>new Date(C.sold_at||C.listed_at)-new Date(I.sold_at||I.listed_at));m.innerHTML=(A.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${A.length})</div>`+A.map(u).join(""):"")+(g.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${g.length})</div>`+g.map(u).join(""):"")+(!A.length&&!g.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}m.querySelectorAll("[data-buy]").forEach(A=>A.addEventListener("click",()=>gr(A.dataset.buy,r,e,t))),m.querySelectorAll("[data-cancel]").forEach(A=>A.addEventListener("click",()=>xr(A.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(m=>{m.addEventListener("click",()=>{p=m.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(c=>{const A=c===m;c.style.background=A?"var(--green)":"#fff",c.style.color=A?"#fff":"var(--gray-600)",c.style.borderColor=A?"var(--green)":"var(--gray-200)"}),h()})});let _;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(m=>{var c;(c=document.getElementById(m))==null||c.addEventListener("input",()=>{clearTimeout(_),_=setTimeout(h,250)})}),h()}async function gr(e,t,i,o){const{state:d,toast:a,refreshProfile:r}=o,l=t.find(n=>n.id===e);if(!l)return;const p=l.price;if((d.profile.credits||0)<p){a("Crédits insuffisants","error");return}mr(l,async()=>{const{error:n}=await T.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(n){a("Erreur achat : "+n.message,"error");return}await r();const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),a("✅ Carte achetée !","success"),await zi(i,o)})}function mr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,o=i?`${i.firstname} ${i.surname_encoded}`:"cette carte",d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",d.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${o} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(d);const a=l=>{d.remove(),l&&t()};d.querySelector("#buy-cancel").addEventListener("click",()=>a(!1)),d.querySelector("#buy-ok").addEventListener("click",()=>a(!0)),d.addEventListener("click",l=>{l.target===d&&a(!1)})}async function xr(e,t,i){const{toast:o}=i,{data:d}=await T.from("market_listings").select("card_id").eq("id",e).single();if(await T.from("market_listings").update({status:"cancelled"}).eq("id",e),d!=null&&d.card_id){const{count:a}=await T.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",d.card_id).eq("status","active");a||await T.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id)}o("Annonce retirée","success"),zi(t,i)}async function yr(e,t){var n,x,u,h;const{state:i,navigate:o}=t,d=((x=(n=t==null?void 0:t.state)==null?void 0:n.params)==null?void 0:x.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:r}]=await Promise.all([T.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),T.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let l=d;function p(){var m,c;const _=document.getElementById("rankings-list");if(_){if(l==="global"){const A=a||[];_.innerHTML=A.length>0?A.map((g,I)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${g.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${I<3?["#D4A017","#a0a0a0","#cd7f32"][I]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${I<3?"16":"13"}px">${I<3?["🥇","🥈","🥉"][I]:I+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${g.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${g.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${g.trophies_top1} 🥈${g.trophies_top2} 🥉${g.trophies_top3}</div>
            <div style="color:var(--gray-600)">${g.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const A=r||[];_.innerHTML=A.length>0?A.map((g,I)=>{const C=Gt(g.mmr??1e3),j=(g.ranked_wins||0)+(g.ranked_losses||0)+(g.ranked_draws||0),F=j>0?Math.round((g.ranked_wins||0)/j*100):0,q=g.id===i.profile.id,N=(g.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${q?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${I<3?["#D4A017","#a0a0a0","#cd7f32"][I]:"rgba(255,255,255,0.08)"};color:${I<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${I<3?"16":"13"}px">${I<3?["🥇","🥈","🥉"][I]:I+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${C.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${g.club_name} · ${C.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${N?"❓":C.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${C.color}">${N?"Placement":C.label}</div>
              ${N?"":`<div style="font-size:10px;color:var(--gray-600)">${F}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(m=document.getElementById("tab-global"))!=null&&m.style&&(document.getElementById("tab-global").style.cssText=s(l==="global")),(c=document.getElementById("tab-ranked"))!=null&&c.style&&(document.getElementById("tab-ranked").style.cssText=s(l==="ranked"))}}const s=_=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${_?"900":"400"};background:${_?"var(--green)":"rgba(255,255,255,0.06)"};color:${_?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-global" style="${s(l==="global")}">🌍 Global</button>
        <button id="tab-ranked" style="${s(l==="ranked")}">⚔️ Ranked</button>
      </div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,p(),(u=document.getElementById("tab-global"))==null||u.addEventListener("click",()=>{l="global",p()}),(h=document.getElementById("tab-ranked"))==null||h.addEventListener("click",()=>{l="ranked",p()})}async function br(e,t){var F,q,N,V;const{state:i,navigate:o,toast:d}=t,a=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:l}]=await Promise.all([T.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),T.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",a.id).single()]);if(!l){d("Erreur chargement profil","error"),o("home");return}if(!r){e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(160deg,#1a1a1a,#2a2a2a);padding:16px;display:flex;flex-direction:column;gap:16px">
      <div style="display:flex;align-items:center;gap:10px">
        <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
        <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;padding:40px">
        <div style="font-size:64px">⏸️</div>
        <div style="font-size:20px;font-weight:900;color:#fff">Ranked en pause</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.5);max-width:260px">Aucune saison n'est active pour le moment. Revenez bientôt !</div>
      </div>
    </div>`,(F=document.getElementById("ranked-back"))==null||F.addEventListener("click",()=>o("home"));return}const p=l.mmr??1e3,s=l.mmr_deviation??350,n=l.mmr_volatility??.06,x=l.placement_matches??0,u=x<10,h=Math.max(0,10-x),_=Gt(p),m=bn(p),c=di.findIndex(K=>K.id===_.id),A=di[c+1]||null,g={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},I=(l.ranked_wins||0)+(l.ranked_losses||0)+(l.ranked_draws||0),C=I>0?Math.round((l.ranked_wins||0)/I*100):0,j=di.map(K=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${_.id===K.id?1:.35};
      transform:${_.id===K.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${_.id===K.id?"28px":"20px"}">${K.emoji}</div>
      <div style="font-size:9px;color:${K.color};font-weight:${_.id===K.id?"900":"400"};letter-spacing:0.5px">${K.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${g[_.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${_.color}40">
      <div style="font-size:52px;margin-bottom:4px">${_.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${_.color};letter-spacing:3px;text-transform:uppercase">${_.label}</div>
    </div>

    <!-- Progression bar -->
    ${_.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${_.emoji} ${_.label}</span>
        ${A?`<span>${A.emoji} ${A.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${m}%;background:linear-gradient(90deg,${_.color},${_.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${m}% vers ${A?A.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${j}
    </div>

    <!-- Placement / Stats -->
    ${u?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${x}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${h} match${h>1?"s":""} — gains et pertes ×2</div>
    </div>`:`
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#1A6B3C">${l.ranked_wins||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Victoires</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#888">${l.ranked_draws||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Nuls</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#bb2020">${l.ranked_losses||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Défaites</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#D4A017">${C}%</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Win rate</div>
      </div>
    </div>`}

    <!-- Saison info -->
    ${r?`
    <div style="background:rgba(0,0,0,0.25);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:12px;color:rgba(255,255,255,0.6)">📅 ${r.name}</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.4)">Fin : ${new Date(r.end_at).toLocaleDateString("fr",{day:"numeric",month:"short"})}</div>
    </div>`:""}

    <!-- Bouton jouer -->
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto;padding-top:8px">
      <button id="ranked-play-btn" style="width:100%;padding:18px;border-radius:16px;border:none;
        background:linear-gradient(135deg,${_.color},${_.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${_.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(q=document.getElementById("ranked-back"))==null||q.addEventListener("click",()=>o("home")),(N=document.getElementById("ranked-leaderboard-btn"))==null||N.addEventListener("click",()=>o("rankings",{tab:"ranked"})),(V=document.getElementById("ranked-play-btn"))==null||V.addEventListener("click",()=>{o("match",{matchMode:"ranked",rankedData:{mmr:p,rd:s,sigma:n,isPlacement:u}})})}async function hr(e,{state:t,navigate:i,toast:o}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await T.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(a||[]).filter(n=>n.status==="finished"),p=(a||[]).filter(n=>n.status==="in_progress");function s(n){const x=n.home_id===d.id;x?n.home_score:n.away_score,x?n.away_score:n.home_score;const u=n.winner_id===d.id,h=n.home_score===n.away_score&&n.status==="finished",_=n.status!=="finished"?"…":h?"N":u?"V":"D",m=n.status!=="finished"||h?"#888":u?"#1A6B3C":"#c0392b";let c=r[n.mode]||n.mode;n.away_id===null&&!c.startsWith("IA")&&(c="IA");const g=n.home_id===d.id?n.away:n.home;let I;n.away_id===null?I=c:g?I=`${g.club_name||g.pseudo} (${g.pseudo})`:I="Adversaire";let C="";n.status==="in_progress"&&Date.now()-new Date(n.created_at).getTime()>3600*1e3&&(C=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const j=new Date(n.created_at),F=j.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+j.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),q=n.status==="finished"?`${n.home_score} - ${n.away_score}`:`${n.home_score||0} - ${n.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${I}${C}</div>
        <div style="font-size:11px;color:var(--gray-600)">${c} · ${F}${n.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${q}</span>
        <span style="background:${m};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${_}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(a||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${p.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${p.map(s).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(s).join("")}
        </div>`:""}

      ${(a||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}hn(wn);const De={user:null,profile:null,page:"home",params:{}};function At(e,t="info",i=3e3){const o=document.getElementById("toast");o&&(o.textContent=e,o.className=`show ${t}`,clearTimeout(o._t),o._t=setTimeout(()=>{o.className=""},i))}function vr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function wi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Ft(){if(!De.user)return;const{data:e}=await T.from("users").select("*").eq("id",De.user.id).single();e&&(De.profile=e)}function Pt(e,t={}){De.page=e,De.params=t,xn()}async function xn(){var o,d,a,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===De.page)});const t=document.getElementById("nav-credits");t&&De.profile&&(t.textContent=`💰 ${(De.profile.credits||0).toLocaleString("fr")}`);const i={state:De,navigate:Pt,toast:At,openModal:vr,closeModal:wi,refreshProfile:Ft};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',De.page){case"home":await Ci(e,i);break;case"collection":await Xn(e,i);break;case"decks":await mi(e,i);break;case"boosters":await co(e,i);break;case"ranked":await br(e,i);break;case"match":{const l=De.params&&De.params.matchMode||"vs_ai_easy";l==="random"?await hi(e,i,!1):l==="ranked"?await hi(e,i,!0):l==="friend"?await Ko(e,i,(o=De.params)==null?void 0:o.friendId,(d=De.params)==null?void 0:d.friendName):l==="mini-league"?await Hi(e,i,(a=De.params)==null?void 0:a.mlMatchId,(r=De.params)==null?void 0:r.leagueId):await Eo(e,i);break}case"market":await fr(e,i);break;case"rankings":await yr(e,i);break;case"matches":await hr(e,i);break;case"friends":await zn(e,i);break;case"mini-league":await Wo(e,i);break;case"match-mini-league":{const l=De.params||{};await Hi(e,i,l.mlMatchId,l.leagueId);break}default:await Ci(e,i)}}function wr(){var o;const e=document.getElementById("app"),t=De.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(d=>{d.addEventListener("click",a=>{a.preventDefault(),Pt(d.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Pt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Pt("boosters")),(o=document.getElementById("journal-btn"))==null||o.addEventListener("click",()=>_r())}async function _r(){const{data:e}=await T.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(o=>{const d=new Date(o.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${o.image_url?`<img src="${o.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${d}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${o.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${o.description}</div>
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",o=>{o.target===t&&t.remove()})}async function $r(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&wi()}),document.getElementById("modal-close").addEventListener("click",wi);const{data:{session:e}}=await T.auth.getSession();if(!e){Ui(),Ii(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At});return}De.user=e.user,await Ft(),Ui();try{const{data:i}=await T.from("formation_links_overrides").select("formation, links"),o={};(i||[]).forEach(d=>{o[d.formation]=d.links}),vn(o)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!De.profile){$n(document.getElementById("app"),{state:De,navigate:async()=>{await Ft(),fi()},toast:At,refreshProfile:Ft});return}const t=Array.isArray(De.profile.pending_boosters)?De.profile.pending_boosters:[];if(!De.profile.onboarding_done&&t.length>0){bo(document.getElementById("app"),{state:De,navigate:()=>fi(),toast:At,refreshProfile:Ft});return}fi(),setTimeout(()=>ur(De.profile,Pt,At),800),T.auth.onAuthStateChange(async(i,o)=>{i==="SIGNED_OUT"&&(De.user=null,De.profile=null,document.getElementById("app").innerHTML="",Ii(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At}))})}function kr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function si(){const e=document.getElementById("app");e&&(e.style.height=kr()+"px")}window.addEventListener("resize",si);window.addEventListener("orientationchange",()=>setTimeout(si,150));window.visualViewport&&window.visualViewport.addEventListener("resize",si);function fi(){const e=()=>{var i;(i=De.user)!=null&&i.id&&T.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",De.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",si(),wr(),xn()}function Ui(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function yn(e){var o;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(o=document.getElementById("boot-retry"))==null||o.addEventListener("click",()=>window.location.reload())}$r().catch(e=>{console.error("Échec du démarrage:",e),yn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&yn("Le serveur met trop de temps à répondre.")},12e3);
