const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-1Ic4vV1e.js","assets/formation-links-DCm4yyf6.css"])))=>i.map(i=>d[i]);
import{s as S,F as wi,r as nt,j as Rt,l as Oi,m as rt,n as Ai,h as Gt,o as mo,T as si,k as xo,p as bo,b as yo}from"./formation-links-1Ic4vV1e.js";const vo="/";function Li(e,{navigate:t,toast:i}){let n="login";const d=()=>{var r,l,u,s,o,x;const a=n==="login";e.innerHTML=`
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
        <img src="${vo}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",d()}),(l=document.getElementById("tab-reg-btn"))==null||l.addEventListener("click",()=>{n="register",d()}),a?((u=document.getElementById("login-password"))==null||u.addEventListener("keydown",m=>{var v;m.key==="Enter"&&((v=document.getElementById("login-btn"))==null||v.click())}),(s=document.getElementById("login-btn"))==null||s.addEventListener("click",async()=>{const m=document.getElementById("login-email").value.trim(),v=document.getElementById("login-password").value,_=document.getElementById("login-error");if(_.textContent="",!m||!v){_.textContent="Remplissez tous les champs.";return}const g=document.getElementById("login-btn");g.textContent="⏳ Connexion…",g.disabled=!0;const{error:c}=await S.auth.signInWithPassword({email:m,password:v});if(g.textContent="⚽ Se connecter",g.disabled=!1,c){_.textContent=c.message.includes("Invalid")?"Email ou mot de passe incorrect.":c.message;return}window.location.reload()})):((o=document.getElementById("reg-confirm"))==null||o.addEventListener("keydown",m=>{var v;m.key==="Enter"&&((v=document.getElementById("reg-btn"))==null||v.click())}),(x=document.getElementById("reg-btn"))==null||x.addEventListener("click",async()=>{const m=document.getElementById("reg-email").value.trim(),v=document.getElementById("reg-password").value,_=document.getElementById("reg-confirm").value,g=document.getElementById("reg-error");if(g.textContent="",!m||!v||!_){g.textContent="Remplissez tous les champs.";return}if(v.length<6){g.textContent="Mot de passe trop court (min. 6 caractères).";return}if(v!==_){g.textContent="Les mots de passe ne correspondent pas.";return}const c=document.getElementById("reg-btn");c.textContent="⏳ Création…",c.disabled=!0;const{error:T}=await S.auth.signUp({email:m,password:v});if(c.textContent="🚀 Créer mon compte",c.disabled=!1,T){g.textContent=T.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",d(),setTimeout(()=>{const p=document.getElementById("login-email");p&&(p.value=m)},50)}))};d()}function ho(e,{state:t,navigate:i,toast:n,refreshProfile:d}){let a="#1A6B3C",r="#D4A017";e.innerHTML=`
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
  `;function l(){var _;const s=document.getElementById("logo-preview"),o=document.getElementById("logo-initials"),x=((_=document.getElementById("setup-club"))==null?void 0:_.value)||"MW",m=x.trim().split(" ").filter(Boolean),v=m.length>=2?(m[0][0]+m[1][0]).toUpperCase():x.slice(0,2).toUpperCase();s&&(s.style.background=r,s.style.borderColor=a),o&&(o.textContent=v,o.style.color=a)}document.getElementById("color1").addEventListener("input",s=>{a=s.target.value,document.getElementById("swatch1").style.background=a,l()}),document.getElementById("color2").addEventListener("input",s=>{r=s.target.value,document.getElementById("swatch2").style.background=r,l()});function u(s){document.querySelectorAll(".setup-step").forEach(o=>o.classList.remove("active")),document.getElementById(`step-${s}`).classList.add("active"),document.getElementById("step-num").textContent=s,document.getElementById("progress-fill").style.width=`${Math.round(s/3*100)}%`,s===3&&l()}document.getElementById("step1-next").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("step1-error");if(o.textContent="",s.length<3){o.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:x}=await S.from("users").select("id").eq("pseudo",s).maybeSingle();if(x){o.textContent="Ce pseudo est déjà pris.";return}u(2)}),document.getElementById("step2-back").addEventListener("click",()=>u(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const s=document.getElementById("setup-club").value.trim(),o=document.getElementById("step2-error");if(o.textContent="",s.length<2){o.textContent="Nom trop court (min. 2 caractères).";return}const{data:x}=await S.from("users").select("id").eq("club_name",s).maybeSingle();if(x){o.textContent="Ce nom de club est déjà pris.";return}u(3)}),document.getElementById("step3-back").addEventListener("click",()=>u(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const s=document.getElementById("setup-pseudo").value.trim(),o=document.getElementById("setup-club").value.trim(),x=document.getElementById("step3-error"),m=document.getElementById("step3-finish");x.textContent="",m.disabled=!0,m.textContent="Création en cours…";try{const{error:v}=await S.from("users").insert({id:t.user.id,pseudo:s,club_name:o,club_color1:a,club_color2:r,credits:1e4});if(v)throw v;await wo(t.user.id),await d(),n(`Bienvenue ${s} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(v){x.textContent=v.message,m.disabled=!1,m.textContent="🚀 Créer mon profil !"}})}async function wo(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await S.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const _o="modulepreload",$o=function(e){return"/"+e},Ii={},ii=function(t,i,n){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));d=Promise.allSettled(i.map(u=>{if(u=$o(u),u in Ii)return;Ii[u]=!0;const s=u.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${o}`))return;const x=document.createElement("link");if(x.rel=s?"stylesheet":_o,s||(x.as="script"),x.crossOrigin="",x.href=u,l&&x.setAttribute("nonce",l),document.head.appendChild(x),s)return new Promise((m,v)=>{x.addEventListener("load",m),x.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return d.then(r=>{for(const l of r||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})},Pt="#1A6B3C",Nt="#cc2222",ko="#D4A017",Mi="#888";async function Eo(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Hi(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>So(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ui(i,n,null,t))}async function Hi(e,t,i={}){const{navigate:n}=i,d=e.user.id,{data:a,error:r}=await S.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${d},addressee_id.eq.${d}`),{count:l}=await S.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",d).eq("status","pending"),u=document.getElementById("pending-badge");u&&(l>0?(u.style.display="flex",u.textContent=l):u.style.display="none");const s=document.getElementById("friends-list");if(!s)return;if(r){console.error("[Friends] Erreur:",r),s.innerHTML=`<div style="color:${Nt};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const o=(a||[]).map(v=>v.requester_id===d?v.addressee_id:v.requester_id);let x={};if(o.length){const{data:v}=await S.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",o);(v||[]).forEach(_=>{x[_.id]=_})}const m=(a||[]).map(v=>({friendshipId:v.id,friend:x[v.requester_id===d?v.addressee_id:v.requester_id]||{pseudo:"?"}}));if(!m.length){s.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}s.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${m.length} ami${m.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${m.map(({friendshipId:v,friend:_})=>To(_,v)).join("")}
    </div>`,s.querySelectorAll("[data-stats]").forEach(v=>{v.addEventListener("click",()=>zo(e,v.dataset.stats,v.dataset.friendName))}),s.querySelectorAll("[data-match]").forEach(v=>{v.addEventListener("click",()=>{const _=v.dataset.friendId,g=v.dataset.friendName;console.log("[Friends] clic match",{fid:_,fname:g,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:_,friendName:g}):t("Erreur navigation","error")})})}function To(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",d=(n||i).slice(0,2).toUpperCase(),a=e.club_color2||Pt,r=e.club_color1||"#ffffff",l=e.last_seen_at?new Date(e.last_seen_at):null,u=l&&Date.now()-l.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${a};border:2.5px solid ${r};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${r}">
          ${d}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${u?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${n}</div>
        <div style="font-size:11px;color:${u?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${u?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${ko};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function So(e,t){const i=_i();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Nt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${$i()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),d=i.querySelector("#add-friend-error"),a=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",a),i.addEventListener("click",r=>{r.target===i&&a()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){d.textContent="Entre un pseudo";return}d.textContent="";const{data:l}=await S.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!l){d.textContent="Utilisateur introuvable";return}if(l.id===e.user.id){d.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:u}=await S.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${l.id}),and(requester_id.eq.${l.id},addressee_id.eq.${e.user.id})`).single();if(u){const o=u.status==="accepted"?"Vous êtes déjà amis !":u.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";d.textContent=o;return}const{error:s}=await S.from("friendships").insert({requester_id:e.user.id,addressee_id:l.id,status:"pending"});if(s){d.textContent="Erreur : "+s.message;return}a(),t(`✅ Demande envoyée à ${l.pseudo} !`,"success")})}async function Ui(e,t,i=null,n={}){const d=e.user.id,{data:a}=await S.from("friendships").select("id, requester_id").eq("addressee_id",d).eq("status","pending").order("created_at",{ascending:!1}),r=(a||[]).map(m=>m.requester_id);let l={};if(r.length){const{data:m}=await S.from("users").select("id, pseudo, club_name").in("id",r);(m||[]).forEach(v=>{l[v.id]=v})}const u=(a||[]).map(m=>({...m,requester:l[m.requester_id]||{pseudo:"?"}})),s=_i(),o=u||[];s.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${o.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${o.map(m=>{var v,_,g;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((v=m.requester)==null?void 0:v.club_name)||((_=m.requester)==null?void 0:_.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((g=m.requester)==null?void 0:g.pseudo)||""})</span>
                </div>
                <button data-accept="${m.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Pt};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${m.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Nt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${$i()}`,document.body.appendChild(s);const x=()=>s.remove();s.querySelector("#pending-close").addEventListener("click",x),s.addEventListener("click",m=>{m.target===s&&x()}),s.querySelectorAll("[data-accept]").forEach(m=>{m.addEventListener("click",async()=>{const{error:v}=await S.from("friendships").update({status:"accepted"}).eq("id",m.dataset.accept);if(v){t("Erreur : "+v.message,"error");return}m.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Hi(e,t,n),i&&i()})}),s.querySelectorAll("[data-decline]").forEach(m=>{m.addEventListener("click",async()=>{await S.from("friendships").delete().eq("id",m.dataset.decline),m.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function zo(e,t,i){const n=e.user.id,[d,a]=[n,t].sort(),r=n===d,{data:l}=await S.from("friend_match_stats").select("*").eq("player1_id",d).eq("player2_id",a).single(),u=e.profile.club_name||e.profile.pseudo||"Moi",s=l||{},o=r?s.wins_p1||0:s.wins_p2||0,x=r?s.wins_p2||0:s.wins_p1||0,m=s.draws||0,v=r?s.goals_p1||0:s.goals_p2||0,_=r?s.goals_p2||0:s.goals_p1||0,g=r?s.gc_used_p1||0:s.gc_used_p2||0,c=r?s.gc_used_p2||0:s.gc_used_p1||0,T=s.matches_total||0,p=(j,P,G,q=Pt,N=Nt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${q}">${P}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${j}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${N}">${G}</div>
    </div>`,L=_i();L.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${u}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${T===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${p("Victoires",o,x)}
        ${p("Nuls",m,m,Mi,Mi)}
        ${p("Défaites",x,o)}
        ${p("Buts marqués",v,_)}
        ${p("Buts encaissés",_,v,Nt,Pt)}
        ${p("GC utilisés ⚡",g,c,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${T} match${T>1?"s":""} joué${T>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${$i()}`,document.body.appendChild(L),L.querySelector("#stats-close").addEventListener("click",()=>L.remove()),L.addEventListener("click",j=>{j.target===L&&L.remove()})}function _i(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function $i(){return`
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
        background:${Pt};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}async function Ki({player1Id:e,player2Id:t,score1:i,score2:n,gc1:d,gc2:a}){const[r,l]=[e,t].sort(),u=e!==r,s=u?n:i,o=u?i:n,x=u?a:d,m=u?d:a,v=s>o?1:0,_=o>s?1:0,g=s===o?1:0,{data:c}=await S.from("friend_match_stats").select("*").eq("player1_id",r).eq("player2_id",l).single();c?await S.from("friend_match_stats").update({wins_p1:c.wins_p1+v,wins_p2:c.wins_p2+_,draws:c.draws+g,goals_p1:c.goals_p1+s,goals_p2:c.goals_p2+o,gc_used_p1:c.gc_used_p1+x,gc_used_p2:c.gc_used_p2+m,matches_total:c.matches_total+1}).eq("player1_id",r).eq("player2_id",l):await S.from("friend_match_stats").insert({player1_id:r,player2_id:l,wins_p1:v,wins_p2:_,draws:g,goals_p1:s,goals_p2:o,gc_used_p1:x,gc_used_p2:m,matches_total:1})}const Ao="2026.07.08-2258";async function ji(e,{state:t,navigate:i,toast:n}){var a,r;const d=t.profile;d&&(e.innerHTML=`
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
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${Ao}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var x,m,v,_,g;const l=((x=window.visualViewport)==null?void 0:x.height)||window.innerHeight,u=((m=document.querySelector(".top-nav"))==null?void 0:m.offsetHeight)||56,s=((v=document.querySelector(".bottom-nav"))==null?void 0:v.offsetHeight)||60;if(e.querySelector(".home-inner")){const c=l-u-s;e.querySelector(".home-dark").style.minHeight=c+"px"}if(window.innerWidth<768){const c=((_=e.querySelector(".home-hero"))==null?void 0:_.offsetHeight)||60,T=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const p=((g=e.querySelector(".home-footer"))==null?void 0:g.offsetHeight)||44,L=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((K,Z)=>{var re;return K+(((re=document.getElementById(Z))==null?void 0:re.offsetHeight)||0)},0),j=12*5,P=l-u-s-c-p-L-j-32,G=Math.max(80,Math.round(P*.28)),q=Math.max(160,Math.round(P*.72)),N=Math.floor((q-10)/2);T&&(T.style.minHeight=T.style.maxHeight=G+"px"),e.querySelectorAll(".play-tile").forEach(K=>{K.style.minHeight=K.style.height=N+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(K=>{K.style.height=Math.round(N*.55)+"px"})}}),(a=document.getElementById("nav-rankings"))==null||a.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{l.style.transform="scale(.96)",setTimeout(()=>l.style.transform="",180);const u=l.dataset.action;if(u==="match-ai"){jo(i);return}if(u==="match-random"){i("match",{matchMode:"random"});return}if(u==="match-friend"){i("friends");return}if(u==="mini-league"){i("mini-league");return}if(u==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await S.auth.signOut(),window.location.reload()}),Yi(t,n),Mo(t,n,i),Vi(t,n,i))}async function Vi(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const d=e.profile.id,{data:a}=await S.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${d},away_id.eq.${d}`).order("created_at",{ascending:!1});if(!(a!=null&&a.length)){n.innerHTML="";return}const r=a.map(u=>u.home_id===d?u.away_id:u.home_id).filter(Boolean);let l={};if(r.length){const{data:u}=await S.from("users").select("id, pseudo, club_name").in("id",r);(u||[]).forEach(s=>{l[s.id]=s.club_name||s.pseudo})}n.innerHTML=a.map(u=>{const s=u.home_id===d?u.away_id:u.home_id,o=l[s]||"Adversaire",x=u.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${x?"🏆 Mini League":u.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${o}</div>
      </div>
      <button data-resume="${u.id}" data-mini="${x?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${u.id}" data-opp="${s}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(u=>{u.addEventListener("click",async()=>{const s=document.getElementById("page-content")||document.getElementById("app");if(u.dataset.mini==="1"){const{data:o}=await S.from("mini_league_matches").select("id, league_id").eq("match_id",u.dataset.resume).single();o?i("match-mini-league",{mlMatchId:o.id,leagueId:o.league_id}):i("mini-league")}else{const{resumePvpMatch:o}=await ii(async()=>{const{resumePvpMatch:x}=await Promise.resolve().then(()=>Cn);return{resumePvpMatch:x}},void 0);o(s,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},u.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(u=>{u.addEventListener("click",()=>{Io(async()=>{await Lo(u.dataset.abandon,u.dataset.opp,d),t("Match abandonné (défaite 3-0)","info"),Vi(e,t,i)})})})}async function Lo(e,t,i){const{data:n}=await S.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const d=n.home_id===i,a=d?0:3,r=d?3:0,l=n.game_state||{};l.p1Score=a,l.p2Score=r,l.phase="finished",l.forfeit=!0,await S.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:a,away_score:r,game_state:l}).eq("id",e)}function Io(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Mo(e,t,i){var l,u,s,o;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:d}=await S.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){n.innerHTML="";return}const a=((l=d.inviter)==null?void 0:l.club_name)||((u=d.inviter)==null?void 0:u.pseudo)||"?",r=d.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${a} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(s=document.getElementById("match-inv-accept"))==null||s.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:a})}),(o=document.getElementById("match-inv-decline"))==null||o.addEventListener("click",async()=>{await S.from("friend_match_invites").update({status:"declined"}).eq("id",d.id),n.innerHTML="",t("Invitation refusée","info")})}async function Yi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:d}=await S.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(d||!(n!=null&&n.length)){i.innerHTML="";return}const a=n.length,r=n.slice(0,2).map(u=>{var s;return((s=u.requester)==null?void 0:s.pseudo)||"?"}).join(", "),l=a>2?` +${a-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${a} demande${a>1?"s":""} d'ami${a>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r}${l}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Ui(e,t,()=>Yi(e,t)))}function jo(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:380px">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${t.map(d=>`<div class="action-card" data-mode="${d.mode}" style="cursor:pointer"><div class="icon">${d.icon}</div><div class="label">${d.label}</div><div class="sub">${d.sub}</div></div>`).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",d=>{d.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(d=>{d.addEventListener("click",()=>{n(),e("match",{matchMode:d.dataset.mode})})})}const Oe={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ze(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const Ci=["ATT","MIL","DEF","GK"];function Wi(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let d=n+1;d<i;d++){const a=e[n],r=e[d];if(!a||!r)continue;const l=a._col!=null&&r._col!=null&&a._col===r._col,u=a._col!=null&&r._col!=null&&Math.abs(a._col-r._col)===1,s=Ci.indexOf(a._line||a.job),o=Ci.indexOf(r._line||r.job),x=Math.abs(s-o)===1;if(!((a._line||a.job)===(r._line||r.job)&&u||l&&x))continue;const _=a.country_code&&r.country_code&&a.country_code===r.country_code,g=a.club_id&&r.club_id&&a.club_id===r.club_id;_&&g?t+=2:(_||g)&&(t+=1)}return t}function Ot(e,t={}){const i=e.reduce((a,r)=>{const l=r._line||r.job,u=r.stadiumBonus&&(l==="MIL"||l==="ATT")?10:0;return a+(Number(l==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+u},0),n=Wi(e);let d=i+n;return t.doubleAttack&&(d*=2),t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Ht(e,t={}){const i=e.reduce((a,r)=>{const l=r._line||r.job;let u=0;l==="GK"?u=Number(r.note_g)||0:l==="MIL"?u=Number(r.note_m)||0:u=Number(r.note_d)||0;const s=r.stadiumBonus&&(l==="GK"||l==="DEF"||l==="MIL")?10:0;return a+u+(r.boost||0)+s},0),n=Wi(e);let d=i+n;return t.stolenNote&&(d-=t.stolenNote),{base:i,links:n,total:Math.max(0,d)}}function Ut(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Ji(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const d=[...n].sort((r,l)=>{const u=t==="attack"?ze(r,"ATT"):r._line==="GK"?ze(r,"GK"):ze(r,"DEF");return(t==="attack"?ze(l,"ATT"):l._line==="GK"?ze(l,"GK"):ze(l,"DEF"))-u});let a=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return d.slice(0,Math.min(a,d.length,3))}function Co(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const Xi={pepite:{win:2,loss:-1,boosterStart:"min"},papyte:{win:1,loss:-2,boosterStart:"max"}};function Qi(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const d=ki(i),a=Number(i[t])||0;if(a<=0)return 0;const r=i.note_min??1,l=i.note_max??10,s=(e.current_note??d)-d;return Math.min(l,Math.max(r,a+s))}function ki(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}async function Ei(e,t){!e||!t||await Promise.all([fi(e,"win"),fi(t,"loss")])}async function fi(e,t){const{data:i}=await S.from("cards").select("id, current_note, player:players(rarity, job, note_g, note_d, note_m, note_a, note_min, note_max)").eq("owner_id",e).eq("card_type","player");if(!(i!=null&&i.length))return;const n=i.filter(d=>{var a,r;return((a=d.player)==null?void 0:a.rarity)==="pepite"||((r=d.player)==null?void 0:r.rarity)==="papyte"});n.length&&await Promise.all(n.map(d=>{const a=Xi[d.player.rarity],r=t==="win"?a.win:a.loss,l=d.player.note_min??1,u=d.player.note_max??10,s=ki(d.player),o=d.current_note??s,x=Math.min(u,Math.max(l,o+r));return S.from("cards").update({current_note:x}).eq("id",d.id)}))}async function qo(e,t){return fi(e,t)}const Zi=Object.freeze(Object.defineProperty({__proto__:null,EVOLUTIVE_RULES:Xi,applyOwnEvolution:qo,currentSecondaryNote:Qi,getBaseMainNote:ki,updateEvolutiveCards:Ei},Symbol.toStringTag,{value:"Module"})),Bo={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},di={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Kt=["GK","DEF","MIL","ATT"],Do=["Tous","GK","DEF","MIL","ATT"],Fo={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function qi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Go(e){return e.length?e.reduce((t,i)=>qi(i)>qi(t)?i:t,e[0]):e[0]}function Po(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const No={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Ro(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function li(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function ci(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,d={...i,_evolution_bonus:n},a=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${a}
    ${nt(d,{width:140})}
  </div>`}function Bi(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${nt(e,{width:140})}
  </div>`}async function Oo(e,t){const{state:i,navigate:n,toast:d,openModal:a,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:l}=await S.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:u}=await S.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),s=(l||[]).filter(H=>H.card_type==="player"&&H.player),o=(l||[]).filter(H=>H.card_type==="game_changer"),x=(l||[]).filter(H=>H.card_type==="formation"),m=(l||[]).filter(H=>H.card_type==="stadium"),{data:v}=await S.from("gc_definitions").select("name,gc_type,color,effect,image_url"),_={};(v||[]).forEach(H=>{_[H.name]=H});const{data:g}=await S.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),c={};(g||[]).forEach(H=>{c[H.id]=H}),m.forEach(H=>{H.stadium_def&&(c[H.stadium_id]=H.stadium_def)});const T=Object.keys(wi),p=Object.keys(Oe),L={};s.forEach(H=>{const Q=H.player.id;L[Q]=(L[Q]||0)+1}),new Set(Object.keys(L).map(H=>String(H)));const j=new Set(x.map(H=>H.formation)),P=new Set(o.map(H=>H.gc_type));let G="player",q="Tous",N="",K=!1;function Z(){return[...s].sort((H,Q)=>{const ae=Kt.indexOf(H.player.job),se=Kt.indexOf(Q.player.job);return ae!==se?ae-se:(H.player.surname_real||"").localeCompare(Q.player.surname_real||"")})}function re(){return[...u||[]].sort((H,Q)=>{const ae=Kt.indexOf(H.job),se=Kt.indexOf(Q.job);return ae!==se?ae-se:(H.surname_real||"").localeCompare(Q.surname_real||"")})}function le(){return Z().filter(H=>{const Q=H.player,ae=q==="Tous"||Q.job===q,se=!N||`${Q.firstname} ${Q.surname_real}`.toLowerCase().includes(N);return ae&&se})}function te(){return re().filter(H=>{const Q=q==="Tous"||H.job===q,ae=!N||`${H.firstname} ${H.surname_real}`.toLowerCase().includes(N);return Q&&ae})}e.innerHTML=`
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
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${x.length})</div>
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
  </div>`;function U(){const H=document.getElementById("col-filters");H&&(G==="player"?(H.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${N}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Do.map(Q=>`
            <button class="filter-btn" data-job="${Q}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${Q===q?"var(--green)":"var(--gray-200)"};
                background:${Q===q?"var(--green)":"#fff"};
                color:${Q===q?"#fff":"var(--gray-600)"}">
              ${Q}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${K?"var(--yellow)":"var(--gray-200)"};
              background:${K?"var(--yellow)":"#fff"};
              color:${K?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${K?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",Q=>{N=Q.target.value.toLowerCase(),D()}),e.querySelectorAll(".filter-btn").forEach(Q=>{Q.addEventListener("click",()=>{q=Q.dataset.job,U(),D()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{K=!K,U(),D()})):(H.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${K?"var(--yellow)":"var(--gray-200)"};
              background:${K?"var(--yellow)":"#fff"};
              color:${K?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${K?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{K=!K,U(),D()})))}function D(){const H=document.getElementById("col-grid");H&&(G==="player"?Ce(H):G==="formation"?fe(H):G==="stadium"?ge(H):me(H))}function oe(H,Q,ae,se,pe){const ee=document.getElementById("col-grid"),de=document.getElementById("col-big");if(!ee||!de)return;var Le=0;function Te(){const Ae=window.innerWidth>=768,ke=document.getElementById("col-big"),qe=document.getElementById("col-grid");Ae&&ke&&(ke.style.minHeight="420px",ke.style.flex="1 1 auto"),Ae&&qe&&(qe.style.height=Math.round(310*.76+16)+"px",qe.style.flexShrink="0",qe.style.overflowX="auto",qe.style.overflowY="hidden",qe.style.alignItems="center",qe.style.padding="8px 16px"),de.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+Q(H[Le])+"</div>";var Ge=de.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Ge&&Ge.addEventListener("click",function(){se(H[Le])}),requestAnimationFrame(function(){var Se=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!Se||!de)){var C=de.clientHeight-8,$=de.clientWidth-24,f=Se.offsetHeight,b=Se.offsetWidth;if(f>0&&b>0&&C>40){var y=Ae?2.2:1.6,h=Math.min(C/f,$/b,y);Se.style.transform="scale("+h.toFixed(3)+")",Se.style.transformOrigin="top center"}}}),ee.innerHTML=H.map(function(Se,C){var $=C===Le,f="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+($?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+C+'" style="'+f+'">'+ae(Se,$)+"</div>"}).join(""),ee.querySelectorAll(".col-mini-item").forEach(function(Se){Se.addEventListener("click",function(){Le=Number(Se.dataset.idx),Te(),Se.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}Te()}function xe(H){var Q=window.innerWidth>=768?.76:.54,ae;if(!H||H._fake){var se=H?H.player:null;if(!se)return"";ae=Bi(se)}else ae=ci(H,"");return'<div style="display:inline-block;zoom:'+Q+';pointer-events:none;line-height:0">'+ae+"</div>"}function _e(H,Q,ae){Q=Q||100,ae=ae||140;var se=Rt[H]||{},pe={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},ee=Math.max(3,Math.round(Q*.06)),de=Object.entries(se).map(function(Te){var Ae=Te[0],ke=Te[1],qe=Ae.replace(/\d+$/,""),Ge=pe[qe]||"#888",Se=Math.round(ke.x*Q),C=Math.round(ke.y*ae);return'<circle cx="'+Se+'" cy="'+C+'" r="'+ee+'" fill="'+Ge+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Le=Math.max(1,Math.round(Q/50));return'<svg viewBox="0 0 '+Q+" "+ae+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+Q+'" height="'+ae+'" fill="#1A6B3C"/><rect x="'+Math.round(Q*.2)+'" y="'+Math.round(ae*.02)+'" width="'+Math.round(Q*.6)+'" height="'+Math.round(ae*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Le+'"/><line x1="0" y1="'+Math.round(ae*.5)+'" x2="'+Q+'" y2="'+Math.round(ae*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Le+'"/><ellipse cx="'+Math.round(Q*.5)+'" cy="'+Math.round(ae*.5)+'" rx="'+Math.round(Q*.18)+'" ry="'+Math.round(ae*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Le+'"/><rect x="'+Math.round(Q*.2)+'" y="'+Math.round(ae*.82)+'" width="'+Math.round(Q*.6)+'" height="'+Math.round(ae*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Le+'"/>'+de+"</svg>"}function he(H,Q,ae){var se=ae>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+ae+"</div>":"",pe=Q?'data-form-id="'+Q.id+'"':"",ee=H.length>7?14:H.length>5?16:19,de=!!Q;return"<div "+pe+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(de?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(de?"":"filter:grayscale(1);opacity:0.5")+'">'+se+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(de?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+ee+"px;font-weight:900;color:"+(de?"#1A6B3C":"#aaa")+';line-height:1">'+H+'</div></div><div style="flex:1;overflow:hidden;background:'+(de?"#1A6B3C":"#ccc")+'">'+_e(H,140,220)+"</div></div>"}function we(H,Q){var ae=window.innerWidth>=768?.76:.54,se=140,pe=305,ee=Math.round(pe*.22),de=pe-ee,Le=H.length>7?10:13,Te=_e(H,se,de),Ae=Q?"1.5px solid #2a7a40":"1px solid #ddd",ke=Q?"":"filter:grayscale(1);opacity:0.45;",qe=Q?"#1A6B3C":"#bbb",Ge="#fff";return'<div style="display:inline-block;zoom:'+ae+';line-height:0;pointer-events:none"><div style="width:'+se+"px;height:"+pe+"px;border-radius:6px;border:"+Ae+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+ke+'"><div style="height:'+ee+"px;background:"+qe+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Le+"px;font-weight:900;color:"+Ge+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(se-4)+'px">'+H+'</span></div><div style="height:'+de+'px;overflow:hidden;flex-shrink:0">'+Te+"</div></div></div>"}function Ce(H){if(K){const Q=te();if(!Q.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const ae=Q.map(se=>s.find(pe=>pe.player.id===se.id)||{_fake:!0,player:se,id:"fake-"+se.id});oe(ae,se=>se._fake?Bi(se.player):ci(se,""),se=>se._fake?xe({player:se.player,id:"x",_fake:!0}):xe(se),se=>{se._fake||Di(se,s,L,t)})}else{const Q=le();if(!Q.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const ae={};Q.forEach(pe=>{const ee=pe.player.id;ae[ee]||(ae[ee]=[]),ae[ee].push(pe)});const se=Object.values(ae).map(pe=>Go(pe));oe(se,pe=>{const ee=L[pe.player.id]||1,de=ee>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${ee}</div>`:"",Te=s.filter(Ae=>Ae.player.id===pe.player.id&&Ae.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return ci(pe,de+Te)},pe=>xe(pe),pe=>Di(pe,s,L,t))}}function fe(H){const Q=K?T:[...j];if(!Q.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const ae=Q.map(se=>({formation:se,card:x.find(pe=>pe.formation===se)||null,owned:j.has(se)}));oe(ae,({formation:se,card:pe,owned:ee})=>he(se,ee?pe:null,ee?x.filter(de=>de.formation===se).length:0),({formation:se,owned:pe})=>we(se,pe),({card:se,owned:pe})=>{pe&&se&&Uo(se,x,t,a)})}function me(H){const Q=Object.keys(_),ae=K?Q.length?Q:p:[...P];if(!ae.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const se=ae.map(pe=>({type:pe,gc:Oe[pe]||{icon:"⚡",desc:""},def:_[pe]||null,owned:P.has(pe),card:o.find(ee=>ee.gc_type===pe)||null}));oe(se,({type:pe,gc:ee,def:de,owned:Le,card:Te})=>{var y;const Ae=Le?o.filter(h=>h.gc_type===pe).length:0,ke=Ae>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${Ae}</div>`:"",qe=(de==null?void 0:de.gc_type)==="ultra_game_changer",Ge={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},Se={purple:"#b06ce0",light_blue:"#00d4ef"},C=Ge[de==null?void 0:de.color]||Ge.purple,$=Se[de==null?void 0:de.color]||Se.purple,f=(de==null?void 0:de.effect)||ee.desc||"",b=de!=null&&de.image_url?`/icons/${de.image_url}`:((y=de==null?void 0:de.club)==null?void 0:y.logo_url)||(de!=null&&de.country_code?`https://flagsapi.com/${de.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Le&&Te?`<div data-gc-id="${Te.id}" data-gc-type="${pe}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${$};background:${C};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${$}66;cursor:pointer">
          ${ke}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${pe.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${pe}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${qe?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${b?`<img src="${b}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${ee.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${f.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${pe}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${ee.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:pe,gc:ee,def:de,owned:Le})=>{const Te=window.innerWidth>=768?.76:.54,Ae={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ke={purple:"#9b59b6",light_blue:"#00bcd4"},qe=Ae[de==null?void 0:de.color]||Ae.purple,Ge=ke[de==null?void 0:de.color]||ke.purple,Se=de!=null&&de.image_url?`/icons/${de.image_url}`:null;return Le?`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${qe};border:1px solid ${Ge};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${pe}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${Se?`<img src="${Se}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${ee.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((de==null?void 0:de.effect)||ee.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${Te};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${ee.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${pe}</span></div></div>`},({type:pe,owned:ee,def:de})=>{ee&&Ho(pe,de,a)})}function ge(H){const Q="#E87722",ae="/";if(!m.length){H.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const se={};m.forEach(ee=>{const de=ee.stadium_id||"?";(se[de]=se[de]||[]).push(ee)});const pe=Object.entries(se).map(([ee,de])=>({sid:ee,def:c[ee]||null,count:de.length,card:de[0]}));oe(pe,({def:ee,count:de})=>{var Ge,Se;const Le=(ee==null?void 0:ee.name)||"?",Te=((Ge=ee==null?void 0:ee.club)==null?void 0:Ge.encoded_name)||(ee==null?void 0:ee.country_code)||"—",Ae=ee!=null&&ee.image_url?`${ae}icons/${ee.image_url}`:((Se=ee==null?void 0:ee.club)==null?void 0:Se.logo_url)||(ee!=null&&ee.country_code?`https://flagsapi.com/${ee.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),ke=Ae?`<img src="${Ae}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',qe=de>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${de}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${Q},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Q}66">
          ${qe}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Le}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${ke}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Te}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:ee,count:de})=>{var Ge,Se;const Le=window.innerWidth>=768?.76:.54,Te=(ee==null?void 0:ee.name)||"?",Ae=((Ge=ee==null?void 0:ee.club)==null?void 0:Ge.encoded_name)||(ee==null?void 0:ee.country_code)||"—",ke=ee!=null&&ee.image_url?`${ae}icons/${ee.image_url}`:((Se=ee==null?void 0:ee.club)==null?void 0:Se.logo_url)||(ee!=null&&ee.country_code?`https://flagsapi.com/${ee.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),qe=ke?`<img src="${ke}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${Le};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${Q},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${Te}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${qe}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${Ae}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(H=>{H.addEventListener("click",()=>{G=H.dataset.tab,q="Tous",N="",K=!1,e.querySelectorAll(".col-tab-btn").forEach(Q=>{const ae=Q.dataset.tab===G;Q.style.borderBottomColor=ae?"var(--green)":"transparent",Q.style.color=ae?"var(--green)":"var(--gray-600)"}),U(),D()})}),U(),D()}function Ho(e,t,i){const n=Oe[e]||{icon:"⚡",desc:"Effet spécial."},d=(t==null?void 0:t.gc_type)==="ultra_game_changer",a={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},l=a[t==null?void 0:t.color]||a.purple,u=r[t==null?void 0:t.color]||r.purple,s=(t==null?void 0:t.name)||e,o=(t==null?void 0:t.effect)||n.desc,x=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${l};border-radius:16px;border:2px solid ${u};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${d?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${s}</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${x?`<img src="${x}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:64px">${n.icon}</span>`}
        </div>
      </div>
      <div style="background:#f9f0ff;border-radius:10px;padding:14px 16px;width:100%">
        <div style="font-size:12px;font-weight:700;color:#7a28b8;margin-bottom:6px">EFFET</div>
        <div style="font-size:14px;color:#333">${o}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Vt=1e3;function Uo(e,t,i,n){var _,g,c;const{state:d,toast:a,closeModal:r,navigate:l,refreshProfile:u}=i,s=e.formation,o={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function x(){const T=Rt[s]||{},p=wi[s]||[],L=290,j=360,P=20;function G(N){const K=T[N];return K?{x:K.x*L,y:K.y*j}:null}let q=`<svg width="${L}" height="${j}" viewBox="0 0 ${L} ${j}" xmlns="http://www.w3.org/2000/svg">`;for(const[N,K]of p){const Z=G(N),re=G(K);!Z||!re||(q+=`<line x1="${Z.x}" y1="${Z.y}" x2="${re.x}" y2="${re.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const N of Object.keys(T)){const K=G(N);if(!K)continue;const Z=N.replace(/\d+/,""),re=o[Z]||"#555";q+=`<circle cx="${K.x}" cy="${K.y}" r="${P}" fill="${re}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,q+=`<text x="${K.x}" y="${K.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${Z}</text>`}return q+="</svg>",q}const m=t.filter(T=>T.formation===s);m.length;const v=!e.is_for_sale;n(`Formation ${s}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${v?`
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
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(_=document.getElementById("direct-sell-form-btn"))==null||_.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${s} pour ${Vt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const T=m.find(L=>!L.is_for_sale)||m[0];if(!T){a("Aucune carte à vendre","error");return}await S.from("market_listings").delete().eq("card_id",T.id),await S.from("transfer_history").delete().eq("card_id",T.id);const{error:p}=await S.from("cards").delete().eq("id",T.id);if(p){a(p.message,"error");return}await S.from("users").update({credits:(d.profile.credits||0)+Vt}).eq("id",d.profile.id),await u(),a(`+${Vt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),l("collection")}),(g=document.getElementById("market-sell-form-btn"))==null||g.addEventListener("click",async()=>{const T=parseInt(document.getElementById("sell-price-form").value);if(!T||T<1){a("Prix invalide","error");return}await S.from("cards").update({is_for_sale:!0,sale_price:T}).eq("id",e.id),await S.from("market_listings").insert({seller_id:d.profile.id,card_id:e.id,price:T}),a("Carte mise en vente sur le marché !","success"),r(),l("collection")}),(c=document.getElementById("cancel-sell-form-btn"))==null||c.addEventListener("click",async()=>{await S.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await S.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),a("Annonce retirée","success"),r(),l("collection")})}async function Di(e,t,i,n){var xe,_e,he,we,Ce;const{state:d,toast:a,openModal:r,closeModal:l,navigate:u,refreshProfile:s}=n,o=e.player,x=t.filter(fe=>fe.player.id===o.id),m=x.length,v=e.evolution_bonus||0,_=Math.max((Number(o.note_g)||0)+(o.job==="GK"||o.job2==="GK"?v:0),(Number(o.note_d)||0)+(o.job==="DEF"||o.job2==="DEF"?v:0),(Number(o.note_m)||0)+(o.job==="MIL"||o.job2==="MIL"?v:0),(Number(o.note_a)||0)+(o.job==="ATT"||o.job2==="ATT"?v:0)),g=o.rarity||"normal",{data:c}=await S.from("sell_price_configs").select("*").eq("rarity",g).lte("note_min",_).gte("note_max",_).order("note_min",{ascending:!1}).limit(1);((xe=c==null?void 0:c[0])==null?void 0:xe.price)??Fo[g];const T=o.rarity!=="legende";Ro(o);const p=((o.rarity==="pepite"||o.rarity==="papyte")&&e.current_note!=null?e.current_note:li(o,o.job))+v,L=o.rarity==="pepite"||o.rarity==="papyte",j=o.job2?(L?Qi(e,Po(o.job2)):li(o,o.job2))+(li(o,o.job2)>0?v:0):null;di[o.job],o.job2&&di[o.job2];const P=Bo[o.rarity]||"#ccc";No[o.country_code]||o.country_code;const G=e.evolution_bonus||0,N=p+G,K=j||0,Z=K>0?K+G:0,re=x.map(fe=>fe.id);let le={};if(re.length){const{data:fe}=await S.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",re).order("transferred_at",{ascending:!0});(fe||[]).forEach(me=>{le[me.card_id]||(le[me.card_id]=[]),le[me.card_id].push(me)})}const te=fe=>{const me=fe.transferred_at?new Date(fe.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",ge=fe.source==="booster"?"Booster":fe.price?fe.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${fe.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${fe.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${fe.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${ge}</div>
        <div style="font-size:11px;color:var(--gray-600)">${me}</div>
      </div>
    </div>`},U=re.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${m>1?`(${m})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${x.map((fe,me)=>{const ge=le[fe.id]||[],H=fe.is_for_sale,Q=ge.length?ge[ge.length-1]:null,se=(o.rarity==="pepite"||o.rarity==="papyte")&&fe.current_note!=null?` (☆${fe.current_note})`:"";return`
            <div data-card-id="${fe.id}" data-card-idx="${me}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${H?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${fe.id}" ${H?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${me+1}${se}${H?" 🏷️ En vente":""}</div>
                  ${Q?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${Q.club_name} · ${Q.source==="booster"?"Booster":Q.price?Q.price.toLocaleString("fr")+" cr.":"—"}
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
      ${nt({...o,_evolution_bonus:v},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${P}">${o.rarity.toUpperCase()}</div>
          ${o.rarity==="pepite"||o.rarity==="papyte"?`
          <div style="margin-top:6px;background:${P}18;border-left:3px solid ${P};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${P};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",o.note_g],["DEF",o.note_d],["MIL",o.note_m],["ATT",o.note_a]].map(([fe,me])=>{const ge=di[fe],H=fe==="GK"?"#fff":ge,Q=fe===o.job||fe===o.job2,ae=(Number(me)||0)+(Q&&G>0?G:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${ge};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${H};font-family:Arial Black,Arial;line-height:1">${ae}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${H}">${fe}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${m}</div>
        </div>
      </div>
    </div>
    ${U}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(_e=document.getElementById("close-detail"))==null||_e.addEventListener("click",l);let D=new Set;const oe=()=>{const fe=D.size,me=document.getElementById("sell-action-panel");if(!me)return;me.style.display=fe>0?"block":"none",document.getElementById("sell-selected-count").textContent=fe;const ge=document.getElementById("evolve-btn");ge&&(ge.textContent=`⬆️ Évoluer ${fe>1?"(+"+fe+")":""}`)};document.querySelectorAll(".expl-check").forEach(fe=>{fe.addEventListener("change",()=>{const me=fe.dataset.id;fe.checked?D.add(me):D.delete(me);const ge=fe.closest(".exemplaire-row");ge&&(ge.style.borderColor=fe.checked?"#1A6B3C":"#eee"),oe()})}),document.querySelectorAll(".exemplaire-row").forEach(fe=>{fe.addEventListener("click",me=>{if(me.target.closest("button")||me.target.tagName==="INPUT")return;const ge=fe.querySelector(".expl-check");ge&&!ge.disabled&&(ge.checked=!ge.checked,ge.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(fe=>{fe.addEventListener("click",me=>{me.stopPropagation();const ge=document.querySelector(`.expl-hist[data-hist="${fe.dataset.idx}"]`);ge&&(ge.style.display=ge.style.display==="none"?"flex":"none")})}),(he=document.getElementById("evolve-btn"))==null||he.addEventListener("click",async()=>{if(m<=1)return;const fe=[...D];if(!fe.length)return;if(D.has(e.id)){const pe=document.createElement("div");pe.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",pe.innerHTML=`
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
            📈 Note : <strong>${p+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${p+(e.evolution_bonus||0)+me.length*ge}</strong>
            ${j&&j>0?`<br>📈 Note 2 : <strong>${j+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${j+(e.evolution_bonus||0)+me.length*ge}</strong>`:""}
            ${o.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${ge} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(ee),ee.querySelector("#sac-cancel").addEventListener("click",()=>{ee.remove(),pe(!1)}),ee.querySelector("#sac-ok").addEventListener("click",()=>{ee.remove(),pe(!0)}),ee.addEventListener("click",de=>{de.target===ee&&(ee.remove(),pe(!1))})}))return;if(me.length){await S.from("market_listings").delete().in("card_id",me),await S.from("deck_cards").delete().in("card_id",me),await S.from("transfer_history").delete().in("card_id",me),await S.from("decks").update({stadium_card_id:null}).in("stadium_card_id",me);const{error:pe}=await S.from("cards").delete().in("id",me);if(pe){a("Erreur suppression : "+pe.message,"error");return}}const Q=(e.evolution_bonus||0)+me.length*ge,{error:ae}=await S.from("cards").update({evolution_bonus:Q}).eq("id",e.id);if(ae){a("Erreur évolution : "+ae.message,"error");return}const se=p+Q;a(`⬆️ ${o.firstname} ${o.surname_real} : note ${p+e.evolution_bonus||p} → ${se}${me.length?` · ${me.length} copie${me.length>1?"s":""} sacrifiée${me.length>1?"s":""}`:""} !`,"success",4e3),l(),u("collection")}),(we=document.getElementById("market-sell-btn"))==null||we.addEventListener("click",async()=>{var ae;const fe=[...D];if(!fe.length){a("Sélectionne au moins un exemplaire","warning");return}const me=parseInt((ae=document.getElementById("sell-market-price"))==null?void 0:ae.value);if(!me||me<1){a("Prix invalide","error");return}const{error:ge}=await S.from("cards").update({is_for_sale:!0,sale_price:me}).in("id",fe);if(ge){a(ge.message,"error");return}const H=fe.map(se=>({seller_id:d.profile.id,card_id:se,price:me,status:"active"})),{error:Q}=await S.from("market_listings").insert(H);Q&&console.warn("[Market] insert listings:",Q.message),a(`${fe.length} carte${fe.length>1?"s":""} mise${fe.length>1?"s":""} en vente à ${me.toLocaleString("fr")} cr. chacune !`,"success"),l(),u("collection")}),(Ce=document.getElementById("cancel-sell-btn"))==null||Ce.addEventListener("click",async()=>{await S.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await S.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),a("Annonce retirée","success"),l(),u("collection")})}const Xt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function gi(e,t){const{state:i,navigate:n,toast:d}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await S.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((a==null?void 0:a.length)||0)+1}`);if(!r)return;const{data:l,error:u}=await S.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(u){d(u.message,"error");return}d("Deck créé !","success"),Fi(l.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>Fi(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const l=prompt("Nouveau nom :",r.dataset.name);if(!l||l===r.dataset.name)return;const{error:u}=await S.from("decks").update({name:l}).eq("id",r.dataset.rename);if(u){d(u.message,"error");return}d("Deck renommé !","success"),gi(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await S.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:l}=await S.from("decks").delete().eq("id",r.dataset.delete);if(l){d(l.message,"error");return}d("Deck supprimé.","success"),gi(e,t)})})}async function Fi(e,t,i){const{state:n,toast:d}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await S.from("decks").select("*").eq("id",e).single(),{data:r}=await S.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:l}=await S.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),u=(r||[]).filter(T=>T.card_type==="player"&&T.player),s=(r||[]).filter(T=>T.card_type==="formation"),o=(l||[]).filter(T=>T.card_type==="stadium"),x=[...new Set(o.map(T=>T.stadium_id).filter(Boolean))];let m={};if(o.forEach(T=>{T.stadium_def&&T.stadium_id&&(m[T.stadium_id]=T.stadium_def)}),x.length&&Object.keys(m).length<x.length){const{data:T}=await S.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",x);(T||[]).forEach(p=>{m[p.id]=p})}const v=s.map(T=>T.formation).filter(Boolean),{data:_}=await S.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let g=a.formation||"4-4-2";v.length>0&&!v.includes(g)&&(g=v[0]);const c={deckId:e,name:a.name,formation:g,formationCardId:a.formation_card_id,stadiumCardId:a.stadium_card_id||null,slots:{},subs:[],playerCards:u,formationCards:s,stadiumCards:o,stadDefMap:m,availableFormations:v};(_||[]).forEach(T=>{T.is_starter?c.slots[T.position]=T.card_id:c.subs.includes(T.card_id)||c.subs.push(T.card_id)}),vt(t,c,i)}function vt(e,t,i){var _,g;const{navigate:n}=i;Xt[t.formation];const d=Gi(t.formation),a=d.filter(c=>t.slots[c]).length,r=t.availableFormations.length>0?t.availableFormations:Object.keys(Xt),l=(_=t.stadiumCards)==null?void 0:_.find(c=>c.id===t.stadiumCardId),u=l&&((g=t.stadDefMap)==null?void 0:g[l.stadium_id])||null,s=t.subs.map(c=>t.playerCards.find(T=>T.id===c)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
            ${s.map(c=>{const T={...c.player,_evolution_bonus:c.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                ${nt({...T,_evolution_bonus:T._evolution_bonus||0},{width:60,showStad:!0,stadDef:u})}
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
              ${l?(()=>{var p;const c=t.stadDefMap[l.stadium_id],T=((p=c==null?void 0:c.club)==null?void 0:p.logo_url)||null;return`<div style="width:100px;height:130px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px">
                  ${T?`<img src="${T}" style="width:48px;height:48px;object-fit:contain">`:'<span style="font-size:36px">🏟️</span>'}
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
            <div style="display:flex;gap:4px;align-items:center;flex-wrap:nowrap;overflow-x:auto" id="subs-list">
              ${s.map(c=>{const T={...c.player,_evolution_bonus:c.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0;overflow:visible">
                  ${nt({...T,_evolution_bonus:T._evolution_bonus||0},{width:44,showStad:!0,stadDef:u})}
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
              ${l?(()=>{var p;const c=t.stadDefMap[l.stadium_id],T=((p=c==null?void 0:c.club)==null?void 0:p.logo_url)||null;return`<div style="width:50px;height:65px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px">
                  ${T?`<img src="${T}" style="width:26px;height:26px;object-fit:contain">`:'<span style="font-size:18px">🏟️</span>'}
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
  </div>`;const o=window.innerWidth>=900,x=e.querySelector(".deck-pc-layout"),m=e.querySelector(".deck-mobile-layout");x&&(x.style.display=o?"block":"none"),m&&(m.style.display=o?"none":"block"),Ko(e,t,d,i),e.querySelectorAll("#builder-back").forEach(c=>c.addEventListener("click",()=>n("decks")));const v=()=>{const{openModal:c,closeModal:T}=i,p=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${r.map(L=>`<div data-forma="${L}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${L===t.formation?"#1A6B3C":"#f0f0f0"};color:${L===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${L===t.formation?"#1A6B3C":"#ddd"}">${L}</div>`).join("")}
    </div>`;c("⚽ Choisir une formation",p),document.querySelectorAll("#modal-body [data-forma]").forEach(L=>{L.addEventListener("click",()=>{t.formation=L.dataset.forma;const j=Gi(t.formation),P={};j.forEach(G=>{t.slots[G]&&(P[G]=t.slots[G])}),t.slots=P,T(),vt(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(c=>c.addEventListener("click",v)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(c=>c.addEventListener("click",()=>Vo(t,e,i))),e.querySelectorAll("#save-deck").forEach(c=>c.addEventListener("click",()=>Jo(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(c=>{c.addEventListener("click",()=>{t.subs=t.subs.filter(T=>T!==c.dataset.removeSub),vt(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(c=>c.addEventListener("click",()=>Wo(t,e,i)))}function Ko(e,t,i,n){var L,j;const d=window.innerWidth>=900,a=e.querySelector(d?"#deck-field-pc":"#deck-field-mobile");if(!a)return;const r=(L=t.stadiumCards)==null?void 0:L.find(P=>P.id===t.stadiumCardId),l=r&&((j=t.stadDefMap)==null?void 0:j[r.stadium_id])||null,u=Rt[t.formation]||{},s=Oi(t.formation)||[],o={};for(const P of i){const G=t.slots[P],q=G?t.playerCards.find(N=>N.id===G):null;q!=null&&q.player?o[P]={...q.player,_evolution_bonus:q.evolution_bonus||0,face:q.player.face||null}:o[P]=null}const x=window.innerWidth>=900,m=x?window.innerWidth-280:window.innerWidth-20,v=x?Math.min(m,860):m,_=Math.round(x?v*.82:v*.85),g=x?84:44;let c="";for(const[P,G]of s){const q=u[P],N=u[G];if(!q||!N)continue;const K=q.x*v,Z=Math.round(.03*_+q.y*.85*_),re=N.x*v,le=Math.round(.03*_+N.y*.85*_),te=o[P],U=o[G],D=rt(te,U);D==="#ff3333"||D==="#cc2222"?c+=`<line x1="${K.toFixed(1)}" y1="${Z.toFixed(1)}" x2="${re.toFixed(1)}" y2="${le.toFixed(1)}" stroke="${D}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(c+=`<line x1="${K.toFixed(1)}" y1="${Z.toFixed(1)}" x2="${re.toFixed(1)}" y2="${le.toFixed(1)}" stroke="${D}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,c+=`<line x1="${K.toFixed(1)}" y1="${Z.toFixed(1)}" x2="${re.toFixed(1)}" y2="${le.toFixed(1)}" stroke="${D}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let T="";const p=Math.round(g*657/507);for(const P of i){const G=u[P];if(!G)continue;const q=o[P],N=G.x*v;G.y*_;const K=Math.round(.03*_+G.y*(.85*_)),Z=Math.round(N-g/2),re=Math.round(K-p/2);if(q){const le=P.replace(/\d+/,""),te=l&&(l.club_id&&String(q.club_id)===String(l.club_id)||l.country_code&&q.country_code===l.country_code),U=nt({...q,_evolution_bonus:q._evolution_bonus||0},{width:g,showStad:!0,stadDef:l,role:le});T+=`<div style="position:absolute;left:${Z}px;top:${re}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${P}">
        <div style="position:relative">${te?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${U}</div>
      </div>`}else{const le=P.replace(/\d+/,"");T+=`<div style="position:absolute;left:${Z}px;top:${re}px;width:${g}px;height:${p}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${P}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${le}</span>
      </div>`}}a.innerHTML=`
    <div style="position:relative;width:${v}px;height:${_}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${v} ${_}">${c}</svg>
      ${T}
    </div>`,a.querySelectorAll(".deck-slot-hit").forEach(P=>{P.addEventListener("click",()=>Yo(P.dataset.pos,t,e,n))})}function Vo(e,t,i){var r;const{openModal:n,closeModal:d}=i,a=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${a.map(l=>{var T,p;const u=e.stadDefMap[l.stadium_id],s=((T=u==null?void 0:u.club)==null?void 0:T.logo_url)||null,o=u!=null&&u.image_url?"/icons/"+u.image_url:null,x=e.stadiumCardId===l.id,m=u!=null&&u.country_code&&!s?`https://flagsapi.com/${u.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,v=(u==null?void 0:u.name)||"Stade",_=v.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),g=_?_[1].trim():v.slice(0,8),c=((p=_==null?void 0:_[2])==null?void 0:p.trim())||"";return`<div class="stad-choice" data-stad-id="${l.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${x?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${o?`<img src="${o}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${s?`<img src="${s}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:m?`<img src="${m}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${x?"#4fc3f7":"#ccc"}">${g}</div>
              ${c?`<div style="font-size:8px;font-weight:700;color:${x?"#4fc3f7":"#aaa"}">${c}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(r=document.getElementById("stad-none"))==null||r.addEventListener("click",()=>{e.stadiumCardId=null,d(),vt(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(l=>{l.addEventListener("click",()=>{e.stadiumCardId=l.dataset.stadId,d(),vt(t,e,i)})})}function Yo(e,t,i,n){var _,g,c,T,p;const{openModal:d,closeModal:a}=n,r=e.replace(/\d+/,""),l=(_=t.stadiumCards)==null?void 0:_.find(L=>L.id===t.stadiumCardId),u=l&&((g=t.stadDefMap)==null?void 0:g[l.stadium_id])||null,s=t.slots[e],o=s?t.playerCards.find(L=>L.id===s):null;(c=o==null?void 0:o.player)==null||c.id;const x=new Set;Object.entries(t.slots).forEach(([L,j])=>{var G;if(L===e||!j)return;const P=t.playerCards.find(q=>q.id===j);(G=P==null?void 0:P.player)!=null&&G.id&&x.add(P.player.id)}),t.subs.forEach(L=>{var P;const j=t.playerCards.find(G=>G.id===L);(P=j==null?void 0:j.player)!=null&&P.id&&x.add(j.player.id)});const m=new Set,v=t.playerCards.filter(L=>{const j=L.player;return!(j.job===r||j.job2===r)||x.has(j.id)||m.has(j.id)?!1:(m.add(j.id),!0)});v.sort((L,j)=>{const P=L.evolution_bonus||0,G=j.evolution_bonus||0,q=(r==="GK"?L.player.note_g:r==="DEF"?L.player.note_d:r==="MIL"?L.player.note_m:L.player.note_a)+(r===L.player.job||r===L.player.job2?P:0);return(r==="GK"?j.player.note_g:r==="DEF"?j.player.note_d:r==="MIL"?j.player.note_m:j.player.note_a)+(r===j.player.job||r===j.player.job2?G:0)-q}),d(`Choisir ${r} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${v.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+v.map(L=>{const j={...L.player,_evolution_bonus:L.evolution_bonus||0};return`<div class="player-option" data-card-id="${L.id}" style="cursor:pointer">
          ${nt(j,{width:100,showStad:!0,stadDef:u,role:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(T=document.getElementById("close-selector"))==null||T.addEventListener("click",a),(p=document.getElementById("remove-player"))==null||p.addEventListener("click",()=>{delete t.slots[e],a(),vt(i,t,n)}),document.querySelectorAll(".player-option").forEach(L=>{L.addEventListener("click",()=>{t.slots[e]=L.dataset.cardId,a(),vt(i,t,n)})})}function Wo(e,t,i){var o,x,m;const{openModal:n,closeModal:d}=i,a=(o=e.stadiumCards)==null?void 0:o.find(v=>v.id===e.stadiumCardId),r=a&&((x=e.stadDefMap)==null?void 0:x[a.stadium_id])||null,l=new Set;Object.keys(e.slots).forEach(v=>{var c;const _=e.slots[v];if(!_)return;const g=e.playerCards.find(T=>T.id===_);(c=g==null?void 0:g.player)!=null&&c.id&&l.add(g.player.id)}),e.subs.forEach(v=>{var g;const _=e.playerCards.find(c=>c.id===v);(g=_==null?void 0:_.player)!=null&&g.id&&l.add(_.player.id)});const u=new Set,s=e.playerCards.filter(v=>{var _,g,c;return l.has((_=v.player)==null?void 0:_.id)||u.has((g=v.player)==null?void 0:g.id)?!1:(u.add((c=v.player)==null?void 0:c.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+s.map(v=>{const _={...v.player,_evolution_bonus:v.evolution_bonus||0};return`<div class="player-option" data-card-id="${v.id}" style="cursor:pointer">
          ${nt(_,{width:100,showStad:!0,stadDef:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(m=document.getElementById("close-sub-selector"))==null||m.addEventListener("click",d),document.querySelectorAll(".player-option").forEach(v=>{v.addEventListener("click",()=>{e.subs.push(v.dataset.cardId),d(),vt(t,e,i)})})}async function Jo(e,t){const{state:i,toast:n,navigate:d}=t,a=e.formationCards.find(u=>u.formation===e.formation),r=(a==null?void 0:a.id)||e.formationCardId;await S.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await S.from("deck_cards").delete().eq("deck_id",e.deckId);const l=[];if(Object.entries(e.slots).forEach(([u,s],o)=>{l.push({deck_id:e.deckId,card_id:s,position:u,is_starter:!0,slot_order:o})}),e.subs.forEach((u,s)=>{l.push({deck_id:e.deckId,card_id:u,position:`SUB${s+1}`,is_starter:!1,slot_order:100+s})}),l.length>0){const{error:u}=await S.from("deck_cards").insert(l);if(u){n(u.message,"error");return}}n("Deck enregistré ✅","success"),d("decks")}function Gi(e){const t=Xt[e]||Xt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function eo(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await S.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let d=n;if(e){const r=n.filter(l=>l.max_per_user!=null);if(r.length){const{data:l}=await S.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(s=>s.id)),u={};(l||[]).forEach(s=>{u[s.booster_id]=(u[s.booster_id]||0)+1}),d=n.filter(s=>s.max_per_user==null?!0:(u[s.id]||0)<s.max_per_user)}}if(!d.length)return[];const{data:a}=await S.from("booster_drop_rates").select("*").in("booster_id",d.map(r=>r.id)).order("sort_order");return d.map(r=>({...r,rates:(a||[]).filter(l=>l.booster_id===r.id)}))}async function Xo(e,t){const{data:i}=await S.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await S.from("booster_claims").insert({user_id:e,booster_id:t})}function Qo(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,d)=>n+Number(d.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const to=()=>Object.keys(Rt),Zo=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],mi={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function en(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return nt({...t,_evolution_bonus:i},{width:140})}function io(e){var d;const t={};(e.rates||[]).forEach(a=>{t[a.card_type]=(t[a.card_type]||0)+Number(a.percentage||0)});const i=((d=Object.entries(t).sort((a,r)=>r[1]-a[1])[0])==null?void 0:d[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function tn(e,{state:t,navigate:i,toast:n}){var x,m,v;const d=((x=t.profile)==null?void 0:x.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let a=[];try{a=(await eo((m=t.user)==null?void 0:m.id)).map(io)}catch(_){console.warn("Erreur chargement boosters DB, fallback hardcodé",_)}a.length||(a=Zo.map(_=>({..._,rates:[],isPub:_.id==="players_pub"})));const r=await S.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(_=>_.data||[]),l=new Set(r.filter(_=>_.card_type==="stadium").map(_=>_.stadium_id)),u=new Set(r.filter(_=>_.card_type==="formation").map(_=>_.formation)),s=new Set(r.filter(_=>_.card_type==="game_changer").map(_=>_.gc_type)),o={};for(const _ of a){if(_.allow_duplicates!==!1||!((v=_.rates)!=null&&v.length))continue;const g=[...new Set((_.rates||[]).map(T=>T.card_type))];let c=!1;for(const T of g)if(T==="stadium"){const{data:p}=await S.from("stadium_definitions").select("id");if((p||[]).some(L=>!l.has(L.id))){c=!0;break}}else if(T==="game_changer"){const{data:p}=await S.from("gc_definitions").select("name").eq("is_active",!0);if((p||[]).some(L=>!s.has(L.name))){c=!0;break}}else if(T==="formation"){const{FORMATION_LINKS:p}=await ii(async()=>{const{FORMATION_LINKS:L}=await import("./formation-links-1Ic4vV1e.js").then(j=>j.q);return{FORMATION_LINKS:L}},__vite__mapDeps([0,1]));if(Object.keys(p).some(L=>!u.has(L))){c=!0;break}}else{c=!0;break}c||(o[_.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${d.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${a.map(_=>{const g=_.cost===0||d>=_.cost,c=o[_.id]===!0;return`<div class="booster-card ${!g||c?"disabled":""}" data-booster="${_.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(_=>{_.addEventListener("click",async()=>{const g=a.find(c=>c.id===_.dataset.booster);if(g){_.style.opacity="0.5",_.style.pointerEvents="none";try{await on(g,{state:t,toast:n,navigate:i,container:e})}catch(c){n(c.message,"error"),_.style.opacity="",_.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(_=>{_.addEventListener("click",g=>{g.stopPropagation();const c=a.find(T=>T.id===_.dataset.boosterId);sn(c)})})}async function on(e,{state:t,toast:i,navigate:n,container:d}){var x,m;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await ln();const{data:a}=await S.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((a||[]).filter(v=>v.card_type==="player").map(v=>v.player_id)),l=new Set((a||[]).filter(v=>v.card_type==="formation").map(v=>v.formation));let u=[],s=null;try{if((x=e.rates)!=null&&x.length)u=await xi(t.profile,e);else{const v=e.type||"player";v==="player"?u=await oo(t.profile,e.cardCount,e.cost):v==="game_changer"?u=await no(t.profile,e.cardCount,e.cost):v==="formation"?u=await ro(t.profile,e.cost):u=await xi(t.profile,e)}}catch(v){s=v.message||String(v),console.error("[Booster] Erreur:",v)}if(u!=null&&u.length&&e._boosterId&&await Xo(t.user.id,e._boosterId),!(u!=null&&u.length)){const v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",v.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${s||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(v),(m=v.querySelector("#anim-close-err"))==null||m.addEventListener("click",()=>v.remove());return}u.forEach(v=>{v.card_type==="player"&&v.player?v.isDuplicate=r.has(v.player.id):v.card_type==="formation"&&(v.isDuplicate=l.has(v.formation))});const{data:o}=await S.from("users").select("*").eq("id",t.profile.id).single();o&&(t.profile=o),ao(u,e,n)}function nn(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function bt(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function rn(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>bt(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>bt(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&bt(n)>=6),i.length||(i=e.filter(n=>bt(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&bt(n)>=1&&bt(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function xi(e,t){if(t.cost>0){const{error:m}=await S.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(m)throw m}const i=t.allow_duplicates!==!1;let n=[];const{data:d,error:a}=await S.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(a){const{data:m}=await S.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=m||[]}else n=d||[];const r=new Set(n.filter(m=>m.card_type==="player").map(m=>m.player_id)),l=new Set(n.filter(m=>m.card_type==="formation").map(m=>m.formation)),u=new Set(n.filter(m=>m.card_type==="game_changer").map(m=>m.gc_type)),s=new Set(n.filter(m=>m.card_type==="stadium").map(m=>m.stadium_id).filter(Boolean)),o=new Set,x=[];for(let m=0;m<(t.cardCount||5);m++){const v=Qo(t.rates);if(v){if(v.card_type==="player"){const _=q=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[q]||q,g=v.rarity?_(v.rarity):null;let c=S.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);g&&(c=c.eq("rarity",g));const{data:T}=await c;let p=T||[];if((v.note_min||v.note_max)&&(p=p.filter(q=>{const N=Math.max(Number(q.note_g)||0,Number(q.note_d)||0,Number(q.note_m)||0,Number(q.note_a)||0);return(!v.note_min||N>=v.note_min)&&(!v.note_max||N<=v.note_max)})),p.length||(v.note_min||v.note_max?(p=T||[],console.warn("[Booster] Aucun joueur avec note",v.note_min,"-",v.note_max,"— fallback rareté uniquement")):p=T||[]),!p.length)continue;let L=p.filter(q=>!o.has(q.id));if(i)L.length||(L=p);else if(L=L.filter(q=>!r.has(q.id)),!L.length)continue;const j=L[Math.floor(Math.random()*L.length)];o.add(j.id);const P=r.has(j.id),{data:G}=await S.from("cards").insert({owner_id:e.id,player_id:j.id,card_type:"player"}).select().single();G&&(x.push({...G,player:j,isDuplicate:P}),S.rpc("record_transfer",{p_card_id:G.id,p_player_id:j.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(v.card_type==="game_changer"){const{data:_}=await S.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),g=_!=null&&_.length?_:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],c=i?g:g.filter(j=>!u.has(j.name));if(!i&&!c.length)continue;const p=c[Math.floor(Math.random()*c.length)].name,{data:L}=await S.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:p}).select().single();L&&x.push(L)}else if(v.card_type==="formation"){const _=to(),g=i?_:_.filter(L=>!l.has(L));if(!i&&!g.length)continue;const c=g[Math.floor(Math.random()*g.length)],T=l.has(c),{data:p}=await S.from("cards").insert({owner_id:e.id,card_type:"formation",formation:c}).select();p!=null&&p[0]&&x.push({...p[0],isDuplicate:T})}else if(v.card_type==="stadium"){const{data:_,error:g}=await S.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(g){console.error("[Booster] stadium_definitions:",g.message);continue}if(!(_!=null&&_.length)){console.warn("[Booster] Aucun stade en DB");continue}const c=i?_:_.filter(j=>!s.has(j.id));if(!i&&!c.length)continue;const T=c[Math.floor(Math.random()*c.length)],{data:p,error:L}=await S.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:T.id}).select("id,card_type,stadium_id").single();if(L){console.error("[Booster] insert stadium card:",L.message);continue}p&&x.push({...p,rarity:"normal",_stadiumDef:T})}}}return x}async function oo(e,t,i){if(i>0){const{error:s}=await S.from("users").update({credits:e.credits-i}).eq("id",e.id);if(s)throw s}const{data:n}=await S.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const d=n.filter(s=>s.job==="GK"),a=n.filter(s=>s.job!=="GK"),r=!e.first_booster_opened&&d.length>0,l=[];for(let s=0;s<t;s++){const o=s===0&&r?d:s===0?a:n,x=nn(),m=rn(o,x);m&&l.push(m)}r&&await S.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:u}=await S.from("cards").insert(l.map(s=>({owner_id:e.id,player_id:s.id,card_type:"player"}))).select();return(u||[]).forEach((s,o)=>{S.rpc("record_transfer",{p_card_id:s.id,p_player_id:l[o].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),l.map((s,o)=>({...u[o],player:s}))}async function no(e,t,i){const{error:n}=await S.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:d}=await S.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),a=d!=null&&d.length?d:Object.keys(mi).map(o=>({name:o,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const o=a[Math.floor(Math.random()*a.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:o.name,gc_definition_id:o.id||null}}),{data:l,error:u}=await S.from("cards").insert(r).select();return u&&console.error("[Booster GC] Erreur insert:",u.message,u),(l||[]).map(o=>{const x=d==null?void 0:d.find(m=>m.name===o.gc_type||m.id===o.gc_definition_id);return{...o,_gcDef:x||null}})}async function ro(e,t){const{error:i}=await S.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await S.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),d=new Set((n||[]).map(o=>o.formation)),a=to(),r=a[Math.floor(Math.random()*a.length)],l=d.has(r),{data:u,error:s}=await S.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return s&&console.error("[Booster Formation] Erreur insert:",s.message,s),(u||[]).map(o=>({...o,isDuplicate:l}))}function ao(e,t,i,n=null){var le,te;if(!e||e.length===0){const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",U.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(U),(le=U.querySelector("#anim-close-err"))==null||le.addEventListener("click",()=>U.remove());return}e=[...e].sort((U,D)=>{const oe=U.player?bt(U.player):-1;return(D.player?bt(D.player):-1)-oe});const d=document.createElement("div");d.id="booster-anim-overlay",d.innerHTML=`
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
  `,document.body.appendChild(d);let a=!1;const r=document.getElementById("pack-cut-zone"),l=document.getElementById("pack-blade");let u=!1;const s=U=>U.touches&&U.touches[0]?U.touches[0].clientX:U.clientX;function o(U){a||(u=!0,l.style.opacity="1",x(U))}function x(U){if(!u||a)return;const D=r.getBoundingClientRect(),oe=s(U)-D.left,xe=Math.max(0,Math.min(1,oe/D.width));l.style.width=xe*D.width+"px",xe>=.82&&v()}function m(){a||(u=!1,l.style.transition="width .2s ease, opacity .2s ease",l.style.width="0",l.style.opacity="0",setTimeout(()=>{a||(l.style.transition="")},220))}function v(){var D;if(a)return;a=!0,u=!1,l.style.width="100%",l.style.opacity="1",(D=document.getElementById("cut-flash"))==null||D.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const U=document.getElementById("cut-hint");U&&(U.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{l.style.opacity="0",document.getElementById("pack-phase").style.display="none",T(0)},620)}r.addEventListener("pointerdown",o),window.addEventListener("pointermove",x),window.addEventListener("pointerup",m),r.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchmove",x,{passive:!0}),window.addEventListener("touchend",m);let _=0,g=!1;const c=new Set;function T(U){_=U,document.getElementById("reveal-phase").style.display="flex",p(),L(U,0),N()}function p(){const U=document.getElementById("card-dots");U&&(U.innerHTML=e.map((D,oe)=>`<div class="card-dot" data-i="${oe}" style="width:8px;height:8px;border-radius:50%;background:${oe===_?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),U.querySelectorAll(".card-dot").forEach(D=>D.addEventListener("click",()=>P(parseInt(D.dataset.i)))))}function L(U,D){var ge,H;const oe=e[U],xe=document.getElementById("card-counter"),_e=document.getElementById("card-track");xe&&(xe.textContent=`Carte ${U+1} / ${e.length}`);const he=document.getElementById("reveal-btns");he&&(he.style.display=U===e.length-1?"flex":"none");const we=oe.card_type==="player"&&((ge=oe.player)==null?void 0:ge.rarity)==="legende",Ce=!c.has(U);c.add(U);let fe=0;if(oe.card_type==="player"&&oe.player){const Q=oe.player,ae=Q.job||"ATT";fe=Number(ae==="GK"?Q.note_g:ae==="DEF"?Q.note_d:ae==="MIL"?Q.note_m:Q.note_a)||0}const me=Q=>{_e.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${we?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${an(oe)}</div>
          ${oe.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const ae=document.getElementById("current-card-wrap");D!==0?(ae.style.transition="none",ae.style.transform=`translateX(${D>0?100:-100}%)`,requestAnimationFrame(()=>{ae.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",ae.style.transform="translateX(0)"})):ae.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),Q||we?Z():re(),p()};Ce&&(((H=oe.player)==null?void 0:H.rarity)==="legende"||fe>=8)&&oe.card_type==="player"&&oe.player?j(oe,()=>me(!0)):me(!1)}function j(U,D){var Ae;g=!0;const oe=U.player,xe=`https://flagsapi.com/${oe.country_code}/flat/64.png`,_e=(Ae=oe.clubs)==null?void 0:Ae.logo_url,he=oe.face?"/"+oe.face.replace(/^public\//,"").replace(/^\//,""):null,we=oe.job||"ATT",Ce=Number(we==="GK"?oe.note_g:we==="DEF"?oe.note_d:we==="MIL"?oe.note_m:oe.note_a)||0,fe=U.evolution_bonus||0,me=Ce+fe,ge=oe.rarity==="legende",H=me>=18,Q=document.getElementById("walkout-overlay"),ae=document.getElementById("walkout-stage");if(!Q||!ae){g=!1,D();return}let se=null;ge&&(se=new Audio("/sounds/Legendary.mp3"),se.volume=.8,se.play().catch(()=>{})),Q.style.display="flex";const pe=()=>{const ke=ae.firstElementChild;ke&&(ke.classList.remove("wo-in"),ke.classList.add("wo-out"))},ee=1800,de=400;ae.innerHTML=`<img class="wo-in" src="${xe}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(pe,ee),setTimeout(()=>{var ke;ae.innerHTML=_e?`<img class="wo-in" src="${_e}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((ke=oe.clubs)==null?void 0:ke.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},ee+de),setTimeout(pe,ee*2+de),setTimeout(()=>{ae.innerHTML=he?`<img class="wo-in" src="${he}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(ee+de)*2),setTimeout(pe,(ee+de)*2+ee);const Te=H?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[we]||"#fff";setTimeout(()=>{ae.innerHTML=`<div class="wo-in" style="
        font-size:${H?"120px":"90px"};font-weight:900;color:${Te};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${Te}, 0 0 60px ${Te};
        ${H?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${me}
      </div>`,H&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(ee+de)*3),setTimeout(pe,(ee+de)*3+ee),setTimeout(()=>{Q.style.display="none",ae.innerHTML="",g=!1,se&&!ge&&se.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),D()},(ee+de)*4)}function P(U){if(g||U<0||U>=e.length||U===_)return;const D=U>_?1:-1;_=U,L(U,D)}function G(){P(_+1)}function q(){P(_-1)}function N(){const U=document.getElementById("card-viewport");if(!U||U._swipeBound)return;U._swipeBound=!0;let D=0,oe=0,xe=0,_e=!1;const he=ge=>ge.touches?ge.touches[0].clientX:ge.clientX,we=ge=>ge.touches?ge.touches[0].clientY:ge.clientY,Ce=ge=>{_e=!0,D=he(ge),oe=we(ge),xe=0},fe=ge=>{if(!_e)return;xe=he(ge)-D;const H=we(ge)-oe;if(Math.abs(xe)<Math.abs(H))return;const Q=document.getElementById("current-card-wrap");Q&&(Q.style.transition="none",Q.style.transform=`translateX(${xe*.6}px) rotate(${xe*.02}deg)`)},me=()=>{if(!_e)return;_e=!1;const ge=document.getElementById("current-card-wrap"),H=55;xe<=-H&&_<e.length-1?G():xe>=H&&_>0?q():ge&&(ge.style.transition="transform .2s ease",ge.style.transform="translateX(0)")};U.addEventListener("pointerdown",Ce),U.addEventListener("pointermove",fe),U.addEventListener("pointerup",me),U.addEventListener("pointercancel",me),U.addEventListener("touchstart",Ce,{passive:!0}),U.addEventListener("touchmove",fe,{passive:!0}),U.addEventListener("touchend",me),U.addEventListener("click",ge=>{if(Math.abs(xe)>8)return;const H=U.getBoundingClientRect();ge.clientX-H.left>H.width/2?G():q()})}let K=null;function Z(){const U=document.getElementById("fireworks-canvas");if(!U)return;U.width=window.innerWidth,U.height=window.innerHeight;const D=U.getContext("2d"),oe=[];function xe(){const he=Math.random()*U.width,we=Math.random()*U.height*.6,Ce=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],fe=Ce[Math.floor(Math.random()*Ce.length)];for(let me=0;me<60;me++){const ge=Math.PI*2/60*me,H=2+Math.random()*5;oe.push({x:he,y:we,vx:Math.cos(ge)*H,vy:Math.sin(ge)*H,alpha:1,color:fe,size:2+Math.random()*3})}}xe(),K=setInterval(xe,600);function _e(){if(document.getElementById("fireworks-canvas")){D.clearRect(0,0,U.width,U.height);for(let he=oe.length-1;he>=0;he--){const we=oe[he];if(we.x+=we.vx,we.y+=we.vy+.08,we.vy*=.98,we.alpha-=.018,we.alpha<=0){oe.splice(he,1);continue}D.globalAlpha=we.alpha,D.fillStyle=we.color,D.beginPath(),D.arc(we.x,we.y,we.size,0,Math.PI*2),D.fill()}D.globalAlpha=1,(K!==null||oe.length>0)&&requestAnimationFrame(_e)}}_e()}function re(){K!==null&&(clearInterval(K),K=null);const U=document.getElementById("fireworks-canvas");U&&U.getContext("2d").clearRect(0,0,U.width,U.height)}if(n){const U=document.getElementById("reveal-btns");U&&(U.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(te=document.getElementById("reveal-next"))==null||te.addEventListener("click",()=>{re(),d.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{re(),d.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{re(),d.remove(),i("boosters")})}function an(e){var t,i,n,d;if(e.card_type==="player"&&e.player)return en(e);if(e.card_type==="game_changer"){const a=e._gcDef,r=(a==null?void 0:a.gc_type)==="ultra_game_changer",l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},u={purple:"#b06ce0",light_blue:"#00d4ef"},s=l[a==null?void 0:a.color]||l.purple,o=u[a==null?void 0:a.color]||u.purple,x=(a==null?void 0:a.name)||e.gc_type||"Game Changer",m=(a==null?void 0:a.effect)||((t=mi[e.gc_type])==null?void 0:t.desc)||"",v=a!=null&&a.image_url?`/icons/${a.image_url}`:null,_=((i=mi[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${s};border-radius:14px;border:3px solid ${o};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${o}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${x.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${x}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${v?`<img src="${v}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${_}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${m.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const a=e._stadiumDef,r=(a==null?void 0:a.name)||"Stade",l=((n=a==null?void 0:a.club)==null?void 0:n.encoded_name)||(a==null?void 0:a.country_code)||"—",u=a!=null&&a.image_url?`/icons/${a.image_url}`:((d=a==null?void 0:a.club)==null?void 0:d.logo_url)||(a!=null&&a.country_code?`https://flagsapi.com/${a.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${r.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${r}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${u?`<img src="${u}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function sn(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const d={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},a={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}dn()}function dn(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function ln(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const d=document.getElementById("mw-ad-cd");d&&(d.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function cn(e,{state:t,navigate:i,toast:n,refreshProfile:d}){var m,v;const{data:a}=await S.from("users").select("*").eq("id",t.user.id).single();a&&(t.profile=a);let r=Array.isArray((m=t.profile)==null?void 0:m.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await S.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let l=null;try{const g=(await eo()).find(c=>(c.name||"").toLowerCase().includes("new player"));g&&(l=io(g))}catch(_){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',_)}const u=r.length;let s=0;e.innerHTML=`
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
  </div>`;const o=async()=>{await S.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function x(){var p;if(s>=u||!r.length){await S.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),d&&await d(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const _=r[0],{data:g}=await S.from("users").select("*").eq("id",t.user.id).single();g&&(t.profile=g);let c=[];try{if(_.type==="formation")c=await ro(t.profile,0);else if(_.type==="game_changer")c=await no(t.profile,_.count||3,0);else if(l&&((p=l.rates)!=null&&p.length)){const L={...l,cost:0,cardCount:_.count||l.cardCount||5};c=await xi(t.profile,L),_.guaranteeGK&&!t.profile.first_booster_opened&&(c.some(P=>P.player&&P.player.job==="GK")||await pn(t.profile,c),await S.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else c=await oo(t.profile,_.count||5,0)}catch(L){n(L.message||"Erreur ouverture booster","error");return}r.shift(),s++,await o();const T=_.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:_.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${s}/${u})`,img:(l==null?void 0:l.img)||"/icons/booster-players.png"};ao(c,T,i,()=>{x()})}(v=document.getElementById("onboard-start"))==null||v.addEventListener("click",()=>x())}async function pn(e,t){try{const{data:i}=await S.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],d=t.findIndex(r=>r.player);if(d===-1)return;const a=t[d];await S.from("cards").update({player_id:n.id}).eq("id",a.id),t[d]={...a,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const Mt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Qt={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Et(e,t,i,n,d){var a;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(a=document.getElementById("msg-btn"))==null||a.addEventListener("click",d)}function Ue(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",d=e.face.replace(/^public\//,"").replace(/^\//,"");return n+d}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function bi(e,t){var a,r;const i=e.player,n=e.evolution_bonus||0,d=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&d>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&d>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&d>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&d>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((a=i.clubs)==null?void 0:a.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Tt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(d=>{Array.isArray(d)&&d.forEach(a=>{const r=i&&String(a.club_id)===String(i),l=n&&String(a.country_code)===String(n);(r||l)&&(a.stadiumBonus=!0)})}),e}function jt(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(d=>{if(!d)return;const a=i&&String(d.club_id)===String(i),r=n&&String(d.country_code)===String(n);(a||r)&&(d.stadiumBonus=!0)}),e}function dt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function oi(){const e=Math.random()*100;return e<10?3:e<30?2:1}function ht(e,t){const i=Mt[t]||Mt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const l=e.filter(s=>s.position&&s.position.replace(/\d+$/,"")===r).sort((s,o)=>parseInt(s.position.replace(/\D+/g,""),10)-parseInt(o.position.replace(/\D+/g,""),10)).map(s=>({...s,_line:r})),u=dt(l.length);l.forEach((s,o)=>{s._col=u[o]}),n[r]=l}return n}const a=[...e];for(const r of["GK","DEF","MIL","ATT"]){const l=[];for(let s=0;s<i[r];s++){let o=a.findIndex(x=>x.job===r);if(o===-1&&(o=a.findIndex(x=>x.job2===r)),o===-1&&(o=0),a[o]){const x={...a[o],_line:r};l.push(x),a.splice(o,1)}}const u=dt(l.length);l.forEach((s,o)=>{s._col=u[o]}),n[r]=l}return n}function et(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ve(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function ni(e,t,i){const d=new Set,a=t.filter(o=>{const x=o.gc_type||o.id;return d.has(x)?!1:(d.add(x),!0)});let r=[];function l(o,x){const m=o._gcDef,v={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},_={purple:"#9b59b6",light_blue:"#00bcd4"},g=v[m==null?void 0:m.color]||v.purple,c=_[m==null?void 0:m.color]||_.purple;return`<div class="gc-select-card" data-id="${o.id}"
      style="width:100px;border-radius:10px;border:3px solid ${x?"#FFD700":c};background:${g};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${x?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${x?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((m==null?void 0:m.name)||o.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(m==null?void 0:m.name)||o.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${m!=null&&m.image_url?`<img src="/icons/${m.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((m==null?void 0:m.effect)||"").slice(0,50)}</span>
      </div>
      ${x?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const u=o=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(o)};function s(){var x,m,v;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const o=r.length>0;e.innerHTML=`
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
        ${a.map(_=>{const g=r.find(c=>c.gc_type===_.gc_type);return l(_,!!g)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(_=>{_.addEventListener("click",()=>{const g=_.dataset.id,c=a.find(p=>p.id===g);if(!c)return;const T=r.findIndex(p=>p.gc_type===c.gc_type);T>-1?r.splice(T,1):r.length<3&&r.push(c),s()})}),(x=e.querySelector("#gc-launch"))==null||x.addEventListener("click",()=>{o&&u(r)}),(m=e.querySelector("#gc-no-gc"))==null||m.addEventListener("click",()=>u([])),(v=e.querySelector("#gc-reset"))==null||v.addEventListener("click",()=>{r.length&&(r=[],s())})}s()}function un(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function fn(e,t,i){const{state:n,navigate:d}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await S.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!a||a.length===0){Et(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>d("decks"));return}const r=a.map(m=>m.id),{data:l}=await S.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),u=[...new Set((l||[]).filter(m=>{var v,_;return((v=m.card)==null?void 0:v.card_type)==="stadium"&&((_=m.card)==null?void 0:_.stadium_id)}).map(m=>m.card.stadium_id))],s={};if(u.length){const{data:m}=await S.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",u);(m||[]).forEach(v=>{s[v.id]=v}),(l||[]).forEach(v=>{var _,g;((_=v.card)==null?void 0:_.card_type)==="stadium"&&((g=v.card)!=null&&g.stadium_id)&&(v.card._stadiumDef=s[v.card.stadium_id]||null)})}let o=0;function x(){var P,G,q,N,K,Z,re;const m=a[o],v=(l||[]).filter(le=>le.deck_id===m.id),_=v.filter(le=>{var te;return le.is_starter&&((te=le.card)==null?void 0:te.player)}).map(le=>bi(le.card,le.position)),g=v.find(le=>{var te;return((te=le.card)==null?void 0:te.card_type)==="formation"}),c=m.formation||((P=g==null?void 0:g.card)==null?void 0:P.formation)||"4-4-2";let T=_.length>=11?ht(_,c):null,p=((G=m.stadium_card)==null?void 0:G.stadium_def)||null;p&&T&&(T=Tt(T,p));const L=_.length>=11;et(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${un(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===0?"0.1":"0.3"});color:${o===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${m.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${c} · ${_.length}/11 ${m.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${o===a.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${o===a.length-1?"0.1":"0.3"});color:${o===a.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${o===a.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${p?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${p.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((q=p.club)==null?void 0:q.encoded_name)||p.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview : SVG occupe toute la zone disponible (carré max) -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${T?`<div class="deck-preview-wrap" style="aspect-ratio:1/1;max-width:100%;max-height:100%;width:auto;height:100%;overflow:hidden">${pt(T,c,null,[],285,285)}</div>`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
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
    </div>`,function(){const te=e.querySelector(".deck-preview-wrap svg");te&&(te.removeAttribute("width"),te.removeAttribute("height"),te.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",te.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(N=document.getElementById("prev-deck"))==null||N.addEventListener("click",()=>{o>0&&(o--,x())}),(K=document.getElementById("next-deck"))==null||K.addEventListener("click",()=>{o<a.length-1&&(o++,x())}),(Z=document.getElementById("validate-deck"))==null||Z.addEventListener("click",()=>{if(!L)return;const le=t.state.params||{};t.navigate("match",{...le,matchMode:le.matchMode||i,deckId:m.id})}),(re=document.getElementById("cancel-deck-select"))==null||re.addEventListener("click",()=>{Ve(e),d("home")});const j=document.getElementById("deck-swipe-zone");if(j){let le=0,te=0;j.addEventListener("touchstart",U=>{le=U.touches[0].clientX,te=U.touches[0].clientY},{passive:!0}),j.addEventListener("touchend",U=>{const D=U.changedTouches[0].clientX-le,oe=U.changedTouches[0].clientY-te;Math.abs(D)<40||Math.abs(D)<Math.abs(oe)||(D<0&&o<a.length-1?(o++,x()):D>0&&o>0&&(o--,x()))},{passive:!0})}}x()}function Xe(e,t=44,i=58,n=null){return nt(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function it(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let d='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((a,r)=>{if(d+=Xe(a,40,52),r<n.length-1){const l=rt(a,n[r+1]);d+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(d+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),d+="</div>",d}function ct(e,t,i,n,d=310,a=310,r=[]){const l=Rt[t]||{},u=Oi(t)||wi[t]||[],s={},o=["ATT","MIL","DEF","GK"];for(const c of o)(e[c]||[]).forEach((p,L)=>{s[`${c}${L+1}`]=p});function x(c){const T=l[c];return T?{x:T.x*d,y:T.y*a}:null}let m="";for(const[c,T]of u){const p=x(c),L=x(T);if(!p||!L)continue;const j=s[c],P=s[T],G=rt(j,P);G==="#00ff88"||G==="#FFD700"?(m+=`<line x1="${p.x.toFixed(1)}" y1="${p.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${G}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${p.x.toFixed(1)}" y1="${p.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${G}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):m+=`<line x1="${p.x.toFixed(1)}" y1="${p.y.toFixed(1)}" x2="${L.x.toFixed(1)}" y2="${L.y.toFixed(1)}"
        stroke="${G}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const v=52,_=Math.round(v*657/507);for(const[c,T]of Object.entries(s)){const p=x(c);if(!p||!T)continue;const L=c.replace(/[0-9]/g,""),j=r.includes(T.cardId),P=i==="attack"&&(["MIL","ATT"].includes(L)||j)&&!T.used||i==="defense"&&["GK","DEF","MIL"].includes(L)&&!T.used,G=n.includes(T.cardId);let q=T.boost||0;T.stadiumBonus&&(i==="attack"&&(L==="ATT"||L==="MIL")||i==="defense"&&(L==="GK"||L==="DEF"||L==="MIL")?q+=10:i||(q+=10));const N=Math.round(p.x-v/2),K=Math.round(p.y-_/2);if(T.used){m+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${N}" y="${K}" width="${v}" height="${_}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${T.cardId}" data-role="${L}" style="cursor:pointer"/>`;continue}const Z=nt({...T,_evolution_bonus:0},{width:v,showStad:!1,stadDef:null,role:L,extraNote:q,_forceStadColor:T.stadiumBonus}),re=G?"outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;opacity:0.75;":"";m+=`<foreignObject x="${N}" y="${K-26}" width="${v+4}" height="${_+56}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="${re}position:relative">
        ${Z}
      </div>
    </foreignObject>`,P&&(m+=`<rect x="${N}" y="${K}" width="${v}" height="${_}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${G?"selected":""}" data-card-id="${T.cardId}" data-role="${L}" style="cursor:pointer"/>`)}const g=52;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-g} ${-g} ${d+g*2} ${a+g*2}" width="100%" style="display:block;width:100%;max-width:440px;margin:0 auto">
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
  </div>`}async function ri(e,t,i,n){var G;const{state:d,navigate:a,toast:r}=t;et(e);const l=d.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!l.deckId)return fn(e,t,i);const u=l.deckId;let s,o,x,m;try{const q=await Promise.all([S.from("decks").select("formation,name,stadium_card_id").eq("id",u).single(),S.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",u).order("slot_order")]);s=q[0].data,x=q[0].error,o=q[1].data,m=q[1].error}catch(q){console.error("[Match] Exception chargement deck:",q),Et(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>a("home"));return}if(x||m){console.error("[Match] Erreur Supabase:",x||m),Et(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>a("home"));return}const v=(o||[]).filter(q=>{var N;return q.is_starter&&((N=q.card)==null?void 0:N.player)}).map(q=>bi(q.card,q.position)),_=(o||[]).filter(q=>{var N;return!q.is_starter&&((N=q.card)==null?void 0:N.player)}).map(q=>bi(q.card,q.position));if(v.length<11){Et(e,"⚠️",`Deck incomplet (${v.length}/11).`,"Compléter",()=>a("decks"));return}const g=(o||[]).find(q=>{var N;return((N=q.card)==null?void 0:N.card_type)==="formation"}),c=(s==null?void 0:s.formation)||((G=g==null?void 0:g.card)==null?void 0:G.formation)||"4-4-2",{data:T,error:p}=await S.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",d.profile.id).eq("card_type","game_changer"),{data:L}=await S.from("gc_definitions").select("*").eq("is_active",!0),j=(T||[]).map(q=>({...q,_gcDef:(L==null?void 0:L.find(N=>N.name===q.gc_type||N.id===q.gc_definition_id))||null}));let P=null;if(s!=null&&s.stadium_card_id){const{data:q}=await S.from("cards").select("stadium_id").eq("id",s.stadium_card_id).single();if(q!=null&&q.stadium_id){const{data:N}=await S.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",q.stadium_id).single();P=N||null}}n({deckId:u,formation:c,starters:v,subsRaw:_,gcCardsEnriched:j,gcDefs:L||[],stadiumDef:P})}async function gn(e,t){const{state:i}=t,d=(i.params||{}).matchMode||"vs_ai_easy",a=d.replace("vs_ai_",""),r=d;await ri(e,t,d,async({deckId:l,formation:u,starters:s,subsRaw:o,gcCardsEnriched:x,gcDefs:m,stadiumDef:v})=>{try{let _=ht(s,u);v&&(_=Tt(_,v),jt(o,v));const g=await mn(u,a),c=g.lines||g,T=async p=>{try{const{data:L,error:j}=await S.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:l,status:"in_progress"}).select().single();if(j){console.error("[MatchIA] Erreur création match:",j),Et(e,"⚠️","Impossible de créer le match ("+j.message+").","Retour",()=>t.navigate("home"));return}const P=g.stadiumDef||null;P&&c&&(Tt(c,P),jt(g.subs||[],P));const G={gcDefs:m||[],matchId:L==null?void 0:L.id,mode:r,difficulty:a,formation:u,homeTeam:_,aiTeam:c,homeSubs:o,subsUsed:0,maxSubs:Math.min(o.length,3),aiSubs:g.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((g.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:g.gcCards||[],aiUsedGc:[],aiStadiumDef:P,homeScore:0,aiScore:0,gcCards:p,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};bn(e,G,t)}catch(L){console.error("[MatchIA] Exception launchMatch:",L),Et(e,"⚠️","Erreur au lancement du match : "+L.message,"Retour",()=>t.navigate("home"))}};if(!x.length){T([]);return}ni(e,x,T)}catch(_){console.error("[MatchIA] Exception setup:",_),Et(e,"⚠️","Erreur de préparation du match : "+_.message,"Retour",()=>t.navigate("home"))}})}async function mn(e,t){var c;const{data:i}=await S.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:xn(e),subs:[],gcCards:[],stadiumDef:null};const n=Mt[e]||Mt["4-4-2"],d={GK:[],DEF:[],MIL:[],ATT:[]},a=new Set;function r(T,p,L){var j,P;return a.add(T.id),{cardId:"ai-"+T.id+"-"+L,id:T.id,firstname:T.firstname,name:T.surname_real,country_code:T.country_code,club_id:T.club_id,job:T.job,job2:T.job2,note_g:Number(T.note_g)||0,note_d:Number(T.note_d)||0,note_m:Number(T.note_m)||0,note_a:Number(T.note_a)||0,rarity:T.rarity,skin:T.skin,hair:T.hair,hair_length:T.hair_length,clubName:((j=T.clubs)==null?void 0:j.encoded_name)||null,clubLogo:((P=T.clubs)==null?void 0:P.logo_url)||null,boost:0,used:!1,_line:p}}for(const T of["GK","DEF","MIL","ATT"]){const p=i.filter(q=>q.job===T&&!a.has(q.id)),L=i.filter(q=>q.job!==T&&!a.has(q.id)),j=[...p,...L],P=[];for(let q=0;q<n[T];q++){const N=j[q];N&&P.push(r(N,T,q))}const G=dt(P.length);P.forEach((q,N)=>{q._col=G[N]}),d[T]=P}const u=i.filter(T=>!a.has(T.id)).slice(0,5).map((T,p)=>r(T,T.job,100+p)),x=Object.keys(Oe).sort(()=>Math.random()-.5).slice(0,3).map((T,p)=>{var L,j;return{id:"ai-gc-"+p,gc_type:T,name:((L=Oe[T])==null?void 0:L.name)||T,icon:((j=Oe[T])==null?void 0:j.icon)||"⚡"}}),m=Object.values(d).flat(),v={};m.forEach(T=>{T.club_id&&(v[T.club_id]=(v[T.club_id]||0)+1)});const _=(c=Object.entries(v).sort((T,p)=>p[1]-T[1])[0])==null?void 0:c[0];let g=null;if(_){const{data:T}=await S.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",_).single();T&&(g={club_id:T.id,country_code:null,name:T.encoded_name+" Stadium",club:{encoded_name:T.encoded_name,logo_url:T.logo_url}})}return{lines:d,subs:u,gcCards:x,stadiumDef:g}}function xn(e){const t=Mt[e]||Mt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let d=0;for(const a of["GK","DEF","MIL","ATT"]){const r=[];for(let u=0;u<t[a];u++){const s=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+d,id:"fake-"+d,firstname:"IA",name:n[d%n.length],country_code:"XX",club_id:null,job:a,job2:null,note_g:a==="GK"?s:2,note_d:a==="DEF"?s:2,note_m:a==="MIL"?s:2,note_a:a==="ATT"?s:2,rarity:"normal",boost:0,used:!1,_line:a}),d++}const l=dt(r.length);r.forEach((u,s)=>{u._col=l[s]}),i[a]=r}return i}function bn(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:min(90vw,420px)">${ct(t.aiTeam,t.formation,null,[],300,300)}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>yn(e,t,i),5e3)}function yn(e,t,i){const n=t.homeTeam.MIL||[],d=t.aiTeam.MIL||[],a=t.stadiumDef||null,r=t.aiStadiumDef||null;function l(p,L){const j=ze(p,"MIL"),P=p.evolution_bonus||p._evolution_bonus||0,G=p.job==="MIL"||p.job2==="MIL"?P:0,q=p.stadiumBonus||L&&(L.club_id&&String(p.club_id)===String(L.club_id)||L.country_code&&p.country_code===L.country_code)?10:0;return j+G+q}function u(p,L){return p.reduce((j,P)=>j+l(P,L),0)}function s(p){let L=0;for(let j=0;j<p.length-1;j++){const P=rt(p[j],p[j+1]);P==="#00ff88"?L+=2:P==="#FFD700"&&(L+=1)}return L}const o=u(n,a)+s(n),x=u(d,r)+s(d),m=o>=x;function v(p,L,j,P,G){return`<div id="duel-row-${P}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${L}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${p.map((q,N)=>{const K=N<p.length-1?rt(q,p[N+1]):null,Z=!K||K==="#ff3333"||K==="#cc2222",re=K==="#00ff88"?"+2":K==="#FFD700"?"+1":"";l(q,G),q.stadiumBonus||G&&(G.club_id&&String(q.club_id)===String(G.club_id)||G.country_code&&(q.country_code,G.country_code));const le=q.evolution_bonus||q._evolution_bonus||0;return`
          <div class="duel-card duel-card-${P}" data-idx="${N}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Xe({...q,_evolution_bonus:le},58,78,G)}
          </div>
          ${N<p.length-1?`<div class="duel-link duel-link-${P}" data-idx="${N}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Z?"rgba(255,255,255,0.12)":K};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Z?"none":`0 0 8px ${K}`}">
            ${re?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${K}">${re}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${P}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${u(p,G)} + ${s(p)} liens = <b style="color:#fff">${u(p,G)+s(p)}</b>
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

    ${v(n,t.clubName,"#D4A017","home",a)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${v(d,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const _=()=>{const p=(L,j)=>e.querySelectorAll(L).forEach((P,G)=>{setTimeout(()=>{P.style.opacity="1",P.style.transform="translateY(0) scale(1)"},j+G*90)});p(".duel-card-home",150),p(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((L,j)=>{setTimeout(()=>{L.style.opacity="1"},j*70)}),900),setTimeout(()=>{const L=e.querySelector("#vs-label");L&&(L.style.opacity="1",L.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(j=>j.style.opacity="1")},1250),setTimeout(()=>{g("score-home",o,800),g("score-ai",x,800)},1500)};function g(p,L,j){const P=document.getElementById(p);if(!P)return;const G=performance.now(),q=N=>{const K=Math.min(1,(N-G)/j);P.textContent=Math.round(L*(1-Math.pow(1-K,3))),K<1?requestAnimationFrame(q):P.textContent=L};requestAnimationFrame(q)}requestAnimationFrame(_),t.attacker=m?"home":"ai";const c=m?oi():null;m&&(t.boostCard={value:c}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(p=>({name:p.name,note:ze(p,"MIL"),portrait:Ue(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo,face:p.face||null,club_id:p.club_id,note_g:p.note_g||0,note_d:p.note_d||0,note_m:p.note_m||0,note_a:p.note_a||0,_evolution_bonus:0})),aiPlayers:d.map(p=>({name:p.name,note:ze(p,"MIL"),portrait:Ue(p),job:p.job,country_code:p.country_code,rarity:p.rarity,clubName:p.clubName,clubLogo:p.clubLogo,face:p.face||null,club_id:p.club_id,note_g:p.note_g||0,note_d:p.note_d||0,note_m:p.note_m||0,note_a:p.note_a||0,_evolution_bonus:0})),homeTotal:o,aiTotal:x,text:`Duel milieu : ${t.clubName} ${o} – ${x} IA → ${m?t.clubName+" attaque":"IA attaque"}`});const T=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Je(e,t,i),t.attacker==="ai"&&setTimeout(()=>Zt(e,t,i),800)};setTimeout(()=>{const p=document.getElementById("score-home"),L=document.getElementById("score-ai"),j=document.getElementById(m?"duel-row-home":"duel-row-ai"),P=document.getElementById(m?"duel-row-ai":"duel-row-home"),G=m?p:L,q=m?L:p;G&&(G.style.fontSize="80px",G.style.color=m?"#FFD700":"#ff6b6b",G.style.animation="duelPulse .5s ease"+(m?", duelGlow 1.5s ease infinite .5s":"")),q&&(q.style.opacity="0.25"),setTimeout(()=>{j&&(j.style.transformOrigin="center",j.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",j.style.zIndex="5"),setTimeout(()=>{var K;const N=document.getElementById("duel-shock");if(N){const Z=(K=P||j)==null?void 0:K.getBoundingClientRect(),re=e.querySelector(".match-screen").getBoundingClientRect();Z&&(N.style.top=Z.top-re.top+Z.height/2+"px"),N.style.animation="shockwave .5s ease-out forwards"}P&&(P.style.transformOrigin="center",P.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var K;const N=document.getElementById("duel-finale");N&&(N.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${m?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${m?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${c}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,N.style.transition="opacity .45s ease",N.style.opacity="1",N.style.pointerEvents="auto",(K=document.getElementById("start-match-btn"))==null||K.addEventListener("click",T))},600)},700)},2800)}function vn(e){if(e.type==="duel"&&(e.homeTotal!=null||e.aiTotal!=null)){const t=(e.homeTotal||0)>=(e.aiTotal||0);return`
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
    </div>`}return`<div style="font-size:11px;color:${e.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${e.type==="goal"?700:400};padding:3px 2px">${e.text||""}</div>`}function Je(e,t,i){var G,q,N,K,Z,re,le,te,U;const n=t.selected.map(D=>D.cardId),d=t.usedSubIds||[],a=t.homeSubs.filter(D=>!d.includes(D.cardId)),l=Object.values(t.homeTeam).flat().filter(D=>D.used).length>0&&a.length>0&&t.subsUsed<t.maxSubs,u=!["GK","DEF","MIL","ATT"].some(D=>(t.aiTeam[D]||[]).some(oe=>!oe.used)),s=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(D=>!D.used),o=t.phase==="attack"&&u&&s.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(D=>!D.used).map(D=>D.cardId):[];t.log[t.log.length-1];const x=t.phase==="ai-attack"||t.phase==="ai-defense",m=t.phase==="attack",v=t.phase==="defense",_=t.phase==="finished",c=(t.homeSubs||[]).filter(D=>!(t.usedSubIds||[]).includes(D.cardId)).length>0&&t.subsUsed<t.maxSubs,T=m&&s.length===0&&!c,p=t.gcCards.filter(D=>!t.usedGc.includes(D.id)),L=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
            ${it((oe.players||[]).map(xe=>({...xe,used:!1})),"#ff6b6b",oe.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const oe=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${it((oe.players||[]).map(xe=>({...xe,used:!1})),"#00ff88",oe.total)}
          </div>`}const D=t.log[t.log.length-1];return D?'<div style="padding:2px 4px">'+vn(D)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const D=window.innerWidth>=700,oe=(H,Q,ae)=>{var C,$;const se=(t.gcDefs||[]).find(f=>f.name===H.gc_type),pe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[se==null?void 0:se.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",ee={purple:"#b06ce0",light_blue:"#00d4ef"}[se==null?void 0:se.color]||"#b06ce0",de=(se==null?void 0:se.name)||H.gc_type,Le=(se==null?void 0:se.effect)||((C=Oe[H.gc_type])==null?void 0:C.desc)||"",Te=se!=null&&se.image_url?`/icons/${se.image_url}`:null,Ae=(($=Oe[H.gc_type])==null?void 0:$.icon)||"⚡",ke=Math.round(ae*.22),qe=Math.round(ae*.22),Ge=ae-ke-qe,Se=de.length>12?7:9;return`<div class="gc-mini" data-gc-id="${H.id}" data-gc-type="${H.gc_type}"
          style="box-sizing:border-box;width:${Q}px;height:${ae}px;border-radius:10px;border:2px solid ${ee};background:${pe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${ke}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${Se}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${Q-6}px">${de}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Ge}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${Te?`<img src="${Te}" style="max-width:${Q-10}px;max-height:${Ge-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Ge*.55)}px">${Ae}</span>`}
          </div>
          <div style="height:${qe}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Le.slice(0,38)}</span>
          </div>
        </div>`},xe=(H,Q)=>{var ae;return`<div id="boost-card"
          style="box-sizing:border-box;width:${H}px;height:${Q}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(Q*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(Q*.2)}px">⚡</div>
            <div style="font-size:${Math.round(Q*.09)}px;color:#000;font-weight:900">+${(ae=t.boostCard)==null?void 0:ae.value}</div>
          </div>`},_e=(H,Q)=>Q?xe(130,175):oe(H,130,175),he=(H,Q)=>Q?xe(68,95):oe(H,68,95),we=D?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ce=_?`<button id="btn-results" style="${we};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:x?`<div style="${we};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:T?`<button id="btn-pass" style="${we};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:m?`<button id="btn-action" style="${we};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:v?`<button id="btn-action" style="${we};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${we};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,fe=m||v?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",me=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${D?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${a.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':a.map(H=>`<div class="sub-btn-col" data-sub-id="${H.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(H,76,100)}</div>`).join("")}
      </div>`,ge=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${pt(t.homeTeam,t.formation,t.phase,n,300,300,o)}
        </div>
      </div>`;return D?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${me}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${ge}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ce}${fe}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${p.map(H=>_e(H,!1)).join("")}
            ${L?_e(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(t.homeTeam,t.formation,t.phase,n,300,300,o)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${p.map(H=>he(H,!1)).join("")}
            ${L?he(null,!0):""}
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
          <div>${Ce}${fe}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(D=>{var oe,xe,_e;if(D.type==="duel"){const he=D.isGoal,we=D.homeScored?"#FFD700":he?"#ff6b6b":"rgba(255,255,255,0.3)",Ce=D.homeScored?"⚽ BUT !":he?"⚽ BUT IA !":(oe=D.homePlayers)!=null&&oe.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${he?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${we};margin-bottom:4px">
                <div style="font-size:9px;color:${we};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Ce}</div>
                ${(xe=D.homePlayers)!=null&&xe.length?`<div style="margin-bottom:3px">${it(D.homePlayers,"rgba(255,255,255,0.7)",D.homeTotal)}</div>`:""}
                ${(_e=D.aiPlayers)!=null&&_e.length?`<div style="opacity:0.7">${it(D.aiPlayers,"#ff6b6b",D.aiTotal)}</div>`:""}
              </div>`}return D.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${D.outPlayer?Xe({...D.outPlayer,used:!0,_line:D.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${D.inPlayer?Xe({...D.inPlayer,_line:D.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:D.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${D.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${D.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function j(){const D=e.querySelector(".match-screen");if(!D)return;const oe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);D.style.bottom="auto",D.style.height=oe+"px",D.style.minHeight=oe+"px",D.style.maxHeight=oe+"px",D.style.overflow="hidden";const xe=e.querySelector("#mobile-action-bar"),_e=e.querySelector("#mobile-play-area");xe&&_e&&(_e.style.paddingBottom=xe.offsetHeight+"px")}if(j(),setTimeout(j,120),setTimeout(j,400),setTimeout(j,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",j),window.visualViewport.addEventListener("scroll",j)),window.addEventListener("resize",j)),function(){const oe=e.querySelector(".terrain-wrapper svg");oe&&(oe.removeAttribute("width"),oe.removeAttribute("height"),oe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",oe.setAttribute("viewBox","-26 -26 352 352"),oe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const D=e.querySelector(".terrain-wrapper svg");D&&(D.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let D=!1,oe=30;const xe=()=>document.getElementById("match-timer"),_e=()=>{const he=xe();if(!he)return;const we=String(Math.floor(oe/60)).padStart(2,"0"),Ce=String(oe%60).padStart(2,"0");he.textContent=` ${we}:${Ce}`,he.style.color=D?"#ff2222":"#ff9500",he.style.fontWeight="900"};_e(),t._timerInt=setInterval(()=>{if(oe--,oe<0)if(!D)D=!0,oe=15,_e();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const he=document.createElement("div");he.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",he.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(he),setTimeout(()=>{he.remove(),Dt(e,t,i)},2500)}else _e()},1e3)}(G=document.getElementById("match-quit"))==null||G.addEventListener("click",()=>{Ve(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,Dt(e,t,i))}),(q=document.getElementById("view-ai"))==null||q.addEventListener("click",()=>In(t,i)),(N=document.getElementById("toggle-history"))==null||N.addEventListener("click",()=>{var D;(D=document.getElementById("match-history-panel"))==null||D.classList.add("open")}),(K=document.getElementById("close-history"))==null||K.addEventListener("click",()=>{var D;(D=document.getElementById("match-history-panel"))==null||D.classList.remove("open")}),(Z=document.getElementById("btn-action"))==null||Z.addEventListener("click",()=>{t.selected.length!==0&&(m?wn(e,t,i):v&&_n(e,t,i))}),(re=document.getElementById("btn-results"))==null||re.addEventListener("click",()=>Dt(e,t,i)),(le=document.getElementById("btn-pass"))==null||le.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Je(e,t,i),setTimeout(()=>Zt(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(D=>{D.addEventListener("click",()=>hn(D,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(D=>{D.addEventListener("click",()=>pi(e,t,i,null,D.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(D=>{D.addEventListener("click",()=>Sn(D.dataset.gcId,D.dataset.gcType,e,t,i))}),(te=document.getElementById("boost-card"))==null||te.addEventListener("click",()=>Ln(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(D=>{D.addEventListener("click",()=>pi(e,t,i,D.dataset.subId))}),(U=document.getElementById("sub-btn-main"))==null||U.addEventListener("click",()=>pi(e,t,i))}function hn(e,t,i,n){const d=e.dataset.cardId,a=e.dataset.role,r=t.selected.findIndex(l=>l.cardId===d);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const l=(t.homeTeam[a]||[]).find(u=>u.cardId===d);l&&t.selected.push({...l,_role:a,_line:a})}Je(i,t,n)}function Ti(e,t,i){e.matchId&&S.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function wn(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(l=>!l.used)),d=t.selected.map(r=>{const l=(t.homeTeam[r._role]||[]).find(s=>s.cardId===r.cardId)||r,u=n&&["GK","DEF"].includes(r._role);return{...l,_line:r._role,...u?{note_a:Math.max(1,Number(l.note_a)||0)}:{}}}),a=Ot(d,t.modifiers.home);t.pendingAttack={...a,players:[...d],side:"home"},t.selected.forEach(r=>{const l=(t.homeTeam[r._role]||[]).find(u=>u.cardId===r.cardId);l&&(l.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${a.total} (base ${a.base}${a.links?` +${a.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Je(e,t,i),setTimeout(()=>En(e,t,i),1200)}function _n(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),Ti(t,i,i.state.profile.id);const n=t.selected.map(l=>({...(t.homeTeam[l._role]||[]).find(s=>s.cardId===l.cardId)||l,_line:l._role})),d=Ht(n,t.modifiers.home);t.selected.forEach(l=>{const u=(t.homeTeam[l._role]||[]).find(s=>s.cardId===l.cardId);u&&(u.used=!0)});const a=Ut(t.pendingAttack.total,d.total,t.modifiers.home),r={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>({name:l.name,note:l._line==="MIL"?l.note_m:l.note_a,portrait:Ue(l),job:l.job,country_code:l.country_code,rarity:l.rarity,clubName:l.clubName,clubLogo:l.clubLogo,face:l.face||null,club_id:l.club_id,note_g:l.note_g||0,note_d:l.note_d||0,note_m:l.note_m||0,note_a:l.note_a||0,_evolution_bonus:0})),homePlayers:t.selected.map(l=>{const u=(t.homeTeam[l._role]||[]).find(s=>s.cardId===l.cardId)||l;return{name:u.name,note:(u._line==="GK"?Number(u.note_g)||0:u._line==="MIL"?Number(u.note_m)||0:Number(u.note_d)||0)+(u.boost||0),portrait:Ue(u),job:u.job,country_code:u.country_code,rarity:u.rarity,clubName:u.clubName,clubLogo:u.clubLogo}}),homeTotal:d.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(a.shielded)r.text="🛡️ Bouclier ! But annulé.",t.log.push(r);else if(a.goal){t.aiScore++,r.isGoal=!0,r.homeScored=!1,r.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${d.total})`,t.log.push(r),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Je(e,t,i),ei(r.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Lt(e,t,i,"home-attack")});return}else r.text=`🧤 Défense réussie ! (${d.total} ≥ ${t.pendingAttack.total})`,t.log.push(r);t.selected=[],t.modifiers.home={},t.pendingAttack=null,Lt(e,t,i,"home-attack")}function $n(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(u=>u.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(u=>!e.aiUsedSubIds.includes(u.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],d=i.find(u=>u.job===n.job)||i[0],a={...d,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],l=r.findIndex(u=>u.cardId===n.cardId);l!==-1&&(r[l]=a),e.aiUsedSubIds.push(d.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${d.firstname} ${d.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function kn(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(d=>!e.aiUsedGc.includes(d.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Oe[i.gc_type],i.gc_type){case"Boost+2":{const d=Object.values(e.aiTeam).flat().filter(a=>!a.used);if(d.length){const a=d[Math.floor(Math.random()*d.length)];a.boost=(a.boost||0)+2}break}case"Boost+3":{const d=Object.values(e.aiTeam).flat().filter(a=>!a.used);if(d.length){const a=d[Math.floor(Math.random()*d.length)];a.boost=(a.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Zt(e,t,i){Ti(t,i,null),$n(t),kn(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],d=Ji(n,"attack",t.difficulty);if(!d.length){Jt(e,t,i);return}const a=Ot(d,t.modifiers.ai);t.pendingAttack={...a,players:d,side:"ai"},d.forEach(s=>{s.used=!0}),t.log.push({text:`🤖 IA attaque : ${a.total} (${d.map(s=>s.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used),u=(t.homeSubs||[]).filter(s=>!(t.usedSubIds||[]).includes(s.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!u){t.aiScore++;const s={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:d.map(o=>({name:o.name,note:o._line==="MIL"?o.note_m:o.note_a,portrait:Ue(o),job:o.job,country_code:o.country_code,rarity:o.rarity,clubName:o.clubName,clubLogo:o.clubLogo,face:o.face||null,club_id:o.club_id,note_g:o.note_g||0,note_d:o.note_d||0,note_m:o.note_m||0,note_a:o.note_a||0,_evolution_bonus:0})),aiTotal:a.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(s),t.pendingAttack=null,Je(e,t,i),ei(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{Lt(e,t,i,"home-attack")});return}t.phase="defense",Je(e,t,i)}function En(e,t,i){var s,o;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],d=Ji(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(x=>(t.aiTeam[x]||[]).filter(m=>!m.used)).length){t.homeScore++;const m={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((s=t.pendingAttack)==null?void 0:s.players)||[]).map(v=>({name:v.name,note:ze(v,v._line||v.job),portrait:Ue(v),job:v.job,country_code:v.country_code,rarity:v.rarity,clubName:v.clubName,clubLogo:v.clubLogo,face:v.face||null,club_id:v.club_id,note_g:v.note_g||0,note_d:v.note_d||0,note_m:v.note_m||0,note_a:v.note_a||0,_evolution_bonus:0})),homeTotal:((o=t.pendingAttack)==null?void 0:o.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(m),t.modifiers.ai={},t.pendingAttack=null,Je(e,t,i),ei(m.homePlayers,t.homeScore,t.aiScore,!0,()=>{Lt(e,t,i,"ai-attack")});return}const r=d.length>0?Ht(d,t.modifiers.ai).total:0;d.forEach(x=>{x.used=!0});const l=Ut(t.pendingAttack.total,r,t.modifiers.ai),u={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(x=>({name:x.name,note:x._line==="MIL"?x.note_m:x.note_a,portrait:Ue(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo,face:x.face||null,club_id:x.club_id,note_g:x.note_g||0,note_d:x.note_d||0,note_m:x.note_m||0,note_a:x.note_a||0,_evolution_bonus:0})),aiPlayers:d.map(x=>({name:x.name,note:x._line==="GK"?x.note_g:x._line==="MIL"?x.note_m:x.note_d,portrait:Ue(x),job:x.job,country_code:x.country_code,rarity:x.rarity,clubName:x.clubName,clubLogo:x.clubLogo,face:x.face||null,club_id:x.club_id,note_g:x.note_g||0,note_d:x.note_d||0,note_m:x.note_m||0,note_a:x.note_a||0,_evolution_bonus:0})),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(l.shielded)u.text="🛡️ Bouclier IA !",t.log.push(u);else if(l.goal){t.homeScore++,u.isGoal=!0,u.homeScored=!0,u.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(u),t.modifiers.ai={},t.pendingAttack=null,Je(e,t,i),ei(u.homePlayers,t.homeScore,t.aiScore,!0,()=>{Lt(e,t,i,"ai-attack")});return}else u.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(u);t.modifiers.ai={},t.pendingAttack=null,Lt(e,t,i,"ai-attack")}function Lt(e,t,i,n){if(t.round++,so(t)){Dt(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(a=>!a.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used).length){Jt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(l=>!l.used).length){Jt(e,t,i);return}setTimeout(()=>Zt(e,t,i),100);return}t.phase="attack",Je(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(a=>!a.used).length){Jt(e,t,i);return}t.phase="ai-attack",Je(e,t,i),setTimeout(()=>Zt(e,t,i),800)}}function so(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(d=>!d.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(d=>!d.used));return!t&&!i}function Jt(e,t,i){so(t)?Dt(e,t,i):(t.phase="attack",Je(e,t,i))}function Tn(e,t,i){const n=document.createElement("div");n.style.cssText=`
    position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:800;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;
    animation:subFadeIn 0.2s ease;
  `;const d=Ue(e),a=Ue(t),r=Qt[e.job]||"#555",l=Qt[t.job]||"#555",u=e.job==="GK"?e.note_g:e.job==="DEF"?e.note_d:e.job==="MIL"?e.note_m:e.note_a,s=t.job==="GK"?t.note_g:t.job==="DEF"?t.note_d:t.job==="MIL"?t.note_m:t.note_a;n.innerHTML=`
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
          <div style="position:absolute;top:4px;left:0;right:0;text-align:center;font-size:16px;font-weight:900;color:#fff;text-shadow:0 1px 4px #000">${u}</div>
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
  `,document.body.appendChild(n);let o=!1;const x=()=>{o||(o=!0,n.remove(),i())};n.addEventListener("click",x),setTimeout(x,2e3)}function qt(e,t="rgba(0,0,0,0.8)"){const i=document.createElement("div");i.style.cssText=`position:fixed;bottom:110px;left:50%;transform:translateX(-50%);background:${t};color:#fff;padding:8px 18px;border-radius:20px;font-size:13px;z-index:1200;pointer-events:none;text-align:center;max-width:80vw;white-space:nowrap`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}function pi(e,t,i,n=null,d=null){var v,_;if(t.phase!=="attack"){qt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){qt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const a=Object.entries(t.homeTeam).flatMap(([g,c])=>(c||[]).filter(T=>T.used).map(T=>({...T,_line:T._line||g}))),r=t.homeSubs.filter(g=>!t.usedSubIds.includes(g.cardId));if(!a.length){qt("Aucun joueur utilisé à remplacer");return}if(!r.length){qt("Aucun remplaçant disponible");return}let l=Math.max(0,a.findIndex(g=>g.cardId===d));const u=((v=a[l])==null?void 0:v._line)||((_=a[l])==null?void 0:_.job);let s=n?Math.max(0,r.findIndex(g=>g.cardId===n)):Math.max(0,r.findIndex(g=>g.job===u)),o=!1;const x=document.createElement("div");x.id="sub-overlay",x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function m(){var P,G,q,N,K,Z;const g=a[l],c=r[s],T=Math.min(130,Math.round((window.innerWidth-90)/2)),p=Math.round(T*1.35),L=re=>`background:rgba(255,255,255,0.12);border:none;color:${re?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${re?"default":"pointer"};flex-shrink:0`;x.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${L(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${c?Xe({...c,used:!1,boost:0},T,p):"<div>—</div>"}</div>
        <button id="in-down" style="${L(s>=r.length-1)}" ${s>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${L(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${g?Xe({...g,used:!1,boost:0},T,p):"<div>—</div>"}</div>
        <button id="out-down" style="${L(l>=a.length-1)}" ${l>=a.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${a.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(P=x.querySelector("#sub-close"))==null||P.addEventListener("click",()=>x.remove()),(G=x.querySelector("#out-up"))==null||G.addEventListener("click",()=>{l>0&&(l--,m())}),(q=x.querySelector("#out-down"))==null||q.addEventListener("click",()=>{l<a.length-1&&(l++,m())}),(N=x.querySelector("#in-up"))==null||N.addEventListener("click",()=>{s>0&&(s--,m())}),(K=x.querySelector("#in-down"))==null||K.addEventListener("click",()=>{s<r.length-1&&(s++,m())});const j=(re,le,te,U)=>{const D=x.querySelector("#"+re);if(!D)return;let oe=0;D.addEventListener("touchstart",xe=>{oe=xe.touches[0].clientY},{passive:!0}),D.addEventListener("touchend",xe=>{const _e=xe.changedTouches[0].clientY-oe;if(Math.abs(_e)<30)return;const he=le();_e<0&&he<U-1?(te(he+1),m()):_e>0&&he>0&&(te(he-1),m())},{passive:!0})};j("in-panel",()=>s,re=>s=re,r.length),j("out-panel",()=>l,re=>l=re,a.length),(Z=x.querySelector("#sub-confirm"))==null||Z.addEventListener("click",re=>{if(re.preventDefault(),re.stopPropagation(),o)return;o=!0;const le=a[l],te=r[s];if(!le||!te)return;let U=null,D=-1;for(const[xe,_e]of Object.entries(t.homeTeam)){const he=(_e||[]).findIndex(we=>we.cardId===le.cardId);if(he!==-1){U=xe,D=he;break}}if(D===-1||!U){qt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),x.remove();return}const oe={...te,_line:U,_col:le._col||0,used:!1,boost:0};t.homeTeam[U].splice(D,1,oe),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(te.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:le.name,firstname:le.firstname,note:ze(le,U),portrait:Ue(le),job:le.job,country_code:le.country_code,rarity:le.rarity,clubName:le.clubName,clubLogo:le.clubLogo},inPlayer:{name:te.name,firstname:te.firstname,note:ze(te,U),portrait:Ue(te),job:te.job,country_code:te.country_code,rarity:te.rarity,clubName:te.clubName,clubLogo:te.clubLogo},text:`🔄 ${te.firstname} ${te.name} remplace ${le.firstname} ${le.name}`}),x.remove(),Tn(le,te,()=>Je(e,t,i))})}document.body.appendChild(x),m()}function Sn(e,t,i,n,d){var _,g;const a=(n.gcDefs||[]).find(c=>c.name===t),r=Oe[t]||{icon:"⚡",desc:"Carte spéciale."},l={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[a==null?void 0:a.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",u={purple:"#b06ce0",light_blue:"#00d4ef"}[a==null?void 0:a.color]||"#b06ce0",s=(a==null?void 0:a.name)||t,o=(a==null?void 0:a.effect)||r.desc,x=a!=null&&a.image_url?`/icons/${a.image_url}`:null,m=r.icon||"⚡",v=document.createElement("div");v.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",v.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${u};background:${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${u}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${s.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${s}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${x?`<img src="${x}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${m}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${o}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(v),(_=v.querySelector("#gc-back"))==null||_.addEventListener("click",()=>v.remove()),(g=v.querySelector("#gc-use"))==null||g.addEventListener("click",()=>{v.remove(),An(e,t,i,n,d)})}function Yt(e,t,i,n,d,a){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let l=[];function u(){var s,o;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${l.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(x=>{const m=x._line||x.job||"MIL",v={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[m]||"#555",_=ze(x,m)+(x.boost||0),g=l.find(c=>c.cardId===x.cardId);return`<div class="gc-pick-item" data-cid="${x.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${g?"#FFD700":"rgba(255,255,255,0.25)"};background:${v};overflow:hidden;cursor:pointer;flex-shrink:0;${x.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${x.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${_}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${m}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${l.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${l.length}/${t})
      </button>
    </div>`,(s=r.querySelector("#gc-picker-close"))==null||s.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(x=>{x.addEventListener("click",()=>{const m=x.dataset.cid,v=e.find(g=>g.cardId===m);if(!v)return;const _=l.findIndex(g=>g.cardId===m);_>-1?l.splice(_,1):l.length<t&&l.push(v),u()})}),(o=r.querySelector("#gc-picker-confirm"))==null||o.addEventListener("click",()=>{r.remove(),a(l)})}u(),document.body.appendChild(r)}const zn={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,d,a)=>{const r=Object.entries(n.homeTeam).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,u])=>u.filter(s=>!s.used).map(s=>({...s,_line:l})));return r.length?(Yt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,d,n,l=>{l.forEach(u=>{const s=(n.homeTeam[u._line]||[]).find(o=>o.cardId===u.cardId);s&&(s.boost=(s.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${s.name}`,type:"info"}))}),Je(d,n,a)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Je(d,n,a),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},d,a,r)=>{const l=n==="home"?d.homeTeam:d.aiTeam,u=n==="ai"?"adverse":"allié",s=Object.entries(l).filter(([o])=>!i.length||i.includes(o)).flatMap(([o,x])=>x.filter(m=>!m.used).map(m=>({...m,_line:o})));return s.length?(Yt(s,t,`Choisir ${t} joueur(s) ${u}(s) à débuffer (-${e})`,a,d,o=>{o.forEach(x=>{const v=((n==="home"?d.homeTeam:d.aiTeam)[x._line]||[]).find(_=>_.cardId===x.cardId);v&&(v.boost=(v.boost||0)-e,d.log.push({text:`🎯 -${e} sur ${v.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Je(a,d,r)}),!0):(d.log.push({text:`🎯 Aucun joueur ${u} disponible`,type:"info"}),Je(a,d,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,d,a)=>{const r=i==="home"?n.homeTeam:n.aiTeam,l=i==="ai"?"adverse":"allié",u=Object.entries(r).filter(([s])=>!t.length||t.includes(s)).flatMap(([s,o])=>o.filter(x=>!x.used).map(x=>({...x,_line:s})));return u.length?(Yt(u,e,`Choisir ${e} joueur(s) ${l}(s) à exclure`,d,n,s=>{s.forEach(o=>{const m=((i==="home"?n.homeTeam:n.aiTeam)[o._line]||[]).find(v=>v.cardId===o.cardId);m&&(m.used=!0,n.log.push({text:`❌ ${m.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Je(d,n,a)}),!0):(n.log.push({text:`❌ Aucun joueur ${l} à exclure`,type:"info"}),Je(d,n,a),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,d)=>{const a=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,l])=>l.filter(u=>u.used).map(u=>({...u,_line:r})));return a.length?(Yt(a,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(l=>{const u=(i.homeTeam[l._line]||[]).find(s=>s.cardId===l.cardId);u&&(u.used=!1,i.log.push({text:`💫 ${u.name} ressuscité !`,type:"info"}))}),Je(n,i,d)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Je(n,i,d),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function An(e,t,i,n,d){n.usedGc.push(e);const a=n.gcDefs||[],r=a.find(u=>u.name===t)||a.find(u=>{var s;return((s=u.name)==null?void 0:s.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let l=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const u=zn[r.effect_type];u?u(r.effect_params||{},n,i,d)||(l=!0):(d.toast(`Effet "${r.effect_type}" non implémenté`,"error"),l=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const u=Object.entries(n.homeTeam).flatMap(([s,o])=>(o||[]).filter(x=>x.used).map(x=>({...x,_line:s})));u.length?(u[0].used=!1,n.log.push({text:`💫 ${u[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const u=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(s=>!s.used);if(u.length){const s=u.sort((o,x)=>ze(x,"ATT")-ze(o,"ATT"))[0];s.used=!0,n.log.push({text:`❄️ ${s.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}l=!0}S.from("cards").delete().eq("id",e).then(()=>{}),l&&Je(i,n,d)}function Ln(e,t,i){const n=Object.values(t.homeTeam).flat().filter(d=>!d.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(d=>`
        <div class="player-boost-opt" data-card-id="${d.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Qt[d.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${ze(d,d._line||d.job)}</div>
          <div style="flex:1"><b>${d.firstname} ${d.name}</b><div style="font-size:11px;color:#888">${d._line||d.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(d=>{d.addEventListener("click",()=>{const a=d.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const l=(t.homeTeam[r]||[]).find(u=>u.cardId===a);if(l){l.boost=(l.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${l.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Je(e,t,i)})})}function ei(e,t,i,n,d){const a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const r=Array.from({length:10},(s,o)=>`
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
      <div style="width:50px;height:50px;border-radius:50%;background:${Qt[s.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
        ${s.portrait?`<img src="${s.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(s.name||"").slice(0,8)}</div>
    </div>`).join("")}
  </div>`:""}
  <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn 0.3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(a);let l=!1;const u=()=>{l||(l=!0,a.remove(),setTimeout(()=>d(),50))};a.addEventListener("click",u),setTimeout(u,3500)}async function Dt(e,t,i){var o,x;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,d=t.homeScore>t.aiScore,a=t.homeScore===t.aiScore,r=d?"victoire":a?"nul":"defaite",l=Co(t.mode,r);t.matchId&&await S.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:d?n.profile.id:null,home_credits_reward:l,played_at:new Date().toISOString()}).eq("id",t.matchId);const u={credits:(n.profile.credits||0)+l,matches_played:(n.profile.matches_played||0)+1};d?u.wins=(n.profile.wins||0)+1:a?u.draws=(n.profile.draws||0)+1:u.losses=(n.profile.losses||0)+1,await S.from("users").update(u).eq("id",n.profile.id),await i.refreshProfile();const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",s.innerHTML=`
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
    </div>`,document.body.appendChild(s),(o=document.getElementById("res-home"))==null||o.addEventListener("click",()=>{s.remove(),Ve(e),i.navigate("home")}),(x=document.getElementById("res-replay"))==null||x.addEventListener("click",()=>{s.remove(),Ve(e),i.navigate("match",{matchMode:t.mode})})}function In(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${ct(e.aiTeam,e.formation,null,[],300,300)}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function yi(e,t,i=!1){var d,a,r,l;try{const u=(a=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:a.id;try{(S.getChannels?S.getChannels():[]).forEach(o=>{const x=o.topic||"";(x.includes("matchmaking")||x.includes("pvp-match")||x.includes("friend-invite"))&&S.removeChannel(o)})}catch(s){console.warn("[Random] cleanup canaux:",s)}u&&await S.rpc("cancel_matchmaking",{p_user_id:u}).catch(()=>{})}catch{}const n=i&&((l=(r=t==null?void 0:t.state)==null?void 0:r.params)==null?void 0:l.rankedData)||null;await ri(e,t,"random",({deckId:u,formation:s,starters:o,subsRaw:x,gcCardsEnriched:m,gcDefs:v,stadiumDef:_})=>{const g=c=>Mn(e,t,u,s,o,x,c,v||[],_,i,n);if(!m.length){g([]);return}ni(e,m,g)})}async function Mn(e,t,i,n,d,a,r=[],l=[],u=null,s=!1,o=null){var G,q;const{state:x,navigate:m,toast:v}=t;let _=!1,g=null;et(e);const c=(o==null?void 0:o.mmr)??((G=x.profile)==null?void 0:G.mmr)??1e3,T=s?Gt(c):null,p=s?"linear-gradient(180deg,#1a0030,#0a1628)":"linear-gradient(180deg,#0a1628,#1a0a2e)",L=s?(T==null?void 0:T.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:24px;background:${p};padding:24px;text-align:center">
      ${s?`<div style="font-size:36px">${(T==null?void 0:T.emoji)||"⚽"}</div>`:""}
      <div style="width:64px;height:64px;border:4px solid rgba(255,255,255,0.15);border-top-color:${L};border-radius:50%;animation:mmspin 0.9s linear infinite"></div>
      <div style="font-size:18px;font-weight:900;color:#fff">${s?"Recherche Ranked...":"Recherche d'un adversaire..."}</div>
      ${s?`<div style="font-size:13px;color:${(T==null?void 0:T.color)||"#D4A017"}">${(T==null?void 0:T.emoji)||"⚔️"} ${(T==null?void 0:T.label)||"Ranked"}</div>`:""}
      <div id="mm-status" style="font-size:13px;color:rgba(255,255,255,0.5)">Connexion au matchmaking</div>
      <div id="mm-range" style="display:none"></div>
      <button id="mm-cancel" style="margin-top:12px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.25);background:transparent;color:rgba(255,255,255,0.7);font-size:14px;cursor:pointer">Annuler</button>
    </div>
    <style>@keyframes mmspin{to{transform:rotate(360deg)}}</style>`;const j=async(N=!0)=>{_=!0,g&&(S.removeChannel(g),g=null),N&&await S.rpc("cancel_matchmaking",{p_user_id:x.profile.id}).catch(()=>{})};(q=document.getElementById("mm-cancel"))==null||q.addEventListener("click",async()=>{try{await j(!0)}catch{}Ve(e),m("home")});const P=async(N,K,Z)=>{if(_)return;_=!0,g&&(S.removeChannel(g),g=null);const re=document.getElementById("mm-status");re&&(re.textContent="Adversaire trouvé !"),await new Promise(le=>setTimeout(le,600)),e.isConnected&&lo(e,t,N,Z,r,l,s,o,u)};if(s){const N=[{range:50,delay:0},{range:100,delay:15e3},{range:200,delay:3e4},{range:400,delay:45e3},{range:800,delay:6e4}];let K=0,Z=!1;const re=async()=>{if(_||Z)return;const{range:le}=N[K],te=document.getElementById("mm-range");te&&(te.textContent=`Plage MMR : ±${le}`);const{data:U,error:D}=await S.rpc("try_matchmake_ranked",{p_user_id:x.profile.id,p_deck_id:i,p_mmr:c,p_range:le});if(console.log("[Ranked] try_matchmake_ranked result:",U,"error:",JSON.stringify(D)),_)return;if(D||!(U!=null&&U.success)){v("Erreur matchmaking ranked","error"),Ve(e),m("home");return}if(U.matched){Z=!0,P(U.match_id,U.opponent_id,!1);return}const oe=document.getElementById("mm-status");if(oe&&(oe.textContent="En attente d'un adversaire..."),g||(g=S.channel("matchmaking-"+x.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${x.profile.id}`},xe=>{const _e=xe.new;_e.status==="matched"&&_e.match_id&&!Z&&(Z=!0,P(_e.match_id,_e.matched_with,!0))}).subscribe()),K<N.length-1){const xe=N[K+1].delay-N[K].delay;K++,setTimeout(()=>{!_&&!Z&&re()},xe)}};await re()}else{const{data:N,error:K}=await S.rpc("try_matchmake",{p_user_id:x.profile.id,p_deck_id:i});if(K||!(N!=null&&N.success)){v("Erreur de matchmaking","error"),Ve(e),m("home");return}if(N.matched){P(N.match_id,N.opponent_id,!1);return}const Z=document.getElementById("mm-status");Z&&(Z.textContent="En attente d'un autre joueur..."),g=S.channel("matchmaking-"+x.profile.id).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matchmaking_queue",filter:`user_id=eq.${x.profile.id}`},re=>{const le=re.new;le.status==="matched"&&le.match_id&&P(le.match_id,le.matched_with,!0)}).subscribe()}}async function jn(e,t,i){const{state:n,navigate:d,toast:a}=t;try{(S.getChannels?S.getChannels():[]).forEach(s=>{const o=s.topic||"";(o.includes("matchmaking")||o.includes("pvp-match")||o.includes("friend-invite"))&&S.removeChannel(s)})}catch{}const{data:r}=await S.from("matches").select("home_id, away_id, status").eq("id",i).single();if(!r){a("Match introuvable","error"),d("home");return}if(r.status==="finished"){a("Ce match est terminé","info"),d("home");return}const l=r.home_id===n.profile.id;lo(e,t,i,l,[],[])}async function lo(e,t,i,n,d=[],a=[],r=!1,l=null,u=null){const{state:s,navigate:o,toast:x}=t,m=n?"p1":"p2",v=n?"p2":"p1",_=(d||[]).map($=>$.id),g=(d||[]).map($=>({id:$.id,gc_type:$.gc_type,_gcDef:$._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:c}=await S.from("matches").select("*").eq("id",i).single();if(!c){x("Match introuvable","error"),o("home");return}async function T(){var Y,ie;console.log("[PvP] buildGameState match:",{id:c.id,home_deck_id:c.home_deck_id,away_deck_id:c.away_deck_id,mode:c.mode,is_ranked:c.is_ranked});const[{data:$,error:f},{data:b,error:y},{data:h},{data:w}]=await Promise.all([S.rpc("get_deck_for_match",{p_deck_id:c.home_deck_id}),S.rpc("get_deck_for_match",{p_deck_id:c.away_deck_id}),S.from("users").select("id,pseudo,club_name").eq("id",c.home_id).single(),S.from("users").select("id,pseudo,club_name").eq("id",c.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",f==null?void 0:f.message,"p2:",y==null?void 0:y.message,"p1D:",(Y=$==null?void 0:$.starters)==null?void 0:Y.length,"p2D:",(ie=b==null?void 0:b.starters)==null?void 0:ie.length);const k=X=>{const ue=Number(X.evolution_bonus)||0;return{cardId:X.card_id,position:X.position,id:X.id,firstname:X.firstname,name:X.surname_real,country_code:X.country_code,club_id:X.club_id,job:X.job,job2:X.job2,note_g:(Number(X.note_g)||0)+(X.job==="GK"||X.job2==="GK"&&Number(X.note_g)>0?ue:0),note_d:(Number(X.note_d)||0)+(X.job==="DEF"||X.job2==="DEF"&&Number(X.note_d)>0?ue:0),note_m:(Number(X.note_m)||0)+(X.job==="MIL"||X.job2==="MIL"&&Number(X.note_m)>0?ue:0),note_a:(Number(X.note_a)||0)+(X.job==="ATT"||X.job2==="ATT"&&Number(X.note_a)>0?ue:0),evolution_bonus:ue,rarity:X.rarity,skin:X.skin,hair:X.hair,hair_length:X.hair_length,face:X.face||null,clubName:X.club_encoded_name||null,clubLogo:X.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},z=(($==null?void 0:$.starters)||[]).map(X=>k(X)),E=((b==null?void 0:b.starters)||[]).map(X=>k(X)),I=($==null?void 0:$.formation)||"4-4-2",A=(b==null?void 0:b.formation)||"4-4-2";let M=ht(z,I),B=ht(E,A);const V=(($==null?void 0:$.subs)||[]).map(X=>k(X)),W=((b==null?void 0:b.subs)||[]).map(X=>k(X)),O=($==null?void 0:$.stadium_def)||(n?u:null),F=(b==null?void 0:b.stadium_def)||(n?null:u);return O&&(M=Tt(M,O),jt(V,O)),F&&(B=Tt(B,F),jt(W,F)),{p1Team:M,p2Team:B,p1Subs:V,p2Subs:W,p1Formation:I,p2Formation:A,p1Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 1",p2Name:(w==null?void 0:w.club_name)||(w==null?void 0:w.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?_:[],gc_p2:n?[]:_,gcCardsFull_p1:n?g:[],gcCardsFull_p2:n?[]:g,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:a||[],lastActionAt:new Date().toISOString()}}let p=c.game_state&&Object.keys(c.game_state).length?c.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!p,"match.status:",c.status,"home_id:",c.home_id,"away_id:",c.away_id,"myId:",s.profile.id),!p)if(n){p=await T(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((p==null?void 0:p.p1Team)||{}));const{data:$}=await S.from("matches").select("game_state").eq("id",i).single();!($!=null&&$.game_state)||!Object.keys($.game_state).length?await S.from("matches").update({game_state:p,turn_user_id:c.home_id}).eq("id",i):p=$.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let $=0;$<30&&!p;$++){await new Promise(b=>setTimeout(b,400));const{data:f}=await S.from("matches").select("game_state").eq("id",i).single();f!=null&&f.game_state&&Object.keys(f.game_state).length&&(p=f.game_state),$%5===0&&console.log("[PvP] away - poll",$,"game_state:",!!(f!=null&&f.game_state))}if(!p){x("Erreur de synchronisation","error"),o("home");return}p.gc_p2=_,p.gcCardsFull_p2=g,await S.from("matches").update({game_state:p}).eq("id",i)}let L=!1,j=null,P=!1;const G=new Set,q=new Set;async function N($){var A,M;try{S.removeChannel(K)}catch{}const f=p[m+"Score"]||0,b=p[v+"Score"]||0;let y,h;$.winner_id?(y=$.winner_id===s.profile.id,h=!1):$.forfeit?(y=f>b,h=!1):(h=f===b,y=f>b);let w="";if(r&&n)try{const{data:B}=await S.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",c.home_id).single(),{data:V}=await S.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",c.away_id).single();if(B&&V){const W=y?1:h?.5:0,O=1-W,F=B.placement_matches<10,Y=V.placement_matches<10,ie=Ai(B.mmr,B.mmr_deviation,B.mmr_volatility,V.mmr,V.mmr_deviation,W===1?1:W===0?0:.5,F),X=Ai(V.mmr,V.mmr_deviation,V.mmr_volatility,B.mmr,B.mmr_deviation,O===1?1:O===0?0:.5,Y);await S.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:h?null:y?c.home_id:c.away_id,p_home_id:c.home_id,p_away_id:c.away_id,p_home_delta:ie.delta,p_away_delta:X.delta,p_home_new_rd:ie.newRd,p_away_new_rd:X.newRd,p_home_new_vol:ie.newSigma,p_away_new_vol:X.newSigma});const ue=ie.delta,be=ie.newMmr,ye=Gt(be),Ee=ue>=0?"+":"",Be=ue>=0?"#4caf50":"#ff6b6b",De=Gt(B.mmr);w=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${ye.id!==De.id?`<div style="font-size:20px;font-weight:900;color:${ye.color}">
                    ${be>B.mmr?"📈":"📉"} ${De.emoji} ${De.label} → ${ye.emoji} ${ye.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${be>B.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${ue>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${ye.color}">${ye.emoji} ${ye.label}</div>`}
              ${F?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${B.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(B){console.error("[Ranked] MMR update error:",B)}(A=document.getElementById("pvp-end-overlay"))==null||A.remove();const k=document.createElement("div");k.id="pvp-end-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const z=h?"🤝":y?"🏆":"😞",E=h?"MATCH NUL":y?"VICTOIRE !":"DÉFAITE",I=h?"#fff":y?"#FFD700":"#ff6b6b";k.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${E}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${p[m+"Name"]} ${f} – ${b} ${p[v+"Name"]}</div>
      ${$.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${y?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${w}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(k),(M=k.querySelector("#pvp-end-home"))==null||M.addEventListener("click",()=>{k.remove(),Ve(e),o(r?"ranked":"home")})}const K=S.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},$=>{const f=$.new;try{if(f.status==="finished"||f.forfeit){if(L)return;L=!0,j&&(clearInterval(j),j=null),f.game_state&&(p=f.game_state),N(f);return}if(f.game_state){const b=p;p=f.game_state;const y=p._lastGC;if(y&&y.seq&&!q.has(y.seq)&&(q.add(y.seq),y.by!==m)){fe(y.type,y.by,()=>xe());return}const h=b[m+"Score"]||0,w=b[v+"Score"]||0,k=p[m+"Score"]||0,z=p[v+"Score"]||0,E=k>h,I=z>w;if((E||I)&&!G.has(p.round)){G.add(p.round);const A=[...p.log||[]].reverse().find(B=>B.isGoal),M=((A==null?void 0:A.homePlayers)||[]).map(B=>({name:B.name,note:B.note,portrait:B.portrait,job:B.job}));Ce(M,k,z,E,()=>xe());return}xe()}}catch(b){console.error("[PvP] crash:",b)}}).subscribe();async function Z($){Object.assign(p,$),p.lastActionAt=new Date().toISOString();const{error:f}=await S.from("matches").update({game_state:p}).eq("id",i);f&&x("Erreur de synchronisation","error");try{xe()}catch(b){console.error("[PvP] renderPvpScreen crash:",b)}}async function re(){if(L)return;L=!0,j&&(clearInterval(j),j=null);const $=n?c.away_id:c.home_id,f=n?"p2":"p1",b=n?"p1":"p2",y={...p,[f+"Score"]:3,[b+"Score"]:0,phase:"finished"};try{await S.from("matches").update({status:"finished",forfeit:!0,winner_id:$,home_score:y.p1Score||0,away_score:y.p2Score||0,game_state:y}).eq("id",i)}catch{}try{S.removeChannel(K)}catch{}setTimeout(()=>{Ve(e),o("home")},800)}const le={BOOST_STAT:({value:$=1,count:f=1,roles:b=[]},y,h)=>{const w=y[m+"Team"],k=Object.entries(w).filter(([z])=>!b.length||b.includes(z)).flatMap(([z,E])=>E.filter(I=>!I.used).map(I=>({...I,_line:z})));if(!k.length){y.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),h(y);return}te(k,f,`Choisir ${f} joueur(s) à booster (+${$})`,z=>{z.forEach(E=>{const I=(w[E._line]||[]).find(A=>A.cardId===E.cardId);I&&(I.boost=(I.boost||0)+$,y.log.push({text:`⚡ +${$} sur ${I.name}`,type:"info"}))}),y[m+"Team"]=w,h(y)})},DEBUFF_STAT:({value:$=1,count:f=1,roles:b=[],target:y="ai"},h,w)=>{const k=y==="home"?m:v,z=h[k+"Team"],E=y==="home"?"allié":"adverse",I=Object.entries(z).filter(([A])=>!b.length||b.includes(A)).flatMap(([A,M])=>M.map(B=>({...B,_line:A})));if(!I.length){h.log.push({text:`🎯 Aucun joueur ${E}`,type:"info"}),w(h);return}te(I,f,`Choisir ${f} joueur(s) ${E}(s) (-${$})`,A=>{A.forEach(M=>{const B=(z[M._line]||[]).find(V=>V.cardId===M.cardId);B&&(B.boost=(B.boost||0)-$,h.log.push({text:`🎯 -${$} sur ${B.name}`,type:"info"}))}),h[k+"Team"]=z,w(h)})},GRAY_PLAYER:({count:$=1,roles:f=[],target:b="ai"},y,h)=>{const w=b==="home"?m:v,k=y[w+"Team"],z=b==="home"?"allié":"adverse",E=Object.entries(k).filter(([I])=>!f.length||f.includes(I)).flatMap(([I,A])=>A.filter(M=>!M.used).map(M=>({...M,_line:I})));if(!E.length){y.log.push({text:`❌ Aucun joueur ${z}`,type:"info"}),h(y);return}te(E,$,`Choisir ${$} joueur(s) ${z}(s) à exclure`,I=>{const A="usedCardIds_"+w,M=new Set(y[A]||[]);I.forEach(B=>{const V=(k[B._line]||[]).find(W=>W.cardId===B.cardId);V&&(V.used=!0,M.add(B.cardId),y.log.push({text:`❌ ${V.name} exclu !`,type:"info"}))}),y[A]=[...M],y[w+"Team"]=k,h(y)})},REVIVE_PLAYER:({count:$=1,roles:f=[]},b,y)=>{const h=b[m+"Team"],w=Object.entries(h).filter(([k])=>!f.length||f.includes(k)).flatMap(([k,z])=>z.filter(E=>E.used).map(E=>({...E,_line:k})));if(!w.length){b.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),y(b);return}te(w,$,`Choisir ${$} joueur(s) à ressusciter`,k=>{k.forEach(z=>{const E=(h[z._line]||[]).find(I=>I.cardId===z.cardId);E&&(E.used=!1,b.log.push({text:`💫 ${E.name} ressuscité !`,type:"info"}))}),b[m+"Team"]=h,y(b)})},REMOVE_GOAL:({},$,f)=>{const b=v+"Score";$[b]>0?($[b]--,$.log.push({text:"🚫 Dernier but annulé !",type:"info"})):$.log.push({text:"🚫 Aucun but à annuler",type:"info"}),f($)},ADD_GOAL_DRAW:({},$,f)=>{$[m+"Score"]===$[v+"Score"]?($[m+"Score"]++,$.log.push({text:"🎯 But bonus !",type:"info"})):$.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),f($)},ADD_SUB:({value:$=1},f,b)=>{f.maxSubs=(f.maxSubs||3)+$,f.log.push({text:`🔄 +${$} remplacement(s)`,type:"info"}),b(f)},CUSTOM:({},$,f)=>f($)};function te($,f,b,y){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let w=[];function k(){var E,I;const z=$.map(A=>{const M={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",B=ze(A,A._line)+(A.boost||0),W=w.find(F=>F.cardId===A.cardId)?"#FFD700":"rgba(255,255,255,0.25)",O=A.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${W};background:${M};overflow:hidden;cursor:pointer;${O}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${A._line}</div>
        </div>`}).join("");h.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${b}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w.length}/${f}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${z}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${w.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${w.length}/${f})
          </button>
        </div>`,(E=h.querySelector("#pp-close"))==null||E.addEventListener("click",()=>h.remove()),h.querySelectorAll(".pp-item").forEach(A=>{A.addEventListener("click",()=>{const M=A.dataset.cid,B=$.find(W=>W.cardId===M),V=w.findIndex(W=>W.cardId===M);B&&(V>-1?w.splice(V,1):w.length<f&&w.push(B),k())})}),(I=h.querySelector("#pp-confirm"))==null||I.addEventListener("click",()=>{h.remove(),y(w)})}k(),document.body.appendChild(h)}async function U($,f){const y=(p["gcCardsFull_"+m]||[]).find(z=>z.id===$),h=(y==null?void 0:y._gcDef)||(p.gcDefs||[]).find(z=>{var E;return z.name===f||((E=z.name)==null?void 0:E.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),w=[...p["usedGc_"+m]||[],$],k={type:f,by:m,seq:(p._gcAnimSeq||0)+1};q.add(k.seq),fe(f,m,async()=>{if(h!=null&&h.effect_type&&h.effect_type!=="CUSTOM"){const E=le[h.effect_type];if(E){const I={...p};E(h.effect_params||{},I,async A=>{A["usedGc_"+m]=w,A._lastGC=k,A._gcAnimSeq=k.seq,await Z(A)});return}}const z={...p};switch(f){case"Remplacement+":z.maxSubs=(z.maxSubs||3)+1,z.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const E=v+"Score";z[E]>0&&(z[E]--,z.log.push({text:"🚫 But annulé",type:"info"}));break}}z["usedGc_"+m]=w,z._lastGC=k,z._gcAnimSeq=k.seq,await Z(z)})}function D($,f){const b="usedCardIds_"+$,y=new Set(p[b]||[]);f.forEach(h=>y.add(h)),p[b]=[...y]}function oe(){for(const $ of["p1","p2"]){const f=new Set(p["usedCardIds_"+$]||[]),b=p[$+"Team"];if(b)for(const y of["GK","DEF","MIL","ATT"])(b[y]||[]).forEach(h=>{h.used=f.has(h.cardId)})}}function xe(){var We,ot,ut,ft,gt,ce;if(p.phase==="reveal")return _e();if(p.phase==="midfield")return we();if(p.phase==="finished")return C();const $=p[m+"Team"],f=p[v+"Team"];oe();const b=p[m+"Score"],y=p[v+"Score"],h=p[m+"Name"],w=p[v+"Name"],k=p.phase===m+"-attack",z=p.phase===m+"-defense",E=Array.isArray(p["selected_"+m])?p["selected_"+m]:[],I=E.map(J=>J.cardId),A=window.innerWidth>=700,M=p[m+"Subs"]||[],B=p["usedSubIds_"+m]||[],V=M.filter(J=>!B.includes(J.cardId)),W=p["gcCardsFull_"+m]||[],O=p["usedGc_"+m]||[],F=W.filter(J=>!O.includes(J.id)),Y=p.boostOwner===m&&!p.boostUsed,ie=!["GK","DEF","MIL","ATT"].some(J=>(f[J]||[]).some(R=>!R.used)),X=[...$.MIL||[],...$.ATT||[]].filter(J=>!J.used),ue=k&&ie&&X.length===0?[...$.GK||[],...$.DEF||[]].filter(J=>!J.used).map(J=>J.cardId):[];function be(J,R,ne){var kt,Ct;const ve=J._gcDef,$e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ve==null?void 0:ve.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Qe={purple:"#b06ce0",light_blue:"#00d4ef"}[ve==null?void 0:ve.color]||"#b06ce0",Ze=(ve==null?void 0:ve.name)||J.gc_type,tt=(ve==null?void 0:ve.effect)||((kt=Oe[J.gc_type])==null?void 0:kt.desc)||"",at=ve!=null&&ve.image_url?`/icons/${ve.image_url}`:null,_t=((Ct=Oe[J.gc_type])==null?void 0:Ct.icon)||"⚡",$t=Math.round(ne*.22),lt=Math.round(ne*.22),mt=ne-$t-lt,xt=Ze.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${J.id}" data-gc-type="${J.gc_type}"
        style="box-sizing:border-box;width:${R}px;height:${ne}px;border-radius:10px;border:2px solid ${Qe};background:${$e};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${$t}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${xt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${R-6}px">${Ze}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${mt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${at?`<img src="${at}" style="max-width:${R-10}px;max-height:${mt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(mt*.55)}px">${_t}</span>`}
        </div>
        <div style="height:${lt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${tt.slice(0,38)}</span>
        </div>
      </div>`}function ye(J,R){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${J}px;height:${R}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(R*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(R*.2)}px">⚡</div>
        <div style="font-size:${Math.round(R*.09)}px;color:#000;font-weight:900">+${p.boostValue}</div>
      </div>`}const Ee=(J,R)=>R?ye(130,175):be(J,130,175),Be=(J,R)=>R?ye(68,95):be(J,68,95),De=A?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Me=k?ke(m)?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${E.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${De};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:z?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${E.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${w}</div>`,je=k&&!ke(m)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':k||z?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${E.length}/3 sélectionné(s)</div>`:"",Ie=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${A?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${V.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':V.map(J=>`<div class="pvp-sub-btn" data-sub-id="${J.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(J,A?76:44,A?100:58)}</div>`).join("")}
    </div>`,Ne=k?"attack":z?"defense":"idle",He=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt($,p[m+"Formation"],Ne,I,300,300,ue)}
      </div>
    </div>`;function Ye(J){if(J.type==="duel"&&(J.homeTotal!=null||J.aiTotal!=null)){const R=(J.homeTotal||0)>=(J.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(J.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(J.homePlayers||[]).map(ne=>st(ne)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${R?20:14}px;font-weight:900;color:${R?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${J.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${R?14:20}px;font-weight:900;color:${R?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${J.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(J.aiPlayers||[]).map(ne=>st(ne)).join("")}
            </div>
          </div>
          ${J.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${J.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${J.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${J.type==="goal"?700:400};padding:3px 2px">${J.text||""}</div>`}const Ke=(()=>{var R,ne;if(z&&((R=p.pendingAttack)!=null&&R.players)){const ve=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${w} ATTAQUE — Défendez !</div>
          ${it((ve.players||[]).map($e=>({...$e,used:!1})),"#ff6b6b",ve.total)}
        </div>`}if(k&&((ne=p.pendingAttack)!=null&&ne.players)){const ve=p.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ve.players||[]).map($e=>({...$e,used:!1})),"#00ff88",ve.total)}
        </div>`}const J=(p.log||[]).slice(-1)[0];return J?'<div style="padding:2px 4px">'+Ye(J)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Re=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${b} – ${y}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${w}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(p.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",A?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Re}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ie}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${He}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Me}${je}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${F.map(J=>Ee(J,!1)).join("")}
            ${Y?Ee(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Re}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt($,p[m+"Formation"],Ne,I,300,300,ue)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${F.map(J=>Be(J,!1)).join("")}
            ${Y?Be(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${k&&V.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${k&&V.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${k&&V.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${k&&V.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${V.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(p["usedSubIds_"+m]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(p["usedSubIds_"+m]||[]).length}/${p.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${Me}${je}</div>
        </div>
      </div>`;function Pe(){const J=e.querySelector(".match-screen");if(!J)return;const R=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);J.style.height=R+"px",J.style.minHeight=R+"px",J.style.maxHeight=R+"px",J.style.overflow="hidden";const ne=e.querySelector("#mobile-action-bar"),ve=e.querySelector("#mobile-play-area");ne&&ve&&(ve.style.paddingBottom=ne.offsetHeight+"px")}if(Pe(),setTimeout(Pe,120),setTimeout(Pe,400),P||(P=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Pe),window.visualViewport.addEventListener("scroll",Pe)),window.addEventListener("resize",Pe)),function(){const R=e.querySelector(".terrain-wrapper svg");R&&(R.removeAttribute("width"),R.removeAttribute("height"),R.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",R.setAttribute("viewBox","-26 -26 352 352"),R.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(J=>{J.addEventListener("click",()=>{if(!k&&!z)return;const R=J.dataset.cardId,ne=J.dataset.role,ve=($[ne]||[]).find(tt=>tt.cardId===R);if(!ve||ve.used)return;const $e=ue.includes(R);if(k&&!["MIL","ATT"].includes(ne)&&!$e)return;Array.isArray(p["selected_"+m])||(p["selected_"+m]=[]);const Qe=p["selected_"+m],Ze=Qe.findIndex(tt=>tt.cardId===R);Ze>-1?Qe.splice(Ze,1):Qe.length<3&&Qe.push({...ve,_role:ne}),xe()})}),e.querySelectorAll(".match-used-hit").forEach(J=>{J.addEventListener("click",()=>H(J.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(J=>{J.addEventListener("click",()=>H())}),(We=e.querySelector("#pvp-sub-open"))==null||We.addEventListener("click",()=>H()),e.querySelectorAll(".pvp-gc-mini").forEach(J=>{J.addEventListener("click",()=>me(J.dataset.gcId,J.dataset.gcType))}),(ot=e.querySelector("#pvp-boost-card"))==null||ot.addEventListener("click",()=>ge()),(ut=e.querySelector("#pvp-action"))==null||ut.addEventListener("click",J=>{k?J.currentTarget.dataset.pass==="1"||!ke(m)?pe():ee():z&&de()}),(ft=e.querySelector("#pvp-quit"))==null||ft.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&re()}),(gt=e.querySelector("#pvp-view-opp"))==null||gt.addEventListener("click",()=>ae()),(ce=e.querySelector("#pvp-toggle-history"))==null||ce.addEventListener("click",()=>se()),j&&(clearInterval(j),j=null),(k||z)&&!L){let J=30,R=!1;const ne=()=>document.getElementById("pvp-timer"),ve=()=>{ne()&&(ne().textContent=J+"s",ne().style.color=R?"#ff4444":"#fff")};ve(),j=setInterval(()=>{J--,J<0?R?(clearInterval(j),j=null,k&&!ke(m)?pe():re()):(R=!0,J=15,ve()):ve()},1e3)}}function _e(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${p[v+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(p[v+"Team"],p[v+"Formation"],null,[],300,300)}</div>
    </div>`,m==="p1"&&setTimeout(async()=>{await Z({phase:"midfield"})},5e3)}let he=!1;function we(){if(he)return;const $=p[m+"Team"].MIL||[],f=p[v+"Team"].MIL||[];function b(F){return F.reduce((Y,ie)=>Y+ze(ie,"MIL"),0)}function y(F){let Y=0;for(let ie=0;ie<F.length-1;ie++){const X=rt(F[ie],F[ie+1]);X==="#00ff88"?Y+=2:X==="#FFD700"&&(Y+=1)}return Y}const h=b($)+y($),w=b(f)+y(f),k=h>=w;function z(F,Y,ie){return`<div id="duel-row-${ie}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${Y}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${F.map((X,ue)=>{const be=ue<F.length-1?rt(X,F[ue+1]):null,ye=!be||be==="#ff3333"||be==="#cc2222",Ee=be==="#00ff88"?"+2":be==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ie}" data-idx="${ue}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...X,note:ze(X,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${ue<F.length-1?`<div class="duel-link duel-link-${ie}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":be};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${be}`}">
              ${Ee?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${be}">${Ee}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ie}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${b(F)} + ${y(F)} liens = <b style="color:#fff">${b(F)+y(F)}</b>
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
      ${z($,p[m+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${z(f,p[v+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const E=(F,Y)=>e.querySelectorAll(F).forEach((ie,X)=>{setTimeout(()=>{ie.style.opacity="1",ie.style.transform="translateY(0) scale(1)"},Y+X*90)});E(".duel-card-me",150),E(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((F,Y)=>setTimeout(()=>{F.style.opacity="1"},Y*70)),900),setTimeout(()=>{const F=e.querySelector("#pvp-vs");F&&(F.style.opacity="1",F.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(Y=>Y.style.opacity="1")},1250);function I(F,Y,ie){const X=document.getElementById(F);if(!X)return;const ue=performance.now(),be=ye=>{const Ee=Math.min(1,(ye-ue)/ie);X.textContent=Math.round(Y*(1-Math.pow(1-Ee,3))),Ee<1?requestAnimationFrame(be):X.textContent=Y};requestAnimationFrame(be)}setTimeout(()=>{I("pvp-score-me",h,800),I("pvp-score-opp",w,800)},1500);const A=p.p1Team.MIL||[],M=p.p2Team.MIL||[],B=b(A)+y(A),V=b(M)+y(M),W=B>=V?"p1":"p2";let O=p.boostValue;O==null&&(O=oi(),p.boostValue=O,p.boostOwner=W,p.boostUsed=!1),he=!0,setTimeout(()=>{const F=e.querySelector("#duel-row-"+(k?"me":"opp")),Y=e.querySelector("#duel-row-"+(k?"opp":"me")),ie=document.getElementById("pvp-score-me"),X=document.getElementById("pvp-score-opp"),ue=k?ie:X,be=k?X:ie;ue&&(ue.style.fontSize="80px",ue.style.color=k?"#FFD700":"#ff6b6b",ue.style.animation="duelPulse .5s ease"+(k?",duelGlow 1.5s ease infinite .5s":"")),be&&(be.style.opacity="0.25"),setTimeout(()=>{F&&(F.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",F.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),Y&&(Y.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Ee=p.boostOwner===m?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+O+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Be=m==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(k?"⚽ "+p[m+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+p[v+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Ee+Be,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const Me=W;await Z({phase:Me+"-attack",attacker:Me,round:1,boostValue:O,boostUsed:!1,boostOwner:Me})})},600)},700)},2800)}function Ce($,f,b,y,h){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const k=Array.from({length:10},(A,M)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${M%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][M%8]}</div>`).join(""),z={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};w.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${k}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${y?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${f} – ${b}
      </div>
      ${$!=null&&$.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${$.map(A=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${z[A.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${A.portrait?`<img src="${A.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(A.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(w);let E=!1;const I=()=>{E||(E=!0,w.remove(),setTimeout(()=>h(),50))};w.addEventListener("click",I),setTimeout(I,3500)}function fe($,f,b){var O,F;const y=(p.gcDefs||[]).find(Y=>{var ie;return Y.name===$||((ie=Y.name)==null?void 0:ie.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",k=(y==null?void 0:y.name)||$,z=(y==null?void 0:y.effect)||((O=Oe[$])==null?void 0:O.desc)||"",E=y!=null&&y.image_url?`/icons/${y.image_url}`:null,I=((F=Oe[$])==null?void 0:F.icon)||"⚡",M=f===m?"Vous":p[f+"Name"]||"Adversaire",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",B.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${w}66}50%{box-shadow:0 0 60px ${w}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${w};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${M} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${w};background:${h};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${E?`<img src="${E}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${I}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${z}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(B);let V=!1;const W=()=>{V||(V=!0,B.remove(),setTimeout(()=>b&&b(),50))};B.addEventListener("click",W),setTimeout(W,3e3)}function me($,f){var B,V,W,O;const y=(p["gcCardsFull_"+m]||[]).find(F=>F.id===$),h=y==null?void 0:y._gcDef,w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",k={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",z=(h==null?void 0:h.name)||f,E=(h==null?void 0:h.effect)||((B=Oe[f])==null?void 0:B.desc)||"Carte spéciale.",I=h!=null&&h.image_url?`/icons/${h.image_url}`:null,A=((V=Oe[f])==null?void 0:V.icon)||"⚡",M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",M.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${k}66">
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
      </div>`,document.body.appendChild(M),(W=M.querySelector("#pvp-gc-back"))==null||W.addEventListener("click",()=>M.remove()),(O=M.querySelector("#pvp-gc-use"))==null||O.addEventListener("click",()=>{M.remove(),U($,f)})}function ge(){var y;const $=p[m+"Team"],f=Object.entries($).flatMap(([h,w])=>(w||[]).filter(k=>!k.used).map(k=>({...k,_line:h})));if(!f.length)return;const b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",b.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${p.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${f.map(h=>{const w={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[h._line]||"#555",k=ze(h,h._line)+(h.boost||0);return`<div class="bp-item" data-cid="${h.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${w};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${h.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${k}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(b),(y=b.querySelector("#bp-close"))==null||y.addEventListener("click",()=>b.remove()),b.querySelectorAll(".bp-item").forEach(h=>{h.addEventListener("click",async()=>{const w=h.dataset.cid,k=f.find(E=>E.cardId===w);if(!k)return;const z=($[k._line]||[]).find(E=>E.cardId===w);z&&(z.boost=(z.boost||0)+p.boostValue),b.remove(),await Z({[m+"Team"]:$,boostUsed:!0})})})}function H($=null){var V,W;if(!(p.phase===m+"-attack")){x("Remplacement uniquement avant votre attaque","warning");return}const b=p[m+"Team"],y=p["usedSubIds_"+m]||[],h=p.maxSubs||3;if(y.length>=h){x(`Maximum ${h} remplacements atteint`,"warning");return}const w=Object.entries(b).flatMap(([O,F])=>(F||[]).filter(Y=>Y.used).map(Y=>({...Y,_line:O}))),k=(p[m+"Subs"]||[]).filter(O=>!y.includes(O.cardId));if(!w.length){x("Aucun joueur utilisé à remplacer","warning");return}if(!k.length){x("Aucun remplaçant disponible","warning");return}let z=Math.max(0,w.findIndex(O=>O.cardId===$));const E=((V=w[z])==null?void 0:V._line)||((W=w[z])==null?void 0:W.job);let I=Math.max(0,k.findIndex(O=>O.job===E)),A=!1;const M=document.createElement("div");M.id="pvp-sub-overlay",M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function B(){var be,ye,Ee,Be,De,Me;const O=w[z],F=k[I],Y=Math.min(130,Math.round((window.innerWidth-90)/2)),ie=Math.round(Y*1.35),X=je=>`background:rgba(255,255,255,0.12);border:none;color:${je?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${je?"default":"pointer"};flex-shrink:0`;M.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${y.length}/${h})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${X(I===0)}" ${I===0?"disabled":""}>▲</button>
          <div>${F?Xe({...F,used:!1,boost:0},Y,ie):"<div>—</div>"}</div>
          <button id="pin-down" style="${X(I>=k.length-1)}" ${I>=k.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${I+1}/${k.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${X(z===0)}" ${z===0?"disabled":""}>▲</button>
          <div>${O?Xe({...O,used:!1,boost:0},Y,ie):"<div>—</div>"}</div>
          <button id="pout-down" style="${X(z>=w.length-1)}" ${z>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${z+1}/${w.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(be=M.querySelector("#psub-close"))==null||be.addEventListener("click",()=>M.remove()),(ye=M.querySelector("#pout-up"))==null||ye.addEventListener("click",()=>{z>0&&(z--,B())}),(Ee=M.querySelector("#pout-down"))==null||Ee.addEventListener("click",()=>{z<w.length-1&&(z++,B())}),(Be=M.querySelector("#pin-up"))==null||Be.addEventListener("click",()=>{I>0&&(I--,B())}),(De=M.querySelector("#pin-down"))==null||De.addEventListener("click",()=>{I<k.length-1&&(I++,B())});const ue=(je,Ie,Ne,He)=>{const Ye=M.querySelector("#"+je);if(!Ye)return;let Ke=0;Ye.addEventListener("touchstart",Re=>{Ke=Re.touches[0].clientY},{passive:!0}),Ye.addEventListener("touchend",Re=>{const Pe=Re.changedTouches[0].clientY-Ke;if(Math.abs(Pe)<30)return;const We=Ie();Pe<0&&We<He-1?(Ne(We+1),B()):Pe>0&&We>0&&(Ne(We-1),B())},{passive:!0})};ue("pin-panel",()=>I,je=>I=je,k.length),ue("pout-panel",()=>z,je=>z=je,w.length),(Me=M.querySelector("#psub-confirm"))==null||Me.addEventListener("click",async je=>{if(je.preventDefault(),je.stopPropagation(),A)return;A=!0;const Ie=w[z],Ne=k[I];if(!Ie||!Ne)return;const He=Ie._line,Ye=(b[He]||[]).findIndex(Pe=>Pe.cardId===Ie.cardId);if(Ye===-1){x("Erreur : joueur introuvable","error"),M.remove();return}const Ke={...Ne,_line:He,position:Ie.position,used:!1,boost:0};b[He].splice(Ye,1,Ke);const Re=[...y,Ne.cardId];M.remove(),Q(Ie,Ne,async()=>{await Z({[m+"Team"]:b,[v+"Team"]:p[v+"Team"],["usedSubIds_"+m]:Re})})})}document.body.appendChild(M),B()}function Q($,f,b){const y={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const w=(E,I,A)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${I};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${A}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${y[E.job]||"#555"};border:3px solid ${I};position:relative;overflow:hidden;margin:0 auto">
        ${Ue(E)?`<img src="${Ue(E)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(E.name||"").slice(0,12)}</div>
    </div>`;h.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${w(f,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${w($,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(h);let k=!1;const z=()=>{k||(k=!0,h.remove(),setTimeout(()=>b(),50))};h.addEventListener("click",z),setTimeout(z,2200)}function ae(){var f;const $=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",$.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${p[v+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(p[v+"Team"],p[v+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild($),(f=$.querySelector("#pvp-opp-close"))==null||f.addEventListener("click",()=>$.remove())}function se(){var b;const $=p.log||[],f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",f.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${$.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...$].reverse().map(y=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${y.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(f),(b=f.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>f.remove())}async function pe(){if(p.phase!==m+"-attack")return;const $=m==="p1"?"p2":"p1",f=(p.round||0)+1,b=[...p.log||[]];b.push({type:"info",text:`⏭️ ${p[m+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const y=qe(p),h=ke($),w=y||!h?"finished":$+"-attack";await Z({["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},pendingAttack:null,phase:w,attacker:$,round:f,log:b}),w==="finished"&&await Se(p)}async function ee(){const $=p[m+"Team"],f=!["GK","DEF","MIL","ATT"].some(w=>(p[v+"Team"][w]||[]).some(k=>!k.used)),b=(p["selected_"+m]||[]).map(w=>{const k=($[w._role]||[]).find(B=>B.cardId===w.cardId)||w,z=f&&["GK","DEF"].includes(w._role),E=$[w._role]||[],I=E.findIndex(B=>B.cardId===w.cardId),A=dt(E.length),M=I>=0?A[I]:k._col??1;return{...k,_line:w._role,_col:M,...z?{note_a:Math.max(1,Number(k.note_a)||0)}:{}}});if(!b.length)return;const y=Ot(b,p.modifiers[m]||{});D(m,b.map(w=>w.cardId)),b.forEach(w=>{const k=($[w._role]||[]).find(z=>z.cardId===w.cardId);k&&(k.used=!0)}),p["selected_"+m]=[],xe();const h=[...p.log||[]];if(f){const w=(p[m+"Score"]||0)+1,k=b.map(M=>({name:M.name,note:ze(M,M._line||"ATT"),portrait:Ue(M),job:M.job}));h.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:k,homeTotal:y.total,aiTotal:0});const z=(p.round||0)+1,E=m==="p1"?"p2":"p1",I={...p,[m+"Team"]:$,[m+"Score"]:w},A=qe(I);G.add(z),Ce(k,w,p[v+"Score"]||0,!0,async()=>{await Z({[m+"Team"]:$,[m+"Score"]:w,["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},pendingAttack:null,phase:A?"finished":E+"-attack",attacker:E,round:z,log:h}),A&&await Se({...p,[m+"Score"]:w})});return}h.push({type:"pending",text:`⚔️ ${p[m+"Name"]} attaque (${y.total})`}),await Z({[m+"Team"]:$,[v+"Team"]:p[v+"Team"],pendingAttack:{...y,players:b,side:m},["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},phase:v+"-defense",log:h})}async function de(){const $=p[m+"Team"],f=(p["selected_"+m]||[]).map(O=>{const F=($[O._role]||[]).find(be=>be.cardId===O.cardId)||O,Y=$[O._role]||[],ie=Y.findIndex(be=>be.cardId===O.cardId),X=dt(Y.length),ue=ie>=0?X[ie]:F._col??1;return{...F,_line:O._role,_col:ue}}),b=Ht(f,p.modifiers[m]||{});D(m,f.map(O=>O.cardId)),f.forEach(O=>{const F=($[O._role]||[]).find(Y=>Y.cardId===O.cardId);F&&(F.used=!0)}),p["selected_"+m]=[],xe();const y=Ut(p.pendingAttack.total,b.total,p.modifiers[m]||{}),h=p.pendingAttack.side,w=y==="attack"||(y==null?void 0:y.goal),k=h==="p1"?"p2":"p1",z=(p.round||0)+1,E=(p.pendingAttack.players||[]).map(O=>({name:O.name,note:ze(O,O._line||"ATT"),portrait:Ue(O),job:O.job})),I=[...p.log||[]];I.push({type:"duel",isGoal:w,homeScored:w&&h===m,text:w?`⚽ BUT de ${p[h+"Name"]} ! (${p.pendingAttack.total} vs ${b.total})`:`✋ Attaque stoppée (${p.pendingAttack.total} vs ${b.total})`,homePlayers:E,aiPlayers:f.map(O=>({name:O.name,note:ze(O,O._line||"DEF"),portrait:Ue(O),job:O.job})),homeTotal:p.pendingAttack.total,aiTotal:b.total});const A=w?(p[h+"Score"]||0)+1:p[h+"Score"]||0,M={...p,[m+"Team"]:$,[h+"Score"]:A},B=qe(M),V=B?"finished":k+"-attack",W=async()=>{await Z({[m+"Team"]:$,[v+"Team"]:p[v+"Team"],[h+"Score"]:A,["selected_"+m]:[],modifiers:{...p.modifiers,[m]:{}},pendingAttack:null,phase:V,attacker:k,round:z,log:I}),(V==="finished"||B)&&await Se({...p,[h+"Score"]:A})};if(w){const O=h===m,F=O?A:p[m+"Score"]||0,Y=O?p[v+"Score"]||0:A;G.add(z),Ce(E,F,Y,O,W)}else await W()}function Le($){return["MIL","ATT"].some(f=>($[f]||[]).some(b=>!b.used))}function Te($){return["GK","DEF","MIL","ATT"].some(f=>($[f]||[]).some(b=>!b.used))}function Ae($){return Te($)&&!Le($)}function ke($){const f=p[$+"Team"],b=p[($==="p1"?"p2":"p1")+"Team"];return!!(Le(f)||!Te(b)&&Ae(f))}function qe($){const f=["MIL","ATT"].some(I=>($.p1Team[I]||[]).some(A=>!A.used)),b=["MIL","ATT"].some(I=>($.p2Team[I]||[]).some(A=>!A.used)),y=Te($.p1Team),h=Te($.p2Team);return!f&&!(!h&&y)&&(!b&&!(!y&&h))}function Ge($){const f=$.p1Score||0,b=$.p2Score||0;return f===b?null:f>b?c.home_id:c.away_id}async function Se($){try{const f=Ge($),b=f?c.home_id===f?c.away_id:c.home_id:null;await S.from("matches").update({status:"finished",winner_id:f,home_score:$.p1Score||0,away_score:$.p2Score||0}).eq("id",i),f&&b&&updateEvolutiveCards(f,b).catch(()=>{})}catch(f){console.error("[PvP] finishMatch:",f)}}function C(){var h;const $=p[m+"Score"],f=p[v+"Score"],b=$>f,y=$===f;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${b?"🏆":y?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${b?"Victoire !":y?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${$} - ${f}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(h=document.getElementById("pvp-home"))==null||h.addEventListener("click",()=>{try{S.removeChannel(K)}catch{}Ve(e),o("home")})}xe()}const Cn=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:yi,resumePvpMatch:jn},Symbol.toStringTag,{value:"Module"}));async function qn(e,t,i,n){var d,a;try{const r=(a=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:a.id;try{(S.getChannels?S.getChannels():[]).forEach(u=>{const s=u.topic||"";(s.includes("matchmaking")||s.includes("pvp-match"))&&S.removeChannel(u)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}r&&(await S.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await S.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await ri(e,t,"random",({deckId:r,formation:l,starters:u,subsRaw:s,gcCardsEnriched:o,gcDefs:x,stadiumDef:m})=>{const v=_=>Bn(e,t,r,l,u,s,_,x||[],i,n);if(!o.length){v([]);return}ni(e,o,v)})}async function Bn(e,t,i,n,d,a,r=[],l=[],u,s){var K;const{state:o,navigate:x,toast:m}=t,v=o.profile.id;let _=!1,g=null;et(e);try{await S.rpc("cancel_matchmaking",{p_user_id:v})}catch{}try{await S.from("matchmaking_queue").delete().eq("user_id",v)}catch{}const c=(Z,re,le,te)=>{var U;e.innerHTML=`
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
      </div>`,(U=document.getElementById("lobby-cancel"))==null||U.addEventListener("click",async()=>{_=!0,g&&(S.removeChannel(g),g=null),le&&await S.from("friend_match_invites").update({status:"declined"}).eq("id",le),Ve(e),x("home")})},T=async(Z,re)=>{_=!0,g&&(S.removeChannel(g),g=null),await new Promise(le=>setTimeout(le,600)),e.isConnected&&Dn(e,t,Z,re,r,l)},{data:p}=await S.from("friend_match_invites").select("*").eq("status","pending").or(`and(inviter_id.eq.${v},invitee_id.eq.${u}),and(inviter_id.eq.${u},invitee_id.eq.${v})`).order("created_at",{ascending:!1}).limit(1).maybeSingle();let L,j;if(p&&p.inviter_id===u)j=!1,L=p.id,await S.from("friend_match_invites").update({invitee_deck_id:i,invitee_ready:!0,status:"accepted"}).eq("id",L);else{j=!0;const{data:Z,error:re}=await S.from("friend_match_invites").insert({inviter_id:v,invitee_id:u,friend_id:u,inviter_deck_id:i,inviter_ready:!0,status:"pending"}).select().single();if(re||!Z){m("Erreur création invitation","error"),Ve(e),x("home");return}L=Z.id}if(c(!0,!j,L),!j){const Z={home_id:u,away_id:v,home_deck_id:p.inviter_deck_id,away_deck_id:i,status:"active",mode:"friend"},re=await S.from("matches").insert(Z).select().single(),le=re.data;if(!le){m("Erreur création match: "+(((K=re.error)==null?void 0:K.message)||""),"error"),Ve(e),x("home");return}await S.from("friend_match_invites").update({match_id:le.id,status:"matched"}).eq("id",L),T(le.id,!1);return}let P=!1;const G=Z=>{_||P||(Z.status==="matched"&&Z.match_id?(P=!0,clearInterval(q),clearInterval(N),T(Z.match_id,!0)):Z.status==="declined"?(clearInterval(q),clearInterval(N),m(`${s} a décliné l'invitation`,"warning"),Ve(e),x("home")):Z.invitee_ready&&c(!0,!0,L))},q=setInterval(()=>{if(_){clearInterval(q);return}S.from("matchmaking_queue").delete().eq("user_id",v).then(()=>{},()=>{})},3e3),N=setInterval(async()=>{if(_||P){clearInterval(N);return}const{data:Z}=await S.from("friend_match_invites").select("*").eq("id",L).maybeSingle();Z&&G(Z)},1200);g=S.channel("friend-invite-"+L).on("postgres_changes",{event:"UPDATE",schema:"public",table:"friend_match_invites",filter:`id=eq.${L}`},Z=>G(Z.new)).subscribe()}async function Dn(e,t,i,n,d=[],a=[]){const{state:r,navigate:l,toast:u}=t,s=n?"p1":"p2",o=n?"p2":"p1",x=(d||[]).map(C=>C.id),m=(d||[]).map(C=>({id:C.id,gc_type:C.gc_type,_gcDef:C._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:v}=await S.from("matches").select("*").eq("id",i).single();if(!v){u("Match introuvable","error"),l("home");return}async function _(){const[{data:C},{data:$},{data:f},{data:b}]=await Promise.all([S.rpc("get_deck_for_match",{p_deck_id:v.home_deck_id}),S.rpc("get_deck_for_match",{p_deck_id:v.away_deck_id}),S.from("users").select("id,pseudo,club_name").eq("id",v.home_id).single(),S.from("users").select("id,pseudo,club_name").eq("id",v.away_id).single()]),y=E=>{const I=Number(E.evolution_bonus)||0;return{cardId:E.card_id,position:E.position,id:E.id,firstname:E.firstname,name:E.surname_real,country_code:E.country_code,club_id:E.club_id,job:E.job,job2:E.job2,note_g:(Number(E.note_g)||0)+(E.job==="GK"||E.job2==="GK"&&Number(E.note_g)>0?I:0),note_d:(Number(E.note_d)||0)+(E.job==="DEF"||E.job2==="DEF"&&Number(E.note_d)>0?I:0),note_m:(Number(E.note_m)||0)+(E.job==="MIL"||E.job2==="MIL"&&Number(E.note_m)>0?I:0),note_a:(Number(E.note_a)||0)+(E.job==="ATT"||E.job2==="ATT"&&Number(E.note_a)>0?I:0),evolution_bonus:I,rarity:E.rarity,skin:E.skin,hair:E.hair,hair_length:E.hair_length,face:E.face||null,clubName:E.club_encoded_name||null,clubLogo:E.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},h=((C==null?void 0:C.starters)||[]).map(E=>y(E)),w=(($==null?void 0:$.starters)||[]).map(E=>y(E)),k=(C==null?void 0:C.formation)||"4-4-2",z=($==null?void 0:$.formation)||"4-4-2";return{p1Team:(()=>{const E=ht(h,k);return stadiumDef?Tt(E,stadiumDef):E})(),p2Team:ht(w,z),p1Subs:(()=>{const E=((C==null?void 0:C.subs)||[]).map(I=>y(I));return stadiumDef&&jt(E,stadiumDef),E})(),p2Subs:(($==null?void 0:$.subs)||[]).map(E=>y(E)),p1Formation:k,p2Formation:z,p1Name:(f==null?void 0:f.club_name)||(f==null?void 0:f.pseudo)||"Joueur 1",p2Name:(b==null?void 0:b.club_name)||(b==null?void 0:b.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?x:[],gc_p2:n?[]:x,gcCardsFull_p1:n?m:[],gcCardsFull_p2:n?[]:m,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:a||[],lastActionAt:new Date().toISOString()}}let g=v.game_state&&Object.keys(v.game_state).length?v.game_state:null;if(!g)if(n){g=await _();const{data:C}=await S.from("matches").select("game_state").eq("id",i).single();!(C!=null&&C.game_state)||!Object.keys(C.game_state).length?await S.from("matches").update({game_state:g,turn_user_id:v.home_id}).eq("id",i):g=C.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let C=0;C<60&&!g;C++){await new Promise(f=>setTimeout(f,400));const{data:$}=await S.from("matches").select("game_state").eq("id",i).single();$!=null&&$.game_state&&Object.keys($.game_state).length&&(g=$.game_state)}if(!g){u("Erreur de synchronisation","error"),l("home");return}g.gc_p2=x,g.gcCardsFull_p2=m,await S.from("matches").update({game_state:g}).eq("id",i)}let c=!1,T=!1,p=!1,L=null,j=!1;const P=new Set,G=new Set;function q(C){var E,I;try{S.removeChannel(N)}catch{}const $=g[s+"Score"]||0,f=g[o+"Score"]||0;if(!p){p=!0;const A=C.winner_id||($>f?r.profile.id:f>$?"opp":null),M=A===r.profile.id?"win":A?"loss":null;M&&ii(()=>Promise.resolve().then(()=>Zi),void 0).then(B=>B.applyOwnEvolution(r.profile.id,M)).catch(()=>{})}if(!T){const A=g.p1Score||0,M=g.p2Score||0,B=(g.usedGc_p1||[]).length,V=(g.usedGc_p2||[]).length,W=C.winner_id||(A>M?v.home_id:M>A?v.away_id:null);(W?r.profile.id===W:r.profile.id<(n?v.away_id:v.home_id))&&(T=!0,Ki({player1Id:v.home_id,player2Id:v.away_id,score1:A,score2:M,gc1:B,gc2:V}).catch(F=>console.warn("[FriendMatch] updateStats:",F)))}let b,y;C.winner_id?(b=C.winner_id===r.profile.id,y=!1):C.forfeit?(b=$>f,y=!1):(y=$===f,b=$>f),(E=document.getElementById("pvp-end-overlay"))==null||E.remove();const h=document.createElement("div");h.id="pvp-end-overlay",h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const w=y?"🤝":b?"🏆":"😞",k=y?"MATCH NUL":b?"VICTOIRE !":"DÉFAITE",z=y?"#fff":b?"#FFD700":"#ff6b6b";h.innerHTML=`
      <div style="font-size:64px">${w}</div>
      <div style="font-size:26px;font-weight:900;color:${z}">${k}</div>
      <div style="font-size:18px">${g[s+"Name"]} ${$} – ${f} ${g[o+"Name"]}</div>
      ${C.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${b?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">Retour à l'accueil</button>`,document.body.appendChild(h),(I=h.querySelector("#pvp-end-home"))==null||I.addEventListener("click",()=>{h.remove(),Ve(e),l("home")})}const N=S.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},C=>{const $=C.new;try{if($.status==="finished"||$.forfeit){if(c)return;c=!0,L&&(clearInterval(L),L=null),$.game_state&&(g=$.game_state),q($);return}if($.game_state){const f=g;g=$.game_state;const b=g._lastGC;if(b&&b.seq&&!G.has(b.seq)&&(G.add(b.seq),b.by!==s)){Ce(b.type,b.by,()=>oe());return}const y=f[s+"Score"]||0,h=f[o+"Score"]||0,w=g[s+"Score"]||0,k=g[o+"Score"]||0,z=w>y,E=k>h;if((z||E)&&!P.has(g.round)){P.add(g.round);const I=[...g.log||[]].reverse().find(M=>M.isGoal),A=((I==null?void 0:I.homePlayers)||[]).map(M=>({name:M.name,note:M.note,portrait:M.portrait,job:M.job}));we(A,w,k,z,()=>oe());return}oe()}}catch(f){console.error("[PvP] crash:",f)}}).subscribe();async function K(C){Object.assign(g,C),g.lastActionAt=new Date().toISOString();const{error:$}=await S.from("matches").update({game_state:g}).eq("id",i);$&&u("Erreur de synchronisation","error");try{oe()}catch(f){console.error("[PvP] renderPvpScreen crash:",f)}}async function Z(){if(c)return;c=!0,L&&(clearInterval(L),L=null);const C=n?v.away_id:v.home_id,$=n?"p2":"p1",f=n?"p1":"p2",b={...g,[$+"Score"]:3,[f+"Score"]:0,phase:"finished"};try{await S.from("matches").update({status:"finished",forfeit:!0,winner_id:C,home_score:b.p1Score||0,away_score:b.p2Score||0,game_state:b}).eq("id",i)}catch{}try{S.removeChannel(N)}catch{}setTimeout(()=>{Ve(e),l("home")},800)}const re={BOOST_STAT:({value:C=1,count:$=1,roles:f=[]},b,y)=>{const h=b[s+"Team"],w=Object.entries(h).filter(([k])=>!f.length||f.includes(k)).flatMap(([k,z])=>z.filter(E=>!E.used).map(E=>({...E,_line:k})));if(!w.length){b.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),y(b);return}le(w,$,`Choisir ${$} joueur(s) à booster (+${C})`,k=>{k.forEach(z=>{const E=(h[z._line]||[]).find(I=>I.cardId===z.cardId);E&&(E.boost=(E.boost||0)+C,b.log.push({text:`⚡ +${C} sur ${E.name}`,type:"info"}))}),b[s+"Team"]=h,y(b)})},DEBUFF_STAT:({value:C=1,count:$=1,roles:f=[],target:b="ai"},y,h)=>{const w=b==="home"?s:o,k=y[w+"Team"],z=b==="home"?"allié":"adverse",E=Object.entries(k).filter(([I])=>!f.length||f.includes(I)).flatMap(([I,A])=>A.map(M=>({...M,_line:I})));if(!E.length){y.log.push({text:`🎯 Aucun joueur ${z}`,type:"info"}),h(y);return}le(E,$,`Choisir ${$} joueur(s) ${z}(s) (-${C})`,I=>{I.forEach(A=>{const M=(k[A._line]||[]).find(B=>B.cardId===A.cardId);M&&(M.boost=(M.boost||0)-C,y.log.push({text:`🎯 -${C} sur ${M.name}`,type:"info"}))}),y[w+"Team"]=k,h(y)})},GRAY_PLAYER:({count:C=1,roles:$=[],target:f="ai"},b,y)=>{const h=f==="home"?s:o,w=b[h+"Team"],k=f==="home"?"allié":"adverse",z=Object.entries(w).filter(([E])=>!$.length||$.includes(E)).flatMap(([E,I])=>I.filter(A=>!A.used).map(A=>({...A,_line:E})));if(!z.length){b.log.push({text:`❌ Aucun joueur ${k}`,type:"info"}),y(b);return}le(z,C,`Choisir ${C} joueur(s) ${k}(s) à exclure`,E=>{const I="usedCardIds_"+h,A=new Set(b[I]||[]);E.forEach(M=>{const B=(w[M._line]||[]).find(V=>V.cardId===M.cardId);B&&(B.used=!0,A.add(M.cardId),b.log.push({text:`❌ ${B.name} exclu !`,type:"info"}))}),b[I]=[...A],b[h+"Team"]=w,y(b)})},REVIVE_PLAYER:({count:C=1,roles:$=[]},f,b)=>{const y=f[s+"Team"],h=Object.entries(y).filter(([w])=>!$.length||$.includes(w)).flatMap(([w,k])=>k.filter(z=>z.used).map(z=>({...z,_line:w})));if(!h.length){f.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),b(f);return}le(h,C,`Choisir ${C} joueur(s) à ressusciter`,w=>{w.forEach(k=>{const z=(y[k._line]||[]).find(E=>E.cardId===k.cardId);z&&(z.used=!1,f.log.push({text:`💫 ${z.name} ressuscité !`,type:"info"}))}),f[s+"Team"]=y,b(f)})},REMOVE_GOAL:({},C,$)=>{const f=o+"Score";C[f]>0?(C[f]--,C.log.push({text:"🚫 Dernier but annulé !",type:"info"})):C.log.push({text:"🚫 Aucun but à annuler",type:"info"}),$(C)},ADD_GOAL_DRAW:({},C,$)=>{C[s+"Score"]===C[o+"Score"]?(C[s+"Score"]++,C.log.push({text:"🎯 But bonus !",type:"info"})):C.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),$(C)},ADD_SUB:({value:C=1},$,f)=>{$.maxSubs=($.maxSubs||3)+C,$.log.push({text:`🔄 +${C} remplacement(s)`,type:"info"}),f($)},CUSTOM:({},C,$)=>$(C)};function le(C,$,f,b){const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let h=[];function w(){var z,E;const k=C.map(I=>{const A={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",M=ze(I,I._line)+(I.boost||0),V=h.find(O=>O.cardId===I.cardId)?"#FFD700":"rgba(255,255,255,0.25)",W=I.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${V};background:${A};overflow:hidden;cursor:pointer;${W}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${M}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${I._line}</div>
        </div>`}).join("");y.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${f}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h.length}/${$}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${k}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${h.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${h.length}/${$})
          </button>
        </div>`,(z=y.querySelector("#pp-close"))==null||z.addEventListener("click",()=>y.remove()),y.querySelectorAll(".pp-item").forEach(I=>{I.addEventListener("click",()=>{const A=I.dataset.cid,M=C.find(V=>V.cardId===A),B=h.findIndex(V=>V.cardId===A);M&&(B>-1?h.splice(B,1):h.length<$&&h.push(M),w())})}),(E=y.querySelector("#pp-confirm"))==null||E.addEventListener("click",()=>{y.remove(),b(h)})}w(),document.body.appendChild(y)}async function te(C,$){const b=(g["gcCardsFull_"+s]||[]).find(k=>k.id===C),y=(b==null?void 0:b._gcDef)||(g.gcDefs||[]).find(k=>{var z;return k.name===$||((z=k.name)==null?void 0:z.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),h=[...g["usedGc_"+s]||[],C],w={type:$,by:s,seq:(g._gcAnimSeq||0)+1};G.add(w.seq),Ce($,s,async()=>{if(y!=null&&y.effect_type&&y.effect_type!=="CUSTOM"){const z=re[y.effect_type];if(z){const E={...g};z(y.effect_params||{},E,async I=>{I["usedGc_"+s]=h,I._lastGC=w,I._gcAnimSeq=w.seq,await K(I)});return}}const k={...g};switch($){case"Remplacement+":k.maxSubs=(k.maxSubs||3)+1,k.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const z=o+"Score";k[z]>0&&(k[z]--,k.log.push({text:"🚫 But annulé",type:"info"}));break}}k["usedGc_"+s]=h,k._lastGC=w,k._gcAnimSeq=w.seq,await K(k)})}function U(C,$){const f="usedCardIds_"+C,b=new Set(g[f]||[]);$.forEach(y=>b.add(y)),g[f]=[...b]}function D(){for(const C of["p1","p2"]){const $=new Set(g["usedCardIds_"+C]||[]),f=g[C+"Team"];if(f)for(const b of["GK","DEF","MIL","ATT"])(f[b]||[]).forEach(y=>{y.used=$.has(y.cardId)})}}function oe(){var Pe,We,ot,ut,ft,gt;if(g.phase==="reveal")return xe();if(g.phase==="midfield")return he();if(g.phase==="finished")return Se();const C=g[s+"Team"],$=g[o+"Team"];D();const f=g[s+"Score"],b=g[o+"Score"],y=g[s+"Name"],h=g[o+"Name"],w=g.phase===s+"-attack",k=g.phase===s+"-defense",z=Array.isArray(g["selected_"+s])?g["selected_"+s]:[],E=z.map(ce=>ce.cardId),I=window.innerWidth>=700,A=g[s+"Subs"]||[],M=g["usedSubIds_"+s]||[],B=A.filter(ce=>!M.includes(ce.cardId)),V=g["gcCardsFull_"+s]||[],W=g["usedGc_"+s]||[],O=V.filter(ce=>!W.includes(ce.id)),F=g.boostOwner===s&&!g.boostUsed,Y=!["GK","DEF","MIL","ATT"].some(ce=>($[ce]||[]).some(J=>!J.used)),ie=[...C.MIL||[],...C.ATT||[]].filter(ce=>!ce.used),X=w&&Y&&ie.length===0?[...C.GK||[],...C.DEF||[]].filter(ce=>!ce.used).map(ce=>ce.cardId):[];function ue(ce,J,R){var xt,kt;const ne=ce._gcDef,ve={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ne==null?void 0:ne.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",$e={purple:"#b06ce0",light_blue:"#00d4ef"}[ne==null?void 0:ne.color]||"#b06ce0",Qe=(ne==null?void 0:ne.name)||ce.gc_type,Ze=(ne==null?void 0:ne.effect)||((xt=Oe[ce.gc_type])==null?void 0:xt.desc)||"",tt=ne!=null&&ne.image_url?`/icons/${ne.image_url}`:null,at=((kt=Oe[ce.gc_type])==null?void 0:kt.icon)||"⚡",_t=Math.round(R*.22),$t=Math.round(R*.22),lt=R-_t-$t,mt=Qe.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ce.id}" data-gc-type="${ce.gc_type}"
        style="box-sizing:border-box;width:${J}px;height:${R}px;border-radius:10px;border:2px solid ${$e};background:${ve};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${_t}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${mt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${J-6}px">${Qe}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${lt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${tt?`<img src="${tt}" style="max-width:${J-10}px;max-height:${lt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(lt*.55)}px">${at}</span>`}
        </div>
        <div style="height:${$t}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ze.slice(0,38)}</span>
        </div>
      </div>`}function be(ce,J){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ce}px;height:${J}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(J*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(J*.2)}px">⚡</div>
        <div style="font-size:${Math.round(J*.09)}px;color:#000;font-weight:900">+${g.boostValue}</div>
      </div>`}const ye=(ce,J)=>J?be(130,175):ue(ce,130,175),Ee=(ce,J)=>J?be(68,95):ue(ce,68,95),Be=I?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",De=w?Ae(s)?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${z.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Be};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:k?`<button id="pvp-action" style="${Be};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${z.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${h}</div>`,Me=w&&!Ae(s)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':w||k?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${z.length}/3 sélectionné(s)</div>`:"",je=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${I?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${B.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':B.map(ce=>`<div class="pvp-sub-btn" data-sub-id="${ce.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(ce,I?76:44,I?100:58)}</div>`).join("")}
    </div>`,Ie=w?"attack":k?"defense":"idle",Ne=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(C,g[s+"Formation"],Ie,E,300,300,X)}
      </div>
    </div>`;function He(ce){if(ce.type==="duel"&&(ce.homeTotal!=null||ce.aiTotal!=null)){const J=(ce.homeTotal||0)>=(ce.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(ce.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ce.homePlayers||[]).map(R=>st(R)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${J?20:14}px;font-weight:900;color:${J?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${ce.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${J?14:20}px;font-weight:900;color:${J?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${ce.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(ce.aiPlayers||[]).map(R=>st(R)).join("")}
            </div>
          </div>
          ${ce.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${ce.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${ce.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${ce.type==="goal"?700:400};padding:3px 2px">${ce.text||""}</div>`}const Ye=(()=>{var J,R;if(k&&((J=g.pendingAttack)!=null&&J.players)){const ne=g.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${h} ATTAQUE — Défendez !</div>
          ${it((ne.players||[]).map(ve=>({...ve,used:!1})),"#ff6b6b",ne.total)}
        </div>`}if(w&&((R=g.pendingAttack)!=null&&R.players)){const ne=g.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it((ne.players||[]).map(ve=>({...ve,used:!1})),"#00ff88",ne.total)}
        </div>`}const ce=(g.log||[]).slice(-1)[0];return ce?'<div style="padding:2px 4px">'+He(ce)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ke=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${f} – ${b}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${h}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ye}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(g.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",I?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${je}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ne}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${De}${Me}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${O.map(ce=>ye(ce,!1)).join("")}
            ${F?ye(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ke}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(C,g[s+"Formation"],Ie,E,300,300,X)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${O.map(ce=>Ee(ce,!1)).join("")}
            ${F?Ee(null,!0):""}
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
          <div>${De}${Me}</div>
        </div>
      </div>`;function Re(){const ce=e.querySelector(".match-screen");if(!ce)return;const J=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ce.style.height=J+"px",ce.style.minHeight=J+"px",ce.style.maxHeight=J+"px",ce.style.overflow="hidden";const R=e.querySelector("#mobile-action-bar"),ne=e.querySelector("#mobile-play-area");R&&ne&&(ne.style.paddingBottom=R.offsetHeight+"px")}if(Re(),setTimeout(Re,120),setTimeout(Re,400),j||(j=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Re),window.visualViewport.addEventListener("scroll",Re)),window.addEventListener("resize",Re)),function(){const J=e.querySelector(".terrain-wrapper svg");J&&(J.removeAttribute("width"),J.removeAttribute("height"),J.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",J.setAttribute("viewBox","-26 -26 352 352"),J.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ce=>{ce.addEventListener("click",()=>{if(!w&&!k)return;const J=ce.dataset.cardId,R=ce.dataset.role,ne=(C[R]||[]).find(Ze=>Ze.cardId===J);if(!ne||ne.used)return;const ve=X.includes(J);if(w&&!["MIL","ATT"].includes(R)&&!ve)return;Array.isArray(g["selected_"+s])||(g["selected_"+s]=[]);const $e=g["selected_"+s],Qe=$e.findIndex(Ze=>Ze.cardId===J);Qe>-1?$e.splice(Qe,1):$e.length<3&&$e.push({...ne,_role:R}),oe()})}),e.querySelectorAll(".match-used-hit").forEach(ce=>{ce.addEventListener("click",()=>ge(ce.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ce=>{ce.addEventListener("click",()=>ge())}),(Pe=e.querySelector("#pvp-sub-open"))==null||Pe.addEventListener("click",()=>ge()),e.querySelectorAll(".pvp-gc-mini").forEach(ce=>{ce.addEventListener("click",()=>fe(ce.dataset.gcId,ce.dataset.gcType))}),(We=e.querySelector("#pvp-boost-card"))==null||We.addEventListener("click",()=>me()),(ot=e.querySelector("#pvp-action"))==null||ot.addEventListener("click",ce=>{w?ce.currentTarget.dataset.pass==="1"||!Ae(s)?se():pe():k&&ee()}),(ut=e.querySelector("#pvp-quit"))==null||ut.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&Z()}),(ft=e.querySelector("#pvp-view-opp"))==null||ft.addEventListener("click",()=>Q()),(gt=e.querySelector("#pvp-toggle-history"))==null||gt.addEventListener("click",()=>ae()),L&&(clearInterval(L),L=null),(w||k)&&!c){let ce=30,J=!1;const R=()=>document.getElementById("pvp-timer"),ne=()=>{R()&&(R().textContent=ce+"s",R().style.color=J?"#ff4444":"#fff")};ne(),L=setInterval(()=>{ce--,ce<0?J?(clearInterval(L),L=null,w&&!Ae(s)?se():Z()):(J=!0,ce=15,ne()):ne()},1e3)}}function xe(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${g[o+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(g[o+"Team"],g[o+"Formation"],null,[],300,300)}</div>
    </div>`,s==="p1"&&setTimeout(async()=>{await K({phase:"midfield"})},5e3)}let _e=!1;function he(){if(_e)return;const C=g[s+"Team"].MIL||[],$=g[o+"Team"].MIL||[];function f(O){return O.reduce((F,Y)=>F+ze(Y,"MIL"),0)}function b(O){let F=0;for(let Y=0;Y<O.length-1;Y++){const ie=rt(O[Y],O[Y+1]);ie==="#00ff88"?F+=2:ie==="#FFD700"&&(F+=1)}return F}const y=f(C)+b(C),h=f($)+b($),w=y>=h;function k(O,F,Y){return`<div id="duel-row-${Y}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${F}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${O.map((ie,X)=>{const ue=X<O.length-1?rt(ie,O[X+1]):null,be=!ue||ue==="#ff3333"||ue==="#cc2222",ye=ue==="#00ff88"?"+2":ue==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${Y}" data-idx="${X}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...ie,note:ze(ie,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${X<O.length-1?`<div class="duel-link duel-link-${Y}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${be?"rgba(255,255,255,0.12)":ue};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${be?"none":`0 0 8px ${ue}`}">
              ${ye?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ue}">${ye}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${Y}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${f(O)} + ${b(O)} liens = <b style="color:#fff">${f(O)+b(O)}</b>
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
      ${k(C,g[s+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${k($,g[o+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const z=(O,F)=>e.querySelectorAll(O).forEach((Y,ie)=>{setTimeout(()=>{Y.style.opacity="1",Y.style.transform="translateY(0) scale(1)"},F+ie*90)});z(".duel-card-me",150),z(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((O,F)=>setTimeout(()=>{O.style.opacity="1"},F*70)),900),setTimeout(()=>{const O=e.querySelector("#pvp-vs");O&&(O.style.opacity="1",O.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(F=>F.style.opacity="1")},1250);function E(O,F,Y){const ie=document.getElementById(O);if(!ie)return;const X=performance.now(),ue=be=>{const ye=Math.min(1,(be-X)/Y);ie.textContent=Math.round(F*(1-Math.pow(1-ye,3))),ye<1?requestAnimationFrame(ue):ie.textContent=F};requestAnimationFrame(ue)}setTimeout(()=>{E("pvp-score-me",y,800),E("pvp-score-opp",h,800)},1500);const I=g.p1Team.MIL||[],A=g.p2Team.MIL||[],M=f(I)+b(I),B=f(A)+b(A),V=M>=B?"p1":"p2";let W=g.boostValue;W==null&&(W=oi(),g.boostValue=W,g.boostOwner=V,g.boostUsed=!1),_e=!0,setTimeout(()=>{const O=e.querySelector("#duel-row-"+(w?"me":"opp")),F=e.querySelector("#duel-row-"+(w?"opp":"me")),Y=document.getElementById("pvp-score-me"),ie=document.getElementById("pvp-score-opp"),X=w?Y:ie,ue=w?ie:Y;X&&(X.style.fontSize="80px",X.style.color=w?"#FFD700":"#ff6b6b",X.style.animation="duelPulse .5s ease"+(w?",duelGlow 1.5s ease infinite .5s":"")),ue&&(ue.style.opacity="0.25"),setTimeout(()=>{O&&(O.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",O.style.zIndex="5"),setTimeout(()=>{const be=document.getElementById("duel-shock");be&&(be.style.animation="shockwave .5s ease-out forwards"),F&&(F.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Be;const be=document.getElementById("pvp-duel-finale");if(!be)return;const ye=g.boostOwner===s?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+W+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ee=s==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;be.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(w?"⚽ "+g[s+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+g[o+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ye+Ee,be.style.transition="opacity .45s ease",be.style.opacity="1",be.style.pointerEvents="auto",(Be=document.getElementById("pvp-start-match"))==null||Be.addEventListener("click",async()=>{const De=V;await K({phase:De+"-attack",attacker:De,round:1,boostValue:W,boostUsed:!1,boostOwner:De})})},600)},700)},2800)}function we(C,$,f,b,y){const h=document.createElement("div");h.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const w=Array.from({length:10},(I,A)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${A%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][A%8]}</div>`).join(""),k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};h.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${w}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${b?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${$} – ${f}
      </div>
      ${C!=null&&C.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${C.map(I=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${k[I.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${I.portrait?`<img src="${I.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(I.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(h);let z=!1;const E=()=>{z||(z=!0,h.remove(),setTimeout(()=>y(),50))};h.addEventListener("click",E),setTimeout(E,3500)}function Ce(C,$,f){var W,O;const b=(g.gcDefs||[]).find(F=>{var Y;return F.name===C||((Y=F.name)==null?void 0:Y.toLowerCase().trim())===(C==null?void 0:C.toLowerCase().trim())}),y={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[b==null?void 0:b.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",h={purple:"#b06ce0",light_blue:"#00d4ef"}[b==null?void 0:b.color]||"#b06ce0",w=(b==null?void 0:b.name)||C,k=(b==null?void 0:b.effect)||((W=Oe[C])==null?void 0:W.desc)||"",z=b!=null&&b.image_url?`/icons/${b.image_url}`:null,E=((O=Oe[C])==null?void 0:O.icon)||"⚡",A=$===s?"Vous":g[$+"Name"]||"Adversaire",M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",M.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${h}66}50%{box-shadow:0 0 60px ${h}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${h};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${A} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${h};background:${y};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${w.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${w}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${z?`<img src="${z}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${E}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${k}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(M);let B=!1;const V=()=>{B||(B=!0,M.remove(),setTimeout(()=>f&&f(),50))};M.addEventListener("click",V),setTimeout(V,3e3)}function fe(C,$){var M,B,V,W;const b=(g["gcCardsFull_"+s]||[]).find(O=>O.id===C),y=b==null?void 0:b._gcDef,h={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[y==null?void 0:y.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",w={purple:"#b06ce0",light_blue:"#00d4ef"}[y==null?void 0:y.color]||"#b06ce0",k=(y==null?void 0:y.name)||$,z=(y==null?void 0:y.effect)||((M=Oe[$])==null?void 0:M.desc)||"Carte spéciale.",E=y!=null&&y.image_url?`/icons/${y.image_url}`:null,I=((B=Oe[$])==null?void 0:B.icon)||"⚡",A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",A.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${w};background:${h};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${w}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${k.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${k}</div>
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
      </div>`,document.body.appendChild(A),(V=A.querySelector("#pvp-gc-back"))==null||V.addEventListener("click",()=>A.remove()),(W=A.querySelector("#pvp-gc-use"))==null||W.addEventListener("click",()=>{A.remove(),te(C,$)})}function me(){var b;const C=g[s+"Team"],$=Object.entries(C).flatMap(([y,h])=>(h||[]).filter(w=>!w.used).map(w=>({...w,_line:y})));if(!$.length)return;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",f.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${g.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${$.map(y=>{const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[y._line]||"#555",w=ze(y,y._line)+(y.boost||0);return`<div class="bp-item" data-cid="${y.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${h};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${y.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${w}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(f),(b=f.querySelector("#bp-close"))==null||b.addEventListener("click",()=>f.remove()),f.querySelectorAll(".bp-item").forEach(y=>{y.addEventListener("click",async()=>{const h=y.dataset.cid,w=$.find(z=>z.cardId===h);if(!w)return;const k=(C[w._line]||[]).find(z=>z.cardId===h);k&&(k.boost=(k.boost||0)+g.boostValue),f.remove(),await K({[s+"Team"]:C,boostUsed:!0})})})}function ge(C=null){var B,V;if(!(g.phase===s+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const f=g[s+"Team"],b=g["usedSubIds_"+s]||[],y=g.maxSubs||3;if(b.length>=y){u(`Maximum ${y} remplacements atteint`,"warning");return}const h=Object.entries(f).flatMap(([W,O])=>(O||[]).filter(F=>F.used).map(F=>({...F,_line:W}))),w=(g[s+"Subs"]||[]).filter(W=>!b.includes(W.cardId));if(!h.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!w.length){u("Aucun remplaçant disponible","warning");return}let k=Math.max(0,h.findIndex(W=>W.cardId===C));const z=((B=h[k])==null?void 0:B._line)||((V=h[k])==null?void 0:V.job);let E=Math.max(0,w.findIndex(W=>W.job===z)),I=!1;const A=document.createElement("div");A.id="pvp-sub-overlay",A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function M(){var ue,be,ye,Ee,Be,De;const W=h[k],O=w[E],F=Math.min(130,Math.round((window.innerWidth-90)/2)),Y=Math.round(F*1.35),ie=Me=>`background:rgba(255,255,255,0.12);border:none;color:${Me?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Me?"default":"pointer"};flex-shrink:0`;A.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${b.length}/${y})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ie(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${O?Xe({...O,used:!1,boost:0},F,Y):"<div>—</div>"}</div>
          <button id="pin-down" style="${ie(E>=w.length-1)}" ${E>=w.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${w.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ie(k===0)}" ${k===0?"disabled":""}>▲</button>
          <div>${W?Xe({...W,used:!1,boost:0},F,Y):"<div>—</div>"}</div>
          <button id="pout-down" style="${ie(k>=h.length-1)}" ${k>=h.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${k+1}/${h.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ue=A.querySelector("#psub-close"))==null||ue.addEventListener("click",()=>A.remove()),(be=A.querySelector("#pout-up"))==null||be.addEventListener("click",()=>{k>0&&(k--,M())}),(ye=A.querySelector("#pout-down"))==null||ye.addEventListener("click",()=>{k<h.length-1&&(k++,M())}),(Ee=A.querySelector("#pin-up"))==null||Ee.addEventListener("click",()=>{E>0&&(E--,M())}),(Be=A.querySelector("#pin-down"))==null||Be.addEventListener("click",()=>{E<w.length-1&&(E++,M())});const X=(Me,je,Ie,Ne)=>{const He=A.querySelector("#"+Me);if(!He)return;let Ye=0;He.addEventListener("touchstart",Ke=>{Ye=Ke.touches[0].clientY},{passive:!0}),He.addEventListener("touchend",Ke=>{const Re=Ke.changedTouches[0].clientY-Ye;if(Math.abs(Re)<30)return;const Pe=je();Re<0&&Pe<Ne-1?(Ie(Pe+1),M()):Re>0&&Pe>0&&(Ie(Pe-1),M())},{passive:!0})};X("pin-panel",()=>E,Me=>E=Me,w.length),X("pout-panel",()=>k,Me=>k=Me,h.length),(De=A.querySelector("#psub-confirm"))==null||De.addEventListener("click",async Me=>{if(Me.preventDefault(),Me.stopPropagation(),I)return;I=!0;const je=h[k],Ie=w[E];if(!je||!Ie)return;const Ne=je._line,He=(f[Ne]||[]).findIndex(Re=>Re.cardId===je.cardId);if(He===-1){u("Erreur : joueur introuvable","error"),A.remove();return}const Ye={...Ie,_line:Ne,position:je.position,used:!1,boost:0};f[Ne].splice(He,1,Ye);const Ke=[...b,Ie.cardId];A.remove(),H(je,Ie,async()=>{await K({[s+"Team"]:f,[o+"Team"]:g[o+"Team"],["usedSubIds_"+s]:Ke})})})}document.body.appendChild(A),M()}function H(C,$,f){const b={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const h=(z,E,I)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${E};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${I}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${b[z.job]||"#555"};border:3px solid ${E};position:relative;overflow:hidden;margin:0 auto">
        ${Ue(z)?`<img src="${Ue(z)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(z.name||"").slice(0,12)}</div>
    </div>`;y.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${h($,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${h(C,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(y);let w=!1;const k=()=>{w||(w=!0,y.remove(),setTimeout(()=>f(),50))};y.addEventListener("click",k),setTimeout(k,2200)}function Q(){var $;const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",C.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${g[o+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(g[o+"Team"],g[o+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(C),($=C.querySelector("#pvp-opp-close"))==null||$.addEventListener("click",()=>C.remove())}function ae(){var b;const C=g.log||[],$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const f=y=>{var w,k,z;if(y.type==="duel"){const E=y.isGoal,I=y.homeScored&&s==="p1"||!y.homeScored&&E&&s==="p2",A=y.homeScored?"#FFD700":E?"#ff6b6b":"rgba(255,255,255,0.3)",M=E?I?"⚽ BUT !":"⚽ BUT adversaire !":(w=y.homePlayers)!=null&&w.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${E?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${A};margin-bottom:4px">
          <div style="font-size:9px;color:${A};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${M}</div>
          ${(k=y.homePlayers)!=null&&k.length?`<div style="margin-bottom:3px">${it(y.homePlayers,"rgba(255,255,255,0.7)",y.homeTotal)}</div>`:""}
          ${(z=y.aiPlayers)!=null&&z.length?`<div style="opacity:0.7">${it(y.aiPlayers,"#ff6b6b",y.aiTotal)}</div>`:""}
        </div>`}return y.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${y.outPlayer?Xe({...y.outPlayer,used:!0,_line:y.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${y.inPlayer?Xe({...y.inPlayer,_line:y.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${y.type==="goal"?"#FFD700":y.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${y.text||""}</div>
      </div>`};$.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${C.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...C].reverse().map(f).join("")}
      </div>`,document.body.appendChild($),(b=$.querySelector("#pvp-hist-close"))==null||b.addEventListener("click",()=>$.remove())}async function se(){if(g.phase!==s+"-attack")return;const C=s==="p1"?"p2":"p1",$=(g.round||0)+1,f=[...g.log||[]];f.push({type:"info",text:`⏭️ ${g[s+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const b=ke(g),y=Ae(C),h=b||!y?"finished":C+"-attack";await K({["selected_"+s]:[],modifiers:{...g.modifiers,[s]:{}},pendingAttack:null,phase:h,attacker:C,round:$,log:f}),h==="finished"&&await Ge(g)}async function pe(){const C=g[s+"Team"],$=!["GK","DEF","MIL","ATT"].some(h=>(g[o+"Team"][h]||[]).some(w=>!w.used)),f=(g["selected_"+s]||[]).map(h=>{const w=(C[h._role]||[]).find(M=>M.cardId===h.cardId)||h,k=$&&["GK","DEF"].includes(h._role),z=C[h._role]||[],E=z.findIndex(M=>M.cardId===h.cardId),I=dt(z.length),A=E>=0?I[E]:w._col??1;return{...w,_line:h._role,_col:A,...k?{note_a:Math.max(1,Number(w.note_a)||0)}:{}}});if(!f.length)return;const b=Ot(f,g.modifiers[s]||{});U(s,f.map(h=>h.cardId)),f.forEach(h=>{const w=(C[h._role]||[]).find(k=>k.cardId===h.cardId);w&&(w.used=!0)}),g["selected_"+s]=[],oe();const y=[...g.log||[]];if($){const h=(g[s+"Score"]||0)+1,w=f.map(A=>({name:A.name,note:ze(A,A._line||"ATT"),portrait:Ue(A),job:A.job}));y.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:w,homeTotal:b.total,aiTotal:0});const k=(g.round||0)+1,z=s==="p1"?"p2":"p1",E={...g,[s+"Team"]:C,[s+"Score"]:h},I=ke(E);P.add(k),we(w,h,g[o+"Score"]||0,!0,async()=>{await K({[s+"Team"]:C,[s+"Score"]:h,["selected_"+s]:[],modifiers:{...g.modifiers,[s]:{}},pendingAttack:null,phase:I?"finished":z+"-attack",attacker:z,round:k,log:y}),I&&await Ge({...g,[s+"Score"]:h})});return}y.push({type:"pending",text:`⚔️ ${g[s+"Name"]} attaque (${b.total})`}),await K({[s+"Team"]:C,[o+"Team"]:g[o+"Team"],pendingAttack:{...b,players:f,side:s},["selected_"+s]:[],modifiers:{...g.modifiers,[s]:{}},phase:o+"-defense",log:y})}async function ee(){const C=g[s+"Team"],$=(g["selected_"+s]||[]).map(W=>{const O=(C[W._role]||[]).find(ue=>ue.cardId===W.cardId)||W,F=C[W._role]||[],Y=F.findIndex(ue=>ue.cardId===W.cardId),ie=dt(F.length),X=Y>=0?ie[Y]:O._col??1;return{...O,_line:W._role,_col:X}}),f=Ht($,g.modifiers[s]||{});U(s,$.map(W=>W.cardId)),$.forEach(W=>{const O=(C[W._role]||[]).find(F=>F.cardId===W.cardId);O&&(O.used=!0)}),g["selected_"+s]=[],oe();const b=Ut(g.pendingAttack.total,f.total,g.modifiers[s]||{}),y=g.pendingAttack.side,h=b==="attack"||(b==null?void 0:b.goal),w=y==="p1"?"p2":"p1",k=(g.round||0)+1,z=(g.pendingAttack.players||[]).map(W=>({name:W.name,note:ze(W,W._line||"ATT"),portrait:Ue(W),job:W.job})),E=[...g.log||[]];E.push({type:"duel",isGoal:h,homeScored:h&&y===s,text:h?`⚽ BUT de ${g[y+"Name"]} ! (${g.pendingAttack.total} vs ${f.total})`:`✋ Attaque stoppée (${g.pendingAttack.total} vs ${f.total})`,homePlayers:z,aiPlayers:$.map(W=>({name:W.name,note:ze(W,W._line||"DEF"),portrait:Ue(W),job:W.job})),homeTotal:g.pendingAttack.total,aiTotal:f.total});const I=h?(g[y+"Score"]||0)+1:g[y+"Score"]||0,A={...g,[s+"Team"]:C,[y+"Score"]:I},M=ke(A),B=M?"finished":w+"-attack",V=async()=>{await K({[s+"Team"]:C,[o+"Team"]:g[o+"Team"],[y+"Score"]:I,["selected_"+s]:[],modifiers:{...g.modifiers,[s]:{}},pendingAttack:null,phase:B,attacker:w,round:k,log:E}),(B==="finished"||M)&&await Ge({...g,[y+"Score"]:I})};if(h){const W=y===s,O=W?I:g[s+"Score"]||0,F=W?g[o+"Score"]||0:I;P.add(k),we(z,O,F,W,V)}else await V()}function de(C){return["MIL","ATT"].some($=>(C[$]||[]).some(f=>!f.used))}function Le(C){return["GK","DEF","MIL","ATT"].some($=>(C[$]||[]).some(f=>!f.used))}function Te(C){return Le(C)&&!de(C)}function Ae(C){const $=g[C+"Team"],f=g[(C==="p1"?"p2":"p1")+"Team"];return!!(de($)||!Le(f)&&Te($))}function ke(C){const $=["MIL","ATT"].some(E=>(C.p1Team[E]||[]).some(I=>!I.used)),f=["MIL","ATT"].some(E=>(C.p2Team[E]||[]).some(I=>!I.used)),b=Le(C.p1Team),y=Le(C.p2Team);return!$&&!(!y&&b)&&(!f&&!(!b&&y))}function qe(C){const $=C.p1Score||0,f=C.p2Score||0;return $===f?null:$>f?v.home_id:v.away_id}async function Ge(C){try{const $=qe(C),f=$?v.home_id===$?v.away_id:v.home_id:null;await S.from("matches").update({status:"finished",winner_id:$,home_score:C.p1Score||0,away_score:C.p2Score||0}).eq("id",i),$&&f&&Ei($,f).catch(()=>{})}catch($){console.error("[PvP] finishMatch:",$)}}function Se(){var y;const C=g[s+"Score"],$=g[o+"Score"],f=C>$,b=C===$;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${f?"🏆":b?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${f?"Victoire !":b?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${C} - ${$}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(y=document.getElementById("pvp-home"))==null||y.addEventListener("click",()=>{try{S.removeChannel(N)}catch{}Ve(e),l("home")})}oe()}const It="#1A6B3C",yt="#D4A017";async function Fn(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await wt(e,t,i);return}await St(e,t)}async function St(e,t,i="waiting"){var T;const{state:n}=t,d=n.profile.id,{data:a}=await S.from("mini_league_members").select("league_id").eq("user_id",d),r=(a||[]).map(p=>p.league_id),{data:l,error:u}=await S.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),s=u?(await S.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:l||[],x=(r.length?await S.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],m=x.filter(p=>p.status==="waiting"&&!p.is_archived),v=x.filter(p=>p.status==="active"&&!p.is_archived),_=x.filter(p=>p.is_archived||p.status==="finished"),g=s.filter(p=>!r.includes(p.id)),c=[{key:"waiting",label:"🟡 En attente",count:m.length+g.length},{key:"active",label:"🟢 En cours",count:v.length},{key:"archived",label:"📁 Archivées",count:_.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${c.map(p=>`<button class="ml-tab" data-tab="${p.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===p.key?It:"transparent"};background:none;font-size:12px;font-weight:${i===p.key?"900":"600"};color:${i===p.key?It:"#888"};cursor:pointer">${p.label}${p.count?` (${p.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Gn(m,g,d):i==="active"?Pn(v,d):Nn(_,d)}
    </div>
  </div>`,(T=document.getElementById("ml-create-btn"))==null||T.addEventListener("click",()=>Rn(e,t)),e.querySelectorAll(".ml-tab").forEach(p=>p.addEventListener("click",()=>St(e,t,p.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(p=>p.addEventListener("click",()=>wt(e,t,p.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(p=>p.addEventListener("click",L=>{L.stopPropagation(),co(e,t,p.dataset.join,p.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(p=>p.addEventListener("click",L=>{L.stopPropagation(),vi(e,t,p.dataset.delete,p.dataset.name,i)}))}function ti(e,t,i=!1){var r,l;const n=e.creator_id===t,d=e.pot||0,a=((l=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:l.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function Gn(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(d=>ti(d,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(d=>ti(d,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Pn(e,t){return e.length?e.map(i=>ti(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Nn(e,t){return e.length?e.map(i=>ti(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Rn(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var _,g,c,T;const{toast:n}=t,d=document.getElementById("ml-name").value.trim(),a=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,l=((_=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:_.value)||"public",u=((g=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:g.value)||"aller",s=((T=(c=document.getElementById("ml-pwd"))==null?void 0:c.value)==null?void 0:T.trim())||null;if(!d){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(l==="private"&&!s){n("Mot de passe requis","error");return}const{data:o,error:x}=await S.from("mini_leagues").insert({name:d,creator_id:t.state.profile.id,type:l,password:s,mode:u,max_players:a,entry_fee:r}).select().single();if(x){n("Erreur : "+x.message,"error");return}const{data:m}=await S.from("users").select("credits").eq("id",t.state.profile.id).single();if(((m==null?void 0:m.credits)||0)<r){await S.from("mini_leagues").delete().eq("id",o.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await S.from("users").update({credits:m.credits-r}).eq("id",t.state.profile.id),await S.from("mini_leagues").update({pot:r}).eq("id",o.id),await S.from("mini_league_members").insert({league_id:o.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=m.credits-r);const v=document.getElementById("nav-credits");v&&(v.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),wt(e,t,o.id)})}function On(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=d=>{t.remove(),e(d)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",d=>{d.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",d=>{d.target===t&&n(null)})})}async function co(e,t,i,n){const{toast:d,state:a}=t,r=a.profile.id,{data:l}=await S.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!l){d("Mini League introuvable","error");return}if(l.status!=="waiting"){d("Cette Mini League a déjà démarré","warning");return}const{count:u}=await S.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(u>=l.max_players){d("La Mini League est complète","warning");return}if(n==="private"){const g=await On();if(g===null)return;if(l.password!==g){d("Mot de passe incorrect","error");return}}const s=l.entry_fee||100,{data:o}=await S.from("users").select("credits").eq("id",r).single();if(((o==null?void 0:o.credits)||0)<s){d(`Crédits insuffisants — il te faut ${s.toLocaleString("fr")} cr. (solde : ${((o==null?void 0:o.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:x}=await S.from("mini_league_members").insert({league_id:i,user_id:r});if(x){d("Erreur inscription : "+x.message,"error");return}const{error:m}=await S.from("users").update({credits:o.credits-s}).eq("id",r),{error:v}=await S.from("mini_leagues").update({pot:(l.pot||0)+s}).eq("id",i);(m||v)&&console.error("Erreur post-inscription:",m,v),a.profile&&(a.profile.credits=o.credits-s);const _=document.getElementById("nav-credits");_&&(_.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),d(`✅ Inscrit ! −${s.toLocaleString("fr")} cr. · Pot : ${((l.pot||0)+s).toLocaleString("fr")} cr.`,"success"),wt(e,t,i)}async function Hn(e,t,i,n){const{toast:d,state:a}=t,r=a.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:l}=await S.from("mini_leagues").select("pot,status").eq("id",i).single();if(!l||l.status!=="waiting"){d("Impossible — la league a déjà démarré","error");return}const{data:u}=await S.from("users").select("credits").eq("id",r).single();await S.from("mini_leagues").update({pot:Math.max(0,(l.pot||0)-n)}).eq("id",i),await S.from("users").update({credits:((u==null?void 0:u.credits)||0)+n}).eq("id",r),await S.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),a.profile&&(a.profile.credits=((u==null?void 0:u.credits)||0)+n);const s=document.getElementById("nav-credits");s&&(s.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),d(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),St(e,t,"waiting")}async function vi(e,t,i,n,d){const{toast:a}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await S.from("mini_league_matches").delete().eq("league_id",i),await S.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await S.from("mini_leagues").delete().eq("id",i);if(r){a("Erreur suppression ("+r.message+")","error");return}a("Mini League supprimée avec succès","success"),St(e,t,d)}async function Un(e,t,i){await S.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),St(e,t,"archived")}async function wt(e,t,i){var j,P,G,q,N,K,Z,re,le;const{state:n,toast:d}=t,a=n.profile.id,[{data:r},{data:l},{data:u}]=await Promise.all([S.from("mini_leagues").select("*").eq("id",i).single(),S.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),S.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){d("Introuvable","error"),await St(e,t);return}const s=(l||[]).some(te=>te.user_id===a),o=r.creator_id===a,x=(l||[]).map(te=>te.user).filter(Boolean),m=uo(x,u||[]),v=(u||[]).filter(te=>te.matchday===r.current_day),_=r.pot||0,g=r.entry_fee||100,c=v.length>0&&v.every(te=>te.status==="finished"||te.status==="bye"),T=r.current_day>=r.total_days,p=(l||[]).find(te=>te.user_id===a);e.innerHTML=`
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
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${x.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${g} cr./joueur → Pot estimé : ${(g*x.length).toLocaleString("fr")} cr. (🥇${Math.floor(g*x.length*.7).toLocaleString("fr")} · 🥈${Math.floor(g*x.length*.2).toLocaleString("fr")} · 🥉${Math.floor(g*x.length*.1).toLocaleString("fr")})</div>
        ${x.map(te=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${te.club_color2||It};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${te.club_color1||"#fff"}">${(te.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${te.club_name||te.pseudo}</div><div style="font-size:11px;color:#999">@${te.pseudo}</div></div>
            ${te.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${o&&x.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${g} cr. × ${x.length})</button>`:""}
        ${o?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${s?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${g} cr.)</button>`}
        ${s&&!o?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${g.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${v.map(te=>Pi(te,x,a,s)).join("")}
        ${o&&c&&!T?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${o&&c&&T?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
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
          <tbody>${m.map((te,U)=>{const D=_>0&&r.status==="finished"?U===0?Math.floor(_*.7):U===1?Math.floor(_*.2):U===2?Math.floor(_*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${te.userId===a?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${U===0?yt:U<3?It:"#555"}">${["🥇","🥈","🥉"][U]||U+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${te.clubName}</div><div style="font-size:10px;color:#999">@${te.pseudo}</div></td>
              <td style="text-align:center">${te.played}</td><td style="text-align:center">${te.won}-${te.drawn}-${te.lost}</td>
              <td style="text-align:center;color:${te.goalDiff>=0?It:"#cc2222"}">${te.goalDiff>=0?"+":""}${te.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${te.points}</td>
              ${_>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${yt}">${D?D.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(te,U)=>U+1).reverse().map(te=>{const U=(u||[]).filter(D=>D.matchday===te);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${te}</div>${U.map(D=>Pi(D,x,a,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${o&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const L=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((j=document.getElementById("ml-back"))==null||j.addEventListener("click",()=>St(e,t,L)),(P=document.getElementById("ml-start-btn"))==null||P.addEventListener("click",()=>Kn(e,t,r,x)),(G=document.getElementById("ml-next-day"))==null||G.addEventListener("click",()=>Vn(e,t,i)),(q=document.getElementById("ml-finish-btn"))==null||q.addEventListener("click",()=>po(e,t,i,_,m,x)),(N=document.getElementById("ml-join-now"))==null||N.addEventListener("click",()=>co(e,t,i,r.type)),(K=document.getElementById("ml-leave-btn"))==null||K.addEventListener("click",()=>Hn(e,t,i,g)),(Z=document.getElementById("ml-delete-btn"))==null||Z.addEventListener("click",()=>vi(e,t,i,r.name,"waiting")),(re=document.getElementById("ml-delete-now"))==null||re.addEventListener("click",()=>vi(e,t,i,r.name,L)),(le=document.getElementById("ml-archive-btn"))==null||le.addEventListener("click",()=>Un(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(te=>{te.addEventListener("click",()=>{const U=v.find(D=>D.id===te.dataset.playMatch);U&&t.navigate("match-mini-league",{mlMatchId:U.id,leagueId:i})})}),r.status==="finished"&&p){const te=m.findIndex(U=>U.userId===a);te>=0&&te<3&&p.prize_amount>0&&setTimeout(()=>Yn(e,t,r,p,te),400)}}function Pi(e,t,i,n,d=!1){const a=x=>t.find(m=>m.id===x);if(e.is_bye){const x=a(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(x==null?void 0:x.club_name)||(x==null?void 0:x.pseudo)||"?"} exempté(e)</div>`}const r=a(e.home_id),l=a(e.away_id),u=e.home_id===i||e.away_id===i,s=u&&e.status==="pending"&&n&&!d,o=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${u?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${u?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?It:"#999"}">${o}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(l==null?void 0:l.club_name)||(l==null?void 0:l.pseudo)||"?"}</div>
    ${s?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Kn(e,t,i,n){const{toast:d,state:a}=t,r=Wn(n.map(s=>s.id),i.mode),l=[];r.forEach((s,o)=>s.forEach(x=>l.push({league_id:i.id,matchday:o+1,home_id:x.home||x.bye,away_id:x.away||null,is_bye:!!x.bye,status:x.bye?"bye":"pending"})));const{error:u}=await S.from("mini_league_matches").insert(l);if(u){d("Erreur calendrier : "+u.message,"error");return}await S.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),d(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),wt(e,t,i.id)}async function Vn(e,t,i){const{data:n}=await S.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),d=(n.current_day||0)+1;if(d>(n.total_days||0)){await po(e,t,i,n.pot||0,null,null);return}await S.from("mini_leagues").update({current_day:d}).eq("id",i),t.toast(`Journée ${d} commencée !`,"success"),wt(e,t,i)}async function po(e,t,i,n,d,a){const{toast:r,state:l}=t;let u=d,s=a;if(!u){const{data:x}=await S.from("mini_league_matches").select("*").eq("league_id",i),{data:m}=await S.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);s=(m||[]).map(v=>v.user).filter(Boolean),u=uo(s,x||[])}const o=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(u.slice(0,3).map((x,m)=>o[m]?S.from("mini_league_members").update({prize_amount:o[m],prize_claimed:!1}).eq("league_id",i).eq("user_id",x.userId):Promise.resolve())),await S.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),wt(e,t,i)}async function Yn(e,t,i,n,d){var m,v;const{state:a,toast:r}=t,l=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],u=["🥇","🥈","🥉"][d],s=n.prize_amount||l[d]||0,o=n.prize_claimed,x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",x.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${u}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${d===0?"Champion !":d===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${yt};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${o?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${yt}">${s.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${d===0?"70%":d===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${o?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${yt};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${s.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(x),(m=x.querySelector("#prize-close"))==null||m.addEventListener("click",()=>x.remove()),x.addEventListener("click",_=>{_.target===x&&x.remove()}),(v=x.querySelector("#claim-prize-btn"))==null||v.addEventListener("click",async()=>{const{data:_}=await S.from("users").select("credits").eq("id",a.profile.id).single();await S.from("users").update({credits:((_==null?void 0:_.credits)||0)+s}).eq("id",a.profile.id),await S.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",a.profile.id),a.profile&&(a.profile.credits=((_==null?void 0:_.credits)||0)+s);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${a.profile.credits.toLocaleString("fr")}`),r(`💰 +${s.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),x.remove(),wt(e,t,i.id)})}function Wn(e,t){const n=e.length%2===0?[...e]:[...e,null],d=n.length;let a=n.slice(1);const r=[];for(let l=0;l<d-1;l++){const u=[],s=[n[0],...a];for(let o=0;o<d/2;o++){const x=s[o],m=s[d-1-o];x===null?u.push({bye:m}):m===null?u.push({bye:x}):u.push({home:x,away:m})}r.push(u),a=[a[a.length-1],...a.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(l=>l.map(u=>u.bye?u:{home:u.away,away:u.home}))]:r}function uo(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const d=i[n.home_id],a=i[n.away_id];!d||!a||(d.played++,a.played++,d.goalsFor+=n.home_score,d.goalsAgainst+=n.away_score,a.goalsFor+=n.away_score,a.goalsAgainst+=n.home_score,n.home_score>n.away_score?(d.won++,d.points+=3,a.lost++):n.home_score<n.away_score?(a.won++,a.points+=3,d.lost++):(d.drawn++,d.points++,a.drawn++,a.points++),d.goalDiff=d.goalsFor-d.goalsAgainst,a.goalDiff=a.goalsFor-a.goalsAgainst)}),Object.values(i).sort((n,d)=>d.points-n.points||d.goalDiff-n.goalDiff||d.goalsFor-n.goalsFor)}async function Ni(e,t,i,n){var d,a;t.state.params={...t.state.params,matchMode:"mini-league",mlMatchId:i,leagueId:n};try{const r=(a=(d=t==null?void 0:t.state)==null?void 0:d.profile)==null?void 0:a.id;try{(S.getChannels?S.getChannels():[]).forEach(u=>{const s=u.topic||"";(s.includes("matchmaking")||s.includes("pvp-match"))&&S.removeChannel(u)})}catch(l){console.warn("[FriendMatch] cleanup canaux:",l)}r&&(await S.rpc("cancel_matchmaking",{p_user_id:r}).catch(()=>{}),await S.from("matchmaking_queue").delete().eq("user_id",r).then(()=>{},()=>{}))}catch{}await ri(e,t,"random",({deckId:r,formation:l,starters:u,subsRaw:s,gcCardsEnriched:o,gcDefs:x,stadiumDef:m})=>{const v=_=>Jn(e,t,r,l,u,s,_,x||[],i);if(!o.length){v([]);return}ni(e,o,v)})}async function Jn(e,t,i,n,d,a,r=[],l=[],u,s){const{state:o,navigate:x,toast:m}=t,v=o.profile.id;let _=!1,g=null;et(e);try{await S.rpc("cancel_matchmaking",{p_user_id:v})}catch{}try{await S.from("matchmaking_queue").delete().eq("user_id",v)}catch{}const{data:c}=await S.from("mini_league_matches").select("*, home:users!home_id(id,pseudo,club_name), away:users!away_id(id,pseudo,club_name)").eq("id",u).single();if(!c){m("Match introuvable","error"),Ve(e),x("mini-league");return}if(c.home_id!==v&&c.away_id!==v){m("Tu ne fais pas partie de ce match","error"),Ve(e),x("mini-league");return}const T=c.home_id===v,p=T?c.away:c.home,L=T?c.away_id:c.home_id,j=(G,q)=>{var N;e.innerHTML=`
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
            <div style="font-size:12px;font-weight:700">${(p==null?void 0:p.club_name)||(p==null?void 0:p.pseudo)||"?"}</div>
            <div style="font-size:11px;color:#aaa">En attente</div>
          </div>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.5);animation:lobbyPulse 1.5s ease-in-out infinite">
          En attente des 2 joueurs...
        </div>
        <button id="lobby-cancel" style="padding:10px 24px;border-radius:10px;border:1.5px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.6);font-size:13px;cursor:pointer">Annuler</button>
        <style>@keyframes lobbyPulse{0%,100%{opacity:1}50%{opacity:0.4}}</style>
      </div>`,(N=document.getElementById("lobby-cancel"))==null||N.addEventListener("click",()=>{_=!0,clearInterval(g),Ve(e),x("mini-league")})},P=async(G,q)=>{_=!0,clearInterval(g),await new Promise(N=>setTimeout(N,600)),e.isConnected&&Xn(e,t,G,q,r,l)};if(j(),T){let G=c.match_id;if(!G){const{data:N,error:K}=await S.from("matches").insert({home_id:v,away_id:L,home_deck_id:i,away_deck_id:null,status:"active",mode:"mini_league"}).select().single();if(K||!N){m("Erreur création match","error"),Ve(e),x("mini-league");return}G=N.id,await S.from("mini_league_matches").update({match_id:G,status:"playing"}).eq("id",u)}const q=G;g=setInterval(async()=>{if(_){clearInterval(g);return}const{data:N}=await S.from("matches").select("away_deck_id").eq("id",q).single();N!=null&&N.away_deck_id&&(clearInterval(g),P(q,!0))},1500)}else{let G=c.match_id;g=setInterval(async()=>{if(_){clearInterval(g);return}const{data:q}=await S.from("mini_league_matches").select("match_id").eq("id",u).single();q!=null&&q.match_id&&(clearInterval(g),G=q.match_id,await S.from("matches").update({away_deck_id:i}).eq("id",G),P(G,!1))},1500)}}async function Xn(e,t,i,n,d=[],a=[]){var $;const{state:r,navigate:l,toast:u}=t,s=(($=r.params)==null?void 0:$.leagueId)||null,o=n?"p1":"p2",x=n?"p2":"p1",m=(d||[]).map(f=>f.id),v=(d||[]).map(f=>({id:f.id,gc_type:f.gc_type,_gcDef:f._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:_}=await S.from("matches").select("*").eq("id",i).single();if(!_){u("Match introuvable","error"),l("mini-league");return}async function g(){const[{data:f},{data:b},{data:y},{data:h}]=await Promise.all([S.rpc("get_deck_for_match",{p_deck_id:_.home_deck_id}),S.rpc("get_deck_for_match",{p_deck_id:_.away_deck_id}),S.from("users").select("id,pseudo,club_name").eq("id",_.home_id).single(),S.from("users").select("id,pseudo,club_name").eq("id",_.away_id).single()]),w=A=>{const M=Number(A.evolution_bonus)||0;return{cardId:A.card_id,position:A.position,id:A.id,firstname:A.firstname,name:A.surname_real,country_code:A.country_code,club_id:A.club_id,job:A.job,job2:A.job2,note_g:(Number(A.note_g)||0)+(A.job==="GK"||A.job2==="GK"&&Number(A.note_g)>0?M:0),note_d:(Number(A.note_d)||0)+(A.job==="DEF"||A.job2==="DEF"&&Number(A.note_d)>0?M:0),note_m:(Number(A.note_m)||0)+(A.job==="MIL"||A.job2==="MIL"&&Number(A.note_m)>0?M:0),note_a:(Number(A.note_a)||0)+(A.job==="ATT"||A.job2==="ATT"&&Number(A.note_a)>0?M:0),evolution_bonus:M,rarity:A.rarity,skin:A.skin,hair:A.hair,hair_length:A.hair_length,face:A.face||null,clubName:A.club_encoded_name||null,clubLogo:A.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},k=((f==null?void 0:f.starters)||[]).map(A=>w(A)),z=((b==null?void 0:b.starters)||[]).map(A=>w(A)),E=(f==null?void 0:f.formation)||"4-4-2",I=(b==null?void 0:b.formation)||"4-4-2";return{p1Team:(()=>{const A=ht(k,E);return stadiumDef?Tt(A,stadiumDef):A})(),p2Team:ht(z,I),p1Subs:(()=>{const A=((f==null?void 0:f.subs)||[]).map(M=>w(M));return stadiumDef&&jt(A,stadiumDef),A})(),p2Subs:((b==null?void 0:b.subs)||[]).map(A=>w(A)),p1Formation:E,p2Formation:I,p1Name:(y==null?void 0:y.club_name)||(y==null?void 0:y.pseudo)||"Joueur 1",p2Name:(h==null?void 0:h.club_name)||(h==null?void 0:h.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?m:[],gc_p2:n?[]:m,gcCardsFull_p1:n?v:[],gcCardsFull_p2:n?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:a||[],lastActionAt:new Date().toISOString()}}let c=_.game_state&&Object.keys(_.game_state).length?_.game_state:null;if(!c)if(n){c=await g();const{data:f}=await S.from("matches").select("game_state").eq("id",i).single();!(f!=null&&f.game_state)||!Object.keys(f.game_state).length?await S.from("matches").update({game_state:c,turn_user_id:_.home_id}).eq("id",i):c=f.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>';for(let f=0;f<60&&!c;f++){await new Promise(y=>setTimeout(y,400));const{data:b}=await S.from("matches").select("game_state").eq("id",i).single();b!=null&&b.game_state&&Object.keys(b.game_state).length&&(c=b.game_state)}if(!c){u("Erreur de synchronisation","error"),l("mini-league");return}c.gc_p2=m,c.gcCardsFull_p2=v,await S.from("matches").update({game_state:c}).eq("id",i)}let T=!1,p=!1,L=!1,j=null,P=!1;const G=new Set,q=new Set;function N(f){var A,M;try{S.removeChannel(K)}catch{}const b=c[o+"Score"]||0,y=c[x+"Score"]||0;if(!L){L=!0;const B=f.winner_id||(b>y?r.profile.id:y>b?"opp":null),V=B===r.profile.id?"win":B?"loss":null;V&&ii(()=>Promise.resolve().then(()=>Zi),void 0).then(W=>W.applyOwnEvolution(r.profile.id,V)).catch(()=>{})}if(!p){const B=c.p1Score||0,V=c.p2Score||0,W=(c.usedGc_p1||[]).length,O=(c.usedGc_p2||[]).length,F=f.winner_id||(B>V?_.home_id:V>B?_.away_id:null);(F?r.profile.id===F:r.profile.id<(n?_.away_id:_.home_id))&&(p=!0,Ki({player1Id:_.home_id,player2Id:_.away_id,score1:B,score2:V,gc1:W,gc2:O}).catch(ie=>console.warn("[FriendMatch] updateStats:",ie)))}let h,w;f.winner_id?(h=f.winner_id===r.profile.id,w=!1):f.forfeit?(h=b>y,w=!1):(w=b===y,h=b>y),(A=document.getElementById("pvp-end-overlay"))==null||A.remove();const k=document.createElement("div");k.id="pvp-end-overlay",k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:#fff;padding:24px;text-align:center";const z=w?"🤝":h?"🏆":"😞",E=w?"MATCH NUL":h?"VICTOIRE !":"DÉFAITE",I=w?"#fff":h?"#FFD700":"#ff6b6b";k.innerHTML=`
      <div style="font-size:64px">${z}</div>
      <div style="font-size:26px;font-weight:900;color:${I}">${E}</div>
      <div style="font-size:18px">${c[o+"Name"]} ${b} – ${y} ${c[x+"Name"]}</div>
      ${f.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${h?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      <button id="pvp-end-home" style="margin-top:10px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>`,document.body.appendChild(k),(M=k.querySelector("#pvp-end-home"))==null||M.addEventListener("click",()=>{k.remove(),Ve(e),s?l("mini-league",{openLeagueId:s}):l("mini-league")})}const K=S.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},f=>{const b=f.new;try{if(b.status==="finished"||b.forfeit){if(T||(T=!0,j&&(clearInterval(j),j=null),b.game_state&&(c=b.game_state),c.phase==="finished"&&!b.forfeit&&document.getElementById("pvp-home")))return;N(b);return}if(b.game_state){const y=c;c=b.game_state;const h=c._lastGC;if(h&&h.seq&&!q.has(h.seq)&&(q.add(h.seq),h.by!==o)){fe(h.type,h.by,()=>xe());return}const w=y[o+"Score"]||0,k=y[x+"Score"]||0,z=c[o+"Score"]||0,E=c[x+"Score"]||0,I=z>w,A=E>k;if((I||A)&&!G.has(c.round)){G.add(c.round);const M=[...c.log||[]].reverse().find(V=>V.isGoal),B=((M==null?void 0:M.homePlayers)||[]).map(V=>({name:V.name,note:V.note,portrait:V.portrait,job:V.job}));Ce(B,z,E,I,()=>xe());return}xe()}}catch(y){console.error("[PvP] crash:",y)}}).subscribe();async function Z(f){Object.assign(c,f),c.lastActionAt=new Date().toISOString();const{error:b}=await S.from("matches").update({game_state:c}).eq("id",i);b&&u("Erreur de synchronisation","error");try{xe()}catch(y){console.error("[PvP] renderPvpScreen crash:",y)}}async function re(){if(T)return;T=!0,j&&(clearInterval(j),j=null);const f=n?_.away_id:_.home_id,b=n?"p2":"p1",y=n?"p1":"p2",h={...c,[b+"Score"]:3,[y+"Score"]:0,phase:"finished"};try{await S.from("matches").update({status:"finished",forfeit:!0,winner_id:f,home_score:h.p1Score||0,away_score:h.p2Score||0,game_state:h}).eq("id",i)}catch{}try{S.removeChannel(K)}catch{}setTimeout(()=>{Ve(e),l("mini-league")},800)}const le={BOOST_STAT:({value:f=1,count:b=1,roles:y=[]},h,w)=>{const k=h[o+"Team"],z=Object.entries(k).filter(([E])=>!y.length||y.includes(E)).flatMap(([E,I])=>I.filter(A=>!A.used).map(A=>({...A,_line:E})));if(!z.length){h.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),w(h);return}te(z,b,`Choisir ${b} joueur(s) à booster (+${f})`,E=>{E.forEach(I=>{const A=(k[I._line]||[]).find(M=>M.cardId===I.cardId);A&&(A.boost=(A.boost||0)+f,h.log.push({text:`⚡ +${f} sur ${A.name}`,type:"info"}))}),h[o+"Team"]=k,w(h)})},DEBUFF_STAT:({value:f=1,count:b=1,roles:y=[],target:h="ai"},w,k)=>{const z=h==="home"?o:x,E=w[z+"Team"],I=h==="home"?"allié":"adverse",A=Object.entries(E).filter(([M])=>!y.length||y.includes(M)).flatMap(([M,B])=>B.map(V=>({...V,_line:M})));if(!A.length){w.log.push({text:`🎯 Aucun joueur ${I}`,type:"info"}),k(w);return}te(A,b,`Choisir ${b} joueur(s) ${I}(s) (-${f})`,M=>{M.forEach(B=>{const V=(E[B._line]||[]).find(W=>W.cardId===B.cardId);V&&(V.boost=(V.boost||0)-f,w.log.push({text:`🎯 -${f} sur ${V.name}`,type:"info"}))}),w[z+"Team"]=E,k(w)})},GRAY_PLAYER:({count:f=1,roles:b=[],target:y="ai"},h,w)=>{const k=y==="home"?o:x,z=h[k+"Team"],E=y==="home"?"allié":"adverse",I=Object.entries(z).filter(([A])=>!b.length||b.includes(A)).flatMap(([A,M])=>M.filter(B=>!B.used).map(B=>({...B,_line:A})));if(!I.length){h.log.push({text:`❌ Aucun joueur ${E}`,type:"info"}),w(h);return}te(I,f,`Choisir ${f} joueur(s) ${E}(s) à exclure`,A=>{const M="usedCardIds_"+k,B=new Set(h[M]||[]);A.forEach(V=>{const W=(z[V._line]||[]).find(O=>O.cardId===V.cardId);W&&(W.used=!0,B.add(V.cardId),h.log.push({text:`❌ ${W.name} exclu !`,type:"info"}))}),h[M]=[...B],h[k+"Team"]=z,w(h)})},REVIVE_PLAYER:({count:f=1,roles:b=[]},y,h)=>{const w=y[o+"Team"],k=Object.entries(w).filter(([z])=>!b.length||b.includes(z)).flatMap(([z,E])=>E.filter(I=>I.used).map(I=>({...I,_line:z})));if(!k.length){y.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),h(y);return}te(k,f,`Choisir ${f} joueur(s) à ressusciter`,z=>{z.forEach(E=>{const I=(w[E._line]||[]).find(A=>A.cardId===E.cardId);I&&(I.used=!1,y.log.push({text:`💫 ${I.name} ressuscité !`,type:"info"}))}),y[o+"Team"]=w,h(y)})},REMOVE_GOAL:({},f,b)=>{const y=x+"Score";f[y]>0?(f[y]--,f.log.push({text:"🚫 Dernier but annulé !",type:"info"})):f.log.push({text:"🚫 Aucun but à annuler",type:"info"}),b(f)},ADD_GOAL_DRAW:({},f,b)=>{f[o+"Score"]===f[x+"Score"]?(f[o+"Score"]++,f.log.push({text:"🎯 But bonus !",type:"info"})):f.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),b(f)},ADD_SUB:({value:f=1},b,y)=>{b.maxSubs=(b.maxSubs||3)+f,b.log.push({text:`🔄 +${f} remplacement(s)`,type:"info"}),y(b)},CUSTOM:({},f,b)=>b(f)};function te(f,b,y,h){const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let k=[];function z(){var I,A;const E=f.map(M=>{const B={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[M._line]||"#555",V=ze(M,M._line)+(M.boost||0),O=k.find(Y=>Y.cardId===M.cardId)?"#FFD700":"rgba(255,255,255,0.25)",F=M.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${M.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${O};background:${B};overflow:hidden;cursor:pointer;${F}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${M.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${V}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${M._line}</div>
        </div>`}).join("");w.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${y}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${k.length}/${b}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${E}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${k.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${k.length}/${b})
          </button>
        </div>`,(I=w.querySelector("#pp-close"))==null||I.addEventListener("click",()=>w.remove()),w.querySelectorAll(".pp-item").forEach(M=>{M.addEventListener("click",()=>{const B=M.dataset.cid,V=f.find(O=>O.cardId===B),W=k.findIndex(O=>O.cardId===B);V&&(W>-1?k.splice(W,1):k.length<b&&k.push(V),z())})}),(A=w.querySelector("#pp-confirm"))==null||A.addEventListener("click",()=>{w.remove(),h(k)})}z(),document.body.appendChild(w)}async function U(f,b){const h=(c["gcCardsFull_"+o]||[]).find(E=>E.id===f),w=(h==null?void 0:h._gcDef)||(c.gcDefs||[]).find(E=>{var I;return E.name===b||((I=E.name)==null?void 0:I.toLowerCase().trim())===(b==null?void 0:b.toLowerCase().trim())}),k=[...c["usedGc_"+o]||[],f],z={type:b,by:o,seq:(c._gcAnimSeq||0)+1};q.add(z.seq),fe(b,o,async()=>{if(w!=null&&w.effect_type&&w.effect_type!=="CUSTOM"){const I=le[w.effect_type];if(I){const A={...c};I(w.effect_params||{},A,async M=>{M["usedGc_"+o]=k,M._lastGC=z,M._gcAnimSeq=z.seq,await Z(M)});return}}const E={...c};switch(b){case"Remplacement+":E.maxSubs=(E.maxSubs||3)+1,E.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const I=x+"Score";E[I]>0&&(E[I]--,E.log.push({text:"🚫 But annulé",type:"info"}));break}}E["usedGc_"+o]=k,E._lastGC=z,E._gcAnimSeq=z.seq,await Z(E)})}function D(f,b){const y="usedCardIds_"+f,h=new Set(c[y]||[]);b.forEach(w=>h.add(w)),c[y]=[...h]}function oe(){for(const f of["p1","p2"]){const b=new Set(c["usedCardIds_"+f]||[]),y=c[f+"Team"];if(y)for(const h of["GK","DEF","MIL","ATT"])(y[h]||[]).forEach(w=>{w.used=b.has(w.cardId)})}}function xe(){var ot,ut,ft,gt,ce,J;if(c.phase==="reveal")return _e();if(c.phase==="midfield")return we();if(c.phase==="finished")return C();const f=c[o+"Team"],b=c[x+"Team"];oe();const y=c[o+"Score"],h=c[x+"Score"],w=c[o+"Name"],k=c[x+"Name"],z=c.phase===o+"-attack",E=c.phase===o+"-defense",I=Array.isArray(c["selected_"+o])?c["selected_"+o]:[],A=I.map(R=>R.cardId),M=window.innerWidth>=700,B=c[o+"Subs"]||[],V=c["usedSubIds_"+o]||[],W=B.filter(R=>!V.includes(R.cardId)),O=c["gcCardsFull_"+o]||[],F=c["usedGc_"+o]||[],Y=O.filter(R=>!F.includes(R.id)),ie=c.boostOwner===o&&!c.boostUsed,X=!["GK","DEF","MIL","ATT"].some(R=>(b[R]||[]).some(ne=>!ne.used)),ue=[...f.MIL||[],...f.ATT||[]].filter(R=>!R.used),be=z&&X&&ue.length===0?[...f.GK||[],...f.DEF||[]].filter(R=>!R.used).map(R=>R.cardId):[];function ye(R,ne,ve){var Ct,zi;const $e=R._gcDef,Qe={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[$e==null?void 0:$e.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",Ze={purple:"#b06ce0",light_blue:"#00d4ef"}[$e==null?void 0:$e.color]||"#b06ce0",tt=($e==null?void 0:$e.name)||R.gc_type,at=($e==null?void 0:$e.effect)||((Ct=Oe[R.gc_type])==null?void 0:Ct.desc)||"",_t=$e!=null&&$e.image_url?`/icons/${$e.image_url}`:null,$t=((zi=Oe[R.gc_type])==null?void 0:zi.icon)||"⚡",lt=Math.round(ve*.22),mt=Math.round(ve*.22),xt=ve-lt-mt,kt=tt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${R.id}" data-gc-type="${R.gc_type}"
        style="box-sizing:border-box;width:${ne}px;height:${ve}px;border-radius:10px;border:2px solid ${Ze};background:${Qe};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${lt}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${kt}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ne-6}px">${tt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${xt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${_t?`<img src="${_t}" style="max-width:${ne-10}px;max-height:${xt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(xt*.55)}px">${$t}</span>`}
        </div>
        <div style="height:${mt}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${at.slice(0,38)}</span>
        </div>
      </div>`}function Ee(R,ne){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${R}px;height:${ne}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ne*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ne*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ne*.09)}px;color:#000;font-weight:900">+${c.boostValue}</div>
      </div>`}const Be=(R,ne)=>ne?Ee(130,175):ye(R,130,175),De=(R,ne)=>ne?Ee(68,95):ye(R,68,95),Me=M?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",je=z?ke(o)?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${I.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Me};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:E?`<button id="pvp-action" style="${Me};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${I.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${k}</div>`,Ie=z&&!ke(o)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':z||E?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${I.length}/3 sélectionné(s)</div>`:"",Ne=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${M?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${W.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':W.map(R=>`<div class="pvp-sub-btn" data-sub-id="${R.cardId}" style="cursor:pointer;flex-shrink:0">${Xe(R,M?76:44,M?100:58)}</div>`).join("")}
    </div>`,He=z?"attack":E?"defense":"idle",Ye=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${pt(f,c[o+"Formation"],He,A,300,300,be)}
      </div>
    </div>`;function Ke(R){if(R.type==="duel"&&(R.homeTotal!=null||R.aiTotal!=null)){const ne=(R.homeTotal||0)>=(R.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(R.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(R.homePlayers||[]).map(ve=>st(ve)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${ne?20:14}px;font-weight:900;color:${ne?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${R.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${ne?14:20}px;font-weight:900;color:${ne?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${R.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(R.aiPlayers||[]).map(ve=>st(ve)).join("")}
            </div>
          </div>
          ${R.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${R.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${R.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${R.type==="goal"?700:400};padding:3px 2px">${R.text||""}</div>`}const Re=(()=>{var ne,ve;if(E&&((ne=c.pendingAttack)!=null&&ne.players)){const $e=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${k} ATTAQUE — Défendez !</div>
          ${it(($e.players||[]).map(Qe=>({...Qe,used:!1})),"#ff6b6b",$e.total)}
        </div>`}if(z&&((ve=c.pendingAttack)!=null&&ve.players)){const $e=c.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${it(($e.players||[]).map(Qe=>({...Qe,used:!1})),"#00ff88",$e.total)}
        </div>`}const R=(c.log||[]).slice(-1)[0];return R?'<div style="padding:2px 4px">'+Ke(R)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Pe=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${w}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${y} – ${h}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${k}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Re}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(c.log||[]).length})
      </button>`;et(e),e.style.overflow="hidden",M?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Pe}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Ne}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ye}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${je}${Ie}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${Y.map(R=>Be(R,!1)).join("")}
            ${ie?Be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Pe}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${pt(f,c[o+"Formation"],He,A,300,300,be)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${Y.map(R=>De(R,!1)).join("")}
            ${ie?De(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${z&&W.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${z&&W.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${z&&W.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${z&&W.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${W.length}</div>
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
          <div>${je}${Ie}</div>
        </div>
      </div>`;function We(){const R=e.querySelector(".match-screen");if(!R)return;const ne=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);R.style.height=ne+"px",R.style.minHeight=ne+"px",R.style.maxHeight=ne+"px",R.style.overflow="hidden";const ve=e.querySelector("#mobile-action-bar"),$e=e.querySelector("#mobile-play-area");ve&&$e&&($e.style.paddingBottom=ve.offsetHeight+"px")}if(We(),setTimeout(We,120),setTimeout(We,400),P||(P=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",We),window.visualViewport.addEventListener("scroll",We)),window.addEventListener("resize",We)),function(){const ne=e.querySelector(".terrain-wrapper svg");ne&&(ne.removeAttribute("width"),ne.removeAttribute("height"),ne.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ne.setAttribute("viewBox","-26 -26 352 352"),ne.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(R=>{R.addEventListener("click",()=>{if(!z&&!E)return;const ne=R.dataset.cardId,ve=R.dataset.role,$e=(f[ve]||[]).find(at=>at.cardId===ne);if(!$e||$e.used)return;const Qe=be.includes(ne);if(z&&!["MIL","ATT"].includes(ve)&&!Qe)return;Array.isArray(c["selected_"+o])||(c["selected_"+o]=[]);const Ze=c["selected_"+o],tt=Ze.findIndex(at=>at.cardId===ne);tt>-1?Ze.splice(tt,1):Ze.length<3&&Ze.push({...$e,_role:ve}),xe()})}),e.querySelectorAll(".match-used-hit").forEach(R=>{R.addEventListener("click",()=>H(R.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(R=>{R.addEventListener("click",()=>H())}),(ot=e.querySelector("#pvp-sub-open"))==null||ot.addEventListener("click",()=>H()),e.querySelectorAll(".pvp-gc-mini").forEach(R=>{R.addEventListener("click",()=>me(R.dataset.gcId,R.dataset.gcType))}),(ut=e.querySelector("#pvp-boost-card"))==null||ut.addEventListener("click",()=>ge()),(ft=e.querySelector("#pvp-action"))==null||ft.addEventListener("click",R=>{z?R.currentTarget.dataset.pass==="1"||!ke(o)?pe():ee():E&&de()}),(gt=e.querySelector("#pvp-quit"))==null||gt.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&re()}),(ce=e.querySelector("#pvp-view-opp"))==null||ce.addEventListener("click",()=>ae()),(J=e.querySelector("#pvp-toggle-history"))==null||J.addEventListener("click",()=>se()),j&&(clearInterval(j),j=null),(z||E)&&!T){let R=30,ne=!1;const ve=()=>document.getElementById("pvp-timer"),$e=()=>{ve()&&(ve().textContent=R+"s",ve().style.color=ne?"#ff4444":"#fff")};$e(),j=setInterval(()=>{R--,R<0?ne?(clearInterval(j),j=null,z&&!ke(o)?pe():re()):(ne=!0,R=15,$e()):$e()},1e3)}}function _e(){et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${c[x+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${ct(c[x+"Team"],c[x+"Formation"],null,[],300,300)}</div>
    </div>`,o==="p1"&&setTimeout(async()=>{await Z({phase:"midfield"})},5e3)}let he=!1;function we(){if(he)return;const f=c[o+"Team"].MIL||[],b=c[x+"Team"].MIL||[];function y(Y){return Y.reduce((ie,X)=>ie+ze(X,"MIL"),0)}function h(Y){let ie=0;for(let X=0;X<Y.length-1;X++){const ue=rt(Y[X],Y[X+1]);ue==="#00ff88"?ie+=2:ue==="#FFD700"&&(ie+=1)}return ie}const w=y(f)+h(f),k=y(b)+h(b),z=w>=k;function E(Y,ie,X){return`<div id="duel-row-${X}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ie}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${Y.map((ue,be)=>{const ye=be<Y.length-1?rt(ue,Y[be+1]):null,Ee=!ye||ye==="#ff3333"||ye==="#cc2222",Be=ye==="#00ff88"?"+2":ye==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${X}" data-idx="${be}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Xe({...ue,note:ze(ue,"MIL"),_line:"MIL"},58,78)}
            </div>
            ${be<Y.length-1?`<div class="duel-link duel-link-${X}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Ee?"rgba(255,255,255,0.12)":ye};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Ee?"none":`0 0 8px ${ye}`}">
              ${Be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ye}">${Be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${X}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${y(Y)} + ${h(Y)} liens = <b style="color:#fff">${y(Y)+h(Y)}</b>
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
      ${E(f,c[o+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${E(b,c[x+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const I=(Y,ie)=>e.querySelectorAll(Y).forEach((X,ue)=>{setTimeout(()=>{X.style.opacity="1",X.style.transform="translateY(0) scale(1)"},ie+ue*90)});I(".duel-card-me",150),I(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((Y,ie)=>setTimeout(()=>{Y.style.opacity="1"},ie*70)),900),setTimeout(()=>{const Y=e.querySelector("#pvp-vs");Y&&(Y.style.opacity="1",Y.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ie=>ie.style.opacity="1")},1250);function A(Y,ie,X){const ue=document.getElementById(Y);if(!ue)return;const be=performance.now(),ye=Ee=>{const Be=Math.min(1,(Ee-be)/X);ue.textContent=Math.round(ie*(1-Math.pow(1-Be,3))),Be<1?requestAnimationFrame(ye):ue.textContent=ie};requestAnimationFrame(ye)}setTimeout(()=>{A("pvp-score-me",w,800),A("pvp-score-opp",k,800)},1500);const M=c.p1Team.MIL||[],B=c.p2Team.MIL||[],V=y(M)+h(M),W=y(B)+h(B),O=V>=W?"p1":"p2";let F=c.boostValue;F==null&&(F=oi(),c.boostValue=F,c.boostOwner=O,c.boostUsed=!1),he=!0,setTimeout(()=>{const Y=e.querySelector("#duel-row-"+(z?"me":"opp")),ie=e.querySelector("#duel-row-"+(z?"opp":"me")),X=document.getElementById("pvp-score-me"),ue=document.getElementById("pvp-score-opp"),be=z?X:ue,ye=z?ue:X;be&&(be.style.fontSize="80px",be.style.color=z?"#FFD700":"#ff6b6b",be.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),ye&&(ye.style.opacity="0.25"),setTimeout(()=>{Y&&(Y.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",Y.style.zIndex="5"),setTimeout(()=>{const Ee=document.getElementById("duel-shock");Ee&&(Ee.style.animation="shockwave .5s ease-out forwards"),ie&&(ie.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Me;const Ee=document.getElementById("pvp-duel-finale");if(!Ee)return;const Be=c.boostOwner===o?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+F+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",De=o==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Ee.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+c[o+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+c[x+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Be+De,Ee.style.transition="opacity .45s ease",Ee.style.opacity="1",Ee.style.pointerEvents="auto",(Me=document.getElementById("pvp-start-match"))==null||Me.addEventListener("click",async()=>{const je=O;await Z({phase:je+"-attack",attacker:je,round:1,boostValue:F,boostUsed:!1,boostOwner:je})})},600)},700)},2800)}function Ce(f,b,y,h,w){const k=document.createElement("div");k.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const z=Array.from({length:10},(M,B)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${B%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][B%8]}</div>`).join(""),E={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};k.innerHTML=`
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
        ${b} – ${y}
      </div>
      ${f!=null&&f.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${f.map(M=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${E[M.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${M.portrait?`<img src="${M.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(M.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(k);let I=!1;const A=()=>{I||(I=!0,k.remove(),setTimeout(()=>w(),50))};k.addEventListener("click",A),setTimeout(A,3500)}function fe(f,b,y){var F,Y;const h=(c.gcDefs||[]).find(ie=>{var X;return ie.name===f||((X=ie.name)==null?void 0:X.toLowerCase().trim())===(f==null?void 0:f.toLowerCase().trim())}),w={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[h==null?void 0:h.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",k={purple:"#b06ce0",light_blue:"#00d4ef"}[h==null?void 0:h.color]||"#b06ce0",z=(h==null?void 0:h.name)||f,E=(h==null?void 0:h.effect)||((F=Oe[f])==null?void 0:F.desc)||"",I=h!=null&&h.image_url?`/icons/${h.image_url}`:null,A=((Y=Oe[f])==null?void 0:Y.icon)||"⚡",B=b===o?"Vous":c[b+"Name"]||"Adversaire",V=document.createElement("div");V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",V.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${k}66}50%{box-shadow:0 0 60px ${k}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${k};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${B} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${k};background:${w};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
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
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(V);let W=!1;const O=()=>{W||(W=!0,V.remove(),setTimeout(()=>y&&y(),50))};V.addEventListener("click",O),setTimeout(O,3e3)}function me(f,b){var V,W,O,F;const h=(c["gcCardsFull_"+o]||[]).find(Y=>Y.id===f),w=h==null?void 0:h._gcDef,k={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[w==null?void 0:w.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",z={purple:"#b06ce0",light_blue:"#00d4ef"}[w==null?void 0:w.color]||"#b06ce0",E=(w==null?void 0:w.name)||b,I=(w==null?void 0:w.effect)||((V=Oe[b])==null?void 0:V.desc)||"Carte spéciale.",A=w!=null&&w.image_url?`/icons/${w.image_url}`:null,M=((W=Oe[b])==null?void 0:W.icon)||"⚡",B=document.createElement("div");B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",B.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${z};background:${k};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${z}66">
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
      </div>`,document.body.appendChild(B),(O=B.querySelector("#pvp-gc-back"))==null||O.addEventListener("click",()=>B.remove()),(F=B.querySelector("#pvp-gc-use"))==null||F.addEventListener("click",()=>{B.remove(),U(f,b)})}function ge(){var h;const f=c[o+"Team"],b=Object.entries(f).flatMap(([w,k])=>(k||[]).filter(z=>!z.used).map(z=>({...z,_line:w})));if(!b.length)return;const y=document.createElement("div");y.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",y.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${c.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${b.map(w=>{const k={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[w._line]||"#555",z=ze(w,w._line)+(w.boost||0);return`<div class="bp-item" data-cid="${w.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${k};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${w.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${z}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(y),(h=y.querySelector("#bp-close"))==null||h.addEventListener("click",()=>y.remove()),y.querySelectorAll(".bp-item").forEach(w=>{w.addEventListener("click",async()=>{const k=w.dataset.cid,z=b.find(I=>I.cardId===k);if(!z)return;const E=(f[z._line]||[]).find(I=>I.cardId===k);E&&(E.boost=(E.boost||0)+c.boostValue),y.remove(),await Z({[o+"Team"]:f,boostUsed:!0})})})}function H(f=null){var W,O;if(!(c.phase===o+"-attack")){u("Remplacement uniquement avant votre attaque","warning");return}const y=c[o+"Team"],h=c["usedSubIds_"+o]||[],w=c.maxSubs||3;if(h.length>=w){u(`Maximum ${w} remplacements atteint`,"warning");return}const k=Object.entries(y).flatMap(([F,Y])=>(Y||[]).filter(ie=>ie.used).map(ie=>({...ie,_line:F}))),z=(c[o+"Subs"]||[]).filter(F=>!h.includes(F.cardId));if(!k.length){u("Aucun joueur utilisé à remplacer","warning");return}if(!z.length){u("Aucun remplaçant disponible","warning");return}let E=Math.max(0,k.findIndex(F=>F.cardId===f));const I=((W=k[E])==null?void 0:W._line)||((O=k[E])==null?void 0:O.job);let A=Math.max(0,z.findIndex(F=>F.job===I)),M=!1;const B=document.createElement("div");B.id="pvp-sub-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function V(){var ye,Ee,Be,De,Me,je;const F=k[E],Y=z[A],ie=Math.min(130,Math.round((window.innerWidth-90)/2)),X=Math.round(ie*1.35),ue=Ie=>`background:rgba(255,255,255,0.12);border:none;color:${Ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${Ie?"default":"pointer"};flex-shrink:0`;B.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${h.length}/${w})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ue(A===0)}" ${A===0?"disabled":""}>▲</button>
          <div>${Y?Xe({...Y,used:!1,boost:0},ie,X):"<div>—</div>"}</div>
          <button id="pin-down" style="${ue(A>=z.length-1)}" ${A>=z.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${A+1}/${z.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ue(E===0)}" ${E===0?"disabled":""}>▲</button>
          <div>${F?Xe({...F,used:!1,boost:0},ie,X):"<div>—</div>"}</div>
          <button id="pout-down" style="${ue(E>=k.length-1)}" ${E>=k.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${E+1}/${k.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ye=B.querySelector("#psub-close"))==null||ye.addEventListener("click",()=>B.remove()),(Ee=B.querySelector("#pout-up"))==null||Ee.addEventListener("click",()=>{E>0&&(E--,V())}),(Be=B.querySelector("#pout-down"))==null||Be.addEventListener("click",()=>{E<k.length-1&&(E++,V())}),(De=B.querySelector("#pin-up"))==null||De.addEventListener("click",()=>{A>0&&(A--,V())}),(Me=B.querySelector("#pin-down"))==null||Me.addEventListener("click",()=>{A<z.length-1&&(A++,V())});const be=(Ie,Ne,He,Ye)=>{const Ke=B.querySelector("#"+Ie);if(!Ke)return;let Re=0;Ke.addEventListener("touchstart",Pe=>{Re=Pe.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",Pe=>{const We=Pe.changedTouches[0].clientY-Re;if(Math.abs(We)<30)return;const ot=Ne();We<0&&ot<Ye-1?(He(ot+1),V()):We>0&&ot>0&&(He(ot-1),V())},{passive:!0})};be("pin-panel",()=>A,Ie=>A=Ie,z.length),be("pout-panel",()=>E,Ie=>E=Ie,k.length),(je=B.querySelector("#psub-confirm"))==null||je.addEventListener("click",async Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),M)return;M=!0;const Ne=k[E],He=z[A];if(!Ne||!He)return;const Ye=Ne._line,Ke=(y[Ye]||[]).findIndex(We=>We.cardId===Ne.cardId);if(Ke===-1){u("Erreur : joueur introuvable","error"),B.remove();return}const Re={...He,_line:Ye,position:Ne.position,used:!1,boost:0};y[Ye].splice(Ke,1,Re);const Pe=[...h,He.cardId];B.remove(),Q(Ne,He,async()=>{await Z({[o+"Team"]:y,[x+"Team"]:c[x+"Team"],["usedSubIds_"+o]:Pe})})})}document.body.appendChild(B),V()}function Q(f,b,y){const h={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const k=(I,A,M)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${A};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${M}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${h[I.job]||"#555"};border:3px solid ${A};position:relative;overflow:hidden;margin:0 auto">
        ${Ue(I)?`<img src="${Ue(I)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(I.name||"").slice(0,12)}</div>
    </div>`;w.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${k(b,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${k(f,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(w);let z=!1;const E=()=>{z||(z=!0,w.remove(),setTimeout(()=>y(),50))};w.addEventListener("click",E),setTimeout(E,2200)}function ae(){var b;const f=document.createElement("div");f.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",f.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${c[x+"Name"]}</div>
      <div style="width:min(90vw,420px)">${ct(c[x+"Team"],c[x+"Formation"],null,[],300,300)}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(f),(b=f.querySelector("#pvp-opp-close"))==null||b.addEventListener("click",()=>f.remove())}function se(){var h;const f=c.log||[],b=document.createElement("div");b.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column";const y=w=>{var z,E,I;if(w.type==="duel"){const A=w.isGoal,M=w.homeScored&&o==="p1"||!w.homeScored&&A&&o==="p2",B=w.homeScored?"#FFD700":A?"#ff6b6b":"rgba(255,255,255,0.3)",V=A?M?"⚽ BUT !":"⚽ BUT adversaire !":(z=w.homePlayers)!=null&&z.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${A?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${B};margin-bottom:4px">
          <div style="font-size:9px;color:${B};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${V}</div>
          ${(E=w.homePlayers)!=null&&E.length?`<div style="margin-bottom:3px">${it(w.homePlayers,"rgba(255,255,255,0.7)",w.homeTotal)}</div>`:""}
          ${(I=w.aiPlayers)!=null&&I.length?`<div style="opacity:0.7">${it(w.aiPlayers,"#ff6b6b",w.aiTotal)}</div>`:""}
        </div>`}return w.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
          <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
          <div style="display:flex;align-items:center;gap:8px">
            ${w.outPlayer?Xe({...w.outPlayer,used:!0,_line:w.outPlayer.job,rarity:"normal"},38,50):""}
            <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
            ${w.inPlayer?Xe({...w.inPlayer,_line:w.inPlayer.job,rarity:"normal"},38,50):""}
          </div>
        </div>`:`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${w.type==="goal"?"#FFD700":w.type==="stop"?"#00ff88":"rgba(255,255,255,0.4)"}">
        <div style="font-size:12px;color:#fff">${w.text||""}</div>
      </div>`};b.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${f.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...f].reverse().map(y).join("")}
      </div>`,document.body.appendChild(b),(h=b.querySelector("#pvp-hist-close"))==null||h.addEventListener("click",()=>b.remove())}async function pe(){if(c.phase!==o+"-attack")return;const f=o==="p1"?"p2":"p1",b=(c.round||0)+1,y=[...c.log||[]];y.push({type:"info",text:`⏭️ ${c[o+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const h=qe(c),w=ke(f),k=h||!w?"finished":f+"-attack";await Z({["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:k,attacker:f,round:b,log:y}),k==="finished"&&await Se(c)}async function ee(){const f=c[o+"Team"],b=!["GK","DEF","MIL","ATT"].some(k=>(c[x+"Team"][k]||[]).some(z=>!z.used)),y=(c["selected_"+o]||[]).map(k=>{const z=(f[k._role]||[]).find(V=>V.cardId===k.cardId)||k,E=b&&["GK","DEF"].includes(k._role),I=f[k._role]||[],A=I.findIndex(V=>V.cardId===k.cardId),M=dt(I.length),B=A>=0?M[A]:z._col??1;return{...z,_line:k._role,_col:B,...E?{note_a:Math.max(1,Number(z.note_a)||0)}:{}}});if(!y.length)return;const h=Ot(y,c.modifiers[o]||{});D(o,y.map(k=>k.cardId)),y.forEach(k=>{const z=(f[k._role]||[]).find(E=>E.cardId===k.cardId);z&&(z.used=!0)}),c["selected_"+o]=[],xe();const w=[...c.log||[]];if(b){const k=(c[o+"Score"]||0)+1,z=y.map(B=>({name:B.name,note:ze(B,B._line||"ATT"),portrait:Ue(B),job:B.job}));w.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:z,homeTotal:h.total,aiTotal:0});const E=(c.round||0)+1,I=o==="p1"?"p2":"p1",A={...c,[o+"Team"]:f,[o+"Score"]:k},M=qe(A);G.add(E),Ce(z,k,c[x+"Score"]||0,!0,async()=>{await Z({[o+"Team"]:f,[o+"Score"]:k,["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:M?"finished":I+"-attack",attacker:I,round:E,log:w}),M&&await Se({...c,[o+"Score"]:k})});return}w.push({type:"pending",text:`⚔️ ${c[o+"Name"]} attaque (${h.total})`}),await Z({[o+"Team"]:f,[x+"Team"]:c[x+"Team"],pendingAttack:{...h,players:y,side:o},["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},phase:x+"-defense",log:w})}async function de(){const f=c[o+"Team"],b=(c["selected_"+o]||[]).map(F=>{const Y=(f[F._role]||[]).find(ye=>ye.cardId===F.cardId)||F,ie=f[F._role]||[],X=ie.findIndex(ye=>ye.cardId===F.cardId),ue=dt(ie.length),be=X>=0?ue[X]:Y._col??1;return{...Y,_line:F._role,_col:be}}),y=Ht(b,c.modifiers[o]||{});D(o,b.map(F=>F.cardId)),b.forEach(F=>{const Y=(f[F._role]||[]).find(ie=>ie.cardId===F.cardId);Y&&(Y.used=!0)}),c["selected_"+o]=[],xe();const h=Ut(c.pendingAttack.total,y.total,c.modifiers[o]||{}),w=c.pendingAttack.side,k=h==="attack"||(h==null?void 0:h.goal),z=w==="p1"?"p2":"p1",E=(c.round||0)+1,I=(c.pendingAttack.players||[]).map(F=>({name:F.name,note:ze(F,F._line||"ATT"),portrait:Ue(F),job:F.job})),A=[...c.log||[]];A.push({type:"duel",isGoal:k,homeScored:k&&w===o,text:k?`⚽ BUT de ${c[w+"Name"]} ! (${c.pendingAttack.total} vs ${y.total})`:`✋ Attaque stoppée (${c.pendingAttack.total} vs ${y.total})`,homePlayers:I,aiPlayers:b.map(F=>({name:F.name,note:ze(F,F._line||"DEF"),portrait:Ue(F),job:F.job})),homeTotal:c.pendingAttack.total,aiTotal:y.total});const M=k?(c[w+"Score"]||0)+1:c[w+"Score"]||0,B={...c,[o+"Team"]:f,[w+"Score"]:M},V=qe(B),W=V?"finished":z+"-attack",O=async()=>{await Z({[o+"Team"]:f,[x+"Team"]:c[x+"Team"],[w+"Score"]:M,["selected_"+o]:[],modifiers:{...c.modifiers,[o]:{}},pendingAttack:null,phase:W,attacker:z,round:E,log:A}),(W==="finished"||V)&&await Se({...c,[w+"Score"]:M})};if(k){const F=w===o,Y=F?M:c[o+"Score"]||0,ie=F?c[x+"Score"]||0:M;G.add(E),Ce(I,Y,ie,F,O)}else await O()}function Le(f){return["MIL","ATT"].some(b=>(f[b]||[]).some(y=>!y.used))}function Te(f){return["GK","DEF","MIL","ATT"].some(b=>(f[b]||[]).some(y=>!y.used))}function Ae(f){return Te(f)&&!Le(f)}function ke(f){const b=c[f+"Team"],y=c[(f==="p1"?"p2":"p1")+"Team"];return!!(Le(b)||!Te(y)&&Ae(b))}function qe(f){const b=["MIL","ATT"].some(A=>(f.p1Team[A]||[]).some(M=>!M.used)),y=["MIL","ATT"].some(A=>(f.p2Team[A]||[]).some(M=>!M.used)),h=Te(f.p1Team),w=Te(f.p2Team);return!b&&!(!w&&h)&&(!y&&!(!h&&w))}function Ge(f){const b=f.p1Score||0,y=f.p2Score||0;return b===y?null:b>y?_.home_id:_.away_id}async function Se(f){try{const b=Ge(f),y=b?_.home_id===b?_.away_id:_.home_id:null,h=f.p1Score||0,w=f.p2Score||0;await S.from("matches").update({status:"finished",winner_id:b,home_score:h,away_score:w}).eq("id",i);const{data:k}=await S.from("mini_league_matches").select("id, league_id, matchday").eq("match_id",i).single();if(k){await S.from("mini_league_matches").update({home_score:h,away_score:w,status:"finished"}).eq("id",k.id);const{data:z}=await S.from("mini_league_matches").select("id, status").eq("league_id",k.league_id).eq("matchday",k.matchday);if((z||[]).every(I=>I.status==="finished"||I.status==="bye")){const{data:I}=await S.from("mini_leagues").select("current_day,total_days").eq("id",k.league_id).single();if(I){const A=(I.current_day||0)+1,M=A>(I.total_days||0);await S.from("mini_leagues").update({current_day:M?I.total_days:A,status:M?"finished":"active"}).eq("id",k.league_id)}}}b&&y&&Ei(b,y).catch(()=>{})}catch(b){console.error("[ML] finishMatch:",b)}}function C(){var w;if(T&&document.getElementById("pvp-end-overlay"))return;T=!0;const f=c[o+"Score"],b=c[x+"Score"],y=f>b,h=f===b;et(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${y?"🏆":h?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${y?"Victoire !":h?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${f} - ${b}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏆 Retour à la Mini League</button>
    </div>`,(w=document.getElementById("pvp-home"))==null||w.addEventListener("click",()=>{try{S.removeChannel(K)}catch{}Ve(e),l("mini-league",s?{openLeagueId:s}:{})})}xe()}const Qn="/",Zn=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function er(e,t,i){let n=0;const d=document.createElement("div");d.id="tutorial-overlay",d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const a=()=>{var o,x,m;const l=t[n],u=n===t.length-1,s=Math.round((n+1)/t.length*100);d.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${s}%;background:${l.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${l.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${l.title}</div>
          <div style="font-size:11px;color:#aaa">${n+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${l.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${Qn}icons/${l.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${l.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${l.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${n>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${u?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${l.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${u?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,d.querySelectorAll("ul,ol").forEach(v=>{v.style.paddingLeft="20px",v.style.marginTop="6px",v.style.marginBottom="6px"}),d.querySelectorAll("li").forEach(v=>{v.style.marginBottom="4px"}),d.querySelectorAll("p").forEach(v=>{v.style.marginBottom="8px"}),(o=d.querySelector("#tuto-prev"))==null||o.addEventListener("click",()=>{n--,a()}),(x=d.querySelector("#tuto-next"))==null||x.addEventListener("click",()=>{u?r():(n++,a())}),(m=d.querySelector("#tuto-skip"))==null||m.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{d.remove(),e!=null&&e.id&&await S.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(d),a()}async function tr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:d,error:a}=await S.rpc("get_tutorial_steps");if(!a&&(d==null?void 0:d.length)>0)n=d,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:l,error:u}=await S.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!u&&(l==null?void 0:l.length)>0?(n=l,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${a==null?void 0:a.message}, Direct: ${u==null?void 0:u.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(l=>({emoji:l.emoji,title:l.title,color:l.color,content:l.content,image_url:l.image_url||null})):Zn;er(e,r,()=>t("boosters"))}const Wt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function zt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function ir(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await Si(e,t)}async function Si(e,t){const{state:i,toast:n}=t,{data:d}=await S.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:a}=await S.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
      buyer:users!buyer_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face,
          clubs(encoded_name, logo_url)))`).eq("seller_id",i.profile.id).in("status",["active","sold"]).order("listed_at",{ascending:!1}).limit(100),r=(d||[]).filter(g=>g.seller_id!==i.profile.id),l=a||[];e.innerHTML=`
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
  </div>`;let u="buy";const s=()=>{var g,c,T,p,L,j,P;return{name:(((g=document.getElementById("flt-name"))==null?void 0:g.value)||"").toLowerCase().trim(),club:(((c=document.getElementById("flt-club"))==null?void 0:c.value)||"").toLowerCase().trim(),country:(((T=document.getElementById("flt-country"))==null?void 0:T.value)||"").toLowerCase().trim(),job:((p=document.getElementById("flt-job"))==null?void 0:p.value)||"",rarity:((L=document.getElementById("flt-rarity"))==null?void 0:L.value)||"",note1:parseInt((j=document.getElementById("flt-note1"))==null?void 0:j.value)||0,note2:parseInt((P=document.getElementById("flt-note2"))==null?void 0:P.value)||0}};function o(g){const c=s();return g.filter(T=>{var K,Z,re;const p=(K=T.card)==null?void 0:K.player;if(!p)return!1;const L=`${p.firstname} ${p.surname_real}`.toLowerCase(),j=(((Z=p.clubs)==null?void 0:Z.encoded_name)||"").toLowerCase(),P=(p.country_code||"").toLowerCase(),G=((re=T.card)==null?void 0:re.evolution_bonus)||0,q=zt(p,p.job,G),N=p.job2?zt(p,p.job2,G):0;return!(c.name&&!L.includes(c.name)||c.club&&!j.includes(c.club)||c.country&&!P.includes(c.country)||c.job&&p.job!==c.job||c.rarity&&p.rarity!==c.rarity||c.note1&&q<c.note1||c.note2&&N<c.note2)})}function x(g){var N,K,Z,re;const c=(N=g.card)==null?void 0:N.player;if(!c)return"";const T=((K=g.card)==null?void 0:K.evolution_bonus)||0,p=zt(c,c.job,T),L=c.job2?zt(c,c.job2,T):0,j=(i.profile.credits||0)>=g.price,P=c.country_code?`https://flagsapi.com/${c.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,G=Wt[c.job]||"#bbb",q=c.job2?Wt[c.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${P?`<img src="${P}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(Z=c.clubs)!=null&&Z.logo_url?`<img src="${c.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${G};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${G};font-family:Arial Black,Arial">${p}</span>
        </div>
        ${L?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${q};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${q};font-family:Arial Black,Arial">${L}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${c.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((re=g.seller)==null?void 0:re.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${g.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${g.id}" ${j?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${j?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function m(g){var N,K,Z,re;const c=(N=g.card)==null?void 0:N.player;if(!c)return"";const T=((K=g.card)==null?void 0:K.evolution_bonus)||0,p=zt(c,c.job,T),L=c.job2?zt(c,c.job2,T):0,j=g.status==="sold",P=c.country_code?`https://flagsapi.com/${c.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,G=Wt[c.job]||"#bbb",q=c.job2?Wt[c.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${j?"opacity:0.7":""}">
      ${P?`<img src="${P}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(Z=c.clubs)!=null&&Z.logo_url?`<img src="${c.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${G};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${G};font-family:Arial Black,Arial">${p}</span>
        </div>
        ${L?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${q};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${q};font-family:Arial Black,Arial">${L}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${c.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.surname_real}</div>
        <div style="font-size:10px;color:${j?"#22c55e":"#999"};margin-top:1px">
          ${j?`✅ Vendu à ${((re=g.buyer)==null?void 0:re.pseudo)||"—"} · ${g.sold_at?new Date(g.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(g.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${g.price.toLocaleString("fr")}</div>
        ${j?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${g.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function v(){const g=document.getElementById("mkt-content"),c=document.getElementById("mkt-filters");if(g){if(c.style.display=u==="buy"?"flex":"none",u==="buy"){const T=o(r);g.innerHTML=T.length?T.map(x).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const T=l.filter(L=>L.status==="active").sort((L,j)=>new Date(j.listed_at)-new Date(L.listed_at)),p=l.filter(L=>L.status==="sold").sort((L,j)=>new Date(j.sold_at||j.listed_at)-new Date(L.sold_at||L.listed_at));g.innerHTML=(T.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${T.length})</div>`+T.map(m).join(""):"")+(p.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${p.length})</div>`+p.map(m).join(""):"")+(!T.length&&!p.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}g.querySelectorAll("[data-buy]").forEach(T=>T.addEventListener("click",()=>or(T.dataset.buy,r,e,t))),g.querySelectorAll("[data-cancel]").forEach(T=>T.addEventListener("click",()=>rr(T.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(g=>{g.addEventListener("click",()=>{u=g.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(c=>{const T=c===g;c.style.background=T?"var(--green)":"#fff",c.style.color=T?"#fff":"var(--gray-600)",c.style.borderColor=T?"var(--green)":"var(--gray-200)"}),v()})});let _;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(g=>{var c;(c=document.getElementById(g))==null||c.addEventListener("input",()=>{clearTimeout(_),_=setTimeout(v,250)})}),v()}async function or(e,t,i,n){const{state:d,toast:a,refreshProfile:r}=n,l=t.find(o=>o.id===e);if(!l)return;const u=l.price;if((d.profile.credits||0)<u){a("Crédits insuffisants","error");return}nr(l,async()=>{const{error:o}=await S.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:d.profile.id});if(o){a("Erreur achat : "+o.message,"error");return}await r();const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(d.profile.credits||0).toLocaleString("fr")}`),a("✅ Carte achetée !","success"),await Si(i,n)})}function nr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",d=document.createElement("div");d.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",d.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(d);const a=l=>{d.remove(),l&&t()};d.querySelector("#buy-cancel").addEventListener("click",()=>a(!1)),d.querySelector("#buy-ok").addEventListener("click",()=>a(!0)),d.addEventListener("click",l=>{l.target===d&&a(!1)})}async function rr(e,t,i){const{toast:n}=i,{data:d}=await S.from("market_listings").select("card_id").eq("id",e).single();if(await S.from("market_listings").update({status:"cancelled"}).eq("id",e),d!=null&&d.card_id){const{count:a}=await S.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",d.card_id).eq("status","active");a||await S.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",d.card_id)}n("Annonce retirée","success"),Si(t,i)}async function ar(e,t){var o,x,m,v;const{state:i,navigate:n}=t,d=((x=(o=t==null?void 0:t.state)==null?void 0:o.params)==null?void 0:x.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:a},{data:r}]=await Promise.all([S.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),S.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let l=d;function u(){var g,c;const _=document.getElementById("rankings-list");if(_){if(l==="global"){const T=a||[];_.innerHTML=T.length>0?T.map((p,L)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${p.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${L<3?["#D4A017","#a0a0a0","#cd7f32"][L]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${L<3?"16":"13"}px">${L<3?["🥇","🥈","🥉"][L]:L+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${p.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${p.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${p.trophies_top1} 🥈${p.trophies_top2} 🥉${p.trophies_top3}</div>
            <div style="color:var(--gray-600)">${p.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const T=r||[];_.innerHTML=T.length>0?T.map((p,L)=>{const j=Gt(p.mmr??1e3),P=(p.ranked_wins||0)+(p.ranked_losses||0)+(p.ranked_draws||0),G=P>0?Math.round((p.ranked_wins||0)/P*100):0,q=p.id===i.profile.id,N=(p.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${q?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${L<3?["#D4A017","#a0a0a0","#cd7f32"][L]:"rgba(255,255,255,0.08)"};color:${L<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${L<3?"16":"13"}px">${L<3?["🥇","🥈","🥉"][L]:L+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${j.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${p.club_name} · ${j.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${N?"❓":j.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${j.color}">${N?"Placement":j.label}</div>
              ${N?"":`<div style="font-size:10px;color:var(--gray-600)">${G}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(g=document.getElementById("tab-global"))!=null&&g.style&&(document.getElementById("tab-global").style.cssText=s(l==="global")),(c=document.getElementById("tab-ranked"))!=null&&c.style&&(document.getElementById("tab-ranked").style.cssText=s(l==="ranked"))}}const s=_=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${_?"900":"400"};background:${_?"var(--green)":"rgba(255,255,255,0.06)"};color:${_?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
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
  </div>`,u(),(m=document.getElementById("tab-global"))==null||m.addEventListener("click",()=>{l="global",u()}),(v=document.getElementById("tab-ranked"))==null||v.addEventListener("click",()=>{l="ranked",u()})}async function sr(e,t){var G,q,N,K;const{state:i,navigate:n,toast:d}=t,a=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:l}]=await Promise.all([S.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),S.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",a.id).single()]);if(!l){d("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(G=document.getElementById("ranked-back"))==null||G.addEventListener("click",()=>n("home"));return}const u=l.mmr??1e3,s=l.mmr_deviation??350,o=l.mmr_volatility??.06,x=l.placement_matches??0,m=x<10,v=Math.max(0,10-x),_=Gt(u),g=mo(u),c=si.findIndex(Z=>Z.id===_.id),T=si[c+1]||null,p={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},L=(l.ranked_wins||0)+(l.ranked_losses||0)+(l.ranked_draws||0),j=L>0?Math.round((l.ranked_wins||0)/L*100):0,P=si.map(Z=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${_.id===Z.id?1:.35};
      transform:${_.id===Z.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${_.id===Z.id?"28px":"20px"}">${Z.emoji}</div>
      <div style="font-size:9px;color:${Z.color};font-weight:${_.id===Z.id?"900":"400"};letter-spacing:0.5px">${Z.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${p[_.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
      ${P}
    </div>

    <!-- Placement / Stats -->
    ${m?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${x}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${v} match${v>1?"s":""} — gains et pertes ×2</div>
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
  </div>`,(q=document.getElementById("ranked-back"))==null||q.addEventListener("click",()=>n("home")),(N=document.getElementById("ranked-leaderboard-btn"))==null||N.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(K=document.getElementById("ranked-play-btn"))==null||K.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:u,rd:s,sigma:o,isPlacement:m}})})}async function dr(e,{state:t,navigate:i,toast:n}){const d=t.profile;if(!d)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:a}=await S.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${d.id},away_id.eq.${d.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},l=(a||[]).filter(o=>o.status==="finished"),u=(a||[]).filter(o=>o.status==="in_progress");function s(o){const x=o.home_id===d.id;x?o.home_score:o.away_score,x?o.away_score:o.home_score;const m=o.winner_id===d.id,v=o.home_score===o.away_score&&o.status==="finished",_=o.status!=="finished"?"…":v?"N":m?"V":"D",g=o.status!=="finished"||v?"#888":m?"#1A6B3C":"#c0392b";let c=r[o.mode]||o.mode;o.away_id===null&&!c.startsWith("IA")&&(c="IA");const p=o.home_id===d.id?o.away:o.home;let L;o.away_id===null?L=c:p?L=`${p.club_name||p.pseudo} (${p.pseudo})`:L="Adversaire";let j="";o.status==="in_progress"&&Date.now()-new Date(o.created_at).getTime()>3600*1e3&&(j=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const P=new Date(o.created_at),G=P.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+P.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),q=o.status==="finished"?`${o.home_score} - ${o.away_score}`:`${o.home_score||0} - ${o.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${L}${j}</div>
        <div style="font-size:11px;color:var(--gray-600)">${c} · ${G}${o.status==="in_progress"?" · en cours":""}</div>
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
      ${u.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${u.map(s).join("")}
        </div>`:""}

      ${l.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${l.map(s).join("")}
        </div>`:""}

      ${(a||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}xo(yo);const Fe={user:null,profile:null,page:"home",params:{}};function At(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function lr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function hi(){document.getElementById("modal-overlay").classList.add("hidden")}async function Bt(){if(!Fe.user)return;const{data:e}=await S.from("users").select("*").eq("id",Fe.user.id).single();e&&(Fe.profile=e)}function Ft(e,t={}){Fe.page=e,Fe.params=t,fo()}async function fo(){var n,d,a,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(l=>{l.classList.toggle("active",l.dataset.page===Fe.page)});const t=document.getElementById("nav-credits");t&&Fe.profile&&(t.textContent=`💰 ${(Fe.profile.credits||0).toLocaleString("fr")}`);const i={state:Fe,navigate:Ft,toast:At,openModal:lr,closeModal:hi,refreshProfile:Bt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',Fe.page){case"home":await ji(e,i);break;case"collection":await Oo(e,i);break;case"decks":await gi(e,i);break;case"boosters":await tn(e,i);break;case"ranked":await sr(e,i);break;case"match":{const l=Fe.params&&Fe.params.matchMode||"vs_ai_easy";l==="random"?await yi(e,i,!1):l==="ranked"?await yi(e,i,!0):l==="friend"?await qn(e,i,(n=Fe.params)==null?void 0:n.friendId,(d=Fe.params)==null?void 0:d.friendName):l==="mini-league"?await Ni(e,i,(a=Fe.params)==null?void 0:a.mlMatchId,(r=Fe.params)==null?void 0:r.leagueId):await gn(e,i);break}case"market":await ir(e,i);break;case"rankings":await ar(e,i);break;case"matches":await dr(e,i);break;case"friends":await Eo(e,i);break;case"mini-league":await Fn(e,i);break;case"match-mini-league":{const l=Fe.params||{};await Ni(e,i,l.mlMatchId,l.leagueId);break}default:await ji(e,i)}}function cr(){var n;const e=document.getElementById("app"),t=Fe.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(d=>{d.addEventListener("click",a=>{a.preventDefault(),Ft(d.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>Ft("home")),document.getElementById("nav-credits").addEventListener("click",()=>Ft("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>pr())}async function pr(){const{data:e}=await S.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const d=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function ur(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&hi()}),document.getElementById("modal-close").addEventListener("click",hi);const{data:{session:e}}=await S.auth.getSession();if(!e){Ri(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At});return}Fe.user=e.user,await Bt(),Ri();try{const{data:i}=await S.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(d=>{n[d.formation]=d.links}),bo(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!Fe.profile){ho(document.getElementById("app"),{state:Fe,navigate:async()=>{await Bt(),ui()},toast:At,refreshProfile:Bt});return}const t=Array.isArray(Fe.profile.pending_boosters)?Fe.profile.pending_boosters:[];if(!Fe.profile.onboarding_done&&t.length>0){cn(document.getElementById("app"),{state:Fe,navigate:()=>ui(),toast:At,refreshProfile:Bt});return}ui(),setTimeout(()=>tr(Fe.profile,Ft,At),800),S.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(Fe.user=null,Fe.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:At}))})}function fr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function ai(){const e=document.getElementById("app");e&&(e.style.height=fr()+"px")}window.addEventListener("resize",ai);window.addEventListener("orientationchange",()=>setTimeout(ai,150));window.visualViewport&&window.visualViewport.addEventListener("resize",ai);function ui(){const e=()=>{var i;(i=Fe.user)!=null&&i.id&&S.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",Fe.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",ai(),cr(),fo()}function Ri(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function go(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}ur().catch(e=>{console.error("Échec du démarrage:",e),go()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&go("Le serveur met trop de temps à répondre.")},12e3);
