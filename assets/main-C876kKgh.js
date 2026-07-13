const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/match-shared-3YVU6Yuq.js","assets/match-shared-DCm4yyf6.css"])))=>i.map(i=>d[i]);
import{s as y,F as Fi,r as De,j as ni,p as un,m as ht,n as oi,o as wt,q as $t,t as Jt,u as At,v as Mt,w as Ot,x as fn,y as Ct,k as jt,z as Bt,A as Pi,C as ct,G as We,_ as Je,J as gn,I as nt,h as ri,L as mn,O as xn,T as Ht,l as bn,P as yn,b as vn}from"./match-shared-3YVU6Yuq.js";const Se={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé pour ce match."},"Double attaque":{icon:"⚡",desc:"La note d'attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la note d'un joueur adverse."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function Be(e,t){if(!e)return 0;let i=0;switch(t){case"GK":i=Number(e.note_g)||0;break;case"DEF":i=Number(e.note_d)||0;break;case"MIL":i=Number(e.note_m)||0;break;case"ATT":i=Number(e.note_a)||0;break;default:i=0}return i+(e.boost||0)}const $i=["ATT","MIL","DEF","GK"];function Gi(e){let t=0;const i=e.length;for(let n=0;n<i;n++)for(let a=n+1;a<i;a++){const o=e[n],r=e[a];if(!o||!r)continue;const s=o._col!=null&&r._col!=null&&o._col===r._col,d=o._col!=null&&r._col!=null&&Math.abs(o._col-r._col)===1,l=$i.indexOf(o._line||o.job),c=$i.indexOf(r._line||r.job),u=Math.abs(l-c)===1;if(!((o._line||o.job)===(r._line||r.job)&&d||s&&u))continue;const m=o.country_code&&r.country_code&&o.country_code===r.country_code,p=o.club_id&&r.club_id&&o.club_id===r.club_id;m&&p?t+=2:(m||p)&&(t+=1)}return t}function ai(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job,d=r.stadiumBonus&&(s==="MIL"||s==="ATT")?10:0;return o+(Number(s==="MIL"?r.note_m:r.note_a)||0)+(r.boost||0)+d},0),n=Gi(e);let a=i+n;return t.doubleAttack&&(a*=2),t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function si(e,t={}){const i=e.reduce((o,r)=>{const s=r._line||r.job;let d=0;s==="GK"?d=Number(r.note_g)||0:s==="MIL"?d=Number(r.note_m)||0:d=Number(r.note_d)||0;const l=r.stadiumBonus&&(s==="GK"||s==="DEF"||s==="MIL")?10:0;return o+d+(r.boost||0)+l},0),n=Gi(e);let a=i+n;return t.stolenNote&&(a-=t.stolenNote),{base:i,links:n,total:Math.max(0,a)}}function di(e,t,i={}){return i.shield?{goal:!1,shielded:!0}:{goal:e>t,shielded:!1}}function Ri(e,t,i="easy"){const n=e.filter(r=>!r.used);if(!n.length)return[];const a=[...n].sort((r,s)=>{const d=t==="attack"?Be(r,"ATT"):r._line==="GK"?Be(r,"GK"):Be(r,"DEF");return(t==="attack"?Be(s,"ATT"):s._line==="GK"?Be(s,"GK"):Be(s,"DEF"))-d});let o=i==="easy"?1+Math.floor(Math.random()*2):i==="medium"?2+Math.floor(Math.random()*2):3;return a.slice(0,Math.min(o,a.length,3))}function hn(e,t){const i={vs_ai_easy:{victoire:500,nul:250,defaite:50},vs_ai_medium:{victoire:1e3,nul:500,defaite:50},vs_ai_hard:{victoire:1500,nul:750,defaite:100},vs_ai_club:{victoire:2500,nul:1250,defaite:100}};return(i[e]||i.vs_ai_easy)[t]||0}const wn="/";function Ei(e,{navigate:t,toast:i}){let n="login";const a=()=>{var r,s,d,l,c,u;const o=n==="login";e.innerHTML=`
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
    </style>`,(r=document.getElementById("tab-login-btn"))==null||r.addEventListener("click",()=>{n="login",a()}),(s=document.getElementById("tab-reg-btn"))==null||s.addEventListener("click",()=>{n="register",a()}),o?((d=document.getElementById("login-password"))==null||d.addEventListener("keydown",f=>{var x;f.key==="Enter"&&((x=document.getElementById("login-btn"))==null||x.click())}),(l=document.getElementById("login-btn"))==null||l.addEventListener("click",async()=>{const f=document.getElementById("login-email").value.trim(),x=document.getElementById("login-password").value,m=document.getElementById("login-error");if(m.textContent="",!f||!x){m.textContent="Remplissez tous les champs.";return}const p=document.getElementById("login-btn");p.textContent="⏳ Connexion…",p.disabled=!0;const{error:g}=await y.auth.signInWithPassword({email:f,password:x});if(p.textContent="⚽ Se connecter",p.disabled=!1,g){m.textContent=g.message.includes("Invalid")?"Email ou mot de passe incorrect.":g.message;return}window.location.reload()})):((c=document.getElementById("reg-confirm"))==null||c.addEventListener("keydown",f=>{var x;f.key==="Enter"&&((x=document.getElementById("reg-btn"))==null||x.click())}),(u=document.getElementById("reg-btn"))==null||u.addEventListener("click",async()=>{const f=document.getElementById("reg-email").value.trim(),x=document.getElementById("reg-password").value,m=document.getElementById("reg-confirm").value,p=document.getElementById("reg-error");if(p.textContent="",!f||!x||!m){p.textContent="Remplissez tous les champs.";return}if(x.length<6){p.textContent="Mot de passe trop court (min. 6 caractères).";return}if(x!==m){p.textContent="Les mots de passe ne correspondent pas.";return}const g=document.getElementById("reg-btn");g.textContent="⏳ Création…",g.disabled=!0;const{error:v}=await y.auth.signUp({email:f,password:x});if(g.textContent="🚀 Créer mon compte",g.disabled=!1,v){p.textContent=v.message;return}i("Compte créé ! Connecte-toi pour commencer.","success",4e3),n="login",a(),setTimeout(()=>{const h=document.getElementById("login-email");h&&(h.value=f)},50)}))};a()}function _n(e,{state:t,navigate:i,toast:n,refreshProfile:a}){let o="#1A6B3C",r="#D4A017";e.innerHTML=`
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
  `;function s(){var m;const l=document.getElementById("logo-preview"),c=document.getElementById("logo-initials"),u=((m=document.getElementById("setup-club"))==null?void 0:m.value)||"MW",f=u.trim().split(" ").filter(Boolean),x=f.length>=2?(f[0][0]+f[1][0]).toUpperCase():u.slice(0,2).toUpperCase();l&&(l.style.background=r,l.style.borderColor=o),c&&(c.textContent=x,c.style.color=o)}document.getElementById("color1").addEventListener("input",l=>{o=l.target.value,document.getElementById("swatch1").style.background=o,s()}),document.getElementById("color2").addEventListener("input",l=>{r=l.target.value,document.getElementById("swatch2").style.background=r,s()});function d(l){document.querySelectorAll(".setup-step").forEach(c=>c.classList.remove("active")),document.getElementById(`step-${l}`).classList.add("active"),document.getElementById("step-num").textContent=l,document.getElementById("progress-fill").style.width=`${Math.round(l/3*100)}%`,l===3&&s()}document.getElementById("step1-next").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("step1-error");if(c.textContent="",l.length<3){c.textContent="Pseudo trop court (min. 3 caractères).";return}const{data:u}=await y.from("users").select("id").eq("pseudo",l).maybeSingle();if(u){c.textContent="Ce pseudo est déjà pris.";return}d(2)}),document.getElementById("step2-back").addEventListener("click",()=>d(1)),document.getElementById("step2-next").addEventListener("click",async()=>{const l=document.getElementById("setup-club").value.trim(),c=document.getElementById("step2-error");if(c.textContent="",l.length<2){c.textContent="Nom trop court (min. 2 caractères).";return}const{data:u}=await y.from("users").select("id").eq("club_name",l).maybeSingle();if(u){c.textContent="Ce nom de club est déjà pris.";return}d(3)}),document.getElementById("step3-back").addEventListener("click",()=>d(2)),document.getElementById("step3-finish").addEventListener("click",async()=>{const l=document.getElementById("setup-pseudo").value.trim(),c=document.getElementById("setup-club").value.trim(),u=document.getElementById("step3-error"),f=document.getElementById("step3-finish");u.textContent="",f.disabled=!0,f.textContent="Création en cours…";try{const{error:x}=await y.from("users").insert({id:t.user.id,pseudo:l,club_name:c,club_color1:o,club_color2:r,credits:1e4});if(x)throw x;await kn(t.user.id),await a(),n(`Bienvenue ${l} ! Tes récompenses de démarrage sont prêtes.`,"success",5e3),window.location.reload()}catch(x){u.textContent=x.message,f.disabled=!1,f.textContent="🚀 Créer mon profil !"}})}async function kn(e){const t=[{type:"player",count:5,guaranteeGK:!0},{type:"player",count:5},{type:"player",count:5},{type:"player",count:5},{type:"game_changer",count:3},{type:"formation",count:1}];try{await y.from("users").update({pending_boosters:t,onboarding_done:!1,first_booster_opened:!1}).eq("id",e)}catch(i){console.warn("[Setup] Colonnes pending_boosters/onboarding_done absentes — migration requise",i)}}const $n="modulepreload",En=function(e){return"/"+e},Li={},Ni=function(t,i,n){let a=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));a=Promise.allSettled(i.map(d=>{if(d=En(d),d in Li)return;Li[d]=!0;const l=d.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":$n,l||(u.as="script"),u.crossOrigin="",u.href=d,s&&u.setAttribute("nonce",s),document.head.appendChild(u),l)return new Promise((f,x)=>{u.addEventListener("load",f),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return a.then(r=>{for(const s of r||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},_t="#1A6B3C",kt="#cc2222",Ln="#D4A017",zi="#888";async function zn(e,t){const{state:i,toast:n}=t;e.innerHTML=`
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
    </div>`,await Oi(i,n,t),document.getElementById("btn-add-friend").addEventListener("click",()=>In(i,n)),document.getElementById("btn-accept-friend").addEventListener("click",()=>Hi(i,n,null,t))}async function Oi(e,t,i={}){const{navigate:n}=i,a=e.user.id,{data:o,error:r}=await y.from("friendships").select("id, requester_id, addressee_id").eq("status","accepted").or(`requester_id.eq.${a},addressee_id.eq.${a}`),{count:s}=await y.from("friendships").select("id",{count:"exact",head:!0}).eq("addressee_id",a).eq("status","pending"),d=document.getElementById("pending-badge");d&&(s>0?(d.style.display="flex",d.textContent=s):d.style.display="none");const l=document.getElementById("friends-list");if(!l)return;if(r){console.error("[Friends] Erreur:",r),l.innerHTML=`<div style="color:${kt};text-align:center;padding:16px">Erreur chargement : ${r.message}</div>`;return}const c=(o||[]).map(x=>x.requester_id===a?x.addressee_id:x.requester_id);let u={};if(c.length){const{data:x}=await y.from("users").select("id, pseudo, club_name, last_seen_at, club_color1, club_color2").in("id",c);(x||[]).forEach(m=>{u[m.id]=m})}const f=(o||[]).map(x=>({friendshipId:x.id,friend:u[x.requester_id===a?x.addressee_id:x.requester_id]||{pseudo:"?"}}));if(!f.length){l.innerHTML=`
      <div style="text-align:center;padding:32px;color:#aaa">
        <div style="font-size:40px;margin-bottom:8px">👥</div>
        <div>Tu n'as pas encore d'amis.<br>Commence par en ajouter !</div>
      </div>`;return}l.innerHTML=`
    <div style="font-size:12px;color:#999;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">
      ${f.length} ami${f.length>1?"s":""}
    </div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${f.map(({friendshipId:x,friend:m})=>Tn(m,x)).join("")}
    </div>`,l.querySelectorAll("[data-stats]").forEach(x=>{x.addEventListener("click",()=>Sn(e,x.dataset.stats,x.dataset.friendName))}),l.querySelectorAll("[data-match]").forEach(x=>{x.addEventListener("click",()=>{const m=x.dataset.friendId,p=x.dataset.friendName;console.log("[Friends] clic match",{fid:m,fname:p,hasNavigate:typeof n}),typeof n=="function"?n("match",{matchMode:"friend",friendId:m,friendName:p}):t("Erreur navigation","error")})})}function Tn(e,t){const i=e.club_name||e.pseudo||"?",n=e.pseudo||"",a=(n||i).slice(0,2).toUpperCase(),o=e.club_color2||_t,r=e.club_color1||"#ffffff",s=e.last_seen_at?new Date(e.last_seen_at):null,d=s&&Date.now()-s.getTime()<3*60*1e3;return`
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
          style="width:38px;height:38px;border-radius:50%;border:2px solid ${Ln};background:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center">📊</button>
      </div>
    </div>`}function In(e,t){const i=li();i.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">➕ Ajouter un ami</div>
      <p style="font-size:13px;color:#666;margin-bottom:14px">Entre le pseudo exact de ton ami :</p>
      <input id="friend-pseudo-input" type="text" placeholder="Pseudo…"
        style="width:100%;box-sizing:border-box;padding:11px 14px;border-radius:10px;border:1.5px solid #ddd;font-size:15px;margin-bottom:12px">
      <div id="add-friend-error" style="color:${kt};font-size:12px;min-height:18px;margin-bottom:8px"></div>
      <div style="display:flex;gap:10px">
        <button id="add-cancel" class="popup-btn-cancel">Annuler</button>
        <button id="add-ok" class="popup-btn-ok">Envoyer la demande</button>
      </div>
    </div>
    ${ci()}`,document.body.appendChild(i);const n=i.querySelector("#friend-pseudo-input"),a=i.querySelector("#add-friend-error"),o=()=>i.remove();n.focus(),i.querySelector("#add-cancel").addEventListener("click",o),i.addEventListener("click",r=>{r.target===i&&o()}),i.querySelector("#add-ok").addEventListener("click",async()=>{const r=n.value.trim();if(!r){a.textContent="Entre un pseudo";return}a.textContent="";const{data:s}=await y.from("users").select("id, pseudo").ilike("pseudo",r).single();if(!s){a.textContent="Utilisateur introuvable";return}if(s.id===e.user.id){a.textContent="Tu ne peux pas t'ajouter toi-même";return}const{data:d}=await y.from("friendships").select("id, status").or(`and(requester_id.eq.${e.user.id},addressee_id.eq.${s.id}),and(requester_id.eq.${s.id},addressee_id.eq.${e.user.id})`).single();if(d){const c=d.status==="accepted"?"Vous êtes déjà amis !":d.status==="pending"?"Demande déjà envoyée":"Une demande existe déjà";a.textContent=c;return}const{error:l}=await y.from("friendships").insert({requester_id:e.user.id,addressee_id:s.id,status:"pending"});if(l){a.textContent="Erreur : "+l.message;return}o(),t(`✅ Demande envoyée à ${s.pseudo} !`,"success")})}async function Hi(e,t,i=null,n={}){const a=e.user.id,{data:o}=await y.from("friendships").select("id, requester_id").eq("addressee_id",a).eq("status","pending").order("created_at",{ascending:!1}),r=(o||[]).map(f=>f.requester_id);let s={};if(r.length){const{data:f}=await y.from("users").select("id, pseudo, club_name").in("id",r);(f||[]).forEach(x=>{s[x.id]=x})}const d=(o||[]).map(f=>({...f,requester:s[f.requester_id]||{pseudo:"?"}})),l=li(),c=d||[];l.innerHTML=`
    <div class="popup-box">
      <div class="popup-title">✅ Demandes en attente</div>
      ${c.length?`<div style="display:flex;flex-direction:column;gap:8px;max-height:50vh;overflow-y:auto;margin-bottom:14px">
            ${c.map(f=>{var x,m,p;return`
              <div style="display:flex;align-items:center;gap:10px;background:#f9f9f9;border-radius:10px;padding:10px 12px">
                <div style="flex:1;font-size:14px;font-weight:700">${((x=f.requester)==null?void 0:x.club_name)||((m=f.requester)==null?void 0:m.pseudo)||"?"}
                  <span style="font-size:11px;color:#999;font-weight:400">(${((p=f.requester)==null?void 0:p.pseudo)||""})</span>
                </div>
                <button data-accept="${f.id}" title="Accepter"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${_t};color:#fff;font-size:18px;cursor:pointer">✓</button>
                <button data-decline="${f.id}" title="Refuser"
                  style="width:34px;height:34px;border-radius:50%;border:none;background:${kt};color:#fff;font-size:18px;cursor:pointer">✕</button>
              </div>`}).join("")}
           </div>`:'<div style="text-align:center;padding:20px;color:#aaa">Aucune demande en attente</div>'}
      <button id="pending-close" class="popup-btn-cancel" style="width:100%">Fermer</button>
    </div>
    ${ci()}`,document.body.appendChild(l);const u=()=>l.remove();l.querySelector("#pending-close").addEventListener("click",u),l.addEventListener("click",f=>{f.target===l&&u()}),l.querySelectorAll("[data-accept]").forEach(f=>{f.addEventListener("click",async()=>{const{error:x}=await y.from("friendships").update({status:"accepted"}).eq("id",f.dataset.accept);if(x){t("Erreur : "+x.message,"error");return}f.closest("div[style]").remove(),t("✅ Ami accepté !","success"),Oi(e,t,n),i&&i()})}),l.querySelectorAll("[data-decline]").forEach(f=>{f.addEventListener("click",async()=>{await y.from("friendships").delete().eq("id",f.dataset.decline),f.closest("div[style]").remove(),t("Demande refusée","info"),i&&i()})})}async function Sn(e,t,i){const n=e.user.id,[a,o]=[n,t].sort(),r=n===a,{data:s}=await y.from("friend_match_stats").select("*").eq("player1_id",a).eq("player2_id",o).single(),d=e.profile.club_name||e.profile.pseudo||"Moi",l=s||{},c=r?l.wins_p1||0:l.wins_p2||0,u=r?l.wins_p2||0:l.wins_p1||0,f=l.draws||0,x=r?l.goals_p1||0:l.goals_p2||0,m=r?l.goals_p2||0:l.goals_p1||0,p=r?l.gc_used_p1||0:l.gc_used_p2||0,g=r?l.gc_used_p2||0:l.gc_used_p1||0,v=l.matches_total||0,h=(T,b,N,D=_t,Z=kt)=>`
    <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f0f0f0">
      <div style="text-align:right;font-size:18px;font-weight:900;color:${D}">${b}</div>
      <div style="text-align:center;font-size:11px;color:#999;white-space:nowrap;font-weight:600">${T}</div>
      <div style="text-align:left;font-size:18px;font-weight:900;color:${Z}">${N}</div>
    </div>`,_=li();_.innerHTML=`
    <div class="popup-box" style="max-width:380px">
      <div class="popup-title">📊 Stats vs ${i}</div>
      <!-- En-têtes -->
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;margin-bottom:4px">
        <div style="text-align:right;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d}</div>
        <div></div>
        <div style="text-align:left;font-size:12px;font-weight:700;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i}</div>
      </div>
      ${v===0?`
        <div style="text-align:center;padding:24px;color:#aaa">
          <div style="font-size:32px;margin-bottom:8px">🏟️</div>
          Vous n'avez pas encore joué ensemble !
        </div>`:`
        ${h("Victoires",c,u)}
        ${h("Nuls",f,f,zi,zi)}
        ${h("Défaites",u,c)}
        ${h("Buts marqués",x,m)}
        ${h("Buts encaissés",m,x,kt,_t)}
        ${h("GC utilisés ⚡",p,g,"#7a28b8","#7a28b8")}
        <div style="text-align:center;font-size:12px;color:#aaa;padding-top:8px">${v} match${v>1?"s":""} joué${v>1?"s":""}</div>`}
      <button id="stats-close" class="popup-btn-cancel" style="width:100%;margin-top:14px">Fermer</button>
    </div>
    ${ci()}`,document.body.appendChild(_),_.querySelector("#stats-close").addEventListener("click",()=>_.remove()),_.addEventListener("click",T=>{T.target===_&&_.remove()})}function li(){const e=document.createElement("div");return e.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:8000;display:flex;align-items:center;justify-content:center;padding:20px",e}function ci(){return`
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
        background:${_t};color:#fff;
        font-size:14px;font-weight:900;cursor:pointer;
      }
      .popup-btn-cancel {
        flex:1;padding:12px;border-radius:10px;
        border:1.5px solid #ddd;background:#fff;
        font-size:14px;font-weight:700;cursor:pointer;color:#555;
      }
    </style>`}const An="2026.07.13-1451";async function Ti(e,{state:t,navigate:i,toast:n}){var o,r;const a=t.profile;a&&(e.innerHTML=`
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
        <div style="font-size:10px;color:rgba(255,255,255,0.25);font-family:monospace">build ${An}</div>`:""}
      </div>

    </div>
  </div>`,requestAnimationFrame(()=>{var u,f,x,m,p;const s=((u=window.visualViewport)==null?void 0:u.height)||window.innerHeight,d=((f=document.querySelector(".top-nav"))==null?void 0:f.offsetHeight)||56,l=((x=document.querySelector(".bottom-nav"))==null?void 0:x.offsetHeight)||60;if(e.querySelector(".home-inner")){const g=s-d-l;e.querySelector(".home-dark").style.minHeight=g+"px"}if(window.innerWidth<768){const g=((m=e.querySelector(".home-hero"))==null?void 0:m.offsetHeight)||60,v=e.querySelector(".ranked-tile");e.querySelector(".play-grid");const h=((p=e.querySelector(".home-footer"))==null?void 0:p.offsetHeight)||44,_=["friend-requests-banner","match-invite-banner","ongoing-match-banner"].reduce((O,ne)=>{var oe;return O+(((oe=document.getElementById(ne))==null?void 0:oe.offsetHeight)||0)},0),T=12*5,b=s-d-l-g-h-_-T-32,N=Math.max(80,Math.round(b*.28)),D=Math.max(160,Math.round(b*.72)),Z=Math.floor((D-10)/2);v&&(v.style.minHeight=v.style.maxHeight=N+"px"),e.querySelectorAll(".play-tile").forEach(O=>{O.style.minHeight=O.style.height=Z+"px"}),e.querySelectorAll(".play-tile .play-icon").forEach(O=>{O.style.height=Math.round(Z*.55)+"px"})}}),(o=document.getElementById("nav-rankings"))==null||o.addEventListener("click",()=>i("rankings")),(r=document.getElementById("nav-matches"))==null||r.addEventListener("click",()=>i("matches")),e.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",()=>{s.style.transform="scale(.96)",setTimeout(()=>s.style.transform="",180);const d=s.dataset.action;if(d==="match-ai"){Bn(i);return}if(d==="match-random"){i("match",{matchMode:"random"});return}if(d==="match-friend"){i("friends");return}if(d==="mini-league"){i("mini-league");return}if(d==="ranked"){i("ranked");return}n("Bientôt disponible","info")})}),document.getElementById("logout-btn").addEventListener("click",async()=>{await y.auth.signOut(),window.location.reload()}),Ki(t,n),jn(t,n,i),Ui(t,n,i))}async function Ui(e,t,i){const n=document.getElementById("ongoing-match-banner");if(!n)return;const a=e.profile.id,{data:o}=await y.from("matches").select("id, home_id, away_id, status, mode").eq("status","active").or(`home_id.eq.${a},away_id.eq.${a}`).order("created_at",{ascending:!1});if(!(o!=null&&o.length)){n.innerHTML="";return}const r=o.map(d=>d.home_id===a?d.away_id:d.home_id).filter(Boolean);let s={};if(r.length){const{data:d}=await y.from("users").select("id, pseudo, club_name").in("id",r);(d||[]).forEach(l=>{s[l.id]=l.club_name||l.pseudo})}n.innerHTML=o.map(d=>{const l=d.home_id===a?d.away_id:d.home_id,c=s[l]||"Adversaire",u=d.mode==="mini_league";return`<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(10,61,30,0.8),rgba(26,107,60,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);box-shadow:0 3px 12px rgba(26,107,60,0.3)">
      <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">⚽</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:900">${u?"🏆 Mini League":d.mode==="friend"?"Match ami":"Match"} en cours</div>
        <div style="font-size:11px;opacity:0.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">vs ${c}</div>
      </div>
      <button data-resume="${d.id}" data-mini="${u?"1":""}" style="width:38px;height:38px;border-radius:50%;border:none;background:#22c55e;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">⚽</button>
      <button data-abandon="${d.id}" data-opp="${l}" style="width:38px;height:38px;border-radius:50%;border:none;background:#cc2222;color:#fff;font-size:18px;cursor:pointer;flex-shrink:0">✕</button>
    </div>`}).join(""),n.querySelectorAll("[data-resume]").forEach(d=>{d.addEventListener("click",async()=>{const l=document.getElementById("page-content")||document.getElementById("app");if(d.dataset.mini==="1"){const{data:c}=await y.from("mini_league_matches").select("id, league_id").eq("match_id",d.dataset.resume).single();c?i("match-mini-league",{mlMatchId:c.id,leagueId:c.league_id}):i("mini-league")}else{const{resumePvpMatch:c}=await Ni(async()=>{const{resumePvpMatch:u}=await Promise.resolve().then(()=>Bo);return{resumePvpMatch:u}},void 0);c(l,{state:e,navigate:i,toast:t,openModal:null,closeModal:null,refreshProfile:null},d.dataset.resume)}})}),n.querySelectorAll("[data-abandon]").forEach(d=>{d.addEventListener("click",()=>{Cn(async()=>{await Mn(d.dataset.abandon,d.dataset.opp,a),t("Match abandonné (défaite 3-0)","info"),Ui(e,t,i)})})})}async function Mn(e,t,i){const{data:n}=await y.from("matches").select("home_id, away_id, game_state").eq("id",e).single();if(!n)return;const a=n.home_id===i,o=a?0:3,r=a?3:0,s=n.game_state||{};s.p1Score=o,s.p2Score=r,s.phase="finished",s.forfeit=!0,await y.from("matches").update({status:"finished",forfeit:!0,winner_id:t,home_score:o,away_score:r,game_state:s}).eq("id",e)}function Cn(e){const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`<div style="background:#111;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:24px;max-width:340px;width:100%;text-align:center;color:#fff">
    <div style="font-size:40px;margin-bottom:8px">⚠️</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Abandonner le match ?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:18px">Tu perdras par forfait <b>3-0</b>.</div>
    <div style="display:flex;gap:10px">
      <button id="ab-cancel" style="flex:1;padding:12px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);font-weight:700;cursor:pointer;color:rgba(255,255,255,0.7)">Annuler</button>
      <button id="ab-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#cc2222;color:#fff;font-weight:900;cursor:pointer">Abandonner</button>
    </div>
  </div>`,document.body.appendChild(t),t.querySelector("#ab-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#ab-ok").addEventListener("click",()=>{t.remove(),e()}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}async function jn(e,t,i){var s,d,l,c;const n=document.getElementById("match-invite-banner");if(!n)return;const{data:a}=await y.from("friend_match_invites").select("id, inviter_id, inviter:users!inviter_id(pseudo, club_name)").eq("invitee_id",e.user.id).eq("status","pending").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!a){n.innerHTML="";return}const o=((s=a.inviter)==null?void 0:s.club_name)||((d=a.inviter)==null?void 0:d.pseudo)||"?",r=a.inviter_id;n.innerHTML=`<div id="match-invite-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,10,46,0.8),rgba(74,26,138,0.6));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(122,40,184,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(74,10,138,0.3)">
    <div style="background:rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">⚽</div>
    <div style="flex:1"><div style="font-size:13px;font-weight:900">${o} t'invite à jouer !</div><div style="font-size:11px;opacity:0.75">Accepter la partie ?</div></div>
    <div style="display:flex;gap:8px">
      <button id="match-inv-accept" style="padding:6px 12px;border-radius:8px;border:none;background:#22c55e;color:#fff;font-size:12px;font-weight:900;cursor:pointer">Jouer !</button>
      <button id="match-inv-decline" style="padding:6px 12px;border-radius:8px;border:none;background:rgba(255,255,255,0.1);color:#fff;font-size:12px;cursor:pointer">Refuser</button>
    </div>
  </div>`,(l=document.getElementById("match-inv-accept"))==null||l.addEventListener("click",()=>{n.innerHTML="",i("match",{matchMode:"friend",friendId:r,friendName:o})}),(c=document.getElementById("match-inv-decline"))==null||c.addEventListener("click",async()=>{await y.from("friend_match_invites").update({status:"declined"}).eq("id",a.id),n.innerHTML="",t("Invitation refusée","info")})}async function Ki(e,t){const i=document.getElementById("friend-requests-banner");if(!i)return;const{data:n,error:a}=await y.from("friendships").select("id, requester:users!requester_id(pseudo, club_name)").eq("addressee_id",e.user.id).eq("status","pending");if(a||!(n!=null&&n.length)){i.innerHTML="";return}const o=n.length,r=n.slice(0,2).map(d=>{var l;return((l=d.requester)==null?void 0:l.pseudo)||"?"}).join(", "),s=o>2?` +${o-2}`:"";i.innerHTML=`<div id="friend-req-btn" style="display:flex;align-items:center;gap:10px;background:linear-gradient(135deg,rgba(26,107,60,0.6),rgba(42,157,92,0.4));color:#fff;border-radius:12px;padding:12px 16px;border:1px solid rgba(26,107,60,0.4);cursor:pointer;box-shadow:0 3px 12px rgba(26,107,60,0.25)">
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
  </div>`,document.body.appendChild(i);const n=()=>i.remove();document.getElementById("diff-cancel").addEventListener("click",n),i.addEventListener("click",a=>{a.target===i&&n()}),i.querySelectorAll("[data-mode]").forEach(a=>{a.addEventListener("click",()=>{n(),e("match",{matchMode:a.dataset.mode})})})}function qn(e,t){const i=e.player;if(!i)return 0;const n=i.rarity;if(n!=="pepite"&&n!=="papyte")return Number(i[t])||0;const a=Dn(i),o=Number(i[t])||0;if(o<=0)return 0;const r=i.note_min??1,s=i.note_max??10,l=(e.current_note??a)-a;return Math.min(s,Math.max(r,o+l))}function Dn(e){const t=e.job||"ATT";return Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}const Fn={normal:"#ccc",pepite:"#D4A017",papyte:"#909090",legende:"#7a28b8"},Ut={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},Lt=["GK","DEF","MIL","ATT"],Pn=["Tous","GK","DEF","MIL","ATT"],Gn={normal:1e3,pepite:5e3,papyte:5e3,legende:1e4};function Ii(e){const t=e.player;if(!t)return null;const i=t.rarity;return(i==="pepite"||i==="papyte")&&e.current_note!=null?e.current_note:Math.max(Number(t.note_g)||0,Number(t.note_d)||0,Number(t.note_m)||0,Number(t.note_a)||0)}function Rn(e){return e.length?e.reduce((t,i)=>Ii(i)>Ii(t)?i:t,e[0]):e[0]}function Nn(e){return e==="GK"?"note_g":e==="DEF"?"note_d":e==="MIL"?"note_m":"note_a"}const On={MA:"MAROC",FR:"FRANCE",AR:"ARGENTINE",PT:"PORTUGAL",BR:"BRESIL",ES:"ESPAGNE",DE:"ALLEMAGNE",GB:"ANGLETERRE",IT:"ITALIE",CM:"CAMEROUN",SN:"SENEGAL",NG:"NIGERIA",DK:"DANEMARK",NL:"PAYS-BAS",BE:"BELGIQUE",CI:"CÔTE D'IVOIRE",AL:"ALBANIE",HR:"CROATIE",RS:"SERBIE",TR:"TURQUIE"};function Hn(e){const t="https://fcnwclxlkytdfjotqkta.supabase.co";if(!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}function Kt(e,t){return e&&Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0}function Vt(e,t=""){const i=e.player;if(!i)return"";const n=e.evolution_bonus||0,a={...i,_evolution_bonus:n},o=t?`<div style="position:absolute;top:6px;right:6px;z-index:10;background:#0a3d1e;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 7px">${t}</div>`:"";return`<div style="position:relative;display:inline-block;cursor:pointer" data-card-id="${e.id}">
    ${o}
    ${De(a,{width:140})}
  </div>`}function Si(e){return`<div style="display:inline-block;filter:grayscale(1);opacity:0.4">
    ${De(e,{width:140})}
  </div>`}async function Un(e,t){const{state:i,navigate:n,toast:a,openModal:o,closeModal:r}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:s}=await y.from("cards").select(`id, card_type, current_note, gc_type, formation, is_for_sale, sale_price, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_real, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length, sell_price, face,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",i.profile.id),{data:d}=await y.from("players").select(`id, firstname, surname_real, country_code, club_id, job, job2,
      note_g, note_d, note_m, note_a, rarity, note_min, note_max, skin, hair, hair_length,
      clubs(encoded_name, logo_url)`).eq("is_active",!0),l=(s||[]).filter(E=>E.card_type==="player"&&E.player),c=(s||[]).filter(E=>E.card_type==="game_changer"),u=(s||[]).filter(E=>E.card_type==="formation"),f=(s||[]).filter(E=>E.card_type==="stadium"),{data:x}=await y.from("gc_definitions").select("name,gc_type,color,effect,image_url"),m={};(x||[]).forEach(E=>{m[E.name]=E});const{data:p}=await y.from("stadium_definitions").select("id,name,club_id,country_code,image_url, club:clubs(encoded_name,logo_url)"),g={};(p||[]).forEach(E=>{g[E.id]=E}),f.forEach(E=>{E.stadium_def&&(g[E.stadium_id]=E.stadium_def)});const v=Object.keys(Fi),h=Object.keys(Se),_={};l.forEach(E=>{const S=E.player.id;_[S]=(_[S]||0)+1}),new Set(Object.keys(_).map(E=>String(E)));const T=new Set(u.map(E=>E.formation)),b=new Set(c.map(E=>E.gc_type));let N="player",D="Tous",Z="",O=!1;function ne(){return[...l].sort((E,S)=>{const F=Lt.indexOf(E.player.job),R=Lt.indexOf(S.player.job);return F!==R?F-R:(E.player.surname_real||"").localeCompare(S.player.surname_real||"")})}function oe(){return[...d||[]].sort((E,S)=>{const F=Lt.indexOf(E.job),R=Lt.indexOf(S.job);return F!==R?F-R:(E.surname_real||"").localeCompare(S.surname_real||"")})}function ce(){return ne().filter(E=>{const S=E.player,F=D==="Tous"||S.job===D,R=!Z||`${S.firstname} ${S.surname_real}`.toLowerCase().includes(Z);return F&&R})}function P(){return oe().filter(E=>{const S=D==="Tous"||E.job===D,F=!Z||`${E.firstname} ${E.surname_real}`.toLowerCase().includes(Z);return S&&F})}e.innerHTML=`
  <div class="page" style="display:flex;flex-direction:column;height:100%;overflow:hidden">
    <!-- Onglets avec compteurs -->
    <div style="display:flex;border-bottom:2px solid var(--gray-200);background:#fff">
      <button class="col-tab-btn" data-tab="player" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${N==="player"?"var(--green)":"transparent"};
        color:${N==="player"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Joueurs</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${l.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="formation" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${N==="formation"?"var(--green)":"transparent"};
        color:${N==="formation"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Formations</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${u.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="gc" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${N==="gc"?"var(--green)":"transparent"};
        color:${N==="gc"?"var(--green)":"var(--gray-600)"}">
        <div style="font-size:13px;font-weight:700">Game Changer</div>
        <div style="font-size:11px;font-weight:400;opacity:0.7">(${c.length})</div>
      </button>
      <button class="col-tab-btn" data-tab="stadium" style="flex:1;padding:10px 4px;border:none;background:none;cursor:pointer;
        border-bottom:3px solid ${N==="stadium"?"#E87722":"transparent"};
        color:${N==="stadium"?"#E87722":"var(--gray-600)"}">
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
  </div>`;function I(){const E=document.getElementById("col-filters");E&&(N==="player"?(E.innerHTML=`
        <input id="col-search" placeholder="🔍 Rechercher un joueur..." style="font-size:13px" value="${Z}">
        <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:2px;align-items:center">
          ${Pn.map(S=>`
            <button class="filter-btn" data-job="${S}"
              style="flex-shrink:0;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
                border:1.5px solid ${S===D?"var(--green)":"var(--gray-200)"};
                background:${S===D?"var(--green)":"#fff"};
                color:${S===D?"#fff":"var(--gray-600)"}">
              ${S}
            </button>`).join("")}
          <button id="show-all-btn"
            style="flex-shrink:0;margin-left:auto;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${O?"var(--yellow)":"var(--gray-200)"};
              background:${O?"var(--yellow)":"#fff"};
              color:${O?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${O?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("col-search").addEventListener("input",S=>{Z=S.target.value.toLowerCase(),k()}),e.querySelectorAll(".filter-btn").forEach(S=>{S.addEventListener("click",()=>{D=S.dataset.job,I(),k()})}),document.getElementById("show-all-btn").addEventListener("click",()=>{O=!O,I(),k()})):(E.innerHTML=`
        <div style="display:flex;justify-content:flex-end">
          <button id="show-all-btn"
            style="padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;
              border:1.5px solid ${O?"var(--yellow)":"var(--gray-200)"};
              background:${O?"var(--yellow)":"#fff"};
              color:${O?"#111":"var(--gray-600)"}; font-size:18px; padding:5px 10px">
            ${O?"👁️":"🚫👁️"}
          </button>
        </div>`,document.getElementById("show-all-btn").addEventListener("click",()=>{O=!O,I(),k()})))}function k(){const E=document.getElementById("col-grid");E&&(N==="player"?Le(E):N==="formation"?U(E):N==="stadium"?K(E):X(E))}function B(E,S,F,R,H){const M=document.getElementById("col-grid"),G=document.getElementById("col-big");if(!M||!G)return;var $e=0;function _e(){const we=window.innerWidth>=768,me=document.getElementById("col-big"),Ee=document.getElementById("col-grid");we&&me&&(me.style.minHeight="420px",me.style.flex="1 1 auto"),we&&Ee&&(Ee.style.height=Math.round(310*.76+16)+"px",Ee.style.flexShrink="0",Ee.style.overflowX="auto",Ee.style.overflowY="hidden",Ee.style.alignItems="center",Ee.style.padding="8px 16px"),G.innerHTML='<div id="big-card-inner" style="display:inline-block;transform-origin:top center">'+S(E[$e])+"</div>";var ke=G.querySelector("[data-card-id],[data-form-id],[data-gc-id]");ke&&ke.addEventListener("click",function(){R(E[$e])}),requestAnimationFrame(function(){var ve=document.getElementById("big-card-inner");if(document.getElementById("col-grid"),!(!ve||!G)){var Me=G.clientHeight-8,Ce=G.clientWidth-24,Fe=ve.offsetHeight,w=ve.offsetWidth;if(Fe>0&&w>0&&Me>40){var $=we?2.2:1.6,z=Math.min(Me/Fe,Ce/w,$);ve.style.transform="scale("+z.toFixed(3)+")",ve.style.transformOrigin="top center"}}}),M.innerHTML=E.map(function(ve,Me){var Ce=Me===$e,Fe="flex-shrink:0;cursor:pointer;border-radius:6px;overflow:hidden;display:inline-block;line-height:0;"+(Ce?"outline:2.5px solid #D4A017;outline-offset:1px;background:rgba(212,160,23,0.25);":"");return'<div class="col-mini-item" data-idx="'+Me+'" style="'+Fe+'">'+F(ve,Ce)+"</div>"}).join(""),M.querySelectorAll(".col-mini-item").forEach(function(ve){ve.addEventListener("click",function(){$e=Number(ve.dataset.idx),_e(),ve.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})})}_e()}function se(E){var S=window.innerWidth>=768?.76:.54,F;if(!E||E._fake){var R=E?E.player:null;if(!R)return"";F=Si(R)}else F=Vt(E,"");return'<div style="display:inline-block;zoom:'+S+';pointer-events:none;line-height:0">'+F+"</div>"}function ue(E,S,F){S=S||100,F=F||140;var R=ni[E]||{},H={GK:"#111111",DEF:"#cc2222",MIL:"#D4A017",ATT:"#22aa55"},M=Math.max(3,Math.round(S*.06)),G=Object.entries(R).map(function(_e){var we=_e[0],me=_e[1],Ee=we.replace(/\d+$/,""),ke=H[Ee]||"#888",ve=Math.round(me.x*S),Me=Math.round(me.y*F);return'<circle cx="'+ve+'" cy="'+Me+'" r="'+M+'" fill="'+ke+'" stroke="rgba(255,255,255,0.8)" stroke-width="1"/>'}).join(""),$e=Math.max(1,Math.round(S/50));return'<svg viewBox="0 0 '+S+" "+F+'" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%"><rect width="'+S+'" height="'+F+'" fill="#1A6B3C"/><rect x="'+Math.round(S*.2)+'" y="'+Math.round(F*.02)+'" width="'+Math.round(S*.6)+'" height="'+Math.round(F*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+$e+'"/><line x1="0" y1="'+Math.round(F*.5)+'" x2="'+S+'" y2="'+Math.round(F*.5)+'" stroke="rgba(255,255,255,0.3)" stroke-width="'+$e+'"/><ellipse cx="'+Math.round(S*.5)+'" cy="'+Math.round(F*.5)+'" rx="'+Math.round(S*.18)+'" ry="'+Math.round(F*.11)+'" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="'+$e+'"/><rect x="'+Math.round(S*.2)+'" y="'+Math.round(F*.82)+'" width="'+Math.round(S*.6)+'" height="'+Math.round(F*.16)+'" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="'+$e+'"/>'+G+"</svg>"}function le(E,S,F){var R=F>1?'<div style="position:absolute;top:4px;right:4px;background:#0a3d1e;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×'+F+"</div>":"",H=S?'data-form-id="'+S.id+'"':"",M=E.length>7?14:E.length>5?16:19,G=!!S;return"<div "+H+' style="position:relative;width:140px;border-radius:12px;border:3px solid '+(G?"#2a7a40":"#bbb")+";background:#fff;display:flex;flex-direction:column;overflow:hidden;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12);"+(G?"":"filter:grayscale(1);opacity:0.5")+'">'+R+'<div style="padding:8px 6px 6px;background:#fff;text-align:center;border-bottom:3px solid '+(G?"#1A6B3C":"#aaa")+';flex-shrink:0"><div style="font-size:8px;color:#888;letter-spacing:1.5px;font-weight:700;margin-bottom:2px">FORMATION</div><div style="font-size:'+M+"px;font-weight:900;color:"+(G?"#1A6B3C":"#aaa")+';line-height:1">'+E+'</div></div><div style="flex:1;overflow:hidden;background:'+(G?"#1A6B3C":"#ccc")+'">'+ue(E,140,220)+"</div></div>"}function ae(E,S){var F=window.innerWidth>=768?.76:.54,R=140,H=305,M=Math.round(H*.22),G=H-M,$e=E.length>7?10:13,_e=ue(E,R,G),we=S?"1.5px solid #2a7a40":"1px solid #ddd",me=S?"":"filter:grayscale(1);opacity:0.45;",Ee=S?"#1A6B3C":"#bbb",ke="#fff";return'<div style="display:inline-block;zoom:'+F+';line-height:0;pointer-events:none"><div style="width:'+R+"px;height:"+H+"px;border-radius:6px;border:"+we+";background:#fff;display:flex;flex-direction:column;overflow:hidden;"+me+'"><div style="height:'+M+"px;background:"+Ee+';display:flex;align-items:center;justify-content:center;padding:0 2px;flex-shrink:0"><span style="font-size:'+$e+"px;font-weight:900;color:"+ke+";text-align:center;overflow:hidden;white-space:nowrap;max-width:"+(R-4)+'px">'+E+'</span></div><div style="height:'+G+'px;overflow:hidden;flex-shrink:0">'+_e+"</div></div></div>"}function Le(E){if(O){const S=P();if(!S.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucun joueur.</div>';return}const F=S.map(R=>l.find(H=>H.player.id===R.id)||{_fake:!0,player:R,id:"fake-"+R.id});B(F,R=>R._fake?Si(R.player):Vt(R,""),R=>R._fake?se({player:R.player,id:"x",_fake:!0}):se(R),R=>{R._fake||Ai(R,l,_,t)})}else{const S=ce();if(!S.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte.<br><small>Ouvre des boosters !</small></div>';return}const F={};S.forEach(H=>{const M=H.player.id;F[M]||(F[M]=[]),F[M].push(H)});const R=Object.values(F).map(H=>Rn(H));B(R,H=>{const M=_[H.player.id]||1,G=M>1?`<div style="position:absolute;top:4px;right:4px;background:#1A6B3C;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 6px;z-index:3">×${M}</div>`:"",_e=l.filter(we=>we.player.id===H.player.id&&we.is_for_sale).length>0?'<div style="position:absolute;top:4px;left:4px;background:#D4A017;color:#fff;border-radius:10px;font-size:9px;font-weight:700;padding:1px 5px;z-index:3">🏷️</div>':"";return Vt(H,G+_e)},H=>se(H),H=>Ai(H,l,_,t))}}function U(E){const S=O?v:[...T];if(!S.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Formation.<br><small>Ouvre un booster Formation !</small></div>';return}const F=S.map(R=>({formation:R,card:u.find(H=>H.formation===R)||null,owned:T.has(R)}));B(F,({formation:R,card:H,owned:M})=>le(R,M?H:null,M?u.filter(G=>G.formation===R).length:0),({formation:R,owned:H})=>ae(R,H),({card:R,owned:H})=>{H&&R&&Vn(R,u,t,o)})}function X(E){const S=Object.keys(m),F=O?S.length?S:h:[...b];if(!F.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Game Changer.<br><small>Ouvre un booster Game Changer !</small></div>';return}const R=F.map(H=>({type:H,gc:Se[H]||{icon:"⚡",desc:""},def:m[H]||null,owned:b.has(H),card:c.find(M=>M.gc_type===H)||null}));B(R,({type:H,gc:M,def:G,owned:$e,card:_e})=>{var $;const we=$e?c.filter(z=>z.gc_type===H).length:0,me=we>1?`<div style="position:absolute;top:8px;right:8px;background:#3d0a7a;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${we}</div>`:"",Ee=(G==null?void 0:G.gc_type)==="ultra_game_changer",ke={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},ve={purple:"#b06ce0",light_blue:"#00d4ef"},Me=ke[G==null?void 0:G.color]||ke.purple,Ce=ve[G==null?void 0:G.color]||ve.purple,Fe=(G==null?void 0:G.effect)||M.desc||"",w=G!=null&&G.image_url?`/icons/${G.image_url}`:(($=G==null?void 0:G.club)==null?void 0:$.logo_url)||(G!=null&&G.country_code?`https://flagsapi.com/${G.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null);return $e&&_e?`<div data-gc-id="${_e.id}" data-gc-type="${H}" style="position:relative;width:140px;border-radius:12px;border:3px solid ${Ce};background:${Me};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${Ce}66;cursor:pointer">
          ${me}
          <div style="padding:10px 12px;background:rgba(255,255,255,0.14);text-align:center">
            <div style="font-size:${H.length>14?10:13}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${H}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.55);margin-top:2px">${Ee?"💎 ULTRA GC":"⚡ GAME CHANGER"}</div>
          </div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${w?`<img src="${w}" style="max-width:120px;max-height:120px;object-fit:contain;border-radius:6px">`:`<span style="font-size:64px">${M.icon}</span>`}
          </div>
          <div style="padding:10px 12px;background:rgba(0,0,0,0.35);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.9);line-height:1.4">${Fe.slice(0,60)}</div>
          </div>
        </div>`:`<div style="width:140px;border-radius:12px;border:2px solid #ddd;background:#f0f0f0;display:flex;flex-direction:column;overflow:hidden;filter:grayscale(1);opacity:0.5">
          <div style="padding:10px 12px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:13px;font-weight:900;color:#888;text-transform:uppercase">${H}</div></div>
          <div style="height:150px;display:flex;align-items:center;justify-content:center"><span style="font-size:64px">${M.icon}</span></div>
          <div style="padding:10px;background:rgba(0,0,0,0.05);text-align:center"><div style="font-size:11px;color:#aaa">Non possédée</div></div>
        </div>`},({type:H,gc:M,def:G,owned:$e})=>{const _e=window.innerWidth>=768?.76:.54,we={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},me={purple:"#9b59b6",light_blue:"#00bcd4"},Ee=we[G==null?void 0:G.color]||we.purple,ke=me[G==null?void 0:G.color]||me.purple,ve=G!=null&&G.image_url?`/icons/${G.image_url}`:null;return $e?`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:${Ee};border:1px solid ${ke};display:flex;flex-direction:column;overflow:hidden"><div style="height:56px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center"><span style="font-size:13px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px">${H}</span></div><div style="flex:1;display:flex;align-items:center;justify-content:center">${ve?`<img src="${ve}" style="max-width:130px;max-height:190px;object-fit:contain">`:`<span style="font-size:48px">${M.icon}</span>`}</div><div style="height:54px;display:flex;align-items:center;justify-content:center;padding:0 4px"><span style="font-size:10px;color:rgba(255,255,255,0.7);text-align:center">${((G==null?void 0:G.effect)||M.desc||"").slice(0,30)}</span></div></div></div>`:`<div style="display:inline-block;zoom:${_e};line-height:0;pointer-events:none"><div style="width:140px;height:310px;border-radius:8px;background:#eee;border:1px solid #ddd;display:flex;flex-direction:column;align-items:center;justify-content:center;filter:grayscale(1);opacity:0.45"><span style="font-size:36px">${M.icon}</span><span style="font-size:12px;color:#aaa;margin-top:6px;text-align:center;padding:0 6px">${H}</span></div></div>`},({type:H,owned:M,def:G})=>{M&&Kn(H,G,o)})}function K(E){const S="#E87722",F="/";if(!f.length){E.innerHTML='<div style="width:100%;text-align:center;padding:40px;color:var(--gray-600)">Aucune carte Stade.<br><small>Ouvre un booster Stade !</small></div>';return}const R={};f.forEach(M=>{const G=M.stadium_id||"?";(R[G]=R[G]||[]).push(M)});const H=Object.entries(R).map(([M,G])=>({sid:M,def:g[M]||null,count:G.length,card:G[0]}));B(H,({def:M,count:G})=>{var ke,ve;const $e=(M==null?void 0:M.name)||"?",_e=((ke=M==null?void 0:M.club)==null?void 0:ke.encoded_name)||(M==null?void 0:M.country_code)||"—",we=M!=null&&M.image_url?`${F}icons/${M.image_url}`:((ve=M==null?void 0:M.club)==null?void 0:ve.logo_url)||(M!=null&&M.country_code?`https://flagsapi.com/${M.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),me=we?`<img src="${we}" style="width:90px;height:90px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<div style="font-size:56px">🏟️</div>',Ee=G>1?`<div style="position:absolute;top:8px;right:8px;background:#333;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:2px 8px;z-index:3">×${G}</div>`:"";return`<div style="position:relative;width:140px;border-radius:12px;border:3px solid #c45a00;background:linear-gradient(160deg,${S},#c45a00);display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${S}66">
          ${Ee}
          <div style="padding:8px 10px;background:rgba(0,0,0,0.25);text-align:center">
            <div style="font-size:8px;font-weight:900;color:rgba(255,255,255,0.65);letter-spacing:1px">🏟️ STADE</div>
            <div style="font-size:12px;font-weight:900;color:#fff;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${$e}</div>
          </div>
          <div style="height:140px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08)">${me}</div>
          <div style="padding:8px 12px;background:rgba(0,0,0,0.3);text-align:center">
            <div style="font-size:11px;color:rgba(255,255,255,0.85);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_e}</div>
            <div style="font-size:13px;font-weight:900;color:#FFD700;margin-top:2px">+10 ⭐ joueurs alliés</div>
          </div>
        </div>`},({def:M,count:G})=>{var ke,ve;const $e=window.innerWidth>=768?.76:.54,_e=(M==null?void 0:M.name)||"?",we=((ke=M==null?void 0:M.club)==null?void 0:ke.encoded_name)||(M==null?void 0:M.country_code)||"—",me=M!=null&&M.image_url?`${F}icons/${M.image_url}`:((ve=M==null?void 0:M.club)==null?void 0:ve.logo_url)||(M!=null&&M.country_code?`https://flagsapi.com/${M.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null),Ee=me?`<img src="${me}" style="width:64px;height:64px;object-fit:contain;border-radius:4px" onerror="this.style.display='none'">`:'<span style="font-size:32px">🏟️</span>';return`<div style="display:inline-block;zoom:${$e};line-height:0;pointer-events:none">
          <div style="width:140px;height:310px;border-radius:8px;background:linear-gradient(160deg,${S},#c45a00);border:1px solid #c45a00;display:flex;flex-direction:column;overflow:hidden">
            <div style="height:48px;background:rgba(0,0,0,0.25);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:4px 6px">
              <div style="font-size:7px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:1px">🏟️ STADE</div>
              <div style="font-size:12px;font-weight:900;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:130px;margin-top:2px">${_e}</div>
            </div>
            <div style="flex:1;display:flex;align-items:center;justify-content:center">${Ee}</div>
            <div style="height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);padding:4px;gap:4px">
              <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.9);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:126px;text-align:center">${we}</div>
              <div style="font-size:13px;font-weight:900;color:#FFD700">+10 ⭐</div>
            </div>
          </div>
        </div>`},null)}e.querySelectorAll(".col-tab-btn").forEach(E=>{E.addEventListener("click",()=>{N=E.dataset.tab,D="Tous",Z="",O=!1,e.querySelectorAll(".col-tab-btn").forEach(S=>{const F=S.dataset.tab===N;S.style.borderBottomColor=F?"var(--green)":"transparent",S.style.color=F?"var(--green)":"var(--gray-600)"}),I(),k()})}),I(),k()}function Kn(e,t,i){const n=Se[e]||{icon:"⚡",desc:"Effet spécial."},a=(t==null?void 0:t.gc_type)==="ultra_game_changer",o={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},r={purple:"#b06ce0",light_blue:"#00d4ef"},s=o[t==null?void 0:t.color]||o.purple,d=r[t==null?void 0:t.color]||r.purple,l=(t==null?void 0:t.name)||e,c=(t==null?void 0:t.effect)||n.desc,u=t!=null&&t.image_url?`/icons/${t.image_url}`:null;i("Game Changer",`<div style="display:flex;flex-direction:column;align-items:center;gap:16px;padding:8px">
      <div style="background:${s};border-radius:16px;border:2px solid ${d};
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
        <div style="font-size:14px;color:#333">${c}</div>
      </div>
      <div style="background:#fff3cd;border-radius:10px;padding:10px 14px;width:100%">
        <div style="font-size:12px;color:#856404">⚠️ Cette carte est à <b>usage unique</b>. Une fois jouée en match, elle est définitivement supprimée de ta collection.</div>
      </div>
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}const zt=1e3;function Vn(e,t,i,n){var m,p,g;const{state:a,toast:o,closeModal:r,navigate:s,refreshProfile:d}=i,l=e.formation,c={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function u(){const v=ni[l]||{},h=Fi[l]||[],_=290,T=360,b=20;function N(Z){const O=v[Z];return O?{x:O.x*_,y:O.y*T}:null}let D=`<svg width="${_}" height="${T}" viewBox="0 0 ${_} ${T}" xmlns="http://www.w3.org/2000/svg">`;for(const[Z,O]of h){const ne=N(Z),oe=N(O);!ne||!oe||(D+=`<line x1="${ne.x}" y1="${ne.y}" x2="${oe.x}" y2="${oe.y}"
        stroke="#FFD700" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.85"/>`)}for(const Z of Object.keys(v)){const O=N(Z);if(!O)continue;const ne=Z.replace(/\d+/,""),oe=c[ne]||"#555";D+=`<circle cx="${O.x}" cy="${O.y}" r="${b}" fill="${oe}" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>`,D+=`<text x="${O.x}" y="${O.y+4}" text-anchor="middle" font-size="9" font-weight="900" fill="white" font-family="Arial Black,Arial">${ne}</text>`}return D+="</svg>",D}const f=t.filter(v=>v.formation===l);f.length;const x=!e.is_for_sale;n(`Formation ${l}`,`<div style="background:linear-gradient(180deg,#1a6b3c,#0a3d1e);border-radius:12px;padding:16px;margin-bottom:14px;overflow-x:auto;text-align:center">
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
        <input type="number" id="sell-price-form" min="1" placeholder="Prix en crédits" value="${zt}"
          style="flex:1;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;font-size:14px">
        <button class="btn btn-primary" id="market-sell-form-btn">Mettre en vente</button>
      </div>
    </div>`:""}
    ${e.is_for_sale?`
    <div style="margin-top:12px;padding:10px;background:#fff8e1;border-radius:8px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:13px;color:#D4A017;font-weight:600">🏷️ En vente : ${(e.sale_price||0).toLocaleString("fr")} cr.</div>
      <button class="btn btn-ghost btn-sm" id="cancel-sell-form-btn">Retirer</button>
    </div>`:""}`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`),(m=document.getElementById("direct-sell-form-btn"))==null||m.addEventListener("click",async()=>{if(!confirm(`Vendre 1 carte Formation ${l} pour ${zt.toLocaleString("fr")} crédits ? Cette action est irréversible.`))return;const v=f.find(_=>!_.is_for_sale)||f[0];if(!v){o("Aucune carte à vendre","error");return}await y.from("market_listings").delete().eq("card_id",v.id),await y.from("transfer_history").delete().eq("card_id",v.id);const{error:h}=await y.from("cards").delete().eq("id",v.id);if(h){o(h.message,"error");return}await y.from("users").update({credits:(a.profile.credits||0)+zt}).eq("id",a.profile.id),await d(),o(`+${zt.toLocaleString("fr")} crédits ! Carte vendue.`,"success"),r(),s("collection")}),(p=document.getElementById("market-sell-form-btn"))==null||p.addEventListener("click",async()=>{const v=parseInt(document.getElementById("sell-price-form").value);if(!v||v<1){o("Prix invalide","error");return}await y.from("cards").update({is_for_sale:!0,sale_price:v}).eq("id",e.id),await y.from("market_listings").insert({seller_id:a.profile.id,card_id:e.id,price:v}),o("Carte mise en vente sur le marché !","success"),r(),s("collection")}),(g=document.getElementById("cancel-sell-form-btn"))==null||g.addEventListener("click",async()=>{await y.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await y.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),r(),s("collection")})}async function Ai(e,t,i,n){var se,ue,le,ae,Le;const{state:a,toast:o,openModal:r,closeModal:s,navigate:d,refreshProfile:l}=n,c=e.player,u=t.filter(U=>U.player.id===c.id),f=u.length,x=e.evolution_bonus||0,m=Math.max((Number(c.note_g)||0)+(c.job==="GK"||c.job2==="GK"?x:0),(Number(c.note_d)||0)+(c.job==="DEF"||c.job2==="DEF"?x:0),(Number(c.note_m)||0)+(c.job==="MIL"||c.job2==="MIL"?x:0),(Number(c.note_a)||0)+(c.job==="ATT"||c.job2==="ATT"?x:0)),p=c.rarity||"normal",{data:g}=await y.from("sell_price_configs").select("*").eq("rarity",p).lte("note_min",m).gte("note_max",m).order("note_min",{ascending:!1}).limit(1);((se=g==null?void 0:g[0])==null?void 0:se.price)??Gn[p];const v=c.rarity!=="legende";Hn(c);const h=((c.rarity==="pepite"||c.rarity==="papyte")&&e.current_note!=null?e.current_note:Kt(c,c.job))+x,_=c.rarity==="pepite"||c.rarity==="papyte",T=c.job2?(_?qn(e,Nn(c.job2)):Kt(c,c.job2))+(Kt(c,c.job2)>0?x:0):null;Ut[c.job],c.job2&&Ut[c.job2];const b=Fn[c.rarity]||"#ccc";On[c.country_code]||c.country_code;const N=e.evolution_bonus||0,Z=h+N,O=T||0,ne=O>0?O+N:0,oe=u.map(U=>U.id);let ce={};if(oe.length){const{data:U}=await y.from("transfer_history").select("card_id, club_name, manager_name, source, price, transferred_at").in("card_id",oe).order("transferred_at",{ascending:!0});(U||[]).forEach(X=>{ce[X.card_id]||(ce[X.card_id]=[]),ce[X.card_id].push(X)})}const P=U=>{const X=U.transferred_at?new Date(U.transferred_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}):"",K=U.source==="booster"?"Booster":U.price?U.price.toLocaleString("fr"):"—";return`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;background:#f9f9f9;border-radius:8px;padding:8px 12px;gap:8px">
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${U.club_name}</div>
        <div style="font-size:11px;color:var(--gray-600)">(${U.manager_name})</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:13px;font-weight:700;color:${U.source==="booster"?"var(--gray-600)":"var(--yellow)"}">${K}</div>
        <div style="font-size:11px;color:var(--gray-600)">${X}</div>
      </div>
    </div>`},I=oe.length?`
    <div style="margin-top:16px;border-top:1px solid var(--gray-200);padding-top:14px">
      <div style="font-size:13px;font-weight:700;margin-bottom:10px">🏟️ Mes exemplaires ${f>1?`(${f})`:""}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${u.map((U,X)=>{const K=ce[U.id]||[],E=U.is_for_sale,S=K.length?K[K.length-1]:null,R=(c.rarity==="pepite"||c.rarity==="papyte")&&U.current_note!=null?` (☆${U.current_note})`:"";return`
            <div data-card-id="${U.id}" data-card-idx="${X}" class="exemplaire-row"
              style="border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;transition:border-color .15s;${E?"opacity:0.6":""}">
              <div style="display:flex;align-items:center;gap:10px">
                <input type="checkbox" class="expl-check" data-id="${U.id}" ${E?"disabled":""} style="width:18px;height:18px;cursor:pointer;accent-color:#1A6B3C;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <div style="font-size:12px;font-weight:700">Exemplaire ${X+1}${R}${E?" 🏷️ En vente":""}</div>
                  ${S?`<div style="font-size:11px;color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    ${S.club_name} · ${S.source==="booster"?"Booster":S.price?S.price.toLocaleString("fr")+" cr.":"—"}
                  </div>`:""}
                </div>
                <button class="expl-hist-toggle" data-idx="${X}" style="font-size:11px;color:#999;border:none;background:none;cursor:pointer;padding:2px 6px;flex-shrink:0">
                  ${K.length?`${K.length} club${K.length>1?"s":""}`:""} ▾
                </button>
              </div>
              <div class="expl-hist" data-hist="${X}" style="display:none;margin-top:8px;display:flex;flex-direction:column;gap:4px">
                ${K.map(P).join("")}
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
              ${(e.evolution_bonus||0)>0?`+${e.evolution_bonus} appliqué${e.evolution_bonus>1?"s":""} · Note : ${Z}${c.job2&&O>0?` / ${ne}`:""}`:`Note actuelle : ${Z}${c.job2&&O>0?` / ${ne}`:""}`}
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
              value="${c.sell_price||5e3}"
              style="flex:1;padding:8px;border:1.5px solid #ddd;border-radius:8px;font-size:14px">
            <button id="market-sell-btn" class="btn btn-primary" style="padding:8px 14px;white-space:nowrap">
              Mettre en vente
            </button>
          </div>
        </div>`:""}
      </div>
    </div>`:"";r(`${c.firstname} ${c.surname_real}`,`<div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">

      <!-- Carte visuelle -->
      ${De({...c,_evolution_bonus:x},{width:160})}


      <!-- Infos -->
      <div style="flex:1;min-width:160px;display:flex;flex-direction:column;gap:10px">
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">RARETÉ</div>
          <div style="font-weight:700;color:${b}">${c.rarity.toUpperCase()}</div>
          ${c.rarity==="pepite"||c.rarity==="papyte"?`
          <div style="margin-top:6px;background:${b}18;border-left:3px solid ${b};border-radius:0 6px 6px 0;padding:6px 10px">
            <div style="font-size:11px;font-weight:700;color:${b};margin-bottom:2px">Carte évolutive</div>
            <div style="font-size:11px;color:#555;line-height:1.5">
              ${c.rarity==="pepite"?"✅ Victoire : <b>+2</b> &nbsp;|&nbsp; ❌ Défaite : <b>-1</b>":"✅ Victoire : <b>+1</b> &nbsp;|&nbsp; ❌ Défaite : <b>-2</b>"}
              <br>Note actuelle : <b>${e.current_note??(c.rarity==="pepite"?c.note_min:c.note_max)??"—"}</b>
              &nbsp;·&nbsp; Min : <b>${c.note_min??"—"}</b>
              &nbsp;·&nbsp; Max : <b>${c.note_max??"—"}</b>
            </div>
          </div>`:""}
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">POSTE</div>
          <div style="font-weight:700">${c.job}${c.job2?" / "+c.job2:""}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:6px">NOTES</div>
          <div style="display:flex;align-items:center;gap:6px">
            ${[["GK",c.note_g],["DEF",c.note_d],["MIL",c.note_m],["ATT",c.note_a]].map(([U,X])=>{const K=Ut[U],E=U==="GK"?"#fff":K,S=U===c.job||U===c.job2,F=(Number(X)||0)+(S&&N>0?N:0);return`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">
                <div style="width:48px;height:48px;border-radius:8px;background:#111;border:2.5px solid ${K};
                  display:flex;align-items:center;justify-content:center">
                  <span style="font-size:20px;font-weight:900;color:${E};font-family:Arial Black,Arial;line-height:1">${F}</span>
                </div>
                <span style="font-size:10px;font-weight:700;color:${E}">${U}</span>
              </div>`}).join("")}
          </div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--gray-600);margin-bottom:2px">EN COLLECTION</div>
          <div style="font-weight:700;font-size:18px">×${f}</div>
        </div>
      </div>
    </div>
    ${I}
`,'<button class="btn btn-ghost" id="close-detail">Fermer</button>'),(ue=document.getElementById("close-detail"))==null||ue.addEventListener("click",s);let k=new Set;const B=()=>{const U=k.size,X=document.getElementById("sell-action-panel");if(!X)return;X.style.display=U>0?"block":"none",document.getElementById("sell-selected-count").textContent=U;const K=document.getElementById("evolve-btn");K&&(K.textContent=`⬆️ Évoluer ${U>1?"(+"+U+")":""}`)};document.querySelectorAll(".expl-check").forEach(U=>{U.addEventListener("change",()=>{const X=U.dataset.id;U.checked?k.add(X):k.delete(X);const K=U.closest(".exemplaire-row");K&&(K.style.borderColor=U.checked?"#1A6B3C":"#eee"),B()})}),document.querySelectorAll(".exemplaire-row").forEach(U=>{U.addEventListener("click",X=>{if(X.target.closest("button")||X.target.tagName==="INPUT")return;const K=U.querySelector(".expl-check");K&&!K.disabled&&(K.checked=!K.checked,K.dispatchEvent(new Event("change")))})}),document.querySelectorAll(".expl-hist-toggle").forEach(U=>{U.addEventListener("click",X=>{X.stopPropagation();const K=document.querySelector(`.expl-hist[data-hist="${U.dataset.idx}"]`);K&&(K.style.display=K.style.display==="none"?"flex":"none")})}),(le=document.getElementById("evolve-btn"))==null||le.addEventListener("click",async()=>{if(f<=1)return;const U=[...k];if(!U.length)return;if(k.has(e.id)){const H=document.createElement("div");H.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",H.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:300px;width:100%;text-align:center">
          <div style="font-size:40px;margin-bottom:10px">⚠️</div>
          <div style="font-size:15px;font-weight:900;color:#cc2222;margin-bottom:10px">Action impossible</div>
          <div style="font-size:13px;color:#555;line-height:1.5;margin-bottom:18px">
            Impossible de faire évoluer l'exemplaire 1 qui est l'exemplaire principal de la carte.<br><br>
            Sélectionne uniquement les copies à sacrifier (Exemplaire 2, 3…).
          </div>
          <button id="err-close" class="btn btn-primary" style="width:100%">Compris</button>
        </div>`,document.body.appendChild(H),H.querySelector("#err-close").addEventListener("click",()=>H.remove()),H.addEventListener("click",M=>{M.target===H&&H.remove()});return}const X=U.filter(H=>H!==e.id),K=c.rarity==="legende"?2:1;if((X.length||1)*K,!(!X.length&&U.length===1&&U[0]===e.id)){if(!X.length){o("Sélectionne des copies à sacrifier","warning");return}}if(!await new Promise(H=>{const M=document.createElement("div");M.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px",M.innerHTML=`
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center;box-shadow:0 16px 48px rgba(0,0,0,0.3)">
          <div style="font-size:48px;margin-bottom:10px">⬆️</div>
          <div style="font-size:17px;font-weight:900;margin-bottom:6px">Évolution par fusion</div>
          <div style="font-size:13px;color:#555;margin-bottom:6px">
            <strong>${c.firstname} ${c.surname_real}</strong>
          </div>
          <div style="background:#f0fdf4;border-radius:10px;padding:12px;margin-bottom:16px;font-size:13px;color:#333">
            🗑️ <strong>${X.length}</strong> copie${X.length>1?"s":""} sacrifiée${X.length>1?"s":""}<br>
            📈 Note : <strong>${h+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${h+(e.evolution_bonus||0)+X.length*K}</strong>
            ${T&&T>0?`<br>📈 Note 2 : <strong>${T+(e.evolution_bonus||0)}</strong> → <strong style="color:#1A6B3C">${T+(e.evolution_bonus||0)+X.length*K}</strong>`:""}
            ${c.rarity==="legende"?`<br><span style="color:#7a28b8;font-size:11px;font-weight:700">✨ Légende : +${K} par copie sacrifiée</span>`:""}
          </div>
          <div style="font-size:11px;color:#aaa;margin-bottom:18px">⚠️ Les copies sacrifiées sont définitivement supprimées</div>
          <div style="display:flex;gap:10px">
            <button id="sac-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
            <button id="sac-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:14px;font-weight:900;cursor:pointer">⬆️ Confirmer</button>
          </div>
        </div>`,document.body.appendChild(M),M.querySelector("#sac-cancel").addEventListener("click",()=>{M.remove(),H(!1)}),M.querySelector("#sac-ok").addEventListener("click",()=>{M.remove(),H(!0)}),M.addEventListener("click",G=>{G.target===M&&(M.remove(),H(!1))})}))return;if(X.length){await y.from("market_listings").delete().in("card_id",X),await y.from("deck_cards").delete().in("card_id",X),await y.from("transfer_history").delete().in("card_id",X),await y.from("decks").update({stadium_card_id:null}).in("stadium_card_id",X);const{error:H}=await y.from("cards").delete().in("id",X);if(H){o("Erreur suppression : "+H.message,"error");return}}const S=(e.evolution_bonus||0)+X.length*K,{error:F}=await y.from("cards").update({evolution_bonus:S}).eq("id",e.id);if(F){o("Erreur évolution : "+F.message,"error");return}const R=h+S;o(`⬆️ ${c.firstname} ${c.surname_real} : note ${h+e.evolution_bonus||h} → ${R}${X.length?` · ${X.length} copie${X.length>1?"s":""} sacrifiée${X.length>1?"s":""}`:""} !`,"success",4e3),s(),d("collection")}),(ae=document.getElementById("market-sell-btn"))==null||ae.addEventListener("click",async()=>{var F;const U=[...k];if(!U.length){o("Sélectionne au moins un exemplaire","warning");return}const X=parseInt((F=document.getElementById("sell-market-price"))==null?void 0:F.value);if(!X||X<1){o("Prix invalide","error");return}const{error:K}=await y.from("cards").update({is_for_sale:!0,sale_price:X}).in("id",U);if(K){o(K.message,"error");return}const E=U.map(R=>({seller_id:a.profile.id,card_id:R,price:X,status:"active"})),{error:S}=await y.from("market_listings").insert(E);S&&console.warn("[Market] insert listings:",S.message),o(`${U.length} carte${U.length>1?"s":""} mise${U.length>1?"s":""} en vente à ${X.toLocaleString("fr")} cr. chacune !`,"success"),s(),d("collection")}),(Le=document.getElementById("cancel-sell-btn"))==null||Le.addEventListener("click",async()=>{await y.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",e.id),await y.from("market_listings").update({status:"cancelled"}).eq("card_id",e.id).eq("status","active"),o("Annonce retirée","success"),s(),d("collection")})}const qt={"4-3-3 (3)":{GK:1,DEF:4,MIL:3,ATT:3},"5-3-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-3-3 (4)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-2-1":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (2)":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3":{GK:1,DEF:4,MIL:3,ATT:3},"4-3-3 (5)":{GK:1,DEF:4,MIL:3,ATT:3},"5-2-2-1":{GK:1,DEF:5,MIL:2,ATT:3},"4-3-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"5-2-1-2":{GK:1,DEF:5,MIL:3,ATT:2},"4-5-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"4-5-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-4-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2},"4-4-1-1":{GK:1,DEF:4,MIL:4,ATT:2},"4-1-2-1-2":{GK:1,DEF:4,MIL:4,ATT:2},"3-4-1-2":{GK:1,DEF:3,MIL:5,ATT:2},"3-4-2-1":{GK:1,DEF:3,MIL:4,ATT:3},"3-5-2":{GK:1,DEF:3,MIL:5,ATT:2},"4-1-4-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-2-2":{GK:1,DEF:4,MIL:4,ATT:2},"4-2-3-1":{GK:1,DEF:4,MIL:5,ATT:1},"4-2-3-1 (2)":{GK:1,DEF:4,MIL:5,ATT:1},"3-4-3":{GK:1,DEF:3,MIL:4,ATT:3},"4-1-2-1-2 (2)":{GK:1,DEF:4,MIL:4,ATT:2}},Mi={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function Yn(e){const t=typeof import.meta<"u"?"https://fcnwclxlkytdfjotqkta.supabase.co":"";if(!t||!(e!=null&&e.skin)||!(e!=null&&e.hair))return null;const i=e.hair==="chauve"?`${e.skin}-chauve-rase`:`${e.skin}-${e.hair}-${e.hair_length}`;return`${t}/storage/v1/object/public/assets/tetes/${i}.png`}async function Xt(e,t){const{state:i,navigate:n,toast:a}=t;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await y.from("decks").select("id,name,formation_card_id").eq("owner_id",i.profile.id).order("created_at",{ascending:!1});e.innerHTML=`
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
  </div>`,document.getElementById("new-deck-btn").addEventListener("click",async()=>{const r=prompt("Nom du deck :",`Deck ${((o==null?void 0:o.length)||0)+1}`);if(!r)return;const{data:s,error:d}=await y.from("decks").insert({owner_id:i.profile.id,name:r}).select().single();if(d){a(d.message,"error");return}a("Deck créé !","success"),Ci(s.id,e,t)}),e.querySelectorAll("[data-open-deck]").forEach(r=>{r.addEventListener("click",()=>Ci(r.dataset.openDeck,e,t))}),e.querySelectorAll("[data-rename]").forEach(r=>{r.addEventListener("click",async()=>{const s=prompt("Nouveau nom :",r.dataset.name);if(!s||s===r.dataset.name)return;const{error:d}=await y.from("decks").update({name:s}).eq("id",r.dataset.rename);if(d){a(d.message,"error");return}a("Deck renommé !","success"),Xt(e,t)})}),e.querySelectorAll("[data-delete]").forEach(r=>{r.addEventListener("click",async()=>{if(!confirm(`Supprimer le deck "${r.dataset.name}" ? Cette action est irréversible.`))return;await y.from("deck_cards").delete().eq("deck_id",r.dataset.delete);const{error:s}=await y.from("decks").delete().eq("id",r.dataset.delete);if(s){a(s.message,"error");return}a("Deck supprimé.","success"),Xt(e,t)})})}async function Ci(e,t,i){const{state:n,toast:a}=i;t.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await y.from("decks").select("*").eq("id",e).single(),{data:r}=await y.from("cards").select(`id, card_type, formation, stadium_id, evolution_bonus,
      player:players(id, firstname, surname_encoded, country_code, club_id, job, job2,
        note_g, note_d, note_m, note_a, rarity, skin, hair, hair_length,
        clubs(encoded_name, logo_url)),
      stadium_def:stadium_definitions(id, name, club_id, country_code, image_url,
        club:clubs(encoded_name, logo_url))`).eq("owner_id",n.profile.id),s=(r||[]).filter(g=>g.card_type==="player"&&g.player),d=(r||[]).filter(g=>g.card_type==="formation"),l=(r||[]).filter(g=>g.card_type==="stadium"),c=[...new Set(l.map(g=>g.stadium_id).filter(Boolean))];let u={};if(l.forEach(g=>{g.stadium_def&&g.stadium_id&&(u[g.stadium_id]=g.stadium_def)}),c.length&&Object.keys(u).length<c.length){const{data:g}=await y.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)").in("id",c);(g||[]).forEach(v=>{u[v.id]=v})}const f=d.map(g=>g.formation).filter(Boolean),{data:x}=await y.from("deck_cards").select("card_id, position, is_starter, slot_order").eq("deck_id",e);let m=o.formation||"4-4-2";f.length>0&&!f.includes(m)&&(m=f[0]);const p={deckId:e,name:o.name,formation:m,formationCardId:o.formation_card_id,stadiumCardId:o.stadium_card_id||null,slots:{},subs:[],playerCards:s,formationCards:d,stadiumCards:l,stadDefMap:u,availableFormations:f};(x||[]).forEach(g=>{g.is_starter?p.slots[g.position]=g.card_id:p.subs.includes(g.card_id)||p.subs.push(g.card_id)}),pi(t,p,i)}function pi(e,t,i){var l,c,u,f,x,m,p;const{navigate:n}=i;qt[t.formation];const a=Xn(t.formation),o=a.filter(g=>t.slots[g]).length;t.availableFormations.length>0?t.availableFormations:Object.keys(qt);const r=t.subs.map(g=>t.playerCards.find(v=>v.id===g)).filter(Boolean);[...Object.values(t.slots),...t.subs];const s=((l=t.stadiumCards)==null?void 0:l.find(g=>g.id===t.stadiumCardId))||null,d=s&&((c=t.stadDefMap)==null?void 0:c[s.stadium_id])||null;e.innerHTML=`
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
      ${d?`
      <div style="display:flex;align-items:center;gap:8px;padding:5px 14px;background:linear-gradient(90deg,rgba(232,119,34,0.3),transparent);border-top:1px solid rgba(232,119,34,0.3)">
        <span>🏟️</span>
        <span style="font-size:12px;font-weight:700">${d.name}</span>
        <span style="font-size:11px;color:#FFD700;margin-left:auto">+10 aux joueurs ${((u=d.club)==null?void 0:u.encoded_name)||d.country_code||""}</span>
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
            ${r.map(g=>{const v={...g.player,_evolution_bonus:g.evolution_bonus||0};return`<div style="position:relative;flex-shrink:0">
                ${De({...v},{width:44,showStad:!0,stadDef:d})}
                <button data-remove-sub="${g.id}" style="position:absolute;top:-4px;right:-4px;width:14px;height:14px;background:#c0392b;border:none;border-radius:50%;color:#fff;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;z-index:10">✕</button>
              </div>`}).join("")}
            ${t.subs.length<5?'<div id="add-sub-btn" style="width:34px;height:44px;border:2px dashed rgba(255,255,255,0.3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:16px;color:rgba(255,255,255,0.4);cursor:pointer;flex-shrink:0">+</div>':""}
          </div>
        </div>

        <!-- Stade -->
        <div style="flex-shrink:0;text-align:center">
          <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:4px">🏟️</div>
          <div id="stad-btn" style="cursor:pointer">
            ${s&&d?`
            <div style="width:44px;height:56px;border-radius:6px;background:linear-gradient(135deg,#1a3a6b,#0a1a3a);border:2px solid #4fc3f7;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px">
              ${(f=d.club)!=null&&f.logo_url?`<img src="${d.club.logo_url}" style="width:24px;height:24px;object-fit:contain">`:'<span style="font-size:18px">🏟️</span>'}
              <span style="font-size:7px;font-weight:700;color:#4fc3f7;text-align:center">${(d.name||"").slice(0,8)}</span>
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

  </div>`,requestAnimationFrame(()=>requestAnimationFrame(()=>{const g=e.querySelector(".deck-field-wrap"),v=e.querySelector("#deck-field-zone");if(!g||!v)return;const h=Math.max(200,v.clientHeight-40),_=Math.max(200,v.clientWidth-16),T=v.clientWidth>=900,b=T?Math.min(_,Math.round(h*.95)):_,N=Math.max(52,Math.round(b*.18)),D=T?null:Math.round(N*.55),Z={GK:[],DEF:[],MIL:[],ATT:[]};a.forEach(ne=>{var k;const oe=t.slots[ne];if(!oe)return;const ce=(k=t.playerCards)==null?void 0:k.find(B=>B.id===oe);if(!(ce!=null&&ce.player))return;const P=ne.replace(/[0-9]/g,"");Z[P]||(Z[P]=[]);const I=un(ce,P);if(d){const B=d.club_id&&String(I.club_id)===String(d.club_id),se=d.country_code&&I.country_code===d.country_code;(B||se)&&(I.stadiumBonus=!0)}Z[P].push(I)}),g.innerHTML=ht(Z,t.formation,null,[],b,h,[],D),g.style.cssText=`width:${b}px;height:${h}px;overflow:visible;margin:${T?0:30}px auto 0`;const O=g.querySelector("svg");O&&(O.style.cssText="display:block;width:100%;height:100%",O.setAttribute("preserveAspectRatio",T?"xMidYMid meet":"none")),g.querySelectorAll("[data-pos]").forEach(ne=>{ne.style.cursor="pointer",ne.addEventListener("click",()=>{const oe=ne.dataset.pos;openSlotSelector(oe,t,e,i)})})})),document.getElementById("builder-back").addEventListener("click",()=>n("decks")),document.getElementById("save-deck").addEventListener("click",()=>Jn(t,i)),(x=document.getElementById("formation-btn"))==null||x.addEventListener("click",()=>{openFormationModal(t,e,i)}),(m=document.getElementById("stad-btn"))==null||m.addEventListener("click",()=>{openStadiumSelector(t,e,i)}),e.querySelectorAll("[data-remove-sub]").forEach(g=>{g.addEventListener("click",()=>{t.subs=t.subs.filter(v=>v!==g.dataset.removeSub),pi(e,t,i)})}),(p=document.getElementById("add-sub-btn"))==null||p.addEventListener("click",()=>{Wn(t,e,i)})}function Wn(e,t,i){var d;const{openModal:n,closeModal:a}=i,o=new Set;Object.values(e.slots).filter(Boolean).forEach(l=>{var u;const c=e.playerCards.find(f=>f.id===l);(u=c==null?void 0:c.player)!=null&&u.id&&o.add(c.player.id)}),e.subs.forEach(l=>{var u;const c=e.playerCards.find(f=>f.id===l);(u=c==null?void 0:c.player)!=null&&u.id&&o.add(c.player.id)});const r=new Set,s=e.playerCards.filter(l=>{var c,u,f;return o.has((c=l.player)==null?void 0:c.id)||r.has((u=l.player)==null?void 0:u.id)?!1:(r.add((f=l.player)==null?void 0:f.id),!0)});n("Ajouter un remplaçant",`<div style="max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:8px">
      ${s.length>0?s.map(l=>{var x;const c=l.player,u=Yn(c),f=(c.job==="GK"?c.note_g:c.job==="DEF"?c.note_d:c.job==="MIL"?c.note_m:c.note_a)+(card.evolution_bonus||0);return`<div class="player-option" data-card-id="${l.id}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:10px;cursor:pointer">
          <div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;background:#dde;border:2px solid ${Mi[c.job]}">
            ${u?`<img src="${u}" style="width:100%;height:100%;object-fit:cover">`:""}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:13px">${c.firstname} ${c.surname_encoded}</div>
            <div style="font-size:11px;color:var(--gray-600)">${c.job} · ${c.country_code} · ${((x=c.clubs)==null?void 0:x.encoded_name)||"—"}</div>
          </div>
          <div style="width:32px;height:32px;border-radius:6px;background:${Mi[c.job]};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900">
            ${f}
          </div>
        </div>`}).join(""):'<div style="text-align:center;padding:20px;color:var(--gray-600)">Tous vos joueurs sont déjà utilisés.</div>'}
    </div>`,'<button class="btn btn-ghost" id="close-sub-selector">Fermer</button>'),(d=document.getElementById("close-sub-selector"))==null||d.addEventListener("click",a),document.querySelectorAll(".player-option").forEach(l=>{l.addEventListener("click",()=>{e.subs.push(l.dataset.cardId),a(),pi(t,e,i)})})}async function Jn(e,t){const{state:i,toast:n,navigate:a}=t,o=e.formationCards.find(d=>d.formation===e.formation),r=(o==null?void 0:o.id)||e.formationCardId;await y.from("decks").update({formation:e.formation,formation_card_id:r||null,stadium_card_id:e.stadiumCardId||null}).eq("id",e.deckId),await y.from("deck_cards").delete().eq("deck_id",e.deckId);const s=[];if(Object.entries(e.slots).forEach(([d,l],c)=>{s.push({deck_id:e.deckId,card_id:l,position:d,is_starter:!0,slot_order:c})}),e.subs.forEach((d,l)=>{s.push({deck_id:e.deckId,card_id:d,position:`SUB${l+1}`,is_starter:!1,slot_order:100+l})}),s.length>0){const{error:d}=await y.from("deck_cards").insert(s);if(d){n(d.message,"error");return}}n("Deck enregistré ✅","success"),a("decks")}function Xn(e){const t=qt[e]||qt["4-4-2"],i=["GK1"];for(let n=1;n<=t.DEF;n++)i.push(`DEF${n}`);for(let n=1;n<=t.MIL;n++)i.push(`MIL${n}`);for(let n=1;n<=t.ATT;n++)i.push(`ATT${n}`);return i}async function Vi(e=null){const t=new Date().toISOString().slice(0,10),{data:i}=await y.from("booster_configs").select("*").eq("is_active",!0).order("sort_order");if(!(i!=null&&i.length))return[];const n=i.filter(r=>!(r.available_from&&t<r.available_from||r.available_until&&t>r.available_until));if(!n.length)return[];let a=n;if(e){const r=n.filter(s=>s.max_per_user!=null);if(r.length){const{data:s}=await y.from("booster_claims").select("booster_id").eq("user_id",e).in("booster_id",r.map(l=>l.id)),d={};(s||[]).forEach(l=>{d[l.booster_id]=(d[l.booster_id]||0)+1}),a=n.filter(l=>l.max_per_user==null?!0:(d[l.id]||0)<l.max_per_user)}}if(!a.length)return[];const{data:o}=await y.from("booster_drop_rates").select("*").in("booster_id",a.map(r=>r.id)).order("sort_order");return a.map(r=>({...r,rates:(o||[]).filter(s=>s.booster_id===r.id)}))}async function Qn(e,t){const{data:i}=await y.from("booster_configs").select("max_per_user").eq("id",t).single();i!=null&&i.max_per_user&&await y.from("booster_claims").insert({user_id:e,booster_id:t})}function Zn(e){if(!(e!=null&&e.length))return null;const t=e.reduce((n,a)=>n+Number(a.percentage),0);let i=Math.random()*t;for(const n of e)if(i-=Number(n.percentage),i<=0)return n;return e[e.length-1]}const Yi=()=>Object.keys(ni),eo=[{id:"players_std",img:"/icons/booster-players.png",name:"Players",sub:"5 cartes joueurs",cost:5e3,costLabel:"5 000 crédits",cardCount:5,type:"player"},{id:"players_pub",img:"/icons/booster-silver.png",name:"Players (pub)",sub:"3 cartes joueurs",cost:0,costLabel:"1 pub",cardCount:3,type:"player"},{id:"game_changer",img:"/icons/booster-gamechanger.png",name:"Game Changer",sub:"3 cartes spéciales",cost:1e4,costLabel:"10 000 crédits",cardCount:3,type:"game_changer"},{id:"formation",img:"/icons/booster-formation.png",name:"Formation",sub:"1 carte formation",cost:1e4,costLabel:"10 000 crédits",cardCount:1,type:"formation"}],Qt={Ressusciter:{icon:"💫",desc:"Réactive un joueur grisé."},"Double attaque":{icon:"⚡",desc:"La prochaine attaque compte double."},Bouclier:{icon:"🛡️",desc:"Annule le prochain but adverse."},"Vol de note":{icon:"🎯",desc:"-1 à la prochaine action IA."},Gel:{icon:"❄️",desc:"Bloque le meilleur attaquant IA."},"Remplacement+":{icon:"🔄",desc:"+1 remplacement pour ce match."}};function to(e){const t=e.player;if(!t)return"";const i=e.evolution_bonus||0;return De({...t,_evolution_bonus:i},{width:140})}function Wi(e){var a;const t={};(e.rates||[]).forEach(o=>{t[o.card_type]=(t[o.card_type]||0)+Number(o.percentage||0)});const i=((a=Object.entries(t).sort((o,r)=>r[1]-o[1])[0])==null?void 0:a[0])||"player",n=e.image_url||"booster-players.png";return{id:e.id,img:"/icons/"+n,name:e.name,sub:`${e.card_count} carte(s)`,cost:e.price_type==="credits"&&e.price_credits||0,costLabel:e.price_type==="credits"?`${(e.price_credits||0).toLocaleString("fr")} crédits`:e.price_type==="pub"?"1 pub":"Gratuit",cardCount:e.card_count||5,type:i,isPub:e.price_type==="pub",rates:e.rates||[],allow_duplicates:e.allow_duplicates!==!1,_boosterId:e.id,_raw:e}}async function io(e,{state:t,navigate:i,toast:n}){var u,f,x;const a=((u=t.profile)==null?void 0:u.credits)||0;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⏳ Chargement...</div>';let o=[];try{o=(await Vi((f=t.user)==null?void 0:f.id)).map(Wi)}catch(m){console.warn("Erreur chargement boosters DB, fallback hardcodé",m)}o.length||(o=eo.map(m=>({...m,rates:[],isPub:m.id==="players_pub"})));const r=await y.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",t.profile.id).then(m=>m.data||[]),s=new Set(r.filter(m=>m.card_type==="stadium").map(m=>m.stadium_id)),d=new Set(r.filter(m=>m.card_type==="formation").map(m=>m.formation)),l=new Set(r.filter(m=>m.card_type==="game_changer").map(m=>m.gc_type)),c={};for(const m of o){if(m.allow_duplicates!==!1||!((x=m.rates)!=null&&x.length))continue;const p=[...new Set((m.rates||[]).map(v=>v.card_type))];let g=!1;for(const v of p)if(v==="stadium"){const{data:h}=await y.from("stadium_definitions").select("id");if((h||[]).some(_=>!s.has(_.id))){g=!0;break}}else if(v==="game_changer"){const{data:h}=await y.from("gc_definitions").select("name").eq("is_active",!0);if((h||[]).some(_=>!l.has(_.name))){g=!0;break}}else if(v==="formation"){const{FORMATION_LINKS:h}=await Ni(async()=>{const{FORMATION_LINKS:_}=await import("./match-shared-3YVU6Yuq.js").then(T=>T.Q);return{FORMATION_LINKS:_}},__vite__mapDeps([0,1]));if(Object.keys(h).some(_=>!d.has(_))){g=!0;break}}else{g=!0;break}g||(c[m.id]=!0)}e.innerHTML=`
  <div class="page">
    <div class="page-header">
      <h2>📦 Boosters</h2>
      <p>Solde : <b>${a.toLocaleString("fr")} crédits</b></p>
    </div>
    <div class="page-body">
      <div class="booster-grid">
        ${o.map(m=>{const p=m.cost===0||a>=m.cost,g=c[m.id]===!0;return`<div class="booster-card ${!p||g?"disabled":""}" data-booster="${m.id}" style="position:relative">
            <button class="booster-info-btn" data-booster-id="${m.id}"
              style="position:absolute;top:6px;right:6px;width:20px;height:20px;border-radius:50%;
              background:rgba(0,0,0,0.15);border:none;cursor:pointer;font-size:11px;font-weight:700;
              color:var(--gray-600);display:flex;align-items:center;justify-content:center;z-index:2"
              onclick="event.stopPropagation()">ℹ</button>
            <div class="icon"><img src="${m.img}" alt="${m.name}" style="height:64px;width:auto;display:block;margin:0 auto" onerror="this.src='/icons/booster-players.png'"></div>
            <div class="name">${m.name}</div>
            <div class="desc">${m.sub}</div>
            <div class="cost">${m.costLabel}</div>
            ${p?"":'<div style="font-size:10px;color:#c0392b;margin-top:4px">Crédits insuffisants</div>'}
            ${g?'<div style="font-size:10px;color:#c0392b;margin-top:4px">🚫 Toutes les cartes déjà obtenues</div>':""}
          </div>`}).join("")}
      </div>
      <div class="card-panel" style="font-size:13px;color:var(--gray-600);line-height:1.7;margin-top:8px">
        <b>📌 Rappels</b><br>
        • 1er booster Players contient toujours un Gardien.<br>
        • Game Helper : carte éphémère disparaît en fin de match.<br>
        • Cartes Légende = non revendables.
      </div>
    </div>
  </div>`,e.querySelectorAll(".booster-card:not(.disabled)").forEach(m=>{m.addEventListener("click",async()=>{const p=o.find(g=>g.id===m.dataset.booster);if(p){m.style.opacity="0.5",m.style.pointerEvents="none";try{await no(p,{state:t,toast:n,navigate:i,container:e})}catch(g){n(g.message,"error"),m.style.opacity="",m.style.pointerEvents=""}}})}),e.querySelectorAll(".booster-info-btn").forEach(m=>{m.addEventListener("click",p=>{p.stopPropagation();const g=o.find(v=>v.id===m.dataset.boosterId);so(g)})})}async function no(e,{state:t,toast:i,navigate:n,container:a}){var u,f;if(e.cost>0&&t.profile.credits<e.cost){i("Crédits insuffisants","error");return}e.isPub&&await co();const{data:o}=await y.from("cards").select("card_type, player_id, formation").eq("owner_id",t.profile.id),r=new Set((o||[]).filter(x=>x.card_type==="player").map(x=>x.player_id)),s=new Set((o||[]).filter(x=>x.card_type==="formation").map(x=>x.formation));let d=[],l=null;try{if((u=e.rates)!=null&&u.length)d=await Zt(t.profile,e);else{const x=e.type||"player";x==="player"?d=await Ji(t.profile,e.cardCount,e.cost):x==="game_changer"?d=await Xi(t.profile,e.cardCount,e.cost):x==="formation"?d=await Qi(t.profile,e.cost):d=await Zt(t.profile,e)}}catch(x){l=x.message||String(x),console.error("[Booster] Erreur:",x)}if(d!=null&&d.length&&e._boosterId&&await Qn(t.user.id,e._boosterId),!(d!=null&&d.length)){const x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",x.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.6);max-width:320px;word-break:break-all;background:rgba(255,255,255,0.05);padding:10px;border-radius:8px;margin-top:6px">
        ${l||"Vérifie la console (F12) pour plus de détails"}
      </div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(x),(f=x.querySelector("#anim-close-err"))==null||f.addEventListener("click",()=>x.remove());return}d.forEach(x=>{x.card_type==="player"&&x.player?x.isDuplicate=r.has(x.player.id):x.card_type==="formation"&&(x.isDuplicate=s.has(x.formation))});const{data:c}=await y.from("users").select("*").eq("id",t.profile.id).single();c&&(t.profile=c),Zi(d,e,n)}function oo(){const e=Math.random()*100;return e<.5?"legende":e<2?"special":e<10?"normal_high":"normal_low"}function Ke(e){return Math.max(Number(e.note_g)||0,Number(e.note_d)||0,Number(e.note_m)||0,Number(e.note_a)||0)}function ro(e,t){let i;switch(t){case"legende":i=e.filter(n=>n.rarity==="legende"),i.length||(i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte")),i.length||(i=e.filter(n=>Ke(n)>=6));break;case"special":i=e.filter(n=>n.rarity==="pepite"||n.rarity==="papyte"),i.length||(i=e.filter(n=>Ke(n)>=6));break;case"normal_high":i=e.filter(n=>n.rarity==="normal"&&Ke(n)>=6),i.length||(i=e.filter(n=>Ke(n)>=6));break;default:i=e.filter(n=>n.rarity==="normal"&&Ke(n)>=1&&Ke(n)<=5),i.length||(i=e.filter(n=>n.rarity==="normal"));break}return i.length||(i=e),i[Math.floor(Math.random()*i.length)]}async function Zt(e,t){if(t.cost>0){const{error:f}=await y.from("users").update({credits:e.credits-t.cost}).eq("id",e.id);if(f)throw f}const i=t.allow_duplicates!==!1;let n=[];const{data:a,error:o}=await y.from("cards").select("player_id, card_type, formation, stadium_id, gc_type").eq("owner_id",e.id);if(o){const{data:f}=await y.from("cards").select("player_id, card_type, formation, gc_type").eq("owner_id",e.id);n=f||[]}else n=a||[];const r=new Set(n.filter(f=>f.card_type==="player").map(f=>f.player_id)),s=new Set(n.filter(f=>f.card_type==="formation").map(f=>f.formation)),d=new Set(n.filter(f=>f.card_type==="game_changer").map(f=>f.gc_type)),l=new Set(n.filter(f=>f.card_type==="stadium").map(f=>f.stadium_id).filter(Boolean)),c=new Set,u=[];for(let f=0;f<(t.cardCount||5);f++){const x=Zn(t.rates);if(x){if(x.card_type==="player"){const m=D=>({légende:"legende",pépite:"pepite",pépites:"pepite"})[D]||D,p=x.rarity?m(x.rarity):null;let g=y.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);p&&(g=g.eq("rarity",p));const{data:v}=await g;let h=v||[];if((x.note_min||x.note_max)&&(h=h.filter(D=>{const Z=Math.max(Number(D.note_g)||0,Number(D.note_d)||0,Number(D.note_m)||0,Number(D.note_a)||0);return(!x.note_min||Z>=x.note_min)&&(!x.note_max||Z<=x.note_max)})),h.length||(x.note_min||x.note_max?(h=v||[],console.warn("[Booster] Aucun joueur avec note",x.note_min,"-",x.note_max,"— fallback rareté uniquement")):h=v||[]),!h.length)continue;let _=h.filter(D=>!c.has(D.id));if(i)_.length||(_=h);else if(_=_.filter(D=>!r.has(D.id)),!_.length)continue;const T=_[Math.floor(Math.random()*_.length)];c.add(T.id);const b=r.has(T.id),{data:N}=await y.from("cards").insert({owner_id:e.id,player_id:T.id,card_type:"player"}).select().single();N&&(u.push({...N,player:T,isDuplicate:b}),y.rpc("record_transfer",{p_card_id:N.id,p_player_id:T.id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{}))}else if(x.card_type==="game_changer"){const{data:m}=await y.from("gc_definitions").select("id,name").eq("is_active",!0).eq("gc_type","game_changer"),p=m!=null&&m.length?m:[{name:"Ressusciter"},{name:"Double attaque"},{name:"Bouclier"},{name:"Vol de note"},{name:"Gel"}],g=i?p:p.filter(T=>!d.has(T.name));if(!i&&!g.length)continue;const h=g[Math.floor(Math.random()*g.length)].name,{data:_}=await y.from("cards").insert({owner_id:e.id,card_type:"game_changer",gc_type:h}).select().single();_&&u.push(_)}else if(x.card_type==="formation"){const m=Yi(),p=i?m:m.filter(_=>!s.has(_));if(!i&&!p.length)continue;const g=p[Math.floor(Math.random()*p.length)],v=s.has(g),{data:h}=await y.from("cards").insert({owner_id:e.id,card_type:"formation",formation:g}).select();h!=null&&h[0]&&u.push({...h[0],isDuplicate:v})}else if(x.card_type==="stadium"){const{data:m,error:p}=await y.from("stadium_definitions").select("id,name,club_id,country_code,image_url,club:clubs(encoded_name,logo_url)");if(p){console.error("[Booster] stadium_definitions:",p.message);continue}if(!(m!=null&&m.length)){console.warn("[Booster] Aucun stade en DB");continue}const g=i?m:m.filter(T=>!l.has(T.id));if(!i&&!g.length)continue;const v=g[Math.floor(Math.random()*g.length)],{data:h,error:_}=await y.from("cards").insert({owner_id:e.id,card_type:"stadium",stadium_id:v.id}).select("id,card_type,stadium_id").single();if(_){console.error("[Booster] insert stadium card:",_.message);continue}h&&u.push({...h,rarity:"normal",_stadiumDef:v})}}}return u}async function Ji(e,t,i){if(i>0){const{error:l}=await y.from("users").update({credits:e.credits-i}).eq("id",e.id);if(l)throw l}const{data:n}=await y.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,note_min,note_max,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0);if(!(n!=null&&n.length))throw new Error("Pas de joueurs en BDD — ajoutes-en via le panel admin !");const a=n.filter(l=>l.job==="GK"),o=n.filter(l=>l.job!=="GK"),r=!e.first_booster_opened&&a.length>0,s=[];for(let l=0;l<t;l++){const c=l===0&&r?a:l===0?o:n,u=oo(),f=ro(c,u);f&&s.push(f)}r&&await y.from("users").update({first_booster_opened:!0}).eq("id",e.id);const{data:d}=await y.from("cards").insert(s.map(l=>({owner_id:e.id,player_id:l.id,card_type:"player"}))).select();return(d||[]).forEach((l,c)=>{y.rpc("record_transfer",{p_card_id:l.id,p_player_id:s[c].id,p_club_name:e.club_name||e.pseudo,p_manager_name:e.pseudo,p_source:"booster",p_price:null}).then(()=>{}).catch(()=>{})}),s.map((l,c)=>({...d[c],player:l}))}async function Xi(e,t,i){const{error:n}=await y.from("users").update({credits:e.credits-i}).eq("id",e.id);if(n)throw n;const{data:a}=await y.from("gc_definitions").select("id,name,gc_type,color,effect,image_url").eq("is_active",!0),o=a!=null&&a.length?a:Object.keys(Qt).map(c=>({name:c,gc_type:"game_changer"})),r=Array.from({length:t},()=>{const c=o[Math.floor(Math.random()*o.length)];return{owner_id:e.id,card_type:"game_changer",gc_type:c.name,gc_definition_id:c.id||null}}),{data:s,error:d}=await y.from("cards").insert(r).select();return d&&console.error("[Booster GC] Erreur insert:",d.message,d),(s||[]).map(c=>{const u=a==null?void 0:a.find(f=>f.name===c.gc_type||f.id===c.gc_definition_id);return{...c,_gcDef:u||null}})}async function Qi(e,t){const{error:i}=await y.from("users").update({credits:e.credits-t}).eq("id",e.id);if(i)throw i;const{data:n}=await y.from("cards").select("formation").eq("owner_id",e.id).eq("card_type","formation"),a=new Set((n||[]).map(c=>c.formation)),o=Yi(),r=o[Math.floor(Math.random()*o.length)],s=a.has(r),{data:d,error:l}=await y.from("cards").insert({owner_id:e.id,card_type:"formation",formation:r}).select();return l&&console.error("[Booster Formation] Erreur insert:",l.message,l),(d||[]).map(c=>({...c,isDuplicate:s}))}function Zi(e,t,i,n=null){var ce,P;if(!e||e.length===0){const I=document.createElement("div");I.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3000;gap:16px;color:#fff;padding:24px;text-align:center",I.innerHTML=`
      <div style="font-size:48px">😕</div>
      <div style="font-size:20px;font-weight:900">Aucune carte obtenue</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Erreur lors du tirage (permissions DB ou colonne manquante)</div>
      <button style="margin-top:10px;padding:12px 28px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer" id="anim-close-err">Fermer</button>`,document.body.appendChild(I),(ce=I.querySelector("#anim-close-err"))==null||ce.addEventListener("click",()=>I.remove());return}e=[...e].sort((I,k)=>{const B=I.player?Ke(I.player):-1;return(k.player?Ke(k.player):-1)-B});const a=document.createElement("div");a.id="booster-anim-overlay",a.innerHTML=`
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
  `,document.body.appendChild(a);let o=!1;const r=document.getElementById("pack-cut-zone"),s=document.getElementById("pack-blade");let d=!1;const l=I=>I.touches&&I.touches[0]?I.touches[0].clientX:I.clientX;function c(I){o||(d=!0,s.style.opacity="1",u(I))}function u(I){if(!d||o)return;const k=r.getBoundingClientRect(),B=l(I)-k.left,se=Math.max(0,Math.min(1,B/k.width));s.style.width=se*k.width+"px",se>=.82&&x()}function f(){o||(d=!1,s.style.transition="width .2s ease, opacity .2s ease",s.style.width="0",s.style.opacity="0",setTimeout(()=>{o||(s.style.transition="")},220))}function x(){var k;if(o)return;o=!0,d=!1,s.style.width="100%",s.style.opacity="1",(k=document.getElementById("cut-flash"))==null||k.classList.add("cut-flash-go"),navigator.vibrate&&navigator.vibrate([30,20,50]);const I=document.getElementById("cut-hint");I&&(I.style.opacity="0"),r.classList.add("pack-cut"),setTimeout(()=>{s.style.opacity="0",document.getElementById("pack-phase").style.display="none",v(0)},620)}r.addEventListener("pointerdown",c),window.addEventListener("pointermove",u),window.addEventListener("pointerup",f),r.addEventListener("touchstart",c,{passive:!0}),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",f);let m=0,p=!1;const g=new Set;function v(I){m=I,document.getElementById("reveal-phase").style.display="flex",h(),_(I,0),Z()}function h(){const I=document.getElementById("card-dots");I&&(I.innerHTML=e.map((k,B)=>`<div class="card-dot" data-i="${B}" style="width:8px;height:8px;border-radius:50%;background:${B===m?"#FFD700":"rgba(255,255,255,0.3)"};transition:background .2s;cursor:pointer"></div>`).join(""),I.querySelectorAll(".card-dot").forEach(k=>k.addEventListener("click",()=>b(parseInt(k.dataset.i)))))}function _(I,k){var K,E;const B=e[I],se=document.getElementById("card-counter"),ue=document.getElementById("card-track");se&&(se.textContent=`Carte ${I+1} / ${e.length}`);const le=document.getElementById("reveal-btns");le&&(le.style.display=I===e.length-1?"flex":"none");const ae=B.card_type==="player"&&((K=B.player)==null?void 0:K.rarity)==="legende",Le=!g.has(I);g.add(I);let U=0;if(B.card_type==="player"&&B.player){const S=B.player,F=S.job||"ATT";U=Number(F==="GK"?S.note_g:F==="DEF"?S.note_d:F==="MIL"?S.note_m:S.note_a)||0}const X=S=>{ue.innerHTML=`
        <div id="current-card-wrap" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;${ae?"filter:drop-shadow(0 0 20px #7a28b8)":""}">
          <div style="transform:scale(1.25);transform-origin:center">${ao(B)}</div>
          ${B.isDuplicate?'<div style="font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#cc2222,#ff5555);border-radius:20px;padding:4px 16px;letter-spacing:1px;text-transform:uppercase;box-shadow:0 2px 10px rgba(0,0,0,0.4);animation:dupPulse 1.2s ease-in-out infinite;white-space:nowrap;margin-top:8px">🔁 Doublon</div>':""}
        </div>`;const F=document.getElementById("current-card-wrap");k!==0?(F.style.transition="none",F.style.transform=`translateX(${k>0?100:-100}%)`,requestAnimationFrame(()=>{F.style.transition="transform .28s cubic-bezier(.25,1,.5,1)",F.style.transform="translateX(0)"})):F.animate([{opacity:0,transform:"scale(.7)"},{opacity:1,transform:"scale(1)"}],{duration:300,easing:"cubic-bezier(.34,1.56,.64,1)"}),S||ae?ne():oe(),h()};Le&&(((E=B.player)==null?void 0:E.rarity)==="legende"||U>=8)&&B.card_type==="player"&&B.player?T(B,()=>X(!0)):X(!1)}function T(I,k){var we;p=!0;const B=I.player,se=`https://flagsapi.com/${B.country_code}/flat/64.png`,ue=(we=B.clubs)==null?void 0:we.logo_url,le=B.face?"/"+B.face.replace(/^public\//,"").replace(/^\//,""):null,ae=B.job||"ATT",Le=Number(ae==="GK"?B.note_g:ae==="DEF"?B.note_d:ae==="MIL"?B.note_m:B.note_a)||0,U=I.evolution_bonus||0,X=Le+U,K=B.rarity==="legende",E=X>=18,S=document.getElementById("walkout-overlay"),F=document.getElementById("walkout-stage");if(!S||!F){p=!1,k();return}let R=null;K&&(R=new Audio("/sounds/Legendary.mp3"),R.volume=.8,R.play().catch(()=>{})),S.style.display="flex";const H=()=>{const me=F.firstElementChild;me&&(me.classList.remove("wo-in"),me.classList.add("wo-out"))},M=1800,G=400;F.innerHTML=`<img class="wo-in" src="${se}" style="height:130px;border-radius:10px;box-shadow:0 10px 36px rgba(0,0,0,.6)" onerror="this.style.display='none'">`,navigator.vibrate&&navigator.vibrate(30),setTimeout(H,M),setTimeout(()=>{var me;F.innerHTML=ue?`<img class="wo-in" src="${ue}" style="max-height:160px;max-width:210px;object-fit:contain">`:`<div class="wo-in" style="font-size:34px;font-weight:900;color:#fff;text-align:center">${((me=B.clubs)==null?void 0:me.encoded_name)||"CLUB"}</div>`,navigator.vibrate&&navigator.vibrate(30)},M+G),setTimeout(H,M*2+G),setTimeout(()=>{F.innerHTML=le?`<img class="wo-in" src="${le}" style="height:200px;border-radius:50%;box-shadow:0 0 40px rgba(255,255,255,0.3);object-fit:cover;object-position:top">`:'<div class="wo-in" style="font-size:80px">👤</div>',navigator.vibrate&&navigator.vibrate(30)},(M+G)*2),setTimeout(H,(M+G)*2+M);const _e=E?"#FFD700":{GK:"#c0c0c0",DEF:"#e03030",MIL:"#D4A017",ATT:"#3fbf5f"}[ae]||"#fff";setTimeout(()=>{F.innerHTML=`<div class="wo-in" style="
        font-size:${E?"120px":"90px"};font-weight:900;color:${_e};
        font-family:Arial Black,Arial;line-height:1;
        text-shadow:0 0 30px ${_e}, 0 0 60px ${_e};
        ${E?"animation:woGlow 0.8s ease-in-out infinite;":""}">
        ${X}
      </div>`,E&&navigator.vibrate&&navigator.vibrate([50,30,100,30,200])},(M+G)*3),setTimeout(H,(M+G)*3+M),setTimeout(()=>{S.style.display="none",F.innerHTML="",p=!1,R&&!K&&R.pause(),navigator.vibrate&&navigator.vibrate([40,30,80]),k()},(M+G)*4)}function b(I){if(p||I<0||I>=e.length||I===m)return;const k=I>m?1:-1;m=I,_(I,k)}function N(){b(m+1)}function D(){b(m-1)}function Z(){const I=document.getElementById("card-viewport");if(!I||I._swipeBound)return;I._swipeBound=!0;let k=0,B=0,se=0,ue=!1;const le=K=>K.touches?K.touches[0].clientX:K.clientX,ae=K=>K.touches?K.touches[0].clientY:K.clientY,Le=K=>{ue=!0,k=le(K),B=ae(K),se=0},U=K=>{if(!ue)return;se=le(K)-k;const E=ae(K)-B;if(Math.abs(se)<Math.abs(E))return;const S=document.getElementById("current-card-wrap");S&&(S.style.transition="none",S.style.transform=`translateX(${se*.6}px) rotate(${se*.02}deg)`)},X=()=>{if(!ue)return;ue=!1;const K=document.getElementById("current-card-wrap"),E=55;se<=-E&&m<e.length-1?N():se>=E&&m>0?D():K&&(K.style.transition="transform .2s ease",K.style.transform="translateX(0)")};I.addEventListener("pointerdown",Le),I.addEventListener("pointermove",U),I.addEventListener("pointerup",X),I.addEventListener("pointercancel",X),I.addEventListener("touchstart",Le,{passive:!0}),I.addEventListener("touchmove",U,{passive:!0}),I.addEventListener("touchend",X),I.addEventListener("click",K=>{if(Math.abs(se)>8)return;const E=I.getBoundingClientRect();K.clientX-E.left>E.width/2?N():D()})}let O=null;function ne(){const I=document.getElementById("fireworks-canvas");if(!I)return;I.width=window.innerWidth,I.height=window.innerHeight;const k=I.getContext("2d"),B=[];function se(){const le=Math.random()*I.width,ae=Math.random()*I.height*.6,Le=["#7a28b8","#ff4081","#D4A017","#00e676","#fff","#e040fb","#40c4ff"],U=Le[Math.floor(Math.random()*Le.length)];for(let X=0;X<60;X++){const K=Math.PI*2/60*X,E=2+Math.random()*5;B.push({x:le,y:ae,vx:Math.cos(K)*E,vy:Math.sin(K)*E,alpha:1,color:U,size:2+Math.random()*3})}}se(),O=setInterval(se,600);function ue(){if(document.getElementById("fireworks-canvas")){k.clearRect(0,0,I.width,I.height);for(let le=B.length-1;le>=0;le--){const ae=B[le];if(ae.x+=ae.vx,ae.y+=ae.vy+.08,ae.vy*=.98,ae.alpha-=.018,ae.alpha<=0){B.splice(le,1);continue}k.globalAlpha=ae.alpha,k.fillStyle=ae.color,k.beginPath(),k.arc(ae.x,ae.y,ae.size,0,Math.PI*2),k.fill()}k.globalAlpha=1,(O!==null||B.length>0)&&requestAnimationFrame(ue)}}ue()}function oe(){O!==null&&(clearInterval(O),O=null);const I=document.getElementById("fireworks-canvas");I&&I.getContext("2d").clearRect(0,0,I.width,I.height)}if(n){const I=document.getElementById("reveal-btns");I&&(I.innerHTML='<button class="btn btn-primary" id="reveal-next" style="flex:1">Continuer →</button>'),(P=document.getElementById("reveal-next"))==null||P.addEventListener("click",()=>{oe(),a.remove(),n()})}else document.getElementById("reveal-collection").addEventListener("click",()=>{oe(),a.remove(),i("collection")}),document.getElementById("reveal-more").addEventListener("click",()=>{oe(),a.remove(),i("boosters")})}function ao(e){var t,i,n,a;if(e.card_type==="player"&&e.player)return to(e);if(e.card_type==="game_changer"){const o=e._gcDef,r=(o==null?void 0:o.gc_type)==="ultra_game_changer",s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"},d={purple:"#b06ce0",light_blue:"#00d4ef"},l=s[o==null?void 0:o.color]||s.purple,c=d[o==null?void 0:o.color]||d.purple,u=(o==null?void 0:o.name)||e.gc_type||"Game Changer",f=(o==null?void 0:o.effect)||((t=Qt[e.gc_type])==null?void 0:t.desc)||"",x=o!=null&&o.image_url?`/icons/${o.image_url}`:null,m=((i=Qt[e.gc_type])==null?void 0:i.icon)||"⚡";return`<div style="width:170px;height:240px;background:${l};border-radius:14px;border:3px solid ${c};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 24px ${c}88;flex-shrink:0">
      <!-- Barre nom (haut, fond légèrement clair) -->
      <div style="padding:8px 10px;background:rgba(255,255,255,0.14);text-align:center;flex-shrink:0">
        <div style="font-size:${u.length>14?9:11}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u}</div>
        <div style="font-size:7px;color:rgba(255,255,255,0.55);margin-top:1px">${r?"💎 ULTRA GAME CHANGER":"⚡ GAME CHANGER"}</div>
      </div>
      <!-- Image (grand, carré centré) -->
      <div style="flex:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06);margin:0">
        ${x?`<img src="${x}" style="max-width:120px;max-height:120px;width:auto;height:auto;object-fit:contain;border-radius:6px">`:`<span style="font-size:56px">${m}</span>`}
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
    </div>`}return'<div style="width:140px;height:200px;background:#333;border-radius:12px"></div>'}function so(e){var t,i;if((t=e==null?void 0:e.rates)!=null&&t.length){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px";const a={normal:"#ccc",pepite:"#D4A017",pépite:"#D4A017",papyte:"#909090",legende:"#7a28b8",légende:"#7a28b8"},o={player:"Joueur",formation:"Formation",game_changer:"Game Changer",game_helper:"Game Helper"};n.innerHTML=`
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
      </div>`,document.body.appendChild(n),n.addEventListener("click",r=>{r.target===n&&n.remove()}),(i=document.getElementById("odds-close"))==null||i.addEventListener("click",()=>n.remove());return}lo()}function lo(){const e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;
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
  `,document.body.appendChild(e),e.addEventListener("click",t=>{t.target===e&&e.remove()}),document.getElementById("odds-close").addEventListener("click",()=>e.remove())}function co(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;background:rgba(0,0,0,0.88);
      display:flex;flex-direction:column;align-items:center;
      justify-content:center;z-index:9999;gap:12px;color:#fff;
    `,t.innerHTML=`
      <div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">Publicité</div>
      <div style="font-size:64px;font-weight:900;line-height:1" id="mw-ad-cd">5</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.5)">Votre booster arrive dans un instant…</div>
    `,document.body.appendChild(t);let i=5;const n=setInterval(()=>{i--;const a=document.getElementById("mw-ad-cd");a&&(a.textContent=i),i<=0&&(clearInterval(n),t.remove(),e(!0))},1e3)})}async function po(e,{state:t,navigate:i,toast:n,refreshProfile:a}){var f,x;const{data:o}=await y.from("users").select("*").eq("id",t.user.id).single();o&&(t.profile=o);let r=Array.isArray((f=t.profile)==null?void 0:f.pending_boosters)?[...t.profile.pending_boosters]:[];if(!r.length){await y.from("users").update({onboarding_done:!0}).eq("id",t.user.id),i("home");return}let s=null;try{const p=(await Vi()).find(g=>(g.name||"").toLowerCase().includes("new player"));p&&(s=Wi(p))}catch(m){console.warn('[Onboarding] Config "Booster (new player)" introuvable, fallback taux par défaut',m)}const d=r.length;let l=0;e.innerHTML=`
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
  </div>`;const c=async()=>{await y.from("users").update({pending_boosters:r}).eq("id",t.user.id)};async function u(){var h;if(l>=d||!r.length){await y.from("users").update({pending_boosters:[],onboarding_done:!0}).eq("id",t.user.id),a&&await a(),n("Tous tes boosters sont ouverts ! Bon jeu 🎮","success",4e3),i("home");return}const m=r[0],{data:p}=await y.from("users").select("*").eq("id",t.user.id).single();p&&(t.profile=p);let g=[];try{if(m.type==="formation")g=await Qi(t.profile,0);else if(m.type==="game_changer")g=await Xi(t.profile,m.count||3,0);else if(s&&((h=s.rates)!=null&&h.length)){const _={...s,cost:0,cardCount:m.count||s.cardCount||5};g=await Zt(t.profile,_),m.guaranteeGK&&!t.profile.first_booster_opened&&(g.some(b=>b.player&&b.player.job==="GK")||await uo(t.profile,g),await y.from("users").update({first_booster_opened:!0}).eq("id",t.profile.id))}else g=await Ji(t.profile,m.count||5,0)}catch(_){n(_.message||"Erreur ouverture booster","error");return}r.shift(),l++,await c();const v=m.type==="formation"?{name:"Booster Formation",img:"/icons/booster-formation.png"}:m.type==="game_changer"?{name:"Booster Game Changer",img:"/icons/booster-gamechanger.png"}:{name:`Booster Joueurs (${l}/${d})`,img:(s==null?void 0:s.img)||"/icons/booster-players.png"};Zi(g,v,i,()=>{u()})}(x=document.getElementById("onboard-start"))==null||x.addEventListener("click",()=>u())}async function uo(e,t){try{const{data:i}=await y.from("players").select("id,job,firstname,surname_real,country_code,club_id,rarity,note_g,note_d,note_m,note_a,skin,hair,hair_length,face,sell_price,clubs(encoded_name,logo_url)").eq("is_active",!0).eq("job","GK");if(!(i!=null&&i.length))return;const n=i[Math.floor(Math.random()*i.length)],a=t.findIndex(r=>r.player);if(a===-1)return;const o=t[a];await y.from("cards").update({player_id:n.id}).eq("id",o.id),t[a]={...o,player_id:n.id,player:n}}catch(i){console.warn("[Onboarding] ensureGK échec",i)}}function Ve(){return Math.min(window.innerWidth-40,860)}function ot(){return Math.round(Ve()*1.1)}function fo(e){var a,o;if(!e)return null;const t=e._line||e.job||"MIL",i=t==="GK"?e.note_g||0:t==="DEF"?e.note_d||0:t==="MIL"?e.note_m||0:e.note_a||0,n=e.stadiumBonus?10:0;return{name:e.name,firstname:e.firstname||"",note:i+(e.boost||0)+n,note_g:e.note_g||0,note_d:e.note_d||0,note_m:e.note_m||0,note_a:e.note_a||0,_evolution_bonus:0,stadiumBonus:e.stadiumBonus||!1,boost:e.boost||0,job:e.job,job2:e.job2||null,_line:e._line||e.job,_col:e._col,country_code:e.country_code,club_id:e.club_id,rarity:e.rarity,clubName:e.clubName||((a=e.clubs)==null?void 0:a.encoded_name)||null,clubLogo:e.clubLogo||((o=e.clubs)==null?void 0:o.logo_url)||null,face:e.face||null,portrait:wt(e)}}function en(e){var o,r,s;if(!e)return"";const t=d=>d?De({...d,_evolution_bonus:0},{width:52,role:d._line||d.job,showStad:!!d.stadiumBonus,extraNote:d.boost||0}):"",n={goal:"⚽","goal-home":"⚽","goal-ai":"⚽",duel:"⚔️",midfield:"🎯",sub:"🔄",gc:"⚡",boost:"💥","defense-won":"🛡️","attack-won":"⚔️","defense-lost":"😓","attack-lost":"😓"}[e.type]||"📋";return`
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
    </div>`}function rt(e,t,i,n,a){const o=document.getElementById("goal-anim-overlay");o&&o.remove();const r=document.createElement("div");r.id="goal-anim-overlay",r.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.85);pointer-events:none`;const s=(e||[]).slice(0,3).map(d=>De({...d,_evolution_bonus:0},{width:Math.min(140,Math.round(window.innerWidth/4)),role:d._line||d.job,showStad:!!d.stadiumBonus})).join("");if(r.innerHTML=`
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
      }`,document.head.appendChild(d)}setTimeout(()=>{r.style.opacity="0",r.style.transition="opacity 0.4s",setTimeout(()=>{r.remove(),a==null||a()},400)},1800)}function go(e,t,i){const n=document.getElementById("sub-anim-overlay");n&&n.remove();const a=document.createElement("div");a.id="sub-anim-overlay",a.style.cssText=`
    position:fixed;inset:0;z-index:3000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    background:rgba(0,0,0,0.8);pointer-events:none`;const o=Math.min(120,Math.round(window.innerWidth/4)),r=e?De({...e,_evolution_bonus:0},{width:o,role:e._line||e.job}):"",s=t?De({...t,_evolution_bonus:0},{width:o,role:t._line||t.job}):"";a.innerHTML=`
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
    </div>`,document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.4s",setTimeout(()=>{a.remove(),i==null||i()},400)},1600)}function xt(e,t="rgba(0,0,0,0.85)",i=2200){const n=document.getElementById("game-toast");n&&n.remove();const a=document.createElement("div");if(a.id="game-toast",a.style.cssText=`
    position:fixed;top:80px;left:50%;transform:translateX(-50%);
    background:${t};color:#fff;padding:10px 20px;border-radius:24px;
    font-size:14px;font-weight:700;z-index:4000;
    box-shadow:0 4px 20px rgba(0,0,0,0.4);
    animation:toastIn 0.3s ease-out;
    pointer-events:none;white-space:nowrap;max-width:90vw;text-align:center`,a.textContent=e,!document.getElementById("game-toast-style")){const o=document.createElement("style");o.id="game-toast-style",o.textContent=`
      @keyframes toastIn {
        from { opacity:0; transform:translateX(-50%) translateY(-10px); }
        to   { opacity:1; transform:translateX(-50%) translateY(0); }
      }`,document.head.appendChild(o)}document.body.appendChild(a),setTimeout(()=>{a.style.opacity="0",a.style.transition="opacity 0.3s",setTimeout(()=>a.remove(),300)},i)}function Dt(e,t){return e.reduce((i,n)=>i+milNoteWithBonus(n,t),0)}function Ft(e){let t=0;for(let i=0;i<e.length-1;i++){const n=oi(e[i],e[i+1]);n==="#00ff88"?t+=2:n==="#FFD700"&&(t+=1)}return t}function ji(e,t,i,n,a){return`<div id="duel-row-${n}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0), opacity .5s ease;transform-origin:center">
      <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${t}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0">
        ${e.map((o,r)=>{const s=r<e.length-1?oi(o,e[r+1]):null,d=!s||s==="#ff3333"||s==="#cc2222",l=s==="#00ff88"?"+2":s==="#FFD700"?"+1":"";return milNoteWithBonus(o,a),o.stadiumBonus||a&&(a.club_id&&String(o.club_id)===String(a.club_id)||a.country_code&&(o.country_code,a.country_code)),`
          <div class="duel-card duel-card-${n}" data-idx="${r}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease, transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
            ${De({...o,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:a,role:"MIL",extraNote:o.boost||0})}
          </div>
          ${r<e.length-1?`<div class="duel-link duel-link-${n}" data-idx="${r}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${d?"rgba(255,255,255,0.12)":s};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${d?"none":`0 0 8px ${s}`}">
            ${l?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${s}">${l}</span>`:""}
          </div>`:""}
          `}).join("")}
      </div>
      <div class="duel-score-line duel-score-line-${n}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
        Score: ${Dt(e,a)} + ${Ft(e)} liens = <b style="color:#fff">${Dt(e,a)+Ft(e)}</b>
      </div>
    </div>`}async function mo(e,t){const{state:i}=t,a=(i.params||{}).matchMode||"vs_ai_easy",o=a.replace("vs_ai_",""),r=a;await $t(e,t,a,async({deckId:s,formation:d,starters:l,subsRaw:c,gcCardsEnriched:u,gcDefs:f,stadiumDef:x})=>{try{let m=Jt(l,d);x&&(m=At(m,x),Mt(c,x));const p=await xo(d,o),g=p.lines||p,v=async h=>{try{const{data:_,error:T}=await y.from("matches").insert({home_id:i.profile.id,away_id:null,mode:r,home_deck_id:s,status:"in_progress"}).select().single();if(T){console.error("[MatchIA] Erreur création match:",T),Ot(e,"⚠️","Impossible de créer le match ("+T.message+").","Retour",()=>t.navigate("home"));return}const b=p.stadiumDef||null;b&&g&&(At(g,b),Mt(p.subs||[],b));const N={gcDefs:f||[],matchId:_==null?void 0:_.id,mode:r,difficulty:o,formation:d,homeTeam:m,aiTeam:g,homeSubs:c,subsUsed:0,maxSubs:Math.min(c.length,3),aiSubs:p.subs||[],aiSubsUsed:0,aiMaxSubs:Math.min((p.subs||[]).length,3),aiUsedSubIds:[],aiGcCards:p.gcCards||[],aiUsedGc:[],aiStadiumDef:b,homeScore:0,aiScore:0,gcCards:h,usedGc:[],boostCard:null,boostUsed:!1,phase:"midfield",attacker:null,round:0,selected:[],pendingAttack:null,log:[],modifiers:{home:{},ai:{}},clubName:i.profile.club_name||"Vous"};yo(e,N,t)}catch(_){console.error("[MatchIA] Exception launchMatch:",_),Ot(e,"⚠️","Erreur au lancement du match : "+_.message,"Retour",()=>t.navigate("home"))}};if(!u.length){v([]);return}fn(e,u,v)}catch(m){console.error("[MatchIA] Exception setup:",m),Ot(e,"⚠️","Erreur de préparation du match : "+m.message,"Retour",()=>t.navigate("home"))}})}async function xo(e,t){var g;const{data:i}=await y.from("players").select("id,firstname,surname_real,country_code,club_id,job,job2,note_g,note_d,note_m,note_a,rarity,skin,hair,hair_length,face,clubs(encoded_name,logo_url)").eq("is_active",!0).limit(80);if(!i||i.length<11)return{lines:bo(e),subs:[],gcCards:[],stadiumDef:null};const n=Ct[e]||Ct["4-4-2"],a={GK:[],DEF:[],MIL:[],ATT:[]},o=new Set;function r(v,h,_){var T,b;return o.add(v.id),{cardId:"ai-"+v.id+"-"+_,id:v.id,firstname:v.firstname,name:v.surname_real,country_code:v.country_code,club_id:v.club_id,job:v.job,job2:v.job2,note_g:Number(v.note_g)||0,note_d:Number(v.note_d)||0,note_m:Number(v.note_m)||0,note_a:Number(v.note_a)||0,rarity:v.rarity,skin:v.skin,hair:v.hair,hair_length:v.hair_length,clubName:((T=v.clubs)==null?void 0:T.encoded_name)||null,clubLogo:((b=v.clubs)==null?void 0:b.logo_url)||null,boost:0,used:!1,_line:h}}for(const v of["GK","DEF","MIL","ATT"]){const h=i.filter(D=>D.job===v&&!o.has(D.id)),_=i.filter(D=>D.job!==v&&!o.has(D.id)),T=[...h,..._],b=[];for(let D=0;D<n[v];D++){const Z=T[D];Z&&b.push(r(Z,v,D))}const N=Bt(b.length);b.forEach((D,Z)=>{D._col=N[Z]}),a[v]=b}const d=i.filter(v=>!o.has(v.id)).slice(0,5).map((v,h)=>r(v,v.job,100+h)),u=Object.keys(Se).sort(()=>Math.random()-.5).slice(0,3).map((v,h)=>{var _,T;return{id:"ai-gc-"+h,gc_type:v,name:((_=Se[v])==null?void 0:_.name)||v,icon:((T=Se[v])==null?void 0:T.icon)||"⚡"}}),f=Object.values(a).flat(),x={};f.forEach(v=>{v.club_id&&(x[v.club_id]=(x[v.club_id]||0)+1)});const m=(g=Object.entries(x).sort((v,h)=>h[1]-v[1])[0])==null?void 0:g[0];let p=null;if(m){const{data:v}=await y.from("clubs").select("id,encoded_name,logo_url,country_code").eq("id",m).single();v&&(p={club_id:v.id,country_code:null,name:v.encoded_name+" Stadium",club:{encoded_name:v.encoded_name,logo_url:v.logo_url}})}return{lines:a,subs:d,gcCards:u,stadiumDef:p}}function bo(e){const t=Ct[e]||Ct["4-4-2"],i={GK:[],DEF:[],MIL:[],ATT:[]},n=["ROBOT","CYBER","NEXUS","ALGO","PIXEL","BYTE","LOGIC","TURBO","CORE","VOLT","FLUX"];let a=0;for(const o of["GK","DEF","MIL","ATT"]){const r=[];for(let d=0;d<t[o];d++){const l=3+Math.floor(Math.random()*5);r.push({cardId:"fake-"+a,id:"fake-"+a,firstname:"IA",name:n[a%n.length],country_code:"XX",club_id:null,job:o,job2:null,note_g:o==="GK"?l:2,note_d:o==="DEF"?l:2,note_m:o==="MIL"?l:2,note_a:o==="ATT"?l:2,rarity:"normal",boost:0,used:!1,_line:o}),a++}const s=Bt(r.length);r.forEach((d,l)=>{d._col=s[l]}),i[o]=r}return i}function yo(e,t,i){var n;e.innerHTML=`
  <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
    <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
    <div style="font-size:20px;font-weight:900;color:#ff6b6b">IA (${t.difficulty.toUpperCase()})</div>
    ${t.aiStadiumDef?`<div style="font-size:11px;color:#FFD700;margin-top:2px">🏟️ ${t.aiStadiumDef.name} · +10 aux joueurs ${((n=t.aiStadiumDef.club)==null?void 0:n.encoded_name)||""}</div>`:""}
    <div style="width:100%;max-width:900px;margin:0 auto">${jt(t.aiTeam,t.formation,null,[],Ve(),ot())}</div>
    <div style="font-size:15px;color:rgba(255,255,255,0.7)">
      <span class="loading-dots">Chargement</span>
    </div>
    <style>@keyframes ld{0%,20%{opacity:0.3}50%{opacity:1}80%,100%{opacity:0.3}}.loading-dots::after{content:'...';animation:ld 1.4s infinite}</style>
  </div>`,setTimeout(()=>vo(e,t,i),5e3)}const Xe=e=>fo(e);function vo(e,t,i){const n=t.homeTeam.MIL||[],a=t.aiTeam.MIL||[],o=t.stadiumDef||null,r=t.aiStadiumDef||null,s=Dt(n,o)+Ft(n),d=Dt(a,r)+Ft(a),l=s>=d;e.innerHTML=`
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

    ${ji(n,t.clubName,"#D4A017","home",o)}

    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
      <div id="score-home" style="font-size:48px;font-weight:900;color:#D4A017;transition:all 0.5s ease">0</div>
      <div id="vs-label" style="font-size:14px;color:rgba(255,255,255,0.4);letter-spacing:3px;opacity:0">VS</div>
      <div id="score-ai" style="font-size:48px;font-weight:900;color:rgba(255,255,255,0.7);transition:all 0.5s ease">0</div>
    </div>

    ${ji(a,"IA","#bb2020","ai",r)}

    <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
    <div id="duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center, rgba(10,61,30,0.4), rgba(10,61,30,0.92))"></div>
  </div>`;const c=()=>{const m=(p,g)=>e.querySelectorAll(p).forEach((v,h)=>{setTimeout(()=>{v.style.opacity="1",v.style.transform="translateY(0) scale(1)"},g+h*90)});m(".duel-card-home",150),m(".duel-card-ai",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((p,g)=>{setTimeout(()=>{p.style.opacity="1"},g*70)}),900),setTimeout(()=>{const p=e.querySelector("#vs-label");p&&(p.style.opacity="1",p.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(g=>g.style.opacity="1")},1250),setTimeout(()=>{u("score-home",s,800),u("score-ai",d,800)},1500)};function u(m,p,g){const v=document.getElementById(m);if(!v)return;const h=performance.now(),_=T=>{const b=Math.min(1,(T-h)/g);v.textContent=Math.round(p*(1-Math.pow(1-b,3))),b<1?requestAnimationFrame(_):v.textContent=p};requestAnimationFrame(_)}requestAnimationFrame(c),t.attacker=l?"home":"ai";const f=l?Pi():null;l&&(t.boostCard={value:f}),t.log.push({type:"duel",title:"Milieu de Terrain",homePlayers:n.map(m=>Xe(m)),aiPlayers:a.map(m=>Xe(m)),homeTotal:s,aiTotal:d,text:`Duel milieu : ${t.clubName} ${s} – ${d} IA → ${l?t.clubName+" attaque":"IA attaque"}`});const x=()=>{t.phase=t.attacker==="home"?"attack":"ai-attack",ze(e,t,i),t.attacker==="ai"&&setTimeout(()=>Pt(e,t,i),800)};setTimeout(()=>{const m=document.getElementById("score-home"),p=document.getElementById("score-ai"),g=document.getElementById(l?"duel-row-home":"duel-row-ai"),v=document.getElementById(l?"duel-row-ai":"duel-row-home"),h=l?m:p,_=l?p:m;h&&(h.style.fontSize="80px",h.style.color=l?"#FFD700":"#ff6b6b",h.style.animation="duelPulse .5s ease"+(l?", duelGlow 1.5s ease infinite .5s":"")),_&&(_.style.opacity="0.25"),setTimeout(()=>{g&&(g.style.transformOrigin="center",g.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",g.style.zIndex="5"),setTimeout(()=>{var b;const T=document.getElementById("duel-shock");if(T){const N=(b=v||g)==null?void 0:b.getBoundingClientRect(),D=e.querySelector(".match-screen").getBoundingClientRect();N&&(T.style.top=N.top-D.top+N.height/2+"px"),T.style.animation="shockwave .5s ease-out forwards"}v&&(v.style.transformOrigin="center",v.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var b;const T=document.getElementById("duel-finale");T&&(T.innerHTML=`
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
          </button>`,T.style.transition="opacity .45s ease",T.style.opacity="1",T.style.pointerEvents="auto",(b=document.getElementById("start-match-btn"))==null||b.addEventListener("click",x))},600)},700)},2800)}function ze(e,t,i){var N,D,Z,O,ne,oe,ce,P,I;const n=t.selected.map(k=>k.cardId),a=t.usedSubIds||[],o=t.homeSubs.filter(k=>!a.includes(k.cardId)),s=Object.values(t.homeTeam).flat().filter(k=>k.used).length>0&&o.length>0&&t.subsUsed<t.maxSubs,d=!["GK","DEF","MIL","ATT"].some(k=>(t.aiTeam[k]||[]).some(B=>!B.used)),l=[...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(k=>!k.used),c=t.phase==="attack"&&d&&l.length===0?[...t.homeTeam.GK||[],...t.homeTeam.DEF||[]].filter(k=>!k.used).map(k=>k.cardId):[];t.log[t.log.length-1];const u=t.phase==="ai-attack"||t.phase==="ai-defense",f=t.phase==="attack",x=t.phase==="defense",m=t.phase==="finished",g=(t.homeSubs||[]).filter(k=>!(t.usedSubIds||[]).includes(k.cardId)).length>0&&t.subsUsed<t.maxSubs,v=f&&l.length===0&&!g,h=t.gcCards.filter(k=>!t.usedGc.includes(k.id)),_=t.boostCard&&!t.boostUsed;e.style.overflow="hidden",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column",e.innerHTML=`
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
      ${(()=>{if(t.phase==="defense"&&t.pendingAttack){const B=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
            <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ IA ATTAQUE — Défendez !</div>
            ${ct((B.players||[]).map(se=>({...se,used:!1})),"#ff6b6b",B.total)}
          </div>`}if(t.phase==="ai-defense"&&t.pendingAttack){const B=t.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
            <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
            ${ct((B.players||[]).map(se=>({...se,used:!1})),"#00ff88",B.total)}
          </div>`}const k=t.log[t.log.length-1];return k?'<div style="padding:2px 4px">'+en(k)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})()}
    </div>

    <!-- BOUTON HISTORIQUE -->
    <button id="toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
      ▼ Historique (${t.log.length})
    </button>

    ${(()=>{const k=window.innerWidth>=700,B=(E,S,F)=>{var Me,Ce;const R=(t.gcDefs||[]).find(Fe=>Fe.name===E.gc_type),H={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[R==null?void 0:R.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",M={purple:"#b06ce0",light_blue:"#00d4ef"}[R==null?void 0:R.color]||"#b06ce0",G=(R==null?void 0:R.name)||E.gc_type,$e=(R==null?void 0:R.effect)||((Me=Se[E.gc_type])==null?void 0:Me.desc)||"",_e=R!=null&&R.image_url?`/icons/${R.image_url}`:null,we=((Ce=Se[E.gc_type])==null?void 0:Ce.icon)||"⚡",me=Math.round(F*.22),Ee=Math.round(F*.22),ke=F-me-Ee,ve=G.length>12?7:9;return`<div class="gc-mini" data-gc-id="${E.id}" data-gc-type="${E.gc_type}"
          style="box-sizing:border-box;width:${S}px;height:${F}px;border-radius:10px;border:2px solid ${M};background:${H};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
          <div style="height:${me}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:${ve}px;font-weight:900;color:#fff;text-align:center;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${S-6}px">${G}</span>
            <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
          </div>
          <div style="height:${ke}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
            ${_e?`<img src="${_e}" style="max-width:${S-10}px;max-height:${ke-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(ke*.55)}px">${we}</span>`}
          </div>
          <div style="height:${Ee}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
            <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${$e.slice(0,38)}</span>
          </div>
        </div>`},se=(E,S)=>{var F;return`<div id="boost-card"
          style="box-sizing:border-box;width:${E}px;height:${S}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(S*.04)}px;text-align:center;flex-shrink:0">
            <div style="font-size:${Math.round(S*.2)}px">⚡</div>
            <div style="font-size:${Math.round(S*.09)}px;color:#000;font-weight:900">+${(F=t.boostCard)==null?void 0:F.value}</div>
          </div>`},ue=(E,S)=>S?se(130,175):B(E,130,175),le=(E,S)=>S?se(68,95):B(E,68,95),ae=k?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",Le=m?`<button id="btn-results" style="${ae};background:linear-gradient(135deg,#D4A017,#FFD700);border:none;color:#000">🏁 Résultats</button>`:u?`<div style="${ae};background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.4)">⏳ Tour IA</div>`:v?`<button id="btn-pass" style="${ae};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER (plus d'attaquants)</button>`:f?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${t.selected.length===0?"disabled":""}> ⚔️ ATTAQUEZ <span id="match-timer" style="font-weight:900"></span></button>`:x?`<button id="btn-action" style="${ae};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${t.selected.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="match-timer" style="font-weight:900"></span></button>`:`<div style="${ae};background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"></div>`,U=f||x?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${t.selected.length}/3 sélectionné(s)</div>`:"",X=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${k?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
        ${o.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':o.map(E=>`<div class="sub-btn-col" data-sub-id="${E.cardId}" style="cursor:pointer;flex-shrink:0">${We(E,76,100)}</div>`).join("")}
      </div>`,K=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
        <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
          ${ht(t.homeTeam,t.formation,t.phase,n,Ve(),ot(),c)}
        </div>
      </div>`;return k?`
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${X}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${K}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${Le}${U}
            </div>
          </div>
          <!-- Colonne droite : GC uniquement -->
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${h.map(E=>ue(E,!1)).join("")}
            ${_?ue(null,!0):""}
          </div>
        </div>`:`
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ht(t.homeTeam,t.formation,t.phase,n,Ve(),ot(),c)}
            </div>
          </div>
        </div>
        <!-- Barre d'action ÉPINGLÉE en bas (absolute) : toujours visible -->
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${h.map(E=>le(E,!1)).join("")}
            ${_?le(null,!0):""}
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
          <div>${Le}${U}</div>
        </div>`})()}
  </div>

  <!-- PANNEAU HISTORIQUE (slide-up) -->
  <div id="match-history-panel">
    <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1)">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique du match</div>
      <button id="close-history" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
      ${t.log.length===0?`<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action pour l'instant</div>`:[...t.log].reverse().map(k=>{var B,se,ue;if(k.type==="duel"){const le=k.isGoal,ae=k.homeScored?"#FFD700":le?"#ff6b6b":"rgba(255,255,255,0.3)",Le=k.homeScored?"⚽ BUT !":le?"⚽ BUT IA !":(B=k.homePlayers)!=null&&B.length?"⚔️ Attaque":"🛡️ Défense";return`<div style="padding:8px;border-radius:8px;background:${le?"rgba(212,160,23,0.12)":"rgba(255,255,255,0.04)"};border-left:3px solid ${ae};margin-bottom:4px">
                <div style="font-size:9px;color:${ae};letter-spacing:1px;margin-bottom:5px;font-weight:700;text-transform:uppercase">${Le}</div>
                ${(se=k.homePlayers)!=null&&se.length?`<div style="margin-bottom:3px">${ct(k.homePlayers,"rgba(255,255,255,0.7)",k.homeTotal)}</div>`:""}
                ${(ue=k.aiPlayers)!=null&&ue.length?`<div style="opacity:0.7">${ct(k.aiPlayers,"#ff6b6b",k.aiTotal)}</div>`:""}
              </div>`}return k.type==="sub"?`<div style="padding:8px;border-radius:8px;background:rgba(135,206,235,0.08);border-left:3px solid #87CEEB;margin-bottom:4px">
                <div style="font-size:9px;color:#87CEEB;letter-spacing:1px;margin-bottom:5px;font-weight:700">🔄 REMPLACEMENT</div>
                <div style="display:flex;align-items:center;gap:8px">
                  ${k.outPlayer?We({...k.outPlayer,used:!0,_line:k.outPlayer.job,rarity:"normal"},38,50):""}
                  <span style="color:rgba(255,255,255,0.4);font-size:18px">→</span>
                  ${k.inPlayer?We({...k.inPlayer,_line:k.inPlayer.job,rarity:"normal"},38,50):""}
                </div>
              </div>`:k.type==="goal"?`<div style="padding:8px;border-radius:8px;background:rgba(212,160,23,0.15);border-left:3px solid #FFD700;margin-bottom:4px">
                <span style="font-size:13px">⚽</span> <span style="font-size:12px;color:#FFD700;font-weight:700">${k.text}</span>
              </div>`:`<div style="padding:6px 8px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid rgba(255,255,255,0.1);margin-bottom:4px">
              <span style="font-size:11px;color:rgba(255,255,255,0.7)">${k.text||""}</span>
            </div>`}).join("")}
    </div>
  </div>`;function T(){const k=e.querySelector(".match-screen");if(!k)return;const B=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);k.style.bottom="auto",k.style.height=B+"px",k.style.minHeight=B+"px",k.style.maxHeight=B+"px",k.style.overflow="hidden";const se=e.querySelector("#mobile-action-bar"),ue=e.querySelector("#mobile-play-area");se&&ue&&(ue.style.paddingBottom=se.offsetHeight+"px")}if(T(),setTimeout(T,120),setTimeout(T,400),setTimeout(T,1e3),t._vvBound||(t._vvBound=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",T),window.visualViewport.addEventListener("scroll",T)),window.addEventListener("resize",T)),function(){const B=e.querySelector(".terrain-wrapper svg");B&&(B.removeAttribute("width"),B.removeAttribute("height"),B.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",B.setAttribute("viewBox","-26 -26 352 352"),B.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),t._resizeBound||(t._resizeBound=!0,window.addEventListener("resize",()=>{const k=e.querySelector(".terrain-wrapper svg");k&&(k.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0")})),t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase==="attack"||t.phase==="defense"){let k=!1,B=30;const se=()=>document.getElementById("match-timer"),ue=()=>{const le=se();if(!le)return;const ae=String(Math.floor(B/60)).padStart(2,"0"),Le=String(B%60).padStart(2,"0");le.textContent=` ${ae}:${Le}`,le.style.color=k?"#ff2222":"#ff9500",le.style.fontWeight="900"};ue(),t._timerInt=setInterval(()=>{if(B--,B<0)if(!k)k=!0,B=15,ue();else{clearInterval(t._timerInt),t._timerInt=null,t.homeScore=0,t.aiScore=3;const le=document.createElement("div");le.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;padding:24px;text-align:center",le.innerHTML='<div style="font-size:56px">⏱️</div><div style="font-size:24px;font-weight:900;color:#ff4444">MATCH PERDU PAR FORFAIT</div><div style="font-size:14px;color:rgba(255,255,255,0.6)">Temps écoulé</div>',document.body.appendChild(le),setTimeout(()=>{le.remove(),yt(e,t,i)},2500)}else ue()},1e3)}(N=document.getElementById("match-quit"))==null||N.addEventListener("click",()=>{Je(e),confirm("Abandonner ? Résultat : défaite 3-0")&&(t.homeScore=0,t.aiScore=3,yt(e,t,i))}),(D=document.getElementById("view-ai"))==null||D.addEventListener("click",()=>So(t,i)),(Z=document.getElementById("toggle-history"))==null||Z.addEventListener("click",()=>{var k;(k=document.getElementById("match-history-panel"))==null||k.classList.add("open")}),(O=document.getElementById("close-history"))==null||O.addEventListener("click",()=>{var k;(k=document.getElementById("match-history-panel"))==null||k.classList.remove("open")}),(ne=document.getElementById("btn-action"))==null||ne.addEventListener("click",()=>{t.selected.length!==0&&(f?wo(e,t,i):x&&_o(e,t,i))}),(oe=document.getElementById("btn-results"))==null||oe.addEventListener("click",()=>yt(e,t,i)),(ce=document.getElementById("btn-pass"))==null||ce.addEventListener("click",()=>{t.log.push({text:"⏭️ Vous passez votre tour (plus d'attaquants)",type:"info"}),t.phase="ai-attack",ze(e,t,i),setTimeout(()=>Pt(e,t,i),800)}),e.querySelectorAll(".match-slot-hit").forEach(k=>{k.addEventListener("click",()=>ho(k,t,e,i))}),e.querySelectorAll(".match-used-hit").forEach(k=>{k.addEventListener("click",()=>Yt(e,t,i,null,k.dataset.cardId))}),e.querySelectorAll(".gc-mini").forEach(k=>{k.addEventListener("click",()=>Lo(k.dataset.gcId,k.dataset.gcType,e,t,i))}),(P=document.getElementById("boost-card"))==null||P.addEventListener("click",()=>Io(e,t,i)),e.querySelectorAll(".sub-btn-col").forEach(k=>{k.addEventListener("click",()=>Yt(e,t,i,k.dataset.subId))}),(I=document.getElementById("sub-btn-main"))==null||I.addEventListener("click",()=>Yt(e,t,i))}function ho(e,t,i,n){const a=e.dataset.cardId,o=e.dataset.role,r=t.selected.findIndex(s=>s.cardId===a);if(r!==-1)t.selected.splice(r,1);else{if(t.selected.length>=3){n.toast("Maximum 3 joueurs","error");return}const s=(t.homeTeam[o]||[]).find(d=>d.cardId===a);s&&t.selected.push({...s,_role:o,_line:o})}ze(i,t,n)}function ui(e,t,i){e.matchId&&y.from("matches").update({last_player_id:i}).eq("id",e.matchId).then(()=>{})}function wo(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,i,i.state.profile.id);const n=!["GK","DEF","MIL","ATT"].some(r=>(t.aiTeam[r]||[]).some(s=>!s.used)),a=t.selected.map(r=>{const s=(t.homeTeam[r._role]||[]).find(l=>l.cardId===r.cardId)||r,d=n&&["GK","DEF"].includes(r._role);return{...s,_line:r._role,...d?{note_a:Math.max(1,Number(s.note_a)||0)}:{}}}),o=ai(a,t.modifiers.home);t.pendingAttack={...o,players:[...a],side:"home"},t.selected.forEach(r=>{const s=(t.homeTeam[r._role]||[]).find(d=>d.cardId===r.cardId);s&&(s.used=!0)}),t.log.push({text:`⚔️ Vous attaquez : ${o.total} (base ${o.base}${o.links?` +${o.links} liens`:""}) — ${t.selected.map(r=>r.name).join(", ")}`,type:"info"}),t.selected=[],t.modifiers.home={},t.phase="ai-defense",ze(e,t,i),setTimeout(()=>Eo(e,t,i),1200)}function _o(e,t,i){t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),ui(t,i,i.state.profile.id);const n=t.stadiumDef||null,a=t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(u=>u.cardId===d.cardId)||d,c=l.stadiumBonus||n&&(n.club_id&&String(l.club_id)===String(n.club_id)||n.country_code&&l.country_code===n.country_code)||!1;return{...l,_line:d._role,stadiumBonus:c}}),o=si(a,t.modifiers.home);t.selected.forEach(d=>{const l=(t.homeTeam[d._role]||[]).find(c=>c.cardId===d.cardId);l&&(l.used=!0)});const r=di(t.pendingAttack.total,o.total,t.modifiers.home),s={type:"duel",title:"Défense",aiPlayers:(t.pendingAttack.players||[]).map(d=>Xe(d)),homePlayers:t.selected.map(d=>{const l=(t.homeTeam[d._role]||[]).find(c=>c.cardId===d.cardId)||d;return Xe(l)}),homeTotal:o.total,aiTotal:t.pendingAttack.total,isGoal:!1,homeScored:!1,text:""};if(r.shielded)s.text="🛡️ Bouclier ! But annulé.",t.log.push(s);else if(r.goal){t.aiScore++,s.isGoal=!0,s.homeScored=!1,s.text=`⚽ BUT IA ! (${t.pendingAttack.total} > ${o.total})`,t.log.push(s),t.selected=[],t.modifiers.home={},t.pendingAttack=null,ze(e,t,i),rt(s.aiPlayers,t.homeScore,t.aiScore,!1,()=>{pt(e,t,i,"home-attack")});return}else s.text=`🧤 Défense réussie ! (${o.total} ≥ ${t.pendingAttack.total})`,t.log.push(s);t.selected=[],t.modifiers.home={},t.pendingAttack=null,pt(e,t,i,"home-attack")}function ko(e){if(e.aiSubsUsed>=e.aiMaxSubs)return;const t=Object.values(e.aiTeam).flat().filter(d=>d.used);if(!t.length)return;const i=(e.aiSubs||[]).filter(d=>!e.aiUsedSubIds.includes(d.cardId));if(!i.length)return;const n=t[Math.floor(Math.random()*t.length)],a=i.find(d=>d.job===n.job)||i[0],o={...a,used:!1,_line:n._line,_col:n._col},r=e.aiTeam[n._line],s=r.findIndex(d=>d.cardId===n.cardId);s!==-1&&(r[s]=o),e.aiUsedSubIds.push(a.cardId),e.aiSubsUsed++,e.log.push({text:`🔄 IA : ${a.firstname} ${a.name} remplace ${n.firstname} ${n.name}`,type:"info"})}function $o(e){var n;if(!((n=e.aiGcCards)!=null&&n.length))return;const t=e.aiGcCards.filter(a=>!e.aiUsedGc.includes(a.id));if(!t.length||Math.random()>.3)return;const i=t[Math.floor(Math.random()*t.length)];switch(e.aiUsedGc.push(i.id),Se[i.gc_type],i.gc_type){case"Boost+2":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+2}break}case"Boost+3":{const a=Object.values(e.aiTeam).flat().filter(o=>!o.used);if(a.length){const o=a[Math.floor(Math.random()*a.length)];o.boost=(o.boost||0)+3}break}case"Remplacement+":e.aiMaxSubs=(e.aiMaxSubs||3)+1;break;case"Bouclier":e.modifiers.ai.shield=!0;break;case"Nul+1":e.modifiers.ai.drawBonus=(e.modifiers.ai.drawBonus||0)+1;break}e.log.push({text:`⚡ IA joue ${i.icon||"⚡"} ${i.name}`,type:"gc"})}function Pt(e,t,i){ui(t,i,null),ko(t),$o(t);const n=[...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]],a=Ri(n,"attack",t.difficulty);if(!a.length){St(e,t,i);return}const o=ai(a,t.modifiers.ai);t.pendingAttack={...o,players:a,side:"ai"},a.forEach(l=>{l.used=!0}),t.log.push({text:`🤖 IA attaque : ${o.total} (${a.map(l=>l.name).join(", ")})`,type:"info"}),t.modifiers.ai={};const r=[...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(l=>!l.used),d=(t.homeSubs||[]).filter(l=>!(t.usedSubIds||[]).includes(l.cardId)).length>0&&t.subsUsed<t.maxSubs;if(r.length===0&&!d){t.aiScore++;const l={type:"duel",isGoal:!0,homeScored:!1,aiPlayers:a.map(c=>Xe(c)),aiTotal:o.total,text:"⚽ BUT IA ! (aucun défenseur disponible)"};t.log.push(l),t.pendingAttack=null,ze(e,t,i),rt(l.aiPlayers,t.homeScore,t.aiScore,!1,()=>{pt(e,t,i,"home-attack")});return}t.phase="defense",ze(e,t,i)}function Eo(e,t,i){var l,c;const n=[...t.aiTeam.GK||[],...t.aiTeam.DEF||[],...t.aiTeam.MIL||[]],a=Ri(n,"defense",t.difficulty);if(!["GK","DEF","MIL","ATT"].flatMap(u=>(t.aiTeam[u]||[]).filter(f=>!f.used)).length){t.homeScore++;const f={type:"duel",isGoal:!0,homeScored:!0,homePlayers:(((l=t.pendingAttack)==null?void 0:l.players)||[]).map(x=>Xe(x)),homeTotal:((c=t.pendingAttack)==null?void 0:c.total)||0,aiTotal:0,text:"⚽ BUT ! L'IA n'a plus de joueurs — but automatique !"};t.log.push(f),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,i),rt(f.homePlayers,t.homeScore,t.aiScore,!0,()=>{pt(e,t,i,"ai-attack")});return}const r=a.length>0?si(a,t.modifiers.ai).total:0;a.forEach(u=>{u.used=!0});const s=di(t.pendingAttack.total,r,t.modifiers.ai),d={type:"duel",title:"Attaque",homePlayers:(t.pendingAttack.players||[]).map(u=>Xe(u)),aiPlayers:a.map(u=>Xe(u)),homeTotal:t.pendingAttack.total,aiTotal:r,isGoal:!1,homeScored:!1,text:""};if(s.shielded)d.text="🛡️ Bouclier IA !",t.log.push(d);else if(s.goal){t.homeScore++,d.isGoal=!0,d.homeScored=!0,d.text=`⚽ BUT ! (${t.pendingAttack.total} > ${r})`,t.log.push(d),t.modifiers.ai={},t.pendingAttack=null,ze(e,t,i),rt(d.homePlayers,t.homeScore,t.aiScore,!0,()=>{pt(e,t,i,"ai-attack")});return}else d.text=`🧤 IA défend (${r} ≥ ${t.pendingAttack.total})`,t.log.push(d);t.modifiers.ai={},t.pendingAttack=null,pt(e,t,i,"ai-attack")}function pt(e,t,i,n){if(t.round++,tn(t)){yt(e,t,i);return}if(n==="home-attack"){if(![...t.homeTeam.MIL||[],...t.homeTeam.ATT||[]].filter(o=>!o.used).length){if(![...t.homeTeam.GK||[],...t.homeTeam.DEF||[],...t.homeTeam.MIL||[]].filter(s=>!s.used).length){St(e,t,i);return}if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(s=>!s.used).length){St(e,t,i);return}setTimeout(()=>Pt(e,t,i),100);return}t.phase="attack",ze(e,t,i)}else{if(![...t.aiTeam.MIL||[],...t.aiTeam.ATT||[]].filter(o=>!o.used).length){St(e,t,i);return}t.phase="ai-attack",ze(e,t,i),setTimeout(()=>Pt(e,t,i),800)}}function tn(e){const t=["MIL","ATT","GK","DEF"].some(n=>(e.homeTeam[n]||[]).some(a=>!a.used)),i=["MIL","ATT","GK","DEF"].some(n=>(e.aiTeam[n]||[]).some(a=>!a.used));return!t&&!i}function St(e,t,i){tn(t)?yt(e,t,i):(t.phase="attack",ze(e,t,i))}function Yt(e,t,i,n=null,a=null){var x,m;if(t.phase!=="attack"){xt("⏰ Remplacement uniquement avant une attaque","rgba(180,100,0,0.9)");return}if(t.usedSubIds||(t.usedSubIds=[]),t.subsUsed>=t.maxSubs){xt(`Maximum ${t.maxSubs} remplacements atteint`,"rgba(180,30,30,0.9)");return}const o=Object.entries(t.homeTeam).flatMap(([p,g])=>(g||[]).filter(v=>v.used).map(v=>({...v,_line:v._line||p}))),r=t.homeSubs.filter(p=>!t.usedSubIds.includes(p.cardId));if(!o.length){xt("Aucun joueur utilisé à remplacer");return}if(!r.length){xt("Aucun remplaçant disponible");return}let s=Math.max(0,o.findIndex(p=>p.cardId===a));const d=((x=o[s])==null?void 0:x._line)||((m=o[s])==null?void 0:m.job);let l=n?Math.max(0,r.findIndex(p=>p.cardId===n)):Math.max(0,r.findIndex(p=>p.job===d)),c=!1;const u=document.createElement("div");u.id="sub-overlay",u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function f(){var b,N,D,Z,O,ne;const p=o[s],g=r[l],v=Math.min(130,Math.round((window.innerWidth-90)/2)),h=Math.round(v*1.35),_=oe=>`background:rgba(255,255,255,0.12);border:none;color:${oe?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${oe?"default":"pointer"};flex-shrink:0`;u.innerHTML=`
    <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
      <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${t.subsUsed}/${t.maxSubs})</div>
      <button id="sub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
    </div>
    <div style="flex:1;display:flex;gap:0;overflow:hidden">

      <!-- JOUEUR QUI ENTRE (gauche) -->
      <div id="in-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
        <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
        <button id="in-up" style="${_(l===0)}" ${l===0?"disabled":""}>▲</button>
        <div>${g?We({...g,used:!1,boost:0},v,h):"<div>—</div>"}</div>
        <button id="in-down" style="${_(l>=r.length-1)}" ${l>=r.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${l+1}/${r.length}</div>
      </div>

      <!-- JOUEUR QUI SORT (droite) -->
      <div id="out-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
        <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
        <button id="out-up" style="${_(s===0)}" ${s===0?"disabled":""}>▲</button>
        <div>${p?We({...p,used:!1,boost:0},v,h):"<div>—</div>"}</div>
        <button id="out-down" style="${_(s>=o.length-1)}" ${s>=o.length-1?"disabled":""}>▼</button>
        <div style="font-size:10px;color:rgba(255,255,255,0.35)">${s+1}/${o.length}</div>
      </div>
    </div>
    <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="sub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
    </div>`,(b=u.querySelector("#sub-close"))==null||b.addEventListener("click",()=>u.remove()),(N=u.querySelector("#out-up"))==null||N.addEventListener("click",()=>{s>0&&(s--,f())}),(D=u.querySelector("#out-down"))==null||D.addEventListener("click",()=>{s<o.length-1&&(s++,f())}),(Z=u.querySelector("#in-up"))==null||Z.addEventListener("click",()=>{l>0&&(l--,f())}),(O=u.querySelector("#in-down"))==null||O.addEventListener("click",()=>{l<r.length-1&&(l++,f())});const T=(oe,ce,P,I)=>{const k=u.querySelector("#"+oe);if(!k)return;let B=0;k.addEventListener("touchstart",se=>{B=se.touches[0].clientY},{passive:!0}),k.addEventListener("touchend",se=>{const ue=se.changedTouches[0].clientY-B;if(Math.abs(ue)<30)return;const le=ce();ue<0&&le<I-1?(P(le+1),f()):ue>0&&le>0&&(P(le-1),f())},{passive:!0})};T("in-panel",()=>l,oe=>l=oe,r.length),T("out-panel",()=>s,oe=>s=oe,o.length),(ne=u.querySelector("#sub-confirm"))==null||ne.addEventListener("click",oe=>{if(oe.preventDefault(),oe.stopPropagation(),c)return;c=!0;const ce=o[s],P=r[l];if(!ce||!P)return;let I=null,k=-1;for(const[se,ue]of Object.entries(t.homeTeam)){const le=(ue||[]).findIndex(ae=>ae.cardId===ce.cardId);if(le!==-1){I=se,k=le;break}}if(k===-1||!I){xt("Erreur : joueur introuvable","rgba(180,0,0,0.9)"),u.remove();return}const B={...P,_line:I,_col:ce._col||0,used:!1,boost:0};t.homeTeam[I].splice(k,1,B),t.usedSubIds||(t.usedSubIds=[]),t.usedSubIds.push(P.cardId),t.subsUsed++,t.selected=[],t.log.push({type:"sub",subSide:"home",clubName:t.clubName,outPlayer:{name:ce.name,firstname:ce.firstname,note:Be(ce,I),portrait:wt(ce),job:ce.job,country_code:ce.country_code,rarity:ce.rarity,clubName:ce.clubName,clubLogo:ce.clubLogo},inPlayer:{name:P.name,firstname:P.firstname,note:Be(P,I),portrait:wt(P),job:P.job,country_code:P.country_code,rarity:P.rarity,clubName:P.clubName,clubLogo:P.clubLogo},text:`🔄 ${P.firstname} ${P.name} remplace ${ce.firstname} ${ce.name}`}),u.remove(),go(ce,P,()=>ze(e,t,i))})}document.body.appendChild(u),f()}function Lo(e,t,i,n,a){var m,p;const o=(n.gcDefs||[]).find(g=>g.name===t),r=Se[t]||{icon:"⚡",desc:"Carte spéciale."},s={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[o==null?void 0:o.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",d={purple:"#b06ce0",light_blue:"#00d4ef"}[o==null?void 0:o.color]||"#b06ce0",l=(o==null?void 0:o.name)||t,c=(o==null?void 0:o.effect)||r.desc,u=o!=null&&o.image_url?`/icons/${o.image_url}`:null,f=r.icon||"⚡",x=document.createElement("div");x.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",x.innerHTML=`
    <!-- Carte design Collection -->
    <div style="width:190px;border-radius:16px;border:3px solid ${d};background:${s};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${d}66">
      <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
        <div style="font-size:${l.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${l}</div>
        <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
      </div>
      <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
        ${u?`<img src="${u}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${f}</span>`}
      </div>
      <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
        <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${c}</div>
      </div>
    </div>
    <!-- Boutons -->
    <div style="display:flex;gap:12px;width:190px">
      <button id="gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
      <button id="gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
    </div>`,document.body.appendChild(x),(m=x.querySelector("#gc-back"))==null||m.addEventListener("click",()=>x.remove()),(p=x.querySelector("#gc-use"))==null||p.addEventListener("click",()=>{x.remove(),To(e,t,i,n,a)})}function Tt(e,t,i,n,a,o){const r=document.createElement("div");r.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let s=[];function d(){var l,c;r.innerHTML=`
    <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
      <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${i}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5)">${s.length}/${t}</div>
      <button id="gc-picker-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
      ${e.map(u=>{const f=u._line||u.job||"MIL",x={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[f]||"#555",m=Be(u,f)+(u.boost||0),p=s.find(g=>g.cardId===u.cardId);return`<div class="gc-pick-item" data-cid="${u.cardId}"
          style="width:80px;border-radius:8px;border:2.5px solid ${p?"#FFD700":"rgba(255,255,255,0.25)"};background:${x};overflow:hidden;cursor:pointer;flex-shrink:0;${u.used?"opacity:0.3;pointer-events:none":""}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${u.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${m}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${f}</div>
        </div>`}).join("")}
    </div>
    <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
      <button id="gc-picker-confirm" ${s.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
        ✅ Confirmer (${s.length}/${t})
      </button>
    </div>`,(l=r.querySelector("#gc-picker-close"))==null||l.addEventListener("click",()=>r.remove()),r.querySelectorAll(".gc-pick-item").forEach(u=>{u.addEventListener("click",()=>{const f=u.dataset.cid,x=e.find(p=>p.cardId===f);if(!x)return;const m=s.findIndex(p=>p.cardId===f);m>-1?s.splice(m,1):s.length<t&&s.push(x),d()})}),(c=r.querySelector("#gc-picker-confirm"))==null||c.addEventListener("click",()=>{r.remove(),o(s)})}d(),document.body.appendChild(r)}const zo={BOOST_STAT:({value:e=1,count:t=1,roles:i=[]},n,a,o)=>{const r=Object.entries(n.homeTeam).filter(([s])=>!i.length||i.includes(s)).flatMap(([s,d])=>d.filter(l=>!l.used).map(l=>({...l,_line:s})));return r.length?(Tt(r,t,`Choisir ${t} joueur(s) à booster (+${e})`,a,n,s=>{s.forEach(d=>{const l=(n.homeTeam[d._line]||[]).find(c=>c.cardId===d.cardId);l&&(l.boost=(l.boost||0)+e,n.log.push({text:`⚡ +${e} sur ${l.name}`,type:"info"}))}),ze(a,n,o)}),!0):(n.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),ze(a,n,o),!0)},DEBUFF_STAT:({value:e=1,count:t=1,roles:i=[],target:n="ai"},a,o,r)=>{const s=n==="home"?a.homeTeam:a.aiTeam,d=n==="ai"?"adverse":"allié",l=Object.entries(s).filter(([c])=>!i.length||i.includes(c)).flatMap(([c,u])=>u.filter(f=>!f.used).map(f=>({...f,_line:c})));return l.length?(Tt(l,t,`Choisir ${t} joueur(s) ${d}(s) à débuffer (-${e})`,o,a,c=>{c.forEach(u=>{const x=((n==="home"?a.homeTeam:a.aiTeam)[u._line]||[]).find(m=>m.cardId===u.cardId);x&&(x.boost=(x.boost||0)-e,a.log.push({text:`🎯 -${e} sur ${x.name}${n==="ai"?" (IA)":""}`,type:"info"}))}),ze(o,a,r)}),!0):(a.log.push({text:`🎯 Aucun joueur ${d} disponible`,type:"info"}),ze(o,a,r),!0)},GRAY_PLAYER:({count:e=1,roles:t=[],target:i="ai"},n,a,o)=>{const r=i==="home"?n.homeTeam:n.aiTeam,s=i==="ai"?"adverse":"allié",d=Object.entries(r).filter(([l])=>!t.length||t.includes(l)).flatMap(([l,c])=>c.filter(u=>!u.used).map(u=>({...u,_line:l})));return d.length?(Tt(d,e,`Choisir ${e} joueur(s) ${s}(s) à exclure`,a,n,l=>{l.forEach(c=>{const f=((i==="home"?n.homeTeam:n.aiTeam)[c._line]||[]).find(x=>x.cardId===c.cardId);f&&(f.used=!0,n.log.push({text:`❌ ${f.name}${i==="ai"?" (IA)":""} exclu !`,type:"info"}))}),ze(a,n,o)}),!0):(n.log.push({text:`❌ Aucun joueur ${s} à exclure`,type:"info"}),ze(a,n,o),!0)},REVIVE_PLAYER:({count:e=1,roles:t=[]},i,n,a)=>{const o=Object.entries(i.homeTeam).filter(([r])=>!t.length||t.includes(r)).flatMap(([r,s])=>s.filter(d=>d.used).map(d=>({...d,_line:r})));return o.length?(Tt(o,e,`Choisir ${e} joueur(s) à ressusciter`,n,i,r=>{r.forEach(s=>{const d=(i.homeTeam[s._line]||[]).find(l=>l.cardId===s.cardId);d&&(d.used=!1,i.log.push({text:`💫 ${d.name} ressuscité !`,type:"info"}))}),ze(n,i,a)}),!0):(i.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),ze(n,i,a),!0)},REMOVE_GOAL:({},e)=>(e.aiScore>0?(e.aiScore--,e.log.push({text:"🚫 Dernier but IA annulé !",type:"info"})):e.log.push({text:"🚫 Aucun but à annuler",type:"info"}),!1),ADD_GOAL_DRAW:({},e)=>(e.homeScore===e.aiScore?(e.homeScore++,e.log.push({text:"🎯 But bonus (match nul) !",type:"info"})):e.log.push({text:"🎯 But bonus : non applicable (pas de match nul)",type:"info"}),!1),ADD_SUB:({value:e=1},t)=>(t.maxSubs=(t.maxSubs||3)+e,t.log.push({text:`🔄 +${e} remplacement(s) débloqué(s)`,type:"info"}),!1),CUSTOM:()=>!1};function To(e,t,i,n,a){n.usedGc.push(e);const o=n.gcDefs||[],r=o.find(d=>d.name===t)||o.find(d=>{var l;return((l=d.name)==null?void 0:l.toLowerCase().trim())===(t==null?void 0:t.toLowerCase().trim())});let s=!1;if(r!=null&&r.effect_type&&r.effect_type!=="CUSTOM"){const d=zo[r.effect_type];d?d(r.effect_params||{},n,i,a)||(s=!0):(a.toast(`Effet "${r.effect_type}" non implémenté`,"error"),s=!0)}else{switch(t){case"Double attaque":n.modifiers.home.doubleAttack=!0,n.log.push({text:"⚡ Double attaque activée !",type:"info"});break;case"Bouclier":n.modifiers.home.shield=!0,n.log.push({text:"🛡️ Bouclier activé !",type:"info"});break;case"Ressusciter":{const d=Object.entries(n.homeTeam).flatMap(([l,c])=>(c||[]).filter(u=>u.used).map(u=>({...u,_line:l})));d.length?(d[0].used=!1,n.log.push({text:`💫 ${d[0].name} ressuscité !`,type:"info"})):n.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"});break}case"Vol de note":n.modifiers.ai.stolenNote=(n.modifiers.ai.stolenNote||0)+1,n.log.push({text:"🎯 -1 à la prochaine attaque IA",type:"info"});break;case"Gel":{const d=[...n.aiTeam.ATT||[],...n.aiTeam.MIL||[]].filter(l=>!l.used);if(d.length){const l=d.sort((c,u)=>Be(u,"ATT")-Be(c,"ATT"))[0];l.used=!0,n.log.push({text:`❄️ ${l.name} (IA) gelé !`,type:"info"})}break}case"Remplacement+":n.maxSubs++,n.log.push({text:"🔄 +1 remplacement débloqué",type:"info"});break}s=!0}y.from("cards").delete().eq("id",e).then(()=>{}),s&&ze(i,n,a)}function Io(e,t,i){const n=Object.values(t.homeTeam).flat().filter(a=>!a.used);if(!n.length){i.toast("Aucun joueur actif à booster","error");return}i.openModal("⚡ Utiliser le Boost",`<div style="margin-bottom:12px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border-radius:10px;padding:12px;text-align:center;color:#000">
      <div style="font-size:24px;font-weight:900">+${t.boostCard.value}</div>
      <div style="font-size:12px">Appliqué à un seul joueur actif</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px">
      ${n.map(a=>`
        <div class="player-boost-opt" data-card-id="${a.cardId}"
          style="display:flex;align-items:center;gap:10px;padding:8px;border:1.5px solid var(--gray-200);border-radius:8px;cursor:pointer">
          <div style="width:32px;height:32px;background:${gn[a.job]||"#888"};border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:13px">${Be(a,a._line||a.job)}</div>
          <div style="flex:1"><b>${a.firstname} ${a.name}</b><div style="font-size:11px;color:#888">${a._line||a.job}</div></div>
          <div style="color:#87CEEB;font-weight:700">+${t.boostCard.value}</div>
        </div>`).join("")}
    </div>`,`<button class="btn btn-ghost" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Annuler</button>`),document.querySelectorAll(".player-boost-opt").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.cardId;for(const r of["GK","DEF","MIL","ATT"]){const s=(t.homeTeam[r]||[]).find(d=>d.cardId===o);if(s){s.boost=(s.boost||0)+t.boostCard.value,t.log.push({text:`⚡ Boost +${t.boostCard.value} appliqué à ${s.name}`,type:"info"});break}}t.boostUsed=!0,i.closeModal(),ze(e,t,i)})})}async function yt(e,t,i){var c,u;t._timerInt&&(clearInterval(t._timerInt),t._timerInt=null),t.phase="finished";const{state:n}=i,a=t.homeScore>t.aiScore,o=t.homeScore===t.aiScore,r=a?"victoire":o?"nul":"defaite",s=hn(t.mode,r);t.matchId&&await y.from("matches").update({status:"finished",home_score:t.homeScore,away_score:t.aiScore,winner_id:a?n.profile.id:null,home_credits_reward:s,played_at:new Date().toISOString()}).eq("id",t.matchId);const d={credits:(n.profile.credits||0)+s,matches_played:(n.profile.matches_played||0)+1};a?d.wins=(n.profile.wins||0)+1:o?d.draws=(n.profile.draws||0)+1:d.losses=(n.profile.losses||0)+1,await y.from("users").update(d).eq("id",n.profile.id),await i.refreshProfile();const l=document.createElement("div");l.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:2000",l.innerHTML=`
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
    </div>`,document.body.appendChild(l),(c=document.getElementById("res-home"))==null||c.addEventListener("click",()=>{l.remove(),Je(e),i.navigate("home")}),(u=document.getElementById("res-replay"))==null||u.addEventListener("click",()=>{l.remove(),Je(e),i.navigate("match",{matchMode:t.mode})})}function So(e,t){t.openModal("Équipe adverse (IA)",`<div style="background:#0a3d1e;padding:12px;border-radius:8px">
      ${jt(e.aiTeam,e.formation,null,[],Math.min(window.innerWidth-40,860),Math.round(Math.min(window.innerWidth-40,860)*1.1))}
    </div>`,`<button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.add('hidden')">Fermer</button>`)}async function Et(e,t,i,n,a={}){return nn(e,t,i,n,a.myGC||[],a.gcDefs||[],a.isRanked||!1,a.rankedData||null,a.stadiumDef||null,a.onMatchEnd||null,a.mlLeagueId||null,a.mlMatchId||null)}async function Ao(e,t,i){const{data:n}=await y.from("matches").select("home_id,away_id,mode,is_ranked").eq("id",i).single();if(!n){t.toast("Match introuvable","error"),t.navigate("home");return}const a=n.home_id===t.state.user.id;return nn(e,t,i,a,[],[],n.is_ranked||!1,null,null,null,null,null)}async function nn(e,t,i,n,a=[],o=[],r=!1,s=null,d=null,l=null,c=null,u=null){const{state:f,navigate:x,toast:m}=t,p=n?"p1":"p2",g=n?"p2":"p1",v=(a||[]).map(w=>w.id),h=(a||[]).map(w=>({id:w.id,gc_type:w.gc_type,_gcDef:w._gcDef||null}));e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Préparation...</div>';const{data:_}=await y.from("matches").select("*").eq("id",i).single();if(!_){m("Match introuvable","error"),x("home");return}async function T(){var fe,xe;console.log("[PvP] buildGameState match:",{id:_.id,home_deck_id:_.home_deck_id,away_deck_id:_.away_deck_id,mode:_.mode,is_ranked:_.is_ranked});const[{data:w,error:$},{data:z,error:A},{data:L},{data:j}]=await Promise.all([y.rpc("get_deck_for_match",{p_deck_id:_.home_deck_id}),y.rpc("get_deck_for_match",{p_deck_id:_.away_deck_id}),y.from("users").select("id,pseudo,club_name").eq("id",_.home_id).single(),y.from("users").select("id,pseudo,club_name").eq("id",_.away_id).single()]);console.log("[PvP] get_deck_for_match p1:",$==null?void 0:$.message,"p2:",A==null?void 0:A.message,"p1D:",(fe=w==null?void 0:w.starters)==null?void 0:fe.length,"p2D:",(xe=z==null?void 0:z.starters)==null?void 0:xe.length);const C=Q=>{const ye=Number(Q.evolution_bonus)||0;return{cardId:Q.card_id,position:Q.position,id:Q.id,firstname:Q.firstname,name:Q.surname_real,country_code:Q.country_code,club_id:Q.club_id,job:Q.job,job2:Q.job2,note_g:(Number(Q.note_g)||0)+(Q.job==="GK"||Q.job2==="GK"&&Number(Q.note_g)>0?ye:0),note_d:(Number(Q.note_d)||0)+(Q.job==="DEF"||Q.job2==="DEF"&&Number(Q.note_d)>0?ye:0),note_m:(Number(Q.note_m)||0)+(Q.job==="MIL"||Q.job2==="MIL"&&Number(Q.note_m)>0?ye:0),note_a:(Number(Q.note_a)||0)+(Q.job==="ATT"||Q.job2==="ATT"&&Number(Q.note_a)>0?ye:0),evolution_bonus:ye,rarity:Q.rarity,skin:Q.skin,hair:Q.hair,hair_length:Q.hair_length,face:Q.face||null,clubName:Q.club_encoded_name||null,clubLogo:Q.club_logo_url||null,boost:0,used:!1,_line:null,_col:null}},q=((w==null?void 0:w.starters)||[]).map(Q=>C(Q)),V=((z==null?void 0:z.starters)||[]).map(Q=>C(Q)),Y=(w==null?void 0:w.formation)||"4-4-2",W=(z==null?void 0:z.formation)||"4-4-2";let ie=Jt(q,Y),J=Jt(V,W);const de=((w==null?void 0:w.subs)||[]).map(Q=>C(Q)),re=((z==null?void 0:z.subs)||[]).map(Q=>C(Q)),te=(w==null?void 0:w.stadium_def)||(n?d:null),pe=(z==null?void 0:z.stadium_def)||(n?null:d);return te&&(ie=At(ie,te),Mt(de,te)),pe&&(J=At(J,pe),Mt(re,pe)),{p1Team:ie,p2Team:J,p1Subs:de,p2Subs:re,p1Formation:Y,p2Formation:W,p1Name:(L==null?void 0:L.club_name)||(L==null?void 0:L.pseudo)||"Joueur 1",p2Name:(j==null?void 0:j.club_name)||(j==null?void 0:j.pseudo)||"Joueur 2",p1Score:0,p2Score:0,p1Subs_used:0,p2Subs_used:0,maxSubs:3,phase:"reveal",attacker:null,round:0,selected_p1:[],selected_p2:[],pendingAttack:null,log:[],modifiers:{p1:{},p2:{}},gc_p1:n?v:[],gc_p2:n?[]:v,gcCardsFull_p1:n?h:[],gcCardsFull_p2:n?[]:h,usedGc_p1:[],usedGc_p2:[],boostValue:null,boostOwner:null,boostUsed:!1,gcDefs:o||[],lastActionAt:new Date().toISOString()}}let b=_.game_state&&Object.keys(_.game_state).length?_.game_state:null;if(console.log("[PvP] init - amIHome:",n,"gameState exists:",!!b,"match.status:",_.status,"home_id:",_.home_id,"away_id:",_.away_id,"myId:",f.profile.id),!b)if(n){b=await T(),console.log("[PvP] home - gameState built, p1Team keys:",Object.keys((b==null?void 0:b.p1Team)||{}));const{data:w}=await y.from("matches").select("game_state").eq("id",i).single();!(w!=null&&w.game_state)||!Object.keys(w.game_state).length?await y.from("matches").update({game_state:b,turn_user_id:_.home_id}).eq("id",i):b=w.game_state}else{e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Synchronisation...</div>',console.log("[PvP] away - waiting for home to write game_state...");for(let w=0;w<30&&!b;w++){await new Promise(z=>setTimeout(z,400));const{data:$}=await y.from("matches").select("game_state").eq("id",i).single();$!=null&&$.game_state&&Object.keys($.game_state).length&&(b=$.game_state),w%5===0&&console.log("[PvP] away - poll",w,"game_state:",!!($!=null&&$.game_state))}if(!b){m("Erreur de synchronisation","error"),x("home");return}b.gc_p2=v,b.gcCardsFull_p2=h,await y.from("matches").update({game_state:b}).eq("id",i)}let N=!1,D=null,Z=!1;const O=new Set,ne=new Set;async function oe(w){var W,ie;try{y.removeChannel(ce)}catch{}const $=b[p+"Score"]||0,z=b[g+"Score"]||0;let A,L;w.winner_id?(A=w.winner_id===f.profile.id,L=!1):w.forfeit?(A=$>z,L=!1):(L=$===z,A=$>z);let j="";if(r&&n)try{const{data:J}=await y.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",_.home_id).single(),{data:de}=await y.from("users").select("id,mmr,mmr_deviation,mmr_volatility,placement_matches").eq("id",_.away_id).single();if(J&&de){const re=A?1:L?.5:0,te=1-re,pe=J.placement_matches<10,fe=de.placement_matches<10,xe=computeGlicko2(J.mmr,J.mmr_deviation,J.mmr_volatility,de.mmr,de.mmr_deviation,re===1?1:re===0?0:.5,pe),Q=computeGlicko2(de.mmr,de.mmr_deviation,de.mmr_volatility,J.mmr,J.mmr_deviation,te===1?1:te===0?0:.5,fe);await y.rpc("update_mmr_after_ranked",{p_match_id:i,p_winner_id:L?null:A?_.home_id:_.away_id,p_home_id:_.home_id,p_away_id:_.away_id,p_home_delta:xe.delta,p_away_delta:Q.delta,p_home_new_rd:xe.newRd,p_away_new_rd:Q.newRd,p_home_new_vol:xe.newSigma,p_away_new_vol:Q.newSigma});const ye=xe.delta,Te=xe.newMmr,Ae=getTier(Te),Ne=ye>=0?"+":"",Pe=ye>=0?"#4caf50":"#ff6b6b",Ge=getTier(J.mmr);j=`
            <div style="background:rgba(255,255,255,0.08);border-radius:14px;padding:14px 20px;text-align:center;min-width:220px">
              <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">⚔️ Résultat Ranked</div>
              ${Ae.id!==Ge.id?`<div style="font-size:20px;font-weight:900;color:${Ae.color}">
                    ${Te>J.mmr?"📈":"📉"} ${Ge.emoji} ${Ge.label} → ${Ae.emoji} ${Ae.label}
                  </div>
                  <div style="font-size:13px;color:rgba(255,255,255,0.5);margin-top:4px">${Te>J.mmr?"Promotion !":"Rétrogradation"}</div>`:`<div style="font-size:36px">${ye>=0?"📈":"📉"}</div>
                   <div style="font-size:18px;font-weight:900;color:${Ae.color}">${Ae.emoji} ${Ae.label}</div>`}
              ${pe?`<div style="font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px">Match de placement (${J.placement_matches+1}/10)</div>`:""}
            </div>`}}catch(J){console.error("[Ranked] MMR update error:",J)}(W=document.getElementById("pvp-end-overlay"))==null||W.remove();const C=document.createElement("div");C.id="pvp-end-overlay",C.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1500;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:#fff;padding:24px;text-align:center;overflow-y:auto";const q=L?"🤝":A?"🏆":"😞",V=L?"MATCH NUL":A?"VICTOIRE !":"DÉFAITE",Y=L?"#fff":A?"#FFD700":"#ff6b6b";C.innerHTML=`
      <div style="font-size:64px">${q}</div>
      <div style="font-size:26px;font-weight:900;color:${Y}">${V}</div>
      ${r?'<div style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase">⚔️ Match Ranked</div>':""}
      <div style="font-size:18px">${b[p+"Name"]} ${$} – ${z} ${b[g+"Name"]}</div>
      ${w.forfeit?`<div style="font-size:13px;color:rgba(255,255,255,0.5)">${A?"L'adversaire a quitté":"Perdu par forfait"}</div>`:""}
      ${j}
      <button id="pvp-end-home" style="margin-top:8px;padding:14px 32px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">${r?"⚔️ Retour au Ranked":"Retour à l'accueil"}</button>`,document.body.appendChild(C),(ie=C.querySelector("#pvp-end-home"))==null||ie.addEventListener("click",()=>{C.remove(),Je(e),x(r?"ranked":"home")})}const ce=y.channel("pvp-match-"+i).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`id=eq.${i}`},w=>{const $=w.new;try{if($.status==="finished"||$.forfeit){if(N)return;N=!0,D&&(clearInterval(D),D=null),$.game_state&&(b=$.game_state),oe($);return}if($.game_state){const z=b;b=$.game_state;const A=b._lastGC;if(A&&A.seq&&!ne.has(A.seq)&&(ne.add(A.seq),A.by!==p)){K(A.type,A.by,()=>ae());return}const L=z[p+"Score"]||0,j=z[g+"Score"]||0,C=b[p+"Score"]||0,q=b[g+"Score"]||0,V=C>L,Y=q>j;if((V||Y)&&!O.has(b.round)){O.add(b.round);const W=[...b.log||[]].reverse().find(J=>J.isGoal),ie=((W==null?void 0:W.homePlayers)||[]).map(J=>({name:J.name,note:J.note,portrait:J.portrait,job:J.job}));rt(ie,C,q,V,()=>ae());return}ae()}}catch(z){console.error("[PvP] crash:",z)}}).subscribe();async function P(w){Object.assign(b,w),b.lastActionAt=new Date().toISOString();const{error:$}=await y.from("matches").update({game_state:b}).eq("id",i);$&&m("Erreur de synchronisation","error");try{ae()}catch(z){console.error("[PvP] renderPvpScreen crash:",z)}}async function I(){if(N)return;N=!0,D&&(clearInterval(D),D=null);const w=n?_.away_id:_.home_id,$=n?"p2":"p1",z=n?"p1":"p2",A={...b,[$+"Score"]:3,[z+"Score"]:0,phase:"finished"};try{await y.from("matches").update({status:"finished",forfeit:!0,winner_id:w,home_score:A.p1Score||0,away_score:A.p2Score||0,game_state:A}).eq("id",i)}catch{}try{y.removeChannel(ce)}catch{}setTimeout(()=>{Je(e),x("home")},800)}const k={BOOST_STAT:({value:w=1,count:$=1,roles:z=[]},A,L)=>{const j=A[p+"Team"],C=Object.entries(j).filter(([q])=>!z.length||z.includes(q)).flatMap(([q,V])=>V.filter(Y=>!Y.used).map(Y=>({...Y,_line:q})));if(!C.length){A.log.push({text:"⚡ Aucun joueur disponible",type:"info"}),L(A);return}B(C,$,`Choisir ${$} joueur(s) à booster (+${w})`,q=>{q.forEach(V=>{const Y=(j[V._line]||[]).find(W=>W.cardId===V.cardId);Y&&(Y.boost=(Y.boost||0)+w,A.log.push({text:`⚡ +${w} sur ${Y.name}`,type:"info"}))}),A[p+"Team"]=j,L(A)})},DEBUFF_STAT:({value:w=1,count:$=1,roles:z=[],target:A="ai"},L,j)=>{const C=A==="home"?p:g,q=L[C+"Team"],V=A==="home"?"allié":"adverse",Y=Object.entries(q).filter(([W])=>!z.length||z.includes(W)).flatMap(([W,ie])=>ie.map(J=>({...J,_line:W})));if(!Y.length){L.log.push({text:`🎯 Aucun joueur ${V}`,type:"info"}),j(L);return}B(Y,$,`Choisir ${$} joueur(s) ${V}(s) (-${w})`,W=>{W.forEach(ie=>{const J=(q[ie._line]||[]).find(de=>de.cardId===ie.cardId);J&&(J.boost=(J.boost||0)-w,L.log.push({text:`🎯 -${w} sur ${J.name}`,type:"info"}))}),L[C+"Team"]=q,j(L)})},GRAY_PLAYER:({count:w=1,roles:$=[],target:z="ai"},A,L)=>{const j=z==="home"?p:g,C=A[j+"Team"],q=z==="home"?"allié":"adverse",V=Object.entries(C).filter(([Y])=>!$.length||$.includes(Y)).flatMap(([Y,W])=>W.filter(ie=>!ie.used).map(ie=>({...ie,_line:Y})));if(!V.length){A.log.push({text:`❌ Aucun joueur ${q}`,type:"info"}),L(A);return}B(V,w,`Choisir ${w} joueur(s) ${q}(s) à exclure`,Y=>{const W="usedCardIds_"+j,ie=new Set(A[W]||[]);Y.forEach(J=>{const de=(C[J._line]||[]).find(re=>re.cardId===J.cardId);de&&(de.used=!0,ie.add(J.cardId),A.log.push({text:`❌ ${de.name} exclu !`,type:"info"}))}),A[W]=[...ie],A[j+"Team"]=C,L(A)})},REVIVE_PLAYER:({count:w=1,roles:$=[]},z,A)=>{const L=z[p+"Team"],j=Object.entries(L).filter(([C])=>!$.length||$.includes(C)).flatMap(([C,q])=>q.filter(V=>V.used).map(V=>({...V,_line:C})));if(!j.length){z.log.push({text:"💫 Aucun joueur à ressusciter",type:"info"}),A(z);return}B(j,w,`Choisir ${w} joueur(s) à ressusciter`,C=>{C.forEach(q=>{const V=(L[q._line]||[]).find(Y=>Y.cardId===q.cardId);V&&(V.used=!1,z.log.push({text:`💫 ${V.name} ressuscité !`,type:"info"}))}),z[p+"Team"]=L,A(z)})},REMOVE_GOAL:({},w,$)=>{const z=g+"Score";w[z]>0?(w[z]--,w.log.push({text:"🚫 Dernier but annulé !",type:"info"})):w.log.push({text:"🚫 Aucun but à annuler",type:"info"}),$(w)},ADD_GOAL_DRAW:({},w,$)=>{w[p+"Score"]===w[g+"Score"]?(w[p+"Score"]++,w.log.push({text:"🎯 But bonus !",type:"info"})):w.log.push({text:"🎯 Non applicable (pas de nul)",type:"info"}),$(w)},ADD_SUB:({value:w=1},$,z)=>{$.maxSubs=($.maxSubs||3)+w,$.log.push({text:`🔄 +${w} remplacement(s)`,type:"info"}),z($)},CUSTOM:({},w,$)=>$(w)};function B(w,$,z,A){const L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden";let j=[];function C(){var V,Y;const q=w.map(W=>{const ie={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[W._line]||"#555",J=Be(W,W._line)+(W.boost||0),re=j.find(pe=>pe.cardId===W.cardId)?"#FFD700":"rgba(255,255,255,0.25)",te=W.used?"opacity:0.3;pointer-events:none":"";return`<div class="pp-item" data-cid="${W.cardId}" style="width:80px;border-radius:8px;border:2.5px solid ${re};background:${ie};overflow:hidden;cursor:pointer;${te}">
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${W.name||"?"}</div>
          <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${J}</div>
          <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:8px;font-weight:700;color:#333">${W._line}</div>
        </div>`}).join("");L.innerHTML=`
        <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
          <div style="flex:1;font-size:14px;font-weight:700;color:#fff">${z}</div>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${j.length}/${$}</span>
          <button id="pp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
        </div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
          ${q}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.4);flex-shrink:0">
          <button id="pp-confirm" ${j.length===0?'disabled style="opacity:0.4"':""} style="width:100%;padding:13px;border-radius:10px;border:none;background:#7a28b8;color:#fff;font-size:15px;font-weight:900;cursor:pointer">
            ✅ Confirmer (${j.length}/${$})
          </button>
        </div>`,(V=L.querySelector("#pp-close"))==null||V.addEventListener("click",()=>L.remove()),L.querySelectorAll(".pp-item").forEach(W=>{W.addEventListener("click",()=>{const ie=W.dataset.cid,J=w.find(re=>re.cardId===ie),de=j.findIndex(re=>re.cardId===ie);J&&(de>-1?j.splice(de,1):j.length<$&&j.push(J),C())})}),(Y=L.querySelector("#pp-confirm"))==null||Y.addEventListener("click",()=>{L.remove(),A(j)})}C(),document.body.appendChild(L)}async function se(w,$){const A=(b["gcCardsFull_"+p]||[]).find(q=>q.id===w),L=(A==null?void 0:A._gcDef)||(b.gcDefs||[]).find(q=>{var V;return q.name===$||((V=q.name)==null?void 0:V.toLowerCase().trim())===($==null?void 0:$.toLowerCase().trim())}),j=[...b["usedGc_"+p]||[],w],C={type:$,by:p,seq:(b._gcAnimSeq||0)+1};ne.add(C.seq),K($,p,async()=>{if(L!=null&&L.effect_type&&L.effect_type!=="CUSTOM"){const V=k[L.effect_type];if(V){const Y={...b};V(L.effect_params||{},Y,async W=>{W["usedGc_"+p]=j,W._lastGC=C,W._gcAnimSeq=C.seq,await P(W)});return}}const q={...b};switch($){case"Remplacement+":q.maxSubs=(q.maxSubs||3)+1,q.log.push({text:"🔄 +1 remplacement",type:"info"});break;case"VAR":{const V=g+"Score";q[V]>0&&(q[V]--,q.log.push({text:"🚫 But annulé",type:"info"}));break}}q["usedGc_"+p]=j,q._lastGC=C,q._gcAnimSeq=C.seq,await P(q)})}function ue(w,$){const z="usedCardIds_"+w,A=new Set(b[z]||[]);$.forEach(L=>A.add(L)),b[z]=[...A]}function le(){for(const w of["p1","p2"]){const $=new Set(b["usedCardIds_"+w]||[]),z=b[w+"Team"];if(z)for(const A of["GK","DEF","MIL","ATT"])(z[A]||[]).forEach(L=>{L.used=$.has(L.cardId)})}}function ae(){var Ue,tt,mi,xi,bi,yi;if(b.phase==="reveal")return Le();if(b.phase==="midfield")return X();if(b.phase==="finished")return Fe();const w=b[p+"Team"],$=b[g+"Team"];le();const z=b[p+"Score"],A=b[g+"Score"],L=b[p+"Name"],j=b[g+"Name"],C=b.phase===p+"-attack",q=b.phase===p+"-defense",V=Array.isArray(b["selected_"+p])?b["selected_"+p]:[],Y=V.map(ee=>ee.cardId),W=window.innerWidth>=700,ie=b[p+"Subs"]||[],J=b["usedSubIds_"+p]||[],de=ie.filter(ee=>!J.includes(ee.cardId)),re=b["gcCardsFull_"+p]||[],te=b["usedGc_"+p]||[],pe=re.filter(ee=>!te.includes(ee.id)),fe=b.boostOwner===p&&!b.boostUsed,xe=!["GK","DEF","MIL","ATT"].some(ee=>($[ee]||[]).some(ge=>!ge.used)),Q=[...w.MIL||[],...w.ATT||[]].filter(ee=>!ee.used),ye=C&&xe&&Q.length===0?[...w.GK||[],...w.DEF||[]].filter(ee=>!ee.used).map(ee=>ee.cardId):[];function Te(ee,ge,Ie){var _i,ki;const be=ee._gcDef,it={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[be==null?void 0:be.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",st={purple:"#b06ce0",light_blue:"#00d4ef"}[be==null?void 0:be.color]||"#b06ce0",gt=(be==null?void 0:be.name)||ee.gc_type,mt=(be==null?void 0:be.effect)||((_i=Se[ee.gc_type])==null?void 0:_i.desc)||"",vi=be!=null&&be.image_url?`/icons/${be.image_url}`:null,cn=((ki=Se[ee.gc_type])==null?void 0:ki.icon)||"⚡",hi=Math.round(Ie*.22),wi=Math.round(Ie*.22),Nt=Ie-hi-wi,pn=gt.length>12?7:9;return`<div class="pvp-gc-mini" data-gc-id="${ee.id}" data-gc-type="${ee.gc_type}"
        style="box-sizing:border-box;width:${ge}px;height:${Ie}px;border-radius:10px;border:2px solid ${st};background:${it};display:flex;flex-direction:column;overflow:hidden;cursor:pointer;flex-shrink:0">
        <div style="height:${hi}px;background:rgba(255,255,255,0.14);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:${pn}px;font-weight:900;color:#fff;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:${ge-6}px">${gt}</span>
          <span style="font-size:6px;color:rgba(255,255,255,0.45)">⚡ GC</span>
        </div>
        <div style="height:${Nt}px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${vi?`<img src="${vi}" style="max-width:${ge-10}px;max-height:${Nt-6}px;object-fit:contain">`:`<span style="font-size:${Math.round(Nt*.55)}px">${cn}</span>`}
        </div>
        <div style="height:${wi}px;background:rgba(0,0,0,0.38);display:flex;align-items:center;justify-content:center;padding:0 3px">
          <span style="font-size:6px;color:rgba(255,255,255,0.9);text-align:center;line-height:1.25">${mt.slice(0,38)}</span>
        </div>
      </div>`}function Ae(ee,ge){return`<div id="pvp-boost-card"
        style="box-sizing:border-box;width:${ee}px;height:${ge}px;background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:2px solid #87CEEB;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(ge*.04)}px;text-align:center;flex-shrink:0">
        <div style="font-size:${Math.round(ge*.2)}px">⚡</div>
        <div style="font-size:${Math.round(ge*.09)}px;color:#000;font-weight:900">+${b.boostValue}</div>
      </div>`}const Ne=(ee,ge)=>ge?Ae(130,175):Te(ee,130,175),Pe=(ee,ge)=>ge?Ae(68,95):Te(ee,68,95),Ge=W?"padding:28px 20px;border-radius:14px;font-size:16px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;width:100%":"padding:22px 8px;border-radius:12px;font-size:14px;font-weight:900;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:100%",ft=C?ke(p)?`<button id="pvp-action" style="${Ge};background:linear-gradient(135deg,#c47a00,#FFD700);border:none;color:#fff;box-shadow:0 0 18px rgba(255,215,0,0.4)" ${V.length===0?"disabled":""}>⚔️ ATTAQUEZ <span id="pvp-timer"></span></button>`:`<button id="pvp-action" data-pass="1" style="${Ge};background:linear-gradient(135deg,#555,#888);border:none;color:#fff">⏭️ PASSER <span id="pvp-timer"></span></button>`:q?`<button id="pvp-action" style="${Ge};background:linear-gradient(135deg,#1a4a8a,#3a7bd5);border:none;color:#fff;box-shadow:0 0 18px rgba(135,206,235,0.4)" ${V.length===0?"disabled":""}>🛡️ DÉFENDEZ <span id="pvp-timer"></span></button>`:`<div style="font-size:11px;color:rgba(255,255,255,0.3);text-align:center;padding:4px">⏳ Tour de ${j}</div>`,je=C&&!ke(p)?'<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">Aucun attaquant — passez la main</div>':C||q?`<div style="font-size:9px;color:rgba(255,255,255,0.4);text-align:center;margin-top:2px">${V.length}/3 sélectionné(s)</div>`:"",Oe=`<div style="display:flex;flex-direction:column;gap:4px;padding:4px 2px;width:${W?90:50}px;align-items:center;overflow-y:auto;flex-shrink:0;background:rgba(0,0,0,0.15)">
      ${de.length===0?'<div style="font-size:7px;color:rgba(255,255,255,0.25);text-align:center;margin-top:6px;line-height:1.4">Pas de<br>rempl.</div>':de.map(ee=>`<div class="pvp-sub-btn" data-sub-id="${ee.cardId}" style="cursor:pointer;flex-shrink:0">${We(ee,W?76:44,W?100:58)}</div>`).join("")}
    </div>`,Re=C?"attack":q?"defense":"idle",Ze=`<div style="overflow:hidden;min-width:0;flex:1;min-height:0;display:flex;flex-direction:column" id="match-field">
      <div class="terrain-wrapper" style="overflow:hidden;width:100%;flex:1;min-height:0;display:flex;align-items:center;justify-content:center">
        ${ht(w,b[p+"Formation"],Re,Y,Ve(),ot(),ye)}
      </div>
    </div>`,He=(()=>{var ge,Ie;if(q&&((ge=b.pendingAttack)!=null&&ge.players)){const be=b.pendingAttack;return`<div style="padding:5px 8px;background:rgba(180,30,30,0.2);border-left:3px solid #ff6b6b">
          <div style="font-size:8px;color:#ff6b6b;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ ${j} ATTAQUE — Défendez !</div>
          ${ct((be.players||[]).map(it=>({...it,used:!1})),"#ff6b6b",be.total)}
        </div>`}if(C&&((Ie=b.pendingAttack)!=null&&Ie.players)){const be=b.pendingAttack;return`<div style="padding:5px 8px;background:rgba(26,107,60,0.2);border-left:3px solid #00ff88">
          <div style="font-size:8px;color:#00ff88;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">⚔️ VOUS ATTAQUEZ</div>
          ${ct((be.players||[]).map(it=>({...it,used:!1})),"#00ff88",be.total)}
        </div>`}const ee=(b.log||[]).slice(-1)[0];return ee?'<div style="padding:2px 4px">'+en(ee)+"</div>":'<div style="padding:6px 8px;font-size:11px;color:rgba(255,255,255,0.3)">⏳ Match en cours...</div>'})(),et=`
      <div style="display:flex;align-items:center;padding:8px 10px;background:rgba(0,0,0,0.5);gap:6px;flex-shrink:0">
        <button id="pvp-quit" style="width:34px;height:34px;border-radius:50%;background:rgba(220,50,50,0.7);border:none;color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px">
          <span style="font-size:13px;font-weight:700;color:rgba(255,255,255,0.9);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${L}</span>
          <span style="font-size:26px;font-weight:900;color:#FFD700;letter-spacing:2px">${z} – ${A}</span>
          <span style="font-size:12px;color:rgba(255,255,255,0.5)">${j}</span>
        </div>
        <button id="pvp-view-opp" style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:#fff;font-size:16px;cursor:pointer;flex-shrink:0">👁</button>
      </div>
      <div style="background:rgba(0,0,0,0.3);flex-shrink:0;overflow:hidden;max-height:140px">${He}</div>
      <button id="pvp-toggle-history" style="width:100%;padding:3px 10px;background:rgba(0,0,0,0.15);border:none;border-bottom:1px solid rgba(255,255,255,0.05);color:rgba(255,255,255,0.3);font-size:9px;cursor:pointer;letter-spacing:1px;flex-shrink:0;text-transform:uppercase">
        ▼ Historique (${(b.log||[]).length})
      </button>`;nt(e),e.style.overflow="hidden",W?e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${et}
        <div style="display:flex;flex:1;min-height:0;overflow:hidden">
          ${Oe}
          <div style="flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;overflow:hidden">
            ${Ze}
            <div style="flex-shrink:0;padding:10px 16px 12px;background:rgba(0,0,0,0.25);display:flex;flex-direction:column;align-items:center;gap:4px">
              ${ft}${je}
            </div>
          </div>
          <div style="width:160px;flex-shrink:0;display:flex;flex-direction:column;padding:10px 8px;background:rgba(0,0,0,0.2);overflow-y:auto;gap:10px;align-items:center">
            ${pe.map(ee=>Ne(ee,!1)).join("")}
            ${fe?Ne(null,!0):""}
          </div>
        </div>
      </div>`:e.innerHTML=`
      <div class="match-screen" style="position:fixed;top:0;left:0;right:0;bottom:auto;z-index:100;display:flex;flex-direction:column;overflow:hidden;background:#0a3d1e;width:100%">
        ${et}
        <div id="mobile-play-area" style="flex:1;min-height:0;display:flex;overflow:hidden">
          <div id="match-field" style="flex:1;min-width:0;min-height:0;overflow:hidden">
            <div class="terrain-wrapper" style="width:100%;height:100%;overflow:hidden">
              ${ht(w,b[p+"Formation"],Re,Y,Ve(),ot(),ye)}
            </div>
          </div>
        </div>
        <div id="mobile-action-bar" style="position:absolute;left:0;right:0;bottom:0;z-index:20;background:rgba(0,0,0,0.55);padding:6px 8px 8px;display:flex;flex-direction:column;gap:6px;box-shadow:0 -4px 16px rgba(0,0,0,0.5)">
          <div style="display:flex;gap:6px;overflow-x:auto;align-items:flex-end;min-height:96px;padding-bottom:2px">
            ${pe.map(ee=>Pe(ee,!1)).join("")}
            ${fe?Pe(null,!0):""}
            <div id="pvp-sub-open" style="cursor:${C&&de.length>0?"pointer":"default"};flex-shrink:0;box-sizing:border-box;width:68px;height:95px;border-radius:10px;border:2px solid ${C&&de.length>0?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.15)"};background:${C&&de.length>0?"rgba(60,60,60,0.9)":"rgba(40,40,40,0.5)"};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;opacity:${C&&de.length>0?1:.4}">
              <div style="display:flex;gap:6px;align-items:center">
                <div style="text-align:center">
                  <div style="font-size:7px;color:#00ff88;font-weight:700;letter-spacing:1px">IN</div>
                  <div style="font-size:18px;font-weight:900;color:#00ff88">${de.length}</div>
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
          <div>${ft}${je}</div>
        </div>
      </div>`;function qe(){const ee=e.querySelector(".match-screen");if(!ee)return;const ge=Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight);ee.style.height=ge+"px",ee.style.minHeight=ge+"px",ee.style.maxHeight=ge+"px",ee.style.overflow="hidden";const Ie=e.querySelector("#mobile-action-bar"),be=e.querySelector("#mobile-play-area");Ie&&be&&(be.style.paddingBottom=Ie.offsetHeight+"px")}if(qe(),setTimeout(qe,120),setTimeout(qe,400),Z||(Z=!0,window.visualViewport&&(window.visualViewport.addEventListener("resize",qe),window.visualViewport.addEventListener("scroll",qe)),window.addEventListener("resize",qe)),function(){const ge=e.querySelector(".terrain-wrapper svg");ge&&(ge.removeAttribute("width"),ge.removeAttribute("height"),ge.style.cssText="width:100%;height:100%;display:block;max-width:none;margin:0",ge.setAttribute("viewBox","-26 -26 352 352"),ge.setAttribute("preserveAspectRatio","xMidYMid meet"))}(),e.querySelectorAll(".match-slot-hit").forEach(ee=>{ee.addEventListener("click",()=>{if(!C&&!q)return;const ge=ee.dataset.cardId,Ie=ee.dataset.role,be=(w[Ie]||[]).find(mt=>mt.cardId===ge);if(!be||be.used)return;const it=ye.includes(ge);if(C&&!["MIL","ATT"].includes(Ie)&&!it)return;Array.isArray(b["selected_"+p])||(b["selected_"+p]=[]);const st=b["selected_"+p],gt=st.findIndex(mt=>mt.cardId===ge);gt>-1?st.splice(gt,1):st.length<3&&st.push({...be,_role:Ie}),ae()})}),e.querySelectorAll(".match-used-hit").forEach(ee=>{ee.addEventListener("click",()=>F(ee.dataset.cardId))}),e.querySelectorAll(".pvp-sub-btn").forEach(ee=>{ee.addEventListener("click",()=>F())}),(Ue=e.querySelector("#pvp-sub-open"))==null||Ue.addEventListener("click",()=>F()),e.querySelectorAll(".pvp-gc-mini").forEach(ee=>{ee.addEventListener("click",()=>E(ee.dataset.gcId,ee.dataset.gcType))}),(tt=e.querySelector("#pvp-boost-card"))==null||tt.addEventListener("click",()=>S()),(mi=e.querySelector("#pvp-action"))==null||mi.addEventListener("click",ee=>{C?ee.currentTarget.dataset.pass==="1"||!ke(p)?G():$e():q&&_e()}),(xi=e.querySelector("#pvp-quit"))==null||xi.addEventListener("click",()=>{confirm("Quitter ? Vous perdrez par forfait.")&&I()}),(bi=e.querySelector("#pvp-view-opp"))==null||bi.addEventListener("click",()=>H()),(yi=e.querySelector("#pvp-toggle-history"))==null||yi.addEventListener("click",()=>M()),D&&(clearInterval(D),D=null),(C||q)&&!N){let ee=30,ge=!1;const Ie=()=>document.getElementById("pvp-timer"),be=()=>{Ie()&&(Ie().textContent=ee+"s",Ie().style.color=ge?"#ff4444":"#fff")};be(),D=setInterval(()=>{ee--,ee<0?ge?(clearInterval(D),D=null,C&&!ke(p)?G():I()):(ge=!0,ee=15,be()):be()},1e3)}}function Le(){nt(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100%;overflow:hidden;gap:12px;padding:12px 16px;background:#0a3d1e;overflow-y:auto">
      <div style="font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;margin-top:8px">Équipe adverse</div>
      <div style="font-size:20px;font-weight:900;color:#ff6b6b">${b[g+"Name"]||"Adversaire"}</div>
      <div style="width:min(90vw,420px)">${jt(b[g+"Team"],b[g+"Formation"],null,[],Ve(),ot())}</div>
    </div>`,p==="p1"&&setTimeout(async()=>{await P({phase:"midfield"})},5e3)}let U=!1;function X(){if(U)return;const w=b[p+"Team"].MIL||[],$=b[g+"Team"].MIL||[],z=milScore(w)+milLinks(w),A=milScore($)+milLinks($),L=z>=A;function j(re,te,pe){return`<div id="duel-row-${pe}" style="text-align:center;width:100%;transition:transform .5s cubic-bezier(.5,0,.75,0),opacity .5s ease;transform-origin:center">
        <div style="font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase;font-weight:700">${te}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:0">
          ${re.map((fe,xe)=>{const Q=xe<re.length-1?oi(fe,re[xe+1]):null,ye=!Q||Q==="#ff3333"||Q==="#cc2222",Te=Q==="#00ff88"?"+2":Q==="#FFD700"?"+1":"";return`<div class="duel-card duel-card-${pe}" data-idx="${xe}" style="opacity:0;transform:translateY(18px) scale(0.7);transition:opacity .35s ease,transform .35s cubic-bezier(.34,1.56,.64,1);flex-shrink:0">
              ${De({...fe,_evolution_bonus:0},{width:window.innerWidth>=900?90:58,showStad:!0,stadDef:b.homeStadiumDef||b.stadiumDef||null,role:"MIL",extraNote:fe.boost||0})}
            </div>
            ${xe<re.length-1?`<div class="duel-link duel-link-${pe}" style="position:relative;width:18px;height:5px;border-radius:3px;background:${ye?"rgba(255,255,255,0.12)":Q};flex-shrink:0;opacity:0;transition:opacity .3s ease;box-shadow:${ye?"none":`0 0 8px ${Q}`}">
              ${Te?`<span style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);font-size:8px;font-weight:900;color:${Q}">${Te}</span>`:""}
            </div>`:""}`}).join("")}
        </div>
        <div class="duel-score-line duel-score-line-${pe}" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.55);opacity:0;transition:opacity .4s ease">
          Score: ${milScore(re)} + ${milLinks(re)} liens = <b style="color:#fff">${milScore(re)+milLinks(re)}</b>
        </div>
      </div>`}nt(e),e.innerHTML=`
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
      ${j(w,b[p+"Name"]||"Vous","me")}
      <div style="display:flex;flex-direction:column;align-items:center;gap:2px;margin:4px 0">
        <div id="pvp-score-me" style="font-size:48px;font-weight:900;color:#D4A017;transition:all .5s ease">0</div>
        <div id="pvp-vs" style="font-size:14px;color:rgba(255,255,255,.4);letter-spacing:3px;opacity:0">VS</div>
        <div id="pvp-score-opp" style="font-size:48px;font-weight:900;color:rgba(255,255,255,.7);transition:all .5s ease">0</div>
      </div>
      ${j($,b[g+"Name"]||"Adversaire","opp")}
      <div id="duel-shock" style="position:absolute;left:50%;top:50%;width:120px;height:120px;border-radius:50%;border:6px solid #FFD700;opacity:0;pointer-events:none"></div>
      <div id="pvp-duel-finale" style="position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px;opacity:0;pointer-events:none;background:radial-gradient(circle at center,rgba(10,61,30,.4),rgba(10,61,30,.92))"></div>
    </div>`;const C=(re,te)=>e.querySelectorAll(re).forEach((pe,fe)=>{setTimeout(()=>{pe.style.opacity="1",pe.style.transform="translateY(0) scale(1)"},te+fe*90)});C(".duel-card-me",150),C(".duel-card-opp",500),setTimeout(()=>e.querySelectorAll(".duel-link").forEach((re,te)=>setTimeout(()=>{re.style.opacity="1"},te*70)),900),setTimeout(()=>{const re=e.querySelector("#pvp-vs");re&&(re.style.opacity="1",re.style.animation="vsFlash .5s ease"),e.querySelectorAll(".duel-score-line").forEach(te=>te.style.opacity="1")},1250);function q(re,te,pe){const fe=document.getElementById(re);if(!fe)return;const xe=performance.now(),Q=ye=>{const Te=Math.min(1,(ye-xe)/pe);fe.textContent=Math.round(te*(1-Math.pow(1-Te,3))),Te<1?requestAnimationFrame(Q):fe.textContent=te};requestAnimationFrame(Q)}setTimeout(()=>{q("pvp-score-me",z,800),q("pvp-score-opp",A,800)},1500);const V=b.p1Team.MIL||[],Y=b.p2Team.MIL||[],W=milScore(V)+milLinks(V),ie=milScore(Y)+milLinks(Y),J=W>=ie?"p1":"p2";let de=b.boostValue;de==null&&(de=Pi(),b.boostValue=de,b.boostOwner=J,b.boostUsed=!1),U=!0,setTimeout(()=>{const re=e.querySelector("#duel-row-"+(L?"me":"opp")),te=e.querySelector("#duel-row-"+(L?"opp":"me")),pe=document.getElementById("pvp-score-me"),fe=document.getElementById("pvp-score-opp"),xe=L?pe:fe,Q=L?fe:pe;xe&&(xe.style.fontSize="80px",xe.style.color=L?"#FFD700":"#ff6b6b",xe.style.animation="duelPulse .5s ease"+(L?",duelGlow 1.5s ease infinite .5s":"")),Q&&(Q.style.opacity="0.25"),setTimeout(()=>{re&&(re.style.animation="winnerSlam .5s cubic-bezier(.4,0,.7,1) forwards",re.style.zIndex="5"),setTimeout(()=>{const ye=document.getElementById("duel-shock");ye&&(ye.style.animation="shockwave .5s ease-out forwards"),te&&(te.style.animation="crushSquash .45s ease-in forwards"),navigator.vibrate&&navigator.vibrate([40,30,60])},320),setTimeout(()=>{var Ne;const ye=document.getElementById("pvp-duel-finale");if(!ye)return;const Te=b.boostOwner===p?'<div style="background:linear-gradient(135deg,#4a9fc4,#87CEEB);border:3px solid #cdeffd;border-radius:18px;padding:20px 34px;text-align:center;animation:boostFlipIn .7s cubic-bezier(.34,1.56,.64,1) both;box-shadow:0 10px 36px rgba(135,206,235,.5)"><div style="font-size:10px;color:rgba(0,0,0,.6);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;font-weight:700">Carte Boost obtenue</div><div style="font-size:46px;line-height:1">⚡</div><div style="font-size:50px;font-weight:900;color:#063;line-height:1.1">+'+de+`</div><div style="font-size:10px;color:rgba(0,0,0,.55);margin-top:4px">Applicable sur n'importe quel joueur</div></div>`:"",Ae=p==="p1"?'<button id="pvp-start-match" style="margin-top:6px;padding:18px 46px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:18px;font-weight:900;cursor:pointer;box-shadow:0 6px 24px rgba(0,0,0,.4);animation:fadeUp .4s ease both;animation-delay:.45s;opacity:0">▶ Commencer le match</button>':`<div style="font-size:14px;color:rgba(255,255,255,0.5);text-align:center;margin-top:8px;animation:fadeUp .4s ease both">⏳ En attente de l'adversaire...</div>`;ye.innerHTML='<div style="font-size:22px;font-weight:900;color:#fff;text-align:center;animation:fadeUp .4s ease both;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+(L?"⚽ "+b[p+"Name"]+"<br>gagne le milieu et attaque !":"😔 "+b[g+"Name"]+"<br>gagne l'engagement et attaque !")+"</div>"+Te+Ae,ye.style.transition="opacity .45s ease",ye.style.opacity="1",ye.style.pointerEvents="auto",(Ne=document.getElementById("pvp-start-match"))==null||Ne.addEventListener("click",async()=>{const Pe=J;await P({phase:Pe+"-attack",attacker:Pe,round:1,boostValue:de,boostUsed:!1,boostOwner:Pe})})},600)},700)},2800)}function K(w,$,z){var te,pe;const A=(b.gcDefs||[]).find(fe=>{var xe;return fe.name===w||((xe=fe.name)==null?void 0:xe.toLowerCase().trim())===(w==null?void 0:w.toLowerCase().trim())}),L={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[A==null?void 0:A.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",j={purple:"#b06ce0",light_blue:"#00d4ef"}[A==null?void 0:A.color]||"#b06ce0",C=(A==null?void 0:A.name)||w,q=(A==null?void 0:A.effect)||((te=Se[w])==null?void 0:te.desc)||"",V=A!=null&&A.image_url?`/icons/${A.image_url}`:null,Y=((pe=Se[w])==null?void 0:pe.icon)||"⚡",ie=$===p?"Vous":b[$+"Name"]||"Adversaire",J=document.createElement("div");J.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:1100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;overflow:hidden;cursor:pointer;padding:24px",J.innerHTML=`
      <style>
        @keyframes gcFlipIn{0%{transform:perspective(800px) rotateY(90deg) scale(.7);opacity:0}55%{transform:perspective(800px) rotateY(-12deg) scale(1.08);opacity:1}100%{transform:perspective(800px) rotateY(0) scale(1);opacity:1}}
        @keyframes gcGlow{0%,100%{box-shadow:0 0 30px ${j}66}50%{box-shadow:0 0 60px ${j}cc}}
        @keyframes gcLabel{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      </style>
      <div style="font-size:11px;color:${j};letter-spacing:3px;text-transform:uppercase;font-weight:700;animation:gcLabel .4s ease both">${ie} joue une carte</div>
      <div style="width:200px;border-radius:18px;border:3px solid ${j};background:${L};display:flex;flex-direction:column;overflow:hidden;animation:gcFlipIn .7s cubic-bezier(.34,1.56,.64,1) both,gcGlow 1.8s ease infinite .7s">
        <div style="padding:12px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${C.length>14?12:15}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${C}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:170px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${V?`<img src="${V}" style="max-width:160px;max-height:160px;object-fit:contain">`:`<span style="font-size:76px">${Y}</span>`}
        </div>
        <div style="padding:12px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${q}</div>
        </div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:4px;animation:gcLabel .3s ease 1.2s both">Appuyer pour continuer</div>`,document.body.appendChild(J);let de=!1;const re=()=>{de||(de=!0,J.remove(),setTimeout(()=>z&&z(),50))};J.addEventListener("click",re),setTimeout(re,3e3)}function E(w,$){var J,de,re,te;const A=(b["gcCardsFull_"+p]||[]).find(pe=>pe.id===w),L=A==null?void 0:A._gcDef,j={purple:"linear-gradient(160deg,#4a0a8a,#7a28b8)",light_blue:"linear-gradient(160deg,#006080,#00bcd4)"}[L==null?void 0:L.color]||"linear-gradient(160deg,#4a0a8a,#7a28b8)",C={purple:"#b06ce0",light_blue:"#00d4ef"}[L==null?void 0:L.color]||"#b06ce0",q=(L==null?void 0:L.name)||$,V=(L==null?void 0:L.effect)||((J=Se[$])==null?void 0:J.desc)||"Carte spéciale.",Y=L!=null&&L.image_url?`/icons/${L.image_url}`:null,W=((de=Se[$])==null?void 0:de.icon)||"⚡",ie=document.createElement("div");ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:750;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:24px",ie.innerHTML=`
      <div style="width:190px;border-radius:16px;border:3px solid ${C};background:${j};display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 40px ${C}66">
        <div style="padding:10px;background:rgba(255,255,255,0.14);text-align:center">
          <div style="font-size:${q.length>14?11:14}px;font-weight:900;color:#fff;letter-spacing:.5px;text-transform:uppercase">${q}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.5);margin-top:2px">⚡ GAME CHANGER</div>
        </div>
        <div style="height:160px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.06)">
          ${Y?`<img src="${Y}" style="max-width:150px;max-height:150px;object-fit:contain">`:`<span style="font-size:72px">${W}</span>`}
        </div>
        <div style="padding:10px;background:rgba(0,0,0,0.38);text-align:center">
          <div style="font-size:12px;color:rgba(255,255,255,0.92);line-height:1.5">${V}</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;width:190px">
        <button id="pvp-gc-back" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Retour</button>
        <button id="pvp-gc-use" style="flex:1;padding:13px;border-radius:12px;border:none;background:#FFD700;color:#000;font-size:14px;font-weight:900;cursor:pointer">Utiliser ⚡</button>
      </div>`,document.body.appendChild(ie),(re=ie.querySelector("#pvp-gc-back"))==null||re.addEventListener("click",()=>ie.remove()),(te=ie.querySelector("#pvp-gc-use"))==null||te.addEventListener("click",()=>{ie.remove(),se(w,$)})}function S(){var A;const w=b[p+"Team"],$=Object.entries(w).flatMap(([L,j])=>(j||[]).filter(C=>!C.used).map(C=>({...C,_line:L})));if(!$.length)return;const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:900;display:flex;flex-direction:column;overflow:hidden",z.innerHTML=`
      <div style="padding:12px 16px;background:rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">⚡ Choisir un joueur pour +${b.boostValue}</div>
        <button id="bp-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:22px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start">
        ${$.map(L=>{const j={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"}[L._line]||"#555",C=Be(L,L._line)+(L.boost||0);return`<div class="bp-item" data-cid="${L.cardId}" style="width:80px;border-radius:8px;border:2px solid rgba(255,255,255,0.25);background:${j};overflow:hidden;cursor:pointer">
            <div style="background:rgba(255,255,255,0.9);text-align:center;padding:2px;font-size:7px;font-weight:900;color:#111;overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${L.name||"?"}</div>
            <div style="height:50px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:#fff">${C}</div>
          </div>`}).join("")}
      </div>`,document.body.appendChild(z),(A=z.querySelector("#bp-close"))==null||A.addEventListener("click",()=>z.remove()),z.querySelectorAll(".bp-item").forEach(L=>{L.addEventListener("click",async()=>{const j=L.dataset.cid,C=$.find(V=>V.cardId===j);if(!C)return;const q=(w[C._line]||[]).find(V=>V.cardId===j);q&&(q.boost=(q.boost||0)+b.boostValue),z.remove(),await P({[p+"Team"]:w,boostUsed:!0})})})}function F(w=null){var de,re;if(!(b.phase===p+"-attack")){m("Remplacement uniquement avant votre attaque","warning");return}const z=b[p+"Team"],A=b["usedSubIds_"+p]||[],L=b.maxSubs||3;if(A.length>=L){m(`Maximum ${L} remplacements atteint`,"warning");return}const j=Object.entries(z).flatMap(([te,pe])=>(pe||[]).filter(fe=>fe.used).map(fe=>({...fe,_line:te}))),C=(b[p+"Subs"]||[]).filter(te=>!A.includes(te.cardId));if(!j.length){m("Aucun joueur utilisé à remplacer","warning");return}if(!C.length){m("Aucun remplaçant disponible","warning");return}let q=Math.max(0,j.findIndex(te=>te.cardId===w));const V=((de=j[q])==null?void 0:de._line)||((re=j[q])==null?void 0:re.job);let Y=Math.max(0,C.findIndex(te=>te.job===V)),W=!1;const ie=document.createElement("div");ie.id="pvp-sub-overlay",ie.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:700;display:flex;flex-direction:column;overflow:hidden";function J(){var Te,Ae,Ne,Pe,Ge,ft;const te=j[q],pe=C[Y],fe=Math.min(130,Math.round((window.innerWidth-90)/2)),xe=Math.round(fe*1.35),Q=je=>`background:rgba(255,255,255,0.12);border:none;color:${je?"rgba(255,255,255,0.2)":"#fff"};width:40px;height:40px;border-radius:50%;font-size:20px;cursor:${je?"default":"pointer"};flex-shrink:0`;ie.innerHTML=`
      <div style="display:flex;align-items:center;padding:12px 16px;background:rgba(0,0,0,0.5);flex-shrink:0">
        <div style="flex:1;font-size:15px;font-weight:900;color:#fff">🔄 Remplacement (${A.length}/${L})</div>
        <button id="psub-close" style="background:none;border:none;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;padding:0">✕</button>
      </div>
      <div style="flex:1;display:flex;gap:0;overflow:hidden">
        <div id="pin-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px;border-right:1px solid rgba(255,255,255,0.08)">
          <div style="font-size:9px;color:#00ff88;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui entre</div>
          <button id="pin-up" style="${Q(Y===0)}" ${Y===0?"disabled":""}>▲</button>
          <div>${pe?We({...pe,used:!1,boost:0},fe,xe):"<div>—</div>"}</div>
          <button id="pin-down" style="${Q(Y>=C.length-1)}" ${Y>=C.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${Y+1}/${C.length}</div>
        </div>
        <div id="pout-panel" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:12px 6px">
          <div style="font-size:9px;color:#ff6b6b;letter-spacing:2px;text-transform:uppercase;font-weight:700">Joueur qui sort</div>
          <button id="pout-up" style="${Q(q===0)}" ${q===0?"disabled":""}>▲</button>
          <div>${te?We({...te,used:!1,boost:0},fe,xe):"<div>—</div>"}</div>
          <button id="pout-down" style="${Q(q>=j.length-1)}" ${q>=j.length-1?"disabled":""}>▼</button>
          <div style="font-size:10px;color:rgba(255,255,255,0.35)">${q+1}/${j.length}</div>
        </div>
      </div>
      <div style="padding:12px 16px;background:rgba(0,0,0,0.4);flex-shrink:0">
        <button id="psub-confirm" style="width:100%;padding:14px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:900;cursor:pointer">✅ Confirmer</button>
      </div>`,(Te=ie.querySelector("#psub-close"))==null||Te.addEventListener("click",()=>ie.remove()),(Ae=ie.querySelector("#pout-up"))==null||Ae.addEventListener("click",()=>{q>0&&(q--,J())}),(Ne=ie.querySelector("#pout-down"))==null||Ne.addEventListener("click",()=>{q<j.length-1&&(q++,J())}),(Pe=ie.querySelector("#pin-up"))==null||Pe.addEventListener("click",()=>{Y>0&&(Y--,J())}),(Ge=ie.querySelector("#pin-down"))==null||Ge.addEventListener("click",()=>{Y<C.length-1&&(Y++,J())});const ye=(je,Oe,Re,Ze)=>{const He=ie.querySelector("#"+je);if(!He)return;let et=0;He.addEventListener("touchstart",qe=>{et=qe.touches[0].clientY},{passive:!0}),He.addEventListener("touchend",qe=>{const Ue=qe.changedTouches[0].clientY-et;if(Math.abs(Ue)<30)return;const tt=Oe();Ue<0&&tt<Ze-1?(Re(tt+1),J()):Ue>0&&tt>0&&(Re(tt-1),J())},{passive:!0})};ye("pin-panel",()=>Y,je=>Y=je,C.length),ye("pout-panel",()=>q,je=>q=je,j.length),(ft=ie.querySelector("#psub-confirm"))==null||ft.addEventListener("click",async je=>{if(je.preventDefault(),je.stopPropagation(),W)return;W=!0;const Oe=j[q],Re=C[Y];if(!Oe||!Re)return;const Ze=Oe._line,He=(z[Ze]||[]).findIndex(Ue=>Ue.cardId===Oe.cardId);if(He===-1){m("Erreur : joueur introuvable","error"),ie.remove();return}const et={...Re,_line:Ze,position:Oe.position,used:!1,boost:0};z[Ze].splice(He,1,et);const qe=[...A,Re.cardId];ie.remove(),R(Oe,Re,async()=>{await P({[p+"Team"]:z,[g+"Team"]:b[g+"Team"],["usedSubIds_"+p]:qe})})})}document.body.appendChild(ie),J()}function R(w,$,z){const A={GK:"#111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"},L=document.createElement("div");L.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:850;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;overflow:hidden;cursor:pointer";const j=(V,Y,W)=>`<div style="text-align:center">
      <div style="font-size:9px;color:${Y};letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px">${W}</div>
      <div style="width:70px;height:70px;border-radius:50%;background:${A[V.job]||"#555"};border:3px solid ${Y};position:relative;overflow:hidden;margin:0 auto">
        ${wt(V)?`<img src="${wt(V)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:""}
      </div>
      <div style="font-size:11px;color:#fff;margin-top:6px;font-weight:700">${(V.name||"").slice(0,12)}</div>
    </div>`;L.innerHTML=`
      <style>@keyframes subSwap{0%{transform:scale(0.6);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}</style>
      <div style="font-size:30px;font-weight:900;color:#00bcd4;letter-spacing:3px;animation:subSwap .5s ease both">🔄 REMPLACEMENT</div>
      <div style="display:flex;align-items:center;gap:24px;animation:subSwap .5s ease .15s both">
        ${j($,"#00ff88","Entre")}
        <div style="font-size:30px;color:rgba(255,255,255,0.5)">⇄</div>
        ${j(w,"#ff6b6b","Sort")}
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,0.3);margin-top:6px">Appuyer pour continuer</div>`,document.body.appendChild(L);let C=!1;const q=()=>{C||(C=!0,L.remove(),setTimeout(()=>z(),50))};L.addEventListener("click",q),setTimeout(q,2200)}function H(){var $;const w=document.createElement("div");w.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;overflow-y:auto",w.innerHTML=`
      <div style="font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:2px;text-transform:uppercase">Équipe adverse</div>
      <div style="font-size:18px;font-weight:900;color:#ff6b6b">${b[g+"Name"]}</div>
      <div style="width:min(90vw,420px)">${jt(b[g+"Team"],b[g+"Formation"],null,[],Ve(),ot())}</div>
      <button id="pvp-opp-close" style="margin-top:8px;padding:12px 28px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.3);background:transparent;color:#fff;font-size:14px;cursor:pointer">Fermer</button>`,document.body.appendChild(w),($=w.querySelector("#pvp-opp-close"))==null||$.addEventListener("click",()=>w.remove())}function M(){var z;const w=b.log||[],$=document.createElement("div");$.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:800;display:flex;flex-direction:column",$.innerHTML=`
      <div style="display:flex;align-items:center;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0">
        <div style="flex:1;font-size:14px;font-weight:700;color:#fff">📋 Historique</div>
        <button id="pvp-hist-close" style="background:none;border:none;color:rgba(255,255,255,0.6);font-size:20px;cursor:pointer">✕</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:6px">
        ${w.length===0?'<div style="text-align:center;padding:40px;color:rgba(255,255,255,0.3)">Aucune action</div>':[...w].reverse().map(A=>`<div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${A.type==="goal"?"#FFD700":A.type==="stop"?"#00ff88":"rgba(255,255,255,0.5)"}"><div style="font-size:12px;color:#fff">${A.text||""}</div></div>`).join("")}
      </div>`,document.body.appendChild($),(z=$.querySelector("#pvp-hist-close"))==null||z.addEventListener("click",()=>$.remove())}async function G(){if(b.phase!==p+"-attack")return;const w=p==="p1"?"p2":"p1",$=(b.round||0)+1,z=[...b.log||[]];z.push({type:"info",text:`⏭️ ${b[p+"Name"]||"Vous"} passe (aucun attaquant disponible)`});const A=ve(b),L=ke(w),j=A||!L?"finished":w+"-attack";await P({["selected_"+p]:[],modifiers:{...b.modifiers,[p]:{}},pendingAttack:null,phase:j,attacker:w,round:$,log:z}),j==="finished"&&await Ce(b)}async function $e(){const w=b[p+"Team"],$=!["GK","DEF","MIL","ATT"].some(j=>(b[g+"Team"][j]||[]).some(C=>!C.used)),z=(b["selected_"+p]||[]).map(j=>{const C=(w[j._role]||[]).find(re=>re.cardId===j.cardId)||j,q=$&&["GK","DEF"].includes(j._role),V=w[j._role]||[],Y=V.findIndex(re=>re.cardId===j.cardId),W=Bt(V.length),ie=Y>=0?W[Y]:C._col??1,J=b.stadiumDef||b.homeStadiumDef||null,de=C.stadiumBonus||J&&(J.club_id&&String(C.club_id)===String(J.club_id)||J.country_code&&C.country_code===J.country_code)||!1;return{...C,_line:j._role,_col:ie,stadiumBonus:de,...q?{note_a:Math.max(1,Number(C.note_a)||0)}:{}}});if(!z.length)return;const A=ai(z,b.modifiers[p]||{});ue(p,z.map(j=>j.cardId)),z.forEach(j=>{const C=(w[j._role]||[]).find(q=>q.cardId===j.cardId);C&&(C.used=!0)}),b["selected_"+p]=[],ae();const L=[...b.log||[]];if($){const j=(b[p+"Score"]||0)+1,C=z.map(ie=>histPlayer(ie));L.push({type:"duel",isGoal:!0,homeScored:!0,text:"⚽ BUT ! L'adversaire n'a plus de joueurs.",homePlayers:C,homeTotal:A.total,aiTotal:0});const q=(b.round||0)+1,V=p==="p1"?"p2":"p1",Y={...b,[p+"Team"]:w,[p+"Score"]:j},W=ve(Y);O.add(q),rt(C,j,b[g+"Score"]||0,!0,async()=>{await P({[p+"Team"]:w,[p+"Score"]:j,["selected_"+p]:[],modifiers:{...b.modifiers,[p]:{}},pendingAttack:null,phase:W?"finished":V+"-attack",attacker:V,round:q,log:L}),W&&await Ce({...b,[p+"Score"]:j})});return}L.push({type:"pending",text:`⚔️ ${b[p+"Name"]} attaque (${A.total})`}),await P({[p+"Team"]:w,[g+"Team"]:b[g+"Team"],pendingAttack:{...A,players:z,side:p},["selected_"+p]:[],modifiers:{...b.modifiers,[p]:{}},phase:g+"-defense",log:L})}async function _e(){const w=b[p+"Team"],$=(b["selected_"+p]||[]).map(te=>{const pe=(w[te._role]||[]).find(Te=>Te.cardId===te.cardId)||te,fe=w[te._role]||[],xe=fe.findIndex(Te=>Te.cardId===te.cardId),Q=Bt(fe.length),ye=xe>=0?Q[xe]:pe._col??1;return{...pe,_line:te._role,_col:ye}}),z=si($,b.modifiers[p]||{});ue(p,$.map(te=>te.cardId)),$.forEach(te=>{const pe=(w[te._role]||[]).find(fe=>fe.cardId===te.cardId);pe&&(pe.used=!0)}),b["selected_"+p]=[],ae();const A=di(b.pendingAttack.total,z.total,b.modifiers[p]||{}),L=b.pendingAttack.side,j=A==="attack"||(A==null?void 0:A.goal),C=L==="p1"?"p2":"p1",q=(b.round||0)+1,V=(b.pendingAttack.players||[]).map(te=>histPlayer(te)),Y=[...b.log||[]];Y.push({type:"duel",isGoal:j,homeScored:j&&L===p,text:j?`⚽ BUT de ${b[L+"Name"]} ! (${b.pendingAttack.total} vs ${z.total})`:`✋ Attaque stoppée (${b.pendingAttack.total} vs ${z.total})`,homePlayers:V,aiPlayers:$.map(te=>histPlayer(te)),homeTotal:b.pendingAttack.total,aiTotal:z.total});const W=j?(b[L+"Score"]||0)+1:b[L+"Score"]||0,ie={...b,[p+"Team"]:w,[L+"Score"]:W},J=ve(ie),de=J?"finished":C+"-attack",re=async()=>{await P({[p+"Team"]:w,[g+"Team"]:b[g+"Team"],[L+"Score"]:W,["selected_"+p]:[],modifiers:{...b.modifiers,[p]:{}},pendingAttack:null,phase:de,attacker:C,round:q,log:Y}),(de==="finished"||J)&&await Ce({...b,[L+"Score"]:W})};if(j){const te=L===p,pe=te?W:b[p+"Score"]||0,fe=te?b[g+"Score"]||0:W;O.add(q),rt(V,pe,fe,te,re)}else await re()}function we(w){return["MIL","ATT"].some($=>(w[$]||[]).some(z=>!z.used))}function me(w){return["GK","DEF","MIL","ATT"].some($=>(w[$]||[]).some(z=>!z.used))}function Ee(w){return me(w)&&!we(w)}function ke(w){const $=b[w+"Team"],z=b[(w==="p1"?"p2":"p1")+"Team"];return!!(we($)||!me(z)&&Ee($))}function ve(w){const $=["MIL","ATT"].some(Y=>(w.p1Team[Y]||[]).some(W=>!W.used)),z=["MIL","ATT"].some(Y=>(w.p2Team[Y]||[]).some(W=>!W.used)),A=me(w.p1Team),L=me(w.p2Team);return!$&&!(!L&&A)&&(!z&&!(!A&&L))}function Me(w){const $=w.p1Score||0,z=w.p2Score||0;return $===z?null:$>z?_.home_id:_.away_id}async function Ce(w){try{const $=Me(w),z=$?_.home_id===$?_.away_id:_.home_id:null;await y.from("matches").update({status:"finished",winner_id:$,home_score:w.p1Score||0,away_score:w.p2Score||0}).eq("id",i),$&&z&&updateEvolutiveCards($,z).catch(()=>{})}catch($){console.error("[PvP] finishMatch:",$)}}function Fe(){var L;const w=b[p+"Score"],$=b[g+"Score"],z=w>$,A=w===$;nt(e),e.innerHTML=`
    <div class="match-screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:18px;padding:24px;background:#0a3d1e;text-align:center">
      <div style="font-size:64px">${z?"🏆":A?"🤝":"😤"}</div>
      <div style="font-size:24px;font-weight:900;color:#fff">${z?"Victoire !":A?"Match nul":"Défaite"}</div>
      <div style="font-size:32px;font-weight:900;color:#FFD700">${w} - ${$}</div>
      <button id="pvp-home" style="padding:16px 40px;border-radius:14px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">🏠 Retour</button>
    </div>`,(L=document.getElementById("pvp-home"))==null||L.addEventListener("click",()=>{try{y.removeChannel(ce)}catch{}Je(e),x("home")})}ae()}async function ei(e,t,i=!1){var s,d;const{state:n,navigate:a,toast:o}=t,r=i&&((d=(s=t==null?void 0:t.state)==null?void 0:s.params)==null?void 0:d.rankedData)||null;await $t(e,t,i?"ranked":"random",async({deckId:l,formation:c,starters:u,subsRaw:f,gcCardsEnriched:x,gcDefs:m,stadiumDef:p})=>{const g=x||[];nt(e),await Co(e,t,l,c,u,f,g,m,p,i,r)})}async function Mo(e,t,i){return Ao(e,t,i)}async function Co(e,t,i,n,a,o,r=[],s=[],d=null,l=!1,c=null){var Z,O;const{state:u,navigate:f,toast:x}=t,m=(c==null?void 0:c.mmr)??((Z=u.profile)==null?void 0:Z.mmr)??1e3,p=l?ri(m):null,g=l?"linear-gradient(135deg, #1a0a2e 0%, #2d1060 50%, #1a0a2e 100%)":"linear-gradient(135deg, #0a1a2e 0%, #0d3d1e 100%)",v=l?(p==null?void 0:p.color)||"#D4A017":"#FFD700";e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:${g};color:#fff;padding:32px;text-align:center;gap:20px">
      ${l?`<div style="font-size:36px">${(p==null?void 0:p.emoji)||"⚽"}</div>`:""}
      <div style="font-size:18px;font-weight:900;color:#fff">${l?"Recherche Ranked…":"Recherche d'un adversaire…"}</div>
      ${l?`<div style="font-size:13px;color:${(p==null?void 0:p.color)||"#D4A017"}">${(p==null?void 0:p.name)||""} · ${Math.round(m)} MMR</div>`:""}
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:${v};animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-mm" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer;margin-top:8px">Annuler</button>
    </div>`,(O=document.getElementById("cancel-mm"))==null||O.addEventListener("click",()=>{T==null||T.unsubscribe(),Je(e),f("home")});const h=u.user.id,{data:_}=await y.from("matchmaking_queue").select("id").eq("user_id",h).single();_||await y.from("matchmaking_queue").insert({user_id:h,deck_id:i,formation:n,mmr:m,is_ranked:l});let T,b=!1;const N=async()=>{if(b)return;const{data:ne}=await y.from("matches").select("id, home_id, away_id").or(`home_id.eq.${h},away_id.eq.${h}`).eq("status","in_progress").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(ne){b=!0,T==null||T.unsubscribe(),await y.from("matchmaking_queue").delete().eq("user_id",h);const oe=ne.home_id===h;await Et(e,t,ne.id,oe,{myGC:r,gcDefs:s,stadiumDef:d,isRanked:l,rankedData:c,onMatchEnd:l?jo:null})}};if(await N(),b)return;T=y.channel(`mm_${h}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"matches",filter:`home_id=eq.${h}`},N).on("postgres_changes",{event:"UPDATE",schema:"public",table:"matches",filter:`away_id=eq.${h}`},N).subscribe();const D=setInterval(N,3e3);setTimeout(()=>{clearInterval(D),T==null||T.unsubscribe()},12e4)}async function jo(e,t){const{state:i,toast:n}=t,{winnerId:a,homeId:o,awayId:r,homeScore:s,awayScore:d,matchId:l}=e,c=i.user.id,u=o===c,f=a===c,{data:x}=await y.from("users").select("mmr, mmr_rd, mmr_v").eq("id",c).single(),{data:m}=await y.from("users").select("mmr, mmr_rd, mmr_v").eq("id",u?r:o).single();if(x&&m){const p=mn(x.mmr,x.mmr_rd,x.mmr_v,m.mmr,m.mmr_rd,f?1:0);await y.from("users").update({mmr:p.mmr,mmr_rd:p.rd,mmr_v:p.v,mmr_wins:f?y.sql`mmr_wins + 1`:void 0,mmr_losses:f?void 0:y.sql`mmr_losses + 1`}).eq("id",c),n(f?`+MMR ↑ ${Math.round(p.mmr-x.mmr)}`:`-MMR ↓ ${Math.round(x.mmr-p.mmr)}`,f?"success":"error",4e3)}}const Bo=Object.freeze(Object.defineProperty({__proto__:null,renderMatchRandom:ei,resumePvpMatch:Mo},Symbol.toStringTag,{value:"Module"}));async function qo(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.friendId||null,s=o.friendName||"Ami";await $t(e,t,"friend",async({deckId:d,formation:l,starters:c,subsRaw:u,gcCardsEnriched:f,gcDefs:x,stadiumDef:m})=>{const p=f||[];nt(e),r?await Do(e,t,d,p,x,m,r,s):await Fo(e,t,d,p,x,m)})}async function Do(e,t,i,n,a,o,r,s){var p;const{state:d,navigate:l,toast:c}=t,u=d.user.id,{data:f}=await y.from("friend_match_invites").insert({inviter_id:u,invitee_id:r,status:"pending"}).select("id").single();e.innerHTML=`
    <div style="min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:32px;text-align:center;gap:20px">
      <div style="font-size:36px">👥</div>
      <div style="font-size:18px;font-weight:900">En attente de ${s}…</div>
      <div style="width:52px;height:52px;border-radius:50%;border:4px solid rgba(255,255,255,0.15);border-top-color:#1A6B3C;animation:spin 1s linear infinite"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      <button id="cancel-friend" style="padding:10px 28px;border-radius:20px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:13px;cursor:pointer">Annuler</button>
    </div>`,(p=document.getElementById("cancel-friend"))==null||p.addEventListener("click",async()=>{f&&await y.from("friend_match_invites").update({status:"declined"}).eq("id",f.id),Je(e),l("home")});let x=!1;const m=y.channel(`friend_${u}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"matches",filter:`home_id=eq.${u}`},async({new:g})=>{x||(x=!0,m.unsubscribe(),f&&await y.from("friend_match_invites").update({status:"accepted"}).eq("id",f.id),await Et(e,t,g.id,!0,{myGC:n,gcDefs:a,stadiumDef:o}))}).subscribe();setTimeout(()=>{x||(m.unsubscribe(),c("Invitation expirée","info"),l("home"))},12e4)}async function Fo(e,t,i,n,a,o){const{state:r,navigate:s,toast:d}=t,l=r.user.id,{data:c}=await y.from("matches").select("id, home_id, away_id, status").eq("away_id",l).eq("status","in_progress").order("created_at",{ascending:!1}).limit(1).maybeSingle();if(!c){d("Aucun match en attente","error"),s("home");return}await Et(e,t,c.id,!1,{myGC:n,gcDefs:a,stadiumDef:o})}const ut="#1A6B3C",Ye="#D4A017";async function Po(e,t){var n;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const i=(n=t.state.params)==null?void 0:n.openLeagueId;if(i){t.state.params.openLeagueId=null,await Qe(e,t,i);return}await at(e,t)}async function at(e,t,i="waiting"){var v;const{state:n}=t,a=n.profile.id,{data:o}=await y.from("mini_league_members").select("league_id").eq("user_id",a),r=(o||[]).map(h=>h.league_id),{data:s,error:d}=await y.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").eq("is_archived",!1).order("created_at",{ascending:!1}).limit(30),l=d?(await y.from("mini_leagues").select("*, mini_league_members(count)").eq("status","waiting").order("created_at",{ascending:!1}).limit(30)).data||[]:s||[],u=(r.length?await y.from("mini_leagues").select("*, mini_league_members(count)").in("id",r).order("created_at",{ascending:!1}):{data:[]}).data||[],f=u.filter(h=>h.status==="waiting"&&!h.is_archived),x=u.filter(h=>h.status==="active"&&!h.is_archived),m=u.filter(h=>h.is_archived||h.status==="finished"),p=l.filter(h=>!r.includes(h.id)),g=[{key:"waiting",label:"🟡 En attente",count:f.length+p.length},{key:"active",label:"🟢 En cours",count:x.length},{key:"archived",label:"📁 Archivées",count:m.length}];e.innerHTML=`
  <div style="height:100%;overflow-y:auto;background:var(--page-bg)">
    <div style="padding:12px 16px;background:#fff;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:18px;font-weight:900">🏆 Mini League</div>
        <div style="font-size:12px;color:#888">Championnats 3 à 8 joueurs</div>
      </div>
      <button id="ml-create-btn" class="btn btn-primary">+ Créer</button>
    </div>
    <div style="display:flex;background:#fff;border-bottom:1px solid #eee">
      ${g.map(h=>`<button class="ml-tab" data-tab="${h.key}" style="flex:1;padding:10px 4px;border:none;border-bottom:2px solid ${i===h.key?ut:"transparent"};background:none;font-size:12px;font-weight:${i===h.key?"900":"600"};color:${i===h.key?ut:"#888"};cursor:pointer">${h.label}${h.count?` (${h.count})`:""}</button>`).join("")}
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:10px">
      ${i==="waiting"?Go(f,p,a):i==="active"?Ro(x,a):No(m,a)}
    </div>
  </div>`,(v=document.getElementById("ml-create-btn"))==null||v.addEventListener("click",()=>Oo(e,t)),e.querySelectorAll(".ml-tab").forEach(h=>h.addEventListener("click",()=>at(e,t,h.dataset.tab))),e.querySelectorAll("[data-league-id]").forEach(h=>h.addEventListener("click",()=>Qe(e,t,h.dataset.leagueId))),e.querySelectorAll("[data-join]").forEach(h=>h.addEventListener("click",_=>{_.stopPropagation(),on(e,t,h.dataset.join,h.dataset.type)})),e.querySelectorAll("[data-delete]").forEach(h=>h.addEventListener("click",_=>{_.stopPropagation(),ti(e,t,h.dataset.delete,h.dataset.name,i)}))}function Gt(e,t,i=!1){var r,s;const n=e.creator_id===t,a=e.pot||0,o=((s=(r=e.mini_league_members)==null?void 0:r[0])==null?void 0:s.count)||0;return`<div data-league-id="${e.id}" style="background:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 1px 6px rgba(0,0,0,0.08);cursor:pointer;margin-bottom:8px">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px">
      <div style="font-size:15px;font-weight:900;flex:1;margin-right:8px">${e.name}</div>
      ${n?`<button data-delete="${e.id}" data-name="${e.name}" style="background:none;border:none;font-size:16px;cursor:pointer;color:#cc2222;flex-shrink:0;padding:0">🗑️</button>`:""}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;color:#666;margin-bottom:${i?"10px":"0"}">
      <span>${e.type==="private"?"🔒":"🌐"} ${e.type==="private"?"Privée":"Publique"}</span>
      <span>⚽ ${e.mode==="aller-retour"?"A-R":"Aller"}</span>
      <span>👥 ${o}/${e.max_players}</span>
      <span>💰 ${(e.entry_fee||100).toLocaleString("fr")} cr.</span>
      ${a>0?`<span style="color:${Ye};font-weight:700">🏆 ${a.toLocaleString("fr")} cr.</span>`:""}
      ${e.current_day>0?`<span>📅 J${e.current_day}/${e.total_days}</span>`:""}
    </div>
    ${i?`<button data-join="${e.id}" data-type="${e.type}" class="btn btn-primary btn-sm" style="width:100%;margin-top:6px">Rejoindre (mise : ${(e.entry_fee||100).toLocaleString("fr")} cr.)</button>`:""}
  </div>`}function Go(e,t,i){const n=[];return e.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px">Mes leagues en attente</div>'),n.push(...e.map(a=>Gt(a,i,!1)))),t.length&&(n.push('<div style="font-size:11px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:1px;margin-top:4px">Rejoindre</div>'),n.push(...t.map(a=>Gt(a,i,!0)))),n.length?n.join(""):'<div style="text-align:center;padding:40px;color:#aaa">🏆<br>Aucune mini league.<br>Crée la première !</div>'}function Ro(e,t){return e.length?e.map(i=>Gt(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league en cours.</div>'}function No(e,t){return e.length?e.map(i=>Gt(i,t)).join(""):'<div style="text-align:center;padding:40px;color:#aaa">Aucune mini league archivée.</div>'}function Oo(e,t){const i=document.createElement("div");i.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px",i.innerHTML=`<div style="background:#fff;border-radius:16px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
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
    </div></div>`,document.body.appendChild(i),i.querySelector("#ml-form-close").addEventListener("click",()=>i.remove()),i.addEventListener("click",n=>{n.target===i&&i.remove()}),i.querySelectorAll('input[name="ml-type"]').forEach(n=>n.addEventListener("change",()=>{document.getElementById("ml-pwd-block").style.display=n.value==="private"?"block":"none"})),i.querySelector("#ml-create-confirm").addEventListener("click",async()=>{var m,p,g,v;const{toast:n}=t,a=document.getElementById("ml-name").value.trim(),o=parseInt(document.getElementById("ml-max").value)||6,r=parseInt(document.getElementById("ml-fee").value)||500,s=((m=i.querySelector('input[name="ml-type"]:checked'))==null?void 0:m.value)||"public",d=((p=i.querySelector('input[name="ml-mode"]:checked'))==null?void 0:p.value)||"aller",l=((v=(g=document.getElementById("ml-pwd"))==null?void 0:g.value)==null?void 0:v.trim())||null;if(!a){n("Le nom est obligatoire","error");return}if(r<100){n("Mise minimum : 100 crédits","error");return}if(s==="private"&&!l){n("Mot de passe requis","error");return}const{data:c,error:u}=await y.from("mini_leagues").insert({name:a,creator_id:t.state.profile.id,type:s,password:l,mode:d,max_players:o,entry_fee:r}).select().single();if(u){n("Erreur : "+u.message,"error");return}const{data:f}=await y.from("users").select("credits").eq("id",t.state.profile.id).single();if(((f==null?void 0:f.credits)||0)<r){await y.from("mini_leagues").delete().eq("id",c.id),n(`Crédits insuffisants pour la mise (${r.toLocaleString("fr")} cr.)`,"error");return}await y.from("users").update({credits:f.credits-r}).eq("id",t.state.profile.id),await y.from("mini_leagues").update({pot:r}).eq("id",c.id),await y.from("mini_league_members").insert({league_id:c.id,user_id:t.state.profile.id}),t.state.profile&&(t.state.profile.credits=f.credits-r);const x=document.getElementById("nav-credits");x&&(x.textContent=`💰 ${(t.state.profile.credits||0).toLocaleString("fr")}`),i.remove(),n(`Mini League créée ! ${r.toLocaleString("fr")} cr. déduits.`,"success"),Qe(e,t,c.id)})}function Ho(){return new Promise(e=>{const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9500;display:flex;align-items:center;justify-content:center;padding:20px",t.innerHTML=`
      <div style="background:#fff;border-radius:16px;padding:24px;width:100%;max-width:320px;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
        <div style="font-size:17px;font-weight:900;margin-bottom:6px">🔒 League privée</div>
        <div style="font-size:13px;color:#888;margin-bottom:14px">Saisis le mot de passe pour rejoindre.</div>
        <input id="ml-pwd-input" type="password" placeholder="Mot de passe..." autocomplete="off"
          style="width:100%;box-sizing:border-box;padding:11px;border:1.5px solid #ddd;border-radius:8px;font-size:15px;margin-bottom:14px">
        <div style="display:flex;gap:10px">
          <button id="pwd-cancel" style="flex:1;padding:11px;border-radius:8px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
          <button id="pwd-ok" class="btn btn-primary" style="flex:1;padding:11px;font-size:14px">Confirmer</button>
        </div>
      </div>`,document.body.appendChild(t);const i=t.querySelector("#ml-pwd-input"),n=a=>{t.remove(),e(a)};setTimeout(()=>i==null?void 0:i.focus(),80),t.querySelector("#pwd-cancel").addEventListener("click",()=>n(null)),t.querySelector("#pwd-ok").addEventListener("click",()=>n(i.value.trim())),i.addEventListener("keydown",a=>{a.key==="Enter"&&n(i.value.trim())}),t.addEventListener("click",a=>{a.target===t&&n(null)})})}async function on(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id,{data:s}=await y.from("mini_leagues").select("password,status,entry_fee,pot,max_players").eq("id",i).single();if(!s){a("Mini League introuvable","error");return}if(s.status!=="waiting"){a("Cette Mini League a déjà démarré","warning");return}const{count:d}=await y.from("mini_league_members").select("id",{count:"exact",head:!0}).eq("league_id",i);if(d>=s.max_players){a("La Mini League est complète","warning");return}if(n==="private"){const p=await Ho();if(p===null)return;if(s.password!==p){a("Mot de passe incorrect","error");return}}const l=s.entry_fee||100,{data:c}=await y.from("users").select("credits").eq("id",r).single();if(((c==null?void 0:c.credits)||0)<l){a(`Crédits insuffisants — il te faut ${l.toLocaleString("fr")} cr. (solde : ${((c==null?void 0:c.credits)||0).toLocaleString("fr")} cr.)`,"error");return}const{error:u}=await y.from("mini_league_members").insert({league_id:i,user_id:r});if(u){a("Erreur inscription : "+u.message,"error");return}const{error:f}=await y.from("users").update({credits:c.credits-l}).eq("id",r),{error:x}=await y.from("mini_leagues").update({pot:(s.pot||0)+l}).eq("id",i);(f||x)&&console.error("Erreur post-inscription:",f,x),o.profile&&(o.profile.credits=c.credits-l);const m=document.getElementById("nav-credits");m&&(m.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`✅ Inscrit ! −${l.toLocaleString("fr")} cr. · Pot : ${((s.pot||0)+l).toLocaleString("fr")} cr.`,"success"),Qe(e,t,i)}async function Uo(e,t,i,n){const{toast:a,state:o}=t,r=o.profile.id;if(!confirm(`Te désinscrire et récupérer ${n.toLocaleString("fr")} cr. ?`))return;const{data:s}=await y.from("mini_leagues").select("pot,status").eq("id",i).single();if(!s||s.status!=="waiting"){a("Impossible — la league a déjà démarré","error");return}const{data:d}=await y.from("users").select("credits").eq("id",r).single();await y.from("mini_leagues").update({pot:Math.max(0,(s.pot||0)-n)}).eq("id",i),await y.from("users").update({credits:((d==null?void 0:d.credits)||0)+n}).eq("id",r),await y.from("mini_league_members").delete().eq("league_id",i).eq("user_id",r),o.profile&&(o.profile.credits=((d==null?void 0:d.credits)||0)+n);const l=document.getElementById("nav-credits");l&&(l.textContent=`💰 ${(o.profile.credits||0).toLocaleString("fr")}`),a(`↩️ Désinscrit · +${n.toLocaleString("fr")} cr. remboursés`,"success"),at(e,t,"waiting")}async function ti(e,t,i,n,a){const{toast:o}=t;if(!confirm(`Supprimer définitivement "${n}" et tous ses matchs/membres ? Action irréversible.`))return;await y.from("mini_league_matches").delete().eq("league_id",i),await y.from("mini_league_members").delete().eq("league_id",i);const{error:r}=await y.from("mini_leagues").delete().eq("id",i);if(r){o("Erreur suppression ("+r.message+")","error");return}o("Mini League supprimée avec succès","success"),at(e,t,a)}async function Ko(e,t,i){await y.from("mini_leagues").update({is_archived:!0}).eq("id",i),t.toast("Mini League archivée","success"),at(e,t,"archived")}async function Qe(e,t,i){var T,b,N,D,Z,O,ne,oe,ce;const{state:n,toast:a}=t,o=n.profile.id,[{data:r},{data:s},{data:d}]=await Promise.all([y.from("mini_leagues").select("*").eq("id",i).single(),y.from("mini_league_members").select("*, user:users(id,pseudo,club_name,club_color1,club_color2)").eq("league_id",i),y.from("mini_league_matches").select("*").eq("league_id",i).order("matchday").order("created_at")]);if(!r){a("Introuvable","error"),await at(e,t);return}const l=(s||[]).some(P=>P.user_id===o),c=r.creator_id===o,u=(s||[]).map(P=>P.user).filter(Boolean),f=an(u,d||[]),x=(d||[]).filter(P=>P.matchday===r.current_day),m=r.pot||0,p=r.entry_fee||100,g=x.length>0&&x.every(P=>P.status==="finished"||P.status==="bye"),v=r.current_day>=r.total_days,h=(s||[]).find(P=>P.user_id===o);e.innerHTML=`
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
        ${m>0?`<div style="font-size:12px;font-weight:900;color:${Ye};margin-top:4px">🏆 ${m.toLocaleString("fr")} cr.</div>`:""}
      </div>
    </div>
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:14px">

      ${r.status==="waiting"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:4px">👥 Joueurs (${u.length}/${r.max_players})</div>
        <div style="font-size:12px;color:#888;margin-bottom:10px">💰 ${p} cr./joueur → Pot estimé : ${(p*u.length).toLocaleString("fr")} cr. (🥇${Math.floor(p*u.length*.7).toLocaleString("fr")} · 🥈${Math.floor(p*u.length*.2).toLocaleString("fr")} · 🥉${Math.floor(p*u.length*.1).toLocaleString("fr")})</div>
        ${u.map(P=>`
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f5f5">
            <div style="width:36px;height:36px;border-radius:50%;background:${P.club_color2||ut};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:${P.club_color1||"#fff"}">${(P.pseudo||"?").slice(0,2).toUpperCase()}</div>
            <div style="flex:1"><div style="font-size:13px;font-weight:700">${P.club_name||P.pseudo}</div><div style="font-size:11px;color:#999">@${P.pseudo}</div></div>
            ${P.id===r.creator_id?'<span style="font-size:10px;color:#D4A017;font-weight:700">👑</span>':""}
          </div>`).join("")}
        ${c&&u.length>=2?`<button id="ml-start-btn" class="btn btn-primary" style="width:100%;margin-top:14px;padding:12px">🚀 Lancer (prélève ${p} cr. × ${u.length})</button>`:""}
        ${c?'<button id="ml-delete-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:8px">🗑️ Supprimer</button>':""}
        ${l?"":`<button id="ml-join-now" class="btn btn-primary" style="width:100%;margin-top:14px">Rejoindre (mise : ${p} cr.)</button>`}
        ${l&&!c?`
          <button id="ml-leave-btn" class="btn btn-ghost btn-sm" style="color:#cc2222;width:100%;margin-top:10px">↩️ Se désinscrire et récupérer ${p.toLocaleString("fr")} cr.</button>
        `:""}
      </div>`:""}

      ${r.status==="active"?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📅 Journée ${r.current_day} / ${r.total_days}</div>
        ${x.map(P=>Bi(P,u,o,l)).join("")}
        ${c&&g&&!v?'<button id="ml-next-day" class="btn btn-primary" style="width:100%;margin-top:12px">➡️ Journée suivante</button>':""}
        ${c&&g&&v?'<button id="ml-finish-btn" class="btn btn-primary" style="width:100%;margin-top:12px;background:#7a28b8">🏆 Terminer et distribuer le pot</button>':""}
      </div>`:""}

      ${(r.status==="active"||r.status==="finished")&&f.length?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">🏆 Classement</div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="font-size:10px;color:#888;text-transform:uppercase;border-bottom:2px solid #f0f0f0">
            <th style="text-align:left;padding:5px 0">#</th><th style="text-align:left;padding:5px 0">Club</th>
            <th style="text-align:center;padding:5px 3px">J</th><th style="text-align:center;padding:5px 3px">G-N-P</th>
            <th style="text-align:center;padding:5px 3px">DB</th><th style="text-align:center;font-weight:900;padding:5px 3px">Pts</th>
            ${m>0&&r.status==="finished"?`<th style="text-align:right;padding:5px 0;color:${Ye}">💰</th>`:""}
          </tr></thead>
          <tbody>${f.map((P,I)=>{const k=m>0&&r.status==="finished"?I===0?Math.floor(m*.7):I===1?Math.floor(m*.2):I===2?Math.floor(m*.1):0:0;return`<tr style="border-bottom:1px solid #f5f5f5;${P.userId===o?"background:#f0fdf4;":""}">
              <td style="padding:7px 3px 7px 0;font-weight:700;color:${I===0?Ye:I<3?ut:"#555"}">${["🥇","🥈","🥉"][I]||I+1}</td>
              <td style="padding:7px 3px"><div style="font-weight:700">${P.clubName}</div><div style="font-size:10px;color:#999">@${P.pseudo}</div></td>
              <td style="text-align:center">${P.played}</td><td style="text-align:center">${P.won}-${P.drawn}-${P.lost}</td>
              <td style="text-align:center;color:${P.goalDiff>=0?ut:"#cc2222"}">${P.goalDiff>=0?"+":""}${P.goalDiff}</td>
              <td style="text-align:center;font-weight:900;font-size:14px">${P.points}</td>
              ${m>0&&r.status==="finished"?`<td style="text-align:right;font-weight:700;color:${Ye}">${k?k.toLocaleString("fr")+" cr.":"—"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:""}

      ${r.status!=="waiting"&&r.current_day>1?`
      <div style="background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.08)">
        <div style="font-size:14px;font-weight:900;margin-bottom:10px">📋 Résultats</div>
        ${Array.from({length:Math.max(0,r.status==="active"?r.current_day-1:r.current_day)},(P,I)=>I+1).reverse().map(P=>{const I=(d||[]).filter(k=>k.matchday===P);return`<div style="margin-bottom:10px"><div style="font-size:11px;font-weight:700;color:#888;margin-bottom:6px">Journée ${P}</div>${I.map(k=>Bi(k,u,o,!1,!0)).join("")}</div>`}).join("")}
      </div>`:""}

      ${c&&!r.is_archived&&r.status!=="waiting"?`
      <div style="display:flex;gap:8px">
        <button id="ml-archive-btn" class="btn btn-ghost btn-sm" style="flex:1;color:#555">📁 Archiver</button>
        <button id="ml-delete-now" class="btn btn-ghost btn-sm" style="flex:1;color:#cc2222">🗑️ Supprimer</button>
      </div>`:""}

    </div>
  </div>`;const _=r.status==="waiting"?"waiting":r.status==="active"?"active":"archived";if((T=document.getElementById("ml-back"))==null||T.addEventListener("click",()=>at(e,t,_)),(b=document.getElementById("ml-start-btn"))==null||b.addEventListener("click",()=>Vo(e,t,r,u)),(N=document.getElementById("ml-next-day"))==null||N.addEventListener("click",()=>Yo(e,t,i)),(D=document.getElementById("ml-finish-btn"))==null||D.addEventListener("click",()=>rn(e,t,i,m,f,u)),(Z=document.getElementById("ml-join-now"))==null||Z.addEventListener("click",()=>on(e,t,i,r.type)),(O=document.getElementById("ml-leave-btn"))==null||O.addEventListener("click",()=>Uo(e,t,i,p)),(ne=document.getElementById("ml-delete-btn"))==null||ne.addEventListener("click",()=>ti(e,t,i,r.name,"waiting")),(oe=document.getElementById("ml-delete-now"))==null||oe.addEventListener("click",()=>ti(e,t,i,r.name,_)),(ce=document.getElementById("ml-archive-btn"))==null||ce.addEventListener("click",()=>Ko(e,t,i)),e.querySelectorAll("[data-play-match]").forEach(P=>{P.addEventListener("click",()=>{const I=x.find(k=>k.id===P.dataset.playMatch);I&&t.navigate("match-mini-league",{mlMatchId:I.id,leagueId:i})})}),r.status==="finished"&&h){const P=f.findIndex(I=>I.userId===o);P>=0&&P<3&&h.prize_amount>0&&setTimeout(()=>Wo(e,t,r,h,P),400)}}function Bi(e,t,i,n,a=!1){const o=u=>t.find(f=>f.id===u);if(e.is_bye){const u=o(e.home_id);return`<div style="padding:8px;border-radius:8px;background:#f9f9f9;margin-bottom:6px;font-size:12px;color:#888;text-align:center">🔵 ${(u==null?void 0:u.club_name)||(u==null?void 0:u.pseudo)||"?"} exempté(e)</div>`}const r=o(e.home_id),s=o(e.away_id),d=e.home_id===i||e.away_id===i,l=d&&e.status==="pending"&&n&&!a,c=e.status==="finished"?`${e.home_score} - ${e.away_score}`:"vs";return`<div style="display:flex;align-items:center;gap:8px;padding:10px;border-radius:8px;background:${d?"#f0fdf4":"#f9f9f9"};margin-bottom:6px;border:1px solid ${d?"#86efac":"#f0f0f0"}">
    <div style="flex:1;text-align:right;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(r==null?void 0:r.club_name)||(r==null?void 0:r.pseudo)||"?"}</div>
    <div style="font-size:13px;font-weight:900;min-width:50px;text-align:center;color:${e.status==="finished"?ut:"#999"}">${c}</div>
    <div style="flex:1;font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${(s==null?void 0:s.club_name)||(s==null?void 0:s.pseudo)||"?"}</div>
    ${l?`<button data-play-match="${e.id}" class="btn btn-primary btn-sm" style="padding:4px 10px;font-size:11px;flex-shrink:0">⚽</button>`:""}
    ${e.status==="finished"?'<span style="font-size:10px;color:#22c55e;flex-shrink:0">✅</span>':""}
  </div>`}async function Vo(e,t,i,n){const{toast:a,state:o}=t,r=Jo(n.map(l=>l.id),i.mode),s=[];r.forEach((l,c)=>l.forEach(u=>s.push({league_id:i.id,matchday:c+1,home_id:u.home||u.bye,away_id:u.away||null,is_bye:!!u.bye,status:u.bye?"bye":"pending"})));const{error:d}=await y.from("mini_league_matches").insert(s);if(d){a("Erreur calendrier : "+d.message,"error");return}await y.from("mini_leagues").update({status:"active",current_day:1,total_days:r.length}).eq("id",i.id),a(`🚀 Lancée ! Pot : ${(i.pot||0).toLocaleString("fr")} cr.`,"success"),Qe(e,t,i.id)}async function Yo(e,t,i){const{data:n}=await y.from("mini_leagues").select("current_day,total_days,pot").eq("id",i).single(),a=(n.current_day||0)+1;if(a>(n.total_days||0)){await rn(e,t,i,n.pot||0,null,null);return}await y.from("mini_leagues").update({current_day:a}).eq("id",i),t.toast(`Journée ${a} commencée !`,"success"),Qe(e,t,i)}async function rn(e,t,i,n,a,o){const{toast:r,state:s}=t;let d=a,l=o;if(!d){const{data:u}=await y.from("mini_league_matches").select("*").eq("league_id",i),{data:f}=await y.from("mini_league_members").select("*, user:users(id,pseudo,club_name)").eq("league_id",i);l=(f||[]).map(x=>x.user).filter(Boolean),d=an(l,u||[])}const c=[Math.floor(n*.7),Math.floor(n*.2),Math.floor(n*.1)];await Promise.all(d.slice(0,3).map((u,f)=>c[f]?y.from("mini_league_members").update({prize_amount:c[f],prize_claimed:!1}).eq("league_id",i).eq("user_id",u.userId):Promise.resolve())),await y.from("mini_leagues").update({status:"finished"}).eq("id",i),r("🏆 Mini League terminée ! Les gagnants peuvent récupérer leurs crédits.","success"),Qe(e,t,i)}async function Wo(e,t,i,n,a){var f,x;const{state:o,toast:r}=t,s=[Math.floor((i.pot||0)*.7),Math.floor((i.pot||0)*.2),Math.floor((i.pot||0)*.1)],d=["🥇","🥈","🥉"][a],l=n.prize_amount||s[a]||0,c=n.prize_claimed,u=document.createElement("div");u.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",u.innerHTML=`
    <div style="background:linear-gradient(160deg,#1a0a2e,#3b1a6e);border-radius:20px;padding:32px 24px;max-width:320px;width:100%;text-align:center;color:#fff;box-shadow:0 8px 40px rgba(0,0,0,0.6)">
      <div style="font-size:64px;margin-bottom:8px">${d}</div>
      <div style="font-size:22px;font-weight:900;margin-bottom:4px">${a===0?"Champion !":a===1?"Vice-champion !":"3ème place !"}</div>
      <div style="font-size:14px;color:rgba(255,255,255,0.7);margin-bottom:20px">${i.name}</div>
      <div style="background:rgba(212,160,23,0.2);border:2px solid ${Ye};border-radius:14px;padding:16px;margin-bottom:24px">
        <div style="font-size:12px;color:rgba(255,255,255,0.6);margin-bottom:4px">${c?"Déjà récupéré":"Tes gains"}</div>
        <div style="font-size:32px;font-weight:900;color:${Ye}">${l.toLocaleString("fr")} cr.</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px">${a===0?"70%":a===1?"20%":"10%"} du pot de ${(i.pot||0).toLocaleString("fr")} cr.</div>
      </div>
      ${c?'<div style="font-size:13px;color:#86efac;margin-bottom:16px">✅ Crédits déjà récupérés</div>':`<button id="claim-prize-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:${Ye};color:#111;font-size:16px;font-weight:900;cursor:pointer;margin-bottom:12px">💰 Récupérer ${l.toLocaleString("fr")} cr.</button>`}
      <button id="prize-close" style="background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.7);padding:10px 24px;border-radius:10px;font-size:14px;cursor:pointer">Fermer</button>
    </div>`,document.body.appendChild(u),(f=u.querySelector("#prize-close"))==null||f.addEventListener("click",()=>u.remove()),u.addEventListener("click",m=>{m.target===u&&u.remove()}),(x=u.querySelector("#claim-prize-btn"))==null||x.addEventListener("click",async()=>{const{data:m}=await y.from("users").select("credits").eq("id",o.profile.id).single();await y.from("users").update({credits:((m==null?void 0:m.credits)||0)+l}).eq("id",o.profile.id),await y.from("mini_league_members").update({prize_claimed:!0}).eq("league_id",i.id).eq("user_id",o.profile.id),o.profile&&(o.profile.credits=((m==null?void 0:m.credits)||0)+l);const p=document.getElementById("nav-credits");p&&(p.textContent=`💰 ${o.profile.credits.toLocaleString("fr")}`),r(`💰 +${l.toLocaleString("fr")} cr. ajoutés à ton solde !`,"success"),u.remove(),Qe(e,t,i.id)})}function Jo(e,t){const n=e.length%2===0?[...e]:[...e,null],a=n.length;let o=n.slice(1);const r=[];for(let s=0;s<a-1;s++){const d=[],l=[n[0],...o];for(let c=0;c<a/2;c++){const u=l[c],f=l[a-1-c];u===null?d.push({bye:f}):f===null?d.push({bye:u}):d.push({home:u,away:f})}r.push(d),o=[o[o.length-1],...o.slice(0,-1)]}return t==="aller-retour"?[...r,...r.map(s=>s.map(d=>d.bye?d:{home:d.away,away:d.home}))]:r}function an(e,t){const i={};return e.forEach(n=>{i[n.id]={userId:n.id,pseudo:n.pseudo,clubName:n.club_name||n.pseudo,played:0,won:0,drawn:0,lost:0,goalsFor:0,goalsAgainst:0,goalDiff:0,points:0}}),t.filter(n=>n.status==="finished"&&!n.is_bye&&n.home_score!=null).forEach(n=>{const a=i[n.home_id],o=i[n.away_id];!a||!o||(a.played++,o.played++,a.goalsFor+=n.home_score,a.goalsAgainst+=n.away_score,o.goalsFor+=n.away_score,o.goalsAgainst+=n.home_score,n.home_score>n.away_score?(a.won++,a.points+=3,o.lost++):n.home_score<n.away_score?(o.won++,o.points+=3,a.lost++):(a.drawn++,a.points++,o.drawn++,o.points++),a.goalDiff=a.goalsFor-a.goalsAgainst,o.goalDiff=o.goalsFor-o.goalsAgainst)}),Object.values(i).sort((n,a)=>a.points-n.points||a.goalDiff-n.goalDiff||a.goalsFor-n.goalsFor)}async function qi(e,t){const{state:i,navigate:n,toast:a}=t,o=i.params||{},r=o.leagueId||null,s=o.mlMatchId||null;if(s&&r){await Qo(e,t,s,r);return}if(r){await fi(e,t,r);return}await Xo(e,t)}async function Xo(e,t){const{state:i,navigate:n,toast:a}=t;await $t(e,t,"mini_league",async({deckId:o,gcCardsEnriched:r,gcDefs:s,stadiumDef:d})=>{nt(e);const l=r||[],c=i.user.id,{data:u}=await y.from("mini_leagues").insert({creator_id:c,deck_id:o,status:"waiting",gc_cards:l.map(f=>f.id)}).select("id").single();if(!u){a("Erreur création ligue","error"),n("home");return}await fi(e,t,u.id)})}async function fi(e,t,i){var u,f,x;const{state:n,navigate:a,toast:o}=t,r=n.user.id,{data:s}=await y.from("mini_leagues").select("*, creator:users!creator_id(pseudo), participants:mini_league_participants(user_id, deck_id, users(pseudo))").eq("id",i).single();if(!s){o("Ligue introuvable","error"),a("home");return}const d=s.creator_id===r,l=s.participants||[],c=l.length>=4;e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:28px">🏆</div>
        <h2 style="margin:8px 0">Mini Ligue</h2>
        <div style="font-size:13px;opacity:0.6">Code : <b>${i.slice(0,8).toUpperCase()}</b></div>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;padding:16px">
        <div style="font-size:12px;opacity:0.6;margin-bottom:8px">Participants (${l.length}/4)</div>
        ${l.map(m=>{var p;return`
          <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
            <span>⚽</span>
            <span style="font-size:14px;font-weight:700">${((p=m.users)==null?void 0:p.pseudo)||"?"}</span>
            ${m.user_id===s.creator_id?'<span style="font-size:10px;color:#D4A017">CRÉATEUR</span>':""}
          </div>`}).join("")}
        ${Array(4-l.length).fill(0).map(()=>`
          <div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.06);opacity:0.3;font-size:13px">En attente…</div>`).join("")}
      </div>

      <div style="display:flex;flex-direction:column;gap:10px;margin-top:auto">
        ${d&&c?`
          <button id="start-league" style="padding:16px;border-radius:12px;border:none;background:#1A6B3C;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            🚀 Lancer la ligue
          </button>`:""}
        ${l.find(m=>m.user_id===r)?"":`
          <button id="join-league" style="padding:16px;border-radius:12px;border:none;background:#1a3a6b;color:#fff;font-size:16px;font-weight:900;cursor:pointer">
            ➕ Rejoindre
          </button>`}
        <button id="back-home" style="padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:transparent;color:rgba(255,255,255,0.5);font-size:14px;cursor:pointer">
          Retour
        </button>
      </div>
    </div>`,(u=document.getElementById("start-league"))==null||u.addEventListener("click",async()=>{await y.from("mini_leagues").update({status:"in_progress"}).eq("id",i),await sn(e,t,i)}),(f=document.getElementById("join-league"))==null||f.addEventListener("click",async()=>{await $t(e,t,"mini_league",async({deckId:m,gcCardsEnriched:p})=>{const g=p||[];await y.from("mini_league_participants").insert({league_id:i,user_id:r,deck_id:m,gc_cards:g.map(v=>v.id)}),o("Rejoint !","success"),await fi(e,t,i)})}),(x=document.getElementById("back-home"))==null||x.addEventListener("click",()=>a("home"))}async function sn(e,t,i){const{navigate:n,toast:a}=t,{data:o}=await y.from("mini_league_matches").select("id, match_id, home_id, away_id, status").eq("league_id",i).eq("status","pending").order("round",{ascending:!0}).limit(1),r=o==null?void 0:o[0];if(!r){await Zo(e,t,i);return}const s=t.state.user.id,d=r.home_id===s;await Et(e,t,r.match_id,d,{mlLeagueId:i,mlMatchId:r.id,onMatchEnd:async l=>{await y.from("mini_league_matches").update({status:"finished",home_score:l.homeScore,away_score:l.awayScore,winner_id:l.winnerId}).eq("id",r.id),await sn(e,t,i)}})}async function Qo(e,t,i,n){const{data:a}=await y.from("mini_league_matches").select("match_id, home_id, away_id").eq("id",i).single();if(!a){t.toast("Match introuvable","error"),t.navigate("home");return}const o=a.home_id===t.state.user.id;await Et(e,t,a.match_id,o,{mlLeagueId:n,mlMatchId:i,onMatchEnd:async r=>{await y.from("mini_league_matches").update({status:"finished",home_score:r.homeScore,away_score:r.awayScore,winner_id:r.winnerId}).eq("id",i),t.navigate("home")}})}async function Zo(e,t,i){var c;const{navigate:n}=t,{data:a}=await y.from("mini_league_matches").select("home_id, away_id, home_score, away_score, winner_id, home:users!home_id(pseudo), away:users!away_id(pseudo)").eq("league_id",i),o={},r={};(a||[]).forEach(u=>{[u.home_id,u.away_id].forEach(f=>{o[f]||(o[f]=0),r[f]||(r[f]=0)}),u.winner_id?o[u.winner_id]=(o[u.winner_id]||0)+3:(o[u.home_id]=(o[u.home_id]||0)+1,o[u.away_id]=(o[u.away_id]||0)+1),r[u.home_id]=(r[u.home_id]||0)+(u.home_score||0),r[u.away_id]=(r[u.away_id]||0)+(u.away_score||0)});const s={};(a||[]).forEach(u=>{var f,x;s[u.home_id]=(f=u.home)==null?void 0:f.pseudo,s[u.away_id]=(x=u.away)==null?void 0:x.pseudo});const d=Object.keys(o).sort((u,f)=>o[f]-o[u]||r[f]-r[u]),l=["🥇","🥈","🥉","4️⃣"];e.innerHTML=`
    <div style="min-height:100%;background:linear-gradient(135deg,#0a1a2e,#0d3d1e);color:#fff;padding:24px;display:flex;flex-direction:column;gap:16px">
      <div style="text-align:center">
        <div style="font-size:36px">🏆</div>
        <h2>Résultats de la Mini Ligue</h2>
      </div>

      <div style="background:rgba(255,255,255,0.05);border-radius:12px;overflow:hidden">
        ${d.map((u,f)=>`
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
    </div>`,(c=document.getElementById("back-home"))==null||c.addEventListener("click",()=>n("home"))}const er="/",tr=[{emoji:"⚽",title:"Bienvenue dans Manager Wars !",color:"#1A6B3C",content:`<p>Tu es désormais un <strong>manager de football</strong> virtuel.</p>
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
    <p style="margin-top:12px;font-size:13px;color:#888">Tu peux revoir ce tutoriel depuis les paramètres à tout moment.</p>`}];function ir(e,t,i){let n=0;const a=document.createElement("div");a.id="tutorial-overlay",a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:9900;display:flex;align-items:center;justify-content:center;padding:16px";const o=()=>{var c,u,f;const s=t[n],d=n===t.length-1,l=Math.round((n+1)/t.length*100);a.innerHTML=`
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
        ${s.image_url?`<div style="padding:0 24px 8px;text-align:center"><img src="${er}icons/${s.image_url}" style="max-height:160px;max-width:100%;border-radius:12px;object-fit:contain"></div>`:""}
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
    `,a.querySelectorAll("ul,ol").forEach(x=>{x.style.paddingLeft="20px",x.style.marginTop="6px",x.style.marginBottom="6px"}),a.querySelectorAll("li").forEach(x=>{x.style.marginBottom="4px"}),a.querySelectorAll("p").forEach(x=>{x.style.marginBottom="8px"}),(c=a.querySelector("#tuto-prev"))==null||c.addEventListener("click",()=>{n--,o()}),(u=a.querySelector("#tuto-next"))==null||u.addEventListener("click",()=>{d?r():(n++,o())}),(f=a.querySelector("#tuto-skip"))==null||f.addEventListener("click",()=>{confirm("Passer le tutoriel ? Tu pourras le revoir plus tard depuis les paramètres.")&&r()})},r=async()=>{a.remove(),e!=null&&e.id&&await y.from("users").update({tutorial_done:!0}).eq("id",e.id),i==null||i()};document.body.appendChild(a),o()}async function nr(e,t,i){if(!e||e.tutorial_done)return;let n=[];const{data:a,error:o}=await y.rpc("get_tutorial_steps");if(!o&&(a==null?void 0:a.length)>0)n=a,console.log(`[Tutorial] RPC OK → ${n.length} étapes`);else{const{data:s,error:d}=await y.from("tutorial_steps").select("*").eq("is_active",!0).order("step_order");!d&&(s==null?void 0:s.length)>0?(n=s,console.log(`[Tutorial] Direct OK → ${n.length} étapes`)):(console.warn(`[Tutorial] Aucune étape DB (RPC: ${o==null?void 0:o.message}, Direct: ${d==null?void 0:d.message})`),i&&i("[Tutorial] DB vide ou inaccessible — tuto local utilisé","warning",5e3))}const r=n.length>0?n.map(s=>({emoji:s.emoji,title:s.title,color:s.color,content:s.content,image_url:s.image_url||null})):tr;ir(e,r,()=>t("boosters"))}const It={GK:"#111111",DEF:"#bb2020",MIL:"#D4A017",ATT:"#1A6B3C"};function dt(e,t,i=0){return t?(Number(t==="GK"?e.note_g:t==="DEF"?e.note_d:t==="MIL"?e.note_m:e.note_a)||0)+(t===e.job||t===e.job2?i:0):0}async function or(e,t){e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>',await gi(e,t)}async function gi(e,t){const{state:i,toast:n}=t,{data:a}=await y.from("market_listings").select(`id, price, status, listed_at, seller_id,
      seller:users!seller_id(pseudo),
      card:cards(id, card_type, current_note, evolution_bonus,
        player:players(id, firstname, surname_real, country_code, job, job2,
          note_g, note_d, note_m, note_a, rarity, face, note_min, note_max,
          clubs(encoded_name, logo_url, logo_url)))`).eq("status","active").order("listed_at",{ascending:!1}).limit(100),{data:o}=await y.from("market_listings").select(`id, price, status, listed_at, sold_at, seller_id, buyer_id,
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
  </div>`;let d="buy";const l=()=>{var p,g,v,h,_,T,b;return{name:(((p=document.getElementById("flt-name"))==null?void 0:p.value)||"").toLowerCase().trim(),club:(((g=document.getElementById("flt-club"))==null?void 0:g.value)||"").toLowerCase().trim(),country:(((v=document.getElementById("flt-country"))==null?void 0:v.value)||"").toLowerCase().trim(),job:((h=document.getElementById("flt-job"))==null?void 0:h.value)||"",rarity:((_=document.getElementById("flt-rarity"))==null?void 0:_.value)||"",note1:parseInt((T=document.getElementById("flt-note1"))==null?void 0:T.value)||0,note2:parseInt((b=document.getElementById("flt-note2"))==null?void 0:b.value)||0}};function c(p){const g=l();return p.filter(v=>{var O,ne,oe;const h=(O=v.card)==null?void 0:O.player;if(!h)return!1;const _=`${h.firstname} ${h.surname_real}`.toLowerCase(),T=(((ne=h.clubs)==null?void 0:ne.encoded_name)||"").toLowerCase(),b=(h.country_code||"").toLowerCase(),N=((oe=v.card)==null?void 0:oe.evolution_bonus)||0,D=dt(h,h.job,N),Z=h.job2?dt(h,h.job2,N):0;return!(g.name&&!_.includes(g.name)||g.club&&!T.includes(g.club)||g.country&&!b.includes(g.country)||g.job&&h.job!==g.job||g.rarity&&h.rarity!==g.rarity||g.note1&&D<g.note1||g.note2&&Z<g.note2)})}function u(p){var Z,O,ne,oe;const g=(Z=p.card)==null?void 0:Z.player;if(!g)return"";const v=((O=p.card)==null?void 0:O.evolution_bonus)||0,h=dt(g,g.job,v),_=g.job2?dt(g,g.job2,v):0,T=(i.profile.credits||0)>=p.price,b=g.country_code?`https://flagsapi.com/${g.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,N=It[g.job]||"#bbb",D=g.job2?It[g.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden">
      <!-- Drapeau -->
      ${b?`<img src="${b}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      <!-- Logo club -->
      ${(ne=g.clubs)!=null&&ne.logo_url?`<img src="${g.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <!-- Notes -->
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${N};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${N};font-family:Arial Black,Arial">${h}</span>
        </div>
        ${_?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${D};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${D};font-family:Arial Black,Arial">${_}</span>
        </div>`:""}
      </div>
      <!-- Nom -->
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${g.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g.surname_real}</div>
        <div style="font-size:10px;color:#999;margin-top:1px">Vendeur : ${((oe=p.seller)==null?void 0:oe.pseudo)||"—"}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        <button class="btn btn-primary btn-sm" data-buy="${p.id}" ${T?"":"disabled"} style="margin-top:4px;font-size:11px;padding:4px 10px">${T?"Acheter":"Trop cher"}</button>
      </div>
    </div>`}function f(p){var Z,O,ne,oe;const g=(Z=p.card)==null?void 0:Z.player;if(!g)return"";const v=((O=p.card)==null?void 0:O.evolution_bonus)||0,h=dt(g,g.job,v),_=g.job2?dt(g,g.job2,v):0,T=p.status==="sold",b=g.country_code?`https://flagsapi.com/${g.country_code.slice(0,2).toUpperCase()}/flat/64.png`:null,N=It[g.job]||"#bbb",D=g.job2?It[g.job2]||"#bbb":null;return`<div class="card-panel" style="display:flex;align-items:center;gap:10px;padding:10px 12px;overflow:hidden;${T?"opacity:0.7":""}">
      ${b?`<img src="${b}" style="width:32px;height:24px;object-fit:cover;border-radius:3px;flex-shrink:0">`:'<span style="font-size:20px">🌍</span>'}
      ${(ne=g.clubs)!=null&&ne.logo_url?`<img src="${g.clubs.logo_url}" style="width:28px;height:28px;object-fit:contain;flex-shrink:0">`:""}
      <div style="display:flex;gap:4px;flex-shrink:0">
        <div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${N};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${N};font-family:Arial Black,Arial">${h}</span>
        </div>
        ${_?`<div style="width:36px;height:36px;border-radius:6px;background:#111;border:2px solid ${D};display:flex;align-items:center;justify-content:center">
          <span style="font-size:14px;font-weight:900;color:${D};font-family:Arial Black,Arial">${_}</span>
        </div>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:11px;color:#999">${g.firstname}</div>
        <div style="font-size:14px;font-weight:900;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${g.surname_real}</div>
        <div style="font-size:10px;color:${T?"#22c55e":"#999"};margin-top:1px">
          ${T?`✅ Vendu à ${((oe=p.buyer)==null?void 0:oe.pseudo)||"—"} · ${p.sold_at?new Date(p.sold_at).toLocaleDateString("fr"):""}`:`🟢 En vente depuis le ${new Date(p.listed_at).toLocaleDateString("fr")}`}
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:14px;font-weight:900;color:#D4A017">${p.price.toLocaleString("fr")}</div>
        ${T?'<span style="font-size:10px;font-weight:700;color:#fff;background:#22c55e;padding:3px 8px;border-radius:10px;display:inline-block;margin-top:4px">VENDU</span>':`<button class="btn btn-danger btn-sm" data-cancel="${p.id}" style="margin-top:4px;font-size:11px;padding:4px 10px">Retirer</button>`}
      </div>
    </div>`}function x(){const p=document.getElementById("mkt-content"),g=document.getElementById("mkt-filters");if(p){if(g.style.display=d==="buy"?"flex":"none",d==="buy"){const v=c(r);p.innerHTML=v.length?v.map(u).join(""):'<div style="text-align:center;color:#aaa;padding:40px">Aucune carte trouvée.</div>'}else{const v=s.filter(_=>_.status==="active").sort((_,T)=>new Date(T.listed_at)-new Date(_.listed_at)),h=s.filter(_=>_.status==="sold").sort((_,T)=>new Date(T.sold_at||T.listed_at)-new Date(_.sold_at||_.listed_at));p.innerHTML=(v.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:4px 0 6px;text-transform:uppercase;letter-spacing:1px">🟢 En vente (${v.length})</div>`+v.map(f).join(""):"")+(h.length?`<div style="font-size:11px;font-weight:700;color:#555;padding:12px 0 6px;text-transform:uppercase;letter-spacing:1px">✅ Ventes réussies (${h.length})</div>`+h.map(f).join(""):"")+(!v.length&&!h.length?'<div style="text-align:center;color:#aaa;padding:40px">Aucune vente pour le moment.</div>':"")}p.querySelectorAll("[data-buy]").forEach(v=>v.addEventListener("click",()=>rr(v.dataset.buy,r,e,t))),p.querySelectorAll("[data-cancel]").forEach(v=>v.addEventListener("click",()=>sr(v.dataset.cancel,e,t)))}}e.querySelectorAll(".mkt-tab").forEach(p=>{p.addEventListener("click",()=>{d=p.dataset.tab,e.querySelectorAll(".mkt-tab").forEach(g=>{const v=g===p;g.style.background=v?"var(--green)":"#fff",g.style.color=v?"#fff":"var(--gray-600)",g.style.borderColor=v?"var(--green)":"var(--gray-200)"}),x()})});let m;["flt-name","flt-club","flt-country","flt-job","flt-rarity","flt-note1","flt-note2"].forEach(p=>{var g;(g=document.getElementById(p))==null||g.addEventListener("input",()=>{clearTimeout(m),m=setTimeout(x,250)})}),x()}async function rr(e,t,i,n){const{state:a,toast:o,refreshProfile:r}=n,s=t.find(c=>c.id===e);if(!s)return;const d=s.price;if((a.profile.credits||0)<d){o("Crédits insuffisants","error");return}ar(s,async()=>{const{error:c}=await y.rpc("buy_market_card",{p_listing_id:e,p_buyer_id:a.profile.id});if(c){o("Erreur achat : "+c.message,"error");return}await r();const u=document.getElementById("nav-credits");u&&(u.textContent=`💰 ${(a.profile.credits||0).toLocaleString("fr")}`),o("✅ Carte achetée !","success"),await gi(i,n)})}function ar(e,t){var r;const i=(r=e.card)==null?void 0:r.player,n=i?`${i.firstname} ${i.surname_real}`:"cette carte",a=document.createElement("div");a.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9000;display:flex;align-items:center;justify-content:center;padding:20px",a.innerHTML=`
    <div style="background:#fff;border-radius:16px;padding:24px;max-width:320px;width:100%;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🛒</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Acheter ${n} ?</div>
      <div style="font-size:14px;color:#D4A017;font-weight:700;margin-bottom:18px">${e.price.toLocaleString("fr")} crédits</div>
      <div style="display:flex;gap:10px">
        <button id="buy-cancel" style="flex:1;padding:12px;border-radius:10px;border:1.5px solid #ddd;background:#fff;font-size:14px;font-weight:700;cursor:pointer;color:#555">Annuler</button>
        <button id="buy-ok" style="flex:1;padding:12px;border-radius:10px;border:none;background:var(--green);color:#fff;font-size:14px;font-weight:900;cursor:pointer">Confirmer</button>
      </div>
    </div>`,document.body.appendChild(a);const o=s=>{a.remove(),s&&t()};a.querySelector("#buy-cancel").addEventListener("click",()=>o(!1)),a.querySelector("#buy-ok").addEventListener("click",()=>o(!0)),a.addEventListener("click",s=>{s.target===a&&o(!1)})}async function sr(e,t,i){const{toast:n}=i,{data:a}=await y.from("market_listings").select("card_id").eq("id",e).single();if(await y.from("market_listings").update({status:"cancelled"}).eq("id",e),a!=null&&a.card_id){const{count:o}=await y.from("market_listings").select("id",{count:"exact",head:!0}).eq("card_id",a.card_id).eq("status","active");o||await y.from("cards").update({is_for_sale:!1,sale_price:null}).eq("id",a.card_id)}n("Annonce retirée","success"),gi(t,i)}async function dr(e,t){var c,u,f,x;const{state:i,navigate:n}=t,a=((u=(c=t==null?void 0:t.state)==null?void 0:c.params)==null?void 0:u.tab)||"global";e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:o},{data:r}]=await Promise.all([y.from("users").select("id,pseudo,club_name,trophies_top1,trophies_top2,trophies_top3,wins,level").order("trophies_top1",{ascending:!1}).limit(100),y.from("users").select("id,pseudo,club_name,mmr,rank_tier,ranked_wins,ranked_losses,ranked_draws,placement_matches").gte("placement_matches",1).order("mmr",{ascending:!1}).limit(100)]);let s=a;function d(){var p,g;const m=document.getElementById("rankings-list");if(m){if(s==="global"){const v=o||[];m.innerHTML=v.length>0?v.map((h,_)=>`
        <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${h.id===i.profile.id?"border:2px solid var(--yellow)":""}">
          <div style="width:32px;height:32px;border-radius:50%;background:${_<3?["#D4A017","#a0a0a0","#cd7f32"][_]:"var(--green)"};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${_<3?"16":"13"}px">${_<3?["🥇","🥈","🥉"][_]:_+1}</div>
          <div style="flex:1">
            <div style="font-weight:700">${h.pseudo}</div>
            <div style="font-size:11px;color:var(--gray-600)">${h.club_name}</div>
          </div>
          <div style="text-align:right;font-size:12px">
            <div>🏆${h.trophies_top1} 🥈${h.trophies_top2} 🥉${h.trophies_top3}</div>
            <div style="color:var(--gray-600)">${h.wins} V</div>
          </div>
        </div>
      `).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun manager.</div>'}else{const v=r||[];m.innerHTML=v.length>0?v.map((h,_)=>{const T=ri(h.mmr??1e3),b=(h.ranked_wins||0)+(h.ranked_losses||0)+(h.ranked_draws||0),N=b>0?Math.round((h.ranked_wins||0)/b*100):0,D=h.id===i.profile.id,Z=(h.placement_matches||0)<10;return`
          <div class="card-panel" style="display:flex;align-items:center;gap:12px;padding:12px;${D?"border:2px solid var(--yellow)":""}">
            <div style="width:32px;height:32px;border-radius:50%;background:${_<3?["#D4A017","#a0a0a0","#cd7f32"][_]:"rgba(255,255,255,0.08)"};color:${_<3?"#000":"#fff"};display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0;font-size:${_<3?"16":"13"}px">${_<3?["🥇","🥈","🥉"][_]:_+1}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;display:flex;align-items:center;gap:6px">
                <span>${T.emoji}</span>
                <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.pseudo}</span>
              </div>
              <div style="font-size:11px;color:var(--gray-600)">${h.club_name} · ${T.label}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:20px">${Z?"❓":T.emoji}</div>
              <div style="font-size:11px;font-weight:700;color:${T.color}">${Z?"Placement":T.label}</div>
              ${Z?"":`<div style="font-size:10px;color:var(--gray-600)">${N}% WR</div>`}
            </div>
          </div>`}).join(""):'<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun joueur classé.</div>'}(p=document.getElementById("tab-global"))!=null&&p.style&&(document.getElementById("tab-global").style.cssText=l(s==="global")),(g=document.getElementById("tab-ranked"))!=null&&g.style&&(document.getElementById("tab-ranked").style.cssText=l(s==="ranked"))}}const l=m=>`flex:1;padding:10px;border:none;border-radius:10px;cursor:pointer;font-size:13px;font-weight:${m?"900":"400"};background:${m?"var(--green)":"rgba(255,255,255,0.06)"};color:${m?"#fff":"var(--gray-600)"};transition:all 0.2s`;e.innerHTML=`
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
  </div>`,d(),(f=document.getElementById("tab-global"))==null||f.addEventListener("click",()=>{s="global",d()}),(x=document.getElementById("tab-ranked"))==null||x.addEventListener("click",()=>{s="ranked",d()})}async function lr(e,t){var N,D,Z,O;const{state:i,navigate:n,toast:a}=t,o=i.profile;e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const[{data:r},{data:s}]=await Promise.all([y.from("ranked_seasons").select("*").eq("is_active",!0).maybeSingle(),y.from("users").select("id,pseudo,club_name,mmr,mmr_deviation,mmr_volatility,rank_tier,placement_matches,ranked_wins,ranked_losses,ranked_draws").eq("id",o.id).single()]);if(!s){a("Erreur chargement profil","error"),n("home");return}if(!r){e.innerHTML=`
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
    </div>`,(N=document.getElementById("ranked-back"))==null||N.addEventListener("click",()=>n("home"));return}const d=s.mmr??1e3,l=s.mmr_deviation??350,c=s.mmr_volatility??.06,u=s.placement_matches??0,f=u<10,x=Math.max(0,10-u),m=ri(d),p=xn(d),g=Ht.findIndex(ne=>ne.id===m.id),v=Ht[g+1]||null,h={bronze:"linear-gradient(160deg,#3d1c00,#7a3e00)",silver:"linear-gradient(160deg,#1a1a2e,#3a3a5e)",gold:"linear-gradient(160deg,#1a1200,#4a3500)",platinum:"linear-gradient(160deg,#001a20,#003040)",diamond:"linear-gradient(160deg,#001030,#1a2860)",master:"linear-gradient(160deg,#1a0030,#3d0070)"},_=(s.ranked_wins||0)+(s.ranked_losses||0)+(s.ranked_draws||0),T=_>0?Math.round((s.ranked_wins||0)/_*100):0,b=Ht.map(ne=>`
    <div style="display:flex;flex-direction:column;align-items:center;gap:2px;opacity:${m.id===ne.id?1:.35};
      transform:${m.id===ne.id?"scale(1.15)":"scale(1)"};transition:all 0.3s">
      <div style="font-size:${m.id===ne.id?"28px":"20px"}">${ne.emoji}</div>
      <div style="font-size:9px;color:${ne.color};font-weight:${m.id===ne.id?"900":"400"};letter-spacing:0.5px">${ne.label.toUpperCase()}</div>
    </div>
  `).join("");e.innerHTML=`
  <div style="min-height:100%;background:${h[m.id]};padding:16px;overflow-y:auto;display:flex;flex-direction:column;gap:16px">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px">
      <button id="ranked-back" style="background:rgba(255,255,255,0.1);border:none;border-radius:10px;padding:8px 12px;color:#fff;font-size:15px;cursor:pointer">←</button>
      <div style="flex:1;text-align:center;font-size:16px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase">MODE RANKED</div>
    </div>

    <!-- Bandeau tier -->
    <div style="background:rgba(0,0,0,0.35);border-radius:20px;padding:20px 16px;text-align:center;border:2px solid ${m.color}40">
      <div style="font-size:52px;margin-bottom:4px">${m.emoji}</div>
      <div style="font-size:22px;font-weight:900;color:${m.color};letter-spacing:3px;text-transform:uppercase">${m.label}</div>
    </div>

    <!-- Progression bar -->
    ${m.id!=="master"?`
    <div style="background:rgba(0,0,0,0.3);border-radius:12px;padding:12px 16px">
      <div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px">
        <span>${m.emoji} ${m.label}</span>
        ${v?`<span>${v.emoji} ${v.label}</span>`:""}
      </div>
      <div style="background:rgba(255,255,255,0.1);border-radius:6px;height:10px;overflow:hidden">
        <div style="height:100%;width:${p}%;background:linear-gradient(90deg,${m.color},${m.color}aa);border-radius:6px;transition:width 0.8s ease"></div>
      </div>
      <div style="text-align:center;font-size:11px;color:rgba(255,255,255,0.4);margin-top:4px">${p}% vers ${v?v.label:"Maître"}</div>
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
        <div style="font-size:20px;font-weight:900;color:#D4A017">${T}%</div>
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
        background:linear-gradient(135deg,${m.color},${m.color}99);
        color:#000;font-size:18px;font-weight:900;cursor:pointer;letter-spacing:1px;
        box-shadow:0 4px 20px ${m.color}60;text-transform:uppercase">
        ⚽ Jouer en Ranked
      </button>
      <button id="ranked-leaderboard-btn" style="width:100%;padding:12px;border-radius:12px;border:1.5px solid rgba(255,255,255,0.2);
        background:transparent;color:rgba(255,255,255,0.7);font-size:14px;font-weight:600;cursor:pointer">
        🏆 Classement Ranked
      </button>
    </div>
  </div>`,(D=document.getElementById("ranked-back"))==null||D.addEventListener("click",()=>n("home")),(Z=document.getElementById("ranked-leaderboard-btn"))==null||Z.addEventListener("click",()=>n("rankings",{tab:"ranked"})),(O=document.getElementById("ranked-play-btn"))==null||O.addEventListener("click",()=>{n("match",{matchMode:"ranked",rankedData:{mmr:d,rd:l,sigma:c,isPlacement:f}})})}async function cr(e,{state:t,navigate:i,toast:n}){const a=t.profile;if(!a)return;e.innerHTML='<div class="page" style="padding:40px;text-align:center;color:#aaa">⚽ Chargement...</div>';const{data:o}=await y.from("matches").select(`id,home_id,away_id,home_score,away_score,status,mode,winner_id,created_at,played_at,
      home:users!home_id(pseudo,club_name),
      away:users!away_id(pseudo,club_name)`).or(`home_id.eq.${a.id},away_id.eq.${a.id}`).order("created_at",{ascending:!1}).limit(50),r={vs_ai_easy:"IA Facile",vs_ai_medium:"IA Moyen",vs_ai_hard:"IA Difficile",vs_ai_club:"IA Club",friend_challenge:"Défi ami",championship:"Championnat",vs_random:"Match Random"},s=(o||[]).filter(c=>c.status==="finished"),d=(o||[]).filter(c=>c.status==="in_progress");function l(c){const u=c.home_id===a.id;u?c.home_score:c.away_score,u?c.away_score:c.home_score;const f=c.winner_id===a.id,x=c.home_score===c.away_score&&c.status==="finished",m=c.status!=="finished"?"…":x?"N":f?"V":"D",p=c.status!=="finished"||x?"#888":f?"#1A6B3C":"#c0392b";let g=r[c.mode]||c.mode;c.away_id===null&&!g.startsWith("IA")&&(g="IA");const h=c.home_id===a.id?c.away:c.home;let _;c.away_id===null?_=g:h?_=`${h.club_name||h.pseudo} (${h.pseudo})`:_="Adversaire";let T="";c.status==="in_progress"&&Date.now()-new Date(c.created_at).getTime()>3600*1e3&&(T=' <span style="color:#e67e22;font-weight:700">(VAR en cours)</span>');const b=new Date(c.created_at),N=b.toLocaleDateString("fr",{day:"numeric",month:"short"})+" "+b.toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}),D=c.status==="finished"?`${c.home_score} - ${c.away_score}`:`${c.home_score||0} - ${c.away_score||0}`;return`<div style="display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid var(--gray-200)">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${_}${T}</div>
        <div style="font-size:11px;color:var(--gray-600)">${g} · ${N}${c.status==="in_progress"?" · en cours":""}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;font-weight:700">${D}</span>
        <span style="background:${p};color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900">${m}</span>
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
          ${d.map(l).join("")}
        </div>`:""}

      ${s.length>0?`
        <div class="section-title">Terminés</div>
        <div class="card-panel" style="padding:0">
          ${s.map(l).join("")}
        </div>`:""}

      ${(o||[]).length===0?`<div style="text-align:center;color:var(--gray-600);padding:40px">Aucun match joué pour l'instant</div>`:""}
    </div>
  </div>`}bn(vn);const he={user:null,profile:null,page:"home",params:{}};function lt(e,t="info",i=3e3){const n=document.getElementById("toast");n&&(n.textContent=e,n.className=`show ${t}`,clearTimeout(n._t),n._t=setTimeout(()=>{n.className=""},i))}function pr(e,t,i=""){document.getElementById("modal-title").textContent=e,document.getElementById("modal-body").innerHTML=t,document.getElementById("modal-footer").innerHTML=i,document.getElementById("modal-overlay").classList.remove("hidden")}function ii(){document.getElementById("modal-overlay").classList.add("hidden")}async function bt(){if(!he.user)return;const{data:e}=await y.from("users").select("*").eq("id",he.user.id).single();e&&(he.profile=e)}function vt(e,t={}){he.page=e,he.params=t,dn()}async function dn(){var n,a,o,r;const e=document.getElementById("page-content");if(!e)return;document.querySelectorAll(".bottom-nav a").forEach(s=>{s.classList.toggle("active",s.dataset.page===he.page)});const t=document.getElementById("nav-credits");t&&he.profile&&(t.textContent=`💰 ${(he.profile.credits||0).toLocaleString("fr")}`);const i={state:he,navigate:vt,toast:lt,openModal:pr,closeModal:ii,refreshProfile:bt};switch(e.innerHTML='<div style="padding:40px;text-align:center;color:#aaa">⚽</div>',he.page){case"home":await Ti(e,i);break;case"collection":await Un(e,i);break;case"decks":await Xt(e,i);break;case"boosters":await io(e,i);break;case"ranked":await lr(e,i);break;case"match":{const s=he.params&&he.params.matchMode||"vs_ai_easy";s==="random"?await ei(e,i,!1):s==="ranked"?await ei(e,i,!0):s==="friend"?await qo(e,i,(n=he.params)==null?void 0:n.friendId,(a=he.params)==null?void 0:a.friendName):s==="mini-league"?await qi(e,i,(o=he.params)==null?void 0:o.mlMatchId,(r=he.params)==null?void 0:r.leagueId):await mo(e,i);break}case"market":await or(e,i);break;case"rankings":await dr(e,i);break;case"matches":await cr(e,i);break;case"friends":await zn(e,i);break;case"mini-league":await Po(e,i);break;case"match-mini-league":{const s=he.params||{};await qi(e,i,s.mlMatchId,s.leagueId);break}default:await Ti(e,i)}}function ur(){var n;const e=document.getElementById("app"),t=he.profile;if(!t)return;const i="/icons/";e.innerHTML=`
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
  `,document.querySelectorAll(".bottom-nav a").forEach(a=>{a.addEventListener("click",o=>{o.preventDefault(),vt(a.dataset.page)})}),document.getElementById("nav-logo").addEventListener("click",()=>vt("home")),document.getElementById("nav-credits").addEventListener("click",()=>vt("boosters")),(n=document.getElementById("journal-btn"))==null||n.addEventListener("click",()=>fr())}async function fr(){const{data:e}=await y.from("patch_notes").select("*").eq("is_published",!0).order("published_at",{ascending:!1}).limit(20),t=document.createElement("div");t.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";const i=(e||[]).map(n=>{const a=new Date(n.published_at).toLocaleDateString("fr-FR",{day:"2-digit",month:"long",year:"numeric"});return`<div style="padding:14px 0;border-bottom:1px solid #f0f0f0">
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
    </div>`,document.body.appendChild(t),t.querySelector("#journal-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",n=>{n.target===t&&t.remove()})}async function gr(){document.documentElement.setAttribute("data-theme","light"),document.getElementById("modal-overlay").addEventListener("click",i=>{i.target===i.currentTarget&&ii()}),document.getElementById("modal-close").addEventListener("click",ii);const{data:{session:e}}=await y.auth.getSession();if(!e){Di(),Ei(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:lt});return}he.user=e.user,await bt(),Di();try{const{data:i}=await y.from("formation_links_overrides").select("formation, links"),n={};(i||[]).forEach(a=>{n[a.formation]=a.links}),yn(n)}catch(i){console.warn("Impossible de charger les overrides de formation:",i)}if(!he.profile){_n(document.getElementById("app"),{state:he,navigate:async()=>{await bt(),Wt()},toast:lt,refreshProfile:bt});return}const t=Array.isArray(he.profile.pending_boosters)?he.profile.pending_boosters:[];if(!he.profile.onboarding_done&&t.length>0){po(document.getElementById("app"),{state:he,navigate:()=>Wt(),toast:lt,refreshProfile:bt});return}Wt(),setTimeout(()=>nr(he.profile,vt,lt),800),y.auth.onAuthStateChange(async(i,n)=>{i==="SIGNED_OUT"&&(he.user=null,he.profile=null,document.getElementById("app").innerHTML="",Ei(document.getElementById("app"),{navigate:()=>window.location.reload(),toast:lt}))})}function mr(){return Math.round(window.visualViewport&&window.visualViewport.height||window.innerHeight)}function Rt(){const e=document.getElementById("app");e&&(e.style.height=mr()+"px")}window.addEventListener("resize",Rt);window.addEventListener("orientationchange",()=>setTimeout(Rt,150));window.visualViewport&&window.visualViewport.addEventListener("resize",Rt);function Wt(){const e=()=>{var i;(i=he.user)!=null&&i.id&&y.from("users").update({last_seen_at:new Date().toISOString()}).eq("id",he.user.id).then(()=>{})};e(),window._presencePingInterval&&clearInterval(window._presencePingInterval),window._presencePingInterval=setInterval(e,6e4);const t=document.getElementById("app");t.style.display="flex",t.style.flexDirection="column",Rt(),ur(),dn()}function Di(){const e=document.getElementById("app-loader"),t=document.getElementById("app");t&&(t.style.display=""),e&&(e.classList.add("zoom-out"),setTimeout(()=>e.style.display="none",500))}function ln(e){var n;const t=document.getElementById("app-loader");if(t&&(t.style.display="none"),document.getElementById("boot-error"))return;const i=document.createElement("div");i.id="boot-error",i.style.cssText="position:fixed;inset:0;background:#0a1628;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;gap:16px;color:#fff;padding:24px;text-align:center",i.innerHTML=`
    <div style="font-size:42px">📡</div>
    <div style="font-size:18px;font-weight:900">Connexion impossible</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.6);max-width:280px">${e||"Le chargement a échoué. Vérifie ta connexion et réessaie."}</div>
    <button id="boot-retry" style="margin-top:8px;padding:12px 30px;border-radius:10px;border:none;background:#1A6B3C;color:#fff;font-size:15px;font-weight:700;cursor:pointer">Réessayer</button>`,document.body.appendChild(i),(n=document.getElementById("boot-retry"))==null||n.addEventListener("click",()=>window.location.reload())}gr().catch(e=>{console.error("Échec du démarrage:",e),ln()});setTimeout(()=>{const e=document.getElementById("app-loader");e&&e.style.display!=="none"&&!e.classList.contains("zoom-out")&&!document.getElementById("boot-error")&&ln("Le serveur met trop de temps à répondre.")},12e3);
