const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/formation-links-C5ScSaLv.js","assets/formation-links-DCm4yyf6.css"])))=>i.map(i=>d[i]);
import{s as v,F as ai,r as qe,j as Ut,l as It,m as fn,h as si,n as gn,o as mn,T as Yt,k as xn,p as bn,b as yn}from"./formation-links-C5ScSaLv.js";const hn="/";function Li(e,{navigate:t,toast:i}){let n="login";const a=()=>{var r,s,c,l,d,u;const o=n==="login";e.innerHTML=`
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
        <img src="${hn}icons/logo-withname.png" alt="Manager Wars" style="height:72px;width:auto;filter:drop-shadow(0 4px 16px rgba(212,160,23,0.4))">
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",a()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",a()}),o?((c=document.getElementById("login-password"))==null||c.addEventListener("keydown",f=>{var x;f.key==="Enter"&&((x=document.getElementById("login-btn"))==null||x.click())}),(l=document.getElementById("login-btn"))==null||l.addEventListener("click",async()=>{const f=document.getElementById("login-email").value.trim(),x=document.getElementById("login-password").value,g=document.getElementById("login-error");if(g.textContent="",!f||!x){g.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:m}=await v.auth.signInWithPassword({email:f,password:x});if(p.textContent="⚽ Se connecter",p.disabled=!1,m){g.textContent=m.message.includes("Invalid")?"Email ou mot de passe incorrect.":m.message;return}window.location.reload()})):((d=document.getElementById("reg-confirm"))==null||d.addEventListener("keydown",f=>{var x;f.key==="Enter"&&((x=document.getElementById("reg-btn"))==null||x.click())}),(u=document.getElementById("reg-btn"))==null||u.addEventListener("click",async()=>{const f=document.getElementById("reg-email").value.trim(),x=document.getElementById("reg-password").value,g=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!f||!x||!g){p.textContent="Remplissez tous les champs.";return}if(x.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(x!==g){p.textContent="Les mots de passe ne correspondent pas.";return}const m=document.getElementById("reg-btn");m.textContent="⏳ Création…",m.disabled=!0;const{error:y}=await v.auth.signUp({email:f,password:x});if(m.textContent="🚀 Créer mon compte",m.disabled=!1,y){p.textContent=y.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",a(),setTimeout(()=>{const h=document.getElementById("login-email");h&&(h.value=f)},50)}))};a()}function vn(e,{state:t,navigate:i,toast:n,refreshProfile:a}){let o="#1A6B3C",r="#D4A017";e.innerHTML=`
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
  `;function s(){var g;const l=document.getElementById("logo-preview"),d=document.getElementById("logo-initials"),u=((g=document.getElementById("setup-club"))==null?void 0:g.value)||"MW",f=u.trim().split(" ").filter(Boolean),x=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();l&&(l.style.background=r,l.style.borderColor=o),d&&(d.textContent=x,d.style.color=o)}document.getElementById("color1").addEventListener("input",l=>{o=l.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",l=>{r=l.target.value,document.getElementById("swatch2").style.background=r,s()});function c(l){document.querySelectorAll(".setup-step").forEach(d=>d.classList.remove("active")),document.getElementById(`step-${l}`).classList.add("active"),document.getElementById("step-num").textContent=l,document.getElementById("progress-fill").style.width=`${Math.round(l/3*100)}%`,l===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("step1-error");if(d.textContent="",l.length<3){d.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await v.from("users").select("id").eq("pseudo",l).maybeSingle();if(u){d.textContent="Ce pseudo est déjà pris.";return}c(2)}),document.getElementById("step2-back").addEventListener("click",()=>c(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const l=document.getElementById("setup-club").value.trim(),d=document.getElementById("step2-error");if(d.textContent="",l.length<2){d.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await v.from("users").select("id").eq("club_name",l).maybeSingle();if(u){d.textContent="Ce nom de club est déjà pris.";return}c(3)}),document.getElementById("step3-back").addEventListener("click",()=>c(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),d=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:x}=await v.from("users").insert({id:t.user.id,pseudo:l,club_name:d,club_color1:o,club_color2:r,credits:1e4});if(x)throw x;await wn(t.user.id),await a(),n(`Bienvenue ${l} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){u.textContent=x.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function wn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await v.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const _n="modulepreload",kn=function(e){return"/"+e},Ti={},Pi=function(t,i,n){let a=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));a=Promise.allSettled(i.map(c=>{if(c=kn(c),c in Ti)return;Ti[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":_n,l||(u.as="script"),u.crossOrigin="",u.href=c,s&&u.setAttribute("nonce",s),document.head.appendChild(u),l)return new Promise((f,x)=>{u.addEventListener("load",f),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return a.then(r=>{for(const s of r||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},$t="#1A6B3C",Et="#cc2222",$n="#D4A017",zi="#888";async function En(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Ri(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>Tn(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Ni(i,n,null,t))}async function Ri(e,t,i={}){const{navigate:n}=i,a=e.user.id,{data:o,error:r}=await v.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${a},addressee_id.eq.${a}`),{count:s}=await v.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",a).eq("status","pending"),c=document.getElementById("pending-badge");c&&(s>0?(c.style.display="flex",c.textContent=s):c.style.display="none");const l=document.getElementById("friends-list");if(!l)return;if(r){console.error("[Friends] Erreur:",r),l.innerHTML=`<div style="color:${Et};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const d=(o||[]).map(x=>x.requester_id===a?x.addressee_id:x.requester_id);let u={};if(d.length){const{data:x}=await v.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",d);(x||[]).forEach(g=>{u[g.id]=g})}const f=(o||[]).map(x=>({friendshipId:x.id,friend:u[x.requester_id===a?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!f.length){l.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}l.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${f.length} ami${f.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${f.map(({friendshipId:x,friend:g})=>Ln(g,x)).join("")}
    </div>`,l.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>zn(e,x.dataset.stats,x.dataset.friendName))}),l.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",()=>{const g=x.dataset.friendId,p=x.dataset.friendName;console.log("[Friends] clic match",{fid:g,fname:p,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:g,friendName:p}):t("Erreur navigation","error")})})}function Ln(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",a=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||$t,r=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,c=s&&Date.now()-s.getTime()<3*60*1e3;return`
    <div style="display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
      <div style="position:relative;width:46px;height:46px;flex-shrink:0">
        <div style="width:46px;height:46px;border-radius:50%;background:${o};border:2.5px solid ${r};display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:900;color:${r}">
          ${a}
        </div>
        ${`<div style="width:10px;height:10px;border-radius:50%;background:${c?"#22c55e":"#ef4444"};border:2px solid #fff;position:absolute;bottom:1px;right:1px"></div>`}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
        <div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">@${n}</div>
        <div style="font-size:11px;color:${c?"#22c55e":"#bbb"};font-weight:600;margin-top:1px">${c?"🟢 En ligne":"🔴 Hors ligne"}</div>
      </div>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button data-match="${t}" data-friend-id="${e.id}" data-friend-name="${i}" title="Jouer un match"
          style="width:38px;height:38px;border-radius:50%;border:1.5px solid #ddd;background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">⚽</button>
        <button data-stats="${e.id}" data-friend-name="${i}" title="Voir les stats"
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${$n};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function Tn(e,t){const i=di();i.innerHTML=`
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
    ${li()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),a=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",r=>{r.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){a.textContent="Entre un pseudo";return}a.textContent="";const{data:s}=await v.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!s){a.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){a.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:c}=await v.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(c){const d=c.status==="accepted"?"Vous êtes déjà amis !":c.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";a.textContent=d;return}const{error:l}=await v.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(l){a.textContent="Erreur : "+l.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Ni(e,t,i=null,n={}){const a=e.user.id,{data:o}=await v.from("friendships").select("id, requester_id").eq("addressee_id",a).eq("status","pending").order("created_at",{ascending:!1}),r=(o||[]).map(f=>f.requester_id);let s={};if(r.length){const{data:f}=await v.from("users").select("id, pseudo, club_name").in("id",r);(f||[]).forEach(x=>{s[x.id]=x})}const c=(o||[]).map(f=>({...f,requester:s[f.requester_id]||{pseudo:"?"}})),l=di(),d=c||[];l.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${d.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${d.map(f=>{var x,g,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=f.requester)==null?void 0:x.club_name)||((g=f.requester)==null?void 0:g.pseudo)||"?"}
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
    ${li()}`,document.body.appendChild(l);const u=()=>l.remove();l.querySelector("#pending-close").addEventListener("click",u),l.addEventListener("click",f=>{f.target===l&&u()}),l.querySelectorAll("[data-accept]").forEach(f=>{f.addEventListener("click",async()=>{const{error:x}=await v.from("friendships").update({status:"accepted"}).eq("id",f.dataset.accept);if(x){t("Erreur : "+x.message,"error");return}f.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Ri(e,t,n),i&&i()})}),l.querySelectorAll("[data-decline]").forEach(f=>{f.addEventListener("click",async()=>{await v.from("friendships").delete().eq("id",f.dataset.decline),f.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function zn(e,t,i){const n=e.user.id,[a,o]=[n,t].sort(),r=n===a,{data:s}=await v.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",o).single(),c=e.profile.club_name||e.profile.pseudo||"Moi",l=s||{},d=r?l.wins_p1||0:l.wins_p2||0,u=r?l.wins_p2||0:l.wins_p1||0,f=l.draws||0,x=r?l.goals_p1||0:l.goals_p2||0,g=r?l.goals_p2||0:l.goals_p1||0,p=r?l.gc_used_p1||0:l.gc_used_p2||0,m=r?l.gc_used_p2||0:l.gc_used_p1||0,y=l.matches_total||0,h=($,b,R,L=$t,G=Et)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${L}">${b}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${$}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${G}">${R}</div>
    </div>`,w=di();w.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${y===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${h("Victoires",d,u)}
        ${h("Nuls",f,f,zi,zi)}
        ${h("Défaites",u,d)}
        ${h("Buts marqués",x,g)}
        ${h("Buts encaissés",g,x,Et,$t)}
        ${h("GC utilisés ⚡",p,m,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${y} match${y>1?"s":""} joué${y>1?"s":""}</div>`}
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
    </style>`}const In="2026.07.13-0952";async function Ii(e,{state:t,navigate:i,toast:n}){var o,r;const a=t.profile;a&&(e.innerHTML=`
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
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${In}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var u,f,x,g,p;const s=((u=window.visualViewport)==null?void 0:u.height)||window.innerHeight,c=((f=document.querySelector(".top-nav"))==null?void 0:f.offsetHeight)||56,l=((x=document.querySelector(".bottom-nav"))==null?void 0:x.offsetHeight)||60;if(e.querySelector(".home-inner")){const m=s-c-l;e.querySelector(".home-dark").style.minHeight=m+"px"}if(window.innerWidth<768){const m=((g=e.querySelector(".home-hero"))==null?void 0:g.offsetHeight)||60,y=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const h=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,w=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((O,ee)=>{var oe;return O+(((oe=document.getElementById(ee))==null?void 0:oe.offsetHeight)||0)},0),$=12*5,b=s-c-l-m-h-w-$-32,R=Math.max(80,Math.round(b*.28)),L=Math.max(160,Math.round(b*.72)),G=Math.floor((L-10)/2);y&&(y.style.minHeight=y.style.maxHeight=R+"px"),e.querySelectorAll(".play-tile").forEach(O=>{O.style.minHeight=O.style.height=G+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(O=>{O.style.height=Math.round(G*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const c=s.dataset.action;if(c==="match-ai"){Cn(i);return}if(c==="match-random"){i("match",{matchMode:"random"});return}if(c==="match-friend"){i("friends");return}if(c==="mini-league"){i("mini-league");return}if(c==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await v.auth.signOut(),window.location.reload()}),Hi(t,n),Sn(t,n,i),Oi(t,n,i))}async function Oi(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const a=e.profile.id,{data:o}=await v.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${a},away_id.eq.${a}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const r=o.map(c=>c.home_id===a?c.away_id:c.home_id).filter(Boolean);let s={};if(r.length){const{data:c}=await v.from("users").select("id, pseudo, club_name").in("id",r);(c||[]).forEach(l=>{s[l.id]=l.club_name||l.pseudo})}n.innerHTML=o.map(c=>{const l=c.home_id===a?c.away_id:c.home_id,d=s[l]||"Adversaire",u=c.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${u?"🏆 Mini League":c.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${d}</div>
      </div>
      <button data-resume="${c.id}" data-mini="${u?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${c.id}" data-opp="${l}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(c=>{c.addEventListener("click",async()=>{const l=document.getElementById("page-content")||document.getElementById("app");if(c.dataset.mini==="1"){const{data:d}=await v.from("mini_league_matches").select("id, league_id").eq("match_id",c.dataset.resume).single();d?i("match-mini-league",{mlMatchId:d.id,leagueId:d.league_id}):i("mini-league")}else{const{resumePvpMatch:d}=await Pi(async()=>{const{resumePvpMatch:u}=await Promise.resolve().then(()=>Fo);return{resumePvpMatch:u}},void 0);d(l,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},c.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(c=>{c.addEventListener("click",()=>{Mn(async()=>{await An(c.dataset.abandon,c.dataset.opp,a),t("Match abandonné (défaite 3-0)","info"),Oi(e,t,i)})})})}async function An(e,t,i){const{data:n}=await v.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const a=n.home_id===i,o=a?0:3,r=a?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=r,s.phase="finished",s.forfeit=!0,await v.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:r,game_state:s}).eq("id",e)}function Mn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function Sn(e,t,i){var s,c,l,d;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:a}=await v.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!a){n.innerHTML="";return}const o=((s=a.inviter)==null?void 0:s.club_name)||((c=a.inviter)==null?void 0:c.pseudo)||"?",r=a.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(l=document.getElementById("match-inv-accept"))==null||l.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:o})}),(d=document.getElementById("match-inv-decline"))==null||d.addEventListener("click",async()=>{await v.from("friend_match_invites").update({status:"declined"}).eq("id",a.id),n.innerHTML="",t("Invitation refusée","info")})}async function Hi(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:a}=await v.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(a||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,r=n.slice(0,2).map(c=>{var l;return((l=c.requester)==null?void 0:l.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">👥</div>
    <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:900">${o} demande${o>1?"s":""} d'ami${o>1?"s":""}</div><div style="font-size:11px;opacity:0.85;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r}${s}</div></div>
    <div style="font-size:20px;flex-shrink:0">›</div>
  </div>`,document.getElementById("friend-req-btn").addEventListener("click",()=>Ni(e,t,()=>Hi(e,t)))}function Cn(e){const t=[{mode:"vs_ai_easy",label:"Facile",sub:"Gain 500 cr.",icon:"🟢"},{mode:"vs_ai_medium",label:"Moyen",sub:"Gain 1 000 cr.",icon:"🟡"},{mode:"vs_ai_hard",label:"Difficile",sub:"Gain 1 500 cr.",icon:"🟠"},{mode:"vs_ai_club",label:"Club",sub:"Gain 2 500 cr.",icon:"🔴"}],i=document.createElement("div");i.className="modal-overlay",i.style.zIndex="2000",i.innerHTML=`<div class="modal" style="max-width:380px">
    <div class="modal-header"><h2>Choisir la difficulté</h2><button class="btn-icon" id="diff-cancel">✕</button></div>
    <div class="modal-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        ${t.map(a=>`<div class="action-card" data-mode="${a.mode}" style="cursor:pointer"><div class="icon">${a.icon}</div><div class="label">${a.label}</div><div class="sub">${a.sub}</div></div>`).join("")}
      </div>
    </div>
  </div>`,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(a=>{a.addEventListener("click",()=>{n(),e("match",{matchMode:a.dataset.mode})})})}const Ae={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Be(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const Ai=["ATT","MIL","DEF","GK"];function Ui(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let a=n+1;a<i;a++){const o=e[n],r=e[a];if(!o||!r)continue;const s=o._col!=null&&r._col!=null&&o._col===r._col,c=o._col!=null&&r._col!=null&&Math.abs(o._col-r._col)===1,l=Ai.indexOf(o._line||o.job),d=Ai.indexOf(r._line||r.job),u=Math.abs(l-d)===1;if(!((o._line||o.job)===(r._line||r.job)&&c||s&&u))continue;const g=o.country_code&&r.country_code&&o.country_code===r.country_code,p=o.club_id&&r.club_id&&o.club_id===r.club_id;g&&p?t+=2:(g||p)&&(t+=1)}return t}function ci(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job,c=r.stadiumBonus&&(s==="MIL"||s==="ATT")?10:0;return o+(Number(s==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+c},0),n=Ui(e);let a=i+n;return t.doubleAttack&&(a*=2),t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function pi(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job;let c=0;s==="GK"?c=Number(r.note_g)||0:s==="MIL"?c=Number(r.note_m)||0:c=Number(r.note_d)||0;const l=r.stadiumBonus&&(s==="GK"||s==="DEF"||s==="MIL")?10:0;return o+c+(r.boost||0)+l},0),n=Ui(e);let a=i+n;return t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function ui(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Ki(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const a=[...n].sort((r,s)=>{const c=t==="attack"?Be(r,"ATT"):r._line==="GK"?Be(r,"GK"):Be(r,"DEF");return(t==="attack"?Be(s,"ATT"):s._line==="GK"?Be(s,"GK"):Be(s,"DEF"))-c});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return a.slice(0,Math.min(o,a.length,3))}function jn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}function Bn(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const a=qn(i),o=Number(i[t])||0;if(o<=0)return 0;const r=i.note_min??1,s=i.note_max??10,l=(e.current_note??a)-a;return Math.min(s,Math.max(r,o+l))}function qn(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}const Dn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Wt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},St=["GK","DEF","MIL","ATT"],Fn=["Tous","GK","DEF","MIL","ATT"],Gn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Mi(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Pn(e){return e.length?e.reduce((t,i)=>Mi(i)>Mi(t)?i:t,e[0]):e[0]}function Rn(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const Nn={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function On(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Xt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Jt(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,a={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${qe(a,{width:140})}
  </div>`}function Si(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${qe(e,{width:140})}
  </div>`}async function Hn(e,t){const{state:i,navigate:n,toast:a,openModal:o,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await v.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:c}=await v.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),l=(s||[]).filter(T=>T.card_type==="player"&&T.player),d=(s||[]).filter(T=>T.card_type==="game_changer"),u=(s||[]).filter(T=>T.card_type==="formation"),f=(s||[]).filter(T=>T.card_type==="stadium"),{data:x}=await v.from("gc_definitions").select("name,gc_type,color,effect,image_url"),g={};(x||[]).forEach(T=>{g[T.name]=T});const{data:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),m={};(p||[]).forEach(T=>{m[T.id]=T}),f.forEach(T=>{T.stadium_def&&(m[T.stadium_id]=T.stadium_def)});const y=Object.keys(ai),h=Object.keys(Ae),w={};l.forEach(T=>{const M=T.player.id;w[M]=(w[M]||0)+1}),new Set(Object.keys(w).map(T=>String(T)));const $=new Set(u.map(T=>T.formation)),b=new Set(d.map(T=>T.gc_type));let R="player",L="Tous",G="",O=!1;function ee(){return[...l].sort((T,M)=>{const P=St.indexOf(T.player.job),H=St.indexOf(M.player.job);return P!==H?P-H:(T.player.surname_real||"").localeCompare(M.player.surname_real||"")})}function oe(){return[...c||[]].sort((T,M)=>{const P=St.indexOf(T.job),H=St.indexOf(M.job);return P!==H?P-H:(T.surname_real||"").localeCompare(M.surname_real||"")})}function te(){return ee().filter(T=>{const M=T.player,P=L==="Tous"||M.job===L,H=!G||`${M.firstname} ${M.surname_real}`.toLowerCase().includes(G);return P&&H})}function j(){return oe().filter(T=>{const M=L==="Tous"||T.job===L,P=!G||`${T.firstname} ${T.surname_real}`.toLowerCase().includes(G);return M&&P})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${R==="player"?"var(--green)":"transparent"};
        color:${R==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
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
  </div>`;function z(){const T=document.getElementById("col-filters");T&&(R==="player"?(T.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${G}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Fn.map(M=>`
            <button class="filter-btn" data-job="${M}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${M===L?"var(--green)":"var(--gray-200)"};
                background:${M===L?"var(--green)":"#fff"};
                color:${M===L?"#fff":"var(--gray-600)"}">
              ${M}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${O?"var(--yellow)":"var(--gray-200)"};
              background:${O?"var(--yellow)":"#fff"};
              color:${O?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${O?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",M=>{G=M.target.value.toLowerCase(),k()}),e.querySelectorAll(".filter-btn").forEach(M=>{M.addEventListener("click",()=>{L=M.dataset.job,z(),k()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{O=!O,z(),k()})):(T.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${O?"var(--yellow)":"var(--gray-200)"};
              background:${O?"var(--yellow)":"#fff"};
              color:${O?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${O?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{O=!O,z(),k()})))}function k(){const T=document.getElementById("col-grid");T&&(R==="player"?ke(T):R==="formation"?K(T):R==="stadium"?V(T):Q(T))}function D(T,M,P,H,U){const C=document.getElementById("col-grid"),N=document.getElementById("col-big");if(!C||!N)return;var Ee=0;function _e(){const we=window.innerWidth>=768,me=document.getElementById("col-big"),Le=document.getElementById("col-grid");we&&me&&(me.style.minHeight="420px",me.style.flex="1 1 auto"),we&&Le&&(Le.style.height=Math.round(310*.76+16)+"px",Le.style.flexShrink="0",Le.style.overflowX="auto",Le.style.overflowY="hidden",Le.style.alignItems="center",Le.style.padding="8px 16px"),N.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+M(T[Ee])+"</div>";var $e=N.querySelector("[data-card-id],[data-form-id],[data-gc-id]");$e&&$e.addEventListener("click",function(){H(T[Ee])}),requestAnimationFrame(function(){var he=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!he||!N)){var Se=N.clientHeight-8,Ce=N.clientWidth-24,Fe=he.offsetHeight,_=he.offsetWidth;if(Fe>0&&_>0&&Se>40){var E=we?2.2:1.6,A=Math.min(Se/Fe,Ce/_,E);he.style.transform="scale("+A.toFixed(3)+")",he.style.transformOrigin="top center"}}}),C.innerHTML=T.map(function(he,Se){var Ce=Se===Ee,Fe="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Ce?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Se+'" style="'+Fe+'">'+P(he,Ce)+"</div>"}).join(""),C.querySelectorAll(".col-mini-item").forEach(function(he){he.addEventListener("click",function(){Ee=Number(he.dataset.idx),_e(),he.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}_e()}function ae(T){var M=window.innerWidth>=768?.76:.54,P;if(!T||T._fake){var H=T?T.player:null;if(!H)return"";P=Si(H)}else P=Jt(T,"");return'<div style="display:inline-block;zoom:'+M+';pointer-events:none;line-height:0">'+P+"</div>"}function pe(T,M,P){M=M||100,P=P||140;var H=Ut[T]||{},U={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},C=Math.max(3,Math.round(M*.06)),N=Object.entries(H).map(function(_e){var we=_e[0],me=_e[1],Le=we.replace(/\d+$/,""),$e=U[Le]||"#888",he=Math.round(me.x*M),Se=Math.round(me.y*P);return'<circle cx="'+he+'" cy="'+Se+'" r="'+C+'" fill="'+$e+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),Ee=Math.max(1,Math.round(M/50));return'<svg viewBox="0 0 '+M+" "+P+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+M+'" height="'+P+'" fill="#1A6B3C"/><rect x="'+Math.round(M*.2)+'" y="'+Math.round(P*.02)+'" width="'+Math.round(M*.6)+'" height="'+Math.round(P*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ee+'"/><line x1="0" y1="'+Math.round(P*.5)+'" x2="'+M+'" y2="'+Math.round(P*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ee+'"/><ellipse cx="'+Math.round(M*.5)+'" cy="'+Math.round(P*.5)+'" rx="'+Math.round(M*.18)+'" ry="'+Math.round(P*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+Ee+'"/><rect x="'+Math.round(M*.2)+'" y="'+Math.round(P*.82)+'" width="'+Math.round(M*.6)+'" height="'+Math.round(P*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+Ee+'"/>'+N+"</svg>"}function le(T,M,P){var H=P>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+P+"</div>":"",U=M?'data-form-id="'+M.id+'"':"",C=T.length>7?14:T.length>5?16:19,N=!!M;return"<div "+U+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(N?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(N?"":"filter:grayscale(1);opacity:0.5")+'">'+H+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(N?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+C+"px;font-weight:900;color:"+(N?"#1A6B3C":"#aaa")+';line-height:1">'+T+'</div></div><div style="flex:1;overflow:hidden;background:'+(N?"#1A6B3C":"#ccc")+'">'+pe(T,140,220)+"</div></div>"}function se(T,M){var P=window.innerWidth>=768?.76:.54,H=140,U=305,C=Math.round(U*.22),N=U-C,Ee=T.length>7?10:13,_e=pe(T,H,N),we=M?"1.5px solid #2a7a40":"1px solid #ddd",me=M?"":"filter:grayscale(1);opacity:0.45;",Le=M?"#1A6B3C":"#bbb",$e="#fff";return'<div style="display:inline-block;zoom:'+P+';line-height:0;pointer-events:none"><div style="width:'+H+"px;height:"+U+"px;border-radius:6px;border:"+we+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+me+'"><div style="height:'+C+"px;background:"+Le+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+Ee+"px;font-weight:900;color:"+$e+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(H-4)+'px">'+T+'</span></div><div style="height:'+N+'px;overflow:hidden;flex-shrink:0">'+_e+"</div></div></div>"}function ke(T){if(O){const M=j();if(!M.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const P=M.map(H=>l.find(U=>U.player.id===H.id)||{_fake:!0,player:H,id:"fake-"+H.id});D(P,H=>H._fake?Si(H.player):Jt(H,""),H=>H._fake?ae({player:H.player,id:"x",_fake:!0}):ae(H),H=>{H._fake||Ci(H,l,w,t)})}else{const M=te();if(!M.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const P={};M.forEach(U=>{const C=U.player.id;P[C]||(P[C]=[]),P[C].push(U)});const H=Object.values(P).map(U=>Pn(U));D(H,U=>{const C=w[U.player.id]||1,N=C>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${C}</div>`:"",_e=l.filter(we=>we.player.id===U.player.id&&we.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Jt(U,N+_e)},U=>ae(U),U=>Ci(U,l,w,t))}}function K(T){const M=O?y:[...$];if(!M.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const P=M.map(H=>({formation:H,card:u.find(U=>U.formation===H)||null,owned:$.has(H)}));D(P,({formation:H,card:U,owned:C})=>le(H,C?U:null,C?u.filter(N=>N.formation===H).length:0),({formation:H,owned:U})=>se(H,U),({card:H,owned:U})=>{U&&H&&Kn(H,u,t,o)})}function Q(T){const M=Object.keys(g),P=O?M.length?M:h:[...b];if(!P.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const H=P.map(U=>({type:U,gc:Ae[U]||{icon:"⚡",desc:""},def:g[U]||null,owned:b.has(U),card:d.find(C=>C.gc_type===U)||null}));D(H,({type:U,gc:C,def:N,owned:Ee,card:_e})=>{var E;const we=Ee?d.filter(A=>A.gc_type===U).length:0,me=we>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${we}</div>`:"",Le=(N==null?void 0:N.gc_type)==="ultra_game_changer",$e={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},he={purple:"#b06ce0",light_blue:"#00d4ef"},Se=$e[N==null?void 0:N.color]||$e.purple,Ce=he[N==null?void 0:N.color]||he.purple,Fe=(N==null?void 0:N.effect)||C.desc||"",_=N!=null&&N.image_url?`/icons/${N.image_url}`:((E=N==null?void 0:N.club)==null?void 0:E.logo_url)||(N!=null&&N.country_code?`https://flagsapi.com/${N.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return Ee&&_e?`<div data-gc-id="${_e.id}" data-gc-type="${U}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Ce};background:${Se};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Ce}66;cursor:pointer">
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
        </div>`},({type:U,gc:C,def:N,owned:Ee})=>{const _e=window.innerWidth>=768?.76:.54,we={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},me={purple:"#9b59b6",light_blue:"#00bcd4"},Le=we[N==null?void 0:N.color]||we.purple,$e=me[N==null?void 0:N.color]||me.purple,he=N!=null&&N.image_url?`/icons/${N.image_url}`:null;return Ee?`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Le};border:1px solid ${$e};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${U}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${he?`<img src="${he}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${C.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((N==null?void 0:N.effect)||C.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${C.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${U}</span></div></div>`},({type:U,owned:C,def:N})=>{C&&Un(U,N,o)})}function V(T){const M="#E87722",P="/";if(!f.length){T.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const H={};f.forEach(C=>{const N=C.stadium_id||"?";(H[N]=H[N]||[]).push(C)});const U=Object.entries(H).map(([C,N])=>({sid:C,def:m[C]||null,count:N.length,card:N[0]}));D(U,({def:C,count:N})=>{var $e,he;const Ee=(C==null?void 0:C.name)||"?",_e=(($e=C==null?void 0:C.club)==null?void 0:$e.encoded_name)||(C==null?void 0:C.country_code)||"—",we=C!=null&&C.image_url?`${P}icons/${C.image_url}`:((he=C==null?void 0:C.club)==null?void 0:he.logo_url)||(C!=null&&C.country_code?`https://flagsapi.com/${C.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),me=we?`<img src="${we}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Le=N>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${N}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${M},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${M}66">
          ${Le}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${Ee}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${me}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_e}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:C,count:N})=>{var $e,he;const Ee=window.innerWidth>=768?.76:.54,_e=(C==null?void 0:C.name)||"?",we=(($e=C==null?void 0:C.club)==null?void 0:$e.encoded_name)||(C==null?void 0:C.country_code)||"—",me=C!=null&&C.image_url?`${P}icons/${C.image_url}`:((he=C==null?void 0:C.club)==null?void 0:he.logo_url)||(C!=null&&C.country_code?`https://flagsapi.com/${C.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Le=me?`<img src="${me}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${Ee};line-height:0;pointer-events:none">
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
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(T=>{T.addEventListener("click",()=>{R=T.dataset.tab,L="Tous",G="",O=!1,e.querySelectorAll(".col-tab-btn").forEach(M=>{const P=M.dataset.tab===R;M.style.borderBottomColor=P?"var(--green)":"transparent",M.style.color=P?"var(--green)":"var(--gray-600)"}),z(),k()})}),z(),k()}function Un(e,t,i){const n=Ae[e]||{icon:"⚡",desc:"Effet spécial."},a=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[t==null?void 0:t.color]||o.purple,c=r[t==null?void 0:t.color]||r.purple,l=(t==null?void 0:t.name)||e,d=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${c};
        padding:0;text-align:center;color:#fff;width:100%;max-width:280px;overflow:hidden;display:flex;flex-direction:column">
        <div style="padding:12px;background:rgba(255,255,255,0.14)">
          <div style="font-size:9px;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:10px;display:inline-block;letter-spacing:.5px;margin-bottom:6px">${a?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          <div style="font-size:20px;font-weight:900">${l}</div>
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
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const Ct=1e3;function Kn(e,t,i,n){var g,p,m;const{state:a,toast:o,closeModal:r,navigate:s,refreshProfile:c}=i,l=e.formation,d={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const y=Ut[l]||{},h=ai[l]||[],w=290,$=360,b=20;function R(G){const O=y[G];return O?{x:O.x*w,y:O.y*$}:null}let L=`<svg width="${w}" height="${$}" viewBox="0 0 ${w} ${$}" xmlns="http://www.w3.org/2000/svg">`;for(const[G,O]of h){const ee=R(G),oe=R(O);!ee||!oe||(L+=`<line x1="${ee.x}" y1="${ee.y}" x2="${oe.x}" y2="${oe.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const G of Object.keys(y)){const O=R(G);if(!O)continue;const ee=G.replace(/\d+/,""),oe=d[ee]||"#555";L+=`<circle cx="${O.x}" cy="${O.y}" r="${b}" fill="${oe}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,L+=`<text x="${O.x}" y="${O.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ee}</text>`}return L+="</svg>",L}const f=t.filter(y=>y.formation===l);f.length;const x=!e.is_for_sale;n(`Formation ${l}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
    ${x?`
    <div style="margin-top:12px;border-top:1px solid var(--gray-200);padding-top:12px">
      <div style="font-size:13px;font-weight:700;margin-bottom:8px">🛒 Marché des transferts</div>
      <div style="display:flex;gap:8px">
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${Ct}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(g=document.getElementById("direct-sell-form-btn"))==null||g.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${l} pour ${Ct.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const y=f.find(w=>!w.is_for_sale)||f[0];if(!y){o("Aucune carte à vendre","error");return}await v.from("market_listings").delete().eq("card_id",y.id),await v.from("transfer_history").delete().eq("card_id",y.id);const{error:h}=await v.from("cards").delete().eq("id",y.id);if(h){o(h.message,"error");return}await v.from("users").update({credits:(a.profile.credits||0)+Ct}).eq("id",a.profile.id),await c(),o(`+${Ct.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const y=parseInt(document.getElementById("sell-price-form").value);if(!y||y<1){o("Prix invalide","error");return}await v.from("cards").update({is_for_sale:!0,sale_price:y}).eq("id",e.id),await v.from("market_listings").insert({seller_id:a.profile.id,card_id:e.id,price:y}),o("Carte mise en vente sur le marché !","success"),r(),s("collection")}),(m=document.getElementById("cancel-sell-form-btn"))==null||m.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),r(),s("collection")})}async function Ci(e,t,i,n){var ae,pe,le,se,ke;const{state:a,toast:o,openModal:r,closeModal:s,navigate:c,refreshProfile:l}=n,d=e.player,u=t.filter(K=>K.player.id===d.id),f=u.length,x=e.evolution_bonus||0,g=Math.max((Number(d.note_g)||0)+(d.job==="GK"||d.job2==="GK"?x:0),(Number(d.note_d)||0)+(d.job==="DEF"||d.job2==="DEF"?x:0),(Number(d.note_m)||0)+(d.job==="MIL"||d.job2==="MIL"?x:0),(Number(d.note_a)||0)+(d.job==="ATT"||d.job2==="ATT"?x:0)),p=d.rarity||"normal",{data:m}=await v.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",g).gte("note_max",g).order("note_min",{ascending:!1}).limit(1);((ae=m==null?void 0:m[0])==null?void 0:ae.price)??Gn[p];const y=d.rarity!=="legende";On(d);const h=((d.rarity==="pepite"||d.rarity==="papyte")&&e.current_note!=null?e.current_note:Xt(d,d.job))+x,w=d.rarity==="pepite"||d.rarity==="papyte",$=d.job2?(w?Bn(e,Rn(d.job2)):Xt(d,d.job2))+(Xt(d,d.job2)>0?x:0):null;Wt[d.job],d.job2&&Wt[d.job2];const b=Dn[d.rarity]||"#ccc";Nn[d.country_code]||d.country_code;const R=e.evolution_bonus||0,G=h+R,O=$||0,ee=O>0?O+R:0,oe=u.map(K=>K.id);let te={};if(oe.length){const{data:K}=await v.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",oe).order("transferred_at",{ascending:!0});(K||[]).forEach(Q=>{te[Q.card_id]||(te[Q.card_id]=[]),te[Q.card_id].push(Q)})}const j=K=>{const Q=K.transferred_at?new Date(K.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",V=K.source==="booster"?"Booster":K.price?K.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${K.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${K.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${K.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${V}</div>
        <div style="font-size:11px;color:var(--gray-600)">${Q}</div>
      </div>
    </div>`},z=oe.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${f>1?`(${f})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${u.map((K,Q)=>{const V=te[K.id]||[],T=K.is_for_sale,M=V.length?V[V.length-1]:null,H=(d.rarity==="pepite"||d.rarity==="papyte")&&K.current_note!=null?` (☆${K.current_note})`:"";return`
            <div data-card-id="${K.id}" data-card-idx="${Q}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${T?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${K.id}" ${T?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${Q+1}${H}${T?" 🏷️ En vente":""}</div>
                  ${M?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${M.club_name} · ${M.source==="booster"?"Booster":M.price?M.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${Q}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${V.length?`${V.length} club${V.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${Q}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${V.map(j).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${G}${d.job2&&O>0?` / ${ee}`:""}`:`Note actuelle : ${G}${d.job2&&O>0?` / ${ee}`:""}`}
            </div>
          </div>
          <button id="evolve-btn" class="btn btn-primary"
            style="background:${f<=1?"#ccc":"#1A6B3C"};border-color:${f<=1?"#ccc":"#1A6B3C"};padding:8px 16px;font-weight:900;cursor:${f<=1?"not-allowed":"pointer"}"
            ${f<=1?'disabled title="Un seul exemplaire — impossible de fusionner"':""}>
            ⬆️ Évoluer
          </button>
        </div>

        <!-- Marché -->
        ${y?`
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
      ${qe({...d,_evolution_bonus:x},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${b}">${d.rarity.toUpperCase()}</div>
          ${d.rarity==="pepite"||d.rarity==="papyte"?`
          <div style="margin-top:6px;background:${b}18;border-left:3px solid ${b};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${b};margin-bottom:2px">Carte évolutive</div>
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
            ${[["GK",d.note_g],["DEF",d.note_d],["MIL",d.note_m],["ATT",d.note_a]].map(([K,Q])=>{const V=Wt[K],T=K==="GK"?"#fff":V,M=K===d.job||K===d.job2,P=(Number(Q)||0)+(M&&R>0?R:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${V};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${T};font-family:Arial Black,Arial;line-height:1">${P}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${T}">${K}</span>
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
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(pe=document.getElementById("close-detail"))==null||pe.addEventListener("click",s);let k=new Set;const D=()=>{const K=k.size,Q=document.getElementById("sell-action-panel");if(!Q)return;Q.style.display=K>0?"block":"none",document.getElementById("sell-selected-count").textContent=K;const V=document.getElementById("evolve-btn");V&&(V.textContent=`⬆️ Évoluer ${K>1?"(+"+K+")":""}`)};document.querySelectorAll(".expl-check").forEach(K=>{K.addEventListener("change",()=>{const Q=K.dataset.id;K.checked?k.add(Q):k.delete(Q);const V=K.closest(".exemplaire-row");V&&(V.style.borderColor=K.checked?"#1A6B3C":"#eee"),D()})}),document.querySelectorAll(".exemplaire-row").forEach(K=>{K.addEventListener("click",Q=>{if(Q.target.closest("button")||Q.target.tagName==="INPUT")return;const V=K.querySelector(".expl-check");V&&!V.disabled&&(V.checked=!V.checked,V.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(K=>{K.addEventListener("click",Q=>{Q.stopPropagation();const V=document.querySelector(`.expl-hist[data-hist="${K.dataset.idx}"]`);V&&(V.style.display=V.style.display==="none"?"flex":"none")})}),(le=document.getElementById("evolve-btn"))==null||le.addEventListener("click",async()=>{if(f<=1)return;const K=[...k];if(!K.length)return;if(k.has(e.id)){const U=document.createElement("div");U.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",U.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(U),U.querySelector("#err-close").addEventListener("click",()=>U.remove()),U.addEventListener("click",C=>{C.target===U&&U.remove()});return}const Q=K.filter(U=>U!==e.id),V=d.rarity==="legende"?2:1;if((Q.length||1)*V,!(!Q.length&&K.length===1&&K[0]===e.id)){if(!Q.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(U=>{const C=document.createElement("div");C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",C.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${d.firstname} ${d.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${Q.length}</strong> copie${Q.length>1?"s":""} sacrifiée${Q.length>1?"s":""}<br>
            📈 Note : <strong>${h+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${h+(e.evolution_bonus||0)+Q.length*V}</strong>
            ${$&&$>0?`<br>📈 Note 2 : <strong>${$+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${$+(e.evolution_bonus||0)+Q.length*V}</strong>`:""}
            ${d.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${V} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(C),C.querySelector("#sac-cancel").addEventListener("click",()=>{C.remove(),U(!1)}),C.querySelector("#sac-ok").addEventListener("click",()=>{C.remove(),U(!0)}),C.addEventListener("click",N=>{N.target===C&&(C.remove(),U(!1))})}))return;if(Q.length){await v.from("market_listings").delete().in("card_id",Q),await v.from("deck_cards").delete().in("card_id",Q),await v.from("transfer_history").delete().in("card_id",Q),await v.from("decks").update({stadium_card_id:null}).in("stadium_card_id",Q);const{error:U}=await v.from("cards").delete().in("id",Q);if(U){o("Erreur suppression : "+U.message,"error");return}}const M=(e.evolution_bonus||0)+Q.length*V,{error:P}=await v.from("cards").update({evolution_bonus:M}).eq("id",e.id);if(P){o("Erreur évolution : "+P.message,"error");return}const H=h+M;o(`⬆️ ${d.firstname} ${d.surname_real} : note ${h+e.evolution_bonus||h} → ${H}${Q.length?` · ${Q.length} copie${Q.length>1?"s":""} sacrifiée${Q.length>1?"s":""}`:""} !`,"success",4e3),s(),c("collection")}),(se=document.getElementById("market-sell-btn"))==null||se.addEventListener("click",async()=>{var P;const K=[...k];if(!K.length){o("Sélectionne au moins un exemplaire","warning");return}const Q=parseInt((P=document.getElementById("sell-market-price"))==null?void 0:P.value);if(!Q||Q<1){o("Prix invalide","error");return}const{error:V}=await v.from("cards").update({is_for_sale:!0,sale_price:Q}).in("id",K);if(V){o(V.message,"error");return}const T=K.map(H=>({seller_id:a.profile.id,card_id:H,price:Q,status:"active"})),{error:M}=await v.from("market_listings").insert(T);M&&console.warn("[Market] insert listings:",M.message),o(`${K.length} carte${K.length>1?"s":""} mise${K.length>1?"s":""} en vente à ${Q.toLocaleString("fr")} cr. chacune !`,"success"),s(),c("collection")}),(ke=document.getElementById("cancel-sell-btn"))==null||ke.addEventListener("click",async()=>{await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await v.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),c("collection")})}const gt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Vn={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function rt(e,t,i,n,a){var o;e.innerHTML=`<div class="match-screen" style="display:flex;align-items:center;justify-content:center;min-height:100vh">
    <div style="text-align:center;padding:40px;color:#fff">
      <div style="font-size:48px;margin-bottom:16px">${t}</div>
      <p style="margin-bottom:16px">${i}</p>
      <button class="btn btn-primary" id="msg-btn">${n}</button>
    </div>
  </div>`,(o=document.getElementById("msg-btn"))==null||o.addEventListener("click",a)}function Lt(e){if(e!=null&&e.face){const n=(typeof import.meta<"u"?"/":null)||"/",a=e.face.replace(/^public\//,"").replace(/^\//,"");return n+a}const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Dt(e,t){var o,r;const i=e.player,n=e.evolution_bonus||0,a=i.job2&&Number(i[`note_${i.job2.toLowerCase()}`])||0;return{cardId:e.id,position:t||null,id:i.id,firstname:i.firstname,name:i.surname_real,country_code:i.country_code,club_id:i.club_id,job:i.job,job2:i.job2,note_g:(Number(i.note_g)||0)+(i.job==="GK"?n:0)+(i.job2==="GK"&&a>0?n:0),note_d:(Number(i.note_d)||0)+(i.job==="DEF"?n:0)+(i.job2==="DEF"&&a>0?n:0),note_m:(Number(i.note_m)||0)+(i.job==="MIL"?n:0)+(i.job2==="MIL"&&a>0?n:0),note_a:(Number(i.note_a)||0)+(i.job==="ATT"?n:0)+(i.job2==="ATT"&&a>0?n:0),evolution_bonus:n,rarity:i.rarity,skin:i.skin,hair:i.hair,hair_length:i.hair_length,face:i.face||null,clubName:((o=i.clubs)==null?void 0:o.encoded_name)||null,clubLogo:((r=i.clubs)==null?void 0:r.logo_url)||null,boost:0,used:!1,_line:null,_col:null}}function Tt(e,t){if(!t||!e)return e;const{club_id:i,country_code:n}=t;return Object.values(e).forEach(a=>{Array.isArray(a)&&a.forEach(o=>{const r=i&&String(o.club_id)===String(i),s=n&&String(o.country_code)===String(n);(r||s)&&(o.stadiumBonus=!0)})}),e}function Ft(e,t){if(!t||!(e!=null&&e.length))return e;const{club_id:i,country_code:n}=t;return e.forEach(a=>{if(!a)return;const o=i&&String(a.club_id)===String(i),r=n&&String(a.country_code)===String(n);(o||r)&&(a.stadiumBonus=!0)}),e}function mt(e){return e===1?[1]:e===2?[0,2]:e===3?[0,1,2]:e===4?[0,1,1,2]:e===5?[0,1,1,1,2]:[1]}function Vi(){const e=Math.random()*100;return e<10?3:e<30?2:1}function Gt(e,t){const i=gt[t]||gt["4-4-2"],n={GK:[],DEF:[],MIL:[],ATT:[]};if(e.length&&e.every(r=>r.position)){for(const r of["GK","DEF","MIL","ATT"]){const s=e.filter(l=>l.position&&l.position.replace(/\d+$/,"")===r).sort((l,d)=>parseInt(l.position.replace(/\D+/g,""),10)-parseInt(d.position.replace(/\D+/g,""),10)).map(l=>({...l,_line:r})),c=mt(s.length);s.forEach((l,d)=>{l._col=c[d]}),n[r]=s}return n}const o=[...e];for(const r of["GK","DEF","MIL","ATT"]){const s=[];for(let l=0;l<i[r];l++){let d=o.findIndex(u=>u.job===r);if(d===-1&&(d=o.findIndex(u=>u.job2===r)),d===-1&&(d=0),o[d]){const u={...o[d],_line:r};s.push(u),o.splice(d,1)}}const c=mt(s.length);s.forEach((l,d)=>{l._col=c[d]}),n[r]=s}return n}function He(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.setProperty("display","none","important"),t.dataset.matchHidden="1"}),e&&e.style.setProperty("padding-bottom","0","important")}function Ue(e){document.querySelectorAll(".top-nav, .bottom-nav").forEach(t=>{t.style.removeProperty("display"),delete t.dataset.matchHidden}),e&&e.style.removeProperty("padding-bottom")}function Yn(e,t,i){const a=new Set,o=t.filter(d=>{const u=d.gc_type||d.id;return a.has(u)?!1:(a.add(u),!0)});let r=[];function s(d,u){const f=d._gcDef,x={purple:"linear-gradient(135deg,#3d0a7a,#7a28b8)",light_blue:"linear-gradient(135deg,#006080,#00bcd4)"},g={purple:"#9b59b6",light_blue:"#00bcd4"},p=x[f==null?void 0:f.color]||x.purple,m=g[f==null?void 0:f.color]||g.purple;return`<div class="gc-select-card" data-id="${d.id}"
      style="width:100px;border-radius:10px;border:3px solid ${u?"#FFD700":m};background:${p};
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
    </div>`}const c=d=>{e.style.overflow="",e.style.height="",e.style.display="",e.style.flexDirection="",i(d)};function l(){var u,f,x;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column";const d=r.length>0;e.innerHTML=`
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
        ${o.map(g=>{const p=r.find(m=>m.gc_type===g.gc_type);return s(g,!!p)}).join("")}
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
    </div>`,e.querySelectorAll(".gc-select-card").forEach(g=>{g.addEventListener("click",()=>{const p=g.dataset.id,m=o.find(h=>h.id===p);if(!m)return;const y=r.findIndex(h=>h.gc_type===m.gc_type);y>-1?r.splice(y,1):r.length<3&&r.push(m),l()})}),(u=e.querySelector("#gc-launch"))==null||u.addEventListener("click",()=>{d&&c(r)}),(f=e.querySelector("#gc-no-gc"))==null||f.addEventListener("click",()=>c([])),(x=e.querySelector("#gc-reset"))==null||x.addEventListener("click",()=>{r.length&&(r=[],l())})}l()}function Wn(e){var n;const t=((n=e==null?void 0:e.state)==null?void 0:n.params)||{},i=t.matchMode||"vs_ai_easy";return i==="friend"?`Match vs ${t.friendName||"Ami"}`:i==="random"?"Match vs Random":`Match vs IA — ${i.replace("vs_ai_","").toUpperCase()}`}async function Xn(e,t,i){const{state:n,navigate:a}=t;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select(`id,name,is_active,formation,stadium_card_id,
      stadium_card:cards!stadium_card_id(id,stadium_id,
        stadium_def:stadium_definitions(id,name,club_id,country_code,image_url,
          club:clubs(encoded_name,logo_url)))`).eq("owner_id",n.profile.id).order("created_at",{ascending:!1});if(!o||o.length===0){rt(e,"📋","Aucun deck. Crée un deck avant de jouer !","Créer un deck",()=>a("decks"));return}const r=o.map(f=>f.id),{data:s}=await v.from("deck_cards").select(`deck_id, position, is_starter, slot_order,
      card:cards(id,card_type,formation,stadium_id,evolution_bonus,
        player:players(id,firstname,surname_real,country_code,club_id,job,job2,
          note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
          clubs(encoded_name,logo_url)))`).in("deck_id",r).order("slot_order"),c=[...new Set((s||[]).filter(f=>{var x,g;return((x=f.card)==null?void 0:x.card_type)==="stadium"&&((g=f.card)==null?void 0:g.stadium_id)}).map(f=>f.card.stadium_id))],l={};if(c.length){const{data:f}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",c);(f||[]).forEach(x=>{l[x.id]=x}),(s||[]).forEach(x=>{var g,p;((g=x.card)==null?void 0:g.card_type)==="stadium"&&((p=x.card)!=null&&p.stadium_id)&&(x.card._stadiumDef=l[x.card.stadium_id]||null)})}let d=0;function u(){var b,R,L,G,O,ee,oe;const f=o[d],x=(s||[]).filter(te=>te.deck_id===f.id),g=x.filter(te=>{var j;return te.is_starter&&((j=te.card)==null?void 0:j.player)}).map(te=>Dt(te.card,te.position)),p=x.find(te=>{var j;return((j=te.card)==null?void 0:j.card_type)==="formation"}),m=f.formation||((b=p==null?void 0:p.card)==null?void 0:b.formation)||"4-4-2";let y=g.length>=11?Gt(g,m):null,h=((R=f.stadium_card)==null?void 0:R.stadium_def)||null;h&&y&&(y=Tt(y,h));const w=g.length>=11;He(e),e.style.height="100%",e.style.overflow="hidden",e.innerHTML=`
    <div id="deck-select-screen" style="display:flex;flex-direction:column;height:100%;overflow:hidden;background:#0a3d1e;color:#fff">

      <!-- Header : titre + nav deck + stade (flex-shrink:0) -->
      <div id="deck-top-bar" style="flex-shrink:0">
        <div style="padding:8px 16px;background:rgba(0,0,0,0.4);text-align:center">
          <div style="font-size:10px;opacity:.6;letter-spacing:2px;text-transform:uppercase">${Wn(t)}</div>
          <div style="font-size:16px;font-weight:900">Choisis ton deck</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px">
          <button id="prev-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===0?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===0?"0.1":"0.3"});color:${d===0?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===0?"default":"pointer"};flex-shrink:0">◀</button>
          <div style="flex:1;text-align:center">
            <div style="font-size:17px;font-weight:900">${f.name}</div>
            <div style="font-size:11px;opacity:.6">${m} · ${g.length}/11${f.is_active?" · ⭐":""}</div>
          </div>
          <button id="next-deck" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,${d===o.length-1?"0.05":"0.15"});border:2px solid rgba(255,255,255,${d===o.length-1?"0.1":"0.3"});color:${d===o.length-1?"rgba(255,255,255,0.2)":"#fff"};font-size:18px;cursor:${d===o.length-1?"default":"pointer"};flex-shrink:0">▶</button>
        </div>
        ${h?`
        <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),transparent);border-top:1px solid rgba(232,119,34,0.3)">
          <span>🏟️</span>
          <span style="font-size:12px;font-weight:700">${h.name}</span>
          <span style="font-size:11px;color:#FFD700;margin-left:auto">+10 aux joueurs ${((L=h.club)==null?void 0:L.encoded_name)||h.country_code||""}</span>
        </div>`:""}
      </div>

      <!-- Terrain : prend tout l'espace restant, SVG injecté après mesure -->
      <div id="deck-swipe-zone" style="flex:1;min-height:0;overflow:visible;position:relative;touch-action:pan-y;display:flex;align-items:center;justify-content:center">
        ${y?'<div class="deck-preview-wrap" style="overflow:visible;width:100%;height:100%;display:flex;align-items:center;justify-content:center"></div>':`<div style="opacity:.4;text-align:center"><div style="font-size:32px">⚠️</div><div>Deck incomplet (${g.length}/11)</div></div>`}
      </div>

      <!-- Pagination -->
      ${o.length>1?`<div style="display:flex;justify-content:center;gap:6px;padding:4px;flex-shrink:0">${o.map((te,j)=>`<div style="width:6px;height:6px;border-radius:50%;background:${j===d?"#FFD700":"rgba(255,255,255,0.25)"}"></div>`).join("")}</div>`:""}

      <!-- Boutons bas -->
      <div id="deck-bottom-bar" style="flex-shrink:0;padding:10px 14px 14px;display:flex;flex-direction:column;gap:8px;background:rgba(0,0,0,0.2)">
        <button id="validate-deck" style="width:100%;padding:14px;border-radius:12px;border:none;
          background:${w?"#1A6B3C":"rgba(255,255,255,0.08)"};
          color:${w?"#fff":"rgba(255,255,255,0.3)"};font-size:16px;font-weight:900;cursor:${w?"pointer":"default"}">
          ${w?"✅ Valider ce deck":"⚠️ Deck incomplet"}
        </button>
        <button id="cancel-deck-select" style="width:100%;padding:10px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,.5);font-size:14px;cursor:pointer">Annuler</button>
      </div>
    </div>`,requestAnimationFrame(()=>requestAnimationFrame(function te(){const j=e.querySelector(".deck-preview-wrap"),z=e.querySelector("#deck-swipe-zone");if(!j||!z||!y)return;const k=Math.max(200,z.clientHeight-40),D=Math.max(200,z.clientWidth-16),ae=z.clientWidth>=900,pe=ae?Math.min(D,Math.round(k*.95)):D,le=Math.max(52,Math.round(pe*.18));if(k<220||pe<220){requestAnimationFrame(te);return}const se=ae?null:Math.round(le*.55);j.innerHTML=xt(y,m,null,[],pe,k,[],se),j.style.cssText=`width:${pe}px;height:${k}px;overflow:visible;margin:${ae?0:60}px auto 0`;const ke=j.querySelector("svg");ke&&(ke.style.cssText="display:block;width:100%;height:100%",ke.setAttribute("preserveAspectRatio",ae?"xMidYMid meet":"none"))})),(G=document.getElementById("prev-deck"))==null||G.addEventListener("click",()=>{d>0&&(d--,u())}),(O=document.getElementById("next-deck"))==null||O.addEventListener("click",()=>{d<o.length-1&&(d++,u())}),(ee=document.getElementById("validate-deck"))==null||ee.addEventListener("click",()=>{if(!w)return;const te=t.state.params||{};t.navigate("match",{...te,matchMode:te.matchMode||i,deckId:f.id})}),(oe=document.getElementById("cancel-deck-select"))==null||oe.addEventListener("click",()=>{Ue(e),a("home")});const $=document.getElementById("deck-swipe-zone");if($){let te=0,j=0;$.addEventListener("touchstart",z=>{te=z.touches[0].clientX,j=z.touches[0].clientY},{passive:!0}),$.addEventListener("touchend",z=>{const k=z.changedTouches[0].clientX-te,D=z.changedTouches[0].clientY-j;Math.abs(k)<40||Math.abs(k)<Math.abs(D)||(k<0&&d<o.length-1?(d++,u()):k>0&&d>0&&(d--,u()))},{passive:!0})}}u()}function Je(e,t=44,i=58,n=null){return qe(e,{width:t,showStad:!!n,stadDef:n,used:e==null?void 0:e.used})}function pt(e,t,i){if(!(e!=null&&e.length))return"";const n=e.slice(0,5);let a='<div style="display:flex;align-items:center;gap:0;flex-wrap:nowrap;overflow:hidden">';return n.forEach((o,r)=>{const s=o._line||o.job||"MIL";if(a+=qe(o,{width:40,role:s,extraNote:o.boost||0}),r<n.length-1){const c=It(o,n[r+1]);a+=`<div style="width:7px;height:3px;background:${c==="#ff3333"||c==="#cc2222"?"rgba(255,255,255,0.12)":c};border-radius:2px;flex-shrink:0;margin:0 1px"></div>`}}),i!==void 0&&(a+=`<div style="margin-left:6px;background:${t};color:${t==="#00ff88"?"#000":"#fff"};border-radius:6px;padding:3px 8px;font-size:15px;font-weight:900;flex-shrink:0">${i}</div>`),a+="</div>",a}function zt(e,t,i,n,a=310,o=310,r=[],s=null){const c=Ut[t]||{},l=fn(t)||ai[t]||[],d={},u=["ATT","MIL","DEF","GK"];for(const y of u)(e[y]||[]).forEach((w,$)=>{d[`${y}${$+1}`]=w});function f(y){const h=c[y];return h?{x:h.x*a,y:h.y*o}:null}let x="";for(const[y,h]of l){const w=f(y),$=f(h);if(!w||!$)continue;const b=d[y],R=d[h],L=It(b,R);L==="#00ff88"||L==="#FFD700"?(x+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${L}" stroke-width="10" stroke-linecap="round" opacity="0.22"/>`,x+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${L}" stroke-width="3.5" stroke-linecap="round" opacity="0.95"/>`):x+=`<line x1="${w.x.toFixed(1)}" y1="${w.y.toFixed(1)}" x2="${$.x.toFixed(1)}" y2="${$.y.toFixed(1)}"
        stroke="${L}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>`}const g=Math.max(52,Math.round(a*.18)),p=Math.round(g*657/507);for(const[y,h]of Object.entries(d)){const w=f(y);if(!w||!h)continue;const $=y.replace(/[0-9]/g,""),b=r.includes(h.cardId),R=i==="attack"&&(["MIL","ATT"].includes($)||b)&&!h.used||i==="defense"&&["GK","DEF","MIL"].includes($)&&!h.used,L=n.includes(h.cardId);let G=h.boost||0;h.stadiumBonus&&(i==="attack"&&($==="ATT"||$==="MIL")||i==="defense"&&($==="GK"||$==="DEF"||$==="MIL")?G+=10:i||(G+=10));const O=Math.round(w.x-g/2),ee=Math.round(w.y-p/2);if(h.used){x+=`<image href="${`${typeof import.meta<"u"&&"/"||"/"}icons/carte-dos.png`}" x="${O}" y="${ee}" width="${g}" height="${p}" preserveAspectRatio="xMidYMid slice" class="match-used-hit" data-card-id="${h.cardId}" data-role="${$}" style="cursor:pointer"/>`;continue}const oe=qe({...h,_evolution_bonus:0},{width:g,showStad:!0,stadDef:null,role:$,extraNote:G}),te=L?"outline:3px solid #FFD700;outline-offset:2px;border-radius:8px;opacity:0.75;":"";x+=`<foreignObject x="${O-2}" y="${ee-30}" width="${g+8}" height="${p+60}" style="overflow:visible">
      <div xmlns="http://www.w3.org/1999/xhtml" style="${te}position:relative">
        ${oe}
      </div>
    </foreignObject>`,R&&(x+=`<rect x="${O}" y="${ee}" width="${g}" height="${p}" rx="5" fill="rgba(0,0,0,0.01)" class="match-slot-hit ${L?"selected":""}" data-card-id="${h.cardId}" data-role="${$}" style="cursor:pointer"/>`)}const m=s!==null?s:Math.round(Math.max(g*.7,80));return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${-m} ${-m} ${a+m*2} ${o+m*2}" width="100%" style="display:block;width:100%;margin:0 auto">
    ${x}
  </svg>`}function xt(e,t,i,n,a=300,o=300,r=[],s=null){return`<div id="match-terrain-wrap" style="position:relative;padding:0 4px">
    ${zt(e,t,i,n,a,o,r,s)}
  </div>`}async function At(e,t,i,n){var R;const{state:a,navigate:o,toast:r}=t;He(e);const s=a.params||{};if(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',!s.deckId)return Xn(e,t,i);const c=s.deckId;let l,d,u,f;try{const L=await Promise.all([v.from("decks").select("formation,name,stadium_card_id").eq("id",c).single(),v.from("deck_cards").select(`position, is_starter, slot_order,
          card:cards(id, card_type, formation, evolution_bonus,
            player:players(id,firstname,surname_real,country_code,club_id,job,job2,
              note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,
              clubs(encoded_name,logo_url)))`).eq("deck_id",c).order("slot_order")]);l=L[0].data,u=L[0].error,d=L[1].data,f=L[1].error}catch(L){console.error("[Match] Exception chargement deck:",L),rt(e,"⚠️","Erreur réseau lors du chargement du deck. Réessaie.","Retour",()=>o("home"));return}if(u||f){console.error("[Match] Erreur Supabase:",u||f),rt(e,"⚠️","Erreur lors du chargement du deck.","Retour",()=>o("home"));return}const x=(d||[]).filter(L=>{var G;return L.is_starter&&((G=L.card)==null?void 0:G.player)}).map(L=>Dt(L.card,L.position)),g=(d||[]).filter(L=>{var G;return!L.is_starter&&((G=L.card)==null?void 0:G.player)}).map(L=>Dt(L.card,L.position));if(x.length<11){rt(e,"⚠️",`Deck incomplet (${x.length}/11).`,"Compléter",()=>o("decks"));return}const p=(d||[]).find(L=>{var G;return((G=L.card)==null?void 0:G.card_type)==="formation"}),m=(l==null?void 0:l.formation)||((R=p==null?void 0:p.card)==null?void 0:R.formation)||"4-4-2",{data:y,error:h}=await v.from("cards").select("id, gc_type, gc_definition_id").eq("owner_id",a.profile.id).eq("card_type","game_changer"),{data:w}=await v.from("gc_definitions").select("*").eq("is_active",!0),$=(y||[]).map(L=>({...L,_gcDef:(w==null?void 0:w.find(G=>G.name===L.gc_type||G.id===L.gc_definition_id))||null}));let b=null;if(l!=null&&l.stadium_card_id){const{data:L}=await v.from("cards").select("stadium_id").eq("id",l.stadium_card_id).single();if(L!=null&&L.stadium_id){const{data:G}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").eq("id",L.stadium_id).single();b=G||null}}n({deckId:c,formation:m,starters:x,subsRaw:g,gcCardsEnriched:$,gcDefs:w||[],stadiumDef:b})}const Pt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},ji={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Jn(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}async function ei(e,t){const{state:i,navigate:n,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!r)return;const{data:s,error:c}=await v.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(c){a(c.message,"error");return}a("Deck créé !","success"),Bi(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>Bi(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",r.dataset.name);if(!s||s===r.dataset.name)return;const{error:c}=await v.from("decks").update({name:s}).eq("id",r.dataset.rename);if(c){a(c.message,"error");return}a("Deck renommé !","success"),ei(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await v.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:s}=await v.from("decks").delete().eq("id",r.dataset.delete);if(s){a(s.message,"error");return}a("Deck supprimé.","success"),ei(e,t)})})}async function Bi(e,t,i){const{state:n,toast:a}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("decks").select("*").eq("id",e).single(),{data:r}=await v.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),s=(r||[]).filter(m=>m.card_type==="player"&&m.player),c=(r||[]).filter(m=>m.card_type==="formation"),l=(r||[]).filter(m=>m.card_type==="stadium"),d=[...new Set(l.map(m=>m.stadium_id).filter(Boolean))];let u={};if(l.forEach(m=>{m.stadium_def&&m.stadium_id&&(u[m.stadium_id]=m.stadium_def)}),d.length&&Object.keys(u).length<d.length){const{data:m}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",d);(m||[]).forEach(y=>{u[y.id]=y})}const f=c.map(m=>m.formation).filter(Boolean),{data:x}=await v.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let g=o.formation||"4-4-2";f.length>0&&!f.includes(g)&&(g=f[0]);const p={deckId:e,name:o.name,formation:g,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:s,formationCards:c,stadiumCards:l,stadDefMap:u,availableFormations:f};(x||[]).forEach(m=>{m.is_starter?p.slots[m.position]=m.card_id:p.subs.includes(m.card_id)||p.subs.push(m.card_id)}),fi(t,p,i)}function fi(e,t,i){var l,d,u,f,x,g,p;const{navigate:n}=i;Pt[t.formation];const a=eo(t.formation),o=a.filter(m=>t.slots[m]).length;t.availableFormations.length>0?t.availableFormations:Object.keys(Pt);const r=t.subs.map(m=>t.playerCards.find(y=>y.id===m)).filter(Boolean);[...Object.values(t.slots),...t.subs];const s=((l=t.stadiumCards)==null?void 0:l.find(m=>m.id===t.stadiumCardId))||null,c=s&&((d=t.stadDefMap)==null?void 0:d[s.stadium_id])||null;e.innerHTML=`
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
      ${c?`
      <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),transparent);border-top:1px solid rgba(232,119,34,0.3)">
        <span>🏟️</span>
        <span style="font-size:12px;font-weight:700">${c.name}</span>
        <span style="font-size:11px;color:#FFD700;margin-left:auto">+10 aux joueurs ${((u=c.club)==null?void 0:u.encoded_name)||c.country_code||""}</span>
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
            ${r.map(m=>{const y={...m.player,_evolution_bonus:m.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0">
                ${qe({...y},{width:44,showStad:!0,stadDef:c})}
                <button data-remove-sub="${m.id}" style="position:absolute;top:-4px;right:-4px;width:14px;height:14px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${t.subs.length<5?'<div id="add-sub-btn" style="width:34px;height:44px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
          </div>
        </div>

        <!-- Stade -->
        <div style="flex-shrink:0;text-align:center">
          <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">🏟️</div>
          <div id="stad-btn" style="cursor:pointer">
            ${s&&c?`
            <div style="width:44px;height:56px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
              ${(f=c.club)!=null&&f.logo_url?`<img src="${c.club.logo_url}" style="width:24px;height:24px;object-fit:contain">`:'<span style="font-size:18px">🏟️</span>'}
              <span style="font-size:7px;font-weight:700;color:#4fc3f7;text-align:center">${(c.name||"").slice(0,8)}</span>
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

  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const m=e.querySelector(".deck-field-wrap"),y=e.querySelector("#deck-field-zone");if(!m||!y)return;const h=Math.max(200,y.clientHeight-40),w=Math.max(200,y.clientWidth-16),$=y.clientWidth>=900,b=$?Math.min(w,Math.round(h*.95)):w,R=Math.max(52,Math.round(b*.18)),L=$?null:Math.round(R*.55),G={GK:[],DEF:[],MIL:[],ATT:[]};a.forEach(ee=>{var k;const oe=t.slots[ee];if(!oe)return;const te=(k=t.playerCards)==null?void 0:k.find(D=>D.id===oe);if(!(te!=null&&te.player))return;const j=ee.replace(/[0-9]/g,"");G[j]||(G[j]=[]);const z=Dt(te,j);if(c){const D=c.club_id&&String(z.club_id)===String(c.club_id),ae=c.country_code&&z.country_code===c.country_code;(D||ae)&&(z.stadiumBonus=!0)}G[j].push(z)}),m.innerHTML=xt(G,t.formation,null,[],b,h,[],L),m.style.cssText=`width:${b}px;height:${h}px;overflow:visible;margin:${$?0:30}px auto 0`;const O=m.querySelector("svg");O&&(O.style.cssText="display:block;width:100%;height:100%",O.setAttribute("preserveAspectRatio",$?"xMidYMid meet":"none")),m.querySelectorAll("[data-pos]").forEach(ee=>{ee.style.cursor="pointer",ee.addEventListener("click",()=>{const oe=ee.dataset.pos;openSlotSelector(oe,t,e,i)})})})),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("save-deck").addEventListener("click",()=>Zn(t,i)),(x=document.getElementById("formation-btn"))==null||x.addEventListener("click",()=>{openFormationModal(t,e,i)}),(g=document.getElementById("stad-btn"))==null||g.addEventListener("click",()=>{openStadiumSelector(t,e,i)}),e.querySelectorAll("[data-remove-sub]").forEach(m=>{m.addEventListener("click",()=>{t.subs=t.subs.filter(y=>y!==m.dataset.removeSub),fi(e,t,i)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{Qn(t,e,i)})}function Qn(e,t,i){var c;const{openModal:n,closeModal:a}=i,o=new Set;Object.values(e.slots).filter(Boolean).forEach(l=>{var u;const d=e.playerCards.find(f=>f.id===l);(u=d==null?void 0:d.player)!=null&&u.id&&o.add(d.player.id)}),e.subs.forEach(l=>{var u;const d=e.playerCards.find(f=>f.id===l);(u=d==null?void 0:d.player)!=null&&u.id&&o.add(d.player.id)});const r=new Set,s=e.playerCards.filter(l=>{var d,u,f;return o.has((d=l.player)==null?void 0:d.id)||r.has((u=l.player)==null?void 0:u.id)?!1:(r.add((f=l.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?s.map(l=>{var x;const d=l.player,u=Jn(d),f=(d.job==="GK"?d.note_g:d.job==="DEF"?d.note_d:d.job==="MIL"?d.note_m:d.note_a)+(card.evolution_bonus||0);return`<div class="player-option" data-card-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${ji[d.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${d.firstname} ${d.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${d.job} · ${d.country_code} · ${((x=d.clubs)==null?void 0:x.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${ji[d.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(c=document.getElementById("close-sub-selector"))==null||c.addEventListener("click",a),document.querySelectorAll(".player-option").forEach(l=>{l.addEventListener("click",()=>{e.subs.push(l.dataset.cardId),a(),fi(t,e,i)})})}async function Zn(e,t){const{state:i,toast:n,navigate:a}=t,o=e.formationCards.find(c=>c.formation===e.formation),r=(o==null?void 0:o.id)||e.formationCardId;await v.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await v.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([c,l],d)=>{s.push({deck_id:e.deckId,card_id:l,position:c,is_starter:!0,slot_order:d})}),e.subs.forEach((c,l)=>{s.push({deck_id:e.deckId,card_id:c,position:`SUB${l+1}`,is_starter:!1,slot_order:100+l})}),s.length>0){const{error:c}=await v.from("deck_cards").insert(s);if(c){n(c.message,"error");return}}n("Deck enregistré ✅","success"),a("decks")}function eo(e){const t=Pt[e]||Pt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Yi(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await v.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let a=n;if(e){const r=n.filter(s=>s.max_per_user!=null);if(r.length){const{data:s}=await v.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(l=>l.id)),c={};(s||[]).forEach(l=>{c[l.booster_id]=(c[l.booster_id]||0)+1}),a=n.filter(l=>l.max_per_user==null?!0:(c[l.id]||0)<l.max_per_user)}}if(!a.length)return[];const{data:o}=await v.from("booster_drop_rates").select("*").in("booster_id",a.map(r=>r.id)).order("sort_order");return a.map(r=>({...r,rates:(o||[]).filter(s=>s.booster_id===r.id)}))}async function to(e,t){const{data:i}=await v.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await v.from("booster_claims").insert({user_id:e,booster_id:t})}function io(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,a)=>n+Number(a.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Wi=()=>Object.keys(Ut),no=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],ti={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function oo(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return qe({...t,_evolution_bonus:i},{width:140})}function Xi(e){var a;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((a=Object.entries(t).sort((o,r)=>r[1]-o[1])[0])==null?void 0:a[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function ro(e,{state:t,navigate:i,toast:n}){var u,f,x;const a=((u=t.profile)==null?void 0:u.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Yi((f=t.user)==null?void 0:f.id)).map(Xi)}catch(g){console.warn("Erreur chargement boosters DB, fallback hardcodé",g)}o.length||(o=no.map(g=>({...g,rates:[],isPub:g.id==="players_pub"})));const r=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(g=>g.data||[]),s=new Set(r.filter(g=>g.card_type==="stadium").map(g=>g.stadium_id)),c=new Set(r.filter(g=>g.card_type==="formation").map(g=>g.formation)),l=new Set(r.filter(g=>g.card_type==="game_changer").map(g=>g.gc_type)),d={};for(const g of o){if(g.allow_duplicates!==!1||!((x=g.rates)!=null&&x.length))continue;const p=[...new Set((g.rates||[]).map(y=>y.card_type))];let m=!1;for(const y of p)if(y==="stadium"){const{data:h}=await v.from("stadium_definitions").select("id");if((h||[]).some(w=>!s.has(w.id))){m=!0;break}}else if(y==="game_changer"){const{data:h}=await v.from("gc_definitions").select("name").eq("is_active",!0);if((h||[]).some(w=>!l.has(w.name))){m=!0;break}}else if(y==="formation"){const{FORMATION_LINKS:h}=await Pi(async()=>{const{FORMATION_LINKS:w}=await import("./formation-links-C5ScSaLv.js").then($=>$.q);return{FORMATION_LINKS:w}},__vite__mapDeps([0,1]));if(Object.keys(h).some(w=>!c.has(w))){m=!0;break}}else{m=!0;break}m||(d[g.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${a.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(g=>{const p=g.cost===0||a>=g.cost,m=d[g.id]===!0;return`<div class="booster-card ${!p||m?"disabled":""}" data-booster="${g.id}" style="position:relative">
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
            ${m?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(g=>{g.addEventListener("click",async()=>{const p=o.find(m=>m.id===g.dataset.booster);if(p){g.style.opacity="0.5",g.style.pointerEvents="none";try{await ao(p,{state:t,toast:n,navigate:i,container:e})}catch(m){n(m.message,"error"),g.style.opacity="",g.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(g=>{g.addEventListener("click",p=>{p.stopPropagation();const m=o.find(y=>y.id===g.dataset.boosterId);po(m)})})}async function ao(e,{state:t,toast:i,navigate:n,container:a}){var u,f;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await fo();const{data:o}=await v.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((o||[]).filter(x=>x.card_type==="player").map(x=>x.player_id)),s=new Set((o||[]).filter(x=>x.card_type==="formation").map(x=>x.formation));let c=[],l=null;try{if((u=e.rates)!=null&&u.length)c=await ii(t.profile,e);else{const x=e.type||"player";x==="player"?c=await Ji(t.profile,e.cardCount,e.cost):x==="game_changer"?c=await Qi(t.profile,e.cardCount,e.cost):x==="formation"?c=await Zi(t.profile,e.cost):c=await ii(t.profile,e)}}catch(x){l=x.message||String(x),console.error("[Booster] Erreur:",x)}if(c!=null&&c.length&&e._boosterId&&await to(t.user.id,e._boosterId),!(c!=null&&c.length)){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",x.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${l||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(x),(f=x.querySelector("#anim-close-err"))==null||f.addEventListener("click",()=>x.remove());return}c.forEach(x=>{x.card_type==="player"&&x.player?x.isDuplicate=r.has(x.player.id):x.card_type==="formation"&&(x.isDuplicate=s.has(x.formation))});const{data:d}=await v.from("users").select("*").eq("id",t.profile.id).single();d&&(t.profile=d),en(c,e,n)}function so(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ye(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function lo(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>Ye(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>Ye(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&Ye(n)>=6),i.length||(i=e.filter(n=>Ye(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&Ye(n)>=1&&Ye(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function ii(e,t){if(t.cost>0){const{error:f}=await v.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(f)throw f}const i=t.allow_duplicates!==!1;let n=[];const{data:a,error:o}=await v.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:f}=await v.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=f||[]}else n=a||[];const r=new Set(n.filter(f=>f.card_type==="player").map(f=>f.player_id)),s=new Set(n.filter(f=>f.card_type==="formation").map(f=>f.formation)),c=new Set(n.filter(f=>f.card_type==="game_changer").map(f=>f.gc_type)),l=new Set(n.filter(f=>f.card_type==="stadium").map(f=>f.stadium_id).filter(Boolean)),d=new Set,u=[];for(let f=0;f<(t.cardCount||5);f++){const x=io(t.rates);if(x){if(x.card_type==="player"){const g=L=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[L]||L,p=x.rarity?g(x.rarity):null;let m=v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(m=m.eq("rarity",p));const{data:y}=await m;let h=y||[];if((x.note_min||x.note_max)&&(h=h.filter(L=>{const G=Math.max(Number(L.note_g)||0,Number(L.note_d)||0,Number(L.note_m)||0,Number(L.note_a)||0);return(!x.note_min||G>=x.note_min)&&(!x.note_max||G<=x.note_max)})),h.length||(x.note_min||x.note_max?(h=y||[],console.warn("[Booster] Aucun joueur avec note",x.note_min,"-",x.note_max,"— fallback rareté uniquement")):h=y||[]),!h.length)continue;let w=h.filter(L=>!d.has(L.id));if(i)w.length||(w=h);else if(w=w.filter(L=>!r.has(L.id)),!w.length)continue;const $=w[Math.floor(Math.random()*w.length)];d.add($.id);const b=r.has($.id),{data:R}=await v.from("cards").insert({owner_id:e.id,player_id:$.id,card_type:"player"}).select().single();R&&(u.push({...R,player:$,isDuplicate:b}),v.rpc("record_transfer",{p_card_id:R.id,p_player_id:$.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(x.card_type==="game_changer"){const{data:g}=await v.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=g!=null&&g.length?g:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],m=i?p:p.filter($=>!c.has($.name));if(!i&&!m.length)continue;const h=m[Math.floor(Math.random()*m.length)].name,{data:w}=await v.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:h}).select().single();w&&u.push(w)}else if(x.card_type==="formation"){const g=Wi(),p=i?g:g.filter(w=>!s.has(w));if(!i&&!p.length)continue;const m=p[Math.floor(Math.random()*p.length)],y=s.has(m),{data:h}=await v.from("cards").insert({owner_id:e.id,card_type:"formation",formation:m}).select();h!=null&&h[0]&&u.push({...h[0],isDuplicate:y})}else if(x.card_type==="stadium"){const{data:g,error:p}=await v.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(g!=null&&g.length)){console.warn("[Booster] Aucun stade en DB");continue}const m=i?g:g.filter($=>!l.has($.id));if(!i&&!m.length)continue;const y=m[Math.floor(Math.random()*m.length)],{data:h,error:w}=await v.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:y.id}).select("id,card_type,stadium_id").single();if(w){console.error("[Booster] insert stadium card:",w.message);continue}h&&u.push({...h,rarity:"normal",_stadiumDef:y})}}}return u}async function Ji(e,t,i){if(i>0){const{error:l}=await v.from("users").update({credits:e.credits-i}).eq("id",e.id);if(l)throw l}const{data:n}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const a=n.filter(l=>l.job==="GK"),o=n.filter(l=>l.job!=="GK"),r=!e.first_booster_opened&&a.length>0,s=[];for(let l=0;l<t;l++){const d=l===0&&r?a:l===0?o:n,u=so(),f=lo(d,u);f&&s.push(f)}r&&await v.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:c}=await v.from("cards").insert(s.map(l=>({owner_id:e.id,player_id:l.id,card_type:"player"}))).select();return(c||[]).forEach((l,d)=>{v.rpc("record_transfer",{p_card_id:l.id,p_player_id:s[d].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((l,d)=>({...c[d],player:l}))}async function Qi(e,t,i){const{error:n}=await v.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:a}=await v.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=a!=null&&a.length?a:Object.keys(ti).map(d=>({name:d,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const d=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:d.name,gc_definition_id:d.id||null}}),{data:s,error:c}=await v.from("cards").insert(r).select();return c&&console.error("[Booster GC] Erreur insert:",c.message,c),(s||[]).map(d=>{const u=a==null?void 0:a.find(f=>f.name===d.gc_type||f.id===d.gc_definition_id);return{...d,_gcDef:u||null}})}async function Zi(e,t){const{error:i}=await v.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await v.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),a=new Set((n||[]).map(d=>d.formation)),o=Wi(),r=o[Math.floor(Math.random()*o.length)],s=a.has(r),{data:c,error:l}=await v.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return l&&console.error("[Booster Formation] Erreur insert:",l.message,l),(c||[]).map(d=>({...d,isDuplicate:s}))}function en(e,t,i,n=null){var te,j;if(!e||e.length===0){const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",z.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(z),(te=z.querySelector("#anim-close-err"))==null||te.addEventListener("click",()=>z.remove());return}e=[...e].sort((z,k)=>{const D=z.player?Ye(z.player):-1;return(k.player?Ye(k.player):-1)-D});const a=document.createElement("div");a.id="booster-anim-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let o=!1;const r=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let c=!1;const l=z=>z.touches&&z.touches[0]?z.touches[0].clientX:z.clientX;function d(z){o||(c=!0,s.style.opacity="1",u(z))}function u(z){if(!c||o)return;const k=r.getBoundingClientRect(),D=l(z)-k.left,ae=Math.max(0,Math.min(1,D/k.width));s.style.width=ae*k.width+"px",ae>=.82&&x()}function f(){o||(c=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function x(){var k;if(o)return;o=!0,c=!1,s.style.width="100%",s.style.opacity="1",(k=document.getElementById("cut-flash"))==null||k.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const z=document.getElementById("cut-hint");z&&(z.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",y(0)},620)}r.addEventListener("pointerdown",d),window.addEventListener("pointermove",u),window.addEventListener("pointerup",f),r.addEventListener("touchstart",d,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",f);let g=0,p=!1;const m=new Set;function y(z){g=z,document.getElementById("reveal-phase").style.display="flex",h(),w(z,0),G()}function h(){const z=document.getElementById("card-dots");z&&(z.innerHTML=e.map((k,D)=>`<div class="card-dot" data-i="${D}" style="width:8px;height:8px;border-radius:50%;background:${D===g?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),z.querySelectorAll(".card-dot").forEach(k=>k.addEventListener("click",()=>b(parseInt(k.dataset.i)))))}function w(z,k){var V,T;const D=e[z],ae=document.getElementById("card-counter"),pe=document.getElementById("card-track");ae&&(ae.textContent=`Carte ${z+1} / ${e.length}`);const le=document.getElementById("reveal-btns");le&&(le.style.display=z===e.length-1?"flex":"none");const se=D.card_type==="player"&&((V=D.player)==null?void 0:V.rarity)==="legende",ke=!m.has(z);m.add(z);let K=0;if(D.card_type==="player"&&D.player){const M=D.player,P=M.job||"ATT";K=Number(P==="GK"?M.note_g:P==="DEF"?M.note_d:P==="MIL"?M.note_m:M.note_a)||0}const Q=M=>{pe.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${se?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${co(D)}</div>
          ${D.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const P=document.getElementById("current-card-wrap");k!==0?(P.style.transition="none",P.style.transform=`translateX(${k>0?100:-100}%)`,requestAnimationFrame(()=>{P.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",P.style.transform="translateX(0)"})):P.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),M||se?ee():oe(),h()};ke&&(((T=D.player)==null?void 0:T.rarity)==="legende"||K>=8)&&D.card_type==="player"&&D.player?$(D,()=>Q(!0)):Q(!1)}function $(z,k){var we;p=!0;const D=z.player,ae=`https://flagsapi.com/${D.country_code}/flat/64.png`,pe=(we=D.clubs)==null?void 0:we.logo_url,le=D.face?"/"+D.face.replace(/^public\//,"").replace(/^\//,""):null,se=D.job||"ATT",ke=Number(se==="GK"?D.note_g:se==="DEF"?D.note_d:se==="MIL"?D.note_m:D.note_a)||0,K=z.evolution_bonus||0,Q=ke+K,V=D.rarity==="legende",T=Q>=18,M=document.getElementById("walkout-overlay"),P=document.getElementById("walkout-stage");if(!M||!P){p=!1,k();return}let H=null;V&&(H=new Audio("/sounds/Legendary.mp3"),H.volume=.8,H.play().catch(()=>{})),M.style.display="flex";const U=()=>{const me=P.firstElementChild;me&&(me.classList.remove("wo-in"),me.classList.add("wo-out"))},C=1800,N=400;P.innerHTML=`<img class="wo-in" src="${ae}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(U,C),setTimeout(()=>{var me;P.innerHTML=pe?`<img class="wo-in" src="${pe}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((me=D.clubs)==null?void 0:me.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},C+N),setTimeout(U,C*2+N),setTimeout(()=>{P.innerHTML=le?`<img class="wo-in" src="${le}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(C+N)*2),setTimeout(U,(C+N)*2+C);const _e=T?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[se]||"#fff";setTimeout(()=>{P.innerHTML=`<div class="wo-in" style="
        font-size:${T?"120px":"90px"};font-weight:900;color:${_e};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${_e}, 0 0 60px ${_e};
        ${T?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${Q}
      </div>`,T&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(C+N)*3),setTimeout(U,(C+N)*3+C),setTimeout(()=>{M.style.display="none",P.innerHTML="",p=!1,H&&!V&&H.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),k()},(C+N)*4)}function b(z){if(p||z<0||z>=e.length||z===g)return;const k=z>g?1:-1;g=z,w(z,k)}function R(){b(g+1)}function L(){b(g-1)}function G(){const z=document.getElementById("card-viewport");if(!z||z._swipeBound)return;z._swipeBound=!0;let k=0,D=0,ae=0,pe=!1;const le=V=>V.touches?V.touches[0].clientX:V.clientX,se=V=>V.touches?V.touches[0].clientY:V.clientY,ke=V=>{pe=!0,k=le(V),D=se(V),ae=0},K=V=>{if(!pe)return;ae=le(V)-k;const T=se(V)-D;if(Math.abs(ae)<Math.abs(T))return;const M=document.getElementById("current-card-wrap");M&&(M.style.transition="none",M.style.transform=`translateX(${ae*.6}px) rotate(${ae*.02}deg)`)},Q=()=>{if(!pe)return;pe=!1;const V=document.getElementById("current-card-wrap"),T=55;ae<=-T&&g<e.length-1?R():ae>=T&&g>0?L():V&&(V.style.transition="transform .2s ease",V.style.transform="translateX(0)")};z.addEventListener("pointerdown",ke),z.addEventListener("pointermove",K),z.addEventListener("pointerup",Q),z.addEventListener("pointercancel",Q),z.addEventListener("touchstart",ke,{passive:!0}),z.addEventListener("touchmove",K,{passive:!0}),z.addEventListener("touchend",Q),z.addEventListener("click",V=>{if(Math.abs(ae)>8)return;const T=z.getBoundingClientRect();V.clientX-T.left>T.width/2?R():L()})}let O=null;function ee(){const z=document.getElementById("fireworks-canvas");if(!z)return;z.width=window.innerWidth,z.height=window.innerHeight;const k=z.getContext("2d"),D=[];function ae(){const le=Math.random()*z.width,se=Math.random()*z.height*.6,ke=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],K=ke[Math.floor(Math.random()*ke.length)];for(let Q=0;Q<60;Q++){const V=Math.PI*2/60*Q,T=2+Math.random()*5;D.push({x:le,y:se,vx:Math.cos(V)*T,vy:Math.sin(V)*T,alpha:1,color:K,size:2+Math.random()*3})}}ae(),O=setInterval(ae,600);function pe(){if(document.getElementById("fireworks-canvas")){k.clearRect(0,0,z.width,z.height);for(let le=D.length-1;le>=0;le--){const se=D[le];if(se.x+=se.vx,se.y+=se.vy+.08,se.vy*=.98,se.alpha-=.018,se.alpha<=0){D.splice(le,1);continue}k.globalAlpha=se.alpha,k.fillStyle=se.color,k.beginPath(),k.arc(se.x,se.y,se.size,0,Math.PI*2),k.fill()}k.globalAlpha=1,(O!==null||D.length>0)&&requestAnimationFrame(pe)}}pe()}function oe(){O!==null&&(clearInterval(O),O=null);const z=document.getElementById("fireworks-canvas");z&&z.getContext("2d").clearRect(0,0,z.width,z.height)}if(n){const z=document.getElementById("reveal-btns");z&&(z.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(j=document.getElementById("reveal-next"))==null||j.addEventListener("click",()=>{oe(),a.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{oe(),a.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{oe(),a.remove(),i("boosters")})}function co(e){var t,i,n,a;if(e.card_type==="player"&&e.player)return oo(e);if(e.card_type==="game_changer"){const o=e._gcDef,r=(o==null?void 0:o.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},c={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[o==null?void 0:o.color]||s.purple,d=c[o==null?void 0:o.color]||c.purple,u=(o==null?void 0:o.name)||e.gc_type||"Game Changer",f=(o==null?void 0:o.effect)||((t=ti[e.gc_type])==null?void 0:t.desc)||"",x=o!=null&&o.image_url?`/icons/${o.image_url}`:null,g=((i=ti[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${d};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${d}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${u.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${x?`<img src="${x}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${g}</span>`}
      </div>
      <!-- Barre effet (bas, fond sombre) -->
      <div style="padding:8px 10px;background:rgba(0,0,0,0.38);text-align:center;flex-shrink:0">
        <div style="font-size:10px;color:rgba(255,255,255,0.9);line-height:1.4;font-weight:500">${f.slice(0,55)}</div>
      </div>
    </div>`}if(e.card_type==="formation")return`<div style="width:140px;height:200px;background:linear-gradient(135deg,#1A6B3C,#2a8f52);border-radius:12px;border:3px solid #2a8f52;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:16px">
      <div style="font-size:40px">🏟️</div>
      <div style="font-size:8px;background:rgba(255,255,255,0.2);color:#fff;padding:2px 8px;border-radius:10px;letter-spacing:.5px">FORMATION</div>
      <div style="font-weight:900;font-size:22px;color:#fff">${e.formation}</div>
    </div>`;if(e.card_type==="stadium"){const o=e._stadiumDef,r=(o==null?void 0:o.name)||"Stade",s=((n=o==null?void 0:o.club)==null?void 0:n.encoded_name)||(o==null?void 0:o.country_code)||"—",c=o!=null&&o.image_url?`/icons/${o.image_url}`:((a=o==null?void 0:o.club)==null?void 0:a.logo_url)||(o!=null&&o.country_code?`https://flagsapi.com/${o.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return`<div style="width:160px;height:230px;background:linear-gradient(160deg,#E87722,#c45a00);border-radius:14px;border:3px solid #c45a00;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px rgba(232,119,34,0.6)">
      <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center;flex-shrink:0">
        <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
        <div style="font-size:${r.length>16?9:11}px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px">${r}</div>
      </div>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">
        ${c?`<img src="${c}" style="max-width:100px;max-height:100px;object-fit:contain;border-radius:6px">`:'<span style="font-size:52px">🏟️</span>'}
      </div>
      <div style="padding:8px 10px;background:rgba(0,0,0,0.3);text-align:center;flex-shrink:0">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s}</div>
        <div style="font-size:12px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
      </div>
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function po(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const a={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const a=document.getElementById("mw-ad-cd");a&&(a.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function go(e,{state:t,navigate:i,toast:n,refreshProfile:a}){var f,x;const{data:o}=await v.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let r=Array.isArray((f=t.profile)==null?void 0:f.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await v.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await Yi()).find(m=>(m.name||"").toLowerCase().includes("new player"));p&&(s=Xi(p))}catch(g){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',g)}const c=r.length;let l=0;e.innerHTML=`
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
  </div>`;const d=async()=>{await v.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function u(){var h;if(l>=c||!r.length){await v.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),a&&await a(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const g=r[0],{data:p}=await v.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let m=[];try{if(g.type==="formation")m=await Zi(t.profile,0);else if(g.type==="game_changer")m=await Qi(t.profile,g.count||3,0);else if(s&&((h=s.rates)!=null&&h.length)){const w={...s,cost:0,cardCount:g.count||s.cardCount||5};m=await ii(t.profile,w),g.guaranteeGK&&!t.profile.first_booster_opened&&(m.some(b=>b.player&&b.player.job==="GK")||await mo(t.profile,m),await v.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else m=await Ji(t.profile,g.count||5,0)}catch(w){n(w.message||"Erreur ouverture booster","error");return}r.shift(),l++,await d();const y=g.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:g.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${l}/${c})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};en(m,y,i,()=>{u()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>u())}async function mo(e,t){try{const{data:i}=await v.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],a=t.findIndex(r=>r.player);if(a===-1)return;const o=t[a];await v.from("cards").update({player_id:n.id}).eq("id",o.id),t[a]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}function We(){return Math.min(window.innerWidth-40,860)}function ot(){return Math.round(We()*1.1)}function xo(e){var a,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((a=e.clubs)==null?void 0:a.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:Lt(e)}}function tn(e){var o,r,s;if(!e)return"";const t=c=>c?qe({...c,_evolution_bonus:0},{width:52,role:c._line||c.job,showStad:!!c.stadiumBonus,extraNote:c.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
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
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(c=>qe({...c,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:c._line||c.job,showStad:!!c.stadiumBonus})).join("");if(r.innerHTML=`
    <div style="animation:goalPop 0.4s ease-out;text-align:center">
      <div style="font-size:clamp(48px,10vw,80px);margin-bottom:8px">⚽</div>
      <div style="font-size:clamp(28px,6vw,48px);font-weight:900;color:#22c55e;letter-spacing:2px;text-shadow:0 0 20px #22c55e">BUT !</div>
      <div style="display:flex;gap:8px;justify-content:center;margin:16px 0">${s}</div>
      <div style="font-size:clamp(32px,7vw,56px);font-weight:900;color:#fff;margin-top:8px">
        ${n?`<span style="color:#22c55e">${t}</span>`:t}
        <span style="color:rgba(255,255,255,0.4);margin:0 12px">—</span>
        ${n?i:`<span style="color:#22c55e">${i}</span>`}
      </div>
    </div>`,document.body.appendChild(r),!document.getElementById("goal-anim-style")){const c=document.createElement("style");c.id="goal-anim-style",c.textContent=`
      @keyframes goalPop {
        from { transform: scale(0.5); opacity: 0; }
        to   { transform: scale(1);   opacity: 1; }
      }`,document.head.appendChild(c)}setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),a==null||a()},400)},1800)}function bo(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="sub-anim-overlay",a.style.cssText=`
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
      }`,document.head.appendChild(o)}document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.3s",setTimeout(()=>a.remove(),300)},i)}function Rt(e,t){return e.reduce((i,n)=>i+milNoteWithBonus(n,t),0)}function Nt(e){let t=0;for(let i=0;i<e.length-1;i++){const n=It(e[i],e[i+1]);n==="#00ff88"?t+=2:n==="#FFD700"&&(t+=1)}return t}function qi(e,t,i,n,a){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,r)=>{const s=r<e.length-1?It(o,e[r+1]):null,c=!s||s==="#ff3333"||s==="#cc2222",l=s==="#00ff88"?"+2":s==="#FFD700"?"+1":"";return milNoteWithBonus(o,a),o.stadiumBonus||a&&(a.club_id&&String(o.club_id)===String(a.club_id)||a.country_code&&(o.country_code,a.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${r}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${qe({...o,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:a,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${r<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${r}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${c?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${c?"none":`0 0 8px ${s}`}">
            ${l?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${l}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${Rt(e,a)} + ${Nt(e)} liens = <b style="color:#fff">${Rt(e,a)+Nt(e)}</b>
      </div>
    </div>`}async function yo(e,t){const{state:i}=t,a=(i.params||{}).matchMode||"vs_ai_easy",o=a.replace("vs_ai_",""),r=a;await At(e,t,a,async({deckId:s,formation:c,starters:l,subsRaw:d,gcCardsEnriched:u,gcDefs:f,stadiumDef:x})=>{try{let g=Gt(l,c);x&&(g=Tt(g,x),Ft(d,x));const p=await ho(c,o),m=p.lines||p,y=async h=>{try{const{data:w,error:$}=await v.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:s,status:"in_progress"}).select().single();if($){console.error("[MatchIA] Erreur création match:",$),rt(e,"⚠️","Impossible de créer le match ("+$.message+").","Retour",()=>t.navigate("home"));return}const b=p.stadiumDef||null;b&&m&&(Tt(m,b),Ft(p.subs||[],b));const R={gcDefs:f||[],matchId:w==null?void 0:w.id,mode:r,difficulty:o,formation:c,homeTeam:g,aiTeam:m,homeSubs:d,subsUsed:0,maxSubs:Math.min(d.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:b,homeScore:0,aiScore:0,gcCards:h,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};wo(e,R,t)}catch(w){console.error("[MatchIA] Exception launchMatch:",w),rt(e,"⚠️","Erreur au lancement du match : "+w.message,"Retour",()=>t.navigate("home"))}};if(!u.length){y([]);return}Yn(e,u,y)}catch(g){console.error("[MatchIA] Exception setup:",g),rt(e,"⚠️","Erreur de préparation du match : "+g.message,"Retour",()=>t.navigate("home"))}})}async function ho(e,t){var m;const{data:i}=await v.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:vo(e),subs:[],gcCards:[],stadiumDef:null};const n=gt[e]||gt["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function r(y,h,w){var $,b;return o.add(y.id),{cardId:"ai-"+y.id+"-"+w,id:y.id,firstname:y.firstname,name:y.surname_real,country_code:y.country_code,club_id:y.club_id,job:y.job,job2:y.job2,note_g:Number(y.note_g)||0,note_d:Number(y.note_d)||0,note_m:Number(y.note_m)||0,note_a:Number(y.note_a)||0,rarity:y.rarity,skin:y.skin,hair:y.hair,hair_length:y.hair_length,clubName:(($=y.clubs)==null?void 0:$.encoded_name)||null,clubLogo:((b=y.clubs)==null?void 0:b.logo_url)||null,boost:0,used:!1,_line:h}}for(const y of["GK","DEF","MIL","ATT"]){const h=i.filter(L=>L.job===y&&!o.has(L.id)),w=i.filter(L=>L.job!==y&&!o.has(L.id)),$=[...h,...w],b=[];for(let L=0;L<n[y];L++){const G=$[L];G&&b.push(r(G,y,L))}const R=mt(b.length);b.forEach((L,G)=>{L._col=R[G]}),a[y]=b}const c=i.filter(y=>!o.has(y.id)).slice(0,5).map((y,h)=>r(y,y.job,100+h)),u=Object.keys(Ae).sort(()=>Math.random()-.5).slice(0,3).map((y,h)=>{var w,$;return{id:"ai-gc-"+h,gc_type:y,name:((w=Ae[y])==null?void 0:w.name)||y,icon:(($=Ae[y])==null?void 0:$.icon)||"⚡"}}),f=Object.values(a).flat(),x={};f.forEach(y=>{y.club_id&&(x[y.club_id]=(x[y.club_id]||0)+1)});const g=(m=Object.entries(x).sort((y,h)=>h[1]-y[1])[0])==null?void 0:m[0];let p=null;if(g){const{data:y}=await v.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",g).single();y&&(p={club_id:y.id,country_code:null,name:y.encoded_name+" Stadium",club:{encoded_name:y.encoded_name,logo_url:y.logo_url}})}return{lines:a,subs:c,gcCards:u,stadiumDef:p}}function vo(e){const t=gt[e]||gt["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let a=0;for(const o of["GK","DEF","MIL","ATT"]){const r=[];for(let c=0;c<t[o];c++){const l=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+a,id:"fake-"+a,firstname:"IA",name:n[a%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?l:2,note_d:o==="DEF"?l:2,note_m:o==="MIL"?l:2,note_a:o==="ATT"?l:2,rarity:"normal",boost:0,used:!1,_line:o}),a++}const s=mt(r.length);r.forEach((c,l)=>{c._col=s[l]}),i[o]=r}return i}function wo(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:100%;max-width:900px;margin:0 auto">${zt(t.aiTeam,t.formation,null,[],We(),ot())}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>_o(e,t,i),5e3)}const Qe=e=>xo(e);function _o(e,t,i){const n=t.homeTeam.MIL||[],a=t.aiTeam.MIL||[],o=t.stadiumDef||null,r=t.aiStadiumDef||null,s=Rt(n,o)+Nt(n),c=Rt(a,r)+Nt(a),l=s>=c;e.innerHTML=`
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

    ${qi(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${qi(a,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const d=()=>{const g=(p,m)=>e.querySelectorAll(p).forEach((y,h)=>{setTimeout(()=>{y.style.opacity="1",y.style.transform="translateY(0) scale(1)"},m+h*90)});g(".duel-card-home",150),g(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,m)=>{setTimeout(()=>{p.style.opacity="1"},m*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(m=>m.style.opacity="1")},1250),setTimeout(()=>{u("score-home",s,800),u("score-ai",c,800)},1500)};function u(g,p,m){const y=document.getElementById(g);if(!y)return;const h=performance.now(),w=$=>{const b=Math.min(1,($-h)/m);y.textContent=Math.round(p*(1-Math.pow(1-b,3))),b<1?requestAnimationFrame(w):y.textContent=p};requestAnimationFrame(w)}requestAnimationFrame(d),t.attacker=l?"home":"ai";const f=l?Vi():null;l&&(t.boostCard={value:f}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(g=>Qe(g)),aiPlayers:a.map(g=>Qe(g)),homeTotal:s,aiTotal:c,text:`Duel milieu : ${t.clubName} ${s} – ${c} IA → ${l?t.clubName+" attaque":"IA attaque"}`});const x=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",Te(e,t,i),t.attacker==="ai"&&setTimeout(()=>Ot(e,t,i),800)};setTimeout(()=>{const g=document.getElementById("score-home"),p=document.getElementById("score-ai"),m=document.getElementById(l?"duel-row-home":"duel-row-ai"),y=document.getElementById(l?"duel-row-ai":"duel-row-home"),h=l?g:p,w=l?p:g;h&&(h.style.fontSize="80px",h.style.color=l?"#FFD700":"#ff6b6b",h.style.animation="duelPulse .5s ease"+(l?", duelGlow 1.5s ease infinite .5s":"")),w&&(w.style.opacity="0.25"),setTimeout(()=>{m&&(m.style.transformOrigin="center",m.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",m.style.zIndex="5"),setTimeout(()=>{var b;const $=document.getElementById("duel-shock");if($){const R=(b=y||m)==null?void 0:b.getBoundingClientRect(),L=e.querySelector(".match-screen").getBoundingClientRect();R&&($.style.top=R.top-L.top+R.height/2+"px"),$.style.animation="shockwave .5s ease-out forwards"}y&&(y.style.transformOrigin="center",y.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var b;const $=document.getElementById("duel-finale");$&&($.innerHTML=`
          <div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,0.5)">
            ${l?`⚽ ${t.clubName}<br>gagne le milieu et attaque !`:"😔 L'IA gagne l'engagement<br>et attaque !"}
          </div>
          ${l?`
          <div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,0.5)">
            <div style="font-size:10px;color:rgba(0,0,0,0.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div>
            <div style="font-size:46px;line-height:1">⚡</div>
            <div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+${f}</div>
            <div style="font-size:10px;color:rgba(0,0,0,0.55);margin-top:4px">Applicable sur n'importe quel joueur</div>
          </div>`:""}
          <button id="start-match-btn" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,0.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">
            ▶ Commencer le match
          </button>`,$.style.transition="opacity .45s ease",$.style.opacity="1",$.style.pointerEvents="auto",(b=document.getElementById("start-match-btn"))==null||b.addEventListener("click",x))},600)},700)},2800)}function Te(e,t,i){var R,L,G,O,ee,oe,te,j,z;const n=t.selected.map(k=>k.cardId),a=t.usedSubIds||[],o=t.homeSubs.filter(k=>!a.includes(k.cardId)),s=Object.values(t.homeTeam).flat().filter(k=>k.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,c=!["GK","DEF","MIL","ATT"].some(k=>(t.aiTeam[k]||[]).some(D=>!D.used)),l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(k=>!k.used),d=t.phase==="attack"&&c&&l.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(k=>!k.used).map(k=>k.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",f=t.phase==="attack",x=t.phase==="defense",g=t.phase==="finished",m=(t.homeSubs||[]).filter(k=>!(t.usedSubIds||[]).includes(k.cardId)).length>0&&t.subsUsed<t.maxSubs,y=f&&l.length===0&&!m,h=t.gcCards.filter(k=>!t.usedGc.includes(k.id)),w=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const D=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${pt((D.players||[]).map(ae=>({...ae,used:!1})),"#ff6b6b",D.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const D=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${pt((D.players||[]).map(ae=>({...ae,used:!1})),"#00ff88",D.total)}
          </div>`}const k=t.log[t.log.length-1];return k?'<div style="padding:2px 4px">'+tn(k)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const k=window.innerWidth>=700,D=(T,M,P)=>{var Se,Ce;const H=(t.gcDefs||[]).find(Fe=>Fe.name===T.gc_type),U={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[H==null?void 0:H.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",C={purple:"#b06ce0",light_blue:"#00d4ef"}[H==null?void 0:H.color]||"#b06ce0",N=(H==null?void 0:H.name)||T.gc_type,Ee=(H==null?void 0:H.effect)||((Se=Ae[T.gc_type])==null?void 0:Se.desc)||"",_e=H!=null&&H.image_url?`/icons/${H.image_url}`:null,we=((Ce=Ae[T.gc_type])==null?void 0:Ce.icon)||"⚡",me=Math.round(P*.22),Le=Math.round(P*.22),$e=P-me-Le,he=N.length>12?7:9;return`<div class="gc-mini" data-gc-id="${T.id}" data-gc-type="${T.gc_type}"
          style="box-sizing:border-box;width:${M}px;height:${P}px;border-radius:10px;border:2px solid ${C};background:${U};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${me}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${he}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${M-6}px">${N}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${$e}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${_e?`<img src="${_e}" style="max-width:${M-10}px;max-height:${$e-6}px;object-fit:contain">`:`<span style="font-size:${Math.round($e*.55)}px">${we}</span>`}
          </div>
          <div style="height:${Le}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${Ee.slice(0,38)}</span>
          </div>
        </div>`},ae=(T,M)=>{var P;return`<div id="boost-card"
          style="box-sizing:border-box;width:${T}px;height:${M}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(M*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(M*.2)}px">⚡</div>
            <div style="font-size:${Math.round(M*.09)}px;color:#000;font-weight:900">+${(P=t.boostCard)==null?void 0:P.value}</div>
          </div>`},pe=(T,M)=>M?ae(130,175):D(T,130,175),le=(T,M)=>M?ae(68,95):D(T,68,95),se=k?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ke=g?`<button id="btn-results" style="${se};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${se};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:y?`<button id="btn-pass" style="${se};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:f?`<button id="btn-action" style="${se};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:x?`<button id="btn-action" style="${se};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${se};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,K=f||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",Q=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${k?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(T=>`<div class="sub-btn-col" data-sub-id="${T.cardId}" style="cursor:pointer;flex-shrink:0">${Je(T,76,100)}</div>`).join("")}
      </div>`,V=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${xt(t.homeTeam,t.formation,t.phase,n,We(),ot(),d)}
        </div>
      </div>`;return k?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Q}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${V}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ke}${K}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${h.map(T=>pe(T,!1)).join("")}
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
            ${h.map(T=>le(T,!1)).join("")}
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
          <div>${ke}${K}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(k=>{var D,ae,pe;if(k.type==="duel"){const le=k.isGoal,se=k.homeScored?"#FFD700":le?"#ff6b6b":"rgba(255,255,255,0.3)",ke=k.homeScored?"⚽ BUT !":le?"⚽ BUT IA !":(D=k.homePlayers)!=null&&D.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${le?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${se};margin-bottom:4px">
                <div style="font-size:9px;color:${se};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${ke}</div>
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
  </div>`;function $(){const k=e.querySelector(".match-screen");if(!k)return;const D=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);k.style.bottom="auto",k.style.height=D+"px",k.style.minHeight=D+"px",k.style.maxHeight=D+"px",k.style.overflow="hidden";const ae=e.querySelector("#mobile-action-bar"),pe=e.querySelector("#mobile-play-area");ae&&pe&&(pe.style.paddingBottom=ae.offsetHeight+"px")}if($(),setTimeout($,120),setTimeout($,400),setTimeout($,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",$),window.visualViewport.addEventListener("scroll",$)),window.addEventListener("resize",$)),function(){const D=e.querySelector(".terrain-wrapper svg");D&&(D.removeAttribute("width"),D.removeAttribute("height"),D.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",D.setAttribute("viewBox","-26 -26 352 352"),D.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const k=e.querySelector(".terrain-wrapper svg");k&&(k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let k=!1,D=30;const ae=()=>document.getElementById("match-timer"),pe=()=>{const le=ae();if(!le)return;const se=String(Math.floor(D/60)).padStart(2,"0"),ke=String(D%60).padStart(2,"0");le.textContent=` ${se}:${ke}`,le.style.color=k?"#ff2222":"#ff9500",le.style.fontWeight="900"};pe(),t._timerInt=setInterval(()=>{if(D--,D<0)if(!k)k=!0,D=15,pe();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const le=document.createElement("div");le.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",le.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(le),setTimeout(()=>{le.remove(),_t(e,t,i)},2500)}else pe()},1e3)}(R=document.getElementById("match-quit"))==null||R.addEventListener("click",()=>{Ue(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,_t(e,t,i))}),(L=document.getElementById("view-ai"))==null||L.addEventListener("click",()=>Co(t,i)),(G=document.getElementById("toggle-history"))==null||G.addEventListener("click",()=>{var k;(k=document.getElementById("match-history-panel"))==null||k.classList.add("open")}),(O=document.getElementById("close-history"))==null||O.addEventListener("click",()=>{var k;(k=document.getElementById("match-history-panel"))==null||k.classList.remove("open")}),(ee=document.getElementById("btn-action"))==null||ee.addEventListener("click",()=>{t.selected.length!==0&&(f?$o(e,t,i):x&&Eo(e,t,i))}),(oe=document.getElementById("btn-results"))==null||oe.addEventListener("click",()=>_t(e,t,i)),(te=document.getElementById("btn-pass"))==null||te.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",Te(e,t,i),setTimeout(()=>Ot(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(k=>{k.addEventListener("click",()=>ko(k,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(k=>{k.addEventListener("click",()=>Qt(e,t,i,null,k.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(k=>{k.addEventListener("click",()=>Io(k.dataset.gcId,k.dataset.gcType,e,t,i))}),(j=document.getElementById("boost-card"))==null||j.addEventListener("click",()=>So(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(k=>{k.addEventListener("click",()=>Qt(e,t,i,k.dataset.subId))}),(z=document.getElementById("sub-btn-main"))==null||z.addEventListener("click",()=>Qt(e,t,i))}function ko(e,t,i,n){const a=e.dataset.cardId,o=e.dataset.role,r=t.selected.findIndex(s=>s.cardId===a);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(c=>c.cardId===a);s&&t.selected.push({...s,_role:o,_line:o})}Te(i,t,n)}function gi(e,t,i){e.matchId&&v.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function $o(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),gi(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(s=>!s.used)),a=t.selected.map(r=>{const s=(t.homeTeam[r._role]||[]).find(l=>l.cardId===r.cardId)||r,c=n&&["GK","DEF"].includes(r._role);return{...s,_line:r._role,...c?{note_a:Math.max(1,Number(s.note_a)||0)}:{}}}),o=ci(a,t.modifiers.home);t.pendingAttack={...o,players:[...a],side:"home"},t.selected.forEach(r=>{const s=(t.homeTeam[r._role]||[]).find(c=>c.cardId===r.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${o.total} (base ${o.base}${o.links?` +${o.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",Te(e,t,i),setTimeout(()=>zo(e,t,i),1200)}function Eo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),gi(t,i,i.state.profile.id);const n=t.stadiumDef||null,a=t.selected.map(c=>{const l=(t.homeTeam[c._role]||[]).find(u=>u.cardId===c.cardId)||c,d=l.stadiumBonus||n&&(n.club_id&&String(l.club_id)===String(n.club_id)||n.country_code&&l.country_code===n.country_code)||!1;return{...l,_line:c._role,stadiumBonus:d}}),o=pi(a,t.modifiers.home);t.selected.forEach(c=>{const l=(t.homeTeam[c._role]||[]).find(d=>d.cardId===c.cardId);l&&(l.used=!0)});const r=ui(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(c=>Qe(c)),homePlayers:t.selected.map(c=>{const l=(t.homeTeam[c._role]||[]).find(d=>d.cardId===c.cardId)||c;return Qe(l)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(r.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(r.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,Te(e,t,i),at(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ut(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,ut(e,t,i,"home-attack")}function Lo(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(c=>c.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(c=>!e.aiUsedSubIds.includes(c.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],a=i.find(c=>c.job===n.job)||i[0],o={...a,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],s=r.findIndex(c=>c.cardId===n.cardId);s!==-1&&(r[s]=o),e.aiUsedSubIds.push(a.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${a.firstname} ${a.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function To(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(a=>!e.aiUsedGc.includes(a.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Ae[i.gc_type],i.gc_type){case"Boost+2":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Ot(e,t,i){gi(t,i,null),Lo(t),To(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],a=Ki(n,"attack",t.difficulty);if(!a.length){qt(e,t,i);return}const o=ci(a,t.modifiers.ai);t.pendingAttack={...o,players:a,side:"ai"},a.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${a.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),c=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!c){t.aiScore++;const l={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:a.map(d=>Qe(d)),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(l),t.pendingAttack=null,Te(e,t,i),at(l.aiPlayers,t.homeScore,t.aiScore,!1,()=>{ut(e,t,i,"home-attack")});return}t.phase="defense",Te(e,t,i)}function zo(e,t,i){var l,d;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],a=Ki(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((l=t.pendingAttack)==null?void 0:l.players)||[]).map(x=>Qe(x)),homeTotal:((d=t.pendingAttack)==null?void 0:d.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,Te(e,t,i),at(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{ut(e,t,i,"ai-attack")});return}const r=a.length>0?pi(a,t.modifiers.ai).total:0;a.forEach(u=>{u.used=!0});const s=ui(t.pendingAttack.total,r,t.modifiers.ai),c={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>Qe(u)),aiPlayers:a.map(u=>Qe(u)),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(s.shielded)c.text="🛡️ Bouclier IA !",t.log.push(c);else if(s.goal){t.homeScore++,c.isGoal=!0,c.homeScored=!0,c.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(c),t.modifiers.ai={},t.pendingAttack=null,Te(e,t,i),at(c.homePlayers,t.homeScore,t.aiScore,!0,()=>{ut(e,t,i,"ai-attack")});return}else c.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(c);t.modifiers.ai={},t.pendingAttack=null,ut(e,t,i,"ai-attack")}function ut(e,t,i,n){if(t.round++,nn(t)){_t(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){qt(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){qt(e,t,i);return}setTimeout(()=>Ot(e,t,i),100);return}t.phase="attack",Te(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){qt(e,t,i);return}t.phase="ai-attack",Te(e,t,i),setTimeout(()=>Ot(e,t,i),800)}}function nn(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used));return!t&&!i}function qt(e,t,i){nn(t)?_t(e,t,i):(t.phase="attack",Te(e,t,i))}function Qt(e,t,i,n=null,a=null){var x,g;if(t.phase!=="attack"){vt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){vt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,m])=>(m||[]).filter(y=>y.used).map(y=>({...y,_line:y._line||p}))),r=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){vt("Aucun joueur utilisé à remplacer");return}if(!r.length){vt("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===a));const c=((x=o[s])==null?void 0:x._line)||((g=o[s])==null?void 0:g.job);let l=n?Math.max(0,r.findIndex(p=>p.cardId===n)):Math.max(0,r.findIndex(p=>p.job===c)),d=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function f(){var b,R,L,G,O,ee;const p=o[s],m=r[l],y=Math.min(130,Math.round((window.innerWidth-90)/2)),h=Math.round(y*1.35),w=oe=>`background:rgba(255,255,255,0.12);border:none;color:${oe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${oe?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${w(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${m?Je({...m,used:!1,boost:0},y,h):"<div>—</div>"}</div>
        <button id="in-down" style="${w(l>=r.length-1)}" ${l>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${w(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?Je({...p,used:!1,boost:0},y,h):"<div>—</div>"}</div>
        <button id="out-down" style="${w(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(b=u.querySelector("#sub-close"))==null||b.addEventListener("click",()=>u.remove()),(R=u.querySelector("#out-up"))==null||R.addEventListener("click",()=>{s>0&&(s--,f())}),(L=u.querySelector("#out-down"))==null||L.addEventListener("click",()=>{s<o.length-1&&(s++,f())}),(G=u.querySelector("#in-up"))==null||G.addEventListener("click",()=>{l>0&&(l--,f())}),(O=u.querySelector("#in-down"))==null||O.addEventListener("click",()=>{l<r.length-1&&(l++,f())});const $=(oe,te,j,z)=>{const k=u.querySelector("#"+oe);if(!k)return;let D=0;k.addEventListener("touchstart",ae=>{D=ae.touches[0].clientY},{passive:!0}),k.addEventListener("touchend",ae=>{const pe=ae.changedTouches[0].clientY-D;if(Math.abs(pe)<30)return;const le=te();pe<0&&le<z-1?(j(le+1),f()):pe>0&&le>0&&(j(le-1),f())},{passive:!0})};$("in-panel",()=>l,oe=>l=oe,r.length),$("out-panel",()=>s,oe=>s=oe,o.length),(ee=u.querySelector("#sub-confirm"))==null||ee.addEventListener("click",oe=>{if(oe.preventDefault(),oe.stopPropagation(),d)return;d=!0;const te=o[s],j=r[l];if(!te||!j)return;let z=null,k=-1;for(const[ae,pe]of Object.entries(t.homeTeam)){const le=(pe||[]).findIndex(se=>se.cardId===te.cardId);if(le!==-1){z=ae,k=le;break}}if(k===-1||!z){vt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const D={...j,_line:z,_col:te._col||0,used:!1,boost:0};t.homeTeam[z].splice(k,1,D),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(j.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:te.name,firstname:te.firstname,note:Be(te,z),portrait:Lt(te),job:te.job,country_code:te.country_code,rarity:te.rarity,clubName:te.clubName,clubLogo:te.clubLogo},inPlayer:{name:j.name,firstname:j.firstname,note:Be(j,z),portrait:Lt(j),job:j.job,country_code:j.country_code,rarity:j.rarity,clubName:j.clubName,clubLogo:j.clubLogo},text:`🔄 ${j.firstname} ${j.name} remplace ${te.firstname} ${te.name}`}),u.remove(),bo(te,j,()=>Te(e,t,i))})}document.body.appendChild(u),f()}function Io(e,t,i,n,a){var g,p;const o=(n.gcDefs||[]).find(m=>m.name===t),r=Ae[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",c={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",l=(o==null?void 0:o.name)||t,d=(o==null?void 0:o.effect)||r.desc,u=o!=null&&o.image_url?`/icons/${o.image_url}`:null,f=r.icon||"⚡",x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",x.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${c};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${c}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${l.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${l}</div>
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
    </div>`,document.body.appendChild(x),(g=x.querySelector("#gc-back"))==null||g.addEventListener("click",()=>x.remove()),(p=x.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{x.remove(),Mo(e,t,i,n,a)})}function jt(e,t,i,n,a,o){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function c(){var l,d;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",g=Be(u,f)+(u.boost||0),p=s.find(m=>m.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${x};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${g}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(l=r.querySelector("#gc-picker-close"))==null||l.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,x=e.find(p=>p.cardId===f);if(!x)return;const g=s.findIndex(p=>p.cardId===f);g>-1?s.splice(g,1):s.length<t&&s.push(x),c()})}),(d=r.querySelector("#gc-picker-confirm"))==null||d.addEventListener("click",()=>{r.remove(),o(s)})}c(),document.body.appendChild(r)}const Ao={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,a,o)=>{const r=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,c])=>c.filter(l=>!l.used).map(l=>({...l,_line:s})));return r.length?(jt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,a,n,s=>{s.forEach(c=>{const l=(n.homeTeam[c._line]||[]).find(d=>d.cardId===c.cardId);l&&(l.boost=(l.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${l.name}`,type:"info"}))}),Te(a,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),Te(a,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},a,o,r)=>{const s=n==="home"?a.homeTeam:a.aiTeam,c=n==="ai"?"adverse":"allié",l=Object.entries(s).filter(([d])=>!i.length||i.includes(d)).flatMap(([d,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:d})));return l.length?(jt(l,t,`Choisir ${t} joueur(s) ${c}(s) à débuffer (-${e})`,o,a,d=>{d.forEach(u=>{const x=((n==="home"?a.homeTeam:a.aiTeam)[u._line]||[]).find(g=>g.cardId===u.cardId);x&&(x.boost=(x.boost||0)-e,a.log.push({text:`🎯 -${e} sur ${x.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),Te(o,a,r)}),!0):(a.log.push({text:`🎯 Aucun joueur ${c} disponible`,type:"info"}),Te(o,a,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,a,o)=>{const r=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",c=Object.entries(r).filter(([l])=>!t.length||t.includes(l)).flatMap(([l,d])=>d.filter(u=>!u.used).map(u=>({...u,_line:l})));return c.length?(jt(c,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,a,n,l=>{l.forEach(d=>{const f=((i==="home"?n.homeTeam:n.aiTeam)[d._line]||[]).find(x=>x.cardId===d.cardId);f&&(f.used=!0,n.log.push({text:`❌ ${f.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),Te(a,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),Te(a,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,a)=>{const o=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,s])=>s.filter(c=>c.used).map(c=>({...c,_line:r})));return o.length?(jt(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(s=>{const c=(i.homeTeam[s._line]||[]).find(l=>l.cardId===s.cardId);c&&(c.used=!1,i.log.push({text:`💫 ${c.name} ressuscité !`,type:"info"}))}),Te(n,i,a)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),Te(n,i,a),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function Mo(e,t,i,n,a){n.usedGc.push(e);const o=n.gcDefs||[],r=o.find(c=>c.name===t)||o.find(c=>{var l;return((l=c.name)==null?void 0:l.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const c=Ao[r.effect_type];c?c(r.effect_params||{},n,i,a)||(s=!0):(a.toast(`Effet "${r.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const c=Object.entries(n.homeTeam).flatMap(([l,d])=>(d||[]).filter(u=>u.used).map(u=>({...u,_line:l})));c.length?(c[0].used=!1,n.log.push({text:`💫 ${c[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const c=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(l=>!l.used);if(c.length){const l=c.sort((d,u)=>Be(u,"ATT")-Be(d,"ATT"))[0];l.used=!0,n.log.push({text:`❄️ ${l.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}v.from("cards").delete().eq("id",e).then(()=>{}),s&&Te(i,n,a)}function So(e,t,i){const n=Object.values(t.homeTeam).flat().filter(a=>!a.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(a=>`
        <div class="player-boost-opt" data-card-id="${a.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${Vn[a.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Be(a,a._line||a.job)}</div>
          <div style="flex:1"><b>${a.firstname} ${a.name}</b><div style="font-size:11px;color:#888">${a._line||a.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[r]||[]).find(c=>c.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),Te(e,t,i)})})}async function _t(e,t,i){var d,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,a=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,r=a?"victoire":o?"nul":"defaite",s=jn(t.mode,r);t.matchId&&await v.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:a?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const c={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};a?c.wins=(n.profile.wins||0)+1:o?c.draws=(n.profile.draws||0)+1:c.losses=(n.profile.losses||0)+1,await v.from("users").update(c).eq("id",n.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
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
    </div>`,document.body.appendChild(l),(d=document.getElementById("res-home"))==null||d.addEventListener("click",()=>{l.remove(),Ue(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{l.remove(),Ue(e),i.navigate("match",{matchMode:t.mode})})}function Co(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${zt(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function Mt(e,t,i,n,a={}){return on(e,t,i,n,a.myGC||[],a.gcDefs||[],a.isRanked||!1,a.rankedData||null,a.stadiumDef||null,a.onMatchEnd||null,a.mlLeagueId||null,a.mlMatchId||null)}async function jo(e,t,i){const{data:n}=await v.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const a=n.home_id===t.state.user.id;return on(e,t,i,a,[],[],n.is_ranked||!1,null,null,null,null,null)}async function on(e,t,i,n,a=[],o=[],r=!1,s=null,c=null,l=null,d=null,u=null){const{state:f,navigate:x,toast:g}=t,p=n?"p1":"p2",m=n?"p2":"p1",y=(a||[]).map(_=>_.id),h=(a||[]).map(_=>({id:_.id,gc_type:_.gc_type,_gcDef:_._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:w}=await v.from("matches").select("*").eq("id",i).single();if(!w){g("Match introuvable","error"),x("home");return}async function $(){var fe,xe;console.log("[PvP] buildGameState match:",{id:w.id,home_deck_id:w.home_deck_id,away_deck_id:w.away_deck_id,mode:w.mode,is_ranked:w.is_ranked});const[{data:_,error:E},{data:A,error:S},{data:I},{data:q}]=await Promise.all([v.rpc("get_deck_for_match",{p_deck_id:w.home_deck_id}),v.rpc("get_deck_for_match",{p_deck_id:w.away_deck_id}),v.from("users").select("id,pseudo,club_name").eq("id",w.home_id).single(),v.from("users").select("id,pseudo,club_name").eq("id",w.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",E==null?void 0:E.message,"p2:",S==null?void 0:S.message,"p1D:",(fe=_==null?void 0:_.starters)==null?void 0:fe.length,"p2D:",(xe=A==null?void 0:A.starters)==null?void 0:xe.length);const B=Z=>{const ye=Number(Z.evolution_bonus)||0;return{cardId:Z.card_id,position:Z.position,id:Z.id,firstname:Z.firstname,name:Z.surname_real,country_code:Z.country_code,club_id:Z.club_id,job:Z.job,job2:Z.job2,note_g:(Number(Z.note_g)||0)+(Z.job==="GK"||Z.job2==="GK"&&Number(Z.note_g)>0?ye:0),note_d:(Number(Z.note_d)||0)+(Z.job==="DEF"||Z.job2==="DEF"&&Number(Z.note_d)>0?ye:0),note_m:(Number(Z.note_m)||0)+(Z.job==="MIL"||Z.job2==="MIL"&&Number(Z.note_m)>0?ye:0),note_a:(Number(Z.note_a)||0)+(Z.job==="ATT"||Z.job2==="ATT"&&Number(Z.note_a)>0?ye:0),evolution_bonus:ye,rarity:Z.rarity,skin:Z.skin,hair:Z.hair,hair_length:Z.hair_length,face:Z.face||null,clubName:Z.club_encoded_name||null,clubLogo:Z.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},F=((_==null?void 0:_.starters)||[]).map(Z=>B(Z)),Y=((A==null?void 0:A.starters)||[]).map(Z=>B(Z)),W=(_==null?void 0:_.formation)||"4-4-2",X=(A==null?void 0:A.formation)||"4-4-2";let re=Gt(F,W),J=Gt(Y,X);const ce=((_==null?void 0:_.subs)||[]).map(Z=>B(Z)),de=((A==null?void 0:A.subs)||[]).map(Z=>B(Z)),ne=(_==null?void 0:_.stadium_def)||(n?c:null),ue=(A==null?void 0:A.stadium_def)||(n?null:c);return ne&&(re=Tt(re,ne),Ft(ce,ne)),ue&&(J=Tt(J,ue),Ft(de,ue)),{p1Team:re,p2Team:J,p1Subs:ce,p2Subs:de,p1Formation:W,p2Formation:X,p1Name:(I==null?void 0:I.club_name)||(I==null?void 0:I.pseudo)||"Joueur 1",p2Name:(q==null?void 0:q.club_name)||(q==null?void 0:q.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?y:[],gc_p2:n?[]:y,gcCardsFull_p1:n?h:[],gcCardsFull_p2:n?[]:h,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let b=w.game_state&&Object.keys(w.game_state).length?w.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!b,"match.status:",w.status,"home_id:",w.home_id,"away_id:",w.away_id,"myId:",f.profile.id),!b)if(n){b=await $(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((b==null?void 0:b.p1Team)||{}));const{data:_}=await v.from("matches").select("game_state").eq("id",i).single();!(_!=null&&_.game_state)||!Object.keys(_.game_state).length?await v.from("matches").update({game_state:b,turn_user_id:w.home_id}).eq("id",i):b=_.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let _=0;_<30&&!b;_++){await new Promise(A=>setTimeout(A,400));const{data:E}=await v.from("matches").select("game_state").eq("id",i).single();E!=null&&E.game_state&&Object.keys(E.game_state).length&&(b=E.game_state),_%5===0&&console.log("[PvP] away - poll",_,"game_state:",!!(E!=null&&E.game_state))}if(!b){g("Erreur de synchronisation","error"),x("home");return}b.gc_p2=y,b.gcCardsFull_p2=h,await v.from("matches").update({game_state:b}).eq("id",i)}let R=!1,L=null,G=!1;const O=new Set,ee=new Set;async function oe(_){var X,re;try{v.removeChannel(te)}catch{}const E=b[p+"Score"]||0,A=b[m+"Score"]||0;let S,I;_.winner_id?(S=_.winner_id===f.profile.id,I=!1):_.forfeit?(S=E>A,I=!1):(I=E===A,S=E>A);let q="";if(r&&n)try{const{data:J}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",w.home_id).single(),{data:ce}=await v.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",w.away_id).single();if(J&&ce){const de=S?1:I?.5:0,ne=1-de,ue=J.placement_matches<10,fe=ce.placement_matches<10,xe=computeGlicko2(J.mmr,J.mmr_deviation,J.mmr_volatility,ce.mmr,ce.mmr_deviation,de===1?1:de===0?0:.5,ue),Z=computeGlicko2(ce.mmr,ce.mmr_deviation,ce.mmr_volatility,J.mmr,J.mmr_deviation,ne===1?1:ne===0?0:.5,fe);await v.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:I?null:S?w.home_id:w.away_id,p_home_id:w.home_id,p_away_id:w.away_id,p_home_delta:xe.delta,p_away_delta:Z.delta,p_home_new_rd:xe.newRd,p_away_new_rd:Z.newRd,p_home_new_vol:xe.newSigma,p_away_new_vol:Z.newSigma});const ye=xe.delta,ze=xe.newMmr,Me=getTier(ze),Ne=ye>=0?"+":"",Ge=ye>=0?"#4caf50":"#ff6b6b",Pe=getTier(J.mmr);q=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Me.id!==Pe.id?`<div style="font-size:20px;font-weight:900;color:${Me.color}">
                    ${ze>J.mmr?"📈":"📉"} ${Pe.emoji} ${Pe.label} → ${Me.emoji} ${Me.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${ze>J.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${ye>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Me.color}">${Me.emoji} ${Me.label}</div>`}
              ${ue?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${J.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(J){console.error("[Ranked] MMR update error:",J)}(X=document.getElementById("pvp-end-overlay"))==null||X.remove();const B=document.createElement("div");B.id="pvp-end-overlay",B.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const F=I?"🤝":S?"🏆":"😞",Y=I?"MATCH NUL":S?"VICTOIRE !":"DÉFAITE",W=I?"#fff":S?"#FFD700":"#ff6b6b";B.innerHTML=`
      <div style="font-size:64px">${F}</div>
      <div style="font-size:26px;font-weight:900;color:${W}">${Y}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${b[p+"Name"]} ${E} – ${A} ${b[m+"Name"]}</div>
      ${_.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${S?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${q}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(B),(re=B.querySelector("#pvp-end-home"))==null||re.addEventListener("click",()=>{B.remove(),Ue(e),x(r?"ranked":"home")})}const te=v.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},_=>{const E=_.new;try{if(E.status==="finished"||E.forfeit){if(R)return;R=!0,L&&(clearInterval(L),L=null),E.game_state&&(b=E.game_state),oe(E);return}if(E.game_state){const A=b;b=E.game_state;const S=b._lastGC;if(S&&S.seq&&!ee.has(S.seq)&&(ee.add(S.seq),S.by!==p)){V(S.type,S.by,()=>se());return}const I=A[p+"Score"]||0,q=A[m+"Score"]||0,B=b[p+"Score"]||0,F=b[m+"Score"]||0,Y=B>I,W=F>q;if((Y||W)&&!O.has(b.round)){O.add(b.round);const X=[...b.log||[]].reverse().find(J=>J.isGoal),re=((X==null?void 0:X.homePlayers)||[]).map(J=>({name:J.name,note:J.note,portrait:J.portrait,job:J.job}));at(re,B,F,Y,()=>se());return}se()}}catch(A){console.error("[PvP] crash:",A)}}).subscribe();async function j(_){Object.assign(b,_),b.lastActionAt=new Date().toISOString();const{error:E}=await v.from("matches").update({game_state:b}).eq("id",i);E&&g("Erreur de synchronisation","error");try{se()}catch(A){console.error("[PvP] renderPvpScreen crash:",A)}}async function z(){if(R)return;R=!0,L&&(clearInterval(L),L=null);const _=n?w.away_id:w.home_id,E=n?"p2":"p1",A=n?"p1":"p2",S={...b,[E+"Score"]:3,[A+"Score"]:0,phase:"finished"};try{await v.from("matches").update({status:"finished",forfeit:!0,winner_id:_,home_score:S.p1Score||0,away_score:S.p2Score||0,game_state:S}).eq("id",i)}catch{}try{v.removeChannel(te)}catch{}setTimeout(()=>{Ue(e),x("home")},800)}const k={BOOST_STAT:({value:_=1,count:E=1,roles:A=[]},S,I)=>{const q=S[p+"Team"],B=Object.entries(q).filter(([F])=>!A.length||A.includes(F)).flatMap(([F,Y])=>Y.filter(W=>!W.used).map(W=>({...W,_line:F})));if(!B.length){S.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),I(S);return}D(B,E,`Choisir ${E} joueur(s) à booster (+${_})`,F=>{F.forEach(Y=>{const W=(q[Y._line]||[]).find(X=>X.cardId===Y.cardId);W&&(W.boost=(W.boost||0)+_,S.log.push({text:`⚡ +${_} sur ${W.name}`,type:"info"}))}),S[p+"Team"]=q,I(S)})},DEBUFF_STAT:({value:_=1,count:E=1,roles:A=[],target:S="ai"},I,q)=>{const B=S==="home"?p:m,F=I[B+"Team"],Y=S==="home"?"allié":"adverse",W=Object.entries(F).filter(([X])=>!A.length||A.includes(X)).flatMap(([X,re])=>re.map(J=>({...J,_line:X})));if(!W.length){I.log.push({text:`🎯 Aucun joueur ${Y}`,type:"info"}),q(I);return}D(W,E,`Choisir ${E} joueur(s) ${Y}(s) (-${_})`,X=>{X.forEach(re=>{const J=(F[re._line]||[]).find(ce=>ce.cardId===re.cardId);J&&(J.boost=(J.boost||0)-_,I.log.push({text:`🎯 -${_} sur ${J.name}`,type:"info"}))}),I[B+"Team"]=F,q(I)})},GRAY_PLAYER:({count:_=1,roles:E=[],target:A="ai"},S,I)=>{const q=A==="home"?p:m,B=S[q+"Team"],F=A==="home"?"allié":"adverse",Y=Object.entries(B).filter(([W])=>!E.length||E.includes(W)).flatMap(([W,X])=>X.filter(re=>!re.used).map(re=>({...re,_line:W})));if(!Y.length){S.log.push({text:`❌ Aucun joueur ${F}`,type:"info"}),I(S);return}D(Y,_,`Choisir ${_} joueur(s) ${F}(s) à exclure`,W=>{const X="usedCardIds_"+q,re=new Set(S[X]||[]);W.forEach(J=>{const ce=(B[J._line]||[]).find(de=>de.cardId===J.cardId);ce&&(ce.used=!0,re.add(J.cardId),S.log.push({text:`❌ ${ce.name} exclu !`,type:"info"}))}),S[X]=[...re],S[q+"Team"]=B,I(S)})},REVIVE_PLAYER:({count:_=1,roles:E=[]},A,S)=>{const I=A[p+"Team"],q=Object.entries(I).filter(([B])=>!E.length||E.includes(B)).flatMap(([B,F])=>F.filter(Y=>Y.used).map(Y=>({...Y,_line:B})));if(!q.length){A.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),S(A);return}D(q,_,`Choisir ${_} joueur(s) à ressusciter`,B=>{B.forEach(F=>{const Y=(I[F._line]||[]).find(W=>W.cardId===F.cardId);Y&&(Y.used=!1,A.log.push({text:`💫 ${Y.name} ressuscité !`,type:"info"}))}),A[p+"Team"]=I,S(A)})},REMOVE_GOAL:({},_,E)=>{const A=m+"Score";_[A]>0?(_[A]--,_.log.push({text:"🚫 Dernier but annulé !",type:"info"})):_.log.push({text:"🚫 Aucun but à annuler",type:"info"}),E(_)},ADD_GOAL_DRAW:({},_,E)=>{_[p+"Score"]===_[m+"Score"]?(_[p+"Score"]++,_.log.push({text:"🎯 But bonus !",type:"info"})):_.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),E(_)},ADD_SUB:({value:_=1},E,A)=>{E.maxSubs=(E.maxSubs||3)+_,E.log.push({text:`🔄 +${_} remplacement(s)`,type:"info"}),A(E)},CUSTOM:({},_,E)=>E(_)};function D(_,E,A,S){const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let q=[];function B(){var Y,W;const F=_.map(X=>{const re={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[X._line]||"#555",J=Be(X,X._line)+(X.boost||0),de=q.find(ue=>ue.cardId===X.cardId)?"#FFD700":"rgba(255,255,255,0.25)",ne=X.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${X.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${de};background:${re};overflow:hidden;cursor:pointer;${ne}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${X.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${J}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${X._line}</div>
        </div>`}).join("");I.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${A}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${q.length}/${E}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${F}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${q.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${q.length}/${E})
          </button>
        </div>`,(Y=I.querySelector("#pp-close"))==null||Y.addEventListener("click",()=>I.remove()),I.querySelectorAll(".pp-item").forEach(X=>{X.addEventListener("click",()=>{const re=X.dataset.cid,J=_.find(de=>de.cardId===re),ce=q.findIndex(de=>de.cardId===re);J&&(ce>-1?q.splice(ce,1):q.length<E&&q.push(J),B())})}),(W=I.querySelector("#pp-confirm"))==null||W.addEventListener("click",()=>{I.remove(),S(q)})}B(),document.body.appendChild(I)}async function ae(_,E){const S=(b["gcCardsFull_"+p]||[]).find(F=>F.id===_),I=(S==null?void 0:S._gcDef)||(b.gcDefs||[]).find(F=>{var Y;return F.name===E||((Y=F.name)==null?void 0:Y.toLowerCase().trim())===(E==null?void 0:E.toLowerCase().trim())}),q=[...b["usedGc_"+p]||[],_],B={type:E,by:p,seq:(b._gcAnimSeq||0)+1};ee.add(B.seq),V(E,p,async()=>{if(I!=null&&I.effect_type&&I.effect_type!=="CUSTOM"){const Y=k[I.effect_type];if(Y){const W={...b};Y(I.effect_params||{},W,async X=>{X["usedGc_"+p]=q,X._lastGC=B,X._gcAnimSeq=B.seq,await j(X)});return}}const F={...b};switch(E){case"Remplacement+":F.maxSubs=(F.maxSubs||3)+1,F.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const Y=m+"Score";F[Y]>0&&(F[Y]--,F.log.push({text:"🚫 But annulé",type:"info"}));break}}F["usedGc_"+p]=q,F._lastGC=B,F._gcAnimSeq=B.seq,await j(F)})}function pe(_,E){const A="usedCardIds_"+_,S=new Set(b[A]||[]);E.forEach(I=>S.add(I)),b[A]=[...S]}function le(){for(const _ of["p1","p2"]){const E=new Set(b["usedCardIds_"+_]||[]),A=b[_+"Team"];if(A)for(const S of["GK","DEF","MIL","ATT"])(A[S]||[]).forEach(I=>{I.used=E.has(I.cardId)})}}function se(){var Ve,it,bi,yi,hi,vi;if(b.phase==="reveal")return ke();if(b.phase==="midfield")return Q();if(b.phase==="finished")return Fe();const _=b[p+"Team"],E=b[m+"Team"];le();const A=b[p+"Score"],S=b[m+"Score"],I=b[p+"Name"],q=b[m+"Name"],B=b.phase===p+"-attack",F=b.phase===p+"-defense",Y=Array.isArray(b["selected_"+p])?b["selected_"+p]:[],W=Y.map(ie=>ie.cardId),X=window.innerWidth>=700,re=b[p+"Subs"]||[],J=b["usedSubIds_"+p]||[],ce=re.filter(ie=>!J.includes(ie.cardId)),de=b["gcCardsFull_"+p]||[],ne=b["usedGc_"+p]||[],ue=de.filter(ie=>!ne.includes(ie.id)),fe=b.boostOwner===p&&!b.boostUsed,xe=!["GK","DEF","MIL","ATT"].some(ie=>(E[ie]||[]).some(ge=>!ge.used)),Z=[..._.MIL||[],..._.ATT||[]].filter(ie=>!ie.used),ye=B&&xe&&Z.length===0?[..._.GK||[],..._.DEF||[]].filter(ie=>!ie.used).map(ie=>ie.cardId):[];function ze(ie,ge,Ie){var $i,Ei;const be=ie._gcDef,nt={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[be==null?void 0:be.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",dt={purple:"#b06ce0",light_blue:"#00d4ef"}[be==null?void 0:be.color]||"#b06ce0",yt=(be==null?void 0:be.name)||ie.gc_type,ht=(be==null?void 0:be.effect)||(($i=Ae[ie.gc_type])==null?void 0:$i.desc)||"",wi=be!=null&&be.image_url?`/icons/${be.image_url}`:null,pn=((Ei=Ae[ie.gc_type])==null?void 0:Ei.icon)||"⚡",_i=Math.round(Ie*.22),ki=Math.round(Ie*.22),Vt=Ie-_i-ki,un=yt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ie.id}" data-gc-type="${ie.gc_type}"
        style="box-sizing:border-box;width:${ge}px;height:${Ie}px;border-radius:10px;border:2px solid ${dt};background:${nt};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${_i}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${un}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ge-6}px">${yt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Vt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${wi?`<img src="${wi}" style="max-width:${ge-10}px;max-height:${Vt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Vt*.55)}px">${pn}</span>`}
        </div>
        <div style="height:${ki}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${ht.slice(0,38)}</span>
        </div>
      </div>`}function Me(ie,ge){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ie}px;height:${ge}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ge*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ge*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ge*.09)}px;color:#000;font-weight:900">+${b.boostValue}</div>
      </div>`}const Ne=(ie,ge)=>ge?Me(130,175):ze(ie,130,175),Ge=(ie,ge)=>ge?Me(68,95):ze(ie,68,95),Pe=X?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",bt=B?$e(p)?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${Y.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Pe};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:F?`<button id="pvp-action" style="${Pe};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${Y.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${q}</div>`,je=B&&!$e(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':B||F?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${Y.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${X?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${ce.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':ce.map(ie=>`<div class="pvp-sub-btn" data-sub-id="${ie.cardId}" style="cursor:pointer;flex-shrink:0">${Je(ie,X?76:44,X?100:58)}</div>`).join("")}
    </div>`,Re=B?"attack":F?"defense":"idle",et=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${xt(_,b[p+"Formation"],Re,W,We(),ot(),ye)}
      </div>
    </div>`,Ke=(()=>{var ge,Ie;if(F&&((ge=b.pendingAttack)!=null&&ge.players)){const be=b.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${q} ATTAQUE — Défendez !</div>
          ${pt((be.players||[]).map(nt=>({...nt,used:!1})),"#ff6b6b",be.total)}
        </div>`}if(B&&((Ie=b.pendingAttack)!=null&&Ie.players)){const be=b.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${pt((be.players||[]).map(nt=>({...nt,used:!1})),"#00ff88",be.total)}
        </div>`}const ie=(b.log||[]).slice(-1)[0];return ie?'<div style="padding:2px 4px">'+tn(ie)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),tt=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${I}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${A} – ${S}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${q}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${Ke}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(b.log||[]).length})
      </button>`;He(e),e.style.overflow="hidden",X?e.innerHTML=`
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
            ${ue.map(ie=>Ne(ie,!1)).join("")}
            ${fe?Ne(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${tt}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${xt(_,b[p+"Formation"],Re,W,We(),ot(),ye)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${ue.map(ie=>Ge(ie,!1)).join("")}
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
                  <div style="font-size:18px;font-weight:900;color:#ff6b6b">${(b["usedSubIds_"+p]||[]).length}</div>
                </div>
              </div>
              <div style="font-size:6px;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase">${(b["usedSubIds_"+p]||[]).length}/${b.maxSubs||3} rempl.</div>
            </div>
          </div>
          <div>${bt}${je}</div>
        </div>
      </div>`;function De(){const ie=e.querySelector(".match-screen");if(!ie)return;const ge=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ie.style.height=ge+"px",ie.style.minHeight=ge+"px",ie.style.maxHeight=ge+"px",ie.style.overflow="hidden";const Ie=e.querySelector("#mobile-action-bar"),be=e.querySelector("#mobile-play-area");Ie&&be&&(be.style.paddingBottom=Ie.offsetHeight+"px")}if(De(),setTimeout(De,120),setTimeout(De,400),G||(G=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",De),window.visualViewport.addEventListener("scroll",De)),window.addEventListener("resize",De)),function(){const ge=e.querySelector(".terrain-wrapper svg");ge&&(ge.removeAttribute("width"),ge.removeAttribute("height"),ge.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ge.setAttribute("viewBox","-26 -26 352 352"),ge.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ie=>{ie.addEventListener("click",()=>{if(!B&&!F)return;const ge=ie.dataset.cardId,Ie=ie.dataset.role,be=(_[Ie]||[]).find(ht=>ht.cardId===ge);if(!be||be.used)return;const nt=ye.includes(ge);if(B&&!["MIL","ATT"].includes(Ie)&&!nt)return;Array.isArray(b["selected_"+p])||(b["selected_"+p]=[]);const dt=b["selected_"+p],yt=dt.findIndex(ht=>ht.cardId===ge);yt>-1?dt.splice(yt,1):dt.length<3&&dt.push({...be,_role:Ie}),se()})}),e.querySelectorAll(".match-used-hit").forEach(ie=>{ie.addEventListener("click",()=>P(ie.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ie=>{ie.addEventListener("click",()=>P())}),(Ve=e.querySelector("#pvp-sub-open"))==null||Ve.addEventListener("click",()=>P()),e.querySelectorAll(".pvp-gc-mini").forEach(ie=>{ie.addEventListener("click",()=>T(ie.dataset.gcId,ie.dataset.gcType))}),(it=e.querySelector("#pvp-boost-card"))==null||it.addEventListener("click",()=>M()),(bi=e.querySelector("#pvp-action"))==null||bi.addEventListener("click",ie=>{B?ie.currentTarget.dataset.pass==="1"||!$e(p)?N():Ee():F&&_e()}),(yi=e.querySelector("#pvp-quit"))==null||yi.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&z()}),(hi=e.querySelector("#pvp-view-opp"))==null||hi.addEventListener("click",()=>U()),(vi=e.querySelector("#pvp-toggle-history"))==null||vi.addEventListener("click",()=>C()),L&&(clearInterval(L),L=null),(B||F)&&!R){let ie=30,ge=!1;const Ie=()=>document.getElementById("pvp-timer"),be=()=>{Ie()&&(Ie().textContent=ie+"s",Ie().style.color=ge?"#ff4444":"#fff")};be(),L=setInterval(()=>{ie--,ie<0?ge?(clearInterval(L),L=null,B&&!$e(p)?N():z()):(ge=!0,ie=15,be()):be()},1e3)}}function ke(){He(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${b[m+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${zt(b[m+"Team"],b[m+"Formation"],null,[],We(),ot())}</div>
    </div>`,p==="p1"&&setTimeout(async()=>{await j({phase:"midfield"})},5e3)}let K=!1;function Q(){if(K)return;const _=b[p+"Team"].MIL||[],E=b[m+"Team"].MIL||[],A=milScore(_)+milLinks(_),S=milScore(E)+milLinks(E),I=A>=S;function q(de,ne,ue){return`<div id="duel-row-${ue}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${ne}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${de.map((fe,xe)=>{const Z=xe<de.length-1?It(fe,de[xe+1]):null,ye=!Z||Z==="#ff3333"||Z==="#cc2222",ze=Z==="#00ff88"?"+2":Z==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${ue}" data-idx="${xe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${qe({...fe,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:b.homeStadiumDef||b.stadiumDef||null,role:"MIL",extraNote:fe.boost||0})}
            </div>
            ${xe<de.length-1?`<div class="duel-link duel-link-${ue}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":Z};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${Z}`}">
              ${ze?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${Z}">${ze}</span>`:""}
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
      ${q(_,b[p+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${q(E,b[m+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const B=(de,ne)=>e.querySelectorAll(de).forEach((ue,fe)=>{setTimeout(()=>{ue.style.opacity="1",ue.style.transform="translateY(0) scale(1)"},ne+fe*90)});B(".duel-card-me",150),B(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((de,ne)=>setTimeout(()=>{de.style.opacity="1"},ne*70)),900),setTimeout(()=>{const de=e.querySelector("#pvp-vs");de&&(de.style.opacity="1",de.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(ne=>ne.style.opacity="1")},1250);function F(de,ne,ue){const fe=document.getElementById(de);if(!fe)return;const xe=performance.now(),Z=ye=>{const ze=Math.min(1,(ye-xe)/ue);fe.textContent=Math.round(ne*(1-Math.pow(1-ze,3))),ze<1?requestAnimationFrame(Z):fe.textContent=ne};requestAnimationFrame(Z)}setTimeout(()=>{F("pvp-score-me",A,800),F("pvp-score-opp",S,800)},1500);const Y=b.p1Team.MIL||[],W=b.p2Team.MIL||[],X=milScore(Y)+milLinks(Y),re=milScore(W)+milLinks(W),J=X>=re?"p1":"p2";let ce=b.boostValue;ce==null&&(ce=Vi(),b.boostValue=ce,b.boostOwner=J,b.boostUsed=!1),K=!0,setTimeout(()=>{const de=e.querySelector("#duel-row-"+(I?"me":"opp")),ne=e.querySelector("#duel-row-"+(I?"opp":"me")),ue=document.getElementById("pvp-score-me"),fe=document.getElementById("pvp-score-opp"),xe=I?ue:fe,Z=I?fe:ue;xe&&(xe.style.fontSize="80px",xe.style.color=I?"#FFD700":"#ff6b6b",xe.style.animation="duelPulse .5s ease"+(I?",duelGlow 1.5s ease infinite .5s":"")),Z&&(Z.style.opacity="0.25"),setTimeout(()=>{de&&(de.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",de.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),ne&&(ne.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ne;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const ze=b.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+ce+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Me=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(I?"⚽ "+b[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+b[m+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+ze+Me,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ne=document.getElementById("pvp-start-match"))==null||Ne.addEventListener("click",async()=>{const Ge=J;await j({phase:Ge+"-attack",attacker:Ge,round:1,boostValue:ce,boostUsed:!1,boostOwner:Ge})})},600)},700)},2800)}function V(_,E,A){var ne,ue;const S=(b.gcDefs||[]).find(fe=>{var xe;return fe.name===_||((xe=fe.name)==null?void 0:xe.toLowerCase().trim())===(_==null?void 0:_.toLowerCase().trim())}),I={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[S==null?void 0:S.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",q={purple:"#b06ce0",light_blue:"#00d4ef"}[S==null?void 0:S.color]||"#b06ce0",B=(S==null?void 0:S.name)||_,F=(S==null?void 0:S.effect)||((ne=Ae[_])==null?void 0:ne.desc)||"",Y=S!=null&&S.image_url?`/icons/${S.image_url}`:null,W=((ue=Ae[_])==null?void 0:ue.icon)||"⚡",re=E===p?"Vous":b[E+"Name"]||"Adversaire",J=document.createElement("div");J.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",J.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${q}66}50%{box-shadow:0 0 60px ${q}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${q};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${re} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${q};background:${I};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${B.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${B}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Y?`<img src="${Y}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${W}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${F}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(J);let ce=!1;const de=()=>{ce||(ce=!0,J.remove(),setTimeout(()=>A&&A(),50))};J.addEventListener("click",de),setTimeout(de,3e3)}function T(_,E){var J,ce,de,ne;const S=(b["gcCardsFull_"+p]||[]).find(ue=>ue.id===_),I=S==null?void 0:S._gcDef,q={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[I==null?void 0:I.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",B={purple:"#b06ce0",light_blue:"#00d4ef"}[I==null?void 0:I.color]||"#b06ce0",F=(I==null?void 0:I.name)||E,Y=(I==null?void 0:I.effect)||((J=Ae[E])==null?void 0:J.desc)||"Carte spéciale.",W=I!=null&&I.image_url?`/icons/${I.image_url}`:null,X=((ce=Ae[E])==null?void 0:ce.icon)||"⚡",re=document.createElement("div");re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",re.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${B};background:${q};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${B}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${F.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${F}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${W?`<img src="${W}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${X}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${Y}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(re),(de=re.querySelector("#pvp-gc-back"))==null||de.addEventListener("click",()=>re.remove()),(ne=re.querySelector("#pvp-gc-use"))==null||ne.addEventListener("click",()=>{re.remove(),ae(_,E)})}function M(){var S;const _=b[p+"Team"],E=Object.entries(_).flatMap(([I,q])=>(q||[]).filter(B=>!B.used).map(B=>({...B,_line:I})));if(!E.length)return;const A=document.createElement("div");A.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",A.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${b.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${E.map(I=>{const q={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[I._line]||"#555",B=Be(I,I._line)+(I.boost||0);return`<div class="bp-item" data-cid="${I.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${q};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${I.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${B}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(A),(S=A.querySelector("#bp-close"))==null||S.addEventListener("click",()=>A.remove()),A.querySelectorAll(".bp-item").forEach(I=>{I.addEventListener("click",async()=>{const q=I.dataset.cid,B=E.find(Y=>Y.cardId===q);if(!B)return;const F=(_[B._line]||[]).find(Y=>Y.cardId===q);F&&(F.boost=(F.boost||0)+b.boostValue),A.remove(),await j({[p+"Team"]:_,boostUsed:!0})})})}function P(_=null){var ce,de;if(!(b.phase===p+"-attack")){g("Remplacement uniquement avant votre attaque","warning");return}const A=b[p+"Team"],S=b["usedSubIds_"+p]||[],I=b.maxSubs||3;if(S.length>=I){g(`Maximum ${I} remplacements atteint`,"warning");return}const q=Object.entries(A).flatMap(([ne,ue])=>(ue||[]).filter(fe=>fe.used).map(fe=>({...fe,_line:ne}))),B=(b[p+"Subs"]||[]).filter(ne=>!S.includes(ne.cardId));if(!q.length){g("Aucun joueur utilisé à remplacer","warning");return}if(!B.length){g("Aucun remplaçant disponible","warning");return}let F=Math.max(0,q.findIndex(ne=>ne.cardId===_));const Y=((ce=q[F])==null?void 0:ce._line)||((de=q[F])==null?void 0:de.job);let W=Math.max(0,B.findIndex(ne=>ne.job===Y)),X=!1;const re=document.createElement("div");re.id="pvp-sub-overlay",re.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function J(){var ze,Me,Ne,Ge,Pe,bt;const ne=q[F],ue=B[W],fe=Math.min(130,Math.round((window.innerWidth-90)/2)),xe=Math.round(fe*1.35),Z=je=>`background:rgba(255,255,255,0.12);border:none;color:${je?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${je?"default":"pointer"};flex-shrink:0`;re.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${S.length}/${I})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${Z(W===0)}" ${W===0?"disabled":""}>▲</button>
          <div>${ue?Je({...ue,used:!1,boost:0},fe,xe):"<div>—</div>"}</div>
          <button id="pin-down" style="${Z(W>=B.length-1)}" ${W>=B.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${W+1}/${B.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${Z(F===0)}" ${F===0?"disabled":""}>▲</button>
          <div>${ne?Je({...ne,used:!1,boost:0},fe,xe):"<div>—</div>"}</div>
          <button id="pout-down" style="${Z(F>=q.length-1)}" ${F>=q.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${F+1}/${q.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(ze=re.querySelector("#psub-close"))==null||ze.addEventListener("click",()=>re.remove()),(Me=re.querySelector("#pout-up"))==null||Me.addEventListener("click",()=>{F>0&&(F--,J())}),(Ne=re.querySelector("#pout-down"))==null||Ne.addEventListener("click",()=>{F<q.length-1&&(F++,J())}),(Ge=re.querySelector("#pin-up"))==null||Ge.addEventListener("click",()=>{W>0&&(W--,J())}),(Pe=re.querySelector("#pin-down"))==null||Pe.addEventListener("click",()=>{W<B.length-1&&(W++,J())});const ye=(je,Oe,Re,et)=>{const Ke=re.querySelector("#"+je);if(!Ke)return;let tt=0;Ke.addEventListener("touchstart",De=>{tt=De.touches[0].clientY},{passive:!0}),Ke.addEventListener("touchend",De=>{const Ve=De.changedTouches[0].clientY-tt;if(Math.abs(Ve)<30)return;const it=Oe();Ve<0&&it<et-1?(Re(it+1),J()):Ve>0&&it>0&&(Re(it-1),J())},{passive:!0})};ye("pin-panel",()=>W,je=>W=je,B.length),ye("pout-panel",()=>F,je=>F=je,q.length),(bt=re.querySelector("#psub-confirm"))==null||bt.addEventListener("click",async je=>{if(je.preventDefault(),je.stopPropagation(),X)return;X=!0;const Oe=q[F],Re=B[W];if(!Oe||!Re)return;const et=Oe._line,Ke=(A[et]||[]).findIndex(Ve=>Ve.cardId===Oe.cardId);if(Ke===-1){g("Erreur : joueur introuvable","error"),re.remove();return}const tt={...Re,_line:et,position:Oe.position,used:!1,boost:0};A[et].splice(Ke,1,tt);const De=[...S,Re.cardId];re.remove(),H(Oe,Re,async()=>{await j({[p+"Team"]:A,[m+"Team"]:b[m+"Team"],["usedSubIds_"+p]:De})})})}document.body.appendChild(re),J()}function H(_,E,A){const S={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const q=(Y,W,X)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${W};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${X}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${S[Y.job]||"#555"};border:3px solid ${W};position:relative;overflow:hidden;margin:0 auto">
        ${Lt(Y)?`<img src="${Lt(Y)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(Y.name||"").slice(0,12)}</div>
    </div>`;I.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${q(E,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${q(_,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(I);let B=!1;const F=()=>{B||(B=!0,I.remove(),setTimeout(()=>A(),50))};I.addEventListener("click",F),setTimeout(F,2200)}function U(){var E;const _=document.createElement("div");_.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",_.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${b[m+"Name"]}</div>
      <div style="width:min(90vw,420px)">${zt(b[m+"Team"],b[m+"Formation"],null,[],We(),ot())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(_),(E=_.querySelector("#pvp-opp-close"))==null||E.addEventListener("click",()=>_.remove())}function C(){var A;const _=b.log||[],E=document.createElement("div");E.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",E.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${_.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[..._].reverse().map(S=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${S.type==="goal"?"#FFD700":S.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${S.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild(E),(A=E.querySelector("#pvp-hist-close"))==null||A.addEventListener("click",()=>E.remove())}async function N(){if(b.phase!==p+"-attack")return;const _=p==="p1"?"p2":"p1",E=(b.round||0)+1,A=[...b.log||[]];A.push({type:"info",text:`⏭️ ${b[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const S=he(b),I=$e(_),q=S||!I?"finished":_+"-attack";await j({["selected_"+p]:[],modifiers:{...b.modifiers,[p]:{}},pendingAttack:null,phase:q,attacker:_,round:E,log:A}),q==="finished"&&await Ce(b)}async function Ee(){const _=b[p+"Team"],E=!["GK","DEF","MIL","ATT"].some(q=>(b[m+"Team"][q]||[]).some(B=>!B.used)),A=(b["selected_"+p]||[]).map(q=>{const B=(_[q._role]||[]).find(de=>de.cardId===q.cardId)||q,F=E&&["GK","DEF"].includes(q._role),Y=_[q._role]||[],W=Y.findIndex(de=>de.cardId===q.cardId),X=mt(Y.length),re=W>=0?X[W]:B._col??1,J=b.stadiumDef||b.homeStadiumDef||null,ce=B.stadiumBonus||J&&(J.club_id&&String(B.club_id)===String(J.club_id)||J.country_code&&B.country_code===J.country_code)||!1;return{...B,_line:q._role,_col:re,stadiumBonus:ce,...F?{note_a:Math.max(1,Number(B.note_a)||0)}:{}}});if(!A.length)return;const S=ci(A,b.modifiers[p]||{});pe(p,A.map(q=>q.cardId)),A.forEach(q=>{const B=(_[q._role]||[]).find(F=>F.cardId===q.cardId);B&&(B.used=!0)}),b["selected_"+p]=[],se();const I=[...b.log||[]];if(E){const q=(b[p+"Score"]||0)+1,B=A.map(re=>histPlayer(re));I.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:B,homeTotal:S.total,aiTotal:0});const F=(b.round||0)+1,Y=p==="p1"?"p2":"p1",W={...b,[p+"Team"]:_,[p+"Score"]:q},X=he(W);O.add(F),at(B,q,b[m+"Score"]||0,!0,async()=>{await j({[p+"Team"]:_,[p+"Score"]:q,["selected_"+p]:[],modifiers:{...b.modifiers,[p]:{}},pendingAttack:null,phase:X?"finished":Y+"-attack",attacker:Y,round:F,log:I}),X&&await Ce({...b,[p+"Score"]:q})});return}I.push({type:"pending",text:`⚔️ ${b[p+"Name"]} attaque (${S.total})`}),await j({[p+"Team"]:_,[m+"Team"]:b[m+"Team"],pendingAttack:{...S,players:A,side:p},["selected_"+p]:[],modifiers:{...b.modifiers,[p]:{}},phase:m+"-defense",log:I})}async function _e(){const _=b[p+"Team"],E=(b["selected_"+p]||[]).map(ne=>{const ue=(_[ne._role]||[]).find(ze=>ze.cardId===ne.cardId)||ne,fe=_[ne._role]||[],xe=fe.findIndex(ze=>ze.cardId===ne.cardId),Z=mt(fe.length),ye=xe>=0?Z[xe]:ue._col??1;return{...ue,_line:ne._role,_col:ye}}),A=pi(E,b.modifiers[p]||{});pe(p,E.map(ne=>ne.cardId)),E.forEach(ne=>{const ue=(_[ne._role]||[]).find(fe=>fe.cardId===ne.cardId);ue&&(ue.used=!0)}),b["selected_"+p]=[],se();const S=ui(b.pendingAttack.total,A.total,b.modifiers[p]||{}),I=b.pendingAttack.side,q=S==="attack"||(S==null?void 0:S.goal),B=I==="p1"?"p2":"p1",F=(b.round||0)+1,Y=(b.pendingAttack.players||[]).map(ne=>histPlayer(ne)),W=[...b.log||[]];W.push({type:"duel",isGoal:q,homeScored:q&&I===p,text:q?`⚽ BUT de ${b[I+"Name"]} ! (${b.pendingAttack.total} vs ${A.total})`:`✋ Attaque stoppée (${b.pendingAttack.total} vs ${A.total})`,homePlayers:Y,aiPlayers:E.map(ne=>histPlayer(ne)),homeTotal:b.pendingAttack.total,aiTotal:A.total});const X=q?(b[I+"Score"]||0)+1:b[I+"Score"]||0,re={...b,[p+"Team"]:_,[I+"Score"]:X},J=he(re),ce=J?"finished":B+"-attack",de=async()=>{await j({[p+"Team"]:_,[m+"Team"]:b[m+"Team"],[I+"Score"]:X,["selected_"+p]:[],modifiers:{...b.modifiers,[p]:{}},pendingAttack:null,phase:ce,attacker:B,round:F,log:W}),(ce==="finished"||J)&&await Ce({...b,[I+"Score"]:X})};if(q){const ne=I===p,ue=ne?X:b[p+"Score"]||0,fe=ne?b[m+"Score"]||0:X;O.add(F),at(Y,ue,fe,ne,de)}else await de()}function we(_){return["MIL","ATT"].some(E=>(_[E]||[]).some(A=>!A.used))}function me(_){return["GK","DEF","MIL","ATT"].some(E=>(_[E]||[]).some(A=>!A.used))}function Le(_){return me(_)&&!we(_)}function $e(_){const E=b[_+"Team"],A=b[(_==="p1"?"p2":"p1")+"Team"];return!!(we(E)||!me(A)&&Le(E))}function he(_){const E=["MIL","ATT"].some(W=>(_.p1Team[W]||[]).some(X=>!X.used)),A=["MIL","ATT"].some(W=>(_.p2Team[W]||[]).some(X=>!X.used)),S=me(_.p1Team),I=me(_.p2Team);return!E&&!(!I&&S)&&(!A&&!(!S&&I))}function Se(_){const E=_.p1Score||0,A=_.p2Score||0;return E===A?null:E>A?w.home_id:w.away_id}async function Ce(_){try{const E=Se(_),A=E?w.home_id===E?w.away_id:w.home_id:null;await v.from("matches").update({status:"finished",winner_id:E,home_score:_.p1Score||0,away_score:_.p2Score||0}).eq("id",i),E&&A&&updateEvolutiveCards(E,A).catch(()=>{})}catch(E){console.error("[PvP] finishMatch:",E)}}function Fe(){var I;const _=b[p+"Score"],E=b[m+"Score"],A=_>E,S=_===E;He(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${A?"🏆":S?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${A?"Victoire !":S?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${_} - ${E}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(I=document.getElementById("pvp-home"))==null||I.addEventListener("click",()=>{try{v.removeChannel(te)}catch{}Ue(e),x("home")})}se()}async function ni(e,t,i=!1){var s,c;const{state:n,navigate:a,toast:o}=t,r=i&&((c=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:c.rankedData)||null;await At(e,t,i?"ranked":"random",async({deckId:l,formation:d,starters:u,subsRaw:f,gcCardsEnriched:x,gcDefs:g,stadiumDef:p})=>{const m=x||[];He(e),await qo(e,t,l,d,u,f,m,g,p,i,r)})}async function Bo(e,t,i){return jo(e,t,i)}async function qo(e,t,i,n,a,o,r=[],s=[],c=null,l=!1,d=null){var G,O;const{state:u,navigate:f,toast:x}=t,g=(d==null?void 0:d.mmr)??((G=u.profile)==null?void 0:G.mmr)??1e3,p=l?si(g):null,m=l?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",y=l?(p==null?void 0:p.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${m};color:#fff;padding:32px;text-align:center;gap:20px">
      ${l?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${l?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${l?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(g)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${y};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`,(O=document.getElementById("cancel-mm"))==null||O.addEventListener("click",()=>{$==null||$.unsubscribe(),Ue(e),f("home")});const h=u.user.id,{data:w}=await v.from("matchmaking_queue").select("id").eq("user_id",h).single();w||await v.from("matchmaking_queue").insert({user_id:h,deck_id:i,formation:n,mmr:g,is_ranked:l});let $,b=!1;const R=async()=>{if(b)return;const{data:ee}=await v.from("matches").select("id, home_id, away_id").or(`home_id.eq.${h},away_id.eq.${h}`).eq("status","in_progress").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(ee){b=!0,$==null||$.unsubscribe(),await v.from("matchmaking_queue").delete().eq("user_id",h);const oe=ee.home_id===h;await Mt(e,t,ee.id,oe,{myGC:r,gcDefs:s,stadiumDef:c,isRanked:l,rankedData:d,onMatchEnd:l?Do:null})}};if(await R(),b)return;$=v.channel(`mm_${h}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"matches",filter:`home_id=eq.${h}`},R).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`away_id=eq.${h}`},R).subscribe();const L=setInterval(R,3e3);setTimeout(()=>{clearInterval(L),$==null||$.unsubscribe()},12e4)}async function Do(e,t){const{state:i,toast:n}=t,{winnerId:a,homeId:o,awayId:r,homeScore:s,awayScore:c,matchId:l}=e,d=i.user.id,u=o===d,f=a===d,{data:x}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",d).single(),{data:g}=await v.from("users").select("mmr, mmr_rd, mmr_v").eq("id",u?r:o).single();if(x&&g){const p=gn(x.mmr,x.mmr_rd,x.mmr_v,g.mmr,g.mmr_rd,f?1:0);await v.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:f?v.sql`mmr_wins + 1`:void 0,mmr_losses:f?void 0:v.sql`mmr_losses + 1`}).eq("id",d),n(f?`+MMR ↑ ${Math.round(p.mmr-x.mmr)}`:`-MMR ↓ ${Math.round(x.mmr-p.mmr)}`,f?"success":"error",4e3)}}const Fo=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:ni,resumePvpMatch:Bo},Symbol.toStringTag,{value:"Module"}));async function Go(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.friendId||null,s=o.friendName||"Ami";await At(e,t,"friend",async({deckId:c,formation:l,starters:d,subsRaw:u,gcCardsEnriched:f,gcDefs:x,stadiumDef:g})=>{const p=f||[];He(e),r?await Po(e,t,c,p,x,g,r,s):await Ro(e,t,c,p,x,g)})}async function Po(e,t,i,n,a,o,r,s){var p;const{state:c,navigate:l,toast:d}=t,u=c.user.id,{data:f}=await v.from("friend_match_invites").insert({inviter_id:u,invitee_id:r,status:"pending"}).select("id").single();e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`,(p=document.getElementById("cancel-friend"))==null||p.addEventListener("click",async()=>{f&&await v.from("friend_match_invites").update({status:"declined"}).eq("id",f.id),Ue(e),l("home")});let x=!1;const g=v.channel(`friend_${u}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"matches",filter:`home_id=eq.${u}`},async({new:m})=>{x||(x=!0,g.unsubscribe(),f&&await v.from("friend_match_invites").update({status:"accepted"}).eq("id",f.id),await Mt(e,t,m.id,!0,{myGC:n,gcDefs:a,stadiumDef:o}))}).subscribe();setTimeout(()=>{x||(g.unsubscribe(),d("Invitation expirée","info"),l("home"))},12e4)}async function Ro(e,t,i,n,a,o){const{state:r,navigate:s,toast:c}=t,l=r.user.id,{data:d}=await v.from("matches").select("id, home_id, away_id, status").eq("away_id",l).eq("status","in_progress").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!d){c("Aucun match en attente","error"),s("home");return}await Mt(e,t,d.id,!1,{myGC:n,gcDefs:a,stadiumDef:o})}const ft="#1A6B3C",Xe="#D4A017";async function No(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await Ze(e,t,i);return}await st(e,t)}async function st(e,t,i="waiting"){var y;const{state:n}=t,a=n.profile.id,{data:o}=await v.from("mini_league_members").select("league_id").eq("user_id",a),r=(o||[]).map(h=>h.league_id),{data:s,error:c}=await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=c?(await v.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:s||[],u=(r.length?await v.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],f=u.filter(h=>h.status==="waiting"&&!h.is_archived),x=u.filter(h=>h.status==="active"&&!h.is_archived),g=u.filter(h=>h.is_archived||h.status==="finished"),p=l.filter(h=>!r.includes(h.id)),m=[{key:"waiting",label:"🟡 En attente",count:f.length+p.length},{key:"active",label:"🟢 En cours",count:x.length},{key:"archived",label:"📁 Archivées",count:g.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${m.map(h=>`<button class="ml-tab" data-tab="${h.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===h.key?ft:"transparent"};background:none;font-size:12px;font-weight:${i===h.key?"900":"600"};color:${i===h.key?ft:"#888"};cursor:pointer">${h.label}${h.count?` (${h.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Oo(f,p,a):i==="active"?Ho(x,a):Uo(g,a)}
    </div>
  </div>`,(y=document.getElementById("ml-create-btn"))==null||y.addEventListener("click",()=>Ko(e,t)),e.querySelectorAll(".ml-tab").forEach(h=>h.addEventListener("click",()=>st(e,t,h.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(h=>h.addEventListener("click",()=>Ze(e,t,h.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(h=>h.addEventListener("click",w=>{w.stopPropagation(),rn(e,t,h.dataset.join,h.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(h=>h.addEventListener("click",w=>{w.stopPropagation(),oi(e,t,h.dataset.delete,h.dataset.name,i)}))}function Ht(e,t,i=!1){var r,s;const n=e.creator_id===t,a=e.pot||0,o=((s=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:s.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
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
  </div>`}function Oo(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(a=>Ht(a,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(a=>Ht(a,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Ho(e,t){return e.length?e.map(i=>Ht(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function Uo(e,t){return e.length?e.map(i=>Ht(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Ko(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var g,p,m,y;const{toast:n}=t,a=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,s=((g=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:g.value)||"public",c=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",l=((y=(m=document.getElementById("ml-pwd"))==null?void 0:m.value)==null?void 0:y.trim())||null;if(!a){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!l){n("Mot de passe requis","error");return}const{data:d,error:u}=await v.from("mini_leagues").insert({name:a,creator_id:t.state.profile.id,type:s,password:l,mode:c,max_players:o,entry_fee:r}).select().single();if(u){n("Erreur : "+u.message,"error");return}const{data:f}=await v.from("users").select("credits").eq("id",t.state.profile.id).single();if(((f==null?void 0:f.credits)||0)<r){await v.from("mini_leagues").delete().eq("id",d.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await v.from("users").update({credits:f.credits-r}).eq("id",t.state.profile.id),await v.from("mini_leagues").update({pot:r}).eq("id",d.id),await v.from("mini_league_members").insert({league_id:d.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=f.credits-r);const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),Ze(e,t,d.id)})}function Vo(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=a=>{t.remove(),e(a)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",a=>{a.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",a=>{a.target===t&&n(null)})})}async function rn(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id,{data:s}=await v.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!s){a("Mini League introuvable","error");return}if(s.status!=="waiting"){a("Cette Mini League a déjà démarré","warning");return}const{count:c}=await v.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(c>=s.max_players){a("La Mini League est complète","warning");return}if(n==="private"){const p=await Vo();if(p===null)return;if(s.password!==p){a("Mot de passe incorrect","error");return}}const l=s.entry_fee||100,{data:d}=await v.from("users").select("credits").eq("id",r).single();if(((d==null?void 0:d.credits)||0)<l){a(`Crédits insuffisants — il te faut ${l.toLocaleString("fr")} cr. (solde : ${((d==null?void 0:d.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:u}=await v.from("mini_league_members").insert({league_id:i,user_id:r});if(u){a("Erreur inscription : "+u.message,"error");return}const{error:f}=await v.from("users").update({credits:d.credits-l}).eq("id",r),{error:x}=await v.from("mini_leagues").update({pot:(s.pot||0)+l}).eq("id",i);(f||x)&&console.error("Erreur post-inscription:",f,x),o.profile&&(o.profile.credits=d.credits-l);const g=document.getElementById("nav-credits");g&&(g.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`✅ Inscrit ! −${l.toLocaleString("fr")} cr. · Pot : ${((s.pot||0)+l).toLocaleString("fr")} cr.`,"success"),Ze(e,t,i)}async function Yo(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:s}=await v.from("mini_leagues").select("pot,status").eq("id",i).single();if(!s||s.status!=="waiting"){a("Impossible — la league a déjà démarré","error");return}const{data:c}=await v.from("users").select("credits").eq("id",r).single();await v.from("mini_leagues").update({pot:Math.max(0,(s.pot||0)-n)}).eq("id",i),await v.from("users").update({credits:((c==null?void 0:c.credits)||0)+n}).eq("id",r),await v.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),o.profile&&(o.profile.credits=((c==null?void 0:c.credits)||0)+n);const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),st(e,t,"waiting")}async function oi(e,t,i,n,a){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await v.from("mini_league_matches").delete().eq("league_id",i),await v.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await v.from("mini_leagues").delete().eq("id",i);if(r){o("Erreur suppression ("+r.message+")","error");return}o("Mini League supprimée avec succès","success"),st(e,t,a)}async function Wo(e,t,i){await v.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),st(e,t,"archived")}async function Ze(e,t,i){var $,b,R,L,G,O,ee,oe,te;const{state:n,toast:a}=t,o=n.profile.id,[{data:r},{data:s},{data:c}]=await Promise.all([v.from("mini_leagues").select("*").eq("id",i).single(),v.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),v.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){a("Introuvable","error"),await st(e,t);return}const l=(s||[]).some(j=>j.user_id===o),d=r.creator_id===o,u=(s||[]).map(j=>j.user).filter(Boolean),f=sn(u,c||[]),x=(c||[]).filter(j=>j.matchday===r.current_day),g=r.pot||0,p=r.entry_fee||100,m=x.length>0&&x.every(j=>j.status==="finished"||j.status==="bye"),y=r.current_day>=r.total_days,h=(s||[]).find(j=>j.user_id===o);e.innerHTML=`
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
        ${l?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${l&&!d?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${x.map(j=>Di(j,u,o,l)).join("")}
        ${d&&m&&!y?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${d&&m&&y?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
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
          <tbody>${f.map((j,z)=>{const k=g>0&&r.status==="finished"?z===0?Math.floor(g*.7):z===1?Math.floor(g*.2):z===2?Math.floor(g*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${j.userId===o?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${z===0?Xe:z<3?ft:"#555"}">${["🥇","🥈","🥉"][z]||z+1}</td>
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
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(j,z)=>z+1).reverse().map(j=>{const z=(c||[]).filter(k=>k.matchday===j);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${j}</div>${z.map(k=>Di(k,u,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${d&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const w=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if(($=document.getElementById("ml-back"))==null||$.addEventListener("click",()=>st(e,t,w)),(b=document.getElementById("ml-start-btn"))==null||b.addEventListener("click",()=>Xo(e,t,r,u)),(R=document.getElementById("ml-next-day"))==null||R.addEventListener("click",()=>Jo(e,t,i)),(L=document.getElementById("ml-finish-btn"))==null||L.addEventListener("click",()=>an(e,t,i,g,f,u)),(G=document.getElementById("ml-join-now"))==null||G.addEventListener("click",()=>rn(e,t,i,r.type)),(O=document.getElementById("ml-leave-btn"))==null||O.addEventListener("click",()=>Yo(e,t,i,p)),(ee=document.getElementById("ml-delete-btn"))==null||ee.addEventListener("click",()=>oi(e,t,i,r.name,"waiting")),(oe=document.getElementById("ml-delete-now"))==null||oe.addEventListener("click",()=>oi(e,t,i,r.name,w)),(te=document.getElementById("ml-archive-btn"))==null||te.addEventListener("click",()=>Wo(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(j=>{j.addEventListener("click",()=>{const z=x.find(k=>k.id===j.dataset.playMatch);z&&t.navigate("match-mini-league",{mlMatchId:z.id,leagueId:i})})}),r.status==="finished"&&h){const j=f.findIndex(z=>z.userId===o);j>=0&&j<3&&h.prize_amount>0&&setTimeout(()=>Qo(e,t,r,h,j),400)}}function Di(e,t,i,n,a=!1){const o=u=>t.find(f=>f.id===u);if(e.is_bye){const u=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"?"} exempté(e)</div>`}const r=o(e.home_id),s=o(e.away_id),c=e.home_id===i||e.away_id===i,l=c&&e.status==="pending"&&n&&!a,d=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${c?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${c?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?ft:"#999"}">${d}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${l?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Xo(e,t,i,n){const{toast:a,state:o}=t,r=Zo(n.map(l=>l.id),i.mode),s=[];r.forEach((l,d)=>l.forEach(u=>s.push({league_id:i.id,matchday:d+1,home_id:u.home||u.bye,away_id:u.away||null,is_bye:!!u.bye,status:u.bye?"bye":"pending"})));const{error:c}=await v.from("mini_league_matches").insert(s);if(c){a("Erreur calendrier : "+c.message,"error");return}await v.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),a(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),Ze(e,t,i.id)}async function Jo(e,t,i){const{data:n}=await v.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),a=(n.current_day||0)+1;if(a>(n.total_days||0)){await an(e,t,i,n.pot||0,null,null);return}await v.from("mini_leagues").update({current_day:a}).eq("id",i),t.toast(`Journée ${a} commencée !`,"success"),Ze(e,t,i)}async function an(e,t,i,n,a,o){const{toast:r,state:s}=t;let c=a,l=o;if(!c){const{data:u}=await v.from("mini_league_matches").select("*").eq("league_id",i),{data:f}=await v.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);l=(f||[]).map(x=>x.user).filter(Boolean),c=sn(l,u||[])}const d=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(c.slice(0,3).map((u,f)=>d[f]?v.from("mini_league_members").update({prize_amount:d[f],prize_claimed:!1}).eq("league_id",i).eq("user_id",u.userId):Promise.resolve())),await v.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),Ze(e,t,i)}async function Qo(e,t,i,n,a){var f,x;const{state:o,toast:r}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],c=["🥇","🥈","🥉"][a],l=n.prize_amount||s[a]||0,d=n.prize_claimed,u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",u.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${c}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${a===0?"Champion !":a===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${Xe};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${d?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${Xe}">${l.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${a===0?"70%":a===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${d?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${Xe};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${l.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(u),(f=u.querySelector("#prize-close"))==null||f.addEventListener("click",()=>u.remove()),u.addEventListener("click",g=>{g.target===u&&u.remove()}),(x=u.querySelector("#claim-prize-btn"))==null||x.addEventListener("click",async()=>{const{data:g}=await v.from("users").select("credits").eq("id",o.profile.id).single();await v.from("users").update({credits:((g==null?void 0:g.credits)||0)+l}).eq("id",o.profile.id),await v.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",o.profile.id),o.profile&&(o.profile.credits=((g==null?void 0:g.credits)||0)+l);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),r(`💰 +${l.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),u.remove(),Ze(e,t,i.id)})}function Zo(e,t){const n=e.length%2===0?[...e]:[...e,null],a=n.length;let o=n.slice(1);const r=[];for(let s=0;s<a-1;s++){const c=[],l=[n[0],...o];for(let d=0;d<a/2;d++){const u=l[d],f=l[a-1-d];u===null?c.push({bye:f}):f===null?c.push({bye:u}):c.push({home:u,away:f})}r.push(c),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(s=>s.map(c=>c.bye?c:{home:c.away,away:c.home}))]:r}function sn(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const a=i[n.home_id],o=i[n.away_id];!a||!o||(a.played++,o.played++,a.goalsFor+=n.home_score,a.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(a.won++,a.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,a.lost++):(a.drawn++,a.points++,o.drawn++,o.points++),a.goalDiff=a.goalsFor-a.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,a)=>a.points-n.points||a.goalDiff-n.goalDiff||a.goalsFor-n.goalsFor)}async function Fi(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.leagueId||null,s=o.mlMatchId||null;if(s&&r){await tr(e,t,s,r);return}if(r){await mi(e,t,r);return}await er(e,t)}async function er(e,t){const{state:i,navigate:n,toast:a}=t;await At(e,t,"mini_league",async({deckId:o,gcCardsEnriched:r,gcDefs:s,stadiumDef:c})=>{He(e);const l=r||[],d=i.user.id,{data:u}=await v.from("mini_leagues").insert({creator_id:d,deck_id:o,status:"waiting",gc_cards:l.map(f=>f.id)}).select("id").single();if(!u){a("Erreur création ligue","error"),n("home");return}await mi(e,t,u.id)})}async function mi(e,t,i){var u,f,x;const{state:n,navigate:a,toast:o}=t,r=n.user.id,{data:s}=await v.from("mini_leagues").select("*, creator:users!creator_id(pseudo), participants:mini_league_participants(user_id, deck_id, users(pseudo))").eq("id",i).single();if(!s){o("Ligue introuvable","error"),a("home");return}const c=s.creator_id===r,l=s.participants||[],d=l.length>=4;e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:28px">🏆</div>
        <h2 style="margin:8px 0">Mini Ligue</h2>
        <div style="font-size:13px;opacity:0.6">Code : <b>${i.slice(0,8).toUpperCase()}</b></div>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:16px">
        <div style="font-size:12px;opacity:0.6;margin-bottom:8px">Participants (${l.length}/4)</div>
        ${l.map(g=>{var p;return`
          <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
            <span>⚽</span>
            <span style="font-size:14px;font-weight:700">${((p=g.users)==null?void 0:p.pseudo)||"?"}</span>
            ${g.user_id===s.creator_id?'<span style="font-size:10px;color:#D4A017">CRÉATEUR</span>':""}
          </div>`}).join("")}
        ${Array(4-l.length).fill(0).map(()=>`
          <div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06);opacity:0.3;font-size:13px">En attente…</div>`).join("")}
      </div>

      <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto">
        ${c&&d?`
          <button id="start-league" style="padding:16px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            🚀 Lancer la ligue
          </button>`:""}
        ${l.find(g=>g.user_id===r)?"":`
          <button id="join-league" style="padding:16px;border-radius:12px;border:none;background:#1a3a6b;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            ➕ Rejoindre
          </button>`}
        <button id="back-home" style="padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:14px;cursor:pointer">
          Retour
        </button>
      </div>
    </div>`,(u=document.getElementById("start-league"))==null||u.addEventListener("click",async()=>{await v.from("mini_leagues").update({status:"in_progress"}).eq("id",i),await dn(e,t,i)}),(f=document.getElementById("join-league"))==null||f.addEventListener("click",async()=>{await At(e,t,"mini_league",async({deckId:g,gcCardsEnriched:p})=>{const m=p||[];await v.from("mini_league_participants").insert({league_id:i,user_id:r,deck_id:g,gc_cards:m.map(y=>y.id)}),o("Rejoint !","success"),await mi(e,t,i)})}),(x=document.getElementById("back-home"))==null||x.addEventListener("click",()=>a("home"))}async function dn(e,t,i){const{navigate:n,toast:a}=t,{data:o}=await v.from("mini_league_matches").select("id, match_id, home_id, away_id, status").eq("league_id",i).eq("status","pending").order("round",{ascending:!0}).limit(1),r=o==null?void 0:o[0];if(!r){await ir(e,t,i);return}const s=t.state.user.id,c=r.home_id===s;await Mt(e,t,r.match_id,c,{mlLeagueId:i,mlMatchId:r.id,onMatchEnd:async l=>{await v.from("mini_league_matches").update({status:"finished",home_score:l.homeScore,away_score:l.awayScore,winner_id:l.winnerId}).eq("id",r.id),await dn(e,t,i)}})}async function tr(e,t,i,n){const{data:a}=await v.from("mini_league_matches").select("match_id, home_id, away_id").eq("id",i).single();if(!a){t.toast("Match introuvable","error"),t.navigate("home");return}const o=a.home_id===t.state.user.id;await Mt(e,t,a.match_id,o,{mlLeagueId:n,mlMatchId:i,onMatchEnd:async r=>{await v.from("mini_league_matches").update({status:"finished",home_score:r.homeScore,away_score:r.awayScore,winner_id:r.winnerId}).eq("id",i),t.navigate("home")}})}async function ir(e,t,i){var d;const{navigate:n}=t,{data:a}=await v.from("mini_league_matches").select("home_id, away_id, home_score, away_score, winner_id, home:users!home_id(pseudo), away:users!away_id(pseudo)").eq("league_id",i),o={},r={};(a||[]).forEach(u=>{[u.home_id,u.away_id].forEach(f=>{o[f]||(o[f]=0),r[f]||(r[f]=0)}),u.winner_id?o[u.winner_id]=(o[u.winner_id]||0)+3:(o[u.home_id]=(o[u.home_id]||0)+1,o[u.away_id]=(o[u.away_id]||0)+1),r[u.home_id]=(r[u.home_id]||0)+(u.home_score||0),r[u.away_id]=(r[u.away_id]||0)+(u.away_score||0)});const s={};(a||[]).forEach(u=>{var f,x;s[u.home_id]=(f=u.home)==null?void 0:f.pseudo,s[u.away_id]=(x=u.away)==null?void 0:x.pseudo});const c=Object.keys(o).sort((u,f)=>o[f]-o[u]||r[f]-r[u]),l=["🥇","🥈","🥉","4️⃣"];e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:36px">🏆</div>
        <h2>Résultats de la Mini Ligue</h2>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;overflow:hidden">
        ${c.map((u,f)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.06)">
            <div style="font-size:24px">${l[f]||"•"}</div>
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
    </div>`,(d=document.getElementById("back-home"))==null||d.addEventListener("click",()=>n("home"))}const nr="/",or=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function rr(e,t,i){let n=0;const a=document.createElement("div");a.id="tutorial-overlay",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var d,u,f;const s=t[n],c=n===t.length-1,l=Math.round((n+1)/t.length*100);a.innerHTML=`
      <div style="background:#fff;border-radius:20px;width:100%;max-width:420px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.4)">
        <!-- Barre de progression -->
        <div style="height:4px;background:#eee">
          <div style="height:100%;width:${l}%;background:${s.color};transition:width .3s"></div>
        </div>
        <!-- En-tête -->
        <div style="padding:24px 24px 0;text-align:center">
          <div style="font-size:56px;margin-bottom:10px;line-height:1">${s.emoji}</div>
          <div style="font-size:18px;font-weight:900;color:#111;margin-bottom:4px">${s.title}</div>
          <div style="font-size:11px;color:#aaa">${n+1} / ${t.length}</div>
        </div>
        <!-- Image optionnelle -->
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${nr}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
        <!-- Contenu -->
        <div style="padding:${s.image_url?"8":"16"}px 24px 20px;flex:1;overflow-y:auto;font-size:14px;color:#333;line-height:1.7">
          ${s.content}
        </div>
        <!-- Navigation -->
        <div style="padding:16px 24px;border-top:1px solid #f0f0f0;display:flex;gap:10px;align-items:center">
          ${n>0?'<button id="tuto-prev" style="padding:10px 18px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:13px;font-weight:700;cursor:pointer;color:#555;flex-shrink:0">‹ Précédent</button>':'<div style="flex:1"></div>'}
          <button id="tuto-skip" style="flex:1;padding:10px;border-radius:10px;border:none;background:none;font-size:12px;color:#bbb;cursor:pointer">
            ${c?"":"Passer le tutoriel"}
          </button>
          <button id="tuto-next" style="padding:10px 22px;border-radius:10px;border:none;background:${s.color};color:#fff;font-size:14px;font-weight:900;cursor:pointer;flex-shrink:0">
            ${c?"🚀 Commencer !":"Suivant ›"}
          </button>
        </div>
      </div>
    `,a.querySelectorAll("ul,ol").forEach(x=>{x.style.paddingLeft="20px",x.style.marginTop="6px",x.style.marginBottom="6px"}),a.querySelectorAll("li").forEach(x=>{x.style.marginBottom="4px"}),a.querySelectorAll("p").forEach(x=>{x.style.marginBottom="8px"}),(d=a.querySelector("#tuto-prev"))==null||d.addEventListener("click",()=>{n--,o()}),(u=a.querySelector("#tuto-next"))==null||u.addEventListener("click",()=>{c?r():(n++,o())}),(f=a.querySelector("#tuto-skip"))==null||f.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{a.remove(),e!=null&&e.id&&await v.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(a),o()}async function ar(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:a,error:o}=await v.rpc("get_tutorial_steps");if(!o&&(a==null?void 0:a.length)>0)n=a,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:c}=await v.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!c&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${c==null?void 0:c.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):or;rr(e,r,()=>t("boosters"))}const Bt={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function lt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function sr(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await xi(e,t)}async function xi(e,t){const{state:i,toast:n}=t,{data:a}=await v.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:o}=await v.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  </div>`;let c="buy";const l=()=>{var p,m,y,h,w,$,b;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((m=document.getElementById("flt-club"))==null?void 0:m.value)||"").toLowerCase().trim(),country:(((y=document.getElementById("flt-country"))==null?void 0:y.value)||"").toLowerCase().trim(),job:((h=document.getElementById("flt-job"))==null?void 0:h.value)||"",rarity:((w=document.getElementById("flt-rarity"))==null?void 0:w.value)||"",note1:parseInt(($=document.getElementById("flt-note1"))==null?void 0:$.value)||0,note2:parseInt((b=document.getElementById("flt-note2"))==null?void 0:b.value)||0}};function d(p){const m=l();return p.filter(y=>{var O,ee,oe;const h=(O=y.card)==null?void 0:O.player;if(!h)return!1;const w=`${h.firstname} ${h.surname_real}`.toLowerCase(),$=(((ee=h.clubs)==null?void 0:ee.encoded_name)||"").toLowerCase(),b=(h.country_code||"").toLowerCase(),R=((oe=y.card)==null?void 0:oe.evolution_bonus)||0,L=lt(h,h.job,R),G=h.job2?lt(h,h.job2,R):0;return!(m.name&&!w.includes(m.name)||m.club&&!$.includes(m.club)||m.country&&!b.includes(m.country)||m.job&&h.job!==m.job||m.rarity&&h.rarity!==m.rarity||m.note1&&L<m.note1||m.note2&&G<m.note2)})}function u(p){var G,O,ee,oe;const m=(G=p.card)==null?void 0:G.player;if(!m)return"";const y=((O=p.card)==null?void 0:O.evolution_bonus)||0,h=lt(m,m.job,y),w=m.job2?lt(m,m.job2,y):0,$=(i.profile.credits||0)>=p.price,b=m.country_code?`https://flagsapi.com/${m.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,R=Bt[m.job]||"#bbb",L=m.job2?Bt[m.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${b?`<img src="${b}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(ee=m.clubs)!=null&&ee.logo_url?`<img src="${m.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${R};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${R};font-family:Arial Black,Arial">${h}</span>
        </div>
        ${w?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${L};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${L};font-family:Arial Black,Arial">${w}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${m.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((oe=p.seller)==null?void 0:oe.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${$?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${$?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function f(p){var G,O,ee,oe;const m=(G=p.card)==null?void 0:G.player;if(!m)return"";const y=((O=p.card)==null?void 0:O.evolution_bonus)||0,h=lt(m,m.job,y),w=m.job2?lt(m,m.job2,y):0,$=p.status==="sold",b=m.country_code?`https://flagsapi.com/${m.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,R=Bt[m.job]||"#bbb",L=m.job2?Bt[m.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${$?"opacity:0.7":""}">
      ${b?`<img src="${b}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(ee=m.clubs)!=null&&ee.logo_url?`<img src="${m.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${R};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${R};font-family:Arial Black,Arial">${h}</span>
        </div>
        ${w?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${L};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${L};font-family:Arial Black,Arial">${w}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${m.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m.surname_real}</div>
        <div style="font-size:10px;color:${$?"#22c55e":"#999"};margin-top:1px">
          ${$?`✅ Vendu à ${((oe=p.buyer)==null?void 0:oe.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${$?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const p=document.getElementById("mkt-content"),m=document.getElementById("mkt-filters");if(p){if(m.style.display=c==="buy"?"flex":"none",c==="buy"){const y=d(r);p.innerHTML=y.length?y.map(u).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const y=s.filter(w=>w.status==="active").sort((w,$)=>new Date($.listed_at)-new Date(w.listed_at)),h=s.filter(w=>w.status==="sold").sort((w,$)=>new Date($.sold_at||$.listed_at)-new Date(w.sold_at||w.listed_at));p.innerHTML=(y.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${y.length})</div>`+y.map(f).join(""):"")+(h.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${h.length})</div>`+h.map(f).join(""):"")+(!y.length&&!h.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(y=>y.addEventListener("click",()=>dr(y.dataset.buy,r,e,t))),p.querySelectorAll("[data-cancel]").forEach(y=>y.addEventListener("click",()=>cr(y.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{c=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(m=>{const y=m===p;m.style.background=y?"var(--green)":"#fff",m.style.color=y?"#fff":"var(--gray-600)",m.style.borderColor=y?"var(--green)":"var(--gray-200)"}),x()})});let g;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var m;(m=document.getElementById(p))==null||m.addEventListener("input",()=>{clearTimeout(g),g=setTimeout(x,250)})}),x()}async function dr(e,t,i,n){const{state:a,toast:o,refreshProfile:r}=n,s=t.find(d=>d.id===e);if(!s)return;const c=s.price;if((a.profile.credits||0)<c){o("Crédits insuffisants","error");return}lr(s,async()=>{const{error:d}=await v.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:a.profile.id});if(d){o("Erreur achat : "+d.message,"error");return}await r();const u=document.getElementById("nav-credits");u&&(u.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await xi(i,n)})}function lr(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(a);const o=s=>{a.remove(),s&&t()};a.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),a.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),a.addEventListener("click",s=>{s.target===a&&o(!1)})}async function cr(e,t,i){const{toast:n}=i,{data:a}=await v.from("market_listings").select("card_id").eq("id",e).single();if(await v.from("market_listings").update({status:"cancelled"}).eq("id",e),a!=null&&a.card_id){const{count:o}=await v.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",a.card_id).eq("status","active");o||await v.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",a.card_id)}n("Annonce retirée","success"),xi(t,i)}async function pr(e,t){var d,u,f,x;const{state:i,navigate:n}=t,a=((u=(d=t==null?void 0:t.state)==null?void 0:d.params)==null?void 0:u.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:o},{data:r}]=await Promise.all([v.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),v.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let s=a;function c(){var p,m;const g=document.getElementById("rankings-list");if(g){if(s==="global"){const y=o||[];g.innerHTML=y.length>0?y.map((h,w)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${h.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${w<3?"16":"13"}px">${w<3?["🥇","🥈","🥉"][w]:w+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${h.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${h.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${h.trophies_top1} 🥈${h.trophies_top2} 🥉${h.trophies_top3}</div>
            <div style="color:var(--gray-600)">${h.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const y=r||[];g.innerHTML=y.length>0?y.map((h,w)=>{const $=si(h.mmr??1e3),b=(h.ranked_wins||0)+(h.ranked_losses||0)+(h.ranked_draws||0),R=b>0?Math.round((h.ranked_wins||0)/b*100):0,L=h.id===i.profile.id,G=(h.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${L?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${w<3?["#D4A017","#a0a0a0","#cd7f32"][w]:"rgba(255,255,255,0.08)"};color:${w<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${w<3?"16":"13"}px">${w<3?["🥇","🥈","🥉"][w]:w+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${$.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${h.club_name} · ${$.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${G?"❓":$.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${$.color}">${G?"Placement":$.label}</div>
              ${G?"":`<div style="font-size:10px;color:var(--gray-600)">${R}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(p=document.getElementById("tab-global"))!=null&&p.style&&(document.getElementById("tab-global").style.cssText=l(s==="global")),(m=document.getElementById("tab-ranked"))!=null&&m.style&&(document.getElementById("tab-ranked").style.cssText=l(s==="ranked"))}}const l=g=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${g?"900":"400"};background:${g?"var(--green)":"rgba(255,255,255,0.06)"};color:${g?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📊 Classements</h2>
    </div>
    <div class="page-body">
      <div style="display:flex;gap:8px;margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;padding:4px">
        <button id="tab-global" style="${l(s==="global")}">🌍 Global</button>
        <button id="tab-ranked" style="${l(s==="ranked")}">⚔️ Ranked</button>
      </div>
      <div id="rankings-list" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>
  </div>`,c(),(f=document.getElementById("tab-global"))==null||f.addEventListener("click",()=>{s="global",c()}),(x=document.getElementById("tab-ranked"))==null||x.addEventListener("click",()=>{s="ranked",c()})}async function ur(e,t){var R,L,G,O;const{state:i,navigate:n,toast:a}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:s}]=await Promise.all([v.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),v.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){a("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(R=document.getElementById("ranked-back"))==null||R.addEventListener("click",()=>n("home"));return}const c=s.mmr??1e3,l=s.mmr_deviation??350,d=s.mmr_volatility??.06,u=s.placement_matches??0,f=u<10,x=Math.max(0,10-u),g=si(c),p=mn(c),m=Yt.findIndex(ee=>ee.id===g.id),y=Yt[m+1]||null,h={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},w=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),$=w>0?Math.round((s.ranked_wins||0)/w*100):0,b=Yt.map(ee=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${g.id===ee.id?1:.35};
      transform:${g.id===ee.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${g.id===ee.id?"28px":"20px"}">${ee.emoji}</div>
      <div style="font-size:9px;color:${ee.color};font-weight:${g.id===ee.id?"900":"400"};letter-spacing:0.5px">${ee.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${h[g.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

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
        ${y?`<span>${y.emoji} ${y.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${g.color},${g.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${y?y.label:"Maître"}</div>
    </div>`:""}

    <!-- Tiers panorama -->
    <div style="display:flex;justify-content:space-around;align-items:flex-end;padding:8px 4px">
      ${b}
    </div>

    <!-- Placement / Stats -->
    ${f?`
    <div style="background:rgba(255,215,0,0.1);border:1.5px solid #D4A017;border-radius:14px;padding:14px;text-align:center">
      <div style="font-size:13px;color:#D4A017;font-weight:700">🎯 Matchs de placement</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin:4px 0">${u}/10</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">Encore ${x} match${x>1?"s":""} — gains et pertes ×2</div>
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
  </div>`,(L=document.getElementById("ranked-back"))==null||L.addEventListener("click",()=>n("home")),(G=document.getElementById("ranked-leaderboard-btn"))==null||G.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(O=document.getElementById("ranked-play-btn"))==null||O.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:c,rd:l,sigma:d,isPlacement:f}})})}async function fr(e,{state:t,navigate:i,toast:n}){const a=t.profile;if(!a)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await v.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${a.id},away_id.eq.${a.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(d=>d.status==="finished"),c=(o||[]).filter(d=>d.status==="in_progress");function l(d){const u=d.home_id===a.id;u?d.home_score:d.away_score,u?d.away_score:d.home_score;const f=d.winner_id===a.id,x=d.home_score===d.away_score&&d.status==="finished",g=d.status!=="finished"?"…":x?"N":f?"V":"D",p=d.status!=="finished"||x?"#888":f?"#1A6B3C":"#c0392b";let m=r[d.mode]||d.mode;d.away_id===null&&!m.startsWith("IA")&&(m="IA");const h=d.home_id===a.id?d.away:d.home;let w;d.away_id===null?w=m:h?w=`${h.club_name||h.pseudo} (${h.pseudo})`:w="Adversaire";let $="";d.status==="in_progress"&&Date.now()-new Date(d.created_at).getTime()>3600*1e3&&($=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const b=new Date(d.created_at),R=b.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+b.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),L=d.status==="finished"?`${d.home_score} - ${d.away_score}`:`${d.home_score||0} - ${d.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${w}${$}</div>
        <div style="font-size:11px;color:var(--gray-600)">${m} · ${R}${d.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${L}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${g}</span>
      </div>
    </div>`}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>⚽ Mes matchs</h2>
      <p>${(o||[]).length} match(s)</p>
    </div>
    <div class="page-body">
      ${c.length>0?`
        <div class="section-title">En cours</div>
        <div class="card-panel" style="padding:0;margin-bottom:16px">
          ${c.map(l).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(l).join("")}
        </div>`:""}

      ${(o||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}xn(yn);const ve={user:null,profile:null,page:"home",params:{}};function ct(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function gr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function ri(){document.getElementById("modal-overlay").classList.add("hidden")}async function wt(){if(!ve.user)return;const{data:e}=await v.from("users").select("*").eq("id",ve.user.id).single();e&&(ve.profile=e)}function kt(e,t={}){ve.page=e,ve.params=t,ln()}async function ln(){var n,a,o,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===ve.page)});const t=document.getElementById("nav-credits");t&&ve.profile&&(t.textContent=`💰 ${(ve.profile.credits||0).toLocaleString("fr")}`);const i={state:ve,navigate:kt,toast:ct,openModal:gr,closeModal:ri,refreshProfile:wt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',ve.page){case"home":await Ii(e,i);break;case"collection":await Hn(e,i);break;case"decks":await ei(e,i);break;case"boosters":await ro(e,i);break;case"ranked":await ur(e,i);break;case"match":{const s=ve.params&&ve.params.matchMode||"vs_ai_easy";s==="random"?await ni(e,i,!1):s==="ranked"?await ni(e,i,!0):s==="friend"?await Go(e,i,(n=ve.params)==null?void 0:n.friendId,(a=ve.params)==null?void 0:a.friendName):s==="mini-league"?await Fi(e,i,(o=ve.params)==null?void 0:o.mlMatchId,(r=ve.params)==null?void 0:r.leagueId):await yo(e,i);break}case"market":await sr(e,i);break;case"rankings":await pr(e,i);break;case"matches":await fr(e,i);break;case"friends":await En(e,i);break;case"mini-league":await No(e,i);break;case"match-mini-league":{const s=ve.params||{};await Fi(e,i,s.mlMatchId,s.leagueId);break}default:await Ii(e,i)}}function mr(){var n;const e=document.getElementById("app"),t=ve.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",o=>{o.preventDefault(),kt(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>kt("home")),document.getElementById("nav-credits").addEventListener("click",()=>kt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>xr())}async function xr(){const{data:e}=await v.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const a=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function br(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&ri()}),document.getElementById("modal-close").addEventListener("click",ri);const{data:{session:e}}=await v.auth.getSession();if(!e){Gi(),Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ct});return}ve.user=e.user,await wt(),Gi();try{const{data:i}=await v.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(a=>{n[a.formation]=a.links}),bn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!ve.profile){vn(document.getElementById("app"),{state:ve,navigate:async()=>{await wt(),Zt()},toast:ct,refreshProfile:wt});return}const t=Array.isArray(ve.profile.pending_boosters)?ve.profile.pending_boosters:[];if(!ve.profile.onboarding_done&&t.length>0){go(document.getElementById("app"),{state:ve,navigate:()=>Zt(),toast:ct,refreshProfile:wt});return}Zt(),setTimeout(()=>ar(ve.profile,kt,ct),800),v.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(ve.user=null,ve.profile=null,document.getElementById("app").innerHTML="",Li(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:ct}))})}function yr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Kt(){const e=document.getElementById("app");e&&(e.style.height=yr()+"px")}window.addEventListener("resize",Kt);window.addEventListener("orientationchange",()=>setTimeout(Kt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Kt);function Zt(){const e=()=>{var i;(i=ve.user)!=null&&i.id&&v.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",ve.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Kt(),mr(),ln()}function Gi(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function cn(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}br().catch(e=>{console.error("Échec du démarrage:",e),cn()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&cn("Le serveur met trop de temps à répondre.")},12e3);
