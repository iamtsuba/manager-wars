const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-TDtFd05S.js","assets/formation-links-DCm4yyf6.css"])))=>i.map(i=>d[i]);
import{s as w,F as li,r as Ie,j as At,l as Hi,m as Ct,h as ci,n as hn,o as vn,T as Yt,k as wn,p as _n,b as kn}from"./formation-links-TDtFd05S.js";const $n="/";function Mi(e,{navigate:t,toast:i}){let n="login";const a=()=>{var r,s,l,c,d,u;const o=n==="login";e.innerHTML=`
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
        <img src="${$n}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
            flex:1;padding:16px;border:none;background:${o?"rgba(26,107,60,0.3)":"transparent"};
            color:${o?"#fff":"rgba(255,255,255,0.4)"};
            font-size:14px;font-weight:${o?"900":"600"};cursor:pointer;
            border-bottom:2px solid ${o?"#22c55e":"transparent"};
            transition:all .2s;
          ">Connexion</button>
          <button id="tab-reg-btn" style="
            flex:1;padding:16px;border:none;background:${o?"transparent":"rgba(26,107,60,0.3)"};
            color:${o?"rgba(255,255,255,0.4)":"#fff"};
            font-size:14px;font-weight:${o?"600":"900"};cursor:pointer;
            border-bottom:2px solid ${o?"transparent":"#22c55e"};
            transition:all .2s;
          ">Inscription</button>
        </div>

        <div style="padding:24px">
          ${o?`
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",a()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",a()}),o?((l=document.getElementById("login-password"))==null||l.addEventListener("keydown",g=>{var m;g.key==="Enter"&&((m=document.getElementById("login-btn"))==null||m.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const g=document.getElementById("login-email").value.trim(),m=document.getElementById("login-password").value,f=document.getElementById("login-error");if(f.textContent="",!g||!m){f.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:x}=await w.auth.signInWithPassword({email:g,password:m});if(p.textContent="⚽ Se connecter",p.disabled=!1,x){f.textContent=x.message.includes("Invalid")?"Email ou mot de passe incorrect.":x.message;return}window.location.reload()})):((d=document.getElementById("reg-confirm"))==null||d.addEventListener("keydown",g=>{var m;g.key==="Enter"&&((m=document.getElementById("reg-btn"))==null||m.click())}),(u=document.getElementById("reg-btn"))==null||u.addEventListener("click",async()=>{const g=document.getElementById("reg-email").value.trim(),m=document.getElementById("reg-password").value,f=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!g||!m||!f){p.textContent="Remplissez tous les champs.";return}if(m.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(m!==f){p.textContent="Les mots de passe ne correspondent pas.";return}const x=document.getElementById("reg-btn");x.textContent="⏳ Création…",x.disabled=!0;const{error:b}=await w.auth.signUp({email:g,password:m});if(x.textContent="🚀 Créer mon compte",x.disabled=!1,b){p.textContent=b.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",a(),setTimeout(()=>{const v=document.getElementById("login-email");v&&(v.value=g)},50)}))};a()}function En(e,{state:t,navigate:i,toast:n,refreshProfile:a}){let o="#1A6B3C",r="#D4A017";e.innerHTML=`
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

        <div class="club-logo-preview" id="logo-preview" style="background:${r};border-color:${o}">
          <span id="logo-initials" style="color:${o}">MW</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="color-swatch" id="swatch1" style="background:${o};width:40px;height:40px;border-radius:50%;border:2px solid #ddd;cursor:pointer"></div>
            <div style="flex:1">
              <label style="font-size:12px">Couleur du contour</label>
              <input type="color" id="color1" value="${o}" style="width:100%;height:36px;padding:2px;border-radius:6px">
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
  `;function s(){var f;const c=document.getElementById("logo-preview"),d=document.getElementById("logo-initials"),u=((f=document.getElementById("setup-club"))==null?void 0:f.value)||"MW",g=u.trim().split(" ").filter(Boolean),m=g.length>=2?(g[0][0]+g[1][0]).toUpperCase():u.slice(0,2).toUpperCase();c&&(c.style.background=r,c.style.borderColor=o),d&&(d.textContent=m,d.style.color=o)}document.getElementById("color1").addEventListener("input",c=>{o=c.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",c=>{r=c.target.value,document.getElementById("swatch2").style.background=r,s()});function l(c){document.querySelectorAll(".setup-step").forEach(d=>d.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("step1-error");if(d.textContent="",c.length<3){d.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await w.from("users").select("id").eq("pseudo",c).maybeSingle();if(u){d.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),d=document.getElementById("step2-error");if(d.textContent="",c.length<2){d.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await w.from("users").select("id").eq("club_name",c).maybeSingle();if(u){d.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),g=document.getElementById("step3-finish");u.textContent="",g.disabled=!0,g.textContent="Création en cours…";try{const{error:m}=await w.from("users").insert({id:t.user.id,pseudo:c,club_name:d,club_color1:o,club_color2:r,credits:1e4});if(m)throw m;await Ln(t.user.id),await a(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(m){u.textContent=m.message,g.disabled=!1,g.textContent="🚀 Créer mon profil !"}})}async function Ln(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await w.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Tn="modulepreload",zn=function(e){return"/"+e},Si={},Ui=function(t,i,n){let a=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));a=Promise.allSettled(i.map(l=>{if(l=zn(l),l in Si)return;Si[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Tn,c||(u.as="script"),u.crossOrigin="",u.href=l,s&&u.setAttribute("nonce",s),document.head.appendChild(u),c)return new Promise((g,m)=>{u.addEventListener("load",g),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return a.then(r=>{for(const s of r||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},zt="#1A6B3C",It="#cc2222",In="#D4A017",Ai="#888";async function Mn(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Ki(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>An(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Vi(i,n,null,t))}async function Ki(e,t,i={}){const{navigate:n}=i,a=e.user.id,{data:o,error:r}=await w.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${a},addressee_id.eq.${a}`),{count:s}=await w.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",a).eq("status","pending"),l=document.getElementById("pending-badge");l&&(s>0?(l.style.display="flex",l.textContent=s):l.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(r){console.error("[Friends] Erreur:",r),c.innerHTML=`<div style="color:${It};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const d=(o||[]).map(m=>m.requester_id===a?m.addressee_id:m.requester_id);let u={};if(d.length){const{data:m}=await w.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",d);(m||[]).forEach(f=>{u[f.id]=f})}const g=(o||[]).map(m=>({friendshipId:m.id,friend:u[m.requester_id===a?m.addressee_id:m.requester_id]||{pseudo:"?"}}));if(!g.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${g.length} ami${g.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${g.map(({friendshipId:m,friend:f})=>Sn(f,m)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(m=>{m.addEventListener("click",()=>Cn(e,m.dataset.stats,m.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.friendId,p=m.dataset.friendName;console.log("[Friends] clic match",{fid:f,fname:p,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:f,friendName:p}):t("Erreur navigation","error")})})}function Sn(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",a=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||zt,r=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,l=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${o};border:2.5px solid ${r};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${r}">
          ${a}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${l?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${n}</div>
        <div style="font-size:11px;color:${l?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${l?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${In};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function An(e,t){const i=pi();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${It};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${ui()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),a=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",r=>{r.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){a.textContent="Entre un pseudo";return}a.textContent="";const{data:s}=await w.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!s){a.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){a.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await w.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(l){const d=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";a.textContent=d;return}const{error:c}=await w.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(c){a.textContent="Erreur : "+c.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Vi(e,t,i=null,n={}){const a=e.user.id,{data:o}=await w.from("friendships").select("id, requester_id").eq("addressee_id",a).eq("status","pending").order("created_at",{ascending:!1}),r=(o||[]).map(g=>g.requester_id);let s={};if(r.length){const{data:g}=await w.from("users").select("id, pseudo, club_name").in("id",r);(g||[]).forEach(m=>{s[m.id]=m})}const l=(o||[]).map(g=>({...g,requester:s[g.requester_id]||{pseudo:"?"}})),c=pi(),d=l||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${d.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${d.map(g=>{var m,f,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((m=g.requester)==null?void 0:m.club_name)||((f=g.requester)==null?void 0:f.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=g.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${g.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${zt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${g.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${It};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ui()}`,document.body.appendChild(c);const u=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",u),c.addEventListener("click",g=>{g.target===c&&u()}),c.querySelectorAll("[data-accept]").forEach(g=>{g.addEventListener("click",async()=>{const{error:m}=await w.from("friendships").update({status:"accepted"}).eq("id",g.dataset.accept);if(m){t("Erreur : "+m.message,"error");return}g.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ki(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(g=>{g.addEventListener("click",async()=>{await w.from("friendships").delete().eq("id",g.dataset.decline),g.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Cn(e,t,i){const n=e.user.id,[a,o]=[n,t].sort(),r=n===a,{data:s}=await w.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",o).single(),l=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},d=r?c.wins_p1||0:c.wins_p2||0,u=r?c.wins_p2||0:c.wins_p1||0,g=c.draws||0,m=r?c.goals_p1||0:c.goals_p2||0,f=r?c.goals_p2||0:c.goals_p1||0,p=r?c.gc_used_p1||0:c.gc_used_p2||0,x=r?c.gc_used_p2||0:c.gc_used_p1||0,b=c.matches_total||0,v=($,y,j,E=zt,G=It)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${E}">${y}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${$}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${G}">${j}</div>
    </div>`,h=pi();h.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${b===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${v("Victoires",d,u)}
        ${v("Nuls",g,g,Ai,Ai)}
        ${v("Défaites",u,d)}
        ${v("Buts marqués",m,f)}
        ${v("Buts encaissés",f,m,It,zt)}
        ${v("GC utilisés ⚡",p,x,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${b} match${b>1?"s":""} joué${b>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ui()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",$=>{$.target===h&&h.remove()})}function pi(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ui(){return`
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
        background:${zt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const jn="2026.07.16-0056";async function Ci(e,{state:t,navigate:i,toast:n}){var o,r;const a=t.profile;a&&(e.innerHTML=`
  <style>
    .home-dark {
      min-height: 100%;
      background: radial-gradient(ellipse at 20% 50%, rgba(0,60,30,0.55) 0%, transparent 60%),
                  radial-gradient(ellipse at 80% 20%, rgba(0,40,80,0.4) 0%, transparent 55%),
                  linear-gradient(160deg, #0a0f0a 0%, #0d1a0f 40%, #080d08 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 16px 16px 80px;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .home-inner {
      width: 100%;
      max-width: 560px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .home-hero {
      background: linear-gradient(135deg, ${a.club_color1}cc, ${a.club_color2}88);
      border: 1.5px solid ${a.club_color2};
      border-radius: 16px;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    }
    .home-hero-info h3 { margin:0; font-size:17px; font-weight:900; color:#fff; }
    .home-hero-info .level { font-size:11px; color:rgba(255,255,255,0.7); letter-spacing:1px; text-transform:uppercase; margin-top:2px; }
    .home-hero-btn {
      width:38px; height:38px; border-radius:50%; border:none;
      background:rgba(255,255,255,0.15); cursor:pointer;
      display:flex; align-items:center; justify-content:center;
      transition: background .2s;
    }
    .home-hero-btn:hover { background:rgba(255,255,255,0.25); }
    .home-hero-btn img { width:22px; height:22px; object-fit:contain; }

    .ranked-tile {
      border-radius: 16px;
      background: linear-gradient(135deg, #2d0a6e 0%, #4a1a8a 50%, #6a28b8 100%);
      border: 1.5px solid rgba(122,40,184,0.6);
      box-shadow: 0 4px 20px rgba(122,40,184,0.3);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      transition: transform .15s, box-shadow .15s;
    }
    .ranked-tile:active { transform: scale(.97); }

    .play-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .play-tile {
      border-radius: 16px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      transition: transform .15s, background .15s;
      backdrop-filter: blur(4px);
    }
    .play-tile:hover { background: rgba(255,255,255,0.09); }
    .play-tile:active { transform: scale(.96); }
    .play-text-overlay { max-height: 26px !important; width: auto !important; }
    .ranked-tile .play-text-overlay { max-height: 34px !important; }
    .play-text-overlay { max-height: 28px !important; width: auto !important; }
    .ranked-tile .play-text-overlay { max-height: 36px !important; }

    .home-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      padding: 4px 0;
    }
    .home-logout-btn {
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px;
      color: rgba(255,255,255,0.5);
      font-size: 12px;
      padding: 6px 18px;
      cursor: pointer;
      transition: background .2s;
    }
    .home-logout-btn:hover { background: rgba(255,255,255,0.12); }
  </style>

  <div class="home-dark" id="home-dark">
    <div class="home-inner">

      <!-- Bannières dynamiques -->
      <div id="friend-requests-banner"></div>
      <div id="match-invite-banner"></div>
      <div id="ongoing-match-banner"></div>

      <!-- Hero / pseudo -->
      <div class="home-hero">
        <button class="home-hero-btn" id="nav-rankings">
          <img src="/icons/badge-trophy.png" alt="Classement" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'🏆',style:'font-size:20px'}))">
        </button>
        <div class="home-hero-info" style="flex:1">
          <h3>${a.pseudo}</h3>
          <div class="level">Niveau ${a.level} · ${a.club_name}</div>
        </div>
        <button class="home-hero-btn" id="nav-matches">
          <img src="/icons/badge-ball.png" alt="Matchs" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'⚽',style:'font-size:20px'}))">
        </button>
      </div>

      <!-- Ranked -->
      <div class="ranked-tile" data-action="ranked">
        <div class="play-badge-group">
          <img src="/icons/badge-ranked.png" alt="" class="play-icon" style="height:80px">
          <img src="/icons/badge-ranked-txt.png" alt="Ranked" class="play-text-overlay">
        </div>
      </div>

      <!-- Grille 2x2 -->
      <div class="play-grid">
        <div class="play-tile" data-action="match-ai">
          <div class="play-badge-group">
            <img src="/icons/badge-ai.png" alt="" class="play-icon" style="height:70px">
            <img src="/icons/badge-ai-txt.png" alt="Match IA" class="play-text-overlay">
          </div>
        </div>
        <div class="play-tile" data-action="match-random">
          <div class="play-badge-group">
            <img src="/icons/badge-random.png" alt="" class="play-icon" style="height:70px">
            <img src="/icons/badge-random-txt.png" alt="Match Random" class="play-text-overlay">
          </div>
        </div>
        <div class="play-tile" data-action="match-friend">
          <div class="play-badge-group">
            <img src="/icons/badge-vs.png" alt="" class="play-icon" style="height:70px">
            <img src="/icons/badge-vs-txt.png" alt="Match Friend" class="play-text-overlay">
          </div>
        </div>
        <div class="play-tile" data-action="mini-league">
          <div class="play-badge-group">
            <img src="/icons/badge-league.png" alt="" class="play-icon" style="height:70px">
            <img src="/icons/badge-league-txt.png" alt="Mini League" class="play-text-overlay">
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="home-footer">
        <button class="home-logout-btn" id="logout-btn">Déconnexion</button>
        ${a.is_admin?`
        <a href="/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${jn}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var u,g,m,f,p;const s=((u=window.visualViewport)==null?void 0:u.height)||window.innerHeight,l=((g=document.querySelector(".top-nav"))==null?void 0:g.offsetHeight)||56,c=((m=document.querySelector(".bottom-nav"))==null?void 0:m.offsetHeight)||60;if(e.querySelector(".home-inner")){const x=s-l-c;e.querySelector(".home-dark").style.minHeight=x+"px"}if(window.innerWidth<768){const x=((f=e.querySelector(".home-hero"))==null?void 0:f.offsetHeight)||60,b=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const v=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,h=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((N,ie)=>{var ee;return N+(((ee=document.getElementById(ie))==null?void 0:ee.offsetHeight)||0)},0),$=12*5,y=s-l-c-x-v-h-$-32,j=Math.max(80,Math.round(y*.28)),E=Math.max(160,Math.round(y*.72)),G=Math.floor((E-10)/2);b&&(b.style.minHeight=b.style.maxHeight=j+"px"),e.querySelectorAll(".play-tile").forEach(N=>{N.style.minHeight=N.style.height=G+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(N=>{N.style.height=Math.round(G*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const l=s.dataset.action;if(l==="match-ai"){Fn(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}if(l==="match-friend"){i("friends");return}if(l==="mini-league"){i("mini-league");return}if(l==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),window.location.reload()}),Wi(t,n),Dn(t,n,i),Yi(t,n,i))}async function Yi(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const a=e.profile.id,{data:o}=await w.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${a},away_id.eq.${a}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const r=o.map(l=>l.home_id===a?l.away_id:l.home_id).filter(Boolean);let s={};if(r.length){const{data:l}=await w.from("users").select("id, pseudo, club_name").in("id",r);(l||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=o.map(l=>{const c=l.home_id===a?l.away_id:l.home_id,d=s[c]||"Adversaire",u=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${u?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${d}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${u?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:d}=await w.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();d?i("match-mini-league",{mlMatchId:d.id,leagueId:d.league_id}):i("mini-league")}else{const{resumePvpMatch:d}=await Ui(async()=>{const{resumePvpMatch:u}=await Promise.resolve().then(()=>Uo);return{resumePvpMatch:u}},void 0);d(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{qn(async()=>{await Bn(l.dataset.abandon,l.dataset.opp,a),t("Match abandonné (défaite 3-0)","info"),Yi(e,t,i)})})})}async function Bn(e,t,i){const{data:n}=await w.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const a=n.home_id===i,o=a?0:3,r=a?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=r,s.phase="finished",s.forfeit=!0,await w.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:r,game_state:s}).eq("id",e)}function qn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Dn(e,t,i){var s,l,c,d;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:a}=await w.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!a){n.innerHTML="";return}const o=((s=a.inviter)==null?void 0:s.club_name)||((l=a.inviter)==null?void 0:l.pseudo)||"?",r=a.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:o})}),(d=document.getElementById("match-inv-decline"))==null||d.addEventListener("click",async()=>{await w.from("friend_match_invites").update({status:"declined"}).eq("id",a.id),n.innerHTML="",t("Invitation refusée","info")})}async function Wi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:a}=await w.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(a||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,r=n.slice(0,2).map(l=>{var c;return((c=l.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Vi(e,t,()=>Wi(e,t)))}function Fn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:380px">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${t.map(a=>`<div class="action-card" data-mode="${a.mode}" style="cursor:pointer"><div class="icon">${a.icon}</div><div class="label">${a.label}</div><div class="sub">${a.sub}</div></div>`).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(a=>{a.addEventListener("click",()=>{n(),e("match",{matchMode:a.dataset.mode})})})}const Se={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Be(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const ji=["ATT","MIL","DEF","GK"];function Xi(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let a=n+1;a<i;a++){const o=e[n],r=e[a];if(!o||!r)continue;const s=o._col!=null&&r._col!=null&&o._col===r._col,l=o._col!=null&&r._col!=null&&Math.abs(o._col-r._col)===1,c=ji.indexOf(o._line||o.job),d=ji.indexOf(r._line||r.job),u=Math.abs(c-d)===1;if(!((o._line||o.job)===(r._line||r.job)&&l||s&&u))continue;const f=o.country_code&&r.country_code&&o.country_code===r.country_code,p=o.club_id&&r.club_id&&o.club_id===r.club_id;f&&p?t+=2:(f||p)&&(t+=1)}return t}function fi(e,t={}){let i=0,n=0;e.forEach(s=>{const l=s._line||s.job,c=Number(l==="MIL"?s.note_m:s.note_a)||0,d=s.stadiumBonus&&(l==="MIL"||l==="ATT")?10:0;i+=t.doubleAttack?c*2:c,n+=(s.boost||0)+d});const a=i+n,o=Xi(e);let r=a+o;return t.stolenNote&&(r-=t.stolenNote),{base:a,links:o,total:Math.max(0,r)}}function gi(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job;let l=0;s==="GK"?l=Number(r.note_g)||0:s==="MIL"?l=Number(r.note_m)||0:l=Number(r.note_d)||0;const c=r.stadiumBonus&&(s==="GK"||s==="DEF"||s==="MIL")?10:0;return o+l+(r.boost||0)+c},0),n=Xi(e);let a=i+n;return t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function mi(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Ji(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const a=[...n].sort((r,s)=>{const l=t==="attack"?Be(r,"ATT"):r._line==="GK"?Be(r,"GK"):Be(r,"DEF");return(t==="attack"?Be(s,"ATT"):s._line==="GK"?Be(s,"GK"):Be(s,"DEF"))-l});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return a.slice(0,Math.min(o,a.length,3))}function Gn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}function Pn(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const a=Rn(i),o=Number(i[t])||0;if(o<=0)return 0;const r=i.note_min??1,s=i.note_max??10,c=(e.current_note??a)-a;return Math.min(s,Math.max(r,o+c))}function Rn(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}const Nn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Wt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Bt=["GK","DEF","MIL","ATT"],On=["Tous","GK","DEF","MIL","ATT"],Hn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Bi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Un(e){return e.length?e.reduce((t,i)=>Bi(i)>Bi(t)?i:t,e[0]):e[0]}function Kn(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Vn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Yn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Xt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Jt(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,a={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${Ie(a,{width:140})}
  </div>`}function qi(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Ie(e,{width:140})}
  </div>`}async function Wn(e,t){const{state:i,navigate:n,toast:a,openModal:o,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await w.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await w.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter(z=>z.card_type==="player"&&z.player),d=(s||[]).filter(z=>z.card_type==="game_changer"),u=(s||[]).filter(z=>z.card_type==="formation"),g=(s||[]).filter(z=>z.card_type==="stadium"),{data:m}=await w.from("gc_definitions").select("name,gc_type,color,effect,image_url"),f={};(m||[]).forEach(z=>{f[z.name]=z});const{data:p}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),x={};(p||[]).forEach(z=>{x[z.id]=z}),g.forEach(z=>{z.stadium_def&&(x[z.stadium_id]=z.stadium_def)});const b=Object.keys(li),v=Object.keys(Se),h={};c.forEach(z=>{const C=z.player.id;h[C]=(h[C]||0)+1}),new Set(Object.keys(h).map(z=>String(z)));const $=new Set(u.map(z=>z.formation)),y=new Set(d.map(z=>z.gc_type));let j="player",E="Tous",G="",N=!1;function ie(){return[...c].sort((z,C)=>{const F=Bt.indexOf(z.player.job),Y=Bt.indexOf(C.player.job);return F!==Y?F-Y:(z.player.surname_real||"").localeCompare(C.player.surname_real||"")})}function ee(){return[...l||[]].sort((z,C)=>{const F=Bt.indexOf(z.job),Y=Bt.indexOf(C.job);return F!==Y?F-Y:(z.surname_real||"").localeCompare(C.surname_real||"")})}function Z(){return ie().filter(z=>{const C=z.player,F=E==="Tous"||C.job===E,Y=!G||`${C.firstname} ${C.surname_real}`.toLowerCase().includes(G);return F&&Y})}function A(){return ee().filter(z=>{const C=E==="Tous"||z.job===E,F=!G||`${z.firstname} ${z.surname_real}`.toLowerCase().includes(G);return C&&F})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="player"?"var(--green)":"transparent"};
        color:${j==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="formation"?"var(--green)":"transparent"};
        color:${j==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="gc"?"var(--green)":"transparent"};
        color:${j==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${d.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${j==="stadium"?"#E87722":"transparent"};
        color:${j==="stadium"?"#E87722":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${g.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function _(){const z=document.getElementById("col-filters");z&&(j==="player"?(z.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${G}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${On.map(C=>`
            <button class="filter-btn" data-job="${C}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${C===E?"var(--green)":"var(--gray-200)"};
                background:${C===E?"var(--green)":"#fff"};
                color:${C===E?"#fff":"var(--gray-600)"}">
              ${C}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--gray-200)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",C=>{G=C.target.value.toLowerCase(),M()}),e.querySelectorAll(".filter-btn").forEach(C=>{C.addEventListener("click",()=>{E=C.dataset.job,_(),M()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,_(),M()})):(z.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--gray-200)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,_(),M()})))}function M(){const z=document.getElementById("col-grid");z&&(j==="player"?Le(z):j==="formation"?V(z):j==="stadium"?R(z):J(z))}function H(z,C,F,Y,U){const B=document.getElementById("col-grid"),O=document.getElementById("col-big");if(!B||!O)return;var ve=0;function we(){const be=window.innerWidth>=768,ge=document.getElementById("col-big"),ke=document.getElementById("col-grid");be&&ge&&(ge.style.minHeight="420px",ge.style.flex="1 1 auto"),be&&ke&&(ke.style.height=Math.round(310*.76+16)+"px",ke.style.flexShrink="0",ke.style.overflowX="auto",ke.style.overflowY="hidden",ke.style.alignItems="center",ke.style.padding="8px 16px"),O.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+C(z[ve])+"</div>";var $e=O.querySelector("[data-card-id],[data-form-id],[data-gc-id]");$e&&$e.addEventListener("click",function(){Y(z[ve])}),requestAnimationFrame(function(){var xe=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!xe||!O)){var Ce=O.clientHeight-8,qe=O.clientWidth-24,Ue=xe.offsetHeight,k=xe.offsetWidth;if(Ue>0&&k>0&&Ce>40){var L=be?2.2:1.6,I=Math.min(Ce/Ue,qe/k,L);xe.style.transform="scale("+I.toFixed(3)+")",xe.style.transformOrigin="top center"}}}),B.innerHTML=z.map(function(xe,Ce){var qe=Ce===ve,Ue="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(qe?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Ce+'" style="'+Ue+'">'+F(xe,qe)+"</div>"}).join(""),B.querySelectorAll(".col-mini-item").forEach(function(xe){xe.addEventListener("click",function(){ve=Number(xe.dataset.idx),we(),xe.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}we()}function le(z){var C=window.innerWidth>=768?.76:.54,F;if(!z||z._fake){var Y=z?z.player:null;if(!Y)return"";F=qi(Y)}else F=Jt(z,"");return'<div style="display:inline-block;zoom:'+C+';pointer-events:none;line-height:0">'+F+"</div>"}function se(z,C,F){C=C||100,F=F||140;var Y=At[z]||{},U={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},B=Math.max(3,Math.round(C*.06)),O=Object.entries(Y).map(function(we){var be=we[0],ge=we[1],ke=be.replace(/\d+$/,""),$e=U[ke]||"#888",xe=Math.round(ge.x*C),Ce=Math.round(ge.y*F);return'<circle cx="'+xe+'" cy="'+Ce+'" r="'+B+'" fill="'+$e+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),ve=Math.max(1,Math.round(C/50));return'<svg viewBox="0 0 '+C+" "+F+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+C+'" height="'+F+'" fill="#1A6B3C"/><rect x="'+Math.round(C*.2)+'" y="'+Math.round(F*.02)+'" width="'+Math.round(C*.6)+'" height="'+Math.round(F*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/><line x1="0" y1="'+Math.round(F*.5)+'" x2="'+C+'" y2="'+Math.round(F*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><ellipse cx="'+Math.round(C*.5)+'" cy="'+Math.round(F*.5)+'" rx="'+Math.round(C*.18)+'" ry="'+Math.round(F*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+ve+'"/><rect x="'+Math.round(C*.2)+'" y="'+Math.round(F*.82)+'" width="'+Math.round(C*.6)+'" height="'+Math.round(F*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+ve+'"/>'+O+"</svg>"}function ce(z,C,F){var Y=F>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+F+"</div>":"",U=C?'data-form-id="'+C.id+'"':"",B=z.length>7?14:z.length>5?16:19,O=!!C;return"<div "+U+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(O?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(O?"":"filter:grayscale(1);opacity:0.5")+'">'+Y+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(O?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+B+"px;font-weight:900;color:"+(O?"#1A6B3C":"#aaa")+';line-height:1">'+z+'</div></div><div style="flex:1;overflow:hidden;background:'+(O?"#1A6B3C":"#ccc")+'">'+se(z,140,220)+"</div></div>"}function de(z,C){var F=window.innerWidth>=768?.76:.54,Y=140,U=305,B=Math.round(U*.22),O=U-B,ve=z.length>7?10:13,we=se(z,Y,O),be=C?"1.5px solid #2a7a40":"1px solid #ddd",ge=C?"":"filter:grayscale(1);opacity:0.45;",ke=C?"#1A6B3C":"#bbb",$e="#fff";return'<div style="display:inline-block;zoom:'+F+';line-height:0;pointer-events:none"><div style="width:'+Y+"px;height:"+U+"px;border-radius:6px;border:"+be+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+ge+'"><div style="height:'+B+"px;background:"+ke+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+ve+"px;font-weight:900;color:"+$e+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(Y-4)+'px">'+z+'</span></div><div style="height:'+O+'px;overflow:hidden;flex-shrink:0">'+we+"</div></div></div>"}function Le(z){if(N){const C=A();if(!C.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const F=C.map(Y=>c.find(U=>U.player.id===Y.id)||{_fake:!0,player:Y,id:"fake-"+Y.id});H(F,Y=>Y._fake?qi(Y.player):Jt(Y,""),Y=>Y._fake?le({player:Y.player,id:"x",_fake:!0}):le(Y),Y=>{Y._fake||Di(Y,c,h,t)})}else{const C=Z();if(!C.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const F={};C.forEach(U=>{const B=U.player.id;F[B]||(F[B]=[]),F[B].push(U)});const Y=Object.values(F).map(U=>Un(U));H(Y,U=>{const B=h[U.player.id]||1,O=B>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${B}</div>`:"",we=c.filter(be=>be.player.id===U.player.id&&be.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Jt(U,O+we)},U=>le(U),U=>Di(U,c,h,t))}}function V(z){const C=N?b:[...$];if(!C.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const F=C.map(Y=>({formation:Y,card:u.find(U=>U.formation===Y)||null,owned:$.has(Y)}));H(F,({formation:Y,card:U,owned:B})=>ce(Y,B?U:null,B?u.filter(O=>O.formation===Y).length:0),({formation:Y,owned:U})=>de(Y,U),({card:Y,owned:U})=>{U&&Y&&Jn(Y,u,t,o)})}function J(z){const C=Object.keys(f),F=N?C.length?C:v:[...y];if(!F.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const Y=F.map(U=>({type:U,gc:Se[U]||{icon:"⚡",desc:""},def:f[U]||null,owned:y.has(U),card:d.find(B=>B.gc_type===U)||null}));H(Y,({type:U,gc:B,def:O,owned:ve,card:we})=>{var L;const be=ve?d.filter(I=>I.gc_type===U).length:0,ge=be>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${be}</div>`:"",ke=(O==null?void 0:O.gc_type)==="ultra_game_changer",$e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},xe={purple:"#b06ce0",light_blue:"#00d4ef"},Ce=$e[O==null?void 0:O.color]||$e.purple,qe=xe[O==null?void 0:O.color]||xe.purple,Ue=(O==null?void 0:O.effect)||B.desc||"",k=O!=null&&O.image_url?`/icons/${O.image_url}`:((L=O==null?void 0:O.club)==null?void 0:L.logo_url)||(O!=null&&O.country_code?`https://flagsapi.com/${O.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return ve&&we?`<div data-gc-id="${we.id}" data-gc-type="${U}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${qe};background:${Ce};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${qe}66;cursor:pointer">
          ${ge}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${U.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${U}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${ke?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${k?`<img src="${k}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${B.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${Ue.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${U}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${B.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:U,gc:B,def:O,owned:ve})=>{const we=window.innerWidth>=768?.76:.54,be={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ge={purple:"#9b59b6",light_blue:"#00bcd4"},ke=be[O==null?void 0:O.color]||be.purple,$e=ge[O==null?void 0:O.color]||ge.purple,xe=O!=null&&O.image_url?`/icons/${O.image_url}`:null;return ve?`<div style="display:inline-block;zoom:${we};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${ke};border:1px solid ${$e};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${U}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${xe?`<img src="${xe}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${B.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((O==null?void 0:O.effect)||B.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${we};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${B.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${U}</span></div></div>`},({type:U,owned:B,def:O})=>{B&&Xn(U,O,o)})}function R(z){const C="#E87722",F="/";if(!g.length){z.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const Y={};g.forEach(B=>{const O=B.stadium_id||"?";(Y[O]=Y[O]||[]).push(B)});const U=Object.entries(Y).map(([B,O])=>({sid:B,def:x[B]||null,count:O.length,card:O[0]}));H(U,({def:B,count:O})=>{var $e,xe;const ve=(B==null?void 0:B.name)||"?",we=(($e=B==null?void 0:B.club)==null?void 0:$e.encoded_name)||(B==null?void 0:B.country_code)||"—",be=B!=null&&B.image_url?`${F}icons/${B.image_url}`:((xe=B==null?void 0:B.club)==null?void 0:xe.logo_url)||(B!=null&&B.country_code?`https://flagsapi.com/${B.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ge=be?`<img src="${be}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',ke=O>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${O}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${C},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${C}66">
          ${ke}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ve}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${ge}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${we}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:B,count:O})=>{var $e,xe;const ve=window.innerWidth>=768?.76:.54,we=(B==null?void 0:B.name)||"?",be=(($e=B==null?void 0:B.club)==null?void 0:$e.encoded_name)||(B==null?void 0:B.country_code)||"—",ge=B!=null&&B.image_url?`${F}icons/${B.image_url}`:((xe=B==null?void 0:B.club)==null?void 0:xe.logo_url)||(B!=null&&B.country_code?`https://flagsapi.com/${B.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ke=ge?`<img src="${ge}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${ve};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${C},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${we}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${ke}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${be}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(z=>{z.addEventListener("click",()=>{j=z.dataset.tab,E="Tous",G="",N=!1,e.querySelectorAll(".col-tab-btn").forEach(C=>{const F=C.dataset.tab===j;C.style.borderBottomColor=F?"var(--green)":"transparent",C.style.color=F?"var(--green)":"var(--gray-600)"}),_(),M()})}),_(),M()}function Xn(e,t,i){const n=Se[e]||{icon:"⚡",desc:"Effet spécial."},a=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[t==null?void 0:t.color]||o.purple,l=r[t==null?void 0:t.color]||r.purple,c=(t==null?void 0:t.name)||e,d=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${l};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${a?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${c}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${d}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const qt=1e3;function Jn(e,t,i,n){var f,p,x;const{state:a,toast:o,closeModal:r,navigate:s,refreshProfile:l}=i,c=e.formation,d={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const b=At[c]||{},v=li[c]||[],h=290,$=360,y=20;function j(G){const N=b[G];return N?{x:N.x*h,y:N.y*$}:null}let E=`<svg width="${h}" height="${$}" viewBox="0 0 ${h} ${$}" xmlns="http://www.w3.org/2000/svg">`;for(const[G,N]of v){const ie=j(G),ee=j(N);!ie||!ee||(E+=`<line x1="${ie.x}" y1="${ie.y}" x2="${ee.x}" y2="${ee.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const G of Object.keys(b)){const N=j(G);if(!N)continue;const ie=G.replace(/\d+/,""),ee=d[ie]||"#555";E+=`<circle cx="${N.x}" cy="${N.y}" r="${y}" fill="${ee}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,E+=`<text x="${N.x}" y="${N.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ie}</text>`}return E+="</svg>",E}const g=t.filter(b=>b.formation===c);g.length;const m=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${u()}
    </div>
    <div style="background:#f0f8f0;border-radius:10px;padding:12px 14px">
      <div style="font-size:12px;font-weight:700;color:#1A6B3C;margin-bottom:4px">📌 Liens (GDD §7)</div>
      <div style="font-size:12px;color:#333;line-height:1.6">
        Deux joueurs <b>adjacents</b> (↔ horizontal ou ↕ vertical) partageant le même <b>pays</b> ou le même <b>club</b> donnent <b>+1</b> à l'action.
      </div>
    </div>
    ${clubsHTML}

    <!-- Marché (optionnel) -->
    ${m?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${qt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(f=document.getElementById("direct-sell-form-btn"))==null||f.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${qt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=g.find(h=>!h.is_for_sale)||g[0];if(!b){o("Aucune carte à vendre","error");return}await w.from("market_listings").delete().eq("card_id",b.id),await w.from("transfer_history").delete().eq("card_id",b.id);const{error:v}=await w.from("cards").delete().eq("id",b.id);if(v){o(v.message,"error");return}await w.from("users").update({credits:(a.profile.credits||0)+qt}).eq("id",a.profile.id),await l(),o(`+${qt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){o("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await w.from("market_listings").insert({seller_id:a.profile.id,card_id:e.id,price:b}),o("Carte mise en vente sur le marché !","success"),r(),s("collection")}),(x=document.getElementById("cancel-sell-form-btn"))==null||x.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),r(),s("collection")})}async function Di(e,t,i,n){var le,se,ce,de,Le;const{state:a,toast:o,openModal:r,closeModal:s,navigate:l,refreshProfile:c}=n,d=e.player,u=t.filter(V=>V.player.id===d.id),g=u.length,m=e.evolution_bonus||0,f=Math.max((Number(d.note_g)||0)+(d.job==="GK"||d.job2==="GK"?m:0),(Number(d.note_d)||0)+(d.job==="DEF"||d.job2==="DEF"?m:0),(Number(d.note_m)||0)+(d.job==="MIL"||d.job2==="MIL"?m:0),(Number(d.note_a)||0)+(d.job==="ATT"||d.job2==="ATT"?m:0)),p=d.rarity||"normal",{data:x}=await w.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",f).gte("note_max",f).order("note_min",{ascending:!1}).limit(1);((le=x==null?void 0:x[0])==null?void 0:le.price)??Hn[p];const b=d.rarity!=="legende";Yn(d);const v=((d.rarity==="pepite"||d.rarity==="papyte")&&e.current_note!=null?e.current_note:Xt(d,d.job))+m,h=d.rarity==="pepite"||d.rarity==="papyte",$=d.job2?(h?Pn(e,Kn(d.job2)):Xt(d,d.job2))+(Xt(d,d.job2)>0?m:0):null;Wt[d.job],d.job2&&Wt[d.job2];const y=Nn[d.rarity]||"#ccc";Vn[d.country_code]||d.country_code;const j=e.evolution_bonus||0,G=v+j,N=$||0,ie=N>0?N+j:0,ee=u.map(V=>V.id);let Z={};if(ee.length){const{data:V}=await w.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ee).order("transferred_at",{ascending:!0});(V||[]).forEach(J=>{Z[J.card_id]||(Z[J.card_id]=[]),Z[J.card_id].push(J)})}const A=V=>{const J=V.transferred_at?new Date(V.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",R=V.source==="booster"?"Booster":V.price?V.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${V.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${V.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${V.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${R}</div>
        <div style="font-size:11px;color:var(--gray-600)">${J}</div>
      </div>
    </div>`},_=ee.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${g>1?`(${g})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${u.map((V,J)=>{const R=Z[V.id]||[],z=V.is_for_sale,C=R.length?R[R.length-1]:null,Y=(d.rarity==="pepite"||d.rarity==="papyte")&&V.current_note!=null?` (☆${V.current_note})`:"";return`
            <div data-card-id="${V.id}" data-card-idx="${J}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${z?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${V.id}" ${z?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${J+1}${Y}${z?" 🏷️ En vente":""}</div>
                  ${C?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${C.club_name} · ${C.source==="booster"?"Booster":C.price?C.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${J}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${R.length?`${R.length} club${R.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${J}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${R.map(A).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${G}${d.job2&&N>0?` / ${ie}`:""}`:`Note actuelle : ${G}${d.job2&&N>0?` / ${ie}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${g<=1?"#ccc":"#1A6B3C"};border-color:${g<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${g<=1?"not-allowed":"pointer"}"
            ${g<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${b?`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${d.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";r(`${d.firstname} ${d.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${Ie({...d,_evolution_bonus:m},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${y}">${d.rarity.toUpperCase()}</div>
          ${d.rarity==="pepite"||d.rarity==="papyte"?`
          <div style="margin-top:6px;background:${y}18;border-left:3px solid ${y};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${y};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${d.rarity==="pepite"?"✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>":"✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>"}
              <br>Note actuelle : <b>${e.current_note??(d.rarity==="pepite"?d.note_min:d.note_max)??"—"}</b>
              &nbsp;·&nbsp; Min : <b>${d.note_min??"—"}</b>
              &nbsp;·&nbsp; Max : <b>${d.note_max??"—"}</b>
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${d.job}${d.job2?" / "+d.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",d.note_g],["DEF",d.note_d],["MIL",d.note_m],["ATT",d.note_a]].map(([V,J])=>{const R=Wt[V],z=V==="GK"?"#fff":R,C=V===d.job||V===d.job2,F=(Number(J)||0)+(C&&j>0?j:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${R};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${z};font-family:Arial Black,Arial;line-height:1">${F}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${z}">${V}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${g}</div>
        </div>
      </div>
    </div>
    ${_}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(se=document.getElementById("close-detail"))==null||se.addEventListener("click",s);let M=new Set;const H=()=>{const V=M.size,J=document.getElementById("sell-action-panel");if(!J)return;J.style.display=V>0?"block":"none",document.getElementById("sell-selected-count").textContent=V;const R=document.getElementById("evolve-btn");R&&(R.textContent=`⬆️ Évoluer ${V>1?"(+"+V+")":""}`)};document.querySelectorAll(".expl-check").forEach(V=>{V.addEventListener("change",()=>{const J=V.dataset.id;V.checked?M.add(J):M.delete(J);const R=V.closest(".exemplaire-row");R&&(R.style.borderColor=V.checked?"#1A6B3C":"#eee"),H()})}),document.querySelectorAll(".exemplaire-row").forEach(V=>{V.addEventListener("click",J=>{if(J.target.closest("button")||J.target.tagName==="INPUT")return;const R=V.querySelector(".expl-check");R&&!R.disabled&&(R.checked=!R.checked,R.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(V=>{V.addEventListener("click",J=>{J.stopPropagation();const R=document.querySelector(`.expl-hist[data-hist="${V.dataset.idx}"]`);R&&(R.style.display=R.style.display==="none"?"flex":"none")})}),(ce=document.getElementById("evolve-btn"))==null||ce.addEventListener("click",async()=>{if(g<=1)return;const V=[...M];if(!V.length)return;if(M.has(e.id)){const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",U.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(U),U.querySelector("#err-close").addEventListener("click",()=>U.remove()),U.addEventListener("click",B=>{B.target===U&&U.remove()});return}const J=V.filter(U=>U!==e.id),R=d.rarity==="legende"?2:1;if((J.length||1)*R,!(!J.length&&V.length===1&&V[0]===e.id)){if(!J.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(U=>{const B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",B.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${d.firstname} ${d.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${J.length}</strong> copie${J.length>1?"s":""} sacrifiée${J.length>1?"s":""}<br>
            📈 Note : <strong>${v+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${v+(e.evolution_bonus||0)+J.length*R}</strong>
            ${$&&$>0?`<br>📈 Note 2 : <strong>${$+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${$+(e.evolution_bonus||0)+J.length*R}</strong>`:""}
            ${d.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${R} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(B),B.querySelector("#sac-cancel").addEventListener("click",()=>{B.remove(),U(!1)}),B.querySelector("#sac-ok").addEventListener("click",()=>{B.remove(),U(!0)}),B.addEventListener("click",O=>{O.target===B&&(B.remove(),U(!1))})}))return;if(J.length){await w.from("market_listings").delete().in("card_id",J),await w.from("deck_cards").delete().in("card_id",J),await w.from("transfer_history").delete().in("card_id",J),await w.from("decks").update({stadium_card_id:null}).in("stadium_card_id",J);const{error:U}=await w.from("cards").delete().in("id",J);if(U){o("Erreur suppression : "+U.message,"error");return}}const C=(e.evolution_bonus||0)+J.length*R,{error:F}=await w.from("cards").update({evolution_bonus:C}).eq("id",e.id);if(F){o("Erreur évolution : "+F.message,"error");return}const Y=v+C;o(`⬆️ ${d.firstname} ${d.surname_real} : note ${v+e.evolution_bonus||v} → ${Y}${J.length?` · ${J.length} copie${J.length>1?"s":""} sacrifiée${J.length>1?"s":""}`:""} !`,"success",4e3),s(),l("collection")}),(de=document.getElementById("market-sell-btn"))==null||de.addEventListener("click",async()=>{var F;const V=[...M];if(!V.length){o("Sélectionne au moins un exemplaire","warning");return}const J=parseInt((F=document.getElementById("sell-market-price"))==null?void 0:F.value);if(!J||J<1){o("Prix invalide","error");return}const{error:R}=await w.from("cards").update({is_for_sale:!0,sale_price:J}).in("id",V);if(R){o(R.message,"error");return}const z=V.map(Y=>({seller_id:a.profile.id,card_id:Y,price:J,status:"active"})),{error:C}=await w.from("market_listings").insert(z);C&&console.warn("[Market] insert listings:",C.message),o(`${V.length} carte${V.length>1?"s":""} mise${V.length>1?"s":""} en vente à ${J.toLocaleString("fr")} cr. chacune !`,"success"),s(),l("collection")}),(Le=document.getElementById("cancel-sell-btn"))==null||Le.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),l("collection")})}const Gt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function ei(e,t){const{state:i,navigate:n,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header">
      <h2>Mes decks</h2>
      <p>${(o==null?void 0:o.length)||0} deck(s) · 11 titulaires + 5 remplaçants max</p>
    </div>
    <div class="page-body">
      <div style="display:grid;gap:10px">
        ${(o==null?void 0:o.length)>0?o.map(r=>`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!r)return;const{data:s,error:l}=await w.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(l){a(l.message,"error");return}a("Deck créé !","success"),Fi(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>Fi(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",r.dataset.name);if(!s||s===r.dataset.name)return;const{error:l}=await w.from("decks").update({name:s}).eq("id",r.dataset.rename);if(l){a(l.message,"error");return}a("Deck renommé !","success"),ei(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await w.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:s}=await w.from("decks").delete().eq("id",r.dataset.delete);if(s){a(s.message,"error");return}a("Deck supprimé.","success"),ei(e,t)})})}async function Fi(e,t,i){const{state:n,toast:a}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("*").eq("id",e).single(),{data:r}=await w.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await w.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),l=(r||[]).filter(b=>b.card_type==="player"&&b.player),c=(r||[]).filter(b=>b.card_type==="formation"),d=(s||[]).filter(b=>b.card_type==="stadium"),u=[...new Set(d.map(b=>b.stadium_id).filter(Boolean))];let g={};if(d.forEach(b=>{b.stadium_def&&b.stadium_id&&(g[b.stadium_id]=b.stadium_def)}),u.length&&Object.keys(g).length<u.length){const{data:b}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",u);(b||[]).forEach(v=>{g[v.id]=v})}const m=c.map(b=>b.formation).filter(Boolean),{data:f}=await w.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";m.length>0&&!m.includes(p)&&(p=m[0]);const x={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:l,formationCards:c,stadiumCards:d,stadDefMap:g,availableFormations:m};(f||[]).forEach(b=>{b.is_starter?x.slots[b.position]=b.card_id:x.subs.includes(b.card_id)||x.subs.push(b.card_id)}),et(t,x,i)}function et(e,t,i){var f,p;const{navigate:n}=i;Gt[t.formation];const a=Gi(t.formation),o=a.filter(x=>t.slots[x]).length,r=t.availableFormations.length>0?t.availableFormations:Object.keys(Gt),s=(f=t.stadiumCards)==null?void 0:f.find(x=>x.id===t.stadiumCardId),l=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.subs.map(x=>t.playerCards.find(b=>b.id===x)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${t.name}</h2>
        <p style="font-size:11px;margin:0">${o}/11 · ${t.subs.length}/5 rempl.</p>
      </div>
    </div>



    <!-- ── LAYOUT PC ─────────────────────────────────────── -->
    <div class="deck-pc-layout" style="display:none">
      <div style="display:flex;gap:0;min-height:600px">

        <!-- Remplaçants (colonne gauche) -->
        <div style="width:105px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;padding:12px 6px;gap:8px;border-right:1px solid rgba(255,255,255,0.1)">


          <!-- Remplaçants PC : colonne verticale -->
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;text-align:center;margin-top:8px">Remplaçants<br>(${t.subs.length}/5)</div>
          <div style="display:flex;flex-direction:column;gap:6px;align-items:center" id="subs-list">
            ${c.map(x=>{const b={...x.player,_evolution_bonus:x.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                ${Ie({...b,_evolution_bonus:b._evolution_bonus||0},{width:60,showStad:!0,stadDef:l})}
                <button data-remove-sub="${x.id}"
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
              ${s?(()=>{var v;const x=t.stadDefMap[s.stadium_id],b=((v=x==null?void 0:x.club)==null?void 0:v.logo_url)||null;return`<div style="width:100px;height:130px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                  ${b?`<img src="${b}" style="width:48px;height:48px;object-fit:contain">`:'<span style="font-size:36px">🏟️</span>'}
                  <span style="font-size:10px;font-weight:700;color:#E87722;text-align:center;padding:0 4px">${((x==null?void 0:x.name)||"Stade").slice(0,14)}</span>
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
            <div style="display:flex;gap:4px;align-items:center;flex-wrap:nowrap;overflow-x:auto" id="subs-list">
              ${c.map(x=>{const b={...x.player,_evolution_bonus:x.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                  ${Ie({...b,_evolution_bonus:b._evolution_bonus||0},{width:44,showStad:!0,stadDef:l})}
                  <button data-remove-sub="${x.id}"
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
              ${s?(()=>{var v;const x=t.stadDefMap[s.stadium_id],b=((v=x==null?void 0:x.club)==null?void 0:v.logo_url)||null;return`<div style="width:50px;height:65px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                  ${b?`<img src="${b}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:18px">🏟️</span>'}
                  <span style="font-size:14px;font-weight:700;color:#E87722;text-align:center;padding:0 2px">${((x==null?void 0:x.name)||"Stade").slice(0,10)}</span>
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
      <button class="btn btn-primary" id="save-deck" style="width:100%" ${o<11?"disabled":""}>
        ${o<11?`Placez encore ${11-o} joueur(s)`:"💾 Enregistrer le deck"}
      </button>
    </div>
  </div>`;const d=window.innerWidth>=900,u=e.querySelector(".deck-pc-layout"),g=e.querySelector(".deck-mobile-layout");u&&(u.style.display=d?"block":"none"),g&&(g.style.display=d?"none":"block"),Qn(e,t,a,i),e.querySelectorAll("#builder-back").forEach(x=>x.addEventListener("click",()=>n("decks")));const m=()=>{const{openModal:x,closeModal:b}=i,v=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${r.map(h=>`<div data-forma="${h}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${h===t.formation?"#1A6B3C":"#f0f0f0"};color:${h===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${h===t.formation?"#1A6B3C":"#ddd"}">${h}</div>`).join("")}
    </div>`;x("⚽ Choisir une formation",v),document.querySelectorAll("#modal-body [data-forma]").forEach(h=>{h.addEventListener("click",()=>{t.formation=h.dataset.forma;const $=Gi(t.formation),y={};$.forEach(j=>{t.slots[j]&&(y[j]=t.slots[j])}),t.slots=y,b(),et(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(x=>x.addEventListener("click",m)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(x=>x.addEventListener("click",()=>Zn(t,e,i))),e.querySelectorAll("#save-deck").forEach(x=>x.addEventListener("click",()=>io(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(x=>{x.addEventListener("click",()=>{t.subs=t.subs.filter(b=>b!==x.dataset.removeSub),et(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(x=>x.addEventListener("click",()=>to(t,e,i)))}function Qn(e,t,i,n){var h,$;const a=window.innerWidth>=900,o=e.querySelector(a?"#deck-field-pc":"#deck-field-mobile");if(!o)return;const r=(h=t.stadiumCards)==null?void 0:h.find(y=>y.id===t.stadiumCardId),s=r&&(($=t.stadDefMap)==null?void 0:$[r.stadium_id])||null,l=At[t.formation]||{},c=Hi(t.formation)||[],d={};for(const y of i){const j=t.slots[y],E=j?t.playerCards.find(G=>G.id===j):null;E!=null&&E.player?d[y]={...E.player,_evolution_bonus:E.evolution_bonus||0,face:E.player.face||null}:d[y]=null}const u=window.innerWidth>=900,g=u?window.innerWidth-280:window.innerWidth-20,m=u?Math.min(g,860):g,f=Math.round(u?m*.82:m*.85),p=u?84:44;let x="";for(const[y,j]of c){const E=l[y],G=l[j];if(!E||!G)continue;const N=E.x*m,ie=Math.round(.03*f+E.y*.85*f),ee=G.x*m,Z=Math.round(.03*f+G.y*.85*f),A=d[y],_=d[j],M=Ct(A,_);M==="#ff3333"||M==="#cc2222"?x+=`<line x1="${N.toFixed(1)}" y1="${ie.toFixed(1)}" x2="${ee.toFixed(1)}" y2="${Z.toFixed(1)}" stroke="${M}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(x+=`<line x1="${N.toFixed(1)}" y1="${ie.toFixed(1)}" x2="${ee.toFixed(1)}" y2="${Z.toFixed(1)}" stroke="${M}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,x+=`<line x1="${N.toFixed(1)}" y1="${ie.toFixed(1)}" x2="${ee.toFixed(1)}" y2="${Z.toFixed(1)}" stroke="${M}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let b="";const v=Math.round(p*657/507);for(const y of i){const j=l[y];if(!j)continue;const E=d[y],G=j.x*m;j.y*f;const N=Math.round(.03*f+j.y*(.85*f)),ie=Math.round(G-p/2),ee=Math.round(N-v/2);if(E){const Z=y.replace(/\d+/,""),A=s&&(s.club_id&&String(E.club_id)===String(s.club_id)||s.country_code&&E.country_code===s.country_code),_=Ie({...E,_evolution_bonus:E._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:Z});b+=`<div style="position:absolute;left:${ie}px;top:${ee}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${y}">
        <div style="position:relative">${A?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${_}</div>
      </div>`}else{const Z=y.replace(/\d+/,"");b+=`<div style="position:absolute;left:${ie}px;top:${ee}px;width:${p}px;height:${v}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${y}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${Z}</span>
      </div>`}}o.innerHTML=`
    <div style="position:relative;width:${m}px;height:${f}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${m} ${f}">${x}</svg>
      ${b}
    </div>`,o.querySelectorAll(".deck-slot-hit").forEach(y=>{y.addEventListener("click",()=>eo(y.dataset.pos,t,e,n))})}function Zn(e,t,i){var r;const{openModal:n,closeModal:a}=i,o=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${o.map(s=>{var b,v;const l=e.stadDefMap[s.stadium_id],c=((b=l==null?void 0:l.club)==null?void 0:b.logo_url)||null,d=l!=null&&l.image_url?"/icons/"+l.image_url:null,u=e.stadiumCardId===s.id,g=l!=null&&l.country_code&&!c?`https://flagsapi.com/${l.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,m=(l==null?void 0:l.name)||"Stade",f=m.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),p=f?f[1].trim():m.slice(0,8),x=((v=f==null?void 0:f[2])==null?void 0:v.trim())||"";return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${u?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${d?`<img src="${d}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${c?`<img src="${c}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:g?`<img src="${g}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${u?"#4fc3f7":"#ccc"}">${p}</div>
              ${x?`<div style="font-size:8px;font-weight:700;color:${u?"#4fc3f7":"#aaa"}">${x}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(r=document.getElementById("stad-none"))==null||r.addEventListener("click",()=>{e.stadiumCardId=null,a(),et(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,a(),et(t,e,i)})})}function eo(e,t,i,n){var f,p,x,b,v;const{openModal:a,closeModal:o}=n,r=e.replace(/\d+/,""),s=(f=t.stadiumCards)==null?void 0:f.find(h=>h.id===t.stadiumCardId),l=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.slots[e],d=c?t.playerCards.find(h=>h.id===c):null;(x=d==null?void 0:d.player)==null||x.id;const u=new Set;Object.entries(t.slots).forEach(([h,$])=>{var j;if(h===e||!$)return;const y=t.playerCards.find(E=>E.id===$);(j=y==null?void 0:y.player)!=null&&j.id&&u.add(y.player.id)}),t.subs.forEach(h=>{var y;const $=t.playerCards.find(j=>j.id===h);(y=$==null?void 0:$.player)!=null&&y.id&&u.add($.player.id)});const g=new Set,m=t.playerCards.filter(h=>{const $=h.player;return!($.job===r||$.job2===r)||u.has($.id)||g.has($.id)?!1:(g.add($.id),!0)});m.sort((h,$)=>{const y=h.evolution_bonus||0,j=$.evolution_bonus||0,E=(r==="GK"?h.player.note_g:r==="DEF"?h.player.note_d:r==="MIL"?h.player.note_m:h.player.note_a)+(r===h.player.job||r===h.player.job2?y:0);return(r==="GK"?$.player.note_g:r==="DEF"?$.player.note_d:r==="MIL"?$.player.note_m:$.player.note_a)+(r===$.player.job||r===$.player.job2?j:0)-E}),a(`Choisir ${r} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${m.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+m.map(h=>{const $={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${Ie($,{width:100,showStad:!0,stadDef:l,role:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",o),(v=document.getElementById("remove-player"))==null||v.addEventListener("click",()=>{delete t.slots[e],o(),et(i,t,n)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{t.slots[e]=h.dataset.cardId,o(),et(i,t,n)})})}function to(e,t,i){var d,u,g;const{openModal:n,closeModal:a}=i,o=(d=e.stadiumCards)==null?void 0:d.find(m=>m.id===e.stadiumCardId),r=o&&((u=e.stadDefMap)==null?void 0:u[o.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(m=>{var x;const f=e.slots[m];if(!f)return;const p=e.playerCards.find(b=>b.id===f);(x=p==null?void 0:p.player)!=null&&x.id&&s.add(p.player.id)}),e.subs.forEach(m=>{var p;const f=e.playerCards.find(x=>x.id===m);(p=f==null?void 0:f.player)!=null&&p.id&&s.add(f.player.id)});const l=new Set,c=e.playerCards.filter(m=>{var f,p,x;return s.has((f=m.player)==null?void 0:f.id)||l.has((p=m.player)==null?void 0:p.id)?!1:(l.add((x=m.player)==null?void 0:x.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(m=>{const f={...m.player,_evolution_bonus:m.evolution_bonus||0};return`<div class="player-option" data-card-id="${m.id}" style="cursor:pointer">
          ${Ie(f,{width:100,showStad:!0,stadDef:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(g=document.getElementById("close-sub-selector"))==null||g.addEventListener("click",a),document.querySelectorAll(".player-option").forEach(m=>{m.addEventListener("click",()=>{e.subs.push(m.dataset.cardId),a(),et(t,e,i)})})}async function io(e,t){const{state:i,toast:n,navigate:a}=t,o=e.formationCards.find(l=>l.formation===e.formation),r=(o==null?void 0:o.id)||e.formationCardId;await w.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await w.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([l,c],d)=>{s.push({deck_id:e.deckId,card_id:c,position:l,is_starter:!0,slot_order:d})}),e.subs.forEach((l,c)=>{s.push({deck_id:e.deckId,card_id:l,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:l}=await w.from("deck_cards").insert(s);if(l){n(l.message,"error");return}}n("Deck enregistré ✅","success"),a("decks")}function Gi(e){const t=Gt[e]||Gt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Qi(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await w.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let a=n;if(e){const r=n.filter(s=>s.max_per_user!=null);if(r.length){const{data:s}=await w.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(c=>c.id)),l={};(s||[]).forEach(c=>{l[c.booster_id]=(l[c.booster_id]||0)+1}),a=n.filter(c=>c.max_per_user==null?!0:(l[c.id]||0)<c.max_per_user)}}if(!a.length)return[];const{data:o}=await w.from("booster_drop_rates").select("*").in("booster_id",a.map(r=>r.id)).order("sort_order");return a.map(r=>({...r,rates:(o||[]).filter(s=>s.booster_id===r.id)}))}async function no(e,t){const{data:i}=await w.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await w.from("booster_claims").insert({user_id:e,booster_id:t})}function oo(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,a)=>n+Number(a.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Zi=()=>Object.keys(At),ro=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ti={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ao(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Ie({...t,_evolution_bonus:i},{width:140})}function en(e){var a;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((a=Object.entries(t).sort((o,r)=>r[1]-o[1])[0])==null?void 0:a[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function so(e,{state:t,navigate:i,toast:n}){var u,g,m;const a=((u=t.profile)==null?void 0:u.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Qi((g=t.user)==null?void 0:g.id)).map(en)}catch(f){console.warn("Erreur chargement boosters DB, fallback hardcodé",f)}o.length||(o=ro.map(f=>({...f,rates:[],isPub:f.id==="players_pub"})));const r=await w.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(f=>f.data||[]),s=new Set(r.filter(f=>f.card_type==="stadium").map(f=>f.stadium_id)),l=new Set(r.filter(f=>f.card_type==="formation").map(f=>f.formation)),c=new Set(r.filter(f=>f.card_type==="game_changer").map(f=>f.gc_type)),d={};for(const f of o){if(f.allow_duplicates!==!1||!((m=f.rates)!=null&&m.length))continue;const p=[...new Set((f.rates||[]).map(b=>b.card_type))];let x=!1;for(const b of p)if(b==="stadium"){const{data:v}=await w.from("stadium_definitions").select("id");if((v||[]).some(h=>!s.has(h.id))){x=!0;break}}else if(b==="game_changer"){const{data:v}=await w.from("gc_definitions").select("name").eq("is_active",!0);if((v||[]).some(h=>!c.has(h.name))){x=!0;break}}else if(b==="formation"){const{FORMATION_LINKS:v}=await Ui(async()=>{const{FORMATION_LINKS:h}=await import("./formation-links-TDtFd05S.js").then($=>$.q);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(v).some(h=>!l.has(h))){x=!0;break}}else{x=!0;break}x||(d[f.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${a.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(f=>{const p=f.cost===0||a>=f.cost,x=d[f.id]===!0;return`<div class="booster-card ${!p||x?"disabled":""}" data-booster="${f.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${f.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${f.img}" alt="${f.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${f.name}</div>
            <div class="desc">${f.sub}</div>
            <div class="cost">${f.costLabel}</div>
            ${p?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${x?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(f=>{f.addEventListener("click",async()=>{const p=o.find(x=>x.id===f.dataset.booster);if(p){f.style.opacity="0.5",f.style.pointerEvents="none";try{await lo(p,{state:t,toast:n,navigate:i,container:e})}catch(x){n(x.message,"error"),f.style.opacity="",f.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(f=>{f.addEventListener("click",p=>{p.stopPropagation();const x=o.find(b=>b.id===f.dataset.boosterId);fo(x)})})}async function lo(e,{state:t,toast:i,navigate:n,container:a}){var u,g;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await mo();const{data:o}=await w.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((o||[]).filter(m=>m.card_type==="player").map(m=>m.player_id)),s=new Set((o||[]).filter(m=>m.card_type==="formation").map(m=>m.formation));let l=[],c=null;try{if((u=e.rates)!=null&&u.length)l=await ii(t.profile,e);else{const m=e.type||"player";m==="player"?l=await tn(t.profile,e.cardCount,e.cost):m==="game_changer"?l=await nn(t.profile,e.cardCount,e.cost):m==="formation"?l=await on(t.profile,e.cost):l=await ii(t.profile,e)}}catch(m){c=m.message||String(m),console.error("[Booster] Erreur:",m)}if(l!=null&&l.length&&e._boosterId&&await no(t.user.id,e._boosterId),!(l!=null&&l.length)){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",m.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(m),(g=m.querySelector("#anim-close-err"))==null||g.addEventListener("click",()=>m.remove());return}l.forEach(m=>{m.card_type==="player"&&m.player?m.isDuplicate=r.has(m.player.id):m.card_type==="formation"&&(m.isDuplicate=s.has(m.formation))});const{data:d}=await w.from("users").select("*").eq("id",t.profile.id).single();d&&(t.profile=d),rn(l,e,n)}function co(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ye(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function po(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>Ye(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>Ye(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&Ye(n)>=6),i.length||(i=e.filter(n=>Ye(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&Ye(n)>=1&&Ye(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ii(e,t){if(t.cost>0){const{error:g}=await w.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(g)throw g}const i=t.allow_duplicates!==!1;let n=[];const{data:a,error:o}=await w.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:g}=await w.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=g||[]}else n=a||[];const r=new Set(n.filter(g=>g.card_type==="player").map(g=>g.player_id)),s=new Set(n.filter(g=>g.card_type==="formation").map(g=>g.formation)),l=new Set(n.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),c=new Set(n.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id).filter(Boolean)),d=new Set,u=[];for(let g=0;g<(t.cardCount||5);g++){const m=oo(t.rates);if(m){if(m.card_type==="player"){const f=E=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[E]||E,p=m.rarity?f(m.rarity):null;let x=w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(x=x.eq("rarity",p));const{data:b}=await x;let v=b||[];if((m.note_min||m.note_max)&&(v=v.filter(E=>{const G=Math.max(Number(E.note_g)||0,Number(E.note_d)||0,Number(E.note_m)||0,Number(E.note_a)||0);return(!m.note_min||G>=m.note_min)&&(!m.note_max||G<=m.note_max)})),v.length||(m.note_min||m.note_max?(v=b||[],console.warn("[Booster] Aucun joueur avec note",m.note_min,"-",m.note_max,"— fallback rareté uniquement")):v=b||[]),!v.length)continue;let h=v.filter(E=>!d.has(E.id));if(i)h.length||(h=v);else if(h=h.filter(E=>!r.has(E.id)),!h.length)continue;const $=h[Math.floor(Math.random()*h.length)];d.add($.id);const y=r.has($.id),{data:j}=await w.from("cards").insert({owner_id:e.id,player_id:$.id,card_type:"player"}).select().single();j&&(u.push({...j,player:$,isDuplicate:y}),w.rpc("record_transfer",{p_card_id:j.id,p_player_id:$.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(m.card_type==="game_changer"){const{data:f}=await w.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=f!=null&&f.length?f:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],x=i?p:p.filter($=>!l.has($.name));if(!i&&!x.length)continue;const v=x[Math.floor(Math.random()*x.length)].name,{data:h}=await w.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:v}).select().single();h&&u.push(h)}else if(m.card_type==="formation"){const f=Zi(),p=i?f:f.filter(h=>!s.has(h));if(!i&&!p.length)continue;const x=p[Math.floor(Math.random()*p.length)],b=s.has(x),{data:v}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:x}).select();v!=null&&v[0]&&u.push({...v[0],isDuplicate:b})}else if(m.card_type==="stadium"){const{data:f,error:p}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(f!=null&&f.length)){console.warn("[Booster] Aucun stade en DB");continue}const x=i?f:f.filter($=>!c.has($.id));if(!i&&!x.length)continue;const b=x[Math.floor(Math.random()*x.length)],{data:v,error:h}=await w.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:b.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}v&&u.push({...v,rarity:"normal",_stadiumDef:b})}}}return u}async function tn(e,t,i){if(i>0){const{error:c}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const a=n.filter(c=>c.job==="GK"),o=n.filter(c=>c.job!=="GK"),r=!e.first_booster_opened&&a.length>0,s=[];for(let c=0;c<t;c++){const d=c===0&&r?a:c===0?o:n,u=co(),g=po(d,u);g&&s.push(g)}r&&await w.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:l}=await w.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(l||[]).forEach((c,d)=>{w.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[d].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,d)=>({...l[d],player:c}))}async function nn(e,t,i){const{error:n}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:a}=await w.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=a!=null&&a.length?a:Object.keys(ti).map(d=>({name:d,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const d=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:d.name,gc_definition_id:d.id||null}}),{data:s,error:l}=await w.from("cards").insert(r).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(s||[]).map(d=>{const u=a==null?void 0:a.find(g=>g.name===d.gc_type||g.id===d.gc_definition_id);return{...d,_gcDef:u||null}})}async function on(e,t){const{error:i}=await w.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await w.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),a=new Set((n||[]).map(d=>d.formation)),o=Zi(),r=o[Math.floor(Math.random()*o.length)],s=a.has(r),{data:l,error:c}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(l||[]).map(d=>({...d,isDuplicate:s}))}function rn(e,t,i,n=null){var Z,A;if(!e||e.length===0){const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",_.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(_),(Z=_.querySelector("#anim-close-err"))==null||Z.addEventListener("click",()=>_.remove());return}e=[...e].sort((_,M)=>{const H=_.player?Ye(_.player):-1;return(M.player?Ye(M.player):-1)-H});const a=document.createElement("div");a.id="booster-anim-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let o=!1;const r=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let l=!1;const c=_=>_.touches&&_.touches[0]?_.touches[0].clientX:_.clientX;function d(_){o||(l=!0,s.style.opacity="1",u(_))}function u(_){if(!l||o)return;const M=r.getBoundingClientRect(),H=c(_)-M.left,le=Math.max(0,Math.min(1,H/M.width));s.style.width=le*M.width+"px",le>=.82&&m()}function g(){o||(l=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function m(){var M;if(o)return;o=!0,l=!1,s.style.width="100%",s.style.opacity="1",(M=document.getElementById("cut-flash"))==null||M.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const _=document.getElementById("cut-hint");_&&(_.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",b(0)},620)}r.addEventListener("pointerdown",d),window.addEventListener("pointermove",u),window.addEventListener("pointerup",g),r.addEventListener("touchstart",d,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",g);let f=0,p=!1;const x=new Set;function b(_){f=_,document.getElementById("reveal-phase").style.display="flex",v(),h(_,0),G()}function v(){const _=document.getElementById("card-dots");_&&(_.innerHTML=e.map((M,H)=>`<div class="card-dot" data-i="${H}" style="width:8px;height:8px;border-radius:50%;background:${H===f?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),_.querySelectorAll(".card-dot").forEach(M=>M.addEventListener("click",()=>y(parseInt(M.dataset.i)))))}function h(_,M){var R,z;const H=e[_],le=document.getElementById("card-counter"),se=document.getElementById("card-track");le&&(le.textContent=`Carte ${_+1} / ${e.length}`);const ce=document.getElementById("reveal-btns");ce&&(ce.style.display=_===e.length-1?"flex":"none");const de=H.card_type==="player"&&((R=H.player)==null?void 0:R.rarity)==="legende",Le=!x.has(_);x.add(_);let V=0;if(H.card_type==="player"&&H.player){const C=H.player,F=C.job||"ATT";V=Number(F==="GK"?C.note_g:F==="DEF"?C.note_d:F==="MIL"?C.note_m:C.note_a)||0}const J=C=>{se.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${de?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${uo(H)}</div>
          ${H.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const F=document.getElementById("current-card-wrap");M!==0?(F.style.transition="none",F.style.transform=`translateX(${M>0?100:-100}%)`,requestAnimationFrame(()=>{F.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",F.style.transform="translateX(0)"})):F.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),C||de?ie():ee(),v()};Le&&(((z=H.player)==null?void 0:z.rarity)==="legende"||V>=8)&&H.card_type==="player"&&H.player?$(H,()=>J(!0)):J(!1)}function $(_,M){var be;p=!0;const H=_.player,le=`https://flagsapi.com/${H.country_code}/flat/64.png`,se=(be=H.clubs)==null?void 0:be.logo_url,ce=H.face?"/"+H.face.replace(/^public\//,"").replace(/^\//,""):null,de=H.job||"ATT",Le=Number(de==="GK"?H.note_g:de==="DEF"?H.note_d:de==="MIL"?H.note_m:H.note_a)||0,V=_.evolution_bonus||0,J=Le+V,R=H.rarity==="legende",z=J>=18,C=document.getElementById("walkout-overlay"),F=document.getElementById("walkout-stage");if(!C||!F){p=!1,M();return}let Y=null;R&&(Y=new Audio("/sounds/Legendary.mp3"),Y.volume=.8,Y.play().catch(()=>{})),C.style.display="flex";const U=()=>{const ge=F.firstElementChild;ge&&(ge.classList.remove("wo-in"),ge.classList.add("wo-out"))},B=1800,O=400;F.innerHTML=`<img class="wo-in" src="${le}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(U,B),setTimeout(()=>{var ge;F.innerHTML=se?`<img class="wo-in" src="${se}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ge=H.clubs)==null?void 0:ge.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},B+O),setTimeout(U,B*2+O),setTimeout(()=>{F.innerHTML=ce?`<img class="wo-in" src="${ce}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(B+O)*2),setTimeout(U,(B+O)*2+B);const we=z?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[de]||"#fff";setTimeout(()=>{F.innerHTML=`<div class="wo-in" style="
        font-size:${z?"120px":"90px"};font-weight:900;color:${we};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${we}, 0 0 60px ${we};
        ${z?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${J}
      </div>`,z&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(B+O)*3),setTimeout(U,(B+O)*3+B),setTimeout(()=>{C.style.display="none",F.innerHTML="",p=!1,Y&&!R&&Y.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),M()},(B+O)*4)}function y(_){if(p||_<0||_>=e.length||_===f)return;const M=_>f?1:-1;f=_,h(_,M)}function j(){y(f+1)}function E(){y(f-1)}function G(){const _=document.getElementById("card-viewport");if(!_||_._swipeBound)return;_._swipeBound=!0;let M=0,H=0,le=0,se=!1;const ce=R=>R.touches?R.touches[0].clientX:R.clientX,de=R=>R.touches?R.touches[0].clientY:R.clientY,Le=R=>{se=!0,M=ce(R),H=de(R),le=0},V=R=>{if(!se)return;le=ce(R)-M;const z=de(R)-H;if(Math.abs(le)<Math.abs(z))return;const C=document.getElementById("current-card-wrap");C&&(C.style.transition="none",C.style.transform=`translateX(${le*.6}px) rotate(${le*.02}deg)`)},J=()=>{if(!se)return;se=!1;const R=document.getElementById("current-card-wrap"),z=55;le<=-z&&f<e.length-1?j():le>=z&&f>0?E():R&&(R.style.transition="transform .2s ease",R.style.transform="translateX(0)")};_.addEventListener("pointerdown",Le),_.addEventListener("pointermove",V),_.addEventListener("pointerup",J),_.addEventListener("pointercancel",J),_.addEventListener("touchstart",Le,{passive:!0}),_.addEventListener("touchmove",V,{passive:!0}),_.addEventListener("touchend",J),_.addEventListener("click",R=>{if(Math.abs(le)>8)return;const z=_.getBoundingClientRect();R.clientX-z.left>z.width/2?j():E()})}let N=null;function ie(){const _=document.getElementById("fireworks-canvas");if(!_)return;_.width=window.innerWidth,_.height=window.innerHeight;const M=_.getContext("2d"),H=[];function le(){const ce=Math.random()*_.width,de=Math.random()*_.height*.6,Le=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],V=Le[Math.floor(Math.random()*Le.length)];for(let J=0;J<60;J++){const R=Math.PI*2/60*J,z=2+Math.random()*5;H.push({x:ce,y:de,vx:Math.cos(R)*z,vy:Math.sin(R)*z,alpha:1,color:V,size:2+Math.random()*3})}}le(),N=setInterval(le,600);function se(){if(document.getElementById("fireworks-canvas")){M.clearRect(0,0,_.width,_.height);for(let ce=H.length-1;ce>=0;ce--){const de=H[ce];if(de.x+=de.vx,de.y+=de.vy+.08,de.vy*=.98,de.alpha-=.018,de.alpha<=0){H.splice(ce,1);continue}M.globalAlpha=de.alpha,M.fillStyle=de.color,M.beginPath(),M.arc(de.x,de.y,de.size,0,Math.PI*2),M.fill()}M.globalAlpha=1,(N!==null||H.length>0)&&requestAnimationFrame(se)}}se()}function ee(){N!==null&&(clearInterval(N),N=null);const _=document.getElementById("fireworks-canvas");_&&_.getContext("2d").clearRect(0,0,_.width,_.height)}if(n){const _=document.getElementById("reveal-btns");_&&(_.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(A=document.getElementById("reveal-next"))==null||A.addEventListener("click",()=>{ee(),a.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ee(),a.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ee(),a.remove(),i("boosters")})}function uo(e){var t,i,n,a;if(e.card_type==="player"&&e.player)return ao(e);if(e.card_type==="game_changer"){const o=e._gcDef,r=(o==null?void 0:o.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},l={purple:"#b06ce0",light_blue:"#00d4ef"},c=s[o==null?void 0:o.color]||s.purple,d=l[o==null?void 0:o.color]||l.purple,u=(o==null?void 0:o.name)||e.gc_type||"Game Changer",g=(o==null?void 0:o.effect)||((t=ti[e.gc_type])==null?void 0:t.desc)||"",m=o!=null&&o.image_url?`/icons/${o.image_url}`:null,f=((i=ti[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${c};border-radius:14px;border:3px solid ${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${d}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${u.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${m?`<img src="${m}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${f}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${g.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const o=e._stadiumDef,r=(o==null?void 0:o.name)||"Stade",s=((n=o==null?void 0:o.club)==null?void 0:n.encoded_name)||(o==null?void 0:o.country_code)||"—",l=o!=null&&o.image_url?`/icons/${o.image_url}`:((a=o==null?void 0:o.club)==null?void 0:a.logo_url)||(o!=null&&o.country_code?`https://flagsapi.com/${o.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${r.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${r}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${l?`<img src="${l}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function fo(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const a={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <h3 style="font-size:16px;font-weight:700;margin:0">📦 ${e.name} — Taux</h3>
          <button id="odds-close" style="background:none;border:none;font-size:20px;cursor:pointer">✕</button>
        </div>
        ${e.rates.map(r=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:8px;background:#f5f5f5;margin-bottom:6px">
          <div>
            <span style="font-weight:700;font-size:13px">${o[r.card_type]||r.card_type}</span>
            ${r.rarity?`<span style="margin-left:6px;padding:1px 6px;border-radius:8px;background:${a[r.rarity]||"#eee"};color:#fff;font-size:10px;font-weight:700">${r.rarity}</span>`:""}
            ${r.note_min||r.note_max?`<span style="margin-left:4px;font-size:11px;color:#888">note ${r.note_min||""}–${r.note_max||""}</span>`:""}
          </div>
          <span style="font-size:18px;font-weight:900;color:#333">${Number(r.percentage).toFixed(1)}%</span>
        </div>`).join("")}
        <div style="margin-top:10px;text-align:center;font-size:11px;color:#aaa">Probabilités par carte tirée</div>
      </div>`,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}go()}function go(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function mo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const a=document.getElementById("mw-ad-cd");a&&(a.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function xo(e,{state:t,navigate:i,toast:n,refreshProfile:a}){var g,m;const{data:o}=await w.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let r=Array.isArray((g=t.profile)==null?void 0:g.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await w.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await Qi()).find(x=>(x.name||"").toLowerCase().includes("new player"));p&&(s=en(p))}catch(f){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',f)}const l=r.length;let c=0;e.innerHTML=`
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
  </div>`;const d=async()=>{await w.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function u(){var v;if(c>=l||!r.length){await w.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),a&&await a(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const f=r[0],{data:p}=await w.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let x=[];try{if(f.type==="formation")x=await on(t.profile,0);else if(f.type==="game_changer")x=await nn(t.profile,f.count||3,0);else if(s&&((v=s.rates)!=null&&v.length)){const h={...s,cost:0,cardCount:f.count||s.cardCount||5};x=await ii(t.profile,h),f.guaranteeGK&&!t.profile.first_booster_opened&&(x.some(y=>y.player&&y.player.job==="GK")||await yo(t.profile,x),await w.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else x=await tn(t.profile,f.count||5,0)}catch(h){n(h.message||"Erreur ouverture booster","error");return}r.shift(),c++,await d();const b=f.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:f.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${l})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};rn(x,b,i,()=>{u()})}(m=document.getElementById("onboard-start"))==null||m.addEventListener("click",()=>u())}async function yo(e,t){try{const{data:i}=await w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],a=t.findIndex(r=>r.player);if(a===-1)return;const o=t[a];await w.from("cards").update({player_id:n.id}).eq("id",o.id),t[a]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const bt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},bo={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function at(e,t,i,n,a){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",a)}function Mt(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",a=e.face.replace(/^public\//,"").replace(/^\//,"");return n+a}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ni(e,t){var o,r;const i=e.player,n=e.evolution_bonus||0,a=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&a>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&a>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&a>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&a>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function St(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(a=>{Array.isArray(a)&&a.forEach(o=>{const r=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(r||s)&&(o.stadiumBonus=!0)})}),e}function Pt(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(a=>{if(!a)return;const o=i&&String(a.club_id)===String(i),r=n&&String(a.country_code)===String(n);(o||r)&&(a.stadiumBonus=!0)}),e}function ht(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function an(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Rt(e,t){const i=bt[t]||bt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===r).sort((c,d)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(d.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:r})),l=ht(s.length);s.forEach((c,d)=>{c._col=l[d]}),n[r]=s}return n}const o=[...e];for(const r of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[r];c++){let d=o.findIndex(u=>u.job===r);if(d===-1&&(d=o.findIndex(u=>u.job2===r)),d===-1&&(d=0),o[d]){const u={...o[d],_line:r};s.push(u),o.splice(d,1)}}const l=ht(s.length);s.forEach((c,d)=>{c._col=l[d]}),n[r]=s}return n}function He(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ne(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ho(e,t,i){const a=new Set,o=t.filter(d=>{const u=d.gc_type||d.id;return a.has(u)?!1:(a.add(u),!0)});let r=[];function s(d,u){const g=d._gcDef,m={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},f={purple:"#9b59b6",light_blue:"#00bcd4"},p=m[g==null?void 0:g.color]||m.purple,x=f[g==null?void 0:g.color]||f.purple;return`<div class="gc-select-card" data-id="${d.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":x};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((g==null?void 0:g.name)||d.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(g==null?void 0:g.name)||d.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${g!=null&&g.image_url?`<img src="/icons/${g.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((g==null?void 0:g.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const l=d=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(d)};function c(){var u,g,m;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const d=r.length>0;e.innerHTML=`
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
        ${o.map(f=>{const p=r.find(x=>x.gc_type===f.gc_type);return s(f,!!p)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${d?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${d?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${d?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${d?"pointer":"default"};box-shadow:${d?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(f=>{f.addEventListener("click",()=>{const p=f.dataset.id,x=o.find(v=>v.id===p);if(!x)return;const b=r.findIndex(v=>v.gc_type===x.gc_type);b>-1?r.splice(b,1):r.length<3&&r.push(x),c()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{d&&l(r)}),(g=e.querySelector("#gc-no-gc"))==null||g.addEventListener("click",()=>l([])),(m=e.querySelector("#gc-reset"))==null||m.addEventListener("click",()=>{r.length&&(r=[],c())})}c()}function vo(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function wo(e,t,i){const{state:n,navigate:a}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){at(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>a("decks"));return}const r=o.map(g=>g.id),{data:s}=await w.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),l=[...new Set((s||[]).filter(g=>{var m,f;return((m=g.card)==null?void 0:m.card_type)==="stadium"&&((f=g.card)==null?void 0:f.stadium_id)}).map(g=>g.card.stadium_id))],c={};if(l.length){const{data:g}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",l);(g||[]).forEach(m=>{c[m.id]=m}),(s||[]).forEach(m=>{var f,p;((f=m.card)==null?void 0:f.card_type)==="stadium"&&((p=m.card)!=null&&p.stadium_id)&&(m.card._stadiumDef=c[m.card.stadium_id]||null)})}let d=0;function u(){var y,j,E,G,N,ie,ee;const g=o[d],m=(s||[]).filter(Z=>Z.deck_id===g.id),f=m.filter(Z=>{var A;return Z.is_starter&&((A=Z.card)==null?void 0:A.player)}).map(Z=>ni(Z.card,Z.position)),p=m.find(Z=>{var A;return((A=Z.card)==null?void 0:A.card_type)==="formation"}),x=g.formation||((y=p==null?void 0:p.card)==null?void 0:y.formation)||"4-4-2";let b=f.length>=11?Rt(f,x):null,v=((j=g.stadium_card)==null?void 0:j.stadium_def)||null;v&&b&&(b=St(b,v));const h=f.length>=11;He(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff;position:relative">
      <button id="cancel-deck-select" style="position:absolute;top:8px;right:10px;z-index:10;width:32px;height:32px;border-radius:50%;border:none;background:rgba(180,30,30,0.85);color:#fff;font-size:18px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;padding:0">✕</button>

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${vo(t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===0?"0.1":"0.3"});color:${d===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${g.name}</div>
            <div style="font-size:11px;opacity:.6">${x} · ${f.length}/11${g.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===o.length-1?"0.1":"0.3"});color:${d===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
        </div>
        ${v?`
        <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(30,100,220,0.35),rgba(10,60,180,0.15));border-top:1px solid rgba(30,120,255,0.45)">
          <div style="position:relative;width:30px;height:30px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
            <div style="position:absolute;inset:-7px;border-radius:50%;background:radial-gradient(ellipse,rgba(30,144,255,0.6) 0%,transparent 68%);pointer-events:none"></div>
            <svg width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="position:relative;z-index:1;display:block">
              <ellipse cx="16" cy="29.5" rx="12" ry="2.5" fill="#999" opacity="0.35"/>
              <ellipse cx="16" cy="19" rx="13" ry="9" fill="#3a7bbf"/>
              <ellipse cx="16" cy="14" rx="13" ry="5.5" fill="#4a8fd4"/>
              <ellipse cx="16" cy="14" rx="7.5" ry="3" fill="#2ea44f"/>
              <line x1="6" y1="11" x2="4" y2="21" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
              <line x1="11" y1="9.5" x2="11" y2="23" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
              <line x1="21" y1="9.5" x2="21" y2="23" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
              <line x1="26" y1="11" x2="28" y2="21" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
              <rect x="14" y="22" width="4" height="5" rx="1" fill="#1a4a80"/>
              <line x1="9" y1="6" x2="9" y2="13" stroke="#333" stroke-width="1.3"/>
              <polygon points="9,6 14.5,8.5 9,11" fill="#FFD700"/>
              <line x1="23" y1="6" x2="23" y2="13" stroke="#333" stroke-width="1.3"/>
              <polygon points="23,6 17.5,8.5 23,11" fill="#FFD700"/>
              <ellipse cx="16" cy="14" rx="13" ry="5.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
              <ellipse cx="16" cy="19" rx="13" ry="9" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
            </svg>
          </div>
          <span style="font-size:12px;font-weight:700">${v.name}</span>
          <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((E=v.club)==null?void 0:E.encoded_name)||v.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${b?'<div class="deck-preview-wrap" style="overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${f.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((Z,A)=>`<div style="width:6px;height:6px;border-radius:50%;background:${A===d?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function Z(){const A=e.querySelector(".deck-preview-wrap"),_=e.querySelector("#deck-swipe-zone");if(!A||!_||!b)return;const M=_.clientWidth>=900,H=Math.max(200,_.clientHeight-(M?60:40)),se=Math.max(200,_.clientWidth-16),ce=M?Math.min(117,Math.max(52,Math.round(se*.22))):Math.max(44,Math.round(se*.168));if(H<220||se<220){requestAnimationFrame(Z);return}const de=M?null:Math.round(ce*.55);A.innerHTML=vt(b,x,null,[],se,H,[],de),A.style.cssText=`width:${se}px;height:${H}px;overflow:hidden;margin:${M?0:60}px auto 0`;const Le=A.querySelector("svg");Le&&(Le.style.cssText="display:block;width:100%;height:100%",Le.setAttribute("preserveAspectRatio",M?"xMidYMid meet":"none"))})),(G=document.getElementById("prev-deck"))==null||G.addEventListener("click",()=>{d>0&&(d--,u())}),(N=document.getElementById("next-deck"))==null||N.addEventListener("click",()=>{d<o.length-1&&(d++,u())}),(ie=document.getElementById("validate-deck"))==null||ie.addEventListener("click",()=>{if(!h)return;const Z=t.state.params||{};t.navigate("match",{...Z,matchMode:Z.matchMode||i,deckId:g.id})}),(ee=document.getElementById("cancel-deck-select"))==null||ee.addEventListener("click",()=>{Ne(e),a("home")});const $=document.getElementById("deck-swipe-zone");if($){let Z=0,A=0;$.addEventListener("touchstart",_=>{Z=_.touches[0].clientX,A=_.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",_=>{const M=_.changedTouches[0].clientX-Z,H=_.changedTouches[0].clientY-A;Math.abs(M)<40||Math.abs(M)<Math.abs(H)||(M<0&&d<o.length-1?(d++,u()):M>0&&d>0&&(d--,u()))},{passive:!0})}}u()}function Qe(e,t=44,i=58,n=null){return Ie(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function gt(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((o,r)=>{const s=o._line||o.job||"MIL";if(a+=Ie(o,{width:40,role:s,extraNote:o.boost||0}),r<n.length-1){const l=Ct(o,n[r+1]);a+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function Ut(e,t,i,n,a=310,o=310,r=[],s=null){const l=At[t]||{},c=Hi(t)||li[t]||[],d={},u=["ATT","MIL","DEF","GK"];for(const b of u)(e[b]||[]).forEach((h,$)=>{d[`${b}${$+1}`]=h});function g(b){const v=l[b];return v?{x:v.x*a,y:v.y*o}:null}let m="";for(const[b,v]of c){const h=g(b),$=g(v);if(!h||!$)continue;const y=d[b],j=d[v],E=Ct(y,j);E==="#00ff88"||E==="#FFD700"?(m+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${E}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${h.x.toFixed(1)}" y1="${h.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${E}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const f=typeof window<"u"&&window.innerWidth>=900?Math.min(Math.max(81,Math.round(a*.225)),117):Math.max(44,Math.round(a*.168)),p=Math.round(f*657/507);for(const[b,v]of Object.entries(d)){const h=g(b);if(!h||!v)continue;const $=b.replace(/[0-9]/g,""),y=r.includes(v.cardId),j=i==="attack"&&(["MIL","ATT"].includes($)||y)&&!v.used||i==="defense"&&["GK","DEF","MIL"].includes($)&&!v.used,E=n.includes(v.cardId);let G=v.boost||0,N=!1;v.stadiumBonus&&(i==="attack"&&($==="ATT"||$==="MIL")||i==="defense"&&($==="GK"||$==="DEF"||$==="MIL")?(G+=10,N=!0):i||(G+=10,N=!0));const ie=Math.round(h.x-f/2),ee=Math.round(h.y-p/2);if(v.used){m+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${ie}" y="${ee}" width="${f}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${v.cardId}" data-role="${$}" style="cursor:pointer"/>`;continue}const Z=Ie({...v,_evolution_bonus:0,stadiumBonus:!1},{width:f,showStad:!1,stadDef:null,role:$,extraNote:G,_cardOffset:30,_forceStadColor:N}),A=E?`position:absolute;top:30px;left:0;width:${f}px;height:${p}px;outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;pointer-events:none;`:"";m+=`<foreignObject x="${ie-2}" y="${ee-30}" width="${f+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative">
        ${Z}
        ${E?`<div style="${A}"></div>`:""}
      </div>
    </foreignObject>`,j&&(m+=`<rect x="${ie}" y="${ee}" width="${f}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${E?"selected":""}" data-card-id="${v.cardId}" data-role="${$}" style="cursor:pointer"/>`)}const x=s!==null?s:Math.round(Math.max(f*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-x} ${-x} ${a+x*2} ${o+x*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${m}
  </svg>`}function vt(e,t,i,n,a=300,o=300,r=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${Ut(e,t,i,n,a,o,r,s)}
  </div>`}async function jt(e,t,i,n){var j;const{state:a,navigate:o,toast:r}=t;He(e);const s=a.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return wo(e,t,i);const l=s.deckId;let c,d,u,g;try{const E=await Promise.all([w.from("decks").select("formation,name,stadium_card_id").eq("id",l).single(),w.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]);c=E[0].data,u=E[0].error,d=E[1].data,g=E[1].error}catch(E){console.error("[Match] Exception chargement deck:",E),at(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(u||g){console.error("[Match] Erreur Supabase:",u||g),at(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const m=(d||[]).filter(E=>{var G;return E.is_starter&&((G=E.card)==null?void 0:G.player)}).map(E=>ni(E.card,E.position)),f=(d||[]).filter(E=>{var G;return!E.is_starter&&((G=E.card)==null?void 0:G.player)}).map(E=>ni(E.card,E.position));if(m.length<11){at(e,"⚠️",`Deck incomplet (${m.length}/11).`,"Compléter",()=>o("decks"));return}const p=(d||[]).find(E=>{var G;return((G=E.card)==null?void 0:G.card_type)==="formation"}),x=(c==null?void 0:c.formation)||((j=p==null?void 0:p.card)==null?void 0:j.formation)||"4-4-2",{data:b,error:v}=await w.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",a.profile.id).eq("card_type","game_changer"),{data:h}=await w.from("gc_definitions").select("*").eq("is_active",!0),$=(b||[]).map(E=>({...E,_gcDef:(h==null?void 0:h.find(G=>G.name===E.gc_type||G.id===E.gc_definition_id))||null}));let y=null;if(c!=null&&c.stadium_card_id){const{data:E}=await w.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(E!=null&&E.stadium_id){const{data:G}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",E.stadium_id).single();y=G||null}}n({deckId:l,formation:x,starters:m,subsRaw:f,gcCardsEnriched:$,gcDefs:h||[],stadiumDef:y})}function st(){return Math.min(window.innerWidth-40,860)}function mt(){return Math.round(st()*1.1)}function _o(e){var a,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((a=e.clubs)==null?void 0:a.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:Mt(e)}}function ko(e,t,i,n="Adversaire"){const a=st(),o=mt();return`
    <div style="text-align:center;padding:16px 8px 0">
      <div style="font-size:11px;letter-spacing:2px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">Équipe adverse</div>
      <div style="font-size:22px;font-weight:900;color:#e03030;margin-bottom:8px">${n}</div>
      
      <div style="width:100%;max-width:${a}px;margin:0 auto">
        ${Ut(e,t,null,[],a,o)}
      </div>
    </div>`}function sn(e){var o,r,s;if(!e)return"";const t=l=>l?Ie({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
    <div style="padding:8px 12px;border-left:3px solid ${((o=e.type)==null?void 0:o.includes("goal"))?"#22c55e":"rgba(255,255,255,0.15)"};margin-bottom:4px">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px;text-align:center">${n} ${e.title||e.text||""}</div>
      ${(r=e.homePlayers)!=null&&r.length||(s=e.aiPlayers)!=null&&s.length?`
        <div style="display:flex;align-items:flex-start;justify-content:center;gap:16px">
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-end">
            ${(e.homePlayers||[]).map(t).join("")}
          </div>
          <div style="flex:1;display:flex;gap:3px;flex-wrap:wrap;justify-content:flex-start">
            ${(e.aiPlayers||[]).map(t).join("")}
          </div>
        </div>`:""}
      ${e.text&&e.title?`<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:4px;text-align:center">${e.text}</div>`:""}
    </div>`}function Ze(e,t,i,n,a){const o=document.getElementById("goal-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="goal-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(l=>Ie({...l,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:l._line||l.job,showStad:!!l.stadiumBonus})).join("");if(r.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${s}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${n?`<span style="color:#22c55e">${t}</span>`:t}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${n?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(r),!document.getElementById("goal-anim-style")){const l=document.createElement("style");l.id="goal-anim-style",l.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(l)}setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),a==null||a()},400)},1800)}function $o(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="sub-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),r=e?Ie({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"",s=t?Ie({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"";a.innerHTML=`
    <div style="text-align:center">
      <div style="font-size:32px;margin-bottom:8px">🔄</div>
      <div style="font-size:18px;font-weight:700;color:#fff;margin-bottom:16px">Remplacement</div>
      <div style="display:flex;align-items:center;gap:16px;justify-content:center">
        <div style="text-align:center">
          ${r}
          <div style="font-size:10px;color:#e03030;margin-top:4px">SORT ▼</div>
        </div>
        <div style="font-size:28px;color:rgba(255,255,255,0.4)">→</div>
        <div style="text-align:center">
          ${s}
          <div style="font-size:10px;color:#22c55e;margin-top:4px">ENTRE ▲</div>
        </div>
      </div>
    </div>`,document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),i==null||i()},400)},1600)}function Et(e,t="rgba(0,0,0,0.85)",i=2200){const n=document.getElementById("game-toast");n&&n.remove();const a=document.createElement("div");if(a.id="game-toast",a.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${t};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,a.textContent=e,!document.getElementById("game-toast-style")){const o=document.createElement("style");o.id="game-toast-style",o.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(o)}document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.3s",setTimeout(()=>a.remove(),300)},i)}function dn(e,t){const i=Be(e,"MIL"),n=e.stadiumBonus||t&&(t.club_id&&String(e.club_id)===String(t.club_id)||t.country_code&&e.country_code===t.country_code)?10:0;return i+n}function We(e,t){return e.reduce((i,n)=>i+dn(n,t),0)}function Xe(e){let t=0;for(let i=0;i<e.length-1;i++){const n=Ct(e[i],e[i+1]);n==="#00ff88"?t+=2:n==="#FFD700"&&(t+=1)}return t}function Nt(e,t,i,n,a){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,r)=>{const s=r<e.length-1?Ct(o,e[r+1]):null,l=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+2":s==="#FFD700"?"+1":"";return dn(o,a),o.stadiumBonus||a&&(a.club_id&&String(o.club_id)===String(a.club_id)||a.country_code&&(o.country_code,a.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${r}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Ie({...o,_evolution_bonus:0},{width:window.innerWidth>=900?Math.min(130,Math.max(80,Math.round(window.innerWidth*.08))):58,showStad:!0,stadDef:a,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${r<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${r}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${l?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${l?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${We(e,a)} + ${Xe(e)} liens = <b style="color:#fff">${We(e,a)+Xe(e)}</b>
      </div>
    </div>`}async function Eo(e,t){const{state:i}=t,a=(i.params||{}).matchMode||"vs_ai_easy",o=a.replace("vs_ai_",""),r=a;await jt(e,t,a,async({deckId:s,formation:l,starters:c,subsRaw:d,gcCardsEnriched:u,gcDefs:g,stadiumDef:m})=>{try{let f=Rt(c,l);m&&(f=St(f,m),Pt(d,m));const p=await Lo(l,o),x=p.lines||p,b=async v=>{try{const{data:h,error:$}=await w.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:s,status:"in_progress"}).select().single();if($){console.error("[MatchIA] Erreur création match:",$),at(e,"⚠️","Impossible de créer le match ("+$.message+").","Retour",()=>t.navigate("home"));return}const y=p.stadiumDef||null;y&&x&&(St(x,y),Pt(p.subs||[],y));const j={gcDefs:g||[],matchId:h==null?void 0:h.id,mode:r,difficulty:o,formation:l,homeTeam:f,aiTeam:x,homeSubs:d,subsUsed:0,maxSubs:Math.min(d.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:y,homeScore:0,aiScore:0,gcCards:v,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};zo(e,j,t)}catch(h){console.error("[MatchIA] Exception launchMatch:",h),at(e,"⚠️","Erreur au lancement du match : "+h.message,"Retour",()=>t.navigate("home"))}};if(!u.length){b([]);return}ho(e,u,b)}catch(f){console.error("[MatchIA] Exception setup:",f),at(e,"⚠️","Erreur de préparation du match : "+f.message,"Retour",()=>t.navigate("home"))}})}async function Lo(e,t){var x;const{data:i}=await w.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:To(e),subs:[],gcCards:[],stadiumDef:null};const n=bt[e]||bt["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function r(b,v,h){var $,y;return o.add(b.id),{cardId:"ai-"+b.id+"-"+h,id:b.id,firstname:b.firstname,name:b.surname_real,country_code:b.country_code,club_id:b.club_id,job:b.job,job2:b.job2,note_g:Number(b.note_g)||0,note_d:Number(b.note_d)||0,note_m:Number(b.note_m)||0,note_a:Number(b.note_a)||0,rarity:b.rarity,skin:b.skin,hair:b.hair,hair_length:b.hair_length,clubName:(($=b.clubs)==null?void 0:$.encoded_name)||null,clubLogo:((y=b.clubs)==null?void 0:y.logo_url)||null,boost:0,used:!1,_line:v}}for(const b of["GK","DEF","MIL","ATT"]){const v=i.filter(E=>E.job===b&&!o.has(E.id)),h=i.filter(E=>E.job!==b&&!o.has(E.id)),$=[...v,...h],y=[];for(let E=0;E<n[b];E++){const G=$[E];G&&y.push(r(G,b,E))}const j=ht(y.length);y.forEach((E,G)=>{E._col=j[G]}),a[b]=y}const l=i.filter(b=>!o.has(b.id)).slice(0,5).map((b,v)=>r(b,b.job,100+v)),u=Object.keys(Se).sort(()=>Math.random()-.5).slice(0,3).map((b,v)=>{var h,$;return{id:"ai-gc-"+v,gc_type:b,name:((h=Se[b])==null?void 0:h.name)||b,icon:(($=Se[b])==null?void 0:$.icon)||"⚡"}}),g=Object.values(a).flat(),m={};g.forEach(b=>{b.club_id&&(m[b.club_id]=(m[b.club_id]||0)+1)});const f=(x=Object.entries(m).sort((b,v)=>v[1]-b[1])[0])==null?void 0:x[0];let p=null;if(f){const{data:b}=await w.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",f).single();b&&(p={club_id:b.id,country_code:null,name:b.encoded_name+" Stadium",club:{encoded_name:b.encoded_name,logo_url:b.logo_url}})}return{lines:a,subs:l,gcCards:u,stadiumDef:p}}function To(e){const t=bt[e]||bt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let a=0;for(const o of["GK","DEF","MIL","ATT"]){const r=[];for(let l=0;l<t[o];l++){const c=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+a,id:"fake-"+a,firstname:"IA",name:n[a%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?c:2,note_d:o==="DEF"?c:2,note_m:o==="MIL"?c:2,note_a:o==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:o}),a++}const s=ht(r.length);r.forEach((l,c)=>{l._col=s[c]}),i[o]=r}return i}function zo(e,t,i){var a;const n=`<div style="position:relative;width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center">
    <div style="position:absolute;inset:-6px;border-radius:50%;background:radial-gradient(ellipse,rgba(30,144,255,0.6) 0%,transparent 68%);pointer-events:none"></div>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="position:relative;z-index:1;width:22px;height:22px;display:block">
      <ellipse cx="16" cy="29.5" rx="12" ry="2.5" fill="#999" opacity="0.35"/>
      <ellipse cx="16" cy="19" rx="13" ry="9" fill="#3a7bbf"/>
      <ellipse cx="16" cy="14" rx="13" ry="5.5" fill="#4a8fd4"/>
      <ellipse cx="16" cy="14" rx="7.5" ry="3" fill="#2ea44f"/>
      <line x1="6" y1="11" x2="4" y2="21" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <line x1="11" y1="9.5" x2="11" y2="23" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <line x1="21" y1="9.5" x2="21" y2="23" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <line x1="26" y1="11" x2="28" y2="21" stroke="#2a6aa8" stroke-width="1.2" opacity="0.8"/>
      <rect x="14" y="22" width="4" height="5" rx="1" fill="#1a4a80"/>
      <line x1="9" y1="6" x2="9" y2="13" stroke="#333" stroke-width="1.3"/>
      <polygon points="9,6 14.5,8.5 9,11" fill="#FFD700"/>
      <line x1="23" y1="6" x2="23" y2="13" stroke="#333" stroke-width="1.3"/>
      <polygon points="23,6 17.5,8.5 23,11" fill="#FFD700"/>
      <ellipse cx="16" cy="14" rx="13" ry="5.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
      <ellipse cx="16" cy="19" rx="13" ry="9" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    </svg>
  </div>`;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">
    <div style="flex-shrink:0;padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center">
      <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    </div>
    ${t.aiStadiumDef?`
    <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(30,100,220,0.35),rgba(10,60,180,0.15));border-bottom:1px solid rgba(30,120,255,0.45);flex-shrink:0">
      ${n}
      <span style="font-size:12px;font-weight:700">${t.aiStadiumDef.name}</span>
      <span style="font-size:11px;color:#5DAAFF;margin-left:auto">+10 aux joueurs ${((a=t.aiStadiumDef.club)==null?void 0:a.encoded_name)||t.aiStadiumDef.country_code||""}</span>
    </div>`:""}
    <div id="opponent-swipe-zone" style="flex:1;min-height:0;overflow:hidden;display:flex;align-items:center;justify-content:center">
      <div class="opponent-preview-wrap" style="overflow:hidden;display:flex;align-items:center;justify-content:center"></div>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const o=e.querySelector(".opponent-preview-wrap"),r=e.querySelector("#opponent-swipe-zone");if(!o||!r)return;const s=r.clientWidth>=900,l=Math.max(200,r.clientHeight-(s?8:40)),c=Math.max(200,r.clientWidth-(s?8:16)),d=s?null:Math.round(Math.max(44,Math.round(c*.168))*.55);o.innerHTML=vt(t.aiTeam,t.formation,null,[],c,l,[],d),o.style.cssText=`width:${c}px;height:${l}px;overflow:hidden;flex-shrink:0`;const u=o.querySelector("svg");u&&(u.style.cssText="display:block;width:100%;height:100%",u.setAttribute("preserveAspectRatio",s?"xMidYMid meet":"none"))})),setTimeout(()=>Io(e,t,i),5e3)}const Fe=e=>_o(e);function Io(e,t,i){const n=t.homeTeam.MIL||[],a=t.aiTeam.MIL||[],o=t.stadiumDef||null,r=t.aiStadiumDef||null,s=We(n,o)+Xe(n),l=We(a,r)+Xe(a),c=s>=l;e.innerHTML=`
  <div class="match-screen" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;overflow:hidden;gap:clamp(6px,1.5vh,20px);padding:clamp(8px,1.5vw,24px);background:#0a3d1e">
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

    ${Nt(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:clamp(14px,2vw,22px);color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:clamp(48px,6vw,90px);font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${Nt(a,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const d=()=>{const f=(p,x)=>e.querySelectorAll(p).forEach((b,v)=>{setTimeout(()=>{b.style.opacity="1",b.style.transform="translateY(0) scale(1)"},x+v*90)});f(".duel-card-home",150),f(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,x)=>{setTimeout(()=>{p.style.opacity="1"},x*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(x=>x.style.opacity="1")},1250),setTimeout(()=>{u("score-home",s,800),u("score-ai",l,800)},1500)};function u(f,p,x){const b=document.getElementById(f);if(!b)return;const v=performance.now(),h=$=>{const y=Math.min(1,($-v)/x);b.textContent=Math.round(p*(1-Math.pow(1-y,3))),y<1?requestAnimationFrame(h):b.textContent=p};requestAnimationFrame(h)}requestAnimationFrame(d),t.attacker=c?"home":"ai";const g=c?an():null;c&&(t.boostCard={value:g}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(f=>Fe(f)),aiPlayers:a.map(f=>Fe(f)),homeTotal:s,aiTotal:l,text:`Duel milieu : ${t.clubName} ${s} – ${l} IA → ${c?t.clubName+" attaque":"IA attaque"}`});const m=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ee(e,t,i),t.attacker==="ai"&&setTimeout(()=>yi(e,t,i),800)};setTimeout(()=>{const f=document.getElementById("score-home"),p=document.getElementById("score-ai"),x=document.getElementById(c?"duel-row-home":"duel-row-ai"),b=document.getElementById(c?"duel-row-ai":"duel-row-home"),v=c?f:p,h=c?p:f;v&&(v.style.fontSize="80px",v.style.color=c?"#FFD700":"#ff6b6b",v.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),h&&(h.style.opacity="0.25"),setTimeout(()=>{x&&(x.style.transformOrigin="center",x.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",x.style.zIndex="5"),setTimeout(()=>{var y;const $=document.getElementById("duel-shock");if($){const j=(y=b||x)==null?void 0:y.getBoundingClientRect(),E=e.querySelector(".match-screen").getBoundingClientRect();j&&($.style.top=j.top-E.top+j.height/2+"px"),$.style.animation="shockwave .5s ease-out forwards"}b&&(b.style.transformOrigin="center",b.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var y;const $=document.getElementById("duel-finale");$&&($.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${c?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${c?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${g}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,$.style.transition="opacity .45s ease",$.style.opacity="1",$.style.pointerEvents="auto",(y=document.getElementById("start-match-btn"))==null||y.addEventListener("click",m))},600)},700)},2800)}function Ee(e,t,i){var y,j,E,G,N,ie,ee,Z,A;const n=t.selected.map(_=>_.cardId),a=t.usedSubIds||[],o=t.homeSubs.filter(_=>!a.includes(_.cardId)),s=Object.values(t.homeTeam).flat().filter(_=>_.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(_=>!_.used),c=t.phase==="attack"&&l.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(_=>!_.used).map(_=>_.cardId):[];t.log[t.log.length-1];const d=t.phase==="ai-attack"||t.phase==="ai-defense",u=t.phase==="attack",g=t.phase==="defense",m=t.phase==="finished",p=(t.homeSubs||[]).filter(_=>!(t.usedSubIds||[]).includes(_.cardId)).length>0&&t.subsUsed<t.maxSubs,x=u&&l.length===0&&c.length===0&&!p,b=t.gcCards.filter(_=>!t.usedGc.includes(_.id)),v=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const M=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b;text-align:center">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            <div style="display:flex;justify-content:center">${gt((M.players||[]).map(H=>({...H,used:!1})),"#ff6b6b",M.total)}</div>
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const M=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88;text-align:center">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            <div style="display:flex;justify-content:center">${gt((M.players||[]).map(H=>({...H,used:!1})),"#00ff88",M.total)}</div>
          </div>`}const _=t.log[t.log.length-1];return _?'<div style="padding:2px 4px">'+sn(_)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const _=window.innerWidth>=700,M=(R,z,C)=>{var xe,Ce;const F=(t.gcDefs||[]).find(qe=>qe.name===R.gc_type),Y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[F==null?void 0:F.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",U={purple:"#b06ce0",light_blue:"#00d4ef"}[F==null?void 0:F.color]||"#b06ce0",B=(F==null?void 0:F.name)||R.gc_type,O=(F==null?void 0:F.effect)||((xe=Se[R.gc_type])==null?void 0:xe.desc)||"",ve=F!=null&&F.image_url?`/icons/${F.image_url}`:null,we=((Ce=Se[R.gc_type])==null?void 0:Ce.icon)||"⚡",be=Math.round(C*.22),ge=Math.round(C*.22),ke=C-be-ge,$e=B.length>12?7:9;return`<div class="gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
          style="box-sizing:border-box;width:${z}px;height:${C}px;border-radius:10px;border:2px solid ${U};background:${Y};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${be}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${$e}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${z-6}px">${B}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${ke}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${ve?`<img src="${ve}" style="max-width:${z-10}px;max-height:${ke-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ke*.55)}px">${we}</span>`}
          </div>
          <div style="height:${ge}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${O.slice(0,38)}</span>
          </div>
        </div>`},H=(R,z)=>{var C;return`<div id="boost-card"
          style="box-sizing:border-box;width:${R}px;height:${z}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(z*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(z*.2)}px">⚡</div>
            <div style="font-size:${Math.round(z*.09)}px;color:#000;font-weight:900">+${(C=t.boostCard)==null?void 0:C.value}</div>
          </div>`},le=(R,z)=>z?H(130,175):M(R,130,175),se=(R,z)=>z?H(68,95):M(R,68,95),ce=_?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",de=m?`<button id="btn-results" style="${ce};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:d?`<div style="${ce};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:x?`<button id="btn-pass" style="${ce};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:u?`<button id="btn-action" style="${ce};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:g?`<button id="btn-action" style="${ce};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ce};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Le=u||g?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",V=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${_?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(R=>`<div class="sub-btn-col" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${Qe(R,76,100)}</div>`).join("")}
      </div>`,J=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${vt(t.homeTeam,t.formation,t.phase,n,_?1300:st(),_?600:mt(),c)}
        </div>
      </div>`;return _?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${V}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${J}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${de}${Le}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${b.map(R=>le(R,!1)).join("")}
            ${v?le(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${vt(t.homeTeam,t.formation,t.phase,n,_?1300:st(),_?600:mt(),c)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${b.map(R=>se(R,!1)).join("")}
            ${v?se(null,!0):""}
            <div id="sub-btn-main" style="cursor:${s?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${s?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${s?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${s?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${o.length}</div>
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
          <div>${de}${Le}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(_=>{var M,H,le;if(_.type==="duel"){const se=_.isGoal,ce=_.homeScored?"#FFD700":se?"#ff6b6b":"rgba(255,255,255,0.3)",de=_.homeScored?"⚽ BUT !":se?"⚽ BUT IA !":(M=_.homePlayers)!=null&&M.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${se?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ce};margin-bottom:4px">
                <div style="font-size:9px;color:${ce};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${de}</div>
                ${(H=_.homePlayers)!=null&&H.length?`<div style="margin-bottom:3px">${gt(_.homePlayers,"rgba(255,255,255,0.7)",_.homeTotal)}</div>`:""}
                ${(le=_.aiPlayers)!=null&&le.length?`<div style="opacity:0.7">${gt(_.aiPlayers,"#ff6b6b",_.aiTotal)}</div>`:""}
              </div>`}return _.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${_.outPlayer?Qe({..._.outPlayer,used:!0,_line:_.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${_.inPlayer?Qe({..._.inPlayer,_line:_.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:_.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${_.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${_.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function h(){const _=e.querySelector(".match-screen");if(!_)return;const M=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);_.style.bottom="auto",_.style.height=M+"px",_.style.minHeight=M+"px",_.style.maxHeight=M+"px",_.style.overflow="hidden";const H=e.querySelector("#mobile-action-bar"),le=e.querySelector("#mobile-play-area");H&&le&&(le.style.paddingBottom=H.offsetHeight+"px")}if(h(),setTimeout(h,120),setTimeout(h,400),setTimeout(h,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",h),window.visualViewport.addEventListener("scroll",h)),window.addEventListener("resize",h)),function(){const M=e.querySelector("#match-field .terrain-wrapper svg")||e.querySelector(".terrain-wrapper svg");if(!M)return;const H=M.closest("#match-terrain-wrap");H&&(H.style.cssText="position:relative;width:100%;height:100%;padding:0"),M.removeAttribute("width"),M.removeAttribute("height"),M.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",M.setAttribute("preserveAspectRatio","xMidYMid meet")}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const _=e.querySelector(".terrain-wrapper svg");if(_){const M=_.closest("#match-terrain-wrap");M&&(M.style.cssText="position:relative;width:100%;height:100%;padding:0"),_.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0"}})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let _=!1,M=30;const H=()=>document.getElementById("match-timer"),le=()=>{const se=H();if(!se)return;const ce=String(Math.floor(M/60)).padStart(2,"0"),de=String(M%60).padStart(2,"0");se.textContent=` ${ce}:${de}`,se.style.color=_?"#ff2222":"#ff9500",se.style.fontWeight="900"};le(),t._timerInt=setInterval(()=>{if(M--,M<0)if(!_)_=!0,M=15,le();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const se=document.createElement("div");se.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",se.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(se),setTimeout(()=>{se.remove(),xt(e,t,i)},2500)}else le()},1e3)}(y=document.getElementById("match-quit"))==null||y.addEventListener("click",()=>{Ne(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,xt(e,t,i))}),(j=document.getElementById("view-ai"))==null||j.addEventListener("click",()=>Po(t,i)),(E=document.getElementById("toggle-history"))==null||E.addEventListener("click",()=>{var _;(_=document.getElementById("match-history-panel"))==null||_.classList.add("open")}),(G=document.getElementById("close-history"))==null||G.addEventListener("click",()=>{var _;(_=document.getElementById("match-history-panel"))==null||_.classList.remove("open")}),(N=document.getElementById("btn-action"))==null||N.addEventListener("click",()=>{t.selected.length!==0&&(u?So(e,t,i):g&&Ao(e,t,i))}),(ie=document.getElementById("btn-results"))==null||ie.addEventListener("click",()=>xt(e,t,i)),(ee=document.getElementById("btn-pass"))==null||ee.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Ee(e,t,i),setTimeout(()=>yi(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(_=>{_.addEventListener("click",()=>Mo(_,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(_=>{_.addEventListener("click",()=>Qt(e,t,i,null,_.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(_=>{_.addEventListener("click",()=>qo(_.dataset.gcId,_.dataset.gcType,e,t,i))}),(Z=document.getElementById("boost-card"))==null||Z.addEventListener("click",()=>Go(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(_=>{_.addEventListener("click",()=>Qt(e,t,i,_.dataset.subId))}),(A=document.getElementById("sub-btn-main"))==null||A.addEventListener("click",()=>Qt(e,t,i))}function Mo(e,t,i,n){const a=e.dataset.cardId,o=e.dataset.role,r=t.selected.findIndex(s=>s.cardId===a);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(l=>l.cardId===a);s&&t.selected.push({...s,_role:o,_line:o})}Ee(i,t,n)}function xi(e,t,i){e.matchId&&w.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function So(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),xi(t,i,i.state.profile.id);const n=t.selected.map(o=>{const r=(t.homeTeam[o._role]||[]).find(l=>l.cardId===o.cardId)||o,s=["GK","DEF"].includes(o._role);return{...r,_line:o._role,...s?{note_a:Math.max(1,Number(r.note_a)||0)}:{}}}),a=fi(n,t.modifiers.home);t.pendingAttack={...a,players:[...n],side:"home"},t.selected.forEach(o=>{const r=(t.homeTeam[o._role]||[]).find(s=>s.cardId===o.cardId);r&&(r.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${a.total} (base ${a.base}${a.links?` +${a.links} liens`:""}) — ${t.selected.map(o=>o.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ee(e,t,i),setTimeout(()=>Bo(e,t,i),1200)}function Ao(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),xi(t,i,i.state.profile.id);const n=t.stadiumDef||null,a=t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(u=>u.cardId===l.cardId)||l,d=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:l._role,stadiumBonus:d}}),o=gi(a,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId);c&&(c.used=!0)});const r=mi(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>Fe(l)),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId)||l;return Fe(c)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(r.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(r.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ee(e,t,i),Ze(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{dt(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,dt(e,t,i,"home-attack")}function Co(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(l=>l.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(l=>!e.aiUsedSubIds.includes(l.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],a=i.find(l=>l.job===n.job)||i[0],o={...a,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],s=r.findIndex(l=>l.cardId===n.cardId);s!==-1&&(r[s]=o),e.aiUsedSubIds.push(a.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${a.firstname} ${a.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function jo(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(a=>!e.aiUsedGc.includes(a.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Se[i.gc_type],i.gc_type){case"Boost+2":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function yi(e,t,i){xi(t,i,null),Co(t),jo(t);let n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(d=>!d.used),a=!1;n.length||(n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[]].filter(d=>!d.used),a=!0);const o=Ji(n,"attack",t.difficulty);if(!o.length){ri(e,t,i);return}a&&o.forEach(d=>{d._line=d._line||d.job,d.note_a=Math.max(1,Number(d.note_a)||0)});const r=fi(o,t.modifiers.ai);t.pendingAttack={...r,players:o,side:"ai"},o.forEach(d=>{d.used=!0}),t.log.push({text:`🤖 IA attaque : ${r.total} (${o.map(d=>d.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const s=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(d=>!d.used),c=(t.homeSubs||[]).filter(d=>!(t.usedSubIds||[]).includes(d.cardId)).length>0&&t.subsUsed<t.maxSubs;if(s.length===0&&!c){if(o.length===1&&(o[0]._line==="GK"||o[0].job==="GK")&&oi(t.homeTeam)&&t.homeScore===t.aiScore){t.aiScore++,Ot(e,t,i,"ai",o[0]);return}t.aiScore++;const u={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:o.map(g=>Fe(g)),aiTotal:r.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(u),t.pendingAttack=null,Ee(e,t,i),Ze(u.aiPlayers,t.homeScore,t.aiScore,!1,()=>{dt(e,t,i,"home-attack")});return}t.phase="defense",Ee(e,t,i)}function Bo(e,t,i){var c,d;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],a=Ji(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(g=>!g.used)).length){const u=((c=t.pendingAttack)==null?void 0:c.players)||[];if(u.length===1&&(u[0]._line==="GK"||u[0].job==="GK")&&t.homeScore===t.aiScore){t.homeScore++,Ot(e,t,i,"home",u[0]);return}t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:u.map(f=>Fe(f)),homeTotal:((d=t.pendingAttack)==null?void 0:d.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,Ee(e,t,i),Ze(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{dt(e,t,i,"ai-attack")});return}const r=a.length>0?gi(a,t.modifiers.ai).total:0;a.forEach(u=>{u.used=!0});const s=mi(t.pendingAttack.total,r,t.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>Fe(u)),aiPlayers:a.map(u=>Fe(u)),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(s.shielded)l.text="🛡️ Bouclier IA !",t.log.push(l);else if(s.goal){t.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(l),t.modifiers.ai={},t.pendingAttack=null,Ee(e,t,i),Ze(l.homePlayers,t.homeScore,t.aiScore,!0,()=>{dt(e,t,i,"ai-attack")});return}else l.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(l);t.modifiers.ai={},t.pendingAttack=null,dt(e,t,i,"ai-attack")}function dt(e,t,i,n){if(t.round++,!ln(e,t,i)){if(bi(t)){xt(e,t,i);return}if(n==="home-attack"){if(!["MIL","ATT","GK","DEF"].some(o=>(t.homeTeam[o]||[]).some(r=>!r.used))){ri(e,t,i);return}t.phase="attack",Ee(e,t,i)}else{if(!["MIL","ATT","GK","DEF"].some(o=>(t.aiTeam[o]||[]).some(r=>!r.used))){ri(e,t,i);return}t.phase="ai-attack",Ee(e,t,i),setTimeout(()=>yi(e,t,i),800)}}}function oi(e){return!["GK","DEF","MIL","ATT"].some(t=>(e[t]||[]).some(i=>!i.used))}function Pi(e){const t=(e.GK||[]).some(n=>!n.used),i=["DEF","MIL","ATT"].some(n=>(e[n]||[]).some(a=>!a.used));return t&&!i}function ln(e,t,i){if(t.homeScore!==t.aiScore)return!1;if(Pi(t.homeTeam)&&oi(t.aiTeam)){const n=(t.homeTeam.GK||[]).find(a=>!a.used);return n?(n.used=!0,t.homeScore++,Ot(e,t,i,"home",n),!0):!1}if(Pi(t.aiTeam)&&oi(t.homeTeam)){const n=(t.aiTeam.GK||[]).find(a=>!a.used);return n?(n.used=!0,t.aiScore++,Ot(e,t,i,"ai",n),!0):!1}return!1}function Ot(e,t,i,n,a){t.log.push({type:"duel",isGoal:!0,homeScored:n==="home",homePlayers:n==="home"?[Fe(a)]:[],aiPlayers:n==="ai"?[Fe(a)]:[],text:`⚽ DERNIER CORNER — Le gardien ${n==="home"?"":"adverse "}marque !`});const o=document.createElement("div");o.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:950;display:flex;align-items:center;justify-content:center;overflow:hidden;text-align:center;padding:24px",document.body.appendChild(o);const r=(s,l)=>new Promise(c=>{o.innerHTML=`<div style="font-size:32px;font-weight:900;color:${l};letter-spacing:2px;animation:lcFade 1.4s ease both">${s}</div>
    <style>@keyframes lcFade{0%{opacity:0;transform:scale(0.8)}18%{opacity:1;transform:scale(1)}82%{opacity:1}100%{opacity:0;transform:scale(1.05)}}</style>`,setTimeout(c,1400)});(async()=>(await r("⚽ DERNIER CORNER","#FFD700"),await r("🧤 LE GARDIEN MONTE !","#4fc3f7"),o.remove(),t.pendingAttack=null,Ee(e,t,i),Ze([Fe(a)],t.homeScore,t.aiScore,n==="home",()=>{if(bi(t)){xt(e,t,i);return}dt(e,t,i,n==="home"?"ai-attack":"home-attack")})))()}function bi(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used));return!t&&!i}function ri(e,t,i){ln(e,t,i)||(bi(t)?xt(e,t,i):(t.phase="attack",Ee(e,t,i)))}function Qt(e,t,i,n=null,a=null){var m,f;if(t.phase!=="attack"){Et("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Et(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,x])=>(x||[]).filter(b=>b.used).map(b=>({...b,_line:b._line||p}))),r=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){Et("Aucun joueur utilisé à remplacer");return}if(!r.length){Et("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===a));const l=((m=o[s])==null?void 0:m._line)||((f=o[s])==null?void 0:f.job);let c=n?Math.max(0,r.findIndex(p=>p.cardId===n)):Math.max(0,r.findIndex(p=>p.job===l)),d=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function g(){var y,j,E,G,N,ie;const p=o[s],x=r[c],b=Math.min(130,Math.round((window.innerWidth-90)/2)),v=Math.round(b*1.35),h=ee=>`background:rgba(255,255,255,0.12);border:none;color:${ee?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ee?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${h(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${x?Qe({...x,used:!1,boost:0},b,v):"<div>—</div>"}</div>
        <button id="in-down" style="${h(c>=r.length-1)}" ${c>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${h(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?Qe({...p,used:!1,boost:0},b,v):"<div>—</div>"}</div>
        <button id="out-down" style="${h(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(y=u.querySelector("#sub-close"))==null||y.addEventListener("click",()=>u.remove()),(j=u.querySelector("#out-up"))==null||j.addEventListener("click",()=>{s>0&&(s--,g())}),(E=u.querySelector("#out-down"))==null||E.addEventListener("click",()=>{s<o.length-1&&(s++,g())}),(G=u.querySelector("#in-up"))==null||G.addEventListener("click",()=>{c>0&&(c--,g())}),(N=u.querySelector("#in-down"))==null||N.addEventListener("click",()=>{c<r.length-1&&(c++,g())});const $=(ee,Z,A,_)=>{const M=u.querySelector("#"+ee);if(!M)return;let H=0;M.addEventListener("touchstart",le=>{H=le.touches[0].clientY},{passive:!0}),M.addEventListener("touchend",le=>{const se=le.changedTouches[0].clientY-H;if(Math.abs(se)<30)return;const ce=Z();se<0&&ce<_-1?(A(ce+1),g()):se>0&&ce>0&&(A(ce-1),g())},{passive:!0})};$("in-panel",()=>c,ee=>c=ee,r.length),$("out-panel",()=>s,ee=>s=ee,o.length),(ie=u.querySelector("#sub-confirm"))==null||ie.addEventListener("click",ee=>{if(ee.preventDefault(),ee.stopPropagation(),d)return;d=!0;const Z=o[s],A=r[c];if(!Z||!A)return;let _=null,M=-1;for(const[le,se]of Object.entries(t.homeTeam)){const ce=(se||[]).findIndex(de=>de.cardId===Z.cardId);if(ce!==-1){_=le,M=ce;break}}if(M===-1||!_){Et("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const H={...A,_line:_,_col:Z._col||0,used:!1,boost:0};t.homeTeam[_].splice(M,1,H),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(A.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:Z.name,firstname:Z.firstname,note:Be(Z,_),portrait:Mt(Z),job:Z.job,country_code:Z.country_code,rarity:Z.rarity,clubName:Z.clubName,clubLogo:Z.clubLogo},inPlayer:{name:A.name,firstname:A.firstname,note:Be(A,_),portrait:Mt(A),job:A.job,country_code:A.country_code,rarity:A.rarity,clubName:A.clubName,clubLogo:A.clubLogo},text:`🔄 ${A.firstname} ${A.name} remplace ${Z.firstname} ${Z.name}`}),u.remove(),$o(Z,A,()=>Ee(e,t,i))})}document.body.appendChild(u),g()}function qo(e,t,i,n,a){var f,p;const o=(n.gcDefs||[]).find(x=>x.name===t),r=Se[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",l={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",c=(o==null?void 0:o.name)||t,d=(o==null?void 0:o.effect)||r.desc,u=o!=null&&o.image_url?`/icons/${o.image_url}`:null,g=r.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${l};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${l}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${c.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${c}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${g}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${d}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(m),(f=m.querySelector("#gc-back"))==null||f.addEventListener("click",()=>m.remove()),(p=m.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{m.remove(),Fo(e,t,i,n,a)})}function Dt(e,t,i,n,a,o){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function l(){var c,d;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start;justify-content:center">
      ${e.map(u=>{const g=u._line||u.job||"MIL",m=s.find(p=>p.cardId===u.cardId),f=Ie({...u,_evolution_bonus:0},{width:90,showStad:!0,role:g,extraNote:u.boost||0});return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="position:relative;border-radius:8px;${m?"outline:3px solid #FFD700;outline-offset:2px;":""}cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          ${f}
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(c=r.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const g=u.dataset.cid,m=e.find(p=>p.cardId===g);if(!m)return;const f=s.findIndex(p=>p.cardId===g);f>-1?s.splice(f,1):s.length<t&&s.push(m),l()})}),(d=r.querySelector("#gc-picker-confirm"))==null||d.addEventListener("click",()=>{r.remove(),o(s)})}l(),document.body.appendChild(r)}const Do={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,a,o)=>{const r=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,l])=>l.filter(c=>!c.used).map(c=>({...c,_line:s})));return r.length?(Dt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,a,n,s=>{s.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(d=>d.cardId===l.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),Ee(a,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ee(a,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},a,o,r)=>{const s=n==="home"?a.homeTeam:a.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,u])=>u.filter(g=>!g.used).map(g=>({...g,_line:d})));return c.length?(Dt(c,t,`Choisir ${t} joueur(s) ${l}(s) à débuffer (-${e})`,o,a,d=>{d.forEach(u=>{const m=((n==="home"?a.homeTeam:a.aiTeam)[u._line]||[]).find(f=>f.cardId===u.cardId);m&&(m.boost=(m.boost||0)-e,a.log.push({text:`🎯 -${e} sur ${m.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Ee(o,a,r)}),!0):(a.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),Ee(o,a,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,a,o)=>{const r=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",l=Object.entries(r).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,d])=>d.filter(u=>!u.used).map(u=>({...u,_line:c})));return l.length?(Dt(l,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,a,n,c=>{c.forEach(d=>{const g=((i==="home"?n.homeTeam:n.aiTeam)[d._line]||[]).find(m=>m.cardId===d.cardId);g&&(g.used=!0,n.log.push({text:`❌ ${g.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ee(a,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Ee(a,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,a)=>{const o=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,s])=>s.filter(l=>l.used).map(l=>({...l,_line:r})));return o.length?(Dt(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(s=>{const l=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),Ee(n,i,a)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ee(n,i,a),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Fo(e,t,i,n,a){n.usedGc.push(e);const o=n.gcDefs||[],r=o.find(l=>l.name===t)||o.find(l=>{var c;return((c=l.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const l=Do[r.effect_type];l?l(r.effect_params||{},n,i,a)||(s=!0):(a.toast(`Effet "${r.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(n.homeTeam).flatMap(([c,d])=>(d||[]).filter(u=>u.used).map(u=>({...u,_line:c})));l.length?(l[0].used=!1,n.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(l.length){const c=l.sort((d,u)=>Be(u,"ATT")-Be(d,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}w.from("cards").delete().eq("id",e).then(()=>{}),s&&Ee(i,n,a)}function Go(e,t,i){const n=Object.values(t.homeTeam).flat().filter(a=>!a.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(a=>`
        <div class="player-boost-opt" data-card-id="${a.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${bo[a.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Be(a,a._line||a.job)}</div>
          <div style="flex:1"><b>${a.firstname} ${a.name}</b><div style="font-size:11px;color:#888">${a._line||a.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[r]||[]).find(l=>l.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Ee(e,t,i)})})}async function xt(e,t,i){var d,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,a=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,r=a?"victoire":o?"nul":"defaite",s=Gn(t.mode,r);t.matchId&&await w.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:a?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const l={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};a?l.wins=(n.profile.wins||0)+1:o?l.draws=(n.profile.draws||0)+1:l.losses=(n.profile.losses||0)+1,await w.from("users").update(l).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${a?"🏆":o?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${a?"Victoire !":o?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${s.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(c),(d=document.getElementById("res-home"))==null||d.addEventListener("click",()=>{c.remove(),Ne(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{c.remove(),Ne(e),i.navigate("match",{matchMode:t.mode})})}function Po(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${Ut(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function wt(e,t,i,n,a={}){return cn(e,t,i,n,a.myGC||[],a.gcDefs||[],a.isRanked||!1,a.rankedData||null,a.stadiumDef||null,a.onMatchEnd||null,a.mlLeagueId||null,a.mlMatchId||null)}async function Ro(e,t,i){const{data:n}=await w.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const a=n.home_id===t.state.user.id;return cn(e,t,i,a,[],[],n.is_ranked||!1,null,null,null,null,null)}async function cn(e,t,i,n,a=[],o=[],r=!1,s=null,l=null,c=null,d=null,u=null){const{state:g,navigate:m,toast:f}=t,p=n?"p1":"p2",x=n?"p2":"p1",b=(a||[]).map(k=>k.id),v=(a||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await w.from("matches").select("*").eq("id",i).single();if(!h){f("Match introuvable","error"),m("home");return}async function $(){var ye,_e;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:k,error:L},{data:I,error:S},{data:T},{data:D}]=await Promise.all([w.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),w.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),w.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),w.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",L==null?void 0:L.message,"p2:",S==null?void 0:S.message,"p1D:",(ye=k==null?void 0:k.starters)==null?void 0:ye.length,"p2D:",(_e=I==null?void 0:I.starters)==null?void 0:_e.length);const q=te=>{const Te=Number(te.evolution_bonus)||0;return{cardId:te.card_id,position:te.position,id:te.id,firstname:te.firstname,name:te.surname_real,country_code:te.country_code,club_id:te.club_id,job:te.job,job2:te.job2,note_g:(Number(te.note_g)||0)+(te.job==="GK"||te.job2==="GK"&&Number(te.note_g)>0?Te:0),note_d:(Number(te.note_d)||0)+(te.job==="DEF"||te.job2==="DEF"&&Number(te.note_d)>0?Te:0),note_m:(Number(te.note_m)||0)+(te.job==="MIL"||te.job2==="MIL"&&Number(te.note_m)>0?Te:0),note_a:(Number(te.note_a)||0)+(te.job==="ATT"||te.job2==="ATT"&&Number(te.note_a)>0?Te:0),evolution_bonus:Te,rarity:te.rarity,skin:te.skin,hair:te.hair,hair_length:te.hair_length,face:te.face||null,clubName:te.club_encoded_name||null,clubLogo:te.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},P=((k==null?void 0:k.starters)||[]).map(te=>q(te)),W=((I==null?void 0:I.starters)||[]).map(te=>q(te)),Q=(k==null?void 0:k.formation)||"4-4-2",X=(I==null?void 0:I.formation)||"4-4-2";let oe=Rt(P,Q),K=Rt(W,X);const re=((k==null?void 0:k.subs)||[]).map(te=>q(te)),pe=((I==null?void 0:I.subs)||[]).map(te=>q(te)),ae=(k==null?void 0:k.stadium_def)||(n?l:null),ue=(I==null?void 0:I.stadium_def)||(n?null:l);return ae&&(oe=St(oe,ae),Pt(re,ae)),ue&&(K=St(K,ue),Pt(pe,ue)),{p1Team:oe,p2Team:K,p1Subs:re,p2Subs:pe,p1Formation:Q,p2Formation:X,p1Name:(T==null?void 0:T.club_name)||(T==null?void 0:T.pseudo)||"Joueur 1",p2Name:(D==null?void 0:D.club_name)||(D==null?void 0:D.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?v:[],gcCardsFull_p2:n?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let y=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!y,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",g.profile.id),!y)if(n){y=await $(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((y==null?void 0:y.p1Team)||{}));const{data:k}=await w.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await w.from("matches").update({game_state:y,turn_user_id:h.home_id}).eq("id",i):y=k.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!y;k++){await new Promise(I=>setTimeout(I,400));const{data:L}=await w.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(y=L.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(L!=null&&L.game_state))}if(!y){f("Erreur de synchronisation","error"),m("home");return}y.gc_p2=b,y.gcCardsFull_p2=v,await w.from("matches").update({game_state:y}).eq("id",i)}let j=!1,E=null,G=!1;const N=new Set,ie=new Set;async function ee(k){var X,oe;try{w.removeChannel(Z)}catch{}const L=y[p+"Score"]||0,I=y[x+"Score"]||0;let S,T;k.winner_id?(S=k.winner_id===g.profile.id,T=!1):k.forfeit?(S=L>I,T=!1):(T=L===I,S=L>I);let D="";if(r&&n)try{const{data:K}=await w.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:re}=await w.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(K&&re){const pe=S?1:T?.5:0,ae=1-pe,ue=K.placement_matches<10,ye=re.placement_matches<10,_e=computeGlicko2(K.mmr,K.mmr_deviation,K.mmr_volatility,re.mmr,re.mmr_deviation,pe===1?1:pe===0?0:.5,ue),te=computeGlicko2(re.mmr,re.mmr_deviation,re.mmr_volatility,K.mmr,K.mmr_deviation,ae===1?1:ae===0?0:.5,ye);await w.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:T?null:S?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:_e.delta,p_away_delta:te.delta,p_home_new_rd:_e.newRd,p_away_new_rd:te.newRd,p_home_new_vol:_e.newSigma,p_away_new_vol:te.newSigma});const Te=_e.delta,Ae=_e.newMmr,Me=getTier(Ae),Ge=Te>=0?"+":"",ct=Te>=0?"#4caf50":"#ff6b6b",Pe=getTier(K.mmr);D=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Me.id!==Pe.id?`<div style="font-size:20px;font-weight:900;color:${Me.color}">
                    ${Ae>K.mmr?"📈":"📉"} ${Pe.emoji} ${Pe.label} → ${Me.emoji} ${Me.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Ae>K.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${Te>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Me.color}">${Me.emoji} ${Me.label}</div>`}
              ${ue?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${K.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(K){console.error("[Ranked] MMR update error:",K)}(X=document.getElementById("pvp-end-overlay"))==null||X.remove();const q=document.createElement("div");q.id="pvp-end-overlay",q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const P=T?"🤝":S?"🏆":"😞",W=T?"MATCH NUL":S?"VICTOIRE !":"DÉFAITE",Q=T?"#fff":S?"#FFD700":"#ff6b6b";q.innerHTML=`
      <div style="font-size:64px">${P}</div>
      <div style="font-size:26px;font-weight:900;color:${Q}">${W}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${y[p+"Name"]} ${L} – ${I} ${y[x+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${S?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${D}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(q),(oe=q.querySelector("#pvp-end-home"))==null||oe.addEventListener("click",()=>{q.remove(),Ne(e),m(r?"ranked":"home")})}const Z=w.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{const L=k.new;try{if(L.status==="finished"||L.forfeit){if(j)return;j=!0,E&&(clearInterval(E),E=null),L.game_state&&(y=L.game_state),ee(L);return}if(L.game_state){const I=y;y=L.game_state;const S=y._lastGC;if(S&&S.seq&&!ie.has(S.seq)&&(ie.add(S.seq),S.by!==p)){R(S.type,S.by,()=>de());return}const T=I[p+"Score"]||0,D=I[x+"Score"]||0,q=y[p+"Score"]||0,P=y[x+"Score"]||0,W=q>T,Q=P>D;if((W||Q)&&!N.has(y.round)){N.add(y.round);const X=[...y.log||[]].reverse().find(K=>K.isGoal),oe=((X==null?void 0:X.homePlayers)||[]).map(K=>({name:K.name,note:K.note,portrait:K.portrait,job:K.job}));Ze(oe,q,P,W,()=>de());return}de()}}catch(I){console.error("[PvP] crash:",I)}}).subscribe();async function A(k){Object.assign(y,k),y.lastActionAt=new Date().toISOString();const{error:L}=await w.from("matches").update({game_state:y}).eq("id",i);L&&f("Erreur de synchronisation","error");try{de()}catch(I){console.error("[PvP] renderPvpScreen crash:",I)}}async function _(){if(j)return;j=!0,E&&(clearInterval(E),E=null);const k=n?h.away_id:h.home_id,L=n?"p2":"p1",I=n?"p1":"p2",S={...y,[L+"Score"]:3,[I+"Score"]:0,phase:"finished"};try{await w.from("matches").update({status:"finished",forfeit:!0,winner_id:k,home_score:S.p1Score||0,away_score:S.p2Score||0,game_state:S}).eq("id",i)}catch{}try{w.removeChannel(Z)}catch{}setTimeout(()=>{Ne(e),m("home")},800)}const M={BOOST_STAT:({value:k=1,count:L=1,roles:I=[]},S,T)=>{const D=S[p+"Team"],q=Object.entries(D).filter(([P])=>!I.length||I.includes(P)).flatMap(([P,W])=>W.filter(Q=>!Q.used).map(Q=>({...Q,_line:P})));if(!q.length){S.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),T(S);return}H(q,L,`Choisir ${L} joueur(s) à booster (+${k})`,P=>{P.forEach(W=>{const Q=(D[W._line]||[]).find(X=>X.cardId===W.cardId);Q&&(Q.boost=(Q.boost||0)+k,S.log.push({text:`⚡ +${k} sur ${Q.name}`,type:"info"}))}),S[p+"Team"]=D,T(S)})},DEBUFF_STAT:({value:k=1,count:L=1,roles:I=[],target:S="ai"},T,D)=>{const q=S==="home"?p:x,P=T[q+"Team"],W=S==="home"?"allié":"adverse",Q=Object.entries(P).filter(([X])=>!I.length||I.includes(X)).flatMap(([X,oe])=>oe.map(K=>({...K,_line:X})));if(!Q.length){T.log.push({text:`🎯 Aucun joueur ${W}`,type:"info"}),D(T);return}H(Q,L,`Choisir ${L} joueur(s) ${W}(s) (-${k})`,X=>{X.forEach(oe=>{const K=(P[oe._line]||[]).find(re=>re.cardId===oe.cardId);K&&(K.boost=(K.boost||0)-k,T.log.push({text:`🎯 -${k} sur ${K.name}`,type:"info"}))}),T[q+"Team"]=P,D(T)})},GRAY_PLAYER:({count:k=1,roles:L=[],target:I="ai"},S,T)=>{const D=I==="home"?p:x,q=S[D+"Team"],P=I==="home"?"allié":"adverse",W=Object.entries(q).filter(([Q])=>!L.length||L.includes(Q)).flatMap(([Q,X])=>X.filter(oe=>!oe.used).map(oe=>({...oe,_line:Q})));if(!W.length){S.log.push({text:`❌ Aucun joueur ${P}`,type:"info"}),T(S);return}H(W,k,`Choisir ${k} joueur(s) ${P}(s) à exclure`,Q=>{const X="usedCardIds_"+D,oe=new Set(S[X]||[]);Q.forEach(K=>{const re=(q[K._line]||[]).find(pe=>pe.cardId===K.cardId);re&&(re.used=!0,oe.add(K.cardId),S.log.push({text:`❌ ${re.name} exclu !`,type:"info"}))}),S[X]=[...oe],S[D+"Team"]=q,T(S)})},REVIVE_PLAYER:({count:k=1,roles:L=[]},I,S)=>{const T=I[p+"Team"],D=Object.entries(T).filter(([q])=>!L.length||L.includes(q)).flatMap(([q,P])=>P.filter(W=>W.used).map(W=>({...W,_line:q})));if(!D.length){I.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),S(I);return}H(D,k,`Choisir ${k} joueur(s) à ressusciter`,q=>{q.forEach(P=>{const W=(T[P._line]||[]).find(Q=>Q.cardId===P.cardId);W&&(W.used=!1,I.log.push({text:`💫 ${W.name} ressuscité !`,type:"info"}))}),I[p+"Team"]=T,S(I)})},REMOVE_GOAL:({},k,L)=>{const I=x+"Score";k[I]>0?(k[I]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),L(k)},ADD_GOAL_DRAW:({},k,L)=>{k[p+"Score"]===k[x+"Score"]?(k[p+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),L(k)},ADD_SUB:({value:k=1},L,I)=>{L.maxSubs=(L.maxSubs||3)+k,L.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),I(L)},CUSTOM:({},k,L)=>L(k)};function H(k,L,I,S){const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let D=[];function q(){var W,Q;const P=k.map(X=>{const oe={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[X._line]||"#555",K=Be(X,X._line)+(X.boost||0),pe=D.find(ue=>ue.cardId===X.cardId)?"#FFD700":"rgba(255,255,255,0.25)",ae=X.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${X.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${pe};background:${oe};overflow:hidden;cursor:pointer;${ae}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${X.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${K}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${X._line}</div>
        </div>`}).join("");T.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${I}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${D.length}/${L}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${P}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${D.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${D.length}/${L})
          </button>
        </div>`,(W=T.querySelector("#pp-close"))==null||W.addEventListener("click",()=>T.remove()),T.querySelectorAll(".pp-item").forEach(X=>{X.addEventListener("click",()=>{const oe=X.dataset.cid,K=k.find(pe=>pe.cardId===oe),re=D.findIndex(pe=>pe.cardId===oe);K&&(re>-1?D.splice(re,1):D.length<L&&D.push(K),q())})}),(Q=T.querySelector("#pp-confirm"))==null||Q.addEventListener("click",()=>{T.remove(),S(D)})}q(),document.body.appendChild(T)}async function le(k,L){const S=(y["gcCardsFull_"+p]||[]).find(P=>P.id===k),T=(S==null?void 0:S._gcDef)||(y.gcDefs||[]).find(P=>{var W;return P.name===L||((W=P.name)==null?void 0:W.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),D=[...y["usedGc_"+p]||[],k],q={type:L,by:p,seq:(y._gcAnimSeq||0)+1};ie.add(q.seq),R(L,p,async()=>{if(T!=null&&T.effect_type&&T.effect_type!=="CUSTOM"){const W=M[T.effect_type];if(W){const Q={...y};W(T.effect_params||{},Q,async X=>{X["usedGc_"+p]=D,X._lastGC=q,X._gcAnimSeq=q.seq,await A(X)});return}}const P={...y};switch(L){case"Remplacement+":P.maxSubs=(P.maxSubs||3)+1,P.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const W=x+"Score";P[W]>0&&(P[W]--,P.log.push({text:"🚫 But annulé",type:"info"}));break}}P["usedGc_"+p]=D,P._lastGC=q,P._gcAnimSeq=q.seq,await A(P)})}function se(k,L){const I="usedCardIds_"+k,S=new Set(y[I]||[]);L.forEach(T=>S.add(T)),y[I]=[...S]}function ce(){for(const k of["p1","p2"]){const L=new Set(y["usedCardIds_"+k]||[]),I=y[k+"Team"];if(I)for(const S of["GK","DEF","MIL","ATT"])(I[S]||[]).forEach(T=>{T.used=L.has(T.cardId)})}}function de(){var Ve,ot,wi,_i,ki,$i;if(y.phase==="reveal")return Le();if(y.phase==="midfield")return J();if(y.phase==="finished")return Ue();const k=y[p+"Team"],L=y[x+"Team"];ce();const I=y[p+"Score"],S=y[x+"Score"],T=y[p+"Name"],D=y[x+"Name"],q=y.phase===p+"-attack",P=y.phase===p+"-defense",W=Array.isArray(y["selected_"+p])?y["selected_"+p]:[],Q=W.map(ne=>ne.cardId),X=window.innerWidth>=700,oe=y[p+"Subs"]||[],K=y["usedSubIds_"+p]||[],re=oe.filter(ne=>!K.includes(ne.cardId)),pe=y["gcCardsFull_"+p]||[],ae=y["usedGc_"+p]||[],ue=pe.filter(ne=>!ae.includes(ne.id)),ye=y.boostOwner===p&&!y.boostUsed,_e=!["GK","DEF","MIL","ATT"].some(ne=>(L[ne]||[]).some(fe=>!fe.used)),te=[...k.MIL||[],...k.ATT||[]].filter(ne=>!ne.used),Te=q&&_e&&te.length===0?[...k.GK||[],...k.DEF||[]].filter(ne=>!ne.used).map(ne=>ne.cardId):[];function Ae(ne,fe,ze){var zi,Ii;const me=ne._gcDef,rt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[me==null?void 0:me.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",pt={purple:"#b06ce0",light_blue:"#00d4ef"}[me==null?void 0:me.color]||"#b06ce0",kt=(me==null?void 0:me.name)||ne.gc_type,$t=(me==null?void 0:me.effect)||((zi=Se[ne.gc_type])==null?void 0:zi.desc)||"",Ei=me!=null&&me.image_url?`/icons/${me.image_url}`:null,yn=((Ii=Se[ne.gc_type])==null?void 0:Ii.icon)||"⚡",Li=Math.round(ze*.22),Ti=Math.round(ze*.22),Vt=ze-Li-Ti,bn=kt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ne.id}" data-gc-type="${ne.gc_type}"
        style="box-sizing:border-box;width:${fe}px;height:${ze}px;border-radius:10px;border:2px solid ${pt};background:${rt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${Li}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${bn}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${fe-6}px">${kt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Vt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Ei?`<img src="${Ei}" style="max-width:${fe-10}px;max-height:${Vt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Vt*.55)}px">${yn}</span>`}
        </div>
        <div style="height:${Ti}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${$t.slice(0,38)}</span>
        </div>
      </div>`}function Me(ne,fe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ne}px;height:${fe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(fe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(fe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(fe*.09)}px;color:#000;font-weight:900">+${y.boostValue}</div>
      </div>`}const Ge=(ne,fe)=>fe?Me(130,175):Ae(ne,130,175),ct=(ne,fe)=>fe?Me(68,95):Ae(ne,68,95),Pe=X?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",_t=q?$e(p)?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${W.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Pe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:P?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${W.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${D}</div>`,je=q&&!$e(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':q||P?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${W.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${X?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${re.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':re.map(ne=>`<div class="pvp-sub-btn" data-sub-id="${ne.cardId}" style="cursor:pointer;flex-shrink:0">${Qe(ne,X?76:44,X?100:58)}</div>`).join("")}
    </div>`,Re=q?"attack":P?"defense":"idle",it=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${vt(k,y[p+"Formation"],Re,Q,st(),mt(),Te)}
      </div>
    </div>`,Ke=(()=>{var fe,ze;if(P&&((fe=y.pendingAttack)!=null&&fe.players)){const me=y.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${D} ATTAQUE — Défendez !</div>
          ${gt((me.players||[]).map(rt=>({...rt,used:!1})),"#ff6b6b",me.total)}
        </div>`}if(q&&((ze=y.pendingAttack)!=null&&ze.players)){const me=y.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${gt((me.players||[]).map(rt=>({...rt,used:!1})),"#00ff88",me.total)}
        </div>`}const ne=(y.log||[]).slice(-1)[0];return ne?'<div style="padding:2px 4px">'+sn(ne)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),nt=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${T}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${I} – ${S}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${D}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(y.log||[]).length})
      </button>`;He(e),e.style.overflow="hidden",X?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${nt}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${it}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${_t}${je}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ue.map(ne=>Ge(ne,!1)).join("")}
            ${ye?Ge(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${nt}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${vt(k,y[p+"Formation"],Re,Q,st(),mt(),Te)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ue.map(ne=>ct(ne,!1)).join("")}
            ${ye?ct(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${q&&re.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${q&&re.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${q&&re.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${q&&re.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${re.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(y["usedSubIds_"+p]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(y["usedSubIds_"+p]||[]).length}/${y.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${_t}${je}</div>
        </div>
      </div>`;function De(){const ne=e.querySelector(".match-screen");if(!ne)return;const fe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ne.style.height=fe+"px",ne.style.minHeight=fe+"px",ne.style.maxHeight=fe+"px",ne.style.overflow="hidden";const ze=e.querySelector("#mobile-action-bar"),me=e.querySelector("#mobile-play-area");ze&&me&&(me.style.paddingBottom=ze.offsetHeight+"px")}if(De(),setTimeout(De,120),setTimeout(De,400),G||(G=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",De),window.visualViewport.addEventListener("scroll",De)),window.addEventListener("resize",De)),function(){const fe=e.querySelector(".terrain-wrapper svg");fe&&(fe.removeAttribute("width"),fe.removeAttribute("height"),fe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",fe.setAttribute("viewBox","-26 -26 352 352"),fe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ne=>{ne.addEventListener("click",()=>{if(!q&&!P)return;const fe=ne.dataset.cardId,ze=ne.dataset.role,me=(k[ze]||[]).find($t=>$t.cardId===fe);if(!me||me.used)return;const rt=Te.includes(fe);if(q&&!["MIL","ATT"].includes(ze)&&!rt)return;Array.isArray(y["selected_"+p])||(y["selected_"+p]=[]);const pt=y["selected_"+p],kt=pt.findIndex($t=>$t.cardId===fe);kt>-1?pt.splice(kt,1):pt.length<3&&pt.push({...me,_role:ze}),de()})}),e.querySelectorAll(".match-used-hit").forEach(ne=>{ne.addEventListener("click",()=>F(ne.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ne=>{ne.addEventListener("click",()=>F())}),(Ve=e.querySelector("#pvp-sub-open"))==null||Ve.addEventListener("click",()=>F()),e.querySelectorAll(".pvp-gc-mini").forEach(ne=>{ne.addEventListener("click",()=>z(ne.dataset.gcId,ne.dataset.gcType))}),(ot=e.querySelector("#pvp-boost-card"))==null||ot.addEventListener("click",()=>C()),(wi=e.querySelector("#pvp-action"))==null||wi.addEventListener("click",ne=>{q?ne.currentTarget.dataset.pass==="1"||!$e(p)?O():ve():P&&we()}),(_i=e.querySelector("#pvp-quit"))==null||_i.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&_()}),(ki=e.querySelector("#pvp-view-opp"))==null||ki.addEventListener("click",()=>U()),($i=e.querySelector("#pvp-toggle-history"))==null||$i.addEventListener("click",()=>B()),E&&(clearInterval(E),E=null),(q||P)&&!j){let ne=30,fe=!1;const ze=()=>document.getElementById("pvp-timer"),me=()=>{ze()&&(ze().textContent=ne+"s",ze().style.color=fe?"#ff4444":"#fff")};me(),E=setInterval(()=>{ne--,ne<0?fe?(clearInterval(E),E=null,q&&!$e(p)?O():_()):(fe=!0,ne=15,me()):me()},1e3)}}function Le(){He(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;overflow-y:auto;background:#0a3d1e">
      ${ko(y[x+"Team"],y[x+"Formation"],null,y[x+"Name"]||"Adversaire")}
    </div>`,p==="p1"&&setTimeout(async()=>{await A({phase:"midfield"})},5e3)}let V=!1;function J(){if(V)return;const k=y[p+"Team"].MIL||[],L=y[x+"Team"].MIL||[],I=We(k)+Xe(k),S=We(L)+Xe(L),T=I>=S;He(e),e.innerHTML=`
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
      ${Nt(k,y[p+"Name"]||"Vous","#FFD700","me",null)}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${Nt(L,y[x+"Name"]||"Adversaire","#e03030","opp",null)}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const D=(re,pe)=>e.querySelectorAll(re).forEach((ae,ue)=>{setTimeout(()=>{ae.style.opacity="1",ae.style.transform="translateY(0) scale(1)"},pe+ue*90)});D(".duel-card-me",150),D(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((re,pe)=>setTimeout(()=>{re.style.opacity="1"},pe*70)),900),setTimeout(()=>{const re=e.querySelector("#pvp-vs");re&&(re.style.opacity="1",re.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(pe=>pe.style.opacity="1")},1250);function q(re,pe,ae){const ue=document.getElementById(re);if(!ue)return;const ye=performance.now(),_e=te=>{const Te=Math.min(1,(te-ye)/ae);ue.textContent=Math.round(pe*(1-Math.pow(1-Te,3))),Te<1?requestAnimationFrame(_e):ue.textContent=pe};requestAnimationFrame(_e)}setTimeout(()=>{q("pvp-score-me",I,800),q("pvp-score-opp",S,800)},1500);const P=y.p1Team.MIL||[],W=y.p2Team.MIL||[],Q=We(P)+Xe(P),X=We(W)+Xe(W),oe=Q>=X?"p1":"p2";let K=y.boostValue;K==null&&(K=an(),y.boostValue=K,y.boostOwner=oe,y.boostUsed=!1),V=!0,setTimeout(()=>{const re=e.querySelector("#duel-row-"+(T?"me":"opp")),pe=e.querySelector("#duel-row-"+(T?"opp":"me")),ae=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),ye=T?ae:ue,_e=T?ue:ae;ye&&(ye.style.fontSize="80px",ye.style.color=T?"#FFD700":"#ff6b6b",ye.style.animation="duelPulse .5s ease"+(T?",duelGlow 1.5s ease infinite .5s":"")),_e&&(_e.style.opacity="0.25"),setTimeout(()=>{re&&(re.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",re.style.zIndex="5"),setTimeout(()=>{const te=document.getElementById("duel-shock");te&&(te.style.animation="shockwave .5s ease-out forwards"),pe&&(pe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Me;const te=document.getElementById("pvp-duel-finale");if(!te)return;const Te=y.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+K+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ae=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;te.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(T?"⚽ "+y[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+y[x+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Te+Ae,te.style.transition="opacity .45s ease",te.style.opacity="1",te.style.pointerEvents="auto",(Me=document.getElementById("pvp-start-match"))==null||Me.addEventListener("click",async()=>{const Ge=oe;await A({phase:Ge+"-attack",attacker:Ge,round:1,boostValue:K,boostUsed:!1,boostOwner:Ge})})},600)},700)},2800)}function R(k,L,I){var ae,ue;const S=(y.gcDefs||[]).find(ye=>{var _e;return ye.name===k||((_e=ye.name)==null?void 0:_e.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),T={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",D={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",q=(S==null?void 0:S.name)||k,P=(S==null?void 0:S.effect)||((ae=Se[k])==null?void 0:ae.desc)||"",W=S!=null&&S.image_url?`/icons/${S.image_url}`:null,Q=((ue=Se[k])==null?void 0:ue.icon)||"⚡",oe=L===p?"Vous":y[L+"Name"]||"Adversaire",K=document.createElement("div");K.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",K.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${D}66}50%{box-shadow:0 0 60px ${D}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${D};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${oe} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${D};background:${T};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${q.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${q}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${W?`<img src="${W}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${Q}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${P}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(K);let re=!1;const pe=()=>{re||(re=!0,K.remove(),setTimeout(()=>I&&I(),50))};K.addEventListener("click",pe),setTimeout(pe,3e3)}function z(k,L){var K,re,pe,ae;const S=(y["gcCardsFull_"+p]||[]).find(ue=>ue.id===k),T=S==null?void 0:S._gcDef,D={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[T==null?void 0:T.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",q={purple:"#b06ce0",light_blue:"#00d4ef"}[T==null?void 0:T.color]||"#b06ce0",P=(T==null?void 0:T.name)||L,W=(T==null?void 0:T.effect)||((K=Se[L])==null?void 0:K.desc)||"Carte spéciale.",Q=T!=null&&T.image_url?`/icons/${T.image_url}`:null,X=((re=Se[L])==null?void 0:re.icon)||"⚡",oe=document.createElement("div");oe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",oe.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${q};background:${D};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${q}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${P.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${P}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Q?`<img src="${Q}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${X}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${W}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(oe),(pe=oe.querySelector("#pvp-gc-back"))==null||pe.addEventListener("click",()=>oe.remove()),(ae=oe.querySelector("#pvp-gc-use"))==null||ae.addEventListener("click",()=>{oe.remove(),le(k,L)})}function C(){var S;const k=y[p+"Team"],L=Object.entries(k).flatMap(([T,D])=>(D||[]).filter(q=>!q.used).map(q=>({...q,_line:T})));if(!L.length)return;const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",I.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${y.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(T=>{const D={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[T._line]||"#555",q=Be(T,T._line)+(T.boost||0);return`<div class="bp-item" data-cid="${T.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${D};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${T.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${q}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(I),(S=I.querySelector("#bp-close"))==null||S.addEventListener("click",()=>I.remove()),I.querySelectorAll(".bp-item").forEach(T=>{T.addEventListener("click",async()=>{const D=T.dataset.cid,q=L.find(W=>W.cardId===D);if(!q)return;const P=(k[q._line]||[]).find(W=>W.cardId===D);P&&(P.boost=(P.boost||0)+y.boostValue),I.remove(),await A({[p+"Team"]:k,boostUsed:!0})})})}function F(k=null){var re,pe;if(!(y.phase===p+"-attack")){f("Remplacement uniquement avant votre attaque","warning");return}const I=y[p+"Team"],S=y["usedSubIds_"+p]||[],T=y.maxSubs||3;if(S.length>=T){f(`Maximum ${T} remplacements atteint`,"warning");return}const D=Object.entries(I).flatMap(([ae,ue])=>(ue||[]).filter(ye=>ye.used).map(ye=>({...ye,_line:ae}))),q=(y[p+"Subs"]||[]).filter(ae=>!S.includes(ae.cardId));if(!D.length){f("Aucun joueur utilisé à remplacer","warning");return}if(!q.length){f("Aucun remplaçant disponible","warning");return}let P=Math.max(0,D.findIndex(ae=>ae.cardId===k));const W=((re=D[P])==null?void 0:re._line)||((pe=D[P])==null?void 0:pe.job);let Q=Math.max(0,q.findIndex(ae=>ae.job===W)),X=!1;const oe=document.createElement("div");oe.id="pvp-sub-overlay",oe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function K(){var Ae,Me,Ge,ct,Pe,_t;const ae=D[P],ue=q[Q],ye=Math.min(130,Math.round((window.innerWidth-90)/2)),_e=Math.round(ye*1.35),te=je=>`background:rgba(255,255,255,0.12);border:none;color:${je?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${je?"default":"pointer"};flex-shrink:0`;oe.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${S.length}/${T})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${te(Q===0)}" ${Q===0?"disabled":""}>▲</button>
          <div>${ue?Qe({...ue,used:!1,boost:0},ye,_e):"<div>—</div>"}</div>
          <button id="pin-down" style="${te(Q>=q.length-1)}" ${Q>=q.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Q+1}/${q.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${te(P===0)}" ${P===0?"disabled":""}>▲</button>
          <div>${ae?Qe({...ae,used:!1,boost:0},ye,_e):"<div>—</div>"}</div>
          <button id="pout-down" style="${te(P>=D.length-1)}" ${P>=D.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${P+1}/${D.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Ae=oe.querySelector("#psub-close"))==null||Ae.addEventListener("click",()=>oe.remove()),(Me=oe.querySelector("#pout-up"))==null||Me.addEventListener("click",()=>{P>0&&(P--,K())}),(Ge=oe.querySelector("#pout-down"))==null||Ge.addEventListener("click",()=>{P<D.length-1&&(P++,K())}),(ct=oe.querySelector("#pin-up"))==null||ct.addEventListener("click",()=>{Q>0&&(Q--,K())}),(Pe=oe.querySelector("#pin-down"))==null||Pe.addEventListener("click",()=>{Q<q.length-1&&(Q++,K())});const Te=(je,Oe,Re,it)=>{const Ke=oe.querySelector("#"+je);if(!Ke)return;let nt=0;Ke.addEventListener("touchstart",De=>{nt=De.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",De=>{const Ve=De.changedTouches[0].clientY-nt;if(Math.abs(Ve)<30)return;const ot=Oe();Ve<0&&ot<it-1?(Re(ot+1),K()):Ve>0&&ot>0&&(Re(ot-1),K())},{passive:!0})};Te("pin-panel",()=>Q,je=>Q=je,q.length),Te("pout-panel",()=>P,je=>P=je,D.length),(_t=oe.querySelector("#psub-confirm"))==null||_t.addEventListener("click",async je=>{if(je.preventDefault(),je.stopPropagation(),X)return;X=!0;const Oe=D[P],Re=q[Q];if(!Oe||!Re)return;const it=Oe._line,Ke=(I[it]||[]).findIndex(Ve=>Ve.cardId===Oe.cardId);if(Ke===-1){f("Erreur : joueur introuvable","error"),oe.remove();return}const nt={...Re,_line:it,position:Oe.position,used:!1,boost:0};I[it].splice(Ke,1,nt);const De=[...S,Re.cardId];oe.remove(),Y(Oe,Re,async()=>{await A({[p+"Team"]:I,[x+"Team"]:y[x+"Team"],["usedSubIds_"+p]:De})})})}document.body.appendChild(oe),K()}function Y(k,L,I){const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const D=(W,Q,X)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Q};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${X}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${S[W.job]||"#555"};border:3px solid ${Q};position:relative;overflow:hidden;margin:0 auto">
        ${Mt(W)?`<img src="${Mt(W)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(W.name||"").slice(0,12)}</div>
    </div>`;T.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${D(L,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${D(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(T);let q=!1;const P=()=>{q||(q=!0,T.remove(),setTimeout(()=>I(),50))};T.addEventListener("click",P),setTimeout(P,2200)}function U(){var L;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${y[x+"Name"]}</div>
      <div style="width:min(90vw,420px)">${Ut(y[x+"Team"],y[x+"Formation"],null,[],st(),mt())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(L=k.querySelector("#pvp-opp-close"))==null||L.addEventListener("click",()=>k.remove())}function B(){var I;const k=y.log||[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(S=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${S.type==="goal"?"#FFD700":S.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${S.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(L),(I=L.querySelector("#pvp-hist-close"))==null||I.addEventListener("click",()=>L.remove())}async function O(){if(y.phase!==p+"-attack")return;const k=p==="p1"?"p2":"p1",L=(y.round||0)+1,I=[...y.log||[]];I.push({type:"info",text:`⏭️ ${y[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const S=xe(y),T=$e(k),D=S||!T?"finished":k+"-attack";await A({["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:D,attacker:k,round:L,log:I}),D==="finished"&&await qe(y)}async function ve(){const k=y[p+"Team"],L=!["GK","DEF","MIL","ATT"].some(D=>(y[x+"Team"][D]||[]).some(q=>!q.used)),I=(y["selected_"+p]||[]).map(D=>{const q=(k[D._role]||[]).find(pe=>pe.cardId===D.cardId)||D,P=L&&["GK","DEF"].includes(D._role),W=k[D._role]||[],Q=W.findIndex(pe=>pe.cardId===D.cardId),X=ht(W.length),oe=Q>=0?X[Q]:q._col??1,K=y.stadiumDef||y.homeStadiumDef||null,re=q.stadiumBonus||K&&(K.club_id&&String(q.club_id)===String(K.club_id)||K.country_code&&q.country_code===K.country_code)||!1;return{...q,_line:D._role,_col:oe,stadiumBonus:re,...P?{note_a:Math.max(1,Number(q.note_a)||0)}:{}}});if(!I.length)return;const S=fi(I,y.modifiers[p]||{});se(p,I.map(D=>D.cardId)),I.forEach(D=>{const q=(k[D._role]||[]).find(P=>P.cardId===D.cardId);q&&(q.used=!0)}),y["selected_"+p]=[],de();const T=[...y.log||[]];if(L){const D=(y[p+"Score"]||0)+1,q=I.map(oe=>histPlayer(oe));T.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:q,homeTotal:S.total,aiTotal:0});const P=(y.round||0)+1,W=p==="p1"?"p2":"p1",Q={...y,[p+"Team"]:k,[p+"Score"]:D},X=xe(Q);N.add(P),Ze(q,D,y[x+"Score"]||0,!0,async()=>{await A({[p+"Team"]:k,[p+"Score"]:D,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:X?"finished":W+"-attack",attacker:W,round:P,log:T}),X&&await qe({...y,[p+"Score"]:D})});return}T.push({type:"pending",text:`⚔️ ${y[p+"Name"]} attaque (${S.total})`}),await A({[p+"Team"]:k,[x+"Team"]:y[x+"Team"],pendingAttack:{...S,players:I,side:p},["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},phase:x+"-defense",log:T})}async function we(){const k=y[p+"Team"],L=(y["selected_"+p]||[]).map(ae=>{const ue=(k[ae._role]||[]).find(Ae=>Ae.cardId===ae.cardId)||ae,ye=k[ae._role]||[],_e=ye.findIndex(Ae=>Ae.cardId===ae.cardId),te=ht(ye.length),Te=_e>=0?te[_e]:ue._col??1;return{...ue,_line:ae._role,_col:Te}}),I=gi(L,y.modifiers[p]||{});se(p,L.map(ae=>ae.cardId)),L.forEach(ae=>{const ue=(k[ae._role]||[]).find(ye=>ye.cardId===ae.cardId);ue&&(ue.used=!0)}),y["selected_"+p]=[],de();const S=mi(y.pendingAttack.total,I.total,y.modifiers[p]||{}),T=y.pendingAttack.side,D=S==="attack"||(S==null?void 0:S.goal),q=T==="p1"?"p2":"p1",P=(y.round||0)+1,W=(y.pendingAttack.players||[]).map(ae=>histPlayer(ae)),Q=[...y.log||[]];Q.push({type:"duel",isGoal:D,homeScored:D&&T===p,text:D?`⚽ BUT de ${y[T+"Name"]} ! (${y.pendingAttack.total} vs ${I.total})`:`✋ Attaque stoppée (${y.pendingAttack.total} vs ${I.total})`,homePlayers:W,aiPlayers:L.map(ae=>histPlayer(ae)),homeTotal:y.pendingAttack.total,aiTotal:I.total});const X=D?(y[T+"Score"]||0)+1:y[T+"Score"]||0,oe={...y,[p+"Team"]:k,[T+"Score"]:X},K=xe(oe),re=K?"finished":q+"-attack",pe=async()=>{await A({[p+"Team"]:k,[x+"Team"]:y[x+"Team"],[T+"Score"]:X,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:re,attacker:q,round:P,log:Q}),(re==="finished"||K)&&await qe({...y,[T+"Score"]:X})};if(D){const ae=T===p,ue=ae?X:y[p+"Score"]||0,ye=ae?y[x+"Score"]||0:X;N.add(P),Ze(W,ue,ye,ae,pe)}else await pe()}function be(k){return["MIL","ATT"].some(L=>(k[L]||[]).some(I=>!I.used))}function ge(k){return["GK","DEF","MIL","ATT"].some(L=>(k[L]||[]).some(I=>!I.used))}function ke(k){return ge(k)&&!be(k)}function $e(k){const L=y[k+"Team"],I=y[(k==="p1"?"p2":"p1")+"Team"];return!!(be(L)||!ge(I)&&ke(L))}function xe(k){const L=["MIL","ATT"].some(Q=>(k.p1Team[Q]||[]).some(X=>!X.used)),I=["MIL","ATT"].some(Q=>(k.p2Team[Q]||[]).some(X=>!X.used)),S=ge(k.p1Team),T=ge(k.p2Team);return!L&&!(!T&&S)&&(!I&&!(!S&&T))}function Ce(k){const L=k.p1Score||0,I=k.p2Score||0;return L===I?null:L>I?h.home_id:h.away_id}async function qe(k){try{const L=Ce(k),I=L?h.home_id===L?h.away_id:h.home_id:null;await w.from("matches").update({status:"finished",winner_id:L,home_score:k.p1Score||0,away_score:k.p2Score||0}).eq("id",i),L&&I&&updateEvolutiveCards(L,I).catch(()=>{})}catch(L){console.error("[PvP] finishMatch:",L)}}function Ue(){var T;const k=y[p+"Score"],L=y[x+"Score"],I=k>L,S=k===L;He(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${I?"🏆":S?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${I?"Victoire !":S?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(T=document.getElementById("pvp-home"))==null||T.addEventListener("click",()=>{try{w.removeChannel(Z)}catch{}Ne(e),m("home")})}de()}async function ai(e,t,i=!1){var s,l;const{state:n,navigate:a,toast:o}=t,r=i&&((l=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:l.rankedData)||null;await jt(e,t,i?"ranked":"random",async({deckId:c,formation:d,starters:u,subsRaw:g,gcCardsEnriched:m,gcDefs:f,stadiumDef:p})=>{const x=m||[];He(e),await Oo(e,t,c,d,u,g,x,f,p,i,r)})}async function No(e,t,i){return Ro(e,t,i)}async function Oo(e,t,i,n,a,o,r=[],s=[],l=null,c=!1,d=null){var ee,Z;const{state:u,navigate:g,toast:m}=t,f=(d==null?void 0:d.mmr)??((ee=u.profile)==null?void 0:ee.mmr)??1e3,p=c?ci(f):null,x=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",b=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";let v=!1,h=null,$=null;e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${x};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(f)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${b};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`;const y=async()=>{v=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null),await w.rpc("cancel_matchmaking",{p_user_id:u.profile.id}).catch(()=>{})};(Z=document.getElementById("cancel-mm"))==null||Z.addEventListener("click",async()=>{await y(),Ne(e),g("home")});const j=async(A,_)=>{v||(v=!0,h&&(h.unsubscribe(),h=null),$&&(clearInterval($),$=null),await wt(e,t,A,_,{myGC:r,gcDefs:s,stadiumDef:l,isRanked:c,rankedData:d,onMatchEnd:c?Ho:null}))},E=u.user.id,{data:G,error:N}=c?await w.rpc("try_matchmake_ranked",{p_user_id:E,p_deck_id:i,p_mmr:f}):await w.rpc("try_matchmake",{p_user_id:E,p_deck_id:i});if(N||!(G!=null&&G.success)){console.error("[Matchmaking] try_matchmake error:",N||G),m("Erreur de matchmaking","error"),Ne(e),g("home");return}if(G.matched){await j(G.match_id,!1);return}const ie=async()=>{if(v)return;const{data:A}=await w.from("matchmaking_queue").select("status, match_id").eq("user_id",E).maybeSingle();(A==null?void 0:A.status)==="matched"&&A.match_id&&await j(A.match_id,!0)};h=w.channel(`mm_${E}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${E}`},A=>{const _=A.new;_.status==="matched"&&_.match_id&&j(_.match_id,!0)}).subscribe(),$=setInterval(ie,3e3),setTimeout(()=>{v||y()},12e4)}async function Ho(e,t){const{state:i,toast:n}=t,{winnerId:a,homeId:o,awayId:r,homeScore:s,awayScore:l,matchId:c}=e,d=i.user.id,u=o===d,g=a===d,{data:m}=await w.from("users").select("mmr, mmr_rd, mmr_v").eq("id",d).single(),{data:f}=await w.from("users").select("mmr, mmr_rd, mmr_v").eq("id",u?r:o).single();if(m&&f){const p=hn(m.mmr,m.mmr_rd,m.mmr_v,f.mmr,f.mmr_rd,g?1:0);await w.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:g?w.sql`mmr_wins + 1`:void 0,mmr_losses:g?void 0:w.sql`mmr_losses + 1`}).eq("id",d),n(g?`+MMR ↑ ${Math.round(p.mmr-m.mmr)}`:`-MMR ↓ ${Math.round(m.mmr-p.mmr)}`,g?"success":"error",4e3)}}const Uo=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:ai,resumePvpMatch:No},Symbol.toStringTag,{value:"Module"}));async function Ko(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.friendId||null,s=o.friendName||"Ami";await jt(e,t,"friend",async({deckId:l,formation:c,starters:d,subsRaw:u,gcCardsEnriched:g,gcDefs:m,stadiumDef:f})=>{const p=g||[];He(e),r?await Vo(e,t,l,p,m,f,r,s):await Yo(e,t,l,p,m,f)})}async function Vo(e,t,i,n,a,o,r,s){var v;const{state:l,navigate:c,toast:d}=t,u=l.user.id,{data:g,error:m}=await w.from("friend_match_invites").insert({inviter_id:u,invitee_id:r,status:"pending",deck_id:i}).select("id").single();if(m||!g){console.error("[Friend] Erreur création invitation:",m),d("Impossible de créer l'invitation","error"),c("home");return}e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`;let f=!1,p=null;const x=async()=>{p&&(p.unsubscribe(),p=null)};(v=document.getElementById("cancel-friend"))==null||v.addEventListener("click",async()=>{await x(),await w.from("friend_match_invites").update({status:"declined"}).eq("id",g.id),Ne(e),c("home")}),p=w.channel(`friend_invite_${g.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${g.id}`},async({new:h})=>{f||h.status!=="accepted"||!h.match_id||(f=!0,await x(),await wt(e,t,h.match_id,!0,{myGC:n,gcDefs:a,stadiumDef:o}))}).subscribe();const b=setInterval(async()=>{if(f)return;const{data:h}=await w.from("friend_match_invites").select("status, match_id").eq("id",g.id).single();(h==null?void 0:h.status)==="accepted"&&h.match_id&&(f=!0,clearInterval(b),await x(),await wt(e,t,h.match_id,!0,{myGC:n,gcDefs:a,stadiumDef:o}))},3e3);setTimeout(async()=>{f||(clearInterval(b),await x(),d("Invitation expirée","info"),c("home"))},12e4)}async function Yo(e,t,i,n,a,o){const{state:r,navigate:s,toast:l}=t,c=r.user.id,{data:d}=await w.from("friend_match_invites").select("id, inviter_id").eq("invitee_id",c).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){l("Aucune invitation en attente","error"),s("home");return}const{data:u,error:g}=await w.rpc("accept_friend_invite",{p_invite_id:d.id,p_invitee_deck_id:i});if(g||!(u!=null&&u.success)){console.error("[Friend] Erreur accept_friend_invite:",g||u),l((u==null?void 0:u.error)||"Impossible de rejoindre le match","error"),s("home");return}await wt(e,t,u.match_id,!1,{myGC:n,gcDefs:a,stadiumDef:o})}const yt="#1A6B3C",Je="#D4A017";async function Wo(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await tt(e,t,i);return}await lt(e,t)}async function lt(e,t,i="waiting"){var b;const{state:n}=t,a=n.profile.id,{data:o}=await w.from("mini_league_members").select("league_id").eq("user_id",a),r=(o||[]).map(v=>v.league_id),{data:s,error:l}=await w.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),c=l?(await w.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:s||[],u=(r.length?await w.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],g=u.filter(v=>v.status==="waiting"&&!v.is_archived),m=u.filter(v=>v.status==="active"&&!v.is_archived),f=u.filter(v=>v.is_archived||v.status==="finished"),p=c.filter(v=>!r.includes(v.id)),x=[{key:"waiting",label:"🟡 En attente",count:g.length+p.length},{key:"active",label:"🟢 En cours",count:m.length},{key:"archived",label:"📁 Archivées",count:f.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${x.map(v=>`<button class="ml-tab" data-tab="${v.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===v.key?yt:"transparent"};background:none;font-size:12px;font-weight:${i===v.key?"900":"600"};color:${i===v.key?yt:"#888"};cursor:pointer">${v.label}${v.count?` (${v.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Xo(g,p,a):i==="active"?Jo(m,a):Qo(f,a)}
    </div>
  </div>`,(b=document.getElementById("ml-create-btn"))==null||b.addEventListener("click",()=>Zo(e,t)),e.querySelectorAll(".ml-tab").forEach(v=>v.addEventListener("click",()=>lt(e,t,v.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(v=>v.addEventListener("click",()=>tt(e,t,v.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(v=>v.addEventListener("click",h=>{h.stopPropagation(),pn(e,t,v.dataset.join,v.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(v=>v.addEventListener("click",h=>{h.stopPropagation(),si(e,t,v.dataset.delete,v.dataset.name,i)}))}function Ht(e,t,i=!1){var r,s;const n=e.creator_id===t,a=e.pot||0,o=((s=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:s.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${n?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${o}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${a>0?`<span style="color:${Je};font-weight:700">🏆 ${a.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function Xo(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(a=>Ht(a,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(a=>Ht(a,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Jo(e,t){return e.length?e.map(i=>Ht(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Qo(e,t){return e.length?e.map(i=>Ht(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Zo(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var f,p,x,b;const{toast:n}=t,a=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,s=((f=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:f.value)||"public",l=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((b=(x=document.getElementById("ml-pwd"))==null?void 0:x.value)==null?void 0:b.trim())||null;if(!a){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:d,error:u}=await w.from("mini_leagues").insert({name:a,creator_id:t.state.profile.id,type:s,password:c,mode:l,max_players:o,entry_fee:r}).select().single();if(u){n("Erreur : "+u.message,"error");return}const{data:g}=await w.from("users").select("credits").eq("id",t.state.profile.id).single();if(((g==null?void 0:g.credits)||0)<r){await w.from("mini_leagues").delete().eq("id",d.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await w.from("users").update({credits:g.credits-r}).eq("id",t.state.profile.id),await w.from("mini_leagues").update({pot:r}).eq("id",d.id),await w.from("mini_league_members").insert({league_id:d.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=g.credits-r);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),tt(e,t,d.id)})}function er(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=a=>{t.remove(),e(a)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",a=>{a.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",a=>{a.target===t&&n(null)})})}async function pn(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id,{data:s}=await w.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!s){a("Mini League introuvable","error");return}if(s.status!=="waiting"){a("Cette Mini League a déjà démarré","warning");return}const{count:l}=await w.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(l>=s.max_players){a("La Mini League est complète","warning");return}if(n==="private"){const p=await er();if(p===null)return;if(s.password!==p){a("Mot de passe incorrect","error");return}}const c=s.entry_fee||100,{data:d}=await w.from("users").select("credits").eq("id",r).single();if(((d==null?void 0:d.credits)||0)<c){a(`Crédits insuffisants — il te faut ${c.toLocaleString("fr")} cr. (solde : ${((d==null?void 0:d.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:u}=await w.from("mini_league_members").insert({league_id:i,user_id:r});if(u){a("Erreur inscription : "+u.message,"error");return}const{error:g}=await w.from("users").update({credits:d.credits-c}).eq("id",r),{error:m}=await w.from("mini_leagues").update({pot:(s.pot||0)+c}).eq("id",i);(g||m)&&console.error("Erreur post-inscription:",g,m),o.profile&&(o.profile.credits=d.credits-c);const f=document.getElementById("nav-credits");f&&(f.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`✅ Inscrit ! −${c.toLocaleString("fr")} cr. · Pot : ${((s.pot||0)+c).toLocaleString("fr")} cr.`,"success"),tt(e,t,i)}async function tr(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:s}=await w.from("mini_leagues").select("pot,status").eq("id",i).single();if(!s||s.status!=="waiting"){a("Impossible — la league a déjà démarré","error");return}const{data:l}=await w.from("users").select("credits").eq("id",r).single();await w.from("mini_leagues").update({pot:Math.max(0,(s.pot||0)-n)}).eq("id",i),await w.from("users").update({credits:((l==null?void 0:l.credits)||0)+n}).eq("id",r),await w.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),o.profile&&(o.profile.credits=((l==null?void 0:l.credits)||0)+n);const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),lt(e,t,"waiting")}async function si(e,t,i,n,a){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await w.from("mini_league_matches").delete().eq("league_id",i),await w.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await w.from("mini_leagues").delete().eq("id",i);if(r){o("Erreur suppression ("+r.message+")","error");return}o("Mini League supprimée avec succès","success"),lt(e,t,a)}async function ir(e,t,i){await w.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),lt(e,t,"archived")}async function tt(e,t,i){var $,y,j,E,G,N,ie,ee,Z;const{state:n,toast:a}=t,o=n.profile.id,[{data:r},{data:s},{data:l}]=await Promise.all([w.from("mini_leagues").select("*").eq("id",i).single(),w.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),w.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){a("Introuvable","error"),await lt(e,t);return}const c=(s||[]).some(A=>A.user_id===o),d=r.creator_id===o,u=(s||[]).map(A=>A.user).filter(Boolean),g=fn(u,l||[]),m=(l||[]).filter(A=>A.matchday===r.current_day),f=r.pot||0,p=r.entry_fee||100,x=m.length>0&&m.every(A=>A.status==="finished"||A.status==="bye"),b=r.current_day>=r.total_days,v=(s||[]).find(A=>A.user_id===o);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${r.name}</div>
        <div style="font-size:11px;color:#888">${r.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${r.max_players} · 💰 ${p} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${r.status==="active"?"#d1fae5":r.status==="finished"?"#f3e8ff":"#fef9c3"};color:${r.status==="active"?"#166534":r.status==="finished"?"#6b21a8":"#854d0e"}">
          ${r.status==="waiting"?"En attente":r.status==="active"?`J${r.current_day}/${r.total_days}`:"Terminée"}
        </div>
        ${f>0?`<div style="font-size:12px;font-weight:900;color:${Je};margin-top:4px">🏆 ${f.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${u.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*u.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*u.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*u.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*u.length*.1).toLocaleString("fr")})</div>
        ${u.map(A=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${A.club_color2||yt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${A.club_color1||"#fff"}">${(A.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${A.club_name||A.pseudo}</div><div style="font-size:11px;color:#999">@${A.pseudo}</div></div>
            ${A.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${d&&u.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${u.length})</button>`:""}
        ${d?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${c?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${c&&!d?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${m.map(A=>Ri(A,u,o,c)).join("")}
        ${d&&x&&!b?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${d&&x&&b?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&g.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${f>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${Je}">💰</th>`:""}
          </tr></thead>
          <tbody>${g.map((A,_)=>{const M=f>0&&r.status==="finished"?_===0?Math.floor(f*.7):_===1?Math.floor(f*.2):_===2?Math.floor(f*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${A.userId===o?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${_===0?Je:_<3?yt:"#555"}">${["🥇","🥈","🥉"][_]||_+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${A.clubName}</div><div style="font-size:10px;color:#999">@${A.pseudo}</div></td>
              <td style="text-align:center">${A.played}</td><td style="text-align:center">${A.won}-${A.drawn}-${A.lost}</td>
              <td style="text-align:center;color:${A.goalDiff>=0?yt:"#cc2222"}">${A.goalDiff>=0?"+":""}${A.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${A.points}</td>
              ${f>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${Je}">${M?M.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(A,_)=>_+1).reverse().map(A=>{const _=(l||[]).filter(M=>M.matchday===A);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${A}</div>${_.map(M=>Ri(M,u,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${d&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if(($=document.getElementById("ml-back"))==null||$.addEventListener("click",()=>lt(e,t,h)),(y=document.getElementById("ml-start-btn"))==null||y.addEventListener("click",()=>nr(e,t,r,u)),(j=document.getElementById("ml-next-day"))==null||j.addEventListener("click",()=>or(e,t,i)),(E=document.getElementById("ml-finish-btn"))==null||E.addEventListener("click",()=>un(e,t,i,f,g,u)),(G=document.getElementById("ml-join-now"))==null||G.addEventListener("click",()=>pn(e,t,i,r.type)),(N=document.getElementById("ml-leave-btn"))==null||N.addEventListener("click",()=>tr(e,t,i,p)),(ie=document.getElementById("ml-delete-btn"))==null||ie.addEventListener("click",()=>si(e,t,i,r.name,"waiting")),(ee=document.getElementById("ml-delete-now"))==null||ee.addEventListener("click",()=>si(e,t,i,r.name,h)),(Z=document.getElementById("ml-archive-btn"))==null||Z.addEventListener("click",()=>ir(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(A=>{A.addEventListener("click",()=>{const _=m.find(M=>M.id===A.dataset.playMatch);_&&t.navigate("match-mini-league",{mlMatchId:_.id,leagueId:i})})}),r.status==="finished"&&v){const A=g.findIndex(_=>_.userId===o);A>=0&&A<3&&v.prize_amount>0&&setTimeout(()=>rr(e,t,r,v,A),400)}}function Ri(e,t,i,n,a=!1){const o=u=>t.find(g=>g.id===u);if(e.is_bye){const u=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"?"} exempté(e)</div>`}const r=o(e.home_id),s=o(e.away_id),l=e.home_id===i||e.away_id===i,c=l&&e.status==="pending"&&n&&!a,d=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${l?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?yt:"#999"}">${d}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function nr(e,t,i,n){const{toast:a,state:o}=t,r=ar(n.map(c=>c.id),i.mode),s=[];r.forEach((c,d)=>c.forEach(u=>s.push({league_id:i.id,matchday:d+1,home_id:u.home||u.bye,away_id:u.away||null,is_bye:!!u.bye,status:u.bye?"bye":"pending"})));const{error:l}=await w.from("mini_league_matches").insert(s);if(l){a("Erreur calendrier : "+l.message,"error");return}await w.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),a(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),tt(e,t,i.id)}async function or(e,t,i){const{data:n}=await w.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),a=(n.current_day||0)+1;if(a>(n.total_days||0)){await un(e,t,i,n.pot||0,null,null);return}await w.from("mini_leagues").update({current_day:a}).eq("id",i),t.toast(`Journée ${a} commencée !`,"success"),tt(e,t,i)}async function un(e,t,i,n,a,o){const{toast:r,state:s}=t;let l=a,c=o;if(!l){const{data:u}=await w.from("mini_league_matches").select("*").eq("league_id",i),{data:g}=await w.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);c=(g||[]).map(m=>m.user).filter(Boolean),l=fn(c,u||[])}const d=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(l.slice(0,3).map((u,g)=>d[g]?w.from("mini_league_members").update({prize_amount:d[g],prize_claimed:!1}).eq("league_id",i).eq("user_id",u.userId):Promise.resolve())),await w.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),tt(e,t,i)}async function rr(e,t,i,n,a){var g,m;const{state:o,toast:r}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][a],c=n.prize_amount||s[a]||0,d=n.prize_claimed,u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",u.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${l}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${a===0?"Champion !":a===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${Je};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${d?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${Je}">${c.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${a===0?"70%":a===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${d?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${Je};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${c.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(u),(g=u.querySelector("#prize-close"))==null||g.addEventListener("click",()=>u.remove()),u.addEventListener("click",f=>{f.target===u&&u.remove()}),(m=u.querySelector("#claim-prize-btn"))==null||m.addEventListener("click",async()=>{const{data:f}=await w.from("users").select("credits").eq("id",o.profile.id).single();await w.from("users").update({credits:((f==null?void 0:f.credits)||0)+c}).eq("id",o.profile.id),await w.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",o.profile.id),o.profile&&(o.profile.credits=((f==null?void 0:f.credits)||0)+c);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),r(`💰 +${c.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),u.remove(),tt(e,t,i.id)})}function ar(e,t){const n=e.length%2===0?[...e]:[...e,null],a=n.length;let o=n.slice(1);const r=[];for(let s=0;s<a-1;s++){const l=[],c=[n[0],...o];for(let d=0;d<a/2;d++){const u=c[d],g=c[a-1-d];u===null?l.push({bye:g}):g===null?l.push({bye:u}):l.push({home:u,away:g})}r.push(l),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(s=>s.map(l=>l.bye?l:{home:l.away,away:l.home}))]:r}function fn(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const a=i[n.home_id],o=i[n.away_id];!a||!o||(a.played++,o.played++,a.goalsFor+=n.home_score,a.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(a.won++,a.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,a.lost++):(a.drawn++,a.points++,o.drawn++,o.points++),a.goalDiff=a.goalsFor-a.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,a)=>a.points-n.points||a.goalDiff-n.goalDiff||a.goalsFor-n.goalsFor)}async function Ni(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.leagueId||null,s=o.mlMatchId||null;if(s&&r){await dr(e,t,s,r);return}if(r){await hi(e,t,r);return}await sr(e,t)}async function sr(e,t){const{state:i,navigate:n,toast:a}=t;await jt(e,t,"mini_league",async({deckId:o,gcCardsEnriched:r,gcDefs:s,stadiumDef:l})=>{He(e);const c=r||[],d=i.user.id,{data:u}=await w.from("mini_leagues").insert({creator_id:d,deck_id:o,status:"waiting",gc_cards:c.map(g=>g.id)}).select("id").single();if(!u){a("Erreur création ligue","error"),n("home");return}await hi(e,t,u.id)})}async function hi(e,t,i){var u,g,m;const{state:n,navigate:a,toast:o}=t,r=n.user.id,{data:s}=await w.from("mini_leagues").select("*, creator:users!creator_id(pseudo), participants:mini_league_participants(user_id, deck_id, users(pseudo))").eq("id",i).single();if(!s){o("Ligue introuvable","error"),a("home");return}const l=s.creator_id===r,c=s.participants||[],d=c.length>=4;e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:28px">🏆</div>
        <h2 style="margin:8px 0">Mini Ligue</h2>
        <div style="font-size:13px;opacity:0.6">Code : <b>${i.slice(0,8).toUpperCase()}</b></div>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:16px">
        <div style="font-size:12px;opacity:0.6;margin-bottom:8px">Participants (${c.length}/4)</div>
        ${c.map(f=>{var p;return`
          <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
            <span>⚽</span>
            <span style="font-size:14px;font-weight:700">${((p=f.users)==null?void 0:p.pseudo)||"?"}</span>
            ${f.user_id===s.creator_id?'<span style="font-size:10px;color:#D4A017">CRÉATEUR</span>':""}
          </div>`}).join("")}
        ${Array(4-c.length).fill(0).map(()=>`
          <div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06);opacity:0.3;font-size:13px">En attente…</div>`).join("")}
      </div>

      <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto">
        ${l&&d?`
          <button id="start-league" style="padding:16px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            🚀 Lancer la ligue
          </button>`:""}
        ${c.find(f=>f.user_id===r)?"":`
          <button id="join-league" style="padding:16px;border-radius:12px;border:none;background:#1a3a6b;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            ➕ Rejoindre
          </button>`}
        <button id="back-home" style="padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:14px;cursor:pointer">
          Retour
        </button>
      </div>
    </div>`,(u=document.getElementById("start-league"))==null||u.addEventListener("click",async()=>{await w.from("mini_leagues").update({status:"in_progress"}).eq("id",i),await gn(e,t,i)}),(g=document.getElementById("join-league"))==null||g.addEventListener("click",async()=>{await jt(e,t,"mini_league",async({deckId:f,gcCardsEnriched:p})=>{const x=p||[];await w.from("mini_league_participants").insert({league_id:i,user_id:r,deck_id:f,gc_cards:x.map(b=>b.id)}),o("Rejoint !","success"),await hi(e,t,i)})}),(m=document.getElementById("back-home"))==null||m.addEventListener("click",()=>a("home"))}async function gn(e,t,i){const{navigate:n,toast:a}=t,{data:o}=await w.from("mini_league_matches").select("id, match_id, home_id, away_id, status").eq("league_id",i).eq("status","pending").order("round",{ascending:!0}).limit(1),r=o==null?void 0:o[0];if(!r){await lr(e,t,i);return}const s=t.state.user.id,l=r.home_id===s;await wt(e,t,r.match_id,l,{mlLeagueId:i,mlMatchId:r.id,onMatchEnd:async c=>{await w.from("mini_league_matches").update({status:"finished",home_score:c.homeScore,away_score:c.awayScore,winner_id:c.winnerId}).eq("id",r.id),await gn(e,t,i)}})}async function dr(e,t,i,n){const{data:a}=await w.from("mini_league_matches").select("match_id, home_id, away_id").eq("id",i).single();if(!a){t.toast("Match introuvable","error"),t.navigate("home");return}const o=a.home_id===t.state.user.id;await wt(e,t,a.match_id,o,{mlLeagueId:n,mlMatchId:i,onMatchEnd:async r=>{await w.from("mini_league_matches").update({status:"finished",home_score:r.homeScore,away_score:r.awayScore,winner_id:r.winnerId}).eq("id",i),t.navigate("home")}})}async function lr(e,t,i){var d;const{navigate:n}=t,{data:a}=await w.from("mini_league_matches").select("home_id, away_id, home_score, away_score, winner_id, home:users!home_id(pseudo), away:users!away_id(pseudo)").eq("league_id",i),o={},r={};(a||[]).forEach(u=>{[u.home_id,u.away_id].forEach(g=>{o[g]||(o[g]=0),r[g]||(r[g]=0)}),u.winner_id?o[u.winner_id]=(o[u.winner_id]||0)+3:(o[u.home_id]=(o[u.home_id]||0)+1,o[u.away_id]=(o[u.away_id]||0)+1),r[u.home_id]=(r[u.home_id]||0)+(u.home_score||0),r[u.away_id]=(r[u.away_id]||0)+(u.away_score||0)});const s={};(a||[]).forEach(u=>{var g,m;s[u.home_id]=(g=u.home)==null?void 0:g.pseudo,s[u.away_id]=(m=u.away)==null?void 0:m.pseudo});const l=Object.keys(o).sort((u,g)=>o[g]-o[u]||r[g]-r[u]),c=["🥇","🥈","🥉","4️⃣"];e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:36px">🏆</div>
        <h2>Résultats de la Mini Ligue</h2>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;overflow:hidden">
        ${l.map((u,g)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06)">
            <div style="font-size:24px">${c[g]||"•"}</div>
            <div style="flex:1">
              <div style="font-size:15px;font-weight:900">${s[u]||"?"}</div>
              <div style="font-size:12px;opacity:0.6">${r[u]||0} buts</div>
            </div>
            <div style="font-size:18px;font-weight:900;color:#D4A017">${o[u]||0} pts</div>
          </div>`).join("")}
      </div>

      <div style="margin-top:auto">
        <button id="back-home" style="width:100%;padding:16px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
          Retour à l'accueil
        </button>
      </div>
    </div>`,(d=document.getElementById("back-home"))==null||d.addEventListener("click",()=>n("home"))}const cr="/",pr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function ur(e,t,i){let n=0;const a=document.createElement("div");a.id="tutorial-overlay",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var d,u,g;const s=t[n],l=n===t.length-1,c=Math.round((n+1)/t.length*100);a.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${c}%;background:${s.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${s.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${s.title}</div>
          <div style="font-size:11px;color:#aaa">${n+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${cr}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${s.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${s.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${n>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${l?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${s.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${l?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,a.querySelectorAll("ul,ol").forEach(m=>{m.style.paddingLeft="20px",m.style.marginTop="6px",m.style.marginBottom="6px"}),a.querySelectorAll("li").forEach(m=>{m.style.marginBottom="4px"}),a.querySelectorAll("p").forEach(m=>{m.style.marginBottom="8px"}),(d=a.querySelector("#tuto-prev"))==null||d.addEventListener("click",()=>{n--,o()}),(u=a.querySelector("#tuto-next"))==null||u.addEventListener("click",()=>{l?r():(n++,o())}),(g=a.querySelector("#tuto-skip"))==null||g.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{a.remove(),e!=null&&e.id&&await w.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(a),o()}async function fr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:a,error:o}=await w.rpc("get_tutorial_steps");if(!o&&(a==null?void 0:a.length)>0)n=a,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:l}=await w.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):pr;ur(e,r,()=>t("boosters"))}const Ft={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ut(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function gr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await vi(e,t)}async function vi(e,t){const{state:i,toast:n}=t,{data:a}=await w.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:o}=await w.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),r=(a||[]).filter(p=>p.seller_id!==i.profile.id),s=o||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${r.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
    </div>

    <!-- Onglets -->
    <div style="padding:8px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;gap:6px">
      <button class="mkt-tab" data-tab="buy" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--green);background:var(--green);color:#fff;font-size:13px;font-weight:700;cursor:pointer">Acheter</button>
      <button class="mkt-tab" data-tab="mine" style="padding:6px 16px;border-radius:20px;border:1.5px solid var(--gray-200);background:#fff;color:var(--gray-600);font-size:13px;font-weight:700;cursor:pointer">Mes ventes (${s.length})</button>
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
  </div>`;let l="buy";const c=()=>{var p,x,b,v,h,$,y;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((x=document.getElementById("flt-club"))==null?void 0:x.value)||"").toLowerCase().trim(),country:(((b=document.getElementById("flt-country"))==null?void 0:b.value)||"").toLowerCase().trim(),job:((v=document.getElementById("flt-job"))==null?void 0:v.value)||"",rarity:((h=document.getElementById("flt-rarity"))==null?void 0:h.value)||"",note1:parseInt(($=document.getElementById("flt-note1"))==null?void 0:$.value)||0,note2:parseInt((y=document.getElementById("flt-note2"))==null?void 0:y.value)||0}};function d(p){const x=c();return p.filter(b=>{var N,ie,ee;const v=(N=b.card)==null?void 0:N.player;if(!v)return!1;const h=`${v.firstname} ${v.surname_real}`.toLowerCase(),$=(((ie=v.clubs)==null?void 0:ie.encoded_name)||"").toLowerCase(),y=(v.country_code||"").toLowerCase(),j=((ee=b.card)==null?void 0:ee.evolution_bonus)||0,E=ut(v,v.job,j),G=v.job2?ut(v,v.job2,j):0;return!(x.name&&!h.includes(x.name)||x.club&&!$.includes(x.club)||x.country&&!y.includes(x.country)||x.job&&v.job!==x.job||x.rarity&&v.rarity!==x.rarity||x.note1&&E<x.note1||x.note2&&G<x.note2)})}function u(p){var G,N,ie,ee;const x=(G=p.card)==null?void 0:G.player;if(!x)return"";const b=((N=p.card)==null?void 0:N.evolution_bonus)||0,v=ut(x,x.job,b),h=x.job2?ut(x,x.job2,b):0,$=(i.profile.credits||0)>=p.price,y=x.country_code?`https://flagsapi.com/${x.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,j=Ft[x.job]||"#bbb",E=x.job2?Ft[x.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${y?`<img src="${y}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(ie=x.clubs)!=null&&ie.logo_url?`<img src="${x.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${j};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${j};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${x.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((ee=p.seller)==null?void 0:ee.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${$?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${$?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function g(p){var G,N,ie,ee;const x=(G=p.card)==null?void 0:G.player;if(!x)return"";const b=((N=p.card)==null?void 0:N.evolution_bonus)||0,v=ut(x,x.job,b),h=x.job2?ut(x,x.job2,b):0,$=p.status==="sold",y=x.country_code?`https://flagsapi.com/${x.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,j=Ft[x.job]||"#bbb",E=x.job2?Ft[x.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${$?"opacity:0.7":""}">
      ${y?`<img src="${y}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(ie=x.clubs)!=null&&ie.logo_url?`<img src="${x.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${j};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${j};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${x.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.surname_real}</div>
        <div style="font-size:10px;color:${$?"#22c55e":"#999"};margin-top:1px">
          ${$?`✅ Vendu à ${((ee=p.buyer)==null?void 0:ee.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${$?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function m(){const p=document.getElementById("mkt-content"),x=document.getElementById("mkt-filters");if(p){if(x.style.display=l==="buy"?"flex":"none",l==="buy"){const b=d(r);p.innerHTML=b.length?b.map(u).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const b=s.filter(h=>h.status==="active").sort((h,$)=>new Date($.listed_at)-new Date(h.listed_at)),v=s.filter(h=>h.status==="sold").sort((h,$)=>new Date($.sold_at||$.listed_at)-new Date(h.sold_at||h.listed_at));p.innerHTML=(b.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${b.length})</div>`+b.map(g).join(""):"")+(v.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${v.length})</div>`+v.map(g).join(""):"")+(!b.length&&!v.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(b=>b.addEventListener("click",()=>mr(b.dataset.buy,r,e,t))),p.querySelectorAll("[data-cancel]").forEach(b=>b.addEventListener("click",()=>yr(b.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{l=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(x=>{const b=x===p;x.style.background=b?"var(--green)":"#fff",x.style.color=b?"#fff":"var(--gray-600)",x.style.borderColor=b?"var(--green)":"var(--gray-200)"}),m()})});let f;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var x;(x=document.getElementById(p))==null||x.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(m,250)})}),m()}async function mr(e,t,i,n){const{state:a,toast:o,refreshProfile:r}=n,s=t.find(d=>d.id===e);if(!s)return;const l=s.price;if((a.profile.credits||0)<l){o("Crédits insuffisants","error");return}xr(s,async()=>{const{error:d}=await w.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:a.profile.id});if(d){o("Erreur achat : "+d.message,"error");return}await r();const u=document.getElementById("nav-credits");u&&(u.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await vi(i,n)})}function xr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(a);const o=s=>{a.remove(),s&&t()};a.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),a.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),a.addEventListener("click",s=>{s.target===a&&o(!1)})}async function yr(e,t,i){const{toast:n}=i,{data:a}=await w.from("market_listings").select("card_id").eq("id",e).single();if(await w.from("market_listings").update({status:"cancelled"}).eq("id",e),a!=null&&a.card_id){const{count:o}=await w.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",a.card_id).eq("status","active");o||await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",a.card_id)}n("Annonce retirée","success"),vi(t,i)}async function br(e,t){var d,u,g,m;const{state:i,navigate:n}=t,a=((u=(d=t==null?void 0:t.state)==null?void 0:d.params)==null?void 0:u.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:o},{data:r}]=await Promise.all([w.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),w.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let s=a;function l(){var p,x;const f=document.getElementById("rankings-list");if(f){if(s==="global"){const b=o||[];f.innerHTML=b.length>0?b.map((v,h)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${v.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${h<3?["#D4A017","#a0a0a0","#cd7f32"][h]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${h<3?"16":"13"}px">${h<3?["🥇","🥈","🥉"][h]:h+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${v.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${v.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${v.trophies_top1} 🥈${v.trophies_top2} 🥉${v.trophies_top3}</div>
            <div style="color:var(--gray-600)">${v.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const b=r||[];f.innerHTML=b.length>0?b.map((v,h)=>{const $=ci(v.mmr??1e3),y=(v.ranked_wins||0)+(v.ranked_losses||0)+(v.ranked_draws||0),j=y>0?Math.round((v.ranked_wins||0)/y*100):0,E=v.id===i.profile.id,G=(v.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${E?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${h<3?["#D4A017","#a0a0a0","#cd7f32"][h]:"rgba(255,255,255,0.08)"};color:${h<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${h<3?"16":"13"}px">${h<3?["🥇","🥈","🥉"][h]:h+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${$.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${v.club_name} · ${$.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${G?"❓":$.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${$.color}">${G?"Placement":$.label}</div>
              ${G?"":`<div style="font-size:10px;color:var(--gray-600)">${j}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(p=document.getElementById("tab-global"))!=null&&p.style&&(document.getElementById("tab-global").style.cssText=c(s==="global")),(x=document.getElementById("tab-ranked"))!=null&&x.style&&(document.getElementById("tab-ranked").style.cssText=c(s==="ranked"))}}const c=f=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${f?"900":"400"};background:${f?"var(--green)":"rgba(255,255,255,0.06)"};color:${f?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-global" style="${c(s==="global")}">🌍 Global</button>
        <button id="tab-ranked" style="${c(s==="ranked")}">⚔️ Ranked</button>
      </div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,l(),(g=document.getElementById("tab-global"))==null||g.addEventListener("click",()=>{s="global",l()}),(m=document.getElementById("tab-ranked"))==null||m.addEventListener("click",()=>{s="ranked",l()})}async function hr(e,t){var j,E,G,N;const{state:i,navigate:n,toast:a}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:s}]=await Promise.all([w.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),w.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){a("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(j=document.getElementById("ranked-back"))==null||j.addEventListener("click",()=>n("home"));return}const l=s.mmr??1e3,c=s.mmr_deviation??350,d=s.mmr_volatility??.06,u=s.placement_matches??0,g=u<10,m=Math.max(0,10-u),f=ci(l),p=vn(l),x=Yt.findIndex(ie=>ie.id===f.id),b=Yt[x+1]||null,v={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),$=h>0?Math.round((s.ranked_wins||0)/h*100):0,y=Yt.map(ie=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${f.id===ie.id?1:.35};
      transform:${f.id===ie.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${f.id===ie.id?"28px":"20px"}">${ie.emoji}</div>
      <div style="font-size:9px;color:${ie.color};font-weight:${f.id===ie.id?"900":"400"};letter-spacing:0.5px">${ie.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${v[f.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${f.color}40">
      <div style="font-size:52px;margin-bottom:4px">${f.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${f.color};letter-spacing:3px;text-transform:uppercase">${f.label}</div>
    </div>

    <!-- Progression bar -->
    ${f.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${f.emoji} ${f.label}</span>
        ${b?`<span>${b.emoji} ${b.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${f.color},${f.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${b?b.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${y}
    </div>

    <!-- Placement / Stats -->
    ${g?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${u}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${m} match${m>1?"s":""} — gains et pertes ×2</div>
    </div>`:`
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#1A6B3C">${s.ranked_wins||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Victoires</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#888">${s.ranked_draws||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Nuls</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#bb2020">${s.ranked_losses||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Défaites</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#D4A017">${$}%</div>
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
        background:linear-gradient(135deg,${f.color},${f.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${f.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(E=document.getElementById("ranked-back"))==null||E.addEventListener("click",()=>n("home")),(G=document.getElementById("ranked-leaderboard-btn"))==null||G.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(N=document.getElementById("ranked-play-btn"))==null||N.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:l,rd:c,sigma:d,isPlacement:g}})})}async function vr(e,{state:t,navigate:i,toast:n}){const a=t.profile;if(!a)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${a.id},away_id.eq.${a.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(d=>d.status==="finished"),l=(o||[]).filter(d=>d.status==="in_progress");function c(d){const u=d.home_id===a.id;u?d.home_score:d.away_score,u?d.away_score:d.home_score;const g=d.winner_id===a.id,m=d.home_score===d.away_score&&d.status==="finished",f=d.status!=="finished"?"…":m?"N":g?"V":"D",p=d.status!=="finished"||m?"#888":g?"#1A6B3C":"#c0392b";let x=r[d.mode]||d.mode;d.away_id===null&&!x.startsWith("IA")&&(x="IA");const v=d.home_id===a.id?d.away:d.home;let h;d.away_id===null?h=x:v?h=`${v.club_name||v.pseudo} (${v.pseudo})`:h="Adversaire";let $="";d.status==="in_progress"&&Date.now()-new Date(d.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const y=new Date(d.created_at),j=y.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+y.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),E=d.status==="finished"?`${d.home_score} - ${d.away_score}`:`${d.home_score||0} - ${d.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${$}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x} · ${j}${d.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${E}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${f}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(o||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${l.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${l.map(c).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(c).join("")}
        </div>`:""}

      ${(o||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}wn(kn);const he={user:null,profile:null,page:"home",params:{}};function ft(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function wr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function di(){document.getElementById("modal-overlay").classList.add("hidden")}async function Lt(){if(!he.user)return;const{data:e}=await w.from("users").select("*").eq("id",he.user.id).single();e&&(he.profile=e)}function Tt(e,t={}){he.page=e,he.params=t,mn()}async function mn(){var n,a,o,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===he.page)});const t=document.getElementById("nav-credits");t&&he.profile&&(t.textContent=`💰 ${(he.profile.credits||0).toLocaleString("fr")}`);const i={state:he,navigate:Tt,toast:ft,openModal:wr,closeModal:di,refreshProfile:Lt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',he.page){case"home":await Ci(e,i);break;case"collection":await Wn(e,i);break;case"decks":await ei(e,i);break;case"boosters":await so(e,i);break;case"ranked":await hr(e,i);break;case"match":{const s=he.params&&he.params.matchMode||"vs_ai_easy";s==="random"?await ai(e,i,!1):s==="ranked"?await ai(e,i,!0):s==="friend"?await Ko(e,i,(n=he.params)==null?void 0:n.friendId,(a=he.params)==null?void 0:a.friendName):s==="mini-league"?await Ni(e,i,(o=he.params)==null?void 0:o.mlMatchId,(r=he.params)==null?void 0:r.leagueId):await Eo(e,i);break}case"market":await gr(e,i);break;case"rankings":await br(e,i);break;case"matches":await vr(e,i);break;case"friends":await Mn(e,i);break;case"mini-league":await Wo(e,i);break;case"match-mini-league":{const s=he.params||{};await Ni(e,i,s.mlMatchId,s.leagueId);break}default:await Ci(e,i)}}function _r(){var n;const e=document.getElementById("app"),t=he.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",o=>{o.preventDefault(),Tt(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Tt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Tt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>kr())}async function kr(){const{data:e}=await w.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const a=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${n.image_url?`<img src="${n.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${a}</div>
      <div style="font-size:15px;font-weight:900;margin-bottom:6px">${n.title}</div>
      <div style="font-size:13px;color:#444;line-height:1.6;white-space:pre-line">${n.description}</div>
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function $r(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&di()}),document.getElementById("modal-close").addEventListener("click",di);const{data:{session:e}}=await w.auth.getSession();if(!e){Oi(),Mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ft});return}he.user=e.user,await Lt(),Oi();try{const{data:i}=await w.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(a=>{n[a.formation]=a.links}),_n(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!he.profile){En(document.getElementById("app"),{state:he,navigate:async()=>{await Lt(),Zt()},toast:ft,refreshProfile:Lt});return}const t=Array.isArray(he.profile.pending_boosters)?he.profile.pending_boosters:[];if(!he.profile.onboarding_done&&t.length>0){xo(document.getElementById("app"),{state:he,navigate:()=>Zt(),toast:ft,refreshProfile:Lt});return}Zt(),setTimeout(()=>fr(he.profile,Tt,ft),800),w.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(he.user=null,he.profile=null,document.getElementById("app").innerHTML="",Mi(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ft}))})}function Er(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Kt(){const e=document.getElementById("app");e&&(e.style.height=Er()+"px")}window.addEventListener("resize",Kt);window.addEventListener("orientationchange",()=>setTimeout(Kt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Kt);function Zt(){const e=()=>{var i;(i=he.user)!=null&&i.id&&w.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",he.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Kt(),_r(),mn()}function Oi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function xn(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}$r().catch(e=>{console.error("Échec du démarrage:",e),xn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&xn("Le serveur met trop de temps à répondre.")},12e3);
