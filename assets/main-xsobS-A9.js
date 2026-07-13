const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/svg-config-DC1JcKBi.js","assets/svg-config-DCm4yyf6.css"])))=>i.map(i=>d[i]);
import{s as h,F as ai,r as qe,j as It,n as At,o as mn,q as Ri,h as si,t as xn,u as bn,T as Yt,p as yn,v as hn,b as vn}from"./svg-config-DC1JcKBi.js";const wn="/";function Li(e,{navigate:t,toast:i}){let n="login";const a=()=>{var r,s,l,c,d,u;const o=n==="login";e.innerHTML=`
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
        <img src="${wn}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",a()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",a()}),o?((l=document.getElementById("login-password"))==null||l.addEventListener("keydown",f=>{var m;f.key==="Enter"&&((m=document.getElementById("login-btn"))==null||m.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const f=document.getElementById("login-email").value.trim(),m=document.getElementById("login-password").value,g=document.getElementById("login-error");if(g.textContent="",!f||!m){g.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:b}=await h.auth.signInWithPassword({email:f,password:m});if(p.textContent="⚽ Se connecter",p.disabled=!1,b){g.textContent=b.message.includes("Invalid")?"Email ou mot de passe incorrect.":b.message;return}window.location.reload()})):((d=document.getElementById("reg-confirm"))==null||d.addEventListener("keydown",f=>{var m;f.key==="Enter"&&((m=document.getElementById("reg-btn"))==null||m.click())}),(u=document.getElementById("reg-btn"))==null||u.addEventListener("click",async()=>{const f=document.getElementById("reg-email").value.trim(),m=document.getElementById("reg-password").value,g=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!f||!m||!g){p.textContent="Remplissez tous les champs.";return}if(m.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(m!==g){p.textContent="Les mots de passe ne correspondent pas.";return}const b=document.getElementById("reg-btn");b.textContent="⏳ Création…",b.disabled=!0;const{error:v}=await h.auth.signUp({email:f,password:m});if(b.textContent="🚀 Créer mon compte",b.disabled=!1,v){p.textContent=v.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",a(),setTimeout(()=>{const y=document.getElementById("login-email");y&&(y.value=f)},50)}))};a()}function _n(e,{state:t,navigate:i,toast:n,refreshProfile:a}){let o="#1A6B3C",r="#D4A017";e.innerHTML=`
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
  `;function s(){var g;const c=document.getElementById("logo-preview"),d=document.getElementById("logo-initials"),u=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",f=u.trim().split(" ").filter(Boolean),m=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();c&&(c.style.background=r,c.style.borderColor=o),d&&(d.textContent=m,d.style.color=o)}document.getElementById("color1").addEventListener("input",c=>{o=c.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",c=>{r=c.target.value,document.getElementById("swatch2").style.background=r,s()});function l(c){document.querySelectorAll(".setup-step").forEach(d=>d.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("step1-error");if(d.textContent="",c.length<3){d.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await h.from("users").select("id").eq("pseudo",c).maybeSingle();if(u){d.textContent="Ce pseudo est déjà pris.";return}l(2)}),document.getElementById("step2-back").addEventListener("click",()=>l(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),d=document.getElementById("step2-error");if(d.textContent="",c.length<2){d.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await h.from("users").select("id").eq("club_name",c).maybeSingle();if(u){d.textContent="Ce nom de club est déjà pris.";return}l(3)}),document.getElementById("step3-back").addEventListener("click",()=>l(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:m}=await h.from("users").insert({id:t.user.id,pseudo:c,club_name:d,club_color1:o,club_color2:r,credits:1e4});if(m)throw m;await kn(t.user.id),await a(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(m){u.textContent=m.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function kn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await h.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const $n="modulepreload",En=function(e){return"/"+e},Ti={},Ni=function(t,i,n){let a=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));a=Promise.allSettled(i.map(l=>{if(l=En(l),l in Ti)return;Ti[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":$n,c||(u.as="script"),u.crossOrigin="",u.href=l,s&&u.setAttribute("nonce",s),document.head.appendChild(u),c)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return a.then(r=>{for(const s of r||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},$t="#1A6B3C",Et="#cc2222",Ln="#D4A017",zi="#888";async function Tn(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Oi(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>In(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Hi(i,n,null,t))}async function Oi(e,t,i={}){const{navigate:n}=i,a=e.user.id,{data:o,error:r}=await h.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${a},addressee_id.eq.${a}`),{count:s}=await h.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",a).eq("status","pending"),l=document.getElementById("pending-badge");l&&(s>0?(l.style.display="flex",l.textContent=s):l.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(r){console.error("[Friends] Erreur:",r),c.innerHTML=`<div style="color:${Et};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const d=(o||[]).map(m=>m.requester_id===a?m.addressee_id:m.requester_id);let u={};if(d.length){const{data:m}=await h.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",d);(m||[]).forEach(g=>{u[g.id]=g})}const f=(o||[]).map(m=>({friendshipId:m.id,friend:u[m.requester_id===a?m.addressee_id:m.requester_id]||{pseudo:"?"}}));if(!f.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${f.length} ami${f.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${f.map(({friendshipId:m,friend:g})=>zn(g,m)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(m=>{m.addEventListener("click",()=>An(e,m.dataset.stats,m.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(m=>{m.addEventListener("click",()=>{const g=m.dataset.friendId,p=m.dataset.friendName;console.log("[Friends] clic match",{fid:g,fname:p,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:g,friendName:p}):t("Erreur navigation","error")})})}function zn(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",a=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||$t,r=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,l=s&&Date.now()-s.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Ln};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function In(e,t){const i=di();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Et};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${li()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),a=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",r=>{r.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){a.textContent="Entre un pseudo";return}a.textContent="";const{data:s}=await h.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!s){a.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){a.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:l}=await h.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(l){const d=l.status==="accepted"?"Vous êtes déjà amis !":l.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";a.textContent=d;return}const{error:c}=await h.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(c){a.textContent="Erreur : "+c.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Hi(e,t,i=null,n={}){const a=e.user.id,{data:o}=await h.from("friendships").select("id, requester_id").eq("addressee_id",a).eq("status","pending").order("created_at",{ascending:!1}),r=(o||[]).map(f=>f.requester_id);let s={};if(r.length){const{data:f}=await h.from("users").select("id, pseudo, club_name").in("id",r);(f||[]).forEach(m=>{s[m.id]=m})}const l=(o||[]).map(f=>({...f,requester:s[f.requester_id]||{pseudo:"?"}})),c=di(),d=l||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${d.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${d.map(f=>{var m,g,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((m=f.requester)==null?void 0:m.club_name)||((g=f.requester)==null?void 0:g.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=f.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${f.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${$t};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${f.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Et};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${li()}`,document.body.appendChild(c);const u=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",u),c.addEventListener("click",f=>{f.target===c&&u()}),c.querySelectorAll("[data-accept]").forEach(f=>{f.addEventListener("click",async()=>{const{error:m}=await h.from("friendships").update({status:"accepted"}).eq("id",f.dataset.accept);if(m){t("Erreur : "+m.message,"error");return}f.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Oi(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(f=>{f.addEventListener("click",async()=>{await h.from("friendships").delete().eq("id",f.dataset.decline),f.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function An(e,t,i){const n=e.user.id,[a,o]=[n,t].sort(),r=n===a,{data:s}=await h.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",o).single(),l=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},d=r?c.wins_p1||0:c.wins_p2||0,u=r?c.wins_p2||0:c.wins_p1||0,f=c.draws||0,m=r?c.goals_p1||0:c.goals_p2||0,g=r?c.goals_p2||0:c.goals_p1||0,p=r?c.gc_used_p1||0:c.gc_used_p2||0,b=r?c.gc_used_p2||0:c.gc_used_p1||0,v=c.matches_total||0,y=($,x,R,I=$t,D=Et)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${I}">${x}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${$}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${D}">${R}</div>
    </div>`,w=di();w.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${v===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${y("Victoires",d,u)}
        ${y("Nuls",f,f,zi,zi)}
        ${y("Défaites",u,d)}
        ${y("Buts marqués",m,g)}
        ${y("Buts encaissés",g,m,Et,$t)}
        ${y("GC utilisés ⚡",p,b,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${v} match${v>1?"s":""} joué${v>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${li()}`,document.body.appendChild(w),w.querySelector("#stats-close").addEventListener("click",()=>w.remove()),w.addEventListener("click",$=>{$.target===w&&w.remove()})}function di(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function li(){return`
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
        background:${$t};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const Mn="2026.07.13-1717";async function Ii(e,{state:t,navigate:i,toast:n}){var o,r;const a=t.profile;a&&(e.innerHTML=`
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
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${Mn}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var u,f,m,g,p;const s=((u=window.visualViewport)==null?void 0:u.height)||window.innerHeight,l=((f=document.querySelector(".top-nav"))==null?void 0:f.offsetHeight)||56,c=((m=document.querySelector(".bottom-nav"))==null?void 0:m.offsetHeight)||60;if(e.querySelector(".home-inner")){const b=s-l-c;e.querySelector(".home-dark").style.minHeight=b+"px"}if(window.innerWidth<768){const b=((g=e.querySelector(".home-hero"))==null?void 0:g.offsetHeight)||60,v=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const y=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,w=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((N,Z)=>{var te;return N+(((te=document.getElementById(Z))==null?void 0:te.offsetHeight)||0)},0),$=12*5,x=s-l-c-b-y-w-$-32,R=Math.max(80,Math.round(x*.28)),I=Math.max(160,Math.round(x*.72)),D=Math.floor((I-10)/2);v&&(v.style.minHeight=v.style.maxHeight=R+"px"),e.querySelectorAll(".play-tile").forEach(N=>{N.style.minHeight=N.style.height=D+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(N=>{N.style.height=Math.round(D*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const l=s.dataset.action;if(l==="match-ai"){Bn(i);return}if(l==="match-random"){i("match",{matchMode:"random"});return}if(l==="match-friend"){i("friends");return}if(l==="mini-league"){i("mini-league");return}if(l==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await h.auth.signOut(),window.location.reload()}),Ki(t,n),jn(t,n,i),Ui(t,n,i))}async function Ui(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const a=e.profile.id,{data:o}=await h.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${a},away_id.eq.${a}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const r=o.map(l=>l.home_id===a?l.away_id:l.home_id).filter(Boolean);let s={};if(r.length){const{data:l}=await h.from("users").select("id, pseudo, club_name").in("id",r);(l||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=o.map(l=>{const c=l.home_id===a?l.away_id:l.home_id,d=s[c]||"Adversaire",u=l.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${u?"🏆 Mini League":l.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${d}</div>
      </div>
      <button data-resume="${l.id}" data-mini="${u?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${l.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(l=>{l.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(l.dataset.mini==="1"){const{data:d}=await h.from("mini_league_matches").select("id, league_id").eq("match_id",l.dataset.resume).single();d?i("match-mini-league",{mlMatchId:d.id,leagueId:d.league_id}):i("mini-league")}else{const{resumePvpMatch:d}=await Ni(async()=>{const{resumePvpMatch:u}=await Promise.resolve().then(()=>Po);return{resumePvpMatch:u}},void 0);d(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},l.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(l=>{l.addEventListener("click",()=>{Cn(async()=>{await Sn(l.dataset.abandon,l.dataset.opp,a),t("Match abandonné (défaite 3-0)","info"),Ui(e,t,i)})})})}async function Sn(e,t,i){const{data:n}=await h.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const a=n.home_id===i,o=a?0:3,r=a?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=r,s.phase="finished",s.forfeit=!0,await h.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:r,game_state:s}).eq("id",e)}function Cn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function jn(e,t,i){var s,l,c,d;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:a}=await h.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!a){n.innerHTML="";return}const o=((s=a.inviter)==null?void 0:s.club_name)||((l=a.inviter)==null?void 0:l.pseudo)||"?",r=a.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:o})}),(d=document.getElementById("match-inv-decline"))==null||d.addEventListener("click",async()=>{await h.from("friend_match_invites").update({status:"declined"}).eq("id",a.id),n.innerHTML="",t("Invitation refusée","info")})}async function Ki(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:a}=await h.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(a||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,r=n.slice(0,2).map(l=>{var c;return((c=l.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Hi(e,t,()=>Ki(e,t)))}function Bn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:380px">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${t.map(a=>`<div class="action-card" data-mode="${a.mode}" style="cursor:pointer"><div class="icon">${a.icon}</div><div class="label">${a.label}</div><div class="sub">${a.sub}</div></div>`).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(a=>{a.addEventListener("click",()=>{n(),e("match",{matchMode:a.dataset.mode})})})}const Ae={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Be(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const Ai=["ATT","MIL","DEF","GK"];function Vi(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let a=n+1;a<i;a++){const o=e[n],r=e[a];if(!o||!r)continue;const s=o._col!=null&&r._col!=null&&o._col===r._col,l=o._col!=null&&r._col!=null&&Math.abs(o._col-r._col)===1,c=Ai.indexOf(o._line||o.job),d=Ai.indexOf(r._line||r.job),u=Math.abs(c-d)===1;if(!((o._line||o.job)===(r._line||r.job)&&l||s&&u))continue;const g=o.country_code&&r.country_code&&o.country_code===r.country_code,p=o.club_id&&r.club_id&&o.club_id===r.club_id;g&&p?t+=2:(g||p)&&(t+=1)}return t}function ci(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job,l=r.stadiumBonus&&(s==="MIL"||s==="ATT")?10:0;return o+(Number(s==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+l},0),n=Vi(e);let a=i+n;return t.doubleAttack&&(a*=2),t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function pi(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job;let l=0;s==="GK"?l=Number(r.note_g)||0:s==="MIL"?l=Number(r.note_m)||0:l=Number(r.note_d)||0;const c=r.stadiumBonus&&(s==="GK"||s==="DEF"||s==="MIL")?10:0;return o+l+(r.boost||0)+c},0),n=Vi(e);let a=i+n;return t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function ui(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Yi(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const a=[...n].sort((r,s)=>{const l=t==="attack"?Be(r,"ATT"):r._line==="GK"?Be(r,"GK"):Be(r,"DEF");return(t==="attack"?Be(s,"ATT"):s._line==="GK"?Be(s,"GK"):Be(s,"DEF"))-l});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return a.slice(0,Math.min(o,a.length,3))}function qn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}function Dn(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const a=Fn(i),o=Number(i[t])||0;if(o<=0)return 0;const r=i.note_min??1,s=i.note_max??10,c=(e.current_note??a)-a;return Math.min(s,Math.max(r,o+c))}function Fn(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}const Gn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Wt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Ct=["GK","DEF","MIL","ATT"],Pn=["Tous","GK","DEF","MIL","ATT"],Rn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Mi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Nn(e){return e.length?e.reduce((t,i)=>Mi(i)>Mi(t)?i:t,e[0]):e[0]}function On(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Hn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Un(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Xt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Jt(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,a={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${qe(a,{width:140})}
  </div>`}function Si(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${qe(e,{width:140})}
  </div>`}async function Kn(e,t){const{state:i,navigate:n,toast:a,openModal:o,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await h.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:l}=await h.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter(L=>L.card_type==="player"&&L.player),d=(s||[]).filter(L=>L.card_type==="game_changer"),u=(s||[]).filter(L=>L.card_type==="formation"),f=(s||[]).filter(L=>L.card_type==="stadium"),{data:m}=await h.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(m||[]).forEach(L=>{g[L.name]=L});const{data:p}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),b={};(p||[]).forEach(L=>{b[L.id]=L}),f.forEach(L=>{L.stadium_def&&(b[L.stadium_id]=L.stadium_def)});const v=Object.keys(ai),y=Object.keys(Ae),w={};c.forEach(L=>{const M=L.player.id;w[M]=(w[M]||0)+1}),new Set(Object.keys(w).map(L=>String(L)));const $=new Set(u.map(L=>L.formation)),x=new Set(d.map(L=>L.gc_type));let R="player",I="Tous",D="",N=!1;function Z(){return[...c].sort((L,M)=>{const P=Ct.indexOf(L.player.job),H=Ct.indexOf(M.player.job);return P!==H?P-H:(L.player.surname_real||"").localeCompare(M.player.surname_real||"")})}function te(){return[...l||[]].sort((L,M)=>{const P=Ct.indexOf(L.job),H=Ct.indexOf(M.job);return P!==H?P-H:(L.surname_real||"").localeCompare(M.surname_real||"")})}function ie(){return Z().filter(L=>{const M=L.player,P=I==="Tous"||M.job===I,H=!D||`${M.firstname} ${M.surname_real}`.toLowerCase().includes(D);return P&&H})}function j(){return te().filter(L=>{const M=I==="Tous"||L.job===I,P=!D||`${L.firstname} ${L.surname_real}`.toLowerCase().includes(D);return M&&P})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${R==="player"?"var(--green)":"transparent"};
        color:${R==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${R==="formation"?"var(--green)":"transparent"};
        color:${R==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${R==="gc"?"var(--green)":"transparent"};
        color:${R==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${d.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${R==="stadium"?"#E87722":"transparent"};
        color:${R==="stadium"?"#E87722":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Stades</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${f.length})</div>
      </button>
    </div>

    <!-- Filtres -->
    <div id="col-filters" style="padding:10px 16px;background:#fff;border-bottom:1px solid var(--gray-200);display:flex;flex-direction:column;gap:8px"></div>

    <!-- Grande carte + strip -->
    <div id="col-big" style="display:flex;justify-content:center;align-items:flex-start;padding:8px 16px 4px;flex:1;overflow:visible"></div>
    <div style="flex-shrink:0;padding:0">
      <div id="col-grid" style="display:flex;overflow-x:auto;gap:8px;padding:8px 16px;-webkit-overflow-scrolling:touch;scrollbar-width:none"></div>
    </div>
  </div>`;function T(){const L=document.getElementById("col-filters");L&&(R==="player"?(L.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${D}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Pn.map(M=>`
            <button class="filter-btn" data-job="${M}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${M===I?"var(--green)":"var(--gray-200)"};
                background:${M===I?"var(--green)":"#fff"};
                color:${M===I?"#fff":"var(--gray-600)"}">
              ${M}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--gray-200)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",M=>{D=M.target.value.toLowerCase(),k()}),e.querySelectorAll(".filter-btn").forEach(M=>{M.addEventListener("click",()=>{I=M.dataset.job,T(),k()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,T(),k()})):(L.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${N?"var(--yellow)":"var(--gray-200)"};
              background:${N?"var(--yellow)":"#fff"};
              color:${N?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${N?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{N=!N,T(),k()})))}function k(){const L=document.getElementById("col-grid");L&&(R==="player"?Ee(L):R==="formation"?K(L):R==="stadium"?Y(L):V(L))}function F(L,M,P,H,U){const C=document.getElementById("col-grid"),O=document.getElementById("col-big");if(!C||!O)return;var $e=0;function _e(){const we=window.innerWidth>=768,me=document.getElementById("col-big"),Le=document.getElementById("col-grid");we&&me&&(me.style.minHeight="420px",me.style.flex="1 1 auto"),we&&Le&&(Le.style.height=Math.round(310*.76+16)+"px",Le.style.flexShrink="0",Le.style.overflowX="auto",Le.style.overflowY="hidden",Le.style.alignItems="center",Le.style.padding="8px 16px"),O.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+M(L[$e])+"</div>";var ke=O.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ke&&ke.addEventListener("click",function(){H(L[$e])}),requestAnimationFrame(function(){var he=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!he||!O)){var Se=O.clientHeight-8,Ce=O.clientWidth-24,Fe=he.offsetHeight,_=he.offsetWidth;if(Fe>0&&_>0&&Se>40){var E=we?2.2:1.6,A=Math.min(Se/Fe,Ce/_,E);he.style.transform="scale("+A.toFixed(3)+")",he.style.transformOrigin="top center"}}}),C.innerHTML=L.map(function(he,Se){var Ce=Se===$e,Fe="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Ce?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Se+'" style="'+Fe+'">'+P(he,Ce)+"</div>"}).join(""),C.querySelectorAll(".col-mini-item").forEach(function(he){he.addEventListener("click",function(){$e=Number(he.dataset.idx),_e(),he.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}_e()}function ae(L){var M=window.innerWidth>=768?.76:.54,P;if(!L||L._fake){var H=L?L.player:null;if(!H)return"";P=Si(H)}else P=Jt(L,"");return'<div style="display:inline-block;zoom:'+M+';pointer-events:none;line-height:0">'+P+"</div>"}function pe(L,M,P){M=M||100,P=P||140;var H=It[L]||{},U={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},C=Math.max(3,Math.round(M*.06)),O=Object.entries(H).map(function(_e){var we=_e[0],me=_e[1],Le=we.replace(/\d+$/,""),ke=U[Le]||"#888",he=Math.round(me.x*M),Se=Math.round(me.y*P);return'<circle cx="'+he+'" cy="'+Se+'" r="'+C+'" fill="'+ke+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),$e=Math.max(1,Math.round(M/50));return'<svg viewBox="0 0 '+M+" "+P+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+M+'" height="'+P+'" fill="#1A6B3C"/><rect x="'+Math.round(M*.2)+'" y="'+Math.round(P*.02)+'" width="'+Math.round(M*.6)+'" height="'+Math.round(P*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+$e+'"/><line x1="0" y1="'+Math.round(P*.5)+'" x2="'+M+'" y2="'+Math.round(P*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+$e+'"/><ellipse cx="'+Math.round(M*.5)+'" cy="'+Math.round(P*.5)+'" rx="'+Math.round(M*.18)+'" ry="'+Math.round(P*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+$e+'"/><rect x="'+Math.round(M*.2)+'" y="'+Math.round(P*.82)+'" width="'+Math.round(M*.6)+'" height="'+Math.round(P*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+$e+'"/>'+O+"</svg>"}function le(L,M,P){var H=P>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+P+"</div>":"",U=M?'data-form-id="'+M.id+'"':"",C=L.length>7?14:L.length>5?16:19,O=!!M;return"<div "+U+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(O?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(O?"":"filter:grayscale(1);opacity:0.5")+'">'+H+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(O?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+C+"px;font-weight:900;color:"+(O?"#1A6B3C":"#aaa")+';line-height:1">'+L+'</div></div><div style="flex:1;overflow:hidden;background:'+(O?"#1A6B3C":"#ccc")+'">'+pe(L,140,220)+"</div></div>"}function se(L,M){var P=window.innerWidth>=768?.76:.54,H=140,U=305,C=Math.round(U*.22),O=U-C,$e=L.length>7?10:13,_e=pe(L,H,O),we=M?"1.5px solid #2a7a40":"1px solid #ddd",me=M?"":"filter:grayscale(1);opacity:0.45;",Le=M?"#1A6B3C":"#bbb",ke="#fff";return'<div style="display:inline-block;zoom:'+P+';line-height:0;pointer-events:none"><div style="width:'+H+"px;height:"+U+"px;border-radius:6px;border:"+we+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+me+'"><div style="height:'+C+"px;background:"+Le+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+$e+"px;font-weight:900;color:"+ke+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(H-4)+'px">'+L+'</span></div><div style="height:'+O+'px;overflow:hidden;flex-shrink:0">'+_e+"</div></div></div>"}function Ee(L){if(N){const M=j();if(!M.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const P=M.map(H=>c.find(U=>U.player.id===H.id)||{_fake:!0,player:H,id:"fake-"+H.id});F(P,H=>H._fake?Si(H.player):Jt(H,""),H=>H._fake?ae({player:H.player,id:"x",_fake:!0}):ae(H),H=>{H._fake||Ci(H,c,w,t)})}else{const M=ie();if(!M.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const P={};M.forEach(U=>{const C=U.player.id;P[C]||(P[C]=[]),P[C].push(U)});const H=Object.values(P).map(U=>Nn(U));F(H,U=>{const C=w[U.player.id]||1,O=C>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${C}</div>`:"",_e=c.filter(we=>we.player.id===U.player.id&&we.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Jt(U,O+_e)},U=>ae(U),U=>Ci(U,c,w,t))}}function K(L){const M=N?v:[...$];if(!M.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const P=M.map(H=>({formation:H,card:u.find(U=>U.formation===H)||null,owned:$.has(H)}));F(P,({formation:H,card:U,owned:C})=>le(H,C?U:null,C?u.filter(O=>O.formation===H).length:0),({formation:H,owned:U})=>se(H,U),({card:H,owned:U})=>{U&&H&&Yn(H,u,t,o)})}function V(L){const M=Object.keys(g),P=N?M.length?M:y:[...x];if(!P.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const H=P.map(U=>({type:U,gc:Ae[U]||{icon:"⚡",desc:""},def:g[U]||null,owned:x.has(U),card:d.find(C=>C.gc_type===U)||null}));F(H,({type:U,gc:C,def:O,owned:$e,card:_e})=>{var E;const we=$e?d.filter(A=>A.gc_type===U).length:0,me=we>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${we}</div>`:"",Le=(O==null?void 0:O.gc_type)==="ultra_game_changer",ke={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},he={purple:"#b06ce0",light_blue:"#00d4ef"},Se=ke[O==null?void 0:O.color]||ke.purple,Ce=he[O==null?void 0:O.color]||he.purple,Fe=(O==null?void 0:O.effect)||C.desc||"",_=O!=null&&O.image_url?`/icons/${O.image_url}`:((E=O==null?void 0:O.club)==null?void 0:E.logo_url)||(O!=null&&O.country_code?`https://flagsapi.com/${O.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return $e&&_e?`<div data-gc-id="${_e.id}" data-gc-type="${U}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Ce};background:${Se};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Ce}66;cursor:pointer">
          ${me}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${U.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${U}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Le?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${_?`<img src="${_}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${C.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${Fe.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${U}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${C.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:U,gc:C,def:O,owned:$e})=>{const _e=window.innerWidth>=768?.76:.54,we={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},me={purple:"#9b59b6",light_blue:"#00bcd4"},Le=we[O==null?void 0:O.color]||we.purple,ke=me[O==null?void 0:O.color]||me.purple,he=O!=null&&O.image_url?`/icons/${O.image_url}`:null;return $e?`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Le};border:1px solid ${ke};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${U}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${he?`<img src="${he}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${C.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((O==null?void 0:O.effect)||C.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${C.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${U}</span></div></div>`},({type:U,owned:C,def:O})=>{C&&Vn(U,O,o)})}function Y(L){const M="#E87722",P="/";if(!f.length){L.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const H={};f.forEach(C=>{const O=C.stadium_id||"?";(H[O]=H[O]||[]).push(C)});const U=Object.entries(H).map(([C,O])=>({sid:C,def:b[C]||null,count:O.length,card:O[0]}));F(U,({def:C,count:O})=>{var ke,he;const $e=(C==null?void 0:C.name)||"?",_e=((ke=C==null?void 0:C.club)==null?void 0:ke.encoded_name)||(C==null?void 0:C.country_code)||"—",we=C!=null&&C.image_url?`${P}icons/${C.image_url}`:((he=C==null?void 0:C.club)==null?void 0:he.logo_url)||(C!=null&&C.country_code?`https://flagsapi.com/${C.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),me=we?`<img src="${we}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Le=O>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${O}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${M},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${M}66">
          ${Le}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$e}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${me}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_e}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:C,count:O})=>{var ke,he;const $e=window.innerWidth>=768?.76:.54,_e=(C==null?void 0:C.name)||"?",we=((ke=C==null?void 0:C.club)==null?void 0:ke.encoded_name)||(C==null?void 0:C.country_code)||"—",me=C!=null&&C.image_url?`${P}icons/${C.image_url}`:((he=C==null?void 0:C.club)==null?void 0:he.logo_url)||(C!=null&&C.country_code?`https://flagsapi.com/${C.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Le=me?`<img src="${me}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${$e};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${M},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${_e}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${Le}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${we}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(L=>{L.addEventListener("click",()=>{R=L.dataset.tab,I="Tous",D="",N=!1,e.querySelectorAll(".col-tab-btn").forEach(M=>{const P=M.dataset.tab===R;M.style.borderBottomColor=P?"var(--green)":"transparent",M.style.color=P?"var(--green)":"var(--gray-600)"}),T(),k()})}),T(),k()}function Vn(e,t,i){const n=Ae[e]||{icon:"⚡",desc:"Effet spécial."},a=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[t==null?void 0:t.color]||o.purple,l=r[t==null?void 0:t.color]||r.purple,c=(t==null?void 0:t.name)||e,d=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const jt=1e3;function Yn(e,t,i,n){var g,p,b;const{state:a,toast:o,closeModal:r,navigate:s,refreshProfile:l}=i,c=e.formation,d={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const v=It[c]||{},y=ai[c]||[],w=290,$=360,x=20;function R(D){const N=v[D];return N?{x:N.x*w,y:N.y*$}:null}let I=`<svg width="${w}" height="${$}" viewBox="0 0 ${w} ${$}" xmlns="http://www.w3.org/2000/svg">`;for(const[D,N]of y){const Z=R(D),te=R(N);!Z||!te||(I+=`<line x1="${Z.x}" y1="${Z.y}" x2="${te.x}" y2="${te.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const D of Object.keys(v)){const N=R(D);if(!N)continue;const Z=D.replace(/\d+/,""),te=d[Z]||"#555";I+=`<circle cx="${N.x}" cy="${N.y}" r="${x}" fill="${te}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,I+=`<text x="${N.x}" y="${N.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${Z}</text>`}return I+="</svg>",I}const f=t.filter(v=>v.formation===c);f.length;const m=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${jt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(g=document.getElementById("direct-sell-form-btn"))==null||g.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${jt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const v=f.find(w=>!w.is_for_sale)||f[0];if(!v){o("Aucune carte à vendre","error");return}await h.from("market_listings").delete().eq("card_id",v.id),await h.from("transfer_history").delete().eq("card_id",v.id);const{error:y}=await h.from("cards").delete().eq("id",v.id);if(y){o(y.message,"error");return}await h.from("users").update({credits:(a.profile.credits||0)+jt}).eq("id",a.profile.id),await l(),o(`+${jt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const v=parseInt(document.getElementById("sell-price-form").value);if(!v||v<1){o("Prix invalide","error");return}await h.from("cards").update({is_for_sale:!0,sale_price:v}).eq("id",e.id),await h.from("market_listings").insert({seller_id:a.profile.id,card_id:e.id,price:v}),o("Carte mise en vente sur le marché !","success"),r(),s("collection")}),(b=document.getElementById("cancel-sell-form-btn"))==null||b.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),r(),s("collection")})}async function Ci(e,t,i,n){var ae,pe,le,se,Ee;const{state:a,toast:o,openModal:r,closeModal:s,navigate:l,refreshProfile:c}=n,d=e.player,u=t.filter(K=>K.player.id===d.id),f=u.length,m=e.evolution_bonus||0,g=Math.max((Number(d.note_g)||0)+(d.job==="GK"||d.job2==="GK"?m:0),(Number(d.note_d)||0)+(d.job==="DEF"||d.job2==="DEF"?m:0),(Number(d.note_m)||0)+(d.job==="MIL"||d.job2==="MIL"?m:0),(Number(d.note_a)||0)+(d.job==="ATT"||d.job2==="ATT"?m:0)),p=d.rarity||"normal",{data:b}=await h.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1);((ae=b==null?void 0:b[0])==null?void 0:ae.price)??Rn[p];const v=d.rarity!=="legende";Un(d);const y=((d.rarity==="pepite"||d.rarity==="papyte")&&e.current_note!=null?e.current_note:Xt(d,d.job))+m,w=d.rarity==="pepite"||d.rarity==="papyte",$=d.job2?(w?Dn(e,On(d.job2)):Xt(d,d.job2))+(Xt(d,d.job2)>0?m:0):null;Wt[d.job],d.job2&&Wt[d.job2];const x=Gn[d.rarity]||"#ccc";Hn[d.country_code]||d.country_code;const R=e.evolution_bonus||0,D=y+R,N=$||0,Z=N>0?N+R:0,te=u.map(K=>K.id);let ie={};if(te.length){const{data:K}=await h.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",te).order("transferred_at",{ascending:!0});(K||[]).forEach(V=>{ie[V.card_id]||(ie[V.card_id]=[]),ie[V.card_id].push(V)})}const j=K=>{const V=K.transferred_at?new Date(K.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",Y=K.source==="booster"?"Booster":K.price?K.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${K.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${K.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${K.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${Y}</div>
        <div style="font-size:11px;color:var(--gray-600)">${V}</div>
      </div>
    </div>`},T=te.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${f>1?`(${f})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${u.map((K,V)=>{const Y=ie[K.id]||[],L=K.is_for_sale,M=Y.length?Y[Y.length-1]:null,H=(d.rarity==="pepite"||d.rarity==="papyte")&&K.current_note!=null?` (☆${K.current_note})`:"";return`
            <div data-card-id="${K.id}" data-card-idx="${V}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${L?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${K.id}" ${L?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${V+1}${H}${L?" 🏷️ En vente":""}</div>
                  ${M?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${M.club_name} · ${M.source==="booster"?"Booster":M.price?M.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${V}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${Y.length?`${Y.length} club${Y.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${V}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${Y.map(j).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${D}${d.job2&&N>0?` / ${Z}`:""}`:`Note actuelle : ${D}${d.job2&&N>0?` / ${Z}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${f<=1?"#ccc":"#1A6B3C"};border-color:${f<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${f<=1?"not-allowed":"pointer"}"
            ${f<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${v?`
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
      ${qe({...d,_evolution_bonus:m},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${x}">${d.rarity.toUpperCase()}</div>
          ${d.rarity==="pepite"||d.rarity==="papyte"?`
          <div style="margin-top:6px;background:${x}18;border-left:3px solid ${x};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${x};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",d.note_g],["DEF",d.note_d],["MIL",d.note_m],["ATT",d.note_a]].map(([K,V])=>{const Y=Wt[K],L=K==="GK"?"#fff":Y,M=K===d.job||K===d.job2,P=(Number(V)||0)+(M&&R>0?R:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${Y};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${L};font-family:Arial Black,Arial;line-height:1">${P}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${L}">${K}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${f}</div>
        </div>
      </div>
    </div>
    ${T}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(pe=document.getElementById("close-detail"))==null||pe.addEventListener("click",s);let k=new Set;const F=()=>{const K=k.size,V=document.getElementById("sell-action-panel");if(!V)return;V.style.display=K>0?"block":"none",document.getElementById("sell-selected-count").textContent=K;const Y=document.getElementById("evolve-btn");Y&&(Y.textContent=`⬆️ Évoluer ${K>1?"(+"+K+")":""}`)};document.querySelectorAll(".expl-check").forEach(K=>{K.addEventListener("change",()=>{const V=K.dataset.id;K.checked?k.add(V):k.delete(V);const Y=K.closest(".exemplaire-row");Y&&(Y.style.borderColor=K.checked?"#1A6B3C":"#eee"),F()})}),document.querySelectorAll(".exemplaire-row").forEach(K=>{K.addEventListener("click",V=>{if(V.target.closest("button")||V.target.tagName==="INPUT")return;const Y=K.querySelector(".expl-check");Y&&!Y.disabled&&(Y.checked=!Y.checked,Y.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(K=>{K.addEventListener("click",V=>{V.stopPropagation();const Y=document.querySelector(`.expl-hist[data-hist="${K.dataset.idx}"]`);Y&&(Y.style.display=Y.style.display==="none"?"flex":"none")})}),(le=document.getElementById("evolve-btn"))==null||le.addEventListener("click",async()=>{if(f<=1)return;const K=[...k];if(!K.length)return;if(k.has(e.id)){const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",U.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(U),U.querySelector("#err-close").addEventListener("click",()=>U.remove()),U.addEventListener("click",C=>{C.target===U&&U.remove()});return}const V=K.filter(U=>U!==e.id),Y=d.rarity==="legende"?2:1;if((V.length||1)*Y,!(!V.length&&K.length===1&&K[0]===e.id)){if(!V.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(U=>{const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",C.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${d.firstname} ${d.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${V.length}</strong> copie${V.length>1?"s":""} sacrifiée${V.length>1?"s":""}<br>
            📈 Note : <strong>${y+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${y+(e.evolution_bonus||0)+V.length*Y}</strong>
            ${$&&$>0?`<br>📈 Note 2 : <strong>${$+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${$+(e.evolution_bonus||0)+V.length*Y}</strong>`:""}
            ${d.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${Y} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(C),C.querySelector("#sac-cancel").addEventListener("click",()=>{C.remove(),U(!1)}),C.querySelector("#sac-ok").addEventListener("click",()=>{C.remove(),U(!0)}),C.addEventListener("click",O=>{O.target===C&&(C.remove(),U(!1))})}))return;if(V.length){await h.from("market_listings").delete().in("card_id",V),await h.from("deck_cards").delete().in("card_id",V),await h.from("transfer_history").delete().in("card_id",V),await h.from("decks").update({stadium_card_id:null}).in("stadium_card_id",V);const{error:U}=await h.from("cards").delete().in("id",V);if(U){o("Erreur suppression : "+U.message,"error");return}}const M=(e.evolution_bonus||0)+V.length*Y,{error:P}=await h.from("cards").update({evolution_bonus:M}).eq("id",e.id);if(P){o("Erreur évolution : "+P.message,"error");return}const H=y+M;o(`⬆️ ${d.firstname} ${d.surname_real} : note ${y+e.evolution_bonus||y} → ${H}${V.length?` · ${V.length} copie${V.length>1?"s":""} sacrifiée${V.length>1?"s":""}`:""} !`,"success",4e3),s(),l("collection")}),(se=document.getElementById("market-sell-btn"))==null||se.addEventListener("click",async()=>{var P;const K=[...k];if(!K.length){o("Sélectionne au moins un exemplaire","warning");return}const V=parseInt((P=document.getElementById("sell-market-price"))==null?void 0:P.value);if(!V||V<1){o("Prix invalide","error");return}const{error:Y}=await h.from("cards").update({is_for_sale:!0,sale_price:V}).in("id",K);if(Y){o(Y.message,"error");return}const L=K.map(H=>({seller_id:a.profile.id,card_id:H,price:V,status:"active"})),{error:M}=await h.from("market_listings").insert(L);M&&console.warn("[Market] insert listings:",M.message),o(`${K.length} carte${K.length>1?"s":""} mise${K.length>1?"s":""} en vente à ${V.toLocaleString("fr")} cr. chacune !`,"success"),s(),l("collection")}),(Ee=document.getElementById("cancel-sell-btn"))==null||Ee.addEventListener("click",async()=>{await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await h.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),l("collection")})}const gt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Wn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function rt(e,t,i,n,a){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",a)}function Lt(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",a=e.face.replace(/^public\//,"").replace(/^\//,"");return n+a}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Ft(e,t){var o,r;const i=e.player,n=e.evolution_bonus||0,a=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real||i.surname_encoded||i.firstname||"?",country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&a>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&a>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&a>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&a>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Tt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(a=>{Array.isArray(a)&&a.forEach(o=>{const r=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(r||s)&&(o.stadiumBonus=!0)})}),e}function Gt(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(a=>{if(!a)return;const o=i&&String(a.club_id)===String(i),r=n&&String(a.country_code)===String(n);(o||r)&&(a.stadiumBonus=!0)}),e}function mt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Wi(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Pt(e,t){const i=gt[t]||gt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===r).sort((c,d)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(d.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:r})),l=mt(s.length);s.forEach((c,d)=>{c._col=l[d]}),n[r]=s}return n}const o=[...e];for(const r of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[r];c++){let d=o.findIndex(u=>u.job===r);if(d===-1&&(d=o.findIndex(u=>u.job2===r)),d===-1&&(d=0),o[d]){const u={...o[d],_line:r};s.push(u),o.splice(d,1)}}const l=mt(s.length);s.forEach((c,d)=>{c._col=l[d]}),n[r]=s}return n}function He(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ue(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Xn(e,t,i){const a=new Set,o=t.filter(d=>{const u=d.gc_type||d.id;return a.has(u)?!1:(a.add(u),!0)});let r=[];function s(d,u){const f=d._gcDef,m={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},g={purple:"#9b59b6",light_blue:"#00bcd4"},p=m[f==null?void 0:f.color]||m.purple,b=g[f==null?void 0:f.color]||g.purple;return`<div class="gc-select-card" data-id="${d.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":b};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((f==null?void 0:f.name)||d.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(f==null?void 0:f.name)||d.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${f!=null&&f.image_url?`<img src="/icons/${f.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((f==null?void 0:f.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const l=d=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(d)};function c(){var u,f,m;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const d=r.length>0;e.innerHTML=`
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
        ${o.map(g=>{const p=r.find(b=>b.gc_type===g.gc_type);return s(g,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(g=>{g.addEventListener("click",()=>{const p=g.dataset.id,b=o.find(y=>y.id===p);if(!b)return;const v=r.findIndex(y=>y.gc_type===b.gc_type);v>-1?r.splice(v,1):r.length<3&&r.push(b),c()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{d&&l(r)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>l([])),(m=e.querySelector("#gc-reset"))==null||m.addEventListener("click",()=>{r.length&&(r=[],c())})}c()}function Jn(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function Qn(e,t,i){const{state:n,navigate:a}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await h.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){rt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>a("decks"));return}const r=o.map(f=>f.id),{data:s}=await h.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),l=[...new Set((s||[]).filter(f=>{var m,g;return((m=f.card)==null?void 0:m.card_type)==="stadium"&&((g=f.card)==null?void 0:g.stadium_id)}).map(f=>f.card.stadium_id))],c={};if(l.length){const{data:f}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",l);(f||[]).forEach(m=>{c[m.id]=m}),(s||[]).forEach(m=>{var g,p;((g=m.card)==null?void 0:g.card_type)==="stadium"&&((p=m.card)!=null&&p.stadium_id)&&(m.card._stadiumDef=c[m.card.stadium_id]||null)})}let d=0;function u(){var x,R,I,D,N,Z,te;const f=o[d],m=(s||[]).filter(ie=>ie.deck_id===f.id),g=m.filter(ie=>{var j;return ie.is_starter&&((j=ie.card)==null?void 0:j.player)}).map(ie=>Ft(ie.card,ie.position)),p=m.find(ie=>{var j;return((j=ie.card)==null?void 0:j.card_type)==="formation"}),b=f.formation||((x=p==null?void 0:p.card)==null?void 0:x.formation)||"4-4-2";let v=g.length>=11?Pt(g,b):null,y=((R=f.stadium_card)==null?void 0:R.stadium_def)||null;y&&v&&(v=Tt(v,y));const w=g.length>=11;He(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Jn(t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===0?"0.1":"0.3"});color:${d===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${f.name}</div>
            <div style="font-size:11px;opacity:.6">${b} · ${g.length}/11${f.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===o.length-1?"0.1":"0.3"});color:${d===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
        </div>
        ${y?`
        <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),transparent);border-top:1px solid rgba(232,119,34,0.3)">
          <span>🏟️</span>
          <span style="font-size:12px;font-weight:700">${y.name}</span>
          <span style="font-size:11px;color:#FFD700;margin-left:auto">+10 aux joueurs ${((I=y.club)==null?void 0:I.encoded_name)||y.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:visible;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${v?'<div class="deck-preview-wrap" style="overflow:visible;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${g.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((ie,j)=>`<div style="width:6px;height:6px;border-radius:50%;background:${j===d?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${w?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${w?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${w?"pointer":"default"}">
          ${w?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:10px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function ie(){const j=e.querySelector(".deck-preview-wrap"),T=e.querySelector("#deck-swipe-zone");if(!j||!T||!v)return;const k=Math.max(200,T.clientHeight-40),F=Math.max(200,T.clientWidth-16),ae=T.clientWidth>=900,pe=ae?Math.min(F,Math.round(k*.95)):F,le=Ri(),se=Math.max(52,Math.round(pe*(le.cw_ratio||.18)));if(k<220||pe<220){requestAnimationFrame(ie);return}const Ee=ae?null:Math.round(se*(le.mob_pad_ratio||.55)),K=ae?le.margin_pc||0:le.margin_mob||0;j.innerHTML=xt(v,b,null,[],pe,k,[],Ee),j.style.cssText=`width:${pe}px;height:${k}px;overflow:visible;margin:${K}px auto 0`;const V=j.querySelector("svg");V&&(V.style.cssText="display:block;width:100%;height:100%",V.setAttribute("preserveAspectRatio",ae?"xMidYMid meet":"none"))})),(D=document.getElementById("prev-deck"))==null||D.addEventListener("click",()=>{d>0&&(d--,u())}),(N=document.getElementById("next-deck"))==null||N.addEventListener("click",()=>{d<o.length-1&&(d++,u())}),(Z=document.getElementById("validate-deck"))==null||Z.addEventListener("click",()=>{if(!w)return;const ie=t.state.params||{};t.navigate("match",{...ie,matchMode:ie.matchMode||i,deckId:f.id})}),(te=document.getElementById("cancel-deck-select"))==null||te.addEventListener("click",()=>{Ue(e),a("home")});const $=document.getElementById("deck-swipe-zone");if($){let ie=0,j=0;$.addEventListener("touchstart",T=>{ie=T.touches[0].clientX,j=T.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",T=>{const k=T.changedTouches[0].clientX-ie,F=T.changedTouches[0].clientY-j;Math.abs(k)<40||Math.abs(k)<Math.abs(F)||(k<0&&d<o.length-1?(d++,u()):k>0&&d>0&&(d--,u()))},{passive:!0})}}u()}function Je(e,t=44,i=58,n=null){return qe(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function pt(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((o,r)=>{const s=o._line||o.job||"MIL";if(a+=qe(o,{width:40,role:s,extraNote:o.boost||0}),r<n.length-1){const l=At(o,n[r+1]);a+=`<div style="width:7px;height:3px;background:${l==="#ff3333"||l==="#cc2222"?"rgba(255,255,255,0.12)":l};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function ji(e){var a;const i=(a=Ri().position_overrides)==null?void 0:a[e];if(!i)return;const n=It[e];n&&Object.entries(i).forEach(([o,r])=>{n[o]&&(n[o]={...n[o],...r})})}function zt(e,t,i,n,a=310,o=310,r=[],s=null){ji(t),ji(t);const l=It[t]||{},c=mn(t)||ai[t]||[],d={},u=["ATT","MIL","DEF","GK"];for(const y of u)(e[y]||[]).forEach(($,x)=>{d[`${y}${x+1}`]=$});function f(y){const w=l[y];return w?{x:w.x*a,y:w.y*o}:null}let m="";for(const[y,w]of c){const $=f(y),x=f(w);if(!$||!x)continue;const R=d[y],I=d[w],D=At(R,I),N=D==="#00ff88"||D==="#FFD700",Z=D==="#00ff88"?_svgCfg.link_width_green||3.5:D==="#FFD700"?_svgCfg.link_width_yellow||3.5:_svgCfg.link_width_red||3.5,te=_svgCfg.link_opacity||.85;N?(m+=`<line x1="${$.x.toFixed(1)}" y1="${$.y.toFixed(1)}" x2="${x.x.toFixed(1)}" y2="${x.y.toFixed(1)}"
        stroke="${D}" stroke-width="${Z*3}" stroke-linecap="round" opacity="0.22"/>`,m+=`<line x1="${$.x.toFixed(1)}" y1="${$.y.toFixed(1)}" x2="${x.x.toFixed(1)}" y2="${x.y.toFixed(1)}"
        stroke="${D}" stroke-width="${Z}" stroke-linecap="round" opacity="${te}"/>`):m+=`<line x1="${$.x.toFixed(1)}" y1="${$.y.toFixed(1)}" x2="${x.x.toFixed(1)}" y2="${x.y.toFixed(1)}"
        stroke="${D}" stroke-width="${Z}" stroke-linecap="round" opacity="${te*.8}"/>`}const g=Math.max(52,Math.round(a*.18)),p=Math.round(g*657/507);for(const[y,w]of Object.entries(d)){const $=f(y);if(!$||!w)continue;const x=y.replace(/[0-9]/g,""),R=r.includes(w.cardId),I=i==="attack"&&(["MIL","ATT"].includes(x)||R)&&!w.used||i==="defense"&&["GK","DEF","MIL"].includes(x)&&!w.used,D=n.includes(w.cardId);let N=w.boost||0;w.stadiumBonus&&(i==="attack"&&(x==="ATT"||x==="MIL")||i==="defense"&&(x==="GK"||x==="DEF"||x==="MIL")?N+=10:i||(N+=10));const Z=Math.round($.x-g/2),te=Math.round($.y-p/2);if(w.used){m+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${Z}" y="${te}" width="${g}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${w.cardId}" data-role="${x}" style="cursor:pointer"/>`;continue}const ie=qe({...w,_evolution_bonus:0},{width:g,showStad:!0,stadDef:null,role:x,extraNote:N}),j=D?"outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;opacity:0.75;":"";m+=`<foreignObject x="${Z-2}" y="${te-30}" width="${g+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="${j}position:relative">
        ${ie}
      </div>
    </foreignObject>`,I&&(m+=`<rect x="${Z}" y="${te}" width="${g}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${D?"selected":""}" data-card-id="${w.cardId}" data-role="${x}" style="cursor:pointer"/>`)}const b=typeof window<"u"&&window.innerWidth<900,v=s!==null?s:Math.round(b?g*(_svgCfg.mob_pad_ratio||.55):Math.max(g*(_svgCfg.pad_ratio||.7),_svgCfg.pad_min||80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-v} ${-v} ${a+v*2} ${o+v*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${m}
  </svg>`}function xt(e,t,i,n,a=300,o=300,r=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${zt(e,t,i,n,a,o,r,s)}
  </div>`}async function Mt(e,t,i,n){var R;const{state:a,navigate:o,toast:r}=t;He(e);const s=a.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return Qn(e,t,i);const l=s.deckId;let c,d,u,f;try{const I=await Promise.all([h.from("decks").select("formation,name,stadium_card_id").eq("id",l).single(),h.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",l).order("slot_order")]);c=I[0].data,u=I[0].error,d=I[1].data,f=I[1].error}catch(I){console.error("[Match] Exception chargement deck:",I),rt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),rt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const m=(d||[]).filter(I=>{var D;return I.is_starter&&((D=I.card)==null?void 0:D.player)}).map(I=>Ft(I.card,I.position)),g=(d||[]).filter(I=>{var D;return!I.is_starter&&((D=I.card)==null?void 0:D.player)}).map(I=>Ft(I.card,I.position));if(m.length<11){rt(e,"⚠️",`Deck incomplet (${m.length}/11).`,"Compléter",()=>o("decks"));return}const p=(d||[]).find(I=>{var D;return((D=I.card)==null?void 0:D.card_type)==="formation"}),b=(c==null?void 0:c.formation)||((R=p==null?void 0:p.card)==null?void 0:R.formation)||"4-4-2",{data:v,error:y}=await h.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",a.profile.id).eq("card_type","game_changer"),{data:w}=await h.from("gc_definitions").select("*").eq("is_active",!0),$=(v||[]).map(I=>({...I,_gcDef:(w==null?void 0:w.find(D=>D.name===I.gc_type||D.id===I.gc_definition_id))||null}));let x=null;if(c!=null&&c.stadium_card_id){const{data:I}=await h.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(I!=null&&I.stadium_id){const{data:D}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",I.stadium_id).single();x=D||null}}n({deckId:l,formation:b,starters:m,subsRaw:g,gcCardsEnriched:$,gcDefs:w||[],stadiumDef:x})}const Rt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Bi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Zn(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}async function ei(e,t){const{state:i,navigate:n,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await h.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
  <div style="height:100%;overflow-y:auto;padding-bottom:80px;background:var(--page-bg)">
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!r)return;const{data:s,error:l}=await h.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(l){a(l.message,"error");return}a("Deck créé !","success"),qi(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>qi(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",r.dataset.name);if(!s||s===r.dataset.name)return;const{error:l}=await h.from("decks").update({name:s}).eq("id",r.dataset.rename);if(l){a(l.message,"error");return}a("Deck renommé !","success"),ei(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await h.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:s}=await h.from("decks").delete().eq("id",r.dataset.delete);if(s){a(s.message,"error");return}a("Deck supprimé.","success"),ei(e,t)})})}async function qi(e,t,i){const{state:n,toast:a}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await h.from("decks").select("*").eq("id",e).single(),{data:r,error:s}=await h.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id);s&&console.error("[deck] cards query error:",s.message);const l=[...new Set((r||[]).filter(y=>y.card_type==="stadium"&&y.stadium_id).map(y=>y.stadium_id))];let c=[];if(l.length){const{data:y}=await h.from("stadium_definitions").select("id, name, club_id, country_code, image_url, club:clubs(encoded_name, logo_url)").in("id",l);c=y||[]}const d=(r||[]).filter(y=>y.card_type==="player"&&y.player),u=(r||[]).filter(y=>y.card_type==="formation"),f=(r||[]).filter(y=>y.card_type==="stadium");let m={};if(c.forEach(y=>{m[y.id]=y}),l.length&&Object.keys(m).length<l.length){const{data:y}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",l);(y||[]).forEach(w=>{m[w.id]=w})}const g=u.map(y=>y.formation).filter(Boolean),{data:p}=await h.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let b=o.formation||"4-4-2";g.length>0&&!g.includes(b)&&(b=g[0]);const v={deckId:e,name:o.name,formation:b,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:u,stadiumCards:f,stadDefMap:m,availableFormations:g};(p||[]).forEach(y=>{y.is_starter?v.slots[y.position]=y.card_id:v.subs.includes(y.card_id)||v.subs.push(y.card_id)}),fi(t,v,i)}function fi(e,t,i){var c,d,u,f,m,g,p;const{navigate:n}=i;Rt[t.formation];const a=io(t.formation),o=a.filter(b=>t.slots[b]).length;t.availableFormations.length>0?t.availableFormations:Object.keys(Rt);const r=t.subs.map(b=>t.playerCards.find(v=>v.id===b)).filter(Boolean);[...Object.values(t.slots),...t.subs];const s=((c=t.stadiumCards)==null?void 0:c.find(b=>b.id===t.stadiumCardId))||null,l=s&&((d=t.stadDefMap)==null?void 0:d[s.stadium_id])||null;e.innerHTML=`
  <div id="deck-builder-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

    <!-- Header -->
    <div id="deck-top-bar" style="flex-shrink:0">
      <div style="display:flex;align-items:center;gap:8px;padding:6px 12px;background:rgba(0,0,0,0.4)">
        <button id="builder-back" style="background:transparent;border:none;color:#fff;font-size:20px;cursor:pointer;padding:0 4px">←</button>
        <div style="flex:1">
          <div style="font-size:15px;font-weight:900">${t.name}</div>
          <div style="font-size:11px;opacity:0.6">${o}/11 · ${t.subs.length}/5 rempl.</div>
        </div>
        <button id="save-deck" ${o<11?"disabled":""} style="padding:6px 14px;border-radius:8px;border:none;background:${o<11?"rgba(255,255,255,0.08)":"#1A6B3C"};color:${o<11?"rgba(255,255,255,0.3)":"#fff"};font-size:12px;font-weight:700;cursor:${o<11?"default":"pointer"}">
          ${o<11?`⚠️ ${11-o} manquant(s)`:"💾 Enregistrer"}
        </button>
      </div>
      ${l?`
      <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),transparent);border-top:1px solid rgba(232,119,34,0.3)">
        <span>🏟️</span>
        <span style="font-size:12px;font-weight:700">${l.name}</span>
        <span style="font-size:11px;color:#FFD700;margin-left:auto">+10 aux joueurs ${((u=l.club)==null?void 0:u.encoded_name)||l.country_code||""}</span>
      </div>`:""}
    </div>

    <!-- Terrain : prend tout l'espace -->
    <div id="deck-field-zone" style="flex:1;min-height:0;overflow:visible;position:relative;display:flex;align-items:center;justify-content:center">
      <div class="deck-field-wrap" style="overflow:visible"></div>
    </div>

    <!-- Barre du bas : remplaçants + stade + formation -->
    <div id="deck-bottom-bar" style="flex-shrink:0;background:rgba(0,0,0,0.35);border-top:1px solid rgba(255,255,255,0.08);padding:8px 10px">
      <div style="display:flex;gap:8px;align-items:center">

        <!-- Remplaçants -->
        <div style="flex:1;min-width:0">
          <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Remplaçants (${t.subs.length}/5)</div>
          <div style="display:flex;gap:4px;align-items:center;overflow-x:auto;padding-bottom:2px" id="subs-list">
            ${r.map(b=>{const v={...b.player,_evolution_bonus:b.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0">
                ${qe({...v},{width:44,showStad:!0,stadDef:l})}
                <button data-remove-sub="${b.id}" style="position:absolute;top:-4px;right:-4px;width:14px;height:14px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${t.subs.length<5?'<div id="add-sub-btn" style="width:34px;height:44px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
          </div>
        </div>

        <!-- Stade -->
        <div style="flex-shrink:0;text-align:center">
          <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">🏟️</div>
          <div id="stad-btn" style="cursor:pointer">
            ${s&&l?`
            <div style="width:44px;height:56px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
              ${(f=l.club)!=null&&f.logo_url?`<img src="${l.club.logo_url}" style="width:24px;height:24px;object-fit:contain">`:'<span style="font-size:18px">🏟️</span>'}
              <span style="font-size:7px;font-weight:700;color:#4fc3f7;text-align:center">${(l.name||"").slice(0,8)}</span>
            </div>`:`
            <div style="width:44px;height:56px;border:2px dashed rgba(255,165,0,0.4);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center">
              <span style="font-size:20px">🏟️</span>
              <span style="font-size:9px;color:rgba(255,255,255,0.4)">+</span>
            </div>`}
          </div>
        </div>

        <!-- Formation -->
        <div style="flex-shrink:0;text-align:center">
          <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">⚽</div>
          <div id="formation-btn" style="cursor:pointer;width:50px;height:56px;border-radius:6px;background:#1a3a6b;border:2px solid #555;display:flex;align-items:center;justify-content:center">
            <span style="font-size:10px;font-weight:900;color:#fff;text-align:center">${t.formation}</span>
          </div>
        </div>

      </div>
    </div>

  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const b=e.querySelector(".deck-field-wrap"),v=e.querySelector("#deck-field-zone");if(!b||!v)return;const y=Math.max(200,v.clientHeight-40),w=Math.max(200,v.clientWidth-16),$=v.clientWidth>=900,x=$?Math.min(w,Math.round(y*.95)):w,R=Math.max(52,Math.round(x*.18)),I=$?null:Math.round(R*.55),D={GK:[],DEF:[],MIL:[],ATT:[]};a.forEach(Z=>{var k,F;const te=t.slots[Z];if(!te)return;const ie=(k=t.playerCards)==null?void 0:k.find(ae=>ae.id===te);if(!(ie!=null&&ie.player)){console.warn("[deck builder] card not found:",te,"playerCards:",(F=t.playerCards)==null?void 0:F.length);return}const j=Z.replace(/[0-9]/g,"");D[j]||(D[j]=[]);const T=Ft(ie,j);if(l){const ae=l.club_id&&String(T.club_id)===String(l.club_id),pe=l.country_code&&T.country_code===l.country_code;(ae||pe)&&(T.stadiumBonus=!0)}D[j].push(T)}),b.innerHTML=xt(D,t.formation,null,[],x,y,[],I),b.style.cssText=`width:${x}px;height:${y}px;overflow:visible;margin:${$?0:30}px auto 0`;const N=b.querySelector("svg");N&&(N.style.cssText="display:block;width:100%;height:100%",N.setAttribute("preserveAspectRatio",$?"xMidYMid meet":"none")),b.querySelectorAll("[data-pos]").forEach(Z=>{Z.style.cursor="pointer",Z.addEventListener("click",()=>{const te=Z.dataset.pos;openSlotSelector(te,t,e,i)})})})),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("save-deck").addEventListener("click",()=>to(t,i)),(m=document.getElementById("formation-btn"))==null||m.addEventListener("click",()=>{openFormationModal(t,e,i)}),(g=document.getElementById("stad-btn"))==null||g.addEventListener("click",()=>{openStadiumSelector(t,e,i)}),e.querySelectorAll("[data-remove-sub]").forEach(b=>{b.addEventListener("click",()=>{t.subs=t.subs.filter(v=>v!==b.dataset.removeSub),fi(e,t,i)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{eo(t,e,i)})}function eo(e,t,i){var l;const{openModal:n,closeModal:a}=i,o=new Set;Object.values(e.slots).filter(Boolean).forEach(c=>{var u;const d=e.playerCards.find(f=>f.id===c);(u=d==null?void 0:d.player)!=null&&u.id&&o.add(d.player.id)}),e.subs.forEach(c=>{var u;const d=e.playerCards.find(f=>f.id===c);(u=d==null?void 0:d.player)!=null&&u.id&&o.add(d.player.id)});const r=new Set,s=e.playerCards.filter(c=>{var d,u,f;return o.has((d=c.player)==null?void 0:d.id)||r.has((u=c.player)==null?void 0:u.id)?!1:(r.add((f=c.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?s.map(c=>{var m;const d=c.player,u=Zn(d),f=(d.job==="GK"?d.note_g:d.job==="DEF"?d.note_d:d.job==="MIL"?d.note_m:d.note_a)+(card.evolution_bonus||0);return`<div class="player-option" data-card-id="${c.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Bi[d.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${d.firstname} ${d.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${d.job} · ${d.country_code} · ${((m=d.clubs)==null?void 0:m.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${Bi[d.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(l=document.getElementById("close-sub-selector"))==null||l.addEventListener("click",a),document.querySelectorAll(".player-option").forEach(c=>{c.addEventListener("click",()=>{e.subs.push(c.dataset.cardId),a(),fi(t,e,i)})})}async function to(e,t){const{state:i,toast:n,navigate:a}=t,o=e.formationCards.find(l=>l.formation===e.formation),r=(o==null?void 0:o.id)||e.formationCardId;await h.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await h.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([l,c],d)=>{s.push({deck_id:e.deckId,card_id:c,position:l,is_starter:!0,slot_order:d})}),e.subs.forEach((l,c)=>{s.push({deck_id:e.deckId,card_id:l,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:l}=await h.from("deck_cards").insert(s);if(l){n(l.message,"error");return}}n("Deck enregistré ✅","success"),a("decks")}function io(e){const t=Rt[e]||Rt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Xi(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await h.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let a=n;if(e){const r=n.filter(s=>s.max_per_user!=null);if(r.length){const{data:s}=await h.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(c=>c.id)),l={};(s||[]).forEach(c=>{l[c.booster_id]=(l[c.booster_id]||0)+1}),a=n.filter(c=>c.max_per_user==null?!0:(l[c.id]||0)<c.max_per_user)}}if(!a.length)return[];const{data:o}=await h.from("booster_drop_rates").select("*").in("booster_id",a.map(r=>r.id)).order("sort_order");return a.map(r=>({...r,rates:(o||[]).filter(s=>s.booster_id===r.id)}))}async function no(e,t){const{data:i}=await h.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await h.from("booster_claims").insert({user_id:e,booster_id:t})}function oo(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,a)=>n+Number(a.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Ji=()=>Object.keys(It),ro=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ti={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function ao(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return qe({...t,_evolution_bonus:i},{width:140})}function Qi(e){var a;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((a=Object.entries(t).sort((o,r)=>r[1]-o[1])[0])==null?void 0:a[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function so(e,{state:t,navigate:i,toast:n}){var u,f,m;const a=((u=t.profile)==null?void 0:u.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Xi((f=t.user)==null?void 0:f.id)).map(Qi)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}o.length||(o=ro.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const r=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(g=>g.data||[]),s=new Set(r.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),l=new Set(r.filter(g=>g.card_type==="formation").map(g=>g.formation)),c=new Set(r.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),d={};for(const g of o){if(g.allow_duplicates!==!1||!((m=g.rates)!=null&&m.length))continue;const p=[...new Set((g.rates||[]).map(v=>v.card_type))];let b=!1;for(const v of p)if(v==="stadium"){const{data:y}=await h.from("stadium_definitions").select("id");if((y||[]).some(w=>!s.has(w.id))){b=!0;break}}else if(v==="game_changer"){const{data:y}=await h.from("gc_definitions").select("name").eq("is_active",!0);if((y||[]).some(w=>!c.has(w.name))){b=!0;break}}else if(v==="formation"){const{FORMATION_LINKS:y}=await Ni(async()=>{const{FORMATION_LINKS:w}=await import("./svg-config-DC1JcKBi.js").then($=>$.w);return{FORMATION_LINKS:w}},__vite__mapDeps([0,1]));if(Object.keys(y).some(w=>!l.has(w))){b=!0;break}}else{b=!0;break}b||(d[g.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${a.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(g=>{const p=g.cost===0||a>=g.cost,b=d[g.id]===!0;return`<div class="booster-card ${!p||b?"disabled":""}" data-booster="${g.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${g.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${g.img}" alt="${g.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${g.name}</div>
            <div class="desc">${g.sub}</div>
            <div class="cost">${g.costLabel}</div>
            ${p?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${b?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const p=o.find(b=>b.id===g.dataset.booster);if(p){g.style.opacity="0.5",g.style.pointerEvents="none";try{await lo(p,{state:t,toast:n,navigate:i,container:e})}catch(b){n(b.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",p=>{p.stopPropagation();const b=o.find(v=>v.id===g.dataset.boosterId);fo(b)})})}async function lo(e,{state:t,toast:i,navigate:n,container:a}){var u,f;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await mo();const{data:o}=await h.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((o||[]).filter(m=>m.card_type==="player").map(m=>m.player_id)),s=new Set((o||[]).filter(m=>m.card_type==="formation").map(m=>m.formation));let l=[],c=null;try{if((u=e.rates)!=null&&u.length)l=await ii(t.profile,e);else{const m=e.type||"player";m==="player"?l=await Zi(t.profile,e.cardCount,e.cost):m==="game_changer"?l=await en(t.profile,e.cardCount,e.cost):m==="formation"?l=await tn(t.profile,e.cost):l=await ii(t.profile,e)}}catch(m){c=m.message||String(m),console.error("[Booster] Erreur:",m)}if(l!=null&&l.length&&e._boosterId&&await no(t.user.id,e._boosterId),!(l!=null&&l.length)){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",m.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(m),(f=m.querySelector("#anim-close-err"))==null||f.addEventListener("click",()=>m.remove());return}l.forEach(m=>{m.card_type==="player"&&m.player?m.isDuplicate=r.has(m.player.id):m.card_type==="formation"&&(m.isDuplicate=s.has(m.formation))});const{data:d}=await h.from("users").select("*").eq("id",t.profile.id).single();d&&(t.profile=d),nn(l,e,n)}function co(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ye(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function po(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>Ye(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>Ye(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&Ye(n)>=6),i.length||(i=e.filter(n=>Ye(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&Ye(n)>=1&&Ye(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ii(e,t){if(t.cost>0){const{error:f}=await h.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(f)throw f}const i=t.allow_duplicates!==!1;let n=[];const{data:a,error:o}=await h.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:f}=await h.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=f||[]}else n=a||[];const r=new Set(n.filter(f=>f.card_type==="player").map(f=>f.player_id)),s=new Set(n.filter(f=>f.card_type==="formation").map(f=>f.formation)),l=new Set(n.filter(f=>f.card_type==="game_changer").map(f=>f.gc_type)),c=new Set(n.filter(f=>f.card_type==="stadium").map(f=>f.stadium_id).filter(Boolean)),d=new Set,u=[];for(let f=0;f<(t.cardCount||5);f++){const m=oo(t.rates);if(m){if(m.card_type==="player"){const g=I=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[I]||I,p=m.rarity?g(m.rarity):null;let b=h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(b=b.eq("rarity",p));const{data:v}=await b;let y=v||[];if((m.note_min||m.note_max)&&(y=y.filter(I=>{const D=Math.max(Number(I.note_g)||0,Number(I.note_d)||0,Number(I.note_m)||0,Number(I.note_a)||0);return(!m.note_min||D>=m.note_min)&&(!m.note_max||D<=m.note_max)})),y.length||(m.note_min||m.note_max?(y=v||[],console.warn("[Booster] Aucun joueur avec note",m.note_min,"-",m.note_max,"— fallback rareté uniquement")):y=v||[]),!y.length)continue;let w=y.filter(I=>!d.has(I.id));if(i)w.length||(w=y);else if(w=w.filter(I=>!r.has(I.id)),!w.length)continue;const $=w[Math.floor(Math.random()*w.length)];d.add($.id);const x=r.has($.id),{data:R}=await h.from("cards").insert({owner_id:e.id,player_id:$.id,card_type:"player"}).select().single();R&&(u.push({...R,player:$,isDuplicate:x}),h.rpc("record_transfer",{p_card_id:R.id,p_player_id:$.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(m.card_type==="game_changer"){const{data:g}=await h.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=g!=null&&g.length?g:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],b=i?p:p.filter($=>!l.has($.name));if(!i&&!b.length)continue;const y=b[Math.floor(Math.random()*b.length)].name,{data:w}=await h.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:y}).select().single();w&&u.push(w)}else if(m.card_type==="formation"){const g=Ji(),p=i?g:g.filter(w=>!s.has(w));if(!i&&!p.length)continue;const b=p[Math.floor(Math.random()*p.length)],v=s.has(b),{data:y}=await h.from("cards").insert({owner_id:e.id,card_type:"formation",formation:b}).select();y!=null&&y[0]&&u.push({...y[0],isDuplicate:v})}else if(m.card_type==="stadium"){const{data:g,error:p}=await h.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(g!=null&&g.length)){console.warn("[Booster] Aucun stade en DB");continue}const b=i?g:g.filter($=>!c.has($.id));if(!i&&!b.length)continue;const v=b[Math.floor(Math.random()*b.length)],{data:y,error:w}=await h.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:v.id}).select("id,card_type,stadium_id").single();if(w){console.error("[Booster] insert stadium card:",w.message);continue}y&&u.push({...y,rarity:"normal",_stadiumDef:v})}}}return u}async function Zi(e,t,i){if(i>0){const{error:c}=await h.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const a=n.filter(c=>c.job==="GK"),o=n.filter(c=>c.job!=="GK"),r=!e.first_booster_opened&&a.length>0,s=[];for(let c=0;c<t;c++){const d=c===0&&r?a:c===0?o:n,u=co(),f=po(d,u);f&&s.push(f)}r&&await h.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:l}=await h.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(l||[]).forEach((c,d)=>{h.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[d].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,d)=>({...l[d],player:c}))}async function en(e,t,i){const{error:n}=await h.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:a}=await h.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=a!=null&&a.length?a:Object.keys(ti).map(d=>({name:d,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const d=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:d.name,gc_definition_id:d.id||null}}),{data:s,error:l}=await h.from("cards").insert(r).select();return l&&console.error("[Booster GC] Erreur insert:",l.message,l),(s||[]).map(d=>{const u=a==null?void 0:a.find(f=>f.name===d.gc_type||f.id===d.gc_definition_id);return{...d,_gcDef:u||null}})}async function tn(e,t){const{error:i}=await h.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await h.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),a=new Set((n||[]).map(d=>d.formation)),o=Ji(),r=o[Math.floor(Math.random()*o.length)],s=a.has(r),{data:l,error:c}=await h.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(l||[]).map(d=>({...d,isDuplicate:s}))}function nn(e,t,i,n=null){var ie,j;if(!e||e.length===0){const T=document.createElement("div");T.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",T.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(T),(ie=T.querySelector("#anim-close-err"))==null||ie.addEventListener("click",()=>T.remove());return}e=[...e].sort((T,k)=>{const F=T.player?Ye(T.player):-1;return(k.player?Ye(k.player):-1)-F});const a=document.createElement("div");a.id="booster-anim-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let o=!1;const r=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let l=!1;const c=T=>T.touches&&T.touches[0]?T.touches[0].clientX:T.clientX;function d(T){o||(l=!0,s.style.opacity="1",u(T))}function u(T){if(!l||o)return;const k=r.getBoundingClientRect(),F=c(T)-k.left,ae=Math.max(0,Math.min(1,F/k.width));s.style.width=ae*k.width+"px",ae>=.82&&m()}function f(){o||(l=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function m(){var k;if(o)return;o=!0,l=!1,s.style.width="100%",s.style.opacity="1",(k=document.getElementById("cut-flash"))==null||k.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const T=document.getElementById("cut-hint");T&&(T.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",v(0)},620)}r.addEventListener("pointerdown",d),window.addEventListener("pointermove",u),window.addEventListener("pointerup",f),r.addEventListener("touchstart",d,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",f);let g=0,p=!1;const b=new Set;function v(T){g=T,document.getElementById("reveal-phase").style.display="flex",y(),w(T,0),D()}function y(){const T=document.getElementById("card-dots");T&&(T.innerHTML=e.map((k,F)=>`<div class="card-dot" data-i="${F}" style="width:8px;height:8px;border-radius:50%;background:${F===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),T.querySelectorAll(".card-dot").forEach(k=>k.addEventListener("click",()=>x(parseInt(k.dataset.i)))))}function w(T,k){var Y,L;const F=e[T],ae=document.getElementById("card-counter"),pe=document.getElementById("card-track");ae&&(ae.textContent=`Carte ${T+1} / ${e.length}`);const le=document.getElementById("reveal-btns");le&&(le.style.display=T===e.length-1?"flex":"none");const se=F.card_type==="player"&&((Y=F.player)==null?void 0:Y.rarity)==="legende",Ee=!b.has(T);b.add(T);let K=0;if(F.card_type==="player"&&F.player){const M=F.player,P=M.job||"ATT";K=Number(P==="GK"?M.note_g:P==="DEF"?M.note_d:P==="MIL"?M.note_m:M.note_a)||0}const V=M=>{pe.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${se?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${uo(F)}</div>
          ${F.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const P=document.getElementById("current-card-wrap");k!==0?(P.style.transition="none",P.style.transform=`translateX(${k>0?100:-100}%)`,requestAnimationFrame(()=>{P.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",P.style.transform="translateX(0)"})):P.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),M||se?Z():te(),y()};Ee&&(((L=F.player)==null?void 0:L.rarity)==="legende"||K>=8)&&F.card_type==="player"&&F.player?$(F,()=>V(!0)):V(!1)}function $(T,k){var we;p=!0;const F=T.player,ae=`https://flagsapi.com/${F.country_code}/flat/64.png`,pe=(we=F.clubs)==null?void 0:we.logo_url,le=F.face?"/"+F.face.replace(/^public\//,"").replace(/^\//,""):null,se=F.job||"ATT",Ee=Number(se==="GK"?F.note_g:se==="DEF"?F.note_d:se==="MIL"?F.note_m:F.note_a)||0,K=T.evolution_bonus||0,V=Ee+K,Y=F.rarity==="legende",L=V>=18,M=document.getElementById("walkout-overlay"),P=document.getElementById("walkout-stage");if(!M||!P){p=!1,k();return}let H=null;Y&&(H=new Audio("/sounds/Legendary.mp3"),H.volume=.8,H.play().catch(()=>{})),M.style.display="flex";const U=()=>{const me=P.firstElementChild;me&&(me.classList.remove("wo-in"),me.classList.add("wo-out"))},C=1800,O=400;P.innerHTML=`<img class="wo-in" src="${ae}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(U,C),setTimeout(()=>{var me;P.innerHTML=pe?`<img class="wo-in" src="${pe}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((me=F.clubs)==null?void 0:me.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},C+O),setTimeout(U,C*2+O),setTimeout(()=>{P.innerHTML=le?`<img class="wo-in" src="${le}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(C+O)*2),setTimeout(U,(C+O)*2+C);const _e=L?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[se]||"#fff";setTimeout(()=>{P.innerHTML=`<div class="wo-in" style="
        font-size:${L?"120px":"90px"};font-weight:900;color:${_e};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${_e}, 0 0 60px ${_e};
        ${L?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${V}
      </div>`,L&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(C+O)*3),setTimeout(U,(C+O)*3+C),setTimeout(()=>{M.style.display="none",P.innerHTML="",p=!1,H&&!Y&&H.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),k()},(C+O)*4)}function x(T){if(p||T<0||T>=e.length||T===g)return;const k=T>g?1:-1;g=T,w(T,k)}function R(){x(g+1)}function I(){x(g-1)}function D(){const T=document.getElementById("card-viewport");if(!T||T._swipeBound)return;T._swipeBound=!0;let k=0,F=0,ae=0,pe=!1;const le=Y=>Y.touches?Y.touches[0].clientX:Y.clientX,se=Y=>Y.touches?Y.touches[0].clientY:Y.clientY,Ee=Y=>{pe=!0,k=le(Y),F=se(Y),ae=0},K=Y=>{if(!pe)return;ae=le(Y)-k;const L=se(Y)-F;if(Math.abs(ae)<Math.abs(L))return;const M=document.getElementById("current-card-wrap");M&&(M.style.transition="none",M.style.transform=`translateX(${ae*.6}px) rotate(${ae*.02}deg)`)},V=()=>{if(!pe)return;pe=!1;const Y=document.getElementById("current-card-wrap"),L=55;ae<=-L&&g<e.length-1?R():ae>=L&&g>0?I():Y&&(Y.style.transition="transform .2s ease",Y.style.transform="translateX(0)")};T.addEventListener("pointerdown",Ee),T.addEventListener("pointermove",K),T.addEventListener("pointerup",V),T.addEventListener("pointercancel",V),T.addEventListener("touchstart",Ee,{passive:!0}),T.addEventListener("touchmove",K,{passive:!0}),T.addEventListener("touchend",V),T.addEventListener("click",Y=>{if(Math.abs(ae)>8)return;const L=T.getBoundingClientRect();Y.clientX-L.left>L.width/2?R():I()})}let N=null;function Z(){const T=document.getElementById("fireworks-canvas");if(!T)return;T.width=window.innerWidth,T.height=window.innerHeight;const k=T.getContext("2d"),F=[];function ae(){const le=Math.random()*T.width,se=Math.random()*T.height*.6,Ee=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],K=Ee[Math.floor(Math.random()*Ee.length)];for(let V=0;V<60;V++){const Y=Math.PI*2/60*V,L=2+Math.random()*5;F.push({x:le,y:se,vx:Math.cos(Y)*L,vy:Math.sin(Y)*L,alpha:1,color:K,size:2+Math.random()*3})}}ae(),N=setInterval(ae,600);function pe(){if(document.getElementById("fireworks-canvas")){k.clearRect(0,0,T.width,T.height);for(let le=F.length-1;le>=0;le--){const se=F[le];if(se.x+=se.vx,se.y+=se.vy+.08,se.vy*=.98,se.alpha-=.018,se.alpha<=0){F.splice(le,1);continue}k.globalAlpha=se.alpha,k.fillStyle=se.color,k.beginPath(),k.arc(se.x,se.y,se.size,0,Math.PI*2),k.fill()}k.globalAlpha=1,(N!==null||F.length>0)&&requestAnimationFrame(pe)}}pe()}function te(){N!==null&&(clearInterval(N),N=null);const T=document.getElementById("fireworks-canvas");T&&T.getContext("2d").clearRect(0,0,T.width,T.height)}if(n){const T=document.getElementById("reveal-btns");T&&(T.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(j=document.getElementById("reveal-next"))==null||j.addEventListener("click",()=>{te(),a.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{te(),a.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{te(),a.remove(),i("boosters")})}function uo(e){var t,i,n,a;if(e.card_type==="player"&&e.player)return ao(e);if(e.card_type==="game_changer"){const o=e._gcDef,r=(o==null?void 0:o.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},l={purple:"#b06ce0",light_blue:"#00d4ef"},c=s[o==null?void 0:o.color]||s.purple,d=l[o==null?void 0:o.color]||l.purple,u=(o==null?void 0:o.name)||e.gc_type||"Game Changer",f=(o==null?void 0:o.effect)||((t=ti[e.gc_type])==null?void 0:t.desc)||"",m=o!=null&&o.image_url?`/icons/${o.image_url}`:null,g=((i=ti[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${c};border-radius:14px;border:3px solid ${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${d}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${u.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${m?`<img src="${m}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${g}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${f.slice(0,55)}</div>
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
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const a=document.getElementById("mw-ad-cd");a&&(a.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function xo(e,{state:t,navigate:i,toast:n,refreshProfile:a}){var f,m;const{data:o}=await h.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let r=Array.isArray((f=t.profile)==null?void 0:f.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await h.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await Xi()).find(b=>(b.name||"").toLowerCase().includes("new player"));p&&(s=Qi(p))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const l=r.length;let c=0;e.innerHTML=`
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
  </div>`;const d=async()=>{await h.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function u(){var y;if(c>=l||!r.length){await h.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),a&&await a(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const g=r[0],{data:p}=await h.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let b=[];try{if(g.type==="formation")b=await tn(t.profile,0);else if(g.type==="game_changer")b=await en(t.profile,g.count||3,0);else if(s&&((y=s.rates)!=null&&y.length)){const w={...s,cost:0,cardCount:g.count||s.cardCount||5};b=await ii(t.profile,w),g.guaranteeGK&&!t.profile.first_booster_opened&&(b.some(x=>x.player&&x.player.job==="GK")||await bo(t.profile,b),await h.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else b=await Zi(t.profile,g.count||5,0)}catch(w){n(w.message||"Erreur ouverture booster","error");return}r.shift(),c++,await d();const v=g.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:g.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${l})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};nn(b,v,i,()=>{u()})}(m=document.getElementById("onboard-start"))==null||m.addEventListener("click",()=>u())}async function bo(e,t){try{const{data:i}=await h.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],a=t.findIndex(r=>r.player);if(a===-1)return;const o=t[a];await h.from("cards").update({player_id:n.id}).eq("id",o.id),t[a]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}function We(){return Math.min(window.innerWidth-40,860)}function ot(){return Math.round(We()*1.1)}function yo(e){var a,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((a=e.clubs)==null?void 0:a.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:Lt(e)}}function on(e){var o,r,s;if(!e)return"";const t=l=>l?qe({...l,_evolution_bonus:0},{width:52,role:l._line||l.job,showStad:!!l.stadiumBonus,extraNote:l.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
    <div style="padding:8px 12px;border-left:3px solid ${((o=e.type)==null?void 0:o.includes("goal"))?"#22c55e":"rgba(255,255,255,0.15)"};margin-bottom:4px">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:4px">${n} ${e.title||e.text||""}</div>
      ${(r=e.homePlayers)!=null&&r.length?`
        <div style="display:flex;gap:3px;flex-wrap:wrap;margin-bottom:4px">
          ${e.homePlayers.map(t).join("")}
        </div>`:""}
      ${(s=e.aiPlayers)!=null&&s.length?`
        <div style="display:flex;gap:3px;flex-wrap:wrap">
          ${e.aiPlayers.map(t).join("")}
        </div>`:""}
      ${e.text&&e.title?`<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:4px">${e.text}</div>`:""}
    </div>`}function at(e,t,i,n,a){const o=document.getElementById("goal-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="goal-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(l=>qe({...l,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:l._line||l.job,showStad:!!l.stadiumBonus})).join("");if(r.innerHTML=`
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
      }`,document.head.appendChild(l)}setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),a==null||a()},400)},1800)}function ho(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="sub-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),r=e?qe({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"",s=t?qe({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"";a.innerHTML=`
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
    </div>`,document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),i==null||i()},400)},1600)}function vt(e,t="rgba(0,0,0,0.85)",i=2200){const n=document.getElementById("game-toast");n&&n.remove();const a=document.createElement("div");if(a.id="game-toast",a.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${t};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,a.textContent=e,!document.getElementById("game-toast-style")){const o=document.createElement("style");o.id="game-toast-style",o.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(o)}document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.3s",setTimeout(()=>a.remove(),300)},i)}function Nt(e,t){return e.reduce((i,n)=>i+milNoteWithBonus(n,t),0)}function Ot(e){let t=0;for(let i=0;i<e.length-1;i++){const n=At(e[i],e[i+1]);n==="#00ff88"?t+=2:n==="#FFD700"&&(t+=1)}return t}function Di(e,t,i,n,a){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,r)=>{const s=r<e.length-1?At(o,e[r+1]):null,l=!s||s==="#ff3333"||s==="#cc2222",c=s==="#00ff88"?"+2":s==="#FFD700"?"+1":"";return milNoteWithBonus(o,a),o.stadiumBonus||a&&(a.club_id&&String(o.club_id)===String(a.club_id)||a.country_code&&(o.country_code,a.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${r}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${qe({...o,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:a,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${r<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${r}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${l?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${l?"none":`0 0 8px ${s}`}">
            ${c?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${c}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${Nt(e,a)} + ${Ot(e)} liens = <b style="color:#fff">${Nt(e,a)+Ot(e)}</b>
      </div>
    </div>`}async function vo(e,t){const{state:i}=t,a=(i.params||{}).matchMode||"vs_ai_easy",o=a.replace("vs_ai_",""),r=a;await Mt(e,t,a,async({deckId:s,formation:l,starters:c,subsRaw:d,gcCardsEnriched:u,gcDefs:f,stadiumDef:m})=>{try{let g=Pt(c,l);m&&(g=Tt(g,m),Gt(d,m));const p=await wo(l,o),b=p.lines||p,v=async y=>{try{const{data:w,error:$}=await h.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:s,status:"in_progress"}).select().single();if($){console.error("[MatchIA] Erreur création match:",$),rt(e,"⚠️","Impossible de créer le match ("+$.message+").","Retour",()=>t.navigate("home"));return}const x=p.stadiumDef||null;x&&b&&(Tt(b,x),Gt(p.subs||[],x));const R={gcDefs:f||[],matchId:w==null?void 0:w.id,mode:r,difficulty:o,formation:l,homeTeam:g,aiTeam:b,homeSubs:d,subsUsed:0,maxSubs:Math.min(d.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:x,homeScore:0,aiScore:0,gcCards:y,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};ko(e,R,t)}catch(w){console.error("[MatchIA] Exception launchMatch:",w),rt(e,"⚠️","Erreur au lancement du match : "+w.message,"Retour",()=>t.navigate("home"))}};if(!u.length){v([]);return}Xn(e,u,v)}catch(g){console.error("[MatchIA] Exception setup:",g),rt(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function wo(e,t){var b;const{data:i}=await h.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:_o(e),subs:[],gcCards:[],stadiumDef:null};const n=gt[e]||gt["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function r(v,y,w){var $,x;return o.add(v.id),{cardId:"ai-"+v.id+"-"+w,id:v.id,firstname:v.firstname,name:v.surname_real,country_code:v.country_code,club_id:v.club_id,job:v.job,job2:v.job2,note_g:Number(v.note_g)||0,note_d:Number(v.note_d)||0,note_m:Number(v.note_m)||0,note_a:Number(v.note_a)||0,rarity:v.rarity,skin:v.skin,hair:v.hair,hair_length:v.hair_length,clubName:(($=v.clubs)==null?void 0:$.encoded_name)||null,clubLogo:((x=v.clubs)==null?void 0:x.logo_url)||null,boost:0,used:!1,_line:y}}for(const v of["GK","DEF","MIL","ATT"]){const y=i.filter(I=>I.job===v&&!o.has(I.id)),w=i.filter(I=>I.job!==v&&!o.has(I.id)),$=[...y,...w],x=[];for(let I=0;I<n[v];I++){const D=$[I];D&&x.push(r(D,v,I))}const R=mt(x.length);x.forEach((I,D)=>{I._col=R[D]}),a[v]=x}const l=i.filter(v=>!o.has(v.id)).slice(0,5).map((v,y)=>r(v,v.job,100+y)),u=Object.keys(Ae).sort(()=>Math.random()-.5).slice(0,3).map((v,y)=>{var w,$;return{id:"ai-gc-"+y,gc_type:v,name:((w=Ae[v])==null?void 0:w.name)||v,icon:(($=Ae[v])==null?void 0:$.icon)||"⚡"}}),f=Object.values(a).flat(),m={};f.forEach(v=>{v.club_id&&(m[v.club_id]=(m[v.club_id]||0)+1)});const g=(b=Object.entries(m).sort((v,y)=>y[1]-v[1])[0])==null?void 0:b[0];let p=null;if(g){const{data:v}=await h.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",g).single();v&&(p={club_id:v.id,country_code:null,name:v.encoded_name+" Stadium",club:{encoded_name:v.encoded_name,logo_url:v.logo_url}})}return{lines:a,subs:l,gcCards:u,stadiumDef:p}}function _o(e){const t=gt[e]||gt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let a=0;for(const o of["GK","DEF","MIL","ATT"]){const r=[];for(let l=0;l<t[o];l++){const c=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+a,id:"fake-"+a,firstname:"IA",name:n[a%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?c:2,note_d:o==="DEF"?c:2,note_m:o==="MIL"?c:2,note_a:o==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:o}),a++}const s=mt(r.length);r.forEach((l,c)=>{l._col=s[c]}),i[o]=r}return i}function ko(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:100%;max-width:900px;margin:0 auto">${zt(t.aiTeam,t.formation,null,[],We(),ot())}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>$o(e,t,i),5e3)}const Qe=e=>yo(e);function $o(e,t,i){const n=t.homeTeam.MIL||[],a=t.aiTeam.MIL||[],o=t.stadiumDef||null,r=t.aiStadiumDef||null,s=Nt(n,o)+Ot(n),l=Nt(a,r)+Ot(a),c=s>=l;e.innerHTML=`
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

    ${Di(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${Di(a,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const d=()=>{const g=(p,b)=>e.querySelectorAll(p).forEach((v,y)=>{setTimeout(()=>{v.style.opacity="1",v.style.transform="translateY(0) scale(1)"},b+y*90)});g(".duel-card-home",150),g(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,b)=>{setTimeout(()=>{p.style.opacity="1"},b*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(b=>b.style.opacity="1")},1250),setTimeout(()=>{u("score-home",s,800),u("score-ai",l,800)},1500)};function u(g,p,b){const v=document.getElementById(g);if(!v)return;const y=performance.now(),w=$=>{const x=Math.min(1,($-y)/b);v.textContent=Math.round(p*(1-Math.pow(1-x,3))),x<1?requestAnimationFrame(w):v.textContent=p};requestAnimationFrame(w)}requestAnimationFrame(d),t.attacker=c?"home":"ai";const f=c?Wi():null;c&&(t.boostCard={value:f}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(g=>Qe(g)),aiPlayers:a.map(g=>Qe(g)),homeTotal:s,aiTotal:l,text:`Duel milieu : ${t.clubName} ${s} – ${l} IA → ${c?t.clubName+" attaque":"IA attaque"}`});const m=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Te(e,t,i),t.attacker==="ai"&&setTimeout(()=>Ht(e,t,i),800)};setTimeout(()=>{const g=document.getElementById("score-home"),p=document.getElementById("score-ai"),b=document.getElementById(c?"duel-row-home":"duel-row-ai"),v=document.getElementById(c?"duel-row-ai":"duel-row-home"),y=c?g:p,w=c?p:g;y&&(y.style.fontSize="80px",y.style.color=c?"#FFD700":"#ff6b6b",y.style.animation="duelPulse .5s ease"+(c?", duelGlow 1.5s ease infinite .5s":"")),w&&(w.style.opacity="0.25"),setTimeout(()=>{b&&(b.style.transformOrigin="center",b.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",b.style.zIndex="5"),setTimeout(()=>{var x;const $=document.getElementById("duel-shock");if($){const R=(x=v||b)==null?void 0:x.getBoundingClientRect(),I=e.querySelector(".match-screen").getBoundingClientRect();R&&($.style.top=R.top-I.top+R.height/2+"px"),$.style.animation="shockwave .5s ease-out forwards"}v&&(v.style.transformOrigin="center",v.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var x;const $=document.getElementById("duel-finale");$&&($.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${c?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${c?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${f}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,$.style.transition="opacity .45s ease",$.style.opacity="1",$.style.pointerEvents="auto",(x=document.getElementById("start-match-btn"))==null||x.addEventListener("click",m))},600)},700)},2800)}function Te(e,t,i){var R,I,D,N,Z,te,ie,j,T;const n=t.selected.map(k=>k.cardId),a=t.usedSubIds||[],o=t.homeSubs.filter(k=>!a.includes(k.cardId)),s=Object.values(t.homeTeam).flat().filter(k=>k.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,l=!["GK","DEF","MIL","ATT"].some(k=>(t.aiTeam[k]||[]).some(F=>!F.used)),c=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(k=>!k.used),d=t.phase==="attack"&&l&&c.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(k=>!k.used).map(k=>k.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",f=t.phase==="attack",m=t.phase==="defense",g=t.phase==="finished",b=(t.homeSubs||[]).filter(k=>!(t.usedSubIds||[]).includes(k.cardId)).length>0&&t.subsUsed<t.maxSubs,v=f&&c.length===0&&!b,y=t.gcCards.filter(k=>!t.usedGc.includes(k.id)),w=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const F=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${pt((F.players||[]).map(ae=>({...ae,used:!1})),"#ff6b6b",F.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const F=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${pt((F.players||[]).map(ae=>({...ae,used:!1})),"#00ff88",F.total)}
          </div>`}const k=t.log[t.log.length-1];return k?'<div style="padding:2px 4px">'+on(k)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const k=window.innerWidth>=700,F=(L,M,P)=>{var Se,Ce;const H=(t.gcDefs||[]).find(Fe=>Fe.name===L.gc_type),U={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[H==null?void 0:H.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",C={purple:"#b06ce0",light_blue:"#00d4ef"}[H==null?void 0:H.color]||"#b06ce0",O=(H==null?void 0:H.name)||L.gc_type,$e=(H==null?void 0:H.effect)||((Se=Ae[L.gc_type])==null?void 0:Se.desc)||"",_e=H!=null&&H.image_url?`/icons/${H.image_url}`:null,we=((Ce=Ae[L.gc_type])==null?void 0:Ce.icon)||"⚡",me=Math.round(P*.22),Le=Math.round(P*.22),ke=P-me-Le,he=O.length>12?7:9;return`<div class="gc-mini" data-gc-id="${L.id}" data-gc-type="${L.gc_type}"
          style="box-sizing:border-box;width:${M}px;height:${P}px;border-radius:10px;border:2px solid ${C};background:${U};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${me}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${he}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${M-6}px">${O}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${ke}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${_e?`<img src="${_e}" style="max-width:${M-10}px;max-height:${ke-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ke*.55)}px">${we}</span>`}
          </div>
          <div style="height:${Le}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${$e.slice(0,38)}</span>
          </div>
        </div>`},ae=(L,M)=>{var P;return`<div id="boost-card"
          style="box-sizing:border-box;width:${L}px;height:${M}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(M*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(M*.2)}px">⚡</div>
            <div style="font-size:${Math.round(M*.09)}px;color:#000;font-weight:900">+${(P=t.boostCard)==null?void 0:P.value}</div>
          </div>`},pe=(L,M)=>M?ae(130,175):F(L,130,175),le=(L,M)=>M?ae(68,95):F(L,68,95),se=k?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ee=g?`<button id="btn-results" style="${se};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${se};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:v?`<button id="btn-pass" style="${se};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:f?`<button id="btn-action" style="${se};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:m?`<button id="btn-action" style="${se};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${se};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,K=f||m?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",V=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${k?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(L=>`<div class="sub-btn-col" data-sub-id="${L.cardId}" style="cursor:pointer;flex-shrink:0">${Je(L,76,100)}</div>`).join("")}
      </div>`,Y=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${xt(t.homeTeam,t.formation,t.phase,n,We(),ot(),d)}
        </div>
      </div>`;return k?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${V}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Y}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ee}${K}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${y.map(L=>pe(L,!1)).join("")}
            ${w?pe(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${xt(t.homeTeam,t.formation,t.phase,n,We(),ot(),d)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${y.map(L=>le(L,!1)).join("")}
            ${w?le(null,!0):""}
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
          <div>${Ee}${K}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(k=>{var F,ae,pe;if(k.type==="duel"){const le=k.isGoal,se=k.homeScored?"#FFD700":le?"#ff6b6b":"rgba(255,255,255,0.3)",Ee=k.homeScored?"⚽ BUT !":le?"⚽ BUT IA !":(F=k.homePlayers)!=null&&F.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${le?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${se};margin-bottom:4px">
                <div style="font-size:9px;color:${se};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Ee}</div>
                ${(ae=k.homePlayers)!=null&&ae.length?`<div style="margin-bottom:3px">${pt(k.homePlayers,"rgba(255,255,255,0.7)",k.homeTotal)}</div>`:""}
                ${(pe=k.aiPlayers)!=null&&pe.length?`<div style="opacity:0.7">${pt(k.aiPlayers,"#ff6b6b",k.aiTotal)}</div>`:""}
              </div>`}return k.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${k.outPlayer?Je({...k.outPlayer,used:!0,_line:k.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${k.inPlayer?Je({...k.inPlayer,_line:k.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:k.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${k.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${k.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function $(){const k=e.querySelector(".match-screen");if(!k)return;const F=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);k.style.bottom="auto",k.style.height=F+"px",k.style.minHeight=F+"px",k.style.maxHeight=F+"px",k.style.overflow="hidden";const ae=e.querySelector("#mobile-action-bar"),pe=e.querySelector("#mobile-play-area");ae&&pe&&(pe.style.paddingBottom=ae.offsetHeight+"px")}if($(),setTimeout($,120),setTimeout($,400),setTimeout($,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",$),window.visualViewport.addEventListener("scroll",$)),window.addEventListener("resize",$)),function(){const F=e.querySelector(".terrain-wrapper svg");F&&(F.removeAttribute("width"),F.removeAttribute("height"),F.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",F.setAttribute("viewBox","-26 -26 352 352"),F.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const k=e.querySelector(".terrain-wrapper svg");k&&(k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let k=!1,F=30;const ae=()=>document.getElementById("match-timer"),pe=()=>{const le=ae();if(!le)return;const se=String(Math.floor(F/60)).padStart(2,"0"),Ee=String(F%60).padStart(2,"0");le.textContent=` ${se}:${Ee}`,le.style.color=k?"#ff2222":"#ff9500",le.style.fontWeight="900"};pe(),t._timerInt=setInterval(()=>{if(F--,F<0)if(!k)k=!0,F=15,pe();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const le=document.createElement("div");le.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",le.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(le),setTimeout(()=>{le.remove(),_t(e,t,i)},2500)}else pe()},1e3)}(R=document.getElementById("match-quit"))==null||R.addEventListener("click",()=>{Ue(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,_t(e,t,i))}),(I=document.getElementById("view-ai"))==null||I.addEventListener("click",()=>Bo(t,i)),(D=document.getElementById("toggle-history"))==null||D.addEventListener("click",()=>{var k;(k=document.getElementById("match-history-panel"))==null||k.classList.add("open")}),(N=document.getElementById("close-history"))==null||N.addEventListener("click",()=>{var k;(k=document.getElementById("match-history-panel"))==null||k.classList.remove("open")}),(Z=document.getElementById("btn-action"))==null||Z.addEventListener("click",()=>{t.selected.length!==0&&(f?Lo(e,t,i):m&&To(e,t,i))}),(te=document.getElementById("btn-results"))==null||te.addEventListener("click",()=>_t(e,t,i)),(ie=document.getElementById("btn-pass"))==null||ie.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Te(e,t,i),setTimeout(()=>Ht(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(k=>{k.addEventListener("click",()=>Eo(k,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(k=>{k.addEventListener("click",()=>Qt(e,t,i,null,k.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(k=>{k.addEventListener("click",()=>Mo(k.dataset.gcId,k.dataset.gcType,e,t,i))}),(j=document.getElementById("boost-card"))==null||j.addEventListener("click",()=>jo(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(k=>{k.addEventListener("click",()=>Qt(e,t,i,k.dataset.subId))}),(T=document.getElementById("sub-btn-main"))==null||T.addEventListener("click",()=>Qt(e,t,i))}function Eo(e,t,i,n){const a=e.dataset.cardId,o=e.dataset.role,r=t.selected.findIndex(s=>s.cardId===a);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(l=>l.cardId===a);s&&t.selected.push({...s,_role:o,_line:o})}Te(i,t,n)}function gi(e,t,i){e.matchId&&h.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Lo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),gi(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(s=>!s.used)),a=t.selected.map(r=>{const s=(t.homeTeam[r._role]||[]).find(c=>c.cardId===r.cardId)||r,l=n&&["GK","DEF"].includes(r._role);return{...s,_line:r._role,...l?{note_a:Math.max(1,Number(s.note_a)||0)}:{}}}),o=ci(a,t.modifiers.home);t.pendingAttack={...o,players:[...a],side:"home"},t.selected.forEach(r=>{const s=(t.homeTeam[r._role]||[]).find(l=>l.cardId===r.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${o.total} (base ${o.base}${o.links?` +${o.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Te(e,t,i),setTimeout(()=>Ao(e,t,i),1200)}function To(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),gi(t,i,i.state.profile.id);const n=t.stadiumDef||null,a=t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(u=>u.cardId===l.cardId)||l,d=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:l._role,stadiumBonus:d}}),o=pi(a,t.modifiers.home);t.selected.forEach(l=>{const c=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId);c&&(c.used=!0)});const r=ui(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(l=>Qe(l)),homePlayers:t.selected.map(l=>{const c=(t.homeTeam[l._role]||[]).find(d=>d.cardId===l.cardId)||l;return Qe(c)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(r.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(r.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Te(e,t,i),at(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ut(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ut(e,t,i,"home-attack")}function zo(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(l=>l.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(l=>!e.aiUsedSubIds.includes(l.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],a=i.find(l=>l.job===n.job)||i[0],o={...a,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],s=r.findIndex(l=>l.cardId===n.cardId);s!==-1&&(r[s]=o),e.aiUsedSubIds.push(a.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${a.firstname} ${a.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function Io(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(a=>!e.aiUsedGc.includes(a.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Ae[i.gc_type],i.gc_type){case"Boost+2":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Ht(e,t,i){gi(t,i,null),zo(t),Io(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],a=Yi(n,"attack",t.difficulty);if(!a.length){Dt(e,t,i);return}const o=ci(a,t.modifiers.ai);t.pendingAttack={...o,players:a,side:"ai"},a.forEach(c=>{c.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${a.map(c=>c.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(c=>!c.used),l=(t.homeSubs||[]).filter(c=>!(t.usedSubIds||[]).includes(c.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!l){t.aiScore++;const c={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:a.map(d=>Qe(d)),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(c),t.pendingAttack=null,Te(e,t,i),at(c.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ut(e,t,i,"home-attack")});return}t.phase="defense",Te(e,t,i)}function Ao(e,t,i){var c,d;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],a=Yi(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((c=t.pendingAttack)==null?void 0:c.players)||[]).map(m=>Qe(m)),homeTotal:((d=t.pendingAttack)==null?void 0:d.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Te(e,t,i),at(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{ut(e,t,i,"ai-attack")});return}const r=a.length>0?pi(a,t.modifiers.ai).total:0;a.forEach(u=>{u.used=!0});const s=ui(t.pendingAttack.total,r,t.modifiers.ai),l={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>Qe(u)),aiPlayers:a.map(u=>Qe(u)),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(s.shielded)l.text="🛡️ Bouclier IA !",t.log.push(l);else if(s.goal){t.homeScore++,l.isGoal=!0,l.homeScored=!0,l.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(l),t.modifiers.ai={},t.pendingAttack=null,Te(e,t,i),at(l.homePlayers,t.homeScore,t.aiScore,!0,()=>{ut(e,t,i,"ai-attack")});return}else l.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(l);t.modifiers.ai={},t.pendingAttack=null,ut(e,t,i,"ai-attack")}function ut(e,t,i,n){if(t.round++,rn(t)){_t(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){Dt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Dt(e,t,i);return}setTimeout(()=>Ht(e,t,i),100);return}t.phase="attack",Te(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){Dt(e,t,i);return}t.phase="ai-attack",Te(e,t,i),setTimeout(()=>Ht(e,t,i),800)}}function rn(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used));return!t&&!i}function Dt(e,t,i){rn(t)?_t(e,t,i):(t.phase="attack",Te(e,t,i))}function Qt(e,t,i,n=null,a=null){var m,g;if(t.phase!=="attack"){vt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){vt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,b])=>(b||[]).filter(v=>v.used).map(v=>({...v,_line:v._line||p}))),r=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){vt("Aucun joueur utilisé à remplacer");return}if(!r.length){vt("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===a));const l=((m=o[s])==null?void 0:m._line)||((g=o[s])==null?void 0:g.job);let c=n?Math.max(0,r.findIndex(p=>p.cardId===n)):Math.max(0,r.findIndex(p=>p.job===l)),d=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function f(){var x,R,I,D,N,Z;const p=o[s],b=r[c],v=Math.min(130,Math.round((window.innerWidth-90)/2)),y=Math.round(v*1.35),w=te=>`background:rgba(255,255,255,0.12);border:none;color:${te?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${te?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${w(c===0)}" ${c===0?"disabled":""}>▲</button>
        <div>${b?Je({...b,used:!1,boost:0},v,y):"<div>—</div>"}</div>
        <button id="in-down" style="${w(c>=r.length-1)}" ${c>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${c+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${w(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?Je({...p,used:!1,boost:0},v,y):"<div>—</div>"}</div>
        <button id="out-down" style="${w(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(x=u.querySelector("#sub-close"))==null||x.addEventListener("click",()=>u.remove()),(R=u.querySelector("#out-up"))==null||R.addEventListener("click",()=>{s>0&&(s--,f())}),(I=u.querySelector("#out-down"))==null||I.addEventListener("click",()=>{s<o.length-1&&(s++,f())}),(D=u.querySelector("#in-up"))==null||D.addEventListener("click",()=>{c>0&&(c--,f())}),(N=u.querySelector("#in-down"))==null||N.addEventListener("click",()=>{c<r.length-1&&(c++,f())});const $=(te,ie,j,T)=>{const k=u.querySelector("#"+te);if(!k)return;let F=0;k.addEventListener("touchstart",ae=>{F=ae.touches[0].clientY},{passive:!0}),k.addEventListener("touchend",ae=>{const pe=ae.changedTouches[0].clientY-F;if(Math.abs(pe)<30)return;const le=ie();pe<0&&le<T-1?(j(le+1),f()):pe>0&&le>0&&(j(le-1),f())},{passive:!0})};$("in-panel",()=>c,te=>c=te,r.length),$("out-panel",()=>s,te=>s=te,o.length),(Z=u.querySelector("#sub-confirm"))==null||Z.addEventListener("click",te=>{if(te.preventDefault(),te.stopPropagation(),d)return;d=!0;const ie=o[s],j=r[c];if(!ie||!j)return;let T=null,k=-1;for(const[ae,pe]of Object.entries(t.homeTeam)){const le=(pe||[]).findIndex(se=>se.cardId===ie.cardId);if(le!==-1){T=ae,k=le;break}}if(k===-1||!T){vt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const F={...j,_line:T,_col:ie._col||0,used:!1,boost:0};t.homeTeam[T].splice(k,1,F),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(j.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ie.name,firstname:ie.firstname,note:Be(ie,T),portrait:Lt(ie),job:ie.job,country_code:ie.country_code,rarity:ie.rarity,clubName:ie.clubName,clubLogo:ie.clubLogo},inPlayer:{name:j.name,firstname:j.firstname,note:Be(j,T),portrait:Lt(j),job:j.job,country_code:j.country_code,rarity:j.rarity,clubName:j.clubName,clubLogo:j.clubLogo},text:`🔄 ${j.firstname} ${j.name} remplace ${ie.firstname} ${ie.name}`}),u.remove(),ho(ie,j,()=>Te(e,t,i))})}document.body.appendChild(u),f()}function Mo(e,t,i,n,a){var g,p;const o=(n.gcDefs||[]).find(b=>b.name===t),r=Ae[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",l={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",c=(o==null?void 0:o.name)||t,d=(o==null?void 0:o.effect)||r.desc,u=o!=null&&o.image_url?`/icons/${o.image_url}`:null,f=r.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${l};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${l}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${c.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${c}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${f}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${d}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(m),(g=m.querySelector("#gc-back"))==null||g.addEventListener("click",()=>m.remove()),(p=m.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{m.remove(),Co(e,t,i,n,a)})}function Bt(e,t,i,n,a,o){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function l(){var c,d;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",g=Be(u,f)+(u.boost||0),p=s.find(b=>b.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${m};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${g}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(c=r.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,m=e.find(p=>p.cardId===f);if(!m)return;const g=s.findIndex(p=>p.cardId===f);g>-1?s.splice(g,1):s.length<t&&s.push(m),l()})}),(d=r.querySelector("#gc-picker-confirm"))==null||d.addEventListener("click",()=>{r.remove(),o(s)})}l(),document.body.appendChild(r)}const So={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,a,o)=>{const r=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,l])=>l.filter(c=>!c.used).map(c=>({...c,_line:s})));return r.length?(Bt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,a,n,s=>{s.forEach(l=>{const c=(n.homeTeam[l._line]||[]).find(d=>d.cardId===l.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),Te(a,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Te(a,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},a,o,r)=>{const s=n==="home"?a.homeTeam:a.aiTeam,l=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:d})));return c.length?(Bt(c,t,`Choisir ${t} joueur(s) ${l}(s) à débuffer (-${e})`,o,a,d=>{d.forEach(u=>{const m=((n==="home"?a.homeTeam:a.aiTeam)[u._line]||[]).find(g=>g.cardId===u.cardId);m&&(m.boost=(m.boost||0)-e,a.log.push({text:`🎯 -${e} sur ${m.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Te(o,a,r)}),!0):(a.log.push({text:`🎯 Aucun joueur ${l} disponible`,type:"info"}),Te(o,a,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,a,o)=>{const r=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",l=Object.entries(r).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,d])=>d.filter(u=>!u.used).map(u=>({...u,_line:c})));return l.length?(Bt(l,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,a,n,c=>{c.forEach(d=>{const f=((i==="home"?n.homeTeam:n.aiTeam)[d._line]||[]).find(m=>m.cardId===d.cardId);f&&(f.used=!0,n.log.push({text:`❌ ${f.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Te(a,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Te(a,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,a)=>{const o=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,s])=>s.filter(l=>l.used).map(l=>({...l,_line:r})));return o.length?(Bt(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(s=>{const l=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);l&&(l.used=!1,i.log.push({text:`💫 ${l.name} ressuscité !`,type:"info"}))}),Te(n,i,a)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Te(n,i,a),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Co(e,t,i,n,a){n.usedGc.push(e);const o=n.gcDefs||[],r=o.find(l=>l.name===t)||o.find(l=>{var c;return((c=l.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const l=So[r.effect_type];l?l(r.effect_params||{},n,i,a)||(s=!0):(a.toast(`Effet "${r.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const l=Object.entries(n.homeTeam).flatMap(([c,d])=>(d||[]).filter(u=>u.used).map(u=>({...u,_line:c})));l.length?(l[0].used=!1,n.log.push({text:`💫 ${l[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const l=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(l.length){const c=l.sort((d,u)=>Be(u,"ATT")-Be(d,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}h.from("cards").delete().eq("id",e).then(()=>{}),s&&Te(i,n,a)}function jo(e,t,i){const n=Object.values(t.homeTeam).flat().filter(a=>!a.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(a=>`
        <div class="player-boost-opt" data-card-id="${a.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Wn[a.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Be(a,a._line||a.job)}</div>
          <div style="flex:1"><b>${a.firstname} ${a.name}</b><div style="font-size:11px;color:#888">${a._line||a.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[r]||[]).find(l=>l.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Te(e,t,i)})})}async function _t(e,t,i){var d,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,a=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,r=a?"victoire":o?"nul":"defaite",s=qn(t.mode,r);t.matchId&&await h.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:a?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const l={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};a?l.wins=(n.profile.wins||0)+1:o?l.draws=(n.profile.draws||0)+1:l.losses=(n.profile.losses||0)+1,await h.from("users").update(l).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(d=document.getElementById("res-home"))==null||d.addEventListener("click",()=>{c.remove(),Ue(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{c.remove(),Ue(e),i.navigate("match",{matchMode:t.mode})})}function Bo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${zt(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function St(e,t,i,n,a={}){return an(e,t,i,n,a.myGC||[],a.gcDefs||[],a.isRanked||!1,a.rankedData||null,a.stadiumDef||null,a.onMatchEnd||null,a.mlLeagueId||null,a.mlMatchId||null)}async function qo(e,t,i){const{data:n}=await h.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const a=n.home_id===t.state.user.id;return an(e,t,i,a,[],[],n.is_ranked||!1,null,null,null,null,null)}async function an(e,t,i,n,a=[],o=[],r=!1,s=null,l=null,c=null,d=null,u=null){const{state:f,navigate:m,toast:g}=t,p=n?"p1":"p2",b=n?"p2":"p1",v=(a||[]).map(_=>_.id),y=(a||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:w}=await h.from("matches").select("*").eq("id",i).single();if(!w){g("Match introuvable","error"),m("home");return}async function $(){var fe,xe;console.log("[PvP] buildGameState match:",{id:w.id,home_deck_id:w.home_deck_id,away_deck_id:w.away_deck_id,mode:w.mode,is_ranked:w.is_ranked});const[{data:_,error:E},{data:A,error:S},{data:z},{data:q}]=await Promise.all([h.rpc("get_deck_for_match",{p_deck_id:w.home_deck_id}),h.rpc("get_deck_for_match",{p_deck_id:w.away_deck_id}),h.from("users").select("id,pseudo,club_name").eq("id",w.home_id).single(),h.from("users").select("id,pseudo,club_name").eq("id",w.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",E==null?void 0:E.message,"p2:",S==null?void 0:S.message,"p1D:",(fe=_==null?void 0:_.starters)==null?void 0:fe.length,"p2D:",(xe=A==null?void 0:A.starters)==null?void 0:xe.length);const B=ee=>{const ye=Number(ee.evolution_bonus)||0;return{cardId:ee.card_id,position:ee.position,id:ee.id,firstname:ee.firstname,name:ee.surname_real,country_code:ee.country_code,club_id:ee.club_id,job:ee.job,job2:ee.job2,note_g:(Number(ee.note_g)||0)+(ee.job==="GK"||ee.job2==="GK"&&Number(ee.note_g)>0?ye:0),note_d:(Number(ee.note_d)||0)+(ee.job==="DEF"||ee.job2==="DEF"&&Number(ee.note_d)>0?ye:0),note_m:(Number(ee.note_m)||0)+(ee.job==="MIL"||ee.job2==="MIL"&&Number(ee.note_m)>0?ye:0),note_a:(Number(ee.note_a)||0)+(ee.job==="ATT"||ee.job2==="ATT"&&Number(ee.note_a)>0?ye:0),evolution_bonus:ye,rarity:ee.rarity,skin:ee.skin,hair:ee.hair,hair_length:ee.hair_length,face:ee.face||null,clubName:ee.club_encoded_name||null,clubLogo:ee.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},G=((_==null?void 0:_.starters)||[]).map(ee=>B(ee)),W=((A==null?void 0:A.starters)||[]).map(ee=>B(ee)),X=(_==null?void 0:_.formation)||"4-4-2",J=(A==null?void 0:A.formation)||"4-4-2";let re=Pt(G,X),Q=Pt(W,J);const ce=((_==null?void 0:_.subs)||[]).map(ee=>B(ee)),de=((A==null?void 0:A.subs)||[]).map(ee=>B(ee)),oe=(_==null?void 0:_.stadium_def)||(n?l:null),ue=(A==null?void 0:A.stadium_def)||(n?null:l);return oe&&(re=Tt(re,oe),Gt(ce,oe)),ue&&(Q=Tt(Q,ue),Gt(de,ue)),{p1Team:re,p2Team:Q,p1Subs:ce,p2Subs:de,p1Formation:X,p2Formation:J,p1Name:(z==null?void 0:z.club_name)||(z==null?void 0:z.pseudo)||"Joueur 1",p2Name:(q==null?void 0:q.club_name)||(q==null?void 0:q.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?v:[],gc_p2:n?[]:v,gcCardsFull_p1:n?y:[],gcCardsFull_p2:n?[]:y,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let x=w.game_state&&Object.keys(w.game_state).length?w.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!x,"match.status:",w.status,"home_id:",w.home_id,"away_id:",w.away_id,"myId:",f.profile.id),!x)if(n){x=await $(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((x==null?void 0:x.p1Team)||{}));const{data:_}=await h.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await h.from("matches").update({game_state:x,turn_user_id:w.home_id}).eq("id",i):x=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let _=0;_<30&&!x;_++){await new Promise(A=>setTimeout(A,400));const{data:E}=await h.from("matches").select("game_state").eq("id",i).single();E!=null&&E.game_state&&Object.keys(E.game_state).length&&(x=E.game_state),_%5===0&&console.log("[PvP] away - poll",_,"game_state:",!!(E!=null&&E.game_state))}if(!x){g("Erreur de synchronisation","error"),m("home");return}x.gc_p2=v,x.gcCardsFull_p2=y,await h.from("matches").update({game_state:x}).eq("id",i)}let R=!1,I=null,D=!1;const N=new Set,Z=new Set;async function te(_){var J,re;try{h.removeChannel(ie)}catch{}const E=x[p+"Score"]||0,A=x[b+"Score"]||0;let S,z;_.winner_id?(S=_.winner_id===f.profile.id,z=!1):_.forfeit?(S=E>A,z=!1):(z=E===A,S=E>A);let q="";if(r&&n)try{const{data:Q}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",w.home_id).single(),{data:ce}=await h.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",w.away_id).single();if(Q&&ce){const de=S?1:z?.5:0,oe=1-de,ue=Q.placement_matches<10,fe=ce.placement_matches<10,xe=computeGlicko2(Q.mmr,Q.mmr_deviation,Q.mmr_volatility,ce.mmr,ce.mmr_deviation,de===1?1:de===0?0:.5,ue),ee=computeGlicko2(ce.mmr,ce.mmr_deviation,ce.mmr_volatility,Q.mmr,Q.mmr_deviation,oe===1?1:oe===0?0:.5,fe);await h.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:z?null:S?w.home_id:w.away_id,p_home_id:w.home_id,p_away_id:w.away_id,p_home_delta:xe.delta,p_away_delta:ee.delta,p_home_new_rd:xe.newRd,p_away_new_rd:ee.newRd,p_home_new_vol:xe.newSigma,p_away_new_vol:ee.newSigma});const ye=xe.delta,ze=xe.newMmr,Me=getTier(ze),Ne=ye>=0?"+":"",Ge=ye>=0?"#4caf50":"#ff6b6b",Pe=getTier(Q.mmr);q=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Me.id!==Pe.id?`<div style="font-size:20px;font-weight:900;color:${Me.color}">
                    ${ze>Q.mmr?"📈":"📉"} ${Pe.emoji} ${Pe.label} → ${Me.emoji} ${Me.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${ze>Q.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${ye>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Me.color}">${Me.emoji} ${Me.label}</div>`}
              ${ue?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${Q.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(Q){console.error("[Ranked] MMR update error:",Q)}(J=document.getElementById("pvp-end-overlay"))==null||J.remove();const B=document.createElement("div");B.id="pvp-end-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const G=z?"🤝":S?"🏆":"😞",W=z?"MATCH NUL":S?"VICTOIRE !":"DÉFAITE",X=z?"#fff":S?"#FFD700":"#ff6b6b";B.innerHTML=`
      <div style="font-size:64px">${G}</div>
      <div style="font-size:26px;font-weight:900;color:${X}">${W}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${x[p+"Name"]} ${E} – ${A} ${x[b+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${S?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${q}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(B),(re=B.querySelector("#pvp-end-home"))==null||re.addEventListener("click",()=>{B.remove(),Ue(e),m(r?"ranked":"home")})}const ie=h.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{const E=_.new;try{if(E.status==="finished"||E.forfeit){if(R)return;R=!0,I&&(clearInterval(I),I=null),E.game_state&&(x=E.game_state),te(E);return}if(E.game_state){const A=x;x=E.game_state;const S=x._lastGC;if(S&&S.seq&&!Z.has(S.seq)&&(Z.add(S.seq),S.by!==p)){Y(S.type,S.by,()=>se());return}const z=A[p+"Score"]||0,q=A[b+"Score"]||0,B=x[p+"Score"]||0,G=x[b+"Score"]||0,W=B>z,X=G>q;if((W||X)&&!N.has(x.round)){N.add(x.round);const J=[...x.log||[]].reverse().find(Q=>Q.isGoal),re=((J==null?void 0:J.homePlayers)||[]).map(Q=>({name:Q.name,note:Q.note,portrait:Q.portrait,job:Q.job}));at(re,B,G,W,()=>se());return}se()}}catch(A){console.error("[PvP] crash:",A)}}).subscribe();async function j(_){Object.assign(x,_),x.lastActionAt=new Date().toISOString();const{error:E}=await h.from("matches").update({game_state:x}).eq("id",i);E&&g("Erreur de synchronisation","error");try{se()}catch(A){console.error("[PvP] renderPvpScreen crash:",A)}}async function T(){if(R)return;R=!0,I&&(clearInterval(I),I=null);const _=n?w.away_id:w.home_id,E=n?"p2":"p1",A=n?"p1":"p2",S={...x,[E+"Score"]:3,[A+"Score"]:0,phase:"finished"};try{await h.from("matches").update({status:"finished",forfeit:!0,winner_id:_,home_score:S.p1Score||0,away_score:S.p2Score||0,game_state:S}).eq("id",i)}catch{}try{h.removeChannel(ie)}catch{}setTimeout(()=>{Ue(e),m("home")},800)}const k={BOOST_STAT:({value:_=1,count:E=1,roles:A=[]},S,z)=>{const q=S[p+"Team"],B=Object.entries(q).filter(([G])=>!A.length||A.includes(G)).flatMap(([G,W])=>W.filter(X=>!X.used).map(X=>({...X,_line:G})));if(!B.length){S.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),z(S);return}F(B,E,`Choisir ${E} joueur(s) à booster (+${_})`,G=>{G.forEach(W=>{const X=(q[W._line]||[]).find(J=>J.cardId===W.cardId);X&&(X.boost=(X.boost||0)+_,S.log.push({text:`⚡ +${_} sur ${X.name}`,type:"info"}))}),S[p+"Team"]=q,z(S)})},DEBUFF_STAT:({value:_=1,count:E=1,roles:A=[],target:S="ai"},z,q)=>{const B=S==="home"?p:b,G=z[B+"Team"],W=S==="home"?"allié":"adverse",X=Object.entries(G).filter(([J])=>!A.length||A.includes(J)).flatMap(([J,re])=>re.map(Q=>({...Q,_line:J})));if(!X.length){z.log.push({text:`🎯 Aucun joueur ${W}`,type:"info"}),q(z);return}F(X,E,`Choisir ${E} joueur(s) ${W}(s) (-${_})`,J=>{J.forEach(re=>{const Q=(G[re._line]||[]).find(ce=>ce.cardId===re.cardId);Q&&(Q.boost=(Q.boost||0)-_,z.log.push({text:`🎯 -${_} sur ${Q.name}`,type:"info"}))}),z[B+"Team"]=G,q(z)})},GRAY_PLAYER:({count:_=1,roles:E=[],target:A="ai"},S,z)=>{const q=A==="home"?p:b,B=S[q+"Team"],G=A==="home"?"allié":"adverse",W=Object.entries(B).filter(([X])=>!E.length||E.includes(X)).flatMap(([X,J])=>J.filter(re=>!re.used).map(re=>({...re,_line:X})));if(!W.length){S.log.push({text:`❌ Aucun joueur ${G}`,type:"info"}),z(S);return}F(W,_,`Choisir ${_} joueur(s) ${G}(s) à exclure`,X=>{const J="usedCardIds_"+q,re=new Set(S[J]||[]);X.forEach(Q=>{const ce=(B[Q._line]||[]).find(de=>de.cardId===Q.cardId);ce&&(ce.used=!0,re.add(Q.cardId),S.log.push({text:`❌ ${ce.name} exclu !`,type:"info"}))}),S[J]=[...re],S[q+"Team"]=B,z(S)})},REVIVE_PLAYER:({count:_=1,roles:E=[]},A,S)=>{const z=A[p+"Team"],q=Object.entries(z).filter(([B])=>!E.length||E.includes(B)).flatMap(([B,G])=>G.filter(W=>W.used).map(W=>({...W,_line:B})));if(!q.length){A.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),S(A);return}F(q,_,`Choisir ${_} joueur(s) à ressusciter`,B=>{B.forEach(G=>{const W=(z[G._line]||[]).find(X=>X.cardId===G.cardId);W&&(W.used=!1,A.log.push({text:`💫 ${W.name} ressuscité !`,type:"info"}))}),A[p+"Team"]=z,S(A)})},REMOVE_GOAL:({},_,E)=>{const A=b+"Score";_[A]>0?(_[A]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),E(_)},ADD_GOAL_DRAW:({},_,E)=>{_[p+"Score"]===_[b+"Score"]?(_[p+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),E(_)},ADD_SUB:({value:_=1},E,A)=>{E.maxSubs=(E.maxSubs||3)+_,E.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),A(E)},CUSTOM:({},_,E)=>E(_)};function F(_,E,A,S){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let q=[];function B(){var W,X;const G=_.map(J=>{const re={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[J._line]||"#555",Q=Be(J,J._line)+(J.boost||0),de=q.find(ue=>ue.cardId===J.cardId)?"#FFD700":"rgba(255,255,255,0.25)",oe=J.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${J.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${de};background:${re};overflow:hidden;cursor:pointer;${oe}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${J.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${Q}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${J._line}</div>
        </div>`}).join("");z.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${A}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${q.length}/${E}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${G}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${q.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${q.length}/${E})
          </button>
        </div>`,(W=z.querySelector("#pp-close"))==null||W.addEventListener("click",()=>z.remove()),z.querySelectorAll(".pp-item").forEach(J=>{J.addEventListener("click",()=>{const re=J.dataset.cid,Q=_.find(de=>de.cardId===re),ce=q.findIndex(de=>de.cardId===re);Q&&(ce>-1?q.splice(ce,1):q.length<E&&q.push(Q),B())})}),(X=z.querySelector("#pp-confirm"))==null||X.addEventListener("click",()=>{z.remove(),S(q)})}B(),document.body.appendChild(z)}async function ae(_,E){const S=(x["gcCardsFull_"+p]||[]).find(G=>G.id===_),z=(S==null?void 0:S._gcDef)||(x.gcDefs||[]).find(G=>{var W;return G.name===E||((W=G.name)==null?void 0:W.toLowerCase().trim())===(E==null?void 0:E.toLowerCase().trim())}),q=[...x["usedGc_"+p]||[],_],B={type:E,by:p,seq:(x._gcAnimSeq||0)+1};Z.add(B.seq),Y(E,p,async()=>{if(z!=null&&z.effect_type&&z.effect_type!=="CUSTOM"){const W=k[z.effect_type];if(W){const X={...x};W(z.effect_params||{},X,async J=>{J["usedGc_"+p]=q,J._lastGC=B,J._gcAnimSeq=B.seq,await j(J)});return}}const G={...x};switch(E){case"Remplacement+":G.maxSubs=(G.maxSubs||3)+1,G.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const W=b+"Score";G[W]>0&&(G[W]--,G.log.push({text:"🚫 But annulé",type:"info"}));break}}G["usedGc_"+p]=q,G._lastGC=B,G._gcAnimSeq=B.seq,await j(G)})}function pe(_,E){const A="usedCardIds_"+_,S=new Set(x[A]||[]);E.forEach(z=>S.add(z)),x[A]=[...S]}function le(){for(const _ of["p1","p2"]){const E=new Set(x["usedCardIds_"+_]||[]),A=x[_+"Team"];if(A)for(const S of["GK","DEF","MIL","ATT"])(A[S]||[]).forEach(z=>{z.used=E.has(z.cardId)})}}function se(){var Ve,it,bi,yi,hi,vi;if(x.phase==="reveal")return Ee();if(x.phase==="midfield")return V();if(x.phase==="finished")return Fe();const _=x[p+"Team"],E=x[b+"Team"];le();const A=x[p+"Score"],S=x[b+"Score"],z=x[p+"Name"],q=x[b+"Name"],B=x.phase===p+"-attack",G=x.phase===p+"-defense",W=Array.isArray(x["selected_"+p])?x["selected_"+p]:[],X=W.map(ne=>ne.cardId),J=window.innerWidth>=700,re=x[p+"Subs"]||[],Q=x["usedSubIds_"+p]||[],ce=re.filter(ne=>!Q.includes(ne.cardId)),de=x["gcCardsFull_"+p]||[],oe=x["usedGc_"+p]||[],ue=de.filter(ne=>!oe.includes(ne.id)),fe=x.boostOwner===p&&!x.boostUsed,xe=!["GK","DEF","MIL","ATT"].some(ne=>(E[ne]||[]).some(ge=>!ge.used)),ee=[..._.MIL||[],..._.ATT||[]].filter(ne=>!ne.used),ye=B&&xe&&ee.length===0?[..._.GK||[],..._.DEF||[]].filter(ne=>!ne.used).map(ne=>ne.cardId):[];function ze(ne,ge,Ie){var $i,Ei;const be=ne._gcDef,nt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[be==null?void 0:be.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",dt={purple:"#b06ce0",light_blue:"#00d4ef"}[be==null?void 0:be.color]||"#b06ce0",yt=(be==null?void 0:be.name)||ne.gc_type,ht=(be==null?void 0:be.effect)||(($i=Ae[ne.gc_type])==null?void 0:$i.desc)||"",wi=be!=null&&be.image_url?`/icons/${be.image_url}`:null,fn=((Ei=Ae[ne.gc_type])==null?void 0:Ei.icon)||"⚡",_i=Math.round(Ie*.22),ki=Math.round(Ie*.22),Vt=Ie-_i-ki,gn=yt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ne.id}" data-gc-type="${ne.gc_type}"
        style="box-sizing:border-box;width:${ge}px;height:${Ie}px;border-radius:10px;border:2px solid ${dt};background:${nt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${_i}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${gn}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ge-6}px">${yt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Vt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${wi?`<img src="${wi}" style="max-width:${ge-10}px;max-height:${Vt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Vt*.55)}px">${fn}</span>`}
        </div>
        <div style="height:${ki}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ht.slice(0,38)}</span>
        </div>
      </div>`}function Me(ne,ge){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ne}px;height:${ge}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ge*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ge*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ge*.09)}px;color:#000;font-weight:900">+${x.boostValue}</div>
      </div>`}const Ne=(ne,ge)=>ge?Me(130,175):ze(ne,130,175),Ge=(ne,ge)=>ge?Me(68,95):ze(ne,68,95),Pe=J?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",bt=B?ke(p)?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${W.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Pe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:G?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${W.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${q}</div>`,je=B&&!ke(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':B||G?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${W.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${J?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ce.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ce.map(ne=>`<div class="pvp-sub-btn" data-sub-id="${ne.cardId}" style="cursor:pointer;flex-shrink:0">${Je(ne,J?76:44,J?100:58)}</div>`).join("")}
    </div>`,Re=B?"attack":G?"defense":"idle",et=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${xt(_,x[p+"Formation"],Re,X,We(),ot(),ye)}
      </div>
    </div>`,Ke=(()=>{var ge,Ie;if(G&&((ge=x.pendingAttack)!=null&&ge.players)){const be=x.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${q} ATTAQUE — Défendez !</div>
          ${pt((be.players||[]).map(nt=>({...nt,used:!1})),"#ff6b6b",be.total)}
        </div>`}if(B&&((Ie=x.pendingAttack)!=null&&Ie.players)){const be=x.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${pt((be.players||[]).map(nt=>({...nt,used:!1})),"#00ff88",be.total)}
        </div>`}const ne=(x.log||[]).slice(-1)[0];return ne?'<div style="padding:2px 4px">'+on(ne)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),tt=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${z}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${A} – ${S}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${q}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(x.log||[]).length})
      </button>`;He(e),e.style.overflow="hidden",J?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${tt}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${et}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${bt}${je}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${ue.map(ne=>Ne(ne,!1)).join("")}
            ${fe?Ne(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${tt}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${xt(_,x[p+"Formation"],Re,X,We(),ot(),ye)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ue.map(ne=>Ge(ne,!1)).join("")}
            ${fe?Ge(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${B&&ce.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${B&&ce.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${B&&ce.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${B&&ce.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${ce.length}</div>
                </div>
                <div style="font-size:14px;color:rgba(255,255,255,0.4)">⇄</div>
                <div style="text-align:center">
                  <div style="font-size:7px;color:#ff6b6b;font-weight:700;letter-spacing:1px">OUT</div>
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(x["usedSubIds_"+p]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(x["usedSubIds_"+p]||[]).length}/${x.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${bt}${je}</div>
        </div>
      </div>`;function De(){const ne=e.querySelector(".match-screen");if(!ne)return;const ge=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ne.style.height=ge+"px",ne.style.minHeight=ge+"px",ne.style.maxHeight=ge+"px",ne.style.overflow="hidden";const Ie=e.querySelector("#mobile-action-bar"),be=e.querySelector("#mobile-play-area");Ie&&be&&(be.style.paddingBottom=Ie.offsetHeight+"px")}if(De(),setTimeout(De,120),setTimeout(De,400),D||(D=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",De),window.visualViewport.addEventListener("scroll",De)),window.addEventListener("resize",De)),function(){const ge=e.querySelector(".terrain-wrapper svg");ge&&(ge.removeAttribute("width"),ge.removeAttribute("height"),ge.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ge.setAttribute("viewBox","-26 -26 352 352"),ge.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ne=>{ne.addEventListener("click",()=>{if(!B&&!G)return;const ge=ne.dataset.cardId,Ie=ne.dataset.role,be=(_[Ie]||[]).find(ht=>ht.cardId===ge);if(!be||be.used)return;const nt=ye.includes(ge);if(B&&!["MIL","ATT"].includes(Ie)&&!nt)return;Array.isArray(x["selected_"+p])||(x["selected_"+p]=[]);const dt=x["selected_"+p],yt=dt.findIndex(ht=>ht.cardId===ge);yt>-1?dt.splice(yt,1):dt.length<3&&dt.push({...be,_role:Ie}),se()})}),e.querySelectorAll(".match-used-hit").forEach(ne=>{ne.addEventListener("click",()=>P(ne.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ne=>{ne.addEventListener("click",()=>P())}),(Ve=e.querySelector("#pvp-sub-open"))==null||Ve.addEventListener("click",()=>P()),e.querySelectorAll(".pvp-gc-mini").forEach(ne=>{ne.addEventListener("click",()=>L(ne.dataset.gcId,ne.dataset.gcType))}),(it=e.querySelector("#pvp-boost-card"))==null||it.addEventListener("click",()=>M()),(bi=e.querySelector("#pvp-action"))==null||bi.addEventListener("click",ne=>{B?ne.currentTarget.dataset.pass==="1"||!ke(p)?O():$e():G&&_e()}),(yi=e.querySelector("#pvp-quit"))==null||yi.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&T()}),(hi=e.querySelector("#pvp-view-opp"))==null||hi.addEventListener("click",()=>U()),(vi=e.querySelector("#pvp-toggle-history"))==null||vi.addEventListener("click",()=>C()),I&&(clearInterval(I),I=null),(B||G)&&!R){let ne=30,ge=!1;const Ie=()=>document.getElementById("pvp-timer"),be=()=>{Ie()&&(Ie().textContent=ne+"s",Ie().style.color=ge?"#ff4444":"#fff")};be(),I=setInterval(()=>{ne--,ne<0?ge?(clearInterval(I),I=null,B&&!ke(p)?O():T()):(ge=!0,ne=15,be()):be()},1e3)}}function Ee(){He(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${x[b+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${zt(x[b+"Team"],x[b+"Formation"],null,[],We(),ot())}</div>
    </div>`,p==="p1"&&setTimeout(async()=>{await j({phase:"midfield"})},5e3)}let K=!1;function V(){if(K)return;const _=x[p+"Team"].MIL||[],E=x[b+"Team"].MIL||[],A=milScore(_)+milLinks(_),S=milScore(E)+milLinks(E),z=A>=S;function q(de,oe,ue){return`<div id="duel-row-${ue}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${oe}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${de.map((fe,xe)=>{const ee=xe<de.length-1?At(fe,de[xe+1]):null,ye=!ee||ee==="#ff3333"||ee==="#cc2222",ze=ee==="#00ff88"?"+2":ee==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ue}" data-idx="${xe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${qe({...fe,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:x.homeStadiumDef||x.stadiumDef||null,role:"MIL",extraNote:fe.boost||0})}
            </div>
            ${xe<de.length-1?`<div class="duel-link duel-link-${ue}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":ee};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${ee}`}">
              ${ze?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ee}">${ze}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ue}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${milScore(de)} + ${milLinks(de)} liens = <b style="color:#fff">${milScore(de)+milLinks(de)}</b>
        </div>
      </div>`}He(e),e.innerHTML=`
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
      ${q(_,x[p+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${q(E,x[b+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const B=(de,oe)=>e.querySelectorAll(de).forEach((ue,fe)=>{setTimeout(()=>{ue.style.opacity="1",ue.style.transform="translateY(0) scale(1)"},oe+fe*90)});B(".duel-card-me",150),B(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((de,oe)=>setTimeout(()=>{de.style.opacity="1"},oe*70)),900),setTimeout(()=>{const de=e.querySelector("#pvp-vs");de&&(de.style.opacity="1",de.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(oe=>oe.style.opacity="1")},1250);function G(de,oe,ue){const fe=document.getElementById(de);if(!fe)return;const xe=performance.now(),ee=ye=>{const ze=Math.min(1,(ye-xe)/ue);fe.textContent=Math.round(oe*(1-Math.pow(1-ze,3))),ze<1?requestAnimationFrame(ee):fe.textContent=oe};requestAnimationFrame(ee)}setTimeout(()=>{G("pvp-score-me",A,800),G("pvp-score-opp",S,800)},1500);const W=x.p1Team.MIL||[],X=x.p2Team.MIL||[],J=milScore(W)+milLinks(W),re=milScore(X)+milLinks(X),Q=J>=re?"p1":"p2";let ce=x.boostValue;ce==null&&(ce=Wi(),x.boostValue=ce,x.boostOwner=Q,x.boostUsed=!1),K=!0,setTimeout(()=>{const de=e.querySelector("#duel-row-"+(z?"me":"opp")),oe=e.querySelector("#duel-row-"+(z?"opp":"me")),ue=document.getElementById("pvp-score-me"),fe=document.getElementById("pvp-score-opp"),xe=z?ue:fe,ee=z?fe:ue;xe&&(xe.style.fontSize="80px",xe.style.color=z?"#FFD700":"#ff6b6b",xe.style.animation="duelPulse .5s ease"+(z?",duelGlow 1.5s ease infinite .5s":"")),ee&&(ee.style.opacity="0.25"),setTimeout(()=>{de&&(de.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",de.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),oe&&(oe.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ne;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const ze=x.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ce+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Me=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(z?"⚽ "+x[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+x[b+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ze+Me,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ne=document.getElementById("pvp-start-match"))==null||Ne.addEventListener("click",async()=>{const Ge=Q;await j({phase:Ge+"-attack",attacker:Ge,round:1,boostValue:ce,boostUsed:!1,boostOwner:Ge})})},600)},700)},2800)}function Y(_,E,A){var oe,ue;const S=(x.gcDefs||[]).find(fe=>{var xe;return fe.name===_||((xe=fe.name)==null?void 0:xe.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),z={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",q={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",B=(S==null?void 0:S.name)||_,G=(S==null?void 0:S.effect)||((oe=Ae[_])==null?void 0:oe.desc)||"",W=S!=null&&S.image_url?`/icons/${S.image_url}`:null,X=((ue=Ae[_])==null?void 0:ue.icon)||"⚡",re=E===p?"Vous":x[E+"Name"]||"Adversaire",Q=document.createElement("div");Q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",Q.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${q}66}50%{box-shadow:0 0 60px ${q}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${q};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${re} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${q};background:${z};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${B.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${B}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${W?`<img src="${W}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${X}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${G}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(Q);let ce=!1;const de=()=>{ce||(ce=!0,Q.remove(),setTimeout(()=>A&&A(),50))};Q.addEventListener("click",de),setTimeout(de,3e3)}function L(_,E){var Q,ce,de,oe;const S=(x["gcCardsFull_"+p]||[]).find(ue=>ue.id===_),z=S==null?void 0:S._gcDef,q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[z==null?void 0:z.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",B={purple:"#b06ce0",light_blue:"#00d4ef"}[z==null?void 0:z.color]||"#b06ce0",G=(z==null?void 0:z.name)||E,W=(z==null?void 0:z.effect)||((Q=Ae[E])==null?void 0:Q.desc)||"Carte spéciale.",X=z!=null&&z.image_url?`/icons/${z.image_url}`:null,J=((ce=Ae[E])==null?void 0:ce.icon)||"⚡",re=document.createElement("div");re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",re.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${B};background:${q};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${B}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${G.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${G}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${X?`<img src="${X}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${J}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${W}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(re),(de=re.querySelector("#pvp-gc-back"))==null||de.addEventListener("click",()=>re.remove()),(oe=re.querySelector("#pvp-gc-use"))==null||oe.addEventListener("click",()=>{re.remove(),ae(_,E)})}function M(){var S;const _=x[p+"Team"],E=Object.entries(_).flatMap(([z,q])=>(q||[]).filter(B=>!B.used).map(B=>({...B,_line:z})));if(!E.length)return;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",A.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${x.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(z=>{const q={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[z._line]||"#555",B=Be(z,z._line)+(z.boost||0);return`<div class="bp-item" data-cid="${z.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${q};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${z.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(A),(S=A.querySelector("#bp-close"))==null||S.addEventListener("click",()=>A.remove()),A.querySelectorAll(".bp-item").forEach(z=>{z.addEventListener("click",async()=>{const q=z.dataset.cid,B=E.find(W=>W.cardId===q);if(!B)return;const G=(_[B._line]||[]).find(W=>W.cardId===q);G&&(G.boost=(G.boost||0)+x.boostValue),A.remove(),await j({[p+"Team"]:_,boostUsed:!0})})})}function P(_=null){var ce,de;if(!(x.phase===p+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const A=x[p+"Team"],S=x["usedSubIds_"+p]||[],z=x.maxSubs||3;if(S.length>=z){g(`Maximum ${z} remplacements atteint`,"warning");return}const q=Object.entries(A).flatMap(([oe,ue])=>(ue||[]).filter(fe=>fe.used).map(fe=>({...fe,_line:oe}))),B=(x[p+"Subs"]||[]).filter(oe=>!S.includes(oe.cardId));if(!q.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!B.length){g("Aucun remplaçant disponible","warning");return}let G=Math.max(0,q.findIndex(oe=>oe.cardId===_));const W=((ce=q[G])==null?void 0:ce._line)||((de=q[G])==null?void 0:de.job);let X=Math.max(0,B.findIndex(oe=>oe.job===W)),J=!1;const re=document.createElement("div");re.id="pvp-sub-overlay",re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function Q(){var ze,Me,Ne,Ge,Pe,bt;const oe=q[G],ue=B[X],fe=Math.min(130,Math.round((window.innerWidth-90)/2)),xe=Math.round(fe*1.35),ee=je=>`background:rgba(255,255,255,0.12);border:none;color:${je?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${je?"default":"pointer"};flex-shrink:0`;re.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${S.length}/${z})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${ee(X===0)}" ${X===0?"disabled":""}>▲</button>
          <div>${ue?Je({...ue,used:!1,boost:0},fe,xe):"<div>—</div>"}</div>
          <button id="pin-down" style="${ee(X>=B.length-1)}" ${X>=B.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${X+1}/${B.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${ee(G===0)}" ${G===0?"disabled":""}>▲</button>
          <div>${oe?Je({...oe,used:!1,boost:0},fe,xe):"<div>—</div>"}</div>
          <button id="pout-down" style="${ee(G>=q.length-1)}" ${G>=q.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${G+1}/${q.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ze=re.querySelector("#psub-close"))==null||ze.addEventListener("click",()=>re.remove()),(Me=re.querySelector("#pout-up"))==null||Me.addEventListener("click",()=>{G>0&&(G--,Q())}),(Ne=re.querySelector("#pout-down"))==null||Ne.addEventListener("click",()=>{G<q.length-1&&(G++,Q())}),(Ge=re.querySelector("#pin-up"))==null||Ge.addEventListener("click",()=>{X>0&&(X--,Q())}),(Pe=re.querySelector("#pin-down"))==null||Pe.addEventListener("click",()=>{X<B.length-1&&(X++,Q())});const ye=(je,Oe,Re,et)=>{const Ke=re.querySelector("#"+je);if(!Ke)return;let tt=0;Ke.addEventListener("touchstart",De=>{tt=De.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",De=>{const Ve=De.changedTouches[0].clientY-tt;if(Math.abs(Ve)<30)return;const it=Oe();Ve<0&&it<et-1?(Re(it+1),Q()):Ve>0&&it>0&&(Re(it-1),Q())},{passive:!0})};ye("pin-panel",()=>X,je=>X=je,B.length),ye("pout-panel",()=>G,je=>G=je,q.length),(bt=re.querySelector("#psub-confirm"))==null||bt.addEventListener("click",async je=>{if(je.preventDefault(),je.stopPropagation(),J)return;J=!0;const Oe=q[G],Re=B[X];if(!Oe||!Re)return;const et=Oe._line,Ke=(A[et]||[]).findIndex(Ve=>Ve.cardId===Oe.cardId);if(Ke===-1){g("Erreur : joueur introuvable","error"),re.remove();return}const tt={...Re,_line:et,position:Oe.position,used:!1,boost:0};A[et].splice(Ke,1,tt);const De=[...S,Re.cardId];re.remove(),H(Oe,Re,async()=>{await j({[p+"Team"]:A,[b+"Team"]:x[b+"Team"],["usedSubIds_"+p]:De})})})}document.body.appendChild(re),Q()}function H(_,E,A){const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const q=(W,X,J)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${X};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${J}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${S[W.job]||"#555"};border:3px solid ${X};position:relative;overflow:hidden;margin:0 auto">
        ${Lt(W)?`<img src="${Lt(W)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(W.name||"").slice(0,12)}</div>
    </div>`;z.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${q(E,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${q(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(z);let B=!1;const G=()=>{B||(B=!0,z.remove(),setTimeout(()=>A(),50))};z.addEventListener("click",G),setTimeout(G,2200)}function U(){var E;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${x[b+"Name"]}</div>
      <div style="width:min(90vw,420px)">${zt(x[b+"Team"],x[b+"Formation"],null,[],We(),ot())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(E=_.querySelector("#pvp-opp-close"))==null||E.addEventListener("click",()=>_.remove())}function C(){var A;const _=x.log||[],E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",E.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(S=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${S.type==="goal"?"#FFD700":S.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${S.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(E),(A=E.querySelector("#pvp-hist-close"))==null||A.addEventListener("click",()=>E.remove())}async function O(){if(x.phase!==p+"-attack")return;const _=p==="p1"?"p2":"p1",E=(x.round||0)+1,A=[...x.log||[]];A.push({type:"info",text:`⏭️ ${x[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const S=he(x),z=ke(_),q=S||!z?"finished":_+"-attack";await j({["selected_"+p]:[],modifiers:{...x.modifiers,[p]:{}},pendingAttack:null,phase:q,attacker:_,round:E,log:A}),q==="finished"&&await Ce(x)}async function $e(){const _=x[p+"Team"],E=!["GK","DEF","MIL","ATT"].some(q=>(x[b+"Team"][q]||[]).some(B=>!B.used)),A=(x["selected_"+p]||[]).map(q=>{const B=(_[q._role]||[]).find(de=>de.cardId===q.cardId)||q,G=E&&["GK","DEF"].includes(q._role),W=_[q._role]||[],X=W.findIndex(de=>de.cardId===q.cardId),J=mt(W.length),re=X>=0?J[X]:B._col??1,Q=x.stadiumDef||x.homeStadiumDef||null,ce=B.stadiumBonus||Q&&(Q.club_id&&String(B.club_id)===String(Q.club_id)||Q.country_code&&B.country_code===Q.country_code)||!1;return{...B,_line:q._role,_col:re,stadiumBonus:ce,...G?{note_a:Math.max(1,Number(B.note_a)||0)}:{}}});if(!A.length)return;const S=ci(A,x.modifiers[p]||{});pe(p,A.map(q=>q.cardId)),A.forEach(q=>{const B=(_[q._role]||[]).find(G=>G.cardId===q.cardId);B&&(B.used=!0)}),x["selected_"+p]=[],se();const z=[...x.log||[]];if(E){const q=(x[p+"Score"]||0)+1,B=A.map(re=>histPlayer(re));z.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:B,homeTotal:S.total,aiTotal:0});const G=(x.round||0)+1,W=p==="p1"?"p2":"p1",X={...x,[p+"Team"]:_,[p+"Score"]:q},J=he(X);N.add(G),at(B,q,x[b+"Score"]||0,!0,async()=>{await j({[p+"Team"]:_,[p+"Score"]:q,["selected_"+p]:[],modifiers:{...x.modifiers,[p]:{}},pendingAttack:null,phase:J?"finished":W+"-attack",attacker:W,round:G,log:z}),J&&await Ce({...x,[p+"Score"]:q})});return}z.push({type:"pending",text:`⚔️ ${x[p+"Name"]} attaque (${S.total})`}),await j({[p+"Team"]:_,[b+"Team"]:x[b+"Team"],pendingAttack:{...S,players:A,side:p},["selected_"+p]:[],modifiers:{...x.modifiers,[p]:{}},phase:b+"-defense",log:z})}async function _e(){const _=x[p+"Team"],E=(x["selected_"+p]||[]).map(oe=>{const ue=(_[oe._role]||[]).find(ze=>ze.cardId===oe.cardId)||oe,fe=_[oe._role]||[],xe=fe.findIndex(ze=>ze.cardId===oe.cardId),ee=mt(fe.length),ye=xe>=0?ee[xe]:ue._col??1;return{...ue,_line:oe._role,_col:ye}}),A=pi(E,x.modifiers[p]||{});pe(p,E.map(oe=>oe.cardId)),E.forEach(oe=>{const ue=(_[oe._role]||[]).find(fe=>fe.cardId===oe.cardId);ue&&(ue.used=!0)}),x["selected_"+p]=[],se();const S=ui(x.pendingAttack.total,A.total,x.modifiers[p]||{}),z=x.pendingAttack.side,q=S==="attack"||(S==null?void 0:S.goal),B=z==="p1"?"p2":"p1",G=(x.round||0)+1,W=(x.pendingAttack.players||[]).map(oe=>histPlayer(oe)),X=[...x.log||[]];X.push({type:"duel",isGoal:q,homeScored:q&&z===p,text:q?`⚽ BUT de ${x[z+"Name"]} ! (${x.pendingAttack.total} vs ${A.total})`:`✋ Attaque stoppée (${x.pendingAttack.total} vs ${A.total})`,homePlayers:W,aiPlayers:E.map(oe=>histPlayer(oe)),homeTotal:x.pendingAttack.total,aiTotal:A.total});const J=q?(x[z+"Score"]||0)+1:x[z+"Score"]||0,re={...x,[p+"Team"]:_,[z+"Score"]:J},Q=he(re),ce=Q?"finished":B+"-attack",de=async()=>{await j({[p+"Team"]:_,[b+"Team"]:x[b+"Team"],[z+"Score"]:J,["selected_"+p]:[],modifiers:{...x.modifiers,[p]:{}},pendingAttack:null,phase:ce,attacker:B,round:G,log:X}),(ce==="finished"||Q)&&await Ce({...x,[z+"Score"]:J})};if(q){const oe=z===p,ue=oe?J:x[p+"Score"]||0,fe=oe?x[b+"Score"]||0:J;N.add(G),at(W,ue,fe,oe,de)}else await de()}function we(_){return["MIL","ATT"].some(E=>(_[E]||[]).some(A=>!A.used))}function me(_){return["GK","DEF","MIL","ATT"].some(E=>(_[E]||[]).some(A=>!A.used))}function Le(_){return me(_)&&!we(_)}function ke(_){const E=x[_+"Team"],A=x[(_==="p1"?"p2":"p1")+"Team"];return!!(we(E)||!me(A)&&Le(E))}function he(_){const E=["MIL","ATT"].some(X=>(_.p1Team[X]||[]).some(J=>!J.used)),A=["MIL","ATT"].some(X=>(_.p2Team[X]||[]).some(J=>!J.used)),S=me(_.p1Team),z=me(_.p2Team);return!E&&!(!z&&S)&&(!A&&!(!S&&z))}function Se(_){const E=_.p1Score||0,A=_.p2Score||0;return E===A?null:E>A?w.home_id:w.away_id}async function Ce(_){try{const E=Se(_),A=E?w.home_id===E?w.away_id:w.home_id:null;await h.from("matches").update({status:"finished",winner_id:E,home_score:_.p1Score||0,away_score:_.p2Score||0}).eq("id",i),E&&A&&updateEvolutiveCards(E,A).catch(()=>{})}catch(E){console.error("[PvP] finishMatch:",E)}}function Fe(){var z;const _=x[p+"Score"],E=x[b+"Score"],A=_>E,S=_===E;He(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${A?"🏆":S?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${A?"Victoire !":S?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${E}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(z=document.getElementById("pvp-home"))==null||z.addEventListener("click",()=>{try{h.removeChannel(ie)}catch{}Ue(e),m("home")})}se()}async function ni(e,t,i=!1){var s,l;const{state:n,navigate:a,toast:o}=t,r=i&&((l=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:l.rankedData)||null;await Mt(e,t,i?"ranked":"random",async({deckId:c,formation:d,starters:u,subsRaw:f,gcCardsEnriched:m,gcDefs:g,stadiumDef:p})=>{const b=m||[];He(e),await Fo(e,t,c,d,u,f,b,g,p,i,r)})}async function Do(e,t,i){return qo(e,t,i)}async function Fo(e,t,i,n,a,o,r=[],s=[],l=null,c=!1,d=null){var D,N;const{state:u,navigate:f,toast:m}=t,g=(d==null?void 0:d.mmr)??((D=u.profile)==null?void 0:D.mmr)??1e3,p=c?si(g):null,b=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",v=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${b};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(g)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${v};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`,(N=document.getElementById("cancel-mm"))==null||N.addEventListener("click",()=>{$==null||$.unsubscribe(),Ue(e),f("home")});const y=u.user.id,{data:w}=await h.from("matchmaking_queue").select("id").eq("user_id",y).single();w||await h.from("matchmaking_queue").insert({user_id:y,deck_id:i,formation:n,mmr:g,is_ranked:c});let $,x=!1;const R=async()=>{if(x)return;const{data:Z}=await h.from("matches").select("id, home_id, away_id").or(`home_id.eq.${y},away_id.eq.${y}`).eq("status","in_progress").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(Z){x=!0,$==null||$.unsubscribe(),await h.from("matchmaking_queue").delete().eq("user_id",y);const te=Z.home_id===y;await St(e,t,Z.id,te,{myGC:r,gcDefs:s,stadiumDef:l,isRanked:c,rankedData:d,onMatchEnd:c?Go:null})}};if(await R(),x)return;$=h.channel(`mm_${y}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"matches",filter:`home_id=eq.${y}`},R).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`away_id=eq.${y}`},R).subscribe();const I=setInterval(R,3e3);setTimeout(()=>{clearInterval(I),$==null||$.unsubscribe()},12e4)}async function Go(e,t){const{state:i,toast:n}=t,{winnerId:a,homeId:o,awayId:r,homeScore:s,awayScore:l,matchId:c}=e,d=i.user.id,u=o===d,f=a===d,{data:m}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",d).single(),{data:g}=await h.from("users").select("mmr, mmr_rd, mmr_v").eq("id",u?r:o).single();if(m&&g){const p=xn(m.mmr,m.mmr_rd,m.mmr_v,g.mmr,g.mmr_rd,f?1:0);await h.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:f?h.sql`mmr_wins + 1`:void 0,mmr_losses:f?void 0:h.sql`mmr_losses + 1`}).eq("id",d),n(f?`+MMR ↑ ${Math.round(p.mmr-m.mmr)}`:`-MMR ↓ ${Math.round(m.mmr-p.mmr)}`,f?"success":"error",4e3)}}const Po=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:ni,resumePvpMatch:Do},Symbol.toStringTag,{value:"Module"}));async function Ro(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.friendId||null,s=o.friendName||"Ami";await Mt(e,t,"friend",async({deckId:l,formation:c,starters:d,subsRaw:u,gcCardsEnriched:f,gcDefs:m,stadiumDef:g})=>{const p=f||[];He(e),r?await No(e,t,l,p,m,g,r,s):await Oo(e,t,l,p,m,g)})}async function No(e,t,i,n,a,o,r,s){var p;const{state:l,navigate:c,toast:d}=t,u=l.user.id,{data:f}=await h.from("friend_match_invites").insert({inviter_id:u,invitee_id:r,status:"pending"}).select("id").single();e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`,(p=document.getElementById("cancel-friend"))==null||p.addEventListener("click",async()=>{f&&await h.from("friend_match_invites").update({status:"declined"}).eq("id",f.id),Ue(e),c("home")});let m=!1;const g=h.channel(`friend_${u}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"matches",filter:`home_id=eq.${u}`},async({new:b})=>{m||(m=!0,g.unsubscribe(),f&&await h.from("friend_match_invites").update({status:"accepted"}).eq("id",f.id),await St(e,t,b.id,!0,{myGC:n,gcDefs:a,stadiumDef:o}))}).subscribe();setTimeout(()=>{m||(g.unsubscribe(),d("Invitation expirée","info"),c("home"))},12e4)}async function Oo(e,t,i,n,a,o){const{state:r,navigate:s,toast:l}=t,c=r.user.id,{data:d}=await h.from("matches").select("id, home_id, away_id, status").eq("away_id",c).eq("status","in_progress").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){l("Aucun match en attente","error"),s("home");return}await St(e,t,d.id,!1,{myGC:n,gcDefs:a,stadiumDef:o})}const ft="#1A6B3C",Xe="#D4A017";async function Ho(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await Ze(e,t,i);return}await st(e,t)}async function st(e,t,i="waiting"){var v;const{state:n}=t,a=n.profile.id,{data:o}=await h.from("mini_league_members").select("league_id").eq("user_id",a),r=(o||[]).map(y=>y.league_id),{data:s,error:l}=await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),c=l?(await h.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:s||[],u=(r.length?await h.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],f=u.filter(y=>y.status==="waiting"&&!y.is_archived),m=u.filter(y=>y.status==="active"&&!y.is_archived),g=u.filter(y=>y.is_archived||y.status==="finished"),p=c.filter(y=>!r.includes(y.id)),b=[{key:"waiting",label:"🟡 En attente",count:f.length+p.length},{key:"active",label:"🟢 En cours",count:m.length},{key:"archived",label:"📁 Archivées",count:g.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${b.map(y=>`<button class="ml-tab" data-tab="${y.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===y.key?ft:"transparent"};background:none;font-size:12px;font-weight:${i===y.key?"900":"600"};color:${i===y.key?ft:"#888"};cursor:pointer">${y.label}${y.count?` (${y.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Uo(f,p,a):i==="active"?Ko(m,a):Vo(g,a)}
    </div>
  </div>`,(v=document.getElementById("ml-create-btn"))==null||v.addEventListener("click",()=>Yo(e,t)),e.querySelectorAll(".ml-tab").forEach(y=>y.addEventListener("click",()=>st(e,t,y.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(y=>y.addEventListener("click",()=>Ze(e,t,y.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(y=>y.addEventListener("click",w=>{w.stopPropagation(),sn(e,t,y.dataset.join,y.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(y=>y.addEventListener("click",w=>{w.stopPropagation(),oi(e,t,y.dataset.delete,y.dataset.name,i)}))}function Ut(e,t,i=!1){var r,s;const n=e.creator_id===t,a=e.pot||0,o=((s=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:s.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${n?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${o}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${a>0?`<span style="color:${Xe};font-weight:700">🏆 ${a.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function Uo(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(a=>Ut(a,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(a=>Ut(a,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Ko(e,t){return e.length?e.map(i=>Ut(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Vo(e,t){return e.length?e.map(i=>Ut(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Yo(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,p,b,v;const{toast:n}=t,a=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,s=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",l=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((v=(b=document.getElementById("ml-pwd"))==null?void 0:b.value)==null?void 0:v.trim())||null;if(!a){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:d,error:u}=await h.from("mini_leagues").insert({name:a,creator_id:t.state.profile.id,type:s,password:c,mode:l,max_players:o,entry_fee:r}).select().single();if(u){n("Erreur : "+u.message,"error");return}const{data:f}=await h.from("users").select("credits").eq("id",t.state.profile.id).single();if(((f==null?void 0:f.credits)||0)<r){await h.from("mini_leagues").delete().eq("id",d.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await h.from("users").update({credits:f.credits-r}).eq("id",t.state.profile.id),await h.from("mini_leagues").update({pot:r}).eq("id",d.id),await h.from("mini_league_members").insert({league_id:d.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=f.credits-r);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),Ze(e,t,d.id)})}function Wo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=a=>{t.remove(),e(a)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",a=>{a.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",a=>{a.target===t&&n(null)})})}async function sn(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id,{data:s}=await h.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!s){a("Mini League introuvable","error");return}if(s.status!=="waiting"){a("Cette Mini League a déjà démarré","warning");return}const{count:l}=await h.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(l>=s.max_players){a("La Mini League est complète","warning");return}if(n==="private"){const p=await Wo();if(p===null)return;if(s.password!==p){a("Mot de passe incorrect","error");return}}const c=s.entry_fee||100,{data:d}=await h.from("users").select("credits").eq("id",r).single();if(((d==null?void 0:d.credits)||0)<c){a(`Crédits insuffisants — il te faut ${c.toLocaleString("fr")} cr. (solde : ${((d==null?void 0:d.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:u}=await h.from("mini_league_members").insert({league_id:i,user_id:r});if(u){a("Erreur inscription : "+u.message,"error");return}const{error:f}=await h.from("users").update({credits:d.credits-c}).eq("id",r),{error:m}=await h.from("mini_leagues").update({pot:(s.pot||0)+c}).eq("id",i);(f||m)&&console.error("Erreur post-inscription:",f,m),o.profile&&(o.profile.credits=d.credits-c);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`✅ Inscrit ! −${c.toLocaleString("fr")} cr. · Pot : ${((s.pot||0)+c).toLocaleString("fr")} cr.`,"success"),Ze(e,t,i)}async function Xo(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:s}=await h.from("mini_leagues").select("pot,status").eq("id",i).single();if(!s||s.status!=="waiting"){a("Impossible — la league a déjà démarré","error");return}const{data:l}=await h.from("users").select("credits").eq("id",r).single();await h.from("mini_leagues").update({pot:Math.max(0,(s.pot||0)-n)}).eq("id",i),await h.from("users").update({credits:((l==null?void 0:l.credits)||0)+n}).eq("id",r),await h.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),o.profile&&(o.profile.credits=((l==null?void 0:l.credits)||0)+n);const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),st(e,t,"waiting")}async function oi(e,t,i,n,a){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await h.from("mini_league_matches").delete().eq("league_id",i),await h.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await h.from("mini_leagues").delete().eq("id",i);if(r){o("Erreur suppression ("+r.message+")","error");return}o("Mini League supprimée avec succès","success"),st(e,t,a)}async function Jo(e,t,i){await h.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),st(e,t,"archived")}async function Ze(e,t,i){var $,x,R,I,D,N,Z,te,ie;const{state:n,toast:a}=t,o=n.profile.id,[{data:r},{data:s},{data:l}]=await Promise.all([h.from("mini_leagues").select("*").eq("id",i).single(),h.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),h.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){a("Introuvable","error"),await st(e,t);return}const c=(s||[]).some(j=>j.user_id===o),d=r.creator_id===o,u=(s||[]).map(j=>j.user).filter(Boolean),f=ln(u,l||[]),m=(l||[]).filter(j=>j.matchday===r.current_day),g=r.pot||0,p=r.entry_fee||100,b=m.length>0&&m.every(j=>j.status==="finished"||j.status==="bye"),v=r.current_day>=r.total_days,y=(s||[]).find(j=>j.user_id===o);e.innerHTML=`
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
        ${g>0?`<div style="font-size:12px;font-weight:900;color:${Xe};margin-top:4px">🏆 ${g.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${u.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*u.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*u.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*u.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*u.length*.1).toLocaleString("fr")})</div>
        ${u.map(j=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${j.club_color2||ft};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${j.club_color1||"#fff"}">${(j.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${j.club_name||j.pseudo}</div><div style="font-size:11px;color:#999">@${j.pseudo}</div></div>
            ${j.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
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
        ${m.map(j=>Fi(j,u,o,c)).join("")}
        ${d&&b&&!v?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${d&&b&&v?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&f.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${g>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${Xe}">💰</th>`:""}
          </tr></thead>
          <tbody>${f.map((j,T)=>{const k=g>0&&r.status==="finished"?T===0?Math.floor(g*.7):T===1?Math.floor(g*.2):T===2?Math.floor(g*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${j.userId===o?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${T===0?Xe:T<3?ft:"#555"}">${["🥇","🥈","🥉"][T]||T+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${j.clubName}</div><div style="font-size:10px;color:#999">@${j.pseudo}</div></td>
              <td style="text-align:center">${j.played}</td><td style="text-align:center">${j.won}-${j.drawn}-${j.lost}</td>
              <td style="text-align:center;color:${j.goalDiff>=0?ft:"#cc2222"}">${j.goalDiff>=0?"+":""}${j.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${j.points}</td>
              ${g>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${Xe}">${k?k.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(j,T)=>T+1).reverse().map(j=>{const T=(l||[]).filter(k=>k.matchday===j);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${j}</div>${T.map(k=>Fi(k,u,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${d&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const w=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if(($=document.getElementById("ml-back"))==null||$.addEventListener("click",()=>st(e,t,w)),(x=document.getElementById("ml-start-btn"))==null||x.addEventListener("click",()=>Qo(e,t,r,u)),(R=document.getElementById("ml-next-day"))==null||R.addEventListener("click",()=>Zo(e,t,i)),(I=document.getElementById("ml-finish-btn"))==null||I.addEventListener("click",()=>dn(e,t,i,g,f,u)),(D=document.getElementById("ml-join-now"))==null||D.addEventListener("click",()=>sn(e,t,i,r.type)),(N=document.getElementById("ml-leave-btn"))==null||N.addEventListener("click",()=>Xo(e,t,i,p)),(Z=document.getElementById("ml-delete-btn"))==null||Z.addEventListener("click",()=>oi(e,t,i,r.name,"waiting")),(te=document.getElementById("ml-delete-now"))==null||te.addEventListener("click",()=>oi(e,t,i,r.name,w)),(ie=document.getElementById("ml-archive-btn"))==null||ie.addEventListener("click",()=>Jo(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(j=>{j.addEventListener("click",()=>{const T=m.find(k=>k.id===j.dataset.playMatch);T&&t.navigate("match-mini-league",{mlMatchId:T.id,leagueId:i})})}),r.status==="finished"&&y){const j=f.findIndex(T=>T.userId===o);j>=0&&j<3&&y.prize_amount>0&&setTimeout(()=>er(e,t,r,y,j),400)}}function Fi(e,t,i,n,a=!1){const o=u=>t.find(f=>f.id===u);if(e.is_bye){const u=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"?"} exempté(e)</div>`}const r=o(e.home_id),s=o(e.away_id),l=e.home_id===i||e.away_id===i,c=l&&e.status==="pending"&&n&&!a,d=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${l?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${l?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?ft:"#999"}">${d}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Qo(e,t,i,n){const{toast:a,state:o}=t,r=tr(n.map(c=>c.id),i.mode),s=[];r.forEach((c,d)=>c.forEach(u=>s.push({league_id:i.id,matchday:d+1,home_id:u.home||u.bye,away_id:u.away||null,is_bye:!!u.bye,status:u.bye?"bye":"pending"})));const{error:l}=await h.from("mini_league_matches").insert(s);if(l){a("Erreur calendrier : "+l.message,"error");return}await h.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),a(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),Ze(e,t,i.id)}async function Zo(e,t,i){const{data:n}=await h.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),a=(n.current_day||0)+1;if(a>(n.total_days||0)){await dn(e,t,i,n.pot||0,null,null);return}await h.from("mini_leagues").update({current_day:a}).eq("id",i),t.toast(`Journée ${a} commencée !`,"success"),Ze(e,t,i)}async function dn(e,t,i,n,a,o){const{toast:r,state:s}=t;let l=a,c=o;if(!l){const{data:u}=await h.from("mini_league_matches").select("*").eq("league_id",i),{data:f}=await h.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);c=(f||[]).map(m=>m.user).filter(Boolean),l=ln(c,u||[])}const d=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(l.slice(0,3).map((u,f)=>d[f]?h.from("mini_league_members").update({prize_amount:d[f],prize_claimed:!1}).eq("league_id",i).eq("user_id",u.userId):Promise.resolve())),await h.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),Ze(e,t,i)}async function er(e,t,i,n,a){var f,m;const{state:o,toast:r}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],l=["🥇","🥈","🥉"][a],c=n.prize_amount||s[a]||0,d=n.prize_claimed,u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",u.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${l}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${a===0?"Champion !":a===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${Xe};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${d?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${Xe}">${c.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${a===0?"70%":a===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${d?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${Xe};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${c.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(u),(f=u.querySelector("#prize-close"))==null||f.addEventListener("click",()=>u.remove()),u.addEventListener("click",g=>{g.target===u&&u.remove()}),(m=u.querySelector("#claim-prize-btn"))==null||m.addEventListener("click",async()=>{const{data:g}=await h.from("users").select("credits").eq("id",o.profile.id).single();await h.from("users").update({credits:((g==null?void 0:g.credits)||0)+c}).eq("id",o.profile.id),await h.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",o.profile.id),o.profile&&(o.profile.credits=((g==null?void 0:g.credits)||0)+c);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),r(`💰 +${c.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),u.remove(),Ze(e,t,i.id)})}function tr(e,t){const n=e.length%2===0?[...e]:[...e,null],a=n.length;let o=n.slice(1);const r=[];for(let s=0;s<a-1;s++){const l=[],c=[n[0],...o];for(let d=0;d<a/2;d++){const u=c[d],f=c[a-1-d];u===null?l.push({bye:f}):f===null?l.push({bye:u}):l.push({home:u,away:f})}r.push(l),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(s=>s.map(l=>l.bye?l:{home:l.away,away:l.home}))]:r}function ln(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const a=i[n.home_id],o=i[n.away_id];!a||!o||(a.played++,o.played++,a.goalsFor+=n.home_score,a.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(a.won++,a.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,a.lost++):(a.drawn++,a.points++,o.drawn++,o.points++),a.goalDiff=a.goalsFor-a.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,a)=>a.points-n.points||a.goalDiff-n.goalDiff||a.goalsFor-n.goalsFor)}async function Gi(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.leagueId||null,s=o.mlMatchId||null;if(s&&r){await nr(e,t,s,r);return}if(r){await mi(e,t,r);return}await ir(e,t)}async function ir(e,t){const{state:i,navigate:n,toast:a}=t;await Mt(e,t,"mini_league",async({deckId:o,gcCardsEnriched:r,gcDefs:s,stadiumDef:l})=>{He(e);const c=r||[],d=i.user.id,{data:u}=await h.from("mini_leagues").insert({creator_id:d,deck_id:o,status:"waiting",gc_cards:c.map(f=>f.id)}).select("id").single();if(!u){a("Erreur création ligue","error"),n("home");return}await mi(e,t,u.id)})}async function mi(e,t,i){var u,f,m;const{state:n,navigate:a,toast:o}=t,r=n.user.id,{data:s}=await h.from("mini_leagues").select("*, creator:users!creator_id(pseudo), participants:mini_league_participants(user_id, deck_id, users(pseudo))").eq("id",i).single();if(!s){o("Ligue introuvable","error"),a("home");return}const l=s.creator_id===r,c=s.participants||[],d=c.length>=4;e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:28px">🏆</div>
        <h2 style="margin:8px 0">Mini Ligue</h2>
        <div style="font-size:13px;opacity:0.6">Code : <b>${i.slice(0,8).toUpperCase()}</b></div>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:16px">
        <div style="font-size:12px;opacity:0.6;margin-bottom:8px">Participants (${c.length}/4)</div>
        ${c.map(g=>{var p;return`
          <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
            <span>⚽</span>
            <span style="font-size:14px;font-weight:700">${((p=g.users)==null?void 0:p.pseudo)||"?"}</span>
            ${g.user_id===s.creator_id?'<span style="font-size:10px;color:#D4A017">CRÉATEUR</span>':""}
          </div>`}).join("")}
        ${Array(4-c.length).fill(0).map(()=>`
          <div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06);opacity:0.3;font-size:13px">En attente…</div>`).join("")}
      </div>

      <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto">
        ${l&&d?`
          <button id="start-league" style="padding:16px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            🚀 Lancer la ligue
          </button>`:""}
        ${c.find(g=>g.user_id===r)?"":`
          <button id="join-league" style="padding:16px;border-radius:12px;border:none;background:#1a3a6b;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            ➕ Rejoindre
          </button>`}
        <button id="back-home" style="padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:14px;cursor:pointer">
          Retour
        </button>
      </div>
    </div>`,(u=document.getElementById("start-league"))==null||u.addEventListener("click",async()=>{await h.from("mini_leagues").update({status:"in_progress"}).eq("id",i),await cn(e,t,i)}),(f=document.getElementById("join-league"))==null||f.addEventListener("click",async()=>{await Mt(e,t,"mini_league",async({deckId:g,gcCardsEnriched:p})=>{const b=p||[];await h.from("mini_league_participants").insert({league_id:i,user_id:r,deck_id:g,gc_cards:b.map(v=>v.id)}),o("Rejoint !","success"),await mi(e,t,i)})}),(m=document.getElementById("back-home"))==null||m.addEventListener("click",()=>a("home"))}async function cn(e,t,i){const{navigate:n,toast:a}=t,{data:o}=await h.from("mini_league_matches").select("id, match_id, home_id, away_id, status").eq("league_id",i).eq("status","pending").order("round",{ascending:!0}).limit(1),r=o==null?void 0:o[0];if(!r){await or(e,t,i);return}const s=t.state.user.id,l=r.home_id===s;await St(e,t,r.match_id,l,{mlLeagueId:i,mlMatchId:r.id,onMatchEnd:async c=>{await h.from("mini_league_matches").update({status:"finished",home_score:c.homeScore,away_score:c.awayScore,winner_id:c.winnerId}).eq("id",r.id),await cn(e,t,i)}})}async function nr(e,t,i,n){const{data:a}=await h.from("mini_league_matches").select("match_id, home_id, away_id").eq("id",i).single();if(!a){t.toast("Match introuvable","error"),t.navigate("home");return}const o=a.home_id===t.state.user.id;await St(e,t,a.match_id,o,{mlLeagueId:n,mlMatchId:i,onMatchEnd:async r=>{await h.from("mini_league_matches").update({status:"finished",home_score:r.homeScore,away_score:r.awayScore,winner_id:r.winnerId}).eq("id",i),t.navigate("home")}})}async function or(e,t,i){var d;const{navigate:n}=t,{data:a}=await h.from("mini_league_matches").select("home_id, away_id, home_score, away_score, winner_id, home:users!home_id(pseudo), away:users!away_id(pseudo)").eq("league_id",i),o={},r={};(a||[]).forEach(u=>{[u.home_id,u.away_id].forEach(f=>{o[f]||(o[f]=0),r[f]||(r[f]=0)}),u.winner_id?o[u.winner_id]=(o[u.winner_id]||0)+3:(o[u.home_id]=(o[u.home_id]||0)+1,o[u.away_id]=(o[u.away_id]||0)+1),r[u.home_id]=(r[u.home_id]||0)+(u.home_score||0),r[u.away_id]=(r[u.away_id]||0)+(u.away_score||0)});const s={};(a||[]).forEach(u=>{var f,m;s[u.home_id]=(f=u.home)==null?void 0:f.pseudo,s[u.away_id]=(m=u.away)==null?void 0:m.pseudo});const l=Object.keys(o).sort((u,f)=>o[f]-o[u]||r[f]-r[u]),c=["🥇","🥈","🥉","4️⃣"];e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:36px">🏆</div>
        <h2>Résultats de la Mini Ligue</h2>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;overflow:hidden">
        ${l.map((u,f)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06)">
            <div style="font-size:24px">${c[f]||"•"}</div>
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
    </div>`,(d=document.getElementById("back-home"))==null||d.addEventListener("click",()=>n("home"))}const rr="/",ar=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function sr(e,t,i){let n=0;const a=document.createElement("div");a.id="tutorial-overlay",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var d,u,f;const s=t[n],l=n===t.length-1,c=Math.round((n+1)/t.length*100);a.innerHTML=`
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
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${rr}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,a.querySelectorAll("ul,ol").forEach(m=>{m.style.paddingLeft="20px",m.style.marginTop="6px",m.style.marginBottom="6px"}),a.querySelectorAll("li").forEach(m=>{m.style.marginBottom="4px"}),a.querySelectorAll("p").forEach(m=>{m.style.marginBottom="8px"}),(d=a.querySelector("#tuto-prev"))==null||d.addEventListener("click",()=>{n--,o()}),(u=a.querySelector("#tuto-next"))==null||u.addEventListener("click",()=>{l?r():(n++,o())}),(f=a.querySelector("#tuto-skip"))==null||f.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{a.remove(),e!=null&&e.id&&await h.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(a),o()}async function dr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:a,error:o}=await h.rpc("get_tutorial_steps");if(!o&&(a==null?void 0:a.length)>0)n=a,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:l}=await h.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!l&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${l==null?void 0:l.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):ar;sr(e,r,()=>t("boosters"))}const qt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function lt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function lr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await xi(e,t)}async function xi(e,t){const{state:i,toast:n}=t,{data:a}=await h.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:o}=await h.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  </div>`;let l="buy";const c=()=>{var p,b,v,y,w,$,x;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((b=document.getElementById("flt-club"))==null?void 0:b.value)||"").toLowerCase().trim(),country:(((v=document.getElementById("flt-country"))==null?void 0:v.value)||"").toLowerCase().trim(),job:((y=document.getElementById("flt-job"))==null?void 0:y.value)||"",rarity:((w=document.getElementById("flt-rarity"))==null?void 0:w.value)||"",note1:parseInt(($=document.getElementById("flt-note1"))==null?void 0:$.value)||0,note2:parseInt((x=document.getElementById("flt-note2"))==null?void 0:x.value)||0}};function d(p){const b=c();return p.filter(v=>{var N,Z,te;const y=(N=v.card)==null?void 0:N.player;if(!y)return!1;const w=`${y.firstname} ${y.surname_real}`.toLowerCase(),$=(((Z=y.clubs)==null?void 0:Z.encoded_name)||"").toLowerCase(),x=(y.country_code||"").toLowerCase(),R=((te=v.card)==null?void 0:te.evolution_bonus)||0,I=lt(y,y.job,R),D=y.job2?lt(y,y.job2,R):0;return!(b.name&&!w.includes(b.name)||b.club&&!$.includes(b.club)||b.country&&!x.includes(b.country)||b.job&&y.job!==b.job||b.rarity&&y.rarity!==b.rarity||b.note1&&I<b.note1||b.note2&&D<b.note2)})}function u(p){var D,N,Z,te;const b=(D=p.card)==null?void 0:D.player;if(!b)return"";const v=((N=p.card)==null?void 0:N.evolution_bonus)||0,y=lt(b,b.job,v),w=b.job2?lt(b,b.job2,v):0,$=(i.profile.credits||0)>=p.price,x=b.country_code?`https://flagsapi.com/${b.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,R=qt[b.job]||"#bbb",I=b.job2?qt[b.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${x?`<img src="${x}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(Z=b.clubs)!=null&&Z.logo_url?`<img src="${b.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${R};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${R};font-family:Arial Black,Arial">${y}</span>
        </div>
        ${w?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${I};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${I};font-family:Arial Black,Arial">${w}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${b.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((te=p.seller)==null?void 0:te.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${$?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${$?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function f(p){var D,N,Z,te;const b=(D=p.card)==null?void 0:D.player;if(!b)return"";const v=((N=p.card)==null?void 0:N.evolution_bonus)||0,y=lt(b,b.job,v),w=b.job2?lt(b,b.job2,v):0,$=p.status==="sold",x=b.country_code?`https://flagsapi.com/${b.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,R=qt[b.job]||"#bbb",I=b.job2?qt[b.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${$?"opacity:0.7":""}">
      ${x?`<img src="${x}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(Z=b.clubs)!=null&&Z.logo_url?`<img src="${b.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${R};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${R};font-family:Arial Black,Arial">${y}</span>
        </div>
        ${w?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${I};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${I};font-family:Arial Black,Arial">${w}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${b.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.surname_real}</div>
        <div style="font-size:10px;color:${$?"#22c55e":"#999"};margin-top:1px">
          ${$?`✅ Vendu à ${((te=p.buyer)==null?void 0:te.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${$?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function m(){const p=document.getElementById("mkt-content"),b=document.getElementById("mkt-filters");if(p){if(b.style.display=l==="buy"?"flex":"none",l==="buy"){const v=d(r);p.innerHTML=v.length?v.map(u).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const v=s.filter(w=>w.status==="active").sort((w,$)=>new Date($.listed_at)-new Date(w.listed_at)),y=s.filter(w=>w.status==="sold").sort((w,$)=>new Date($.sold_at||$.listed_at)-new Date(w.sold_at||w.listed_at));p.innerHTML=(v.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${v.length})</div>`+v.map(f).join(""):"")+(y.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${y.length})</div>`+y.map(f).join(""):"")+(!v.length&&!y.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(v=>v.addEventListener("click",()=>cr(v.dataset.buy,r,e,t))),p.querySelectorAll("[data-cancel]").forEach(v=>v.addEventListener("click",()=>ur(v.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{l=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(b=>{const v=b===p;b.style.background=v?"var(--green)":"#fff",b.style.color=v?"#fff":"var(--gray-600)",b.style.borderColor=v?"var(--green)":"var(--gray-200)"}),m()})});let g;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var b;(b=document.getElementById(p))==null||b.addEventListener("input",()=>{clearTimeout(g),g=setTimeout(m,250)})}),m()}async function cr(e,t,i,n){const{state:a,toast:o,refreshProfile:r}=n,s=t.find(d=>d.id===e);if(!s)return;const l=s.price;if((a.profile.credits||0)<l){o("Crédits insuffisants","error");return}pr(s,async()=>{const{error:d}=await h.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:a.profile.id});if(d){o("Erreur achat : "+d.message,"error");return}await r();const u=document.getElementById("nav-credits");u&&(u.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await xi(i,n)})}function pr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(a);const o=s=>{a.remove(),s&&t()};a.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),a.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),a.addEventListener("click",s=>{s.target===a&&o(!1)})}async function ur(e,t,i){const{toast:n}=i,{data:a}=await h.from("market_listings").select("card_id").eq("id",e).single();if(await h.from("market_listings").update({status:"cancelled"}).eq("id",e),a!=null&&a.card_id){const{count:o}=await h.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",a.card_id).eq("status","active");o||await h.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",a.card_id)}n("Annonce retirée","success"),xi(t,i)}async function fr(e,t){var d,u,f,m;const{state:i,navigate:n}=t,a=((u=(d=t==null?void 0:t.state)==null?void 0:d.params)==null?void 0:u.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:o},{data:r}]=await Promise.all([h.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),h.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let s=a;function l(){var p,b;const g=document.getElementById("rankings-list");if(g){if(s==="global"){const v=o||[];g.innerHTML=v.length>0?v.map((y,w)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${y.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${w<3?"16":"13"}px">${w<3?["🥇","🥈","🥉"][w]:w+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${y.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${y.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${y.trophies_top1} 🥈${y.trophies_top2} 🥉${y.trophies_top3}</div>
            <div style="color:var(--gray-600)">${y.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const v=r||[];g.innerHTML=v.length>0?v.map((y,w)=>{const $=si(y.mmr??1e3),x=(y.ranked_wins||0)+(y.ranked_losses||0)+(y.ranked_draws||0),R=x>0?Math.round((y.ranked_wins||0)/x*100):0,I=y.id===i.profile.id,D=(y.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${I?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"rgba(255,255,255,0.08)"};color:${w<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${w<3?"16":"13"}px">${w<3?["🥇","🥈","🥉"][w]:w+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${$.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${y.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${y.club_name} · ${$.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${D?"❓":$.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${$.color}">${D?"Placement":$.label}</div>
              ${D?"":`<div style="font-size:10px;color:var(--gray-600)">${R}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(p=document.getElementById("tab-global"))!=null&&p.style&&(document.getElementById("tab-global").style.cssText=c(s==="global")),(b=document.getElementById("tab-ranked"))!=null&&b.style&&(document.getElementById("tab-ranked").style.cssText=c(s==="ranked"))}}const c=g=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${g?"900":"400"};background:${g?"var(--green)":"rgba(255,255,255,0.06)"};color:${g?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
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
  </div>`,l(),(f=document.getElementById("tab-global"))==null||f.addEventListener("click",()=>{s="global",l()}),(m=document.getElementById("tab-ranked"))==null||m.addEventListener("click",()=>{s="ranked",l()})}async function gr(e,t){var R,I,D,N;const{state:i,navigate:n,toast:a}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:s}]=await Promise.all([h.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),h.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){a("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(R=document.getElementById("ranked-back"))==null||R.addEventListener("click",()=>n("home"));return}const l=s.mmr??1e3,c=s.mmr_deviation??350,d=s.mmr_volatility??.06,u=s.placement_matches??0,f=u<10,m=Math.max(0,10-u),g=si(l),p=bn(l),b=Yt.findIndex(Z=>Z.id===g.id),v=Yt[b+1]||null,y={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},w=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),$=w>0?Math.round((s.ranked_wins||0)/w*100):0,x=Yt.map(Z=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${g.id===Z.id?1:.35};
      transform:${g.id===Z.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${g.id===Z.id?"28px":"20px"}">${Z.emoji}</div>
      <div style="font-size:9px;color:${Z.color};font-weight:${g.id===Z.id?"900":"400"};letter-spacing:0.5px">${Z.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${y[g.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${g.color}40">
      <div style="font-size:52px;margin-bottom:4px">${g.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${g.color};letter-spacing:3px;text-transform:uppercase">${g.label}</div>
    </div>

    <!-- Progression bar -->
    ${g.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${g.emoji} ${g.label}</span>
        ${v?`<span>${v.emoji} ${v.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${g.color},${g.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${v?v.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${x}
    </div>

    <!-- Placement / Stats -->
    ${f?`
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
        background:linear-gradient(135deg,${g.color},${g.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${g.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(I=document.getElementById("ranked-back"))==null||I.addEventListener("click",()=>n("home")),(D=document.getElementById("ranked-leaderboard-btn"))==null||D.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(N=document.getElementById("ranked-play-btn"))==null||N.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:l,rd:c,sigma:d,isPlacement:f}})})}async function mr(e,{state:t,navigate:i,toast:n}){const a=t.profile;if(!a)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await h.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${a.id},away_id.eq.${a.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(d=>d.status==="finished"),l=(o||[]).filter(d=>d.status==="in_progress");function c(d){const u=d.home_id===a.id;u?d.home_score:d.away_score,u?d.away_score:d.home_score;const f=d.winner_id===a.id,m=d.home_score===d.away_score&&d.status==="finished",g=d.status!=="finished"?"…":m?"N":f?"V":"D",p=d.status!=="finished"||m?"#888":f?"#1A6B3C":"#c0392b";let b=r[d.mode]||d.mode;d.away_id===null&&!b.startsWith("IA")&&(b="IA");const y=d.home_id===a.id?d.away:d.home;let w;d.away_id===null?w=b:y?w=`${y.club_name||y.pseudo} (${y.pseudo})`:w="Adversaire";let $="";d.status==="in_progress"&&Date.now()-new Date(d.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const x=new Date(d.created_at),R=x.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+x.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),I=d.status==="finished"?`${d.home_score} - ${d.away_score}`:`${d.home_score||0} - ${d.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${w}${$}</div>
        <div style="font-size:11px;color:var(--gray-600)">${b} · ${R}${d.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${I}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
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
  </div>`}yn(vn);const ve={user:null,profile:null,page:"home",params:{}};function ct(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function xr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function ri(){document.getElementById("modal-overlay").classList.add("hidden")}async function wt(){if(!ve.user)return;const{data:e}=await h.from("users").select("*").eq("id",ve.user.id).single();e&&(ve.profile=e)}function kt(e,t={}){ve.page=e,ve.params=t,pn()}async function pn(){var n,a,o,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ve.page)});const t=document.getElementById("nav-credits");t&&ve.profile&&(t.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const i={state:ve,navigate:kt,toast:ct,openModal:xr,closeModal:ri,refreshProfile:wt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await Ii(e,i);break;case"collection":await Kn(e,i);break;case"decks":await ei(e,i);break;case"boosters":await so(e,i);break;case"ranked":await gr(e,i);break;case"match":{const s=ve.params&&ve.params.matchMode||"vs_ai_easy";s==="random"?await ni(e,i,!1):s==="ranked"?await ni(e,i,!0):s==="friend"?await Ro(e,i,(n=ve.params)==null?void 0:n.friendId,(a=ve.params)==null?void 0:a.friendName):s==="mini-league"?await Gi(e,i,(o=ve.params)==null?void 0:o.mlMatchId,(r=ve.params)==null?void 0:r.leagueId):await vo(e,i);break}case"market":await lr(e,i);break;case"rankings":await fr(e,i);break;case"matches":await mr(e,i);break;case"friends":await Tn(e,i);break;case"mini-league":await Ho(e,i);break;case"match-mini-league":{const s=ve.params||{};await Gi(e,i,s.mlMatchId,s.leagueId);break}default:await Ii(e,i)}}function br(){var n;const e=document.getElementById("app"),t=ve.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",o=>{o.preventDefault(),kt(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>kt("home")),document.getElementById("nav-credits").addEventListener("click",()=>kt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>yr())}async function yr(){const{data:e}=await h.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const a=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function hr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&ri()}),document.getElementById("modal-close").addEventListener("click",ri);const{data:{session:e}}=await h.auth.getSession();if(!e){Pi(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ct});return}ve.user=e.user,await wt(),Pi();try{const{data:i}=await h.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(a=>{n[a.formation]=a.links}),hn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!ve.profile){_n(document.getElementById("app"),{state:ve,navigate:async()=>{await wt(),Zt()},toast:ct,refreshProfile:wt});return}const t=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&t.length>0){xo(document.getElementById("app"),{state:ve,navigate:()=>Zt(),toast:ct,refreshProfile:wt});return}Zt(),setTimeout(()=>dr(ve.profile,kt,ct),800),h.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ct}))})}function vr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Kt(){const e=document.getElementById("app");e&&(e.style.height=vr()+"px")}window.addEventListener("resize",Kt);window.addEventListener("orientationchange",()=>setTimeout(Kt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Kt);function Zt(){const e=()=>{var i;(i=ve.user)!=null&&i.id&&h.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Kt(),br(),pn()}function Pi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function un(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}hr().catch(e=>{console.error("Échec du démarrage:",e),un()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&un("Le serveur met trop de temps à répondre.")},12e3);
