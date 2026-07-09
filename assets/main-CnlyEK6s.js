const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-D0diUT_D.js","assets/formation-links-DCm4yyf6.css"])))=>i.map(i=>d[i]);
import{s as S,F as Ei,r as ot,j as Ot,l as Vi,m as rt,n as ji,h as Pt,o as hn,T as di,k as vn,p as wn,b as _n}from"./formation-links-D0diUT_D.js";const $n="/";function Ci(e,{navigate:t,toast:i}){let n="login";const d=()=>{var r,c,p,s,o,v;const a=n==="login";e.innerHTML=`
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",d()}),(c=document.getElementById("tab-reg-btn"))==null||c.addEventListener("click",()=>{n="register",d()}),a?((p=document.getElementById("login-password"))==null||p.addEventListener("keydown",m=>{var y;m.key==="Enter"&&((y=document.getElementById("login-btn"))==null||y.click())}),(s=document.getElementById("login-btn"))==null||s.addEventListener("click",async()=>{const m=document.getElementById("login-email").value.trim(),y=document.getElementById("login-password").value,_=document.getElementById("login-error");if(_.textContent="",!m||!y){_.textContent="Remplissez tous les champs.";return}const g=document.getElementById("login-btn");g.textContent="⏳ Connexion…",g.disabled=!0;const{error:l}=await S.auth.signInWithPassword({email:m,password:y});if(g.textContent="⚽ Se connecter",g.disabled=!1,l){_.textContent=l.message.includes("Invalid")?"Email ou mot de passe incorrect.":l.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",m=>{var y;m.key==="Enter"&&((y=document.getElementById("reg-btn"))==null||y.click())}),(v=document.getElementById("reg-btn"))==null||v.addEventListener("click",async()=>{const m=document.getElementById("reg-email").value.trim(),y=document.getElementById("reg-password").value,_=document.getElementById("reg-confirm").value,g=document.getElementById("reg-error");if(g.textContent="",!m||!y||!_){g.textContent="Remplissez tous les champs.";return}if(y.length<6){g.textContent="Mot de passe trop court (min. 6 caractères).";return}if(y!==_){g.textContent="Les mots de passe ne correspondent pas.";return}const l=document.getElementById("reg-btn");l.textContent="⏳ Création…",l.disabled=!0;const{error:T}=await S.auth.signUp({email:m,password:y});if(l.textContent="🚀 Créer mon compte",l.disabled=!1,T){g.textContent=T.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",d(),setTimeout(()=>{const f=document.getElementById("login-email");f&&(f.value=m)},50)}))};d()}function kn(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let a="#1A6B3C",r="#D4A017";e.innerHTML=`
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
  `;function c(){var _;const s=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),v=((_=document.getElementById("setup-club"))==null?void 0:_.value)||"MW",m=v.trim().split(" ").filter(Boolean),y=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():v.slice(0,2).toUpperCase();s&&(s.style.background=r,s.style.borderColor=a),o&&(o.textContent=y,o.style.color=a)}document.getElementById("color1").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch1").style.background=a,c()}),document.getElementById("color2").addEventListener("input",s=>{r=s.target.value,document.getElementById("swatch2").style.background=r,c()});function p(s){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&c()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",s.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:v}=await S.from("users").select("id").eq("pseudo",s).maybeSingle();if(v){o.textContent="Ce pseudo est déjà pris.";return}p(2)}),document.getElementById("step2-back").addEventListener("click",()=>p(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",s.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:v}=await S.from("users").select("id").eq("club_name",s).maybeSingle();if(v){o.textContent="Ce nom de club est déjà pris.";return}p(3)}),document.getElementById("step3-back").addEventListener("click",()=>p(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),v=document.getElementById("step3-error"),m=document.getElementById("step3-finish");v.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:y}=await S.from("users").insert({id:t.user.id,pseudo:s,club_name:o,club_color1:a,club_color2:r,credits:1e4});if(y)throw y;await En(t.user.id),await d(),n(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(y){v.textContent=y.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function En(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await S.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const Tn="modulepreload",Sn=function(e){return"/"+e},qi={},ni=function(t,i,n){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));d=Promise.allSettled(i.map(p=>{if(p=Sn(p),p in qi)return;qi[p]=!0;const s=p.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${o}`))return;const v=document.createElement("link");if(v.rel=s?"stylesheet":Tn,s||(v.as="script"),v.crossOrigin="",v.href=p,c&&v.setAttribute("nonce",c),document.head.appendChild(v),s)return new Promise((m,y)=>{v.addEventListener("load",m),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return d.then(r=>{for(const c of r||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})},Nt="#1A6B3C",Rt="#cc2222",zn="#D4A017",Bi="#888";async function An(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Yi(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>In(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Wi(i,n,null,t))}async function Yi(e,t,i={}){const{navigate:n}=i,d=e.user.id,{data:a,error:r}=await S.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${d},addressee_id.eq.${d}`),{count:c}=await S.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",d).eq("status","pending"),p=document.getElementById("pending-badge");p&&(c>0?(p.style.display="flex",p.textContent=c):p.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(r){console.error("[Friends] Erreur:",r),s.innerHTML=`<div style="color:${Rt};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const o=(a||[]).map(y=>y.requester_id===d?y.addressee_id:y.requester_id);let v={};if(o.length){const{data:y}=await S.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(y||[]).forEach(_=>{v[_.id]=_})}const m=(a||[]).map(y=>({friendshipId:y.id,friend:v[y.requester_id===d?y.addressee_id:y.requester_id]||{pseudo:"?"}}));if(!m.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${m.length} ami${m.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${m.map(({friendshipId:y,friend:_})=>Ln(_,y)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(y=>{y.addEventListener("click",()=>Mn(e,y.dataset.stats,y.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(y=>{y.addEventListener("click",()=>{const _=y.dataset.friendId,g=y.dataset.friendName;console.log("[Friends] clic match",{fid:_,fname:g,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:_,friendName:g}):t("Erreur navigation","error")})})}function Ln(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",d=(n||i).slice(0,2).toUpperCase(),a=e.club_color2||Nt,r=e.club_color1||"#ffffff",c=e.last_seen_at?new Date(e.last_seen_at):null,p=c&&Date.now()-c.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${a};border:2.5px solid ${r};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${r}">
          ${d}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${p?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${n}</div>
        <div style="font-size:11px;color:${p?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${p?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${zn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function In(e,t){const i=Ti();i.innerHTML=`
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
    ${Si()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),d=i.querySelector("#add-friend-error"),a=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",a),i.addEventListener("click",r=>{r.target===i&&a()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){d.textContent="Entre un pseudo";return}d.textContent="";const{data:c}=await S.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!c){d.textContent="Utilisateur introuvable";return}if(c.id===e.user.id){d.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:p}=await S.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${c.id}),and(requester_id.eq.${c.id},addressee_id.eq.${e.user.id})`).single();if(p){const o=p.status==="accepted"?"Vous êtes déjà amis !":p.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";d.textContent=o;return}const{error:s}=await S.from("friendships").insert({requester_id:e.user.id,addressee_id:c.id,status:"pending"});if(s){d.textContent="Erreur : "+s.message;return}a(),t(`✅ Demande envoyée à ${c.pseudo} !`,"success")})}async function Wi(e,t,i=null,n={}){const d=e.user.id,{data:a}=await S.from("friendships").select("id, requester_id").eq("addressee_id",d).eq("status","pending").order("created_at",{ascending:!1}),r=(a||[]).map(m=>m.requester_id);let c={};if(r.length){const{data:m}=await S.from("users").select("id, pseudo, club_name").in("id",r);(m||[]).forEach(y=>{c[y.id]=y})}const p=(a||[]).map(m=>({...m,requester:c[m.requester_id]||{pseudo:"?"}})),s=Ti(),o=p||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(m=>{var y,_,g;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((y=m.requester)==null?void 0:y.club_name)||((_=m.requester)==null?void 0:_.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((g=m.requester)==null?void 0:g.pseudo)||""})</span>
                </div>
                <button data-accept="${m.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Nt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${m.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Rt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${Si()}`,document.body.appendChild(s);const v=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",v),s.addEventListener("click",m=>{m.target===s&&v()}),s.querySelectorAll("[data-accept]").forEach(m=>{m.addEventListener("click",async()=>{const{error:y}=await S.from("friendships").update({status:"accepted"}).eq("id",m.dataset.accept);if(y){t("Erreur : "+y.message,"error");return}m.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Yi(e,t,n),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(m=>{m.addEventListener("click",async()=>{await S.from("friendships").delete().eq("id",m.dataset.decline),m.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Mn(e,t,i){const n=e.user.id,[d,a]=[n,t].sort(),r=n===d,{data:c}=await S.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",a).single(),p=e.profile.club_name||e.profile.pseudo||"Moi",s=c||{},o=r?s.wins_p1||0:s.wins_p2||0,v=r?s.wins_p2||0:s.wins_p1||0,m=s.draws||0,y=r?s.goals_p1||0:s.goals_p2||0,_=r?s.goals_p2||0:s.goals_p1||0,g=r?s.gc_used_p1||0:s.gc_used_p2||0,l=r?s.gc_used_p2||0:s.gc_used_p1||0,T=s.matches_total||0,f=(j,F,G,q=Nt,N=Rt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${q}">${F}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${j}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${N}">${G}</div>
    </div>`,L=Ti();L.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${T===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${f("Victoires",o,v)}
        ${f("Nuls",m,m,Bi,Bi)}
        ${f("Défaites",v,o)}
        ${f("Buts marqués",y,_)}
        ${f("Buts encaissés",_,y,Rt,Nt)}
        ${f("GC utilisés ⚡",g,l,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${T} match${T>1?"s":""} joué${T>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${Si()}`,document.body.appendChild(L),L.querySelector("#stats-close").addEventListener("click",()=>L.remove()),L.addEventListener("click",j=>{j.target===L&&L.remove()})}function Ti(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function Si(){return`
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
    </style>`}async function Ji({player1Id:e,player2Id:t,score1:i,score2:n,gc1:d,gc2:a}){const[r,c]=[e,t].sort(),p=e!==r,s=p?n:i,o=p?i:n,v=p?a:d,m=p?d:a,y=s>o?1:0,_=o>s?1:0,g=s===o?1:0,{data:l}=await S.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",c).single();l?await S.from("friend_match_stats").update({wins_p1:l.wins_p1+y,wins_p2:l.wins_p2+_,draws:l.draws+g,goals_p1:l.goals_p1+s,goals_p2:l.goals_p2+o,gc_used_p1:l.gc_used_p1+v,gc_used_p2:l.gc_used_p2+m,matches_total:l.matches_total+1}).eq("player1_id",r).eq("player2_id",c):await S.from("friend_match_stats").insert({player1_id:r,player2_id:c,wins_p1:y,wins_p2:_,draws:g,goals_p1:s,goals_p2:o,gc_used_p1:v,gc_used_p2:m,matches_total:1})}const jn="2026.07.09-1349";async function Di(e,{state:t,navigate:i,toast:n}){var a,r;const d=t.profile;d&&(e.innerHTML=`
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
      background: linear-gradient(135deg, ${d.club_color1}cc, ${d.club_color2}88);
      border: 1.5px solid ${d.club_color2};
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
          <h3>${d.pseudo}</h3>
          <div class="level">Niveau ${d.level} · ${d.club_name}</div>
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
        ${d.is_admin?`
        <a href="/admin.html" class="btn btn-sm" id="admin-editor-btn"
          style="background:var(--yellow);color:#111;font-weight:700;border:none;text-decoration:none;display:inline-block;padding:4px 12px;border-radius:8px;font-size:12px">
          ⚙️ Admin Editor
        </a>
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${jn}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var v,m,y,_,g;const c=((v=window.visualViewport)==null?void 0:v.height)||window.innerHeight,p=((m=document.querySelector(".top-nav"))==null?void 0:m.offsetHeight)||56,s=((y=document.querySelector(".bottom-nav"))==null?void 0:y.offsetHeight)||60;if(e.querySelector(".home-inner")){const l=c-p-s;e.querySelector(".home-dark").style.minHeight=l+"px"}if(window.innerWidth<768){const l=((_=e.querySelector(".home-hero"))==null?void 0:_.offsetHeight)||60,T=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const f=((g=e.querySelector(".home-footer"))==null?void 0:g.offsetHeight)||44,L=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((K,Z)=>{var re;return K+(((re=document.getElementById(Z))==null?void 0:re.offsetHeight)||0)},0),j=12*5,F=c-p-s-l-f-L-j-32,G=Math.max(80,Math.round(F*.28)),q=Math.max(160,Math.round(F*.72)),N=Math.floor((q-10)/2);T&&(T.style.minHeight=T.style.maxHeight=G+"px"),e.querySelectorAll(".play-tile").forEach(K=>{K.style.minHeight=K.style.height=N+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(K=>{K.style.height=Math.round(N*.55)+"px"})}}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(c=>{c.addEventListener("click",()=>{c.style.transform="scale(.96)",setTimeout(()=>c.style.transform="",180);const p=c.dataset.action;if(p==="match-ai"){Dn(i);return}if(p==="match-random"){i("match",{matchMode:"random"});return}if(p==="match-friend"){i("friends");return}if(p==="mini-league"){i("mini-league");return}if(p==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await S.auth.signOut(),window.location.reload()}),Qi(t,n),Bn(t,n,i),Xi(t,n,i))}async function Xi(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const d=e.profile.id,{data:a}=await S.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${d},away_id.eq.${d}`).order("created_at",{ascending:!1});if(!(a!=null&&a.length)){n.innerHTML="";return}const r=a.map(p=>p.home_id===d?p.away_id:p.home_id).filter(Boolean);let c={};if(r.length){const{data:p}=await S.from("users").select("id, pseudo, club_name").in("id",r);(p||[]).forEach(s=>{c[s.id]=s.club_name||s.pseudo})}n.innerHTML=a.map(p=>{const s=p.home_id===d?p.away_id:p.home_id,o=c[s]||"Adversaire",v=p.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${v?"🏆 Mini League":p.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
      </div>
      <button data-resume="${p.id}" data-mini="${v?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${p.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(p=>{p.addEventListener("click",async()=>{const s=document.getElementById("page-content")||document.getElementById("app");if(p.dataset.mini==="1"){const{data:o}=await S.from("mini_league_matches").select("id, league_id").eq("match_id",p.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await ni(async()=>{const{resumePvpMatch:v}=await Promise.resolve().then(()=>Fo);return{resumePvpMatch:v}},void 0);o(s,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},p.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(p=>{p.addEventListener("click",()=>{qn(async()=>{await Cn(p.dataset.abandon,p.dataset.opp,d),t("Match abandonné (défaite 3-0)","info"),Xi(e,t,i)})})})}async function Cn(e,t,i){const{data:n}=await S.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const d=n.home_id===i,a=d?0:3,r=d?3:0,c=n.game_state||{};c.p1Score=a,c.p2Score=r,c.phase="finished",c.forfeit=!0,await S.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:a,away_score:r,game_state:c}).eq("id",e)}function qn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Bn(e,t,i){var c,p,s,o;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:d}=await S.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){n.innerHTML="";return}const a=((c=d.inviter)==null?void 0:c.club_name)||((p=d.inviter)==null?void 0:p.pseudo)||"?",r=d.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${a} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:a})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await S.from("friend_match_invites").update({status:"declined"}).eq("id",d.id),n.innerHTML="",t("Invitation refusée","info")})}async function Qi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:d}=await S.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(d||!(n!=null&&n.length)){i.innerHTML="";return}const a=n.length,r=n.slice(0,2).map(p=>{var s;return((s=p.requester)==null?void 0:s.pseudo)||"?"}).join(", "),c=a>2?` +${a-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${a} demande${a>1?"s":""} d'ami${a>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r}${c}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Wi(e,t,()=>Qi(e,t)))}function Dn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:380px">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${t.map(d=>`<div class="action-card" data-mode="${d.mode}" style="cursor:pointer"><div class="icon">${d.icon}</div><div class="label">${d.label}</div><div class="sub">${d.sub}</div></div>`).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const Re={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function We(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const Fi=["ATT","MIL","DEF","GK"];function Zi(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const a=e[n],r=e[d];if(!a||!r)continue;const c=a._col!=null&&r._col!=null&&a._col===r._col,p=a._col!=null&&r._col!=null&&Math.abs(a._col-r._col)===1,s=Fi.indexOf(a._line||a.job),o=Fi.indexOf(r._line||r.job),v=Math.abs(s-o)===1;if(!((a._line||a.job)===(r._line||r.job)&&p||c&&v))continue;const _=a.country_code&&r.country_code&&a.country_code===r.country_code,g=a.club_id&&r.club_id&&a.club_id===r.club_id;_&&g?t+=2:(_||g)&&(t+=1)}return t}function Ht(e,t={}){const i=e.reduce((a,r)=>{const c=r._line||r.job,p=r.stadiumBonus&&(c==="MIL"||c==="ATT")?10:0;return a+(Number(c==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+p},0),n=Zi(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Ut(e,t={}){const i=e.reduce((a,r)=>{const c=r._line||r.job;let p=0;c==="GK"?p=Number(r.note_g)||0:c==="MIL"?p=Number(r.note_m)||0:p=Number(r.note_d)||0;const s=r.stadiumBonus&&(c==="GK"||c==="DEF"||c==="MIL")?10:0;return a+p+(r.boost||0)+s},0),n=Zi(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Kt(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function en(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const d=[...n].sort((r,c)=>{const p=t==="attack"?We(r,"ATT"):r._line==="GK"?We(r,"GK"):We(r,"DEF");return(t==="attack"?We(c,"ATT"):c._line==="GK"?We(c,"GK"):We(c,"DEF"))-p});let a=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(a,d.length,3))}function Fn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const tn={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function nn(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const d=zi(i),a=Number(i[t])||0;if(a<=0)return 0;const r=i.note_min??1,c=i.note_max??10,s=(e.current_note??d)-d;return Math.min(c,Math.max(r,a+s))}function zi(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Ai(e,t){!e||!t||await Promise.all([bi(e,"win"),bi(t,"loss")])}async function bi(e,t){const{data:i}=await S.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(d=>{var a,r;return((a=d.player)==null?void 0:a.rarity)==="pepite"||((r=d.player)==null?void 0:r.rarity)==="papyte"});n.length&&await Promise.all(n.map(d=>{const a=tn[d.player.rarity],r=t==="win"?a.win:a.loss,c=d.player.note_min??1,p=d.player.note_max??10,s=zi(d.player),o=d.current_note??s,v=Math.min(p,Math.max(c,o+r));return S.from("cards").update({current_note:v}).eq("id",d.id)}))}async function Gn(e,t){return bi(e,t)}const on=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:tn,applyOwnEvolution:Gn,currentSecondaryNote:nn,getBaseMainNote:zi,updateEvolutiveCards:Ai},Symbol.toStringTag,{value:"Module"})),Pn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},li={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Vt=["GK","DEF","MIL","ATT"],Nn=["Tous","GK","DEF","MIL","ATT"],Rn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Gi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function On(e){return e.length?e.reduce((t,i)=>Gi(i)>Gi(t)?i:t,e[0]):e[0]}function Hn(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Un={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Kn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ci(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function pi(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,d={...i,_evolution_bonus:n},a=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${a}
    ${ot(d,{width:140})}
  </div>`}function Pi(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${ot(e,{width:140})}
  </div>`}async function Vn(e,t){const{state:i,navigate:n,toast:d,openModal:a,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:c}=await S.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:p}=await S.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(c||[]).filter(O=>O.card_type==="player"&&O.player),o=(c||[]).filter(O=>O.card_type==="game_changer"),v=(c||[]).filter(O=>O.card_type==="formation"),m=(c||[]).filter(O=>O.card_type==="stadium"),{data:y}=await S.from("gc_definitions").select("name,gc_type,color,effect,image_url"),_={};(y||[]).forEach(O=>{_[O.name]=O});const{data:g}=await S.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),l={};(g||[]).forEach(O=>{l[O.id]=O}),m.forEach(O=>{O.stadium_def&&(l[O.stadium_id]=O.stadium_def)});const T=Object.keys(Ei),f=Object.keys(Re),L={};s.forEach(O=>{const X=O.player.id;L[X]=(L[X]||0)+1}),new Set(Object.keys(L).map(O=>String(O)));const j=new Set(v.map(O=>O.formation)),F=new Set(o.map(O=>O.gc_type));let G="player",q="Tous",N="",K=!1;function Z(){return[...s].sort((O,X)=>{const ae=Vt.indexOf(O.player.job),se=Vt.indexOf(X.player.job);return ae!==se?ae-se:(O.player.surname_real||"").localeCompare(X.player.surname_real||"")})}function re(){return[...p||[]].sort((O,X)=>{const ae=Vt.indexOf(O.job),se=Vt.indexOf(X.job);return ae!==se?ae-se:(O.surname_real||"").localeCompare(X.surname_real||"")})}function le(){return Z().filter(O=>{const X=O.player,ae=q==="Tous"||X.job===q,se=!N||`${X.firstname} ${X.surname_real}`.toLowerCase().includes(N);return ae&&se})}function te(){return re().filter(O=>{const X=q==="Tous"||O.job===q,ae=!N||`${O.firstname} ${O.surname_real}`.toLowerCase().includes(N);return X&&ae})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${G==="player"?"var(--green)":"transparent"};
        color:${G==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${s.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${G==="formation"?"var(--green)":"transparent"};
        color:${G==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${v.length})</div>
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${m.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function H(){const O=document.getElementById("col-filters");O&&(G==="player"?(O.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${N}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Nn.map(X=>`
            <button class="filter-btn" data-job="${X}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${X===q?"var(--green)":"var(--gray-200)"};
                background:${X===q?"var(--green)":"#fff"};
                color:${X===q?"#fff":"var(--gray-600)"}">
              ${X}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${K?"var(--yellow)":"var(--gray-200)"};
              background:${K?"var(--yellow)":"#fff"};
              color:${K?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${K?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",X=>{N=X.target.value.toLowerCase(),D()}),e.querySelectorAll(".filter-btn").forEach(X=>{X.addEventListener("click",()=>{q=X.dataset.job,H(),D()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{K=!K,H(),D()})):(O.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${K?"var(--yellow)":"var(--gray-200)"};
              background:${K?"var(--yellow)":"#fff"};
              color:${K?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${K?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{K=!K,H(),D()})))}function D(){const O=document.getElementById("col-grid");O&&(G==="player"?je(O):G==="formation"?fe(O):G==="stadium"?ge(O):me(O))}function ne(O,X,ae,se,pe){const ee=document.getElementById("col-grid"),de=document.getElementById("col-big");if(!ee||!de)return;var Ae=0;function Te(){const ze=window.innerWidth>=768,ke=document.getElementById("col-big"),Ce=document.getElementById("col-grid");ze&&ke&&(ke.style.minHeight="420px",ke.style.flex="1 1 auto"),ze&&Ce&&(Ce.style.height=Math.round(310*.76+16)+"px",Ce.style.flexShrink="0",Ce.style.overflowX="auto",Ce.style.overflowY="hidden",Ce.style.alignItems="center",Ce.style.padding="8px 16px"),de.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+X(O[Ae])+"</div>";var Fe=de.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Fe&&Fe.addEventListener("click",function(){se(O[Ae])}),requestAnimationFrame(function(){var Se=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!Se||!de)){var C=de.clientHeight-8,k=de.clientWidth-24,u=Se.offsetHeight,x=Se.offsetWidth;if(u>0&&x>0&&C>40){var b=ze?2.2:1.6,h=Math.min(C/u,k/x,b);Se.style.transform="scale("+h.toFixed(3)+")",Se.style.transformOrigin="top center"}}}),ee.innerHTML=O.map(function(Se,C){var k=C===Ae,u="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(k?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+C+'" style="'+u+'">'+ae(Se,k)+"</div>"}).join(""),ee.querySelectorAll(".col-mini-item").forEach(function(Se){Se.addEventListener("click",function(){Ae=Number(Se.dataset.idx),Te(),Se.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Te()}function xe(O){var X=window.innerWidth>=768?.76:.54,ae;if(!O||O._fake){var se=O?O.player:null;if(!se)return"";ae=Pi(se)}else ae=pi(O,"");return'<div style="display:inline-block;zoom:'+X+';pointer-events:none;line-height:0">'+ae+"</div>"}function _e(O,X,ae){X=X||100,ae=ae||140;var se=Ot[O]||{},pe={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ee=Math.max(3,Math.round(X*.06)),de=Object.entries(se).map(function(Te){var ze=Te[0],ke=Te[1],Ce=ze.replace(/\d+$/,""),Fe=pe[Ce]||"#888",Se=Math.round(ke.x*X),C=Math.round(ke.y*ae);return'<circle cx="'+Se+'" cy="'+C+'" r="'+ee+'" fill="'+Fe+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Ae=Math.max(1,Math.round(X/50));return'<svg viewBox="0 0 '+X+" "+ae+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+X+'" height="'+ae+'" fill="#1A6B3C"/><rect x="'+Math.round(X*.2)+'" y="'+Math.round(ae*.02)+'" width="'+Math.round(X*.6)+'" height="'+Math.round(ae*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ae+'"/><line x1="0" y1="'+Math.round(ae*.5)+'" x2="'+X+'" y2="'+Math.round(ae*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ae+'"/><ellipse cx="'+Math.round(X*.5)+'" cy="'+Math.round(ae*.5)+'" rx="'+Math.round(X*.18)+'" ry="'+Math.round(ae*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ae+'"/><rect x="'+Math.round(X*.2)+'" y="'+Math.round(ae*.82)+'" width="'+Math.round(X*.6)+'" height="'+Math.round(ae*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ae+'"/>'+de+"</svg>"}function ve(O,X,ae){var se=ae>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ae+"</div>":"",pe=X?'data-form-id="'+X.id+'"':"",ee=O.length>7?14:O.length>5?16:19,de=!!X;return"<div "+pe+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(de?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(de?"":"filter:grayscale(1);opacity:0.5")+'">'+se+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(de?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ee+"px;font-weight:900;color:"+(de?"#1A6B3C":"#aaa")+';line-height:1">'+O+'</div></div><div style="flex:1;overflow:hidden;background:'+(de?"#1A6B3C":"#ccc")+'">'+_e(O,140,220)+"</div></div>"}function we(O,X){var ae=window.innerWidth>=768?.76:.54,se=140,pe=305,ee=Math.round(pe*.22),de=pe-ee,Ae=O.length>7?10:13,Te=_e(O,se,de),ze=X?"1.5px solid #2a7a40":"1px solid #ddd",ke=X?"":"filter:grayscale(1);opacity:0.45;",Ce=X?"#1A6B3C":"#bbb",Fe="#fff";return'<div style="display:inline-block;zoom:'+ae+';line-height:0;pointer-events:none"><div style="width:'+se+"px;height:"+pe+"px;border-radius:6px;border:"+ze+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+ke+'"><div style="height:'+ee+"px;background:"+Ce+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Ae+"px;font-weight:900;color:"+Fe+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(se-4)+'px">'+O+'</span></div><div style="height:'+de+'px;overflow:hidden;flex-shrink:0">'+Te+"</div></div></div>"}function je(O){if(K){const X=te();if(!X.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ae=X.map(se=>s.find(pe=>pe.player.id===se.id)||{_fake:!0,player:se,id:"fake-"+se.id});ne(ae,se=>se._fake?Pi(se.player):pi(se,""),se=>se._fake?xe({player:se.player,id:"x",_fake:!0}):xe(se),se=>{se._fake||Ni(se,s,L,t)})}else{const X=le();if(!X.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ae={};X.forEach(pe=>{const ee=pe.player.id;ae[ee]||(ae[ee]=[]),ae[ee].push(pe)});const se=Object.values(ae).map(pe=>On(pe));ne(se,pe=>{const ee=L[pe.player.id]||1,de=ee>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ee}</div>`:"",Te=s.filter(ze=>ze.player.id===pe.player.id&&ze.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return pi(pe,de+Te)},pe=>xe(pe),pe=>Ni(pe,s,L,t))}}function fe(O){const X=K?T:[...j];if(!X.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ae=X.map(se=>({formation:se,card:v.find(pe=>pe.formation===se)||null,owned:j.has(se)}));ne(ae,({formation:se,card:pe,owned:ee})=>ve(se,ee?pe:null,ee?v.filter(de=>de.formation===se).length:0),({formation:se,owned:pe})=>we(se,pe),({card:se,owned:pe})=>{pe&&se&&Wn(se,v,t,a)})}function me(O){const X=Object.keys(_),ae=K?X.length?X:f:[...F];if(!ae.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const se=ae.map(pe=>({type:pe,gc:Re[pe]||{icon:"⚡",desc:""},def:_[pe]||null,owned:F.has(pe),card:o.find(ee=>ee.gc_type===pe)||null}));ne(se,({type:pe,gc:ee,def:de,owned:Ae,card:Te})=>{var b;const ze=Ae?o.filter(h=>h.gc_type===pe).length:0,ke=ze>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${ze}</div>`:"",Ce=(de==null?void 0:de.gc_type)==="ultra_game_changer",Fe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Se={purple:"#b06ce0",light_blue:"#00d4ef"},C=Fe[de==null?void 0:de.color]||Fe.purple,k=Se[de==null?void 0:de.color]||Se.purple,u=(de==null?void 0:de.effect)||ee.desc||"",x=de!=null&&de.image_url?`/icons/${de.image_url}`:((b=de==null?void 0:de.club)==null?void 0:b.logo_url)||(de!=null&&de.country_code?`https://flagsapi.com/${de.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ae&&Te?`<div data-gc-id="${Te.id}" data-gc-type="${pe}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${k};background:${C};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${k}66;cursor:pointer">
          ${ke}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${pe.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${pe}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ce?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${x?`<img src="${x}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ee.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${u.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${pe}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ee.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:pe,gc:ee,def:de,owned:Ae})=>{const Te=window.innerWidth>=768?.76:.54,ze={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ke={purple:"#9b59b6",light_blue:"#00bcd4"},Ce=ze[de==null?void 0:de.color]||ze.purple,Fe=ke[de==null?void 0:de.color]||ke.purple,Se=de!=null&&de.image_url?`/icons/${de.image_url}`:null;return Ae?`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ce};border:1px solid ${Fe};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${pe}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${Se?`<img src="${Se}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${ee.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((de==null?void 0:de.effect)||ee.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${ee.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${pe}</span></div></div>`},({type:pe,owned:ee,def:de})=>{ee&&Yn(pe,de,a)})}function ge(O){const X="#E87722",ae="/";if(!m.length){O.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const se={};m.forEach(ee=>{const de=ee.stadium_id||"?";(se[de]=se[de]||[]).push(ee)});const pe=Object.entries(se).map(([ee,de])=>({sid:ee,def:l[ee]||null,count:de.length,card:de[0]}));ne(pe,({def:ee,count:de})=>{var Fe,Se;const Ae=(ee==null?void 0:ee.name)||"?",Te=((Fe=ee==null?void 0:ee.club)==null?void 0:Fe.encoded_name)||(ee==null?void 0:ee.country_code)||"—",ze=ee!=null&&ee.image_url?`${ae}icons/${ee.image_url}`:((Se=ee==null?void 0:ee.club)==null?void 0:Se.logo_url)||(ee!=null&&ee.country_code?`https://flagsapi.com/${ee.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ke=ze?`<img src="${ze}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Ce=de>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${de}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${X},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${X}66">
          ${Ce}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Ae}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${ke}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Te}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:ee,count:de})=>{var Fe,Se;const Ae=window.innerWidth>=768?.76:.54,Te=(ee==null?void 0:ee.name)||"?",ze=((Fe=ee==null?void 0:ee.club)==null?void 0:Fe.encoded_name)||(ee==null?void 0:ee.country_code)||"—",ke=ee!=null&&ee.image_url?`${ae}icons/${ee.image_url}`:((Se=ee==null?void 0:ee.club)==null?void 0:Se.logo_url)||(ee!=null&&ee.country_code?`https://flagsapi.com/${ee.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Ce=ke?`<img src="${ke}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${Ae};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${X},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${Te}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${Ce}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${ze}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(O=>{O.addEventListener("click",()=>{G=O.dataset.tab,q="Tous",N="",K=!1,e.querySelectorAll(".col-tab-btn").forEach(X=>{const ae=X.dataset.tab===G;X.style.borderBottomColor=ae?"var(--green)":"transparent",X.style.color=ae?"var(--green)":"var(--gray-600)"}),H(),D()})}),H(),D()}function Yn(e,t,i){const n=Re[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",a={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},c=a[t==null?void 0:t.color]||a.purple,p=r[t==null?void 0:t.color]||r.purple,s=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||n.desc,v=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${c};border-radius:16px;border:2px solid ${p};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${d?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${s}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${v?`<img src="${v}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${o}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Yt=1e3;function Wn(e,t,i,n){var _,g,l;const{state:d,toast:a,closeModal:r,navigate:c,refreshProfile:p}=i,s=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function v(){const T=Ot[s]||{},f=Ei[s]||[],L=290,j=360,F=20;function G(N){const K=T[N];return K?{x:K.x*L,y:K.y*j}:null}let q=`<svg width="${L}" height="${j}" viewBox="0 0 ${L} ${j}" xmlns="http://www.w3.org/2000/svg">`;for(const[N,K]of f){const Z=G(N),re=G(K);!Z||!re||(q+=`<line x1="${Z.x}" y1="${Z.y}" x2="${re.x}" y2="${re.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const N of Object.keys(T)){const K=G(N);if(!K)continue;const Z=N.replace(/\d+/,""),re=o[Z]||"#555";q+=`<circle cx="${K.x}" cy="${K.y}" r="${F}" fill="${re}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,q+=`<text x="${K.x}" y="${K.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${Z}</text>`}return q+="</svg>",q}const m=t.filter(T=>T.formation===s);m.length;const y=!e.is_for_sale;n(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
      <div style="font-size:10px;color:rgba(255,255,255,0.5);letter-spacing:1px;margin-bottom:10px">SCHÉMA DES POSTES ET LIENS</div>
      ${v()}
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Yt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(_=document.getElementById("direct-sell-form-btn"))==null||_.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${Yt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const T=m.find(L=>!L.is_for_sale)||m[0];if(!T){a("Aucune carte à vendre","error");return}await S.from("market_listings").delete().eq("card_id",T.id),await S.from("transfer_history").delete().eq("card_id",T.id);const{error:f}=await S.from("cards").delete().eq("id",T.id);if(f){a(f.message,"error");return}await S.from("users").update({credits:(d.profile.credits||0)+Yt}).eq("id",d.profile.id),await p(),a(`+${Yt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),c("collection")}),(g=document.getElementById("market-sell-form-btn"))==null||g.addEventListener("click",async()=>{const T=parseInt(document.getElementById("sell-price-form").value);if(!T||T<1){a("Prix invalide","error");return}await S.from("cards").update({is_for_sale:!0,sale_price:T}).eq("id",e.id),await S.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:T}),a("Carte mise en vente sur le marché !","success"),r(),c("collection")}),(l=document.getElementById("cancel-sell-form-btn"))==null||l.addEventListener("click",async()=>{await S.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await S.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),a("Annonce retirée","success"),r(),c("collection")})}async function Ni(e,t,i,n){var xe,_e,ve,we,je;const{state:d,toast:a,openModal:r,closeModal:c,navigate:p,refreshProfile:s}=n,o=e.player,v=t.filter(fe=>fe.player.id===o.id),m=v.length,y=e.evolution_bonus||0,_=Math.max((Number(o.note_g)||0)+(o.job==="GK"||o.job2==="GK"?y:0),(Number(o.note_d)||0)+(o.job==="DEF"||o.job2==="DEF"?y:0),(Number(o.note_m)||0)+(o.job==="MIL"||o.job2==="MIL"?y:0),(Number(o.note_a)||0)+(o.job==="ATT"||o.job2==="ATT"?y:0)),g=o.rarity||"normal",{data:l}=await S.from("sell_price_configs").select("*").eq("rarity",g).lte("note_min",_).gte("note_max",_).order("note_min",{ascending:!1}).limit(1);((xe=l==null?void 0:l[0])==null?void 0:xe.price)??Rn[g];const T=o.rarity!=="legende";Kn(o);const f=((o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:ci(o,o.job))+y,L=o.rarity==="pepite"||o.rarity==="papyte",j=o.job2?(L?nn(e,Hn(o.job2)):ci(o,o.job2))+(ci(o,o.job2)>0?y:0):null;li[o.job],o.job2&&li[o.job2];const F=Pn[o.rarity]||"#ccc";Un[o.country_code]||o.country_code;const G=e.evolution_bonus||0,N=f+G,K=j||0,Z=K>0?K+G:0,re=v.map(fe=>fe.id);let le={};if(re.length){const{data:fe}=await S.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",re).order("transferred_at",{ascending:!0});(fe||[]).forEach(me=>{le[me.card_id]||(le[me.card_id]=[]),le[me.card_id].push(me)})}const te=fe=>{const me=fe.transferred_at?new Date(fe.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ge=fe.source==="booster"?"Booster":fe.price?fe.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${fe.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${fe.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${fe.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${ge}</div>
        <div style="font-size:11px;color:var(--gray-600)">${me}</div>
      </div>
    </div>`},H=re.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${m>1?`(${m})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${v.map((fe,me)=>{const ge=le[fe.id]||[],O=fe.is_for_sale,X=ge.length?ge[ge.length-1]:null,se=(o.rarity==="pepite"||o.rarity==="papyte")&&fe.current_note!=null?` (☆${fe.current_note})`:"";return`
            <div data-card-id="${fe.id}" data-card-idx="${me}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${O?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${fe.id}" ${O?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${me+1}${se}${O?" 🏷️ En vente":""}</div>
                  ${X?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${X.club_name} · ${X.source==="booster"?"Booster":X.price?X.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${me}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${ge.length?`${ge.length} club${ge.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${me}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${ge.map(te).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${N}${o.job2&&K>0?` / ${Z}`:""}`:`Note actuelle : ${N}${o.job2&&K>0?` / ${Z}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${m<=1?"#ccc":"#1A6B3C"};border-color:${m<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${m<=1?"not-allowed":"pointer"}"
            ${m<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${T?`
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
    </div>`:"";r(`${o.firstname} ${o.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${ot({...o,_evolution_bonus:y},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${F}">${o.rarity.toUpperCase()}</div>
          ${o.rarity==="pepite"||o.rarity==="papyte"?`
          <div style="margin-top:6px;background:${F}18;border-left:3px solid ${F};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${F};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([fe,me])=>{const ge=li[fe],O=fe==="GK"?"#fff":ge,X=fe===o.job||fe===o.job2,ae=(Number(me)||0)+(X&&G>0?G:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${ge};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${O};font-family:Arial Black,Arial;line-height:1">${ae}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${O}">${fe}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${m}</div>
        </div>
      </div>
    </div>
    ${H}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(_e=document.getElementById("close-detail"))==null||_e.addEventListener("click",c);let D=new Set;const ne=()=>{const fe=D.size,me=document.getElementById("sell-action-panel");if(!me)return;me.style.display=fe>0?"block":"none",document.getElementById("sell-selected-count").textContent=fe;const ge=document.getElementById("evolve-btn");ge&&(ge.textContent=`⬆️ Évoluer ${fe>1?"(+"+fe+")":""}`)};document.querySelectorAll(".expl-check").forEach(fe=>{fe.addEventListener("change",()=>{const me=fe.dataset.id;fe.checked?D.add(me):D.delete(me);const ge=fe.closest(".exemplaire-row");ge&&(ge.style.borderColor=fe.checked?"#1A6B3C":"#eee"),ne()})}),document.querySelectorAll(".exemplaire-row").forEach(fe=>{fe.addEventListener("click",me=>{if(me.target.closest("button")||me.target.tagName==="INPUT")return;const ge=fe.querySelector(".expl-check");ge&&!ge.disabled&&(ge.checked=!ge.checked,ge.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(fe=>{fe.addEventListener("click",me=>{me.stopPropagation();const ge=document.querySelector(`.expl-hist[data-hist="${fe.dataset.idx}"]`);ge&&(ge.style.display=ge.style.display==="none"?"flex":"none")})}),(ve=document.getElementById("evolve-btn"))==null||ve.addEventListener("click",async()=>{if(m<=1)return;const fe=[...D];if(!fe.length)return;if(D.has(e.id)){const pe=document.createElement("div");pe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",pe.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(pe),pe.querySelector("#err-close").addEventListener("click",()=>pe.remove()),pe.addEventListener("click",ee=>{ee.target===pe&&pe.remove()});return}const me=fe.filter(pe=>pe!==e.id),ge=o.rarity==="legende"?2:1;if((me.length||1)*ge,!(!me.length&&fe.length===1&&fe[0]===e.id)){if(!me.length){a("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(pe=>{const ee=document.createElement("div");ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",ee.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${o.firstname} ${o.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${me.length}</strong> copie${me.length>1?"s":""} sacrifiée${me.length>1?"s":""}<br>
            📈 Note : <strong>${f+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${f+(e.evolution_bonus||0)+me.length*ge}</strong>
            ${j&&j>0?`<br>📈 Note 2 : <strong>${j+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${j+(e.evolution_bonus||0)+me.length*ge}</strong>`:""}
            ${o.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${ge} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ee),ee.querySelector("#sac-cancel").addEventListener("click",()=>{ee.remove(),pe(!1)}),ee.querySelector("#sac-ok").addEventListener("click",()=>{ee.remove(),pe(!0)}),ee.addEventListener("click",de=>{de.target===ee&&(ee.remove(),pe(!1))})}))return;if(me.length){await S.from("market_listings").delete().in("card_id",me),await S.from("deck_cards").delete().in("card_id",me),await S.from("transfer_history").delete().in("card_id",me),await S.from("decks").update({stadium_card_id:null}).in("stadium_card_id",me);const{error:pe}=await S.from("cards").delete().in("id",me);if(pe){a("Erreur suppression : "+pe.message,"error");return}}const X=(e.evolution_bonus||0)+me.length*ge,{error:ae}=await S.from("cards").update({evolution_bonus:X}).eq("id",e.id);if(ae){a("Erreur évolution : "+ae.message,"error");return}const se=f+X;a(`⬆️ ${o.firstname} ${o.surname_real} : note ${f+e.evolution_bonus||f} → ${se}${me.length?` · ${me.length} copie${me.length>1?"s":""} sacrifiée${me.length>1?"s":""}`:""} !`,"success",4e3),c(),p("collection")}),(we=document.getElementById("market-sell-btn"))==null||we.addEventListener("click",async()=>{var ae;const fe=[...D];if(!fe.length){a("Sélectionne au moins un exemplaire","warning");return}const me=parseInt((ae=document.getElementById("sell-market-price"))==null?void 0:ae.value);if(!me||me<1){a("Prix invalide","error");return}const{error:ge}=await S.from("cards").update({is_for_sale:!0,sale_price:me}).in("id",fe);if(ge){a(ge.message,"error");return}const O=fe.map(se=>({seller_id:d.profile.id,card_id:se,price:me,status:"active"})),{error:X}=await S.from("market_listings").insert(O);X&&console.warn("[Market] insert listings:",X.message),a(`${fe.length} carte${fe.length>1?"s":""} mise${fe.length>1?"s":""} en vente à ${me.toLocaleString("fr")} cr. chacune !`,"success"),c(),p("collection")}),(je=document.getElementById("cancel-sell-btn"))==null||je.addEventListener("click",async()=>{await S.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await S.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),a("Annonce retirée","success"),c(),p("collection")})}const Qt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function yi(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await S.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((a==null?void 0:a.length)||0)+1}`);if(!r)return;const{data:c,error:p}=await S.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(p){d(p.message,"error");return}d("Deck créé !","success"),Ri(c.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>Ri(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const c=prompt("Nouveau nom :",r.dataset.name);if(!c||c===r.dataset.name)return;const{error:p}=await S.from("decks").update({name:c}).eq("id",r.dataset.rename);if(p){d(p.message,"error");return}d("Deck renommé !","success"),yi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await S.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:c}=await S.from("decks").delete().eq("id",r.dataset.delete);if(c){d(c.message,"error");return}d("Deck supprimé.","success"),yi(e,t)})})}async function Ri(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await S.from("decks").select("*").eq("id",e).single(),{data:r}=await S.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:c}=await S.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),p=(r||[]).filter(T=>T.card_type==="player"&&T.player),s=(r||[]).filter(T=>T.card_type==="formation"),o=(c||[]).filter(T=>T.card_type==="stadium"),v=[...new Set(o.map(T=>T.stadium_id).filter(Boolean))];let m={};if(o.forEach(T=>{T.stadium_def&&T.stadium_id&&(m[T.stadium_id]=T.stadium_def)}),v.length&&Object.keys(m).length<v.length){const{data:T}=await S.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",v);(T||[]).forEach(f=>{m[f.id]=f})}const y=s.map(T=>T.formation).filter(Boolean),{data:_}=await S.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let g=a.formation||"4-4-2";y.length>0&&!y.includes(g)&&(g=y[0]);const l={deckId:e,name:a.name,formation:g,formationCardId:a.formation_card_id,stadiumCardId:a.stadium_card_id||null,slots:{},subs:[],playerCards:p,formationCards:s,stadiumCards:o,stadDefMap:m,availableFormations:y};(_||[]).forEach(T=>{T.is_starter?l.slots[T.position]=T.card_id:l.subs.includes(T.card_id)||l.subs.push(T.card_id)}),vt(t,l,i)}function vt(e,t,i){var _,g;const{navigate:n}=i;Qt[t.formation];const d=Oi(t.formation),a=d.filter(l=>t.slots[l]).length,r=t.availableFormations.length>0?t.availableFormations:Object.keys(Qt),c=(_=t.stadiumCards)==null?void 0:_.find(l=>l.id===t.stadiumCardId),p=c&&((g=t.stadDefMap)==null?void 0:g[c.stadium_id])||null,s=t.subs.map(l=>t.playerCards.find(T=>T.id===l)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
  <div style="height:100%;overflow:hidden;background:var(--page-bg)">
    <div class="page-header" style="display:flex;align-items:center;gap:8px;padding:6px 12px;min-height:0">
      <button class="btn-icon" id="builder-back" style="font-size:16px">←</button>
      <div style="flex:1">
        <h2 style="font-size:14px;margin:0">${t.name}</h2>
        <p style="font-size:11px;margin:0">${a}/11 · ${t.subs.length}/5 rempl.</p>
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
            ${s.map(l=>{const T={...l.player,_evolution_bonus:l.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                ${ot({...T,_evolution_bonus:T._evolution_bonus||0},{width:60,showStad:!0,stadDef:p})}
                <button data-remove-sub="${l.id}"
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
              ${c?(()=>{var f;const l=t.stadDefMap[c.stadium_id],T=((f=l==null?void 0:l.club)==null?void 0:f.logo_url)||null;return`<div style="width:100px;height:130px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                  ${T?`<img src="${T}" style="width:48px;height:48px;object-fit:contain">`:'<span style="font-size:36px">🏟️</span>'}
                  <span style="font-size:10px;font-weight:700;color:#E87722;text-align:center;padding:0 4px">${((l==null?void 0:l.name)||"Stade").slice(0,14)}</span>
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
              ${s.map(l=>{const T={...l.player,_evolution_bonus:l.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                  ${ot({...T,_evolution_bonus:T._evolution_bonus||0},{width:44,showStad:!0,stadDef:p})}
                  <button data-remove-sub="${l.id}"
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
              ${c?(()=>{var f;const l=t.stadDefMap[c.stadium_id],T=((f=l==null?void 0:l.club)==null?void 0:f.logo_url)||null;return`<div style="width:50px;height:65px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                  ${T?`<img src="${T}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:18px">🏟️</span>'}
                  <span style="font-size:14px;font-weight:700;color:#E87722;text-align:center;padding:0 2px">${((l==null?void 0:l.name)||"Stade").slice(0,10)}</span>
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
  </div>`;const o=window.innerWidth>=900,v=e.querySelector(".deck-pc-layout"),m=e.querySelector(".deck-mobile-layout");v&&(v.style.display=o?"block":"none"),m&&(m.style.display=o?"none":"block"),Jn(e,t,d,i),e.querySelectorAll("#builder-back").forEach(l=>l.addEventListener("click",()=>n("decks")));const y=()=>{const{openModal:l,closeModal:T}=i,f=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${r.map(L=>`<div data-forma="${L}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${L===t.formation?"#1A6B3C":"#f0f0f0"};color:${L===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${L===t.formation?"#1A6B3C":"#ddd"}">${L}</div>`).join("")}
    </div>`;l("⚽ Choisir une formation",f),document.querySelectorAll("#modal-body [data-forma]").forEach(L=>{L.addEventListener("click",()=>{t.formation=L.dataset.forma;const j=Oi(t.formation),F={};j.forEach(G=>{t.slots[G]&&(F[G]=t.slots[G])}),t.slots=F,T(),vt(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(l=>l.addEventListener("click",y)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(l=>l.addEventListener("click",()=>Xn(t,e,i))),e.querySelectorAll("#save-deck").forEach(l=>l.addEventListener("click",()=>eo(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(l=>{l.addEventListener("click",()=>{t.subs=t.subs.filter(T=>T!==l.dataset.removeSub),vt(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(l=>l.addEventListener("click",()=>Zn(t,e,i)))}function Jn(e,t,i,n){var L,j;const d=window.innerWidth>=900,a=e.querySelector(d?"#deck-field-pc":"#deck-field-mobile");if(!a)return;const r=(L=t.stadiumCards)==null?void 0:L.find(F=>F.id===t.stadiumCardId),c=r&&((j=t.stadDefMap)==null?void 0:j[r.stadium_id])||null,p=Ot[t.formation]||{},s=Vi(t.formation)||[],o={};for(const F of i){const G=t.slots[F],q=G?t.playerCards.find(N=>N.id===G):null;q!=null&&q.player?o[F]={...q.player,_evolution_bonus:q.evolution_bonus||0,face:q.player.face||null}:o[F]=null}const v=window.innerWidth>=900,m=v?window.innerWidth-280:window.innerWidth-20,y=v?Math.min(m,860):m,_=Math.round(v?y*.82:y*.85),g=v?84:44;let l="";for(const[F,G]of s){const q=p[F],N=p[G];if(!q||!N)continue;const K=q.x*y,Z=Math.round(.03*_+q.y*.85*_),re=N.x*y,le=Math.round(.03*_+N.y*.85*_),te=o[F],H=o[G],D=rt(te,H);D==="#ff3333"||D==="#cc2222"?l+=`<line x1="${K.toFixed(1)}" y1="${Z.toFixed(1)}" x2="${re.toFixed(1)}" y2="${le.toFixed(1)}" stroke="${D}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(l+=`<line x1="${K.toFixed(1)}" y1="${Z.toFixed(1)}" x2="${re.toFixed(1)}" y2="${le.toFixed(1)}" stroke="${D}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,l+=`<line x1="${K.toFixed(1)}" y1="${Z.toFixed(1)}" x2="${re.toFixed(1)}" y2="${le.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let T="";const f=Math.round(g*657/507);for(const F of i){const G=p[F];if(!G)continue;const q=o[F],N=G.x*y;G.y*_;const K=Math.round(.03*_+G.y*(.85*_)),Z=Math.round(N-g/2),re=Math.round(K-f/2);if(q){const le=F.replace(/\d+/,""),te=c&&(c.club_id&&String(q.club_id)===String(c.club_id)||c.country_code&&q.country_code===c.country_code),H=ot({...q,_evolution_bonus:q._evolution_bonus||0},{width:g,showStad:!0,stadDef:c,role:le});T+=`<div style="position:absolute;left:${Z}px;top:${re}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${F}">
        <div style="position:relative">${te?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${H}</div>
      </div>`}else{const le=F.replace(/\d+/,"");T+=`<div style="position:absolute;left:${Z}px;top:${re}px;width:${g}px;height:${f}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${F}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${le}</span>
      </div>`}}a.innerHTML=`
    <div style="position:relative;width:${y}px;height:${_}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${y} ${_}">${l}</svg>
      ${T}
    </div>`,a.querySelectorAll(".deck-slot-hit").forEach(F=>{F.addEventListener("click",()=>Qn(F.dataset.pos,t,e,n))})}function Xn(e,t,i){var r;const{openModal:n,closeModal:d}=i,a=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(c=>{var T,f;const p=e.stadDefMap[c.stadium_id],s=((T=p==null?void 0:p.club)==null?void 0:T.logo_url)||null,o=p!=null&&p.image_url?"/icons/"+p.image_url:null,v=e.stadiumCardId===c.id,m=p!=null&&p.country_code&&!s?`https://flagsapi.com/${p.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,y=(p==null?void 0:p.name)||"Stade",_=y.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),g=_?_[1].trim():y.slice(0,8),l=((f=_==null?void 0:_[2])==null?void 0:f.trim())||"";return`<div class="stad-choice" data-stad-id="${c.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${v?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${s?`<img src="${s}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:m?`<img src="${m}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${v?"#4fc3f7":"#ccc"}">${g}</div>
              ${l?`<div style="font-size:8px;font-weight:700;color:${v?"#4fc3f7":"#aaa"}">${l}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(r=document.getElementById("stad-none"))==null||r.addEventListener("click",()=>{e.stadiumCardId=null,d(),vt(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(c=>{c.addEventListener("click",()=>{e.stadiumCardId=c.dataset.stadId,d(),vt(t,e,i)})})}function Qn(e,t,i,n){var _,g,l,T,f;const{openModal:d,closeModal:a}=n,r=e.replace(/\d+/,""),c=(_=t.stadiumCards)==null?void 0:_.find(L=>L.id===t.stadiumCardId),p=c&&((g=t.stadDefMap)==null?void 0:g[c.stadium_id])||null,s=t.slots[e],o=s?t.playerCards.find(L=>L.id===s):null;(l=o==null?void 0:o.player)==null||l.id;const v=new Set;Object.entries(t.slots).forEach(([L,j])=>{var G;if(L===e||!j)return;const F=t.playerCards.find(q=>q.id===j);(G=F==null?void 0:F.player)!=null&&G.id&&v.add(F.player.id)}),t.subs.forEach(L=>{var F;const j=t.playerCards.find(G=>G.id===L);(F=j==null?void 0:j.player)!=null&&F.id&&v.add(j.player.id)});const m=new Set,y=t.playerCards.filter(L=>{const j=L.player;return!(j.job===r||j.job2===r)||v.has(j.id)||m.has(j.id)?!1:(m.add(j.id),!0)});y.sort((L,j)=>{const F=L.evolution_bonus||0,G=j.evolution_bonus||0,q=(r==="GK"?L.player.note_g:r==="DEF"?L.player.note_d:r==="MIL"?L.player.note_m:L.player.note_a)+(r===L.player.job||r===L.player.job2?F:0);return(r==="GK"?j.player.note_g:r==="DEF"?j.player.note_d:r==="MIL"?j.player.note_m:j.player.note_a)+(r===j.player.job||r===j.player.job2?G:0)-q}),d(`Choisir ${r} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${y.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+y.map(L=>{const j={...L.player,_evolution_bonus:L.evolution_bonus||0};return`<div class="player-option" data-card-id="${L.id}" style="cursor:pointer">
          ${ot(j,{width:100,showStad:!0,stadDef:p,role:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(T=document.getElementById("close-selector"))==null||T.addEventListener("click",a),(f=document.getElementById("remove-player"))==null||f.addEventListener("click",()=>{delete t.slots[e],a(),vt(i,t,n)}),document.querySelectorAll(".player-option").forEach(L=>{L.addEventListener("click",()=>{t.slots[e]=L.dataset.cardId,a(),vt(i,t,n)})})}function Zn(e,t,i){var o,v,m;const{openModal:n,closeModal:d}=i,a=(o=e.stadiumCards)==null?void 0:o.find(y=>y.id===e.stadiumCardId),r=a&&((v=e.stadDefMap)==null?void 0:v[a.stadium_id])||null,c=new Set;Object.keys(e.slots).forEach(y=>{var l;const _=e.slots[y];if(!_)return;const g=e.playerCards.find(T=>T.id===_);(l=g==null?void 0:g.player)!=null&&l.id&&c.add(g.player.id)}),e.subs.forEach(y=>{var g;const _=e.playerCards.find(l=>l.id===y);(g=_==null?void 0:_.player)!=null&&g.id&&c.add(_.player.id)});const p=new Set,s=e.playerCards.filter(y=>{var _,g,l;return c.has((_=y.player)==null?void 0:_.id)||p.has((g=y.player)==null?void 0:g.id)?!1:(p.add((l=y.player)==null?void 0:l.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(y=>{const _={...y.player,_evolution_bonus:y.evolution_bonus||0};return`<div class="player-option" data-card-id="${y.id}" style="cursor:pointer">
          ${ot(_,{width:100,showStad:!0,stadDef:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(m=document.getElementById("close-sub-selector"))==null||m.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(y=>{y.addEventListener("click",()=>{e.subs.push(y.dataset.cardId),d(),vt(t,e,i)})})}async function eo(e,t){const{state:i,toast:n,navigate:d}=t,a=e.formationCards.find(p=>p.formation===e.formation),r=(a==null?void 0:a.id)||e.formationCardId;await S.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await S.from("deck_cards").delete().eq("deck_id",e.deckId);const c=[];if(Object.entries(e.slots).forEach(([p,s],o)=>{c.push({deck_id:e.deckId,card_id:s,position:p,is_starter:!0,slot_order:o})}),e.subs.forEach((p,s)=>{c.push({deck_id:e.deckId,card_id:p,position:`SUB${s+1}`,is_starter:!1,slot_order:100+s})}),c.length>0){const{error:p}=await S.from("deck_cards").insert(c);if(p){n(p.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Oi(e){const t=Qt[e]||Qt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function rn(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await S.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let d=n;if(e){const r=n.filter(c=>c.max_per_user!=null);if(r.length){const{data:c}=await S.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(s=>s.id)),p={};(c||[]).forEach(s=>{p[s.booster_id]=(p[s.booster_id]||0)+1}),d=n.filter(s=>s.max_per_user==null?!0:(p[s.id]||0)<s.max_per_user)}}if(!d.length)return[];const{data:a}=await S.from("booster_drop_rates").select("*").in("booster_id",d.map(r=>r.id)).order("sort_order");return d.map(r=>({...r,rates:(a||[]).filter(c=>c.booster_id===r.id)}))}async function to(e,t){const{data:i}=await S.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await S.from("booster_claims").insert({user_id:e,booster_id:t})}function io(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const an=()=>Object.keys(Ot),no=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],hi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function oo(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return ot({...t,_evolution_bonus:i},{width:140})}function sn(e){var d;const t={};(e.rates||[]).forEach(a=>{t[a.card_type]=(t[a.card_type]||0)+Number(a.percentage||0)});const i=((d=Object.entries(t).sort((a,r)=>r[1]-a[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function ro(e,{state:t,navigate:i,toast:n}){var v,m,y;const d=((v=t.profile)==null?void 0:v.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let a=[];try{a=(await rn((m=t.user)==null?void 0:m.id)).map(sn)}catch(_){console.warn("Erreur chargement boosters DB, fallback hardcodé",_)}a.length||(a=no.map(_=>({..._,rates:[],isPub:_.id==="players_pub"})));const r=await S.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(_=>_.data||[]),c=new Set(r.filter(_=>_.card_type==="stadium").map(_=>_.stadium_id)),p=new Set(r.filter(_=>_.card_type==="formation").map(_=>_.formation)),s=new Set(r.filter(_=>_.card_type==="game_changer").map(_=>_.gc_type)),o={};for(const _ of a){if(_.allow_duplicates!==!1||!((y=_.rates)!=null&&y.length))continue;const g=[...new Set((_.rates||[]).map(T=>T.card_type))];let l=!1;for(const T of g)if(T==="stadium"){const{data:f}=await S.from("stadium_definitions").select("id");if((f||[]).some(L=>!c.has(L.id))){l=!0;break}}else if(T==="game_changer"){const{data:f}=await S.from("gc_definitions").select("name").eq("is_active",!0);if((f||[]).some(L=>!s.has(L.name))){l=!0;break}}else if(T==="formation"){const{FORMATION_LINKS:f}=await ni(async()=>{const{FORMATION_LINKS:L}=await import("./formation-links-D0diUT_D.js").then(j=>j.q);return{FORMATION_LINKS:L}},__vite__mapDeps([0,1]));if(Object.keys(f).some(L=>!p.has(L))){l=!0;break}}else{l=!0;break}l||(o[_.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${a.map(_=>{const g=_.cost===0||d>=_.cost,l=o[_.id]===!0;return`<div class="booster-card ${!g||l?"disabled":""}" data-booster="${_.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${_.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${_.img}" alt="${_.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${_.name}</div>
            <div class="desc">${_.sub}</div>
            <div class="cost">${_.costLabel}</div>
            ${g?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${l?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(_=>{_.addEventListener("click",async()=>{const g=a.find(l=>l.id===_.dataset.booster);if(g){_.style.opacity="0.5",_.style.pointerEvents="none";try{await ao(g,{state:t,toast:n,navigate:i,container:e})}catch(l){n(l.message,"error"),_.style.opacity="",_.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(_=>{_.addEventListener("click",g=>{g.stopPropagation();const l=a.find(T=>T.id===_.dataset.boosterId);po(l)})})}async function ao(e,{state:t,toast:i,navigate:n,container:d}){var v,m;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await fo();const{data:a}=await S.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((a||[]).filter(y=>y.card_type==="player").map(y=>y.player_id)),c=new Set((a||[]).filter(y=>y.card_type==="formation").map(y=>y.formation));let p=[],s=null;try{if((v=e.rates)!=null&&v.length)p=await vi(t.profile,e);else{const y=e.type||"player";y==="player"?p=await dn(t.profile,e.cardCount,e.cost):y==="game_changer"?p=await ln(t.profile,e.cardCount,e.cost):y==="formation"?p=await cn(t.profile,e.cost):p=await vi(t.profile,e)}}catch(y){s=y.message||String(y),console.error("[Booster] Erreur:",y)}if(p!=null&&p.length&&e._boosterId&&await to(t.user.id,e._boosterId),!(p!=null&&p.length)){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",y.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(y),(m=y.querySelector("#anim-close-err"))==null||m.addEventListener("click",()=>y.remove());return}p.forEach(y=>{y.card_type==="player"&&y.player?y.isDuplicate=r.has(y.player.id):y.card_type==="formation"&&(y.isDuplicate=c.has(y.formation))});const{data:o}=await S.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),pn(p,e,n)}function so(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function bt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function lo(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>bt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>bt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&bt(n)>=6),i.length||(i=e.filter(n=>bt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&bt(n)>=1&&bt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function vi(e,t){if(t.cost>0){const{error:m}=await S.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(m)throw m}const i=t.allow_duplicates!==!1;let n=[];const{data:d,error:a}=await S.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(a){const{data:m}=await S.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=m||[]}else n=d||[];const r=new Set(n.filter(m=>m.card_type==="player").map(m=>m.player_id)),c=new Set(n.filter(m=>m.card_type==="formation").map(m=>m.formation)),p=new Set(n.filter(m=>m.card_type==="game_changer").map(m=>m.gc_type)),s=new Set(n.filter(m=>m.card_type==="stadium").map(m=>m.stadium_id).filter(Boolean)),o=new Set,v=[];for(let m=0;m<(t.cardCount||5);m++){const y=io(t.rates);if(y){if(y.card_type==="player"){const _=q=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[q]||q,g=y.rarity?_(y.rarity):null;let l=S.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);g&&(l=l.eq("rarity",g));const{data:T}=await l;let f=T||[];if((y.note_min||y.note_max)&&(f=f.filter(q=>{const N=Math.max(Number(q.note_g)||0,Number(q.note_d)||0,Number(q.note_m)||0,Number(q.note_a)||0);return(!y.note_min||N>=y.note_min)&&(!y.note_max||N<=y.note_max)})),f.length||(y.note_min||y.note_max?(f=T||[],console.warn("[Booster] Aucun joueur avec note",y.note_min,"-",y.note_max,"— fallback rareté uniquement")):f=T||[]),!f.length)continue;let L=f.filter(q=>!o.has(q.id));if(i)L.length||(L=f);else if(L=L.filter(q=>!r.has(q.id)),!L.length)continue;const j=L[Math.floor(Math.random()*L.length)];o.add(j.id);const F=r.has(j.id),{data:G}=await S.from("cards").insert({owner_id:e.id,player_id:j.id,card_type:"player"}).select().single();G&&(v.push({...G,player:j,isDuplicate:F}),S.rpc("record_transfer",{p_card_id:G.id,p_player_id:j.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(y.card_type==="game_changer"){const{data:_}=await S.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),g=_!=null&&_.length?_:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],l=i?g:g.filter(j=>!p.has(j.name));if(!i&&!l.length)continue;const f=l[Math.floor(Math.random()*l.length)].name,{data:L}=await S.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:f}).select().single();L&&v.push(L)}else if(y.card_type==="formation"){const _=an(),g=i?_:_.filter(L=>!c.has(L));if(!i&&!g.length)continue;const l=g[Math.floor(Math.random()*g.length)],T=c.has(l),{data:f}=await S.from("cards").insert({owner_id:e.id,card_type:"formation",formation:l}).select();f!=null&&f[0]&&v.push({...f[0],isDuplicate:T})}else if(y.card_type==="stadium"){const{data:_,error:g}=await S.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(g){console.error("[Booster] stadium_definitions:",g.message);continue}if(!(_!=null&&_.length)){console.warn("[Booster] Aucun stade en DB");continue}const l=i?_:_.filter(j=>!s.has(j.id));if(!i&&!l.length)continue;const T=l[Math.floor(Math.random()*l.length)],{data:f,error:L}=await S.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:T.id}).select("id,card_type,stadium_id").single();if(L){console.error("[Booster] insert stadium card:",L.message);continue}f&&v.push({...f,rarity:"normal",_stadiumDef:T})}}}return v}async function dn(e,t,i){if(i>0){const{error:s}=await S.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s}const{data:n}=await S.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(s=>s.job==="GK"),a=n.filter(s=>s.job!=="GK"),r=!e.first_booster_opened&&d.length>0,c=[];for(let s=0;s<t;s++){const o=s===0&&r?d:s===0?a:n,v=so(),m=lo(o,v);m&&c.push(m)}r&&await S.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:p}=await S.from("cards").insert(c.map(s=>({owner_id:e.id,player_id:s.id,card_type:"player"}))).select();return(p||[]).forEach((s,o)=>{S.rpc("record_transfer",{p_card_id:s.id,p_player_id:c[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),c.map((s,o)=>({...p[o],player:s}))}async function ln(e,t,i){const{error:n}=await S.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await S.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),a=d!=null&&d.length?d:Object.keys(hi).map(o=>({name:o,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const o=a[Math.floor(Math.random()*a.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:c,error:p}=await S.from("cards").insert(r).select();return p&&console.error("[Booster GC] Erreur insert:",p.message,p),(c||[]).map(o=>{const v=d==null?void 0:d.find(m=>m.name===o.gc_type||m.id===o.gc_definition_id);return{...o,_gcDef:v||null}})}async function cn(e,t){const{error:i}=await S.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await S.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),d=new Set((n||[]).map(o=>o.formation)),a=an(),r=a[Math.floor(Math.random()*a.length)],c=d.has(r),{data:p,error:s}=await S.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(p||[]).map(o=>({...o,isDuplicate:c}))}function pn(e,t,i,n=null){var le,te;if(!e||e.length===0){const H=document.createElement("div");H.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",H.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(H),(le=H.querySelector("#anim-close-err"))==null||le.addEventListener("click",()=>H.remove());return}e=[...e].sort((H,D)=>{const ne=H.player?bt(H.player):-1;return(D.player?bt(D.player):-1)-ne});const d=document.createElement("div");d.id="booster-anim-overlay",d.innerHTML=`
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
  `,document.body.appendChild(d);let a=!1;const r=document.getElementById("pack-cut-zone"),c=document.getElementById("pack-blade");let p=!1;const s=H=>H.touches&&H.touches[0]?H.touches[0].clientX:H.clientX;function o(H){a||(p=!0,c.style.opacity="1",v(H))}function v(H){if(!p||a)return;const D=r.getBoundingClientRect(),ne=s(H)-D.left,xe=Math.max(0,Math.min(1,ne/D.width));c.style.width=xe*D.width+"px",xe>=.82&&y()}function m(){a||(p=!1,c.style.transition="width .2s ease, opacity .2s ease",c.style.width="0",c.style.opacity="0",setTimeout(()=>{a||(c.style.transition="")},220))}function y(){var D;if(a)return;a=!0,p=!1,c.style.width="100%",c.style.opacity="1",(D=document.getElementById("cut-flash"))==null||D.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const H=document.getElementById("cut-hint");H&&(H.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{c.style.opacity="0",document.getElementById("pack-phase").style.display="none",T(0)},620)}r.addEventListener("pointerdown",o),window.addEventListener("pointermove",v),window.addEventListener("pointerup",m),r.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",v,{passive:!0}),window.addEventListener("touchend",m);let _=0,g=!1;const l=new Set;function T(H){_=H,document.getElementById("reveal-phase").style.display="flex",f(),L(H,0),N()}function f(){const H=document.getElementById("card-dots");H&&(H.innerHTML=e.map((D,ne)=>`<div class="card-dot" data-i="${ne}" style="width:8px;height:8px;border-radius:50%;background:${ne===_?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),H.querySelectorAll(".card-dot").forEach(D=>D.addEventListener("click",()=>F(parseInt(D.dataset.i)))))}function L(H,D){var ge,O;const ne=e[H],xe=document.getElementById("card-counter"),_e=document.getElementById("card-track");xe&&(xe.textContent=`Carte ${H+1} / ${e.length}`);const ve=document.getElementById("reveal-btns");ve&&(ve.style.display=H===e.length-1?"flex":"none");const we=ne.card_type==="player"&&((ge=ne.player)==null?void 0:ge.rarity)==="legende",je=!l.has(H);l.add(H);let fe=0;if(ne.card_type==="player"&&ne.player){const X=ne.player,ae=X.job||"ATT";fe=Number(ae==="GK"?X.note_g:ae==="DEF"?X.note_d:ae==="MIL"?X.note_m:X.note_a)||0}const me=X=>{_e.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${we?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${co(ne)}</div>
          ${ne.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const ae=document.getElementById("current-card-wrap");D!==0?(ae.style.transition="none",ae.style.transform=`translateX(${D>0?100:-100}%)`,requestAnimationFrame(()=>{ae.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ae.style.transform="translateX(0)"})):ae.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),X||we?Z():re(),f()};je&&(((O=ne.player)==null?void 0:O.rarity)==="legende"||fe>=8)&&ne.card_type==="player"&&ne.player?j(ne,()=>me(!0)):me(!1)}function j(H,D){var ze;g=!0;const ne=H.player,xe=`https://flagsapi.com/${ne.country_code}/flat/64.png`,_e=(ze=ne.clubs)==null?void 0:ze.logo_url,ve=ne.face?"/"+ne.face.replace(/^public\//,"").replace(/^\//,""):null,we=ne.job||"ATT",je=Number(we==="GK"?ne.note_g:we==="DEF"?ne.note_d:we==="MIL"?ne.note_m:ne.note_a)||0,fe=H.evolution_bonus||0,me=je+fe,ge=ne.rarity==="legende",O=me>=18,X=document.getElementById("walkout-overlay"),ae=document.getElementById("walkout-stage");if(!X||!ae){g=!1,D();return}let se=null;ge&&(se=new Audio("/sounds/Legendary.mp3"),se.volume=.8,se.play().catch(()=>{})),X.style.display="flex";const pe=()=>{const ke=ae.firstElementChild;ke&&(ke.classList.remove("wo-in"),ke.classList.add("wo-out"))},ee=1800,de=400;ae.innerHTML=`<img class="wo-in" src="${xe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(pe,ee),setTimeout(()=>{var ke;ae.innerHTML=_e?`<img class="wo-in" src="${_e}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ke=ne.clubs)==null?void 0:ke.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},ee+de),setTimeout(pe,ee*2+de),setTimeout(()=>{ae.innerHTML=ve?`<img class="wo-in" src="${ve}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(ee+de)*2),setTimeout(pe,(ee+de)*2+ee);const Te=O?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[we]||"#fff";setTimeout(()=>{ae.innerHTML=`<div class="wo-in" style="
        font-size:${O?"120px":"90px"};font-weight:900;color:${Te};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${Te}, 0 0 60px ${Te};
        ${O?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${me}
      </div>`,O&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(ee+de)*3),setTimeout(pe,(ee+de)*3+ee),setTimeout(()=>{X.style.display="none",ae.innerHTML="",g=!1,se&&!ge&&se.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),D()},(ee+de)*4)}function F(H){if(g||H<0||H>=e.length||H===_)return;const D=H>_?1:-1;_=H,L(H,D)}function G(){F(_+1)}function q(){F(_-1)}function N(){const H=document.getElementById("card-viewport");if(!H||H._swipeBound)return;H._swipeBound=!0;let D=0,ne=0,xe=0,_e=!1;const ve=ge=>ge.touches?ge.touches[0].clientX:ge.clientX,we=ge=>ge.touches?ge.touches[0].clientY:ge.clientY,je=ge=>{_e=!0,D=ve(ge),ne=we(ge),xe=0},fe=ge=>{if(!_e)return;xe=ve(ge)-D;const O=we(ge)-ne;if(Math.abs(xe)<Math.abs(O))return;const X=document.getElementById("current-card-wrap");X&&(X.style.transition="none",X.style.transform=`translateX(${xe*.6}px) rotate(${xe*.02}deg)`)},me=()=>{if(!_e)return;_e=!1;const ge=document.getElementById("current-card-wrap"),O=55;xe<=-O&&_<e.length-1?G():xe>=O&&_>0?q():ge&&(ge.style.transition="transform .2s ease",ge.style.transform="translateX(0)")};H.addEventListener("pointerdown",je),H.addEventListener("pointermove",fe),H.addEventListener("pointerup",me),H.addEventListener("pointercancel",me),H.addEventListener("touchstart",je,{passive:!0}),H.addEventListener("touchmove",fe,{passive:!0}),H.addEventListener("touchend",me),H.addEventListener("click",ge=>{if(Math.abs(xe)>8)return;const O=H.getBoundingClientRect();ge.clientX-O.left>O.width/2?G():q()})}let K=null;function Z(){const H=document.getElementById("fireworks-canvas");if(!H)return;H.width=window.innerWidth,H.height=window.innerHeight;const D=H.getContext("2d"),ne=[];function xe(){const ve=Math.random()*H.width,we=Math.random()*H.height*.6,je=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],fe=je[Math.floor(Math.random()*je.length)];for(let me=0;me<60;me++){const ge=Math.PI*2/60*me,O=2+Math.random()*5;ne.push({x:ve,y:we,vx:Math.cos(ge)*O,vy:Math.sin(ge)*O,alpha:1,color:fe,size:2+Math.random()*3})}}xe(),K=setInterval(xe,600);function _e(){if(document.getElementById("fireworks-canvas")){D.clearRect(0,0,H.width,H.height);for(let ve=ne.length-1;ve>=0;ve--){const we=ne[ve];if(we.x+=we.vx,we.y+=we.vy+.08,we.vy*=.98,we.alpha-=.018,we.alpha<=0){ne.splice(ve,1);continue}D.globalAlpha=we.alpha,D.fillStyle=we.color,D.beginPath(),D.arc(we.x,we.y,we.size,0,Math.PI*2),D.fill()}D.globalAlpha=1,(K!==null||ne.length>0)&&requestAnimationFrame(_e)}}_e()}function re(){K!==null&&(clearInterval(K),K=null);const H=document.getElementById("fireworks-canvas");H&&H.getContext("2d").clearRect(0,0,H.width,H.height)}if(n){const H=document.getElementById("reveal-btns");H&&(H.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(te=document.getElementById("reveal-next"))==null||te.addEventListener("click",()=>{re(),d.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{re(),d.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{re(),d.remove(),i("boosters")})}function co(e){var t,i,n,d;if(e.card_type==="player"&&e.player)return oo(e);if(e.card_type==="game_changer"){const a=e._gcDef,r=(a==null?void 0:a.gc_type)==="ultra_game_changer",c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},p={purple:"#b06ce0",light_blue:"#00d4ef"},s=c[a==null?void 0:a.color]||c.purple,o=p[a==null?void 0:a.color]||p.purple,v=(a==null?void 0:a.name)||e.gc_type||"Game Changer",m=(a==null?void 0:a.effect)||((t=hi[e.gc_type])==null?void 0:t.desc)||"",y=a!=null&&a.image_url?`/icons/${a.image_url}`:null,_=((i=hi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${s};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${v.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${v}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${y?`<img src="${y}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${_}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${m.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const a=e._stadiumDef,r=(a==null?void 0:a.name)||"Stade",c=((n=a==null?void 0:a.club)==null?void 0:n.encoded_name)||(a==null?void 0:a.country_code)||"—",p=a!=null&&a.image_url?`/icons/${a.image_url}`:((d=a==null?void 0:a.club)==null?void 0:d.logo_url)||(a!=null&&a.country_code?`https://flagsapi.com/${a.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${r.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${r}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${p?`<img src="${p}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function po(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},a={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}uo()}function uo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function fo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const d=document.getElementById("mw-ad-cd");d&&(d.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function go(e,{state:t,navigate:i,toast:n,refreshProfile:d}){var m,y;const{data:a}=await S.from("users").select("*").eq("id",t.user.id).single();a&&(t.profile=a);let r=Array.isArray((m=t.profile)==null?void 0:m.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await S.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let c=null;try{const g=(await rn()).find(l=>(l.name||"").toLowerCase().includes("new player"));g&&(c=sn(g))}catch(_){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',_)}const p=r.length;let s=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await S.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function v(){var f;if(s>=p||!r.length){await S.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),d&&await d(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const _=r[0],{data:g}=await S.from("users").select("*").eq("id",t.user.id).single();g&&(t.profile=g);let l=[];try{if(_.type==="formation")l=await cn(t.profile,0);else if(_.type==="game_changer")l=await ln(t.profile,_.count||3,0);else if(c&&((f=c.rates)!=null&&f.length)){const L={...c,cost:0,cardCount:_.count||c.cardCount||5};l=await vi(t.profile,L),_.guaranteeGK&&!t.profile.first_booster_opened&&(l.some(F=>F.player&&F.player.job==="GK")||await mo(t.profile,l),await S.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else l=await dn(t.profile,_.count||5,0)}catch(L){n(L.message||"Erreur ouverture booster","error");return}r.shift(),s++,await o();const T=_.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:_.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${s}/${p})`,img:(c==null?void 0:c.img)||"/icons/booster-players.png"};pn(l,T,i,()=>{v()})}(y=document.getElementById("onboard-start"))==null||y.addEventListener("click",()=>v())}async function mo(e,t){try{const{data:i}=await S.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],d=t.findIndex(r=>r.player);if(d===-1)return;const a=t[d];await S.from("cards").update({player_id:n.id}).eq("id",a.id),t[d]={...a,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const jt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Zt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Tt(e,t,i,n,d){var a;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(a=document.getElementById("msg-btn"))==null||a.addEventListener("click",d)}function it(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",d=e.face.replace(/^public\//,"").replace(/^\//,"");return n+d}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function wi(e,t){var a,r;const i=e.player,n=e.evolution_bonus||0,d=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&d>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&d>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&d>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&d>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((a=i.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function St(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(d=>{Array.isArray(d)&&d.forEach(a=>{const r=i&&String(a.club_id)===String(i),c=n&&String(a.country_code)===String(n);(r||c)&&(a.stadiumBonus=!0)})}),e}function Ct(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(d=>{if(!d)return;const a=i&&String(d.club_id)===String(i),r=n&&String(d.country_code)===String(n);(a||r)&&(d.stadiumBonus=!0)}),e}function dt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function oi(){const e=Math.random()*100;return e<10?3:e<30?2:1}function wt(e,t){const i=jt[t]||jt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const c=e.filter(s=>s.position&&s.position.replace(/\d+$/,"")===r).sort((s,o)=>parseInt(s.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(s=>({...s,_line:r})),p=dt(c.length);c.forEach((s,o)=>{s._col=p[o]}),n[r]=c}return n}const a=[...e];for(const r of["GK","DEF","MIL","ATT"]){const c=[];for(let s=0;s<i[r];s++){let o=a.findIndex(v=>v.job===r);if(o===-1&&(o=a.findIndex(v=>v.job2===r)),o===-1&&(o=0),a[o]){const v={...a[o],_line:r};c.push(v),a.splice(o,1)}}const p=dt(c.length);c.forEach((s,o)=>{s._col=p[o]}),n[r]=c}return n}function Ze(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ue(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ri(e,t,i){const d=new Set,a=t.filter(o=>{const v=o.gc_type||o.id;return d.has(v)?!1:(d.add(v),!0)});let r=[];function c(o,v){const m=o._gcDef,y={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},_={purple:"#9b59b6",light_blue:"#00bcd4"},g=y[m==null?void 0:m.color]||y.purple,l=_[m==null?void 0:m.color]||_.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${v?"#FFD700":l};background:${g};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${v?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${v?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((m==null?void 0:m.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(m==null?void 0:m.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${m!=null&&m.image_url?`<img src="/icons/${m.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((m==null?void 0:m.effect)||"").slice(0,50)}</span>
      </div>
      ${v?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const p=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function s(){var v,m,y;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=r.length>0;e.innerHTML=`
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
        ${a.map(_=>{const g=r.find(l=>l.gc_type===_.gc_type);return c(_,!!g)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${o?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${o?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${o?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${o?"pointer":"default"};box-shadow:${o?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(_=>{_.addEventListener("click",()=>{const g=_.dataset.id,l=a.find(f=>f.id===g);if(!l)return;const T=r.findIndex(f=>f.gc_type===l.gc_type);T>-1?r.splice(T,1):r.length<3&&r.push(l),s()})}),(v=e.querySelector("#gc-launch"))==null||v.addEventListener("click",()=>{o&&p(r)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>p([])),(y=e.querySelector("#gc-reset"))==null||y.addEventListener("click",()=>{r.length&&(r=[],s())})}s()}function xo(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function bo(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await S.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!a||a.length===0){Tt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const r=a.map(m=>m.id),{data:c}=await S.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),p=[...new Set((c||[]).filter(m=>{var y,_;return((y=m.card)==null?void 0:y.card_type)==="stadium"&&((_=m.card)==null?void 0:_.stadium_id)}).map(m=>m.card.stadium_id))],s={};if(p.length){const{data:m}=await S.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",p);(m||[]).forEach(y=>{s[y.id]=y}),(c||[]).forEach(y=>{var _,g;((_=y.card)==null?void 0:_.card_type)==="stadium"&&((g=y.card)!=null&&g.stadium_id)&&(y.card._stadiumDef=s[y.card.stadium_id]||null)})}let o=0;function v(){var F,G,q,N,K,Z,re;const m=a[o],y=(c||[]).filter(le=>le.deck_id===m.id),_=y.filter(le=>{var te;return le.is_starter&&((te=le.card)==null?void 0:te.player)}).map(le=>wi(le.card,le.position)),g=y.find(le=>{var te;return((te=le.card)==null?void 0:te.card_type)==="formation"}),l=m.formation||((F=g==null?void 0:g.card)==null?void 0:F.formation)||"4-4-2";let T=_.length>=11?wt(_,l):null,f=((G=m.stadium_card)==null?void 0:G.stadium_def)||null;f&&T&&(T=St(T,f));const L=_.length>=11;Ze(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${xo(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===0?"0.1":"0.3"});color:${o===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${m.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${l} · ${_.length}/11 ${m.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===a.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===a.length-1?"0.1":"0.3"});color:${o===a.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===a.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${f?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${f.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((q=f.club)==null?void 0:q.encoded_name)||f.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${T?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${pt(T,l,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${_.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${a.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${a.map((le,te)=>`<div style="width:7px;height:7px;border-radius:50%;background:${te===o?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons TOUJOURS VISIBLES -->
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${L?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${L?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${L?"pointer":"default"}">
          ${L?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>
    </div>`,function(){const te=e.querySelector(".deck-preview-wrap svg");te&&(te.removeAttribute("width"),te.removeAttribute("height"),te.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",te.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(N=document.getElementById("prev-deck"))==null||N.addEventListener("click",()=>{o>0&&(o--,v())}),(K=document.getElementById("next-deck"))==null||K.addEventListener("click",()=>{o<a.length-1&&(o++,v())}),(Z=document.getElementById("validate-deck"))==null||Z.addEventListener("click",()=>{if(!L)return;const le=t.state.params||{};t.navigate("match",{...le,matchMode:le.matchMode||i,deckId:m.id})}),(re=document.getElementById("cancel-deck-select"))==null||re.addEventListener("click",()=>{Ue(e),d("home")});const j=document.getElementById("deck-swipe-zone");if(j){let le=0,te=0;j.addEventListener("touchstart",H=>{le=H.touches[0].clientX,te=H.touches[0].clientY},{passive:!0}),j.addEventListener("touchend",H=>{const D=H.changedTouches[0].clientX-le,ne=H.changedTouches[0].clientY-te;Math.abs(D)<40||Math.abs(D)<Math.abs(ne)||(D<0&&o<a.length-1?(o++,v()):D>0&&o>0&&(o--,v()))},{passive:!0})}}v()}function Qe(e,t=44,i=58,n=null){return ot(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function tt(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((a,r)=>{const c=a._line||a.job||"MIL";if(d+=ot(a,{width:40,role:c,extraNote:a.boost||0}),r<n.length-1){const p=rt(a,n[r+1]);d+=`<div style="width:7px;height:3px;background:${p==="#ff3333"||p==="#cc2222"?"rgba(255,255,255,0.12)":p};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ct(e,t,i,n,d=310,a=310,r=[]){const c=Ot[t]||{},p=Vi(t)||Ei[t]||[],s={},o=["ATT","MIL","DEF","GK"];for(const l of o)(e[l]||[]).forEach((f,L)=>{s[`${l}${L+1}`]=f});function v(l){const T=c[l];return T?{x:T.x*d,y:T.y*a}:null}let m="";for(const[l,T]of p){const f=v(l),L=v(T);if(!f||!L)continue;const j=s[l],F=s[T],G=rt(j,F);G==="#00ff88"||G==="#FFD700"?(m+=`<line x1="${f.x.toFixed(1)}" y1="${f.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${G}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${f.x.toFixed(1)}" y1="${f.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${G}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${f.x.toFixed(1)}" y1="${f.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${G}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const y=52,_=Math.round(y*657/507);for(const[l,T]of Object.entries(s)){const f=v(l);if(!f||!T)continue;const L=l.replace(/[0-9]/g,""),j=r.includes(T.cardId),F=i==="attack"&&(["MIL","ATT"].includes(L)||j)&&!T.used||i==="defense"&&["GK","DEF","MIL"].includes(L)&&!T.used,G=n.includes(T.cardId);let q=T.boost||0;T.stadiumBonus&&(i==="attack"&&(L==="ATT"||L==="MIL")||i==="defense"&&(L==="GK"||L==="DEF"||L==="MIL")?q+=10:i||(q+=10));const N=Math.round(f.x-y/2),K=Math.round(f.y-_/2);if(T.used){m+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${N}" y="${K}" width="${y}" height="${_}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${T.cardId}" data-role="${L}" style="cursor:pointer"/>`;continue}const Z=ot({...T,_evolution_bonus:0},{width:y,showStad:!0,stadDef:null,role:L,extraNote:q}),re=G?"outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;opacity:0.75;":"";m+=`<foreignObject x="${N}" y="${K-26}" width="${y+4}" height="${_+56}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="${re}position:relative">
        ${Z}
      </div>
    </foreignObject>`,F&&(m+=`<rect x="${N}" y="${K}" width="${y}" height="${_}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${G?"selected":""}" data-card-id="${T.cardId}" data-role="${L}" style="cursor:pointer"/>`)}const g=80;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-g} ${-g} ${d+g*2} ${a+g*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
    ${m}
  </svg>`}function pt(e,t,i,n,d=300,a=300,r=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${ct(e,t,i,n,d,a,r)}
  </div>`}function st(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function ai(e,t,i,n){var G;const{state:d,navigate:a,toast:r}=t;Ze(e);const c=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!c.deckId)return bo(e,t,i);const p=c.deckId;let s,o,v,m;try{const q=await Promise.all([S.from("decks").select("formation,name,stadium_card_id").eq("id",p).single(),S.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",p).order("slot_order")]);s=q[0].data,v=q[0].error,o=q[1].data,m=q[1].error}catch(q){console.error("[Match] Exception chargement deck:",q),Tt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>a("home"));return}if(v||m){console.error("[Match] Erreur Supabase:",v||m),Tt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>a("home"));return}const y=(o||[]).filter(q=>{var N;return q.is_starter&&((N=q.card)==null?void 0:N.player)}).map(q=>wi(q.card,q.position)),_=(o||[]).filter(q=>{var N;return!q.is_starter&&((N=q.card)==null?void 0:N.player)}).map(q=>wi(q.card,q.position));if(y.length<11){Tt(e,"⚠️",`Deck incomplet (${y.length}/11).`,"Compléter",()=>a("decks"));return}const g=(o||[]).find(q=>{var N;return((N=q.card)==null?void 0:N.card_type)==="formation"}),l=(s==null?void 0:s.formation)||((G=g==null?void 0:g.card)==null?void 0:G.formation)||"4-4-2",{data:T,error:f}=await S.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:L}=await S.from("gc_definitions").select("*").eq("is_active",!0),j=(T||[]).map(q=>({...q,_gcDef:(L==null?void 0:L.find(N=>N.name===q.gc_type||N.id===q.gc_definition_id))||null}));let F=null;if(s!=null&&s.stadium_card_id){const{data:q}=await S.from("cards").select("stadium_id").eq("id",s.stadium_card_id).single();if(q!=null&&q.stadium_id){const{data:N}=await S.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",q.stadium_id).single();F=N||null}}n({deckId:p,formation:l,starters:y,subsRaw:_,gcCardsEnriched:j,gcDefs:L||[],stadiumDef:F})}async function yo(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",a=d.replace("vs_ai_",""),r=d;await ai(e,t,d,async({deckId:c,formation:p,starters:s,subsRaw:o,gcCardsEnriched:v,gcDefs:m,stadiumDef:y})=>{try{let _=wt(s,p);y&&(_=St(_,y),Ct(o,y));const g=await ho(p,a),l=g.lines||g,T=async f=>{try{const{data:L,error:j}=await S.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:c,status:"in_progress"}).select().single();if(j){console.error("[MatchIA] Erreur création match:",j),Tt(e,"⚠️","Impossible de créer le match ("+j.message+").","Retour",()=>t.navigate("home"));return}const F=g.stadiumDef||null;F&&l&&(St(l,F),Ct(g.subs||[],F));const G={gcDefs:m||[],matchId:L==null?void 0:L.id,mode:r,difficulty:a,formation:p,homeTeam:_,aiTeam:l,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),aiSubs:g.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((g.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:g.gcCards||[],aiUsedGc:[],aiStadiumDef:F,homeScore:0,aiScore:0,gcCards:f,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};wo(e,G,t)}catch(L){console.error("[MatchIA] Exception launchMatch:",L),Tt(e,"⚠️","Erreur au lancement du match : "+L.message,"Retour",()=>t.navigate("home"))}};if(!v.length){T([]);return}ri(e,v,T)}catch(_){console.error("[MatchIA] Exception setup:",_),Tt(e,"⚠️","Erreur de préparation du match : "+_.message,"Retour",()=>t.navigate("home"))}})}async function ho(e,t){var l;const{data:i}=await S.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:vo(e),subs:[],gcCards:[],stadiumDef:null};const n=jt[e]||jt["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},a=new Set;function r(T,f,L){var j,F;return a.add(T.id),{cardId:"ai-"+T.id+"-"+L,id:T.id,firstname:T.firstname,name:T.surname_real,country_code:T.country_code,club_id:T.club_id,job:T.job,job2:T.job2,note_g:Number(T.note_g)||0,note_d:Number(T.note_d)||0,note_m:Number(T.note_m)||0,note_a:Number(T.note_a)||0,rarity:T.rarity,skin:T.skin,hair:T.hair,hair_length:T.hair_length,clubName:((j=T.clubs)==null?void 0:j.encoded_name)||null,clubLogo:((F=T.clubs)==null?void 0:F.logo_url)||null,boost:0,used:!1,_line:f}}for(const T of["GK","DEF","MIL","ATT"]){const f=i.filter(q=>q.job===T&&!a.has(q.id)),L=i.filter(q=>q.job!==T&&!a.has(q.id)),j=[...f,...L],F=[];for(let q=0;q<n[T];q++){const N=j[q];N&&F.push(r(N,T,q))}const G=dt(F.length);F.forEach((q,N)=>{q._col=G[N]}),d[T]=F}const p=i.filter(T=>!a.has(T.id)).slice(0,5).map((T,f)=>r(T,T.job,100+f)),v=Object.keys(Re).sort(()=>Math.random()-.5).slice(0,3).map((T,f)=>{var L,j;return{id:"ai-gc-"+f,gc_type:T,name:((L=Re[T])==null?void 0:L.name)||T,icon:((j=Re[T])==null?void 0:j.icon)||"⚡"}}),m=Object.values(d).flat(),y={};m.forEach(T=>{T.club_id&&(y[T.club_id]=(y[T.club_id]||0)+1)});const _=(l=Object.entries(y).sort((T,f)=>f[1]-T[1])[0])==null?void 0:l[0];let g=null;if(_){const{data:T}=await S.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",_).single();T&&(g={club_id:T.id,country_code:null,name:T.encoded_name+" Stadium",club:{encoded_name:T.encoded_name,logo_url:T.logo_url}})}return{lines:d,subs:p,gcCards:v,stadiumDef:g}}function vo(e){const t=jt[e]||jt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const a of["GK","DEF","MIL","ATT"]){const r=[];for(let p=0;p<t[a];p++){const s=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:a,job2:null,note_g:a==="GK"?s:2,note_d:a==="DEF"?s:2,note_m:a==="MIL"?s:2,note_a:a==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:a}),d++}const c=dt(r.length);r.forEach((p,s)=>{p._col=c[s]}),i[a]=r}return i}function wo(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:min(90vw,600px)">${ct(t.aiTeam,t.formation,null,[],window.innerWidth>=900?500:300,window.innerWidth>=900?620:380)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>_o(e,t,i),5e3)}function ht(e){var n,d;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+(e.stadiumBonus?10:0),note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((n=e.clubs)==null?void 0:n.encoded_name)||null,clubLogo:e.clubLogo||((d=e.clubs)==null?void 0:d.logo_url)||null,face:e.face||null,portrait:it(e)}}function _o(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[],a=t.stadiumDef||null,r=t.aiStadiumDef||null;function c(f,L){const j=We(f,"MIL"),F=f.stadiumBonus||L&&(L.club_id&&String(f.club_id)===String(L.club_id)||L.country_code&&f.country_code===L.country_code)?10:0;return j+F}function p(f,L){return f.reduce((j,F)=>j+c(F,L),0)}function s(f){let L=0;for(let j=0;j<f.length-1;j++){const F=rt(f[j],f[j+1]);F==="#00ff88"?L+=2:F==="#FFD700"&&(L+=1)}return L}const o=p(n,a)+s(n),v=p(d,r)+s(d),m=o>=v;function y(f,L,j,F,G){return`<div id="duel-row-${F}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${L}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${f.map((q,N)=>{const K=N<f.length-1?rt(q,f[N+1]):null,Z=!K||K==="#ff3333"||K==="#cc2222",re=K==="#00ff88"?"+2":K==="#FFD700"?"+1":"";return c(q,G),q.stadiumBonus||G&&(G.club_id&&String(q.club_id)===String(G.club_id)||G.country_code&&(q.country_code,G.country_code)),`
          <div class="duel-card duel-card-${F}" data-idx="${N}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${renderPlayerCard({...q,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:G,role:"MIL",extraNote:q.boost||0})}
          </div>
          ${N<f.length-1?`<div class="duel-link duel-link-${F}" data-idx="${N}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Z?"rgba(255,255,255,0.12)":K};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Z?"none":`0 0 8px ${K}`}">
            ${re?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${K}">${re}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${F}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${p(f,G)} + ${s(f)} liens = <b style="color:#fff">${p(f,G)+s(f)}</b>
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

    ${y(n,t.clubName,"#D4A017","home",a)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${y(d,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const _=()=>{const f=(L,j)=>e.querySelectorAll(L).forEach((F,G)=>{setTimeout(()=>{F.style.opacity="1",F.style.transform="translateY(0) scale(1)"},j+G*90)});f(".duel-card-home",150),f(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((L,j)=>{setTimeout(()=>{L.style.opacity="1"},j*70)}),900),setTimeout(()=>{const L=e.querySelector("#vs-label");L&&(L.style.opacity="1",L.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(j=>j.style.opacity="1")},1250),setTimeout(()=>{g("score-home",o,800),g("score-ai",v,800)},1500)};function g(f,L,j){const F=document.getElementById(f);if(!F)return;const G=performance.now(),q=N=>{const K=Math.min(1,(N-G)/j);F.textContent=Math.round(L*(1-Math.pow(1-K,3))),K<1?requestAnimationFrame(q):F.textContent=L};requestAnimationFrame(q)}requestAnimationFrame(_),t.attacker=m?"home":"ai";const l=m?oi():null;m&&(t.boostCard={value:l}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(f=>ht(f)),aiPlayers:d.map(f=>ht(f)),homeTotal:o,aiTotal:v,text:`Duel milieu : ${t.clubName} ${o} – ${v} IA → ${m?t.clubName+" attaque":"IA attaque"}`});const T=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ye(e,t,i),t.attacker==="ai"&&setTimeout(()=>ei(e,t,i),800)};setTimeout(()=>{const f=document.getElementById("score-home"),L=document.getElementById("score-ai"),j=document.getElementById(m?"duel-row-home":"duel-row-ai"),F=document.getElementById(m?"duel-row-ai":"duel-row-home"),G=m?f:L,q=m?L:f;G&&(G.style.fontSize="80px",G.style.color=m?"#FFD700":"#ff6b6b",G.style.animation="duelPulse .5s ease"+(m?", duelGlow 1.5s ease infinite .5s":"")),q&&(q.style.opacity="0.25"),setTimeout(()=>{j&&(j.style.transformOrigin="center",j.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",j.style.zIndex="5"),setTimeout(()=>{var K;const N=document.getElementById("duel-shock");if(N){const Z=(K=F||j)==null?void 0:K.getBoundingClientRect(),re=e.querySelector(".match-screen").getBoundingClientRect();Z&&(N.style.top=Z.top-re.top+Z.height/2+"px"),N.style.animation="shockwave .5s ease-out forwards"}F&&(F.style.transformOrigin="center",F.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var K;const N=document.getElementById("duel-finale");N&&(N.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${m?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${m?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${l}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,N.style.transition="opacity .45s ease",N.style.opacity="1",N.style.pointerEvents="auto",(K=document.getElementById("start-match-btn"))==null||K.addEventListener("click",T))},600)},700)},2800)}function $o(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
    <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
      <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(e.title||"DUEL").toUpperCase()}</div>
      <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
        <!-- Joueurs domicile -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.homePlayers||[]).map(i=>st(i)).join("")}
        </div>
        <!-- Score -->
        <div style="text-align:center;padding:0 6px;flex-shrink:0">
          <div style="font-size:${t?20:14}px;font-weight:900;color:${t?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${e.homeTotal}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
          <div style="font-size:${t?14:20}px;font-weight:900;color:${t?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${e.aiTotal}</div>
        </div>
        <!-- Joueurs IA -->
        <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
          ${(e.aiPlayers||[]).map(i=>st(i)).join("")}
        </div>
      </div>
      ${e.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${e.homeScored?"⚽ BUT !":"⚽ BUT IA !"}</div>`:""}
    </div>`}if(e.type==="sub"){const t=e.subSide==="home";return`
    <div style="display:flex;align-items:center;gap:4px;${t?"flex-direction:row-reverse":""};background:rgba(255,255,255,0.04);border-radius:8px;padding:5px 8px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:9px;color:rgba(255,255,255,0.4);flex-shrink:0">${t?e.clubName||"Vous":"IA"}</div>
      ${st(e.outPlayer||{},!0)}
      <div style="font-size:16px;flex-shrink:0">🔄</div>
      ${st(e.inPlayer||{})}
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Ye(e,t,i){var G,q,N,K,Z,re,le,te,H;const n=t.selected.map(D=>D.cardId),d=t.usedSubIds||[],a=t.homeSubs.filter(D=>!d.includes(D.cardId)),c=Object.values(t.homeTeam).flat().filter(D=>D.used).length>0&&a.length>0&&t.subsUsed<t.maxSubs,p=!["GK","DEF","MIL","ATT"].some(D=>(t.aiTeam[D]||[]).some(ne=>!ne.used)),s=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(D=>!D.used),o=t.phase==="attack"&&p&&s.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(D=>!D.used).map(D=>D.cardId):[];t.log[t.log.length-1];const v=t.phase==="ai-attack"||t.phase==="ai-defense",m=t.phase==="attack",y=t.phase==="defense",_=t.phase==="finished",l=(t.homeSubs||[]).filter(D=>!(t.usedSubIds||[]).includes(D.cardId)).length>0&&t.subsUsed<t.maxSubs,T=m&&s.length===0&&!l,f=t.gcCards.filter(D=>!t.usedGc.includes(D.id)),L=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const ne=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${tt((ne.players||[]).map(xe=>({...xe,used:!1})),"#ff6b6b",ne.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const ne=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${tt((ne.players||[]).map(xe=>({...xe,used:!1})),"#00ff88",ne.total)}
          </div>`}const D=t.log[t.log.length-1];return D?'<div style="padding:2px 4px">'+$o(D)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const D=window.innerWidth>=700,ne=(O,X,ae)=>{var C,k;const se=(t.gcDefs||[]).find(u=>u.name===O.gc_type),pe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[se==null?void 0:se.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ee={purple:"#b06ce0",light_blue:"#00d4ef"}[se==null?void 0:se.color]||"#b06ce0",de=(se==null?void 0:se.name)||O.gc_type,Ae=(se==null?void 0:se.effect)||((C=Re[O.gc_type])==null?void 0:C.desc)||"",Te=se!=null&&se.image_url?`/icons/${se.image_url}`:null,ze=((k=Re[O.gc_type])==null?void 0:k.icon)||"⚡",ke=Math.round(ae*.22),Ce=Math.round(ae*.22),Fe=ae-ke-Ce,Se=de.length>12?7:9;return`<div class="gc-mini" data-gc-id="${O.id}" data-gc-type="${O.gc_type}"
          style="box-sizing:border-box;width:${X}px;height:${ae}px;border-radius:10px;border:2px solid ${ee};background:${pe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${ke}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Se}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${X-6}px">${de}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Fe}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Te?`<img src="${Te}" style="max-width:${X-10}px;max-height:${Fe-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Fe*.55)}px">${ze}</span>`}
          </div>
          <div style="height:${Ce}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ae.slice(0,38)}</span>
          </div>
        </div>`},xe=(O,X)=>{var ae;return`<div id="boost-card"
          style="box-sizing:border-box;width:${O}px;height:${X}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(X*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(X*.2)}px">⚡</div>
            <div style="font-size:${Math.round(X*.09)}px;color:#000;font-weight:900">+${(ae=t.boostCard)==null?void 0:ae.value}</div>
          </div>`},_e=(O,X)=>X?xe(130,175):ne(O,130,175),ve=(O,X)=>X?xe(68,95):ne(O,68,95),we=D?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=_?`<button id="btn-results" style="${we};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:v?`<div style="${we};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:T?`<button id="btn-pass" style="${we};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:m?`<button id="btn-action" style="${we};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:y?`<button id="btn-action" style="${we};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${we};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,fe=m||y?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${D?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${a.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':a.map(O=>`<div class="sub-btn-col" data-sub-id="${O.cardId}" style="cursor:pointer;flex-shrink:0">${Qe(O,76,100)}</div>`).join("")}
      </div>`,ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${pt(t.homeTeam,t.formation,t.phase,n,window.innerWidth>=900?500:300,window.innerWidth>=900?620:380,o)}
        </div>
      </div>`;return D?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${me}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ge}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${fe}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${f.map(O=>_e(O,!1)).join("")}
            ${L?_e(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(t.homeTeam,t.formation,t.phase,n,window.innerWidth>=900?500:300,window.innerWidth>=900?620:380,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${f.map(O=>ve(O,!1)).join("")}
            ${L?ve(null,!0):""}
            <div id="sub-btn-main" style="cursor:${c?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${c?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${c?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${c?1:.4}">
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
          <div>${je}${fe}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(D=>{var ne,xe,_e;if(D.type==="duel"){const ve=D.isGoal,we=D.homeScored?"#FFD700":ve?"#ff6b6b":"rgba(255,255,255,0.3)",je=D.homeScored?"⚽ BUT !":ve?"⚽ BUT IA !":(ne=D.homePlayers)!=null&&ne.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${ve?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${we};margin-bottom:4px">
                <div style="font-size:9px;color:${we};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${je}</div>
                ${(xe=D.homePlayers)!=null&&xe.length?`<div style="margin-bottom:3px">${tt(D.homePlayers,"rgba(255,255,255,0.7)",D.homeTotal)}</div>`:""}
                ${(_e=D.aiPlayers)!=null&&_e.length?`<div style="opacity:0.7">${tt(D.aiPlayers,"#ff6b6b",D.aiTotal)}</div>`:""}
              </div>`}return D.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${D.outPlayer?Qe({...D.outPlayer,used:!0,_line:D.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${D.inPlayer?Qe({...D.inPlayer,_line:D.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:D.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${D.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${D.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function j(){const D=e.querySelector(".match-screen");if(!D)return;const ne=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);D.style.bottom="auto",D.style.height=ne+"px",D.style.minHeight=ne+"px",D.style.maxHeight=ne+"px",D.style.overflow="hidden";const xe=e.querySelector("#mobile-action-bar"),_e=e.querySelector("#mobile-play-area");xe&&_e&&(_e.style.paddingBottom=xe.offsetHeight+"px")}if(j(),setTimeout(j,120),setTimeout(j,400),setTimeout(j,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",j),window.visualViewport.addEventListener("scroll",j)),window.addEventListener("resize",j)),function(){const ne=e.querySelector(".terrain-wrapper svg");ne&&(ne.removeAttribute("width"),ne.removeAttribute("height"),ne.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ne.setAttribute("viewBox","-26 -26 352 352"),ne.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const D=e.querySelector(".terrain-wrapper svg");D&&(D.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let D=!1,ne=30;const xe=()=>document.getElementById("match-timer"),_e=()=>{const ve=xe();if(!ve)return;const we=String(Math.floor(ne/60)).padStart(2,"0"),je=String(ne%60).padStart(2,"0");ve.textContent=` ${we}:${je}`,ve.style.color=D?"#ff2222":"#ff9500",ve.style.fontWeight="900"};_e(),t._timerInt=setInterval(()=>{if(ne--,ne<0)if(!D)D=!0,ne=15,_e();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const ve=document.createElement("div");ve.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",ve.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(ve),setTimeout(()=>{ve.remove(),Ft(e,t,i)},2500)}else _e()},1e3)}(G=document.getElementById("match-quit"))==null||G.addEventListener("click",()=>{Ue(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Ft(e,t,i))}),(q=document.getElementById("view-ai"))==null||q.addEventListener("click",()=>qo(t,i)),(N=document.getElementById("toggle-history"))==null||N.addEventListener("click",()=>{var D;(D=document.getElementById("match-history-panel"))==null||D.classList.add("open")}),(K=document.getElementById("close-history"))==null||K.addEventListener("click",()=>{var D;(D=document.getElementById("match-history-panel"))==null||D.classList.remove("open")}),(Z=document.getElementById("btn-action"))==null||Z.addEventListener("click",()=>{t.selected.length!==0&&(m?Eo(e,t,i):y&&To(e,t,i))}),(re=document.getElementById("btn-results"))==null||re.addEventListener("click",()=>Ft(e,t,i)),(le=document.getElementById("btn-pass"))==null||le.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ei(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(D=>{D.addEventListener("click",()=>ko(D,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(D=>{D.addEventListener("click",()=>ui(e,t,i,null,D.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(D=>{D.addEventListener("click",()=>Io(D.dataset.gcId,D.dataset.gcType,e,t,i))}),(te=document.getElementById("boost-card"))==null||te.addEventListener("click",()=>Co(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(D=>{D.addEventListener("click",()=>ui(e,t,i,D.dataset.subId))}),(H=document.getElementById("sub-btn-main"))==null||H.addEventListener("click",()=>ui(e,t,i))}function ko(e,t,i,n){const d=e.dataset.cardId,a=e.dataset.role,r=t.selected.findIndex(c=>c.cardId===d);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const c=(t.homeTeam[a]||[]).find(p=>p.cardId===d);c&&t.selected.push({...c,_role:a,_line:a})}Ye(i,t,n)}function Li(e,t,i){e.matchId&&S.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Eo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Li(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(c=>!c.used)),d=t.selected.map(r=>{const c=(t.homeTeam[r._role]||[]).find(s=>s.cardId===r.cardId)||r,p=n&&["GK","DEF"].includes(r._role);return{...c,_line:r._role,...p?{note_a:Math.max(1,Number(c.note_a)||0)}:{}}}),a=Ht(d,t.modifiers.home);t.pendingAttack={...a,players:[...d],side:"home"},t.selected.forEach(r=>{const c=(t.homeTeam[r._role]||[]).find(p=>p.cardId===r.cardId);c&&(c.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${a.total} (base ${a.base}${a.links?` +${a.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ye(e,t,i),setTimeout(()=>Ao(e,t,i),1200)}function To(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Li(t,i,i.state.profile.id);const n=t.stadiumDef||null,d=t.selected.map(p=>{const s=(t.homeTeam[p._role]||[]).find(v=>v.cardId===p.cardId)||p,o=s.stadiumBonus||n&&(n.club_id&&String(s.club_id)===String(n.club_id)||n.country_code&&s.country_code===n.country_code)||!1;return{...s,_line:p._role,stadiumBonus:o}}),a=Ut(d,t.modifiers.home);t.selected.forEach(p=>{const s=(t.homeTeam[p._role]||[]).find(o=>o.cardId===p.cardId);s&&(s.used=!0)});const r=Kt(t.pendingAttack.total,a.total,t.modifiers.home),c={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(p=>ht(p)),homePlayers:t.selected.map(p=>{const s=(t.homeTeam[p._role]||[]).find(o=>o.cardId===p.cardId)||p;return ht(s)}),homeTotal:a.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(r.shielded)c.text="🛡️ Bouclier ! But annulé.",t.log.push(c);else if(r.goal){t.aiScore++,c.isGoal=!0,c.homeScored=!1,c.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${a.total})`,t.log.push(c),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ye(e,t,i),ti(c.aiPlayers,t.homeScore,t.aiScore,!1,()=>{It(e,t,i,"home-attack")});return}else c.text=`🧤 Défense réussie ! (${a.total} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.selected=[],t.modifiers.home={},t.pendingAttack=null,It(e,t,i,"home-attack")}function So(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(p=>p.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(p=>!e.aiUsedSubIds.includes(p.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],d=i.find(p=>p.job===n.job)||i[0],a={...d,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],c=r.findIndex(p=>p.cardId===n.cardId);c!==-1&&(r[c]=a),e.aiUsedSubIds.push(d.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${d.firstname} ${d.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function zo(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(d=>!e.aiUsedGc.includes(d.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Re[i.gc_type],i.gc_type){case"Boost+2":{const d=Object.values(e.aiTeam).flat().filter(a=>!a.used);if(d.length){const a=d[Math.floor(Math.random()*d.length)];a.boost=(a.boost||0)+2}break}case"Boost+3":{const d=Object.values(e.aiTeam).flat().filter(a=>!a.used);if(d.length){const a=d[Math.floor(Math.random()*d.length)];a.boost=(a.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function ei(e,t,i){Li(t,i,null),So(t),zo(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=en(n,"attack",t.difficulty);if(!d.length){Xt(e,t,i);return}const a=Ht(d,t.modifiers.ai);t.pendingAttack={...a,players:d,side:"ai"},d.forEach(s=>{s.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${d.map(s=>s.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used),p=(t.homeSubs||[]).filter(s=>!(t.usedSubIds||[]).includes(s.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!p){t.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(o=>ht(o)),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(s),t.pendingAttack=null,Ye(e,t,i),ti(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{It(e,t,i,"home-attack")});return}t.phase="defense",Ye(e,t,i)}function Ao(e,t,i){var s,o;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=en(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(v=>(t.aiTeam[v]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((s=t.pendingAttack)==null?void 0:s.players)||[]).map(y=>ht(y)),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),ti(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{It(e,t,i,"ai-attack")});return}const r=d.length>0?Ut(d,t.modifiers.ai).total:0;d.forEach(v=>{v.used=!0});const c=Kt(t.pendingAttack.total,r,t.modifiers.ai),p={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(v=>ht(v)),aiPlayers:d.map(v=>ht(v)),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(c.shielded)p.text="🛡️ Bouclier IA !",t.log.push(p);else if(c.goal){t.homeScore++,p.isGoal=!0,p.homeScored=!0,p.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(p),t.modifiers.ai={},t.pendingAttack=null,Ye(e,t,i),ti(p.homePlayers,t.homeScore,t.aiScore,!0,()=>{It(e,t,i,"ai-attack")});return}else p.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(p);t.modifiers.ai={},t.pendingAttack=null,It(e,t,i,"ai-attack")}function It(e,t,i,n){if(t.round++,un(t)){Ft(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(a=>!a.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(c=>!c.used).length){Xt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(c=>!c.used).length){Xt(e,t,i);return}setTimeout(()=>ei(e,t,i),100);return}t.phase="attack",Ye(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(a=>!a.used).length){Xt(e,t,i);return}t.phase="ai-attack",Ye(e,t,i),setTimeout(()=>ei(e,t,i),800)}}function un(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function Xt(e,t,i){un(t)?Ft(e,t,i):(t.phase="attack",Ye(e,t,i))}function Lo(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=it(e),a=it(t),r=Zt[e.job]||"#555",c=Zt[t.job]||"#555",p=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,s=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
        <div style="width:80px;height:80px;border-radius:12px;background:${c};border:3px solid #00ff88;position:relative;overflow:hidden;margin:0 auto">
          ${a?`<img src="${a}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${s}</div>
        </div>
        <div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:5px">${t.firstname}</div>
        <div style="font-size:12px;color:#00ff88;font-weight:700">${t.name}</div>
      </div>
    </div>
  `,document.body.appendChild(n);let o=!1;const v=()=>{o||(o=!0,n.remove(),i())};n.addEventListener("click",v),setTimeout(v,2e3)}function Bt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function ui(e,t,i,n=null,d=null){var y,_;if(t.phase!=="attack"){Bt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){Bt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const a=Object.entries(t.homeTeam).flatMap(([g,l])=>(l||[]).filter(T=>T.used).map(T=>({...T,_line:T._line||g}))),r=t.homeSubs.filter(g=>!t.usedSubIds.includes(g.cardId));if(!a.length){Bt("Aucun joueur utilisé à remplacer");return}if(!r.length){Bt("Aucun remplaçant disponible");return}let c=Math.max(0,a.findIndex(g=>g.cardId===d));const p=((y=a[c])==null?void 0:y._line)||((_=a[c])==null?void 0:_.job);let s=n?Math.max(0,r.findIndex(g=>g.cardId===n)):Math.max(0,r.findIndex(g=>g.job===p)),o=!1;const v=document.createElement("div");v.id="sub-overlay",v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function m(){var F,G,q,N,K,Z;const g=a[c],l=r[s],T=Math.min(130,Math.round((window.innerWidth-90)/2)),f=Math.round(T*1.35),L=re=>`background:rgba(255,255,255,0.12);border:none;color:${re?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${re?"default":"pointer"};flex-shrink:0`;v.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${L(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${l?Qe({...l,used:!1,boost:0},T,f):"<div>—</div>"}</div>
        <button id="in-down" style="${L(s>=r.length-1)}" ${s>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${L(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${g?Qe({...g,used:!1,boost:0},T,f):"<div>—</div>"}</div>
        <button id="out-down" style="${L(c>=a.length-1)}" ${c>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${a.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(F=v.querySelector("#sub-close"))==null||F.addEventListener("click",()=>v.remove()),(G=v.querySelector("#out-up"))==null||G.addEventListener("click",()=>{c>0&&(c--,m())}),(q=v.querySelector("#out-down"))==null||q.addEventListener("click",()=>{c<a.length-1&&(c++,m())}),(N=v.querySelector("#in-up"))==null||N.addEventListener("click",()=>{s>0&&(s--,m())}),(K=v.querySelector("#in-down"))==null||K.addEventListener("click",()=>{s<r.length-1&&(s++,m())});const j=(re,le,te,H)=>{const D=v.querySelector("#"+re);if(!D)return;let ne=0;D.addEventListener("touchstart",xe=>{ne=xe.touches[0].clientY},{passive:!0}),D.addEventListener("touchend",xe=>{const _e=xe.changedTouches[0].clientY-ne;if(Math.abs(_e)<30)return;const ve=le();_e<0&&ve<H-1?(te(ve+1),m()):_e>0&&ve>0&&(te(ve-1),m())},{passive:!0})};j("in-panel",()=>s,re=>s=re,r.length),j("out-panel",()=>c,re=>c=re,a.length),(Z=v.querySelector("#sub-confirm"))==null||Z.addEventListener("click",re=>{if(re.preventDefault(),re.stopPropagation(),o)return;o=!0;const le=a[c],te=r[s];if(!le||!te)return;let H=null,D=-1;for(const[xe,_e]of Object.entries(t.homeTeam)){const ve=(_e||[]).findIndex(we=>we.cardId===le.cardId);if(ve!==-1){H=xe,D=ve;break}}if(D===-1||!H){Bt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),v.remove();return}const ne={...te,_line:H,_col:le._col||0,used:!1,boost:0};t.homeTeam[H].splice(D,1,ne),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(te.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:le.name,firstname:le.firstname,note:We(le,H),portrait:it(le),job:le.job,country_code:le.country_code,rarity:le.rarity,clubName:le.clubName,clubLogo:le.clubLogo},inPlayer:{name:te.name,firstname:te.firstname,note:We(te,H),portrait:it(te),job:te.job,country_code:te.country_code,rarity:te.rarity,clubName:te.clubName,clubLogo:te.clubLogo},text:`🔄 ${te.firstname} ${te.name} remplace ${le.firstname} ${le.name}`}),v.remove(),Lo(le,te,()=>Ye(e,t,i))})}document.body.appendChild(v),m()}function Io(e,t,i,n,d){var _,g;const a=(n.gcDefs||[]).find(l=>l.name===t),r=Re[t]||{icon:"⚡",desc:"Carte spéciale."},c={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[a==null?void 0:a.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",p={purple:"#b06ce0",light_blue:"#00d4ef"}[a==null?void 0:a.color]||"#b06ce0",s=(a==null?void 0:a.name)||t,o=(a==null?void 0:a.effect)||r.desc,v=a!=null&&a.image_url?`/icons/${a.image_url}`:null,m=r.icon||"⚡",y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",y.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${p};background:${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${p}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${s.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${s}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${v?`<img src="${v}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${m}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(y),(_=y.querySelector("#gc-back"))==null||_.addEventListener("click",()=>y.remove()),(g=y.querySelector("#gc-use"))==null||g.addEventListener("click",()=>{y.remove(),jo(e,t,i,n,d)})}function Wt(e,t,i,n,d,a){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let c=[];function p(){var s,o;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${c.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(v=>{const m=v._line||v.job||"MIL",y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",_=We(v,m)+(v.boost||0),g=c.find(l=>l.cardId===v.cardId);return`<div class="gc-pick-item" data-cid="${v.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${g?"#FFD700":"rgba(255,255,255,0.25)"};background:${y};overflow:hidden;cursor:pointer;flex-shrink:0;${v.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${v.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${_}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${m}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${c.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${c.length}/${t})
      </button>
    </div>`,(s=r.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(v=>{v.addEventListener("click",()=>{const m=v.dataset.cid,y=e.find(g=>g.cardId===m);if(!y)return;const _=c.findIndex(g=>g.cardId===m);_>-1?c.splice(_,1):c.length<t&&c.push(y),p()})}),(o=r.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{r.remove(),a(c)})}p(),document.body.appendChild(r)}const Mo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,a)=>{const r=Object.entries(n.homeTeam).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,p])=>p.filter(s=>!s.used).map(s=>({...s,_line:c})));return r.length?(Wt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,c=>{c.forEach(p=>{const s=(n.homeTeam[p._line]||[]).find(o=>o.cardId===p.cardId);s&&(s.boost=(s.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${s.name}`,type:"info"}))}),Ye(d,n,a)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ye(d,n,a),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,a,r)=>{const c=n==="home"?d.homeTeam:d.aiTeam,p=n==="ai"?"adverse":"allié",s=Object.entries(c).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,v])=>v.filter(m=>!m.used).map(m=>({...m,_line:o})));return s.length?(Wt(s,t,`Choisir ${t} joueur(s) ${p}(s) à débuffer (-${e})`,a,d,o=>{o.forEach(v=>{const y=((n==="home"?d.homeTeam:d.aiTeam)[v._line]||[]).find(_=>_.cardId===v.cardId);y&&(y.boost=(y.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${y.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Ye(a,d,r)}),!0):(d.log.push({text:`🎯 Aucun joueur ${p} disponible`,type:"info"}),Ye(a,d,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,a)=>{const r=i==="home"?n.homeTeam:n.aiTeam,c=i==="ai"?"adverse":"allié",p=Object.entries(r).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,o])=>o.filter(v=>!v.used).map(v=>({...v,_line:s})));return p.length?(Wt(p,e,`Choisir ${e} joueur(s) ${c}(s) à exclure`,d,n,s=>{s.forEach(o=>{const m=((i==="home"?n.homeTeam:n.aiTeam)[o._line]||[]).find(y=>y.cardId===o.cardId);m&&(m.used=!0,n.log.push({text:`❌ ${m.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ye(d,n,a)}),!0):(n.log.push({text:`❌ Aucun joueur ${c} à exclure`,type:"info"}),Ye(d,n,a),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const a=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,c])=>c.filter(p=>p.used).map(p=>({...p,_line:r})));return a.length?(Wt(a,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(c=>{const p=(i.homeTeam[c._line]||[]).find(s=>s.cardId===c.cardId);p&&(p.used=!1,i.log.push({text:`💫 ${p.name} ressuscité !`,type:"info"}))}),Ye(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ye(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function jo(e,t,i,n,d){n.usedGc.push(e);const a=n.gcDefs||[],r=a.find(p=>p.name===t)||a.find(p=>{var s;return((s=p.name)==null?void 0:s.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let c=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const p=Mo[r.effect_type];p?p(r.effect_params||{},n,i,d)||(c=!0):(d.toast(`Effet "${r.effect_type}" non implémenté`,"error"),c=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const p=Object.entries(n.homeTeam).flatMap(([s,o])=>(o||[]).filter(v=>v.used).map(v=>({...v,_line:s})));p.length?(p[0].used=!1,n.log.push({text:`💫 ${p[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const p=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(s=>!s.used);if(p.length){const s=p.sort((o,v)=>We(v,"ATT")-We(o,"ATT"))[0];s.used=!0,n.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}c=!0}S.from("cards").delete().eq("id",e).then(()=>{}),c&&Ye(i,n,d)}function Co(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Zt[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${We(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const a=d.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const c=(t.homeTeam[r]||[]).find(p=>p.cardId===a);if(c){c.boost=(c.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${c.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Ye(e,t,i)})})}function ti(e,t,i,n,d){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const r=Array.from({length:10},(s,o)=>`
    <div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;
      top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;
      animation:fw${o%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">
      ${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][o%8]}
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
    ${n?"BUT !":"BUT IA !"}
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
      <div style="width:50px;height:50px;border-radius:50%;background:${Zt[s.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${s.portrait?`<img src="${s.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(s.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(a);let c=!1;const p=()=>{c||(c=!0,a.remove(),setTimeout(()=>d(),50))};a.addEventListener("click",p),setTimeout(p,3500)}async function Ft(e,t,i){var o,v;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,a=t.homeScore===t.aiScore,r=d?"victoire":a?"nul":"defaite",c=Fn(t.mode,r);t.matchId&&await S.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:c,played_at:new Date().toISOString()}).eq("id",t.matchId);const p={credits:(n.profile.credits||0)+c,matches_played:(n.profile.matches_played||0)+1};d?p.wins=(n.profile.wins||0)+1:a?p.draws=(n.profile.draws||0)+1:p.losses=(n.profile.losses||0)+1,await S.from("users").update(p).eq("id",n.profile.id),await i.refreshProfile();const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",s.innerHTML=`
    <div style="text-align:center;padding:40px;color:#fff;max-width:360px">
      <div style="font-size:72px;margin-bottom:12px">${d?"🏆":a?"🤝":"😔"}</div>
      <h2 style="font-size:28px;font-weight:900;margin-bottom:8px">${d?"Victoire !":a?"Match nul":"Défaite"}</h2>
      <div style="font-size:48px;font-weight:900;margin:12px 0">${t.homeScore} – ${t.aiScore}</div>
      <div style="background:rgba(212,160,23,0.2);border:1px solid var(--yellow);border-radius:12px;padding:12px;margin:16px 0">
        <div style="font-size:12px;opacity:.8">Récompense</div>
        <div style="font-size:24px;font-weight:900;color:var(--yellow)">+${c.toLocaleString("fr")} crédits</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn btn-ghost" id="res-home" style="flex:1;color:#fff;border-color:rgba(255,255,255,0.3)">Accueil</button>
        <button class="btn btn-primary" id="res-replay" style="flex:1">Rejouer</button>
      </div>
    </div>`,document.body.appendChild(s),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{s.remove(),Ue(e),i.navigate("home")}),(v=document.getElementById("res-replay"))==null||v.addEventListener("click",()=>{s.remove(),Ue(e),i.navigate("match",{matchMode:t.mode})})}function qo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ct(e.aiTeam,e.formation,null,[],window.innerWidth>=900?500:300,window.innerWidth>=900?620:380)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}function fi(e){var n,d;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+(e.stadiumBonus?10:0),note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((n=e.clubs)==null?void 0:n.encoded_name)||null,clubLogo:e.clubLogo||((d=e.clubs)==null?void 0:d.logo_url)||null,face:e.face||null,portrait:it(e)}}async function _i(e,t,i=!1){var d,a,r,c;try{const p=(a=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:a.id;try{(S.getChannels?S.getChannels():[]).forEach(o=>{const v=o.topic||"";(v.includes("matchmaking")||v.includes("pvp-match")||v.includes("friend-invite"))&&S.removeChannel(o)})}catch(s){console.warn("[Random] cleanup canaux:",s)}p&&await S.rpc("cancel_matchmaking",{p_user_id:p}).catch(()=>{})}catch{}const n=i&&((c=(r=t==null?void 0:t.state)==null?void 0:r.params)==null?void 0:c.rankedData)||null;await ai(e,t,"random",({deckId:p,formation:s,starters:o,subsRaw:v,gcCardsEnriched:m,gcDefs:y,stadiumDef:_})=>{const g=l=>Bo(e,t,p,s,o,v,l,y||[],_,i,n);if(!m.length){g([]);return}ri(e,m,g)})}async function Bo(e,t,i,n,d,a,r=[],c=[],p=null,s=!1,o=null){var G,q;const{state:v,navigate:m,toast:y}=t;let _=!1,g=null;Ze(e);const l=(o==null?void 0:o.mmr)??((G=v.profile)==null?void 0:G.mmr)??1e3,T=s?Pt(l):null,f=s?"linear-gradient(180deg,#1a0030,#0a1628)":"linear-gradient(180deg,#0a1628,#1a0a2e)",L=s?(T==null?void 0:T.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:${f};padding:24px;text-align:center">
      ${s?`<div style="font-size:36px">${(T==null?void 0:T.emoji)||"⚽"}</div>`:""}
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:${L};border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked...":"Recherche d'un adversaire..."}</div>
      ${s?`<div style="font-size:13px;color:${(T==null?void 0:T.color)||"#D4A017"}">${(T==null?void 0:T.emoji)||"⚔️"} ${(T==null?void 0:T.label)||"Ranked"}</div>`:""}
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <div id="mm-range" style="display:none"></div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const j=async(N=!0)=>{_=!0,g&&(S.removeChannel(g),g=null),N&&await S.rpc("cancel_matchmaking",{p_user_id:v.profile.id}).catch(()=>{})};(q=document.getElementById("mm-cancel"))==null||q.addEventListener("click",async()=>{try{await j(!0)}catch{}Ue(e),m("home")});const F=async(N,K,Z)=>{if(_)return;_=!0,g&&(S.removeChannel(g),g=null);const re=document.getElementById("mm-status");re&&(re.textContent="Adversaire trouvé !"),await new Promise(le=>setTimeout(le,600)),e.isConnected&&fn(e,t,N,Z,r,c,s,o,p)};if(s){const N=[{range:50,delay:0},{range:100,delay:15e3},{range:200,delay:3e4},{range:400,delay:45e3},{range:800,delay:6e4}];let K=0,Z=!1;const re=async()=>{if(_||Z)return;const{range:le}=N[K],te=document.getElementById("mm-range");te&&(te.textContent=`Plage MMR : ±${le}`);const{data:H,error:D}=await S.rpc("try_matchmake_ranked",{p_user_id:v.profile.id,p_deck_id:i,p_mmr:l,p_range:le});if(console.log("[Ranked] try_matchmake_ranked result:",H,"error:",JSON.stringify(D)),_)return;if(D||!(H!=null&&H.success)){y("Erreur matchmaking ranked","error"),Ue(e),m("home");return}if(H.matched){Z=!0,F(H.match_id,H.opponent_id,!1);return}const ne=document.getElementById("mm-status");if(ne&&(ne.textContent="En attente d'un adversaire..."),g||(g=S.channel("matchmaking-"+v.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${v.profile.id}`},xe=>{const _e=xe.new;_e.status==="matched"&&_e.match_id&&!Z&&(Z=!0,F(_e.match_id,_e.matched_with,!0))}).subscribe()),K<N.length-1){const xe=N[K+1].delay-N[K].delay;K++,setTimeout(()=>{!_&&!Z&&re()},xe)}};await re()}else{const{data:N,error:K}=await S.rpc("try_matchmake",{p_user_id:v.profile.id,p_deck_id:i});if(K||!(N!=null&&N.success)){y("Erreur de matchmaking","error"),Ue(e),m("home");return}if(N.matched){F(N.match_id,N.opponent_id,!1);return}const Z=document.getElementById("mm-status");Z&&(Z.textContent="En attente d'un autre joueur..."),g=S.channel("matchmaking-"+v.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${v.profile.id}`},re=>{const le=re.new;le.status==="matched"&&le.match_id&&F(le.match_id,le.matched_with,!0)}).subscribe()}}async function Do(e,t,i){const{state:n,navigate:d,toast:a}=t;try{(S.getChannels?S.getChannels():[]).forEach(s=>{const o=s.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&S.removeChannel(s)})}catch{}const{data:r}=await S.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!r){a("Match introuvable","error"),d("home");return}if(r.status==="finished"){a("Ce match est terminé","info"),d("home");return}const c=r.home_id===n.profile.id;fn(e,t,i,c,[],[])}async function fn(e,t,i,n,d=[],a=[],r=!1,c=null,p=null){const{state:s,navigate:o,toast:v}=t,m=n?"p1":"p2",y=n?"p2":"p1",_=(d||[]).map(k=>k.id),g=(d||[]).map(k=>({id:k.id,gc_type:k.gc_type,_gcDef:k._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:l}=await S.from("matches").select("*").eq("id",i).single();if(!l){v("Match introuvable","error"),o("home");return}async function T(){var Y,ie;console.log("[PvP] buildGameState match:",{id:l.id,home_deck_id:l.home_deck_id,away_deck_id:l.away_deck_id,mode:l.mode,is_ranked:l.is_ranked});const[{data:k,error:u},{data:x,error:b},{data:h},{data:w}]=await Promise.all([S.rpc("get_deck_for_match",{p_deck_id:l.home_deck_id}),S.rpc("get_deck_for_match",{p_deck_id:l.away_deck_id}),S.from("users").select("id,pseudo,club_name").eq("id",l.home_id).single(),S.from("users").select("id,pseudo,club_name").eq("id",l.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",u==null?void 0:u.message,"p2:",b==null?void 0:b.message,"p1D:",(Y=k==null?void 0:k.starters)==null?void 0:Y.length,"p2D:",(ie=x==null?void 0:x.starters)==null?void 0:ie.length);const $=J=>{const ue=Number(J.evolution_bonus)||0;return{cardId:J.card_id,position:J.position,id:J.id,firstname:J.firstname,name:J.surname_real,country_code:J.country_code,club_id:J.club_id,job:J.job,job2:J.job2,note_g:(Number(J.note_g)||0)+(J.job==="GK"||J.job2==="GK"&&Number(J.note_g)>0?ue:0),note_d:(Number(J.note_d)||0)+(J.job==="DEF"||J.job2==="DEF"&&Number(J.note_d)>0?ue:0),note_m:(Number(J.note_m)||0)+(J.job==="MIL"||J.job2==="MIL"&&Number(J.note_m)>0?ue:0),note_a:(Number(J.note_a)||0)+(J.job==="ATT"||J.job2==="ATT"&&Number(J.note_a)>0?ue:0),evolution_bonus:ue,rarity:J.rarity,skin:J.skin,hair:J.hair,hair_length:J.hair_length,face:J.face||null,clubName:J.club_encoded_name||null,clubLogo:J.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},z=((k==null?void 0:k.starters)||[]).map(J=>$(J)),E=((x==null?void 0:x.starters)||[]).map(J=>$(J)),I=(k==null?void 0:k.formation)||"4-4-2",A=(x==null?void 0:x.formation)||"4-4-2";let M=wt(z,I),B=wt(E,A);const V=((k==null?void 0:k.subs)||[]).map(J=>$(J)),Q=((x==null?void 0:x.subs)||[]).map(J=>$(J)),U=(k==null?void 0:k.stadium_def)||(n?p:null),P=(x==null?void 0:x.stadium_def)||(n?null:p);return U&&(M=St(M,U),Ct(V,U)),P&&(B=St(B,P),Ct(Q,P)),{p1Team:M,p2Team:B,p1Subs:V,p2Subs:Q,p1Formation:I,p2Formation:A,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?_:[],gc_p2:n?[]:_,gcCardsFull_p1:n?g:[],gcCardsFull_p2:n?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:a||[],lastActionAt:new Date().toISOString()}}let f=l.game_state&&Object.keys(l.game_state).length?l.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!f,"match.status:",l.status,"home_id:",l.home_id,"away_id:",l.away_id,"myId:",s.profile.id),!f)if(n){f=await T(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((f==null?void 0:f.p1Team)||{}));const{data:k}=await S.from("matches").select("game_state").eq("id",i).single();!(k!=null&&k.game_state)||!Object.keys(k.game_state).length?await S.from("matches").update({game_state:f,turn_user_id:l.home_id}).eq("id",i):f=k.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let k=0;k<30&&!f;k++){await new Promise(x=>setTimeout(x,400));const{data:u}=await S.from("matches").select("game_state").eq("id",i).single();u!=null&&u.game_state&&Object.keys(u.game_state).length&&(f=u.game_state),k%5===0&&console.log("[PvP] away - poll",k,"game_state:",!!(u!=null&&u.game_state))}if(!f){v("Erreur de synchronisation","error"),o("home");return}f.gc_p2=_,f.gcCardsFull_p2=g,await S.from("matches").update({game_state:f}).eq("id",i)}let L=!1,j=null,F=!1;const G=new Set,q=new Set;async function N(k){var A,M;try{S.removeChannel(K)}catch{}const u=f[m+"Score"]||0,x=f[y+"Score"]||0;let b,h;k.winner_id?(b=k.winner_id===s.profile.id,h=!1):k.forfeit?(b=u>x,h=!1):(h=u===x,b=u>x);let w="";if(r&&n)try{const{data:B}=await S.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",l.home_id).single(),{data:V}=await S.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",l.away_id).single();if(B&&V){const Q=b?1:h?.5:0,U=1-Q,P=B.placement_matches<10,Y=V.placement_matches<10,ie=ji(B.mmr,B.mmr_deviation,B.mmr_volatility,V.mmr,V.mmr_deviation,Q===1?1:Q===0?0:.5,P),J=ji(V.mmr,V.mmr_deviation,V.mmr_volatility,B.mmr,B.mmr_deviation,U===1?1:U===0?0:.5,Y);await S.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:h?null:b?l.home_id:l.away_id,p_home_id:l.home_id,p_away_id:l.away_id,p_home_delta:ie.delta,p_away_delta:J.delta,p_home_new_rd:ie.newRd,p_away_new_rd:J.newRd,p_home_new_vol:ie.newSigma,p_away_new_vol:J.newSigma});const ue=ie.delta,be=ie.newMmr,ye=Pt(be),Ee=ue>=0?"+":"",qe=ue>=0?"#4caf50":"#ff6b6b",Be=Pt(B.mmr);w=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${ye.id!==Be.id?`<div style="font-size:20px;font-weight:900;color:${ye.color}">
                    ${be>B.mmr?"📈":"📉"} ${Be.emoji} ${Be.label} → ${ye.emoji} ${ye.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${be>B.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${ue>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${ye.color}">${ye.emoji} ${ye.label}</div>`}
              ${P?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${B.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(B){console.error("[Ranked] MMR update error:",B)}(A=document.getElementById("pvp-end-overlay"))==null||A.remove();const $=document.createElement("div");$.id="pvp-end-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const z=h?"🤝":b?"🏆":"😞",E=h?"MATCH NUL":b?"VICTOIRE !":"DÉFAITE",I=h?"#fff":b?"#FFD700":"#ff6b6b";$.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${E}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${f[m+"Name"]} ${u} – ${x} ${f[y+"Name"]}</div>
      ${k.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${b?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${w}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild($),(M=$.querySelector("#pvp-end-home"))==null||M.addEventListener("click",()=>{$.remove(),Ue(e),o(r?"ranked":"home")})}const K=S.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},k=>{const u=k.new;try{if(u.status==="finished"||u.forfeit){if(L)return;L=!0,j&&(clearInterval(j),j=null),u.game_state&&(f=u.game_state),N(u);return}if(u.game_state){const x=f;f=u.game_state;const b=f._lastGC;if(b&&b.seq&&!q.has(b.seq)&&(q.add(b.seq),b.by!==m)){fe(b.type,b.by,()=>xe());return}const h=x[m+"Score"]||0,w=x[y+"Score"]||0,$=f[m+"Score"]||0,z=f[y+"Score"]||0,E=$>h,I=z>w;if((E||I)&&!G.has(f.round)){G.add(f.round);const A=[...f.log||[]].reverse().find(B=>B.isGoal),M=((A==null?void 0:A.homePlayers)||[]).map(B=>({name:B.name,note:B.note,portrait:B.portrait,job:B.job}));je(M,$,z,E,()=>xe());return}xe()}}catch(x){console.error("[PvP] crash:",x)}}).subscribe();async function Z(k){Object.assign(f,k),f.lastActionAt=new Date().toISOString();const{error:u}=await S.from("matches").update({game_state:f}).eq("id",i);u&&v("Erreur de synchronisation","error");try{xe()}catch(x){console.error("[PvP] renderPvpScreen crash:",x)}}async function re(){if(L)return;L=!0,j&&(clearInterval(j),j=null);const k=n?l.away_id:l.home_id,u=n?"p2":"p1",x=n?"p1":"p2",b={...f,[u+"Score"]:3,[x+"Score"]:0,phase:"finished"};try{await S.from("matches").update({status:"finished",forfeit:!0,winner_id:k,home_score:b.p1Score||0,away_score:b.p2Score||0,game_state:b}).eq("id",i)}catch{}try{S.removeChannel(K)}catch{}setTimeout(()=>{Ue(e),o("home")},800)}const le={BOOST_STAT:({value:k=1,count:u=1,roles:x=[]},b,h)=>{const w=b[m+"Team"],$=Object.entries(w).filter(([z])=>!x.length||x.includes(z)).flatMap(([z,E])=>E.filter(I=>!I.used).map(I=>({...I,_line:z})));if(!$.length){b.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),h(b);return}te($,u,`Choisir ${u} joueur(s) à booster (+${k})`,z=>{z.forEach(E=>{const I=(w[E._line]||[]).find(A=>A.cardId===E.cardId);I&&(I.boost=(I.boost||0)+k,b.log.push({text:`⚡ +${k} sur ${I.name}`,type:"info"}))}),b[m+"Team"]=w,h(b)})},DEBUFF_STAT:({value:k=1,count:u=1,roles:x=[],target:b="ai"},h,w)=>{const $=b==="home"?m:y,z=h[$+"Team"],E=b==="home"?"allié":"adverse",I=Object.entries(z).filter(([A])=>!x.length||x.includes(A)).flatMap(([A,M])=>M.map(B=>({...B,_line:A})));if(!I.length){h.log.push({text:`🎯 Aucun joueur ${E}`,type:"info"}),w(h);return}te(I,u,`Choisir ${u} joueur(s) ${E}(s) (-${k})`,A=>{A.forEach(M=>{const B=(z[M._line]||[]).find(V=>V.cardId===M.cardId);B&&(B.boost=(B.boost||0)-k,h.log.push({text:`🎯 -${k} sur ${B.name}`,type:"info"}))}),h[$+"Team"]=z,w(h)})},GRAY_PLAYER:({count:k=1,roles:u=[],target:x="ai"},b,h)=>{const w=x==="home"?m:y,$=b[w+"Team"],z=x==="home"?"allié":"adverse",E=Object.entries($).filter(([I])=>!u.length||u.includes(I)).flatMap(([I,A])=>A.filter(M=>!M.used).map(M=>({...M,_line:I})));if(!E.length){b.log.push({text:`❌ Aucun joueur ${z}`,type:"info"}),h(b);return}te(E,k,`Choisir ${k} joueur(s) ${z}(s) à exclure`,I=>{const A="usedCardIds_"+w,M=new Set(b[A]||[]);I.forEach(B=>{const V=($[B._line]||[]).find(Q=>Q.cardId===B.cardId);V&&(V.used=!0,M.add(B.cardId),b.log.push({text:`❌ ${V.name} exclu !`,type:"info"}))}),b[A]=[...M],b[w+"Team"]=$,h(b)})},REVIVE_PLAYER:({count:k=1,roles:u=[]},x,b)=>{const h=x[m+"Team"],w=Object.entries(h).filter(([$])=>!u.length||u.includes($)).flatMap(([$,z])=>z.filter(E=>E.used).map(E=>({...E,_line:$})));if(!w.length){x.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),b(x);return}te(w,k,`Choisir ${k} joueur(s) à ressusciter`,$=>{$.forEach(z=>{const E=(h[z._line]||[]).find(I=>I.cardId===z.cardId);E&&(E.used=!1,x.log.push({text:`💫 ${E.name} ressuscité !`,type:"info"}))}),x[m+"Team"]=h,b(x)})},REMOVE_GOAL:({},k,u)=>{const x=y+"Score";k[x]>0?(k[x]--,k.log.push({text:"🚫 Dernier but annulé !",type:"info"})):k.log.push({text:"🚫 Aucun but à annuler",type:"info"}),u(k)},ADD_GOAL_DRAW:({},k,u)=>{k[m+"Score"]===k[y+"Score"]?(k[m+"Score"]++,k.log.push({text:"🎯 But bonus !",type:"info"})):k.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),u(k)},ADD_SUB:({value:k=1},u,x)=>{u.maxSubs=(u.maxSubs||3)+k,u.log.push({text:`🔄 +${k} remplacement(s)`,type:"info"}),x(u)},CUSTOM:({},k,u)=>u(k)};function te(k,u,x,b){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let w=[];function $(){var E,I;const z=k.map(A=>{const M={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",B=We(A,A._line)+(A.boost||0),Q=w.find(P=>P.cardId===A.cardId)?"#FFD700":"rgba(255,255,255,0.25)",U=A.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${Q};background:${M};overflow:hidden;cursor:pointer;${U}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${A._line}</div>
        </div>`}).join("");h.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${x}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w.length}/${u}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${z}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${w.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${w.length}/${u})
          </button>
        </div>`,(E=h.querySelector("#pp-close"))==null||E.addEventListener("click",()=>h.remove()),h.querySelectorAll(".pp-item").forEach(A=>{A.addEventListener("click",()=>{const M=A.dataset.cid,B=k.find(Q=>Q.cardId===M),V=w.findIndex(Q=>Q.cardId===M);B&&(V>-1?w.splice(V,1):w.length<u&&w.push(B),$())})}),(I=h.querySelector("#pp-confirm"))==null||I.addEventListener("click",()=>{h.remove(),b(w)})}$(),document.body.appendChild(h)}async function H(k,u){const b=(f["gcCardsFull_"+m]||[]).find(z=>z.id===k),h=(b==null?void 0:b._gcDef)||(f.gcDefs||[]).find(z=>{var E;return z.name===u||((E=z.name)==null?void 0:E.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),w=[...f["usedGc_"+m]||[],k],$={type:u,by:m,seq:(f._gcAnimSeq||0)+1};q.add($.seq),fe(u,m,async()=>{if(h!=null&&h.effect_type&&h.effect_type!=="CUSTOM"){const E=le[h.effect_type];if(E){const I={...f};E(h.effect_params||{},I,async A=>{A["usedGc_"+m]=w,A._lastGC=$,A._gcAnimSeq=$.seq,await Z(A)});return}}const z={...f};switch(u){case"Remplacement+":z.maxSubs=(z.maxSubs||3)+1,z.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const E=y+"Score";z[E]>0&&(z[E]--,z.log.push({text:"🚫 But annulé",type:"info"}));break}}z["usedGc_"+m]=w,z._lastGC=$,z._gcAnimSeq=$.seq,await Z(z)})}function D(k,u){const x="usedCardIds_"+k,b=new Set(f[x]||[]);u.forEach(h=>b.add(h)),f[x]=[...b]}function ne(){for(const k of["p1","p2"]){const u=new Set(f["usedCardIds_"+k]||[]),x=f[k+"Team"];if(x)for(const b of["GK","DEF","MIL","ATT"])(x[b]||[]).forEach(h=>{h.used=u.has(h.cardId)})}}function xe(){var Ve,nt,ut,ft,gt,ce;if(f.phase==="reveal")return _e();if(f.phase==="midfield")return we();if(f.phase==="finished")return C();const k=f[m+"Team"],u=f[y+"Team"];ne();const x=f[m+"Score"],b=f[y+"Score"],h=f[m+"Name"],w=f[y+"Name"],$=f.phase===m+"-attack",z=f.phase===m+"-defense",E=Array.isArray(f["selected_"+m])?f["selected_"+m]:[],I=E.map(W=>W.cardId),A=window.innerWidth>=700,M=f[m+"Subs"]||[],B=f["usedSubIds_"+m]||[],V=M.filter(W=>!B.includes(W.cardId)),Q=f["gcCardsFull_"+m]||[],U=f["usedGc_"+m]||[],P=Q.filter(W=>!U.includes(W.id)),Y=f.boostOwner===m&&!f.boostUsed,ie=!["GK","DEF","MIL","ATT"].some(W=>(u[W]||[]).some(R=>!R.used)),J=[...k.MIL||[],...k.ATT||[]].filter(W=>!W.used),ue=$&&ie&&J.length===0?[...k.GK||[],...k.DEF||[]].filter(W=>!W.used).map(W=>W.cardId):[];function be(W,R,oe){var Et,qt;const he=W._gcDef,$e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[he==null?void 0:he.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Je={purple:"#b06ce0",light_blue:"#00d4ef"}[he==null?void 0:he.color]||"#b06ce0",Xe=(he==null?void 0:he.name)||W.gc_type,et=(he==null?void 0:he.effect)||((Et=Re[W.gc_type])==null?void 0:Et.desc)||"",at=he!=null&&he.image_url?`/icons/${he.image_url}`:null,$t=((qt=Re[W.gc_type])==null?void 0:qt.icon)||"⚡",kt=Math.round(oe*.22),lt=Math.round(oe*.22),mt=oe-kt-lt,xt=Xe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${W.id}" data-gc-type="${W.gc_type}"
        style="box-sizing:border-box;width:${R}px;height:${oe}px;border-radius:10px;border:2px solid ${Je};background:${$e};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${kt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${xt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${R-6}px">${Xe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${mt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${at?`<img src="${at}" style="max-width:${R-10}px;max-height:${mt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(mt*.55)}px">${$t}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${et.slice(0,38)}</span>
        </div>
      </div>`}function ye(W,R){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${W}px;height:${R}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(R*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(R*.2)}px">⚡</div>
        <div style="font-size:${Math.round(R*.09)}px;color:#000;font-weight:900">+${f.boostValue}</div>
      </div>`}const Ee=(W,R)=>R?ye(130,175):be(W,130,175),qe=(W,R)=>R?ye(68,95):be(W,68,95),Be=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ie=$?ke(m)?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${E.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:z?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${E.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${w}</div>`,Me=$&&!ke(m)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':$||z?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${E.length}/3 sélectionné(s)</div>`:"",Le=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${V.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':V.map(W=>`<div class="pvp-sub-btn" data-sub-id="${W.cardId}" style="cursor:pointer;flex-shrink:0">${Qe(W,A?76:44,A?100:58)}</div>`).join("")}
    </div>`,Pe=$?"attack":z?"defense":"idle",Oe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(k,f[m+"Formation"],Pe,I,window.innerWidth>=900?500:300,window.innerWidth>=900?620:300,ue)}
      </div>
    </div>`;function Ke(W){if(W.type==="duel"&&(W.homeTotal!=null||W.aiTotal!=null)){const R=(W.homeTotal||0)>=(W.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(W.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(W.homePlayers||[]).map(oe=>st(oe)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${R?20:14}px;font-weight:900;color:${R?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${W.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${R?14:20}px;font-weight:900;color:${R?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${W.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(W.aiPlayers||[]).map(oe=>st(oe)).join("")}
            </div>
          </div>
          ${W.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${W.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${W.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${W.type==="goal"?700:400};padding:3px 2px">${W.text||""}</div>`}const He=(()=>{var R,oe;if(z&&((R=f.pendingAttack)!=null&&R.players)){const he=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${w} ATTAQUE — Défendez !</div>
          ${tt((he.players||[]).map($e=>({...$e,used:!1})),"#ff6b6b",he.total)}
        </div>`}if($&&((oe=f.pendingAttack)!=null&&oe.players)){const he=f.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((he.players||[]).map($e=>({...$e,used:!1})),"#00ff88",he.total)}
        </div>`}const W=(f.log||[]).slice(-1)[0];return W?'<div style="padding:2px 4px">'+Ke(W)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ne=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${x} – ${b}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${He}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(f.log||[]).length})
      </button>`;Ze(e),e.style.overflow="hidden",A?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Le}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Oe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ie}${Me}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${P.map(W=>Ee(W,!1)).join("")}
            ${Y?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ne}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(k,f[m+"Formation"],Pe,I,window.innerWidth>=900?500:300,window.innerWidth>=900?620:300,ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${P.map(W=>qe(W,!1)).join("")}
            ${Y?qe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${$&&V.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${$&&V.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${$&&V.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${$&&V.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${V.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(f["usedSubIds_"+m]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(f["usedSubIds_"+m]||[]).length}/${f.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Ie}${Me}</div>
        </div>
      </div>`;function Ge(){const W=e.querySelector(".match-screen");if(!W)return;const R=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);W.style.height=R+"px",W.style.minHeight=R+"px",W.style.maxHeight=R+"px",W.style.overflow="hidden";const oe=e.querySelector("#mobile-action-bar"),he=e.querySelector("#mobile-play-area");oe&&he&&(he.style.paddingBottom=oe.offsetHeight+"px")}if(Ge(),setTimeout(Ge,120),setTimeout(Ge,400),F||(F=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ge),window.visualViewport.addEventListener("scroll",Ge)),window.addEventListener("resize",Ge)),function(){const R=e.querySelector(".terrain-wrapper svg");R&&(R.removeAttribute("width"),R.removeAttribute("height"),R.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",R.setAttribute("viewBox","-26 -26 352 352"),R.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(W=>{W.addEventListener("click",()=>{if(!$&&!z)return;const R=W.dataset.cardId,oe=W.dataset.role,he=(k[oe]||[]).find(et=>et.cardId===R);if(!he||he.used)return;const $e=ue.includes(R);if($&&!["MIL","ATT"].includes(oe)&&!$e)return;Array.isArray(f["selected_"+m])||(f["selected_"+m]=[]);const Je=f["selected_"+m],Xe=Je.findIndex(et=>et.cardId===R);Xe>-1?Je.splice(Xe,1):Je.length<3&&Je.push({...he,_role:oe}),xe()})}),e.querySelectorAll(".match-used-hit").forEach(W=>{W.addEventListener("click",()=>O(W.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(W=>{W.addEventListener("click",()=>O())}),(Ve=e.querySelector("#pvp-sub-open"))==null||Ve.addEventListener("click",()=>O()),e.querySelectorAll(".pvp-gc-mini").forEach(W=>{W.addEventListener("click",()=>me(W.dataset.gcId,W.dataset.gcType))}),(nt=e.querySelector("#pvp-boost-card"))==null||nt.addEventListener("click",()=>ge()),(ut=e.querySelector("#pvp-action"))==null||ut.addEventListener("click",W=>{$?W.currentTarget.dataset.pass==="1"||!ke(m)?pe():ee():z&&de()}),(ft=e.querySelector("#pvp-quit"))==null||ft.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&re()}),(gt=e.querySelector("#pvp-view-opp"))==null||gt.addEventListener("click",()=>ae()),(ce=e.querySelector("#pvp-toggle-history"))==null||ce.addEventListener("click",()=>se()),j&&(clearInterval(j),j=null),($||z)&&!L){let W=30,R=!1;const oe=()=>document.getElementById("pvp-timer"),he=()=>{oe()&&(oe().textContent=W+"s",oe().style.color=R?"#ff4444":"#fff")};he(),j=setInterval(()=>{W--,W<0?R?(clearInterval(j),j=null,$&&!ke(m)?pe():re()):(R=!0,W=15,he()):he()},1e3)}}function _e(){Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${f[y+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(f[y+"Team"],f[y+"Formation"],null,[],window.innerWidth>=900?500:300,window.innerWidth>=900?620:300)}</div>
    </div>`,m==="p1"&&setTimeout(async()=>{await Z({phase:"midfield"})},5e3)}let ve=!1;function we(){if(ve)return;const k=f[m+"Team"].MIL||[],u=f[y+"Team"].MIL||[];function x(P){return P.reduce((Y,ie)=>Y+We(ie,"MIL"),0)}function b(P){let Y=0;for(let ie=0;ie<P.length-1;ie++){const J=rt(P[ie],P[ie+1]);J==="#00ff88"?Y+=2:J==="#FFD700"&&(Y+=1)}return Y}const h=x(k)+b(k),w=x(u)+b(u),$=h>=w;function z(P,Y,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${Y}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${P.map((J,ue)=>{const be=ue<P.length-1?rt(J,P[ue+1]):null,ye=!be||be==="#ff3333"||be==="#cc2222",Ee=be==="#00ff88"?"+2":be==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ie}" data-idx="${ue}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${renderPlayerCard({...J,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:f.homeStadiumDef||f.stadiumDef||null,role:"MIL",extraNote:J.boost||0})}
            </div>
            ${ue<P.length-1?`<div class="duel-link duel-link-${ie}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":be};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${be}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${be}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ie}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${x(P)} + ${b(P)} liens = <b style="color:#fff">${x(P)+b(P)}</b>
        </div>
      </div>`}Ze(e),e.innerHTML=`
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
      ${z(k,f[m+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${z(u,f[y+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const E=(P,Y)=>e.querySelectorAll(P).forEach((ie,J)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},Y+J*90)});E(".duel-card-me",150),E(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((P,Y)=>setTimeout(()=>{P.style.opacity="1"},Y*70)),900),setTimeout(()=>{const P=e.querySelector("#pvp-vs");P&&(P.style.opacity="1",P.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(Y=>Y.style.opacity="1")},1250);function I(P,Y,ie){const J=document.getElementById(P);if(!J)return;const ue=performance.now(),be=ye=>{const Ee=Math.min(1,(ye-ue)/ie);J.textContent=Math.round(Y*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(be):J.textContent=Y};requestAnimationFrame(be)}setTimeout(()=>{I("pvp-score-me",h,800),I("pvp-score-opp",w,800)},1500);const A=f.p1Team.MIL||[],M=f.p2Team.MIL||[],B=x(A)+b(A),V=x(M)+b(M),Q=B>=V?"p1":"p2";let U=f.boostValue;U==null&&(U=oi(),f.boostValue=U,f.boostOwner=Q,f.boostUsed=!1),ve=!0,setTimeout(()=>{const P=e.querySelector("#duel-row-"+($?"me":"opp")),Y=e.querySelector("#duel-row-"+($?"opp":"me")),ie=document.getElementById("pvp-score-me"),J=document.getElementById("pvp-score-opp"),ue=$?ie:J,be=$?J:ie;ue&&(ue.style.fontSize="80px",ue.style.color=$?"#FFD700":"#ff6b6b",ue.style.animation="duelPulse .5s ease"+($?",duelGlow 1.5s ease infinite .5s":"")),be&&(be.style.opacity="0.25"),setTimeout(()=>{P&&(P.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",P.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),Y&&(Y.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Be;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Ee=f.boostOwner===m?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+U+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",qe=m==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+($?"⚽ "+f[m+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+f[y+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+qe,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Be=document.getElementById("pvp-start-match"))==null||Be.addEventListener("click",async()=>{const Ie=Q;await Z({phase:Ie+"-attack",attacker:Ie,round:1,boostValue:U,boostUsed:!1,boostOwner:Ie})})},600)},700)},2800)}function je(k,u,x,b,h){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const $=Array.from({length:10},(A,M)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${M%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][M%8]}</div>`).join(""),z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};w.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${$}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${b?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${u} – ${x}
      </div>
      ${k!=null&&k.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${k.map(A=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${z[A.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${A.portrait?`<img src="${A.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(A.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(w);let E=!1;const I=()=>{E||(E=!0,w.remove(),setTimeout(()=>h(),50))};w.addEventListener("click",I),setTimeout(I,3500)}function fe(k,u,x){var U,P;const b=(f.gcDefs||[]).find(Y=>{var ie;return Y.name===k||((ie=Y.name)==null?void 0:ie.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",$=(b==null?void 0:b.name)||k,z=(b==null?void 0:b.effect)||((U=Re[k])==null?void 0:U.desc)||"",E=b!=null&&b.image_url?`/icons/${b.image_url}`:null,I=((P=Re[k])==null?void 0:P.icon)||"⚡",M=u===m?"Vous":f[u+"Name"]||"Adversaire",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",B.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${w}66}50%{box-shadow:0 0 60px ${w}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${w};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${M} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${w};background:${h};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${I}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(B);let V=!1;const Q=()=>{V||(V=!0,B.remove(),setTimeout(()=>x&&x(),50))};B.addEventListener("click",Q),setTimeout(Q,3e3)}function me(k,u){var B,V,Q,U;const b=(f["gcCardsFull_"+m]||[]).find(P=>P.id===k),h=b==null?void 0:b._gcDef,w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",z=(h==null?void 0:h.name)||u,E=(h==null?void 0:h.effect)||((B=Re[u])==null?void 0:B.desc)||"Carte spéciale.",I=h!=null&&h.image_url?`/icons/${h.image_url}`:null,A=((V=Re[u])==null?void 0:V.icon)||"⚡",M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",M.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${$};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${$}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${z.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${z}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${A}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(M),(Q=M.querySelector("#pvp-gc-back"))==null||Q.addEventListener("click",()=>M.remove()),(U=M.querySelector("#pvp-gc-use"))==null||U.addEventListener("click",()=>{M.remove(),H(k,u)})}function ge(){var b;const k=f[m+"Team"],u=Object.entries(k).flatMap(([h,w])=>(w||[]).filter($=>!$.used).map($=>({...$,_line:h})));if(!u.length)return;const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",x.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${f.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${u.map(h=>{const w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[h._line]||"#555",$=We(h,h._line)+(h.boost||0);return`<div class="bp-item" data-cid="${h.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${w};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${h.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${$}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(x),(b=x.querySelector("#bp-close"))==null||b.addEventListener("click",()=>x.remove()),x.querySelectorAll(".bp-item").forEach(h=>{h.addEventListener("click",async()=>{const w=h.dataset.cid,$=u.find(E=>E.cardId===w);if(!$)return;const z=(k[$._line]||[]).find(E=>E.cardId===w);z&&(z.boost=(z.boost||0)+f.boostValue),x.remove(),await Z({[m+"Team"]:k,boostUsed:!0})})})}function O(k=null){var V,Q;if(!(f.phase===m+"-attack")){v("Remplacement uniquement avant votre attaque","warning");return}const x=f[m+"Team"],b=f["usedSubIds_"+m]||[],h=f.maxSubs||3;if(b.length>=h){v(`Maximum ${h} remplacements atteint`,"warning");return}const w=Object.entries(x).flatMap(([U,P])=>(P||[]).filter(Y=>Y.used).map(Y=>({...Y,_line:U}))),$=(f[m+"Subs"]||[]).filter(U=>!b.includes(U.cardId));if(!w.length){v("Aucun joueur utilisé à remplacer","warning");return}if(!$.length){v("Aucun remplaçant disponible","warning");return}let z=Math.max(0,w.findIndex(U=>U.cardId===k));const E=((V=w[z])==null?void 0:V._line)||((Q=w[z])==null?void 0:Q.job);let I=Math.max(0,$.findIndex(U=>U.job===E)),A=!1;const M=document.createElement("div");M.id="pvp-sub-overlay",M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function B(){var be,ye,Ee,qe,Be,Ie;const U=w[z],P=$[I],Y=Math.min(130,Math.round((window.innerWidth-90)/2)),ie=Math.round(Y*1.35),J=Me=>`background:rgba(255,255,255,0.12);border:none;color:${Me?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Me?"default":"pointer"};flex-shrink:0`;M.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${b.length}/${h})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${J(I===0)}" ${I===0?"disabled":""}>▲</button>
          <div>${P?Qe({...P,used:!1,boost:0},Y,ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${J(I>=$.length-1)}" ${I>=$.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${I+1}/${$.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${J(z===0)}" ${z===0?"disabled":""}>▲</button>
          <div>${U?Qe({...U,used:!1,boost:0},Y,ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${J(z>=w.length-1)}" ${z>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${z+1}/${w.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(be=M.querySelector("#psub-close"))==null||be.addEventListener("click",()=>M.remove()),(ye=M.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{z>0&&(z--,B())}),(Ee=M.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{z<w.length-1&&(z++,B())}),(qe=M.querySelector("#pin-up"))==null||qe.addEventListener("click",()=>{I>0&&(I--,B())}),(Be=M.querySelector("#pin-down"))==null||Be.addEventListener("click",()=>{I<$.length-1&&(I++,B())});const ue=(Me,Le,Pe,Oe)=>{const Ke=M.querySelector("#"+Me);if(!Ke)return;let He=0;Ke.addEventListener("touchstart",Ne=>{He=Ne.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",Ne=>{const Ge=Ne.changedTouches[0].clientY-He;if(Math.abs(Ge)<30)return;const Ve=Le();Ge<0&&Ve<Oe-1?(Pe(Ve+1),B()):Ge>0&&Ve>0&&(Pe(Ve-1),B())},{passive:!0})};ue("pin-panel",()=>I,Me=>I=Me,$.length),ue("pout-panel",()=>z,Me=>z=Me,w.length),(Ie=M.querySelector("#psub-confirm"))==null||Ie.addEventListener("click",async Me=>{if(Me.preventDefault(),Me.stopPropagation(),A)return;A=!0;const Le=w[z],Pe=$[I];if(!Le||!Pe)return;const Oe=Le._line,Ke=(x[Oe]||[]).findIndex(Ge=>Ge.cardId===Le.cardId);if(Ke===-1){v("Erreur : joueur introuvable","error"),M.remove();return}const He={...Pe,_line:Oe,position:Le.position,used:!1,boost:0};x[Oe].splice(Ke,1,He);const Ne=[...b,Pe.cardId];M.remove(),X(Le,Pe,async()=>{await Z({[m+"Team"]:x,[y+"Team"]:f[y+"Team"],["usedSubIds_"+m]:Ne})})})}document.body.appendChild(M),B()}function X(k,u,x){const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const w=(E,I,A)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${I};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${A}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${b[E.job]||"#555"};border:3px solid ${I};position:relative;overflow:hidden;margin:0 auto">
        ${it(E)?`<img src="${it(E)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(E.name||"").slice(0,12)}</div>
    </div>`;h.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${w(u,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${w(k,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(h);let $=!1;const z=()=>{$||($=!0,h.remove(),setTimeout(()=>x(),50))};h.addEventListener("click",z),setTimeout(z,2200)}function ae(){var u;const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",k.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${f[y+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(f[y+"Team"],f[y+"Formation"],null,[],window.innerWidth>=900?500:300,window.innerWidth>=900?620:300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(k),(u=k.querySelector("#pvp-opp-close"))==null||u.addEventListener("click",()=>k.remove())}function se(){var x;const k=f.log||[],u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",u.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${k.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...k].reverse().map(b=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${b.type==="goal"?"#FFD700":b.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${b.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(u),(x=u.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>u.remove())}async function pe(){if(f.phase!==m+"-attack")return;const k=m==="p1"?"p2":"p1",u=(f.round||0)+1,x=[...f.log||[]];x.push({type:"info",text:`⏭️ ${f[m+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const b=Ce(f),h=ke(k),w=b||!h?"finished":k+"-attack";await Z({["selected_"+m]:[],modifiers:{...f.modifiers,[m]:{}},pendingAttack:null,phase:w,attacker:k,round:u,log:x}),w==="finished"&&await Se(f)}async function ee(){const k=f[m+"Team"],u=!["GK","DEF","MIL","ATT"].some(w=>(f[y+"Team"][w]||[]).some($=>!$.used)),x=(f["selected_"+m]||[]).map(w=>{const $=(k[w._role]||[]).find(Q=>Q.cardId===w.cardId)||w,z=u&&["GK","DEF"].includes(w._role),E=k[w._role]||[],I=E.findIndex(Q=>Q.cardId===w.cardId),A=dt(E.length),M=I>=0?A[I]:$._col??1,B=f.stadiumDef||f.homeStadiumDef||null,V=$.stadiumBonus||B&&(B.club_id&&String($.club_id)===String(B.club_id)||B.country_code&&$.country_code===B.country_code)||!1;return{...$,_line:w._role,_col:M,stadiumBonus:V,...z?{note_a:Math.max(1,Number($.note_a)||0)}:{}}});if(!x.length)return;const b=Ht(x,f.modifiers[m]||{});D(m,x.map(w=>w.cardId)),x.forEach(w=>{const $=(k[w._role]||[]).find(z=>z.cardId===w.cardId);$&&($.used=!0)}),f["selected_"+m]=[],xe();const h=[...f.log||[]];if(u){const w=(f[m+"Score"]||0)+1,$=x.map(M=>fi(M));h.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:$,homeTotal:b.total,aiTotal:0});const z=(f.round||0)+1,E=m==="p1"?"p2":"p1",I={...f,[m+"Team"]:k,[m+"Score"]:w},A=Ce(I);G.add(z),je($,w,f[y+"Score"]||0,!0,async()=>{await Z({[m+"Team"]:k,[m+"Score"]:w,["selected_"+m]:[],modifiers:{...f.modifiers,[m]:{}},pendingAttack:null,phase:A?"finished":E+"-attack",attacker:E,round:z,log:h}),A&&await Se({...f,[m+"Score"]:w})});return}h.push({type:"pending",text:`⚔️ ${f[m+"Name"]} attaque (${b.total})`}),await Z({[m+"Team"]:k,[y+"Team"]:f[y+"Team"],pendingAttack:{...b,players:x,side:m},["selected_"+m]:[],modifiers:{...f.modifiers,[m]:{}},phase:y+"-defense",log:h})}async function de(){const k=f[m+"Team"],u=(f["selected_"+m]||[]).map(U=>{const P=(k[U._role]||[]).find(be=>be.cardId===U.cardId)||U,Y=k[U._role]||[],ie=Y.findIndex(be=>be.cardId===U.cardId),J=dt(Y.length),ue=ie>=0?J[ie]:P._col??1;return{...P,_line:U._role,_col:ue}}),x=Ut(u,f.modifiers[m]||{});D(m,u.map(U=>U.cardId)),u.forEach(U=>{const P=(k[U._role]||[]).find(Y=>Y.cardId===U.cardId);P&&(P.used=!0)}),f["selected_"+m]=[],xe();const b=Kt(f.pendingAttack.total,x.total,f.modifiers[m]||{}),h=f.pendingAttack.side,w=b==="attack"||(b==null?void 0:b.goal),$=h==="p1"?"p2":"p1",z=(f.round||0)+1,E=(f.pendingAttack.players||[]).map(U=>fi(U)),I=[...f.log||[]];I.push({type:"duel",isGoal:w,homeScored:w&&h===m,text:w?`⚽ BUT de ${f[h+"Name"]} ! (${f.pendingAttack.total} vs ${x.total})`:`✋ Attaque stoppée (${f.pendingAttack.total} vs ${x.total})`,homePlayers:E,aiPlayers:u.map(U=>fi(U)),homeTotal:f.pendingAttack.total,aiTotal:x.total});const A=w?(f[h+"Score"]||0)+1:f[h+"Score"]||0,M={...f,[m+"Team"]:k,[h+"Score"]:A},B=Ce(M),V=B?"finished":$+"-attack",Q=async()=>{await Z({[m+"Team"]:k,[y+"Team"]:f[y+"Team"],[h+"Score"]:A,["selected_"+m]:[],modifiers:{...f.modifiers,[m]:{}},pendingAttack:null,phase:V,attacker:$,round:z,log:I}),(V==="finished"||B)&&await Se({...f,[h+"Score"]:A})};if(w){const U=h===m,P=U?A:f[m+"Score"]||0,Y=U?f[y+"Score"]||0:A;G.add(z),je(E,P,Y,U,Q)}else await Q()}function Ae(k){return["MIL","ATT"].some(u=>(k[u]||[]).some(x=>!x.used))}function Te(k){return["GK","DEF","MIL","ATT"].some(u=>(k[u]||[]).some(x=>!x.used))}function ze(k){return Te(k)&&!Ae(k)}function ke(k){const u=f[k+"Team"],x=f[(k==="p1"?"p2":"p1")+"Team"];return!!(Ae(u)||!Te(x)&&ze(u))}function Ce(k){const u=["MIL","ATT"].some(I=>(k.p1Team[I]||[]).some(A=>!A.used)),x=["MIL","ATT"].some(I=>(k.p2Team[I]||[]).some(A=>!A.used)),b=Te(k.p1Team),h=Te(k.p2Team);return!u&&!(!h&&b)&&(!x&&!(!b&&h))}function Fe(k){const u=k.p1Score||0,x=k.p2Score||0;return u===x?null:u>x?l.home_id:l.away_id}async function Se(k){try{const u=Fe(k),x=u?l.home_id===u?l.away_id:l.home_id:null;await S.from("matches").update({status:"finished",winner_id:u,home_score:k.p1Score||0,away_score:k.p2Score||0}).eq("id",i),u&&x&&updateEvolutiveCards(u,x).catch(()=>{})}catch(u){console.error("[PvP] finishMatch:",u)}}function C(){var h;const k=f[m+"Score"],u=f[y+"Score"],x=k>u,b=k===u;Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${x?"🏆":b?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${x?"Victoire !":b?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${k} - ${u}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(h=document.getElementById("pvp-home"))==null||h.addEventListener("click",()=>{try{S.removeChannel(K)}catch{}Ue(e),o("home")})}xe()}const Fo=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:_i,resumePvpMatch:Do},Symbol.toStringTag,{value:"Module"}));function gi(e){var n,d;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+(e.stadiumBonus?10:0),note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((n=e.clubs)==null?void 0:n.encoded_name)||null,clubLogo:e.clubLogo||((d=e.clubs)==null?void 0:d.logo_url)||null,face:e.face||null,portrait:it(e)}}async function Go(e,t,i,n){var d,a;try{const r=(a=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:a.id;try{(S.getChannels?S.getChannels():[]).forEach(p=>{const s=p.topic||"";(s.includes("matchmaking")||s.includes("pvp-match"))&&S.removeChannel(p)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}r&&(await S.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await S.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await ai(e,t,"random",({deckId:r,formation:c,starters:p,subsRaw:s,gcCardsEnriched:o,gcDefs:v,stadiumDef:m})=>{const y=_=>Po(e,t,r,c,p,s,_,v||[],i,n);if(!o.length){y([]);return}ri(e,o,y)})}async function Po(e,t,i,n,d,a,r=[],c=[],p,s){var K;const{state:o,navigate:v,toast:m}=t,y=o.profile.id;let _=!1,g=null;Ze(e);try{await S.rpc("cancel_matchmaking",{p_user_id:y})}catch{}try{await S.from("matchmaking_queue").delete().eq("user_id",y)}catch{}const l=(Z,re,le,te)=>{var H;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">⚽ Match ami</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">vs ${s}</div>
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
            <div style="width:52px;height:52px;border-radius:50%;background:${re?"#1A6B3C":"rgba(255,255,255,0.1)"};display:flex;align-items:center;justify-content:center;font-size:22px;border:2px solid ${re?"#22c55e":"rgba(255,255,255,0.2)"}">
              ${re?"✅":"⏳"}
            </div>
            <div style="font-size:12px;font-weight:700">${s}</div>
            <div style="font-size:11px;color:${re?"#22c55e":"#aaa"}">${re?"Prêt":"En attente"}</div>
          </div>
        </div>
        
        ${!re&&Z?'<div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">En attente de ton ami...</div>':""}
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(H=document.getElementById("lobby-cancel"))==null||H.addEventListener("click",async()=>{_=!0,g&&(S.removeChannel(g),g=null),le&&await S.from("friend_match_invites").update({status:"declined"}).eq("id",le),Ue(e),v("home")})},T=async(Z,re)=>{_=!0,g&&(S.removeChannel(g),g=null),await new Promise(le=>setTimeout(le,600)),e.isConnected&&No(e,t,Z,re,r,c)},{data:f}=await S.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${y},invitee_id.eq.${p}),and(inviter_id.eq.${p},invitee_id.eq.${y})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let L,j;if(f&&f.inviter_id===p)j=!1,L=f.id,await S.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",L);else{j=!0;const{data:Z,error:re}=await S.from("friend_match_invites").insert({inviter_id:y,invitee_id:p,friend_id:p,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(re||!Z){m("Erreur création invitation","error"),Ue(e),v("home");return}L=Z.id}if(l(!0,!j,L),!j){const Z={home_id:p,away_id:y,home_deck_id:f.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},re=await S.from("matches").insert(Z).select().single(),le=re.data;if(!le){m("Erreur création match: "+(((K=re.error)==null?void 0:K.message)||""),"error"),Ue(e),v("home");return}await S.from("friend_match_invites").update({match_id:le.id,status:"matched"}).eq("id",L),T(le.id,!1);return}let F=!1;const G=Z=>{_||F||(Z.status==="matched"&&Z.match_id?(F=!0,clearInterval(q),clearInterval(N),T(Z.match_id,!0)):Z.status==="declined"?(clearInterval(q),clearInterval(N),m(`${s} a décliné l'invitation`,"warning"),Ue(e),v("home")):Z.invitee_ready&&l(!0,!0,L))},q=setInterval(()=>{if(_){clearInterval(q);return}S.from("matchmaking_queue").delete().eq("user_id",y).then(()=>{},()=>{})},3e3),N=setInterval(async()=>{if(_||F){clearInterval(N);return}const{data:Z}=await S.from("friend_match_invites").select("*").eq("id",L).maybeSingle();Z&&G(Z)},1200);g=S.channel("friend-invite-"+L).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${L}`},Z=>G(Z.new)).subscribe()}async function No(e,t,i,n,d=[],a=[]){const{state:r,navigate:c,toast:p}=t,s=n?"p1":"p2",o=n?"p2":"p1",v=(d||[]).map(C=>C.id),m=(d||[]).map(C=>({id:C.id,gc_type:C.gc_type,_gcDef:C._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:y}=await S.from("matches").select("*").eq("id",i).single();if(!y){p("Match introuvable","error"),c("home");return}async function _(){const[{data:C},{data:k},{data:u},{data:x}]=await Promise.all([S.rpc("get_deck_for_match",{p_deck_id:y.home_deck_id}),S.rpc("get_deck_for_match",{p_deck_id:y.away_deck_id}),S.from("users").select("id,pseudo,club_name").eq("id",y.home_id).single(),S.from("users").select("id,pseudo,club_name").eq("id",y.away_id).single()]),b=E=>{const I=Number(E.evolution_bonus)||0;return{cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_real,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:(Number(E.note_g)||0)+(E.job==="GK"||E.job2==="GK"&&Number(E.note_g)>0?I:0),note_d:(Number(E.note_d)||0)+(E.job==="DEF"||E.job2==="DEF"&&Number(E.note_d)>0?I:0),note_m:(Number(E.note_m)||0)+(E.job==="MIL"||E.job2==="MIL"&&Number(E.note_m)>0?I:0),note_a:(Number(E.note_a)||0)+(E.job==="ATT"||E.job2==="ATT"&&Number(E.note_a)>0?I:0),evolution_bonus:I,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,face:E.face||null,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},h=((C==null?void 0:C.starters)||[]).map(E=>b(E)),w=((k==null?void 0:k.starters)||[]).map(E=>b(E)),$=(C==null?void 0:C.formation)||"4-4-2",z=(k==null?void 0:k.formation)||"4-4-2";return{p1Team:(()=>{const E=wt(h,$);return stadiumDef?St(E,stadiumDef):E})(),p2Team:wt(w,z),p1Subs:(()=>{const E=((C==null?void 0:C.subs)||[]).map(I=>b(I));return stadiumDef&&Ct(E,stadiumDef),E})(),p2Subs:((k==null?void 0:k.subs)||[]).map(E=>b(E)),p1Formation:$,p2Formation:z,p1Name:(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"Joueur 1",p2Name:(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?v:[],gc_p2:n?[]:v,gcCardsFull_p1:n?m:[],gcCardsFull_p2:n?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:a||[],lastActionAt:new Date().toISOString()}}let g=y.game_state&&Object.keys(y.game_state).length?y.game_state:null;if(!g)if(n){g=await _();const{data:C}=await S.from("matches").select("game_state").eq("id",i).single();!(C!=null&&C.game_state)||!Object.keys(C.game_state).length?await S.from("matches").update({game_state:g,turn_user_id:y.home_id}).eq("id",i):g=C.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let C=0;C<60&&!g;C++){await new Promise(u=>setTimeout(u,400));const{data:k}=await S.from("matches").select("game_state").eq("id",i).single();k!=null&&k.game_state&&Object.keys(k.game_state).length&&(g=k.game_state)}if(!g){p("Erreur de synchronisation","error"),c("home");return}g.gc_p2=v,g.gcCardsFull_p2=m,await S.from("matches").update({game_state:g}).eq("id",i)}let l=!1,T=!1,f=!1,L=null,j=!1;const F=new Set,G=new Set;function q(C){var E,I;try{S.removeChannel(N)}catch{}const k=g[s+"Score"]||0,u=g[o+"Score"]||0;if(!f){f=!0;const A=C.winner_id||(k>u?r.profile.id:u>k?"opp":null),M=A===r.profile.id?"win":A?"loss":null;M&&ni(()=>Promise.resolve().then(()=>on),void 0).then(B=>B.applyOwnEvolution(r.profile.id,M)).catch(()=>{})}if(!T){const A=g.p1Score||0,M=g.p2Score||0,B=(g.usedGc_p1||[]).length,V=(g.usedGc_p2||[]).length,Q=C.winner_id||(A>M?y.home_id:M>A?y.away_id:null);(Q?r.profile.id===Q:r.profile.id<(n?y.away_id:y.home_id))&&(T=!0,Ji({player1Id:y.home_id,player2Id:y.away_id,score1:A,score2:M,gc1:B,gc2:V}).catch(P=>console.warn("[FriendMatch] updateStats:",P)))}let x,b;C.winner_id?(x=C.winner_id===r.profile.id,b=!1):C.forfeit?(x=k>u,b=!1):(b=k===u,x=k>u),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const h=document.createElement("div");h.id="pvp-end-overlay",h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=b?"🤝":x?"🏆":"😞",$=b?"MATCH NUL":x?"VICTOIRE !":"DÉFAITE",z=b?"#fff":x?"#FFD700":"#ff6b6b";h.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${$}</div>
      <div style="font-size:18px">${g[s+"Name"]} ${k} – ${u} ${g[o+"Name"]}</div>
      ${C.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${x?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(h),(I=h.querySelector("#pvp-end-home"))==null||I.addEventListener("click",()=>{h.remove(),Ue(e),c("home")})}const N=S.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},C=>{const k=C.new;try{if(k.status==="finished"||k.forfeit){if(l)return;l=!0,L&&(clearInterval(L),L=null),k.game_state&&(g=k.game_state),q(k);return}if(k.game_state){const u=g;g=k.game_state;const x=g._lastGC;if(x&&x.seq&&!G.has(x.seq)&&(G.add(x.seq),x.by!==s)){je(x.type,x.by,()=>ne());return}const b=u[s+"Score"]||0,h=u[o+"Score"]||0,w=g[s+"Score"]||0,$=g[o+"Score"]||0,z=w>b,E=$>h;if((z||E)&&!F.has(g.round)){F.add(g.round);const I=[...g.log||[]].reverse().find(M=>M.isGoal),A=((I==null?void 0:I.homePlayers)||[]).map(M=>({name:M.name,note:M.note,portrait:M.portrait,job:M.job}));we(A,w,$,z,()=>ne());return}ne()}}catch(u){console.error("[PvP] crash:",u)}}).subscribe();async function K(C){Object.assign(g,C),g.lastActionAt=new Date().toISOString();const{error:k}=await S.from("matches").update({game_state:g}).eq("id",i);k&&p("Erreur de synchronisation","error");try{ne()}catch(u){console.error("[PvP] renderPvpScreen crash:",u)}}async function Z(){if(l)return;l=!0,L&&(clearInterval(L),L=null);const C=n?y.away_id:y.home_id,k=n?"p2":"p1",u=n?"p1":"p2",x={...g,[k+"Score"]:3,[u+"Score"]:0,phase:"finished"};try{await S.from("matches").update({status:"finished",forfeit:!0,winner_id:C,home_score:x.p1Score||0,away_score:x.p2Score||0,game_state:x}).eq("id",i)}catch{}try{S.removeChannel(N)}catch{}setTimeout(()=>{Ue(e),c("home")},800)}const re={BOOST_STAT:({value:C=1,count:k=1,roles:u=[]},x,b)=>{const h=x[s+"Team"],w=Object.entries(h).filter(([$])=>!u.length||u.includes($)).flatMap(([$,z])=>z.filter(E=>!E.used).map(E=>({...E,_line:$})));if(!w.length){x.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),b(x);return}le(w,k,`Choisir ${k} joueur(s) à booster (+${C})`,$=>{$.forEach(z=>{const E=(h[z._line]||[]).find(I=>I.cardId===z.cardId);E&&(E.boost=(E.boost||0)+C,x.log.push({text:`⚡ +${C} sur ${E.name}`,type:"info"}))}),x[s+"Team"]=h,b(x)})},DEBUFF_STAT:({value:C=1,count:k=1,roles:u=[],target:x="ai"},b,h)=>{const w=x==="home"?s:o,$=b[w+"Team"],z=x==="home"?"allié":"adverse",E=Object.entries($).filter(([I])=>!u.length||u.includes(I)).flatMap(([I,A])=>A.map(M=>({...M,_line:I})));if(!E.length){b.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),h(b);return}le(E,k,`Choisir ${k} joueur(s) ${z}(s) (-${C})`,I=>{I.forEach(A=>{const M=($[A._line]||[]).find(B=>B.cardId===A.cardId);M&&(M.boost=(M.boost||0)-C,b.log.push({text:`🎯 -${C} sur ${M.name}`,type:"info"}))}),b[w+"Team"]=$,h(b)})},GRAY_PLAYER:({count:C=1,roles:k=[],target:u="ai"},x,b)=>{const h=u==="home"?s:o,w=x[h+"Team"],$=u==="home"?"allié":"adverse",z=Object.entries(w).filter(([E])=>!k.length||k.includes(E)).flatMap(([E,I])=>I.filter(A=>!A.used).map(A=>({...A,_line:E})));if(!z.length){x.log.push({text:`❌ Aucun joueur ${$}`,type:"info"}),b(x);return}le(z,C,`Choisir ${C} joueur(s) ${$}(s) à exclure`,E=>{const I="usedCardIds_"+h,A=new Set(x[I]||[]);E.forEach(M=>{const B=(w[M._line]||[]).find(V=>V.cardId===M.cardId);B&&(B.used=!0,A.add(M.cardId),x.log.push({text:`❌ ${B.name} exclu !`,type:"info"}))}),x[I]=[...A],x[h+"Team"]=w,b(x)})},REVIVE_PLAYER:({count:C=1,roles:k=[]},u,x)=>{const b=u[s+"Team"],h=Object.entries(b).filter(([w])=>!k.length||k.includes(w)).flatMap(([w,$])=>$.filter(z=>z.used).map(z=>({...z,_line:w})));if(!h.length){u.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),x(u);return}le(h,C,`Choisir ${C} joueur(s) à ressusciter`,w=>{w.forEach($=>{const z=(b[$._line]||[]).find(E=>E.cardId===$.cardId);z&&(z.used=!1,u.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),u[s+"Team"]=b,x(u)})},REMOVE_GOAL:({},C,k)=>{const u=o+"Score";C[u]>0?(C[u]--,C.log.push({text:"🚫 Dernier but annulé !",type:"info"})):C.log.push({text:"🚫 Aucun but à annuler",type:"info"}),k(C)},ADD_GOAL_DRAW:({},C,k)=>{C[s+"Score"]===C[o+"Score"]?(C[s+"Score"]++,C.log.push({text:"🎯 But bonus !",type:"info"})):C.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),k(C)},ADD_SUB:({value:C=1},k,u)=>{k.maxSubs=(k.maxSubs||3)+C,k.log.push({text:`🔄 +${C} remplacement(s)`,type:"info"}),u(k)},CUSTOM:({},C,k)=>k(C)};function le(C,k,u,x){const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let h=[];function w(){var z,E;const $=C.map(I=>{const A={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",M=We(I,I._line)+(I.boost||0),V=h.find(U=>U.cardId===I.cardId)?"#FFD700":"rgba(255,255,255,0.25)",Q=I.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${V};background:${A};overflow:hidden;cursor:pointer;${Q}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${M}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${I._line}</div>
        </div>`}).join("");b.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${u}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h.length}/${k}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${$}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${h.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${h.length}/${k})
          </button>
        </div>`,(z=b.querySelector("#pp-close"))==null||z.addEventListener("click",()=>b.remove()),b.querySelectorAll(".pp-item").forEach(I=>{I.addEventListener("click",()=>{const A=I.dataset.cid,M=C.find(V=>V.cardId===A),B=h.findIndex(V=>V.cardId===A);M&&(B>-1?h.splice(B,1):h.length<k&&h.push(M),w())})}),(E=b.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{b.remove(),x(h)})}w(),document.body.appendChild(b)}async function te(C,k){const x=(g["gcCardsFull_"+s]||[]).find($=>$.id===C),b=(x==null?void 0:x._gcDef)||(g.gcDefs||[]).find($=>{var z;return $.name===k||((z=$.name)==null?void 0:z.toLowerCase().trim())===(k==null?void 0:k.toLowerCase().trim())}),h=[...g["usedGc_"+s]||[],C],w={type:k,by:s,seq:(g._gcAnimSeq||0)+1};G.add(w.seq),je(k,s,async()=>{if(b!=null&&b.effect_type&&b.effect_type!=="CUSTOM"){const z=re[b.effect_type];if(z){const E={...g};z(b.effect_params||{},E,async I=>{I["usedGc_"+s]=h,I._lastGC=w,I._gcAnimSeq=w.seq,await K(I)});return}}const $={...g};switch(k){case"Remplacement+":$.maxSubs=($.maxSubs||3)+1,$.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=o+"Score";$[z]>0&&($[z]--,$.log.push({text:"🚫 But annulé",type:"info"}));break}}$["usedGc_"+s]=h,$._lastGC=w,$._gcAnimSeq=w.seq,await K($)})}function H(C,k){const u="usedCardIds_"+C,x=new Set(g[u]||[]);k.forEach(b=>x.add(b)),g[u]=[...x]}function D(){for(const C of["p1","p2"]){const k=new Set(g["usedCardIds_"+C]||[]),u=g[C+"Team"];if(u)for(const x of["GK","DEF","MIL","ATT"])(u[x]||[]).forEach(b=>{b.used=k.has(b.cardId)})}}function ne(){var Ge,Ve,nt,ut,ft,gt;if(g.phase==="reveal")return xe();if(g.phase==="midfield")return ve();if(g.phase==="finished")return Se();const C=g[s+"Team"],k=g[o+"Team"];D();const u=g[s+"Score"],x=g[o+"Score"],b=g[s+"Name"],h=g[o+"Name"],w=g.phase===s+"-attack",$=g.phase===s+"-defense",z=Array.isArray(g["selected_"+s])?g["selected_"+s]:[],E=z.map(ce=>ce.cardId),I=window.innerWidth>=700,A=g[s+"Subs"]||[],M=g["usedSubIds_"+s]||[],B=A.filter(ce=>!M.includes(ce.cardId)),V=g["gcCardsFull_"+s]||[],Q=g["usedGc_"+s]||[],U=V.filter(ce=>!Q.includes(ce.id)),P=g.boostOwner===s&&!g.boostUsed,Y=!["GK","DEF","MIL","ATT"].some(ce=>(k[ce]||[]).some(W=>!W.used)),ie=[...C.MIL||[],...C.ATT||[]].filter(ce=>!ce.used),J=w&&Y&&ie.length===0?[...C.GK||[],...C.DEF||[]].filter(ce=>!ce.used).map(ce=>ce.cardId):[];function ue(ce,W,R){var xt,Et;const oe=ce._gcDef,he={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[oe==null?void 0:oe.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$e={purple:"#b06ce0",light_blue:"#00d4ef"}[oe==null?void 0:oe.color]||"#b06ce0",Je=(oe==null?void 0:oe.name)||ce.gc_type,Xe=(oe==null?void 0:oe.effect)||((xt=Re[ce.gc_type])==null?void 0:xt.desc)||"",et=oe!=null&&oe.image_url?`/icons/${oe.image_url}`:null,at=((Et=Re[ce.gc_type])==null?void 0:Et.icon)||"⚡",$t=Math.round(R*.22),kt=Math.round(R*.22),lt=R-$t-kt,mt=Je.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ce.id}" data-gc-type="${ce.gc_type}"
        style="box-sizing:border-box;width:${W}px;height:${R}px;border-radius:10px;border:2px solid ${$e};background:${he};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${$t}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${mt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${W-6}px">${Je}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${et?`<img src="${et}" style="max-width:${W-10}px;max-height:${lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(lt*.55)}px">${at}</span>`}
        </div>
        <div style="height:${kt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Xe.slice(0,38)}</span>
        </div>
      </div>`}function be(ce,W){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ce}px;height:${W}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(W*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(W*.2)}px">⚡</div>
        <div style="font-size:${Math.round(W*.09)}px;color:#000;font-weight:900">+${g.boostValue}</div>
      </div>`}const ye=(ce,W)=>W?be(130,175):ue(ce,130,175),Ee=(ce,W)=>W?be(68,95):ue(ce,68,95),qe=I?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Be=w?ze(s)?`<button id="pvp-action" style="${qe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${qe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:$?`<button id="pvp-action" style="${qe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${h}</div>`,Ie=w&&!ze(s)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||$?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",Me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${I?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${B.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':B.map(ce=>`<div class="pvp-sub-btn" data-sub-id="${ce.cardId}" style="cursor:pointer;flex-shrink:0">${Qe(ce,I?76:44,I?100:58)}</div>`).join("")}
    </div>`,Le=w?"attack":$?"defense":"idle",Pe=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(C,g[s+"Formation"],Le,E,window.innerWidth>=900?500:300,window.innerWidth>=900?620:300,J)}
      </div>
    </div>`;function Oe(ce){if(ce.type==="duel"&&(ce.homeTotal!=null||ce.aiTotal!=null)){const W=(ce.homeTotal||0)>=(ce.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(ce.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ce.homePlayers||[]).map(R=>st(R)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${W?20:14}px;font-weight:900;color:${W?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${ce.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${W?14:20}px;font-weight:900;color:${W?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${ce.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ce.aiPlayers||[]).map(R=>st(R)).join("")}
            </div>
          </div>
          ${ce.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${ce.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${ce.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ce.type==="goal"?700:400};padding:3px 2px">${ce.text||""}</div>`}const Ke=(()=>{var W,R;if($&&((W=g.pendingAttack)!=null&&W.players)){const oe=g.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${h} ATTAQUE — Défendez !</div>
          ${tt((oe.players||[]).map(he=>({...he,used:!1})),"#ff6b6b",oe.total)}
        </div>`}if(w&&((R=g.pendingAttack)!=null&&R.players)){const oe=g.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt((oe.players||[]).map(he=>({...he,used:!1})),"#00ff88",oe.total)}
        </div>`}const ce=(g.log||[]).slice(-1)[0];return ce?'<div style="padding:2px 4px">'+Oe(ce)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),He=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${u} – ${x}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(g.log||[]).length})
      </button>`;Ze(e),e.style.overflow="hidden",I?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${He}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Me}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Pe}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Be}${Ie}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${U.map(ce=>ye(ce,!1)).join("")}
            ${P?ye(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${He}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(C,g[s+"Formation"],Le,E,window.innerWidth>=900?500:300,window.innerWidth>=900?620:300,J)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${U.map(ce=>Ee(ce,!1)).join("")}
            ${P?Ee(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${w&&B.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${w&&B.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${w&&B.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${w&&B.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${B.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(g["usedSubIds_"+s]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(g["usedSubIds_"+s]||[]).length}/${g.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Be}${Ie}</div>
        </div>
      </div>`;function Ne(){const ce=e.querySelector(".match-screen");if(!ce)return;const W=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ce.style.height=W+"px",ce.style.minHeight=W+"px",ce.style.maxHeight=W+"px",ce.style.overflow="hidden";const R=e.querySelector("#mobile-action-bar"),oe=e.querySelector("#mobile-play-area");R&&oe&&(oe.style.paddingBottom=R.offsetHeight+"px")}if(Ne(),setTimeout(Ne,120),setTimeout(Ne,400),j||(j=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ne),window.visualViewport.addEventListener("scroll",Ne)),window.addEventListener("resize",Ne)),function(){const W=e.querySelector(".terrain-wrapper svg");W&&(W.removeAttribute("width"),W.removeAttribute("height"),W.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",W.setAttribute("viewBox","-26 -26 352 352"),W.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ce=>{ce.addEventListener("click",()=>{if(!w&&!$)return;const W=ce.dataset.cardId,R=ce.dataset.role,oe=(C[R]||[]).find(Xe=>Xe.cardId===W);if(!oe||oe.used)return;const he=J.includes(W);if(w&&!["MIL","ATT"].includes(R)&&!he)return;Array.isArray(g["selected_"+s])||(g["selected_"+s]=[]);const $e=g["selected_"+s],Je=$e.findIndex(Xe=>Xe.cardId===W);Je>-1?$e.splice(Je,1):$e.length<3&&$e.push({...oe,_role:R}),ne()})}),e.querySelectorAll(".match-used-hit").forEach(ce=>{ce.addEventListener("click",()=>ge(ce.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ce=>{ce.addEventListener("click",()=>ge())}),(Ge=e.querySelector("#pvp-sub-open"))==null||Ge.addEventListener("click",()=>ge()),e.querySelectorAll(".pvp-gc-mini").forEach(ce=>{ce.addEventListener("click",()=>fe(ce.dataset.gcId,ce.dataset.gcType))}),(Ve=e.querySelector("#pvp-boost-card"))==null||Ve.addEventListener("click",()=>me()),(nt=e.querySelector("#pvp-action"))==null||nt.addEventListener("click",ce=>{w?ce.currentTarget.dataset.pass==="1"||!ze(s)?se():pe():$&&ee()}),(ut=e.querySelector("#pvp-quit"))==null||ut.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>X()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>ae()),L&&(clearInterval(L),L=null),(w||$)&&!l){let ce=30,W=!1;const R=()=>document.getElementById("pvp-timer"),oe=()=>{R()&&(R().textContent=ce+"s",R().style.color=W?"#ff4444":"#fff")};oe(),L=setInterval(()=>{ce--,ce<0?W?(clearInterval(L),L=null,w&&!ze(s)?se():Z()):(W=!0,ce=15,oe()):oe()},1e3)}}function xe(){Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${g[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(g[o+"Team"],g[o+"Formation"],null,[],window.innerWidth>=900?500:300,window.innerWidth>=900?620:300)}</div>
    </div>`,s==="p1"&&setTimeout(async()=>{await K({phase:"midfield"})},5e3)}let _e=!1;function ve(){if(_e)return;const C=g[s+"Team"].MIL||[],k=g[o+"Team"].MIL||[];function u(U){return U.reduce((P,Y)=>P+We(Y,"MIL"),0)}function x(U){let P=0;for(let Y=0;Y<U.length-1;Y++){const ie=rt(U[Y],U[Y+1]);ie==="#00ff88"?P+=2:ie==="#FFD700"&&(P+=1)}return P}const b=u(C)+x(C),h=u(k)+x(k),w=b>=h;function $(U,P,Y){return`<div id="duel-row-${Y}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${P}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${U.map((ie,J)=>{const ue=J<U.length-1?rt(ie,U[J+1]):null,be=!ue||ue==="#ff3333"||ue==="#cc2222",ye=ue==="#00ff88"?"+2":ue==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Y}" data-idx="${J}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${renderPlayerCard({...ie,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:g.homeStadiumDef||g.stadiumDef||null,role:"MIL",extraNote:ie.boost||0})}
            </div>
            ${J<U.length-1?`<div class="duel-link duel-link-${Y}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":ue};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${ue}`}">
              ${ye?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ue}">${ye}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Y}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${u(U)} + ${x(U)} liens = <b style="color:#fff">${u(U)+x(U)}</b>
        </div>
      </div>`}Ze(e),e.innerHTML=`
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
      ${$(C,g[s+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${$(k,g[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(U,P)=>e.querySelectorAll(U).forEach((Y,ie)=>{setTimeout(()=>{Y.style.opacity="1",Y.style.transform="translateY(0) scale(1)"},P+ie*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((U,P)=>setTimeout(()=>{U.style.opacity="1"},P*70)),900),setTimeout(()=>{const U=e.querySelector("#pvp-vs");U&&(U.style.opacity="1",U.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(P=>P.style.opacity="1")},1250);function E(U,P,Y){const ie=document.getElementById(U);if(!ie)return;const J=performance.now(),ue=be=>{const ye=Math.min(1,(be-J)/Y);ie.textContent=Math.round(P*(1-Math.pow(1-ye,3))),ye<1?requestAnimationFrame(ue):ie.textContent=P};requestAnimationFrame(ue)}setTimeout(()=>{E("pvp-score-me",b,800),E("pvp-score-opp",h,800)},1500);const I=g.p1Team.MIL||[],A=g.p2Team.MIL||[],M=u(I)+x(I),B=u(A)+x(A),V=M>=B?"p1":"p2";let Q=g.boostValue;Q==null&&(Q=oi(),g.boostValue=Q,g.boostOwner=V,g.boostUsed=!1),_e=!0,setTimeout(()=>{const U=e.querySelector("#duel-row-"+(w?"me":"opp")),P=e.querySelector("#duel-row-"+(w?"opp":"me")),Y=document.getElementById("pvp-score-me"),ie=document.getElementById("pvp-score-opp"),J=w?Y:ie,ue=w?ie:Y;J&&(J.style.fontSize="80px",J.style.color=w?"#FFD700":"#ff6b6b",J.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),ue&&(ue.style.opacity="0.25"),setTimeout(()=>{U&&(U.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",U.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),P&&(P.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var qe;const be=document.getElementById("pvp-duel-finale");if(!be)return;const ye=g.boostOwner===s?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+Q+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ee=s==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+g[s+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+g[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ye+Ee,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(qe=document.getElementById("pvp-start-match"))==null||qe.addEventListener("click",async()=>{const Be=V;await K({phase:Be+"-attack",attacker:Be,round:1,boostValue:Q,boostUsed:!1,boostOwner:Be})})},600)},700)},2800)}function we(C,k,u,x,b){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(I,A)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${A%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][A%8]}</div>`).join(""),$={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};h.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
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
      ${C!=null&&C.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${C.map(I=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${$[I.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${I.portrait?`<img src="${I.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(I.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(h);let z=!1;const E=()=>{z||(z=!0,h.remove(),setTimeout(()=>b(),50))};h.addEventListener("click",E),setTimeout(E,3500)}function je(C,k,u){var Q,U;const x=(g.gcDefs||[]).find(P=>{var Y;return P.name===C||((Y=P.name)==null?void 0:Y.toLowerCase().trim())===(C==null?void 0:C.toLowerCase().trim())}),b={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[x==null?void 0:x.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[x==null?void 0:x.color]||"#b06ce0",w=(x==null?void 0:x.name)||C,$=(x==null?void 0:x.effect)||((Q=Re[C])==null?void 0:Q.desc)||"",z=x!=null&&x.image_url?`/icons/${x.image_url}`:null,E=((U=Re[C])==null?void 0:U.icon)||"⚡",A=k===s?"Vous":g[k+"Name"]||"Adversaire",M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",M.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${h}66}50%{box-shadow:0 0 60px ${h}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${h};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${A} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${h};background:${b};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${z?`<img src="${z}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${E}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${$}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(M);let B=!1;const V=()=>{B||(B=!0,M.remove(),setTimeout(()=>u&&u(),50))};M.addEventListener("click",V),setTimeout(V,3e3)}function fe(C,k){var M,B,V,Q;const x=(g["gcCardsFull_"+s]||[]).find(U=>U.id===C),b=x==null?void 0:x._gcDef,h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",$=(b==null?void 0:b.name)||k,z=(b==null?void 0:b.effect)||((M=Re[k])==null?void 0:M.desc)||"Carte spéciale.",E=b!=null&&b.image_url?`/icons/${b.image_url}`:null,I=((B=Re[k])==null?void 0:B.icon)||"⚡",A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",A.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${h};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${$.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${$}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${I}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(A),(V=A.querySelector("#pvp-gc-back"))==null||V.addEventListener("click",()=>A.remove()),(Q=A.querySelector("#pvp-gc-use"))==null||Q.addEventListener("click",()=>{A.remove(),te(C,k)})}function me(){var x;const C=g[s+"Team"],k=Object.entries(C).flatMap(([b,h])=>(h||[]).filter(w=>!w.used).map(w=>({...w,_line:b})));if(!k.length)return;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",u.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${g.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${k.map(b=>{const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[b._line]||"#555",w=We(b,b._line)+(b.boost||0);return`<div class="bp-item" data-cid="${b.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${h};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${b.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(u),(x=u.querySelector("#bp-close"))==null||x.addEventListener("click",()=>u.remove()),u.querySelectorAll(".bp-item").forEach(b=>{b.addEventListener("click",async()=>{const h=b.dataset.cid,w=k.find(z=>z.cardId===h);if(!w)return;const $=(C[w._line]||[]).find(z=>z.cardId===h);$&&($.boost=($.boost||0)+g.boostValue),u.remove(),await K({[s+"Team"]:C,boostUsed:!0})})})}function ge(C=null){var B,V;if(!(g.phase===s+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const u=g[s+"Team"],x=g["usedSubIds_"+s]||[],b=g.maxSubs||3;if(x.length>=b){p(`Maximum ${b} remplacements atteint`,"warning");return}const h=Object.entries(u).flatMap(([Q,U])=>(U||[]).filter(P=>P.used).map(P=>({...P,_line:Q}))),w=(g[s+"Subs"]||[]).filter(Q=>!x.includes(Q.cardId));if(!h.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){p("Aucun remplaçant disponible","warning");return}let $=Math.max(0,h.findIndex(Q=>Q.cardId===C));const z=((B=h[$])==null?void 0:B._line)||((V=h[$])==null?void 0:V.job);let E=Math.max(0,w.findIndex(Q=>Q.job===z)),I=!1;const A=document.createElement("div");A.id="pvp-sub-overlay",A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function M(){var ue,be,ye,Ee,qe,Be;const Q=h[$],U=w[E],P=Math.min(130,Math.round((window.innerWidth-90)/2)),Y=Math.round(P*1.35),ie=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;A.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${x.length}/${b})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ie(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${U?Qe({...U,used:!1,boost:0},P,Y):"<div>—</div>"}</div>
          <button id="pin-down" style="${ie(E>=w.length-1)}" ${E>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ie($===0)}" ${$===0?"disabled":""}>▲</button>
          <div>${Q?Qe({...Q,used:!1,boost:0},P,Y):"<div>—</div>"}</div>
          <button id="pout-down" style="${ie($>=h.length-1)}" ${$>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${$+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ue=A.querySelector("#psub-close"))==null||ue.addEventListener("click",()=>A.remove()),(be=A.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{$>0&&($--,M())}),(ye=A.querySelector("#pout-down"))==null||ye.addEventListener("click",()=>{$<h.length-1&&($++,M())}),(Ee=A.querySelector("#pin-up"))==null||Ee.addEventListener("click",()=>{E>0&&(E--,M())}),(qe=A.querySelector("#pin-down"))==null||qe.addEventListener("click",()=>{E<w.length-1&&(E++,M())});const J=(Ie,Me,Le,Pe)=>{const Oe=A.querySelector("#"+Ie);if(!Oe)return;let Ke=0;Oe.addEventListener("touchstart",He=>{Ke=He.touches[0].clientY},{passive:!0}),Oe.addEventListener("touchend",He=>{const Ne=He.changedTouches[0].clientY-Ke;if(Math.abs(Ne)<30)return;const Ge=Me();Ne<0&&Ge<Pe-1?(Le(Ge+1),M()):Ne>0&&Ge>0&&(Le(Ge-1),M())},{passive:!0})};J("pin-panel",()=>E,Ie=>E=Ie,w.length),J("pout-panel",()=>$,Ie=>$=Ie,h.length),(Be=A.querySelector("#psub-confirm"))==null||Be.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),I)return;I=!0;const Me=h[$],Le=w[E];if(!Me||!Le)return;const Pe=Me._line,Oe=(u[Pe]||[]).findIndex(Ne=>Ne.cardId===Me.cardId);if(Oe===-1){p("Erreur : joueur introuvable","error"),A.remove();return}const Ke={...Le,_line:Pe,position:Me.position,used:!1,boost:0};u[Pe].splice(Oe,1,Ke);const He=[...x,Le.cardId];A.remove(),O(Me,Le,async()=>{await K({[s+"Team"]:u,[o+"Team"]:g[o+"Team"],["usedSubIds_"+s]:He})})})}document.body.appendChild(A),M()}function O(C,k,u){const x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const h=(z,E,I)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${I}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${x[z.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${it(z)?`<img src="${it(z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(z.name||"").slice(0,12)}</div>
    </div>`;b.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${h(k,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${h(C,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(b);let w=!1;const $=()=>{w||(w=!0,b.remove(),setTimeout(()=>u(),50))};b.addEventListener("click",$),setTimeout($,2200)}function X(){var k;const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",C.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${g[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(g[o+"Team"],g[o+"Formation"],null,[],window.innerWidth>=900?500:300,window.innerWidth>=900?620:300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(C),(k=C.querySelector("#pvp-opp-close"))==null||k.addEventListener("click",()=>C.remove())}function ae(){var x;const C=g.log||[],k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const u=b=>{var w,$,z;if(b.type==="duel"){const E=b.isGoal,I=b.homeScored&&s==="p1"||!b.homeScored&&E&&s==="p2",A=b.homeScored?"#FFD700":E?"#ff6b6b":"rgba(255,255,255,0.3)",M=E?I?"⚽ BUT !":"⚽ BUT adversaire !":(w=b.homePlayers)!=null&&w.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${E?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${A};margin-bottom:4px">
          <div style="font-size:9px;color:${A};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${M}</div>
          ${($=b.homePlayers)!=null&&$.length?`<div style="margin-bottom:3px">${tt(b.homePlayers,"rgba(255,255,255,0.7)",b.homeTotal)}</div>`:""}
          ${(z=b.aiPlayers)!=null&&z.length?`<div style="opacity:0.7">${tt(b.aiPlayers,"#ff6b6b",b.aiTotal)}</div>`:""}
        </div>`}return b.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${b.outPlayer?Qe({...b.outPlayer,used:!0,_line:b.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${b.inPlayer?Qe({...b.inPlayer,_line:b.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${b.type==="goal"?"#FFD700":b.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${b.text||""}</div>
      </div>`};k.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${C.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...C].reverse().map(u).join("")}
      </div>`,document.body.appendChild(k),(x=k.querySelector("#pvp-hist-close"))==null||x.addEventListener("click",()=>k.remove())}async function se(){if(g.phase!==s+"-attack")return;const C=s==="p1"?"p2":"p1",k=(g.round||0)+1,u=[...g.log||[]];u.push({type:"info",text:`⏭️ ${g[s+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const x=ke(g),b=ze(C),h=x||!b?"finished":C+"-attack";await K({["selected_"+s]:[],modifiers:{...g.modifiers,[s]:{}},pendingAttack:null,phase:h,attacker:C,round:k,log:u}),h==="finished"&&await Fe(g)}async function pe(){const C=g[s+"Team"],k=!["GK","DEF","MIL","ATT"].some(h=>(g[o+"Team"][h]||[]).some(w=>!w.used)),u=(g["selected_"+s]||[]).map(h=>{const w=(C[h._role]||[]).find(M=>M.cardId===h.cardId)||h,$=k&&["GK","DEF"].includes(h._role),z=C[h._role]||[],E=z.findIndex(M=>M.cardId===h.cardId),I=dt(z.length),A=E>=0?I[E]:w._col??1;return{...w,_line:h._role,_col:A,...$?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!u.length)return;const x=Ht(u,g.modifiers[s]||{});H(s,u.map(h=>h.cardId)),u.forEach(h=>{const w=(C[h._role]||[]).find($=>$.cardId===h.cardId);w&&(w.used=!0)}),g["selected_"+s]=[],ne();const b=[...g.log||[]];if(k){const h=(g[s+"Score"]||0)+1,w=u.map(A=>gi(A));b.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:x.total,aiTotal:0});const $=(g.round||0)+1,z=s==="p1"?"p2":"p1",E={...g,[s+"Team"]:C,[s+"Score"]:h},I=ke(E);F.add($),we(w,h,g[o+"Score"]||0,!0,async()=>{await K({[s+"Team"]:C,[s+"Score"]:h,["selected_"+s]:[],modifiers:{...g.modifiers,[s]:{}},pendingAttack:null,phase:I?"finished":z+"-attack",attacker:z,round:$,log:b}),I&&await Fe({...g,[s+"Score"]:h})});return}b.push({type:"pending",text:`⚔️ ${g[s+"Name"]} attaque (${x.total})`}),await K({[s+"Team"]:C,[o+"Team"]:g[o+"Team"],pendingAttack:{...x,players:u,side:s},["selected_"+s]:[],modifiers:{...g.modifiers,[s]:{}},phase:o+"-defense",log:b})}async function ee(){const C=g[s+"Team"],k=(g["selected_"+s]||[]).map(Q=>{const U=(C[Q._role]||[]).find(ue=>ue.cardId===Q.cardId)||Q,P=C[Q._role]||[],Y=P.findIndex(ue=>ue.cardId===Q.cardId),ie=dt(P.length),J=Y>=0?ie[Y]:U._col??1;return{...U,_line:Q._role,_col:J}}),u=Ut(k,g.modifiers[s]||{});H(s,k.map(Q=>Q.cardId)),k.forEach(Q=>{const U=(C[Q._role]||[]).find(P=>P.cardId===Q.cardId);U&&(U.used=!0)}),g["selected_"+s]=[],ne();const x=Kt(g.pendingAttack.total,u.total,g.modifiers[s]||{}),b=g.pendingAttack.side,h=x==="attack"||(x==null?void 0:x.goal),w=b==="p1"?"p2":"p1",$=(g.round||0)+1,z=(g.pendingAttack.players||[]).map(Q=>gi(Q)),E=[...g.log||[]];E.push({type:"duel",isGoal:h,homeScored:h&&b===s,text:h?`⚽ BUT de ${g[b+"Name"]} ! (${g.pendingAttack.total} vs ${u.total})`:`✋ Attaque stoppée (${g.pendingAttack.total} vs ${u.total})`,homePlayers:z,aiPlayers:k.map(Q=>gi(Q)),homeTotal:g.pendingAttack.total,aiTotal:u.total});const I=h?(g[b+"Score"]||0)+1:g[b+"Score"]||0,A={...g,[s+"Team"]:C,[b+"Score"]:I},M=ke(A),B=M?"finished":w+"-attack",V=async()=>{await K({[s+"Team"]:C,[o+"Team"]:g[o+"Team"],[b+"Score"]:I,["selected_"+s]:[],modifiers:{...g.modifiers,[s]:{}},pendingAttack:null,phase:B,attacker:w,round:$,log:E}),(B==="finished"||M)&&await Fe({...g,[b+"Score"]:I})};if(h){const Q=b===s,U=Q?I:g[s+"Score"]||0,P=Q?g[o+"Score"]||0:I;F.add($),we(z,U,P,Q,V)}else await V()}function de(C){return["MIL","ATT"].some(k=>(C[k]||[]).some(u=>!u.used))}function Ae(C){return["GK","DEF","MIL","ATT"].some(k=>(C[k]||[]).some(u=>!u.used))}function Te(C){return Ae(C)&&!de(C)}function ze(C){const k=g[C+"Team"],u=g[(C==="p1"?"p2":"p1")+"Team"];return!!(de(k)||!Ae(u)&&Te(k))}function ke(C){const k=["MIL","ATT"].some(E=>(C.p1Team[E]||[]).some(I=>!I.used)),u=["MIL","ATT"].some(E=>(C.p2Team[E]||[]).some(I=>!I.used)),x=Ae(C.p1Team),b=Ae(C.p2Team);return!k&&!(!b&&x)&&(!u&&!(!x&&b))}function Ce(C){const k=C.p1Score||0,u=C.p2Score||0;return k===u?null:k>u?y.home_id:y.away_id}async function Fe(C){try{const k=Ce(C),u=k?y.home_id===k?y.away_id:y.home_id:null;await S.from("matches").update({status:"finished",winner_id:k,home_score:C.p1Score||0,away_score:C.p2Score||0}).eq("id",i),k&&u&&Ai(k,u).catch(()=>{})}catch(k){console.error("[PvP] finishMatch:",k)}}function Se(){var b;const C=g[s+"Score"],k=g[o+"Score"],u=C>k,x=C===k;Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${u?"🏆":x?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${u?"Victoire !":x?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${C} - ${k}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(b=document.getElementById("pvp-home"))==null||b.addEventListener("click",()=>{try{S.removeChannel(N)}catch{}Ue(e),c("home")})}ne()}const Mt="#1A6B3C",yt="#D4A017";async function Ro(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await _t(e,t,i);return}await zt(e,t)}async function zt(e,t,i="waiting"){var T;const{state:n}=t,d=n.profile.id,{data:a}=await S.from("mini_league_members").select("league_id").eq("user_id",d),r=(a||[]).map(f=>f.league_id),{data:c,error:p}=await S.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),s=p?(await S.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:c||[],v=(r.length?await S.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],m=v.filter(f=>f.status==="waiting"&&!f.is_archived),y=v.filter(f=>f.status==="active"&&!f.is_archived),_=v.filter(f=>f.is_archived||f.status==="finished"),g=s.filter(f=>!r.includes(f.id)),l=[{key:"waiting",label:"🟡 En attente",count:m.length+g.length},{key:"active",label:"🟢 En cours",count:y.length},{key:"archived",label:"📁 Archivées",count:_.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${l.map(f=>`<button class="ml-tab" data-tab="${f.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===f.key?Mt:"transparent"};background:none;font-size:12px;font-weight:${i===f.key?"900":"600"};color:${i===f.key?Mt:"#888"};cursor:pointer">${f.label}${f.count?` (${f.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Oo(m,g,d):i==="active"?Ho(y,d):Uo(_,d)}
    </div>
  </div>`,(T=document.getElementById("ml-create-btn"))==null||T.addEventListener("click",()=>Ko(e,t)),e.querySelectorAll(".ml-tab").forEach(f=>f.addEventListener("click",()=>zt(e,t,f.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(f=>f.addEventListener("click",()=>_t(e,t,f.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(f=>f.addEventListener("click",L=>{L.stopPropagation(),gn(e,t,f.dataset.join,f.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(f=>f.addEventListener("click",L=>{L.stopPropagation(),$i(e,t,f.dataset.delete,f.dataset.name,i)}))}function ii(e,t,i=!1){var r,c;const n=e.creator_id===t,d=e.pot||0,a=((c=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:c.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${n?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${a}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${d>0?`<span style="color:${yt};font-weight:700">🏆 ${d.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function Oo(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(d=>ii(d,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(d=>ii(d,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Ho(e,t){return e.length?e.map(i=>ii(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Uo(e,t){return e.length?e.map(i=>ii(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Ko(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var _,g,l,T;const{toast:n}=t,d=document.getElementById("ml-name").value.trim(),a=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,c=((_=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:_.value)||"public",p=((g=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:g.value)||"aller",s=((T=(l=document.getElementById("ml-pwd"))==null?void 0:l.value)==null?void 0:T.trim())||null;if(!d){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(c==="private"&&!s){n("Mot de passe requis","error");return}const{data:o,error:v}=await S.from("mini_leagues").insert({name:d,creator_id:t.state.profile.id,type:c,password:s,mode:p,max_players:a,entry_fee:r}).select().single();if(v){n("Erreur : "+v.message,"error");return}const{data:m}=await S.from("users").select("credits").eq("id",t.state.profile.id).single();if(((m==null?void 0:m.credits)||0)<r){await S.from("mini_leagues").delete().eq("id",o.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await S.from("users").update({credits:m.credits-r}).eq("id",t.state.profile.id),await S.from("mini_leagues").update({pot:r}).eq("id",o.id),await S.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=m.credits-r);const y=document.getElementById("nav-credits");y&&(y.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),_t(e,t,o.id)})}function Vo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=d=>{t.remove(),e(d)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",d=>{d.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",d=>{d.target===t&&n(null)})})}async function gn(e,t,i,n){const{toast:d,state:a}=t,r=a.profile.id,{data:c}=await S.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!c){d("Mini League introuvable","error");return}if(c.status!=="waiting"){d("Cette Mini League a déjà démarré","warning");return}const{count:p}=await S.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(p>=c.max_players){d("La Mini League est complète","warning");return}if(n==="private"){const g=await Vo();if(g===null)return;if(c.password!==g){d("Mot de passe incorrect","error");return}}const s=c.entry_fee||100,{data:o}=await S.from("users").select("credits").eq("id",r).single();if(((o==null?void 0:o.credits)||0)<s){d(`Crédits insuffisants — il te faut ${s.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:v}=await S.from("mini_league_members").insert({league_id:i,user_id:r});if(v){d("Erreur inscription : "+v.message,"error");return}const{error:m}=await S.from("users").update({credits:o.credits-s}).eq("id",r),{error:y}=await S.from("mini_leagues").update({pot:(c.pot||0)+s}).eq("id",i);(m||y)&&console.error("Erreur post-inscription:",m,y),a.profile&&(a.profile.credits=o.credits-s);const _=document.getElementById("nav-credits");_&&(_.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),d(`✅ Inscrit ! −${s.toLocaleString("fr")} cr. · Pot : ${((c.pot||0)+s).toLocaleString("fr")} cr.`,"success"),_t(e,t,i)}async function Yo(e,t,i,n){const{toast:d,state:a}=t,r=a.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:c}=await S.from("mini_leagues").select("pot,status").eq("id",i).single();if(!c||c.status!=="waiting"){d("Impossible — la league a déjà démarré","error");return}const{data:p}=await S.from("users").select("credits").eq("id",r).single();await S.from("mini_leagues").update({pot:Math.max(0,(c.pot||0)-n)}).eq("id",i),await S.from("users").update({credits:((p==null?void 0:p.credits)||0)+n}).eq("id",r),await S.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),a.profile&&(a.profile.credits=((p==null?void 0:p.credits)||0)+n);const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),d(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),zt(e,t,"waiting")}async function $i(e,t,i,n,d){const{toast:a}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await S.from("mini_league_matches").delete().eq("league_id",i),await S.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await S.from("mini_leagues").delete().eq("id",i);if(r){a("Erreur suppression ("+r.message+")","error");return}a("Mini League supprimée avec succès","success"),zt(e,t,d)}async function Wo(e,t,i){await S.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),zt(e,t,"archived")}async function _t(e,t,i){var j,F,G,q,N,K,Z,re,le;const{state:n,toast:d}=t,a=n.profile.id,[{data:r},{data:c},{data:p}]=await Promise.all([S.from("mini_leagues").select("*").eq("id",i).single(),S.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),S.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){d("Introuvable","error"),await zt(e,t);return}const s=(c||[]).some(te=>te.user_id===a),o=r.creator_id===a,v=(c||[]).map(te=>te.user).filter(Boolean),m=xn(v,p||[]),y=(p||[]).filter(te=>te.matchday===r.current_day),_=r.pot||0,g=r.entry_fee||100,l=y.length>0&&y.every(te=>te.status==="finished"||te.status==="bye"),T=r.current_day>=r.total_days,f=(c||[]).find(te=>te.user_id===a);e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;gap:10px">
      <button id="ml-back" style="background:none;border:none;font-size:20px;cursor:pointer">‹</button>
      <div style="flex:1">
        <div style="font-size:16px;font-weight:900">${r.name}</div>
        <div style="font-size:11px;color:#888">${r.mode==="aller-retour"?"Aller-Retour":"Aller"} · max ${r.max_players} · 💰 ${g} cr./joueur</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;background:${r.status==="active"?"#d1fae5":r.status==="finished"?"#f3e8ff":"#fef9c3"};color:${r.status==="active"?"#166534":r.status==="finished"?"#6b21a8":"#854d0e"}">
          ${r.status==="waiting"?"En attente":r.status==="active"?`J${r.current_day}/${r.total_days}`:"Terminée"}
        </div>
        ${_>0?`<div style="font-size:12px;font-weight:900;color:${yt};margin-top:4px">🏆 ${_.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${v.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${g} cr./joueur → Pot estimé : ${(g*v.length).toLocaleString("fr")} cr. (🥇${Math.floor(g*v.length*.7).toLocaleString("fr")} · 🥈${Math.floor(g*v.length*.2).toLocaleString("fr")} · 🥉${Math.floor(g*v.length*.1).toLocaleString("fr")})</div>
        ${v.map(te=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${te.club_color2||Mt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${te.club_color1||"#fff"}">${(te.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${te.club_name||te.pseudo}</div><div style="font-size:11px;color:#999">@${te.pseudo}</div></div>
            ${te.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${o&&v.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${g} cr. × ${v.length})</button>`:""}
        ${o?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${g} cr.)</button>`}
        ${s&&!o?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${g.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${y.map(te=>Hi(te,v,a,s)).join("")}
        ${o&&l&&!T?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&l&&T?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&m.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${_>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${yt}">💰</th>`:""}
          </tr></thead>
          <tbody>${m.map((te,H)=>{const D=_>0&&r.status==="finished"?H===0?Math.floor(_*.7):H===1?Math.floor(_*.2):H===2?Math.floor(_*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${te.userId===a?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${H===0?yt:H<3?Mt:"#555"}">${["🥇","🥈","🥉"][H]||H+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${te.clubName}</div><div style="font-size:10px;color:#999">@${te.pseudo}</div></td>
              <td style="text-align:center">${te.played}</td><td style="text-align:center">${te.won}-${te.drawn}-${te.lost}</td>
              <td style="text-align:center;color:${te.goalDiff>=0?Mt:"#cc2222"}">${te.goalDiff>=0?"+":""}${te.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${te.points}</td>
              ${_>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${yt}">${D?D.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(te,H)=>H+1).reverse().map(te=>{const H=(p||[]).filter(D=>D.matchday===te);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${te}</div>${H.map(D=>Hi(D,v,a,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const L=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((j=document.getElementById("ml-back"))==null||j.addEventListener("click",()=>zt(e,t,L)),(F=document.getElementById("ml-start-btn"))==null||F.addEventListener("click",()=>Jo(e,t,r,v)),(G=document.getElementById("ml-next-day"))==null||G.addEventListener("click",()=>Xo(e,t,i)),(q=document.getElementById("ml-finish-btn"))==null||q.addEventListener("click",()=>mn(e,t,i,_,m,v)),(N=document.getElementById("ml-join-now"))==null||N.addEventListener("click",()=>gn(e,t,i,r.type)),(K=document.getElementById("ml-leave-btn"))==null||K.addEventListener("click",()=>Yo(e,t,i,g)),(Z=document.getElementById("ml-delete-btn"))==null||Z.addEventListener("click",()=>$i(e,t,i,r.name,"waiting")),(re=document.getElementById("ml-delete-now"))==null||re.addEventListener("click",()=>$i(e,t,i,r.name,L)),(le=document.getElementById("ml-archive-btn"))==null||le.addEventListener("click",()=>Wo(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(te=>{te.addEventListener("click",()=>{const H=y.find(D=>D.id===te.dataset.playMatch);H&&t.navigate("match-mini-league",{mlMatchId:H.id,leagueId:i})})}),r.status==="finished"&&f){const te=m.findIndex(H=>H.userId===a);te>=0&&te<3&&f.prize_amount>0&&setTimeout(()=>Qo(e,t,r,f,te),400)}}function Hi(e,t,i,n,d=!1){const a=v=>t.find(m=>m.id===v);if(e.is_bye){const v=a(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(v==null?void 0:v.club_name)||(v==null?void 0:v.pseudo)||"?"} exempté(e)</div>`}const r=a(e.home_id),c=a(e.away_id),p=e.home_id===i||e.away_id===i,s=p&&e.status==="pending"&&n&&!d,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${p?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${p?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?Mt:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(c==null?void 0:c.club_name)||(c==null?void 0:c.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Jo(e,t,i,n){const{toast:d,state:a}=t,r=Zo(n.map(s=>s.id),i.mode),c=[];r.forEach((s,o)=>s.forEach(v=>c.push({league_id:i.id,matchday:o+1,home_id:v.home||v.bye,away_id:v.away||null,is_bye:!!v.bye,status:v.bye?"bye":"pending"})));const{error:p}=await S.from("mini_league_matches").insert(c);if(p){d("Erreur calendrier : "+p.message,"error");return}await S.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),d(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),_t(e,t,i.id)}async function Xo(e,t,i){const{data:n}=await S.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),d=(n.current_day||0)+1;if(d>(n.total_days||0)){await mn(e,t,i,n.pot||0,null,null);return}await S.from("mini_leagues").update({current_day:d}).eq("id",i),t.toast(`Journée ${d} commencée !`,"success"),_t(e,t,i)}async function mn(e,t,i,n,d,a){const{toast:r,state:c}=t;let p=d,s=a;if(!p){const{data:v}=await S.from("mini_league_matches").select("*").eq("league_id",i),{data:m}=await S.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);s=(m||[]).map(y=>y.user).filter(Boolean),p=xn(s,v||[])}const o=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(p.slice(0,3).map((v,m)=>o[m]?S.from("mini_league_members").update({prize_amount:o[m],prize_claimed:!1}).eq("league_id",i).eq("user_id",v.userId):Promise.resolve())),await S.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),_t(e,t,i)}async function Qo(e,t,i,n,d){var m,y;const{state:a,toast:r}=t,c=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],p=["🥇","🥈","🥉"][d],s=n.prize_amount||c[d]||0,o=n.prize_claimed,v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",v.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${p}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${d===0?"Champion !":d===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${yt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${o?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${yt}">${s.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${d===0?"70%":d===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${o?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${yt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${s.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(v),(m=v.querySelector("#prize-close"))==null||m.addEventListener("click",()=>v.remove()),v.addEventListener("click",_=>{_.target===v&&v.remove()}),(y=v.querySelector("#claim-prize-btn"))==null||y.addEventListener("click",async()=>{const{data:_}=await S.from("users").select("credits").eq("id",a.profile.id).single();await S.from("users").update({credits:((_==null?void 0:_.credits)||0)+s}).eq("id",a.profile.id),await S.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",a.profile.id),a.profile&&(a.profile.credits=((_==null?void 0:_.credits)||0)+s);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${a.profile.credits.toLocaleString("fr")}`),r(`💰 +${s.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),v.remove(),_t(e,t,i.id)})}function Zo(e,t){const n=e.length%2===0?[...e]:[...e,null],d=n.length;let a=n.slice(1);const r=[];for(let c=0;c<d-1;c++){const p=[],s=[n[0],...a];for(let o=0;o<d/2;o++){const v=s[o],m=s[d-1-o];v===null?p.push({bye:m}):m===null?p.push({bye:v}):p.push({home:v,away:m})}r.push(p),a=[a[a.length-1],...a.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(c=>c.map(p=>p.bye?p:{home:p.away,away:p.home}))]:r}function xn(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const d=i[n.home_id],a=i[n.away_id];!d||!a||(d.played++,a.played++,d.goalsFor+=n.home_score,d.goalsAgainst+=n.away_score,a.goalsFor+=n.away_score,a.goalsAgainst+=n.home_score,n.home_score>n.away_score?(d.won++,d.points+=3,a.lost++):n.home_score<n.away_score?(a.won++,a.points+=3,d.lost++):(d.drawn++,d.points++,a.drawn++,a.points++),d.goalDiff=d.goalsFor-d.goalsAgainst,a.goalDiff=a.goalsFor-a.goalsAgainst)}),Object.values(i).sort((n,d)=>d.points-n.points||d.goalDiff-n.goalDiff||d.goalsFor-n.goalsFor)}function mi(e){var n,d;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+(e.stadiumBonus?10:0),note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((n=e.clubs)==null?void 0:n.encoded_name)||null,clubLogo:e.clubLogo||((d=e.clubs)==null?void 0:d.logo_url)||null,face:e.face||null,portrait:it(e)}}async function Ui(e,t,i,n){var d,a;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:n};try{const r=(a=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:a.id;try{(S.getChannels?S.getChannels():[]).forEach(p=>{const s=p.topic||"";(s.includes("matchmaking")||s.includes("pvp-match"))&&S.removeChannel(p)})}catch(c){console.warn("[FriendMatch] cleanup canaux:",c)}r&&(await S.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await S.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await ai(e,t,"random",({deckId:r,formation:c,starters:p,subsRaw:s,gcCardsEnriched:o,gcDefs:v,stadiumDef:m})=>{const y=_=>er(e,t,r,c,p,s,_,v||[],i);if(!o.length){y([]);return}ri(e,o,y)})}async function er(e,t,i,n,d,a,r=[],c=[],p,s){const{state:o,navigate:v,toast:m}=t,y=o.profile.id;let _=!1,g=null;Ze(e);try{await S.rpc("cancel_matchmaking",{p_user_id:y})}catch{}try{await S.from("matchmaking_queue").delete().eq("user_id",y)}catch{}const{data:l}=await S.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",p).single();if(!l){m("Match introuvable","error"),Ue(e),v("mini-league");return}if(l.home_id!==y&&l.away_id!==y){m("Tu ne fais pas partie de ce match","error"),Ue(e),v("mini-league");return}const T=l.home_id===y,f=T?l.away:l.home,L=T?l.away_id:l.home_id,j=(G,q)=>{var N;e.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:20px;background:linear-gradient(180deg,#0a1628,#1a0a2e);padding:24px;text-align:center;color:#fff">
        <div style="font-size:22px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:14px;color:rgba(255,255,255,0.6)">Journée ${l.matchday}</div>
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
            <div style="font-size:12px;font-weight:700">${(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(N=document.getElementById("lobby-cancel"))==null||N.addEventListener("click",()=>{_=!0,clearInterval(g),Ue(e),v("mini-league")})},F=async(G,q)=>{_=!0,clearInterval(g),await new Promise(N=>setTimeout(N,600)),e.isConnected&&tr(e,t,G,q,r,c)};if(j(),T){let G=l.match_id;if(!G){const{data:N,error:K}=await S.from("matches").insert({home_id:y,away_id:L,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(K||!N){m("Erreur création match","error"),Ue(e),v("mini-league");return}G=N.id,await S.from("mini_league_matches").update({match_id:G,status:"playing"}).eq("id",p)}const q=G;g=setInterval(async()=>{if(_){clearInterval(g);return}const{data:N}=await S.from("matches").select("away_deck_id").eq("id",q).single();N!=null&&N.away_deck_id&&(clearInterval(g),F(q,!0))},1500)}else{let G=l.match_id;g=setInterval(async()=>{if(_){clearInterval(g);return}const{data:q}=await S.from("mini_league_matches").select("match_id").eq("id",p).single();q!=null&&q.match_id&&(clearInterval(g),G=q.match_id,await S.from("matches").update({away_deck_id:i}).eq("id",G),F(G,!1))},1500)}}async function tr(e,t,i,n,d=[],a=[]){var k;const{state:r,navigate:c,toast:p}=t,s=((k=r.params)==null?void 0:k.leagueId)||null,o=n?"p1":"p2",v=n?"p2":"p1",m=(d||[]).map(u=>u.id),y=(d||[]).map(u=>({id:u.id,gc_type:u.gc_type,_gcDef:u._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:_}=await S.from("matches").select("*").eq("id",i).single();if(!_){p("Match introuvable","error"),c("mini-league");return}async function g(){const[{data:u},{data:x},{data:b},{data:h}]=await Promise.all([S.rpc("get_deck_for_match",{p_deck_id:_.home_deck_id}),S.rpc("get_deck_for_match",{p_deck_id:_.away_deck_id}),S.from("users").select("id,pseudo,club_name").eq("id",_.home_id).single(),S.from("users").select("id,pseudo,club_name").eq("id",_.away_id).single()]),w=A=>{const M=Number(A.evolution_bonus)||0;return{cardId:A.card_id,position:A.position,id:A.id,firstname:A.firstname,name:A.surname_real,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:(Number(A.note_g)||0)+(A.job==="GK"||A.job2==="GK"&&Number(A.note_g)>0?M:0),note_d:(Number(A.note_d)||0)+(A.job==="DEF"||A.job2==="DEF"&&Number(A.note_d)>0?M:0),note_m:(Number(A.note_m)||0)+(A.job==="MIL"||A.job2==="MIL"&&Number(A.note_m)>0?M:0),note_a:(Number(A.note_a)||0)+(A.job==="ATT"||A.job2==="ATT"&&Number(A.note_a)>0?M:0),evolution_bonus:M,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,face:A.face||null,clubName:A.club_encoded_name||null,clubLogo:A.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},$=((u==null?void 0:u.starters)||[]).map(A=>w(A)),z=((x==null?void 0:x.starters)||[]).map(A=>w(A)),E=(u==null?void 0:u.formation)||"4-4-2",I=(x==null?void 0:x.formation)||"4-4-2";return{p1Team:(()=>{const A=wt($,E);return stadiumDef?St(A,stadiumDef):A})(),p2Team:wt(z,I),p1Subs:(()=>{const A=((u==null?void 0:u.subs)||[]).map(M=>w(M));return stadiumDef&&Ct(A,stadiumDef),A})(),p2Subs:((x==null?void 0:x.subs)||[]).map(A=>w(A)),p1Formation:E,p2Formation:I,p1Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?m:[],gc_p2:n?[]:m,gcCardsFull_p1:n?y:[],gcCardsFull_p2:n?[]:y,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:a||[],lastActionAt:new Date().toISOString()}}let l=_.game_state&&Object.keys(_.game_state).length?_.game_state:null;if(!l)if(n){l=await g();const{data:u}=await S.from("matches").select("game_state").eq("id",i).single();!(u!=null&&u.game_state)||!Object.keys(u.game_state).length?await S.from("matches").update({game_state:l,turn_user_id:_.home_id}).eq("id",i):l=u.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let u=0;u<60&&!l;u++){await new Promise(b=>setTimeout(b,400));const{data:x}=await S.from("matches").select("game_state").eq("id",i).single();x!=null&&x.game_state&&Object.keys(x.game_state).length&&(l=x.game_state)}if(!l){p("Erreur de synchronisation","error"),c("mini-league");return}l.gc_p2=m,l.gcCardsFull_p2=y,await S.from("matches").update({game_state:l}).eq("id",i)}let T=!1,f=!1,L=!1,j=null,F=!1;const G=new Set,q=new Set;function N(u){var A,M;try{S.removeChannel(K)}catch{}const x=l[o+"Score"]||0,b=l[v+"Score"]||0;if(!L){L=!0;const B=u.winner_id||(x>b?r.profile.id:b>x?"opp":null),V=B===r.profile.id?"win":B?"loss":null;V&&ni(()=>Promise.resolve().then(()=>on),void 0).then(Q=>Q.applyOwnEvolution(r.profile.id,V)).catch(()=>{})}if(!f){const B=l.p1Score||0,V=l.p2Score||0,Q=(l.usedGc_p1||[]).length,U=(l.usedGc_p2||[]).length,P=u.winner_id||(B>V?_.home_id:V>B?_.away_id:null);(P?r.profile.id===P:r.profile.id<(n?_.away_id:_.home_id))&&(f=!0,Ji({player1Id:_.home_id,player2Id:_.away_id,score1:B,score2:V,gc1:Q,gc2:U}).catch(ie=>console.warn("[FriendMatch] updateStats:",ie)))}let h,w;u.winner_id?(h=u.winner_id===r.profile.id,w=!1):u.forfeit?(h=x>b,w=!1):(w=x===b,h=x>b),(A=document.getElementById("pvp-end-overlay"))==null||A.remove();const $=document.createElement("div");$.id="pvp-end-overlay",$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const z=w?"🤝":h?"🏆":"😞",E=w?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=w?"#fff":h?"#FFD700":"#ff6b6b";$.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${E}</div>
      <div style="font-size:18px">${l[o+"Name"]} ${x} – ${b} ${l[v+"Name"]}</div>
      ${u.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild($),(M=$.querySelector("#pvp-end-home"))==null||M.addEventListener("click",()=>{$.remove(),Ue(e),s?c("mini-league",{openLeagueId:s}):c("mini-league")})}const K=S.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},u=>{const x=u.new;try{if(x.status==="finished"||x.forfeit){if(T||(T=!0,j&&(clearInterval(j),j=null),x.game_state&&(l=x.game_state),l.phase==="finished"&&!x.forfeit&&document.getElementById("pvp-home")))return;N(x);return}if(x.game_state){const b=l;l=x.game_state;const h=l._lastGC;if(h&&h.seq&&!q.has(h.seq)&&(q.add(h.seq),h.by!==o)){fe(h.type,h.by,()=>xe());return}const w=b[o+"Score"]||0,$=b[v+"Score"]||0,z=l[o+"Score"]||0,E=l[v+"Score"]||0,I=z>w,A=E>$;if((I||A)&&!G.has(l.round)){G.add(l.round);const M=[...l.log||[]].reverse().find(V=>V.isGoal),B=((M==null?void 0:M.homePlayers)||[]).map(V=>({name:V.name,note:V.note,portrait:V.portrait,job:V.job}));je(B,z,E,I,()=>xe());return}xe()}}catch(b){console.error("[PvP] crash:",b)}}).subscribe();async function Z(u){Object.assign(l,u),l.lastActionAt=new Date().toISOString();const{error:x}=await S.from("matches").update({game_state:l}).eq("id",i);x&&p("Erreur de synchronisation","error");try{xe()}catch(b){console.error("[PvP] renderPvpScreen crash:",b)}}async function re(){if(T)return;T=!0,j&&(clearInterval(j),j=null);const u=n?_.away_id:_.home_id,x=n?"p2":"p1",b=n?"p1":"p2",h={...l,[x+"Score"]:3,[b+"Score"]:0,phase:"finished"};try{await S.from("matches").update({status:"finished",forfeit:!0,winner_id:u,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",i)}catch{}try{S.removeChannel(K)}catch{}setTimeout(()=>{Ue(e),c("mini-league")},800)}const le={BOOST_STAT:({value:u=1,count:x=1,roles:b=[]},h,w)=>{const $=h[o+"Team"],z=Object.entries($).filter(([E])=>!b.length||b.includes(E)).flatMap(([E,I])=>I.filter(A=>!A.used).map(A=>({...A,_line:E})));if(!z.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),w(h);return}te(z,x,`Choisir ${x} joueur(s) à booster (+${u})`,E=>{E.forEach(I=>{const A=($[I._line]||[]).find(M=>M.cardId===I.cardId);A&&(A.boost=(A.boost||0)+u,h.log.push({text:`⚡ +${u} sur ${A.name}`,type:"info"}))}),h[o+"Team"]=$,w(h)})},DEBUFF_STAT:({value:u=1,count:x=1,roles:b=[],target:h="ai"},w,$)=>{const z=h==="home"?o:v,E=w[z+"Team"],I=h==="home"?"allié":"adverse",A=Object.entries(E).filter(([M])=>!b.length||b.includes(M)).flatMap(([M,B])=>B.map(V=>({...V,_line:M})));if(!A.length){w.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),$(w);return}te(A,x,`Choisir ${x} joueur(s) ${I}(s) (-${u})`,M=>{M.forEach(B=>{const V=(E[B._line]||[]).find(Q=>Q.cardId===B.cardId);V&&(V.boost=(V.boost||0)-u,w.log.push({text:`🎯 -${u} sur ${V.name}`,type:"info"}))}),w[z+"Team"]=E,$(w)})},GRAY_PLAYER:({count:u=1,roles:x=[],target:b="ai"},h,w)=>{const $=b==="home"?o:v,z=h[$+"Team"],E=b==="home"?"allié":"adverse",I=Object.entries(z).filter(([A])=>!x.length||x.includes(A)).flatMap(([A,M])=>M.filter(B=>!B.used).map(B=>({...B,_line:A})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${E}`,type:"info"}),w(h);return}te(I,u,`Choisir ${u} joueur(s) ${E}(s) à exclure`,A=>{const M="usedCardIds_"+$,B=new Set(h[M]||[]);A.forEach(V=>{const Q=(z[V._line]||[]).find(U=>U.cardId===V.cardId);Q&&(Q.used=!0,B.add(V.cardId),h.log.push({text:`❌ ${Q.name} exclu !`,type:"info"}))}),h[M]=[...B],h[$+"Team"]=z,w(h)})},REVIVE_PLAYER:({count:u=1,roles:x=[]},b,h)=>{const w=b[o+"Team"],$=Object.entries(w).filter(([z])=>!x.length||x.includes(z)).flatMap(([z,E])=>E.filter(I=>I.used).map(I=>({...I,_line:z})));if(!$.length){b.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(b);return}te($,u,`Choisir ${u} joueur(s) à ressusciter`,z=>{z.forEach(E=>{const I=(w[E._line]||[]).find(A=>A.cardId===E.cardId);I&&(I.used=!1,b.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),b[o+"Team"]=w,h(b)})},REMOVE_GOAL:({},u,x)=>{const b=v+"Score";u[b]>0?(u[b]--,u.log.push({text:"🚫 Dernier but annulé !",type:"info"})):u.log.push({text:"🚫 Aucun but à annuler",type:"info"}),x(u)},ADD_GOAL_DRAW:({},u,x)=>{u[o+"Score"]===u[v+"Score"]?(u[o+"Score"]++,u.log.push({text:"🎯 But bonus !",type:"info"})):u.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),x(u)},ADD_SUB:({value:u=1},x,b)=>{x.maxSubs=(x.maxSubs||3)+u,x.log.push({text:`🔄 +${u} remplacement(s)`,type:"info"}),b(x)},CUSTOM:({},u,x)=>x(u)};function te(u,x,b,h){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let $=[];function z(){var I,A;const E=u.map(M=>{const B={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[M._line]||"#555",V=We(M,M._line)+(M.boost||0),U=$.find(Y=>Y.cardId===M.cardId)?"#FFD700":"rgba(255,255,255,0.25)",P=M.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${M.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${U};background:${B};overflow:hidden;cursor:pointer;${P}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${M.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${V}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${M._line}</div>
        </div>`}).join("");w.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${b}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$.length}/${x}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${E}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${$.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${$.length}/${x})
          </button>
        </div>`,(I=w.querySelector("#pp-close"))==null||I.addEventListener("click",()=>w.remove()),w.querySelectorAll(".pp-item").forEach(M=>{M.addEventListener("click",()=>{const B=M.dataset.cid,V=u.find(U=>U.cardId===B),Q=$.findIndex(U=>U.cardId===B);V&&(Q>-1?$.splice(Q,1):$.length<x&&$.push(V),z())})}),(A=w.querySelector("#pp-confirm"))==null||A.addEventListener("click",()=>{w.remove(),h($)})}z(),document.body.appendChild(w)}async function H(u,x){const h=(l["gcCardsFull_"+o]||[]).find(E=>E.id===u),w=(h==null?void 0:h._gcDef)||(l.gcDefs||[]).find(E=>{var I;return E.name===x||((I=E.name)==null?void 0:I.toLowerCase().trim())===(x==null?void 0:x.toLowerCase().trim())}),$=[...l["usedGc_"+o]||[],u],z={type:x,by:o,seq:(l._gcAnimSeq||0)+1};q.add(z.seq),fe(x,o,async()=>{if(w!=null&&w.effect_type&&w.effect_type!=="CUSTOM"){const I=le[w.effect_type];if(I){const A={...l};I(w.effect_params||{},A,async M=>{M["usedGc_"+o]=$,M._lastGC=z,M._gcAnimSeq=z.seq,await Z(M)});return}}const E={...l};switch(x){case"Remplacement+":E.maxSubs=(E.maxSubs||3)+1,E.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=v+"Score";E[I]>0&&(E[I]--,E.log.push({text:"🚫 But annulé",type:"info"}));break}}E["usedGc_"+o]=$,E._lastGC=z,E._gcAnimSeq=z.seq,await Z(E)})}function D(u,x){const b="usedCardIds_"+u,h=new Set(l[b]||[]);x.forEach(w=>h.add(w)),l[b]=[...h]}function ne(){for(const u of["p1","p2"]){const x=new Set(l["usedCardIds_"+u]||[]),b=l[u+"Team"];if(b)for(const h of["GK","DEF","MIL","ATT"])(b[h]||[]).forEach(w=>{w.used=x.has(w.cardId)})}}function xe(){var nt,ut,ft,gt,ce,W;if(l.phase==="reveal")return _e();if(l.phase==="midfield")return we();if(l.phase==="finished")return C();const u=l[o+"Team"],x=l[v+"Team"];ne();const b=l[o+"Score"],h=l[v+"Score"],w=l[o+"Name"],$=l[v+"Name"],z=l.phase===o+"-attack",E=l.phase===o+"-defense",I=Array.isArray(l["selected_"+o])?l["selected_"+o]:[],A=I.map(R=>R.cardId),M=window.innerWidth>=700,B=l[o+"Subs"]||[],V=l["usedSubIds_"+o]||[],Q=B.filter(R=>!V.includes(R.cardId)),U=l["gcCardsFull_"+o]||[],P=l["usedGc_"+o]||[],Y=U.filter(R=>!P.includes(R.id)),ie=l.boostOwner===o&&!l.boostUsed,J=!["GK","DEF","MIL","ATT"].some(R=>(x[R]||[]).some(oe=>!oe.used)),ue=[...u.MIL||[],...u.ATT||[]].filter(R=>!R.used),be=z&&J&&ue.length===0?[...u.GK||[],...u.DEF||[]].filter(R=>!R.used).map(R=>R.cardId):[];function ye(R,oe,he){var qt,Mi;const $e=R._gcDef,Je={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[$e==null?void 0:$e.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Xe={purple:"#b06ce0",light_blue:"#00d4ef"}[$e==null?void 0:$e.color]||"#b06ce0",et=($e==null?void 0:$e.name)||R.gc_type,at=($e==null?void 0:$e.effect)||((qt=Re[R.gc_type])==null?void 0:qt.desc)||"",$t=$e!=null&&$e.image_url?`/icons/${$e.image_url}`:null,kt=((Mi=Re[R.gc_type])==null?void 0:Mi.icon)||"⚡",lt=Math.round(he*.22),mt=Math.round(he*.22),xt=he-lt-mt,Et=et.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
        style="box-sizing:border-box;width:${oe}px;height:${he}px;border-radius:10px;border:2px solid ${Xe};background:${Je};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${lt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${Et}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${oe-6}px">${et}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${xt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${$t?`<img src="${$t}" style="max-width:${oe-10}px;max-height:${xt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(xt*.55)}px">${kt}</span>`}
        </div>
        <div style="height:${mt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${at.slice(0,38)}</span>
        </div>
      </div>`}function Ee(R,oe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${R}px;height:${oe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(oe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(oe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(oe*.09)}px;color:#000;font-weight:900">+${l.boostValue}</div>
      </div>`}const qe=(R,oe)=>oe?Ee(130,175):ye(R,130,175),Be=(R,oe)=>oe?Ee(68,95):ye(R,68,95),Ie=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Me=z?ke(o)?`<button id="pvp-action" style="${Ie};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ie};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:E?`<button id="pvp-action" style="${Ie};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${$}</div>`,Le=z&&!ke(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':z||E?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Pe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${Q.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':Q.map(R=>`<div class="pvp-sub-btn" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${Qe(R,M?76:44,M?100:58)}</div>`).join("")}
    </div>`,Oe=z?"attack":E?"defense":"idle",Ke=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(u,l[o+"Formation"],Oe,A,window.innerWidth>=900?500:300,window.innerWidth>=900?620:300,be)}
      </div>
    </div>`;function He(R){if(R.type==="duel"&&(R.homeTotal!=null||R.aiTotal!=null)){const oe=(R.homeTotal||0)>=(R.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(R.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(R.homePlayers||[]).map(he=>st(he)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${oe?20:14}px;font-weight:900;color:${oe?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${R.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${oe?14:20}px;font-weight:900;color:${oe?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${R.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(R.aiPlayers||[]).map(he=>st(he)).join("")}
            </div>
          </div>
          ${R.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${R.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${R.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${R.type==="goal"?700:400};padding:3px 2px">${R.text||""}</div>`}const Ne=(()=>{var oe,he;if(E&&((oe=l.pendingAttack)!=null&&oe.players)){const $e=l.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${$} ATTAQUE — Défendez !</div>
          ${tt(($e.players||[]).map(Je=>({...Je,used:!1})),"#ff6b6b",$e.total)}
        </div>`}if(z&&((he=l.pendingAttack)!=null&&he.players)){const $e=l.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${tt(($e.players||[]).map(Je=>({...Je,used:!1})),"#00ff88",$e.total)}
        </div>`}const R=(l.log||[]).slice(-1)[0];return R?'<div style="padding:2px 4px">'+He(R)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ge=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${b} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${$}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ne}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(l.log||[]).length})
      </button>`;Ze(e),e.style.overflow="hidden",M?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ge}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Pe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ke}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Me}${Le}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${Y.map(R=>qe(R,!1)).join("")}
            ${ie?qe(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ge}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(u,l[o+"Formation"],Oe,A,window.innerWidth>=900?500:300,window.innerWidth>=900?620:300,be)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Y.map(R=>Be(R,!1)).join("")}
            ${ie?Be(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${z&&Q.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${z&&Q.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${z&&Q.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${z&&Q.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${Q.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(l["usedSubIds_"+o]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(l["usedSubIds_"+o]||[]).length}/${l.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Me}${Le}</div>
        </div>
      </div>`;function Ve(){const R=e.querySelector(".match-screen");if(!R)return;const oe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);R.style.height=oe+"px",R.style.minHeight=oe+"px",R.style.maxHeight=oe+"px",R.style.overflow="hidden";const he=e.querySelector("#mobile-action-bar"),$e=e.querySelector("#mobile-play-area");he&&$e&&($e.style.paddingBottom=he.offsetHeight+"px")}if(Ve(),setTimeout(Ve,120),setTimeout(Ve,400),F||(F=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ve),window.visualViewport.addEventListener("scroll",Ve)),window.addEventListener("resize",Ve)),function(){const oe=e.querySelector(".terrain-wrapper svg");oe&&(oe.removeAttribute("width"),oe.removeAttribute("height"),oe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",oe.setAttribute("viewBox","-26 -26 352 352"),oe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(R=>{R.addEventListener("click",()=>{if(!z&&!E)return;const oe=R.dataset.cardId,he=R.dataset.role,$e=(u[he]||[]).find(at=>at.cardId===oe);if(!$e||$e.used)return;const Je=be.includes(oe);if(z&&!["MIL","ATT"].includes(he)&&!Je)return;Array.isArray(l["selected_"+o])||(l["selected_"+o]=[]);const Xe=l["selected_"+o],et=Xe.findIndex(at=>at.cardId===oe);et>-1?Xe.splice(et,1):Xe.length<3&&Xe.push({...$e,_role:he}),xe()})}),e.querySelectorAll(".match-used-hit").forEach(R=>{R.addEventListener("click",()=>O(R.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(R=>{R.addEventListener("click",()=>O())}),(nt=e.querySelector("#pvp-sub-open"))==null||nt.addEventListener("click",()=>O()),e.querySelectorAll(".pvp-gc-mini").forEach(R=>{R.addEventListener("click",()=>me(R.dataset.gcId,R.dataset.gcType))}),(ut=e.querySelector("#pvp-boost-card"))==null||ut.addEventListener("click",()=>ge()),(ft=e.querySelector("#pvp-action"))==null||ft.addEventListener("click",R=>{z?R.currentTarget.dataset.pass==="1"||!ke(o)?pe():ee():E&&de()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&re()}),(ce=e.querySelector("#pvp-view-opp"))==null||ce.addEventListener("click",()=>ae()),(W=e.querySelector("#pvp-toggle-history"))==null||W.addEventListener("click",()=>se()),j&&(clearInterval(j),j=null),(z||E)&&!T){let R=30,oe=!1;const he=()=>document.getElementById("pvp-timer"),$e=()=>{he()&&(he().textContent=R+"s",he().style.color=oe?"#ff4444":"#fff")};$e(),j=setInterval(()=>{R--,R<0?oe?(clearInterval(j),j=null,z&&!ke(o)?pe():re()):(oe=!0,R=15,$e()):$e()},1e3)}}function _e(){Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${l[v+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(l[v+"Team"],l[v+"Formation"],null,[],window.innerWidth>=900?500:300,window.innerWidth>=900?620:300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await Z({phase:"midfield"})},5e3)}let ve=!1;function we(){if(ve)return;const u=l[o+"Team"].MIL||[],x=l[v+"Team"].MIL||[];function b(Y){return Y.reduce((ie,J)=>ie+We(J,"MIL"),0)}function h(Y){let ie=0;for(let J=0;J<Y.length-1;J++){const ue=rt(Y[J],Y[J+1]);ue==="#00ff88"?ie+=2:ue==="#FFD700"&&(ie+=1)}return ie}const w=b(u)+h(u),$=b(x)+h(x),z=w>=$;function E(Y,ie,J){return`<div id="duel-row-${J}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ie}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Y.map((ue,be)=>{const ye=be<Y.length-1?rt(ue,Y[be+1]):null,Ee=!ye||ye==="#ff3333"||ye==="#cc2222",qe=ye==="#00ff88"?"+2":ye==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${J}" data-idx="${be}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${renderPlayerCard({...ue,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:l.homeStadiumDef||l.stadiumDef||null,role:"MIL",extraNote:ue.boost||0})}
            </div>
            ${be<Y.length-1?`<div class="duel-link duel-link-${J}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Ee?"rgba(255,255,255,0.12)":ye};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Ee?"none":`0 0 8px ${ye}`}">
              ${qe?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ye}">${qe}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${J}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${b(Y)} + ${h(Y)} liens = <b style="color:#fff">${b(Y)+h(Y)}</b>
        </div>
      </div>`}Ze(e),e.innerHTML=`
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
      ${E(u,l[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${E(x,l[v+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(Y,ie)=>e.querySelectorAll(Y).forEach((J,ue)=>{setTimeout(()=>{J.style.opacity="1",J.style.transform="translateY(0) scale(1)"},ie+ue*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Y,ie)=>setTimeout(()=>{Y.style.opacity="1"},ie*70)),900),setTimeout(()=>{const Y=e.querySelector("#pvp-vs");Y&&(Y.style.opacity="1",Y.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ie=>ie.style.opacity="1")},1250);function A(Y,ie,J){const ue=document.getElementById(Y);if(!ue)return;const be=performance.now(),ye=Ee=>{const qe=Math.min(1,(Ee-be)/J);ue.textContent=Math.round(ie*(1-Math.pow(1-qe,3))),qe<1?requestAnimationFrame(ye):ue.textContent=ie};requestAnimationFrame(ye)}setTimeout(()=>{A("pvp-score-me",w,800),A("pvp-score-opp",$,800)},1500);const M=l.p1Team.MIL||[],B=l.p2Team.MIL||[],V=b(M)+h(M),Q=b(B)+h(B),U=V>=Q?"p1":"p2";let P=l.boostValue;P==null&&(P=oi(),l.boostValue=P,l.boostOwner=U,l.boostUsed=!1),ve=!0,setTimeout(()=>{const Y=e.querySelector("#duel-row-"+(z?"me":"opp")),ie=e.querySelector("#duel-row-"+(z?"opp":"me")),J=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),be=z?J:ue,ye=z?ue:J;be&&(be.style.fontSize="80px",be.style.color=z?"#FFD700":"#ff6b6b",be.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),ye&&(ye.style.opacity="0.25"),setTimeout(()=>{Y&&(Y.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Y.style.zIndex="5"),setTimeout(()=>{const Ee=document.getElementById("duel-shock");Ee&&(Ee.style.animation="shockwave .5s ease-out forwards"),ie&&(ie.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ie;const Ee=document.getElementById("pvp-duel-finale");if(!Ee)return;const qe=l.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+P+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Be=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Ee.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+l[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+l[v+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+qe+Be,Ee.style.transition="opacity .45s ease",Ee.style.opacity="1",Ee.style.pointerEvents="auto",(Ie=document.getElementById("pvp-start-match"))==null||Ie.addEventListener("click",async()=>{const Me=U;await Z({phase:Me+"-attack",attacker:Me,round:1,boostValue:P,boostUsed:!1,boostOwner:Me})})},600)},700)},2800)}function je(u,x,b,h,w){const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const z=Array.from({length:10},(M,B)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${B%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][B%8]}</div>`).join(""),E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};$.innerHTML=`
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
        ${x} – ${b}
      </div>
      ${u!=null&&u.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${u.map(M=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${E[M.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${M.portrait?`<img src="${M.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(M.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild($);let I=!1;const A=()=>{I||(I=!0,$.remove(),setTimeout(()=>w(),50))};$.addEventListener("click",A),setTimeout(A,3500)}function fe(u,x,b){var P,Y;const h=(l.gcDefs||[]).find(ie=>{var J;return ie.name===u||((J=ie.name)==null?void 0:J.toLowerCase().trim())===(u==null?void 0:u.toLowerCase().trim())}),w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",z=(h==null?void 0:h.name)||u,E=(h==null?void 0:h.effect)||((P=Re[u])==null?void 0:P.desc)||"",I=h!=null&&h.image_url?`/icons/${h.image_url}`:null,A=((Y=Re[u])==null?void 0:Y.icon)||"⚡",B=x===o?"Vous":l[x+"Name"]||"Adversaire",V=document.createElement("div");V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",V.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${$}66}50%{box-shadow:0 0 60px ${$}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${$};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${B} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${$};background:${w};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${z.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${z}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${I?`<img src="${I}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${A}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${E}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(V);let Q=!1;const U=()=>{Q||(Q=!0,V.remove(),setTimeout(()=>b&&b(),50))};V.addEventListener("click",U),setTimeout(U,3e3)}function me(u,x){var V,Q,U,P;const h=(l["gcCardsFull_"+o]||[]).find(Y=>Y.id===u),w=h==null?void 0:h._gcDef,$={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[w==null?void 0:w.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",z={purple:"#b06ce0",light_blue:"#00d4ef"}[w==null?void 0:w.color]||"#b06ce0",E=(w==null?void 0:w.name)||x,I=(w==null?void 0:w.effect)||((V=Re[x])==null?void 0:V.desc)||"Carte spéciale.",A=w!=null&&w.image_url?`/icons/${w.image_url}`:null,M=((Q=Re[x])==null?void 0:Q.icon)||"⚡",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",B.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${z};background:${$};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${z}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${E.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${E}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${A?`<img src="${A}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${M}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${I}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(B),(U=B.querySelector("#pvp-gc-back"))==null||U.addEventListener("click",()=>B.remove()),(P=B.querySelector("#pvp-gc-use"))==null||P.addEventListener("click",()=>{B.remove(),H(u,x)})}function ge(){var h;const u=l[o+"Team"],x=Object.entries(u).flatMap(([w,$])=>($||[]).filter(z=>!z.used).map(z=>({...z,_line:w})));if(!x.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${l.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${x.map(w=>{const $={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[w._line]||"#555",z=We(w,w._line)+(w.boost||0);return`<div class="bp-item" data-cid="${w.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${$};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${w.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(h=b.querySelector("#bp-close"))==null||h.addEventListener("click",()=>b.remove()),b.querySelectorAll(".bp-item").forEach(w=>{w.addEventListener("click",async()=>{const $=w.dataset.cid,z=x.find(I=>I.cardId===$);if(!z)return;const E=(u[z._line]||[]).find(I=>I.cardId===$);E&&(E.boost=(E.boost||0)+l.boostValue),b.remove(),await Z({[o+"Team"]:u,boostUsed:!0})})})}function O(u=null){var Q,U;if(!(l.phase===o+"-attack")){p("Remplacement uniquement avant votre attaque","warning");return}const b=l[o+"Team"],h=l["usedSubIds_"+o]||[],w=l.maxSubs||3;if(h.length>=w){p(`Maximum ${w} remplacements atteint`,"warning");return}const $=Object.entries(b).flatMap(([P,Y])=>(Y||[]).filter(ie=>ie.used).map(ie=>({...ie,_line:P}))),z=(l[o+"Subs"]||[]).filter(P=>!h.includes(P.cardId));if(!$.length){p("Aucun joueur utilisé à remplacer","warning");return}if(!z.length){p("Aucun remplaçant disponible","warning");return}let E=Math.max(0,$.findIndex(P=>P.cardId===u));const I=((Q=$[E])==null?void 0:Q._line)||((U=$[E])==null?void 0:U.job);let A=Math.max(0,z.findIndex(P=>P.job===I)),M=!1;const B=document.createElement("div");B.id="pvp-sub-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function V(){var ye,Ee,qe,Be,Ie,Me;const P=$[E],Y=z[A],ie=Math.min(130,Math.round((window.innerWidth-90)/2)),J=Math.round(ie*1.35),ue=Le=>`background:rgba(255,255,255,0.12);border:none;color:${Le?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Le?"default":"pointer"};flex-shrink:0`;B.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${w})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ue(A===0)}" ${A===0?"disabled":""}>▲</button>
          <div>${Y?Qe({...Y,used:!1,boost:0},ie,J):"<div>—</div>"}</div>
          <button id="pin-down" style="${ue(A>=z.length-1)}" ${A>=z.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${A+1}/${z.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ue(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${P?Qe({...P,used:!1,boost:0},ie,J):"<div>—</div>"}</div>
          <button id="pout-down" style="${ue(E>=$.length-1)}" ${E>=$.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${$.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ye=B.querySelector("#psub-close"))==null||ye.addEventListener("click",()=>B.remove()),(Ee=B.querySelector("#pout-up"))==null||Ee.addEventListener("click",()=>{E>0&&(E--,V())}),(qe=B.querySelector("#pout-down"))==null||qe.addEventListener("click",()=>{E<$.length-1&&(E++,V())}),(Be=B.querySelector("#pin-up"))==null||Be.addEventListener("click",()=>{A>0&&(A--,V())}),(Ie=B.querySelector("#pin-down"))==null||Ie.addEventListener("click",()=>{A<z.length-1&&(A++,V())});const be=(Le,Pe,Oe,Ke)=>{const He=B.querySelector("#"+Le);if(!He)return;let Ne=0;He.addEventListener("touchstart",Ge=>{Ne=Ge.touches[0].clientY},{passive:!0}),He.addEventListener("touchend",Ge=>{const Ve=Ge.changedTouches[0].clientY-Ne;if(Math.abs(Ve)<30)return;const nt=Pe();Ve<0&&nt<Ke-1?(Oe(nt+1),V()):Ve>0&&nt>0&&(Oe(nt-1),V())},{passive:!0})};be("pin-panel",()=>A,Le=>A=Le,z.length),be("pout-panel",()=>E,Le=>E=Le,$.length),(Me=B.querySelector("#psub-confirm"))==null||Me.addEventListener("click",async Le=>{if(Le.preventDefault(),Le.stopPropagation(),M)return;M=!0;const Pe=$[E],Oe=z[A];if(!Pe||!Oe)return;const Ke=Pe._line,He=(b[Ke]||[]).findIndex(Ve=>Ve.cardId===Pe.cardId);if(He===-1){p("Erreur : joueur introuvable","error"),B.remove();return}const Ne={...Oe,_line:Ke,position:Pe.position,used:!1,boost:0};b[Ke].splice(He,1,Ne);const Ge=[...h,Oe.cardId];B.remove(),X(Pe,Oe,async()=>{await Z({[o+"Team"]:b,[v+"Team"]:l[v+"Team"],["usedSubIds_"+o]:Ge})})})}document.body.appendChild(B),V()}function X(u,x,b){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const $=(I,A,M)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${A};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${M}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[I.job]||"#555"};border:3px solid ${A};position:relative;overflow:hidden;margin:0 auto">
        ${it(I)?`<img src="${it(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;w.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${$(x,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${$(u,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(w);let z=!1;const E=()=>{z||(z=!0,w.remove(),setTimeout(()=>b(),50))};w.addEventListener("click",E),setTimeout(E,2200)}function ae(){var x;const u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",u.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${l[v+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(l[v+"Team"],l[v+"Formation"],null,[],window.innerWidth>=900?500:300,window.innerWidth>=900?620:300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(u),(x=u.querySelector("#pvp-opp-close"))==null||x.addEventListener("click",()=>u.remove())}function se(){var h;const u=l.log||[],x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const b=w=>{var z,E,I;if(w.type==="duel"){const A=w.isGoal,M=w.homeScored&&o==="p1"||!w.homeScored&&A&&o==="p2",B=w.homeScored?"#FFD700":A?"#ff6b6b":"rgba(255,255,255,0.3)",V=A?M?"⚽ BUT !":"⚽ BUT adversaire !":(z=w.homePlayers)!=null&&z.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${A?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${B};margin-bottom:4px">
          <div style="font-size:9px;color:${B};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${V}</div>
          ${(E=w.homePlayers)!=null&&E.length?`<div style="margin-bottom:3px">${tt(w.homePlayers,"rgba(255,255,255,0.7)",w.homeTotal)}</div>`:""}
          ${(I=w.aiPlayers)!=null&&I.length?`<div style="opacity:0.7">${tt(w.aiPlayers,"#ff6b6b",w.aiTotal)}</div>`:""}
        </div>`}return w.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${w.outPlayer?Qe({...w.outPlayer,used:!0,_line:w.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${w.inPlayer?Qe({...w.inPlayer,_line:w.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${w.type==="goal"?"#FFD700":w.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${w.text||""}</div>
      </div>`};x.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${u.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...u].reverse().map(b).join("")}
      </div>`,document.body.appendChild(x),(h=x.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>x.remove())}async function pe(){if(l.phase!==o+"-attack")return;const u=o==="p1"?"p2":"p1",x=(l.round||0)+1,b=[...l.log||[]];b.push({type:"info",text:`⏭️ ${l[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=Ce(l),w=ke(u),$=h||!w?"finished":u+"-attack";await Z({["selected_"+o]:[],modifiers:{...l.modifiers,[o]:{}},pendingAttack:null,phase:$,attacker:u,round:x,log:b}),$==="finished"&&await Se(l)}async function ee(){const u=l[o+"Team"],x=!["GK","DEF","MIL","ATT"].some($=>(l[v+"Team"][$]||[]).some(z=>!z.used)),b=(l["selected_"+o]||[]).map($=>{const z=(u[$._role]||[]).find(V=>V.cardId===$.cardId)||$,E=x&&["GK","DEF"].includes($._role),I=u[$._role]||[],A=I.findIndex(V=>V.cardId===$.cardId),M=dt(I.length),B=A>=0?M[A]:z._col??1;return{...z,_line:$._role,_col:B,...E?{note_a:Math.max(1,Number(z.note_a)||0)}:{}}});if(!b.length)return;const h=Ht(b,l.modifiers[o]||{});D(o,b.map($=>$.cardId)),b.forEach($=>{const z=(u[$._role]||[]).find(E=>E.cardId===$.cardId);z&&(z.used=!0)}),l["selected_"+o]=[],xe();const w=[...l.log||[]];if(x){const $=(l[o+"Score"]||0)+1,z=b.map(B=>mi(B));w.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:z,homeTotal:h.total,aiTotal:0});const E=(l.round||0)+1,I=o==="p1"?"p2":"p1",A={...l,[o+"Team"]:u,[o+"Score"]:$},M=Ce(A);G.add(E),je(z,$,l[v+"Score"]||0,!0,async()=>{await Z({[o+"Team"]:u,[o+"Score"]:$,["selected_"+o]:[],modifiers:{...l.modifiers,[o]:{}},pendingAttack:null,phase:M?"finished":I+"-attack",attacker:I,round:E,log:w}),M&&await Se({...l,[o+"Score"]:$})});return}w.push({type:"pending",text:`⚔️ ${l[o+"Name"]} attaque (${h.total})`}),await Z({[o+"Team"]:u,[v+"Team"]:l[v+"Team"],pendingAttack:{...h,players:b,side:o},["selected_"+o]:[],modifiers:{...l.modifiers,[o]:{}},phase:v+"-defense",log:w})}async function de(){const u=l[o+"Team"],x=(l["selected_"+o]||[]).map(P=>{const Y=(u[P._role]||[]).find(ye=>ye.cardId===P.cardId)||P,ie=u[P._role]||[],J=ie.findIndex(ye=>ye.cardId===P.cardId),ue=dt(ie.length),be=J>=0?ue[J]:Y._col??1;return{...Y,_line:P._role,_col:be}}),b=Ut(x,l.modifiers[o]||{});D(o,x.map(P=>P.cardId)),x.forEach(P=>{const Y=(u[P._role]||[]).find(ie=>ie.cardId===P.cardId);Y&&(Y.used=!0)}),l["selected_"+o]=[],xe();const h=Kt(l.pendingAttack.total,b.total,l.modifiers[o]||{}),w=l.pendingAttack.side,$=h==="attack"||(h==null?void 0:h.goal),z=w==="p1"?"p2":"p1",E=(l.round||0)+1,I=(l.pendingAttack.players||[]).map(P=>mi(P)),A=[...l.log||[]];A.push({type:"duel",isGoal:$,homeScored:$&&w===o,text:$?`⚽ BUT de ${l[w+"Name"]} ! (${l.pendingAttack.total} vs ${b.total})`:`✋ Attaque stoppée (${l.pendingAttack.total} vs ${b.total})`,homePlayers:I,aiPlayers:x.map(P=>mi(P)),homeTotal:l.pendingAttack.total,aiTotal:b.total});const M=$?(l[w+"Score"]||0)+1:l[w+"Score"]||0,B={...l,[o+"Team"]:u,[w+"Score"]:M},V=Ce(B),Q=V?"finished":z+"-attack",U=async()=>{await Z({[o+"Team"]:u,[v+"Team"]:l[v+"Team"],[w+"Score"]:M,["selected_"+o]:[],modifiers:{...l.modifiers,[o]:{}},pendingAttack:null,phase:Q,attacker:z,round:E,log:A}),(Q==="finished"||V)&&await Se({...l,[w+"Score"]:M})};if($){const P=w===o,Y=P?M:l[o+"Score"]||0,ie=P?l[v+"Score"]||0:M;G.add(E),je(I,Y,ie,P,U)}else await U()}function Ae(u){return["MIL","ATT"].some(x=>(u[x]||[]).some(b=>!b.used))}function Te(u){return["GK","DEF","MIL","ATT"].some(x=>(u[x]||[]).some(b=>!b.used))}function ze(u){return Te(u)&&!Ae(u)}function ke(u){const x=l[u+"Team"],b=l[(u==="p1"?"p2":"p1")+"Team"];return!!(Ae(x)||!Te(b)&&ze(x))}function Ce(u){const x=["MIL","ATT"].some(A=>(u.p1Team[A]||[]).some(M=>!M.used)),b=["MIL","ATT"].some(A=>(u.p2Team[A]||[]).some(M=>!M.used)),h=Te(u.p1Team),w=Te(u.p2Team);return!x&&!(!w&&h)&&(!b&&!(!h&&w))}function Fe(u){const x=u.p1Score||0,b=u.p2Score||0;return x===b?null:x>b?_.home_id:_.away_id}async function Se(u){try{const x=Fe(u),b=x?_.home_id===x?_.away_id:_.home_id:null,h=u.p1Score||0,w=u.p2Score||0;await S.from("matches").update({status:"finished",winner_id:x,home_score:h,away_score:w}).eq("id",i);const{data:$}=await S.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if($){await S.from("mini_league_matches").update({home_score:h,away_score:w,status:"finished"}).eq("id",$.id);const{data:z}=await S.from("mini_league_matches").select("id, status").eq("league_id",$.league_id).eq("matchday",$.matchday);if((z||[]).every(I=>I.status==="finished"||I.status==="bye")){const{data:I}=await S.from("mini_leagues").select("current_day,total_days").eq("id",$.league_id).single();if(I){const A=(I.current_day||0)+1,M=A>(I.total_days||0);await S.from("mini_leagues").update({current_day:M?I.total_days:A,status:M?"finished":"active"}).eq("id",$.league_id)}}}x&&b&&Ai(x,b).catch(()=>{})}catch(x){console.error("[ML] finishMatch:",x)}}function C(){var w;if(T&&document.getElementById("pvp-end-overlay"))return;T=!0;const u=l[o+"Score"],x=l[v+"Score"],b=u>x,h=u===x;Ze(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${u} - ${x}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(w=document.getElementById("pvp-home"))==null||w.addEventListener("click",()=>{try{S.removeChannel(K)}catch{}Ue(e),c("mini-league",s?{openLeagueId:s}:{})})}xe()}const ir="/",nr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function or(e,t,i){let n=0;const d=document.createElement("div");d.id="tutorial-overlay",d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const a=()=>{var o,v,m;const c=t[n],p=n===t.length-1,s=Math.round((n+1)/t.length*100);d.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${s}%;background:${c.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${c.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${c.title}</div>
          <div style="font-size:11px;color:#aaa">${n+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${c.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${ir}icons/${c.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${c.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${c.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${n>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${p?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${c.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${p?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,d.querySelectorAll("ul,ol").forEach(y=>{y.style.paddingLeft="20px",y.style.marginTop="6px",y.style.marginBottom="6px"}),d.querySelectorAll("li").forEach(y=>{y.style.marginBottom="4px"}),d.querySelectorAll("p").forEach(y=>{y.style.marginBottom="8px"}),(o=d.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{n--,a()}),(v=d.querySelector("#tuto-next"))==null||v.addEventListener("click",()=>{p?r():(n++,a())}),(m=d.querySelector("#tuto-skip"))==null||m.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{d.remove(),e!=null&&e.id&&await S.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(d),a()}async function rr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:d,error:a}=await S.rpc("get_tutorial_steps");if(!a&&(d==null?void 0:d.length)>0)n=d,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:c,error:p}=await S.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!p&&(c==null?void 0:c.length)>0?(n=c,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${a==null?void 0:a.message}, Direct: ${p==null?void 0:p.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(c=>({emoji:c.emoji,title:c.title,color:c.color,content:c.content,image_url:c.image_url||null})):nr;or(e,r,()=>t("boosters"))}const Jt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function At(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function ar(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Ii(e,t)}async function Ii(e,t){const{state:i,toast:n}=t,{data:d}=await S.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await S.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),r=(d||[]).filter(g=>g.seller_id!==i.profile.id),c=a||[];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <!-- Header -->
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid var(--gray-200)">
      <div style="font-size:18px;font-weight:900">🛒 Marché des transferts</div>
      <div style="font-size:12px;color:var(--gray-600);margin-top:2px">${r.length} carte(s) en vente · ${(i.profile.credits||0).toLocaleString("fr")} cr.</div>
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
  </div>`;let p="buy";const s=()=>{var g,l,T,f,L,j,F;return{name:(((g=document.getElementById("flt-name"))==null?void 0:g.value)||"").toLowerCase().trim(),club:(((l=document.getElementById("flt-club"))==null?void 0:l.value)||"").toLowerCase().trim(),country:(((T=document.getElementById("flt-country"))==null?void 0:T.value)||"").toLowerCase().trim(),job:((f=document.getElementById("flt-job"))==null?void 0:f.value)||"",rarity:((L=document.getElementById("flt-rarity"))==null?void 0:L.value)||"",note1:parseInt((j=document.getElementById("flt-note1"))==null?void 0:j.value)||0,note2:parseInt((F=document.getElementById("flt-note2"))==null?void 0:F.value)||0}};function o(g){const l=s();return g.filter(T=>{var K,Z,re;const f=(K=T.card)==null?void 0:K.player;if(!f)return!1;const L=`${f.firstname} ${f.surname_real}`.toLowerCase(),j=(((Z=f.clubs)==null?void 0:Z.encoded_name)||"").toLowerCase(),F=(f.country_code||"").toLowerCase(),G=((re=T.card)==null?void 0:re.evolution_bonus)||0,q=At(f,f.job,G),N=f.job2?At(f,f.job2,G):0;return!(l.name&&!L.includes(l.name)||l.club&&!j.includes(l.club)||l.country&&!F.includes(l.country)||l.job&&f.job!==l.job||l.rarity&&f.rarity!==l.rarity||l.note1&&q<l.note1||l.note2&&N<l.note2)})}function v(g){var N,K,Z,re;const l=(N=g.card)==null?void 0:N.player;if(!l)return"";const T=((K=g.card)==null?void 0:K.evolution_bonus)||0,f=At(l,l.job,T),L=l.job2?At(l,l.job2,T):0,j=(i.profile.credits||0)>=g.price,F=l.country_code?`https://flagsapi.com/${l.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,G=Jt[l.job]||"#bbb",q=l.job2?Jt[l.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${F?`<img src="${F}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(Z=l.clubs)!=null&&Z.logo_url?`<img src="${l.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${G};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${G};font-family:Arial Black,Arial">${f}</span>
        </div>
        ${L?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${q};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${q};font-family:Arial Black,Arial">${L}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${l.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((re=g.seller)==null?void 0:re.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${g.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${g.id}" ${j?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${j?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function m(g){var N,K,Z,re;const l=(N=g.card)==null?void 0:N.player;if(!l)return"";const T=((K=g.card)==null?void 0:K.evolution_bonus)||0,f=At(l,l.job,T),L=l.job2?At(l,l.job2,T):0,j=g.status==="sold",F=l.country_code?`https://flagsapi.com/${l.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,G=Jt[l.job]||"#bbb",q=l.job2?Jt[l.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${j?"opacity:0.7":""}">
      ${F?`<img src="${F}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(Z=l.clubs)!=null&&Z.logo_url?`<img src="${l.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${G};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${G};font-family:Arial Black,Arial">${f}</span>
        </div>
        ${L?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${q};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${q};font-family:Arial Black,Arial">${L}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${l.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.surname_real}</div>
        <div style="font-size:10px;color:${j?"#22c55e":"#999"};margin-top:1px">
          ${j?`✅ Vendu à ${((re=g.buyer)==null?void 0:re.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${g.price.toLocaleString("fr")}</div>
        ${j?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function y(){const g=document.getElementById("mkt-content"),l=document.getElementById("mkt-filters");if(g){if(l.style.display=p==="buy"?"flex":"none",p==="buy"){const T=o(r);g.innerHTML=T.length?T.map(v).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const T=c.filter(L=>L.status==="active").sort((L,j)=>new Date(j.listed_at)-new Date(L.listed_at)),f=c.filter(L=>L.status==="sold").sort((L,j)=>new Date(j.sold_at||j.listed_at)-new Date(L.sold_at||L.listed_at));g.innerHTML=(T.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${T.length})</div>`+T.map(m).join(""):"")+(f.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${f.length})</div>`+f.map(m).join(""):"")+(!T.length&&!f.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}g.querySelectorAll("[data-buy]").forEach(T=>T.addEventListener("click",()=>sr(T.dataset.buy,r,e,t))),g.querySelectorAll("[data-cancel]").forEach(T=>T.addEventListener("click",()=>lr(T.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(g=>{g.addEventListener("click",()=>{p=g.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(l=>{const T=l===g;l.style.background=T?"var(--green)":"#fff",l.style.color=T?"#fff":"var(--gray-600)",l.style.borderColor=T?"var(--green)":"var(--gray-200)"}),y()})});let _;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(g=>{var l;(l=document.getElementById(g))==null||l.addEventListener("input",()=>{clearTimeout(_),_=setTimeout(y,250)})}),y()}async function sr(e,t,i,n){const{state:d,toast:a,refreshProfile:r}=n,c=t.find(o=>o.id===e);if(!c)return;const p=c.price;if((d.profile.credits||0)<p){a("Crédits insuffisants","error");return}dr(c,async()=>{const{error:o}=await S.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(o){a("Erreur achat : "+o.message,"error");return}await r();const v=document.getElementById("nav-credits");v&&(v.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),a("✅ Carte achetée !","success"),await Ii(i,n)})}function dr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",d.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(d);const a=c=>{d.remove(),c&&t()};d.querySelector("#buy-cancel").addEventListener("click",()=>a(!1)),d.querySelector("#buy-ok").addEventListener("click",()=>a(!0)),d.addEventListener("click",c=>{c.target===d&&a(!1)})}async function lr(e,t,i){const{toast:n}=i,{data:d}=await S.from("market_listings").select("card_id").eq("id",e).single();if(await S.from("market_listings").update({status:"cancelled"}).eq("id",e),d!=null&&d.card_id){const{count:a}=await S.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",d.card_id).eq("status","active");a||await S.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id)}n("Annonce retirée","success"),Ii(t,i)}async function cr(e,t){var o,v,m,y;const{state:i,navigate:n}=t,d=((v=(o=t==null?void 0:t.state)==null?void 0:o.params)==null?void 0:v.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:r}]=await Promise.all([S.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),S.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let c=d;function p(){var g,l;const _=document.getElementById("rankings-list");if(_){if(c==="global"){const T=a||[];_.innerHTML=T.length>0?T.map((f,L)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${f.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${L<3?["#D4A017","#a0a0a0","#cd7f32"][L]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${L<3?"16":"13"}px">${L<3?["🥇","🥈","🥉"][L]:L+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${f.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${f.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${f.trophies_top1} 🥈${f.trophies_top2} 🥉${f.trophies_top3}</div>
            <div style="color:var(--gray-600)">${f.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const T=r||[];_.innerHTML=T.length>0?T.map((f,L)=>{const j=Pt(f.mmr??1e3),F=(f.ranked_wins||0)+(f.ranked_losses||0)+(f.ranked_draws||0),G=F>0?Math.round((f.ranked_wins||0)/F*100):0,q=f.id===i.profile.id,N=(f.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${q?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${L<3?["#D4A017","#a0a0a0","#cd7f32"][L]:"rgba(255,255,255,0.08)"};color:${L<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${L<3?"16":"13"}px">${L<3?["🥇","🥈","🥉"][L]:L+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${j.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${f.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${f.club_name} · ${j.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${N?"❓":j.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${j.color}">${N?"Placement":j.label}</div>
              ${N?"":`<div style="font-size:10px;color:var(--gray-600)">${G}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(g=document.getElementById("tab-global"))!=null&&g.style&&(document.getElementById("tab-global").style.cssText=s(c==="global")),(l=document.getElementById("tab-ranked"))!=null&&l.style&&(document.getElementById("tab-ranked").style.cssText=s(c==="ranked"))}}const s=_=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${_?"900":"400"};background:${_?"var(--green)":"rgba(255,255,255,0.06)"};color:${_?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-global" style="${s(c==="global")}">🌍 Global</button>
        <button id="tab-ranked" style="${s(c==="ranked")}">⚔️ Ranked</button>
      </div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,p(),(m=document.getElementById("tab-global"))==null||m.addEventListener("click",()=>{c="global",p()}),(y=document.getElementById("tab-ranked"))==null||y.addEventListener("click",()=>{c="ranked",p()})}async function pr(e,t){var G,q,N,K;const{state:i,navigate:n,toast:d}=t,a=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:c}]=await Promise.all([S.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),S.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",a.id).single()]);if(!c){d("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(G=document.getElementById("ranked-back"))==null||G.addEventListener("click",()=>n("home"));return}const p=c.mmr??1e3,s=c.mmr_deviation??350,o=c.mmr_volatility??.06,v=c.placement_matches??0,m=v<10,y=Math.max(0,10-v),_=Pt(p),g=hn(p),l=di.findIndex(Z=>Z.id===_.id),T=di[l+1]||null,f={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},L=(c.ranked_wins||0)+(c.ranked_losses||0)+(c.ranked_draws||0),j=L>0?Math.round((c.ranked_wins||0)/L*100):0,F=di.map(Z=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${_.id===Z.id?1:.35};
      transform:${_.id===Z.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${_.id===Z.id?"28px":"20px"}">${Z.emoji}</div>
      <div style="font-size:9px;color:${Z.color};font-weight:${_.id===Z.id?"900":"400"};letter-spacing:0.5px">${Z.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${f[_.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
        ${T?`<span>${T.emoji} ${T.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${g}%;background:linear-gradient(90deg,${_.color},${_.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${g}% vers ${T?T.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${F}
    </div>

    <!-- Placement / Stats -->
    ${m?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${v}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${y} match${y>1?"s":""} — gains et pertes ×2</div>
    </div>`:`
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px">
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#1A6B3C">${c.ranked_wins||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Victoires</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#888">${c.ranked_draws||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Nuls</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#bb2020">${c.ranked_losses||0}</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.5)">Défaites</div>
      </div>
      <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:10px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:#D4A017">${j}%</div>
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
  </div>`,(q=document.getElementById("ranked-back"))==null||q.addEventListener("click",()=>n("home")),(N=document.getElementById("ranked-leaderboard-btn"))==null||N.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(K=document.getElementById("ranked-play-btn"))==null||K.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:p,rd:s,sigma:o,isPlacement:m}})})}async function ur(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await S.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},c=(a||[]).filter(o=>o.status==="finished"),p=(a||[]).filter(o=>o.status==="in_progress");function s(o){const v=o.home_id===d.id;v?o.home_score:o.away_score,v?o.away_score:o.home_score;const m=o.winner_id===d.id,y=o.home_score===o.away_score&&o.status==="finished",_=o.status!=="finished"?"…":y?"N":m?"V":"D",g=o.status!=="finished"||y?"#888":m?"#1A6B3C":"#c0392b";let l=r[o.mode]||o.mode;o.away_id===null&&!l.startsWith("IA")&&(l="IA");const f=o.home_id===d.id?o.away:o.home;let L;o.away_id===null?L=l:f?L=`${f.club_name||f.pseudo} (${f.pseudo})`:L="Adversaire";let j="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(j=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const F=new Date(o.created_at),G=F.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+F.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),q=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${L}${j}</div>
        <div style="font-size:11px;color:var(--gray-600)">${l} · ${G}${o.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${q}</span>
        <span style="background:${g};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${_}</span>
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

      ${c.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${c.map(s).join("")}
        </div>`:""}

      ${(a||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}vn(_n);const De={user:null,profile:null,page:"home",params:{}};function Lt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function fr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function ki(){document.getElementById("modal-overlay").classList.add("hidden")}async function Dt(){if(!De.user)return;const{data:e}=await S.from("users").select("*").eq("id",De.user.id).single();e&&(De.profile=e)}function Gt(e,t={}){De.page=e,De.params=t,bn()}async function bn(){var n,d,a,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(c=>{c.classList.toggle("active",c.dataset.page===De.page)});const t=document.getElementById("nav-credits");t&&De.profile&&(t.textContent=`💰 ${(De.profile.credits||0).toLocaleString("fr")}`);const i={state:De,navigate:Gt,toast:Lt,openModal:fr,closeModal:ki,refreshProfile:Dt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',De.page){case"home":await Di(e,i);break;case"collection":await Vn(e,i);break;case"decks":await yi(e,i);break;case"boosters":await ro(e,i);break;case"ranked":await pr(e,i);break;case"match":{const c=De.params&&De.params.matchMode||"vs_ai_easy";c==="random"?await _i(e,i,!1):c==="ranked"?await _i(e,i,!0):c==="friend"?await Go(e,i,(n=De.params)==null?void 0:n.friendId,(d=De.params)==null?void 0:d.friendName):c==="mini-league"?await Ui(e,i,(a=De.params)==null?void 0:a.mlMatchId,(r=De.params)==null?void 0:r.leagueId):await yo(e,i);break}case"market":await ar(e,i);break;case"rankings":await cr(e,i);break;case"matches":await ur(e,i);break;case"friends":await An(e,i);break;case"mini-league":await Ro(e,i);break;case"match-mini-league":{const c=De.params||{};await Ui(e,i,c.mlMatchId,c.leagueId);break}default:await Di(e,i)}}function gr(){var n;const e=document.getElementById("app"),t=De.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(d=>{d.addEventListener("click",a=>{a.preventDefault(),Gt(d.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Gt("home")),document.getElementById("nav-credits").addEventListener("click",()=>Gt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>mr())}async function mr(){const{data:e}=await S.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const d=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
      ${n.image_url?`<img src="${n.image_url}" style="width:100%;max-height:160px;object-fit:cover;border-radius:8px;margin-bottom:10px">`:""}
      <div style="font-size:12px;color:#999;margin-bottom:4px">${d}</div>
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function xr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&ki()}),document.getElementById("modal-close").addEventListener("click",ki);const{data:{session:e}}=await S.auth.getSession();if(!e){Ki(),Ci(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Lt});return}De.user=e.user,await Dt(),Ki();try{const{data:i}=await S.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(d=>{n[d.formation]=d.links}),wn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!De.profile){kn(document.getElementById("app"),{state:De,navigate:async()=>{await Dt(),xi()},toast:Lt,refreshProfile:Dt});return}const t=Array.isArray(De.profile.pending_boosters)?De.profile.pending_boosters:[];if(!De.profile.onboarding_done&&t.length>0){go(document.getElementById("app"),{state:De,navigate:()=>xi(),toast:Lt,refreshProfile:Dt});return}xi(),setTimeout(()=>rr(De.profile,Gt,Lt),800),S.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(De.user=null,De.profile=null,document.getElementById("app").innerHTML="",Ci(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:Lt}))})}function br(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function si(){const e=document.getElementById("app");e&&(e.style.height=br()+"px")}window.addEventListener("resize",si);window.addEventListener("orientationchange",()=>setTimeout(si,150));window.visualViewport&&window.visualViewport.addEventListener("resize",si);function xi(){const e=()=>{var i;(i=De.user)!=null&&i.id&&S.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",De.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",si(),gr(),bn()}function Ki(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function yn(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}xr().catch(e=>{console.error("Échec du démarrage:",e),yn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&yn("Le serveur met trop de temps à répondre.")},12e3);
