const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-D0diUT_D.js","assets/formation-links-DCm4yyf6.css"])))=>i.map(i=>d[i]);
import{s as w,F as ai,r as Me,j as Mt,l as Gi,m as dt,h as si,n as fn,o as gn,T as Vt,k as mn,p as xn,b as yn}from"./formation-links-D0diUT_D.js";const bn="/";function Li(e,{navigate:t,toast:i}){let n="login";const a=()=>{var r,s,d,c,l,u;const o=n==="login";e.innerHTML=`
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
        <img src="${bn}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",a()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",a()}),o?((d=document.getElementById("login-password"))==null||d.addEventListener("keydown",f=>{var m;f.key==="Enter"&&((m=document.getElementById("login-btn"))==null||m.click())}),(c=document.getElementById("login-btn"))==null||c.addEventListener("click",async()=>{const f=document.getElementById("login-email").value.trim(),m=document.getElementById("login-password").value,g=document.getElementById("login-error");if(g.textContent="",!f||!m){g.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:x}=await w.auth.signInWithPassword({email:f,password:m});if(p.textContent="⚽ Se connecter",p.disabled=!1,x){g.textContent=x.message.includes("Invalid")?"Email ou mot de passe incorrect.":x.message;return}window.location.reload()})):((l=document.getElementById("reg-confirm"))==null||l.addEventListener("keydown",f=>{var m;f.key==="Enter"&&((m=document.getElementById("reg-btn"))==null||m.click())}),(u=document.getElementById("reg-btn"))==null||u.addEventListener("click",async()=>{const f=document.getElementById("reg-email").value.trim(),m=document.getElementById("reg-password").value,g=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!f||!m||!g){p.textContent="Remplissez tous les champs.";return}if(m.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(m!==g){p.textContent="Les mots de passe ne correspondent pas.";return}const x=document.getElementById("reg-btn");x.textContent="⏳ Création…",x.disabled=!0;const{error:b}=await w.auth.signUp({email:f,password:m});if(x.textContent="🚀 Créer mon compte",x.disabled=!1,b){p.textContent=b.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",a(),setTimeout(()=>{const v=document.getElementById("login-email");v&&(v.value=f)},50)}))};a()}function hn(e,{state:t,navigate:i,toast:n,refreshProfile:a}){let o="#1A6B3C",r="#D4A017";e.innerHTML=`
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
  `;function s(){var g;const c=document.getElementById("logo-preview"),l=document.getElementById("logo-initials"),u=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",f=u.trim().split(" ").filter(Boolean),m=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();c&&(c.style.background=r,c.style.borderColor=o),l&&(l.textContent=m,l.style.color=o)}document.getElementById("color1").addEventListener("input",c=>{o=c.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",c=>{r=c.target.value,document.getElementById("swatch2").style.background=r,s()});function d(c){document.querySelectorAll(".setup-step").forEach(l=>l.classList.remove("active")),document.getElementById(`step-${c}`).classList.add("active"),document.getElementById("step-num").textContent=c,document.getElementById("progress-fill").style.width=`${Math.round(c/3*100)}%`,c===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("step1-error");if(l.textContent="",c.length<3){l.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await w.from("users").select("id").eq("pseudo",c).maybeSingle();if(u){l.textContent="Ce pseudo est déjà pris.";return}d(2)}),document.getElementById("step2-back").addEventListener("click",()=>d(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const c=document.getElementById("setup-club").value.trim(),l=document.getElementById("step2-error");if(l.textContent="",c.length<2){l.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await w.from("users").select("id").eq("club_name",c).maybeSingle();if(u){l.textContent="Ce nom de club est déjà pris.";return}d(3)}),document.getElementById("step3-back").addEventListener("click",()=>d(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const c=document.getElementById("setup-pseudo").value.trim(),l=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:m}=await w.from("users").insert({id:t.user.id,pseudo:c,club_name:l,club_color1:o,club_color2:r,credits:1e4});if(m)throw m;await vn(t.user.id),await a(),n(`Bienvenue ${c} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(m){u.textContent=m.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function vn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await w.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const wn="modulepreload",_n=function(e){return"/"+e},zi={},Ri=function(t,i,n){let a=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));a=Promise.allSettled(i.map(d=>{if(d=_n(d),d in zi)return;zi[d]=!0;const c=d.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":wn,c||(u.as="script"),u.crossOrigin="",u.href=d,s&&u.setAttribute("nonce",s),document.head.appendChild(u),c)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return a.then(r=>{for(const s of r||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},Et="#1A6B3C",Lt="#cc2222",kn="#D4A017",Ti="#888";async function $n(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Ni(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Ln(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Oi(i,n,null,t))}async function Ni(e,t,i={}){const{navigate:n}=i,a=e.user.id,{data:o,error:r}=await w.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${a},addressee_id.eq.${a}`),{count:s}=await w.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",a).eq("status","pending"),d=document.getElementById("pending-badge");d&&(s>0?(d.style.display="flex",d.textContent=s):d.style.display="none");const c=document.getElementById("friends-list");if(!c)return;if(r){console.error("[Friends] Erreur:",r),c.innerHTML=`<div style="color:${Lt};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const l=(o||[]).map(m=>m.requester_id===a?m.addressee_id:m.requester_id);let u={};if(l.length){const{data:m}=await w.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",l);(m||[]).forEach(g=>{u[g.id]=g})}const f=(o||[]).map(m=>({friendshipId:m.id,friend:u[m.requester_id===a?m.addressee_id:m.requester_id]||{pseudo:"?"}}));if(!f.length){c.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}c.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${f.length} ami${f.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${f.map(({friendshipId:m,friend:g})=>En(g,m)).join("")}
    </div>`,c.querySelectorAll("[data-stats]").forEach(m=>{m.addEventListener("click",()=>zn(e,m.dataset.stats,m.dataset.friendName))}),c.querySelectorAll("[data-match]").forEach(m=>{m.addEventListener("click",()=>{const g=m.dataset.friendId,p=m.dataset.friendName;console.log("[Friends] clic match",{fid:g,fname:p,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:g,friendName:p}):t("Erreur navigation","error")})})}function En(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",a=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||Et,r=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,d=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${o};border:2.5px solid ${r};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${r}">
          ${a}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${d?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${n}</div>
        <div style="font-size:11px;color:${d?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${d?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${kn};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Ln(e,t){const i=di();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${Lt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${li()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),a=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",r=>{r.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){a.textContent="Entre un pseudo";return}a.textContent="";const{data:s}=await w.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!s){a.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){a.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:d}=await w.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(d){const l=d.status==="accepted"?"Vous êtes déjà amis !":d.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";a.textContent=l;return}const{error:c}=await w.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(c){a.textContent="Erreur : "+c.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Oi(e,t,i=null,n={}){const a=e.user.id,{data:o}=await w.from("friendships").select("id, requester_id").eq("addressee_id",a).eq("status","pending").order("created_at",{ascending:!1}),r=(o||[]).map(f=>f.requester_id);let s={};if(r.length){const{data:f}=await w.from("users").select("id, pseudo, club_name").in("id",r);(f||[]).forEach(m=>{s[m.id]=m})}const d=(o||[]).map(f=>({...f,requester:s[f.requester_id]||{pseudo:"?"}})),c=di(),l=d||[];c.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${l.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${l.map(f=>{var m,g,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((m=f.requester)==null?void 0:m.club_name)||((g=f.requester)==null?void 0:g.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=f.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${f.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Et};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${f.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${Lt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${li()}`,document.body.appendChild(c);const u=()=>c.remove();c.querySelector("#pending-close").addEventListener("click",u),c.addEventListener("click",f=>{f.target===c&&u()}),c.querySelectorAll("[data-accept]").forEach(f=>{f.addEventListener("click",async()=>{const{error:m}=await w.from("friendships").update({status:"accepted"}).eq("id",f.dataset.accept);if(m){t("Erreur : "+m.message,"error");return}f.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ni(e,t,n),i&&i()})}),c.querySelectorAll("[data-decline]").forEach(f=>{f.addEventListener("click",async()=>{await w.from("friendships").delete().eq("id",f.dataset.decline),f.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function zn(e,t,i){const n=e.user.id,[a,o]=[n,t].sort(),r=n===a,{data:s}=await w.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",o).single(),d=e.profile.club_name||e.profile.pseudo||"Moi",c=s||{},l=r?c.wins_p1||0:c.wins_p2||0,u=r?c.wins_p2||0:c.wins_p1||0,f=c.draws||0,m=r?c.goals_p1||0:c.goals_p2||0,g=r?c.goals_p2||0:c.goals_p1||0,p=r?c.gc_used_p1||0:c.gc_used_p2||0,x=r?c.gc_used_p2||0:c.gc_used_p1||0,b=c.matches_total||0,v=(k,y,I,E=Et,B=Lt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${E}">${y}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${k}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${B}">${I}</div>
    </div>`,h=di();h.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${b===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${v("Victoires",l,u)}
        ${v("Nuls",f,f,Ti,Ti)}
        ${v("Défaites",u,l)}
        ${v("Buts marqués",m,g)}
        ${v("Buts encaissés",g,m,Lt,Et)}
        ${v("GC utilisés ⚡",p,x,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${b} match${b>1?"s":""} joué${b>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${li()}`,document.body.appendChild(h),h.querySelector("#stats-close").addEventListener("click",()=>h.remove()),h.addEventListener("click",k=>{k.target===h&&h.remove()})}function di(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function li(){return`
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
        background:${Et};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const Tn="2026.07.12-1454";async function Ii(e,{state:t,navigate:i,toast:n}){var o,r;const a=t.profile;a&&(e.innerHTML=`
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
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${Tn}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var u,f,m,g,p;const s=((u=window.visualViewport)==null?void 0:u.height)||window.innerHeight,d=((f=document.querySelector(".top-nav"))==null?void 0:f.offsetHeight)||56,c=((m=document.querySelector(".bottom-nav"))==null?void 0:m.offsetHeight)||60;if(e.querySelector(".home-inner")){const x=s-d-c;e.querySelector(".home-dark").style.minHeight=x+"px"}if(window.innerWidth<768){const x=((g=e.querySelector(".home-hero"))==null?void 0:g.offsetHeight)||60,b=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const v=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,h=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((P,Q)=>{var ie;return P+(((ie=document.getElementById(Q))==null?void 0:ie.offsetHeight)||0)},0),k=12*5,y=s-d-c-x-v-h-k-32,I=Math.max(80,Math.round(y*.28)),E=Math.max(160,Math.round(y*.72)),B=Math.floor((E-10)/2);b&&(b.style.minHeight=b.style.maxHeight=I+"px"),e.querySelectorAll(".play-tile").forEach(P=>{P.style.minHeight=P.style.height=B+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(P=>{P.style.height=Math.round(B*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const d=s.dataset.action;if(d==="match-ai"){Sn(i);return}if(d==="match-random"){i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await w.auth.signOut(),window.location.reload()}),Ui(t,n),Mn(t,n,i),Hi(t,n,i))}async function Hi(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const a=e.profile.id,{data:o}=await w.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${a},away_id.eq.${a}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const r=o.map(d=>d.home_id===a?d.away_id:d.home_id).filter(Boolean);let s={};if(r.length){const{data:d}=await w.from("users").select("id, pseudo, club_name").in("id",r);(d||[]).forEach(c=>{s[c.id]=c.club_name||c.pseudo})}n.innerHTML=o.map(d=>{const c=d.home_id===a?d.away_id:d.home_id,l=s[c]||"Adversaire",u=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${u?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${l}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${u?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${c}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{const c=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:l}=await w.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();l?i("match-mini-league",{mlMatchId:l.id,leagueId:l.league_id}):i("mini-league")}else{const{resumePvpMatch:l}=await Ri(async()=>{const{resumePvpMatch:u}=await Promise.resolve().then(()=>Po);return{resumePvpMatch:u}},void 0);l(c,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{An(async()=>{await In(d.dataset.abandon,d.dataset.opp,a),t("Match abandonné (défaite 3-0)","info"),Hi(e,t,i)})})})}async function In(e,t,i){const{data:n}=await w.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const a=n.home_id===i,o=a?0:3,r=a?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=r,s.phase="finished",s.forfeit=!0,await w.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:r,game_state:s}).eq("id",e)}function An(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Mn(e,t,i){var s,d,c,l;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:a}=await w.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!a){n.innerHTML="";return}const o=((s=a.inviter)==null?void 0:s.club_name)||((d=a.inviter)==null?void 0:d.pseudo)||"?",r=a.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(c=document.getElementById("match-inv-accept"))==null||c.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:o})}),(l=document.getElementById("match-inv-decline"))==null||l.addEventListener("click",async()=>{await w.from("friend_match_invites").update({status:"declined"}).eq("id",a.id),n.innerHTML="",t("Invitation refusée","info")})}async function Ui(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:a}=await w.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(a||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,r=n.slice(0,2).map(d=>{var c;return((c=d.requester)==null?void 0:c.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Oi(e,t,()=>Ui(e,t)))}function Sn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:380px">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${t.map(a=>`<div class="action-card" data-mode="${a.mode}" style="cursor:pointer"><div class="icon">${a.icon}</div><div class="label">${a.label}</div><div class="sub">${a.sub}</div></div>`).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(a=>{a.addEventListener("click",()=>{n(),e("match",{matchMode:a.dataset.mode})})})}const Ce={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function je(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const Ai=["ATT","MIL","DEF","GK"];function Ki(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let a=n+1;a<i;a++){const o=e[n],r=e[a];if(!o||!r)continue;const s=o._col!=null&&r._col!=null&&o._col===r._col,d=o._col!=null&&r._col!=null&&Math.abs(o._col-r._col)===1,c=Ai.indexOf(o._line||o.job),l=Ai.indexOf(r._line||r.job),u=Math.abs(c-l)===1;if(!((o._line||o.job)===(r._line||r.job)&&d||s&&u))continue;const g=o.country_code&&r.country_code&&o.country_code===r.country_code,p=o.club_id&&r.club_id&&o.club_id===r.club_id;g&&p?t+=2:(g||p)&&(t+=1)}return t}function ci(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job,d=r.stadiumBonus&&(s==="MIL"||s==="ATT")?10:0;return o+(Number(s==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+d},0),n=Ki(e);let a=i+n;return t.doubleAttack&&(a*=2),t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function pi(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job;let d=0;s==="GK"?d=Number(r.note_g)||0:s==="MIL"?d=Number(r.note_m)||0:d=Number(r.note_d)||0;const c=r.stadiumBonus&&(s==="GK"||s==="DEF"||s==="MIL")?10:0;return o+d+(r.boost||0)+c},0),n=Ki(e);let a=i+n;return t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function ui(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Vi(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const a=[...n].sort((r,s)=>{const d=t==="attack"?je(r,"ATT"):r._line==="GK"?je(r,"GK"):je(r,"DEF");return(t==="attack"?je(s,"ATT"):s._line==="GK"?je(s,"GK"):je(s,"DEF"))-d});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return a.slice(0,Math.min(o,a.length,3))}function Cn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}function jn(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const a=Bn(i),o=Number(i[t])||0;if(o<=0)return 0;const r=i.note_min??1,s=i.note_max??10,c=(e.current_note??a)-a;return Math.min(s,Math.max(r,o+c))}function Bn(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}const qn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Yt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},jt=["GK","DEF","MIL","ATT"],Dn=["Tous","GK","DEF","MIL","ATT"],Fn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Mi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Pn(e){return e.length?e.reduce((t,i)=>Mi(i)>Mi(t)?i:t,e[0]):e[0]}function Gn(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Rn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Nn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Wt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Xt(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,a={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${Me(a,{width:140})}
  </div>`}function Si(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${Me(e,{width:140})}
  </div>`}async function On(e,t){const{state:i,navigate:n,toast:a,openModal:o,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await w.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:d}=await w.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),c=(s||[]).filter(T=>T.card_type==="player"&&T.player),l=(s||[]).filter(T=>T.card_type==="game_changer"),u=(s||[]).filter(T=>T.card_type==="formation"),f=(s||[]).filter(T=>T.card_type==="stadium"),{data:m}=await w.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(m||[]).forEach(T=>{g[T.name]=T});const{data:p}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),x={};(p||[]).forEach(T=>{x[T.id]=T}),f.forEach(T=>{T.stadium_def&&(x[T.stadium_id]=T.stadium_def)});const b=Object.keys(ai),v=Object.keys(Ce),h={};c.forEach(T=>{const C=T.player.id;h[C]=(h[C]||0)+1}),new Set(Object.keys(h).map(T=>String(T)));const k=new Set(u.map(T=>T.formation)),y=new Set(l.map(T=>T.gc_type));let I="player",E="Tous",B="",P=!1;function Q(){return[...c].sort((T,C)=>{const N=jt.indexOf(T.player.job),O=jt.indexOf(C.player.job);return N!==O?N-O:(T.player.surname_real||"").localeCompare(C.player.surname_real||"")})}function ie(){return[...d||[]].sort((T,C)=>{const N=jt.indexOf(T.job),O=jt.indexOf(C.job);return N!==O?N-O:(T.surname_real||"").localeCompare(C.surname_real||"")})}function de(){return Q().filter(T=>{const C=T.player,N=E==="Tous"||C.job===E,O=!B||`${C.firstname} ${C.surname_real}`.toLowerCase().includes(B);return N&&O})}function D(){return ie().filter(T=>{const C=E==="Tous"||T.job===E,N=!B||`${T.firstname} ${T.surname_real}`.toLowerCase().includes(B);return C&&N})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="player"?"var(--green)":"transparent"};
        color:${I==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="formation"?"var(--green)":"transparent"};
        color:${I==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="gc"?"var(--green)":"transparent"};
        color:${I==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${I==="stadium"?"#E87722":"transparent"};
        color:${I==="stadium"?"#E87722":"var(--gray-600)"}">
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
  </div>`;function z(){const T=document.getElementById("col-filters");T&&(I==="player"?(T.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${B}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Dn.map(C=>`
            <button class="filter-btn" data-job="${C}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${C===E?"var(--green)":"var(--gray-200)"};
                background:${C===E?"var(--green)":"#fff"};
                color:${C===E?"#fff":"var(--gray-600)"}">
              ${C}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${P?"var(--yellow)":"var(--gray-200)"};
              background:${P?"var(--yellow)":"#fff"};
              color:${P?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${P?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",C=>{B=C.target.value.toLowerCase(),$()}),e.querySelectorAll(".filter-btn").forEach(C=>{C.addEventListener("click",()=>{E=C.dataset.job,z(),$()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{P=!P,z(),$()})):(T.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${P?"var(--yellow)":"var(--gray-200)"};
              background:${P?"var(--yellow)":"#fff"};
              color:${P?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${P?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{P=!P,z(),$()})))}function $(){const T=document.getElementById("col-grid");T&&(I==="player"?ze(T):I==="formation"?Y(T):I==="stadium"?W(T):Z(T))}function G(T,C,N,O,V){const F=document.getElementById("col-grid"),H=document.getElementById("col-big");if(!F||!H)return;var $e=0;function we(){const _e=window.innerWidth>=768,be=document.getElementById("col-big"),Ee=document.getElementById("col-grid");_e&&be&&(be.style.minHeight="420px",be.style.flex="1 1 auto"),_e&&Ee&&(Ee.style.height=Math.round(310*.76+16)+"px",Ee.style.flexShrink="0",Ee.style.overflowX="auto",Ee.style.overflowY="hidden",Ee.style.alignItems="center",Ee.style.padding="8px 16px"),H.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+C(T[$e])+"</div>";var Te=H.querySelector("[data-card-id],[data-form-id],[data-gc-id]");Te&&Te.addEventListener("click",function(){O(T[$e])}),requestAnimationFrame(function(){var xe=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!xe||!H)){var Se=H.clientHeight-8,Fe=H.clientWidth-24,Pe=xe.offsetHeight,it=xe.offsetWidth;if(Pe>0&&it>0&&Se>40){var _=_e?2.2:1.6,L=Math.min(Se/Pe,Fe/it,_);xe.style.transform="scale("+L.toFixed(3)+")",xe.style.transformOrigin="top center"}}}),F.innerHTML=T.map(function(xe,Se){var Fe=Se===$e,Pe="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Fe?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Se+'" style="'+Pe+'">'+N(xe,Fe)+"</div>"}).join(""),F.querySelectorAll(".col-mini-item").forEach(function(xe){xe.addEventListener("click",function(){$e=Number(xe.dataset.idx),we(),xe.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}we()}function se(T){var C=window.innerWidth>=768?.76:.54,N;if(!T||T._fake){var O=T?T.player:null;if(!O)return"";N=Si(O)}else N=Xt(T,"");return'<div style="display:inline-block;zoom:'+C+';pointer-events:none;line-height:0">'+N+"</div>"}function ge(T,C,N){C=C||100,N=N||140;var O=Mt[T]||{},V={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},F=Math.max(3,Math.round(C*.06)),H=Object.entries(O).map(function(we){var _e=we[0],be=we[1],Ee=_e.replace(/\d+$/,""),Te=V[Ee]||"#888",xe=Math.round(be.x*C),Se=Math.round(be.y*N);return'<circle cx="'+xe+'" cy="'+Se+'" r="'+F+'" fill="'+Te+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),$e=Math.max(1,Math.round(C/50));return'<svg viewBox="0 0 '+C+" "+N+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+C+'" height="'+N+'" fill="#1A6B3C"/><rect x="'+Math.round(C*.2)+'" y="'+Math.round(N*.02)+'" width="'+Math.round(C*.6)+'" height="'+Math.round(N*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+$e+'"/><line x1="0" y1="'+Math.round(N*.5)+'" x2="'+C+'" y2="'+Math.round(N*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+$e+'"/><ellipse cx="'+Math.round(C*.5)+'" cy="'+Math.round(N*.5)+'" rx="'+Math.round(C*.18)+'" ry="'+Math.round(N*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+$e+'"/><rect x="'+Math.round(C*.2)+'" y="'+Math.round(N*.82)+'" width="'+Math.round(C*.6)+'" height="'+Math.round(N*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+$e+'"/>'+H+"</svg>"}function le(T,C,N){var O=N>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+N+"</div>":"",V=C?'data-form-id="'+C.id+'"':"",F=T.length>7?14:T.length>5?16:19,H=!!C;return"<div "+V+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(H?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(H?"":"filter:grayscale(1);opacity:0.5")+'">'+O+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(H?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+F+"px;font-weight:900;color:"+(H?"#1A6B3C":"#aaa")+';line-height:1">'+T+'</div></div><div style="flex:1;overflow:hidden;background:'+(H?"#1A6B3C":"#ccc")+'">'+ge(T,140,220)+"</div></div>"}function re(T,C){var N=window.innerWidth>=768?.76:.54,O=140,V=305,F=Math.round(V*.22),H=V-F,$e=T.length>7?10:13,we=ge(T,O,H),_e=C?"1.5px solid #2a7a40":"1px solid #ddd",be=C?"":"filter:grayscale(1);opacity:0.45;",Ee=C?"#1A6B3C":"#bbb",Te="#fff";return'<div style="display:inline-block;zoom:'+N+';line-height:0;pointer-events:none"><div style="width:'+O+"px;height:"+V+"px;border-radius:6px;border:"+_e+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+be+'"><div style="height:'+F+"px;background:"+Ee+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+$e+"px;font-weight:900;color:"+Te+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(O-4)+'px">'+T+'</span></div><div style="height:'+H+'px;overflow:hidden;flex-shrink:0">'+we+"</div></div></div>"}function ze(T){if(P){const C=D();if(!C.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const N=C.map(O=>c.find(V=>V.player.id===O.id)||{_fake:!0,player:O,id:"fake-"+O.id});G(N,O=>O._fake?Si(O.player):Xt(O,""),O=>O._fake?se({player:O.player,id:"x",_fake:!0}):se(O),O=>{O._fake||Ci(O,c,h,t)})}else{const C=de();if(!C.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const N={};C.forEach(V=>{const F=V.player.id;N[F]||(N[F]=[]),N[F].push(V)});const O=Object.values(N).map(V=>Pn(V));G(O,V=>{const F=h[V.player.id]||1,H=F>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${F}</div>`:"",we=c.filter(_e=>_e.player.id===V.player.id&&_e.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Xt(V,H+we)},V=>se(V),V=>Ci(V,c,h,t))}}function Y(T){const C=P?b:[...k];if(!C.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const N=C.map(O=>({formation:O,card:u.find(V=>V.formation===O)||null,owned:k.has(O)}));G(N,({formation:O,card:V,owned:F})=>le(O,F?V:null,F?u.filter(H=>H.formation===O).length:0),({formation:O,owned:V})=>re(O,V),({card:O,owned:V})=>{V&&O&&Un(O,u,t,o)})}function Z(T){const C=Object.keys(g),N=P?C.length?C:v:[...y];if(!N.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const O=N.map(V=>({type:V,gc:Ce[V]||{icon:"⚡",desc:""},def:g[V]||null,owned:y.has(V),card:l.find(F=>F.gc_type===V)||null}));G(O,({type:V,gc:F,def:H,owned:$e,card:we})=>{var _;const _e=$e?l.filter(L=>L.gc_type===V).length:0,be=_e>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${_e}</div>`:"",Ee=(H==null?void 0:H.gc_type)==="ultra_game_changer",Te={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},xe={purple:"#b06ce0",light_blue:"#00d4ef"},Se=Te[H==null?void 0:H.color]||Te.purple,Fe=xe[H==null?void 0:H.color]||xe.purple,Pe=(H==null?void 0:H.effect)||F.desc||"",it=H!=null&&H.image_url?`/icons/${H.image_url}`:((_=H==null?void 0:H.club)==null?void 0:_.logo_url)||(H!=null&&H.country_code?`https://flagsapi.com/${H.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return $e&&we?`<div data-gc-id="${we.id}" data-gc-type="${V}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Fe};background:${Se};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Fe}66;cursor:pointer">
          ${be}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${V.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${V}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ee?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${it?`<img src="${it}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${F.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${Pe.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${V}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${F.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:V,gc:F,def:H,owned:$e})=>{const we=window.innerWidth>=768?.76:.54,_e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},be={purple:"#9b59b6",light_blue:"#00bcd4"},Ee=_e[H==null?void 0:H.color]||_e.purple,Te=be[H==null?void 0:H.color]||be.purple,xe=H!=null&&H.image_url?`/icons/${H.image_url}`:null;return $e?`<div style="display:inline-block;zoom:${we};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ee};border:1px solid ${Te};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${V}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${xe?`<img src="${xe}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${F.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((H==null?void 0:H.effect)||F.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${we};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${F.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${V}</span></div></div>`},({type:V,owned:F,def:H})=>{F&&Hn(V,H,o)})}function W(T){const C="#E87722",N="/";if(!f.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const O={};f.forEach(F=>{const H=F.stadium_id||"?";(O[H]=O[H]||[]).push(F)});const V=Object.entries(O).map(([F,H])=>({sid:F,def:x[F]||null,count:H.length,card:H[0]}));G(V,({def:F,count:H})=>{var Te,xe;const $e=(F==null?void 0:F.name)||"?",we=((Te=F==null?void 0:F.club)==null?void 0:Te.encoded_name)||(F==null?void 0:F.country_code)||"—",_e=F!=null&&F.image_url?`${N}icons/${F.image_url}`:((xe=F==null?void 0:F.club)==null?void 0:xe.logo_url)||(F!=null&&F.country_code?`https://flagsapi.com/${F.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),be=_e?`<img src="${_e}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Ee=H>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${H}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${C},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${C}66">
          ${Ee}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$e}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${be}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${we}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:F,count:H})=>{var Te,xe;const $e=window.innerWidth>=768?.76:.54,we=(F==null?void 0:F.name)||"?",_e=((Te=F==null?void 0:F.club)==null?void 0:Te.encoded_name)||(F==null?void 0:F.country_code)||"—",be=F!=null&&F.image_url?`${N}icons/${F.image_url}`:((xe=F==null?void 0:F.club)==null?void 0:xe.logo_url)||(F!=null&&F.country_code?`https://flagsapi.com/${F.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Ee=be?`<img src="${be}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${$e};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${C},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${we}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${Ee}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${_e}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(T=>{T.addEventListener("click",()=>{I=T.dataset.tab,E="Tous",B="",P=!1,e.querySelectorAll(".col-tab-btn").forEach(C=>{const N=C.dataset.tab===I;C.style.borderBottomColor=N?"var(--green)":"transparent",C.style.color=N?"var(--green)":"var(--gray-600)"}),z(),$()})}),z(),$()}function Hn(e,t,i){const n=Ce[e]||{icon:"⚡",desc:"Effet spécial."},a=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[t==null?void 0:t.color]||o.purple,d=r[t==null?void 0:t.color]||r.purple,c=(t==null?void 0:t.name)||e,l=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${d};
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
        <div style="font-size:14px;color:#333">${l}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Bt=1e3;function Un(e,t,i,n){var g,p,x;const{state:a,toast:o,closeModal:r,navigate:s,refreshProfile:d}=i,c=e.formation,l={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const b=Mt[c]||{},v=ai[c]||[],h=290,k=360,y=20;function I(B){const P=b[B];return P?{x:P.x*h,y:P.y*k}:null}let E=`<svg width="${h}" height="${k}" viewBox="0 0 ${h} ${k}" xmlns="http://www.w3.org/2000/svg">`;for(const[B,P]of v){const Q=I(B),ie=I(P);!Q||!ie||(E+=`<line x1="${Q.x}" y1="${Q.y}" x2="${ie.x}" y2="${ie.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const B of Object.keys(b)){const P=I(B);if(!P)continue;const Q=B.replace(/\d+/,""),ie=l[Q]||"#555";E+=`<circle cx="${P.x}" cy="${P.y}" r="${y}" fill="${ie}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,E+=`<text x="${P.x}" y="${P.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${Q}</text>`}return E+="</svg>",E}const f=t.filter(b=>b.formation===c);f.length;const m=!e.is_for_sale;n(`Formation ${c}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Bt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(g=document.getElementById("direct-sell-form-btn"))==null||g.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${c} pour ${Bt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const b=f.find(h=>!h.is_for_sale)||f[0];if(!b){o("Aucune carte à vendre","error");return}await w.from("market_listings").delete().eq("card_id",b.id),await w.from("transfer_history").delete().eq("card_id",b.id);const{error:v}=await w.from("cards").delete().eq("id",b.id);if(v){o(v.message,"error");return}await w.from("users").update({credits:(a.profile.credits||0)+Bt}).eq("id",a.profile.id),await d(),o(`+${Bt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const b=parseInt(document.getElementById("sell-price-form").value);if(!b||b<1){o("Prix invalide","error");return}await w.from("cards").update({is_for_sale:!0,sale_price:b}).eq("id",e.id),await w.from("market_listings").insert({seller_id:a.profile.id,card_id:e.id,price:b}),o("Carte mise en vente sur le marché !","success"),r(),s("collection")}),(x=document.getElementById("cancel-sell-form-btn"))==null||x.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),r(),s("collection")})}async function Ci(e,t,i,n){var se,ge,le,re,ze;const{state:a,toast:o,openModal:r,closeModal:s,navigate:d,refreshProfile:c}=n,l=e.player,u=t.filter(Y=>Y.player.id===l.id),f=u.length,m=e.evolution_bonus||0,g=Math.max((Number(l.note_g)||0)+(l.job==="GK"||l.job2==="GK"?m:0),(Number(l.note_d)||0)+(l.job==="DEF"||l.job2==="DEF"?m:0),(Number(l.note_m)||0)+(l.job==="MIL"||l.job2==="MIL"?m:0),(Number(l.note_a)||0)+(l.job==="ATT"||l.job2==="ATT"?m:0)),p=l.rarity||"normal",{data:x}=await w.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1);((se=x==null?void 0:x[0])==null?void 0:se.price)??Fn[p];const b=l.rarity!=="legende";Nn(l);const v=((l.rarity==="pepite"||l.rarity==="papyte")&&e.current_note!=null?e.current_note:Wt(l,l.job))+m,h=l.rarity==="pepite"||l.rarity==="papyte",k=l.job2?(h?jn(e,Gn(l.job2)):Wt(l,l.job2))+(Wt(l,l.job2)>0?m:0):null;Yt[l.job],l.job2&&Yt[l.job2];const y=qn[l.rarity]||"#ccc";Rn[l.country_code]||l.country_code;const I=e.evolution_bonus||0,B=v+I,P=k||0,Q=P>0?P+I:0,ie=u.map(Y=>Y.id);let de={};if(ie.length){const{data:Y}=await w.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",ie).order("transferred_at",{ascending:!0});(Y||[]).forEach(Z=>{de[Z.card_id]||(de[Z.card_id]=[]),de[Z.card_id].push(Z)})}const D=Y=>{const Z=Y.transferred_at?new Date(Y.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",W=Y.source==="booster"?"Booster":Y.price?Y.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Y.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${Y.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${Y.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${W}</div>
        <div style="font-size:11px;color:var(--gray-600)">${Z}</div>
      </div>
    </div>`},z=ie.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${f>1?`(${f})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${u.map((Y,Z)=>{const W=de[Y.id]||[],T=Y.is_for_sale,C=W.length?W[W.length-1]:null,O=(l.rarity==="pepite"||l.rarity==="papyte")&&Y.current_note!=null?` (☆${Y.current_note})`:"";return`
            <div data-card-id="${Y.id}" data-card-idx="${Z}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${T?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${Y.id}" ${T?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${Z+1}${O}${T?" 🏷️ En vente":""}</div>
                  ${C?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${C.club_name} · ${C.source==="booster"?"Booster":C.price?C.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${Z}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${W.length?`${W.length} club${W.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${Z}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${W.map(D).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${B}${l.job2&&P>0?` / ${Q}`:""}`:`Note actuelle : ${B}${l.job2&&P>0?` / ${Q}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${f<=1?"#ccc":"#1A6B3C"};border-color:${f<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${f<=1?"not-allowed":"pointer"}"
            ${f<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${b?`
        <div style="border-top:1px solid #d1fae5;padding-top:8px">
          <div style="font-size:11px;color:#555;margin-bottom:6px">Marché des transferts (prix par carte)</div>
          <div style="display:flex;gap:8px">
            <input type="number" id="sell-market-price" min="1" placeholder="Prix par carte"
              value="${l.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";r(`${l.firstname} ${l.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${Me({...l,_evolution_bonus:m},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${y}">${l.rarity.toUpperCase()}</div>
          ${l.rarity==="pepite"||l.rarity==="papyte"?`
          <div style="margin-top:6px;background:${y}18;border-left:3px solid ${y};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${y};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${l.rarity==="pepite"?"✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>":"✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>"}
              <br>Note actuelle : <b>${e.current_note??(l.rarity==="pepite"?l.note_min:l.note_max)??"—"}</b>
              &nbsp;·&nbsp; Min : <b>${l.note_min??"—"}</b>
              &nbsp;·&nbsp; Max : <b>${l.note_max??"—"}</b>
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${l.job}${l.job2?" / "+l.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",l.note_g],["DEF",l.note_d],["MIL",l.note_m],["ATT",l.note_a]].map(([Y,Z])=>{const W=Yt[Y],T=Y==="GK"?"#fff":W,C=Y===l.job||Y===l.job2,N=(Number(Z)||0)+(C&&I>0?I:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${W};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${T};font-family:Arial Black,Arial;line-height:1">${N}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${T}">${Y}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${f}</div>
        </div>
      </div>
    </div>
    ${z}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ge=document.getElementById("close-detail"))==null||ge.addEventListener("click",s);let $=new Set;const G=()=>{const Y=$.size,Z=document.getElementById("sell-action-panel");if(!Z)return;Z.style.display=Y>0?"block":"none",document.getElementById("sell-selected-count").textContent=Y;const W=document.getElementById("evolve-btn");W&&(W.textContent=`⬆️ Évoluer ${Y>1?"(+"+Y+")":""}`)};document.querySelectorAll(".expl-check").forEach(Y=>{Y.addEventListener("change",()=>{const Z=Y.dataset.id;Y.checked?$.add(Z):$.delete(Z);const W=Y.closest(".exemplaire-row");W&&(W.style.borderColor=Y.checked?"#1A6B3C":"#eee"),G()})}),document.querySelectorAll(".exemplaire-row").forEach(Y=>{Y.addEventListener("click",Z=>{if(Z.target.closest("button")||Z.target.tagName==="INPUT")return;const W=Y.querySelector(".expl-check");W&&!W.disabled&&(W.checked=!W.checked,W.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(Y=>{Y.addEventListener("click",Z=>{Z.stopPropagation();const W=document.querySelector(`.expl-hist[data-hist="${Y.dataset.idx}"]`);W&&(W.style.display=W.style.display==="none"?"flex":"none")})}),(le=document.getElementById("evolve-btn"))==null||le.addEventListener("click",async()=>{if(f<=1)return;const Y=[...$];if(!Y.length)return;if($.has(e.id)){const V=document.createElement("div");V.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",V.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(V),V.querySelector("#err-close").addEventListener("click",()=>V.remove()),V.addEventListener("click",F=>{F.target===V&&V.remove()});return}const Z=Y.filter(V=>V!==e.id),W=l.rarity==="legende"?2:1;if((Z.length||1)*W,!(!Z.length&&Y.length===1&&Y[0]===e.id)){if(!Z.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(V=>{const F=document.createElement("div");F.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",F.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${l.firstname} ${l.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${Z.length}</strong> copie${Z.length>1?"s":""} sacrifiée${Z.length>1?"s":""}<br>
            📈 Note : <strong>${v+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${v+(e.evolution_bonus||0)+Z.length*W}</strong>
            ${k&&k>0?`<br>📈 Note 2 : <strong>${k+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${k+(e.evolution_bonus||0)+Z.length*W}</strong>`:""}
            ${l.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${W} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(F),F.querySelector("#sac-cancel").addEventListener("click",()=>{F.remove(),V(!1)}),F.querySelector("#sac-ok").addEventListener("click",()=>{F.remove(),V(!0)}),F.addEventListener("click",H=>{H.target===F&&(F.remove(),V(!1))})}))return;if(Z.length){await w.from("market_listings").delete().in("card_id",Z),await w.from("deck_cards").delete().in("card_id",Z),await w.from("transfer_history").delete().in("card_id",Z),await w.from("decks").update({stadium_card_id:null}).in("stadium_card_id",Z);const{error:V}=await w.from("cards").delete().in("id",Z);if(V){o("Erreur suppression : "+V.message,"error");return}}const C=(e.evolution_bonus||0)+Z.length*W,{error:N}=await w.from("cards").update({evolution_bonus:C}).eq("id",e.id);if(N){o("Erreur évolution : "+N.message,"error");return}const O=v+C;o(`⬆️ ${l.firstname} ${l.surname_real} : note ${v+e.evolution_bonus||v} → ${O}${Z.length?` · ${Z.length} copie${Z.length>1?"s":""} sacrifiée${Z.length>1?"s":""}`:""} !`,"success",4e3),s(),d("collection")}),(re=document.getElementById("market-sell-btn"))==null||re.addEventListener("click",async()=>{var N;const Y=[...$];if(!Y.length){o("Sélectionne au moins un exemplaire","warning");return}const Z=parseInt((N=document.getElementById("sell-market-price"))==null?void 0:N.value);if(!Z||Z<1){o("Prix invalide","error");return}const{error:W}=await w.from("cards").update({is_for_sale:!0,sale_price:Z}).in("id",Y);if(W){o(W.message,"error");return}const T=Y.map(O=>({seller_id:a.profile.id,card_id:O,price:Z,status:"active"})),{error:C}=await w.from("market_listings").insert(T);C&&console.warn("[Market] insert listings:",C.message),o(`${Y.length} carte${Y.length>1?"s":""} mise${Y.length>1?"s":""} en vente à ${Z.toLocaleString("fr")} cr. chacune !`,"success"),s(),d("collection")}),(ze=document.getElementById("cancel-sell-btn"))==null||ze.addEventListener("click",async()=>{await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await w.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),d("collection")})}const Pt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}};async function Zt(e,t){const{state:i,navigate:n,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!r)return;const{data:s,error:d}=await w.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(d){a(d.message,"error");return}a("Deck créé !","success"),ji(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>ji(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",r.dataset.name);if(!s||s===r.dataset.name)return;const{error:d}=await w.from("decks").update({name:s}).eq("id",r.dataset.rename);if(d){a(d.message,"error");return}a("Deck renommé !","success"),Zt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await w.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:s}=await w.from("decks").delete().eq("id",r.dataset.delete);if(s){a(s.message,"error");return}a("Deck supprimé.","success"),Zt(e,t)})})}async function ji(e,t,i){const{state:n,toast:a}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select("*").eq("id",e).single(),{data:r}=await w.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length, face,
        clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),{data:s}=await w.from("cards").select(`id, card_type, stadium_id,
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id).eq("card_type","stadium"),d=(r||[]).filter(b=>b.card_type==="player"&&b.player),c=(r||[]).filter(b=>b.card_type==="formation"),l=(s||[]).filter(b=>b.card_type==="stadium"),u=[...new Set(l.map(b=>b.stadium_id).filter(Boolean))];let f={};if(l.forEach(b=>{b.stadium_def&&b.stadium_id&&(f[b.stadium_id]=b.stadium_def)}),u.length&&Object.keys(f).length<u.length){const{data:b}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",u);(b||[]).forEach(v=>{f[v.id]=v})}const m=c.map(b=>b.formation).filter(Boolean),{data:g}=await w.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let p=o.formation||"4-4-2";m.length>0&&!m.includes(p)&&(p=m[0]);const x={deckId:e,name:o.name,formation:p,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:d,formationCards:c,stadiumCards:l,stadDefMap:f,availableFormations:m};(g||[]).forEach(b=>{b.is_starter?x.slots[b.position]=b.card_id:x.subs.includes(b.card_id)||x.subs.push(b.card_id)}),et(t,x,i)}function et(e,t,i){var g,p;const{navigate:n}=i;Pt[t.formation];const a=Bi(t.formation),o=a.filter(x=>t.slots[x]).length,r=t.availableFormations.length>0?t.availableFormations:Object.keys(Pt),s=(g=t.stadiumCards)==null?void 0:g.find(x=>x.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.subs.map(x=>t.playerCards.find(b=>b.id===x)).filter(Boolean);[...Object.values(t.slots),...t.subs],e.innerHTML=`
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
                ${Me({...b,_evolution_bonus:b._evolution_bonus||0},{width:60,showStad:!0,stadDef:d})}
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
                  ${Me({...b,_evolution_bonus:b._evolution_bonus||0},{width:44,showStad:!0,stadDef:d})}
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
  </div>`;const l=window.innerWidth>=900,u=e.querySelector(".deck-pc-layout"),f=e.querySelector(".deck-mobile-layout");u&&(u.style.display=l?"block":"none"),f&&(f.style.display=l?"none":"block"),Kn(e,t,a,i),e.querySelectorAll("#builder-back").forEach(x=>x.addEventListener("click",()=>n("decks")));const m=()=>{const{openModal:x,closeModal:b}=i,v=`<div style="display:flex;flex-wrap:wrap;gap:8px;padding:8px">
      ${r.map(h=>`<div data-forma="${h}" style="cursor:pointer;padding:10px 16px;border-radius:8px;background:${h===t.formation?"#1A6B3C":"#f0f0f0"};color:${h===t.formation?"#fff":"#111"};font-weight:900;font-size:16px;border:2px solid ${h===t.formation?"#1A6B3C":"#ddd"}">${h}</div>`).join("")}
    </div>`;x("⚽ Choisir une formation",v),document.querySelectorAll("#modal-body [data-forma]").forEach(h=>{h.addEventListener("click",()=>{t.formation=h.dataset.forma;const k=Bi(t.formation),y={};k.forEach(I=>{t.slots[I]&&(y[I]=t.slots[I])}),t.slots=y,b(),et(e,t,i)})})};e.querySelectorAll("#formation-mobile-btn, #formation-pc-btn").forEach(x=>x.addEventListener("click",m)),e.querySelectorAll("#add-stad-btn-pc, #add-stad-btn").forEach(x=>x.addEventListener("click",()=>Vn(t,e,i))),e.querySelectorAll("#save-deck").forEach(x=>x.addEventListener("click",()=>Xn(t,i))),e.querySelectorAll("[data-remove-sub]").forEach(x=>{x.addEventListener("click",()=>{t.subs=t.subs.filter(b=>b!==x.dataset.removeSub),et(e,t,i)})}),e.querySelectorAll("#add-sub-btn").forEach(x=>x.addEventListener("click",()=>Wn(t,e,i)))}function Kn(e,t,i,n){var h,k;const a=window.innerWidth>=900,o=e.querySelector(a?"#deck-field-pc":"#deck-field-mobile");if(!o)return;const r=(h=t.stadiumCards)==null?void 0:h.find(y=>y.id===t.stadiumCardId),s=r&&((k=t.stadDefMap)==null?void 0:k[r.stadium_id])||null,d=Mt[t.formation]||{},c=Gi(t.formation)||[],l={};for(const y of i){const I=t.slots[y],E=I?t.playerCards.find(B=>B.id===I):null;E!=null&&E.player?l[y]={...E.player,_evolution_bonus:E.evolution_bonus||0,face:E.player.face||null}:l[y]=null}const u=window.innerWidth>=900,f=u?window.innerWidth-280:window.innerWidth-20,m=u?Math.min(f,860):f,g=Math.round(u?m*.82:m*.85),p=u?84:44;let x="";for(const[y,I]of c){const E=d[y],B=d[I];if(!E||!B)continue;const P=E.x*m,Q=Math.round(.03*g+E.y*.85*g),ie=B.x*m,de=Math.round(.03*g+B.y*.85*g),D=l[y],z=l[I],$=dt(D,z);$==="#ff3333"||$==="#cc2222"?x+=`<line x1="${P.toFixed(1)}" y1="${Q.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${de.toFixed(1)}" stroke="${$}" stroke-width="2" stroke-linecap="round" opacity="0.35"/>`:(x+=`<line x1="${P.toFixed(1)}" y1="${Q.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${de.toFixed(1)}" stroke="${$}" stroke-width="8" stroke-linecap="round" opacity="0.15"/>`,x+=`<line x1="${P.toFixed(1)}" y1="${Q.toFixed(1)}" x2="${ie.toFixed(1)}" y2="${de.toFixed(1)}" stroke="${$}" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>`)}let b="";const v=Math.round(p*657/507);for(const y of i){const I=d[y];if(!I)continue;const E=l[y],B=I.x*m;I.y*g;const P=Math.round(.03*g+I.y*(.85*g)),Q=Math.round(B-p/2),ie=Math.round(P-v/2);if(E){const de=y.replace(/\d+/,""),D=s&&(s.club_id&&String(E.club_id)===String(s.club_id)||s.country_code&&E.country_code===s.country_code),z=Me({...E,_evolution_bonus:E._evolution_bonus||0},{width:p,showStad:!0,stadDef:s,role:de});b+=`<div style="position:absolute;left:${Q}px;top:${ie}px;cursor:pointer;z-index:2;position:absolute" class="deck-slot-hit" data-pos="${y}">
        <div style="position:relative">${D?'<div style="position:absolute;top:-18px;left:0;right:0;text-align:center;font-size:14px;z-index:5;line-height:1">🏟️</div>':""}${z}</div>
      </div>`}else{const de=y.replace(/\d+/,"");b+=`<div style="position:absolute;left:${Q}px;top:${ie}px;width:${p}px;height:${v}px;
        border:2px dashed rgba(255,255,255,0.35);border-radius:6px;
        display:flex;flex-direction:column;align-items:center;justify-content:center;
        cursor:pointer;z-index:2;background:rgba(255,255,255,0.04)"
        class="deck-slot-hit" data-pos="${y}">
        <span style="font-size:20px;color:rgba(255,255,255,0.35)">+</span>
        <span style="font-size:8px;color:rgba(255,255,255,0.3);margin-top:2px">${de}</span>
      </div>`}}o.innerHTML=`
    <div style="position:relative;width:${m}px;height:${g}px;margin:0 auto">
      <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none" viewBox="0 0 ${m} ${g}">${x}</svg>
      ${b}
    </div>`,o.querySelectorAll(".deck-slot-hit").forEach(y=>{y.addEventListener("click",()=>Yn(y.dataset.pos,t,e,n))})}function Vn(e,t,i){var r;const{openModal:n,closeModal:a}=i,o=e.stadiumCards||[];n("🏟️ Choisir un stade",`<div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px">
      <div id="stad-none" style="cursor:pointer;width:70px;text-align:center">
        <div style="width:65px;height:85px;border:2px dashed #ccc;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;${e.stadiumCardId?"":"border-color:#E87722"}">
          <span style="font-size:22px">🚫</span>
          <span style="font-size:9px;color:#666">Aucun</span>
        </div>
      </div>
      ${o.map(s=>{var b,v;const d=e.stadDefMap[s.stadium_id],c=((b=d==null?void 0:d.club)==null?void 0:b.logo_url)||null,l=d!=null&&d.image_url?"/icons/"+d.image_url:null,u=e.stadiumCardId===s.id,f=d!=null&&d.country_code&&!c?`https://flagsapi.com/${d.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,m=(d==null?void 0:d.name)||"Stade",g=m.match(/^(Stade\s+(?:de\s+)?(?:\w+)?)(.*)?$/i),p=g?g[1].trim():m.slice(0,8),x=((v=g==null?void 0:g[2])==null?void 0:v.trim())||"";return`<div class="stad-choice" data-stad-id="${s.id}" style="cursor:pointer;width:80px;text-align:center">
          <div style="width:75px;height:95px;border-radius:8px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid ${u?"#4fc3f7":"#444"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;overflow:hidden;position:relative">
            ${l?`<img src="${l}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;opacity:0.4">`:""}
            ${c?`<img src="${c}" style="width:36px;height:36px;object-fit:contain;position:relative;z-index:1">`:f?`<img src="${f}" style="width:40px;height:28px;object-fit:cover;border-radius:3px;position:relative;z-index:1">`:'<span style="font-size:24px;position:relative;z-index:1">🏟️</span>'}
            <div style="position:relative;z-index:1;text-align:center;padding:0 3px">
              <div style="font-size:8px;font-weight:700;color:${u?"#4fc3f7":"#ccc"}">${p}</div>
              ${x?`<div style="font-size:8px;font-weight:700;color:${u?"#4fc3f7":"#aaa"}">${x}</div>`:""}
            </div>
          </div>
        </div>`}).join("")}
    </div>`),(r=document.getElementById("stad-none"))==null||r.addEventListener("click",()=>{e.stadiumCardId=null,a(),et(t,e,i)}),document.querySelectorAll(".stad-choice").forEach(s=>{s.addEventListener("click",()=>{e.stadiumCardId=s.dataset.stadId,a(),et(t,e,i)})})}function Yn(e,t,i,n){var g,p,x,b,v;const{openModal:a,closeModal:o}=n,r=e.replace(/\d+/,""),s=(g=t.stadiumCards)==null?void 0:g.find(h=>h.id===t.stadiumCardId),d=s&&((p=t.stadDefMap)==null?void 0:p[s.stadium_id])||null,c=t.slots[e],l=c?t.playerCards.find(h=>h.id===c):null;(x=l==null?void 0:l.player)==null||x.id;const u=new Set;Object.entries(t.slots).forEach(([h,k])=>{var I;if(h===e||!k)return;const y=t.playerCards.find(E=>E.id===k);(I=y==null?void 0:y.player)!=null&&I.id&&u.add(y.player.id)}),t.subs.forEach(h=>{var y;const k=t.playerCards.find(I=>I.id===h);(y=k==null?void 0:k.player)!=null&&y.id&&u.add(k.player.id)});const f=new Set,m=t.playerCards.filter(h=>{const k=h.player;return!(k.job===r||k.job2===r)||u.has(k.id)||f.has(k.id)?!1:(f.add(k.id),!0)});m.sort((h,k)=>{const y=h.evolution_bonus||0,I=k.evolution_bonus||0,E=(r==="GK"?h.player.note_g:r==="DEF"?h.player.note_d:r==="MIL"?h.player.note_m:h.player.note_a)+(r===h.player.job||r===h.player.job2?y:0);return(r==="GK"?k.player.note_g:r==="DEF"?k.player.note_d:r==="MIL"?k.player.note_m:k.player.note_a)+(r===k.player.job||r===k.player.job2?I:0)-E}),a(`Choisir ${r} — ${e}`,`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${t.slots[e]?`
        <button class="btn btn-danger btn-sm" id="remove-player" style="width:100%;margin-bottom:4px">
          ✕ Retirer le joueur actuel
        </button>`:""}
      ${m.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+m.map(h=>{const k={...h.player,_evolution_bonus:h.evolution_bonus||0};return`<div class="player-option" data-card-id="${h.id}" style="cursor:pointer">
          ${Me(k,{width:100,showStad:!0,stadDef:d,role:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;color:var(--gray-600);padding:20px">Aucun joueur pour ce poste.<br><small>Ouvre des boosters !</small></div>'}
    </div>`,'<button class="btn btn-ghost" id="close-selector">Fermer</button>'),(b=document.getElementById("close-selector"))==null||b.addEventListener("click",o),(v=document.getElementById("remove-player"))==null||v.addEventListener("click",()=>{delete t.slots[e],o(),et(i,t,n)}),document.querySelectorAll(".player-option").forEach(h=>{h.addEventListener("click",()=>{t.slots[e]=h.dataset.cardId,o(),et(i,t,n)})})}function Wn(e,t,i){var l,u,f;const{openModal:n,closeModal:a}=i,o=(l=e.stadiumCards)==null?void 0:l.find(m=>m.id===e.stadiumCardId),r=o&&((u=e.stadDefMap)==null?void 0:u[o.stadium_id])||null,s=new Set;Object.keys(e.slots).forEach(m=>{var x;const g=e.slots[m];if(!g)return;const p=e.playerCards.find(b=>b.id===g);(x=p==null?void 0:p.player)!=null&&x.id&&s.add(p.player.id)}),e.subs.forEach(m=>{var p;const g=e.playerCards.find(x=>x.id===m);(p=g==null?void 0:g.player)!=null&&p.id&&s.add(g.player.id)});const d=new Set,c=e.playerCards.filter(m=>{var g,p,x;return s.has((g=m.player)==null?void 0:g.id)||d.has((p=m.player)==null?void 0:p.id)?!1:(d.add((x=m.player)==null?void 0:x.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${c.length>0?'<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">'+c.map(m=>{const g={...m.player,_evolution_bonus:m.evolution_bonus||0};return`<div class="player-option" data-card-id="${m.id}" style="cursor:pointer">
          ${Me(g,{width:100,showStad:!0,stadDef:r})}
        </div>`}).join("")+"</div>":'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(f=document.getElementById("close-sub-selector"))==null||f.addEventListener("click",a),document.querySelectorAll(".player-option").forEach(m=>{m.addEventListener("click",()=>{e.subs.push(m.dataset.cardId),a(),et(t,e,i)})})}async function Xn(e,t){const{state:i,toast:n,navigate:a}=t,o=e.formationCards.find(d=>d.formation===e.formation),r=(o==null?void 0:o.id)||e.formationCardId;await w.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await w.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([d,c],l)=>{s.push({deck_id:e.deckId,card_id:c,position:d,is_starter:!0,slot_order:l})}),e.subs.forEach((d,c)=>{s.push({deck_id:e.deckId,card_id:d,position:`SUB${c+1}`,is_starter:!1,slot_order:100+c})}),s.length>0){const{error:d}=await w.from("deck_cards").insert(s);if(d){n(d.message,"error");return}}n("Deck enregistré ✅","success"),a("decks")}function Bi(e){const t=Pt[e]||Pt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Yi(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await w.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let a=n;if(e){const r=n.filter(s=>s.max_per_user!=null);if(r.length){const{data:s}=await w.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(c=>c.id)),d={};(s||[]).forEach(c=>{d[c.booster_id]=(d[c.booster_id]||0)+1}),a=n.filter(c=>c.max_per_user==null?!0:(d[c.id]||0)<c.max_per_user)}}if(!a.length)return[];const{data:o}=await w.from("booster_drop_rates").select("*").in("booster_id",a.map(r=>r.id)).order("sort_order");return a.map(r=>({...r,rates:(o||[]).filter(s=>s.booster_id===r.id)}))}async function Jn(e,t){const{data:i}=await w.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await w.from("booster_claims").insert({user_id:e,booster_id:t})}function Qn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,a)=>n+Number(a.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Wi=()=>Object.keys(Mt),Zn=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ei={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function eo(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return Me({...t,_evolution_bonus:i},{width:140})}function Xi(e){var a;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((a=Object.entries(t).sort((o,r)=>r[1]-o[1])[0])==null?void 0:a[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function to(e,{state:t,navigate:i,toast:n}){var u,f,m;const a=((u=t.profile)==null?void 0:u.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Yi((f=t.user)==null?void 0:f.id)).map(Xi)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}o.length||(o=Zn.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const r=await w.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(g=>g.data||[]),s=new Set(r.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),d=new Set(r.filter(g=>g.card_type==="formation").map(g=>g.formation)),c=new Set(r.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),l={};for(const g of o){if(g.allow_duplicates!==!1||!((m=g.rates)!=null&&m.length))continue;const p=[...new Set((g.rates||[]).map(b=>b.card_type))];let x=!1;for(const b of p)if(b==="stadium"){const{data:v}=await w.from("stadium_definitions").select("id");if((v||[]).some(h=>!s.has(h.id))){x=!0;break}}else if(b==="game_changer"){const{data:v}=await w.from("gc_definitions").select("name").eq("is_active",!0);if((v||[]).some(h=>!c.has(h.name))){x=!0;break}}else if(b==="formation"){const{FORMATION_LINKS:v}=await Ri(async()=>{const{FORMATION_LINKS:h}=await import("./formation-links-D0diUT_D.js").then(k=>k.q);return{FORMATION_LINKS:h}},__vite__mapDeps([0,1]));if(Object.keys(v).some(h=>!d.has(h))){x=!0;break}}else{x=!0;break}x||(l[g.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${a.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(g=>{const p=g.cost===0||a>=g.cost,x=l[g.id]===!0;return`<div class="booster-card ${!p||x?"disabled":""}" data-booster="${g.id}" style="position:relative">
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
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const p=o.find(x=>x.id===g.dataset.booster);if(p){g.style.opacity="0.5",g.style.pointerEvents="none";try{await io(p,{state:t,toast:n,navigate:i,container:e})}catch(x){n(x.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",p=>{p.stopPropagation();const x=o.find(b=>b.id===g.dataset.boosterId);ao(x)})})}async function io(e,{state:t,toast:i,navigate:n,container:a}){var u,f;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await lo();const{data:o}=await w.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((o||[]).filter(m=>m.card_type==="player").map(m=>m.player_id)),s=new Set((o||[]).filter(m=>m.card_type==="formation").map(m=>m.formation));let d=[],c=null;try{if((u=e.rates)!=null&&u.length)d=await ti(t.profile,e);else{const m=e.type||"player";m==="player"?d=await Ji(t.profile,e.cardCount,e.cost):m==="game_changer"?d=await Qi(t.profile,e.cardCount,e.cost):m==="formation"?d=await Zi(t.profile,e.cost):d=await ti(t.profile,e)}}catch(m){c=m.message||String(m),console.error("[Booster] Erreur:",m)}if(d!=null&&d.length&&e._boosterId&&await Jn(t.user.id,e._boosterId),!(d!=null&&d.length)){const m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",m.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${c||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(m),(f=m.querySelector("#anim-close-err"))==null||f.addEventListener("click",()=>m.remove());return}d.forEach(m=>{m.card_type==="player"&&m.player?m.isDuplicate=r.has(m.player.id):m.card_type==="formation"&&(m.isDuplicate=s.has(m.formation))});const{data:l}=await w.from("users").select("*").eq("id",t.profile.id).single();l&&(t.profile=l),en(d,e,n)}function no(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function We(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function oo(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>We(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>We(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&We(n)>=6),i.length||(i=e.filter(n=>We(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&We(n)>=1&&We(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ti(e,t){if(t.cost>0){const{error:f}=await w.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(f)throw f}const i=t.allow_duplicates!==!1;let n=[];const{data:a,error:o}=await w.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:f}=await w.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=f||[]}else n=a||[];const r=new Set(n.filter(f=>f.card_type==="player").map(f=>f.player_id)),s=new Set(n.filter(f=>f.card_type==="formation").map(f=>f.formation)),d=new Set(n.filter(f=>f.card_type==="game_changer").map(f=>f.gc_type)),c=new Set(n.filter(f=>f.card_type==="stadium").map(f=>f.stadium_id).filter(Boolean)),l=new Set,u=[];for(let f=0;f<(t.cardCount||5);f++){const m=Qn(t.rates);if(m){if(m.card_type==="player"){const g=E=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[E]||E,p=m.rarity?g(m.rarity):null;let x=w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(x=x.eq("rarity",p));const{data:b}=await x;let v=b||[];if((m.note_min||m.note_max)&&(v=v.filter(E=>{const B=Math.max(Number(E.note_g)||0,Number(E.note_d)||0,Number(E.note_m)||0,Number(E.note_a)||0);return(!m.note_min||B>=m.note_min)&&(!m.note_max||B<=m.note_max)})),v.length||(m.note_min||m.note_max?(v=b||[],console.warn("[Booster] Aucun joueur avec note",m.note_min,"-",m.note_max,"— fallback rareté uniquement")):v=b||[]),!v.length)continue;let h=v.filter(E=>!l.has(E.id));if(i)h.length||(h=v);else if(h=h.filter(E=>!r.has(E.id)),!h.length)continue;const k=h[Math.floor(Math.random()*h.length)];l.add(k.id);const y=r.has(k.id),{data:I}=await w.from("cards").insert({owner_id:e.id,player_id:k.id,card_type:"player"}).select().single();I&&(u.push({...I,player:k,isDuplicate:y}),w.rpc("record_transfer",{p_card_id:I.id,p_player_id:k.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(m.card_type==="game_changer"){const{data:g}=await w.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=g!=null&&g.length?g:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],x=i?p:p.filter(k=>!d.has(k.name));if(!i&&!x.length)continue;const v=x[Math.floor(Math.random()*x.length)].name,{data:h}=await w.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:v}).select().single();h&&u.push(h)}else if(m.card_type==="formation"){const g=Wi(),p=i?g:g.filter(h=>!s.has(h));if(!i&&!p.length)continue;const x=p[Math.floor(Math.random()*p.length)],b=s.has(x),{data:v}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:x}).select();v!=null&&v[0]&&u.push({...v[0],isDuplicate:b})}else if(m.card_type==="stadium"){const{data:g,error:p}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(g!=null&&g.length)){console.warn("[Booster] Aucun stade en DB");continue}const x=i?g:g.filter(k=>!c.has(k.id));if(!i&&!x.length)continue;const b=x[Math.floor(Math.random()*x.length)],{data:v,error:h}=await w.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:b.id}).select("id,card_type,stadium_id").single();if(h){console.error("[Booster] insert stadium card:",h.message);continue}v&&u.push({...v,rarity:"normal",_stadiumDef:b})}}}return u}async function Ji(e,t,i){if(i>0){const{error:c}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(c)throw c}const{data:n}=await w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const a=n.filter(c=>c.job==="GK"),o=n.filter(c=>c.job!=="GK"),r=!e.first_booster_opened&&a.length>0,s=[];for(let c=0;c<t;c++){const l=c===0&&r?a:c===0?o:n,u=no(),f=oo(l,u);f&&s.push(f)}r&&await w.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:d}=await w.from("cards").insert(s.map(c=>({owner_id:e.id,player_id:c.id,card_type:"player"}))).select();return(d||[]).forEach((c,l)=>{w.rpc("record_transfer",{p_card_id:c.id,p_player_id:s[l].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((c,l)=>({...d[l],player:c}))}async function Qi(e,t,i){const{error:n}=await w.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:a}=await w.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=a!=null&&a.length?a:Object.keys(ei).map(l=>({name:l,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const l=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:l.name,gc_definition_id:l.id||null}}),{data:s,error:d}=await w.from("cards").insert(r).select();return d&&console.error("[Booster GC] Erreur insert:",d.message,d),(s||[]).map(l=>{const u=a==null?void 0:a.find(f=>f.name===l.gc_type||f.id===l.gc_definition_id);return{...l,_gcDef:u||null}})}async function Zi(e,t){const{error:i}=await w.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await w.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),a=new Set((n||[]).map(l=>l.formation)),o=Wi(),r=o[Math.floor(Math.random()*o.length)],s=a.has(r),{data:d,error:c}=await w.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return c&&console.error("[Booster Formation] Erreur insert:",c.message,c),(d||[]).map(l=>({...l,isDuplicate:s}))}function en(e,t,i,n=null){var de,D;if(!e||e.length===0){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",z.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(z),(de=z.querySelector("#anim-close-err"))==null||de.addEventListener("click",()=>z.remove());return}e=[...e].sort((z,$)=>{const G=z.player?We(z.player):-1;return($.player?We($.player):-1)-G});const a=document.createElement("div");a.id="booster-anim-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let o=!1;const r=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const c=z=>z.touches&&z.touches[0]?z.touches[0].clientX:z.clientX;function l(z){o||(d=!0,s.style.opacity="1",u(z))}function u(z){if(!d||o)return;const $=r.getBoundingClientRect(),G=c(z)-$.left,se=Math.max(0,Math.min(1,G/$.width));s.style.width=se*$.width+"px",se>=.82&&m()}function f(){o||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function m(){var $;if(o)return;o=!0,d=!1,s.style.width="100%",s.style.opacity="1",($=document.getElementById("cut-flash"))==null||$.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const z=document.getElementById("cut-hint");z&&(z.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",b(0)},620)}r.addEventListener("pointerdown",l),window.addEventListener("pointermove",u),window.addEventListener("pointerup",f),r.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",f);let g=0,p=!1;const x=new Set;function b(z){g=z,document.getElementById("reveal-phase").style.display="flex",v(),h(z,0),B()}function v(){const z=document.getElementById("card-dots");z&&(z.innerHTML=e.map(($,G)=>`<div class="card-dot" data-i="${G}" style="width:8px;height:8px;border-radius:50%;background:${G===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),z.querySelectorAll(".card-dot").forEach($=>$.addEventListener("click",()=>y(parseInt($.dataset.i)))))}function h(z,$){var W,T;const G=e[z],se=document.getElementById("card-counter"),ge=document.getElementById("card-track");se&&(se.textContent=`Carte ${z+1} / ${e.length}`);const le=document.getElementById("reveal-btns");le&&(le.style.display=z===e.length-1?"flex":"none");const re=G.card_type==="player"&&((W=G.player)==null?void 0:W.rarity)==="legende",ze=!x.has(z);x.add(z);let Y=0;if(G.card_type==="player"&&G.player){const C=G.player,N=C.job||"ATT";Y=Number(N==="GK"?C.note_g:N==="DEF"?C.note_d:N==="MIL"?C.note_m:C.note_a)||0}const Z=C=>{ge.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${re?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${ro(G)}</div>
          ${G.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const N=document.getElementById("current-card-wrap");$!==0?(N.style.transition="none",N.style.transform=`translateX(${$>0?100:-100}%)`,requestAnimationFrame(()=>{N.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",N.style.transform="translateX(0)"})):N.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),C||re?Q():ie(),v()};ze&&(((T=G.player)==null?void 0:T.rarity)==="legende"||Y>=8)&&G.card_type==="player"&&G.player?k(G,()=>Z(!0)):Z(!1)}function k(z,$){var _e;p=!0;const G=z.player,se=`https://flagsapi.com/${G.country_code}/flat/64.png`,ge=(_e=G.clubs)==null?void 0:_e.logo_url,le=G.face?"/"+G.face.replace(/^public\//,"").replace(/^\//,""):null,re=G.job||"ATT",ze=Number(re==="GK"?G.note_g:re==="DEF"?G.note_d:re==="MIL"?G.note_m:G.note_a)||0,Y=z.evolution_bonus||0,Z=ze+Y,W=G.rarity==="legende",T=Z>=18,C=document.getElementById("walkout-overlay"),N=document.getElementById("walkout-stage");if(!C||!N){p=!1,$();return}let O=null;W&&(O=new Audio("/sounds/Legendary.mp3"),O.volume=.8,O.play().catch(()=>{})),C.style.display="flex";const V=()=>{const be=N.firstElementChild;be&&(be.classList.remove("wo-in"),be.classList.add("wo-out"))},F=1800,H=400;N.innerHTML=`<img class="wo-in" src="${se}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(V,F),setTimeout(()=>{var be;N.innerHTML=ge?`<img class="wo-in" src="${ge}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((be=G.clubs)==null?void 0:be.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},F+H),setTimeout(V,F*2+H),setTimeout(()=>{N.innerHTML=le?`<img class="wo-in" src="${le}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(F+H)*2),setTimeout(V,(F+H)*2+F);const we=T?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[re]||"#fff";setTimeout(()=>{N.innerHTML=`<div class="wo-in" style="
        font-size:${T?"120px":"90px"};font-weight:900;color:${we};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${we}, 0 0 60px ${we};
        ${T?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${Z}
      </div>`,T&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(F+H)*3),setTimeout(V,(F+H)*3+F),setTimeout(()=>{C.style.display="none",N.innerHTML="",p=!1,O&&!W&&O.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),$()},(F+H)*4)}function y(z){if(p||z<0||z>=e.length||z===g)return;const $=z>g?1:-1;g=z,h(z,$)}function I(){y(g+1)}function E(){y(g-1)}function B(){const z=document.getElementById("card-viewport");if(!z||z._swipeBound)return;z._swipeBound=!0;let $=0,G=0,se=0,ge=!1;const le=W=>W.touches?W.touches[0].clientX:W.clientX,re=W=>W.touches?W.touches[0].clientY:W.clientY,ze=W=>{ge=!0,$=le(W),G=re(W),se=0},Y=W=>{if(!ge)return;se=le(W)-$;const T=re(W)-G;if(Math.abs(se)<Math.abs(T))return;const C=document.getElementById("current-card-wrap");C&&(C.style.transition="none",C.style.transform=`translateX(${se*.6}px) rotate(${se*.02}deg)`)},Z=()=>{if(!ge)return;ge=!1;const W=document.getElementById("current-card-wrap"),T=55;se<=-T&&g<e.length-1?I():se>=T&&g>0?E():W&&(W.style.transition="transform .2s ease",W.style.transform="translateX(0)")};z.addEventListener("pointerdown",ze),z.addEventListener("pointermove",Y),z.addEventListener("pointerup",Z),z.addEventListener("pointercancel",Z),z.addEventListener("touchstart",ze,{passive:!0}),z.addEventListener("touchmove",Y,{passive:!0}),z.addEventListener("touchend",Z),z.addEventListener("click",W=>{if(Math.abs(se)>8)return;const T=z.getBoundingClientRect();W.clientX-T.left>T.width/2?I():E()})}let P=null;function Q(){const z=document.getElementById("fireworks-canvas");if(!z)return;z.width=window.innerWidth,z.height=window.innerHeight;const $=z.getContext("2d"),G=[];function se(){const le=Math.random()*z.width,re=Math.random()*z.height*.6,ze=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],Y=ze[Math.floor(Math.random()*ze.length)];for(let Z=0;Z<60;Z++){const W=Math.PI*2/60*Z,T=2+Math.random()*5;G.push({x:le,y:re,vx:Math.cos(W)*T,vy:Math.sin(W)*T,alpha:1,color:Y,size:2+Math.random()*3})}}se(),P=setInterval(se,600);function ge(){if(document.getElementById("fireworks-canvas")){$.clearRect(0,0,z.width,z.height);for(let le=G.length-1;le>=0;le--){const re=G[le];if(re.x+=re.vx,re.y+=re.vy+.08,re.vy*=.98,re.alpha-=.018,re.alpha<=0){G.splice(le,1);continue}$.globalAlpha=re.alpha,$.fillStyle=re.color,$.beginPath(),$.arc(re.x,re.y,re.size,0,Math.PI*2),$.fill()}$.globalAlpha=1,(P!==null||G.length>0)&&requestAnimationFrame(ge)}}ge()}function ie(){P!==null&&(clearInterval(P),P=null);const z=document.getElementById("fireworks-canvas");z&&z.getContext("2d").clearRect(0,0,z.width,z.height)}if(n){const z=document.getElementById("reveal-btns");z&&(z.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(D=document.getElementById("reveal-next"))==null||D.addEventListener("click",()=>{ie(),a.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{ie(),a.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{ie(),a.remove(),i("boosters")})}function ro(e){var t,i,n,a;if(e.card_type==="player"&&e.player)return eo(e);if(e.card_type==="game_changer"){const o=e._gcDef,r=(o==null?void 0:o.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},c=s[o==null?void 0:o.color]||s.purple,l=d[o==null?void 0:o.color]||d.purple,u=(o==null?void 0:o.name)||e.gc_type||"Game Changer",f=(o==null?void 0:o.effect)||((t=ei[e.gc_type])==null?void 0:t.desc)||"",m=o!=null&&o.image_url?`/icons/${o.image_url}`:null,g=((i=ei[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${c};border-radius:14px;border:3px solid ${l};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${l}88;flex-shrink:0">
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
    </div>`;if(e.card_type==="stadium"){const o=e._stadiumDef,r=(o==null?void 0:o.name)||"Stade",s=((n=o==null?void 0:o.club)==null?void 0:n.encoded_name)||(o==null?void 0:o.country_code)||"—",d=o!=null&&o.image_url?`/icons/${o.image_url}`:((a=o==null?void 0:o.club)==null?void 0:a.logo_url)||(o!=null&&o.country_code?`https://flagsapi.com/${o.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${r.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${r}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${d?`<img src="${d}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function ao(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const a={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}so()}function so(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function lo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const a=document.getElementById("mw-ad-cd");a&&(a.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function co(e,{state:t,navigate:i,toast:n,refreshProfile:a}){var f,m;const{data:o}=await w.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let r=Array.isArray((f=t.profile)==null?void 0:f.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await w.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await Yi()).find(x=>(x.name||"").toLowerCase().includes("new player"));p&&(s=Xi(p))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const d=r.length;let c=0;e.innerHTML=`
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
  </div>`;const l=async()=>{await w.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function u(){var v;if(c>=d||!r.length){await w.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),a&&await a(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const g=r[0],{data:p}=await w.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let x=[];try{if(g.type==="formation")x=await Zi(t.profile,0);else if(g.type==="game_changer")x=await Qi(t.profile,g.count||3,0);else if(s&&((v=s.rates)!=null&&v.length)){const h={...s,cost:0,cardCount:g.count||s.cardCount||5};x=await ti(t.profile,h),g.guaranteeGK&&!t.profile.first_booster_opened&&(x.some(y=>y.player&&y.player.job==="GK")||await po(t.profile,x),await w.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else x=await Ji(t.profile,g.count||5,0)}catch(h){n(h.message||"Erreur ouverture booster","error");return}r.shift(),c++,await l();const b=g.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:g.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${c}/${d})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};en(x,b,i,()=>{u()})}(m=document.getElementById("onboard-start"))==null||m.addEventListener("click",()=>u())}async function po(e,t){try{const{data:i}=await w.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],a=t.findIndex(r=>r.player);if(a===-1)return;const o=t[a];await w.from("cards").update({player_id:n.id}).eq("id",o.id),t[a]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}const yt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},uo={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function st(e,t,i,n,a){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",a)}function zt(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",a=e.face.replace(/^public\//,"").replace(/^\//,"");return n+a}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function ii(e,t){var o,r;const i=e.player,n=e.evolution_bonus||0,a=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&a>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&a>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&a>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&a>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Tt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(a=>{Array.isArray(a)&&a.forEach(o=>{const r=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(r||s)&&(o.stadiumBonus=!0)})}),e}function Gt(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(a=>{if(!a)return;const o=i&&String(a.club_id)===String(i),r=n&&String(a.country_code)===String(n);(o||r)&&(a.stadiumBonus=!0)}),e}function bt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function tn(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Rt(e,t){const i=yt[t]||yt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const s=e.filter(c=>c.position&&c.position.replace(/\d+$/,"")===r).sort((c,l)=>parseInt(c.position.replace(/\D+/g,""),10)-parseInt(l.position.replace(/\D+/g,""),10)).map(c=>({...c,_line:r})),d=bt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[r]=s}return n}const o=[...e];for(const r of["GK","DEF","MIL","ATT"]){const s=[];for(let c=0;c<i[r];c++){let l=o.findIndex(u=>u.job===r);if(l===-1&&(l=o.findIndex(u=>u.job2===r)),l===-1&&(l=0),o[l]){const u={...o[l],_line:r};s.push(u),o.splice(l,1)}}const d=bt(s.length);s.forEach((c,l)=>{c._col=d[l]}),n[r]=s}return n}function He(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ue(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function fo(e,t,i){const a=new Set,o=t.filter(l=>{const u=l.gc_type||l.id;return a.has(u)?!1:(a.add(u),!0)});let r=[];function s(l,u){const f=l._gcDef,m={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},g={purple:"#9b59b6",light_blue:"#00bcd4"},p=m[f==null?void 0:f.color]||m.purple,x=g[f==null?void 0:f.color]||g.purple;return`<div class="gc-select-card" data-id="${l.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":x};background:${p};
        display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0;position:relative;
        box-shadow:${u?"0 0 18px #FFD700":"0 2px 8px rgba(0,0,0,0.4)"};
        transform:${u?"scale(1.06)":"scale(1)"};transition:all 0.15s">
      <div style="padding:5px 6px;background:rgba(255,255,255,0.12);text-align:center;min-height:32px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:${((f==null?void 0:f.name)||l.gc_type).length>12?8:10}px;font-weight:900;color:#fff;line-height:1.2;text-align:center">${(f==null?void 0:f.name)||l.gc_type}</span>
      </div>
      <div style="height:70px;display:flex;align-items:center;justify-content:center;padding:4px">
        ${f!=null&&f.image_url?`<img src="/icons/${f.image_url}" style="max-height:62px;max-width:88px;object-fit:contain">`:'<span style="font-size:32px">⚡</span>'}
      </div>
      <div style="padding:5px 6px;background:rgba(0,0,0,0.35);text-align:center;min-height:36px;display:flex;align-items:center;justify-content:center">
        <span style="font-size:8px;color:rgba(255,255,255,0.85);line-height:1.3">${((f==null?void 0:f.effect)||"").slice(0,50)}</span>
      </div>
      ${u?'<div style="position:absolute;top:4px;right:4px;width:20px;height:20px;background:#FFD700;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;z-index:2">✓</div>':""}
    </div>`}const d=l=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(l)};function c(){var u,f,m;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const l=r.length>0;e.innerHTML=`
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
        ${o.map(g=>{const p=r.find(x=>x.gc_type===g.gc_type);return s(g,!!p)}).join("")}
      </div>
      <!-- Barre fixe en bas : boutons d'action -->
      <div style="flex-shrink:0;padding:10px 16px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.25);border-top:1px solid rgba(255,255,255,0.08)">
        <button id="gc-launch" ${l?"":"disabled"} style="width:100%;padding:14px;border-radius:14px;border:none;background:${l?"linear-gradient(135deg,#5a0a9a,#9a28e8)":"rgba(255,255,255,0.08)"};color:${l?"#fff":"rgba(255,255,255,0.3)"};font-size:15px;font-weight:900;cursor:${l?"pointer":"default"};box-shadow:${l?"0 4px 20px rgba(122,40,184,0.5)":"none"}">
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(g=>{g.addEventListener("click",()=>{const p=g.dataset.id,x=o.find(v=>v.id===p);if(!x)return;const b=r.findIndex(v=>v.gc_type===x.gc_type);b>-1?r.splice(b,1):r.length<3&&r.push(x),c()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{l&&d(r)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>d([])),(m=e.querySelector("#gc-reset"))==null||m.addEventListener("click",()=>{r.length&&(r=[],c())})}c()}function go(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function mo(e,t,i){const{state:n,navigate:a}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){st(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>a("decks"));return}const r=o.map(f=>f.id),{data:s}=await w.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),d=[...new Set((s||[]).filter(f=>{var m,g;return((m=f.card)==null?void 0:m.card_type)==="stadium"&&((g=f.card)==null?void 0:g.stadium_id)}).map(f=>f.card.stadium_id))],c={};if(d.length){const{data:f}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",d);(f||[]).forEach(m=>{c[m.id]=m}),(s||[]).forEach(m=>{var g,p;((g=m.card)==null?void 0:g.card_type)==="stadium"&&((p=m.card)!=null&&p.stadium_id)&&(m.card._stadiumDef=c[m.card.stadium_id]||null)})}let l=0;function u(){var y,I,E,B,P,Q,ie,de;const f=o[l],m=(s||[]).filter(D=>D.deck_id===f.id),g=m.filter(D=>{var z;return D.is_starter&&((z=D.card)==null?void 0:z.player)}).map(D=>ii(D.card,D.position)),p=m.find(D=>{var z;return((z=D.card)==null?void 0:z.card_type)==="formation"}),x=f.formation||((y=p==null?void 0:p.card)==null?void 0:y.formation)||"4-4-2";let b=g.length>=11?Rt(g,x):null,v=((I=f.stadium_card)==null?void 0:I.stadium_def)||null;v&&b&&(b=Tt(b,v));const h=g.length>=11;He(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:${window.innerWidth>=900?"row":"column"};height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header -->
      <div style="padding:10px 16px;background:rgba(0,0,0,0.4);text-align:center;flex-shrink:0">
        <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${go(t)}</div>
        <div style="font-size:17px;font-weight:900;margin-top:2px">Choisis ton deck</div>
      </div>

      <!-- Navigation deck -->
      <div style="display:flex;align-items:center;gap:8px;padding:8px;flex-shrink:0">
        <button id="prev-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${l===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===0?"0.1":"0.3"});color:${l===0?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${l===0?"default":"pointer"};flex-shrink:0">◀</button>
        <div style="flex:1;text-align:center">
          <div style="font-size:19px;font-weight:900">${f.name}</div>
          <div style="font-size:11px;opacity:.6;margin-top:2px">${x} · ${g.length}/11 ${f.is_active?"· ⭐ Actif":""}</div>
        </div>
        <button id="next-deck" style="width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,${l===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${l===o.length-1?"0.1":"0.3"});color:${l===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:20px;cursor:${l===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
      </div>

      <!-- Bandeau stade si présent -->
      ${v?`
      <div style="display:flex;align-items:center;gap:8px;padding:6px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),rgba(196,90,0,0.2));border-top:1px solid rgba(232,119,34,0.4);flex-shrink:0">
        <span style="font-size:16px">🏟️</span>
        <div style="flex:1;font-size:12px;font-weight:700;color:rgba(255,255,255,0.9)">${v.name}</div>
        <div style="font-size:11px;font-weight:900;color:#FFD700">+10 aux joueurs ${((E=v.club)==null?void 0:E.encoded_name)||v.country_code||""}</div>
      </div>`:""}

      <!-- Terrain preview -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:hidden;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center;padding:4px">
        ${b?(()=>{const D=window.innerWidth>=900,z=window.innerHeight-280,$=window.innerWidth-(D?260:8),G=D?Math.min($,Math.round(z*.9)):Math.min($,z);return`<div class="deck-preview-wrap" style="width:${G}px;height:${Math.round(G*1.1)}px;overflow:hidden">
            ${At(b,x,null,[],G,Math.round(G*1.1))}
          </div>`})():`<div style="display:flex;align-items:center;justify-content:center;height:100%;opacity:.4;flex-direction:column;gap:8px">
              <div style="font-size:32px">⚠️</div>
              <div>Deck incomplet (${g.length}/11)</div>
             </div>`}
      </div>

      <!-- Indicateurs pagination -->
      ${o.length>1?`
      <div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">
        ${o.map((D,z)=>`<div style="width:7px;height:7px;border-radius:50%;background:${z===l?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}
      </div>`:""}

      <!-- Boutons : en bas sur mobile, colonne droite sur PC -->
      ${window.innerWidth<900?`
      <div style="padding:10px 14px 16px;flex-shrink:0;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:15px;border-radius:12px;border:none;
          background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
          ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
          Annuler
        </button>
      </div>`:`
      <!-- Colonne droite PC -->
      <div style="width:240px;flex-shrink:0;background:rgba(0,0,0,0.3);display:flex;flex-direction:column;gap:16px;padding:24px 16px;border-left:1px solid rgba(255,255,255,0.08)">
        <div>
          <div style="font-size:11px;opacity:.5;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px">Deck</div>
          <div style="font-size:20px;font-weight:900">${f.name}</div>
          <div style="font-size:12px;opacity:.6;margin-top:2px">${x} · ${g.length}/11 ${f.is_active?"· ⭐ Actif":""}</div>
        </div>
        ${v?`
        <div style="padding:10px;background:rgba(232,119,34,0.15);border-radius:8px;border:1px solid rgba(232,119,34,0.3)">
          <div style="font-size:11px;opacity:.6;margin-bottom:4px">🏟️ Stade</div>
          <div style="font-size:13px;font-weight:700">${v.name}</div>
          <div style="font-size:11px;color:#FFD700;margin-top:2px">+10 aux joueurs ${((B=v.club)==null?void 0:B.encoded_name)||v.country_code||""}</div>
        </div>`:""}
        <div style="margin-top:auto;display:flex;flex-direction:column;gap:10px">
          <button id="validate-deck" style="width:100%;padding:16px;border-radius:12px;border:none;
            background:${h?"#1A6B3C":"rgba(255,255,255,0.08)"};
            color:${h?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${h?"pointer":"default"}">
            ${h?"✅ Valider ce deck":"⚠️ Deck incomplet"}
          </button>
          <button id="cancel-deck-select" style="width:100%;padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">
            Annuler
          </button>
        </div>
      </div>`}
    </div>`,function(){const z=e.querySelector(".deck-preview-wrap svg");z&&(z.removeAttribute("width"),z.removeAttribute("height"),z.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",z.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),(P=document.getElementById("prev-deck"))==null||P.addEventListener("click",()=>{l>0&&(l--,u())}),(Q=document.getElementById("next-deck"))==null||Q.addEventListener("click",()=>{l<o.length-1&&(l++,u())}),(ie=document.getElementById("validate-deck"))==null||ie.addEventListener("click",()=>{if(!h)return;const D=t.state.params||{};t.navigate("match",{...D,matchMode:D.matchMode||i,deckId:f.id})}),(de=document.getElementById("cancel-deck-select"))==null||de.addEventListener("click",()=>{Ue(e),a("home")});const k=document.getElementById("deck-swipe-zone");if(k){let D=0,z=0;k.addEventListener("touchstart",$=>{D=$.touches[0].clientX,z=$.touches[0].clientY},{passive:!0}),k.addEventListener("touchend",$=>{const G=$.changedTouches[0].clientX-D,se=$.changedTouches[0].clientY-z;Math.abs(G)<40||Math.abs(G)<Math.abs(se)||(G<0&&l<o.length-1?(l++,u()):G>0&&l>0&&(l--,u()))},{passive:!0})}}u()}function Qe(e,t=44,i=58,n=null){return Me(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function gt(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((o,r)=>{const s=o._line||o.job||"MIL";if(a+=Me(o,{width:40,role:s,extraNote:o.boost||0}),r<n.length-1){const d=dt(o,n[r+1]);a+=`<div style="width:7px;height:3px;background:${d==="#ff3333"||d==="#cc2222"?"rgba(255,255,255,0.12)":d};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function It(e,t,i,n,a=310,o=310,r=[]){const s=Mt[t]||{},d=Gi(t)||ai[t]||[],c={},l=["ATT","MIL","DEF","GK"];for(const x of l)(e[x]||[]).forEach((v,h)=>{c[`${x}${h+1}`]=v});function u(x){const b=s[x];return b?{x:b.x*a,y:b.y*o}:null}let f="";for(const[x,b]of d){const v=u(x),h=u(b);if(!v||!h)continue;const k=c[x],y=c[b],I=dt(k,y);I==="#00ff88"||I==="#FFD700"?(f+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}"
        stroke="${I}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,f+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}"
        stroke="${I}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):f+=`<line x1="${v.x.toFixed(1)}" y1="${v.y.toFixed(1)}" x2="${h.x.toFixed(1)}" y2="${h.y.toFixed(1)}"
        stroke="${I}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const m=Math.max(52,Math.round(a*.18)),g=Math.round(m*657/507);for(const[x,b]of Object.entries(c)){const v=u(x);if(!v||!b)continue;const h=x.replace(/[0-9]/g,""),k=r.includes(b.cardId),y=i==="attack"&&(["MIL","ATT"].includes(h)||k)&&!b.used||i==="defense"&&["GK","DEF","MIL"].includes(h)&&!b.used,I=n.includes(b.cardId);let E=b.boost||0;b.stadiumBonus&&(i==="attack"&&(h==="ATT"||h==="MIL")||i==="defense"&&(h==="GK"||h==="DEF"||h==="MIL")?E+=10:i||(E+=10));const B=Math.round(v.x-m/2),P=Math.round(v.y-g/2);if(b.used){f+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${B}" y="${P}" width="${m}" height="${g}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${b.cardId}" data-role="${h}" style="cursor:pointer"/>`;continue}const Q=Me({...b,_evolution_bonus:0},{width:m,showStad:!0,stadDef:null,role:h,extraNote:E}),ie=I?"outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;opacity:0.75;":"";f+=`<foreignObject x="${B-2}" y="${P-30}" width="${m+8}" height="${g+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="${ie}position:relative">
        ${Q}
      </div>
    </foreignObject>`,y&&(f+=`<rect x="${B}" y="${P}" width="${m}" height="${g}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${I?"selected":""}" data-card-id="${b.cardId}" data-role="${h}" style="cursor:pointer"/>`)}const p=80;return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-p} ${-p} ${a+p*2} ${o+p*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${f}
  </svg>`}function At(e,t,i,n,a=300,o=300,r=[]){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${It(e,t,i,n,a,o,r)}
  </div>`}function qi(e,t=!1){const i=e.portrait||null;return`
  <div style="text-align:center;flex-shrink:0;width:38px">
    <div style="width:38px;height:38px;border-radius:50%;background:${{GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[e.job]||"#555"};position:relative;overflow:hidden;
      border:2px solid rgba(255,255,255,${t?"0.2":"0.5"});opacity:${t?.4:1};margin:0 auto">
      ${i?`<img src="${i}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.65);font-size:9px;color:#fff;font-weight:900;text-align:center;line-height:1.4">${e.note}</div>
    </div>
    <div style="font-size:7px;color:rgba(255,255,255,0.5);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(e.name||"").slice(0,7)}</div>
  </div>`}async function St(e,t,i,n){var I;const{state:a,navigate:o,toast:r}=t;He(e);const s=a.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return mo(e,t,i);const d=s.deckId;let c,l,u,f;try{const E=await Promise.all([w.from("decks").select("formation,name,stadium_card_id").eq("id",d).single(),w.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",d).order("slot_order")]);c=E[0].data,u=E[0].error,l=E[1].data,f=E[1].error}catch(E){console.error("[Match] Exception chargement deck:",E),st(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),st(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const m=(l||[]).filter(E=>{var B;return E.is_starter&&((B=E.card)==null?void 0:B.player)}).map(E=>ii(E.card,E.position)),g=(l||[]).filter(E=>{var B;return!E.is_starter&&((B=E.card)==null?void 0:B.player)}).map(E=>ii(E.card,E.position));if(m.length<11){st(e,"⚠️",`Deck incomplet (${m.length}/11).`,"Compléter",()=>o("decks"));return}const p=(l||[]).find(E=>{var B;return((B=E.card)==null?void 0:B.card_type)==="formation"}),x=(c==null?void 0:c.formation)||((I=p==null?void 0:p.card)==null?void 0:I.formation)||"4-4-2",{data:b,error:v}=await w.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",a.profile.id).eq("card_type","game_changer"),{data:h}=await w.from("gc_definitions").select("*").eq("is_active",!0),k=(b||[]).map(E=>({...E,_gcDef:(h==null?void 0:h.find(B=>B.name===E.gc_type||B.id===E.gc_definition_id))||null}));let y=null;if(c!=null&&c.stadium_card_id){const{data:E}=await w.from("cards").select("stadium_id").eq("id",c.stadium_card_id).single();if(E!=null&&E.stadium_id){const{data:B}=await w.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",E.stadium_id).single();y=B||null}}n({deckId:d,formation:x,starters:m,subsRaw:g,gcCardsEnriched:k,gcDefs:h||[],stadiumDef:y})}function Xe(){return Math.min(window.innerWidth-40,860)}function at(){return Math.round(Xe()*1.1)}function xo(e){var a,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((a=e.clubs)==null?void 0:a.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:zt(e)}}function yo(e){var o,r,s;if(!e)return"";const t=d=>d?Me({...d,_evolution_bonus:0},{width:52,role:d._line||d.job,showStad:!!d.stadiumBonus,extraNote:d.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
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
    </div>`}function Nt(e,t,i,n,a){const o=document.getElementById("goal-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="goal-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(d=>Me({...d,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:d._line||d.job,showStad:!!d.stadiumBonus})).join("");if(r.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${s}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${n?`<span style="color:#22c55e">${t}</span>`:t}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${n?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(r),!document.getElementById("goal-anim-style")){const d=document.createElement("style");d.id="goal-anim-style",d.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(d)}setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),a==null||a()},400)},1800)}function bo(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="sub-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),r=e?Me({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"",s=t?Me({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"";a.innerHTML=`
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
    </div>`,document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),i==null||i()},400)},1600)}function wt(e,t="rgba(0,0,0,0.85)",i=2200){const n=document.getElementById("game-toast");n&&n.remove();const a=document.createElement("div");if(a.id="game-toast",a.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${t};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,a.textContent=e,!document.getElementById("game-toast-style")){const o=document.createElement("style");o.id="game-toast-style",o.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(o)}document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.3s",setTimeout(()=>a.remove(),300)},i)}async function ho(e,t){const{state:i}=t,a=(i.params||{}).matchMode||"vs_ai_easy",o=a.replace("vs_ai_",""),r=a;await St(e,t,a,async({deckId:s,formation:d,starters:c,subsRaw:l,gcCardsEnriched:u,gcDefs:f,stadiumDef:m})=>{try{let g=Rt(c,d);m&&(g=Tt(g,m),Gt(l,m));const p=await vo(d,o),x=p.lines||p,b=async v=>{try{const{data:h,error:k}=await w.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:s,status:"in_progress"}).select().single();if(k){console.error("[MatchIA] Erreur création match:",k),st(e,"⚠️","Impossible de créer le match ("+k.message+").","Retour",()=>t.navigate("home"));return}const y=p.stadiumDef||null;y&&x&&(Tt(x,y),Gt(p.subs||[],y));const I={gcDefs:f||[],matchId:h==null?void 0:h.id,mode:r,difficulty:o,formation:d,homeTeam:g,aiTeam:x,homeSubs:l,subsUsed:0,maxSubs:Math.min(l.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:y,homeScore:0,aiScore:0,gcCards:v,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};_o(e,I,t)}catch(h){console.error("[MatchIA] Exception launchMatch:",h),st(e,"⚠️","Erreur au lancement du match : "+h.message,"Retour",()=>t.navigate("home"))}};if(!u.length){b([]);return}fo(e,u,b)}catch(g){console.error("[MatchIA] Exception setup:",g),st(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function vo(e,t){var x;const{data:i}=await w.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:wo(e),subs:[],gcCards:[],stadiumDef:null};const n=yt[e]||yt["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function r(b,v,h){var k,y;return o.add(b.id),{cardId:"ai-"+b.id+"-"+h,id:b.id,firstname:b.firstname,name:b.surname_real,country_code:b.country_code,club_id:b.club_id,job:b.job,job2:b.job2,note_g:Number(b.note_g)||0,note_d:Number(b.note_d)||0,note_m:Number(b.note_m)||0,note_a:Number(b.note_a)||0,rarity:b.rarity,skin:b.skin,hair:b.hair,hair_length:b.hair_length,clubName:((k=b.clubs)==null?void 0:k.encoded_name)||null,clubLogo:((y=b.clubs)==null?void 0:y.logo_url)||null,boost:0,used:!1,_line:v}}for(const b of["GK","DEF","MIL","ATT"]){const v=i.filter(E=>E.job===b&&!o.has(E.id)),h=i.filter(E=>E.job!==b&&!o.has(E.id)),k=[...v,...h],y=[];for(let E=0;E<n[b];E++){const B=k[E];B&&y.push(r(B,b,E))}const I=bt(y.length);y.forEach((E,B)=>{E._col=I[B]}),a[b]=y}const d=i.filter(b=>!o.has(b.id)).slice(0,5).map((b,v)=>r(b,b.job,100+v)),u=Object.keys(Ce).sort(()=>Math.random()-.5).slice(0,3).map((b,v)=>{var h,k;return{id:"ai-gc-"+v,gc_type:b,name:((h=Ce[b])==null?void 0:h.name)||b,icon:((k=Ce[b])==null?void 0:k.icon)||"⚡"}}),f=Object.values(a).flat(),m={};f.forEach(b=>{b.club_id&&(m[b.club_id]=(m[b.club_id]||0)+1)});const g=(x=Object.entries(m).sort((b,v)=>v[1]-b[1])[0])==null?void 0:x[0];let p=null;if(g){const{data:b}=await w.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",g).single();b&&(p={club_id:b.id,country_code:null,name:b.encoded_name+" Stadium",club:{encoded_name:b.encoded_name,logo_url:b.logo_url}})}return{lines:a,subs:d,gcCards:u,stadiumDef:p}}function wo(e){const t=yt[e]||yt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let a=0;for(const o of["GK","DEF","MIL","ATT"]){const r=[];for(let d=0;d<t[o];d++){const c=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+a,id:"fake-"+a,firstname:"IA",name:n[a%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?c:2,note_d:o==="DEF"?c:2,note_m:o==="MIL"?c:2,note_a:o==="ATT"?c:2,rarity:"normal",boost:0,used:!1,_line:o}),a++}const s=bt(r.length);r.forEach((d,c)=>{d._col=s[c]}),i[o]=r}return i}function _o(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:100%;max-width:900px;margin:0 auto">${It(t.aiTeam,t.formation,null,[],Xe(),at())}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>ko(e,t,i),5e3)}const Ze=e=>xo(e);function ko(e,t,i){const n=t.homeTeam.MIL||[],a=t.aiTeam.MIL||[],o=t.stadiumDef||null,r=t.aiStadiumDef||null;function s(v,h){const k=je(v,"MIL"),y=v.stadiumBonus||h&&(h.club_id&&String(v.club_id)===String(h.club_id)||h.country_code&&v.country_code===h.country_code)?10:0;return k+y}function d(v,h){return v.reduce((k,y)=>k+s(y,h),0)}function c(v){let h=0;for(let k=0;k<v.length-1;k++){const y=dt(v[k],v[k+1]);y==="#00ff88"?h+=2:y==="#FFD700"&&(h+=1)}return h}const l=d(n,o)+c(n),u=d(a,r)+c(a),f=l>=u;function m(v,h,k,y,I){return`<div id="duel-row-${y}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${h}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${v.map((E,B)=>{const P=B<v.length-1?dt(E,v[B+1]):null,Q=!P||P==="#ff3333"||P==="#cc2222",ie=P==="#00ff88"?"+2":P==="#FFD700"?"+1":"";return s(E,I),E.stadiumBonus||I&&(I.club_id&&String(E.club_id)===String(I.club_id)||I.country_code&&(E.country_code,I.country_code)),`
          <div class="duel-card duel-card-${y}" data-idx="${B}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${Me({...E,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:I,role:"MIL",extraNote:E.boost||0})}
          </div>
          ${B<v.length-1?`<div class="duel-link duel-link-${y}" data-idx="${B}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Q?"rgba(255,255,255,0.12)":P};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Q?"none":`0 0 8px ${P}`}">
            ${ie?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${P}">${ie}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${y}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${d(v,I)} + ${c(v)} liens = <b style="color:#fff">${d(v,I)+c(v)}</b>
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

    ${m(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${m(a,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const g=()=>{const v=(h,k)=>e.querySelectorAll(h).forEach((y,I)=>{setTimeout(()=>{y.style.opacity="1",y.style.transform="translateY(0) scale(1)"},k+I*90)});v(".duel-card-home",150),v(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((h,k)=>{setTimeout(()=>{h.style.opacity="1"},k*70)}),900),setTimeout(()=>{const h=e.querySelector("#vs-label");h&&(h.style.opacity="1",h.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(k=>k.style.opacity="1")},1250),setTimeout(()=>{p("score-home",l,800),p("score-ai",u,800)},1500)};function p(v,h,k){const y=document.getElementById(v);if(!y)return;const I=performance.now(),E=B=>{const P=Math.min(1,(B-I)/k);y.textContent=Math.round(h*(1-Math.pow(1-P,3))),P<1?requestAnimationFrame(E):y.textContent=h};requestAnimationFrame(E)}requestAnimationFrame(g),t.attacker=f?"home":"ai";const x=f?tn():null;f&&(t.boostCard={value:x}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(v=>Ze(v)),aiPlayers:a.map(v=>Ze(v)),homeTotal:l,aiTotal:u,text:`Duel milieu : ${t.clubName} ${l} – ${u} IA → ${f?t.clubName+" attaque":"IA attaque"}`});const b=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Ie(e,t,i),t.attacker==="ai"&&setTimeout(()=>Ot(e,t,i),800)};setTimeout(()=>{const v=document.getElementById("score-home"),h=document.getElementById("score-ai"),k=document.getElementById(f?"duel-row-home":"duel-row-ai"),y=document.getElementById(f?"duel-row-ai":"duel-row-home"),I=f?v:h,E=f?h:v;I&&(I.style.fontSize="80px",I.style.color=f?"#FFD700":"#ff6b6b",I.style.animation="duelPulse .5s ease"+(f?", duelGlow 1.5s ease infinite .5s":"")),E&&(E.style.opacity="0.25"),setTimeout(()=>{k&&(k.style.transformOrigin="center",k.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",k.style.zIndex="5"),setTimeout(()=>{var P;const B=document.getElementById("duel-shock");if(B){const Q=(P=y||k)==null?void 0:P.getBoundingClientRect(),ie=e.querySelector(".match-screen").getBoundingClientRect();Q&&(B.style.top=Q.top-ie.top+Q.height/2+"px"),B.style.animation="shockwave .5s ease-out forwards"}y&&(y.style.transformOrigin="center",y.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var P;const B=document.getElementById("duel-finale");B&&(B.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${f?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${f?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${x}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,B.style.transition="opacity .45s ease",B.style.opacity="1",B.style.pointerEvents="auto",(P=document.getElementById("start-match-btn"))==null||P.addEventListener("click",b))},600)},700)},2800)}function Ie(e,t,i){var I,E,B,P,Q,ie,de,D,z;const n=t.selected.map($=>$.cardId),a=t.usedSubIds||[],o=t.homeSubs.filter($=>!a.includes($.cardId)),s=Object.values(t.homeTeam).flat().filter($=>$.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,d=!["GK","DEF","MIL","ATT"].some($=>(t.aiTeam[$]||[]).some(G=>!G.used)),c=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter($=>!$.used),l=t.phase==="attack"&&d&&c.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter($=>!$.used).map($=>$.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",f=t.phase==="attack",m=t.phase==="defense",g=t.phase==="finished",x=(t.homeSubs||[]).filter($=>!(t.usedSubIds||[]).includes($.cardId)).length>0&&t.subsUsed<t.maxSubs,b=f&&c.length===0&&!x,v=t.gcCards.filter($=>!t.usedGc.includes($.id)),h=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const G=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${gt((G.players||[]).map(se=>({...se,used:!1})),"#ff6b6b",G.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const G=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${gt((G.players||[]).map(se=>({...se,used:!1})),"#00ff88",G.total)}
          </div>`}const $=t.log[t.log.length-1];return $?'<div style="padding:2px 4px">'+yo($)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const $=window.innerWidth>=700,G=(T,C,N)=>{var Se,Fe;const O=(t.gcDefs||[]).find(Pe=>Pe.name===T.gc_type),V={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[O==null?void 0:O.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",F={purple:"#b06ce0",light_blue:"#00d4ef"}[O==null?void 0:O.color]||"#b06ce0",H=(O==null?void 0:O.name)||T.gc_type,$e=(O==null?void 0:O.effect)||((Se=Ce[T.gc_type])==null?void 0:Se.desc)||"",we=O!=null&&O.image_url?`/icons/${O.image_url}`:null,_e=((Fe=Ce[T.gc_type])==null?void 0:Fe.icon)||"⚡",be=Math.round(N*.22),Ee=Math.round(N*.22),Te=N-be-Ee,xe=H.length>12?7:9;return`<div class="gc-mini" data-gc-id="${T.id}" data-gc-type="${T.gc_type}"
          style="box-sizing:border-box;width:${C}px;height:${N}px;border-radius:10px;border:2px solid ${F};background:${V};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${be}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${xe}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${C-6}px">${H}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${Te}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${we?`<img src="${we}" style="max-width:${C-10}px;max-height:${Te-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Te*.55)}px">${_e}</span>`}
          </div>
          <div style="height:${Ee}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${$e.slice(0,38)}</span>
          </div>
        </div>`},se=(T,C)=>{var N;return`<div id="boost-card"
          style="box-sizing:border-box;width:${T}px;height:${C}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(C*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(C*.2)}px">⚡</div>
            <div style="font-size:${Math.round(C*.09)}px;color:#000;font-weight:900">+${(N=t.boostCard)==null?void 0:N.value}</div>
          </div>`},ge=(T,C)=>C?se(130,175):G(T,130,175),le=(T,C)=>C?se(68,95):G(T,68,95),re=$?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ze=g?`<button id="btn-results" style="${re};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${re};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:b?`<button id="btn-pass" style="${re};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:f?`<button id="btn-action" style="${re};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:m?`<button id="btn-action" style="${re};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${re};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,Y=f||m?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Z=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${$?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(T=>`<div class="sub-btn-col" data-sub-id="${T.cardId}" style="cursor:pointer;flex-shrink:0">${Qe(T,76,100)}</div>`).join("")}
      </div>`,W=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${At(t.homeTeam,t.formation,t.phase,n,Xe(),at(),l)}
        </div>
      </div>`;return $?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Z}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${W}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ze}${Y}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${v.map(T=>ge(T,!1)).join("")}
            ${h?ge(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${At(t.homeTeam,t.formation,t.phase,n,Xe(),at(),l)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${v.map(T=>le(T,!1)).join("")}
            ${h?le(null,!0):""}
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
          <div>${ze}${Y}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map($=>{var G,se,ge;if($.type==="duel"){const le=$.isGoal,re=$.homeScored?"#FFD700":le?"#ff6b6b":"rgba(255,255,255,0.3)",ze=$.homeScored?"⚽ BUT !":le?"⚽ BUT IA !":(G=$.homePlayers)!=null&&G.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${le?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${re};margin-bottom:4px">
                <div style="font-size:9px;color:${re};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ze}</div>
                ${(se=$.homePlayers)!=null&&se.length?`<div style="margin-bottom:3px">${gt($.homePlayers,"rgba(255,255,255,0.7)",$.homeTotal)}</div>`:""}
                ${(ge=$.aiPlayers)!=null&&ge.length?`<div style="opacity:0.7">${gt($.aiPlayers,"#ff6b6b",$.aiTotal)}</div>`:""}
              </div>`}return $.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${$.outPlayer?Qe({...$.outPlayer,used:!0,_line:$.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${$.inPlayer?Qe({...$.inPlayer,_line:$.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:$.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${$.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${$.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function k(){const $=e.querySelector(".match-screen");if(!$)return;const G=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);$.style.bottom="auto",$.style.height=G+"px",$.style.minHeight=G+"px",$.style.maxHeight=G+"px",$.style.overflow="hidden";const se=e.querySelector("#mobile-action-bar"),ge=e.querySelector("#mobile-play-area");se&&ge&&(ge.style.paddingBottom=se.offsetHeight+"px")}if(k(),setTimeout(k,120),setTimeout(k,400),setTimeout(k,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",k),window.visualViewport.addEventListener("scroll",k)),window.addEventListener("resize",k)),function(){const G=e.querySelector(".terrain-wrapper svg");G&&(G.removeAttribute("width"),G.removeAttribute("height"),G.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",G.setAttribute("viewBox","-26 -26 352 352"),G.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const $=e.querySelector(".terrain-wrapper svg");$&&($.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let $=!1,G=30;const se=()=>document.getElementById("match-timer"),ge=()=>{const le=se();if(!le)return;const re=String(Math.floor(G/60)).padStart(2,"0"),ze=String(G%60).padStart(2,"0");le.textContent=` ${re}:${ze}`,le.style.color=$?"#ff2222":"#ff9500",le.style.fontWeight="900"};ge(),t._timerInt=setInterval(()=>{if(G--,G<0)if(!$)$=!0,G=15,ge();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const le=document.createElement("div");le.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",le.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(le),setTimeout(()=>{le.remove(),kt(e,t,i)},2500)}else ge()},1e3)}(I=document.getElementById("match-quit"))==null||I.addEventListener("click",()=>{Ue(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,kt(e,t,i))}),(E=document.getElementById("view-ai"))==null||E.addEventListener("click",()=>jo(t,i)),(B=document.getElementById("toggle-history"))==null||B.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.add("open")}),(P=document.getElementById("close-history"))==null||P.addEventListener("click",()=>{var $;($=document.getElementById("match-history-panel"))==null||$.classList.remove("open")}),(Q=document.getElementById("btn-action"))==null||Q.addEventListener("click",()=>{t.selected.length!==0&&(f?Eo(e,t,i):m&&Lo(e,t,i))}),(ie=document.getElementById("btn-results"))==null||ie.addEventListener("click",()=>kt(e,t,i)),(de=document.getElementById("btn-pass"))==null||de.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Ie(e,t,i),setTimeout(()=>Ot(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach($=>{$.addEventListener("click",()=>$o($,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach($=>{$.addEventListener("click",()=>Jt(e,t,i,null,$.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach($=>{$.addEventListener("click",()=>Ao($.dataset.gcId,$.dataset.gcType,e,t,i))}),(D=document.getElementById("boost-card"))==null||D.addEventListener("click",()=>Co(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach($=>{$.addEventListener("click",()=>Jt(e,t,i,$.dataset.subId))}),(z=document.getElementById("sub-btn-main"))==null||z.addEventListener("click",()=>Jt(e,t,i))}function $o(e,t,i,n){const a=e.dataset.cardId,o=e.dataset.role,r=t.selected.findIndex(s=>s.cardId===a);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(d=>d.cardId===a);s&&t.selected.push({...s,_role:o,_line:o})}Ie(i,t,n)}function fi(e,t,i){e.matchId&&w.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function Eo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),fi(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(s=>!s.used)),a=t.selected.map(r=>{const s=(t.homeTeam[r._role]||[]).find(c=>c.cardId===r.cardId)||r,d=n&&["GK","DEF"].includes(r._role);return{...s,_line:r._role,...d?{note_a:Math.max(1,Number(s.note_a)||0)}:{}}}),o=ci(a,t.modifiers.home);t.pendingAttack={...o,players:[...a],side:"home"},t.selected.forEach(r=>{const s=(t.homeTeam[r._role]||[]).find(d=>d.cardId===r.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${o.total} (base ${o.base}${o.links?` +${o.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Ie(e,t,i),setTimeout(()=>Io(e,t,i),1200)}function Lo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),fi(t,i,i.state.profile.id);const n=t.stadiumDef||null,a=t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(u=>u.cardId===d.cardId)||d,l=c.stadiumBonus||n&&(n.club_id&&String(c.club_id)===String(n.club_id)||n.country_code&&c.country_code===n.country_code)||!1;return{...c,_line:d._role,stadiumBonus:l}}),o=pi(a,t.modifiers.home);t.selected.forEach(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId);c&&(c.used=!0)});const r=ui(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>Ze(d)),homePlayers:t.selected.map(d=>{const c=(t.homeTeam[d._role]||[]).find(l=>l.cardId===d.cardId)||d;return Ze(c)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(r.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(r.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Ie(e,t,i),Nt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{mt(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,mt(e,t,i,"home-attack")}function zo(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(d=>d.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(d=>!e.aiUsedSubIds.includes(d.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],a=i.find(d=>d.job===n.job)||i[0],o={...a,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],s=r.findIndex(d=>d.cardId===n.cardId);s!==-1&&(r[s]=o),e.aiUsedSubIds.push(a.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${a.firstname} ${a.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function To(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(a=>!e.aiUsedGc.includes(a.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Ce[i.gc_type],i.gc_type){case"Boost+2":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Ot(e,t,i){fi(t,i,null),zo(t),To(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],a=Vi(n,"attack",t.difficulty);if(!a.length){Ft(e,t,i);return}const o=ci(a,t.modifiers.ai);t.pendingAttack={...o,players:a,side:"ai"},a.forEach(c=>{c.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${a.map(c=>c.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(c=>!c.used),d=(t.homeSubs||[]).filter(c=>!(t.usedSubIds||[]).includes(c.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!d){t.aiScore++;const c={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:a.map(l=>Ze(l)),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(c),t.pendingAttack=null,Ie(e,t,i),Nt(c.aiPlayers,t.homeScore,t.aiScore,!1,()=>{mt(e,t,i,"home-attack")});return}t.phase="defense",Ie(e,t,i)}function Io(e,t,i){var c,l;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],a=Vi(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((c=t.pendingAttack)==null?void 0:c.players)||[]).map(m=>Ze(m)),homeTotal:((l=t.pendingAttack)==null?void 0:l.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Ie(e,t,i),Nt(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{mt(e,t,i,"ai-attack")});return}const r=a.length>0?pi(a,t.modifiers.ai).total:0;a.forEach(u=>{u.used=!0});const s=ui(t.pendingAttack.total,r,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>Ze(u)),aiPlayers:a.map(u=>Ze(u)),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(s.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,Ie(e,t,i),Nt(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{mt(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,mt(e,t,i,"ai-attack")}function mt(e,t,i,n){if(t.round++,nn(t)){kt(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){Ft(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){Ft(e,t,i);return}setTimeout(()=>Ot(e,t,i),100);return}t.phase="attack",Ie(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){Ft(e,t,i);return}t.phase="ai-attack",Ie(e,t,i),setTimeout(()=>Ot(e,t,i),800)}}function nn(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used));return!t&&!i}function Ft(e,t,i){nn(t)?kt(e,t,i):(t.phase="attack",Ie(e,t,i))}function Jt(e,t,i,n=null,a=null){var m,g;if(t.phase!=="attack"){wt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){wt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,x])=>(x||[]).filter(b=>b.used).map(b=>({...b,_line:b._line||p}))),r=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){wt("Aucun joueur utilisé à remplacer");return}if(!r.length){wt("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===a));const d=((m=o[s])==null?void 0:m._line)||((g=o[s])==null?void 0:g.job);let c=n?Math.max(0,r.findIndex(p=>p.cardId===n)):Math.max(0,r.findIndex(p=>p.job===d)),l=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function f(){var y,I,E,B,P,Q;const p=o[s],x=r[c],b=Math.min(130,Math.round((window.innerWidth-90)/2)),v=Math.round(b*1.35),h=ie=>`background:rgba(255,255,255,0.12);border:none;color:${ie?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${ie?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
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
    </div>`,(y=u.querySelector("#sub-close"))==null||y.addEventListener("click",()=>u.remove()),(I=u.querySelector("#out-up"))==null||I.addEventListener("click",()=>{s>0&&(s--,f())}),(E=u.querySelector("#out-down"))==null||E.addEventListener("click",()=>{s<o.length-1&&(s++,f())}),(B=u.querySelector("#in-up"))==null||B.addEventListener("click",()=>{c>0&&(c--,f())}),(P=u.querySelector("#in-down"))==null||P.addEventListener("click",()=>{c<r.length-1&&(c++,f())});const k=(ie,de,D,z)=>{const $=u.querySelector("#"+ie);if(!$)return;let G=0;$.addEventListener("touchstart",se=>{G=se.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",se=>{const ge=se.changedTouches[0].clientY-G;if(Math.abs(ge)<30)return;const le=de();ge<0&&le<z-1?(D(le+1),f()):ge>0&&le>0&&(D(le-1),f())},{passive:!0})};k("in-panel",()=>c,ie=>c=ie,r.length),k("out-panel",()=>s,ie=>s=ie,o.length),(Q=u.querySelector("#sub-confirm"))==null||Q.addEventListener("click",ie=>{if(ie.preventDefault(),ie.stopPropagation(),l)return;l=!0;const de=o[s],D=r[c];if(!de||!D)return;let z=null,$=-1;for(const[se,ge]of Object.entries(t.homeTeam)){const le=(ge||[]).findIndex(re=>re.cardId===de.cardId);if(le!==-1){z=se,$=le;break}}if($===-1||!z){wt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const G={...D,_line:z,_col:de._col||0,used:!1,boost:0};t.homeTeam[z].splice($,1,G),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(D.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:de.name,firstname:de.firstname,note:je(de,z),portrait:zt(de),job:de.job,country_code:de.country_code,rarity:de.rarity,clubName:de.clubName,clubLogo:de.clubLogo},inPlayer:{name:D.name,firstname:D.firstname,note:je(D,z),portrait:zt(D),job:D.job,country_code:D.country_code,rarity:D.rarity,clubName:D.clubName,clubLogo:D.clubLogo},text:`🔄 ${D.firstname} ${D.name} remplace ${de.firstname} ${de.name}`}),u.remove(),bo(de,D,()=>Ie(e,t,i))})}document.body.appendChild(u),f()}function Ao(e,t,i,n,a){var g,p;const o=(n.gcDefs||[]).find(x=>x.name===t),r=Ce[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",d={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",c=(o==null?void 0:o.name)||t,l=(o==null?void 0:o.effect)||r.desc,u=o!=null&&o.image_url?`/icons/${o.image_url}`:null,f=r.icon||"⚡",m=document.createElement("div");m.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",m.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${d};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${d}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${c.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${c}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${f}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${l}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(m),(g=m.querySelector("#gc-back"))==null||g.addEventListener("click",()=>m.remove()),(p=m.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{m.remove(),So(e,t,i,n,a)})}function qt(e,t,i,n,a,o){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function d(){var c,l;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",m={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",g=je(u,f)+(u.boost||0),p=s.find(x=>x.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
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
    </div>`,(c=r.querySelector("#gc-picker-close"))==null||c.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,m=e.find(p=>p.cardId===f);if(!m)return;const g=s.findIndex(p=>p.cardId===f);g>-1?s.splice(g,1):s.length<t&&s.push(m),d()})}),(l=r.querySelector("#gc-picker-confirm"))==null||l.addEventListener("click",()=>{r.remove(),o(s)})}d(),document.body.appendChild(r)}const Mo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,a,o)=>{const r=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,d])=>d.filter(c=>!c.used).map(c=>({...c,_line:s})));return r.length?(qt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,a,n,s=>{s.forEach(d=>{const c=(n.homeTeam[d._line]||[]).find(l=>l.cardId===d.cardId);c&&(c.boost=(c.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${c.name}`,type:"info"}))}),Ie(a,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Ie(a,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},a,o,r)=>{const s=n==="home"?a.homeTeam:a.aiTeam,d=n==="ai"?"adverse":"allié",c=Object.entries(s).filter(([l])=>!i.length||i.includes(l)).flatMap(([l,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:l})));return c.length?(qt(c,t,`Choisir ${t} joueur(s) ${d}(s) à débuffer (-${e})`,o,a,l=>{l.forEach(u=>{const m=((n==="home"?a.homeTeam:a.aiTeam)[u._line]||[]).find(g=>g.cardId===u.cardId);m&&(m.boost=(m.boost||0)-e,a.log.push({text:`🎯 -${e} sur ${m.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Ie(o,a,r)}),!0):(a.log.push({text:`🎯 Aucun joueur ${d} disponible`,type:"info"}),Ie(o,a,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,a,o)=>{const r=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",d=Object.entries(r).filter(([c])=>!t.length||t.includes(c)).flatMap(([c,l])=>l.filter(u=>!u.used).map(u=>({...u,_line:c})));return d.length?(qt(d,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,a,n,c=>{c.forEach(l=>{const f=((i==="home"?n.homeTeam:n.aiTeam)[l._line]||[]).find(m=>m.cardId===l.cardId);f&&(f.used=!0,n.log.push({text:`❌ ${f.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Ie(a,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Ie(a,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,a)=>{const o=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,s])=>s.filter(d=>d.used).map(d=>({...d,_line:r})));return o.length?(qt(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(s=>{const d=(i.homeTeam[s._line]||[]).find(c=>c.cardId===s.cardId);d&&(d.used=!1,i.log.push({text:`💫 ${d.name} ressuscité !`,type:"info"}))}),Ie(n,i,a)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Ie(n,i,a),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function So(e,t,i,n,a){n.usedGc.push(e);const o=n.gcDefs||[],r=o.find(d=>d.name===t)||o.find(d=>{var c;return((c=d.name)==null?void 0:c.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const d=Mo[r.effect_type];d?d(r.effect_params||{},n,i,a)||(s=!0):(a.toast(`Effet "${r.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(n.homeTeam).flatMap(([c,l])=>(l||[]).filter(u=>u.used).map(u=>({...u,_line:c})));d.length?(d[0].used=!1,n.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(c=>!c.used);if(d.length){const c=d.sort((l,u)=>je(u,"ATT")-je(l,"ATT"))[0];c.used=!0,n.log.push({text:`❄️ ${c.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}w.from("cards").delete().eq("id",e).then(()=>{}),s&&Ie(i,n,a)}function Co(e,t,i){const n=Object.values(t.homeTeam).flat().filter(a=>!a.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(a=>`
        <div class="player-boost-opt" data-card-id="${a.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${uo[a.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${je(a,a._line||a.job)}</div>
          <div style="flex:1"><b>${a.firstname} ${a.name}</b><div style="font-size:11px;color:#888">${a._line||a.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[r]||[]).find(d=>d.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Ie(e,t,i)})})}async function kt(e,t,i){var l,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,a=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,r=a?"victoire":o?"nul":"defaite",s=Cn(t.mode,r);t.matchId&&await w.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:a?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const d={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};a?d.wins=(n.profile.wins||0)+1:o?d.draws=(n.profile.draws||0)+1:d.losses=(n.profile.losses||0)+1,await w.from("users").update(d).eq("id",n.profile.id),await i.refreshProfile();const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",c.innerHTML=`
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
    </div>`,document.body.appendChild(c),(l=document.getElementById("res-home"))==null||l.addEventListener("click",()=>{c.remove(),Ue(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{c.remove(),Ue(e),i.navigate("match",{matchMode:t.mode})})}function jo(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${It(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function Ct(e,t,i,n,a={}){return on(e,t,i,n,a.myGC||[],a.gcDefs||[],a.isRanked||!1,a.rankedData||null,a.stadiumDef||null,a.onMatchEnd||null,a.mlLeagueId||null,a.mlMatchId||null)}async function Bo(e,t,i){const{data:n}=await w.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const a=n.home_id===t.state.user.id;return on(e,t,i,a,[],[],n.is_ranked||!1,null,null,null,null,null)}async function on(e,t,i,n,a=[],o=[],r=!1,s=null,d=null,c=null,l=null,u=null){const{state:f,navigate:m,toast:g}=t,p=n?"p1":"p2",x=n?"p2":"p1",b=(a||[]).map(_=>_.id),v=(a||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:h}=await w.from("matches").select("*").eq("id",i).single();if(!h){g("Match introuvable","error"),m("home");return}async function k(){var ce,ue;console.log("[PvP] buildGameState match:",{id:h.id,home_deck_id:h.home_deck_id,away_deck_id:h.away_deck_id,mode:h.mode,is_ranked:h.is_ranked});const[{data:_,error:L},{data:M,error:S},{data:A},{data:q}]=await Promise.all([w.rpc("get_deck_for_match",{p_deck_id:h.home_deck_id}),w.rpc("get_deck_for_match",{p_deck_id:h.away_deck_id}),w.from("users").select("id,pseudo,club_name").eq("id",h.home_id).single(),w.from("users").select("id,pseudo,club_name").eq("id",h.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",L==null?void 0:L.message,"p2:",S==null?void 0:S.message,"p1D:",(ce=_==null?void 0:_.starters)==null?void 0:ce.length,"p2D:",(ue=M==null?void 0:M.starters)==null?void 0:ue.length);const j=te=>{const he=Number(te.evolution_bonus)||0;return{cardId:te.card_id,position:te.position,id:te.id,firstname:te.firstname,name:te.surname_real,country_code:te.country_code,club_id:te.club_id,job:te.job,job2:te.job2,note_g:(Number(te.note_g)||0)+(te.job==="GK"||te.job2==="GK"&&Number(te.note_g)>0?he:0),note_d:(Number(te.note_d)||0)+(te.job==="DEF"||te.job2==="DEF"&&Number(te.note_d)>0?he:0),note_m:(Number(te.note_m)||0)+(te.job==="MIL"||te.job2==="MIL"&&Number(te.note_m)>0?he:0),note_a:(Number(te.note_a)||0)+(te.job==="ATT"||te.job2==="ATT"&&Number(te.note_a)>0?he:0),evolution_bonus:he,rarity:te.rarity,skin:te.skin,hair:te.hair,hair_length:te.hair_length,face:te.face||null,clubName:te.club_encoded_name||null,clubLogo:te.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},R=((_==null?void 0:_.starters)||[]).map(te=>j(te)),X=((M==null?void 0:M.starters)||[]).map(te=>j(te)),J=(_==null?void 0:_.formation)||"4-4-2",K=(M==null?void 0:M.formation)||"4-4-2";let ne=Rt(R,J),ee=Rt(X,K);const pe=((_==null?void 0:_.subs)||[]).map(te=>j(te)),me=((M==null?void 0:M.subs)||[]).map(te=>j(te)),ae=(_==null?void 0:_.stadium_def)||(n?d:null),oe=(M==null?void 0:M.stadium_def)||(n?null:d);return ae&&(ne=Tt(ne,ae),Gt(pe,ae)),oe&&(ee=Tt(ee,oe),Gt(me,oe)),{p1Team:ne,p2Team:ee,p1Subs:pe,p2Subs:me,p1Formation:J,p2Formation:K,p1Name:(A==null?void 0:A.club_name)||(A==null?void 0:A.pseudo)||"Joueur 1",p2Name:(q==null?void 0:q.club_name)||(q==null?void 0:q.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?b:[],gc_p2:n?[]:b,gcCardsFull_p1:n?v:[],gcCardsFull_p2:n?[]:v,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let y=h.game_state&&Object.keys(h.game_state).length?h.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!y,"match.status:",h.status,"home_id:",h.home_id,"away_id:",h.away_id,"myId:",f.profile.id),!y)if(n){y=await k(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((y==null?void 0:y.p1Team)||{}));const{data:_}=await w.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await w.from("matches").update({game_state:y,turn_user_id:h.home_id}).eq("id",i):y=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let _=0;_<30&&!y;_++){await new Promise(M=>setTimeout(M,400));const{data:L}=await w.from("matches").select("game_state").eq("id",i).single();L!=null&&L.game_state&&Object.keys(L.game_state).length&&(y=L.game_state),_%5===0&&console.log("[PvP] away - poll",_,"game_state:",!!(L!=null&&L.game_state))}if(!y){g("Erreur de synchronisation","error"),m("home");return}y.gc_p2=b,y.gcCardsFull_p2=v,await w.from("matches").update({game_state:y}).eq("id",i)}let I=!1,E=null,B=!1;const P=new Set,Q=new Set;async function ie(_){var K,ne;try{w.removeChannel(de)}catch{}const L=y[p+"Score"]||0,M=y[x+"Score"]||0;let S,A;_.winner_id?(S=_.winner_id===f.profile.id,A=!1):_.forfeit?(S=L>M,A=!1):(A=L===M,S=L>M);let q="";if(r&&n)try{const{data:ee}=await w.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.home_id).single(),{data:pe}=await w.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",h.away_id).single();if(ee&&pe){const me=S?1:A?.5:0,ae=1-me,oe=ee.placement_matches<10,ce=pe.placement_matches<10,ue=computeGlicko2(ee.mmr,ee.mmr_deviation,ee.mmr_volatility,pe.mmr,pe.mmr_deviation,me===1?1:me===0?0:.5,oe),te=computeGlicko2(pe.mmr,pe.mmr_deviation,pe.mmr_volatility,ee.mmr,ee.mmr_deviation,ae===1?1:ae===0?0:.5,ce);await w.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:A?null:S?h.home_id:h.away_id,p_home_id:h.home_id,p_away_id:h.away_id,p_home_delta:ue.delta,p_away_delta:te.delta,p_home_new_rd:ue.newRd,p_away_new_rd:te.newRd,p_home_new_vol:ue.newSigma,p_away_new_vol:te.newSigma});const he=ue.delta,ke=ue.newMmr,Le=getTier(ke),Be=he>=0?"+":"",Ke=he>=0?"#4caf50":"#ff6b6b",De=getTier(ee.mmr);q=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Le.id!==De.id?`<div style="font-size:20px;font-weight:900;color:${Le.color}">
                    ${ke>ee.mmr?"📈":"📉"} ${De.emoji} ${De.label} → ${Le.emoji} ${Le.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${ke>ee.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${he>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Le.color}">${Le.emoji} ${Le.label}</div>`}
              ${oe?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${ee.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(ee){console.error("[Ranked] MMR update error:",ee)}(K=document.getElementById("pvp-end-overlay"))==null||K.remove();const j=document.createElement("div");j.id="pvp-end-overlay",j.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const R=A?"🤝":S?"🏆":"😞",X=A?"MATCH NUL":S?"VICTOIRE !":"DÉFAITE",J=A?"#fff":S?"#FFD700":"#ff6b6b";j.innerHTML=`
      <div style="font-size:64px">${R}</div>
      <div style="font-size:26px;font-weight:900;color:${J}">${X}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${y[p+"Name"]} ${L} – ${M} ${y[x+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${S?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${q}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(j),(ne=j.querySelector("#pvp-end-home"))==null||ne.addEventListener("click",()=>{j.remove(),Ue(e),m(r?"ranked":"home")})}const de=w.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{const L=_.new;try{if(L.status==="finished"||L.forfeit){if(I)return;I=!0,E&&(clearInterval(E),E=null),L.game_state&&(y=L.game_state),ie(L);return}if(L.game_state){const M=y;y=L.game_state;const S=y._lastGC;if(S&&S.seq&&!Q.has(S.seq)&&(Q.add(S.seq),S.by!==p)){T(S.type,S.by,()=>re());return}const A=M[p+"Score"]||0,q=M[x+"Score"]||0,j=y[p+"Score"]||0,R=y[x+"Score"]||0,X=j>A,J=R>q;if((X||J)&&!P.has(y.round)){P.add(y.round);const K=[...y.log||[]].reverse().find(ee=>ee.isGoal),ne=((K==null?void 0:K.homePlayers)||[]).map(ee=>({name:ee.name,note:ee.note,portrait:ee.portrait,job:ee.job}));W(ne,j,R,X,()=>re());return}re()}}catch(M){console.error("[PvP] crash:",M)}}).subscribe();async function D(_){Object.assign(y,_),y.lastActionAt=new Date().toISOString();const{error:L}=await w.from("matches").update({game_state:y}).eq("id",i);L&&g("Erreur de synchronisation","error");try{re()}catch(M){console.error("[PvP] renderPvpScreen crash:",M)}}async function z(){if(I)return;I=!0,E&&(clearInterval(E),E=null);const _=n?h.away_id:h.home_id,L=n?"p2":"p1",M=n?"p1":"p2",S={...y,[L+"Score"]:3,[M+"Score"]:0,phase:"finished"};try{await w.from("matches").update({status:"finished",forfeit:!0,winner_id:_,home_score:S.p1Score||0,away_score:S.p2Score||0,game_state:S}).eq("id",i)}catch{}try{w.removeChannel(de)}catch{}setTimeout(()=>{Ue(e),m("home")},800)}const $={BOOST_STAT:({value:_=1,count:L=1,roles:M=[]},S,A)=>{const q=S[p+"Team"],j=Object.entries(q).filter(([R])=>!M.length||M.includes(R)).flatMap(([R,X])=>X.filter(J=>!J.used).map(J=>({...J,_line:R})));if(!j.length){S.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),A(S);return}G(j,L,`Choisir ${L} joueur(s) à booster (+${_})`,R=>{R.forEach(X=>{const J=(q[X._line]||[]).find(K=>K.cardId===X.cardId);J&&(J.boost=(J.boost||0)+_,S.log.push({text:`⚡ +${_} sur ${J.name}`,type:"info"}))}),S[p+"Team"]=q,A(S)})},DEBUFF_STAT:({value:_=1,count:L=1,roles:M=[],target:S="ai"},A,q)=>{const j=S==="home"?p:x,R=A[j+"Team"],X=S==="home"?"allié":"adverse",J=Object.entries(R).filter(([K])=>!M.length||M.includes(K)).flatMap(([K,ne])=>ne.map(ee=>({...ee,_line:K})));if(!J.length){A.log.push({text:`🎯 Aucun joueur ${X}`,type:"info"}),q(A);return}G(J,L,`Choisir ${L} joueur(s) ${X}(s) (-${_})`,K=>{K.forEach(ne=>{const ee=(R[ne._line]||[]).find(pe=>pe.cardId===ne.cardId);ee&&(ee.boost=(ee.boost||0)-_,A.log.push({text:`🎯 -${_} sur ${ee.name}`,type:"info"}))}),A[j+"Team"]=R,q(A)})},GRAY_PLAYER:({count:_=1,roles:L=[],target:M="ai"},S,A)=>{const q=M==="home"?p:x,j=S[q+"Team"],R=M==="home"?"allié":"adverse",X=Object.entries(j).filter(([J])=>!L.length||L.includes(J)).flatMap(([J,K])=>K.filter(ne=>!ne.used).map(ne=>({...ne,_line:J})));if(!X.length){S.log.push({text:`❌ Aucun joueur ${R}`,type:"info"}),A(S);return}G(X,_,`Choisir ${_} joueur(s) ${R}(s) à exclure`,J=>{const K="usedCardIds_"+q,ne=new Set(S[K]||[]);J.forEach(ee=>{const pe=(j[ee._line]||[]).find(me=>me.cardId===ee.cardId);pe&&(pe.used=!0,ne.add(ee.cardId),S.log.push({text:`❌ ${pe.name} exclu !`,type:"info"}))}),S[K]=[...ne],S[q+"Team"]=j,A(S)})},REVIVE_PLAYER:({count:_=1,roles:L=[]},M,S)=>{const A=M[p+"Team"],q=Object.entries(A).filter(([j])=>!L.length||L.includes(j)).flatMap(([j,R])=>R.filter(X=>X.used).map(X=>({...X,_line:j})));if(!q.length){M.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),S(M);return}G(q,_,`Choisir ${_} joueur(s) à ressusciter`,j=>{j.forEach(R=>{const X=(A[R._line]||[]).find(J=>J.cardId===R.cardId);X&&(X.used=!1,M.log.push({text:`💫 ${X.name} ressuscité !`,type:"info"}))}),M[p+"Team"]=A,S(M)})},REMOVE_GOAL:({},_,L)=>{const M=x+"Score";_[M]>0?(_[M]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),L(_)},ADD_GOAL_DRAW:({},_,L)=>{_[p+"Score"]===_[x+"Score"]?(_[p+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),L(_)},ADD_SUB:({value:_=1},L,M)=>{L.maxSubs=(L.maxSubs||3)+_,L.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),M(L)},CUSTOM:({},_,L)=>L(_)};function G(_,L,M,S){const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let q=[];function j(){var X,J;const R=_.map(K=>{const ne={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[K._line]||"#555",ee=je(K,K._line)+(K.boost||0),me=q.find(oe=>oe.cardId===K.cardId)?"#FFD700":"rgba(255,255,255,0.25)",ae=K.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${K.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${me};background:${ne};overflow:hidden;cursor:pointer;${ae}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${K.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${ee}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${K._line}</div>
        </div>`}).join("");A.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${M}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${q.length}/${L}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${R}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${q.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${q.length}/${L})
          </button>
        </div>`,(X=A.querySelector("#pp-close"))==null||X.addEventListener("click",()=>A.remove()),A.querySelectorAll(".pp-item").forEach(K=>{K.addEventListener("click",()=>{const ne=K.dataset.cid,ee=_.find(me=>me.cardId===ne),pe=q.findIndex(me=>me.cardId===ne);ee&&(pe>-1?q.splice(pe,1):q.length<L&&q.push(ee),j())})}),(J=A.querySelector("#pp-confirm"))==null||J.addEventListener("click",()=>{A.remove(),S(q)})}j(),document.body.appendChild(A)}async function se(_,L){const S=(y["gcCardsFull_"+p]||[]).find(R=>R.id===_),A=(S==null?void 0:S._gcDef)||(y.gcDefs||[]).find(R=>{var X;return R.name===L||((X=R.name)==null?void 0:X.toLowerCase().trim())===(L==null?void 0:L.toLowerCase().trim())}),q=[...y["usedGc_"+p]||[],_],j={type:L,by:p,seq:(y._gcAnimSeq||0)+1};Q.add(j.seq),T(L,p,async()=>{if(A!=null&&A.effect_type&&A.effect_type!=="CUSTOM"){const X=$[A.effect_type];if(X){const J={...y};X(A.effect_params||{},J,async K=>{K["usedGc_"+p]=q,K._lastGC=j,K._gcAnimSeq=j.seq,await D(K)});return}}const R={...y};switch(L){case"Remplacement+":R.maxSubs=(R.maxSubs||3)+1,R.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const X=x+"Score";R[X]>0&&(R[X]--,R.log.push({text:"🚫 But annulé",type:"info"}));break}}R["usedGc_"+p]=q,R._lastGC=j,R._gcAnimSeq=j.seq,await D(R)})}function ge(_,L){const M="usedCardIds_"+_,S=new Set(y[M]||[]);L.forEach(A=>S.add(A)),y[M]=[...S]}function le(){for(const _ of["p1","p2"]){const L=new Set(y["usedCardIds_"+_]||[]),M=y[_+"Team"];if(M)for(const S of["GK","DEF","MIL","ATT"])(M[S]||[]).forEach(A=>{A.used=L.has(A.cardId)})}}function re(){var ot,xi,yi,bi,hi,vi;if(y.phase==="reveal")return ze();if(y.phase==="midfield")return Z();if(y.phase==="finished")return it();const _=y[p+"Team"],L=y[x+"Team"];le();const M=y[p+"Score"],S=y[x+"Score"],A=y[p+"Name"],q=y[x+"Name"],j=y.phase===p+"-attack",R=y.phase===p+"-defense",X=Array.isArray(y["selected_"+p])?y["selected_"+p]:[],J=X.map(U=>U.cardId),K=window.innerWidth>=700,ne=y[p+"Subs"]||[],ee=y["usedSubIds_"+p]||[],pe=ne.filter(U=>!ee.includes(U.cardId)),me=y["gcCardsFull_"+p]||[],ae=y["usedGc_"+p]||[],oe=me.filter(U=>!ae.includes(U.id)),ce=y.boostOwner===p&&!y.boostUsed,ue=!["GK","DEF","MIL","ATT"].some(U=>(L[U]||[]).some(fe=>!fe.used)),te=[..._.MIL||[],..._.ATT||[]].filter(U=>!U.used),he=j&&ue&&te.length===0?[..._.GK||[],..._.DEF||[]].filter(U=>!U.used).map(U=>U.cardId):[];function ke(U,fe,Ae){var $i,Ei;const ye=U._gcDef,rt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[ye==null?void 0:ye.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",pt={purple:"#b06ce0",light_blue:"#00d4ef"}[ye==null?void 0:ye.color]||"#b06ce0",ht=(ye==null?void 0:ye.name)||U.gc_type,vt=(ye==null?void 0:ye.effect)||(($i=Ce[U.gc_type])==null?void 0:$i.desc)||"",wi=ye!=null&&ye.image_url?`/icons/${ye.image_url}`:null,pn=((Ei=Ce[U.gc_type])==null?void 0:Ei.icon)||"⚡",_i=Math.round(Ae*.22),ki=Math.round(Ae*.22),Kt=Ae-_i-ki,un=ht.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${U.id}" data-gc-type="${U.gc_type}"
        style="box-sizing:border-box;width:${fe}px;height:${Ae}px;border-radius:10px;border:2px solid ${pt};background:${rt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${_i}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${un}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${fe-6}px">${ht}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Kt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${wi?`<img src="${wi}" style="max-width:${fe-10}px;max-height:${Kt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Kt*.55)}px">${pn}</span>`}
        </div>
        <div style="height:${ki}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${vt.slice(0,38)}</span>
        </div>
      </div>`}function Le(U,fe){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${U}px;height:${fe}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(fe*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(fe*.2)}px">⚡</div>
        <div style="font-size:${Math.round(fe*.09)}px;color:#000;font-weight:900">+${y.boostValue}</div>
      </div>`}const Be=(U,fe)=>fe?Le(130,175):ke(U,130,175),Ke=(U,fe)=>fe?Le(68,95):ke(U,68,95),De=K?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Ne=j?xe(p)?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${X.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${De};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:R?`<button id="pvp-action" style="${De};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${X.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${q}</div>`,qe=j&&!xe(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':j||R?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${X.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${K?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${pe.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':pe.map(U=>`<div class="pvp-sub-btn" data-sub-id="${U.cardId}" style="cursor:pointer;flex-shrink:0">${Qe(U,K?76:44,K?100:58)}</div>`).join("")}
    </div>`,Re=j?"attack":R?"defense":"idle",nt=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${At(_,y[p+"Formation"],Re,J,Xe(),at(),he)}
      </div>
    </div>`;function Ve(U){if(U.type==="duel"&&(U.homeTotal!=null||U.aiTotal!=null)){const fe=(U.homeTotal||0)>=(U.aiTotal||0);return`<div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:5px 6px;border:1px solid rgba(255,255,255,0.08)">
          <div style="text-align:center;font-size:9px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.5);margin-bottom:4px">${(U.title||"DUEL").toUpperCase()}</div>
          <div style="display:flex;align-items:center;gap:3px;max-height:46px;overflow:hidden">
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-end;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(U.homePlayers||[]).map(Ae=>qi(Ae)).join("")}
            </div>
            <div style="text-align:center;padding:0 6px;flex-shrink:0">
              <div style="font-size:${fe?20:14}px;font-weight:900;color:${fe?"#FFD700":"rgba(255,255,255,0.4)"};line-height:1">${U.homeTotal}</div>
              <div style="font-size:8px;color:rgba(255,255,255,0.3);margin:1px 0">VS</div>
              <div style="font-size:${fe?14:20}px;font-weight:900;color:${fe?"rgba(255,255,255,0.4)":"#ff6b6b"};line-height:1">${U.aiTotal}</div>
            </div>
            <div style="flex:1;display:flex;gap:2px;justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden">
              ${(U.aiPlayers||[]).map(Ae=>qi(Ae)).join("")}
            </div>
          </div>
          ${U.isGoal?`<div style="text-align:center;font-size:11px;color:#FFD700;font-weight:900;margin-top:3px">${U.homeScored,"⚽ BUT !"}</div>`:""}
        </div>`}return`<div style="font-size:11px;color:${U.type==="goal"?"#FFD700":"rgba(255,255,255,0.65)"};font-weight:${U.type==="goal"?700:400};padding:3px 2px">${U.text||""}</div>`}const ct=(()=>{var fe,Ae;if(R&&((fe=y.pendingAttack)!=null&&fe.players)){const ye=y.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${q} ATTAQUE — Défendez !</div>
          ${gt((ye.players||[]).map(rt=>({...rt,used:!1})),"#ff6b6b",ye.total)}
        </div>`}if(j&&((Ae=y.pendingAttack)!=null&&Ae.players)){const ye=y.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${gt((ye.players||[]).map(rt=>({...rt,used:!1})),"#00ff88",ye.total)}
        </div>`}const U=(y.log||[]).slice(-1)[0];return U?'<div style="padding:2px 4px">'+Ve(U)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),Ye=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${A}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${M} – ${S}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${q}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${ct}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(y.log||[]).length})
      </button>`;He(e),e.style.overflow="hidden",K?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ye}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${nt}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Ne}${qe}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${oe.map(U=>Be(U,!1)).join("")}
            ${ce?Be(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${Ye}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${At(_,y[p+"Formation"],Re,J,Xe(),at(),he)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${oe.map(U=>Ke(U,!1)).join("")}
            ${ce?Ke(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${j&&pe.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${j&&pe.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${j&&pe.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${j&&pe.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${pe.length}</div>
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
          <div>${Ne}${qe}</div>
        </div>
      </div>`;function Ge(){const U=e.querySelector(".match-screen");if(!U)return;const fe=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);U.style.height=fe+"px",U.style.minHeight=fe+"px",U.style.maxHeight=fe+"px",U.style.overflow="hidden";const Ae=e.querySelector("#mobile-action-bar"),ye=e.querySelector("#mobile-play-area");Ae&&ye&&(ye.style.paddingBottom=Ae.offsetHeight+"px")}if(Ge(),setTimeout(Ge,120),setTimeout(Ge,400),B||(B=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",Ge),window.visualViewport.addEventListener("scroll",Ge)),window.addEventListener("resize",Ge)),function(){const fe=e.querySelector(".terrain-wrapper svg");fe&&(fe.removeAttribute("width"),fe.removeAttribute("height"),fe.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",fe.setAttribute("viewBox","-26 -26 352 352"),fe.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(U=>{U.addEventListener("click",()=>{if(!j&&!R)return;const fe=U.dataset.cardId,Ae=U.dataset.role,ye=(_[Ae]||[]).find(vt=>vt.cardId===fe);if(!ye||ye.used)return;const rt=he.includes(fe);if(j&&!["MIL","ATT"].includes(Ae)&&!rt)return;Array.isArray(y["selected_"+p])||(y["selected_"+p]=[]);const pt=y["selected_"+p],ht=pt.findIndex(vt=>vt.cardId===fe);ht>-1?pt.splice(ht,1):pt.length<3&&pt.push({...ye,_role:Ae}),re()})}),e.querySelectorAll(".match-used-hit").forEach(U=>{U.addEventListener("click",()=>O(U.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(U=>{U.addEventListener("click",()=>O())}),(ot=e.querySelector("#pvp-sub-open"))==null||ot.addEventListener("click",()=>O()),e.querySelectorAll(".pvp-gc-mini").forEach(U=>{U.addEventListener("click",()=>C(U.dataset.gcId,U.dataset.gcType))}),(xi=e.querySelector("#pvp-boost-card"))==null||xi.addEventListener("click",()=>N()),(yi=e.querySelector("#pvp-action"))==null||yi.addEventListener("click",U=>{j?U.currentTarget.dataset.pass==="1"||!xe(p)?$e():we():R&&_e()}),(bi=e.querySelector("#pvp-quit"))==null||bi.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&z()}),(hi=e.querySelector("#pvp-view-opp"))==null||hi.addEventListener("click",()=>F()),(vi=e.querySelector("#pvp-toggle-history"))==null||vi.addEventListener("click",()=>H()),E&&(clearInterval(E),E=null),(j||R)&&!I){let U=30,fe=!1;const Ae=()=>document.getElementById("pvp-timer"),ye=()=>{Ae()&&(Ae().textContent=U+"s",Ae().style.color=fe?"#ff4444":"#fff")};ye(),E=setInterval(()=>{U--,U<0?fe?(clearInterval(E),E=null,j&&!xe(p)?$e():z()):(fe=!0,U=15,ye()):ye()},1e3)}}function ze(){He(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${y[x+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${It(y[x+"Team"],y[x+"Formation"],null,[],Xe(),at())}</div>
    </div>`,p==="p1"&&setTimeout(async()=>{await D({phase:"midfield"})},5e3)}let Y=!1;function Z(){if(Y)return;const _=y[p+"Team"].MIL||[],L=y[x+"Team"].MIL||[];function M(oe){return oe.reduce((ce,ue)=>ce+je(ue,"MIL"),0)}function S(oe){let ce=0;for(let ue=0;ue<oe.length-1;ue++){const te=dt(oe[ue],oe[ue+1]);te==="#00ff88"?ce+=2:te==="#FFD700"&&(ce+=1)}return ce}const A=M(_)+S(_),q=M(L)+S(L),j=A>=q;function R(oe,ce,ue){return`<div id="duel-row-${ue}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ce}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${oe.map((te,he)=>{const ke=he<oe.length-1?dt(te,oe[he+1]):null,Le=!ke||ke==="#ff3333"||ke==="#cc2222",Be=ke==="#00ff88"?"+2":ke==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ue}" data-idx="${he}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${Me({...te,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:y.homeStadiumDef||y.stadiumDef||null,role:"MIL",extraNote:te.boost||0})}
            </div>
            ${he<oe.length-1?`<div class="duel-link duel-link-${ue}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${Le?"rgba(255,255,255,0.12)":ke};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${Le?"none":`0 0 8px ${ke}`}">
              ${Be?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${ke}">${Be}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${ue}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${M(oe)} + ${S(oe)} liens = <b style="color:#fff">${M(oe)+S(oe)}</b>
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
      ${R(_,y[p+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${R(L,y[x+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const X=(oe,ce)=>e.querySelectorAll(oe).forEach((ue,te)=>{setTimeout(()=>{ue.style.opacity="1",ue.style.transform="translateY(0) scale(1)"},ce+te*90)});X(".duel-card-me",150),X(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((oe,ce)=>setTimeout(()=>{oe.style.opacity="1"},ce*70)),900),setTimeout(()=>{const oe=e.querySelector("#pvp-vs");oe&&(oe.style.opacity="1",oe.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ce=>ce.style.opacity="1")},1250);function J(oe,ce,ue){const te=document.getElementById(oe);if(!te)return;const he=performance.now(),ke=Le=>{const Be=Math.min(1,(Le-he)/ue);te.textContent=Math.round(ce*(1-Math.pow(1-Be,3))),Be<1?requestAnimationFrame(ke):te.textContent=ce};requestAnimationFrame(ke)}setTimeout(()=>{J("pvp-score-me",A,800),J("pvp-score-opp",q,800)},1500);const K=y.p1Team.MIL||[],ne=y.p2Team.MIL||[],ee=M(K)+S(K),pe=M(ne)+S(ne),me=ee>=pe?"p1":"p2";let ae=y.boostValue;ae==null&&(ae=tn(),y.boostValue=ae,y.boostOwner=me,y.boostUsed=!1),Y=!0,setTimeout(()=>{const oe=e.querySelector("#duel-row-"+(j?"me":"opp")),ce=e.querySelector("#duel-row-"+(j?"opp":"me")),ue=document.getElementById("pvp-score-me"),te=document.getElementById("pvp-score-opp"),he=j?ue:te,ke=j?te:ue;he&&(he.style.fontSize="80px",he.style.color=j?"#FFD700":"#ff6b6b",he.style.animation="duelPulse .5s ease"+(j?",duelGlow 1.5s ease infinite .5s":"")),ke&&(ke.style.opacity="0.25"),setTimeout(()=>{oe&&(oe.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",oe.style.zIndex="5"),setTimeout(()=>{const Le=document.getElementById("duel-shock");Le&&(Le.style.animation="shockwave .5s ease-out forwards"),ce&&(ce.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var De;const Le=document.getElementById("pvp-duel-finale");if(!Le)return;const Be=y.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ae+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ke=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;Le.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(j?"⚽ "+y[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+y[x+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Be+Ke,Le.style.transition="opacity .45s ease",Le.style.opacity="1",Le.style.pointerEvents="auto",(De=document.getElementById("pvp-start-match"))==null||De.addEventListener("click",async()=>{const Ne=me;await D({phase:Ne+"-attack",attacker:Ne,round:1,boostValue:ae,boostUsed:!1,boostOwner:Ne})})},600)},700)},2800)}function W(_,L,M,S,A){const q=document.createElement("div");q.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;overflow:hidden;cursor:pointer";const j=Array.from({length:10},(K,ne)=>`<div style="position:absolute;font-size:${16+Math.floor(Math.random()*24)}px;top:${5+Math.floor(Math.random()*65)}%;left:${3+Math.floor(Math.random()*94)}%;animation:fw${ne%2===0?"A":"B"} ${.7+Math.random()*.7}s ease ${Math.random()*.9}s both;opacity:0">${["✨","🌟","⭐","💥","🎇","🎆","🔥","🌈"][ne%8]}</div>`).join(""),R={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};q.innerHTML=`
      <style>
        @keyframes butPop{0%{transform:scale(0) rotate(-8deg);opacity:0}55%{transform:scale(1.25) rotate(2deg)}85%{transform:scale(0.92) rotate(-1deg)}100%{transform:scale(1);opacity:1}}
        @keyframes ballIn{0%{transform:translate(-70px,18px);opacity:0}65%{opacity:1}100%{transform:translate(26px,-8px);opacity:1}}
        @keyframes scoreIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fwA{0%{opacity:1;transform:scale(0)}100%{opacity:0;transform:scale(3.5)}}
        @keyframes fwB{0%{opacity:1;transform:scale(0) rotate(45deg)}100%{opacity:0;transform:scale(2.8) rotate(45deg)}}
      </style>
      <div style="position:absolute;inset:0;pointer-events:none">${j}</div>
      <div style="font-size:68px;font-weight:900;color:#FFD700;text-shadow:0 0 50px rgba(255,215,0,0.9);animation:butPop .55s cubic-bezier(.36,.07,.19,.97) both;letter-spacing:6px;position:relative;z-index:1">
        ${S?"BUT !":"BUT ADV !"}
      </div>
      <div style="display:flex;align-items:center;gap:10px;font-size:26px;position:relative;z-index:1">
        <span style="animation:ballIn .8s ease .35s both">⚽</span>
        <span style="font-size:36px">🥅</span>
      </div>
      <div style="font-size:38px;font-weight:900;color:#fff;animation:scoreIn .4s ease .75s both;letter-spacing:4px;position:relative;z-index:1">
        ${L} – ${M}
      </div>
      ${_!=null&&_.length?`<div style="display:flex;gap:10px;animation:scoreIn .4s ease 1s both;position:relative;z-index:1">
        ${_.map(K=>`<div style="text-align:center">
          <div style="width:50px;height:50px;border-radius:50%;background:${R[K.job]||"#555"};border:2px solid #FFD700;position:relative;overflow:hidden;margin:0 auto">
            ${K.portrait?`<img src="${K.portrait}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,0.7);margin-top:3px">${(K.name||"").slice(0,8)}</div>
        </div>`).join("")}
      </div>`:""}
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:8px;animation:scoreIn .3s ease 1.4s both;position:relative;z-index:1">Appuyer pour continuer</div>`,document.body.appendChild(q);let X=!1;const J=()=>{X||(X=!0,q.remove(),setTimeout(()=>A(),50))};q.addEventListener("click",J),setTimeout(J,3500)}function T(_,L,M){var ae,oe;const S=(y.gcDefs||[]).find(ce=>{var ue;return ce.name===_||((ue=ce.name)==null?void 0:ue.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),A={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",q={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",j=(S==null?void 0:S.name)||_,R=(S==null?void 0:S.effect)||((ae=Ce[_])==null?void 0:ae.desc)||"",X=S!=null&&S.image_url?`/icons/${S.image_url}`:null,J=((oe=Ce[_])==null?void 0:oe.icon)||"⚡",ne=L===p?"Vous":y[L+"Name"]||"Adversaire",ee=document.createElement("div");ee.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",ee.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${q}66}50%{box-shadow:0 0 60px ${q}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${q};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${ne} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${q};background:${A};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${j.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${j}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${X?`<img src="${X}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${J}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${R}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(ee);let pe=!1;const me=()=>{pe||(pe=!0,ee.remove(),setTimeout(()=>M&&M(),50))};ee.addEventListener("click",me),setTimeout(me,3e3)}function C(_,L){var ee,pe,me,ae;const S=(y["gcCardsFull_"+p]||[]).find(oe=>oe.id===_),A=S==null?void 0:S._gcDef,q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[A==null?void 0:A.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",j={purple:"#b06ce0",light_blue:"#00d4ef"}[A==null?void 0:A.color]||"#b06ce0",R=(A==null?void 0:A.name)||L,X=(A==null?void 0:A.effect)||((ee=Ce[L])==null?void 0:ee.desc)||"Carte spéciale.",J=A!=null&&A.image_url?`/icons/${A.image_url}`:null,K=((pe=Ce[L])==null?void 0:pe.icon)||"⚡",ne=document.createElement("div");ne.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",ne.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${j};background:${q};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${j}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${R.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${R}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${J?`<img src="${J}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${K}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${X}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(ne),(me=ne.querySelector("#pvp-gc-back"))==null||me.addEventListener("click",()=>ne.remove()),(ae=ne.querySelector("#pvp-gc-use"))==null||ae.addEventListener("click",()=>{ne.remove(),se(_,L)})}function N(){var S;const _=y[p+"Team"],L=Object.entries(_).flatMap(([A,q])=>(q||[]).filter(j=>!j.used).map(j=>({...j,_line:A})));if(!L.length)return;const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",M.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${y.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${L.map(A=>{const q={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[A._line]||"#555",j=je(A,A._line)+(A.boost||0);return`<div class="bp-item" data-cid="${A.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${q};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${A.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${j}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(M),(S=M.querySelector("#bp-close"))==null||S.addEventListener("click",()=>M.remove()),M.querySelectorAll(".bp-item").forEach(A=>{A.addEventListener("click",async()=>{const q=A.dataset.cid,j=L.find(X=>X.cardId===q);if(!j)return;const R=(_[j._line]||[]).find(X=>X.cardId===q);R&&(R.boost=(R.boost||0)+y.boostValue),M.remove(),await D({[p+"Team"]:_,boostUsed:!0})})})}function O(_=null){var pe,me;if(!(y.phase===p+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const M=y[p+"Team"],S=y["usedSubIds_"+p]||[],A=y.maxSubs||3;if(S.length>=A){g(`Maximum ${A} remplacements atteint`,"warning");return}const q=Object.entries(M).flatMap(([ae,oe])=>(oe||[]).filter(ce=>ce.used).map(ce=>({...ce,_line:ae}))),j=(y[p+"Subs"]||[]).filter(ae=>!S.includes(ae.cardId));if(!q.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!j.length){g("Aucun remplaçant disponible","warning");return}let R=Math.max(0,q.findIndex(ae=>ae.cardId===_));const X=((pe=q[R])==null?void 0:pe._line)||((me=q[R])==null?void 0:me.job);let J=Math.max(0,j.findIndex(ae=>ae.job===X)),K=!1;const ne=document.createElement("div");ne.id="pvp-sub-overlay",ne.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function ee(){var ke,Le,Be,Ke,De,Ne;const ae=q[R],oe=j[J],ce=Math.min(130,Math.round((window.innerWidth-90)/2)),ue=Math.round(ce*1.35),te=qe=>`background:rgba(255,255,255,0.12);border:none;color:${qe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${qe?"default":"pointer"};flex-shrink:0`;ne.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${S.length}/${A})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${te(J===0)}" ${J===0?"disabled":""}>▲</button>
          <div>${oe?Qe({...oe,used:!1,boost:0},ce,ue):"<div>—</div>"}</div>
          <button id="pin-down" style="${te(J>=j.length-1)}" ${J>=j.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${J+1}/${j.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${te(R===0)}" ${R===0?"disabled":""}>▲</button>
          <div>${ae?Qe({...ae,used:!1,boost:0},ce,ue):"<div>—</div>"}</div>
          <button id="pout-down" style="${te(R>=q.length-1)}" ${R>=q.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${R+1}/${q.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ke=ne.querySelector("#psub-close"))==null||ke.addEventListener("click",()=>ne.remove()),(Le=ne.querySelector("#pout-up"))==null||Le.addEventListener("click",()=>{R>0&&(R--,ee())}),(Be=ne.querySelector("#pout-down"))==null||Be.addEventListener("click",()=>{R<q.length-1&&(R++,ee())}),(Ke=ne.querySelector("#pin-up"))==null||Ke.addEventListener("click",()=>{J>0&&(J--,ee())}),(De=ne.querySelector("#pin-down"))==null||De.addEventListener("click",()=>{J<j.length-1&&(J++,ee())});const he=(qe,Oe,Re,nt)=>{const Ve=ne.querySelector("#"+qe);if(!Ve)return;let ct=0;Ve.addEventListener("touchstart",Ye=>{ct=Ye.touches[0].clientY},{passive:!0}),Ve.addEventListener("touchend",Ye=>{const Ge=Ye.changedTouches[0].clientY-ct;if(Math.abs(Ge)<30)return;const ot=Oe();Ge<0&&ot<nt-1?(Re(ot+1),ee()):Ge>0&&ot>0&&(Re(ot-1),ee())},{passive:!0})};he("pin-panel",()=>J,qe=>J=qe,j.length),he("pout-panel",()=>R,qe=>R=qe,q.length),(Ne=ne.querySelector("#psub-confirm"))==null||Ne.addEventListener("click",async qe=>{if(qe.preventDefault(),qe.stopPropagation(),K)return;K=!0;const Oe=q[R],Re=j[J];if(!Oe||!Re)return;const nt=Oe._line,Ve=(M[nt]||[]).findIndex(Ge=>Ge.cardId===Oe.cardId);if(Ve===-1){g("Erreur : joueur introuvable","error"),ne.remove();return}const ct={...Re,_line:nt,position:Oe.position,used:!1,boost:0};M[nt].splice(Ve,1,ct);const Ye=[...S,Re.cardId];ne.remove(),V(Oe,Re,async()=>{await D({[p+"Team"]:M,[x+"Team"]:y[x+"Team"],["usedSubIds_"+p]:Ye})})})}document.body.appendChild(ne),ee()}function V(_,L,M){const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const q=(X,J,K)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${J};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${K}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${S[X.job]||"#555"};border:3px solid ${J};position:relative;overflow:hidden;margin:0 auto">
        ${zt(X)?`<img src="${zt(X)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(X.name||"").slice(0,12)}</div>
    </div>`;A.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${q(L,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${q(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(A);let j=!1;const R=()=>{j||(j=!0,A.remove(),setTimeout(()=>M(),50))};A.addEventListener("click",R),setTimeout(R,2200)}function F(){var L;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${y[x+"Name"]}</div>
      <div style="width:min(90vw,420px)">${It(y[x+"Team"],y[x+"Formation"],null,[],Xe(),at())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(L=_.querySelector("#pvp-opp-close"))==null||L.addEventListener("click",()=>_.remove())}function H(){var M;const _=y.log||[],L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",L.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(S=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${S.type==="goal"?"#FFD700":S.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${S.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(L),(M=L.querySelector("#pvp-hist-close"))==null||M.addEventListener("click",()=>L.remove())}async function $e(){if(y.phase!==p+"-attack")return;const _=p==="p1"?"p2":"p1",L=(y.round||0)+1,M=[...y.log||[]];M.push({type:"info",text:`⏭️ ${y[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const S=Se(y),A=xe(_),q=S||!A?"finished":_+"-attack";await D({["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:q,attacker:_,round:L,log:M}),q==="finished"&&await Pe(y)}async function we(){const _=y[p+"Team"],L=!["GK","DEF","MIL","ATT"].some(q=>(y[x+"Team"][q]||[]).some(j=>!j.used)),M=(y["selected_"+p]||[]).map(q=>{const j=(_[q._role]||[]).find(me=>me.cardId===q.cardId)||q,R=L&&["GK","DEF"].includes(q._role),X=_[q._role]||[],J=X.findIndex(me=>me.cardId===q.cardId),K=bt(X.length),ne=J>=0?K[J]:j._col??1,ee=y.stadiumDef||y.homeStadiumDef||null,pe=j.stadiumBonus||ee&&(ee.club_id&&String(j.club_id)===String(ee.club_id)||ee.country_code&&j.country_code===ee.country_code)||!1;return{...j,_line:q._role,_col:ne,stadiumBonus:pe,...R?{note_a:Math.max(1,Number(j.note_a)||0)}:{}}});if(!M.length)return;const S=ci(M,y.modifiers[p]||{});ge(p,M.map(q=>q.cardId)),M.forEach(q=>{const j=(_[q._role]||[]).find(R=>R.cardId===q.cardId);j&&(j.used=!0)}),y["selected_"+p]=[],re();const A=[...y.log||[]];if(L){const q=(y[p+"Score"]||0)+1,j=M.map(ne=>histPlayer(ne));A.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:j,homeTotal:S.total,aiTotal:0});const R=(y.round||0)+1,X=p==="p1"?"p2":"p1",J={...y,[p+"Team"]:_,[p+"Score"]:q},K=Se(J);P.add(R),W(j,q,y[x+"Score"]||0,!0,async()=>{await D({[p+"Team"]:_,[p+"Score"]:q,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:K?"finished":X+"-attack",attacker:X,round:R,log:A}),K&&await Pe({...y,[p+"Score"]:q})});return}A.push({type:"pending",text:`⚔️ ${y[p+"Name"]} attaque (${S.total})`}),await D({[p+"Team"]:_,[x+"Team"]:y[x+"Team"],pendingAttack:{...S,players:M,side:p},["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},phase:x+"-defense",log:A})}async function _e(){const _=y[p+"Team"],L=(y["selected_"+p]||[]).map(ae=>{const oe=(_[ae._role]||[]).find(ke=>ke.cardId===ae.cardId)||ae,ce=_[ae._role]||[],ue=ce.findIndex(ke=>ke.cardId===ae.cardId),te=bt(ce.length),he=ue>=0?te[ue]:oe._col??1;return{...oe,_line:ae._role,_col:he}}),M=pi(L,y.modifiers[p]||{});ge(p,L.map(ae=>ae.cardId)),L.forEach(ae=>{const oe=(_[ae._role]||[]).find(ce=>ce.cardId===ae.cardId);oe&&(oe.used=!0)}),y["selected_"+p]=[],re();const S=ui(y.pendingAttack.total,M.total,y.modifiers[p]||{}),A=y.pendingAttack.side,q=S==="attack"||(S==null?void 0:S.goal),j=A==="p1"?"p2":"p1",R=(y.round||0)+1,X=(y.pendingAttack.players||[]).map(ae=>histPlayer(ae)),J=[...y.log||[]];J.push({type:"duel",isGoal:q,homeScored:q&&A===p,text:q?`⚽ BUT de ${y[A+"Name"]} ! (${y.pendingAttack.total} vs ${M.total})`:`✋ Attaque stoppée (${y.pendingAttack.total} vs ${M.total})`,homePlayers:X,aiPlayers:L.map(ae=>histPlayer(ae)),homeTotal:y.pendingAttack.total,aiTotal:M.total});const K=q?(y[A+"Score"]||0)+1:y[A+"Score"]||0,ne={...y,[p+"Team"]:_,[A+"Score"]:K},ee=Se(ne),pe=ee?"finished":j+"-attack",me=async()=>{await D({[p+"Team"]:_,[x+"Team"]:y[x+"Team"],[A+"Score"]:K,["selected_"+p]:[],modifiers:{...y.modifiers,[p]:{}},pendingAttack:null,phase:pe,attacker:j,round:R,log:J}),(pe==="finished"||ee)&&await Pe({...y,[A+"Score"]:K})};if(q){const ae=A===p,oe=ae?K:y[p+"Score"]||0,ce=ae?y[x+"Score"]||0:K;P.add(R),W(X,oe,ce,ae,me)}else await me()}function be(_){return["MIL","ATT"].some(L=>(_[L]||[]).some(M=>!M.used))}function Ee(_){return["GK","DEF","MIL","ATT"].some(L=>(_[L]||[]).some(M=>!M.used))}function Te(_){return Ee(_)&&!be(_)}function xe(_){const L=y[_+"Team"],M=y[(_==="p1"?"p2":"p1")+"Team"];return!!(be(L)||!Ee(M)&&Te(L))}function Se(_){const L=["MIL","ATT"].some(J=>(_.p1Team[J]||[]).some(K=>!K.used)),M=["MIL","ATT"].some(J=>(_.p2Team[J]||[]).some(K=>!K.used)),S=Ee(_.p1Team),A=Ee(_.p2Team);return!L&&!(!A&&S)&&(!M&&!(!S&&A))}function Fe(_){const L=_.p1Score||0,M=_.p2Score||0;return L===M?null:L>M?h.home_id:h.away_id}async function Pe(_){try{const L=Fe(_),M=L?h.home_id===L?h.away_id:h.home_id:null;await w.from("matches").update({status:"finished",winner_id:L,home_score:_.p1Score||0,away_score:_.p2Score||0}).eq("id",i),L&&M&&updateEvolutiveCards(L,M).catch(()=>{})}catch(L){console.error("[PvP] finishMatch:",L)}}function it(){var A;const _=y[p+"Score"],L=y[x+"Score"],M=_>L,S=_===L;He(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${M?"🏆":S?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${M?"Victoire !":S?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${L}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(A=document.getElementById("pvp-home"))==null||A.addEventListener("click",()=>{try{w.removeChannel(de)}catch{}Ue(e),m("home")})}re()}async function ni(e,t,i=!1){var s,d;const{state:n,navigate:a,toast:o}=t,r=i&&((d=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:d.rankedData)||null;await St(e,t,i?"ranked":"random",async({deckId:c,formation:l,starters:u,subsRaw:f,gcCardsEnriched:m,gcDefs:g,stadiumDef:p})=>{const x=m||[];He(e),await Do(e,t,c,l,u,f,x,g,p,i,r)})}async function qo(e,t,i){return Bo(e,t,i)}async function Do(e,t,i,n,a,o,r=[],s=[],d=null,c=!1,l=null){var B,P;const{state:u,navigate:f,toast:m}=t,g=(l==null?void 0:l.mmr)??((B=u.profile)==null?void 0:B.mmr)??1e3,p=c?si(g):null,x=c?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",b=c?(p==null?void 0:p.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${x};color:#fff;padding:32px;text-align:center;gap:20px">
      ${c?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${c?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${c?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(g)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${b};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`,(P=document.getElementById("cancel-mm"))==null||P.addEventListener("click",()=>{k==null||k.unsubscribe(),Ue(e),f("home")});const v=u.user.id,{data:h}=await w.from("matchmaking_queue").select("id").eq("user_id",v).single();h||await w.from("matchmaking_queue").insert({user_id:v,deck_id:i,formation:n,mmr:g,is_ranked:c});let k,y=!1;const I=async()=>{if(y)return;const{data:Q}=await w.from("matches").select("id, home_id, away_id").or(`home_id.eq.${v},away_id.eq.${v}`).eq("status","in_progress").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(Q){y=!0,k==null||k.unsubscribe(),await w.from("matchmaking_queue").delete().eq("user_id",v);const ie=Q.home_id===v;await Ct(e,t,Q.id,ie,{myGC:r,gcDefs:s,stadiumDef:d,isRanked:c,rankedData:l,onMatchEnd:c?Fo:null})}};if(await I(),y)return;k=w.channel(`mm_${v}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"matches",filter:`home_id=eq.${v}`},I).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`away_id=eq.${v}`},I).subscribe();const E=setInterval(I,3e3);setTimeout(()=>{clearInterval(E),k==null||k.unsubscribe()},12e4)}async function Fo(e,t){const{state:i,toast:n}=t,{winnerId:a,homeId:o,awayId:r,homeScore:s,awayScore:d,matchId:c}=e,l=i.user.id,u=o===l,f=a===l,{data:m}=await w.from("users").select("mmr, mmr_rd, mmr_v").eq("id",l).single(),{data:g}=await w.from("users").select("mmr, mmr_rd, mmr_v").eq("id",u?r:o).single();if(m&&g){const p=fn(m.mmr,m.mmr_rd,m.mmr_v,g.mmr,g.mmr_rd,f?1:0);await w.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:f?w.sql`mmr_wins + 1`:void 0,mmr_losses:f?void 0:w.sql`mmr_losses + 1`}).eq("id",l),n(f?`+MMR ↑ ${Math.round(p.mmr-m.mmr)}`:`-MMR ↓ ${Math.round(m.mmr-p.mmr)}`,f?"success":"error",4e3)}}const Po=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:ni,resumePvpMatch:qo},Symbol.toStringTag,{value:"Module"}));async function Go(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.friendId||null,s=o.friendName||"Ami";await St(e,t,"friend",async({deckId:d,formation:c,starters:l,subsRaw:u,gcCardsEnriched:f,gcDefs:m,stadiumDef:g})=>{const p=f||[];He(e),r?await Ro(e,t,d,p,m,g,r,s):await No(e,t,d,p,m,g)})}async function Ro(e,t,i,n,a,o,r,s){var p;const{state:d,navigate:c,toast:l}=t,u=d.user.id,{data:f}=await w.from("friend_match_invites").insert({inviter_id:u,invitee_id:r,status:"pending"}).select("id").single();e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`,(p=document.getElementById("cancel-friend"))==null||p.addEventListener("click",async()=>{f&&await w.from("friend_match_invites").update({status:"declined"}).eq("id",f.id),Ue(e),c("home")});let m=!1;const g=w.channel(`friend_${u}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"matches",filter:`home_id=eq.${u}`},async({new:x})=>{m||(m=!0,g.unsubscribe(),f&&await w.from("friend_match_invites").update({status:"accepted"}).eq("id",f.id),await Ct(e,t,x.id,!0,{myGC:n,gcDefs:a,stadiumDef:o}))}).subscribe();setTimeout(()=>{m||(g.unsubscribe(),l("Invitation expirée","info"),c("home"))},12e4)}async function No(e,t,i,n,a,o){const{state:r,navigate:s,toast:d}=t,c=r.user.id,{data:l}=await w.from("matches").select("id, home_id, away_id, status").eq("away_id",c).eq("status","in_progress").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!l){d("Aucun match en attente","error"),s("home");return}await Ct(e,t,l.id,!1,{myGC:n,gcDefs:a,stadiumDef:o})}const xt="#1A6B3C",Je="#D4A017";async function Oo(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await tt(e,t,i);return}await lt(e,t)}async function lt(e,t,i="waiting"){var b;const{state:n}=t,a=n.profile.id,{data:o}=await w.from("mini_league_members").select("league_id").eq("user_id",a),r=(o||[]).map(v=>v.league_id),{data:s,error:d}=await w.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),c=d?(await w.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:s||[],u=(r.length?await w.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],f=u.filter(v=>v.status==="waiting"&&!v.is_archived),m=u.filter(v=>v.status==="active"&&!v.is_archived),g=u.filter(v=>v.is_archived||v.status==="finished"),p=c.filter(v=>!r.includes(v.id)),x=[{key:"waiting",label:"🟡 En attente",count:f.length+p.length},{key:"active",label:"🟢 En cours",count:m.length},{key:"archived",label:"📁 Archivées",count:g.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${x.map(v=>`<button class="ml-tab" data-tab="${v.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===v.key?xt:"transparent"};background:none;font-size:12px;font-weight:${i===v.key?"900":"600"};color:${i===v.key?xt:"#888"};cursor:pointer">${v.label}${v.count?` (${v.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Ho(f,p,a):i==="active"?Uo(m,a):Ko(g,a)}
    </div>
  </div>`,(b=document.getElementById("ml-create-btn"))==null||b.addEventListener("click",()=>Vo(e,t)),e.querySelectorAll(".ml-tab").forEach(v=>v.addEventListener("click",()=>lt(e,t,v.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(v=>v.addEventListener("click",()=>tt(e,t,v.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(v=>v.addEventListener("click",h=>{h.stopPropagation(),rn(e,t,v.dataset.join,v.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(v=>v.addEventListener("click",h=>{h.stopPropagation(),oi(e,t,v.dataset.delete,v.dataset.name,i)}))}function Ht(e,t,i=!1){var r,s;const n=e.creator_id===t,a=e.pot||0,o=((s=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:s.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function Ho(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(a=>Ht(a,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(a=>Ht(a,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Uo(e,t){return e.length?e.map(i=>Ht(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Ko(e,t){return e.length?e.map(i=>Ht(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Vo(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,p,x,b;const{toast:n}=t,a=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,s=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",d=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",c=((b=(x=document.getElementById("ml-pwd"))==null?void 0:x.value)==null?void 0:b.trim())||null;if(!a){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!c){n("Mot de passe requis","error");return}const{data:l,error:u}=await w.from("mini_leagues").insert({name:a,creator_id:t.state.profile.id,type:s,password:c,mode:d,max_players:o,entry_fee:r}).select().single();if(u){n("Erreur : "+u.message,"error");return}const{data:f}=await w.from("users").select("credits").eq("id",t.state.profile.id).single();if(((f==null?void 0:f.credits)||0)<r){await w.from("mini_leagues").delete().eq("id",l.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await w.from("users").update({credits:f.credits-r}).eq("id",t.state.profile.id),await w.from("mini_leagues").update({pot:r}).eq("id",l.id),await w.from("mini_league_members").insert({league_id:l.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=f.credits-r);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),tt(e,t,l.id)})}function Yo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=a=>{t.remove(),e(a)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",a=>{a.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",a=>{a.target===t&&n(null)})})}async function rn(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id,{data:s}=await w.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!s){a("Mini League introuvable","error");return}if(s.status!=="waiting"){a("Cette Mini League a déjà démarré","warning");return}const{count:d}=await w.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(d>=s.max_players){a("La Mini League est complète","warning");return}if(n==="private"){const p=await Yo();if(p===null)return;if(s.password!==p){a("Mot de passe incorrect","error");return}}const c=s.entry_fee||100,{data:l}=await w.from("users").select("credits").eq("id",r).single();if(((l==null?void 0:l.credits)||0)<c){a(`Crédits insuffisants — il te faut ${c.toLocaleString("fr")} cr. (solde : ${((l==null?void 0:l.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:u}=await w.from("mini_league_members").insert({league_id:i,user_id:r});if(u){a("Erreur inscription : "+u.message,"error");return}const{error:f}=await w.from("users").update({credits:l.credits-c}).eq("id",r),{error:m}=await w.from("mini_leagues").update({pot:(s.pot||0)+c}).eq("id",i);(f||m)&&console.error("Erreur post-inscription:",f,m),o.profile&&(o.profile.credits=l.credits-c);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`✅ Inscrit ! −${c.toLocaleString("fr")} cr. · Pot : ${((s.pot||0)+c).toLocaleString("fr")} cr.`,"success"),tt(e,t,i)}async function Wo(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:s}=await w.from("mini_leagues").select("pot,status").eq("id",i).single();if(!s||s.status!=="waiting"){a("Impossible — la league a déjà démarré","error");return}const{data:d}=await w.from("users").select("credits").eq("id",r).single();await w.from("mini_leagues").update({pot:Math.max(0,(s.pot||0)-n)}).eq("id",i),await w.from("users").update({credits:((d==null?void 0:d.credits)||0)+n}).eq("id",r),await w.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),o.profile&&(o.profile.credits=((d==null?void 0:d.credits)||0)+n);const c=document.getElementById("nav-credits");c&&(c.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),lt(e,t,"waiting")}async function oi(e,t,i,n,a){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await w.from("mini_league_matches").delete().eq("league_id",i),await w.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await w.from("mini_leagues").delete().eq("id",i);if(r){o("Erreur suppression ("+r.message+")","error");return}o("Mini League supprimée avec succès","success"),lt(e,t,a)}async function Xo(e,t,i){await w.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),lt(e,t,"archived")}async function tt(e,t,i){var k,y,I,E,B,P,Q,ie,de;const{state:n,toast:a}=t,o=n.profile.id,[{data:r},{data:s},{data:d}]=await Promise.all([w.from("mini_leagues").select("*").eq("id",i).single(),w.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),w.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){a("Introuvable","error"),await lt(e,t);return}const c=(s||[]).some(D=>D.user_id===o),l=r.creator_id===o,u=(s||[]).map(D=>D.user).filter(Boolean),f=sn(u,d||[]),m=(d||[]).filter(D=>D.matchday===r.current_day),g=r.pot||0,p=r.entry_fee||100,x=m.length>0&&m.every(D=>D.status==="finished"||D.status==="bye"),b=r.current_day>=r.total_days,v=(s||[]).find(D=>D.user_id===o);e.innerHTML=`
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
        ${g>0?`<div style="font-size:12px;font-weight:900;color:${Je};margin-top:4px">🏆 ${g.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${u.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*u.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*u.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*u.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*u.length*.1).toLocaleString("fr")})</div>
        ${u.map(D=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${D.club_color2||xt};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${D.club_color1||"#fff"}">${(D.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${D.club_name||D.pseudo}</div><div style="font-size:11px;color:#999">@${D.pseudo}</div></div>
            ${D.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${l&&u.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${u.length})</button>`:""}
        ${l?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${c?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${c&&!l?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${m.map(D=>Di(D,u,o,c)).join("")}
        ${l&&x&&!b?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${l&&x&&b?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&f.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${g>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${Je}">💰</th>`:""}
          </tr></thead>
          <tbody>${f.map((D,z)=>{const $=g>0&&r.status==="finished"?z===0?Math.floor(g*.7):z===1?Math.floor(g*.2):z===2?Math.floor(g*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${D.userId===o?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${z===0?Je:z<3?xt:"#555"}">${["🥇","🥈","🥉"][z]||z+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${D.clubName}</div><div style="font-size:10px;color:#999">@${D.pseudo}</div></td>
              <td style="text-align:center">${D.played}</td><td style="text-align:center">${D.won}-${D.drawn}-${D.lost}</td>
              <td style="text-align:center;color:${D.goalDiff>=0?xt:"#cc2222"}">${D.goalDiff>=0?"+":""}${D.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${D.points}</td>
              ${g>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${Je}">${$?$.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(D,z)=>z+1).reverse().map(D=>{const z=(d||[]).filter($=>$.matchday===D);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${D}</div>${z.map($=>Di($,u,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${l&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const h=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((k=document.getElementById("ml-back"))==null||k.addEventListener("click",()=>lt(e,t,h)),(y=document.getElementById("ml-start-btn"))==null||y.addEventListener("click",()=>Jo(e,t,r,u)),(I=document.getElementById("ml-next-day"))==null||I.addEventListener("click",()=>Qo(e,t,i)),(E=document.getElementById("ml-finish-btn"))==null||E.addEventListener("click",()=>an(e,t,i,g,f,u)),(B=document.getElementById("ml-join-now"))==null||B.addEventListener("click",()=>rn(e,t,i,r.type)),(P=document.getElementById("ml-leave-btn"))==null||P.addEventListener("click",()=>Wo(e,t,i,p)),(Q=document.getElementById("ml-delete-btn"))==null||Q.addEventListener("click",()=>oi(e,t,i,r.name,"waiting")),(ie=document.getElementById("ml-delete-now"))==null||ie.addEventListener("click",()=>oi(e,t,i,r.name,h)),(de=document.getElementById("ml-archive-btn"))==null||de.addEventListener("click",()=>Xo(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(D=>{D.addEventListener("click",()=>{const z=m.find($=>$.id===D.dataset.playMatch);z&&t.navigate("match-mini-league",{mlMatchId:z.id,leagueId:i})})}),r.status==="finished"&&v){const D=f.findIndex(z=>z.userId===o);D>=0&&D<3&&v.prize_amount>0&&setTimeout(()=>Zo(e,t,r,v,D),400)}}function Di(e,t,i,n,a=!1){const o=u=>t.find(f=>f.id===u);if(e.is_bye){const u=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"?"} exempté(e)</div>`}const r=o(e.home_id),s=o(e.away_id),d=e.home_id===i||e.away_id===i,c=d&&e.status==="pending"&&n&&!a,l=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${d?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${d?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?xt:"#999"}">${l}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${c?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Jo(e,t,i,n){const{toast:a,state:o}=t,r=er(n.map(c=>c.id),i.mode),s=[];r.forEach((c,l)=>c.forEach(u=>s.push({league_id:i.id,matchday:l+1,home_id:u.home||u.bye,away_id:u.away||null,is_bye:!!u.bye,status:u.bye?"bye":"pending"})));const{error:d}=await w.from("mini_league_matches").insert(s);if(d){a("Erreur calendrier : "+d.message,"error");return}await w.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),a(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),tt(e,t,i.id)}async function Qo(e,t,i){const{data:n}=await w.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),a=(n.current_day||0)+1;if(a>(n.total_days||0)){await an(e,t,i,n.pot||0,null,null);return}await w.from("mini_leagues").update({current_day:a}).eq("id",i),t.toast(`Journée ${a} commencée !`,"success"),tt(e,t,i)}async function an(e,t,i,n,a,o){const{toast:r,state:s}=t;let d=a,c=o;if(!d){const{data:u}=await w.from("mini_league_matches").select("*").eq("league_id",i),{data:f}=await w.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);c=(f||[]).map(m=>m.user).filter(Boolean),d=sn(c,u||[])}const l=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(d.slice(0,3).map((u,f)=>l[f]?w.from("mini_league_members").update({prize_amount:l[f],prize_claimed:!1}).eq("league_id",i).eq("user_id",u.userId):Promise.resolve())),await w.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),tt(e,t,i)}async function Zo(e,t,i,n,a){var f,m;const{state:o,toast:r}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],d=["🥇","🥈","🥉"][a],c=n.prize_amount||s[a]||0,l=n.prize_claimed,u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",u.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${d}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${a===0?"Champion !":a===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${Je};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${l?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${Je}">${c.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${a===0?"70%":a===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${l?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${Je};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${c.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(u),(f=u.querySelector("#prize-close"))==null||f.addEventListener("click",()=>u.remove()),u.addEventListener("click",g=>{g.target===u&&u.remove()}),(m=u.querySelector("#claim-prize-btn"))==null||m.addEventListener("click",async()=>{const{data:g}=await w.from("users").select("credits").eq("id",o.profile.id).single();await w.from("users").update({credits:((g==null?void 0:g.credits)||0)+c}).eq("id",o.profile.id),await w.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",o.profile.id),o.profile&&(o.profile.credits=((g==null?void 0:g.credits)||0)+c);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),r(`💰 +${c.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),u.remove(),tt(e,t,i.id)})}function er(e,t){const n=e.length%2===0?[...e]:[...e,null],a=n.length;let o=n.slice(1);const r=[];for(let s=0;s<a-1;s++){const d=[],c=[n[0],...o];for(let l=0;l<a/2;l++){const u=c[l],f=c[a-1-l];u===null?d.push({bye:f}):f===null?d.push({bye:u}):d.push({home:u,away:f})}r.push(d),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(s=>s.map(d=>d.bye?d:{home:d.away,away:d.home}))]:r}function sn(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const a=i[n.home_id],o=i[n.away_id];!a||!o||(a.played++,o.played++,a.goalsFor+=n.home_score,a.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(a.won++,a.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,a.lost++):(a.drawn++,a.points++,o.drawn++,o.points++),a.goalDiff=a.goalsFor-a.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,a)=>a.points-n.points||a.goalDiff-n.goalDiff||a.goalsFor-n.goalsFor)}async function Fi(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.leagueId||null,s=o.mlMatchId||null;if(s&&r){await ir(e,t,s,r);return}if(r){await gi(e,t,r);return}await tr(e,t)}async function tr(e,t){const{state:i,navigate:n,toast:a}=t;await St(e,t,"mini_league",async({deckId:o,gcCardsEnriched:r,gcDefs:s,stadiumDef:d})=>{He(e);const c=r||[],l=i.user.id,{data:u}=await w.from("mini_leagues").insert({creator_id:l,deck_id:o,status:"waiting",gc_cards:c.map(f=>f.id)}).select("id").single();if(!u){a("Erreur création ligue","error"),n("home");return}await gi(e,t,u.id)})}async function gi(e,t,i){var u,f,m;const{state:n,navigate:a,toast:o}=t,r=n.user.id,{data:s}=await w.from("mini_leagues").select("*, creator:users!creator_id(pseudo), participants:mini_league_participants(user_id, deck_id, users(pseudo))").eq("id",i).single();if(!s){o("Ligue introuvable","error"),a("home");return}const d=s.creator_id===r,c=s.participants||[],l=c.length>=4;e.innerHTML=`
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
        ${d&&l?`
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
    </div>`,(u=document.getElementById("start-league"))==null||u.addEventListener("click",async()=>{await w.from("mini_leagues").update({status:"in_progress"}).eq("id",i),await dn(e,t,i)}),(f=document.getElementById("join-league"))==null||f.addEventListener("click",async()=>{await St(e,t,"mini_league",async({deckId:g,gcCardsEnriched:p})=>{const x=p||[];await w.from("mini_league_participants").insert({league_id:i,user_id:r,deck_id:g,gc_cards:x.map(b=>b.id)}),o("Rejoint !","success"),await gi(e,t,i)})}),(m=document.getElementById("back-home"))==null||m.addEventListener("click",()=>a("home"))}async function dn(e,t,i){const{navigate:n,toast:a}=t,{data:o}=await w.from("mini_league_matches").select("id, match_id, home_id, away_id, status").eq("league_id",i).eq("status","pending").order("round",{ascending:!0}).limit(1),r=o==null?void 0:o[0];if(!r){await nr(e,t,i);return}const s=t.state.user.id,d=r.home_id===s;await Ct(e,t,r.match_id,d,{mlLeagueId:i,mlMatchId:r.id,onMatchEnd:async c=>{await w.from("mini_league_matches").update({status:"finished",home_score:c.homeScore,away_score:c.awayScore,winner_id:c.winnerId}).eq("id",r.id),await dn(e,t,i)}})}async function ir(e,t,i,n){const{data:a}=await w.from("mini_league_matches").select("match_id, home_id, away_id").eq("id",i).single();if(!a){t.toast("Match introuvable","error"),t.navigate("home");return}const o=a.home_id===t.state.user.id;await Ct(e,t,a.match_id,o,{mlLeagueId:n,mlMatchId:i,onMatchEnd:async r=>{await w.from("mini_league_matches").update({status:"finished",home_score:r.homeScore,away_score:r.awayScore,winner_id:r.winnerId}).eq("id",i),t.navigate("home")}})}async function nr(e,t,i){var l;const{navigate:n}=t,{data:a}=await w.from("mini_league_matches").select("home_id, away_id, home_score, away_score, winner_id, home:users!home_id(pseudo), away:users!away_id(pseudo)").eq("league_id",i),o={},r={};(a||[]).forEach(u=>{[u.home_id,u.away_id].forEach(f=>{o[f]||(o[f]=0),r[f]||(r[f]=0)}),u.winner_id?o[u.winner_id]=(o[u.winner_id]||0)+3:(o[u.home_id]=(o[u.home_id]||0)+1,o[u.away_id]=(o[u.away_id]||0)+1),r[u.home_id]=(r[u.home_id]||0)+(u.home_score||0),r[u.away_id]=(r[u.away_id]||0)+(u.away_score||0)});const s={};(a||[]).forEach(u=>{var f,m;s[u.home_id]=(f=u.home)==null?void 0:f.pseudo,s[u.away_id]=(m=u.away)==null?void 0:m.pseudo});const d=Object.keys(o).sort((u,f)=>o[f]-o[u]||r[f]-r[u]),c=["🥇","🥈","🥉","4️⃣"];e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:36px">🏆</div>
        <h2>Résultats de la Mini Ligue</h2>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;overflow:hidden">
        ${d.map((u,f)=>`
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
    </div>`,(l=document.getElementById("back-home"))==null||l.addEventListener("click",()=>n("home"))}const or="/",rr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function ar(e,t,i){let n=0;const a=document.createElement("div");a.id="tutorial-overlay",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var l,u,f;const s=t[n],d=n===t.length-1,c=Math.round((n+1)/t.length*100);a.innerHTML=`
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
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${or}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${s.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${s.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${n>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${d?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${s.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${d?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,a.querySelectorAll("ul,ol").forEach(m=>{m.style.paddingLeft="20px",m.style.marginTop="6px",m.style.marginBottom="6px"}),a.querySelectorAll("li").forEach(m=>{m.style.marginBottom="4px"}),a.querySelectorAll("p").forEach(m=>{m.style.marginBottom="8px"}),(l=a.querySelector("#tuto-prev"))==null||l.addEventListener("click",()=>{n--,o()}),(u=a.querySelector("#tuto-next"))==null||u.addEventListener("click",()=>{d?r():(n++,o())}),(f=a.querySelector("#tuto-skip"))==null||f.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{a.remove(),e!=null&&e.id&&await w.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(a),o()}async function sr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:a,error:o}=await w.rpc("get_tutorial_steps");if(!o&&(a==null?void 0:a.length)>0)n=a,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:d}=await w.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!d&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${d==null?void 0:d.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):rr;ar(e,r,()=>t("boosters"))}const Dt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function ut(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function dr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await mi(e,t)}async function mi(e,t){const{state:i,toast:n}=t,{data:a}=await w.from("market_listings").select(`id, price, status, listed_at, seller_id,
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
  </div>`;let d="buy";const c=()=>{var p,x,b,v,h,k,y;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((x=document.getElementById("flt-club"))==null?void 0:x.value)||"").toLowerCase().trim(),country:(((b=document.getElementById("flt-country"))==null?void 0:b.value)||"").toLowerCase().trim(),job:((v=document.getElementById("flt-job"))==null?void 0:v.value)||"",rarity:((h=document.getElementById("flt-rarity"))==null?void 0:h.value)||"",note1:parseInt((k=document.getElementById("flt-note1"))==null?void 0:k.value)||0,note2:parseInt((y=document.getElementById("flt-note2"))==null?void 0:y.value)||0}};function l(p){const x=c();return p.filter(b=>{var P,Q,ie;const v=(P=b.card)==null?void 0:P.player;if(!v)return!1;const h=`${v.firstname} ${v.surname_real}`.toLowerCase(),k=(((Q=v.clubs)==null?void 0:Q.encoded_name)||"").toLowerCase(),y=(v.country_code||"").toLowerCase(),I=((ie=b.card)==null?void 0:ie.evolution_bonus)||0,E=ut(v,v.job,I),B=v.job2?ut(v,v.job2,I):0;return!(x.name&&!h.includes(x.name)||x.club&&!k.includes(x.club)||x.country&&!y.includes(x.country)||x.job&&v.job!==x.job||x.rarity&&v.rarity!==x.rarity||x.note1&&E<x.note1||x.note2&&B<x.note2)})}function u(p){var B,P,Q,ie;const x=(B=p.card)==null?void 0:B.player;if(!x)return"";const b=((P=p.card)==null?void 0:P.evolution_bonus)||0,v=ut(x,x.job,b),h=x.job2?ut(x,x.job2,b):0,k=(i.profile.credits||0)>=p.price,y=x.country_code?`https://flagsapi.com/${x.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,I=Dt[x.job]||"#bbb",E=x.job2?Dt[x.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${y?`<img src="${y}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(Q=x.clubs)!=null&&Q.logo_url?`<img src="${x.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${I};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${I};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${x.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((ie=p.seller)==null?void 0:ie.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${k?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${k?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function f(p){var B,P,Q,ie;const x=(B=p.card)==null?void 0:B.player;if(!x)return"";const b=((P=p.card)==null?void 0:P.evolution_bonus)||0,v=ut(x,x.job,b),h=x.job2?ut(x,x.job2,b):0,k=p.status==="sold",y=x.country_code?`https://flagsapi.com/${x.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,I=Dt[x.job]||"#bbb",E=x.job2?Dt[x.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${k?"opacity:0.7":""}">
      ${y?`<img src="${y}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(Q=x.clubs)!=null&&Q.logo_url?`<img src="${x.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${I};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${I};font-family:Arial Black,Arial">${v}</span>
        </div>
        ${h?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${E};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${E};font-family:Arial Black,Arial">${h}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${x.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${x.surname_real}</div>
        <div style="font-size:10px;color:${k?"#22c55e":"#999"};margin-top:1px">
          ${k?`✅ Vendu à ${((ie=p.buyer)==null?void 0:ie.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${k?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function m(){const p=document.getElementById("mkt-content"),x=document.getElementById("mkt-filters");if(p){if(x.style.display=d==="buy"?"flex":"none",d==="buy"){const b=l(r);p.innerHTML=b.length?b.map(u).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const b=s.filter(h=>h.status==="active").sort((h,k)=>new Date(k.listed_at)-new Date(h.listed_at)),v=s.filter(h=>h.status==="sold").sort((h,k)=>new Date(k.sold_at||k.listed_at)-new Date(h.sold_at||h.listed_at));p.innerHTML=(b.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${b.length})</div>`+b.map(f).join(""):"")+(v.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${v.length})</div>`+v.map(f).join(""):"")+(!b.length&&!v.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(b=>b.addEventListener("click",()=>lr(b.dataset.buy,r,e,t))),p.querySelectorAll("[data-cancel]").forEach(b=>b.addEventListener("click",()=>pr(b.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{d=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(x=>{const b=x===p;x.style.background=b?"var(--green)":"#fff",x.style.color=b?"#fff":"var(--gray-600)",x.style.borderColor=b?"var(--green)":"var(--gray-200)"}),m()})});let g;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var x;(x=document.getElementById(p))==null||x.addEventListener("input",()=>{clearTimeout(g),g=setTimeout(m,250)})}),m()}async function lr(e,t,i,n){const{state:a,toast:o,refreshProfile:r}=n,s=t.find(l=>l.id===e);if(!s)return;const d=s.price;if((a.profile.credits||0)<d){o("Crédits insuffisants","error");return}cr(s,async()=>{const{error:l}=await w.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:a.profile.id});if(l){o("Erreur achat : "+l.message,"error");return}await r();const u=document.getElementById("nav-credits");u&&(u.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await mi(i,n)})}function cr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(a);const o=s=>{a.remove(),s&&t()};a.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),a.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),a.addEventListener("click",s=>{s.target===a&&o(!1)})}async function pr(e,t,i){const{toast:n}=i,{data:a}=await w.from("market_listings").select("card_id").eq("id",e).single();if(await w.from("market_listings").update({status:"cancelled"}).eq("id",e),a!=null&&a.card_id){const{count:o}=await w.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",a.card_id).eq("status","active");o||await w.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",a.card_id)}n("Annonce retirée","success"),mi(t,i)}async function ur(e,t){var l,u,f,m;const{state:i,navigate:n}=t,a=((u=(l=t==null?void 0:t.state)==null?void 0:l.params)==null?void 0:u.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:o},{data:r}]=await Promise.all([w.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),w.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let s=a;function d(){var p,x;const g=document.getElementById("rankings-list");if(g){if(s==="global"){const b=o||[];g.innerHTML=b.length>0?b.map((v,h)=>`
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
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const b=r||[];g.innerHTML=b.length>0?b.map((v,h)=>{const k=si(v.mmr??1e3),y=(v.ranked_wins||0)+(v.ranked_losses||0)+(v.ranked_draws||0),I=y>0?Math.round((v.ranked_wins||0)/y*100):0,E=v.id===i.profile.id,B=(v.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${E?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${h<3?["#D4A017","#a0a0a0","#cd7f32"][h]:"rgba(255,255,255,0.08)"};color:${h<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${h<3?"16":"13"}px">${h<3?["🥇","🥈","🥉"][h]:h+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${k.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${v.club_name} · ${k.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${B?"❓":k.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${k.color}">${B?"Placement":k.label}</div>
              ${B?"":`<div style="font-size:10px;color:var(--gray-600)">${I}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(p=document.getElementById("tab-global"))!=null&&p.style&&(document.getElementById("tab-global").style.cssText=c(s==="global")),(x=document.getElementById("tab-ranked"))!=null&&x.style&&(document.getElementById("tab-ranked").style.cssText=c(s==="ranked"))}}const c=g=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${g?"900":"400"};background:${g?"var(--green)":"rgba(255,255,255,0.06)"};color:${g?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
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
  </div>`,d(),(f=document.getElementById("tab-global"))==null||f.addEventListener("click",()=>{s="global",d()}),(m=document.getElementById("tab-ranked"))==null||m.addEventListener("click",()=>{s="ranked",d()})}async function fr(e,t){var I,E,B,P;const{state:i,navigate:n,toast:a}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:s}]=await Promise.all([w.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),w.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){a("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(I=document.getElementById("ranked-back"))==null||I.addEventListener("click",()=>n("home"));return}const d=s.mmr??1e3,c=s.mmr_deviation??350,l=s.mmr_volatility??.06,u=s.placement_matches??0,f=u<10,m=Math.max(0,10-u),g=si(d),p=gn(d),x=Vt.findIndex(Q=>Q.id===g.id),b=Vt[x+1]||null,v={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},h=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),k=h>0?Math.round((s.ranked_wins||0)/h*100):0,y=Vt.map(Q=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${g.id===Q.id?1:.35};
      transform:${g.id===Q.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${g.id===Q.id?"28px":"20px"}">${Q.emoji}</div>
      <div style="font-size:9px;color:${Q.color};font-weight:${g.id===Q.id?"900":"400"};letter-spacing:0.5px">${Q.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${v[g.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
        ${b?`<span>${b.emoji} ${b.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${g.color},${g.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${b?b.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${y}
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${k}%</div>
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
  </div>`,(E=document.getElementById("ranked-back"))==null||E.addEventListener("click",()=>n("home")),(B=document.getElementById("ranked-leaderboard-btn"))==null||B.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(P=document.getElementById("ranked-play-btn"))==null||P.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:d,rd:c,sigma:l,isPlacement:f}})})}async function gr(e,{state:t,navigate:i,toast:n}){const a=t.profile;if(!a)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await w.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${a.id},away_id.eq.${a.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(l=>l.status==="finished"),d=(o||[]).filter(l=>l.status==="in_progress");function c(l){const u=l.home_id===a.id;u?l.home_score:l.away_score,u?l.away_score:l.home_score;const f=l.winner_id===a.id,m=l.home_score===l.away_score&&l.status==="finished",g=l.status!=="finished"?"…":m?"N":f?"V":"D",p=l.status!=="finished"||m?"#888":f?"#1A6B3C":"#c0392b";let x=r[l.mode]||l.mode;l.away_id===null&&!x.startsWith("IA")&&(x="IA");const v=l.home_id===a.id?l.away:l.home;let h;l.away_id===null?h=x:v?h=`${v.club_name||v.pseudo} (${v.pseudo})`:h="Adversaire";let k="";l.status==="in_progress"&&Date.now()-new Date(l.created_at).getTime()>3600*1e3&&(k=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const y=new Date(l.created_at),I=y.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+y.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),E=l.status==="finished"?`${l.home_score} - ${l.away_score}`:`${l.home_score||0} - ${l.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${h}${k}</div>
        <div style="font-size:11px;color:var(--gray-600)">${x} · ${I}${l.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${E}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(o||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${d.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${d.map(c).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(c).join("")}
        </div>`:""}

      ${(o||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}mn(yn);const ve={user:null,profile:null,page:"home",params:{}};function ft(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function mr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function ri(){document.getElementById("modal-overlay").classList.add("hidden")}async function _t(){if(!ve.user)return;const{data:e}=await w.from("users").select("*").eq("id",ve.user.id).single();e&&(ve.profile=e)}function $t(e,t={}){ve.page=e,ve.params=t,ln()}async function ln(){var n,a,o,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ve.page)});const t=document.getElementById("nav-credits");t&&ve.profile&&(t.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const i={state:ve,navigate:$t,toast:ft,openModal:mr,closeModal:ri,refreshProfile:_t};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await Ii(e,i);break;case"collection":await On(e,i);break;case"decks":await Zt(e,i);break;case"boosters":await to(e,i);break;case"ranked":await fr(e,i);break;case"match":{const s=ve.params&&ve.params.matchMode||"vs_ai_easy";s==="random"?await ni(e,i,!1):s==="ranked"?await ni(e,i,!0):s==="friend"?await Go(e,i,(n=ve.params)==null?void 0:n.friendId,(a=ve.params)==null?void 0:a.friendName):s==="mini-league"?await Fi(e,i,(o=ve.params)==null?void 0:o.mlMatchId,(r=ve.params)==null?void 0:r.leagueId):await ho(e,i);break}case"market":await dr(e,i);break;case"rankings":await ur(e,i);break;case"matches":await gr(e,i);break;case"friends":await $n(e,i);break;case"mini-league":await Oo(e,i);break;case"match-mini-league":{const s=ve.params||{};await Fi(e,i,s.mlMatchId,s.leagueId);break}default:await Ii(e,i)}}function xr(){var n;const e=document.getElementById("app"),t=ve.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",o=>{o.preventDefault(),$t(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>$t("home")),document.getElementById("nav-credits").addEventListener("click",()=>$t("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>yr())}async function yr(){const{data:e}=await w.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const a=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function br(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&ri()}),document.getElementById("modal-close").addEventListener("click",ri);const{data:{session:e}}=await w.auth.getSession();if(!e){Pi(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ft});return}ve.user=e.user,await _t(),Pi();try{const{data:i}=await w.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(a=>{n[a.formation]=a.links}),xn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!ve.profile){hn(document.getElementById("app"),{state:ve,navigate:async()=>{await _t(),Qt()},toast:ft,refreshProfile:_t});return}const t=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&t.length>0){co(document.getElementById("app"),{state:ve,navigate:()=>Qt(),toast:ft,refreshProfile:_t});return}Qt(),setTimeout(()=>sr(ve.profile,$t,ft),800),w.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ft}))})}function hr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Ut(){const e=document.getElementById("app");e&&(e.style.height=hr()+"px")}window.addEventListener("resize",Ut);window.addEventListener("orientationchange",()=>setTimeout(Ut,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Ut);function Qt(){const e=()=>{var i;(i=ve.user)!=null&&i.id&&w.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Ut(),xr(),ln()}function Pi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function cn(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}br().catch(e=>{console.error("Échec du démarrage:",e),cn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&cn("Le serveur met trop de temps à répondre.")},12e3);
